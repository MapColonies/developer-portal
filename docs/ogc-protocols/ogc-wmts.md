# WMTS - Web Map Tile Service
[WMTS OGC standard](https://www.ogc.org/standards/wmts) :globe_with_meridians:

[OGC e-learning](http://opengeospatial.github.io/e-learning/wmts/text/operations.html) :globe_with_meridians:

| Operation | Description |
| ------ | ------- |
| GetCapabilities | Retrieves metadata about the service, including supported operations and parameters, and a list of the available layers. |
| GetTile | Retrieves a map image for a specified area and content. |
| GetFeatureInfo (optional) | Retrieves the underlying data, including geometry and attribute values, for a pixel location on a map. |

## GetCapabilities
A WMTS server responding to a **GetCapabilities** request returns metadata about the service, including supported operations and parameters, and a list of the available layers.

An example of a GetCapabilities request is:
```
GET request

https://ows.terrestris.de/osm/service?
REQUEST=GetCapabilities&
SERVICE=WMTS
```

## GetTile
In response to a **GetTile** KVP request, or under a resource-oriented style, a Tile resource that complies with the requested parameters would be returned. A correctly formulated request will bring a tile requested image.
```
GET request

http://cite.deegree.org/deegree-webservices-3.4-RC3/services/wmts100?
service=WMTS&
request=GetTile&
version=1.0.0&
Layer=cite&
Style=default&
Format=image/png&
TileMatrixSet=InspireCrs84Quad&
TileMatrix=17&
TileRow=4&
TileCol=4
```