---
id: dem-terrain-provider
slug: info
title: Terrain Provider
description: Service to provider DTM surface provider for cesium
tags:
  - dem
  - API
  - elevation
  - dtm
  - height
  - coordinate
---

# Quantized Mesh Provider (Cesium.js Terrain Provider)
1. Understanding Quantized Mesh
Quantized Mesh constitutes a highly efficient binary format, meticulously engineered for the purpose of streaming three-dimensional terrain elevation and normal data across networked environments. This specification, developed under the auspices of the Cesium team, directly addresses the inherent complexities associated with the transmission of voluminous terrain datasets through the implementation of a sophisticated quantization schema. This methodology demonstrably reduces data payload while rigorously preserving the fidelity of visual representation.

* In contradistinction to conventional terrain formats predicated upon heightmap methodologies, Quantized Mesh directly encodes triangular mesh data. This foundational architectural decision confers a plurality of salient advantages:

* Data Efficiency: Quantization effects a reduction in the precision of vertex coordinates (X, Y, Z) and associated normals to a predetermined number of bits, typically within the range of 12 or 16-bit unsigned integers. The consequence of this process is a substantial diminution in file sizes, thereby facilitating accelerated download times and a concomitant reduction in network bandwidth consumption.

* Progressive Level-of-Detail (LOD) Streaming: The format inherently supports a progressive loading paradigm. This capability empowers client-side applications to dynamically solicit and render terrain tiles of progressively higher resolution as the user's viewpoint converges upon a specific geographical area, thereby optimizing rendering performance and enhancing the interactive user experience.

* Integrated Normals: Quantized Mesh tiles possess the optional capacity to incorporate pre-computed vertex normals. The inclusion of these normals is deemed critical for the enablement of accurate per-vertex lighting and shading, an indispensable prerequisite for the rendering of visually verisimilar three-dimensional terrain.

* Water Masking Capability: The specification encompasses provisions for water masks. These masks precisely delineate aquatic bodies within a given terrain tile, thereby facilitating the accurate rendering of water surfaces and their interactive relationship with the contiguous terrestrial environment.


2. Anatomy of a Quantized Mesh Tile
A Quantized Mesh tile is structurally defined as a binary data block, meticulously organized into several discrete sections to facilitate efficient parsing and subsequent rendering operations:

* Header: This initial segment contains essential metadata pertaining to the specific tile. Crucial information encompassed herein includes the tile's bounding box, delineated in geodetic coordinates (comprising longitude, latitude, and height range), the minimum and maximum terrain heights present within the tile, and the aggregate count of vertices.

* Vertex Data: This foundational section stores the quantized positions (X, Y, Z coordinates) of all vertices, expressed relative to the tile's localized coordinate system. These positions are typically subjected to quantization to a 16-bit unsigned integer range, which subsequently undergoes de-quantization on the client-side.

* Triangle Data (Indices): This section defines the topological connectivity of the vertices, thereby forming the triangular facets of the terrain mesh. This data typically employs variable-length encoding, such as zig-zag encoding, to further augment compression efficacy.

* Edge Indices: This critical section specifies the indices of those vertices situated along the tile's four peripheral edges. These edge indices are of paramount importance for ensuring the seamless stitching and continuous integration between adjacent terrain tiles, thereby precluding the occurrence of visual discontinuities or gaps.

* Normal Data (Optional): Should the terrain dataset incorporate per-vertex normals, this section accommodates their quantized representations. These normals are employed by the rendering engine for the execution of precise lighting calculations, thereby contributing significantly to the visual verisimilitude of the terrain.

* Water Mask (Optional): This section, if present, contains a binary mask serving to identify areas encompassed by water within the confines of the tile. This mask is subsequently utilized by Cesium.js for the application of appropriate water rendering effects.

* Metadata (Optional): This flexible section permits the inclusion of additional, arbitrary metadata specific to the terrain provider or the dataset itself.

The process of quantization involves the mapping of original floating-point geographic coordinates and heights to a compact range of integer values. These integer values are then transmitted with efficiency. Upon receipt, the client-side rendering engine executes the inverse operation, de-quantizing these integers back into floating-point numbers, which are then suitable for three-dimensional rendering.

3. Integrating a Quantized Mesh Provider with Cesium.js
Cesium.js provides robust, inherent support for the consumption of Quantized Mesh data through its Cesium.CesiumTerrainProvider class. This class intelligently manages the entire lifecycle of terrain data, encompassing the request for tiles, the parsing of binary data, and the efficient rendering within the three-dimensional globe environment.

For the successful configuration of a CesiumTerrainProvider, the primary requisite is the Uniform Resource Locator (URL) of a server endpoint that strictly adheres to the Cesium Terrain Server specification for the provision of Quantized Mesh tiles.

Step-by-Step Configuration Guide:
Dependency Inclusion (Cesium.js): It is imperative that the Cesium.js library and its associated Cascading Style Sheets (CSS) are correctly incorporated into the HyperText Markup Language (HTML) document. This objective may be achieved through the referencing of the Cesium Content Delivery Network (CDN) or by means of local hosting of the library.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <title>Cesium Quantized Mesh Integration</title>
    <!-- Include Cesium.js library -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Cesium.js"></script>
    <!-- Include Cesium widget styles -->
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
    <style>
        /* Ensure the Cesium container occupies the full viewport */
        html, body, #cesiumContainer {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div id="cesiumContainer"></div>
    <script>
        // The Cesium application logic shall be initialized within this script block.
    </script>
