"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3960],{66061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(74848),s=t(28453);const r={id:"3d-model-viewer",slug:"3d-viewer",title:"3D Model Viewer \ud83c\udf0d",tags:["3D"]},i=void 0,c={id:"MapColonies/3D/services/3dViewer/3d-model-viewer",title:"3D Model Viewer \ud83c\udf0d",description:"3D Model Viewer is a tool that loads 3D tiles using cesium. It allows the client to send a request to this tool with model ID's and see the 3D model on the map.",source:"@site/docs/MapColonies/3D/services/3dViewer/README.md",sourceDirName:"MapColonies/3D/services/3dViewer",slug:"/MapColonies/3D/services/3dViewer/3d-viewer",permalink:"/developer-portal/docs/MapColonies/3D/services/3dViewer/3d-viewer",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/3D/services/3dViewer/README.md",tags:[{inline:!0,label:"3D",permalink:"/developer-portal/docs/tags/3-d"}],version:"current",frontMatter:{id:"3d-model-viewer",slug:"3d-viewer",title:"3D Model Viewer \ud83c\udf0d",tags:["3D"]},sidebar:"docSidebar",previous:{title:"3D Tile Model Server",permalink:"/developer-portal/docs/MapColonies/3D/services/3d-tile-server"},next:{title:"3D Catalog \ud83d\uddc3\ufe0f",permalink:"/developer-portal/docs/MapColonies/3D/services/catalog/3d-catalog"}},a={},l=[{value:"Flow Diagram \u23ed",id:"flow-diagram-",level:2},{value:"Quering 3D CSW catalog service (STEP \u261d\ud83c\udffc)",id:"quering-3d-csw-catalog-service-step-",level:2},{value:"Extract the desired attributes of the models (Step \u270c\ud83c\udffc)",id:"extract-the-desired-attributes-of-the-models-step-",level:2},{value:"<ins>Useful and recommended attributes to use and display in your UI for the best user experience:</ins>",id:"useful-and-recommended-attributes-to-use-and-display-in-your-ui-for-the-best-user-experience",level:3},{value:"Creating a proper URL request for the tool (Step 3\ufe0f\u20e3 )",id:"creating-a-proper-url-request-for-the-tool-step-3\ufe0f\u20e3-",level:2},{value:"1. model_ids -<font> mandatory</font>",id:"1-model_ids---mandatory",level:3},{value:"2. token - <font> mandatory</font>",id:"2-token----mandatory",level:3},{value:"3. position (optional)",id:"3-position-optional",level:3},{value:"4. show_extent (optional)",id:"4-show_extent-optional",level:3},{value:"Congratulations!",id:"congratulations",level:2},{value:"Important Notes:",id:"important-notes",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"3D Model Viewer is a tool that loads 3D tiles using cesium. It allows the client to send a request to this tool with model ID's and see the 3D model on the map."}),"\n",(0,o.jsxs)(n.p,{children:["The following guide will help you understand, ",(0,o.jsx)(n.strong,{children:"step by step"})," the best practices of how to work with the Map Colonies ",(0,o.jsx)(n.strong,{children:"3D Catalog Viewer!"})]}),"\n",(0,o.jsx)(n.h2,{id:"flow-diagram-",children:"Flow Diagram \u23ed"}),"\n",(0,o.jsx)(n.mermaid,{value:"flowchart LR\n    A[Get Auth Token]--\x3e|?token| C[STEP 1: Query CSW catalog]\n    B[Define Filter]--\x3e |filter?| C\n    C --\x3e |xml| D[STEP 2: Get Layers Metadata]\n    D --\x3e |layers metadata| E[STEP 3: Make a Tool Request]"}),"\n",(0,o.jsx)(n.h2,{id:"quering-3d-csw-catalog-service-step-",children:"Quering 3D CSW catalog service (STEP \u261d\ud83c\udffc)"}),"\n",(0,o.jsxs)(n.p,{children:["Query ",(0,o.jsx)(n.strong,{children:"3D CSW catalog"})," service to find an item(s) according to the desired filter."]}),"\n",(0,o.jsx)(n.p,{children:"A good example of a filter request:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'POST Request\n\nurl:\n\'<3D-CATALOG-SERVICE_URL>/csw?token=<TOKEN>\'\n\nbody (XML):\n<?xml version="1.0" encoding="UTF-8"?>\n<csw:GetRecords outputFormat="application/xml"  outputSchema="http://schema.mapcolonies.com/3d" resultType="results" service="CSW" version="2.0.2" startPosition="1" maxRecords="200" xmlns:mc="http://schema.mapcolonies.com/3d" xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc">\n    <csw:Query typeNames="csw:Record">\n        <csw:ElementSetName>full</csw:ElementSetName>\n        <csw:Constraint version="1.1.0">\n            <ogc:Filter>\n                <ogc:Or>\n                    <ogc:PropertyIsEqualTo>\n                        <ogc:PropertyName>mc:classification</ogc:PropertyName>\n                        <ogc:Literal>5</ogc:Literal>\n                    </ogc:PropertyIsEqualTo>\n                    <ogc:PropertyIsEqualTo>\n                        <ogc:PropertyName>mc:productType</ogc:PropertyName>\n                        <ogc:Literal>3DPhotoRealistic</ogc:Literal>\n                    </ogc:PropertyIsEqualTo>\n                </ogc:Or>\n            </ogc:Filter>\n        </csw:Constraint>\n    </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Replace ",(0,o.jsx)(n.code,{children:"<3D-CATALOG-SERVICE_URL>"})," with 3D CSW catalog URL."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:" <3D-CATALOG-SERVICE_URL>\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Replace ",(0,o.jsx)(n.code,{children:"<token>"})," with with the token you have."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:" <token>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Of course, you can also send a regular request with no filter."}),"\n",(0,o.jsx)(n.p,{children:"A good example is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'POST Request\n\nurl:\n\'<3D-CATALOG-SERVICE_URL>/csw?token=<TOKEN>\'\n\nbody (XML):\n<csw:GetRecords \nmaxRecords="10" \noutputFormat="application/xml"\noutputSchema="http://schema.mapcolonies.com/3d" \nresultType="results" \nservice="CSW"\nversion="2.0.2" \nstartPosition="1" \nxmlns:mc="http://schema.mapcolonies.com/3d"\nxmlns:csw="http://www.opengis.net/cat/csw/2.0.2"\nxmlns:ogc="http://www.opengis.net/ogc">\n    <csw:Query typeNames="csw:Record">\n        <csw:ElementSetName>full</csw:ElementSetName>\n    </csw:Query>\n</csw:GetRecords>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You will get GetRecords XML Response with the products ",(0,o.jsx)(n.strong,{children:"metadata"}),"."]}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"XML Response"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n\x3c!-- pycsw 2.7.dev0 --\x3e\n<csw:GetRecordsResponse xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mc="http://schema.mapcolonies.com/3d" version="2.0.2" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">\n    <csw:SearchStatus timestamp="2023-10-15T10:49:46Z"/>\n    <csw:SearchResults numberOfRecordsMatched="2" numberOfRecordsReturned="2" nextRecord="0" recordSchema="http://schema.mapcolonies.com/3d" elementSet="full">\n        <mc:MC3DRecord>\n            <mc:accuracyLE90>8.0</mc:accuracyLE90>\n            <mc:classification>6</mc:classification>\n            <mc:creationDateUTC>1970-01-01</mc:creationDateUTC>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[35.2670012825,32.5856881598],[35.2670012825,32.6300363309],[35.3105702702,32.6300363309],[35.3105702702,32.5856881598],[35.2670012825,32.5856881598]]]}</mc:footprint>\n            <mc:maxHorizontalAccuracyCE90>8.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>53c9e5f6-31d6-47a1-bc11-64e150bcc13b</mc:id>\n            <mc:insertDate>2023-10-11T18:33:18Z</mc:insertDate>\n            <mc:links scheme="3D_LAYER" name="" description="">https://URL-TO-3D-TILE/api/3d/v1/b3dm/model/tileset.json</mc:links>\n            <mc:producerName>IDFMU</mc:producerName>\n            <mc:productBBox>35.2670012825,32.5856881598,35.3105702702,32.6300363309</mc:productBBox>\n            <mc:productId>53c9e5f6-31d6-47a1-bc11-64e150bcc13b</mc:productId>\n            <mc:productName>natik-q2</mc:productName>\n            <mc:productSource>\\\\domtest\\mimi\\archi\\maz\\silver\\libot\\afula-whole</mc:productSource>\n            <mc:productStatus>PUBLISHED</mc:productStatus>\n            <mc:productType>3DPhotoRealistic</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionSystem>i</mc:productionSystem>\n            <mc:productionSystemVersion>uy</mc:productionSystemVersion>\n            <mc:region>kl</mc:region>\n            <mc:sensors>k</mc:sensors>\n            <mc:imagingTimeEndUTC>2023-08-20T12:16:00Z</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2023-08-11T18:48:00Z</mc:imagingTimeBeginUTC>\n            <mc:SRS>4326</mc:SRS>\n            <mc:SRSName>WGS84GEO</mc:SRSName>\n            <mc:type>RECORD_3D</mc:type>\n            <mc:updateDateUTC>2023-10-11T18:33:18Z</mc:updateDateUTC>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>32.5856881598 35.2670012825</ows:LowerCorner>\n                <ows:UpperCorner>32.6300363309 35.3105702702</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MC3DRecord>\n        <mc:MC3DRecord>\n            <mc:accuracyLE90>999.0</mc:accuracyLE90>\n            <mc:classification>6</mc:classification>\n            <mc:creationDateUTC>1970-01-01</mc:creationDateUTC>\n            <mc:footprint>{"type":"Polygon","coordinates":[[[34.8,31.9],[34.8,31.9],[34.82,31.90],[34.81968953570555,31.91211446418133],[34.8809,31.913]]]}</mc:footprint>\n            <mc:maxHorizontalAccuracyCE90>999.0</mc:maxHorizontalAccuracyCE90>\n            <mc:id>e8a7ee77-1f95-4ac7-ad6e-24aae7859be5</mc:id>\n            <mc:insertDate>2023-10-14T15:05:15Z</mc:insertDate>\n            <mc:links scheme="3D_LAYER" name="" description="">https://URL-TO-3D-TILE/api/3d/v1/b3dm/model/tileset.json</mc:links>\n            <mc:producerName>IDFMU</mc:producerName>\n            <mc:productId>e8a7ee77-1f95-4ac7-ad6e-24aa5</mc:productId>\n            <mc:productName>\u05e8\u05d7\u05d5\u05d1\u05d5\u05ea</mc:productName>\n            <mc:productSource>\\\\domtest\\mimi\\archi\\maz\\silver\\libot\\City</mc:productSource>\n            <mc:productStatus>PUBLISHED</mc:productStatus>\n            <mc:productType>3DPhotoRealistic</mc:productType>\n            <mc:productVersion>1</mc:productVersion>\n            <mc:productionSystem>123</mc:productionSystem>\n            <mc:productionSystemVersion>123</mc:productionSystemVersion>\n            <mc:region>\u05d9\u05e9\u05e8\u05d0\u05dc</mc:region>\n            <mc:sensors>\u05e1\u05e0\u05e1\u05d5\u05e8</mc:sensors>\n            <mc:imagingTimeEndUTC>2023-10-08T12:14:00Z</mc:imagingTimeEndUTC>\n            <mc:imagingTimeBeginUTC>2023-10-03T11:09:00Z</mc:imagingTimeBeginUTC>\n            <mc:SRS>4326</mc:SRS>\n            <mc:SRSName>WGS84GEO</mc:SRSName>\n            <mc:type>RECORD_3D</mc:type>\n            <mc:updateDateUTC>2023-10-14T15:05:15Z</mc:updateDateUTC>\n            <ows:BoundingBox crs="urn:x-ogc:def:crs:EPSG:6.11:4326" dimensions="2">\n                <ows:LowerCorner>31.908523874681066 34.81539563385809</ows:LowerCorner>\n                <ows:UpperCorner>31.91211446418133 34.81968953570555</ows:UpperCorner>\n            </ows:BoundingBox>\n        </mc:MC3DRecord>\n    </csw:SearchResults>\n</csw:GetRecordsResponse>\n\n'})})]}),"\n",(0,o.jsx)(n.h2,{id:"extract-the-desired-attributes-of-the-models-step-",children:"Extract the desired attributes of the models (Step \u270c\ud83c\udffc)"}),"\n",(0,o.jsx)(n.p,{children:"Within the response, locate the ID  attribute of the desired mode, represented as :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"<mc:id>MODEL_ID</mc:id>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Additionally, the response contains other valuable attributes for your application."}),"\n",(0,o.jsx)(n.p,{children:"In the response, you can find other useful attributes that you can use for your application."}),"\n",(0,o.jsx)(n.p,{children:"You can see here how to build a 3D profile (version 2):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://localhost:3000/docs/MapColonies/3D/services/catalog/catalog-profile-v2",children:"3D Profile v2"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"useful-and-recommended-attributes-to-use-and-display-in-your-ui-for-the-best-user-experience",children:(0,o.jsx)("ins",{children:"Useful and recommended attributes to use and display in your UI for the best user experience:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("ins",{children:"product name"})," attributes to display the records property."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("ins",{children:"footprint/product_bbox"})," attribute in order to display the footprint of the model."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("ins",{children:"imagingTimeBeginUTC"})," attribute to order the 3D models by their footage creation time."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("ins",{children:"region"})," attribute to group 3D models from the same region."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Save the ID's of the models you wish to view as you will need them for the next step."}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-proper-url-request-for-the-tool-step-3\ufe0f\u20e3-",children:"Creating a proper URL request for the tool (Step 3\ufe0f\u20e3 )"}),"\n",(0,o.jsx)(n.p,{children:"With the model ID's in hand, you can now create a request to the tool."}),"\n",(0,o.jsx)(n.p,{children:"Use the following request template:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"GET Request\n\nurl:\n<CATALOG-VIEWER-URL>?<QUERY-PARAMS>\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Replace ",(0,o.jsx)(n.code,{children:"<3D-CATALOG-SERVICE_URL>"})," with 3D CSW catalog URL."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:" <3D-CATALOG-SERVICE_URL>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"<QUERY-PARAMS>"}),", you need to add there params:"]}),"\n",(0,o.jsxs)(n.h3,{id:"1-model_ids---mandatory",children:["1. model_ids -",(0,o.jsx)("font",{color:"red",children:" mandatory"})]}),"\n",(0,o.jsx)(n.p,{children:"ID's of the desired models obtained from the CSW response."}),"\n",(0,o.jsx)(n.p,{children:"The convention is to list them as a comma-separated string:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"model_ids=ID1,ID2\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you only need one model, omit the comma."}),"\n",(0,o.jsxs)(n.h3,{id:"2-token----mandatory",children:["2. token - ",(0,o.jsx)("font",{color:"red",children:" mandatory"})]}),"\n",(0,o.jsx)(n.p,{children:"Simply the token you have."}),"\n",(0,o.jsx)(n.p,{children:"This is the convention:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"token=TOKEN\n"})}),"\n",(0,o.jsx)(n.h3,{id:"3-position-optional",children:"3. position (optional)"}),"\n",(0,o.jsx)(n.p,{children:"A position if you want the viewer to fly to a specific position instead of the model itself."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"This is an optional parameter."}),"\nthe potion has 3 attributes:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"longitude - double number between -180 and 180."}),"\n",(0,o.jsx)(n.li,{children:"latitude - double number between -90 and 90."}),"\n",(0,o.jsx)(n.li,{children:"height - positive double number between 0 and 22 (represents zoom level)."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This is the convention:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"position=LON,LAT,HEIGHT\n"})}),"\n",(0,o.jsx)(n.h3,{id:"4-show_extent-optional",children:"4. show_extent (optional)"}),"\n",(0,o.jsxs)(n.p,{children:["A boolean parameter that determines whether a 3D model will display its footprint or not in the viewer. ",(0,o.jsx)(n.strong,{children:"This is an optional parameter!"})]}),"\n",(0,o.jsx)(n.p,{children:"The show_extent parameter can be \u201ctrue\u201d or \u201cfalse\u201d."}),"\n",(0,o.jsx)(n.p,{children:"This is the convention:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"show_extent=trueshow_extent=true\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"The default value is false!"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u2139\ufe0f Query params are separated by '&' char. \n\nAn example:\n[http://url?model_ids=id1,id2?token=TOKEN&position=0,0,0&show_extent=true](http://url?model_ids=id1,id2?token=TOKEN&position=0,0,0&show_extent=true) \n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Here's an example of a well-structured GET request:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://url-to-viewer/simple-catalog-viewer?model_ids=MODEL_ID1,MODEL_ID2&token=TOKEN&position=1.5,3,13\n"})}),"\n",(0,o.jsx)(n.h2,{id:"congratulations",children:"Congratulations!"}),"\n",(0,o.jsx)(n.p,{children:"You're now ready to view the model within a Cesium-based viewer."}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{src:t(37835).A,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"}})}),"\n",(0,o.jsx)(n.h3,{id:"important-notes",children:"Important Notes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'When the "model_ids" query parameter includes multiple models, the viewer will automatically center on the first model listed. If a "position" query parameter is provided, the viewer will prioritize navigating to the specified position.'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The viewer seamlessly incorporates a terrain layer, offering a comprehensive portrayal of diverse surface elevations."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"To customize your experience, you can easily switch between various base maps (Raster layers) using the gear icon located in the upper-right corner of the viewer."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Inside the viewer, you have the freedom to navigate the 3D space as you desire, providing a dynamic and immersive experience."}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},37835:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/rehovot-city-530ed57eac51adf7e1ee188bc6796f3f.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);