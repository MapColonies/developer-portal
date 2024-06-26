---
id: ogc-wfs
description: Catalog Web Service
title: WFS - Web Feature Service
slug: ogc-wfs
tags:
  - ogc
  - vector
  - protocol
  - api
---

# WFS - Web Feature Service
[Official OGC documentation(Online)](http://opengeospatial.github.io/e-learning/wmts/text/operations.html) 🌐

[Official OGC documentation(Offline)](../../../static/pdfs/manuals/web_feature_service_ogc.pdf "download") 📄


The OGC Web Feature Service (WFS) Interface Standard defines a set of interfaces for accessing geographic information at the feature and feature property level over the Internet. A feature is an abstraction of real world phenomena, that is it is a representation of anything that can be found in the world. The attributes or characteristics of a geographic feature are referred to as feature properties. WFS offer the means to retrieve or query geographic features in a manner independent of the underlying data stores they publish. Where a WFS is authorized to do so, the service can also update or delete geographic features. An instance of a WFS is also able to store queries in order to enable client applications to retrieve or execute the queries at a later point in time.

The following table depicts all WFS protocol operations and their supported WFS version:

| Operation | Description| Supported Version |
|-|-|-|
| GetCapabilities | Generates a metadata document describing a WFS service provided by server as well as valid WFS operations and parameters | All |
| DescribeFeatureType | Returns a description of feature types supported by a WFS service | All |
| GetFeature | Returns a selection of features from a data source including geometry and attribute values | All |
| LockFeature | Prevents a feature from being edited through a persistent feature lock | All |
| Transaction | Edits existing feature types by creating, updating, and deleting | All |
| GetPropertyValue | Retrieves the value of a feature property or part of the value of a complex feature property from the data store for a set of features identified using a query expression | 2.0.0 |
| GetFeatureWithLock | Returns a selection of features and also applies a lock on those features | 2.0.0 |
| CreateStoredQuery | Create a stored query on the WFS server | 2.0.0 |
| DropStoredQuery | Deletes a stored query from the WFS server | 2.0.0 |
| ListStoredQueries | Returns a list of the stored queries on a WFS server | 2.0.0 |
| DescribeStoredQueries | Returns a metadata document describing the stored queries on a WFS server | 2.0.0 |
| GetGMLObject | Retrieves features and elements by ID from a WFS | 1.1.0 |

The following parameters are common query parameters for all of the provided operations:

| Parameter | Is Required | Description |
|-|-|-|
| service | Yes | Service name, value is wfs on this service |
| version | Yes | Service version, value is one of 1.0.0, 1.1.0, 2.0.0 |
| request | Yes | Operation name |

## GetCapabilities
The GetCapabilities operation is a GET request to a WFS server for a list of the operations, services or capabilities supported by that service

```
<WFS_SERVICE_URL>/wfs?
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
<WFS_SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=DescribeFeatureType
```

The following GET request will list information about a specific feature type named `namespace:featuretype`, the response will be formatted in `application/json` format

```
<WFS_SERVICE_URL>/wfs?
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
| startIndex | No | The index from which the server shall begin presenting results in the response | - |
| sortBy | No | An attribute to sort the features by (append a +A or +D to the request for ascending or descending order. Default sort is in ascending order.) | - |
| propertyName | No | Select specific attributes to be retrieved from the feature. A single attribute, or multiple attributes separated by commas can be selected.  If some properties in the feature are not-nillable or if they have `minOccurs` greater than zero they will be included in the result even if not requested | - |
| bbox | No | Search for features that are contained (or partially contained) inside a coordinates box. The format of the BBOX parameter is bbox=a1,b1,a2,b2,[crs] where a1, b1, a2, b2 represent the coordinate values. The optional crs parameter is used to name the CRS for the bbox coordinates. bottom corner coordinate (left or right) to be provided first | - |
| srsName | No | The coordinate reference system for the returned features to be encoded in | - |
| resultType | No | The possible values for this parameter are "results" and "hits". If the value is set to "results" the server shall generate a complete response document containing resources that satisfy the operation. If the value is set to "hits" the server shall generate an empty response document containing no resource instances and the root element of the response container shall contain the count of the total number of resources that the operation found and the value for the number of resources presented in the response document shall be set to zero. | - |

The following GET request will get at most the top N features of feature type named `namespace:featuretype` sorted by attributeA, the response will be formatted in `application/json`

```
<WFS_SERVICE_URL>/wfs?
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
<WFS_SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetFeature&
    typeNames=namespace:featuretype&
    bbox=51.607317,5.106151,51.629884,5.228022,urn:ogc:def:crs:EPSG::4326&
    srsName=urn:ogc:def:crs:EPSG::4326
```

The following GET request will retrieve a specific feature by provided featureId FID

```
<WFS_SERVICE_URL>/wfs?
    service=wfs&
    version={WFS_SERVICE_VERSION}&
    request=GetFeature&
    typeNames=namespace:featuretype&
    featureId=FID
```
