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

### Version 1.0.0

```
{WCS_SERVICE_URL}/wcs?
service=WCS&
version=1.0.0&
request=GetCapabilities
```

<details>
  <summary>Response example</summary>

  ``` xml title="Response Example"
    <?xml version="1.0" encoding="UTF-8"?>
    <wcs:WCS_Capabilities version="1.0.0" xmlns:wcs="http://www.opengis.net/wcs" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ogc="http://www.opengis.net/ogc" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wcs {WCS_SERVICE_URL}/schemas/wcs/1.0.0/wcsCapabilities.xsd" updateSequence="19">
        <wcs:Service>
            <wcs:description/>
            <wcs:name>WCS</wcs:name>
            <wcs:label/>
            <wcs:fees>NONE</wcs:fees>
            <wcs:accessConstraints>NONE</wcs:accessConstraints>
        </wcs:Service>
        <wcs:Capability>
            <wcs:Request>
                <wcs:GetCapabilities>
                    <wcs:DCPType>
                        <wcs:HTTP>
                            <wcs:Get>
                                <wcs:OnlineResource xlink:href="{WCS_SERVICE_URL}/wcs?"/>
                            </wcs:Get>
                        </wcs:HTTP>
                    </wcs:DCPType>
                    <wcs:DCPType>
                        <wcs:HTTP>
                            <wcs:Post>
                                <wcs:OnlineResource xlink:href="{WCS_SERVICE_URL}/wcs?"/>
                            </wcs:Post>
                        </wcs:HTTP>
                    </wcs:DCPType>
                </wcs:GetCapabilities>
                <wcs:DescribeCoverage>
                    <wcs:DCPType>
                        <wcs:HTTP>
                            <wcs:Get>
                                <wcs:OnlineResource xlink:href="{WCS_SERVICE_URL}/wcs?"/>
                            </wcs:Get>
                        </wcs:HTTP>
                    </wcs:DCPType>
                    <wcs:DCPType>
                        <wcs:HTTP>
                            <wcs:Post>
                                <wcs:OnlineResource xlink:href="{WCS_SERVICE_URL}/wcs?"/>
                            </wcs:Post>
                        </wcs:HTTP>
                    </wcs:DCPType>
                </wcs:DescribeCoverage>
                <wcs:GetCoverage>
                    <wcs:DCPType>
                        <wcs:HTTP>
                            <wcs:Get>
                                <wcs:OnlineResource xlink:href="{WCS_SERVICE_URL}/wcs?"/>
                            </wcs:Get>
                        </wcs:HTTP>
                    </wcs:DCPType>
                    <wcs:DCPType>
                        <wcs:HTTP>
                            <wcs:Post>
                                <wcs:OnlineResource xlink:href="{WCS_SERVICE_URL}/wcs?"/>
                            </wcs:Post>
                        </wcs:HTTP>
                    </wcs:DCPType>
                </wcs:GetCoverage>
            </wcs:Request>
            <wcs:Exception>
                <wcs:Format>application/vnd.ogc.se_xml</wcs:Format>
            </wcs:Exception>
        </wcs:Capability>
        <wcs:ContentMetadata>
            <wcs:CoverageOfferingBrief>
                <wcs:description>Generated from GeoTIFF</wcs:description>
                <wcs:name>dem:mimad</wcs:name>
                <wcs:label>mimad</wcs:label>
                <wcs:lonLatEnvelope srsName="urn:ogc:def:crs:OGC:1.3:CRS84">
                    <gml:pos>32.70697763422942 29.149161895068794</gml:pos>
                    <gml:pos>37.071150249328454 34.62339561526329</gml:pos>
                </wcs:lonLatEnvelope>
                <wcs:keywords>
                    <wcs:keyword>mimad</wcs:keyword>
                    <wcs:keyword>WCS</wcs:keyword>
                    <wcs:keyword>GeoTIFF</wcs:keyword>
                </wcs:keywords>
            </wcs:CoverageOfferingBrief>
            <wcs:CoverageOfferingBrief>
                <wcs:description>Generated from GeoTIFF</wcs:description>
                <wcs:name>dem:srtm30-DTM</wcs:name>
                <wcs:label>srtm30-DTM</wcs:label>
                <wcs:lonLatEnvelope srsName="urn:ogc:def:crs:OGC:1.3:CRS84">
                    <gml:pos>34.716796875 32.16796875</gml:pos>
                    <gml:pos>35.68359375 32.958984375</gml:pos>
                </wcs:lonLatEnvelope>
                <wcs:keywords>
                    <wcs:keyword>srtm30-DTM</wcs:keyword>
                    <wcs:keyword>WCS</wcs:keyword>
                    <wcs:keyword>GeoTIFF</wcs:keyword>
                </wcs:keywords>
            </wcs:CoverageOfferingBrief>
        </wcs:ContentMetadata>
    </wcs:WCS_Capabilities>
  ```
