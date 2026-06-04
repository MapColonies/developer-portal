---
id: dem-download
slug: dem-download
title: Download
tags:
 - guide
 - DEM
 - DTM
 - DSM
 - download
---

## Step by step guide
The following guide will help you understand ***Step-by-step*** how to work with the Map Colonies DEM download service, from the [Catalog](/docs/MapColonies/DEM/Services/catalog/dem-catalog) to the download server.

:::note
Please note the [obligations](/docs/MapColonies/obligations) you need to follow while using our services.
:::

:::warning
**Any** request to our services should include a `token` as a form of [authentication](/docs/MapColonies/authentication).
:::

## Query the DEM catalog (Step 1)

Query the **DEM catalog** service to find item(s) according to a desired filter [examples are here](/docs/ogc/protocols/ogc-csw/ogc-csw-examples).

Filter should be based on fields in the [DEM profile](/docs/MapColonies/DEM/Services/catalog/dem-catalog-profile-v2).

Request example:

```bash
curl --location --request POST '{DEM_CATALOG_SERVICE_URL}/csw?token=<token>' \
--header 'Content-Type: application/xml' \
--data-raw '<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords outputFormat="application/xml" outputSchema="http://schema.mapcolonies.com/dem" resultType="results" service="CSW" version="2.0.2" startPosition="1" maxRecords="1" xmlns:mc="http://schema.mapcolonies.com/dem" xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc">
    <csw:Query typeNames="mc:MCDEMRecord">
        <csw:ElementSetName>full</csw:ElementSetName>
        <csw:Constraint version="1.1.0">
            <Filter xmlns="http://www.opengis.net/ogc">
                <And>
                    <PropertyIsEqualTo>
                        <PropertyName>mc:productId</PropertyName>
                        <Literal>mimad</Literal>
                    </PropertyIsEqualTo>
                    <PropertyIsEqualTo>
                        <PropertyName>mc:productType</PropertyName>
                        <Literal>DSM</Literal>
                    </PropertyIsEqualTo>
                </And>
            </Filter>
        </csw:Constraint >
    </csw:Query>
</csw:GetRecords>'
```

Response:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mc="http://schema.mapcolonies.com/dem" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">
    <csw:SearchStatus timestamp="2026-02-15T13:53:32Z"/>
    <csw:SearchResults numberOfRecordsMatched="1" numberOfRecordsReturned="1" nextRecord="0" recordSchema="http://schema.mapcolonies.com/dem" elementSet="full">
        <mc:MCDEMRecord>
            <mc:acquisitionTimeBeginUTC>2019-12-31T11:00:00Z</mc:acquisitionTimeBeginUTC>
            <mc:acquisitionTimeEndUTC>2019-12-31T11:00:00Z</mc:acquisitionTimeEndUTC>
            <mc:areaOrPoint>Area</mc:areaOrPoint>
            <mc:classification>0</mc:classification>
            <mc:dataType>FLOAT32</mc:dataType>
            <mc:description></mc:description>
            <mc:footprint>{"type":"Polygon","coordinates":[[[0,0],[10,0],[10,10],[0,0]]]}</mc:footprint>
            <mc:geoidModel>egm96</mc:geoidModel>
            <mc:id>e2d812ba-40b7-4dfe-b3e7-869356467d3a</mc:id>
            <mc:ingestionDateUTC>2025-12-31T10:17:16Z</mc:ingestionDateUTC>
            <mc:insertDateUTC>2020-12-31T11:00:00Z</mc:insertDateUTC>
            <mc:links scheme="WCS" name="mimad-DSM" description="">{WCS_SERVICE_URL}/wcs?request=GetCapabilities</mc:links>
            <mc:links scheme="WCS_BASE" name="mimad-DSM" description="">{WCS_SERVICE_URL}/wcs</mc:links>
            <mc:links scheme="WFS_BASE" name="mimad-DSM" description="">{WFS_SERVICE_URL}/wfs?request=GetCapabilities</mc:links>
            <mc:links scheme="Download" name="mimad-DSM" description="">{DOWNLOAD_SERVICE_URL}/path/to/file.ext</mc:links>
            <mc:maxAbsoluteAccuracyLEP90>2</mc:maxAbsoluteAccuracyLEP90>
            <mc:maxHorizontalAccuracyCEP90>6</mc:maxHorizontalAccuracyCEP90>
            <mc:maxRelativeAccuracyLEP90>4</mc:maxRelativeAccuracyLEP90>
            <mc:maxResolutionDegree>0.0004</mc:maxResolutionDegree>
            <mc:maxResolutionMeter>40</mc:maxResolutionMeter>
            <mc:minAbsoluteAccuracyLEP90>1</mc:minAbsoluteAccuracyLEP90>
            <mc:minHorizontalAccuracyCEP90>5</mc:minHorizontalAccuracyCEP90>
            <mc:minRelativeAccuracyLEP90>3</mc:minRelativeAccuracyLEP90>
            <mc:minResolutionDegree>0.0004</mc:minResolutionDegree>
            <mc:minResolutionMeter>40</mc:minResolutionMeter>
            <mc:noDataValue>-32768</mc:noDataValue>
            <mc:producerName>PRODUCER</mc:producerName>
            <mc:productId>mimad</mc:productId>
            <mc:productName>mimad</mc:productName>
            <mc:productType>DSM</mc:productType>
            <mc:productVersion>1</mc:productVersion>
            <mc:region>region</mc:region>
            <mc:sensors>sensors</mc:sensors>
            <mc:srsId>srs_id</mc:srsId>
            <mc:srsName>WGS84GEO</mc:srsName>
            <mc:type>RECORD_DEM</mc:type>
            <mc:updateDateUTC>2020-12-31T11:00:00Z</mc:updateDateUTC>
            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">
                <ows:LowerCorner>0.0 0.0</ows:LowerCorner>
                <ows:UpperCorner>10.0 10.0</ows:UpperCorner>
            </ows:BoundingBox>
        </mc:MCDEMRecord>
    </csw:SearchResults>
</csw:GetRecordsResponse>
```

We want to extract the value of the `links` tag with the `scheme=Download` attribute for the next step.

## Download the source material (Step 2)

Now we can make a request for the material:
```bash
curl --location '{DOWNLOAD_SERVICE_URL}/path/to/file.ext?token=<token>'
```

:::note
Materials may be very large so we suggest you implement a fail-safe strategy and prepare for long download times.
:::
