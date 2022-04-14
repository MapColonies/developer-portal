# Catalog Information
Map Colonies uses OGC CSW server implementation written in Python, named [PYCSW](https://docs.pycsw.org/en/latest/).

Each sub-system (Raster, 3D, DEM) has his own CSW service and deals with respective entities metadata(**pycsw profile**).

PYCSW profile definition includes: <!-- {docsify-ignore-all} -->
1. Entity **typename** `[ex. mc:MCDEMRecord]`
2. Profile `main_namespace [ex. http://schema.mapcolonies.com/dem]`
3. Profile specific fields prefixed with ‘ **mc:** ’ (Map Colonies) `[ex. mc:productId]`

Those profile attributions/definitions must be used when composing CSW operations API requests.