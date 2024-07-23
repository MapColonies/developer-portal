"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,g=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"mesh-min-max-height-extraction",slug:"mesh-min-max-height-extraction",title:"Terrain Min-Max Height Extraction",tags:["terrain","mesh","3D","guide","dem"]},o=void 0,l={unversionedId:"MapColonies/3D/Guides/mesh-min-max-height-extraction",id:"MapColonies/3D/Guides/mesh-min-max-height-extraction",title:"Terrain Min-Max Height Extraction",description:"Terrain Min-Max Height Extraction",source:"@site/docs/MapColonies/3D/Guides/3D_terrain_min_max_height_extraction.md",sourceDirName:"MapColonies/3D/Guides",slug:"/MapColonies/3D/Guides/mesh-min-max-height-extraction",permalink:"/developer-portal/pr-preview/pr-88/docs/MapColonies/3D/Guides/mesh-min-max-height-extraction",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/3D/Guides/3D_terrain_min_max_height_extraction.md",tags:[{label:"terrain",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/terrain"},{label:"mesh",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/mesh"},{label:"3D",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/3-d"},{label:"guide",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/guide"},{label:"dem",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/dem"}],version:"current",frontMatter:{id:"mesh-min-max-height-extraction",slug:"mesh-min-max-height-extraction",title:"Terrain Min-Max Height Extraction",tags:["terrain","mesh","3D","guide","dem"]},sidebar:"gettingStartedSidebar",previous:{title:"Terrain Height Extraction",permalink:"/developer-portal/pr-preview/pr-88/docs/MapColonies/3D/Guides/mesh-height-extraction"},next:{title:"Enable Hardware Accelaration",permalink:"/developer-portal/pr-preview/pr-88/docs/MapColonies/3D/Guides/HardwareAcceleration"}},p={},s=[{value:"Terrain Min-Max Height Extraction",id:"terrain-min-max-height-extraction",level:2},{value:"Cesium",id:"cesium",level:3}],m={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"terrain-min-max-height-extraction"},"Terrain Min-Max Height Extraction"),(0,a.kt)("p",null,"The following example shows how to extract ",(0,a.kt)("strong",{parentName:"p"},"min/max terrain height")," value from a terrain provider at a selected area, area is defined by a bounding polygon."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In order to set a ",(0,a.kt)("strong",{parentName:"p"},"terrain provider"),", see ",(0,a.kt)("a",{parentName:"p",href:"/docs/MapColonies/3D/Guides/3d-getting-started"},"here"),".")),(0,a.kt)("h3",{id:"cesium"},"Cesium"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"The minimum required version for cesium is v84."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const polygon = turf.polygon([\n  [\n    [-72.37353086471558, 42.32481709325035],\n    [-72.3738956451416, 42.324594989789134],\n    [-72.3735523223877, 42.324436343979656],\n    [-72.37387418746948, 42.32430942704402],\n    [-72.37363815307616, 42.32405559240466],\n    [-72.37391710281372, 42.32388108049599],\n    [-72.37363815307616, 42.32367483852534],\n    [-72.37352013587952, 42.32375416244021],\n    [-72.37370252609253, 42.32385728338004],\n    [-72.37343430519104, 42.32408732179058],\n    [-72.37361669540404, 42.32429356240905],\n    [-72.37331628799438, 42.324428411678674],\n    [-72.373605966568, 42.3246108543481],\n    [-72.37338066101074, 42.32473777067564],\n    [-72.37353086471558, 42.32481709325035]\n  ]\n]);\n\n// Takes a set of features, calculates the bbox of all input features\n// and returns a bounding box\nconst bbox = turf.bbox(polygon); // bbox extent in minX, minY, maxX, maxY order\nconst cellSide = 1.0; // distance between points (in units)\nconst options = {\n  units: 'meters', // used in calculating cellSide, can be: degrees, radians, miles, or kilometers (default)\n  mask: polygon // if passed a Polygon or MultiPolygon, the grid Points will be created only inside it\n};\n\n// Creates a Point grid from a bounding box, FeatureCollection or Feature.\nconst pointGrid = turf.pointGrid(bbox, cellSide, options); // grid of points\nconst pointGridCoordinates = pointGrid.features.map(f => f.geometry.coordinates);\n\nconsole.log(pointGridCoordinates); // 2,359 points inside the polygon\n\npointGridCoordinates.forEach(p => {\n  viewer.entities.add({\n    position: Cesium.Cartesian3.fromDegrees(p[0], p[1]),\n    point: {\n      color: Cesium.Color.fromRandom(),\n      pixelSize: 5,\n      heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND\n    }\n  });\n});\nconst positions = pointGridCoordinates.map(p => Cesium.Cartographic.fromDegrees(p[0], p[1]));\nvoid Cesium.sampleTerrainMostDetailed(\n  viewer.terrainProvider,\n  positions\n).then((updatedPositions) => {\n  // Calculate which coordinate has min/max height\n  ...\n});\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Above example is based on ",(0,a.kt)("inlineCode",{parentName:"strong"},"Pseudo code"),", you will have to adapt it in your own application to make it work."),"\n",(0,a.kt)("strong",{parentName:"p"},"Please note:",(0,a.kt)("br",null),"Time increases with the amount of sampling points.",(0,a.kt)("br",null),"Number of requests does not change however due to sampling points density which happen to correspond with the same tiles.",(0,a.kt)("br",null),"This example was tested against Cesium World Terrain over the internet.",(0,a.kt)("br",null),"Need to consider amount of sampling points against the resolution of the source height product."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Distance between points(cellSide)")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Number of Sampling Points")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Number of Requests")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Time to Sample (seconds)")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"30.0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0.53")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"20.0"),(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"0.56")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"15.0"),(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"0.59")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2,359"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"0.98")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0.5"),(0,a.kt)("td",{parentName:"tr",align:null},"9,427"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"1.15")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0.4"),(0,a.kt)("td",{parentName:"tr",align:null},"14,748"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"1.35")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0.3"),(0,a.kt)("td",{parentName:"tr",align:null},"26,225"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"1.59")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0.2"),(0,a.kt)("td",{parentName:"tr",align:null},"58,891"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"2.88")))))}u.isMDXComponent=!0}}]);