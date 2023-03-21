"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[7222],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(i),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return i?n.createElement(f,s(s({ref:t},p),{},{components:i})):n.createElement(f,s({ref:t},p))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},32981:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>R,frontMatter:()=>y,metadata:()=>g,toc:()=>v});var n=i(87462),a=i(67294),r=i(3905),s=i(39960);const o={kits_gallery:"kits_gallery_VFPH",container:"container_q6h3",title_container:"title_container_X9a_",title:"title_HV70",description:"description_kxWi",gallery_container:"gallery_container_lou1",gallery_item:"gallery_item_Vtox",item_img:"item_img_fb_8",developer_kits:"developer_kits_eUeN"};function l(e){let{itemsArray:t,title:i,description:n}=e;return a.createElement("section",{className:o.kits_gallery},a.createElement("div",{className:o.container},a.createElement("div",{className:o.title_container},a.createElement("h2",{className:o.title},i),a.createElement("p",{className:o.description},n)),a.createElement("div",{className:o.gallery_container},t.map(((e,t)=>a.createElement("div",{key:t,className:o.gallery_item},a.createElement(s.Z,{to:e.pageRoute,className:o.gallery_link},a.createElement("img",{src:e.img,className:o.item_img}))))))))}var c=i(29964),p=i(17699),u=i(94932),m=i(43193),d=i(68383);const f=[{id:1,img:c.Z,pageRoute:"/docs/Resiliency/DCM%20Kit"},{id:2,img:p.Z,pageRoute:"/docs/Resiliency/maas"},{id:3,img:u.Z,pageRoute:"/docs/Resiliency/OSIM"},{id:4,img:m.Z,pageRoute:"/docs/Resiliency/PURIS"},{id:5,img:d.Z,pageRoute:"/docs/Resiliency/mp%20kit"}],y={id:"resiliency",title:"Resiliency Domain",description:"Business Domain Resiliency",sidebar_position:1},h=void 0,g={unversionedId:"Resiliency/resiliency",id:"Resiliency/resiliency",title:"Resiliency Domain",description:"Business Domain Resiliency",source:"@site/docs/Resiliency/resiliency.mdx",sourceDirName:"Resiliency",slug:"/Resiliency/",permalink:"/docs/Resiliency/",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/Resiliency/resiliency.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"resiliency",title:"Resiliency Domain",description:"Business Domain Resiliency",sidebar_position:1},sidebar:"Resiliency",next:{title:"DCM Kit",permalink:"/docs/Resiliency/DCM Kit"}},b={},v=[{value:"Business Domain Resiliency",id:"business-domain-resiliency",level:2},{value:"What&#39;s in?",id:"whats-in",level:3}],k={toc:v};function R(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"business-domain-resiliency"},"Business Domain Resiliency"),(0,r.kt)("h3",{id:"whats-in"},"What's in?"),(0,r.kt)("p",null,"The Business Domain Resiliency contains five use cases of Catena-X:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Demand and Capacity Management (DCM)"),(0,r.kt)("li",{parentName:"ul"},"Predictive Unit Real-Time Information Service (PURIS)"),(0,r.kt)("li",{parentName:"ul"},"Manufacturing-as-a-Service (MaaS)"),(0,r.kt)("li",{parentName:"ul"},"Online Control and Simulation (OSim)"),(0,r.kt)("li",{parentName:"ul"},"Modular Production (MP)")),(0,r.kt)("p",null,"For each of these use cases a specific kit is prepared which are available here in the resiliency kit area."),(0,r.kt)("p",null,"The kits in the resiliency kit area enables you, especially as a provider for software services, applications and solutions, to realize offerings in a Catena-X compliant way. The kits includes, among others, information about"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vision & mission"),(0,r.kt)("li",{parentName:"ul"},"semantic models as prerequisite for standardized and interoperable data exchange"),(0,r.kt)("li",{parentName:"ul"},"defintion of software APIs as well as"),(0,r.kt)("li",{parentName:"ul"},"open source code")),(0,r.kt)("p",null,"of each use case."),(0,r.kt)("p",null,"The Resiliency Kit area is continuously under development and future extensions and improvements will help you to adopt or extend functionality even faster."),(0,r.kt)("p",null,"The strengthen of resiliency of the supply chain and related shopfloor processes is a main focus in our business domain. We look at the supply chain from the Tier-n supplier to the automotive OEM and of course backwards too. Our applications are based on a cooperative concept. This means that the applications executed on each tier level are based on information obtained from one tier level up or one level down. This exchanged information is (and will be in next month step by step) standardized for each of our use cases. By executing the application (or a Catena-X compatible application for the specific use case from a different software provider - maybe realized from your company) on each tier level the supply chain over spanning task can be solved. Some of our use cases have an effect on the shop floor. For example, changed customer demands can lead to adjustments in manufacturing or vice versa changed production capacities, captured by information and operation technology on the shopfloor, can have impact to the supply chain. The linked usage of our use case application will offer an extended business value for all partners in the supply chain."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Resiliency-Image",src:i(22993).Z,width:"2870",height:"1269"})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l,{itemsArray:f,title:"Preview of our Kits",description:"Unlock the power of Kits. Browse the latest preview on the Kits from the Resiliency Domain.",mdxType:"KitsGalleryMDX"}))}R.isMDXComponent=!0},68383:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/MPKIT-1b5e6bd9cfaf102344131311935b17a7.png"},17699:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/MaaSKIT-ab49344ce122f57af93c1c4bf6fae955.png"},94932:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/OSimKIT-10f4dbd2c15cd47f8c7e2e64a2690648.png"},43193:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/PURISKIT-dad63e9c6e350a7646586258c5dd252f.png"},29964:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/gallery-dcm-kit-min-ec70241ebf473071cda3e5593e7ddbfe.png"},22993:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Resiliency-Domain-Image-3b9db46ef18e4fecadda603c371cb6c4.jpg"}}]);