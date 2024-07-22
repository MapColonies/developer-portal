"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2,id:"osm-nominatim-reverse-geocoding",slug:"Osm-Reverse-Search-API",title:"Reverse GeoCoding API",tags:["osm","search","API","reverse","nominatim"]},l="Reverse Geocoding",i={unversionedId:"MapColonies/openstreetmap/nominatim/osm-nominatim-reverse-geocoding",id:"MapColonies/openstreetmap/nominatim/osm-nominatim-reverse-geocoding",title:"Reverse GeoCoding API",description:"Reverse geocoding generates an address from a latitude and longitude.",source:"@site/docs/MapColonies/openstreetmap/nominatim/reverse.md",sourceDirName:"MapColonies/openstreetmap/nominatim",slug:"/MapColonies/openstreetmap/nominatim/Osm-Reverse-Search-API",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/openstreetmap/nominatim/Osm-Reverse-Search-API",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/nominatim/reverse.md",tags:[{label:"osm",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/osm"},{label:"search",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/search"},{label:"API",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/api"},{label:"reverse",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/reverse"},{label:"nominatim",permalink:"/developer-portal/pr-preview/pr-78/docs/tags/nominatim"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"osm-nominatim-reverse-geocoding",slug:"Osm-Reverse-Search-API",title:"Reverse GeoCoding API",tags:["osm","search","API","reverse","nominatim"]},sidebar:"docSidebar",previous:{title:"Search API",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/openstreetmap/nominatim/Osm-Search-API"},next:{title:"Address Lookup API",permalink:"/developer-portal/pr-preview/pr-78/docs/MapColonies/openstreetmap/nominatim/Osm-AddressLookup-API"}},s={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Output format",id:"output-format",level:3},{value:"Output details",id:"output-details",level:3},{value:"Language of results",id:"language-of-results",level:3},{value:"Result limitation",id:"result-limitation",level:3},{value:"Polygon output",id:"polygon-output",level:3},{value:"Other",id:"other",level:3},{value:"Examples",id:"examples",level:2},{value:"Example with <code>format=jsonv2</code>",id:"example-with-formatjsonv2",level:5},{value:"Example with <code>format=geojson</code>",id:"example-with-formatgeojson",level:5},{value:"Example with <code>format=geocodejson</code>",id:"example-with-formatgeocodejson",level:5}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reverse-geocoding"},"Reverse Geocoding"),(0,r.kt)("p",null,"Reverse geocoding generates an address from a latitude and longitude."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The reverse geocoding API does not exactly compute the address for the\ncoordinate it receives. It works by finding the closest suitable OSM object\nand returning its address information. This may occasionally lead to\nunexpected results."),(0,r.kt)("p",null,"First of all, Nominatim only includes OSM objects in\nits index that are suitable for searching. Small, unnamed paths for example\nare missing from the database and can therefore not be used for reverse\ngeocoding either."),(0,r.kt)("p",null,"The other issue to be aware of is that the closest OSM object may not always\nhave a similar enough address to the coordinate you were requesting. For\nexample, in dense city areas it may belong to a completely different street."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"The main format of the reverse API is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<VECTOR-NOMINATIM-SERVICE_URL>/reverse?lat=<value>&lon=<value>&<params>\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"lat")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lon")," are latitude and longitude of a coordinate in WGS84\nprojection. The API returns exactly one result or an error when the coordinate\nis in an area with no OSM data coverage.\nAdditional parameters are accepted as listed below."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The reverse API used to allow address lookup for a single OSM object by\nits OSM id. This use is now deprecated. Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/MapColonies/openstreetmap/nominatim/Osm-AddressLookup-API"},"Address Lookup API"),"\ninstead.")),(0,r.kt)("h3",{id:"output-format"},"Output format"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format=[xml|json|jsonv2|geojson|geocodejson]"))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/MapColonies/openstreetmap/nominatim/Osm-output-API"},"Place Output Formats")," for details on each format. (Default: xml)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"json_callback=<string>"))),(0,r.kt)("p",null,"Wrap JSON output in a callback function (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSONP"},"JSONP"),") i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"<string>(<json>)"),".\nOnly has an effect for JSON output formats."),(0,r.kt)("h3",{id:"output-details"},"Output details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addressdetails=[0|1]"))),(0,r.kt)("p",null,"Include a breakdown of the address into elements. (Default: 1)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extratags=[0|1]"))),(0,r.kt)("p",null,"Include additional information in the result if available,\ne.g. wikipedia link, opening hours. (Default: 0)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namedetails=[0|1]"))),(0,r.kt)("p",null,"Include a list of alternative names in the results. These may include\nlanguage variants, references, operator and brand. (Default: 0)"),(0,r.kt)("h3",{id:"language-of-results"},"Language of results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accept-language=<browser language string>"))),(0,r.kt)("p",null,'Preferred language order for showing search results, overrides the value\nspecified in the "Accept-Language" HTTP header.\nEither use a standard RFC2616 accept-language string or a simple\ncomma-separated list of language codes.'),(0,r.kt)("h3",{id:"result-limitation"},"Result limitation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zoom=[0-18]"))),(0,r.kt)("p",null,"Level of detail required for the address. Default: 18. This is a number that\ncorresponds roughly to the zoom level used in XYZ tile sources in frameworks\nlike Leaflet.js, Openlayers etc (Please take not that WGS84 zoom level is slightly different).\nIn terms of address details the zoom levels are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"zoom"),(0,r.kt)("th",{parentName:"tr",align:null},"address detail"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"country")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"county")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"suburb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"major streets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"major and minor streets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"building")))),(0,r.kt)("h3",{id:"polygon-output"},"Polygon output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"polygon_geojson=1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"polygon_kml=1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"polygon_svg=1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"polygon_text=1"))),(0,r.kt)("p",null,"Output geometry of results as a GeoJSON, KML, SVG or WKT. Only one of these\noptions can be used at a time. (Default: 0)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"polygon_threshold=0.0"))),(0,r.kt)("p",null,"Return a simplified version of the output geometry. The parameter is the\ntolerance in degrees with which the geometry may differ from the original\ngeometry. Topology is preserved in the result. (Default: 0.0)"),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"email=<valid email address>"))),(0,r.kt)("p",null,"If you are making a large number of requests, please include an appropriate email\naddress to identify your requests (only relevant when using the service in the internet)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"debug=[0|1]"))),(0,r.kt)("p",null,'Output assorted developer debug information. Data on internals of Nominatim\'s\n"Search Loop" logic, and SQL queries. The output is (rough) HTML format.\nThis overrides the specified machine readable format. (Default: 0)'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/reverse.html?format=xml&lat=31.770454150126838&lon=35.20109340043129&zoom=18&addressdetails=1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Response in XML Format"',title:'"Response',in:!0,XML:!0,'Format"':!0},'  <reversegeocode timestamp="Mon, 23 Jan 23 12:44:51 +0000"\n    attribution="Data \xa9 OpenStreetMap contributors, ODbL 1.0. http://www.openstreetmap.org/copyright"\n    querystring="format=xml&lat=31.770454150126838&lon=35.20109340043129&zoom=18&addressdetails=1">\n    <result place_id="19306678" osm_type="node" osm_id="2260660571" lat="31.7704127" lon="35.2010157"\n      boundingbox="31.7703627,31.7704627,35.2009657,35.2010657" place_rank="30" address_rank="30">18,\n      Nave Shaanan, Nayot, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9218812, Israel</result>\n    <addressparts>\n      <house_number>18</house_number>\n      <road>Nave Shaanan</road>\n      <suburb>Nayot</suburb>\n      <city>Jerusalem</city>\n      <state_district>Jerusalem Subdistrict</state_district>\n      <state>Jerusalem District</state>\n      <ISO3166-2-lvl4>IL-JM</ISO3166-2-lvl4>\n      <postcode>9218812</postcode>\n      <country>Israel</country>\n      <country_code>il</country_code>\n    </addressparts>\n  </reversegeocode>\n')),(0,r.kt)("h5",{id:"example-with-formatjsonv2"},"Example with ",(0,r.kt)("inlineCode",{parentName:"h5"},"format=jsonv2")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/reverse.html?format=jsonv2&lat=32.06906022673506&lon=34.778194163532476")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response in jsonv2 Format"',title:'"Response',in:!0,jsonv2:!0,'Format"':!0},'{\n    "place_id": 143009880,\n    "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n    "osm_type": "way",\n    "osm_id": 149962182,\n    "lat": "32.0691986",\n    "lon": "34.77800567065701",\n    "place_rank": 30,\n    "category": "building",\n    "type": "apartments",\n    "importance": 0.00000999999999995449,\n    "addresstype": "building",\n    "name": null,\n    "display_name": "109, Rothschild Boulevard, Tel Aviv, Lev Tel Aviv, Tel Aviv-Yafo, Tel Aviv Subdistrict, Tel Aviv District, 6527401, Israel",\n    "address": {\n        "house_number": "109",\n        "road": "Rothschild Boulevard",\n        "residential": "Tel Aviv",\n        "suburb": "Lev Tel Aviv",\n        "city": "Tel Aviv-Yafo",\n        "state_district": "Tel Aviv Subdistrict",\n        "state": "Tel Aviv District",\n        "ISO3166-2-lvl4": "IL-TA",\n        "postcode": "6527401",\n        "country": "Israel",\n        "country_code": "il"\n    },\n    "boundingbox": [\n        "32.0690938",\n        "32.0693033",\n        "34.7778663",\n        "34.778145"\n    ]\n}\n')),(0,r.kt)("h5",{id:"example-with-formatgeojson"},"Example with ",(0,r.kt)("inlineCode",{parentName:"h5"},"format=geojson")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/reverse.html?format=geojson&lat=31.258847882906082&lon=34.801318450147534"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response in GeoJSON Format"',title:'"Response',in:!0,GeoJSON:!0,'Format"':!0},'{\n    "type": "FeatureCollection",\n    "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n    "features": [\n        {\n            "type": "Feature",\n            "properties": {\n                "place_id": 161967817,\n                "osm_type": "way",\n                "osm_id": 219455608,\n                "place_rank": 30,\n                "category": "building",\n                "type": "yes",\n                "importance": 0.00000999999999995449,\n                "addresstype": "building",\n                "name": "\u05de\u05d7\u05dc\u05e7\u05d5\u05ea \u05d9\u05dc\u05d3\u05d9\u05dd \u05d0-\u05d3",\n                "display_name": "\u05de\u05d7\u05dc\u05e7\u05d5\u05ea \u05d9\u05dc\u05d3\u05d9\u05dd \u05d0-\u05d3, \u05d0\u05e9\u05e4\u05d5\u05d6 \u05d9\u05d5\u05dd \u05db\u05d9\u05e8\u05d5\u05e8\u05d2\u05d9, Be\'er Sheva Innovation District, Gimel, Beer Sheva, Beersheba Subdistrict, South District, 8452566, Israel",\n                "address": {\n                    "building": "\u05de\u05d7\u05dc\u05e7\u05d5\u05ea \u05d9\u05dc\u05d3\u05d9\u05dd \u05d0-\u05d3",\n                    "road": "\u05d0\u05e9\u05e4\u05d5\u05d6 \u05d9\u05d5\u05dd \u05db\u05d9\u05e8\u05d5\u05e8\u05d2\u05d9",\n                    "commercial": "Be\'er Sheva Innovation District",\n                    "suburb": "Gimel",\n                    "city": "Beer Sheva",\n                    "state_district": "Beersheba Subdistrict",\n                    "state": "South District",\n                    "ISO3166-2-lvl4": "IL-D",\n                    "postcode": "8452566",\n                    "country": "Israel",\n                    "country_code": "il"\n                }\n            },\n            "bbox": [\n                34.8012294,\n                31.2585054,\n                34.8016819,\n                31.2589849\n            ],\n            "geometry": {\n                "type": "Point",\n                "coordinates": [\n                    34.801452912210586,\n                    31.2586442\n                ]\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h5",{id:"example-with-formatgeocodejson"},"Example with ",(0,r.kt)("inlineCode",{parentName:"h5"},"format=geocodejson")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/reverse.html?format=geocodejson&lat=31.77671359535347&lon=35.234473935516405")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response in GeoCodeJSON Format"',title:'"Response',in:!0,GeoCodeJSON:!0,'Format"':!0},'{\n  "type": "FeatureCollection",\n  "geocoding": {\n      "version": "0.1.0",\n      "attribution": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n      "licence": "ODbL",\n      "query": "31.776713595353,35.234473935516"\n  },\n  "features": [\n    {\n      "type": "Feature",\n      "properties": {\n        "geocoding": {\n          "place_id": 267010108,\n          "osm_type": "way",\n          "osm_id": 817206833,\n          "type": "house",\n          "accuracy": 0,\n          "label": "Western Wall, Wilson\'s Arch, Jewish Quarter, Old City, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9511208, Israel",\n          "name": "Western Wall",\n          "country": "Israel",\n          "postcode": "9511208",\n          "state": "Jerusalem District",\n          "county": "Jerusalem Subdistrict",\n          "city": "Jerusalem",\n          "district": "Old City",\n          "locality": "Jewish Quarter",\n          "street": "Wilson\'s Arch",\n          "admin": {\n            "level4": "Jerusalem District",\n            "level5": "Jerusalem Subdistrict",\n            "level8": "Jerusalem",\n            "level9": "Old City",\n            "level10": "Jewish Quarter"\n          }\n        }\n      },\n      "geometry": {\n        "type": "Point",\n        "coordinates": [\n          35.23446114230339,\n          31.776734949999998\n        ]\n      }\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);