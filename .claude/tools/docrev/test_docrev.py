import argparse
import gzip
import io
import json
import struct
import subprocess
import sys
import tempfile
import textwrap
import unittest
import unittest.mock
from contextlib import redirect_stdout
from pathlib import Path

import docrev

# Requests in tests go to fake hosts with urlopen mocked; the network probe would reject them.
REAL_UNREACHABLE = docrev.unreachable
docrev.unreachable = lambda url, timeout=3: None

DOC = textwrap.dedent('''\
    ---
    title: Sample Flow
    ---
    ## Flow diagram
    ```mermaid
    flowchart LR
        a[Step 1] --> b[Step 2]
    ```

    ## Query catalog (Step 1)
    <Tabs>
    <TabItem value="all" label="All Records">
    ```bash
    curl --location --request POST '{CATALOG_URL}/csw?token=<token>' \\
    --header 'Content-Type: application/xml' \\
    --data-raw '<csw:GetRecords service="CSW"/>'
    ```
    <details>
        <summary>Response</summary>
        ```xml
        <csw:GetRecordsResponse/>
        ```
    </details>
    </TabItem>
    </Tabs>

    ## Get coverage (Step 2) {#get-coverage}
    ```bash
    {WCS_URL}/wcs?request=GetCapabilities&token=<token>
    ```
    ''')


class ExtractTest(unittest.TestCase):
    def setUp(self):
        self.path = Path(tempfile.mkdtemp()) / "doc.md"
        self.path.write_text(DOC)
        self.doc = docrev.extract(self.path)

    def test_flow_detected_from_step_headings(self):
        self.assertEqual(self.doc["kind_hint"], "flow")
        self.assertEqual([h["step"] for h in self.doc["headings"] if h["step"]], ["1", "2"])
        self.assertEqual(self.doc["headings"][-1]["anchor"], "get-coverage")

    def test_blocks_roles_tabs_and_placeholders(self):
        by_line = {b["line"]: b for b in self.doc["blocks"]}
        diagram = next(b for b in by_line.values() if b["role"] == "diagram")
        self.assertEqual(diagram["diagram_steps"], ["1", "2"])
        curl = next(b for b in by_line.values() if b.get("tab") == "All Records" and b["role"] == "request")
        self.assertEqual(curl["request"]["method"], "POST")
        self.assertEqual(curl["request"]["headers"]["Content-Type"], "application/xml")
        self.assertEqual(curl["safety"], "read")
        self.assertIn("{CATALOG_URL}", curl["placeholders"])
        self.assertTrue(any(b["role"] == "example-response" for b in by_line.values()))
        bare = [b for b in by_line.values() if b["role"] == "request" and b["request"]["method"] == "GET"]
        self.assertEqual(bare[0]["request"]["url"], "{WCS_URL}/wcs?request=GetCapabilities&token=<token>")

    def test_examples_when_no_steps(self):
        self.path.write_text("## A\n```bash\ncurl 'http://x/y'\n```\n## B\n")
        self.assertEqual(docrev.extract(self.path)["kind_hint"], "examples")


class PlaceholderTest(unittest.TestCase):
    def test_xml_elements_in_body_are_not_placeholders(self):
        env = {"placeholders": {}, "token": {}, "hosts": ["x"]}
        req = {"method": "POST", "url": "http://x/csw", "headers": {}, "body": "<csw:GetRecords><BBOX><X>{SRS}</X></BBOX></csw:GetRecords>"}
        d = Path(tempfile.mkdtemp()) / "r.json"
        d.write_text(json.dumps(req))
        out = io.StringIO()
        with unittest.mock.patch.object(docrev, "load_env", return_value=env), redirect_stdout(out):
            with self.assertRaises(SystemExit) as e:
                docrev.cmd_call(argparse.Namespace(env="e", doc=None, block=None, request=str(d), sub=None,
                                                   allow_write=False, head=False, range=None, timeout=5))
        self.assertEqual(json.loads(e.exception.code)["placeholders"], ["{SRS}"])

    def test_token_param_and_header_both_sent(self):
        env = {"placeholders": {}, "hosts": ["x"], "token": {"param": "token", "header": "x-api-key"}}
        req = {"method": "GET", "url": "http://x/a", "headers": {}, "body": None}
        d = Path(tempfile.mkdtemp()) / "r.json"
        d.write_text(json.dumps(req))
        sent = {}

        def fake_urlopen(r, **kw):
            sent.update(url=r.full_url, headers={k.lower(): v for k, v in r.header_items()})
            raise SystemExit
        with unittest.mock.patch.object(docrev, "load_env", return_value=env), \
                unittest.mock.patch.object(docrev, "token_for", return_value="T"), \
                unittest.mock.patch("urllib.request.urlopen", fake_urlopen), redirect_stdout(io.StringIO()):
            with self.assertRaises(SystemExit):
                docrev.cmd_call(argparse.Namespace(env="e", doc=None, block=None, request=str(d), sub=None, base=None,
                                                   allow_write=False, head=False, range=None, timeout=5))
        self.assertEqual((sent["url"], sent["headers"]["x-api-key"]), ("http://x/a?token=T", "T"))


class SafetyTest(unittest.TestCase):
    def test_classify(self):
        self.assertEqual(docrev.classify({"method": "GET", "url": "http://x"}), "read")
        self.assertEqual(docrev.classify({"method": "POST", "url": "http://x/csw", "body": "<csw:GetRecords/>"}), "read")
        self.assertEqual(docrev.classify({"method": "POST", "url": "http://x/export", "body": "{}"}), "write")
        self.assertEqual(docrev.classify({"method": "DELETE", "url": "http://x/1"}), "write")


class ResolveTest(unittest.TestCase):
    ENV = {"placeholders": {
        "CATALOG_URL": {"url": "https://cat.example/api/v2", "access": "forward",
                        "forward": {"service": "s", "port": 8080, "local_port": 18081, "path": "/api/v2"}},
        "WCS_URL": {"url": "https://wcs.example", "access": "route"},
    }}

    def test_forwarded_prefix_rewritten_including_chained_urls(self):
        self.assertEqual(docrev.resolve_url(self.ENV, "{CATALOG_URL}/csw"), "http://127.0.0.1:18081/api/v2/csw")
        self.assertEqual(docrev.resolve_url(self.ENV, "https://cat.example/api/v2/csw?a=1"),
                         "http://127.0.0.1:18081/api/v2/csw?a=1")

    def test_wcs10_service_exception(self):
        xml = b'<ServiceExceptionReport><ServiceException code="InvalidParameterValue">bad coverage</ServiceException></ServiceExceptionReport>'
        self.assertEqual(docrev.summarize(xml, "text/xml")["exceptions"], ["bad coverage"])

    def test_route_access_left_public(self):
        self.assertEqual(docrev.resolve_url(self.ENV, "{WCS_URL}/wcs"), "https://wcs.example/wcs")


