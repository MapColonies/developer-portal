#!/usr/bin/env python3
"""Mechanical helpers shared by the review-docs and generate-docs skills.

Claude does the judgment (discovery, flow vs examples, value chaining, verdicts);
this script only does what must be deterministic and protocol-agnostic: parse
docs, inspect deployments, manage env access, run one request safely, and reduce
any XML/JSON to its structure so two sources can be compared.
"""
import argparse
import base64
import json
import os
import re
import shlex
import signal
import socket
import ssl
import struct
import subprocess
import sys
import textwrap
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

import yaml

REPO = Path(__file__).resolve().parents[3]
# Env configs hold internal hostnames and must stay out of this public repo.
ENVS_DIR = Path.home() / ".claude" / "review-envs"
RUNS_DIR = REPO / ".claude" / "review-runs"

# Docs use several styles: {X_URL}, <X_URL>, <X-URL>, <geocoding_url>, <x-api-key>, [COORD1_X].
# Lowercase angle forms need a `-`/`_` so plain XML elements (`<name>`) don't count.
PLACEHOLDER_RE = re.compile(r"\{[A-Za-z0-9_]+\}|<[A-Z0-9][A-Z0-9 _-]*>|<[a-z][a-z0-9]*[_-][a-z0-9_-]+>|<token>|\[[A-Z0-9_]+\]")
URL_START_RE = re.compile(r"^(?:https?://|%s)" % PLACEHOLDER_RE.pattern)
TOKEN_PH_RE = re.compile(r"<token>|\{token\}", re.I)
STEP_RE = re.compile(r"\bstep\s*(\d+(?:\.\d+)?)", re.I)
READ_OPS = re.compile(
    r"\b(GetRecords|GetRecordById|DescribeRecord|GetCapabilities|DescribeCoverage|GetCoverage|"
    r"DescribeFeatureType|GetFeature|GetMap|GetTile|GetFeatureInfo|GetDomain|GetPropertyValue|"
    r"ListStoredQueries|DescribeStoredQueries|GetLegendGraphic)\b",
    re.I,
)
MAX_BODY = 5 * 1024 * 1024



def parse_curl(text):
    """Parse a curl command (possibly multi-line) into method/url/headers/body."""
    joined = re.sub(r"\\\r?\n", " ", text.strip())
    try:
        argv = shlex.split(joined)
    except ValueError as e:
        return {"error": f"unparseable curl: {e}"}
    if not argv or argv[0] != "curl":
        return None
    req = {"method": None, "url": None, "headers": {}, "body": None}
    it = iter(argv[1:])
    for a in it:
        if a in ("-X", "--request"):
            req["method"] = next(it, None)
        elif a in ("-H", "--header"):
            k, _, v = next(it, "").partition(":")
            req["headers"][k.strip()] = v.strip()
        elif a in ("-d", "--data", "--data-raw", "--data-binary"):
            req["body"] = next(it, None)
        elif a in ("-o", "--output", "-u", "--user", "-w", "--write-out"):
            next(it, None)
        elif not a.startswith("-") and req["url"] is None:
            req["url"] = a
    req["method"] = req["method"] or ("POST" if req["body"] is not None else "GET")
    return req


def as_url(line):
    """`line` as a URL if it is one (quotes/backticks around it allowed), else None."""
    t = line.strip().strip("`'\"")
    bare = PLACEHOLDER_RE.sub("X", t)
    # `|` and `…` only appear in syntax templates (`osm_ids=[N|W|R]<value>,…`), not requests.
    if not URL_START_RE.match(t) or t.startswith(("<token>", "[")) or re.search(r"[\s|…]", bare):
        return None
    return t


def bare_url_request(text):
    """A URL alone, possibly split one query parameter per line (as OGC KVP pages write it)."""
    lines = [l.strip() for l in text.strip().splitlines() if l.strip()]
    # A block holding only `<X_URL>` explains a placeholder ("Replace <X_URL> with ...").
    if len(lines) == 1 and PLACEHOLDER_RE.fullmatch(lines[0].strip("`'\"")):
        return None
    if lines and as_url(lines[0]) and not any(re.search(r"[\s|…]", PLACEHOLDER_RE.sub("X", l)) for l in lines):
        return {"method": "GET", "url": "".join(l.strip("`'\"") for l in lines), "headers": {}, "body": None}
    return None


def body_request(method, url, body):
    body = textwrap.dedent(body).strip() or None
    headers = {}
    if body:
        headers["Content-Type"] = "application/json" if body[:1] in "{[" else "application/xml"
    # Valhalla-style `.../route?json={}`: the JSON block is the query parameter, not a POST body.
    if body and url and re.search(r"=\{\}", url):
        compact = json.dumps(json.loads(body), separators=(",", ":")) if body[:1] in "{[" else body
        return {"method": "GET", "url": re.sub(r"=\{\}", "=" + urllib.parse.quote(compact), url, count=1),
                "headers": {}, "body": None}
    return {"method": method, "url": url, "headers": headers, "body": body}


def labeled_request(text):
    """Blocks written as `POST Request` / `url:` / <url> / `body (XML):` / <body>."""
    lines = text.strip().splitlines()
    m = lines and re.match(r"^(GET|POST|PUT|PATCH|DELETE)\s+request\s*:?\s*$", lines[0].strip(), re.I)
    if not m:
        return None
    url, body, i = None, [], 1
    while i < len(lines):
        l = lines[i].strip()
        if url is None and as_url(l):
            parts = [as_url(l)]
            while i + 1 < len(lines) and lines[i + 1].strip() and " " not in lines[i + 1].strip() \
                    and not lines[i + 1].strip().startswith("<") and re.search(r"[?&]$", parts[-1]):
                i += 1
                parts.append(lines[i].strip())
            url = "".join(parts)
        elif url is None and not l or re.match(r"^(url|body[^:]*)\s*:?\s*$", l, re.I):
            pass
        else:
            body.append(lines[i])
        i += 1
    try:
        return body_request(m.group(1).upper(), url, "\n".join(body))
    except ValueError:
        return None


