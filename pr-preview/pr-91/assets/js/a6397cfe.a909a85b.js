"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[1249],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1,id:"osm-nominatim-search",slug:"Osm-Search-API",title:"Search API",tags:["osm","search","API","nominatim"]},o="Search queries",l={unversionedId:"MapColonies/openstreetmap/nominatim/osm-nominatim-search",id:"MapColonies/openstreetmap/nominatim/osm-nominatim-search",title:"Search API",description:"The search API allows you to look up a location from a textual description",source:"@site/docs/MapColonies/openstreetmap/nominatim/search.md",sourceDirName:"MapColonies/openstreetmap/nominatim",slug:"/MapColonies/openstreetmap/nominatim/Osm-Search-API",permalink:"/developer-portal/pr-preview/pr-91/docs/MapColonies/openstreetmap/nominatim/Osm-Search-API",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/nominatim/search.md",tags:[{label:"osm",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/osm"},{label:"search",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/search"},{label:"API",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/api"},{label:"nominatim",permalink:"/developer-portal/pr-preview/pr-91/docs/tags/nominatim"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"osm-nominatim-search",slug:"Osm-Search-API",title:"Search API",tags:["osm","search","API","nominatim"]},sidebar:"docSidebar",previous:{title:"Nominatim APIs",permalink:"/developer-portal/pr-preview/pr-91/docs/category/nominatim-apis"},next:{title:"Reverse GeoCoding API",permalink:"/developer-portal/pr-preview/pr-91/docs/MapColonies/openstreetmap/nominatim/Osm-Reverse-Search-API"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Output format",id:"output-format",level:3},{value:"Output details",id:"output-details",level:3},{value:"Language of results",id:"language-of-results",level:3},{value:"Result limitation",id:"result-limitation",level:3},{value:"Polygon output",id:"polygon-output",level:3},{value:"Other",id:"other",level:3},{value:"Examples",id:"examples",level:2},{value:"XML with KML polygon",id:"xml-with-kml-polygon",level:5},{value:"JSON with SVG polygon",id:"json-with-svg-polygon",level:5},{value:"JSON with address details",id:"json-with-address-details",level:5},{value:"GeoJSON",id:"geojson",level:5},{value:"GeocodeJSON",id:"geocodejson",level:5}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"search-queries"},"Search queries"),(0,r.kt)("p",null,"The search API allows you to look up a location from a textual description\nor address. Nominatim supports structured and free-form search queries."),(0,r.kt)("p",null,"The search query may also contain\n",(0,r.kt)("em",{parentName:"p"},"special phrases"),' (for example "airport near lod")\nwhich are translated into specific OpenStreetMap (OSM) tags (e.g. Pub => ',(0,r.kt)("inlineCode",{parentName:"p"},"amenity=pub"),").\nThis can be used to narrow down the kind of objects to be returned."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"The search API has the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   <VECTOR-NOMINATIM-SERVICE_URL>/search?<params>\n")),(0,r.kt)("p",null,"The search term may be specified with two different sets of parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"q=<query>")),(0,r.kt)("p",{parentName:"li"},"  Free-form query string to search for. ",(0,r.kt)("br",null),"\nFree-form queries are processed first left-to-right and then right-to-left if that fails. So you may search for\n","[pilkington avenue, birmingham]","(<VECTOR-NOMINATIM-SERVICE_URL>/search?q=pilkington+avenue,birmingham) as well as for\n","[birmingham, pilkington avenue]","(<VECTOR-NOMINATIM-SERVICE_URL>/search?q=birmingham,+pilkington+avenue). ",(0,r.kt)("br",null),"\nCommas are optional, but improve performance by reducing the complexity of the search. ",(0,r.kt)("br",null),"\nFor searching with special phrases you can read more ",(0,r.kt)("a",{parentName:"p",href:"/docs/MapColonies/openstreetmap/nominatim/Osm-special-phrases"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"street=<housenumber> <streetname>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"city=<city>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"county=<county>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"state=<state>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"country=<country>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"postalcode=<postalcode>")),(0,r.kt)("p",{parentName:"li"},"  Alternative query string format split into several parameters for structured requests.\nStructured requests are faster but are less robust against alternative\nOSM tagging schemas. ",(0,r.kt)("strong",{parentName:"p"},"Do not combine with")," ",(0,r.kt)("inlineCode",{parentName:"p"},"q=<query>")," ",(0,r.kt)("strong",{parentName:"p"},"parameter"),"."))),(0,r.kt)("p",null,"Both query forms accept the additional parameters listed below."),(0,r.kt)("h3",{id:"output-format"},"Output format"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format=[xml|json|jsonv2|geojson|geocodejson]"))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/MapColonies/openstreetmap/nominatim/Osm-output-API"},"Place Output Formats")," for details on each format. (Default: jsonv2)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"json_callback=<string>"))),(0,r.kt)("p",null,"Wrap JSON output in a callback function ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONP")," i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"<string>(<json>)"),".\nOnly has an effect for JSON output formats."),(0,r.kt)("h3",{id:"output-details"},"Output details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addressdetails=[0|1]"))),(0,r.kt)("p",null,"Include a breakdown of the address into elements. (Default: 0)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extratags=[0|1]"))),(0,r.kt)("p",null,"Include additional information in the result if available,\ne.g. wikipedia link, opening hours. (Default: 0)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namedetails=[0|1]"))),(0,r.kt)("p",null,"Include a list of alternative names in the results. These may include\nlanguage variants, references, operator and brand. (Default: 0)"),(0,r.kt)("h3",{id:"language-of-results"},"Language of results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accept-language=<browser language string>"))),(0,r.kt)("p",null,"Preferred language order for showing search results, overrides the value\nspecified in the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language"},'"Accept-Language" HTTP header'),".\nEither use a standard RFC2616 accept-language string or a simple\ncomma-separated list of language codes."),(0,r.kt)("h3",{id:"result-limitation"},"Result limitation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"countrycodes=<countrycode>[,<countrycode>][,<countrycode>]..."))),(0,r.kt)("p",null,"Limit search results to one or more countries. ",(0,r.kt)("inlineCode",{parentName:"p"},"<countrycode>")," must be the\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"},"ISO 3166-1alpha2")," code,\ne.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"gb")," for the United Kingdom, ",(0,r.kt)("inlineCode",{parentName:"p"},"de")," for Germany."),(0,r.kt)("p",null,"Each place in Nominatim is assigned to one country code based\non OSM country boundaries. In rare cases a place may not be in any country\nat all, for example, in international waters."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exclude_place_ids=<place_id,[place_id],[place_id]"))),(0,r.kt)("p",null,"If you do not want certain OSM objects to appear in the search\nresult, give a comma separated list of the ",(0,r.kt)("inlineCode",{parentName:"p"},"place_id"),"s you want to skip.\nThis can be used to retrieve additional search results. For example, if a\nprevious query only returned a few results, then including those here would\ncause the search to return other, less accurate, matches (if possible)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"limit=<integer>"))),(0,r.kt)("p",null,"Limit the number of returned results. (Default: 10, Maximum: 50)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"viewbox=<x1>,<y1>,<x2>,<y2>"))),(0,r.kt)("p",null,"The preferred area to find search results. Any two corner points of the box\nare accepted as long as they span a real box. ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is longitude,\n",(0,r.kt)("inlineCode",{parentName:"p"},"y")," is latitude."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bounded=[0|1]"))),(0,r.kt)("p",null,"When a viewbox is given, restrict the result to items contained within that\nviewbox (see above). When ",(0,r.kt)("inlineCode",{parentName:"p"},"viewbox")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bounded=1")," are given, an amenity\nonly search is allowed. Give the special keyword for the amenity in square\nbrackets, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"[pub]")," and a selection of objects of this type is returned.\nThere is no guarantee that the result is complete. (Default: 0)"),(0,r.kt)("h3",{id:"polygon-output"},"Polygon output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"polygon_geojson=1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"polygon_kml=1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"polygon_svg=1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"polygon_text=1"))),(0,r.kt)("p",null,"Output geometry of results as a GeoJSON, KML, SVG or WKT. Only one of these\noptions can be used at a time. (Default: 0)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"polygon_threshold=0.0"))),(0,r.kt)("p",null,"Return a simplified version of the output geometry. The parameter is the\ntolerance in degrees with which the geometry may differ from the original\ngeometry. Topology is preserved in the result. (Default: 0.0)"),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"email=<valid email address>"))),(0,r.kt)("p",null,"If you are making large numbers of request please include an appropriate email\naddress to identify your requests (only relevant when using the service in the internet)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dedupe=[0|1]"))),(0,r.kt)("p",null,"Sometimes you have several objects in OSM identifying the same place or\nobject in reality. The simplest case is a street being split into many\ndifferent OSM ways due to different characteristics. Nominatim will\nattempt to detect such duplicates and only return one match unless\nthis parameter is set to 0. (Default: 1)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"debug=[0|1]"))),(0,r.kt)("p",null,'Output assorted developer debug information. Data on internals of Nominatim\'s\n"Search Loop" logic, and SQL queries. The output is (rough) HTML format.\nThis overrides the specified machine readable format. (Default: 0)'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h5",{id:"xml-with-kml-polygon"},"XML with KML polygon"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/search.html?q=\u05e0\u05d5\u05d4+\u05e9\u05d0\u05e0\u05df+20+\u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd&polygon_geojson=1&addressdetails=1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="XML with KML polygon"',title:'"XML',with:!0,KML:!0,'polygon"':!0},'  <searchresults timestamp="Mon, 23 Jan 23 11:14:56 +0000"\n    attribution="Data \xa9 OpenStreetMap contributors, ODbL 1.0. http://www.openstreetmap.org/copyright"\n    querystring="\u05e0\u05d5\u05d4 \u05e9\u05d0\u05e0\u05df 20 \u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd" exclude_place_ids="135102101"\n    more_url="<VECTOR-NOMINATIM-SERVICE_URL>/search/?q=%D7%A0%D7%95%D7%94+%D7%A9%D7%90%D7%A0%D7%9F+20+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D&addressdetails=1&polygon_geojson=1&exclude_place_ids=135102101&format=xml&accept-language=en-GB%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8">\n    <place place_id="135102101" osm_type="way" osm_id="117395912" place_rank="26" address_rank="26"\n      boundingbox="31.7701362,31.7728728,35.2005205,35.2011552" geojson="{" type":" LineString"," coordinates":[[35.2005205,31.7728728],[35.2006515,31.7727207],[35.2008554,31.7724425],[35.2008817,31.7722532],[35.2009251,31.7719408],[35.2010378,31.7709603],[35.2010813,31.77059],[35.2011075,31.7703674],[35.2011369,31.7702248],[35.2011552,31.7701362]]}" lat="31.7719408"\n      lon="35.2009251"\n      display_name="Nave Shaanan, Nayot, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9218812, Israel"\n      class="highway" type="residential" importance="0.10001">\n      <road>Nave Shaanan</road>\n      <suburb>Nayot</suburb>\n      <city>Jerusalem</city>\n      <state_district>Jerusalem Subdistrict</state_district>\n      <state>Jerusalem District</state>\n      <ISO3166-2-lvl4>IL-JM</ISO3166-2-lvl4>\n      <postcode>9218812</postcode>\n      <country>Israel</country>\n      <country_code>il</country_code>\n    </place>\n  </searchresults>\n')),(0,r.kt)("h5",{id:"json-with-svg-polygon"},"JSON with SVG polygon"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/search.html?q=\u05e9\u05d3\u05e8\u05d5\u05ea+\u05e8\u05d5\u05d8\u05e9\u05d9\u05dc\u05d3+\u05ea\u05dc+\u05d0\u05d1\u05d9\u05d1&format=jsonv2&addressdetails=1&limit=1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON with SVG polygon"',title:'"JSON',with:!0,SVG:!0,'polygon"':!0},'    {\n        "place_id": 144435067,\n        "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n        "osm_type": "way",\n        "osm_id": 154741757,\n        "boundingbox": [\n            "32.0635149",\n            "32.0681999",\n            "34.7729215",\n            "34.7779348"\n        ],\n        "lat": "32.0654291",\n        "lon": "34.7766695",\n        "display_name": "Rothschild Boulevard, Tel Aviv, Lev Tel Aviv, Tel Aviv-Yafo, Tel Aviv Subdistrict, Tel Aviv District, 6688209, Israel",\n        "class": "highway",\n        "type": "tertiary",\n        "importance": 0.10000999999999993,\n        "address": {\n            "road": "Rothschild Boulevard",\n            "residential": "Tel Aviv",\n            "suburb": "Lev Tel Aviv",\n            "city": "Tel Aviv-Yafo",\n            "state_district": "Tel Aviv Subdistrict",\n            "state": "Tel Aviv District",\n            "ISO3166-2-lvl4": "IL-TA",\n            "postcode": "6688209",\n            "country": "Israel",\n            "country_code": "il"\n        },\n        "svg": "M 34.7779348 -32.0681999 L 34.7779248 -32.0681693 34.777464 -32.0667233 34.7774456 -32.0666655 34.7774298 -32.0666189 34.7771958 -32.0659273 34.7767089 -32.0654665 34.7766695 -32.0654291 34.7755674 -32.0643757 34.7748309 -32.0641328 34.7747835 -32.0641179 34.7747331 -32.0641021 34.7744227 -32.0640012 34.7741919 -32.0639261 34.7740025 -32.0638618 34.7737944 -32.0637997 34.7737636 -32.0637897 34.7729979 -32.0635408 34.7729506 -32.0635243 34.7729215 -32.0635149"\n    }\n')),(0,r.kt)("h5",{id:"json-with-address-details"},"JSON with address details"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/search.html?addressdetails=1&q=bakery+in+beer+sheba+&format=json&limit=1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON with address details"',title:'"JSON',with:!0,address:!0,'details"':!0},'    {\n        "place_id": 15852500,\n        "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n        "osm_type": "node",\n        "osm_id": 1772765812,\n        "boundingbox": [\n            "31.2447187",\n            "31.2448187",\n            "34.8124668",\n            "34.8125668"\n        ],\n        "lat": "31.2447687",\n        "lon": "34.8125168",\n        "display_name": "Harishonim bakery, Eliyahu Nawi, Beersheba Industrial Area, Beer-Sheba, Beersheba Subdistrict, South District, 8441410, Israel",\n        "class": "shop",\n        "type": "bakery",\n        "importance": 0.40001,\n        "icon": "<VECTOR-NOMINATIM-SERVICE_URL>/ui/mapicons/shopping_bakery.p.20.png",\n        "address": {\n            "shop": "Harishonim bakery",\n            "road": "Eliyahu Nawi",\n            "suburb": "Beersheba Industrial Area",\n            "city": "Beer-Sheba",\n            "state_district": "Beersheba Subdistrict",\n            "state": "South District",\n            "ISO3166-2-lvl4": "IL-D",\n            "postcode": "8441410",\n            "country": "Israel",\n            "country_code": "il"\n        }\n    }\n')),(0,r.kt)("h5",{id:"geojson"},"GeoJSON"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/search.html?q=\u05d7\u05d5\u05e8\u05d1+15+\u05d7\u05d9\u05e4\u05d4&format=geojson")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="GeoJSON Format"',title:'"GeoJSON','Format"':!0},'{\n    "type": "FeatureCollection",\n    "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n    "features": [\n        {\n            "type": "Feature",\n            "properties": {\n                "place_id": 123700904,\n                "osm_type": "way",\n                "osm_id": 60468022,\n                "display_name": "Horev Center, 15, Horev, Ahuzzat Shemuel, Carmel Heights District, Haifa, Haifa Subdistrict, Haifa District, 3434120, Israel",\n                "place_rank": 30,\n                "category": "shop",\n                "type": "mall",\n                "importance": 0.11000999999999997\n            },\n            "bbox": [\n                34.9867531,\n                32.7841525,\n                34.9877418,\n                32.785079\n            ],\n            "geometry": {\n                "type": "Point",\n                "coordinates": [\n                    34.98706599757996,\n                    32.7845887\n                ]\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h5",{id:"geocodejson"},"GeocodeJSON"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/search.html?q=\u05d4\u05db\u05d5\u05ea\u05dc+\u05d4\u05de\u05e2\u05e8\u05d1\u05d9&format=geocodejson")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="GeocodeJSON Format"',title:'"GeocodeJSON','Format"':!0},'{\n    "type": "FeatureCollection",\n    "geocoding": {\n        "version": "0.1.0",\n        "attribution": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n        "licence": "ODbL",\n        "query": "\u05d4\u05db\u05d5\u05ea\u05dc \u05d4\u05de\u05e2\u05e8\u05d1\u05d9"\n    },\n    "features": [\n        {\n            "type": "Feature",\n            "properties": {\n                "geocoding": {\n                    "place_id": 267010108,\n                    "osm_type": "way",\n                    "osm_id": 817206833,\n                    "osm_key": "amenity",\n                    "osm_value": "place_of_worship",\n                    "type": "house",\n                    "label": "Western Wall, Wilson\'s Arch, Jewish Quarter, Old City, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9511208, Israel",\n                    "name": "Western Wall"\n                }\n            },\n            "geometry": {\n                "type": "Point",\n                "coordinates": [\n                    35.23446114230339,\n                    31.776734949999998\n                ]\n            }\n        }\n    ]\n}\n')))}c.isMDXComponent=!0}}]);