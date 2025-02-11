"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[6774],{94594:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=a(74848),n=a(28453);const i={id:"vector-valhalla-service",slug:"valhalla",title:"Valhalla \ud83e\udded",description:"Directions and isochrones by OSM",tags:["vector","API","osm"]},s="Valhalla \ud83e\udded",l={id:"MapColonies/vector/Services/vector-valhalla-service",title:"Valhalla \ud83e\udded",description:"Directions and isochrones by OSM",source:"@site/docs/MapColonies/vector/Services/valhalla_service.md",sourceDirName:"MapColonies/vector/Services",slug:"/MapColonies/vector/Services/valhalla",permalink:"/developer-portal/pr-preview/pr-146/docs/MapColonies/vector/Services/valhalla",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/vector/Services/valhalla_service.md",tags:[{inline:!0,label:"vector",permalink:"/developer-portal/pr-preview/pr-146/docs/tags/vector"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-146/docs/tags/api"},{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-146/docs/tags/osm"}],version:"current",frontMatter:{id:"vector-valhalla-service",slug:"valhalla",title:"Valhalla \ud83e\udded",description:"Directions and isochrones by OSM",tags:["vector","API","osm"]},sidebar:"docSidebar",previous:{title:"Replication \ud83d\udce6",permalink:"/developer-portal/pr-preview/pr-146/docs/MapColonies/vector/Services/replication/info"},next:{title:"3D",permalink:"/developer-portal/pr-preview/pr-146/docs/MapColonies/3D/3d-overview"}},r={},c=[{value:"Features",id:"features",level:2},{value:"How to use",id:"how-to-use",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"valhalla-",children:"Valhalla \ud83e\udded"})}),"\n",(0,o.jsx)(t.p,{children:"Valhalla is an open source routing engine and accompanying libraries for use with OpenStreetMap data. Valhalla also includes tools like time+distance matrix computation, isochrones, elevation sampling, map matching and tour optimization (Travelling Salesman)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Valhalla Demo App",src:a(83188).A+"",width:"1884",height:"902"})}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Terminology"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"break location"})," - the start or end point of a route."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"cost"})," - fixed costs in seconds that are added to both the path cost and the estimated time."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"costing model"})," - set of costs for particular methods of travel, such as automobile or pedestrian."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"edge"})," - a line connected between nodes"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"factor"})," - multiply the cost along an edge or road section in a way that influences the path to favor or avoid a particular attribute"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"graph"})," - a set of edges connected by nodes used for building a route"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"location"})," - a latitude, longitude coordinate pair, specified in decimal degrees that determines the routing and order of navigation."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"maneuver"})," - an operation to be performed during navigation, such as a turn, and the expected duration of the movement."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"narration"})," - textual guidance describing the maneuver to be performed, such as a turn, distance to travel, and expected time."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"path"})," - the sequence of edges forming a route"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"penalty"})," - fixed costs in seconds that are only added to the path cost. Penalties can influence the route path determination but do not add to the estimated time along the path."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"route"})," - sequence of edges and maneuvers forming the best travel path between locations given the available road network, costs, influence factors, and other inputs."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"short path"})," - a route that attempts to minimize distance traveled over the constituent edges, but may not be the shortest distance."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"through location"})," - an optional location to influence the route to travel through that location."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"tiled routing"})," - method of building a path on graph data that has been split into square cells."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"time"})," - the number of seconds estimated to complete a maneuver or trip, including any additional costs."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"trip"})," - results of an entire route, including locations, legs, and maneuvers."]}),"\n",(0,o.jsx)(t.li,{children:"height - with respect to elevation, the height above or below sea level at a specific location (lat,lng)."}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"height with range"})," - computing the range (cumulative distance) and height for a series of lat,lng pairs of a line or shape. This is very useful for charting/graphing."]}),"\n"]})]}),"\n",(0,o.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Flexible routing methods with dynamic costing - allowing multiple route types with the same data."}),"\n",(0,o.jsx)(t.li,{children:"Expanded guidance / route narrative information providing clear and concise instructions along the route as well as output tailored for navigation along the route."}),"\n",(0,o.jsx)(t.li,{children:"Tiled routing data structure allowing use within small memory profiles including mobile devices."}),"\n",(0,o.jsx)(t.li,{children:"Includes software to import and create routing tiles from OpenStreetMap pbf data: from small extracts to worldwide coverage."}),"\n",(0,o.jsx)(t.li,{children:"Includes turn restrictions, highway exit information, administrative information, and timezones."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Valhalla API has the following endpoints for querying the data:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route",children:"route"})})," - the service guides you between points by car, bike, foot, and multimodal combinations involving walking and riding public transit."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-optimized-route",children:"optimized-route"})})," - computes the times and distances between many origins and destinations and provides you with an optimized path between the locations."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-matrix",children:"matrix"})})," - if you want only a table of the times and distances, start with the matrix service."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone",children:"isochrone"})})," - get a computation of areas that are reachable within specified time periods from a location or set of locations."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-expansion",children:"expansion"})})," - return a geojson representation of a graph traversal at a given location."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-locate",children:"locate"})})," - get detailed metadata about the nodes and edges in the graph."]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\ud83d\udcdd ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:"Note:"})}),"\nValhalla is an open-source toolkit for multimodal transportation, powered by open data. The APIs use the standard REST model of interaction with JSON serving as both the request and response formats. Please refer to a specific service's API documentation to learn about the various request/response properties. In addition to JSON request/response formats Valhalla also supports protocol buffers as request/response format."]}),"\n"]}),"\n",(0,o.jsxs)("font",{size:"2",children:[" Copyright \xa9 ",(0,o.jsx)(t.a,{href:"https://valhalla.github.io/valhalla/",children:"https://valhalla.github.io/valhalla/"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},83188:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/valhalla-c89432343d13458ec25ec9ccedd7d519.png"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>l});var o=a(96540);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);