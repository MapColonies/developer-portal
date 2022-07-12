const productIdForm = document.querySelector('form');
const productIdInput = document.querySelector('#productIdInput');
const applyProductId = document.querySelector('#applyLayerBtn');

const RASTER_CSW_SERVICE_URL = '<PYCSW-RASTER-SERVICE_URL>/csw';
const RASTER_TOKEN = '<API_KEY>';
const mapProxyBaseUrl = '<MAP_SERVER-RASTER-SERVICE_URL>';
const INJECTION_TYPE = '<INJECTION_TYPE>';

// according to defined B2B authentication principles HEADER or QUERYPARAM - Currently only QUERYPARAM is available
const getAuthObject = () => {
  const tokenProps = {};
  if (INJECTION_TYPE.toLowerCase() === 'header') {
    tokenProps.headers = {
      'X-API-KEY': RASTER_TOKEN
    };
  } else if (INJECTION_TYPE.toLowerCase() === 'queryparam') {
    tokenProps.queryParameters = {
      'token': RASTER_TOKEN
    };
  }
  return tokenProps;
}

const showLoaderContainer = (show) => {
  document.getElementById('loader').style.display = !show ? 'none' : '';
}

const showLoader = (show) => {
  showLoaderContainer(true);
  document.getElementById('loader_img').style.display = !show ? 'none' : '';
}

const showPointer = (show) => {
  document.getElementById('pointer').style.display = !show ? 'none' : '';
}


// Setup Cesium viewer first.
const viewer = new Cesium.Viewer('cesiumContainer', { 
  baseLayerPicker: false,
  sceneMode : Cesium.SceneMode.SCENE2D
});

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
  const {queryParameters, ...restOptions} = options;
  let queryParams= url.indexOf('?') > -1 ? '&' : '?';
  if(queryParameters){
    queryParams += new URLSearchParams(queryParameters);
  }
  return fetch(url + queryParams, restOptions)
        .then(res => res.text())
        .then(str => new DOMParser().parseFromString(str, 'text/xml'));
}

const constructAndApplyLayer = (e) => {
  e.preventDefault();

  showPointer(false);
  showLoader(true);

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

  /**********************************************************************/
  /* STEP 1: Fetch RASTER CSW record XML using GetRecords CSW operation */
  /**********************************************************************/
  fetchAndParseXML(RASTER_CSW_SERVICE_URL,{
    method: 'POST',
    body: getRecordsXML,
    /* Don't forget to include the authentication header or query param */
    ...getAuthObject()
  }).then(xmlDoc => {

    /**********************************************************************/
    /* STEP 2: Extract BBOX from catalog record XML.                      */
    /* Here used hardcoded/indexed extract values principles              */
    /* You can use any XML traverse tools/parsers                         */
    /**********************************************************************/
    const footprint = xmlDoc.children[0].children[1].getElementsByTagName('mc:footprint')[0].textContent;
    const rectangle = generateRectangle(footprint);
    
    /*********************************************************************************/
    /* STEP 3: Extract layer's "WMTS_LAYER" template url from <mc:links> collection, */
    /* Identifier and capabilities url from XML (document) response, for later use.  */
    /*********************************************************************************/
    const layerUrl = xmlDoc.children[0].children[1].querySelector('[scheme="WMTS_LAYER"]').textContent;
    const layerIdentifier = xmlDoc.children[0].children[1].querySelector('[scheme="WMTS_LAYER"]').attributes.name.textContent;
    const getCapabilitiesUrl = xmlDoc.children[0].children[1].querySelector('[scheme="WMTS"]').textContent;

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
        url: new Cesium.Resource({
          // TODO: should be used 'layerUrl'
          url: `${mapProxyBaseUrl}/wmts/${layerIdentifier}/${tileMatrixSetID}/{TileMatrix}/{TileCol}/{TileRow}.png`,
          /* Don't forget to include the authentication header or query param */
          ...getAuthObject()
        }),
        style,
        format,
        tilingScheme: new Cesium.GeographicTilingScheme(),
        rectangle
      })
    
      viewer.imageryLayers.addImageryProvider(provider);

      // flyTo added layer(optional), added just for convinience
      viewer.camera.flyTo({
        destination : rectangle
      });

      showLoaderContainer(false);
    }

    /*********************************************************************************/
    /* STEP 4: GetCapabilities request                                               */
    /* TODO: should be used 'getCapabilitiesUrl'                                     */
    /*********************************************************************************/
    fetchAndParseXML(`${mapProxyBaseUrl}/service?REQUEST=GetCapabilities&SERVICE=WMTS`, {
      method: 'GET',
      /* Don't forget to include the authentication header or query param */
      ...getAuthObject()
    })
    /*********************************************************************************/
    /* STEP 4.1: Get the desired layer from MAP_SERVER GetCapabilities               */
    /*********************************************************************************/
    .then(getLayerMetadataFromGetCapabilities)
    /*********************************************************************************/
    /* STEP 4.2: Extract layer's definition from MAP_SERVER GetCapabilities          */
    /*********************************************************************************/    
    .then(extractRequiredMetadataFromGetCapabilities) 
    /*********************************************************************************/
    /* STEP 5: Finally, build the CESIUM imageryProvider with the retrieved data.    */
    /*********************************************************************************/    
    .then(setupImageryProviderAndApplyToViewer)
    .catch((e) => {
      showLoader(false);
        alert('Oops.. Something went wrong...');
        console.error("There was an error building the imagery provider. Error: ", e);
     })
  })
  .catch((e) => {
    showLoader(false);
    productIdInput.setCustomValidity('No such layer.')
    productIdInput.reportValidity();
    console.error("There is no such catalog item. Error: ", e);
 });
}

productIdForm.addEventListener('submit', constructAndApplyLayer);
productIdInput.addEventListener('input', (e) => { e.target.setCustomValidity('') })


