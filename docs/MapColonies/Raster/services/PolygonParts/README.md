---
id: raster-polygon-parts-service
slug: polygon-parts
title: Polygon Parts 🧩
description: Search, Filter and Aggregate polygon parts (vectorial) layers
tags:
  - wfs
  - raster
  - features
  - API
  - polygon-parts
---

# Polygon Parts Service 🧩

Raster polygon parts service uses the [WFS](/docs/ogc/protocols/ogc-wfs) protocol which is a READ-ONLY Web Feature Service.
it provides facilities for searching and retrieving feature data with the `GetCapabilities`, `DescribeFeatureType` and `GetFeature` operations all other operations are invalid.

For the full capabilities provided by the service see [GetCapabilities](/docs/ogc/protocols/ogc-wfs#getcapabilities)

WFS partitions the queryable data into feature types each feature type has its own attributes describing the structure of the data itself.
For the description of a feature type see [DescribeFeatureType](/docs/ogc/protocols/ogc-wfs#describefeaturetype)

Finally, Features can be retrieved with the [GetFeature](/docs/ogc/protocols/ogc-wfs#getfeature) operation. the request returns a collection of geographic feature instances filtered according to a criteria set by the requesting client.
<br/>

:::important
**In polygon parts, each feature represent single polygon**
:::

:::caution Authentication
**Authentication must be integrated in order to communicate with Map and Catalog services.**<br/>
**See the principles [here](/docs/MapColonies/authentication)**
:::

## Examples

WFS protocol partitions the queryable features into different feature types.
Each feature types actually represent other catalog layer [Raster Catalog](/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v1).

Each feature type consists of same polygon parts schema describing the feature. the feature type is queryable by its schema, each feature type has a default coordinate reference system and the bounding box which contains all features of this type, those are also possible parameters for querying.

Let's see an example using all three operations with different filters, the following chart describes our work flow

```mermaid
flowchart LR
A{Get Auth Token} -->|token| B[GetCapabilities]
    subgraph WFS
      direction LR
        B -->|FeatureTypeList| C{Select Feature}
        C -->|feature| D[DescribeFeatureType]
        D -->|schema| E{Build Your Filter}
        E -->|filter| F[GetFeature]
        F -->G((filtered features))
    end
```

### List  WFS capabilities and find available FeaturesTypes

To list all the available feature types use the `GetCapabilities` operation and look for the `FeatureTypeList` section.

<details>
  <summary>Response</summary>

```xml title="Response"
<FeatureTypeList>
        <FeatureType xmlns:polygon_parts="http://polygon_parts">
            <Name>polygon_parts:bluemarble_orthophoto_polygon_parts</Name>
            <Title>bluemarble_orthophoto</Title>
            <Abstract/>
            <ows:Keywords>
                <ows:Keyword>features</ows:Keyword>
                <ows:Keyword>polygon_parts</ows:Keyword>
            </ows:Keywords>
            <DefaultCRS>urn:ogc:def:crs:EPSG::4326</DefaultCRS>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
                <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
            </ows:WGS84BoundingBox>
        </FeatureType>
        <FeatureType xmlns:polygon_parts="http://polygon_parts">
            <Name>polygon_parts:orthophoto_mosaic_base_orthophoto_best_polygon_parts</Name>
            <Title>mosaic_base_orthophoto_best</Title>
            <Abstract/>
            <ows:Keywords>
                <ows:Keyword>features</ows:Keyword>
                <ows:Keyword>polygon_parts</ows:Keyword>
            </ows:Keywords>
            <DefaultCRS>urn:ogc:def:crs:EPSG::4326</DefaultCRS>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
                <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
            </ows:WGS84BoundingBox>
        </FeatureType>
    </FeatureTypeList>
```

</details>

<br/>

We got a `FeatureTypeList` consisting of the different `FeatureTypes` that each one hold and represent some catalog layer under the WFS service. one of them is the `polygon_parts:orthophoto_mosaic_base_orthophoto_best_polygon_parts`.`FeatureType` where polygon_parts is the namespace and the orthophoto_mosaic_base_orthophoto_best_polygon_parts is the unique `FeatureType` name under the polygon_parts namespace - it include layer's `product_name` + `product_type` + polygon_parts suffix. it is possible to query the FeatureType by its full name `polygon_parts:orthophoto_mosaic_base_orthophoto_best_polygon_parts` or short unique name `orthophoto_mosaic_base_orthophoto_best_polygon_parts`.
The default coordinate reference system and the containing features bounding box are also presented.


### Use DescribeFeatureFeature & understand Feature's attributes

If you would like to view the schema of the `orthophoto_mosaic_base_orthophoto_best_polygon_parts` `FeatureType`, we could invoke the `DescribeFeatureType` request with `typeName` of `orthophoto_mosaic_base_orthophoto_best_polygon_parts`

The response is the XSD (in xml response) describing the `orthophoto_mosaic_base_orthophoto_best_polygon_parts` `FeatureType`.

For convenience we'll add outputFormat parameter as `application/json` to each of our requests for a json formatted response

```
<POLYGON_PARTS_QUERY_SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=DescribeFeatureType&
    typeName=orthophoto_mosaic_base_orthophoto_best_polygon_parts&
    outputFormat=application/json
```

<details>
  <summary>Response</summary>

```json title="Response in JSON"
{
  "elementFormDefault": "qualified",
  "targetNamespace": "http://polygon_parts",
  "targetPrefix": "polygon_parts",
  "featureTypes": [
    {
      "typeName": "orthophoto_mosaic_base_orthophoto_best_polygon_parts",
      "properties": [
        {
          "name": "partId",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:int",
          "localType": "int"
        },
        {
          "name": "recordId",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:string",
          "localType": "string"
        },
        {
          "name": "productId",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:string",
          "localType": "string"
        },
        {
          "name": "producType",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:string",
          "localType": "string"
        },
        {
          "name": "id",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:string",
          "localType": "string"
        },
        {
          "name": "name",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:string",
          "localType": "string"
        },
        {
          "name": "updatedInVersion",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:string",
          "localType": "string"
        },
        {
          "name": "ingestionDateUTC",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:date-time",
          "localType": "date-time"
        },
        {
          "name": "imagingTimeBeginUTC",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:date-time",
          "localType": "date-time"
        },
        {
          "name": "imagingTimeEndUTC",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:date-time",
          "localType": "date-time"
        },
        {
          "name": "resolutionDegree",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:number",
          "localType": "number"
        },
        {
          "name": "resolutionMeter",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:number",
          "localType": "number"
        },
        {
          "name": "sourceResolutionMeter",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:number",
          "localType": "number"
        },
        {
          "name": "horizontalAccuracyCE90",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:number",
          "localType": "number"
        },
        {
          "name": "sensors",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:string",
          "localType": "string"
        },
        {
          "name": "countries",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:string",
          "localType": "string"
        },
        {
          "name": "cities",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:string",
          "localType": "string"
        },
        {
          "name": "description",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "xsd:string",
          "localType": "string"
        },
        {
          "name": "geometry",
          "maxOccurs": 1,
          "minOccurs": 0,
          "nillable": true,
          "type": "gml:Polygon",
          "localType": "Polygon"
        }
      ]
    }
  ]
}
```

</details>



This is a description of a orthophoto_mosaic_base_orthophoto_best_polygon_parts feature that include all polygon parts of the `ORTHOPHOTO_MOSAIC_BASE-OrthophotoBest` catalog layer, it contains these properties, each property has its own type, nillable flag value and min\max occurs - these describing the requireness of the property and possible repeatness.



Now that we hold the structure of the `orthophoto_mosaic_base_orthophoto_best_polygon_parts` FeatureType we're able to query layer's polygon parts features by a set of parameters using the `GetFeature` operation, let's see some examples:


### GetFeature GET basic request with count restricts

1. let's retrieve 2 of polygon parts for provided featureType `orthophoto_mosaic_base_orthophoto_best_polygon_parts`, that include actually total of 4 features:

```
<POLYGON_PARTS_QUERY_SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetFeature&
    count=2&
    typeName=orthophoto_mosaic_base_orthophoto_best_polygon_parts&
    outputFormat=application/json
```

<details>
  <summary>Response</summary>

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.12",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [180, 90],
            [180, -90],
            [-180, -90],
            [-180, 90],
            [180, 90]
          ],
          [
            [34.6064, 31.6234],
            [34.3887, 31.6234],
            [34.3887, 31.4354],
            [34.6064, 31.4354],
            [34.6064, 31.6234]
          ],
          [
            [34.4294, 31.2279],
            [34.4294, 31.4159],
            [34.2117, 31.4159],
            [34.2117, 31.2279],
            [34.4294, 31.2279]
          ],
          [
            [35.3664, 32.1381],
            [35.3664, 32.3249],
            [35.1511, 32.3249],
            [35.1511, 32.1381],
            [35.3664, 32.1381]
          ],
          [
            [35.0607, 31.9323],
            [35.2784, 31.9323],
            [35.2784, 32.1202],
            [35.0607, 32.1202],
            [35.0607, 31.9323]
          ],
          [
            [35.7645, 33.9586],
            [35.7645, 33.7706],
            [35.9822, 33.7706],
            [35.9822, 33.9586],
            [35.7645, 33.9586]
          ],
          [
            [35.9166, 33.7644],
            [35.6989, 33.7644],
            [35.6989, 33.5765],
            [35.9166, 33.5765],
            [35.9166, 33.7644]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 1,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "BlueMarble",
        "name": "O_BlueMarble_rgb_2km",
        "updatedInVersion": "1",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2001-01-01T05:00:00Z",
        "imagingTimeEndUTC": "2001-01-01T05:00:00Z",
        "resolutionDegree": 0.02197265625,
        "resolutionMeter": 2000,
        "sourceResolutionMeter": 2500,
        "horizontalAccuracyCE90": 2000,
        "sensors": "MAXAR",
        "countries": "עולמי",
        "cities": "",
        "description": ""
      },
      "bbox": [-180, -90, 180, 90]
    },
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.3",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [35.017272438849716, 29.9596406497117],
            [34.890572098923826, 29.9596406497117],
            [34.890572098923826, 29.819712060693362],
            [35.017272438849716, 29.819712060693362],
            [35.017272438849716, 29.9596406497117]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 2,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "MAS_6_ORT_247568-26.0",
        "name": "O_south_w84geo_Tiff_10cm",
        "updatedInVersion": "2",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2022-08-20T23:08:10Z",
        "imagingTimeEndUTC": "2022-08-20T23:08:10Z",
        "resolutionDegree": 0.072,
        "resolutionMeter": 0.6,
        "sourceResolutionMeter": 0.1,
        "horizontalAccuracyCE90": 1.5,
        "sensors": "TEST_SENSOR_2",
        "countries": "ישראל, דרום הארץ, דרום",
        "cities": "",
        "description": "תשתית אורתופוטו באיזור דרום עדכנית לאוגוסט 2022"
      },
      "bbox": [
        34.890572098923826, 29.819712060693362, 35.017272438849716,
        29.9596406497117
      ]
    }
  ],
  "totalFeatures": 7,
  "numberMatched": 7,
  "numberReturned": 2,
  "timeStamp": "2024-07-11T08:23:42.502Z",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:EPSG::4326"
    }
  },
  "bbox": [-180, -90, 180, 90]
}
```

</details>

### GetFeature GET request with sort params

2. To get layer's polygon parts features sorted by some property such as `updatedInVersion` we can invoke the following request.

```
<VECTOR_QUERY_SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetFeature&
    typeNames=orthophoto_mosaic_base_orthophoto_best_polygon_parts&
    sortBy=updatedInVersion&
    outputFormat=application/json
