"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[1806],{37996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(74848),o=t(28453);const i={id:"3d-getting-started",slug:"3d-getting-started",title:"Getting Started",tags:["guide","3D","terrain","getting-started"]},s=void 0,c={id:"MapColonies/3D/Guides/3d-getting-started",title:"Getting Started",description:"Step by step guide",source:"@site/docs/MapColonies/3D/Guides/3D_getting_started.md",sourceDirName:"MapColonies/3D/Guides",slug:"/MapColonies/3D/Guides/3d-getting-started",permalink:"/developer-portal/pr-preview/pr-117/docs/MapColonies/3D/Guides/3d-getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/3D/Guides/3D_getting_started.md",tags:[{inline:!0,label:"guide",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/guide"},{inline:!0,label:"3D",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/3-d"},{inline:!0,label:"terrain",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/terrain"},{inline:!0,label:"getting-started",permalink:"/developer-portal/pr-preview/pr-117/docs/tags/getting-started"}],version:"current",frontMatter:{id:"3d-getting-started",slug:"3d-getting-started",title:"Getting Started",tags:["guide","3D","terrain","getting-started"]},sidebar:"gettingStartedSidebar",previous:{title:"Raster Export",permalink:"/developer-portal/pr-preview/pr-117/docs/MapColonies/Raster/Guides/raster-export-guide"},next:{title:"Extract Height from Mesh",permalink:"/developer-portal/pr-preview/pr-117/docs/MapColonies/3D/Guides/mesh-height-extraction"}},a={},d=[{value:"Step by step guide",id:"step-by-step-guide",level:2},{value:"Flow diagram",id:"flow-diagram",level:2},{value:"Query CSW catalog (Step 1)",id:"query-csw-catalog-step-1",level:2},{value:"Get layer URI (Step 2)",id:"get-layer-uri-step-2",level:2},{value:"Get terrain provider URI (Step 2.1, optional)",id:"get-terrain-provider-uri-step-21-optional",level:2},{value:"Step 3",id:"step-3",level:2},{value:"Construct Client side Layer",id:"construct-client-side-layer",level:3},{value:"Cesium",id:"cesium",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"step-by-step-guide",children:"Step by step guide"}),"\n",(0,r.jsxs)(n.p,{children:["The following guide will help you understand, ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Step-by-step"})})," the best practices of how to work with the Map Colonies ",(0,r.jsx)(n.strong,{children:"3D"})," Catalog and how to consume mapping products in a ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"dynamic way"})})," (materials might be changed or added)"]}),"\n",(0,r.jsx)(n.h2,{id:"flow-diagram",children:"Flow diagram"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n    subgraph  Prerequisite\n      direction LR\n      a1[Define filter]\n      a2[Get Auth Token]\n    end\n\n    a1 -- filter --\x3e B[STEP 1<br/> Query CSW catalog]\n    a2 -- token --\x3e B\n    subgraph  Links extract\n      direction LR\n      c1[STEP 2<br/>Get layer's URI]\n      c2[STEP 2.1 optional<br/>Get terrain provider URI]\n    end\n    B -- xml --\x3e c1\n    B -- xml --\x3e c2\n    c1 -- layer_URI --\x3e D[STEP 3<br/>Cesium]\n    c2 -- terrain_URI --\x3e D[STEP 3<br/>Cesium]"}),"\n",(0,r.jsx)(n.h2,{id:"query-csw-catalog-step-1",children:"Query CSW catalog (Step 1)"}),"\n",(0,r.jsxs)(n.p,{children:["Query ",(0,r.jsx)(n.strong,{children:"3D CSW catalog"})," service to find item(s) according to desired filter ",(0,r.jsx)(n.a,{href:"/docs/ogc/protocols/ogc-csw/ogc-csw-examples",children:"example are here"})]}),"\n",(0,r.jsxs)(n.p,{children:["Filter should be based on ",(0,r.jsx)(n.a,{href:"/docs/MapColonies/3D/services/catalog/catalog-profile-v2",children:"3D profile"})]}),"\n",(0,r.jsxs)(n.p,{children:["Example query based on ",(0,r.jsx)(n.code,{children:"mc:classification"})," profile field"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="GetRecords Request"',children:'POST Request\n\nurl:\n\'<D3-CATALOG-SERVICE_URL>/csw\'\n\nbody (XML):\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords outputFormat="application/xml"  outputSchema="http://schema.mapcolonies.com/3d" resultType="results" service="CSW" version="2.0.2" startPosition="1" maxRecords="200" xmlns:mc="http://schema.mapcolonies.com/3d" xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc">\n    <csw:Query typeNames="csw:Record">\n        <csw:ElementSetName>full</csw:ElementSetName>\n        <csw:Constraint version="1.1.0">\n            <ogc:Filter>\n                <ogc:Or>\n                    <ogc:PropertyIsEqualTo>\n                        <ogc:PropertyName>mc:classification</ogc:PropertyName>\n                        <ogc:Literal>5</ogc:Literal>\n                    </ogc:PropertyIsEqualTo>\n                    <ogc:PropertyIsEqualTo>\n                        <ogc:PropertyName>mc:productType</ogc:PropertyName>\n                        <ogc:Literal>QuantizedMeshDTMBest</ogc:Literal>\n                    </ogc:PropertyIsEqualTo>\n                </ogc:Or>\n            </ogc:Filter>\n        </csw:Constraint>\n    </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You will get GetRecords XML Response with product ",(0,r.jsx)(n.strong,{children:"metadata"}),"."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="Search Results Example"',children:'    <?xml version="1.0" encoding="UTF-8"?>\n    <csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:mc="http://schema.mapcolonies.com/3d" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">\n    <csw:SearchStatus timestamp="2022-03-27T06:45:54Z" />\n    <csw:SearchResults numberOfRecordsMatched="2" numberOfRecordsReturned="2" nextRecord="0" recordSchema="http://schema.mapcolonies.com/3d" elementSet="full">\n        <mc:MC3DRecord>\n            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>\n            <mc:classification>5</mc:classification>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[31.2603,33.4345],[31.2603,34.4888],[32.3353,34.4888],[32.3353,33.4345],[31.2603,33.4345]]]}</mc:footprint>\n            <mc:geographicArea>\u05d9\u05e9\u05e8\u05d0\u05dc</mc:geographicArea>\n            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:id>\n            <mc:links scheme="3DTiles" name="" description="">http://model-server-3d/15211-65da-4523-9d6f-08016ad51b0d/tileset.json</mc:links>\n            <mc:producerName>DAVID</mc:producerName>\n            <mc:productBBox>31.2603,33.4345,32.3353,34.4888</mc:productBBox>\n            <mc:productId>c2bbeeee-6081-4e69-918c-287f48ea244d</mc:productId>\n            <mc:productName>\u05de\u05d5\u05d3\u05dc \u05e4\u05e8\u05d9\u05d6</mc:productName>\n            <mc:productType>3DPhotoRealistic</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionMethod>photogrammetric</mc:productionMethod>\n            <mc:productionSystem>P-30</mc:productionSystem>\n            <mc:productionSystemVersion>1</mc:productionSystemVersion>\n            <mc:region>\u05e6\u05e4\u05d5\u05df</mc:region>\n            <mc:sensors>sensor1</mc:sensors>\n            <mc:imagingTimeEndUTC>2022-06-15T10:39:00Z</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2022-06-15T10:39:00Z</mc:imagingTimeBeginUTC>\n            <mc:SRS>4567</mc:SRS>\n            <mc:SRSName>WGS24GEO</mc:SRSName>\n            <mc:type>RECORD_3D</mc:type>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>33.4345 31.2603</ows:LowerCorner>\n                <ows:UpperCorner>34.4888 32.3353</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MC3DRecord>\n        <mc:MC3DRecord>\n            <mc:accuracyLEP90>999.0</mc:accuracyLEP90>\n            <mc:classification>6</mc:classification>\n            <mc:creationDateUTC>2022-06-15</mc:creationDateUTC>\n            <mc:description>srtm100</mc:description>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[35.2670012825,32.5856881598],[35.2670012825,32.6300363309],[35.3105702702,32.6300363309],[35.3105702702,32.5856881598],[35.2670012825,32.5856881598]]]}</mc:footprint>\n            <mc:geographicArea>North</mc:geographicArea>\n            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>11111111-1111-1111-1111-111111111111</mc:id>\n            <mc:links scheme="TERRAIN_QMESH" name="" description="">http://terrain-server.com/terrains/srtm100/layer.json</mc:links>\n            <mc:producerName>MIKI</mc:producerName>\n            <mc:productBBox>35.2670012825,32.5856881598,35.3105702702,32.6300363309</mc:productBBox>\n            <mc:productId>11111111-1111-1111-1111-111111111111</mc:productId>\n            <mc:productName>srtm100</mc:productName>\n            <mc:productType>QuantizedMeshDTMBest</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionMethod></mc:productionMethod>\n            <mc:productionSystem></mc:productionSystem>\n            <mc:productionSystemVersion>1</mc:productionSystemVersion>\n            <mc:region>Israel</mc:region>\n            <mc:sensors>UNDEFINED</mc:sensors>\n            <mc:imagingTimeEndUTC>2022-06-15</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2022-06-15</mc:imagingTimeBeginUTC>\n            <mc:SRS>4326</mc:SRS>\n            <mc:SRSName>WGS84GEO</mc:SRSName>\n            <mc:type>RECORD_3D</mc:type>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>32.5856881598 35.2670012825</ows:LowerCorner>\n                <ows:UpperCorner>32.6300363309 35.3105702702</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MC3DRecord>\n    </csw:SearchResults>\n    </csw:GetRecordsResponse>\n'})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Authentication must be integrated in order to communicate with 3D Tile and Catalog services."}),(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.strong,{children:["See the principles ",(0,r.jsx)(n.a,{href:"/docs/MapColonies/authentication",children:"here"})]})]})}),"\n",(0,r.jsx)(n.h2,{id:"get-layer-uri-step-2",children:"Get layer URI (Step 2)"}),"\n",(0,r.jsx)(n.p,{children:"In the Response, look for"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="Extract link for desired 3D model"',children:'<mc:links scheme="**3DTiles" name="">\n  http://3d-model-server.com/path-to-tileset.json\n</mc:links>\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["You need to save ",(0,r.jsx)(n.code,{children:"<mc:links>"})," ",(0,r.jsx)("u",{children:"element"})," value as MODEL_URL, which is a layer consumption URL."]})})}),"\n",(0,r.jsx)(n.h2,{id:"get-terrain-provider-uri-step-21-optional",children:"Get terrain provider URI (Step 2.1, optional)"}),"\n",(0,r.jsx)(n.p,{children:"In the Response, look for"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="Extract link for terrain provider"',children:'<mc:links scheme="TERRAIN_QMESH" name="srtm100">\n  http://tiles.com/terrains/srtm100/layer.json\n</mc:links>\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["You need to save ",(0,r.jsx)(n.code,{children:"<mc:links>"})," ",(0,r.jsx)("u",{children:"element"})," value as TERRAIN_URL, which is a terrain provider consumption URL."]})})}),"\n",(0,r.jsx)(n.h2,{id:"step-3",children:"Step 3"}),"\n",(0,r.jsx)(n.h3,{id:"construct-client-side-layer",children:"Construct Client side Layer"}),"\n",(0,r.jsx)(n.p,{children:"Now, after you got all product metadata that you need by querying our Catalog and MapProxy capabilities, lets actually use it in order to display it in real map viewer / application (clients)."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Below examples are based on ",(0,r.jsx)(n.code,{children:"Pseudo code"}),", you will have to adapt it in your own application to make it work."]})})}),"\n",(0,r.jsx)(n.h3,{id:"cesium",children:"Cesium"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"The minimum required version for cesium is v84."})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'// **Optional** add to Cesium terrain provider in order to clamp 3d models to the ground\nviewer.terrainProvider = new Cesium.TerrainProvider({\n  url: new Cesium.Resource({\n    url: "<TERRAIN_URL>",\n    queryParameters: {\n      "token": "<token>",\n    },\n  }),\n});\n...\n...\n// Add 3d model to the scene\nconst tileset = viewer.scene.primitives.add(\n  new Cesium.Cesium3DTileset({\n    url: new Cesium.Resource({\n      url: "<MODEL_URL>",\n      queryParameters: {\n        "token": "<token>",\n      },\n    }),\n  })\n);\n...\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"<MODEL_URL>"})," with the URL link that you got from ",(0,r.jsx)(n.strong,{children:"Step 2"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"<TERRAIN_URL>"})," with the URL link that you got from ",(0,r.jsx)(n.strong,{children:"Step 2.1 (optional)"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"<token>"})," with the token you have."]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);