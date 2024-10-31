"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[1468],{79311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(74848),i=n(28453);const r={sidebar_position:3,id:"osm-valhalla-matrix",slug:"osm-valhalla-matrix",title:"Matrix API",tags:["osm","matrix","API","valhalla"]},o="Time-Distance Matrix service API reference",a={id:"MapColonies/openstreetmap/valhalla/osm-valhalla-matrix",title:"Matrix API",description:"Valhalla's time-distance matrix service provides a quick computation of time and distance between a set of locations and returns them to you in the resulting matrix table.",source:"@site/docs/MapColonies/openstreetmap/valhalla/matrix.md",sourceDirName:"MapColonies/openstreetmap/valhalla",slug:"/MapColonies/openstreetmap/valhalla/osm-valhalla-matrix",permalink:"/developer-portal/pr-preview/pr-117/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-matrix",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/valhalla/matrix.md",tags:[{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/osm"},{inline:!0,label:"matrix",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/matrix"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/api"},{inline:!0,label:"valhalla",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/valhalla"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"osm-valhalla-matrix",slug:"osm-valhalla-matrix",title:"Matrix API",tags:["osm","matrix","API","valhalla"]},sidebar:"docSidebar",previous:{title:"Optimized Route API",permalink:"/developer-portal/pr-preview/pr-117/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-optimized-route"},next:{title:"Isochrone API",permalink:"/developer-portal/pr-preview/pr-117/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone"}},l={},d=[{value:"Matrix service",id:"matrix-service",level:2},{value:"Inputs of the matrix service",id:"inputs-of-the-matrix-service",level:2},{value:"Source and target parameters",id:"source-and-target-parameters",level:3},{value:"Costing parameters",id:"costing-parameters",level:3},{value:"Other request options",id:"other-request-options",level:3},{value:"Time-dependent matrices",id:"time-dependent-matrices",level:3},{value:"Outputs of the matrix service",id:"outputs-of-the-matrix-service",level:2},{value:"Examples",id:"examples",level:2},{value:"&#39;One To Many&#39; request:",id:"one-to-many-request",level:4},{value:"&#39;Many To Many&#39; request:",id:"many-to-many-request",level:4}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"time-distance-matrix-service-api-reference",children:"Time-Distance Matrix service API reference"})}),"\n",(0,s.jsx)(t.p,{children:"Valhalla's time-distance matrix service provides a quick computation of time and distance between a set of locations and returns them to you in the resulting matrix table."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Matrix one to many example",src:n(44483).A+"",width:"1217",height:"660"})}),"\n",(0,s.jsx)(t.h2,{id:"matrix-service",children:"Matrix service"}),"\n",(0,s.jsxs)(t.p,{children:["The time distance matrix service takes a ",(0,s.jsx)(t.code,{children:"sources"})," and ",(0,s.jsx)(t.code,{children:"targets"})," to list locations. This allows you to set the source (origin) locations separately from the target (destination) locations. The set of origins may be disjoint (not overlapping) with the set of destinations. In other words, the target locations do not have to include any locations from source locations. The time-distance matrix can return a row matrix, a column matrix, or a general matrix of computed time and distance, depending on your input for the sources and targets parameters. The general case is a row ordered matrix with the time and distance from each source location to each target location. A row vector is considered a ",(0,s.jsx)(t.em,{children:"one_to_many"})," time-distance matrix where there is one source location and multiple target locations. The time and distance from the source location to all target locations is returned. A column matrix represents a ",(0,s.jsx)(t.em,{children:"many_to_one"})," time-distance matrix where there are many sources and one target. Another special case is when the source location list is the same as the target location list. Here, a diagonal (square matrix with [0,0.00] on the diagonal elements) matrix is returned. The is special case is often used as the input to optimized routing problems."]}),"\n",(0,s.jsx)(t.h2,{id:"inputs-of-the-matrix-service",children:"Inputs of the matrix service"}),"\n",(0,s.jsxs)(t.p,{children:["The matrix request run locally takes the form of ",(0,s.jsx)(t.code,{children:"localhost:8002/sources_to_targets?json={}"}),", where the JSON inputs inside the ",(0,s.jsx)(t.code,{children:"{}"})," includes at least one location for both sources and for targets as well as the route costing type and options for the route costing model."]}),"\n",(0,s.jsx)(t.p,{children:"For example, while at your office, you want to know the times and distances to walk to several restaurants where you could have dinner, as well as the times and distances from each restaurant to the train station for your commute home. This will help you determine where to eat."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"one-to-many using /sources_to_targets?"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{"sources":[{"lat":40.744014,"lon":-73.990508}],"targets":[{"lat":40.744014,"lon":-73.990508},{"lat":40.739735,"lon":-73.979713},{"lat":40.752522,"lon":-73.985015},{"lat":40.750117,"lon":-73.983704},{"lat":40.750552,"lon":-73.993519}],"costing":"pedestrian"}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"many-to-one using /sources_to_targets?"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{"sources":[{"lat":40.744014,"lon":-73.990508},{"lat":40.739735,"lon":-73.979713},{"lat":40.752522,"lon":-73.985015},{"lat":40.750117,"lon":-73.983704},{"lat":40.750552,"lon":-73.993519}],"targets":[{"lat":40.750552,"lon":-73.993519}],"costing":"pedestrian"}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"many-to-many using /sources_to_targets?"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{"sources":[{"lat":40.744014,"lon":-73.990508},{"lat":40.739735,"lon":-73.979713},{"lat":40.752522,"lon":-73.985015},{"lat":40.750117,"lon":-73.983704},{"lat":40.750552,"lon":-73.993519}],"targets":[{"lat":40.744014,"lon":-73.990508},{"lat":40.739735,"lon":-73.979713},{"lat":40.752522,"lon":-73.985015},{"lat":40.750117,"lon":-73.983704},{"lat":40.750552,"lon":-73.993519}],"costing":"pedestrian"}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"source-and-target-parameters",children:"Source and target parameters"}),"\n",(0,s.jsxs)(t.p,{children:["When using the ",(0,s.jsx)(t.code,{children:"sources_to_targets"})," action, you specify sources and targets as ordered lists of one or more locations within a JSON array, depending on the type of matrix result you are expecting."]}),"\n",(0,s.jsx)(t.p,{children:"A source and target must include a latitude and longitude in decimal degrees. The coordinates can come from many input sources, such as a GPS location, a point or a click on a map, a geocoding service, and so on."}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Source and target parameters description"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Source and target parameters"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"lat"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Latitude of the source/target in degrees."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"lon"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Longitude of the source/target in degrees."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"date_time"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Expected date/time for the user to be at the location using the ISO 8601 format (YYYY-MM-DDThh",":mm",") in the local time zone of departure or arrival. ",(0,s.jsx)(t.code,{children:"date_time"})," as location input offers more granularity over setting time than the global ",(0,s.jsx)(t.code,{children:"date_time"})," object (see below)."]})]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["You can refer to the ",(0,s.jsx)(t.a,{href:"/developer-portal/pr-preview/pr-117/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#locations",children:"route location documentation"})," for more information on specifying locations."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": ",(0,s.jsx)(t.code,{children:"date_time"})," strings behave differently for ",(0,s.jsx)(t.code,{children:"sources_to_targets"})," than for ",(0,s.jsx)(t.code,{children:"route"}),". If set on the ",(0,s.jsx)(t.code,{children:"sources"})," ",(0,s.jsx)(t.strong,{children:"and"})," there's more ",(0,s.jsx)(t.code,{children:"targets"})," than ",(0,s.jsx)(t.code,{children:"sources"}),', it\'ll behave like a "Specified departure time" on the ',(0,s.jsx)(t.code,{children:"sources"}),". If set on the ",(0,s.jsx)(t.code,{children:"targets"})," ",(0,s.jsx)(t.strong,{children:"and"})," there's less ",(0,s.jsx)(t.code,{children:"targets"})," than ",(0,s.jsx)(t.code,{children:"sources"}),', it\'ll behave like a "Specified arrival time" on the ',(0,s.jsx)(t.code,{children:"targets"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Also, using ",(0,s.jsx)(t.code,{children:"type"})," in addition to the ",(0,s.jsx)(t.code,{children:"lat"})," and ",(0,s.jsx)(t.code,{children:"lon"})," within the location parameter has no meaning for matrices."]}),"\n",(0,s.jsx)(t.h3,{id:"costing-parameters",children:"Costing parameters"}),"\n",(0,s.jsxs)(t.p,{children:["The Time-Distance Matrix service uses the ",(0,s.jsx)(t.code,{children:"auto"}),", ",(0,s.jsx)(t.code,{children:"bicycle"}),", ",(0,s.jsx)(t.code,{children:"pedestrian"})," and ",(0,s.jsx)(t.code,{children:"bikeshare"})," and other costing models available in the route service. Exception: ",(0,s.jsx)(t.strong,{children:"multimodal costing is not supported"})," for the time-distance matrix service at this time.  Refer to the ",(0,s.jsx)(t.a,{href:"/developer-portal/pr-preview/pr-117/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-models",children:"route costing models"})," and ",(0,s.jsx)(t.a,{href:"/developer-portal/pr-preview/pr-117/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-options",children:"costing options"})," documentation for more on how to specify this input."]}),"\n",(0,s.jsx)(t.h3,{id:"other-request-options",children:"Other request options"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Options with description"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Options"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Name your matrix request. If ",(0,s.jsx)(t.code,{children:"id"})," is specified, the naming will be sent thru to the response."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"matrix_locations"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:['For one-to-many or many-to-one requests this specifies the minimum number of locations that satisfy the request. However, when specified, this option allows a partial result to be returned. This is basically equivalent to "find the closest/best ',(0,s.jsx)(t.code,{children:"matrix_locations"}),' locations out of the full location set".']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"date_time"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["This is the local date and time at the location.",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"type"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"0 - Current departure time."}),(0,s.jsx)("li",{children:"1 - Specified departure time"}),(0,s.jsx)("li",{children:"2 - Specified arrival time."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"value"})," - the date and time is specified in ISO 8601 format (YYYY-MM-DDThh",":mm",') in the local time zone of departure or arrival.  For example "2016-07-03T08:06"']})]}),(0,s.jsx)("br",{})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"verbose"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["If ",(0,s.jsx)(t.code,{children:"true"})," it will output a flat list of objects for ",(0,s.jsx)(t.code,{children:"distances"})," & ",(0,s.jsx)(t.code,{children:"durations"})," explicitly specifying the source & target indices. If ",(0,s.jsx)(t.code,{children:"false"})," will return more compact, nested row-major ",(0,s.jsx)(t.code,{children:"distances"})," & ",(0,s.jsx)(t.code,{children:"durations"})," arrays and not echo ",(0,s.jsx)(t.code,{children:"sources"})," and ",(0,s.jsx)(t.code,{children:"targets"}),". Default ",(0,s.jsx)(t.code,{children:"true"}),"."]})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"time-dependent-matrices",children:"Time-dependent matrices"}),"\n",(0,s.jsxs)(t.p,{children:["Most control can be achieved when setting a ",(0,s.jsx)(t.code,{children:"date_time"})," string on each source or target. When setting the global ",(0,s.jsx)(t.code,{children:"date_time"})," object as a shortcut instead, Valhalla will translate that to setting the ",(0,s.jsx)(t.code,{children:"date_time.value"})," on all source locations when ",(0,s.jsx)(t.code,{children:"date_time.type = 0/1"})," and on all target locations when ",(0,s.jsx)(t.code,{children:"date_time.type = 2"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["However, there are important limitations of the ",(0,s.jsx)(t.code,{children:"/sources_to_targets"})," service's time awareness. Due to algorithmic complexity, we disallow time-dependence for certain combinations of ",(0,s.jsx)(t.code,{children:"date_time"})," on locations, if"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"date_time.type = 0/1"})," or ",(0,s.jsx)(t.code,{children:"date_time"})," on any source, when there's more sources than targets"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"date_time.type = 2"})," or ",(0,s.jsx)(t.code,{children:"date_time"})," on any target, when there's more or equal amount of targets than/as sources"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"outputs-of-the-matrix-service",children:"Outputs of the matrix service"}),"\n",(0,s.jsxs)(t.p,{children:["If a matrix request has been named using the optional ",(0,s.jsx)(t.code,{children:"&id="})," input, then the name will be returned as a string ",(0,s.jsx)(t.code,{children:"id"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"These are the results of a request to the Time-Distance Matrix service."}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Item description"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Item"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"sources_to_targets"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Returns an array of time and distance between the sources and the targets. The array is ",(0,s.jsx)(t.strong,{children:"row-ordered"}),". This means that the time and distance from the first location to all others forms the first row of the array, followed by the time and distance from the second source location to all target locations, etc."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"distance"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The computed distance between each set of points. Distance will always be 0.00 for the first element of the time-distance array for ",(0,s.jsx)(t.code,{children:"one_to_many"}),", the last element in a ",(0,s.jsx)(t.code,{children:"many_to_one"}),", and the first and last elements of a ",(0,s.jsx)(t.code,{children:"many_to_many"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"time"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The computed time between each set of points. Time will always be 0 for the first element of the time-distance array for ",(0,s.jsx)(t.code,{children:"one_to_many"}),", the last element in a ",(0,s.jsx)(t.code,{children:"many_to_one"}),", and the first and last elements of a ",(0,s.jsx)(t.code,{children:"many_to_many"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"to_index"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The destination index into the locations array."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"from_index"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The origin index into the locations array."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"date_time"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["(optional) If the date_time was valid for an origin, ",(0,s.jsx)(t.code,{children:"date_time"})," will return the local time at the destination."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"locations"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The specified array of lat/lngs from the input request."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"units"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Distance units for output. Allowable unit types are mi (miles) and km (kilometers). If no unit type is specified, the units default to kilometers."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"warnings"})," (optional)"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This array may contain warning objects informing about deprecated request parameters, clamped values etc."})]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"/developer-portal/pr-preview/pr-117/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#http-status-codes-and-conditions",children:"HTTP return codes"})," for more on messages you might receive from the service."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h4,{id:"one-to-many-request",children:"'One To Many' request:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'<VALHALLA BASE URL>/sources_to_targets?json={"sources":[{"lon":-73.995323,"lat":40.738804}],"targets":[{"lon":-73.978844,"lat":40.767673},{"lon":-73.948112,"lat":40.742577},{"lon":-73.979706,"lat":40.729568}],"costing":"auto","units":"mi"}`\n'})}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Lookup 'One To Many' Results in JSON Format"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",metastring:'title="Lookup Results in JSON Format"',children:'{\n  "algorithm": "costmatrix",\n  "units": "miles",\n  "sources": [\n      [\n          {\n              "lon": -73.995323,\n              "lat": 40.738804\n          }\n      ]\n  ],\n  "targets": [\n      [\n          {\n              "lon": -73.978844,\n              "lat": 40.767673\n          },\n          {\n              "lon": -73.948112,\n              "lat": 40.742577\n          },\n          {\n              "lon": -73.979706,\n              "lat": 40.729568\n          }\n      ]\n  ],\n  "sources_to_targets": [\n      [\n          {\n              "distance": 4.509,\n              "time": 831,\n              "to_index": 0,\n              "from_index": 0\n          },\n          {\n              "distance": 3.886,\n              "time": 581,\n              "to_index": 1,\n              "from_index": 0\n          },\n          {\n              "distance": 1.351,\n              "time": 246,\n              "to_index": 2,\n              "from_index": 0\n          }\n      ]\n  ]\n}\n'})})]}),"\n",(0,s.jsx)(t.h4,{id:"many-to-many-request",children:"'Many To Many' request:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'<VALHALLA BASE URL>/sources_to_targets?json={"sources":[{"lon":-73.995323,"lat":40.738804},{"lon":-73.978844,"lat":40.767673},{"lon":-73.948112,"lat":40.742577},{"lon":-73.979706,"lat":40.729568}],"targets":[{"lon":-73.995323,"lat":40.738804},{"lon":-73.978844,"lat":40.767673},{"lon":-73.948112,"lat":40.742577},{"lon":-73.979706,"lat":40.729568}],"costing":"auto","units":"mi"}`\n'})}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Lookup 'Many To Many' Results in JSON Format"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",metastring:'title="Lookup Results in JSON Format"',children:'{\n  "algorithm": "costmatrix",\n  "units": "miles",\n  "sources": [\n      [\n          {\n              "lon": -73.995323,\n              "lat": 40.738804\n          },\n          {\n              "lon": -73.978844,\n              "lat": 40.767673\n          },\n          {\n              "lon": -73.948112,\n              "lat": 40.742577\n          },\n          {\n              "lon": -73.979706,\n              "lat": 40.729568\n          }\n      ]\n  ],\n  "targets": [\n      [\n          {\n              "lon": -73.995323,\n              "lat": 40.738804\n          },\n          {\n              "lon": -73.978844,\n              "lat": 40.767673\n          },\n          {\n              "lon": -73.948112,\n              "lat": 40.742577\n          },\n          {\n              "lon": -73.979706,\n              "lat": 40.729568\n          }\n      ]\n  ],\n  "sources_to_targets": [\n      [\n          {\n              "distance": 0.000,\n              "time": 0,\n              "to_index": 0,\n              "from_index": 0\n          },\n          {\n              "distance": 4.509,\n              "time": 831,\n              "to_index": 1,\n              "from_index": 0\n          },\n          {\n              "distance": 3.886,\n              "time": 581,\n              "to_index": 2,\n              "from_index": 0\n          },\n          {\n              "distance": 1.351,\n              "time": 246,\n              "to_index": 3,\n              "from_index": 0\n          }\n      ],\n      [\n          {\n              "distance": 3.081,\n              "time": 513,\n              "to_index": 0,\n              "from_index": 1\n          },\n          {\n              "distance": 0.000,\n              "time": 0,\n              "to_index": 1,\n              "from_index": 1\n          },\n          {\n              "distance": 3.345,\n              "time": 422,\n              "to_index": 2,\n              "from_index": 1\n          },\n          {\n              "distance": 3.795,\n              "time": 587,\n              "to_index": 3,\n              "from_index": 1\n          }\n      ],\n      [\n          {\n              "distance": 3.572,\n              "time": 514,\n              "to_index": 0,\n              "from_index": 2\n          },\n          {\n              "distance": 4.498,\n              "time": 666,\n              "to_index": 1,\n              "from_index": 2\n          },\n          {\n              "distance": 0.000,\n              "time": 0,\n              "to_index": 2,\n              "from_index": 2\n          },\n          {\n              "distance": 3.467,\n              "time": 487,\n              "to_index": 3,\n              "from_index": 2\n          }\n      ],\n      [\n          {\n              "distance": 1.338,\n              "time": 252,\n              "to_index": 0,\n              "from_index": 3\n          },\n          {\n              "distance": 4.593,\n              "time": 820,\n              "to_index": 1,\n              "from_index": 3\n          },\n          {\n              "distance": 3.087,\n              "time": 436,\n              "to_index": 2,\n              "from_index": 3\n          },\n          {\n              "distance": 0.000,\n              "time": 0,\n              "to_index": 3,\n              "from_index": 3\n          }\n      ]\n    ]\n}\n'})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Matrix many-to-many example",src:n(22334).A+"",width:"1206",height:"651"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},22334:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/matrix-many-to-many-98d5eecf77961ead0158dc8f4d3e13d8.png"},44483:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/matrix-one-to-many-6ff6ab697327a441a49dcd7b0d06e928.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);