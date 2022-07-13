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
| exceptions | No | Format for reporting exceptions, choose one of (text/xml, application/json, text/javascript) | text/xml |
| outputFormat | No | The output format (application/json can be choose)  | application/xml |

The following GET request will return a list of all feature types, sorted by namespace

```
<QUERY-VECTOR-SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=DescribeFeatureType
```

The following GET request will list information about a specific feature type named `namespace:featuretype`, the response will be formatted in application/json format

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
| exceptions | No | Format for reporting exceptions, choose one of (text/xml, application/json, text/javascript) | text/xml |
| outputFormat | No | Defines the scheme description language used to describe feature types (one of gml2, gml3, shapefile, application/json, text/javascript, csv)  | gml2 for WFS 1.0.0 and gml3 for WFS 1.1.0 and 2.0.0 |
| featureId | No | The Id of a specific feature | - |
| count | No | The maximum number of features to be returned. Use maxFeatures parameter for WFS versions earlier than 2.0.0 | - |
| sortBy | No | An attribute to sort the features by (append a +A or +D to the request for ascending or descending order. Default sort is in ascending order.) | - |
| propertyName | No | Select specific attributes to be retrieved from the feature. A single attribute, or multiple attributes separated by commas can be selected.  If some properties in the feature are not-nillable or if they have minOccurs greater than zero they will be included in the result even if not requested | - |
| bbox | No | Search for features that are contained (or partially contained) inside a coordinates box. The format of the BBOX parameter is bbox=a1,b1,a2,b2,[crs] where a1, b1, a2, b2 represent the coordinate values. The optional crs parameter is used to name the CRS for the bbox coordinates. bottom corner coordinate (left or right) to be provided first | - |
| srsName | No | The coordinate reference system for the returned features to be encoded in | - |

The following GET request will get at most the top N features of feature type named `namespace:featuretype` sorted by attributeA, the response will be formatted in application/json

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

The following GET request will search for all the features contained or partially contained by the specified bounding box in the specified coordinate reference system (EPSG:4326).
The retrieved features will be encoded in EPSG:4326 as well as requested by the srsName parameter value.

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