class SummarizeTest(unittest.TestCase):
    def test_ows_exception_and_csw_counts(self):
        xml = (b'<?xml version="1.0"?><csw:GetRecordsResponse><csw:SearchResults numberOfRecordsMatched="3" '
               b'numberOfRecordsReturned="1" nextRecord="2"><mc:MCDEMRecord><mc:links scheme="WCS" name="p" '
               b'description="">https://w/wcs</mc:links></mc:MCDEMRecord></csw:SearchResults></csw:GetRecordsResponse>')
        s = docrev.summarize(xml, "application/xml")
        self.assertEqual(s["numberOfRecordsMatched"], "3")
        self.assertEqual(s["links"][0]["scheme"], "WCS")
        self.assertIn("mc:MCDEMRecord", s["element_names"])
        err = docrev.summarize(b'<ows:ExceptionReport><ows:ExceptionText>bad</ows:ExceptionText></ows:ExceptionReport>', "")
        self.assertEqual(err["exceptions"], ["bad"])


class ShapeTest(unittest.TestCase):
    def test_xml_shape_keeps_prefixes_and_tolerates_ellipsis(self):
        xml = '<?xml version="1.0"?><a:Root xmlns:a="u"><a:Item id="1"><a:x>1</a:x></a:Item>\n...\n<a:Item id="2"/></a:Root>'
        self.assertEqual(docrev.xml_shape(xml), {"a:Root", "a:Root/a:Item", "a:Root/a:Item/@id", "a:Root/a:Item/a:x"})

    def test_json_shape_collapses_arrays(self):
        self.assertEqual(docrev.json_shape({"a": [{"b": 1}, {"c": 2}]}), {"a", "a[].b", "a[].c"})

    def test_shape_diff_under_rebases_wrappers(self):
        d = Path(tempfile.mkdtemp())
        (d / "doc.xml").write_text("<R><mc:Rec><mc:new/><mc:same/></mc:Rec></R>")
        (d / "live.xml").write_text("<W><X><mc:Rec><mc:old/><mc:same/></mc:Rec></X></W>")
        out = io.StringIO()
        with redirect_stdout(out):
            docrev.cmd_shape_diff(argparse.Namespace(a=str(d / "doc.xml"), b=str(d / "live.xml"), under="mc:Rec", ignore=None))
        res = json.loads(out.getvalue())
        self.assertEqual(res["only_in_a"], ["mc:Rec/mc:new"])
        self.assertEqual(res["only_in_b"], ["mc:Rec/mc:old"])


class DeployDiffTest(unittest.TestCase):
    DIFF = textwrap.dedent("""\
        diff --git a/c/values.yaml b/c/values.yaml
        new file mode 100644
        --- /dev/null
        +++ b/c/values.yaml
        @@ -0,0 +1,4 @@
        +image:
        +  repository: common/pycsw
        +  tag: v7.0.3
        +password: hunter2
        """)

    def test_added_keys_with_line_numbers(self):
        d = Path(tempfile.mkdtemp()) / "x.diff"
        d.write_text(self.DIFF)
        out = io.StringIO()
        with redirect_stdout(out):
            docrev.cmd_deploy_diff(argparse.Namespace(pr=None, diff=str(d), max_keys=10))
        f = json.loads(out.getvalue())["c/values.yaml"]
        self.assertEqual(f["status"], "new")
        self.assertEqual([(k["line"], k["key"], k["value"]) for k in f["added_keys"]],
                         [(2, "repository", "common/pycsw"), (3, "tag", "v7.0.3")])


class ReleaseFilterTest(unittest.TestCase):
    def test_annotation_wins_over_prefix(self):
        items = [{"metadata": {"name": "dem-a", "annotations": {"meta.helm.sh/release-name": "dem"}}},
                 {"metadata": {"name": "dem-dev-b"}}]
        self.assertEqual([o["metadata"]["name"] for o in docrev.filter_release(items, "dem")], ["dem-a"])
        self.assertEqual(len(docrev.filter_release(items[1:], "dem")), 1)


class RedactTest(unittest.TestCase):
    def test_masks_passwords_and_url_credentials(self):
        self.assertEqual(docrev.redact_secrets("password: x postgresql://u:p@h/db"), "password: *** postgresql://***:***@h/db")


PORTAL_STYLES = textwrap.dedent("""\
    ## Geocode
    ```curl
    curl -H 'x-api-key: <x-api-key>' '<geocoding_url>/search/query?q=haifa'
    ```
    <details style={{color: 'red'}}>
    ```json title="Response"
    {"type": "FeatureCollection"}
    ```
    </details>

    ## WFS
    ```
    {WFS_URL}/wfs?service=WFS&
    request=GetFeature&
    typeNames=a:b
    ```

    Make a `POST` request to `<RASTER-CATALOG-SERVICE_URL>/csw` with this body:
    ```xml
    <csw:GetRecords service="CSW"/>
    ```

    ```
    POST Request
    url:
    {VALHALLA_URL}/route?json={}
    body:
    {"locations": [1, 2]}
    ```
    """)


class PortalStylesTest(unittest.TestCase):
    def setUp(self):
        path = Path(tempfile.mkdtemp()) / "doc.md"
        path.write_text(PORTAL_STYLES)
        self.reqs = [b for b in docrev.extract(path)["blocks"] if b["role"] == "request"]
        self.roles = [b["role"] for b in docrev.extract(path)["blocks"]]

    def test_curl_lang_and_lowercase_placeholders(self):
        r = self.reqs[0]["request"]
        self.assertTrue(r["url"].startswith("<geocoding_url>/search"))
        self.assertEqual(r["headers"]["x-api-key"], "<x-api-key>")

    def test_styled_details_is_response(self):
        self.assertIn("example-response", self.roles)

    def test_multiline_kvp_url_joined(self):
        self.assertEqual(self.reqs[1]["request"]["url"], "{WFS_URL}/wfs?service=WFS&request=GetFeature&typeNames=a:b")

    def test_body_endpoint_from_prose(self):
        b = self.reqs[2]
        self.assertTrue(b["endpoint_from_prose"])
        self.assertEqual((b["request"]["method"], b["request"]["url"]), ("POST", "<RASTER-CATALOG-SERVICE_URL>/csw"))
        self.assertEqual(b["safety"], "read")

    def test_labeled_block_json_query_param(self):
        r = self.reqs[3]["request"]
        self.assertEqual(r["method"], "GET")
        self.assertIn("route?json=%7B%22locations%22", r["url"])