INLINE_CODE_RE = re.compile(r"`+([^`]+)`+")


def paths_in_code(code):
    """URLs, or paths (a `localhost:8002` style host is dropped: the env supplies the base)."""
    out = []
    for tok in code.split():
        tok = tok.strip("'\"")
        if as_url(tok):
            out.append(as_url(tok))
        elif re.match(r"^(?:[\w.-]+:\d+)?/[\w./{}?=&%-]*$", tok):
            out.append(tok[tok.index("/"):])
    return out


def endpoint_hint(prose):
    """The endpoint a body block is sent to, when only the prose above it names it: inline
    code (e.g. "make a `POST` request to `<X_URL>/csw`") or a URL alone on a line/block."""
    cands = []
    for line in prose.splitlines():
        if as_url(line):
            cands.append(as_url(line))
        for code in INLINE_CODE_RE.findall(line):
            cands += paths_in_code(code)
    if not cands:
        return None
    method = next(iter(re.findall(r"\b(GET|POST|PUT|PATCH|DELETE)\b", prose)), "POST")
    return method, cands[-1]


# Root elements of OGC request bodies; anything else near "request" prose is a sample/fragment.
XML_OPERATION_RE = re.compile(r"^(Get|Describe|Transaction|Lock|List|Harvest)")


def xml_root(text):
    text = re.sub(r"<\?.*?\?>|<!--.*?-->", "", text, flags=re.S)
    m = re.search(r"<([\w.-]+:)?([\w.-]+)", text)
    return m and m.group(2)


def labels_response(prose_line):
    # A short label ("Response:", "**Example response**"), not a sentence that ends in "response".
    return bool(re.fullmatch(r"(?:[\w-]+\s+){0,2}response\s*:?", prose_line.strip().strip("*_:").strip(), re.I))


def extract(md_path):
    text = Path(md_path).read_text()
    lines = text.splitlines()
    headings, blocks, tabs = [], [], []
    current_heading, current_tab, details_depth = None, None, 0
    i = 0
    while i < len(lines):
        line = lines[i]
        m = re.match(r"^(#{1,6})\s+(.*?)\s*(\{#([\w.-]+)\})?\s*$", line)
        if m:
            current_heading = {"line": i + 1, "level": len(m.group(1)), "title": m.group(2),
                               "anchor": m.group(4), "step": None}
            s = STEP_RE.search(m.group(2))
            if s:
                current_heading["step"] = s.group(1)
            headings.append(current_heading)
        t = re.search(r'<TabItem\s+value="([^"]+)"\s+label="([^"]+)"', line)
        if t:
            current_tab = t.group(2)
            tabs.append({"line": i + 1, "label": current_tab, "heading": current_heading and current_heading["title"]})
        if "</TabItem>" in line:
            current_tab = None
        details_depth = max(0, details_depth + len(re.findall(r"<details[\s>]", line)) - line.count("</details>"))
        f = re.match(r"^\s*(`{3,})\s*(\w*)(.*)$", line)
        if f and f.group(1) in f.group(3):  # ```one-line code``` is inline, not a block
            f = None
        if f:
            fence, lang, meta = f.group(1), f.group(2), f.group(3).strip()
            start = i + 1
            body = []
            i += 1
            # CommonMark: only a backtick line at least as long as the opener closes it.
            while i < len(lines) and not re.match(r"^\s*`{%d,}\s*$" % len(fence), lines[i]):
                body.append(lines[i])
                i += 1
            content = "\n".join(body)
            title = (re.search(r'title="([^"]*)"', meta) or [None, ""])[1].lower()
            prev = next((l for l in reversed(lines[:start - 1]) if l.strip()), "")
            is_response = ("response" in title or (details_depth > 0 and "request" not in title)
                           or labels_response(prev))
            block = {
                "line": start, "lang": lang, "meta": meta, "heading": current_heading and current_heading["title"],
                "step": current_heading and current_heading["step"], "tab": current_tab,
                "role": "example-response" if is_response else lang or "code",
                "placeholders": sorted(set(PLACEHOLDER_RE.findall(content))),
                "content": content,
            }
            req = None
            if not is_response:
                if content.lstrip().startswith("curl"):
                    req = parse_curl(content)
                else:
                    req = labeled_request(content) or bare_url_request(content)
                prose = "\n".join(lines[max(0, start - 7):start - 1])
                root = xml_root(content) or "" if lang == "xml" else ""
                is_operation = bool(XML_OPERATION_RE.match(root)) and not root.endswith("Response")
                # An OGC operation root (`csw:GetRecords`) is a request body however the prose words it.
                if not req and (is_operation or lang == "json" and re.search(r"request|body|payload", prose, re.I)):
                    hint = endpoint_hint(prose)
                    try:
                        req = body_request(*hint, content) if hint else None
                    except ValueError:
                        req = None
                    if req:
                        block["endpoint_from_prose"] = True
                    else:
                        # A body whose endpoint is given elsewhere on the page: Claude builds the request.
                        block["role"] = "request-body"
            if req and not req.get("error") and req.get("url"):
                block["role"] = "request"
                block["request"] = req
                block["safety"] = classify(req)
            if lang == "mermaid":
                block["role"] = "diagram"
                block["diagram_steps"] = sorted(set(STEP_RE.findall(content)))
            blocks.append(block)
        i += 1
    # A lone endpoint shown before/after "with the following body" is not itself a GET.
    body_urls = [b["request"]["url"] for b in blocks if b.get("endpoint_from_prose")]
    for b in blocks:
        r = b.get("request")
        if r and r["method"] == "GET" and "?" not in r["url"] and any(u.startswith(r["url"]) for u in body_urls):
            b["role"] = "endpoint"
            del b["request"], b["safety"]
    step_headings = [h for h in headings if h["step"]]
    return {
        "file": str(md_path),
        "title": next((l.split(":", 1)[1].strip() for l in lines[:15] if l.startswith("title:")), None),
        "kind_hint": "flow" if len(step_headings) >= 2 else "examples",
        "headings": headings,
        "tabs": tabs,
        "blocks": blocks,
    }



