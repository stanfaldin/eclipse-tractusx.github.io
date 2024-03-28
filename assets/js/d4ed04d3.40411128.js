"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[66839],{81849:(e,t,a)=>{a.d(t,{Z:()=>d});var s=a(87462),i=a(67294),c=a(44679),r=a(38895),o=a(22797),n=a(23508);const l={product_accordion_card:"product_accordion_card_MMEd",accordion:"accordion_fnGx",summary_container:"summary_container_exLB",product_title_container:"product_title_container_BNyb",product_title:"product_title_EAR6",version:"version_uFfv",no_more_content:"no_more_content_zxeB",repo_contact_container:"repo_contact_container_O4vj",repo_details_container:"repo_details_container_MpwY",item_title:"item_title_IuEX",item_link:"item_link_ENe4",details_container:"details_container_py0t",description_container:"description_container_bHo4",description:"description_b01C",no_display:"no_display_wmgb"};function p(e){let{productName:t,productDescription:a,githubRepo:s,committers:p,mailTo:m,hasBoard:u,subTitle:h,showVersion:d=!1}=e;const[g,b]=(0,i.useState)();let f=[...s],v=f.splice(0,1).toString(),_=v.split("/")[3],E=v.split("/")[4],N=m.split("?")[0];(0,i.useEffect)((()=>{fetch(`https://api.github.com/repos/${_}/${E}/releases/latest`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/vnd.github.html+json"}}).then((e=>e.json())).then((e=>{b(e.name)})).catch((e=>console.log(e)))}),[]);const[y,x]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,i.createElement("div",{className:l.product_accordion_card},i.createElement(c.Z,{expanded:y,className:l.accordion},i.createElement(r.Z,{expandIcon:i.createElement(n.Z,{style:{cursor:"pointer"},sx:{color:"#FAA023",fontSize:"2rem"},onClick:()=>x(!y)}),sx:{backgroundColor:"#000",color:"#fff",paddingBottom:"0.5rem",cursor:"unset !important"}},i.createElement("section",{className:l.summary_container},i.createElement("div",{className:l.product_title_container},i.createElement("h2",{className:l.product_title},t),h&&i.createElement("p",{className:l.version},h),d&&null!=g?i.createElement("p",{className:l.version},"Version:",(e=>{let t=e.toLowerCase();return t.startsWith("v")?t.slice(1):t})(g)):i.createElement("p",{className:l.no_display})),i.createElement("div",{className:l.repo_contact_container},i.createElement("ul",{className:l.repo_contact_item},i.createElement("li",{className:l.item_title},"Leading Repository:"),i.createElement("li",{className:l.item_link},i.createElement("a",{href:v},v.substring(19,v.length)))),""!=m&&i.createElement("ul",{className:l.repo_contact_item},i.createElement("li",{className:l.item_title},"Contact:"),i.createElement("li",{className:l.item_link},i.createElement("a",{href:`mailto:${m}`},N)))))),i.createElement(o.Z,{sx:{backgroundColor:"#000",color:"#fff",paddingBottom:"2rem"}},i.createElement("section",{className:l.details_container},i.createElement("div",{className:l.repo_details_container},i.createElement("ul",{className:l.repo_contact_item},i.createElement("li",{className:l.item_title},"Further Repositories:"),f.length>0?f.map(((e,t)=>i.createElement("li",{key:t,className:l.item_link},i.createElement("a",{href:e},e.substring(19,e.length))))):i.createElement("li",{className:l.no_more_content},"No more repositories")),i.createElement("ul",{className:l.repo_contact_item},i.createElement("li",{className:l.item_title},"Committers:"),p.length>0?p.map(((e,t)=>i.createElement("li",{key:t,className:l.item_link},i.createElement("a",{href:e},`@${e.substring(19,e.length)}`)))):i.createElement("li",{className:l.no_more_content},"No committers provided")),u?i.createElement("ul",{className:l.repo_contact_item},i.createElement("li",{className:l.item_title},"Board:"),i.createElement("li",{className:l.item_link},i.createElement("a",{href:`${v}/discussions`},`${v.substring(19,v.length)}/discussions`))):i.createElement("ul",{className:l.no_display}),i.createElement("div",{className:l.description_container},a.length>175?i.createElement("p",{className:l.description},a.substring(0,175),"..."):i.createElement("p",{className:l.description},a))))))))}const m=[{productName:"Business Partner Data Management",productDescription:"The project provides core services for querying, adding, and changing business partner data in the Catena-X data space. Currently, BPDM consists of the Pool and Gate API.",githubRepo:["https://github.com/eclipse-tractusx/bpdm"],committers:["https://github.com/nicoprow","https://github.com/pazepaze","https://github.com/Maximilianong"],mailTo:"tractusx-dev@eclipse.org?subject=Request Business Partner Data Management Team",hasBoard:!1,showVersion:!0},{productName:"IDS Essential Services",productDescription:"The project provides additional services to enable an IDSA-infrastructure within the Catena-X dataspace.",githubRepo:["https://github.com/eclipse-tractusx/daps-registration-service","https://github.com/eclipse-tractusx/daps-helm-chart","https://github.com/eclipse-tractusx/sd-factory","https://github.com/eclipse-tractusx/autosetup-backend"],committers:["https://github.com/wjost"],mailTo:"tractusx-dev@eclipse.org?subject=Request IDS Essential Services Team",hasBoard:!1,showVersion:!0},{productName:"Generic Data Services",productDescription:"The project provides an easy-to-use service which enables small and medium sized companies to provide their data in the Catena-X dataspace via an EDC (e.g., CSV-Upload).",githubRepo:["https://github.com/eclipse-tractusx/dft-backend","https://github.com/eclipse-tractusx/dft-frontend"],committers:["https://github.com/wjost"],mailTo:"tractusx-dev@eclipse.org?subject=Request Semantic Layer & Digital Twin Team",hasBoard:!1,showVersion:!0},{productName:"Item Relationship Service",productDescription:"The project provides a service for ad-hoc data chains across n-tier values chains for different use cases based on the EDC.",githubRepo:["https://github.com/eclipse-tractusx/item-relationship-service"],committers:["https://github.com/ds-jkreutzfeld","https://github.com/ds-jhartmann","https://github.com/ds-mkanal","https://github.com/jzbmw"],mailTo:"tractusx-dev@eclipse.org?subject=Request Item Relationship Service Team",hasBoard:!1,showVersion:!0},{productName:"Portal & Marketplaces",productDescription:"The Portal facilitates the operations for dataspace members (companies), it includes functionalities such as registration, technical onboarding and marketplaces.",githubRepo:["https://github.com/eclipse-tractusx/portal","https://github.com/eclipse-tractusx/portal-backend","https://github.com/eclipse-tractusx/portal-frontend","https://github.com/eclipse-tractusx/portal-frontend-registration","https://github.com/eclipse-tractusx/portal-assets","https://github.com/eclipse-tractusx/portal-iam"],committers:["https://github.com/evegufy","https://github.com/ntruchsess","https://github.com/oyo","https://github.com/Phil91"],mailTo:"tractusx-dev@eclipse.org?subject=Request Portal and Marketplaces Team",hasBoard:!1,showVersion:!0},{productName:"Semantic Layer & Digital Twin",productDescription:"The project provides methods and tooling to build semantic models (e.g., semantic hub). In addition, it provides standards and services to manage digital twins.",githubRepo:["https://github.com/eclipse-tractusx/sldt-semantic-models","https://github.com/eclipse-tractusx/sldt-semantic-hub","https://github.com/eclipse-tractusx/sldt-digital-twin-registry"],committers:["https://github.com/bs-jokri","https://github.com/eriksven","https://github.com/LuLeRoemer","https://github.com/tunacicek"],mailTo:"tractusx-dev@eclipse.org?subject=Request Semantic Layer & Digital Twin Team",hasBoard:!1,showVersion:!0},{productName:"Trace-X",productDescription:"The project provides a business application for tracking parts along the supply chain. A high level of transparency across the supplier network enables faster intervention based on a recorded event in the supply chain.",githubRepo:["https://github.com/eclipse-tractusx/traceability-foss-backend","https://github.com/eclipse-tractusx/traceability-foss-frontend"],committers:["https://github.com/ds-mkanal"],mailTo:"tractusx-dev@eclipse.org?subject=Request Trace-X Team",hasBoard:!1,showVersion:!0},{productName:"Tractus-X EDC",productDescription:"The project provides the pre-built control- and data-plane docker images and helm charts of the Eclipse Dataspace Connector Project.",githubRepo:["https://github.com/eclipse-tractusx/tractusx-edc"],committers:["https://github.com/paullatzelsperger","https://github.com/florianrusch-zf"],mailTo:"tractusx-dev@eclipse.org?subject=Request Tractus-X EDC Team",hasBoard:!0,showVersion:!0},{productName:"Policy Hub",productDescription:"The Policy Hub enables data providers, consumers and app providers to access a single-point-of-truth for Catena-X policies, attributes and templates for policy rules.",githubRepo:["https://github.com/eclipse-tractusx/policy-hub"],committers:["https://github.com/Phil91","https://github.com/ntruchsess","https://github.com/evegufy"],mailTo:"tractusx-dev@eclipse.org?subject=Request Tractus-X Policy Hub Team",hasBoard:!1,showVersion:!0}],u="product_overview_JsuP",h="container_BydQ";function d(e){let{inputData:t}=e,a=m;return t&&(a=t),i.createElement("section",{className:u},i.createElement("div",{className:h},a.map(((e,t)=>i.createElement(p,(0,s.Z)({key:t},e))))))}},74917:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(67294);const i="usage_header_ICsx",c="container_y3M6",r="svg_container_cOuj",o="information_container_yDfA";function n(e){return console.log(e),s.createElement("header",{className:i},s.createElement("div",{className:c},s.createElement("div",{className:r},e.icon),s.createElement("div",{className:o},s.createElement("h1",{className:"headers-title-h1"},e.title),s.createElement("p",{className:"headers-subtitle-p"},e.description))))}},8062:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var s,i,c,r=a(67294),o=a(52263),n=a(67418),l=a(74917);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},p.apply(this,arguments)}const m=e=>{let{title:t,titleId:a,...o}=e;return r.createElement("svg",p({width:188,height:182,viewBox:"0 0 188 182",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},o),t?r.createElement("title",{id:a},t):null,r.createElement("g",{clipPath:"url(#a)"},r.createElement("mask",{id:"b",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:0,y:0,width:188,height:182},s||(s=r.createElement("path",{d:"M188 0H0v182h188V0Z",fill:"#fff"}))),i||(i=r.createElement("g",{mask:"url(#b)",fill:"#fff"},r.createElement("path",{d:"M25.57 154.905a27.076 27.076 0 0 0 7.333 18.51 27.108 27.108 0 0 0 36.971 2.397 27.081 27.081 0 0 0 9.664-17.408h6.606a3.502 3.502 0 0 0 2.477-5.976 3.5 3.5 0 0 0-2.477-1.025h-6.606a27.002 27.002 0 0 0-8.028-15.953l3.087-4.461a3.5 3.5 0 0 0-1-4.706 3.507 3.507 0 0 0-4.757.73l-2.951 4.262a26.917 26.917 0 0 0-18.402-2.943l-2.102-6.464a3.501 3.501 0 0 0-6.658 2.161l2.128 6.551a27.11 27.11 0 0 0-15.28 24.344m27.109-20.098a20.116 20.116 0 0 1 11.168 3.388 20.085 20.085 0 0 1 3.044 30.915 20.112 20.112 0 0 1-30.931-3.043 20.086 20.086 0 0 1-3.39-11.162 20.115 20.115 0 0 1 5.896-14.205 20.136 20.136 0 0 1 14.213-5.893ZM94.003 61.256a3.502 3.502 0 0 0 3.49-3.507v-3.81c6.177-.8 11.889-3.71 16.167-8.238l5.381 3.905a3.503 3.503 0 0 0 5.517-3.38 3.5 3.5 0 0 0-1.4-2.283l-5.362-3.89a27.077 27.077 0 0 0-.49-26.804A27.104 27.104 0 0 0 93.996-.014a27.12 27.12 0 0 0-23.311 13.263 27.085 27.085 0 0 0-.49 26.804L64.9 43.898a3.502 3.502 0 0 0 4.118 5.666l5.316-3.863a27.025 27.025 0 0 0 16.168 8.238v3.81a3.5 3.5 0 0 0 3.505 3.503M73.894 27.095A20.087 20.087 0 0 1 86.307 8.535a20.115 20.115 0 0 1 21.908 4.357 20.088 20.088 0 0 1-3.044 30.914 20.113 20.113 0 0 1-11.168 3.388A20.136 20.136 0 0 1 79.79 41.3a20.115 20.115 0 0 1-5.896-14.204ZM188.005 76.25a27.062 27.062 0 0 0-16.838-25.12 27.082 27.082 0 0 0-29.617 6.161l-5.433-3.938a3.509 3.509 0 0 0-5.534 3.372 3.51 3.51 0 0 0 1.398 2.291l5.343 3.875a26.858 26.858 0 0 0-3.557 13.363c.004 1.751.177 3.498.515 5.216l-4.275 1.424a3.503 3.503 0 1 0 2.215 6.64l4.309-1.435a27.213 27.213 0 0 0 12.919 12.687l-2.004 6.167a3.501 3.501 0 0 0 1.055 3.743 3.497 3.497 0 0 0 2.548.828 3.512 3.512 0 0 0 2.388-1.215c.299-.35.526-.754.668-1.191l2.019-6.212a27.024 27.024 0 0 0 22.204-5.845 26.988 26.988 0 0 0 9.677-20.81Zm-27.109 20.098a20.1 20.1 0 0 1-18.572-12.406 20.085 20.085 0 0 1 4.359-21.897 20.112 20.112 0 0 1 30.931 3.043 20.084 20.084 0 0 1 3.39 11.162 20.121 20.121 0 0 1-5.897 14.204 20.141 20.141 0 0 1-14.211 5.894ZM27.11 103.345a27.155 27.155 0 0 0 4.752-.44l2.045 6.291a3.495 3.495 0 0 0 1.74 2.037 3.493 3.493 0 0 0 2.67.211 3.51 3.51 0 0 0 2.038-1.739 3.495 3.495 0 0 0 .211-2.67l-2.03-6.245a27.249 27.249 0 0 0 12.923-12.684l4.309 1.436a3.505 3.505 0 0 0 4.34-4.904 3.504 3.504 0 0 0-2.125-1.737l-4.275-1.42c.338-1.718.51-3.465.515-5.216A26.846 26.846 0 0 0 50.666 62.9l5.237-3.806a3.5 3.5 0 1 0-4.117-5.664l-5.335 3.86a27.1 27.1 0 0 0-24.44-7.63A27.104 27.104 0 0 0 2.124 65.779a27.07 27.07 0 0 0 2.419 25.476 27.096 27.096 0 0 0 22.566 12.09Zm0-47.19a20.111 20.111 0 0 1 18.57 12.407 20.083 20.083 0 0 1-4.358 21.897 20.108 20.108 0 0 1-21.909 4.356A20.087 20.087 0 0 1 7 76.254a20.115 20.115 0 0 1 5.9-14.2 20.137 20.137 0 0 1 14.21-5.89M101.854 158.404h6.606a27.076 27.076 0 0 0 16.095 21.372 27.108 27.108 0 0 0 26.609-2.87 27.079 27.079 0 0 0 11.161-24.313 27.08 27.08 0 0 0-15.178-22.032l2.03-6.231a3.5 3.5 0 0 0-2.263-4.379 3.506 3.506 0 0 0-4.403 2.218l-2 6.148a26.923 26.923 0 0 0-18.402 2.943l-2.959-4.258a3.505 3.505 0 0 0-5.757 3.987l3.091 4.461a27.009 27.009 0 0 0-8.031 15.953h-6.599a3.505 3.505 0 0 0-3.502 3.5 3.501 3.501 0 0 0 3.502 3.501Zm33.464-23.593a20.117 20.117 0 0 1 11.168 3.391 20.083 20.083 0 0 1 3.035 30.917 20.105 20.105 0 0 1-21.911 4.348 20.103 20.103 0 0 1-9.02-7.404 20.084 20.084 0 0 1-3.384-11.165 20.116 20.116 0 0 1 5.901-14.199 20.14 20.14 0 0 1 14.211-5.888ZM103.507 116.705l2.105 3.04a3.515 3.515 0 0 0 2.881 1.503 3.497 3.497 0 0 0 3.098-1.878 3.507 3.507 0 0 0-.222-3.616l-2.256-3.228a20.574 20.574 0 0 0 5.689-17.197l4.44-1.48a3.502 3.502 0 1 0-2.214-6.64l-4.268 1.42a21.025 21.025 0 0 0-15.277-11.32V73.5a3.5 3.5 0 0 0-3.502-3.5 3.503 3.503 0 0 0-3.503 3.5v3.815a21.062 21.062 0 0 0-15.25 11.319l-4.264-1.42a3.506 3.506 0 0 0-4.73 3.558 3.5 3.5 0 0 0 2.515 3.081l4.437 1.481c-.117.883-.18 1.773-.188 2.665a20.912 20.912 0 0 0 5.877 14.532l-2.256 3.228a3.5 3.5 0 0 0 3.513 5.317 3.506 3.506 0 0 0 2.24-1.33l2.105-3.04a20.847 20.847 0 0 0 19.011 0M79.973 97.998a13.998 13.998 0 0 1 8.647-12.94 14.018 14.018 0 0 1 15.269 3.035 13.993 13.993 0 0 1 3.036 15.261 14.004 14.004 0 0 1-12.946 8.642 14.026 14.026 0 0 1-9.9-4.104 14.012 14.012 0 0 1-4.106-9.894Z"})))),c||(c=r.createElement("defs",null,r.createElement("clipPath",{id:"a"},r.createElement("path",{fill:"#fff",d:"M0 0h188v182H0z"})))))},u="content_Kce_",h="container_MLkm";var d=a(81849);const g=[{productName:"Business Partner Data Management",subTitle:"",productDescription:"The core services for querying, adding, and changing business partner data in the Catena-X data space and the unique company identifier.",githubRepo:["https://github.com/eclipse-tractusx/bpdm","https://github.com/eclipse-tractusx/bpdm-certificate-management","https://github.com/bpdm"],committers:[],mailTo:"",hasBoard:!1},{productName:"Portal & Marketplace",subTitle:"",productDescription:"The entry point to the Catena-X data space for all participants such as registration or onboarding. Access to the Catena-X Marketplace and more.",githubRepo:["https://github.com/eclipse-tractusx/portal-frontend","https://github.com/eclipse-tractusx/portal-backend","https://github.com/eclipse-tractusx/portal-frontend-registration","https://github.com/eclipse-tractusx/portal-assets","https://github.com/eclipse-tractusx/portal-shared-components","https://github.com/eclipse-tractusx/portal-shared-components","https://github.com/eclipse-tractusx/portal-cd"],committers:[],mailTo:"",hasBoard:!1},{productName:"Semantic Hub",subTitle:"",productDescription:"The Discovery Finder is used to find endpoints of BPN Discoveries for a specific type, e.g. 'oen'",githubRepo:["https://github.com/eclipse-tractusx/sldt-semantic-models","https://github.com/eclipse-tractusx/sldt-semantic-hub"],committers:[],mailTo:"",hasBoard:!1},{productName:"Discovery Finder",subTitle:"",productDescription:"The Discovery Finder is used to find endpoints of BPN Discoveries for a specific type, e.g. 'oen'",githubRepo:["https://github.com/eclipse-tractusx/sldt-discovery-finder"],committers:[],mailTo:"",hasBoard:!1},{productName:"BPN Discovery",subTitle:"",productDescription:"The BPN Discovery is used to search for a specific type/key-combination for a Business Partner Number (BPN).",githubRepo:["https://github.com/eclipse-tractusx/sldt-bpn-discovery"],committers:[],mailTo:"",hasBoard:!1}];function b(){const{siteConfig:e}=(0,o.Z)();return r.createElement(n.Z,{title:"Operator page",description:"Description will go into a meta tag in <head />"},r.createElement(l.Z,{description:"You want to operate core services?",title:"Operator",icon:r.createElement(m,null)}),r.createElement("main",null,r.createElement("section",{className:u},r.createElement("div",{className:h},r.createElement("div",null,r.createElement("p",{className:"description-p"},"Core Service Providers operate core services that enable the basic functionality of the Catena-X data space (e.g. Identity Provider, Marketplace). This Core Service Provider is responsible for providing the services commercially, operating and maintaining them, and supporting the release of the core services in the data space. It actively markets the core services and is the contractual partner for partners such as application providers and data providers/consumers.            "),r.createElement("p",{className:"description-p"},"The following KITs and services enable companies to become an operator for the Catena-X data space.")),r.createElement("div",null,r.createElement("h2",{className:"title-h2"},"Core & Onboarding Services"),r.createElement("p",{className:"description-p"},"In contrast to the Enablement Services, the Core & Onboarding Services offer  common accessibility and discoverability functionalities for data space participants. Examples include BPN issuers for maintaining business partner numbers, and participant information, IAM solutions for identity and access management, and discovery services  for locating  the address of assets in decentralized organized registers, throughout the data space.")),r.createElement(d.Z,{inputData:g})))))}}}]);