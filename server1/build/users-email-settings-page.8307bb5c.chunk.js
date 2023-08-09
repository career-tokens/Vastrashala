"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[8418],{84210:(S,y,t)=>{t.r(y),t.d(y,{default:()=>oe});var e=t(67294),r=t(14087),x=t(185),T=t(53979),O=t(49066),a=t(57993),i=t(86896),g=t(88767),v=t(84419),n=t(99688),R=t(42866),j=t(24969),l=t(59946),m=t(11276),o=t(67819),d=t(61467),c=t(36856),f=t(29728),Z=t(63321),I=t(36773),U=t(41054),A=t(45697),u=t.n(A),P=t(87561);const Y=P.Ry().shape({options:P.Ry().shape({from:P.Ry().shape({name:P.Z_().required(a.I0.required),email:P.Z_().email(a.I0.email).required(a.I0.required)}).required(),response_email:P.Z_().email(a.I0.email),object:P.Z_().required(a.I0.required),message:P.Z_().required(a.I0.required)}).required(a.I0.required)}),$=({template:s,onToggle:p,onSubmit:E})=>{const{formatMessage:h}=(0,i.Z)();return e.createElement(R.P,{onClose:p,labelledBy:`${h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,n.OB)(s.display),defaultMessage:s.display})}`},e.createElement(j.x,null,e.createElement(Z.O,{label:`${h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,n.OB)(s.display),defaultMessage:s.display})}`},e.createElement(I.$,null,h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(I.$,{isCurrent:!0},h({id:(0,n.OB)(s.display),defaultMessage:s.display})))),e.createElement(U.J9,{onSubmit:E,initialValues:s,validateOnChange:!1,validationSchema:Y,enableReinitialize:!0},({errors:B,values:C,handleChange:b,isSubmitting:H})=>e.createElement(a.l0,null,e.createElement(l.f,null,e.createElement(m.r,{gap:5},e.createElement(o.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:b,value:C.options.from.name,error:B?.options?.from?.name,type:"text"})),e.createElement(o.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:b,value:C.options.from.email,error:B?.options?.from?.email,type:"text"})),e.createElement(o.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:b,value:C.options.response_email,error:B?.options?.response_email,type:"text"})),e.createElement(o.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:b,value:C.options.object,error:B?.options?.object,type:"text"})),e.createElement(o.P,{col:12,s:12},e.createElement(d.g,{label:h({id:(0,n.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:b,value:C.options.message,error:B?.options?.message&&h({id:B.options.message,defaultMessage:B.options.message})})))),e.createElement(c.m,{startActions:e.createElement(f.z,{onClick:p,variant:"tertiary"},"Cancel"),endActions:e.createElement(f.z,{loading:H,type:"submit"},"Finish")}))))};$.propTypes={template:u().shape({display:u().string,icon:u().string,options:u().shape({from:u().shape({name:u().string,email:u().string}),message:u().string,object:u().string,response_email:u().string})}).isRequired,onSubmit:u().func.isRequired,onToggle:u().func.isRequired};const w=$;var k=t(38939),q=t(8060),F=t(79031),M=t(37909),N=t(63237),D=t(75515),_=t(15234),z=t(52624),K=t(12028),ee=t(30815),G=t(4585),te=t(85018);const J=({canUpdate:s,onEditClick:p})=>{const{formatMessage:E}=(0,i.Z)();return e.createElement(k.i,{colCount:3,rowCount:3},e.createElement(q.h,null,e.createElement(F.Tr,null,e.createElement(M.Th,{width:"1%"},e.createElement(N.T,null,E({id:(0,n.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(M.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},E({id:(0,n.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(M.Th,{width:"1%"},e.createElement(N.T,null,E({id:(0,n.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(_.p,null,e.createElement(F.Tr,{...(0,a.X7)({fn:()=>p("reset_password")})},e.createElement(M.Td,null,e.createElement(z.J,null,e.createElement(ee.Z,{"aria-label":E({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(M.Td,null,e.createElement(D.Z,null,E({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(M.Td,{...a.UW},e.createElement(K.h,{onClick:()=>p("reset_password"),label:E({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:s&&e.createElement(G.Z,null)}))),e.createElement(F.Tr,{...(0,a.X7)({fn:()=>p("email_confirmation")})},e.createElement(M.Td,null,e.createElement(z.J,null,e.createElement(te.Z,{"aria-label":E({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(M.Td,null,e.createElement(D.Z,null,E({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(M.Td,{...a.UW},e.createElement(K.h,{onClick:()=>p("email_confirmation"),label:E({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:s&&e.createElement(G.Z,null)})))))};J.propTypes={canUpdate:u().bool.isRequired,onEditClick:u().func.isRequired};const ae=J,ne=async()=>{const{get:s}=(0,a.tg)(),{data:p}=await s("/users-permissions/email-templates");return p},le=s=>{const{put:p}=(0,a.tg)();return p("/users-permissions/email-templates",s)},se=()=>e.createElement(a.O4,{permissions:v._.readEmailTemplates},e.createElement(ie,null)),ie=()=>{const{formatMessage:s}=(0,i.Z)(),{trackUsage:p}=(0,a.rS)(),{notifyStatus:E}=(0,r.G)(),h=(0,a.lm)(),{lockApp:B,unlockApp:C}=(0,a.o1)(),b=(0,e.useRef)(p),H=(0,g.useQueryClient)();(0,a.go)();const[re,me]=(0,e.useState)(!1),[Q,de]=(0,e.useState)(null),{isLoading:ce,allowedActions:{canUpdate:ue}}=(0,a.ss)({update:v._.updateEmailTemplates}),{status:pe,data:X}=(0,g.useQuery)("email-templates",()=>ne(),{onSuccess(){E(s({id:(0,n.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ee=ce||pe!=="success",W=()=>{me(L=>!L)},ge=L=>{de(L),W()},V=(0,g.useMutation)(L=>le({"email-templates":L}),{async onSuccess(){await H.invalidateQueries("email-templates"),h({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),b.current("didEditEmailTemplates"),C(),W()},onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),C()},refetchActive:!0}),{isLoading:fe}=V,he=L=>{B(),b.current("willEditEmailTemplates");const ve={...X,[Q]:L};V.mutate(ve)};return Ee?e.createElement(x.o,{"aria-busy":"true"},e.createElement(a.SL,{name:s({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(T.T,{title:s({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.D,null,e.createElement(a.dO,null))):e.createElement(x.o,{"aria-busy":fe},e.createElement(a.SL,{name:s({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(T.T,{title:s({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.D,null,e.createElement(ae,{onEditClick:ge,canUpdate:ue}),re&&e.createElement(w,{template:X[Q],onToggle:W,onSubmit:he})))},oe=se},99688:(S,y,t)=>{t.d(y,{YX:()=>T,OB:()=>O.Z});var e=t(41609),r=t.n(e);const T=a=>Object.keys(a).reduce((i,g)=>{const v=a[g].controllers,n=Object.keys(v).reduce((R,j)=>(r()(v[j])||(R[j]=v[j]),R),{});return r()(n)||(i[g]={controllers:n}),i},{});var O=t(97961)},49066:(S,y,t)=>{t.d(y,{D:()=>x});var e=t(85893),r=t(41580);const x=({children:T})=>(0,e.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:T})},53979:(S,y,t)=>{t.d(y,{T:()=>n});var e=t(85893),r=t(67294),x=t(88972);const T=l=>{const m=(0,r.useRef)(null),[o,d]=(0,r.useState)(!0),c=([f])=>{d(f.isIntersecting)};return(0,r.useEffect)(()=>{const f=m.current,Z=new IntersectionObserver(c,l);return f&&Z.observe(m.current),()=>{f&&Z.disconnect()}},[m,l]),[m,o]};var O=t(79698);const a=(l,m)=>{const o=(0,O.W)(m);(0,r.useLayoutEffect)(()=>{const d=new ResizeObserver(o);return Array.isArray(l)?l.forEach(c=>{c.current&&d.observe(c.current)}):l.current&&d.observe(l.current),()=>{d.disconnect()}},[l,o])};var i=t(41580),g=t(11047),v=t(75515);const n=l=>{const m=(0,r.useRef)(null),[o,d]=(0,r.useState)(null),[c,f]=T({root:null,rootMargin:"0px",threshold:0});return a(c,()=>{c.current&&d(c.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{m.current&&d(m.current.getBoundingClientRect())},[m]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:o?.height},ref:c,children:f&&(0,e.jsx)(j,{ref:m,...l})}),!f&&(0,e.jsx)(j,{...l,sticky:!0,width:o?.width})]})};n.displayName="HeaderLayout";const R=(0,x.ZP)(i.x)`
  width: ${({width:l})=>l?`${l/16}rem`:void 0};
  z-index: ${({theme:l})=>l.zIndices[1]};