def classify(req, env=None):
    method = (req.get("method") or "GET").upper()
    url, body = req.get("url") or "", req.get("body") or ""
    if method in ("GET", "HEAD", "OPTIONS"):
        return "read"
    if method == "POST" and (READ_OPS.search(body[:2000]) or READ_OPS.search(url)):
        return "read"
    # JSON query APIs (routing, geocoding) take reads as POST; the env config lists them
    # explicitly because only a human can vouch that a path has no side effects.
    path = urllib.parse.urlsplit(url).path
    if method == "POST" and any(re.search(p, path) for p in (env or {}).get("read_posts") or []):
        return "read"
    return "write"



def oc(*args, retries=8):
    """oc with retries: some clusters intermittently answer 401 for a valid session."""
    out = None
    for _ in range(retries):
        out = subprocess.run(["oc", *args], capture_output=True, text=True)
        if "Unauthorized" not in out.stderr + out.stdout:
            break
        time.sleep(1)
    return out


def load_env(name):
    path = ENVS_DIR / f"{name}.yaml"
    if not path.exists():
        sys.exit(f"no env config {path}; run `env discover` first")
    return yaml.safe_load(path.read_text())


def token_for(env):
    src = env.get("token") or {}
    if "env" in src:
        return os.environ.get(src["env"])
    if "file" in src:
        p = Path(os.path.expanduser(src["file"]))
        return p.read_text().strip() if p.exists() else None
    return None


def cmd_env_discover(a):
    ns = a.namespace
    routes = filter_release(json.loads(oc("get", "routes", "-n", ns, "-o", "json").stdout or "{}").get("items", []), a.release)
    out = []
    for r in routes:
        conds = (r.get("status", {}).get("ingress") or [{}])[0].get("conditions") or [{}]
        out.append({
            "route": r["metadata"]["name"],
            "url": f"https://{r['spec']['host']}{r['spec'].get('path', '') or ''}",
            "service": r["spec"]["to"]["name"],
            "admitted": conds[0].get("status") == "True",
            "reason": conds[0].get("reason"),
        })
    print(json.dumps(out, indent=2))


def ns_of(env, e):
    # A flow can span namespaces (DEM terrain served to the 3D catalog), so an entry may name its own.
    return e.get("namespace") or env["namespace"]


def cmd_env_check(a):
    env = load_env(a.env)
    findings = []
    who = oc("whoami")
    if who.returncode:
        print(json.dumps([{"kind": "env", "issue": "not logged in to cluster", "detail": who.stderr.strip()}]))
        return
    routes_by_ns = {}
    for ph, e in (env.get("placeholders") or {}).items():
        ns = ns_of(env, e)
        if ns not in routes_by_ns:
            routes_by_ns[ns] = {r["metadata"]["name"]: r for r in
                                json.loads(oc("get", "routes", "-n", ns, "-o", "json").stdout or "{}").get("items", [])}
        routes = routes_by_ns[ns]
        r = routes.get(e.get("route")) if e.get("route") else None
        if e.get("route") and not r:
            findings.append({"kind": "env", "placeholder": ph, "issue": f"route {e['route']} missing in {ns}"})
        elif r:
            cond = (r.get("status", {}).get("ingress") or [{}])[0].get("conditions") or [{}]
            if cond[0].get("status") != "True":
                claimers = [n for n, o in routes.items() if n != e["route"]
                            and o["spec"]["host"] == r["spec"]["host"] and o["spec"].get("path") == r["spec"].get("path")]
                findings.append({"kind": "env", "placeholder": ph,
                                 "issue": f"route {e['route']} not admitted ({cond[0].get('reason')})",
                                 "claimed_by": claimers})
        svc = (e.get("forward") or {}).get("service")
        if svc:
            ep = json.loads(oc("get", "endpoints", svc, "-n", ns, "-o", "json").stdout or "{}")
            ready = sum(len(s.get("addresses") or []) for s in ep.get("subsets") or [])
            if not ready:
                findings.append({"kind": "env", "placeholder": ph, "issue": f"service {svc} has no ready endpoints"})
    if not token_for(env):
        findings.append({"kind": "env", "issue": "token not available", "source": env.get("token")})
    print(json.dumps(findings, indent=2))


def port_open(p):
    with socket.socket() as s:
        return s.connect_ex(("127.0.0.1", p)) == 0


