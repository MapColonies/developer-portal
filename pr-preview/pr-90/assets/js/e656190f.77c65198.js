"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[981],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18679:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:r},t)}},73992:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(87462),a=r(67294),o=r(86010),s=r(72957),l=r(16550),i=r(75238),c=r(33609),p=r(92560);function u(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=g({queryString:r,groupId:n}),[u,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=i??u;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var h=r(51048);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),m=e=>{const t=e.currentTarget,r=p.indexOf(t),n=c[r].value;n!==l&&(u(t),i(n))},d=e=>{var t;let r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;r=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;r=p[t]??p[p.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},s,{className:(0,o.Z)("tabs__item",w.tabItem,null==s?void 0:s.className,{"tabs__item--active":l===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",w.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return a.createElement(b,(0,n.Z)({key:String(t)},e))}},63299:(e,t,r)=>{r(67294),r(39962)},7317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(73992),s=r(18679);r(63299);const l={id:"raster-export-guide",slug:"raster-export-guide",title:"Export Guide",tags:["guide","export","raster"]},i=void 0,c={unversionedId:"MapColonies/Raster/Guides/raster-export-guide",id:"MapColonies/Raster/Guides/raster-export-guide",title:"Export Guide",description:"Export Guide step-by-step",source:"@site/docs/MapColonies/Raster/Guides/raster-export.mdx",sourceDirName:"MapColonies/Raster/Guides",slug:"/MapColonies/Raster/Guides/raster-export-guide",permalink:"/developer-portal/pr-preview/pr-90/docs/MapColonies/Raster/Guides/raster-export-guide",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/Raster/Guides/raster-export.mdx",tags:[{label:"guide",permalink:"/developer-portal/pr-preview/pr-90/docs/tags/guide"},{label:"export",permalink:"/developer-portal/pr-preview/pr-90/docs/tags/export"},{label:"raster",permalink:"/developer-portal/pr-preview/pr-90/docs/tags/raster"}],version:"current",frontMatter:{id:"raster-export-guide",slug:"raster-export-guide",title:"Export Guide",tags:["guide","export","raster"]},sidebar:"gettingStartedSidebar",previous:{title:"Getting started",permalink:"/developer-portal/pr-preview/pr-90/docs/MapColonies/Raster/Guides/raster-getting-started"},next:{title:"Getting Started",permalink:"/developer-portal/pr-preview/pr-90/docs/MapColonies/3D/Guides/3d-getting-started"}},p={},u=[{value:"Export Guide step-by-step",id:"export-guide-step-by-step",level:2},{value:"Flow diagram",id:"flow-diagram",level:2},{value:"Query Catalog Service (Step 1)",id:"query-catalog-service-step-1",level:2},{value:"Use Export Service (Step 2)",id:"use-export-service-step-2",level:2},{value:"Wait for callback (Step 3)",id:"wait-for-callback-step-3",level:2}],m={toc:u},d="wrapper";function g(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"export-guide-step-by-step"},"Export Guide step-by-step"),(0,a.kt)("p",null,"The following guide will help you understand, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Step-by-step"))," the best practices of how to work with the Map Colonies Export Sevice and how to export Mapping data to offline consumers in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"GPKG"))," format"),(0,a.kt)("p",null,"Export service Reference is ",(0,a.kt)("a",{parentName:"p",href:"/docs/MapColonies/Raster/services/raster-export"},"here")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," In order to get the layer id (mc:id) you have the following options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open map-colonies catalog application and locate the required layer",(0,a.kt)("figure",null,(0,a.kt)("img",{src:r(91211).Z,style:{display:"block",marginLeft:"auto",marginRight:"auto"}}))),(0,a.kt)("li",{parentName:"ol"},"Query all records via CSW GetRecords operation and search it in the result response")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ogc/protocols/examples/ogc-csw-examples"},"Query Examples"))),(0,a.kt)("h2",{id:"flow-diagram"},"Flow diagram"),(0,a.kt)("p",null,"The following flow will show you one of our main use-case's"),(0,a.kt)("mermaid",{value:"flowchart LR\n    subgraph CSW\n      direction LR\n      b1[STEP 1 <br/> Query CSW catalog]\n      b1 --\x3e b3[STEP 3<br/>Get layer id - mc:id]\n    end\n\n    subgraph  Prerequisite\n      direction LR\n      a1[Get Product_ID]\n      a2[Get Auth Token]\n    end\n\n    a1 -- product_id --\x3e b1\n    a2 -- token --\x3e b1"}),(0,a.kt)("h2",{id:"query-catalog-service-step-1"},"Query Catalog Service (Step 1)"),(0,a.kt)("p",null,"Query ",(0,a.kt)("strong",{parentName:"p"},"RASTER CSW catalog")," service to find item(s) according to desired filter ",(0,a.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/examples/ogc-csw-examples"},"example are here"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Pay attention to set the following parameter 'outputSchema=\"",(0,a.kt)("a",{parentName:"p",href:"http://schema.mapcolonies.com/raster%22'"},"http://schema.mapcolonies.com/raster\"'")," in order to get full catalog data")),(0,a.kt)("p",null,"There are a few ways to acquire the productId, for example:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"SpecificLayer",label:"Specific Layer",mdxType:"TabItem"},(0,a.kt)("p",null,"To fetch a specific layer you need to aquire 2 properties values:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"productType")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"productId"),"\nTo get unique product when you already have the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"productType"))," and ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"productId"))," you can use the following query (both can be coppied from our catalog app, for example for ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Best Orthophoto"))," use the following)")),(0,a.kt)("p",null,"POST Request"),(0,a.kt)("p",null,"url:\n",(0,a.kt)("inlineCode",{parentName:"p"},"'<RASTER-CATALOG-SERVICE_URL>/csw'")),(0,a.kt)("p",null,"body (XML):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1" outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >\n  <csw:Query typeNames="mc:MCRasterRecord">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <And>\n          <PropertyIsEqualTo>\n            <PropertyName>mc:productType</PropertyName>\n            <Literal>OrthophotoBest</Literal>\n          </PropertyIsEqualTo>\n          <PropertyIsEqualTo>\n            <PropertyName>mc:productId</PropertyName>\n            <Literal>ORTHOPHOTO_MOSAIC_BASE</Literal>\n          </PropertyIsEqualTo>\n        </And>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n'))),(0,a.kt)(s.Z,{value:"fetchAll",label:"Fetch All Layers (Pagination)",mdxType:"TabItem"},(0,a.kt)("p",null,"You can enquire all raster products, use maxRecords and startPosition for pagination:"),(0,a.kt)("p",null,"POST Request"),(0,a.kt)("p",null,"url:\n",(0,a.kt)("inlineCode",{parentName:"p"},"'<RASTER-CATALOG-SERVICE_URL>/csw'")),(0,a.kt)("p",null,"body (XML):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" service="CSW" maxRecords="1"  startPosition="1"  outputSchema="http://schema.mapcolonies.com/raster" version="2.0.2" xmlns:mc="http://schema.mapcolonies.com/raster" >\n  <csw:Query typeNames="mc:MCRasterRecord">\n   <csw:ElementSetName>full</csw:ElementSetName>\n    <csw:Constraint version="1.1.0">\n      <Filter xmlns="http://www.opengis.net/ogc">\n        <PropertyIsEqualTo>\n          <PropertyName>mc:type</PropertyName>\n          <Literal>RECORD_RASTER</Literal>\n        </PropertyIsEqualTo>\n      </Filter>\n    </csw:Constraint>\n  </csw:Query>\n</csw:GetRecords>\n')))),(0,a.kt)("p",null,"You will get GetRecords XML Response with product ",(0,a.kt)("strong",{parentName:"p"},"metadata"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Response example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="GetRecords Response"',title:'"GetRecords','Response"':!0},'  <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n  \x3c!-- pycsw 2.7.dev0 --\x3e\n  <csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mc="http://schema.mapcolonies.com/raster" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">\n      <csw:SearchStatus timestamp="2022-02-15T15:08:58Z"/>\n      <csw:SearchResults numberOfRecordsMatched="2" numberOfRecordsReturned="1" nextRecord="2" recordSchema="http://schema.mapcolonies.com/raster" elementSet="full">\n          <mc:MCRasterRecord>\n              <mc:classification>4</mc:classification>\n              <mc:creationDateUTC>2022-02-13T13:04:23Z</mc:creationDateUTC>\n              <mc:description>World Wide 2020</mc:description>\n              <mc:footprint>{"type":"Polygon","coordinates":[[[-180,-90],[-180,90],[180,90],[180,-90],[-180,-90]]]}</mc:footprint>\n              <mc:minHorizontalAccuracyCE90>3</mc:minHorizontalAccuracyCE90>\n              <mc:id>3b3164a7-280d-4392-a82f-d60a76e69092</mc:id>\n              <mc:ingestionDate>2022-02-13T13:04:23Z</mc:ingestionDate>\n              <mc:insertDate>2022-02-13T13:04:41Z</mc:insertDate>\n              <mc:mimeType>image/jpeg</mc:mimeType>\n              <mc:links scheme="WMS" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/service?REQUEST=GetCapabilities\'</mc:links>\n              <mc:links scheme="WMS_BASE" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wms\'</mc:links>\n              <mc:links scheme="WMTS" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wmts/1.0.0/WMTSCapabilities.xml\'</mc:links>\n              <mc:links scheme="WMTS_KVP" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/service?REQUEST=GetCapabilities&SERVICE=WMTS\'</mc:links>\n              <mc:links scheme="WMTS_BASE" name="ORTHOPHOTO_MOSAIC_BASE" description="">\'<YOUR_MAPPROXY_URL>/wmts\'</mc:links>\n              <mc:maxResolutionMeter>0.1</mc:maxResolutionMeter>\n              <mc:producerName>IDFMU</mc:producerName>\n              <mc:productBBox>-180,-90,180,90</mc:productBBox>\n              <mc:productId>ORTHOPHOTO_MOSAIC_BASE</mc:productId>\n              <mc:productName>\u05d0\u05d5\u05e8\u05ea\u05d5\u05e4\u05d5\u05d8\u05d5 \u05de\u05ea\u05e2\u05d3\u05db\u05df</mc:productName>\n              <mc:productType>OrthophotoBest</mc:productType>\n              <mc:productVersion>1.0</mc:productVersion>\n              <mc:region>World</mc:region>\n              <mc:maxResolutionDeg>0.000171661376953125</mc:maxResolutionDeg>\n              <mc:sensors>UNDEFINED</mc:sensors>\n              <mc:imagingTimeEndUTC>2020-05-21</mc:imagingTimeEndUTC>\n              <mc:imagingTimeBeginUTC>2020-05-21</mc:imagingTimeBeginUTC>\n              <mc:SRS>4326</mc:SRS>\n              <mc:SRSName>WGS84GEO</mc:SRSName>\n              <mc:transparency>OPAQUE</mc:transparency>\n              <mc:type>RECORD_RASTER</mc:type>\n              <mc:updateDateUTC>2022-02-13T13:03:07Z</mc:updateDateUTC>\n              <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                  <ows:LowerCorner>-180.0 90.0</ows:LowerCorner>\n                  <ows:UpperCorner>180.0 90.0</ows:UpperCorner>\n              </ows:BoundingBox>\n          </mc:MCRasterRecord>\n      </csw:SearchResults>\n  </csw:GetRecordsResponse>\n'))),(0,a.kt)("h2",{id:"use-export-service-step-2"},"Use Export Service (Step 2)"),(0,a.kt)("p",null,"Now you need to make an export request for the desired layer."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/MapColonies/Raster/services/raster-export"},"Service Reference")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/MapColonies/raster/services/export/api"},"Service API")),(0,a.kt)("p",null,"POST Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "catalogRecordID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "domain": "RASTER",\n  "ROI": {\n    "type": "FeatureCollection",\n    "features": [\n      {\n        "type": "Feature",\n        "properties": {\n          "maxResolutionDeg": 0.0439453125,\n          "minResolutionDeg": 0.17578125\n        },\n        "geometry": {\n          "type": "Polygon",\n          "coordinates": [\n            [\n              [\n                34.82836896556114,\n                32.03918441418732\n              ],\n              [\n                34.81210152170695,\n                32.03918441418732\n              ],\n              [\n                34.81210152170695,\n                32.02539369969462\n              ],\n              [\n                34.82836896556114,\n                32.02539369969462\n              ],\n              [\n                34.82836896556114,\n                32.03918441418732\n              ]\n            ]\n          ]\n        }\n      }\n    ]\n  },\n  "artifactCRS": "4326",\n  "description": "export example",\n  "keywords": {\n    "foo": "kuku"\n  },\n  "parameters": {\n    "foo": "kuku"\n  },\n  "webhook": [\n    {\n      "events": [\n        "TASK_COMPLETED"\n      ],\n      "url": "https://webhook.com"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"wait-for-callback-step-3"},"Wait for callback (Step 3)"),(0,a.kt)("p",null,'Listen on "webhook url" that you provided for the response via the artifacts download url as explained in ',(0,a.kt)("a",{parentName:"p",href:"/docs/MapColonies/Raster/services/raster-export"},"Service Reference"),"\n... \ud83d\ude04 enjoy"))}g.isMDXComponent=!0},91211:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Id_catalog-ec6cfde509e173647f6ddc5b1f4752f6.png"}}]);