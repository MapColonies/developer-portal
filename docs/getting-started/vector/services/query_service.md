# Query Service 🔎

The vector query service uses the [WFS](/ogc-protocols/ogc-wfs.md) protocol which is a READ-ONLY Web Feature Service.
it provides facilities for searching and retrieving feature data with the `GetCapabilities`, `DescribeFeatureType` and `GetFeature` operations all other operations are invalid.
For the full capabilities provided by the service see [GetCapabilities](#getcapabilities)

WFS partitions the queryable data into feature types each feature type has its own attributes describing the structure of the data itself.
For the description of a feature type see [DescribeFeatureType](#describefeaturetype)

Finally, Features can be retrieved with the [GetFeature](#getfeature) operation. the request returns a collection of geographic feature instances filtered according to a criteria set by the requesting client.

The following parameters are common query parameters for all of the provided operations,

| Parameter | Is Required | Description |
|-|-|-|
| service | Yes | Service name, value is wfs on this service |
| version | Yes | Service version, value is one of 1.0.0, 1.1.0, 2.0.0 |
| request | Yes | Operation name |

## GetCapabilities
The GetCapabilities operation is a GET request to a WFS server for a list of the operations, services or capabilities supported by that service

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetCapabilities
```

## DescribeFeatureType
The DescribeFeatureType request provides information about all or an individual feature type.
Specifically, the operation will request a list of features and attributes for the given feature type, or list the feature types available on the service.

| Parameter | Is Required | Description | Default Value |
|-|-|-|-|
| typeNames | No | Name of the feature types to describe (use typeName for WFS 1.1.0 and earlier) | an empty value which will list all the feature types provided by the service |
| exceptions | No | Format for reporting exceptions, choose one of (`text/xml`, `application/json`, `text/javascript`) | text/xml |
| outputFormat | No | The output format (`application/json` can be choose)  | `application/xml` |

The following GET request will return a list of all feature types, sorted by namespace

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=DescribeFeatureType
```

The following GET request will list information about a specific feature type named `namespace:featuretype`, the response will be formatted in `application/json` format

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=DescribeFeatureType&
    typeNames=namespace:featuretype&
    outputFormat=application/json
```

## GetFeature
The GetFeature request queries the server with a set of parameters describing the geographic features to be returned, the request can also be sorted and/or limited.

| Parameter | Is Required | Description | Default Value |
|-|-|-|-|
| typeNames | Yes | Name of the feature type to query from (use typeName for WFS 1.1.0 and earlier) | - |
| exceptions | No | Format for reporting exceptions, choose one of (`text/xml`, `application/json`, `text/javascript`) | `text/xml` |
| outputFormat | No | Defines the scheme description language used to describe feature types (one of `gml2`, `gml3`, `shapefile`, `application/json`, `text/javascript`, `csv`)  | **gml2 for WFS v1.0.0** and **gml3 for WFS v1.1.0 and v2.0.0** |
| featureId | No | The Id of a specific feature | - |
| count | No | The maximum number of features to be returned. Use maxFeatures parameter for WFS versions earlier than 2.0.0 | - |
| sortBy | No | An attribute to sort the features by (append a +A or +D to the request for ascending or descending order. Default sort is in ascending order.) | - |
| propertyName | No | Select specific attributes to be retrieved from the feature. A single attribute, or multiple attributes separated by commas can be selected.  If some properties in the feature are not-nillable or if they have `minOccurs` greater than zero they will be included in the result even if not requested | - |
| bbox | No | Search for features that are contained (or partially contained) inside a coordinates box. The format of the BBOX parameter is bbox=a1,b1,a2,b2,[crs] where a1, b1, a2, b2 represent the coordinate values. The optional crs parameter is used to name the CRS for the bbox coordinates. bottom corner coordinate (left or right) to be provided first | - |
| srsName | No | The coordinate reference system for the returned features to be encoded in | - |

The following GET request will get at most the top N features of feature type named `namespace:featuretype` sorted by attributeA, the response will be formatted in `application/json`

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetFeature&
    typeNames=namespace:featuretype&
    outputFormat=application/json&
    count=N&
    sortBy=attributeA
```

The following GET request will search for all the features contained or partially contained by the specified bounding box in the specified coordinate reference system (`EPSG:4326`).
The retrieved features will be encoded in `EPSG:4326` as well as requested by the srsName parameter value.

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetFeature&
    typeNames=namespace:featuretype&
    bbox=51.607317,5.106151,51.629884,5.228022,urn:ogc:def:crs:EPSG::4326&
    srsName=urn:ogc:def:crs:EPSG::4326
```

The following GET request will retrieve a specific feature by provided featureId FID

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetFeature&
    typeNames=namespace:featuretype&
    featureId=FID
```

WFS protocol partitions the queryable features into different feature types, each feature type consists of a schema describing the feature. the feature type is queryable by its schema, each feature type has a default coordinate reference system and a *** bounding box those are also possible parameters for querying.

To list all the available feature types use the `GetCapabilities` operation and look for the `FeatureTypeList` section.

We got a `FeatureTypeList` consisting of the different `FeatureTypes` under the WFS service. one of them is the `vector:buildings` `FeatureType` where vector is the namespace and the buildings is the unique `FeatureType` name under the vector namespace. it is possible to query the FeatureType by its full name `vector:buildings` or short unique name `buildings`.
The default coordinate reference system and the *** bounding box are also presented.

If you would like to view the schema of the `buildings` `FeatureType`, we could invoke the `DescribeFeatureType` request with `typeName` of `buildings`

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=DescribeFeatureType&
    typeName=buildings
```

The response is the XSD describing the `buildings` `FeatureType`.

This is a description of a building feature, it contains these properties, each property has its own type, nillable flag value and min\max occurs - these describing the requireness of the property and possible repeatness.

Now that we hold the structure of the `buildings` FeatureType we're able to query building features by a set of parameters using the `GetFeature` operation, let's see some examples:

For convenience we'll add outputFormat parameter as `application/json` to each of our requests for a json formatted response

1. let's retrieve a specific building by its `featureId`, `featureId` is unique thus the response will be at most of one single existing building feature. the buildings `FeatureType` FeatureId is the `entityId` property, notice that this property is non nillable and has a `minOccurs` of 1.

due to `enitityId` containing '{' and '}' at the beginning and the end of the string we need to encode those to '%7B' and '%7D' respectively

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetFeature&
    typeNames=buildings&
    featureId={entityId}&
    outputFormat=application/json
```

Other than the feature itself we also retrieve additional metadata such as the containing bounding box of each feature and the whole response, total number of features of the selected `FeatureType`, number matched the given parameters criteria and number returned by the invoked request.

2. To get at most the top 3 building features sorted by some property such as `relative_feature_height` we can invoke the following request,
the default sort is in **ascending** order, to specify order append +A or +D to the `sortBy` parameter

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetFeature&
    typeNames=buildings&
    count=3&
    sortBy=relative_feature_height+D&
    outputFormat=application/json
```

3. The following GET request will look for all the building features contained or partially contained by the specified bounding box in the specified coordinate reference system (`EPSG:4326`) the coordinate system is optional part of the bbox parameter, if not specified the default CRS value of the FeatureType will be used (described in the GetCapabilities operation)
The retrieved features will be encoded in the specified `srsName` coordinate system, in our case also `EPSG:4326`.

For simplicity we'll limit the result to only __2__ features with the `count` parameter:

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetFeature&
    typeNames=buildings&
    bbox=51.607317,5.106151,51.629884,5.228022,urn:ogc:def:crs:EPSG::4326&
    srsName=urn:ogc:def:crs:EPSG::4326&
    count=2&
    outputFormat=application/json
```

For more complex criterias such as a set of multiple parameters or geographical intersections we should invoke a POST GetFetures request consisting the filter as a XML body.

4. let's look for all the building features that intersect in a polygon, one of the properties of a building feature is it's geom describing the building geography, we'll look by it by setting it as the request `ValueReference`. We can specify the `srsName` which is the coordinate reference system of the returned features in our case `EPSG:4326`.
the polygon is a list of latitude-longitude pair coordinates.

We'll invoke a POST GetFeature request with the following body:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<wfs:GetFeature xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:fes="http://www.opengis.net/fes/2.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:sf="http://www.openplans.org/spearfish" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" service="WFS" version="2.0.0" xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd http://www.opengis.net/gml/3.2 http://schemas.opengis.net/gml/3.2.1/gml.xsd" outputFormat="application/json">
    <wfs:Query typeNames="buildings">
        <fes:Filter>
            <fes:Intersects>
                <fes:ValueReference>geom</fes:ValueReference>
                <gml:Polygon gml:id="polygon.1" srsName="http://www.opengis.net/gml/srs/epsg.xml#4326">
                    <gml:exterior>
                        <gml:LinearRing>
                            <gml:posList>
                                1.462 42.590 1.459 42.547 1.535 42.547 1.537 42.592 1.462 42.590
                            </gml:posList>
                        </gml:LinearRing>
                    </gml:exterior>
                </gml:Polygon>
            </fes:Intersects>
        </fes:Filter>
    </wfs:Query>
</wfs:GetFeature>
```

5. if we'd like to filter buildings by a set of multiple parameters we'll achieve that by a `GetFeature` **POST** request.
Say we would like to retrieve only the buildings who's `relative_feature_height` is greater than __10__ and their `is_sensitive` flag is **falsy**.

We'll invoke a request with the following body:

// TODO: work with wfs 2.0.0

```xml
<?xml version="1.0" encoding="utf-8"?>
<wfs:GetFeature xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs" xmlns:wfs="http://www.opengis.net/wfs" xmlns:fes="http://www.opengis.net/fes" xmlns:ogc="http://www.opengis.net/ogc" service="WFS" version="1.0.0" outputFormat="application/json">
    <fes:Query typeName="buildings">
        <ogc:Filter>
            <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>is_sensitive</ogc:PropertyName>
                <ogc:Literal>false</ogc:Literal>
            </ogc:PropertyIsEqualTo>
             <ogc:PropertyIsGreaterThan>
                <ogc:PropertyName>relative_feature_height</ogc:PropertyName>
                <ogc:Literal>10</ogc:Literal>
            </ogc:PropertyIsGreaterThan>
        </ogc:Filter>
    </fes:Query>
</wfs:GetFeature>
```
