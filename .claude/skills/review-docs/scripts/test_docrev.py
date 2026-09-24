import tempfile
import textwrap
import unittest
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


if __name__ == "__main__":
    unittest.main()
