"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[35825,77053,73311],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>g});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function M(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,d=M(e,["components","mdxType","originalType","parentName"]),u=l(i),c=n,g=u["".concat(o,".").concat(c)]||u[c]||N[c]||r;return i?a.createElement(g,s(s({ref:t},d),{},{components:i})):a.createElement(g,s({ref:t},d))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=c;var M={};for(var o in t)hasOwnProperty.call(t,o)&&(M[o]=t[o]);M.originalType=e,M[u]="string"==typeof e?e:n,s[1]=M;for(var l=2;l<r;l++)s[l]=i[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},4445:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>M,metadata:()=>l,toc:()=>u});var a=i(87462),n=(i(67294),i(3905)),r=i(63570),s=i(37100);const M={id:"Architecture View Industry Core Kit",title:"Architecture View",description:"Industry Core Kit",sidebar_position:2},o=void 0,l={unversionedId:"kits/Industry Core Kit/Architecture View Industry Core Kit",id:"version-24.05/kits/Industry Core Kit/Architecture View Industry Core Kit",title:"Architecture View",description:"Industry Core Kit",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Industry Core Kit/page_architecture-view.mdx",sourceDirName:"kits/Industry Core Kit",slug:"/kits/Industry Core Kit/Architecture View Industry Core Kit",permalink:"/docs-kits/kits/Industry Core Kit/Architecture View Industry Core Kit",draft:!1,tags:[],version:"24.05",sidebarPosition:2,frontMatter:{id:"Architecture View Industry Core Kit",title:"Architecture View",description:"Industry Core Kit",sidebar_position:2},sidebar:"kits",previous:{title:"Business View",permalink:"/docs-kits/kits/Industry Core Kit/Business View Industry Core Kit"},next:{title:"Operation View",permalink:"/docs-kits/kits/Industry Core Kit/Operation View Industry Core Kit"}},d={},u=[{value:"Assumptions",id:"assumptions",level:2},{value:"Non-Functional Requirements",id:"non-functional-requirements",level:2},{value:"Lawfulness",id:"lawfulness",level:3},{value:"Correctness",id:"correctness",level:3},{value:"Resilience",id:"resilience",level:3},{value:"Backward Compatibility and Versioning",id:"backward-compatibility-and-versioning",level:3},{value:"Building Block View",id:"building-block-view",level:2},{value:"Runtime View",id:"runtime-view",level:2},{value:"Standards",id:"standards",level:2}],N={toc:u};function c(e){let{components:t,...M}=e;return(0,n.kt)("wrapper",(0,a.Z)({},N,M,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Industry Core kit banner",src:i(84588).Z,width:"287",height:"245"})),(0,n.kt)("p",null,"The following page offers an architecture perspective including the main building blocks and information regarding\ncommunication between different components, shown as sequence diagrams in a runtime view. In general, data access must\nbe provided in the Catena-X network using the Data Space Protocol (DSP). As standard for data-level interoperability,\nthe Asset Administration Shell (AAS) standard is used - this is relevant for registering data via the Digital Twin\nRegistry (short DTR), as well as for delivery of said data. SAMM is used as modelling language to model a Digital Twin's\naspects, yielding json-schema that defines the payloads and context for runtime data."),(0,n.kt)("h2",{id:"assumptions"},"Assumptions"),(0,n.kt)("p",null,"This architecture is based on the following assumptions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is a complete setup of the Catena-X Dataspace available with all Core Services as defined by the ",(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/_online_media_/CX_Operating_Modelv2.1_final.pdf"},"Operating Model Whitepaper v2.1"),"."),(0,n.kt)("li",{parentName:"ul"},"All users have ",(0,n.kt)("strong",{parentName:"li"},"completed onboarding")," to the Catena-X network. This includes:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All participants hold a Verifiable Credential issued by an Operating Company (Core Service Provider B)"),(0,n.kt)("li",{parentName:"ul"},"All participants have at least one Dataspace Connector deployed that's linked to their BPNL at the EDC Discovery\nService."),(0,n.kt)("li",{parentName:"ul"},"All participants have an active network membership that is represented in their membership credential."),(0,n.kt)("li",{parentName:"ul"},"Data Providers operate a Digital Twin Registry according to\nthe ",(0,n.kt)("a",{parentName:"li",href:"../Digital%20Twin%20Kit/Adoption%20View%20Digital%20Twin%20Kit"},"Digital Twin Kit")),(0,n.kt)("li",{parentName:"ul"},"Data Providers expose their data via the Submodel API according to the Digital Twin Kit."))),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"customers of parts")," (on catalog and instance level) must be known when creating a digital twin and registering\nits data. Registering data in EDC and DTR requires data providers to define appropriate access permissions to prevent\nexposing data to unauthorized parties. For Traceability, the customer of a part must have access to the digital twin\nin\nthe DTR as well as to the digital twin's data in the EDC. If the customer is not known when a digital twin is created,\nadditional processes must be set up by the data provider to add access permissions for the customer at a later time.")),(0,n.kt)("h2",{id:"non-functional-requirements"},"Non-Functional Requirements"),(0,n.kt)("h3",{id:"lawfulness"},"Lawfulness"),(0,n.kt)("p",null,"Automotive supply chains hold sensitive data. Not only can improper exposure lead to the loss of trade-secrets but it can also violate antitrust regulations - especially when gaining access to sensitive data of horizontal competitors. As this can jeopardize the business of a company, especially Data Providers (and by proxy Business Application Providers) must ensure that their solutions are not only secure by default but also provide ergonomic and reliable means for configuration."),(0,n.kt)("h3",{id:"correctness"},"Correctness"),(0,n.kt)("p",null,"Data Chains are built up of the links to resources distributed among the supply chain. This is reflected in distributed data. Publishing incorrect or outdated data to the network will have ripple-on effects that may break the chain for all interested parties. To avoid this, implementation strictly according to standard, verified by rigorous certification, is critical for the success of the Industry Core and the network as a whole."),(0,n.kt)("h3",{id:"resilience"},"Resilience"),(0,n.kt)("p",null,"While processing data for publishing it to Catena-X, a data provider needs to access the digital twins of built-in parts from suppliers. These must be available in Catena-X at this point. If these digital twins are not found while the data provider is looking them up, the data provider will not be able to integrate these built-in parts into BoM aspect models (e.g., SingleLevelBomAsBuilt) as it is missing the built-in parts' Unique ID. Reasons for not finding a built-in part's digital twin can be:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"There is a network failure while the data provider's is looking for the digital twin."),(0,n.kt)("li",{parentName:"ol"},"The supplier did not yet create the digital twin, e.g., because its internal processes were delayed"),(0,n.kt)("li",{parentName:"ol"},"The supplier is not yet part of the Catena-X network.")),(0,n.kt)("p",null,"Resilience means that the data provider implements a pipeline that can cope with these issues. Digital twins are provided with the information that is available and are updated once more information is available (e.g., the supplier provides digital twins for built-in parts later on)."),(0,n.kt)("h3",{id:"backward-compatibility-and-versioning"},"Backward Compatibility and Versioning"),(0,n.kt)("p",null,"Effective management of versions and changes for Catena-X standards, KITs, and open source reference implementations is crucial to guarantee compatibility, interoperability and security especially in a decentralized data space. The Catena-X lifecycle management coordinates quarterly releases, including one major release and three minor releases per year. Only a major release may contain breaking changes and does not need to be backward compatible."),(0,n.kt)("p",null,"The Catena-X data space aims to support a parallel phase of two major versions of 12 months to ensure a smooth upgrade process. Data providers and data consumers must take special care to prepare for such releases by planing necessary migrations in time. This means that, e.g., a Traceability app that was built for the previous (major) Catena-X release will still work in an environment that is running the new major release."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"For digital twins and aspect models"),", this means that data providers and data consumers must at least support mandatory aspect model versions from the oldest, still supported major release. Newer mandatory aspect model versions can be optionally supported. A data provider cannot assume that all data consumers are already able to process newer aspect model versions. A data consumer cannot assume that all data providers already provide their data in newer aspect model versions."),(0,n.kt)("p",{parentName:"li"},"Mandatory versions for aspect models can only change in a major release as this change is breaking. Optional versions can be introduced with minor and patch versions, e.g., to introduce a future mandatory version first as optional for easier migration later on."),(0,n.kt)("p",{parentName:"li"},"A data provider that wants to support several versions of an aspect models must add a separate submodelDescriptor for every supported aspect model version to the digital twin. The submodelDescriptors will have different semanticIds and might also point to different EDC assets - depending on the asset structure used in the EDC for providing the digital twin's sumodel."),(0,n.kt)("p",{parentName:"li"},"A data consumer must search the submodelDescriptors of a digital twin for supported semanticIds and then select the most suitable one for further processing.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"For Notification APIs"),", a separate EDC asset must be created for every major API version, e.g., for versions v1 and v2 of the API separate EDC assets must be created. The API version must be documented in the ",(0,n.kt)("inlineCode",{parentName:"p"},"https://w3id.org/catenax/ontology/common#version")," property on a minor release level (e.g., 1.1). It is not necessary to create a separate EDC asset for every minor or patch version as these versions must always be backward compatible."))),(0,n.kt)("p",null,"More information about backward compatibility and versioning can be found here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/_online_media_/231006_Whitepaper_LifeCycleManagement.pdf"},"Life Cycle Management 101")," from the Catana-X Standard Library,"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../Digital%20Twin%20Kit/Software%20Development%20View/dt-kit-software-development-view/#registration-at-edc"},"Digital Twin KIT - Registration at EDC")," with details about versioning of EDC assets (for submodels as well as for Notification assets) including examples.")),(0,n.kt)("h2",{id:"building-block-view"},"Building Block View"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Building Block View of the Industry Core",src:i(2578).Z,width:"1617",height:"1738"})),(0,n.kt)("h2",{id:"runtime-view"},"Runtime View"),(0,n.kt)("p",null,"The runtime patterns represent a subset of the interactions specified in the Digital Twin Kit.\nIts ",(0,n.kt)("a",{parentName:"p",href:"../Digital%20Twin%20Kit/Software%20Development%20View/dt-kit-interaction-patterns"},'"Interaction Patterns" section'),"\ndescribes the interaction between a Data Provider and Data Consumer including the necessary configuration steps.\nSince the Discovery Services according to CX-0053 are not part of the Industry Core, all calls going to the components\n",(0,n.kt)("inlineCode",{parentName:"p"},"DiscoveryFinder")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"BPN Discovery Service")," can be omitted."),(0,n.kt)(s.default,{components:M.components,mdxType:"FutureConcepts"}),(0,n.kt)("h2",{id:"standards"},"Standards"),(0,n.kt)("p",null,"A formal definition of the Industry Core's content is given in the standards CX-0126 and CX-0127 - first released in\nCX R24-03. These two standards build on a common subset of technologies that are themselves described in Catena-X standards."),(0,n.kt)("p",null,"The two standards share a common set of base technologies. And while the Industry Core does provide Business-relevant\ncapabilities for Data Consumers, it can likewise serve as a launchpad for new use-cases."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locating the Industry Core standards in the Catena-X landscape",src:i(90290).Z,width:"3809",height:"1530"})),(0,n.kt)("p",null,"The Interoperability Layer the Industry Core Standards build on, defines API structures of Data Providers and relevant\ncore services hosted centrally. They depend on the EDC Discovery Service defined in standard CX-0001 to discover a\nparticipant's the EDC-endpoint. CX-0002 is the standard for the integration between assets and related data - leveraging\nthe Asset Administration Shell standard as adopted by Catena-X. Its correct deployment is especially critical as its\nservices (Digital Twin Registry and Submodel Endpoints) are operated by all Data Providers."),(0,n.kt)("p",null,"The Identity and Sovereignty Layers are defined in a variety of Catena-X standards that are assumed to be deployed and\nintegrated form the foundation for data exchange in Catena-X."),(0,n.kt)("p",null,"All relevant standards can be downloaded from the\nofficial ",(0,n.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"Catena-X Standard Library"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Industry Core specific",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0126 Industry Core Part Type 1.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0127 Industry Core Part Instance 1.0.0")))),(0,n.kt)("li",{parentName:"ul"},"Interoperability Layer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0001 EDC Discovery API 1.0.2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0002 Digital Twins in Catena-X 2.2.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0003 SAMM Aspect Meta Model 1.1.0")))),(0,n.kt)("li",{parentName:"ul"},"Sovereignty Layer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0018 Eclipse Data Space Connector (EDC) 2.1.0")))),(0,n.kt)("li",{parentName:"ul"},"Identity Layer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0013 Identity of Member Companies 1.1.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0014 Employees and Technical Users 1.0.1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0015 IAM & Access Control Paradigm 1.0.1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0016 Company Attribute Verification 1.1.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0017 Company Role by the Connector 1.1.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0050 Framework Agreement Credential 1.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0051 Summary Credential 1.0.0"))))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Sidenote: The following existing standards are incorporated into new standards. Please only refer to CX-0126 and CX-0127.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0126 Industry Core Part Type 1.0.0")," is the new standard based on the following existing standards:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CX - 0042 Aspect Model SingleLevelBomAsPlanned"),(0,n.kt)("li",{parentName:"ul"},"CX - 0043 Aspect Model PartAsPlanned"),(0,n.kt)("li",{parentName:"ul"},"CX - 0094 Aspect Model PartSiteInformationAsPlanned"),(0,n.kt)("li",{parentName:"ul"},"CX - 0061 Triangle Traceability Data Provisioning BomAsPlanned"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0127 Industry Core Part Instance 1.0.0")," is the new standard based on the following existing standards:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CX - 0019 Aspect Model SerialPart"),(0,n.kt)("li",{parentName:"ul"},"CX - 0020 Aspect Model SingleLevelBomAsBuilt"),(0,n.kt)("li",{parentName:"ul"},"CX - 0021 Aspect Model Batch"),(0,n.kt)("li",{parentName:"ul"},"CX - 0060 Triangle Traceability - Digital Twin As-Built")))),(0,n.kt)(r.default,{components:M.components,mdxType:"Notice"}))}c.isMDXComponent=!0},37100:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>M,toc:()=>l});var a=i(87462),n=(i(67294),i(3905));const r={sidebar_class_name:"hidden"},s=void 0,M={unversionedId:"kits/Industry Core Kit/part_future-concepts",id:"version-24.05/kits/Industry Core Kit/part_future-concepts",title:"part_future-concepts",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Industry Core Kit/part_future-concepts.mdx",sourceDirName:"kits/Industry Core Kit",slug:"/kits/Industry Core Kit/part_future-concepts",permalink:"/docs-kits/kits/Industry Core Kit/part_future-concepts",draft:!1,tags:[],version:"24.05",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"part_bill-of-materials",permalink:"/docs-kits/kits/Industry Core Kit/part_bill-of-materials"},next:{title:"part_notice",permalink:"/docs-kits/kits/Industry Core Kit/part_notice"}},o={},l=[{value:"Future Concepts",id:"future-concepts",level:2},{value:"Reduction of Number of Digital Twins in the DTR",id:"reduction-of-number-of-digital-twins-in-the-dtr",level:3}],d={toc:l};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"future-concepts"},"Future Concepts"),(0,n.kt)("h3",{id:"reduction-of-number-of-digital-twins-in-the-dtr"},"Reduction of Number of Digital Twins in the DTR"),(0,n.kt)("p",null,"With the current Industry Core concept, a digital twin must be created for every instantiated part that can be identified, e.g., with a serial number, no matter how small it is. This might result in a huge number of digital twins created in the DTR (more then several hundred million) as parts are produced on a daily basis."),(0,n.kt)("p",null,"Therefore, we developed a concept to reduce the number of digital twins by building upon the PartType digital twin of such instantiated part. The processing of data is mostly the same as when data is provided conventially, i.e., with a digital twin for every instantiated part."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The basic idea is to use a PartType digital twin to access data about instances of a part type. It is not necessary to create digital twins for instances."),(0,n.kt)("li",{parentName:"ul"},"For this PartType:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For every aspect that should be provided for instantiated parts (e.g., SerialPart, SingleLevelBomAsBuilt), a submodelDescriptor for this aspect must be added to the part type digital twin. ",(0,n.kt)("strong",{parentName:"li"}," As there are no aspect models currently that are used for both, part types and part instances, this does not create any ambiguities.")),(0,n.kt)("li",{parentName:"ul"},"To get the actual submodel data for a digital twin, an operation must be provided by the data provider that is called via InvokeOperationSync or InvokeOperationAsync (see the AAS standard for more details). At least the ID of the instantiated part (e.g., partInstanceId or batchId) must be specified as an input argument of this operation. ",(0,n.kt)("strong",{parentName:"li"},"Note that details about the operation including, e..g, input arguments, still need to be standardized to provide a interoperable solution.")),(0,n.kt)("li",{parentName:"ul"},"The backend data service must handle authorization for instantiated parts based on the BPN of data consumer (similar to asset bundling authorization requirements), if necessary."),(0,n.kt)("li",{parentName:"ul"},"The result of this operation must be compliant to the asepct model represented by the submodel descriptor.")))),(0,n.kt)("p",null,"With this approach, subsequent processing of the submodel data can then proceed as if a digital twin for the instantiated part was provided."))}u.isMDXComponent=!0},63570:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>M,toc:()=>l});var a=i(87462),n=(i(67294),i(3905));const r={sidebar_class_name:"hidden"},s=void 0,M={unversionedId:"kits/Industry Core Kit/part_notice",id:"version-24.05/kits/Industry Core Kit/part_notice",title:"part_notice",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Industry Core Kit/part_notice.mdx",sourceDirName:"kits/Industry Core Kit",slug:"/kits/Industry Core Kit/part_notice",permalink:"/docs-kits/kits/Industry Core Kit/part_notice",draft:!1,tags:[],version:"24.05",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"part_future-concepts",permalink:"/docs-kits/kits/Industry Core Kit/part_future-concepts"},next:{title:"Model Based Development and Data Processing (MDP) KIT",permalink:"/docs-kits/category/model-based-development-and-data-processing-mdp-kit"}},o={},l=[{value:"NOTICE",id:"notice",level:2}],d={toc:l};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"notice"},"NOTICE"),(0,n.kt)("p",null,"This work is licensed under the ",(0,n.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 BASF SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Fraunhofer-Gesellschaft zur Foerderung der angewandten Forschung e.V. (represented by Fraunhofer ISST & Fraunhofer IML)"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 German Edge Cloud GmbH & Co. KG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Mercedes Benz AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Robert Bosch Manufacturing Solutions GmbH"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Siemens AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 T-Systems International GmbH"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 ZF Friedrichshafen AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Contributors to the Eclipse Foundation"),(0,n.kt)("li",{parentName:"ul"},"Source URL: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs-kits/kits/Industry%20Core%20Kit"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs-kits/kits/Industry%20Core%20Kit")," (latest version)")))}u.isMDXComponent=!0},2578:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/ic-arch-view-blocks-6f25205ed6a5a8733c351f26b3f5fb7f.svg"},90290:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/ic-arch-view-stds-de186edcdfb5f8f33b73d52d57329d8a.svg"},84588:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg3IiBoZWlnaHQ9IjI0NSIgdmlld0JveD0iMCAwIDI4NyAyNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNDI5XzEzMzMpIj4KPHBhdGggZD0iTTEyMy4wMyA5MS42MTQzQzEzMy42ODggODUuNDYxNyAxNTAuOTY3IDg1LjQ2MTcgMTYxLjYyNCA5MS42MTQzTDI1NC4zMjcgMTQ1LjEzMkMyNjQuOTg0IDE1MS4yODQgMjY0Ljk4NCAxNjEuMjU5IDI1NC4zMjcgMTY3LjQxMkwxNjEuNjI0IDIyMC45MjlDMTUwLjk2NyAyMjcuMDgyIDEzMy42ODggMjI3LjA4MiAxMjMuMDMgMjIwLjkyOUwzMC4zMjc1IDE2Ny40MTJDMTkuNjcgMTYxLjI1OSAxOS42NyAxNTEuMjg0IDMwLjMyNzUgMTQ1LjEzMkwxMjMuMDMgOTEuNjE0M1oiIGZpbGw9IiM1N0E2RjUiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjM2MiAxNTcuODg4TDE2MC42NTkgMTA0LjM3MUMxNTAuNTM1IDk4LjUyNTYgMTM0LjEyIDk4LjUyNTYgMTIzLjk5NSAxMDQuMzcxTDMxLjI5MjMgMTU3Ljg4OEMyMS4xNjc4IDE2My43MzMgMjEuMTY3OCAxNzMuMjA5IDMxLjI5MjMgMTc5LjA1NEwxMjMuOTk1IDIzMi41NzFDMTM0LjEyIDIzOC40MTYgMTUwLjUzNSAyMzguNDE2IDE2MC42NTkgMjMyLjU3MUwyNTMuMzYyIDE3OS4wNTRDMjYzLjQ4NyAxNzMuMjA5IDI2My40ODcgMTYzLjczMyAyNTMuMzYyIDE1Ny44ODhaTTE2MS42MjQgMTAzLjgxNEMxNTAuOTY3IDk3LjY2MSAxMzMuNjg4IDk3LjY2MSAxMjMuMDMgMTAzLjgxNEwzMC4zMjc1IDE1Ny4zMzFDMTkuNjcgMTYzLjQ4MyAxOS42NyAxNzMuNDU5IDMwLjMyNzUgMTc5LjYxMUwxMjMuMDMgMjMzLjEyOEMxMzMuNjg4IDIzOS4yODEgMTUwLjk2NyAyMzkuMjgxIDE2MS42MjQgMjMzLjEyOEwyNTQuMzI3IDE3OS42MTFDMjY0Ljk4NCAxNzMuNDU5IDI2NC45ODQgMTYzLjQ4MyAyNTQuMzI3IDE1Ny4zMzFMMTYxLjYyNCAxMDMuODE0WiIgZmlsbD0iIzU3QTZGNSIvPgo8cGF0aCBkPSJNMTIzLjY0NyA2NC40NzQyQzEzNC4zMDUgNTguMzIxNiAxNTEuNTg0IDU4LjMyMTYgMTYyLjI0MSA2NC40NzQyTDI1NC45NDQgMTE3Ljk5MUMyNjUuNjAxIDEyNC4xNDQgMjY1LjYwMSAxMzQuMTE5IDI1NC45NDQgMTQwLjI3MkwxNjIuMjQxIDE5My43ODlDMTUxLjU4NCAxOTkuOTQyIDEzNC4zMDUgMTk5Ljk0MiAxMjMuNjQ3IDE5My43ODlMMzAuOTQ0NyAxNDAuMjcyQzIwLjI4NzIgMTM0LjExOSAyMC4yODcyIDEyNC4xNDQgMzAuOTQ0NyAxMTcuOTkxTDEyMy42NDcgNjQuNDc0MloiIGZpbGw9IiM0MzkwRUIiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RkZGRkXzE0MjlfMTMzMykiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My45NzkgMTMwLjc0OEwxNjEuMjc2IDc3LjIzMDRDMTUxLjE1MiA3MS4zODU1IDEzNC43MzcgNzEuMzg1NSAxMjQuNjEyIDc3LjIzMDRMMzEuOTA5NSAxMzAuNzQ4QzIxLjc4NDkgMTM2LjU5MyAyMS43ODQ5IDE0Ni4wNjkgMzEuOTA5NSAxNTEuOTE0TDEyNC42MTIgMjA1LjQzMUMxMzQuNzM3IDIxMS4yNzYgMTUxLjE1MiAyMTEuMjc2IDE2MS4yNzcgMjA1LjQzMUwyNTMuOTc5IDE1MS45MTRDMjY0LjEwNCAxNDYuMDY5IDI2NC4xMDQgMTM2LjU5MyAyNTMuOTc5IDEzMC43NDhaTTE2Mi4yNDEgNzYuNjczNEMxNTEuNTg0IDcwLjUyMDggMTM0LjMwNSA3MC41MjA4IDEyMy42NDcgNzYuNjczNEwzMC45NDQ3IDEzMC4xOTFDMjAuMjg3MiAxMzYuMzQzIDIwLjI4NzIgMTQ2LjMxOCAzMC45NDQ3IDE1Mi40NzFMMTIzLjY0NyAyMDUuOTg4QzEzNC4zMDUgMjEyLjE0MSAxNTEuNTg0IDIxMi4xNDEgMTYyLjI0MSAyMDUuOTg4TDI1NC45NDQgMTUyLjQ3MUMyNjUuNjAxIDE0Ni4zMTggMjY1LjYwMSAxMzYuMzQzIDI1NC45NDQgMTMwLjE5MUwxNjIuMjQxIDc2LjY3MzRaIiBmaWxsPSIjNDM5MEVCIi8+CjwvZz4KPHBhdGggZD0iTTEyMy42NDcgMzguNTY2OUMxMzQuMzA1IDMyLjQxNDQgMTUxLjU4NCAzMi40MTQ0IDE2Mi4yNDEgMzguNTY2OUwyNTQuOTQ0IDkyLjA4NDJDMjY1LjYwMSA5OC4yMzY3IDI2NS42MDEgMTA4LjIxMiAyNTQuOTQ0IDExNC4zNjVMMTYyLjI0MSAxNjcuODgyQzE1MS41ODQgMTc0LjAzNCAxMzQuMzA1IDE3NC4wMzQgMTIzLjY0NyAxNjcuODgyTDMwLjk0NDcgMTE0LjM2NUMyMC4yODcyIDEwOC4yMTIgMjAuMjg3MiA5OC4yMzY3IDMwLjk0NDcgOTIuMDg0MkwxMjMuNjQ3IDM4LjU2NjlaIiBmaWxsPSIjMjg1RUM2IiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My45NzkgMTA0Ljg0TDE2MS4yNzYgNTEuMzIzMkMxNTEuMTUyIDQ1LjQ3ODIgMTM0LjczNyA0NS40NzgyIDEyNC42MTIgNTEuMzIzMkwzMS45MDk1IDEwNC44NEMyMS43ODQ5IDExMC42ODUgMjEuNzg0OSAxMjAuMTYyIDMxLjkwOTUgMTI2LjAwN0wxMjQuNjEyIDE3OS41MjRDMTM0LjczNyAxODUuMzY5IDE1MS4xNTIgMTg1LjM2OSAxNjEuMjc3IDE3OS41MjRMMjUzLjk3OSAxMjYuMDA3QzI2NC4xMDQgMTIwLjE2MiAyNjQuMTA0IDExMC42ODUgMjUzLjk3OSAxMDQuODRaTTE2Mi4yNDEgNTAuNzY2MUMxNTEuNTg0IDQ0LjYxMzYgMTM0LjMwNSA0NC42MTM2IDEyMy42NDcgNTAuNzY2MUwzMC45NDQ3IDEwNC4yODNDMjAuMjg3MiAxMTAuNDM2IDIwLjI4NzIgMTIwLjQxMSAzMC45NDQ3IDEyNi41NjRMMTIzLjY0NyAxODAuMDgxQzEzNC4zMDUgMTg2LjIzNCAxNTEuNTg0IDE4Ni4yMzQgMTYyLjI0MSAxODAuMDgxTDI1NC45NDQgMTI2LjU2NEMyNjUuNjAxIDEyMC40MTEgMjY1LjYwMSAxMTAuNDM2IDI1NC45NDQgMTA0LjI4M0wxNjIuMjQxIDUwLjc2NjFaIiBmaWxsPSIjM0I4OENGIi8+CjxwYXRoIGQ9Ik0xMjUuNjkyIDExLjQyNjNDMTM2LjM1IDUuMjczNzYgMTUzLjYyOSA1LjI3Mzc2IDE2NC4yODYgMTEuNDI2M0wyNTYuOTg5IDY0Ljk0MzVDMjY3LjY0NiA3MS4wOTYxIDI2Ny42NDYgODEuMDcxMyAyNTYuOTg5IDg3LjIyMzlMMTY0LjI4NiAxNDAuNzQxQzE1My42MjkgMTQ2Ljg5NCAxMzYuMzUgMTQ2Ljg5NCAxMjUuNjkyIDE0MC43NDFMMzIuOTg5NiA4Ny4yMjM5QzIyLjMzMjEgODEuMDcxMyAyMi4zMzIxIDcxLjA5NjEgMzIuOTg5NiA2NC45NDM2TDEyNS42OTIgMTEuNDI2M1oiIGZpbGw9IiMxQTM0QkEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTYuMDI0IDc3LjY5OThMMTYzLjMyMSAyNC4xODI1QzE1My4xOTcgMTguMzM3NiAxMzYuNzgyIDE4LjMzNzYgMTI2LjY1NyAyNC4xODI1TDMzLjk1NDQgNzcuNjk5OEMyMy44Mjk5IDgzLjU0NDcgMjMuODI5OSA5My4wMjEyIDMzLjk1NDQgOTguODY2MUwxMjYuNjU3IDE1Mi4zODNDMTM2Ljc4MiAxNTguMjI4IDE1My4xOTcgMTU4LjIyOCAxNjMuMzIxIDE1Mi4zODNMMjU2LjAyNCA5OC44NjYxQzI2Ni4xNDkgOTMuMDIxMiAyNjYuMTQ5IDgzLjU0NDcgMjU2LjAyNCA3Ny42OTk4Wk0xNjQuMjg2IDIzLjYyNTVDMTUzLjYyOSAxNy40NzMgMTM2LjM1IDE3LjQ3MyAxMjUuNjkyIDIzLjYyNTVMMzIuOTg5NiA3Ny4xNDI4QzIyLjMzMjEgODMuMjk1MyAyMi4zMzIxIDkzLjI3MDYgMzIuOTg5NiA5OS40MjMxTDEyNS42OTIgMTUyLjk0QzEzNi4zNSAxNTkuMDkzIDE1My42MjkgMTU5LjA5MyAxNjQuMjg2IDE1Mi45NEwyNTYuOTg5IDk5LjQyMzFDMjY3LjY0NiA5My4yNzA2IDI2Ny42NDYgODMuMjk1MyAyNTYuOTg5IDc3LjE0MjhMMTY0LjI4NiAyMy42MjU1WiIgZmlsbD0iIzFBMzRCQSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyNy4zODQgNTAuNzcyQzEyMy42ODggNDguNjM4NiAxMTcuNjk3IDQ4LjYzODYgMTE0LjAwMSA1MC43NzJDMTEwLjMwNiA1Mi45MDU0IDExMC4zMDYgNTYuMzY0MiAxMTQuMDAxIDU4LjQ5NzZMMTIyLjI1NCA2My4yNjE4QzEyMy40ODggNjMuOTc0MSAxMjQuOTc4IDY0LjQ0ODYgMTI2LjU1MyA2NC42ODUyTDEyNS41MjIgNjIuNDU4OUMxMjUuMTU0IDYyLjMyMTYgMTI0LjgwNiA2Mi4xNiAxMjQuNDg0IDYxLjk3NDFMMTE2LjIzMiA1Ny4yMUMxMTMuNzY4IDU1Ljc4NzggMTEzLjc2OCA1My40ODE4IDExNi4yMzIgNTIuMDU5NkMxMTguNjk1IDUwLjYzNzMgMTIyLjY5IDUwLjYzNzMgMTI1LjE1MyA1Mi4wNTk2TDEzMy40MDYgNTYuODIzN0MxMzUuMzUyIDU3Ljk0NzUgMTM1Ljc2MSA1OS42MjMgMTM0LjYzMSA2MC45Nzg0TDEzNS42NzcgNjMuMjM3OEMxMzkuMzMxIDYxLjEwMjUgMTM5LjMxOCA1Ny42NjE1IDEzNS42MzYgNTUuNTM2MUwxMjcuMzg0IDUwLjc3MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTgzLjgxMyA4My4zNDg2QzE4Ny41MDggODUuNDgxOSAxODcuNTA4IDg4Ljk0MDggMTgzLjgxMyA5MS4wNzQyQzE4MC4xMTcgOTMuMjA3NiAxNzQuMTI2IDkzLjIwNzYgMTcwLjQzIDkxLjA3NDJMMTYyLjE3OCA4Ni4zMUMxNjAuOTQ0IDg1LjU5NzcgMTYwLjEyMiA4NC43Mzc1IDE1OS43MTIgODMuODI4M0wxNjMuNTY5IDg0LjQyMzRDMTYzLjgwNiA4NC42MzU2IDE2NC4wODYgODQuODM2NiAxNjQuNDA4IDg1LjAyMjRMMTcyLjY2MSA4OS43ODY2QzE3NS4xMjQgOTEuMjA4OCAxNzkuMTE5IDkxLjIwODggMTgxLjU4MiA4OS43ODY2QzE4NC4wNDYgODguMzY0MyAxODQuMDQ2IDg2LjA1ODQgMTgxLjU4MiA4NC42MzYyTDE3My4zMyA3OS44NzJDMTcxLjM4MyA3OC43NDgyIDE2OC40ODEgNzguNTEyNCAxNjYuMTMzIDc5LjE2NDZMMTYyLjIxOSA3OC41NjA2QzE2NS45MTggNzYuNDUxMSAxNzEuODc5IDc2LjQ1OSAxNzUuNTYgNzguNTg0NEwxODMuODEzIDgzLjM0ODZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0NS4xNTQgODEuNTgxNUMxNDMuNDkgODEuNjA0MSAxNDEuODEzIDgxLjI0ODkgMTQwLjU0MyA4MC41MTU4TDEzMi4yOTEgNzUuNzUxN0MxMzEuMDIxIDc1LjAxODYgMTMwLjQwNSA3NC4wNTA3IDEzMC40NDUgNzMuMDkwMUwxMjkuMDI0IDcwLjAyMTlDMTI2LjQwNSA3Mi4xNTQ2IDEyNi43NSA3NS4xMjg2IDEzMC4wNiA3Ny4wMzkzTDEzOC4zMTMgODEuODAzNEMxNDEuNjIyIDgzLjcxNDEgMTQ2Ljc3NCA4My45MTM2IDE1MC40NjggODIuNDAxN0wxNDUuMTU0IDgxLjU4MTVaTTE1NC40MTMgNzcuMzU1N0wxNTEuMDE0IDc2LjgzMTJDMTUwLjcxOCA3Ni4yOTUxIDE1MC4yMDEgNzUuNzkwNyAxNDkuNDY1IDc1LjM2NTRMMTQxLjIxMiA3MC42MDEzQzE0MC40NzUgNzAuMTc1OSAxMzkuNjAyIDY5Ljg3NzggMTM4LjY3MyA2OS43MDY5TDEzNy43NjUgNjcuNzQ0OEMxMzkuODM4IDY3Ljg3MyAxNDEuODUzIDY4LjM5NiAxNDMuNDQzIDY5LjMxMzdMMTUxLjY5NSA3NC4wNzc4QzE1My4yODUgNzQuOTk1NSAxNTQuMTkxIDc2LjE1ODUgMTU0LjQxMyA3Ny4zNTU3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMzMuNDQ0IDcyLjg5OTVMMTI3LjY0NSA2MC41Mzg1TDEzMC42ODkgNjAuMDYyNUwxMzYuNDg4IDcyLjQyMzVMMTMzLjQ0NCA3Mi44OTk1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDUuNDgyIDc5Ljg0ODhMMTY2Ljg5NCA4My4xOTY2TDE2Ny43MTkgODEuNDM5TDE0Ni4zMDcgNzguMDkxMkwxNDUuNDgyIDc5Ljg0ODhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwNS4wMDYgODYuNzMyMUMyMDcuMDQyIDg1LjU1NjUgMjA3LjA0MiA4My42NTA2IDIwNS4wMDYgODIuNDc1MUwyMDcuMjM2IDgxLjE4NzVDMjEwLjUwNCA4My4wNzQxIDIxMC41MDQgODYuMTMzIDIwNy4yMzYgODguMDE5N0wxNzAuNjg3IDEwOS4xMkMxNjcuNDE5IDExMS4wMDYgMTYyLjEyIDExMS4wMDYgMTU4Ljg1MiAxMDkuMTJMMTYxLjA4MiAxMDcuODMyQzE2My4xMTkgMTA5LjAwOCAxNjYuNDIgMTA5LjAwOCAxNjguNDU2IDEwNy44MzJMMjA1LjAwNiA4Ni43MzIxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjEuNTIzIDM4LjUzNzFDMTIzLjU1OSAzNy4zNjE2IDEyNi44NiAzNy4zNjE2IDEyOC44OTcgMzguNTM3MUwxMzEuMTI3IDM3LjI0OTVDMTI3Ljg1OSAzNS4zNjI5IDEyMi41NiAzNS4zNjI5IDExOS4yOTIgMzcuMjQ5NUw4Mi43NDI3IDU4LjM0OTZDNzkuNDc0NyA2MC4yMzYyIDc5LjQ3NDcgNjMuMjk1MSA4Mi43NDI3IDY1LjE4MTdMODQuOTczMSA2My44OTQxQzgyLjkzNjkgNjIuNzE4NiA4Mi45MzY5IDYwLjgxMjcgODQuOTczMSA1OS42MzcyTDEyMS41MjMgMzguNTM3MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjA0LjU5NiA3Ni40NjI0TDEzOS4zMTIgMzguNzczOUwxMzEuNTM3IDQzLjI2MjNMMTk2LjgyMSA4MC45NTA3TDIwNC41OTYgNzYuNDYyNFpNMTQxLjU0MiAzNy40ODYzQzE0MC4zMSAzNi43NzUyIDEzOC4zMTMgMzYuNzc1MiAxMzcuMDgxIDM3LjQ4NjNMMTI5LjMwNiA0MS45NzQ3QzEyOC4wNzUgNDIuNjg1OCAxMjguMDc1IDQzLjgzODcgMTI5LjMwNiA0NC41NDk5TDE5NC41OSA4Mi4yMzgzQzE5NS44MjIgODIuOTQ5NCAxOTcuODE5IDgyLjk0OTQgMTk5LjA1MSA4Mi4yMzgzTDIwNi44MjYgNzcuNzVDMjA4LjA1OCA3Ny4wMzg5IDIwOC4wNTggNzUuODg1OSAyMDYuODI2IDc1LjE3NDhMMTQxLjU0MiAzNy40ODYzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNTguNDQxIDEwMy4xMDdMOTMuMTU3MiA2NS40MTg1TDg1LjM4MjYgNjkuOTA2OEwxNTAuNjY3IDEwNy41OTVMMTU4LjQ0MSAxMDMuMTA3Wk05NS4zODc2IDY0LjEzMDlDOTQuMTU1OCA2My40MTk3IDkyLjE1ODYgNjMuNDE5NyA5MC45MjY4IDY0LjEzMDlMODMuMTUyMiA2OC42MTkyQzgxLjkyMDQgNjkuMzMwMyA4MS45MjA0IDcwLjQ4MzMgODMuMTUyMiA3MS4xOTQ0TDE0OC40MzYgMTA4Ljg4M0MxNDkuNjY4IDEwOS41OTQgMTUxLjY2NSAxMDkuNTk0IDE1Mi44OTcgMTA4Ljg4M0wxNjAuNjcyIDEwNC4zOTVDMTYxLjkwMyAxMDMuNjgzIDE2MS45MDMgMTAyLjUzIDE2MC42NzIgMTAxLjgxOUw5NS4zODc2IDY0LjEzMDlaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RkZGRkXzE0MjlfMTMzMyIgeD0iLTQyLjA0ODgiIHk9IjU4LjA1OTEiIHdpZHRoPSIzOTEuOTg2IiBoZWlnaHQ9IjQxOC41NDMiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldC8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18xNDI5XzEzMzMiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iMSIgZHk9IjEyIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEzIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzE0MjlfMTMzMyIgcmVzdWx0PSJlZmZlY3QyX2Ryb3BTaGFkb3dfMTQyOV8xMzMzIi8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjMiIGR5PSI0NyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyNCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3QyX2Ryb3BTaGFkb3dfMTQyOV8xMzMzIiByZXN1bHQ9ImVmZmVjdDNfZHJvcFNoYWRvd18xNDI5XzEzMzMiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iNiIgZHk9IjEwNyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzMiIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3QzX2Ryb3BTaGFkb3dfMTQyOV8xMzMzIiByZXN1bHQ9ImVmZmVjdDRfZHJvcFNoYWRvd18xNDI5XzEzMzMiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iMTEiIGR5PSIxOTAiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMzgiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0NF9kcm9wU2hhZG93XzE0MjlfMTMzMyIgcmVzdWx0PSJlZmZlY3Q1X2Ryb3BTaGFkb3dfMTQyOV8xMzMzIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0NV9kcm9wU2hhZG93XzE0MjlfMTMzMyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNDI5XzEzMzMiPgo8cmVjdCB3aWR0aD0iMjg2LjM4NyIgaGVpZ2h0PSIyNDMuOTgzIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC40NjQ4NDQgMC4yODYxMzMpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);