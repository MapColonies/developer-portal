---
id: ogc-wcs
title: WCS - Web Coverage Service
description: Coverage Web Service
slug: ogc-wcs
tags:
  - ogc
  - catalog
  - dem
  - protocol
  - api
---

# WCS - Web Coverage Service
[WCS OGC standard](https://www.ogc.org/standards/wcs) 🌐

[WCS OGC standard (Offline)](../../../static/pdfs/manuals/17-089r1_WCS_2.1_Interface_Standard_-_Core.pdf "download") 📚

| Operation | Description |
| ------ | ------- |
| GetCapabilities | Retrieves a list of the server’s data, as well as valid WCS operations and parameters |
| DescribeCoverage | Retrieves an XML document that fully describes the request coverages.|
| GetCoverage | Returns a coverage in a well known format. Like a WMS GetMap request, but with several extensions to support the retrieval of coverages. |

## GetCapabilities
A WCS server responding to a **GetCapabilities** request returns metadata about the service, including supported operations and parameters, and a list of the available layers.

```
<DEM-DEM-SERVING-SERVICE_URL>/geoserver/ows?
service=WCS&
version=2.0.1&
request=GetCapabilities
```

<details>
  <summary>Response example</summary>

  ``` xml title="Response Example"
    <?xml version="1.0" encoding="UTF-8"?>
    <wcs:Capabilities xmlns:wcs="http://www.opengis.net/wcs/2.0" xmlns:crs="http://www.opengis.net/wcs/crs/1.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:gmlcov="http://www.opengis.net/gmlcov/1.0" xmlns:inspire_common="https://inspire.ec.europa.eu/schemas/common/1.0" xmlns:inspire_dls="https://inspire.ec.europa.eu/schemas/inspire_dls/1.0" xmlns:int="http://www.opengis.net/WCS_service-extension_interpolation/1.0" xmlns:ows="http://www.opengis.net/ows/2.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2.0.1" updateSequence="142" xsi:schemaLocation=" http://www.opengis.net/wcs/2.0 http://schemas.opengis.net/wcs/2.0/wcsGetCapabilities.xsd https://inspire.ec.europa.eu/schemas/inspire_dls/1.0 https://inspire.ec.europa.eu/schemas/inspire_dls/1.0/inspire_dls.xsd">
      <ows:ServiceIdentification>
          <ows:Title />
          <ows:Abstract />
          <ows:ServiceType>urn:ogc:service:wcs</ows:ServiceType>
          <ows:ServiceTypeVersion>2.0.1</ows:ServiceTypeVersion>
          <ows:ServiceTypeVersion>1.1.1</ows:ServiceTypeVersion>
          <ows:ServiceTypeVersion>1.1.0</ows:ServiceTypeVersion>
          <ows:Profile>http://www.opengis.net/spec/WCS/2.0/conf/core</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_protocol-binding_get-kvp/1.0.1</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_protocol-binding_post-xml/1.0</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_crs/1.0/conf/crs-gridded-coverage</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_geotiff-coverages/1.0/conf/geotiff-coverage</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/GMLCOV/1.0/conf/gml-coverage</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/GMLCOV/1.0/conf/special-format</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/GMLCOV/1.0/conf/multipart</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_scaling/1.0/conf/scaling</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_crs/1.0/conf/crs</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_interpolation/1.0/conf/interpolation</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_interpolation/1.0/conf/interpolation-per-axis</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_interpolation/1.0/conf/nearest-neighbor</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_interpolation/1.0/conf/linear</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_interpolation/1.0/conf/cubic</ows:Profile>
          <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_range-subsetting/1.0/conf/record-subsetting</ows:Profile>
          <ows:Fees>NONE</ows:Fees>
          <ows:AccessConstraints>NONE</ows:AccessConstraints>
      </ows:ServiceIdentification>
      <ows:ServiceProvider>
          <ows:ProviderName />
          <ows:ProviderSite xlink:href="" />
          <ows:ServiceContact>
            <ows:ContactInfo>
                <ows:Phone />
                <ows:Address />
            </ows:ContactInfo>
          </ows:ServiceContact>
      </ows:ServiceProvider>
      <ows:OperationsMetadata>
          <ows:Operation name="GetCapabilities">
            <ows:DCP>
                <ows:HTTP>
                  <ows:Get xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />
                </ows:HTTP>
            </ows:DCP>
            <ows:DCP>
                <ows:HTTP>
                  <ows:Post xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />
                </ows:HTTP>
            </ows:DCP>
          </ows:Operation>
          <ows:Operation name="DescribeCoverage">
            <ows:DCP>
                <ows:HTTP>
                  <ows:Get xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />
                </ows:HTTP>
            </ows:DCP>
            <ows:DCP>
                <ows:HTTP>
                  <ows:Post xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />
                </ows:HTTP>
            </ows:DCP>
          </ows:Operation>
          <ows:Operation name="GetCoverage">
            <ows:DCP>
                <ows:HTTP>
                  <ows:Get xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />
                </ows:HTTP>
            </ows:DCP>
            <ows:DCP>
                <ows:HTTP>
                  <ows:Post xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />
                </ows:HTTP>
            </ows:DCP>
          </ows:Operation>
          <ows:Constraint name="PostEncoding">
            <ows:AllowedValues>
                <ows:Value>XML</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
      </ows:OperationsMetadata>
      <wcs:ServiceMetadata>
          <wcs:formatSupported>application/gml+xml</wcs:formatSupported>
          <wcs:formatSupported>application/x-gzip</wcs:formatSupported>
          <wcs:formatSupported>image/jpeg</wcs:formatSupported>
          <wcs:formatSupported>image/png</wcs:formatSupported>
          <wcs:formatSupported>image/tiff</wcs:formatSupported>
          <wcs:formatSupported>text/plain</wcs:formatSupported>
          <wcs:Extension>
            <crs:CrsMetadata>
                <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/2000</crs:crsSupported>
                <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/100001</crs:crsSupported>
                <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/100002</crs:crsSupported>
                <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/100003</crs:crsSupported>
                <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/900913</crs:crsSupported>
            </crs:CrsMetadata>
            <int:interpolationSupported>http://www.opengis.net/def/interpolation/OGC/1/nearest-neighbor</int:interpolationSupported>
            <int:interpolationSupported>http://www.opengis.net/def/interpolation/OGC/1/linear</int:interpolationSupported>
            <int:interpolationSupported>http://www.opengis.net/def/interpolation/OGC/1/cubic</int:interpolationSupported>
          </wcs:Extension>
      </wcs:ServiceMetadata>
      <wcs:Contents>
          <wcs:CoverageSummary>
            <ows:Title>30n030e_20101117_gmted_min075</ows:Title>
            <ows:Abstract>Generated from GeoTIFF</ows:Abstract>
            <ows:Keywords>
                <ows:Keyword>30n030e_20101117_gmted_min075</ows:Keyword>
                <ows:Keyword>WCS</ows:Keyword>
                <ows:Keyword>GeoTIFF</ows:Keyword>
            </ows:Keywords>
            <wcs:CoverageId>dem__30n030e_20101117_gmted_min075</wcs:CoverageId>
            <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>29.999861111111112 29.99986111111111</ows:LowerCorner>
                <ows:UpperCorner>59.999861111111116 49.99986111111111</ows:UpperCorner>
            </ows:WGS84BoundingBox>
            <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">
                <ows:LowerCorner>29.999861111111112 29.99986111111111</ows:LowerCorner>
                <ows:UpperCorner>59.999861111111116 49.99986111111111</ows:UpperCorner>
            </ows:BoundingBox>
          </wcs:CoverageSummary>
          <wcs:CoverageSummary>
            <ows:Title>gt30e020n40</ows:Title>
            <ows:Abstract>Generated from GeoTIFF</ows:Abstract>
            <ows:Keywords>
                <ows:Keyword>gt30e020n40</ows:Keyword>
                <ows:Keyword>WCS</ows:Keyword>
                <ows:Keyword>GeoTIFF</ows:Keyword>
            </ows:Keywords>
            <wcs:CoverageId>dem__gt30e020n40</wcs:CoverageId>
            <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>20.000000000000004 -9.999999999980012</ows:LowerCorner>
                <ows:UpperCorner>59.99999999998401 39.99999999999999</ows:UpperCorner>
            </ows:WGS84BoundingBox>
            <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">
                <ows:LowerCorner>20.000000000000004 -9.999999999980012</ows:LowerCorner>
                <ows:UpperCorner>59.99999999998401 39.99999999999999</ows:UpperCorner>
            </ows:BoundingBox>
          </wcs:CoverageSummary>
          <wcs:CoverageSummary>
            <ows:Title>n30_e034_1arc_v3</ows:Title>
            <ows:Abstract>Generated from GeoTIFF</ows:Abstract>
            <ows:Keywords>
                <ows:Keyword>n30_e034_1arc_v3</ows:Keyword>
                <ows:Keyword>WCS</ows:Keyword>
                <ows:Keyword>GeoTIFF</ows:Keyword>
            </ows:Keywords>
            <wcs:CoverageId>dem__n30_e034_1arc_v3</wcs:CoverageId>
            <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>33.99986111111111 29.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>35.000138888888884 31.00013888888889</ows:UpperCorner>
            </ows:WGS84BoundingBox>
            <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">
                <ows:LowerCorner>33.99986111111111 29.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>35.000138888888884 31.00013888888889</ows:UpperCorner>
            </ows:BoundingBox>
          </wcs:CoverageSummary>
          <wcs:CoverageSummary>
            <ows:Title>n30_e035_1arc_v3</ows:Title>
            <ows:Abstract>Generated from GeoTIFF</ows:Abstract>
            <ows:Keywords>
                <ows:Keyword>n30_e035_1arc_v3</ows:Keyword>
                <ows:Keyword>WCS</ows:Keyword>
                <ows:Keyword>GeoTIFF</ows:Keyword>
            </ows:Keywords>
            <wcs:CoverageId>dem__n30_e035_1arc_v3</wcs:CoverageId>
            <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>34.99986111111111 29.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>36.000138888888884 31.00013888888889</ows:UpperCorner>
            </ows:WGS84BoundingBox>
            <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">
                <ows:LowerCorner>34.99986111111111 29.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>36.000138888888884 31.00013888888889</ows:UpperCorner>
            </ows:BoundingBox>
            <ows:Metadata about="metadata" xlink:type="simple" xlink:href="https://www.google.com" />
          </wcs:CoverageSummary>
          <wcs:CoverageSummary>
            <ows:Title>n31_e034_1arc_v3</ows:Title>
            <ows:Abstract>Generated from GeoTIFF</ows:Abstract>
            <ows:Keywords>
                <ows:Keyword>n31_e034_1arc_v3</ows:Keyword>
                <ows:Keyword>WCS</ows:Keyword>
                <ows:Keyword>GeoTIFF</ows:Keyword>
            </ows:Keywords>
            <wcs:CoverageId>dem__n31_e034_1arc_v3</wcs:CoverageId>
            <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>33.99986111111111 30.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>35.000138888888884 32.00013888888889</ows:UpperCorner>
            </ows:WGS84BoundingBox>
            <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">
                <ows:LowerCorner>33.99986111111111 30.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>35.000138888888884 32.00013888888889</ows:UpperCorner>
            </ows:BoundingBox>
          </wcs:CoverageSummary>
          <wcs:CoverageSummary>
            <ows:Title>n31_e035_1arc_v3</ows:Title>
            <ows:Abstract>Generated from GeoTIFF</ows:Abstract>
            <ows:Keywords>
                <ows:Keyword>n31_e035_1arc_v3</ows:Keyword>
                <ows:Keyword>WCS</ows:Keyword>
                <ows:Keyword>GeoTIFF</ows:Keyword>
            </ows:Keywords>
            <wcs:CoverageId>dem__n31_e035_1arc_v3</wcs:CoverageId>
            <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>34.99986111111111 30.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>36.000138888888884 32.00013888888889</ows:UpperCorner>
            </ows:WGS84BoundingBox>
            <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">
                <ows:LowerCorner>34.99986111111111 30.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>36.000138888888884 32.00013888888889</ows:UpperCorner>
            </ows:BoundingBox>
          </wcs:CoverageSummary>
          <wcs:CoverageSummary>
            <ows:Title>n31_e036_1arc_v3</ows:Title>
            <ows:Abstract>Generated from GeoTIFF</ows:Abstract>
            <ows:Keywords>
                <ows:Keyword>n31_e036_1arc_v3</ows:Keyword>
                <ows:Keyword>WCS</ows:Keyword>
                <ows:Keyword>GeoTIFF</ows:Keyword>
            </ows:Keywords>
            <wcs:CoverageId>dem__n31_e036_1arc_v3</wcs:CoverageId>
            <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>35.99986111111111 30.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>37.000138888888884 32.00013888888889</ows:UpperCorner>
            </ows:WGS84BoundingBox>
            <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">
                <ows:LowerCorner>35.99986111111111 30.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>37.000138888888884 32.00013888888889</ows:UpperCorner>
            </ows:BoundingBox>
          </wcs:CoverageSummary>
          <wcs:CoverageSummary>
            <ows:Title>n32_e034_1arc_v3</ows:Title>
            <ows:Abstract>Generated from GeoTIFF</ows:Abstract>
            <ows:Keywords>
                <ows:Keyword>n32_e034_1arc_v3</ows:Keyword>
                <ows:Keyword>WCS</ows:Keyword>
                <ows:Keyword>GeoTIFF</ows:Keyword>
            </ows:Keywords>
            <wcs:CoverageId>dem__n32_e034_1arc_v3</wcs:CoverageId>
            <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>33.99986111111111 31.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>35.000138888888884 33.00013888888889</ows:UpperCorner>
            </ows:WGS84BoundingBox>
            <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">
                <ows:LowerCorner>33.99986111111111 31.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>35.000138888888884 33.00013888888889</ows:UpperCorner>
            </ows:BoundingBox>
          </wcs:CoverageSummary>
          <wcs:CoverageSummary>
            <ows:Title>n32_e035_1arc_v3</ows:Title>
            <ows:Abstract>Generated from GeoTIFF</ows:Abstract>
            <ows:Keywords>
                <ows:Keyword>n32_e035_1arc_v3</ows:Keyword>
                <ows:Keyword>WCS</ows:Keyword>
                <ows:Keyword>GeoTIFF</ows:Keyword>
            </ows:Keywords>
            <wcs:CoverageId>dem__n32_e035_1arc_v3</wcs:CoverageId>
            <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>34.99986111111111 31.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>36.000138888888884 33.00013888888889</ows:UpperCorner>
            </ows:WGS84BoundingBox>
            <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">
                <ows:LowerCorner>34.99986111111111 31.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>36.000138888888884 33.00013888888889</ows:UpperCorner>
            </ows:BoundingBox>
          </wcs:CoverageSummary>
          <wcs:CoverageSummary>
            <ows:Title>n32_e036_1arc_v3</ows:Title>
            <ows:Abstract>Generated from GeoTIFF</ows:Abstract>
            <ows:Keywords>
                <ows:Keyword>n32_e036_1arc_v3</ows:Keyword>
                <ows:Keyword>WCS</ows:Keyword>
                <ows:Keyword>GeoTIFF</ows:Keyword>
            </ows:Keywords>
            <wcs:CoverageId>dem__n32_e036_1arc_v3</wcs:CoverageId>
            <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
            <ows:WGS84BoundingBox>
                <ows:LowerCorner>35.99986111111111 31.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>37.000138888888884 33.00013888888889</ows:UpperCorner>
            </ows:WGS84BoundingBox>
            <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">
                <ows:LowerCorner>35.99986111111111 31.999861111111112</ows:LowerCorner>
                <ows:UpperCorner>37.000138888888884 33.00013888888889</ows:UpperCorner>
            </ows:BoundingBox>
          </wcs:CoverageSummary>
          <wcs:Extension />
      </wcs:Contents>
    </wcs:Capabilities>

  ```
</details>

This request shows an XML file containing the WCS 2.0.1 ***GetCapabilities*** response (the following pictures contains the **dem__gt30e020n40** layer related sub-section).
<figure>
    <img src={require("/img/getcap_wcs_example.png").default} style={{"display":"block","margin-left":"auto","margin-right":"auto","width":"80%"}} />
</figure>

## DescribeCoverage
The purpose of the **DescribeCoverage** request is to additional information about a Coverage a client wants to query. It returns information about the crs, the metadata, the domain, the range and the formats it is available in. A client generally will need to issue a DescribeCoverage request before being sure it can make the proper GetCoverage request

```
<DEM-DEM-SERVING-SERVICE_URL>/geoserver/ows?
SERVICE=WCS&
VERSION=1.0.0&
REQUEST=DescribeCoverage&
COVERAGE=n30_e034_1arc_v3
```

<details>
  <summary>Response example</summary>

  ``` xml
   <?xml version="1.0" encoding="UTF-8"?>
    <wcs:CoverageDescription xmlns:wcs="http://www.opengis.net/wcs" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wcs http://dem-dev-geoserver-development-dem-dev.apps.v0h0bdx6.eastus.aroapp.io/geoserver/schemas/wcs/1.0.0/describeCoverage.xsd" version="1.0.0">
      <wcs:CoverageOffering>
          <wcs:description>Generated from GeoTIFF</wcs:description>
          <wcs:name>dem:n30_e034_1arc_v3</wcs:name>
          <wcs:label>n30_e034_1arc_v3</wcs:label>
          <wcs:lonLatEnvelope srsName="urn:ogc:def:crs:OGC:1.3:CRS84">
            <gml:pos>33.99986111111111 29.999861111111112</gml:pos>
            <gml:pos>35.000138888888884 31.00013888888889</gml:pos>
          </wcs:lonLatEnvelope>
          <wcs:keywords>
            <wcs:keyword>n30_e034_1arc_v3</wcs:keyword>
            <wcs:keyword>WCS</wcs:keyword>
            <wcs:keyword>GeoTIFF</wcs:keyword>
          </wcs:keywords>
          <wcs:domainSet>
            <wcs:spatialDomain>
                <gml:Envelope srsName="EPSG:4326">
                  <gml:pos>33.99986111111111 29.999861111111112</gml:pos>
                  <gml:pos>35.000138888888884 31.00013888888889</gml:pos>
                </gml:Envelope>
                <gml:RectifiedGrid dimension="2" srsName="EPSG:4326">
                  <gml:limits>
                      <gml:GridEnvelope>
                        <gml:low>0 0</gml:low>
                        <gml:high>3600 3600</gml:high>
                      </gml:GridEnvelope>
                  </gml:limits>
                  <gml:axisName>x</gml:axisName>
                  <gml:axisName>y</gml:axisName>
                  <gml:origin>
                      <gml:pos>34.0 31.000000000000004</gml:pos>
                  </gml:origin>
                  <gml:offsetVector>2.777777777777778E-4 0.0</gml:offsetVector>
                  <gml:offsetVector>0.0 -2.777777777777778E-4</gml:offsetVector>
                </gml:RectifiedGrid>
            </wcs:spatialDomain>
          </wcs:domainSet>
          <wcs:rangeSet>
            <wcs:RangeSet>
                <wcs:name>n30_e034_1arc_v3</wcs:name>
                <wcs:label>n30_e034_1arc_v3</wcs:label>
                <wcs:axisDescription>
                  <wcs:AxisDescription>
                      <wcs:name>Band</wcs:name>
                      <wcs:label>Band</wcs:label>
                      <wcs:values>
                        <wcs:singleValue>1</wcs:singleValue>
                      </wcs:values>
                  </wcs:AxisDescription>
                </wcs:axisDescription>
            </wcs:RangeSet>
          </wcs:rangeSet>
          <wcs:supportedCRSs>
            <wcs:requestResponseCRSs>EPSG:4326</wcs:requestResponseCRSs>
          </wcs:supportedCRSs>
          <wcs:supportedFormats nativeFormat="GeoTIFF">
            <wcs:formats>AIG</wcs:formats>
            <wcs:formats>ArcGrid</wcs:formats>
            <wcs:formats>DTED</wcs:formats>
            <wcs:formats>EHdr</wcs:formats>
            <wcs:formats>ENVIHdr</wcs:formats>
            <wcs:formats>ERDASImg</wcs:formats>
            <wcs:formats>GeoTIFF</wcs:formats>
            <wcs:formats>GIF</wcs:formats>
            <wcs:formats>GeoPackage (mosaic)</wcs:formats>
            <wcs:formats>ImageMosaic</wcs:formats>
            <wcs:formats>ImagePyramid</wcs:formats>
            <wcs:formats>JPEG</wcs:formats>
            <wcs:formats>NITF</wcs:formats>
            <wcs:formats>PNG</wcs:formats>
            <wcs:formats>RPFTOC</wcs:formats>
            <wcs:formats>RST</wcs:formats>
            <wcs:formats>SRP</wcs:formats>
            <wcs:formats>TIFF</wcs:formats>
            <wcs:formats>VRT</wcs:formats>
          </wcs:supportedFormats>
          <wcs:supportedInterpolations default="nearest neighbor">
            <wcs:interpolationMethod>nearest neighbor</wcs:interpolationMethod>
            <wcs:interpolationMethod>bilinear</wcs:interpolationMethod>
            <wcs:interpolationMethod>bicubic</wcs:interpolationMethod>
          </wcs:supportedInterpolations>
      </wcs:CoverageOffering>
    </wcs:CoverageDescription>
  ```
</details>

This request shows an XML file containing the DescribeCoverage response of ***n30_e034_1arc_v3***  layer.

## GetCoverage
The **GetCoverage** operation requests the actual spatial data. It can retrieve subsets of coverages, and the result can be either the coverage itself or a reference to it. The most powerful thing about a GetCoverage request is its ability to subset domains (height and time) and ranges. It can also do resampling, encode in different data formats, and return the resulting file in different ways.

Detailed explanation about params might be found [here](https://www.mapserver.org/ogc/wcs_server.html) 🌐

```
<DEM-DEM-SERVING-SERVICE_URL>/geoserver/ows?
SERVICE=WCS&
VERSION=1.0.0&
REQUEST=GetCoverage&
coverage=n30_e034_1arc_v3&
CRS=EPSG:4326&
BBOX=33.99986111111111,29.999861111111112,35.000138888888884,31.00013888888889&
WIDTH=3199&
HEIGHT=2833&
FORMAT=PNG
```

Downloaded data/image for **n30_e034_1arc_v3** layer for **EPSG:4326** projection and for defined **BBOX**
