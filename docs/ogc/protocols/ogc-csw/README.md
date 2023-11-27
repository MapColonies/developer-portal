---
id: ogc-csw
description: Catalog Web Service
title: CSW - Catalog Service for the Web
slug: ogc-csw
tags:
  - ogc
  - catalog
  - raster
  - 3d
  - dem
  - protocol
  - api
---

# CSW - Catalog Service for the Web
Overview - source
The CSW service exposes the metadata records in XML format using the [OGC CSW protocol](https://docs.pycsw.org/en/latest/introduction.html#csw-support) 🌐

[CSW Registry Service (Offline)](../../../../static/pdfs/manuals/07-110r4_CSW-ebRIM_Registry_Service_-_Part_1_ebRIM_profile_of_CSW_v1.0.1.pdf "download") 📚

Standard protocol supported [Operations](https://docs.pycsw.org/en/latest/introduction.html#supported-operations) 🌐

[Examples](/docs/ogc/protocols/ogc-csw/ogc-csw-examples)

MapColonies operations:

| **Request** | **Optionality** | **Supported** | **HTTP method binding(s)** |
| ----------- | ----------- | ----------- | ----------- |
| Harvest | optional | no | GET (KVP) / POST (XML) / SOAP |
| UnHarvest | optional | no |  |
| GetCapabilities | mandatory | yes | GET (KVP) / POST (XML) / SOAP |
| DescribeRecord | mandatory | yes | GET (KVP) / POST (XML) / SOAP |
| GetRecords | mandatory | yes | GET (KVP) / POST (XML) / SOAP |
| GetRecordById | mandatory | yes | GET (KVP) / POST (XML) / SOAP |
| GetRepositoryItem | mandatory | yes | GET (KVP) |
| GetDomain | mandatory | yes | GET (KVP) / POST (XML) / SOAP |
| Transaction | mandatory | yes | POST (XML) / SOAP |
