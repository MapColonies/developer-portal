"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3345],{41778:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var r=s(74848),d=s(28453);const n={id:"dem-profile-v1",slug:"catalog-profile-v1",description:"v1 Profile",title:"Profile v1",tags:["DEM","catalog","v1"]},i="DEM Catalog Profile Information",l={id:"MapColonies/DEM/Services/catalog/dem-profile-v1",title:"Profile v1",description:"v1 Profile",source:"@site/docs/MapColonies/DEM/Services/catalog/profile_v1_0.md",sourceDirName:"MapColonies/DEM/Services/catalog",slug:"/MapColonies/DEM/Services/catalog/catalog-profile-v1",permalink:"/developer-portal/docs/MapColonies/DEM/Services/catalog/catalog-profile-v1",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/DEM/Services/catalog/profile_v1_0.md",tags:[{inline:!0,label:"DEM",permalink:"/developer-portal/docs/tags/dem"},{inline:!0,label:"catalog",permalink:"/developer-portal/docs/tags/catalog"},{inline:!0,label:"v1",permalink:"/developer-portal/docs/tags/v-1"}],version:"current",frontMatter:{id:"dem-profile-v1",slug:"catalog-profile-v1",description:"v1 Profile",title:"Profile v1",tags:["DEM","catalog","v1"]},sidebar:"docSidebar",previous:{title:"Catalog \ud83d\uddc3\ufe0f",permalink:"/developer-portal/docs/MapColonies/DEM/Services/catalog/dem-catalog"},next:{title:"Elevation \u26f0\ufe0f",permalink:"/developer-portal/docs/MapColonies/DEM/Services/elevation/info"}},c={},o=[];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",header:"header",li:"li",ol:"ol",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"dem-catalog-profile-information",children:"DEM Catalog Profile Information"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"typename"})," = ",(0,r.jsx)(t.code,{children:"mc:MCDEMRecord"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"main_namespace"})," = ",(0,r.jsx)(t.code,{children:"http://schema.mapcolonies.com/dem"})]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"DEM"})," sub-system Catalog profile fields with information of each of them:"]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsxs)(t.strong,{children:["PYCSW Queryable/XML ",(0,r.jsx)("br",{})," Element Name"]})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Type"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":id"]}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"unique internal catalog item id"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":productId"]}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"unique external product id"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":productName"]}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"the product name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsxs)(t.a,{href:"#productType",children:["mc",":productType"]})}),(0,r.jsx)(t.td,{children:"enum"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Valid Values"}),": ",(0,r.jsx)("br",{})," DTM / DSM / QuantizedMesh  / QuantizedMeshDTMBest / QuantizedMeshDSMBest"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":description"]}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"the product description"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":imagingTimeBeginUTC"]}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsxs)(t.td,{children:["start imaging date of raw product ",(0,r.jsx)("br",{})," supported format: ",(0,r.jsx)(t.strong,{children:'dd/mm/yyyy  (not later than "End date")'})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":imagingTimeEndUTC"]}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsxs)(t.td,{children:["end imaging date of raw product ",(0,r.jsx)("br",{})," supported format: ",(0,r.jsx)(t.strong,{children:'dd/mm/yyyy  (not earlier than "Begin date")'})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":resolutionDeg"]}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsxs)(t.td,{children:["the product resolution in degrees ",(0,r.jsx)("br",{})," double unsigned valid: ",(0,r.jsx)(t.strong,{children:"0.00000009 to 0.072"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":resolutionMeter"]}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsxs)(t.td,{children:["the product resolution in meters ",(0,r.jsx)("br",{})," double unsigned valid: ",(0,r.jsx)(t.strong,{children:"0.01 to 8000"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":absoluteAccuracyLEP90"]}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"LEP90 maximum absolute vertical plane accuracy range in meters"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":relativeAccuracyLEP90"]}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"LEP90 maximum relative vertical plane accuracy range in meters"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":sensors"]}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsxs)(t.td,{children:["list of sensors used as a source for the product ",(0,r.jsx)("br",{})," comma separated list"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":layerPolygonParts"]}),(0,r.jsx)(t.td,{children:"geojson"}),(0,r.jsx)(t.td,{children:"polygons of the discrete parts (versions) and the list of layers in the best converted to Geojson"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":footprint"]}),(0,r.jsx)(t.td,{children:"geojson"}),(0,r.jsx)(t.td,{children:"geographical delineation of the product / model trace"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":heightRangeFrom"]}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"minimum"}),' height range in Meters (not greater than "heightRangeTo") ',(0,r.jsx)("br",{})," valid: ",(0,r.jsx)(t.strong,{children:"-500 to 9000"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":heightRangeTo"]}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"maximum"}),' height range in Meters (not less than "heightRangeFrom") ',(0,r.jsx)("br",{})," valid: ",(0,r.jsx)(t.strong,{children:"-500 to 9000"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":SRS"]}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsxs)(t.td,{children:["reference System ID (EPSG), ",(0,r.jsx)("br",{})," ex: 4326 / 3857"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":SRSName"]}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"name of reference system"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":verticalDatum"]}),(0,r.jsx)(t.td,{children:"enum"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Valid Values"}),": ",(0,r.jsx)("br",{})," WGS 1984 / WGS 1972 / Pulkovo 1942 / Palestine 1923 / MSL Height / Israel / ED 1950 IDF"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":region"]}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsxs)(t.td,{children:["sector / countries ",(0,r.jsx)("br",{})," comma separated list"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":classification"]}),(0,r.jsx)(t.td,{children:"enum"}),(0,r.jsxs)(t.td,{children:["product classification / confidentiality ",(0,r.jsx)("br",{})," Classification values"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":producerName"]}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"manufacturer / organization that produced / supplied the product"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":units"]}),(0,r.jsx)(t.td,{children:"enum"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Valid Values"}),": ",(0,r.jsx)("br",{})," METER / DD / DMS / ARC_SECONDS / UNKNOWN"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":geographicArea"]}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"geographic area cities"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":undulationModel"]}),(0,r.jsx)(t.td,{children:"enum"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Valid Values"}),": ",(0,r.jsx)("br",{})," MSL EGM96 / MSL EGM2008 / MSL DMA10 / ILUM"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":dataType"]}),(0,r.jsx)(t.td,{children:"enum"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Valid Values"}),": ",(0,r.jsx)("br",{})," FLOAT64 / FLOAT32 / FLOAT16 / INT64 / INT32 / INT16 / INT8"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":noDataValue"]}),(0,r.jsx)(t.td,{children:"enum"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Valid Values"}),": ",(0,r.jsx)("br",{})," -32768 / -326767 / -999"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":productBBox"]}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"the bounding box of the product minX,minY,maxX,maxY"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":insertDate"]}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"the date when item was added to catalog"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":keywords"]}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"list of key words relevant for product"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":updateDateUTC"]}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsxs)(t.td,{children:["date the record got and update in catalog ",(0,r.jsx)("br",{})," supported format: ",(0,r.jsx)(t.strong,{children:"dd/mm/yyyy"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["mc",":type"]}),(0,r.jsx)(t.td,{children:"enum"}),(0,r.jsxs)(t.td,{children:["type of the catalog ",(0,r.jsx)("br",{})," ",(0,r.jsx)(t.strong,{children:"Valid values"}),":  RECORD_RASTER / RECORD_3D / RECORD_DEM ",(0,r.jsx)("br",{})," default: ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"RECORD_DEM"})})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var r=s(96540);const d={},n=r.createContext(d);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);