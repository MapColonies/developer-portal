"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18679:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:r},t)}},73992:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(87462),a=r(67294),o=r(86010),s=r(72957),i=r(16550),l=r(75238),p=r(33609),u=r(92560);function c(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,p]=f({queryString:r,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var h=r(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=p[r].value;n!==i&&(c(t),l(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},p.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(b,(0,n.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},11438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(73992),s=r(18679);const i={id:"raster-export-service",slug:"raster-export",title:"Export \ud83d\udce6",description:"Export map data",tags:["raster","API","export"]},l="Export Service \ud83d\udce6",p={unversionedId:"MapColonies/Raster/services/raster-export-service",id:"MapColonies/Raster/services/raster-export-service",title:"Export \ud83d\udce6",description:"Export map data",source:"@site/docs/MapColonies/Raster/services/export.mdx",sourceDirName:"MapColonies/Raster/services",slug:"/MapColonies/Raster/services/raster-export",permalink:"/developer-portal/pr-preview/pr-refs/pull/79/merge/docs/MapColonies/Raster/services/raster-export",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/Raster/services/export.mdx",tags:[{label:"raster",permalink:"/developer-portal/pr-preview/pr-refs/pull/79/merge/docs/tags/raster"},{label:"API",permalink:"/developer-portal/pr-preview/pr-refs/pull/79/merge/docs/tags/api"},{label:"export",permalink:"/developer-portal/pr-preview/pr-refs/pull/79/merge/docs/tags/export"}],version:"current",frontMatter:{id:"raster-export-service",slug:"raster-export",title:"Export \ud83d\udce6",description:"Export map data",tags:["raster","API","export"]},sidebar:"docSidebar",previous:{title:"Profile v1",permalink:"/developer-portal/pr-preview/pr-refs/pull/79/merge/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v1"},next:{title:"Map \ud83d\uddfa\ufe0f",permalink:"/developer-portal/pr-preview/pr-refs/pull/79/merge/docs/MapColonies/Raster/services/map-service"}},u={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Usage",id:"usage",level:2},{value:"Files structure",id:"files-structure",level:2},{value:"GPKG",id:"gpkg",level:4},{value:"Metadata",id:"metadata",level:4},{value:"Important Notes",id:"important-notes",level:3},{value:"Appendix",id:"appendix",level:3}],d={toc:c},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"export-service-"},"Export Service \ud83d\udce6"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Click ",(0,a.kt)("a",{parentName:"p",href:"/docs/MapColonies/raster/services/export/api"},"here")," for the OpenAPI")),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"The export service is responsible for packaging mapping data that can be downloaded by clients or transferred to other systems. Export can be requested for various mapping products within a specific region. The export module exposes an API and Web-based tool."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"You can create export tasks via the ",(0,a.kt)("a",{parentName:"p",href:"/docs/MapColonies/raster/services/export/api"},"Export-Management service API"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Authentication must be integrated in order to communicate with export service."),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"See the principles ",(0,a.kt)("a",{parentName:"strong",href:"/docs/MapColonies/authentication"},"here")))),(0,a.kt)("p",null,"The API currently consists of two method:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"POST /export-tasks - Create a new export task. If the requested task params were previously created, they are returned in the response, otherwise they will be returned via the provided webhook."),(0,a.kt)("li",{parentName:"ol"},"GET /export-tasks/{id} - Gets an existing export task data.")),(0,a.kt)("h2",{id:"files-structure"},"Files structure"),(0,a.kt)("p",null,'Under "artifacts" section in the response you will find the following artifacts'),(0,a.kt)("h4",{id:"gpkg"},"GPKG"),(0,a.kt)("p",null,"SQLite DB file that contains all the necessary tiles\nfor more details view:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"http://www.geopackage.org/spec/"},"http://www.geopackage.org/spec/"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.sqlite.org/index.html"},"https://www.sqlite.org/index.html")))),(0,a.kt)("p",null,"Our specification consists of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/MapColonies/terms"},"Terms & Abbreviations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/MapColonies/Raster/overview/#raster-tiling-scheme-in-detail"},"Tiling scheme")," (World CRS84 TileMatrixSet)"),(0,a.kt)("li",{parentName:"ul"},'file extension: ".gpkg"')),(0,a.kt)("h4",{id:"metadata"},"Metadata"),(0,a.kt)("p",null,"JSON file that contains the record metadata such as footprint and resolution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'file extension: ".JSON"'),(0,a.kt)("li",{parentName:"ul"},"provided fields follow the profile convention ",(0,a.kt)("a",{parentName:"li",href:"/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v1"},"here"))),(0,a.kt)("h3",{id:"important-notes"},"Important Notes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The data is returned via callback request or on /export-tasks request response (structure in appendix 1)")),(0,a.kt)("h3",{id:"appendix"},"Appendix"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"appendix-1",label:"Callback request structure (export-tasks)",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"catalogRecordID: uuid - Raster Catalog Record DB ID - from orginal request"),(0,a.kt)("li",{parentName:"ul"},'domain: string - the export domain ("RASTER" / "DEM" / "3D", etc.)'),(0,a.kt)("li",{parentName:"ul"},"roi: FeatureCollection - requested region of intrest"),(0,a.kt)("li",{parentName:"ul"},'artifactCRS: artifact crs (for Example: "4326")'),(0,a.kt)("li",{parentName:"ul"},"description: string - the description that was sent to the create method"),(0,a.kt)("li",{parentName:"ul"},"keywords: Object - task metadata in key-value pair"),(0,a.kt)("li",{parentName:"ul"},"parameters: Object - task parameters in key-value pair"),(0,a.kt)("li",{parentName:"ul"},"webhook: Object - events registered to, and to what url to call when event executed"),(0,a.kt)("li",{parentName:"ul"},"id: number - unique identifier for export request"),(0,a.kt)("li",{parentName:"ul"},"estimatedSize: number - estimated size of the artifacts in bytes"),(0,a.kt)("li",{parentName:"ul"},"estimatedTime: number - estimated time to finish the export task"),(0,a.kt)("li",{parentName:"ul"},"status: Enum - IN_PROGRESS | COMPLETED | ABORTED | PAUSED | FAILED | PENDING | EXPIRED | ARCHIVED"),(0,a.kt)("li",{parentName:"ul"},"errorReason: string - if export task was unsuccessful this field will describe the error"),(0,a.kt)("li",{parentName:"ul"},"progress: number - minimum: 0, maximum: 100"),(0,a.kt)("li",{parentName:"ul"},"artifacts: Object - Object that describes the task products and how to access them"),(0,a.kt)("li",{parentName:"ul"},"createdAt: string($date) - creation task time - UTC format"),(0,a.kt)("li",{parentName:"ul"},"expiredAt: string($date) - describes when the task will be expired at - UTC format"),(0,a.kt)("li",{parentName:"ul"},"finishedAt: string($date) - describes when the task reached an end state - UTC format"))),(0,a.kt)(s.Z,{value:"appendix-2",label:"Callback Request Example (export-tasks)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Callback Request Example"',title:'"Callback',Request:!0,'Example"':!0},'{\n  "catalogRecordID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "domain": "RASTER",\n  "ROI": {\n    "type": "FeatureCollection",\n    "features": [\n      {\n        "type": "Feature",\n        "properties": {\n          "additionalProp1": "string",\n          "additionalProp2": "string",\n          "additionalProp3": "string"\n        },\n        "geometry": {\n          "type": "Polygon",\n          "coordinates": [\n            [\n              [\n                0,\n                0\n              ]\n            ]\n          ]\n        }\n      }\n    ]\n  },\n  "artifactCRS": "4326",\n  "description": "string",\n  "keywords": {\n    "foo": "kuku"\n  },\n  "parameters": {\n    "foo": "kuku"\n  },\n  "webhook": [\n    {\n      "events": [\n        "TASK_COMPLETED"\n      ],\n      "url": "https://webhook.com"\n    }\n  ],\n  "id": 0,\n  "estimatedSize": 0,\n  "estimatedTime": 0,\n  "status": "COMPLETED",\n  "errorReason": "",\n  "progress": 100,\n  "artifacts": [\n    {\n      "type": "GPKG",\n      "name": "string",\n      "size": 124215121,\n      "url": "https://download.com/file"\n    }\n  ],\n  "createdAt": "2023-09-14T09:28:05.315Z",\n  "expiredAt": "2023-09-14T09:28:05.315Z",\n  "finishedAt": "2023-09-14T09:28:05.315Z"\n}\n'))),(0,a.kt)(s.Z,{value:"appendix-3",label:"/export-tasks response for In-Progress Export",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "catalogRecordID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "domain": "RASTER",\n  "ROI": {\n    "type": "FeatureCollection",\n    "features": [\n      {\n        "type": "Feature",\n        "properties": {\n          "additionalProp1": "string",\n          "additionalProp2": "string",\n          "additionalProp3": "string"\n        },\n        "geometry": {\n          "type": "Polygon",\n          "coordinates": [\n            [\n              [\n                0,\n                0\n              ]\n            ]\n          ]\n        }\n      }\n    ]\n  },\n  "artifactCRS": "4326",\n  "description": "string",\n  "keywords": {\n    "foo": "kuku"\n  },\n  "parameters": {\n    "foo": "kuku"\n  },\n  "webhook": [\n    {\n      "events": [\n        "TASK_COMPLETED"\n      ],\n      "url": "https://webhook.com"\n    }\n  ],\n  "id": 0,\n  "estimatedSize": 0,\n  "estimatedTime": 0,\n  "status": "IN_PROGRESS",\n  "errorReason": "",\n  "progress": 70,\n  "artifacts": [\n  ],\n  "createdAt": "2023-09-14T09:28:05.315Z",\n  "expiredAt": "2023-09-14T09:28:05.315Z",\n  "finishedAt": "2023-09-14T09:28:05.315Z"\n}\n'))),(0,a.kt)(s.Z,{value:"appendix-4",label:"Response for cached export task",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "catalogRecordID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "domain": "RASTER",\n  "ROI": {\n    "type": "FeatureCollection",\n    "features": [\n      {\n        "type": "Feature",\n        "properties": {\n          "additionalProp1": "string",\n          "additionalProp2": "string",\n          "additionalProp3": "string"\n        },\n        "geometry": {\n          "type": "Polygon",\n          "coordinates": [\n            [\n              [\n                0,\n                0\n              ]\n            ]\n          ]\n        }\n      }\n    ]\n  },\n  "artifactCRS": "4326",\n  "description": "string",\n  "keywords": {\n    "foo": "kuku"\n  },\n  "parameters": {\n    "foo": "kuku"\n  },\n  "webhook": [\n    {\n      "events": [\n        "TASK_COMPLETED"\n      ],\n      "url": "https://webhook.com"\n    }\n  ],\n  "id": 0,\n  "estimatedSize": 0,\n  "estimatedTime": 0,\n  "status": "COMPLETED",\n  "errorReason": "",\n  "progress": 100,\n  "artifacts": [\n    {\n      "type": "GPKG",\n      "name": "string",\n      "size": 124215121,\n      "url": "https://download.com/file"\n    }\n  ],\n  "createdAt": "2023-09-14T09:28:05.315Z",\n  "expiredAt": "2023-09-14T09:28:05.315Z",\n  "finishedAt": "2023-09-14T09:28:05.315Z"\n}\n')))))}f.isMDXComponent=!0}}]);