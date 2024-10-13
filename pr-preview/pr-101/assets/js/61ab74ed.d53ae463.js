"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[2167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(l,".").concat(d)]||c[d]||v[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,id:"osm-valhalla-overview",slug:"osm-valhalla-overview",title:"Overview",tags:["osm","overview","API","valhalla"]},i="Routing overview",s={unversionedId:"MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-overview",id:"MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-overview",title:"Overview",description:"The Valhalla route service (a.k.a. turn-by-turn) is an open-source routing service that lets you integrate routing and navigation into a web or mobile application. The service works globally, and provides dynamic and customizable routing by driving, walking, bicycling, and using multimodal and transit options, with clear directions for maneuvers along the route.",source:"@site/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/overview.md",sourceDirName:"MapColonies/openstreetmap/valhalla/turn-by-turn",slug:"/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-overview",permalink:"/developer-portal/pr-preview/pr-101/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-overview",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/overview.md",tags:[{label:"osm",permalink:"/developer-portal/pr-preview/pr-101/docs/tags/osm"},{label:"overview",permalink:"/developer-portal/pr-preview/pr-101/docs/tags/overview"},{label:"API",permalink:"/developer-portal/pr-preview/pr-101/docs/tags/api"},{label:"valhalla",permalink:"/developer-portal/pr-preview/pr-101/docs/tags/valhalla"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"osm-valhalla-overview",slug:"osm-valhalla-overview",title:"Overview",tags:["osm","overview","API","valhalla"]},sidebar:"docSidebar",previous:{title:"Turn-by-Turn API",permalink:"/developer-portal/pr-preview/pr-101/docs/category/turn-by-turn-api"},next:{title:"Route API",permalink:"/developer-portal/pr-preview/pr-101/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route"}},l={},p=[{value:"Routing settings",id:"routing-settings",level:2},{value:"Route requests and results",id:"route-requests-and-results",level:2},{value:"Examples",id:"examples",level:2},{value:"route request",id:"route-request",level:4}],u={toc:p},c="wrapper";function v(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"routing-overview"},"Routing overview"),(0,a.kt)("p",null,"The Valhalla route service (a.k.a. turn-by-turn) is an open-source routing service that lets you integrate routing and navigation into a web or mobile application. The service works globally, and provides dynamic and customizable routing by driving, walking, bicycling, and using multimodal and transit options, with clear directions for maneuvers along the route."),(0,a.kt)("h2",{id:"routing-settings"},(0,a.kt)("img",{alt:"Routing settings",src:n(47297).Z,width:"396",height:"385"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Routing transport",src:n(34721).Z,width:"318",height:"51"})),(0,a.kt)("h2",{id:"route-requests-and-results"},"Route requests and results"),(0,a.kt)("p",null,"When you ",(0,a.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-101/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#inputs-of-a-route"},"request a route"),", you are sending and receiving JSON, which is a human-readable text format. In the JSON array, you need to specify the ",(0,a.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-101/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#locations"},"locations")," to visit on the route, the ",(0,a.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-101/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-models"},"costing model")," that represents the mode of travel, such as car or bicycle, and your API key. The location coordinates, given in decimal degrees, can come from many input sources, such as a GPS location, a point or a click on a map, a geocoding service such as Mapbox Geocoding, and so on. Costing methods can have several options that can be adjusted to develop the the route path and estimate the time along the path."),(0,a.kt)("p",null,"The service ",(0,a.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-101/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#outputs-of-a-route"},"route results")," provide details about the trip, including locations, a summary with basic information about the entire trip and a list of legs. Each leg has its own summary, a shape, which is an encoded polyline of the route path, and a list of maneuvers. These maneuvers provide written narrative instructions, plus verbal alerts that can be used as audio guidance in navigation apps."),(0,a.kt)("p",null,"The JSON returned from the route query can be drawn on a map and shown as instructions for maneuvers along the route."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Routing example",src:n(89578).Z,width:"1910",height:"894"})),(0,a.kt)("h4",{id:"route-request"},"route request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'<VALHALLA BASE URL>/route?json={"costing":"pedestrian","costing_options":{"pedestrian":{"exclude_polygons":[],"use_ferry":1,"use_living_streets":0.5,"use_tracks":0,"service_penalty":15,"service_factor":1,"shortest":false,"use_hills":0.5,"walking_speed":5.1,"walkway_factor":1,"sidewalk_factor":1,"alley_factor":2,"driveway_factor":5,"step_penalty":0,"max_hiking_difficulty":1,"use_lit":0,"transit_start_end_max_distance":2145,"transit_transfer_max_distance":800}},"exclude_polygons":[],"locations":[{"lon":35.0121459361267,"lat":31.800557317215137,"type":"break"},{"lon":35.01386761665345,"lat":31.803877333444206,"type":"break"}],"directions_options":{"units":"kilometers"},"id":"valhalla_directions"}`\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Lookup Results in JSON Format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Lookup Results in JSON Format"',title:'"Lookup',Results:!0,in:!0,JSON:!0,'Format"':!0},'{\n  "trip": {\n      "locations": [\n          {\n              "type": "break",\n              "lat": 31.800557,\n              "lon": 35.012145,\n              "original_index": 0\n          },\n          {\n              "type": "break",\n              "lat": 31.803877,\n              "lon": 35.013867,\n              "side_of_street": "left",\n              "original_index": 1\n          }\n      ],\n      "legs": [\n          {\n              "maneuvers": [\n                  {\n                      "type": 1,\n                      "instruction": "Walk north on \u05e7\u05d5\u05e6\'\u05d9\u05df/Cochin.",\n                      "verbal_succinct_transition_instruction": "Walk north.",\n                      "verbal_pre_transition_instruction": "Walk north on \u05e7\u05d5\u05e6\'\u05d9\u05df, Cochin.",\n                      "verbal_post_transition_instruction": "Continue for 100 meters.",\n                      "street_names": [\n                          "\u05e7\u05d5\u05e6\'\u05d9\u05df",\n                          "Cochin"\n                      ],\n                      "time": 104.012,\n                      "length": 0.131,\n                      "cost": 108.669,\n                      "begin_shape_index": 0,\n                      "end_shape_index": 12,\n                      "travel_mode": "pedestrian",\n                      "travel_type": "foot"\n                  },\n                  {\n                      "type": 23,\n                      "instruction": "Keep right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df/Cochin.",\n                      "verbal_transition_alert_instruction": "Keep right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df.",\n                      "verbal_pre_transition_instruction": "Keep right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df, Cochin.",\n                      "verbal_post_transition_instruction": "Continue for 30 meters.",\n                      "street_names": [\n                          "\u05e7\u05d5\u05e6\'\u05d9\u05df",\n                          "Cochin"\n                      ],\n                      "time": 25.03,\n                      "length": 0.031,\n                      "cost": 47.374,\n                      "begin_shape_index": 12,\n                      "end_shape_index": 29,\n                      "travel_mode": "pedestrian",\n                      "travel_type": "foot"\n                  },\n                  {\n                      "type": 23,\n                      "instruction": "Keep right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df/Cochin.",\n                      "verbal_transition_alert_instruction": "Keep right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df.",\n                      "verbal_pre_transition_instruction": "Keep right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df, Cochin.",\n                      "verbal_post_transition_instruction": "Continue for 100 meters.",\n                      "street_names": [\n                          "\u05e7\u05d5\u05e6\'\u05d9\u05df",\n                          "Cochin"\n                      ],\n                      "time": 109.609,\n                      "length": 0.128,\n                      "cost": 130.788,\n                      "begin_shape_index": 29,\n                      "end_shape_index": 50,\n                      "travel_mode": "pedestrian",\n                      "travel_type": "foot"\n                  },\n                  {\n                      "type": 10,\n                      "instruction": "Turn right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df/Cochin.",\n                      "verbal_transition_alert_instruction": "Turn right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df.",\n                      "verbal_succinct_transition_instruction": "Turn right.",\n                      "verbal_pre_transition_instruction": "Turn right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df, Cochin.",\n                      "verbal_post_transition_instruction": "Continue for 70 meters.",\n                      "street_names": [\n                          "\u05e7\u05d5\u05e6\'\u05d9\u05df",\n                          "Cochin"\n                      ],\n                      "time": 70.101,\n                      "length": 0.072,\n                      "cost": 82.014,\n                      "begin_shape_index": 50,\n                      "end_shape_index": 52,\n                      "travel_mode": "pedestrian",\n                      "travel_type": "foot"\n                  },\n                  {\n                      "type": 10,\n                      "instruction": "Turn right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df/Cochin.",\n                      "verbal_transition_alert_instruction": "Turn right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df.",\n                      "verbal_succinct_transition_instruction": "Turn right.",\n                      "verbal_pre_transition_instruction": "Turn right to stay on \u05e7\u05d5\u05e6\'\u05d9\u05df, Cochin.",\n                      "verbal_post_transition_instruction": "Continue for 70 meters.",\n                      "street_names": [\n                          "\u05e7\u05d5\u05e6\'\u05d9\u05df",\n                          "Cochin"\n                      ],\n                      "time": 60.141,\n                      "length": 0.071,\n                      "cost": 63.148,\n                      "begin_shape_index": 52,\n                      "end_shape_index": 58,\n                      "travel_mode": "pedestrian",\n                      "travel_type": "foot"\n                  },\n                  {\n                      "type": 15,\n                      "instruction": "Turn left onto \u05de\u05dc\u05d1\u05e8/Malvar.",\n                      "verbal_transition_alert_instruction": "Turn left onto \u05de\u05dc\u05d1\u05e8.",\n                      "verbal_succinct_transition_instruction": "Turn left.",\n                      "verbal_pre_transition_instruction": "Turn left onto \u05de\u05dc\u05d1\u05e8, Malvar.",\n                      "verbal_post_transition_instruction": "Continue for 500 meters.",\n                      "street_names": [\n                          "\u05de\u05dc\u05d1\u05e8",\n                          "Malvar"\n                      ],\n                      "time": 543.568,\n                      "length": 0.537,\n                      "cost": 825.015,\n                      "begin_shape_index": 58,\n                      "end_shape_index": 130,\n                      "travel_mode": "pedestrian",\n                      "travel_type": "foot"\n                  },\n                  {\n                      "type": 6,\n                      "instruction": "Your destination is on the left.",\n                      "verbal_transition_alert_instruction": "Your destination will be on the left.",\n                      "verbal_pre_transition_instruction": "Your destination is on the left.",\n                      "time": 0.0,\n                      "length": 0.0,\n                      "cost": 0.0,\n                      "begin_shape_index": 130,\n                      "end_shape_index": 130,\n                      "travel_mode": "pedestrian",\n                      "travel_type": "foot"\n                  }\n              ],\n              "summary": {\n                  "has_time_restrictions": false,\n                  "has_toll": false,\n                  "has_highway": false,\n                  "has_ferry": false,\n                  "min_lat": 31.80056,\n                  "min_lon": 35.010666,\n                  "max_lat": 31.804619,\n                  "max_lon": 35.01387,\n                  "time": 912.463,\n                  "length": 0.972,\n                  "cost": 1257.01\n              },\n              "shape": "an}s{@ee~waAkPr@gEXeEd@}Dp@wD|@mDjAeDtAwCbBkCnBq@p@iAfAkBfCW^Y^W\\\\YZWXYX[R[R[LQFa@@_@H]N[RYVS\\\\Q^SNURUNUNUNULULUJWJUJ}A`@}Aj@{At@uA|@sAdAoAhAiAnAeArA_AvAy@zAoQd^cNoG}TkK?oAPmAfKg_@VaAR_AP_AqA]qA[qAUsAOsAMsAKsAGsAEuACsACiB?gBFcBN_BZ{Ah@uAz@qApAkAdBeA`C}@|CmLvb@u@xB_A~AeAhAkAr@oA^qANqA?oAMkAUgAa@s@c@YSaAaAs@iAg@oA[uAOyAE}AD}AN}AV}A~AkIR}@R{@Rw@Rw@Ps@Pq@Po@Nm@Pk@Ni@~Qkl@~@yCv@mCt@eCp@aCj@cCh@gCd@oC`@_D^oDZcElA}SZmCXeC`AmGLiB@cB?_EA{@"\n          }\n      ],\n      "summary": {\n          "has_time_restrictions": false,\n          "has_toll": false,\n          "has_highway": false,\n          "has_ferry": false,\n          "min_lat": 31.80056,\n          "min_lon": 35.010666,\n          "max_lat": 31.804619,\n          "max_lon": 35.01387,\n          "time": 912.463,\n          "length": 0.972,\n          "cost": 1257.01\n      },\n      "status_message": "Found route between points",\n      "status": 0,\n      "units": "kilometers",\n      "language": "en-US"\n  },\n  "id": "valhalla_directions"\n}\n'))))}v.isMDXComponent=!0},89578:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/route-example-5e3b896cb0451327f0fc7b6a5f68ed14.png"},47297:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/routing-settings-209dbc38fafa3e8c52372b08fdbef50a.png"},34721:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);