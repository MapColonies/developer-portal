"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[8390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(v,o(o({ref:t},c),{},{components:r})):a.createElement(v,o({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62683:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={id:"raster-map-service",slug:"map-service",title:"Map \ud83d\uddfa\ufe0f",tags:["wmts","raster","API"]},o="Map Service \ud83d\uddfa\ufe0f",p={unversionedId:"MapColonies/Raster/services/raster-map-service",id:"MapColonies/Raster/services/raster-map-service",title:"Map \ud83d\uddfa\ufe0f",description:"The raster map service uses the WMTS protocol which is a READ-ONLY Web Map Tile Service.",source:"@site/docs/MapColonies/Raster/services/map_service.md",sourceDirName:"MapColonies/Raster/services",slug:"/MapColonies/Raster/services/map-service",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/Raster/services/map-service",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/Raster/services/map_service.md",tags:[{label:"wmts",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/wmts"},{label:"raster",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/raster"},{label:"API",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/api"}],version:"current",frontMatter:{id:"raster-map-service",slug:"map-service",title:"Map \ud83d\uddfa\ufe0f",tags:["wmts","raster","API"]},sidebar:"docSidebar",previous:{title:"Export \ud83d\udce6",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/Raster/services/raster-export"},next:{title:"Vector",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/vector/vector-overview"}},s={},l=[{value:"GetCapabilities",id:"getcapabilities",level:2},{value:"WMTS layer consumption example",id:"wmts-layer-consumption-example",level:3},{value:"GetTile",id:"gettile",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"map-service-\ufe0f"},"Map Service \ud83d\uddfa\ufe0f"),(0,n.kt)("p",null,"The raster map service uses the ",(0,n.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/ogc-wmts"},"WMTS")," protocol which is a READ-ONLY Web Map Tile Service.\nIt's a standard protocol for serving pre-rendered or run-time computed georeferenced map tiles over the Internet."),(0,n.kt)("p",null,"It provides facilities for searching and retrieving raster layers data with the ",(0,n.kt)("inlineCode",{parentName:"p"},"GetCapabilities")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"GetTile")," operations, all other operations are invalid.\nFor the full capabilities provided by the service see ",(0,n.kt)("a",{parentName:"p",href:"#getcapabilities"},"GetCapabilities")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Authentication must be integrated in order to communicate with Map and Catalog services."),(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"See the principles ",(0,n.kt)("a",{parentName:"strong",href:"/docs/MapColonies/authentication"},"here")))),(0,n.kt)("h2",{id:"getcapabilities"},"GetCapabilities"),(0,n.kt)("p",null,"A WMTS server responding to a ",(0,n.kt)("strong",{parentName:"p"},"GetCapabilities")," request returns metadata about the service, including supported operations and parameters, and a list of the available layers."),(0,n.kt)("p",null,"An example of a GetCapabilities request is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET request\n\nhttps://ows.terrestris.de/osm/service?\nREQUEST=GetCapabilities&\nSERVICE=WMTS\n")),(0,n.kt)("h3",{id:"wmts-layer-consumption-example"},"WMTS layer consumption example"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<MAP_SERVER-RASTER_URL>/wmts/{Layer}/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"{Layer}")," - the name of the layer (ex. ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Ortho_25cm")),")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"{TileMatrixSet}")," - define the grid name of the layer,"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"How to get Grid name?")," Grid name (",(0,n.kt)("inlineCode",{parentName:"p"},"TileMatrixSet"),") can be reached by ",(0,n.kt)("strong",{parentName:"p"},"GetCapabilities")," response ",(0,n.kt)("a",{parentName:"p",href:"/docs/MapColonies/Raster/Guides/raster-getting-started#get-layer-capabilities-step-4"},"Raster - Get Started / Step 4")),(0,n.kt)("figure",null,(0,n.kt)("img",{src:r(42103).Z,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"100%"}}))),(0,n.kt)("p",null,"See ",(0,n.kt)("inlineCode",{parentName:"p"},"<TileMatrixSetLink>")," element for supported Grid names."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"{TileMatrix}")," - define the zoom level (Z)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"{TileCol}")," - define the column (X)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"{TileRow}")," - define the row (Y)"),(0,n.kt)("p",null,"Final request example:\n",(0,n.kt)("inlineCode",{parentName:"p"},"<MAP_SERVER-RASTER_URL>/wmts/bluemarble-1.0-OrthophotoHistory/newGrids/2/0/2.png"),"\nWill bring a requested tile image"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Do not change")," the ",(0,n.kt)("inlineCode",{parentName:"p"},"/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png")," with custom values while consuming in applications - see examples below.")),(0,n.kt)("h2",{id:"gettile"},"GetTile"),(0,n.kt)("p",null,"In response to a ",(0,n.kt)("strong",{parentName:"p"},"GetTile")," KVP request, or under a resource-oriented style, a Tile resource that complies with the requested parameters would be returned. A correctly formulated request will bring a tile requested image."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET request\n\nhttp://cite.deegree.org/deegree-webservices-3.4-RC3/services/wmts100?\nservice=WMTS&\nrequest=GetTile&\nversion=1.0.0&\nLayer=cite&\nStyle=default&\nFormat=image/png&\nTileMatrixSet=InspireCrs84Quad&\nTileMatrix=17&\nTileRow=4&\nTileCol=4\n")))}d.isMDXComponent=!0},42103:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/map_proxy_getcap_ortho_example-47affc1b3fd5016c979187427cfbc0d7.png"}}]);