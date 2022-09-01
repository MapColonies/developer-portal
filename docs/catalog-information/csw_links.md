# Links of CSW catalog item

When querying PYCSW record(s) response XML **may** contain **`<mc:links>`** element(s) in following format (as example)

```xml
<mc:links scheme="WMTS_LAYER" name="bluemarble_5km" description="">
  [MAP_SERVER_URL]/wmts/{TileMatrixSet}/{TileMatrix}/{TileMatrix}/{TileCol}/{TileRow}.png
</mc:links>
```

Different ***scheme/protocol*** values:

| **Scheme / protocol** | **Presence** | **Description** |
| ----------------- | ----------------- | ----------------- |
| WMTS_LAYER | AnyOf | Direct layer consumption URL |
| XYZ_LAYER | AnyOf | Direct layer consumption URL |
| 3D_LAYER | AnyOf | Direct layer consumption URL |
| TERRAIN_QMESH | AnyOf | Direct terrian provider consumption URL |
| WMTS | AnyOf | Layer WMTS capabilities link |
| WMS | AnyOf | Layer WMS capabilities link |
| WCS | AnyOf | Layer WCS capabilities link |
| THUMBNAIL_S | Optional | Layer SMALL thumbnail image link |
| THUMBNAIL_M | Optional | Layer MEDIUM thumbnail image link |
| THUMBNAIL_L | Optional | Layer LARGE  thumbnail image link |
| LEGEND_DOC  | Optional | Layer legend in doc format (PDF, etc.) |
| LEGEND_IMG  | Optional | Layer legend in doc format (PNG, JPEG, etc.) |
| LEGEND  | Optional | Layer legend as object for custom presentation |

**Note:** some links are supported only for specific domains, some links are available only for specific records