class AuthAndEnvTest(unittest.TestCase):
    ENV = {"placeholders": {"RASTER_CATALOG_SERVICE_URL": {"url": "https://cat/"},
                            "GEOCODING_URL": {"url": "https://geo", "aliases": ["geocoding_url"]}},
           "token": {"header": "x-api-key"}, "headers": {"x-user-id": "me"},
           "read_posts": [r"/search/"]}

    def test_placeholder_spelling_variants_resolve(self):
        self.assertEqual(docrev.resolve_url(self.ENV, "<RASTER-CATALOG-SERVICE_URL>/csw"), "https://cat/csw")
        self.assertEqual(docrev.resolve_url(self.ENV, "<geocoding_url>/q"), "https://geo/q")

    def test_token_header_and_extra_headers(self):
        h = docrev.apply_auth(self.ENV, "T", {"x-api-key": "<x-api-key>", "x-user-id": "<x-user-id>"})
        self.assertEqual(h, {"x-api-key": "T", "x-user-id": "me"})
        self.assertEqual(docrev.apply_auth(self.ENV, "T", {}), {"x-api-key": "T", "x-user-id": "me"})

    def test_read_posts_allowlist(self):
        req = {"method": "POST", "url": "https://geo/search/query", "body": "{}"}
        self.assertEqual(docrev.classify(req), "write")
        self.assertEqual(docrev.classify(req, self.ENV), "read")
        self.assertEqual(docrev.classify({"method": "POST", "url": "https://x/export-tasks"}, self.ENV), "write")


    def test_host_allowlist(self):
        self.assertEqual(docrev.env_hosts(self.ENV) >= {"cat", "geo"}, True)
        self.assertNotIn("ows.terrestris.de", docrev.env_hosts(self.ENV))
        self.assertIsNone(docrev.target_error(self.ENV, "https://cat/csw"))
        self.assertIn("error", docrev.target_error(self.ENV, "https://ows.terrestris.de/wms"))

    def test_localhost_only_through_forwards(self):
        self.assertIn("error", docrev.target_error(self.ENV, "http://localhost:8080/csw"))
        self.assertIn("error", docrev.target_error(ResolveTest.ENV, "http://127.0.0.1:8080/csw"))
        self.assertIsNone(docrev.target_error(ResolveTest.ENV, "http://127.0.0.1:18081/api/v2/csw"))

    def test_namespace_per_placeholder(self):
        env = {"namespace": "dem-dev", "placeholders": {"A": {"url": "https://a"}, "B": {"url": "https://b", "namespace": "3d-dev"}}}
        self.assertEqual([docrev.ns_of(env, e) for e in env["placeholders"].values()], ["dem-dev", "3d-dev"])


class ExtractEdgeTest(unittest.TestCase):
    def extract(self, text):
        path = Path(tempfile.mkdtemp()) / "doc.md"
        path.write_text(textwrap.dedent(text))
        return docrev.extract(path)["blocks"]

    def test_syntax_template_is_not_request(self):
        blocks = self.extract("""\
            ```
            <NOMINATIM_URL>/lookup?osm_ids=[N|W|R]<value>,…,…,&<params>
            ```
            """)
        self.assertNotEqual(blocks[0]["role"], "request")

    def test_long_fence_and_spaced_lang(self):
        blocks = self.extract("""\
            ``````md
            ```bash
            inner
            ```
            ``````
            ``` bash
            {X_URL}/a?b=c
            ```
            """)
        self.assertEqual(len(blocks), 2)
        self.assertEqual((blocks[1]["lang"], blocks[1]["role"]), ("bash", "request"))

    def test_one_line_fence_is_inline(self):
        blocks = self.extract("""\
            ```code``` here
            ```bash
            {X_URL}/a?b=c
            ```
            """)
        self.assertEqual([b["role"] for b in blocks], ["request"])

    def test_placeholder_alone_is_not_request(self):
        blocks = self.extract("""\
            ```bash
             <CATALOG_URL>
            ```
            """)
        self.assertNotEqual(blocks[0]["role"], "request")

    def test_lone_endpoint_before_body(self):
        blocks = self.extract("""\
            We'll invoke a POST GetFeature request
            ```
            <PARTS_URL>/wfs
            ```
            with the following body:

            ```xml
            <wfs:GetFeature service="WFS"/>
            ```
            """)
        self.assertEqual([b["role"] for b in blocks], ["endpoint", "request"])
        self.assertEqual(blocks[1]["request"]["url"], "<PARTS_URL>/wfs")

    def test_xml_samples_near_request_prose_are_not_bodies(self):
        blocks = self.extract("""\
            Find the URL by sending a **GetCapabilities** request.

            ```xml title="Link for WMTS"
            <mc:links scheme="WMTS" name="x">'<URL>'</mc:links>
            ```
            :::warning
            To prevent oversized payloads, exceeding the limit triggers:

            ```xml
            <?xml version="1.0" encoding="UTF-8"?>
            <ows:ExceptionReport version="2.0.0"/>
            ```
            :::
            We can request a subset of this extent:
            ```xml
            <gml:Envelope srsName="EPSG:4326"/>
            ```
            """)
        self.assertEqual([b["role"] for b in blocks], ["xml", "xml", "xml"])

    def test_xml_operation_body_without_endpoint_is_request_body(self):
        blocks = self.extract("""\
            Send the request with this body:
            ```xml
            <!-- filter by type -->
            <wfs:GetFeature service="WFS"/>
            ```
            """)
        self.assertEqual(blocks[0]["role"], "request-body")

    def test_ogc_operation_body_without_request_prose(self):
        blocks = self.extract("""\
            Records of a given type:
            ```xml
            <csw:GetRecords service="CSW" version="2.0.2"/>
            ```
            And what comes back:
            ```xml
            <csw:GetRecordsResponse/>
            ```
            """)
        self.assertEqual([b["role"] for b in blocks], ["request-body", "xml"])

    def test_plain_response_label(self):
        blocks = self.extract("""\
            Response:

            ```xml
            <csw:GetRecordsResponse/>
            ```
            **Example response:**
            ```json
            {"a": 1}
            ```
            """)
        self.assertEqual([b["role"] for b in blocks], ["example-response", "example-response"])

    def test_sentence_ending_in_response_is_not_label(self):
        blocks = self.extract("""\
            We'll add `outputFormat` to each request for a json formatted response

            ```
            {X_URL}/wfs?service=wfs&request=GetCapabilities
            ```
            """)
        self.assertEqual(blocks[0]["role"], "request")


class SummarizeFormatsTest(unittest.TestCase):
    def test_png_dimensions(self):
        png = b"\x89PNG\r\n\x1a\n" + b"\0\0\0\rIHDR" + (256).to_bytes(4, "big") * 2
        self.assertEqual(docrev.summarize(png, "image/png"), {"binary": "png", "width": 256, "height": 256})

    def test_geojson(self):
        body = json.dumps({"type": "FeatureCollection", "features": [
            {"geometry": {"type": "Point"}, "properties": {"name": "a"}}]}).encode()
        s = docrev.summarize(body, "application/json")
        self.assertEqual((s["features"], s["geometry_types"], s["property_keys"]), (1, ["Point"], ["name"]))

    def test_tiff_ranged_prefix(self):
        geokeys = b"".join(k.to_bytes(2, "little") for k in (1, 1, 0, 1, 3072, 0, 1, 32636))
        ifd = (2).to_bytes(2, "little") + b"".join(
            tag.to_bytes(2, "little") + (3).to_bytes(2, "little") + count.to_bytes(4, "little") + val.to_bytes(4, "little")
            for tag, count, val in ((256, 1, 512), (34735, 8, 100)))
        head = b"II*\0" + (8).to_bytes(4, "little") + ifd
        full = head.ljust(100, b"\0") + geokeys
        self.assertEqual(docrev.tiff_info(full), {"width": 512, "epsg": [32636]})
        self.assertEqual(docrev.tiff_info(head), {"width": 512, "truncated": True})
        self.assertEqual(docrev.tiff_info(head[:20]), {"truncated": True})
        self.assertEqual(docrev.tiff_info(b"II*\0"), {"truncated": True})

    def test_capabilities_identifiers(self):
        xml = b"<Capabilities><Layer><ows:Identifier>ortho</ows:Identifier></Layer><FeatureType><Name>a:b</Name></FeatureType></Capabilities>"
        self.assertEqual(docrev.summarize(xml, "text/xml")["identifiers"], {"ows:Identifier": ["ortho"], "Name": ["a:b"]})



