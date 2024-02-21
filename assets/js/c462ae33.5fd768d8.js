"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[37267],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=l,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96240:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const i={sidebar_class_name:"hidden"},r=void 0,o={unversionedId:"kits/Traceability Kit/Software Development View/part_aspect-models",id:"version-23.12/kits/Traceability Kit/Software Development View/part_aspect-models",title:"part_aspect-models",description:"\x3c!---",source:"@site/docs-kits_versioned_docs/version-23.12/kits/Traceability Kit/Software Development View/part_aspect-models.mdx",sourceDirName:"kits/Traceability Kit/Software Development View",slug:"/kits/Traceability Kit/Software Development View/part_aspect-models",permalink:"/docs-kits/kits/Traceability Kit/Software Development View/part_aspect-models",draft:!1,tags:[],version:"23.12",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"receiveUniqueIdPushNotification",permalink:"/docs-kits/kits/Traceability Kit/Software Development View/Unique ID Push API/receive-unique-id-push-notification"},next:{title:"part_bill-of-materials",permalink:"/docs-kits/kits/Traceability Kit/Software Development View/part_bill-of-materials"}},s={},d=[{value:"Aspect Models",id:"aspect-models",level:2},{value:"AsPlanned",id:"asplanned",level:3},{value:"Short Introduction: What is a BoM AsPlanned?",id:"short-introduction-what-is-a-bom-asplanned",level:4},{value:"Definition Status of the BoM AsPlanned",id:"definition-status-of-the-bom-asplanned",level:4},{value:"1. PartAsPlanned",id:"1-partasplanned",level:4},{value:"Example: Submodel <code>PartAsPlanned</code> for a Catalog Part",id:"example-submodel-partasplanned-for-a-catalog-part",level:5},{value:"2. SingelLevelBomAsPlanned",id:"2-singellevelbomasplanned",level:4},{value:"Example: Submodel <code>SingleLevelBomAsPlanned</code> for a Catalog Part",id:"example-submodel-singlelevelbomasplanned-for-a-catalog-part",level:5},{value:"3. SingelLevelUsageAsPlanned",id:"3-singellevelusageasplanned",level:4},{value:"Example: Submodel <code>SingleLevelUsageAsPlanned</code> for a Catalog Part",id:"example-submodel-singlelevelusageasplanned-for-a-catalog-part",level:5},{value:"4. PartSiteInformationAsPlanned",id:"4-partsiteinformationasplanned",level:4},{value:"Example: Submodel <code>PartSiteInformationAsPlanned</code> for a Component that is Produced at the Given Site",id:"example-submodel-partsiteinformationasplanned-for-a-component-that-is-produced-at-the-given-site",level:5},{value:"AsBuilt",id:"asbuilt",level:3},{value:"Short Introduction: What is a BoM AsBuilt?",id:"short-introduction-what-is-a-bom-asbuilt",level:4},{value:"Definition Status of the BoM AsBuilt",id:"definition-status-of-the-bom-asbuilt",level:4},{value:"1. SerialPart",id:"1-serialpart",level:4},{value:"Example: Submodel <code>SerialPart</code> for a Vehicle",id:"example-submodel-serialpart-for-a-vehicle",level:5},{value:"Example: Submodel <code>SerialPart</code> for a Serialized Part (Non-Vehicle)",id:"example-submodel-serialpart-for-a-serialized-part-non-vehicle",level:5},{value:"2. SingleLevelBomAsBuilt",id:"2-singlelevelbomasbuilt",level:4},{value:"Example: Submodel <code>SingleLevelBomAsBuilt</code> for a Serialized Part",id:"example-submodel-singlelevelbomasbuilt-for-a-serialized-part",level:5},{value:"Submodel <code>SingleLevelBomAsBuilt</code> for a Batch",id:"submodel-singlelevelbomasbuilt-for-a-batch",level:5},{value:"3. Batch",id:"3-batch",level:4},{value:"Example: Submodel <code>Batch</code> for a Batch of Raw Material",id:"example-submodel-batch-for-a-batch-of-raw-material",level:5},{value:"4. JustInSequencePart",id:"4-justinsequencepart",level:4},{value:"Example: Submodel <code>JustInSequencePart</code> for a non-serialized component",id:"example-submodel-justinsequencepart-for-a-non-serialized-component",level:5},{value:"5. TractionBatteryCode",id:"5-tractionbatterycode",level:4},{value:"Example: Submodel <code>TractionBatteryCode</code> for a Battery Cell",id:"example-submodel-tractionbatterycode-for-a-battery-cell",level:5},{value:"Example: Submodel <code>TractionBatteryCode</code> for a Battery Module",id:"example-submodel-tractionbatterycode-for-a-battery-module",level:5},{value:"Example: Submodel <code>TractionBatteryCode</code> for a Battery Pack",id:"example-submodel-tractionbatterycode-for-a-battery-pack",level:5}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"aspect-models"},"Aspect Models"),(0,l.kt)("h3",{id:"asplanned"},"AsPlanned"),(0,l.kt)("h4",{id:"short-introduction-what-is-a-bom-asplanned"},"Short Introduction: What is a BoM AsPlanned?"),(0,l.kt)("p",null,"The BoM AsPlanned is the generic list of all possible catalogue parts & materials for a specific vehical project and the supply chain from OEM to raw material suppliers. The BoM is also called 120% which means that it includes alternative parts / materials (e.g. LED headlights and XENON headlights) and parts for certain markets. It will be set up way before Start of Production (SOP) and be updated if the contents are updated. It is used for Sourcing / Production Planning and always reflects the current state of parts / materials build into this specific vehicle project."),(0,l.kt)("p",null,"The BoM AsPlanned also includes all versions of parts like changed parts. It has to enable parts/materials provided from multiple manufacturers or the same manufacturer at different production sites. Additionally it must be possible to map relations of the same part/material to different customers."),(0,l.kt)("p",null,"The complexity of generic is much higher than BoM AsBuilt. It is used for technical topics, e.g., Supply Chain Act, DCM."),(0,l.kt)("h4",{id:"definition-status-of-the-bom-asplanned"},"Definition Status of the BoM AsPlanned"),(0,l.kt)("p",null,"Defined"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Digital Twins"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Digtial Twin "PartType"'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Traceability data aspect models"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Aspect model "PartAsPlanned"'),(0,l.kt)("li",{parentName:"ul"},'Aspect model "SingleLevelBoMAsPlanned"'),(0,l.kt)("li",{parentName:"ul"},'Aspect model "SingelLevelUsageAsPlanned"'),(0,l.kt)("li",{parentName:"ul"},'Aspect model "PartSiteInformationAsPlanned"')))),(0,l.kt)("h4",{id:"1-partasplanned"},"1. PartAsPlanned"),(0,l.kt)("p",null,"A Part as Planned represents an item in the Catena-X Bill of Material (BOM) in As-Planned lifecycle status in a specific version."),(0,l.kt)("p",null,"Github Link to semantic data model: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.part_as_planned/1.0.1"},"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.part_as_planned/1.0.1")),(0,l.kt)("h5",{id:"example-submodel-partasplanned-for-a-catalog-part"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"PartAsPlanned")," for a Catalog Part"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partTypeInformation": {\n    "classification": "component",\n    "manufacturerPartId": "123-0.740-3434-A",\n    "nameAtManufacturer": "Mirror left"\n  },\n  "validityPeriod": {\n    "validFrom": "2021-06-14T06:55:29.935Z",\n    "validTo": "2022-06-14T06:55:29.935Z"\n  },\n  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379"\n}\n')),(0,l.kt)("h4",{id:"2-singellevelbomasplanned"},"2. SingelLevelBomAsPlanned"),(0,l.kt)("p",null,'The single-level Bill of Material represents one sub-level of an assembly and does not include any lower-level subassemblies. In as planned lifecycle state all variants are covered (\\"120% BoM\\"). If multiple versions of child parts exist that can be assembled into the same parent part, all versions of the child part are included in the BoM. If there are multiple suppliers for the same child part, each supplier has an entry for their child part in the BoM.'),(0,l.kt)("p",null,"Github Link to semantic data model: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_planned/2.0.0"},"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.single_level_bom_as_planned/2.0.0")),(0,l.kt)("h5",{id:"example-submodel-singlelevelbomasplanned-for-a-catalog-part"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"SingleLevelBomAsPlanned")," for a Catalog Part"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "catenaXId": "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d",\n  "childItems": [\n    {\n      "catenaXId": "urn:uuid:5daB938E-Cafa-92B3-7ca1-9aD7885e9dC8"\n      "quantity": {\n        "quantityNumber": 2.5,\n        "measurementUnit": "unit:litre"\n      },\n      "createdOn": "2022-02-03T14:48:54.709Z",\n      "businessPartner": "BPNL50096894aNXY",\n      "lastModifiedOn": "2022-02-03T14:48:54.709Z"\n  ]\n}\n')),(0,l.kt)("h4",{id:"3-singellevelusageasplanned"},"3. SingelLevelUsageAsPlanned"),(0,l.kt)("p",null,"The aspect provides the information in which parent part(s)/product(s) the given item is assembled in. This could be a 1:1 relationship in terms of a e.g. a brake component or 1:n for e.g. coatings. The given item as well as the parent item must refer to an object from as planned lifecycle phase. If multiple versions of parent parts exist that the child part can be assembled into, all versions of the parent part are included in the usage list."),(0,l.kt)("p",null,"Github Link to semantic data model: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.single_level_usage_as_planned/1.1.0"},"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.single_level_usage_as_planned/1.1.0")),(0,l.kt)("h5",{id:"example-submodel-singlelevelusageasplanned-for-a-catalog-part"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"SingleLevelUsageAsPlanned")," for a Catalog Part"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parentParts": [\n    {\n      "parentCatenaXId": "urn:uuid:c8B01D5A-ce0B-6Dd4-5bA0-A3e3fcE9cA93",\n      "quantity": {\n        "quantityNumber": 2.5,\n        "measurementUnit": "unit:litre"\n      },\n      "createdOn": "2022-02-03T14:48:54.709Z",\n      "lastModifiedOn": "2022-02-03T14:48:54.709Z"\n    }\n  ],\n  "catenaXId": "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d"\n}\n')),(0,l.kt)("h4",{id:"4-partsiteinformationasplanned"},"4. PartSiteInformationAsPlanned"),(0,l.kt)("p",null,'The aspect provides site related information for a given as planned item (i.e. a part type or part instance that is uniquely identifiable within Catena-X via its Catena-X ID). A site is a delimited geographical area where a legal entity does business. In the \\"as planned\\" lifecycle context all potentially related sites are listed including all sites where e.g. production of this part (type) is planned.'),(0,l.kt)("p",null,"Github Link to semantic data model: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.part_site_information_as_planned/1.0.0"},"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.part_site_information_as_planned/1.0.0")),(0,l.kt)("h5",{id:"example-submodel-partsiteinformationasplanned-for-a-component-that-is-produced-at-the-given-site"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"PartSiteInformationAsPlanned")," for a Component that is Produced at the Given Site"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",\n  "sites": [\n    {\n      "catenaXSiteId": "BPNS1234567890ZZ",\n      "functionValidUntil": "2025-11-21T11:14:30.825+01:00",\n      "function": "production",\n      "functionValidFrom": "2022-11-21T11:14:30.825+01:00"\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"asbuilt"},"AsBuilt"),(0,l.kt)("h4",{id:"short-introduction-what-is-a-bom-asbuilt"},"Short Introduction: What is a BoM AsBuilt?"),(0,l.kt)("p",null,"A BoM AsBuilt resembles a single vehicle, which means that each vehicle built has its own individual BoM asBuilt. The BoM includes all part/components which either have a serial number, batch number, JIS number (sequence number) or a combination out of these. This means, that there is a direct and specific connection between a parent and a child part/component so that an accurate and exact traceability is possible."),(0,l.kt)("p",null,"Also, the BoM is called 100%, as there are no alternative parts included but only built parts. Therefore, it will be set up when a part is produced and can be connected to its parent and child parts."),(0,l.kt)("p",null,"In Catena-X the BoM asBuilt is used for technical topics, e.g., Quality, Battery Passport (CE)."),(0,l.kt)("h4",{id:"definition-status-of-the-bom-asbuilt"},"Definition Status of the BoM AsBuilt"),(0,l.kt)("p",null,"Defined"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Digital Twins",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digital Twin Serialized Part"),(0,l.kt)("li",{parentName:"ul"},"Digital Twin Batch"),(0,l.kt)("li",{parentName:"ul"},"Digital Twin Vehicle"))),(0,l.kt)("li",{parentName:"ul"},"Build up the basic chain",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Aspect model "SerialPart"'),(0,l.kt)("li",{parentName:"ul"},'Aspect model "AssemblyPartRelation"'),(0,l.kt)("li",{parentName:"ul"},'Aspect model "Batch"'),(0,l.kt)("li",{parentName:"ul"},'Aspect model "JustInSequencePart"'),(0,l.kt)("li",{parentName:"ul"},'Aspect model "TractionBatteryCode"')))),(0,l.kt)("h4",{id:"1-serialpart"},"1. SerialPart"),(0,l.kt)("p",null,"A serialized part is an instantiation of a (design-) part, where the particular instantiation can be uniquely identified by means of a serial numbers or a similar identifier (e.g. VAN) or a combination of multiple identifiers (e.g. combination of manufacturer, date and number)"),(0,l.kt)("p",null,"Github Link to semantic data model: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.serial_part/1.0.1"},"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.serial_part/1.0.1")),(0,l.kt)("h5",{id:"example-submodel-serialpart-for-a-vehicle"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"SerialPart")," for a Vehicle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "localIdentifiers": [\n    {\n      "key": "manufacturerId",\n      "value": "BPNL7588787849VQ"\n    },\n    {\n      "key": "manufacturerPartId",\n      "value": "95657362-83"\n    },\n    {\n      "key": "partInstanceId",\n      "value": "OEM-A-F8LM95T92WJ9KNDD3HA5P"\n    },\n    {\n      "key": "van",\n      "value": "OEM-A-F8LM95T92WJ9KNDD3HA5P"\n    }\n  ],\n  "manufacturingInformation": {\n    "date": "2022-02-04T14:48:54",\n    "country": "DEU"\n  },\n  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",\n  "partTypeInformation": {\n    "manufacturerPartID": "QX-39",\n    "classification": "product",\n    "nameAtManufacturer": "Vehicle Model A"\n  }\n}\n')),(0,l.kt)("h5",{id:"example-submodel-serialpart-for-a-serialized-part-non-vehicle"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"SerialPart")," for a Serialized Part (Non-Vehicle)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "localIdentifiers": [\n    {\n      "key": "manufacturerId",\n      "value": "BPNL7588787849VQ"\n    },\n    {\n      "key": "manufacturerPartId",\n      "value": "95657362-83"\n    },\n    {\n      "key": "partInstanceId",\n      "value": "NO-574868639429552535768526"\n    }\n  ],\n  "manufacturingInformation": {\n    "date": "2022-02-04T14:48:54",\n    "country": "DEU"\n  },\n  "catenaXId": "urn:uuid:d60b99b0-f269-42f5-94d0-64fe0946ed04",\n  "partTypeInformation": {\n    "manufacturerPartID": "95657362-83",\n    "customerPartId": "798-515297795-A",\n    "classification": "component",\n    "nameAtManufacturer": "High Voltage Battery",\n    "nameAtCustomer": "High Voltage Battery"\n  }\n}\n')),(0,l.kt)("h4",{id:"2-singlelevelbomasbuilt"},"2. SingleLevelBomAsBuilt"),(0,l.kt)("p",null,"The aspect provides the child parts (one structural level down) which the given object assembles."),(0,l.kt)("p",null,"Github Link to semantic data model: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.single_level_bom_as_built/2.0.0"},"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.single_level_bom_as_built/2.0.0")),(0,l.kt)("h5",{id:"example-submodel-singlelevelbomasbuilt-for-a-serialized-part"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"SingleLevelBomAsBuilt")," for a Serialized Part"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",\n  "childItems": [\n    {\n      "quantity": {\n        "quantityNumber": 1.0,\n        "measurementUnit": "unit:piece"\n      },\n      "hasAlternatives": false,\n      "createdOn": "2022-02-03T14:48:54.709Z",\n      "lastModifiedOn": "2022-02-03T14:48:54.709Z",\n      "catenaXId": "urn:uuid:d60b99b0-f269-42f5-94d0-64fe0946ed04",\n      "businessPartner": "BPNL50096894aNXY"\n    }\n  ]\n}\n')),(0,l.kt)("h5",{id:"submodel-singlelevelbomasbuilt-for-a-batch"},"Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"SingleLevelBomAsBuilt")," for a Batch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",\n  "childItems": [\n    {\n      "quantity": {\n        "quantityNumber": 25.0,\n        "measurementUnit": "unit:kilogram"\n      },\n      "hasAlternatives": false,\n      "createdOn": "2022-02-03T14:48:54.709Z",\n      "lastModifiedOn": "2022-02-03T14:48:54.709Z",\n      "catenaXId": "urn:uuid:d60b99b0-f269-42f5-94d0-64fe0946ed04",\n      "businessPartner": "BPNL50096894aNXY"\n    }\n  ]\n}\n')),(0,l.kt)("h4",{id:"3-batch"},"3. Batch"),(0,l.kt)("p",null,"A batch is a quantity of (semi-) finished products or (raw) material product that have been produced under the same circumstances (e.g. same production location), as specified groups or amounts, within a certain time frame. Every batch can differ in the number or amount of products. Different batches can have varied specifications, e.g., different colors. A batch is identified via a Batch ID."),(0,l.kt)("p",null,"Github Link to semantic data model: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.batch/2.0.0"},"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.batch/2.0.0")),(0,l.kt)("h5",{id:"example-submodel-batch-for-a-batch-of-raw-material"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"Batch")," for a Batch of Raw Material"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "localIdentifiers": [\n    {\n      "value": "BID12345678",\n      "key": "batchId"\n    }\n  ],\n  "manufacturingInformation": {\n    "date": "2022-02-04T14:48:54",\n    "country": "HUR"\n  },\n  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",\n  "partTypeInformation": {\n    "manufacturerPartId": "123-0.740-3434-A",\n    "classification": "product",\n    "nameAtManufacturer": "PA66-GF30",\n  }\n}\n')),(0,l.kt)("h4",{id:"4-justinsequencepart"},"4. JustInSequencePart"),(0,l.kt)("p",null,"A just-in-sequence part is an instantiation of a (design-) part, where the particular instantiation can be uniquely identified by means of a combination of several IDs related to a just-in-sequence process."),(0,l.kt)("p",null,"Github Link to semantic data model: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.just_in_sequence_part/1.0.0"},"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.just_in_sequence_part/1.0.0")),(0,l.kt)("h5",{id:"example-submodel-justinsequencepart-for-a-non-serialized-component"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"JustInSequencePart")," for a non-serialized component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "localIdentifiers": [\n    {\n      "key": "manufacturerId",\n      "value": "BPNL7588787849VQ"\n    },\n    {\n      "key": "jisNumber",\n      "value": "894651684"\n    },\n    {\n      "key": "parentOrderNumber",\n      "value": "OEM-A-F8LM95T92WJ9KNDD3HA5P"\n    },\n    {\n      "key": "jisCallDate",\n      "value": "2022-01-24T09:13:34"\n    }\n  ],\n  "manufacturingInformation": {\n    "date": "2022-02-04T14:48:54",\n    "country": "DEU"\n  },\n  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",\n  "partTypeInformation": {\n    "manufacturerPartID": "84816168424",\n    "classification": "product",\n    "nameAtManufacturer": "Black Leather Front Row Seat for Vehicle Model B"\n  }\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Please note that if a just-in-sequence part is also a serialized part, SerialPart should be used instead.")),(0,l.kt)("h4",{id:"5-tractionbatterycode"},"5. TractionBatteryCode"),(0,l.kt)("p",null,"The aspect provides the information of the Traction battery code of a battery cell, a battery module or a battery pack according to the chinese standard GB/T 34014-2017. Furthermore, it provides the traction battery codes for the assembled sub parts of the component, e.g.  Traction battery code of a battery module plus all the traction battery codes of the assembled battery cells of this battery module."),(0,l.kt)("p",null,"Github Link to semantic data model: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.traction_battery_code/1.0.0"},"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.traction_battery_code/1.0.0")),(0,l.kt)("h5",{id:"example-submodel-tractionbatterycode-for-a-battery-cell"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"TractionBatteryCode")," for a Battery Cell"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "productType": "cell",\n  "tractionBatteryCode": "X12CCPM27KLPCLE662382320"\n}\n')),(0,l.kt)("h5",{id:"example-submodel-tractionbatterycode-for-a-battery-module"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"TractionBatteryCode")," for a Battery Module"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "productType": "module",\n  "tractionBatteryCode": "B54MCPM27KLPCLE6A7519857",\n  "subcomponents": [\n    {\n      "productType": "cell",\n      "tractionBatteryCode": "X12CCPM27KLPCLE662382320"\n    },\n    {\n      "productType": "cell",\n      "tractionBatteryCode": "X12CCPM27KLPCLE662382321"\n    }\n  ]\n}\n')),(0,l.kt)("h5",{id:"example-submodel-tractionbatterycode-for-a-battery-pack"},"Example: Submodel ",(0,l.kt)("inlineCode",{parentName:"h5"},"TractionBatteryCode")," for a Battery Pack"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "productType": "pack",\n  "tractionBatteryCode": "4A6PCPM27KLPCLE742946319",\n  "subcomponents": [\n    {\n      "productType": "module",\n      "tractionBatteryCode": "B54MCPM27KLPCLE6A7519857",\n      "subcomponents": [\n        {\n          "productType": "cell",\n          "tractionBatteryCode": "X12CCPM27KLPCLE662382320"\n        },\n        {\n          "productType": "cell",\n          "tractionBatteryCode": "X12CCPM27KLPCLE662382321"\n        }\n      ]\n    },\n    {\n      "productType": "module",\n      "tractionBatteryCode": "B54MCPM27KLPCLE6A7519858",\n      "subcomponents": [\n        {\n          "productType": "cell",\n          "tractionBatteryCode": "X12CCPM27KLPCLE662382322"\n        },\n        {\n          "productType": "cell",\n          "tractionBatteryCode": "X12CCPM27KLPCLE662382323"\n        }\n      ]\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);