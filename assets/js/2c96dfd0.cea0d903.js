"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[76005],{54533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var i=n(87462),s=(n(67294),n(3905)),r=n(26389),o=n(94891),a=(n(75190),n(47507)),p=n(24310),c=n(63303),l=(n(75035),n(85162));const d={id:"post-bpn-discovery",title:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",description:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",sidebar_label:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Discovery"],operationId:"PostBpnDiscovery",requestBody:{description:"the request body is expecting a key (type, e.g. OEN, batteryID, etc.) - value (explicit number) pair, where this service will respond with success/error message on persistance of this key-value-pair. The BPN is hand-over by the authentication/authorization (\u2192 token). Only the owner of a BPN can link any number (e.g. OEN, batteryID, etc.) to his BPN.",content:{"application/json":{schema:{title:"IdentifierTypeKeyPair",required:["type","key"],properties:{type:{type:"string",minLength:1,maxLength:200},key:{type:"string",minLength:1,maxLength:200}}},examples:{complete:{value:{type:"oen",key:"oen-123"}}}}},required:!0},responses:{201:{description:"key value for BPN created successfully",content:{"application/json":{schema:{title:"Bpn",required:["type","key","value","resourceId"],properties:{type:{type:"string"},key:{type:"string"},value:{type:"string"},resourceId:{type:"string"}}},examples:{complete:{value:{type:"oen",key:"oen-1243",value:"bpn-123",resourceId:"1ca6f9b5-8e1d-422a-8541-9bb2cf5fe485"}}}}}}},description:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",method:"post",path:"/api/administration/connectors/bpnDiscovery",security:[{CatenaXOpenId:["profile"]}],securitySchemes:{CatenaXOpenId:{type:"openIdConnect",openIdConnectUrl:"../.well-known/openid-configuration"}},jsonRequestBodyExample:{type:"string",key:"string"},info:{title:"BPN Discovery Service",description:"BPN Discovery Service to find BPN based on a local identifier.",contact:{name:"SLDT Team"},version:"0.0.1"},postman:{name:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",description:{type:"text/plain"},url:{path:["api","administration","connectors","bpnDiscovery"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/_versioned_docs/version-3.1.0/kits/Digital Twin Kit/Software Development View/API Specs/BPN Discovery//bpn-discovery-service",custom_edit_url:null},y=void 0,m={unversionedId:"kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-bpn-discovery",id:"version-24.05/kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-bpn-discovery",title:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",description:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-bpn-discovery.api.mdx",sourceDirName:"kits/Digital Twin Kit/Software Development View/API BPN Discovery",slug:"/kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-bpn-discovery",permalink:"/docs-kits/kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-bpn-discovery",draft:!1,editUrl:null,tags:[],version:"24.05",frontMatter:{id:"post-bpn-discovery",title:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",description:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",sidebar_label:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Discovery"],operationId:"PostBpnDiscovery",requestBody:{description:"the request body is expecting a key (type, e.g. OEN, batteryID, etc.) - value (explicit number) pair, where this service will respond with success/error message on persistance of this key-value-pair. The BPN is hand-over by the authentication/authorization (\u2192 token). Only the owner of a BPN can link any number (e.g. OEN, batteryID, etc.) to his BPN.",content:{"application/json":{schema:{title:"IdentifierTypeKeyPair",required:["type","key"],properties:{type:{type:"string",minLength:1,maxLength:200},key:{type:"string",minLength:1,maxLength:200}}},examples:{complete:{value:{type:"oen",key:"oen-123"}}}}},required:!0},responses:{201:{description:"key value for BPN created successfully",content:{"application/json":{schema:{title:"Bpn",required:["type","key","value","resourceId"],properties:{type:{type:"string"},key:{type:"string"},value:{type:"string"},resourceId:{type:"string"}}},examples:{complete:{value:{type:"oen",key:"oen-1243",value:"bpn-123",resourceId:"1ca6f9b5-8e1d-422a-8541-9bb2cf5fe485"}}}}}}},description:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",method:"post",path:"/api/administration/connectors/bpnDiscovery",security:[{CatenaXOpenId:["profile"]}],securitySchemes:{CatenaXOpenId:{type:"openIdConnect",openIdConnectUrl:"../.well-known/openid-configuration"}},jsonRequestBodyExample:{type:"string",key:"string"},info:{title:"BPN Discovery Service",description:"BPN Discovery Service to find BPN based on a local identifier.",contact:{name:"SLDT Team"},version:"0.0.1"},postman:{name:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",description:{type:"text/plain"},url:{path:["api","administration","connectors","bpnDiscovery"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/_versioned_docs/version-3.1.0/kits/Digital Twin Kit/Software Development View/API Specs/BPN Discovery//bpn-discovery-service",custom_edit_url:null},sidebar:"kits",previous:{title:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",permalink:"/docs-kits/kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-batch-bpn-discovery"},next:{title:"Introduction",permalink:"/docs-kits/kits/Digital Twin Kit/Software Development View/API Discovery Finder/discovery-finder"}},u={},g=[{value:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",id:"create-new-numbers-eg-oen-batteryid-etc-corresponding-to-bpn-endpoints-as-single-entry",level:2}],v={toc:g};function b(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"create-new-numbers-eg-oen-batteryid-etc-corresponding-to-bpn-endpoints-as-single-entry"},"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry."),(0,s.kt)("p",null,"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry."),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"the request body is expecting a key (type, e.g. OEN, batteryID, etc.) - value (explicit number) pair, where this service will respond with success/error message on persistance of this key-value-pair. The BPN is hand-over by the authentication/authorization (\u2192 token). Only the owner of a BPN can link any number (e.g. OEN, batteryID, etc.) to his BPN."))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 200 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"key",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 200 characters`",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"key value for BPN created successfully")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"key",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"resourceId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(a.Z,{responseExample:'{\n  "type": "string",\n  "key": "string",\n  "value": "string",\n  "resourceId": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(l.Z,{label:"Complete",value:"Complete",mdxType:"TabItem"},(0,s.kt)(a.Z,{responseExample:'{\n  "type": "oen",\n  "key": "oen-1243",\n  "value": "bpn-123",\n  "resourceId": "1ca6f9b5-8e1d-422a-8541-9bb2cf5fe485"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);