class PodCallTest(unittest.TestCase):
    def test_missing_python_named(self):
        err = 'exec failed: unable to start container process: exec: "python3": executable file not found in $PATH'
        self.assertIn("python3", docrev.pod_exec_error(err)["error"])

    def test_other_exec_failures_not_blamed_on_python(self):
        err = 'Error from server (NotFound): deployments.apps "nope" not found'
        e = docrev.pod_exec_error(err)
        self.assertNotIn("python3", e["error"])
        self.assertIn("NotFound", e["detail"])

    def test_connection_error_reported_by_pod_script(self):
        out = subprocess.run([sys.executable, "-c", docrev.POD_HTTP,
                              json.dumps({"url": "http://127.0.0.1:9/", "method": "GET"})],
                             capture_output=True, text=True)
        self.assertEqual(out.returncode, 0)
        self.assertIn("error", json.loads(out.stdout))

class GapFixesTest(unittest.TestCase):
    def extract(self, text):
        path = Path(tempfile.mkdtemp()) / "doc.md"
        path.write_text(textwrap.dedent(text))
        return docrev.extract(path)

    def test_placeholder_noise_ignored(self):
        found = docrev.PLACEHOLDER_RE.findall("p[0] {jy_gAbhgshF} {TileRow} {entityId} {x} [COORD1_X] {TOKEN}")
        self.assertEqual(found, ["{TileRow}", "{entityId}", "{x}", "[COORD1_X]", "{TOKEN}"])

    def test_method_placeholder_is_template(self):
        b = self.extract("""\
            ```bash
            curl --request <http_method> '<SERVICE_URL>' --header 'x-api-key: <token>'
            ```
            """)["blocks"][0]
        self.assertEqual(b["role"], "template")
        self.assertNotIn("request", b)

    def test_request_label_above_fence(self):
        b = self.extract("""\
            Make the request to `{EXPORT_URL}/export-tasks`.

            POST Request
            ```json
            {"catalogRecordID": "x"}
            ```
            """)["blocks"][0]
        self.assertEqual((b["role"], b["request"]["method"], b["request"]["url"]), ("request", "POST", "{EXPORT_URL}/export-tasks"))
        b = self.extract("""\
            POST Request
            ```json
            {"catalogRecordID": "x"}
            ```
            """)["blocks"][0]
        self.assertEqual((b["role"], b["method"]), ("request-body", "POST"))

    def test_subheading_inherits_step(self):
        doc = self.extract("""\
            ## Get coverage (Step 3)
            ### Request
            ```bash
            {WCS_URL}/wcs?request=GetCoverage
            ```
            ## Notes
            ```bash
            {WCS_URL}/wcs?request=GetCapabilities
            ```
            """)
        self.assertEqual([b["step"] for b in doc["blocks"]], ["3", None])
        self.assertEqual(doc["kind_hint"], "examples")

    def test_discover_reports_oc_failure(self):
        fail = subprocess.CompletedProcess([], 1, "", "Unable to connect to the server")
        with unittest.mock.patch.object(docrev, "oc", return_value=fail):
            with self.assertRaises(SystemExit) as e:
                docrev.cmd_env_discover(argparse.Namespace(namespace="ns", release=None))
        self.assertIn("Unable to connect", json.loads(e.exception.code)["detail"])

    def test_check_reports_unlistable_routes(self):
        env = {"namespace": "ns", "token": {}, "placeholders": {"A": {"url": "https://a", "route": "r"}}}
        ok = subprocess.CompletedProcess([], 0, "me", "")
        fail = subprocess.CompletedProcess([], 1, "", "timeout")
        out = io.StringIO()
        with unittest.mock.patch.object(docrev, "load_env", return_value=env), \
                unittest.mock.patch.object(docrev, "oc", side_effect=[ok, fail]), redirect_stdout(out):
            docrev.cmd_env_check(argparse.Namespace(env="e"))
        issues = [f["issue"] for f in json.loads(out.getvalue())]
        self.assertIn("cannot list routes in ns", issues)
        self.assertFalse(any("missing" in i for i in issues))

    def call(self, url):
        env = {"placeholders": {}, "hosts": ["x"], "token": {"param": "token"}}
        d = Path(tempfile.mkdtemp())
        (d / "r.json").write_text(json.dumps({"method": "GET", "url": url, "headers": {}, "body": None}))
        resp = unittest.mock.MagicMock(status=200, headers={"Content-Type": "text/plain"})
        resp.read.return_value = b"ok"
        out = io.StringIO()
        with unittest.mock.patch.object(docrev, "load_env", return_value=env), \
                unittest.mock.patch.object(docrev, "token_for", return_value="T"), \
                unittest.mock.patch.object(docrev, "RUNS_DIR", d), \
                unittest.mock.patch("urllib.request.urlopen", return_value=resp), redirect_stdout(out):
            docrev.cmd_call(argparse.Namespace(env="e", doc=None, block=None, request=str(d / "r.json"), sub=None,
                                               base=None, allow_write=False, head=False, range=None, timeout=5, run="pr-1"))
        return json.loads(out.getvalue()), d

    def test_token_added_flag_and_run_dir(self):
        r, d = self.call("http://x/a")
        self.assertTrue(r["token_added"])
        self.assertEqual(Path(r["saved"]).parent, d / "pr-1")
        self.assertFalse(self.call("http://x/a?token=<token>")[0]["token_added"])

    def test_binary_summaries(self):
        jpeg = b"\xff\xd8\xff\xe0\x00\x04ab\xff\xc0\x00\x11\x08" + (300).to_bytes(2, "big") + (400).to_bytes(2, "big")
        self.assertEqual(docrev.summarize(jpeg, "image/jpeg"), {"binary": "jpeg", "width": 400, "height": 300})
        png = b"\x89PNG\r\n\x1a\n" + b"\0\0\0\rIHDR" + (256).to_bytes(4, "big") * 2
        self.assertEqual(docrev.summarize(gzip.compress(png)[:-8], ""), {"gzip": True, "binary": "png", "width": 256, "height": 256})
        qm = struct.pack("<3d2f", 0, 0, 0, -12.5, 830.25) + b"\0" * 56 + struct.pack("<I", 1234)
        self.assertEqual(docrev.summarize(gzip.compress(qm), "application/vnd.quantized-mesh"),
                         {"gzip": True, "binary": "quantized-mesh", "min_height": -12.5, "max_height": 830.25, "vertices": 1234})
        self.assertEqual(docrev.summarize(gzip.compress(qm), "binary/octet-stream", "https://t/0/1/0.terrain?v=1")["vertices"], 1234)
        self.assertEqual(docrev.summarize(b"\0\1\2", "application/octet-stream"), {"binary": "unknown", "bytes": 3})
        layer = b"\x0a\x05roads" + b"\x12\x00" * 2
        tile = b"\x1a" + bytes([len(layer)]) + layer
        self.assertEqual(docrev.summarize(tile, "application/vnd.mapbox-vector-tile")["layers"], [{"name": "roads", "features": 2}])

    def test_element_names_any_prefix(self):
        s = docrev.summarize(b"<wfs:FeatureCollection><dem:tile><dem:name>a</dem:name></dem:tile><place/></wfs:FeatureCollection>", "text/xml")
        self.assertEqual(s["element_names"], ["dem:name", "dem:tile", "place", "wfs:FeatureCollection"])


