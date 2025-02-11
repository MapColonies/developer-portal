"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7071],{45520:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=o(74848),r=o(28453);const s={sidebar_position:4,id:"osm-valhalla-isochrone",slug:"osm-valhalla-isochrone",title:"Isochrone API",tags:["osm","isochrone","API","valhalla"]},i="Isochrone & Isodistance service API reference",a={id:"MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone",title:"Isochrone API",description:"An isochrone is a line that connects points of equal travel time about a given location, from the Greek roots of iso for equal and chrone for time. Valhalla's isochrone service computes areas that are reachable within specified time intervals from a location, and returns the reachable regions as contours of polygons or lines that you can display on a map.",source:"@site/docs/MapColonies/openstreetmap/valhalla/isochrone.md",sourceDirName:"MapColonies/openstreetmap/valhalla",slug:"/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone",permalink:"/developer-portal/pr-preview/pr-146/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/valhalla/isochrone.md",tags:[{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-146/docs/tags/osm"},{inline:!0,label:"isochrone",permalink:"/developer-portal/pr-preview/pr-146/docs/tags/isochrone"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-146/docs/tags/api"},{inline:!0,label:"valhalla",permalink:"/developer-portal/pr-preview/pr-146/docs/tags/valhalla"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"osm-valhalla-isochrone",slug:"osm-valhalla-isochrone",title:"Isochrone API",tags:["osm","isochrone","API","valhalla"]},sidebar:"docSidebar",previous:{title:"Matrix API",permalink:"/developer-portal/pr-preview/pr-146/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-matrix"},next:{title:"Expansion API",permalink:"/developer-portal/pr-preview/pr-146/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-expansion"}},l={},c=[{value:"Inputs of the Isochrone service",id:"inputs-of-the-isochrone-service",level:2},{value:"Location parameters",id:"location-parameters",level:3},{value:"Costing parameters",id:"costing-parameters",level:3},{value:"Other request parameters",id:"other-request-parameters",level:3},{value:"Outputs of the Isochrone service",id:"outputs-of-the-isochrone-service",level:2},{value:"Draw isochrones on a map",id:"draw-isochrones-on-a-map",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"isochrone--isodistance-service-api-reference",children:"Isochrone & Isodistance service API reference"})}),"\n",(0,t.jsxs)(n.p,{children:["An isochrone is a line that connects points of equal travel time about a given location, from the Greek roots of ",(0,t.jsx)(n.code,{children:"iso"})," for equal and ",(0,t.jsx)(n.code,{children:"chrone"})," for time. Valhalla's isochrone service computes areas that are reachable within specified time intervals from a location, and returns the reachable regions as contours of polygons or lines that you can display on a map."]}),"\n",(0,t.jsx)(n.p,{children:"Isodistances follow the same concept, but instead of time one specifies distance intervals."}),"\n",(0,t.jsx)(n.p,{children:"Isochrone maps share some of the same concepts and terminology with familiar topographic maps, which depict contour lines for points of equal elevation. For this reason other terms common in topography apply, such as contours or isolines."}),"\n",(0,t.jsx)(n.p,{children:"This is an example of 15, 30, 45 and 60 minute bicycle isochrones centered in Lancaster, PA."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Isochrones for travel times by walking in Lancaster, PA",src:o(93129).A+"",width:"1848",height:"755"})}),"\n",(0,t.jsx)(n.h2,{id:"inputs-of-the-isochrone-service",children:"Inputs of the Isochrone service"}),"\n",(0,t.jsxs)(n.p,{children:["An isochrone request run locally takes the form of ",(0,t.jsx)(n.code,{children:"localhost:8002/isochrone?json={}"}),", where the JSON inputs inside the ",(0,t.jsx)(n.code,{children:"{}"})," includes an array of at least one location and options for the ",(0,t.jsx)(n.a,{href:"/developer-portal/pr-preview/pr-146/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-models",children:"route costing model"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, you can use the isochrone service to find out where you can travel within a 15-minute walk from your office building. The API request for this uses ",(0,t.jsx)(n.code,{children:"isochrone?"})," as the request action, ",(0,t.jsx)(n.code,{children:"pedestrian"})," costing, and a single contour for a 15-minute time interval. The response is GeoJSON, which you can display on a map to visualize where you might be able to walk."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{"locations":[{"lat":40.744014,"lon":-73.990508}],"costing":"pedestrian","contours":[{"time":15.0,"color":"ff0000"}]}&id=Walk_From_Office\n'})}),"\n",(0,t.jsxs)(n.p,{children:["There is an option to name your isochrone request by appending ",(0,t.jsx)(n.code,{children:"&id="}),". The ",(0,t.jsx)(n.code,{children:"id"})," is returned with the response so you can match it to your corresponding request."]}),"\n",(0,t.jsx)(n.h3,{id:"location-parameters",children:"Location parameters"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"locations"})," must include a latitude and longitude in decimal degrees. The coordinates can come from many input sources, such as a GPS location, a point or a click on a map, a geocoding service, and so on. External search services, such as Mapbox Geocoding can be used to find places and geocode addresses, whose coordinates can be used as input to the service."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Location parameters"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"lat"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Latitude of the location in degrees."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"lon"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Longitude of the location in degrees."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"/developer-portal/pr-preview/pr-146/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#locations",children:"route location documentation"})," for more information on specifying locations."]}),"\n",(0,t.jsx)(n.h3,{id:"costing-parameters",children:"Costing parameters"}),"\n",(0,t.jsxs)(n.p,{children:["The isochrone service uses the ",(0,t.jsx)(n.code,{children:"auto"}),", ",(0,t.jsx)(n.code,{children:"bicycle"}),", ",(0,t.jsx)(n.code,{children:"pedestrian"}),", and ",(0,t.jsx)(n.code,{children:"multimodal"})," and all other costing models available in the Valhalla Turn-by-Turn service. Refer to the ",(0,t.jsx)(n.a,{href:"/developer-portal/pr-preview/pr-146/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-models",children:"route costing models"})," and ",(0,t.jsx)(n.a,{href:"/developer-portal/pr-preview/pr-146/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-options",children:"costing options"})," documentation for more on how to specify this input."]}),"\n",(0,t.jsx)(n.h3,{id:"other-request-parameters",children:"Other request parameters"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Parameter description"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"date_time"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["The local date and time at the location. ",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"type"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"0 - Current departure time."}),(0,t.jsx)("li",{children:"1 - Specified departure time."}),(0,t.jsxs)("li",{children:["2 - Specified arrival time. Note: This is not yet implemented for ",(0,t.jsx)(n.code,{children:"multimodal"}),"."]})]})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"value"})," - the date and time specified in ISO 8601 format (YYYY-MM-DDThh",":mm",') in the local time zone of departure or arrival. For example, "2016-07-03T08:06"']})]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"id"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["Name of the isochrone request. If ",(0,t.jsx)(n.code,{children:"id"})," is specified, the name is returned with the response."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"contours"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["A JSON array of contour objects with the time in minutes or distance in kilometers and color to use for each isochrone contour. You can specify up to four contours (by default).",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"time"})," - A floating point value specifying the time in minutes for the contour."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"distance"})," - A floating point value specifying the distance in kilometers for the contour."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"color"})," - The color for the output of the contour. Specify it as a Hex value, but without the ",(0,t.jsx)(n.code,{children:"#"}),", such as ",(0,t.jsx)(n.code,{children:'"color":"ff0000"'})," for red. If no color is specified, the isochrone service will assign a default color to the output."]})]}),"You can only specify ",(0,t.jsx)(n.strong,{children:"one metric per contour"}),", i.e. ",(0,t.jsx)(n.code,{children:"time"})," or ",(0,t.jsx)(n.code,{children:"distance"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"polygons"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["A Boolean value to determine whether to return geojson polygons or linestrings as the contours. The default is ",(0,t.jsx)(n.code,{children:"false"}),", which returns lines; when ",(0,t.jsx)(n.code,{children:"true"}),", polygons are returned. Note: When ",(0,t.jsx)(n.code,{children:"polygons"})," is ",(0,t.jsx)(n.code,{children:"true"}),", any contour that forms a ring is returned as a polygon."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"denoise"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["A floating point value from ",(0,t.jsx)(n.code,{children:"0"})," to ",(0,t.jsx)(n.code,{children:"1"})," (default of ",(0,t.jsx)(n.code,{children:"1"}),") which can be used to remove smaller contours. A value of ",(0,t.jsx)(n.code,{children:"1"})," will only return the largest contour for a given time value. A value of ",(0,t.jsx)(n.code,{children:"0.5"})," drops any contours that are less than half the area of the largest contour in the set of contours for that same time value."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"generalize"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"A floating point value in meters used as the tolerance for Douglas-Peuckergeneralization. Note: Generalization of contours can lead to self-intersections, as well as intersections of adjacent contours."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"show_locations"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"A boolean indicating whether the input locations should be returned as MultiPoint features: one feature for the exact input coordinates and one feature for the coordinates of the network node it snapped to. Default false."})]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"outputs-of-the-isochrone-service",children:"Outputs of the Isochrone service"}),"\n",(0,t.jsx)(n.p,{children:"In the service response, the isochrone contours are returned as GeoJSON, which can be integrated into mapping applications."}),"\n",(0,t.jsxs)(n.p,{children:["The contours are calculated using rasters and are returned as either polygon or line features, depending on your input setting for the ",(0,t.jsx)(n.code,{children:"polygons"})," parameter. If an isochrone request has been named using the optional ",(0,t.jsx)(n.code,{children:"&id="})," input, then the ",(0,t.jsx)(n.code,{children:"id"})," is returned as a name property for the feature collection within the GeoJSON response. A ",(0,t.jsx)(n.code,{children:"metric"})," attribute lets you know whether it's a ",(0,t.jsx)(n.code,{children:"distance"})," or ",(0,t.jsx)(n.code,{children:"time"})," contour. A warnings array may also be included. This array may contain warning objects informing about deprecated request parameters, clamped values etc. |"]}),"\n",(0,t.jsx)(n.p,{children:"See the HTTP return codes for more on messages you might receive from the service."}),"\n",(0,t.jsx)(n.h3,{id:"draw-isochrones-on-a-map",children:"Draw isochrones on a map"}),"\n",(0,t.jsx)(n.p,{children:"Most JavaScript-based GeoJSON renderers, including Leaflet, can use the isochrone styling information directly from the response. At present, you cannot control the opacity through the API."}),"\n",(0,t.jsx)(n.p,{children:"When making a map, drawing the isochrone contours as lines is more straightforward than polygons, and, therefore, currently is the default and recommended method. When deciding between the output as lines and polygons, consider your use case and the additional styling considerations involved with polygons. For example, fills should be rendered as semi-transparent over the other map layers so they are visible, although you may have more flexibility when using a vector-based map. In addition, polygons from multiple contour levels do not have overlapping areas cut out or removed. In other words, the outer contours include the areas of any inner contours, causing the colors and transparencies to blend when multiple contour polygons are drawn at the same time."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Isochrone example",src:o(40116).A+"",width:"1374",height:"932"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'<VALHALLA BASE URL>/isochrone?json={"costing":"pedestrian","costing_options":{"pedestrian":{"exclude_polygons":[],"use_ferry":1,"use_living_streets":0.5,"use_tracks":0,"service_penalty":15,"service_factor":1,"shortest":false,"use_hills":0.5,"walking_speed":5.1,"walkway_factor":1,"sidewalk_factor":1,"alley_factor":2,"driveway_factor":5,"step_penalty":0,"max_hiking_difficulty":1,"use_lit":0,"transit_start_end_max_distance":2145,"transit_transfer_max_distance":800}},"contours":[{"time":1},{"time":2},{"time":3}],"locations":[{"lon":35.208714008331306,"lat":31.78339608836721,"type":"break"}],"directions_options":{"units":"kilometers"},"id":"valhalla_isochrones_lonlat_35.208714008331306,31.78339608836721_range_3_interval_1"}`\n'})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Lookup 'Many To Many' Results in JSON Format"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",metastring:'title="Lookup Results in JSON Format"',children:'{\n  "id": "valhalla_isochrones_lonlat_35.208714008331306,31.78339608836721_range_3_interval_1",\n  "type": "FeatureCollection",\n  "features": [\n      {\n          "properties": {\n              "fill": "#bf4040",\n              "fillOpacity": 0.33,\n              "fill-opacity": 0.33,\n              "fillColor": "#bf4040",\n              "color": "#bf4040",\n              "contour": 3,\n              "opacity": 0.33,\n              "metric": "time"\n          },\n          "geometry": {\n              "coordinates": [\n                  [\n                      35.209714,\n                      31.784679\n                  ],\n                  [\n                      35.208714,\n                      31.785037\n                  ],\n                  [\n                      35.207714,\n                      31.784796\n                  ],\n                  [\n                      35.207385,\n                      31.783726\n                  ],\n                  [\n                      35.206662,\n                      31.783396\n                  ],\n                  [\n                      35.206649,\n                      31.782396\n                  ],\n                  [\n                      35.207868,\n                      31.781550\n                  ],\n                  [\n                      35.208714,\n                      31.781309\n                  ],\n                  [\n                      35.210372,\n                      31.782396\n                  ],\n                  [\n                      35.210588,\n                      31.783396\n                  ],\n                  [\n                      35.209714,\n                      31.784679\n                  ]\n              ],\n              "type": "LineString"\n          },\n          "type": "Feature"\n      },\n      {\n          "properties": {\n              "fill": "#bfaa40",\n              "fillOpacity": 0.33,\n              "fill-opacity": 0.33,\n              "fillColor": "#bfaa40",\n              "color": "#bfaa40",\n              "contour": 2,\n              "opacity": 0.33,\n              "metric": "time"\n          },\n          "geometry": {\n              "coordinates": [\n                  [\n                      35.208714,\n                      31.784654\n                  ],\n                  [\n                      35.207428,\n                      31.783396\n                  ],\n                  [\n                      35.208714,\n                      31.781960\n                  ],\n                  [\n                      35.209848,\n                      31.782396\n                  ],\n                  [\n                      35.209991,\n                      31.783396\n                  ],\n                  [\n                      35.208714,\n                      31.784654\n                  ]\n              ],\n              "type": "LineString"\n          },\n          "type": "Feature"\n      },\n      {\n          "properties": {\n              "fill": "#6abf40",\n              "fillOpacity": 0.33,\n              "fill-opacity": 0.33,\n              "fillColor": "#6abf40",\n              "color": "#6abf40",\n              "contour": 1,\n              "opacity": 0.33,\n              "metric": "time"\n          },\n          "geometry": {\n              "coordinates": [\n                  [\n                      35.208714,\n                      31.784150\n                  ],\n                  [\n                      35.208124,\n                      31.783396\n                  ],\n                  [\n                      35.208714,\n                      31.782647\n                  ],\n                  [\n                      35.209365,\n                      31.783396\n                  ],\n                  [\n                      35.208714,\n                      31.784150\n                  ]\n              ],\n              "type": "LineString"\n          },\n          "type": "Feature"\n      }\n  ]\n}\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},40116:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/isochrone-example-f1a402c47a3c97e124392dfeec1a85f7.png"},93129:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/isochrone-538e67996fa6fc62bd01da104f04fa2b.png"},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);