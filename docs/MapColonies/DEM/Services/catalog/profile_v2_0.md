---
id: dem-profile-v2
slug: dem-catalog-profile-v2
description: v2 Profile
title: Profile v2
tags:
  - DEM
  - catalog
  - v2
---

# DEM Catalog Profile Information

1. **typename** = `mc:MCDEMRecord`
2. **main_namespace** = `http://schema.mapcolonies.com/dem`
3. The **DEM** sub-system Catalog profile fields with information of each of them:

:::info
The following parameters were added v2:

| **PYCSW Queryable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:productVersion | int | the product version |
| mc:srsId | int | reference System ID (EPSG), <br /> ex: 4326 / 3857 |
| mc:dataType | enum | **Valid Values**: <br/> FLOAT64 / FLOAT32 / FLOAT16 / INT64 / INT32 / INT16 / INT8 |
| mc:acquisitionTimeBeginUTC | date | Start acquisition time (UTC time) of raw product<br/>Supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:acquisitionTimeEndUTC | date | End acquisition time (UTC time) of raw product<br/>Supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:minResolutionDegree | double | the product min resolution in degrees |
| mc:maxResolutionDegree | double | the product max resolution in degrees |
| mc:minResolutionMeter | double | the product min resolution in meters |
| mc:maxResolutionMeter | double | the product max resolution in meters |
| mc:minAbsoluteAccuracyLEP90 | double | LEP90 min absolute vertical plane accuracy range in meters |
| mc:maxAbsoluteAccuracyLEP90 | double | LEP90 max absolute vertical plane accuracy range in meters |
| mc:minRelativeAccuracyLEP90 | double | LEP90 min relative vertical plane accuracy range in meters |
| mc:maxRelativeAccuracyLEP90 | double | LEP90 max relative vertical plane accuracy range in meters |
| mc:minHorizontalAccuracyCEP90 | double | |
| mc:maxHorizontalAccuracyCEP90 | double | |
| mc:areaOrPoint | enum | Describes if pixel is “Area” or “Point” |
| mc:links | text | Available links for different services available for the current product |
| mc:verticalType | enum | **Valid Values**: Orthometric, Ellipsoidal |
| mc:verticalSrsId | text | reference System ID (EPSG), <br/> ex: 4326 / 3857 |
| mc:verticalSrsName | text | name of reference system |

:::

| **PYCSW Queryable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:id | text | unique internal catalog item id |
| mc:productId | text | unique external product id |
| mc:productName | text | the product name |
| mc:productType | enum | **Valid Values**: <br/> DTM / DSM |
| mc:productVersion | int | the product version |
| mc:description | text | the product description |
| mc:footprint | geojson | geographical delineation of the product / model trace |
| mc:BoundingBox | bbox | two points that represent the record extent |
| mc:srsId | text | reference System ID (EPSG), <br/> ex: 4326 / 3857 |
| mc:srsName | text | name of reference system |
| mc:dataType | enum | **Valid Values**: <br/> FLOAT64 / FLOAT32 / FLOAT16 / INT64 / INT32 / INT16 / INT8 |
| mc:sensors | text | list of sensors used as a source for the product <br/> comma separated list |
| mc:region | text | sector / countries <br/> comma separated list |
| mc:insertDateUTC | date | the date when the product was added to catalog <br/> supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:ingestionDateUTC | date | when last was the **data** or **parts** updated <br/> supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:updateDateUTC | date | when last was the MD updated <br/> supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:acquisitionTimeBeginUTC | date | Start acquisition time (UTC time) of raw product<br/>Supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:acquisitionTimeEndUTC | date | End acquisition time (UTC time) of raw product<br/>Supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:minResolutionDegree | double | the product min resolution in degrees |
| mc:maxResolutionDegree | double | the product max resolution in degrees |
| mc:minResolutionMeter | double | the product min resolution in meters |
| mc:maxResolutionMeter | double | the product max resolution in meters |
| mc:minAbsoluteAccuracyLEP90 | double | LEP90 min absolute vertical plane accuracy range in meters |
| mc:maxAbsoluteAccuracyLEP90 | double | LEP90 max absolute vertical plane accuracy range in meters |
| mc:minRelativeAccuracyLEP90 | double | LEP90 min relative vertical plane accuracy range in meters |
| mc:maxRelativeAccuracyLEP90 | double | LEP90 max relative vertical plane accuracy range in meters |
| mc:minHorizontalAccuracyCEP90 | double | |
| mc:maxHorizontalAccuracyCEP90 | double | |
| mc:areaOrPoint | enum | Describes if pixel is “Area” or “Point” |
| mc:links | text | Available links for different services available for the current product |
| mc:classification | text | product classification / confidentiality <br/> Classification values should be numbers between 0 and 100 |
| mc:producerName | text | manufacturer / organization that produced / supplied the product |
| mc:noDataValue | int | **Valid Values**: <br/> -32768 |
| mc:type | enum | type of the catalog <br/> **Value**: RECORD_DEM |
| mc:keywords | text | list of key words relevant for product |
| mc:verticalType | enum | **Valid Values**: Orthometric, Ellipsoidal |
| mc:verticalSrsId | text | reference System ID (EPSG), <br/> ex: 4326 / 3857 |
| mc:verticalSrsName | text | name of reference system |
