---
id: 3d-catalog-service
slug: 3d-catalog
title: 3D Catalog 🗃️
tags:
  - 3D
  - catalog
  - smart-reality
  - csw
  - API
  - qmesh
  - quantaized-mesh
---

# Catalog Service 🗃️
 [Catalog Service for the Web (CSW)](/docs/ogc/protocols/ogc-csw/README.md) is a standard for exposing a catalog of geospatial records in XML on the Internet (over HTTP). The catalog is made up of records that describe geospatial data, geospatial services (e.g. [WMTS](/docs/ogc/protocols/ogc-wmts)), and related resources.

| **Request** | **HTTP method binding(s)** |
| ----------- | ----------- |
| GetCapabilities | GET (KVP) / POST (XML) / SOAP |
| DescribeRecord | GET (KVP) / POST (XML) / SOAP |
| GetRecords | GET (KVP) / POST (XML) / SOAP |
| GetRecordById | GET (KVP) / POST (XML) / SOAP |
| GetRepositoryItem | GET (KVP) |
| GetDomain | GET (KVP) / POST (XML) / SOAP |

**_Retrieve the records_**

In order to retrieve the records, You need to send a post request with XML describing the specific records you want.

Of course, you have to add the authentication stage in order to get answer.

For more details, see: [Authentication](/docs/MapColonies/MapColonies-api-auth)

An example of a post request's body:

```xml title="Get all records with classification equal to 7"
<csw:GetRecords
maxRecords="10"
outputFormat="application/xml"
outputSchema="http://schema.mapcolonies.com/3d"
resultType="results"
service="CSW"
version="2.0.2"
startPosition="1"
xmlns:mc="http://schema.mapcolonies.com/3d"
xmlns:csw="http://www.opengis.net/cat/csw/2.0.2"
xmlns:ogc="http://www.opengis.net/ogc">
    <csw:Query typeNames="csw:Record">
        <csw:ElementSetName>full</csw:ElementSetName>
        <csw:Constraint version="1.1.0">
            <ogc:Filter>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>mc:classification</ogc:PropertyName>
                    <ogc:Literal>7</ogc:Literal>
                </ogc:PropertyIsEqualTo>
            </ogc:Filter>
        </csw:Constraint>
    </csw:Query>
</csw:GetRecords>
```

After sending the request, you will get a response with all the records matched to the filter query. For example:

<details>
  <summary>Response example</summary>

