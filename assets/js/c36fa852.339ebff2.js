"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[1337],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),i=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=i(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=i(r),g=n,u=d["".concat(c,".").concat(g)]||d[g]||m[g]||l;return r?a.createElement(u,o(o({ref:e},s),{},{components:r})):a.createElement(u,o({ref:e},s))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=g;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[d]="string"==typeof t?t:n,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4285:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const l={id:"ogc-csw",description:"Catalog Web Service",title:"CSW - Catalog Service for the Web",slug:"ogc-csw",tags:["ogc","catalog","raster","3d","dem","protocol","api"]},o="CSW - Catalog Service for the Web",p={unversionedId:"ogc/protocols/ogc-csw",id:"ogc/protocols/ogc-csw",title:"CSW - Catalog Service for the Web",description:"Catalog Web Service",source:"@site/docs/ogc/protocols/ogc-csw.md",sourceDirName:"ogc/protocols",slug:"/ogc/protocols/ogc-csw",permalink:"/developer-portal/docs/ogc/protocols/ogc-csw",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/ogc/protocols/ogc-csw.md",tags:[{label:"ogc",permalink:"/developer-portal/docs/tags/ogc"},{label:"catalog",permalink:"/developer-portal/docs/tags/catalog"},{label:"raster",permalink:"/developer-portal/docs/tags/raster"},{label:"3d",permalink:"/developer-portal/docs/tags/3-d"},{label:"dem",permalink:"/developer-portal/docs/tags/dem"},{label:"protocol",permalink:"/developer-portal/docs/tags/protocol"},{label:"api",permalink:"/developer-portal/docs/tags/api"}],version:"current",frontMatter:{id:"ogc-csw",description:"Catalog Web Service",title:"CSW - Catalog Service for the Web",slug:"ogc-csw",tags:["ogc","catalog","raster","3d","dem","protocol","api"]},sidebar:"ogcSidebar",previous:{title:"Query Examples",permalink:"/developer-portal/docs/ogc/protocols/examples/ogc-csw-examples"},next:{title:"WCS - Web Coverage Service",permalink:"/developer-portal/docs/ogc/protocols/ogc-wcs"}},c={},i=[],s={toc:i},d="wrapper";function m(t){let{components:e,...l}=t;return(0,n.kt)(d,(0,a.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"csw---catalog-service-for-the-web"},"CSW - Catalog Service for the Web"),(0,n.kt)("p",null,"Overview - source\nThe CSW service exposes the metadata records in XML format using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.pycsw.org/en/latest/introduction.html#csw-support"},"OGC CSW protocol")," \ud83c\udf10"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:r(94864).Z,title:"download"},"CSW Registry Service (Offline)")," \ud83d\udcda"),(0,n.kt)("p",null,"Standard protocol supported ",(0,n.kt)("a",{parentName:"p",href:"https://docs.pycsw.org/en/latest/introduction.html#supported-operations"},"Operations")," \ud83c\udf10"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/examples/csw-examples"},"Examples")),(0,n.kt)("p",null,"MapColonies operations:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Request")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Optionality")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Supported")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"HTTP method binding(s)")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Harvest"),(0,n.kt)("td",{parentName:"tr",align:null},"optional"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UnHarvest"),(0,n.kt)("td",{parentName:"tr",align:null},"optional"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetCapabilities"),(0,n.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DescribeRecord"),(0,n.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetRecords"),(0,n.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetRecordById"),(0,n.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetRepositoryItem"),(0,n.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetDomain"),(0,n.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Transaction"),(0,n.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"POST (XML) / SOAP")))))}m.isMDXComponent=!0},94864:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/files/07-110r4_CSW-ebRIM_Registry_Service_-_Part_1_ebRIM_profile_of_CSW_v1.0.1-607979b9174ed83670d9471e03a23b8e.pdf"}}]);