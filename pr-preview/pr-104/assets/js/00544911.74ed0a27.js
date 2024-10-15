"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,u=d["".concat(i,".").concat(m)]||d[m]||g[m]||n;return r?a.createElement(u,l(l({ref:t},c),{},{components:r})):a.createElement(u,l({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const n={id:"raster-catalog-service",slug:"raster-catalog-service",title:"Catalog \ud83d\uddc3\ufe0f",description:"Discover all available raster layers",tags:["catalog","raster","API","csw","ogc"]},l="Catalog Service \ud83d\uddc3\ufe0f",s={unversionedId:"MapColonies/Raster/services/catalog/raster-catalog-service",id:"MapColonies/Raster/services/catalog/raster-catalog-service",title:"Catalog \ud83d\uddc3\ufe0f",description:"Discover all available raster layers",source:"@site/docs/MapColonies/Raster/services/catalog/README.md",sourceDirName:"MapColonies/Raster/services/catalog",slug:"/MapColonies/Raster/services/catalog/raster-catalog-service",permalink:"/developer-portal/pr-preview/pr-104/docs/MapColonies/Raster/services/catalog/raster-catalog-service",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/Raster/services/catalog/README.md",tags:[{label:"catalog",permalink:"/developer-portal/pr-preview/pr-104/docs/tags/catalog"},{label:"raster",permalink:"/developer-portal/pr-preview/pr-104/docs/tags/raster"},{label:"API",permalink:"/developer-portal/pr-preview/pr-104/docs/tags/api"},{label:"csw",permalink:"/developer-portal/pr-preview/pr-104/docs/tags/csw"},{label:"ogc",permalink:"/developer-portal/pr-preview/pr-104/docs/tags/ogc"}],version:"current",frontMatter:{id:"raster-catalog-service",slug:"raster-catalog-service",title:"Catalog \ud83d\uddc3\ufe0f",description:"Discover all available raster layers",tags:["catalog","raster","API","csw","ogc"]},sidebar:"docSidebar",previous:{title:"Profile v1",permalink:"/developer-portal/pr-preview/pr-104/docs/MapColonies/Raster/services/PolygonParts/polygon-parts-profile-v1"},next:{title:"Profile v1",permalink:"/developer-portal/pr-preview/pr-104/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v1"}},i={},p=[],c={toc:p},d="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"catalog-service-\ufe0f"},"Catalog Service \ud83d\uddc3\ufe0f"),(0,o.kt)("p",null," ",(0,o.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/ogc-csw/ogc-csw"},"Catalog Service for the Web (CSW)")," is a standard for exposing a catalog of geospatial records in XML on the Internet (over HTTP). The catalog is made up of records that describe geospatial data, geospatial services (e.g. ",(0,o.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/ogc-wmts"},"WMTS"),"), and related resources."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Authentication must be integrated in order to communicate with map And catalog services."),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"See the principles ",(0,o.kt)("a",{parentName:"strong",href:"/docs/MapColonies/authentication"},"here")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Request")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"HTTP method binding(s)")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetCapabilities"),(0,o.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DescribeRecord"),(0,o.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetRecords"),(0,o.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetRecordById"),(0,o.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetRepositoryItem"),(0,o.kt)("td",{parentName:"tr",align:null},"GET (KVP)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetDomain"),(0,o.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")))))}g.isMDXComponent=!0}}]);