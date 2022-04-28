const productIdInput = document.querySelector('#productIdInput');
const applyProductId = document.querySelector('#applyLayerBtn');

const RASTER_CSW_SERVICE_URL = '';
const RASTER_TOKEN = '';
const tokenHeader = { 'X-API-KEY': RASTER_TOKEN };
const mapProxyBaseUrl = '';


// Setup Cesium viewer first.
const viewer = new Cesium.Viewer('cesiumContainer', { baseLayerPicker: false });

// Remove stock cesium's base layer
viewer.imageryLayers.remove(viewer.imageryLayers.get(0));

// Utilities
const getChildNodeByTagName = (nodeElement, tagName) => {
  const nodeChildrenArr = [...nodeElement.children];
  const childNode = nodeChildrenArr.find(child => child.tagName === tagName);

  return childNode;
}

const generateRectangle = (layerFootprint) => {
  return layerFootprint && Cesium.Rectangle.fromDegrees(...window.turf.bbox({type:'Feature', geometry: JSON.parse(layerFootprint ?? '{}')}));
}

const fetchAndParseXML = (url, options) => {
  return fetch(url, options)
        .then(res => res.text())
        .then(str => new DOMParser().parseFromString(str, 'text/xml'));
}

const constructAndApplyLayer = () => {

  const getRecordsXML = `<?xml version="1.0" encoding="UTF-8"?>
  <csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1000"  startPosition="1"  outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >
    <csw:Query typeNames="mc:MCRasterRecord">
     <csw:ElementSetName>full</csw:ElementSetName>
      <csw:Constraint version="1.1.0">
        <Filter xmlns="http://www.opengis.net/ogc">
          <PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\">
            <PropertyName>mc:productId</PropertyName>
            <Literal>${productIdInput.value}</Literal>
          </PropertyIsLike>
        </Filter>
      </csw:Constraint>
    </csw:Query>
  </csw:GetRecords>`;

  
  // STEP 1: Fetch raster csw using getRecords XML.
  fetchAndParseXML(RASTER_CSW_SERVICE_URL,{
    method: 'POST',
    body: getRecordsXML,
    headers: new Headers(tokenHeader)
  }).then(xmlDoc => {

    // STEP 2: Extract BBOX from response.
    const footprint = xmlDoc.children[0].children[1].getElementsByTagName('mc:footprint')[0].textContent;
    const rectangle = generateRectangle(footprint);
    
    // Extract layer's map proxy template url, Identifier and capabilities url from XML (document) response, for later use.
    const layerUrl = xmlDoc.children[0].children[1].querySelector('[scheme="WMTS_LAYER"]').textContent;
    const layerIdentifier = xmlDoc.children[0].children[1].querySelector('[scheme="WMTS_LAYER"]').attributes.name.textContent;
    const getCapabilitiesUrl = xmlDoc.children[0].children[1].querySelector('[scheme="WMS"]').textContent;

    const getLayerMetadataFromGetCapabilities = getCapabilitiesDoc => {
      const arr = [...getCapabilitiesDoc.children[0].children[2].querySelectorAll("Layer")];
    
      // Traversing through the layers from GetCapabilities, to find the one we're looking for by productId
    
      const desiredLayer = arr.find(layer => {
          const layerIdentifierValue = getChildNodeByTagName(layer, 'ows:Identifier').textContent;
    
          return layerIdentifierValue === layerIdentifier;
      })
      
      return desiredLayer;
     }
    
     const extractRequiredMetadataFromGetCapabilities = desiredLayer => {
      // Get additional layer metadata from GetCapabilities.
      const tileMatrixSet = getChildNodeByTagName(desiredLayer, 'TileMatrixSetLink').children[0].textContent;
      const layerStyle = getChildNodeByTagName(desiredLayer, 'Style').children[0].textContent;
      const layerFormat = getChildNodeByTagName(desiredLayer, 'Format').children.textContent;
    
      return { tileMatrixSet, layerStyle, layerFormat };
    }
    
    const setupImageryProviderAndApplyToViewer = layerAdditionalParams => {
      const {tileMatrixSet: tileMatrixSetID, layerFormat: format, layerStyle: style} = layerAdditionalParams;
    
      const provider = new Cesium.WebMapTileServiceImageryProvider({
        url: `${mapProxyBaseUrl}/wmts/${layerIdentifier}/${tileMatrixSetID}/{TileMatrix}/{TileCol}/{TileRow}.png`,
        headers: tokenHeader,
        style,
        format,
        tilingScheme: new Cesium.GeographicTilingScheme(),
        rectangle
      })
    
      viewer.imageryLayers.addImageryProvider(provider);
    }

    // STEP 3: GetCapabilities request.
    fetchAndParseXML(`${mapProxyBaseUrl}/service?REQUEST=GetCapabilities&SERVICE=WMTS`, {
      method: 'GET',
      headers: new Headers(tokenHeader)
    })
    // STEP 3.1: Get the desired layer from getCapabilities
    .then(getLayerMetadataFromGetCapabilities)
    // STEP 3.2: Extract layer's metadata from getCapabilities
    .then(extractRequiredMetadataFromGetCapabilities) 
     // STEP 4 + 5: Finally, build the provider with the retrieved metadata.
    .then(setupImageryProviderAndApplyToViewer)
    .catch((e) => {
        alert('Oops.. Something went wrong...');
        console.error("There was an error building the imagery provider. Error: ", e);
     })
  });
}

applyProductId.addEventListener('click', constructAndApplyLayer);


