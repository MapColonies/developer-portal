# Raster Catalog Profile Information

1. **typename** = `mc:MCRasterRecord`
2. **main_namespace** = `http://schema.mapcolonies.com/raster`
3. The **Raster** sub-system Catalog profile fields with information of each of them:

| **PYCSW Quarriable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:id | text | unique internal catalog item id |
| mc:productId | text | unique external product id |
| mc:productName | text | the product name |
| mc:productVersion | text | the product version |
| mc:productType | enum  | **Valid Values**: <br/> OrthophotoBest / Orthophoto / OrthophotoHistory / RasterMapBest / RasterMap / RasterAidBest / RasterAid / RasterVector / RasterVectorBest |
| mc:productSubType | text | [ProductSubType values](/classified/raster/product_sub_type.md) |
| mc:links | text | available links for current product [CSW Links](/catalog-information/csw_links.md) <br /> structure of links in the format ***name,description,protocol,url[^„,[^„,]]*** |
| mc:description | text | the product description |
| mc:creationDateUTC | date | the date when raw product was created <br/> supported format: **dd/mm/yyyy** |
| mc:updateDateUTC | date | date the record got and update in catalog <br/> supported format: **dd/mm/yyyy** |
| mc:imagingTimeBeginUTC | date | start imaging date of raw product <br/> supported format: **dd/mm/yyyy  (not later than "End date")** |
| mc:imagingTimeEndUTC | date | end imaging date of raw product <br/> supported format: **dd/mm/yyyy  (not earlier than "Begin date")** |
| mc:maxResolutionDeg | double | the product resolution in deggrees <br/> double unsigned valid: **0.00000009 to 0.072** |
| mc:maxResolutionMeter | double | the product resolution in meters <br/> double unsigned valid: **0.01 to 8000** |
| mc:minHorizontalAccuracyCE90 | double | EP90 / CE90 Maximum absolute plane accuracy range in meters <br/> float unsigned valid: **0.01 to 4000 (x.xx)** |
| mc:sensors | text | list of sensors used as a source for the product <br/> comma separated list |
| mc:layerPolygonParts | geojson | polygons of the discrete parts (versions) and the list of layers in the best converted to Geojson |
| mc:footprint | geojson | geographical delineation of the product / model trace |
| mc:SRS | int | reference System ID (EPSG), <br /> ex: 4326 / 3857 |
| mc:SRSName | text | name of reference system |
| mc:region | text | sector / countries <br/> comma separated list |
| mc:classification | enum  | product classification / confidentiality <br /> [Classification values](/classified/raster/classification_table.md) |
| mc:producerName | text | manufacturer / organization that produced / supplied the product |
| mc:RMS | double | tollerance, standard deviation in % |
| mc:scale | integer | **Valid values**: 0 to 100000000 |
| mc:productBBox | text | the bounding box of the product minX,minY,maxX,maxY |
| mc:ingestionDate | date | date when product was added to catalog |
| mc:type | enum | type of the catalog <br /> **Valid values**:  RECORD_RASTER / RECORD_3D / RECORD_DEM <br /> default: ***RECORD_RASTER***|
| mc:insertDate | date | the date when item was added to catalog |
| mc:keywords | text | list of key words relevant for product |