```

<details>
  <summary>Response</summary>

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.12",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [180, 90],
            [180, -90],
            [-180, -90],
            [-180, 90],
            [180, 90]
          ],
          [
            [34.6064, 31.6234],
            [34.3887, 31.6234],
            [34.3887, 31.4354],
            [34.6064, 31.4354],
            [34.6064, 31.6234]
          ],
          [
            [34.4294, 31.2279],
            [34.4294, 31.4159],
            [34.2117, 31.4159],
            [34.2117, 31.2279],
            [34.4294, 31.2279]
          ],
          [
            [35.3664, 32.1381],
            [35.3664, 32.3249],
            [35.1511, 32.3249],
            [35.1511, 32.1381],
            [35.3664, 32.1381]
          ],
          [
            [35.0607, 31.9323],
            [35.2784, 31.9323],
            [35.2784, 32.1202],
            [35.0607, 32.1202],
            [35.0607, 31.9323]
          ],
          [
            [35.7645, 33.9586],
            [35.7645, 33.7706],
            [35.9822, 33.7706],
            [35.9822, 33.9586],
            [35.7645, 33.9586]
          ],
          [
            [35.9166, 33.7644],
            [35.6989, 33.7644],
            [35.6989, 33.5765],
            [35.9166, 33.5765],
            [35.9166, 33.7644]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 1,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "BlueMarble",
        "name": "O_BlueMarble_rgb_2km",
        "updatedInVersion": "1",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2001-01-01T05:00:00Z",
        "imagingTimeEndUTC": "2001-01-01T05:00:00Z",
        "resolutionDegree": 0.02197265625,
        "resolutionMeter": 2000,
        "sourceResolutionMeter": 2500,
        "horizontalAccuracyCE90": 2000,
        "sensors": "MAXAR",
        "countries": "עולמי",
        "cities": "",
        "description": ""
      },
      "bbox": [-180, -90, 180, 90]
    },
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.3",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [34.98549473145019, 29.782811797130847],
            [34.90115724749933, 29.782811797130847],
            [34.90115724749933, 29.672690878996704],
            [34.98549473145019, 29.672690878996704],
            [34.98549473145019, 29.782811797130847]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 2,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "MAS_6_ORT_247568-26.0",
        "name": "O_south_w84geo_Tiff_10cm",
        "updatedInVersion": "2",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2022-08-20T23:08:10Z",
        "imagingTimeEndUTC": "2022-08-20T23:08:10Z",
        "resolutionDegree": 0.072,
        "resolutionMeter": 0.6,
        "sourceResolutionMeter": 0.1,
        "horizontalAccuracyCE90": 1.5,
        "sensors": "TEST_SENSOR_2",
        "countries": "ישראל, דרום הארץ, דרום",
        "cities": "",
        "description": "תשתית אורתופוטו באיזור דרום עדכנית לאוגוסט 2022"
      },
      "bbox": [
        34.90115724749933, 29.672690878996704, 34.98549473145019,
        29.782811797130847
      ]
    },
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.5",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [34.98549473145019, 29.782811797130847],
            [34.90115724749933, 29.782811797130847],
            [34.90115724749933, 29.672690878996704],
            [34.98549473145019, 29.672690878996704],
            [34.98549473145019, 29.782811797130847]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 3,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "MAS_6_ORT_247568-26.0",
        "name": "O_south_w84geo_Tiff_10cm",
        "updatedInVersion": "3",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2021-05-15T23:09:00Z",
        "imagingTimeEndUTC": "2021-05-15T23:09:00Z",
        "resolutionDegree": 0.072,
        "resolutionMeter": 0.6,
        "sourceResolutionMeter": 0.1,
        "horizontalAccuracyCE90": 3,
        "sensors": "TEST_SENSOR_1",
        "countries": "ישראל, דרום",
        "cities": "",
        "description": "תשתית אורתופוטו בדרום הארץ עדכני למאי 2021"
      },
      "bbox": [
        34.90115724749933, 29.672690878996704, 34.98549473145019,
        29.782811797130847
      ]
    },
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.7",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [34.784517383368296, 32.09026061257954],
            [34.784517383368296, 32.02584851078221],
            [34.87342700067666, 32.02584851078221],
            [34.87342700067666, 32.09026061257954],
            [34.784517383368296, 32.09026061257954]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 4,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "MAS_5_ORT_240115-11.1",
        "name": "O_center_w84geo_Apr17-Jun22_gpkg_0.07",
        "updatedInVersion": "4",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2021-06-11T02:00:00Z",
        "imagingTimeEndUTC": "2021-06-11T02:00:00Z",
        "resolutionDegree": 0.062,
        "resolutionMeter": 0.6,
        "sourceResolutionMeter": 0.07,
        "horizontalAccuracyCE90": 4,
        "sensors": "OTHER",
        "countries": "ישראל",
        "cities": "",
        "description": "תשתית אורתופוטו  במרכז  הארץ עדכני ליוני 2021"
      },
      "bbox": [
        34.784517383368296, 32.02584851078221, 34.87342700067666,
        32.09026061257954
      ]
    },
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.9",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [34.784517383368296, 32.09026061257954],
            [34.784517383368296, 32.02584851078221],
            [34.87342700067666, 32.02584851078221],
            [34.87342700067666, 32.09026061257954],
            [34.784517383368296, 32.09026061257954]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 5,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "MAS_5_ORT_240115-11.2",
        "name": "O_center_w84geo_Apr17-Jun22_gpkg_0.08",
        "updatedInVersion": "5",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2021-05-12T04:00:00Z",
        "imagingTimeEndUTC": "2021-05-12T04:00:00Z",
        "resolutionDegree": 0.062,
        "resolutionMeter": 0.6,
        "sourceResolutionMeter": 0.07,
        "horizontalAccuracyCE90": 4,
        "sensors": "OTHER",
        "countries": "ישראל",
        "cities": "",
        "description": "תשתית אורתופוטו במרכז המדינה עדכני למאי 2021"
      },
      "bbox": [
        34.784517383368296, 32.02584851078221, 34.87342700067666,
        32.09026061257954
      ]
    },
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.11",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [35.064814353455404, 32.85094300562277],
            [35.064814353455404, 32.808880172316066],
            [35.09637711939874, 32.808880172316066],
            [35.09637711939874, 32.85094300562277],
            [35.064814353455404, 32.85094300562277]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 6,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "MAS_6_ORT_247268-6.0",
        "name": "O_north_w84geo_rgb_Tiff_30cm",
        "updatedInVersion": "6",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2021-07-11T04:00:00Z",
        "imagingTimeEndUTC": "2021-07-11T04:00:00Z",
        "resolutionDegree": 0.052,
        "resolutionMeter": 0.6,
        "sourceResolutionMeter": 0.3,
        "horizontalAccuracyCE90": 6,
        "sensors": "WORLDVIEW2",
        "countries": "",
        "cities": "",
        "description": "10300100C2411D00"
      },
      "bbox": [
        35.064814353455404, 32.808880172316066, 35.09637711939874,
        32.85094300562277
      ]
    },
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.13",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [34.988118558230155, 32.817028819163966],
            [34.988118558230155, 32.79262878072221],
            [35.054288443470284, 32.79262878072221],
            [35.054288443470284, 32.817028819163966],
            [34.988118558230155, 32.817028819163966]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 7,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "MAS_6_ORT_247268-6.0",
        "name": "O_north_w84geo_rgb_Tiff_30cm",
        "updatedInVersion": "7",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2021-09-01T04:00:00Z",
        "imagingTimeEndUTC": "2021-09-01T04:00:00Z",
        "resolutionDegree": 0.072,
        "resolutionMeter": 0.6,
        "sourceResolutionMeter": 0.3,
        "horizontalAccuracyCE90": 8.5,
        "sensors": "TEST_SENSOR_2",
        "countries": "",
        "cities": "",
        "description": "38225114-2021090108361457WV03038225"
      },
      "bbox": [
        34.988118558230155, 32.79262878072221, 35.054288443470284,
        32.817028819163966
      ]
    }
  ],
  "totalFeatures": 7,
  "numberMatched": 7,
  "numberReturned": 7,
  "timeStamp": "2024-07-11T08:22:41.924Z",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:EPSG::4326"
    }
  },
  "bbox": [-180, -90, 180, 90]
}
```

