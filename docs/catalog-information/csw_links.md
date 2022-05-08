# Links of CSW catalog item

When querying PYCSW record(s) response XML **may** contain **`<mc:links>`** element(s) in following format (as example)

```xml
<mc:links scheme="WMTS_LAYER" name="bluemarble_5km" description="">
  [MAP_SERVER_URL]/wmts/bluemarble_5km/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png  
</mc:links>
```

Different ***scheme/protocol*** values:

| **Scheme / protocol** |**Description** |
| ----------- | ----------- |
| WMTS_LAYER | Direct layer consumption URL |
| XYZ_LAYER | Direct layer consumption URL |
| 3D_LAYER | Direct layer consumption URL |
| WMTS | Layer WMTS capabilities link |
| WMS | Layer WMS capabilities link |
| WCS | Layer WCS capabilities link |
| THUMBNAIL_S | Layer SMALL thumbnail image link |
| THUMBNAIL_M | Layer MEDIUM thumbnail image link |
| THUMBNAIL_L | Layer LARGE  thumbnail image link |