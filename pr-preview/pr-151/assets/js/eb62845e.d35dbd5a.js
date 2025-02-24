"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[9224],{6473:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var t=i(74848),s=i(28453);const n={id:"raster-map-service",slug:"map-service",title:"Map \ud83d\uddfa\ufe0f",tags:["wmts","raster","API"]},a="Map Service \ud83d\uddfa\ufe0f",o={id:"MapColonies/Raster/services/raster-map-service",title:"Map \ud83d\uddfa\ufe0f",description:"The raster map service uses the WMTS protocol which is a READ-ONLY Web Map Tile Service.",source:"@site/docs/MapColonies/Raster/services/map_service.md",sourceDirName:"MapColonies/Raster/services",slug:"/MapColonies/Raster/services/map-service",permalink:"/developer-portal/pr-preview/pr-151/docs/MapColonies/Raster/services/map-service",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/Raster/services/map_service.md",tags:[{inline:!0,label:"wmts",permalink:"/developer-portal/pr-preview/pr-151/docs/tags/wmts"},{inline:!0,label:"raster",permalink:"/developer-portal/pr-preview/pr-151/docs/tags/raster"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-151/docs/tags/api"}],version:"current",frontMatter:{id:"raster-map-service",slug:"map-service",title:"Map \ud83d\uddfa\ufe0f",tags:["wmts","raster","API"]},sidebar:"docSidebar",previous:{title:"Export \ud83d\udce6",permalink:"/developer-portal/pr-preview/pr-151/docs/MapColonies/Raster/services/raster-export"},next:{title:"Vector",permalink:"/developer-portal/pr-preview/pr-151/docs/MapColonies/vector/vector-overview"}},l={},c=[{value:"GetCapabilities",id:"getcapabilities",level:2},{value:"WMTS layer consumption example",id:"wmts-layer-consumption-example",level:3},{value:"GetTile",id:"gettile",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"map-service-\ufe0f",children:"Map Service \ud83d\uddfa\ufe0f"})}),"\n",(0,t.jsxs)(r.p,{children:["The raster map service uses the ",(0,t.jsx)(r.a,{href:"/docs/ogc/protocols/ogc-wmts",children:"WMTS"})," protocol which is a READ-ONLY Web Map Tile Service.\nIt's a standard protocol for serving pre-rendered or run-time computed georeferenced map tiles over the Internet."]}),"\n",(0,t.jsxs)(r.p,{children:["It provides facilities for searching and retrieving raster layers data with the ",(0,t.jsx)(r.code,{children:"GetCapabilities"})," and ",(0,t.jsx)(r.code,{children:"GetTile"})," operations, all other operations are invalid.\nFor the full capabilities provided by the service see ",(0,t.jsx)(r.a,{href:"#getcapabilities",children:"GetCapabilities"})]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Authentication must be integrated in order to communicate with Map and Catalog services."}),(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.strong,{children:["See the principles ",(0,t.jsx)(r.a,{href:"/docs/MapColonies/authentication",children:"here"})]})]})}),"\n",(0,t.jsx)(r.h2,{id:"getcapabilities",children:"GetCapabilities"}),"\n",(0,t.jsxs)(r.p,{children:["A WMTS server responding to a ",(0,t.jsx)(r.strong,{children:"GetCapabilities"})," request returns metadata about the service, including supported operations and parameters, and a list of the available layers."]}),"\n",(0,t.jsx)(r.p,{children:"An example of a GetCapabilities request is:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"GET request\n\nhttps://ows.terrestris.de/osm/service?\nREQUEST=GetCapabilities&\nSERVICE=WMTS\n"})}),"\n",(0,t.jsx)(r.h3,{id:"wmts-layer-consumption-example",children:"WMTS layer consumption example"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"<MAP_SERVER-RASTER_URL>/wmts/{Layer}/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"{Layer}"})," - the name of the layer (ex. ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"Ortho_25cm"})}),")"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"{TileMatrixSet}"})," - define the grid name of the layer,"]}),"\n",(0,t.jsxs)(r.admonition,{type:"tip",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"How to get Grid name?"})," Grid name (",(0,t.jsx)(r.code,{children:"TileMatrixSet"}),") can be reached by ",(0,t.jsx)(r.strong,{children:"GetCapabilities"})," response ",(0,t.jsx)(r.a,{href:"/docs/MapColonies/Raster/Guides/raster-getting-started#get-layer-capabilities-step-4",children:"Raster - Get Started / Step 4"})]}),(0,t.jsx)("figure",{children:(0,t.jsx)("img",{src:i(75530).A,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"100%"}})})]}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.code,{children:"<TileMatrixSetLink>"})," element for supported Grid names."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"{TileMatrix}"})," - define the zoom level (Z)"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"{TileCol}"})," - define the column (X)"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"{TileRow}"})," - define the row (Y)"]}),"\n",(0,t.jsxs)(r.p,{children:["Final request example:\n",(0,t.jsx)(r.code,{children:"<MAP_SERVER-RASTER_URL>/wmts/bluemarble-1.0-OrthophotoHistory/newGrids/2/0/2.png"}),"\nWill bring a requested tile image"]}),"\n",(0,t.jsx)(r.admonition,{type:"danger",children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Do not change"})," the ",(0,t.jsx)(r.code,{children:"/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png"})," with custom values while consuming in applications - see examples below."]})}),"\n",(0,t.jsx)(r.h2,{id:"gettile",children:"GetTile"}),"\n",(0,t.jsxs)(r.p,{children:["In response to a ",(0,t.jsx)(r.strong,{children:"GetTile"})," KVP request, or under a resource-oriented style, a Tile resource that complies with the requested parameters would be returned. A correctly formulated request will bring a tile requested image."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"GET request\n\nhttp://cite.deegree.org/deegree-webservices-3.4-RC3/services/wmts100?\nservice=WMTS&\nrequest=GetTile&\nversion=1.0.0&\nLayer=cite&\nStyle=default&\nFormat=image/png&\nTileMatrixSet=InspireCrs84Quad&\nTileMatrix=17&\nTileRow=4&\nTileCol=4\n"})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75530:(e,r,i)=>{i.d(r,{A:()=>t});const t=i.p+"assets/images/map_proxy_getcap_ortho_example-47affc1b3fd5016c979187427cfbc0d7.png"},28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>o});var t=i(96540);const s={},n=t.createContext(s);function a(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);