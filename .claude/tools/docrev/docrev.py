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
import zlib
from pathlib import Path

import yaml

REPO = Path(__file__).resolve().parents[3]
# Env configs hold internal hostnames and must stay out of this public repo.
ENVS_DIR = Path.home() / ".claude" / "review-envs"
RUNS_DIR = REPO / ".claude" / "review-runs"

# Docs use several styles: {X_URL}, {entityId}, {TileRow}, <X_URL>, <X-URL>, <geocoding_url>, <x-api-key>, [COORD1_X].
# Lowercase angle forms need a `-`/`_` so plain XML elements (`<name>`) don't count. Braces take
# one consistent case style so encoded data (a polyline `{jy_gAbhgshF}`) doesn't, and brackets
# need a leading letter so JS indexing (`[0]`) doesn't.
PLACEHOLDER_RE = re.compile(r"\{[A-Z][A-Z0-9_]*\}|\{[a-z][a-z0-9_]*\}|\{[A-Za-z][a-zA-Z0-9]*\}|<[A-Z0-9][A-Z0-9 _-]*>"
                            r"|<[a-z][a-z0-9]*[_-][a-z0-9_-]+>|<token>|\[[A-Z][A-Z0-9_]*\]")
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
            else:
                # `### Request` under `## Get coverage (Step 3)` belongs to step 3.
                parent = next((h for h in reversed(headings) if h["level"] < current_heading["level"]), None)
                inherited = parent and (parent["step"] or parent.get("parent_step"))
                if inherited:
                    current_heading["parent_step"] = inherited
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
                "step": current_heading and (current_heading["step"] or current_heading.get("parent_step")),
                "tab": current_tab,
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
                # `POST Request` written on the line above the fence instead of inside it.
                label = re.fullmatch(r"(GET|POST|PUT|PATCH|DELETE)\s+request\s*:?", prev.strip().strip("*_`:").strip(), re.I)
                # An OGC operation root (`csw:GetRecords`) is a request body however the prose words it.
                if not req and (is_operation or label or lang == "json" and re.search(r"request|body|payload", prose, re.I)):
                    hint = endpoint_hint(prose)
                    if hint and label:
                        hint = (label.group(1).upper(), hint[1])
                    if label:
                        block["method"] = label.group(1).upper()
                    try:
                        req = body_request(*hint, content) if hint else None
                    except ValueError:
                        req = None
                    if req:
                        block["endpoint_from_prose"] = True
                    else:
                        # A body whose endpoint is given elsewhere on the page: Claude builds the request.
                        block["role"] = "request-body"
            if req and PLACEHOLDER_RE.fullmatch(req.get("method") or ""):
                # `curl --request <http_method> ...` documents the syntax, it is not a request to run.
                block["role"] = "template"
            elif req and not req.get("error") and req.get("url"):
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



def no_cluster_namespaces():
    """Namespaces of envs marked `cluster: false` (e.g. prod): docrev never runs oc against them."""
    out = set()
    for f in ENVS_DIR.glob("*.yaml") if ENVS_DIR.exists() else []:
        try:
            env = yaml.safe_load(f.read_text()) or {}
        except yaml.YAMLError:
            continue
        if env.get("cluster") is False:
            out |= {env.get("namespace")} | {e.get("namespace") for e in (env.get("placeholders") or {}).values()}
    return out - {None}


def oc(*args, retries=8):
    """oc with retries: some clusters intermittently answer 401 for a valid session."""
    if "-n" in args and args[args.index("-n") + 1] in no_cluster_namespaces():
        sys.exit(json.dumps({"error": f"namespace {args[args.index('-n') + 1]} belongs to a cluster: false env; "
                                      "use public routes only"}))
    out = None
    for _ in range(retries):
        out = subprocess.run(["oc", *args], capture_output=True, text=True)
        if "Unauthorized" not in out.stderr + out.stdout:
            break
        time.sleep(1)
    return out


def oc_items(kind, ns):
    """`oc get <kind> -o json` items, or (None, error) so an unreachable cluster isn't read as empty."""
    out = oc("get", kind, "-n", ns, "-o", "json")
    if out.returncode:
        return None, (out.stderr or out.stdout).strip()[:300]
    return json.loads(out.stdout or "{}").get("items", []), None


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
    items, err = oc_items("routes", a.namespace)
    if err:
        sys.exit(json.dumps({"error": "oc get routes failed", "namespace": a.namespace, "detail": err}))
    routes = filter_release(items, a.release)
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


