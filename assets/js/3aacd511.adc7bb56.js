"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[2379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:4,id:"osm-nominatim-output",slug:"Osm-output-API",title:"Output Formats",tags:["osm","search","API","nominatim"]},l="Output formats",r={unversionedId:"MapColonies/openstreetmap/nominatim/osm-nominatim-output",id:"MapColonies/openstreetmap/nominatim/osm-nominatim-output",title:"Output Formats",description:"The /reverse, /search and /lookup",source:"@site/docs/MapColonies/openstreetmap/nominatim/output.md",sourceDirName:"MapColonies/openstreetmap/nominatim",slug:"/MapColonies/openstreetmap/nominatim/Osm-output-API",permalink:"/developer-portal/docs/MapColonies/openstreetmap/nominatim/Osm-output-API",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/nominatim/output.md",tags:[{label:"osm",permalink:"/developer-portal/docs/tags/osm"},{label:"search",permalink:"/developer-portal/docs/tags/search"},{label:"API",permalink:"/developer-portal/docs/tags/api"},{label:"nominatim",permalink:"/developer-portal/docs/tags/nominatim"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"osm-nominatim-output",slug:"Osm-output-API",title:"Output Formats",tags:["osm","search","API","nominatim"]},sidebar:"docSidebar",previous:{title:"Address Lookup API",permalink:"/developer-portal/docs/MapColonies/openstreetmap/nominatim/Osm-AddressLookup-API"},next:{title:"FAQ",permalink:"/developer-portal/docs/MapColonies/openstreetmap/nominatim/osm-nominatim-faq"}},s={},p=[{value:"JSON",id:"json",level:2},{value:"JSONv2",id:"jsonv2",level:2},{value:"GeoJSON",id:"geojson",level:2},{value:"GeocodeJSON",id:"geocodejson",level:2},{value:"XML",id:"xml",level:2},{value:"Reverse",id:"reverse",level:3},{value:"Search and Lookup",id:"search-and-lookup",level:3},{value:"Notes on field values",id:"notes-on-field-values",level:2},{value:"place_id is not a persistent id",id:"place_id-is-not-a-persistent-id",level:3},{value:"OSM reference",id:"osm-reference",level:3},{value:"boundingbox",id:"boundingbox",level:3},{value:"addressdetails",id:"addressdetails",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"output-formats"},"Output formats"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/MapColonies/openstreetmap/nominatim/Osm-Reverse-Search-API"},"/reverse"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/MapColonies/openstreetmap/nominatim/Osm-Search-API"},"/search")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/MapColonies/openstreetmap/nominatim/Osm-AddressLookup-API"},"/lookup"),"\nAPI calls produce very similar output which is explained in this section.\nThere is one section for each format. The format correspond to what was\nselected via the ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," parameter."),(0,i.kt)("h2",{id:"json"},"JSON"),(0,i.kt)("p",null,"The JSON format returns an array of places (for search and lookup) or\na single place (for reverse) of the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON"',title:'"JSON"'},'  {\n    "place_id": "100149",\n    "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n    "osm_type": "node",\n    "osm_id": "107775",\n    "boundingbox": ["51.3473219", "51.6673219", "-0.2876474", "0.0323526"],\n    "lat": "51.5073219",\n    "lon": "-0.1276474",\n    "display_name": "London, Greater London, England, SW1A 2DU, United Kingdom",\n    "class": "place",\n    "type": "city",\n    "importance": 0.9654895765402,\n    "icon": "<VECTOR-NOMINATIM-SERVICE_URL>/images/mapicons/poi_place_city.p.20.png",\n    "address": {\n      "city": "London",\n      "state_district": "Greater London",\n      "state": "England",\n      "ISO3166-2-lvl4": "GB-ENG",\n      "postcode": "SW1A 2DU",\n      "country": "United Kingdom",\n      "country_code": "gb"\n    },\n    "extratags": {\n      "capital": "yes",\n      "website": "http://www.london.gov.uk",\n      "wikidata": "Q84",\n      "wikipedia": "en:London",\n      "population": "8416535"\n    }\n  }\n')),(0,i.kt)("p",null,"The possible fields are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"place_id")," - reference to the Nominatim internal database ID (",(0,i.kt)("a",{parentName:"li",href:"#place_id-is-not-a-persistent-id"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"osm_type"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"osm_id")," - reference to the OSM object (",(0,i.kt)("a",{parentName:"li",href:"#osm-reference"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boundingbox")," - area of corner coordinates (",(0,i.kt)("a",{parentName:"li",href:"#boundingbox"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lon")," - latitude and longitude of the centroid of the object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"display_name")," - full comma-separated address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"class"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," - key and value of the main OSM tag"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"importance")," - computed importance rank"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"icon")," - link to class icon (if available)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," - dictionary of address details (only with ",(0,i.kt)("inlineCode",{parentName:"li"},"addressdetails=1"),",\n",(0,i.kt)("a",{parentName:"li",href:"#addressdetails"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extratags")," - dictionary with additional useful tags like website or maxspeed\n(only with ",(0,i.kt)("inlineCode",{parentName:"li"},"extratags=1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namedetails")," - dictionary with full list of available names including ref etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"geojson"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"svg"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"geotext"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"geokml")," - full geometry\n(only with the appropriate ",(0,i.kt)("inlineCode",{parentName:"li"},"polygon_*")," parameter)")),(0,i.kt)("h2",{id:"jsonv2"},"JSONv2"),(0,i.kt)("p",null,"This is the same as the JSON format with two changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"class")," renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"category")),(0,i.kt)("li",{parentName:"ul"},"additional field ",(0,i.kt)("inlineCode",{parentName:"li"},"place_rank")," with the search rank of the object")),(0,i.kt)("h2",{id:"geojson"},"GeoJSON"),(0,i.kt)("p",null,"This format follows the ",(0,i.kt)("a",{parentName:"p",href:"https://geojson.org"},"RFC7946"),". Every feature includes\na bounding box (",(0,i.kt)("inlineCode",{parentName:"p"},"bbox"),")."),(0,i.kt)("p",null,"The properties object has the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"place_id")," - reference to the Nominatim internal database ID (",(0,i.kt)("a",{parentName:"li",href:"#place_id-is-not-a-persistent-id"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"osm_type"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"osm_id")," - reference to the OSM object (",(0,i.kt)("a",{parentName:"li",href:"#osm-reference"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"category"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," - key and value of the main OSM tag"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"display_name")," - full comma-separated address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"place_rank")," - class search rank"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"importance")," - computed importance rank"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"icon")," - link to class icon (if available)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," - dictionary of address details (only with ",(0,i.kt)("inlineCode",{parentName:"li"},"addressdetails=1"),",\n",(0,i.kt)("a",{parentName:"li",href:"#addressdetails"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extratags")," - dictionary with additional useful tags like ",(0,i.kt)("inlineCode",{parentName:"li"},"website")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"maxspeed"),"\n(only with ",(0,i.kt)("inlineCode",{parentName:"li"},"extratags=1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namedetails")," - dictionary with full list of available names including ref etc.")),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"polygon_geojson")," to output the full geometry of the object instead\nof the centroid."),(0,i.kt)("h2",{id:"geocodejson"},"GeocodeJSON"),(0,i.kt)("p",null,"The GeocodeJSON format follows the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/geocoders/geocodejson-spec"},"GeocodeJSON spec 0.1.0"),".\nThe following feature attributes are implemented:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"osm_type"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"osm_id")," - reference to the OSM object (unofficial extension, ",(0,i.kt)("a",{parentName:"li",href:"#osm-reference"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," - the 'address level' of the object ('house', 'street', ",(0,i.kt)("inlineCode",{parentName:"li"},"district"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"city"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"county"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"country"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"locality"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"osm_key"),"- key of the main tag of the OSM object (e.g. boundary, highway, amenity)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"osm_value")," - value of the main tag of the OSM object (e.g. residential, restaurant)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"label")," - full comma-separated address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - localised name of the place"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"housenumber"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"street"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"locality"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"district"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"postcode"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"city"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"county"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"country")," -\nprovided when it can be determined from the address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"admin")," - list of localised names of administrative boundaries (only with ",(0,i.kt)("inlineCode",{parentName:"li"},"addressdetails=1"),")")),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"polygon_geojson")," to output the full geometry of the object instead\nof the centroid."),(0,i.kt)("h2",{id:"xml"},"XML"),(0,i.kt)("p",null,"The XML response returns one or more place objects in slightly different\nformats depending on the API call."),(0,i.kt)("h3",{id:"reverse"},"Reverse"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Reverse GeoCode Response in XML Format"',title:'"Reverse',GeoCode:!0,Response:!0,in:!0,XML:!0,'Format"':!0},'<reversegeocode timestamp="Sat, 11 Aug 18 11:53:21 +0000"\n                attribution="Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://www.openstreetmap.org/copyright"\n                querystring="lat=48.400381&lon=11.745876&zoom=5&format=xml">\n  <result place_id="179509537" osm_type="relation" osm_id="2145268" ref="BY" place_rank="15" address_rank="15"\n          lat="48.9467562" lon="11.4038717"\n          boundingbox="47.2701114,50.5647142,8.9763497,13.8396373">\n       Bavaria, Germany\n  </result>\n  <addressparts>\n     <state>Bavaria</state>\n     <ISO3166-2-lvl4>DE-BY</ISO3166-2-lvl4>\n     <country>Germany</country>\n     <country_code>de</country_code>\n  </addressparts>\n  <extratags>\n    <tag key="place" value="state"/>\n    <tag key="wikidata" value="Q980"/>\n    <tag key="wikipedia" value="de:Bayern"/>\n    <tag key="population" value="12520000"/>\n    <tag key="name:prefix" value="Freistaat"/>\n  </extratags>\n</reversegeocode>\n')),(0,i.kt)("p",null,"The attributes of the outer ",(0,i.kt)("inlineCode",{parentName:"p"},"reversegeocode")," element return generic information\nabout the query, including the time when the response was sent (in UTC),\nattribution to OSM and the original querystring."),(0,i.kt)("p",null,"The place information can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," element. The attributes of that element contain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"place_id")," - reference to the Nominatim internal database ID (",(0,i.kt)("a",{parentName:"li",href:"#place_id-is-not-a-persistent-id"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"osm_type"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"osm_id")," - reference to the OSM object (",(0,i.kt)("a",{parentName:"li",href:"#osm-reference"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ref")," - content of ",(0,i.kt)("inlineCode",{parentName:"li"},"ref")," tag if it exists"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lon")," - latitude and longitude of the centroid of the object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boundingbox")," - comma-separated list of corner coordinates (",(0,i.kt)("a",{parentName:"li",href:"#boundingbox"},"see notes"),")")),(0,i.kt)("p",null,"The full address of the result can be found in the content of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"result")," element as a comma-separated list."),(0,i.kt)("p",null,"Additional information requested with ",(0,i.kt)("inlineCode",{parentName:"p"},"addressdetails=1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"extratags=1")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"namedetails=1")," can be found in extra elements."),(0,i.kt)("h3",{id:"search-and-lookup"},"Search and Lookup"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Search Results"',title:'"Search','Results"':!0},'<searchresults timestamp="Sat, 11 Aug 18 11:55:35 +0000"\n               attribution="Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://www.openstreetmap.org/copyright"\n               querystring="london" polygon="false" exclude_place_ids="100149"\n               more_url="<VECTOR-NOMINATIM-SERVICE_URL>/search.php?q=london&addressdetails=1&extratags=1&exclude_place_ids=100149&format=xml&accept-language=en-US%2Cen%3Bq%3D0.7%2Cde%3Bq%3D0.3">\n  <place place_id="100149" osm_type="node" osm_id="107775" place_rank="15" address_rank="15"\n         boundingbox="51.3473219,51.6673219,-0.2876474,0.0323526" lat="51.5073219" lon="-0.1276474"\n         display_name="London, Greater London, England, SW1A 2DU, United Kingdom"\n         class="place" type="city" importance="0.9654895765402"\n         icon="<VECTOR-NOMINATIM-SERVICE_URL>/images/mapicons/poi_place_city.p.20.png">\n    <extratags>\n      <tag key="capital" value="yes"/>\n      <tag key="website" value="http://www.london.gov.uk"/>\n      <tag key="wikidata" value="Q84"/>\n      <tag key="wikipedia" value="en:London"/>\n      <tag key="population" value="8416535"/>\n    </extratags>\n    <city>London</city>\n    <state_district>Greater London</state_district>\n    <state>England</state>\n    <ISO3166-2-lvl4>GB-ENG</ISO3166-2-lvl4>\n    <postcode>SW1A 2DU</postcode>\n    <country>United Kingdom</country>\n    <country_code>gb</country_code>\n  </place>\n</searchresults>\n')),(0,i.kt)("p",null,"The attributes of the outer ",(0,i.kt)("inlineCode",{parentName:"p"},"searchresults")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"lookupresults")," element return\ngeneric information about the query:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," - UTC time when the response was sent"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attribution")," - OSM licensing information"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"querystring")," - original query"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"polygon")," - true when extra geometry information was requested"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exclude_place_ids")," - IDs of places that should be ignored in a follow-up request"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"more_url")," - search call that will yield additional results for the query\njust sent")),(0,i.kt)("p",null,"The place information can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"place")," elements, of which there may\nbe more than one. The attributes of that element contain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"place_id")," - reference to the Nominatim internal database ID (",(0,i.kt)("a",{parentName:"li",href:"#place_id-is-not-a-persistent-id"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"osm_type"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"osm_id")," - reference to the OSM object (",(0,i.kt)("a",{parentName:"li",href:"#osm-reference"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ref")," - content of ",(0,i.kt)("inlineCode",{parentName:"li"},"ref")," tag if it exists"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lon")," - latitude and longitude of the centroid of the object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boundingbox")," - comma-separated list of corner coordinates (",(0,i.kt)("a",{parentName:"li",href:"#boundingbox"},"see notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"place_rank")," - class ",(0,i.kt)("a",{parentName:"li",href:"../customize/Ranking#search-rank"},"search rank")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address_rank")," - place ",(0,i.kt)("a",{parentName:"li",href:"../customize/Ranking#address-rank"},"address rank")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"display_name")," - full comma-separated address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"class"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," - key and value of the main OSM tag"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"importance")," - computed importance rank"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"icon")," - link to class icon (if available)")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"addressdetails=1")," is requested, the localised address parts appear\nas subelements with the type of the address part."),(0,i.kt)("p",null,"Additional information requested with ",(0,i.kt)("inlineCode",{parentName:"p"},"extratags=1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"namedetails=1")," can\nbe found in extra elements as sub-element of ",(0,i.kt)("inlineCode",{parentName:"p"},"extratags")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"namedetails"),"\nrespectively."),(0,i.kt)("h2",{id:"notes-on-field-values"},"Notes on field values"),(0,i.kt)("h3",{id:"place_id-is-not-a-persistent-id"},"place_id is not a persistent id"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"place_id")," is an internal identifier that is assigned data is imported\ninto a Nominatim database. The same OSM object will have a different value\non another server. It may even change its ID on the same server when it is\nremoved and reimported while updating the database with fresh OSM data.\nIt is thus not useful to treat it as permanent for later use."),(0,i.kt)("p",null,"The combination ",(0,i.kt)("inlineCode",{parentName:"p"},"osm_type"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"osm_id")," is slightly better but remember in\nOpenStreetMap mappers can delete, split, recreate places (and those\nget a new ",(0,i.kt)("inlineCode",{parentName:"p"},"osm_id"),"), there is no link between those old and new ids.\nPlaces can also change their meaning without changing their ",(0,i.kt)("inlineCode",{parentName:"p"},"osm_id"),",\ne.g. when a restaurant is retagged as supermarket."),(0,i.kt)("p",null,"If you need an ID that is consistent over multiple installations of Nominatim,\nthen you should use the combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"osm_type"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"osm_id"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"class"),"."),(0,i.kt)("h3",{id:"osm-reference"},"OSM reference"),(0,i.kt)("p",null,"Nominatim may sometimes return special objects that do not correspond directly\nto an object in OpenStreetMap. These are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Postcodes"),". Nominatim returns an postcode point created from all mapped\npostcodes of the same name. The class and type of these object is ",(0,i.kt)("inlineCode",{parentName:"li"},"place=postcdode"),".\nNo ",(0,i.kt)("inlineCode",{parentName:"li"},"osm_type")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"osm_id")," are included in the result."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Housenumber interpolations"),". Nominatim returns a single interpolated\nhousenumber from the interpolation way. The class and type are ",(0,i.kt)("inlineCode",{parentName:"li"},"place=house"),"\nand ",(0,i.kt)("inlineCode",{parentName:"li"},"osm_type")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"osm_id")," correspond to the interpolation way in OSM."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TIGER housenumber.")," Nominatim returns a single interpolated housenumber\nfrom the TIGER data. The class and type are ",(0,i.kt)("inlineCode",{parentName:"li"},"place=house"),"\nand ",(0,i.kt)("inlineCode",{parentName:"li"},"osm_type")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"osm_id")," correspond to the street mentioned in the result.")),(0,i.kt)("p",null,"Please note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"osm_type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"osm_id")," returned may be changed in the\nfuture. You should not expect to only find ",(0,i.kt)("inlineCode",{parentName:"p"},"node"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"way")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"relation")," for\nthe type."),(0,i.kt)("h3",{id:"boundingbox"},"boundingbox"),(0,i.kt)("p",null,"Comma separated list of min latitude, max latitude, min longitude, max longitude.\nThe whole planet would be ",(0,i.kt)("inlineCode",{parentName:"p"},"-90,90,-180,180"),"."),(0,i.kt)("p",null,"Can be used to pan and center the map on the result, for example with leafletjs\nmapping library\n",(0,i.kt)("inlineCode",{parentName:"p"},"map.fitBounds([[bbox[0],bbox[2]],[bbox[1],bbox[3]]], {padding: [20, 20], maxzoom: 16});")),(0,i.kt)("p",null,"Bounds crossing the antimeridian have a min latitude -180 and max latitude 180,\nessentially covering the entire planet."),(0,i.kt)("h3",{id:"addressdetails"},"addressdetails"),(0,i.kt)("p",null,"Address details in the xml and json formats return a list of names together\nwith a designation label. Per default the following labels may appear:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"continent"),(0,i.kt)("li",{parentName:"ul"},"country, country_code"),(0,i.kt)("li",{parentName:"ul"},"region, state, state_district, county, ISO3166-2-lvl<admin_level>"),(0,i.kt)("li",{parentName:"ul"},"municipality, city, town, village"),(0,i.kt)("li",{parentName:"ul"},"city_district, district, borough, suburb, subdivision"),(0,i.kt)("li",{parentName:"ul"},"hamlet, croft, isolated_dwelling"),(0,i.kt)("li",{parentName:"ul"},"neighbourhood, allotments, quarter"),(0,i.kt)("li",{parentName:"ul"},"city_block, residential, farm, farmyard, industrial, commercial, retail"),(0,i.kt)("li",{parentName:"ul"},"road"),(0,i.kt)("li",{parentName:"ul"},"house_number, house_name"),(0,i.kt)("li",{parentName:"ul"},"emergency, historic, military, natural, landuse, place, railway,\nman_made, aerialway, boundary, amenity, aeroway, club, craft, leisure,\noffice, mountain_pass, shop, tourism, bridge, tunnel, waterway"),(0,i.kt)("li",{parentName:"ul"},"postcode")),(0,i.kt)("p",null,"They roughly correspond to the classification of the OpenStreetMap data\naccording to either the ",(0,i.kt)("inlineCode",{parentName:"p"},"place")," tag or the main key of the object."))}u.isMDXComponent=!0}}]);