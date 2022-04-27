const fetchCswRaster = () => {
  const RASTER_CSW_SERVICE_URL = '';

  const RASTER_TOKEN = '';

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

  return fetch(RASTER_CSW_SERVICE_URL, {
    method: 'POST',
    body: getRecordsXML,
    headers: new Headers({
      'X-API-KEY': RASTER_TOKEN
    })
  })
        .then(res => res.text())
        .then(str => new DOMParser().parseFromString(str.replace(/mc:/gi,'').replace(/ows:/gi,'').replace(/csw:/gi,''), 'text/xml'))
        .then(xml => xml.evaluate('//*[contains(local-name(), "MCRasterRecord")]', xml));
};

// fetchCswRaster().then(data => console.log(data));



const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain()
});
// Add Cesium OSM Buildings, a global 3D buildings layer.
const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());
// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-15.0)
  }
});
