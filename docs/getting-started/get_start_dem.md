# DEM: Get Started
## Developer Guide step-by-step <!-- {docsify-ignore} -->
The following guide will help you understand how to work with the DEM sub-system of Map Colonies  and how to consume DEM data.

There are two options:
- CSW catalog service with conjunction WCS service.
- Superior-DEM service

## CSW catalog service with conjunction WCS service:
**Step-by-step** recipe:
1. Query **DEM CSW catalog** service to find item(s)  according to desired filter [example are here](catalog-information/query-examples.md)
2. From relevant catalog item extract **coverage_id**
3. Query **DEM WCS** service for data according to [GetCoverage protocol operation](ogc-protocols/ogc-wcs.md)

