"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[951],{94981:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(74848),s=t(28453);const i={sidebar_position:2,id:"osm-nominatim-reverse-geocoding",slug:"Osm-Reverse-Search-API",title:"Reverse GeoCoding API",tags:["osm","search","API","reverse","nominatim"]},o="Reverse Geocoding",a={id:"MapColonies/openstreetmap/nominatim/osm-nominatim-reverse-geocoding",title:"Reverse GeoCoding API",description:"Reverse geocoding generates an address from a latitude and longitude.",source:"@site/docs/MapColonies/openstreetmap/nominatim/reverse.md",sourceDirName:"MapColonies/openstreetmap/nominatim",slug:"/MapColonies/openstreetmap/nominatim/Osm-Reverse-Search-API",permalink:"/developer-portal/pr-preview/pr-117/docs/MapColonies/openstreetmap/nominatim/Osm-Reverse-Search-API",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/nominatim/reverse.md",tags:[{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/osm"},{inline:!0,label:"search",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/search"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/api"},{inline:!0,label:"reverse",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/reverse"},{inline:!0,label:"nominatim",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/nominatim"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"osm-nominatim-reverse-geocoding",slug:"Osm-Reverse-Search-API",title:"Reverse GeoCoding API",tags:["osm","search","API","reverse","nominatim"]},sidebar:"docSidebar",previous:{title:"Search API",permalink:"/developer-portal/pr-preview/pr-117/docs/MapColonies/openstreetmap/nominatim/Osm-Search-API"},next:{title:"Address Lookup API",permalink:"/developer-portal/pr-preview/pr-117/docs/MapColonies/openstreetmap/nominatim/Osm-AddressLookup-API"}},l={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Output format",id:"output-format",level:3},{value:"Output details",id:"output-details",level:3},{value:"Language of results",id:"language-of-results",level:3},{value:"Result limitation",id:"result-limitation",level:3},{value:"Polygon output",id:"polygon-output",level:3},{value:"Other",id:"other",level:3},{value:"Examples",id:"examples",level:2},{value:"Example with <code>format=jsonv2</code>",id:"example-with-formatjsonv2",level:5},{value:"Example with <code>format=geojson</code>",id:"example-with-formatgeojson",level:5},{value:"Example with <code>format=geocodejson</code>",id:"example-with-formatgeocodejson",level:5}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"reverse-geocoding",children:"Reverse Geocoding"})}),"\n",(0,r.jsx)(n.p,{children:"Reverse geocoding generates an address from a latitude and longitude."}),"\n",(0,r.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsx)(n.p,{children:"The reverse geocoding API does not exactly compute the address for the\ncoordinate it receives. It works by finding the closest suitable OSM object\nand returning its address information. This may occasionally lead to\nunexpected results."}),"\n",(0,r.jsx)(n.p,{children:"First of all, Nominatim only includes OSM objects in\nits index that are suitable for searching. Small, unnamed paths for example\nare missing from the database and can therefore not be used for reverse\ngeocoding either."}),"\n",(0,r.jsx)(n.p,{children:"The other issue to be aware of is that the closest OSM object may not always\nhave a similar enough address to the coordinate you were requesting. For\nexample, in dense city areas it may belong to a completely different street."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"The main format of the reverse API is"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<VECTOR-NOMINATIM-SERVICE_URL>/reverse?lat=<value>&lon=<value>&<params>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"lat"})," and ",(0,r.jsx)(n.code,{children:"lon"})," are latitude and longitude of a coordinate in WGS84\nprojection. The API returns exactly one result or an error when the coordinate\nis in an area with no OSM data coverage.\nAdditional parameters are accepted as listed below."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["The reverse API used to allow address lookup for a single OSM object by\nits OSM id. This use is now deprecated. Use the ",(0,r.jsx)(n.a,{href:"/docs/MapColonies/openstreetmap/nominatim/Osm-AddressLookup-API",children:"Address Lookup API"}),"\ninstead."]})}),"\n",(0,r.jsx)(n.h3,{id:"output-format",children:"Output format"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"format=[xml|json|jsonv2|geojson|geocodejson]"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/MapColonies/openstreetmap/nominatim/Osm-output-API",children:"Place Output Formats"})," for details on each format. (Default: xml)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"json_callback=<string>"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Wrap JSON output in a callback function (",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/JSONP",children:"JSONP"}),") i.e. ",(0,r.jsx)(n.code,{children:"<string>(<json>)"}),".\nOnly has an effect for JSON output formats."]}),"\n",(0,r.jsx)(n.h3,{id:"output-details",children:"Output details"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"addressdetails=[0|1]"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Include a breakdown of the address into elements. (Default: 1)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"extratags=[0|1]"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Include additional information in the result if available,\ne.g. wikipedia link, opening hours. (Default: 0)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"namedetails=[0|1]"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Include a list of alternative names in the results. These may include\nlanguage variants, references, operator and brand. (Default: 0)"}),"\n",(0,r.jsx)(n.h3,{id:"language-of-results",children:"Language of results"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"accept-language=<browser language string>"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Preferred language order for showing search results, overrides the value\nspecified in the "Accept-Language" HTTP header.\nEither use a standard RFC2616 accept-language string or a simple\ncomma-separated list of language codes.'}),"\n",(0,r.jsx)(n.h3,{id:"result-limitation",children:"Result limitation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"zoom=[0-18]"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Level of detail required for the address. Default: 18. This is a number that\ncorresponds roughly to the zoom level used in XYZ tile sources in frameworks\nlike Leaflet.js, Openlayers etc (Please take not that WGS84 zoom level is slightly different).\nIn terms of address details the zoom levels are as follows:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"zoom"}),(0,r.jsx)(n.th,{children:"address detail"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"country"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"state"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"county"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"city"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"14"}),(0,r.jsx)(n.td,{children:"suburb"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"major streets"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17"}),(0,r.jsx)(n.td,{children:"major and minor streets"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"building"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"polygon-output",children:"Polygon output"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"polygon_geojson=1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"polygon_kml=1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"polygon_svg=1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"polygon_text=1"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Output geometry of results as a GeoJSON, KML, SVG or WKT. Only one of these\noptions can be used at a time. (Default: 0)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"polygon_threshold=0.0"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return a simplified version of the output geometry. The parameter is the\ntolerance in degrees with which the geometry may differ from the original\ngeometry. Topology is preserved in the result. (Default: 0.0)"}),"\n",(0,r.jsx)(n.h3,{id:"other",children:"Other"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"email=<valid email address>"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you are making a large number of requests, please include an appropriate email\naddress to identify your requests (only relevant when using the service in the internet)."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"debug=[0|1]"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Output assorted developer debug information. Data on internals of Nominatim\'s\n"Search Loop" logic, and SQL queries. The output is (rough) HTML format.\nThis overrides the specified machine readable format. (Default: 0)'}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/reverse.html?format=xml&lat=31.770454150126838&lon=35.20109340043129&zoom=18&addressdetails=1"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="Response in XML Format"',children:'  <reversegeocode timestamp="Mon, 23 Jan 23 12:44:51 +0000"\n    attribution="Data \xa9 OpenStreetMap contributors, ODbL 1.0. http://www.openstreetmap.org/copyright"\n    querystring="format=xml&lat=31.770454150126838&lon=35.20109340043129&zoom=18&addressdetails=1">\n    <result place_id="19306678" osm_type="node" osm_id="2260660571" lat="31.7704127" lon="35.2010157"\n      boundingbox="31.7703627,31.7704627,35.2009657,35.2010657" place_rank="30" address_rank="30">18,\n      Nave Shaanan, Nayot, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9218812, Israel</result>\n    <addressparts>\n      <house_number>18</house_number>\n      <road>Nave Shaanan</road>\n      <suburb>Nayot</suburb>\n      <city>Jerusalem</city>\n      <state_district>Jerusalem Subdistrict</state_district>\n      <state>Jerusalem District</state>\n      <ISO3166-2-lvl4>IL-JM</ISO3166-2-lvl4>\n      <postcode>9218812</postcode>\n      <country>Israel</country>\n      <country_code>il</country_code>\n    </addressparts>\n  </reversegeocode>\n'})}),"\n",(0,r.jsxs)(n.h5,{id:"example-with-formatjsonv2",children:["Example with ",(0,r.jsx)(n.code,{children:"format=jsonv2"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/reverse.html?format=jsonv2&lat=32.06906022673506&lon=34.778194163532476"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="Response in jsonv2 Format"',children:'{\n    "place_id": 143009880,\n    "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n    "osm_type": "way",\n    "osm_id": 149962182,\n    "lat": "32.0691986",\n    "lon": "34.77800567065701",\n    "place_rank": 30,\n    "category": "building",\n    "type": "apartments",\n    "importance": 0.00000999999999995449,\n    "addresstype": "building",\n    "name": null,\n    "display_name": "109, Rothschild Boulevard, Tel Aviv, Lev Tel Aviv, Tel Aviv-Yafo, Tel Aviv Subdistrict, Tel Aviv District, 6527401, Israel",\n    "address": {\n        "house_number": "109",\n        "road": "Rothschild Boulevard",\n        "residential": "Tel Aviv",\n        "suburb": "Lev Tel Aviv",\n        "city": "Tel Aviv-Yafo",\n        "state_district": "Tel Aviv Subdistrict",\n        "state": "Tel Aviv District",\n        "ISO3166-2-lvl4": "IL-TA",\n        "postcode": "6527401",\n        "country": "Israel",\n        "country_code": "il"\n    },\n    "boundingbox": [\n        "32.0690938",\n        "32.0693033",\n        "34.7778663",\n        "34.778145"\n    ]\n}\n'})}),"\n",(0,r.jsxs)(n.h5,{id:"example-with-formatgeojson",children:["Example with ",(0,r.jsx)(n.code,{children:"format=geojson"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/reverse.html?format=geojson&lat=31.258847882906082&lon=34.801318450147534"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="Response in GeoJSON Format"',children:'{\n    "type": "FeatureCollection",\n    "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n    "features": [\n        {\n            "type": "Feature",\n            "properties": {\n                "place_id": 161967817,\n                "osm_type": "way",\n                "osm_id": 219455608,\n                "place_rank": 30,\n                "category": "building",\n                "type": "yes",\n                "importance": 0.00000999999999995449,\n                "addresstype": "building",\n                "name": "\u05de\u05d7\u05dc\u05e7\u05d5\u05ea \u05d9\u05dc\u05d3\u05d9\u05dd \u05d0-\u05d3",\n                "display_name": "\u05de\u05d7\u05dc\u05e7\u05d5\u05ea \u05d9\u05dc\u05d3\u05d9\u05dd \u05d0-\u05d3, \u05d0\u05e9\u05e4\u05d5\u05d6 \u05d9\u05d5\u05dd \u05db\u05d9\u05e8\u05d5\u05e8\u05d2\u05d9, Be\'er Sheva Innovation District, Gimel, Beer Sheva, Beersheba Subdistrict, South District, 8452566, Israel",\n                "address": {\n                    "building": "\u05de\u05d7\u05dc\u05e7\u05d5\u05ea \u05d9\u05dc\u05d3\u05d9\u05dd \u05d0-\u05d3",\n                    "road": "\u05d0\u05e9\u05e4\u05d5\u05d6 \u05d9\u05d5\u05dd \u05db\u05d9\u05e8\u05d5\u05e8\u05d2\u05d9",\n                    "commercial": "Be\'er Sheva Innovation District",\n                    "suburb": "Gimel",\n                    "city": "Beer Sheva",\n                    "state_district": "Beersheba Subdistrict",\n                    "state": "South District",\n                    "ISO3166-2-lvl4": "IL-D",\n                    "postcode": "8452566",\n                    "country": "Israel",\n                    "country_code": "il"\n                }\n            },\n            "bbox": [\n                34.8012294,\n                31.2585054,\n                34.8016819,\n                31.2589849\n            ],\n            "geometry": {\n                "type": "Point",\n                "coordinates": [\n                    34.801452912210586,\n                    31.2586442\n                ]\n            }\n        }\n    ]\n}\n'})}),"\n",(0,r.jsxs)(n.h5,{id:"example-with-formatgeocodejson",children:["Example with ",(0,r.jsx)(n.code,{children:"format=geocodejson"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/reverse.html?format=geocodejson&lat=31.77671359535347&lon=35.234473935516405"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="Response in GeoCodeJSON Format"',children:'{\n  "type": "FeatureCollection",\n  "geocoding": {\n      "version": "0.1.0",\n      "attribution": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n      "licence": "ODbL",\n      "query": "31.776713595353,35.234473935516"\n  },\n  "features": [\n    {\n      "type": "Feature",\n      "properties": {\n        "geocoding": {\n          "place_id": 267010108,\n          "osm_type": "way",\n          "osm_id": 817206833,\n          "type": "house",\n          "accuracy": 0,\n          "label": "Western Wall, Wilson\'s Arch, Jewish Quarter, Old City, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9511208, Israel",\n          "name": "Western Wall",\n          "country": "Israel",\n          "postcode": "9511208",\n          "state": "Jerusalem District",\n          "county": "Jerusalem Subdistrict",\n          "city": "Jerusalem",\n          "district": "Old City",\n          "locality": "Jewish Quarter",\n          "street": "Wilson\'s Arch",\n          "admin": {\n            "level4": "Jerusalem District",\n            "level5": "Jerusalem Subdistrict",\n            "level8": "Jerusalem",\n            "level9": "Old City",\n            "level10": "Jewish Quarter"\n          }\n        }\n      },\n      "geometry": {\n        "type": "Point",\n        "coordinates": [\n          35.23446114230339,\n          31.776734949999998\n        ]\n      }\n    }\n  ]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);