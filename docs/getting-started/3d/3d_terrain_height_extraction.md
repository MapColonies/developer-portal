## Terrain Height Extraction <!-- {docsify-ignore} -->
The following section will help you understand how to extract **terrain height** value at a given position from a terrain provider using an example.

> :information_source: In order to set a **terrain provider**, see [here](/getting-started/3d/3d_step-by-step.md).

### Cesium

> :information_source: **The minimum required version for cesium is v84.**

```javascript
// Query the terrain height of two Cartographic positions
let positions = [
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

<br/>
<br/>
<table style=" width: 100%; display: table !important;">
    <tbody>
        <tr>
            <td align="left">
                <a href="#/getting-started/3d/3d_step-by-step">Previous (Step-by-step)</a>
            </td>
            <td align="right"></td>
        </tr>
    </tbody>
</table>