def http_status(env, url, tok):
    """Status of a plain GET (any HTTP answer means reachable), or the network error."""
    tsrc = env.get("token") or {}
    if tok and (tsrc.get("param") or not tsrc.get("header")):
        url += ("&" if "?" in url else "?") + f"{tsrc.get('param', 'token')}={urllib.parse.quote(tok)}"
    ctx = ssl._create_unverified_context() if env.get("insecure") else \
        ssl.create_default_context(cafile=os.path.expanduser(env["ca_file"])) if env.get("ca_file") else None
    try:
        return urllib.request.urlopen(urllib.request.Request(url, headers=apply_auth(env, tok, {})),
                                      timeout=30, context=ctx).status, None
    except urllib.error.HTTPError as e:
        return e.code, None
    except Exception as e:
        return None, f"{type(e).__name__}: {redact(str(e), tok)}"


def cmd_env_check(a):
    env = load_env(a.env)
    findings = []
    if env.get("cluster") is False:
        # No cluster access (prod): reachability of each public entry point is all we can check.
        tok = token_for(env)
        for ph, e in (env.get("placeholders") or {}).items():
            status, err = http_status(env, e["url"], tok)
            if err or status >= 500:
                findings.append({"kind": "env", "placeholder": ph, "issue": "entry point unreachable",
                                 "status": status, "detail": err})
        if not tok:
            findings.append({"kind": "env", "issue": "token not available", "source": env.get("token")})
        print(json.dumps(findings, indent=2))
        return
    who = oc("whoami")
    if who.returncode:
        print(json.dumps([{"kind": "env", "issue": "not logged in to cluster", "detail": who.stderr.strip()}]))
        return
    routes_by_ns = {}
    for ph, e in (env.get("placeholders") or {}).items():
        ns = ns_of(env, e)
        if ns not in routes_by_ns:
            items, err = oc_items("routes", ns)
            if err:
                findings.append({"kind": "env", "issue": f"cannot list routes in {ns}", "detail": err})
            routes_by_ns[ns] = None if err else {r["metadata"]["name"]: r for r in items}
        routes = routes_by_ns[ns] or {}
        r = routes.get(e.get("route")) if e.get("route") else None
        if routes_by_ns[ns] is None:
            pass  # already reported as unlistable
        elif e.get("route") and not r:
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
    if env.get("cluster") is False:
        sys.exit(json.dumps({"error": f"{a.env} is cluster: false; forwards are not allowed"}))
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
        if forward and f and e.get("access") == "forward" and env.get("cluster") is not False and url.startswith(e["url"].rstrip("/")):
            url = f"http://127.0.0.1:{f['local_port']}{f.get('path', '')}" + url[len(e["url"].rstrip("/")):]
    return url



MAGIC = [(b"\x89PNG", "png"), (b"\xff\xd8\xff", "jpeg"), (b"\x1f\x8b", "gzip"), (b"PK\x03\x04", "zip"),
         (b"GIF8", "gif"), (b"RIFF", "riff"), (b"%PDF", "pdf"), (b"glTF", "glb"), (b"b3dm", "b3dm")]


def summarize(body, ctype, url=None):
    s = {}
    head = body[:4]
    if head[:2] in (b"II", b"MM"):
        s["tiff"] = tiff_info(body)
        return s
    if body.startswith(b"\x1f\x8b"):
        # Terrain tiles and some APIs are served gzipped; a decompressobj also takes a --range prefix.
        try:
            inner = zlib.decompressobj(16 + zlib.MAX_WBITS).decompress(body[:MAX_BODY], MAX_BODY)
        except zlib.error:
            return {"binary": "gzip", "corrupt": True}
        return {"gzip": True, **summarize(inner, ctype, url)}
    ct = (ctype or "").lower()
    # Tile servers often send these as `application/octet-stream`; the extension tells.
    ext = urllib.parse.urlsplit(url or "").path.rsplit(".", 1)[-1].lower()
    if "quantized-mesh" in ct or ext == "terrain":
        return {"binary": "quantized-mesh", **quantized_mesh_info(body)}
    if re.search(r"vector-tile|mvt|protobuf", ct) or ext in ("mvt", "pbf"):
        return {"binary": "mvt", "layers": mvt_layers(body)}
    kind = next((k for m, k in MAGIC if body.startswith(m)), None)
    if kind:
        s["binary"] = kind
        if kind == "png" and len(body) >= 24:
            s["width"], s["height"] = struct.unpack(">II", body[16:24])
        elif kind == "jpeg":
            s.update(jpeg_size(body))
        elif kind == "riff" and body[8:12] == b"WEBP":
            s["binary"] = "webp"
            s.update(webp_size(body))
        return s
    txt = body[:MAX_BODY].decode("utf-8", "replace")
    if b"\0" in body[:1024]:
        return {"binary": "unknown", "bytes": len(body)}
    if "xml" in (ctype or "") or txt.lstrip().startswith("<?xml") or txt.lstrip().startswith("<"):
        s["root"] = (re.search(r"<([\w:]+)[\s>]", re.sub(r"<\?.*?\?>|<!--.*?-->", "", txt, flags=re.S)) or [None, None])[1]
        s["exceptions"] = [x.strip() for x in re.findall(r"(?:ExceptionText|ServiceException)[^>]*>\s*([^<]{0,300})", txt) if x.strip()]
        s.update({k: v for k, v in re.findall(r'(numberOfRecordsMatched|numberOfRecordsReturned|nextRecord)="(\d+)"', txt)})
        s["links"] = [{"scheme": sc, "name": n, "url": u.strip()} for sc, n, u in
                      re.findall(r'<\w+:links[^>]*scheme="([^"]*)"[^>]*name="([^"]*)"[^>]*>([^<]*)<', txt)][:20]
        s["element_names"] = sorted(set(re.findall(r"<([A-Za-z_][\w.-]*(?::[\w.-]+)?)[\s/>]", txt)))[:120]
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


