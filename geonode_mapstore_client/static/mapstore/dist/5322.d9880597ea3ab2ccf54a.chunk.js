(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5322],{32425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(45697),o=r.n(n),c=r(24852),i=r.n(c);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},f=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,c=e.hidden;return i().createElement("div",{className:o,style:u({width:t,height:t,overflow:"hidden"},n)},!c&&i().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};f.propTypes={size:o().number,className:o().string,style:o().object};const p=f},64385:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>re});var n=r(68195),o=r(45697),c=r.n(o),i=r(57557),a=r.n(i),u=r(67076);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e){return(0,u.mapProps)((function(t){return a()(t,e)}))},y={locale:navigator&&navigator.language,formats:{},messages:{},defaultLocale:"en",defaultFormats:{},formatDate:function(e){return e},formatTime:function(e){return e},formatRelative:function(e){return e},formatNumber:function(e){return e},formatPlural:function(e){return e},formatMessage:function(e){return e},formatHTMLMessage:function(e){return e},now:function(){return new Date}},b=r(90596),d=r(44054),h=r(30072),g=r(5904),m=r(22404),v=r(9056),w=r(6909),O=r(24852),j=r.n(O),P=r(51273),S=r(36403),_=r(20767),I=r(98185),k=r(31219),D=r(9371);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return A(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(i,e);var t,r,n,o,c=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(n);if(o){var r=x(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return L(this,e)});function i(){var e;C(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return N(A(e=c.call.apply(c,[this].concat(r))),"getLayer",(function(){var t;return e.props.map.getLayers().forEach((function(r){e.layersFilter(r)&&(t=r)}),A(e)),t})),N(A(e),"setSelectInteraction",(function(){e._selectInteraction.getActive()||e._selectInteraction.setActive(!0)})),N(A(e),"createSelectInteraction",(function(){e.createStyle(),e._selectInteraction=new P.Z({layers:e.layersFilter,style:e._style,toggleCondition:S.QC}),e._selectInteraction.on("select",e.selectionChange,A(e)),e.props.map.addInteraction(e._selectInteraction)})),N(A(e),"selectionChange",(function(){var t=[];e._selectInteraction.getFeatures().forEach((function(e){t.push(e.getId())})),e.props.updateHighlighted(t,"")})),N(A(e),"cleanSupport",(function(){e._selectInteraction&&e._selectInteraction.getActive()&&(e._selectInteraction.getFeatures().clear(),e.props.updateHighlighted([],""),e._selectInteraction.setActive(!1))})),N(A(e),"layersFilter",(function(t){return e.props.layer&&t.get("msId")===e.props.layer})),N(A(e),"createStyle",(function(){var t=e.props.selectedStyle,r={stroke:new _.default(t.stroke?t.stroke:{color:"blue",width:1}),fill:new I.default(t.fill?t.fill:{color:"blue"})};"Point"===t.type&&(r={image:new D.default(F(F({},r),{},{radius:t.radius||5}))}),e._style=new k.default(r)})),N(A(e),"highlightFeatures",(function(t){var r=e.getLayer(),n=e._selectInteraction.getFeatures();n.clear(),r&&r.getSource().getFeatures().map((function(e){-1!==t.indexOf(e.getId())&&n.push(e)}),A(e))})),e}return t=i,(r=[{key:"componentDidMount",value:function(){this.createSelectInteraction(),"enabled"===this.props.status?this._selectInteraction.setActive(!0):this._selectInteraction.setActive(!1),this.props.features&&this.highlightFeatures(this.props.features)}},{key:"shouldComponentUpdate",value:function(e){var t=this.props;return e.status!==t.status||e.layer!==t.layer||"update"===e.status&&e.features.toString()!==t.features.toString()}},{key:"UNSAFE_componentWillUpdate",value:function(e){switch(e.status){case"enabled":this.setSelectInteraction(e);break;case"disabled":this.cleanSupport();break;case"update":this.highlightFeatures(e.features);break;default:return}}},{key:"componentWillUnmount",value:function(){this._selectInteraction&&(this.cleanSupport(),this._selectInteraction.un("select",this.selectionChange,this),this.props.map.removeInteraction(this._selectInteraction),this._selectInteraction=null,this._style=null)}},{key:"render",value:function(){return null}}])&&Z(t.prototype,r),i}(j().Component);N(B,"propTypes",{map:c().object,layer:c().string.isRequired,status:c().oneOf(["disabled","enabled","update"]),updateHighlighted:c().func,selectedStyle:c().object,features:c().array}),N(B,"contextTypes",{messages:c().object}),N(B,"defaultProps",{status:"disabled",updateHighlighted:function(){},selectedStyle:{type:"Point",radius:12,stroke:{width:4,color:"yellow"},fill:{color:"red"}}});var H=r(97016),M=r(29902),U=r(72445),z=r(18369);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return K(e)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(i,e);var t,r,n,o,c=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(n);if(o){var r=V(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return J(this,e)});function i(){var e;G(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return X(K(e=c.call.apply(c,[this].concat(r))),"addDrawInteraction",(function(t){e.drawInteraction&&e.removeDrawInteraction();var r=new H.Z,n=new M.Z({source:r,zIndex:1e6,style:new k.default({fill:new I.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new _.default({color:"#ffcc33",width:2}),image:new D.default({radius:7,fill:new I.default({color:"#ffcc33"})})})});e.props.map.addLayer(n);var o=new U.ZP({source:r,type:t.selection.geomType,style:new k.default({fill:new I.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new _.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new D.default({radius:5,stroke:new _.default({color:"rgba(0, 0, 0, 0.7)"}),fill:new I.default({color:"rgba(255, 255, 255, 0.2)"})})})});o.on("drawstart",(function(t){e.sketchFeature=t.feature,r.clear()})),o.on("drawend",(function(){e.updateSelectionState()})),e.props.map.addInteraction(o),e.drawInteraction=o,e.selectionLayer=n,e.setDoubleClickZoomEnabled(!1)})),X(K(e),"removeDrawInteraction",(function(){null!==e.drawInteraction&&(e.props.map.removeInteraction(e.drawInteraction),e.drawInteraction=null,e.props.map.removeLayer(e.selectionLayer),e.sketchFeature=null,setTimeout((function(){return e.setDoubleClickZoomEnabled(!0)}),251))})),X(K(e),"updateSelectionState",(function(){if(e.sketchFeature){var t=e.sketchFeature.getGeometry().getCoordinates(),r={geomType:e.props.selection.geomType,point:"Point"===e.props.selection.geomType?[t[0],t[1]]:null,line:"LineString"===e.props.selection.geomType?t.map((function(e){return[e[0],e[1]]})):null,polygon:"Polygon"===e.props.selection.geomType?e.sketchFeature.getGeometry().getLinearRing(0).getCoordinates().map((function(e){return[e[0],e[1]]})):null};e.props.changeSelectionState(r)}})),X(K(e),"setDoubleClickZoomEnabled",(function(t){for(var r=e.props.map.getInteractions(),n=0;n<r.getLength();n++){var o=r.item(n);if(o instanceof z.Z){o.setActive(t);break}}})),e}return t=i,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selection.geomType&&e.selection.geomType!==this.props.selection.geomType&&this.addDrawInteraction(e),e.selection.geomType||this.removeDrawInteraction()}},{key:"render",value:function(){return null}}])&&q(t.prototype,r),i}(j().Component);X(Y,"propTypes",{map:c().object,projection:c().string,selection:c().object,changeSelectionState:c().func}),X(Y,"defaultProps",{selection:{}});var $=r(26105),ee=r(89912),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,u.compose)((0,u.getContext)({intl:c().object}),(0,u.branch)((function(e){return!!e.intl}),n.injectIntl,(0,u.withProps)({intl:y})),(0,u.withPropsOnChange)(["intl"],(function(t){var r=t.intl,n=void 0===r?{}:r;return e.reduce((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return s(s({},e),{},f({},t,n[t]))}),{})})),p(["intl"]))}(["formatNumber"]);const re={LMap:b.Z,Layer:d.Z,Feature:h.Z,MeasurementSupport:te(g.Z),Overview:m.Z,ScaleBar:v.Z,DrawSupport:w.Z,HighlightFeatureSupport:B,SelectionSupport:Y,PopupSupport:$.Z,BoxSelectionSupport:ee.Z}}}]);