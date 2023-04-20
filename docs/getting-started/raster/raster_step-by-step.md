## Developer Guide step-by-step <!-- {docsify-ignore} -->
The following guide will help you understand, ***Step-by-step*** the best practices of how to work with the Map Colonies Catalog and how to consume mapping products in ***dynamic way*** (materials might be changed or added)

**Note:** In order to get the layer details (Product_ID, region, etc.) you have the following options:
1. Open map-colonies catalog application and locate the required layer
2. Query all records via CSW GetRecords operation and search it in the result response - [Query Examples Documentation](catalog-information/query-examples.md)


> :satisfied: **You can see fully functional example &nbsp; [Raster Example](.//assets/examples/raster/index.html)**


## Flow diagram <!-- {docsify-ignore} -->

The following flow will show you one of our main use-case's

```mermaid
flowchart LR
    subgraph CSW
      direction LR
      b1[STEP 1 <br/> Query CSW catalog] --> b2[STEP 2<br/> Extract BBOX]
      b1 --> b3[STEP 3<br/>Get layer URI]
    end

    subgraph  Prerequisite
      direction LR
      a1[Get Product_ID]
      a2[Get Auth Token]
    end

    a1 -- product_id --> b1
    a2 -- token --> D
    a2 -- token --> b1
    b3  -- layer_identifier --> C[STEP 4<br/> Get Layer Capabilities]
    b2 -- BBOX --> D[STEP 5<br/> Cesium/OL]
    C -- layer_params --> D
```

## Query CSW catalog (Step 1) <!-- {docsify-ignore} -->
Query **RASTER CSW catalog** service to find item(s) according to desired filter [example are here](/catalog-information/query-examples.md).

> :information_source: Pay attention to set the following parameter 'outputSchema="http://schema.mapcolonies.com/raster"' in order to get full catalog data

There are a few ways to acquire the productId, for example:

1. By product type [‘mc:productType‘ profile field](/catalog-information/v1_0/raster_profile.md), for example to get the world "Best" map we query by productType is "OrthophotoBest"

```
POST Request

url:
'<RASTER-CATALOG-SERVICE_URL>/csw'

body (XML):
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1" outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >
  <csw:Query typeNames="mc:MCRasterRecord">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc">
        <And>
          <PropertyIsEqualTo>
            <PropertyName>mc:productType</PropertyName>
            <Literal>OrthophotoBest</Literal>
          </PropertyIsEqualTo>
          <PropertyIsEqualTo>
            <PropertyName>mc:productId</PropertyName>
            <Literal>ORTHOPHOTO_MOSAIC_BASE</Literal>
          </PropertyIsEqualTo>
        </And>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```

2. You can enquire all raster products:

```
POST Request

url:
'<RASTER-CATALOG-SERVICE_URL>/csw'

body (XML):
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1"  outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >
  <csw:Query typeNames="mc:MCRasterRecord">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc">
        <PropertyIsEqualTo>
          <PropertyName>mc:type</PropertyName>
          <Literal>RECORD_RASTER</Literal>
        </PropertyIsEqualTo>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```

To get unique product when you already have the ***productType*** and ***productId*** you can use the following query (both can be coppied from our catalog app, for example for ***Best Orthophoto*** use the following):

```
POST Request

url:
'<RASTER-CATALOG-SERVICE_URL>/csw'

body (XML):
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1"  outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >
  <csw:Query typeNames="mc:MCRasterRecord">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc">
  		<And>
	        <PropertyIsEqualTo matchCase="true">
	          <PropertyName>mc:productId</PropertyName>
            <!-- ****** INSERT LAYER LAYER ID START ********************** -->
	          <Literal>ORTHOPHOTO_MOSAIC_BASE</Literal>
            <!-- ****** INSERT LAYER LAYER ID END ************************ -->
	        </PropertyIsEqualTo>
	        <PropertyIsEqualTo matchCase="true">
	          <PropertyName>mc:productType</PropertyName>
            <!-- ****** INSERT LAYER LAYER TYPE START ********************** -->
	          <Literal>OrthophotoBest</Literal>
            <!-- ****** INSERT LAYER LAYER TYPE END ************************ -->
	        </PropertyIsEqualTo>
        </And>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```

You will get GetRecords XML Response with product **metadata**.

<details>
  <summary>Response example</summary>

  ``` xml
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!-- pycsw 2.7.dev0 -->
    <csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mc="http://schema.mapcolonies.com/raster" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">
        <csw:SearchStatus timestamp="2022-02-15T15:08:58Z"/>
        <csw:SearchResults numberOfRecordsMatched="2" numberOfRecordsReturned="1" nextRecord="2" recordSchema="http://schema.mapcolonies.com/raster" elementSet="full">
            <mc:MCRasterRecord>
                <mc:classification>4</mc:classification>
                <mc:creationDateUTC>2022-02-13T13:04:23Z</mc:creationDateUTC>
                <mc:description>World Wide 2020</mc:description>
                <mc:footprint>{"type":"Polygon","coordinates":[[[-180,-90],[-180,90],[180,90],[180,-90],[-180,-90]]]}</mc:footprint>
                <mc:minHorizontalAccuracyCE90>3</mc:minHorizontalAccuracyCE90>
                <mc:id>3b3164a7-280d-4392-a82f-d60a76e69092</mc:id>
                <mc:ingestionDate>2022-02-13T13:04:23Z</mc:ingestionDate>
                <mc:insertDate>2022-02-13T13:04:41Z</mc:insertDate>
                <mc:layerPolygonParts>{"bbox":[],"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[],[]]]},"properties":{}}]}</mc:layerPolygonParts>
                <mc:links scheme="WMS" name="ORTHOPHOTO_MOSAIC_BASE" description="">'<YOUR_MAPPROXY_URL>/service?REQUEST=GetCapabilities'</mc:links>
                <mc:links scheme="WMS_BASE" name="ORTHOPHOTO_MOSAIC_BASE" description="">'<YOUR_MAPPROXY_URL>/wms'</mc:links>
                <mc:links scheme="WMTS" name="ORTHOPHOTO_MOSAIC_BASE" description="">'<YOUR_MAPPROXY_URL>/wmts/1.0.0/WMTSCapabilities.xml'</mc:links>
                <mc:links scheme="WMTS_KVP" name="ORTHOPHOTO_MOSAIC_BASE" description="">'<YOUR_MAPPROXY_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS'</mc:links>
                <mc:links scheme="WMTS_BASE" name="ORTHOPHOTO_MOSAIC_BASE" description="">'<YOUR_MAPPROXY_URL>/wmts'</mc:links>
                <mc:maxResolutionMeter>0.1</mc:maxResolutionMeter>
                <mc:producerName>IDFMU</mc:producerName>
                <mc:productBBox>-180,-90,180,90</mc:productBBox>
                <mc:productId>ORTHOPHOTO_MOSAIC_BASE</mc:productId>
                <mc:productName>אורתופוטו מתעדכן</mc:productName>
                <mc:productType>OrthophotoBest</mc:productType>
                <mc:productVersion>1.0</mc:productVersion>
                <mc:region>World</mc:region>
                <mc:maxResolutionDeg>0.000171661376953125</mc:maxResolutionDeg>
                <mc:sensors>UNDEFINED</mc:sensors>
                <mc:imagingTimeEndUTC>2020-05-21</mc:imagingTimeEndUTC>
                <mc:imagingTimeBeginUTC>2020-05-21</mc:imagingTimeBeginUTC>
                <mc:SRS>4326</mc:SRS>
                <mc:SRSName>WGS84GEO</mc:SRSName>
                <mc:transparency>OPAQUE</mc:transparency>
                <mc:type>RECORD_RASTER</mc:type>
                <mc:updateDateUTC>2022-02-13T13:03:07Z</mc:updateDateUTC>
                <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">
                    <ows:LowerCorner>-180.0 90.0</ows:LowerCorner>
                    <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
                </ows:BoundingBox>
            </mc:MCRasterRecord>
        </csw:SearchResults>
    </csw:GetRecordsResponse>
  ```
</details>

> :no_entry: **Authentication must be integrated in order to communicate with CSW server.**<br/>
> **See the principles [here](/ogc-protocols/ogc-csw-auth.md)**

## Extract product BBOX (Step 2) <!-- {docsify-ignore} -->
Now you want to find LAYER product BBOX (aka ‘extent’) from the metadata response of the product.
In the Response, look for `<ows:BoundingBox></ows:BoundingBox>` element.


Another way to find the product extent:
In the Response, look for `<mc:footprint></mc:footprint>` element.
In the example above - response XML file looks like this:
`<mc:footprint>{"type":"Polygon","coordinates":[[[-180,-90],[-180,90],[180,90],[180,-90],[-180,-90]]]}</mc:footprint>`)

