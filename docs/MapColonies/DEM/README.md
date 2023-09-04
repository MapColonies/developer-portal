---
id: DEM-overview
slug: dem-overview
title: DEM
sidebar_position: 1
tags:
 - DEM
 - overview
---

## DEM (DTM / DSM)
A **Digital Elevation Model** is a representation of elevation data that maps the surface of the earth, above a certain datum. There are essentially 2 types of DEM:

* The **Digital Terrain Model (DTM)** represents the raw elevation of the bare earth ground without considering any over-ground features like plants and buildings.

* The **Digital Surface Model (DSM)** represents the elevation of the earth's surface that a remote sensing system will first meet (2.5D “blanket”). Thus, the resulting DSM includes the elevation of the bare earth terrain plus the natural (e.g. trees, shrubs) and artificial man-made features (e.g. buildings, bridges).

<figure>
    <img src={require("/img/dtm_dsm.png").default} style={{"display":"block","marginLeft":"auto","marginRight": "auto","width":"90%"}} />
</figure>

DEM can be represented as raster or vector data:

* **Raster** DEM is represented as a 2D grid of uniform sized squares, where each square in the grid has a value that represents the height of the corresponding geographical point (also known as heightmap). This is actually a “2.5D” model, because there is only one height measure for each surface point. Raster DEM can be stored in a number of file formats but is mostly delivered as **GeoTIFF**, a format which in addition to the data contains the size of the raster and the position in geo coordinates, plus projection information.

* **Vector** DEM / Quanitized Mesh is a representation of a continuous surface consisting a mesh of triangular facets. The most common format for Vector DEM is **Triangulated Irregular Network (TIN)**, which contains irregularly distributed nodes and lines (vertices) with X,Y,Z coordinates arranged in a network of non-overlapping triangles. These are meshes that contain only vertices where they define meaningful change in surface height. Vector DEM tiles are rendered more efficiently for displaying it in a 3D view.
<figure>
    <img src={require("/img/terrain_tin.png").default} style={{"display": "block","marginLeft": "auto","marginRight": "auto","width":"90%"}} />
</figure>

DEM can be rendered as 2D (raster) or 3D maps:

* In **2D** view, the heights can be rendered as colors (based on some coloring scheme) or displayed as contour lines with hill shades.

* In **3D** view, the terrain surface is visualized in an oblique three-dimensional perspective, using raster tiles or TIN mesh tiles. It can be augmented with a satellite imagery to make it look realistic.

<figure>
    <img src={require("/img/terrain_on_raster.png").default} style={{"display": "block","marginLeft": "auto","marginRight": "auto","width": "90%"}} />
</figure>