</details>

### Version 2.0.1

```
{WCS_SERVICE_URL}/wcs?
service=WCS&
version=2.0.1&
request=GetCapabilities
```

<details>
<summary>Response example</summary>
    ``` xml title="Response Example"
    <?xml version="1.0" encoding="UTF-8"?>
    <wcs:Capabilities xmlns:wcs="http://www.opengis.net/wcs/2.0" xmlns:ows="http://www.opengis.net/ows/2.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:gmlcov="http://www.opengis.net/gmlcov/1.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2.0.1" updateSequence="16" xmlns:int="https://www.opengis.net/wcs/interpolation/1.0" xmlns:crs="http://www.opengis.net/wcs/crs/1.0" xmlns:inspire_common="http://inspire.ec.europa.eu/schemas/common/1.0" xmlns:inspire_dls="http://inspire.ec.europa.eu/schemas/inspire_dls/1.0" xsi:schemaLocation=" http://www.opengis.net/wcs/2.0 http://schemas.opengis.net/wcs/2.0/wcsGetCapabilities.xsd http://inspire.ec.europa.eu/schemas/inspire_dls/1.0 https://inspire.ec.europa.eu/schemas/inspire_dls/1.0/inspire_dls.xsd">
        <ows:ServiceIdentification>
            <ows:Title/>
            <ows:Abstract/>
            <ows:ServiceType>urn:ogc:service:wcs</ows:ServiceType>
            <ows:ServiceTypeVersion>2.0.1</ows:ServiceTypeVersion>
            <ows:ServiceTypeVersion>1.1.1</ows:ServiceTypeVersion>
            <ows:ServiceTypeVersion>1.1.0</ows:ServiceTypeVersion>
            <ows:Profile>http://www.opengis.net/spec/WCS/2.0/conf/core</ows:Profile>
            <ows:Profile>http://www.opengis.net/spec/WCS_protocol-binding_get-kvp/1.0.1</ows:Profile>
            <ows:Profile>http://www.opengis.net/spec/WCS_protocol-binding_post-xml/1.0</ows:Profile>
            <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_crs/1.0/conf/crs-gridded-coverage</ows:Profile>
            <ows:Profile>
                <![CDATA[ http://www.opengis.net/spec/WCS_geotiff-coverages/1.0/conf/geotiff-coverage]]>
            </ows:Profile>
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
            <ows:ProviderName/>
            <ows:ProviderSite xlink:href=""/>
            <ows:ServiceContact>
                <ows:ContactInfo>
                    <ows:Phone/>
                    <ows:Address/>
                </ows:ContactInfo>
            </ows:ServiceContact>
        </ows:ServiceProvider>
        <ows:OperationsMetadata>
            <ows:Operation name="GetCapabilities">
                <ows:DCP>
                    <ows:HTTP>
                        <ows:Get xlink:href="{WCS_SERVICE_URL}/wcs?"/>
                    </ows:HTTP>
                </ows:DCP>
                <ows:DCP>
                    <ows:HTTP>
                        <ows:Post xlink:href="{WCS_SERVICE_URL}/wcs?"/>
                    </ows:HTTP>
                </ows:DCP>
            </ows:Operation>
            <ows:Operation name="DescribeCoverage">
                <ows:DCP>
                    <ows:HTTP>
                        <ows:Get xlink:href="{WCS_SERVICE_URL}/wcs?"/>
                    </ows:HTTP>
                </ows:DCP>
                <ows:DCP>
                    <ows:HTTP>
                        <ows:Post xlink:href="{WCS_SERVICE_URL}/wcs?"/>
                    </ows:HTTP>
                </ows:DCP>
            </ows:Operation>
            <ows:Operation name="GetCoverage">
                <ows:DCP>
                    <ows:HTTP>
                        <ows:Get xlink:href="{WCS_SERVICE_URL}/wcs?"/>
                    </ows:HTTP>
                </ows:DCP>
                <ows:DCP>
                    <ows:HTTP>
                        <ows:Post xlink:href="{WCS_SERVICE_URL}/wcs?"/>
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
            <wcs:formatSupported>image/jpeg</wcs:formatSupported>
            <wcs:formatSupported>image/png</wcs:formatSupported>
            <wcs:formatSupported>image/tiff</wcs:formatSupported>
            <wcs:formatSupported>image/tiff;application=geotiff</wcs:formatSupported>
            <wcs:formatSupported>text/plain</wcs:formatSupported>
            <wcs:Extension>
                <crs:CrsMetadata xmlns:crs="http://www.opengis.net/wcs/crs/1.0">
                    ...
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/3857</crs:crsSupported>
                    ...
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/4326</crs:crsSupported>
                    ...
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32600</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32601</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32602</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32603</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32604</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32605</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32606</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32607</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32608</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32609</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32610</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32611</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32612</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32613</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32614</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32615</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32616</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32617</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32618</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32619</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32620</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32621</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32622</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32623</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32624</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32625</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32626</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32627</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32628</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32629</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32630</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32631</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32632</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32633</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32634</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32635</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32636</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32637</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32638</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32639</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32640</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32641</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32642</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32643</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32644</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32645</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32646</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32647</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32648</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32649</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32650</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32651</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32652</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32653</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32654</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32655</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32656</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32657</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32658</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32659</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32660</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32661</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32662</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32663</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32664</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32665</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32666</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32667</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32700</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32701</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32702</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32703</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32704</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32705</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32706</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32707</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32708</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32709</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32710</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32711</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32712</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32713</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32714</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32715</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32716</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32717</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32718</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32719</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32720</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32721</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32722</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32723</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32724</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32725</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32726</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32727</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32728</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32729</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32730</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32731</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32732</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32733</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32734</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32735</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32736</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32737</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32738</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32739</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32740</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32741</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32742</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32743</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32744</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32745</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32746</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32747</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32748</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32749</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32750</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32751</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32752</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32753</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32754</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32755</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32756</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32757</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32758</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32759</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32760</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32761</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32762</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32763</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32764</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32765</crs:crsSupported>
                    <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/32766</crs:crsSupported>
                    ...
                </crs:CrsMetadata>
                <int:InterpolationMetadata xmlns:int="https://www.opengis.net/wcs/interpolation/1.0">
                    <int:InterpolationSupported>http://www.opengis.net/def/interpolation/OGC/1/nearest-neighbor</int:InterpolationSupported>
                    <int:InterpolationSupported>http://www.opengis.net/def/interpolation/OGC/1/linear</int:InterpolationSupported>
                    <int:InterpolationSupported>http://www.opengis.net/def/interpolation/OGC/1/cubic</int:InterpolationSupported>
                </int:InterpolationMetadata>
            </wcs:Extension>
        </wcs:ServiceMetadata>
        <wcs:Contents>
            <wcs:CoverageSummary>
                <ows:Title>mimad</ows:Title>
                <ows:Keywords>
                    <ows:Keyword>mimad</ows:Keyword>
                    <ows:Keyword>WCS</ows:Keyword>
                    <ows:Keyword>GeoTIFF</ows:Keyword>
                </ows:Keywords>
                <wcs:CoverageId>dem__mimad</wcs:CoverageId>
                <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
                <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/32636">
                    <ows:LowerCorner>473139.25219177455 3230615.3954787063</ows:LowerCorner>
                    <ows:UpperCorner>873608.5831505858 3831319.391916923</ows:UpperCorner>
                </ows:BoundingBox>
                <ows:WGS84BoundingBox>
                    <ows:LowerCorner>32.70697763422942 29.149161895068794</ows:LowerCorner>
                    <ows:UpperCorner>37.071150249328454 34.62339561526329</ows:UpperCorner>
                </ows:WGS84BoundingBox>
            </wcs:CoverageSummary>
            <wcs:CoverageSummary>
                <ows:Title>mimad</ows:Title>
                <ows:Keywords>
                    <ows:Keyword>mimad</ows:Keyword>
                    <ows:Keyword>WCS</ows:Keyword>
                    <ows:Keyword>GeoTIFF</ows:Keyword>
                </ows:Keywords>
                <wcs:CoverageId>dem__mimad</wcs:CoverageId>
                <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
                <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/32636">
                    <ows:LowerCorner>473139.25219177455 3230615.3954787063</ows:LowerCorner>
                    <ows:UpperCorner>873608.5831505858 3831319.391916923</ows:UpperCorner>
                </ows:BoundingBox>
                <ows:WGS84BoundingBox>
                    <ows:LowerCorner>32.70697763422942 29.149161895068794</ows:LowerCorner>
                    <ows:UpperCorner>37.071150249328454 34.62339561526329</ows:UpperCorner>
                </ows:WGS84BoundingBox>
            </wcs:CoverageSummary>
            <wcs:CoverageSummary>
                <ows:Title>srtm30-DTM</ows:Title>
                <ows:Keywords>
                    <ows:Keyword>srtm30-DTM</ows:Keyword>
                    <ows:Keyword>WCS</ows:Keyword>
                    <ows:Keyword>GeoTIFF</ows:Keyword>
                </ows:Keywords>
                <wcs:CoverageId>dem__srtm30-DTM</wcs:CoverageId>
                <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
                <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/4326">
                    <ows:LowerCorner>34.716796875 32.16796875</ows:LowerCorner>
                    <ows:UpperCorner>35.68359375 32.958984375</ows:UpperCorner>
                </ows:BoundingBox>
                <ows:WGS84BoundingBox>
                    <ows:LowerCorner>34.716796875 32.16796875</ows:LowerCorner>
                    <ows:UpperCorner>35.68359375 32.958984375</ows:UpperCorner>
                </ows:WGS84BoundingBox>
            </wcs:CoverageSummary>
            <wcs:Extension/>
        </wcs:Contents>
    </wcs:Capabilities>
    ```