def jpeg_size(b):
    i = 2
    while i + 9 <= len(b) and b[i] == 0xFF:
        marker, seg = b[i + 1], struct.unpack(">H", b[i + 2:i + 4])[0]
        # SOF0-15 carry the frame size; C4/C8/CC are DHT/JPG/DAC, not frames.
        if 0xC0 <= marker <= 0xCF and marker not in (0xC4, 0xC8, 0xCC):
            h, w = struct.unpack(">HH", b[i + 5:i + 9])
            return {"width": w, "height": h}
        i += 2 + seg
    return {"truncated": True}


def webp_size(b):
    chunk = b[12:16]
    if chunk == b"VP8X" and len(b) >= 30:
        return {"width": int.from_bytes(b[24:27], "little") + 1, "height": int.from_bytes(b[27:30], "little") + 1}
    if chunk == b"VP8L" and len(b) >= 25:
        bits = int.from_bytes(b[21:25], "little")
        return {"width": (bits & 0x3FFF) + 1, "height": ((bits >> 14) & 0x3FFF) + 1}
    if chunk == b"VP8 " and len(b) >= 30:
        w, h = struct.unpack("<HH", b[26:30])
        return {"width": w & 0x3FFF, "height": h & 0x3FFF}
    return {"truncated": True}


def quantized_mesh_info(b):
    # Header: center (3 doubles), min/max height (2 floats), bounding sphere (4 doubles),
    # horizon occlusion point (3 doubles), then the vertex count.
    if len(b) < 92:
        return {"truncated": True}
    lo, hi = struct.unpack("<ff", b[24:32])
    return {"min_height": round(lo, 2), "max_height": round(hi, 2), "vertices": struct.unpack("<I", b[88:92])[0]}


def varint(b, i):
    n = shift = 0
    while i < len(b):
        n |= (b[i] & 0x7F) << shift
        i += 1
        if b[i - 1] < 0x80:
            return n, i
        shift += 7
    raise ValueError("truncated varint")


def mvt_layers(b):
    """Layer names and feature counts of a Mapbox vector tile (protobuf: tile.3 = layer,
    layer.1 = name, layer.2 = feature)."""
    def fields(buf):
        i = 0
        while i < len(buf):
            key, i = varint(buf, i)
            wt = key & 7
            if wt == 2:
                n, i = varint(buf, i)
                yield key >> 3, buf[i:i + n]
                i += n
            elif wt == 0:
                _, i = varint(buf, i)
            elif wt in (1, 5):
                i += 8 if wt == 1 else 4
            else:
                raise ValueError("unknown wire type")
    layers = []
    try:
        for f, layer in fields(b):
            if f == 3:
                name, feats = None, 0
                for lf, v in fields(layer):
                    if lf == 1:
                        name = v.decode("utf-8", "replace")
                    elif lf == 2:
                        feats += 1
                layers.append({"name": name, "features": feats})
    except ValueError:
        layers.append({"truncated": True})
    return layers


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
    tsrc = env.get("token") or {}
    # A doc that never mentions the token fails for readers; `call` still sends it, so say so.
    asked = TOKEN_PH_RE.search(req["url"]) or f"{tsrc.get('param', 'token')}=" in req["url"] or \
        any(TOKEN_PH_RE.search(v) for v in (req.get("headers") or {}).values())
    headers = apply_auth(env, tok, req.get("headers") or {})
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
    saved = run_dir(a) / f"resp-{int(started * 1000)}"
    # Some services echo the caller's token (e.g. into a `next` link); never keep it on disk.
    saved.write_bytes(redact_bytes(body[:MAX_BODY], tok))
    print(json.dumps({
        "url": redact(url, tok), "method": method, "safety": safety, "status": status,
        "content_type": rh.get("Content-Type"), "content_length": rh.get("Content-Length"),
        "bytes_read": len(body[:MAX_BODY]), "truncated": len(body) > MAX_BODY,
        "elapsed_s": round(time.time() - started, 2), "saved": str(saved), "token_added": bool(tok and not asked),
        "headers": {k: redact(v, tok) for k, v in rh.items()},
        "summary": summarize(body, rh.get("Content-Type"), url),
    }, indent=2))


