---
id: dem-profile-v1
slug: catalog-profile-v1
description: v1 Profile
title: Profile v1
tags:
  - DEM
  - catalog
  - v1
---

# DEM Catalog Profile Information

1. **typename** = `mc:MCDEMRecord`
2. **main_namespace** = `http://schema.mapcolonies.com/dem`
3. The **DEM** sub-system Catalog profile fields with information of each of them:

| **PYCSW Queryable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:id | text | unique internal catalog item id |
| mc:productId | text | unique external product id |
| mc:productName | text | the product name |
| [mc:productType](#productType) | enum  | **Valid Values**: <br/> DTM / DSM / QuantizedMesh  / QuantizedMeshDTMBest / QuantizedMeshDSMBest |
| mc:description | text | the product description |
| mc:imagingTimeBeginUTC | date | start imaging date of raw product <br/> supported format: **dd/mm/yyyy  (not later than "End date")** |
| mc:imagingTimeEndUTC | date | end imaging date of raw product <br/> supported format: **dd/mm/yyyy  (not earlier than "Begin date")** |
| mc:resolutionDeg | double | the product resolution in degrees <br/> double unsigned valid: **0.00000009 to 0.072** |
| mc:resolutionMeter | double | the product resolution in meters <br/> double unsigned valid: **0.01 to 8000** |
| mc:absoluteAccuracyLEP90 | double | LEP90 maximum absolute vertical plane accuracy range in meters |
| mc:relativeAccuracyLEP90 | double | LEP90 maximum relative vertical plane accuracy range in meters |
| mc:sensors | text | list of sensors used as a source for the product <br/> comma separated list |
| mc:layerPolygonParts | geojson | polygons of the discrete parts (versions) and the list of layers in the best converted to Geojson |
| mc:footprint | geojson | geographical delineation of the product / model trace |
| mc:heightRangeFrom | double | **minimum** height range in Meters (not greater than "heightRangeTo") <br /> valid: **-500 to 9000** |
| mc:heightRangeTo | double | **maximum** height range in Meters (not less than "heightRangeFrom") <br /> valid: **-500 to 9000** |
| mc:SRS | int | reference System ID (EPSG), <br /> ex: 4326 / 3857 |
| mc:SRSName | text | name of reference system |
| mc:verticalDatum | enum  | **Valid Values**: <br/> WGS 1984 / WGS 1972 / Pulkovo 1942 / Palestine 1923 / MSL Height / Israel / ED 1950 IDF |
| mc:region | text | sector / countries <br/> comma separated list |
| mc:classification | enum  | product classification / confidentiality <br /> [Classification values](/classified/dem/classification_table.md) |
| mc:producerName | text | manufacturer / organization that produced / supplied the product |
| mc:units | enum |  **Valid Values**: <br/> METER / DD / DMS / ARC_SECONDS / UNKNOWN |
| mc:geographicArea | text | geographic area cities |
| mc:undulationModel | enum |  **Valid Values**: <br/> MSL EGM96 / MSL EGM2008 / MSL DMA10 / ILUM |
| mc:dataType | enum |  **Valid Values**: <br/> FLOAT64 / FLOAT32 / FLOAT16 / INT64 / INT32 / INT16 / INT8 |
| mc:noDataValue | enum |  **Valid Values**: <br/> -32768 / -326767 / -999 |
| mc:productBBox | text | the bounding box of the product minX,minY,maxX,maxY |
| mc:insertDate | date | the date when item was added to catalog |
| mc:keywords | text | list of key words relevant for product |
| mc:updateDateUTC | date | date the record got and update in catalog <br/> supported format: **dd/mm/yyyy** |
| mc:type | enum | type of the catalog <br /> **Valid values**:  RECORD_RASTER / RECORD_3D / RECORD_DEM <br /> default: ***RECORD_DEM***|
