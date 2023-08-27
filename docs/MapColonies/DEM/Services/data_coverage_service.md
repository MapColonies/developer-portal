---
id: dem-data-coverage-service
slug: dem-data-coverage-service
title: Data coverage service
tags:
 - DEM
 - guide
---

## Data Coverage (Superior-DEM) service
This service “plays” as WCS proxy which uses a CSW catalog to get different coverages based on different rules.

Basically this service “hides” a work against catalog but mimics original WCS protocol in terms of [GetCoverage operation](https://docs.geoserver.geo-solutions.it/edu/en/wcs/get.html) :globe_with_meridians:

### GetCoverage data from catalog materials with best resolution (coverageId=DTMBestResolution)

***Request example:***
```
<DEM-SUPERIOR-SERVICE_URL>/wcs/?service=WCS&version=2.0.1&coverageId=DTMBestResolution&request=GetCoverage&format=image/geotiff&subset=Long(33,35)&subset=Lat(29,33)
```

***Response:***
Tiff will be received

### GetCoverage data from catalog materials with min resolution(coverageId=DTMMinResolution)

***Request example:***
```
<DEM-SUPERIOR-SERVICE_URL>/wcs/?service=WCS&version=2.0.1&coverageId=DTMMinResolution&request=GetCoverage&format=image/geotiff&subset=Long(33,35)&subset=Lat(29,33)
```

***Response:***
Tiff will be received
