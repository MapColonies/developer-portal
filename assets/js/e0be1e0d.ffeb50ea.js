"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7892],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>v});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(o),m=r,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(v,i(i({ref:t},c),{},{components:o})):n.createElement(v,i({ref:t},c))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},19915:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={id:"dem-elevation-service",slug:"info",title:"Elevation \u26f0\ufe0f",description:"Service to return geographic coordinate [lat, lon] elevation",tags:["dem","API","elevation","height","coordinate"]},i="Elevation Service \u26f0\ufe0f",l={unversionedId:"MapColonies/DEM/Services/elevation/dem-elevation-service",id:"MapColonies/DEM/Services/elevation/dem-elevation-service",title:"Elevation \u26f0\ufe0f",description:"Service to return geographic coordinate [lat, lon] elevation",source:"@site/docs/MapColonies/DEM/Services/elevation/README.md",sourceDirName:"MapColonies/DEM/Services/elevation",slug:"/MapColonies/DEM/Services/elevation/info",permalink:"/developer-portal/docs/MapColonies/DEM/Services/elevation/info",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/DEM/Services/elevation/README.md",tags:[{label:"dem",permalink:"/developer-portal/docs/tags/dem"},{label:"API",permalink:"/developer-portal/docs/tags/api"},{label:"elevation",permalink:"/developer-portal/docs/tags/elevation"},{label:"height",permalink:"/developer-portal/docs/tags/height"},{label:"coordinate",permalink:"/developer-portal/docs/tags/coordinate"}],version:"current",frontMatter:{id:"dem-elevation-service",slug:"info",title:"Elevation \u26f0\ufe0f",description:"Service to return geographic coordinate [lat, lon] elevation",tags:["dem","API","elevation","height","coordinate"]},sidebar:"docSidebar",previous:{title:"Profile v1",permalink:"/developer-portal/docs/MapColonies/DEM/Services/catalog/catalog-profile-v1"},next:{title:"OpenStreetMap",permalink:"/developer-portal/docs/MapColonies/openstreetmap/openstreetmap"}},p={},s=[{value:"Purpose",id:"purpose",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Usage",id:"usage",level:2},{value:"API parameters(payload) explanation",id:"api-parameterspayload-explanation",level:3},{value:"\ud83d\udd34 positions (required)",id:"-positions-required",level:4},{value:"\ud83d\udfe1 productType (optional, MIXED is default)",id:"-producttype-optional-mixed-is-default",level:4},{value:"API response explanation",id:"api-response-explanation",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elevation-service-\ufe0f"},"Elevation Service \u26f0\ufe0f"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Click ",(0,r.kt)("a",{parentName:"p",href:"/docs/MapColonies/dem/services/elevation/api"},"here")," for the OpenAPI")),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"Allows users to request elevation(height) information at a given location(s)/position(s) in ","[lon,lat]"," format with/without extra data eg. resolution, DTM/DSM, etc."),(0,r.kt)("h2",{id:"terminology"},"Terminology"),(0,r.kt)("p",null,"Elevation info might be returned from following materials:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DTM - terrain materials."),(0,r.kt)("li",{parentName:"ol"},"DSM - surface materials."),(0,r.kt)("li",{parentName:"ol"},"MIXED - according to most detailed(best resolution) materials.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"- You may request values for up to 250 points at once. In case you have more than that, you should divide it into bulks."),"\n",(0,r.kt)("strong",{parentName:"p"},"- Coordinates order is not preserved."),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"- You will need an API token as part of the service authentication. ","\xa0"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"- When getting a time-out in a result of request, please try same API call again."))),(0,r.kt)("h3",{id:"api-parameterspayload-explanation"},"API parameters(payload) explanation"),(0,r.kt)("p",null,"The structure (JSON schema) is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON Schema of Request"',title:'"JSON',Schema:!0,of:!0,'Request"':!0},'{\n  "positions": [\n    {\n      "longitude": 0,\n      "latitude": 0\n    }\n  ],\n  "productType": "MIXED"\n}\n')),(0,r.kt)("h4",{id:"-positions-required"},"\ud83d\udd34 positions (required)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Array")," of geographical coordinates ",(0,r.kt)("br",null),"\nLimited up to ",(0,r.kt)("strong",{parentName:"p"},"250")," coordinates"),(0,r.kt)("h4",{id:"-producttype-optional-mixed-is-default"},"\ud83d\udfe1 productType (optional, MIXED is default)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"String")," one of ",(0,r.kt)("i",null,"DTM | DSM | MIXED")),(0,r.kt)("h3",{id:"api-response-explanation"},"API response explanation"),(0,r.kt)("p",null,"The structure (JSON schema) is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON Schema of Response"',title:'"JSON',Schema:!0,of:!0,'Response"':!0},'{\n  "data": [\n    {\n      "longitude": 0,\n      "latitude": 0,\n      "height": 3,\n      "productId": "world_terrain"\n    }\n  ],\n  "products": {\n    "world_terrain": {\n      "productType": "DTM",\n      "resolutionMeter": 30,\n      "absoluteAccuracyLEP90": 17,\n      "updateDate": "2019-08-24T14:15:22Z"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);