```xml title="3D Records Response"
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mc="http://schema.mapcolonies.com/3d" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">
    <csw:SearchStatus timestamp="2022-06-16T07:12:25Z"/>
    <csw:SearchResults numberOfRecordsMatched="3" numberOfRecordsReturned="3" nextRecord="0" recordSchema="http://schema.mapcolonies.com/3d" elementSet="full">
        <mc:MC3DRecord>
            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>
            <mc:classification>5</mc:classification>
            <mc:footprint>{"type":"Polygon","coordinates":[[[31.2603,33.4345],[31.2603,34.4888],[32.3353,34.4888],[32.3353,33.4345],[31.2603,33.4345]]]}</mc:footprint>
            <mc:geographicArea>ישראל</mc:geographicArea>
            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>
            <mc:id>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:id>
            <mc:links scheme="3D_LAYER" name="" description="">http://model-server-3d/path/to/file/tileset.json</mc:links>
            <mc:producerName>TZAHAL</mc:producerName>
            <mc:productBBox>31.2603,33.4345,32.3353,34.4888</mc:productBBox>
            <mc:productId>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:productId>
            <mc:productName>מודל פריז</mc:productName>
            <mc:productType>3DPhotoRealistic</mc:productType>
            <mc:productVersion>1</mc:productVersion>
            <mc:productionMethod>photogrammetric</mc:productionMethod>
            <mc:productionSystem>P-30</mc:productionSystem>
            <mc:productionSystemVersion>1</mc:productionSystemVersion>
            <mc:region>צפון</mc:region>
            <mc:sensors>sensor1</mc:sensors>
            <mc:imagingTimeEndUTC>2022-06-15T10:39:00Z</mc:imagingTimeEndUTC>
            <mc:imagingTimeBeginUTC>2022-06-15T10:39:00Z</mc:imagingTimeBeginUTC>
            <mc:SRS>4567</mc:SRS>
            <mc:SRSName>WGS24GEO</mc:SRSName>
            <mc:type>RECORD_3D</mc:type>
            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">
                <ows:LowerCorner>33.4345 31.2603</ows:LowerCorner>
                <ows:UpperCorner>34.4888 32.3353</ows:UpperCorner>
            </ows:BoundingBox>
        </mc:MC3DRecord>
        <mc:MC3DRecord>
            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>
            <mc:classification>7</mc:classification>
            <mc:footprint>{"type":"Polygon","coordinates":[[[32.2603,34.4345],[32.2603,35.4888],[33.3353,35.4888],[33.3353,34.4345],[32.2603,34.4345]]]}</mc:footprint>
            <mc:geographicArea>ישראל</mc:geographicArea>
            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>
            <mc:id>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:id>
            <mc:links scheme="3D_LAYER" name="" description="">http://model-server-3d/path/to/file/tileset.json</mc:links>
            <mc:producerName>TZAHAL</mc:producerName>
            <mc:productBBox>32.2603,34.4345,33.3353,35.4888</mc:productBBox>
            <mc:productId>c2bb5433ee-6081-4e69-918c-287f48ea244d</mc:productId>
            <mc:productName>מודל סיני</mc:productName>
            <mc:productType>3DPhotoRealistic</mc:productType>
            <mc:productVersion>1</mc:productVersion>
            <mc:productionMethod>photogrammetric</mc:productionMethod>
            <mc:productionSystem>P-80</mc:productionSystem>
            <mc:productionSystemVersion>1</mc:productionSystemVersion>
            <mc:region>דרום מזרח</mc:region>
            <mc:sensors>sensor2</mc:sensors>
            <mc:imagingTimeEndUTC>2022-06-15T10:39:00Z</mc:imagingTimeEndUTC>
            <mc:imagingTimeBeginUTC>2022-06-15T10:39:00Z</mc:imagingTimeBeginUTC>
            <mc:SRS>4567</mc:SRS>
            <mc:SRSName>WGS24GEO</mc:SRSName>
            <mc:type>RECORD_3D</mc:type>
            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">
                <ows:LowerCorner>34.4345 32.2603</ows:LowerCorner>
                <ows:UpperCorner>35.4888 33.3353</ows:UpperCorner>
            </ows:BoundingBox>
        </mc:MC3DRecord>
        <mc:MC3DRecord>
            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>
            <mc:classification>7</mc:classification>
            <mc:creationDateUTC>2022-06-15</mc:creationDateUTC>
            <mc:description>srtm100</mc:description>
            <mc:footprint>{"type":"Polygon","coordinates":[[[11,22],[11,33],[44,33],[44,22],[11,22]]]}</mc:footprint>
            <mc:geographicArea>North</mc:geographicArea>
            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>
            <mc:id>11111111-1111-1111-1111-111111111111</mc:id>
            <mc:links scheme="3DTiles" name="" description="">http://model-server-3d/path/to/file/tileset.json</mc:links>
            <mc:producerName>aa</mc:producerName>
            <mc:productBBox>11,22,44,33</mc:productBBox>
            <mc:productId>11111111-1111-1111-1111-111111111111</mc:productId>
            <mc:productName>aaa</mc:productName>
            <mc:productType>type</mc:productType>
            <mc:productVersion>1</mc:productVersion>
            <mc:productionMethod></mc:productionMethod>
            <mc:productionSystem></mc:productionSystem>
            <mc:productionSystemVersion>1</mc:productionSystemVersion>
            <mc:region>region</mc:region>
            <mc:sensors>aa</mc:sensors>
            <mc:imagingTimeEndUTC>2022-06-15</mc:imagingTimeEndUTC>
            <mc:imagingTimeBeginUTC>2022-06-15</mc:imagingTimeBeginUTC>
            <mc:SRS>23</mc:SRS>
            <mc:SRSName>1234</mc:SRSName>
            <mc:type>revorsd</mc:type>
            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:23" dimensions="2">
                <ows:LowerCorner>22 11</ows:LowerCorner>
                <ows:UpperCorner>33 44</ows:UpperCorner>
            </ows:BoundingBox>
        </mc:MC3DRecord>
    </csw:SearchResults>
</csw:GetRecordsResponse>
```

</details>

You can see in the response how much records returned, from which schema and etc...

In addition, you can also see all the metadata of the matched records.

In each record, you can find an element called `<mc:links>`.

This link is a layer consumption URL.