Use any ***tool(CESIUM, TURF, etc..)*** to convert the footprint(geojson) into a BBOX.

For example using CESIUM and TURF
``` typescript
import bbox from '@turf/bbox';
import { Rectangle } from 'cesium';
import { LayerRasterRecord } from '../models';

export const generateLayerRectangle = (layer: LayerRasterRecord): Rectangle => {
  return Rectangle.fromDegrees(...bbox(layer.footprint));
};

```
After you’ve got your product BBOX lets move to the next step…

## Get layer URI (Step 3) <!-- {docsify-ignore} -->
In the Response, look for

> Note: WMTS (wmts capabilities) And WMTS_BASE (base wmts link exists also for those who prefer to use them)

``` xml
<mc:links scheme="WMTS" name="[desired_layer_identifier]" description="">
  '<RASTER-RASTER-SERVING-SERVICE_URL>/wmts/1.0.0/WMTSCapabilities.xml'
</mc:links>
<mc:links scheme="WMTS_KVP" name="[desired_layer_identifier]" description="">
  '<RASTER-RASTER-SERVING-SERVICE_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS'
</mc:links>
<mc:links scheme="WMTS_BASE" name="[desired_layer_identifier]" description="">
  '<RASTER-RASTER-SERVING-SERVICE_URL>/wmts'
</mc:links>
```

