"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[5183],{46002:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var i=t(74848),n=t(28453),r=t(3514);const c={slug:"/schemas"},a="JSON Schemas for OpenDI API",o={id:"schemas/index",title:"JSON Schemas for OpenDI API",description:"The OpenDI API specification relies on a set of JSON Schema definitions.",source:"@site/docs/schemas/index.mdx",sourceDirName:"schemas",slug:"/schemas",permalink:"/api-specification/next/schemas",draft:!1,unlisted:!1,editUrl:"https://github.com/opendi-org/api-specification/tree/dev/docs/schemas/index.mdx",tags:[],version:"current",frontMatter:{slug:"/schemas"},sidebar:"landingSidebar",previous:{title:"Get several processors",permalink:"/api-specification/next/api/get-several-processors"},next:{title:"Causal Decision Model: Full Schema",permalink:"/api-specification/next/schemas/cdm-full-schema"}},l={},d=[];function h(e){const s={a:"a",br:"br",h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"json-schemas-for-opendi-api",children:"JSON Schemas for OpenDI API"})}),"\n","\n",(0,i.jsxs)(s.p,{children:["The OpenDI API specification relies on a set of ",(0,i.jsx)(s.a,{href:"https://json-schema.org/",children:"JSON Schema"})," definitions.",(0,i.jsx)(s.br,{}),"\n","When used together, these schemas allow developers to represent Causal Decision Models in a common data structure. The ",(0,i.jsx)(s.a,{href:"api",children:"OpenDI API specification"})," uses these schemas in its endpoint definitions."]}),"\n",(0,i.jsx)(s.p,{children:"The pages in this section provide a basic interface for exploring the full Causal Decision Model schema, as well as some examples."}),"\n",(0,i.jsx)(r.A,{})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3514:(e,s,t)=>{t.d(s,{A:()=>j});t(96540);var i=t(34164),n=t(26972),r=t(28774),c=t(53465),a=t(16654),o=t(21312),l=t(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=t(74848);function p(e){let{href:s,children:t}=e;return(0,h.jsx)(r.default,{href:s,className:(0,i.A)("card padding--lg",d.cardContainer),children:t})}function m(e){let{href:s,icon:t,title:n,description:r}=e;return(0,h.jsxs)(p,{href:s,children:[(0,h.jsxs)(l.default,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:n,children:[t," ",n]}),r&&(0,h.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function u(e){let{item:s}=e;const t=(0,n.Nr)(s),i=function(){const{selectMessage:e}=(0,c.W)();return s=>e(s,(0,o.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s}))}();return t?(0,h.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??i(s.items.length)}):null}function f(e){let{item:s}=e;const t=(0,a.A)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.cC)(s.docId??void 0);return(0,h.jsx)(m,{href:s.href,icon:t,title:s.label,description:s.description??i?.description})}function x(e){let{item:s}=e;switch(s.type){case"link":return(0,h.jsx)(f,{item:s});case"category":return(0,h.jsx)(u,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function g(e){let{className:s}=e;const t=(0,n.$S)();return(0,h.jsx)(j,{items:t.items,className:s})}function j(e){const{items:s,className:t}=e;if(!s)return(0,h.jsx)(g,{...e});const r=(0,n.d1)(s);return(0,h.jsx)("section",{className:(0,i.A)("row",t),children:r.map(((e,s)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(x,{item:e})},s)))})}}}]);