</details>


### GetFeature POST request with geographical intersection

For more complex criteria such as a set of multiple parameters or geographical intersections we should invoke a POST GetFetures request consisting the filter as a XML body.

3. let's look for all the polygon parts features that intersect in a polygon, one of the properties of a polygon part feature is it's geometry describing the polygon part geography, we'll look by it by setting it as the request `ValueReference`. We can specify the `srsName` which is the coordinate reference system of the returned features in our case `EPSG:4326`.
   the polygon is a list of latitude-longitude pair coordinates.

We'll invoke a POST GetFeature request with the following body:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<wfs:GetFeature xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:fes="http://www.opengis.net/fes/2.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:sf="http://www.openplans.org/spearfish" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" service="WFS" version="2.0.0" count="2" xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd http://www.opengis.net/gml/3.2 http://schemas.opengis.net/gml/3.2.1/gml.xsd" outputFormat="application/json">
    <wfs:Query typeNames="polygon_parts:orthophoto_mosaic_base_orthophoto_best_polygon_parts">
        <fes:Filter>
            <fes:Intersects>
                <fes:ValueReference>geometry</fes:ValueReference>
                <gml:Polygon gml:id="polygon.1" srsName="http://www.opengis.net/gml/srs/epsg.xml#4326">
                    <gml:exterior>
                        <gml:LinearRing>
                            <gml:posList>
                                35.34244 32.2543 34.92215 32.2543 34.9221 31.8823 35.34244 31.8823 35.34244 32.2543
                            </gml:posList>
                        </gml:LinearRing>
                    </gml:exterior>
                </gml:Polygon>
            </fes:Intersects>
        </fes:Filter>
    </wfs:Query>
