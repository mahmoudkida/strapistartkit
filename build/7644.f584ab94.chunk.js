(self.webpackChunkbranchtest_1=self.webpackChunkbranchtest_1||[]).push([[7644],{80232:(x,U,t)=>{var s=t(48208),e=t(62632),h=e(s);x.exports=h},22488:(x,U,t)=>{var s=t(80232),e=t(16005);function h(c,O){var P=-1,l=e(c)?Array(c.length):[];return s(c,function(r,R,T){l[++P]=O(r,R,T)}),l}x.exports=h},24576:(x,U,t)=>{var s=t(12480),e=t(64316),h=t(24020),c=t(22488),O=t(92048),P=t(85968),l=t(71456),r=t(45504),R=t(75516);function T(m,f,Z){f.length?f=s(f,function(B){return R(B)?function(z){return e(z,B.length===1?B[0]:B)}:B}):f=[r];var w=-1;f=s(f,P(h));var V=c(m,function(B,z,K){var k=s(f,function(y){return y(B)});return{criteria:k,index:++w,value:B}});return O(V,function(B,z){return l(B,z,Z)})}x.exports=T},92048:x=>{function U(t,s){var e=t.length;for(t.sort(s);e--;)t[e]=t[e].value;return t}x.exports=U},13052:(x,U,t)=>{var s=t(36792);function e(h,c){if(h!==c){var O=h!==void 0,P=h===null,l=h===h,r=s(h),R=c!==void 0,T=c===null,m=c===c,f=s(c);if(!T&&!f&&!r&&h>c||r&&R&&m&&!T&&!f||P&&R&&m||!O&&m||!l)return 1;if(!P&&!r&&!f&&h<c||f&&O&&l&&!P&&!r||T&&O&&l||!R&&l||!m)return-1}return 0}x.exports=e},71456:(x,U,t)=>{var s=t(13052);function e(h,c,O){for(var P=-1,l=h.criteria,r=c.criteria,R=l.length,T=O.length;++P<R;){var m=s(l[P],r[P]);if(m){if(P>=T)return m;var f=O[P];return m*(f=="desc"?-1:1)}}return h.index-c.index}x.exports=e},62632:(x,U,t)=>{var s=t(16005);function e(h,c){return function(O,P){if(O==null)return O;if(!s(O))return h(O,P);for(var l=O.length,r=c?l:-1,R=Object(O);(c?r--:++r<l)&&P(R[r],r,R)!==!1;);return O}}x.exports=e},87144:(x,U,t)=>{var s=t(78456),e=t(24576),h=t(41912),c=t(53492),O=h(function(P,l){if(P==null)return[];var r=l.length;return r>1&&c(P,l[0],l[1])?l=[]:r>2&&c(l[0],l[1],l[2])&&(l=[l[0]]),e(P,s(l,1),[])});x.exports=O},7644:(x,U,t)=>{"use strict";t.r(U),t.d(U,{SettingsPage:()=>as,makeUniqueRoutes:()=>ht});var s=t(19968),e=t(62552),h=t(55716),c=t(89600),O=t(26688),P=t(23264),l=t(26788),r=t(5e3),R=t(11208),T=t(2931),m=t(63358),f=t(6496),Z=t(53804),w=t(6912),V=t(80700),B=t(62492),z=t(3548),K=t(35676),k=t(95080),y=t(48936),Mt=t(74264),ut=t(79672),Pt=t(49780),Ot=t(46352),Dt=t(8068),pt=t(68264),Ct=t(58588),nt=t(13892),xt=t(66688),at=t(20596),ft=t(48112),Lt=t(28464),vt=t(42816),ot=t(28724),$=t(70996),it=t(65280),L=t(79632),At=t(21424),S=t(14632),Q=t(49008),Rt=t(39380),F=t(94248),jt=t(87144),et=t(70516),dt=t(33627),Bt=t(53504),It=t(32016),Ut=t(87320),Tt=t(3240),yt=t(89976),Wt=t(73560),Kt=t(48636),St=t(51384),zt=t(54288),Ft=t(53305),lt=t(73648),rt=t(5596),_t=t(43164),Gt=t(17848),Nt=t(78164),os=t(54320),is=t(5240),es=t(91892),ds=t(36196),ls=t(20880),rs=t(31812),gs=t(18424),cs=t(52540),ms=t(21968),Es=t(12132),hs=t(48632),Ms=t(85676),us=t(35184),Ps=t(99568),Os=t(96556),Ds=t(13192),ps=t(30840),Cs=t(77784),xs=t(79371),fs=t(67888),Ls=t(52600),vs=t(95752),As=t(37388),Rs=t(61840),js=t(49108),Bs=t(44632),Is=t(50840),Us=t(20252),Ts=t(86432),ys=t(22612),Ws=t(24808),Ks=t(24024),Ss=t(40960),zs=t(33656),Fs=t(43280),_s=t(79804),Gs=t(19632),Ns=t(29576),Zs=t(61152),Vs=t(9589),$s=t(45488),Qs=t(75516),Hs=t(17892),Js=t(31212);const Zt=n=>n.map(a=>{const o=a.links.map(M=>({...M,isDisplayed:!1}));return{...a,links:o}}),Vt=()=>{const[{isLoading:n,menu:a},o]=e.useState({isLoading:!0,menu:[]}),{allPermissions:M}=(0,L.c_)(),{shouldUpdateStrapi:g}=(0,L.s7)(),{settings:E}=(0,L.U7)(),D=(0,et.w1)(dt.s),p=e.useMemo(()=>(0,F.y)(),[]),{admin:i,global:d}=(0,F.p)(p,async()=>(await t.e(9440).then(t.bind(t,9440))).SETTINGS_LINKS_EE(),{combine(C,v){return{admin:[...v.admin,...C.admin],global:[...C.global,...v.global]}},defaultValue:{admin:[],global:[]}}),u=e.useCallback(C=>{if(!C.id)throw new Error("The settings menu item must have an id attribute.");return{...C,permissions:D.settings?.[C.id]?.main??[]}},[D.settings]);return e.useEffect(()=>{const C=async()=>{const X=await(Y=>Promise.all(Y.reduce((W,G,N)=>{const tt=G.links.map(async(st,b)=>({hasPermission:await(0,L.Q3)(M,st.permissions),sectionIndex:N,linkIndex:b}));return[...W,...tt]},[])))(I);o(Y=>({...Y,isLoading:!1,menu:I.map((W,G)=>({...W,links:W.links.map((N,tt)=>{const st=X.find(b=>b.sectionIndex===G&&b.linkIndex===tt);return{...N,isDisplayed:Boolean(st?.hasPermission)}})}))}))},{global:v,...j}=E,I=Zt([{...v,links:jt([...v.links,...d.map(u)],A=>A.id).map(A=>({...A,hasNotification:A.id==="000-application-infos"&&g}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:i.map(u)},...Object.values(j)]);C()},[i,d,M,E,g,u]),{isLoading:n,menu:a.map(C=>({...C,links:C.links.filter(v=>v.isDisplayed)}))}},$t=(0,rt.cp)(h.G)`
  right: 15px;
  position: absolute;
`,Qt=({menu:n})=>{const{formatMessage:a}=(0,S.c)(),{trackUsage:o}=(0,L.m4)(),{pathname:M}=(0,Q.IT)(),E=n.filter(i=>!i.links.every(d=>d.isDisplayed===!1)).map(i=>({...i,title:i.intlLabel,links:i.links.map(d=>({...d,title:d.intlLabel,name:d.id}))})),D=a({id:"global.settings",defaultMessage:"Settings"}),p=i=>()=>{o("willNavigate",{from:M,to:i})};return(0,s.jsxs)(Bt.y,{ariaLabel:D,children:[(0,s.jsx)(It.C,{label:D}),(0,s.jsx)(Ut.I,{children:E.map(i=>(0,s.jsx)(Tt.A,{label:a(i.intlLabel),children:i.links.map(d=>(0,s.jsxs)(yt.w,{as:Rt.Af,withBullet:d.hasNotification,to:d.to,onClick:p(d.to),children:[a(d.intlLabel),d?.lockIcon&&(0,s.jsx)($t,{width:`${15/16}rem`,height:`${15/16}rem`,as:Wt.c})]},d.id))},i.id))})]})},Ht=[{async Component(){const{ProtectedListPage:n}=await t.e(6632).then(t.bind(t,96632));return n},to:"/settings/roles",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await Promise.all([t.e(1748),t.e(2944),t.e(9980)]).then(t.bind(t,32360));return n},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await Promise.all([t.e(1748),t.e(2944),t.e(9980)]).then(t.bind(t,32360));return n},to:"/settings/roles/new",exact:!0},{async Component(){const{ProtectedEditPage:n}=await Promise.all([t.e(2944),t.e(308)]).then(t.bind(t,80308));return n},to:"/settings/roles/:id",exact:!0},{async Component(){const{ProtectedListPage:n}=await t.e(2032).then(t.bind(t,22032));return n},to:"/settings/users",exact:!0},{async Component(){const{ProtectedEditPage:n}=await t.e(2008).then(t.bind(t,72008));return n},to:"/settings/users/:id",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await t.e(8548).then(t.bind(t,38548));return n},to:"/settings/webhooks/create",exact:!0},{async Component(){const{ProtectedEditPage:n}=await t.e(8520).then(t.bind(t,28520)).then(a=>a.b);return n},to:"/settings/webhooks/:id",exact:!0},{async Component(){const{ProtectedListPage:n}=await t.e(6614).then(t.bind(t,26614));return n},to:"/settings/webhooks",exact:!0},{async Component(){const{ProtectedListView:n}=await t.e(9592).then(t.bind(t,49592));return n},to:"/settings/api-tokens",exact:!0},{async Component(){const{ProtectedCreateView:n}=await Promise.all([t.e(1748),t.e(1168),t.e(6184)]).then(t.bind(t,26184));return n},to:"/settings/api-tokens/create",exact:!0},{async Component(){const{ProtectedEditView:n}=await Promise.all([t.e(1748),t.e(1168),t.e(4244)]).then(t.bind(t,24244));return n},to:"/settings/api-tokens/:id",exact:!0},{async Component(){const{ProtectedCreateView:n}=await Promise.all([t.e(1748),t.e(1168),t.e(6980)]).then(t.bind(t,96980));return n},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){const{ProtectedListView:n}=await t.e(700).then(t.bind(t,70700));return n},to:"/settings/transfer-tokens",exact:!0},{async Component(){const{ProtectedEditView:n}=await Promise.all([t.e(1748),t.e(1168),t.e(128)]).then(t.bind(t,10128));return n},to:"/settings/transfer-tokens/:id",exact:!0},{async Component(){const{PurchaseAuditLogs:n}=await t.e(2512).then(t.bind(t,90132));return n},to:"/settings/purchase-audit-logs",exact:!0},{async Component(){const{PurchaseReviewWorkflows:n}=await t.e(8164).then(t.bind(t,58164));return n},to:"/settings/purchase-review-workflows",exact:!0},{async Component(){const{PurchaseSingleSignOn:n}=await t.e(3232).then(t.bind(t,3232));return n},to:"/settings/purchase-single-sign-on",exact:!0}],_=750,H=100,gt=["image/jpeg","image/png","image/svg+xml"],Jt={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},ct={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},mt=async n=>{if(!gt.includes(n.type))throw new J("File format",Jt);const o=await new Promise(D=>{const p=new FileReader;p.onload=()=>{const i=new Image;i.onload=()=>{D({width:i.width,height:i.height})},i.src=p.result},p.readAsDataURL(n)});if(!(o.width<=_&&o.height<=_))throw new J("File sizing",ct);const g={ext:n.name.split(".").pop(),size:n.size/1e3,name:n.name,url:URL.createObjectURL(n),rawFile:n,width:o.width,height:o.height};if(!(g.size<=H))throw new J("File sizing",ct);return g};class J extends Error{displayMessage;constructor(a,o,M){super(a,M),this.displayMessage=o}}const[Yt,q]=(0,_t.G)("LogoInput"),Et=({canUpdate:n,customLogo:a,defaultLogo:o,hint:M,label:g,onChangeLogo:E})=>{const[D,p]=e.useState(),[i,d]=e.useState(),{formatMessage:u}=(0,S.c)(),C=()=>{p(void 0),d(void 0)};return(0,s.jsxs)(Yt,{setLocalImage:p,localImage:D,goToStep:d,onClose:C,children:[(0,s.jsx)(c.m,{label:g,selectedSlide:0,hint:M,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:a?.name||"logo.png",actions:(0,s.jsxs)(O.E,{children:[(0,s.jsx)(P.w,{disabled:!n,onClick:()=>d("upload"),label:u({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:(0,s.jsx)(Kt.c,{})}),a?.url&&(0,s.jsx)(P.w,{disabled:!n,onClick:()=>E(null),label:u({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:(0,s.jsx)(St.c,{})})]}),children:(0,s.jsx)(l.a,{label:u({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"}),children:(0,s.jsx)(r.k,{maxHeight:"40%",maxWidth:"40%",as:"img",src:a?.url||o,alt:u({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})})})}),i?(0,s.jsxs)(R.E,{labelledBy:"modal",onClose:C,children:[(0,s.jsx)(T.k,{children:(0,s.jsx)(m.O,{fontWeight:"bold",as:"h2",id:"modal",children:u(i==="upload"?{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"}:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"})})}),i==="upload"?(0,s.jsx)(Xt,{}):(0,s.jsx)(qt,{onChangeLogo:E})]}):null]})},Xt=()=>{const{formatMessage:n}=(0,S.c)();return(0,s.jsxs)(f.M,{label:n({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple",children:[(0,s.jsxs)(r.k,{paddingLeft:8,paddingRight:8,children:[(0,s.jsxs)(Z.k,{children:[(0,s.jsx)(Z.s,{children:n({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})}),(0,s.jsx)(Z.s,{children:n({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"})})]}),(0,s.jsx)(w.c,{})]}),(0,s.jsxs)(V.o,{children:[(0,s.jsx)(V.G,{children:(0,s.jsx)(wt,{})}),(0,s.jsx)(V.G,{children:(0,s.jsx)(bt,{})})]})]})},bt=()=>{const{formatMessage:n}=(0,S.c)(),[a,o]=e.useState(""),[M,g]=e.useState(),{setLocalImage:E,goToStep:D,onClose:p}=q("URLForm"),i=u=>{o(u.target.value)},d=async u=>{u.preventDefault();const v=new FormData(u.target).get("logo-url");if(v)try{const j=await Gt.default.get(v.toString(),{responseType:"blob",timeout:8e3}),I=new File([j.data],j.config.url??"",{type:j.headers["content-type"]}),A=await mt(I);E(A),D("pending")}catch(j){if(j instanceof Nt.Uh)g(n({id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"}));else if(j instanceof J)g(n(j.displayMessage,{size:H,dimension:_}));else throw j}};return(0,s.jsxs)("form",{onSubmit:d,children:[(0,s.jsx)(r.k,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:(0,s.jsx)(B.g,{label:n({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:M,onChange:i,value:a,name:"logo-url"})}),(0,s.jsx)(z._,{startActions:(0,s.jsx)(K.Z,{onClick:p,variant:"tertiary",children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(K.Z,{type:"submit",children:n({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"})})})]})},wt=()=>{const{formatMessage:n}=(0,S.c)(),[a,o]=e.useState(!1),[M,g]=e.useState(),E=e.useRef(null),D=e.useId(),{setLocalImage:p,goToStep:i,onClose:d}=q("ComputerForm"),u=()=>o(!0),C=()=>o(!1),v=I=>{I.preventDefault(),E.current.click()},j=async()=>{if(C(),!E.current.files)return;const[I]=E.current.files;try{const A=await mt(I);p(A),i("pending")}catch(A){if(A instanceof J)g(n(A.displayMessage,{size:H,dimension:_})),E.current.focus();else throw A}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("form",{children:(0,s.jsx)(r.k,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:(0,s.jsx)(k.I,{name:D,error:M,children:(0,s.jsxs)(y.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsxs)(y.C,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:a?"primary100":"neutral100",borderColor:a?"primary500":M?"danger600":"neutral300",borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:u,onDragLeave:C,children:[(0,s.jsx)(h.G,{color:"primary600",width:(0,L.W8)(60),height:(0,L.W8)(60),as:zt.c,"aria-hidden":!0}),(0,s.jsx)(r.k,{paddingTop:3,paddingBottom:5,children:(0,s.jsx)(m.O,{variant:"delta",as:"label",htmlFor:D,children:n({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"})})}),(0,s.jsx)(kt,{accept:gt.join(", "),type:"file",name:"files",tabIndex:-1,onChange:j,ref:E,id:D}),(0,s.jsx)(K.Z,{type:"button",onClick:v,children:n({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})}),(0,s.jsx)(r.k,{paddingTop:6,children:(0,s.jsx)(m.O,{variant:"pi",textColor:"neutral600",children:n({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:H,dimension:_})})})]}),(0,s.jsx)(Mt.Q,{})]})})})}),(0,s.jsx)(z._,{startActions:(0,s.jsx)(K.Z,{onClick:d,variant:"tertiary",children:n({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})})})]})},kt=(0,rt.cp)(ut.e)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,qt=({onChangeLogo:n})=>{const{formatMessage:a}=(0,S.c)(),{localImage:o,setLocalImage:M,goToStep:g,onClose:E}=q("PendingLogoDialog"),D=()=>{M(void 0),g("upload")},p=()=>{o&&n(o),E()};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.k,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:[(0,s.jsxs)(y.C,{justifyContent:"space-between",paddingBottom:6,children:[(0,s.jsxs)(y.C,{direction:"column",alignItems:"flex-start",children:[(0,s.jsx)(m.O,{variant:"pi",fontWeight:"bold",children:a({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})}),(0,s.jsx)(m.O,{variant:"pi",textColor:"neutral500",children:a({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"})})]}),(0,s.jsx)(K.Z,{onClick:D,variant:"secondary",children:a({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"})})]}),(0,s.jsx)(r.k,{maxWidth:(0,L.W8)(180),children:o?.url?(0,s.jsx)(ts,{asset:o}):null})]}),(0,s.jsx)(z._,{startActions:(0,s.jsx)(K.Z,{onClick:E,variant:"tertiary",children:a({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(K.Z,{onClick:p,children:a({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"})})})]})},ts=({asset:n})=>{const{formatMessage:a}=(0,S.c)();return(0,s.jsxs)(Pt.M,{children:[(0,s.jsx)(Ot.q,{children:(0,s.jsx)(Dt.Q,{size:"S",src:n.url})}),(0,s.jsxs)(pt.i,{children:[(0,s.jsxs)(Ct.q,{children:[(0,s.jsx)(nt.O,{children:n.name}),(0,s.jsx)(nt.w,{children:`${n.ext?.toUpperCase()} - ${n.width}\u2715${n.height}`})]}),(0,s.jsx)(xt.g,{children:a({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"})})]})]})},ss=()=>null,ns=()=>{const{trackUsage:n}=(0,L.m4)(),{formatMessage:a}=(0,S.c)(),{logos:o,updateProjectSettings:M}=(0,F.u)("ApplicationInfoPage"),[g,E]=e.useState({menu:o.menu,auth:o.auth}),{settings:D}=(0,et.w1)(dt.s),{communityEdition:p,latestStrapiReleaseTag:i,nodeVersion:d,shouldUpdateStrapi:u,strapiVersion:C}=(0,L.s7)(),v=(0,F.p)(ss,async()=>(await t.e(8716).then(t.bind(t,38716))).AdminSeatInfoEE),{allowedActions:{canRead:j,canUpdate:I}}=(0,L.aU)(D?D["project-settings"]:{});(0,L.G0)();const A=W=>{W.preventDefault(),M({authLogo:g.auth.custom??null,menuLogo:g.menu.custom??null})},X=W=>G=>{G===null&&n("didClickResetLogo",{logo:W}),E(N=>({...N,[W]:{...N[W],custom:G}}))};if(e.useEffect(()=>{E({menu:o.menu,auth:o.auth})},[o]),!v)return null;const Y=g.auth.custom===o.auth.custom&&g.menu.custom===o.menu.custom;return(0,s.jsxs)(at._,{children:[(0,s.jsx)(L.K8,{name:a({id:"Settings.application.header",defaultMessage:"Application"})}),(0,s.jsx)(ft.G,{children:(0,s.jsxs)("form",{onSubmit:A,children:[(0,s.jsx)(Lt.a,{title:a({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:a({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:I&&(0,s.jsx)(K.Z,{disabled:Y,type:"submit",startIcon:(0,s.jsx)(Ft.c,{}),children:a({id:"global.save",defaultMessage:"Save"})})}),(0,s.jsx)(vt.S,{children:(0,s.jsxs)(y.C,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsxs)(y.C,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[(0,s.jsx)(m.O,{variant:"delta",as:"h3",children:a({id:"global.details",defaultMessage:"Details"})}),(0,s.jsxs)(ot.y,{gap:5,as:"dl",children:[(0,s.jsxs)($.C,{col:6,s:12,children:[(0,s.jsx)(m.O,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})}),(0,s.jsxs)(y.C,{gap:3,direction:"column",alignItems:"start",as:"dd",children:[(0,s.jsxs)(m.O,{children:["v",C]}),u&&(0,s.jsx)(it.c,{href:`https://github.com/strapi/strapi/releases/tag/${i}`,endIcon:(0,s.jsx)(lt.c,{}),children:a({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})})]})]}),(0,s.jsxs)($.C,{col:6,s:12,children:[(0,s.jsx)(m.O,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.edition-title",defaultMessage:"current plan"})}),(0,s.jsxs)(y.C,{gap:3,direction:"column",alignItems:"start",as:"dd",children:[(0,s.jsx)(m.O,{children:a({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:p})}),(0,s.jsx)(it.c,{href:"https://strapi.io/pricing-self-hosted",endIcon:(0,s.jsx)(lt.c,{}),children:a({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})})]})]}),(0,s.jsxs)($.C,{col:6,s:12,children:[(0,s.jsx)(m.O,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.node-version",defaultMessage:"node version"})}),(0,s.jsx)(m.O,{as:"dd",children:d})]}),(0,s.jsx)(v,{})]})]}),j&&(0,s.jsxs)(r.k,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[(0,s.jsx)(m.O,{variant:"delta",as:"h3",children:a({id:"Settings.application.customization",defaultMessage:"Customization"})}),(0,s.jsx)(m.O,{variant:"pi",textColor:"neutral600",children:a({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:_,size:H})}),(0,s.jsxs)(ot.y,{paddingTop:4,gap:4,children:[(0,s.jsx)($.C,{col:6,s:12,children:(0,s.jsx)(Et,{canUpdate:I,customLogo:g.menu.custom,defaultLogo:g.menu.default,hint:a({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:a({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:X("menu")})}),(0,s.jsx)($.C,{col:6,s:12,children:(0,s.jsx)(Et,{canUpdate:I,customLogo:g.auth.custom,defaultLogo:g.auth.default,hint:a({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:a({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:X("auth")})})]})]})]})})]})})]})},as=()=>{const{settingId:n}=(0,Q.W4)(),{settings:a}=(0,L.U7)(),{formatMessage:o}=(0,S.c)(),{isLoading:M,menu:g}=Vt(),E=(0,F.p)(Ht,async()=>(await t.e(244).then(t.bind(t,80244))).ROUTES_EE,{combine(i,d){return[...i,...d]},defaultValue:[]}),D=e.useMemo(()=>ht(E).map(({to:i,Component:d,exact:u})=>(0,F.d)(d,i,u)),[E]),p=Object.values(a).flatMap(i=>{const{links:d}=i;return d.map(u=>(0,F.d)(u.Component,u.to,u.exact||!1))});return M?(0,s.jsx)(L.Wm,{}):n?(0,s.jsxs)(at._,{sideNav:(0,s.jsx)(Qt,{menu:g}),children:[(0,s.jsx)(At.S,{title:o({id:"global.settings",defaultMessage:"Settings"})}),(0,s.jsxs)(Q.Wk,{children:[(0,s.jsx)(Q.kX,{path:"/settings/application-infos",component:ns,exact:!0}),D,p]})]}):(0,s.jsx)(Q.YJ,{to:"/settings/application-infos"})},ht=n=>n.filter((a,o,M)=>M.findIndex(g=>g.to===a.to)===o)}}]);
