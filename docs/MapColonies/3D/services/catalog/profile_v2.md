---
id: 3d-profile-v2
slug: catalog-profile-v2
description: v2 Profile
title: Profile v2
tags:
  - 3D
  - catalog
  - v2
---

# 3D Catalog Profile Information

1. **typename** = `mc:MC3DRecord`
2. **main_namespace** = `http://schema.mapcolonies.com/3d`
3. The **3D** sub-system Catalog profile fields with information of each of them:

#### Changes from previous profile:
Removed unnecessary properties and added two properties: source and status of the product.

| **PYCSW Queryable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:id | text | unique internal catalog item id <br/> AUTO_GENERATED |
| mc:productId | text | unique external product id <br/> AUTO_GENERATED |
| mc:productName | text | the product name <br/> maxLength: 50 |
| mc:productVersion | int | the product version <br/> AUTO_GENERATED |
| mc:productType | enum  | **Valid Values**: <br/> 3DPhotoRealistic / QuantizedMeshDTMBest / QuantizedMeshDSMBest <br/> default: 3DPhotoRealistic |
| mc:links | text | available links for current product CSW Links <br /> structure of links in the format ***name,description,protocol,url[^„,[^„,]]*** |
| mc:description | text | the product description <br/> maxLength: 250 |
| mc:creationDateUTC | date | the date when raw product was created <br/> supported format: **dd/mm/yyyy** |
| mc:imagingTimeBeginUTC | date | start imaging date of raw product <br/> supported format: **dd/mm/yyyy  (not later than "mc:imagingTimeEndUTC")** |
| mc:imagingTimeEndUTC | date | end imaging date of raw product <br/> supported format: **dd/mm/yyyy  (not earlier than "mc:imagingTimeBeginUTC")** |
| mc:minResolutionMeter | double | the product resolution in meters (not more than max res) <br/> double unsigned valid: **0.01 to 8000** |
| mc:maxResolutionMeter | double | the product resolution in meters (not less than min res) <br/> double unsigned valid: **0.01 to 8000** |
| mc:maxHorizontalAccuracyCE90 | double | EP90 / CE90 Maximum absolute plane accuracy range in meters <br/> double unsigned valid: **0 to 999 (999 = no data)** |
| mc:accuracyLE90 | double | double unsigned valid: **0 to 999 (999 = no data)** |
| mc:accuracySE90 | double | double unsigned valid: **0 to 250** |
| mc:relativeAccuracySE90 | double | double unsigned valid: **0 to 100** |
| mc:visualAccuracy | double | double unsigned valid: **0 to 100** |
| mc:sensors | text | list of sensors used as a source for the product <br/> comma separated list |
| mc:footprint | geojson | geographical delineation of the product / model trace |
| mc:heightRangeFrom | double | **minimum** height range in meters |
| mc:heightRangeTo | double | **maximum** height range in meters |
| mc:SRS | text | reference System ID (EPSG), <br /> ex: 4326 / 3857 |
| mc:SRSName | text | name of reference system |
| mc:region | text | sector / countries <br/> comma separated list |
| mc:classification | enum  | product classification / confidentiality <br /> Classification values |
| mc:productionSystem | text | the production system |
| mc:productionSystemVersion | text | the version of the production system <br/> maxLength: 20 |
| mc:producerName | text | manufacturer / organization that produced / supplied the product |
| mc:minFlightAlt | double | **minimum** flight height in meters |
| mc:maxFlightAlt | double | **maximum** flight height in meters |
| mc:geographicArea | text | the area inside the region |
| mc:productBBox | text | the bounding box of the product minX,minY,maxX,maxY |
| mc:productSource | text | the source of the product |
| mc:productStatus | enum | Status of the product <br /> **Valid values**:  PUBLISHED / UNPUBLISHED <br /> default: ***UNPUBLISHED***|
| mc:type | enum | type of the catalog <br /> **Valid values**:  RECORD_RASTER / RECORD_3D / RECORD_DEM <br /> default: ***RECORD_3D***|
| mc:insertDate | date | the date when item was added to catalog <br/>  <br/> AUTO_GENERATED: ***CURRENT_TIME*** |
| mc:boundingBox | wkt | currently stored footprint in wkt format <br/> AUTO_GENERATED |
| mc:keywords | text | list of key words relevant for product <br/> AUTO_GENERATED |
| mc:updateDate | date | the date when item was updated in catalog <br/>  <br/> AUTO_GENERATED: ***CURRENT_TIME*** in every update |
