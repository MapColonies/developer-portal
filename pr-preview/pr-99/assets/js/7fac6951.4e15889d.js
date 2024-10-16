"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[9189],{57355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const s={description:"GeoCoding Service by OSM"},r="Nominatim \ud83c\udf0d",a={id:"MapColonies/vector/Services/nominatim_service",title:"Nominatim \ud83c\udf0d",description:"GeoCoding Service by OSM",source:"@site/docs/MapColonies/vector/Services/nominatim_service.md",sourceDirName:"MapColonies/vector/Services",slug:"/MapColonies/vector/Services/nominatim_service",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/vector/Services/nominatim_service",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/vector/Services/nominatim_service.md",tags:[],version:"current",frontMatter:{description:"GeoCoding Service by OSM"},sidebar:"docSidebar",previous:{title:"Geocoding \ud83d\udccd",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/vector/Services/geocoding/info"},next:{title:"Query \ud83d\udd0e",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/vector/Services/query"}},c={},d=[{value:"How to use",id:"how-to-use",level:2},{value:"Nominatim UI",id:"nominatim-ui",level:2},{value:"I&#39;m getting bad results",id:"im-getting-bad-results",level:2},{value:"&quot;I can&#39;t find my home address, do something about it \ud83d\ude21&quot;",id:"i-cant-find-my-home-address-do-something-about-it-",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"nominatim-",children:"Nominatim \ud83c\udf0d"})}),"\n",(0,o.jsx)(t.p,{children:"Nominatim (from the Latin, 'by name') is a tool to search OpenStreetMap data by name and address (geocoding) and to generate synthetic addresses of OSM points (reverse geocoding)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Nominatim Demo App",src:n(65846).A+"",width:"1904",height:"1029"})}),"\n",(0,o.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,o.jsx)(t.p,{children:"Nominatim indexes named (or numbered) features within the OpenStreetMap (OSM) dataset and a subset of other unnamed features (pubs, hotels, churches, etc)."}),"\n",(0,o.jsx)(t.p,{children:"Its API has the following endpoints for querying the data:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/nominatim/Osm-Search-API",children:"/search"})})," - search OSM objects by name or type"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/nominatim/Osm-Reverse-Search-API",children:"/reverse"})})," - search OSM object by their location"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/nominatim/Osm-AddressLookup-API",children:"/lookup"})})," - look up address details for OSM objects by their ID"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"nominatim-ui",children:"Nominatim UI"}),"\n",(0,o.jsx)(t.p,{children:"Nominatim is a search API, it does not provide a website interface on its own. nominatim-ui offers a small website for trying Nominatim and inspecting the database content."}),"\n",(0,o.jsx)(t.h2,{id:"im-getting-bad-results",children:"I'm getting bad results"}),"\n",(0,o.jsxs)(t.p,{children:["Please check the ",(0,o.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/nominatim/osm-nominatim-faq",children:"FAQ page"})," and check if there is a solution to your problem there. If the problem persists don't hesitate to contact us."]}),"\n",(0,o.jsx)(t.h2,{id:"i-cant-find-my-home-address-do-something-about-it-",children:'"I can\'t find my home address, do something about it \ud83d\ude21"'}),"\n",(0,o.jsx)(t.p,{children:"First, we are sorry, but its not our fault \ud83e\udd37"}),"\n",(0,o.jsxs)(t.p,{children:["We import the data as is from the internet, without any change or modification to maintain authenticity. Because OpenStreetMap is free and Open Source, you can go on their website at ",(0,o.jsx)(t.code,{children:"openstreetmap.org"}),", and make the changes yourself. Be sure to read the guidelines before making any change to avoid it being removed."]}),"\n",(0,o.jsxs)("font",{size:"2",children:[" Copyright \xa9 ",(0,o.jsx)(t.a,{href:"https://nominatim.org/",children:"https://nominatim.org/"})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},65846:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/nominatim-demo-51eb45293a8fcf90c59c0d10be4e2a98.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);