You need to save `[desired_layer_identifier]` value for later use.
> :information_source: **You also may save `<mc:links>` <u>element</u> value, which is a layer consumption URL.**


## Get Layer Capabilities (Step 4) <!-- {docsify-ignore} -->
Now, you need to fetch Raster's MapServer specified Layer metadata by sending **GetCapabilities** request.
First - find the correct **GetCapabilities URL**. Best way to achieve it is by looking for `scheme="WMTS"` property in the response of **[Step 3](#step-3)** and extract the GetCapabilities URL off it.

``` xml
<mc:links scheme="WMTS" name="[desired_layer_identifier]" description="">
  '<RASTER-RASTER-SERVING-SERVICE_URL>/wmts/1.0.0/WMTSCapabilities.xml'
</mc:links>
```

**OR** you can use wmts KVP capabilities

``` xml
<mc:links scheme="WMTS_KVP" name="[desired_layer_identifier]" description="">
  '<RASTER-RASTER-SERVING-SERVICE_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS'
</mc:links>
```

Make a GET request to this link. The response contains the details of **all** available layers in following format.
<figure>
    <img src="./assets/images/getcapabilities_response.png" style="display: block;margin-left: auto;margin-right: auto;">
</figure>

In the Response, look for LAYER where `<ows:Identifier>` has saved [previously](#step-3) `[desired_layer_identifier]`

You can read more about ***GetCapabilities*** OGC format [here](http://docs.opengeospatial.org/is/13-082r2/13-082r2.html) :globe_with_meridians:

You need to **save** the following values in order to consume the layer later on [Step 5](#step-5).

> :information_source: **Alternative to &nbsp; [Step 3](#step-3) way to get layer consumption URL**
> `<Layer/>` element include an exact WMTS URL template inside the child `<ResourceURL/>` element. So, you can use it as well


## Construct Client side LAYER (Step 5) <!-- {docsify-ignore} -->
Now, after you got all product metadata that you need by querying our Catalog and MapProxy capabilities, lets actually use it in order to display it in real map viewer / application (clients).
> :warning: **Below examples are based on `Pseudo code`, you will have to adapt it in your own application to make it work.**

> :heavy_exclamation_mark: **Important:** only **query parameter** `token` is currently supported
### Cesium
```javascript
...
...
...

const catalogLayer = new Cesium.WebMapTileServiceImageryProvider({
      url : '<LAYER_WMTS_URL>',                         // from Step_3 or Step_4
      /*********************************************************************************/
      /********     WHEN AUTH IS REQUIRED                                       ********/
      /*********************************************************************************/
      // url:new Cesium.Resource({
      //  url: '<LAYER_WMTS_URL>',                      // from Step_3 or Step_4
      //  headers: { 'X-API-KEY': RASTER_TOKEN },       // received RASTER auth token
      //  queryParameters: { 'token': RASTER_TOKEN },   // received RASTER auth token -
      //}),
      layer : '[desired_layer_identifier]',             // from Step_3
      style : '<LAYER_STYLE>',                          // from Step_4
      format : '<LAYER_FORMAT>',                        // from Step_4
      tileMatrixSetID : '<LAYER_TILE_MATRIX_SET_ID>',   // from Step_4
      /*********************************************************************************/
      /********     TILING SCHEME SHOULD BE 2 x 1                                ********/
      /*********************************************************************************/
      tilingScheme: new Cesium.GeographicTilingScheme(),
      /*********************************************************************************/
      /********     EXTENT SHOULD BE AS MUCH AS CLOSE TO LAYER ORIGIN FOOTPRINT ********/
      /*********************************************************************************/
      rectangle : <LAYER_EXTENT>,                       // from Step_2
    });

map.addLayer(catalogLayer);
...
...
...
```
> :heavy_exclamation_mark: **Important:** Add **query parameter** `version` with the record version to the request, in order to prevent browser & server cache mechanizem from giving you an unupdated tiles

Replace all `<>` place holders with the real values that we got from all previous steps:
- url - should be replaced by the URL that you got from [Step 3](#step-3) or [Step 4](#step-4).
- layer - should be replaced with layer Product ID.
- style - should be replaced with the value that you got from [Step 4](#step-4).
- format - should be replaced with the value that you got from [Step 4](#step-4)
- tileMatrixSetID - how can you get it? from Response from [Step 4](#step-4).
- tilingScheme - see [Usage Tips](/usage-tips/README.md)
- rectangle - value should be the BBOX ([extent](/usage-tips/README.md)) that you got from [Step 2](#step-2).

### OpenLayers (6.x)
```javascript
...
...
...
    
    const parser = new WMTSCapabilities();
    const capabilitiesResponse = await fetch('CapabilitiesURL');              // from Step_4
    const capabilitiesText = await capabilitiesResponse.text();
    const parserResult = parser.read(capabilitiesText);
    const layerOptions = optionsFromCapabilities(parserResult, {
      layer: '[desired_layer_identifier]'                                     // from Step_3
    });
    const layer = new TileLayer({ source: new WMTS(layerOptions), extent });  // from Step_2

    map.addLayer(layer);
...
...
...
```
- Note - **extent** taken from step 2 - where bbox is calculated.

### OpenLayers (1.x)
```javascript
  import L from "leaflet";
...
...
...

    const parser = (url) =>{
      return wmtsUrl.replace("maps", "{s}")
    .replace("{Style}", '<LAYER_STYLE>')                              // from Step_4
    .replace("{TileMatrixSet}", '<LAYER_TILE_MATRIX_SET_ID>')         // from Step_4
    .replace("{TileMatrix}", "{z}")
    .replace("{TileRow}", "{y}")
    .replace("{TileCol}", "{x}");
    }

    const bounds = L.latLngBounds([
      [extent[1], extent[0]],                                         // from Step_2
      [extent[3], extent[2]],                                         // from Step_2
    ]);

    const url = '<LAYER_WMTS_URL>'                                    // from Step_3 or Step_4
    const parsedUrl = parser(url)                                     

    const layer = L.tileLayer(parsedUrl + 'token=${RASTER_TOKEN}',{   // received RASTER auth token
      id : '<desired_layer_identifier>',                              // from Step_3
      bounds
    })

    map.addLayer(layer);
    
...
...
...
```
Replace all `<>` place holders with the real values that we got from all previous steps:
- style - should be replaced with the value that you got from [Step 4](#step-4).
- tileMatrixSetID - how can you get it? from Response from [Step 4](#step-4).
- extent - value should be the BBOX ([extent](/usage-tips/README.md)) that you got from [Step 2]
- url - should be replaced by the URL that you got from [Step 3](#step-3) or [Step 4](#step-4).
- id - should be replaced with layer Product ID that you got from [Step 3](#step-3)

## Enrich Layer data (Step 6) <!-- {docsify-ignore} -->
In order to present catalog items in your system you can use following fields:

- **mc:productName**
- **mc:description**
- **...**
- **rest** [Raster profile definition](./catalog-information/v1_0/raster_profile.md)

> :satisfied: **You can see fully functional example &nbsp; [Raster Example](.//assets/examples/raster/index.html)**

<br/>
<br/>
<table style=" width: 100%; display: table !important;">
    <tbody>
        <tr>
            <td align="left">
                <a href="#/catalog-information/v1_0/raster_profile">Previous (Catalog profile)</a>
            </td>
            <td align="right"></td>
        </tr>
    </tbody>
</table>
