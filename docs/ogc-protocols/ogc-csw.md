# Catalog Service for the Web (CSW)
Overview - source
The CSW service exposes the metadata records in XML format using the [OGC CSW protocol](https://docs.pycsw.org/en/latest/introduction.html#csw-support). 

Standard protocol supported [Operations](https://docs.pycsw.org/en/latest/introduction.html#supported-operations)

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

[Examples](/ogc-protocols/ogc-csw-examples.md)