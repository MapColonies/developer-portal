---
id: mesh-min-max-height-extraction
slug: mesh-min-max-height-extraction
title: Terrain Min-Max Height Extraction
tags:
 - terrain
 - mesh
 - 3D
 - guide
 - dem
---

## Terrain Min-Max Height Extraction
The following example shows how to extract **min/max terrain height** value from a terrain provider at a selected area, area is defined by a bounding polygon.

:::info
In order to set a **terrain provider**, see [here](/docs/MapColonies/3D/Guides/3d-getting-started).
:::

### Cesium

:::info
**The minimum required version for cesium is v84.**
:::

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

// Takes a set of features, calculates the bbox of all input features
// and returns a bounding box
const bbox = turf.bbox(polygon); // bbox extent in minX, minY, maxX, maxY order
const cellSide = 1.0; // distance between points (in units)
const options = {
  units: 'meters', // used in calculating cellSide, can be: degrees, radians, miles, or kilometers (default)
  mask: polygon // if passed a Polygon or MultiPolygon, the grid Points will be created only inside it
};

// Creates a Point grid from a bounding box, FeatureCollection or Feature.
const pointGrid = turf.pointGrid(bbox, cellSide, options); // grid of points
const pointGridCoordinates = pointGrid.features.map(f => f.geometry.coordinates);

console.log(pointGridCoordinates); // 2,359 points inside the polygon

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
:::warning
**Above example is based on `Pseudo code`, you will have to adapt it in your own application to make it work.**
**Please note:<br/>Time increases with the amount of sampling points.<br/>Number of requests does not change however due to sampling points density which happen to correspond with the same tiles.<br/>This example was tested against Cesium World Terrain over the internet.<br/>Need to consider amount of sampling points against the resolution of the source height product.**
:::

|**Distance between points(cellSide)** | **Number of Sampling Points** | **Number of Requests** | **Time to Sample (seconds)** |
---- | ---- | ---- | ----
30.0 | 1 | 1 | 0.53
20.0 | 7 | 4 | 0.56
15.0 | 9 | 2 | 0.59
1.0 | 2,359 | 4 | 0.98
0.5 | 9,427 | 4 | 1.15
0.4 | 14,748 | 4 | 1.35
0.3 | 26,225 | 4 | 1.59
0.2 | 58,891 | 4 | 2.88