def run_dir(a):
    d = RUNS_DIR / (getattr(a, "run", None) or os.environ.get("DOCREV_RUN") or "adhoc")
    d.mkdir(parents=True, exist_ok=True)
    return d


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
    def get(kind):
        items, err = oc_items(kind, a.namespace)
        if err:
            sys.exit(json.dumps({"error": f"oc get {kind} failed", "namespace": a.namespace, "detail": err}))
        return filter_release(items, a.release)
    inv ={"deployments": [], "routes": [], "services": [], "configmaps": []}
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
    saved = run_dir(a) / f"pod-resp-{int(time.time() * 1000)}"
    saved.write_bytes(body)
    print(json.dumps({"url": req["url"], "status": r["status"], "content_type": r["content_type"],
                      "saved": str(saved), "summary": summarize(body, r["content_type"], req["url"])}, indent=2))


DOCS_DIR = REPO / "docs"
NUM_PREFIX_RE = re.compile(r"^\d+\s*[-_.]+\s*")
LINK_RE = re.compile(r"!?\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+\"[^\"]*\")?\s*\)|\b(?:href|src|to)=[\"']([^\"']+)[\"']")


def front_matter(text):
    m = re.match(r"^---\n(.*?)\n---", text, re.S)
    try:
        fm = yaml.safe_load(m.group(1)) if m else None
    except yaml.YAMLError:
        fm = None
    return fm if isinstance(fm, dict) else {}


def doc_route(rel, text):
    """Docusaurus id and URL of the doc at `rel` (relative to docs/): `id`/`slug` front matter,
    number prefixes dropped, index/README/folder-named files served at the folder."""
    fm = front_matter(text)
    rel = Path(rel)
    dirs = [NUM_PREFIX_RE.sub("", p) for p in rel.parent.parts]
    stem = NUM_PREFIX_RE.sub("", rel.stem)
    last = str(fm.get("id") or stem)
    if fm.get("slug") is not None:
        slug = str(fm["slug"])
        url = slug if slug.startswith("/") else "/".join(["", *dirs, slug])
    elif "id" not in fm and (stem.lower() in ("index", "readme") or (dirs and stem == dirs[-1])):
        url = "/" + "/".join(dirs)
    else:
        url = "/" + "/".join([*dirs, last])
    return {"id": "/".join([*dirs, last]), "url": ("/docs" + url).rstrip("/") or "/docs"}


def all_routes():
    """URL -> doc file for every doc, plus the redocusaurus API pages from docusaurus.config.ts."""
    routes = {}
    for f in sorted(DOCS_DIR.rglob("*.md*")):
        if f.suffix in (".md", ".mdx"):
            routes[doc_route(f.relative_to(DOCS_DIR), f.read_text())["url"]] = f
    cfg = REPO / "docusaurus.config.ts"
    if cfg.exists():
        for r in re.findall(r"route:\s*['\"]([^'\"]+)['\"]", cfg.read_text()):
            routes[r.rstrip("/")] = None
    return routes


def heading_anchor(title):
    # Docusaurus slugs the rendered heading like github-slugger: markup dropped, punctuation
    # removed, lowercased, each space a `-`.
    t = re.sub(r"`([^`]*)`", r"\1", title)
    t = re.sub(r"!?\[([^\]]*)\]\([^)]*\)", r"\1", t)
    t = re.sub(r"<[^>]+>|[*~]", "", t)
    return re.sub(r"[^\w\- ]", "", t.strip().lower()).replace(" ", "-")


def doc_anchors(path):
    text = Path(path).read_text()
    seen, anchors = {}, set(re.findall(r"\b(?:id|name)=[\"']([^\"']+)[\"']", text))
    for h in extract(path)["headings"]:
        if h["anchor"]:
            anchors.add(h["anchor"])
            continue
        a = heading_anchor(h["title"])
        anchors.add(f"{a}-{seen[a]}" if a in seen else a)
        seen[a] = seen.get(a, 0) + 1
    return anchors


def prose_lines(text, keep_code=False):
    """(line number, line) outside fenced code; inline code blanked unless keep_code."""
    fence = None
    for n, l in enumerate(text.splitlines(), 1):
        f = re.match(r"^\s*(`{3,}|~{3,})", l)
        if f and (fence is None or f.group(1).startswith(fence)):
            fence = None if fence else f.group(1)
            continue
        if fence is None:
            yield n, l if keep_code else INLINE_CODE_RE.sub("", l)


def page_at(url, routes):
    """The doc served at `url`, or a finding dict."""
    key = url.rstrip("/")
    if key in routes:
        return routes[key]
    near = [u for u in routes if u.lower() == key.lower()]
    if near:
        # The client router matches case-insensitively, but a direct load/refresh of the
        # static HTML on a case-sensitive host 404s.
        return {"issue": "case differs from the page url", "page_url": near[0]}
    return {"issue": "no page at this url", "resolved": key}


