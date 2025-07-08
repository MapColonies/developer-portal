---
id: raster-overview
slug: overview
title: Raster
sidebar_position: 1
tags:
 - raster
 - overview
---

## Raster Overview
Orthophoto images are generated from satellite imagery or aerial photography. In the case of aerial photography, the raw frames are matched and resolved into photo blocks. Then, they and geometrically corrected (using DTM), anchored to well-known points, visually improved, and assembled into a homogeneous orthophoto mosaic, which can be combined of multiple files.
A **discrete layer** represents a geographical region and is composed of multiple orthophoto mosaics with the same resolution, color scheme, and classification. A discrete layer can be included in the best **mosaic**, a universal map which is a fusion of multiple discrete layers.
<figure>
    <img src={require("/img/raster_mosaic.jpg").default} style={{"display":"block","marginLeft":"auto","marginRight":"auto","width":"40%"}}/>
</figure>


## Terms

Term | Description
:--- | :---
**Raster Geodetic Datum**  | World Geodetic System of WGS 84 (also known as WGS 1984 ensemble: EPSG:4326 for 2D coordinate reference system (CRS))
**Raster Map projection**  | Latitude / Longitude Projection
**Raster Best Practice Protocol**  | WMTS
**Raster Tiling scheme**  | InspireCRS84Quad (World CRS84 TileMatrixSet), That tiling schemes consists of two 256x256 tiles at its zoom level 0, in EPSG:4326 CRS, with extent in longitude in the range [-180,180] and in latitude in the range [-90,90].
**Raster Tile Size**  | 256*256
**Raster Tile Format**  | PNG / JPEG
**Auth token** | A JWT token (you can aquire it by contacting our product owner) for raster services passed via http QUERY_PARAM. There are different kinds of token permissions (raster catalog, map, export, etc.. services)
**Zoom Level**  | The layer zoom level is determined by the field *mc:maxResolutionDeg*, the zoom level is calculated by the tiling scheme below (Pixel Size (degrees) is maxResolutionDeg), for example, for the following *mc:maxResolutionDeg* 2.14577E-05 >= resolution > 1.07288E-05 a zoom level of **15** will be created.


## Raster Tiling scheme In Detail

:::warning

`Tile Size (degrees)` is cut after 9 decimal points and `Pixel Size (meters)` is rounded to 2 decimal points.

:::

Zoom Level Id  | Matrix Width (tiles) | Matrix Height (tiles) | Tile Size (degrees) | Pixel Size (degrees) | Tile Size* (meters) | Pixel Size* (meters)
:--- | :--- | :--- | :--- | :--- | :--- | :---
0 |	2 |	1 |	180 | 0.703125 | 20,037,508.34 | 78,271.52
1 |	4 |	2 |	90 | 0.3515625 | 10,018,754.17 | 39,135.76
2 | 8 | 4 | 45 | 0.17578125 | 5,009,377.09 | 19,567.88
3 | 16 | 8 | 22.5 | 0.087890625 | 2,504,688.54 | 9,783.94
4 | 32 | 16 | 11.25 | 0.0439453125 | 1,252,344.27 | 4,891.97
5 | 64 | 32 | 5.625 | 0.02197265625 | 626,172.14 | 2,445.98
6 | 128 | 64 | 2.8125 | 0.010986328125 | 313,086.07 | 1,222.99
7 | 256 | 128 | 1.40625 | 0.0054931640625 | 156,543.03 | 611.50
8 | 512 | 256 | 0.703125 | 0.00274658203125 | 78,271.52 | 305.75
9 | 1024 | 512 | 0.3515625 | 0.001373291015625 | 39,135.76 | 152.87
10 | 2048 | 1024 | 0.17578125 | 0.0006866455078125 | 19,567.88 | 76.44
11 | 4096 | 2048 | 0.087890625 | 0.00034332275390625 | 9,783.94 | 38.22
12 | 8192 | 4096 | 0.043945313 | 0.000171661376953125 | 4,891.97 | 19.11
13 | 16384 | 8192 | 0.021972656 | 0.0000858306884765625 | 2,445.98 | 9.55
14 | 32768 | 16384 | 0.010986328 | 0.0000429153442382812 | 1,222.99 | 4.78
15 | 65536 | 32768 | 0.005493164 | 0.0000214576721191406 | 611.50 | 2.39
16 | 131072 | 65536 | 0.002746582 | 0.0000107288360595703 | 305.75 | 1.19
17 | 262144 | 131072 | 0.001373291 | 0.00000536441802978516 | 152.87 | 0.60
18 | 524288 | 262144 | 0.000686646 | 0.00000268220901489258 | 76.44 | 0.30
19 | 1048576 | 524288 | 0.000343323 | 0.00000134110450744629 | 38.22 | 0.15
20 | 2097152 | 1048576 | 0.000171662 | 0.000000670552253723145 | 19.11 | 0.075
21 | 4194304 | 2097152 | 0.000085831 | 0.000000335276126861572 | 9.55 | 0.037
