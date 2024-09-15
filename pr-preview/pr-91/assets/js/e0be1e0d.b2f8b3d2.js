"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={id:"dem-elevation-service",slug:"info",title:"Elevation \u26f0\ufe0f",description:"Service to return geographic coordinate [lat, lon] elevation",tags:["dem","API","elevation","height","coordinate"]},i="Elevation Service \u26f0\ufe0f",l={unversionedId:"MapColonies/DEM/Services/elevation/dem-elevation-service",id:"MapColonies/DEM/Services/elevation/dem-elevation-service",title:"Elevation \u26f0\ufe0f",description:"Service to return geographic coordinate [lat, lon] elevation",source:"@site/docs/MapColonies/DEM/Services/elevation/README.md",sourceDirName:"MapColonies/DEM/Services/elevation",slug:"/MapColonies/DEM/Services/elevation/info",permalink:"/developer-portal/pr-preview/pr-91/docs/MapColonies/DEM/Services/elevation/info",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/DEM/Services/elevation/README.md",tags:[{label:"dem",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/dem"},{label:"API",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/api"},{label:"elevation",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/elevation"},{label:"height",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/height"},{label:"coordinate",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/coordinate"}],version:"current",frontMatter:{id:"dem-elevation-service",slug:"info",title:"Elevation \u26f0\ufe0f",description:"Service to return geographic coordinate [lat, lon] elevation",tags:["dem","API","elevation","height","coordinate"]},sidebar:"docSidebar",previous:{title:"Profile v1",permalink:"/developer-portal/pr-preview/pr-91/docs/MapColonies/DEM/Services/catalog/catalog-profile-v1"},next:{title:"OpenStreetMap",permalink:"/developer-portal/pr-preview/pr-91/docs/MapColonies/openstreetmap/openstreetmap"}},p={},s=[{value:"Purpose",id:"purpose",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Product types",id:"product-types",level:3},{value:"Confidence level",id:"confidence-level",level:3},{value:"Usage",id:"usage",level:2},{value:"API parameters (payload) explanation",id:"api-parameters-payload-explanation",level:3},{value:"\ud83d\udd34 positions (required)",id:"-positions-required",level:4},{value:"\ud83d\udfe1 productType (optional, MIXED is default)",id:"-producttype-optional-mixed-is-default",level:4},{value:"API response explanation",id:"api-response-explanation",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"elevation-service-\ufe0f"},"Elevation Service \u26f0\ufe0f"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Click ",(0,o.kt)("a",{parentName:"p",href:"/docs/MapColonies/dem/services/elevation/api"},"here")," for the OpenAPI")),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"Allows users to request elevation(height) information at a given location(s)/position(s) in ","[lon,lat]"," format with/without extra data eg. resolution, DTM/DSM, etc."),(0,o.kt)("h2",{id:"terminology"},"Terminology"),(0,o.kt)("h3",{id:"product-types"},"Product types"),(0,o.kt)("p",null,"Elevation info might be returned from following material types:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"DTM - terrain materials."),(0,o.kt)("li",{parentName:"ol"},"DSM - surface materials."),(0,o.kt)("li",{parentName:"ol"},"MIXED - according to most detailed (best resolution) materials.")),(0,o.kt)("h3",{id:"confidence-level"},"Confidence level"),(0,o.kt)("p",null,"Calculated for each product and is represented by two values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resolutionMeter")," - precision on the horizontal plane (may be interpolated), meaning that for every ",(0,o.kt)("inlineCode",{parentName:"li"},"resolutionMeter")," meters there is a value in the mesh"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"absoluteAccuracyLEP90")," - each height measurement has a 90% chance to have a deviation of at most ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," meters from the given value (between ",(0,o.kt)("inlineCode",{parentName:"li"},"height")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"absoluteAccuracyLEP90")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"height")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"absoluteAccuracyLEP90"),")")),(0,o.kt)("p",null,"It is extremely important to provide all of the information about the product which the height was extracted from for each point you query."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When using the API to ",(0,o.kt)("strong",{parentName:"p"},"display")," the heights, we require you to provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"productType"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"resolutionMeter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"absoluteAccuracyLEP90")," values as well.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"- You may request values for up to 250 points at once. In case you have more than that, you should divide it into bulks."),"\n",(0,o.kt)("strong",{parentName:"p"},"- Coordinates order is not preserved."),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"- You will need an API token as part of the service authentication. ","\xa0"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"- When getting a time-out in a result of request, please try same API call again."))),(0,o.kt)("h3",{id:"api-parameters-payload-explanation"},"API parameters (payload) explanation"),(0,o.kt)("p",null,"The structure (JSON schema) is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON Schema of Request"',title:'"JSON',Schema:!0,of:!0,'Request"':!0},'{\n  "positions": [\n    {\n      "longitude": 0,\n      "latitude": 0\n    }\n  ],\n  "productType": "MIXED"\n}\n')),(0,o.kt)("h4",{id:"-positions-required"},"\ud83d\udd34 positions (required)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Array")," of geographical coordinates ",(0,o.kt)("br",null),"\nLimited up to ",(0,o.kt)("strong",{parentName:"p"},"250")," coordinates"),(0,o.kt)("h4",{id:"-producttype-optional-mixed-is-default"},"\ud83d\udfe1 productType (optional, MIXED is default)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"String")," one of ",(0,o.kt)("i",null,"DTM | DSM | MIXED")),(0,o.kt)("h3",{id:"api-response-explanation"},"API response explanation"),(0,o.kt)("p",null,"The structure (JSON schema) is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON Schema of Response"',title:'"JSON',Schema:!0,of:!0,'Response"':!0},'{\n  "data": [\n    {\n      "longitude": 0,\n      "latitude": 0,\n      "height": 3,\n      "productId": "world_terrain"\n    }\n  ],\n  "products": {\n    "world_terrain": {\n      "productType": "DTM",\n      "resolutionMeter": 30,\n      "absoluteAccuracyLEP90": 17,\n      "updateDate": "2019-08-24T14:15:22Z"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"In the response, each point will have the ",(0,o.kt)("inlineCode",{parentName:"p"},"productId")," field as a reference to the product it was returned from."),(0,o.kt)("p",null,"Each product has the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"productType")," - the ",(0,o.kt)("a",{parentName:"li",href:"#product-types"},"type")," of the material"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resolutionMeter")," - precision on the horizontal plane, see ",(0,o.kt)("a",{parentName:"li",href:"#confidence-level"},"confidence level")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"absoluteAccuracyLEP90")," - precision on the ",(0,o.kt)("inlineCode",{parentName:"li"},"z")," axis, see ",(0,o.kt)("a",{parentName:"li",href:"#confidence-level"},"confidence level")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"updateDate")," - date when the product was updated")))}u.isMDXComponent=!0}}]);