</details>

This request shows an XML file containing the WCS 2.0.1 ***GetCapabilities*** response (the following pictures contains the **dem__gt30e020n40** layer related sub-section).
<figure>
    <img src={require("/img/getcap_wcs_example.png").default} style={{"display":"block","margin-left":"auto","margin-right":"auto","width":"80%"}} />
</figure>

### Understanding the capabilities response {#understanding-capabilities}

| **Tag name** | **Use** |
| ----------- | ----------- |
| OperationsMetadata | Provides details about the service's available operations. |
| formatSupported | Located under the `ServiceMetadata` tag.<br/>Lists the supported formats. |
| Extension | Located under the `ServiceMetadata` tag.<br/>Lists all of the supported crs. |
| InterpolationMetadata | Located under the `Extension` tag.<br/>Lists all of the available interpolation methods available. |
| Contents | Information about the available coverages. |

## DescribeCoverage
The purpose of the **DescribeCoverage** request is to additional information about a Coverage a client wants to query. It returns information about the crs, the metadata, the domain, the range and the formats it is available in. A client generally will need to issue a DescribeCoverage request before being sure it can make the proper GetCoverage request

### Version 1.0.0

```
{WCS_SERVICE_URL}/wcs?
SERVICE=WCS&
VERSION=1.0.0&
REQUEST=DescribeCoverage&
COVERAGE=n30_e034_1arc_v3
```

