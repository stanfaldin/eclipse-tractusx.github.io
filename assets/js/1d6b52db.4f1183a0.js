"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[68586],{95648:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>x});var l=a(87462),s=(a(67294),a(3905)),i=a(26389),r=a(94891),n=(a(75190),a(47507)),m=a(24310),p=a(63303),o=(a(75035),a(85162));const c={id:"query-transfer-processes",title:"queryTransferProcesses",description:"Returns all transfer process according to a query",sidebar_label:"queryTransferProcesses",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transfer Process"],description:"Returns all transfer process according to a query",operationId:"queryTransferProcesses",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:null,title:"CriterionDto"}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:null,title:"QuerySpecDto"}}}},responses:{200:{description:"The transfer processes matching the query",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@id":{type:"string",example:null},"@type":{type:"string",example:null},callbackAddresses:{type:"array",example:null,items:{type:"object",properties:{authCodeId:{type:"string",example:null},authKey:{type:"string",example:null},events:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},transactional:{type:"boolean",example:null},uri:{type:"string",example:null}},example:null,title:"CallbackAddress"}},createdAt:{type:"integer",format:"int64",example:null},dataDestination:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}},example:null,title:"DataAddressDto"},dataRequest:{type:"object",properties:{assetId:{type:"string",example:null},connectorId:{type:"string",example:null},contractId:{type:"string",example:null},id:{type:"string",example:null}},example:null,title:"DataRequestDto"},errorDetail:{type:"string",example:null},properties:{type:"object",additionalProperties:{type:"string",example:null},example:null},state:{type:"string",example:null},stateTimestamp:{type:"integer",format:"int64",example:null},type:{type:"string",example:null},updatedAt:{type:"integer",format:"int64",example:null}},example:null,title:"TransferProcessDto"}}}}},400:{description:"Request was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}}},method:"post",path:"/v2/transferprocesses/request",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.1.3-SNAPSHOT"},postman:{name:"query Transfer Processes",description:{content:"Returns all transfer process according to a query",type:"text/plain"},url:{path:["v2","transferprocesses","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},u=void 0,d={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-transfer-processes",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-transfer-processes",title:"queryTransferProcesses",description:"Returns all transfer process according to a query",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-transfer-processes.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-transfer-processes",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-transfer-processes",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"query-transfer-processes",title:"queryTransferProcesses",description:"Returns all transfer process according to a query",sidebar_label:"queryTransferProcesses",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transfer Process"],description:"Returns all transfer process according to a query",operationId:"queryTransferProcesses",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:null,title:"CriterionDto"}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:null,title:"QuerySpecDto"}}}},responses:{200:{description:"The transfer processes matching the query",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@id":{type:"string",example:null},"@type":{type:"string",example:null},callbackAddresses:{type:"array",example:null,items:{type:"object",properties:{authCodeId:{type:"string",example:null},authKey:{type:"string",example:null},events:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},transactional:{type:"boolean",example:null},uri:{type:"string",example:null}},example:null,title:"CallbackAddress"}},createdAt:{type:"integer",format:"int64",example:null},dataDestination:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}},example:null,title:"DataAddressDto"},dataRequest:{type:"object",properties:{assetId:{type:"string",example:null},connectorId:{type:"string",example:null},contractId:{type:"string",example:null},id:{type:"string",example:null}},example:null,title:"DataRequestDto"},errorDetail:{type:"string",example:null},properties:{type:"object",additionalProperties:{type:"string",example:null},example:null},state:{type:"string",example:null},stateTimestamp:{type:"integer",format:"int64",example:null},type:{type:"string",example:null},updatedAt:{type:"integer",format:"int64",example:null}},example:null,title:"TransferProcessDto"}}}}},400:{description:"Request was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}}},method:"post",path:"/v2/transferprocesses/request",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.1.3-SNAPSHOT"},postman:{name:"query Transfer Processes",description:{content:"Returns all transfer process according to a query",type:"text/plain"},url:{path:["v2","transferprocesses","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},sidebar:"kits",previous:{title:"queryPolicyDefinitions",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/query-policy-definitions"},next:{title:"removeAsset",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/remove-asset"}},y={},x=[{value:"queryTransferProcesses",id:"querytransferprocesses",level:2}],g={toc:x};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"querytransferprocesses"},"queryTransferProcesses"),(0,s.kt)("p",null,"Returns all transfer process according to a query"),(0,s.kt)(r.Z,{mdxType:"MimeTabs"},(0,s.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"@context",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"filterExpression"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"@context",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"operandLeft",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"operandRight",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"operator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(m.Z,{collapsible:!1,name:"limit",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"offset",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"sortField",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`ASC`, `DESC`]",schema:{type:"string",example:null,enum:["ASC","DESC"]},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The transfer processes matching the query")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"@context",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"@id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"callbackAddresses"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"authCodeId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"authKey",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"events",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"transactional",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"uri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"dataDestination"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"@context",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"properties"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("code",null,"property name*"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"dataRequest"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"assetId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"connectorId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"contractId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!1,name:"errorDetail",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"properties"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("code",null,"property name*"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")))))),(0,s.kt)(m.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"stateTimestamp",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",example:null},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Request was malformed")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);