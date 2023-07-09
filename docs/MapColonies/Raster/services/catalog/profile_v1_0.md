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

| **PYCSW Queryable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:id | text | unique internal catalog item id |
| mc:productId | text | unique external product id |
| mc:productName | text | the product name |
| mc:productVersion | text | the product version |
| [mc:productType](#productType) | enum  | **Valid Values**: <br/> OrthophotoBest / Orthophoto / OrthophotoHistory / RasterMapBest / RasterMap / RasterAidBest / RasterAid / RasterVector / RasterVectorBest |
| mc:productSubType | text | ProductSubType values |
| mc:links | text | available links for current product CSW Links <br /> structure of links in the format ***name,description,protocol,url[^„,[^„,]]*** |
| mc:description | text | the product description |
| mc:creationDateUTC | date | the date when raw product was created <br/> supported format: **dd/mm/yyyy** |
| mc:updateDateUTC | date | date the record got and update in catalog <br/> supported format: **dd/mm/yyyy** |
| mc:imagingTimeBeginUTC | date | start imaging date of raw product <br/> supported format: **dd/mm/yyyy  (not later than "End date")** |
| mc:imagingTimeEndUTC | date | end imaging date of raw product <br/> supported format: **dd/mm/yyyy  (not earlier than "Begin date")** |
| mc:maxResolutionDeg | double | the product resolution in degrees <br/> double unsigned valid: **0.00000009 to 0.072** |
| mc:maxResolutionMeter | double | the product resolution in meters <br/> double unsigned valid: **0.01 to 8000** |
| mc:minHorizontalAccuracyCE90 | double | EP90 / CE90 Maximum absolute plane accuracy range in meters <br/> float unsigned valid: **0.01 to 4000 (x.xx)** |
| mc:sensors | text | list of sensors used as a source for the product <br/> comma separated list |
| mc:layerPolygonParts | geojson | polygons of the discrete parts (versions) and the list of layers in the best converted to Geojson |
| mc:footprint | geojson | geographical delineation of the product / model trace |
| mc:SRS | int | reference System ID (EPSG), <br /> ex: 4326 / 3857 |
| mc:SRSName | text | name of reference system |
| mc:transparency | text | the record transparency <br /> **Valid values**:  TRANSPARENT / OPAQUE  |
| mc:region | text | sector / countries <br/> comma separated list |
| mc:classification | enum  | product classification / confidentiality <br /> Classification values |
| mc:producerName | text | manufacturer / organization that produced / supplied the product |
| mc:RMS | double | tolerance, standard deviation in % |
| mc:scale | integer | **Valid values**: 0 to 100000000 |
| mc:productBBox | text | the bounding box of the product minX,minY,maxX,maxY |
| mc:ingestionDate | date | date when product data was updated or added to catalog |
| mc:type | enum | type of the catalog <br /> **Valid values**:  RECORD_RASTER / RECORD_3D / RECORD_DEM <br /> default: ***RECORD_RASTER***|
| mc:insertDate | date | the date when item was added to catalog |
| mc:keywords | text | list of key words relevant for product |
| ows:boundingBox | BBOX | two points that represent the record extent for example:```<ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2"><ows:LowerCorner>31.9042863434239 34.8076891807199</ows:LowerCorner><ows:UpperCorner>31.9118071956932 34.816135996859</ows:UpperCorner></ows:BoundingBox>``` |
