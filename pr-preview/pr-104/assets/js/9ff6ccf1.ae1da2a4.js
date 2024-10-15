"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7181],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),d=p(r),v=o,g=d["".concat(s,".").concat(v)]||d[v]||u[v]||l;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=v;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[d]="string"==typeof e?e:o,i[1]=n;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},93743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const l={slug:"2022-q3",title:"2022-Q3 \ud83c\udf89",authors:{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png"},tags:["production","release-notes","3D","vector","raster"]},i="\ud83c\udf89 2022-Q3-02 Release Notes",n={permalink:"/developer-portal/pr-preview/pr-104/blog/2022-q3",editUrl:"https://github.com/MapColonies/developer-portal/blog/2022-12-15-2022-Q3.md",source:"@site/blog/2022-12-15-2022-Q3.md",title:"2022-Q3 \ud83c\udf89",description:"\ud83d\udcc4 TL;DR",date:"2022-12-15T00:00:00.000Z",formattedDate:"December 15, 2022",tags:[{label:"production",permalink:"/developer-portal/pr-preview/pr-104/blog/tags/production"},{label:"release-notes",permalink:"/developer-portal/pr-preview/pr-104/blog/tags/release-notes"},{label:"3D",permalink:"/developer-portal/pr-preview/pr-104/blog/tags/3-d"},{label:"vector",permalink:"/developer-portal/pr-preview/pr-104/blog/tags/vector"},{label:"raster",permalink:"/developer-portal/pr-preview/pr-104/blog/tags/raster"}],readingTime:2.68,hasTruncateMarker:!1,authors:[{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png",imageURL:"/authors/syncush.png"}],frontMatter:{slug:"2022-q3",title:"2022-Q3 \ud83c\udf89",authors:{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png",imageURL:"/authors/syncush.png"},tags:["production","release-notes","3D","vector","raster"]},prevItem:{title:"2022-Q4 \ud83c\udf89",permalink:"/developer-portal/pr-preview/pr-104/blog/2022-q4"}},s={authorsImageUrls:[void 0]},p=[{value:"\ud83d\udcc4 TL;DR",id:"-tldr",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"Raster",id:"raster",level:3},{value:"Overview",id:"overview",level:4},{value:"Catalog Service",id:"catalog-service",level:4},{value:"Tile Serving Service (\u201cMap Server\u201d)",id:"tile-serving-service-map-server",level:4},{value:"Known Bugs \ud83d\udc1e",id:"known-bugs-",level:4},{value:"3D",id:"3d",level:3},{value:"Overview",id:"overview-1",level:4},{value:"Catalog Service",id:"catalog-service-1",level:4},{value:"Tile Serving Service",id:"tile-serving-service",level:4},{value:"Vector",id:"vector",level:3},{value:"Replication Service",id:"replication-service",level:4},{value:"Digital Map Rasterized Vector Products",id:"digital-map-rasterized-vector-products",level:4},{value:"Catalog App",id:"catalog-app",level:3},{value:"Overview",id:"overview-2",level:4},{value:"Products Management",id:"products-management",level:4},{value:"Known Bugs \ud83d\udc1e",id:"known-bugs--1",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...l}=e;return(0,o.kt)(d,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"-tldr"},"\ud83d\udcc4 TL;DR"),(0,o.kt)("p",null,"Production-ready release, ready for integration and going live. Mainly focused on tile streaming services and catalog services."),(0,o.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,o.kt)("h3",{id:"raster"},"Raster"),(0,o.kt)("img",{src:r(46904).Z,alt:"wmts_logo",width:"500",height:"250"}),(0,o.kt)("h4",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Optimal, complete, easy, efficient, and robust solution for raster product consumption is now available. Just start by querying the catalog for the desired product and set your map component up in no time."),(0,o.kt)("h4",{id:"catalog-service"},"Catalog Service"),(0,o.kt)("p",null,"You are now able to search, and filter all the available raster products in your cloud environment via CSW protocol. Refer to the profile of the raster records ",(0,o.kt)("a",{parentName:"p",href:"/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v1"},"here")),(0,o.kt)("h4",{id:"tile-serving-service-map-server"},"Tile Serving Service (\u201cMap Server\u201d)"),(0,o.kt)("p",null,"You are now able to consume raster tiles via the tile serving service in the WMTS protocol. Check ",(0,o.kt)("a",{parentName:"p",href:"/docs/MapColonies/Raster/Guides/raster-getting-started"},"here")," for a step-by-step tutorial."),(0,o.kt)("h4",{id:"known-bugs-"},"Known Bugs \ud83d\udc1e"),(0,o.kt)("p",null,"GetCapabilities shows the wrong extent of the layer."),(0,o.kt)("p",null,"There is up to 5 minutes delay between a layer presented in the catalog to be available for consumption via the tile server."),(0,o.kt)("h3",{id:"3d"},"3D"),(0,o.kt)("img",{src:r(64811).Z,alt:"3D",width:"500",height:"250"}),(0,o.kt)("h4",{id:"overview-1"},"Overview"),(0,o.kt)("p",null,"Optimal, complete, easy, efficient, and robust solution for raster product consumption is now available. Just start by querying the catalog for the desired product and set your map component up in no time."),(0,o.kt)("h4",{id:"catalog-service-1"},"Catalog Service"),(0,o.kt)("p",null,"You are now able to search, and filter all the available 3D photorealistic models in your cloud environment via CSW protocol. Refer to the profile of the 3D records ",(0,o.kt)("a",{parentName:"p",href:"/docs/MapColonies/3D/services/catalog/catalog-profile-v2"},"here")),(0,o.kt)("h4",{id:"tile-serving-service"},"Tile Serving Service"),(0,o.kt)("p",null,"You are now able to consume 3D tiles (b3dm) via the tile serving service in a tile layer (\u201cXYZ\u201d) protocol. Check ",(0,o.kt)("a",{parentName:"p",href:"/docs/MapColonies/3D/Guides/3d-getting-started"},"here")," for a step-by-step tutorial."),(0,o.kt)("h3",{id:"vector"},"Vector"),(0,o.kt)("p",null,"In this version, we present a new service and rasterized vector products."),(0,o.kt)("img",{src:r(69317).Z,alt:"replication",width:"500",height:"250"}),(0,o.kt)("h4",{id:"replication-service"},"Replication Service"),(0,o.kt)("p",null,"This new service allows you to replicate vector layers to your environment including keeping track of changes along the timeline, as of the day of the release the buildings layer is now available for consumption. refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/MapColonies/vector/services/replication/info"},"here"),"."),(0,o.kt)("h4",{id:"digital-map-rasterized-vector-products"},"Digital Map Rasterized Vector Products"),(0,o.kt)("p",null,"In this version, we introduce several rasterized vector products."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Base map - a simple non-transparent basic overlay for your maps. the map continuously updates with the latest changes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Control Map - the famous universal control language map."))),(0,o.kt)("h3",{id:"catalog-app"},"Catalog App"),(0,o.kt)("h4",{id:"overview-2"},"Overview"),(0,o.kt)("p",null,"The catalog app is now live, and the web application allows you to view, search and filter 3D, Raster, and Vector products."),(0,o.kt)("img",{src:r(11728).Z,alt:"app_view"}),(0,o.kt)("img",{src:r(51696).Z,alt:"app_view"}),(0,o.kt)("img",{src:r(82757).Z,alt:"app_view"}),(0,o.kt)("img",{src:r(98617).Z,alt:"app_view"}),(0,o.kt)("h4",{id:"products-management"},"Products Management"),(0,o.kt)("p",null,"For admin users, the products management view is now available. You are able to edit the metadata of products."),(0,o.kt)("h4",{id:"known-bugs--1"},"Known Bugs \ud83d\udc1e"),(0,o.kt)("p",null,"Job Management:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The refresh button makes the job\u2019s progress disappear."),(0,o.kt)("li",{parentName:"ol"},"Job progress won\u2019t update with new data when the dialog is open.")),(0,o.kt)("p",null,"MISC:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Backend errors aren't prompted properly to the client."),(0,o.kt)("li",{parentName:"ol"},"Special characters support in metadata external ID field."),(0,o.kt)("li",{parentName:"ol"},"When opening the file browser in the ingestion form, it messes up the app\u2019s styles. (Refreshing the app helps)."),(0,o.kt)("li",{parentName:"ol"},"When searching an area on the map for products, update any field from the product\u2019s metadata and then select edit again, the selected metadata will be the old one.")))}u.isMDXComponent=!0},64811:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/3d_city_model-45bff9cdd303fa095faf27d25cdd7146.png"},11728:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/app_view-48ff80a99031f3ac6a9a114221819b48.png"},51696:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/app_view2-67e35155d7c7782d0ec794dbb14bd340.png"},82757:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/app_view3-7dc42b45a2d8cf0fd850c39380dbedd9.png"},98617:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/app_view4-2d4f6e52d013ef729a1dc08e2752bb75.png"},69317:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/replication-4b33bd8f147d7fd4bae09fa89fbfb82c.png"},46904:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/wmts_logo-cc8cefa60d663abdc0f76e36a93977d8.png"}}]);