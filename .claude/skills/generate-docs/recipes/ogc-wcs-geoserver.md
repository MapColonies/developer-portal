# ogc-wcs-geoserver

Match: image `*geoserver*`; `GET .../wcs?request=GetCapabilities` answers `wcs:Capabilities`.

Self-description: `GetCapabilities` (formats, CRSs, interpolations, `wcs:CoverageId`s), `DescribeCoverage` (envelope, axis labels, grid, nil values).

Declared intent lives in: chart env (`PROXY_BASE_URL`, extensions), the GeoServer data dir on the PVC (workspace, output limits), the ingestion/publishing service that names coverages.

Reader flow: GetCapabilities → pick coverage → DescribeCoverage (take `srsName`, `axisLabels`) → GetCoverage (whole / `subset=` per axis / format / optional scaling, `outputCRS`, interpolation).

Gotchas:
- Coverage ids are prefixed with the workspace (`<ws>__<name>`); the prefix is optional in requests. Verify the naming rule the docs claim against real ids.
- Every `xlink:href` in capabilities is built from `PROXY_BASE_URL`; check those hosts resolve to a working route, since clients like QGIS, GDAL and OWSLib follow them.
- Coverages can be in different CRSs (e.g. EPSG:4326 and a UTM zone), and `axisLabels` follow the CRS (`Lat Long` vs `E N`). Check one coverage per CRS family the service holds; in the docs, explain the general flow (read `srsName` / `axisLabels` from DescribeCoverage, use them in `subset=`, or `subsettingCRS`) and name the supported families with one example, not every coverage.
- Output size limit errors are `ows:ExceptionReport` with HTTP 500; the limit is per-environment config.

Docs: the OGC WCS protocol page, and the capabilities/coverage steps of a guide that extracts
data from a coverage.
