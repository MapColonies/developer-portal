# Raster: Get Started
## Developer Guide step-by-step <!-- {docsify-ignore} -->
The following guide will help you understand, ***Step-by-step*** the best practices of how to work with the Map Colonies Catalog and how to consume mapping products in ***dynamic way*** (materials might be changed or added)

Lets get started…

## Step 1:
Query **RASTER CSW catalog** service to find item(s) according to desired filter (example are here).

Assuming you enquire the desired mapping Product ID from our catalog.

Query the catalog by the ‘mc:productId’ field to get the product metadata:
```
POST Request

url:
'<PYCSW-RASTER-SERVICE_URL>/csw'

body (XML):
<?xml version="1.0" encoding="UTF-8"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1"  outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >
  <csw:Query typeNames="mc:MCRasterRecord">
   <csw:ElementSetName>full</csw:ElementSetName>
    <csw:Constraint version="1.1.0">
      <Filter xmlns="http://www.opengis.net/ogc">
        <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\">
          <PropertyName>mc:productId</PropertyName>
          <!-- ****** INSERT LAYER LAYER ID START ********************** -->
          <Literal>bluemarble_5km</Literal>
          <!-- ****** INSERT LAYER LAYER ID END ************************ -->
        </PropertyIsLike>
      </Filter>
    </csw:Constraint>
  </csw:Query>
</csw:GetRecords>
```