def check_link(doc, target, routes):
    if re.match(r"^(?:[a-z][\w+.-]*:|//)", target, re.I) or PLACEHOLDER_RE.search(target):
        return None
    path, _, anchor = target.partition("#")
    path = urllib.parse.unquote(path.split("?")[0])
    if not path:
        dest = doc
    elif path.startswith("/") and path.endswith((".md", ".mdx")):
        # Docusaurus resolves an absolute file link against the docs dir, then the site dir.
        dest = next((f for f in (DOCS_DIR / path.lstrip("/"), REPO / path.lstrip("/")) if f.is_file()), None)
        if not dest:
            return {"issue": "file not found"}
    elif path.startswith("/"):
        if (REPO / "static" / path.lstrip("/")).exists():
            return None
        dest = page_at(path, routes)
        if isinstance(dest, dict):
            return dest
    elif (Path(doc).parent / path).is_file():
        dest = (Path(doc).parent / path).resolve()
        if dest.suffix not in (".md", ".mdx"):
            return None
    elif path.endswith((".md", ".mdx")):
        return {"issue": "file not found"}
    else:
        # Not a file: a URL the browser resolves against this page's URL (its slug, not its path).
        if not Path(doc).is_relative_to(DOCS_DIR.resolve()):
            return {"issue": "relative url from a doc outside docs/; check it from the site checkout"}
        page = doc_route(Path(doc).relative_to(DOCS_DIR.resolve()), Path(doc).read_text())["url"]
        dest = page_at(urllib.parse.urljoin(page, path), routes)
        if isinstance(dest, dict):
            return dest
    if anchor and dest is not None and anchor not in doc_anchors(dest):
        return {"issue": f"no anchor #{anchor} in {Path(dest).relative_to(REPO)}"}
    return None


def cmd_links(a):
    """Broken internal links/anchors in the given docs (Docusaurus routes, relative files, static assets)."""
    routes = all_routes()
    out = []
    for doc in a.docs:
        for n, line in prose_lines(Path(doc).read_text()):
            for m in LINK_RE.finditer(line):
                target = m.group(1) or m.group(2)
                err = check_link(Path(doc).resolve(), target, routes)
                if err:
                    out.append({"file": doc, "line": n, "target": target, **err})
    print(json.dumps(out, indent=2))


def cmd_refs(a):
    """Where a doc is still referenced (for deleted/renamed docs): its URL, id and file name in
    docs/, sidebars, src/ and the site config."""
    rel = Path(a.path).relative_to("docs")
    if a.ref:
        text = subprocess.run(["git", "-C", str(REPO), "show", f"{a.ref}:{a.path}"], capture_output=True,
                              text=True, check=True).stdout
    else:
        text = (REPO / a.path).read_text()
    r = doc_route(rel, text)
    needles = sorted({r["url"], r["url"][len("/docs"):], r["id"], rel.with_suffix("").as_posix(), rel.name}, key=len,
                     reverse=True)
    pat = re.compile(r"(?<![\w-])(?:%s)(?![\w-])" % "|".join(map(re.escape, needles)))
    files = [*DOCS_DIR.rglob("*.md*"), *(REPO / "src").rglob("*.*"), REPO / "sidebars.js", REPO / "sidebars.ts",
             REPO / "docusaurus.config.ts"]
    hits = []
    for f in files:
        if not f.is_file() or f.resolve() == (REPO / a.path).resolve() or f.suffix not in (".md", ".mdx", ".js", ".ts", ".tsx", ".jsx", ".json"):
            continue
        for n, l in enumerate(f.read_text(errors="replace").splitlines(), 1):
            m = pat.search(l)
            if m:
                hits.append({"file": str(f.relative_to(REPO)), "line": n, "match": m.group(0)})
    print(json.dumps({**r, "references": hits}, indent=2))


MARKERS = {"🆕": "new", "✏": "changed", "🗑": "removed"}
FIELD_RE = re.compile(r"^@?[A-Za-z_][\w.-]*(?::[A-Za-z_][\w.-]*)?$")


