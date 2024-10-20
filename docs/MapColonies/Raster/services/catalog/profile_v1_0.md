---
id: raster-profile-v1
slug: raster-catalog-profile-v1
description: v1 Profile
title: Profile v1
tags:
  - raster
  - catalog
  - v1
---

# Raster Catalog Profile Information

1. **typename** = `mc:MCRasterRecord`
2. **main_namespace** = `http://schema.mapcolonies.com/raster` (This site doesn't exist)
3. The **Raster** sub-system Catalog profile fields with information of each of them:

:::warning
New version [v2](/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v2) is coming!
<p style={{color:"red"}}><b>The following parameters are depracted an will be removed in v2</b></p> 

| **PYCSW Queryable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:creationDateUTC | date | The date (UTC time) when raw product was created <br/> supported format: **dd/mm/yyyy** |
| mc:RMS | double | Tolerance, standard deviation in % |
:::

| **PYCSW Queryable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:id | text | Unique internal catalog item id |
| mc:productId | text | Unique external product id |
| mc:productName | text | The product name |
| mc:productVersion | text | The product version |
| mc:productType | enum  | **Valid Values**: <br/> OrthophotoBest / Orthophoto / OrthophotoHistory / RasterMapBest / RasterMap / RasterAidBest / RasterAid / RasterVector / RasterVectorBest |
| mc:productSubType | text | ProductSubType values |
| mc:links | text | Available links for current product CSW Links <br /> Structure of links in the format ***name,description,protocol,url[^„,[^„,]]*** |
| mc:description | text | The product description |
| mc:creationDateUTC | date | <p style={{color:"red"}}><b>Deprecated: will be removed in</b> [v2](/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v2)</p> The date (UTC time) when raw product was created <br/> Supported format: **dd/mm/yyyy** |
| mc:updateDateUTC | date | Date (UTC time) the record got and update in catalog <br/> Supported format: **dd/mm/yyyy** |
| mc:imagingTimeBeginUTC | date | Start imaging date (UTC time) of raw product <br/> Supported format: **dd/mm/yyyy  (not later than "End date")** |
| mc:imagingTimeEndUTC | date | End imaging date (UTC time) of raw product <br/> Supported format: **dd/mm/yyyy  (not earlier than "Begin date")** |
| mc:maxResolutionDeg | double | The product resolution in degrees <br/> Double unsigned valid: **1.67638e-7 to 0.703125** |
| mc:maxResolutionMeter | double | The product resolution in meters <br/> Double unsigned valid: **0.0185 to 78271.52** |
| mc:minHorizontalAccuracyCE90 | double | EP90 / CE90 Maximum absolute plane accuracy range in meters <br/> Float unsigned valid: **0.01 to 4000 (x.xx)** |
| mc:sensors | text | List of sensors used as a source for the product <br/> Comma separated list |
| mc:footprint | geojson | Geographical delineation of the product / model trace |
| mc:SRS | int | Reference System ID (EPSG), <br /> ex: 4326 / 3857 |
| mc:SRSName | text | Name of reference system |
| mc:transparency | text | The record transparency <br /> **Valid values**:  TRANSPARENT / OPAQUE  |
| mc:region | text | Sector / countries <br/> Comma separated list |
| mc:classification | number | Product classification / confidentiality <br /> Classification values (3-6)
| mc:producerName | text | Manufacturer / organization that produced / supplied the product |
| mc:RMS | double | <p style={{color:"red"}}><b>Deprecated: will be removed in</b> [v2](/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v2)</p> Tolerance, standard deviation in % |
| mc:scale | integer | **Valid values**: 0 to 100000000 |
| mc:productBBox | text | The bounding box of the product minX,minY,maxX,maxY |
| mc:ingestionDate | date | Date (UTC time) when product data was updated or added to catalog |
| mc:type | enum | Type of the catalog <br /> **Valid values**:  RECORD_RASTER / RECORD_3D / RECORD_DEM <br /> Default: ***RECORD_RASTER***|
| mc:insertDate | date | The date (UTC time) when item was added to catalog |
| mc:mimeType | enum | Type of record format <br /> **Valid values**:  'image/png' and 'image/jpeg' |
| mc:keywords | text | List of key words relevant for product |
| ows:BoundingBox | BBOX | Two points that represent the record extent for example:```<ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2"><ows:LowerCorner>31.9042863434239 34.8076891807199</ows:LowerCorner><ows:UpperCorner>31.9118071956932 34.816135996859</ows:UpperCorner></ows:BoundingBox>``` |
