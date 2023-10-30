"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[2934],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),g=n,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},75680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={id:"ogc-wfs",description:"Catalog Web Service",title:"WFS - Web Feature Service",slug:"ogc-wfs",tags:["ogc","vector","protocol","api"]},l="WFS - Web Feature Service",i={unversionedId:"ogc/protocols/ogc-wfs",id:"ogc/protocols/ogc-wfs",title:"WFS - Web Feature Service",description:"Catalog Web Service",source:"@site/docs/ogc/protocols/ogc-wfs.md",sourceDirName:"ogc/protocols",slug:"/ogc/protocols/ogc-wfs",permalink:"/developer-portal/docs/ogc/protocols/ogc-wfs",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/ogc/protocols/ogc-wfs.md",tags:[{label:"ogc",permalink:"/developer-portal/docs/tags/ogc"},{label:"vector",permalink:"/developer-portal/docs/tags/vector"},{label:"protocol",permalink:"/developer-portal/docs/tags/protocol"},{label:"api",permalink:"/developer-portal/docs/tags/api"}],version:"current",frontMatter:{id:"ogc-wfs",description:"Catalog Web Service",title:"WFS - Web Feature Service",slug:"ogc-wfs",tags:["ogc","vector","protocol","api"]},sidebar:"ogcSidebar",previous:{title:"WCS - Web Coverage Service",permalink:"/developer-portal/docs/ogc/protocols/ogc-wcs"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wfs---web-feature-service"},"WFS - Web Feature Service"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://opengeospatial.github.io/e-learning/wmts/text/operations.html"},"Official OGC documentation(Online)")," \ud83c\udf10"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:r(63219).Z,title:"download"},"Official OGC documentation(Offline)")," \ud83d\udcc4"),(0,n.kt)("p",null,"The OGC Web Feature Service (WFS) Interface Standard defines a set of interfaces for accessing geographic information at the feature and feature property level over the Internet. A feature is an abstraction of real world phenomena, that is it is a representation of anything that can be found in the world. The attributes or characteristics of a geographic feature are referred to as feature properties. WFS offer the means to retrieve or query geographic features in a manner independent of the underlying data stores they publish. Where a WFS is authorized to do so, the service can also update or delete geographic features. An instance of a WFS is also able to store queries in order to enable client applications to retrieve or execute the queries at a later point in time."),(0,n.kt)("p",null,"The following table depicts all WFS protocol operations and their supported WFS version:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Operation"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetCapabilities"),(0,n.kt)("td",{parentName:"tr",align:null},"Generates a metadata document describing a WFS service provided by server as well as valid WFS operations and parameters"),(0,n.kt)("td",{parentName:"tr",align:null},"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DescribeFeatureType"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a description of feature types supported by a WFS service"),(0,n.kt)("td",{parentName:"tr",align:null},"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetFeature"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a selection of features from a data source including geometry and attribute values"),(0,n.kt)("td",{parentName:"tr",align:null},"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LockFeature"),(0,n.kt)("td",{parentName:"tr",align:null},"Prevents a feature from being edited through a persistent feature lock"),(0,n.kt)("td",{parentName:"tr",align:null},"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Transaction"),(0,n.kt)("td",{parentName:"tr",align:null},"Edits existing feature types by creating, updating, and deleting"),(0,n.kt)("td",{parentName:"tr",align:null},"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetPropertyValue"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieves the value of a feature property or part of the value of a complex feature property from the data store for a set of features identified using a query expression"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetFeatureWithLock"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a selection of features and also applies a lock on those features"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CreateStoredQuery"),(0,n.kt)("td",{parentName:"tr",align:null},"Create a stored query on the WFS server"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DropStoredQuery"),(0,n.kt)("td",{parentName:"tr",align:null},"Deletes a stored query from the WFS server"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ListStoredQueries"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a list of the stored queries on a WFS server"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DescribeStoredQueries"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a metadata document describing the stored queries on a WFS server"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetGMLObject"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieves features and elements by ID from a WFS"),(0,n.kt)("td",{parentName:"tr",align:null},"1.1.0")))))}d.isMDXComponent=!0},63219:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/web_feature_service_ogc-c63416a4d97e51e4c2e468565bb21539.pdf"}}]);