def table_fields(text):
    """Field rows of a doc's reference tables: {name, line, marker}. The name column is the one
    whose cells look like field/element names; markers are 🆕 / ✏️ / 🗑️ anywhere in the row."""
    tables, cur = [], []
    for n, l in prose_lines(text, keep_code=True):
        if l.strip().startswith("|"):
            cur.append((n, [c.strip() for c in l.strip().strip("|").split("|")]))
        elif cur:
            tables.append(cur)
            cur = []
    if cur:
        tables.append(cur)
    fields = []
    for t in tables:
        rows = [(n, cells) for n, cells in t[1:] if not all(re.fullmatch(r":?-{2,}:?", c) or not c for c in cells)]
        clean = lambda c: re.sub(r"[`*]", "", c).strip()
        width = max((len(c) for _, c in rows), default=0)
        score = lambda i: (sum(1 for _, c in rows if i < len(c) and FIELD_RE.match(clean(c[i]))),
                           sum(1 for _, c in rows if i < len(c) and ":" in clean(c[i])))
        col = max(range(width), key=score, default=None)
        if col is None or score(col)[0] * 2 < len(rows):
            continue
        for n, cells in rows:
            name = clean(cells[col]) if col < len(cells) else ""
            if FIELD_RE.match(name):
                marker = next((v for k, v in MARKERS.items() if any(k in c for c in cells)), None)
                fields.append({"name": name, "line": n, "marker": marker})
    return fields


def response_names(text):
    paths = shape_of(text)
    return {re.sub(r"\[\]", "", p.replace(".", "/").split("/")[-1]) for p in paths}


def cmd_profile_diff(a):
    """Reference-table fields vs a live response (and, with --previous, the change markers vs the
    previous version's table)."""
    doc_text = Path(a.doc).read_text()
    fields = table_fields(doc_text)
    names = {f["name"] for f in fields}
    out = {"documented": len(fields)}
    if a.response:
        live = response_names(load_source(a.response))
        prefixes = [n.split(":")[0] for n in names if ":" in n]
        scope = a.prefix or (max(set(prefixes), key=prefixes.count) if prefixes else None)
        local = lambda n: n.split(":")[-1]
        def found(n):
            return n in live or (":" not in n and any(local(x) == n for x in live))
        out["documented_not_returned"] = [f for f in fields if not found(f["name"]) and f["marker"] != "removed"]
        out["removed_but_returned"] = [f for f in fields if found(f["name"]) and f["marker"] == "removed"]
        extra = sorted(n for n in live if not n.startswith("@") and (scope is None or n.startswith(scope + ":"))
                       and n not in names and local(n) not in {local(x) for x in names} and n not in doc_text)
        out["returned_not_documented"] = extra
        lower = {x.lower(): x for x in live}
        out["case_mismatch"] = [{"doc": f["name"], "live": lower[f["name"].lower()]} for f in fields
                                if f["name"] not in live and f["name"].lower() in lower]
    if a.previous:
        prev = table_fields(Path(a.previous).read_text())
        pnames = {f["name"] for f in prev}
        plower = {n.lower(): n for n in pnames}
        out["marked_new_but_in_previous"] = [f for f in fields if f["marker"] == "new" and f["name"] in pnames]
        out["unmarked_but_not_in_previous"] = [
            {**f, **({"previous_spelling": plower[f["name"].lower()]} if f["name"].lower() in plower else {})}
            for f in fields if not f["marker"] and f["name"] not in pnames]
        out["previous_unmarked_but_gone"] = [f for f in prev if not f["marker"] and f["name"] not in names]
        out["previous_removed_but_present"] = [f for f in prev if f["marker"] == "removed" and f["name"] in names]
    print(json.dumps(out, indent=1, ensure_ascii=False))


SOURCES_FILE = ENVS_DIR / "sources.yaml"


def chart_components(chart_dir):
    """(name, version) of a chart's dependencies and of every image repository/tag in its values."""
    chart_dir = Path(chart_dir)
    meta = yaml.safe_load((chart_dir / "Chart.yaml").read_text()) or {}
    out = [(d["name"], str(d.get("version", ""))) for d in meta.get("dependencies") or []]

    def walk(node):
        if isinstance(node, dict):
            if isinstance(node.get("repository"), str) and node.get("tag") is not None:
                out.append((node["repository"].rsplit("/", 1)[-1], str(node["tag"])))
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)
    values = chart_dir / "values.yaml"
    if values.exists():
        walk(yaml.safe_load(values.read_text()))
    return sorted({(n, v.lstrip("v")) for n, v in out})


def repo_org():
    url = subprocess.run(["git", "-C", str(REPO), "remote", "get-url", "origin"], capture_output=True, text=True).stdout
    m = re.search(r"github\.com[:/]([^/]+)/", url)
    return m.group(1) if m else None


def gh_ok(*args):
    return subprocess.run(["gh", "api", *args], capture_output=True, text=True).returncode == 0


def find_source(name, version, org, known):
    """Repo and ref holding the code of a deployed component. A mapping in sources.yaml wins;
    otherwise candidates come from the name, and the user confirms before they are used."""
    version = version.lstrip("v")
    repo = known.get(name)
    candidates = [repo] if repo else [f"{org}/{name}"]
    if not repo and not gh_ok(f"repos/{candidates[0]}"):
        found = subprocess.run(["gh", "search", "repos", name, "--owner", org, "--json", "fullName", "--limit", "5"],
                               capture_output=True, text=True).stdout
        candidates = [r["fullName"] for r in json.loads(found or "[]")]
    for cand in candidates:
        for ref in (f"v{version}", version, f"{name}-v{version}"):
            if version and gh_ok(f"repos/{cand}/git/ref/tags/{ref}"):
                return {"component": name, "version": version, "repo": cand, "ref": ref, "confirmed": bool(repo)}
    return {"component": name, "version": version, "repo": None, "ref": None, "candidates": candidates,
            "confirmed": False}


