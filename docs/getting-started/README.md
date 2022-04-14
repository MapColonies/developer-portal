# Getting Started
<figure>
    <img src="/assets/images/libot_logo.png" style="display: block;margin-left: auto;margin-right: auto;width: 40%;">
</figure>

Welcome to the Map Colonies Wiki space. 
Here you will find the technical documentation for the Map Colonies project. Enjoy!

## Introduction
The Map Colonies system is responsible for the management and serving of mapping products. 
Mapping products can be originated from various sources and may include Orthophoto discrete layers, 3D models, DTM/DSM data, etc. The catalog holds the metadata of each product with references to the map content files. It enables management and the search of existing products. 
The catalog exposes an API, as well as a Web UI.  

## Raster
Orthophoto images are generated from satellite imagery or aerial photography. In the case of aerial photography, the raw frames are matched and resolved into photo blocks. Then, they and geometrically corrected (using DTM), anchored to well-known points, visually improved, and assembled into a homogeneous orthophoto mosaic, which can be combined of multiple files. 
A **discrete layer** represents a geographical region and is composed of multiple orthophoto mosaics with the same resolution, color scheme, and classification. A discrete layer can be included in the best **mosaic**, a universal map which is a fusion of multiple discrete layers.
<figure>
    <img src="/assets/images/raster_mosaic.jpg" style="display: block;margin-left: auto;margin-right: auto;width: 40%;">
</figure>

## 3D
The process of creating photo-realistic 3D models is based on photogrammetry, which is the technique of taking multiple overlapping aerial photographs and deriving measurements from them to create 3D models of objects or scenes. This is done by external systems which generate 3D models in one of the following formats: 
* OSGB (legacy) 
* 3D Tiles 

Each of these models represent a specific geographic region, building, facility or any other object.

## DEM (DTM / DSM)
A **Digital Elevation Model** is a representation of elevation data that maps the surface of the earth, above a certain datum. There are essentially 2 types of DEM:

* The **Digital Terrain Model (DTM)** represents the raw elevation of the bare earth ground without considering any over-ground features like plants and buildings.

* The **Digital Surface Model (DSM)** represents the elevation of the earth's surface that a remote sensing system will first meet (2.5D “blanket”). Thus, the resulting DSM includes the elevation of the bare earth terrain plus the natural (e.g. trees, shrubs) and artificial man-made features (e.g. buildings, bridges).

<figure>
    <img src="/assets/images/dtm_dsm.png" style="display: block;margin-left: auto;margin-right: auto;width: 90%;">
</figure>
 
DEM can be represented as raster or vector data:

* **Raster** DEM is represented as a 2D grid of uniform sized squares, where each square in the grid has a value that represents the height of the corresponding geographical point (also known as heightmap). This is actually a “2.5D” model, because there is only one height measure for each surface point. Raster DEM can be stored in a number of file formats but is mostly delivered as **GeoTIFF**, a format which in addition to the data contains the size of the raster and the position in geo coordinates, plus projection information.

* **Vector** DEM is a representation of a continuous surface consisting a mesh of triangular facets. The most common format for Vector DEM is **Triangulated Irregular Network (TIN)**, which contains irregularly distributed nodes and lines (vertices) with X,Y,Z coordinates arranged in a network of non-overlapping triangles. These are meshes that contain only vertices where they define meaningful change in surface height. Vector DEM tiles are rendered more efficiently for displaying it in a 3D view.

DEM can be rendered as 2D (raster) or 3D maps:

* In **2D** view, the heights can be rendered as colors (based on some coloring scheme) or displayed as contour lines with hill shades.

* In **3D** view, the terrain surface is visualized in an oblique three-dimensional perspective, using raster tiles or TIM mesh tiles. It can be augmented with a satellite imagery to make it look realistic.

## <!-- {docsify-ignore} -->