class SiteTest(unittest.TestCase):
    def setUp(self):
        self.repo = Path(tempfile.mkdtemp())
        docs = self.repo / "docs" / "A"
        docs.mkdir(parents=True)
        (self.repo / "static" / "img").mkdir(parents=True)
        (self.repo / "static" / "img" / "p.png").write_bytes(b"")
        (docs / "guide.md").write_text("---\nslug: my-guide\n---\n## Get Data (Step 1)\n## Notes {#notes}\n")
        (docs / "old.md").write_text("---\nid: old-page\n---\n# Old\n")
        (docs / "README.md").write_text(textwrap.dedent("""\
            [ok](/docs/A/my-guide#get-data-step-1) [ok](./guide.md#notes) ![i](/img/p.png)
            [bad](/docs/A/guide) [anchor](#nope) [case](/docs/a/my-guide) `[code](/docs/x)`
            [ext](https://example.com) [file](/docs/A/guide.md)
            """))
        sub = self.repo / "docs" / "A" / "svc"
        sub.mkdir()
        (sub / "README.md").write_text("---\nslug: info\n---\n[ok](../guide.md) [ok](../my-guide#notes) [bad](../../my-guide)\n")
        (self.repo / "sidebars.js").write_text("items: ['A/old-page']\n")
        self.patches = [unittest.mock.patch.object(docrev, "SITE", self.repo),
                        unittest.mock.patch.object(docrev, "DOCS_DIR", self.repo / "docs")]
        for p in self.patches:
            p.start()

    def tearDown(self):
        for p in self.patches:
            p.stop()

    def run_cmd(self, fn, **kw):
        out = io.StringIO()
        with redirect_stdout(out):
            fn(argparse.Namespace(**kw))
        return json.loads(out.getvalue())

    def test_doc_route(self):
        self.assertEqual(docrev.doc_route(Path("A/01-x.md"), "")["url"], "/docs/A/x")
        self.assertEqual(docrev.doc_route(Path("A/README.md"), "")["url"], "/docs/A")
        self.assertEqual(docrev.doc_route(Path("A/g.md"), "---\nslug: /top\n---\n")["url"], "/docs/top")

    def test_links(self):
        r = self.run_cmd(docrev.cmd_links, docs=[str(self.repo / "docs/A/README.md")])
        self.assertEqual([(x["target"], x["issue"]) for x in r], [
            ("/docs/A/guide", "no page at this url"),
            ("#nope", "no anchor #nope in docs/A/README.md"),
            ("/docs/a/my-guide", "case differs from the page url")])

    def test_relative_url_resolves_against_page_url(self):
        r = self.run_cmd(docrev.cmd_links, docs=[str(self.repo / "docs/A/svc/README.md")])
        self.assertEqual([(x["target"], x["resolved"]) for x in r], [("../../my-guide", "/docs/my-guide")])

    def test_refs(self):
        r = self.run_cmd(docrev.cmd_refs, path="docs/A/old.md", ref=None)
        self.assertEqual((r["url"], [h["file"] for h in r["references"]]), ("/docs/A/old-page", ["sidebars.js"]))

    def test_profile_diff(self):
        prev = self.repo / "v1.md"
        prev.write_text("| Change | Name | Type |\n|---|---|---|\n| | `mc:a` | t |\n| 🗑️ | mc:gone | t |\n| | mc:SRS | t |\n| | mc:dropped | t |\n")
        cur = self.repo / "v2.md"
        cur.write_text("typename `mc:Rec`\n\n| Change | Name | Type |\n|---|---|---|\n| 🆕 | mc:a | t |\n| | mc:srs | t |\n| | mc:b | t |\n")
        resp = self.repo / "resp.xml"
        resp.write_text("<mc:Rec><mc:a/><mc:srs/><mc:extra/></mc:Rec>")
        r = self.run_cmd(docrev.cmd_profile_diff, doc=str(cur), response=str(resp), previous=str(prev), prefix=None)
        names = lambda k: [f["name"] for f in r[k]]
        self.assertEqual(names("documented_not_returned"), ["mc:b"])
        self.assertEqual(r["returned_not_documented"], ["mc:extra"])
        self.assertEqual(names("marked_new_but_in_previous"), ["mc:a"])
        self.assertEqual(r["unmarked_but_not_in_previous"][0], {"name": "mc:srs", "line": 6, "marker": None, "previous_spelling": "mc:SRS"})
        self.assertEqual(names("previous_unmarked_but_gone"), ["mc:SRS", "mc:dropped"])

    def test_openapi_ops_and_live_diff(self):
        spec = {"info": {"version": "1"}, "components": {"parameters": {"Id": {"name": "id", "required": True}}},
                "paths": {"/items/{id}": {"parameters": [{"$ref": "#/components/parameters/Id"}],
                                          "get": {"parameters": [{"name": "q"}]}, "delete": {}}}}
        ops = docrev.openapi_ops(spec)
        self.assertEqual([(o["method"], o["params"], o["safety"]) for o in ops], [("GET", ["id*", "q"], "read"), ("DELETE", ["id*"], "write")])
        (self.repo / "spec.yaml").write_text(json.dumps(spec))
        live = {"info": {"version": "2"}, "paths": {"/items/{id}": {"get": {"parameters": [{"name": "id", "required": True}]}}}}
        (self.repo / "live.json").write_text(json.dumps(live))
        r = self.run_cmd(docrev.cmd_openapi, spec=str(self.repo / "spec.yaml"), live=str(self.repo / "live.json"))
        self.assertEqual((r["version"], r["only_in_doc"], r["param_diff"][0]["live"]), (["1", "2"], ["DELETE /items/{id}"], ["id*"]))


class PlaceholderNotationTest(unittest.TestCase):
    def test_site_notation(self):
        doc = textwrap.dedent("""\
            Send `{WCS_URL}/wcs` with `<token>`; tiles at `{z}/{x}/{y}.png`.
            ```bash
            curl '<DEM_CATALOG_SERVICE_URL>/csw?token=<token>' --data-raw '<csw:GetRecords service="CSW">
              <gml:posList>[COORD1_LAT] [COORD1_LON]</gml:posList>
              <BBOX><X><SRS></X></BBOX>
            </csw:GetRecords>'
            curl '<x-api-key>' '[LAYER]' '<3D_CATALOG_SERVICE_URL>' '{entityId}' '{TileMatrix}'
            ```
            ```xml
            <mc:links scheme="WCS">{WCS_URL}/wcs</mc:links>
            ```
            """)
        got = [(i["line"], i["placeholder"], i["use"]) for i in docrev.placeholder_issues(doc)]
        self.assertEqual(got, [
            (1, "{WCS_URL}", "<WCS_URL>"),
            (5, "<SRS>", "[SRS]"),
            (7, "<x-api-key>", "<X_API_KEY>"),
            (7, "[LAYER]", "<LAYER>"),
            (7, "{entityId}", "<ENTITY_ID>"),
            (10, "{WCS_URL}", "[WCS_URL]")])


if __name__ == "__main__":
    unittest.main()


