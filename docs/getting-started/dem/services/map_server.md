# Map Server :world_map: 

The DEM map service uses the [WMTS](/ogc-protocols/ogc-wmts.md) and [WCS](/ogc-protocols/ogc-wcs.md) protocols which are a READ-ONLY.
Those are standard protocols for serving pre-rendered or run-time computed georeferenced map tiles or DEM data over the Internet.

It provides facilities for searching and retrieving raster layers data with the `GetCapabilities` and `GetTile` operations, all other operations are invalid.
For the full capabilities provided by the service see [GetCapabilities](#getcapabilities)


## GetCapabilities
A WMTS server responding to a **GetCapabilities** request returns metadata about the service, including supported operations and parameters, and a list of the available layers.

An example of a GetCapabilities request is:
```
GET request

https://ows.terrestris.de/osm/service?
REQUEST=GetCapabilities&
SERVICE=WMTS
```
