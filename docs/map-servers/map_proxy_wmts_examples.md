# WMTS Usage Examples

## ***How to consume WMTS ?*** <!-- {docsify-ignore} -->
```<MAP_SERVER-RASTER_URL>/wmts/{Layer}/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png```

**{Layer}** - the name of the layer (ex. ***Ortho_25cm***)

**{TileMatrixSet}** - define the grid name of the layer,
> :information_source: **How to get Grid name?** Grid name (`TileMatrixSet`) can be reached by **GetCapabilities** response [Raster - Get Started / Step 4](/getting-started/raster/raster_step-by-step.md?id=step-4)
<figure>
    <img src="./assets/images/map_proxy_getcap_ortho_example.png" style="display: block;margin-left: auto;margin-right: auto;width: 100%;">
</figure>

See `<TileMatrixSetLink>` element for supported Grid names.

**{TileMatrix}** - define the zoom level (Z)

**{TileCol}** - define the column (X)

**{TileRow}** - define the row (Y)

Final request example:
```<MAP_SERVER-RASTER_URL>/wmts/bluemarble-1.0-OrthophotoHistory/newGrids/2/0/2.png```
Will bring a requested tile image

> :bangbang: **Do not change** the “/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png” with custom values while consuming in applications - see examples below.
> MapProxy  automatically relates to those keys and parse the values “on the fly”.