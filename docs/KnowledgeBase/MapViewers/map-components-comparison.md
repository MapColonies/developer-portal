---
id: map-viewers-comparison
slug: map-viewers-comparison
title: Map viewers comparison
sidebar_position: 2
tags:
  - map-viewers
  - map-components
  - cesium
  - leaflet
  - openlayers
  - arcgis
  - itowns
  - mapbox
  - deck.gl
  - maplibre
---

In this page we list some features that you may be interested in and show which map viewers support them.

:::caution
Not all mentioned features are supported by MapColonies.
To see supported features please browse the documentation.
:::

## Projections and Coordinate Systems

:::danger
The only supported `Coordinate System` in our project is `WGS84` (`EPSG:4326`) with a `tiling scheme` of `1x2`.
:::

:::info
If you don't know what a `Coordinate System` or `projection` is, you can find the defenition [here](../terms#mapping), or on [wikipedia 🌐](https://en.wikipedia.org/wiki/Map_projection).
:::

| **Viewer** | **EPGS:4326** | **EPSG:3857** | **Supported projections** | **Can reproject** | **Notes** |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Cesium | ✅ | ✅ | [Projections](https://cesium.com/learn/cesiumjs/ref-doc/MapProjection.html) | ✅ | |
| Leaflet | ✅ | ✅ | [Projections](https://leafletjs.com/reference.html#projection) | ❌ | |
| OpenLayers | ✅ | ✅ | [Projections](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html) | ✅ | Supports all EPSG |
| ArcGIS JS SDK | ✅ | ✅ | [Projections](https://pro.arcgis.com/en/pro-app/latest/help/mapping/properties/list-of-supported-map-projections.htm) | ✅ | Supports all EPSG |
| iTowns | ✅ | ❌ | [Projections](https://www.itowns-project.org/itowns/docs/tutorials/Fundamentals.html) | | |
| Mapbox v1 | ❌ | ✅ | [Projections](https://docs.mapbox.com/mapbox-gl-js/guides/projections/) | | |
| Mapbox v2 | ➖ Not tested yet | ✅ | [Projections](https://docs.mapbox.com/mapbox-gl-js/guides/projections/) | ❌ | |
| deck.gl | ❌ | ✅ | [Projections](https://deck.gl/docs/developer-guide/views) | | |
| Maplibre-gl-js | ❌ | ✅ | | | |

## Raster

### Supported data types and protocols

| **Viewer** | **WMS** | **Can read WMS capabilities** | **WMTS** | **Can read WMTS capabilities** | **Tile Layer** | **GeoTiff** | **COG** |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Cesium | ✅ | ❌ | ✅ | ❌ | ✅ | | |
| Leaflet | ✅ | ❌ | ✅ | ➖ Possible with package or TileLayer Hack | ✅ | | |
| OpenLayers | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ArcGIS JS SDK | ✅ | | ✅ | ✅ | ✅ | | |
| iTowns | ✅ | | ✅ | ❌ | ✅ | | |
| Mapbox v1 | ✅ | | | | | | |
| Mapbox v2 | ✅ | | | | | | |
| deck.gl | ✅ | | ➖ With package or TileLayer Hack | | | | |
| Maplibre-gl-js | ✅ | | ➖ Through templating | | | | |

### Features

| **Viewer** | **Bounds** | **Image Bands** | **Alpha** | **GPU** | **Features** |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Cesium | ✅ | ❌ | ✅ | ✅ | |
| Leaflet | ❌ | ❌ | ✅ | ✅ | |
| OpenLayers | ✅ | ✅ | | ✅ | Preload tiles |
| ArcGIS JS SDK | ✅ | ❌ | ✅ | ✅ | |
| iTowns | | ❌ | | ✅ | Immersive view (Street view) |
| Mapbox v1 | | | | ✅ | |
| Mapbox v2 | | | | ✅ | |
| deck.gl | | | | ✅ | |
| Maplibre-gl-js | ✅ | ❌ | ✅ | ✅ | |

:::info
Image bands means that the map viewer let's us control the RGB scales of the displayed layers.
:::

## 3D

| **Viewer** | **3D Tiles** | **I3S** | **Point cloud** | **Features** |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Cesium | ✅ | ✅ | ✅ | - Control sun and atmosphere<br/>- Custom lightings |
| Leaflet | ❌ | ❌ | ❌ | |
| OpenLayers | ❌ | ❌ | ❌ | |
| ArcGIS JS SDK | ❌ | ✅ | ✅ | Custom lightings |
| iTowns | ✅ | ❌ | ✅ | Sun simulation |
| Mapbox v1 | ❌ | ❌ | ❌ | |
| Mapbox v2 | ❌ | ❌ | ❌ | |
| deck.gl | ✅ | ✅ | ✅ | Custom lightings |
| Maplibre-gl-js | | | | |

## DEM

| **Viewer** | **QMesh** | **Raster DEM** | **Skyline terrain** |
| ----------- | ----------- | ----------- | ----------- |
| Cesium | ✅ | ❌ | ✅ (With plugin) |
| Leaflet | ❌ | ❌ | |
| OpenLayers | ❌ | ❌ | |
| ArcGIS JS SDK | ❌ | ➖ (ESRI format) | |
| iTowns | ❌ | ✅ | |
| Mapbox v1 | ❌ | | |
| Mapbox v2 | ❌ | ✅ | |
| deck.gl | ❌ | ✅ | |
| Maplibre-gl-js | | ✅ | |

## Vector

### Supported data types and protocols

| **Viewer** | **WFS** | **GeoJSON** | **Features** | **Drawing** |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Cesium | ❌ No native support but feasible | ✅ | ✅ | ✅ |
| Leaflet | ❌ No native support but feasible | ✅ | ✅ 2D<br/>❌ 3D | ✅ |
| OpenLayers | ✅ | ✅ | ✅ 2D<br/>❌ 3D<br/>✅ OpenLayers symbology<br/>✅ Mapbox symbology adapter | ✅ With complex symbology |
| ArcGIS JS SDK | ✅ | ✅ | | |
| iTowns | ✅ | ✅ | ✅ 2D<br/>✅ 2.5D<br/>❌ 3 | ✅ Simple symbolog |
| Mapbox v1 | | ✅ | ✅ 2D<br/>✅ 2.5D<br/>❌ 3 | ✅ With complex symbolog |
| Mapbox v2 | | ✅ | ✅ 2D<br/>✅ 2.5D<br/>❌ 3 | ✅ With complex symbolog |
| deck.gl | ❌ | ✅ | | |
| Maplibre-gl-js | | | | |

### Vector Tiles

| **Viewer** | **Query** | **Symbology** | **OGC Vector Tiles** |
| ----------- | ----------- | ----------- | ----------- |
| Cesium | ❌ | ❌ | ❌ |
| Leaflet | ➖ With [plugins](https://leafletjs.com/plugins.html#vector-tiles) | | ❌ |
| OpenLayers | ✅ | ❌ | ✅ |
| ArcGIS JS SDK | ✅ | ✅ | ❌ |
| iTowns | ✅ | ❌ | ❌ |
| Mapbox v1 | ✅ | ✅ But for v1 | ❌ |
| Mapbox v2 | ✅ | ✅ | ❌ |
| deck.gl | ✅ | ❌ | ❌ |
| Maplibre-gl-js | | ✅ | |

:::info
OGC added `vector tiles` support in their [OGC Tiles API 🌐](https://ogcapi.ogc.org/tiles/) (still in it's early stages).<br/>
Read more about [clients supporting Tiles API 🌐](https://github.com/opengeospatial/ogcapi-tiles/blob/master/implementations.adoc#clients).
:::
