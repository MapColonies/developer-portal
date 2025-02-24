"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3619],{66570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(74848),o=t(28453);const r={id:"MapColonies-api-auth",title:"Authentication",slug:"authentication",description:"MapColonies API Auth Convention",sidebar_position:2,tags:["auth","API","token","clients"]},s="Authentication",a={id:"MapColonies/MapColonies-api-auth",title:"Authentication",description:"MapColonies API Auth Convention",source:"@site/docs/MapColonies/auth.md",sourceDirName:"MapColonies",slug:"/MapColonies/authentication",permalink:"/developer-portal/pr-preview/pr-151/docs/MapColonies/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/auth.md",tags:[{inline:!0,label:"auth",permalink:"/developer-portal/pr-preview/pr-151/docs/tags/auth"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-151/docs/tags/api"},{inline:!0,label:"token",permalink:"/developer-portal/pr-preview/pr-151/docs/tags/token"},{inline:!0,label:"clients",permalink:"/developer-portal/pr-preview/pr-151/docs/tags/clients"}],version:"current",sidebarPosition:2,frontMatter:{id:"MapColonies-api-auth",title:"Authentication",slug:"authentication",description:"MapColonies API Auth Convention",sidebar_position:2,tags:["auth","API","token","clients"]},sidebar:"docSidebar",next:{title:"Raster",permalink:"/developer-portal/pr-preview/pr-151/docs/MapColonies/Raster/overview"}},l={},d=[{value:"Supplying the token",id:"supplying-the-token",level:2},{value:"Using the token as a query parameter",id:"using-the-token-as-a-query-parameter",level:2},{value:"Using the token as a header",id:"using-the-token-as-a-header",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"authentication",children:"Authentication"})}),"\n",(0,i.jsxs)(n.p,{children:["In order to make requests either as a service or a client, you will need to identify yourself with a ",(0,i.jsx)(n.code,{children:"token"}),".\nThe ",(0,i.jsx)(n.code,{children:"token"})," should be used in ",(0,i.jsx)(n.strong,{children:"every"})," request to our services and will allow you to access our services in accordance to the permissions that were given to you.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"All services"})," will require an ",(0,i.jsx)(n.code,{children:"API Token"}),", it will be specified in each service description."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["The token might have an ",(0,i.jsx)(n.strong,{children:"expiration date"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"supplying-the-token",children:"Supplying the token"}),"\n",(0,i.jsxs)(n.p,{children:["When making any request, you need to add a special ",(0,i.jsx)(n.strong,{children:"header"})," or ",(0,i.jsx)(n.strong,{children:"query parameter"})," in which you supply the token."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"How we supply the token"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Name"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Query"}),(0,i.jsx)(n.td,{children:"token"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Header"}),(0,i.jsx)(n.td,{children:"x-api-key"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important:"})," Some services support only one of the above methods for supplying a ",(0,i.jsx)(n.code,{children:"token"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"using-the-token-as-a-query-parameter",children:"Using the token as a query parameter"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<SERVICE_URL>/SUB/PATH?token=<token>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-the-token-as-a-header",children:"Using the token as a header"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-curl",children:"curl --location --request <http_method> '<SERVICE_URL>' --header 'x-api-key: <token>'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);