`,j=r.forwardRef(({navigationAction:l,primaryAction:m,secondaryAction:o,subtitle:d,title:c,sticky:f,width:Z,...I},U)=>{const A=typeof d=="string";return f?(0,e.jsx)(R,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:Z,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(g.k,{justifyContent:"space-between",children:[(0,e.jsxs)(g.k,{children:[l&&(0,e.jsx)(i.x,{paddingRight:3,children:l}),(0,e.jsxs)(i.x,{children:[(0,e.jsx)(v.Z,{variant:"beta",as:"h1",...I,children:c}),A?(0,e.jsx)(v.Z,{variant:"pi",textColor:"neutral600",children:d}):d]}),o?(0,e.jsx)(i.x,{paddingLeft:4,children:o}):null]}),(0,e.jsx)(g.k,{children:m?(0,e.jsx)(i.x,{paddingLeft:2,children:m}):void 0})]})}):(0,e.jsxs)(i.x,{ref:U,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:l?6:8,background:"neutral100","data-strapi-header":!0,children:[l?(0,e.jsx)(i.x,{paddingBottom:2,children:l}):null,(0,e.jsxs)(g.k,{justifyContent:"space-between",children:[(0,e.jsxs)(g.k,{minWidth:0,children:[(0,e.jsx)(v.Z,{as:"h1",variant:"alpha",...I,children:c}),o?(0,e.jsx)(i.x,{paddingLeft:4,children:o}):null]}),m]}),A?(0,e.jsx)(v.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:d}):d]})})},185:(S,y,t)=>{t.d(y,{o:()=>O});var e=t(85893),r=t(88972),x=t(41580);const T=(0,r.ZP)(x.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,O=({labelledBy:a="main-content-title",...i})=>(0,e.jsx)(T,{"aria-labelledby":a,as:"main",id:"main-content",tabIndex:-1,...i})}}]);
