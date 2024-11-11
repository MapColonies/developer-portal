"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3619],{66570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(74848),r=n(28453);const o={id:"MapColonies-api-auth",title:"Authentication",slug:"authentication",description:"MapColonies API Auth Convention",sidebar_position:2,tags:["auth","API","token","clients"]},s="Authentication",a={id:"MapColonies/MapColonies-api-auth",title:"Authentication",description:"MapColonies API Auth Convention",source:"@site/docs/MapColonies/auth.md",sourceDirName:"MapColonies",slug:"/MapColonies/authentication",permalink:"/developer-portal/pr-preview/pr-122/docs/MapColonies/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/auth.md",tags:[{inline:!0,label:"auth",permalink:"/developer-portal/pr-preview/pr-122/docs/tags/auth"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-122/docs/tags/api"},{inline:!0,label:"token",permalink:"/developer-portal/pr-preview/pr-122/docs/tags/token"},{inline:!0,label:"clients",permalink:"/developer-portal/pr-preview/pr-122/docs/tags/clients"}],version:"current",sidebarPosition:2,frontMatter:{id:"MapColonies-api-auth",title:"Authentication",slug:"authentication",description:"MapColonies API Auth Convention",sidebar_position:2,tags:["auth","API","token","clients"]},sidebar:"docSidebar",previous:{title:"Terms & Abbreviations",permalink:"/developer-portal/pr-preview/pr-122/docs/MapColonies/terms"},next:{title:"Raster",permalink:"/developer-portal/pr-preview/pr-122/docs/MapColonies/Raster/overview"}},l={},d=[{value:"Supplying the token",id:"supplying-the-token",level:2},{value:"Using the token as a query parameter",id:"using-the-token-as-a-query-parameter",level:2},{value:"Using the token as a header",id:"using-the-token-as-a-header",level:2}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"authentication",children:"Authentication"})}),"\n",(0,i.jsxs)(t.p,{children:["In order to make requests either as a service or a client, you will need to identify yourself with a ",(0,i.jsx)(t.code,{children:"token"}),".\nThe ",(0,i.jsx)(t.code,{children:"token"})," should be used in ",(0,i.jsx)(t.strong,{children:"every"})," request to our services and will allow you to access our services in accordance to the permissions that were given to you.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"All services"})," will require an ",(0,i.jsx)(t.code,{children:"API Token"}),", it will be specified in each service description."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The token might have an ",(0,i.jsx)(t.strong,{children:"expiration date"})]})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Important:"})," only ",(0,i.jsx)(t.strong,{children:"query parameter"})," ",(0,i.jsx)(t.code,{children:"token"})," is currently supported"]})}),"\n",(0,i.jsx)(t.h2,{id:"supplying-the-token",children:"Supplying the token"}),"\n",(0,i.jsxs)(t.p,{children:["When making any request, you need to add a special ",(0,i.jsx)(t.strong,{children:"header"})," or ",(0,i.jsx)(t.strong,{children:"query parameter"})," in which you supply the token."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"How we supply the token"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Name"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Query"}),(0,i.jsx)(t.td,{children:"token"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Header"}),(0,i.jsx)(t.td,{children:"x-api-key"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"using-the-token-as-a-query-parameter",children:"Using the token as a query parameter"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"<SERVICE_URL>/SUB/PATH?token=<token>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"using-the-token-as-a-header",children:"Using the token as a header"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-curl",children:"curl --location --request <http_method> '<SERVICE_URL>' --header 'x-api-key: <token>'\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);