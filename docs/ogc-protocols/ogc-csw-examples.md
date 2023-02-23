# CSW Examples
The following examples will help you understand how to interface with CSW based catalog.

> :no_entry: Authentication might be required in order to communicate with CSW server.
> See the principles [here](/ogc-protocols/ogc-csw-auth.md)

## GetCapabilities
**GetCapabilities** operation allows CSW clients to retrieve service metadata from a server. The response to GetCapabilities request is an XML document containing service metadata about the server.

Requests example:
```
GET request

http://localhost:8080/csw?request=GetCapabilities&service=CSW
```

<details>
  <summary>Response example</summary>

  ``` xml
    <?xml version="1.0" encoding="UTF-8"?>
  <!-- pycsw 2.7.dev0 -->
  <csw30:Capabilities xmlns:csw30="http://www.opengis.net/cat/csw/3.0" xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:fes20="http://www.opengis.net/fes/2.0" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:ows11="http://www.opengis.net/ows/1.1" xmlns:ows20="http://www.opengis.net/ows/2.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0.0" updateSequence="None" xsi:schemaLocation="http://www.opengis.net/cat/csw/3.0 http://schemas.opengis.net/cat/csw/3.0/cswGetCapabilities.xsd">
    <ows20:ServiceIdentification>
        <ows20:Title>pycsw Geospatial Catalogue</ows20:Title>
        <ows20:Abstract>pycsw is an OGC CSW server implementation written in Python</ows20:Abstract>
        <ows20:Keywords>
          <ows20:Keyword>catalogue</ows20:Keyword>
          <ows20:Keyword>discovery</ows20:Keyword>
          <ows20:Keyword>metadata</ows20:Keyword>
          <ows20:Type codeSpace="ISOTC211/19115">theme</ows20:Type>
        </ows20:Keywords>
        <ows20:ServiceType codeSpace="OGC">CSW</ows20:ServiceType>
        <ows20:ServiceTypeVersion>2.0.2</ows20:ServiceTypeVersion>
        <ows20:ServiceTypeVersion>3.0.0</ows20:ServiceTypeVersion>
        <ows20:Profile>http://schema.mapcolonies.com/raster</ows20:Profile>
        <ows20:Fees>None</ows20:Fees>
        <ows20:AccessConstraints>None</ows20:AccessConstraints>
    </ows20:ServiceIdentification>
    <ows20:ServiceProvider>
        <ows20:ProviderName>Organization Name</ows20:ProviderName>
        <ows20:ProviderSite xlink:type="simple" xlink:href="https://pycsw.org/" />
        <ows20:ServiceContact>
          <ows20:IndividualName>Last_name, First_name</ows20:IndividualName>
          <ows20:PositionName>Position Title</ows20:PositionName>
          <ows20:ContactInfo>
              <ows20:Phone>
                <ows20:Voice>+xx-xxx-xxx-xxxx</ows20:Voice>
                <ows20:Facsimile>+xx-xxx-xxx-xxxx</ows20:Facsimile>
              </ows20:Phone>
              <ows20:Address>
                <ows20:DeliveryPoint>Mailing Address</ows20:DeliveryPoint>
                <ows20:City>City</ows20:City>
                <ows20:AdministrativeArea>Administrative Area</ows20:AdministrativeArea>
                <ows20:PostalCode>Zip or Postal Code</ows20:PostalCode>
                <ows20:Country>Country</ows20:Country>
                <ows20:ElectronicMailAddress>Email Address</ows20:ElectronicMailAddress>
              </ows20:Address>
              <ows20:OnlineResource xlink:type="simple" xlink:href="Contact URL" />
              <ows20:HoursOfService>Hours of Service</ows20:HoursOfService>
              <ows20:ContactInstructions>During hours of service.  Off on weekends.</ows20:ContactInstructions>
          </ows20:ContactInfo>
          <ows20:Role codeSpace="ISOTC211/19115">pointOfContact</ows20:Role>
        </ows20:ServiceContact>
    </ows20:ServiceProvider>
    <ows20:OperationsMetadata>
        <ows20:Operation name="GetCapabilities">
          <ows20:DCP>
              <ows20:HTTP>
                <ows20:Get xlink:type="simple" xlink:href="http://localhost:8000" />
                <ows20:Post xlink:type="simple" xlink:href="http://localhost:8000" />
              </ows20:HTTP>
          </ows20:DCP>
          <ows20:Parameter name="acceptFormats">
              <ows20:AllowedValues>
                <ows20:Value>application/xml</ows20:Value>
                <ows20:Value>text/xml</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
          <ows20:Parameter name="acceptVersions">
              <ows20:AllowedValues>
                <ows20:Value>2.0.2</ows20:Value>
                <ows20:Value>3.0.0</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
          <ows20:Parameter name="sections">
              <ows20:AllowedValues>
                <ows20:Value>All</ows20:Value>
                <ows20:Value>Filter_Capabilities</ows20:Value>
                <ows20:Value>OperationsMetadata</ows20:Value>
                <ows20:Value>ServiceIdentification</ows20:Value>
                <ows20:Value>ServiceProvider</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
        </ows20:Operation>
        <ows20:Operation name="GetDomain">
          <ows20:DCP>
              <ows20:HTTP>
                <ows20:Get xlink:type="simple" xlink:href="http://localhost:8000" />
                <ows20:Post xlink:type="simple" xlink:href="http://localhost:8000" />
              </ows20:HTTP>
          </ows20:DCP>
          <ows20:Parameter name="ParameterName">
              <ows20:AllowedValues>
                <ows20:Value>GetCapabilities.acceptFormats</ows20:Value>
                <ows20:Value>GetCapabilities.acceptVersions</ows20:Value>
                <ows20:Value>GetCapabilities.sections</ows20:Value>
                <ows20:Value>GetRecordById.ElementSetName</ows20:Value>
                <ows20:Value>GetRecordById.outputFormat</ows20:Value>
                <ows20:Value>GetRecordById.outputSchema</ows20:Value>
                <ows20:Value>GetRecords.CONSTRAINTLANGUAGE</ows20:Value>
                <ows20:Value>GetRecords.ElementSetName</ows20:Value>
                <ows20:Value>GetRecords.outputFormat</ows20:Value>
                <ows20:Value>GetRecords.outputSchema</ows20:Value>
                <ows20:Value>GetRecords.typeNames</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
        </ows20:Operation>
        <ows20:Operation name="GetRecords">
          <ows20:DCP>
              <ows20:HTTP>
                <ows20:Get xlink:type="simple" xlink:href="http://localhost:8000" />
                <ows20:Post xlink:type="simple" xlink:href="http://localhost:8000" />
              </ows20:HTTP>
          </ows20:DCP>
          <ows20:Parameter name="CONSTRAINTLANGUAGE">
              <ows20:AllowedValues>
                <ows20:Value>CQL_TEXT</ows20:Value>
                <ows20:Value>FILTER</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
          <ows20:Parameter name="ElementSetName">
              <ows20:AllowedValues>
                <ows20:Value>brief</ows20:Value>
                <ows20:Value>full</ows20:Value>
                <ows20:Value>summary</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
          <ows20:Parameter name="outputFormat">
              <ows20:AllowedValues>
                <ows20:Value>application/atom+xml</ows20:Value>
                <ows20:Value>application/json</ows20:Value>
                <ows20:Value>application/xml</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
          <ows20:Parameter name="outputSchema">
              <ows20:AllowedValues>
                <ows20:Value>http://gcmd.gsfc.nasa.gov/Aboutus/xml/dif/</ows20:Value>
                <ows20:Value>http://schema.mapcolonies.com/raster</ows20:Value>
                <ows20:Value>http://www.interlis.ch/INTERLIS2.3</ows20:Value>
                <ows20:Value>http://www.opengis.net/cat/csw/3.0</ows20:Value>
                <ows20:Value>http://www.opengis.net/cat/csw/csdgm</ows20:Value>
                <ows20:Value>http://www.w3.org/2005/Atom</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
          <ows20:Parameter name="typeNames">
              <ows20:AllowedValues>
                <ows20:Value>csw30:Record</ows20:Value>
                <ows20:Value>csw:Record</ows20:Value>
                <ows20:Value>mc:MCRasterRecord</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
          <ows20:Constraint name="MCRasterQueryables">
              <ows20:AllowedValues>
                <ows20:Value>mc:RMS</ows20:Value>
                <ows20:Value>mc:SRS</ows20:Value>
                <ows20:Value>mc:SRSName</ows20:Value>
                <ows20:Value>mc:boundingBox</ows20:Value>
                <ows20:Value>mc:classification</ows20:Value>
                <ows20:Value>mc:creationDateUTC</ows20:Value>
                <ows20:Value>mc:description</ows20:Value>
                <ows20:Value>mc:discretes</ows20:Value>
                <ows20:Value>mc:footprint</ows20:Value>
                <ows20:Value>mc:id</ows20:Value>
                <ows20:Value>mc:imagingTimeBeginUTC</ows20:Value>
                <ows20:Value>mc:imagingTimeEndUTC</ows20:Value>
                <ows20:Value>mc:includedInBests</ows20:Value>
                <ows20:Value>mc:ingestionDate</ows20:Value>
                <ows20:Value>mc:insertDate</ows20:Value>
                <ows20:Value>mc:keywords</ows20:Value>
                <ows20:Value>mc:layerPolygonParts</ows20:Value>
                <ows20:Value>mc:links</ows20:Value>
                <ows20:Value>mc:maxResolutionDeg</ows20:Value>
                <ows20:Value>mc:maxResolutionMeter</ows20:Value>
                <ows20:Value>mc:minHorizontalAccuracyCE90</ows20:Value>
                <ows20:Value>mc:producerName</ows20:Value>
                <ows20:Value>mc:productBBox</ows20:Value>
                <ows20:Value>mc:productId</ows20:Value>
                <ows20:Value>mc:productName</ows20:Value>
                <ows20:Value>mc:productSubType</ows20:Value>
                <ows20:Value>mc:productType</ows20:Value>
                <ows20:Value>mc:productVersion</ows20:Value>
                <ows20:Value>mc:region</ows20:Value>
                <ows20:Value>mc:scale</ows20:Value>
                <ows20:Value>mc:sensors</ows20:Value>
                <ows20:Value>mc:transparency</ows20:Value>
                <ows20:Value>mc:type</ows20:Value>
                <ows20:Value>mc:updateDateUTC</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Constraint>
          <ows20:Constraint name="MaxRecordDefault">
              <ows20:AllowedValues>
                <ows20:Value>10</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Constraint>
          <ows20:Constraint name="OpenSearchDescriptionDocument">
              <ows20:AllowedValues>
                <ows20:Value>http://localhost:8000?mode=opensearch&amp;service=CSW&amp;version=3.0.0&amp;request=GetCapabilities</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Constraint>
        </ows20:Operation>
        <ows20:Operation name="GetRecordById">
          <ows20:DCP>
              <ows20:HTTP>
                <ows20:Get xlink:type="simple" xlink:href="http://localhost:8000" />
                <ows20:Post xlink:type="simple" xlink:href="http://localhost:8000" />
              </ows20:HTTP>
          </ows20:DCP>
          <ows20:Parameter name="ElementSetName">
              <ows20:AllowedValues>
                <ows20:Value>brief</ows20:Value>
                <ows20:Value>full</ows20:Value>
                <ows20:Value>summary</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
          <ows20:Parameter name="outputFormat">
              <ows20:AllowedValues>
                <ows20:Value>application/atom+xml</ows20:Value>
                <ows20:Value>application/json</ows20:Value>
                <ows20:Value>application/xml</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
          <ows20:Parameter name="outputSchema">
              <ows20:AllowedValues>
                <ows20:Value>http://gcmd.gsfc.nasa.gov/Aboutus/xml/dif/</ows20:Value>
                <ows20:Value>http://schema.mapcolonies.com/raster</ows20:Value>
                <ows20:Value>http://www.interlis.ch/INTERLIS2.3</ows20:Value>
                <ows20:Value>http://www.opengis.net/cat/csw/3.0</ows20:Value>
                <ows20:Value>http://www.opengis.net/cat/csw/csdgm</ows20:Value>
                <ows20:Value>http://www.w3.org/2005/Atom</ows20:Value>
              </ows20:AllowedValues>
          </ows20:Parameter>
        </ows20:Operation>
        <ows20:Operation name="GetRepositoryItem">
          <ows20:DCP>
              <ows20:HTTP>
                <ows20:Get xlink:type="simple" xlink:href="http://localhost:8000" />
              </ows20:HTTP>
          </ows20:DCP>
        </ows20:Operation>
        <ows20:Parameter name="service">
          <ows20:AllowedValues>
              <ows20:Value>CSW</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Parameter>
        <ows20:Parameter name="version">
          <ows20:AllowedValues>
              <ows20:Value>2.0.2</ows20:Value>
              <ows20:Value>3.0.0</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Parameter>
        <ows20:Constraint name="CoreQueryables">
          <ows20:AllowedValues>
              <ows20:Value>csw:AnyText</ows20:Value>
              <ows20:Value>dc:contributor</ows20:Value>
              <ows20:Value>dc:creator</ows20:Value>
              <ows20:Value>dc:date</ows20:Value>
              <ows20:Value>dc:format</ows20:Value>
              <ows20:Value>dc:identifier</ows20:Value>
              <ows20:Value>dc:language</ows20:Value>
              <ows20:Value>dc:publisher</ows20:Value>
              <ows20:Value>dc:relation</ows20:Value>
              <ows20:Value>dc:rights</ows20:Value>
              <ows20:Value>dc:source</ows20:Value>
              <ows20:Value>dc:subject</ows20:Value>
              <ows20:Value>dc:title</ows20:Value>
              <ows20:Value>dc:type</ows20:Value>
              <ows20:Value>dct:abstract</ows20:Value>
              <ows20:Value>dct:alternative</ows20:Value>
              <ows20:Value>dct:modified</ows20:Value>
              <ows20:Value>dct:spatial</ows20:Value>
              <ows20:Value>ows:BoundingBox</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="MaxRecordDefault">
          <ows20:AllowedValues>
              <ows20:Value>10</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="PostEncoding">
          <ows20:AllowedValues>
              <ows20:Value>SOAP</ows20:Value>
              <ows20:Value>XML</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="XPathQueryables">
          <ows20:AllowedValues>
              <ows20:Value>allowed</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/CoreQueryables">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/CoreSortables">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/DefaultSortingAlgorithm">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/Filter-CQL">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/Filter-FES-KVP-Advanced">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/Filter-FES-XML">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/GetCapabilities-XML">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/GetDomain-KVP">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/GetDomain-XML">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/GetRecordById-XML">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/GetRecords-Async-KVP">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/GetRecords-Async-XML">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/GetRecords-Basic-XML">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/GetRecords-Distributed-KVP">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/GetRecords-Distributed-XML">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/Harvest-Async-KVP">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/Harvest-Async-XML">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/Harvest-Basic-KVP">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/Harvest-Basic-XML">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/Harvest-Periodic-KVP">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/Harvest-Periodic-XML">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/OpenSearch">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/SupportedGMLVersions">
          <ows20:AllowedValues>
              <ows20:Value>http://www.opengis.net/gml</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
        <ows20:Constraint name="http://www.opengis.net/spec/csw/3.0/conf/Transaction">
          <ows20:AllowedValues>
              <ows20:Value>TRUE</ows20:Value>
          </ows20:AllowedValues>
        </ows20:Constraint>
    </ows20:OperationsMetadata>
    <ows20:Languages>
        <ows20:Language>en</ows20:Language>
    </ows20:Languages>
    <fes20:Filter_Capabilities>
        <fes20:Conformance>
          <fes20:Constraint name="ImplementsQuery">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsAdHocQuery">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsFunctions">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsResourceld">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsMinStandardFilter">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsStandardFilter">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsMinSpatialFilter">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsSpatialFilter">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsMinTemporalFilter">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsTemporalFilter">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsVersionNav">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsSorting">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsExtendedOperators">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsMinimumXPath">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
          <fes20:Constraint name="ImplementsSchemaElementFunc">
              <ows11:NoValues />
              <ows11:DefaultValue>TRUE</ows11:DefaultValue>
          </fes20:Constraint>
        </fes20:Conformance>
        <fes20:Id_Capabilities>
          <fes20:ResourceIdentifier name="csw30:id" />
        </fes20:Id_Capabilities>
        <fes20:Scalar_Capabilities>
          <fes20:LogicalOperators />
          <fes20:ComparisonOperators>
              <fes20:ComparisonOperator name="PropertyIsBetween" />
              <fes20:ComparisonOperator name="PropertyIsEqualTo" />
              <fes20:ComparisonOperator name="PropertyIsGreaterThan" />
              <fes20:ComparisonOperator name="PropertyIsGreaterThanOrEqualTo" />
              <fes20:ComparisonOperator name="PropertyIsLessThan" />
              <fes20:ComparisonOperator name="PropertyIsLessThanOrEqualTo" />
              <fes20:ComparisonOperator name="PropertyIsLike" />
              <fes20:ComparisonOperator name="PropertyIsNotEqualTo" />
              <fes20:ComparisonOperator name="PropertyIsNull" />
          </fes20:ComparisonOperators>
        </fes20:Scalar_Capabilities>
        <fes20:Spatial_Capabilities>
          <fes20:GeometryOperands>
              <fes20:GeometryOperand name="gml:Point" />
              <fes20:GeometryOperand name="gml:LineString" />
              <fes20:GeometryOperand name="gml:Polygon" />
              <fes20:GeometryOperand name="gml:Envelope" />
          </fes20:GeometryOperands>
          <fes20:SpatialOperators>
              <fes20:SpatialOperator name="BBOX" />
              <fes20:SpatialOperator name="Beyond" />
              <fes20:SpatialOperator name="Contains" />
              <fes20:SpatialOperator name="Crosses" />
              <fes20:SpatialOperator name="Disjoint" />
              <fes20:SpatialOperator name="DWithin" />
              <fes20:SpatialOperator name="Equals" />
              <fes20:SpatialOperator name="Intersects" />
              <fes20:SpatialOperator name="Overlaps" />
              <fes20:SpatialOperator name="Touches" />
              <fes20:SpatialOperator name="Within" />
          </fes20:SpatialOperators>
        </fes20:Spatial_Capabilities>
        <fes20:Functions>
          <fes20:Function name="length">
              <fes20:Returns>xs:string</fes20:Returns>
          </fes20:Function>
          <fes20:Function name="lower">
              <fes20:Returns>xs:string</fes20:Returns>
          </fes20:Function>
          <fes20:Function name="ltrim">
              <fes20:Returns>xs:string</fes20:Returns>
          </fes20:Function>
          <fes20:Function name="rtrim">
              <fes20:Returns>xs:string</fes20:Returns>
          </fes20:Function>
          <fes20:Function name="trim">
              <fes20:Returns>xs:string</fes20:Returns>
          </fes20:Function>
          <fes20:Function name="upper">
              <fes20:Returns>xs:string</fes20:Returns>
          </fes20:Function>
        </fes20:Functions>
    </fes20:Filter_Capabilities>
  </csw30:Capabilities>
```
</details>