class ProdAndSourcesTest(unittest.TestCase):
    def setUp(self):
        self.tmp = Path(tempfile.mkdtemp())
        (self.tmp / "prod.yaml").write_text("name: prod\nnamespace: prod-ns\ncluster: false\nread_only: true\n"
                                           "placeholders:\n  X_URL: {url: 'https://x.example/api', access: forward,"
                                           " forward: {service: s, port: 1, local_port: 9}}\n")
        (self.tmp / "dev.yaml").write_text("name: dev\nnamespace: dev-ns\n")
        self.envs = unittest.mock.patch.object(docrev, "ENVS_DIR", self.tmp)
        self.envs.start()

    def tearDown(self):
        self.envs.stop()

    def test_oc_refused_on_no_cluster_namespace(self):
        with unittest.mock.patch.object(docrev.subprocess, "run") as run, self.assertRaises(SystemExit):
            docrev.oc("get", "routes", "-n", "prod-ns")
        run.assert_not_called()

    def test_oc_allowed_elsewhere(self):
        done = subprocess.CompletedProcess([], 0, "{}", "")
        with unittest.mock.patch.object(docrev.subprocess, "run", return_value=done) as run:
            docrev.oc("get", "routes", "-n", "dev-ns")
        run.assert_called_once()

    def test_no_forward_rewrite_and_no_forward_cmd(self):
        env = docrev.load_env("prod")
        self.assertEqual(docrev.resolve_url(env, "<X_URL>/a"), "https://x.example/api/a")
        with self.assertRaises(SystemExit):
            docrev.cmd_env_forward(argparse.Namespace(env="prod", only=None))

    def test_env_check_uses_http_not_oc(self):
        with unittest.mock.patch.object(docrev, "unreachable", return_value=None), \
                unittest.mock.patch.object(docrev, "http_status", return_value=(None, "URLError: nope")), \
                unittest.mock.patch.object(docrev, "oc") as oc, redirect_stdout(io.StringIO()) as out:
            docrev.cmd_env_check(argparse.Namespace(env="prod"))
        oc.assert_not_called()
        issues = [f["issue"] for f in json.loads(out.getvalue())]
        self.assertIn("entry point unreachable", issues)

    def test_chart_components(self):
        d = self.tmp / "chart"
        d.mkdir()
        (d / "Chart.yaml").write_text("name: c\ndependencies:\n  - {name: pycsw, version: 7.0.3}\n")
        (d / "values.yaml").write_text("a:\n  image: {repository: common/pycsw, tag: v7.0.3}\n"
                                       "b:\n  - image: {repository: geoserver-api, tag: v1.4.0}\n")
        got = [(c["component"], c["version"], c["kind"]) for c in docrev.chart_components(d)]
        self.assertEqual(got, [("geoserver-api", "1.4.0", "image"), ("pycsw", "7.0.3", "image"),
                               ("pycsw", "7.0.3", "chart")])

    def test_chart_components_prefixed_pairs_and_image_strings(self):
        d = self.tmp / "chart2"
        d.mkdir()
        (d / "Chart.yaml").write_text("name: c\n")
        (d / "values.yaml").write_text("gs:\n  image: {geoserverRepository: vector/geoserver-os, geoserverTag: v1.0.0,"
                                       " sidecarRepository: side-car, sidecarTag: 2.1.3}\n"
                                       "x:\n  image: registry/app/opa:0.9\n")
        got = [(c["component"], c["version"]) for c in docrev.chart_components(d)]
        self.assertEqual(got, [("geoserver-os", "1.0.0"), ("opa", "0.9"), ("side-car", "2.1.3")])

    def test_find_source_prefers_known_mapping(self):
        seen = []

        def ok(*args):
            seen.append(args[0])
            return args[0] == "repos/Org/geoserver-polygon-parts/git/ref/tags/v3.3.1"
        with unittest.mock.patch.object(docrev, "gh_ok", side_effect=ok):
            r = docrev.find_source("pp-geoserver", "3.3.1", "Org", {"pp-geoserver": "Org/geoserver-polygon-parts"})
        self.assertEqual((r["repo"], r["ref"], r["confirmed"]), ("Org/geoserver-polygon-parts", "v3.3.1", True))
        self.assertFalse(any(a == "repos/Org/pp-geoserver" for a in seen))

    def test_find_source_guess_is_unconfirmed(self):
        with unittest.mock.patch.object(docrev, "gh_ok", side_effect=lambda a: a in ("repos/Org/pycsw",
                                                                                     "repos/Org/pycsw/git/ref/tags/v7.0.3")):
            r = docrev.find_source("pycsw", "v7.0.3", "Org", {})
        self.assertEqual((r["repo"], r["ref"], r["confirmed"]), ("Org/pycsw", "v7.0.3", False))


class TokenAndSiteTest(unittest.TestCase):
    def test_token_in_request_examples(self):
        text = textwrap.dedent('''\
            Every request needs a token.
            ```bash
            curl '<X_URL>/csw?token=<token>' \\
            --header 'x-api-key: <token>'
            <X_URL>/wcs?request=GetCapabilities&token=<token>
            ```
            ```javascript
            new Cesium.Resource({url: '<X_URL>', queryParameters: {token: '<token>'}});
            const layer = L.tileLayer(url + '?token=<token>');
            ```
            ''')
        self.assertEqual([i["line"] for i in docrev.token_issues(text)], [3, 4, 5])

    def test_use_site_follows_the_docs_checkout(self):
        site = Path(tempfile.mkdtemp())
        (site / "docs" / "a").mkdir(parents=True)
        (site / "docusaurus.config.ts").write_text("")
        doc = site / "docs" / "a" / "page.md"
        doc.write_text("# Page\n")
        old = (docrev.SITE, docrev.DOCS_DIR)
        try:
            docrev.use_site([str(doc)])
            self.assertEqual((docrev.SITE, docrev.DOCS_DIR), (site.resolve(), site.resolve() / "docs"))
            self.assertIn("/docs/a/page", docrev.all_routes())
        finally:
            docrev.SITE, docrev.DOCS_DIR = old


