## Terrain Min-Max Height Extraction <!-- {docsify-ignore} -->
The following example shows how to extract **min/max terrain height** value from a terrain provider at a selected area, area is selected by drawing a bounding polygon.

> :information_source: In order to set a **terrain provider**, see [here](/getting-started/3d/3d_step-by-step.md).

### Cesium

> :information_source: **The minimum required version for cesium is v84.**

```javascript
const polygon = turf.polygon([
  [
    [-72.37353086471558, 42.32481709325035],
    [-72.3738956451416, 42.324594989789134],
    [-72.3735523223877, 42.324436343979656],
    [-72.37387418746948, 42.32430942704402],
    [-72.37363815307616, 42.32405559240466],
    [-72.37391710281372, 42.32388108049599],
    [-72.37363815307616, 42.32367483852534],
    [-72.37352013587952, 42.32375416244021],
    [-72.37370252609253, 42.32385728338004],
    [-72.37343430519104, 42.32408732179058],
    [-72.37361669540404, 42.32429356240905],
    [-72.37331628799438, 42.324428411678674],
    [-72.373605966568, 42.3246108543481],
    [-72.37338066101074, 42.32473777067564],
    [-72.37353086471558, 42.32481709325035]
  ]
]);

// Takes a set of features, calculates the bbox of all input features, and returns a bounding box.
const bbox = turf.bbox(polygon); // bbox extent in minX, minY, maxX, maxY order
const cellSideMeter = 1.0; // distance between points, in units
const options = {
  units: 'meters', // used in calculating cellSide, can be degrees, radians, miles, or kilometers (default)
  mask: polygon // if passed a Polygon or MultiPolygon, the grid Points will be created only inside it
};

// Creates a Point grid from a bounding box, FeatureCollection or Feature.
const pointGrid = turf.pointGrid(bbox, cellSideMeter, options); // grid of points
const pointGridCoordinates = pointGrid.features.map(f => f.geometry.coordinates);

console.log(pointGridCoordinates); // 2359 points inside the polygon

pointGridCoordinates.forEach(p => {
  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(p[0], p[1]),
    point: {
      color: Cesium.Color.fromRandom(),
      pixelSize: 5,
      heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
    }
  });
});
const positions = pointGridCoordinates.map(p => Cesium.Cartographic.fromDegrees(p[0], p[1]));
void Cesium.sampleTerrainMostDetailed(
  viewer.terrainProvider,
  positions
).then((updatedPositions) => {
  // Calculate which coordinate has min/max height
  ...
});
```

<br/>
<br/>
<table style=" width: 100%; display: table !important;">
    <tbody>
        <tr>
            <td align="left">
                <a href="#/getting-started/3d/3d_terrain_height_extraction">Previous (Terrain Height Extraction)</a>
            </td>
            <td align="right"></td>
        </tr>
    </tbody>
</table>
