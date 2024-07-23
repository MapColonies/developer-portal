"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[2497],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(a),h=r,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},32155:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:7,id:"osm-valhalla-expansion",slug:"osm-valhalla-expansion",title:"Expansion API",tags:["osm","expansion","API","valhalla"]},i="Expansion service API reference",p={unversionedId:"MapColonies/openstreetmap/valhalla/osm-valhalla-expansion",id:"MapColonies/openstreetmap/valhalla/osm-valhalla-expansion",title:"Expansion API",description:"Routing algorithms find the best path by expanding their search from start nodes/edges across the routing network until the destination is reached (unidirectional) or both search branches meet (bidirectional).",source:"@site/docs/MapColonies/openstreetmap/valhalla/expansion.md",sourceDirName:"MapColonies/openstreetmap/valhalla",slug:"/MapColonies/openstreetmap/valhalla/osm-valhalla-expansion",permalink:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-expansion",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/valhalla/expansion.md",tags:[{label:"osm",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/osm"},{label:"expansion",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/expansion"},{label:"API",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/api"},{label:"valhalla",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/valhalla"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"osm-valhalla-expansion",slug:"osm-valhalla-expansion",title:"Expansion API",tags:["osm","expansion","API","valhalla"]},sidebar:"docSidebar",previous:{title:"Isochrone API",permalink:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone"},next:{title:"Locate API",permalink:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-locate"}},s={},l=[{value:"Inputs of the Expansion service",id:"inputs-of-the-expansion-service",level:2},{value:"Outputs of the Expansion service",id:"outputs-of-the-expansion-service",level:2}],d={toc:l},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"expansion-service-api-reference"},"Expansion service API reference"),(0,r.kt)("p",null,"Routing algorithms find the best path by ",(0,r.kt)("em",{parentName:"p"},"expanding")," their search from start nodes/edges across the routing network until the destination is reached (unidirectional) or both search branches meet (bidirectional)."),(0,r.kt)("p",null,"The expansion service wraps the ",(0,r.kt)("inlineCode",{parentName:"p"},"route"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isochrone")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sources_to_targets")," services and returns a GeoJSON with all network edges (way segments) the underlying routing algorithm visited during the expansion, with relevant properties for each edge (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"duration")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"distance"),"). A top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"algorithm")," propertry informs about the used algorithm: unidirectional & bidirectional A* (for ",(0,r.kt)("inlineCode",{parentName:"p"},"route"),") and unidirectional Dijkstra (for ",(0,r.kt)("inlineCode",{parentName:"p"},"isochrone"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),", for even moderately long routes (or isochrones or few sources/targets) the ",(0,r.kt)("inlineCode",{parentName:"p"},"/expansion")," action can produce gigantic GeoJSON responses of 100s of MB."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A 11 km isochrone expansion result in Vienna, Austria",src:a(56703).Z,width:"732",height:"717"})),(0,r.kt)("h2",{id:"inputs-of-the-expansion-service"},"Inputs of the Expansion service"),(0,r.kt)("p",null,"Since this service wraps other services, the request format mostly follows the ones of the ",(0,r.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#inputs-of-a-route"},"route"),", ",(0,r.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone#inputs-of-the-isochrone-service"},"isochrone")," and ",(0,r.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-matrix#inputs-of-the-matrix-service"},"matrix"),". Additionally, it accepts the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")," (required)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The service whose expansion should be tracked. Currently one of ",(0,r.kt)("inlineCode",{parentName:"td"},"route"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"isochrone")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"sources_to_targets"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"skip_opposites")," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," the output won't contain an edge's opposing edge. Opposing edges can be thought of as both directions of one road segment. Of the two, we discard the directional edge with higher cost and keep the one with less cost. Default false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expansion_properties")," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},'A JSON array of strings of the GeoJSON property keys you\'d like to have in the response. One or multiple of "durations", "distances", "costs", "edge_ids", "statuses". ',(0,r.kt)("strong",{parentName:"td"},"Note"),", that each additional property will increase the output size by minimum ~ 25%. By default an empty ",(0,r.kt)("inlineCode",{parentName:"td"},"properties")," object is returned.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"expansion_properties")," choices are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"distances")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the accumulated distance in meters for each edge in order of graph traversal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"durations")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the accumulated duration in seconds for each edge in order of graph traversal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"costs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the accumulated cost for each edge in order of graph traversal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"edge_ids")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the internal edge IDs for each edge in order of graph traversal. Mostly interesting for debugging.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"statuses")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Returns the edge states for each edge in order of graph traversal. Mostly interesting for debugging. Can be one of "r" (reached), "s" (settled), "c" (connected).')))),(0,r.kt)("p",null,"An example request is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"expansion_properties":["distances", "durations", "costs"],"contours":[{"time":1.0}],"locations":[{"lon":0.00026949361342338066,"lat":-0.00017966240895360996}],"costing":"auto","action":"isochrone"}\n')),(0,r.kt)("h2",{id:"outputs-of-the-expansion-service"},"Outputs of the Expansion service"),(0,r.kt)("p",null,"In the service response, the expanded way segments are returned as ",(0,r.kt)("a",{parentName:"p",href:"http://geojson.org/"},"GeoJSON"),". The geometry is a single ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiLineString")," with each ",(0,r.kt)("inlineCode",{parentName:"p"},"LineString")," representing one way segment (edge). Due to the verbosity of the GeoJSON format, single geometry features would produce prohibitively huge responses. However, that also means that the ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," contain arrays of the tracked attributes, where the indices are correlating to the ",(0,r.kt)("inlineCode",{parentName:"p"},"coordinates")," array, i.e. the 3rd element in a ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," array will correspond to the 3rd ",(0,r.kt)("inlineCode",{parentName:"p"},"LineString")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiLineString")," geometry."),(0,r.kt)("p",null,"The output will only contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," which were specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"expansion_properties")," request array. If the parameter was omitted in the request, the output will contain an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," object."),(0,r.kt)("p",null,"An example response for ",(0,r.kt)("inlineCode",{parentName:"p"},'"action": "isochrone"')," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"properties":{"algorithm":"unidirectional_dijkstra"},"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"MultiLineString","coordinates":[[[0.00027,-0.00017],[0.00027,0.0]],[[0.00027,-0.00017],[0.00027,-0.00035]],[[0.00027,-0.00035],[0.00027,-0.00017]],[[0.00027,0.0],[0.00027,-0.00017]],[[0.00027,-0.00017],[0.00053,-0.00017]],[[0.00027,-0.00017],[0.0,-0.00017]],[[0.0,-0.00017],[0.00027,-0.00017]],[[0.00053,-0.00017],[0.0008,-0.00017]],[[0.0008,-0.00017],[0.00053,-0.00017]],[[0.00053,-0.00017],[0.00027,-0.00017]],[[0.00053,-0.00017],[0.0008,0.0]]]},"properties":{"distances":[20,20,40,40,30,30,60,60,90,120,80],"durations":[0,0,29,29,1,1,30,2,31,33,5],"costs":[0,0,1,1,1,1,2,2,3,4,11]}}]}\n')))}m.isMDXComponent=!0},56703:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/expansion_dijkstra-be9f24506cf2e9922b2d0bb63b82e798.png"}}]);