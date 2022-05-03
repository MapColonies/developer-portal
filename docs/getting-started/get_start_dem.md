# DEM: Get Started
## Developer Guide step-by-step <!-- {docsify-ignore} -->
The following guide will help you understand how to work with the DEM sub-system of Map Colonies  and how to consume DEM data.

There are two options:
- CSW catalog service with conjunction WCS service.
- Superior-DEM service

## CSW catalog service with conjunction WCS service
**Step-by-step** recipe:
1. Query **DEM CSW catalog** service to find item(s)  according to desired filter [example are here](catalog-information/query-examples.md)
2. From relevant catalog item extract **coverage_id**
3. Query **DEM WCS** service for data according to [GetCoverage protocol operation](ogc-protocols/ogc-wcs.md)

## Superior-DEM service
This service “plays” as WCS proxy which uses a CSW catalog to get different coverages based on different rules.

Basically this service “hides” a work against catalog but mimics original WCS protocol in terms of [GetCoverage operation](https://docs.geoserver.geo-solutions.it/edu/en/wcs/get.html)

### GetCoverage data from catalog materials with best resolution (coverageId=DTMBestResolution)

***Request example:*** 
```
[SUPERIOR_SERVICE_URL]/wcs/?service=WCS&version=2.0.1&coverageId=DTMBestResolution&request=GetCoverage&format=image/geotiff&subset=Long(33,35)&subset=Lat(29,33)
```

***Response:***
Tiff will be received

### GetCoverage data from catalog materials with min resolution(coverageId=DTMMinResolution)

***Request example:*** 
```
[SUPERIOR_SERVICE_URL]/wcs/?service=WCS&version=2.0.1&coverageId=DTMMinResolution&request=GetCoverage&format=image/geotiff&subset=Long(33,35)&subset=Lat(29,33)
```

***Response:***
Tiff will be received