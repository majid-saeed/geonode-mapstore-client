(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1701,3941,7219],{67460:(e,t,r)=>{var n=r(33716),a=r(48059),o=r(89796),l=Math.max,i=Math.min;e.exports=function(e,t,r){var s,c,u,f,y,b,p=0,d=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=s,n=c;return s=c=void 0,p=t,f=e.apply(n,r)}function h(e){return p=e,y=setTimeout(O,t),d?g(e):f}function S(e){var r=e-b;return void 0===b||r>=t||r<0||m&&e-p>=u}function O(){var e=a();if(S(e))return w(e);y=setTimeout(O,function(e){var r=t-(e-b);return m?i(r,u-(e-p)):r}(e))}function w(e){return y=void 0,v&&s?g(e):(s=c=void 0,f)}function j(){var e=a(),r=S(e);if(s=arguments,c=this,b=e,r){if(void 0===y)return h(b);if(m)return clearTimeout(y),y=setTimeout(O,t),g(b)}return void 0===y&&(y=setTimeout(O,t)),f}return t=o(t)||0,n(r)&&(d=!!r.leading,u=(m="maxWait"in r)?l(o(r.maxWait)||0,t):u,v="trailing"in r?!!r.trailing:v),j.cancel=function(){void 0!==y&&clearTimeout(y),p=0,s=b=c=y=void 0},j.flush=function(){return void 0===y?f:w(a())},j}},33941:(e,t,r)=>{var n=r(77263);e.exports=function(e){return n(e)&&e!=+e}},48059:(e,t,r)=>{var n=r(6583);e.exports=function(){return n.Date.now()}},94943:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>Y});var n=r(2822),a=r.n(n),o=r(57546),l=r.n(o),i=r(20721),s=r.n(i),c=r(80643),u=r.n(c),f=r(71267),y=r.n(f),b=r(42401),p=r.n(b),d=r(97395),m=r(80416),v=r(60604),g=r(90825),h=r(80833),S=r(82904),O=r(24262),w=r(96909),j=r(9082),E=r(75875),P=r.n(E),N=r(9626),T=r.n(N),D=r(99009);function U(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){W(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const x=function(e,t,r){var n=e+"layers/"+t+".json";return P().get(n,r).then((function(e){return e.data&&e.data.layer}))},A=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,a=void 0===n?[]:n,o=e.options,l=void 0===o?{}:o,i=(0,D.$N)(r),s=i.name,c=i.workspace,u="".concat(t,"rest/").concat(c&&"workspaces/".concat(c,"/")||"","layers/").concat(s,".json");return P().get(u,l).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[],n=a.map((function(e){return e.name})),o=r.filter((function(e){var t=e.name;return-1===n.indexOf(t)}));return{layer:M(M({},t),{},{styles:{"@class":"linked-hash-set",style:o}})}})).then((function(e){return P().put(u,e).then((function(){return e}))}))},C=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,a=void 0===n?[]:n,o=e.options,l=void 0===o?{}:o,i=(0,D.$N)(r),s=i.name,c=i.workspace,u="".concat(t,"rest/").concat(c&&"workspaces/".concat(c,"/")||"","layers/").concat(s,".json");return P().get(u,l).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[];return{layer:M(M({},t),{},{styles:{"@class":"linked-hash-set",style:[].concat(U(r),U(a))}})}})).then((function(e){return P().put(u,e).then((function(){return e}))}))},V=function(e){var t=e.baseUrl,r=e.layerName,n=e.styleName,a=e.options,o=void 0===a?{}:a,l=(0,D.$N)(r),i=l.name,s=l.workspace,c="".concat(t,"rest/").concat(s&&"workspaces/".concat(s,"/")||"","layers/").concat(i,".json");return P().get(c,o).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[],a=t.defaultStyle||{},o=p()([a].concat(U(r)),"name");return{layer:M(M({},t),{},{defaultStyle:{name:n},styles:{"@class":"linked-hash-set",style:o}})}})).then((function(e){return P().put(c,e).then((function(){return e}))}))};var Z=r(93222),F=r(75110),R=r(7147),_=r(8954),L=["name","workspace"];function $(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){if(e){if("string"==typeof e)return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(e,t):void 0}}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var K=function(e){var t=e.status,r=e.styleName,n=e.baseUrl;return"edit"===t?a().Observable.defer((function(){return j.ZP.getStyleCodeByName({baseUrl:n,styleName:r})})).switchMap((function(e){return a().Observable.of((0,w.FU)({languageVersion:e.languageVersion,code:e.code,templateId:"",format:e.format,init:!0}))})).catch((function(e){return a().Observable.of((0,w.Fe)("edit",e))})):a().Observable.empty()},G=function(e){var t=e.styleName,r=e.baseUrl,n=e.onSuccess$,o=e.onError$;return a().Observable.defer((function(){return j.ZP.deleteStyle({baseUrl:r,styleName:t})})).switchMap((function(){return n||a().Observable.empty()})).catch((function(){return o||a().Observable.empty()}))},H=function(e){var t=e.baseUrl,r=e.update,n=e.code,o=e.format,l=e.styleName,i=e.status,s=e.languageVersion,c=e.options,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],y=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return a().Observable.defer((function(){return j.ZP[r?"updateStyle":"createStyle"]({baseUrl:t,code:n,format:o,styleName:l,languageVersion:s,options:c})})).switchMap((function(){var e;return u()(f)&&(e=a().Observable).of.apply(e,[(0,w.Wm)()].concat($(f)))||f})).catch((function(e){var t;return(t=a().Observable).of.apply(t,[(0,w.Fe)(i,e),(0,w.Wm)()].concat($(y)))})).startWith((0,w.pt)(i))};function Q(e,t){return!t&&e.availableStyles?a().Observable.of((0,m.Xy)({availableStyles:e.availableStyles}),(0,w.Wm)()):(0,h.kB)(e).switchMap((function(t){var r=(0,O.IA)(t);return r.availableStyles?a().Observable.of((0,m.Xy)({availableStyles:r.availableStyles}),(0,m.tV)(e.id,"layer",J({},r)),(0,w.Wm)()):a().Observable.of((0,w.Fe)("availableStyles",{status:401}),(0,w.Wm)())})).catch((function(e){var t=-1!==e.message.indexOf("could not be unmarshalled")?"parsingCapabilities":"global";return a().Observable.of((0,w.Fe)(t,e),(0,w.Wm)())})).startWith((0,w.pt)("global"))}const Y={toggleStyleEditorEpic:function(e,t){return e.ofType(w.vZ).filter((function(){return!(0,Z.aN)(t.getState())})).switchMap((function(e){var r=t.getState(),n=(0,F.jN)(r),o=!!l()(n,"options.availableStyles");if(!e.enabled)return function(e){var t=(0,Z.gc)(e),r=(0,Z.Z0)(e).baseUrl,n=void 0===r?"":r;return a().Observable.of((0,w.l1)(),(0,v.fU)({owner:D.s1})).merge(t?G({styleName:t,baseUrl:n}):a().Observable.empty())}(r);if((0,Z.ji)(r)&&o)return a().Observable.empty();var i=e.layer||(0,F.Iz)(r);if(!i||i&&!i.url)return a().Observable.empty();var s=(0,O.Nd)(i);if(!s)return Q(i);var c=i.url.split(s),u="".concat(c[0]).concat(s),f=(0,Z.Z0)(r);return a().Observable.concat(a().Observable.of((0,w.pt)("global"),(0,w.l1)()),a().Observable.defer((function(){return(0,_.eb)({baseUrl:u,styleService:f})})).switchMap((function(e){return a().Observable.concat(a().Observable.of((0,w.E0)(e)),a().Observable.defer((function(){return x(u+"rest/",i.name)})).switchMap((function(e){var t,r=(null==e||null===(t=e.styles)||void 0===t?void 0:t.style)||[],n=p()([e.defaultStyle].concat($(r)),"name");return 0===n.length?a().Observable.of((0,w.Fe)("availableStyles",{status:401}),(0,w.Wm)()):a().Observable.defer((function(){return Promise.all([j.ZP.getStylesInfo({baseUrl:u,styles:n}),(0,h.kB)(i).toPromise().then((function(e){return e})).catch((function(){return null}))])})).switchMap((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}}(t,r)||B(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],l=n[1],s=l&&(0,O.IA)(l),c=((null==s?void 0:s.availableStyles)||[]).map((function(e){return J(J({},e),(0,D.$N)(e.name))})).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name;return t})),u=c.length>0?o.map((function(e){var t=(0,D.$N)(e.name),r=c.find((function(e){return e.name===t.name}))||{},n=(r.name,r.workspace,function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(r,L));return n?J(J({},n),e):e})):o;return a().Observable.of((0,v.W)(i.id,D.s1,"override",{}),(0,m.Xy)({availableStyles:u}),(0,m.tV)(i.id,"layer",{availableStyles:u}),(0,w.Wm)())}))})).catch((function(){return Q(i,!0)})))})))}))},updateLayerOnStatusChangeEpic:function(e,t){return e.ofType(w.g$).filter((function(e){return!!e.status})).switchMap((function(r){var n=t.getState(),o=(0,Z.Vf)(n),l=o&&o.params||{},i=o&&!o.describeFeatureType&&(0,g.H)(o.url,o,{query:l}),s=(0,Z.i7)(n)||o.availableStyles&&o.availableStyles[0]&&o.availableStyles[0].name,c=(0,Z.Ri)(n),u=(0,Z.Z0)(n).baseUrl,f=void 0===u?"":u;return i&&function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){};return(r=a().Observable).of.apply(r,[(0,w.pt)("global")].concat($(o))).merge(e.ofType(m.K$).filter((function(){var e=(0,F.Iz)(t.getState());return n(e)})).switchMap((function(){var e=(0,F.Iz)(t.getState());return l(e)})).catch((function(e){return a().Observable.of((0,w.Fe)("global",e),(0,w.Wm)())})).takeUntil(e.ofType(w.E2)))}(e,t,(function(e){return e&&e.describeLayer}),[i],(function(e){return a().Observable.concat(K({status:r.status,styleName:s,baseUrl:f}),a().Observable.of((0,w.xR)(!(e&&e.describeLayer&&401===e.describeLayer.error)),(0,w.bB)({editorType:c.msEditorType||"textarea",styleJSON:c.msStyleJSON}),(0,w.Wm)()))}))||a().Observable.concat(K({status:r.status,styleName:s,baseUrl:f}),a().Observable.of((0,w.bB)({editorType:c.msEditorType||"textarea",styleJSON:c.msStyleJSON})))}))},updateTemporaryStyleEpic:function(e,t){return e.ofType(w.TB,w.DX).switchMap((function(e){var r=t.getState(),n=(0,Z.gc)(r),a=(0,Z.Vf)(r),o=(0,D.$N)(a.name).workspace,l=e.format&&e.format!==(0,Z.iB)(r),i=n||"".concat(o?"".concat(o,":"):"").concat((0,D.Vi)()),s=e.format||(0,Z.iB)(r),c=(0,Z.ex)(r),u=(0,Z.Z0)(r).baseUrl,f=void 0===u?"":u,y=(0,Z.j5)(r),b="sld"===s&&(e.code||"").match(/version=\"1\.1\.0\"/)&&{version:"1.1.0"}||e.format&&!e.languageVersion&&{version:"1.0.0"}||e.languageVersion||{version:"1.0.0"},p=y.version!==b.version?{params:{raw:!0}}:{},m=b,g=function(t){return H({update:!0,code:e.code,format:s,styleName:t,status:c,baseUrl:f,languageVersion:m,options:p},[(0,v.B1)(D.s1,[{style:t,_v_:Date.now(),singleTile:!0}]),(0,w.k5)({temporaryId:t,templateId:e.templateId||"",code:e.code,format:s,init:e.init,languageVersion:m})],"edit"===c?[]:[(0,d.vU)({title:"styleeditor.updateTmpErrorTitle",message:"styleeditor.updateTmpStyleErrorMessage",uid:"updateTmpStyleError",autoDismiss:5})])},h=("css"===s?"* { stroke: #888888; }":"sld"===s&&'<?xml version="1.0" encoding="ISO-8859-1"?>\n<StyledLayerDescriptor version="1.0.0"\n\t\txsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"\n\t\txmlns="http://www.opengis.net/sld"\n\t\txmlns:ogc="http://www.opengis.net/ogc"\n\t\txmlns:xlink="http://www.w3.org/1999/xlink"\n\t\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n\n\t<NamedLayer>\n\t\t<Name>Default Style</Name>\n\t\t<UserStyle>\n\t\t\t<Title>${styleTitle}</Title>\n\t\t\t<Abstract>${styleAbstract}</Abstract>\n\t\t\t<FeatureTypeStyle>\n\t\t\t\t<Rule>\n\t\t\t\t\t<Name>Rule Name</Name>\n\t\t\t\t\t<Title>Rule Title</Title>\n\t\t\t\t\t<Abstract>Rule Abstract</Abstract>\n\t\t\t\t\t<LineSymbolizer>\n\t\t\t\t\t\t<Stroke>\n\t\t\t\t\t\t\t<CssParameter name="stroke">#0000FF</CssParameter>\n\t\t\t\t\t\t</Stroke>\n\t\t\t\t\t\t</LineSymbolizer>\n\t\t\t\t\t<PointSymbolizer>\n\t\t\t\t\t\t<Graphic>\n\t\t\t\t\t\t\t<Mark>\n\t\t\t\t\t\t\t\t<WellKnownName>square</WellKnownName>\n\t\t\t\t\t\t\t\t<Fill>\n\t\t\t\t\t\t\t\t\t<CssParameter name="fill">#FF0000</CssParameter>\n\t\t\t\t\t\t\t\t</Fill>\n\t\t\t\t\t\t\t</Mark>\n\t\t\t\t\t\t</Graphic>\n\t\t\t\t\t</PointSymbolizer>\n\t\t\t\t\t</Rule>\n\t\t\t\t</FeatureTypeStyle>\n\t\t\t</UserStyle>\n\t\t</NamedLayer>\n\t</StyledLayerDescriptor>\n')||"",S=function(e){return H({code:h,format:s,styleName:e,status:c,baseUrl:f},g(e),[(0,d.vU)({title:"styleeditor.createTmpErrorTitle",message:"styleeditor.createTmpStyleErrorMessage",uid:"createTmpStyleError",autoDismiss:5}),(0,w.k5)({temporaryId:null,templateId:"",code:"",format:"",init:"",languageVersion:null})])};return l&&n&&G({styleName:n,baseUrl:f,onSuccess$:S("".concat(o?"".concat(o,":"):"").concat((0,D.Vi)())),onError$:g(i)})||n&&g(i)||S(i)}))},createStyleEpic:function(e,t){return e.ofType(w.vA).switchMap((function(e){var r=t.getState(),n=(0,Z.gB)(r),o=(0,Z.Vf)(r),l=(0,D.$N)(o.name).workspace,i="".concat(l?"".concat(l,":"):"").concat((0,D.nK)(e.settings)),c=(0,Z.iB)(r),u=e.settings||{},f=u.title,b=void 0===f?"":f,p=u._abstract,g=void 0===p?"":p,h=(0,Z.Z0)(r).baseUrl,S=void 0===h?"":h,O=J({title:b,description:g},{msStyleJSON:null,msEditorType:"visual"});return a().Observable.defer((function(){return j.ZP.createStyle({baseUrl:S,code:y()(n)({styleTitle:b,styleAbstract:g}),format:c,styleName:i,metadata:O})})).switchMap((function(){return a().Observable.of((0,v.B1)(D.s1,[{}]),(0,m.Xy)({style:i||""},!0),(0,w.Nf)(""),(0,w.Wm)()).merge(function(e){var t=e.baseUrl,r=e.layer,n=e.styleName,o=e.format,l=e.title,i=e._abstract,c=e.metadata;return a().Observable.defer((function(){return C({baseUrl:t,layerName:r.name,styles:[{name:n}]})})).switchMap((function(){var e=J({filename:"".concat(n,".").concat(o),format:o,name:n,title:l,_abstract:i},c&&{metadata:c}),t=s()(r.availableStyles),u=r.availableStyles&&[t,e].concat($(r.availableStyles.filter((function(e,t){return t>0}))))||[e];return a().Observable.of((0,m.Xy)({availableStyles:u},!0),(0,w.Wm)())})).catch((function(){return a().Observable.of((0,w.Wm)())})).startWith((0,w.pt)("global"))}({layer:o,styleName:i,format:c,title:b,_abstract:g,baseUrl:S,metadata:O}))})).catch((function(e){return a().Observable.of((0,w.Fe)("",e),(0,w.Wm)(),(0,d.vU)({title:"styleeditor.createStyleErrorTitle",message:"styleeditor.createStyleErrorMessage",uid:"createStyleError",autoDismiss:5}))})).startWith((0,w.pt)(""))}))},updateStyleCodeEpic:function(e,t){return e.ofType(w.ch).switchMap((function(){var e=t.getState(),r=(0,Z.iB)(e),n=(0,Z.j5)(e),o=(0,Z.gB)(e),l=(0,Z.i7)(e),i=(0,Z.gc)(e),s=(0,Z.Vf)(e),c=(0,Z.Z0)(e).baseUrl,u=void 0===c?"":c,f=(0,Z.WW)(e)||{},y={msStyleJSON:f.styleJSON||null,msEditorType:f.editorType},b=(s.availableStyles||[]).map((function(e){return e.name===l?J(J({},e),{},{metadata:J(J({},e.metadata),y)}):e}));return a().Observable.defer((function(){return j.ZP.updateStyle({baseUrl:u,code:o,format:r,styleName:l,languageVersion:n,options:{params:{raw:!0}},metadata:y})})).switchMap((function(){return a().Observable.of((0,w.Wm)(),(0,m.tV)(s.id,"layer",{_v_:Date.now(),availableStyles:b}),(0,m.Xy)({availableStyles:b}),(0,w.k5)({temporaryId:i,templateId:"",code:o,format:r,init:!0,languageVersion:n}),(0,d.Vp)({title:"styleeditor.savedStyleTitle",message:"styleeditor.savedStyleMessage",uid:"savedStyleTitle",autoDismiss:5}))})).catch((function(e){return a().Observable.of((0,w.Fe)("global",e),(0,w.Wm)(),(0,d.vU)({title:"styleeditor.updateStyleErrorTitle",message:"styleeditor.updateStyleErrorMessage",uid:"updateStyleError",autoDismiss:5}))})).startWith((0,w.pt)("global"))}))},deleteStyleEpic:function(e,t){return e.ofType(w.j1).filter((function(e){return!!e.styleName})).switchMap((function(e){var r=e.styleName,n=t.getState(),o=(0,Z.Vf)(n),l=(0,Z.Z0)(n).baseUrl,i=void 0===l?"":l,s=(0,R.tL)(n),c=(0,R.Gd)(n);return a().Observable.defer((function(){return A({baseUrl:i,layerName:o.name,styles:[{name:r}]})})).switchMap((function(){var e=o.availableStyles&&o.availableStyles.filter((function(e){return e.name!==r}))||[];return a().Observable.concat(a().Observable.of((0,m.Xy)({style:"",availableStyles:e},!0),(0,w.Wm)(),(0,S.Xg)("layersettings","originalSettings",J(J({},s),{},{style:""})),(0,S.Xg)("layersettings","initialSettings",J(J({},c),{},{style:""}))),G({styleName:r,baseUrl:i,onSuccess$:a().Observable.of((0,d.Vp)({title:"styleeditor.deletedStyleSuccessTitle",message:"styleeditor.deletedStyleSuccessMessage",uid:"deletedStyleSuccess",autoDismiss:5})),onError$:a().Observable.of((0,d.vU)({title:"styleeditor.deletedStyleErrorTitle",message:"styleeditor.deletedStyleErrorMessage",uid:"deletedStyleError",autoDismiss:5}))}))})).catch((function(){return a().Observable.of((0,w.Wm)())})).startWith((function(){return a().Observable.of((0,w.pt)("global"))}))}))},setDefaultStyleEpic:function(e,t){return e.ofType(w.rb).switchMap((function(){var e=t.getState(),r=(0,Z.Z0)(e).baseUrl,n=void 0===r?"":r,o=(0,Z.Vf)(e),l=(0,Z.i7)(e);return a().Observable.defer((function(){return V({baseUrl:n,layerName:o.name,styleName:l})})).switchMap((function(){var e=o.availableStyles.filter((function(e){var t=e.name;return l===t})),t=o.availableStyles.filter((function(e){var t=e.name;return l!==t})),r=[].concat($(e),$(t));return a().Observable.of((0,m.Xy)({availableStyles:r},!0),(0,d.Vp)({title:"styleeditor.setDefaultStyleSuccessTitle",message:"styleeditor.setDefaultStyleSuccessMessage",uid:"setDefaultStyleSuccess",autoDismiss:5}),(0,w.Wm)())})).startWith((0,w.pt)("global")).catch((function(){return a().Observable.of((0,d.vU)({title:"styleeditor.setDefaultStyleErrorTitle",message:"styleeditor.setDefaultStyleErrorMessage",uid:"setDefaultStyleError",autoDismiss:5}),(0,w.Wm)())}))}))}}},80833:(e,t,r)=>{"use strict";r.d(t,{kB:()=>m,HI:()=>v});var n=r(31940),a=r.n(n),o=(r(20721),r(90173)),l=r(2822),i=r(1157),s=r(75875),c=r.n(s),u=(r(10525),r(24262)),f=r(10284),y=r(33044);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}o.default;var m=function(e){return l.Observable.defer((function(){return i.ZP.getCapabilities((0,u.Fh)(e))})).let(f.oB).map((function(t){return i.ZP.parseLayerCapabilities(t,e)}))},v=function(e){return function(e){return l.Observable.defer((function(){return c().get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.search,n=void 0===r?{}:r,o=e.url,l=a().parse(n.url||o,!0);return a().format(p(p({},l),{},{search:void 0,query:p(p({},l.query),{},{service:"WMS",version:"1.1.1",layers:t,outputFormat:"application/json",request:"DescribeLayer"})}))}(e))})).let(f.oB)}(e).map((function(e){var t=e.data,r=void 0===t?{}:t;return r&&r.layerDescriptions[0]})).map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.owsURL;return p(p({},e),{},{params:{},search:r?{type:"wfs",url:(0,y.cleanAuthParamsFromURL)(r)}:void 0})}))}},98592:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var n=r(80643),a=r.n(n),o=r(37153),l=r.n(o),i=r(37295),s=r.n(i),c=r(75263),u=r.n(c),f=r(21413),y=r.n(f),b=r(74277),p=r(95437),d=r(87511),m=r(80416),v=r(96909),g=r(15402),h=r(65539),S=r(82030),O=r(73014),w=r(32425),j=r(74621),E=r(93222),P=r(99009),N=r(50392);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(e,t)}function W(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&M(e,t)}(s,e);var t,r,n,o,i=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(n);if(o){var r=x(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return W(this,e)});function s(){return k(this,s),i.apply(this,arguments)}return t=s,(r=[{key:"UNSAFE_componentWillMount",value:function(){var e=!this.props.editingAllowedRoles||a()(this.props.editingAllowedRoles)&&l()(this.props.userRole)&&-1!==this.props.editingAllowedRoles.indexOf(this.props.userRole);this.props.onInit(this.props.styleService,e&&(0,P.uW)(this.props.layer,this.props.styleService))}},{key:"render",value:function(){return y().createElement(h.Z,{className:"ms-style-editor-container",header:this.props.showToolbar?y().createElement("div",{className:"ms-style-editor-container-header"},this.props.header,y().createElement("div",{className:"text-center"},y().createElement(N.lC,{enableSetDefaultStyle:this.props.enableSetDefaultStyle}))):null,footer:y().createElement("div",{style:{height:25}})},this.props.isEditing?y().createElement(N.m2,{config:this.props.editorConfig}):y().createElement(N.tM,{showDefaultStyleIcon:this.props.canEdit&&this.props.enableSetDefaultStyle}))}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(y().Component);A(C,"propTypes",{layer:u().object,header:u().node,isEditing:u().bool,showToolbar:u().node.bool,onInit:u().func,styleService:u().object,userRole:u().string,editingAllowedRoles:u().array,enableSetDefaultStyle:u().bool,canEdit:u().bool,editorConfig:u().object}),A(C,"defaultProps",{layer:{},onInit:function(){},editingAllowedRoles:["ADMIN"],editorConfig:{}});var V=(0,p.compose)(p.toClass,(0,p.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.active;return!t}),(function(){return function(){return null}})),(0,b.connect)((0,d.P1)([E.ex,E.aN,E.Vf,E.p,j.L3,E.z_,E.Z0],(function(e,t,r,n,a,o,l){return{isEditing:"edit"===e,loading:t,layer:r,error:n,userRole:a,canEdit:o,styleService:l}})),{onInit:v.E0,onUpdateParams:m.Xy},(function(e,t,r){var n,a,o,l=(null===(n=r.styleService)||void 0===n?void 0:n.baseUrl)===(null===(a=e.styleService)||void 0===a?void 0:a.baseUrl)&&(null===(o=e.styleService)||void 0===o?void 0:o.isStatic),i=r.styleService&&!l?U(U({},r.styleService),{},{isStatic:!0}):U({},e.styleService);return U(U(U(U({},r),e),t),{},{styleService:i})})),(0,S.Z)((function(e){var t=e.error;return!!(null!=t&&t.availableStyles||null!=t&&t.global||null!=t&&t.parsingCapabilities)}),(function(e){var t=e.error;return{glyph:"exclamation-mark",title:y().createElement(g.Z,{msgId:"styleeditor.errorTitle"}),description:y().createElement(g.Z,{msgId:((null==t?void 0:t.availableStyles)?"styleeditor.missingAvailableStylesMessage":(null==t?void 0:t.parsingCapabilities)&&"styleeditor.parsingCapabilitiesError")||(null==t?void 0:t.global)&&"styleeditor.globalError"}),style:{display:"flex",width:"100%",height:"100%",overflow:"hidden"},mainViewStyle:{margin:"auto",width:300}}})),(0,O.Z)((function(e){return"global"===e.loading}),{size:150,style:{margin:"auto"}},(function(e){return y().createElement("div",{style:{position:"relative",height:"100%",display:"flex"}},y().createElement(w.Z,e))})),(0,p.compose)((0,b.connect)((function(){return{}}),{toggleStyleEditor:v.Wv}),(0,p.lifecycle)({componentDidMount:function(){this.props.toggleStyleEditor(null,!0)}})))(C);const Z={StyleEditorPlugin:s()(V,{TOC:{priority:1,container:"TOCItemSettings"},TOCItemsSettings:{name:"StyleEditor",target:"style",priority:1,ToolbarComponent:N.lC}}),reducers:{styleeditor:r(32244).Z},epics:r(94943).ZP}},32244:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(96909),a=r(37153),o=r.n(a);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.wL:return i(i({},e),{},{service:t.service,canEdit:t.canEdit});case n.Nm:return i(i({},e),{},{canEdit:t.canEdit});case n.gF:return i(i({},e),{},{temporaryId:t.temporaryId,templateId:t.templateId,code:t.code,format:t.format,error:null,languageVersion:t.languageVersion,initialCode:t.init?t.code:e.initialCode});case n.g$:return""===t.status?i(i({},e),{},{status:t.status,code:"",templateId:"",initialCode:"",addStyle:!1,error:{}}):i(i({},e),{},{status:t.status});case n.dJ:return{service:e.service&&i({},e.service)||{},canEdit:e.canEdit,loading:e.loading};case n.uz:return i(i({},e),{},{addStyle:t.add});case n.lX:return i(i({},e),{},{loading:!t.status||t.status});case n.E2:return i(i({},e),{},{loading:!1,enabled:!0});case n.mF:var r,a,l,c=(null==t||null===(r=t.error)||void 0===r?void 0:r.statusText)||(null==t||null===(a=t.error)||void 0===a?void 0:a.message)||"",u=o()(null==t||null===(l=t.error)||void 0===l?void 0:l.messageId)&&{messageId:t.error.messageId},f=c.match(/line\s([\d]+)|column\s([\d]+)|lineNumber:\s([\d]+)|columnNumber:\s([\d]+)/g),y=f&&2===f.length&&f.reduce((function(e,t){var r=t.split(" "),n=r[0].replace(/Number:/g,""),a=parseFloat(r[1]);return n&&!isNaN(a)&&i(i({},e),{},s({},n,a))||i({},e)}),i({message:c},u))||i({message:c},u);return i(i({},e),{},{loading:!1,canEdit:!(t.error&&(401===t.error.status||403===t.error.status||t.error.message&&-1!==t.error.message.indexOf("could not be unmarshalled"))),error:i(i({},e.error),{},s({},t.status||"global",i({status:t.error&&t.error.status||404},y)))});case n.dk:return i(i({},e),{},{metadata:i(i({},e.metadata),t.metadata)});default:return e}}}}]);