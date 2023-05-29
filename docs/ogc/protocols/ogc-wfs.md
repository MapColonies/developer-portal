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