</wfs:GetFeature>
```

<details>
  <summary>Response</summary>

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.7",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [34.86972277637517, 32.019564407769835],
            [34.762249171646715, 32.019564407769835],
            [34.762249171646715, 31.955123269803096],
            [34.86972277637517, 31.955123269803096],
            [34.86972277637517, 32.019564407769835]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 4,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "MAS_5_ORT_240115-11.1",
        "name": "O_center_w84geo_Apr17-Jun22_gpkg_0.07",
        "updatedInVersion": "4",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2021-06-11T02:00:00Z",
        "imagingTimeEndUTC": "2021-06-11T02:00:00Z",
        "resolutionDegree": 0.072,
        "resolutionMeter": 0.6,
        "sourceResolutionMeter": 0.07,
        "horizontalAccuracyCE90": 4,
        "sensors": "OTHER",
        "countries": "ישראל",
        "cities": "",
        "description": "תשתית אורתופוטו במרכז הארץ עדכני ליוני 2021"
      },
      "bbox": [
        34.762249171646715, 31.955123269803096, 34.86972277637517,
        32.019564407769835
      ]
    },
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.9",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [34.86972277637517, 32.019564407769835],
            [34.762249171646715, 32.019564407769835],
            [34.762249171646715, 31.955123269803096],
            [34.86972277637517, 31.955123269803096],
            [34.86972277637517, 32.019564407769835]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 5,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "MAS_5_ORT_240115-11.2",
        "name": "O_center_w84geo_Apr17-Jun22_gpkg_0.08",
        "updatedInVersion": "5",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2021-05-12T04:00:00Z",
        "imagingTimeEndUTC": "2021-05-12T04:00:00Z",
        "resolutionDegree": 0.072,
        "resolutionMeter": 0.6,
        "sourceResolutionMeter": 0.07,
        "horizontalAccuracyCE90": 4,
        "sensors": "OTHER",
        "countries": "ישראל",
        "cities": "",
        "description": "תשתית אורתופוטו במרכז המדינה עדכני למאי 2021"
      },
      "bbox": [
        34.762249171646715, 31.955123269803096, 34.86972277637517,
        32.019564407769835
      ]
    }
  ],
  "totalFeatures": 3,
  "numberMatched": 3,
  "numberReturned": 2,
  "timeStamp": "2024-07-11T08:19:13.094Z",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:EPSG::4326"
    }
  },
  "bbox": [35.0607, 31.9323, 35.3664, 32.3249]
}
```

