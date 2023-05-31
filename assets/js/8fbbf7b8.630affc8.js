"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[36],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>s});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=g(t,["components","mdxType","originalType","parentName"]),o=d(r),N=n,s=o["".concat(p,".").concat(N)]||o[N]||k[N]||i;return r?a.createElement(s,l(l({ref:e},m),{},{components:r})):a.createElement(s,l({ref:e},m))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=N;var g={};for(var p in e)hasOwnProperty.call(e,p)&&(g[p]=e[p]);g.originalType=t,g[o]="string"==typeof t?t:n,l[1]=g;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}N.displayName="MDXCreateElement"},80809:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>g,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={id:"raster-overview",slug:"overview",title:"Raster",sidebar_position:1,tags:["raster","overview"]},l=void 0,g={unversionedId:"MapColonies/Raster/raster-overview",id:"MapColonies/Raster/raster-overview",title:"Raster",description:"Raster Overview",source:"@site/docs/MapColonies/Raster/README.md",sourceDirName:"MapColonies/Raster",slug:"/MapColonies/Raster/overview",permalink:"/developer-portal/docs/MapColonies/Raster/overview",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/Raster/README.md",tags:[{label:"raster",permalink:"/developer-portal/docs/tags/raster"},{label:"overview",permalink:"/developer-portal/docs/tags/overview"}],version:"current",sidebarPosition:1,frontMatter:{id:"raster-overview",slug:"overview",title:"Raster",sidebar_position:1,tags:["raster","overview"]},sidebar:"docSidebar",previous:{title:"Authentication",permalink:"/developer-portal/docs/MapColonies/authentication"},next:{title:"Guides",permalink:"/developer-portal/docs/category/guides"}},p={},d=[{value:"Raster Overview",id:"raster-overview",level:2},{value:"Terms",id:"terms",level:2},{value:"Raster Tiling scheme In Detail",id:"raster-tiling-scheme-in-detail",level:2}],m={toc:d},o="wrapper";function k(t){let{components:e,...i}=t;return(0,n.kt)(o,(0,a.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"raster-overview"},"Raster Overview"),(0,n.kt)("p",null,"Orthophoto images are generated from satellite imagery or aerial photography. In the case of aerial photography, the raw frames are matched and resolved into photo blocks. Then, they and geometrically corrected (using DTM), anchored to well-known points, visually improved, and assembled into a homogeneous orthophoto mosaic, which can be combined of multiple files.\nA ",(0,n.kt)("strong",{parentName:"p"},"discrete layer")," represents a geographical region and is composed of multiple orthophoto mosaics with the same resolution, color scheme, and classification. A discrete layer can be included in the best ",(0,n.kt)("strong",{parentName:"p"},"mosaic"),", a universal map which is a fusion of multiple discrete layers."),(0,n.kt)("figure",null,(0,n.kt)("img",{src:r(79648).Z,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"}})),(0,n.kt)("h2",{id:"terms"},"Terms"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Term"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Raster Geodetic Datum")),(0,n.kt)("td",{parentName:"tr",align:"left"},"World Geodetic System of WGS 84 (also known as WGS 1984 ensemble: EPSG:4326 for 2D coordinate reference system (CRS))")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Raster Map projection")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Latitude / Longitude Projection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Raster Best Practice Protocol")),(0,n.kt)("td",{parentName:"tr",align:"left"},"WMTS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Raster Tiling scheme")),(0,n.kt)("td",{parentName:"tr",align:"left"},"InspireCRS84Quad (World CRS84 TileMatrixSet), That tiling schemes consists of two 256x256 tiles at its zoom level 0, in EPSG:4326 CRS, with extent in longitude in the range ","[-180,180]"," and in latitude in the range ","[-90,90]",".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Raster Tile Size")),(0,n.kt)("td",{parentName:"tr",align:"left"},"256*256")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Raster Tile Format")),(0,n.kt)("td",{parentName:"tr",align:"left"},"PNG / JPEG")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Auth token")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A JWT token (you can aquire it by contacting our product owner) for raster services passed via http QUERY_PARAM. There are different kinds of token permissions (raster catalog, map, export, etc.. services)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Zoom Level")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The layer zoom level is determined by the field ",(0,n.kt)("em",{parentName:"td"},"mc:maxResolutionDeg"),", the zoom level is calculated by the tiling scheme below (Pixel Size (degrees) is maxResolutionDeg), for example, for the following ",(0,n.kt)("em",{parentName:"td"},"mc:maxResolutionDeg")," 2.14577E-05 >= resolution > 1.07288E-05 a zoom level of ",(0,n.kt)("strong",{parentName:"td"},"15")," will be created.")))),(0,n.kt)("h2",{id:"raster-tiling-scheme-in-detail"},"Raster Tiling scheme In Detail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Zoom Level Id"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Matrix Width (tiles)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Matrix Height (tiles)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tile Size (degrees)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Pixel Size (degrees)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tile Size* (meters)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Pixel Size* (meters)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"180"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.703125"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20,037,508.34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"78,271.52")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"90"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3515625"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10,018,754.17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"39,135.76")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.17578125"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5,009,377.09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19,567.88")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.087890625"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2,504,688.54"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9,783.94")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.043945313"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1,252,344.27"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4,891.97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"64"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.625"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.021972656"),(0,n.kt)("td",{parentName:"tr",align:"right"},"626,172.14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2,445.98")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"128"),(0,n.kt)("td",{parentName:"tr",align:"right"},"64"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.8125"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.010986328"),(0,n.kt)("td",{parentName:"tr",align:"right"},"313,086.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1,222.99")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"256"),(0,n.kt)("td",{parentName:"tr",align:"right"},"128"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.40625"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.005493164"),(0,n.kt)("td",{parentName:"tr",align:"right"},"156,543.03"),(0,n.kt)("td",{parentName:"tr",align:"right"},"611.50")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"512"),(0,n.kt)("td",{parentName:"tr",align:"right"},"256"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.703125"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.002746582"),(0,n.kt)("td",{parentName:"tr",align:"right"},"78,271.52"),(0,n.kt)("td",{parentName:"tr",align:"right"},"305.75")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1024"),(0,n.kt)("td",{parentName:"tr",align:"right"},"512"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3515625"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.001373291"),(0,n.kt)("td",{parentName:"tr",align:"right"},"39,135.76"),(0,n.kt)("td",{parentName:"tr",align:"right"},"152.87")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2048"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1024"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.17578125"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.000686646"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19,567.88"),(0,n.kt)("td",{parentName:"tr",align:"right"},"76.44")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4096"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2048"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.087890625"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.000343323"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9,783.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"38.22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8192"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4096"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.043945313"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.000171661"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4,891.97"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.11")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16384"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8192"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.021972656"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.58307E-05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2,445.98"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32768"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16384"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.010986328"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.29153E-05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1,222.99"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.78")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"65536"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32768"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.005493164"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.14577E-05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"611.50"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.39")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"131072"),(0,n.kt)("td",{parentName:"tr",align:"right"},"65536"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.002746582"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.07288E-05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"305.75"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.19")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"262144"),(0,n.kt)("td",{parentName:"tr",align:"right"},"131072"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.001373291"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.36442E-06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"152.87"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.60")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"524288"),(0,n.kt)("td",{parentName:"tr",align:"right"},"262144"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.000686646"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.68221E-06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"76.44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.30")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"19"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1048576"),(0,n.kt)("td",{parentName:"tr",align:"right"},"524288"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.000343323"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.34110E-06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"38.22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2097152"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1048576"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.000171662"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.70552E-07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.075")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4194304"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2097152"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.000085831"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.35276E-07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.55"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.037")))))}k.isMDXComponent=!0},79648:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/raster_mosaic-6b2941b5d1e5dd72078d734f559efe4f.jpg"}}]);