"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[4782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||n;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={id:"ogc-wmts",title:"WMTS - Web Map Tile Service",sidebar_position:1,description:"Web Map Tile Service",slug:"ogc-wmts",tags:["ogc","map","raster","protocol","api"]},l="WMTS - Web Map Tile Service",p={unversionedId:"ogc/protocols/ogc-wmts",id:"ogc/protocols/ogc-wmts",title:"WMTS - Web Map Tile Service",description:"Web Map Tile Service",source:"@site/docs/ogc/protocols/ogc-wmts.md",sourceDirName:"ogc/protocols",slug:"/ogc/protocols/ogc-wmts",permalink:"/developer-portal/docs/ogc/protocols/ogc-wmts",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/ogc/protocols/ogc-wmts.md",tags:[{label:"ogc",permalink:"/developer-portal/docs/tags/ogc"},{label:"map",permalink:"/developer-portal/docs/tags/map"},{label:"raster",permalink:"/developer-portal/docs/tags/raster"},{label:"protocol",permalink:"/developer-portal/docs/tags/protocol"},{label:"api",permalink:"/developer-portal/docs/tags/api"}],version:"current",sidebarPosition:1,frontMatter:{id:"ogc-wmts",title:"WMTS - Web Map Tile Service",sidebar_position:1,description:"Web Map Tile Service",slug:"ogc-wmts",tags:["ogc","map","raster","protocol","api"]},sidebar:"ogcSidebar",previous:{title:"OGC Protocols",permalink:"/developer-portal/docs/category/ogc-protocols"},next:{title:"CSW Examples",permalink:"/developer-portal/docs/ogc/protocols/examples/csw-examples"}},i={},c=[],s={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wmts---web-map-tile-service"},"WMTS - Web Map Tile Service"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.ogc.org/standards/wmts"},"WMTS OGC standard")," \ud83c\udf10"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:r(8282).Z,title:"download"},"WMTS OGC standard")," \ud83d\udcda"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://opengeospatial.github.io/e-learning/wmts/text/operations.html"},"OGC e-learning")," \ud83c\udf10"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Operation"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetCapabilities"),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieves metadata about the service, including supported operations and parameters, and a list of the available layers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetTile"),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieves a map image for a specified area and content.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetFeatureInfo (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieves the underlying data, including geometry and attribute values, for a pixel location on a map.")))))}m.isMDXComponent=!0},8282:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/07-057r7_Web_Map_Tile_Service_Standard-1fa13423b2d8519065a7d860b864b8d7.pdf"}}]);