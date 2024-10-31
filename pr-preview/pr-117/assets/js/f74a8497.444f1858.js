"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3907],{37414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(74848),o=n(28453);const i={id:"dem-getting-started",slug:"dem-getting-started",title:"Getting started",tags:["guide","DEM","DTM","DSM","terrain","getting-started"]},c=void 0,s={id:"MapColonies/DEM/Guides/dem-getting-started",title:"Getting started",description:"Step by step guide",source:"@site/docs/MapColonies/DEM/Guides/DEM_getting_started.md",sourceDirName:"MapColonies/DEM/Guides",slug:"/MapColonies/DEM/Guides/dem-getting-started",permalink:"/developer-portal/pr-preview/pr-117/docs/MapColonies/DEM/Guides/dem-getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/DEM/Guides/DEM_getting_started.md",tags:[{inline:!0,label:"guide",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/guide"},{inline:!0,label:"DEM",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/dem"},{inline:!0,label:"DTM",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/dtm"},{inline:!0,label:"DSM",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/dsm"},{inline:!0,label:"terrain",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/terrain"},{inline:!0,label:"getting-started",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/getting-started"}],version:"current",frontMatter:{id:"dem-getting-started",slug:"dem-getting-started",title:"Getting started",tags:["guide","DEM","DTM","DSM","terrain","getting-started"]},sidebar:"gettingStartedSidebar",previous:{title:"Enable Hardware Acceleration",permalink:"/developer-portal/pr-preview/pr-117/docs/MapColonies/3D/Guides/HardwareAcceleration"}},a={},d=[{value:"Step by step guide",id:"step-by-step-guide",level:2},{value:"Flow diagram",id:"flow-diagram",level:2},{value:"Query CSW catalog (Step 1)",id:"query-csw-catalog-step-1",level:2},{value:"Get DEM metadata (Step 2)",id:"get-dem-metadata-step-2",level:2},{value:"Get terrain provider URI (Step 2.1, optional)",id:"get-terrain-provider-uri-step-21-optional",level:2},{value:"Using catalog data (Step 3)",id:"using-catalog-data-step-3",level:2},{value:"Construct Client (Step 3.1)",id:"construct-client-step-31",level:2},{value:"Cesium",id:"cesium",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"step-by-step-guide",children:"Step by step guide"}),"\n",(0,r.jsxs)(t.p,{children:["The following guide will help you understand, ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Step-by-step"})})," the best practices of how to work with the Map Colonies ",(0,r.jsx)(t.strong,{children:"DEM"})," Catalog and how to consume mapping products in a ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"dynamic way"})})," (materials might be changed or added)"]}),"\n",(0,r.jsx)(t.h2,{id:"flow-diagram",children:"Flow diagram"}),"\n",(0,r.jsx)(t.mermaid,{value:"flowchart LR\n    subgraph  Prerequisite\n      direction LR\n      a1[Define filter]\n      a2[Get Auth Token]\n    end\n\n    a1 -- filter --\x3e B[STEP 1<br/> Query CSW catalog]\n    a2 -- token --\x3e B\n    subgraph  Metadata drill-down\n      direction LR\n      c1[STEP 2<br/>Get DEM metadata]\n      c2[STEP 2.1 optional<br/>Get terrain provider URI]\n    end\n    B -- xml --\x3e c1\n    B -- xml --\x3e c2\n    c1 -. <i>IN DEVELOPMENT</i> <br/>metadata<br/>of available for <b>export</b> data .-> E[STEP 3<br/>Your system]\n    c2 -- terrain_URI --\x3e D[STEP 3.1<br/>Cesium]\n\n    linkStyle 4 color:green,stroke:#f4cccc,stroke-width:5px %% Arrow "}),"\n",(0,r.jsx)(t.h2,{id:"query-csw-catalog-step-1",children:"Query CSW catalog (Step 1)"}),"\n",(0,r.jsxs)(t.p,{children:["Query ",(0,r.jsx)(t.strong,{children:"DEM CSW catalog"})," service to find item(s) according to desired filter ",(0,r.jsx)(t.a,{href:"/docs/ogc/protocols/ogc-csw/ogc-csw-examples",children:"examples are here"})]}),"\n",(0,r.jsxs)(t.p,{children:["Filter should be based on ",(0,r.jsx)(t.a,{href:"/docs/MapColonies/DEM/Services/catalog/catalog-profile-v1",children:"DEM profile"})]}),"\n",(0,r.jsxs)(t.p,{children:["Example query based on ",(0,r.jsx)(t.code,{children:"mc:classification"})," profile field"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",metastring:'title="GetRecords Request"',children:'POST Request\n\nurl:\n\'<DEM-CATALOG-SERVICE_URL>/csw\'\n\nbody (XML):\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords outputFormat="application/xml"  outputSchema="http://schema.mapcolonies.com/dem" resultType="results" service="CSW" version="2.0.2" startPosition="1" maxRecords="200" xmlns:mc="http://schema.mapcolonies.com/dem" xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc">\n    <csw:Query typeNames="csw:Record">\n        <csw:ElementSetName>full</csw:ElementSetName>\n        <csw:Constraint version="1.1.0">\n            <ogc:Filter>\n                <ogc:And>\n                    <ogc:PropertyIsEqualTo>\n                        <ogc:PropertyName>mc:classification</ogc:PropertyName>\n                        <ogc:Literal>5</ogc:Literal>\n                    </ogc:PropertyIsEqualTo>\n                    <ogc:PropertyIsEqualTo>\n                        <ogc:PropertyName>mc:productType</ogc:PropertyName>\n                        <ogc:Literal>DTM</ogc:Literal>\n                    </ogc:PropertyIsEqualTo>\n                </ogc:And>\n            </ogc:Filter>\n        </csw:Constraint>\n    </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You will get GetRecords XML Response with product ",(0,r.jsx)(t.strong,{children:"metadata"}),"."]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",metastring:'title="Search Results Example"',children:'    <?xml version="1.0" encoding="UTF-8"?>\n    <csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:mc="http://schema.mapcolonies.com/dem" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">\n    <csw:SearchStatus timestamp="2022-03-27T06:45:54Z" />\n    <csw:SearchResults numberOfRecordsMatched="2" numberOfRecordsReturned="2" nextRecord="0" recordSchema="http://schema.mapcolonies.com/dem" elementSet="full">\n        <mc:MCDEMRecord>\n            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>\n            <mc:classification>5</mc:classification>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[31.2603,33.4345],[31.2603,34.4888],[32.3353,34.4888],[32.3353,33.4345],[31.2603,33.4345]]]}</mc:footprint>\n            <mc:geographicArea>\u05d9\u05e9\u05e8\u05d0\u05dc</mc:geographicArea>\n            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:id>\n            <mc:links scheme="WMTS_LAYER" name="" description="">http://dem-server/15211-65da-4523-9d6f-08016ad51b0d....</mc:links>\n            <mc:producerName>DAVID</mc:producerName>\n            <mc:productBBox>31.2603,33.4345,32.3353,34.4888</mc:productBBox>\n            <mc:productId>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:productId>\n            <mc:productName>\u05de\u05d5\u05d3\u05dc \u05e4\u05e8\u05d9\u05d6</mc:productName>\n            <mc:productType>DTM</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionMethod>photogrammetric</mc:productionMethod>\n            <mc:productionSystem>P-30</mc:productionSystem>\n            <mc:productionSystemVersion>1</mc:productionSystemVersion>\n            <mc:region>\u05e6\u05e4\u05d5\u05df</mc:region>\n            <mc:sensors>sensor1</mc:sensors>\n            <mc:imagingTimeEndUTC>2022-06-15T10:39:00Z</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2022-06-15T10:39:00Z</mc:imagingTimeBeginUTC>\n            <mc:SRS>4567</mc:SRS>\n            <mc:SRSName>WGS24GEO</mc:SRSName>\n            <mc:type>RECORD_DEM</mc:type>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>33.4345 31.2603</ows:LowerCorner>\n                <ows:UpperCorner>34.4888 32.3353</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MCDEMRecord>\n        <mc:MCDEMRecord>\n            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>\n            <mc:classification>5</mc:classification>\n            <mc:creationDateUTC>2022-06-15</mc:creationDateUTC>\n            <mc:description>srtm100</mc:description>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[35.2670012825,32.5856881598],[35.2670012825,32.6300363309],[35.3105702702,32.6300363309],[35.3105702702,32.5856881598],[35.2670012825,32.5856881598]]]}</mc:footprint>\n            <mc:geographicArea>North</mc:geographicArea>\n            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>11111111-1111-1111-1111-111111111111</mc:id>\n            <mc:links scheme="TERRAIN_QMESH" name="" description="">http://terrain-server.com/terrains/srtm100</mc:links>\n            <mc:producerName>MIKI</mc:producerName>\n            <mc:productBBox>35.2670012825,32.5856881598,35.3105702702,32.6300363309</mc:productBBox>\n            <mc:productId>11111111-1111-1111-1111-111111111111</mc:productId>\n            <mc:productName>srtm100</mc:productName>\n            <mc:productType>DTM</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionMethod></mc:productionMethod>\n            <mc:productionSystem></mc:productionSystem>\n            <mc:productionSystemVersion>1</mc:productionSystemVersion>\n            <mc:region>Israel</mc:region>\n            <mc:sensors>UNDEFINED</mc:sensors>\n            <mc:imagingTimeEndUTC>2022-06-15</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2022-06-15</mc:imagingTimeBeginUTC>\n            <mc:SRS>4326</mc:SRS>\n            <mc:SRSName>WGS84GEO</mc:SRSName>\n            <mc:type>RECORD_DEM</mc:type>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>32.5856881598 35.2670012825</ows:LowerCorner>\n                <ows:UpperCorner>32.6300363309 35.3105702702</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MCDEMRecord>\n    </csw:SearchResults>\n    </csw:GetRecordsResponse>\n'})})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Authentication must be integrated in order to communicate with Catalog services."}),(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.strong,{children:["See the principles ",(0,r.jsx)(t.a,{href:"/docs/MapColonies/authentication",children:"here"})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"get-dem-metadata-step-2",children:"Get DEM metadata (Step 2)"}),"\n",(0,r.jsx)(t.p,{children:"In the Response, look for desired data according to profile definition."}),"\n",(0,r.jsx)(t.h2,{id:"get-terrain-provider-uri-step-21-optional",children:"Get terrain provider URI (Step 2.1, optional)"}),"\n",(0,r.jsx)(t.p,{children:"In the Response, look for"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",metastring:'title="Extract link for terrain provider"',children:'<mc:links scheme="TERRAIN_QMESH" name="srtm100">\n  http://terrain-server.com/terrains/srtm100\n</mc:links>\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["You should extract the ",(0,r.jsx)(t.code,{children:"<mc:links>"})," ",(0,r.jsx)("u",{children:"element"})," value as TERRAIN_URL variable, which is a terrain provider consumption URL for the following steps."]})})}),"\n",(0,r.jsx)(t.h2,{id:"using-catalog-data-step-3",children:"Using catalog data (Step 3)"}),"\n",(0,r.jsx)(t.p,{children:"In the future, you'll be able to export catalog data( elevation raw data in TIFF format ) after filtering."}),"\n",(0,r.jsx)(t.h2,{id:"construct-client-step-31",children:"Construct Client (Step 3.1)"}),"\n",(0,r.jsx)(t.p,{children:"Now, after you got all product metadata that you need by querying our Catalog, lets actually use it in your client application."}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["Below examples are based on ",(0,r.jsx)(t.code,{children:"Pseudo code"}),", you will have to adapt it in your own application to make it work."]})})}),"\n",(0,r.jsx)(t.h3,{id:"cesium",children:"Cesium"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"The minimum required version for cesium is v84."})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'// **Optional** add to Cesium terrain provider in order to clamp 3d models to the ground or investigate terrain \nviewer.terrainProvider = new Cesium.TerrainProvider({\n  url: new Cesium.Resource({\n    url: "<TERRAIN_URL>",\n    queryParameters: {\n      "token": "<token>",\n    },\n  }),\n});\n...\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"<TERRAIN_URL>"})," with the URL link that you got from ",(0,r.jsx)(t.strong,{children:"Step 2.1 (optional)"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"<token>"})," with the token you have."]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var r=n(96540);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);