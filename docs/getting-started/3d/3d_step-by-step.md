## Developer Guide step-by-step <!-- {docsify-ignore} -->
The following guide will help you understand, ***Step-by-step*** the best practices of how to work with the Map Colonies **3D** Catalog and how to consume mapping products in a ***dynamic way*** (materials might be changed or added)

> :satisfied: **You can see fully functional example &nbsp; [3D Example](.//assets/examples/3d/index.html)**


## Flow diagram
```mermaid
flowchart LR
    subgraph  Prerequisite
      direction LR
      a1[Define filter]
      a2[Get Auth Token]
    end

    a1 -- filter --> B[STEP 1<br/> Query CSW catalog]
    a2 -- token --> B
    subgraph  Links extract
      direction LR
      c1[STEP 2<br/>Get layer's URI]
      c2[STEP 2.1 optional<br/>Get terrain provider URI]
    end
    B -- xml --> c1
    B -- xml --> c2
    c1 -- layer_URI --> D[STEP 3<br/>Cesium]
    c2 -- terrain_URI --> D[STEP 3<br/>Cesium]
```

## Query CSW catalog (Step 1)
Query **3D CSW catalog** service to find item(s) according to desired filter [example are here](/catalog-information/query-examples.md)

Filter should be based on [3D profile](/catalog-information/v1_0/3d_profile.md)

Example query based on `mc:classification` profile field
```
POST Request

url:
'<PYCSW-3D-SERVICE_URL>/csw'

body (XML):
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords outputFormat="application/xml"  outputSchema="http://schema.mapcolonies.com/3d" resultType="results" service="CSW" version="2.0.2" startPosition="1" maxRecords="200" xmlns:mc="http://schema.mapcolonies.com/3d" xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc">
    <csw:Query typeNames="csw:Record">
        <csw:ElementSetName>full</csw:ElementSetName>
        <csw:Constraint version="1.1.0">
            <ogc:Filter>
                <ogc:Or>
                    <ogc:PropertyIsEqualTo>
                        <ogc:PropertyName>mc:classification</ogc:PropertyName>
                        <ogc:Literal>5</ogc:Literal>
                    </ogc:PropertyIsEqualTo>
                    <ogc:PropertyIsEqualTo>
                        <ogc:PropertyName>mc:productType</ogc:PropertyName>
                        <ogc:Literal>QuantizedMeshDTMBest</ogc:Literal>
                    </ogc:PropertyIsEqualTo>
                </ogc:Or>
            </ogc:Filter>
        </csw:Constraint>
    </csw:Query>
</csw:GetRecords>
```

You will get GetRecords XML Response with product **metadata**.

<details>
  <summary>Response example</summary>

```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!-- pycsw 2.7.dev0 -->
    <csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:mc="http://schema.mapcolonies.com/3d" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">
    <csw:SearchStatus timestamp="2022-03-27T06:45:54Z" />
    <csw:SearchResults numberOfRecordsMatched="2" numberOfRecordsReturned="2" nextRecord="0" recordSchema="http://schema.mapcolonies.com/3d" elementSet="full">
        <mc:MC3DRecord>
            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>
            <mc:classification>5</mc:classification>
            <mc:footprint>{"type":"Polygon","coordinates":[[[31.2603,33.4345],[31.2603,34.4888],[32.3353,34.4888],[32.3353,33.4345],[31.2603,33.4345]]]}</mc:footprint>
            <mc:geographicArea>ישראל</mc:geographicArea>
            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>
            <mc:id>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:id>
            <mc:links scheme="3D_LAYER" name="" description="">http://model-server-3d/15211-65da-4523-9d6f-08016ad51b0d/tileset.json</mc:links>
            <mc:producerName>DAVID</mc:producerName>
            <mc:productBBox>31.2603,33.4345,32.3353,34.4888</mc:productBBox>
            <mc:productId>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:productId>
            <mc:productName>מודל פריז</mc:productName>
            <mc:productType>3DPhotoRealistic</mc:productType>
            <mc:productVersion>1</mc:productVersion>
            <mc:productionMethod>photogrammetric</mc:productionMethod>
            <mc:productionSystem>P-30</mc:productionSystem>
            <mc:productionSystemVersion>1</mc:productionSystemVersion>
            <mc:region>צפון</mc:region>
            <mc:sensors>sensor1</mc:sensors>
            <mc:imagingTimeEndUTC>2022-06-15T10:39:00Z</mc:imagingTimeEndUTC>
            <mc:imagingTimeBeginUTC>2022-06-15T10:39:00Z</mc:imagingTimeBeginUTC>
            <mc:SRS>4567</mc:SRS>
            <mc:SRSName>WGS24GEO</mc:SRSName>
            <mc:type>RECORD_3D</mc:type>
            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">
                <ows:LowerCorner>33.4345 31.2603</ows:LowerCorner>
                <ows:UpperCorner>34.4888 32.3353</ows:UpperCorner>
            </ows:BoundingBox>
        </mc:MC3DRecord>
        <mc:MC3DRecord>
            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>
            <mc:classification>6</mc:classification>
            <mc:creationDateUTC>2022-06-15</mc:creationDateUTC>
            <mc:description>srtm100</mc:description>
            <mc:footprint>{"type":"Polygon","coordinates":[[[35.2670012825,32.5856881598],[35.2670012825,32.6300363309],[35.3105702702,32.6300363309],[35.3105702702,32.5856881598],[35.2670012825,32.5856881598]]]}</mc:footprint>
            <mc:geographicArea>North</mc:geographicArea>
            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>
            <mc:id>11111111-1111-1111-1111-111111111111</mc:id>
            <mc:links scheme="TERRAIN_QMESH" name="" description="">http://terrain-server.com/terrains/srtm100/layer.json</mc:links>
            <mc:producerName>MIKI</mc:producerName>
            <mc:productBBox>35.2670012825,32.5856881598,35.3105702702,32.6300363309</mc:productBBox>
            <mc:productId>11111111-1111-1111-1111-111111111111</mc:productId>
            <mc:productName>srtm100</mc:productName>
            <mc:productType>QuantizedMeshDTMBest</mc:productType>
            <mc:productVersion>1</mc:productVersion>
            <mc:productionMethod></mc:productionMethod>
            <mc:productionSystem></mc:productionSystem>
            <mc:productionSystemVersion>1</mc:productionSystemVersion>
            <mc:region>Israel</mc:region>
            <mc:sensors>UNDEFINED</mc:sensors>
            <mc:imagingTimeEndUTC>2022-06-15</mc:imagingTimeEndUTC>
            <mc:imagingTimeBeginUTC>2022-06-15</mc:imagingTimeBeginUTC>
            <mc:SRS>4326</mc:SRS>
            <mc:SRSName>WGS84GEO</mc:SRSName>
            <mc:type>RECORD_3D</mc:type>
            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">
                <ows:LowerCorner>32.5856881598 35.2670012825</ows:LowerCorner>
                <ows:UpperCorner>32.6300363309 35.3105702702</ows:UpperCorner>
            </ows:BoundingBox>
        </mc:MC3DRecord>
    </csw:SearchResults>
    </csw:GetRecordsResponse>
```
</details>

> :no_entry: **Authentication must be integrated in order to communicate with CSW server.**<br/>
> **See the principles [here](/ogc-protocols/ogc-csw-auth.md)**

## Get layer URI (Step 2)
In the Response, look for

`<mc:links scheme="`<strong>3D_LAYER</strong>`" name="">` <br/>
  `http://3d-model-server.com/path-to-tileset.json` <br/>
`</mc:links>`

> :information_source: **You need to save `<mc:links>` <u>element</u> value as MODEL_URL, which is a layer consumption URL.**

## Get terrain provider URI (Step 2.1, optional)
In the Response, look for

`<mc:links scheme="`<strong>TERRAIN_QMESH</strong>`" name="">` <br/>
  `http://terrain-server.com/terrains/srtm100/layer.json` <br/>
`</mc:links>`

> :information_source: **You need to save `<mc:links>` <u>element</u> value as TERRAIN_URL, which is a terrain provider consumption URL.**

## Construct Client side LAYER (Step 3)
Now, after you got all product metadata that you need by querying our Catalog and MapProxy capabilities, lets actually use it in order to display it in real map viewer / application (clients).
> :warning: **Below examples are based on `Pseudo code`, you will have to adapt it in your own application to make it work.**

### Cesium

> :information_source: **The minimum required version for cesium is v84.**

```javascript
// **Optional** add to Cesium terrain provider in order to clamp 3d models to the ground
viewer.terrainProvider = new Cesium.TerrainProvider({
      url: new Cesium.Resource({
        url: "<TERRAIN_URL>",
        queryParameters: {
          "token": "<token>",
        },
    }),
});
...
...
// Add 3d model to the scene
const tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: new Cesium.Resource({
        url: "<MODEL_URL>",
        queryParameters: {
          "token": "<token>",
        },
    }),
    })
);
...
```
Replace `<MODEL_URL>` with the URL link that you got from **Step 2**.

Replace `<TERRAIN_URL>` with the URL link that you got from **Step 2.1 (optional)**.

Replace `<token>` with the token you have.

> :satisfied: **You can see fully functional example &nbsp; [3D Example](.//assets/examples/3d/index.html)**

<br/>
<br/>
<table style=" width: 100%; display: table !important;">
    <tbody>
        <tr>
            <td align="left">
                <a href="#/catalog-information/v1_0/3d_profile">Previous (Catalog profile)</a>
            </td>
            <td align="right"></td>
        </tr>
    </tbody>
</table>