</details>

### GetFeature POST request with multi-parameters combination

4. if we'd like to filter parts by a set of multiple parameters we'll achieve that by a `GetFeature` **POST** request.
   Say we would like to retrieve only the polygon parts who's `resolutionDegree` is greater than **0.060** and their `sensors` type is **other**.

We'll invoke a request with the following body:

```xml title="Query with 2 filters"
<wfs:GetFeature service="WFS" version="2.0.0" xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:fes="http://www.opengis.net/fes/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd" count="4" outputFormat="application/json">
    <wfs:Query typeNames="polygon_parts:orthophoto_mosaic_base_orthophoto_best_polygon_parts">
        <fes:Filter>
            <And>
            <fes:PropertyIsEqualTo>
               <fes:ValueReference>sensors</fes:ValueReference>
               <fes:Literal>OTHER</fes:Literal>
            </fes:PropertyIsEqualTo>
                        <fes:PropertyIsGreaterThan>
               <fes:ValueReference>resolutionMeter</fes:ValueReference>
               <fes:Literal>0.06</fes:Literal>
            </fes:PropertyIsGreaterThan>
            </And>
        </fes:Filter>
    </wfs:Query>
</wfs:GetFeature>
```

<details>
  <summary>Response</summary>

```json title="Reponse in GeoJSON"
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.7",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [34.86972277637517, 32.019564407769835],
            [34.762249171646715, 32.019564407769835],
            [34.762249171646715, 31.955123269803096],
            [34.86972277637517, 31.955123269803096],
            [34.86972277637517, 32.019564407769835]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 4,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "MAS_5_ORT_240115-11.1",
        "name": "O_center_w84geo_Apr17-Jun22_gpkg_0.07",
        "updatedInVersion": "4",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2021-06-11T02:00:00Z",
        "imagingTimeEndUTC": "2021-06-11T02:00:00Z",
        "resolutionDegree": 0.072,
        "resolutionMeter": 0.6,
        "sourceResolutionMeter": 0.07,
        "horizontalAccuracyCE90": 4,
        "sensors": "OTHER",
        "countries": "ישראל",
        "cities": "",
        "description": "תשתית אורתופוטו  במרכז  הארץ עדכני ליוני 2021"
      },
      "bbox": [
        34.762249171646715, 31.955123269803096, 34.86972277637517,
        32.019564407769835
      ]
    },
    {
      "type": "Feature",
      "id": "orthophoto_mosaic_base_orthophoto_best_polygon_parts.9",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [34.86972277637517, 32.019564407769835],
            [34.762249171646715, 32.019564407769835],
            [34.762249171646715, 31.955123269803096],
            [34.86972277637517, 31.955123269803096],
            [34.86972277637517, 32.019564407769835]
          ]
        ]
      },
      "geometry_name": "geometry",
      "properties": {
        "partId": 5,
        "recordId": "a1b6dd1c-c77c-42e6-a00a-306b67bcdebf",
        "productId": "ORTHOPHOTO_BEST",
        "producType": "OrthophotoBest",
        "id": "MAS_5_ORT_240115-11.2",
        "name": "O_center_w84geo_Apr17-Jun22_gpkg_0.08",
        "updatedInVersion": "5",
        "ingestionDateUTC": "2024-07-11T06:27:49.757Z",
        "imagingTimeBeginUTC": "2021-05-12T04:00:00Z",
        "imagingTimeEndUTC": "2021-05-12T04:00:00Z",
        "resolutionDegree": 0.072,
        "resolutionMeter": 0.6,
        "sourceResolutionMeter": 0.07,
        "horizontalAccuracyCE90": 4,
        "sensors": "OTHER",
        "countries": "ישראל",
        "cities": "",
        "description": "תשתית אורתופוטו במרכז המדינה עדכני למאי 2021"
      },
      "bbox": [
        34.762249171646715, 31.955123269803096, 34.86972277637517,
        32.019564407769835
      ]
    }
  ],
  "totalFeatures": 2,
  "numberMatched": 2,
  "numberReturned": 2,
  "timeStamp": "2024-07-11T08:17:33.255Z",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:EPSG::4326"
    }
  },
  "bbox": [
    34.762249171646715, 31.955123269803096, 34.86972277637517,
    32.019564407769835
  ]
}
```

</details>
