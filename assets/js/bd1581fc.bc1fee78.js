"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[2477],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,v=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(v,i(i({ref:t},c),{},{components:r})):a.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={id:"dem-map-service",slug:"map-service",title:"Map \ud83d\uddfa\ufe0f",tags:["wmts","wcs","dem","API"]},i="Map Server \ud83d\uddfa\ufe0f",p={unversionedId:"MapColonies/DEM/Services/dem-map-service",id:"MapColonies/DEM/Services/dem-map-service",title:"Map \ud83d\uddfa\ufe0f",description:"The DEM map service uses the WMTS and WCS protocols which are a READ-ONLY.",source:"@site/docs/MapColonies/DEM/Services/map_server.md",sourceDirName:"MapColonies/DEM/Services",slug:"/MapColonies/DEM/Services/map-service",permalink:"/developer-portal/docs/MapColonies/DEM/Services/map-service",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/DEM/Services/map_server.md",tags:[{label:"wmts",permalink:"/developer-portal/docs/tags/wmts"},{label:"wcs",permalink:"/developer-portal/docs/tags/wcs"},{label:"dem",permalink:"/developer-portal/docs/tags/dem"},{label:"API",permalink:"/developer-portal/docs/tags/api"}],version:"current",frontMatter:{id:"dem-map-service",slug:"map-service",title:"Map \ud83d\uddfa\ufe0f",tags:["wmts","wcs","dem","API"]},sidebar:"docSidebar",previous:{title:"Data coverage service",permalink:"/developer-portal/docs/MapColonies/DEM/Services/dem-data-coverage-service"},next:{title:"OpenStreetMap",permalink:"/developer-portal/docs/MapColonies/openstreetmap/openstreetmap"}},s={},l=[{value:"GetCapabilities",id:"getcapabilities",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"map-server-\ufe0f"},"Map Server \ud83d\uddfa\ufe0f"),(0,n.kt)("p",null,"The DEM map service uses the ",(0,n.kt)("a",{parentName:"p",href:"/ogc-protocols/ogc-wmts.md"},"WMTS")," and ",(0,n.kt)("a",{parentName:"p",href:"/ogc-protocols/ogc-wcs.md"},"WCS")," protocols which are a READ-ONLY.\nThose are standard protocols for serving pre-rendered or run-time computed georeferenced map tiles or DEM data over the Internet."),(0,n.kt)("p",null,"It provides facilities for searching and retrieving raster layers data with the ",(0,n.kt)("inlineCode",{parentName:"p"},"GetCapabilities")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"GetTile")," operations, all other operations are invalid.\nFor the full capabilities provided by the service see ",(0,n.kt)("a",{parentName:"p",href:"#getcapabilities"},"GetCapabilities")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Authentication must be integrated in order to communicate with Map and Catalog services."),(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"See the principles ",(0,n.kt)("a",{parentName:"strong",href:"/docs/MapColonies/authentication"},"here")))),(0,n.kt)("h2",{id:"getcapabilities"},"GetCapabilities"),(0,n.kt)("p",null,"A WMTS server responding to a ",(0,n.kt)("strong",{parentName:"p"},"GetCapabilities")," request returns metadata about the service, including supported operations and parameters, and a list of the available layers."),(0,n.kt)("p",null,"An example of a GetCapabilities request is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET request\n\nhttps://ows.terrestris.de/osm/service?\nREQUEST=GetCapabilities&\nSERVICE=WMTS\n")))}m.isMDXComponent=!0}}]);