def cmd_env_forward(a):
    env = load_env(a.env)
    RUNS_DIR.mkdir(parents=True, exist_ok=True)
    pidfile = RUNS_DIR / f"{a.env}.forwards.json"
    pids = json.loads(pidfile.read_text()) if pidfile.exists() else {}
    status = {}
    for ph, e in (env.get("placeholders") or {}).items():
        f = e.get("forward")
        if not f or (a.only and ph not in a.only):
            continue
        lp = f["local_port"]
        if port_open(lp):
            status[ph] = f"already listening on {lp}"
            continue
        ok = False
        for _ in range(10):
            p = subprocess.Popen(["oc", "port-forward", "-n", ns_of(env, e), f"svc/{f['service']}", f"{lp}:{f['port']}"],
                                 stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, start_new_session=True)
            for _ in range(10):
                if port_open(lp):
                    ok = True
                    break
                if p.poll() is not None:
                    break
                time.sleep(0.5)
            if ok:
                pids[ph] = p.pid
                break
            p.kill()
        status[ph] = f"forwarded on {lp}" if ok else "FAILED"
    pidfile.write_text(json.dumps(pids))
    print(json.dumps(status, indent=2))


def cmd_env_stop(a):
    pidfile = RUNS_DIR / f"{a.env}.forwards.json"
    if not pidfile.exists():
        return
    for pid in json.loads(pidfile.read_text()).values():
        try:
            os.kill(pid, signal.SIGTERM)
        except ProcessLookupError:
            pass
    pidfile.unlink()


def norm_ph(p):
    return re.sub(r"[-_ ]", "_", p.strip("{}<>[]")).upper()


def resolve_url(env, url, forward=True):
    """Fill entry-point placeholders and route forwarded prefixes to localhost.

    Placeholder spelling varies between pages (`{RASTER_CATALOG_SERVICE_URL}`,
    `<RASTER-CATALOG-SERVICE_URL>`), so names match case- and `-`/`_`-insensitively,
    plus any `aliases` the env config lists (e.g. `geocoding_url`)."""
    names = {}
    for ph, e in (env.get("placeholders") or {}).items():
        for n in [ph, *(e.get("aliases") or [])]:
            names[norm_ph(n)] = e["url"].rstrip("/")
    url = PLACEHOLDER_RE.sub(lambda m: names.get(norm_ph(m.group(0)), m.group(0)), url)
    for e in (env.get("placeholders") or {}).values():
        f = e.get("forward")
        if forward and f and e.get("access") == "forward" and url.startswith(e["url"].rstrip("/")):
            url = f"http://127.0.0.1:{f['local_port']}{f.get('path', '')}" + url[len(e["url"].rstrip("/")):]
    return url



MAGIC = [(b"\x89PNG", "png"), (b"\xff\xd8\xff", "jpeg"), (b"\x1f\x8b", "gzip"), (b"PK\x03\x04", "zip"),
         (b"GIF8", "gif"), (b"RIFF", "riff"), (b"%PDF", "pdf"), (b"glTF", "glb"), (b"b3dm", "b3dm")]


def summarize(body, ctype):
    s = {}
    head = body[:4]
    if head[:2] in (b"II", b"MM"):
        s["tiff"] = tiff_info(body)
        return s
    kind = next((k for m, k in MAGIC if body.startswith(m)), None)
    if kind:
        s["binary"] = kind
        if kind == "png" and len(body) >= 24:
            s["width"], s["height"] = struct.unpack(">II", body[16:24])
        return s
    txt = body[:MAX_BODY].decode("utf-8", "replace")
    if "xml" in (ctype or "") or txt.lstrip().startswith("<?xml") or txt.lstrip().startswith("<"):
        s["root"] = (re.search(r"<([\w:]+)[\s>]", re.sub(r"<\?.*?\?>|<!--.*?-->", "", txt, flags=re.S)) or [None, None])[1]
        s["exceptions"] = [x.strip() for x in re.findall(r"(?:ExceptionText|ServiceException)[^>]*>\s*([^<]{0,300})", txt) if x.strip()]
        s.update({k: v for k, v in re.findall(r'(numberOfRecordsMatched|numberOfRecordsReturned|nextRecord)="(\d+)"', txt)})
        s["links"] = [{"scheme": sc, "name": n, "url": u.strip()} for sc, n, u in
                      re.findall(r'<\w+:links[^>]*scheme="([^"]*)"[^>]*name="([^"]*)"[^>]*>([^<]*)<', txt)][:20]
        s["element_names"] = sorted(set(re.findall(r"<(mc:[A-Za-z0-9]+)[\s>]", txt)))
        # What a capabilities document offers (coverages, layers, feature types, tile matrix sets):
        # the next step of a flow picks one of these.
        ids = {}
        for tag, val in re.findall(r"<((?:\w+:)?(?:Identifier|CoverageId|Name|TypeName))>\s*([^<]{1,200}?)\s*</", txt):
            ids.setdefault(tag, [])
            if val not in ids[tag] and len(ids[tag]) < 50:
                ids[tag].append(val)
        s["identifiers"] = ids
        s["hrefs"] = sorted(set(re.findall(r'xlink:href="(https?://[^/"]+)', txt)))
        s = {k: v for k, v in s.items() if v not in ([], None)}
    elif "json" in (ctype or "") or txt.lstrip()[:1] in ("{", "["):
        try:
            j = json.loads(txt)
        except ValueError:
            s["text"] = txt[:300]
            return s
        s["json_keys"] = list(j)[:40] if isinstance(j, dict) else f"array[{len(j)}]"
        feats = j.get("features") if isinstance(j, dict) else None
        if isinstance(feats, list):
            s["features"] = len(feats)
            s["geometry_types"] = sorted({(f.get("geometry") or {}).get("type") for f in feats if isinstance(f, dict)} - {None})
            s["property_keys"] = sorted({k for f in feats[:20] if isinstance(f, dict) for k in (f.get("properties") or {})})[:40]
        if isinstance(j, dict) and isinstance(j.get("paths"), dict):
            s["openapi_paths"] = sorted(j["paths"])[:80]
    else:
        s["text"] = txt[:300]
    return s


