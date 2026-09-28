import argparse
import io
import json
import tempfile
import textwrap
import unittest
import unittest.mock
from contextlib import redirect_stdout
from pathlib import Path

import docrev

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
        self.assertEqual(docrev.env_hosts(self.ENV) >= {"cat", "geo", "localhost"}, True)
        self.assertNotIn("ows.terrestris.de", docrev.env_hosts(self.ENV))


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


class SummarizeFormatsTest(unittest.TestCase):
    def test_png_dimensions(self):
        png = b"\x89PNG\r\n\x1a\n" + b"\0\0\0\rIHDR" + (256).to_bytes(4, "big") * 2
        self.assertEqual(docrev.summarize(png, "image/png"), {"binary": "png", "width": 256, "height": 256})

    def test_geojson(self):
        body = json.dumps({"type": "FeatureCollection", "features": [
            {"geometry": {"type": "Point"}, "properties": {"name": "a"}}]}).encode()
        s = docrev.summarize(body, "application/json")
        self.assertEqual((s["features"], s["geometry_types"], s["property_keys"]), (1, ["Point"], ["name"]))

    def test_capabilities_identifiers(self):
        xml = b"<Capabilities><Layer><ows:Identifier>ortho</ows:Identifier></Layer><FeatureType><Name>a:b</Name></FeatureType></Capabilities>"
        self.assertEqual(docrev.summarize(xml, "text/xml")["identifiers"], {"ows:Identifier": ["ortho"], "Name": ["a:b"]})


if __name__ == "__main__":
    unittest.main()
