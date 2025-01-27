"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7899],{7617:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=t(74848),a=t(28453);const n={slug:"2022-q3",title:"2022-Q3 \ud83c\udf89",authors:{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png"},tags:["production","release-notes","3D","vector","raster"]},s="\ud83c\udf89 2022-Q3-02 Release Notes",l={permalink:"/developer-portal/pr-preview/pr-142/blog/2022-q3",editUrl:"https://github.com/MapColonies/developer-portal/blog/2022-12-15-2022-Q3.md",source:"@site/blog/2022-12-15-2022-Q3.md",title:"2022-Q3 \ud83c\udf89",description:"\ud83d\udcc4 TL;DR",date:"2022-12-15T00:00:00.000Z",tags:[{inline:!0,label:"production",permalink:"/developer-portal/pr-preview/pr-142/blog/tags/production"},{inline:!0,label:"release-notes",permalink:"/developer-portal/pr-preview/pr-142/blog/tags/release-notes"},{inline:!0,label:"3D",permalink:"/developer-portal/pr-preview/pr-142/blog/tags/3-d"},{inline:!0,label:"vector",permalink:"/developer-portal/pr-preview/pr-142/blog/tags/vector"},{inline:!0,label:"raster",permalink:"/developer-portal/pr-preview/pr-142/blog/tags/raster"}],readingTime:2.68,hasTruncateMarker:!1,authors:[{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png",imageURL:"/developer-portal/pr-preview/pr-142/authors/syncush.png",key:null,page:null}],frontMatter:{slug:"2022-q3",title:"2022-Q3 \ud83c\udf89",authors:{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png",imageURL:"/authors/syncush.png"},tags:["production","release-notes","3D","vector","raster"]},unlisted:!1,prevItem:{title:"2022-Q4 \ud83c\udf89",permalink:"/developer-portal/pr-preview/pr-142/blog/2022-q4"}},o={authorsImageUrls:[void 0]},c=[{value:"\ud83d\udcc4 TL;DR",id:"-tldr",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"Raster",id:"raster",level:3},{value:"Overview",id:"overview",level:4},{value:"Catalog Service",id:"catalog-service",level:4},{value:"Tile Serving Service (\u201cMap Server\u201d)",id:"tile-serving-service-map-server",level:4},{value:"Known Bugs \ud83d\udc1e",id:"known-bugs-",level:4},{value:"3D",id:"3d",level:3},{value:"Overview",id:"overview-1",level:4},{value:"Catalog Service",id:"catalog-service-1",level:4},{value:"Tile Serving Service",id:"tile-serving-service",level:4},{value:"Vector",id:"vector",level:3},{value:"Replication Service",id:"replication-service",level:4},{value:"Digital Map Rasterized Vector Products",id:"digital-map-rasterized-vector-products",level:4},{value:"Catalog App",id:"catalog-app",level:3},{value:"Overview",id:"overview-2",level:4},{value:"Products Management",id:"products-management",level:4},{value:"Known Bugs \ud83d\udc1e",id:"known-bugs--1",level:4}];function d(e){const r={a:"a",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"-tldr",children:"\ud83d\udcc4 TL;DR"}),"\n",(0,i.jsx)(r.p,{children:"Production-ready release, ready for integration and going live. Mainly focused on tile streaming services and catalog services."}),"\n",(0,i.jsx)(r.h2,{id:"-features",children:"\ud83d\ude80 Features"}),"\n",(0,i.jsx)(r.h3,{id:"raster",children:"Raster"}),"\n",(0,i.jsx)("img",{src:t(91750).A,alt:"wmts_logo",width:"500",height:"250"}),"\n",(0,i.jsx)(r.h4,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(r.p,{children:"Optimal, complete, easy, efficient, and robust solution for raster product consumption is now available. Just start by querying the catalog for the desired product and set your map component up in no time."}),"\n",(0,i.jsx)(r.h4,{id:"catalog-service",children:"Catalog Service"}),"\n",(0,i.jsxs)(r.p,{children:["You are now able to search, and filter all the available raster products in your cloud environment via CSW protocol. Refer to the profile of the raster records ",(0,i.jsx)(r.a,{href:"/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v1",children:"here"})]}),"\n",(0,i.jsx)(r.h4,{id:"tile-serving-service-map-server",children:"Tile Serving Service (\u201cMap Server\u201d)"}),"\n",(0,i.jsxs)(r.p,{children:["You are now able to consume raster tiles via the tile serving service in the WMTS protocol. Check ",(0,i.jsx)(r.a,{href:"/docs/MapColonies/Raster/Guides/raster-getting-started",children:"here"})," for a step-by-step tutorial."]}),"\n",(0,i.jsx)(r.h4,{id:"known-bugs-",children:"Known Bugs \ud83d\udc1e"}),"\n",(0,i.jsx)(r.p,{children:"GetCapabilities shows the wrong extent of the layer."}),"\n",(0,i.jsx)(r.p,{children:"There is up to 5 minutes delay between a layer presented in the catalog to be available for consumption via the tile server."}),"\n",(0,i.jsx)(r.h3,{id:"3d",children:"3D"}),"\n",(0,i.jsx)("img",{src:t(73494).A,alt:"3D",width:"500",height:"250"}),"\n",(0,i.jsx)(r.h4,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsx)(r.p,{children:"Optimal, complete, easy, efficient, and robust solution for raster product consumption is now available. Just start by querying the catalog for the desired product and set your map component up in no time."}),"\n",(0,i.jsx)(r.h4,{id:"catalog-service-1",children:"Catalog Service"}),"\n",(0,i.jsxs)(r.p,{children:["You are now able to search, and filter all the available 3D photorealistic models in your cloud environment via CSW protocol. Refer to the profile of the 3D records ",(0,i.jsx)(r.a,{href:"/docs/MapColonies/3D/services/catalog/catalog-profile-v2",children:"here"})]}),"\n",(0,i.jsx)(r.h4,{id:"tile-serving-service",children:"Tile Serving Service"}),"\n",(0,i.jsxs)(r.p,{children:["You are now able to consume 3D tiles (b3dm) via the tile serving service in a tile layer (\u201cXYZ\u201d) protocol. Check ",(0,i.jsx)(r.a,{href:"/docs/MapColonies/3D/Guides/3d-getting-started",children:"here"})," for a step-by-step tutorial."]}),"\n",(0,i.jsx)(r.h3,{id:"vector",children:"Vector"}),"\n",(0,i.jsx)(r.p,{children:"In this version, we present a new service and rasterized vector products."}),"\n",(0,i.jsx)("img",{src:t(14559).A,alt:"replication",width:"500",height:"250"}),"\n",(0,i.jsx)(r.h4,{id:"replication-service",children:"Replication Service"}),"\n",(0,i.jsxs)(r.p,{children:["This new service allows you to replicate vector layers to your environment including keeping track of changes along the timeline, as of the day of the release the buildings layer is now available for consumption. refer to ",(0,i.jsx)(r.a,{href:"/docs/MapColonies/vector/services/replication/info",children:"here"}),"."]}),"\n",(0,i.jsx)(r.h4,{id:"digital-map-rasterized-vector-products",children:"Digital Map Rasterized Vector Products"}),"\n",(0,i.jsx)(r.p,{children:"In this version, we introduce several rasterized vector products."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Base map - a simple non-transparent basic overlay for your maps. the map continuously updates with the latest changes."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Control Map - the famous universal control language map."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"catalog-app",children:"Catalog App"}),"\n",(0,i.jsx)(r.h4,{id:"overview-2",children:"Overview"}),"\n",(0,i.jsx)(r.p,{children:"The catalog app is now live, and the web application allows you to view, search and filter 3D, Raster, and Vector products."}),"\n",(0,i.jsx)("img",{src:t(26890).A,alt:"app_view"}),"\n",(0,i.jsx)("img",{src:t(75810).A,alt:"app_view"}),"\n",(0,i.jsx)("img",{src:t(39467).A,alt:"app_view"}),"\n",(0,i.jsx)("img",{src:t(47476).A,alt:"app_view"}),"\n",(0,i.jsx)(r.h4,{id:"products-management",children:"Products Management"}),"\n",(0,i.jsx)(r.p,{children:"For admin users, the products management view is now available. You are able to edit the metadata of products."}),"\n",(0,i.jsx)(r.h4,{id:"known-bugs--1",children:"Known Bugs \ud83d\udc1e"}),"\n",(0,i.jsx)(r.p,{children:"Job Management:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"The refresh button makes the job\u2019s progress disappear."}),"\n",(0,i.jsx)(r.li,{children:"Job progress won\u2019t update with new data when the dialog is open."}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"MISC:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Backend errors aren't prompted properly to the client."}),"\n",(0,i.jsx)(r.li,{children:"Special characters support in metadata external ID field."}),"\n",(0,i.jsx)(r.li,{children:"When opening the file browser in the ingestion form, it messes up the app\u2019s styles. (Refreshing the app helps)."}),"\n",(0,i.jsx)(r.li,{children:"When searching an area on the map for products, update any field from the product\u2019s metadata and then select edit again, the selected metadata will be the old one."}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},73494:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/3d_city_model-45bff9cdd303fa095faf27d25cdd7146.png"},26890:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/app_view-48ff80a99031f3ac6a9a114221819b48.png"},75810:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/app_view2-67e35155d7c7782d0ec794dbb14bd340.png"},39467:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/app_view3-7dc42b45a2d8cf0fd850c39380dbedd9.png"},47476:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/app_view4-2d4f6e52d013ef729a1dc08e2752bb75.png"},14559:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/replication-4b33bd8f147d7fd4bae09fa89fbfb82c.png"},91750:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/wmts_logo-cc8cefa60d663abdc0f76e36a93977d8.png"},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var i=t(96540);const a={},n=i.createContext(a);function s(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);