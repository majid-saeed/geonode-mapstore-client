(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8598],{34990:(e,t,n)=>{"use strict";n.d(t,{D7:()=>a,mN:()=>l,vb:()=>s,KT:()=>f,QK:()=>d,cc:()=>p,XH:()=>E,lX:()=>m,tP:()=>y,Dq:()=>O,LE:()=>v,SW:()=>T,si:()=>g,i2:()=>S,IY:()=>h,Zf:()=>b,ij:()=>R,Hb:()=>I,Mk:()=>D,c:()=>_,NZ:()=>C,Cx:()=>G,wb:()=>A,km:()=>w,un:()=>M,Ro:()=>P,jr:()=>Y,ZY:()=>N,EQ:()=>j,IH:()=>k,rp:()=>L,D_:()=>B,zJ:()=>Z,wJ:()=>V,OS:()=>U,YP:()=>x,Ct:()=>H,Od:()=>W,y6:()=>z,g5:()=>Q,_e:()=>F,DF:()=>$,GD:()=>q,K0:()=>K,kB:()=>X,Xn:()=>J,G5:()=>ee,Vx:()=>te,RZ:()=>ne,pB:()=>re,$A:()=>oe,m7:()=>ie,YM:()=>ce,o2:()=>ue,ql:()=>ae,c0:()=>le,nL:()=>se,Fu:()=>fe});var r=n(37153),o=n.n(r),i=n(22138),c=n.n(i),u=n(47394),a="GEOSTORY:ADD",l="GEOSTORY:ADD_RESOURCE",s="GEOSTORY:CHANGE_MODE",f="GEOSTORY:CLEAR_SAVE_ERROR",d="GEOSTORY:EDIT_RESOURCE",p="GEOSTORY:EDIT_WEBPAGE",E="GEOSTORY:LOAD_GEOSTORY",m="GEOSTORY:LOADING_GEOSTORY",y="GEOSTORY:MOVE",O="GEOSTORY:REMOVE",v="GEOSTORY:SAVE_STORY",T="GEOSTORY:SAVE_ERROR",g="GEOSTORY:STORY_SAVED",S="GEOSTORY:SELECT_CARD",h="GEOSTORY:SET_CONTROL",b="GEOSTORY:SET_RESOURCE",R="GEOSTORY:SET_CURRENT_STORY",I="GEOSTORY:SET_WEBPAGE_URL",D="GEOSTORY:TOGGLE_CARD_PREVIEW",_="GEOSTORY:TOGGLE_SETTINGS_PANEL",C="GEOSTORY:TOGGLE_SETTING",G="GEOSTORY:TOGGLE_CONTENT_FOCUS",A="GEOSTORY:UPDATE",w="GEOSTORY:UPDATE_SETTING",M="GEOSTORY:UPDATE_CURRENT_PAGE",P="GEOSTORY:REMOVE_RESOURCE",Y="GEOSTORY:SET_PENDING_CHANGES",N="GEOSTORY:SET_UPDATE_URL_SCROLL",j="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",k=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return{type:a,id:n&&n.id||c()(),path:e,position:t,element:o()(n)&&(0,u.nq)(n,r)||n}},L=function(e,t,n){return{type:l,id:e,mediaType:t,data:n}},B=function(e){return{type:s,mode:e?u.nl.EDIT:u.nl.VIEW}},Z=function(e,t,n){return{type:d,id:e,mediaType:t,data:n}},V=function(e,t){return{type:E,id:e,options:t}},U=function(e){return{type:"GEOSTORY:GEOSTORY_LOADED",id:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading";return{type:m,value:e,name:t}},H=function(e){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:e}},W=function(e){return{type:O,path:e}},z=function(e){return{type:T,error:e}},Q=function(e,t){return{type:h,control:e,value:t}},F=function(e){return{type:S,card:e}},$=function(e){return{type:b,resource:e}},q=function(e){return{type:g,id:e}},K=function(e){return{type:R,story:e}},X=function(){return{type:D}},J=function(e){return{type:C,option:e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:_,withSave:e}},te=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace";return{type:A,path:e,element:t,mode:n}},ne=function(e){var t=e.sectionId,n=e.columnId;return{type:M,sectionId:t,columnId:n}},re=function(e,t,n){return{type:y,source:e,target:t,position:n}},oe=function(e,t,n,r,o){return{type:G,status:e,target:t,selector:n,hideContent:r,path:o}},ie=function(e,t){return{type:w,prop:e,value:t}},ce=function(e){return{type:I,src:e}},ue=function(e){var t=e.path,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY";return{type:p,path:t,owner:n}},ae=function(e,t){return{type:P,id:e,mediaType:t}},le=function(e){return{type:Y,value:e}},se=function(e){return{type:N,value:e}},fe=function(e){return{type:j,mediaEditorSettings:e}}},82385:(e,t,n)=>{"use strict";n.d(t,{nr:()=>r,B8:()=>o,LE:()=>i,$Z:()=>c,Cp:()=>u});var r="MAP_EDITOR:SHOW",o="MAP_EDITOR:HIDE",i="MAP_EDITOR:SAVE",c=function(e,t){return{type:r,owner:e,map:t}},u=function(e){return{type:o,owner:e}}},93848:(e,t,n)=>{"use strict";n.d(t,{Ai:()=>c,AQ:()=>u,Gl:()=>a,wd:()=>l,V9:()=>s,ih:()=>f,B8:()=>d,ww:()=>p,HP:()=>E,ri:()=>m,gd:()=>y,nr:()=>O,ty:()=>v,GZ:()=>T,O6:()=>g,Vt:()=>S,Ug:()=>h,Ke:()=>b,Cp:()=>R,pW:()=>I,Gr:()=>D,gG:()=>_,oo:()=>C,Gh:()=>G,$G:()=>A,I5:()=>w,d8:()=>M,y5:()=>P,Az:()=>Y,$Z:()=>N,Ql:()=>j,Ul:()=>k,TU:()=>L,E0:()=>B,Yt:()=>Z});var r=n(33716),o=n.n(r),i=n(27693),c="MEDIA_EDITOR:ADDING_MEDIA",u="MEDIA_EDITOR:CHOOSE_MEDIA",a="MEDIA_EDITOR:EDITING_MEDIA",l="GEOSTORY:EDIT_MEDIA",s="MEDIA_EDITOR:LOAD_MEDIA",f="MEDIA_EDITOR:LOAD_MEDIA_SUCCESS",d="MEDIA_EDITOR:HIDE",p="MEDIA_EDITOR:SAVE_MEDIA",E="MEDIA_EDITOR:SET_MEDIA_TYPE",m="MEDIA_EDITOR:SET_MEDIA_SERVICE",y="MEDIA_EDITOR:SELECT_ITEM",O="MEDIA_EDITOR:SHOW",v="MEDIA_EDITOR:UPDATE_ITEM",T="MEDIA_EDITOR:IMPORT_IN_LOCAL",g="MEDIA_EDITOR:REMOVE_MEDIA",S="MEDIA_EDITOR:LOADING_SELECTED_MEDIA",h="MEDIA_EDITOR:LOADING_MEDIA_LIST",b=function(e){return{type:u,resource:e}},R=function(){return{type:d}},I=function(e,t,n){return{type:s,params:e,mediaType:t,sourceId:n}},D=function(e){var t=e.mediaType,n=e.sourceId,r=e.params,o=e.resultData;return{type:f,mediaType:t,sourceId:n,params:r,resultData:o}},_=function(e){var t=e.type,n=e.source,r=e.data;return{type:p,mediaType:t,source:n,data:r}},C=function(e){return{type:"MEDIA_EDITOR:SAVE_MEDIA_SUCCESS",mediaType:e.mediaType,source:e.source,data:e.data,id:e.id}},G=function(e){return{type:y,id:e}},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"merge";return{type:v,item:e,mode:t}},w=function(e){return{type:c,adding:e}},M=function(e){return{type:m,id:o()(e)?e.value:e}},P=function(e){return{type:E,mediaType:e}},Y=function(e){return{type:a,editing:e}},N=function(e,t){return{type:O,owner:e,settings:t}},j=function(e){var t=e.path,n=e.owner;return{type:l,path:t,owner:void 0===n?"geostory":n}},k=function(e){var t=e.resource,n=e.sourceType,r=void 0===n?i.r.GEOSTORY:n,o=e.owner;return{type:T,resource:t,sourceType:r,owner:void 0===o?"geostory":o}},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"geostory";return{type:g,mediaType:e,owner:t}},B=function(e){return{type:S,loading:e}},Z=function(){return{type:h}}},52826:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(21413),o=n.n(r),i=n(85967),c=n(32425),u=n(86079),a=n(23885),l=n(47394),s=n(5346);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=(0,u.Z)((function(e){var t=e.src,n=e.width,u=e.height,l=e.resolution,f=e.thumbnail,p=e.controls,m=e.play,y=e.onPlay,O=void 0===y?function(){}:y,v=e.onStart,T=void 0===v?function(){}:v,g=e.fit,S=e.loop,h=e.volume,b=void 0===h?1:h,R=e.muted,I=m,D=E((0,r.useState)(I),2),_=D[0],C=D[1],G=E((0,r.useState)(),2),A=G[0],w=G[1],M=E((0,r.useState)(m),2),P=M[0],Y=M[1],N="cover"===g,j=E((0,r.useState)(!1),2),k=j[0],L=j[1];(0,r.useEffect)((function(){!_&&I&&(C(!0),Y(!0)),_&&T(_)}),[_,I]);var B,Z=(B=n/u,N?B<l?[u*l,u]:[n,n/l]:"contain"===g?B<l?[n,n/l]:[u*l,u]:[n,n/l]),V="contain"===g||N?u:Z[1],U=!N&&p,x=!!N||S;return o().createElement("div",{className:"ms-video",style:{position:"relative",width:n,height:V,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},t&&o().createElement(o().Fragment,null,_&&o().createElement(i.ZP,{url:t,width:Z[0],height:Z[1],playing:I,loop:x,volume:b,muted:R,style:N?{left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute"}:{},controls:U,pip:!1,fileConfig:{attributes:{controlsList:"nodownload",disablePictureInPicture:!0}},youtubeConfig:{playerVars:{controls:U?2:0,modestbranding:1,rel:0}},onReady:function(){return Y(!1)},onError:function(e){w(e),(""+e).includes("NotAllowedError")&&(O(!1),L(!0),Y(!1))},onPause:function(){O(!1)},onPlay:function(){O(!0),k&&(w(!1),L(!1))}}),(!_||_&&(P||A))&&o().createElement("div",{className:"ms-video-cover",style:d(d({position:"absolute",width:Z[0],height:Z[1],display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 1.0)"},!(P||A)&&{cursor:"pointer"}),!I&&f&&{backgroundImage:"url(".concat(f,")"),backgroundSize:N?"cover":"640px auto",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),onClick:function(){k?(L(!1),w(!1)):Y(!0),C(!0),O(!0)}},P&&o().createElement(c.Z,{size:70}),A&&!k&&o().createElement("div",{className:"text-center"},o().createElement(a.Glyphicon,{glyph:"alert",style:{fontSize:Z[1]/4>100?100:Z[1]/4,mixBlendMode:"difference",color:"#ffffff"}}),o().createElement("h3",null,o().createElement(s.Z,{msgId:"geostory.errors.loading.video"}))," "),(!(P||A)&&!I||A&&k)&&o().createElement(a.Glyphicon,{glyph:"play",style:{fontSize:Z[1]/4>100?100:Z[1]/4,mixBlendMode:"difference",color:"#ffffff"}}))),!U&&!k&&o().createElement("div",{className:"ms-video-mask-cover",style:{position:"absolute",width:Z[0],height:Z[1]}}))}));const O=function(e){var t=e.id,n=e.src,i=e.resolution,c=void 0===i?16/9:i,u=e.autoplay,a=e.inView,s=e.description,f=e.showCaption,d=e.caption,p=void 0===d?s:d,m=e.thumbnail,O=e.credits,v=e.controls,T=void 0===v||v,g=e.fit,S=e.loop,h=e.muted,b=e.onPlay,R=void 0===b?function(){}:b,I=e.mode,D=e.containerInView,_=(void 0===D||D)&&a,C=E((0,r.useState)(!1),2),G=C[0],A=C[1],w=function(e){A(e),R(e)};return(0,r.useEffect)((function(){I===l.nl.EDIT&&w(!1)}),[I]),(0,r.useEffect)((function(){I===l.nl.VIEW&&_&&(u||"cover"===g)&&w(!0)}),[_,u,g,I]),(0,r.useEffect)((function(){I===l.nl.VIEW&&!_&&G&&w(!1)}),[_,G,I]),o().createElement("div",{id:t,key:"".concat(t,"-").concat(g,"-").concat(I),className:"ms-media ms-media-video"},o().createElement(y,{src:n,play:G&&I===l.nl.VIEW,resolution:c,thumbnail:m,controls:T&&I===l.nl.VIEW,onPlay:w,fit:g,loop:S,muted:h}),O&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,O)),f&&p&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,p)))}},1262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var r=n(37295),o=n.n(r),i=n(75263),c=n.n(i),u=n(21413),a=n.n(u),l=n(91621),s=n.n(l),f=n(23885),d=n(38560),p=n(5346),E=n(7472);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function T(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&v(e,t)}(u,e);var t,n,r,i,c=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(i){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function u(){var e;y(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(g(e=c.call.apply(c,[this].concat(n))),"setConfirmRef",(function(t){return e.confirm=t,e.confirm})),e}return t=u,(n=[{key:"componentDidMount",value:function(){this.props.focusConfirm&&s().findDOMNode(this.confirm).focus()}},{key:"render",value:function(){return a().createElement(E.Z,{draggable:this.props.draggable,onClickOut:this.props.onClose,id:"confirm-dialog",modal:this.props.modal,style:o()({},this.props.style,{display:this.props.show?"block":"none"})},a().createElement("span",{role:"header"},a().createElement("span",{className:"user-panel-title"},this.props.title),a().createElement("button",{onClick:this.props.onClose,className:"login-panel-close close"},this.props.closeGlyph?a().createElement(f.Glyphicon,{glyph:this.props.closeGlyph}):a().createElement("span",null,"×"))),a().createElement("div",{role:"body"},this.props.children),a().createElement("div",{role:"footer"},a().createElement(f.ButtonGroup,null,a().createElement(d.Z,{ref:this.setConfirmRef,onClick:this.props.onConfirm,disabled:this.props.confirmButtonDisabled,bsStyle:this.props.confirmButtonBSStyle},this.props.confirmButtonContent),a().createElement(d.Z,{onClick:this.props.onClose},this.props.closeText))))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a().Component);h(b,"propTypes",{show:c().bool,draggable:c().bool,onClose:c().func,onConfirm:c().func,onSave:c().func,modal:c().bool,closeGlyph:c().string,style:c().object,buttonSize:c().string,inputStyle:c().object,title:c().node,confirmButtonContent:c().node,confirmButtonDisabled:c().bool,closeText:c().node,confirmButtonBSStyle:c().string,focusConfirm:c().bool}),h(b,"defaultProps",{onClose:function(){},onChange:function(){},modal:!0,title:a().createElement(p.Z,{msgId:"confirmTitle"}),closeGlyph:"",confirmButtonBSStyle:"danger",confirmButtonDisabled:!1,confirmButtonContent:a().createElement(p.Z,{msgId:"confirm"})||"Confirm",closeText:a().createElement(p.Z,{msgId:"close"}),includeCloseButton:!0,focusConfirm:!1});const R=b},12122:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(21413),o=n.n(r),i=n(1262),c=n(99534),u=n(5346),a=n(95437),l=["confirming","confirmYes","confirmNo","confirmTitle","confirmContent","confirmModal","draggable","onConfirm","setConfirming"];var s=(0,a.compose)((0,a.withProps)((function(e){var t=e.setConfirming;return{onClose:function(){return t(!1)}}})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.confirmYes,n=void 0===t?o().createElement(u.Z,{msgId:"yes"}):t,r=e.confirmNo,a=void 0===r?o().createElement(u.Z,{msgId:"no"}):r,l=e.confirmTitle,s=void 0===l?o().createElement(u.Z,{msgId:"confirm"}):l,f=e.confirmContent,d=e.confirmButtonBSStyle,p=void 0===d?"primary":d,E=e.show,m=void 0!==E&&E,y=e.confirmModal,O=void 0===y||y,v=e.draggable,T=void 0!==v&&v,g=e.onClose,S=void 0===g?function(){}:g,h=e.onConfirm,b=void 0===h?function(){}:h;return m?o().createElement(c.Z,null,o().createElement("div",{className:"with-confirm-modal"},o().createElement(i.Z,{draggable:T,show:m,modal:O,onClose:S,onConfirm:b,title:s,confirmButtonContent:n,closeText:a,confirmButtonBSStyle:p,closeGlyph:"1-close"},f))):null})),f=function(e){return function(t){var n=t.confirming,r=t.confirmYes,i=t.confirmNo,c=t.confirmTitle,u=t.confirmContent,a=t.confirmModal,f=t.draggable,d=t.onConfirm,p=t.setConfirming,E=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,l);return o().createElement(o().Fragment,null,o().createElement(s,{show:n,setConfirming:p,confirmYes:r,confirmNo:i,confirmTitle:c,confirmContent:u,confirmModal:a,draggable:f,onConfirm:d}),o().createElement(e,E))}};const d=function(e){return(0,a.compose)((0,a.withState)("confirming","setConfirming",!1),(0,a.withHandlers)({onClick:function(e){var t=e.setConfirming,n=void 0===t?function(){}:t,r=e.onClick,o=void 0===r?function(){}:r,i=e.confirmPredicate,c=void 0===i||i;return function(){c?n(!0):o.apply(void 0,arguments)}},onConfirm:function(e){var t=e.onClick,n=void 0===t?function(){}:t,r=e.setConfirming,o=void 0===r?function(){}:r;return function(){o(!1),n.apply(void 0,arguments)}}}),f)(e)}},7501:(e,t,n)=>{"use strict";n.d(t,{hp:()=>a,cM:()=>l,Qi:()=>s,TU:()=>f,IQ:()=>d,hb:()=>p,HL:()=>E,dq:()=>m,Iy:()=>y,Qd:()=>O,ER:()=>v,Gi:()=>T,mA:()=>g,jR:()=>S,mD:()=>h,XG:()=>b,B6:()=>R});var r=n(57546),o=n.n(r),i=n(50542),c=n.n(i),u=n(87511),a=function(e){return o()(e,"mediaEditor.open")},l=function(e){return o()(e,"mediaEditor.saveState.editing",!1)},s=function(e){return o()(e,"mediaEditor.saveState.addingMedia",!1)},f=function(e){return o()(e,"mediaEditor.saveState")},d=function(e){return o()(e,"mediaEditor.settings.sourceId")},p=function(e){return o()(e,"mediaEditor.settings.mediaType")},E=function(e){return o()(e,"mediaEditor.settings.sources")},m=function(e){return o()(E(e),d(e),{})},y=function(e){return function(e){return o()(function(e){return o()(e,"mediaEditor.settings.mediaTypes")}(e),"".concat(p(e),".sources"),[])}(e).map((function(t){return{id:t,name:(n=t,function(e){return o()(E(e),"".concat(n),{})})(e).name};var n}))},O=function(e){return o()(e,'mediaEditor.data["'.concat(p(e),'"]["').concat(d(e),'"].resultData'))},v=function(e){return o()(e,'mediaEditor.data["'.concat(p(e),'"]["').concat(d(e),'"].params'))},T=function(e){return o()(O(e),"resources")},g=function(e){return o()(O(e),"totalCount")},S=function(e){return o()(e,"mediaEditor.selected")},h=function(e){return o()(e,"mediaEditor.loadingSelected")},b=function(e){return o()(e,"mediaEditor.loadingList")},R=(0,u.P1)(T,S,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return c()(e,{id:t})}))},27693:(e,t,n)=>{"use strict";n.d(t,{r:()=>r,D:()=>o});var r={GEOSTORY:"geostory",GEOSTORE:"geostore"},o={type:"osm",title:"Open Street Map",name:"mapnik",source:"osm",group:"background",visibility:!0,id:"mapnik__0",loading:!1,loadingError:!1}}}]);