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

:::caution
New version [v2](/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v2) is coming!
<p style={{color:"red"}}><b>The following parameters are depracted an will be removed in v2</b></p> 

| **PYCSW Queryable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:creationDateUTC | date | the date (UTC time) when raw product was created <br/> supported format: **dd/mm/yyyy** |
| mc:RMS | double | tolerance, standard deviation in % |
:::

| **PYCSW Queryable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:id | text | unique internal catalog item id |
| mc:productId | text | unique external product id |
| mc:productName | text | the product name |
| mc:productVersion | text | the product version |
| mc:productType | enum  | **Valid Values**: <br/> OrthophotoBest / Orthophoto / OrthophotoHistory / RasterMapBest / RasterMap / RasterAidBest / RasterAid / RasterVector / RasterVectorBest |
| mc:productSubType | text | ProductSubType values |
| mc:links | text | available links for current product CSW Links <br /> structure of links in the format ***name,description,protocol,url[^„,[^„,]]*** |
| mc:description | text | the product description |
| mc:creationDateUTC | date | <p style={{color:"red"}}><b>Deprecated: will be removed in</b> [v2](/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v2)</p> [v2](/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v2) the date (UTC time) when raw product was created <br/> supported format: **dd/mm/yyyy** |
| mc:updateDateUTC | date | date (UTC time) the record got and update in catalog <br/> supported format: **dd/mm/yyyy** |
| mc:imagingTimeBeginUTC | date | start imaging date (UTC time) of raw product <br/> supported format: **dd/mm/yyyy  (not later than "End date")** |
| mc:imagingTimeEndUTC | date | end imaging date (UTC time) of raw product <br/> supported format: **dd/mm/yyyy  (not earlier than "Begin date")** |
| mc:maxResolutionDeg | double | the product resolution in degrees <br/> double unsigned valid: **1.67638e-7 to 0.703125** |
| mc:maxResolutionMeter | double | the product resolution in meters <br/> double unsigned valid: **0.0185 to 78271.52** |
| mc:minHorizontalAccuracyCE90 | double | EP90 / CE90 Maximum absolute plane accuracy range in meters <br/> float unsigned valid: **0.01 to 4000 (x.xx)** |
| mc:sensors | text | list of sensors used as a source for the product <br/> comma separated list |
| mc:footprint | geojson | geographical delineation of the product / model trace |
| mc:SRS | int | reference System ID (EPSG), <br /> ex: 4326 / 3857 |
| mc:SRSName | text | name of reference system |
| mc:transparency | text | the record transparency <br /> **Valid values**:  TRANSPARENT / OPAQUE  |
| mc:region | text | sector / countries <br/> comma separated list |
| mc:classification | number | product classification / confidentiality <br /> Classification values (3-6)
| mc:producerName | text | manufacturer / organization that produced / supplied the product |
| mc:RMS | double | <p style={{color:"red"}}><b>Deprecated: will be removed in</b> [v2](/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v2)</p> tolerance, standard deviation in % |
| mc:scale | integer | **Valid values**: 0 to 100000000 |
| mc:productBBox | text | the bounding box of the product minX,minY,maxX,maxY |
| mc:ingestionDate | date | date (UTC time) when product data was updated or added to catalog |
| mc:type | enum | type of the catalog <br /> **Valid values**:  RECORD_RASTER / RECORD_3D / RECORD_DEM <br /> default: ***RECORD_RASTER***|
| mc:insertDate | date | the date (UTC time) when item was added to catalog |
| mc:mimeType | enum | type of record format <br /> **Valid values**:  'image/png' and 'image/jpeg' |
| mc:keywords | text | list of key words relevant for product |
| ows:BoundingBox | BBOX | two points that represent the record extent for example:```<ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2"><ows:LowerCorner>31.9042863434239 34.8076891807199</ows:LowerCorner><ows:UpperCorner>31.9118071956932 34.816135996859</ows:UpperCorner></ows:BoundingBox>``` |

<details>
  <summary>mc:MCRasterRecord response example</summary>

  ``` xml title="mc:MCRasterRecord"
    <mc:MCRasterRecord>
        <mc:classification>6</mc:classification>
        <mc:creationDateUTC>2023-11-06T23:51:11Z</mc:creationDateUTC>
        <mc:description>test desription</mc:description>
        <mc:footprint>{"type":"Polygon","coordinates":[[[34.388709841231474,31.435415286905005],[34.606444758516666,31.435415286905005],[34.606444758516666,31.623449225481167],[34.388709841231474,31.623449225481167],[34.388709841231474,31.435415286905005]]]}</mc:footprint>
        <mc:id>045eaa61-8f61-48d3-a240-4b02a683eca3</mc:id>
        <mc:ingestionDate>2024-10-05T08:49:54Z</mc:ingestionDate>
        <mc:insertDate>2023-11-06T23:51:11Z</mc:insertDate>
        <mc:links scheme="WMS" name="teset_north-Orthophoto" description="">https://raster-mapproxy-int-nginx-route/api/raster/v1/service?REQUEST=GetCapabilities</mc:links>
        <mc:links scheme="WMS_BASE" name="teset_north-Orthophoto" description="">https://raster-mapproxy-int-nginx-route/api/raster/v1/wms</mc:links>
        <mc:links scheme="WMTS" name="teset_north-Orthophoto" description="">https://raster-mapproxy-int-nginx-route/api/raster/v1/wmts/1.0.0/WMTSCapabilities.xml</mc:links>
        <mc:links scheme="WMTS_KVP" name="teset_north-Orthophoto" description="">https://raster-mapproxy-int-nginx-route/api/raster/v1/service?REQUEST=GetCapabilities&amp;SERVICE=WMTS</mc:links>
        <mc:links scheme="WMTS_BASE" name="teset_north-Orthophoto" description="">https://raster-mapproxy-int-nginx-route/api/raster/v1/wmts</mc:links>
        <mc:maxResolutionDeg>0.072</mc:maxResolutionDeg>
        <mc:maxResolutionMeter>0.15</mc:maxResolutionMeter>
        <mc:minHorizontalAccuracyCE90>50.0</mc:minHorizontalAccuracyCE90>
        <mc:producerName>IDFMU</mc:producerName>
        <mc:productBBox>34.388709841231474,31.435415286905005,34.606444758516666,31.623449225481167</mc:productBBox>
        <mc:productId>teset_north</mc:productId>
        <mc:productName>test noth</mc:productName>
        <mc:productType>Orthophoto</mc:productType>
        <mc:productVersion>2.0</mc:productVersion>
        <mc:region>test</mc:region>
        <mc:sensors>UNIDENTIFIED,FEATURE</mc:sensors>
        <mc:imagingTimeEndUTC>2023-11-05T09:31:00Z</mc:imagingTimeEndUTC>
        <mc:imagingTimeBeginUTC>2023-11-01T09:31:00Z</mc:imagingTimeBeginUTC>
        <mc:SRS>4326</mc:SRS>
        <mc:SRSName>WGS84GEO</mc:SRSName>
        <mc:transparency>OPAQUE</mc:transparency>
        <mc:type>RECORD_RASTER</mc:type>
        <mc:updateDateUTC>2024-04-10T08:02:01Z</mc:updateDateUTC>
        <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">
            <ows:LowerCorner>31.435415286905005 34.388709841231474</ows:LowerCorner>
            <ows:UpperCorner>31.623449225481167 34.606444758516666</ows:UpperCorner>
        </ows:BoundingBox>
    </mc:MCRasterRecord>
  ```
</details>