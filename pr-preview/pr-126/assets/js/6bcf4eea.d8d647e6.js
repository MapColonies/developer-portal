"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[8819],{6191:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var s=t(74848),i=t(28453);const n={id:"ogc-wfs",description:"Catalog Web Service",title:"WFS - Web Feature Service",slug:"ogc-wfs",tags:["ogc","vector","protocol","api"]},o="WFS - Web Feature Service",d={id:"ogc/protocols/ogc-wfs",title:"WFS - Web Feature Service",description:"Catalog Web Service",source:"@site/docs/ogc/protocols/ogc-wfs.md",sourceDirName:"ogc/protocols",slug:"/ogc/protocols/ogc-wfs",permalink:"/developer-portal/pr-preview/pr-126/docs/ogc/protocols/ogc-wfs",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/ogc/protocols/ogc-wfs.md",tags:[{inline:!0,label:"ogc",permalink:"/developer-portal/pr-preview/pr-126/docs/tags/ogc"},{inline:!0,label:"vector",permalink:"/developer-portal/pr-preview/pr-126/docs/tags/vector"},{inline:!0,label:"protocol",permalink:"/developer-portal/pr-preview/pr-126/docs/tags/protocol"},{inline:!0,label:"api",permalink:"/developer-portal/pr-preview/pr-126/docs/tags/api"}],version:"current",frontMatter:{id:"ogc-wfs",description:"Catalog Web Service",title:"WFS - Web Feature Service",slug:"ogc-wfs",tags:["ogc","vector","protocol","api"]},sidebar:"ogcSidebar",previous:{title:"WCS - Web Coverage Service",permalink:"/developer-portal/pr-preview/pr-126/docs/ogc/protocols/ogc-wcs"}},a={},c=[{value:"GetCapabilities",id:"getcapabilities",level:2},{value:"DescribeFeatureType",id:"describefeaturetype",level:2},{value:"GetFeature",id:"getfeature",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"wfs---web-feature-service",children:"WFS - Web Feature Service"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"http://opengeospatial.github.io/e-learning/wmts/text/operations.html",children:"Official OGC documentation(Online)"})," \ud83c\udf10"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(99479).A+"",title:"download",children:"Official OGC documentation(Offline)"})," \ud83d\udcc4"]}),"\n",(0,s.jsx)(r.p,{children:"The OGC Web Feature Service (WFS) Interface Standard defines a set of interfaces for accessing geographic information at the feature and feature property level over the Internet. A feature is an abstraction of real world phenomena, that is it is a representation of anything that can be found in the world. The attributes or characteristics of a geographic feature are referred to as feature properties. WFS offer the means to retrieve or query geographic features in a manner independent of the underlying data stores they publish. Where a WFS is authorized to do so, the service can also update or delete geographic features. An instance of a WFS is also able to store queries in order to enable client applications to retrieve or execute the queries at a later point in time."}),"\n",(0,s.jsx)(r.p,{children:"The following table depicts all WFS protocol operations and their supported WFS version:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Operation"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Supported Version"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"GetCapabilities"}),(0,s.jsx)(r.td,{children:"Generates a metadata document describing a WFS service provided by server as well as valid WFS operations and parameters"}),(0,s.jsx)(r.td,{children:"All"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"DescribeFeatureType"}),(0,s.jsx)(r.td,{children:"Returns a description of feature types supported by a WFS service"}),(0,s.jsx)(r.td,{children:"All"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"GetFeature"}),(0,s.jsx)(r.td,{children:"Returns a selection of features from a data source including geometry and attribute values"}),(0,s.jsx)(r.td,{children:"All"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"LockFeature"}),(0,s.jsx)(r.td,{children:"Prevents a feature from being edited through a persistent feature lock"}),(0,s.jsx)(r.td,{children:"All"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Transaction"}),(0,s.jsx)(r.td,{children:"Edits existing feature types by creating, updating, and deleting"}),(0,s.jsx)(r.td,{children:"All"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"GetPropertyValue"}),(0,s.jsx)(r.td,{children:"Retrieves the value of a feature property or part of the value of a complex feature property from the data store for a set of features identified using a query expression"}),(0,s.jsx)(r.td,{children:"2.0.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"GetFeatureWithLock"}),(0,s.jsx)(r.td,{children:"Returns a selection of features and also applies a lock on those features"}),(0,s.jsx)(r.td,{children:"2.0.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CreateStoredQuery"}),(0,s.jsx)(r.td,{children:"Create a stored query on the WFS server"}),(0,s.jsx)(r.td,{children:"2.0.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"DropStoredQuery"}),(0,s.jsx)(r.td,{children:"Deletes a stored query from the WFS server"}),(0,s.jsx)(r.td,{children:"2.0.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ListStoredQueries"}),(0,s.jsx)(r.td,{children:"Returns a list of the stored queries on a WFS server"}),(0,s.jsx)(r.td,{children:"2.0.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"DescribeStoredQueries"}),(0,s.jsx)(r.td,{children:"Returns a metadata document describing the stored queries on a WFS server"}),(0,s.jsx)(r.td,{children:"2.0.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"GetGMLObject"}),(0,s.jsx)(r.td,{children:"Retrieves features and elements by ID from a WFS"}),(0,s.jsx)(r.td,{children:"1.1.0"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"The following parameters are common query parameters for all of the provided operations:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Is Required"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"service"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"Service name, value is wfs on this service"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"version"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"Service version, value is one of 1.0.0, 1.1.0, 2.0.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"request"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"Operation name"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"getcapabilities",children:"GetCapabilities"}),"\n",(0,s.jsx)(r.p,{children:"The GetCapabilities operation is a GET request to a WFS server for a list of the operations, services or capabilities supported by that service"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=GetCapabilities\n"})}),"\n",(0,s.jsx)(r.h2,{id:"describefeaturetype",children:"DescribeFeatureType"}),"\n",(0,s.jsx)(r.p,{children:"The DescribeFeatureType request provides information about all or an individual feature type.\nSpecifically, the operation will request a list of features and attributes for the given feature type, or list the feature types available on the service."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Is Required"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"typeNames"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"Name of the feature types to describe (use typeName for WFS 1.1.0 and earlier)"}),(0,s.jsx)(r.td,{children:"an empty value which will list all the feature types provided by the service"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"exceptions"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsxs)(r.td,{children:["Format for reporting exceptions, choose one of (",(0,s.jsx)(r.code,{children:"text/xml"}),", ",(0,s.jsx)(r.code,{children:"application/json"}),", ",(0,s.jsx)(r.code,{children:"text/javascript"}),")"]}),(0,s.jsx)(r.td,{children:"text/xml"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"outputFormat"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsxs)(r.td,{children:["The output format (",(0,s.jsx)(r.code,{children:"application/json"})," can be choose)"]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"application/xml"})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"The following GET request will return a list of all feature types, sorted by namespace"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=DescribeFeatureType\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The following GET request will list information about a specific feature type named ",(0,s.jsx)(r.code,{children:"namespace:featuretype"}),", the response will be formatted in ",(0,s.jsx)(r.code,{children:"application/json"})," format"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=DescribeFeatureType&\n    typeNames=namespace:featuretype&\n    outputFormat=application/json\n"})}),"\n",(0,s.jsx)(r.h2,{id:"getfeature",children:"GetFeature"}),"\n",(0,s.jsx)(r.p,{children:"The GetFeature request queries the server with a set of parameters describing the geographic features to be returned, the request can also be sorted and/or limited."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Is Required"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"typeNames"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"Name of the feature type to query from (use typeName for WFS 1.1.0 and earlier)"}),(0,s.jsx)(r.td,{children:"-"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"exceptions"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsxs)(r.td,{children:["Format for reporting exceptions, choose one of (",(0,s.jsx)(r.code,{children:"text/xml"}),", ",(0,s.jsx)(r.code,{children:"application/json"}),", ",(0,s.jsx)(r.code,{children:"text/javascript"}),")"]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"text/xml"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"outputFormat"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsxs)(r.td,{children:["Defines the scheme description language used to describe feature types (one of ",(0,s.jsx)(r.code,{children:"gml2"}),", ",(0,s.jsx)(r.code,{children:"gml3"}),", ",(0,s.jsx)(r.code,{children:"shapefile"}),", ",(0,s.jsx)(r.code,{children:"application/json"}),", ",(0,s.jsx)(r.code,{children:"text/javascript"}),", ",(0,s.jsx)(r.code,{children:"csv"}),")"]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"gml2 for WFS v1.0.0"})," and ",(0,s.jsx)(r.strong,{children:"gml3 for WFS v1.1.0 and v2.0.0"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"featureId"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"The Id of a specific feature"}),(0,s.jsx)(r.td,{children:"-"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"count"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"The maximum number of features to be returned. Use maxFeatures parameter for WFS versions earlier than 2.0.0"}),(0,s.jsx)(r.td,{children:"-"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"startIndex"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"The index from which the server shall begin presenting results in the response"}),(0,s.jsx)(r.td,{children:"-"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sortBy"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"An attribute to sort the features by (append a +A or +D to the request for ascending or descending order. Default sort is in ascending order.)"}),(0,s.jsx)(r.td,{children:"-"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"propertyName"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsxs)(r.td,{children:["Select specific attributes to be retrieved from the feature. A single attribute, or multiple attributes separated by commas can be selected.  If some properties in the feature are not-nillable or if they have ",(0,s.jsx)(r.code,{children:"minOccurs"})," greater than zero they will be included in the result even if not requested"]}),(0,s.jsx)(r.td,{children:"-"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bbox"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"Search for features that are contained (or partially contained) inside a coordinates box. The format of the BBOX parameter is bbox=a1,b1,a2,b2,[crs] where a1, b1, a2, b2 represent the coordinate values. The optional crs parameter is used to name the CRS for the bbox coordinates. bottom corner coordinate (left or right) to be provided first"}),(0,s.jsx)(r.td,{children:"-"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"srsName"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"The coordinate reference system for the returned features to be encoded in"}),(0,s.jsx)(r.td,{children:"-"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"resultType"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:'The possible values for this parameter are "results" and "hits". If the value is set to "results" the server shall generate a complete response document containing resources that satisfy the operation. If the value is set to "hits" the server shall generate an empty response document containing no resource instances and the root element of the response container shall contain the count of the total number of resources that the operation found and the value for the number of resources presented in the response document shall be set to zero.'}),(0,s.jsx)(r.td,{children:"-"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["The following GET request will get at most the top N features of feature type named ",(0,s.jsx)(r.code,{children:"namespace:featuretype"})," sorted by attributeA, the response will be formatted in ",(0,s.jsx)(r.code,{children:"application/json"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=GetFeature&\n    typeNames=namespace:featuretype&\n    outputFormat=application/json&\n    count=N&\n    sortBy=attributeA\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The following GET request will search for all the features contained or partially contained by the specified bounding box in the specified coordinate reference system (",(0,s.jsx)(r.code,{children:"EPSG:4326"}),").\nThe retrieved features will be encoded in ",(0,s.jsx)(r.code,{children:"EPSG:4326"})," as well as requested by the srsName parameter value."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=GetFeature&\n    typeNames=namespace:featuretype&\n    bbox=51.607317,5.106151,51.629884,5.228022,urn:ogc:def:crs:EPSG::4326&\n    srsName=urn:ogc:def:crs:EPSG::4326\n"})}),"\n",(0,s.jsx)(r.p,{children:"The following GET request will retrieve a specific feature by provided featureId FID"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=GetFeature&\n    typeNames=namespace:featuretype&\n    featureId=FID\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},99479:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/files/web_feature_service_ogc-c63416a4d97e51e4c2e468565bb21539.pdf"},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>d});var s=t(96540);const i={},n=s.createContext(i);function o(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);