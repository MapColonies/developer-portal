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
| mc:dataType | enum |  **Valid Values**: <br/> FLOAT64 / FLOAT32 / FLOAT16 / INT64 / INT32 / INT16 / INT8 |
| mc:acquisitionTimeBeginUTC | date | Start acquisition time (UTC time) of raw product
supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:acquisitionTimeEndUTC | date | End acquisition time (UTC time) of raw product
supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:minResolutionDegree | double | the product min resolution in degrees |
| mc:maxResolutionDegree | double | the product max resolution in degrees |
| mc:minResolutionMeter | double | the product min resolution in meters |
| mc:maxResolutionMeter | double | the product max resolution in meters |
| mc:minAbsoluteAccuracyLep90 | double | LEP90 min absolute vertical plane accuracy range in meters |
| mc:maxAbsoluteAccuracyLep90 | double | LEP90 max absolute vertical plane accuracy range in meters |
| mc:minRelativeAccuracyLep90 | double | LEP90 min relative vertical plane accuracy range in meters |
| mc:maxRelativeAccuracyLep90 | double | LEP90 max relative vertical plane accuracy range in meters |
| mc:minHorizontalAccuracyCep90 | double | |
| mc:maxHorizontalAccuracyCep90 | double | |
| mc:geoidModel | text | |
| mc:areaOrPoint | enum | Describes if pixel is “Area” or “Point” |
| mc:links | text | Available links for different services available for the current product |
:::

| **PYCSW Queryable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:id | text | unique internal catalog item id |
| mc:productId | text | unique external product id |
| mc:productName | text | the product name |
| mc:productType | enum  | **Valid Values**: <br/> DTM / DSM |
| mc:productVersion | int | the product version |
| mc:description | text | the product description |
| mc:footprint | geojson | geographical delineation of the product / model trace |
| mc:BoundingBox | bbox | two points that represent the record extent |
| mc:srsId | int | reference System ID (EPSG), <br /> ex: 4326 / 3857 |
| mc:srsName | text | name of reference system |
| mc:dataType | enum |  **Valid Values**: <br/> FLOAT64 / FLOAT32 / FLOAT16 / INT64 / INT32 / INT16 / INT8 |
| mc:sensors | text | list of sensors used as a source for the product <br/> comma separated list |
| mc:region | text | sector / countries <br/> comma separated list |
| mc:insertDateUTC | date | the date when the product was added to catalog <br/> supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:ingestionDateUTC | date | when last was the **data** or **parts** updated <br/> supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:updateDateUTC | date | when last was the MD updated <br/> supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:acquisitionTimeBeginUTC | date | Start acquisition time (UTC time) of raw product
supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:acquisitionTimeEndUTC | date | End acquisition time (UTC time) of raw product
supported format: **dd-mm-yyyyThh:mm:ssZ** |
| mc:minResolutionDegree | double | the product min resolution in degrees |
| mc:maxResolutionDegree | double | the product max resolution in degrees |
| mc:minResolutionMeter | double | the product min resolution in meters |
| mc:maxResolutionMeter | double | the product max resolution in meters |
| mc:minAbsoluteAccuracyLep90 | double | LEP90 min absolute vertical plane accuracy range in meters |
| mc:maxAbsoluteAccuracyLep90 | double | LEP90 max absolute vertical plane accuracy range in meters |
| mc:minRelativeAccuracyLep90 | double | LEP90 min relative vertical plane accuracy range in meters |
| mc:maxRelativeAccuracyLep90 | double | LEP90 max relative vertical plane accuracy range in meters |
| mc:minHorizontalAccuracyCep90 | double | |
| mc:maxHorizontalAccuracyCep90 | double | |
| mc:geoidModel | text | |
| mc:areaOrPoint | enum | Describes if pixel is “Area” or “Point” |
| mc:links | text | Available links for different services available for the current product |
| mc:classification | enum  | product classification / confidentiality <br /> Classification values |
| mc:producerName | text | manufacturer / organization that produced / supplied the product |
| mc:noDataValue | enum |  **Valid Values**: <br/> -32768 |
| mc:type | enum | type of the catalog <br /> **Valid values**:  RECORD_RASTER / RECORD_3D / RECORD_DEM <br /> default: ***RECORD_DEM***|
| mc:keywords | text | list of key words relevant for product |