def tiff_info(b):
    # With `call --range` the body is a prefix; offsets can point past it, so report what fits.
    if len(b) < 8:
        return {"truncated": True}
    e = ">" if b[:2] == b"MM" else "<"
    off = struct.unpack(e + "I", b[4:8])[0]
    if off + 2 > len(b):
        return {"truncated": True}
    n = struct.unpack(e + "H", b[off:off + 2])[0]
    tags = {256: "width", 257: "height", 258: "bits", 339: "sample_format"}
    out = {}
    for k in range(n):
        p = off + 2 + 12 * k
        if p + 12 > len(b):
            out["truncated"] = True
            break
        t, ty, c, v = struct.unpack(e + "HHI4s", b[p:p + 12])
        if t in tags:
            out[tags[t]] = struct.unpack(e + ("H" if ty == 3 else "I"), v[:2] if ty == 3 else v)[0]
        if t == 34735:
            o = struct.unpack(e + "I", v)[0]
            if o + 2 * c > len(b):
                out["truncated"] = True
                continue
            keys = struct.unpack(e + f"{c}H", b[o:o + 2 * c])
            out["epsg"] = [keys[j + 3] for j in range(4, len(keys), 4) if keys[j] in (2048, 3072)]
    return out


def cmd_call(a):
    env = load_env(a.env)
    if a.doc:
        block = next((b for b in extract(a.doc)["blocks"] if b["line"] == a.block), None)
        req = block and block.get("request")
    elif a.request:
        req = json.loads(Path(a.request).read_text())
    else:
        req = parse_curl(sys.stdin.read())
    if not req or req.get("error"):
        sys.exit(json.dumps({"error": "could not parse request", "detail": req}))
    # Literal substitutions carry values chained from earlier responses (or illustrative
    # values swapped for real ones) without editing the doc.
    for sub in a.sub or []:
        # `OLD=>NEW` when OLD itself contains `=` (e.g. `coverageId=x=>coverageId=y`).
        old, _, new = sub.partition("=>") if "=>" in sub else sub.partition("=")
        req["url"] = req["url"].replace(old, new)
        if req.get("body"):
            req["body"] = req["body"].replace(old, new)
    safety = classify(req, env)
    if safety == "write" and env.get("read_only"):
        sys.exit(json.dumps({"error": "env is read_only; writes are never sent", "request": req}))
    if safety == "write" and not a.allow_write:
        print(json.dumps({"skipped": True, "safety": "write", "request": req}))
        return
    tok = None if getattr(a, "no_auth", False) else token_for(env)
    if req["url"].startswith("/"):
        if not a.base:
            sys.exit(json.dumps({"error": "relative url; pass --base <placeholder or url>", "url": req["url"]}))
        req["url"] = a.base.rstrip("/") + req["url"]
    url = resolve_url(env, req["url"], forward=not getattr(a, "no_forward", False))
    # The token goes only to the env's own services, never to a third-party example host.
    err = target_error(env, url)
    if err:
        sys.exit(json.dumps(err))
    headers = apply_auth(env, tok, req.get("headers") or {})
    tsrc = env.get("token") or {}
    if tok:
        url = TOKEN_PH_RE.sub(tok, url)
        # `header` alone replaces the query param; naming both sends both (prod mixes services).
        if (tsrc.get("param") or not tsrc.get("header")) and f"{tsrc.get('param', 'token')}=" not in url:
            url += ("&" if "?" in url else "?") + f"{tsrc.get('param', 'token')}={urllib.parse.quote(tok)}"
    # `<NAME>` in a body is usually an XML element (e.g. `<BBOX>`), so only `{X}`/`[X]` count there.
    leftover = [p for p in PLACEHOLDER_RE.findall(url) if not TOKEN_PH_RE.fullmatch(p)] + \
        [p for p in PLACEHOLDER_RE.findall(req.get("body") or "") if not p.startswith("<")] + \
        [p for v in headers.values() for p in PLACEHOLDER_RE.findall(v)]
    if leftover:
        sys.exit(json.dumps({"error": "unfilled placeholders", "placeholders": leftover}))
    method = "HEAD" if a.head else req["method"]
    if a.range:
        headers["Range"] = f"bytes=0-{a.range - 1}"
    data = req["body"].encode() if req.get("body") is not None and method != "HEAD" else None
    # `ca_file`: a bundle for a server that omits its intermediate cert (verified, unlike `insecure`).
    ctx = ssl._create_unverified_context() if env.get("insecure") else \
        ssl.create_default_context(cafile=os.path.expanduser(env["ca_file"])) if env.get("ca_file") else None
    started = time.time()
    try:
        resp = urllib.request.urlopen(urllib.request.Request(url, data=data, headers=headers, method=method),
                                      timeout=a.timeout, context=ctx)
        status, rh = resp.status, resp.headers
        body = resp.read(MAX_BODY + 1)
    except urllib.error.HTTPError as e:
        status, rh, body = e.code, e.headers, e.read(MAX_BODY + 1)
    except Exception as e:  # network-level failure is itself a finding
        print(json.dumps({"error": type(e).__name__, "detail": str(e), "url": redact(url, tok)}))
        return
    RUNS_DIR.mkdir(parents=True, exist_ok=True)
    saved = RUNS_DIR / f"resp-{int(started * 1000)}"
    # Some services echo the caller's token (e.g. into a `next` link); never keep it on disk.
    saved.write_bytes(redact_bytes(body[:MAX_BODY], tok))
    print(json.dumps({
        "url": redact(url, tok), "method": method, "safety": safety, "status": status,
        "content_type": rh.get("Content-Type"), "content_length": rh.get("Content-Length"),
        "bytes_read": len(body[:MAX_BODY]), "truncated": len(body) > MAX_BODY,
        "elapsed_s": round(time.time() - started, 2), "saved": str(saved),
        "headers": {k: redact(v, tok) for k, v in rh.items()},
        "summary": summarize(body, rh.get("Content-Type")),
    }, indent=2))


