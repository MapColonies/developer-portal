"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3483],{90675:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=i(74848),r=i(28453);const s={id:"mesh-min-max-height-extraction",slug:"mesh-min-max-height-extraction",title:"Terrain Min-Max Height Extraction",tags:["terrain","mesh","3D","guide","dem"]},o=void 0,d={id:"MapColonies/3D/Guides/mesh-min-max-height-extraction",title:"Terrain Min-Max Height Extraction",description:"Terrain Min-Max Height Extraction",source:"@site/docs/MapColonies/3D/Guides/3D_terrain_min_max_height_extraction.md",sourceDirName:"MapColonies/3D/Guides",slug:"/MapColonies/3D/Guides/mesh-min-max-height-extraction",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/3D/Guides/mesh-min-max-height-extraction",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/3D/Guides/3D_terrain_min_max_height_extraction.md",tags:[{inline:!0,label:"terrain",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/terrain"},{inline:!0,label:"mesh",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/mesh"},{inline:!0,label:"3D",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/3-d"},{inline:!0,label:"guide",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/guide"},{inline:!0,label:"dem",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/dem"}],version:"current",frontMatter:{id:"mesh-min-max-height-extraction",slug:"mesh-min-max-height-extraction",title:"Terrain Min-Max Height Extraction",tags:["terrain","mesh","3D","guide","dem"]},sidebar:"gettingStartedSidebar",previous:{title:"Extract Height from Mesh",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/3D/Guides/mesh-height-extraction"},next:{title:"Enable Hardware Acceleration",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/3D/Guides/HardwareAcceleration"}},a={},l=[{value:"Terrain Min-Max Height Extraction",id:"terrain-min-max-height-extraction",level:2},{value:"Cesium",id:"cesium",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"terrain-min-max-height-extraction",children:"Terrain Min-Max Height Extraction"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to extract ",(0,t.jsx)(n.strong,{children:"min/max terrain height"})," value from a terrain provider at a selected area, area is defined by a bounding polygon."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["In order to set a ",(0,t.jsx)(n.strong,{children:"terrain provider"}),", see ",(0,t.jsx)(n.a,{href:"/docs/MapColonies/3D/Guides/3d-getting-started",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"cesium",children:"Cesium"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The minimum required version for cesium is v84."})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const polygon = turf.polygon([\n  [\n    [-72.37353086471558, 42.32481709325035],\n    [-72.3738956451416, 42.324594989789134],\n    [-72.3735523223877, 42.324436343979656],\n    [-72.37387418746948, 42.32430942704402],\n    [-72.37363815307616, 42.32405559240466],\n    [-72.37391710281372, 42.32388108049599],\n    [-72.37363815307616, 42.32367483852534],\n    [-72.37352013587952, 42.32375416244021],\n    [-72.37370252609253, 42.32385728338004],\n    [-72.37343430519104, 42.32408732179058],\n    [-72.37361669540404, 42.32429356240905],\n    [-72.37331628799438, 42.324428411678674],\n    [-72.373605966568, 42.3246108543481],\n    [-72.37338066101074, 42.32473777067564],\n    [-72.37353086471558, 42.32481709325035]\n  ]\n]);\n\n// Takes a set of features, calculates the bbox of all input features\n// and returns a bounding box\nconst bbox = turf.bbox(polygon); // bbox extent in minX, minY, maxX, maxY order\nconst cellSide = 1.0; // distance between points (in units)\nconst options = {\n  units: 'meters', // used in calculating cellSide, can be: degrees, radians, miles, or kilometers (default)\n  mask: polygon // if passed a Polygon or MultiPolygon, the grid Points will be created only inside it\n};\n\n// Creates a Point grid from a bounding box, FeatureCollection or Feature.\nconst pointGrid = turf.pointGrid(bbox, cellSide, options); // grid of points\nconst pointGridCoordinates = pointGrid.features.map(f => f.geometry.coordinates);\n\nconsole.log(pointGridCoordinates); // 2,359 points inside the polygon\n\npointGridCoordinates.forEach(p => {\n  viewer.entities.add({\n    position: Cesium.Cartesian3.fromDegrees(p[0], p[1]),\n    point: {\n      color: Cesium.Color.fromRandom(),\n      pixelSize: 5,\n      heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND\n    }\n  });\n});\nconst positions = pointGridCoordinates.map(p => Cesium.Cartographic.fromDegrees(p[0], p[1]));\nvoid Cesium.sampleTerrainMostDetailed(\n  viewer.terrainProvider,\n  positions\n).then((updatedPositions) => {\n  // Calculate which coordinate has min/max height\n  ...\n});\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["Above example is based on ",(0,t.jsx)(n.code,{children:"Pseudo code"}),", you will have to adapt it in your own application to make it work."]}),"\n",(0,t.jsxs)(n.strong,{children:["Please note:",(0,t.jsx)("br",{}),"Time increases with the amount of sampling points.",(0,t.jsx)("br",{}),"Number of requests does not change however due to sampling points density which happen to correspond with the same tiles.",(0,t.jsx)("br",{}),"This example was tested against Cesium World Terrain over the internet.",(0,t.jsx)("br",{}),"Need to consider amount of sampling points against the resolution of the source height product."]})]})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Distance between points(cellSide)"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Number of Sampling Points"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Number of Requests"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Time to Sample (seconds)"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"30.0"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"0.53"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20.0"}),(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"0.56"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"15.0"}),(0,t.jsx)(n.td,{children:"9"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"0.59"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.0"}),(0,t.jsx)(n.td,{children:"2,359"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"0.98"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0.5"}),(0,t.jsx)(n.td,{children:"9,427"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"1.15"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0.4"}),(0,t.jsx)(n.td,{children:"14,748"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"1.35"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0.3"}),(0,t.jsx)(n.td,{children:"26,225"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"1.59"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0.2"}),(0,t.jsx)(n.td,{children:"58,891"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"2.88"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);