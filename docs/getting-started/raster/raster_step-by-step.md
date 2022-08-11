## Developer Guide step-by-step <!-- {docsify-ignore} -->
The following guide will help you understand, ***Step-by-step*** the best practices of how to work with the Map Colonies Catalog and how to consume mapping products in ***dynamic way*** (materials might be changed or added)

**Note:** In order to get the layer details (Product_ID, region, etc.) you have the following options:
1. Open map-colonies catalog application and locate the required layer
2. Query all records via CSW GetRecords operation and search it in the result response - [Query Examples Documentation](catalog-information/query-examples.md)


> :satisfied: **You can see fully functional example &nbsp; [Raster Example](.//assets/examples/raster/index.html)**


## Flow diagram

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


## Query CSW catalog (Step 1)
Query **RASTER CSW catalog** service to find item(s) according to desired filter [example are here](/catalog-information/query-examples.md).

Assuming you enquire the desired mapping ***productId*** from our catalog.

Query the catalog by the [‘mc:productId’ profile field](/catalog-information/v1_0/raster_profile.md) to get the product metadata:
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
        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\">
          <PropertyName>mc:productId</PropertyName>
          <!-- ****** INSERT LAYER LAYER ID START ********************** -->
          <Literal>bluemarble_5km</Literal>
          <!-- ****** INSERT LAYER LAYER ID END ************************ -->
        </PropertyIsLike>
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
                <mc:links scheme="WMS" name="bluemarble_5km" description="">'<YOUR_MAPPROXY_URL>>/service?REQUEST=GetCapabilities'</mc:links>
                <mc:links scheme="WMTS" name="bluemarble_5km" description="">'YOUR_MAPPROXY_URL/wmts/1.0.0/WMTSCapabilities.xml'</mc:links>
                <mc:links scheme="WMTS_LAYER" name="bluemarble_5km" description="">'<YOUR_MAPPROXY_URL>/wmts/bluemarble_5km/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png'</mc:links>
                <mc:maxResolutionMeter>0.1</mc:maxResolutionMeter>
                <mc:producerName>IDFMU</mc:producerName>
                <mc:productBBox>-180,-90,180,90</mc:productBBox>
                <mc:productId>bluemarble_5km</mc:productId>
                <mc:productName>bluemarble_5cm</mc:productName>
                <mc:productType>OrthophotoHistory</mc:productType>
                <mc:productVersion>4.0</mc:productVersion>
                <mc:region>World</mc:region>
                <mc:maxResolutionDeg>0.000171661376953125</mc:maxResolutionDeg>
                <mc:sensors>UNDEFINED</mc:sensors>
                <mc:imagingTimeEndUTC>2020-05-21</mc:imagingTimeEndUTC>
                <mc:imagingTimeBeginUTC>2020-05-21</mc:imagingTimeBeginUTC>
                <mc:SRS>4326</mc:SRS>
                <mc:SRSName>WGS84GEO</mc:SRSName>
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

## Extract product BBOX (Step 2)
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

## Get layer URI (Step 3)
In the Response, look for

`<mc:links scheme="`<strong>WMTS_LAYER</strong>`" name="[desired_layer_identifier]">`
  `<RASTER-RASTER-SERVING-SERVICE_URL>/wmts/bluemarble_5km/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png`
`</mc:links>`element.

You need to save `[desired_layer_identifier]` value for later use.
> :information_source: **You also may save `<mc:links>` <u>element</u> value, which is a layer consumption URL.**


## Get Layer Capabilities (Step 4)
Now, you need to fetch Raster's MapServer specified Layer metadata by sending **GetCapabilities** request.
You can go to the next URL below with your browser or just send GET request to:
```
<RASTER-RASTER-SERVING-SERVICE_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS
```

Response will contain the details of **all** available layers in following format.
<figure>
    <img src="./assets/images/getcapabilities_response.png" style="display: block;margin-left: auto;margin-right: auto;">
</figure>

In the Response, look for LAYER where `<ows:Identifier>` has saved [previously](#step-3) `[desired_layer_identifier]`

You can read more about ***GetCapabilities*** OGC format [here](http://docs.opengeospatial.org/is/13-082r2/13-082r2.html) :globe_with_meridians:

You need to **save** the following values in order to consume the layer later on [Step 5](#step-5).

> :information_source: **Alternative to &nbsp; [Step 3](#step-3) way to get layer consumption URL**
> `<Layer/>` element include an exact WMTS URL template inside the child `<ResourceURL/>` element. So, you can use it as well


## Construct Client side LAYER (Step 5)
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
      layer : '<LAYER_PRODUCT_ID>',                     // from Step_1
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
Replace all `<>` place holders with the real values that we got from all previous steps:
- url - should be replaced by the URL that you got from [Step 3](#step-3) or [Step 4](#step-4).
- layer - should be replaced with layer Product ID.
- style - should be replaced with the value that you got from [Step 4](#step-4).
- format - should be replaced with the value that you got from [Step 4](#step-4)
- tileMatrixSetID - how can you get it? from Response from [Step 4](#step-4).
- tilingScheme - see [Usage Tips](/usage-tips/README.md)
- rectangle - value should be the BBOX ([extent](/usage-tips/README.md)) that you got from [Step 2](#step-2).

### OpenLayers
```javascript
...
...
...

    const catalogLayer = new TileLayer({
          opacity: 1,
          extent: <LAYER_EXTENT>                          // from Step_2
          source: new WMTS({
            name: '<LAYER_PRODUCT_ID>',                   // from Step_1
            url: '<LAYER_WMTS_URL>',                      // from Step_3 or Step_4
            layer: '<LAYER_PRODUCT_ID>',                  // from Step_1
            matrixSet: '<LAYER_TILE_MATRIX_SET_ID>',      // from Step_4
            format: '<LAYER_FORMAT>',                     // from Step_4
            isBaseLayer: true,
            style: '<LAYER_STYLE>',                       // from Step_4
            requestEncoding: 'REST'
          }),
    }),

    map.addLayer(catalogLayer)
...
...
...
```
- extent - value should be the BBOX (extent) that you got from [Step 2](#step-2).
- url - should be replaced by the URL that you got from [Step 3](#step-3) or [Step 4](#step-4).
- layer - should be replaced with layer Product ID.
- matrixSetID -from Response from [Step 4](#step-4).
- style - should be replaced with the value that you got from [Step 4](#step-4).
- format - should be replaced with the value that you got from [Step 4](#step-4).

## Enrich Layer data (Step 6)
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