def env_hosts(env):
    hosts = {h.lower() for h in env.get("hosts") or []}
    for e in (env.get("placeholders") or {}).values():
        hosts.add((urllib.parse.urlsplit(e["url"]).hostname or "").lower())
    return hosts


def target_error(env, url):
    parts = urllib.parse.urlsplit(url)
    host = (parts.hostname or "").lower()
    if host in ("localhost", "127.0.0.1", "::1"):
        # Docs hardcode `localhost:8080` examples; only this env's own port-forwards are ours.
        ports = {(e.get("forward") or {}).get("local_port") for e in (env.get("placeholders") or {}).values()}
        if parts.port not in ports - {None}:
            return {"error": "localhost is reachable only through this env's forwards", "host": host, "port": parts.port}
    elif host and host not in env_hosts(env):
        return {"error": "host is not in this env; add it to `hosts` if it is ours", "host": host}
    return None


def apply_auth(env, tok, headers):
    """Token header (`token: {header: x-api-key}`) and env-wide `headers`, filling doc
    placeholders like `<x-api-key>` / `<x-user-id>` whose name matches a header."""
    extra = {k.lower(): v for k, v in (env.get("headers") or {}).items()}
    theader = (env.get("token") or {}).get("header")
    if tok and theader:
        extra[theader.lower()] = tok
    out = {}
    for k, v in headers.items():
        if tok:
            v = TOKEN_PH_RE.sub(tok, v)
        m = PLACEHOLDER_RE.fullmatch(v.strip())
        key = norm_ph(m.group(0)).lower().replace("_", "-") if m else None
        out[k] = extra.get(key) or extra.get(k.lower()) or v if m else v
    for k, v in extra.items():
        if k not in {h.lower() for h in out}:
            out[k] = v
    return out


def redact_bytes(b, tok):
    if not tok:
        return b
    for t in (tok, urllib.parse.quote(tok)):
        b = b.replace(t.encode(), b"<token>")
    return b


def redact(s, tok):
    return s.replace(tok, "<token>").replace(urllib.parse.quote(tok), "<token>") if tok else s



TAG_RE = re.compile(r"<(/?)([A-Za-z_][\w:.-]*)((?:\s+[^<>]*?)?)(/?)>")
ATTR_RE = re.compile(r"([A-Za-z_][\w:.-]*)\s*=")


def xml_shape(text):
    """Element/attribute paths of an XML document, values dropped.

    Regex-based on purpose: doc examples are often abbreviated with `...` and
    wouldn't parse, and namespace prefixes must be kept as written.
    """
    text = re.sub(r"<\?.*?\?>|<!--.*?-->|<!\[CDATA\[.*?\]\]>|<!DOCTYPE[^>]*>", "", text, flags=re.S)
    paths, stack = set(), []
    for close, name, attrs, selfclose in TAG_RE.findall(text):
        if close:
            if name in stack:
                while stack and stack.pop() != name:
                    pass
            continue
        stack.append(name)
        path = "/".join(stack)
        paths.add(path)
        for a in ATTR_RE.findall(attrs):
            if not a.startswith("xmlns") and not a.startswith("xsi:schemaLocation"):
                paths.add(f"{path}/@{a}")
        if selfclose:
            stack.pop()
    return paths


def json_shape(obj, prefix=""):
    paths = set()
    if isinstance(obj, dict):
        for k, v in obj.items():
            p = f"{prefix}.{k}" if prefix else k
            paths.add(p)
            paths |= json_shape(v, p)
    elif isinstance(obj, list):
        for v in obj:
            paths |= json_shape(v, prefix + "[]")
    return paths


def load_source(src):
    """A file path, or `doc.md:LINE` for the code block starting at LINE."""
    m = re.match(r"^(.+\.mdx?):(\d+)$", src)
    if m:
        block = next((b for b in extract(m.group(1))["blocks"] if b["line"] == int(m.group(2))), None)
        if not block:
            sys.exit(f"no code block at {src}")
        return textwrap.dedent(block["content"])
    return Path(src).read_bytes().decode("utf-8", "replace")


def shape_of(text):
    t = text.lstrip()
    if t.startswith("{") or t.startswith("["):
        try:
            return json_shape(json.loads(t))
        except ValueError:
            pass
    return xml_shape(text)


def cmd_shape(a):
    print(json.dumps(sorted(shape_of(load_source(a.source))), indent=1))


def cmd_shape_diff(a):
    sa, sb = shape_of(load_source(a.a)), shape_of(load_source(a.b))
    if a.under:
        # compare only below the first element with this name, so different wrappers
        # (e.g. a doc snippet vs a full response) still line up
        def rebase(paths):
            out = set()
            for p in paths:
                parts = p.split("/")
                if a.under in parts:
                    out.add("/".join(parts[parts.index(a.under):]))
            return out
        sa, sb = rebase(sa), rebase(sb)
    if a.ignore:
        ig = re.compile(a.ignore)
        sa = {p for p in sa if not ig.search(p)}
        sb = {p for p in sb if not ig.search(p)}
    print(json.dumps({"only_in_a": sorted(sa - sb), "only_in_b": sorted(sb - sa),
                      "common": len(sa & sb)}, indent=1))


