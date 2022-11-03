# XYZ Protocol

The XYZ protocol describes how a client (often from within a browser) can access tiled imagery. It provides a pyramid of tiles at some zoom level so that it can efficiently be displayed in web browsers.

The tiles can be accessed at the path: `z/x/y.b3dm`, where `z` is the zoom level, and `x` and `y` are the positions in the tile grid.

An example:

Starting with the root folder, the model:

<figure>
    <img src="./assets/examples/xyz-protocol/model.png">
</figure>

Inside, the names of the folder represent the zoom level:

<figure>
    <img src="./assets/examples/xyz-protocol/z-zoom_level.png">
</figure>

Inside a zoom level, the names of the folder represent the x-axis of the tile grid:

<figure>
    <img src="./assets/examples/xyz-protocol/x-axis.png">
</figure>

Inside the x axis, the names of the files represent the y-axis of the tile grid:

<figure>
    <img src="./assets/examples/xyz-protocol/y-axis.png">
</figure>