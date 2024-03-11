"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[45848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?i.createElement(h,o(o({ref:t},l),{},{components:r})):i.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={sidebar_position:1,title:"Operatation View",description:"Operatation View",id:"connector_kit_operation_view"},o=void 0,c={unversionedId:"kits/Connector Kit/Operation View/connector_kit_operation_view",id:"kits/Connector Kit/Operation View/connector_kit_operation_view",title:"Operatation View",description:"Operatation View",source:"@site/docs-kits/kits/Connector Kit/Operation View/operation-view.md",sourceDirName:"kits/Connector Kit/Operation View",slug:"/kits/Connector Kit/Operation View/connector_kit_operation_view",permalink:"/docs-kits/next/kits/Connector Kit/Operation View/connector_kit_operation_view",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Operatation View",description:"Operatation View",id:"connector_kit_operation_view"},sidebar:"kits",previous:{title:"Architecture",permalink:"/docs-kits/next/kits/Connector Kit/Development View/connector_kit_development_view_architecture"},next:{title:"Data Chain KIT",permalink:"/docs-kits/next/category/data-chain-kit"}},s={},p=[{value:"Reference Implementation",id:"reference-implementation",level:2},{value:"Configuration Parameters",id:"configuration-parameters",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Deployment Resources",id:"deployment-resources",level:2},{value:"TractusX Helm Charts",id:"tractusx-helm-charts",level:3},{value:"Minimum Viable Dataspace",id:"minimum-viable-dataspace",level:3},{value:"Deployment Guide",id:"deployment-guide",level:3},{value:"Notice",id:"notice",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"reference-implementation"},"Reference Implementation"),(0,n.kt)("p",null,"The reference implementation for the Connector kit is the  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector"},"Eclipse Dataspace Connector"),".\nFurthermore, it assumes the usage of a deployable EDC as provided by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"Tractus-X EDC"),"."),(0,n.kt)("h2",{id:"configuration-parameters"},"Configuration Parameters"),(0,n.kt)("p",null,"The EDC requires a few parameters for configuration.\nThey are detailed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/tree/main/charts/tractusx-connector#configure-the-chart"},"here"),"."),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"For a summary of the architecture surrounding a Controller, take a look at the Development View's ",(0,n.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/Connector%20Kit/Development%20View/connector_kit_development_view_architecture"},"architecture page"),"."),(0,n.kt)("h2",{id:"deployment-resources"},"Deployment Resources"),(0,n.kt)("h3",{id:"tractusx-helm-charts"},"TractusX Helm Charts"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/"},"Helm charts")," provided by TractusX form the basis for a deployable EDC.\nThe default configuration can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/charts/README.md"},"here"),".\nThis configuration assumes a database for persistence and Hashicorp Vault for secret storage.\nOther configurations are available in the same repository."),(0,n.kt)("h3",{id:"minimum-viable-dataspace"},"Minimum Viable Dataspace"),(0,n.kt)("p",null,"A minimal setup using ",(0,n.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform"},"Terraform")," is available in the form of the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/MinimumViableDataspace"},"Minimum Viable Dataspace"),"."),(0,n.kt)("p",null,"Documentation on it can be found ",(0,n.kt)("a",{parentName:"p",href:"https://eclipse-edc.github.io/docs/#/submodule/MinimumViableDataspace/"},"here"),"."),(0,n.kt)("h3",{id:"deployment-guide"},"Deployment Guide"),(0,n.kt)("p",null,"Specific configuration details are described more closely in the\n",(0,n.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/docs/tutorials/e2e/connect/deployComponents/"},"Deployment Guide"),"."),(0,n.kt)("h2",{id:"notice"},"Notice"),(0,n.kt)("p",null,"This work is licensed under the ",(0,n.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Contributors of the Eclipse Foundation"),(0,n.kt)("li",{parentName:"ul"},"Source URL: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"https://github.com/eclipse-tractusx/tractusx-edc"))))}u.isMDXComponent=!0}}]);