def cmd_sources(a):
    known = (yaml.safe_load(SOURCES_FILE.read_text()) or {}) if SOURCES_FILE.exists() else {}
    org = a.org or repo_org()
    comps = chart_components(a.chart) if a.chart else []
    comps += [tuple(i.rsplit(":", 1)) if ":" in i else (i, "") for i in a.image or []]
    out = [find_source(n, v, org, known) for n, v in comps]
    if a.fetch:
        for r in out:
            if r["repo"] and r["confirmed"]:
                dest = RUNS_DIR / "src" / f"{r['repo'].replace('/', '__')}@{r['ref']}"
                if not dest.exists():
                    subprocess.run(["git", "clone", "-q", "--depth", "1", "--branch", r["ref"],
                                    f"https://github.com/{r['repo']}.git", str(dest)], check=False)
                r["path"] = str(dest) if dest.exists() else None
    print(json.dumps(out, indent=2))


HTTP_METHODS = ("get", "put", "post", "delete", "options", "head", "patch")


def openapi_ops(spec):
    def deref(p):
        if isinstance(p, dict) and "$ref" in p:
            node = spec
            for part in p["$ref"].lstrip("#/").split("/"):
                node = (node or {}).get(part)
            return node or {}
        return p
    ops = []
    for path, item in (spec.get("paths") or {}).items():
        shared = [deref(p) for p in item.get("parameters") or []]
        for m, op in item.items():
            if m not in HTTP_METHODS:
                continue
            params = shared + [deref(p) for p in op.get("parameters") or []]
            ops.append({"method": m.upper(), "path": path, "operationId": op.get("operationId"),
                        "params": [p["name"] + ("*" if p.get("required") else "") for p in params if p.get("name")],
                        "body": "requestBody" in op,
                        "safety": classify({"method": m.upper(), "url": path})})
    return ops


def cmd_openapi(a):
    """Operations of an OpenAPI spec (static/openapi/**); with --live, diff against the spec the
    service serves (a saved `call` response or a file)."""
    spec = yaml.safe_load(Path(a.spec).read_text())
    ops = openapi_ops(spec)
    out = {"title": (spec.get("info") or {}).get("title"), "version": (spec.get("info") or {}).get("version"),
           "servers": [s.get("url") for s in spec.get("servers") or []], "operations": ops}
    if a.live:
        live = yaml.safe_load(load_source(a.live))
        lops = openapi_ops(live)
        key = lambda o: (o["method"], o["path"])
        mine, theirs = {key(o): o for o in ops}, {key(o): o for o in lops}
        out = {"version": [out["version"], (live.get("info") or {}).get("version")],
               "only_in_doc": sorted(f"{m} {p}" for m, p in mine.keys() - theirs.keys()),
               "only_in_live": sorted(f"{m} {p}" for m, p in theirs.keys() - mine.keys()),
               "param_diff": [{"op": f"{k[0]} {k[1]}", "doc": mine[k]["params"], "live": theirs[k]["params"]}
                              for k in mine.keys() & theirs.keys() if mine[k]["params"] != theirs[k]["params"]]}
    print(json.dumps(out, indent=1))


# Site convention: `<UPPER_SNAKE>` placeholders (`<token>` kept as is); `[UPPER_SNAKE]` inside XML,
# where `<NAME>` would read as an element; `{...}` only for URL template variables the reader keeps.
URL_TEMPLATE_VARS = {"{TileMatrixSet}", "{TileMatrix}", "{TileCol}", "{TileRow}", "{Style}", "{Layer}", "{Time}",
                     "{x}", "{y}", "{z}", "{s}", "{r}", "{reverseX}", "{reverseY}", "{reverseZ}", "{version}"}
GOOD_ANGLE_RE = re.compile(r"<(?:[A-Z0-9]+(?:_[A-Z0-9]+)*|token)>")
# Where XML starts in a block (an `<?xml` line, a namespaced/closing tag or a tag with attributes).
XML_START_RE = re.compile(r"<\?xml|</?[A-Za-z][\w.-]*:[\w.-]+|</[A-Za-z][\w.-]*>|<[A-Za-z][\w.-]*\s+[\w:.-]+=")


def upper_snake(p):
    name = p.strip("{}<>[]")
    if name.lower() == "token":
        return "token"
    return re.sub(r"[-\s]+", "_", re.sub(r"([a-z])([A-Z])", r"\1_\2", name)).upper()


