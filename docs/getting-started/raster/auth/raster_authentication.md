# Raster Authentication

> :heavy_exclamation_mark: Don't forget to read the main authentication page [here](/docs/auth/auth.md)

On web clients, when using a Map Component such as Cesium for example, you will need to supply your token in a custom **header** `x-api-key` or **query parameter** `token` as such:
> :heavy_exclamation_mark: **Important:** only **query parameter** `token` is currently supported

```javascript
const wmts = new Cesium.WebMapTileServiceImageryProvider({
  url: new Cesium.Resource({
    url: "<RASTER-RASTER-SERVING-SERVICE_URL>/wmts/<layer_name>/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.<LAYER_FORMAT>", // supported LAYER_FORMAT can be found in 'raster step-by-step' guide (step 4).
    // headers: {
    //   "x-api-key": "<token>",
    // },
    /*************************************************************************/
    /* authentication defined via query string params */
    /*************************************************************************/
    queryParameters: {
      "token": "<token>",
    },
  }),
  layers: "<layer_name>",
  style: "<style>",
  format: "<layer_format>",
  tileMatrixSetID: "<grid_name>",
  tilingScheme: new Cesium.GeographicTilingScheme()
});

const viewer = new Cesium.Viewer("cesiumcontainer", {
  imageryProvider: wmts,
  sceneMode: Cesium.SceneMode.COLUMBUS_VIEW,
  mapProjection: new Cesium.GeographicProjection(),
  baseLayerPicker: false,
});
```
Following should be replaced:
- `<token>`
- `<layer_name>`
- `<style>`
- `<grid_name>`

Result on Map Component when the token isn’t supplied (all requests get status code **403**):
<figure>
    <img src="./assets/images/mapproxy_cesium_no_token.png" width=700>
</figure>

When the token is supplied:
<figure>
    <img src="./assets/images/mapproxy_cesium_with_token.png" width=700>
</figure>

Related: <br/>
- CESIUM documentation regarding WMTS layer - [WebMapTileServiceImageryProvider](https://cesium.com/learn/cesiumjs/ref-doc/WebMapTileServiceImageryProvider.html?classFilter=We) :globe_with_meridians:

- CESIUM documentation regarding WMTS layer URL (Resource | String) as [Resource](https://cesium.com/learn/cesiumjs/ref-doc/Resource.html) :globe_with_meridians:



<br/>
<br/>
<table style=" width: 100%; display: table !important;">
    <tbody>
        <tr>
            <td align="left">
                <a href="#/getting-started/raster/raster_services">Previous (Services)</a>
            </td>
            <td align="right">
                <a href="#/catalog-information/v1_0/raster_profile">Next (Catalog profile)</a>
            </td>
        </tr>
    </tbody>
</table>
