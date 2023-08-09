"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[3791],{85324:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>x});var l=a(87462),i=(a(67294),a(3905)),n=a(26389),s=a(94891),m=(a(75190),a(47507)),r=a(24310),o=a(63303),p=(a(75035),a(85162));const c={id:"query-all-contract-definitions",title:"queryAllContractDefinitions",description:"Returns all contract definitions according to a query",sidebar_label:"queryAllContractDefinitions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Definition"],description:"Returns all contract definitions according to a query",operationId:"queryAllContractDefinitions",requestBody:{content:{"*/*":{schema:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:null,title:"CriterionDto"}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:null,title:"QuerySpecDto"}}}},responses:{200:{description:"The contract definitions matching the query",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@id":{type:"string",example:null},"@type":{type:"string",example:null},accessPolicyId:{type:"string",example:null},assetsSelector:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:null,title:"CriterionDto"}},contractPolicyId:{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null}},example:null,title:"ContractDefinitionResponseDto"}}}}},400:{description:"Request was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}}},method:"post",path:"/v2/contractdefinitions/request",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.1.3-SNAPSHOT"},postman:{name:"query All Contract Definitions",description:{content:"Returns all contract definitions according to a query",type:"text/plain"},url:{path:["v2","contractdefinitions","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"*/*"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""'}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},d=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-all-contract-definitions",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-all-contract-definitions",title:"queryAllContractDefinitions",description:"Returns all contract definitions according to a query",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-all-contract-definitions.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-all-contract-definitions",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-all-contract-definitions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"query-all-contract-definitions",title:"queryAllContractDefinitions",description:"Returns all contract definitions according to a query",sidebar_label:"queryAllContractDefinitions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Definition"],description:"Returns all contract definitions according to a query",operationId:"queryAllContractDefinitions",requestBody:{content:{"*/*":{schema:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:null,title:"CriterionDto"}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:null,title:"QuerySpecDto"}}}},responses:{200:{description:"The contract definitions matching the query",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@id":{type:"string",example:null},"@type":{type:"string",example:null},accessPolicyId:{type:"string",example:null},assetsSelector:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:null,title:"CriterionDto"}},contractPolicyId:{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null}},example:null,title:"ContractDefinitionResponseDto"}}}}},400:{description:"Request was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}}},method:"post",path:"/v2/contractdefinitions/request",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.1.3-SNAPSHOT"},postman:{name:"query All Contract Definitions",description:{content:"Returns all contract definitions according to a query",type:"text/plain"},url:{path:["v2","contractdefinitions","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"*/*"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""'}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},sidebar:"kits",previous:{title:"queryAllAgreements",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-all-agreements"},next:{title:"queryNegotiations",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-negotiations"}},y={},x=[{value:"queryAllContractDefinitions",id:"queryallcontractdefinitions",level:2}],g={toc:x};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"queryallcontractdefinitions"},"queryAllContractDefinitions"),(0,i.kt)("p",null,"Returns all contract definitions according to a query"),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"*/*",value:"*/*-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"@context",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"filterExpression"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(r.Z,{collapsible:!1,name:"@context",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"operandLeft",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"operandRight",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"operator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(r.Z,{collapsible:!1,name:"limit",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"offset",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"sortField",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`ASC`, `DESC`]",schema:{type:"string",example:null,enum:["ASC","DESC"]},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The contract definitions matching the query")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(r.Z,{collapsible:!1,name:"@context",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"@id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"accessPolicyId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"assetsSelector"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(r.Z,{collapsible:!1,name:"@context",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"operandLeft",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"operandRight",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"operator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(r.Z,{collapsible:!1,name:"contractPolicyId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",example:null},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request was malformed")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(r.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);