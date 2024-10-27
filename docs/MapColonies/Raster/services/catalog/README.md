---
id: raster-catalog-service
slug: raster-catalog-service
title: Catalog 🗃️
description: Discover all available raster layers
tags:
  - catalog
  - raster
  - API
  - csw
  - ogc
---

# Catalog Service 🗃️
 [Catalog Service for the Web (CSW)](/docs/ogc/protocols/ogc-csw/ogc-csw) is a standard for exposing a catalog of geospatial records in XML on the Internet (over HTTP). The catalog is made up of records that describe geospatial data, geospatial services (e.g. [WMTS](/docs/ogc/protocols/ogc-wmts)), and related resources.

:::warning
**Authentication must be integrated in order to communicate with map And catalog services.**<br/>
**See the principles [here](/docs/MapColonies/authentication)**
:::

| **Request** | **HTTP method binding(s)** |
| ----------- | ----------- |
| GetCapabilities | GET (KVP) / POST (XML) / SOAP |
| DescribeRecord | GET (KVP) / POST (XML) / SOAP |
| GetRecords | GET (KVP) / POST (XML) / SOAP |
| GetRecordById | GET (KVP) / POST (XML) / SOAP |
| GetRepositoryItem | GET (KVP) |
| GetDomain | GET (KVP) / POST (XML) / SOAP |


