"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[2236],{5849:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"2023-q1","metadata":{"permalink":"/developer-portal/pr-preview/pr-88/blog/2023-q1","editUrl":"https://github.com/MapColonies/developer-portal/blog/2023-04-15-2023-Q1.md","source":"@site/blog/2023-04-15-2023-Q1.md","title":"2023-Q1 \ud83c\udf89","description":"\ud83d\udcc4 TL;DR","date":"2023-04-15T00:00:00.000Z","formattedDate":"April 15, 2023","tags":[{"label":"production","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/production"},{"label":"release-notes","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/release-notes"},{"label":"3D","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/3-d"},{"label":"vector","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/vector"},{"label":"raster","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/raster"}],"readingTime":1.755,"hasTruncateMarker":false,"authors":[{"name":"Daniel Hermon","title":"MapColonies Tech Lead","url":"https://github.com/syncush","image_url":"/authors/syncush.png","imageURL":"/authors/syncush.png"}],"frontMatter":{"slug":"2023-q1","title":"2023-Q1 \ud83c\udf89","authors":{"name":"Daniel Hermon","title":"MapColonies Tech Lead","url":"https://github.com/syncush","image_url":"/authors/syncush.png","imageURL":"/authors/syncush.png"},"tags":["production","release-notes","3D","vector","raster"]},"nextItem":{"title":"2022-Q4 \ud83c\udf89","permalink":"/developer-portal/pr-preview/pr-88/blog/2022-q4"}},"content":"## \ud83d\udcc4 TL;DR\\nIntroducing a new service in raster.\\nNew exciting features in the catalog app!\\nOverall improvements and bug fixes.\\n\\n## \ud83d\ude80 Features\\n\\n### Raster\\n\\n#### Overview\\nOverall Raster tiles serving, ingestion and export.\\n\\n### General\\n * All services moved to David\'s Fortress Site.\\n\\n#### Catalog Service\\n##### Catalog Profile Update\\nAdditions:\\n  * `mc:links` - will also include a link for *KVP* version of `WMTS`.\\n\\n#### Tile Serving (\u201cMap Server\u201d)\\n#### General features\\nCaching and monitoring improvements.\\n\\n* Serving 3D Tiles via http2\\n\\n#### Export Service (activated via Catalog App in manager mode)\\nVia the catalog app, catalog managers can now export a multi-resolution `GPKG` for offline usage.\\n\\n#### Known Bugs \ud83d\udc1e\\n\\n1. `GetCapabilities` shows the wrong extent of the layer.\\n\\n2. There is up to 5 minutes delay between a layer presented in the catalog to be available for consumption via the tile server.\\n\\n### 3D\\n\\n<img src={require(\\"/img/release-notes/2022-Q3-02/3d_city_model.png\\").default} alt=\\"3D\\" width=\\"500\\" height=\\"250\\"/>\\n\\n* Overall improvements in serving 3D tiles.\\n* Serving 3D Tiles via http2\\n\\n### Vector\\n\\n<img src={require(\\"/img/release-notes/2022-Q4/main_vector_logo.svg\\").default} alt=\\"vector_team_logo\\" width=\\"500\\" height=\\"250\\"/>\\n\\n#### Query Service\\n\\n* Overall improvements in Query Service performance.\\n\\n### Catalog App\\n* General improvements of the UI \\\\ UX\\n* Added support for data export services\\n* KVP Capabilities added in layer metadata\\n* Added Multi-domain export principles. Currently supported raster\u2019s multi-resolution export\\n  <img src={require(\\"/img/release-notes/2023-Q1/multi-res-export.png\\").default} alt=\\"multi-res-export\\"/>\\n\\n  * While defining multi-resolution/parts export, available following  options for part definition\\n    * By drawing rectangle <br />\\n    <img src={require(\\"/img/release-notes/2023-Q1/rect.png\\").default} alt=\\"app_view\\"/>\\n    * By drawing polygon <br />\\n    <img src={require(\\"/img/release-notes/2023-Q1/polygon.png\\").default} alt=\\"app_view\\"/>\\n    * By entering a coordinates of exported rectangle <br />\\n    <img src={require(\\"/img/release-notes/2023-Q1/coords.png\\").default} alt=\\"app_view\\"/>\\n    * By uploading SHAPE/GeoJson file <br />\\n    <img src={require(\\"/img/release-notes/2023-Q1/geojson.png\\").default} alt=\\"app_view\\"/>\\n    * By selecting predefined AOI <br />\\n    <img src={require(\\"/img/release-notes/2023-Q1/aoi.png\\").default} alt=\\"app_view\\"/>\\n  * Each export part will have estimated size\\n  * Exported artifact will have total estimated size as well\\n  * Available disk space info\\n* Tiles for covered layers are not requested  (performance oriented and configurable)\\n* Job manager shows links to exported artifacts\\n\\n\\n#### Products Management\\n\\nIngestion:\\n* Improved logs\\n* Prevention of ingesting non EPSG4326 data\\n\\n#### Known Bugs \ud83d\udc1e\\n1. Some jobs gets timeout (large GPKGs)"},{"id":"2022-q4","metadata":{"permalink":"/developer-portal/pr-preview/pr-88/blog/2022-q4","editUrl":"https://github.com/MapColonies/developer-portal/blog/2023-01-15-2022-Q4.md","source":"@site/blog/2023-01-15-2022-Q4.md","title":"2022-Q4 \ud83c\udf89","description":"\ud83d\udcc4 TL;DR","date":"2023-01-15T00:00:00.000Z","formattedDate":"January 15, 2023","tags":[{"label":"production","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/production"},{"label":"release-notes","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/release-notes"},{"label":"3D","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/3-d"},{"label":"vector","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/vector"},{"label":"raster","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/raster"},{"label":"openstreetmap","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/openstreetmap"},{"label":"osm","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/osm"}],"readingTime":4.4,"hasTruncateMarker":false,"authors":[{"name":"Daniel Hermon","title":"MapColonies Tech Lead","url":"https://github.com/syncush","image_url":"/authors/syncush.png","imageURL":"/authors/syncush.png"}],"frontMatter":{"slug":"2022-q4","title":"2022-Q4 \ud83c\udf89","authors":{"name":"Daniel Hermon","title":"MapColonies Tech Lead","url":"https://github.com/syncush","image_url":"/authors/syncush.png","imageURL":"/authors/syncush.png"},"tags":["production","release-notes","3D","vector","raster","openstreetmap","osm"]},"prevItem":{"title":"2023-Q1 \ud83c\udf89","permalink":"/developer-portal/pr-preview/pr-88/blog/2023-q1"},"nextItem":{"title":"2022-Q3 \ud83c\udf89","permalink":"/developer-portal/pr-preview/pr-88/blog/2022-q3"}},"content":"## \ud83d\udcc4 TL;DR\\nIntroducing new services in raster, vector.\\nNew exciting features in the catalog app!\\nOverall improvements and bug fixes.\\n\\n## \ud83d\ude80 Features\\n\\n### Raster\\n\\n#### Overview\\nIn addition to complete solution for raster product\u2019s consumption. A few major features where introduced in the new version.\\n\\n#### Catalog Service\\n##### Catalog Profile Update\\nAdditions:\\n  * `transparency` - indicates whether a raster layer has transparency\\n\\nRemovals:\\n  * `WMTS_LAYER` field removed from record\'s `Links`\\n\\n\\n#### New available layers:\\n\\n<img src={require(\\"/img/release-notes/2022-Q3-02/wmts_logo.png\\").default} alt=\\"wmts_logo\\" width=\\"500\\" height=\\"250\\" />\\n\\n1. \u201cBest\u201c layer was updated to latest data in `JPEG` format\\n2. \u201cDigital Map\u201c update\\n3. \u201cOSM\u201c layer - a civilian OSM map, for more info click [here](/docs/MapColonies/openstreetmap/openstreetmap)\\n\\n#### Tile Serving (\u201cMap Server\u201d)\\n#### General features\\nCaching and monitoring improvements.\\n\\n#### Ingestion Service (activated via Catalog App in manager mode)\\n1. A full ingestion solution was added for new products for new materials with various raw data formats (`j2k`, `tiff`, `GPKG`).\\n2. A partial solution for \u201cupdating\u201d existing catalog layers data (currently `GPKG` only).\\n\\n\\n\\n#### Export Service\\nSolution for creating raster \u201coffline\u201c products is now available. (Via API for users with a valid export token)\\nThe API supports a webhook when the job finished.\\n\\n#### Known Bugs \ud83d\udc1e\\n\\n1. `GetCapabilities` shows the wrong extent of the layer.\\n\\n2. There is up to 5 minutes delay between a layer presented in the catalog to be available for consumption via the tile server.\\n\\n### 3D\\n\\n<img src={require(\\"/img/release-notes/2022-Q3-02/3d_city_model.png\\").default} alt=\\"3D\\" width=\\"500\\" height=\\"250\\" />\\n\\n* Overall improvements in serving 3D tiles.\\n\\n#### Overview\\n\\nOptimal, complete, easy, efficient, and robust solution for raster product consumption is now available. Just start by querying the catalog for the desired product and set your map component up in no time.\\n\\n#### Catalog Service\\n\\nYou are now able to search, and filter all the available 3D photorealistic models in your cloud environment via CSW protocol. Refer to the profile of the 3D records [here](/docs/MapColonies/3D/services/catalog/catalog-profile-v2)\\n\\n\\n#### Tile Serving Service\\n\\nYou are now able to consume 3D tiles (b3dm) via the tile serving service in a tile layer (\u201cXYZ\u201d) protocol. Check [here](/docs/MapColonies/3D/Guides/3d-getting-started) for a step-by-step tutorial.\\n\\n\\n\\n### Vector\\n\\n<img src={require(\\"/img/release-notes/2022-Q4/main_vector_logo.svg\\").default} alt=\\"vector_team_logo\\" width=\\"500\\" height=\\"250\\" />\\n\\n#### Query Service\\n\\nThis new service provides facilities for searching and retrieving feature data from vector layers.\\nbuildings layer is now available to query.\\nVector query service uses the WFS protocol which is a READ-ONLY Web Feature Service.\\nWe provide three actions to query the layers:\\n\\n* GetCapabilities - returns full capabilities provided by the service.\\n\\n* DescribeFeatureType - description of a feature type.\\n\\n* GetFeature - the request returns a collection of geographic feature instances filtered according to criteria set by the requesting client.\\n\\nrefer to [Query Service](/docs/MapColonies/vector/Services/query).\\n\\n\\n\\n#### OpenStreetMap Carto (OSM)\\n\\nIn this version, can be consumed OpenStreetMap Carto like our other Rasterized Vector products (as a part of Digital Map).\\n\\nOpenStreetMap Carto (OSM Carto for short) is an open-source stylesheet for rendering OpenStreetMap data to raster tiles.\\n\\nAs this stylesheet is open-source, we had to make a few minor changes compared to the original one:\\n\\n1. We changed the stylesheet projection from Web Mercator to WGS84.\\n\\n2. We modified the database insertion script to prefer names in Hebrew and English when possible.\\n\\n3. We imported data from the Natural Earth dataset in places where we didn\'t import OSM data.\\n\\nrefer to [OpenStreetMap Carto](/docs/MapColonies/openstreetmap/osm-carto/openstreetmap-carto).\\n\\n\\n\\n#### Nominatim\\n\\nNominatim (from the Latin, \'by name\') is a tool to search OpenStreetMap data by name and address (geocoding) and to generate synthetic addresses of OSM points (reverse geocoding).\\n\\nIn addition to the API, we brought Nominatim UI.\\nNominatim UI offers a small website for trying Nominatim and inspecting the database content.\\n\\nrefer to [Nominatim](/docs/MapColonies/vector/Services/nominatim_service).\\n\\n<img src={require(\\"/img/release-notes/2022-Q4/nominatim_search_he.png\\").default} alt=\\"nominatim_search_he\\" />\\n\\n\\n### Catalog App\\n* General improvements of the UI \\\\ UX\\n  * Components redesign\\n  * New fonts and icons\\n  * Better error reporting\\n  * Fly-to 3D model changes automatically map-view to 3D mode\\n* Added Vector\u2019s query service in order to visualize an entity and show the details\\n<img src={require(\\"/img/release-notes/2022-Q4/app_view_WFS_service.png\\").default} alt=\\"app_view\\" />\\n\\n* New tools suite site is now available via the app\\n* The app checks for the availability of graphics hardware acceleration (for more info visit [here](/docs/MapColonies/3D/Guides/HardwareAcceleration))\\n<img src={require(\\"/img/release-notes/2022-Q4/app_view_no_graphic_acc.png\\").default} alt=\\"app_view\\" />\\n\\n\\n\\n\\n#### Web tools\\nThe terrain verification tool is exposed as part of the MapColonies WEB tools suite\\n\\n<img src={require(\\"/img/release-notes/2022-Q4/app_view_web_tools.png\\").default} alt=\\"app_view\\" />\\n\\n#### Products Management\\n\\n* Discrete values are now selected from a dropdown instead of free text input.\\n* You can now stop / resume jobs from the UI.\\n* You can now update a rater layer via the UI\\n* Job management screen shows jobs from defined date till NOW\\n\\n<img src={require(\\"/img/release-notes/2022-Q4/app_view_jobs_timeline.png\\").default} alt=\\"app_view\\" />\\n\\n#### Fixed Bugs \ud83d\udc1e\u2714\ufe0f\\nJob Management:\\n1. The refresh button makes the job\u2019s progress disappear.\\n2. Job progress won\u2019t update with new data when the dialog is open.\\n\\n#### MISC:\\n1. Backend errors aren\'t prompted properly to the client.\\n2. Special characters support in metadata external ID field.\\n3. When opening the file browser in the ingestion form, it messes up the app\u2019s styles. (Refreshing the app helps).\\n4. When searching an area on the map for products, update any field from the product\u2019s metadata and then select edit again, the selected metadata will be the old one.\\n\\n#### Known Bugs \ud83d\udc1e \u274c\\n1. 3D footprints are not clamped to terrain."},{"id":"2022-q3","metadata":{"permalink":"/developer-portal/pr-preview/pr-88/blog/2022-q3","editUrl":"https://github.com/MapColonies/developer-portal/blog/2022-12-15-2022-Q3.md","source":"@site/blog/2022-12-15-2022-Q3.md","title":"2022-Q3 \ud83c\udf89","description":"\ud83d\udcc4 TL;DR","date":"2022-12-15T00:00:00.000Z","formattedDate":"December 15, 2022","tags":[{"label":"production","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/production"},{"label":"release-notes","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/release-notes"},{"label":"3D","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/3-d"},{"label":"vector","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/vector"},{"label":"raster","permalink":"/developer-portal/pr-preview/pr-88/blog/tags/raster"}],"readingTime":2.68,"hasTruncateMarker":false,"authors":[{"name":"Daniel Hermon","title":"MapColonies Tech Lead","url":"https://github.com/syncush","image_url":"/authors/syncush.png","imageURL":"/authors/syncush.png"}],"frontMatter":{"slug":"2022-q3","title":"2022-Q3 \ud83c\udf89","authors":{"name":"Daniel Hermon","title":"MapColonies Tech Lead","url":"https://github.com/syncush","image_url":"/authors/syncush.png","imageURL":"/authors/syncush.png"},"tags":["production","release-notes","3D","vector","raster"]},"prevItem":{"title":"2022-Q4 \ud83c\udf89","permalink":"/developer-portal/pr-preview/pr-88/blog/2022-q4"}},"content":"## \ud83d\udcc4 TL;DR\\nProduction-ready release, ready for integration and going live. Mainly focused on tile streaming services and catalog services.\\n\\n## \ud83d\ude80 Features\\n\\n### Raster\\n<img src={require(\\"/img/release-notes/2022-Q3-02/wmts_logo.png\\").default} alt=\\"wmts_logo\\" width=\\"500\\" height=\\"250\\" />\\n\\n#### Overview\\n\\nOptimal, complete, easy, efficient, and robust solution for raster product consumption is now available. Just start by querying the catalog for the desired product and set your map component up in no time.\\n\\n#### Catalog Service\\n\\nYou are now able to search, and filter all the available raster products in your cloud environment via CSW protocol. Refer to the profile of the raster records [here](/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v1)\\n\\n#### Tile Serving Service (\u201cMap Server\u201d)\\n\\nYou are now able to consume raster tiles via the tile serving service in the WMTS protocol. Check [here](/docs/MapColonies/Raster/Guides/raster-getting-started) for a step-by-step tutorial.\\n\\n#### Known Bugs \ud83d\udc1e\\n\\nGetCapabilities shows the wrong extent of the layer.\\n\\nThere is up to 5 minutes delay between a layer presented in the catalog to be available for consumption via the tile server.\\n\\n### 3D\\n\\n<img src={require(\\"/img/release-notes/2022-Q3-02/3d_city_model.png\\").default} alt=\\"3D\\" width=\\"500\\" height=\\"250\\" />\\n\\n#### Overview\\n\\nOptimal, complete, easy, efficient, and robust solution for raster product consumption is now available. Just start by querying the catalog for the desired product and set your map component up in no time.\\n\\n#### Catalog Service\\n\\nYou are now able to search, and filter all the available 3D photorealistic models in your cloud environment via CSW protocol. Refer to the profile of the 3D records [here](/docs/MapColonies/3D/services/catalog/catalog-profile-v2)\\n\\n\\n#### Tile Serving Service\\n\\nYou are now able to consume 3D tiles (b3dm) via the tile serving service in a tile layer (\u201cXYZ\u201d) protocol. Check [here](/docs/MapColonies/3D/Guides/3d-getting-started) for a step-by-step tutorial.\\n\\n\\n\\n### Vector\\n\\nIn this version, we present a new service and rasterized vector products.\\n\\n<img src={require(\\"/img/release-notes/2022-Q3-02/replication.png\\").default} alt=\\"replication\\" width=\\"500\\" height=\\"250\\" />\\n\\n#### Replication Service\\n\\nThis new service allows you to replicate vector layers to your environment including keeping track of changes along the timeline, as of the day of the release the buildings layer is now available for consumption. refer to [here](/docs/MapColonies/vector/services/replication/info).\\n\\n#### Digital Map Rasterized Vector Products\\n\\nIn this version, we introduce several rasterized vector products.\\n\\n* Base map - a simple non-transparent basic overlay for your maps. the map continuously updates with the latest changes.\\n\\n* Control Map - the famous universal control language map.\\n\\n\\n\\n### Catalog App\\n\\n#### Overview\\nThe catalog app is now live, and the web application allows you to view, search and filter 3D, Raster, and Vector products.\\n\\n<img src={require(\\"/img/release-notes/2022-Q3-02/app_view.png\\").default} alt=\\"app_view\\" />\\n<img src={require(\\"/img/release-notes/2022-Q3-02/app_view2.png\\").default} alt=\\"app_view\\" />\\n<img src={require(\\"/img/release-notes/2022-Q3-02/app_view3.png\\").default} alt=\\"app_view\\" />\\n<img src={require(\\"/img/release-notes/2022-Q3-02/app_view4.png\\").default} alt=\\"app_view\\" />\\n\\n\\n#### Products Management\\n\\nFor admin users, the products management view is now available. You are able to edit the metadata of products.\\n\\n#### Known Bugs \ud83d\udc1e\\n\\nJob Management:\\n1. The refresh button makes the job\u2019s progress disappear.\\n2. Job progress won\u2019t update with new data when the dialog is open.\\n\\nMISC:\\n1. Backend errors aren\'t prompted properly to the client.\\n2. Special characters support in metadata external ID field.\\n3. When opening the file browser in the ingestion form, it messes up the app\u2019s styles. (Refreshing the app helps).\\n4. When searching an area on the map for products, update any field from the product\u2019s metadata and then select edit again, the selected metadata will be the old one."}]}')}}]);