<details>
  <summary>Response example</summary>
  ``` xml
   <?xml version="1.0" encoding="UTF-8"?>
    <wcs:CoverageDescription xmlns:wcs="http://www.opengis.net/wcs" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wcs {WCS_SERVICE_URL}/schemas/wcs/1.0.0/describeCoverage.xsd" version="1.0.0">
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

### Version 2.0.1

```bash
curl --location --request GET '{WCS_SERVICE_URL}/wcs?request=DescribeCoverage&version=2.0.1&coverageId=srtm30-DTM&token=<token>'
```

<details>
    <summary>Response</summary>
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <wcs:CoverageDescriptions xmlns:wcs="http://www.opengis.net/wcs/2.0" xmlns:ows="http://www.opengis.net/ows/2.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:gmlcov="http://www.opengis.net/gmlcov/1.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:swe="http://www.opengis.net/swe/2.0" xmlns:wcsgs="http://www.geoserver.org/wcsgs/2.0" xsi:schemaLocation=" http://www.opengis.net/wcs/2.0 http://schemas.opengis.net/wcs/2.0/wcsDescribeCoverage.xsd http://www.geoserver.org/wcsgs/2.0 {WCS_SERVICE_URL}/schemas/wcs/2.0/wcsgs.xsd">
        <wcs:CoverageDescription gml:id="dem__srtm30-DTM">
            <gml:description>Generated from GeoTIFF</gml:description>
            <gml:name>srtm30-DTM</gml:name>
            <gml:boundedBy>
                <gml:Envelope srsName="http://www.opengis.net/def/crs/EPSG/0/4326" axisLabels="Lat Long" uomLabels="Deg Deg" srsDimension="2">
                    <gml:lowerCorner>32.16796875 34.716796875</gml:lowerCorner>
                    <gml:upperCorner>32.958984375 35.68359375</gml:upperCorner>
                </gml:Envelope>
            </gml:boundedBy>
            <wcs:CoverageId>dem__srtm30-DTM</wcs:CoverageId>
            <gml:coverageFunction>
                <gml:GridFunction>
                    <gml:sequenceRule axisOrder="+2 +1">Linear</gml:sequenceRule>
                    <gml:startPoint>0 0</gml:startPoint>
                </gml:GridFunction>
            </gml:coverageFunction>
            <gmlcov:metadata>
                <gmlcov:Extension>
                    <ows:Keywords>
                        <ows:Keyword>srtm30-DTM</ows:Keyword>
                        <ows:Keyword>WCS</ows:Keyword>
                        <ows:Keyword>GeoTIFF</ows:Keyword>
                    </ows:Keywords>
                </gmlcov:Extension>
            </gmlcov:metadata>
            <gml:domainSet>
                <gml:RectifiedGrid gml:id="grid00__dem__srtm30-DTM" dimension="2">
                    <gml:limits>
                        <gml:GridEnvelope>
                            <gml:low>0 0</gml:low>
                            <gml:high>2815 2303</gml:high>
                        </gml:GridEnvelope>
                    </gml:limits>
                    <gml:axisLabels>i j</gml:axisLabels>
                    <gml:origin>
                        <gml:Point gml:id="p00_dem__srtm30-DTM" srsName="http://www.opengis.net/def/crs/EPSG/0/4326">
                            <gml:pos>32.95881271362305 34.71696853637695</gml:pos>
                        </gml:Point>
                    </gml:origin>
                    <gml:offsetVector srsName="http://www.opengis.net/def/crs/EPSG/0/4326">0.0 3.4332275390625E-4</gml:offsetVector>
                    <gml:offsetVector srsName="http://www.opengis.net/def/crs/EPSG/0/4326">-3.4332275390625E-4 0.0</gml:offsetVector>
                </gml:RectifiedGrid>
            </gml:domainSet>
            <gmlcov:rangeType>
                <swe:DataRecord xmlns:swe="http://www.opengis.net/swe/2.0">
                    <swe:field name="GRAY_INDEX">
                        <swe:Quantity>
                            <swe:description>GRAY_INDEX</swe:description>
                            <swe:nilValues>
                                <swe:NilValues>
                                    <swe:nilValue reason="http://www.opengis.net/def/nil/OGC/0/unknown">-32768.0</swe:nilValue>
                                </swe:NilValues>
                            </swe:nilValues>
                            <swe:uom code="W.m-2.Sr-1"/>
                            <swe:constraint>
                                <swe:AllowedValues>
                                    <swe:interval>-32768 32767</swe:interval>
                                </swe:AllowedValues>
                            </swe:constraint>
                        </swe:Quantity>
                    </swe:field>
                </swe:DataRecord>
            </gmlcov:rangeType>
            <wcs:ServiceParameters>
                <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>
                <wcs:nativeFormat>image/tiff</wcs:nativeFormat>
            </wcs:ServiceParameters>
        </wcs:CoverageDescription>
    </wcs:CoverageDescriptions>
    ```
