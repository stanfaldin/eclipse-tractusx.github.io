"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[28248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>C});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,C=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(C,i(i({ref:t},l),{},{components:r})):n.createElement(C,i({ref:t},l))}));function C(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"architecture-view",title:"Architecture View",description:"The view from above",sidebar_position:4},i=void 0,p={unversionedId:"kits/DCM-Kit/architecture-view",id:"kits/DCM-Kit/architecture-view",title:"Architecture View",description:"The view from above",source:"@site/docs-kits/kits/DCM-Kit/page_dcm-architecture-view.md",sourceDirName:"kits/DCM-Kit",slug:"/kits/DCM-Kit/architecture-view",permalink:"/docs-kits/next/kits/DCM-Kit/architecture-view",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"architecture-view",title:"Architecture View",description:"The view from above",sidebar_position:4},sidebar:"kits",previous:{title:"Development View",permalink:"/docs-kits/next/kits/DCM-Kit/development-view"},next:{title:"Data Governance Kit",permalink:"/docs-kits/next/category/data-governance-kit"}},c={},s=[{value:"Why\u200b",id:"why",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"How",id:"how",level:2},{value:"Solution Overview",id:"solution-overview",level:2},{value:"Architecture Constraints",id:"architecture-constraints",level:3},{value:"Sequence Diagram",id:"sequence-diagram",level:2}],l={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DCM kit banner",src:r(38842).Z,width:"285",height:"244"})),(0,a.kt)("h2",{id:"why"},"Why\u200b"),(0,a.kt)("p",null,"This page is relevant for you, if one of the following cases applies:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You want to participate in the demand and capacity usecase as either a customer or a supplier and intend to adapt your existing custom application landscape to Catena-X DCM."),(0,a.kt)("li",{parentName:"ol"},"You want to offer business solutions to the aforementioned customers and suppliers by adapting your commercial software product for Catena-X DCM.")),(0,a.kt)("p",null,"If non of this applies to you or you are unsure, please refer to DCM guideline for solution adoption first."),(0,a.kt)("p",null,"Note: if you purchase commercial software from a software vendor, the vendor needs to adopt their software for you. Please refer your vendor to this page."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"In order to participate in the Catena-X network an Eclipse Dataspace Connector (EDC) is required, as the endpoints must not be called directly but only through an EDC."),(0,a.kt)("p",null,"In addition use case participants need to be boarded onto the Catena-X network."),(0,a.kt)("p",null,"Participants intending to act as a customer require at least one BPNL for their company as well as one BPNS for every site they intend to integrate into the Catena-X network."),(0,a.kt)("p",null,"Participants intending to act as a supplier require at least one BPNL for their company."),(0,a.kt)("h2",{id:"how"},"How"),(0,a.kt)("p",null,"If you want to adapt your custom or commercial applications to work with the Catena-X DCM usecase you will have to"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Modify the source code of your application"),(0,a.kt)("li",{parentName:"ol"},"Enable your software to offer multiple REST API endpoints in order to receive data"),(0,a.kt)("li",{parentName:"ol"},"Enable your software to call multiple REST API endpoints in order to send data"),(0,a.kt)("li",{parentName:"ol"},"Enable your software the communicate through an  Eclipse Dataspace Connector (EDC), which is to be setup separately")),(0,a.kt)("p",null,"For details, please refer to the Catena-X standard ",(0,a.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0128 Demand and Capacity Management Data Exchange"),". This page provides a non-normative overview only."),(0,a.kt)("h2",{id:"solution-overview"},"Solution Overview"),(0,a.kt)("p",null,"For the exchange of the demand and capacity information required by the process, five REST APIs are used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MaterialDemand API - used for the exchange of demand information"),(0,a.kt)("li",{parentName:"ul"},"WeekBasedCapacityGroup API - used for the exchange of capacity information"),(0,a.kt)("li",{parentName:"ul"},"RequestForUpdate API - used for requesting an update of MaterialDemand or WeekBasedCapacityGroup"),(0,a.kt)("li",{parentName:"ul"},"IdBasedComment API - used for the exchange of additional comments regarding MaterialDemand or WeekBasedCapacityGroup"),(0,a.kt)("li",{parentName:"ul"},"Asset Administration Shell (AAS) API - used when using DCM in combination with a Digital Twin Registry")),(0,a.kt)("p",null,"All those APIs are REST-based APIs."),(0,a.kt)("p",null,"Implementing all endpoints is mandatory, except the AAS API endpoint, which is optional."),(0,a.kt)("p",null,"Note that the software solutions used as well as the business process should be enabled in order to receive MaterialDemand information from customers and send WeekBasedCapacityGroup information back to those customers. Also, it needs to be possible to send the own MaterialDemand information to the suppliers and receive their WeekBasedCapacityGroup information in return. Therefore, the software tools used need to be able to send/receive these information and the users need to be able to work with the information in the planning processes."),(0,a.kt)("p",null,"When implementing the API endpoints, it is important to follow the DCM standard closely in order to ensure compatibility with other solutions. This is not limited to technical aspects, but also extends to the business definition of demand and capacity."),(0,a.kt)("h3",{id:"architecture-constraints"},"Architecture Constraints"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Constraint ID"),(0,a.kt)("th",{parentName:"tr",align:null},"Constraint"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C-1"),(0,a.kt)("td",{parentName:"tr",align:null},"Software and third party software must be compliant to the Catena-X and Eclipse Foundation Guidelines/Policies ",(0,a.kt)("a",{parentName:"td",href:"https://www.eclipse.org/projects/dev_process/"},"eclipse_foundation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C-2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/eclipse-tractusx/tractusx-edc/tree/main"},"Eclipse Dataspace Connector")," (EDC) must be used for data transfer between different legal entities; e.g. the API endpoints listed above may only be called through an EDC")))),(0,a.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,a.kt)("p",null,"The overall interaction between partners is illustrated by the following sequence diagram:"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    box rgb(80,80,80) Customer\n    participant Customer\n    participant CustomerApp as Customer App\n    participant CustomerConnector as Customer connector\n    end\n    box rgb(80,80,80) Core Services\n    participant CoreBpnlDiscovery as Core BPNL Discovery\n    participant CoreEdcDiscovery as Core EDC discovery\n    end\n    box rgb(80,80,80) Supplier\n    participant SupplierConnector as Supplier connector\n    participant SupplierApp as Supplier App\n    participant Supplier\n    end\n\n    Customer ->> CustomerApp: Create MaterialDemand\n    activate CustomerApp\n    CustomerApp --\x3e> Customer: MaterialDemand created\n    deactivate CustomerApp\n    Customer ->> CustomerApp: Finalize MaterialDemand\n    activate CustomerApp\n    CustomerApp ->> CoreBpnlDiscovery: Resolve Supplier Base Data into BPNL\n    activate CoreBpnlDiscovery\n    CoreBpnlDiscovery --\x3e> CustomerApp: Supplier BPNL\n    deactivate CoreBpnlDiscovery\n    CustomerApp ->> CoreEdcDiscovery: Resolve Supplier BPNL into connector URL catalogue\n    activate CoreEdcDiscovery\n    CoreEdcDiscovery --\x3e> CustomerApp: Connector URL catalogue\n    deactivate CoreEdcDiscovery\n    CustomerApp ->> CustomerApp: Find correct connector via URL catalogue inspection\n    CustomerApp ->> CustomerConnector: Transmit MaterialDemand\n    activate CustomerConnector\n    CustomerConnector ->> SupplierConnector: Resolve connector Endpoint and connector service catalogue into MaterialDemand API URL\n    activate SupplierConnector\n    SupplierConnector ->> CustomerConnector: Framework & Contract Negotiation\n    CustomerConnector --\x3e> SupplierConnector: Framework & Contract Negotiation\n    SupplierConnector --\x3e> CustomerConnector: MaterialDemand API URL\n    CustomerConnector ->> SupplierConnector: Transmit MaterialDemand\n    SupplierConnector ->> SupplierApp: Transmit MaterialDemand\n    activate SupplierApp\n    SupplierApp ->> Supplier: Transmit MaterialDemand\n    Supplier --\x3e> SupplierApp: MaterialDemand received\n    SupplierApp --\x3e> SupplierConnector: MaterialDemand received\n    deactivate SupplierApp\n    SupplierConnector --\x3e> CustomerConnector: MaterialDemand received\n    deactivate SupplierConnector\n    CustomerConnector --\x3e> CustomerApp: MaterialDemand received\n    deactivate CustomerConnector\n    CustomerApp --\x3e> Customer: MaterialDemand finalized & synchronized\n    deactivate CustomerApp\n\n    Supplier ->> SupplierApp: Create CapacityGroup\n    activate SupplierApp\n    SupplierApp --\x3e> Supplier: CapacityGroup created\n    deactivate SupplierApp\n    Supplier ->> SupplierApp: Link Demands to CapacityGroup\n    activate SupplierApp\n    SupplierApp --\x3e> Supplier: Demands Linked\n    deactivate SupplierApp\n    Supplier ->> SupplierApp: Finalize CapacityGroup\n    activate SupplierApp\n    SupplierApp ->> CoreBpnlDiscovery: Resolve Customer Base Data into BPNL\n    activate CoreBpnlDiscovery\n    CoreBpnlDiscovery --\x3e> SupplierApp: Customer BPNL\n    deactivate CoreBpnlDiscovery\n    SupplierApp ->> CoreEdcDiscovery: Resolve Customer BPNL into connector URL catalogue\n    activate CoreEdcDiscovery\n    CoreEdcDiscovery --\x3e> SupplierApp: connector URL catalogue\n    deactivate CoreEdcDiscovery\n    SupplierApp ->> SupplierApp: Find correct connector via URL catalogue inspection\n    SupplierApp ->> SupplierConnector: Transmit CapacityGroup\n    activate SupplierConnector\n    SupplierConnector ->> CustomerConnector: Resolve connector Endpoint and connector service catalogue into CapacityGroup API URL\n    activate CustomerConnector\n    CustomerConnector ->> SupplierConnector: Framework & Contract Negotiation\n    SupplierConnector --\x3e> CustomerConnector: Framework & Contract Negotiation\n    CustomerConnector --\x3e> SupplierConnector: CapacityGroup API Endpoint\n    SupplierConnector ->> CustomerConnector: Transmit CapacityGroup\n    CustomerConnector ->> CustomerApp: Transmit CapacityGroup\n    activate CustomerApp\n    CustomerApp ->> Customer: Transmit CapacityGroup\n    Customer --\x3e> CustomerApp: CapacityGroup received\n    CustomerApp --\x3e> CustomerConnector: CapacityGroup received\n    deactivate CustomerApp\n    CustomerConnector --\x3e> SupplierConnector: CapacityGroup received\n    deactivate CustomerConnector\n    SupplierConnector --\x3e> SupplierApp: CapacityGroup received\n    deactivate SupplierConnector\n    SupplierApp --\x3e> Supplier: CapacityGroupfinalized & synchronized\n    deactivate SupplierApp"}),(0,a.kt)("p",null,"Note that the supplier does not need to immediately reply with capacity group after receiving demand information, although a timely reply is appreciated, there can be a considerable time in between instead."),(0,a.kt)("p",null,"Digital Twins can also be used to reference parts, but are not shown in the sequence diagram for simplicity."))}u.isMDXComponent=!0},38842:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/DCMKitLogoIcon-min-eb8a08a66b369c6313f87d709f81ea6c.png"}}]);