DEPLOY_KEYS = re.compile(r"^\s*-?\s*(repository|tag|image|imageTag|version|host|path|name|url|alias)\s*:\s*(.+?)\s*$")


def cmd_deploy_diff(a):
    """Summarize a deployment PR/diff: new files, and added image/route/dependency keys."""
    if a.pr:
        repo, _, num = a.pr.partition("#")
        diff = subprocess.run(["gh", "pr", "diff", num, "-R", repo], capture_output=True, text=True, check=True).stdout
    else:
        diff = Path(a.diff).read_text()
    files, cur, line = {}, None, 0
    for l in diff.splitlines():
        if l.startswith("diff --git"):
            cur = l.split(" b/", 1)[1]
            files[cur] = {"status": "modified", "added_keys": [], "added": 0, "removed": 0}
        elif cur and l.startswith("new file mode"):
            files[cur]["status"] = "new"
        elif cur and l.startswith("deleted file mode"):
            files[cur]["status"] = "deleted"
        elif l.startswith("@@"):
            line = int(re.search(r"\+(\d+)", l).group(1))
        elif cur and l.startswith("+") and not l.startswith("+++"):
            files[cur]["added"] += 1
            m = DEPLOY_KEYS.match(l[1:])
            if m and cur.endswith((".yaml", ".yml")):
                files[cur]["added_keys"].append({"line": line, "key": m.group(1), "value": redact_secrets(m.group(2))})
            line += 1
        elif cur and l.startswith("-") and not l.startswith("---"):
            files[cur]["removed"] += 1
        elif cur and not l.startswith("\\"):
            line += 1
    for f in files.values():
        f["added_keys"] = f["added_keys"][: a.max_keys]
    print(json.dumps(files, indent=1))


def release_of(obj):
    return (obj["metadata"].get("annotations") or {}).get("meta.helm.sh/release-name")


def filter_release(items, release):
    """Helm's release annotation is authoritative; the name prefix is only a fallback for
    namespaces without Helm-managed objects (a prefix like `dem-` also matches `dem-dev-*`)."""
    if not release:
        return items
    if any(release_of(o) == release for o in items):
        return [o for o in items if release_of(o) == release]
    return [o for o in items if o["metadata"]["name"].startswith(release + "-")]


def cmd_inventory(a):
    """Live resources of a namespace (optionally one release): what is actually running and exposed."""
    ns = a.namespace
    get = lambda kind: filter_release(
        json.loads(oc("get", kind, "-n", ns, "-o", "json").stdout or "{}").get("items", []), a.release)
    inv = {"deployments": [], "routes": [], "services": [], "configmaps": []}
    for d in get("deployments"):
        inv["deployments"].append({
            "name": d["metadata"]["name"],
            "images": [c["image"] for c in d["spec"]["template"]["spec"]["containers"]],
            "ready": f"{d['status'].get('readyReplicas', 0)}/{d['spec'].get('replicas')}",
        })
    for r in get("routes"):
        cond = ((r.get("status", {}).get("ingress") or [{}])[0].get("conditions") or [{}])[0]
        inv["routes"].append({"name": r["metadata"]["name"], "url": f"https://{r['spec']['host']}{r['spec'].get('path') or ''}",
                              "service": r["spec"]["to"]["name"], "admitted": cond.get("status") == "True",
                              "reason": cond.get("reason")})
    for s in get("services"):
        inv["services"].append({"name": s["metadata"]["name"], "ports": [p["port"] for p in s["spec"].get("ports", [])]})
    for c in get("configmaps"):
        inv["configmaps"].append({"name": c["metadata"]["name"], "keys": sorted((c.get("data") or {}).keys())})
    print(json.dumps(inv, indent=1))


SECRET_RE = re.compile(r"(?i)((?:password|passwd|secret|token|access_?key|secret_?key|api_?key)[\w.-]*\s*[:=]\s*)(\S+)")
URL_CRED_RE = re.compile(r"(\w+://)[^/\s:@]+:[^/\s@]+@")


def redact_secrets(text):
    return URL_CRED_RE.sub(r"\1***:***@", SECRET_RE.sub(r"\1***", text))


def cmd_pod_read(a):
    """Read a file (or list a dir) inside a running workload, with obvious secrets masked."""
    script = ('p="$1"; if [ -d "$p" ]; then ls -la "$p"; '
              'else head -c %d "$p"; fi' % a.max_bytes)
    args = ["exec", "-n", a.namespace, f"deploy/{a.deploy}"]
    if a.container:
        args += ["-c", a.container]
    out = oc(*args, "--", "sh", "-c", script, "sh", a.path)
    print(redact_secrets(out.stdout) if out.returncode == 0 else f"error: {out.stderr.strip()}")


POD_HTTP = """
import base64, json, sys, urllib.error, urllib.request as u
r = json.loads(sys.argv[1])
req = u.Request(r["url"], data=r["body"].encode() if r.get("body") is not None else None,
                headers=r.get("headers") or {}, method=r["method"])
try:
    resp = u.urlopen(req, timeout=60); status, ct, body = resp.status, resp.headers.get("Content-Type"), resp.read()
except urllib.error.HTTPError as e:
    status, ct, body = e.code, e.headers.get("Content-Type"), e.read()
except (urllib.error.URLError, OSError) as e:
    print(json.dumps({"error": str(e)})); sys.exit(0)
print(json.dumps({"status": status, "content_type": ct, "body": base64.b64encode(body[:5242880]).decode()}))
"""


