"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[827],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,u=d["".concat(l,".").concat(h)]||d[h]||c[h]||n;return a?r.createElement(u,s(s({ref:t},m),{},{components:a})):r.createElement(u,s({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},32385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={id:"openstreetmap-carto",slug:"openstreetmap-carto",title:"OpenStreetMap Cartography",tags:["osm","carto","raster","symbols"]},s="OpenStreetMap Carto",i={unversionedId:"MapColonies/openstreetmap/osm-carto/openstreetmap-carto",id:"MapColonies/openstreetmap/osm-carto/openstreetmap-carto",title:"OpenStreetMap Cartography",description:"The openstreetmap website",source:"@site/docs/MapColonies/openstreetmap/osm-carto/README.md",sourceDirName:"MapColonies/openstreetmap/osm-carto",slug:"/MapColonies/openstreetmap/osm-carto/openstreetmap-carto",permalink:"/developer-portal/pr-preview/pr-91/docs/MapColonies/openstreetmap/osm-carto/openstreetmap-carto",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/osm-carto/README.md",tags:[{label:"osm",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/osm"},{label:"carto",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/carto"},{label:"raster",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/raster"},{label:"symbols",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/symbols"}],version:"current",frontMatter:{id:"openstreetmap-carto",slug:"openstreetmap-carto",title:"OpenStreetMap Cartography",tags:["osm","carto","raster","symbols"]},sidebar:"docSidebar",previous:{title:"Symbology",permalink:"/developer-portal/pr-preview/pr-91/docs/category/symbology"},next:{title:"Areas",permalink:"/developer-portal/pr-preview/pr-91/docs/MapColonies/openstreetmap/osm-carto/osm-carto-areas-symbology"}},l={},p=[{value:"How to use",id:"how-to-use",level:2},{value:"What did we do",id:"what-did-we-do",level:2},{value:"Style key",id:"style-key",level:2},{value:"&quot;My house doesn&#39;t appears on the map, fix it \ud83d\ude21&quot;",id:"my-house-doesnt-appears-on-the-map-fix-it-",level:2},{value:"Stylesheet design goals",id:"stylesheet-design-goals",level:2},{value:"Main goals",id:"main-goals",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openstreetmap-carto"},"OpenStreetMap Carto"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The openstreetmap website",src:a(40650).Z,width:"849",height:"310"}),"\nOpenStreetMap Carto (or OSM Carto or osm-carto for short) is an open-source stylesheet for rendering OpenStreetMap data to raster tiles. Since 2013, the main OpenStreetMap homepage has featured OSM Carto tiles as the default tile layer."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"The style can be consumed as a raster tiles layer from Raster team services.\nFor more information check ",(0,o.kt)("a",{parentName:"p",href:"/docs/MapColonies/Raster/Guides/raster-getting-started"},"Raster step by step guide"),"."),(0,o.kt)("h2",{id:"what-did-we-do"},"What did we do"),(0,o.kt)("p",null,"As this stylesheet is an open-source, we had to make a few minor changes compared to the original one."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We changed the stylesheet projection from Web Mercator to WGS84. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/terms#mapping"},"mapping terms"),"."),(0,o.kt)("li",{parentName:"ul"},"We modified the database insertion script to prefer names in Hebrew and English when possible."),(0,o.kt)("li",{parentName:"ul"},"We imported data from the Natural Earth dataset in places where we didn't import OSM data.")),(0,o.kt)("h2",{id:"style-key"},"Style key"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/osm-carto/osm-carto-symbols"},"Symbols")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/osm-carto/osm-carto-lines-symbology"},"Lines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/osm-carto/osm-carto-areas-symbology"},"Areas"))),(0,o.kt)("h2",{id:"my-house-doesnt-appears-on-the-map-fix-it-"},'"My house doesn\'t appears on the map, fix it \ud83d\ude21"'),(0,o.kt)("p",null,"First, we are sorry, but its not our fault \ud83e\udd37"),(0,o.kt)("p",null,"We import the data as is from the internet, without any change or modification to maintain authenticity. Because OpenStreetMap is free and Open Source, you can go on their website at ",(0,o.kt)("inlineCode",{parentName:"p"},"openstreetmap.org"),", and make the changes yourself. Be sure to read the guidelines before making any change to avoid it being removed."),(0,o.kt)("h2",{id:"stylesheet-design-goals"},"Stylesheet design goals"),(0,o.kt)("small",null,"Taken from the project repository"),"### General purpose",(0,o.kt)("p",null,"This style has multiple purposes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's an important feedback mechanism for mappers to validate their edits and helps to prevent unfavorable fragmentation of tag use."),(0,o.kt)("li",{parentName:"ul"},"It's a major part of the public face of OpenStreetMap, for many people the map on osm.org rendered with this style ",(0,o.kt)("em",{parentName:"li"},"is")," OpenStreetMap."),(0,o.kt)("li",{parentName:"ul"},"It's used in many map applications as a general purpose map."),(0,o.kt)("li",{parentName:"ul"},"It's an exemplar stylesheet for rendering OSM data.")),(0,o.kt)("p",null,"There is no ranking of these purposes.  To allow serving all of them and to\navoid satisfying only some at the cost of the others the following main goals\nhave been identified."),(0,o.kt)("h3",{id:"main-goals"},"Main goals"),(0,o.kt)("p",null,"The following goals need to be balanced against each other to serve the purposes\nabove.  There is no fixed order of priorities.  Apart from these goals there are\nof course also technical constraints and requirements that need to be taken into\naccount."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Legibility and clarity")," - The map should be intuitively readable by users with some general experience using maps without a map key, preferrably with relatively little effort.  A map key or more extensive experience using this map style can be required for clearly identifying minor differences or the exact meaning of certain features but in broad strokes orientation and identification of map elements should be possible on an intuitive level.  We also aim for the map appearance to be esthetically pleasing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Being understandable and supportive for mappers")," - To serve as feedback for mappers and encourage correct mapping this style needs to render the data in a way that allows mappers to understand how the data produces a certain rendering result based on basic observation without in depth understanding how map rendering works or looking at the style implementation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Diversity")," - The style should represent the diversity of the OSM community and geography in general.  The most obvious element to serve this goal is showing the local names everywhere on earth in their respective scripts.  This goal however goes beyond labels.  Both physical and cultural geography differs a lot globally and the aim is to represent this variety with equal determination - well mapped areas are not supposed to have more weight here than less mapped parts of the world.  This also means the target map user is the potential global map user and no special consideration is given to the current geographic distribution of actual map use."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A rich map")," - This style deliberately creating a fairly rich map showing a significant number of different features.  This way it shows the richness of OSM data and gives a broad recognition to the mappers' work.  The aim is not however to show all or even most of the OSM data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maintainability")," - The implementation of this style should not be too hard to maintain. This refers to both the volume and complexity of the code and how fast the style can be parsed when rendering it, which is very important for efficient development work. So the amount of code should be kept small and complex and fragile interdependencies should be avoided. If the code is difficult to maintain this would ultimately seriously affect all of the above goals."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Adaptability and ease of use")," - The style should be easy to customize, like for creating localized or special purpose maps. It is also important to keep demands on rendering infrastructure for serving the style low so it is not too difficult and costly to set up a tile server for this style or a specialized variant of it.")))}c.isMDXComponent=!0},40650:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/osm-carto-45a4561c8314cf982dd9843a37ced2bc.png"}}]);