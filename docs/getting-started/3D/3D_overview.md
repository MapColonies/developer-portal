## 3D Overview <!-- {docsify-ignore} -->
The process of creating photo-realistic 3D models is based on photogrammetry, which is the technique of taking multiple overlapping aerial photographs and deriving measurements from them to create 3D models of objects or scenes. This is done by external systems which generate 3D models in one of the following formats:
* OSGB (legacy)
* 3D Tiles

Each of these models represent a specific geographic region, building, facility or any other object.
<figure>
    <img src="./assets/images/3Dtile.png" style="display: block;margin-left: auto;margin-right: auto;width: 40%;">
</figure>

### Terms

* #### OSGB

OSGB is a file format that is native to OpenSceneGraph, which is an open-source 3D graphics Application Programming Interface (API). OpenSceneGraph is used by developers for a wide range of applications including visual simulation, virtual reality, and computer games. OSGB stands for OpenSceneGraph Binary file. The file stores the binary representation of a 3D vector model with all its textures contained within a single standalone file.

* #### 3D Tile

3D Tiles is designed for streaming and rendering massive 3D geospatial content such as Photogrammetry, 3D Buildings, Point Clouds, etc. It defines a hierarchical data structure and a set of tile formats which deliver renderable content. 3D Tiles does not define explicit rules for visualization of the content; a client may visualize 3D Tiles data however it sees fit.

* #### .b3dm (file extension)

b3dm ("Batched 3D Model") file is part of the 3D Tiles specification and uses glTF as its payload to deliver 3d geometry.


<br/>
<br/>
<table style=" width: 100%; display: table !important;">
    <tbody>
        <tr>
            <td align="left"></td>
            <td align="right">
                <a href="#/getting-started/3D/3D_services">Next (Services)</a>
            </td>
        </tr>
    </tbody>
</table>