# Model Server:

In 3d, the model server is used as a proxy to serve the models files.

**How does it work??**

Just send a get request with the file you want to get.

> :information_source: Pay attention to the authentication you need to provide!
For further information, see: [Authentication](/getting-started/3d/authentication/model_server_auth.md)

The get request should be like:

```curl
<MODEL_SERVER_3D_SERVICE_URL>/[MODEL]/[PATH_TO_FILE]
```

`<MODEL_SERVER_3D_SERVICE_URL>` - the url of the service.

`[MODEL]` - the name of the model.

`[PATH_TO_FILE]` - the full path to the wanted file.

An example:

`<MODEL_SERVER_3D_SERVICE_URL>/24bd1e6e-3ebb-4f77-a971-9629eef4037a/tileset.json`

> :information_source: This request is **without** the authentication

The response is the content of the file from the request.

An example:

```curl
{"asset":{"version":"0.0","tilesetVersion":"1.0"},"geometricError":27596589.783091642,"root":{"boundingVolume": \
{"region":[-1.3002877215936859,0.7041575058907783,-1.2780350790633774,0.7172779626921096,0,540.9999999997664]}, \
"geometricError":597.7486716289187,"refine":"add","content":{"url":"0/0/0.b3dm","boundingVolume":{"region": \
[-1.3001359425259444,0.7046416776785741,-1.2847412414241195,0.715974250610089,0,45.4]}, \
"children":[{"boundingVolume":{"region":[-1.3002877215936859,0.7041575058907783,-1.2901045718929864,0.7096268127518264,0,90.4]}', \
"geometricError":315.07835765914325,"content":{"url":"1/0/0.b3dm","boundingVolume":{"region":[-1.3002838399814296, \ 
0.7042702559057864,-1.2901097869367912,0.7096162412925472,0,45.4]}...
```