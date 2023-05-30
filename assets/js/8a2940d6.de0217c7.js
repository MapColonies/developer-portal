"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[4105],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),u=p(a),d=l,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(v,o(o({ref:t},c),{},{components:a})):r.createElement(v,o({ref:t},c))}));function v(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=d;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[u]="string"==typeof e?e:l,o[1]=n;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>p});var r=a(87462),l=(a(67294),a(3905));const i={slug:"2022-q4",title:"2022-Q4 \ud83c\udf89",authors:{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png"},tags:["production","release-notes","3D","vector","raster","openstreetmap","osm"]},o="\ud83c\udf89 2022-Q4 Release Notes",n={permalink:"/developer-portal/blog/2022-q4",editUrl:"https://github.com/MapColonies/developer-portal/blog/2023-01-15-2022-Q4.md",source:"@site/blog/2023-01-15-2022-Q4.md",title:"2022-Q4 \ud83c\udf89",description:"\ud83d\udcc4 TL;DR",date:"2023-01-15T00:00:00.000Z",formattedDate:"January 15, 2023",tags:[{label:"production",permalink:"/developer-portal/blog/tags/production"},{label:"release-notes",permalink:"/developer-portal/blog/tags/release-notes"},{label:"3D",permalink:"/developer-portal/blog/tags/3-d"},{label:"vector",permalink:"/developer-portal/blog/tags/vector"},{label:"raster",permalink:"/developer-portal/blog/tags/raster"},{label:"openstreetmap",permalink:"/developer-portal/blog/tags/openstreetmap"},{label:"osm",permalink:"/developer-portal/blog/tags/osm"}],readingTime:4.4,hasTruncateMarker:!1,authors:[{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png",imageURL:"/authors/syncush.png"}],frontMatter:{slug:"2022-q4",title:"2022-Q4 \ud83c\udf89",authors:{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png",imageURL:"/authors/syncush.png"},tags:["production","release-notes","3D","vector","raster","openstreetmap","osm"]},prevItem:{title:"2023-Q1 \ud83c\udf89",permalink:"/developer-portal/blog/2023-q1"},nextItem:{title:"2022-Q3 \ud83c\udf89",permalink:"/developer-portal/blog/2022-q3"}},s={authorsImageUrls:[void 0]},p=[{value:"\ud83d\udcc4 TL;DR",id:"-tldr",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"Raster",id:"raster",level:3},{value:"Overview",id:"overview",level:4},{value:"Catalog Service",id:"catalog-service",level:4},{value:"Catalog Profile Update",id:"catalog-profile-update",level:5},{value:"New available layers:",id:"new-available-layers",level:4},{value:"Tile Serving (\u201cMap Server\u201d)",id:"tile-serving-map-server",level:4},{value:"General features",id:"general-features",level:4},{value:"Ingestion Service (activated via Catalog App in manager mode)",id:"ingestion-service-activated-via-catalog-app-in-manager-mode",level:4},{value:"Export Service",id:"export-service",level:4},{value:"Known Bugs \ud83d\udc1e",id:"known-bugs-",level:4},{value:"3D",id:"3d",level:3},{value:"Overview",id:"overview-1",level:4},{value:"Catalog Service",id:"catalog-service-1",level:4},{value:"Tile Serving Service",id:"tile-serving-service",level:4},{value:"Vector",id:"vector",level:3},{value:"Query Service",id:"query-service",level:4},{value:"OpenStreetMap Carto (OSM)",id:"openstreetmap-carto-osm",level:4},{value:"Nominatim",id:"nominatim",level:4},{value:"Catalog App",id:"catalog-app",level:3},{value:"Web tools",id:"web-tools",level:4},{value:"Products Management",id:"products-management",level:4},{value:"Fixed Bugs \ud83d\udc1e\u2714\ufe0f",id:"fixed-bugs-\ufe0f",level:4},{value:"MISC:",id:"misc",level:4},{value:"Known Bugs \ud83d\udc1e \u274c",id:"known-bugs--",level:4}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"-tldr"},"\ud83d\udcc4 TL;DR"),(0,l.kt)("p",null,"Introducing new services in raster, vector.\nNew exciting features in the catalog app!\nOverall improvements and bug fixes."),(0,l.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,l.kt)("h3",{id:"raster"},"Raster"),(0,l.kt)("h4",{id:"overview"},"Overview"),(0,l.kt)("p",null,"In addition to complete solution for raster product\u2019s consumption. A few major features where introduced in the new version."),(0,l.kt)("h4",{id:"catalog-service"},"Catalog Service"),(0,l.kt)("h5",{id:"catalog-profile-update"},"Catalog Profile Update"),(0,l.kt)("p",null,"Additions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"transparency")," - indicates whether a raster layer has transparency")),(0,l.kt)("p",null,"Removals:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WMTS_LAYER")," field removed from record's ",(0,l.kt)("inlineCode",{parentName:"li"},"Links"))),(0,l.kt)("h4",{id:"new-available-layers"},"New available layers:"),(0,l.kt)("img",{src:"/img/release-notes/2022-Q3-02/wmts_logo.png",alt:"wmts_logo",width:"500",height:"250"}),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u201cBest\u201c layer was updated to latest data in ",(0,l.kt)("inlineCode",{parentName:"li"},"JPEG")," format"),(0,l.kt)("li",{parentName:"ol"},"\u201cDigital Map\u201c update"),(0,l.kt)("li",{parentName:"ol"},"\u201cOSM\u201c layer - a civilian OSM map, for more info click ",(0,l.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/openstreetmap"},"here"))),(0,l.kt)("h4",{id:"tile-serving-map-server"},"Tile Serving (\u201cMap Server\u201d)"),(0,l.kt)("h4",{id:"general-features"},"General features"),(0,l.kt)("p",null,"Caching and monitoring improvements."),(0,l.kt)("h4",{id:"ingestion-service-activated-via-catalog-app-in-manager-mode"},"Ingestion Service (activated via Catalog App in manager mode)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"A full ingestion solution was added for new products for new materials with various raw data formats (",(0,l.kt)("inlineCode",{parentName:"li"},"j2k"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"tiff"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"GPKG"),")."),(0,l.kt)("li",{parentName:"ol"},"A partial solution for \u201cupdating\u201d existing catalog layers data (currently ",(0,l.kt)("inlineCode",{parentName:"li"},"GPKG")," only).")),(0,l.kt)("h4",{id:"export-service"},"Export Service"),(0,l.kt)("p",null,"Solution for creating raster \u201coffline\u201c products is now available. (Via API for users with a valid export token)\nThe API supports a webhook when the job finished."),(0,l.kt)("h4",{id:"known-bugs-"},"Known Bugs \ud83d\udc1e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"GetCapabilities")," shows the wrong extent of the layer.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"There is up to 5 minutes delay between a layer presented in the catalog to be available for consumption via the tile server."))),(0,l.kt)("h3",{id:"3d"},"3D"),(0,l.kt)("img",{src:"/img/release-notes/2022-Q3-02/3d_city_model.png",alt:"3D",width:"500",height:"250"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Overall improvements in serving 3D tiles.")),(0,l.kt)("h4",{id:"overview-1"},"Overview"),(0,l.kt)("p",null,"Optimal, complete, easy, efficient, and robust solution for raster product consumption is now available. Just start by querying the catalog for the desired product and set your map component up in no time."),(0,l.kt)("h4",{id:"catalog-service-1"},"Catalog Service"),(0,l.kt)("p",null,"You are now able to search, and filter all the available 3D photorealistic models in your cloud environment via CSW protocol. Refer to the profile of the 3D records ",(0,l.kt)("a",{parentName:"p",href:"/docs/MapColonies/3D/services/catalog/catalog-profile-v2"},"here")),(0,l.kt)("h4",{id:"tile-serving-service"},"Tile Serving Service"),(0,l.kt)("p",null,"You are now able to consume 3D tiles (b3dm) via the tile serving service in a tile layer (\u201cXYZ\u201d) protocol. Check ",(0,l.kt)("a",{parentName:"p",href:"/docs/MapColonies/3D/Guides/3d-getting-started"},"here")," for a step-by-step tutorial."),(0,l.kt)("h3",{id:"vector"},"Vector"),(0,l.kt)("img",{src:"/img/release-notes/2022-Q4/main_vector_logo.svg",alt:"vector_team_logo",width:"500",height:"250"}),(0,l.kt)("h4",{id:"query-service"},"Query Service"),(0,l.kt)("p",null,"This new service provides facilities for searching and retrieving feature data from vector layers.\nbuildings layer is now available to query.\nVector query service uses the WFS protocol which is a READ-ONLY Web Feature Service.\nWe provide three actions to query the layers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GetCapabilities - returns full capabilities provided by the service.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"DescribeFeatureType - description of a feature type.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GetFeature - the request returns a collection of geographic feature instances filtered according to criteria set by the requesting client."))),(0,l.kt)("p",null,"refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/MapColonies/vector/Services/query"},"Query Service"),"."),(0,l.kt)("h4",{id:"openstreetmap-carto-osm"},"OpenStreetMap Carto (OSM)"),(0,l.kt)("p",null,"In this version, can be consumed OpenStreetMap Carto like our other Rasterized Vector products (as a part of Digital Map)."),(0,l.kt)("p",null,"OpenStreetMap Carto (OSM Carto for short) is an open-source stylesheet for rendering OpenStreetMap data to raster tiles."),(0,l.kt)("p",null,"As this stylesheet is open-source, we had to make a few minor changes compared to the original one:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"We changed the stylesheet projection from Web Mercator to WGS84.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"We modified the database insertion script to prefer names in Hebrew and English when possible.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"We imported data from the Natural Earth dataset in places where we didn't import OSM data."))),(0,l.kt)("p",null,"refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/MapColonies/openstreetmap/osm-carto/openstreetmap-carto"},"OpenStreetMap Carto"),"."),(0,l.kt)("h4",{id:"nominatim"},"Nominatim"),(0,l.kt)("p",null,"Nominatim (from the Latin, 'by name') is a tool to search OpenStreetMap data by name and address (geocoding) and to generate synthetic addresses of OSM points (reverse geocoding)."),(0,l.kt)("p",null,"In addition to the API, we brought Nominatim UI.\nNominatim UI offers a small website for trying Nominatim and inspecting the database content."),(0,l.kt)("p",null,"refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/MapColonies/vector/Services/nominatim_service"},"Nominatim"),"."),(0,l.kt)("img",{src:"/img/release-notes/2022-Q4/nominatim_search_he.png",alt:"nominatim_search_he"}),(0,l.kt)("h3",{id:"catalog-app"},"Catalog App"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"General improvements of the UI \\ UX"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Components redesign"),(0,l.kt)("li",{parentName:"ul"},"New fonts and icons"),(0,l.kt)("li",{parentName:"ul"},"Better error reporting"),(0,l.kt)("li",{parentName:"ul"},"Fly-to 3D model changes automatically map-view to 3D mode"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added Vector\u2019s query service in order to visualize an entity and show the details"),(0,l.kt)("img",{src:"/img/release-notes/2022-Q4/app_view_WFS_service.png",alt:"app_view"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New tools suite site is now available via the app")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The app checks for the availability of graphics hardware acceleration (for more info visit ",(0,l.kt)("a",{parentName:"p",href:"/docs/MapColonies/3D/Guides/HardwareAcceleration"},"here"),")"),(0,l.kt)("img",{src:"/img/release-notes/2022-Q4/app_view_no_graphic_acc.png",alt:"app_view"}))),(0,l.kt)("h4",{id:"web-tools"},"Web tools"),(0,l.kt)("p",null,"The terrain verification tool is exposed as part of the MapColonies WEB tools suite"),(0,l.kt)("img",{src:"/img/release-notes/2022-Q4/app_view_web_tools.png",alt:"app_view"}),(0,l.kt)("h4",{id:"products-management"},"Products Management"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Discrete values are now selected from a dropdown instead of free text input."),(0,l.kt)("li",{parentName:"ul"},"You can now stop / resume jobs from the UI."),(0,l.kt)("li",{parentName:"ul"},"You can now update a rater layer via the UI"),(0,l.kt)("li",{parentName:"ul"},"Job management screen shows jobs from defined date till NOW")),(0,l.kt)("img",{src:"/img/release-notes/2022-Q4/app_view_jobs_timeline.png",alt:"app_view"}),(0,l.kt)("h4",{id:"fixed-bugs-\ufe0f"},"Fixed Bugs \ud83d\udc1e\u2714\ufe0f"),(0,l.kt)("p",null,"Job Management:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The refresh button makes the job\u2019s progress disappear."),(0,l.kt)("li",{parentName:"ol"},"Job progress won\u2019t update with new data when the dialog is open.")),(0,l.kt)("h4",{id:"misc"},"MISC:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Backend errors aren't prompted properly to the client."),(0,l.kt)("li",{parentName:"ol"},"Special characters support in metadata external ID field."),(0,l.kt)("li",{parentName:"ol"},"When opening the file browser in the ingestion form, it messes up the app\u2019s styles. (Refreshing the app helps)."),(0,l.kt)("li",{parentName:"ol"},"When searching an area on the map for products, update any field from the product\u2019s metadata and then select edit again, the selected metadata will be the old one.")),(0,l.kt)("h4",{id:"known-bugs--"},"Known Bugs \ud83d\udc1e \u274c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"3D footprints are not clamped to terrain.")))}m.isMDXComponent=!0}}]);