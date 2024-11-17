"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3609],{83360:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=o(74848),t=o(28453);const r={id:"dem-elevation-service",slug:"info",title:"Elevation \u26f0\ufe0f",description:"Service to return geographic coordinate [lat, lon] elevation",tags:["dem","API","elevation","height","coordinate"]},l="Elevation Service \u26f0\ufe0f",a={id:"MapColonies/DEM/Services/elevation/dem-elevation-service",title:"Elevation \u26f0\ufe0f",description:"Service to return geographic coordinate [lat, lon] elevation",source:"@site/docs/MapColonies/DEM/Services/elevation/README.md",sourceDirName:"MapColonies/DEM/Services/elevation",slug:"/MapColonies/DEM/Services/elevation/info",permalink:"/developer-portal/docs/MapColonies/DEM/Services/elevation/info",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/DEM/Services/elevation/README.md",tags:[{inline:!0,label:"dem",permalink:"/developer-portal/docs/tags/dem"},{inline:!0,label:"API",permalink:"/developer-portal/docs/tags/api"},{inline:!0,label:"elevation",permalink:"/developer-portal/docs/tags/elevation"},{inline:!0,label:"height",permalink:"/developer-portal/docs/tags/height"},{inline:!0,label:"coordinate",permalink:"/developer-portal/docs/tags/coordinate"}],version:"current",frontMatter:{id:"dem-elevation-service",slug:"info",title:"Elevation \u26f0\ufe0f",description:"Service to return geographic coordinate [lat, lon] elevation",tags:["dem","API","elevation","height","coordinate"]},sidebar:"docSidebar",previous:{title:"Profile v1",permalink:"/developer-portal/docs/MapColonies/DEM/Services/catalog/catalog-profile-v1"},next:{title:"OpenStreetMap",permalink:"/developer-portal/docs/MapColonies/openstreetmap/openstreetmap"}},s={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Product types",id:"product-types",level:3},{value:"Confidence level",id:"confidence-level",level:3},{value:"Usage",id:"usage",level:2},{value:"API parameters (payload) explanation",id:"api-parameters-payload-explanation",level:3},{value:"\ud83d\udd34 positions (required)",id:"-positions-required",level:4},{value:"\ud83d\udfe1 productType (optional, MIXED is default)",id:"-producttype-optional-mixed-is-default",level:4},{value:"API response explanation",id:"api-response-explanation",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"elevation-service-\ufe0f",children:"Elevation Service \u26f0\ufe0f"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.a,{href:"/docs/MapColonies/dem/services/elevation/api",children:"here"})," for the OpenAPI"]})}),"\n",(0,i.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,i.jsx)(n.p,{children:"Allows users to request elevation(height) information at a given location(s)/position(s) in [lon,lat] format with/without extra data eg. resolution, DTM/DSM, etc."}),"\n",(0,i.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsx)(n.h3,{id:"product-types",children:"Product types"}),"\n",(0,i.jsx)(n.p,{children:"Elevation info might be returned from following material types:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"DTM - terrain materials."}),"\n",(0,i.jsx)(n.li,{children:"DSM - surface materials."}),"\n",(0,i.jsx)(n.li,{children:"MIXED - according to most detailed (best resolution) materials."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"confidence-level",children:"Confidence level"}),"\n",(0,i.jsx)(n.p,{children:"Calculated for each product and is represented by two values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"resolutionMeter"})," - precision on the horizontal plane (may be interpolated), meaning that for every ",(0,i.jsx)(n.code,{children:"resolutionMeter"})," meters there is a value in the mesh"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"absoluteAccuracyLEP90"})," - each height measurement has a 90% chance to have a deviation of at most ",(0,i.jsx)(n.code,{children:"x"})," meters from the given value (between ",(0,i.jsx)(n.code,{children:"height"})," - ",(0,i.jsx)(n.code,{children:"absoluteAccuracyLEP90"})," and ",(0,i.jsx)(n.code,{children:"height"})," + ",(0,i.jsx)(n.code,{children:"absoluteAccuracyLEP90"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It is extremely important to provide all of the information about the product which the height was extracted from for each point you query."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When using the API to ",(0,i.jsx)(n.strong,{children:"display"})," the heights, we require you to provide the ",(0,i.jsx)(n.code,{children:"productType"}),", ",(0,i.jsx)(n.code,{children:"resolutionMeter"})," and ",(0,i.jsx)(n.code,{children:"absoluteAccuracyLEP90"})," values as well."]})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"- You may request values for up to 250 points at once. In case you have more than that, you should divide it into bulks."}),"\n",(0,i.jsx)(n.strong,{children:"- Coordinates order is not preserved."}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"- You will need an API token as part of the service authentication. \xa0"}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"- When getting a time-out in a result of request, please try same API call again."})]})}),"\n",(0,i.jsx)(n.h3,{id:"api-parameters-payload-explanation",children:"API parameters (payload) explanation"}),"\n",(0,i.jsx)(n.p,{children:"The structure (JSON schema) is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="JSON Schema of Request"',children:'{\n  "positions": [\n    {\n      "longitude": 0,\n      "latitude": 0\n    }\n  ],\n  "productType": "MIXED"\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"-positions-required",children:"\ud83d\udd34 positions (required)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Array"})," of geographical coordinates ",(0,i.jsx)("br",{}),"\nLimited up to ",(0,i.jsx)(n.strong,{children:"250"})," coordinates"]}),"\n",(0,i.jsx)(n.h4,{id:"-producttype-optional-mixed-is-default",children:"\ud83d\udfe1 productType (optional, MIXED is default)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"String"})," one of ",(0,i.jsx)("i",{children:"DTM | DSM | MIXED"})]}),"\n",(0,i.jsx)(n.h3,{id:"api-response-explanation",children:"API response explanation"}),"\n",(0,i.jsx)(n.p,{children:"The structure (JSON schema) is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="JSON Schema of Response"',children:'{\n  "data": [\n    {\n      "longitude": 0,\n      "latitude": 0,\n      "height": 3,\n      "productId": "world_terrain"\n    }\n  ],\n  "products": {\n    "world_terrain": {\n      "productType": "DTM",\n      "resolutionMeter": 30,\n      "absoluteAccuracyLEP90": 17,\n      "updateDate": "2019-08-24T14:15:22Z"\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the response, each point will have the ",(0,i.jsx)(n.code,{children:"productId"})," field as a reference to the product it was returned from."]}),"\n",(0,i.jsx)(n.p,{children:"Each product has the following information:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"productType"})," - the ",(0,i.jsx)(n.a,{href:"#product-types",children:"type"})," of the material"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"resolutionMeter"})," - precision on the horizontal plane, see ",(0,i.jsx)(n.a,{href:"#confidence-level",children:"confidence level"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"absoluteAccuracyLEP90"})," - precision on the ",(0,i.jsx)(n.code,{children:"z"})," axis, see ",(0,i.jsx)(n.a,{href:"#confidence-level",children:"confidence level"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"updateDate"})," - date when the product was updated"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>a});var i=o(96540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);