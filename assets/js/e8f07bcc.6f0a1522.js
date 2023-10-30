"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[1049],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Data Model",sidebar_position:2,slug:"osm-data-model"},s="OpenStreetMap Data Model",i={unversionedId:"MapColonies/openstreetmap/data_model",id:"MapColonies/openstreetmap/data_model",title:"Data Model",description:"The basic components of OpenStreetMap's conceptual data model of the physical world are called elements. Elements are of three types:",source:"@site/docs/MapColonies/openstreetmap/data_model.md",sourceDirName:"MapColonies/openstreetmap",slug:"/MapColonies/openstreetmap/osm-data-model",permalink:"/developer-portal/docs/MapColonies/openstreetmap/osm-data-model",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/data_model.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Data Model",sidebar_position:2,slug:"osm-data-model"},sidebar:"docSidebar",previous:{title:"In Depth",permalink:"/developer-portal/docs/MapColonies/openstreetmap/osm-in-depth"},next:{title:"Users",permalink:"/developer-portal/docs/MapColonies/openstreetmap/osm-users"}},l={},p=[{value:"Node",id:"node",level:2},{value:"Way",id:"way",level:2},{value:"Relation",id:"relation",level:2},{value:"Tag",id:"tag",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openstreetmap-data-model"},"OpenStreetMap Data Model"),(0,o.kt)("p",null,"The basic components of OpenStreetMap's conceptual data model of the physical world are called elements. Elements are of three types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nodes")," (defining points in space)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ways")," (defining linear features and area boundaries)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"relations")," (which are sometimes used to explain how other elements work together).")),(0,o.kt)("p",null,"All of the above can have one or more associated tags (which describe the meaning of a particular element).\nWhen Sharing or creating OSM entities, the most common way to describe said elements is XML."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"OpenStreetMap Entities",src:a(6185).Z,width:"1126",height:"676"})),(0,o.kt)("h2",{id:"node"},"Node"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"node")," represents a specific point on the earth's surface defined by its latitude and longitude, referred to the World Geodetic System 1984. Each node comprises at least an id number and a pair of coordinates."),(0,o.kt)("p",null,"Nodes can be used to define standalone point features. For example, a node could represent a park bench or a water well."),(0,o.kt)("p",null,"Nodes are also used to define the shape of a way. When used as points along ways, nodes usually have no tags, though some of them could. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"highway=traffic_signals")," marks traffic signals on a road, and ",(0,o.kt)("inlineCode",{parentName:"p"},"power=tower")," represents a pylon along an electric power line."),(0,o.kt)("p",null,"A node can be included as member of relation. The relation also may indicate the member's role: that is, the node's function in this particular set of related data elements."),(0,o.kt)("h2",{id:"way"},"Way"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"way")," is an ordered list of between 1 (!) and 2,000 nodes that define a polyline. Ways are used to represent linear features such as rivers and roads."),(0,o.kt)("p",null,'Ways can also represent the boundaries of areas (solid polygons) such as buildings or forests. In this case, the way\'s first and last node will be the same. This is called a "closed way".'),(0,o.kt)("p",null,"Note that closed ways occasionally represent loops, such as roundabouts on highways, rather than solid areas. The way's tags must be examined to discover which it is. For elements with tags that could both be a linear representation or an area-representation of a real life object (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"man_made=pier"),") the tag ",(0,o.kt)("inlineCode",{parentName:"p"},"area=yes")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"area=no")," can be used to avoid ambiguity or misinterpretation."),(0,o.kt)("p",null,"Areas with holes, or with boundaries of more than 2,000 nodes, cannot be represented by a single way. Instead, the feature will require a more complex multipolygon relation data structure."),(0,o.kt)("h2",{id:"relation"},"Relation"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"relation")," is a multi-purpose data structure that documents a relationship between two or more data elements (nodes, ways, and/or other relations). Examples include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A route relation, which lists the ways that form a major (numbered) highway, a cycle route, or a bus route."),(0,o.kt)("li",{parentName:"ul"},"A turn restriction that says you can't turn from one way into another way."),(0,o.kt)("li",{parentName:"ul"},"A multipolygon that describes an area (whose boundary is the 'outer way') with holes (the 'inner ways').\nThus, relations can have different meanings. The relation's meaning is defined by its tags. Typically, the relation will have a 'type' tag. The relation's other tags need to be interpreted in light of the type tag.")),(0,o.kt)("p",null,"The relation is primarily an ordered list of nodes, ways, or other relations. These objects are known as the relation's members."),(0,o.kt)("p",null,'Each element can optionally have a role within the relation. For example, a turn restriction would have members with "from" and "to" roles, describing the particular turn that is forbidden.'),(0,o.kt)("p",null,"A single element such as a particular way may appear multiple times in a relation."),(0,o.kt)("h2",{id:"tag"},"Tag"),(0,o.kt)("p",null,"All types of data element (nodes, ways and relations) can have tags. Tags describe the meaning of the particular element to which they are attached."),(0,o.kt)("p",null,"A tag consists of two free format text fields; a 'key' and a 'value'. Each of these are Unicode strings of up to 255 characters. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"highway=residential")," defines the way as a road whose main function is to give access to people's homes. An element cannot have 2 tags with the same 'key', the 'key's must be unique. For example, you cannot have an element tagged both ",(0,o.kt)("inlineCode",{parentName:"p"},"amenity=restaurant")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"amenity=bar"),"."),(0,o.kt)("p",null,"There is no fixed dictionary of tags, but there are many conventions documented on the OSM wiki (starting with the Map Features page). Tag usage can be measured with the Taginfo application. If there is more than one way to tag a given feature, it's probably best to use the most common approach."),(0,o.kt)("p",null,"Not all elements have tags. Nodes are often untagged if they are part of ways. Both ways and nodes may be untagged if they are members of a relation."))}m.isMDXComponent=!0},6185:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/OpenStreetMap_entities-1076960f431363dcd916aac6df03133d.png"}}]);