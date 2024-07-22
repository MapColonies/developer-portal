"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[9841],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={id:"vector-replication-service",slug:"info",title:"Replication \ud83d\udce6",description:"On-Prem vector layers replica",tags:["vector","API","replication","layers"]},o="Replication Service \ud83d\udce6",i={unversionedId:"MapColonies/vector/Services/replication/vector-replication-service",id:"MapColonies/vector/Services/replication/vector-replication-service",title:"Replication \ud83d\udce6",description:"On-Prem vector layers replica",source:"@site/docs/MapColonies/vector/Services/replication/README.md",sourceDirName:"MapColonies/vector/Services/replication",slug:"/MapColonies/vector/Services/replication/info",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/vector/Services/replication/info",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/vector/Services/replication/README.md",tags:[{label:"vector",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/vector"},{label:"API",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/api"},{label:"replication",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/replication"},{label:"layers",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/layers"}],version:"current",frontMatter:{id:"vector-replication-service",slug:"info",title:"Replication \ud83d\udce6",description:"On-Prem vector layers replica",tags:["vector","API","replication","layers"]},sidebar:"docSidebar",previous:{title:"Query \ud83d\udd0e",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/vector/Services/query"},next:{title:"Valhalla \ud83e\udded",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/vector/Services/valhalla"}},p={},s=[{value:"Purpose",id:"purpose",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Usage",id:"usage",level:2},{value:"Files structure",id:"files-structure",level:2},{value:"Snapsho",id:"snapsho",level:4},{value:"Delta",id:"delta",level:4},{value:"File hierarchy for delta",id:"file-hierarchy-for-delta",level:3},{value:"Delta GeoJSON file",id:"delta-geojson-file",level:3},{value:"Delta deleted_uuid.json files",id:"delta-deleted_uuidjson-files",level:3},{value:"Important Notes",id:"important-notes",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"replication-service-"},"Replication Service \ud83d\udce6"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Click ",(0,n.kt)("a",{parentName:"p",href:"/docs/MapColonies/vector/Services/replication/api"},"here")," for the OpenAPI")),(0,n.kt)("h2",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The server lets users to replicate vector data of MapColonies via a REST API, it allows both getting a single vector layer snapshot\nand keep track of changes in MapColonies vector DB for each layer."),(0,n.kt)("h2",{id:"terminology"},"Terminology"),(0,n.kt)("p",null,"There are two types of replicas:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Snapshot - A complete layer (e.g buildings, roads, sites) snapshot."),(0,n.kt)("li",{parentName:"ol"},"Delta - A time-related replica that describes what has changed in a single layer from time ",(0,n.kt)("inlineCode",{parentName:"li"},"T1")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"T2"),".")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"You can query for replicas via the replication service API."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"You will need an API token as part of the service authentication ","\xa0"))),(0,n.kt)("p",null,"The API in general is split to two parts:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Metadata - you can query the service what layers are available for replication."),(0,n.kt)("li",{parentName:"ol"},"replicas - you can query what replicas are available to download.")),(0,n.kt)("h2",{id:"files-structure"},"Files structure"),(0,n.kt)("h4",{id:"snapsho"},"Snapsho"),(0,n.kt)("p",null,"When receiving a response from the replication service API for snapshot, The response will contain an array of files to download."),(0,n.kt)("p",null,"Each downloaded file is a zip."),(0,n.kt)("p",null,"Each zip will contain one or more GeoJSON files."),(0,n.kt)("p",null,"Each GeoJSON file is a FeatureCollection"),(0,n.kt)("p",null,"File hierarchy for snapshot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"snapshot.zip/\n\u251c\u2500 uuid1.geojson\n\u251c\u2500 uuid2.geojson\n\u251c\u2500 uuid3.geojson\n")),(0,n.kt)("h4",{id:"delta"},"Delta"),(0,n.kt)("p",null,"When receiving a response from the replication service API for delta, The response will contain an array of files to download."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Each downloaded file is a ",(0,n.kt)("em",{parentName:"p"},"zip"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Each ",(0,n.kt)("em",{parentName:"p"},"zip")," will contain:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"zero or more")," GeoJSON files."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Each GeoJSON file is a ",(0,n.kt)("inlineCode",{parentName:"li"},"FeatureCollection")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"zero or more")," ",(0,n.kt)("inlineCode",{parentName:"p"},"deleted_uuid.json")," files."))))),(0,n.kt)("h3",{id:"file-hierarchy-for-delta"},"File hierarchy for delta"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"delta.zip/\n\u251c\u2500 uuid1.geojson\n\u251c\u2500 uuid2.geojson\n\u251c\u2500 uuid3.geojson\n\u251c\u2500 deleted_uuid1.json\n\u251c\u2500 deleted_uuid2.json\n\u251c\u2500 deleted_uuid3.json\n")),(0,n.kt)("h3",{id:"delta-geojson-file"},"Delta GeoJSON file"),(0,n.kt)("p",null,"The GeoJSON file is following the ",(0,n.kt)("em",{parentName:"p"},"official")," specification of GeoJSON (RFC-7946)."),(0,n.kt)("p",null,'Each feature in the feature collection will have a "diff" key, the "diff" key purpose is to present the changes of the feature from its previous version.'),(0,n.kt)("p",null,'The structure (JSON schema) of the "diff" key is as follows:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON Schema of Response"',title:'"JSON',Schema:!0,of:!0,'Response"':!0},'{\n    "definitions": {\n        "diff": {\n            "type": "object",\n            "additionalProperties": false,\n            "properties": {\n                "isGeometryChanged": {\n                    "type": "boolean"\n                },\n                "changedTags": {\n                    "type": "array",\n                    "items": {\n                        "type": "string"\n                    }\n                }\n            },\n            "required": [\n                "changedTags",\n                "isGeometryChanged"\n            ]\n        }\n    }\n}\n')),(0,n.kt)("p",null,"If no ",(0,n.kt)("inlineCode",{parentName:"p"},"deleted_uuid.json")," files are present -> no features were deleted."),(0,n.kt)("p",null,"if no ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid.geojson")," files are present -> no changes occurred."),(0,n.kt)("h3",{id:"delta-deleted_uuidjson-files"},"Delta deleted_uuid.json files"),(0,n.kt)("p",null,"Each file is a valid JSON object."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"deleted_uuid.json")," files are indicating what features have been deleted from the layer."),(0,n.kt)("p",null,"The structure(JSON Schema) of the ",(0,n.kt)("inlineCode",{parentName:"p"},"deleted_uuid.json")," files is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "type": "array",\n     "items": {\n         "type": "string"\n     }\n }\n')),(0,n.kt)("p",null,"Each string is the unique identifier of the deleted feature."),(0,n.kt)("p",null,"Example of ",(0,n.kt)("inlineCode",{parentName:"p"},"deleted_uuid.json"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'["{6b973f22-46d9-4540-908f-fe5395ac0ca5}", "{0e4bcbb5-aa99-4bf6-a818-fc9df28666aa}", "{5652897d-e661-4e14-83fc-969bab027bb2}"]\n')),(0,n.kt)("h3",{id:"important-notes"},"Important Notes"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The data is in WGS84 (following the GeoJSON spec)."),(0,n.kt)("li",{parentName:"ol"},"We aim that zip would not exceed a 500MB size threshold.")))}u.isMDXComponent=!0}}]);