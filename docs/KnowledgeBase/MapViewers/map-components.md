---
id: map-viewers-features
slug: map-viewers-features
title: Map viewers Features
sidebar_position: 2
tags:
  - map-viewers
---

In this page we list some features that you may be interested in and show which map viewers support them.

## Map viewers reviewed in this page

Cesium - [Docs](https://cesium.com/learn/cesiumjs-learn/), [Playground](https://sandcastle.cesium.com/)

Leaflet - [Docs](https://leafletjs.com/reference.html), [Examples](https://leafletjs.com/examples.html), [Playground](https://codesandbox.io/s/leaflet-playground-8riog)

OpenLayers - [Docs](https://openlayers.org/en/latest/apidoc/), [Examples](https://openlayers.org/en/latest/examples/), [Playground](https://codesandbox.io/examples/package/openlayers)

EsriJS - [Docs](https://developers.arcgis.com/javascript/latest/), [Examples](https://developers.arcgis.com/javascript/latest/sample-code/), [Playground](https://developers.arcgis.com/javascript/3/samples/playground/)

iTowns - [Docs](https://www.itowns-project.org/), [Examples](http://www.itowns-project.org/itowns/examples/index.html)

Mapbox - [Docs](https://docs.mapbox.com/mapbox-gl-js/guides/), [Examples](https://docs.mapbox.com/mapbox-gl-js/example/), [Playground](https://docs.mapbox.com/playground/)

deck.gl - [Docs](https://deck.gl/docs), [Examples](https://deck.gl/examples)

Maplibre-gl-js - [Docs](https://maplibre.org/maplibre-gl-js/docs/API/), [Examples](https://maplibre.org/maplibre-gl-js/docs/examples/)

## Projections

If you don't know what a `projection` is, please read more [here](/docs/KnowledgeBase/terms#mapping), or on [wikipedia 🌐](https://en.wikipedia.org/wiki/Map_projection).

| **Viewer** | **EPGS:4326** | **EPSG:3857** | **Supported projections** | **Can reproject** | **Notes** |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Cesium | ✅ | ✅ | [Projections](https://cesium.com/learn/cesiumjs/ref-doc/MapProjection.html) | ✅ | |
| Leaflet | ✅ | ✅ | [Projections](https://leafletjs.com/reference.html#projection) | ❌ | |
| OpenLayers | ✅ | ✅ | [Projections](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html) | ✅ | Supports all EPSG |
| EsriJS | ✅ | ✅ | [Projections](https://pro.arcgis.com/en/pro-app/latest/help/mapping/properties/list-of-supported-map-projections.htm) | ✅ | Supports all EPSG |
| iTowns | ✅ | ❌ | [Projections](https://www.itowns-project.org/itowns/docs/tutorials/Fundamentals.html) | | |
| Mapbox v1 | ❌ | ✅ | [Projections](https://docs.mapbox.com/mapbox-gl-js/guides/projections/) | | |
| Mapbox v2 | ➖ Not tested yet go to projection https://docs.mapbox.com/mapbox-gl-js/api/map/ | ✅ | [Projections](https://docs.mapbox.com/mapbox-gl-js/guides/projections/) | ❌ | |
| deck.gl | ❌ | ✅ | [Projections](https://deck.gl/docs/developer-guide/views) | | |
| Maplibre-gl-js | ❌ | ✅ | | | |

## Raster

### Supported data types and protocols

| **Viewer** | **WMS** | **Can read WMS capabilities** | **WMTS** | **Can read WMTS capabilities** | **Tile Layer** | **GeoTiff** | **COG** |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Cesium | ✅ | ❌ | ✅ | ❌ | ✅ | | |
| Leaflet | ✅ | ❌ | ✅ | ➖ Possible with package or TileLayer Hack | ✅ | | |
| OpenLayers | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| EsriJS | ✅ | | ✅ | ✅ | | |
| iTowns | ✅ | | ✅ | ❌ | | |
| Mapbox v1 | ✅ | | | | | |
| Mapbox v2 | ✅ | | | | | |
| deck.gl | ✅ | | ➖ With package or TileLayer Hack | | | |
| Maplibre-gl-js | ✅ | | ➖ Through templating | | | |

### Features

| **Viewer** | **Bounds** | **Image Bands** | **Features** |
| ----------- | ----------- | ----------- | ----------- |
| Cesium | ✅ (By defining the layer's rectangle) | ➖ Supports opacity (Alpha) | ✅ GPUable |
| Leaflet | ❌ | ➖ Supports opacity (Alpha) | ✅ GPUable (only via CSS animations) |
| OpenLayers | ✅ (BBOX extent) | ✅ | ✅ Preload tiles <br/> ✅ GPUable |
| EsriJS | ✅ (BBOX extent) | ➖ Supports opacity (Alpha) | |
| iTowns | | ❌ | ✅ Immersive view (Street view) <br/> ✅ GPUable |
| Mapbox v1 | | | ✅ GPUable |
| Mapbox v2 | | | ✅ GPUable |
| deck.gl | | | ✅ GPUable |
| Maplibre-gl-js | ✅ (Array of numbers) | ➖ Supports opacity (Alpha) | ✅ GPUable |

## 3D

| **Viewer** | **3D Tiles** | **I3S** | **Point cloud** | **Features** |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Cesium | ✅ | ✅ | ✅ | - Control sun and atmosphere<br/>- Custom lightings |
| Leaflet | ❌ | ❌ | ❌ | |
| OpenLayers | ❌ | ❌ | ❌ | |
| EsriJS | ❌ | ✅ | ✅ | Custom lightings |
| iTowns | ✅ | ❌ | ✅ | Sun simulation |
| Mapbox v1 | ❌ | ❌ | ❌ | |
| Mapbox v2 | ❌ | ❌ | ❌ | |
| deck.gl | ✅ | ✅ | ✅ | Custom lightings |
| Maplibre-gl-js | | | | |

## DEM

### Terrain

| **Viewer** | **QMesh** | **Raster DEM** | **Skyline terrain** |
| ----------- | ----------- | ----------- | ----------- |
| Cesium | ✅ | ❌ | ✅ (With plugin) |
| Leaflet | ❌ | ❌ | |
| OpenLayers | ❌ | ❌ | |
| EsriJS | ❌ | ➖ (ESRI format) | |
| iTowns | ❌ | ✅ | |
| Mapbox v1 | ❌ | | |
| Mapbox v2 | ❌ | ✅ | |
| deck.gl | ❌ | ✅ | |
| Maplibre-gl-js | | ✅ | |
