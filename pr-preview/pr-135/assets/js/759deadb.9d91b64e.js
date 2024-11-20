"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7964],{48340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(74848),s=t(28453);const l={sidebar_position:8,id:"osm-valhalla-locate",slug:"osm-valhalla-locate",title:"Locate API",tags:["osm","locate","API","valhalla"]},i="Valhalla locate service API reference",o={id:"MapColonies/openstreetmap/valhalla/osm-valhalla-locate",title:"Locate API",description:"Valhalla's locate service, is an open-source service that provides detailed information about streets and intersections close to an input point with some added matching criteria. This allows for tight integration in routing and navigation applications on web or mobile.",source:"@site/docs/MapColonies/openstreetmap/valhalla/locate.md",sourceDirName:"MapColonies/openstreetmap/valhalla",slug:"/MapColonies/openstreetmap/valhalla/osm-valhalla-locate",permalink:"/developer-portal/pr-preview/pr-135/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-locate",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/valhalla/locate.md",tags:[{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-135/docs/tags/osm"},{inline:!0,label:"locate",permalink:"/developer-portal/pr-preview/pr-135/docs/tags/locate"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-135/docs/tags/api"},{inline:!0,label:"valhalla",permalink:"/developer-portal/pr-preview/pr-135/docs/tags/valhalla"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"osm-valhalla-locate",slug:"osm-valhalla-locate",title:"Locate API",tags:["osm","locate","API","valhalla"]},sidebar:"docSidebar",previous:{title:"Expansion API",permalink:"/developer-portal/pr-preview/pr-135/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-expansion"},next:{title:"Symbology",permalink:"/developer-portal/pr-preview/pr-135/docs/category/symbology"}},r={},c=[{value:"Inputs of a locate request",id:"inputs-of-a-locate-request",level:2},{value:"Other request options",id:"other-request-options",level:3},{value:"Outputs of a locate request",id:"outputs-of-a-locate-request",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"valhalla-locate-service-api-reference",children:"Valhalla locate service API reference"})}),"\n",(0,a.jsx)(n.p,{children:"Valhalla's locate service, is an open-source service that provides detailed information about streets and intersections close to an input point with some added matching criteria. This allows for tight integration in routing and navigation applications on web or mobile."}),"\n",(0,a.jsx)(n.h2,{id:"inputs-of-a-locate-request",children:"Inputs of a locate request"}),"\n",(0,a.jsxs)(n.p,{children:["The locate request run locally takes the form of ",(0,a.jsx)(n.code,{children:"localhost:8002/locate?json={}"}),", where the JSON inputs inside the ",(0,a.jsx)(n.code,{children:"{}"})," include location information, name and options for the costing model, and output options. Here is the JSON payload for an example request:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{"verbose":true,"locations":[{"lat":42.358528,"lon":-83.271400},{"lat":42.996613,"lon":-78.749855}],"costing":"bicycle","costing_options":{"bicycle":{"bicycle_type":"road"}},"directions_options":{"units":"miles"},"id":"12abc3afe23984fe"}\n'})}),"\n",(0,a.jsx)(n.p,{children:"This request provides detailed information about specific streets and intersections near the two input locations. Steets which do not have a surface type condusive to road bicycles will be excluded from the results. The units used for the lengths of the street sections will be displayed in miles."}),"\n",(0,a.jsxs)(n.p,{children:["There is an option to name your request. You can do this by adding and ",(0,a.jsx)(n.code,{children:"id"})," key to your request. The ",(0,a.jsx)(n.code,{children:"id"})," is returned with the response so a user could match to the corresponding request."]}),"\n",(0,a.jsxs)(n.p,{children:["Because the locate service is designed to work in tandem with the route service API, the inputs for the two APIs are identical. For detailed options regarding specifying locations, costing models, costing options, directions options please see the relevant sections in the ",(0,a.jsx)(n.a,{href:"/developer-portal/pr-preview/pr-135/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#inputs-of-a-route",children:"routing API docs"})]}),"\n",(0,a.jsx)(n.h3,{id:"other-request-options",children:"Other request options"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Options"}),(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:(0,a.jsx)(n.code,{children:"verbose"})}),(0,a.jsxs)(n.td,{style:{textAlign:"left"},children:["Can be set to ",(0,a.jsx)(n.code,{children:"true"})," or ",(0,a.jsx)(n.code,{children:"false"}),", but defaults to ",(0,a.jsx)(n.code,{children:"false"}),". If set to ",(0,a.jsx)(n.code,{children:"true"})," dense attribution of the given street or intersection will be returned."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:(0,a.jsx)(n.code,{children:"id"})}),(0,a.jsxs)(n.td,{style:{textAlign:"left"},children:["Name your route request. If ",(0,a.jsx)(n.code,{children:"id"})," is specified, the naming will be sent through to the response."]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"outputs-of-a-locate-request",children:"Outputs of a locate request"}),"\n",(0,a.jsxs)(n.p,{children:["If a request has been named using the optional ",(0,a.jsx)(n.code,{children:"id"})," key, then this ",(0,a.jsx)(n.code,{children:"id"})," key and value will be echoed in the JSON response object."]}),"\n",(0,a.jsxs)(n.p,{children:["The locate results are returned as a JSON array, with one JSON object per input location in the order specified. In ",(0,a.jsx)(n.code,{children:"verbose"})," mode details about the streets and intersections includding mode of travel access, names, way ids, shape, side of street as well as the closest point to the input along these features will be returned. If ",(0,a.jsx)(n.code,{children:"verbose"})," was not enabled only the closest point, way id and side of street will be returned. A warnings array may also be included. This array may contain warning objects informing about deprecated request parameters, clamped values etc. |"]}),"\n",(0,a.jsxs)(n.p,{children:["Here are some sample results with ",(0,a.jsx)(n.code,{children:"verbose"})," set to ",(0,a.jsx)(n.code,{children:"false"}),"/ ",(0,a.jsx)(n.code,{children:"true:"})]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsxs)("summary",{children:["set to ",(0,a.jsx)("b",{children:"false"})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'[\n  {\n    "input_lon": -76.495743,\n    "input_lat": 40.310555,\n    "nodes": [\n      {\n        "lat": 40.313206,\n        "lon": -76.494987\n      }\n    ],\n    "edges": [\n      {\n        "way_id": 12292268,\n        "correlated_lat": 40.313206,\n        "side_of_street": "neither",\n        "percent_along": 0,\n        "correlated_lon": -76.494987\n      },\n      {\n        "way_id": 12292268,\n        "correlated_lat": 40.313206,\n        "side_of_street": "neither",\n        "percent_along": 1,\n        "correlated_lon": -76.494987\n      }\n    ],\n    "warnings": [\n      "hov costing is deprecated and will be turned into auto costing with hov2=true costing option"\n    ]\n  }\n]\n'})})]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsxs)("summary",{children:["set to ",(0,a.jsx)("b",{children:"true"})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'[\n  {\n    "input_lon": -76.495743,\n    "input_lat": 40.310555,\n    "nodes": [\n      {\n        "traffic_signal": false,\n        "type": "street_intersection",\n        "lat": 40.313206,\n        "node_id": {\n          "id": 3080,\n          "value": 103353655794,\n          "tile_id": 750654,\n          "level": 2\n        },\n        "access": {\n          "wheelchair": true,\n          "taxi": false,\n          "HOV": true,\n          "truck": true,\n          "emergency": true,\n          "pedestrian": true,\n          "car": true,\n          "bus": true,\n          "bicycle": true\n        },\n        "lon": -76.494987,\n        "edge_count": 1,\n        "administrative": {\n          "time_zone_posix": "EST-05EDT+01,M3.2.0/02:00,M11.1.0/02:00",\n          "standard_time_zone_name": "EST",\n          "iso_3166-1": "US",\n          "daylight_savings_time_zone_name": "EDT",\n          "country": "United States of America",\n          "iso_3166-2": "PA",\n          "state": "Pennsylvania"\n        },\n        "intersection_type": "dead-end",\n        "density": 2,\n        "local_edge_count": 1,\n        "mode_change": false\n      }\n    ],\n    "edges": [\n      {\n        "edge_id": {\n          "id": 7660,\n          "value": 257032954354,\n          "tile_id": 750654,\n          "level": 2\n        },\n        "edge_info": {\n          "shape": "ivo{kAvg{{pCiMlJ{FfDgDm@c_AqxBeFO}}@`]",\n          "way_id": 12292268,\n          "names": [\n            "Bomgardner Lane"\n          ]\n        },\n        "edge": {\n          "classification": {\n            "link": false,\n            "internal": false,\n            "surface": "paved_smooth",\n            "classification": "residential"\n          },\n          "end_node": {\n            "id": 3081,\n            "value": 103387210226,\n            "tile_id": 750654,\n            "level": 2\n          },\n          "speed": 30,\n          "traffic_signal": false,\n          "start_restriction": {\n            "moped": false,\n            "wheelchair": false,\n            "taxi": false,\n            "HOV": false,\n            "truck": false,\n            "emergency": false,\n            "pedestrian": false,\n            "car": false,\n            "bus": false,\n            "bicycle": false\n          },\n          "speed_limit": 0,\n          "geo_attributes": {\n            "weighted_grade": 1.67,\n            "length": 388\n          },\n          "cycle_lane": "none",\n          "access_restriction": false,\n          "part_of_complex_restriction": false,\n          "country_crossing": false,\n          "has_exit_sign": false,\n          "lane_count": 1,\n          "speed_type": "classified",\n          "drive_on_right": true,\n          "destination_only": false,\n          "seasonal": false,\n          "tunnel": false,\n          "bridge": false,\n          "access": {\n            "moped": true,\n            "wheelchair": true,\n            "taxi": false,\n            "HOV": true,\n            "truck": true,\n            "emergency": false,\n            "pedestrian": true,\n            "car": true,\n            "bus": true,\n            "bicycle": true\n          },\n          "toll": false,\n          "round_about": false,\n          "bike_network": {\n            "mountain": false,\n            "local": false,\n            "regional": false,\n            "national": false\n          },\n          "end_restriction": {\n            "moped": false,\n            "wheelchair": false,\n            "taxi": false,\n            "HOV": false,\n            "truck": false,\n            "emergency": false,\n            "pedestrian": false,\n            "car": false,\n            "bus": false,\n            "bicycle": false\n          },\n          "unreachable": false,\n          "forward": true,\n          "not_thru": false,\n          "truck_route": false,\n          "use": "road"\n        },\n        "minimum_reachability": 51,\n        "score": 899846.4,\n        "traffic_segments": [],\n        "percent_along": 0,\n        "correlated_lon": -76.494987,\n        "side_of_street": "neither",\n        "correlated_lat": 40.313206\n      },\n      {\n        "edge_id": {\n          "id": 7661,\n          "value": 257066508786,\n          "tile_id": 750654,\n          "level": 2\n        },\n        "edge_info": {\n          "shape": "ivo{kAvg{{pCiMlJ{FfDgDm@c_AqxBeFO}}@`]",\n          "way_id": 12292268,\n          "names": [\n            "Bomgardner Lane"\n          ]\n        },\n        "edge": {\n          "classification": {\n            "link": false,\n            "internal": false,\n            "surface": "paved_smooth",\n            "classification": "residential"\n          },\n          "end_node": {\n            "id": 3080,\n            "value": 103353655794,\n            "tile_id": 750654,\n            "level": 2\n          },\n          "speed": 30,\n          "traffic_signal": false,\n          "start_restriction": {\n            "moped": false,\n            "wheelchair": false,\n            "taxi": false,\n            "HOV": false,\n            "truck": false,\n            "emergency": false,\n            "pedestrian": false,\n            "car": false,\n            "bus": false,\n            "bicycle": false\n          },\n          "speed_limit": 0,\n          "geo_attributes": {\n            "weighted_grade": -1.67,\n            "length": 388\n          },\n          "cycle_lane": "none",\n          "access_restriction": false,\n          "part_of_complex_restriction": false,\n          "country_crossing": false,\n          "has_exit_sign": false,\n          "lane_count": 1,\n          "speed_type": "classified",\n          "drive_on_right": true,\n          "destination_only": false,\n          "seasonal": false,\n          "tunnel": false,\n          "bridge": false,\n          "access": {\n            "moped": true,\n            "wheelchair": true,\n            "taxi": false,\n            "HOV": true,\n            "truck": true,\n            "emergency": false,\n            "pedestrian": true,\n            "car": true,\n            "bus": true,\n            "bicycle": true\n          },\n          "toll": false,\n          "round_about": false,\n          "bike_network": {\n            "mountain": false,\n            "local": false,\n            "regional": false,\n            "national": false\n          },\n          "end_restriction": {\n            "moped": false,\n            "wheelchair": false,\n            "taxi": false,\n            "HOV": false,\n            "truck": false,\n            "emergency": false,\n            "pedestrian": false,\n            "car": false,\n            "bus": false,\n            "bicycle": false\n          },\n          "unreachable": false,\n          "forward": false,\n          "not_thru": true,\n          "truck_route": false,\n          "use": "road"\n        },\n        "minimum_reachability": 51,\n        "score": 899846.4,\n        "traffic_segments": [],\n        "percent_along": 1,\n        "correlated_lon": -76.494987,\n        "side_of_street": "neither",\n        "correlated_lat": 40.313206\n      }\n    ],\n    "warnings": [\n      "hov costing is deprecated and will be turned into auto costing with hov2=true costing option"\n    ]\n  }\n]\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const s={},l=a.createContext(s);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);