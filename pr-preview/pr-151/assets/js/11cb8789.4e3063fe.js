"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[2440],{3915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(74848),a=t(28453),s=t(11470),i=t(19365);const o={id:"raster-export-service",slug:"raster-export",title:"Export \ud83d\udce6",description:"Export map data",tags:["raster","API","export"]},l="Export Service \ud83d\udce6",c={id:"MapColonies/Raster/services/raster-export-service",title:"Export \ud83d\udce6",description:"Export map data",source:"@site/docs/MapColonies/Raster/services/export.mdx",sourceDirName:"MapColonies/Raster/services",slug:"/MapColonies/Raster/services/raster-export",permalink:"/developer-portal/pr-preview/pr-151/docs/MapColonies/Raster/services/raster-export",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/Raster/services/export.mdx",tags:[{inline:!0,label:"raster",permalink:"/developer-portal/pr-preview/pr-151/docs/tags/raster"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-151/docs/tags/api"},{inline:!0,label:"export",permalink:"/developer-portal/pr-preview/pr-151/docs/tags/export"}],version:"current",frontMatter:{id:"raster-export-service",slug:"raster-export",title:"Export \ud83d\udce6",description:"Export map data",tags:["raster","API","export"]},sidebar:"docSidebar",previous:{title:"Profile v2",permalink:"/developer-portal/pr-preview/pr-151/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v2"},next:{title:"Map \ud83d\uddfa\ufe0f",permalink:"/developer-portal/pr-preview/pr-151/docs/MapColonies/Raster/services/map-service"}},d={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Usage",id:"usage",level:2},{value:"Files structure",id:"files-structure",level:2},{value:"GPKG",id:"gpkg",level:4},{value:"Metadata",id:"metadata",level:4},{value:"Important Notes",id:"important-notes",level:3},{value:"Appendix",id:"appendix",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"export-service-",children:"Export Service \ud83d\udce6"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.a,{href:"/docs/MapColonies/raster/services/export/api",children:"here"})," for the OpenAPI"]})}),"\n",(0,r.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,r.jsx)(n.p,{children:"The export service is responsible for packaging mapping data that can be downloaded by clients or transferred to other systems. Export can be requested for various mapping products within a specific region. The export module exposes an API and Web-based tool."}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["You can create export tasks via the ",(0,r.jsx)(n.a,{href:"/docs/MapColonies/raster/services/export/api",children:"Export-Management service API"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Authentication must be integrated in order to communicate with export service."}),(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.strong,{children:["See the principles ",(0,r.jsx)(n.a,{href:"/docs/MapColonies/authentication",children:"here"})]})]})}),"\n",(0,r.jsx)(n.p,{children:"The API currently consists of two method:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"POST /export-tasks - Create a new export task. If the requested task params were previously created, they are returned in the response, otherwise they will be returned via the provided webhook."}),"\n",(0,r.jsx)(n.li,{children:"GET /export-tasks/{id} - Gets an existing export task data."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"files-structure",children:"Files structure"}),"\n",(0,r.jsx)(n.p,{children:'Under "artifacts" section in the response you will find the following artifacts'}),"\n",(0,r.jsx)(n.h4,{id:"gpkg",children:"GPKG"}),"\n",(0,r.jsx)(n.p,{children:"SQLite DB file that contains all the necessary tiles\nfor more details view:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"http://www.geopackage.org/spec/",children:"http://www.geopackage.org/spec/"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://www.sqlite.org/index.html",children:"https://www.sqlite.org/index.html"})})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Our specification consists of the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/KnowledgeBase/terms",children:"Terms & Abbreviations"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/MapColonies/Raster/overview/#raster-tiling-scheme-in-detail",children:"Tiling scheme"})," (World CRS84 TileMatrixSet)"]}),"\n",(0,r.jsx)(n.li,{children:'file extension: ".gpkg"'}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"metadata",children:"Metadata"}),"\n",(0,r.jsx)(n.p,{children:"JSON file that contains the record metadata such as footprint and resolution"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'file extension: ".JSON"'}),"\n",(0,r.jsxs)(n.li,{children:["provided fields follow the profile convention ",(0,r.jsx)(n.a,{href:"/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v1",children:"here"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"important-notes",children:"Important Notes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"The data is returned via callback request or on /export-tasks request response (structure in appendix 1)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"appendix",children:"Appendix"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"appendix-1",label:"Callback request structure (export-tasks)",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"catalogRecordID: uuid - Raster Catalog Record DB ID - from orginal request"}),"\n",(0,r.jsx)(n.li,{children:'domain: string - the export domain ("RASTER" / "DEM" / "3D", etc.)'}),"\n",(0,r.jsx)(n.li,{children:"roi: FeatureCollection - requested region of intrest"}),"\n",(0,r.jsx)(n.li,{children:'artifactCRS: artifact crs (for Example: "4326")'}),"\n",(0,r.jsx)(n.li,{children:"description: string - the description that was sent to the create method"}),"\n",(0,r.jsx)(n.li,{children:"keywords: Object - task metadata in key-value pair"}),"\n",(0,r.jsx)(n.li,{children:"parameters: Object - task parameters in key-value pair"}),"\n",(0,r.jsx)(n.li,{children:"webhook: Object - events registered to, and to what url to call when event executed"}),"\n",(0,r.jsx)(n.li,{children:"id: number - unique identifier for export request"}),"\n",(0,r.jsx)(n.li,{children:"estimatedSize: number - estimated size of the artifacts in bytes"}),"\n",(0,r.jsx)(n.li,{children:"estimatedTime: number - estimated time to finish the export task"}),"\n",(0,r.jsx)(n.li,{children:"status: Enum - IN_PROGRESS | COMPLETED | ABORTED | PAUSED | FAILED | PENDING | EXPIRED | ARCHIVED"}),"\n",(0,r.jsx)(n.li,{children:"errorReason: string - if export task was unsuccessful this field will describe the error"}),"\n",(0,r.jsx)(n.li,{children:"progress: number - minimum: 0, maximum: 100"}),"\n",(0,r.jsx)(n.li,{children:"artifacts: Object - Object that describes the task products and how to access them"}),"\n",(0,r.jsx)(n.li,{children:"createdAt: string($date) - creation task time - UTC format"}),"\n",(0,r.jsx)(n.li,{children:"expiredAt: string($date) - describes when the task will be expired at - UTC format"}),"\n",(0,r.jsx)(n.li,{children:"finishedAt: string($date) - describes when the task reached an end state - UTC format"}),"\n"]})}),(0,r.jsx)(i.A,{value:"appendix-2",label:"Callback Request Example (export-tasks)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="Callback Request Example"',children:'{\n  "catalogRecordID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "domain": "RASTER",\n  "ROI": {\n    "type": "FeatureCollection",\n    "features": [\n      {\n        "type": "Feature",\n        "properties": {\n          "additionalProp1": "string",\n          "additionalProp2": "string",\n          "additionalProp3": "string"\n        },\n        "geometry": {\n          "type": "Polygon",\n          "coordinates": [\n            [\n              [\n                0,\n                0\n              ]\n            ]\n          ]\n        }\n      }\n    ]\n  },\n  "artifactCRS": "4326",\n  "description": "string",\n  "keywords": {\n    "foo": "kuku"\n  },\n  "parameters": {\n    "foo": "kuku"\n  },\n  "webhook": [\n    {\n      "events": [\n        "TASK_COMPLETED"\n      ],\n      "url": "https://webhook.com"\n    }\n  ],\n  "id": 0,\n  "estimatedSize": 0,\n  "estimatedTime": 0,\n  "status": "COMPLETED",\n  "errorReason": "",\n  "progress": 100,\n  "artifacts": [\n    {\n      "type": "GPKG",\n      "name": "string",\n      "size": 124215121,\n      "url": "https://download.com/file"\n    }\n  ],\n  "createdAt": "2023-09-14T09:28:05.315Z",\n  "expiredAt": "2023-09-14T09:28:05.315Z",\n  "finishedAt": "2023-09-14T09:28:05.315Z"\n}\n'})})}),(0,r.jsx)(i.A,{value:"appendix-3",label:"/export-tasks response for In-Progress Export",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "catalogRecordID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "domain": "RASTER",\n  "ROI": {\n    "type": "FeatureCollection",\n    "features": [\n      {\n        "type": "Feature",\n        "properties": {\n          "additionalProp1": "string",\n          "additionalProp2": "string",\n          "additionalProp3": "string"\n        },\n        "geometry": {\n          "type": "Polygon",\n          "coordinates": [\n            [\n              [\n                0,\n                0\n              ]\n            ]\n          ]\n        }\n      }\n    ]\n  },\n  "artifactCRS": "4326",\n  "description": "string",\n  "keywords": {\n    "foo": "kuku"\n  },\n  "parameters": {\n    "foo": "kuku"\n  },\n  "webhook": [\n    {\n      "events": [\n        "TASK_COMPLETED"\n      ],\n      "url": "https://webhook.com"\n    }\n  ],\n  "id": 0,\n  "estimatedSize": 0,\n  "estimatedTime": 0,\n  "status": "IN_PROGRESS",\n  "errorReason": "",\n  "progress": 70,\n  "artifacts": [\n  ],\n  "createdAt": "2023-09-14T09:28:05.315Z",\n  "expiredAt": "2023-09-14T09:28:05.315Z",\n  "finishedAt": "2023-09-14T09:28:05.315Z"\n}\n'})})}),(0,r.jsx)(i.A,{value:"appendix-4",label:"Response for cached export task",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "catalogRecordID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "domain": "RASTER",\n  "ROI": {\n    "type": "FeatureCollection",\n    "features": [\n      {\n        "type": "Feature",\n        "properties": {\n          "additionalProp1": "string",\n          "additionalProp2": "string",\n          "additionalProp3": "string"\n        },\n        "geometry": {\n          "type": "Polygon",\n          "coordinates": [\n            [\n              [\n                0,\n                0\n              ]\n            ]\n          ]\n        }\n      }\n    ]\n  },\n  "artifactCRS": "4326",\n  "description": "string",\n  "keywords": {\n    "foo": "kuku"\n  },\n  "parameters": {\n    "foo": "kuku"\n  },\n  "webhook": [\n    {\n      "events": [\n        "TASK_COMPLETED"\n      ],\n      "url": "https://webhook.com"\n    }\n  ],\n  "id": 0,\n  "estimatedSize": 0,\n  "estimatedTime": 0,\n  "status": "COMPLETED",\n  "errorReason": "",\n  "progress": 100,\n  "artifacts": [\n    {\n      "type": "GPKG",\n      "name": "string",\n      "size": 124215121,\n      "url": "https://download.com/file"\n    }\n  ],\n  "createdAt": "2023-09-14T09:28:05.315Z",\n  "expiredAt": "2023-09-14T09:28:05.315Z",\n  "finishedAt": "2023-09-14T09:28:05.315Z"\n}\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(18215),s=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){var n;return(null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=x({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=c??m;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),i(a))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);