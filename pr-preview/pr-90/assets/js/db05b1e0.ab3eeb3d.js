"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[4745],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(87462),r=a(67294),o=a(86010),l=a(72957),i=a(16550),s=a(75238),p=a(33609),c=a(92560);function m(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=g({queryString:a,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??m;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var y=a(51048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==i&&(m(t),s(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:u},l,{className:(0,o.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function S(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function R(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(S,(0,n.Z)({},e,t)))}function b(e){const t=(0,y.Z)();return r.createElement(R,(0,n.Z)({key:String(t)},e))}},63299:(e,t,a)=>{a(67294),a(39962)},37289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(73992),l=a(18679);a(63299);const i={id:"raster-getting-started",slug:"raster-getting-started",title:"Getting started",tags:["guide","getting-started","raster","cesium","openlayers","leaflet"]},s=void 0,p={unversionedId:"MapColonies/Raster/Guides/raster-getting-started",id:"MapColonies/Raster/Guides/raster-getting-started",title:"Getting started",description:"Developer Guide step-by-step",source:"@site/docs/MapColonies/Raster/Guides/raster-getting-started.mdx",sourceDirName:"MapColonies/Raster/Guides",slug:"/MapColonies/Raster/Guides/raster-getting-started",permalink:"/developer-portal/pr-preview/pr-90/docs/MapColonies/Raster/Guides/raster-getting-started",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/Raster/Guides/raster-getting-started.mdx",tags:[{label:"guide",permalink:"/developer-portal/pr-preview/pr-90/docs/tags/guide"},{label:"getting-started",permalink:"/developer-portal/pr-preview/pr-90/docs/tags/getting-started"},{label:"raster",permalink:"/developer-portal/pr-preview/pr-90/docs/tags/raster"},{label:"cesium",permalink:"/developer-portal/pr-preview/pr-90/docs/tags/cesium"},{label:"openlayers",permalink:"/developer-portal/pr-preview/pr-90/docs/tags/openlayers"},{label:"leaflet",permalink:"/developer-portal/pr-preview/pr-90/docs/tags/leaflet"}],version:"current",frontMatter:{id:"raster-getting-started",slug:"raster-getting-started",title:"Getting started",tags:["guide","getting-started","raster","cesium","openlayers","leaflet"]},sidebar:"gettingStartedSidebar",next:{title:"Export Guide",permalink:"/developer-portal/pr-preview/pr-90/docs/MapColonies/Raster/Guides/raster-export-guide"}},c={},m=[{value:"Developer Guide step-by-step",id:"developer-guide-step-by-step",level:2},{value:"Flow diagram",id:"flow-diagram",level:2},{value:"Query Catalog Service (Step 1)",id:"query-catalog-service-step-1",level:2},{value:"Extract product Bounding Box (Step 2)",id:"extract-product-bounding-box-step-2",level:2},{value:"Get layer URI (Step 3)",id:"get-layer-uri-step-3",level:2},{value:"Get Layer Capabilities (Step 4)",id:"get-layer-capabilities-step-4",level:2},{value:"Construct Client side layer (Step 5)",id:"construct-client-side-layer-step-5",level:2},{value:"OpenLayers (6.x)",id:"openlayers-6x",level:3},{value:"Leaflet (1.x)",id:"leaflet-1x",level:3},{value:"Enrich Layer data (Step 6)",id:"enrich-layer-data-step-6",level:2}],u={toc:m},d="wrapper";function g(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"developer-guide-step-by-step"},"Developer Guide step-by-step"),(0,r.kt)("p",null,"The following guide will help you understand, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Step-by-step"))," the best practices of how to work with the Map Colonies Catalog and how to consume mapping products in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"dynamic way"))," (materials might be changed or added)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," In order to get the layer details (Product_ID, region, etc.) you have the following options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open map-colonies catalog application and locate the required layer"),(0,r.kt)("li",{parentName:"ol"},"Query all records via CSW GetRecords operation and search it in the result response - ",(0,r.kt)("a",{parentName:"li",href:"/docs/ogc/protocols/ogc-csw/ogc-csw-examples#getrecords"},"Query Examples Documentation"))),(0,r.kt)("h2",{id:"flow-diagram"},"Flow diagram"),(0,r.kt)("p",null,"The following flow will show you one of our main use-case's"),(0,r.kt)("mermaid",{value:"flowchart LR\n    subgraph CSW\n      direction LR\n      b1[STEP 1 <br/> Query CSW catalog] --\x3e b2[STEP 2<br/> Extract BBOX]\n      b1 --\x3e b3[STEP 3<br/>Get layer URI]\n    end\n\n    subgraph  Prerequisite\n      direction LR\n      a1[Get Product_ID]\n      a2[Get Auth Token]\n    end\n\n    a1 -- product_id --\x3e b1\n    a2 -- token --\x3e D\n    a2 -- token --\x3e b1\n    b3  -- layer_identifier --\x3e C[STEP 4<br/> Get Layer Capabilities]\n    b2 -- BBOX --\x3e D[STEP 5<br/> Cesium/OL]\n    C -- layer_params --\x3e D"}),(0,r.kt)("h2",{id:"query-catalog-service-step-1"},"Query Catalog Service (Step 1)"),(0,r.kt)("p",null,"Query ",(0,r.kt)("strong",{parentName:"p"},"RASTER CSW catalog")," service to find item(s) according to desired filter ",(0,r.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/ogc-csw/ogc-csw-examples"},"example are here"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Pay attention to set the following parameter 'outputSchema=\"",(0,r.kt)("a",{parentName:"p",href:"http://schema.mapcolonies.com/raster%22'"},"http://schema.mapcolonies.com/raster\"'")," in order to get full catalog data")),(0,r.kt)("p",null,"There are a few ways to acquire the productId, for example:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"SpecificLayer",label:"Specific Layer",mdxType:"TabItem"},(0,r.kt)("p",null,"To fetch a specific layer you need to aquire 2 properties values:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"productType")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"productId"),"\nTo get unique product when you already have the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"productType"))," and ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"productId"))," you can use the following query (both can be coppied from our catalog app, for example for ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Best Orthophoto"))," use the following)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'POST Request\n\nurl:\n\'<RASTER-CATALOG-SERVICE_URL>/csw\'\n\nbody (XML):\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1" outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >\n  <csw:Query typeNames="mc:MCRasterRecord">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <And>\n          <PropertyIsEqualTo>\n            <PropertyName>mc:productType</PropertyName>\n            <Literal>OrthophotoBest</Literal>\n          </PropertyIsEqualTo>\n          <PropertyIsEqualTo>\n            <PropertyName>mc:productId</PropertyName>\n            <Literal>ORTHOPHOTO_MOSAIC_BASE</Literal>\n          </PropertyIsEqualTo>\n        </And>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'))),(0,r.kt)(l.Z,{value:"fetchAll",label:"Fetch All Layers (Pagination)",mdxType:"TabItem"},(0,r.kt)("p",null,"You can enquire all raster products, use maxRecords and startPosition for pagination:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'POST Request\n\nurl:\n\'<RASTER-CATALOG-SERVICE_URL>/csw\'\n\nbody (XML):\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1"  outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >\n  <csw:Query typeNames="mc:MCRasterRecord">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsEqualTo>\n          <PropertyName>mc:type</PropertyName>\n          <Literal>RECORD_RASTER</Literal>\n        </PropertyIsEqualTo>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n')))),(0,r.kt)("p",null,"You will get GetRecords XML Response with product ",(0,r.kt)("strong",{parentName:"p"},"metadata"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Response example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="GetRecords Response"',title:'"GetRecords','Response"':!0},'  <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n  \x3c!-- pycsw 2.7.dev0 --\x3e\n  <csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mc="http://schema.mapcolonies.com/raster" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">\n      <csw:SearchStatus timestamp="2022-02-15T15:08:58Z"/>\n      <csw:SearchResults numberOfRecordsMatched="2" numberOfRecordsReturned="1" nextRecord="2" recordSchema="http://schema.mapcolonies.com/raster" elementSet="full">\n          <mc:MCRasterRecord>\n              <mc:classification>4</mc:classification>\n              <mc:creationDateUTC>2022-02-13T13:04:23Z</mc:creationDateUTC>\n              <mc:description>World Wide 2020</mc:description>\n              <mc:footprint>{"type":"Polygon","coordinates":[[[-180,-90],[-180,90],[180,90],[180,-90],[-180,-90]]]}</mc:footprint>\n              <mc:minHorizontalAccuracyCE90>3</mc:minHorizontalAccuracyCE90>\n              <mc:id>3b3164a7-280d-4392-a82f-d60a76e69092</mc:id>\n              <mc:ingestionDate>2022-02-13T13:04:23Z</mc:ingestionDate>\n              <mc:insertDate>2022-02-13T13:04:41Z</mc:insertDate>\n              <mc:mimeType>image/jpeg</mc:mimeType>\n              <mc:links scheme="WMS" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/service?REQUEST=GetCapabilities\'</mc:links>\n              <mc:links scheme="WMS_BASE" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wms\'</mc:links>\n              <mc:links scheme="WMTS" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wmts/1.0.0/WMTSCapabilities.xml\'</mc:links>\n              <mc:links scheme="WMTS_KVP" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS\'</mc:links>\n              <mc:links scheme="WMTS_BASE" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wmts\'</mc:links>\n              <mc:maxResolutionMeter>0.1</mc:maxResolutionMeter>\n              <mc:producerName>IDFMU</mc:producerName>\n              <mc:productBBox>-180,-90,180,90</mc:productBBox>\n              <mc:productId>ORTHOPHOTO_MOSAIC_BASE</mc:productId>\n              <mc:productName>\u05d0\u05d5\u05e8\u05ea\u05d5\u05e4\u05d5\u05d8\u05d5 \u05de\u05ea\u05e2\u05d3\u05db\u05df</mc:productName>\n              <mc:productType>OrthophotoBest</mc:productType>\n              <mc:productVersion>1.0</mc:productVersion>\n              <mc:region>World</mc:region>\n              <mc:maxResolutionDeg>0.000171661376953125</mc:maxResolutionDeg>\n              <mc:sensors>UNDEFINED</mc:sensors>\n              <mc:imagingTimeEndUTC>2020-05-21</mc:imagingTimeEndUTC>\n              <mc:imagingTimeBeginUTC>2020-05-21</mc:imagingTimeBeginUTC>\n              <mc:SRS>4326</mc:SRS>\n              <mc:SRSName>WGS84GEO</mc:SRSName>\n              <mc:transparency>OPAQUE</mc:transparency>\n              <mc:type>RECORD_RASTER</mc:type>\n              <mc:updateDateUTC>2022-02-13T13:03:07Z</mc:updateDateUTC>\n              <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                  <ows:LowerCorner>-180.0 90.0</ows:LowerCorner>\n                  <ows:UpperCorner>180.0 90.0</ows:UpperCorner>\n              </ows:BoundingBox>\n          </mc:MCRasterRecord>\n      </csw:SearchResults>\n  </csw:GetRecordsResponse>\n'))),(0,r.kt)("h2",{id:"extract-product-bounding-box-step-2"},"Extract product Bounding Box (Step 2)"),(0,r.kt)("p",null,"Now you want to find LAYER product BBOX (aka \u2018extent\u2019) from the metadata response of the product.\nIn the Response, look for ",(0,r.kt)("inlineCode",{parentName:"p"},"<ows:BoundingBox></ows:BoundingBox>")," element."),(0,r.kt)("p",null,"Another way to find the product extent:\nIn the Response, look for ",(0,r.kt)("inlineCode",{parentName:"p"},"<mc:footprint></mc:footprint>")," element.\nIn the example above - response XML file looks like this:\n",(0,r.kt)("inlineCode",{parentName:"p"},'<mc:footprint>{"type":"Polygon","coordinates":[[[-180,-90],[-180,90],[180,90],[180,-90],[-180,-90]]]}</mc:footprint>'),")"),(0,r.kt)("p",null,"Use any tool (CesiumJS, turfJS, etc..) to convert the footprint(GeoJSON) into a bounding box."),(0,r.kt)("p",null,"For example using CesiumJS and turfJS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Generate layer footprint"',title:'"Generate',layer:!0,'footprint"':!0},"import bbox from '@turf/bbox';\nimport { Rectangle } from 'cesium';\nimport { LayerRasterRecord } from '../models';\n\nexport const generateLayerRectangle = (layer: LayerRasterRecord): Rectangle => {\n  return Rectangle.fromDegrees(...bbox(layer.footprint));\n};\n\n")),(0,r.kt)("p",null,"After you\u2019ve got your product bounding box lets move to the next step\u2026"),(0,r.kt)("h2",{id:"get-layer-uri-step-3"},"Get layer URI (Step 3)"),(0,r.kt)("p",null,"In the Response, look for"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"WMTS (wmts capabilities) And WMTS_BASE (base wmts link exists also for those who prefer to use them)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<mc:links scheme="WMTS" name="[desired_layer_identifier]" description="">\n  \'<RASTER-RASTER-SERVING-SERVICE_URL>/wmts/1.0.0/WMTSCapabilities.xml\'\n</mc:links>\n<mc:links scheme="WMTS_KVP" name="[desired_layer_identifier]" description="">\n  \'<RASTER-RASTER-SERVING-SERVICE_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS\'\n</mc:links>\n<mc:links scheme="WMTS_BASE" name="[desired_layer_identifier]" description="">\n  \'<RASTER-RASTER-SERVING-SERVICE_URL>/wmts\'\n</mc:links>\n')),(0,r.kt)("p",null,"You need to save ",(0,r.kt)("inlineCode",{parentName:"p"},"[desired_layer_identifier]")," value for later use."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"You also may save ",(0,r.kt)("inlineCode",{parentName:"strong"},"<mc:links>")," ",(0,r.kt)("u",null,"element")," value, which is a layer consumption URL."))),(0,r.kt)("h2",{id:"get-layer-capabilities-step-4"},"Get Layer Capabilities (Step 4)"),(0,r.kt)("p",null,"Now, you need to fetch Raster's MapServer specified Layer metadata by sending ",(0,r.kt)("strong",{parentName:"p"},"GetCapabilities")," request.\nFirst - find the correct ",(0,r.kt)("strong",{parentName:"p"},"GetCapabilities URL"),". Best way to achieve it is by looking for ",(0,r.kt)("inlineCode",{parentName:"p"},'scheme="WMTS"')," property in the response of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#step-3"},"Step 3"))," and extract the GetCapabilities URL off it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<mc:links scheme="WMTS" name="[desired_layer_identifier]" description="">\n  \'<RASTER-RASTER-SERVING-SERVICE_URL>/wmts/1.0.0/WMTSCapabilities.xml\'\n</mc:links>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OR")," you can use wmts KVP capabilities"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Link for WMTS in KVP Format"',title:'"Link',for:!0,WMTS:!0,in:!0,KVP:!0,'Format"':!0},'<mc:links scheme="WMTS_KVP" name="[desired_layer_identifier]" description="">\n  \'<RASTER-RASTER-SERVING-SERVICE_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS\'\n</mc:links>\n')),(0,r.kt)("p",null,"Make a GET request to this link. The response contains the details of ",(0,r.kt)("strong",{parentName:"p"},"all")," available layers in following format."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:a(49752).Z,style:{display:"block",marginLeft:"auto",marginRight:"auto"}})),(0,r.kt)("p",null,"In the Response, look for LAYER where ",(0,r.kt)("inlineCode",{parentName:"p"},"<ows:Identifier>")," has saved ",(0,r.kt)("a",{parentName:"p",href:"#step-3"},"previously")," ",(0,r.kt)("inlineCode",{parentName:"p"},"[desired_layer_identifier]")),(0,r.kt)("p",null,"You can read more about ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"GetCapabilities"))," OGC format ",(0,r.kt)("a",{parentName:"p",href:"http://docs.opengeospatial.org/is/13-082r2/13-082r2.html"},"here")," \ud83c\udf10"),(0,r.kt)("p",null,"You need to ",(0,r.kt)("strong",{parentName:"p"},"save")," the following values in order to consume the layer later on ",(0,r.kt)("a",{parentName:"p",href:"#step-5"},"Step 5"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Alternative to ","\xa0"," ",(0,r.kt)("a",{parentName:"strong",href:"#step-3"},"Step 3")," way to get layer consumption URL"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"<Layer/>")," element include an exact WMTS URL template inside the child ",(0,r.kt)("inlineCode",{parentName:"p"},"<ResourceURL/>")," element. So, you can use it as well")),(0,r.kt)("h2",{id:"construct-client-side-layer-step-5"},"Construct Client side layer (Step 5)"),(0,r.kt)("p",null,"Now, after you got all product metadata that you need by querying our Catalog and MapProxy capabilities, lets actually use it in order to display it in real map viewer / application (clients)."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Below examples are based on ",(0,r.kt)("inlineCode",{parentName:"strong"},"Pseudo code"),", you will have to adapt it in your own application to make it work."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Important:")," only ",(0,r.kt)("strong",{parentName:"p"},"query parameter")," ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," is currently supported")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Cesium",label:"Cesium",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n...\n...\n\nconst catalogLayer = new Cesium.WebMapTileServiceImageryProvider({\n      url : '<LAYER_WMTS_URL>',                         // from Step_3 or Step_4\n      /*********************************************************************************/\n      /********     WHEN AUTH IS REQUIRED                                       ********/\n      /*********************************************************************************/\n      // url:new Cesium.Resource({\n      //  url: '<LAYER_WMTS_URL>',                      // from Step_3 or Step_4\n      //  headers: { 'X-API-KEY': RASTER_TOKEN },       // received RASTER auth token\n      //  queryParameters: { 'token': RASTER_TOKEN },   // received RASTER auth token -\n      //}),\n      layer : '[desired_layer_identifier]',             // from Step_3\n      style : '<LAYER_STYLE>',                          // from Step_4\n      format : '<LAYER_FORMAT>',                        // from Step_4\n      tileMatrixSetID : '<LAYER_TILE_MATRIX_SET_ID>',   // from Step_4\n      /*********************************************************************************/\n      /********     TILING SCHEME SHOULD BE 2 x 1                                ********/\n      /*********************************************************************************/\n      tilingScheme: new Cesium.GeographicTilingScheme(),\n      /*********************************************************************************/\n      /********     EXTENT SHOULD BE AS MUCH AS CLOSE TO LAYER ORIGIN FOOTPRINT ********/\n      /*********************************************************************************/\n      rectangle : <LAYER_EXTENT>,                       // from Step_2\n    });\n\nmap.addLayer(catalogLayer);\n...\n...\n...\n"))),(0,r.kt)(l.Z,{value:"OpenLayers (v6.x)",label:"OpenLayers (v6.x)",mdxType:"TabItem"},(0,r.kt)("h3",{id:"openlayers-6x"},"OpenLayers (6.x)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n...\n...\n    const parser = new WMTSCapabilities();\n    const capabilitiesResponse = await fetch('CapabilitiesURL');              // from Step_4\n    const capabilitiesText = await capabilitiesResponse.text();\n    const parserResult = parser.read(capabilitiesText);\n    const layerOptions = optionsFromCapabilities(parserResult, {\n      layer: '[desired_layer_identifier]'                                     // from Step_3\n    });\n    const layer = new TileLayer({ source: new WMTS(layerOptions), extent });  // from Step_2\n\n    map.addLayer(layer);\n...\n...\n...\n"))),(0,r.kt)(l.Z,{value:"Leaflet",label:"Leaflet (v1.x)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  import L from "leaflet";\n    ...\n    ...\n    ...\n    //urlTemplate example: https://maps/api/raster/v1/wmts/test-orthophoto/{TileMatrixSet}/{TileMatrix}{TileCol}/{TileRow}.jpeg\n    const parser = (urlTemplate) => {\n      return wmtsUrl\n    .replace("{TileMatrixSet}", \'<LAYER_TILE_MATRIX_SET_ID>\')         // from Step_4\n    .replace("{TileMatrix}", "{z}")\n    .replace("{TileRow}", "{y}")\n    .replace("{TileCol}", "{x}");\n    }\n\n    const bounds = L.latLngBounds([\n      [extent[1], extent[0]],                                         // from Step_2\n      [extent[3], extent[2]],                                         // from Step_2\n    ]);\n\n    const urlTemplate = \'<LAYER_WMTS_URL>\'                            // from Step_3 or Step_4\n    const parsedUrl = parser(urlTemplate)\n\n    const map = L.map("map", { crs: L.CRS.EPSG4326 }).setView([0, 0], 0);\n                                                                      //in case of queryParameter authentication:\n    const layer = L.tileLayer(parsedUrl + \'?token=${TOKEN}\',{   // received RASTER auth token\n      id : \'<desired_layer_identifier>\',                              // from Step_3\n      bounds\n    })\n\n    map.addLayer(layer);\n    ...\n    ...\n    ...\n')))),(0,r.kt)("p",null,"Replace all ",(0,r.kt)("inlineCode",{parentName:"p"},"<>")," place holders with the real values that we got from all previous steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"url - should be replaced by the URL that you got from ",(0,r.kt)("a",{parentName:"li",href:"#step-3"},"Step 3")," or ",(0,r.kt)("a",{parentName:"li",href:"#step-4"},"Step 4"),"."),(0,r.kt)("li",{parentName:"ul"},"layer - should be replaced with layer Product ID."),(0,r.kt)("li",{parentName:"ul"},"style - should be replaced with the value that you got from ",(0,r.kt)("a",{parentName:"li",href:"#step-4"},"Step 4"),"."),(0,r.kt)("li",{parentName:"ul"},"format - should be replaced with the value that you got from ",(0,r.kt)("a",{parentName:"li",href:"#step-4"},"Step 4")),(0,r.kt)("li",{parentName:"ul"},"tileMatrixSetID - how can you get it? from Response from ",(0,r.kt)("a",{parentName:"li",href:"#step-4"},"Step 4"),"."),(0,r.kt)("li",{parentName:"ul"},"tilingScheme"),(0,r.kt)("li",{parentName:"ul"},"rectangle - value should be the BBOX (extent that you got from ",(0,r.kt)("a",{parentName:"li",href:"#step-2"},"Step 2"),"."),(0,r.kt)("li",{parentName:"ul"},"Note - ",(0,r.kt)("strong",{parentName:"li"},"extent")," taken from step 2 - where bbox is calculated.")),(0,r.kt)("h3",{id:"leaflet-1x"},"Leaflet (1.x)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For ",(0,r.kt)("strong",{parentName:"p"},"headers api key")," see the following link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PaulLeCam/react-leaflet/issues/852#issuecomment-1495774676"},"https://github.com/PaulLeCam/react-leaflet/issues/852#issuecomment-1495774676"))),(0,r.kt)("h2",{id:"enrich-layer-data-step-6"},"Enrich Layer data (Step 6)"),(0,r.kt)("p",null,"In order to present catalog items in your system you can use following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mc:productName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mc:description")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rest")," ",(0,r.kt)("a",{parentName:"li",href:"/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v1"},"Raster profile definition"))))}g.isMDXComponent=!0},49752:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getcapabilities_response-251ff908d616aa3d2bc16405231f8106.png"}}]);