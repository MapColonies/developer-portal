# ogc-csw-pycsw

Match: image `common/pycsw` or `pycsw`; `POST .../csw` answers `csw:GetRecordsResponse`.

Self-description: `GetCapabilities`, `DescribeRecord`; queryables per profile via `GetDomain`.

Declared intent lives in:
- `mappings.py` in the chart (queryable → DB column),
- `pycsw.cfg` (`profiles=`, `table=`, repository `filter=`),
- the profile code inside the image: `/home/pycsw/pycsw/plugins/profiles/<profile>/` (read with `pod-read`).

Reader flow: `GetRecords` with a filter (tabs for all / id / type / bbox / polygon / point), paging via `startPosition`/`nextRecord`, then take the record's `mc:links` (by `scheme`) into the next service.

Gotchas:
- A pycsw with a new profile/mappings that points at the old records table has been observed serving old-shaped records. Compare a live record's shape with the declared profile (`shape-diff --under <record element>`), and try filtering on a new field: `Invalid PropertyName` means the new profile isn't really served.
- The declared queryables are listed in GetCapabilities under the `<Profile>Queryables` constraint (e.g. `MCDEMQueryables`); comparing that list and the `GetRecords` DCP href with the expected version quickly shows whether the route reaches the intended pycsw instance.
- Per-instance nginx in front of pycsw (unified chart) mounts its `location.conf` (`uwsgi_pass <backend>`) from a ConfigMap named in `nginx.extraVolumes`; when a second instance doesn't override it, it proxies to the first instance's backend.
- Mappings pointing at columns the table lacks surface as `Invalid query syntax` in CSW and `UndefinedColumn` in the pycsw log; filters on shared columns keep working, which hides the problem.
- A declared queryable isn't necessarily usable everywhere: e.g. `mc:boundingBox` was rejected in spatial filters while `mc:BoundingBox` / `ows:BoundingBox` worked. Test each documented name in the filter types the docs use.
- The profile's bundled XSD (DescribeRecord) can be stale (seen describing another record type); don't take field types from it without checking.
- Polygon filters must be GML3 (`gml:exterior` / `gml:LinearRing` / `gml:posList`); GML2 `outerBoundaryIs`/`coordinates` is rejected with `Missing gml:posList`.
- Errors come back as `ows:ExceptionReport` with HTTP 200.

Docs: `docs/MapColonies/*/Services/catalog/profile_v*.md`, Step 1 of the DEM/3D guides.
