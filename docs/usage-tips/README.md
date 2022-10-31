# Usage Tips

## WMTS layer **rectangle**
It is important to specify the extent/rectangle as BBOX derived from layer's footprint in order to properly consume the existing tiles for the layer, it will improve layer on-map performance.<br/>
This **rectangle** can limit the visible portion of the imagery provider.

## OpenLayers WMTS layer from Capabilities
There is an easy way to consume WMTS layer from GetCapabilities response with OpenLayers, and even create the configuration manually. See [WMTS Layer from Capabilities](https://openlayers.org/en/latest/examples/wmts-layer-from-capabilities.html) :globe_with_meridians:

## Tiling scheme - Cesium
Pay attention to define **2x1** tiling scheme (WGS84) and _not 1x1_ at client side (Cesium) in order to consume the layers properly

## Query catalog by Product Type **(mc:productType)**
Search for **OrthophotoBest** or **RasterVectorBest** layers, other layers types by specific need (ex. “Orthophoto“).
**OrthophotoBest** and **RasterVectorBest** layers might be updated _behind the scene_, invalidate and hard refresh browser cache if layer looks different from other users.

See valid values:
- [Raster](/catalog-information/v1_0/raster_profile.md?id=producttype)
- [3D](/catalog-information/v1_0/3D_profile.md?id=producttype)
- [DEM](/catalog-information/v1_0/dem_profile.md?id=producttype)