"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[4462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:3,id:"osm-valhalla-matrix",slug:"osm-valhalla-matrix",title:"Matrix API",tags:["osm","matrix","API","valhalla"]},i="Time-Distance Matrix service API reference",l={unversionedId:"MapColonies/openstreetmap/valhalla/osm-valhalla-matrix",id:"MapColonies/openstreetmap/valhalla/osm-valhalla-matrix",title:"Matrix API",description:"Valhalla's time-distance matrix service provides a quick computation of time and distance between a set of locations and returns them to you in the resulting matrix table.",source:"@site/docs/MapColonies/openstreetmap/valhalla/matrix.md",sourceDirName:"MapColonies/openstreetmap/valhalla",slug:"/MapColonies/openstreetmap/valhalla/osm-valhalla-matrix",permalink:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-matrix",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/valhalla/matrix.md",tags:[{label:"osm",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/osm"},{label:"matrix",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/matrix"},{label:"API",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/api"},{label:"valhalla",permalink:"/developer-portal/pr-preview/pr-88/docs/tags/valhalla"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"osm-valhalla-matrix",slug:"osm-valhalla-matrix",title:"Matrix API",tags:["osm","matrix","API","valhalla"]},sidebar:"docSidebar",previous:{title:"Optimized Route API",permalink:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-optimized-route"},next:{title:"Isochrone API",permalink:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone"}},s={},m=[{value:"Matrix service",id:"matrix-service",level:2},{value:"Inputs of the matrix service",id:"inputs-of-the-matrix-service",level:2},{value:"Source and target parameters",id:"source-and-target-parameters",level:3},{value:"Costing parameters",id:"costing-parameters",level:3},{value:"Other request options",id:"other-request-options",level:3},{value:"Time-dependent matrices",id:"time-dependent-matrices",level:3},{value:"Outputs of the matrix service",id:"outputs-of-the-matrix-service",level:2},{value:"Examples",id:"examples",level:2},{value:"&#39;One To Many&#39; request:",id:"one-to-many-request",level:4},{value:"&#39;Many To Many&#39; request:",id:"many-to-many-request",level:4}],p={toc:m},d="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"time-distance-matrix-service-api-reference"},"Time-Distance Matrix service API reference"),(0,r.kt)("p",null,"Valhalla's time-distance matrix service provides a quick computation of time and distance between a set of locations and returns them to you in the resulting matrix table."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Matrix one to many example",src:n(63046).Z,width:"1217",height:"660"})),(0,r.kt)("h2",{id:"matrix-service"},"Matrix service"),(0,r.kt)("p",null,"The time distance matrix service takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"sources")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"targets")," to list locations. This allows you to set the source (origin) locations separately from the target (destination) locations. The set of origins may be disjoint (not overlapping) with the set of destinations. In other words, the target locations do not have to include any locations from source locations. The time-distance matrix can return a row matrix, a column matrix, or a general matrix of computed time and distance, depending on your input for the sources and targets parameters. The general case is a row ordered matrix with the time and distance from each source location to each target location. A row vector is considered a ",(0,r.kt)("em",{parentName:"p"},"one_to_many")," time-distance matrix where there is one source location and multiple target locations. The time and distance from the source location to all target locations is returned. A column matrix represents a ",(0,r.kt)("em",{parentName:"p"},"many_to_one")," time-distance matrix where there are many sources and one target. Another special case is when the source location list is the same as the target location list. Here, a diagonal (square matrix with ","[0,0.00]"," on the diagonal elements) matrix is returned. The is special case is often used as the input to optimized routing problems."),(0,r.kt)("h2",{id:"inputs-of-the-matrix-service"},"Inputs of the matrix service"),(0,r.kt)("p",null,"The matrix request run locally takes the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8002/sources_to_targets?json={}"),", where the JSON inputs inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," includes at least one location for both sources and for targets as well as the route costing type and options for the route costing model."),(0,r.kt)("p",null,"For example, while at your office, you want to know the times and distances to walk to several restaurants where you could have dinner, as well as the times and distances from each restaurant to the train station for your commute home. This will help you determine where to eat. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"one-to-many using /sources_to_targets?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"sources":[{"lat":40.744014,"lon":-73.990508}],"targets":[{"lat":40.744014,"lon":-73.990508},{"lat":40.739735,"lon":-73.979713},{"lat":40.752522,"lon":-73.985015},{"lat":40.750117,"lon":-73.983704},{"lat":40.750552,"lon":-73.993519}],"costing":"pedestrian"}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"many-to-one using /sources_to_targets?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"sources":[{"lat":40.744014,"lon":-73.990508},{"lat":40.739735,"lon":-73.979713},{"lat":40.752522,"lon":-73.985015},{"lat":40.750117,"lon":-73.983704},{"lat":40.750552,"lon":-73.993519}],"targets":[{"lat":40.750552,"lon":-73.993519}],"costing":"pedestrian"}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"many-to-many using /sources_to_targets?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"sources":[{"lat":40.744014,"lon":-73.990508},{"lat":40.739735,"lon":-73.979713},{"lat":40.752522,"lon":-73.985015},{"lat":40.750117,"lon":-73.983704},{"lat":40.750552,"lon":-73.993519}],"targets":[{"lat":40.744014,"lon":-73.990508},{"lat":40.739735,"lon":-73.979713},{"lat":40.752522,"lon":-73.985015},{"lat":40.750117,"lon":-73.983704},{"lat":40.750552,"lon":-73.993519}],"costing":"pedestrian"}\n')),(0,r.kt)("h3",{id:"source-and-target-parameters"},"Source and target parameters"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"sources_to_targets")," action, you specify sources and targets as ordered lists of one or more locations within a JSON array, depending on the type of matrix result you are expecting."),(0,r.kt)("p",null,"A source and target must include a latitude and longitude in decimal degrees. The coordinates can come from many input sources, such as a GPS location, a point or a click on a map, a geocoding service, and so on."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Source and target parameters description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Source and target parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"lat")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Latitude of the source/target in degrees.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"lon")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Longitude of the source/target in degrees.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"date_time")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Expected date/time for the user to be at the location using the ISO 8601 format (YYYY-MM-DDThh:mm) in the local time zone of departure or arrival. ",(0,r.kt)("inlineCode",{parentName:"td"},"date_time")," as location input offers more granularity over setting time than the global ",(0,r.kt)("inlineCode",{parentName:"td"},"date_time")," object (see below)."))))),(0,r.kt)("p",null,"You can refer to the ",(0,r.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#locations"},"route location documentation")," for more information on specifying locations.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"date_time")," strings behave differently for ",(0,r.kt)("inlineCode",{parentName:"p"},"sources_to_targets")," than for ",(0,r.kt)("inlineCode",{parentName:"p"},"route"),". If set on the ",(0,r.kt)("inlineCode",{parentName:"p"},"sources")," ",(0,r.kt)("strong",{parentName:"p"},"and")," there's more ",(0,r.kt)("inlineCode",{parentName:"p"},"targets")," than ",(0,r.kt)("inlineCode",{parentName:"p"},"sources"),', it\'ll behave like a "Specified departure time" on the ',(0,r.kt)("inlineCode",{parentName:"p"},"sources"),". If set on the ",(0,r.kt)("inlineCode",{parentName:"p"},"targets")," ",(0,r.kt)("strong",{parentName:"p"},"and")," there's less ",(0,r.kt)("inlineCode",{parentName:"p"},"targets")," than ",(0,r.kt)("inlineCode",{parentName:"p"},"sources"),', it\'ll behave like a "Specified arrival time" on the ',(0,r.kt)("inlineCode",{parentName:"p"},"targets"),"."),(0,r.kt)("p",null,"Also, using ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," in addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"lat")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lon")," within the location parameter has no meaning for matrices."),(0,r.kt)("h3",{id:"costing-parameters"},"Costing parameters"),(0,r.kt)("p",null,"The Time-Distance Matrix service uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"auto"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bicycle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pedestrian")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bikeshare")," and other costing models available in the route service. Exception: ",(0,r.kt)("strong",{parentName:"p"},"multimodal costing is not supported")," for the time-distance matrix service at this time.  Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-models"},"route costing models")," and ",(0,r.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-options"},"costing options")," documentation for more on how to specify this input."),(0,r.kt)("h3",{id:"other-request-options"},"Other request options"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Options with description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Options"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name your matrix request. If ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," is specified, the naming will be sent thru to the response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"matrix_locations")),(0,r.kt)("td",{parentName:"tr",align:"left"},'For one-to-many or many-to-one requests this specifies the minimum number of locations that satisfy the request. However, when specified, this option allows a partial result to be returned. This is basically equivalent to "find the closest/best ',(0,r.kt)("inlineCode",{parentName:"td"},"matrix_locations"),' locations out of the full location set".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"date_time")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is the local date and time at the location.",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"type"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"0 - Current departure time."),(0,r.kt)("li",null,"1 - Specified departure time"),(0,r.kt)("li",null,"2 - Specified arrival time."))),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"value"),' - the date and time is specified in ISO 8601 format (YYYY-MM-DDThh:mm) in the local time zone of departure or arrival.  For example "2016-07-03T08:06"')),(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"verbose")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," it will output a flat list of objects for ",(0,r.kt)("inlineCode",{parentName:"td"},"distances")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"durations")," explicitly specifying the source & target indices. If ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," will return more compact, nested row-major ",(0,r.kt)("inlineCode",{parentName:"td"},"distances")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"durations")," arrays and not echo ",(0,r.kt)("inlineCode",{parentName:"td"},"sources")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"targets"),". Default ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"."))))),(0,r.kt)("h3",{id:"time-dependent-matrices"},"Time-dependent matrices"),(0,r.kt)("p",null,"Most control can be achieved when setting a ",(0,r.kt)("inlineCode",{parentName:"p"},"date_time")," string on each source or target. When setting the global ",(0,r.kt)("inlineCode",{parentName:"p"},"date_time")," object as a shortcut instead, Valhalla will translate that to setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"date_time.value")," on all source locations when ",(0,r.kt)("inlineCode",{parentName:"p"},"date_time.type = 0/1")," and on all target locations when ",(0,r.kt)("inlineCode",{parentName:"p"},"date_time.type = 2"),"."),(0,r.kt)("p",null,"However, there are important limitations of the ",(0,r.kt)("inlineCode",{parentName:"p"},"/sources_to_targets")," service's time awareness. Due to algorithmic complexity, we disallow time-dependence for certain combinations of ",(0,r.kt)("inlineCode",{parentName:"p"},"date_time")," on locations, if"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"date_time.type = 0/1")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"date_time")," on any source, when there's more sources than targets"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"date_time.type = 2")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"date_time")," on any target, when there's more or equal amount of targets than/as sources")),(0,r.kt)("h2",{id:"outputs-of-the-matrix-service"},"Outputs of the matrix service"),(0,r.kt)("p",null,"If a matrix request has been named using the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"&id=")," input, then the name will be returned as a string ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,r.kt)("p",null,"These are the results of a request to the Time-Distance Matrix service."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Item description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sources_to_targets")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns an array of time and distance between the sources and the targets. The array is ",(0,r.kt)("strong",{parentName:"td"},"row-ordered"),". This means that the time and distance from the first location to all others forms the first row of the array, followed by the time and distance from the second source location to all target locations, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"distance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The computed distance between each set of points. Distance will always be 0.00 for the first element of the time-distance array for ",(0,r.kt)("inlineCode",{parentName:"td"},"one_to_many"),", the last element in a ",(0,r.kt)("inlineCode",{parentName:"td"},"many_to_one"),", and the first and last elements of a ",(0,r.kt)("inlineCode",{parentName:"td"},"many_to_many"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The computed time between each set of points. Time will always be 0 for the first element of the time-distance array for ",(0,r.kt)("inlineCode",{parentName:"td"},"one_to_many"),", the last element in a ",(0,r.kt)("inlineCode",{parentName:"td"},"many_to_one"),", and the first and last elements of a ",(0,r.kt)("inlineCode",{parentName:"td"},"many_to_many"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to_index")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The destination index into the locations array.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"from_index")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The origin index into the locations array.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"date_time")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(optional) If the date_time was valid for an origin, ",(0,r.kt)("inlineCode",{parentName:"td"},"date_time")," will return the local time at the destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"locations")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The specified array of lat/lngs from the input request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"units")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Distance units for output. Allowable unit types are mi (miles) and km (kilometers). If no unit type is specified, the units default to kilometers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"warnings")," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This array may contain warning objects informing about deprecated request parameters, clamped values etc."))))),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-88/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#http-status-codes-and-conditions"},"HTTP return codes")," for more on messages you might receive from the service."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"one-to-many-request"},"'One To Many' request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'<VALHALLA BASE URL>/sources_to_targets?json={"sources":[{"lon":-73.995323,"lat":40.738804}],"targets":[{"lon":-73.978844,"lat":40.767673},{"lon":-73.948112,"lat":40.742577},{"lon":-73.979706,"lat":40.729568}],"costing":"auto","units":"mi"}`\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Lookup 'One To Many' Results in JSON Format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Lookup Results in JSON Format"',title:'"Lookup',Results:!0,in:!0,JSON:!0,'Format"':!0},'{\n  "algorithm": "costmatrix",\n  "units": "miles",\n  "sources": [\n      [\n          {\n              "lon": -73.995323,\n              "lat": 40.738804\n          }\n      ]\n  ],\n  "targets": [\n      [\n          {\n              "lon": -73.978844,\n              "lat": 40.767673\n          },\n          {\n              "lon": -73.948112,\n              "lat": 40.742577\n          },\n          {\n              "lon": -73.979706,\n              "lat": 40.729568\n          }\n      ]\n  ],\n  "sources_to_targets": [\n      [\n          {\n              "distance": 4.509,\n              "time": 831,\n              "to_index": 0,\n              "from_index": 0\n          },\n          {\n              "distance": 3.886,\n              "time": 581,\n              "to_index": 1,\n              "from_index": 0\n          },\n          {\n              "distance": 1.351,\n              "time": 246,\n              "to_index": 2,\n              "from_index": 0\n          }\n      ]\n  ]\n}\n'))),(0,r.kt)("h4",{id:"many-to-many-request"},"'Many To Many' request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'<VALHALLA BASE URL>/sources_to_targets?json={"sources":[{"lon":-73.995323,"lat":40.738804},{"lon":-73.978844,"lat":40.767673},{"lon":-73.948112,"lat":40.742577},{"lon":-73.979706,"lat":40.729568}],"targets":[{"lon":-73.995323,"lat":40.738804},{"lon":-73.978844,"lat":40.767673},{"lon":-73.948112,"lat":40.742577},{"lon":-73.979706,"lat":40.729568}],"costing":"auto","units":"mi"}`\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Lookup 'Many To Many' Results in JSON Format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Lookup Results in JSON Format"',title:'"Lookup',Results:!0,in:!0,JSON:!0,'Format"':!0},'{\n  "algorithm": "costmatrix",\n  "units": "miles",\n  "sources": [\n      [\n          {\n              "lon": -73.995323,\n              "lat": 40.738804\n          },\n          {\n              "lon": -73.978844,\n              "lat": 40.767673\n          },\n          {\n              "lon": -73.948112,\n              "lat": 40.742577\n          },\n          {\n              "lon": -73.979706,\n              "lat": 40.729568\n          }\n      ]\n  ],\n  "targets": [\n      [\n          {\n              "lon": -73.995323,\n              "lat": 40.738804\n          },\n          {\n              "lon": -73.978844,\n              "lat": 40.767673\n          },\n          {\n              "lon": -73.948112,\n              "lat": 40.742577\n          },\n          {\n              "lon": -73.979706,\n              "lat": 40.729568\n          }\n      ]\n  ],\n  "sources_to_targets": [\n      [\n          {\n              "distance": 0.000,\n              "time": 0,\n              "to_index": 0,\n              "from_index": 0\n          },\n          {\n              "distance": 4.509,\n              "time": 831,\n              "to_index": 1,\n              "from_index": 0\n          },\n          {\n              "distance": 3.886,\n              "time": 581,\n              "to_index": 2,\n              "from_index": 0\n          },\n          {\n              "distance": 1.351,\n              "time": 246,\n              "to_index": 3,\n              "from_index": 0\n          }\n      ],\n      [\n          {\n              "distance": 3.081,\n              "time": 513,\n              "to_index": 0,\n              "from_index": 1\n          },\n          {\n              "distance": 0.000,\n              "time": 0,\n              "to_index": 1,\n              "from_index": 1\n          },\n          {\n              "distance": 3.345,\n              "time": 422,\n              "to_index": 2,\n              "from_index": 1\n          },\n          {\n              "distance": 3.795,\n              "time": 587,\n              "to_index": 3,\n              "from_index": 1\n          }\n      ],\n      [\n          {\n              "distance": 3.572,\n              "time": 514,\n              "to_index": 0,\n              "from_index": 2\n          },\n          {\n              "distance": 4.498,\n              "time": 666,\n              "to_index": 1,\n              "from_index": 2\n          },\n          {\n              "distance": 0.000,\n              "time": 0,\n              "to_index": 2,\n              "from_index": 2\n          },\n          {\n              "distance": 3.467,\n              "time": 487,\n              "to_index": 3,\n              "from_index": 2\n          }\n      ],\n      [\n          {\n              "distance": 1.338,\n              "time": 252,\n              "to_index": 0,\n              "from_index": 3\n          },\n          {\n              "distance": 4.593,\n              "time": 820,\n              "to_index": 1,\n              "from_index": 3\n          },\n          {\n              "distance": 3.087,\n              "time": 436,\n              "to_index": 2,\n              "from_index": 3\n          },\n          {\n              "distance": 0.000,\n              "time": 0,\n              "to_index": 3,\n              "from_index": 3\n          }\n      ]\n    ]\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Matrix many-to-many example",src:n(47282).Z,width:"1206",height:"651"})))}c.isMDXComponent=!0},47282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matrix-many-to-many-98d5eecf77961ead0158dc8f4d3e13d8.png"},63046:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matrix-one-to-many-6ff6ab697327a441a49dcd7b0d06e928.png"}}]);