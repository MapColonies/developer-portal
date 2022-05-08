const show3DModelBtn = document.querySelector('#show3DModelBtn');

const CSW_3D_SERVICE_URL = 'https://pycsw-3d-3d-catalog-pycsw-route-3d-dev.apps.v0h0bdx6.eastus.aroapp.io/csw';
const RASTER_CSW_SERVICE_URL = 'https://pycsw-qa-pycsw-route-raster.apps.v0h0bdx6.eastus.aroapp.io/csw';
const RASTER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicmVzb3VyY2VUeXBlcyI6WyJyYXN0ZXIiLCJkZW0iLCJ2ZWN0b3IiLCIzZCJdLCJpYXQiOjE1MTYyMzkwMjJ9.kidhXiB3ihor7FfkaduJxpJQXFMJGVH9fH7WI6GLGM0';
const tokenHeader = { 'X-API-KEY': RASTER_TOKEN };
const mapProxyBaseUrl = 'https://mapproxy-qa-mapproxy-route-raster.apps.v0h0bdx6.eastus.aroapp.io';

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

const setBtnActive = () => {
  show3DModelBtn.disabled = false;
  showLoader(false);
  showPointer(true);
}


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
            <Literal>bluemarble</Literal>
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
    headers: new Headers(tokenHeader)
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
        url:new Cesium.Resource({
          // TODO: should be used 'layerUrl'
          url: `${mapProxyBaseUrl}/wmts/${layerIdentifier}/${tileMatrixSetID}/{TileMatrix}/{TileCol}/{TileRow}.png`,
          headers: tokenHeader,
        }),
        style,
        format,
        tilingScheme: new Cesium.GeographicTilingScheme(),
        rectangle
      })
    
      viewer.imageryLayers.addImageryProvider(provider);
    }

    /*********************************************************************************/
    /* STEP 4: GetCapabilities request                                               */
    /* TODO: should be used 'getCapabilitiesUrl'                                     */
    /*********************************************************************************/
    fetchAndParseXML(`${mapProxyBaseUrl}/service?REQUEST=GetCapabilities&SERVICE=WMTS`, {
      method: 'GET',
      headers: new Headers(tokenHeader)
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
        alert('Oops.. Something went wrong...');
        console.error("There was an error building the imagery provider. Error: ", e);
     })
  })
  .catch((e) => {
    console.error("There is no such catalog item. Error: ", e);
  })
  .finally(() => {
    setBtnActive();
  });
}

/*********************************************************************************/
/*                                 3D EXAMPLE                                    */
/*********************************************************************************/  
const constructAndApply3DModel = () => {
  const getRecordsXML3D = `<?xml version="1.0" encoding="UTF-8"?>
  <csw:GetRecords
    outputFormat="application/xml"
    outputSchema="http://schema.mapcolonies.com/3d"
    resultType="results"
    service="CSW"
    version="2.0.2"
    startPosition="1"
    maxRecords="200"
    xmlns:mc="http://schema.mapcolonies.com/3d"
    xmlns:csw="http://www.opengis.net/cat/csw/2.0.2"
    xmlns:ogc="http://www.opengis.net/ogc">
        <csw:Query typeNames="csw:Record">
            <csw:ElementSetName>full</csw:ElementSetName>
            <csw:Constraint version="1.1.0">
                <ogc:Filter>
                    <ogc:PropertyIsEqualTo>
                        <ogc:PropertyName>mc:classification</ogc:PropertyName>
                        <ogc:Literal>5</ogc:Literal>
                    </ogc:PropertyIsEqualTo>
                </ogc:Filter>
            </csw:Constraint>
        </csw:Query>
    </csw:GetRecords>`;

  /**********************************************************************/
  /* STEP 1: Fetch RASTER CSW record XML using GetRecords CSW operation */
  /**********************************************************************/
  fetchAndParseXML(CSW_3D_SERVICE_URL,{
    method: 'POST',
    body: getRecordsXML3D,
    headers: tokenHeader,
  })
  .then(xmlDoc => {
    const modelMetadata = xmlDoc.children[0].children[1].children[0];
    const modelLink = modelMetadata.getElementsByTagName('mc:links')[0].textContent;
    const modelBBox = modelMetadata.getElementsByTagName('mc:productBBox')[0].textContent.split(',');
   
    const tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: modelLink,    
      })  
    );

    viewer.flyTo(tileset).then(function(result){
      if(result) {
        viewer.selectedEntity = tileset;
      }
    });
  })
  .catch(e => {
    console.error("There was an error fetching the model.. Error: ", e);
  })
  .finally(() => {
    showLoaderContainer(false);
  })
}

show3DModelBtn.addEventListener('click', constructAndApply3DModel);

constructAndApplyLayer();
