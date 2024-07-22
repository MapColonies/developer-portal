"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[2046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={id:"mesh-height-extraction",slug:"mesh-height-extraction",title:"Terrain Height Extraction",tags:["terrain","mesh","3D","guide","dem"]},a=void 0,p={unversionedId:"MapColonies/3D/Guides/mesh-height-extraction",id:"MapColonies/3D/Guides/mesh-height-extraction",title:"Terrain Height Extraction",description:"Terrain Height Extraction",source:"@site/docs/MapColonies/3D/Guides/3D_terrain_height_extraction.md",sourceDirName:"MapColonies/3D/Guides",slug:"/MapColonies/3D/Guides/mesh-height-extraction",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/3D/Guides/mesh-height-extraction",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/3D/Guides/3D_terrain_height_extraction.md",tags:[{label:"terrain",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/terrain"},{label:"mesh",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/mesh"},{label:"3D",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/3-d"},{label:"guide",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/guide"},{label:"dem",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/dem"}],version:"current",frontMatter:{id:"mesh-height-extraction",slug:"mesh-height-extraction",title:"Terrain Height Extraction",tags:["terrain","mesh","3D","guide","dem"]},sidebar:"gettingStartedSidebar",previous:{title:"Getting Started",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/3D/Guides/3d-getting-started"},next:{title:"Terrain Min-Max Height Extraction",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/3D/Guides/mesh-min-max-height-extraction"}},s={},l=[{value:"Terrain Height Extraction",id:"terrain-height-extraction",level:2},{value:"Cesium",id:"cesium",level:3}],c={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"terrain-height-extraction"},"Terrain Height Extraction"),(0,i.kt)("p",null,"The following section will help you understand how to extract ",(0,i.kt)("strong",{parentName:"p"},"terrain height")," value at a given position from a terrain provider using an example."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In order to set a ",(0,i.kt)("strong",{parentName:"p"},"terrain provider"),", see ",(0,i.kt)("a",{parentName:"p",href:"/docs/MapColonies/3D/Guides/3d-getting-started"},"here"),".")),(0,i.kt)("h3",{id:"cesium"},"Cesium"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"The minimum required version for cesium is v84."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Query the terrain height of two Cartographic positions\nconst positions = [\n  Cesium.Cartographic.fromDegrees(86.925145, 27.988257),\n  Cesium.Cartographic.fromDegrees(87.0, 28.0)\n];\nvoid Cesium.sampleTerrainMostDetailed(\n  viewer.terrainProvider,\n  positions\n).then((updatedPositions) => {\n  // positions[0].height and positions[1].height have been updated.\n  // updatedPositions is just a reference to positions.\n  console.log(updatedPositions);\n  ...\n});\n")))}u.isMDXComponent=!0}}]);