def placeholder_issues(text):
    """Placeholders in code (fenced and inline) that break the site convention."""
    out, fence, lang, xml_started = [], None, None, False
    for n, l in enumerate(text.splitlines(), 1):
        f = re.match(r"^\s*(`{3,})\s*(\w*)", l)
        if f and (fence is None or (f.group(1).startswith(fence) and not f.group(2))):
            fence, lang = (f.group(1), f.group(2).lower()) if fence is None else (None, None)
            xml_started = False
            continue
        if fence is None:
            chunks = [(c, False) for c in INLINE_CODE_RE.findall(l)]
        elif xml_started or lang == "html":
            chunks = [(l, xml_started)]
        else:
            # XML bodies also sit in curl `--data-raw '...'` and `url:`/`body:` blocks, after the URL.
            m = XML_START_RE.search(l)
            xml_started = bool(m)
            chunks = [(l[:m.start()], False), (l[m.start():], True)] if m else [(l, False)]
        if xml_started and re.search(r">\s*['\"]\s*\\?\s*$", l):
            xml_started = False  # the quoted curl body ends here
        for code, in_xml in chunks:
            for p in PLACEHOLDER_RE.findall(code):
                name = p.strip("{}<>[]")
                want = upper_snake(p)
                if p.startswith("<") and fence is not None and (lang in ("xml", "html") or in_xml) \
                        and f"</{name}>" in text:
                    continue  # an element, not a placeholder
                if p.startswith("{") and p in URL_TEMPLATE_VARS:
                    continue
                good = f"[{want}]" if in_xml and want != "token" else f"<{want}>"
                if p != good:
                    out.append({"line": n, "placeholder": p, "use": good})
    return out


def cmd_placeholders(a):
    out = [{"file": d, **i} for d in a.docs for i in placeholder_issues(Path(d).read_text())]
    print(json.dumps(out, indent=1))


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
    p.add_argument("--run", help="review-runs/<run> dir for saved responses (default $DOCREV_RUN or adhoc)")
    p = sub.add_parser("shape", help="structure (paths) of an XML/JSON file or doc block (doc.md:LINE)")
    p.add_argument("source")
    p = sub.add_parser("shape-diff", help="compare structures of two sources")
    p.add_argument("a")
    p.add_argument("b")
    p.add_argument("--under", help="compare only below the first element with this name")
    p.add_argument("--ignore", help="regex of paths to ignore")
    p = sub.add_parser("links", help="broken internal links/anchors in docs")
    p.add_argument("docs", nargs="+")
    p = sub.add_parser("placeholders", help="placeholders that break the site notation (<NAME>, [NAME] in XML)")
    p.add_argument("docs", nargs="+")
    p = sub.add_parser("refs", help="references to a doc (deleted/renamed) across docs, sidebars, src")
    p.add_argument("path", help="docs/... path")
    p.add_argument("--ref", help="git ref to read the doc from when it no longer exists (e.g. the PR base)")
    p = sub.add_parser("profile-diff", help="reference-table fields vs a live response and/or the previous version")
    p.add_argument("doc")
    p.add_argument("--response", help="saved response or doc.md:LINE")
    p.add_argument("--previous", help="previous version's profile doc, to check 🆕/✏️/🗑️ markers")
    p.add_argument("--prefix", help="namespace prefix of the profile's fields (default: most common in the table)")
    p = sub.add_parser("openapi", help="operations of an OpenAPI spec; --live to diff with the served spec")
    p.add_argument("spec")
    p.add_argument("--live", help="saved response or file with the live spec")
    p = sub.add_parser("deploy-diff", help="summarize a deployment PR or diff")
    g = p.add_mutually_exclusive_group(required=True)
    g.add_argument("--pr", help="owner/repo#N")
    g.add_argument("--diff", help="unified diff file")
    p.add_argument("--max-keys", type=int, default=60)
    p = sub.add_parser("sources", help="GitHub repo and tag holding the code of each deployed component")
    p.add_argument("--chart", help="helm chart dir: its dependencies and values images")
    p.add_argument("--image", action="append", help="NAME:VERSION of one component (repeatable)")
    p.add_argument("--org", help="GitHub owner to search (default: this repo's)")
    p.add_argument("--fetch", action="store_true", help="shallow-clone confirmed repos into review-runs/src/")
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
    p.add_argument("--run", help="review-runs/<run> dir for saved responses (default $DOCREV_RUN or adhoc)")
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
         "inventory": cmd_inventory, "pod-read": cmd_pod_read, "pod-call": cmd_pod_call, "links": cmd_links,
         "refs": cmd_refs, "placeholders": cmd_placeholders, "profile-diff": cmd_profile_diff, "openapi": cmd_openapi,
         "sources": cmd_sources}[a.cmd](a)


if __name__ == "__main__":
    main()
