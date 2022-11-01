# XYZ Protocol

The XYZ protocol describes how a client (often from within a browser) can access tiled imagery. It provides a pyramid of tiles at some zoom level so that it can efficiently be displayed in web browsers. 

#### XYZ tiles have these attributes:

* Tiles are 256 × 256 pixels.
* Tiles use the Web Mercator coordinate reference system (EPSG:3857).
* Tiles are available between zoom levels 0 and 18.
* Tiles are rendered in the PNG format with an alpha channel for transparency.
* Grid is a rectangle with 2\*z rows and 2\*z columns, where z is the zoom level.
* Grid uses 0,0 as the top, left corner in the grid.
Tiles are found at the path `z/x/y.png`, where `z` is the zoom level, and `x` and `y` are the positions in the tile grid.