</body>
</html>
```

Cesium Viewer Initialization: The Cesium.Viewer class is to be instantiated. This class functions as the primary entry point for the display of the interactive three-dimensional globe and for the management of its various constituent components.

// The Cesium Viewer is to be initialized with the designated container element.
```js
const viewer = new Cesium.Viewer('cesiumContainer');
```
CesiumTerrainProvider Instantiation: An instance of Cesium.CesiumTerrainProvider is to be created. The constructor for this class necessitates the base Uniform Resource Locator (URL) of the Quantized Mesh terrain server. Optional parameters may be supplied for the request of supplementary data, such as vertex normals and water masks.

```js
// A new CesiumTerrainProvider instance is to be created.
const terrainProvider = new Cesium.CesiumTerrainProvider({
    url: 'https://your.custom.terrain.server/path/to/tiles/', // CRITICAL: This URL must be replaced with the actual URL of the custom Quantized Mesh terrain server.
    requestVertexNormals: false,          // Optional: The fetching of vertex normals is to be enabled for enhanced lighting.
    requestWaterMask: false               // Optional: The fetching of water masks is to be enabled for accurate water rendering.
});
```

## Critical Considerations Pertaining to the url Parameter:

The url parameter must unequivocally designate the root directory of the terrain tile service. The CesiumTerrainProvider internally constructs the complete path to individual tiles (e.g., level/x/y.terrain) based upon this foundational URL.


Assigning the Terrain Provider: The newly created terrainProvider instance is to be assigned to the terrainProvider property of the viewer.scene object. This action directs Cesium.js to utilize the specified Quantized Mesh data source for the rendering of the globe's terrain.

```js
// The custom terrain provider is to be assigned to the viewer's scene.
viewer.terrainProvider = terrainProvider;
```

Comprehensive Integration Example:
The following HTML example provides a complete and executable demonstration of the integration of a Quantized Mesh terrain provider within a Cesium.js application:

:::warning
**Authentication must be integrated in order to communicate with the terrain provider service.**<br/>
**See the principles [here](/docs/MapColonies/authentication)**<br/>
Refer for here for cesium query / header token configuration [here](https://cesium.com/learn/ion-sdk/ref-doc/Resource.html)
:::

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <title>Cesium Quantized Mesh Integration Example</title>
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
    <style>
        html, body, #cesiumContainer {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div id="cesiumContainer"></div>
    <script>
        // The Cesium Viewer is to be initialized.
        const viewer = new Cesium.Viewer('cesiumContainer', {
            // Optional: The default imagery layer picker may be disabled if manual imagery management is intended.
            baseLayerPicker: false,
            // Optional: An initial flat ellipsoid terrain provider may be utilized to mitigate
            // visual flickering should the custom terrain load asynchronously.
            terrainProvider: new Cesium.EllipsoidTerrainProvider()
        });

        // The CesiumTerrainProvider instance is to be created, referencing the custom Quantized Mesh server.
        // CRITICAL: The placeholder 'https://your.custom.terrain.server/path/to/tiles/' must be substituted with the actual URL
        // of the Quantized Mesh terrain data server.
        const terrainProvider = new Cesium.CesiumTerrainProvider({
            url: 'https://your.custom.terrain.server/path/to/tiles/',
            requestVertexNormals: true,          // Vertex normals are to be requested for enhanced lighting and shading.
            requestWaterMask: true               // Water masks are to be requested for accurate water rendering effects.
        });

        // The configured terrain provider is to be assigned to the Cesium viewer's scene.
        viewer.terrainProvider = terrainProvider;

        // Optional: The camera may be programmatically directed to a specific geographic location
        // to immediately showcase the loaded terrain.
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 100000.0), // Longitude, Latitude, Altitude (in meters)
            orientation: {
                heading: Cesium.Math.toRadians(0.0),    // Orientation towards North
                pitch: Cesium.Math.toRadians(-30.0),    // Downward pitch of 30 degrees
                roll: Cesium.Math.toRadians(0.0)        // Absence of roll
            },
            duration: 3 // Duration of the flight in seconds
        });

        // Robust error handling for terrain loading is to be implemented.
        // The errorEvent is dispatched if issues arise during the fetching or parsing of terrain tiles.
        terrainProvider.errorEvent.addEventListener(function(error) {
            console.error('An error was encountered during terrain loading:', error);
            // In a production environment, consideration should be given to displaying a user-friendly message
            // or attempting to utilize a fallback terrain provider.
        });

        // Optional: A listener may be added for the event signifying the readiness of the terrain provider.
        // This is beneficial for executing actions only subsequent to the commencement of terrain data loading.
        terrainProvider.readyPromise.then(function() {
            console.log('CesiumTerrainProvider has attained readiness, and terrain loading has commenced.');
        }).otherwise(function(error) {
            console.error('CesiumTerrainProvider failed to achieve readiness:', error);
        });
    </script>
</body>
</html>
```
## Conclusion
Quantized Mesh is established as a highly efficacious and efficient format for the streaming of three-dimensional terrain data, serving as a foundational element for high-performance geospatial applications. Through the meticulous utilization of the Cesium.CesiumTerrainProvider class, developers are afforded the capability to seamlessly integrate and visualize extensive terrain datasets originating from their proprietary custom terrain servers within their Cesium.js applications. This integration facilitates the creation of rich, interactive, and visually compelling three-dimensional globes featuring realistic terrain rendering, thereby significantly augmenting the user's geospatial exploration experience.