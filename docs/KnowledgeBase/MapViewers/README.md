---
id: map-viewers-overview
slug: map-viewers-overview
title: Map viewers
sidebar_position: 1
tags:
 - map-viewers
 - viewers
 - overview
---

## What is a map viewer / component?

A map viewer is a visual component to help us display `geographic` data such as raster, vector, 3D and DEM. It does all of the heavy-lifting in fetching, calculating and displaying the data correctly.

There are many features that a map viewer could implement, please read more about the different libraries and features [here](/docs/KnowledgeBase/MapViewers/map-components.md).

## Choosing a map viewer

There are so many map viewers out there, how do you choose the best one for your needs?
Here we attempt to help you make this decision.

Disclaimer:
Everything written in this knowledge base is based on our research of selected well known map viewers. We do not attempt to recommend one as the best, but give you all the information we believe you need in order to make a better decision based on your use case.
Some of the viewers may be incompatible with some of our data or services and will require additional adjustments in order to consume them (for some it may not be possible at all).

So lets get started!

## Most commonly used map viewers

### Cesium 🆓

A complete platform for 3D geospatial data – handling everything from optimization to visualization to analytics. CesiumJS is an open source JavaScript library for world-class 3D mapping.

Read more [here](https://cesium.com/learn/cesiumjs-learn/) and try out the [playground](https://sandcastle.cesium.com/).

### Leaflet 🆓

Designed with simplicity, performance and usability in mind. It works efficiently across all major desktop and mobile platforms, can be extended with lots of plugins, has a beautiful, easy to use and well-documented API and a simple, readable source code that is a joy to contribute to.

Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 42 KB of JS, it has all the mapping features most developers ever need.

Read more [here](https://leafletjs.com/reference.html), see some [examples](https://leafletjs.com/examples.html) and try out the [playground](https://codesandbox.io/s/leaflet-playground-8riog).

### OpenLayers 🆓

An open-source JavaScript library for displaying map data in web browsers as slippy maps. It provides an API for building rich web-based geographic applications similar to Google Maps and Bing Maps.

Read more [here](https://openlayers.org/en/latest/apidoc/), see some [examples](https://openlayers.org/en/latest/examples/) and try out the [playground](https://codesandbox.io/examples/package/openlayers).

### ArcGIS JS SDK 💰

ArcGIS is a family of client, server and online geographic information system (GIS) software developed and maintained by Esri.

Use ArcGIS Maps SDK for JavaScript to build compelling web apps that unlock your data’s potential with interactive user experiences and stunning 2D and 3D visualizations.

Read more [here](https://developers.arcgis.com/javascript/latest/), see some [examples](https://developers.arcgis.com/javascript/latest/sample-code/) and try out the [playground](https://developers.arcgis.com/javascript/3/samples/playground/).

### iTowns 🆓

ITowns is a javascript framework for 3D geographic data visualisation. It can display a wide range of data such as ortho-images, Digital Elevation Models (DEM) or 3D models.

ITowns is based on Three.js, which is a javascript library that implements WebGL to render sophisticated 3D Geometry on a webpage.

Read more [here](https://www.itowns-project.org/) and see some [examples](http://www.itowns-project.org/itowns/examples/index.html).

### Mapbox GL JS 🆓 + 💰

A client-side JavaScript library for building web maps and web applications with Mapbox's modern mapping technology. You can use Mapbox GL JS to display Mapbox maps in a web browser or client, add user interactivity, and customize the map experience in your application.

Read more [here](https://docs.mapbox.com/mapbox-gl-js/guides/), see some [examples](https://docs.mapbox.com/mapbox-gl-js/example/) and try out the [playground](https://docs.mapbox.com/playground/).

### deck.gl 🆓

A GPU-powered framework for visual exploratory data analysis of large datasets.

deck.gl APIs are designed to reflect the reactive programming paradigm. Whether using Vanilla JS or the React interface, it can handle efficient WebGL2/WebGPU rendering under heavy data load.

While deck.gl works standalone without a base map, it plays nicely with your favorite base map libraries such as Google Maps, Mapbox, ArcGIS, MapLibre, and more. Where the base map library permits, deck.gl may interleave with 3D map layers to create seamless visualizations.

Read more [here](https://deck.gl/docs) and see some [examples](https://deck.gl/examples).

### Maplibre-gl-js 🆓

A TypeScript library that uses WebGL to render interactive maps from vector tiles in a browser. The customization of the map comply with the MapLibre Style Spec. It is part of the MapLibre ecosystem, with a counterpart for Android, iOS and other platforms called MapLibre Native.

Read more [here](https://maplibre.org/maplibre-gl-js/docs/API/) and see some [examples](https://maplibre.org/maplibre-gl-js/docs/examples/).
