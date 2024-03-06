"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[39187],{2599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>h,toc:()=>g});var s=r(87462),o=(r(67294),r(3905)),a=r(26389),n=r(94891),i=r(75190),c=r(47507),l=r(24310),d=r(63303),u=(r(75035),r(85162));const p={id:"get-resource-connectors-by-resource-data",title:"Gets all resource-connector rows for resourceId to find out where a resource has been published",description:"Gets all resource-connector rows for resourceId to find out where a resource has been published",sidebar_label:"Gets all resource-connector rows for resourceId to find out where a resource has been published",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ResourceConnector API"],operationId:"getResourceConnectorsByResourceData",parameters:[{name:"resourceType",in:"path",required:!0,schema:{type:"string"}},{name:"resourceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"The resource-connector pair",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{resource_id:{type:"string"},resource_revision_id:{type:"string"},resource_type:{type:"string"},connector_id:{type:"string"},connector_url:{type:"string"},sync_status:{type:"string"},connector_name:{type:"string"}}}}}}}}}}},404:{description:"No resource-connector rows found by resourceId",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},description:"Gets all resource-connector rows for resourceId to find out where a resource has been published",method:"get",path:"/resource-connector/{resourceType}/{resourceId}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets all resource-connector rows for resourceId to find out where a resource has been published",description:{type:"text/plain"},url:{path:["resource-connector",":resourceType",":resourceId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"resourceType"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"resourceId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},m=void 0,h={unversionedId:"kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-resource-data",id:"kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-resource-data",title:"Gets all resource-connector rows for resourceId to find out where a resource has been published",description:"Gets all resource-connector rows for resourceId to find out where a resource has been published",source:"@site/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-resource-data.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-resource-data",permalink:"/docs-kits/next/kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-resource-data",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-resource-connectors-by-resource-data",title:"Gets all resource-connector rows for resourceId to find out where a resource has been published",description:"Gets all resource-connector rows for resourceId to find out where a resource has been published",sidebar_label:"Gets all resource-connector rows for resourceId to find out where a resource has been published",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ResourceConnector API"],operationId:"getResourceConnectorsByResourceData",parameters:[{name:"resourceType",in:"path",required:!0,schema:{type:"string"}},{name:"resourceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"The resource-connector pair",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{resource_id:{type:"string"},resource_revision_id:{type:"string"},resource_type:{type:"string"},connector_id:{type:"string"},connector_url:{type:"string"},sync_status:{type:"string"},connector_name:{type:"string"}}}}}}}}}}},404:{description:"No resource-connector rows found by resourceId",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},description:"Gets all resource-connector rows for resourceId to find out where a resource has been published",method:"get",path:"/resource-connector/{resourceType}/{resourceId}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets all resource-connector rows for resourceId to find out where a resource has been published",description:{type:"text/plain"},url:{path:["resource-connector",":resourceType",":resourceId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"resourceType"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"resourceId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",permalink:"/docs-kits/next/kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-connector-id"},next:{title:"Creates new connector entries",permalink:"/docs-kits/next/kits/Data Governance Kit/resources/MDX Files/save-connector-info"}},y={},g=[{value:"Gets all resource-connector rows for resourceId to find out where a resource has been published",id:"gets-all-resource-connector-rows-for-resourceid-to-find-out-where-a-resource-has-been-published",level:2}],v={toc:g};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gets-all-resource-connector-rows-for-resourceid-to-find-out-where-a-resource-has-been-published"},"Gets all resource-connector rows for resourceId to find out where a resource has been published"),(0,o.kt)("p",null,"Gets all resource-connector rows for resourceId to find out where a resource has been published"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(i.Z,{className:"paramsItem",param:{name:"resourceType",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,o.kt)(i.Z,{className:"paramsItem",param:{name:"resourceId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(a.Z,{mdxType:"ApiTabs"},(0,o.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"The resource-connector pair")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"result"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"items"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"resource_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"resource_revision_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"resource_type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"connector_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"connector_url",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"sync_status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"connector_name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,o.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": {\n    "items": [\n      {\n        "resource_id": "string",\n        "resource_revision_id": "string",\n        "resource_type": "string",\n        "connector_id": "string",\n        "connector_url": "string",\n        "sync_status": "string",\n        "connector_name": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(u.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"No resource-connector rows found by resourceId")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);