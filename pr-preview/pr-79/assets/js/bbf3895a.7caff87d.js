"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={id:"DEM-overview",slug:"dem-overview",title:"DEM",sidebar_position:1,tags:["DEM","overview"]},o=void 0,s={unversionedId:"MapColonies/DEM/DEM-overview",id:"MapColonies/DEM/DEM-overview",title:"DEM",description:"DEM (DTM / DSM)",source:"@site/docs/MapColonies/DEM/README.md",sourceDirName:"MapColonies/DEM",slug:"/MapColonies/DEM/dem-overview",permalink:"/developer-portal/docs/MapColonies/DEM/dem-overview",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/DEM/README.md",tags:[{label:"DEM",permalink:"/developer-portal/docs/tags/dem"},{label:"overview",permalink:"/developer-portal/docs/tags/overview"}],version:"current",sidebarPosition:1,frontMatter:{id:"DEM-overview",slug:"dem-overview",title:"DEM",sidebar_position:1,tags:["DEM","overview"]},sidebar:"docSidebar",previous:{title:"Profile v2",permalink:"/developer-portal/docs/MapColonies/3D/services/catalog/catalog-profile-v2"},next:{title:"Guides",permalink:"/developer-portal/docs/category/guides-2"}},l={},p=[{value:"DEM (DTM / DSM)",id:"dem-dtm--dsm",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"dem-dtm--dsm"},"DEM (DTM / DSM)"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Digital Elevation Model")," is a representation of elevation data that maps the surface of the earth, above a certain datum. There are essentially 2 types of DEM:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"Digital Terrain Model (DTM)")," represents the raw elevation of the bare earth ground without considering any over-ground features like plants and buildings.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"Digital Surface Model (DSM)")," represents the elevation of the earth's surface that a remote sensing system will first meet (2.5D \u201cblanket\u201d). Thus, the resulting DSM includes the elevation of the bare earth terrain plus the natural (e.g. trees, shrubs) and artificial man-made features (e.g. buildings, bridges)."))),(0,n.kt)("figure",null,(0,n.kt)("img",{src:r(12224).Z,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"90%"}})),(0,n.kt)("p",null,"DEM can be represented as raster or vector data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Raster")," DEM is represented as a 2D grid of uniform sized squares, where each square in the grid has a value that represents the height of the corresponding geographical point (also known as heightmap). This is actually a \u201c2.5D\u201d model, because there is only one height measure for each surface point. Raster DEM can be stored in a number of file formats but is mostly delivered as ",(0,n.kt)("strong",{parentName:"p"},"GeoTIFF"),", a format which in addition to the data contains the size of the raster and the position in geo coordinates, plus projection information.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Vector")," DEM / Quanitized Mesh is a representation of a continuous surface consisting a mesh of triangular facets. The most common format for Vector DEM is ",(0,n.kt)("strong",{parentName:"p"},"Triangulated Irregular Network (TIN)"),", which contains irregularly distributed nodes and lines (vertices) with X,Y,Z coordinates arranged in a network of non-overlapping triangles. These are meshes that contain only vertices where they define meaningful change in surface height. Vector DEM tiles are rendered more efficiently for displaying it in a 3D view."),(0,n.kt)("figure",null,(0,n.kt)("img",{src:r(53111).Z,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"90%"}})))),(0,n.kt)("p",null,"DEM can be rendered as 2D (raster) or 3D maps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("strong",{parentName:"li"},"2D")," view, the heights can be rendered as colors (based on some coloring scheme) or displayed as contour lines with hill shades.")),(0,n.kt)("figure",null,(0,n.kt)("img",{src:r(35948).Z,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"90%"}}),(0,n.kt)("br",null),(0,n.kt)("img",{src:r(34988).Z,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"90%"}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("strong",{parentName:"li"},"3D")," view, the terrain surface is visualized in an oblique three-dimensional perspective, using raster tiles or TIN mesh tiles. It can be augmented with a satellite imagery to make it look realistic.")),(0,n.kt)("figure",null,(0,n.kt)("img",{src:r(55367).Z,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"90%"}})))}u.isMDXComponent=!0},12224:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dtm_dsm-f82a87e4f73fc854d701479cc93a83f8.png"},34988:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/hillshade-9e44a5893a9369b66d83502f46d1939a.png"},35948:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/hillshade_on_raster-000fb4bfe64cb4087f2f82bfcf2e12fd.png"},55367:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/terrain_on_raster-657e0d16075e5da93f8e5977af43a61f.png"},53111:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/terrain_tin-f3f607f5f2da08ad5d183e21c7560ff2.png"}}]);