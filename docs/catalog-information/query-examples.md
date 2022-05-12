# Query Examples
The following section will help you understand how to interface with our Catalog.

> #### :information_source: Below examples will include "http://localhost:8080" as host url 
> Do not forget to change the url to our real host url
>
> ***[SUB-SYSTEM-TYPENAME]:***
> - `mc:MCRasterRecord`
> - `mc:MC3DRecord`
> - `mc:MCDEMRecord`
> ***[SUB-SYSTEM-MAIN-NAMESPACE]:***
> - `http://schema.mapcolonies.com/raster`
> - `http://schema.mapcolonies.com/3d`
> - `http://schema.mapcolonies.com/dem`

## GetCapabilities
How to Get server metadata with "GetCapabilities" request
```
GET request

http://localhost:8080/csw?request=GetCapabilities&service=CSW
```

## Query by field value
How to query the catalog by **specific property** and his **value**
```xml
POST request

Url:
http://localhost:8080/csw

Content-type:
application/xml

Request body:
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1" 
outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >
  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc">
        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\">
          
          <!-- ****** INSERT PROFILE FIELD NAME START ********************** -->
          <PropertyName>mc:productId</PropertyName>
          <!-- ****** INSERT PROFILE FIELD NAME END ********************** -->
          
          <!-- ****** INSERT PROFILE FIELD VALUE START ********************** -->
          <Literal>MAS_6_ORT</Literal>
          <!-- ****** INSERT PROFILE FIELD VALUE END ********************** -->
          
        </PropertyIsLike>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```
above example declare a query for `mc:productId` field in catalog and response with the full metadata of `MAS_6_ORT match` result.

`maxRecords` attribute in `<csw:GetRecords></csw:GetRecords>`element is equals to "1" means response will contain only 1 result.

`startPosition`  will display records from all result start from the first one to the `maxRecords` value
***(1 to 1 in example)***.

## Query by field ***like*** value
How to query the catalog by specific property to be like **wild-card** value
```xml
POST request

Url:
http://localhost:8080/csw

Content-type:
application/xml

Request body:
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="5"  startPosition="1" 
outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >
  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc">
        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\">
   
          <!-- ****** INSERT PROFILE FIELD NAME START ********************** -->
          <PropertyName>mc:productId</PropertyName>
          <!-- ****** INSERT PROFILE FIELD NAME END ********************** -->
          
          <!-- ****** INSERT PROFILE FIELD VALUE START ********************** -->
          <Literal>%MAS_6_ORT%</Literal>
          <!-- ****** INSERT PROFILE FIELD VALUE END ********************** -->
          
        </PropertyIsLike>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```
pay attention for the `%MAS_6_ORT%` in `<Literal></Literal>` element, **now contains "%" after and before the value**,

means CSW will look for every record that contains `MAS_6_ORT` value in `mc:productId` profile field

`maxRecords` equals to "5" means response will contain up to 5 results.

## Number of records
Get up to 5 records contains desired product version
```xml
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="5"  startPosition="1"  
outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >
  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc"> 
        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\">
   
          <!-- ****** INSERT PROFILE FIELD NAME START ********************** -->
          <PropertyName>mc:productVersion</PropertyName>
          <!-- ****** INSERT PROFILE FIELD NAME END ********************** -->
          
          <!-- ****** INSERT PROFILE FIELD VALUE START ********************** -->
          <Literal>4.0</Literal>
          <!-- ****** INSERT PROFILE FIELD VALUE END ********************** -->

        </PropertyIsLike>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```
another familiar example based on previous examples, just in that case we can see
`<PropertyName></PropertyName>` element contains `mc:productVersion` means we query catalog records by their product version.

in this specific example we will get up to 5 records that includes **`productVersion`** of **`4.0`**.

## Query by ***Greater Or Equal***
> #### :information_source: ingestionDate = the date field that records will be filtered by.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" startPosition="1" 
outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >
  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc"> 
        <PropertyIsGreaterThanOrEqualTo>

          <!-- ****** INSERT PROFILE FIELD NAME START ********************** -->
          <PropertyName>mc:ingestionDate</PropertyName>
          <!-- ****** INSERT PROFILE FIELD NAME END ********************** -->
          
          <!-- ****** INSERT PROFILE FIELD VALUE START ********************** -->
          <Literal>2020-09-03T00:00:01Z</Literal>
          <!-- ****** INSERT PROFILE FIELD VALUE END ********************** -->
     
        </PropertyIsGreaterThanOrEqualTo>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```
Response will contain up to 10 records (`maxRecords="10"`) that their ingestion date is Greater or Equal (**`<PropertyIsGreaterThanOrEqualTo></<PropertyIsGreaterThanOrEqualTo>`**) to the record ingestion date in catalog.

## Query by ***Less or Equal***
```xml
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1" 
outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >
  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc"> 
        <PropertyIsLessThanOrEqualTo>
          <PropertyName>mc:ingestionDate</PropertyName>
          <Literal>2022-09-03T00:00:01Z</Literal>
        </PropertyIsLessThanOrEqualTo>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```
Response will contain up to 10 records (maxRecords="10") that their ingestion date is Less or Equal (<PropertyIsLessThanOrEqualTo></<PropertyIsLessThanOrEqualTo>) to the record ingestion date in catalog.

## Query by ***multi*** fields
Use *`<And></And>`* element to includes 2 or more conditions for Query catalog by multi fields:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1" 
outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >
  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc">
      <And>        
        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\">
          <PropertyName>mc:productVersion</PropertyName>
          <Literal>4.0</Literal>
        </PropertyIsLike>
        <PropertyIsLessThanOrEqualTo>
          <PropertyName>mc:ingestionDate</PropertyName>
          <Literal>2022-09-03T00:00:01Z</Literal>
        </PropertyIsLessThanOrEqualTo>
      </And>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```
Response will contain up to 10 records (maxRecords="10") that includes product version `"4.0"` and their ingestion date is Less than the desired date.

## Query by ***BBOX***
```xml
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1" 
outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >
  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc">       
        <BBOX>
          <PropertyName>ows:BoundingBox</PropertyName>
            <gml:Envelope xmlns:gml="http://www.opengis.net/gml">
                <gml:lowerCorner>-180 -90</gml:lowerCorner>
                <gml:upperCorner>180 90</gml:upperCorner>
            </gml:Envelope>
          </BBOX>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```
Response will contain up to 10 records ('maxRecords="10"')  that their **BBOX** includes in the desired extent (in example:  -180, -190, 180, 90

## Query by ***BBOX*** and ***region***
```xml
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="10"  startPosition="1" 
outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="[SUB-SYSTEM-MAIN-NAMESPACE]" >
  <csw:Query typeNames="[SUB-SYSTEM-TYPENAME]">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc">
      <And>       
          <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\">
            <PropertyName>mc:region</PropertyName>
            <Literal>%ירדן%</Literal>
          </PropertyIsLike>
        <BBOX>
          <PropertyName>ows:BoundingBox</PropertyName>
            <gml:Envelope xmlns:gml="http://www.opengis.net/gml">
                <gml:lowerCorner>-180 -90</gml:lowerCorner>
                <gml:upperCorner>180 90</gml:upperCorner>
            </gml:Envelope>
          </BBOX>
      </And>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```
Response will contain up to 10 records ('maxRecords="10"') that their **BBOX includes  includes in the desired extent and their region is contains the word “ירדן”**  (`<Literal>%ירדן%</Literal>`)

## <!-- {docsify-ignore} -->