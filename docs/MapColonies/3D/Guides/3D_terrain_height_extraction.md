---
id: mesh-height-extraction
slug: mesh-height-extraction
title: Terrain Height Extraction
tags:
 - terrain
 - mesh
 - 3D
 - guide
 - dem
---

## Terrain Height Extraction 
The following section will help you understand how to extract **terrain height** value at a given position from a terrain provider using an example.

:::info
In order to set a **terrain provider**, see [here](/docs/MapColonies/3D/Guides/3d-getting-started).
:::

### Cesium

:::info
**The minimum required version for cesium is v84.**
:::

```javascript
// Query the terrain height of two Cartographic positions
const positions = [
  Cesium.Cartographic.fromDegrees(86.925145, 27.988257),
  Cesium.Cartographic.fromDegrees(87.0, 28.0)
];
void Cesium.sampleTerrainMostDetailed(
  viewer.terrainProvider,
  positions
).then((updatedPositions) => {
  // positions[0].height and positions[1].height have been updated.
  // updatedPositions is just a reference to positions.
  console.log(updatedPositions);
  ...
});
```