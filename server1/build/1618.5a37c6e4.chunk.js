(self.webpackChunkserver=self.webpackChunkserver||[]).push([[1618],{79194:(x,m,e)=>{"use strict";e.d(m,{v:()=>n});var t=e(67294),r=e(86706);function n(d,u){const o=(0,r.oR)();(0,t.useEffect)(()=>{o.injectReducer(d,u)},[o,d,u])}},7761:(x,m,e)=>{"use strict";e.d(m,{pl:()=>c,aY:()=>P,q5:()=>s.q});var t=e(67294),r=e(57993),n=e(18172);const d={data:[],isLoading:!0},o=(w,R)=>(0,n.ZP)(w,M=>{switch(R.type){case"GET_DATA_SUCCEEDED":{M.data=R.data,M.isLoading=!1;break}case"GET_DATA_ERROR":{M.isLoading=!1;break}default:return M}}),c=({ssoEnabled:w})=>{const[R,M]=(0,t.useReducer)(o,d),E=(0,r.lm)(),{get:T}=(0,r.kY)();return(0,t.useEffect)(()=>{(async()=>{try{if(!w){M({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:C}=await T("/admin/providers");M({type:"GET_DATA_SUCCEEDED",data:C})}catch(C){console.error(C),M({type:"GET_DATA_ERROR"}),E({type:"warning",message:{id:"notification.error"}})}})()},[T,w,E]),R};var l=e(14293),a=e.n(l),p=e(86896),f=e(16550),s=e(71926);const i="strapi-notification-seat-limit",v="https://cloud.strapi.io/profile/billing",O="https://strapi.io/billing/request-seats",P=()=>{const{formatMessage:w}=(0,p.Z)();let{license:R,isError:M,isLoading:E}=(0,s.q)();const T=(0,r.lm)(),{pathname:g}=(0,f.TH)(),{enforcementUserCount:C,permittedSeats:L,licenseLimitStatus:I,isHostedOnStrapiCloud:$}=R;(0,t.useEffect)(()=>{if(M||E)return;const j=!a()(L)&&!window.sessionStorage.getItem(`${i}-${g}`)&&(I==="AT_LIMIT"||I==="OVER_LIMIT");let W;I==="OVER_LIMIT"?W="warning":I==="AT_LIMIT"&&(W="softWarning"),j&&T({type:W,message:w({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:I}),title:w({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:I,enforcementUserCount:C,permittedSeats:L}),link:{url:$?v:O,label:w({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:$})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${g}`,!0)}})},[T,R,g,w,E,L,I,C,$,M])}},71926:(x,m,e)=>{"use strict";e.d(m,{q:()=>d});var t=e(67294),r=e(57993),n=e(88767);function d({enabled:u}={enabled:!0}){const{get:o}=(0,r.kY)(),{data:y,isError:c,isLoading:l}=(0,n.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:f}}=await o("/admin/license-limit-information");return f},{enabled:u}),a=y??{},p=t.useCallback(f=>(a?.features??[]).find(i=>i.name===f)?.options??{},[a?.features]);return{license:a,getFeature:p,isError:c,isLoading:l}}},11984:(x,m,e)=>{"use strict";e.d(m,{CI:()=>d,FP:()=>o,Js:()=>c,_V:()=>n,fC:()=>r,rI:()=>y,xn:()=>u});var t=e(86978);function r({status:l,data:a}){return{type:t.qZ,payload:{status:l,workflow:a}}}function n(l){return{type:t.x4,payload:{stageId:l}}}function d(l={}){return{type:t.Ot,payload:l}}function u(l,a){return{type:t.Nj,payload:{stageId:l,...a}}}function o(l,a){return{type:t.$k,payload:{newIndex:a,oldIndex:l}}}function y(l){return{type:t.VS,payload:l}}function c(){return{type:t.gu}}},43390:(x,m,e)=>{"use strict";e.d(m,{eJ:()=>E,lx:()=>R,h4:()=>T,fC:()=>M});var t=e(67294),r=e(17034),n=e(185),d=e(49066),u=e(53979),o=e(57993),y=e(67109),c=e(86896),l=e(52713),a=e(86978),p=e(11047),f=e(75515),s=e(12645),i=e(45697),v=e.n(i),O=e(88972);const A=(0,O.ZP)(p.k)`
  svg path {
    fill: ${({theme:g})=>g.colors.neutral600};
  }
`;function P({name:g}){return t.createElement(p.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,o.Q1)(300)},t.createElement(A,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(s.Z,{width:`${8/16}rem`})),t.createElement(f.Z,{fontWeight:"bold"},g))}P.propTypes={name:v().string.isRequired};function w({type:g,item:C}){switch(g){case a.uL.STAGE:return t.createElement(P,{...C});default:return null}}function R(){return t.createElement(l.r,{renderItem:w})}function M({children:g}){return t.createElement(r.A,null,t.createElement(n.o,{tabIndex:-1},t.createElement(d.D,null,g)))}function E({href:g}){const{formatMessage:C}=(0,c.Z)();return t.createElement(o.rU,{startIcon:t.createElement(y.Z,null),to:g},C({id:"global.back",defaultMessage:"Back"}))}function T({title:g,subtitle:C,navigationAction:L,primaryAction:I}){return t.createElement(t.Fragment,null,t.createElement(o.SL,{name:g}),t.createElement(u.T,{navigationAction:L,primaryAction:I,title:g,subtitle:C}))}},38705:(x,m,e)=>{"use strict";e.d(m,{uT:()=>w,fC:()=>E,Dx:()=>P});var t=e(67294),r=e(75515),n=e(11047),d=e(42866),u=e(59946),o=e(41580),y=e(12028),c=e(80994),l=e(70968),a=e(45697),p=e.n(a),f=e(86896),s=e(88972);const i=e.p+"0cd5f8915b265d5b1856.png",v="limits-title",O="https://strapi.io/pricing-cloud",A="https://strapi.io/contact-sales";function P({children:T}){return t.createElement(r.Z,{variant:"alpha",id:v},T)}P.propTypes={children:p().node.isRequired};function w({children:T}){return t.createElement(r.Z,{variant:"omega"},T)}w.propTypes={children:p().node.isRequired};function R(){const{formatMessage:T}=(0,f.Z)();return t.createElement(n.k,{gap:2,paddingTop:4},t.createElement(c.Q,{variant:"default",isExternal:!0,href:O},T({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(c.Q,{variant:"tertiary",isExternal:!0,href:A},T({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const M=s.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:T})=>`-${T.spaces[7]}`};
  margin-top: ${({theme:T})=>`-${T.spaces[7]}`};
  width: 360px;
`;function E({children:T,isOpen:g,onClose:C}){const{formatMessage:L}=(0,f.Z)();return g?t.createElement(d.P,{labelledBy:v},t.createElement(u.f,null,t.createElement(n.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(n.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},T,t.createElement(R,null)),t.createElement(n.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(M,{src:i,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(o.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(y.h,{icon:t.createElement(l.Z,null),"aria-label":L({id:"global.close",defaultMessage:"Close"}),onClick:C})))))):null}E.defaultProps={isOpen:!1},E.propTypes={children:p().node.isRequired,isOpen:p().bool,onClose:p().func.isRequired}},68997:(x,m,e)=>{"use strict";e.d(m,{U:()=>b});var t=e(67294),r=e(41580),n=e(11047),d=e(57993),u=e(45697),o=e.n(u),y=e(86896),c=e(86706),l=e(88972),a=e(11984),p=e(75515),f=e(99782);const s=(0,l.ZP)(f.Z)`
  > circle {
    fill: ${({theme:h})=>h.colors.neutral150};
  }
  > path {
    fill: ${({theme:h})=>h.colors.neutral600};
  }
`,i=(0,l.ZP)(r.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:h})=>h.spaces[6]};
    width: ${({theme:h})=>h.spaces[6]};

    > path {
      fill: ${({theme:h})=>h.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:h})=>h.colors.primary600} !important;
    ${p.Z} {
      color: ${({theme:h})=>h.colors.primary600} !important;
    }

    ${s} {
      > circle {
        fill: ${({theme:h})=>h.colors.primary600};
      }
      > path {
        fill: ${({theme:h})=>h.colors.neutral100};
      }
    }
  }

  &:active {
    ${p.Z} {
      color: ${({theme:h})=>h.colors.primary600};
    }

    ${s} {
      > circle {
        fill: ${({theme:h})=>h.colors.primary600};
      }
      > path {
        fill: ${({theme:h})=>h.colors.neutral100};
      }
    }
  }
`;function v({children:h,...B}){return t.createElement(i,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...B},t.createElement(n.k,{gap:2},t.createElement(s,{"aria-hidden":!0}),t.createElement(p.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},h)))}v.propTypes={children:o().node.isRequired};var O=e(63237),A=e(48734),P=e(74756),w=e(12028),R=e(63081),M=e(11276),E=e(67819),T=e(16364),g=e(70642),C=e(20022),L=e(12814),I=e(41054),$=e(61080),j=e(21440),W=e(21892),F=e(86978),N=e(5318);const H=(0,N.s)();function S(){return t.createElement(r.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function k({id:h,index:B,canDelete:K,canReorder:ee,canUpdate:V,isOpen:te=!1,stagesCount:z}){const Y=D=>`${D+1} of ${z}`,Q=D=>{J(U({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:Z.value,position:Y(D)}))},ie=D=>{J(U({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:Z.value,position:Y(D)}))},de=()=>{J(U({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:Z.value}))},ce=(D,X)=>{J(U({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:Z.value,position:Y(D)})),q((0,a.FP)(X,D))},[ne,J]=t.useState(null),{formatMessage:U}=(0,y.Z)(),{trackUsage:ue}=(0,d.rS)(),q=(0,c.I0)(),[ae,me]=t.useState(te),[Z,re,ge]=(0,I.U$)(`stages.${B}.name`),[_,oe,pe]=(0,I.U$)(`stages.${B}.color`),[{handlerId:fe,isDragging:ve,handleKeyDown:he},Ee,ye,Te,se]=(0,j.Y9)(ee,{index:B,item:{name:Z.value},onGrabItem:Q,onDropItem:ie,onMoveItem:ce,onCancel:de,type:F.uL.STAGE}),Se=(0,W.FE)(Ee,ye),we=H.map(({hex:D,name:X})=>({value:D,label:U({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:X}),color:D}));t.useEffect(()=>{se((0,$.rX)(),{captureDraggingState:!1})},[se,B]);const{themeColorName:Me}=(0,N.k)(_.value)??{};return t.createElement(r.x,{ref:Se},ne&&t.createElement(O.T,{"aria-live":"assertive"},ne),ve?t.createElement(S,null):t.createElement(A.U,{size:"S",variant:"primary",onToggle:()=>{me(!ae),ae||ue("willEditStage")},expanded:ae,shadow:"tableShadow",error:re.error??oe?.error??!1,hasErrorMessage:!1},t.createElement(P.B,{title:Z.value,togglePosition:"left",action:(K||V)&&t.createElement(n.k,null,K&&t.createElement(w.h,{background:"transparent",icon:t.createElement(C.Z,null),label:U({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>q((0,a._V)(h))}),V&&t.createElement(w.h,{background:"transparent",forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":fe,ref:Te,label:U({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:D=>D.stopPropagation(),onKeyDown:he},t.createElement(L.Z,null)))}),t.createElement(R.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(M.r,{gap:4},t.createElement(E.P,{col:6},t.createElement(T.o,{...Z,id:Z.name,disabled:!V,label:U({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:re.error??!1,onChange:D=>{ge.setValue(D.target.value),q((0,a.xn)(h,{name:D.target.value}))},required:!0})),t.createElement(E.P,{col:6},t.createElement(g.q4,{disabled:!V,error:oe?.error??!1,id:_.name,required:!0,label:U({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:D=>{pe.setValue(D),q((0,a.xn)(h,{color:D}))},value:_.value.toUpperCase(),startIcon:t.createElement(n.k,{as:"span",height:2,background:_.value,borderColor:Me==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},we.map(({value:D,label:X,color:le})=>{const{themeColorName:xe}=(0,N.k)(le);return t.createElement(g.ag,{value:D,key:D,startIcon:t.createElement(n.k,{as:"span",height:2,background:le,borderColor:xe==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},X)})))))))}k.propTypes=o().shape({id:o().number.isRequired,color:o().string.isRequired,canDelete:o().bool.isRequired,canReorder:o().bool.isRequired,canUpdate:o().bool.isRequired,stagesCount:o().number.isRequired}).isRequired;const G=(0,l.ZP)(r.x)`
  transform: translateX(-50%);
`;function b({canDelete:h,canUpdate:B,stages:K}){const{formatMessage:ee}=(0,y.Z)(),V=(0,c.I0)(),{trackUsage:te}=(0,d.rS)();return t.createElement(n.k,{direction:"column",gap:6,width:"100%"},t.createElement(r.x,{position:"relative",spacing:4,width:"100%"},t.createElement(G,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),t.createElement(n.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},K.map((z,Y)=>{const Q=z?.id??z.__temp_key__;return t.createElement(r.x,{key:`stage-${Q}`,as:"li"},t.createElement(k,{id:Q,index:Y,isOpen:!z.id,canDelete:K.length>1&&h,canReorder:K.length>1,canUpdate:B,stagesCount:K.length}))}))),B&&t.createElement(v,{type:"button",onClick:()=>{V((0,a.CI)({name:""})),te("willCreateStage")}},ee({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})))}b.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},b.propTypes={canDelete:o().bool,canUpdate:o().bool,stages:o().arrayOf(o().shape({id:o().number,__temp_key__:o().number,name:o().string.isRequired}))}},85230:(x,m,e)=>{"use strict";e.d(m,{Y:()=>A});var t=e(67294),r=e(67730),n=e(75515),d=e(11276),u=e(67819),o=e(16364),y=e(57993),c=e(41054),l=e(45697),a=e.n(l),p=e(86896),f=e(86706),s=e(88972),i=e(11984);const v=(0,s.ZP)(r.ML)`
  padding-left: ${({theme:w})=>w.spaces[7]};
`,O=(0,s.ZP)(n.Z)`
  font-style: italic;
`;function A({canUpdate:w,contentTypes:{collectionTypes:R,singleTypes:M},currentWorkflow:E,workflows:T}){const{formatMessage:g,locale:C}=(0,p.Z)(),L=(0,f.I0)(),[I,$,j]=(0,c.U$)("name"),[W,F,N]=(0,c.U$)("contentTypes"),H=(0,y.Xe)(C,{sensitivity:"base"});return t.createElement(d.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow"},t.createElement(u.P,{col:6},t.createElement(o.o,{...I,id:I.name,disabled:!w,label:g({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:$.error??!1,onChange:S=>{L((0,i.rI)({name:S.target.value})),j.setValue(S.target.value)},required:!0})),t.createElement(u.P,{col:6},t.createElement(r.NU,{...W,customizeContent:S=>g({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:S.length}),disabled:!w,error:F.error??!1,id:W.name,label:g({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:S=>{L((0,i.rI)({contentTypes:S})),N.setValue(S)},placeholder:g({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"})},[...R.length>0?[{label:g({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:R.sort((S,k)=>H.compare(S.info.displayName,k.info.displayName)).map(S=>({label:S.info.displayName,value:S.uid}))}]:[],...M.length>0?[{label:g({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:M.map(S=>({label:S.info.displayName,value:S.uid}))}]:[]].map(S=>"children"in S?t.createElement(r.Ab,{key:S.label,label:S.label,values:S.children.map(k=>k.value.toString())},S.children.map(k=>{const{name:G}=T.find(b=>(E&&b.id!==E.id||!E)&&b.contentTypes.includes(k.value))??{};return t.createElement(v,{key:k.value,value:k.value},g({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:k.label,name:G,em:(...b)=>t.createElement(n.Z,{as:"em",fontWeight:"bold"},b),i:(...b)=>t.createElement(O,null,b)}))})):t.createElement(r.ML,{key:S.value,value:S.value},S.label)))))}const P=a().shape({uid:a().string.isRequired,info:a().shape({displayName:a().string.isRequired}).isRequired});A.defaultProps={canUpdate:!0,currentWorkflow:void 0},A.propTypes={canUpdate:a().bool,contentTypes:a().shape({collectionTypes:a().arrayOf(P).isRequired,singleTypes:a().arrayOf(P).isRequired}).isRequired,currentWorkflow:a().object,workflows:a().array.isRequired}},86978:(x,m,e)=>{"use strict";e.d(m,{$k:()=>c,Ef:()=>s,FT:()=>p,Nj:()=>y,Ot:()=>o,VS:()=>l,_X:()=>i,gu:()=>n,lv:()=>a,qZ:()=>d,sN:()=>r,uL:()=>f,x4:()=>u});var t=e(42675);const r="settings_review-workflows",n="Settings/Review_Workflows/RESET_WORKFLOW",d="Settings/Review_Workflows/SET_WORKFLOW",u="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",o="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",y="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",c="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",l="Settings/Review_Workflows/WORKFLOW_UPDATE",a={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},p=t.W.colors.primary600,f={STAGE:"stage"},s="numberOfWorkflows",i="stagesPerWorkflow"},52258:(x,m,e)=>{"use strict";e.d(m,{n:()=>n});var t=e(57993),r=e(88767);function n(d={}){const{get:u}=(0,t.kY)(),{id:o="",...y}=d,c={populate:"stages"},{data:l,isLoading:a,status:p,refetch:f}=(0,r.useQuery)(["review-workflows","workflows",o],async()=>(await u(`/admin/review-workflows/workflows/${o}`,{params:{...c,...y}})).data);let s=[];return o&&l?.data?s=[l.data]:Array.isArray(l?.data)&&(s=l.data),{meta:l?.meta??{},workflows:s,isLoading:a,status:p,refetch:f}}},3848:(x,m,e)=>{"use strict";e.d(m,{E:()=>u,I:()=>o});var t=e(18172),r=e(18446),n=e.n(r),d=e(86978);const u={status:"loading",serverState:{workflow:null},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[]},isDirty:!1,hasDeletedServerStages:!1}}};function o(c=u,l){return(0,t.Uy)(c,a=>{const{payload:p}=l;switch(l.type){case d.qZ:{const{status:f,workflow:s}=p;a.status=f,s&&(a.serverState.workflow=s,a.clientState.currentWorkflow.data={...s,stages:s.stages.map(i=>({...i,color:i?.color??d.FT}))}),a.clientState.currentWorkflow.hasDeletedServerStages=!1;break}case d.gu:{a.clientState.currentWorkflow.data=u.clientState.currentWorkflow.data,a.serverState=u.serverState;break}case d.x4:{const{stageId:f}=p,{currentWorkflow:s}=c.clientState;a.clientState.currentWorkflow.data.stages=s.data.stages.filter(i=>(i?.id??i.__temp_key__)!==f),s.hasDeletedServerStages||(a.clientState.currentWorkflow.hasDeletedServerStages=!!(c.serverState.workflow?.stages??[]).find(i=>i.id===f));break}case d.Ot:{const{currentWorkflow:f}=c.clientState;f.data||(a.clientState.currentWorkflow.data={stages:[]});const s=y(a.clientState.currentWorkflow.data.stages);a.clientState.currentWorkflow.data.stages.push({...p,color:p?.color??d.FT,__temp_key__:s});break}case d.Nj:{const{currentWorkflow:f}=c.clientState,{stageId:s,...i}=p;a.clientState.currentWorkflow.data.stages=f.data.stages.map(v=>(v.id??v.__temp_key__)===s?{...v,...i}:v);break}case d.$k:{const{currentWorkflow:{data:{stages:f}}}=c.clientState,{newIndex:s,oldIndex:i}=p;if(s>=0&&s<f.length){const v=f[i];let O=[...f];O.splice(i,1),O.splice(s,0,v),a.clientState.currentWorkflow.data.stages=O}break}case d.VS:{a.clientState.currentWorkflow.data={...a.clientState.currentWorkflow.data,...p};break}default:break}c.clientState.currentWorkflow.data&&a.serverState.workflow?a.clientState.currentWorkflow.isDirty=!n()((0,t.Vk)(a.clientState.currentWorkflow).data,a.serverState.workflow):a.clientState.currentWorkflow.isDirty=!0})}const y=(c=[])=>{const l=c.map(a=>a.id??a.__temp_key__);return Math.max(...l,-1)+1}},5318:(x,m,e)=>{"use strict";e.d(m,{k:()=>n,s:()=>d});var t=e(42675),r=e(86978);function n(u){if(!u)return null;const y=Object.entries(t.W.colors).filter(([,c])=>c.toUpperCase()===u.toUpperCase()).reduce((c,[l])=>(r.lv?.[l]&&(c=l),c),null);return y?{themeColorName:y,name:r.lv[y]}:null}function d(){return Object.entries(r.lv).map(([u,o])=>({hex:t.W.colors[u].toUpperCase(),name:o}))}},66578:(x,m,e)=>{"use strict";e.d(m,{V:()=>d});var t=e(36968),r=e.n(t),n=e(87561);async function d({values:u,formatMessage:o}){const y=n.Ry({contentTypes:n.IX().of(n.Z_()),name:n.Z_().max(255,o({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:n.IX().of(n.Ry().shape({name:n.Z_().required(o({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,o({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",o({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(c){const{options:{context:l}}=this;return l.stages.filter(a=>a.name===c).length===1}),color:n.Z_().required(o({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)})).min(1)});try{return await y.validate(u,{abortEarly:!1,context:u}),!0}catch(c){let l={};return c instanceof n.p8&&c.inner.forEach(a=>{r()(l,a.path,a.message)}),l}}},51584:(x,m,e)=>{var t=e(44239),r=e(37005),n="[object Boolean]";function d(u){return u===!0||u===!1||r(u)&&t(u)==n}x.exports=d},7654:(x,m,e)=>{var t=e(81763);function r(n){return t(n)&&n!=+n}x.exports=r},81763:(x,m,e)=>{var t=e(44239),r=e(37005),n="[object Number]";function d(u){return typeof u=="number"||r(u)&&t(u)==n}x.exports=d},48734:(x,m,e)=>{"use strict";e.d(m,{U:()=>f,y:()=>a});var t=e(85893),r=e(67294),n=e(88972),d=e(13819),u=e(2504),o=e(75515),y=e(11047),c=e(41580);const l=({theme:s,expanded:i,variant:v,disabled:O,error:A})=>A?`1px solid ${s.colors.danger600} !important`:O?`1px solid ${s.colors.neutral150}`:i?`1px solid ${s.colors.primary600}`:v==="primary"?`1px solid ${s.colors.neutral0}`:`1px solid ${s.colors.neutral100}`,a=(0,n.ZP)(o.Z)``,p=(0,n.ZP)(c.x)`
  border: ${l};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:s})=>s.colors.primary600};

    ${a} {
      color: ${({theme:s,expanded:i})=>i?void 0:s.colors.primary700};
    }

    ${o.Z} {
      color: ${({theme:s,expanded:i})=>i?void 0:s.colors.primary600};
    }

    & > ${y.k} {
      background: ${({theme:s})=>s.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:s})=>s.colors.primary200};
    }
  }
`,f=({children:s,disabled:i=!1,error:v,expanded:O=!1,hasErrorMessage:A=!0,id:P,onToggle:w,toggle:R,size:M="M",variant:E="primary",shadow:T})=>{const g=(0,u.M)(P),C=r.useMemo(()=>({expanded:O,onToggle:w,toggle:R,id:g,size:M,variant:E,disabled:i}),[i,O,g,w,M,R,E]);return(0,t.jsxs)(d.S.Provider,{value:C,children:[(0,t.jsx)(p,{"data-strapi-expanded":O,disabled:i,"aria-disabled":i,expanded:O,hasRadius:!0,variant:E,error:v,shadow:T,children:s}),v&&A&&(0,t.jsx)(c.x,{paddingTop:1,children:(0,t.jsx)(o.Z,{variant:"pi",textColor:"danger600",children:v})})]})}},63081:(x,m,e)=>{"use strict";e.d(m,{v:()=>d});var t=e(85893),r=e(13819),n=e(41580);const d=({children:u,...o})=>{const{expanded:y,id:c}=(0,r.A)();if(!y)return null;const l=`accordion-content-${c}`,a=`accordion-label-${c}`,p=`accordion-desc-${c}`;return(0,t.jsx)(n.x,{role:"region",id:l,"aria-labelledby":a,"aria-describedby":p,...o,children:u})}},13819:(x,m,e)=>{"use strict";e.d(m,{A:()=>n,S:()=>r});var t=e(67294);const r=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,t.useContext)(r)},74756:(x,m,e)=>{"use strict";e.d(m,{B:()=>s});var t=e(85893),r=e(12645),n=e(88972),d=e(48734),u=e(13819);const o=({expanded:i,disabled:v,variant:O})=>{let A="neutral100";return i?A="primary100":v?A="neutral150":O==="primary"&&(A="neutral0"),A};var y=e(39785),c=e(52624),l=e(11047),a=e(75515);const p=(0,n.ZP)(y.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:i,expanded:v})=>v?i.colors.primary600:i.colors.neutral500};
    }
  }
`,f=(0,n.ZP)(l.k)`
  min-height: ${({theme:i,size:v})=>i.sizes.accordions[v]};
  border-radius: ${({theme:i,expanded:v})=>v?`${i.borderRadius} ${i.borderRadius} 0 0`:i.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:i})=>i.colors.primary600};
      }
    }
  }
`,s=({title:i,description:v,as:O="span",togglePosition:A="right",action:P,...w})=>{const{onToggle:R,toggle:M,expanded:E,id:T,size:g,variant:C,disabled:L}=(0,u.A)(),I=`accordion-content-${T}`,$=`accordion-label-${T}`,j=`accordion-desc-${T}`,W=g==="M"?6:4,F=g==="M"?W:W-2,N=o({expanded:E,disabled:L,variant:C}),H={as:O,fontWeight:g==="S"?"bold":void 0,id:$,textColor:E?"primary600":"neutral700",ellipsis:!0,variant:g==="M"?"delta":void 0},S=E?"primary600":"neutral600",k=E?"primary200":"neutral200",G=g==="M"?`${32/16}rem`:`${24/16}rem`,b=()=>{L||(M&&!R?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),M()):R&&R())},h=(0,t.jsx)(l.k,{justifyContent:"center",borderRadius:"50%",height:G,width:G,transform:E?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:k,cursor:L?"not-allowed":"pointer",onClick:b,shrink:0,children:(0,t.jsx)(c.J,{as:r.Z,width:g==="M"?`${11/16}rem`:`${8/16}rem`,color:E?"primary600":"neutral600"})});return(0,t.jsx)(f,{paddingBottom:F,paddingLeft:W,paddingRight:W,paddingTop:F,background:N,expanded:E,size:g,justifyContent:"space-between",cursor:L?"not-allowed":"",children:(0,t.jsxs)(l.k,{gap:3,flex:1,maxWidth:"100%",children:[A==="left"&&h,(0,t.jsx)(p,{onClick:b,"aria-disabled":L,"aria-expanded":E,"aria-controls":I,"aria-labelledby":$,"data-strapi-accordion-toggle":!0,expanded:E,type:"button",flex:1,minWidth:0,...w,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.y,{...H,children:i}),v&&(0,t.jsx)(a.Z,{as:"p",id:j,textColor:S,children:v})]})}),A==="right"&&(0,t.jsxs)(l.k,{gap:3,children:[h,P]}),A==="left"&&P]})})}},67109:(x,m,e)=>{"use strict";e.d(m,{Z:()=>n});var t=e(85893);const r=d=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=r},12814:(x,m,e)=>{"use strict";e.d(m,{Z:()=>n});var t=e(85893);const r=d=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,t.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),n=r},99782:(x,m,e)=>{"use strict";e.d(m,{Z:()=>n});var t=e(85893);const r=d=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,t.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,t.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),n=r}}]);
