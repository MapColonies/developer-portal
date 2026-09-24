#!/usr/bin/env python3
"""Mechanical helpers for the review-docs skill.

Claude does the judgment (flow vs examples, value chaining, verdicts); this
script only does what must be deterministic: parse docs, manage env access,
execute one request safely and summarize the response compactly.
"""
import argparse
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
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

import yaml

REPO = Path(__file__).resolve().parents[4]
# Env configs hold internal hostnames and must stay out of this public repo.
ENVS_DIR = Path.home() / ".claude" / "review-envs"
RUNS_DIR = REPO / ".claude" / "review-runs"

PLACEHOLDER_RE = re.compile(r"\{[A-Za-z0-9_]+\}|<[A-Z0-9_]+>|<token>|\[[A-Z0-9_]+\]")
STEP_RE = re.compile(r"\bstep\s*(\d+(?:\.\d+)?)", re.I)
READ_OPS = re.compile(
    r"\b(GetRecords|GetRecordById|DescribeRecord|GetCapabilities|DescribeCoverage|GetCoverage|"
    r"DescribeFeatureType|GetFeature|GetMap|GetTile|GetFeatureInfo|GetDomain)\b",
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


def bare_url_request(text):
    lines = [l.strip() for l in text.strip().splitlines() if l.strip()]
    if len(lines) == 1 and re.match(r"^(https?://|\{[A-Z0-9_]+\}|<[A-Z0-9_]+>)\S+$", lines[0]):
        return {"method": "GET", "url": lines[0], "headers": {}, "body": None}
    return None


def extract(md_path):
    text = Path(md_path).read_text()
    lines = text.splitlines()
    headings, blocks, tabs = [], [], []
    current_heading, current_tab = None, None
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
        f = re.match(r"^\s*```(\w*)(.*)$", line)
        if f:
            lang, meta = f.group(1), f.group(2).strip()
            start = i + 1
            body = []
            i += 1
            while i < len(lines) and not re.match(r"^\s*```\s*$", lines[i]):
                body.append(lines[i])
                i += 1
            content = "\n".join(body)
            in_details = "<details>" in "\n".join(lines[max(0, start - 4):start])
            block = {
                "line": start, "lang": lang, "meta": meta, "heading": current_heading and current_heading["title"],
                "step": current_heading and current_heading["step"], "tab": current_tab,
                "role": "example-response" if in_details else lang or "code",
                "placeholders": sorted(set(PLACEHOLDER_RE.findall(content))),
                "content": content,
            }
            if lang in ("bash", "sh", "shell", ""):
                req = parse_curl(content) if content.lstrip().startswith("curl") else bare_url_request(content)
                if req:
                    block["role"] = "request"
                    block["request"] = req
                    block["safety"] = classify(req)
            if lang == "mermaid":
                block["role"] = "diagram"
                block["diagram_steps"] = sorted(set(STEP_RE.findall(content)))
            blocks.append(block)
        i += 1
    step_headings = [h for h in headings if h["step"]]
    return {
        "file": str(md_path),
        "title": next((l.split(":", 1)[1].strip() for l in lines[:15] if l.startswith("title:")), None),
        "kind_hint": "flow" if len(step_headings) >= 2 else "examples",
        "headings": headings,
        "tabs": tabs,
        "blocks": blocks,
    }



def classify(req):
    method = (req.get("method") or "GET").upper()
    url, body = req.get("url") or "", req.get("body") or ""
    if method in ("GET", "HEAD", "OPTIONS"):
        return "read"
    if method == "POST" and (READ_OPS.search(body[:2000]) or READ_OPS.search(url)):
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
    routes = json.loads(oc("get", "routes", "-n", ns, "-o", "json").stdout or "{}").get("items", [])
    out = []
    for r in routes:
        if a.release and not r["metadata"]["name"].startswith(a.release + "-"):
            continue
        conds = (r.get("status", {}).get("ingress") or [{}])[0].get("conditions") or [{}]
        out.append({
            "route": r["metadata"]["name"],
            "url": f"https://{r['spec']['host']}{r['spec'].get('path', '') or ''}",
            "service": r["spec"]["to"]["name"],
            "admitted": conds[0].get("status") == "True",
            "reason": conds[0].get("reason"),
        })
    print(json.dumps(out, indent=2))


def cmd_env_check(a):
    env = load_env(a.env)
    ns = env["namespace"]
    findings = []
    who = oc("whoami")
    if who.returncode:
        print(json.dumps([{"kind": "env", "issue": "not logged in to cluster", "detail": who.stderr.strip()}]))
        return
    routes = {r["metadata"]["name"]: r for r in
              json.loads(oc("get", "routes", "-n", ns, "-o", "json").stdout or "{}").get("items", [])}
    for ph, e in (env.get("placeholders") or {}).items():
        r = routes.get(e.get("route")) if e.get("route") else None
        if e.get("route") and not r:
            findings.append({"kind": "env", "placeholder": ph, "issue": f"route {e['route']} missing"})
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
            p = subprocess.Popen(["oc", "port-forward", "-n", env["namespace"], f"svc/{f['service']}", f"{lp}:{f['port']}"],
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


def resolve_url(env, url):
    """Fill entry-point placeholders and route forwarded prefixes to localhost."""
    for ph, e in (env.get("placeholders") or {}).items():
        for form in ("{%s}" % ph, "<%s>" % ph):
            url = url.replace(form, e["url"].rstrip("/"))
    for e in (env.get("placeholders") or {}).values():
        f = e.get("forward")
        if f and e.get("access") == "forward" and url.startswith(e["url"].rstrip("/")):
            url = f"http://127.0.0.1:{f['local_port']}{f.get('path', '')}" + url[len(e["url"].rstrip("/")):]
    return url



def summarize(body, ctype):
    s = {}
    head = body[:4]
    if head[:2] in (b"II", b"MM"):
        s["tiff"] = tiff_info(body)
        return s
    txt = body[:MAX_BODY].decode("utf-8", "replace")
    if "xml" in (ctype or "") or txt.lstrip().startswith("<?xml") or txt.lstrip().startswith("<"):
        s["root"] = (re.search(r"<([\w:]+)[\s>]", re.sub(r"<\?.*?\?>|<!--.*?-->", "", txt, flags=re.S)) or [None, None])[1]
        s["exceptions"] = [x.strip() for x in re.findall(r"ExceptionText>\s*([^<]{0,300})", txt) if x.strip()]
        s.update({k: v for k, v in re.findall(r'(numberOfRecordsMatched|numberOfRecordsReturned|nextRecord)="(\d+)"', txt)})
        s["links"] = [{"scheme": sc, "name": n, "url": u.strip()} for sc, n, u in
                      re.findall(r'<mc:links[^>]*scheme="([^"]*)"[^>]*name="([^"]*)"[^>]*>([^<]*)<', txt)][:20]
        s["element_names"] = sorted(set(re.findall(r"<(mc:[A-Za-z0-9]+)[\s>]", txt)))
        s["coverage_ids"] = re.findall(r"<wcs:CoverageId>([^<]+)", txt)[:50]
        s["hrefs"] = sorted(set(re.findall(r'xlink:href="(https?://[^/"]+)', txt)))
        s = {k: v for k, v in s.items() if v not in ([], None)}
    elif "json" in (ctype or ""):
        try:
            j = json.loads(txt)
            s["json_keys"] = list(j)[:40] if isinstance(j, dict) else f"array[{len(j)}]"
        except ValueError:
            s["text"] = txt[:300]
    else:
        s["text"] = txt[:300]
    return s


def tiff_info(b):
    e = ">" if b[:2] == b"MM" else "<"
    off = struct.unpack(e + "I", b[4:8])[0]
    n = struct.unpack(e + "H", b[off:off + 2])[0]
    tags = {256: "width", 257: "height", 258: "bits", 339: "sample_format"}
    out = {}
    for k in range(n):
        t, ty, c, v = struct.unpack(e + "HHI4s", b[off + 2 + 12 * k: off + 14 + 12 * k])
        if t in tags:
            out[tags[t]] = struct.unpack(e + ("H" if ty == 3 else "I"), v[:2] if ty == 3 else v)[0]
        if t == 34735:
            o = struct.unpack(e + "I", v)[0]
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
        old, _, new = sub.partition("=")
        req["url"] = req["url"].replace(old, new)
        if req.get("body"):
            req["body"] = req["body"].replace(old, new)
    safety = classify(req)
    if safety == "write" and not a.allow_write:
        print(json.dumps({"skipped": True, "safety": "write", "request": req}))
        return
    tok = token_for(env)
    url = resolve_url(env, req["url"])
    tparam = (env.get("token") or {}).get("param", "token")
    if tok:
        url = re.sub(r"(<token>|\{token\})", tok, url)
        if f"{tparam}=" not in url:
            url += ("&" if "?" in url else "?") + f"{tparam}={urllib.parse.quote(tok)}"
    leftover = [p for p in PLACEHOLDER_RE.findall(url + (req.get("body") or "")) if p not in ("<token>",)]
    if leftover:
        sys.exit(json.dumps({"error": "unfilled placeholders", "placeholders": leftover}))
    method = "HEAD" if a.head else req["method"]
    headers = dict(req.get("headers") or {})
    if a.range:
        headers["Range"] = f"bytes=0-{a.range - 1}"
    data = req["body"].encode() if req.get("body") is not None and method != "HEAD" else None
    ctx = ssl._create_unverified_context() if env.get("insecure") else None
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
    saved.write_bytes(body[:MAX_BODY])
    print(json.dumps({
        "url": redact(url, tok), "method": method, "safety": safety, "status": status,
        "content_type": rh.get("Content-Type"), "content_length": rh.get("Content-Length"),
        "bytes_read": len(body[:MAX_BODY]), "truncated": len(body) > MAX_BODY,
        "elapsed_s": round(time.time() - started, 2), "saved": str(saved),
        "summary": summarize(body, rh.get("Content-Type")),
    }, indent=2))


def redact(s, tok):
    return s.replace(tok, "<token>").replace(urllib.parse.quote(tok), "<token>") if tok else s



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
    p.add_argument("--sub", action="append", metavar="OLD=NEW", help="literal replacement in url and body")
    p.add_argument("--allow-write", action="store_true")
    p.add_argument("--head", action="store_true")
    p.add_argument("--range", type=int, help="fetch only the first N bytes")
    p.add_argument("--timeout", type=int, default=120)
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
        cmd_call(a)


if __name__ == "__main__":
    main()
