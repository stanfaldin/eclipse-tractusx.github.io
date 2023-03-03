"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[9028],{77194:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var a=s(87462),n=(s(67294),s(3905)),i=s(26389),r=s(94891),o=s(75190),l=s(47507),c=s(24310),p=s(63303),d=(s(75035),s(85162));const m={id:"cancel-transfer-process",title:"cancelTransferProcess",description:"Requests aborting the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",sidebar_label:"cancelTransferProcess",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transfer Process"],description:"Requests aborting the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",operationId:"cancelTransferProcess",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"}}],responses:{200:{description:"Request to cancel the transfer process was successfully received",links:{"poll-state":{operationId:"getTransferProcessState"}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}},404:{description:"A contract negotiation with the given ID does not exist",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}}},method:"post",path:"/transferprocess/{id}/cancel",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"cancel Transfer Process",description:{content:"Requests aborting the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",type:"text/plain"},url:{path:["transferprocess",":id","cancel"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},u=void 0,h={unversionedId:"kits/product-edc/docs/kit/development-view/openAPI/management-api/cancel-transfer-process",id:"kits/product-edc/docs/kit/development-view/openAPI/management-api/cancel-transfer-process",title:"cancelTransferProcess",description:"Requests aborting the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",source:"@site/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/cancel-transfer-process.api.mdx",sourceDirName:"kits/product-edc/docs/kit/development-view/openAPI/management-api",slug:"/kits/product-edc/docs/kit/development-view/openAPI/management-api/cancel-transfer-process",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/cancel-transfer-process",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cancel-transfer-process",title:"cancelTransferProcess",description:"Requests aborting the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",sidebar_label:"cancelTransferProcess",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transfer Process"],description:"Requests aborting the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",operationId:"cancelTransferProcess",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"}}],responses:{200:{description:"Request to cancel the transfer process was successfully received",links:{"poll-state":{operationId:"getTransferProcessState"}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}},404:{description:"A contract negotiation with the given ID does not exist",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}}},method:"post",path:"/transferprocess/{id}/cancel",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"cancel Transfer Process",description:{content:"Requests aborting the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",type:"text/plain"},url:{path:["transferprocess",":id","cancel"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},sidebar:"kits",previous:{title:"cancelNegotiation",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/cancel-negotiation"},next:{title:"checkHealth",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/check-health"}},y={},f=[{value:"cancelTransferProcess",id:"canceltransferprocess",level:2}],g={toc:f};function v(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"canceltransferprocess"},"cancelTransferProcess"),(0,n.kt)("p",null,"Requests aborting the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request to cancel the transfer process was successfully received")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request was malformed, e.g. id was null")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'[\n  {\n    "invalidValue": "string",\n    "message": "string",\n    "path": "string",\n    "type": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"A contract negotiation with the given ID does not exist")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'[\n  {\n    "invalidValue": "string",\n    "message": "string",\n    "path": "string",\n    "type": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);