## DescribeRecord
**DescribeRecord** operation allows a client to discover elements of the information model supported by the target catalogue service. The operation allows some or all of the information model to be described.

Requests example:
```
GET request

http://localhost:8080/csw?request=DescribeRecord&service=CSW&version=2.0.2&outputFormat=application/xml&schemaLanguage=http://www.w3.org/XML/Schema
```

<details>
  <summary>Response example</summary>

  ``` xml
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!-- pycsw 2.7.dev0 -->
    <csw:DescribeRecordResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd"><csw:SchemaComponent schemaLanguage="XMLSCHEMA" targetNamespace="http://www.opengis.net/cat/csw/2.0.2"><xs:schema id="csw-record" targetNamespace="http://www.opengis.net/cat/csw/2.0.2" elementFormDefault="qualified" version="2.0.2 2010-01-22">
      <xs:annotation>
          <xs:appinfo>
            <dc:identifier>http://schemas.opengis.net/csw/2.0.2/record.xsd</dc:identifier>
          </xs:appinfo>
          <xs:documentation xml:lang="en">
            This schema defines the basic record types that must be supported
            by all CSW implementations. These correspond to full, summary, and
            brief views based on DCMI metadata terms.

            CSW is an OGC Standard.
            Copyright (c) 2004,2010 Open Geospatial Consortium, Inc. All Rights Reserved.
            To obtain additional rights of use, visit http://www.opengeospatial.org/legal/ .
          </xs:documentation>
      </xs:annotation>

      <xs:import namespace="http://purl.org/dc/terms/" schemaLocation="rec-dcterms.xsd"/>
      <xs:import namespace="http://purl.org/dc/elements/1.1/" schemaLocation="rec-dcmes.xsd"/>
      <xs:import namespace="http://www.opengis.net/ows" schemaLocation="../../ows/1.0.0/owsAll.xsd"/>

      <xs:element name="AbstractRecord" id="AbstractRecord" type="csw:AbstractRecordType" abstract="true"/>
      <xs:complexType name="AbstractRecordType" id="AbstractRecordType" abstract="true"/>

      <xs:element name="DCMIRecord" type="csw:DCMIRecordType" substitutionGroup="csw:AbstractRecord"/>
      <xs:complexType name="DCMIRecordType">
          <xs:annotation>
            <xs:documentation xml:lang="en">
                This type encapsulates all of the standard DCMI metadata terms,
                including the Dublin Core refinements; these terms may be mapped
                to the profile-specific information model.
            </xs:documentation>
          </xs:annotation>
          <xs:complexContent>
            <xs:extension base="csw:AbstractRecordType">
                <xs:sequence>
                  <xs:group ref="dct:DCMI-terms"/>
                </xs:sequence>
            </xs:extension>
          </xs:complexContent>
      </xs:complexType>

      <xs:element name="BriefRecord" type="csw:BriefRecordType" substitutionGroup="csw:AbstractRecord"/>
      <xs:complexType name="BriefRecordType" final="#all">
          <xs:annotation>
            <xs:documentation xml:lang="en">
                This type defines a brief representation of the common record
                format.  It extends AbstractRecordType to include only the
                dc:identifier and dc:type properties.
            </xs:documentation>
          </xs:annotation>
          <xs:complexContent>
            <xs:extension base="csw:AbstractRecordType">
                <xs:sequence>
                  <xs:element ref="dc:identifier" minOccurs="1" maxOccurs="unbounded"/>
                  <xs:element ref="dc:title" minOccurs="1" maxOccurs="unbounded"/>
                  <xs:element ref="dc:type" minOccurs="0"/>
                  <xs:element ref="ows:BoundingBox" minOccurs="0" maxOccurs="unbounded"/>
                </xs:sequence>
            </xs:extension>
          </xs:complexContent>
      </xs:complexType>

      <xs:element name="SummaryRecord" type="csw:SummaryRecordType" substitutionGroup="csw:AbstractRecord"/>
      <xs:complexType name="SummaryRecordType" final="#all">
          <xs:annotation>
            <xs:documentation xml:lang="en">
                This type defines a summary representation of the common record
                format.  It extends AbstractRecordType to include the core
                properties.
            </xs:documentation>
          </xs:annotation>
          <xs:complexContent>
            <xs:extension base="csw:AbstractRecordType">
                <xs:sequence>
                  <xs:element ref="dc:identifier" minOccurs="1" maxOccurs="unbounded"/>
                  <xs:element ref="dc:title" minOccurs="1" maxOccurs="unbounded"/>
                  <xs:element ref="dc:type" minOccurs="0"/>
                  <xs:element ref="dc:subject" minOccurs="0" maxOccurs="unbounded"/>
                  <xs:element ref="dc:format" minOccurs="0" maxOccurs="unbounded"/>
                  <xs:element ref="dc:relation" minOccurs="0" maxOccurs="unbounded"/>
                  <xs:element ref="dct:modified" minOccurs="0" maxOccurs="unbounded"/>
                  <xs:element ref="dct:abstract" minOccurs="0" maxOccurs="unbounded"/>
                  <xs:element ref="dct:spatial" minOccurs="0" maxOccurs="unbounded"/>
                  <xs:element ref="ows:BoundingBox" minOccurs="0" maxOccurs="unbounded"/>
                </xs:sequence>
            </xs:extension>
          </xs:complexContent>
      </xs:complexType>

      <xs:element name="Record" type="csw:RecordType" substitutionGroup="csw:AbstractRecord"/>
      <xs:complexType name="RecordType" final="#all">
          <xs:annotation>
            <xs:documentation xml:lang="en">
                This type extends DCMIRecordType to add ows:BoundingBox;
                it may be used to specify a spatial envelope for the
                catalogued resource.
            </xs:documentation>
          </xs:annotation>
          <xs:complexContent>
            <xs:extension base="csw:DCMIRecordType">
                <xs:sequence>
                  <xs:element name="AnyText" type="csw:EmptyType" minOccurs="0" maxOccurs="unbounded"/>
                  <xs:element ref="ows:BoundingBox" minOccurs="0" maxOccurs="unbounded"/>
                </xs:sequence>
            </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="EmptyType"/>
    </xs:schema></csw:SchemaComponent><csw:SchemaComponent schemaLanguage="XMLSCHEMA" targetNamespace="http://schema.mapcolonies.com/raster"><xs:schema targetNamespace="http://schema.mapcolonies.com" elementFormDefault="qualified" version="1.0.0" id="mcraster">

      <xs:import namespace="http://www.opengis.net/cat/csw/3.0" schemaLocation="../../../../core/schemas/ogc/cat/csw/3.0/cswAll.xsd"/>
      <xs:import namespace="http://www.opengis.net/ows/2.0" schemaLocation="../../../../core/schemas/ogc/ows/2.0/owsAll.xsd"/>

      <xs:element name="id"/>
      <xs:element name="footprint"/>
      <xs:element name="boundingBox" type="ows:BoundingBoxType"/>
      <xs:element name="type"/>
      <xs:element name="classification"/>
      <xs:element name="product_id"/>
      <xs:element name="product_name"/>
      <xs:element name="product_version"/>
      <xs:element name="product_type"/>
      <xs:element name="description"/>
      <xs:element name="srs"/>
      <xs:element name="srs_name"/>
      <xs:element name="geometry" type="ows:BoundingBoxType"/>
      <xs:element name="creation_date"/>
      <xs:element name="update_date"/>
      <xs:element name="ingestion_date"/>
      <xs:element name="insert_date"/>
      <xs:element name="source_start_date"/>
      <xs:element name="source_end_date"/>
      <xs:element name="resolution"/>
      <xs:element name="horizontal_accuracy_ce_90"/>
      <xs:element name="sensor_type"/>
      <xs:element name="region"/>
      <xs:element name="footprint_geojson"/>
      <xs:element name="rms"/>
      <xs:element name="scale"/>
      <xs:element name="layer_polygon_parts"/>
      <xs:element name="included_in_bests"/>
      <xs:element name="discretes"/>


      <xs:element name="MCRasterRecord" type="mc:MCRasterRecord"/>


      <xs:complexType name="MCRasterRecord" final="#all">
          <xs:annotation>
            <xs:documentation xml:lang="en">
                This type extends DCMIRecordType to add ows:BoundingBox;
                it may be used to specify a spatial envelope for the
                catalogued resource.
            </xs:documentation>
          </xs:annotation>
          <xs:complexContent>
            <xs:extension base="csw30:DCMIRecordType">
                <xs:sequence>
                  <xs:element ref="mc:id"/>
                  <xs:element ref="mc:footprint"/>
                  <xs:element ref="mc:boundingBox"/>
                  <xs:element ref="mc:type"/>
                  <xs:element ref="mc:classification"/>
                  <xs:element ref="mc:productId"/>
                  <xs:element ref="mc:productName"/>
                  <xs:element ref="mc:productVersion"/>
                  <xs:element ref="mc:productType"/>
                  <xs:element ref="mc:description"/>
                  <xs:element ref="mc:SRS"/>
                  <xs:element ref="mc:SRSName"/>
                  <xs:element ref="mc:creationDateUTC"/>
                  <xs:element ref="mc:updateDateUTC"/>
                  <xs:element ref="mc:ingestionDate"/>
                  <xs:element ref="mc:insertDate"/>
                  <xs:element ref="mc:imagingTimeBeginUTC"/>
                  <xs:element ref="mc:imagingTimeEndUTC"/>
                  <xs:element ref="mc:maxResolutionDeg"/>
                  <xs:element ref="mc:maxResolutionMeter"/>
                  <xs:element ref="mc:minHorizontalAccuracyCE90"/>
                  <xs:element ref="mc:sensors"/>
                  <xs:element ref="mc:region"/>
                  <xs:element ref="mc:RMS"/>
                  <xs:element ref="mc:scale"/>
                  <xs:element ref="mc:layerPolygonParts"/>
                  <xs:element ref="mc:includedInBests"/>
                  <xs:element ref="mc:discretes"/>
                  <xs:element ref="mc:productBBox"/>
                </xs:sequence>
            </xs:extension>
          </xs:complexContent>
      </xs:complexType>
    </xs:schema></csw:SchemaComponent></csw:DescribeRecordResponse>
```
</details>

## GetRecords
**GetRecords** request allows to query the catalogue metadata records specifying a query in OCG Filter or CQL languages.

Requests examples:
```
GET request

http://localhost:8080/csw?request=GetRecordById&service=CSW&version=2.0.2&elementSetName=full&id=413d8ff2-ef27-4a5f-8cf6-964a807745d1
```

```
url: http://localhost:8080/csw

body:
  <?xml version="1.0" encoding="UTF-8"?>
  <csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" version="2.0.2">
    <csw:Query typeNames="csw:Record">
      <csw:Constraint version="1.1.0">
        <Filter xmlns="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">
          <PropertyIsLike wildCard="%" singleChar="_" escape="\\">
            <PropertyName>AnyText</PropertyName>
            <Literal>%africa%</Literal>
          </PropertyIsLike>
        </Filter>
      </csw:Constraint>
    </csw:Query>
  </csw:GetRecords>
```