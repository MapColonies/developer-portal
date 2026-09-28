# s3-download-gateway

Match: image `common/nginx-s3-gateway`; serves objects of an S3 bucket under a route path.

Self-description: none; object paths come from catalog links (e.g. `scheme="Download"`).

Declared intent lives in: chart values (`route.path`, bucket, `authorization.opa`, directory listing flag).

Reader flow: catalog record → `Download` link → `GET <link>?token=...`.

Gotchas:
- Verify with `call --range 1024` rather than downloading whole files.
- Directory paths return 404 when listing is disabled, which is expected.
- Check the no-token response: it should be 401/403, and a 500 is a deployment finding.

Docs: `docs/MapColonies/DEM/Services/download/README.md`.
