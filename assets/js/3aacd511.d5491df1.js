"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7468],{370:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=s(74848),t=s(28453);const o={sidebar_position:4,id:"osm-nominatim-output",slug:"Osm-output-API",title:"Output Formats",tags:["osm","search","API","nominatim"]},r="Output formats",d={id:"MapColonies/openstreetmap/nominatim/osm-nominatim-output",title:"Output Formats",description:"The /reverse, /search and /lookup",source:"@site/docs/MapColonies/openstreetmap/nominatim/output.md",sourceDirName:"MapColonies/openstreetmap/nominatim",slug:"/MapColonies/openstreetmap/nominatim/Osm-output-API",permalink:"/developer-portal/docs/MapColonies/openstreetmap/nominatim/Osm-output-API",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/nominatim/output.md",tags:[{inline:!0,label:"osm",permalink:"/developer-portal/docs/tags/osm"},{inline:!0,label:"search",permalink:"/developer-portal/docs/tags/search"},{inline:!0,label:"API",permalink:"/developer-portal/docs/tags/api"},{inline:!0,label:"nominatim",permalink:"/developer-portal/docs/tags/nominatim"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"osm-nominatim-output",slug:"Osm-output-API",title:"Output Formats",tags:["osm","search","API","nominatim"]},sidebar:"docSidebar",previous:{title:"Address Lookup API",permalink:"/developer-portal/docs/MapColonies/openstreetmap/nominatim/Osm-AddressLookup-API"},next:{title:"Special Phrases",permalink:"/developer-portal/docs/MapColonies/openstreetmap/nominatim/Osm-special-phrases"}},a={},l=[{value:"JSON",id:"json",level:2},{value:"JSONv2",id:"jsonv2",level:2},{value:"GeoJSON",id:"geojson",level:2},{value:"GeocodeJSON",id:"geocodejson",level:2},{value:"XML",id:"xml",level:2},{value:"Reverse",id:"reverse",level:3},{value:"Search and Lookup",id:"search-and-lookup",level:3},{value:"Notes on field values",id:"notes-on-field-values",level:2},{value:"place_id is not a persistent id",id:"place_id-is-not-a-persistent-id",level:3},{value:"OSM reference",id:"osm-reference",level:3},{value:"boundingbox",id:"boundingbox",level:3},{value:"addressdetails",id:"addressdetails",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"output-formats",children:"Output formats"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/docs/MapColonies/openstreetmap/nominatim/Osm-Reverse-Search-API",children:"/reverse"}),", ",(0,i.jsx)(n.a,{href:"/docs/MapColonies/openstreetmap/nominatim/Osm-Search-API",children:"/search"})," and ",(0,i.jsx)(n.a,{href:"/docs/MapColonies/openstreetmap/nominatim/Osm-AddressLookup-API",children:"/lookup"}),"\nAPI calls produce very similar output which is explained in this section.\nThere is one section for each format. The format correspond to what was\nselected via the ",(0,i.jsx)(n.code,{children:"format"})," parameter."]}),"\n",(0,i.jsx)(n.h2,{id:"json",children:"JSON"}),"\n",(0,i.jsx)(n.p,{children:"The JSON format returns an array of places (for search and lookup) or\na single place (for reverse) of the following format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="JSON"',children:'  {\n    "place_id": "100149",\n    "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n    "osm_type": "node",\n    "osm_id": "107775",\n    "boundingbox": ["51.3473219", "51.6673219", "-0.2876474", "0.0323526"],\n    "lat": "51.5073219",\n    "lon": "-0.1276474",\n    "display_name": "London, Greater London, England, SW1A 2DU, United Kingdom",\n    "class": "place",\n    "type": "city",\n    "importance": 0.9654895765402,\n    "icon": "<VECTOR-NOMINATIM-SERVICE_URL>/images/mapicons/poi_place_city.p.20.png",\n    "address": {\n      "city": "London",\n      "state_district": "Greater London",\n      "state": "England",\n      "ISO3166-2-lvl4": "GB-ENG",\n      "postcode": "SW1A 2DU",\n      "country": "United Kingdom",\n      "country_code": "gb"\n    },\n    "extratags": {\n      "capital": "yes",\n      "website": "http://www.london.gov.uk",\n      "wikidata": "Q84",\n      "wikipedia": "en:London",\n      "population": "8416535"\n    }\n  }\n'})}),"\n",(0,i.jsx)(n.p,{children:"The possible fields are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"place_id"})," - reference to the Nominatim internal database ID (",(0,i.jsx)(n.a,{href:"#place_id-is-not-a-persistent-id",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"osm_type"}),", ",(0,i.jsx)(n.code,{children:"osm_id"})," - reference to the OSM object (",(0,i.jsx)(n.a,{href:"#osm-reference",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"boundingbox"})," - area of corner coordinates (",(0,i.jsx)(n.a,{href:"#boundingbox",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lat"}),", ",(0,i.jsx)(n.code,{children:"lon"})," - latitude and longitude of the centroid of the object"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"display_name"})," - full comma-separated address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"class"}),", ",(0,i.jsx)(n.code,{children:"type"})," - key and value of the main OSM tag"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"importance"})," - computed importance rank"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"icon"})," - link to class icon (if available)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"address"})," - dictionary of address details (only with ",(0,i.jsx)(n.code,{children:"addressdetails=1"}),",\n",(0,i.jsx)(n.a,{href:"#addressdetails",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"extratags"})," - dictionary with additional useful tags like website or maxspeed\n(only with ",(0,i.jsx)(n.code,{children:"extratags=1"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"namedetails"})," - dictionary with full list of available names including ref etc."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"geojson"}),", ",(0,i.jsx)(n.code,{children:"svg"}),", ",(0,i.jsx)(n.code,{children:"geotext"}),", ",(0,i.jsx)(n.code,{children:"geokml"})," - full geometry\n(only with the appropriate ",(0,i.jsx)(n.code,{children:"polygon_*"})," parameter)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"jsonv2",children:"JSONv2"}),"\n",(0,i.jsx)(n.p,{children:"This is the same as the JSON format with two changes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"class"})," renamed to ",(0,i.jsx)(n.code,{children:"category"})]}),"\n",(0,i.jsxs)(n.li,{children:["additional field ",(0,i.jsx)(n.code,{children:"place_rank"})," with the search rank of the object"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"geojson",children:"GeoJSON"}),"\n",(0,i.jsxs)(n.p,{children:["This format follows the ",(0,i.jsx)(n.a,{href:"https://geojson.org",children:"RFC7946"}),". Every feature includes\na bounding box (",(0,i.jsx)(n.code,{children:"bbox"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"The properties object has the following fields:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"place_id"})," - reference to the Nominatim internal database ID (",(0,i.jsx)(n.a,{href:"#place_id-is-not-a-persistent-id",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"osm_type"}),", ",(0,i.jsx)(n.code,{children:"osm_id"})," - reference to the OSM object (",(0,i.jsx)(n.a,{href:"#osm-reference",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"category"}),", ",(0,i.jsx)(n.code,{children:"type"})," - key and value of the main OSM tag"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"display_name"})," - full comma-separated address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"place_rank"})," - class search rank"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"importance"})," - computed importance rank"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"icon"})," - link to class icon (if available)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"address"})," - dictionary of address details (only with ",(0,i.jsx)(n.code,{children:"addressdetails=1"}),",\n",(0,i.jsx)(n.a,{href:"#addressdetails",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"extratags"})," - dictionary with additional useful tags like ",(0,i.jsx)(n.code,{children:"website"})," or ",(0,i.jsx)(n.code,{children:"maxspeed"}),"\n(only with ",(0,i.jsx)(n.code,{children:"extratags=1"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"namedetails"})," - dictionary with full list of available names including ref etc."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"polygon_geojson"})," to output the full geometry of the object instead\nof the centroid."]}),"\n",(0,i.jsx)(n.h2,{id:"geocodejson",children:"GeocodeJSON"}),"\n",(0,i.jsxs)(n.p,{children:["The GeocodeJSON format follows the\n",(0,i.jsx)(n.a,{href:"https://github.com/geocoders/geocodejson-spec",children:"GeocodeJSON spec 0.1.0"}),".\nThe following feature attributes are implemented:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"osm_type"}),", ",(0,i.jsx)(n.code,{children:"osm_id"})," - reference to the OSM object (unofficial extension, ",(0,i.jsx)(n.a,{href:"#osm-reference",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"})," - the 'address level' of the object ('house', 'street', ",(0,i.jsx)(n.code,{children:"district"}),", ",(0,i.jsx)(n.code,{children:"city"}),",\n",(0,i.jsx)(n.code,{children:"county"}),", ",(0,i.jsx)(n.code,{children:"state"}),", ",(0,i.jsx)(n.code,{children:"country"}),", ",(0,i.jsx)(n.code,{children:"locality"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"osm_key"}),"- key of the main tag of the OSM object (e.g. boundary, highway, amenity)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"osm_value"})," - value of the main tag of the OSM object (e.g. residential, restaurant)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"label"})," - full comma-separated address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," - localised name of the place"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"housenumber"}),", ",(0,i.jsx)(n.code,{children:"street"}),", ",(0,i.jsx)(n.code,{children:"locality"}),", ",(0,i.jsx)(n.code,{children:"district"}),", ",(0,i.jsx)(n.code,{children:"postcode"}),", ",(0,i.jsx)(n.code,{children:"city"}),",\n",(0,i.jsx)(n.code,{children:"county"}),", ",(0,i.jsx)(n.code,{children:"state"}),", ",(0,i.jsx)(n.code,{children:"country"})," -\nprovided when it can be determined from the address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"admin"})," - list of localised names of administrative boundaries (only with ",(0,i.jsx)(n.code,{children:"addressdetails=1"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"polygon_geojson"})," to output the full geometry of the object instead\nof the centroid."]}),"\n",(0,i.jsx)(n.h2,{id:"xml",children:"XML"}),"\n",(0,i.jsx)(n.p,{children:"The XML response returns one or more place objects in slightly different\nformats depending on the API call."}),"\n",(0,i.jsx)(n.h3,{id:"reverse",children:"Reverse"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="Reverse GeoCode Response in XML Format"',children:'<reversegeocode timestamp="Sat, 11 Aug 18 11:53:21 +0000"\n                attribution="Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://www.openstreetmap.org/copyright"\n                querystring="lat=48.400381&lon=11.745876&zoom=5&format=xml">\n  <result place_id="179509537" osm_type="relation" osm_id="2145268" ref="BY" place_rank="15" address_rank="15"\n          lat="48.9467562" lon="11.4038717"\n          boundingbox="47.2701114,50.5647142,8.9763497,13.8396373">\n       Bavaria, Germany\n  </result>\n  <addressparts>\n     <state>Bavaria</state>\n     <ISO3166-2-lvl4>DE-BY</ISO3166-2-lvl4>\n     <country>Germany</country>\n     <country_code>de</country_code>\n  </addressparts>\n  <extratags>\n    <tag key="place" value="state"/>\n    <tag key="wikidata" value="Q980"/>\n    <tag key="wikipedia" value="de:Bayern"/>\n    <tag key="population" value="12520000"/>\n    <tag key="name:prefix" value="Freistaat"/>\n  </extratags>\n</reversegeocode>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The attributes of the outer ",(0,i.jsx)(n.code,{children:"reversegeocode"})," element return generic information\nabout the query, including the time when the response was sent (in UTC),\nattribution to OSM and the original querystring."]}),"\n",(0,i.jsxs)(n.p,{children:["The place information can be found in the ",(0,i.jsx)(n.code,{children:"result"})," element. The attributes of that element contain:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"place_id"})," - reference to the Nominatim internal database ID (",(0,i.jsx)(n.a,{href:"#place_id-is-not-a-persistent-id",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"osm_type"}),", ",(0,i.jsx)(n.code,{children:"osm_id"})," - reference to the OSM object (",(0,i.jsx)(n.a,{href:"#osm-reference",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ref"})," - content of ",(0,i.jsx)(n.code,{children:"ref"})," tag if it exists"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lat"}),", ",(0,i.jsx)(n.code,{children:"lon"})," - latitude and longitude of the centroid of the object"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"boundingbox"})," - comma-separated list of corner coordinates (",(0,i.jsx)(n.a,{href:"#boundingbox",children:"see notes"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The full address of the result can be found in the content of the\n",(0,i.jsx)(n.code,{children:"result"})," element as a comma-separated list."]}),"\n",(0,i.jsxs)(n.p,{children:["Additional information requested with ",(0,i.jsx)(n.code,{children:"addressdetails=1"}),", ",(0,i.jsx)(n.code,{children:"extratags=1"})," and\n",(0,i.jsx)(n.code,{children:"namedetails=1"})," can be found in extra elements."]}),"\n",(0,i.jsx)(n.h3,{id:"search-and-lookup",children:"Search and Lookup"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="Search Results"',children:'<searchresults timestamp="Sat, 11 Aug 18 11:55:35 +0000"\n               attribution="Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://www.openstreetmap.org/copyright"\n               querystring="london" polygon="false" exclude_place_ids="100149"\n               more_url="<VECTOR-NOMINATIM-SERVICE_URL>/search.php?q=london&addressdetails=1&extratags=1&exclude_place_ids=100149&format=xml&accept-language=en-US%2Cen%3Bq%3D0.7%2Cde%3Bq%3D0.3">\n  <place place_id="100149" osm_type="node" osm_id="107775" place_rank="15" address_rank="15"\n         boundingbox="51.3473219,51.6673219,-0.2876474,0.0323526" lat="51.5073219" lon="-0.1276474"\n         display_name="London, Greater London, England, SW1A 2DU, United Kingdom"\n         class="place" type="city" importance="0.9654895765402"\n         icon="<VECTOR-NOMINATIM-SERVICE_URL>/images/mapicons/poi_place_city.p.20.png">\n    <extratags>\n      <tag key="capital" value="yes"/>\n      <tag key="website" value="http://www.london.gov.uk"/>\n      <tag key="wikidata" value="Q84"/>\n      <tag key="wikipedia" value="en:London"/>\n      <tag key="population" value="8416535"/>\n    </extratags>\n    <city>London</city>\n    <state_district>Greater London</state_district>\n    <state>England</state>\n    <ISO3166-2-lvl4>GB-ENG</ISO3166-2-lvl4>\n    <postcode>SW1A 2DU</postcode>\n    <country>United Kingdom</country>\n    <country_code>gb</country_code>\n  </place>\n</searchresults>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The attributes of the outer ",(0,i.jsx)(n.code,{children:"searchresults"})," or ",(0,i.jsx)(n.code,{children:"lookupresults"})," element return\ngeneric information about the query:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"timestamp"})," - UTC time when the response was sent"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"attribution"})," - OSM licensing information"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"querystring"})," - original query"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"polygon"})," - true when extra geometry information was requested"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"exclude_place_ids"})," - IDs of places that should be ignored in a follow-up request"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"more_url"})," - search call that will yield additional results for the query\njust sent"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The place information can be found in the ",(0,i.jsx)(n.code,{children:"place"})," elements, of which there may\nbe more than one. The attributes of that element contain:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"place_id"})," - reference to the Nominatim internal database ID (",(0,i.jsx)(n.a,{href:"#place_id-is-not-a-persistent-id",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"osm_type"}),", ",(0,i.jsx)(n.code,{children:"osm_id"})," - reference to the OSM object (",(0,i.jsx)(n.a,{href:"#osm-reference",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ref"})," - content of ",(0,i.jsx)(n.code,{children:"ref"})," tag if it exists"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lat"}),", ",(0,i.jsx)(n.code,{children:"lon"})," - latitude and longitude of the centroid of the object"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"boundingbox"})," - comma-separated list of corner coordinates (",(0,i.jsx)(n.a,{href:"#boundingbox",children:"see notes"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"place_rank"})," - class search rank"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"address_rank"})," - place address rank"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"display_name"})," - full comma-separated address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"class"}),", ",(0,i.jsx)(n.code,{children:"type"})," - key and value of the main OSM tag"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"importance"})," - computed importance rank"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"icon"})," - link to class icon (if available)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"addressdetails=1"})," is requested, the localised address parts appear\nas subelements with the type of the address part."]}),"\n",(0,i.jsxs)(n.p,{children:["Additional information requested with ",(0,i.jsx)(n.code,{children:"extratags=1"})," and ",(0,i.jsx)(n.code,{children:"namedetails=1"})," can\nbe found in extra elements as sub-element of ",(0,i.jsx)(n.code,{children:"extratags"})," and ",(0,i.jsx)(n.code,{children:"namedetails"}),"\nrespectively."]}),"\n",(0,i.jsx)(n.h2,{id:"notes-on-field-values",children:"Notes on field values"}),"\n",(0,i.jsx)(n.h3,{id:"place_id-is-not-a-persistent-id",children:"place_id is not a persistent id"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"place_id"})," is an internal identifier that is assigned data is imported\ninto a Nominatim database. The same OSM object will have a different value\non another server. It may even change its ID on the same server when it is\nremoved and reimported while updating the database with fresh OSM data.\nIt is thus not useful to treat it as permanent for later use."]}),"\n",(0,i.jsxs)(n.p,{children:["The combination ",(0,i.jsx)(n.code,{children:"osm_type"}),"+",(0,i.jsx)(n.code,{children:"osm_id"})," is slightly better but remember in\nOpenStreetMap mappers can delete, split, recreate places (and those\nget a new ",(0,i.jsx)(n.code,{children:"osm_id"}),"), there is no link between those old and new ids.\nPlaces can also change their meaning without changing their ",(0,i.jsx)(n.code,{children:"osm_id"}),",\ne.g. when a restaurant is retagged as supermarket."]}),"\n",(0,i.jsxs)(n.p,{children:["If you need an ID that is consistent over multiple installations of Nominatim,\nthen you should use the combination of ",(0,i.jsx)(n.code,{children:"osm_type"}),"+",(0,i.jsx)(n.code,{children:"osm_id"}),"+",(0,i.jsx)(n.code,{children:"class"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"osm-reference",children:"OSM reference"}),"\n",(0,i.jsx)(n.p,{children:"Nominatim may sometimes return special objects that do not correspond directly\nto an object in OpenStreetMap. These are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Postcodes"}),". Nominatim returns an postcode point created from all mapped\npostcodes of the same name. The class and type of these object is ",(0,i.jsx)(n.code,{children:"place=postcdode"}),".\nNo ",(0,i.jsx)(n.code,{children:"osm_type"})," and ",(0,i.jsx)(n.code,{children:"osm_id"})," are included in the result."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Housenumber interpolations"}),". Nominatim returns a single interpolated\nhousenumber from the interpolation way. The class and type are ",(0,i.jsx)(n.code,{children:"place=house"}),"\nand ",(0,i.jsx)(n.code,{children:"osm_type"})," and ",(0,i.jsx)(n.code,{children:"osm_id"})," correspond to the interpolation way in OSM."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TIGER housenumber."})," Nominatim returns a single interpolated housenumber\nfrom the TIGER data. The class and type are ",(0,i.jsx)(n.code,{children:"place=house"}),"\nand ",(0,i.jsx)(n.code,{children:"osm_type"})," and ",(0,i.jsx)(n.code,{children:"osm_id"})," correspond to the street mentioned in the result."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Please note that the ",(0,i.jsx)(n.code,{children:"osm_type"})," and ",(0,i.jsx)(n.code,{children:"osm_id"})," returned may be changed in the\nfuture. You should not expect to only find ",(0,i.jsx)(n.code,{children:"node"}),", ",(0,i.jsx)(n.code,{children:"way"})," and ",(0,i.jsx)(n.code,{children:"relation"})," for\nthe type."]}),"\n",(0,i.jsx)(n.h3,{id:"boundingbox",children:"boundingbox"}),"\n",(0,i.jsxs)(n.p,{children:["Comma separated list of min latitude, max latitude, min longitude, max longitude.\nThe whole planet would be ",(0,i.jsx)(n.code,{children:"-90,90,-180,180"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Can be used to pan and center the map on the result, for example with leafletjs\nmapping library\n",(0,i.jsx)(n.code,{children:"map.fitBounds([[bbox[0],bbox[2]],[bbox[1],bbox[3]]], {padding: [20, 20], maxzoom: 16});"})]}),"\n",(0,i.jsx)(n.p,{children:"Bounds crossing the antimeridian have a min latitude -180 and max latitude 180,\nessentially covering the entire planet."}),"\n",(0,i.jsx)(n.h3,{id:"addressdetails",children:"addressdetails"}),"\n",(0,i.jsx)(n.p,{children:"Address details in the xml and json formats return a list of names together\nwith a designation label. Per default the following labels may appear:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"continent"}),"\n",(0,i.jsx)(n.li,{children:"country, country_code"}),"\n",(0,i.jsx)(n.li,{children:"region, state, state_district, county, ISO3166-2-lvl<admin_level>"}),"\n",(0,i.jsx)(n.li,{children:"municipality, city, town, village"}),"\n",(0,i.jsx)(n.li,{children:"city_district, district, borough, suburb, subdivision"}),"\n",(0,i.jsx)(n.li,{children:"hamlet, croft, isolated_dwelling"}),"\n",(0,i.jsx)(n.li,{children:"neighbourhood, allotments, quarter"}),"\n",(0,i.jsx)(n.li,{children:"city_block, residential, farm, farmyard, industrial, commercial, retail"}),"\n",(0,i.jsx)(n.li,{children:"road"}),"\n",(0,i.jsx)(n.li,{children:"house_number, house_name"}),"\n",(0,i.jsx)(n.li,{children:"emergency, historic, military, natural, landuse, place, railway,\nman_made, aerialway, boundary, amenity, aeroway, club, craft, leisure,\noffice, mountain_pass, shop, tourism, bridge, tunnel, waterway"}),"\n",(0,i.jsx)(n.li,{children:"postcode"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["They roughly correspond to the classification of the OpenStreetMap data\naccording to either the ",(0,i.jsx)(n.code,{children:"place"})," tag or the main key of the object."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);