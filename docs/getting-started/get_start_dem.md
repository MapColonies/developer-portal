# DEM: Get Started
## Developer Guide step-by-step <!-- {docsify-ignore} -->
The following guide will help you understand how to work with the DEM sub-system of Map Colonies  and how to consume DEM data.

There are two options:
- CSW catalog service with conjunction WCS service.
- Superior-DEM service

## CSW catalog service with conjunction WCS service
**Step-by-step** recipe:

```mermaid
flowchart LR
    subgraph  Prerequisite
      direction LR
      a1[Define filter]
      a2[Get Auth Token]
    end

    a1 -- filter --> B[STEP 1<br/> Query CSW catalog]
    a2 -- token --> B
    B -- xml --> C[STEP 2<br/>Get layer's URI +<br/> coverage_id]
    C -- constructed URI with<br/> coverage_id --> D1[STEP 3.1<br/>GetCoverage]
    C -- layer_WMTS_LAYER_URI --> D2[STEP 3.2 <br/>Optional<br/>Cesium visulization]
```
> :no_entry: **Authentication must be integrated in order to communicate with CSW server.**<br/>
> **See the principles [here](/ogc-protocols/ogc-csw-auth.md)**

1. Query **DEM CSW catalog** service to find item(s)  according to desired filter [example are here](catalog-information/query-examples.md)
2. From relevant catalog item extract **coverage_id**
3. Use catalog item
    1. Query **DEM WCS** service for data according to [GetCoverage protocol operation](ogc-protocols/ogc-wcs.md)
    2. _Optional_ - Visulize layer on map(**Cesium**)

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