def pod_exec_error(stderr):
    if re.search(r"python3.*(not found|no such file)", stderr, re.I):
        return {"error": "container has no python3; pick another --container or deploy", "detail": stderr.strip()[:300]}
    return {"error": "oc exec failed", "detail": stderr.strip()[:300]}


def cmd_pod_call(a):
    """Send one read request from inside a workload's pod to a local port, bypassing
    routes/proxies/auth, to localise which hop of a chain misbehaves."""
    req = parse_curl(sys.stdin.read())
    if not req or req.get("error"):
        sys.exit(json.dumps({"error": "could not parse request", "detail": req}))
    if classify(req) == "write":
        sys.exit(json.dumps({"skipped": True, "safety": "write"}))
    parts = urllib.parse.urlsplit(req["url"])
    req["url"] = urllib.parse.urlunsplit(("http", f"127.0.0.1:{a.port}", parts.path or "/", parts.query, ""))
    args = ["exec", "-n", a.namespace, f"deploy/{a.deploy}"] + (["-c", a.container] if a.container else [])
    out = oc(*args, "--", "python3", "-c", POD_HTTP, json.dumps(req))
    if out.returncode:
        sys.exit(json.dumps(pod_exec_error(out.stderr)))
    r = json.loads(out.stdout)
    if r.get("error"):
        sys.exit(json.dumps({"error": "request from pod failed", "url": req["url"], "detail": r["error"]}))
    body = base64.b64decode(r["body"])
    RUNS_DIR.mkdir(parents=True, exist_ok=True)
    saved = RUNS_DIR / f"pod-resp-{int(time.time() * 1000)}"
    saved.write_bytes(body)
    print(json.dumps({"url": req["url"], "status": r["status"], "content_type": r["content_type"],
                      "saved": str(saved), "summary": summarize(body, r["content_type"])}, indent=2))


def main():
    ap = argparse.ArgumentParser(prog="docrev")
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("extract", help="parse a doc into headings/tabs/blocks/requests")
    p.add_argument("md")
    p.add_argument("--no-content", action="store_true", help="omit block bodies")
    p = sub.add_parser("env", help="environment config and access")
    esub = p.add_subparsers(dest="ecmd", required=True)
    d = esub.add_parser("discover")
    d.add_argument("--namespace", required=True)
    d.add_argument("--release")
    for name in ("check", "forward", "stop"):
        e = esub.add_parser(name)
        e.add_argument("env")
        if name == "forward":
            e.add_argument("--only", nargs="*")
    p = sub.add_parser("call", help="run one request (curl on stdin or --request JSON)")
    p.add_argument("env")
    p.add_argument("--request", help="request JSON file (as emitted by extract)")
    p.add_argument("--doc", help="doc to take the request from; use with --block")
    p.add_argument("--block", type=int, help="line number of the request block in --doc")
    p.add_argument("--sub", action="append", metavar="OLD=NEW", help="literal replacement in url and body; OLD=>NEW if OLD contains '='")
    p.add_argument("--allow-write", action="store_true")
    p.add_argument("--head", action="store_true")
    p.add_argument("--range", type=int, help="fetch only the first N bytes")
    p.add_argument("--timeout", type=int, default=120)
    p.add_argument("--base", help="prefix for a relative request url, e.g. {VALHALLA_URL}")
    p.add_argument("--no-forward", action="store_true", help="use the public url even for access: forward entries")
    p.add_argument("--no-auth", action="store_true", help="send no token (to check a 'no token needed' claim)")
    p = sub.add_parser("shape", help="structure (paths) of an XML/JSON file or doc block (doc.md:LINE)")
    p.add_argument("source")
    p = sub.add_parser("shape-diff", help="compare structures of two sources")
    p.add_argument("a")
    p.add_argument("b")
    p.add_argument("--under", help="compare only below the first element with this name")
    p.add_argument("--ignore", help="regex of paths to ignore")
    p = sub.add_parser("deploy-diff", help="summarize a deployment PR or diff")
    g = p.add_mutually_exclusive_group(required=True)
    g.add_argument("--pr", help="owner/repo#N")
    g.add_argument("--diff", help="unified diff file")
    p.add_argument("--max-keys", type=int, default=60)
    p = sub.add_parser("inventory", help="live deployments/routes/services/configmaps")
    p.add_argument("--namespace", required=True)
    p.add_argument("--release")
    p = sub.add_parser("pod-read", help="read a file or list a dir inside a deployment's pod")
    p.add_argument("--namespace", required=True)
    p.add_argument("--deploy", required=True)
    p.add_argument("--container")
    p.add_argument("--max-bytes", type=int, default=200_000)
    p.add_argument("path")
    p = sub.add_parser("pod-call", help="run one read request (curl on stdin) from inside a pod to a local port")
    p.add_argument("--namespace", required=True)
    p.add_argument("--deploy", required=True)
    p.add_argument("--container")
    p.add_argument("--port", type=int, required=True)
    a = ap.parse_args()
    if a.cmd == "extract":
        doc = extract(a.md)
        if a.no_content:
            for b in doc["blocks"]:
                b.pop("content", None)
        print(json.dumps(doc, indent=2))
    elif a.cmd == "env":
        {"discover": cmd_env_discover, "check": cmd_env_check,
         "forward": cmd_env_forward, "stop": cmd_env_stop}[a.ecmd](a)
    else:
        {"call": cmd_call, "shape": cmd_shape, "shape-diff": cmd_shape_diff, "deploy-diff": cmd_deploy_diff,
         "inventory": cmd_inventory, "pod-read": cmd_pod_read, "pod-call": cmd_pod_call}[a.cmd](a)


if __name__ == "__main__":
    main()