</details>

### Understanding the describe coverage response {#understanding-describe-coverage}

Notice the tag `boundedBy`, it describes the geographic extent of the coverage, It includes the following attributes:
| **Attribute name** | **Details** | **Example** |
| ----------- | ----------- | ----------- |
| srsName | Coverage SRS | http://www.opengis.net/def/crs/EPSG/0/4326 |
| axisLabels | Labels to use to describe the coverage axis | Lat Long |
| srsDimension | Dimension of points in the coverage | 2 |

## GetCoverage
The **GetCoverage** operation requests the actual spatial data. It can retrieve subsets of coverages, and the result can be either the coverage itself or a reference to it. The most powerful thing about a GetCoverage request is its ability to subset domains (height and time) and ranges. It can also do resampling, encode in different data formats, and return the resulting file in different ways.

Detailed explanation about params might be found [here](https://www.mapserver.org/ogc/wcs_server.html) 🌐

### Version 1.0.0

```
{WCS_SERVICE_URL}/wcs?
request=GetCoverage&
version=1.0.0&
coverage=srtm30-DTM&
format=image/tiff;application=geotiff&
crs=EPSG%3A4326&
bbox=35.13102,32.35306,35.37051,32.49437&
width=1000&
height=1000
```

### Version 2.0.1

```
{WCS_SERVICE_URL}/wcs?
request=GetCoverage&
version=2.0.1&
coverageId=srtm30-DTM&
format=image/tiff;application=geotiff&
subset=Lat(32.35306,32.49437)&
subset=Long(35.13102,35.37051)
```

With this request we have successfully fetched data/image for **n30_e034_1arc_v3** layer for **EPSG:4326** projection and for defined **BBOX**! :tada:
