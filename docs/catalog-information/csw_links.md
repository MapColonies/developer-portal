# Links of CSW catalog item

When querying PYCSW record(s) response XML **may** contain **`<mc:links>`** element(s) in following format (as example)

```xml
<mc:links scheme="WMTS_BASE" name="bluemarble_5km" description="">
  [MAP_SERVER_URL]/wmts
</mc:links>
<mc:links scheme="WMTS" name="bluemarble_5km" description="">
  [MAP_SERVER_URL]/wmts/1.0.0/WMTSCapabilities.xml"
</mc:links>
```

Different ***scheme/protocol*** values:

| **Scheme / protocol** | **Presence** | **Description** |
| ----------------- | ----------------- | ----------------- |
| XYZ_LAYER | AnyOf | Direct layer consumption URL |
| 3D_LAYER | AnyOf | Direct layer consumption URL |
| TERRAIN_QMESH | AnyOf | Direct terrian provider consumption URL |
| WMTS | AnyOf | Layer WMTS capabilities link |
| WMTS_BASE | AnyOf | Layer WMTS base link ({tiles_server}/wmts) |
| WMS | AnyOf | Layer WMS capabilities link |
| WMS_BASE | AnyOf | Layer WMS base link ({tiles_server}/wms) |
| WCS | AnyOf | Layer WCS capabilities link |
| THUMBNAIL_S | Optional | Layer SMALL thumbnail image link |
| THUMBNAIL_M | Optional | Layer MEDIUM thumbnail image link |
| THUMBNAIL_L | Optional | Layer LARGE  thumbnail image link |
| LEGEND_DOC  | Optional | Layer legend in doc format (PDF, etc.) |
| LEGEND_IMG  | Optional | Layer legend in doc format (PNG, JPEG, etc.) |
| LEGEND  | Optional | Layer legend as object for custom presentation |

**Note:** some links are supported only for specific domains, some links are available only for specific records

