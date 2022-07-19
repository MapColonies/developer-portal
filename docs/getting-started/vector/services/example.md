WFS protocol partitions the queriable features into different feature types, each feature type consists of a schema describing the feature. the feature type is queriable by its schema, each feature type has a default coordinate reference system and a *** bounding box those are also possible parameters for quering.

To list all the available feature types use the GetCapabilities operation and look for the FeatureTypeList section.

```xml
GetCapabilities response
```

We got a FeatureTypeList consisting of the different FeatureTypes under the WFS service. one of them is the `vector:buildings` FeatureType where vector is the namespace and the buildings is the unique FeatureType name under the vector namespace. it is possible to query the FeatureType by its full name `vector:buildings` or short unique name `buildings`.
The default coordinate reference system and the *** bounding box are also presented.

If we'd like to view the schema of the `buildings` FeatureType, we could invoke the `DescribeFeatureType` request with typeName of `buildings`

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=DescribeFeatureType&
    typeName=buildings
```

We get the following XSD describing the `buildings` FeatureType:

```xml
DescribeFeatureType response
```

This is a description of a building feature, it contains these properties, each property has its own type, nillable flag value and min\max occurs - these describing the requireness of the property and possible repeatness.

Now that we hold the structure of the `buildings` FeatureType we're able to query building features by a set of parameters using the `GetFeature` operation, let's see some examples:

for convenience we'll add outputFormat parameter as appliation/json to each of our requests for a json formatted response

1. let's retrieve a specific building by its FeatureId, featureId is unique thus the response will be at most of one single existing building feature. the buildings FeaturType FeatureId is the `entityId` property, notice that this property is non nillable and has a minOccurs of 1.

due to `enitityId` containing '{' and '}' at the beggining and the end of the string we need to encode those to '%7B' and '%7D' respectivly

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetFeature&
    typeNames=buildings&
    featureId={entityId}&
    outputFormat=application/json
```

```json
resonse
```

other than the feature itself we also retrieve additional metadata such as the containing bounding box of each feature and the whole response, total number of features of the selected FeatureType, number matched the given parameters criteria and number returned by the invoked request.

2. to get at most the top 3 building features sorted by some property such as `relative_feature_height` we can invoke the following request,
the default sort is in ascending order, to specify order append +A or +D to the sortBy parameter

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

```json
response
```

3. The following GET request will look for all the building features contained or partially contained by the specified bounding box in the specified coordinate reference system (EPSG:4326) the coordinate system is optional part of the bbox parameter, if not specified the default CRS value of the FeatureType will be used (described in the GetCapabilities operation)
The retrieved features will be encoded in the specified srsName coordinate system, in our case also EPSG:4326.

for simplicity we'll limit the result to only 2 features with the count parameter

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

```json
response
```

for more complex criterias such as a set of multiple parameters or geographical intersections we should invoke a POST GetFetures request consisting the filter as a XML body.

4. let's look for all the building features that itersect in a polygon, one of the properties of a building feature is it's geom describing the building geography, we'll look by it by setting it as the request ValueReference. we can specify the srsName which is the coordinate reference system of the returned features in our case EPSG:4326.
the polygon is a list of latitude-longtitude pair coordinates.

we'll invoke a POST GetFeature request with the following body

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

```json
response
```

5. if we'd like to filter buildings by a set of multiple parameters we'll achive that by a GetFeature POST request
say we would like to retrieve only the buildings who's relative_feature_height is greater than 10 and their is_sensitive flag is falsy.

we'll invoke a request with the following body

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