class ReachAndDeployFactsTest(unittest.TestCase):
    def test_unreachable_dns(self):
        with unittest.mock.patch.object(docrev.socket, "getaddrinfo", side_effect=docrev.socket.gaierror):
            self.assertEqual(REAL_UNREACHABLE("https://x.example/a")["error"], "network unreachable (DNS)")

    def test_unreachable_tcp(self):
        with unittest.mock.patch.object(docrev.socket, "getaddrinfo", return_value=[]), \
                unittest.mock.patch.object(docrev.socket, "create_connection", side_effect=OSError):
            self.assertEqual(REAL_UNREACHABLE("https://x.example/a")["error"], "network unreachable (VPN?)")

    def test_localhost_is_not_probed(self):
        with unittest.mock.patch.object(docrev.socket, "getaddrinfo") as g:
            self.assertIsNone(REAL_UNREACHABLE("http://127.0.0.1:18081/x"))
        g.assert_not_called()

    def test_config_keys(self):
        self.assertEqual(docrev.config_keys("a:\n  b: 1\nc: [ {d: 2} ]\n", ".yaml"), {"a", "a.b", "c", "c.d"})
        self.assertEqual(docrev.config_keys("M = {\n  'pycsw:Id': 'id',\n  \"pycsw:X\": 'x'}\n", ".py"),
                         {"pycsw:Id", "pycsw:X"})
        self.assertEqual(docrev.config_keys("[server]\nurl = http://a\nhome: /x\n", ".cfg"), {"url", "home"})

    def test_key_diff_only_against_same_path(self):
        files = [{"filename": "dem/charts/serving-v2/values.yaml", "status": "added", "sha": "n1"},
                 {"filename": "dem/charts/serving/values.yaml", "status": "modified", "sha": "n2"}]
        api = {"repos/o/r/pulls/1": {"base": {"sha": "B"}, "head": {"sha": "H"}},
               "repos/o/r/git/trees/B?recursive=1": {"tree": [{"type": "blob", "sha": "o2", "path": "dem/charts/serving/values.yaml"}]}}
        raw = {("dem/charts/serving-v2/values.yaml", "H"): "x: 1\n", ("dem/charts/serving/values.yaml", "H"): "a: 1\nb: 2\n",
               ("dem/charts/serving/values.yaml", "B"): "a: 1\n"}
        with unittest.mock.patch.object(docrev, "gh_json", side_effect=lambda *a: files if a[0] == "--paginate" else api[a[0]]), \
                unittest.mock.patch.object(docrev, "gh_raw", side_effect=lambda repo, path, ref: raw.get((path, ref))):
            facts = docrev.pr_file_facts("o/r", "1", 10)
        self.assertEqual(facts, {"dem/charts/serving/values.yaml": {"key_diff": {
            "against": "dem/charts/serving/values.yaml", "added": ["b"], "removed": []}}})


class TrialFixesTest(unittest.TestCase):
    def setUp(self):
        self.tmp = Path(tempfile.mkdtemp())

    def test_env_check_reads_endpoints_of_the_route_target(self):
        env = {"namespace": "ns", "token": {}, "placeholders": {
            "A_URL": {"url": "https://h/api/a/v1", "route": "a-route"},
            "B_URL": {"url": "https://h/api/b", "route": "b-route"}}}
        route = lambda name, path, svc, ok: {"metadata": {"name": name}, "spec": {"host": "h", "path": path, "to": {"name": svc}},
                                              "status": {"ingress": [{"conditions": [{"status": "True" if ok else "False"}]}]}}
        routes = [route("a-route", "/api/a/v1", "a-nginx", True), route("catch-all", "/", "portal", True),
                  route("b-route", "/api/b", "b-nginx", False), route("b-old", "/api/b", "b-old-nginx", True)]
        ready = {"a-nginx": {"subsets": [{"notReadyAddresses": [{"ip": "1"}]}]}, "portal": {"subsets": [{"addresses": [{"ip": "2"}]}]},
                 "b-old-nginx": {"subsets": [{"addresses": [{"ip": "3"}]}]}}

        def oc(*args):
            if args[:2] == ("get", "routes"):
                return subprocess.CompletedProcess([], 0, json.dumps({"items": routes}), "")
            if args[:2] == ("get", "endpoints"):
                return subprocess.CompletedProcess([], 0, json.dumps(ready[args[2]]), "")
            return subprocess.CompletedProcess([], 0, "me", "")
        with unittest.mock.patch.object(docrev, "load_env", return_value=env), \
                unittest.mock.patch.object(docrev, "token_for", return_value="T"), \
                unittest.mock.patch.object(docrev, "oc", side_effect=oc), redirect_stdout(io.StringIO()) as out:
            docrev.cmd_env_check(argparse.Namespace(env="e"))
        got = [(f["placeholder"], f["issue"], f.get("route")) for f in json.loads(out.getvalue())]
        self.assertEqual(got, [("A_URL", "service a-nginx has no ready endpoints", "a-route"),
                               ("B_URL", "route b-route not admitted (None)", None)])

    def test_profile_name_column_with_link_cells(self):
        text = ("| Name | Type |\n|---|---|\n| mc:id | text |\n| [mc:productType](#productType) | enum |\n"
                "| mc:footprint | geojson |\n")
        self.assertEqual([f["name"] for f in docrev.table_fields(text)], ["mc:id", "mc:productType", "mc:footprint"])

    def test_curl_data_from_file_classified_by_content(self):
        (self.tmp / "q.xml").write_text('<?xml version="1.0"?>\n<!-- query -->\n<csw:GetRecords\n service="CSW"/>\n')
        (self.tmp / "t.xml").write_text("<csw:Transaction><csw:Insert>?request=GetCapabilities</csw:Insert></csw:Transaction>")
        q = docrev.parse_curl(f"curl -X POST 'http://x/csw?request=GetRecords' -d @{self.tmp}/q.xml", data_files=True)
        self.assertEqual(q["body"], '<?xml version="1.0"?><!-- query --><csw:GetRecords service="CSW"/>')
        self.assertEqual(docrev.classify(q), "read")
        b = docrev.parse_curl(f"curl --data-binary @{self.tmp}/q.xml http://x/csw", data_files=True)
        self.assertIn("\n service", b["body"])
        t = docrev.parse_curl(f"curl 'http://x/csw?request=GetCapabilities' -d @{self.tmp}/t.xml", data_files=True)
        self.assertEqual(docrev.classify(t), "write")
        self.assertEqual(docrev.parse_curl("curl http://x -d @q.xml")["body"], "@q.xml")
        self.assertIn("error", docrev.parse_curl(f"curl http://x -d @{self.tmp}/none.xml", data_files=True))

    def test_untagged_images_take_the_owning_chart_default(self):
        import tarfile
        d = self.tmp / "chart"
        (d / "charts" / "plain").mkdir(parents=True)
        (d / "Chart.yaml").write_text("name: top\nappVersion: 9.9.9\ndependencies:\n"
                                      "  - {name: pycsw, alias: pycsw-a, version: 7.0.3}\n  - {name: pycsw, alias: pycsw-b, version: 7.0.3}\n"
                                      "  - {name: plain, version: 1.0.0}\n  - {name: absent, version: 2.0.0}\n")
        (d / "charts" / "plain" / "Chart.yaml").write_text("name: plain\nappVersion: 1.0.0\n")
        files = {"pycsw/Chart.yaml": "name: pycsw\nappVersion: 7.0.3\n",
                 "pycsw/templates/_helpers.tpl": '{{- default (printf "v%s" .Chart.AppVersion) .Values.image.tag }}\n'}
        with tarfile.open(d / "charts" / "pycsw-7.0.3.tgz", "w:gz") as t:
            for name, text in files.items():
                info = tarfile.TarInfo(name)
                info.size = len(text.encode())
                t.addfile(info, io.BytesIO(text.encode()))
        (d / "values.yaml").write_text("pycsw-a: {image: {repository: common/pycsw}}\npycsw-b: {image: {repository: common/pycsw}}\n"
                                       "plain: {image: {repository: common/plain}}\nabsent: {image: {repository: common/absent}}\n"
                                       "gs-a: {image: {repository: geoserver-os, tag: v1}}\ngs-b: {image: {repository: geoserver-os, tag: v1}}\n")
        got = {c["component"]: c for c in docrev.chart_components(d) if c["kind"] == "image"}
        self.assertEqual((got["pycsw"]["version"], got["pycsw"]["declared_in"]), ("7.0.3", ["values.yaml:pycsw-a.image", "values.yaml:pycsw-b.image"]))
        self.assertIn("appVersion", got["pycsw"]["note"])
        self.assertEqual((got["plain"]["version"], got["absent"]["version"]), ("", ""))
        self.assertIn("isn't vendored", got["absent"]["note"])
        self.assertEqual(got["geoserver-os"]["declared_in"], ["values.yaml:gs-a.image", "values.yaml:gs-b.image"])

    def test_fetch_keeps_git_output_off_stdout(self):
        comp = {"component": "c", "version": "1", "repo": "o/c", "ref": "v1", "confirmed": True}
        with unittest.mock.patch.object(docrev, "find_source", return_value=comp), \
                unittest.mock.patch.object(docrev, "RUNS_DIR", self.tmp), \
                unittest.mock.patch.object(docrev.subprocess, "run") as run, redirect_stdout(io.StringIO()) as out:
            docrev.cmd_sources(argparse.Namespace(repo=None, org="o", chart=None, image=["c:1"], accept=None, fetch=True))
        self.assertIs(run.call_args.kwargs["stdout"], sys.stderr)
        json.loads(out.getvalue())

    def test_guide_blocks_carry_a_role(self):
        path = self.tmp / "g.md"
        path.write_text(textwrap.dedent("""\
            ## Capabilities (Step 2)
            ```bash
            curl --location '<WCS_SERVICE_URL>/wcs?request=GetCapabilities'
            ```
            <details>
            <summary>Response</summary>

            ```xml
            <wcs:Capabilities/>
            ```
            </details>

            For example, given a coverage with the following extent:
            ```xml
            <gml:Envelope srsName="EPSG:4326"/>
            ```
            """))
        self.assertEqual([b["role"] for b in docrev.extract(path)["blocks"]], ["request", "example-response", "xml"])


