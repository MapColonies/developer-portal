"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[8177],{22761:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>t,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(74848),s=r(28453);const i={id:"vector-feedback-api-service",slug:"feedback",title:"Feedback Api \ud83d\udc8c",description:"Feedback for Geocoding responses",tags:["vector","API","osm","Geocoding"]},c="Feedback Api \ud83d\udc8c",a={id:"MapColonies/vector/Services/geocoding/vector-feedback-api-service",title:"Feedback Api \ud83d\udc8c",description:"Feedback for Geocoding responses",source:"@site/docs/MapColonies/vector/Services/geocoding/feedback_api.md",sourceDirName:"MapColonies/vector/Services/geocoding",slug:"/MapColonies/vector/Services/geocoding/feedback",permalink:"/developer-portal/pr-preview/pr-118/docs/MapColonies/vector/Services/geocoding/feedback",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/vector/Services/geocoding/feedback_api.md",tags:[{inline:!0,label:"vector",permalink:"/developer-portal/pr-preview/pr-118/docs/tags/vector"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-118/docs/tags/api"},{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-118/docs/tags/osm"},{inline:!0,label:"Geocoding",permalink:"/developer-portal/pr-preview/pr-118/docs/tags/geocoding"}],version:"current",frontMatter:{id:"vector-feedback-api-service",slug:"feedback",title:"Feedback Api \ud83d\udc8c",description:"Feedback for Geocoding responses",tags:["vector","API","osm","Geocoding"]},sidebar:"docSidebar",previous:{title:"Geocoding \ud83d\udccd",permalink:"/developer-portal/pr-preview/pr-118/docs/MapColonies/vector/Services/geocoding/info"},next:{title:"Nominatim \ud83c\udf0d",permalink:"/developer-portal/pr-preview/pr-118/docs/MapColonies/vector/Services/nominatim_service"}},t={},d=[{value:"Example",id:"example",level:2},{value:"Response headers",id:"response-headers",level:5},{value:"Response payload",id:"response-payload",level:5}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:r}=o;return r||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"feedback-api-",children:"Feedback Api \ud83d\udc8c"})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["Click ",(0,n.jsx)(o.a,{href:"/docs/MapColonies/vector/services/feedback-api/api",children:"here"})," for the OpenAPI"]})}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["If you're not familier with Geocoding API, ",(0,n.jsx)(o.a,{href:"/developer-portal/pr-preview/pr-118/docs/MapColonies/vector/Services/geocoding/info",children:"read more here"}),"."]})}),"\n",(0,n.jsxs)(o.p,{children:["Geocoding's feedback ",(0,n.jsx)(o.code,{children:"API"})," collects ",(0,n.jsx)(o.code,{children:"usage data"})," from the ",(0,n.jsx)(o.a,{href:"/developer-portal/pr-preview/pr-118/docs/MapColonies/vector/Services/geocoding/info",children:"Geocoding API"})," user's response and stores it for BI purposes. We use this ",(0,n.jsx)(o.code,{children:"data"})," to better understand and measure the relevance of our responses and adjust the ",(0,n.jsx)(o.code,{children:"data"})," and ",(0,n.jsx)(o.code,{children:"algorithm"})," accordingly.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(o.p,{children:["Once a user gets a response from ",(0,n.jsx)(o.code,{children:"Geocoding"}),", the requesting system will send the ",(0,n.jsx)(o.code,{children:"request_id"})," and the chosen ",(0,n.jsx)(o.code,{children:"chosen_result_id"})," back to us.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(o.admonition,{type:"warning",children:(0,n.jsx)(o.p,{children:(0,n.jsxs)(o.strong,{children:["You will need an API token as part of the ",(0,n.jsx)(o.a,{href:"/docs/MapColonies/authentication",children:"service authentication"}),". \xa0"]})})}),"\n",(0,n.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-curl",metastring:'title="Geocoding\'s Query Search Request"',children:"curl --location '<geocoding_url>/search/location/query?query=school' \\\n--header 'x-api-key: <x-api-key>' \\\n--header 'x-user-id: <x-user-id>'\n"})}),"\n",(0,n.jsxs)(r,{style:{"background-color":"#f6f8fa",border:"var(--ifm-alert-border-width) solid var(--ifm-alert-border-color)","border-left-width":"var(--ifm-alert-border-left-width)",color:"black"},children:[(0,n.jsx)("summary",{children:"Response \ud83d\udc47"}),(0,n.jsx)(o.h5,{id:"response-headers",children:"Response headers"}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'"x-request-id": "4ac9cb81-8d6c-425d-b808-0c868bbaa97c"\n'})}),(0,n.jsx)(o.h5,{id:"response-payload",children:"Response payload"}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n    "type": "FeatureCollection",\n    "geocoding": {\n        "version": "0.1.0",\n        "query": {\n            "query": "school",\n            "disable_fuzziness": false,\n            "limit": 5\n        },\n        "response": {\n            "results_count": 2,\n            "max_score": 1.2880917,\n            "match_latency_ms": 7,\n            "name": "",\n            "place_types": [\n                "education"\n            ],\n            "sub_place_types": [\n                "school"\n            ],\n            "hierarchies": []\n        }\n    },\n    "features": [\n        {\n            "type": "Feature",\n            "geometry": {\n                "coordinates": [ [ [ -118.30812263653988, 33.71684417247593 ],\n                        [ -118.30861990876181, 33.71674433152869 ],\n                        [ -118.30879709771484, 33.71635922964194 ],\n                        [ -118.30619642115158, 33.71550819588987 ],\n                        [ -118.30586490633668, 33.715921827872904 ],\n                        [ -118.30587062210924, 33.716183318328746 ],\n                        [ -118.30812263653988, 33.71684417247593 ]\n                    ]\n                ],\n                "type": "Polygon"\n            },\n            "properties": {\n                "score": 1.2880917,\n                "matches": [ { "layer": "osm_schools", "source": "OSM", "source_id": [ "1a5b981b-bb0e-44dd-b9e2-424b92f2de49" ] } ],\n                "names": { "en": [ "White Point Elementary School" ], "fr": [ "Escuela Primaria White Point" ], "default": [ "White Point Elementary School" ], "display": "White Point Elementary School" },\n                "placetype": "education",\n                "sub_placetype": "school",\n                "regions": [ { "region": "USA", "sub_region_names": [ "Los Angeles" ] } ]\n            }\n        },\n        {\n            "type": "Feature",\n            "geometry": {\n                "coordinates": [ [\n                        [ 2.346441270696971, 48.88088750665477 ],\n                        [ 2.3462780852304945, 48.88018258877358 ],\n                        [ 2.347503576087604, 48.87999951892243 ],\n                        [ 2.347737155284733, 48.88070864783427 ],\n                        [ 2.346441270696971, 48.88088750665477 ] ] ],\n                "type": "Polygon"\n            },\n            "properties": {\n                "score": 1.2880917,\n                "matches": [\n                    { "layer": "osm_schools", "source": "OSM", "source_id": [ "dc02a3f9-156a-4f61-85bd-fd040cd322a3" ] } ],\n                "names": { "en": [ "Wi School Paris 9" ], "fr": [ "Ecole Wi Paris 9" ], "default": [ "Wi School Paris 9" ], "display": "Wi School Paris 9" },\n                "placetype": "education",\n                "sub_placetype": "school",\n                "regions": [ { "region": "FRANCE", "sub_region_names": [ "Paris" ] } ]\n            }\n        }\n    ]\n}\n'})})]}),"\n",(0,n.jsxs)(o.p,{children:["Notice this response listed 2 features.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"\nWhen sending the response to the ",(0,n.jsx)(o.code,{children:"feedback API"}),", you need to provide two parameters:",(0,n.jsx)("br",{}),"\n\ud83d\udccd ",(0,n.jsx)(o.code,{children:"request_id"})," - from the header ",(0,n.jsx)(o.code,{children:"'x-request-id'"}),".",(0,n.jsx)("br",{}),"\n\ud83d\udccd ",(0,n.jsx)(o.code,{children:"chosen_result_id"})," - the ID of the user's selected result (corresponding index of the result). ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(o.p,{children:["Lets think of the current response as the actual response in this case:",(0,n.jsx)("br",{}),"\n\ud83d\udccd If the user chose ",(0,n.jsx)(o.code,{children:'"White Point Elementary School"'}),", the ",(0,n.jsx)(o.code,{children:"chosen_result_id"})," would be ",(0,n.jsx)(o.code,{children:"0"}),".",(0,n.jsx)("br",{}),"\n\ud83d\udccd If the user chose ",(0,n.jsx)(o.code,{children:'"Wi School Paris 9"'}),", the ",(0,n.jsx)(o.code,{children:"chosen_result_id"})," would be ",(0,n.jsx)(o.code,{children:"1"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(o.p,{children:["Then our request to the ",(0,n.jsx)(o.code,{children:"feedback API"})," would look like this: ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-curl",metastring:'title="Geocoding\'s Feedback Api Request"',children:"curl --location --request POST '<feedback_api_url>/feedback' \\\n--header 'x-api-key: <x-api-key>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"request_id\": \"4ac9cb81-8d6c-425d-b808-0c868bbaa97c\",\n    \"chosen_result_id\": 1\n}'\n"})}),"\n",(0,n.jsxs)(o.p,{children:["And we will receive (in case ",(0,n.jsx)(o.code,{children:"request_id"})," and ",(0,n.jsx)(o.code,{children:"chosen_result_id"})," actually exist):",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(r,{style:{"background-color":"#f6f8fa",border:"var(--ifm-alert-border-width) solid var(--ifm-alert-border-color)","border-left-width":"var(--ifm-alert-border-left-width)",color:"black"},children:[(0,n.jsx)("summary",{children:"Response \ud83d\udc47"}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:"204     Feedback has been sent succesfully\n"})})]})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>c,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function c(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);