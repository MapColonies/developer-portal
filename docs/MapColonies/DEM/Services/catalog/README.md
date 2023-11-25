---
id: dem-catalog-service
slug: dem-catalog
title: Catalog 🗃️
tags:
  - DEM
  - DTM
  - DSM
  - catalog
  - csw
  - API
---

# Catalog Service 🗃️
 [Catalogue Service for the Web (CSW)](/docs/ogc/protocols/ogc-csw/README.md) is a standard for exposing a catalogue of geospatial records in XML on the Internet (over HTTP). The catalogue is made up of records that describe geospatial data, geospatial services (e.g. [WMTS](/docs/ogc/protocols/ogc-wmts)), and related resources.

| **Request** | **HTTP method binding(s)** |
| ----------- | ----------- |
| GetCapabilities | GET (KVP) / POST (XML) / SOAP |
| DescribeRecord | GET (KVP) / POST (XML) / SOAP |
| GetRecords | GET (KVP) / POST (XML) / SOAP |
| GetRecordById | GET (KVP) / POST (XML) / SOAP |
| GetRepositoryItem | GET (KVP) |
| GetDomain | GET (KVP) / POST (XML) / SOAP |
