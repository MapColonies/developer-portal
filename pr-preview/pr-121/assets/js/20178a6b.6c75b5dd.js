"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[8580],{77857:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(74848),r=t(28453);const o={sidebar_position:2,id:"osm-valhalla-optimized-route",slug:"osm-valhalla-optimized-route",title:"Optimized Route API",tags:["osm","optimized-route","API","valhalla"]},s="Optimized Route service API reference",a={id:"MapColonies/openstreetmap/valhalla/osm-valhalla-optimized-route",title:"Optimized Route API",description:"The Optimized Route service provides a quick computation of time and distance between a set of location sources and location targets and returns them in an optimized route order, along with the shape.",source:"@site/docs/MapColonies/openstreetmap/valhalla/optimized-route.md",sourceDirName:"MapColonies/openstreetmap/valhalla",slug:"/MapColonies/openstreetmap/valhalla/osm-valhalla-optimized-route",permalink:"/developer-portal/pr-preview/pr-121/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-optimized-route",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/valhalla/optimized-route.md",tags:[{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-121/docs/tags/osm"},{inline:!0,label:"optimized-route",permalink:"/developer-portal/pr-preview/pr-121/docs/tags/optimized-route"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-121/docs/tags/api"},{inline:!0,label:"valhalla",permalink:"/developer-portal/pr-preview/pr-121/docs/tags/valhalla"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"osm-valhalla-optimized-route",slug:"osm-valhalla-optimized-route",title:"Optimized Route API",tags:["osm","optimized-route","API","valhalla"]},sidebar:"docSidebar",previous:{title:"Route API",permalink:"/developer-portal/pr-preview/pr-121/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route"},next:{title:"Matrix API",permalink:"/developer-portal/pr-preview/pr-121/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-matrix"}},l={},d=[{value:"Features",id:"features",level:2},{value:"Optimized route service action",id:"optimized-route-service-action",level:2},{value:"Inputs of the optimized route service",id:"inputs-of-the-optimized-route-service",level:2},{value:"Location parameters",id:"location-parameters",level:3},{value:"Costing parameters",id:"costing-parameters",level:3},{value:"Other request options",id:"other-request-options",level:3},{value:"Outputs of the optimized route service",id:"outputs-of-the-optimized-route-service",level:2},{value:"Examples",id:"examples",level:2},{value:"optimized route request",id:"optimized-route-request",level:4},{value:"Error checking",id:"error-checking",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"optimized-route-service-api-reference",children:"Optimized Route service API reference"})}),"\n",(0,i.jsx)(n.p,{children:"The Optimized Route service provides a quick computation of time and distance between a set of location sources and location targets and returns them in an optimized route order, along with the shape."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Optimized route example",src:t(67395).A+"",width:"1487",height:"608"})}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get to the shortest path. Get the shortest route for a large number of points. The service returns them in an optimized order, along with the shape."}),"\n",(0,i.jsx)(n.li,{children:"Use different transportation modes. Analyze travel times and distances by car, bicycle, or foot."}),"\n",(0,i.jsx)(n.li,{children:"Take a trip or make a loop. Either return to the starting point, or end the trip at a different destination."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"optimized-route-service-action",children:"Optimized route service action"}),"\n",(0,i.jsxs)(n.p,{children:["You can request the following action from the Optimized Route service: ",(0,i.jsx)(n.code,{children:"/optimized_route?"}),". Since an optimized route is really an extension of the ",(0,i.jsx)(n.em,{children:"many_to_many"})," matrix (where the source locations are the same as the target locations), the first step is to compute a cost matrix by sending a matrix request.  Then, we send our resulting cost matrix (resulting time or distance) to the optimizer which will return our optimized path."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Optimized type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"optimized_route"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Returns an optimized route stopping at each destination location exactly one time, always starting at the first location in the list and ending at the last location. This will result in a route with multiple legs."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"inputs-of-the-optimized-route-service",children:"Inputs of the optimized route service"}),"\n",(0,i.jsxs)(n.p,{children:["The optimized route request run locally takes the form of ",(0,i.jsx)(n.code,{children:"localhost:8002/optimized_route?json={}"}),", where the JSON inputs inside the ",(0,i.jsx)(n.code,{children:"{}"})," includes location information (at least four locations), as well as the name and options for the costing model"]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of an Optimized Route scenario:"}),"\n",(0,i.jsx)(n.p,{children:"Given a list of cities and the distances and times between each pair, a salesperson wants to visit each city one time by taking the most optimized route and end at a destination (either return to origin or a different destination)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{"locations":[{"lat":40.042072,"lon":-76.306572},{"lat":39.992115,"lon":-76.781559},{"lat":39.984519,"lon":-76.6956},{"lat":39.996586,"lon":-76.769028},{"lat":39.984322,"lon":-76.706672}],"costing":"auto","directions_options":{"units":"miles"}}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["There is an option to name your optimized route request. You can do this by appending the following to your request ",(0,i.jsx)(n.code,{children:"&id="}),".  The ",(0,i.jsx)(n.code,{children:"id"})," is returned with the response so a user could match to the corresponding request."]}),"\n",(0,i.jsx)(n.h3,{id:"location-parameters",children:"Location parameters"}),"\n",(0,i.jsx)(n.p,{children:"A location must include a latitude and longitude in decimal degrees. The coordinates can come from many input sources, such as a GPS location, a point or a click on a map, a geocoding service, and so on. External search/geocoding services can be used to find places and geocode addresses, whose coordinates can be used as input to the service."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Location parameters"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"lat"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Latitude of the location in degrees."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"lon"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Longitude of the location in degrees."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"/developer-portal/pr-preview/pr-121/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#locations",children:"route location documentation"})," for more information on specifying locations."]}),"\n",(0,i.jsx)(n.h3,{id:"costing-parameters",children:"Costing parameters"}),"\n",(0,i.jsxs)(n.p,{children:["The Optimized Route service uses the ",(0,i.jsx)(n.code,{children:"auto"}),", ",(0,i.jsx)(n.code,{children:"bicycle"})," and ",(0,i.jsx)(n.code,{children:"pedestrian"})," costing models available in the Valhalla route service. The ",(0,i.jsx)(n.strong,{children:"multimodal costing is not supported"})," for the Optimized Route service at this time.  Refer to the ",(0,i.jsx)(n.a,{href:"/developer-portal/pr-preview/pr-121/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-models",children:"route costing models"})," and ",(0,i.jsx)(n.a,{href:"/developer-portal/pr-preview/pr-121/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-options",children:"costing options"})," documentation for more on how to specify this input."]}),"\n",(0,i.jsx)(n.h3,{id:"other-request-options",children:"Other request options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Options"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Name your optimized request. If ",(0,i.jsx)(n.code,{children:"id"})," is specified, the naming will be sent thru to the response."]})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"outputs-of-the-optimized-route-service",children:"Outputs of the optimized route service"}),"\n",(0,i.jsxs)(n.p,{children:["If an optimized request has been named using the optional ",(0,i.jsx)(n.code,{children:"&id="})," input, then the name will be returned as a string ",(0,i.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"These are the results of a request to the Optimized Route service."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Item"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"optimized_route"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Returns an optimized route path from point 'a' to point 'n'.  Given a list of locations, an optimized route with stops at each intermediate location exactly one time, always starting at the first location in the list and ending at the last location."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"locations"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The specified array of lat/lngs from the input request.  The first and last locations in the array will remain the same as the input request.  The intermediate locations may be returned reordered in the response.  Due to the reordering of the intermediate locations, an ",(0,i.jsx)(n.code,{children:"original_index"})," is also part of the ",(0,i.jsx)(n.code,{children:"locations"})," object within the response.  This is an identifier of the location index that will allow a user to easily correlate input locations with output locations."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"units"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Distance units for output. Allowable unit types are mi (miles) and km (kilometers). If no unit type is specified, the units default to kilometers."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,i.jsx)(n.code,{children:"warnings"})," (optional)"]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"This array may contain warning objects informing about deprecated request parameters, clamped values etc."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h4,{id:"optimized-route-request",children:"optimized route request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'<VALHALLA BASE URL>/optimized_route?json={"costing":"auto","locations":[{"lat":37.755545371651614,"lon":-122.49248879268177},{"lat":37.76378748950549,"lon":-122.48700002284123},{"lat":37.75980958653573,"lon":-122.48357478963833},{"lat":37.76223015859495,"lon":-122.4912040416903},{"lat":37.75921109492966,"lon":-122.49701367108483},{"lat":37.75514144886399,"lon":-122.50395875678804}]}`\n'})}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Lookup Results in JSON Format"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="Lookup Results in JSON Format"',children:'{\n  "trip": {\n      "locations": [\n          {\n              "type": "break",\n              "lat": 37.755545,\n              "lon": -122.492488,\n              "side_of_street": "left",\n              "original_index": 0\n          },\n          {\n              "type": "break",\n              "lat": 37.759809,\n              "lon": -122.483574,\n              "side_of_street": "left",\n              "original_index": 2\n          },\n          {\n              "type": "break",\n              "lat": 37.763787,\n              "lon": -122.487,\n              "side_of_street": "left",\n              "original_index": 1\n          },\n          {\n              "type": "break",\n              "lat": 37.76223,\n              "lon": -122.491204,\n              "side_of_street": "right",\n              "original_index": 3\n          },\n          {\n              "type": "break",\n              "lat": 37.759211,\n              "lon": -122.497013,\n              "side_of_street": "left",\n              "original_index": 4\n          },\n          {\n              "type": "break",\n              "lat": 37.755141,\n              "lon": -122.503958,\n              "side_of_street": "right",\n              "original_index": 5\n          }\n      ],\n      "legs": [\n          {\n              "maneuvers": [\n                  {\n                      "type": 3,\n                      "instruction": "Drive east on Moraga Street.",\n                      "verbal_succinct_transition_instruction": "Drive east.",\n                      "verbal_pre_transition_instruction": "Drive east on Moraga Street.",\n                      "verbal_post_transition_instruction": "Continue for 800 meters.",\n                      "street_names": [\n                          "Moraga Street"\n                      ],\n                      "time": 99.698,\n                      "length": 0.829,\n                      "cost": 220.654,\n                      "begin_shape_index": 0,\n                      "end_shape_index": 10,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 15,\n                      "instruction": "Turn left onto 25th Avenue.",\n                      "verbal_transition_alert_instruction": "Turn left onto 25th Avenue.",\n                      "verbal_succinct_transition_instruction": "Turn left.",\n                      "verbal_pre_transition_instruction": "Turn left onto 25th Avenue.",\n                      "verbal_post_transition_instruction": "Continue for 400 meters.",\n                      "street_names": [\n                          "25th Avenue"\n                      ],\n                      "time": 42.183,\n                      "length": 0.445,\n                      "cost": 109.514,\n                      "begin_shape_index": 10,\n                      "end_shape_index": 15,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 6,\n                      "instruction": "Your destination is on the left.",\n                      "verbal_transition_alert_instruction": "Your destination will be on the left.",\n                      "verbal_pre_transition_instruction": "Your destination is on the left.",\n                      "time": 0.0,\n                      "length": 0.0,\n                      "cost": 0.0,\n                      "begin_shape_index": 15,\n                      "end_shape_index": 15,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  }\n              ],\n              "summary": {\n                  "has_time_restrictions": false,\n                  "has_toll": false,\n                  "has_highway": false,\n                  "has_ferry": false,\n                  "min_lat": 37.755411,\n                  "min_lon": -122.492479,\n                  "max_lat": 37.75982,\n                  "max_lon": -122.483052,\n                  "time": 141.882,\n                  "length": 1.275,\n                  "cost": 330.169\n              },\n              "shape": "g`l_gA|bjshFiAot@}AyaA}A_bA_BabA}A}aAo@o`@m@o`@}A}aA_BabA}A{aAssBdGwmBvFwDJsDJyIV"\n          },\n          {\n              "maneuvers": [\n                  {\n                      "type": 3,\n                      "instruction": "Drive north on 25th Avenue.",\n                      "verbal_succinct_transition_instruction": "Drive north. Then, in 400 meters, Turn left onto Irving Street.",\n                      "verbal_pre_transition_instruction": "Drive north on 25th Avenue. Then, in 400 meters, Turn left onto Irving Street.",\n                      "verbal_post_transition_instruction": "Continue for 400 meters.",\n                      "street_names": [\n                          "25th Avenue"\n                      ],\n                      "time": 34.835,\n                      "length": 0.386,\n                      "cost": 83.125,\n                      "begin_shape_index": 0,\n                      "end_shape_index": 8,\n                      "verbal_multi_cue": true,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 15,\n                      "instruction": "Turn left onto Irving Street.",\n                      "verbal_transition_alert_instruction": "Turn left onto Irving Street.",\n                      "verbal_succinct_transition_instruction": "Turn left.",\n                      "verbal_pre_transition_instruction": "Turn left onto Irving Street.",\n                      "verbal_post_transition_instruction": "Continue for 300 meters.",\n                      "street_names": [\n                          "Irving Street"\n                      ],\n                      "time": 27.609,\n                      "length": 0.282,\n                      "cost": 83.052,\n                      "begin_shape_index": 8,\n                      "end_shape_index": 16,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 10,\n                      "instruction": "Turn right onto 28th Avenue.",\n                      "verbal_transition_alert_instruction": "Turn right onto 28th Avenue.",\n                      "verbal_succinct_transition_instruction": "Turn right. Then Your destination will be on the left.",\n                      "verbal_pre_transition_instruction": "Turn right onto 28th Avenue. Then Your destination will be on the left.",\n                      "verbal_post_transition_instruction": "Continue for 70 meters.",\n                      "street_names": [\n                          "28th Avenue"\n                      ],\n                      "time": 12.009,\n                      "length": 0.072,\n                      "cost": 28.812,\n                      "begin_shape_index": 16,\n                      "end_shape_index": 17,\n                      "verbal_multi_cue": true,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 6,\n                      "instruction": "Your destination is on the left.",\n                      "verbal_transition_alert_instruction": "Your destination will be on the left.",\n                      "verbal_pre_transition_instruction": "Your destination is on the left.",\n                      "time": 0.0,\n                      "length": 0.0,\n                      "cost": 0.0,\n                      "begin_shape_index": 17,\n                      "end_shape_index": 17,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  }\n              ],\n              "summary": {\n                  "has_time_restrictions": false,\n                  "has_toll": false,\n                  "has_highway": false,\n                  "has_ferry": false,\n                  "min_lat": 37.75982,\n                  "min_lon": -122.486833,\n                  "max_lat": 37.763794,\n                  "max_lon": -122.483331,\n                  "time": 74.454,\n                  "length": 0.74,\n                  "cost": 194.989\n              },\n              "shape": "wst_gAdgxrhFq{ApEi@@kDJ[@]@sDJo@BqkBrFb@bXJxGl@z_@`@zVHhFHxEf@`\\\\~A|aAqg@zA"\n          },\n          {\n              "maneuvers": [\n                  {\n                      "type": 2,\n                      "instruction": "Drive south on 28th Avenue.",\n                      "verbal_succinct_transition_instruction": "Drive south. Then Turn right onto Irving Street.",\n                      "verbal_pre_transition_instruction": "Drive south on 28th Avenue. Then Turn right onto Irving Street.",\n                      "verbal_post_transition_instruction": "Continue for 70 meters.",\n                      "street_names": [\n                          "28th Avenue"\n                      ],\n                      "time": 6.499,\n                      "length": 0.072,\n                      "cost": 7.312,\n                      "begin_shape_index": 0,\n                      "end_shape_index": 1,\n                      "verbal_multi_cue": true,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 10,\n                      "instruction": "Turn right onto Irving Street.",\n                      "verbal_transition_alert_instruction": "Turn right onto Irving Street.",\n                      "verbal_succinct_transition_instruction": "Turn right.",\n                      "verbal_pre_transition_instruction": "Turn right onto Irving Street.",\n                      "verbal_post_transition_instruction": "Continue for 400 meters.",\n                      "street_names": [\n                          "Irving Street"\n                      ],\n                      "time": 39.258,\n                      "length": 0.377,\n                      "cost": 99.059,\n                      "begin_shape_index": 1,\n                      "end_shape_index": 5,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 15,\n                      "instruction": "Turn left onto 32nd Avenue.",\n                      "verbal_transition_alert_instruction": "Turn left onto 32nd Avenue.",\n                      "verbal_succinct_transition_instruction": "Turn left. Then Your destination will be on the right.",\n                      "verbal_pre_transition_instruction": "Turn left onto 32nd Avenue. Then Your destination will be on the right.",\n                      "verbal_post_transition_instruction": "Continue for 80 meters.",\n                      "street_names": [\n                          "32nd Avenue"\n                      ],\n                      "time": 9.32,\n                      "length": 0.08,\n                      "cost": 18.636,\n                      "begin_shape_index": 5,\n                      "end_shape_index": 6,\n                      "verbal_multi_cue": true,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 5,\n                      "instruction": "Your destination is on the right.",\n                      "verbal_transition_alert_instruction": "Your destination will be on the right.",\n                      "verbal_pre_transition_instruction": "Your destination is on the right.",\n                      "time": 0.0,\n                      "length": 0.0,\n                      "cost": 0.0,\n                      "begin_shape_index": 6,\n                      "end_shape_index": 6,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  }\n              ],\n              "summary": {\n                  "has_time_restrictions": false,\n                  "has_toll": false,\n                  "has_highway": false,\n                  "has_ferry": false,\n                  "min_lat": 37.762237,\n                  "min_lon": -122.491075,\n                  "max_lat": 37.763794,\n                  "max_lon": -122.486787,\n                  "time": 55.078,\n                  "length": 0.529,\n                  "cost": 125.008\n              },\n              "shape": "el|_gAbb_shFpg@{A|A|aA|A~aA~AbbA|A|aA|k@cB"\n          },\n          {\n              "maneuvers": [\n                  {\n                      "type": 3,\n                      "instruction": "Drive north on 32nd Avenue.",\n                      "verbal_succinct_transition_instruction": "Drive north. Then, in 300 meters, Turn left onto Lincoln Way.",\n                      "verbal_pre_transition_instruction": "Drive north on 32nd Avenue. Then, in 300 meters, Turn left onto Lincoln Way.",\n                      "verbal_post_transition_instruction": "Continue for 300 meters.",\n                      "street_names": [\n                          "32nd Avenue"\n                      ],\n                      "time": 26.903,\n                      "length": 0.295,\n                      "cost": 63.751,\n                      "begin_shape_index": 0,\n                      "end_shape_index": 4,\n                      "verbal_multi_cue": true,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 15,\n                      "instruction": "Turn left onto Lincoln Way.",\n                      "verbal_transition_alert_instruction": "Turn left onto Lincoln Way.",\n                      "verbal_succinct_transition_instruction": "Turn left.",\n                      "verbal_pre_transition_instruction": "Turn left onto Lincoln Way.",\n                      "verbal_post_transition_instruction": "Continue for 600 meters.",\n                      "street_names": [\n                          "Lincoln Way"\n                      ],\n                      "time": 40.579,\n                      "length": 0.565,\n                      "cost": 58.038,\n                      "begin_shape_index": 4,\n                      "end_shape_index": 18,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 15,\n                      "instruction": "Turn left onto 38th Avenue.",\n                      "verbal_transition_alert_instruction": "Turn left onto 38th Avenue.",\n                      "verbal_succinct_transition_instruction": "Turn left.",\n                      "verbal_pre_transition_instruction": "Turn left onto 38th Avenue.",\n                      "verbal_post_transition_instruction": "Continue for 600 meters.",\n                      "street_names": [\n                          "38th Avenue"\n                      ],\n                      "time": 74.401,\n                      "length": 0.602,\n                      "cost": 153.07,\n                      "begin_shape_index": 18,\n                      "end_shape_index": 30,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 6,\n                      "instruction": "Your destination is on the left.",\n                      "verbal_transition_alert_instruction": "Your destination will be on the left.",\n                      "verbal_pre_transition_instruction": "Your destination is on the left.",\n                      "time": 0.0,\n                      "length": 0.0,\n                      "cost": 0.0,\n                      "begin_shape_index": 30,\n                      "end_shape_index": 30,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  }\n              ],\n              "summary": {\n                  "has_time_restrictions": false,\n                  "has_toll": false,\n                  "has_highway": false,\n                  "has_ferry": false,\n                  "min_lat": 37.7592,\n                  "min_lon": -122.497638,\n                  "max_lat": 37.764883,\n                  "max_lon": -122.491025,\n                  "time": 141.884,\n                  "length": 1.463,\n                  "cost": 274.86\n              },\n              "shape": "{jy_gAbhgshF}k@bB}lBvFyCHsDJ~AzaAFdEL|Hv@nf@FxDFnD~AdbAFhEJhGx@xh@VxPdAvn@DlCfBfiApDKbDK`fBgFrEM|DMT?xfBiFhDIZAZAhDKf}AsE"\n          },\n          {\n              "maneuvers": [\n                  {\n                      "type": 3,\n                      "instruction": "Drive south on 38th Avenue.",\n                      "verbal_succinct_transition_instruction": "Drive south.",\n                      "verbal_pre_transition_instruction": "Drive south on 38th Avenue.",\n                      "verbal_post_transition_instruction": "Continue for 400 meters.",\n                      "street_names": [\n                          "38th Avenue"\n                      ],\n                      "time": 53.403,\n                      "length": 0.444,\n                      "cost": 76.592,\n                      "begin_shape_index": 0,\n                      "end_shape_index": 4,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 10,\n                      "instruction": "Turn right onto Moraga Street.",\n                      "verbal_transition_alert_instruction": "Turn right onto Moraga Street.",\n                      "verbal_succinct_transition_instruction": "Turn right.",\n                      "verbal_pre_transition_instruction": "Turn right onto Moraga Street.",\n                      "verbal_post_transition_instruction": "Continue for 600 meters.",\n                      "street_names": [\n                          "Moraga Street"\n                      ],\n                      "time": 71.757,\n                      "length": 0.613,\n                      "cost": 137.615,\n                      "begin_shape_index": 4,\n                      "end_shape_index": 12,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  },\n                  {\n                      "type": 5,\n                      "instruction": "Your destination is on the right.",\n                      "verbal_transition_alert_instruction": "Your destination will be on the right.",\n                      "verbal_pre_transition_instruction": "Your destination is on the right.",\n                      "time": 0.0,\n                      "length": 0.0,\n                      "cost": 0.0,\n                      "begin_shape_index": 12,\n                      "end_shape_index": 12,\n                      "travel_mode": "drive",\n                      "travel_type": "car"\n                  }\n              ],\n              "summary": {\n                  "has_time_restrictions": false,\n                  "has_toll": false,\n                  "has_highway": false,\n                  "has_ferry": false,\n                  "min_lat": 37.754905,\n                  "min_lon": -122.503942,\n                  "max_lat": 37.7592,\n                  "max_lon": -122.49698,\n                  "time": 125.16,\n                  "length": 1.058,\n                  "cost": 214.207\n              },\n              "shape": "_ms_gAvmsshFbOc@psBcGrmBwFzDMF|DtAb|@~A|aA|AzaA|A`bA|A|aA~A~aAl@d`@"\n          }\n      ],\n      "summary": {\n          "has_time_restrictions": false,\n          "has_toll": false,\n          "has_highway": false,\n          "has_ferry": false,\n          "min_lat": 37.754905,\n          "min_lon": -122.503942,\n          "max_lat": 37.764883,\n          "max_lon": -122.483052,\n          "time": 538.459,\n          "length": 5.067,\n          "cost": 1139.236\n      },\n      "status_message": "Found route between points",\n      "status": 0,\n      "units": "kilometers",\n      "language": "en-US"\n  }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"error-checking",children:"Error checking"}),"\n",(0,i.jsx)(n.p,{children:"The service checks the return to see that all locations can be reached. If one or more cannot be reached, it returns an error and lists the location number that cannot be reached.  Currently, one location is listed at this time, even if more than one have an issue."}),"\n",(0,i.jsxs)(n.p,{children:["This is an example which should return: ",(0,i.jsx)(n.code,{children:"400::Location at index 3 is unreachable"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{"locations":[{"lat":40.306600,"lon":-76.900022},{"lat":40.293246,"lon":-76.936230},{"lat":40.448678,"lon":-76.932885},{"lat":40.419753,"lon":-76.999632},{"lat":40.211050,"lon":-76.777071},{"lat":40.306600,"lon":-76.900022}],"costing":"auto"}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/developer-portal/pr-preview/pr-121/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#http-status-codes-and-conditions",children:"HTTP return codes"})," for more on messages you might receive from the service."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},67395:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/optimized-route-example-d663aa385adbf8d7a0f095d174ebbc7e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);