class ProbeTest(unittest.TestCase):
    ENV = {"token": {"param": "token"}, "placeholders": {}}
    ENTRY = {"url": "https://h/api/", "probe": {"path": "/csw?request=GetCapabilities", "expect_root": "Capabilities"}}
    CAPS = (200, "application/xml", b'<?xml version="1.0"?><csw30:Capabilities xmlns:csw30="x"/>', None)
    DENIED = (401, "text/html", b"<html>401</html>", None)

    def run_probe(self, anon=DENIED, authed=CAPS, env=ENV, entry=ENTRY):
        calls = []

        def fetch(env, url, tok, **kw):
            calls.append((url, tok))
            return authed if tok else anon
        with unittest.mock.patch.object(docrev, "fetch", side_effect=fetch):
            got = docrev.probe_findings(env, "CAT", entry, "T")
        return [f["issue"] for f in got], calls

    def test_expected_answers_pass_and_root_is_namespace_agnostic(self):
        for body in (b"<csw30:Capabilities/>", b"<wcs:Capabilities/>", b"<Capabilities/>"):
            issues, calls = self.run_probe(authed=(200, "application/xml", body, None))
            self.assertEqual(issues, [])
        self.assertEqual(calls, [("https://h/api/csw?request=GetCapabilities", None),
                                 ("https://h/api/csw?request=GetCapabilities", "T")])
        wfs = {**self.ENTRY, "probe": {"path": "/wfs", "expect_root": "WFS_Capabilities"}}
        self.assertEqual(self.run_probe(authed=(200, "text/xml", b"<wfs:WFS_Capabilities/>", None), entry=wfs)[0], [])

    def test_html_catch_all_flagged(self):
        page = (200, "text/html", b"<!DOCTYPE html><html></html>", None)
        issues, _ = self.run_probe(anon=page, authed=page)
        self.assertEqual(issues, ["without token: 200, expected 401", "probe broken: HTML page"])

    def test_wrong_root_flagged(self):
        issues, _ = self.run_probe(authed=(200, "application/xml", b"<ows:ExceptionReport/>", None))
        self.assertEqual(issues, ["probe broken: root ExceptionReport, expected Capabilities"])

    def test_server_error_flagged(self):
        self.assertEqual(self.run_probe(authed=(503, "text/html", b"<html/>", None))[0], ["probe broken: HTTP 503"])

    def test_token_refused_flagged(self):
        for code in (401, 403):
            self.assertEqual(self.run_probe(authed=(code, "text/html", b"", None))[0],
                             [f"probe broken: token refused (HTTP {code})"])

    def test_auth_not_enforced_flagged(self):
        self.assertEqual(self.run_probe(anon=self.CAPS)[0], ["auth not enforced: probe answered without a token"])

    def test_other_anonymous_status_is_not_broken(self):
        issues, _ = self.run_probe(anon=(403, "text/html", b"", None))
        self.assertEqual(issues, ["without token: 403, expected 401"])

    def test_json_top_level_key(self):
        entry = {**self.ENTRY, "probe": {"path": "/q", "expect_root": "features"}}
        self.assertEqual(self.run_probe(authed=(200, "application/json", b'{"features": []}', None), entry=entry)[0], [])
        self.assertEqual(self.run_probe(authed=(200, "application/json", b'{"error": 1}', None), entry=entry)[0],
                         ["probe broken: JSON without top-level features"])

    def test_network_error_redacts_token(self):
        def urlopen(req, **kw):
            raise OSError(f"failed {req.full_url}")
        with unittest.mock.patch("urllib.request.urlopen", side_effect=urlopen):
            status, _, _, err = docrev.fetch(self.ENV, "https://h/a", "SECRET")
        self.assertIsNone(status)
        self.assertNotIn("SECRET", err)

    def test_no_probe_sends_nothing(self):
        self.assertEqual(self.run_probe(entry={"url": "https://h/api"}), ([], []))

    def test_forward_entry_probed_through_forward(self):
        env = {**self.ENV, "placeholders": {"CAT": {**self.ENTRY, "access": "forward",
                                                    "forward": {"service": "s", "port": 80, "local_port": 18099}}}}
        with unittest.mock.patch.object(docrev, "port_open", return_value=True):
            _, calls = self.run_probe(env=env, entry=env["placeholders"]["CAT"])
        self.assertEqual(calls[0][0], "http://127.0.0.1:18099/csw?request=GetCapabilities")
        with unittest.mock.patch.object(docrev, "port_open", return_value=False):
            issues, calls = self.run_probe(env=env, entry=env["placeholders"]["CAT"])
        self.assertEqual((calls, issues), ([], ["forward not running on 18099; run `docrev env forward`"]))

    def test_no_cluster_env_check_runs_probes_without_oc(self):
        env = {"cluster": False, "read_only": True, "token": {"param": "token"}, "placeholders": {"CAT": self.ENTRY}}
        page = (200, "text/html", b"<html></html>", None)
        with unittest.mock.patch.object(docrev, "load_env", return_value=env), \
                unittest.mock.patch.object(docrev, "token_for", return_value="T"), \
                unittest.mock.patch.object(docrev, "fetch", return_value=page), \
                unittest.mock.patch.object(docrev, "oc") as oc, redirect_stdout(io.StringIO()) as out:
            docrev.cmd_env_check(argparse.Namespace(env="prod"))
        oc.assert_not_called()
        self.assertIn("probe broken: HTML page", [f["issue"] for f in json.loads(out.getvalue())])
