"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[771],{2040:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(4848),c=t(8453),s=t(1432);const d=JSON.parse('{"$schema":"./Causal-Decision-Model.json","meta":{"uuid":"28eefdc9-d38c-458d-a0b1-cba3706a09e4","name":"Example/Test Model","summary":"An example CDM for testing/demonstrating the CDM JSON schema.","status":"Draft","version":"0.0.1","creator":"9744a75e-6339-43ad-beec-b1a4f23e7e26","createdDate":"2024-08-20T09:45:41-04:00"},"evaluatables":[{"meta":{"uuid":"c7baceb4-33cf-4b7a-acea-4cd5e15340e5","name":"Example evaluatable causal decision model."},"elements":[{"meta":{"uuid":"16283e16-9c8e-4971-ad58-4d3b92066223","name":"An action"},"causalType":"Lever","evalType":"Script","defaultValue":null},{"meta":{"uuid":"ea9ea804-2de2-46ea-b0eb-f08d7649c215","name":"Another action"},"causalType":"Lever","evalType":"Script","content":{"script":"Script content (as a string) would go here.","language":"lang1"},"defaultValue":0},{"meta":{"uuid":"6a6fa173-7bff-4913-9f5b-5da98075302e","name":"An outcome"},"causalType":"Outcome","evalType":"Binary Base64","content":{"base64String":"Bease 64 string would go here."},"defaultValue":null},{"meta":{"uuid":"42856efc-35f4-4772-9c5c-ad6c6ba8e419","name":"A constraint"},"causalType":"CUSTOM_Constraint","evalType":"Script","content":{"script":"return ea9ea804-2de2-46ea-b0eb-f08d7649c215 < 16283e16-9c8e-4971-ad58-4d3b92066223;","language":"lang1"},"defaultValue":false}]}],"diagrams":[{"meta":{"uuid":"999cad87-3323-4919-b870-1b91170abe0d","name":"Example diagram associated with the causal decision model."},"elements":[{"meta":{"uuid":"f246e2ee-41e4-48e4-b822-b4a9c886ab7e","name":"An action"},"causalType":"Lever","diaType":"box","content":{"position":{"x":10,"y":10},"boundingBoxSize":{"width":400,"height":300}},"associatedEvalElements":["16283e16-9c8e-4971-ad58-4d3b92066223"]},{"meta":{"uuid":"d701c69a-6cbe-44c5-ac04-b196756170cf","name":"Another action"},"causalType":"Lever","diaType":"box","content":{"position":{"x":10,"y":400},"boundingBoxSize":{"width":400,"height":300}},"associatedEvalElements":["ea9ea804-2de2-46ea-b0eb-f08d7649c215"]},{"meta":{"uuid":"edeae2fc-79b8-444a-9c52-65c499c171d7","name":"An outcome"},"causalType":"Outcome","diaType":"box","content":{"position":{"x":500,"y":10},"boundingBoxSize":{"width":400,"height":300}},"associatedEvalElements":["6a6fa173-7bff-4913-9f5b-5da98075302e"]},{"meta":{"uuid":"b7dac5d9-5c33-45bd-b30e-752f04997c1f","name":"A constraint"},"causalType":"CUSTOM_Constraint","diaType":"box","content":{"position":{"x":10,"y":800},"boundingBoxSize":{"width":400,"height":300}},"associatedEvalElements":["42856efc-35f4-4772-9c5c-ad6c6ba8e419"]},{"meta":{"uuid":"c0d51c2e-3063-4637-8db7-c5d5f6779736","name":"A diagram-only example element","summary":"This element does not have an associated evaluatable element!"},"causalType":null,"diaType":"point","content":{"position":{"x":500,"y":400}}}],"dependencies":[{"meta":{"uuid":"0bb28923-5ef4-483c-af32-1bea58732614"},"source":"16283e16-9c8e-4971-ad58-4d3b92066223","target":"6a6fa173-7bff-4913-9f5b-5da98075302e"},{"meta":{"uuid":"d2d0e096-9d45-41e9-9a47-3a4791895fc0"},"source":"ea9ea804-2de2-46ea-b0eb-f08d7649c215","target":"6a6fa173-7bff-4913-9f5b-5da98075302e"},{"meta":{"uuid":"e3709be0-ea19-41d9-b7c4-7cc602117c27"},"source":"42856efc-35f4-4772-9c5c-ad6c6ba8e419","target":"ea9ea804-2de2-46ea-b0eb-f08d7649c215"}]}]}'),i={},o="Test Data",l={id:"sample-data",title:"Test Data",description:"The following example data adheres to the current draft of the OpenDI JSON Schema.",source:"@site/versioned_docs/version-Live/sample-data.mdx",sourceDirName:".",slug:"/sample-data",permalink:"/sample-data",draft:!1,unlisted:!1,tags:[],version:"Live",frontMatter:{},sidebar:"landingSidebar",previous:{title:"Schema",permalink:"/"}},r={},u=[];function m(e){const a={a:"a",br:"br",h1:"h1",p:"p",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"test-data",children:"Test Data"}),"\n",(0,n.jsxs)(a.p,{children:["The following example data adheres to the current draft of the OpenDI JSON Schema.",(0,n.jsx)(a.br,{}),"\n","This demonstrates the intended structure of the CDM overall, and provides some examples of valid permutations for internal components."]}),"\n",(0,n.jsx)(a.p,{children:"This is not intended as a working or applied example of a CDM in a realistic context."}),"\n",(0,n.jsxs)(a.p,{children:["You can also view the ",(0,n.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3633).A+"",children:"raw source file"}),"."]}),"\n",(0,n.jsx)(s.default,{language:"json",title:"OpenDI JSON Schema -- Schema-Compliant Data",children:JSON.stringify(d,null,2)})]})}function b(e={}){const{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},3633:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/files/test-data-7aac5d255851911cfc9643180a1f7d84.json"}}]);