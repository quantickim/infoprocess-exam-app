(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function Hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bo={exports:{}},ys={},ko={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),Wc=Symbol.for("react.portal"),qc=Symbol.for("react.fragment"),$c=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),Jc=Symbol.for("react.provider"),Qc=Symbol.for("react.context"),Kc=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Yc=Symbol.for("react.memo"),Xc=Symbol.for("react.lazy"),rl=Symbol.iterator;function Zc(e){return e===null||typeof e!="object"?null:(e=rl&&e[rl]||e["@@iterator"],typeof e=="function"?e:null)}var wo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jo=Object.assign,Co={};function vt(e,n,t){this.props=e,this.context=n,this.refs=Co,this.updater=t||wo}vt.prototype.isReactComponent={};vt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};vt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function No(){}No.prototype=vt.prototype;function aa(e,n,t){this.props=e,this.context=n,this.refs=Co,this.updater=t||wo}var la=aa.prototype=new No;la.constructor=aa;jo(la,vt.prototype);la.isPureReactComponent=!0;var sl=Array.isArray,Io=Object.prototype.hasOwnProperty,oa={current:null},Eo={key:!0,ref:!0,__self:!0,__source:!0};function Po(e,n,t){var r,s={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Io.call(n,r)&&!Eo.hasOwnProperty(r)&&(s[r]=n[r]);var u=arguments.length-2;if(u===1)s.children=t;else if(1<u){for(var o=Array(u),p=0;p<u;p++)o[p]=arguments[p+2];s.children=o}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)s[r]===void 0&&(s[r]=u[r]);return{$$typeof:ur,type:e,key:i,ref:a,props:s,_owner:oa.current}}function ed(e,n){return{$$typeof:ur,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function nd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var il=/\/+/g;function Ms(e,n){return typeof e=="object"&&e!==null&&e.key!=null?nd(""+e.key):n.toString(36)}function Rr(e,n,t,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ur:case Wc:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+Ms(a,0):r,sl(s)?(t="",e!=null&&(t=e.replace(il,"$&/")+"/"),Rr(s,n,t,"",function(p){return p})):s!=null&&(ua(s)&&(s=ed(s,t+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(il,"$&/")+"/")+e)),n.push(s)),1;if(a=0,r=r===""?".":r+":",sl(e))for(var u=0;u<e.length;u++){i=e[u];var o=r+Ms(i,u);a+=Rr(i,n,t,o,s)}else if(o=Zc(e),typeof o=="function")for(e=o.call(e),u=0;!(i=e.next()).done;)i=i.value,o=r+Ms(i,u++),a+=Rr(i,n,t,o,s);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function hr(e,n,t){if(e==null)return e;var r=[],s=0;return Rr(e,r,"","",function(i){return n.call(t,i,s++)}),r}function td(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Lr={transition:null},rd={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:oa};function Ao(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:hr,forEach:function(e,n,t){hr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return hr(e,function(){n++}),n},toArray:function(e){return hr(e,function(n){return n})||[]},only:function(e){if(!ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=vt;F.Fragment=qc;F.Profiler=Vc;F.PureComponent=aa;F.StrictMode=$c;F.Suspense=Gc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rd;F.act=Ao;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jo({},e.props),s=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=oa.current),n.key!==void 0&&(s=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(o in n)Io.call(n,o)&&!Eo.hasOwnProperty(o)&&(r[o]=n[o]===void 0&&u!==void 0?u[o]:n[o])}var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){u=Array(o);for(var p=0;p<o;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:ur,type:e.type,key:s,ref:i,props:r,_owner:a}};F.createContext=function(e){return e={$$typeof:Qc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jc,_context:e},e.Consumer=e};F.createElement=Po;F.createFactory=function(e){var n=Po.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Kc,render:e}};F.isValidElement=ua;F.lazy=function(e){return{$$typeof:Xc,_payload:{_status:-1,_result:e},_init:td}};F.memo=function(e,n){return{$$typeof:Yc,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=n}};F.unstable_act=Ao;F.useCallback=function(e,n){return xe.current.useCallback(e,n)};F.useContext=function(e){return xe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};F.useEffect=function(e,n){return xe.current.useEffect(e,n)};F.useId=function(){return xe.current.useId()};F.useImperativeHandle=function(e,n,t){return xe.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return xe.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return xe.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return xe.current.useMemo(e,n)};F.useReducer=function(e,n,t){return xe.current.useReducer(e,n,t)};F.useRef=function(e){return xe.current.useRef(e)};F.useState=function(e){return xe.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return xe.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return xe.current.useTransition()};F.version="18.3.1";ko.exports=F;var P=ko.exports;const sd=Hc(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id=P,ad=Symbol.for("react.element"),ld=Symbol.for("react.fragment"),od=Object.prototype.hasOwnProperty,ud=id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cd={key:!0,ref:!0,__self:!0,__source:!0};function To(e,n,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)od.call(n,r)&&!cd.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)s[r]===void 0&&(s[r]=n[r]);return{$$typeof:ad,type:e,key:i,ref:a,props:s,_owner:ud.current}}ys.Fragment=ld;ys.jsx=To;ys.jsxs=To;bo.exports=ys;var l=bo.exports,oi={},Ro={exports:{}},Te={},Lo={exports:{}},Do={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(w,L){var _=w.length;w.push(L);e:for(;0<_;){var T=_-1>>>1,z=w[T];if(0<s(z,L))w[T]=L,w[_]=z,_=T;else break e}}function t(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var L=w[0],_=w.pop();if(_!==L){w[0]=_;e:for(var T=0,z=w.length,ce=z>>>1;T<ce;){var he=2*(T+1)-1,un=w[he],Ve=he+1,Se=w[Ve];if(0>s(un,_))Ve<z&&0>s(Se,un)?(w[T]=Se,w[Ve]=_,T=Ve):(w[T]=un,w[he]=_,T=he);else if(Ve<z&&0>s(Se,_))w[T]=Se,w[Ve]=_,T=Ve;else break e}}return L}function s(w,L){var _=w.sortIndex-L.sortIndex;return _!==0?_:w.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var o=[],p=[],h=1,g=null,f=3,y=!1,v=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(w){for(var L=t(p);L!==null;){if(L.callback===null)r(p);else if(L.startTime<=w)r(p),L.sortIndex=L.expirationTime,n(o,L);else break;L=t(p)}}function x(w){if(S=!1,m(w),!v)if(t(o)!==null)v=!0,D(C);else{var L=t(p);L!==null&&B(x,L.startTime-w)}}function C(w,L){v=!1,S&&(S=!1,d(b),b=-1),y=!0;var _=f;try{for(m(L),g=t(o);g!==null&&(!(g.expirationTime>L)||w&&!U());){var T=g.callback;if(typeof T=="function"){g.callback=null,f=g.priorityLevel;var z=T(g.expirationTime<=L);L=e.unstable_now(),typeof z=="function"?g.callback=z:g===t(o)&&r(o),m(L)}else r(o);g=t(o)}if(g!==null)var ce=!0;else{var he=t(p);he!==null&&B(x,he.startTime-L),ce=!1}return ce}finally{g=null,f=_,y=!1}}var j=!1,I=null,b=-1,E=5,A=-1;function U(){return!(e.unstable_now()-A<E)}function W(){if(I!==null){var w=e.unstable_now();A=w;var L=!0;try{L=I(!0,w)}finally{L?O():(j=!1,I=null)}}else j=!1}var O;if(typeof c=="function")O=function(){c(W)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,k=q.port2;q.port1.onmessage=W,O=function(){k.postMessage(null)}}else O=function(){M(W,0)};function D(w){I=w,j||(j=!0,O())}function B(w,L){b=M(function(){w(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,D(C))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(w){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var _=f;f=L;try{return w()}finally{f=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,L){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var _=f;f=w;try{return L()}finally{f=_}},e.unstable_scheduleCallback=function(w,L,_){var T=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?T+_:T):_=T,w){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=_+z,w={id:h++,callback:L,priorityLevel:w,startTime:_,expirationTime:z,sortIndex:-1},_>T?(w.sortIndex=_,n(p,w),t(o)===null&&w===t(p)&&(S?(d(b),b=-1):S=!0,B(x,_-T))):(w.sortIndex=z,n(o,w),v||y||(v=!0,D(C))),w},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(w){var L=f;return function(){var _=f;f=L;try{return w.apply(this,arguments)}finally{f=_}}}})(Do);Lo.exports=Do;var dd=Lo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=P,Ae=dd;function N(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mo=new Set,qt={};function qn(e,n){dt(e,n),dt(e+"Capture",n)}function dt(e,n){for(qt[e]=n,e=0;e<n.length;e++)Mo.add(n[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ui=Object.prototype.hasOwnProperty,fd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,al={},ll={};function md(e){return ui.call(ll,e)?!0:ui.call(al,e)?!1:fd.test(e)?ll[e]=!0:(al[e]=!0,!1)}function hd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gd(e,n,t,r){if(n===null||typeof n>"u"||hd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,r,s,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ca=/[\-:]([a-z])/g;function da(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ca,da);ue[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ca,da);ue[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ca,da);ue[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function pa(e,n,t,r){var s=ue.hasOwnProperty(n)?ue[n]:null;(s!==null?s.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(gd(n,t,s,r)&&(t=null),r||s===null?md(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,r=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var on=pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),fa=Symbol.for("react.strict_mode"),ci=Symbol.for("react.profiler"),Oo=Symbol.for("react.provider"),_o=Symbol.for("react.context"),ma=Symbol.for("react.forward_ref"),di=Symbol.for("react.suspense"),pi=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),zo=Symbol.for("react.offscreen"),ol=Symbol.iterator;function wt(e){return e===null||typeof e!="object"?null:(e=ol&&e[ol]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Os;function Tt(e){if(Os===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Os=n&&n[1]||""}return`
`+Os+e}var _s=!1;function zs(e,n){if(!e||_s)return"";_s=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var r=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){r=p}e.call(n.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var s=p.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,u=i.length-1;1<=a&&0<=u&&s[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(s[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||s[a]!==i[u]){var o=`
`+s[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=u);break}}}finally{_s=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Tt(e):""}function yd(e){switch(e.tag){case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 2:case 15:return e=zs(e.type,!1),e;case 11:return e=zs(e.type.render,!1),e;case 1:return e=zs(e.type,!0),e;default:return""}}function fi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Jn:return"Portal";case ci:return"Profiler";case fa:return"StrictMode";case di:return"Suspense";case pi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _o:return(e.displayName||"Context")+".Consumer";case Oo:return(e._context.displayName||"Context")+".Provider";case ma:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ha:return n=e.displayName||null,n!==null?n:fi(e.type)||"Memo";case dn:n=e._payload,e=e._init;try{return fi(e(n))}catch{}}return null}function xd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fi(n);case 8:return n===fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bo(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vd(e){var n=Bo(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yr(e){e._valueTracker||(e._valueTracker=vd(e))}function Fo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Bo(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mi(e,n){var t=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ul(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Nn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Uo(e,n){n=n.checked,n!=null&&pa(e,"checked",n,!1)}function hi(e,n){Uo(e,n);var t=Nn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?gi(e,n.type,t):n.hasOwnProperty("defaultValue")&&gi(e,n.type,Nn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function cl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function gi(e,n,t){(n!=="number"||$r(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Rt=Array.isArray;function it(e,n,t,r){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Nn(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function yi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(N(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(N(92));if(Rt(t)){if(1<t.length)throw Error(N(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Nn(t)}}function Ho(e,n){var t=Nn(n.value),r=Nn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function pl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Wo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Wo(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,qo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $t(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sd=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(e){Sd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mt[n]=Mt[e]})});function $o(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mt.hasOwnProperty(e)&&Mt[e]?(""+n).trim():n+"px"}function Vo(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,s=$o(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,s):e[t]=s}}var bd=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(e,n){if(n){if(bd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(N(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(N(61))}if(n.style!=null&&typeof n.style!="object")throw Error(N(62))}}function Si(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=null;function ga(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ki=null,at=null,lt=null;function fl(e){if(e=pr(e)){if(typeof ki!="function")throw Error(N(280));var n=e.stateNode;n&&(n=ks(n),ki(e.stateNode,e.type,n))}}function Jo(e){at?lt?lt.push(e):lt=[e]:at=e}function Qo(){if(at){var e=at,n=lt;if(lt=at=null,fl(e),n)for(e=0;e<n.length;e++)fl(n[e])}}function Ko(e,n){return e(n)}function Go(){}var Bs=!1;function Yo(e,n,t){if(Bs)return e(n,t);Bs=!0;try{return Ko(e,n,t)}finally{Bs=!1,(at!==null||lt!==null)&&(Go(),Qo())}}function Vt(e,n){var t=e.stateNode;if(t===null)return null;var r=ks(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(N(231,n,typeof t));return t}var wi=!1;if(rn)try{var jt={};Object.defineProperty(jt,"passive",{get:function(){wi=!0}}),window.addEventListener("test",jt,jt),window.removeEventListener("test",jt,jt)}catch{wi=!1}function kd(e,n,t,r,s,i,a,u,o){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(h){this.onError(h)}}var Ot=!1,Vr=null,Jr=!1,ji=null,wd={onError:function(e){Ot=!0,Vr=e}};function jd(e,n,t,r,s,i,a,u,o){Ot=!1,Vr=null,kd.apply(wd,arguments)}function Cd(e,n,t,r,s,i,a,u,o){if(jd.apply(this,arguments),Ot){if(Ot){var p=Vr;Ot=!1,Vr=null}else throw Error(N(198));Jr||(Jr=!0,ji=p)}}function $n(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Xo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ml(e){if($n(e)!==e)throw Error(N(188))}function Nd(e){var n=e.alternate;if(!n){if(n=$n(e),n===null)throw Error(N(188));return n!==e?null:e}for(var t=e,r=n;;){var s=t.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){t=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===t)return ml(s),e;if(i===r)return ml(s),n;i=i.sibling}throw Error(N(188))}if(t.return!==r.return)t=s,r=i;else{for(var a=!1,u=s.child;u;){if(u===t){a=!0,t=s,r=i;break}if(u===r){a=!0,r=s,t=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===t){a=!0,t=i,r=s;break}if(u===r){a=!0,r=i,t=s;break}u=u.sibling}if(!a)throw Error(N(189))}}if(t.alternate!==r)throw Error(N(190))}if(t.tag!==3)throw Error(N(188));return t.stateNode.current===t?e:n}function Zo(e){return e=Nd(e),e!==null?eu(e):null}function eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=eu(e);if(n!==null)return n;e=e.sibling}return null}var nu=Ae.unstable_scheduleCallback,hl=Ae.unstable_cancelCallback,Id=Ae.unstable_shouldYield,Ed=Ae.unstable_requestPaint,ne=Ae.unstable_now,Pd=Ae.unstable_getCurrentPriorityLevel,ya=Ae.unstable_ImmediatePriority,tu=Ae.unstable_UserBlockingPriority,Qr=Ae.unstable_NormalPriority,Ad=Ae.unstable_LowPriority,ru=Ae.unstable_IdlePriority,xs=null,Ge=null;function Td(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(xs,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Dd,Rd=Math.log,Ld=Math.LN2;function Dd(e){return e>>>=0,e===0?32:31-(Rd(e)/Ld|0)|0}var vr=64,Sr=4194304;function Lt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var u=a&~s;u!==0?r=Lt(u):(i&=a,i!==0&&(r=Lt(i)))}else a=t&~s,a!==0?r=Lt(a):i!==0&&(r=Lt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&s)&&(s=r&-r,i=n&-n,s>=i||s===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-We(n),s=1<<t,r|=e[t],n&=~s;return r}function Md(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-We(i),u=1<<a,o=s[a];o===-1?(!(u&t)||u&r)&&(s[a]=Md(u,n)):o<=n&&(e.expiredLanes|=u),i&=~u}}function Ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function su(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Fs(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function cr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-We(n),e[n]=t}function _d(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-We(t),i=1<<s;n[s]=0,r[s]=-1,e[s]=-1,t&=~i}}function xa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-We(t),s=1<<r;s&n|e[r]&n&&(e[r]|=n),t&=~s}}var $=0;function iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var au,va,lu,ou,uu,Ni=!1,br=[],yn=null,xn=null,vn=null,Jt=new Map,Qt=new Map,fn=[],zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gl(e,n){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(n.pointerId)}}function Ct(e,n,t,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},n!==null&&(n=pr(n),n!==null&&va(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Bd(e,n,t,r,s){switch(n){case"focusin":return yn=Ct(yn,e,n,t,r,s),!0;case"dragenter":return xn=Ct(xn,e,n,t,r,s),!0;case"mouseover":return vn=Ct(vn,e,n,t,r,s),!0;case"pointerover":var i=s.pointerId;return Jt.set(i,Ct(Jt.get(i)||null,e,n,t,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Qt.set(i,Ct(Qt.get(i)||null,e,n,t,r,s)),!0}return!1}function cu(e){var n=Dn(e.target);if(n!==null){var t=$n(n);if(t!==null){if(n=t.tag,n===13){if(n=Xo(t),n!==null){e.blockedOn=n,uu(e.priority,function(){lu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ii(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);bi=r,t.target.dispatchEvent(r),bi=null}else return n=pr(t),n!==null&&va(n),e.blockedOn=t,!1;n.shift()}return!0}function yl(e,n,t){Dr(e)&&t.delete(n)}function Fd(){Ni=!1,yn!==null&&Dr(yn)&&(yn=null),xn!==null&&Dr(xn)&&(xn=null),vn!==null&&Dr(vn)&&(vn=null),Jt.forEach(yl),Qt.forEach(yl)}function Nt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ni||(Ni=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Fd)))}function Kt(e){function n(s){return Nt(s,e)}if(0<br.length){Nt(br[0],e);for(var t=1;t<br.length;t++){var r=br[t];r.blockedOn===e&&(r.blockedOn=null)}}for(yn!==null&&Nt(yn,e),xn!==null&&Nt(xn,e),vn!==null&&Nt(vn,e),Jt.forEach(n),Qt.forEach(n),t=0;t<fn.length;t++)r=fn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(t=fn[0],t.blockedOn===null);)cu(t),t.blockedOn===null&&fn.shift()}var ot=on.ReactCurrentBatchConfig,Gr=!0;function Ud(e,n,t,r){var s=$,i=ot.transition;ot.transition=null;try{$=1,Sa(e,n,t,r)}finally{$=s,ot.transition=i}}function Hd(e,n,t,r){var s=$,i=ot.transition;ot.transition=null;try{$=4,Sa(e,n,t,r)}finally{$=s,ot.transition=i}}function Sa(e,n,t,r){if(Gr){var s=Ii(e,n,t,r);if(s===null)Gs(e,n,r,Yr,t),gl(e,r);else if(Bd(s,e,n,t,r))r.stopPropagation();else if(gl(e,r),n&4&&-1<zd.indexOf(e)){for(;s!==null;){var i=pr(s);if(i!==null&&au(i),i=Ii(e,n,t,r),i===null&&Gs(e,n,r,Yr,t),i===s)break;s=i}s!==null&&r.stopPropagation()}else Gs(e,n,r,null,t)}}var Yr=null;function Ii(e,n,t,r){if(Yr=null,e=ga(r),e=Dn(e),e!==null)if(n=$n(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Xo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Yr=e,null}function du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pd()){case ya:return 1;case tu:return 4;case Qr:case Ad:return 16;case ru:return 536870912;default:return 16}default:return 16}}var hn=null,ba=null,Mr=null;function pu(){if(Mr)return Mr;var e,n=ba,t=n.length,r,s="value"in hn?hn.value:hn.textContent,i=s.length;for(e=0;e<t&&n[e]===s[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===s[i-r];r++);return Mr=s.slice(e,1<r?1-r:void 0)}function Or(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function xl(){return!1}function Re(e){function n(t,r,s,i,a){this._reactName=t,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?kr:xl,this.isPropagationStopped=xl,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),n}var St={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Re(St),dr=Z({},St,{view:0,detail:0}),Wd=Re(dr),Us,Hs,It,vs=Z({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==It&&(It&&e.type==="mousemove"?(Us=e.screenX-It.screenX,Hs=e.screenY-It.screenY):Hs=Us=0,It=e),Us)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),vl=Re(vs),qd=Z({},vs,{dataTransfer:0}),$d=Re(qd),Vd=Z({},dr,{relatedTarget:0}),Ws=Re(Vd),Jd=Z({},St,{animationName:0,elapsedTime:0,pseudoElement:0}),Qd=Re(Jd),Kd=Z({},St,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gd=Re(Kd),Yd=Z({},St,{data:0}),Sl=Re(Yd),Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function np(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ep[e])?!!n[e]:!1}function wa(){return np}var tp=Z({},dr,{key:function(e){if(e.key){var n=Xd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rp=Re(tp),sp=Z({},vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bl=Re(sp),ip=Z({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),ap=Re(ip),lp=Z({},St,{propertyName:0,elapsedTime:0,pseudoElement:0}),op=Re(lp),up=Z({},vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cp=Re(up),dp=[9,13,27,32],ja=rn&&"CompositionEvent"in window,_t=null;rn&&"documentMode"in document&&(_t=document.documentMode);var pp=rn&&"TextEvent"in window&&!_t,fu=rn&&(!ja||_t&&8<_t&&11>=_t),kl=" ",wl=!1;function mu(e,n){switch(e){case"keyup":return dp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function fp(e,n){switch(e){case"compositionend":return hu(n);case"keypress":return n.which!==32?null:(wl=!0,kl);case"textInput":return e=n.data,e===kl&&wl?null:e;default:return null}}function mp(e,n){if(Kn)return e==="compositionend"||!ja&&mu(e,n)?(e=pu(),Mr=ba=hn=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fu&&n.locale!=="ko"?null:n.data;default:return null}}var hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hp[e.type]:n==="textarea"}function gu(e,n,t,r){Jo(r),n=Xr(n,"onChange"),0<n.length&&(t=new ka("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var zt=null,Gt=null;function gp(e){Iu(e,0)}function Ss(e){var n=Xn(e);if(Fo(n))return e}function yp(e,n){if(e==="change")return n}var yu=!1;if(rn){var qs;if(rn){var $s="oninput"in document;if(!$s){var Cl=document.createElement("div");Cl.setAttribute("oninput","return;"),$s=typeof Cl.oninput=="function"}qs=$s}else qs=!1;yu=qs&&(!document.documentMode||9<document.documentMode)}function Nl(){zt&&(zt.detachEvent("onpropertychange",xu),Gt=zt=null)}function xu(e){if(e.propertyName==="value"&&Ss(Gt)){var n=[];gu(n,Gt,e,ga(e)),Yo(gp,n)}}function xp(e,n,t){e==="focusin"?(Nl(),zt=n,Gt=t,zt.attachEvent("onpropertychange",xu)):e==="focusout"&&Nl()}function vp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(Gt)}function Sp(e,n){if(e==="click")return Ss(n)}function bp(e,n){if(e==="input"||e==="change")return Ss(n)}function kp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $e=typeof Object.is=="function"?Object.is:kp;function Yt(e,n){if($e(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var s=t[r];if(!ui.call(n,s)||!$e(e[s],n[s]))return!1}return!0}function Il(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function El(e,n){var t=Il(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Il(t)}}function vu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Su(){for(var e=window,n=$r();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=$r(e.document)}return n}function Ca(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function wp(e){var n=Su(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&vu(t.ownerDocument.documentElement,t)){if(r!==null&&Ca(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=El(t,i);var a=El(t,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jp=rn&&"documentMode"in document&&11>=document.documentMode,Gn=null,Ei=null,Bt=null,Pi=!1;function Pl(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pi||Gn==null||Gn!==$r(r)||(r=Gn,"selectionStart"in r&&Ca(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bt&&Yt(Bt,r)||(Bt=r,r=Xr(Ei,"onSelect"),0<r.length&&(n=new ka("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Gn)))}function wr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Yn={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Vs={},bu={};rn&&(bu=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function bs(e){if(Vs[e])return Vs[e];if(!Yn[e])return e;var n=Yn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in bu)return Vs[e]=n[t];return e}var ku=bs("animationend"),wu=bs("animationiteration"),ju=bs("animationstart"),Cu=bs("transitionend"),Nu=new Map,Al="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,n){Nu.set(e,n),qn(n,[e])}for(var Js=0;Js<Al.length;Js++){var Qs=Al[Js],Cp=Qs.toLowerCase(),Np=Qs[0].toUpperCase()+Qs.slice(1);Pn(Cp,"on"+Np)}Pn(ku,"onAnimationEnd");Pn(wu,"onAnimationIteration");Pn(ju,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Cu,"onTransitionEnd");dt("onMouseEnter",["mouseout","mouseover"]);dt("onMouseLeave",["mouseout","mouseover"]);dt("onPointerEnter",["pointerout","pointerover"]);dt("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dt));function Tl(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Cd(r,n,void 0,e),e.currentTarget=null}function Iu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],s=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var u=r[a],o=u.instance,p=u.currentTarget;if(u=u.listener,o!==i&&s.isPropagationStopped())break e;Tl(s,u,p),i=o}else for(a=0;a<r.length;a++){if(u=r[a],o=u.instance,p=u.currentTarget,u=u.listener,o!==i&&s.isPropagationStopped())break e;Tl(s,u,p),i=o}}}if(Jr)throw e=ji,Jr=!1,ji=null,e}function Q(e,n){var t=n[Di];t===void 0&&(t=n[Di]=new Set);var r=e+"__bubble";t.has(r)||(Eu(n,e,2,!1),t.add(r))}function Ks(e,n,t){var r=0;n&&(r|=4),Eu(t,e,r,n)}var jr="_reactListening"+Math.random().toString(36).slice(2);function Xt(e){if(!e[jr]){e[jr]=!0,Mo.forEach(function(t){t!=="selectionchange"&&(Ip.has(t)||Ks(t,!1,e),Ks(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jr]||(n[jr]=!0,Ks("selectionchange",!1,n))}}function Eu(e,n,t,r){switch(du(n)){case 1:var s=Ud;break;case 4:s=Hd;break;default:s=Sa}t=s.bind(null,n,t,e),s=void 0,!wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function Gs(e,n,t,r,s){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===s||o.nodeType===8&&o.parentNode===s))return;a=a.return}for(;u!==null;){if(a=Dn(u),a===null)return;if(o=a.tag,o===5||o===6){r=i=a;continue e}u=u.parentNode}}r=r.return}Yo(function(){var p=i,h=ga(t),g=[];e:{var f=Nu.get(e);if(f!==void 0){var y=ka,v=e;switch(e){case"keypress":if(Or(t)===0)break e;case"keydown":case"keyup":y=rp;break;case"focusin":v="focus",y=Ws;break;case"focusout":v="blur",y=Ws;break;case"beforeblur":case"afterblur":y=Ws;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=vl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=$d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ap;break;case ku:case wu:case ju:y=Qd;break;case Cu:y=op;break;case"scroll":y=Wd;break;case"wheel":y=cp;break;case"copy":case"cut":case"paste":y=Gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=bl}var S=(n&4)!==0,M=!S&&e==="scroll",d=S?f!==null?f+"Capture":null:f;S=[];for(var c=p,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,d!==null&&(x=Vt(c,d),x!=null&&S.push(Zt(c,x,m)))),M)break;c=c.return}0<S.length&&(f=new y(f,v,null,t,h),g.push({event:f,listeners:S}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&t!==bi&&(v=t.relatedTarget||t.fromElement)&&(Dn(v)||v[sn]))break e;if((y||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=p,v=v?Dn(v):null,v!==null&&(M=$n(v),v!==M||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=p),y!==v)){if(S=vl,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=bl,x="onPointerLeave",d="onPointerEnter",c="pointer"),M=y==null?f:Xn(y),m=v==null?f:Xn(v),f=new S(x,c+"leave",y,t,h),f.target=M,f.relatedTarget=m,x=null,Dn(h)===p&&(S=new S(d,c+"enter",v,t,h),S.target=m,S.relatedTarget=M,x=S),M=x,y&&v)n:{for(S=y,d=v,c=0,m=S;m;m=Vn(m))c++;for(m=0,x=d;x;x=Vn(x))m++;for(;0<c-m;)S=Vn(S),c--;for(;0<m-c;)d=Vn(d),m--;for(;c--;){if(S===d||d!==null&&S===d.alternate)break n;S=Vn(S),d=Vn(d)}S=null}else S=null;y!==null&&Rl(g,f,y,S,!1),v!==null&&M!==null&&Rl(g,M,v,S,!0)}}e:{if(f=p?Xn(p):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var C=yp;else if(jl(f))if(yu)C=bp;else{C=vp;var j=xp}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Sp);if(C&&(C=C(e,p))){gu(g,C,t,h);break e}j&&j(e,f,p),e==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&gi(f,"number",f.value)}switch(j=p?Xn(p):window,e){case"focusin":(jl(j)||j.contentEditable==="true")&&(Gn=j,Ei=p,Bt=null);break;case"focusout":Bt=Ei=Gn=null;break;case"mousedown":Pi=!0;break;case"contextmenu":case"mouseup":case"dragend":Pi=!1,Pl(g,t,h);break;case"selectionchange":if(jp)break;case"keydown":case"keyup":Pl(g,t,h)}var I;if(ja)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Kn?mu(e,t)&&(b="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(fu&&t.locale!=="ko"&&(Kn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Kn&&(I=pu()):(hn=h,ba="value"in hn?hn.value:hn.textContent,Kn=!0)),j=Xr(p,b),0<j.length&&(b=new Sl(b,e,null,t,h),g.push({event:b,listeners:j}),I?b.data=I:(I=hu(t),I!==null&&(b.data=I)))),(I=pp?fp(e,t):mp(e,t))&&(p=Xr(p,"onBeforeInput"),0<p.length&&(h=new Sl("onBeforeInput","beforeinput",null,t,h),g.push({event:h,listeners:p}),h.data=I))}Iu(g,n)})}function Zt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xr(e,n){for(var t=n+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Vt(e,t),i!=null&&r.unshift(Zt(e,i,s)),i=Vt(e,n),i!=null&&r.push(Zt(e,i,s))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rl(e,n,t,r,s){for(var i=n._reactName,a=[];t!==null&&t!==r;){var u=t,o=u.alternate,p=u.stateNode;if(o!==null&&o===r)break;u.tag===5&&p!==null&&(u=p,s?(o=Vt(t,i),o!=null&&a.unshift(Zt(t,o,u))):s||(o=Vt(t,i),o!=null&&a.push(Zt(t,o,u)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Ep=/\r\n?/g,Pp=/\u0000|\uFFFD/g;function Ll(e){return(typeof e=="string"?e:""+e).replace(Ep,`
`).replace(Pp,"")}function Cr(e,n,t){if(n=Ll(n),Ll(e)!==n&&t)throw Error(N(425))}function Zr(){}var Ai=null,Ti=null;function Ri(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Li=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,Dl=typeof Promise=="function"?Promise:void 0,Tp=typeof queueMicrotask=="function"?queueMicrotask:typeof Dl<"u"?function(e){return Dl.resolve(null).then(e).catch(Rp)}:Li;function Rp(e){setTimeout(function(){throw e})}function Ys(e,n){var t=n,r=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(r===0){e.removeChild(s),Kt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=s}while(t);Kt(n)}function Sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ml(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var bt=Math.random().toString(36).slice(2),Ke="__reactFiber$"+bt,er="__reactProps$"+bt,sn="__reactContainer$"+bt,Di="__reactEvents$"+bt,Lp="__reactListeners$"+bt,Dp="__reactHandles$"+bt;function Dn(e){var n=e[Ke];if(n)return n;for(var t=e.parentNode;t;){if(n=t[sn]||t[Ke]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ml(e);e!==null;){if(t=e[Ke])return t;e=Ml(e)}return n}e=t,t=e.parentNode}return null}function pr(e){return e=e[Ke]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ks(e){return e[er]||null}var Mi=[],Zn=-1;function An(e){return{current:e}}function K(e){0>Zn||(e.current=Mi[Zn],Mi[Zn]=null,Zn--)}function J(e,n){Zn++,Mi[Zn]=e.current,e.current=n}var In={},me=An(In),we=An(!1),Bn=In;function pt(e,n){var t=e.type.contextTypes;if(!t)return In;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in t)s[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function je(e){return e=e.childContextTypes,e!=null}function es(){K(we),K(me)}function Ol(e,n,t){if(me.current!==In)throw Error(N(168));J(me,n),J(we,t)}function Pu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var s in r)if(!(s in n))throw Error(N(108,xd(e)||"Unknown",s));return Z({},t,r)}function ns(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Bn=me.current,J(me,e),J(we,we.current),!0}function _l(e,n,t){var r=e.stateNode;if(!r)throw Error(N(169));t?(e=Pu(e,n,Bn),r.__reactInternalMemoizedMergedChildContext=e,K(we),K(me),J(me,e)):K(we),J(we,t)}var Ze=null,ws=!1,Xs=!1;function Au(e){Ze===null?Ze=[e]:Ze.push(e)}function Mp(e){ws=!0,Au(e)}function Tn(){if(!Xs&&Ze!==null){Xs=!0;var e=0,n=$;try{var t=Ze;for($=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ze=null,ws=!1}catch(s){throw Ze!==null&&(Ze=Ze.slice(e+1)),nu(ya,Tn),s}finally{$=n,Xs=!1}}return null}var et=[],nt=0,ts=null,rs=0,Le=[],De=0,Fn=null,en=1,nn="";function Rn(e,n){et[nt++]=rs,et[nt++]=ts,ts=e,rs=n}function Tu(e,n,t){Le[De++]=en,Le[De++]=nn,Le[De++]=Fn,Fn=e;var r=en;e=nn;var s=32-We(r)-1;r&=~(1<<s),t+=1;var i=32-We(n)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,en=1<<32-We(n)+s|t<<s|r,nn=i+e}else en=1<<i|t<<s|r,nn=e}function Na(e){e.return!==null&&(Rn(e,1),Tu(e,1,0))}function Ia(e){for(;e===ts;)ts=et[--nt],et[nt]=null,rs=et[--nt],et[nt]=null;for(;e===Fn;)Fn=Le[--De],Le[De]=null,nn=Le[--De],Le[De]=null,en=Le[--De],Le[De]=null}var Pe=null,Ee=null,G=!1,He=null;function Ru(e,n){var t=Me(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function zl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Pe=e,Ee=Sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Pe=e,Ee=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Fn!==null?{id:en,overflow:nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Me(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Pe=e,Ee=null,!0):!1;default:return!1}}function Oi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(G){var n=Ee;if(n){var t=n;if(!zl(e,n)){if(Oi(e))throw Error(N(418));n=Sn(t.nextSibling);var r=Pe;n&&zl(e,n)?Ru(r,t):(e.flags=e.flags&-4097|2,G=!1,Pe=e)}}else{if(Oi(e))throw Error(N(418));e.flags=e.flags&-4097|2,G=!1,Pe=e}}}function Bl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Nr(e){if(e!==Pe)return!1;if(!G)return Bl(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ri(e.type,e.memoizedProps)),n&&(n=Ee)){if(Oi(e))throw Lu(),Error(N(418));for(;n;)Ru(e,n),n=Sn(n.nextSibling)}if(Bl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ee=Sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ee=null}}else Ee=Pe?Sn(e.stateNode.nextSibling):null;return!0}function Lu(){for(var e=Ee;e;)e=Sn(e.nextSibling)}function ft(){Ee=Pe=null,G=!1}function Ea(e){He===null?He=[e]:He.push(e)}var Op=on.ReactCurrentBatchConfig;function Et(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(N(309));var r=t.stateNode}if(!r)throw Error(N(147,e));var s=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var u=s.refs;a===null?delete u[i]:u[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(N(284));if(!t._owner)throw Error(N(290,e))}return e}function Ir(e,n){throw e=Object.prototype.toString.call(n),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Fl(e){var n=e._init;return n(e._payload)}function Du(e){function n(d,c){if(e){var m=d.deletions;m===null?(d.deletions=[c],d.flags|=16):m.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function s(d,c){return d=jn(d,c),d.index=0,d.sibling=null,d}function i(d,c,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<c?(d.flags|=2,c):m):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,c,m,x){return c===null||c.tag!==6?(c=ii(m,d.mode,x),c.return=d,c):(c=s(c,m),c.return=d,c)}function o(d,c,m,x){var C=m.type;return C===Qn?h(d,c,m.props.children,x,m.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&Fl(C)===c.type)?(x=s(c,m.props),x.ref=Et(d,c,m),x.return=d,x):(x=Wr(m.type,m.key,m.props,null,d.mode,x),x.ref=Et(d,c,m),x.return=d,x)}function p(d,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=ai(m,d.mode,x),c.return=d,c):(c=s(c,m.children||[]),c.return=d,c)}function h(d,c,m,x,C){return c===null||c.tag!==7?(c=zn(m,d.mode,x,C),c.return=d,c):(c=s(c,m),c.return=d,c)}function g(d,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ii(""+c,d.mode,m),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return m=Wr(c.type,c.key,c.props,null,d.mode,m),m.ref=Et(d,null,c),m.return=d,m;case Jn:return c=ai(c,d.mode,m),c.return=d,c;case dn:var x=c._init;return g(d,x(c._payload),m)}if(Rt(c)||wt(c))return c=zn(c,d.mode,m,null),c.return=d,c;Ir(d,c)}return null}function f(d,c,m,x){var C=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:u(d,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:return m.key===C?o(d,c,m,x):null;case Jn:return m.key===C?p(d,c,m,x):null;case dn:return C=m._init,f(d,c,C(m._payload),x)}if(Rt(m)||wt(m))return C!==null?null:h(d,c,m,x,null);Ir(d,m)}return null}function y(d,c,m,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(m)||null,u(c,d,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case gr:return d=d.get(x.key===null?m:x.key)||null,o(c,d,x,C);case Jn:return d=d.get(x.key===null?m:x.key)||null,p(c,d,x,C);case dn:var j=x._init;return y(d,c,m,j(x._payload),C)}if(Rt(x)||wt(x))return d=d.get(m)||null,h(c,d,x,C,null);Ir(c,x)}return null}function v(d,c,m,x){for(var C=null,j=null,I=c,b=c=0,E=null;I!==null&&b<m.length;b++){I.index>b?(E=I,I=null):E=I.sibling;var A=f(d,I,m[b],x);if(A===null){I===null&&(I=E);break}e&&I&&A.alternate===null&&n(d,I),c=i(A,c,b),j===null?C=A:j.sibling=A,j=A,I=E}if(b===m.length)return t(d,I),G&&Rn(d,b),C;if(I===null){for(;b<m.length;b++)I=g(d,m[b],x),I!==null&&(c=i(I,c,b),j===null?C=I:j.sibling=I,j=I);return G&&Rn(d,b),C}for(I=r(d,I);b<m.length;b++)E=y(I,d,b,m[b],x),E!==null&&(e&&E.alternate!==null&&I.delete(E.key===null?b:E.key),c=i(E,c,b),j===null?C=E:j.sibling=E,j=E);return e&&I.forEach(function(U){return n(d,U)}),G&&Rn(d,b),C}function S(d,c,m,x){var C=wt(m);if(typeof C!="function")throw Error(N(150));if(m=C.call(m),m==null)throw Error(N(151));for(var j=C=null,I=c,b=c=0,E=null,A=m.next();I!==null&&!A.done;b++,A=m.next()){I.index>b?(E=I,I=null):E=I.sibling;var U=f(d,I,A.value,x);if(U===null){I===null&&(I=E);break}e&&I&&U.alternate===null&&n(d,I),c=i(U,c,b),j===null?C=U:j.sibling=U,j=U,I=E}if(A.done)return t(d,I),G&&Rn(d,b),C;if(I===null){for(;!A.done;b++,A=m.next())A=g(d,A.value,x),A!==null&&(c=i(A,c,b),j===null?C=A:j.sibling=A,j=A);return G&&Rn(d,b),C}for(I=r(d,I);!A.done;b++,A=m.next())A=y(I,d,b,A.value,x),A!==null&&(e&&A.alternate!==null&&I.delete(A.key===null?b:A.key),c=i(A,c,b),j===null?C=A:j.sibling=A,j=A);return e&&I.forEach(function(W){return n(d,W)}),G&&Rn(d,b),C}function M(d,c,m,x){if(typeof m=="object"&&m!==null&&m.type===Qn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:e:{for(var C=m.key,j=c;j!==null;){if(j.key===C){if(C=m.type,C===Qn){if(j.tag===7){t(d,j.sibling),c=s(j,m.props.children),c.return=d,d=c;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&Fl(C)===j.type){t(d,j.sibling),c=s(j,m.props),c.ref=Et(d,j,m),c.return=d,d=c;break e}t(d,j);break}else n(d,j);j=j.sibling}m.type===Qn?(c=zn(m.props.children,d.mode,x,m.key),c.return=d,d=c):(x=Wr(m.type,m.key,m.props,null,d.mode,x),x.ref=Et(d,c,m),x.return=d,d=x)}return a(d);case Jn:e:{for(j=m.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){t(d,c.sibling),c=s(c,m.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=ai(m,d.mode,x),c.return=d,d=c}return a(d);case dn:return j=m._init,M(d,c,j(m._payload),x)}if(Rt(m))return v(d,c,m,x);if(wt(m))return S(d,c,m,x);Ir(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(t(d,c.sibling),c=s(c,m),c.return=d,d=c):(t(d,c),c=ii(m,d.mode,x),c.return=d,d=c),a(d)):t(d,c)}return M}var mt=Du(!0),Mu=Du(!1),ss=An(null),is=null,tt=null,Pa=null;function Aa(){Pa=tt=is=null}function Ta(e){var n=ss.current;K(ss),e._currentValue=n}function zi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ut(e,n){is=e,Pa=tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ke=!0),e.firstContext=null)}function _e(e){var n=e._currentValue;if(Pa!==e)if(e={context:e,memoizedValue:n,next:null},tt===null){if(is===null)throw Error(N(308));tt=e,is.dependencies={lanes:0,firstContext:e}}else tt=tt.next=e;return n}var Mn=null;function Ra(e){Mn===null?Mn=[e]:Mn.push(e)}function Ou(e,n,t,r){var s=n.interleaved;return s===null?(t.next=t,Ra(n)):(t.next=s.next,s.next=t),n.interleaved=t,an(e,r)}function an(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var pn=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function bn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var s=r.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n,an(e,t)}return s=r.interleaved,s===null?(n.next=n,Ra(r)):(n.next=s.next,s.next=n),r.interleaved=n,an(e,t)}function _r(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,xa(e,t)}}function Ul(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var s=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?s=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?s=i=n:i=i.next=n}else s=i=n;t={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function as(e,n,t,r){var s=e.updateQueue;pn=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var o=u,p=o.next;o.next=null,a===null?i=p:a.next=p,a=o;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==a&&(u===null?h.firstBaseUpdate=p:u.next=p,h.lastBaseUpdate=o))}if(i!==null){var g=s.baseState;a=0,h=p=o=null,u=i;do{var f=u.lane,y=u.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var v=e,S=u;switch(f=n,y=t,S.tag){case 1:if(v=S.payload,typeof v=="function"){g=v.call(y,g,f);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,f=typeof v=="function"?v.call(y,g,f):v,f==null)break e;g=Z({},g,f);break e;case 2:pn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[u]:f.push(u))}else y={eventTime:y,lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(p=h=y,o=g):h=h.next=y,a|=f;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;f=u,u=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(o=g),s.baseState=o,s.firstBaseUpdate=p,s.lastBaseUpdate=h,n=s.shared.interleaved,n!==null){s=n;do a|=s.lane,s=s.next;while(s!==n)}else i===null&&(s.shared.lanes=0);Hn|=a,e.lanes=a,e.memoizedState=g}}function Hl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],s=r.callback;if(s!==null){if(r.callback=null,r=t,typeof s!="function")throw Error(N(191,s));s.call(r)}}}var fr={},Ye=An(fr),nr=An(fr),tr=An(fr);function On(e){if(e===fr)throw Error(N(174));return e}function Da(e,n){switch(J(tr,n),J(nr,e),J(Ye,fr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=xi(n,e)}K(Ye),J(Ye,n)}function ht(){K(Ye),K(nr),K(tr)}function zu(e){On(tr.current);var n=On(Ye.current),t=xi(n,e.type);n!==t&&(J(nr,e),J(Ye,t))}function Ma(e){nr.current===e&&(K(Ye),K(nr))}var Y=An(0);function ls(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zs=[];function Oa(){for(var e=0;e<Zs.length;e++)Zs[e]._workInProgressVersionPrimary=null;Zs.length=0}var zr=on.ReactCurrentDispatcher,ei=on.ReactCurrentBatchConfig,Un=0,X=null,re=null,ie=null,os=!1,Ft=!1,rr=0,_p=0;function de(){throw Error(N(321))}function _a(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!$e(e[t],n[t]))return!1;return!0}function za(e,n,t,r,s,i){if(Un=i,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,zr.current=e===null||e.memoizedState===null?Up:Hp,e=t(r,s),Ft){i=0;do{if(Ft=!1,rr=0,25<=i)throw Error(N(301));i+=1,ie=re=null,n.updateQueue=null,zr.current=Wp,e=t(r,s)}while(Ft)}if(zr.current=us,n=re!==null&&re.next!==null,Un=0,ie=re=X=null,os=!1,n)throw Error(N(300));return e}function Ba(){var e=rr!==0;return rr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function ze(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var n=ie===null?X.memoizedState:ie.next;if(n!==null)ie=n,re=e;else{if(e===null)throw Error(N(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function sr(e,n){return typeof n=="function"?n(e):n}function ni(e){var n=ze(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=re,s=r.baseQueue,i=t.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,t.pending=null}if(s!==null){i=s.next,r=r.baseState;var u=a=null,o=null,p=i;do{var h=p.lane;if((Un&h)===h)o!==null&&(o=o.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var g={lane:h,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};o===null?(u=o=g,a=r):o=o.next=g,X.lanes|=h,Hn|=h}p=p.next}while(p!==null&&p!==i);o===null?a=r:o.next=u,$e(r,n.memoizedState)||(ke=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=o,t.lastRenderedState=r}if(e=t.interleaved,e!==null){s=e;do i=s.lane,X.lanes|=i,Hn|=i,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ti(e){var n=ze(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=t.dispatch,s=t.pending,i=n.memoizedState;if(s!==null){t.pending=null;var a=s=s.next;do i=e(i,a.action),a=a.next;while(a!==s);$e(i,n.memoizedState)||(ke=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Bu(){}function Fu(e,n){var t=X,r=ze(),s=n(),i=!$e(r.memoizedState,s);if(i&&(r.memoizedState=s,ke=!0),r=r.queue,Fa(Wu.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ie!==null&&ie.memoizedState.tag&1){if(t.flags|=2048,ir(9,Hu.bind(null,t,r,s,n),void 0,null),ae===null)throw Error(N(349));Un&30||Uu(t,n,s)}return s}function Uu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Hu(e,n,t,r){n.value=t,n.getSnapshot=r,qu(n)&&$u(e)}function Wu(e,n,t){return t(function(){qu(n)&&$u(e)})}function qu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!$e(e,t)}catch{return!0}}function $u(e){var n=an(e,1);n!==null&&qe(n,e,1,-1)}function Wl(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},n.queue=e,e=e.dispatch=Fp.bind(null,X,e),[n.memoizedState,e]}function ir(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Vu(){return ze().memoizedState}function Br(e,n,t,r){var s=Qe();X.flags|=e,s.memoizedState=ir(1|n,t,void 0,r===void 0?null:r)}function js(e,n,t,r){var s=ze();r=r===void 0?null:r;var i=void 0;if(re!==null){var a=re.memoizedState;if(i=a.destroy,r!==null&&_a(r,a.deps)){s.memoizedState=ir(n,t,i,r);return}}X.flags|=e,s.memoizedState=ir(1|n,t,i,r)}function ql(e,n){return Br(8390656,8,e,n)}function Fa(e,n){return js(2048,8,e,n)}function Ju(e,n){return js(4,2,e,n)}function Qu(e,n){return js(4,4,e,n)}function Ku(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gu(e,n,t){return t=t!=null?t.concat([e]):null,js(4,4,Ku.bind(null,n,e),t)}function Ua(){}function Yu(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&_a(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Xu(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&_a(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Zu(e,n,t){return Un&21?($e(t,n)||(t=su(),X.lanes|=t,Hn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=t)}function zp(e,n){var t=$;$=t!==0&&4>t?t:4,e(!0);var r=ei.transition;ei.transition={};try{e(!1),n()}finally{$=t,ei.transition=r}}function ec(){return ze().memoizedState}function Bp(e,n,t){var r=wn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},nc(e))tc(n,t);else if(t=Ou(e,n,t,r),t!==null){var s=ye();qe(t,e,r,s),rc(t,n,r)}}function Fp(e,n,t){var r=wn(e),s={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(nc(e))tc(n,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,u=i(a,t);if(s.hasEagerState=!0,s.eagerState=u,$e(u,a)){var o=n.interleaved;o===null?(s.next=s,Ra(n)):(s.next=o.next,o.next=s),n.interleaved=s;return}}catch{}finally{}t=Ou(e,n,s,r),t!==null&&(s=ye(),qe(t,e,r,s),rc(t,n,r))}}function nc(e){var n=e.alternate;return e===X||n!==null&&n===X}function tc(e,n){Ft=os=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function rc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,xa(e,t)}}var us={readContext:_e,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Up={readContext:_e,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:_e,useEffect:ql,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Br(4194308,4,Ku.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Br(4194308,4,e,n)},useInsertionEffect:function(e,n){return Br(4,2,e,n)},useMemo:function(e,n){var t=Qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Qe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Bp.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:Wl,useDebugValue:Ua,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Wl(!1),n=e[0];return e=zp.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=X,s=Qe();if(G){if(t===void 0)throw Error(N(407));t=t()}else{if(t=n(),ae===null)throw Error(N(349));Un&30||Uu(r,n,t)}s.memoizedState=t;var i={value:t,getSnapshot:n};return s.queue=i,ql(Wu.bind(null,r,i,e),[e]),r.flags|=2048,ir(9,Hu.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Qe(),n=ae.identifierPrefix;if(G){var t=nn,r=en;t=(r&~(1<<32-We(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=rr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=_p++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Hp={readContext:_e,useCallback:Yu,useContext:_e,useEffect:Fa,useImperativeHandle:Gu,useInsertionEffect:Ju,useLayoutEffect:Qu,useMemo:Xu,useReducer:ni,useRef:Vu,useState:function(){return ni(sr)},useDebugValue:Ua,useDeferredValue:function(e){var n=ze();return Zu(n,re.memoizedState,e)},useTransition:function(){var e=ni(sr)[0],n=ze().memoizedState;return[e,n]},useMutableSource:Bu,useSyncExternalStore:Fu,useId:ec,unstable_isNewReconciler:!1},Wp={readContext:_e,useCallback:Yu,useContext:_e,useEffect:Fa,useImperativeHandle:Gu,useInsertionEffect:Ju,useLayoutEffect:Qu,useMemo:Xu,useReducer:ti,useRef:Vu,useState:function(){return ti(sr)},useDebugValue:Ua,useDeferredValue:function(e){var n=ze();return re===null?n.memoizedState=e:Zu(n,re.memoizedState,e)},useTransition:function(){var e=ti(sr)[0],n=ze().memoizedState;return[e,n]},useMutableSource:Bu,useSyncExternalStore:Fu,useId:ec,unstable_isNewReconciler:!1};function Fe(e,n){if(e&&e.defaultProps){n=Z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Bi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Cs={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ye(),s=wn(e),i=tn(r,s);i.payload=n,t!=null&&(i.callback=t),n=bn(e,i,s),n!==null&&(qe(n,e,s,r),_r(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ye(),s=wn(e),i=tn(r,s);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=bn(e,i,s),n!==null&&(qe(n,e,s,r),_r(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),r=wn(e),s=tn(t,r);s.tag=2,n!=null&&(s.callback=n),n=bn(e,s,r),n!==null&&(qe(n,e,r,t),_r(n,e,r))}};function $l(e,n,t,r,s,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!Yt(t,r)||!Yt(s,i):!0}function sc(e,n,t){var r=!1,s=In,i=n.contextType;return typeof i=="object"&&i!==null?i=_e(i):(s=je(n)?Bn:me.current,r=n.contextTypes,i=(r=r!=null)?pt(e,s):In),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Cs,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),n}function Vl(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Cs.enqueueReplaceState(n,n.state,null)}function Fi(e,n,t,r){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},La(e);var i=n.contextType;typeof i=="object"&&i!==null?s.context=_e(i):(i=je(n)?Bn:me.current,s.context=pt(e,i)),s.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Bi(e,n,i,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Cs.enqueueReplaceState(s,s.state,null),as(e,t,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function gt(e,n){try{var t="",r=n;do t+=yd(r),r=r.return;while(r);var s=t}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:s,digest:null}}function ri(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ui(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var qp=typeof WeakMap=="function"?WeakMap:Map;function ic(e,n,t){t=tn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ds||(ds=!0,Yi=r),Ui(e,n)},t}function ac(e,n,t){t=tn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;t.payload=function(){return r(s)},t.callback=function(){Ui(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ui(e,n),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Jl(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new qp;var s=new Set;r.set(n,s)}else s=r.get(n),s===void 0&&(s=new Set,r.set(n,s));s.has(t)||(s.add(t),e=sf.bind(null,e,n,t),n.then(e,e))}function Ql(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Kl(e,n,t,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=tn(-1,1),n.tag=2,bn(t,n,1))),t.lanes|=1),e)}var $p=on.ReactCurrentOwner,ke=!1;function ge(e,n,t,r){n.child=e===null?Mu(n,null,t,r):mt(n,e.child,t,r)}function Gl(e,n,t,r,s){t=t.render;var i=n.ref;return ut(n,s),r=za(e,n,t,r,i,s),t=Ba(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,ln(e,n,s)):(G&&t&&Na(n),n.flags|=1,ge(e,n,r,s),n.child)}function Yl(e,n,t,r,s){if(e===null){var i=t.type;return typeof i=="function"&&!Ka(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,lc(e,n,i,r,s)):(e=Wr(t.type,null,r,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&s)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Yt,t(a,r)&&e.ref===n.ref)return ln(e,n,s)}return n.flags|=1,e=jn(i,r),e.ref=n.ref,e.return=n,n.child=e}function lc(e,n,t,r,s){if(e!==null){var i=e.memoizedProps;if(Yt(i,r)&&e.ref===n.ref)if(ke=!1,n.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(ke=!0);else return n.lanes=e.lanes,ln(e,n,s)}return Hi(e,n,t,r,s)}function oc(e,n,t){var r=n.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(st,Ie),Ie|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,J(st,Ie),Ie|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,J(st,Ie),Ie|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,J(st,Ie),Ie|=r;return ge(e,n,s,t),n.child}function uc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Hi(e,n,t,r,s){var i=je(t)?Bn:me.current;return i=pt(n,i),ut(n,s),t=za(e,n,t,r,i,s),r=Ba(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,ln(e,n,s)):(G&&r&&Na(n),n.flags|=1,ge(e,n,t,s),n.child)}function Xl(e,n,t,r,s){if(je(t)){var i=!0;ns(n)}else i=!1;if(ut(n,s),n.stateNode===null)Fr(e,n),sc(n,t,r),Fi(n,t,r,s),r=!0;else if(e===null){var a=n.stateNode,u=n.memoizedProps;a.props=u;var o=a.context,p=t.contextType;typeof p=="object"&&p!==null?p=_e(p):(p=je(t)?Bn:me.current,p=pt(n,p));var h=t.getDerivedStateFromProps,g=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||o!==p)&&Vl(n,a,r,p),pn=!1;var f=n.memoizedState;a.state=f,as(n,r,a,s),o=n.memoizedState,u!==r||f!==o||we.current||pn?(typeof h=="function"&&(Bi(n,t,h,r),o=n.memoizedState),(u=pn||$l(n,t,u,r,f,o,p))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=o),a.props=r,a.state=o,a.context=p,r=u):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,_u(e,n),u=n.memoizedProps,p=n.type===n.elementType?u:Fe(n.type,u),a.props=p,g=n.pendingProps,f=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=_e(o):(o=je(t)?Bn:me.current,o=pt(n,o));var y=t.getDerivedStateFromProps;(h=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==g||f!==o)&&Vl(n,a,r,o),pn=!1,f=n.memoizedState,a.state=f,as(n,r,a,s);var v=n.memoizedState;u!==g||f!==v||we.current||pn?(typeof y=="function"&&(Bi(n,t,y,r),v=n.memoizedState),(p=pn||$l(n,t,p,r,f,v,o)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),a.props=r,a.state=v,a.context=o,r=p):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return Wi(e,n,t,r,i,s)}function Wi(e,n,t,r,s,i){uc(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return s&&_l(n,t,!1),ln(e,n,i);r=n.stateNode,$p.current=n;var u=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=mt(n,e.child,null,i),n.child=mt(n,null,u,i)):ge(e,n,u,i),n.memoizedState=r.state,s&&_l(n,t,!0),n.child}function cc(e){var n=e.stateNode;n.pendingContext?Ol(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ol(e,n.context,!1),Da(e,n.containerInfo)}function Zl(e,n,t,r,s){return ft(),Ea(s),n.flags|=256,ge(e,n,t,r),n.child}var qi={dehydrated:null,treeContext:null,retryLane:0};function $i(e){return{baseLanes:e,cachePool:null,transitions:null}}function dc(e,n,t){var r=n.pendingProps,s=Y.current,i=!1,a=(n.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(s&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),J(Y,s&1),e===null)return _i(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Es(a,r,0,null),e=zn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=$i(t),n.memoizedState=qi,e):Ha(n,a));if(s=e.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return Vp(e,n,a,r,u,s,t);if(i){i=r.fallback,a=n.mode,s=e.child,u=s.sibling;var o={mode:"hidden",children:r.children};return!(a&1)&&n.child!==s?(r=n.child,r.childLanes=0,r.pendingProps=o,n.deletions=null):(r=jn(s,o),r.subtreeFlags=s.subtreeFlags&14680064),u!==null?i=jn(u,i):(i=zn(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?$i(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=qi,r}return i=e.child,e=i.sibling,r=jn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ha(e,n){return n=Es({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Er(e,n,t,r){return r!==null&&Ea(r),mt(n,e.child,null,t),e=Ha(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Vp(e,n,t,r,s,i,a){if(t)return n.flags&256?(n.flags&=-257,r=ri(Error(N(422))),Er(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,s=n.mode,r=Es({mode:"visible",children:r.children},s,0,null),i=zn(i,s,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&mt(n,e.child,null,a),n.child.memoizedState=$i(a),n.memoizedState=qi,i);if(!(n.mode&1))return Er(e,n,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(N(419)),r=ri(i,r,void 0),Er(e,n,a,r)}if(u=(a&e.childLanes)!==0,ke||u){if(r=ae,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,an(e,s),qe(r,e,s,-1))}return Qa(),r=ri(Error(N(421))),Er(e,n,a,r)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=af.bind(null,e),s._reactRetry=n,null):(e=i.treeContext,Ee=Sn(s.nextSibling),Pe=n,G=!0,He=null,e!==null&&(Le[De++]=en,Le[De++]=nn,Le[De++]=Fn,en=e.id,nn=e.overflow,Fn=n),n=Ha(n,r.children),n.flags|=4096,n)}function eo(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),zi(e.return,n,t)}function si(e,n,t,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:s}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=s)}function pc(e,n,t){var r=n.pendingProps,s=r.revealOrder,i=r.tail;if(ge(e,n,r.children,t),r=Y.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eo(e,t,n);else if(e.tag===19)eo(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(Y,r),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&ls(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),si(n,!1,s,t,i);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&ls(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}si(n,!0,t,null,i);break;case"together":si(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Hn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(N(153));if(n.child!==null){for(e=n.child,t=jn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=jn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Jp(e,n,t){switch(n.tag){case 3:cc(n),ft();break;case 5:zu(n);break;case 1:je(n.type)&&ns(n);break;case 4:Da(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,s=n.memoizedProps.value;J(ss,r._currentValue),r._currentValue=s;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(J(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?dc(e,n,t):(J(Y,Y.current&1),e=ln(e,n,t),e!==null?e.sibling:null);J(Y,Y.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return pc(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),J(Y,Y.current),r)break;return null;case 22:case 23:return n.lanes=0,oc(e,n,t)}return ln(e,n,t)}var fc,Vi,mc,hc;fc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Vi=function(){};mc=function(e,n,t,r){var s=e.memoizedProps;if(s!==r){e=n.stateNode,On(Ye.current);var i=null;switch(t){case"input":s=mi(e,s),r=mi(e,r),i=[];break;case"select":s=Z({},s,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":s=yi(e,s),r=yi(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}vi(t,r);var a;t=null;for(p in s)if(!r.hasOwnProperty(p)&&s.hasOwnProperty(p)&&s[p]!=null)if(p==="style"){var u=s[p];for(a in u)u.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(qt.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var o=r[p];if(u=s!=null?s[p]:void 0,r.hasOwnProperty(p)&&o!==u&&(o!=null||u!=null))if(p==="style")if(u){for(a in u)!u.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&u[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(i||(i=[]),i.push(p,t)),t=o;else p==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,u=u?u.__html:void 0,o!=null&&u!==o&&(i=i||[]).push(p,o)):p==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(p,""+o):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(qt.hasOwnProperty(p)?(o!=null&&p==="onScroll"&&Q("scroll",e),i||u===o||(i=[])):(i=i||[]).push(p,o))}t&&(i=i||[]).push("style",t);var p=i;(n.updateQueue=p)&&(n.flags|=4)}};hc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Pt(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Qp(e,n,t){var r=n.pendingProps;switch(Ia(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return je(n.type)&&es(),pe(n),null;case 3:return r=n.stateNode,ht(),K(we),K(me),Oa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,He!==null&&(ea(He),He=null))),Vi(e,n),pe(n),null;case 5:Ma(n);var s=On(tr.current);if(t=n.type,e!==null&&n.stateNode!=null)mc(e,n,t,r,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(N(166));return pe(n),null}if(e=On(Ye.current),Nr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ke]=n,r[er]=i,e=(n.mode&1)!==0,t){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(s=0;s<Dt.length;s++)Q(Dt[s],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ul(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":dl(r,i),Q("invalid",r)}vi(t,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,u,e),s=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,u,e),s=["children",""+u]):qt.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&Q("scroll",r)}switch(t){case"input":yr(r),cl(r,i,!0);break;case"textarea":yr(r),pl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zr)}r=s,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wo(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Ke]=n,e[er]=r,fc(e,n,!1,!1),n.stateNode=e;e:{switch(a=Si(t,r),t){case"dialog":Q("cancel",e),Q("close",e),s=r;break;case"iframe":case"object":case"embed":Q("load",e),s=r;break;case"video":case"audio":for(s=0;s<Dt.length;s++)Q(Dt[s],e);s=r;break;case"source":Q("error",e),s=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),s=r;break;case"details":Q("toggle",e),s=r;break;case"input":ul(e,r),s=mi(e,r),Q("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Z({},r,{value:void 0}),Q("invalid",e);break;case"textarea":dl(e,r),s=yi(e,r),Q("invalid",e);break;default:s=r}vi(t,s),u=s;for(i in u)if(u.hasOwnProperty(i)){var o=u[i];i==="style"?Vo(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&qo(e,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&$t(e,o):typeof o=="number"&&$t(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qt.hasOwnProperty(i)?o!=null&&i==="onScroll"&&Q("scroll",e):o!=null&&pa(e,i,o,a))}switch(t){case"input":yr(e),cl(e,r,!1);break;case"textarea":yr(e),pl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?it(e,!!r.multiple,i,!1):r.defaultValue!=null&&it(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Zr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pe(n),null;case 6:if(e&&n.stateNode!=null)hc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(N(166));if(t=On(tr.current),On(Ye.current),Nr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ke]=n,(i=r.nodeValue!==t)&&(e=Pe,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ke]=n,n.stateNode=r}return pe(n),null;case 13:if(K(Y),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ee!==null&&n.mode&1&&!(n.flags&128))Lu(),ft(),n.flags|=98560,i=!1;else if(i=Nr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Ke]=n}else ft(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;pe(n),i=!1}else He!==null&&(ea(He),He=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?se===0&&(se=3):Qa())),n.updateQueue!==null&&(n.flags|=4),pe(n),null);case 4:return ht(),Vi(e,n),e===null&&Xt(n.stateNode.containerInfo),pe(n),null;case 10:return Ta(n.type._context),pe(n),null;case 17:return je(n.type)&&es(),pe(n),null;case 19:if(K(Y),i=n.memoizedState,i===null)return pe(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Pt(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=ls(e),a!==null){for(n.flags|=128,Pt(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return J(Y,Y.current&1|2),n.child}e=e.sibling}i.tail!==null&&ne()>yt&&(n.flags|=128,r=!0,Pt(i,!1),n.lanes=4194304)}else{if(!r)if(e=ls(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Pt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!G)return pe(n),null}else 2*ne()-i.renderingStartTime>yt&&t!==1073741824&&(n.flags|=128,r=!0,Pt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ne(),n.sibling=null,t=Y.current,J(Y,r?t&1|2:t&1),n):(pe(n),null);case 22:case 23:return Ja(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ie&1073741824&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),null;case 24:return null;case 25:return null}throw Error(N(156,n.tag))}function Kp(e,n){switch(Ia(n),n.tag){case 1:return je(n.type)&&es(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(),K(we),K(me),Oa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ma(n),null;case 13:if(K(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(N(340));ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(Y),null;case 4:return ht(),null;case 10:return Ta(n.type._context),null;case 22:case 23:return Ja(),null;case 24:return null;default:return null}}var Pr=!1,fe=!1,Gp=typeof WeakSet=="function"?WeakSet:Set,R=null;function rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ee(e,n,r)}else t.current=null}function Ji(e,n,t){try{t()}catch(r){ee(e,n,r)}}var no=!1;function Yp(e,n){if(Ai=Gr,e=Su(),Ca(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,u=-1,o=-1,p=0,h=0,g=e,f=null;n:for(;;){for(var y;g!==t||s!==0&&g.nodeType!==3||(u=a+s),g!==i||r!==0&&g.nodeType!==3||(o=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(y=g.firstChild)!==null;)f=g,g=y;for(;;){if(g===e)break n;if(f===t&&++p===s&&(u=a),f===i&&++h===r&&(o=a),(y=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=y}t=u===-1||o===-1?null:{start:u,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ti={focusedElem:e,selectionRange:t},Gr=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,M=v.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?S:Fe(n.type,S),M);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(x){ee(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return v=no,no=!1,v}function Ut(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ji(n,t,i)}s=s.next}while(s!==r)}}function Ns(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Qi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function gc(e){var n=e.alternate;n!==null&&(e.alternate=null,gc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ke],delete n[er],delete n[Di],delete n[Lp],delete n[Dp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function to(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ki(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Ki(e,n,t),e=e.sibling;e!==null;)Ki(e,n,t),e=e.sibling}function Gi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gi(e,n,t),e=e.sibling;e!==null;)Gi(e,n,t),e=e.sibling}var le=null,Ue=!1;function cn(e,n,t){for(t=t.child;t!==null;)xc(e,n,t),t=t.sibling}function xc(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(xs,t)}catch{}switch(t.tag){case 5:fe||rt(t,n);case 6:var r=le,s=Ue;le=null,cn(e,n,t),le=r,Ue=s,le!==null&&(Ue?(e=le,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):le.removeChild(t.stateNode));break;case 18:le!==null&&(Ue?(e=le,t=t.stateNode,e.nodeType===8?Ys(e.parentNode,t):e.nodeType===1&&Ys(e,t),Kt(e)):Ys(le,t.stateNode));break;case 4:r=le,s=Ue,le=t.stateNode.containerInfo,Ue=!0,cn(e,n,t),le=r,Ue=s;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ji(t,n,a),s=s.next}while(s!==r)}cn(e,n,t);break;case 1:if(!fe&&(rt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){ee(t,n,u)}cn(e,n,t);break;case 21:cn(e,n,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,cn(e,n,t),fe=r):cn(e,n,t);break;default:cn(e,n,t)}}function ro(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Gp),n.forEach(function(r){var s=lf.bind(null,e,r);t.has(r)||(t.add(r),r.then(s,s))})}}function Be(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];try{var i=e,a=n,u=a;e:for(;u!==null;){switch(u.tag){case 5:le=u.stateNode,Ue=!1;break e;case 3:le=u.stateNode.containerInfo,Ue=!0;break e;case 4:le=u.stateNode.containerInfo,Ue=!0;break e}u=u.return}if(le===null)throw Error(N(160));xc(i,a,s),le=null,Ue=!1;var o=s.alternate;o!==null&&(o.return=null),s.return=null}catch(p){ee(s,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)vc(n,e),n=n.sibling}function vc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(n,e),Je(e),r&4){try{Ut(3,e,e.return),Ns(3,e)}catch(S){ee(e,e.return,S)}try{Ut(5,e,e.return)}catch(S){ee(e,e.return,S)}}break;case 1:Be(n,e),Je(e),r&512&&t!==null&&rt(t,t.return);break;case 5:if(Be(n,e),Je(e),r&512&&t!==null&&rt(t,t.return),e.flags&32){var s=e.stateNode;try{$t(s,"")}catch(S){ee(e,e.return,S)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,u=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Uo(s,i),Si(u,a);var p=Si(u,i);for(a=0;a<o.length;a+=2){var h=o[a],g=o[a+1];h==="style"?Vo(s,g):h==="dangerouslySetInnerHTML"?qo(s,g):h==="children"?$t(s,g):pa(s,h,g,p)}switch(u){case"input":hi(s,i);break;case"textarea":Ho(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?it(s,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?it(s,!!i.multiple,i.defaultValue,!0):it(s,!!i.multiple,i.multiple?[]:"",!1))}s[er]=i}catch(S){ee(e,e.return,S)}}break;case 6:if(Be(n,e),Je(e),r&4){if(e.stateNode===null)throw Error(N(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(S){ee(e,e.return,S)}}break;case 3:if(Be(n,e),Je(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Kt(n.containerInfo)}catch(S){ee(e,e.return,S)}break;case 4:Be(n,e),Je(e);break;case 13:Be(n,e),Je(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||($a=ne())),r&4&&ro(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(p=fe)||h,Be(n,e),fe=p):Be(n,e),Je(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!h&&e.mode&1)for(R=e,h=e.child;h!==null;){for(g=R=h;R!==null;){switch(f=R,y=f.child,f.tag){case 0:case 11:case 14:case 15:Ut(4,f,f.return);break;case 1:rt(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(S){ee(r,t,S)}}break;case 5:rt(f,f.return);break;case 22:if(f.memoizedState!==null){io(g);continue}}y!==null?(y.return=f,R=y):io(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{s=g.stateNode,p?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=g.stateNode,o=g.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,u.style.display=$o("display",a))}catch(S){ee(e,e.return,S)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=p?"":g.memoizedProps}catch(S){ee(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Be(n,e),Je(e),r&4&&ro(e);break;case 21:break;default:Be(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(yc(t)){var r=t;break e}t=t.return}throw Error(N(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&($t(s,""),r.flags&=-33);var i=to(e);Gi(e,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,u=to(e);Ki(e,u,a);break;default:throw Error(N(161))}}catch(o){ee(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xp(e,n,t){R=e,Sc(e)}function Sc(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var s=R,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||Pr;if(!a){var u=s.alternate,o=u!==null&&u.memoizedState!==null||fe;u=Pr;var p=fe;if(Pr=a,(fe=o)&&!p)for(R=s;R!==null;)a=R,o=a.child,a.tag===22&&a.memoizedState!==null?ao(s):o!==null?(o.return=a,R=o):ao(s);for(;i!==null;)R=i,Sc(i),i=i.sibling;R=s,Pr=u,fe=p}so(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,R=i):so(e)}}function so(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||Ns(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fe)if(t===null)r.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:Fe(n.type,t.memoizedProps);r.componentDidUpdate(s,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Hl(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Hl(n,a,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var h=p.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Kt(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}fe||n.flags&512&&Qi(n)}catch(f){ee(n,n.return,f)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function io(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function ao(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ns(4,n)}catch(o){ee(n,t,o)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var s=n.return;try{r.componentDidMount()}catch(o){ee(n,s,o)}}var i=n.return;try{Qi(n)}catch(o){ee(n,i,o)}break;case 5:var a=n.return;try{Qi(n)}catch(o){ee(n,a,o)}}}catch(o){ee(n,n.return,o)}if(n===e){R=null;break}var u=n.sibling;if(u!==null){u.return=n.return,R=u;break}R=n.return}}var Zp=Math.ceil,cs=on.ReactCurrentDispatcher,Wa=on.ReactCurrentOwner,Oe=on.ReactCurrentBatchConfig,H=0,ae=null,te=null,oe=0,Ie=0,st=An(0),se=0,ar=null,Hn=0,Is=0,qa=0,Ht=null,be=null,$a=0,yt=1/0,Xe=null,ds=!1,Yi=null,kn=null,Ar=!1,gn=null,ps=0,Wt=0,Xi=null,Ur=-1,Hr=0;function ye(){return H&6?ne():Ur!==-1?Ur:Ur=ne()}function wn(e){return e.mode&1?H&2&&oe!==0?oe&-oe:Op.transition!==null?(Hr===0&&(Hr=su()),Hr):(e=$,e!==0||(e=window.event,e=e===void 0?16:du(e.type)),e):1}function qe(e,n,t,r){if(50<Wt)throw Wt=0,Xi=null,Error(N(185));cr(e,t,r),(!(H&2)||e!==ae)&&(e===ae&&(!(H&2)&&(Is|=t),se===4&&mn(e,oe)),Ce(e,r),t===1&&H===0&&!(n.mode&1)&&(yt=ne()+500,ws&&Tn()))}function Ce(e,n){var t=e.callbackNode;Od(e,n);var r=Kr(e,e===ae?oe:0);if(r===0)t!==null&&hl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&hl(t),n===1)e.tag===0?Mp(lo.bind(null,e)):Au(lo.bind(null,e)),Tp(function(){!(H&6)&&Tn()}),t=null;else{switch(iu(r)){case 1:t=ya;break;case 4:t=tu;break;case 16:t=Qr;break;case 536870912:t=ru;break;default:t=Qr}t=Ec(t,bc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function bc(e,n){if(Ur=-1,Hr=0,H&6)throw Error(N(327));var t=e.callbackNode;if(ct()&&e.callbackNode!==t)return null;var r=Kr(e,e===ae?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=fs(e,r);else{n=r;var s=H;H|=2;var i=wc();(ae!==e||oe!==n)&&(Xe=null,yt=ne()+500,_n(e,n));do try{tf();break}catch(u){kc(e,u)}while(!0);Aa(),cs.current=i,H=s,te!==null?n=0:(ae=null,oe=0,n=se)}if(n!==0){if(n===2&&(s=Ci(e),s!==0&&(r=s,n=Zi(e,s))),n===1)throw t=ar,_n(e,0),mn(e,r),Ce(e,ne()),t;if(n===6)mn(e,r);else{if(s=e.current.alternate,!(r&30)&&!ef(s)&&(n=fs(e,r),n===2&&(i=Ci(e),i!==0&&(r=i,n=Zi(e,i))),n===1))throw t=ar,_n(e,0),mn(e,r),Ce(e,ne()),t;switch(e.finishedWork=s,e.finishedLanes=r,n){case 0:case 1:throw Error(N(345));case 2:Ln(e,be,Xe);break;case 3:if(mn(e,r),(r&130023424)===r&&(n=$a+500-ne(),10<n)){if(Kr(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Li(Ln.bind(null,e,be,Xe),n);break}Ln(e,be,Xe);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,s=-1;0<r;){var a=31-We(r);i=1<<a,a=n[a],a>s&&(s=a),r&=~i}if(r=s,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zp(r/1960))-r,10<r){e.timeoutHandle=Li(Ln.bind(null,e,be,Xe),r);break}Ln(e,be,Xe);break;case 5:Ln(e,be,Xe);break;default:throw Error(N(329))}}}return Ce(e,ne()),e.callbackNode===t?bc.bind(null,e):null}function Zi(e,n){var t=Ht;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=fs(e,n),e!==2&&(n=be,be=t,n!==null&&ea(n)),e}function ea(e){be===null?be=e:be.push.apply(be,e)}function ef(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var s=t[r],i=s.getSnapshot;s=s.value;try{if(!$e(i(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mn(e,n){for(n&=~qa,n&=~Is,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-We(n),r=1<<t;e[t]=-1,n&=~r}}function lo(e){if(H&6)throw Error(N(327));ct();var n=Kr(e,0);if(!(n&1))return Ce(e,ne()),null;var t=fs(e,n);if(e.tag!==0&&t===2){var r=Ci(e);r!==0&&(n=r,t=Zi(e,r))}if(t===1)throw t=ar,_n(e,0),mn(e,n),Ce(e,ne()),t;if(t===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Ln(e,be,Xe),Ce(e,ne()),null}function Va(e,n){var t=H;H|=1;try{return e(n)}finally{H=t,H===0&&(yt=ne()+500,ws&&Tn())}}function Wn(e){gn!==null&&gn.tag===0&&!(H&6)&&ct();var n=H;H|=1;var t=Oe.transition,r=$;try{if(Oe.transition=null,$=1,e)return e()}finally{$=r,Oe.transition=t,H=n,!(H&6)&&Tn()}}function Ja(){Ie=st.current,K(st)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Ap(t)),te!==null)for(t=te.return;t!==null;){var r=t;switch(Ia(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&es();break;case 3:ht(),K(we),K(me),Oa();break;case 5:Ma(r);break;case 4:ht();break;case 13:K(Y);break;case 19:K(Y);break;case 10:Ta(r.type._context);break;case 22:case 23:Ja()}t=t.return}if(ae=e,te=e=jn(e.current,null),oe=Ie=n,se=0,ar=null,qa=Is=Hn=0,be=Ht=null,Mn!==null){for(n=0;n<Mn.length;n++)if(t=Mn[n],r=t.interleaved,r!==null){t.interleaved=null;var s=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}t.pending=r}Mn=null}return e}function kc(e,n){do{var t=te;try{if(Aa(),zr.current=us,os){for(var r=X.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}os=!1}if(Un=0,ie=re=X=null,Ft=!1,rr=0,Wa.current=null,t===null||t.return===null){se=1,ar=n,te=null;break}e:{var i=e,a=t.return,u=t,o=n;if(n=oe,u.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var p=o,h=u,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Ql(a);if(y!==null){y.flags&=-257,Kl(y,a,u,i,n),y.mode&1&&Jl(i,p,n),n=y,o=p;var v=n.updateQueue;if(v===null){var S=new Set;S.add(o),n.updateQueue=S}else v.add(o);break e}else{if(!(n&1)){Jl(i,p,n),Qa();break e}o=Error(N(426))}}else if(G&&u.mode&1){var M=Ql(a);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Kl(M,a,u,i,n),Ea(gt(o,u));break e}}i=o=gt(o,u),se!==4&&(se=2),Ht===null?Ht=[i]:Ht.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=ic(i,o,n);Ul(i,d);break e;case 1:u=o;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(kn===null||!kn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var x=ac(i,u,n);Ul(i,x);break e}}i=i.return}while(i!==null)}Cc(t)}catch(C){n=C,te===t&&t!==null&&(te=t=t.return);continue}break}while(!0)}function wc(){var e=cs.current;return cs.current=us,e===null?us:e}function Qa(){(se===0||se===3||se===2)&&(se=4),ae===null||!(Hn&268435455)&&!(Is&268435455)||mn(ae,oe)}function fs(e,n){var t=H;H|=2;var r=wc();(ae!==e||oe!==n)&&(Xe=null,_n(e,n));do try{nf();break}catch(s){kc(e,s)}while(!0);if(Aa(),H=t,cs.current=r,te!==null)throw Error(N(261));return ae=null,oe=0,se}function nf(){for(;te!==null;)jc(te)}function tf(){for(;te!==null&&!Id();)jc(te)}function jc(e){var n=Ic(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,n===null?Cc(e):te=n,Wa.current=null}function Cc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Kp(t,n),t!==null){t.flags&=32767,te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,te=null;return}}else if(t=Qp(t,n,Ie),t!==null){te=t;return}if(n=n.sibling,n!==null){te=n;return}te=n=e}while(n!==null);se===0&&(se=5)}function Ln(e,n,t){var r=$,s=Oe.transition;try{Oe.transition=null,$=1,rf(e,n,t,r)}finally{Oe.transition=s,$=r}return null}function rf(e,n,t,r){do ct();while(gn!==null);if(H&6)throw Error(N(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(_d(e,i),e===ae&&(te=ae=null,oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ar||(Ar=!0,Ec(Qr,function(){return ct(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Oe.transition,Oe.transition=null;var a=$;$=1;var u=H;H|=4,Wa.current=null,Yp(e,t),vc(t,e),wp(Ti),Gr=!!Ai,Ti=Ai=null,e.current=t,Xp(t),Ed(),H=u,$=a,Oe.transition=i}else e.current=t;if(Ar&&(Ar=!1,gn=e,ps=s),i=e.pendingLanes,i===0&&(kn=null),Td(t.stateNode),Ce(e,ne()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],r(s.value,{componentStack:s.stack,digest:s.digest});if(ds)throw ds=!1,e=Yi,Yi=null,e;return ps&1&&e.tag!==0&&ct(),i=e.pendingLanes,i&1?e===Xi?Wt++:(Wt=0,Xi=e):Wt=0,Tn(),null}function ct(){if(gn!==null){var e=iu(ps),n=Oe.transition,t=$;try{if(Oe.transition=null,$=16>e?16:e,gn===null)var r=!1;else{if(e=gn,gn=null,ps=0,H&6)throw Error(N(331));var s=H;for(H|=4,R=e.current;R!==null;){var i=R,a=i.child;if(R.flags&16){var u=i.deletions;if(u!==null){for(var o=0;o<u.length;o++){var p=u[o];for(R=p;R!==null;){var h=R;switch(h.tag){case 0:case 11:case 15:Ut(8,h,i)}var g=h.child;if(g!==null)g.return=h,R=g;else for(;R!==null;){h=R;var f=h.sibling,y=h.return;if(gc(h),h===p){R=null;break}if(f!==null){f.return=y,R=f;break}R=y}}}var v=i.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var M=S.sibling;S.sibling=null,S=M}while(S!==null)}}R=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,R=a;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ut(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,R=d;break e}R=i.return}}var c=e.current;for(R=c;R!==null;){a=R;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,R=m;else e:for(a=c;R!==null;){if(u=R,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Ns(9,u)}}catch(C){ee(u,u.return,C)}if(u===a){R=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,R=x;break e}R=u.return}}if(H=s,Tn(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(xs,e)}catch{}r=!0}return r}finally{$=t,Oe.transition=n}}return!1}function oo(e,n,t){n=gt(t,n),n=ic(e,n,1),e=bn(e,n,1),n=ye(),e!==null&&(cr(e,1,n),Ce(e,n))}function ee(e,n,t){if(e.tag===3)oo(e,e,t);else for(;n!==null;){if(n.tag===3){oo(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=gt(t,e),e=ac(n,e,1),n=bn(n,e,1),e=ye(),n!==null&&(cr(n,1,e),Ce(n,e));break}}n=n.return}}function sf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,ae===e&&(oe&t)===t&&(se===4||se===3&&(oe&130023424)===oe&&500>ne()-$a?_n(e,0):qa|=t),Ce(e,n)}function Nc(e,n){n===0&&(e.mode&1?(n=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):n=1);var t=ye();e=an(e,n),e!==null&&(cr(e,n,t),Ce(e,t))}function af(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Nc(e,t)}function lf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(n),Nc(e,t)}var Ic;Ic=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||we.current)ke=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ke=!1,Jp(e,n,t);ke=!!(e.flags&131072)}else ke=!1,G&&n.flags&1048576&&Tu(n,rs,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Fr(e,n),e=n.pendingProps;var s=pt(n,me.current);ut(n,t),s=za(null,n,r,e,s,t);var i=Ba();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,je(r)?(i=!0,ns(n)):i=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,La(n),s.updater=Cs,n.stateNode=s,s._reactInternals=n,Fi(n,r,e,t),n=Wi(null,n,r,!0,i,t)):(n.tag=0,G&&i&&Na(n),ge(null,n,s,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Fr(e,n),e=n.pendingProps,s=r._init,r=s(r._payload),n.type=r,s=n.tag=uf(r),e=Fe(r,e),s){case 0:n=Hi(null,n,r,e,t);break e;case 1:n=Xl(null,n,r,e,t);break e;case 11:n=Gl(null,n,r,e,t);break e;case 14:n=Yl(null,n,r,Fe(r.type,e),t);break e}throw Error(N(306,r,""))}return n;case 0:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fe(r,s),Hi(e,n,r,s,t);case 1:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fe(r,s),Xl(e,n,r,s,t);case 3:e:{if(cc(n),e===null)throw Error(N(387));r=n.pendingProps,i=n.memoizedState,s=i.element,_u(e,n),as(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){s=gt(Error(N(423)),n),n=Zl(e,n,r,t,s);break e}else if(r!==s){s=gt(Error(N(424)),n),n=Zl(e,n,r,t,s);break e}else for(Ee=Sn(n.stateNode.containerInfo.firstChild),Pe=n,G=!0,He=null,t=Mu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ft(),r===s){n=ln(e,n,t);break e}ge(e,n,r,t)}n=n.child}return n;case 5:return zu(n),e===null&&_i(n),r=n.type,s=n.pendingProps,i=e!==null?e.memoizedProps:null,a=s.children,Ri(r,s)?a=null:i!==null&&Ri(r,i)&&(n.flags|=32),uc(e,n),ge(e,n,a,t),n.child;case 6:return e===null&&_i(n),null;case 13:return dc(e,n,t);case 4:return Da(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=mt(n,null,r,t):ge(e,n,r,t),n.child;case 11:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fe(r,s),Gl(e,n,r,s,t);case 7:return ge(e,n,n.pendingProps,t),n.child;case 8:return ge(e,n,n.pendingProps.children,t),n.child;case 12:return ge(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,s=n.pendingProps,i=n.memoizedProps,a=s.value,J(ss,r._currentValue),r._currentValue=a,i!==null)if($e(i.value,a)){if(i.children===s.children&&!we.current){n=ln(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var o=u.firstContext;o!==null;){if(o.context===r){if(i.tag===1){o=tn(-1,t&-t),o.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var h=p.pending;h===null?o.next=o:(o.next=h.next,h.next=o),p.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),zi(i.return,t,n),u.lanes|=t;break}o=o.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(N(341));a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),zi(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ge(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,r=n.pendingProps.children,ut(n,t),s=_e(s),r=r(s),n.flags|=1,ge(e,n,r,t),n.child;case 14:return r=n.type,s=Fe(r,n.pendingProps),s=Fe(r.type,s),Yl(e,n,r,s,t);case 15:return lc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fe(r,s),Fr(e,n),n.tag=1,je(r)?(e=!0,ns(n)):e=!1,ut(n,t),sc(n,r,s),Fi(n,r,s,t),Wi(null,n,r,!0,e,t);case 19:return pc(e,n,t);case 22:return oc(e,n,t)}throw Error(N(156,n.tag))};function Ec(e,n){return nu(e,n)}function of(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,t,r){return new of(e,n,t,r)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uf(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ma)return 11;if(e===ha)return 14}return 2}function jn(e,n){var t=e.alternate;return t===null?(t=Me(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Wr(e,n,t,r,s,i){var a=2;if(r=e,typeof e=="function")Ka(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qn:return zn(t.children,s,i,n);case fa:a=8,s|=8;break;case ci:return e=Me(12,t,n,s|2),e.elementType=ci,e.lanes=i,e;case di:return e=Me(13,t,n,s),e.elementType=di,e.lanes=i,e;case pi:return e=Me(19,t,n,s),e.elementType=pi,e.lanes=i,e;case zo:return Es(t,s,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oo:a=10;break e;case _o:a=9;break e;case ma:a=11;break e;case ha:a=14;break e;case dn:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return n=Me(a,t,n,s),n.elementType=e,n.type=r,n.lanes=i,n}function zn(e,n,t,r){return e=Me(7,e,r,n),e.lanes=t,e}function Es(e,n,t,r){return e=Me(22,e,r,n),e.elementType=zo,e.lanes=t,e.stateNode={isHidden:!1},e}function ii(e,n,t){return e=Me(6,e,null,n),e.lanes=t,e}function ai(e,n,t){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function cf(e,n,t,r,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ga(e,n,t,r,s,i,a,u,o){return e=new cf(e,n,t,u,o),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Me(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(i),e}function df(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Pc(e){if(!e)return In;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(N(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(je(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(N(171))}if(e.tag===1){var t=e.type;if(je(t))return Pu(e,t,n)}return n}function Ac(e,n,t,r,s,i,a,u,o){return e=Ga(t,r,!0,e,s,i,a,u,o),e.context=Pc(null),t=e.current,r=ye(),s=wn(t),i=tn(r,s),i.callback=n??null,bn(t,i,s),e.current.lanes=s,cr(e,s,r),Ce(e,r),e}function Ps(e,n,t,r){var s=n.current,i=ye(),a=wn(s);return t=Pc(t),n.context===null?n.context=t:n.pendingContext=t,n=tn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=bn(s,n,a),e!==null&&(qe(e,s,a,i),_r(e,s,a)),a}function ms(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ya(e,n){uo(e,n),(e=e.alternate)&&uo(e,n)}function pf(){return null}var Tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xa(e){this._internalRoot=e}As.prototype.render=Xa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(N(409));Ps(e,n,null,null)};As.prototype.unmount=Xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wn(function(){Ps(null,e,null,null)}),n[sn]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var n=ou();e={blockedOn:null,target:e,priority:n};for(var t=0;t<fn.length&&n!==0&&n<fn[t].priority;t++);fn.splice(t,0,e),t===0&&cu(e)}};function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function co(){}function ff(e,n,t,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var p=ms(a);i.call(p)}}var a=Ac(n,r,e,0,null,!1,!1,"",co);return e._reactRootContainer=a,e[sn]=a.current,Xt(e.nodeType===8?e.parentNode:e),Wn(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var u=r;r=function(){var p=ms(o);u.call(p)}}var o=Ga(e,0,!1,null,null,!1,!1,"",co);return e._reactRootContainer=o,e[sn]=o.current,Xt(e.nodeType===8?e.parentNode:e),Wn(function(){Ps(n,o,t,r)}),o}function Rs(e,n,t,r,s){var i=t._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var u=s;s=function(){var o=ms(a);u.call(o)}}Ps(n,a,e,s)}else a=ff(t,n,e,s,r);return ms(a)}au=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Lt(n.pendingLanes);t!==0&&(xa(n,t|1),Ce(n,ne()),!(H&6)&&(yt=ne()+500,Tn()))}break;case 13:Wn(function(){var r=an(e,1);if(r!==null){var s=ye();qe(r,e,1,s)}}),Ya(e,1)}};va=function(e){if(e.tag===13){var n=an(e,134217728);if(n!==null){var t=ye();qe(n,e,134217728,t)}Ya(e,134217728)}};lu=function(e){if(e.tag===13){var n=wn(e),t=an(e,n);if(t!==null){var r=ye();qe(t,e,n,r)}Ya(e,n)}};ou=function(){return $};uu=function(e,n){var t=$;try{return $=e,n()}finally{$=t}};ki=function(e,n,t){switch(n){case"input":if(hi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var s=ks(r);if(!s)throw Error(N(90));Fo(r),hi(r,s)}}}break;case"textarea":Ho(e,t);break;case"select":n=t.value,n!=null&&it(e,!!t.multiple,n,!1)}};Ko=Va;Go=Wn;var mf={usingClientEntryPoint:!1,Events:[pr,Xn,ks,Jo,Qo,Va]},At={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hf={bundleType:At.bundleType,version:At.version,rendererPackageName:At.rendererPackageName,rendererConfig:At.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zo(e),e===null?null:e.stateNode},findFiberByHostInstance:At.findFiberByHostInstance||pf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{xs=Tr.inject(hf),Ge=Tr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mf;Te.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Za(n))throw Error(N(200));return df(e,n,null,t)};Te.createRoot=function(e,n){if(!Za(e))throw Error(N(299));var t=!1,r="",s=Tc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Ga(e,1,!1,null,null,t,!1,r,s),e[sn]=n.current,Xt(e.nodeType===8?e.parentNode:e),new Xa(n)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Zo(n),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Wn(e)};Te.hydrate=function(e,n,t){if(!Ts(n))throw Error(N(200));return Rs(null,e,n,!0,t)};Te.hydrateRoot=function(e,n,t){if(!Za(e))throw Error(N(405));var r=t!=null&&t.hydratedSources||null,s=!1,i="",a=Tc;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Ac(n,null,e,1,t??null,s,!1,i,a),e[sn]=n.current,Xt(e),r)for(e=0;e<r.length;e++)t=r[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new As(n)};Te.render=function(e,n,t){if(!Ts(n))throw Error(N(200));return Rs(null,e,n,!1,t)};Te.unmountComponentAtNode=function(e){if(!Ts(e))throw Error(N(40));return e._reactRootContainer?(Wn(function(){Rs(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};Te.unstable_batchedUpdates=Va;Te.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ts(t))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Rs(e,n,t,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function Rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc)}catch(e){console.error(e)}}Rc(),Ro.exports=Te;var Lc=Ro.exports,po=Lc;oi.createRoot=po.createRoot,oi.hydrateRoot=po.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),V=(e,n)=>{const t=P.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:u="",children:o,...p},h)=>P.createElement("svg",{ref:h,...gf,width:s,height:s,stroke:r,strokeWidth:a?Number(i)*24/Number(s):i,className:["lucide",`lucide-${yf(e)}`,u].join(" "),...p},[...n.map(([g,f])=>P.createElement(g,f)),...Array.isArray(o)?o:[o]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=V("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=V("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=V("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=V("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=V("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=V("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=V("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=V("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=V("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=V("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=V("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=V("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=V("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=V("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=V("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=V("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=V("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=V("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=V("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=V("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=V("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=V("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=V("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=V("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=V("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Lf({activeTab:e,setActiveTab:n}){const[t,r]=P.useState(!1),s=a=>{n(a),r(!1)},i=()=>{window.location.reload()};return l.jsxs("header",{className:"site-header",children:[l.jsxs("div",{className:"header-top-row",children:[l.jsxs("div",{className:"logo-wrapper",onClick:i,style:{cursor:"pointer"},children:[l.jsx("div",{className:"logo-icon",children:l.jsx(Dc,{size:20})}),l.jsx("span",{className:"logo-text",children:"정처기 실기 마스터"})]}),l.jsx("button",{className:"mobile-toggle-btn",onClick:()=>r(!t),"aria-label":"메뉴 토글",children:t?l.jsx(Rf,{size:20}):l.jsx(Nf,{size:20})})]}),l.jsxs("nav",{className:`nav-card glass-card ${t?"mobile-open":""}`,children:[l.jsxs("button",{className:`nav-btn ${e==="random"?"active":""}`,onClick:()=>s("random"),style:e==="random"?{background:"linear-gradient(135deg, #a855f7, #7e22ce)"}:{},children:[l.jsx(gs,{size:18}),l.jsx("span",{children:"랜덤문제"})]}),l.jsxs("button",{className:`nav-btn ${e==="quiz"?"active":""}`,onClick:()=>s("quiz"),children:[l.jsx(nl,{size:18}),l.jsx("span",{children:"유형별"})]}),l.jsxs("button",{className:`nav-btn ${e==="subject"?"active":""}`,onClick:()=>s("subject"),style:e==="subject"?{background:"linear-gradient(135deg, #06b6d4, #0891b2)"}:{},children:[l.jsx(hs,{size:18}),l.jsx("span",{children:"주제별"})]}),l.jsxs("button",{className:`nav-btn ${e==="wrong"?"active":""}`,onClick:()=>s("wrong"),style:e==="wrong"?{background:"linear-gradient(135deg, #f43f5e, #e11d48)"}:{},children:[l.jsx(xt,{size:18}),l.jsx("span",{children:"오답노트"})]}),l.jsxs("button",{className:`nav-btn ${e==="bookmark"?"active":""}`,onClick:()=>s("bookmark"),children:[l.jsx(lr,{size:18}),l.jsx("span",{children:"북마크"})]}),l.jsxs("button",{className:`nav-btn ${e==="result"?"active":""}`,onClick:()=>s("result"),children:[l.jsx(kt,{size:18}),l.jsx("span",{children:"풀이결과"})]})]})]})}const Df=[{id:"kw-001",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"시제품을 끊임없이 제작하며 사이클을 반복하는 개발 방법론으로, 워터폴과 대조적이며, 소프트웨어 개발을 넘어 기업 경영 전반에서 사용되고 있다. 고객의 변화하는 요구사항과 환경 변화에 능동적인 이 소프트웨어 개발 방법론을 쓰시오.",choices:["구조적 방법론(Structured)","정보공학 방법론(Information Engineering)","애자일(Agile)","폭포수(Waterfall)"],blanks:[{answer:"애자일(Agile)"}],explanation:`애자일(Agile)은 고객의 요구사항 변화에 유연하게 대응할 수 있도록 짧은 주기(스프린트, 이터레이션)를 반복하며 개발하는 방법론이다.
단계를 순차적으로 진행하는 폭포수(Waterfall) 모형과 대조되며, 스크럼(Scrum), XP(eXtreme Programming), 칸반(Kanban), 린(Lean), FDD 등이 대표적이다.`},{id:"kw-002",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"essay",question:"소프트웨어 공학에서 리팩토링(Refactoring)을 하는 목적에 대해 간략히 서술하시오.",choices:["리팩토링의 목적은 테스트 케이스를 자동으로 생성하여 결함을 빠짐없이 찾기 위함이다.","리팩토링의 목적은 프로그램을 쉽게 이해하고 수정하여 빠르게 개발할 수 있도록 하기 위함이다.","리팩토링의 목적은 소스 코드를 기계어로 번역하여 프로그램의 실행 속도를 높이기 위함이다.","리팩토링의 목적은 프로그램에 새로운 기능을 추가하여 사용자 요구사항을 확장하기 위함이다."],blanks:[{answer:"리팩토링의 목적은 프로그램을 쉽게 이해하고 수정하여 빠르게 개발할 수 있도록 하기 위함이다."}],explanation:`리팩토링은 외부에서 보이는 동작(기능)은 바꾸지 않고 내부 구조를 개선하는 작업이다.
'이해하기 쉽게', '수정(유지보수)하기 쉽게', '빠르게 개발'이라는 목적이 드러나면 정답으로 볼 수 있다.`},{id:"kw-003",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"요구사항 확인에 대한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`• ( ① ) 요구사항은 시스템이 무엇을 하는지, 어떤 기능을 하는지 등 사용자가 시스템을 통해 제공받기를 원하는 기능이나 시스템이 반드시 수행해야 하는 기능을 의미한다.
• ( ② ) 요구사항은 품질이나 제약사항과 관련된 요구사항으로, 시스템의 장비 구성, 성능, 인터페이스, 테스트, 보안 등의 요구사항을 말한다.`}],choices:["인터페이스","기능","사용자","시스템","비기능","성능"],blanks:[{label:"①",answer:"기능",accepts:["기능 요구사항","Functional"]},{label:"②",answer:"비기능",accepts:["비기능 요구사항","Non-Functional","Nonfunctional"]}],explanation:`기능 요구사항은 시스템이 '무엇을 하는가', 즉 시스템이 반드시 수행해야 하는 기능에 대한 요구사항이다.
비기능 요구사항은 성능, 보안, 품질, 제약사항처럼 기능 외적인 요구사항이다.`},{id:"kw-004",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"UML(Unified Modeling Language)에 관한 다음 설명에서 괄호에 공통으로 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"( ) 다이어그램은 UML 다이어그램 중 객체(Object)들을 ( )로 추상화하여 표현하는 다이어그램으로 대표적인 구조적 다이어그램이다. ( )는 각각의 객체들이 갖는 속성과 메소드를 표현한 것으로 3개의 구획으로 나눠 이름, 속성, 메소드를 표기한다."}],choices:["컴포넌트(Component)","클래스(Class)","객체(Object)","패키지(Package)"],blanks:[{answer:"클래스(Class)"}],explanation:`클래스 다이어그램은 시스템을 구성하는 클래스와 그 속성·메소드, 클래스 간의 관계를 표현하는 대표적인 구조적(정적) 다이어그램이다.
클래스는 이름, 속성, 메소드의 3구획으로 나뉜 사각형으로 표기한다.`},{id:"kw-005",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"UML에 대한 다음 설명에서 괄호(①~③)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`UML은 시스템 분석, 설계, 구현 등 시스템 개발 과정에서 시스템 개발자와 고객 또는 개발자 상호 간의 의사소통이 원활하게 이루어지도록 표준화한 대표적인 객체지향 모델링 언어로, 사물, ( ① ), 다이어그램으로 이루어져 있다.
• ( ① )는 사물과 사물 사이의 연관성을 표현하는 것으로, 연관, 집합, 포함, 일반화 등 다양한 형태의 ( ① )가 존재한다.
• ( ② )는 UML에 표현되는 사물의 하나로, 객체가 갖는 속성과 동작을 표현한다. 일반적으로 직사각형으로 표현하며, 직사각형 안에 이름, 속성, 동작을 표기한다.
• ( ③ )는 ( ② )와 같은 UML에 표현되는 사물의 하나로, ( ② )나 컴포넌트의 동작을 모아 놓은 것이며, 외부적으로 가시화되는 행동을 표현한다. 단독으로 사용되는 경우는 없으며, ( ③ ) 구현을 위한 ( ② ) 또는 컴포넌트와 함께 사용된다.`}],choices:["컴포넌트(Component)","인터페이스(Interface)","클래스(Class)","관계(Relationship)","객체(Object)","패키지(Package)"],blanks:[{label:"①",answer:"관계(Relationship)"},{label:"②",answer:"클래스(Class)"},{label:"③",answer:"인터페이스(Interface)"}],explanation:`UML은 사물(Things), 관계(Relationships), 다이어그램(Diagram)으로 구성된다.
클래스는 객체가 갖는 속성과 동작을 표현하는 사물이고, 인터페이스는 클래스나 컴포넌트가 외부에 제공하는 동작(오퍼레이션)들을 모아 놓은 것이다.`},{id:"kw-006",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"UML의 관계(Relationships)에 관한 다음 설명에서 각 번호(①, ②)에 들어갈 알맞은 용어를 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:`관계(Relationships)는 사물과 사물 사이의 연관성을 표현하는 것이다.
① 하나의 사물이 다른 사물에 포함되어 있는 관계로, 전체와 부분으로 구분되어지며 서로 독립적이다.
② 상위 모듈이 하위 모듈보다 더 일반적인 개념을 가지고 있으며, 하위 모듈이 상위 모듈보다 더 구체적인 개념을 가진다.`}],choices:["Association","Aggregation","Composition","Generalization","Dependency","Realization"],blanks:[{label:"①",answer:"Aggregation"},{label:"②",answer:"Generalization"}],explanation:`집합(Aggregation) 관계는 전체와 부분이 서로 독립적으로 존재할 수 있는 포함 관계(속이 빈 마름모)이다.
포함(Composition) 관계는 전체가 사라지면 부분도 함께 사라지는 강한 포함 관계(속이 채워진 마름모)이다.
일반화(Generalization) 관계는 일반적인 상위 개념과 구체적인 하위 개념 사이의 관계(상속)이다.`},{id:"kw-007",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"UML을 이용한 다이어그램 중 다음 그림에 해당하는 다이어그램을 쓰시오.",blocks:[{type:"image",src:"img/practical/kw-007.png",alt:"Order 패키지가 Security 패키지를 import하는 다이어그램"}],choices:["컴포넌트 다이어그램(Component Diagram)","클래스 다이어그램(Class Diagram)","배치 다이어그램(Deployment Diagram)","패키지 다이어그램(Package Diagram)"],blanks:[{answer:"패키지 다이어그램(Package Diagram)",accepts:["패키지","Package"]}],explanation:`패키지 다이어그램은 유스케이스나 클래스 등 모델 요소들을 그룹화한 패키지들의 관계를 표현하는 구조적 다이어그램이다.
탭이 달린 폴더 모양이 패키지이며, 패키지 간의 의존 관계는 점선 화살표와 «import», «access» 같은 스테레오타입으로 표현한다.`},{id:"kw-008",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"LOC 기법에 의하여 예측된 총 라인 수가 30,000라인, 개발에 참여할 프로그래머가 5명, 프로그래머들의 평균 생산성이 월간 300라인일 때 개발에 소요되는 기간을 계산식과 함께 쓰시오.",choices:["(30,000 / 300) / 5 = 20개월","(30,000 × 5) / 300 = 500개월","30,000 / 300 = 100개월","30,000 / (300 + 5) ≒ 98개월"],blanks:[{answer:"(30,000 / 300) / 5 = 20개월"}],explanation:`LOC 기법에서 노력(인월) = 총 LOC ÷ 1인당 월평균 생산 LOC = 30,000 ÷ 300 = 100(인월)이다.
개발 기간 = 노력(인월) ÷ 투입 인원 = 100 ÷ 5 = 20(개월)이다.`},{id:"kw-009",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"essay",question:"데이터베이스의 스키마(Schema)에 대해 간략히 서술하시오.",choices:["스키마는 데이터베이스를 관리하고 운영하는 소프트웨어이다.","스키마는 데이터베이스에 실제로 저장된 데이터 값들의 집합이다.","스키마는 데이터베이스의 구조와 제약 조건에 관한 전반적인 명세를 기술한 것이다.","스키마는 데이터에 대한 사용자의 접근 권한을 부여하고 회수하는 명령어이다."],blanks:[{answer:"스키마는 데이터베이스의 구조와 제약 조건에 관한 전반적인 명세를 기술한 것이다."}],explanation:`스키마는 데이터베이스를 구성하는 개체(Entity), 속성(Attribute), 관계(Relationship)와 데이터 조작 시 지켜야 할 제약 조건을 정의한 것이다.
관점에 따라 외부 스키마, 개념 스키마, 내부 스키마로 나뉜다. '구조'와 '제약 조건'에 대한 '명세'라는 내용이 들어가야 한다.`},{id:"kw-010",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"데이터베이스 설계에 대한 다음 설명에서 괄호(①~③)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`1. ( ① ) : 논리적 구조로 표현된 데이터를 디스크 등의 저장장치에 저장할 수 있는 데이터로 변환하는 과정으로, 파일의 저장 구조 및 액세스 경로를 결정하며, 테이블 정의서 및 명세서가 산출된다.
2. ( ② ) : 현실 세계에 대한 인식을 추상적 개념으로 표현하는 과정으로, 개념 스키마 모델링과 트랜잭션 모델링을 수행하며, 요구 조건 명세를 E-R 다이어그램으로 작성한다.
3. ( ③ ) : 현실의 자료를 특정 DBMS가 지원하는 자료구조로 변환하는 과정으로, 트랜잭션의 인터페이스를 설계하고, 정규화를 통해 스키마를 평가 및 정제한다.`}],choices:["논리적 설계","정규화","물리적 설계","구현","개념적 설계","요구 조건 분석"],blanks:[{label:"①",answer:"물리적 설계",accepts:["물리 설계"]},{label:"②",answer:"개념적 설계",accepts:["개념 설계"]},{label:"③",answer:"논리적 설계",accepts:["논리 설계"]}],explanation:`데이터베이스 설계 순서: 요구 조건 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계 → 구현
• 개념적 설계: 현실 세계를 추상적 개념으로 표현(E-R 다이어그램), DBMS와 독립적
• 논리적 설계: 특정 DBMS가 지원하는 자료구조로 변환, 정규화 수행
• 물리적 설계: 저장 구조와 액세스 경로 결정, 테이블 정의서 산출`},{id:"kw-011",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음은 데이터베이스 구축까지의 과정을 나열한 것이다. 괄호에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"요구 분석 → ( 1 ) → ( 2 ) → ( 3 ) → 구현"}],choices:["물리적 설계","논리적 설계","정규화","요구 조건 분석","개념적 설계","테스트"],blanks:[{label:"1",answer:"개념적 설계",accepts:["개념 설계"]},{label:"2",answer:"논리적 설계",accepts:["논리 설계"]},{label:"3",answer:"물리적 설계",accepts:["물리 설계"]}],explanation:"데이터베이스는 요구 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계 → 구현 순서로 구축하며, 추상적인 개념에서 점점 저장 장치 수준의 구체적인 설계로 진행된다."},{id:"kw-012",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"데이터 모델의 구성 요소에 대한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`1. ( ① )은 데이터베이스에 저장된 실제 데이터를 처리하는 작업에 대한 명세로서 데이터베이스를 조작하는 기본 도구에 해당한다.
2. ( ② )는 논리적으로 표현된 객체 타입들 간의 관계로서 데이터의 구성 및 정적 성질을 표현한다.
3. 제약 조건은 데이터베이스에 저장될 수 있는 실제 데이터의 논리적인 제약 조건을 의미한다.`}],choices:["속성(Attribute)","연산(Operation)","구조(Structure)","도메인(Domain)","제약 조건(Constraint)"],blanks:[{label:"①",answer:"연산(Operation)"},{label:"②",answer:"구조(Structure)"}],explanation:`데이터 모델의 3요소는 구조(Structure), 연산(Operation), 제약 조건(Constraint)이다.
연산은 실제 데이터를 처리하는 작업의 명세, 구조는 개체 타입들 간의 관계(데이터의 정적 성질), 제약 조건은 저장될 수 있는 데이터의 논리적 제약이다.`},{id:"kw-013",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 테이블에서 카디널리티(Cardinality)와 디그리(Degree)를 구하시오.",blocks:[{type:"table",caption:"<회원>",headers:["ID","이름","거주지","신청강의"],rows:[["191-SR05","백영헌","마포구","E01"],["024-RU09","차수인","관악구","S03"],["181-SQ03","허채빈","서대문구","E02"],["059-RL08","윤지호","광진구","S03"],["029-SX07","배서희","서대문구","E02"]]}],choices:["3","4","5","6","20"],blanks:[{label:"카디널리티",answer:"5"},{label:"디그리",answer:"4"}],explanation:`카디널리티(기수)는 튜플(행)의 수, 디그리(차수)는 속성(열)의 수이다.
<회원> 테이블은 튜플이 5개, 속성이 4개(ID, 이름, 거주지, 신청강의)이므로 카디널리티는 5, 디그리는 4이다.`},{id:"kw-014",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 E-R 다이어그램을 참고하여 괄호(①~⑤)의 설명에 적합한 요소를 찾아 기호(㉠~㉤)로 쓰시오.",blocks:[{type:"image",src:"img/practical/kw-014.png",alt:"professor와 student가 advisor 관계로 연결된 E-R 다이어그램"},{type:"text",text:`• ( ① ) : 관계 집합을 의미한다.
• ( ② ) : 관계 집합과 속성을 연결한다.
• ( ③ ) : 개체 집합을 의미하며, 키로 사용되는 항목에는 밑줄을 표시한다.
• ( ④ ) : 관계 집합의 속성을 의미한다.
• ( ⑤ ) : 개체 집합과 관계 집합을 연결한다.`}],choices:["㉠","㉡","㉢","㉣","㉤"],blanks:[{label:"①",answer:"㉡"},{label:"②",answer:"㉢"},{label:"③",answer:"㉠"},{label:"④",answer:"㉣"},{label:"⑤",answer:"㉤"}],explanation:`• 개체 집합(사각형, ㉠ professor): 키 속성(ID)에 밑줄을 표시한다.
• 관계 집합(마름모, ㉡ advisor)
• 관계 집합의 속성(㉣ data)은 관계 집합과 점선(㉢)으로 연결한다.
• 개체 집합과 관계 집합은 실선(㉤)으로 연결한다.`},{id:"kw-015",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"키(Key)에 대한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`키(Key)는 데이터베이스에서 조건에 만족하는 튜플을 찾거나 순서대로 정렬할 때 기준이 되는 속성을 말한다.
• 슈퍼키(Super Key)는 한 릴레이션 내에 있는 속성들의 집합으로 구성된 키로, 릴레이션을 구성하는 모든 튜플에 대해 ( ① )을 만족한다.
• 후보키(Candidate Key)는 릴레이션을 구성하는 속성들 중에서 튜플을 유일하게 식별하기 위해 사용되는 속성들의 부분집합으로, ( ① )과 ( ② )을 만족하는 특징이 있다.`}],choices:["원자성(Atomicity)","유일성(Unique)","독립성(Independence)","무결성(Integrity)","최소성(Minimality)"],blanks:[{label:"①",answer:"유일성(Unique)",accepts:["Uniqueness"]},{label:"②",answer:"최소성(Minimality)"}],explanation:`슈퍼키는 유일성만 만족하고, 후보키는 유일성과 최소성을 모두 만족한다.
• 유일성: 키 값으로 튜플을 유일하게 식별할 수 있는 성질
• 최소성: 튜플을 식별하는 데 꼭 필요한 최소한의 속성으로만 구성되는 성질`},{id:"kw-016",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"관계대수에 대한 다음 설명에서 괄호(①~⑤)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`관계대수는 관계형 데이터베이스에서 원하는 정보와 그 정보를 검색하기 위해서 어떻게 유도하는가를 기술하는 절차적인 언어이다. 관계대수에 사용되는 연산은 다음과 같다.
• 합집합(UNION)은 두 릴레이션에 존재하는 튜플의 합집합을 구하되, 결과로 생성된 릴레이션에서 중복되는 튜플은 제거되는 연산으로, 사용하는 기호는 ( ① )이다.
• 차집합(DIFFERENCE)은 두 릴레이션에 존재하는 튜플의 차집합을 구하는 연산으로, 사용하는 기호는 ( ② )이다.
• 교차곱(CARTESIAN PRODUCT)은 두 릴레이션에 있는 튜플들의 순서쌍을 구하는 연산으로, 사용하는 기호는 ( ③ )이다.
• 프로젝트(PROJECT)는 주어진 릴레이션에서 속성 리스트(Attribute List)에 제시된 속성 값만을 추출하여 새로운 릴레이션을 만드는 연산으로, 사용하는 기호는 ( ④ )이다.
• 조인(JOIN)은 공통 속성을 중심으로 두 개의 릴레이션을 하나로 합쳐서 새로운 릴레이션을 만드는 연산으로, 사용하는 기호는 ( ⑤ )이다.`}],choices:["×","∪","π","⋈","−","σ","÷","∩"],blanks:[{label:"①",answer:"∪",accepts:["U"]},{label:"②",answer:"−",accepts:["-","―","–"]},{label:"③",answer:"×",accepts:["x"]},{label:"④",answer:"π",accepts:["pi","파이"]},{label:"⑤",answer:"⋈",accepts:["▷◁","|><|","><"]}],explanation:`관계대수 연산 기호
• 합집합 ∪, 교집합 ∩, 차집합 −, 교차곱 ×
• 셀렉트 σ(시그마), 프로젝트 π(파이), 조인 ⋈, 디비전 ÷
※ 앱에서는 키보드로 입력하기 어려운 기호 대신 U, -, x, pi, ▷◁ 등으로 입력해도 정답으로 처리합니다.`},{id:"kw-017",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음이 설명하고 있는 관계대수 연산자의 기호를 쓰시오.",blocks:[{type:"text",text:"릴레이션 A, B가 있을 때 릴레이션 B의 조건에 맞는 것들만 릴레이션 A에서 분리하여 프로젝션을 하는 연산이다."}],choices:["π","⋈","÷","σ"],blanks:[{answer:"÷",accepts:["/"]}],explanation:`디비전(DIVISION, ÷)은 릴레이션 A에서 릴레이션 B의 모든 조건(튜플)을 만족하는 튜플만 골라, B의 속성을 제외하고 프로젝션하는 연산이다.
※ 앱에서는 ÷ 대신 / 를 입력해도 정답으로 처리합니다.`},{id:"kw-018",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"데이터베이스에 대한 다음 설명에서 괄호에 공통으로 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`• ( )은 관계 데이터의 연산을 표현하는 방법으로, 관계 데이터 모델의 제안자인 코드(E. F. Codd)가 수학의 술어 해석(Predicate Calculus)에 기반을 두고 관계 데이터베이스를 위해 제안했다.
• 원하는 정보가 무엇이라는 것만 정의하는 비절차적 특성을 지니며, 원하는 정보를 정의할 때 계산 수식을 사용한다.
• 튜플 해석식을 사용하는 튜플 ( )과 도메인 해석식을 사용하는 도메인 ( )으로 구분된다.`}],choices:["관계 스키마(Relation Schema)","관계대수(Relational Algebra)","관계해석(Relational Calculus)","도메인(Domain)"],blanks:[{answer:"관계해석(Relational Calculus)",accepts:["관계 해석"]}],explanation:`관계해석은 코드(E. F. Codd)가 술어 해석에 기반해 제안한 비절차적 언어로, 원하는 정보가 '무엇'인지만 정의한다.
반면 관계대수는 원하는 정보를 '어떻게' 유도하는지 기술하는 절차적 언어이다.`},{id:"kw-019",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"essay",question:"데이터의 중복으로 인해 테이블 조작 시 문제가 발생하는 현상을 이상(Anomaly)이라고 한다. 이상 중 삭제 이상(Deletion Anomaly)에 대해 간략히 서술하시오.",choices:["트랜잭션이 실패하여 작업 내용이 이전 상태로 되돌아가는 현상이다.","테이블의 일부 튜플만 갱신되어 데이터가 서로 불일치하는 현상이다.","테이블에서 튜플을 삭제할 때 의도와는 상관없는 값들도 함께 삭제되는 현상이다.","테이블에 데이터를 삽입할 때 원하지 않는 값들도 함께 삽입해야 하는 현상이다."],blanks:[{answer:"테이블에서 튜플을 삭제할 때 의도와는 상관없는 값들도 함께 삭제되는 현상이다."}],explanation:`이상(Anomaly)의 종류
• 삽입 이상: 데이터를 삽입할 때 원하지 않는 값들도 함께 삽입해야 하는 현상
• 삭제 이상: 튜플을 삭제할 때 의도하지 않은 값들까지 함께 삭제되는 현상(연쇄 삭제)
• 갱신 이상: 일부 튜플만 갱신되어 데이터가 불일치하는 현상`},{id:"kw-020",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"데이터베이스의 이상(Anomaly)의 종류 3가지를 쓰시오.",choices:["병합 이상(Merge Anomaly)","삭제 이상(Deletion Anomaly)","삽입 이상(Insertion Anomaly)","갱신 이상(Update Anomaly)","조회 이상(Selection Anomaly)","정렬 이상(Sort Anomaly)"],blanks:[{answer:"삽입 이상(Insertion Anomaly)",accepts:["삽입"]},{answer:"삭제 이상(Deletion Anomaly)",accepts:["삭제"]},{answer:"갱신 이상(Update Anomaly)",accepts:["갱신","수정 이상"]}],unordered:!0,explanation:"이상(Anomaly)은 삽입 이상, 삭제 이상, 갱신 이상 세 가지이며, 정규화를 통해 제거한다. 순서는 상관없다."},{id:"kw-021",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"함수적 종속(Functional Dependency)에 대한 다음 설명에서 괄호(①~③)에 들어갈 알맞은 용어를 <보기>에서 찾아 기호(㉠~㉧)로 쓰시오. (단, 테이블 <R>의 속성 '학생'과 '학과'는 기본키(Key)이다.)",blocks:[{type:"table",caption:"<R>",headers:["학생 (Key)","학과 (Key)","성적","학년"],rows:[["이순신","컴퓨터공학","A+","2"],["이순신","전기공학","B","2"],["유관순","경제학","B+","1"],["강감찬","문예창작","C","3"],["강감찬","한국사","C+","3"],["홍길동","영문학","B","4"]]},{type:"text",text:`• 테이블 <R>에서 '성적'은 기본키인 {학생, 학과}에 대해 ( ① ) Functional Dependency이다.
• 테이블 <R>에서 '학년'은 기본키인 {학생, 학과} 중 '학생'만으로 식별이 가능하므로 기본키에 대해 ( ② ) Functional Dependency이다.
• 임의의 테이블에 속성 A, B, C가 있을 때, A → B이고 B → C일 때 A → C인 관계는 ( ③ ) Functional Dependency이다.`}],choices:["㉠ Hybrid","㉡ Multi Valued","㉢ Transitive","㉣ Full","㉤ Defined","㉥ Natural","㉦ Relational","㉧ Partial"],blanks:[{label:"①",answer:"㉣"},{label:"②",answer:"㉧"},{label:"③",answer:"㉢"}],explanation:`• 완전 함수적 종속(Full): 속성이 기본키 전체에 종속되는 경우 → '성적'은 {학생, 학과} 전체가 있어야 결정된다.
• 부분 함수적 종속(Partial): 기본키의 일부에만 종속되는 경우 → '학년'은 '학생'만으로 결정된다. (제2정규형에서 제거)
• 이행적 함수적 종속(Transitive): A → B, B → C일 때 A → C가 성립하는 경우 (제3정규형에서 제거)`},{id:"kw-022",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"데이터베이스에 대한 다음 설명에서 괄호에 공통으로 들어갈 알맞은 답을 쓰시오.",blocks:[{type:"text",text:"테이블을 만들 때는 이상(Anomaly)을 방지하기 위해 데이터들의 중복성 및 종속성을 배제하는 정규화를 수행한다. 아래는 부분 함수적 종속을 제거하여 제( ) 정규형을 만드는 과정이다."},{type:"table",caption:"<Table R>",headers:["A(key)","B(key)","C","D"],rows:[["A345","1001","Seoul","Pmre"],["D347","1001","Busan","Preo"],["A210","1007","Gwangju","Ciqen"],["A345","1007","Seoul","Esto"],["B230","1007","Daegu","Loid"],["D347","1201","Busan","Drag"]]},{type:"text",text:`<Table R>의 함수적 종속 관계
A, B → C, D
A → C`},{type:"table",caption:"<Table R1>",headers:["A(key)","B(key)","D"],rows:[["A345","1001","Pmre"],["D347","1001","Preo"],["A210","1007","Ciqen"],["A345","1007","Esto"],["B230","1007","Loid"],["D347","1201","Drag"]]},{type:"table",caption:"<Table R2>",headers:["A(key)","C"],rows:[["A345","Seoul"],["D347","Busan"],["A210","Gwangju"],["B230","Daegu"]]},{type:"text",text:"<Table R>의 경우, C는 key에 해당하는 A와 B 중 A에만 종속되는 부분 함수적 종속이다. 이 문제 해결을 위해 <Table R>에서 C를 분리하여 <Table R1>과 <Table R2>로 만들면 제( ) 정규형에 해당하는 테이블이 완성된다."}],choices:["1","2","3","4"],blanks:[{answer:"2",accepts:["제2정규형","2정규형","2NF","제2"]}],explanation:`<Table R>에서 C는 기본키 {A, B} 중 A에만 종속되는 부분 함수적 종속이다. 부분 함수적 종속을 제거하면 제2정규형(2NF)이 된다.
정규화 단계: 1NF(도메인이 원자값) → 2NF(부분 함수적 종속 제거) → 3NF(이행적 함수적 종속 제거) → BCNF(결정자이면서 후보키가 아닌 것 제거) → 4NF(다치 종속 제거) → 5NF(조인 종속 제거)`},{id:"kw-023",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"시스템의 성능을 향상시키고 개발 및 운영의 편의성 등을 높이기 위해 정규화된 데이터 모델을 의도적으로 통합, 중복, 분리하여 정규화 원칙을 위배하는 행위를 가리키는 용어를 쓰시오.",choices:["이상(Anomaly)","무결성(Integrity)","반정규화(Denormalization)","정규화(Normalization)"],blanks:[{answer:"반정규화(Denormalization)",accepts:["비정규화","역정규화"]}],explanation:`반정규화(비정규화, 역정규화)는 성능 향상과 개발·운영 편의를 위해 정규화된 데이터 모델을 의도적으로 통합·중복·분리하는 것이다.
테이블 통합·분할, 중복 테이블 추가, 중복 속성 추가 등의 방법이 있다.`},{id:"kw-024",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"essay",question:"데이터베이스에서 비정규화(Denormalization)의 개념을 서술하시오.",choices:["비정규화는 데이터베이스의 물리적 저장 구조와 접근 경로를 결정하는 과정이다.","비정규화는 현실 세계의 정보를 E-R 다이어그램으로 표현하는 과정이다.","비정규화는 정규화된 데이터 모델을 통합, 중복, 분리하는 과정으로, 의도적으로 정규화 원칙을 위배하는 행위이다.","비정규화는 데이터의 중복을 제거하기 위해 테이블을 무손실 분해하는 과정이다."],blanks:[{answer:"비정규화는 정규화된 데이터 모델을 통합, 중복, 분리하는 과정으로, 의도적으로 정규화 원칙을 위배하는 행위이다."}],explanation:`핵심 키워드는 '정규화된 데이터 모델', '통합·중복·분리', '의도적으로 정규화 원칙 위배'이다.
목적(시스템 성능 향상, 개발·운영 편의성)까지 함께 쓰면 더 좋다.`},{id:"kw-025",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"essay",question:"데이터베이스의 상태 변화를 일으키는 트랜잭션(Transaction)의 특성 중 원자성(Atomicity)에 대해 간략히 서술하시오.",choices:["원자성은 둘 이상의 트랜잭션이 동시에 실행될 때 실행 중인 트랜잭션에 다른 트랜잭션의 연산이 끼어들 수 없다는 특성을 의미한다.","원자성은 트랜잭션이 실행을 성공적으로 완료하면 언제나 일관성 있는 데이터베이스 상태로 변환해야 한다는 특성을 의미한다.","원자성은 트랜잭션의 연산은 데이터베이스에 모두 반영되도록 완료되든지 아니면 전혀 반영되지 않도록 복구되어야 한다는 특성을 의미한다.","원자성은 성공적으로 완료된 트랜잭션의 결과는 시스템이 고장 나더라도 영구적으로 반영되어야 한다는 특성을 의미한다."],blanks:[{answer:"원자성은 트랜잭션의 연산은 데이터베이스에 모두 반영되도록 완료되든지 아니면 전혀 반영되지 않도록 복구되어야 한다는 특성을 의미한다."}],explanation:`트랜잭션의 특성(ACID)
• 원자성(Atomicity): 모두 반영되거나 전혀 반영되지 않아야 한다(All or Nothing).
• 일관성(Consistency): 실행을 완료하면 언제나 일관성 있는 상태로 변환한다.
• 독립성(Isolation, 격리성): 실행 중인 트랜잭션에 다른 트랜잭션이 끼어들 수 없다.
• 지속성(Durability, 영속성): 완료된 결과는 시스템이 고장 나도 영구적으로 반영되어야 한다.`},{id:"kw-026",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음은 트랜잭션(Transaction)의 특징이다. 괄호(①, ②)에 들어갈 알맞은 특징을 쓰시오.",blocks:[{type:"table",rows:[["( ① )","트랜잭션의 연산은 데이터베이스에 모두 반영되도록 완료(Commit)되든지 아니면 전혀 반영되지 않도록 복구(Rollback)되어야 한다. (All or Nothing)"],["일관성","트랜잭션이 그 실행을 성공적으로 완료하면 언제나 일관성 있는 데이터베이스 상태로 변환한다."],["( ② )","둘 이상의 트랜잭션이 동시에 병행 실행되는 경우 어느 하나의 트랜잭션 실행중에 다른 트랜잭션의 연산이 끼어들 수 없다."],["지속성","성공적으로 완료된 트랜잭션의 결과는 시스템이 고장나더라도 영구적으로 반영되어야 한다."]]}],choices:["무결성(Integrity)","원자성(Atomicity)","일관성(Consistency)","독립성(Isolation)","지속성(Durability)"],blanks:[{label:"①",answer:"원자성(Atomicity)"},{label:"②",answer:"독립성(Isolation)",accepts:["격리성","고립성"]}],explanation:"트랜잭션의 4가지 특성은 원자성(Atomicity), 일관성(Consistency), 독립성(Isolation), 지속성(Durability)으로, 앞 글자를 따서 ACID라고 한다."},{id:"kw-027",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 설명에서 괄호에 공통으로 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"파일의 구조는 파일을 구성하는 레코드들이 보조기억장치에 편성되는 방식을 의미하는 것으로, 크게 순차, ( ), 해싱으로 구분한다. ( ) 파일 구조는 <값, 주소> 쌍으로 구성되는 데이터 구조를 활용하여 데이터에 접근하는 방식으로, 자기 디스크에서 주로 활용된다."}],choices:["클러스터(Cluster)","순차(Sequential)","색인(Index)","해싱(Hashing)"],blanks:[{answer:"색인(Index)",accepts:["인덱스"]}],explanation:`파일 구조는 순차(Sequential), 색인(Index), 해싱(Hashing) 방식으로 구분한다.
색인 파일 구조는 <값, 주소> 쌍으로 구성된 인덱스를 이용해 레코드에 접근한다.`},{id:"kw-028",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"시스템 관리와 관련하여 다음의 설명이 의미하는 용어를 쓰시오.",blocks:[{type:"text",text:'A는 한국 IT 보안관제실에서 근무하게 되었다. A는 서비스 운용 중 외부 공격으로 인한 서버다운, 자연 재해, 시스템 장애 등의 비상 상황에도 고객 응대 서비스를 정상적으로 수행하기 위해 구축한 시스템을 관리하는 업무를 수행한다. 이 용어는 위와 같은 비상 상황이 발생한 경우 "비상사태 또는 업무중단 시점부터 업무가 복구되어 다시 정상 가동 될 때까지의 시간"을 의미한다.'}],choices:["MTBF(평균 고장 간격)","RPO(목표복구시점)","BCP(업무 연속성 계획)","RTO(목표복구시간)"],blanks:[{answer:"RTO(목표복구시간)",accepts:["Recovery Time Objective","목표 복구 시간"]}],explanation:`RTO(Recovery Time Objective, 목표 복구 시간)는 비상사태나 업무 중단 시점부터 업무가 복구되어 다시 정상 가동될 때까지 걸리는 시간이다.
RPO(Recovery Point Objective, 목표 복구 시점)는 데이터를 어느 시점까지 복구해야 하는지를 나타내는 기준이다.`},{id:"kw-029",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"데이터베이스 보안에 관련된 다음 설명에 해당하는 용어를 쓰시오.",blocks:[{type:"text",text:"접근통제는 데이터가 저장된 객체와 이를 사용하려는 주체 사이의 정보 흐름을 제한하는 것이다. 이러한 접근통제에 관한 기술 중 ( )는 데이터에 접근하는 사용자의 신원에 따라 접근 권한을 부여하여 제어하는 방식으로, 데이터의 소유자가 접근통제 권한을 지정하고 제어한다. 객체를 생성한 사용자가 생성된 객체에 대한 모든 권한을 부여받고, 부여된 권한을 다른 사용자에게 허가할 수도 있다."}],choices:["ACL(접근 제어 목록)","RBAC(역할 기반 접근통제)","DAC(임의 접근통제)","MAC(강제 접근통제)"],blanks:[{answer:"DAC(임의 접근통제)",accepts:["Discretionary Access Control","임의 접근 통제","임의적 접근통제"]}],explanation:`• 임의 접근통제(DAC): 사용자의 신원에 따라 권한을 부여하며, 데이터 소유자가 권한을 지정·제어한다.
• 강제 접근통제(MAC): 주체와 객체의 보안 등급(레이블)을 비교해 시스템이 접근을 통제한다.
• 역할 기반 접근통제(RBAC): 사용자의 역할에 따라 권한을 부여한다.`},{id:"kw-030",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 설명에 해당하는 DB의 트랜잭션 연산을 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:`DBMS는 데이터베이스에 치명적인 손실이 발생했을 때 이를 복구하기 위해 데이터베이스의 처리 내용이나 이용 상황 등 상태 변화를 시간의 흐름에 따라 기록한 로그를 생성한다.
• ( ① ) : 데이터베이스가 비정상적으로 종료되었을 때, 디스크에 저장된 로그를 분석하여 트랜잭션의 시작(start)과 완료(commit)에 대한 기록이 있는 트랜잭션들의 작업을 재작업한다. 즉 로그를 이용하여 해당 데이터 항목에 대해 이전 값을 이후 값으로 변경하는 연산이다.
• ( ② ) : 데이터베이스가 비정상적으로 종료되었을 때, 디스크에 저장된 로그를 분석하여 트랜잭션의 시작을 나타내는 'start'는 있지만 완료를 나타내는 'commit' 기록이 없는 트랜잭션들이 작업한 내용들을 모두 취소한다. 즉 로그를 이용하여 해당 데이터 항목에 대해 이후 값을 이전 값으로 변경한다.`}],choices:["ROLLBACK","UNDO","LOG","COMMIT","REDO","RECOVERY","BACKUP","CHECK"],blanks:[{label:"①",answer:"REDO"},{label:"②",answer:"UNDO"}],explanation:`• REDO: commit 기록이 있는 트랜잭션의 작업을 로그를 이용해 다시 수행한다(이전 값 → 이후 값).
• UNDO: commit 기록이 없는 트랜잭션의 작업을 로그를 이용해 모두 취소한다(이후 값 → 이전 값).`},{id:"kw-031",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"SW 인터페이스 구현에 관련된 다음 설명에서 괄호에 공통으로 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"웹 페이지의 기본 형식인 HTML의 문법이 각 웹 브라우저에서 상호 호환적이지 못하다는 문제와 SGML의 복잡함을 해결하기 위하여 개발된 ( )은 다른 특수한 목적을 갖는 마크업 언어이다. 원활한 데이터의 연계를 위해 송·수신 시스템 간에 전송되는 데이터가 동일한 구조로 구성될 수 있도록 형태를 정의하는 역할을 수행하며, 다음과 같은 특징이 있다."},{type:"table",rows:[[`유니코드 문자
(Unicode Text)`,"텍스트 데이터 형식으로 유니코드를 사용하여 전 세계 언어를 지원한다."],["( ) 파서(Parser)","대다수의 웹 브라우저가 해석을 위한 번역기(Parser)를 내장하고 있다."],[`마크업(Markup)과
내용(Content)`,`• ( ) 문서의 문자들은 마크업과 내용으로 구분된다.
• 일반적으로 마크업은 "<"로 시작하여 ">"로 끝나는 태그(Tag)를 의미하고, 그 외의 문자열은 내용에 해당한다.`],["엘리먼트(Element)","마크업과 내용으로 이루어지는 하나의 요소를 의미한다."]]}],choices:["SGML(Standard Generalized Markup Language)","JSON(JavaScript Object Notation)","HTML(Hyper Text Markup Language)","XML(eXtensible Markup Language)"],blanks:[{answer:"XML(eXtensible Markup Language)"}],explanation:`XML은 HTML의 브라우저 간 호환 문제와 SGML의 복잡함을 해결하기 위해 개발된 다목적 마크업 언어이다.
사용자가 태그를 직접 정의할 수 있고, 시스템 간 데이터를 동일한 구조로 주고받기 위한 연계에 많이 쓰인다.`},{id:"kw-032",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"통합 구현과 관련하여 다음 설명의 괄호에 공통으로 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"( )는 HTTP, HTTPS, SMTP 등을 사용하여 xml 기반의 메시지를 네트워크 상에서 교환하는 프로토콜로, ( ) envelope, 헤더(header), 바디(body) 등이 추가된 xml 문서이다. ( )는 복잡하고 무거운 구조로 구성되어 있어 ( ) 보다는 restful 프로토콜을 이용하기도 한다."}],choices:["SOAP(Simple Object Access Protocol)","REST(Representational State Transfer)","WSDL(Web Services Description Language)","UDDI(Universal Description, Discovery and Integration)"],blanks:[{answer:"SOAP(Simple Object Access Protocol)"}],explanation:`SOAP은 HTTP, HTTPS, SMTP 등을 이용해 XML 기반 메시지를 교환하는 프로토콜로, Envelope·Header·Body로 구성된다.
구조가 복잡하고 무거워 최근에는 REST(RESTful) 방식을 많이 사용한다.`},{id:"kw-033",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"웹 서비스(Web Service)와 관련된 다음 설명에 해당하는 용어를 쓰시오.",blocks:[{type:"text",text:"웹 서비스와 관련된 서식이나 프로토콜 등을 표준적인 방법으로 기술하고 게시하기 위한 언어로, XML로 작성되며 UDDI의 기초가 된다. SOAP, XML 스키마와 결합하여 인터넷에서 웹 서비스를 제공하기 위해 사용되며, 클라이언트는 이것을 통해 서버에서 어떠한 조작이 가능한지를 파악할 수 있다."}],choices:["SOAP(Simple Object Access Protocol)","UDDI(Universal Description, Discovery and Integration)","WSDL(Web Services Description Language)","XML(eXtensible Markup Language)"],blanks:[{answer:"WSDL(Web Services Description Language)"}],explanation:`웹 서비스의 구성 요소
• SOAP: XML 기반 메시지를 교환하는 프로토콜
• WSDL: 웹 서비스의 서식, 프로토콜, 제공 기능 등을 기술하는 XML 언어
• UDDI: WSDL을 등록하고 검색하기 위한 저장소`},{id:"kw-034",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"럼바우(Rumbaugh) 데이터 모델링에 대한 다음 설명에서 각 지문(①~③)에 해당하는 모델링을 <보기>에서 찾아 기호(㉠~㉧)로 쓰시오.",blocks:[{type:"text",text:`① 다수의 프로세스들 간의 자료 흐름을 중심으로 처리 과정을 표현한 모델링 [예] 자료흐름도(DFD)
② 시간의 흐름에 따른 객체들 간의 제어 흐름, 상호 작용, 동작 순서 등의 동적인 행위를 표현하는 모델링 [예] 상태 변화도(STD), 사건 추적도
③ 시스템에서 요구되는 객체를 찾아내어 속성과 연산 식별 및 객체들 간의 관계를 규정하여 표시하는 모델링 [예] ER 다이어그램(ERD)`}],choices:["㉠ Operation","㉡ Sequence","㉢ Information","㉣ Transaction","㉤ Function","㉥ I/O","㉦ Dynamic","㉧ Cause-Effect"],blanks:[{label:"①",answer:"㉤"},{label:"②",answer:"㉦"},{label:"③",answer:"㉢"}],explanation:`럼바우 분석 기법은 객체(정보) 모델링 → 동적 모델링 → 기능 모델링 순으로 진행한다.
• 객체(Object, Information) 모델링: 객체와 관계를 규정 → E-R 다이어그램
• 동적(Dynamic) 모델링: 시간 흐름에 따른 제어 흐름·상호작용 → 상태 다이어그램
• 기능(Functional) 모델링: 프로세스 간 자료 흐름 → 자료 흐름도(DFD)`},{id:"kw-035",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"객체지향에 대한 다음 설명에 해당하는 용어를 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:`• 자신이 사용하지 않는 인터페이스와 의존 관계를 맺거나 영향을 받지 않아야 한다는 객체지향 설계 원칙 중의 하나이다.
• 예를 들어 프린터, 팩스, 복사 기능을 가진 복합기의 경우 3가지 기능을 모두 가진 범용 인터페이스보다는 프린터 인터페이스, 팩스 인터페이스, 복사 인터페이스로 분리함으로써 하나의 기능 변경으로 인해 다른 기능이 영향을 받지 않도록 해야 한다.`}],choices:["SRP","SOLID","OCP","LSP","ISP","DIP","OTP","PNP"],blanks:[{answer:"ISP"}],explanation:`객체지향 설계 원칙(SOLID)
• SRP(단일 책임), OCP(개방-폐쇄), LSP(리스코프 치환), ISP(인터페이스 분리), DIP(의존 역전)
ISP는 클라이언트가 자신이 사용하지 않는 인터페이스에 의존하지 않도록 인터페이스를 작게 분리해야 한다는 원칙이다.`},{id:"kw-036",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"결합도(Coupling)의 종류 중 단순 처리 대상인 데이터만 전달되는 것이 아니라 어떻게 처리해야 하는지를 결정하는 제어 요소가 전달되는 경우의 결합도를 영문으로 쓰시오.",choices:["Stamp Coupling","Common Coupling","Control Coupling","Data Coupling"],blanks:[{answer:"Control Coupling"}],explanation:`결합도(약함 → 강함): 자료(Data) < 스탬프(Stamp) < 제어(Control) < 외부(External) < 공통(Common) < 내용(Content)
제어 결합도는 처리할 데이터뿐 아니라 처리 방식을 결정하는 제어 요소(플래그 등)를 전달하는 경우이다.`},{id:"kw-037",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"결합도(Coupling)에 대한 다음 설명에서 괄호(①~③)에 들어갈 알맞은 용어를 <보기>에서 찾아 기호(㉠~㉥)로 쓰시오.",blocks:[{type:"text",text:`1. ( ① )는 모듈 간의 인터페이스로 데이터, 지역 변수 등을 직접 참조하거나 수정할 때의 결합도다.
2. ( ② )는 모듈 간의 인터페이스로 배열이나 레코드 등의 자료 구조가 전달될 때의 결합도다.
3. ( ③ )는 모듈 간의 인터페이스로 파라미터가 아닌 모듈 밖에 선언된 전역 변수를 사용하여 전역 변수를 갱신하는 방식으로 상호작용하는 때의 결합도다.`}],choices:["㉠ 자료 결합도","㉡ 스탬프 결합도","㉢ 제어 결합도","㉣ 공통 결합도","㉤ 내용 결합도","㉥ 외부 결합도"],blanks:[{label:"①",answer:"㉤"},{label:"②",answer:"㉡"},{label:"③",answer:"㉣"}],explanation:`• 내용 결합도: 다른 모듈의 내부 데이터나 지역 변수를 직접 참조·수정하는 경우
• 스탬프 결합도: 배열이나 레코드 같은 자료 구조가 전달되는 경우
• 공통 결합도: 전역 변수(공통 데이터 영역)를 여러 모듈이 함께 사용하는 경우`},{id:"kw-038",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"소프트웨어 패키징이란 모듈별로 생성한 실행 파일들을 묶어 배포용 설치 파일을 만드는 것을 말한다. 소스 코드는 향후 관리를 고려하여 모듈화하여 패키징한다. 모듈화는 모듈 간 ( ① )의 최소화와 모듈 내 요소들의 ( ② )를 최대화 하는 것이 목표이다. 괄호(①, ②)에 들어갈 알맞은 용어를 쓰시오.",choices:["결합도(Coupling)","팬아웃(Fan-Out)","응집도(Cohesion)","복잡도(Complexity)","팬인(Fan-In)"],blanks:[{label:"①",answer:"결합도(Coupling)"},{label:"②",answer:"응집도(Cohesion)"}],explanation:"좋은 모듈화는 모듈 간의 결합도는 낮추고(약하게), 모듈 내부 요소들의 응집도는 높이는(강하게) 것이다."},{id:"kw-039",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"모듈에 대한 다음 설명에서 각 지문(①~③)에 해당하는 응집도(Cohesion)를 <보기>에서 찾아 기호(㉠~㉦)로 쓰시오.",blocks:[{type:"text",text:`① 내부의 요소들이 기능적으로 연관성은 없으나, 순차적으로 실행될 때의 응집도
② 서로 다른 기능을 수행하지만 동일한 입력과 출력을 사용할 때의 응집도
③ 하나의 기능에 밀접하게 관련되어 있거나 연관되어 있을 때의 응집도`}],choices:["㉠ 기능적 응집도","㉡ 순차적 응집도","㉢ 교환적 응집도","㉣ 절차적 응집도","㉤ 시간적 응집도","㉥ 논리적 응집도","㉦ 우연적 응집도"],blanks:[{label:"①",answer:"㉣"},{label:"②",answer:"㉢"},{label:"③",answer:"㉠"}],explanation:`응집도(강함 → 약함): 기능적 > 순차적 > 교환(통신)적 > 절차적 > 시간적 > 논리적 > 우연적
• 절차적 응집도: 구성 요소들이 기능적 연관성 없이 순차적으로 수행되는 경우
• 교환적 응집도: 동일한 입력과 출력을 사용하여 서로 다른 기능을 수행하는 경우
• 기능적 응집도: 모든 요소가 단일 기능에 밀접하게 관련된 경우`},{id:"kw-040",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음의 모듈 관계를 표현한 시스템 구조도를 참고하여 모듈 F의 팬인(Fan-In)과 팬아웃(Fan-Out)을 구하시오.",blocks:[{type:"image",src:"img/practical/kw-040.png",alt:"A 아래 B, C, D가 있고 B, C, D가 F를, F가 G와 H를 호출하는 시스템 구조도"}],choices:["0","1","2","3","4"],blanks:[{label:"팬인(Fan-In)",answer:"3"},{label:"팬아웃(Fan-Out)",answer:"2"}],explanation:`팬인은 어떤 모듈을 호출(제어)하는 상위 모듈의 수, 팬아웃은 어떤 모듈이 호출(제어)하는 하위 모듈의 수이다.
F는 B, C, D로부터 호출되므로 팬인은 3이고, G와 H를 호출하므로 팬아웃은 2이다.`},{id:"kw-041",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"네트워크에 관련된 다음 설명에 해당하는 용어를 쓰시오.",blocks:[{type:"text",text:"모듈 간 통신 방식을 구현하기 위해 사용되는 대표적인 프로그래밍 인터페이스 집합으로, 복수의 프로세스를 수행하며 이뤄지는 프로세스 간 통신까지 구현이 가능하다. 대표적인 메소드에는 공유 메모리(Shared Memory), 소켓(Socket), 세마포어(Semaphores), 파이프와 네임드 파이프(Pipes&named Pipes), 메시지 큐잉(Message Queueing)이 있다."}],choices:["API(Application Programming Interface)","RPC(Remote Procedure Call)","IPC(Inter-Process Communication)","EAI(Enterprise Application Integration)"],blanks:[{answer:"IPC(Inter-Process Communication)",accepts:["프로세스 간 통신"]}],explanation:`IPC(Inter-Process Communication)는 프로세스 간 데이터를 주고받기 위한 프로그래밍 인터페이스 집합으로, 모듈 간 통신 방식을 구현할 때 사용한다.
대표 메소드: 공유 메모리, 소켓, 세마포어, 파이프와 네임드 파이프, 메시지 큐잉`},{id:"kw-042",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"다음 테스트 케이스를 참조하여 괄호에 들어갈 테스트 케이스의 구성 요소를 <보기>에서 찾아 쓰시오.",blocks:[{type:"table",headers:["식별자_ID","테스트 항목","( ① )","( ② )","( ③ )"],rows:[["LS_W10_35","로그인 기능","사용자 초기 화면",`아이디(test_a01)
비밀번호(203a!d5%ffa1)`,"로그인 성공"],["LS_W10_36","로그인 기능","사용자 초기 화면",`아이디(test_a01)
비밀번호(1234)`,`로그인 실패(1)
- 비밀번호 비일치`],["LS_W10_37","로그인 기능","사용자 초기 화면",`아이디("")
비밀번호("")`,`로그인 실패(2)
- 미입력`]]}],choices:["요구 절차","의존성 여부","테스트 데이터","테스트 조건","하드웨어 환경","예상 결과","소프트웨어 환경","성공/실패 기준"],blanks:[{label:"①",answer:"테스트 조건"},{label:"②",answer:"테스트 데이터"},{label:"③",answer:"예상 결과"}],explanation:`테스트 케이스는 식별자, 테스트 항목, 테스트 조건, 테스트 데이터, 예상 결과 등으로 구성된다.
표에서 '사용자 초기 화면'은 테스트를 수행하기 위한 조건, 아이디·비밀번호 값은 입력하는 테스트 데이터, 로그인 성공·실패는 예상 결과이다.`},{id:"kw-043",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"디자인 패턴에 관한 다음 설명에서 괄호에 들어갈 알맞은 용어를 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:"( ) 패턴은 객체 생성을 서브 클래스에서 처리하도록 분리하여 캡슐화한 패턴으로, 상위 클래스에서 인터페이스만 정의하고 실제 생성은 서브 클래스가 담당한다. 다른 이름으로 가상 생성자(Virtual Constructor) 패턴이라고도 불린다."}],choices:["Singleton","Abstract Factory","Factory Method","Prototype","Facade","Composite","Template Method","Builder"],blanks:[{answer:"Factory Method"}],explanation:"팩토리 메소드(Factory Method) 패턴은 상위 클래스에서 객체 생성 인터페이스만 정의하고, 실제 객체 생성은 서브 클래스가 담당하도록 하는 생성 패턴이다. 가상 생성자(Virtual Constructor) 패턴이라고도 한다."},{id:"kw-044",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"디자인 패턴에 대한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 용어를 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:`• ( ① ) 패턴은 구현부에서 추상층을 분리하여, 서로가 독립적으로 확장할 수 있도록 구성한 패턴으로, 기능과 구현을 두 개의 별도 클래스로 구현한다는 특징이 있다.
• ( ② ) 패턴은 한 객체의 상태가 변화하면 객체에 상속된 다른 객체들에게 변화된 상태를 전달하는 패턴으로, 일대다의 의존성을 정의한다. 주로 분산된 시스템 간에 이벤트를 생성·발행(Publish)하고, 이를 수신(Subscribe)해야 할 때 이용한다.`}],choices:["Builder","Factory Method","Adapter","Bridge","Facade","Proxy","Observer","Mediator"],blanks:[{label:"①",answer:"Bridge"},{label:"②",answer:"Observer"}],explanation:`• 브리지(Bridge): 기능 계층과 구현 계층을 분리하여 서로 독립적으로 확장할 수 있게 하는 구조 패턴
• 옵서버(Observer): 한 객체의 상태가 바뀌면 의존하는 다른 객체들에게 알리는 일대다 의존성의 행위 패턴(발행/구독)`},{id:"kw-045",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"디자인 패턴에 관련된 다음 설명에서 괄호에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"디자인 패턴은 모듈 간의 관계 및 인터페이스를 설계할 때 참조할 수 있는 전형적인 해결 방식 또는 예제를 의미한다. 그 중 ( ) 패턴은 클래스나 객체들이 서로 상호작용하는 방법이나 책임 분배 방법을 정의하는 패턴으로, Interpreter, Observer, Command 등이 그 예에 해당한다."}],choices:["기능(Functional)","생성(Creational)","행위(Behavioral)","구조(Structural)"],blanks:[{answer:"행위(Behavioral)",accepts:["행위 패턴","Behavior"]}],explanation:`GoF 디자인 패턴 분류
• 생성 패턴: Abstract Factory, Builder, Factory Method, Prototype, Singleton
• 구조 패턴: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy
• 행위 패턴: Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor`},{id:"kw-046",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"기업 내 각종 애플리케이션 및 플랫폼 간의 정보 전달, 연계, 통합 등 상호 연동이 가능하게 해주는 솔루션으로, Point-to-Point, Hub&Spoke, Message Bus, Hybrid 등의 다양한 방식으로 구축이 가능한 모듈 연계 방법을 쓰시오.",choices:["ERP(Enterprise Resource Planning)","EAI(Enterprise Application Integration)","SOA(Service Oriented Architecture)","ESB(Enterprise Service Bus)"],blanks:[{answer:"EAI(Enterprise Application Integration)"}],explanation:`EAI는 기업 내 애플리케이션과 플랫폼을 연계·통합하는 솔루션으로 Point-to-Point, Hub & Spoke, Message Bus, Hybrid 방식으로 구축한다.
비슷한 모듈 연계 방법으로 ESB(Enterprise Service Bus)가 있으며, ESB는 애플리케이션 간 표준 기반 인터페이스를 제공하는 솔루션이다.`},{id:"kw-047",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"EAI(Enterprise Application Integration)의 구축 유형에 대한 설명이다. 괄호(①, ②) 안에 각각 들어갈 알맞은 유형을 쓰시오.",blocks:[{type:"text",text:"EAI(Enterprise Application Integration)는 기업 내 각종 애플리케이션 및 플랫폼 간의 정보 전달, 연계, 통합 등 상호 연동이 가능하게 해주는 솔루션이다. 비즈니스 간 통합 및 연계성을 증대시켜 효율성 및 각 시스템 간의 확정성(Determinacy)을 높여 준다. EAI의 구축 유형은 다음과 같다."},{type:"table",rows:[["( ① )",`• 가장 기본적인 애플리케이션 통합 방식으로, 애플리케이션을 1 : 1로 연결한다.
• 변경 및 재사용이 어렵다.`],["( ② )",`• 단일 접점인 허브 시스템을 통해 데이터를 전송하는 중앙 집중형 방식이다.
• 확장 및 유지 보수가 용이하다.
• 허브 장애 발생 시 시스템 전체에 영향을 미친다.`],["Message Bus",`• 애플리케이션 사이에 미들웨어를 두어 처리하는 방식이다.
• 확장성이 뛰어나며 대용량 처리가 가능하다.`],["Hybrid",`• 그룹 내에서는 ( ② ) 방식을, 그룹 간에는 Message Bus 방식을 사용한다.
• 필요한 경우 한 가지 방식으로 EAI 구현이 가능하다.
• 데이터 병목 현상을 최소화할 수 있다.`]]}],choices:["Peer to Peer","Point to Point","Hybrid","Message Bus","Hub & Spoke"],blanks:[{label:"①",answer:"Point to Point",accepts:["Point-to-Point"]},{label:"②",answer:"Hub & Spoke",accepts:["Hub and Spoke","Hub-and-Spoke"]}],explanation:`• Point-to-Point: 애플리케이션을 1:1로 직접 연결하는 가장 기본적인 방식, 변경·재사용이 어렵다.
• Hub & Spoke: 허브 시스템을 통해 데이터를 전송하는 중앙 집중형 방식, 허브 장애 시 전체에 영향을 준다.
• Message Bus: 애플리케이션 사이에 미들웨어(버스)를 두어 처리하는 방식, 확장성이 뛰어나다.
• Hybrid: 그룹 내에서는 Hub & Spoke, 그룹 간에는 Message Bus 방식을 사용한다.`},{id:"kw-048",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"소프트웨어 인터페이스 구현에 관련된 다음 설명에서 괄호에 공통으로 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"( )은 속성-값 쌍(Attribute-Value Pairs)으로 이루어진 데이터 객체를 전달하기 위해 사람이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷이다. 비동기 처리에 사용되는 AJAX에서 XML을 대체하여 사용되고 있다. 다음은 ( )이 가질 수 있는 자료 기본형이다."},{type:"table",rows:[["숫자","정수와 실수를 표현한다."],["문자열",'유니코드 문자로 표현하며, 큰따옴표(" ")로 묶는다.'],["참/거짓","참(True) 또는 거짓(False)을 표현한다."],["배열","다양한 요소들을 쉼표로 구분하여 표현하며, 대괄호([ ])로 묶는다."],["객체","이름/값 쌍으로 표현하며, 중괄호({ })로 묶는다."],["NULL","아직 알려지지 않거나 모르는 값을 표현하기 위한 자료형이다."]]}],choices:["YAML(YAML Ain't Markup Language)","XML(eXtensible Markup Language)","CSV(Comma Separated Values)","JSON(JavaScript Object Notation)"],blanks:[{answer:"JSON(JavaScript Object Notation)"}],explanation:`JSON은 속성-값 쌍(Attribute-Value Pairs)으로 이루어진 데이터 객체를 사람이 읽을 수 있는 텍스트로 전달하는 개방형 표준 포맷이다.
AJAX에서 XML을 대체하여 많이 사용된다.`},{id:"kw-049",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"클라이언트와 서버 간 자바스크립트 및 XML을 비동기 방식으로 처리하며, 전체 페이지를 새로 고치지 않고도 웹페이지 일부 영역만을 업데이트할 수 있도록 하는 기술을 의미하는 용어를 쓰시오.",choices:["REST(Representational State Transfer)","AJAX(Asynchronous JavaScript and XML)","JSON(JavaScript Object Notation)","DOM(Document Object Model)"],blanks:[{answer:"AJAX(Asynchronous JavaScript and XML)"}],explanation:"AJAX는 자바스크립트와 XML(또는 JSON)을 이용해 서버와 비동기로 통신하여, 페이지 전체를 새로 고치지 않고 필요한 일부 영역만 갱신하는 기술이다."},{id:"kw-050",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"네트워크 트래픽에 대해 IP(Internet Protocol) 계층에서 IP 패킷 단위의 데이터 변조 방지 및 은닉 기능을 제공하는 네트워크 계층에서의 보안 통신 규약을 쓰시오.",choices:["IPSec(Internet Protocol Security)","S-HTTP(Secure HTTP)","SSH(Secure Shell)","SSL(Secure Sockets Layer)"],blanks:[{answer:"IPSec(Internet Protocol Security)"}],explanation:`IPSec은 네트워크 계층(3계층)에서 IP 패킷 단위로 암호화, 인증, 무결성을 제공하는 보안 프로토콜이다.
인증(AH)과 암호화(ESP) 프로토콜을 사용하며, 전송 모드와 터널 모드가 있다.`},{id:"kw-051",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"인터페이스 구현 검증 도구에 대한 다음 설명에 해당하는 용어를 영문으로 쓰시오.",blocks:[{type:"text",text:"Kent Beck과 Erich Gamma 등이 개발한 자바 프로그래밍 언어용 유닛 테스트 프레임워크로, xUnit 계열의 한 종류다. 같은 테스트 코드를 여러 번 작성하지 않게 도와주며, 테스트마다 예상 결과를 기억할 필요가 없는 자동화된 해법을 제공한다는 특징이 있다."}],choices:["NUnit","JUnit","Selenium","STAF"],blanks:[{answer:"JUnit"}],explanation:`인터페이스 구현 검증 도구: xUnit(Java용은 JUnit), STAF, FitNesse, NTAF, Selenium, watir
JUnit은 Kent Beck과 Erich Gamma 등이 개발한 Java 단위 테스트 프레임워크이다.`},{id:"kw-052",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"사용자 인터페이스(UI)에 대한 다음 설명에 해당하는 용어를 영문 약어로 쓰시오.",blocks:[{type:"text",text:"사용자의 자연스러운 움직임을 통해 시스템과 상호작용하는 사용자 인터페이스(UI)로, 키보드나 마우스와 같이 조작을 배워야 하는 인공 제어 장치를 사용하는 인터페이스와 구분하기 위해 '자연스러운'이라는 표현을 사용한다. 시리(Siri), 빅스비(Bixby) 등과 같은 음성 비서에게 사용하는 자연어 명령이나 휴대폰이나 태블릿에서의 터치 등이 여기에 해당한다."}],choices:["GUI","NUI","CLI","OUI"],blanks:[{answer:"NUI",accepts:["Natural User Interface"]}],explanation:`UI의 종류
• CLI: 명령어를 텍스트로 입력하는 인터페이스
• GUI: 아이콘·메뉴를 마우스로 선택하는 그래픽 인터페이스
• NUI: 말이나 터치, 동작 등 사용자의 자연스러운 움직임으로 조작하는 인터페이스
• OUI: 모든 사물과 사용자 간의 상호작용을 위한 인터페이스`},{id:"kw-053",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"Windows, MacOS 등에서 사용하는 인터페이스로, 사용자가 명령어를 직접 입력하지 않고 키보드와 마우스 등을 이용하여 아이콘이나 메뉴를 선택하여 모든 작업을 수행하는 사용자 인터페이스를 쓰시오.",choices:["NUI(자연 사용자 인터페이스)","OUI(유기적 사용자 인터페이스)","CLI(명령어 사용자 인터페이스)","GUI(그래픽 사용자 인터페이스)"],blanks:[{answer:"GUI(그래픽 사용자 인터페이스)",accepts:["Graphical User Interface"]}],explanation:`GUI(Graphical User Interface)는 그래픽 요소(아이콘, 메뉴)를 마우스 등으로 선택해 작업하는 인터페이스이다.
명령어를 직접 입력하는 방식은 CLI(Command Line Interface)이다.`},{id:"kw-054",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"essay",question:"UI(User Interface)의 설계 원칙 중 직관성에 대해 간략히 서술하시오.",choices:["직관성은 사용자의 목적을 정확하고 완벽하게 달성해야 한다는 설계 원칙이다.","직관성은 누구나 쉽게 이해하고 사용할 수 있어야 한다는 설계 원칙이다.","직관성은 누구나 쉽게 배우고 익힐 수 있어야 한다는 설계 원칙이다.","직관성은 사용자의 요구사항을 최대한 수용하고 실수를 최소화해야 한다는 설계 원칙이다."],blanks:[{answer:"직관성은 누구나 쉽게 이해하고 사용할 수 있어야 한다는 설계 원칙이다."}],explanation:`UI 설계 원칙
• 직관성: 누구나 쉽게 이해하고 사용할 수 있어야 한다.
• 유효성: 사용자의 목적을 정확하고 완벽하게 달성해야 한다.
• 학습성: 누구나 쉽게 배우고 익힐 수 있어야 한다.
• 유연성: 사용자의 요구사항을 최대한 수용하고 실수를 최소화해야 한다.`},{id:"kw-055",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"사용자 인터페이스에 대한 다음 설명에서 괄호에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"table",rows:[["직관성","누구나 쉽게 이해하고 사용할 수 있어야 한다."],["(        )","사용자의 목적을 정확하고 완벽하게 달성해야 한다."],["학습성","누구나 쉽게 배우고 익힐 수 있어야 한다."],["유연성","사용자의 요구사항을 최대한 수용하고 실수를 최소화해야 한다."]]}],choices:["가시성","효율성","유효성","일관성"],blanks:[{answer:"유효성"}],explanation:"UI 설계 원칙은 직관성, 유효성, 학습성, 유연성이다. 사용자의 목적을 정확하고 완벽하게 달성해야 한다는 원칙은 유효성이다."},{id:"kw-056",session:"키워드",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"인터페이스에 관련된 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`• ( ① ) : 사용자가 시스템이나 서비스를 이용하면서 느끼고 생각하게 되는 총체적인 감정 및 경험
• ( ② ) : 사용자와 시스템 간의 상호작용이 원활하게 이뤄지도록 도와주는 장치나 소프트웨어 [예] CLI, GUI 등`}],choices:["HCI(인간-컴퓨터 상호작용)","BX(브랜드 경험)","CX(고객 경험)","UI(사용자 인터페이스)","UX(사용자 경험)"],blanks:[{label:"①",answer:"UX(사용자 경험)",accepts:["User Experience"]},{label:"②",answer:"UI(사용자 인터페이스)",accepts:["User Interface"]}],explanation:`• UX(User Experience): 사용자가 시스템이나 서비스를 이용하며 느끼고 생각하는 총체적인 경험
• UI(User Interface): 사용자와 시스템 간의 상호작용을 돕는 장치나 소프트웨어 (CLI, GUI, NUI 등)`},{id:"kw-057",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"essay",question:"애플리케이션 테스트에서 사용되는 살충제 패러독스(Pesticide Paradox)의 개념을 간략히 설명하시오.",choices:["살충제 패러독스는 소프트웨어의 특징과 테스트 환경에 따라 테스트 결과가 달라질 수 있다는 원리를 의미한다.","살충제 패러독스는 결함을 모두 제거해도 사용자의 요구사항을 만족하지 못하면 품질이 높다고 할 수 없다는 원리를 의미한다.","살충제 패러독스는 동일한 테스트 케이스로 동일한 테스트를 반복하면 더 이상 결함이 발견되지 않는 현상을 의미한다.","살충제 패러독스는 결함의 대부분이 소수의 특정 모듈에 집중되어 발생하는 현상을 의미한다."],blanks:[{answer:"살충제 패러독스는 동일한 테스트 케이스로 동일한 테스트를 반복하면 더 이상 결함이 발견되지 않는 현상을 의미한다."}],explanation:`살충제 패러독스를 방지하려면 테스트 케이스를 지속적으로 검토하고 개선해야 한다.
그 밖의 테스트 원리: 결함 집중(파레토 법칙), 오류-부재의 궤변, 완벽한 테스트는 불가능, 정황(Context) 의존`},{id:"kw-058",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"애플리케이션을 실행하지 않고, 소스 코드에 대한 코딩 표준, 코딩 스타일, 코드 복잡도 및 남은 결함을 발견하기 위하여 사용하는 테스트를 쓰시오.",choices:["인수 테스트(Acceptance Test)","동적 분석(동적 테스트)","정적 분석(정적 테스트)","블랙박스 테스트(Black Box Test)"],blanks:[{answer:"정적 분석(정적 테스트)",accepts:["정적 분석 테스트","Static Analysis","Static Test"]}],explanation:`정적 분석(정적 테스트)은 프로그램을 실행하지 않고 소스 코드를 분석하는 테스트로, pmd, cppcheck, SonarQube, checkstyle 같은 도구를 사용한다.
프로그램을 실행하면서 분석하는 것은 동적 분석(동적 테스트)이다.`},{id:"kw-059",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"테스트에 대한 다음 설명에서 각 지문(①~③)에 해당하는 커버리지(Coverage)를 <보기>에서 찾아 기호(㉠~㉥)로 쓰시오.",blocks:[{type:"text",text:`① 최소 한번은 모든 문장이 수행되도록 구성하는 검증 기준
② 조건식이 참(True)/거짓(False)일 때 수행되도록 구성하는 검증 기준
③ ②번과 달리 조건식에 상관없이 개별 조건이 참(True)/거짓(False)일 때 수행되도록 구성하는 검증 기준`}],choices:["㉠ 다중 조건 검증 기준","㉡ 선택 검증 기준","㉢ 조건 검증 기준","㉣ 결정(분기) 검증 기준","㉤ 결정(분기)/조건 검증 기준","㉥ 구문(문장) 검증 기준"],blanks:[{label:"①",answer:"㉥"},{label:"②",answer:"㉣"},{label:"③",answer:"㉢"}],explanation:`• 구문(문장) 커버리지: 모든 문장이 최소 한 번은 수행되도록 구성
• 결정(분기) 커버리지: 각 결정 조건식 전체가 참과 거짓을 한 번 이상 갖도록 구성
• 조건 커버리지: 결정 조건식 안의 개별 조건식이 각각 참과 거짓을 한 번 이상 갖도록 구성
• 조건/결정 커버리지: 결정 커버리지와 조건 커버리지를 모두 만족하도록 구성`},{id:"kw-060",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"essay",question:"다음은 화이트박스 테스트의 프로그램 제어흐름이다. 다음의 순서도를 참고하여 분기 커버리지로 구성할 테스트 케이스를 작성하시오.",blocks:[{type:"image",src:"img/practical/kw-060.png",alt:"①~⑦ 번호가 붙은 순서도"},{type:"text",text:`<작성예시>
( ① ) → ( ② ) → ( ④ )

<답란>
(   ) → (   ) → (   ) → (   ) → (   ) → (   ) → (   )
(   ) → (   ) → (   ) → (   ) → (   ) → (   )`}],choices:[`① → ② → ③ → ④ → ⑤ → ⑥ → ①
① → ② → ④ → ⑤ → ⑥ → ①`,`① → ② → ③ → ④ → ⑤ → ⑥ → ⑦
① → ② → ④ → ⑤ → ⑥ → ⑦`,`① → ② → ③ → ⑤ → ④ → ⑥ → ⑦
① → ② → ④ → ⑤ → ⑥ → ①`,`① → ② → ③ → ④ → ⑤ → ⑥ → ⑦
① → ② → ④ → ⑤ → ⑥ → ①`],blanks:[{answer:`① → ② → ③ → ④ → ⑤ → ⑥ → ⑦
① → ② → ④ → ⑤ → ⑥ → ①`}],explanation:`분기 커버리지는 모든 조건문(②, ⑥)이 참(Yes)과 거짓(No)으로 각각 한 번 이상 수행되도록 설계해야 한다.
답란이 7칸과 6칸이므로, 7칸 경로는 ②번을 Yes(③ 수행)로, 6칸 경로는 ②번을 No(③ 건너뜀)로 진행해야 한다.
• 7칸에서 ⑥을 No(→⑦)로 갔다면 6칸에서는 ⑥을 Yes(→①)로 가야 하고,
• 7칸에서 ⑥을 Yes(→①)로 갔다면 6칸에서는 ⑥을 No(→⑦)로 가야 한다.
따라서 ①②③④⑤⑥⑦ / ①②④⑤⑥① 외에 ①②③④⑤⑥① / ①②④⑤⑥⑦로 설계해도 정답이다.`},{id:"kw-061",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"소프트웨어가 수행할 특정 기능을 알기 위해서 각 기능이 완전히 작동되는 것을 입증하는 테스트로, 동치 클래스 분해 및 경계값 분석을 이용하는 테스트 기법을 쓰시오.",choices:["통합 테스트(Integration Test)","블랙박스 테스트(Black Box Test)","화이트박스 테스트(White Box Test)","회귀 테스트(Regression Test)"],blanks:[{answer:"블랙박스 테스트(Black Box Test)",accepts:["블랙박스","Black Box","Black Box Testing"]}],explanation:`• 블랙박스 테스트: 기능 명세를 기반으로 기능이 완전히 작동하는지 확인 → 동치 분할, 경계값 분석, 원인-효과 그래프, 오류 예측, 비교 검사
• 화이트박스 테스트: 내부 논리 구조를 기반으로 확인 → 기초 경로 검사, 제어 구조 검사(조건, 루프, 데이터 흐름)`},{id:"kw-062",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"테스트 기법 중 다음과 같이 '평가 점수표'를 미리 정해 놓은 후 각 영역의 경계에 해당하는 입력값을 넣고, 예상되는 출력값이 나오는지 실제 값과 비교하는 명세 기반 테스트 기법을 <보기>에서 찾아 쓰시오.",blocks:[{type:"table",caption:"<평가 점수표>",headers:["평가점수","성적등급"],rows:[["90~100","A"],["80~89","B"],["70~79","C"],["0~69","D"]]},{type:"table",caption:"<케이스>",headers:["테스트 케이스","1","2","3","4","5","6","7","8","9","10"],rows:[["입력값","-1","0","69","70","79","80","89","90","100","101"],["예상 결과값","오류","D","D","C","C","B","B","A","A","오류"],["실제 결과값","오류","D","D","C","C","B","B","A","A","오류"]]}],choices:["Equivalence Partition","Boundary Value Analysis","Condition Test","Cause-Effect Graph","Error Guess","Comparison Test","Base Path Test","Loop Test","Data Flow Test"],blanks:[{answer:"Boundary Value Analysis"}],explanation:`경계값 분석(Boundary Value Analysis)은 입력 조건의 경계값(-1, 0, 69, 70, … 100, 101처럼 경계와 그 바로 바깥 값)을 테스트 케이스로 선정하는 블랙박스 기법이다.
오류는 입력 조건의 중간보다 경계에서 자주 발생한다는 점을 이용한다.`},{id:"kw-063",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"다음 중 블랙 박스 테스트 기법에 해당하는 것을 모두 골라 기호(㉠~㉨)로 쓰시오.",choices:["㉠ Base Path Testing","㉡ Condition Testing","㉢ Boundary Value Analysis","㉣ Equivalence Partitioning","㉤ Data Flow Testing","㉥ Cause-Effect Graph","㉦ Branch Coverage Testing","㉧ Statement Coverage Testing","㉨ Boundary Division Analysis"],blanks:[{answer:"㉢"},{answer:"㉣"},{answer:"㉥"}],unordered:!0,explanation:`블랙박스 테스트 기법: 경계값 분석(㉢), 동치 분할(㉣), 원인-효과 그래프(㉥), 오류 예측, 비교 검사
기초 경로(Base Path), 조건(Condition), 데이터 흐름(Data Flow), 분기·구문 커버리지는 화이트박스 기법이고, Boundary Division Analysis라는 기법은 없다.`},{id:"kw-064",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"테스트 기법 중 그래프를 활용하여 입력 데이터 간의 관계와 출력에 영향을 미치는 상황을 체계적으로 분석한 다음 효용성이 높은 테스트 케이스를 선정하여 검사하는 기법을 <보기>에서 찾아 쓰시오.",choices:["Equivalence Partition","Boundary Value Analysis","Condition Test","Cause-Effect Graph","Error Guess","Comparison Test","Base Path Test","Loop Test","Data Flow Test"],blanks:[{answer:"Cause-Effect Graph"}],explanation:"원인-효과 그래프(Cause-Effect Graph) 검사는 입력 데이터(원인) 간의 관계와 출력(효과)에 영향을 미치는 상황을 그래프로 분석해 효용성 높은 테스트 케이스를 선정하는 블랙박스 기법이다."},{id:"kw-065",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"테스트 기법 중 다음과 같이 '평가 점수표'를 미리 정해 놓은 후 각 영역에 해당하는 입력 값을 넣고, 예상되는 출력값이 나오는지 실제 값과 비교하는 명세 기반 테스트 기법을 쓰시오.",blocks:[{type:"table",caption:"<평가 점수표>",headers:["평가점수","성적등급"],rows:[["90~100","A"],["80~89","B"],["70~79","C"],["0~69","D"]]},{type:"table",caption:"<케이스>",headers:["테스트 케이스","1","2","3","4"],rows:[["점수범위","0~69","70~79","80~89","90~100"],["입력값","60","75","82","96"],["예상 결과값","D","C","B","A"],["실제 결과값","D","C","B","A"]]}],choices:["원인-효과 그래프 검사(Cause-Effect Graph Testing)","경계값 분석(Boundary Value Analysis)","비교 검사(Comparison Testing)","동치 분할 검사(Equivalence Partitioning Testing)"],blanks:[{answer:"동치 분할 검사(Equivalence Partitioning Testing)",accepts:["동치 분할","동치 분할 테스트","동등 분할","동치 클래스 분해","Equivalence Partitioning","Equivalence Partition","Equivalence Partitioning Test"]}],explanation:`동치 분할 검사(Equivalence Partitioning)는 입력 자료를 유효/무효 동치 클래스(점수 범위 0~69, 70~79 …)로 나누고, 각 클래스의 대표값(60, 75, 82, 96)으로 테스트하는 블랙박스 기법이다.
경계에 해당하는 값을 입력하는 62번 문제는 경계값 분석이다.`},{id:"kw-066",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"개발 단계에 따른 애플리케이션 테스트에 대한 다음 V-모델에서 괄호(①~④)에 들어갈 알맞은 테스트를 쓰시오.",blocks:[{type:"image",src:"img/practical/kw-066.png",alt:"요구사항·분석·설계·구현이 ①~④ 테스트와 대응되는 V-모델"}],choices:["단위 테스트(Unit Test)","시스템 테스트(System Test)","인수 테스트(Acceptance Test)","알파 테스트(Alpha Test)","통합 테스트(Integration Test)","회귀 테스트(Regression Test)"],blanks:[{label:"①",answer:"단위 테스트(Unit Test)"},{label:"②",answer:"통합 테스트(Integration Test)"},{label:"③",answer:"시스템 테스트(System Test)"},{label:"④",answer:"인수 테스트(Acceptance Test)"}],explanation:`V-모델은 개발 단계와 테스트 단계를 대응시킨 모델이다.
• 구현 ↔ 단위 테스트(모듈 확인)
• 설계 ↔ 통합 테스트(인터페이스 확인)
• 분석 ↔ 시스템 테스트(기능 확인)
• 요구사항 ↔ 인수 테스트(요구사항 확인)`},{id:"kw-067",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"애플리케이션 테스트에 대한 다음 설명에서 각 지문(①, ②)에 해당하는 용어를 <보기>에서 찾아 기호(㉠~㉥)로 쓰시오.",blocks:[{type:"text",text:`① 코딩 직후 소프트웨어 설계의 최소 단위인 모듈이나 컴포넌트에 초점을 맞춰 수행하는 테스트로, 모듈 테스트라고도 불린다. 사용자의 요구사항을 기반으로 한 기능성 테스트를 최우선으로 인터페이스, 외부적 I/O, 자료구조, 독립적 기초 경로, 오류 처리 경로, 경계 조건 등을 검사한다.
② 모듈들을 결합하여 하나의 시스템으로 완성시키는 과정에서의 테스트를 의미하며, 모듈 간 또는 컴포넌트 간의 인터페이스가 정상적으로 실행되는지 검사한다.`}],choices:["㉠ 시스템 테스트","㉡ 인수 테스트","㉢ 알파 테스트","㉣ 단위 테스트","㉤ 통합 테스트","㉥ 회귀 테스트"],blanks:[{label:"①",answer:"㉣"},{label:"②",answer:"㉤"}],explanation:`• 단위 테스트: 코딩 직후 모듈이나 컴포넌트에 초점을 맞춰 수행하는 테스트(모듈 테스트)
• 통합 테스트: 모듈들을 결합하면서 모듈·컴포넌트 간 인터페이스가 정상적으로 실행되는지 검사하는 테스트`},{id:"kw-068",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"애플리케이션 테스트에 대한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 테스트를 쓰시오.",blocks:[{type:"text",text:`인수 테스트는 개발한 소프트웨어가 사용자의 요구사항을 충족하는지에 중점을 두고 테스트하는 방법이다.
• ( ① ) : 선정된 최종 사용자가 여러 명의 사용자 앞에서 행하는 테스트 기법으로, 실제 업무를 가지고 사용자가 직접 테스트한다.
• ( ② ) : 개발자의 장소에서 사용자가 개발자 앞에서 행하는 테스트 기법으로, 테스트는 통제된 환경에서 행해지며, 오류와 사용상의 문제점을 사용자와 개발자가 함께 확인하면서 기록한다.`}],choices:["알파 테스트(Alpha Test)","베타 테스트(Beta Test)","회귀 테스트(Regression Test)","단위 테스트(Unit Test)","시스템 테스트(System Test)"],blanks:[{label:"①",answer:"베타 테스트(Beta Test)"},{label:"②",answer:"알파 테스트(Alpha Test)"}],explanation:`• 알파 테스트: 개발자의 장소에서 사용자가 개발자 앞에서 수행하는 테스트(통제된 환경)
• 베타 테스트: 최종 사용자가 실제 업무 환경에서 개발자 없이 수행하는 테스트(필드 테스트)`},{id:"kw-069",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"통합 테스트에 관련된 다음 설명에서 괄호에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"통합 테스트는 단위 테스트가 끝난 모듈을 통합하는 과정에서 발생하는 오류 및 결함을 찾는 테스트 기법으로, 하위 모듈에서 상위 모듈 방향으로 통합하는 상향식 통합 테스트와 상위 모듈에서 하위 모듈 방향으로 통합하는 하향식 통합 테스트가 있다. 상향식 통합 테스트는 미완성이거나 문제가 있는 상위 모듈을 대체할 수 있는 테스트 드라이버가, 하향식 통합 테스트는 미완성이거나 문제가 있는 하위 모듈을 대체할 수 있는 테스트 ( )이(가) 있어야 원활한 테스트가 가능하다."}],choices:["하네스(Harness)","클러스터(Cluster)","스텁(Stub)","드라이버(Driver)"],blanks:[{answer:"스텁(Stub)",accepts:["테스트 스텁","Test Stub"]}],explanation:`• 상향식 통합 테스트: 하위 → 상위로 통합, 상위 모듈 대신 테스트 드라이버(Driver) 사용
• 하향식 통합 테스트: 상위 → 하위로 통합, 하위 모듈 대신 테스트 스텁(Stub) 사용`},{id:"kw-070",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"애플리케이션 테스트에 관한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`• ( ① )는 소프트웨어의 하위 모듈에서 상위 모듈 방향으로 통합하면서 테스트하는 기법이다.
• 하나의 주요 제어 모듈과 관련된 종속 모듈의 그룹인 클러스터(Cluster)가 필요하다.
• 데이터의 입·출력을 확인하기 위해 더미 모듈인 ( ② )를 생성한다.`}],choices:["상향식 통합 테스트","스텁(Stub)","하향식 통합 테스트","드라이버(Driver)","빅뱅 통합 테스트"],blanks:[{label:"①",answer:"상향식 통합 테스트",accepts:["상향식","상향식 통합","Bottom Up","Bottom Up Integration Test"]},{label:"②",answer:"드라이버(Driver) 또는 테스트 드라이버(Test Driver)",accepts:["드라이버(Driver)","테스트 드라이버(Test Driver)"]}],explanation:"상향식 통합 테스트는 하위 모듈에서 상위 모듈 방향으로 통합하며, 하위 모듈들을 묶은 클러스터(Cluster)와 상위 모듈 역할을 대신하는 테스트 드라이버(Driver)가 필요하다."},{id:"kw-071",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"다음 설명에 해당하는 테스트를 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:`• 통합 테스트로 인해 변경된 모듈이나 컴포넌트에 새로운 오류가 있는지 확인하는 테스트이다.
• 이미 테스트된 프로그램의 테스팅을 반복하는 것이다.
• 수정한 모듈이나 컴포넌트가 다른 부분에 영향을 미치는지, 오류가 생기지 않았는지 테스트하여 새로운 오류가 발생하지 않음을 보증하기 위해 반복 테스트한다.`}],choices:["Integration","Big Bang","System","Acceptance","Unit","Regression","White Box","Black Box"],blanks:[{answer:"Regression"}],explanation:"회귀 테스트(Regression Test)는 이미 테스트된 프로그램을 수정한 뒤, 변경 때문에 새로운 오류가 생기지 않았는지 반복해서 확인하는 테스트이다."},{id:"kw-072",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"특정한 몇몇 테스트 케이스의 입력 값들에 대해서만 기대하는 결과를 제공하는 오라클로, 전수 테스트가 불가능한 경우 사용하고, 경계값 및 구간별 예상값 결과 작성 시 사용하는 오라클을 쓰시오.",choices:["참 오라클(True Oracle)","샘플링 오라클(Sampling Oracle)","일관성 검사 오라클(Consistent Oracle)","추정 오라클(Heuristic Oracle)"],blanks:[{answer:"샘플링 오라클(Sampling Oracle)"}],explanation:`테스트 오라클의 종류
• 참(True) 오라클: 모든 입력값에 대해 기대 결과를 제공
• 샘플링(Sampling) 오라클: 특정한 몇몇 입력값에 대해서만 기대 결과를 제공
• 추정(Heuristic) 오라클: 샘플링 오라클을 개선, 나머지 입력값은 추정으로 처리
• 일관성(Consistent) 검사 오라클: 변경 전후의 결과가 동일한지 확인`},{id:"kw-073",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"애플리케이션 성능이란 사용자가 요구한 기능을 최소한의 자원을 사용하여 최대한 많은 기능을 신속하게 처리하는 정도를 나타낸다. 애플리케이션 성능 측정의 지표에 대한 다음 설명에서 괄호(①~③)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"table",rows:[["( ① )","일정 시간 내에 애플리케이션이 처리하는 일의 양을 의미한다."],["( ② )","애플리케이션에 요청을 전달한 시간부터 응답이 도착할 때까지 걸린 시간을 의미한다."],["( ③ )","애플리케이션에 작업을 의뢰한 시간부터 처리가 완료될 때까지 걸린 시간을 의미한다."],["자원 활용률","애플리케이션이 의뢰한 작업을 처리하는 동안의 CPU, 메모리, 네트워크 등의 자원 사용률을 의미한다."]]}],choices:["처리량(Throughput)","자원 사용률(Resource Usage)","대기 시간(Waiting Time)","가용성(Availability)","응답 시간(Response Time)","경과 시간(Turn Around Time)"],blanks:[{label:"①",answer:"처리량(Throughput)"},{label:"②",answer:"응답 시간(Response Time)"},{label:"③",answer:"경과 시간(Turn Around Time)",accepts:["반환 시간","Turnaround Time"]}],explanation:"애플리케이션 성능 측정 지표: 처리량(Throughput), 응답 시간(Response Time), 경과 시간(Turn Around Time), 자원 사용률(Resource Usage)"},{id:"kw-074",session:"키워드",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"소스 코드 품질 분석 도구에 대한 다음 설명에서 괄호(①, ②)에 해당하는 용어를 <보기>에서 찾아 기호(㉠~㉧)로 쓰시오.",blocks:[{type:"text",text:`소스 코드 품질 분석 도구는 소스 코드의 코딩 스타일, 코드에 설정된 코딩 표준, 코드의 복잡도, 코드에 존재하는 메모리 누수 현상, 스레드 결함 등을 발견하기 위해 사용하는 분석 도구이다.
• ( ① ) 도구는 작성한 소스 코드를 실행하지 않고 코딩 표준이나 코딩 스타일, 결함 등을 확인하는 코드 분석 도구이다.
• ( ② ) 도구는 소스 코드를 직접 실행하여 프로그램의 동작이나 반응을 추적하고 보고하는 분석 도구로, 프로그램 모니터링 기능이나 스냅샷 생성 기능들을 포함하고 있다.`}],choices:["㉠ Static Analysis","㉡ Running Analysis","㉢ Test Execution","㉣ Performance","㉤ Dynamic Analysis","㉥ Test Control","㉦ Test Harness","㉧ Test Monitoring"],blanks:[{label:"①",answer:"㉠"},{label:"②",answer:"㉤"}],explanation:`• 정적 분석 도구(Static Analysis): 코드를 실행하지 않고 코딩 표준, 스타일, 결함을 확인 (pmd, cppcheck, SonarQube, checkstyle 등)
• 동적 분석 도구(Dynamic Analysis): 코드를 실행하여 메모리 누수, 스레드 결함 등을 분석 (Avalanche, Valgrind 등)`},{id:"kw-075",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"essay",question:"데이터를 제어하는 DCL의 하나인 GRANT의 기능에 대해 간략히 서술하시오.",choices:["GRANT는 테이블의 구조를 새로 정의하거나 변경하는 명령어이다.","GRANT는 데이터베이스 관리자가 데이터베이스 사용자에게 권한을 부여하는 데 사용하는 명령어이다.","GRANT는 데이터베이스 사용자에게 부여했던 권한을 취소하는 명령어이다.","GRANT는 트랜잭션의 작업 결과를 데이터베이스에 영구적으로 반영하는 명령어이다."],blanks:[{answer:"GRANT는 데이터베이스 관리자가 데이터베이스 사용자에게 권한을 부여하는 데 사용하는 명령어이다."}],explanation:`DCL(데이터 제어어)
• GRANT: 사용자에게 권한 부여 / REVOKE: 권한 취소
• COMMIT: 작업 결과를 데이터베이스에 반영 / ROLLBACK: 작업을 취소하고 이전 상태로 복구 / SAVEPOINT: 복귀 지점 지정
예) GRANT SELECT ON 학생 TO 홍길동;`},{id:"kw-076",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"essay",question:"데이터를 제어하는 DCL의 하나인 ROLLBACK에 대해 간략히 서술하시오.",choices:["ROLLBACK은 데이터베이스 사용자에게 권한을 부여하는 명령어이다.","ROLLBACK은 트랜잭션이 실패한 경우 작업을 취소하고 이전 상태로 되돌리기 위한 명령어이다.","ROLLBACK은 트랜잭션 안에서 나중에 되돌아올 저장점을 지정하는 명령어이다.","ROLLBACK은 트랜잭션이 성공적으로 끝난 후 작업 결과를 데이터베이스에 영구적으로 반영하는 명령어이다."],blanks:[{answer:"ROLLBACK은 트랜잭션이 실패한 경우 작업을 취소하고 이전 상태로 되돌리기 위한 명령어이다."}],explanation:`ROLLBACK은 아직 COMMIT되지 않은 트랜잭션의 변경 내용을 모두 취소하고 이전 상태로 되돌린다.
SAVEPOINT를 지정해 두면 ROLLBACK TO 저장점; 형태로 특정 지점까지만 되돌릴 수 있다.`},{id:"kw-077",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"essay",question:"데이터베이스 보안에서 가용성(Availability)에 대해 간략히 서술하시오.",choices:["가용성은 시스템 내의 정보는 인가된 사용자만 수정할 수 있다는 보안 요건이다.","가용성은 인가받은 사용자는 시스템 내의 정보와 자원을 언제라도 사용할 수 있다는 보안 요건이다.","가용성은 데이터를 송·수신한 자가 송·수신 사실을 부인할 수 없도록 해야 한다는 보안 요건이다.","가용성은 시스템 내의 정보와 자원은 인가된 사용자에게만 접근이 허용된다는 보안 요건이다."],blanks:[{answer:"가용성은 인가받은 사용자는 시스템 내의 정보와 자원을 언제라도 사용할 수 있다는 보안 요건이다."}],explanation:`보안의 3대 요소
• 기밀성(Confidentiality): 인가된 사용자만 정보에 접근할 수 있다.
• 무결성(Integrity): 인가된 사용자만 정보를 수정할 수 있다.
• 가용성(Availability): 인가된 사용자는 언제라도 정보와 자원을 사용할 수 있다.`},{id:"kw-078",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"essay",question:"보안 위협의 하나인 SQL Injection에 대해 간략히 서술하시오.",choices:["SQL Injection은 대량의 패킷을 보내 데이터베이스 서버의 서비스를 마비시키는 공격 기법이다.","SQL Injection은 웹 응용 프로그램에 SQL 구문을 삽입하여 내부 데이터베이스(DB) 서버의 데이터를 유출 및 변조하고 관리자 인증을 우회하는 공격 기법이다.","SQL Injection은 웹 페이지에 악의적인 스크립트를 삽입하여 사용자의 쿠키나 세션 정보를 탈취하는 공격 기법이다.","SQL Injection은 사용자가 의도하지 않은 요청을 서버에 보내도록 만들어 사용자의 권한으로 작업을 수행하게 하는 공격 기법이다."],blanks:[{answer:"SQL Injection은 웹 응용 프로그램에 SQL 구문을 삽입하여 내부 데이터베이스(DB) 서버의 데이터를 유출 및 변조하고 관리자 인증을 우회하는 공격 기법이다."}],explanation:`'웹 응용 프로그램(입력란)에 SQL 구문 삽입', 'DB 데이터 유출·변조', '인증 우회'가 핵심 키워드이다.
입력값 검증, Prepared Statement(바인딩 변수) 사용, 오류 메시지 노출 제한 등으로 방어한다.`},{id:"kw-079",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"암호화 알고리즘에 대한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`• 암호화 알고리즘은 패스워드, 주민번호, 은행계좌와 같은 중요 정보를 보호하기 위해 평문을 암호화된 문장으로 만드는 절차 또는 방법을 의미한다.
• 스위스의 라이(Lai)와 메시(Messey)는 1990년 PES를 발표하고, 이후 이를 개선한 IPES를 발표하였다. IPES는 128비트의 Key를 사용하여 64비트 블록을 암호화하는 알고리즘이며 현재는 ( ① )라고 불린다.
• ( ② )은 국가 안전 보장국(NSA)에서 개발한 암호화 알고리즘으로, 클리퍼 칩(Clipper Chip)이라는 IC 칩에 내장되어 있다. 80비트의 Key를 사용하여 64비트 블록을 암호화하며, 주로 전화기와 같은 음성 통신 장비에 삽입되어 음성 데이터를 암호화한다.`}],choices:["ARIA(Academy Research Institute Agency)","SEED","IDEA(International Data Encryption Algorithm)","Skipjack","DES(Data Encryption Standard)"],blanks:[{label:"①",answer:"IDEA(International Data Encryption Algorithm)"},{label:"②",answer:"Skipjack"}],explanation:`• IDEA: 라이(Lai)와 메시(Massey)가 개발한 PES를 개선한 IPES의 현재 이름. 128비트 키로 64비트 블록을 암호화한다.
• Skipjack: 미국 NSA가 개발한 알고리즘으로 클리퍼 칩에 내장. 80비트 키로 64비트 블록을 암호화하며 음성 통신 장비에 주로 쓰인다.`},{id:"kw-080",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"보안 프로토콜에 대한 다음 설명에 해당하는 용어를 영문 약어로 쓰시오.",blocks:[{type:"text",text:"무선랜 보안에 사용된 웹 방식을 보완한 데이터 보안 프로토콜로, 임시 키 무결성 프로토콜이라고도 한다. WEP의 취약성을 보완하기 위해 암호 알고리즘의 입력 키 길이를 128비트로 늘리고 패킷당 키 할당, 키값 재설정 등 키 관리 방식을 개선하였다."}],choices:["WEP","CCMP","WPA","TKIP"],blanks:[{answer:"TKIP",accepts:["Temporal Key Integrity Protocol"]}],explanation:"TKIP(Temporal Key Integrity Protocol, 임시 키 무결성 프로토콜)는 WEP의 취약성을 보완하기 위해 키 길이를 늘리고 패킷마다 키를 할당·재설정하도록 키 관리 방식을 개선한 무선랜 보안 프로토콜이다."},{id:"kw-081",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음에서 설명하고 있는 암호화 알고리즘을 쓰시오.",blocks:[{type:"text",text:"1974년 IBM이 개발하고 1975년 NBS에 의해 미국의 국가 표준으로 발표된 암호화 알고리즘으로, 블록 크기는 64비트, 키 길이는 56비트이며, 16회의 라운드를 수행한다. 컴퓨터 기술이 발달함에 따라 해독이 쉬워지면서 미국의 국가 표준이 2001년 AES로 대체되었다."}],choices:["DES(Data Encryption Standard)","SEED","RSA(Rivest Shamir Adleman)","AES(Advanced Encryption Standard)"],blanks:[{answer:"DES(Data Encryption Standard)"}],explanation:`DES는 1975년 미국 표준으로 발표된 대칭키 블록 암호로, 블록 64비트·키 56비트·16라운드이다.
해독이 쉬워지면서 2001년 AES로 대체되었다.`},{id:"kw-082",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"보안 및 암호화와 관련된 다음 설명에 해당하는 용어를 쓰시오.",blocks:[{type:"text",text:`• 2001년 미국 표준 기술 연구소(NIST)에서 발표한 대칭키 암호화 알고리즘이다.
• DES의 한계를 느낀 NIST에서 공모한 후 발표하였다.
• 블록 크기는 128비트이며, 키 길이에 따라 128, 192, 256으로 분류된다.`}],choices:["ARIA(Academy Research Institute Agency)","IDEA(International Data Encryption Algorithm)","DES(Data Encryption Standard)","AES(Advanced Encryption Standard)"],blanks:[{answer:"AES(Advanced Encryption Standard)"}],explanation:"AES는 2001년 NIST가 DES를 대체하기 위해 발표한 대칭키 블록 암호로, 블록 크기는 128비트, 키 길이는 128/192/256비트이다."},{id:"kw-083",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"1991년 R.rivest가 MD4를 개선한 암호화 알고리즘으로, 각각의 512비트짜리 입력 메시지 블록에 대해 차례로 동작한다. 각 512비트 입력 메시지 블록을 처리하고 나면 128비트 스테이트(state)의 값이 변하는 암호화 알고리즘을 쓰시오.",choices:["HAVAL","SHA-1(Secure Hash Algorithm 1)","MD5(Message Digest algorithm 5)","MD4(Message Digest algorithm 4)"],blanks:[{answer:"MD5(Message Digest algorithm 5)"}],explanation:`MD5는 MD4를 개선한 해시 알고리즘으로 512비트 블록 단위로 처리하여 128비트 해시값을 만든다.
대표적인 해시 알고리즘: SHA 시리즈, MD5, N-NASH, SNEFRU`},{id:"kw-084",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"보안 위협에 관한 다음 설명에서 괄호에 공통으로 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"( ) 스푸핑은 로컬 네트워크(LAN)에서 사용하는 ( ) 프로토콜의 취약점을 이용한 공격 기법으로, 자신의 물리적 주소(MAC)를 변조하여 다른 PC에게 도달해야 하는 데이터 패킷을 가로채거나 방해한다."}],choices:["RARP(Reverse Address Resolution Protocol)","ICMP(Internet Control Message Protocol)","DNS(Domain Name System)","ARP(Address Resolution Protocol)"],blanks:[{answer:"ARP(Address Resolution Protocol)"}],explanation:`ARP는 IP 주소를 MAC 주소로 변환하는 프로토콜이다.
ARP 스푸핑은 ARP 메시지를 위조해 상대의 ARP 캐시에 공격자의 MAC 주소를 등록함으로써 다른 PC로 가야 할 패킷을 가로채는 공격이다.`},{id:"kw-085",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음은 네트워크 공격에 대한 패킷 로그를 표현한 것이다. 아래의 패킷 로그와 같이 공격자가 패킷의 출발지 주소(Address) 또는 포트(Port)를 임의로 변경하여 송신측 IP 주소 또는 포트를 동일하게 함으로써 송신 IP 주소가 자신이므로 자신에게 응답을 수행하게 된다. 이처럼 자신에 대해 무한히 응답하는 패킷을 계속 전송하여 컴퓨터의 실행 속도를 느리게 하거나 동작을 마비 시켜 서비스 거부 상태에 빠지도록 하는 네트워크 공격 유형이 무엇인지 쓰시오.",blocks:[{type:"text",text:`source : 192.168.1.200
destination : 192.168.1.200
protocol : 6
src port : 21845
dst port : 21845`}],choices:["Ping of Death","SYN Flooding","LAND Attack(Local Area Network Denial Attack)","Smurfing"],blanks:[{answer:"LAND Attack(Local Area Network Denial Attack)",accepts:["LAND","LAND 공격","랜드 어택"]}],explanation:"LAND Attack은 출발지와 목적지의 IP 주소·포트를 공격 대상과 동일하게 위조한 패킷을 보내, 대상이 자기 자신에게 무한히 응답하게 만드는 서비스 거부(DoS) 공격이다."},{id:"kw-086",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에서 괄호(①, ②)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`• ( ① )은 컴퓨터 보안에 있어서, 인간 상호 작용의 깊은 신뢰를 바탕으로 사람들을 속여 정상 보안 절차를 깨트리기 위한 비기술적 시스템 침입 수단을 의미한다.
• ( ② )는 특정 목적을 가지고 데이터를 수집하였으나, 이후 활용되지 않고 저장만 되어있는 대량의 데이터를 의미한다. 미래에 사용될 가능성을 고려하여 저장 공간에서 삭제되지 않고 보관되어 있으나, 이는 저장 공간의 낭비뿐만 아니라 보안 위험을 초래할 수도 있다.`}],choices:["랜섬웨어(Ransomware)","스니핑(Sniffing)","사회 공학(Social Engineering)","빅데이터(Big Data)","다크 데이터(Dark Data)"],blanks:[{label:"①",answer:"사회 공학(Social Engineering)"},{label:"②",answer:"다크 데이터(Dark Data)"}],explanation:`• 사회 공학: 기술이 아니라 사람 간의 신뢰를 이용해 속여서 보안 절차를 깨뜨리는 비기술적 침입 수단
• 다크 데이터: 수집만 하고 활용되지 않은 채 저장만 되어 있는 대량의 데이터`},{id:"kw-087",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"네트워크 및 인터넷 보안에 관련된 다음 설명에서 괄호에 공통으로 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`• ( )은 '세션을 가로채다'라는 의미로, 정상적인 연결을 RST 패킷을 통해 종료시킨 후 재연결 시 희생자가 아닌 공격자에게 연결하는 공격 기법이다.
• TCP ( )은 공격자가 TCP 3-Way-Handshake 과정에 끼어듦으로써 서버와 상호 간의 동기화된 시퀀스 번호를 갖고 인가되지 않은 시스템의 기능을 이용하거나 중요한 정보에 접근할 수 있게 된다.`}],choices:["스니핑(Sniffing)","피싱(Phishing)","세션 하이재킹(Session Hijacking)","스푸핑(Spoofing)"],blanks:[{answer:"세션 하이재킹(Session Hijacking)"}],explanation:"세션 하이재킹은 '세션을 가로채다'라는 의미로, 정상 연결을 끊고(RST 패킷) 재연결 시 공격자에게 연결되게 하거나, TCP 3-Way-Handshake 과정에 끼어들어 동기화된 시퀀스 번호로 인가되지 않은 접근을 하는 공격이다."},{id:"kw-088",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"보안 위협에 대한 다음 설명에 해당하는 용어를 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:"목표 조직이 자주 방문하는 웹 사이트를 사전에 감염시켜 목표 조직의 일원이 웹 사이트에 방문했을 때 악성 코드에 감염되게 한다. 이후에는 감염된 PC를 기반으로 조직의 중요 시스템에 접근하거나 불능으로 만드는 등의 영향력을 행사하는 웹 기반 공격이다."}],choices:["Pharming","Drive-by Download","Watering Hole","Business SCAM","Phishing","Cyber Kill Chain","Ransomware","Sniffing"],blanks:[{answer:"Watering Hole"}],explanation:"워터링 홀(Watering Hole)은 목표 조직이 자주 방문하는 웹 사이트를 미리 감염시켜 두고, 조직원이 방문했을 때 악성 코드에 감염되도록 하는 공격이다. 사자가 물웅덩이(watering hole)에서 먹잇감을 기다리는 것에 비유한 이름이다."},{id:"kw-089",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"AAA 서버에 관한 다음 설명에서 각 번호(①~③)에 들어갈 알맞은 용어를 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:`AAA 서버는 사용자의 컴퓨터 자원 접근 처리와 서비스 제공에 있어서의 다음 3가지 기능을 제공하는 서버이다.
① 접근하는 사용자의 신원을 검증하는 기능
② 신원이 검증된 사용자에게 특정된 권한과 서비스를 허용하는 기능
③ 사용자가 어떤 종류의 서비스를 이용했고, 얼마만큼의 자원을 사용했는지 기록 및 보관하는 기능`}],choices:["Application","Authentication","Avalanche","Authorization","Accounting","Ascii"],blanks:[{label:"①",answer:"Authentication"},{label:"②",answer:"Authorization"},{label:"③",answer:"Accounting"}],explanation:`AAA 서버의 3가지 기능
• 인증(Authentication): 사용자의 신원을 검증
• 인가(Authorization): 검증된 사용자에게 권한과 서비스를 허용
• 계정 관리(Accounting): 사용한 서비스와 자원 사용 정보를 기록·보관`},{id:"kw-090",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"네트워크 보안에 대한 다음 설명에서 괄호에 공통으로 들어갈 알맞은 용어를 영문 약어로 쓰시오.",blocks:[{type:"text",text:`• ( )은 인터넷 등 통신 사업자의 공중 네트워크와 암호화 기술을 이용하여 사용자가 마치 자신의 전용 회선을 사용하는 것처럼 해주는 보안 솔루션이다.
• 암호화된 규격을 통해 인터넷망을 전용선의 사설망을 구축한 것처럼 이용하므로 비용 부담을 줄일 수 있다.
• ( )을 사용하면 두 장치 및 네트워크 사이에 암호화된 보안 터널이 생성되며, 터널에 사용되는 프로토콜에 따라 SSL ( )과 IPSec ( )으로 불린다.`}],choices:["DMZ","VPN","IDS","NAC"],blanks:[{answer:"VPN",accepts:["Virtual Private Network"]}],explanation:`VPN(Virtual Private Network, 가상 사설 통신망)은 공중망과 암호화 기술로 전용선처럼 안전하게 통신하게 해주는 보안 솔루션이다.
사용하는 프로토콜에 따라 SSL VPN, IPSec VPN 등으로 구분된다.`},{id:"kw-091",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"다양한 장비에서 발생하는 로그 및 보안 이벤트를 통합하여 관리하는 보안 솔루션으로, 방화벽, IDS, IPS, 웹 방화벽, VPN 등에서 발생한 로그 및 보안 이벤트를 통합하여 관리함으로써 비용 및 자원을 절약할 수 있는 특징이 있다. 또한 보안 솔루션 간의 상호 연동을 통해 종합적인 보안 관리 체계를 수립할 수 있다."}],choices:["IDS(Intrusion Detection System)","DLP(Data Loss Prevention)","SIEM(Security Information & Event Management)","NAC(Network Access Control)"],blanks:[{answer:"SIEM(Security Information & Event Management)",accepts:["Security Information and Event Management"]}],explanation:"SIEM은 방화벽, IDS, IPS, 웹 방화벽, VPN 등 다양한 보안 장비의 로그와 보안 이벤트를 통합 수집·분석·관리하는 보안 솔루션이다."},{id:"kw-092",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"essay",question:"헝가리안 표기법(Hungarian Notation)에 대해 간략히 서술하시오.",choices:["헝가리안 표기법은 변수명을 이루는 모든 단어의 첫 글자를 대문자로 작성하는 방법이다.","헝가리안 표기법은 변수명 작성 시 변수의 자료형을 알 수 있도록 자료형을 의미하는 문자를 포함하여 작성하는 방법이다.","헝가리안 표기법은 여러 단어로 된 변수명에서 첫 단어는 소문자로, 이후 단어의 첫 글자는 대문자로 작성하는 방법이다.","헝가리안 표기법은 여러 단어로 된 변수명의 각 단어 사이를 밑줄(_)로 연결하여 작성하는 방법이다."],blanks:[{answer:"헝가리안 표기법은 변수명 작성 시 변수의 자료형을 알 수 있도록 자료형을 의미하는 문자를 포함하여 작성하는 방법이다."}],explanation:`예) 정수형 변수 nCount, 문자열 변수 strName처럼 자료형을 뜻하는 접두어를 붙인다.
그 밖의 표기법: 카멜 표기법(inputName), 파스칼 표기법(InputName), 스네이크 표기법(input_name)`},{id:"kw-093",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"essay",question:"스니핑(Sniffing)은 사전적 의미로 '코를 킁킁 거리다, 냄새를 맡다'이다. 네트워크 보안에서 스니핑에 대한 개념을 간략히 한 문장(1문장)으로 쓰시오.",choices:["스니핑은 네트워크의 중간에서 남의 패킷 정보를 도청하는 해킹 유형의 하나로 수동적 공격에 해당한다.","스니핑은 IP 주소나 MAC 주소를 위조하여 다른 사용자로 위장하는 해킹 유형으로 능동적 공격에 해당한다.","스니핑은 가짜 웹 사이트로 유도하여 사용자가 개인 정보를 입력하게 만드는 해킹 유형이다.","스니핑은 정상적인 연결을 가로채 공격자가 그 연결을 이어받는 해킹 유형이다."],blanks:[{answer:"스니핑은 네트워크의 중간에서 남의 패킷 정보를 도청하는 해킹 유형의 하나로 수동적 공격에 해당한다."}],explanation:"'네트워크 중간에서 남의 패킷을 도청(엿보기)', '수동적 공격'이 핵심 키워드이다."},{id:"kw-094",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"essay",question:"C++에서 생성자(Constructor)에 대해 간략히 서술하시오.",choices:["생성자는 객체 변수 생성에 사용되는 메소드로, 객체 변수를 생성하면서 초기화를 수행한다.","생성자는 상위 클래스의 메소드를 하위 클래스에서 같은 이름으로 다시 정의한 메소드이다.","생성자는 이름은 같지만 매개변수의 개수나 자료형이 다른 여러 메소드를 정의한 것이다.","생성자는 객체가 소멸될 때 자동으로 호출되어 사용하던 자원을 해제하는 메소드이다."],blanks:[{answer:"생성자는 객체 변수 생성에 사용되는 메소드로, 객체 변수를 생성하면서 초기화를 수행한다."}],explanation:"생성자는 클래스와 같은 이름을 가지며 반환형이 없고, 객체가 생성될 때 자동으로 호출되어 멤버 변수를 초기화한다."},{id:"kw-095",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 설명에 해당하는 운영체제(OS)를 쓰시오.",blocks:[{type:"text",text:`• 1960년대 AT&T 벨(Bell) 연구소가 MIT, General Electric 사와 함께 공동 개발한 운영체제이다.
• 시분할 시스템(Time Sharing System)을 위해 설계된 대화식 운영체제이다.
• 대부분 C 언어로 작성되어 있어 이식성이 높으며 장치, 프로세스 간의 호환성이 높다.
• 트리 구조의 파일 시스템을 갖는다.`}],choices:["UNIX(유닉스)","MS-DOS","LINUX(리눅스)","Windows(윈도우)"],blanks:[{answer:"UNIX(유닉스)"}],explanation:"UNIX는 AT&T 벨 연구소가 개발한 시분할 시스템용 대화식 운영체제로, 대부분 C 언어로 작성되어 이식성이 높고 트리 구조의 파일 시스템을 갖는다."},{id:"kw-096",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음은 Python의 리스트 객체에 속한 메소드들에 대한 설명이다. 각 괄호(①~③)에 해당하는 메소드의 이름을 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:`Python에서는 여러 요소들을 한 개의 이름으로 처리할 때 리스트(List)를 사용하며, 각 요소에는 정수, 실수, 문자열 등 다양한 자료형을 섞어 저장할 수 있다. 또한 리스트는 메소드를 활용하여 요소를 추가 및 삭제할 수 있을 뿐만 아니라 정렬하거나 다른 리스트와 병합하는 등의 다양한 작업을 손쉽게 수행할 수 있다.
• ( ① ) : 기존 리스트에 인수의 요소들을 추가하여 확장하는 메소드로, 여러 값을 한 번에 추가할 수 있다.
• ( ② ) : 리스트에서 맨 마지막 또는 인수의 값에 해당하는 위치의 요소를 삭제한 후 반환한다.
• ( ③ ) : 리스트에 저장된 각 요소들의 순서를 역순으로 뒤집어 저장하는 메소드이다.`}],choices:["pop( )","push( )","reverse( )","index( )","write( )","sort( )","extend( )","copy( )"],blanks:[{label:"①",answer:"extend( )"},{label:"②",answer:"pop( )"},{label:"③",answer:"reverse( )"}],explanation:`• extend(리스트): 리스트 끝에 여러 요소를 한 번에 추가해 확장한다. (append는 한 개 추가)
• pop(위치): 마지막(또는 지정한 위치) 요소를 꺼내 반환하고 삭제한다.
• reverse( ): 요소의 순서를 역순으로 뒤집는다.`},{id:"kw-097",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"리눅스의 커널 위에서 동작하며, 자바와 코틀린으로 애플리케이션을 작성하는 운영체제로, 휴대용 장치에서 주로 사용되는 이 운영체제의 이름을 쓰시오.",choices:["안드로이드(Android)","Tizen(타이젠)","iOS","Symbian(심비안)"],blanks:[{answer:"안드로이드(Android)"}],explanation:"안드로이드는 구글이 개발한 리눅스 커널 기반의 개방형 모바일 운영체제로, 애플리케이션은 주로 Java와 Kotlin으로 작성한다."},{id:"kw-098",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음은 프로세스 상태 전이도이다. 괄호(①~③)에 들어갈 알맞은 상태를 쓰시오.",blocks:[{type:"image",src:"img/practical/kw-098.png",alt:"제출, 접수, ①, ②, ③, 종료 상태로 구성된 프로세스 상태 전이도"}],choices:["실행(Run)","준비(Ready)","중단(Suspend)","교착(Deadlock)","대기(Wait)","생성(New)"],blanks:[{label:"①",answer:"준비(Ready)"},{label:"②",answer:"실행(Run)",accepts:["Running"]},{label:"③",answer:"대기(Wait)",accepts:["보류","블록","Block","Blocked","Waiting"]}],explanation:`프로세스 상태 전이: 제출 → 접수 → 준비(Ready) → 실행(Run) → 종료
• 준비 → 실행: 디스패치(Dispatch)
• 실행 → 준비: 할당 시간 초과(Timer Run Out), 선점
• 실행 → 대기: 입·출력 발생 / 대기 → 준비: 입·출력 종료(Wake Up)`},{id:"kw-099",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"HRN 비선점형 스케줄링의 우선순위를 구하는 계산식을 쓰시오.",choices:["(대기 시간 + 서비스 시간) / 서비스 시간","(대기 시간 - 서비스 시간) / 서비스 시간","서비스 시간 / (대기 시간 + 서비스 시간)","대기 시간 / 서비스 시간"],blanks:[{answer:"(대기 시간 + 서비스 시간) / 서비스 시간",accepts:["(대기시간+실행시간)/실행시간","(대기 시간 + 실행 시간) / 실행 시간"]}],explanation:`HRN(Highest Response-ratio Next)은 SJF에서 실행 시간이 긴 프로세스가 계속 밀리는 문제를 보완한 비선점 기법이다.
우선순위 = (대기 시간 + 서비스(실행) 시간) / 서비스(실행) 시간이며, 값이 클수록 우선순위가 높다.`},{id:"kw-100",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"스케줄링에 대한 다음 설명에서 괄호(①~③)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`• ( ① )는 준비상태 큐에서 기다리고 있는 프로세스들 중에서 실행 시간이 가장 짧은 프로세스에게 먼저 CPU를 할당하는 기법이다. 가장 적은 평균 대기 시간을 제공하는 최적 알고리즘이지만, 실행 시간이 긴 프로세스는 실행 시간이 짧은 프로세스에게 할당 순위가 밀려 무한 연기 상태가 발생될 수 있다.
• ( ② )은 시분할 시스템을 위해 고안된 방식으로, 준비상태 큐에 먼저 들어온 프로세스가 먼저 CPU를 할당받지만 각 프로세스는 시간 할당량 동안만 실행한 후 실행이 완료되지 않으면 다음 프로세스에게 CPU를 넘겨주고 준비상태 큐의 가장 뒤로 배치된다. 할당되는 시간이 작을 경우 문맥 교환 및 오버헤드가 자주 발생되어 요청된 작업을 신속히 처리할 수 없다.
• ( ③ )는 현재 실행중인 프로세스의 남은 시간과 준비상태 큐에 새로 도착한 프로세스의 실행 시간을 비교하여 가장 짧은 실행 시간을 요구하는 프로세스에게 CPU를 할당하는 기법으로, 시분할 시스템에 유용하다. 준비상태 큐에 있는 각 프로세스의 실행 시간을 추적하여 보유하고 있어야 하므로 오버헤드가 증가한다.`}],choices:["HRN(Highest Response-ratio Next)","FCFS(First Come First Served)","SRT(Shortest Remaining Time)","MLQ(Multi Level Queue)","RR(Round Robin)","SJF(Shortest Job First)"],blanks:[{label:"①",answer:"SJF(Shortest Job First)"},{label:"②",answer:"RR(Round Robin)"},{label:"③",answer:"SRT(Shortest Remaining Time)"}],explanation:`• SJF: 실행 시간이 가장 짧은 프로세스에 먼저 CPU 할당(비선점), 평균 대기 시간 최소, 기아 현상 발생 가능
• RR: 시간 할당량(Time Slice)만큼만 실행하고 큐의 맨 뒤로 이동(선점), 시분할 시스템용
• SRT: 남은 실행 시간이 가장 짧은 프로세스에 CPU 할당(SJF의 선점 버전)`},{id:"kw-101",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"리눅스 또는 유닉스에서 'a.txt' 파일에 대해 다음 <처리 조건>과 같이 권한을 부여하고자 한다. <처리 조건>을 준수하여 적합한 명령문을 작성하시오.",blocks:[{type:"text",text:`<처리 조건>
• 사용자에게 읽기, 쓰기, 실행 권한을 부여한다.
• 그룹에게 읽기, 실행 권한을 부여한다.
• 기타 사용자에게 실행 권한을 부여한다.
• 한 줄로 작성하고, 8진법 숫자를 이용한 명령문을 이용한다.`}],choices:["chmod 157 a.txt","chmod 754 a.txt","chmod 751 a.txt","chmod 715 a.txt"],blanks:[{answer:"chmod 751 a.txt"}],explanation:`사용자(rwx), 그룹(r-x), 기타 사용자(--x)를 2진수로 바꾸면 111 101 001이고, 각각 8진수로 바꾸면 7 5 1이다.
따라서 명령문은 chmod 751 a.txt이다. (r=4, w=2, x=1을 더해서 구해도 된다.)`},{id:"kw-102",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"인터넷에 대한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 숫자를 쓰시오.",blocks:[{type:"text",text:`1. IPv6는 ( ① )비트의 주소를 가지며, 인증성, 기밀성, 데이터 무결성의 지원으로 보안 문제를 해결할 수 있고, 주소의 확장성, 융통성, 연동성이 뛰어나다.
2. IPv4는 32비트의 주소를 가지며 ( ② )비트씩 4부분, 총 32비트로 구성되어 있다. IPv4는 네트워크 부분의 길이에 따라 A 클래스에서 E 클래스까지 총 5단계로 구성되어 있다.`}],choices:["8","16","32","64","128"],blanks:[{label:"①",answer:"128"},{label:"②",answer:"8"}],explanation:`• IPv6: 16비트씩 8부분, 총 128비트 (16진수, 콜론(:)으로 구분)
• IPv4: 8비트씩 4부분, 총 32비트 (10진수, 마침표(.)로 구분)`},{id:"kw-103",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"192.168.1.0/24 네트워크를 FLSM 방식을 이용하여 3개의 Subnet으로 나누었을 때, 두 번째 네트워크의 브로드캐스트 IP 주소를 10진수 방식으로 쓰시오.",choices:["192.168.1.63","192.168.1.128","192.168.1.127","192.168.1.191"],blanks:[{answer:"192.168.1.127"}],explanation:`/24이므로 마지막 8비트로 서브넷을 나눈다. 3개의 서브넷이 필요하므로 2비트(2² = 4개)를 네트워크용으로 쓰고, 남은 6비트로 호스트를 구성한다(2⁶ = 64개).
FLSM(고정 길이)이므로 64개씩 나누면 아래와 같고, 각 네트워크의 마지막 주소가 브로드캐스트 주소이다.
• 1번: 192.168.1.0 ~ 192.168.1.63
• 2번: 192.168.1.64 ~ 192.168.1.127
• 3번: 192.168.1.128 ~ 192.168.1.191
따라서 두 번째 네트워크의 브로드캐스트 주소는 192.168.1.127이다.`},{id:"kw-104",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"서브네팅(Subnetting)에 대한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 숫자를 쓰시오.",blocks:[{type:"text",text:"현재 IP 주소가 192.168.1.132이고, 서브넷 마스크가 255.255.255.192일 때, 네트워크 주소는 192.168.1.( ① )이고, 해당 네트워크에서 네트워크 주소와 브로드캐스트 주소를 제외한 사용 가능 호스트의 수는 ( ② )개이다."}],choices:["62","64","128","132","192"],blanks:[{label:"①",answer:"128"},{label:"②",answer:"62"}],explanation:`255.255.255.192는 마지막 옥텟이 11000000이므로 네트워크용 비트가 2개 늘어나 4개의 네트워크(각 64개 주소)로 나뉜다.
192.168.1.132는 세 번째 네트워크(192.168.1.128 ~ 192.168.1.191)에 속하므로 네트워크 주소는 192.168.1.128이다.
사용 가능한 호스트 수는 64개에서 네트워크 주소와 브로드캐스트 주소를 뺀 62개이다.`},{id:"kw-105",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"네트워크 및 인터넷과 관련된 다음 설명에 해당하는 용어를 영문(Full name 또는 약어)으로 쓰시오.",blocks:[{type:"text",text:`• 현재 사용하고 있는 IP 주소 체계인 IPv4의 주소 부족 문제를 해결하기 위해 개발되었다.
• 16비트씩 8부분, 총 128비트로 구성되어 있다.
• 각 부분을 16진수로 표현하고, 콜론(:)으로 구분한다.
• 인증성, 기밀성, 데이터 무결성의 지원으로 보안 문제를 해결할 수 있다.
• 주소의 확장성, 융통성, 연동성이 뛰어나며, 실시간 흐름 제어로 향상된 멀티미디어 기능을 지원한다.`}],choices:["IPSec(Internet Protocol Security)","IPv4(Internet Protocol version 4)","ICMPv6(Internet Control Message Protocol version 6)","IPv6(Internet Protocol version 6)"],blanks:[{answer:"IPv6(Internet Protocol version 6)"}],explanation:"IPv6는 IPv4의 주소 부족 문제를 해결하기 위해 개발된 128비트 주소 체계로, 16비트씩 8부분을 16진수로 표현하고 콜론(:)으로 구분한다."},{id:"kw-106",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"OSI 7 Layer에 대한 다음 설명에서 각 번호(①~③)에 들어갈 알맞은 계층(Layer)을 쓰시오.",blocks:[{type:"text",text:`OSI 7 Layer는 다른 시스템 간의 원활한 통신을 위해 ISO(국제표준화기구)에서 제안한 통신 규약(Protocol)이다.
① 물리적으로 연결된 두 개의 인접한 개방 시스템들 간에 신뢰성 있고 효율적인 정보 전송을 할 수 있도록 연결 설정, 데이터 전송, 오류 제어 등의 기능을 수행한다.
② 개방 시스템들 간의 네트워크 연결을 관리하며, 경로 제어, 패킷 교환, 트래픽 제어 등의 기능을 수행한다.
③ 서로 다른 데이터 표현 형태를 갖는 시스템 간의 상호 접속을 위해 필요한 계층으로, 코드 변환, 데이터 암호화, 데이터 압축, 구문 검색 등의 기능을 수행한다.`}],choices:["데이터 링크 계층(Data Link Layer)","전송 계층(Transport Layer)","세션 계층(Session Layer)","표현 계층(Presentation Layer)","응용 계층(Application Layer)","네트워크 계층(Network Layer)"],blanks:[{label:"①",answer:"데이터 링크 계층(Data Link Layer)",accepts:["데이터 링크"]},{label:"②",answer:"네트워크 계층(Network Layer)",accepts:["망 계층","네트워크"]},{label:"③",answer:"표현 계층(Presentation Layer)",accepts:["표현"]}],explanation:`OSI 7계층: 물리 → 데이터 링크 → 네트워크 → 전송 → 세션 → 표현 → 응용
• 데이터 링크 계층: 인접 시스템 간 신뢰성 있는 전송(흐름·오류 제어)
• 네트워크 계층(망 계층): 경로 설정(라우팅), 패킷 교환, 트래픽 제어
• 표현 계층: 코드 변환, 암호화, 압축, 구문 검색`},{id:"kw-107",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음이 설명하는 OSI 참조 모델의 계층을 쓰시오.",blocks:[{type:"text",text:`• 다양한 전송매체를 통해 비트 스트림을 전송한다.
• 전송에 필요한 두 장치 간의 실제 접속과 절단 등 기계적, 전기적, 기능적, 절차적 특성에 대한 규칙을 정의한다.`}],choices:["데이터 링크 계층(Data Link Layer)","물리 계층(Physical Layer)","네트워크 계층(Network Layer)","전송 계층(Transport Layer)"],blanks:[{answer:"물리 계층(Physical Layer)"}],explanation:"물리 계층은 전송 매체를 통해 비트 스트림을 전송하며, 두 장치 간 실제 접속·절단에 필요한 기계적, 전기적, 기능적, 절차적 특성을 정의한다."},{id:"kw-108",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 네트워크 관련 설명에서 괄호에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"심리학자 톰 마릴은 컴퓨터가 메시지를 전달하고, 메시지가 제대로 도착했는지 확인하며, 도착하지 않았을 경우 메시지를 재전송하는 일련의 방법을 '기술적 은어'를 뜻하는 ( )이라는 용어로 정의하였다."}],choices:["패킷(Packet)","알고리즘(Algorithm)","인터페이스(Interface)","프로토콜(Protocol)"],blanks:[{answer:"프로토콜(Protocol)"}],explanation:`프로토콜은 서로 다른 기기 간의 데이터 교환을 원활하게 하기 위한 통신 규약으로, 톰 마릴이 처음 이 용어를 사용했다.
기본 요소는 구문(Syntax), 의미(Semantics), 시간(Timing)이다.`},{id:"kw-109",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"프로토콜은 서로 다른 기기들 간의 데이터 교환을 원활하게 수행할 수 있도록 표준화시켜 놓은 통신 규약이다. 프로토콜의 기본 요소 3가지를 쓰시오.",choices:["주소(Address)","경로(Routing)","의미(Semantics)","계층(Layer)","시간(Timing)","구문(Syntax)"],blanks:[{answer:"구문(Syntax)"},{answer:"의미(Semantics)"},{answer:"시간(Timing)",accepts:["타이밍"]}],unordered:!0,explanation:`• 구문(Syntax): 데이터의 형식, 부호화, 신호 레벨 등을 규정
• 의미(Semantics): 두 기기 간의 효율적이고 정확한 전송을 위한 협조 사항과 오류 관리 제어 정보를 규정
• 시간(Timing): 두 기기 간의 통신 속도, 메시지의 순서 제어 등을 규정
순서는 상관없다.`},{id:"kw-110",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"인터넷에 대한 다음 설명에서 괄호(①~③)에 들어갈 알맞은 용어를 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:`인터넷이란 TCP/IP 프로토콜을 기반으로 하여 전 세계 수많은 컴퓨터와 네트워크들이 연결된 광범위한 컴퓨터 통신망이다.
• ( ① ) : 월드 와이드 웹(WWW)에서 HTML 문서를 송수신 하기 위한 표준 프로토콜로, GET과 POST 메소드를 통해 메시지를 주고 받는다.
• ( ② ) : 다른 문서나 그림으로 이동할 수 있는 연결을 가지고 있는 텍스트를 의미한다.
• ( ③ ) : 인터넷의 표준 문서인 하이퍼텍스트 문서를 만들기 위해 사용하는 언어이다.`}],choices:["UDDI","XML","WSDL","Hypertext","DHTML","HTML","SOAP","HTTP"],blanks:[{label:"①",answer:"HTTP"},{label:"②",answer:"Hypertext"},{label:"③",answer:"HTML"}],explanation:`• HTTP: 웹에서 HTML 문서를 주고받기 위한 프로토콜(GET, POST 메소드)
• Hypertext: 다른 문서나 그림으로 이동할 수 있는 연결(링크)을 가진 텍스트
• HTML: 하이퍼텍스트 문서를 만들기 위한 언어`},{id:"kw-111",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"네트워크에 관련된 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:`• ( ① ) : 연결형 통신에서 주로 사용되는 방식으로, 출발지와 목적지의 전송 경로를 미리 연결하여 논리적으로 고정한 후 통신하는 방식
• ( ② ) : 비연결형 통신에서 주로 사용되는 방식으로, 사전에 접속 절차를 수행하지 않고 헤더에 출발지에서 목적지까지의 경로 지정을 위한 충분한 정보를 붙여서 개별적으로 전달하는 방식`}],choices:["가상 회선(Virtual Circuit)","메시지 교환(Message Switching)","데이터그램(Datagram)","시분할 다중화(TDM)","회선 교환(Circuit Switching)"],blanks:[{label:"①",answer:"가상 회선(Virtual Circuit)",accepts:["가상 회선 방식"]},{label:"②",answer:"데이터그램(Datagram)",accepts:["데이터그램 방식"]}],explanation:`패킷 교환 방식
• 가상 회선: 데이터 전송 전에 논리적 경로를 미리 설정(연결형)
• 데이터그램: 경로를 미리 설정하지 않고 패킷마다 독립적으로 전달(비연결형)`},{id:"kw-112",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"네트워크 및 인터넷과 관련된 다음 설명에 해당하는 용어를 쓰시오.",blocks:[{type:"text",text:"인터넷 환경에서의 호스트 상호 간 통신에서 연결된 네트워크 접속 장치의 물리적 주소인 MAC 주소를 이용하여 IP 주소를 찾는 인터넷 계층의 프로토콜로, 역순 주소 결정 프로토콜이라 불린다."}],choices:["RARP(Reverse Address Resolution Protocol)","ICMP(Internet Control Message Protocol)","ARP(Address Resolution Protocol)","IGMP(Internet Group Management Protocol)"],blanks:[{answer:"RARP(Reverse Address Resolution Protocol)"}],explanation:`• ARP: IP 주소 → MAC 주소로 변환
• RARP: MAC 주소 → IP 주소로 변환(역순 주소 결정 프로토콜)`},{id:"kw-113",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 네트워크 관련 설명에서 괄호에 들어갈 알맞은 용어를 영문(Full name 또는 약어)으로 쓰시오.",blocks:[{type:"text",text:"( )는 TCP/IP 기반의 인터넷 통신 서비스에서 인터넷 프로토콜(IP)과 조합하여 통신 중에 발생하는 오류의 처리와 전송 경로의 변경 등을 위한 제어 메시지를 취급하는 무연결 전송용 프로토콜로, OSI 기본 참조 모델의 네트워크 계층에 속한다."}],choices:["UDP(User Datagram Protocol)","ICMP(Internet Control Message Protocol)","IGMP(Internet Group Management Protocol)","ARP(Address Resolution Protocol)"],blanks:[{answer:"ICMP(Internet Control Message Protocol)"}],explanation:"ICMP는 IP와 함께 동작하며 통신 중 발생하는 오류 처리와 전송 경로 변경 등의 제어 메시지를 관리하는 네트워크 계층 프로토콜이다. ping 명령이 ICMP를 사용한다."},{id:"kw-114",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에서 괄호에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"( )는 한 번의 로그인으로 개인이 가입한 모든 사이트를 이용할 수 있게 해주는 시스템을 말한다. 개인의 경우, 사이트에 접속하기 위하여 아이디와 패스워드는 물론 이름, 전화번호 등 개인정보를 각 사이트마다 일일이 기록해야 하던 것이 한 번의 작업으로 끝나므로 불편함이 해소되며, 기업에서는 회원에 대한 통합관리가 가능해 마케팅을 극대화시킬 수 있다는 장점이 있다."}],choices:["SSL(Secure Sockets Layer)","MFA(Multi-Factor Authentication)","SSO(Single Sign On)","OTP(One Time Password)"],blanks:[{answer:"SSO(Single Sign On)",accepts:["통합 인증"]}],explanation:"SSO(Single Sign On)는 한 번의 로그인(인증)으로 여러 시스템이나 사이트를 추가 인증 없이 이용할 수 있게 해주는 시스템이다."},{id:"kw-115",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"네트워크 및 인터넷과 관련된 다음 설명에 해당하는 용어를 쓰시오.",blocks:[{type:"text",text:`• 재난 및 군사 현장과 같이 별도의 고정된 유선망을 구축할 수 없는 장소에서 모바일 호스트(Mobile Host)만을 이용하여 구성한 네트워크이다.
• 망을 구성한 후 단기간 사용되는 경우나 유선망을 구성하기 어려운 경우에 적합하다.
• 멀티 홉 라우팅 기능을 지원한다.`}],choices:["WAN(Wide Area Network)","애드 혹 네트워크(Ad-hoc Network)","VPN(Virtual Private Network)","SDN(Software Defined Networking)"],blanks:[{answer:"애드 혹 네트워크(Ad-hoc Network)",accepts:["애드혹","Ad-hoc"]}],explanation:"애드 혹 네트워크는 고정된 유선망이나 기지국 없이 이동 단말기(모바일 호스트)끼리만 구성하는 네트워크로, 재난 현장·군사 작전처럼 유선망 구축이 어려운 곳에 적합하다."},{id:"kw-116",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"네트워크에 대한 다음 설명에 해당하는 용어를 쓰시오.",blocks:[{type:"text",text:`• 우리말로 번역하면 '네트워크 주소 변환'이라는 의미의 영문 3글자 약자이다.
• 1개의 정식 IP 주소에 다량의 가상 사설 IP 주소를 할당 및 연결하는 방식이다.
• 1개의 IP 주소를 사용해서 외부에 접속할 수 있는 노드는 어느 시점에서 1개만으로 제한되는 문제가 있으나, 이 때에는 IP 마스커레이드(Masquerade)를 이용하면 된다.`}],choices:["ARP(Address Resolution Protocol)","DHCP(Dynamic Host Configuration Protocol)","DNS(Domain Name System)","NAT(Network Address Translation)"],blanks:[{answer:"NAT(Network Address Translation)"}],explanation:"NAT(네트워크 주소 변환)는 하나의 공인 IP 주소를 여러 사설 IP 주소와 연결해 변환하는 기술로, IP 주소 부족 문제를 완화하고 내부 네트워크를 숨기는 효과가 있다."},{id:"kw-117",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 설명에서 가리키는 용어를 쓰시오.",blocks:[{type:"text",text:`가. 정의
웹상에 존재하는 데이터를 개별 URI(Uniform Resource Identifier)로 식별하고, 각 URI에 링크 정보를 부여함으로써 상호 연결된 웹을 지향하는 모형이다. 링크 기능이 강조된 시맨틱웹의 모형에 속한다고 볼 수 있으며 팀 버너스 리의 W3C를 중심으로 발전하고 있다.

나. 주요 기능
1. 공개된 데이터를 이용하면 내가 원하는 데이터가 이미 존재하는지, 어디에 존재하는지 알 수 있다.
2. URI로 구별되는 데이터 리소스의 자유로운 접근 및 이용이 가능하므로 큰 노력 없이 데이터의 매쉬업이 가능하다.
3. 내가 만든 데이터가 아니라도 URI를 이용하여 링크만 해주면 이용할 수 있다.

다. 4대 원칙
1. 통합 자원 식별자(URI)를 사용한다.
2. URI는 HTTP 프로토콜을 통해 접근할 수 있어야 한다.
3. RDF나 스파클 같은 표준을 사용한다.
4. 풍부한 링크 정보가 있어야 한다.

라. Linked Data와 Open Data를 결합한 용어이다.`}],choices:["시맨틱 웹(Semantic Web)","LOD(개방형 링크드 데이터)","메타데이터(Metadata)","빅데이터(Big Data)"],blanks:[{answer:"LOD(개방형 링크드 데이터)",accepts:["Linked Open Data"]}],explanation:"LOD(Linked Open Data)는 Linked Data와 Open Data의 합성어로, 웹상의 데이터를 URI로 식별하고 링크로 연결해 누구나 자유롭게 접근·활용할 수 있도록 공개한 데이터이다."},{id:"kw-118",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"경로 제어 프로토콜(Routing Protocol)에 대한 다음 설명에서 괄호(①~④)에 들어갈 알맞은 용어를 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:`경로 제어 프로토콜은 크게 자율 시스템 내부의 라우팅에 사용되는 ( ① )와 자율 시스템 간의 라우팅에 사용되는 ( ② )로 구분할 수 있다.
• ( ① )는 소규모 동종 자율 시스템에서 효율적인 RIP와 대규모 자유 시스템에서 많이 사용되는 ( ③ )로 나누어진다.
• ( ③ )는 링크 상태(Link State)를 실시간으로 반영하여 최단 경로로 라우팅을 지원하는 특징이 있다.
• ( ④ )는 ( ② )의 단점을 보완하여 만들어진 라우팅 프로토콜로, 처음 연결될 때는 전체 라우팅 테이블을 교환하고, 이후에는 변화된 정보만을 교환한다.`}],choices:["BGP","AS","HOP","OSPF","NAT","ISP","EGP","IGP"],blanks:[{label:"①",answer:"IGP"},{label:"②",answer:"EGP"},{label:"③",answer:"OSPF"},{label:"④",answer:"BGP"}],explanation:`• IGP(내부 게이트웨이 프로토콜): 자율 시스템(AS) 내부 라우팅 → RIP(소규모, 거리 벡터), OSPF(대규모, 링크 상태)
• EGP(외부 게이트웨이 프로토콜): 자율 시스템 간 라우팅
• BGP: EGP의 단점을 보완한 AS 간 라우팅 프로토콜, 처음엔 전체 라우팅 테이블을, 이후엔 변경 정보만 교환`},{id:"kw-119",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"피투피(P2P) 네트워크를 이용하여 온라인 금융 거래 정보를 온라인 네트워크 참여자(Peer)의 디지털 장비에 분산 저장하는 기술을 쓰시오.",choices:["블록체인(Blockchain)","빅데이터(Big Data)","클라우드 컴퓨팅(Cloud Computing)","핀테크(FinTech)"],blanks:[{answer:"블록체인(Blockchain)"}],explanation:"블록체인은 거래 정보를 담은 블록을 P2P 네트워크 참여자들의 장비에 분산 저장하고 체인처럼 연결해, 위·변조를 어렵게 만드는 분산 원장 기술이다."},{id:"kw-120",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"정보 보호에 대한 다음 설명에 해당하는 용어를 영문 약어로 쓰시오.",blocks:[{type:"text",text:"정보 자산을 안전하게 보호하기 위한 보호 절차와 대책으로, 정보보호 관리 체계라고 한다. 조직에 맞는 정보보호 정책을 수립하고, 위험에 상시 대응하는 여러 보안 대책을 통합 관리한다. 공공 부문과 민간 기업 부문에서 이것을 평가하고 인증하는 사업을 한국인터넷진흥원(KISA)에서 운영중이다."}],choices:["BCP","PIMS","ISMS","CC"],blanks:[{answer:"ISMS",accepts:["Information Security Management System"]}],explanation:"ISMS(Information Security Management System, 정보보호 관리체계)는 조직의 정보 자산을 보호하기 위한 정책·절차·대책을 체계적으로 관리하는 체계이며, 한국인터넷진흥원(KISA)이 인증 업무를 수행한다."},{id:"kw-121",session:"키워드",subjectId:5,subjectName:"정보 보안",type:"text",question:"보안 및 보안 위협에 대한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 용어를 <보기>에서 찾아 쓰시오.",blocks:[{type:"text",text:`• ( ① )은 칩 설계회사인 ARM(Advanced RISC Machine)에서 개발한 기술로, 하나의 프로세서(Processor) 내에 일반 애플리케이션을 처리하는 일반 구역(Normal World)과 보안이 필요한 애플리케이션을 처리하는 보안 구역(Secure World)으로 분할하여 관리하는 하드웨어 기반의 보안 기술이다.
• ( ② )은 네티즌들이 사이트에 접속할 때 주소를 잘못 입력하거나 철자를 빠뜨리는 실수를 이용하기 위해 이와 유사한 유명 도메인을 미리 등록하는 것으로 URL 하이재킹(Hijacking)이라고도 한다. 유명 사이트들의 도메인을 입력할 때 발생할 수 있는 온갖 도메인 이름을 미리 선점해 놓고 이용자가 모르는 사이에 광고 사이트로 이동하게 만든다.`}],choices:["Pharming","Tvishing","Trustzone","APT","Typosquatting","Hacktivism","Watering Hole","Smurfing","Ransomware","CSRF"],blanks:[{label:"①",answer:"Trustzone"},{label:"②",answer:"Typosquatting"}],explanation:`• 트러스트존(Trustzone): ARM이 개발한 하드웨어 기반 보안 기술로, 하나의 프로세서를 일반 구역(Normal World)과 보안 구역(Secure World)으로 분할한다.
• 타이포스쿼팅(Typosquatting): 사용자가 주소를 잘못 입력하는 실수를 노려 유사한 도메인을 미리 등록해 두는 것(URL 하이재킹)이다.`},{id:"kw-122",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 설명의 RAID에 해당하는 레벨(Level)을 답란의 괄호 안에 숫자로 쓰시오.",blocks:[{type:"text",text:`여러 개의 하드디스크로 디스크 배열을 구성하고, 파일을 구성하는 데이터 블록들을 서로 다른 디스크에 분산하여 저장할 경우 저장된 블록들을 여러 디스크에서 동시에 읽고 쓸 수 있으므로 디스크의 속도가 매우 향상되는데, 이 기술을 RAID라고 한다. 레이드 방식 중 패리티가 없는 스트라이핑된 2개 이상의 디스크를 병렬로 연결하여 구성하는 이 방식은 디스크의 개수가 증가할수록 입·출력 속도 및 저장 용량이 배로 증가하지만, 하나의 디스크만 손상되어도 전체 데이터가 유실되는 문제가 발생한다.

답란 : Level (   )`}],choices:["0","1","5","6"],blanks:[{answer:"0"}],explanation:`RAID 0은 패리티 없이 데이터를 여러 디스크에 나누어 저장(스트라이핑)하는 방식으로, 속도와 용량은 늘어나지만 디스크 하나만 고장 나도 전체 데이터가 유실된다.
참고로 RAID 1은 미러링(복제), RAID 5는 분산 패리티 방식이다.`},{id:"kw-123",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"분산 컴퓨팅에 대한 다음 설명에 해당하는 용어를 쓰시오.",blocks:[{type:"text",text:`• 오픈 소스 기반 분산 컴퓨팅 플랫폼이다.
• 분산 저장된 데이터들은 클러스터 환경에서 병렬 처리된다.
• 일반 PC급 컴퓨터들로 가상화된 대형 스토리지를 형성하고 그 안에 보관된 거대한 데이터 세트를 병렬로 처리할 수 있도록 개발되었다.
• 더그 커팅과 마이크 캐퍼렐라가 개발했으며, 구글의 맵리듀스(MapReduce) 엔진을 사용하고 있다.`}],choices:["하둡(Hadoop)","데이터 웨어하우스(Data Warehouse)","NoSQL","맵리듀스(MapReduce)"],blanks:[{answer:"하둡(Hadoop)"}],explanation:"하둡(Hadoop)은 일반 PC급 컴퓨터들로 가상화된 대형 스토리지를 구성하고, 거대한 데이터를 분산 저장(HDFS)·병렬 처리(MapReduce)하는 오픈 소스 분산 컴퓨팅 플랫폼이다."},{id:"kw-124",session:"키워드",subjectId:6,subjectName:"OS·네트워크·신기술",type:"essay",question:"데이터 마이닝(Data Mining)의 개념을 간략히 서술하시오.",choices:["데이터 마이닝은 여러 시스템에 흩어진 데이터를 주제별로 통합하여 저장한 데이터 저장소이다.","데이터 마이닝은 데이터를 설명하기 위한 데이터, 즉 데이터에 관한 데이터이다.","데이터 마이닝은 사용자가 다차원 데이터를 대화식으로 분석하여 의사결정에 활용하는 기술이다.","데이터 마이닝은 대량의 데이터를 분석하여 데이터에 내재된 변수 사이의 상호관계를 규명하여 일정한 패턴을 찾아내는 기법이다."],blanks:[{answer:"데이터 마이닝은 대량의 데이터를 분석하여 데이터에 내재된 변수 사이의 상호관계를 규명하여 일정한 패턴을 찾아내는 기법이다."}],explanation:"'대량의 데이터 분석', '변수 사이의 상호관계 규명', '패턴(규칙) 발견'이 핵심 키워드이다."},{id:"kw-125",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"데이터베이스 회복(Recovery) 기법에 관련된 다음 설명에서 괄호에 공통적으로 들어갈 가장 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"( )은 트랜잭션이 데이터를 변경하면 트랜잭션이 부분 완료되기 전이라도 즉시 실제 DB에 그 내용을 반영하는 기법으로, 장애가 발생하여 회복 작업할 경우를 대비하여 갱신된 내용들을 로그(Log)에 보관시킨다. ( )에서 회복 작업을 수행할 경우 Redo와 Undo 모두 수행이 가능하다."}],choices:["검사점 기법(Check Point)","지연 갱신 기법(Deferred Update)","즉각 갱신 기법(Immediate Update)","그림자 페이징(Shadow Paging)"],blanks:[{answer:"즉각 갱신 기법(Immediate Update)",accepts:["즉시 갱신 기법","즉각 갱신","즉시 갱신"]}],explanation:`• 즉각 갱신 기법: 트랜잭션 수행 중 변경 내용을 즉시 DB에 반영하고 로그에 기록 → 회복 시 Redo와 Undo 모두 사용
• 지연 갱신 기법: 트랜잭션이 부분 완료될 때까지 DB 반영을 미룸 → 회복 시 Redo만 사용`},{id:"kw-126",session:"키워드",subjectId:2,subjectName:"데이터베이스",type:"text",question:"데이터베이스의 병행제어(Concurrency Control) 기법 중 하나로, 접근한 데이터에 대한 연산을 모두 마칠 때까지 추가적인 접근을 제한함으로써 상호 배타적으로 접근하여 작업을 수행하도록 하는 기법을 쓰시오.",choices:["낙관적 병행제어(Optimistic Concurrency Control)","타임 스탬프 순서(Timestamp Ordering)","다중 버전 기법(Multi Version)","로킹(Locking)"],blanks:[{answer:"로킹(Locking)",accepts:["잠금"]}],explanation:`로킹(Locking)은 트랜잭션이 사용하는 데이터에 잠금(Lock)을 걸어 연산이 끝날 때까지 다른 트랜잭션의 접근을 막는 병행제어 기법이다.
병행제어 기법: 로킹, 타임 스탬프 순서, 최적 병행 수행, 다중 버전 기법`},{id:"kw-127",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"릴리즈 노트는 개발 과정에서 정리된 릴리즈 정보를 소프트웨어의 최종 사용자인 고객과 공유하기 위한 문서이다. 릴리즈 노트는 정확하고 완전한 정보를 기반으로 개발팀에서 직접 현재 시제로 작성해야 한다. 릴리즈 노트 작성 시 릴리즈 노트 이름, 소프트웨어 이름, 릴리즈 버전, 릴리즈 날짜, 릴리즈 노트 날짜, 릴리즈 노트 버전 등이 포함된 항목을 쓰시오.",choices:["머릿말(Header)","면책 조항(Disclaimer)","이슈 요약(Issue Summary)","개요(Overview)"],blanks:[{answer:"머릿말(Header)",accepts:["머리말","헤더"]}],explanation:`릴리즈 노트 작성 항목: 헤더(머릿말), 개요, 목적, 이슈 요약, 재현 항목, 수정/개선 내용, 사용자 영향도, SW 지원 영향도, 노트, 면책 조항, 연락처
이 중 헤더(머릿말)에는 릴리즈 노트 이름, 소프트웨어 이름, 릴리즈 버전, 릴리즈 날짜, 노트 날짜, 노트 버전 등이 들어간다.`},{id:"kw-128",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"제시된 보기 중 형상 관리 도구에 해당하는 것을 3가지 고르시오.",choices:["OLAP","CVS","Ant","Maven","Git","Jenkins","Spring","SVN"],blanks:[{answer:"CVS"},{answer:"Git"},{answer:"SVN"}],unordered:!0,explanation:`형상 관리 도구: CVS, SVN(Subversion), Git, Clear Case 등
Ant, Maven은 빌드 도구, Jenkins는 지속적 통합(CI) 도구, Spring은 프레임워크, OLAP은 다차원 데이터 분석 기술이다. 순서는 상관없다.
※ 원본 자료의 정답 표기 'CSV'는 'CVS'의 오타로 보여 CVS로 바로잡았습니다.`},{id:"kw-129",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"essay",question:"소프트웨어 개발에서의 작업 중 형상 통제에 대해 간략히 서술하시오.",choices:["형상 통제는 기준선의 무결성을 평가하기 위해 확인, 검증 등의 과정을 거쳐 공식적으로 승인하는 작업이다.","형상 통제는 식별된 형상 항목에 대한 변경 요구를 검토하여 현재의 기준선이 잘 반영될 수 있도록 조정하는 작업이다.","형상 통제는 관리 대상이 되는 형상 항목을 식별하고 이름과 관리 번호를 부여하는 작업이다.","형상 통제는 형상의 식별, 통제, 감사 작업의 결과를 기록·관리하고 보고서를 작성하는 작업이다."],blanks:[{answer:"형상 통제는 식별된 형상 항목에 대한 변경 요구를 검토하여 현재의 기준선이 잘 반영될 수 있도록 조정하는 작업이다."}],explanation:`형상 관리 절차: 형상 식별 → 형상 통제 → 형상 감사 → 형상 기록(보고)
형상 통제는 변경 요구를 검토·승인하여 기준선(Baseline)에 반영되도록 조정하는 작업이며, 형상 통제 위원회(CCB)의 승인을 거친다.`},{id:"kw-130",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에서 괄호에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"소프트웨어 ( )는 소프트웨어 개발 단계의 각 과정에서 만들어지는 프로그램, 프로그램을 설명하는 문서, 데이터 등을 관리하는 것을 말한다. 소프트웨어의 개발 과정에서 만들어지는 여러 버전들의 변경 사항을 관리하는 일련의 활동이며 이를 지원하는 도구로 Git, SVN 등이 있다."}],choices:["형상관리(SCM)","릴리즈 노트(Release Note)","빌드 자동화(Build Automation)","소프트웨어 패키징(Software Packaging)"],blanks:[{answer:"형상관리(SCM)",accepts:["형상 관리","Software Configuration Management"]}],explanation:"소프트웨어 형상 관리(SCM)는 개발 과정에서 만들어지는 프로그램, 문서, 데이터 등의 변경 사항을 관리하는 일련의 활동으로, Git, SVN, CVS 같은 도구를 사용한다."}],Mf=Object.freeze(Object.defineProperty({__proto__:null,default:Df},Symbol.toStringTag,{value:"Module"})),Of=[{id:"ctrl-01",session:"코드 · 제어문",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
main() {
    int s, el = 0;
    for (int i = 6; i <= 30; i++) {
        s = 0;
        for (int j = 1; j <= i / 2; j++)
            if (i % j == 0)
                s = s + j;
        if (s == i)
            el++;
    }
    printf("%d", el);
}`,language:"c",choices:["0","1","2","3"],blanks:[{answer:"2"}],explanation:`i를 6부터 30까지 바꿔 가며, 자기 자신을 제외한 약수(1 ~ i/2 중 i를 나누어떨어지게 하는 j)의 합 s를 구한다.
s와 i가 같은 수(완전수)를 만날 때마다 el을 1 증가시킨다.
6 = 1 + 2 + 3, 28 = 1 + 2 + 4 + 7 + 14 두 개뿐이므로 2가 출력된다.`},{id:"ctrl-02",session:"코드 · 제어문",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`public class Test {
    public static void main(String[] args) {
        int r = 0;
        for (int i = 1; i < 999; i++) {
            if (i % 3 == 0 && i % 2 == 0)
                r = i;
        }
        System.out.print(r);
    }
}`,language:"java",choices:["6","990","996","998"],blanks:[{answer:"996"}],explanation:`i가 1부터 998까지 증가하면서 3과 2로 모두 나누어떨어지는 수(6의 배수)를 만날 때마다 r에 덮어쓴다.
반복이 끝나면 r에는 998 이하의 6의 배수 중 가장 큰 996이 남는다.`},{id:"ctrl-03",session:"코드 · 제어문",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`public class Test {
    public static void main(String[] args) {
        int i = 3, k = 1;
        switch(i) {
            case 1: k++;
            case 2: k -= 3;
            case 3: k = 0;
            case 4: k += 3;
            case 5: k -= 10;
            default: k--;
        }
        System.out.print(k);
    }
}`,language:"java",choices:["3","-8","0","-7"],blanks:[{answer:"-8"}],explanation:`i가 3이므로 case 3부터 실행한다. break가 없으므로 아래의 case와 default까지 모두 이어서 실행된다.
k = 0 → k += 3 (3) → k -= 10 (-7) → k-- (-8)`},{id:"ctrl-04",session:"코드 · 제어문",subjectId:7,subjectName:"C 언어",type:"text",question:"다음은 정수를 역순으로 출력하는 C언어 프로그램이다. 예를 들어 1234의 역순은 4321이다. 단, 1230처럼 0으로 끝나는 정수는 고려하지 않는다. 프로그램을 분석하여 괄호(①~③)에 들어갈 알맞은 연산자를 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    int number = 1234;
    int div = 10, result = 0;
    while (number ( ① ) 0) {
        result = result * div;
        result = result + number ( ② ) div;
        number = number ( ③ ) div;
    }
    printf("%d", result);
}`,language:"c",choices:["!=","/","==","*","%","<"],blanks:[{label:"①",answer:"!= 또는 >",accepts:["!=",">"]},{label:"②",answer:"%"},{label:"③",answer:"/"}],explanation:`number가 0이 될 때까지(① != 또는 >) 반복한다.
• result에 10을 곱해 자릿수를 한 칸 올린 뒤, number의 마지막 자리(② number % 10)를 더한다.
• number를 10으로 나눠(③ number / 10) 마지막 자리를 없앤다.
result의 변화: 4 → 43 → 432 → 4321`},{id:"ctrl-05",session:"코드 · 제어문",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`public class Test {
    public static void main(String[] args) {
        int w = 3, x = 4, y = 3, z = 5;
        if((w == 2 | w == y) & !(y > z) & (1 == x ^ y != z)) {
            w = x + y;
            if(7 == x ^ y != w)
                System.out.println(w);
            else
                System.out.println(x);
        }
        else {
            w = y + z;
            if(7 == y ^ z != w)
                System.out.println(w);
            else
                System.out.println(z);
        }
    }
}`,language:"java",choices:["4","5","7","8"],blanks:[{answer:"7"}],explanation:`비교 연산자(==, !=, >)가 비트 연산자(&, ^, |)보다 우선순위가 높으므로 비교 결과를 먼저 구한다.
• 첫 번째 if: (false | true) & !(false) & (false ^ true) → true & true & true → true
• w = x + y = 7
• 두 번째 if: (7 == 4) ^ (3 != 7) → false ^ true → true이므로 w의 값 7을 출력한다.`},{id:"ctrl-06",session:"코드 · 제어문",subjectId:9,subjectName:"Python",type:"code",question:"다음 Python로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`a = 100
result = 0
for i in range(1,3):
    result = a >> i
    result = result + 1
print(result)`,language:"python",choices:["25","26","51","77"],blanks:[{answer:"26"}],explanation:`range(1,3)이므로 i는 1, 2이다. result는 누적되지 않고 반복마다 새 값으로 바뀐다.
• i = 1: 100 >> 1 = 50, result = 51
• i = 2: 100 >> 2 = 25, result = 26
오른쪽으로 n비트 시프트하면 2ⁿ으로 나눈 몫과 같다. 마지막 값 26이 출력된다.`},{id:"ctrl-07",session:"코드 · 제어문",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`public class Test {
    public static void main(String[] args) {
        int j, i;
        for (j = 0, i = 0; i <= 5; i++) {
            j += i;
            System.out.print(i);
            if (i == 5) {
                System.out.print("=");
                System.out.print(j);
            }
            else
                System.out.print("+");
        }
    }
}`,language:"java",choices:["1+2+3+4+5=15","0+1+2+3+4=10","0+1+2+3+4+5+=15","0+1+2+3+4+5=15"],blanks:[{answer:"0+1+2+3+4+5=15"}],explanation:"i를 0부터 5까지 j에 누적하면서 i를 출력하고, i가 5가 아니면 +를, 5이면 =와 누적 합 j(15)를 출력한다."},{id:"ctrl-08",session:"코드 · 제어문",subjectId:9,subjectName:"Python",type:"code",question:"다음 Python로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`lol = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
print(lol[0])
print(lol[2][1])
for sub in lol:
    for item in sub:
        print(item, end=' ')
    print()`,language:"python",choices:[`[1, 2, 3]
7
1 2 3
4 5
6 7 8 9`,`1 2 3
7
1 2 3
4 5
6 7 8 9`,`[1, 2, 3]
8
1 2 3
4 5
6 7 8 9`,`[1, 2, 3]
7
1 2 3 4 5 6 7 8 9`],blanks:[{answer:`[1, 2, 3]
7
1 2 3
4 5
6 7 8 9`}],explanation:`• print(lol[0]): 0번째 행을 리스트 형태 그대로 출력 → [1, 2, 3]
• print(lol[2][1]): 2번째 행의 1번째 요소 → 7
• 바깥 for는 각 행을 sub에, 안쪽 for는 행의 요소를 item에 담아 공백으로 이어 출력하고, 행이 끝날 때마다 print()로 줄을 바꾼다.`},{id:"ctrl-09",session:"코드 · 제어문",subjectId:8,subjectName:"Java",type:"text",question:"다음은 변수 n에 저장된 10진수를 2진수로 변환하여 출력하는 Java 프로그램이다. 프로그램을 분석하여 괄호(①, ②)에 들어갈 알맞은 답을 쓰시오.",codeSnippet:`public class Test {
    public static void main(String[] args) {
        int a[] = new int[8];
        int i = 0;
        int n = 10;
        while( ( ① ) ) {
            a[i++] = ( ② );
            n /= 2;
        }
        for(i = 7; i >= 0; i--)
            System.out.print(a[i]);
    }
}`,language:"java",choices:["n % 2","n * 2","n == 0","n > 0","n / 2"],blanks:[{label:"①",answer:"n > 0",accepts:["n != 0","n >= 1","0 < n"]},{label:"②",answer:"n % 2"}],explanation:`10진수를 2진수로 바꾸려면 n이 0보다 큰 동안(① n > 0) n을 2로 나눈 나머지(② n % 2)를 차례로 저장하고 n을 2로 나눈다.
나머지를 역순으로 출력하면 2진수가 되므로 10은 00001010으로 출력된다.`},{id:"ctrl-10",session:"코드 · 제어문",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java로 구현된 프로그램을 분석하여 괄호(①, ②)에 들어갈 알맞은 답을 쓰시오.",codeSnippet:`public class Test {
    public static void main(String[] args) {
        int ary[][] = new int[( ① )][( ② )];
        int n = 1;
        for(int i = 0; i < 3; i++) {
            for(int j = 0; j < 5; j++) {
                ary[i][j] = j * 3 + i + 1;
                System.out.print(ary[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,language:"java",choices:["1","2","3","5"],blanks:[{label:"①",answer:"3"},{label:"②",answer:"5"}],explanation:`반복문에서 i는 0~2(3회), j는 0~4(5회) 사용되므로 배열 ary는 3행 5열이어야 한다. 따라서 new int[3][5]이다.
(①에 5처럼 더 큰 값을 넣어도 실행은 되지만, 반복 횟수에 딱 맞는 3행 5열이 정답이다.)
실행 결과는 다음과 같다.
1 4 7 10 13
2 5 8 11 14
3 6 9 12 15`},{id:"ctrl-11",session:"코드 · 제어문",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`public class Test {
    public static void main(String[] args) {
        int i = 0, c = 0;
        while (i < 10) {
            i++;
            c *= i;
        }
        System.out.println(c);
    }
}`,language:"java",choices:["0","10","55","3628800"],blanks:[{answer:"0"}],explanation:"c가 0으로 시작하므로 c *= i를 몇 번 반복해도 c는 계속 0이다."},{id:"ctrl-12",session:"코드 · 제어문",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`public class Test {
    public static void main(String[] args) {
        int a = 0, sum = 0;
        while (a < 10) {
            a++;
            if (a % 2 == 1)
                continue;
            sum += a;
        }
        System.out.println(sum);
    }
}`,language:"java",choices:["20","25","30","55"],blanks:[{answer:"30"}],explanation:`a를 1부터 10까지 증가시키며, 홀수이면 continue로 누적을 건너뛴다.
짝수만 더해지므로 sum = 2 + 4 + 6 + 8 + 10 = 30이다.`},{id:"ctrl-13",session:"코드 · 제어문",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`public class Test {
    public static void main(String[] args) {
        int result[] = new int[5];
        int arr[] = { 77, 32, 10, 99, 50 };
        for(int i = 0; i < 5; i++) {
            result[i] = 1;
            for(int j = 0; j < 5; j++)
                if(arr[i] < arr[j])
                    result[i]++;
        }
        for(int k = 0; k < 5; k++)
            System.out.print(result[k]);
    }
}`,language:"java",choices:["13524","21543","24513","42153"],blanks:[{answer:"24513"}],explanation:`result[i]는 1에서 시작해 arr[i]보다 큰 값이 있을 때마다 1씩 증가하므로, 큰 값부터 매긴 순위가 된다.
77은 2위, 32는 4위, 10은 5위, 99는 1위, 50은 3위이므로 24513이 출력된다.`},{id:"ctrl-14",session:"코드 · 제어문",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`public class Test {
    public static void main(String[] args) {
        int aa[][] = { {45, 50, 75},
                       {89} };
        System.out.println(aa[0].length);
        System.out.println(aa[1].length);
        System.out.println(aa[0][0]);
        System.out.println(aa[0][1]);
        System.out.println(aa[1][0]);
    }
}`,language:"java",choices:[`2
1
45
50
89`,`3
3
45
50
89`,`3
1
45
89
50`,`3
1
45
50
89`],blanks:[{answer:`3
1
45
50
89`}],explanation:`Java의 2차원 배열은 행마다 길이가 다를 수 있다.
aa[0]은 {45, 50, 75}로 길이 3, aa[1]은 {89}로 길이 1이다. 나머지는 각 위치의 값 45, 50, 89를 출력한다.`}],_f=Object.freeze(Object.defineProperty({__proto__:null,default:Of},Symbol.toStringTag,{value:"Module"})),zf=[{id:"ptr-01",session:"코드 · 포인터",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
int len(char* p);
int main() {
    char* p1 = "2022";
    char* p2 = "202207";
    int a = len(p1);
    int b = len(p2);
    printf("%d", a + b);
}
int len(char* p) {
    int r = 0;
    while (*p != '\\0') {
        p++;
        r++;
    }
    return r;
}`,language:"c",choices:["4","6","10","12"],blanks:[{answer:"10"}],explanation:`len 함수는 포인터 p가 널 문자('\\0')를 만날 때까지 한 칸씩 이동하며 글자 수를 센다(문자열 길이).
len("2022") = 4, len("202207") = 6이므로 4 + 6 = 10이 출력된다.`},{id:"ptr-02",session:"코드 · 포인터",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
int main() {
    int a[4] = { 0, 2, 4, 8 };
    int b[3];
    int* p;
    int sum = 0;
    for (int i = 1; i < 4; i++) {
        p = a + i;
        b[i - 1] = *p - a[i - 1];
        sum = sum + b[i - 1] + a[i];
    }
    printf("%d", sum);
}`,language:"c",choices:["8","14","22","24"],blanks:[{answer:"22"}],explanation:`p = a + i는 a[i]의 주소이므로 *p는 a[i]이다. b[i-1]은 이웃한 두 값의 차이(a[i] - a[i-1])가 된다.
• i = 1: b[0] = 2 - 0 = 2, sum = 0 + 2 + 2 = 4
• i = 2: b[1] = 4 - 2 = 2, sum = 4 + 2 + 4 = 10
• i = 3: b[2] = 8 - 4 = 4, sum = 10 + 4 + 8 = 22`},{id:"ptr-03",session:"코드 · 포인터",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
int main() {
    int* array[3];
    int a = 12, b = 24, c = 36;
    array[0] = &a;
    array[1] = &b;
    array[2] = &c;
    printf("%d", *array[1] + **array + 1);
}`,language:"c",choices:["25","37","49","61"],blanks:[{answer:"37"}],explanation:`array는 정수형 포인터 3개를 저장하는 포인터 배열이다.
• *array[1]: array[1]이 가리키는 b의 값 24
• **array: *array는 array[0](a의 주소)이고, 한 번 더 참조하면 a의 값 12
따라서 24 + 12 + 1 = 37이 출력된다.`},{id:"ptr-04",session:"코드 · 포인터",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
int main() {
    int ary[3];
    int s = 0;
    *(ary + 0) = 1;
    ary[1] = *(ary + 0) + 2;
    ary[2] = *ary + 3;
    for (int i = 0; i < 3; i++)
        s = s + ary[i];
    printf("%d", s);
}`,language:"c",choices:["4","6","8","9"],blanks:[{answer:"8"}],explanation:`*(ary + 0), *ary는 모두 ary[0]과 같다.
ary[0] = 1, ary[1] = 1 + 2 = 3, ary[2] = 1 + 3 = 4이므로 합계 s = 1 + 3 + 4 = 8이다.`},{id:"ptr-05",session:"코드 · 포인터",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
main() {
    char* p = "KOREA";
    printf("%s\\n", p);
    printf("%s\\n", p + 3);
    printf("%c\\n", *p);
    printf("%c\\n", *(p + 3));
    printf("%c\\n", *p + 2);
}`,language:"c",choices:[`KOREA
EA
K
R
M`,`KOREA
REA
K
E
M`,`KOREA
EA
K
E
L`,`KOREA
EA
K
E
M`],blanks:[{answer:`KOREA
EA
K
E
M`}],explanation:`• %s, p: p가 가리키는 곳부터 문자열 전체 → KOREA
• %s, p + 3: 3번째 글자부터 문자열 → EA
• %c, *p: 첫 글자 → K
• %c, *(p + 3): 3번째 글자 → E
• %c, *p + 2: 'K'의 아스키 코드에 2를 더한 문자 → M`}],Bf=Object.freeze(Object.defineProperty({__proto__:null,default:zf},Symbol.toStringTag,{value:"Module"})),Ff=[{id:"st-01",session:"코드 · 구조체",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
struct A {
    int n;
    int g;
};
main() {
    struct A st[2];
    for (int i = 0; i < 2; i++) {
        st[i].n = i;
        st[i].g = i + 1;
    }
    printf("%d", st[0].n + st[1].g);
}`,language:"c",choices:["0","1","2","3"],blanks:[{answer:"2"}],explanation:`반복문을 실행하면 st[0] = {n: 0, g: 1}, st[1] = {n: 1, g: 2}가 된다.
st[0].n + st[1].g = 0 + 2 = 2이다.`},{id:"st-02",session:"코드 · 구조체",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
main() {
    struct insa {
        char name[10];
        int age;
    } a[] = { "Kim", 28, "Lee", 38, "Park", 42, "Choi", 31 };
    struct insa* p;
    p = a;
    p++;
    printf("%s\\n", p->name);
    printf("%d\\n", p->age);
}`,language:"c",choices:[`Lee
28`,`Park
42`,`Lee
38`,`Kim
28`],blanks:[{answer:`Lee
38`}],explanation:`p = a로 p는 a[0]을 가리키고, p++로 다음 구조체인 a[1]을 가리킨다. (포인터에 1을 더하면 자료형 크기만큼 이동)
포인터로 멤버에 접근할 때는 -> 를 사용하므로 a[1]의 name(Lee)과 age(38)가 출력된다.`},{id:"st-03",session:"코드 · 구조체",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
struct jsu {
    char nae[12];
    int os, db, hab, hhab;
};

int main() {
    struct jsu st[3] = { {"데이터1", 95, 88}, {"데이터2", 84, 91}, {"데이터3", 86, 75} };
    struct jsu* p;
    p = &st[0];
    (p + 1)->hab = (p + 1)->os + (p + 2)->db;
    (p + 1)->hhab = (p + 1)->hab + p->os + p->db;
    printf("%d", (p + 1)->hab + (p + 1)->hhab);
}`,language:"c",choices:["159","342","488","501"],blanks:[{answer:"501"}],explanation:`p는 st[0], p + 1은 st[1], p + 2는 st[2]를 가리킨다.
• st[1].hab = st[1].os + st[2].db = 84 + 75 = 159
• st[1].hhab = st[1].hab + st[0].os + st[0].db = 159 + 95 + 88 = 342
• 출력: 159 + 342 = 501`}],Uf=Object.freeze(Object.defineProperty({__proto__:null,default:Ff},Symbol.toStringTag,{value:"Module"})),Hf=[{id:"fn-01",session:"코드 · 사용자 정의 함수",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 배열 <mines>의 각 칸에 들어갈 값을 쓰시오.",blocks:[{type:"table",caption:"배열 <field>",rows:[["0","1","0","1"],["0","0","0","1"],["1","1","1","0"],["0","1","1","1"]]},{type:"text",text:"※ 앱에서는 배열 <mines>의 한 행을 한 줄에 쓰고, 각 값은 공백으로 구분해 입력하세요. (예: 0 0 0 0)"}],codeSnippet:`#include <stdio.h>
main() {
    int field[4][4] = { {0,1,0,1}, {0,0,0,1}, {1,1,1,0}, {0,1,1,1} };
    int mines[4][4] = { {0,0,0,0}, {0,0,0,0}, {0,0,0,0}, {0,0,0,0} };
    int w = 4, h = 4;
    for (int y = 0; y < h; y++) {
        for (int x = 0; x < w; x++) {
            if (field[y][x] == 0) continue;
            for (int j = y - 1; j <= y + 1; j++) {
                for (int i = x - 1; i <= x + 1; i++) {
                    if (chkover(w, h, j, i) == 1)
                        mines[j][i] += 1;
                }
            }
        }
    }
}

int chkover(int w, int h, int j, int i) {
    if (i >= 0 && i < w && j >= 0 && j < h) return 1;
    return 0;
}`,language:"c",choices:[`1 0 3 1
3 4 5 2
2 4 5 4
3 4 4 2`,`0 1 0 1
0 0 0 1
1 1 1 0
0 1 1 1`,`1 3 3 3
1 4 5 5
3 5 6 5
2 3 4 3`,`1 1 3 2
3 4 5 3
3 5 6 4
3 5 5 3`],blanks:[{answer:`1 1 3 2
3 4 5 3
3 5 6 4
3 5 5 3`}],explanation:`field의 값이 1인 칸을 만날 때마다, 그 칸을 중심으로 한 3×3 범위의 mines 값을 1씩 증가시킨다. chkover는 좌표가 배열 범위 안에 있는지 확인한다.
결국 mines의 각 칸은 '자기 자신을 포함한 주변 3×3 범위에 있는 1의 개수'가 된다.
예) mines[0][0]: field[0][0], [0][1], [1][0], [1][1] 중 1은 field[0][1] 하나 → 1`},{id:"fn-02",session:"코드 · 사용자 정의 함수",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`public class Test {
    static int[] mkarr() {
        int[] tmpArr = new int[4];
        for (int i = 0; i < tmpArr.length; i++)
            tmpArr[i] = i;
        return tmpArr;
    }
    public static void main(String[] args) {
        int[] arr;
        arr = mkarr();
        for (int i = 0; i < arr.length; i++)
            System.out.print(arr[i]);
    }
}`,language:"java",choices:["0123","0 1 2 3","1234","0000"],blanks:[{answer:"0123"}],explanation:`mkarr()은 길이 4인 배열에 0, 1, 2, 3을 저장해 반환한다.
main에서 배열 요소를 공백 없이 이어서 출력하므로 0123이 출력된다.`},{id:"fn-03",session:"코드 · 사용자 정의 함수",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
int isPrime(int number) {
    for (int i = 2; i < number; i++)
        if (number % i == 0) return 0;
    return 1;
}
int main() {
    int number = 13195;
    int max_div = 0;
    for (int i = 2; i < number; i++)
        if (isPrime(i) == 1 && number % i == 0) max_div = i;
    printf("%d", max_div);
}`,language:"c",choices:["5","13","29","35"],blanks:[{answer:"29"}],explanation:`isPrime(n)은 n이 소수이면 1을 반환한다.
main은 2부터 13194까지의 수 중 13195의 약수이면서 소수인 수를 찾을 때마다 max_div에 덮어쓴다.
13195 = 5 × 7 × 13 × 29이므로 가장 큰 소인수 29가 출력된다.`},{id:"fn-04",session:"코드 · 사용자 정의 함수",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
main() {
    int res = mp(2, 10);
    printf("%d", res);
}
int mp(int base, int exp) {
    int res = 1;
    for (int i = 0; i < exp; i++)
        res *= base;
    return res;
}`,language:"c",choices:["20","100","512","1024"],blanks:[{answer:"1024"}],explanation:"mp(base, exp)는 base를 exp번 곱한 값(거듭제곱)을 반환한다. mp(2, 10) = 2¹⁰ = 1024이다."},{id:"fn-05",session:"코드 · 사용자 정의 함수",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java로 구현된 프로그램을 분석하여 괄호에 들어갈 알맞은 예약어를 쓰시오.",codeSnippet:`public class Test {
    public static void main(String[] args) {
        System.out.print(Test.check(1));
    }
    (        ) String check(int num) {
        return (num >= 0) ? "positive" : "negative";
    }
}`,language:"java",choices:["public","static","private","final"],blanks:[{answer:"static"}],explanation:`main은 객체를 만들지 않고 클래스 이름으로 Test.check(1)을 호출한다. 객체 생성 없이 호출하려면 check가 클래스 메소드여야 하므로 static을 붙인다.
실행하면 1 >= 0이므로 positive가 출력된다.`},{id:"fn-06",session:"코드 · 사용자 정의 함수",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
int r1() {
    return 4;
}
int r10() {
    return (30 + r1());
}
int r100() {
    return (200 + r10());
}
int main() {
    printf("%d\\n", r100());
    return 0;
}`,language:"c",choices:["4","34","234","432"],blanks:[{answer:"234"}],explanation:`r100()은 200 + r10(), r10()은 30 + r1(), r1()은 4를 반환한다.
따라서 200 + 30 + 4 = 234가 출력된다.`},{id:"fn-07",session:"코드 · 사용자 정의 함수",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`public class Test {
    static int[] arr() {
        int a[] = new int[4];
        int b = a.length;
        for(int i = 0; i < b; i++)
            a[i] = i;
        return a;
    }
    public static void main(String[] args) {
        int a[] = arr();
        for(int i = 0; i < a.length; i++)
            System.out.print(a[i] + " ");
    }
}`,language:"java",choices:["0 1 2 3 4","1 2 3 4","0 1 2 3","0123"],blanks:[{answer:"0 1 2 3"}],explanation:"arr()은 0, 1, 2, 3이 저장된 배열을 반환한다. main에서 각 요소 뒤에 공백을 붙여 출력하므로 0 1 2 3이 출력된다."},{id:"fn-08",session:"코드 · 사용자 정의 함수",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
void align(int a[]) {
    int temp;
    for (int i = 0; i < 4; i++)
        for (int j = 0; j < 4 - i; j++)
            if (a[j] > a[j+1]) {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
}
main() {
    int a[] = { 85, 75, 50, 100, 95 };
    align(a);
    for (int i = 0; i < 5; i++)
        printf("%d ", a[i]);
}`,language:"c",choices:["100 95 85 75 50","85 75 50 100 95","50 75 85 95 100","50 75 85 100 95"],blanks:[{answer:"50 75 85 95 100"}],explanation:`align은 이웃한 두 값을 비교해 앞의 값이 크면 교환하는 버블 정렬(오름차순)이다.
배열은 주소가 전달되므로 align에서 정렬한 결과가 main의 배열에 그대로 반영된다.`},{id:"fn-09",session:"코드 · 사용자 정의 함수",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C언어로 구현된 프로그램을 분석하여 5를 입력했을 때 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`#include <stdio.h>
int func(int a) {
    if (a <= 1) return 1;
    return a * func(a - 1);
}
int main() {
    int a;
    scanf("%d", &a);
    printf("%d", func(a));
}`,language:"c",choices:["5","15","24","120"],blanks:[{answer:"120"}],explanation:"func는 재귀 호출로 팩토리얼을 구한다. func(5) = 5 × 4 × 3 × 2 × 1 = 120"}],Wf=Object.freeze(Object.defineProperty({__proto__:null,default:Hf},Symbol.toStringTag,{value:"Module"})),qf=[{id:"java-01",session:"코드 · Java 활용",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`class Test {
    public static void main(String args[]) {
        cond obj = new cond(3);
        obj.a = 5;
        int b = obj.func();
        System.out.print(obj.a + b);
    }
}
class cond {
    int a;
    public cond(int a) {
        this.a = a;
    }
    public int func() {
        int b = 1;
        for (int i = 1; i < a; i++)
            b += a * i;
        return a + b;
    }
}`,language:"java",choices:["16","56","61","66"],blanks:[{answer:"61"}],explanation:`생성자로 a = 3이 되지만 바로 obj.a = 5로 바뀐다.
func()에서 b = 1에 a × i (i = 1~4)를 더하면 1 + 5 + 10 + 15 + 20 = 51이고, a + b = 56을 반환한다.
출력은 obj.a + b = 5 + 56 = 61이다.`},{id:"java-02",session:"코드 · Java 활용",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`class A {
    int a;
    int b;
}
public class Test {
    static void func1(A m) {
        m.a *= 10;
    }
    static void func2(A m) {
        m.a += m.b;
    }
    public static void main(String args[]) {
        A m = new A();
        m.a = 100;
        func1(m);
        m.b = m.a;
        func2(m);
        System.out.printf("%d", m.a);
    }
}`,language:"java",choices:["200","1000","1100","2000"],blanks:[{answer:"2000"}],explanation:`객체를 인수로 넘기면 참조(주소)가 전달되므로, 메소드 안에서 바꾼 값이 원래 객체에 그대로 반영된다.
m.a = 100 → func1: m.a = 1000 → m.b = 1000 → func2: m.a = 1000 + 1000 = 2000`},{id:"java-03",session:"코드 · Java 활용",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`public class ovr1 {
    public static void main(String[] args) {
        ovr1 a1 = new ovr1();
        ovr2 a2 = new ovr2();
        System.out.println(a1.sun(3,2) + a2.sun(3,2));
    }
    int sun(int x, int y) {
        return x + y;
    }
}
class ovr2 extends ovr1 {
    int sun(int x, int y) {
        return x - y + super.sun(x, y);
    }
}`,language:"java",choices:["5","6","10","11"],blanks:[{answer:"11"}],explanation:`• a1.sun(3, 2): ovr1의 sun → 3 + 2 = 5
• a2.sun(3, 2): 오버라이딩된 ovr2의 sun → 3 - 2 + super.sun(3, 2) = 1 + 5 = 6
5 + 6 = 11이 출력된다.`},{id:"java-04",session:"코드 · Java 활용",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`class A {
    int a;
    public A(int a) { this.a = a; }
    void display() { System.out.println("a=" + a); }
}
class B extends A {
    public B(int a) {
        super(a);
        super.display();
    }
}
public class Test {
    public static void main(String[] args) {
        B obj = new B(10);
    }
}`,language:"java",choices:["10","a=0",`a=10
a=10`,"a=10"],blanks:[{answer:"a=10"}],explanation:`new B(10)으로 B의 생성자가 실행되고, super(a)로 부모 A의 생성자를 호출해 a = 10이 된다.
이어서 super.display()로 부모의 display()를 호출하므로 a=10이 출력된다.`},{id:"java-05",session:"코드 · Java 활용",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java로 구현된 프로그램을 분석하여 괄호에 들어갈 알맞은 답을 쓰시오.",codeSnippet:`class Car implements Runnable {
    int a;
    public void run() {
        try {
            while(++a < 100) {
                System.out.println("miles traveled : " + a);
                Thread.sleep(100);
            }
        } catch(Exception E) { }
    }
}
public class Test {
    public static void main(String args[]) {
        Thread t1 = new Thread(new (        )());
        t1.start();
    }
}`,language:"java",choices:["Object","Test","Car","Runnable"],blanks:[{answer:"Car"}],explanation:`Thread 생성자에는 Runnable 인터페이스를 구현한 객체를 넘겨야 한다. Runnable을 구현한 클래스는 Car이므로 new Car()가 들어간다.
t1.start()를 호출하면 Car의 run() 메소드가 새로운 스레드에서 실행된다.`},{id:"java-06",session:"코드 · Java 활용",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`class Connection {
    private static Connection _inst = null;
    private int count = 0;
    static public Connection get() {
        if(_inst == null) {
            _inst = new Connection();
            return _inst;
        }
        return _inst;
    }
    public void count() { count++; }
    public int getCount() { return count; }
}
public class Test {
    public static void main(String[] args) {
        Connection conn1 = Connection.get();
        conn1.count();
        Connection conn2 = Connection.get();
        conn2.count();
        Connection conn3 = Connection.get();
        conn3.count();
        System.out.print(conn1.getCount());
    }
}`,language:"java",choices:["0","1","2","3"],blanks:[{answer:"3"}],explanation:`싱글톤(Singleton) 패턴이다. get()은 _inst가 null일 때 한 번만 객체를 만들고, 이후에는 같은 객체를 반환한다.
conn1, conn2, conn3은 모두 같은 객체이므로 count()가 세 번 호출되어 3이 출력된다.`},{id:"java-07",session:"코드 · Java 활용",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java로 구현된 프로그램을 분석하여 괄호에 들어갈 알맞은 답을 쓰시오.",codeSnippet:`class Parent {
    void show() { System.out.println("parent"); }
}
class Child extends Parent {
    void show() { System.out.println("child"); }
}
public class Test {
    public static void main(String[] args) {
        Parent pa = (        ) Child();
        pa.show();
    }
}`,language:"java",choices:["super","new","class","this"],blanks:[{answer:"new"}],explanation:`객체를 생성하는 예약어는 new이다.
부모 타입 변수 pa에 자식 객체를 대입(업캐스팅)했고 show()는 Child에서 오버라이딩했으므로, pa.show()를 실행하면 child가 출력된다.`},{id:"java-08",session:"코드 · Java 활용",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`class Parent {
    int compute(int num) {
        if(num <= 1) return num;
        return compute(num - 1) + compute(num - 2);
    }
}
class Child extends Parent {
    int compute(int num) {
        if(num <= 1) return num;
        return compute(num - 1) + compute(num - 3);
    }
}
public class Test {
    public static void main(String[] args) {
        Parent obj = new Child();
        System.out.print(obj.compute(4));
    }
}`,language:"java",choices:["0","1","2","3"],blanks:[{answer:"1"}],explanation:`obj는 Child 객체이므로 오버라이딩된 Child의 compute()가 재귀 호출된다. (num ≤ 1이면 num을 반환)
• compute(2) = compute(1) + compute(-1) = 1 + (-1) = 0
• compute(3) = compute(2) + compute(0) = 0 + 0 = 0
• compute(4) = compute(3) + compute(1) = 0 + 1 = 1`},{id:"java-09",session:"코드 · Java 활용",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`abstract class Vehicle {
    String name;
    abstract public String getName(String val);
    public String getName() {
        return "Vehicle name : " + name;
    }
}
class Car extends Vehicle {
    private String name;
    public Car(String val) {
        name = super.name = val;
    }
    public String getName(String val) {
        return "Car name : " + val;
    }
    public String getName(byte[] val) {
        return "Car name : " + val;
    }
}
public class Test {
    public static void main(String[] args) {
        Vehicle obj = new Car("Spark");
        System.out.print(obj.getName());
    }
}`,language:"java",choices:["Vehicle name : null","Vehicle name : Spark","Car name : Spark","Car name : null"],blanks:[{answer:"Vehicle name : Spark"}],explanation:`Car 생성자에서 Car의 name과 부모의 name(super.name)이 모두 "Spark"가 된다.
obj.getName()은 인수가 없는 메소드인데, Car는 인수가 있는 getName만 정의(오버로딩)했으므로 Vehicle의 getName()이 실행된다.
Vehicle의 name은 "Spark"이므로 Vehicle name : Spark가 출력된다.`}],$f=Object.freeze(Object.defineProperty({__proto__:null,default:qf},Symbol.toStringTag,{value:"Module"})),Vf=[{id:"py-01",session:"코드 · Python 활용",subjectId:9,subjectName:"Python",type:"code",question:"다음 Python로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`x, y = 100, 200
print(x==y)`,language:"python",choices:["True","false","0","False"],blanks:[{answer:"False"}],explanation:"x에 100, y에 200이 저장된다. 두 값이 다르므로 x==y의 결과인 False가 출력된다. (Python의 논리값은 True / False로 첫 글자가 대문자이다.)"},{id:"py-02",session:"코드 · Python 활용",subjectId:9,subjectName:"Python",type:"code",question:"다음 Python로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`a = "REMEMBER NOVEMBER"
b = a[0:3] + a[12:16]
c = "R AND %s" % "STR"
print(b + c)`,language:"python",choices:["REMEMBER AND STR","REMEMBER AND %s","REMNOVEMBER AND STR","REMEMBERR AND STR"],blanks:[{answer:"REMEMBER AND STR"}],explanation:`• a[0:3]: 0~2번째 글자 'REM', a[12:16]: 12~15번째 글자 'EMBE' → b = 'REMEMBE'
• c: %s 자리에 'STR'이 들어가 'R AND STR'
• b + c = 'REMEMBER AND STR'`},{id:"py-03",session:"코드 · Python 활용",subjectId:9,subjectName:"Python",type:"essay",question:"다음 Python로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`asia = {'한국', '중국', '일본'}
asia.add('베트남')
asia.add('중국')
asia.remove('일본')
asia.update({'한국', '홍콩', '태국'})
print(asia)`,language:"python",choices:["{'한국', '중국', '일본', '베트남', '홍콩', '태국'}","{'한국', '중국', '베트남', '중국', '한국', '홍콩', '태국'}","{'한국', '중국', '베트남', '홍콩', '태국'}","{'한국', '베트남', '홍콩', '태국'}"],blanks:[{answer:"{'한국', '중국', '베트남', '홍콩', '태국'}"}],explanation:`세트(set)는 중복을 허용하지 않고 순서가 없는 자료형이다.
• add('베트남') → 추가 / add('중국') → 이미 있으므로 무시
• remove('일본') → 삭제
• update({'한국', '홍콩', '태국'}) → '홍콩', '태국'만 추가('한국'은 중복)
세트는 순서가 없어 출력 순서가 달라질 수 있으므로, 다섯 요소가 모두 맞으면 정답이다.`},{id:"py-04",session:"코드 · Python 활용",subjectId:9,subjectName:"Python",type:"code",question:"다음 Python로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`a = [1, 2, 3, 4, 5]
a = list(map(lambda num : num + 100, a))
print(a)`,language:"python",choices:["[100, 101, 102, 103, 104]","[101, 102, 103, 104, 105]","[101]","[1, 2, 3, 4, 5]"],blanks:[{answer:"[101, 102, 103, 104, 105]"}],explanation:`map(함수, 리스트)는 리스트의 각 요소에 함수를 적용한다. lambda num : num + 100은 인수에 100을 더해 반환하는 람다 식이다.
각 요소에 100을 더한 결과를 list()로 다시 리스트로 만들어 출력한다.`},{id:"py-05",session:"코드 · Python 활용",subjectId:9,subjectName:"Python",type:"code",question:"다음 Python로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`def func(num1, num2 = 2):
    print('a =', num1, 'b =', num2)
func(20)`,language:"python",choices:["a = 20 b = 2","a = 20 b = None","a = 20 b = 20","a = 2 b = 20"],blanks:[{answer:"a = 20 b = 2"}],explanation:`num2는 기본값이 2인 매개변수이므로 func(20)처럼 인수를 하나만 넘기면 num1 = 20, num2 = 2가 된다.
print는 쉼표로 나열한 값들을 공백 한 칸으로 구분해 출력하므로 a = 20 b = 2가 출력된다.`},{id:"py-06",session:"코드 · Python 활용",subjectId:9,subjectName:"Python",type:"code",question:"다음 Python로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)",codeSnippet:`class CharClass:
    a = ['Seoul', 'Kyeongi', 'Inchon', 'Daejeon', 'Daegu', 'Pusan'];

myVar = CharClass()
str01 = ''
for i in myVar.a:
    str01 = str01 + i[0]
print(str01)`,language:"python",choices:["Seoul","linnun","SKIDP","SKIDDP"],blanks:[{answer:"SKIDDP"}],explanation:`for문은 리스트 a의 각 문자열을 i에 담아 반복하고, i[0](첫 글자)을 str01 뒤에 이어 붙인다.
Seoul, Kyeongi, Inchon, Daejeon, Daegu, Pusan의 첫 글자를 이으면 SKIDDP가 된다.`}],Jf=Object.freeze(Object.defineProperty({__proto__:null,default:Vf},Symbol.toStringTag,{value:"Module"})),Qf=[{id:"2026-2-01",session:"2026년 2회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 함수를 쓰시오.",blocks:[{type:"text",text:`• 임의 길이의 입력 데이터를 고정된 길이의 값으로 변환한다.
• 변환된 값으로 원래 입력 데이터를 역으로 알아내기 어렵다(일방향성).
• 데이터가 변조되지 않았는지 확인하는 무결성 검사에 사용된다.`}],choices:["솔트(Salt)","전자서명(Digital Signature)","대칭키 암호(Symmetric Key)","해시(Hash) 함수"],blanks:[{answer:"해시(Hash) 함수"}],explanation:`해시 함수는 임의 길이의 입력을 고정 길이 값(해시값, 다이제스트)으로 바꾸는 일방향 함수다.
• 일방향성: 해시값으로 원래 입력을 알아내기 어렵다.
• 충돌 저항성: 같은 해시값을 갖는 서로 다른 입력을 찾기 어렵다.
• 용도: 무결성 검사, 비밀번호 저장(솔트와 함께), 전자서명
대표 알고리즘은 SHA-256 등이며, MD5는 취약해 권장되지 않는다. 대칭키 암호는 복호화가 가능하므로 일방향이 아니다.`},{id:"2026-2-02",session:"2026년 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 디자인 패턴을 쓰시오.",blocks:[{type:"text",text:`• 생성(Creational) 패턴에 속한다.
• 서로 관련된 객체들의 묶음(제품군)을 한꺼번에 생성한다.
• 클라이언트는 구체적인 클래스를 몰라도 같은 계열의 객체들을 일관되게 만들 수 있다.`}],choices:["Prototype(프로토타입)","Builder(빌더)","Abstract Factory(추상 팩토리)","Factory Method(팩토리 메서드)"],blanks:[{answer:"Abstract Factory(추상 팩토리)"}],explanation:`추상 팩토리(Abstract Factory)는 서로 관련된 객체들의 묶음(제품군)을 구체 클래스를 지정하지 않고 한꺼번에 생성하는 생성 패턴이다.
예) Windows용 버튼·체크박스, Mac용 버튼·체크박스를 각각의 팩토리로 일관되게 생성
오답 정리
• Factory Method: 객체 하나의 생성을 서브 클래스에 위임
• Builder: 복잡한 객체를 단계별로 조립
• Prototype: 기존 객체를 복제해서 생성`},{id:"2026-2-03",session:"2026년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 프로세스들을 SRT(Shortest Remaining Time) 방식으로 스케줄링할 때 평균 대기 시간을 구하시오.",blocks:[{type:"table",headers:["프로세스","도착 시간(ms)","실행 시간(ms)"],rows:[["P1","0","8"],["P2","1","4"],["P3","2","9"],["P4","3","5"]]}],choices:["6.5ms","7.75ms","11.75ms","9ms"],blanks:[{answer:"6.5ms"}],explanation:`SRT는 남은 실행 시간이 가장 짧은 프로세스에 CPU를 주는 선점형 기법이다.
• 0~1: P1 실행(남은 7) → 1초에 P2(4) 도착, 4 < 7이므로 선점
• 1~5: P2 완료 → 남은 시간 P1 7, P3 9, P4 5 중 P4 선택
• 5~10: P4 완료 → 10~17: P1 완료 → 17~26: P3 완료
대기 시간 = 완료 − 도착 − 실행
• P1 17−0−8 = 9, P2 5−1−4 = 0, P3 26−2−9 = 15, P4 10−3−5 = 2
평균 = (9 + 0 + 15 + 2) / 4 = 6.5ms`},{id:"2026-2-04",session:"2026년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 <수강> 테이블은 어느 정규형까지 만족하는가? (단, 기본키는 {고객아이디, 과정명}이며, 한 강사는 한 과정만 담당한다.)",blocks:[{type:"table",caption:"<수강>",headers:["고객아이디","과정명","강사번호"],rows:[["C01","데이터베이스","P1"],["C01","네트워크","P3"],["C02","데이터베이스","P2"],["C03","데이터베이스","P1"],["C03","네트워크","P3"]]},{type:"text",text:`함수 종속
• {고객아이디, 과정명} → 강사번호
• 강사번호 → 과정명`}],choices:["제3정규형","BCNF","제1정규형","제2정규형"],blanks:[{answer:"제3정규형"}],explanation:`먼저 후보키를 찾는다. {고객아이디, 과정명}이 강사번호를 결정하고, 강사번호가 과정명을 결정하므로 {고객아이디, 강사번호}도 후보키다. 따라서 세 속성 모두 어떤 후보키에 속하는 주요 속성이다.
• 1NF: 모든 값이 원자값 → 만족
• 2NF·3NF: 부분 함수 종속·이행 함수 종속 제한은 비주요 속성에 대한 규칙인데, 비주요 속성이 없으므로 위반이 없다 → 만족
• BCNF: 모든 결정자가 후보키여야 하는데, 강사번호 → 과정명에서 결정자 강사번호는 후보키가 아님 → 위반
따라서 제3정규형까지 만족한다. BCNF로 만들려면 <수강(고객아이디, 강사번호)>와 <강사(강사번호, 과정명)>으로 분해한다.
※ 복원 자료의 가답안(제3정규형)에 맞춰, 판단에 필요한 테이블과 함수 종속을 보충해 다시 구성한 문제다.`},{id:"2026-2-05",session:"2026년 2회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"다음과 같이 점수 구간을 나누고, 구간마다 대표값을 하나씩 골라 테스트하는 블랙박스 테스트 기법을 쓰시오.",blocks:[{type:"table",headers:["점수 구간","등급","테스트 입력값"],rows:[["90~100","A","95"],["80~89","B","85"],["70~79","C","75"],["60~69","D","65"],["0~59","E","30"]]}],choices:["경계값 분석","동등 분할 테스트(동치 분할)","오류 예측","원인-효과 그래프"],blanks:[{answer:"동등 분할 테스트(동치 분할)"}],explanation:`동등(동치) 분할 테스트는 입력 범위를 같은 결과를 내는 구간(동치 클래스)으로 나누고, 각 구간에서 대표값을 하나씩 골라 테스트하는 블랙박스 기법이다.
예) 90~100(A), 80~89(B) … 구간마다 95, 85처럼 대표값 하나씩
오답 정리
• 경계값 분석: 구간의 경계(89, 90 등)를 집중적으로 테스트
• 원인-효과 그래프: 입력 조건 조합과 결과의 관계를 그래프로 분석
• 오류 예측: 경험으로 오류가 날 만한 값을 추측`},{id:"2026-2-06",session:"2026년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 설명에 해당하는 라우팅 프로토콜을 쓰시오.",blocks:[{type:"text",text:`• 하나의 자율 시스템(AS) 내부에서 사용하는 라우팅 프로토콜이다.
• 링크 상태(Link State) 정보를 광고하여 네트워크 전체 구성을 파악한다.
• Dijkstra 최단 경로 알고리즘으로 경로를 계산한다.`}],choices:["BGP","EGP","OSPF","RIP"],blanks:[{answer:"OSPF"}],explanation:`OSPF(Open Shortest Path First)는 자율 시스템(AS) 내부에서 쓰는 링크 상태(Link State) 라우팅 프로토콜이다.
• 링크 상태 광고(LSA)로 전체 네트워크 지도를 만들고 Dijkstra 알고리즘으로 최단 경로를 계산
• RIP: 거리 벡터 방식, 홉 수 기준(최대 15홉)
• BGP·EGP: 자율 시스템 사이(AS 간)의 라우팅
※ 복원 가답안이며, 같은 링크 상태 방식인 IS-IS도 설명에 해당할 여지가 있다.`},{id:"2026-2-07",session:"2026년 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 결합도를 쓰시오.",blocks:[{type:"text",text:`• 한 모듈이 다른 모듈의 내부 변수나 기능을 직접 참조하거나 수정한다.
• 결합도 중 가장 강하며(가장 나쁘며), 캡슐화를 깨뜨린다.`}],choices:["공통 결합도","자료 결합도","내용 결합도","스탬프 결합도"],blanks:[{answer:"내용 결합도"}],explanation:`내용 결합도(Content Coupling)는 한 모듈이 다른 모듈의 내부 자료나 코드를 직접 참조·수정하는 경우로, 결합도 중 가장 강하다(가장 나쁘다).
결합도(약함 → 강함): 자료 < 스탬프 < 제어 < 외부 < 공통 < 내용
좋은 설계는 결합도는 낮게, 응집도는 높게 유지한다.`},{id:"2026-2-08",session:"2026년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 두 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오.",blocks:[{type:"table",caption:"<A>",headers:["id","v"],rows:[["1","10"],["1","20"],["2","30"]]},{type:"table",caption:"<B>",headers:["id","w"],rows:[["1","100"],["3","300"],["4","400"]]}],codeSnippet:`SELECT COUNT(*)
FROM A RIGHT JOIN B ON A.id = B.id
WHERE A.id IS NULL;`,language:"sql",choices:["0","1","2","3"],blanks:[{answer:"2"}],explanation:`RIGHT JOIN은 오른쪽 테이블 B의 모든 행을 남기고, 왼쪽 A에 짝이 없으면 A의 열을 NULL로 채운다.
• B.id = 1 → A의 (1,10), (1,20)과 결합 (2행)
• B.id = 3 → A에 없음 → A.id는 NULL
• B.id = 4 → A에 없음 → A.id는 NULL
따라서 A.id IS NULL인 행은 2개다. A의 (2,30)은 B에 짝이 없어 결과에 나오지 않는다.`},{id:"2026-2-09",session:"2026년 2회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`s = "_THIS_IS_EASY_SLICING"
print(s[:4] + s[6:8] + s[18:])`,language:"python",choices:["_THISISING","_THI IS ING","THIISING","_THIISING"],blanks:[{answer:"_THIISING"}],explanation:`파이썬 슬라이싱 s[시작:끝]은 끝 인덱스 바로 앞까지 잘라낸다.
• s[:4] → 0~3번째 → "_THI"
• s[6:8] → 6~7번째 → "IS"
• s[18:] → 18번째부터 끝까지 → "ING"
+로 이어 붙이면 공백 없이 _THIISING이 된다.`},{id:"2026-2-10",session:"2026년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 두 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오.",blocks:[{type:"table",caption:"<A>",headers:["x"],rows:[["10"],["20"],["30"],["40"]]},{type:"table",caption:"<B>",headers:["y"],rows:[["5"],["15"],["25"]]}],codeSnippet:`SELECT COUNT(*)
FROM A
WHERE A.x > (SELECT AVG(B.y)
             FROM B
             WHERE B.y < A.x - 5);`,language:"sql",choices:["1","2","3","4"],blanks:[{answer:"3"}],explanation:`상관 서브쿼리는 바깥 쿼리의 행마다 서브쿼리를 다시 실행한다.
• x = 10: 비교할 B.y 행이 없어 평균(AVG)이 NULL → NULL과의 비교는 참이 아니므로 제외
• x = 20, 30, 40: 평균보다 커서 조건 통과
따라서 COUNT(*)는 3이다. AVG는 대상 행이 없으면 0이 아니라 NULL을 반환한다는 점이 핵심이다.`},{id:"2026-2-11",session:"2026년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"계절 값('봄', '여름', '가을', '겨울')만 허용하는 도메인을 만들려고 한다. 다음 SQL의 괄호에 들어갈 키워드를 쓰시오.",codeSnippet:`CREATE DOMAIN SEASON CHAR(2)
    DEFAULT '봄'
    CONSTRAINT VALID_SEASON (        ) (VALUE IN ('봄', '여름', '가을', '겨울'));`,language:"sql",choices:["REFERENCES","DEFAULT","UNIQUE","CHECK"],blanks:[{answer:"CHECK"}],explanation:`CHECK 제약조건은 값이 지정한 조건을 만족하는지 검사한다.
예) CREATE DOMAIN SEASON CHAR(2) CONSTRAINT VALID_SEASON CHECK (VALUE IN ('봄', '여름', '가을', '겨울'));
오답 정리
• UNIQUE: 중복 금지 / DEFAULT: 기본값 지정 / REFERENCES: 외래키 참조
CHECK는 NULL을 '알 수 없음'으로 보고 통과시키므로, NULL까지 막으려면 NOT NULL을 함께 쓴다.`},{id:"2026-2-12",session:"2026년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"IP 주소 10.0.0.0 ~ 10.0.0.15(총 16개)를 하나의 네트워크로 나타낼 때, CIDR 표기의 프리픽스 길이를 쓰시오.",blocks:[{type:"text",text:"10.0.0.0/(   )"}],choices:["/24","/28","/30","/27"],blanks:[{answer:"/28"}],explanation:`주소 16개 = 2⁴이므로 호스트 부분이 4비트다.
프리픽스 길이 = 32 − 4 = 28 → 10.0.0.0/28 (서브넷 마스크 255.255.255.240)
참고: /24 → 256개, /27 → 32개, /30 → 4개 주소`},{id:"2026-2-13",session:"2026년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
    static int f(int n) {
        if (n <= 1) return n;
        return f(n - 3) + f(n - 1);
    }
    public static void main(String[] args) {
        System.out.print(f(5));
    }
}`,language:"java",choices:["0","1","2","3"],blanks:[{answer:"1"}],explanation:`f(n)은 n ≤ 1이면 n을, 아니면 f(n−3) + f(n−1)을 반환한다. 작은 값부터 차례로 구한다.
• f(2) = f(−1) + f(1) = −1 + 1 = 0
• f(3) = f(0) + f(2) = 0 + 0 = 0
• f(4) = f(1) + f(3) = 1 + 0 = 1
• f(5) = f(2) + f(4) = 0 + 1 = 1`},{id:"2026-2-14",session:"2026년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"<학생> 테이블에서 이름이 '이'로 시작하는 학생을 이름의 내림차순으로 조회하려고 한다. SQL의 괄호(①, ②)에 들어갈 내용을 쓰시오.",codeSnippet:`SELECT *
FROM 학생
WHERE 이름 LIKE '( ① )'
ORDER BY 이름 ( ② );`,language:"sql",choices:["이_","%이","ASC","이%","DESC"],blanks:[{label:"①",answer:"이%"},{label:"②",answer:"DESC"}],explanation:`SELECT * FROM 학생 WHERE 이름 LIKE '이%' ORDER BY 이름 DESC;
• %: 0개 이상의 임의 문자 → '이%'는 '이'로 시작하는 모든 이름
• _: 정확히 한 글자 → '이_'는 '이'로 시작하는 두 글자 이름만
• '%이'는 '이'로 끝나는 이름
• ORDER BY의 기본값은 ASC(오름차순), 내림차순은 DESC`},{id:"2026-2-15",session:"2026년 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 트리를 후위 순회(왼쪽 → 오른쪽 → 자신)할 때, 세 번째로 방문하는 노드의 값을 쓰시오. (괄호 안은 노드의 값)",blocks:[{type:"text",text:`• 루트 노드: an(5)
• an(5)의 왼쪽 자식: bn(12), 오른쪽 자식: cn(7)
• bn(12)의 왼쪽 자식: dn(3), 오른쪽 자식: en(8)
• dn, en, cn은 자식이 없다.`}],choices:["3","7","8","12"],blanks:[{answer:"12"}],explanation:`후위 순회는 왼쪽 자식 → 오른쪽 자식 → 자기 자신 순으로 방문한다.
방문 순서가 dn → en → bn → cn → an이므로 세 번째로 방문하는 노드는 bn이고, bn의 값 12가 출력된다.
참고: 전위는 자기 → 왼쪽 → 오른쪽, 중위는 왼쪽 → 자기 → 오른쪽`},{id:"2026-2-16",session:"2026년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class X {
    int a;
    X(int a) { this.a = a; }
    void f() { System.out.print(a + "a"); }
}
class Y extends X {
    int b;
    Y(int a, int b) {
        super(a);
        this.b = b;
    }
    void f() {
        super.f();
        System.out.print(b + "b");
    }
}
public class Main {
    public static void main(String[] args) {
        X obj = new Y(10, 20);
        obj.f();
    }
}`,language:"java",choices:["20b","10a","10a20b","20b10a"],blanks:[{answer:"10a20b"}],explanation:`객체 생성 순서와 메서드 호출 순서를 따라가면 된다.
• new Y(10, 20) → super(10)으로 부모 X의 a = 10, 이어서 Y의 b = 20
• 자식 f()가 super.f()를 먼저 호출 → "10a" 출력
• 이어서 자식 부분 → "20b" 출력
print는 줄을 바꾸지 않으므로 붙어서 10a20b가 된다.`},{id:"2026-2-17",session:"2026년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 세 서브넷(A, B, C)에서 각각 호스트에 할당할 수 있는 IP 주소를 보기에서 고르시오.",blocks:[{type:"table",headers:["서브넷","네트워크"],rows:[["A","192.168.35.0/24"],["B","129.200.8.0/22"],["C","192.168.36.0/24"]]}],choices:["192.168.35.0","192.168.36.0","129.200.8.249","192.168.36.249","129.200.12.1","192.168.35.72"],blanks:[{label:"A",answer:"192.168.35.72"},{label:"B",answer:"129.200.8.249"},{label:"C",answer:"192.168.36.249"}],explanation:`각 서브넷에서 네트워크 주소(첫 주소)와 브로드캐스트 주소(마지막 주소)를 뺀 나머지가 할당 가능한 호스트 IP다.
• A 192.168.35.0/24 → .1 ~ .254 → 192.168.35.72 (192.168.35.0은 네트워크 주소)
• B 129.200.8.0/22 → 129.200.8.0 ~ 129.200.11.255 → 129.200.8.249 (129.200.12.1은 범위 밖)
• C 192.168.36.0/24 → 192.168.36.249 (192.168.36.0은 네트워크 주소)`},{id:"2026-2-18",session:"2026년 2회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`d = {"NYC": "NEWYORK", "LDN": "LONDON", "PAR": "PARIS", "TKY": "TOKYO"}
result = ""
for k, v in d.items():
    result += k[-1] + v[0]
print(result)`,language:"python",choices:["NCLNPRTY","CNNLRPYT","CNNLPRYT","CLRYNNPT"],blanks:[{answer:"CNNLRPYT"}],explanation:`삽입 순서대로 키와 값을 꺼내 key[-1](키의 마지막 글자) + value[0](값의 첫 글자)를 이어 붙인다.
• NYC:NEWYORK → C + N = CN
• LDN:LONDON → N + L = NL
• PAR:PARIS → R + P = RP
• TKY:TOKYO → Y + T = YT
결과는 CNNLRPYT이다. Python 3.7부터 딕셔너리는 삽입 순서를 유지한다.`},{id:"2026-2-19",session:"2026년 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때 출력되는 네 값을 순서대로 쓰시오.",codeSnippet:`#include <stdio.h>
void set(int *p) { *p = 50; }
void move(int *p) {
    int x = 99;
    p = &x;
}
int main() {
    int i = 2;
    int q[4] = {2, 4, 6, 8};
    set(&i);
    printf("%d ", i);
    move(&i);
    printf("%d ", i);
    printf("%d %d", *q, *(q + 3));
    return 0;
}`,language:"c",choices:["2","5","8","50","100"],blanks:[{label:"첫 번째 값",answer:"50"},{label:"두 번째 값",answer:"50"},{label:"세 번째 값",answer:"2"},{label:"네 번째 값",answer:"8"}],explanation:`C는 인수를 값으로 복사해서 전달한다(포인터도 주소값이 복사된다).
• *p = 50: 포인터가 가리키는 원본 i를 직접 바꿈 → i = 50
• p = 새 주소: 함수 안의 복사본 p만 바뀌고 호출자에는 영향 없음 → i는 그대로 50
• *q = q[0] = 2, *(q+3) = q[3] = 8
따라서 50, 50, 2, 8이 출력된다.`},{id:"2026-2-20",session:"2026년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class X {
    int f() { return 1 + 5 + 3; }
}
class Y extends X {
    int f() { return 10 * 50; }
}
public class Main {
    public static void main(String[] args) {
        X a = new X();
        X b = new Y();
        System.out.print(a.f() + b.f());
    }
}`,language:"java",choices:["18","500","509","1000"],blanks:[{answer:"509"}],explanation:`오버라이딩된 메서드는 참조 변수의 타입이 아니라 실제 객체의 메서드가 실행된다(동적 바인딩).
• X 객체의 f() → 1 + 5 + 3 = 9
• Y 객체의 f() → Y가 재정의한 f() → 10 × 50 = 500
합계 9 + 500 = 509`}],Kf=Object.freeze(Object.defineProperty({__proto__:null,default:Qf},Symbol.toStringTag,{value:"Module"})),Gf=[{id:"2026-1-01",session:"2026년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    int a[10] = {10, 20, 30, 40, 50, 60, 70, 80, 90, 80};
    int sum = 0;
    for (int i = 0; i < 10; i++)
        sum += a[i];
    double avg1 = (double)sum / 10;
    double avg2 = sum / 10.0;
    printf("%.2f", avg1 + avg2);
    return 0;
}`,language:"c",choices:["106","53.00","106.00","106.000000"],blanks:[{answer:"106.00"}],explanation:`배열 10개의 합 530을 개수 10으로 나누면 평균은 53이다. 두 방식 모두 53이므로 합은 106이다.
• %.2f: 소수점 둘째 자리까지 출력 → 106.00
• %f(기본): 소수점 여섯째 자리까지 출력 → 106.000000
정수끼리 나누면 몫만 남으므로, 실수 평균이 필요할 때는 (double) 형 변환에 주의한다.`},{id:"2026-1-02",session:"2026년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 디자인 패턴을 각각 쓰시오.",blocks:[{type:"text",text:`① 기능을 정의하는 추상 계층과 실제 구현 계층을 분리하여 각각 독립적으로 확장할 수 있게 하는 패턴
② 한 객체의 상태가 바뀌면 그 객체를 구독하는 다른 객체들에게 변경 사실을 자동으로 알리는 패턴`}],choices:["Mediator","Strategy","Bridge","Adapter","Observer"],blanks:[{label:"①",answer:"Bridge"},{label:"②",answer:"Observer"}],explanation:`• Bridge(브리지): 기능(추상) 계층과 구현 계층을 분리해 각각 독립적으로 확장하는 구조 패턴
• Observer(옵서버): 한 객체의 상태가 바뀌면 구독한 객체들에게 자동으로 알리는 행위 패턴(일대다 의존)
오답 정리
• Adapter: 호환되지 않는 인터페이스를 변환
• Mediator: 객체 간 상호작용을 중재자가 캡슐화
• Strategy: 알고리즘을 교체 가능하게 캡슐화`},{id:"2026-1-03",session:"2026년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"데이터베이스 설계 과정을 순서대로 올바르게 나열한 것을 고르시오.",choices:["개념적 설계 → 요구사항 분석 → 논리적 설계 → 물리적 설계 → 구현","요구사항 분석 → 논리적 설계 → 개념적 설계 → 물리적 설계 → 구현","요구사항 분석 → 물리적 설계 → 논리적 설계 → 개념적 설계 → 구현","요구사항 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계 → 구현"],blanks:[{answer:"요구사항 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계 → 구현"}],explanation:`데이터베이스 설계는 추상적인 것에서 구체적인 것 순서로 진행한다.
• 요구사항 분석: 사용자 요구 수집·분석
• 개념적 설계: E-R 다이어그램 작성 (DBMS와 무관)
• 논리적 설계: 특정 DBMS의 스키마(테이블)로 변환, 정규화
• 물리적 설계: 저장 구조·인덱스·접근 경로 결정
• 구현: 실제 DB 생성 (DDL 실행)`},{id:"2026-1-04",session:"2026년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 비기능 요구사항이 각각 어떤 유형에 해당하는지 쓰시오.",blocks:[{type:"text",text:`① 시스템은 Windows와 Linux에서 모두 동작해야 한다.
② 시스템 실행에 필요한 최소 메모리와 장치를 확보해야 한다.
③ 사용자의 요청에 1초 이내로 응답해야 한다.`}],choices:["자원","가용성","보안성","유지보수성","이식성","성능"],blanks:[{label:"①",answer:"이식성"},{label:"②",answer:"자원"},{label:"③",answer:"성능"}],explanation:`비기능 요구사항은 기능 외에 시스템이 갖춰야 할 품질·제약 조건이다.
• 이식성: 다른 OS·하드웨어 환경에서도 동작 → 서로 다른 운영체제 지원
• 자원: 필요한 메모리·장치 등 하드웨어 조건 → 최소 메모리·장치 확보
• 성능: 응답 시간, 처리량 → 1초 이내 응답
그 밖에 보안성, 가용성, 유지보수성 등이 있다.`},{id:"2026-1-05",session:"2026년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 용어를 영문 약자로 쓰시오.",blocks:[{type:"text",text:`• 정보보호 관리체계를 뜻한다.
• 조직의 정보 자산을 보호하기 위한 정책, 절차, 통제를 체계적으로 수립하고 운영한다.
• 국내에서는 한국인터넷진흥원(KISA)이 인증한다.`}],choices:["ESM","SIEM","ISMS","PIMS"],blanks:[{answer:"ISMS"}],explanation:`ISMS(Information Security Management System, 정보보호 관리체계)는 조직의 정보 자산을 보호하기 위한 정책·절차·통제를 체계적으로 운영하는 관리체계로, KISA가 인증한다.
오답 정리
• PIMS: 개인정보보호 관리체계 (현재 ISMS-P로 통합)
• ESM: 여러 보안 솔루션을 통합 관리하는 시스템
• SIEM: 로그·보안 이벤트를 통합 수집·분석하는 솔루션`},{id:"2026-1-06",session:"2026년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"HDLC에 대한 다음 설명에 해당하는 용어를 각각 쓰시오.",blocks:[{type:"text",text:`① 사용자 데이터를 전달하는 프레임
② 흐름 제어와 오류 제어를 위한 감독용 프레임
③ 링크의 설정·해제 등 제어를 위한 프레임
④ 모든 국이 대등한 관계에서 통신하는 동작 모드
⑤ 종국이 주국의 허락 없이 자발적으로 응답할 수 있는 동작 모드`}],choices:["정보(I)","정규 응답(NRM)","비동기 균형(ABM)","감독(S)","비동기 응답(ARM)","비번호(U)"],blanks:[{label:"①",answer:"정보(I)"},{label:"②",answer:"감독(S)"},{label:"③",answer:"비번호(U)"},{label:"④",answer:"비동기 균형(ABM)"},{label:"⑤",answer:"비동기 응답(ARM)"}],explanation:`HDLC(High-level Data Link Control)의 프레임과 동작 모드
프레임
• 정보(I) 프레임: 사용자 데이터 전달
• 감독(S) 프레임: 흐름 제어·오류 제어(수신 확인 등)
• 비번호(U) 프레임: 링크 설정·해제 등 제어
동작 모드
• NRM(정규 응답 모드): 종국은 주국의 허락이 있어야 응답
• ARM(비동기 응답 모드): 종국이 허락 없이 자발적으로 응답
• ABM(비동기 균형 모드): 모든 국이 대등하게(혼합국) 통신`},{id:"2026-1-07",session:"2026년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class A {
    int f(Object o) { return 1; }
    int g() { return f("a"); }
}
class B extends A {
    int f(Object o) { return 2; }
    int f(String s) { return 3; }
}
public class Main {
    public static void main(String[] args) {
        A obj = new B();
        System.out.print(obj.g());
    }
}`,language:"java",choices:["0","1","2","3"],blanks:[{answer:"2"}],explanation:`Java는 오버로딩과 오버라이딩을 결정하는 시점이 다르다.
• 오버로딩(같은 이름, 다른 매개변수): 컴파일 시점에 참조 변수의 타입(A) 기준으로 결정 → A에는 f(Object)만 있으므로 f(Object)로 고정
• 오버라이딩: 실행 시점에 실제 객체(B) 기준으로 실행 → B가 재정의한 f(Object)가 실행되어 2
B에만 있는 f(String)은 A 타입 기준으로는 보이지 않아 선택되지 않는다.`},{id:"2026-1-08",session:"2026년 1회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`s = "HumanDev"[::-1]
for c in "ong":
    s = s.replace(c, "")
print(s)`,language:"python",choices:["veDamuH","veamuH","HumaDev","veDnamuH"],blanks:[{answer:"veDamuH"}],explanation:`• "HumanDev"[::-1] → "veDnamuH" (문자열 뒤집기)
• o, n, g를 각각 제거 → o와 g는 없고 n 하나만 제거 → "veDamuH"
※ replace("ong", "")처럼 "ong"라는 문자열 덩어리를 지우면 일치하는 부분이 없어 "veDnamuH"가 그대로 남는다.`},{id:"2026-1-09",session:"2026년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"<학생> 테이블에는 학과(DEPT)별로 컴퓨터 50명, 전자 100명, 기계 50명이 저장되어 있다. 각 SQL의 결과(행 수 또는 값)를 쓰시오.",codeSnippet:`① SELECT DEPT FROM 학생;
② SELECT DISTINCT DEPT FROM 학생;
③ SELECT COUNT(DISTINCT DEPT) FROM 학생 WHERE DEPT = '컴퓨터';`,language:"sql",choices:["200행","값 1","150행","1행","3행","값 3","값 50"],blanks:[{label:"①",answer:"200행"},{label:"②",answer:"3행"},{label:"③",answer:"값 1"}],explanation:`전체 학생 수는 50 + 100 + 50 = 200명이다.
• SELECT DEPT: 중복을 포함한 모든 행 → 200행
• SELECT DISTINCT DEPT: 중복 제거 → 학과 종류 수인 3행
• SELECT COUNT(DISTINCT DEPT) … WHERE DEPT = 한 학과: 한 학과만 남으므로 서로 다른 학과 수는 1
DISTINCT는 중복을 제거하고, COUNT(DISTINCT 열)은 서로 다른 값의 개수를 센다.`},{id:"2026-1-10",session:"2026년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"PLAYER 테이블의 TEAM_ID를 TEAM 테이블의 TEAM_ID2를 참조하는 외래키로 지정하고, 제약조건 이름을 TEAM_TF로 하려고 한다. SQL의 괄호(①~⑤)에 들어갈 내용을 쓰시오.",codeSnippet:`ALTER TABLE PLAYER
ADD ( ① ) TEAM_TF
( ② ) KEY (( ③ ))
( ④ ) TEAM (( ⑤ ));`,language:"sql",choices:["FOREIGN","CONSTRAINT","TEAM_ID","REFERENCES","UNIQUE","TEAM_ID2","PRIMARY","CHECK"],blanks:[{label:"①",answer:"CONSTRAINT"},{label:"②",answer:"FOREIGN"},{label:"③",answer:"TEAM_ID"},{label:"④",answer:"REFERENCES"},{label:"⑤",answer:"TEAM_ID2"}],explanation:`완성된 SQL
ALTER TABLE PLAYER ADD CONSTRAINT TEAM_TF FOREIGN KEY (TEAM_ID) REFERENCES TEAM (TEAM_ID2);
• CONSTRAINT 이름: 제약조건에 이름을 붙임
• FOREIGN KEY (열): 외래키로 지정할 현재 테이블의 열
• REFERENCES 테이블 (열): 참조할 부모 테이블과 열
PRIMARY KEY, CHECK, UNIQUE는 다른 종류의 제약조건이다.`},{id:"2026-1-11",session:"2026년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 두 IP 주소의 서브넷 마스크가 255.255.254.0일 때, 각 주소가 속한 네트워크 주소를 CIDR 표기로 쓰시오.",blocks:[{type:"text",text:`① 192.168.11.20
② 192.168.12.200`}],choices:["192.168.10.0/23","192.168.12.0/23","192.168.11.0/24","192.168.11.0/23","192.168.12.0/24"],blanks:[{label:"①",answer:"192.168.10.0/23"},{label:"②",answer:"192.168.12.0/23"}],explanation:`255.255.254.0은 /23이다. 세 번째 옥텟 254 = 11111110이므로 2 단위(…, 10~11, 12~13, …)로 네트워크가 나뉜다.
• 192.168.11.20 → 11은 10~11 블록 → 192.168.10.0/23
• 192.168.12.200 → 12는 12~13 블록 → 192.168.12.0/23
요령: 세 번째 옥텟을 2로 나눈 몫 × 2가 네트워크 주소의 세 번째 옥텟이다. (11 → 10, 12 → 12)`},{id:"2026-1-12",session:"2026년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
int* next(int* p) {
    return p + 1;
}
int main() {
    int n[3] = {16, 32, 48};
    int* (*fp)(int*) = next;
    printf("%x", *fp(n));
    return 0;
}`,language:"c",choices:["20","1f","32","40"],blanks:[{answer:"20"}],explanation:`• 함수 포인터가 배열 시작 주소 n에 1을 더한 n+1을 반환 → 역참조하면 n[1] = 32
• %x는 정수를 16진수(소문자)로 출력: 32 = 2 × 16 + 0 → 20
참고: %d면 32, %o(8진수)면 40이 출력된다.`},{id:"2026-1-13",session:"2026년 1회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`for i in list(range(10))[::-2]:
    print(i, end="A")`,language:"python",choices:["9A7A5A3A1","1A3A5A7A9A","9A7A5A3A1A","8A6A4A2A0A"],blanks:[{answer:"9A7A5A3A1A"}],explanation:`list(range(10)) = [0, 1, …, 9]이고, [::-2]는 끝에서부터 2칸씩 거꾸로 가져온다 → [9, 7, 5, 3, 1]
print(i, end="A")는 줄바꿈 대신 A를 붙여 출력하므로 마지막 1 뒤에도 A가 붙는다 → 9A7A5A3A1A`},{id:"2026-1-14",session:"2026년 1회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`a = [[1], [2], [3], [4]]
b = a[:]
for i in range(1, 4):
    b[i] += b[i - 1]
print(sum(len(x) for x in a))`,language:"python",choices:["4","7","10","16"],blanks:[{answer:"10"}],explanation:`리스트의 얕은 복사(copy(), [:])는 바깥 리스트만 새로 만들고, 안쪽 리스트 객체는 원본과 공유한다.
뒤 원소에 앞 원소를 += 하면 안쪽 리스트가 그 자리에서(in-place) 늘어난다.
• [1] → 길이 1
• [2] += [1] → [2, 1] → 길이 2
• [3] += [2, 1] → 길이 3
• [4] += [3, 2, 1] → 길이 4
합계 1 + 2 + 3 + 4 = 10`},{id:"2026-1-15",session:"2026년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에서 공격에 이용되는 특수 파일을 쓰시오.",blocks:[{type:"text",text:`• 다른 파일의 경로를 가리키는 특수한 파일(바로가기)이다.
• 공격자는 프로그램이 만들 임시 파일 자리에 이 파일을 미리 만들어 두어, 프로그램이 중요한 파일을 대신 열거나 덮어쓰게 만든다.`}],choices:["파이프(Pipe)","하드 링크(Hard Link)","소켓 파일(Socket File)","심볼릭 링크(Symbolic Link)"],blanks:[{answer:"심볼릭 링크(Symbolic Link)"}],explanation:`심볼릭 링크(Symbolic Link)는 다른 파일의 경로를 가리키는 특수 파일(바로가기)이다.
공격자가 프로그램이 만들 임시 파일 이름으로 중요 파일을 가리키는 심볼릭 링크를 미리 만들어 두면, 프로그램이 그 링크를 통해 중요 파일을 덮어쓰거나 읽게 된다(경쟁 조건, TOCTOU 공격).
• 하드 링크: 경로가 아니라 같은 파일(inode)을 가리키는 또 다른 이름`},{id:"2026-1-16",session:"2026년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 공격 기법을 쓰시오.",blocks:[{type:"text",text:`• 공격 대상이 자주 방문하는 정상 웹사이트를 미리 감염시킨다.
• 대상이 그 사이트에 방문하면 악성코드에 감염된다.
• 사자가 물웅덩이에서 먹잇감을 기다리는 모습에 빗댄 이름이다.`}],choices:["파밍(Pharming)","스피어 피싱(Spear Phishing)","워터링 홀(Watering Hole) 공격","타이포스쿼팅(Typosquatting)"],blanks:[{answer:"워터링 홀(Watering Hole) 공격"}],explanation:`워터링 홀(Watering Hole)은 공격 대상이 자주 방문하는 정상 웹사이트를 미리 감염시켜 두고, 방문했을 때 악성코드에 감염되게 하는 표적 공격이다. 사자가 물웅덩이에서 먹잇감을 기다리는 것에 비유한 이름이다.
오답 정리
• 파밍: DNS 등을 변조해 정상 주소로 접속해도 가짜 사이트로 유도
• 타이포스쿼팅: 오타를 노린 유사 도메인 선점
• 스피어 피싱: 특정 대상에게 맞춤형 피싱 메일 발송`},{id:"2026-1-17",session:"2026년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
    static int func(int a, int b) { return a + b; }
    static int func(char a, char b) { return b - a; }
    static char func(char c) { return c; }

    public static void main(String[] args) {
        System.out.print(func(4, 5) + func('A', 'C') + "2" + func('3'));
    }
}`,language:"java",choices:["14","1123","1151","9223"],blanks:[{answer:"1123"}],explanation:`자바의 + 연산은 왼쪽부터 계산하며, 문자열을 만나면 그 뒤로는 문자열 연결이 된다.
• 9 + 2 = 11 (정수 덧셈)
• 11 + "2" = "112" (문자열 연결)
• "112" + '3' = "1123" (문자 '3'도 그대로 연결)
※ 문자열을 만나기 전에 char를 정수와 더하면 아스키 코드값('3' = 51)으로 계산되므로 주의한다.`},{id:"2026-1-18",session:"2026년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 두 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오.",blocks:[{type:"table",caption:"<dept>",headers:["dept_id","budget"],rows:[["10","100"],["20","300"],["30","200"]]},{type:"table",caption:"<emp>",headers:["emp_id","dept_id"],rows:[["1","10"],["2","20"],["3","20"],["4","30"]]}],codeSnippet:`SELECT COUNT(*)
FROM emp e JOIN dept d ON e.dept_id = d.dept_id
WHERE d.budget > (SELECT AVG(budget) FROM dept);`,language:"sql",choices:["1","2","3","4"],blanks:[{answer:"2"}],explanation:`• 예산 평균 = (100 + 300 + 200) / 3 = 200
• 평균을 초과(>)하는 부서는 예산 300인 부서 20뿐이다 (200은 '초과'가 아님)
• 직원 테이블과 JOIN하면 부서 20 소속 직원 2명의 행만 남는다 → COUNT(*) = 2`},{id:"2026-1-19",session:"2026년 1회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"통합 테스트에 대한 다음 설명에서 괄호(①, ②)에 들어갈 용어를 쓰시오.",blocks:[{type:"text",text:`• 하향식 통합 테스트에서는 아직 개발되지 않은 하위 모듈 대신 ( ① )을(를) 사용한다.
• 상향식 통합 테스트에서는 하위 모듈을 호출할 상위 모듈 대신 ( ② )을(를) 사용한다.`}],choices:["하네스(Harness)","클러스터(Cluster)","드라이버(Driver)","스텁(Stub)"],blanks:[{label:"①",answer:"스텁(Stub)"},{label:"②",answer:"드라이버(Driver)"}],explanation:`통합 테스트에서 아직 완성되지 않은 모듈을 대신하는 가짜 모듈
• 하향식(상위 → 하위): 하위 모듈 대신 스텁(Stub) 사용
• 상향식(하위 → 상위): 상위 호출자 대신 드라이버(Driver) 사용
• 클러스터: 상향식에서 하위 모듈들을 묶은 그룹
암기: 하향식-스텁, 상향식-드라이버`},{id:"2026-1-20",session:"2026년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 응집도를 각각 쓰시오.",blocks:[{type:"text",text:`① 모듈 안의 요소들이 정해진 순서에 따라 차례로 수행된다.
② 같은 입력 또는 출력 데이터를 사용하는 활동들을 모아 놓았다.
③ 모듈 안의 모든 요소가 하나의 기능만을 수행한다.`}],choices:["절차적 응집도","기능적 응집도","우연적 응집도","논리적 응집도","교환적(통신적) 응집도","시간적 응집도"],blanks:[{label:"①",answer:"절차적 응집도"},{label:"②",answer:"교환적(통신적) 응집도"},{label:"③",answer:"기능적 응집도"}],explanation:`• 절차적 응집도: 모듈 안의 요소들이 정해진 순서에 따라 수행됨
• 교환적(통신적) 응집도: 같은 입력·출력 데이터를 사용하는 활동을 모음
• 기능적 응집도: 모든 요소가 하나의 기능만 수행 (가장 강하고 좋은 응집도)
응집도(강함 → 약함): 기능적 > 순차적 > 교환적 > 절차적 > 시간적 > 논리적 > 우연적`}],Yf=Object.freeze(Object.defineProperty({__proto__:null,default:Gf},Symbol.toStringTag,{value:"Module"})),Xf=[{id:"2025-3-01",session:"2025년 3회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 UML 다이어그램을 쓰시오.",blocks:[{type:"text",text:`• 폴더 모양의 요소로 클래스나 하위 그룹을 묶는다.
• 묶음 사이의 의존 관계를 «import», «access», «merge» 같은 표시와 함께 나타낸다.
• 구조적(정적) 다이어그램에 속한다.`}],choices:["패키지 다이어그램","클래스 다이어그램","컴포넌트 다이어그램","배치 다이어그램"],blanks:[{answer:"패키지 다이어그램"}],explanation:`패키지 다이어그램은 클래스·유스케이스 같은 모델 요소들을 폴더 모양의 패키지로 묶고, 패키지 사이의 의존 관계를 나타내는 구조적(정적) 다이어그램이다.
• 의존 관계는 점선 화살표에 «import», «access», «merge» 같은 스테레오타입으로 표시
오답 정리
• 컴포넌트 다이어그램: 컴포넌트와 인터페이스의 관계
• 클래스 다이어그램: 클래스의 속성·메서드와 클래스 간 관계
• 배치 다이어그램: 물리적 노드(서버 등)와 배치된 산출물`},{id:"2025-3-02",session:"2025년 3회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"다음 설명에 해당하는 화이트박스 테스트 커버리지를 쓰시오.",blocks:[{type:"text",text:`• 결정문에 포함된 개별 조건식이 각각 참과 거짓을 최소 한 번씩 갖도록 테스트한다.
• 예) if (A > 0 && B > 0)에서 'A > 0'과 'B > 0'이 각각 참·거짓을 모두 가져 보도록 한다.`}],choices:["조건 커버리지","구문 커버리지","다중 조건 커버리지","결정 커버리지"],blanks:[{answer:"조건 커버리지"}],explanation:`• 조건 커버리지: 결정문 안의 개별 조건식이 각각 참·거짓을 한 번 이상 갖도록 테스트
• 결정(분기) 커버리지: 결정문 전체의 결과가 참·거짓을 한 번 이상 갖도록
• 구문(문장) 커버리지: 모든 문장을 최소 한 번 실행
• 다중 조건 커버리지: 개별 조건들의 모든 참·거짓 조합을 테스트
예) if (A && B)에서 A와 B 각각이 참·거짓을 모두 가져 보면 조건 커버리지를 만족한다.`},{id:"2025-3-03",session:"2025년 3회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 기능을 수행하는 리눅스 명령어를 각각 쓰시오.",blocks:[{type:"text",text:`① 현재 작업 중인 디렉터리 경로 출력
② 파일·디렉터리 목록 보기
③ 다른 디렉터리로 이동
④ 파일 복사`}],choices:["rm","ls","cp","mv","mkdir","pwd","cd"],blanks:[{label:"①",answer:"pwd"},{label:"②",answer:"ls"},{label:"③",answer:"cd"},{label:"④",answer:"cp"}],explanation:`• pwd: 현재 작업 디렉터리 경로 출력 (print working directory)
• ls: 파일·디렉터리 목록 보기 (list)
• cd: 디렉터리 이동 (change directory)
• cp: 파일 복사 (copy)
오답 정리: mv(이동·이름 변경), rm(삭제), mkdir(디렉터리 생성)`},{id:"2025-3-04",session:"2025년 3회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"데이터 전송 오류 제어에 대한 다음 설명에 해당하는 용어를 각각 쓰시오.",blocks:[{type:"text",text:`① 오류를 검출하고 스스로 정정까지 할 수 있는 코드
② 수신 측이 재전송 요청 없이 스스로 오류를 정정하는 방식
③ 오류를 검출하면 송신 측에 재전송을 요청하는 방식
④ 1비트의 검사 비트를 추가해 오류를 검출하는 방식
⑤ 생성 다항식으로 나눈 나머지를 이용해 오류를 검출하는 방식`}],choices:["BEC","Checksum","Hamming","Huffman","FEC","CRC","Parity"],blanks:[{label:"①",answer:"Hamming"},{label:"②",answer:"FEC"},{label:"③",answer:"BEC"},{label:"④",answer:"Parity"},{label:"⑤",answer:"CRC"}],explanation:`• 해밍 코드(Hamming): 오류를 검출하고 스스로 정정까지 하는 코드 (1비트 오류 정정)
• FEC(전진 오류 수정): 수신 측이 재전송 요청 없이 스스로 오류를 정정
• BEC(후진 오류 수정): 오류를 검출하면 송신 측에 재전송을 요청 (ARQ 방식)
• 패리티(Parity): 1비트의 검사 비트로 오류 검출
• CRC(순환 중복 검사): 다항식 나눗셈의 나머지로 오류 검출
허프만(Huffman)은 데이터 압축 부호화 방식이다.`},{id:"2025-3-05",session:"2025년 3회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
struct test {
    int i;
    char *g;
};
int main() {
    struct test t[2] = { {1, "AB"}, {2, "DC"} };
    printf("%s", t[1].g + (t[1].i - 1));
    return 0;
}`,language:"c",choices:["2","D","C","DC"],blanks:[{answer:"C"}],explanation:`g는 문자열 "DC"의 시작 주소다.
• i − 1 = 2 − 1 = 1 → g + 1은 두 번째 문자 'C'의 주소
• %s는 그 주소부터 널 문자('\\0')를 만날 때까지 출력 → "C"
참고: g를 그대로 출력하면 DC, *g를 %c로 출력하면 D가 된다.`},{id:"2025-3-06",session:"2025년 3회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    char str[] = "REPUBLICOFKOREA";
    int a = 0;
    while (str[a] != '\\0')
        a++;
    putchar(str[a - 2]);
    return 0;
}`,language:"c",choices:["E","A","O","R"],blanks:[{answer:"E"}],explanation:`"REPUBLICOFKOREA"는 15글자이고 인덱스는 0~14이다(str[15]는 널 문자).
str[a − 2] = str[13]
R(0) E(1) P(2) U(3) B(4) L(5) I(6) C(7) O(8) F(9) K(10) O(11) R(12) E(13) A(14)
따라서 E가 출력된다. 마지막 글자 A는 str[14]다.`},{id:"2025-3-07",session:"2025년 3회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
struct Node {
    int val;
    struct Node *next;
};
int main() {
    struct Node c = {5, NULL};
    struct Node b = {7, &c};
    struct Node a = {11, &b};
    int sum = 0;
    for (struct Node *p = &a; p != NULL; p = p->next)
        sum = sum * 3 + p->val;
    printf("%d", (sum ^ 42) + 100);
    return 0;
}`,language:"c",choices:["87","125","187","225"],blanks:[{answer:"187"}],explanation:`• 누적: sum = 0 → 0×3 + 11 = 11 → 11×3 + 7 = 40 → 40×3 + 5 = 125
• XOR(^): 같은 비트는 0, 다른 비트는 1
  125 = 0111 1101
   42 = 0010 1010
  XOR = 0101 0111 = 87
• 87 + 100 = 187`},{id:"2025-3-08",session:"2025년 3회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 코드의 괄호에 들어갈 알맞은 키워드를 쓰시오.",codeSnippet:`interface Animal {
    void sound();
}
class Dog (        ) Animal {
    public void sound() {
        System.out.print("멍멍");
    }
}`,language:"java",choices:["interface","abstract","extends","implements"],blanks:[{answer:"implements"}],explanation:`클래스가 인터페이스를 구현할 때는 implements를 쓴다.
예) class Dog implements Animal { … }
• extends: 클래스가 클래스를 상속하거나, 인터페이스가 인터페이스를 상속할 때
• 한 클래스는 여러 인터페이스를 implements할 수 있다(다중 구현).`},{id:"2025-3-09",session:"2025년 3회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`data = [[1, 2, 3, 4, 5], [2, 3, 5], [2, 3, 4, 4, 5], [4, 5]]
result = {}
for i, lst in enumerate(data):
    result[i] = (sum(lst), len(lst))
print(result)`,language:"python",choices:["{1: (15, 5), 2: (10, 3), 3: (18, 5), 4: (9, 2)}","{0: 15, 1: 10, 2: 18, 3: 9}","[(15, 5), (10, 3), (18, 5), (9, 2)]","{0: (15, 5), 1: (10, 3), 2: (18, 5), 3: (9, 2)}"],blanks:[{answer:"{0: (15, 5), 1: (10, 3), 2: (18, 5), 3: (9, 2)}"}],explanation:`enumerate(리스트)는 (인덱스, 값)을 0부터 차례로 꺼낸다.
d[i] = (sum(lst), len(lst))이므로 인덱스 0~3을 키로, (합, 길이) 튜플을 값으로 저장한다.
→ {0: (15, 5), 1: (10, 3), 2: (18, 5), 3: (9, 2)}
enumerate(lst, 1)처럼 시작값을 따로 주지 않으면 0부터 시작한다는 점에 주의한다.`},{id:"2025-3-10",session:"2025년 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오.",blocks:[{type:"table",caption:"<T>",headers:["val"],rows:[["10"],["20"],["30"],["40"],["50"]]}],codeSnippet:`SELECT COUNT(*)
FROM T
WHERE val BETWEEN 20 AND 50;`,language:"sql",choices:["2","3","4","5"],blanks:[{answer:"4"}],explanation:`BETWEEN A AND B는 A 이상 B 이하로, 양 끝값을 포함한다.
값 >= 20 AND 값 <= 50과 같으므로 20, 30, 40, 50 → 4행이다. (10만 제외)`},{id:"2025-3-11",session:"2025년 3회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 인증 방식을 영문 약자로 쓰시오.",blocks:[{type:"text",text:`• 한 번 사용하면 다시 쓸 수 없는 일회용 비밀번호다.
• 로그인할 때마다 새로운 값이 발급된다.
• 시간 기반(TOTP)과 횟수 기반(HOTP) 방식이 있다.`}],choices:["OTP","SSO","MFA","PIN"],blanks:[{answer:"OTP"}],explanation:`OTP(One-Time Password)는 한 번만 사용할 수 있는 일회용 비밀번호다. 탈취돼도 재사용할 수 없어 재전송(Replay) 공격을 막는다.
• TOTP: 시간 기반, HOTP: 횟수(카운터) 기반
오답 정리
• SSO: 한 번의 로그인으로 여러 서비스 이용
• MFA: 두 가지 이상의 인증 요소를 함께 사용`},{id:"2025-3-12",session:"2025년 3회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 코드에서 자식 생성자가 부모의 생성자를 호출하도록 괄호에 들어갈 키워드를 쓰시오.",codeSnippet:`class Parent {
    int x;
    Parent(int x) { this.x = x; }
}
class Child extends Parent {
    Child(int x) {
        (        )(x);
    }
}`,language:"java",choices:["this","super","parent","extends"],blanks:[{answer:"super"}],explanation:`• super(인수): 부모 클래스의 생성자 호출 (자식 생성자의 첫 줄에 작성)
• super.메서드(): 부모의 메서드 호출
• this(인수): 같은 클래스의 다른 생성자 호출
• extends: 상속을 선언하는 키워드 (생성자 호출이 아님)`},{id:"2025-3-13",session:"2025년 3회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 표준 프레임워크를 쓰시오.",blocks:[{type:"text",text:`• 사용자가 비밀번호를 제3자 서비스에 알려주지 않는다.
• 대신 접근 토큰(Access Token)을 발급하여, 정해진 범위의 자원에만 접근할 수 있도록 권한을 위임한다.
• 예) "구글 계정으로 다른 앱에 캘린더 접근 허용"`}],choices:["OAuth","LDAP","SAML","Kerberos"],blanks:[{answer:"OAuth"}],explanation:`OAuth는 사용자가 비밀번호를 제3자 앱에 알려주지 않고, 접근 토큰(Access Token)으로 자신의 자원에 대한 제한된 권한을 위임하는 표준이다.
예) "구글 계정으로 다른 앱에 캘린더 접근 허용"
오답 정리
• SAML: XML 기반으로 인증 정보를 교환(SSO)
• Kerberos: 티켓 기반 네트워크 인증
• LDAP: 디렉터리 서비스 조회 프로토콜`},{id:"2025-3-14",session:"2025년 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 릴레이션 R, S에 대해 관계대수 R ÷ S의 결과를 쓰시오.",blocks:[{type:"table",caption:"<R>",headers:["A","B"],rows:[["a1","b1"],["a1","b2"],["a2","b1"]]},{type:"table",caption:"<S>",headers:["B"],rows:[["b1"],["b2"]]}],choices:["a1, a2","a1","a2","b1"],blanks:[{answer:"a1"}],explanation:`나누기(÷)는 R에서 S의 모든 값과 짝을 이루는 A 값만 남긴다.
• a1: (a1,b1), (a1,b2) → b1, b2 모두 있음 → 포함
• a2: (a2,b1)만 있고 b2가 없음 → 제외
따라서 R ÷ S = {a1}`},{id:"2025-3-15",session:"2025년 3회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    int z = 2;
    printf("%d", (z & (z >> 1)) * 7);
    return 0;
}`,language:"c",choices:["0","2","7","14"],blanks:[{answer:"0"}],explanation:`• z = 2 → 2진수 10
• z >> 1 → 오른쪽으로 1비트 이동 → 01 = 1
• 10 & 01 = 00 = 0 (비트 AND는 둘 다 1인 자리만 1)
• 0 × 7 = 0`},{id:"2025-3-16",session:"2025년 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"관계형 데이터베이스에 대한 다음 설명에 해당하는 용어를 각각 쓰시오.",blocks:[{type:"text",text:`① 릴레이션의 한 행
② 특정 시점에 릴레이션에 실제로 저장된 데이터 집합
③ 릴레이션의 행(튜플) 수`}],choices:["튜플","카디널리티","스키마","디그리","인스턴스","속성"],blanks:[{label:"①",answer:"튜플"},{label:"②",answer:"인스턴스"},{label:"③",answer:"카디널리티"}],explanation:`• 튜플(Tuple): 릴레이션의 한 행
• 인스턴스(Instance): 특정 시점에 릴레이션에 실제로 저장된 튜플들의 집합(데이터 상태)
• 카디널리티(Cardinality): 튜플(행)의 수
오답 정리: 속성 = 열, 스키마 = 구조 정의, 디그리 = 속성(열)의 수`},{id:"2025-3-17",session:"2025년 3회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`enum Tri {
    A("A"), B("AB"), C("ABC");
    final String code;
    Tri(String code) { this.code = code; }
}
public class Main {
    public static void main(String[] args) {
        int idx = Tri.A.name().length();
        System.out.print(Tri.values()[idx].code);
    }
}`,language:"java",choices:["B","1","AB","A"],blanks:[{answer:"AB"}],explanation:`• A.name()은 열거 상수의 이름 "A"를 반환 → length() = 1
• Tri.values()는 선언 순서대로 [A, B, …] 배열을 반환 → values()[1] = B
• B의 code 필드 값 "AB"를 출력
참고: enum 상수의 name()은 이름, ordinal()은 0부터 시작하는 순서를 반환한다.`},{id:"2025-3-18",session:"2025년 3회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 접근 통제 모델을 각각 영문 약자로 쓰시오.",blocks:[{type:"text",text:`① 주체와 객체의 보안 등급을 비교하여 시스템이 중앙에서 접근을 통제한다.
② 사용자에게 부여된 직무 역할에 따라 접근 권한을 부여한다.
③ 데이터의 소유자가 다른 사용자에게 접근 권한을 허용한다.`}],choices:["DAC","RBAC","MAC","ABAC","ACL"],blanks:[{label:"①",answer:"MAC"},{label:"②",answer:"RBAC"},{label:"③",answer:"DAC"}],explanation:`• MAC(강제 접근통제): 주체·객체의 보안 등급(레이블)을 비교해 시스템(관리자)이 중앙에서 통제
• RBAC(역할 기반 접근통제): 사용자에게 직무 역할을 부여하고, 역할에 권한을 연결
• DAC(임의 접근통제): 데이터 소유자가 다른 사용자에게 권한을 허용
참고: ABAC는 속성 기반 접근통제, ACL은 객체별 접근 권한 목록이다.`},{id:"2025-3-19",session:"2025년 3회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"테스트 케이스의 구성 요소에 대한 다음 설명에 해당하는 항목명을 각각 쓰시오.",blocks:[{type:"text",text:`① 테스트를 수행하기 위해 갖춰져야 하는 사전 조건
② 테스트에 실제로 입력하는 구체적인 값
③ 테스트를 실행했을 때 기대하는 출력`}],choices:["실제 결과","테스트 데이터","예상 결과","테스트 조건","테스트 절차","테스트 환경"],blanks:[{label:"①",answer:"테스트 조건"},{label:"②",answer:"테스트 데이터"},{label:"③",answer:"예상 결과"}],explanation:`테스트 케이스의 주요 구성 요소
• 테스트 조건: 테스트를 수행하기 위한 사전 조건 (예: 로그인 화면 상태)
• 테스트 데이터: 실제로 입력하는 구체적인 값 (예: 아이디 test01)
• 예상 결과: 테스트 실행 후 기대하는 출력 (예: 로그인 성공)
실제 결과는 실행 후 기록해서 예상 결과와 비교하는 값이다.`},{id:"2025-3-20",session:"2025년 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오.",blocks:[{type:"table",caption:"<T>",headers:["col1","col2"],rows:[["1","3"],["2","1"],["3","2"],["4","5"],["2","NULL"]]}],codeSnippet:`SELECT COUNT(col2)
FROM T
WHERE col1 IN (2, 3) OR col2 IN (3, 5);`,language:"sql",choices:["2","3","4","5"],blanks:[{answer:"4"}],explanation:`• 조건 판단: (1,3) col2=3 / (2,1) col1=2 / (3,2) col1=3 / (4,5) col2=5 / (2,NULL) col1=2 → 5행 모두 해당
• COUNT(*)는 행 수(5)를 세지만, COUNT(col2)는 col2가 NULL인 행을 세지 않는다 → 4
집계 함수(COUNT(열), SUM, AVG 등)는 NULL을 제외하고 계산한다.`}],Zf=Object.freeze(Object.defineProperty({__proto__:null,default:Xf},Symbol.toStringTag,{value:"Module"})),e0=[{id:"2025-2-01",session:"2025년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 설명에 해당하는 파일 접근 방식을 쓰시오.",blocks:[{type:"text",text:`• <키, 레코드 위치(주소)> 쌍으로 구성된 별도의 표를 이용한다.
• 표에서 키를 먼저 찾은 뒤 해당 위치의 레코드로 바로 접근한다.
• 처음부터 차례대로 읽는 순차 접근보다 검색이 빠르다.`}],choices:["클러스터(Cluster) 접근","순차(Sequential) 접근","인덱스(Index) 접근","해싱(Hashing) 접근"],blanks:[{answer:"인덱스(Index) 접근"}],explanation:`인덱스(색인) 접근은 <키, 레코드 주소> 쌍으로 된 인덱스를 먼저 찾아 원하는 레코드에 바로 접근하는 방식이다.
• 순차 접근: 처음부터 차례대로 읽음
• 해싱 접근: 해시 함수로 키를 주소로 변환
파일 구조는 크게 순차, 색인(인덱스), 해싱 방식으로 나뉜다.`},{id:"2025-2-02",session:"2025년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"관계형 데이터베이스에서 테이블의 열(Column)에 해당하며, 데이터 항목의 성질을 나타내는 용어를 영어로 쓰시오.",choices:["Tuple","Attribute","Degree","Domain"],blanks:[{answer:"Attribute"}],explanation:`• Attribute(속성): 열(Column), 데이터 항목의 성질
• Tuple(튜플): 행(Row)
• Domain(도메인): 한 속성이 가질 수 있는 값의 범위
• Degree(디그리): 속성의 개수 / Cardinality(카디널리티): 튜플의 개수`},{id:"2025-2-03",session:"2025년 2회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 프로토콜을 쓰시오.",blocks:[{type:"text",text:`• 원격지 컴퓨터에 접속해 명령을 실행할 수 있다.
• 명령, 인증 정보, 데이터를 모두 암호화해서 전송한다.
• 기본 포트 번호는 TCP 22번이다.`}],choices:["SSL","Telnet","SSH","FTP"],blanks:[{answer:"SSH"}],explanation:`SSH(Secure Shell)는 원격 접속 시 명령, 인증 정보, 데이터를 모두 암호화하는 프로토콜이며 기본 포트는 22번이다.
오답 정리
• Telnet(23번): 원격 접속이지만 평문 전송이라 도청 위험
• FTP(20·21번): 파일 전송
• SSL: 웹 통신 등의 암호화 (HTTPS)`},{id:"2025-2-04",session:"2025년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 설명에 해당하는 CPU 스케줄링 기법을 각각 쓰시오.",blocks:[{type:"text",text:`① 실행 시간이 가장 짧은 작업을 먼저 실행하는 비선점 방식
② 남은 실행 시간이 더 짧은 작업이 도착하면 CPU를 빼앗아 실행하는 선점 방식`}],choices:["SJF","SRT","FCFS","HRN","RR"],blanks:[{label:"①",answer:"SJF"},{label:"②",answer:"SRT"}],explanation:`• SJF(Shortest Job First): 실행 시간이 가장 짧은 작업을 먼저 실행하는 비선점 방식
• SRT(Shortest Remaining Time): 남은 실행 시간이 더 짧은 작업이 오면 CPU를 빼앗는 선점 방식 (SJF의 선점형)
오답 정리: FCFS(먼저 온 순서), RR(시간 할당량만큼 돌아가며 실행), HRN((대기 시간 + 실행 시간) / 실행 시간이 큰 순서)`},{id:"2025-2-05",session:"2025년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
    static void change(String[] data, String s) {
        data[0] = s;
        s = "Z";
    }
    public static void main(String[] args) {
        String[] data = {"A"};
        String s = "B";
        change(data, s);
        System.out.print(data[0] + s);
    }
}`,language:"java",choices:["BZ","ZB","BB","ZZ"],blanks:[{answer:"BB"}],explanation:`자바는 항상 값으로 전달하며, 객체(배열·문자열)는 '참조값'이 복사되어 전달된다.
• data[0] = s: 같은 배열 객체의 내용을 바꾸므로 호출자에서도 data[0]은 "B"
• s = "Z": 메서드 안의 매개변수 s가 다른 문자열을 가리키게 될 뿐, 호출자의 s는 그대로 "B"
따라서 data[0] + s = "B" + "B" = BB`},{id:"2025-2-06",session:"2025년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"IP 주소 223.13.234.132의 서브넷 마스크가 255.255.255.192일 때, 다음을 쓰시오.",blocks:[{type:"text",text:`① 네트워크 주소의 마지막 옥텟 (223.13.234.( ① ))
② 이 네트워크에서 호스트에 할당할 수 있는 IP 주소의 개수`}],choices:["62","64","128","132","192"],blanks:[{label:"①",answer:"128"},{label:"②",answer:"62"}],explanation:`255.255.255.192 = /26 → 마지막 옥텟 192 = 11000000, 블록 크기 256 − 192 = 64
네트워크: 0~63, 64~127, 128~191, 192~255
• 132는 128~191 블록 → 네트워크 주소 223.13.234.128
• 사용 가능한 호스트 = 64 − 2(네트워크·브로드캐스트 주소) = 62`},{id:"2025-2-07",session:"2025년 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 디자인 패턴을 쓰시오.",blocks:[{type:"text",text:`• 실제 객체 앞에 대리 객체를 둔다.
• 대리 객체가 요청을 받아 접근 제어, 지연 생성(필요할 때 생성), 로그 기록 등을 처리한 뒤 실제 객체에 전달한다.`}],choices:["Adapter 패턴","Facade 패턴","Composite 패턴","Proxy 패턴"],blanks:[{answer:"Proxy 패턴"}],explanation:`프록시(Proxy) 패턴은 실제 객체 대신 대리 객체가 요청을 받아 접근 제어, 지연 생성(필요할 때 생성), 로깅, 캐싱 등을 처리한 뒤 실제 객체에 전달하는 구조 패턴이다.
오답 정리
• Adapter: 인터페이스 변환
• Facade: 복잡한 하위 시스템에 단순한 통합 창구 제공
• Composite: 부분-전체를 트리 구조로 동일하게 다룸`},{id:"2025-2-08",session:"2025년 2회",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"다음 설명에 해당하는 웹 기술을 영문 약자로 쓰시오.",blocks:[{type:"text",text:`• JavaScript로 서버와 비동기 방식으로 통신한다.
• 페이지 전체를 새로 고치지 않고 필요한 부분만 갱신한다.`}],choices:["JSON","SOAP","AJAX","REST"],blanks:[{answer:"AJAX"}],explanation:`AJAX(Asynchronous JavaScript and XML)는 자바스크립트로 서버와 비동기 통신하여, 페이지 전체를 새로 고치지 않고 필요한 부분만 갱신하는 기술이다. 데이터 형식으로는 요즘 XML보다 JSON을 주로 쓴다.
오답 정리: JSON(데이터 표현 형식), REST(자원 중심 API 설계 방식), SOAP(XML 기반 메시지 프로토콜)`},{id:"2025-2-09",session:"2025년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`interface Calc {
    int run();
}
public class Main {
    static int exec(Calc c) {
        return c.run();
    }
    public static void main(String[] args) {
        int r1 = exec(() -> {
            try {
                return 10 / 0;
            } catch (ArithmeticException e) {
                return 7;
            }
        });
        int r2 = exec(() -> 3 + 9);
        System.out.print(r1 + r2);
    }
}`,language:"java",choices:["7","12","15","19"],blanks:[{answer:"19"}],explanation:`• 첫 번째 람다: 실행 중 예외 발생 → catch 블록의 return 7 실행 → 7
• 두 번째 람다: 3 + 9 = 12
• 합계: 7 + 12 = 19
try에서 예외가 나면 나머지 try 코드는 건너뛰고 catch로 이동한다.`},{id:"2025-2-10",session:"2025년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class Parent {
    int x(int n) { return n; }
    static String id() { return "P"; }
}
class Child extends Parent {
    int x(int n) { return n + 2; }
    static String id() { return "C"; }
}
public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.print(p.x(3) + p.id());
    }
}`,language:"java",choices:["5P","3C","3P","5C"],blanks:[{answer:"5P"}],explanation:`• 인스턴스 메서드 x(int): Child가 오버라이딩 → 실제 객체(Child) 기준으로 실행 → 5
• static 메서드 id(): 오버라이딩되지 않고 참조 변수 타입(Parent) 기준으로 호출 → "P"
5 + "P" → 5P
static 메서드는 객체가 아니라 클래스에 속하므로 동적 바인딩이 일어나지 않는다(메서드 숨김).`},{id:"2025-2-11",session:"2025년 2회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"다음 제어 흐름 그래프에 대해 분기(결정) 커버리지를 적용하려고 한다. 결정 노드 번호와, 반드시 지나야 하는 분기(간선)의 수를 쓰시오.",blocks:[{type:"text",text:`• 2번 노드: 조건이 참이면 3번, 거짓이면 4번으로 이동
• 6번 노드: 조건이 참이면 1번, 거짓이면 7번으로 이동
• 그 밖의 노드는 다음 노드로 바로 이동`}],choices:["4개","1, 2","2개","3, 7","2, 6","8개"],blanks:[{label:"결정 노드",answer:"2, 6"},{label:"분기 간선 수",answer:"4개"}],explanation:`분기(결정) 커버리지는 모든 결정문이 참과 거짓으로 각각 한 번 이상 실행되도록 한다.
• 결정 노드: 2번(2→3 또는 2→4), 6번(6→1 또는 6→7)
• 결정 2개 × (참·거짓) 2방향 = 4개의 분기 간선을 모두 지나야 한다.`},{id:"2025-2-12",session:"2025년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"큐에 다음 연산을 차례로 수행했을 때, 마지막에 두 번 꺼낸 값을 순서대로 쓰시오.",blocks:[{type:"text",text:`① 1 삽입
② 2 삽입
③ 하나 꺼냄
④ 3 삽입
⑤ 하나 꺼냄
⑥ 하나 꺼냄`}],choices:["1, 2","3, 2","1, 3","2, 3"],blanks:[{answer:"2, 3"}],explanation:`큐는 먼저 들어간 것이 먼저 나오는 FIFO 구조다.
• 1 삽입 → [1], 2 삽입 → [1, 2]
• 꺼냄 → 1이 나옴 → [2]
• 3 삽입 → [2, 3]
• 두 번 꺼냄 → 2, 3
원형 큐는 배열의 끝과 처음을 이어 공간을 재사용할 뿐, 동작은 똑같이 FIFO다.`},{id:"2025-2-13",session:"2025년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 프로세스들을 RR(Round Robin) 방식으로 스케줄링할 때 평균 대기 시간을 구하시오. (단, 시간 할당량은 4ms이다.)",blocks:[{type:"table",headers:["프로세스","도착 시간(ms)","실행 시간(ms)"],rows:[["P1","0","8"],["P2","1","4"],["P3","2","9"],["P4","3","5"]]}],choices:["6.5ms","12.5ms","10.25ms","11.75ms"],blanks:[{answer:"11.75ms"}],explanation:`RR(라운드 로빈)은 도착 순서대로 시간 할당량(4ms)만큼만 실행하고, 끝나지 않으면 큐 맨 뒤로 보낸다.
• 0~4 P1(남은 4) → 4~8 P2 완료(8) → 8~12 P3(남은 5) → 12~16 P4(남은 1)
• 16~20 P1 완료(20) → 20~24 P3(남은 1) → 24~25 P4 완료(25) → 25~26 P3 완료(26)
대기 시간 = 완료 − 도착 − 실행
• P1 20−0−8 = 12, P2 8−1−4 = 3, P3 26−2−9 = 15, P4 25−3−5 = 17
평균 = (12 + 3 + 15 + 17) / 4 = 11.75ms`},{id:"2025-2-14",session:"2025년 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
struct P {
    int x, y;
};
int main() {
    struct P a[3] = { {1, 2}, {3, 4}, {5, 6} };
    struct P *ptr = a;
    struct P **pptr = &ptr;
    (*pptr)[1] = (*pptr)[2];
    printf("%d %d", a[1].x, a[1].y);
    return 0;
}`,language:"c",choices:["5 4","5 6","1 2","3 4"],blanks:[{answer:"5 6"}],explanation:`pptr은 배열 a를 가리키는 포인터의 주소이므로, *pptr은 배열 a(의 시작 주소)이다.
• (*pptr)[1] = (*pptr)[2]는 a[1] = a[2]와 같다.
• 구조체끼리 대입하면 모든 멤버 값이 복사된다 → a[1].x = 5, a[1].y = 6`},{id:"2025-2-15",session:"2025년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class Obj {
    int v;
    Obj(int v) { this.v = v; }
}
public class Main {
    public static void main(String[] args) {
        Obj a = new Obj(1), b = new Obj(2), c = new Obj(3);
        Obj[] arr = {a, b, c};
        Obj t = arr[0];
        arr[0] = arr[2];
        arr[2] = t;
        arr[1].v = arr[0].v;
        System.out.print(a.v + "a" + b.v + "b" + c.v);
    }
}`,language:"java",choices:["1a2b3","3a3b1","1a3b3","3a2b1"],blanks:[{answer:"1a3b3"}],explanation:`• 처음: arr = [a, b, c], a.v = 1, b.v = 2, c.v = 3
• arr[0]과 arr[2] 교환 → arr = [c, b, a] (객체가 아니라 참조만 바뀜)
• arr[1].v = arr[0].v → b.v = c.v = 3
결과: a.v = 1, b.v = 3, c.v = 3 (복원 출력 1a3b3)`},{id:"2025-2-16",session:"2025년 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
struct node {
    int p;
    struct node *n;
};
int main() {
    struct node a = {1, NULL}, b = {2, NULL}, c = {3, NULL};
    c.n = &a;
    a.n = &b;
    struct node *head = &c;
    for (struct node *cur = head; cur != NULL; cur = cur->n)
        printf("%d ", cur->p);
    return 0;
}`,language:"c",choices:["3 2 1","3 1 2","2 1 3","1 2 3"],blanks:[{answer:"3 1 2"}],explanation:`연결 리스트는 각 노드의 다음 노드 포인터를 따라가며 출력한다.
head = c → c(3) → c.n = a → a(1) → a.n = b → b(2) → b.n = NULL(끝)
출력: 3 1 2`},{id:"2025-2-17",session:"2025년 2회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`lst = [1, 2, 3]
d = {x: x * 2 for x in lst}
s = {x * 2 for x in lst}
d[2] = 7
s.add(99)
print(len(set(d.values()) & s))`,language:"python",choices:["1","2","3","4"],blanks:[{answer:"2"}],explanation:`• 딕셔너리 {x: 2x} → {1: 2, 2: 4, 3: 6}, dict[2] = 7로 바꾸면 값은 2, 7, 6
• 집합 {2, 4, 6}에 99 추가 → {2, 4, 6, 99}
• 교집합 {2, 7, 6} & {2, 4, 6, 99} = {2, 6} → 크기 2`},{id:"2025-2-18",session:"2025년 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
#include <stdlib.h>
struct Node {
    char c;
    struct Node *next;
};
int main() {
    char *str = "BEST";
    struct Node *head = NULL;
    for (int i = 0; str[i] != '\\0'; i++) {
        struct Node *n = malloc(sizeof(struct Node));
        n->c = str[i];
        n->next = head;
        head = n;
    }
    for (struct Node *p = head; p != NULL; p = p->next)
        printf("%c", p->c);
    return 0;
}`,language:"c",choices:["TSBE","BEST","TSEB","BTSE"],blanks:[{answer:"TSEB"}],explanation:`연결 리스트 머리(head)에 삽입하면 새 노드가 항상 맨 앞에 붙으므로 순서가 뒤집힌다.
B → E, B → S, E, B → T, S, E, B
순회 출력: TSEB (스택처럼 나중에 넣은 것이 먼저 나온다)`},{id:"2025-2-19",session:"2025년 2회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 공격 기법을 쓰시오.",blocks:[{type:"text",text:`• TCP 3-way handshake 과정에서 마지막 ACK를 보내지 않는다.
• SYN 패킷만 대량으로 보내 서버의 연결 대기 큐를 가득 채운다.
• 정상 사용자가 접속하지 못하게 만드는 서비스 거부(DoS) 공격이다.`}],choices:["SYN Flooding","Smurfing","LAND Attack","Ping of Death"],blanks:[{answer:"SYN Flooding"}],explanation:`SYN Flooding은 TCP 3-way handshake(SYN → SYN+ACK → ACK)에서 마지막 ACK를 보내지 않은 채 SYN만 대량으로 보내, 서버의 연결 대기 큐(Backlog)를 가득 채워 정상 접속을 막는 서비스 거부(DoS) 공격이다.
오답 정리
• Smurfing: ICMP 에코 요청을 브로드캐스트로 보내 응답을 폭주시킴
• Ping of Death: 규정보다 큰 ICMP 패킷 전송
• LAND Attack: 출발지와 목적지 IP를 같게 위조`},{id:"2025-2-20",session:"2025년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 릴레이션 R에 대해 관계대수 π직책(R)의 결과를 쓰시오.",blocks:[{type:"table",caption:"<R>",headers:["이름","직책"],rows:[["김철수","부장"],["이영희","대리"],["박민수","과장"],["최지훈","차장"],["정수진","대리"]]}],choices:["부장, 대리, 과장, 차장","부장, 대리, 과장, 차장, 대리","부장, 과장, 차장","대리"],blanks:[{answer:"부장, 대리, 과장, 차장"}],explanation:`관계대수의 프로젝트(π)는 지정한 속성만 추출하며, 결과는 릴레이션(집합)이므로 중복 튜플이 제거된다.
π직책(R) → {부장, 대리, 과장, 차장}
※ SQL의 SELECT 직책은 중복을 그대로 보여주므로, 같은 결과를 얻으려면 DISTINCT를 써야 한다.`}],n0=Object.freeze(Object.defineProperty({__proto__:null,default:e0},Symbol.toStringTag,{value:"Module"})),t0=[{id:"2025-1-01",session:"2025년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 공격 기법을 쓰시오.",blocks:[{type:"text",text:`• 이미 인증을 마친 정상 사용자의 TCP 연결(세션)을 가로챈다.
• 시퀀스 번호 등을 조작하여 그 사용자의 권한으로 시스템에 접근한다.`}],choices:["세션 하이재킹(Session Hijacking)","파밍(Pharming)","스푸핑(Spoofing)","스니핑(Sniffing)"],blanks:[{answer:"세션 하이재킹(Session Hijacking)"}],explanation:`세션 하이재킹(Session Hijacking)은 이미 인증된 정상 사용자의 세션(TCP 연결)을 가로채, 시퀀스 번호 등을 조작해서 그 사용자의 권한으로 시스템에 접근하는 공격이다.
오답 정리
• 스니핑: 네트워크 패킷을 몰래 엿봄(수동적 공격)
• 스푸핑: IP·MAC 주소 등을 위조해 다른 사람으로 위장
• 파밍: DNS 등을 변조해 가짜 사이트로 유도`},{id:"2025-1-02",session:"2025년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"데이터베이스 무결성에 대한 다음 설명에 해당하는 용어를 각각 쓰시오.",blocks:[{type:"text",text:`① 속성 값은 정해진 범위(도메인) 안의 값이어야 한다.
② 기본키는 NULL 값이나 중복 값을 가질 수 없다.
③ 외래키 값은 참조하는 테이블의 기본키 값이거나 NULL이어야 한다.`}],choices:["참조 무결성","사용자 정의 무결성","개체 무결성","도메인 무결성","정보 무결성"],blanks:[{label:"①",answer:"도메인 무결성"},{label:"②",answer:"개체 무결성"},{label:"③",answer:"참조 무결성"}],explanation:`• 도메인 무결성: 속성 값은 정해진 도메인(허용 범위·형식) 안에 있어야 함
• 개체 무결성: 기본키는 NULL이거나 중복될 수 없음
• 참조 무결성: 외래키 값은 NULL이거나 참조하는 테이블의 기본키 값이어야 함
참고: 사용자 정의 무결성은 업무 규칙을 만족해야 한다는 제약이다.`},{id:"2025-1-03",session:"2025년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 설명에 해당하는 오류 검출 기법을 영문 약자로 쓰시오.",blocks:[{type:"text",text:`• 송신 측과 수신 측이 같은 생성 다항식을 사용한다.
• 데이터를 생성 다항식으로 나눈 나머지를 검사 값으로 붙여 보낸다.
• 수신 측은 같은 방식으로 나누어 전송 오류를 확인한다.`}],choices:["FEC","Hamming","ARQ","CRC"],blanks:[{answer:"CRC"}],explanation:`CRC(Cyclic Redundancy Check, 순환 중복 검사)는 데이터를 생성 다항식으로 나눈 나머지를 검사 비트로 붙여 보내고, 수신 측에서 같은 방식으로 나눠 오류를 검출한다.
오답 정리
• ARQ: 오류를 발견하면 재전송 요청
• FEC: 수신 측이 스스로 오류를 정정
• 해밍 코드: 오류 검출과 1비트 정정이 가능한 코드`},{id:"2025-1-04",session:"2025년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 악성 소프트웨어를 쓰시오.",blocks:[{type:"text",text:`• "컴퓨터가 악성코드에 감염되었습니다" 같은 가짜 경고를 띄운다.
• 사용자에게 불안감을 조성해 가짜 백신 결제나 프로그램 설치를 유도한다.`}],choices:["랜섬웨어(Ransomware)","애드웨어(Adware)","스파이웨어(Spyware)","스캐어웨어(Scareware)"],blanks:[{answer:"스캐어웨어(Scareware)"}],explanation:`스캐어웨어(Scareware)는 '컴퓨터가 감염되었다' 같은 가짜 경고로 겁을 주어(scare) 가짜 백신 구매나 악성 프로그램 설치를 유도하는 악성 소프트웨어다.
오답 정리
• 애드웨어: 광고를 띄우는 소프트웨어
• 랜섬웨어: 파일을 암호화하고 몸값을 요구
• 스파이웨어: 몰래 정보를 수집`},{id:"2025-1-05",session:"2025년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
    public static void main(String[] args) {
        try {
            int x = 5 / 0;
            System.out.print("출력2");
        } catch (ArithmeticException e) {
            System.out.print("출력1");
        } finally {
            System.out.print("출력5");
        }
    }
}`,language:"java",choices:["출력1출력5","출력1","출력2출력5","출력2출력1출력5"],blanks:[{answer:"출력1출력5"}],explanation:`• 5 / 0(정수) → ArithmeticException 발생 → try의 나머지 코드는 건너뜀
• 일치하는 catch(ArithmeticException) 실행 → "출력1"
• finally는 예외 여부와 관계없이 항상 실행 → "출력5"
줄바꿈 없이 이어서 출력하므로 출력1출력5
※ 실수 나눗셈 5.0 / 0은 예외 없이 Infinity가 된다.`},{id:"2025-1-06",session:"2025년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 설명에 해당하는 프로토콜을 각각 영문 약자로 쓰시오.",blocks:[{type:"text",text:`① IP 주소를 이용해 MAC 주소를 알아내는 프로토콜
② MAC 주소를 이용해 IP 주소를 알아내는 프로토콜`}],choices:["ICMP","RARP","NAT","ARP","DHCP"],blanks:[{label:"①",answer:"ARP"},{label:"②",answer:"RARP"}],explanation:`• ARP(Address Resolution Protocol): IP 주소 → MAC 주소
• RARP(Reverse ARP): MAC 주소 → IP 주소 (현재는 DHCP 등으로 대체)
오답 정리: ICMP(오류·제어 메시지, ping), DHCP(IP 주소 자동 할당), NAT(사설 IP ↔ 공인 IP 변환)`},{id:"2025-1-07",session:"2025년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 두 테이블에 대해 SQL을 실행했을 때의 결과를 쓰시오.",blocks:[{type:"table",caption:"<직원>",headers:["id","이름"],rows:[["1","이순신"],["2","강감찬"],["3","김유신"]]},{type:"table",caption:"<수당>",headers:["id","수당"],rows:[["1","1000"],["2","300"],["3","450"]]}],codeSnippet:`SELECT 이름, 수당
FROM 직원 INNER JOIN 수당 ON 직원.id = 수당.id
WHERE 수당 >= 500;`,language:"sql",choices:["이순신 1000, 김유신 450","결과 없음","강감찬 300","이순신 1000"],blanks:[{answer:"이순신 1000"}],explanation:`• INNER JOIN은 양쪽에 짝이 있는 행만 결합 → (이순신, 1000), (강감찬, 300), (김유신, 450)
• WHERE 수당 >= 500 → 이순신 1000만 남음
김유신 450은 500 미만이라 제외된다.`},{id:"2025-1-08",session:"2025년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"관계형 데이터베이스에 대한 다음 설명에 해당하는 용어를 각각 영어로 쓰시오.",blocks:[{type:"text",text:`① 릴레이션의 속성(열) 수
② 릴레이션의 튜플(행) 수
③ 다른 릴레이션의 기본키를 참조하는 키
④ 하나의 속성이 가질 수 있는 값들의 집합`}],choices:["Foreign Key","Degree","Cardinality","Tuple","Attribute","Domain","Primary Key"],blanks:[{label:"①",answer:"Degree"},{label:"②",answer:"Cardinality"},{label:"③",answer:"Foreign Key"},{label:"④",answer:"Domain"}],explanation:`• Degree(디그리, 차수): 속성(열)의 수
• Cardinality(카디널리티, 기수): 튜플(행)의 수
• Foreign Key(외래키): 다른 릴레이션의 기본키를 참조하는 속성
• Domain(도메인): 속성이 가질 수 있는 값들의 집합
오답 정리: Tuple은 행, Attribute는 열, Primary Key는 기본키`},{id:"2025-1-09",session:"2025년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"호스트 192.168.35.10/22와 같은 네트워크에 속하는 IP 주소를 다음 중에서 모두 고르시오.",blocks:[{type:"text",text:`• 192.168.34.1
• 192.168.32.19
• 192.168.35.200
• 192.168.33.138
• 192.168.35.50`}],choices:["192.168.34.1, 192.168.35.200, 192.168.35.50 세 개","192.168.32.19를 제외한 4개","192.168.35.200, 192.168.35.50 두 개뿐","제시된 5개 모두"],blanks:[{answer:"제시된 5개 모두"}],explanation:`/22 → 서브넷 마스크 255.255.252.0. 세 번째 옥텟 252 = 11111100이므로 4 단위로 블록이 나뉜다(…, 32~35, 36~39, …).
192.168.35.10의 세 번째 옥텟 35는 32~35 블록 → 네트워크 범위 192.168.32.0 ~ 192.168.35.255
보기의 세 번째 옥텟 34, 32, 35, 33, 35는 모두 32~35 안에 있으므로 5개 모두 같은 네트워크다.`},{id:"2025-1-10",session:"2025년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때 출력되는 두 줄을 순서대로 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    char arr[6] = "ACDE";
    printf("%d\\n", 'E' - 'A');

    int pos = 0;
    for (int i = 4; i > pos; i--)
        arr[i] = arr[i - 1];
    arr[pos] = 'B';
    printf("%s", arr);
    return 0;
}`,language:"c",choices:["ABCDE","69","4","BACDE","5"],blanks:[{label:"첫째 줄",answer:"4"},{label:"둘째 줄",answer:"BACDE"}],explanation:`• 문자는 아스키 코드값으로 계산된다: 'E'(69) − 'A'(65) = 4
• 삽입은 삽입할 위치 뒤의 요소들을 한 칸씩 뒤로 민 다음 그 자리에 값을 넣는다 → B, A, C, D, E
(복원 자료의 코드 연산을 요약한 문제)`},{id:"2025-1-11",session:"2025년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    int a[3][3] = { {9, 5, 2}, {7, 4, 1}, {8, 3, 6} };
    int sum = 0, sign = 1;
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++) {
            sum += sign * a[i][j];
            sign = -sign;
        }
    printf("%d", sum);
    return 0;
}`,language:"c",choices:["-13","7","13","45"],blanks:[{answer:"13"}],explanation:`배열을 행 순서대로 펼치면 9, 5, 2, 7, 4, 1, 8, 3, 6이고, +와 −를 번갈아 적용한다.
+9 −5 +2 −7 +4 −1 +8 −3 +6
= (9 + 2 + 4 + 8 + 6) − (5 + 7 + 1 + 3) = 29 − 16 = 13`},{id:"2025-1-12",session:"2025년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 결합도를 각각 쓰시오.",blocks:[{type:"text",text:`① 한 모듈이 다른 모듈의 내부 기능이나 자료를 직접 참조·수정한다.
② 배열이나 구조체 같은 자료구조를 매개변수로 전달한다.
③ 여러 모듈이 같은 전역 변수를 공유한다.`}],choices:["내용 결합도","제어 결합도","자료 결합도","공통 결합도","스탬프 결합도","외부 결합도"],blanks:[{label:"①",answer:"내용 결합도"},{label:"②",answer:"스탬프 결합도"},{label:"③",answer:"공통 결합도"}],explanation:`• 내용 결합도: 다른 모듈의 내부 기능·자료를 직접 참조·수정
• 스탬프 결합도: 배열·구조체 같은 자료구조를 매개변수로 전달
• 공통 결합도: 여러 모듈이 전역 변수(공통 데이터 영역)를 공유
결합도(약함 → 강함): 자료 < 스탬프 < 제어 < 외부 < 공통 < 내용`},{id:"2025-1-13",session:"2025년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class Parent {
    static int total = 2;
    Parent() { show(); }
    void show() { total *= 2; }
}
class Child extends Parent {
    Child() {
        show();
        show();
    }
    void show() { total *= 3; }
}
public class Main {
    public static void main(String[] args) {
        new Child();
        System.out.print(Parent.total);
    }
}`,language:"java",choices:["16","18","36","54"],blanks:[{answer:"54"}],explanation:`자바에서는 부모 생성자 안에서 호출한 메서드라도, 자식이 오버라이딩했다면 자식의 메서드가 실행된다(동적 바인딩).
• new Child() → 부모 생성자 Parent()가 먼저 실행되고, 그 안의 show()는 Child의 show()(× 3) → 2 × 3 = 6
• 이어서 자식 생성자 Child()에서 show()를 두 번 호출 → 6 × 3 = 18 → 18 × 3 = 54
Parent의 show()(× 2)는 한 번도 실행되지 않으므로 최종 출력은 54이다.`},{id:"2025-1-14",session:"2025년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 디자인 패턴을 쓰시오.",blocks:[{type:"text",text:`• 인터페이스가 맞지 않는 기존 클래스를 감싼다(wrapping).
• 클라이언트가 원하는 인터페이스로 바꿔 주어 함께 사용할 수 있게 한다.
• 구조(Structural) 패턴에 속한다.`}],choices:["Composite(컴포지트) 패턴","Adapter(어댑터) 패턴","Bridge(브리지) 패턴","Facade(퍼사드) 패턴"],blanks:[{answer:"Adapter(어댑터) 패턴"}],explanation:`어댑터(Adapter) 패턴은 호환되지 않는 기존 클래스의 인터페이스를 감싸서(wrapping) 클라이언트가 원하는 인터페이스로 바꿔 주는 구조 패턴이다. 110V 플러그를 220V 콘센트에 꽂게 해주는 어댑터와 같다.
오답 정리
• Bridge: 기능과 구현 계층 분리
• Facade: 복잡한 하위 시스템에 단순한 창구 제공
• Composite: 부분-전체를 트리 구조로 다룸`},{id:"2025-1-15",session:"2025년 1회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"다음 코드의 반복문이 한 번 실행된 뒤 끝날 때, 실행되는 문장의 번호를 순서대로 고르시오.",codeSnippet:`① i = 0;
② while (i < 1) {
③     if (i == 0)
④         printf("%d", i);
⑤     i++;
   }
⑥ printf("끝");`,language:"c",choices:["① → ③ → ④ → ⑤ → ② → ⑥","① → ② → ③ → ④ → ⑤ → ② → ⑥","① → ② → ③ → ④ → ⑤ → ⑥","① → ② → ③ → ④ → ② → ⑤ → ⑥"],blanks:[{answer:"① → ② → ③ → ④ → ⑤ → ② → ⑥"}],explanation:`while문은 조건을 검사해 참이면 본문을 실행하고, 본문이 끝나면 다시 조건으로 돌아간다.
① 초기화 → ② 조건(참) → ③ if → ④ 본문 → ⑤ 증가 → ② 조건(거짓) → ⑥ 종료
반복이 끝날 때도 조건(②)을 한 번 더 검사해야 빠져나온다는 점이 핵심이다.`},{id:"2025-1-16",session:"2025년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
    static int func(int[] a, int lo, int hi) {
        if (lo > hi) return 0;
        int mid = (lo + hi) / 2;
        return a[mid] + Math.max(func(a, lo, mid - 1), func(a, mid + 1, hi));
    }
    public static void main(String[] args) {
        int[] a = {3, 5, 8, 4, 8};
        System.out.print(func(a, 0, 4));
    }
}`,language:"java",choices:["8","12","16","20"],blanks:[{answer:"20"}],explanation:`• 가운데 원소 a[2] = 8을 더함
• 왼쪽·오른쪽 재귀 결과 중 큰 값 선택 → max(8, 12) = 12
• 반환값 = 8 + 12 = 20`},{id:"2025-1-17",session:"2025년 1회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`tree = [1, 5, 8, 2, 4, 6, 7]

def depth(i):
    d = 0
    while i > 0:
        i = (i - 1) // 2
        d += 1
    return d

print(sum(v for i, v in enumerate(tree) if depth(i) % 2 == 1))`,language:"python",choices:["5","8","13","18"],blanks:[{answer:"13"}],explanation:`완전이진트리를 배열에 저장하면 인덱스 i의 부모는 (i − 1) // 2, 자식은 2i + 1, 2i + 2이다.
깊이: 루트(인덱스 0)는 0, 인덱스 1·2는 1, 인덱스 3~6은 2 …
깊이가 홀수인 노드는 깊이 1인 두 노드(값 5, 8)이므로 합은 5 + 8 = 13이다.`},{id:"2025-1-18",session:"2025년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
#include <stdlib.h>
struct Node {
    int val;
    struct Node *next;
};
int main() {
    struct Node *head = NULL;
    for (int i = 1; i <= 5; i++) {
        struct Node *n = malloc(sizeof(struct Node));
        n->val = i;
        n->next = head;
        head = n;
    }
    struct Node *prev = head;
    while (prev->next->val != 3)
        prev = prev->next;
    struct Node *target = prev->next;
    prev->next = target->next;
    target->next = head;
    head = target;
    for (struct Node *p = head; p != NULL; p = p->next)
        printf("%d", p->val);
    return 0;
}`,language:"c",choices:["12345","35421","53421","54321"],blanks:[{answer:"35421"}],explanation:`• 머리(head)에 1, 2, 3, 4, 5를 차례로 삽입 → 5 → 4 → 3 → 2 → 1
• 값 3인 노드를 떼어내 맨 앞으로 연결 → 3 → 5 → 4 → 2 → 1
출력: 35421`},{id:"2025-1-19",session:"2025년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    unsigned char g[2][3] = { {0xA0, 0xA5, 0xDB}, {0xA0, 0xED, 0x81} };
    int sum = 0;
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 3; j++)
            sum += g[i][j] & 0xA5;
    printf("%d", sum);
    return 0;
}`,language:"c",choices:["454","810","908","1816"],blanks:[{answer:"908"}],explanation:`0xA5 = 1010 0101과 비트 AND(&)하면 둘 다 1인 비트만 1이 된다.
• 0xA0(1010 0000) & 0xA5 = 1010 0000 = 160
• 0xA5 & 0xA5 = 165
• 0xDB(1101 1011) & 0xA5 = 1000 0001 = 129
• 0xED(1110 1101) & 0xA5 = 1010 0101 = 165
• 0x81(1000 0001) & 0xA5 = 1000 0001 = 129
첫 묶음 160 + 165 + 129 = 454, 둘째 묶음 160 + 165 + 129 = 454 → 합계 908`},{id:"2025-1-20",session:"2025년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
    static int calc(int n) {
        if (n <= 2) return 1;
        return calc(n - 1) + calc(n - 2);
    }
    static int calc(String s) {
        return calc(4) + calc(2);
    }
    public static void main(String[] args) {
        System.out.print(calc("5"));
    }
}`,language:"java",choices:["3","4","5","8"],blanks:[{answer:"4"}],explanation:`오버로딩된 메서드는 인수의 자료형으로 선택된다.
• calc("5") → 인수가 문자열이므로 calc(String) 실행
• calc(String)이 calc(4) + calc(2)를 반환 → 3 + 1 = 4
문자열 "5"가 정수 5로 자동 변환되어 calc(int)가 호출되는 일은 없다.`}],r0=Object.freeze(Object.defineProperty({__proto__:null,default:t0},Symbol.toStringTag,{value:"Module"})),Cn=[{id:1,name:"소프트웨어 설계"},{id:2,name:"데이터베이스"},{id:3,name:"인터페이스·UI"},{id:4,name:"애플리케이션 테스트"},{id:5,name:"정보 보안"},{id:6,name:"OS·네트워크·신기술"},{id:7,name:"C 언어"},{id:8,name:"Java"},{id:9,name:"Python"}],Ne={BOOKMARKS:"practical_bookmarks_v1",USER_ANSWERS:"practical_user_answers_v1",WRONG_ANSWERS:"practical_wrong_answers_v1",DAILY_STATS:"practical_daily_stats_v1",SUBJECT_ANSWERS:"practical_subject_answers_v1",SUBJECT_LAST_INDEX:"practical_subject_last_index_v1",RESULTS_HISTORY:"practical_results_history_v1"},fo=Object.assign({"../data/01-keyword.json":Mf,"../data/02-code-control.json":_f,"../data/03-code-pointer.json":Bf,"../data/04-code-struct.json":Uf,"../data/05-code-function.json":Wf,"../data/06-code-java.json":$f,"../data/07-code-python.json":Jf,"../data/08-2026-02.json":Kf,"../data/09-2026-01.json":Yf,"../data/10-2025-03.json":Zf,"../data/11-2025-02.json":n0,"../data/12-2025-01.json":r0}),s0=()=>{let e=[];for(const n in fo){const t=fo[n],r=t.default||t,s=Array.isArray(r)?r:r&&Array.isArray(r.questions)?r.questions:[];e=[...e,...s]}return e},i0=()=>{try{return s0()}catch(e){return console.error("Failed to load questions from files",e),[]}},Oc=()=>{const e=localStorage.getItem(Ne.BOOKMARKS);if(!e)return[];try{const n=JSON.parse(e);return Array.isArray(n)?n.map(String).filter(t=>t&&t.trim()!==""):[]}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}},a0=e=>{const n=String(e),t=Oc(),s=t.includes(n)?t.filter(i=>i!==n):[...t,n];return localStorage.setItem(Ne.BOOKMARKS,JSON.stringify(s)),s},Ds=()=>{try{const e=localStorage.getItem(Ne.USER_ANSWERS);return e?JSON.parse(e):{}}catch{return{}}},l0=(e,n,t,r,s=!1)=>{const i=Ds();return i[e]={inputs:n,isCorrect:t,manual:s,session:r,timestamp:new Date().toISOString()},localStorage.setItem(Ne.USER_ANSWERS,JSON.stringify(i)),i},o0=e=>{const n=Ds();return n[e]&&(n[e]={...n[e],isCorrect:!0,manual:!0},localStorage.setItem(Ne.USER_ANSWERS,JSON.stringify(n))),n},mo=e=>{const n=Ds();return delete n[e],localStorage.setItem(Ne.USER_ANSWERS,JSON.stringify(n)),n},u0=()=>{try{const e=localStorage.getItem(Ne.WRONG_ANSWERS);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(String):[]}catch{return[]}},c0=e=>(localStorage.setItem(Ne.WRONG_ANSWERS,JSON.stringify(e)),e),_c=()=>{const e=new Date,n=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${n}-${t}-${r}`},tl=()=>{const e=_c();try{const n=localStorage.getItem(Ne.DAILY_STATS);if(n){const t=JSON.parse(n);if(t.date===e)return t}}catch(n){console.error("Failed to load daily stats",n)}return{date:e,total:0,correct:0,wrong:0}},d0=e=>{const n=tl(),t={...n,total:n.total+1,correct:e?n.correct+1:n.correct,wrong:e?n.wrong:n.wrong+1};return localStorage.setItem(Ne.DAILY_STATS,JSON.stringify(t)),t},p0=()=>{const e=tl();if(e.wrong===0)return e;const n={...e,correct:e.correct+1,wrong:e.wrong-1};return localStorage.setItem(Ne.DAILY_STATS,JSON.stringify(n)),n},f0=()=>{const n={date:_c(),total:0,correct:0,wrong:0};return localStorage.setItem(Ne.DAILY_STATS,JSON.stringify(n)),n};function or({isOpen:e,title:n,message:t,confirmText:r="확인",cancelText:s="취소",type:i="danger",icon:a,showCancel:u=!0,children:o,onConfirm:p,onClose:h}){if(P.useEffect(()=>{const f=y=>{y.key==="Escape"&&e&&h()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[e,h]),!e)return null;const g=i==="info";return l.jsx("div",{onClick:h,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(15, 23, 42, 0.75)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"16px"},className:"animate-fade-in",children:l.jsxs("div",{className:"glass-card",onClick:f=>f.stopPropagation(),style:{width:"100%",maxWidth:"380px",padding:"24px",display:"flex",flexDirection:"column",gap:"16px",boxShadow:g?"0 20px 25px -5px rgba(99, 102, 241, 0.3)":"0 20px 25px -5px rgba(244, 63, 94, 0.3)",border:g?"1px solid rgba(99, 102, 241, 0.3)":"1px solid rgba(244, 63, 94, 0.3)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("div",{style:{width:"40px",height:"40px",background:g?"rgba(99, 102, 241, 0.15)":"rgba(244, 63, 94, 0.15)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:g?"var(--primary)":"var(--wrong)",flexShrink:0},children:a||(g?l.jsx(nl,{size:22}):l.jsx(xf,{size:22}))}),l.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-main)"},children:n})]}),t&&l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",lineHeight:"1.5"},children:t}),o,l.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"8px"},children:[u&&l.jsx("button",{className:"btn-secondary",onClick:h,style:{flex:1,justifyContent:"center"},children:s}),l.jsx("button",{className:"btn-primary",onClick:()=>{p(),h()},style:{flex:1,justifyContent:"center",background:g?"linear-gradient(135deg, var(--primary), var(--primary-hover))":"linear-gradient(135deg, #f43f5e, #e11d48)"},children:r})]})]})})}function m0({setActiveTab:e,questions:n,userAnswers:t,bookmarkCount:r,wrongAnswers:s,dailyStats:i,onResetDailyStats:a}){const[u,o]=P.useState(!1);Object.keys(t).length,Object.values(t).filter(f=>f.isCorrect).length;const p=s.length,h=new Set(n.map(f=>f.session)).size,g=[{tab:"random",icon:l.jsx(gs,{size:32}),title:"랜덤 문제풀이",description:"키워드·코드 문제를 무작위로 섞어 실전처럼 풀어봅니다.",color:"linear-gradient(135deg, #a855f7, #7e22ce)",glow:"rgba(168, 85, 247, 0.35)",stat:`전체 ${n.length}문제`},{tab:"quiz",icon:l.jsx(nl,{size:32}),title:"유형별 문제풀이",description:"키워드·코드 유형이나 2025~2026년 회차를 골라 차례대로 풀어보세요.",color:"linear-gradient(135deg, #6366f1, #4f46e5)",glow:"rgba(99, 102, 241, 0.35)",stat:`${h}개 유형·회차`},{tab:"subject",icon:l.jsx(hs,{size:32}),title:"주제별 문제풀이",description:"데이터베이스, 보안, 네트워크, C·Java·Python 등 취약한 주제를 집중 학습하세요.",color:"linear-gradient(135deg, #06b6d4, #0891b2)",glow:"rgba(6, 182, 212, 0.35)",stat:`${Cn.length}개 주제 지원`},{tab:"wrong",icon:l.jsx(xt,{size:32}),title:"오답노트",description:"풀었던 문제 중 틀린 문제만 모아 집중 복습할 수 있습니다.",color:"linear-gradient(135deg, #f43f5e, #e11d48)",glow:"rgba(244, 63, 94, 0.35)",stat:p>0?`${p}문제 오답`:"오답 없음"},{tab:"bookmark",icon:l.jsx(lr,{size:32}),title:"북마크 문제풀이",description:"중요하거나 헷갈려서 저장해둔 문제를 따로 집중 점검하세요.",color:"linear-gradient(135deg, #eab308, #ca8a04)",glow:"rgba(234, 179, 8, 0.35)",stat:r>0?`${r}문제 저장됨`:"저장된 문제 없음"},{tab:"result",icon:l.jsx(kt,{size:32}),title:"풀이결과",description:"유형별 점수와 주제별 정답률로 부족한 부분을 확인하세요.",color:"linear-gradient(135deg, #10b981, #059669)",glow:"rgba(16, 185, 129, 0.35)",stat:"유형별 풀이 점수"}];return l.jsxs("div",{className:"animate-fade-in",children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 0 20px"},children:[l.jsx("div",{children:l.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(99, 102, 241, 0.1)",border:"1px solid rgba(99, 102, 241, 0.3)",borderRadius:"9999px",padding:"6px 16px",fontSize:"0.85rem",color:"#a5b4fc",fontWeight:600},children:[l.jsx(Dc,{size:15}),"정보처리기사 실기 유형별·회차별 ",n.length,"문제"]})}),l.jsxs("div",{className:"glass-card",style:{marginTop:"20px",padding:"16px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",maxWidth:"420px",width:"100%",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)",background:"rgba(30, 41, 59, 0.8)"},children:[l.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,color:"var(--text-muted)",letterSpacing:"0.05em"},children:"오늘의 학습 성과"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",width:"100%"},children:[l.jsxs("div",{style:{textAlign:"center",flex:1},children:[l.jsx("div",{style:{fontSize:"1.4rem",fontWeight:800,color:"#a5b4fc"},children:i.total}),l.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"풀이"})]}),l.jsx("div",{style:{width:"1px",height:"30px",background:"var(--border-color)"}}),l.jsxs("div",{style:{textAlign:"center",flex:1},children:[l.jsx("div",{style:{fontSize:"1.4rem",fontWeight:800,color:"var(--correct)"},children:i.correct}),l.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"정답"})]}),l.jsx("div",{style:{width:"1px",height:"30px",background:"var(--border-color)"}}),l.jsxs("div",{style:{textAlign:"center",flex:1},children:[l.jsx("div",{style:{fontSize:"1.4rem",fontWeight:800,color:"var(--wrong)"},children:i.wrong}),l.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"오답"})]}),l.jsx("div",{style:{width:"1px",height:"30px",background:"var(--border-color)"}}),l.jsx("button",{onClick:()=>o(!0),title:"오늘 측정 데이터 초기화",style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-color)",color:"var(--text-muted)",padding:"8px",borderRadius:"var(--radius-sm)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:f=>{f.currentTarget.style.background="rgba(244, 63, 94, 0.15)",f.currentTarget.style.color="#f43f5e",f.currentTarget.style.borderColor="rgba(244, 63, 94, 0.4)"},onMouseLeave:f=>{f.currentTarget.style.background="rgba(255, 255, 255, 0.05)",f.currentTarget.style.color="var(--text-muted)",f.currentTarget.style.borderColor="var(--border-color)"},children:l.jsx(En,{size:16})})]})]})]}),l.jsx("div",{className:"menu-cards-grid",children:g.map(f=>l.jsxs("button",{onClick:()=>e(f.tab),className:"menu-card",onMouseEnter:y=>{const v=y.currentTarget;v.style.transform="translateY(-4px)",v.style.boxShadow=`0 12px 40px ${f.glow}`,v.style.borderColor="rgba(255,255,255,0.2)"},onMouseLeave:y=>{const v=y.currentTarget;v.style.transform="translateY(0)",v.style.boxShadow="none",v.style.borderColor="var(--border-color)"},children:[l.jsx("div",{style:{position:"absolute",top:"-30px",right:"-30px",width:"100px",height:"100px",background:f.glow,borderRadius:"50%",filter:"blur(25px)",opacity:.5,pointerEvents:"none"}}),l.jsx("div",{className:"menu-card-icon",style:{background:f.color,boxShadow:`0 8px 24px ${f.glow}`},children:f.icon}),l.jsxs("div",{style:{width:"100%"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"6px"},children:[l.jsx("h3",{className:"menu-card-title",children:f.title}),l.jsx(vf,{className:"menu-card-arrow",size:16})]}),l.jsx("p",{className:"menu-card-desc",children:f.description}),f.stat&&l.jsx("span",{className:"menu-card-stat",children:f.stat})]})]},f.tab))}),l.jsx(or,{isOpen:u,title:"당일 통계 초기화",message:"오늘 기록된 풀이, 정답, 오답 수량이 모두 0으로 초기화됩니다. 진행하시겠습니까?",confirmText:"초기화",cancelText:"취소",onConfirm:()=>{a(),o(!1)},onClose:()=>o(!1)})]})}const h0=e=>e.replace(/^\s*[①-⑳]\s*[:.)]?\s*/,""),li=(e,n)=>{const t=e.normalize("NFKC").replace(/\s+/g,"");return n?t:t.toLowerCase()},ho=e=>e.replace(/[()[\]{}\-_.,·'"`‘’“”:;!?~]/g,""),g0=e=>{const n=e.match(/^(.+?)\s*\((.+)\)$/);return n?[e,...[n[1],n[2]].map(t=>t.trim()).filter(Boolean)]:[e]},y0=(e,n,t)=>{const r=li(h0(e),t);return r?t?r===li(n,t):g0(n).some(s=>{const i=li(s,t);if(r===i)return!0;const a=ho(r);return a!==""&&a===ho(i)}):!1},go=e=>e.replace(/\r\n?/g,`
`).split(`
`).map(n=>n.trim().replace(/[ \t]+/g," ")).join(`
`).replace(/^\n+|\n+$/g,""),ra=e=>[e.answer,...e.accepts??[]],yo=(e,n,t)=>{if(e.type==="code"){const s=go(n);return s!==""&&ra(t).some(i=>go(i)===s)}const r=e.language!==void 0;return ra(t).some(s=>y0(n,s,r))},sa=(e,n)=>{const{blanks:t}=e;if(e.unordered){const s=new Set,i=t.map((u,o)=>{const p=t.findIndex((h,g)=>!s.has(g)&&yo(e,n[o]??"",h));return p===-1?!1:(s.add(p),!0)});return{isCorrect:n.filter(u=>u.trim()!=="").length===t.length&&i.every(Boolean),blankResults:i}}const r=t.map((s,i)=>yo(e,n[i]??"",s));return{isCorrect:r.every(Boolean),blankResults:r}},qr=(e,n)=>{const{blanks:t}=e,r=(i,a)=>ra(a).includes(i);if(e.unordered){const i=new Set,a=t.map((u,o)=>{const p=t.findIndex((h,g)=>!i.has(g)&&r(n[o]??"",h));return p===-1?!1:(i.add(p),!0)});return{isCorrect:n.length===t.length&&a.every(Boolean),blankResults:a}}const s=t.map((i,a)=>r(n[a]??"",i));return{isCorrect:s.every(Boolean),blankResults:s}},zc=(e,n)=>{var a;if(n.isCorrect)return 1;if(n.manual||e.blanks.length<2)return 0;const t=n.inputs,{blankResults:r}=(a=e.choices)!=null&&a.length?qr(e,t):sa(e,t),s=r.filter(Boolean).length,i=e.unordered?Math.max(0,t.filter(u=>u.trim()!=="").length-e.blanks.length):0;return Math.max(0,s-i)/e.blanks.length},Bc=e=>Number.isInteger(e)?String(e):e.toFixed(1),ia=e=>{var n;return((n=e.match(/^([㉠-㉿])\s/))==null?void 0:n[1])??e},Fc=(e,n)=>{var t;return((t=e.choices)==null?void 0:t.find(r=>ia(r)===n))??n};function x0({question:e,userAnswer:n,onSubmitAnswer:t}){const r=e.choices??[],s=e.unordered===!0,i=!s&&e.blanks.length===1,a=!i&&!s,u=e.type!=="text"&&e.language!==void 0,p=Math.max(...r.flatMap(b=>b.split(`
`).map(E=>E.length)))>(u?14:22),h=n!=null,g=()=>s?(n==null?void 0:n.inputs)??[]:e.blanks.map((b,E)=>(n==null?void 0:n.inputs[E])??""),[f,y]=P.useState(g),[v,S]=P.useState(0);P.useEffect(()=>{y(g()),S(0)},[e.id,n]);const M=e.blanks.flatMap(b=>[b.answer,...b.accepts??[]]),d=h&&!s?qr(e,n.inputs).blankResults:null,c=b=>e.blanks[b].label??String(b+1),m=b=>{if(h)return;if(i){t([b],qr(e,[b]).isCorrect,!1);return}if(s){y(W=>W.includes(b)?W.filter(O=>O!==b):[...W,b]);return}const E=f.map((W,O)=>O===v?b:W);y(E);const A=E.findIndex((W,O)=>O>v&&!W),U=E.findIndex(W=>!W);S(A!==-1?A:U!==-1?U:v)},x=()=>{const b=s?r.map(ia).filter(E=>f.includes(E)):f;t(b,qr(e,b).isCorrect,!1)},C=s?f.length>0:f.every(Boolean),j=h?n.inputs:f;let I="보기를 터치하면 바로 채점됩니다";return s?I="해당하는 보기를 모두 고른 뒤 채점하세요":i||(I="빈칸을 고르고 보기를 터치해 채우세요"),l.jsxs("div",{className:"choice-area",children:[l.jsxs("div",{className:"choices-title",children:["<보기>",!h&&l.jsx("span",{className:"answer-hint",children:I})]}),!i&&!s&&l.jsx("div",{className:"choice-slots",children:e.blanks.map((b,E)=>{const A=d==null?void 0:d[E];let U=!h&&E===v?" active":"";return A!==void 0&&(U=A?" correct":" wrong"),l.jsxs("button",{type:"button",className:`choice-slot${U}`,disabled:h,onClick:()=>S(E),children:[l.jsx("span",{className:"blank-label",children:c(E)}),l.jsx("span",{className:j[E]?"":"choice-slot-empty",children:j[E]?Fc(e,j[E]):"선택"}),A!==void 0&&l.jsx("span",{className:"blank-result",style:{marginLeft:"auto",color:A?"var(--correct)":"var(--wrong)"},children:A?l.jsx(na,{size:18}):l.jsx(xt,{size:18})})]},E)})}),l.jsx("div",{className:`choice-grid${p?" wide":""}`,children:r.map(b=>{const E=ia(b),A=j.includes(E),U=M.includes(E),W=h&&!a;let O="";return W?U?O=" correct-answer":A?O=" wrong-answer":O=" dimmed":A&&!h&&!a&&(O=" selected"),l.jsxs("button",{type:"button",className:`choice-option${O}`,disabled:h,onClick:()=>m(E),children:[u?l.jsx("pre",{className:"choice-option-text choice-pre",children:b}):l.jsx("span",{className:`choice-option-text${e.language?" choice-mono":""}`,children:b}),W&&(U||A)&&l.jsxs("span",{className:"choice-corner",children:[W&&U&&l.jsx(na,{size:18,color:"var(--correct)",className:"choice-corner-icon"}),W&&!U&&A&&l.jsx(xt,{size:18,color:"var(--wrong)",className:"choice-corner-icon"})]})]},b)})}),!h&&!i&&l.jsxs("div",{className:"answer-actions",children:[l.jsx("button",{className:"btn-primary answer-submit",onClick:x,disabled:!C,style:{opacity:C?1:.5,cursor:C?"pointer":"not-allowed"},children:"채점하기"}),s&&l.jsxs("span",{className:"answer-hint",children:[f.length,"개 선택"]})]})]})}const v0={c:"C",java:"Java",python:"Python",sql:"SQL"};function S0(e,n){return e.type==="text"?l.jsx("div",{className:"passage-box",children:e.text},n):e.type==="table"?l.jsx("div",{className:"q-table-wrap",children:l.jsxs("table",{className:`q-table${e.headers?"":" desc"}`,children:[e.caption&&l.jsx("caption",{children:e.caption}),e.headers&&l.jsx("thead",{children:l.jsx("tr",{children:e.headers.map((t,r)=>l.jsx("th",{children:t},r))})}),l.jsx("tbody",{children:e.rows.map((t,r)=>l.jsx("tr",{children:t.map((s,i)=>l.jsx("td",{children:s},i))},r))})]})},n):l.jsx("div",{style:{marginBottom:"16px",textAlign:"center"},children:l.jsx("img",{src:`/infoprocess-exam-app/${e.src.replace(/^\//,"")}`,alt:e.alt??"문제 이미지",className:"q-image"})},n)}function mr({question:e,currentIndex:n,totalCount:t,userAnswer:r,isBookmarked:s,onSubmitAnswer:i,onMarkCorrect:a,onToggleBookmark:u}){var L,_;const[o,p]=P.useState(()=>e.blanks.map((T,z)=>(r==null?void 0:r.inputs[z])??"")),[h,g]=P.useState(!1),f=P.useRef([]),y=P.useRef(null),v=r!=null,S=v||h,M=P.useRef(S);if(P.useEffect(()=>{p(e.blanks.map((T,z)=>(r==null?void 0:r.inputs[z])??"")),g(!1)},[e.id,r]),P.useEffect(()=>{var T,z;S&&!M.current&&((T=document.activeElement)==null||T.blur(),(z=y.current)==null||z.scrollIntoView({behavior:"smooth",block:"nearest"})),M.current=S},[S]),!e)return null;const d=e.type==="essay",c=!!((L=e.choices)!=null&&L.length),m=e.type!=="text",x=v||h,C=v&&!r.manual&&!d?sa(e,r.inputs):null,j=String(e.id),I=j.split("-"),b=parseInt(I[I.length-1],10),E=isNaN(b)?n+1:b,A=T=>e.blanks[T].label??(e.blanks.length>1?String(T+1):""),U=o.every(T=>T.trim()===""),W=(T,z)=>{p(ce=>ce.map((he,un)=>un===T?z:he))},O=()=>{if(!x){if(d){g(!0);return}i(o,sa(e,o).isCorrect,!1)}},q=T=>T.nativeEvent.isComposing||T.keyCode===229,k=(T,z)=>{var ce;T.key!=="Enter"||q(T)||(T.preventDefault(),z<e.blanks.length-1?(ce=f.current[z+1])==null||ce.focus():O())},D=T=>{T.key==="Enter"&&(T.ctrlKey||T.metaKey)&&!q(T)&&(T.preventDefault(),O())},B=()=>{const T=e.blanks[0].answer;return e.type==="code"||d&&e.language?l.jsx("pre",{className:"answer-pre",children:T}):d?l.jsx("div",{className:"answer-text",children:T}):l.jsx("ul",{className:"answer-list",children:e.blanks.map((z,ce)=>l.jsxs("li",{children:[A(ce)&&l.jsx("span",{className:"blank-label",children:A(ce)}),l.jsx("span",{children:Fc(e,z.answer)})]},ce))})};let w=l.jsx("span",{className:"badge badge-session",style:{marginLeft:"auto"},children:"✍️ 스스로 채점해 보세요"});if(v){const T=r.isCorrect?0:zc(e,r)*e.blanks.length;let z="❌ 틀렸습니다";r.isCorrect?z=r.manual?"⭕ 정답 처리":"⭕ 정답입니다!":T>0&&(z=`🔺 부분 정답 (${Bc(T)}/${e.blanks.length})`),w=l.jsx("span",{className:`badge ${r.isCorrect?"badge-subject":"badge-session"}`,style:{marginLeft:"auto"},children:z})}return l.jsxs("div",{className:"glass-card animate-fade-in",style:{padding:"32px",position:"relative"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[l.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[l.jsx("span",{className:"badge badge-session",children:e.session}),l.jsx("span",{className:"badge badge-subject",children:e.subjectName}),l.jsxs("span",{style:{fontSize:"0.88rem",color:"var(--text-muted)",fontWeight:600},children:[n+1," / ",t," 문제"]})]}),l.jsx("button",{className:`btn-icon ${s?"active-bookmark":""}`,onClick:()=>u(j),title:s?"북마크 해제":"북마크 추가",style:{background:s?"rgba(234, 179, 8, 0.15)":"rgba(255, 255, 255, 0.05)",border:"1px solid",borderColor:s?"rgba(234, 179, 8, 0.4)":"var(--border-color)",borderRadius:"var(--radius-sm)",padding:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},children:l.jsx(lr,{size:26,fill:s?"var(--bookmark)":"none",color:s?"var(--bookmark)":"var(--text-muted)"})})]}),l.jsxs("h2",{style:{fontSize:"1.2rem",fontWeight:600,color:"var(--text-main)",lineHeight:"1.6",marginBottom:"16px",whiteSpace:"pre-line"},children:[E,". ",e.question]}),(_=e.blocks)==null?void 0:_.map(S0),e.codeSnippet&&l.jsxs("div",{className:"code-box",children:[l.jsxs("div",{className:"code-box-header",children:[l.jsx(wf,{size:14})," ",e.language?v0[e.language]:"코드"]}),l.jsx("pre",{children:e.codeSnippet})]}),e.choices&&!c&&l.jsxs("div",{className:"choices-box",children:[l.jsx("div",{className:"choices-title",children:"<보기>"}),l.jsx("div",{className:"choices-list",children:e.choices.map((T,z)=>l.jsx("span",{className:"choice-chip",children:T},z))})]}),c?l.jsx(x0,{question:e,userAnswer:r,onSubmitAnswer:i}):l.jsxs("div",{className:"answer-area",children:[l.jsxs("div",{className:"answer-area-title",children:[l.jsx(If,{size:16}),d?"답안 작성 (서술형 · 스스로 채점)":e.type==="code"?"실행 결과 입력":"답안 입력",e.unordered&&l.jsx("span",{className:"answer-hint",children:"순서는 상관없습니다"})]}),e.blanks.map((T,z)=>{const ce=A(z),he=C==null?void 0:C.blankResults[z],un=he===void 0?"":he?" correct":" wrong",Ve={value:o[z]??"",disabled:x,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1};return l.jsxs("div",{className:"blank-row",children:[ce&&l.jsx("span",{className:"blank-label",children:ce}),m?l.jsx("textarea",{...Ve,ref:Se=>f.current[z]=Se,className:`answer-input${e.type==="code"?" mono":""}${un}`,rows:e.type==="code"?4:3,placeholder:e.type==="code"?"실행 결과를 입력하세요 (여러 줄이면 줄을 바꿔 입력)":"답안을 작성해 보세요 (비워 두고 정답을 확인해도 됩니다)",onChange:Se=>W(z,Se.target.value),onKeyDown:D}):l.jsx("input",{...Ve,ref:Se=>f.current[z]=Se,type:"text",enterKeyHint:z<e.blanks.length-1?"next":"done",className:`answer-input${e.language?" mono":""}${un}`,placeholder:"정답 입력",onChange:Se=>W(z,Se.target.value),onKeyDown:Se=>k(Se,z)}),he!==void 0&&l.jsx("span",{className:"blank-result",style:{color:he?"var(--correct)":"var(--wrong)"},children:he?l.jsx(na,{size:22}):l.jsx(xt,{size:22})})]},z)}),!x&&l.jsxs("div",{className:"answer-actions",children:[l.jsx("button",{className:"btn-primary answer-submit",onClick:O,children:d?"정답 확인":U?"정답 보기":"채점하기"}),!d&&l.jsx("span",{className:"answer-hint answer-key-hint",children:m?"Ctrl(⌘) + Enter로 채점":e.blanks.length>1?"Enter로 다음 칸 이동 · 마지막 칸에서 채점":"Enter로 채점"})]})]}),S&&l.jsxs("div",{ref:y,className:"explanation-box animate-fade-in",style:{scrollMarginBottom:"16px"},children:[l.jsxs("div",{className:"explanation-header",children:[l.jsx(jf,{size:20}),l.jsx("span",{children:"정답 및 해설"}),w]}),l.jsx("div",{style:{marginBottom:"8px",fontSize:"0.88rem",fontWeight:700,color:"var(--text-muted)"},children:d?"모범 답안":"정답"}),B(),!v&&h&&l.jsxs("div",{className:"answer-actions",style:{marginBottom:"16px"},children:[l.jsxs("button",{className:"btn-primary answer-submit",style:{background:"linear-gradient(135deg, #10b981, #059669)"},onClick:()=>i(o,!0,!0),children:[l.jsx(Tf,{size:18}),"맞았어요"]}),l.jsxs("button",{className:"btn-secondary answer-submit",style:{color:"var(--wrong)",borderColor:"var(--wrong-border)"},onClick:()=>i(o,!1,!0),children:[l.jsx(Af,{size:18}),"틀렸어요"]})]}),v&&!r.isCorrect&&!d&&!c&&l.jsxs("div",{className:"answer-actions",style:{marginBottom:"16px"},children:[l.jsxs("button",{className:"btn-secondary answer-submit",onClick:a,children:[l.jsx(Sf,{size:18}),"정답으로 인정하기"]}),l.jsx("span",{className:"answer-hint",children:"같은 뜻인데 표현이 달라 오답 처리되었다면 눌러 주세요"})]}),l.jsx("div",{className:"explanation-content",children:e.explanation})]})]})}function b0({questions:e,bookmarks:n,onSubmitAnswer:t,onMarkCorrect:r,onToggleBookmark:s,onFinishQuiz:i}){const[a,u]=P.useState([]),[o,p]=P.useState(0),[h,g]=P.useState({}),f=()=>{const x=[...e].sort(()=>Math.random()-.5);u(x),g({}),p(0)};if(P.useEffect(()=>{f()},[e]),a.length===0)return null;const y=a[o],v=y?h[y.id]:void 0,S=y?n.map(String).includes(String(y.id)):!1,M=Math.round((o+1)/a.length*100),d=(x,C,j)=>{y&&(g(I=>({...I,[y.id]:{inputs:x,isCorrect:C,manual:j,session:y.session,timestamp:new Date().toISOString()}})),t(String(y.id),C))},c=()=>{!y||!v||(g(x=>({...x,[y.id]:{...v,isCorrect:!0,manual:!0}})),r(String(y.id)))},m=()=>{y&&g(x=>{const C={...x};return delete C[y.id],C})};return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[l.jsxs("div",{className:"glass-card",style:{padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("div",{style:{width:"40px",height:"40px",background:"linear-gradient(135deg, #a855f7, #7e22ce)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(gs,{size:22,color:"#fff"})}),l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:700,fontSize:"1.05rem"},children:"랜덤 문제풀이"}),l.jsxs("div",{style:{color:"var(--text-muted)",fontSize:"0.88rem"},children:["전체 ",a.length,"문제 중 무작위 출제"]})]})]}),l.jsxs("button",{className:"btn-secondary",onClick:f,style:{padding:"8px 14px",fontSize:"0.88rem"},children:[l.jsx(gs,{size:16})," 문제 다시 섞기"]})]}),l.jsx("div",{style:{background:"rgba(255, 255, 255, 0.05)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:l.jsx("div",{style:{height:"100%",width:`${M}%`,background:"linear-gradient(90deg, #a855f7, #ec4899)",transition:"width 0.3s ease"}})}),l.jsx(mr,{question:y,currentIndex:o,totalCount:a.length,userAnswer:v,isBookmarked:S,onSubmitAnswer:d,onMarkCorrect:c,onToggleBookmark:()=>s(String(y.id))},y.id),l.jsxs("div",{className:"footer-controls",children:[l.jsxs("div",{style:{display:"flex",gap:"12px"},children:[l.jsxs("button",{className:"btn-secondary",onClick:()=>p(x=>Math.max(0,x-1)),disabled:o===0,style:{opacity:o===0?.5:1,cursor:o===0?"not-allowed":"pointer"},children:[l.jsx(Ls,{size:18}),"이전문제"]}),o<a.length-1?l.jsxs("button",{className:"btn-primary",style:{background:"linear-gradient(135deg, #a855f7, #7e22ce)"},onClick:()=>p(x=>Math.min(a.length-1,x+1)),children:["다음문제",l.jsx(el,{size:18})]}):l.jsxs("button",{className:"btn-primary",style:{background:"linear-gradient(135deg, #10b981, #059669)"},onClick:i,children:[l.jsx(kt,{size:18}),"결과 보기"]})]}),l.jsxs("button",{className:"btn-secondary",onClick:m,disabled:!v,style:{opacity:v?1:.5,cursor:v?"pointer":"not-allowed"},children:[l.jsx(En,{size:18}),"다시풀기"]})]})]})}function Uc({options:e,value:n,onChange:t,placeholder:r="선택하세요"}){const[s,i]=P.useState(!1),[a,u]=P.useState(null),o=P.useRef(null),p=P.useRef(null),h=e.find(y=>y.value===n),g=()=>{if(o.current){const y=o.current.getBoundingClientRect();u({top:y.bottom+6,left:y.left,width:y.width})}},f=()=>{s||g(),i(!s)};return P.useEffect(()=>{const y=S=>{const M=S.target,d=o.current&&o.current.contains(M),c=p.current&&p.current.contains(M);!d&&!c&&i(!1)},v=()=>{s&&g()};return document.addEventListener("mousedown",y),window.addEventListener("scroll",v,!0),window.addEventListener("resize",v),()=>{document.removeEventListener("mousedown",y),window.removeEventListener("scroll",v,!0),window.removeEventListener("resize",v)}},[s]),l.jsxs("div",{ref:o,style:{position:"relative",width:"100%"},children:[l.jsxs("div",{onClick:f,style:{background:"rgba(15, 23, 42, 0.8)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",padding:"10px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",color:h?"var(--text-main)":"var(--text-muted)",fontSize:"0.9rem",fontWeight:600,transition:"all 0.2s"},children:[l.jsx("span",{children:h?h.label:r}),l.jsx(kf,{size:16,style:{transform:s?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s",color:"var(--text-muted)"}})]}),s&&a&&Lc.createPortal(l.jsx("div",{ref:p,className:"glass-card animate-fade-in",style:{position:"fixed",top:`${a.top}px`,left:`${a.left}px`,width:`${a.width}px`,maxHeight:"240px",overflowY:"auto",zIndex:99999,padding:"6px",boxShadow:"0 20px 30px -10px rgba(0, 0, 0, 0.8)",background:"rgba(15, 23, 42, 0.98)"},children:e.map(y=>l.jsx("div",{onClick:()=>{t(y.value),i(!1)},style:{padding:"10px 12px",borderRadius:"6px",cursor:"pointer",fontSize:"0.9rem",fontWeight:y.value===n?700:500,color:y.value===n?"#fff":"var(--text-muted)",background:y.value===n?"var(--primary)":"transparent",transition:"background 0.15s"},onMouseEnter:v=>{y.value!==n&&(v.currentTarget.style.background="rgba(255, 255, 255, 0.06)")},onMouseLeave:v=>{y.value!==n&&(v.currentTarget.style.background="transparent")},children:y.label},y.value))}),document.body)]})}function k0({questions:e,userAnswers:n,bookmarks:t,onSubmitAnswer:r,onMarkCorrect:s,onResetAnswer:i,onToggleBookmark:a,onFinishQuiz:u}){const[o,p]=P.useState(""),[h,g]=P.useState(0),[f,y]=P.useState(0),v=P.useMemo(()=>Array.from(new Set(e.map(E=>E.session))).map(E=>({value:E,label:`${E} (${e.filter(A=>A.session===E).length}문제)`})),[e]),S=P.useMemo(()=>{const b=new Set(e.filter(E=>E.session===o).map(E=>E.subjectId));return Cn.filter(E=>b.has(E.id))},[e,o]),M=P.useMemo(()=>o?e.filter(b=>{const E=b.session===o,A=h===0||b.subjectId===h;return E&&A}):[],[e,o,h]),d=b=>{const E=b;if(p(E),g(0),E){const A=e.filter(O=>O.session===E);let U=-1;for(let O=A.length-1;O>=0;O--)if(n[A[O].id]){U=O;break}const W=U>=0?Math.min(U+1,A.length-1):0;y(W)}else y(0)},c=b=>{g(b),y(0)},m=M[f],x=m?n[m.id]:void 0,C=m?t.includes(m.id):!1,j=M.length>0?Math.round((f+1)/M.length*100):0,I=l.jsxs("div",{className:"glass-card",style:{padding:"18px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px",position:"relative",zIndex:50},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flex:"1"},children:[l.jsx("label",{style:{fontSize:"0.9rem",fontWeight:600,color:"var(--text-muted)",whiteSpace:"nowrap"},children:"유형 선택:"}),l.jsx("div",{style:{width:"100%"},children:l.jsx(Uc,{options:v,value:o,onChange:d,placeholder:"문제 유형을 선택해주세요"})})]}),o&&S.length>1&&l.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[l.jsx("button",{className:`nav-btn ${h===0?"active":""}`,onClick:()=>c(0),style:{padding:"6px 12px",fontSize:"0.85rem"},children:"전체 주제"}),S.map(b=>l.jsx("button",{className:`nav-btn ${h===b.id?"active":""}`,onClick:()=>c(b.id),style:{padding:"6px 12px",fontSize:"0.85rem"},children:b.name},b.id))]})]});return o?M.length?l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[I,l.jsx("div",{style:{background:"rgba(255, 255, 255, 0.05)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:l.jsx("div",{style:{height:"100%",width:`${j}%`,background:"linear-gradient(90deg, var(--primary), var(--correct))",transition:"width 0.3s ease"}})}),l.jsx(mr,{question:m,currentIndex:f,totalCount:M.length,userAnswer:x,isBookmarked:C,onSubmitAnswer:(b,E,A)=>r(m.id,b,E,m.session,A),onMarkCorrect:()=>s(m.id),onToggleBookmark:a},m.id),l.jsxs("div",{className:"footer-controls",children:[l.jsxs("div",{style:{display:"flex",gap:"12px"},children:[l.jsx("button",{className:"btn-secondary",onClick:()=>y(b=>Math.max(0,b-1)),disabled:f===0,style:{opacity:f===0?.5:1,cursor:f===0?"not-allowed":"pointer"},children:"이전문제"}),f<M.length-1?l.jsx("button",{className:"btn-primary",onClick:()=>y(b=>Math.min(M.length-1,b+1)),children:"다음문제"}):l.jsxs("button",{className:"btn-primary",style:{background:"linear-gradient(135deg, #10b981, #059669)"},onClick:()=>u(M),children:[l.jsx(kt,{size:18}),"결과 제출하기"]})]}),l.jsxs("button",{className:"btn-secondary",onClick:()=>i(m.id),disabled:!x,style:{opacity:x?1:.5,cursor:x?"pointer":"not-allowed"},children:[l.jsx(En,{size:18}),"다시풀기"]})]})]}):l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[I,l.jsxs("div",{className:"glass-card",style:{padding:"60px",textAlign:"center"},children:[l.jsx(Mc,{size:48,style:{color:"var(--text-muted)",marginBottom:"16px"}}),l.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"8px"},children:"해당 조건의 문제가 없습니다."}),l.jsx("p",{style:{color:"var(--text-muted)"},children:"다른 유형이나 주제 필터를 선택해 주세요."})]})]}):l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[I,l.jsxs("div",{className:"glass-card",style:{padding:"60px",textAlign:"center"},children:[l.jsx(Cf,{size:48,style:{color:"var(--text-muted)",marginBottom:"16px"}}),l.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"8px"},children:"문제 유형을 선택해주세요"}),l.jsx("p",{style:{color:"var(--text-muted)"},children:"상단에서 키워드·코드 유형 또는 회차를 선택하면 문제풀이가 시작됩니다."})]})]})}const xo=Ne.SUBJECT_ANSWERS,vo=Ne.SUBJECT_LAST_INDEX,So={1:{gradient:"linear-gradient(135deg, #6366f1, #4f46e5)",glow:"rgba(99,102,241,0.35)"},2:{gradient:"linear-gradient(135deg, #10b981, #059669)",glow:"rgba(16,185,129,0.35)"},3:{gradient:"linear-gradient(135deg, #f59e0b, #d97706)",glow:"rgba(245,158,11,0.35)"},4:{gradient:"linear-gradient(135deg, #f43f5e, #e11d48)",glow:"rgba(244,63,94,0.35)"},5:{gradient:"linear-gradient(135deg, #8b5cf6, #7c3aed)",glow:"rgba(139,92,246,0.35)"},6:{gradient:"linear-gradient(135deg, #06b6d4, #0891b2)",glow:"rgba(6,182,212,0.35)"},7:{gradient:"linear-gradient(135deg, #64748b, #475569)",glow:"rgba(100,116,139,0.35)"},8:{gradient:"linear-gradient(135deg, #f97316, #ea580c)",glow:"rgba(249,115,22,0.35)"},9:{gradient:"linear-gradient(135deg, #3b82f6, #2563eb)",glow:"rgba(59,130,246,0.35)"}};function w0({questions:e,bookmarks:n,onSubmitAnswer:t,onMarkCorrect:r,onToggleBookmark:s,onFinishQuiz:i}){var q;const[a,u]=P.useState(null),[o,p]=P.useState(0),[h,g]=P.useState(null),[f,y]=P.useState(()=>{try{const k=localStorage.getItem(xo);return k?JSON.parse(k):{}}catch(k){return console.error("Failed to load subject answers from localStorage",k),{}}}),[v,S]=P.useState(()=>{try{const k=localStorage.getItem(vo);return k?JSON.parse(k):{}}catch(k){return console.error("Failed to load last indexes from localStorage",k),{}}});P.useEffect(()=>{try{localStorage.setItem(xo,JSON.stringify(f))}catch(k){console.error("Failed to save subject answers to localStorage",k)}},[f]),P.useEffect(()=>{try{localStorage.setItem(vo,JSON.stringify(v))}catch(k){console.error("Failed to save last indexes to localStorage",k)}},[v]),P.useEffect(()=>{a!==null&&S(k=>({...k,[a]:o}))},[o,a]);const M=P.useMemo(()=>Cn.map(k=>{const D=e.filter(T=>T.subjectId===k.id),B=D.filter(T=>f[T.id]),w=B.length,L=B.filter(T=>{var z;return(z=f[T.id])==null?void 0:z.isCorrect}).length,_=w-L;return{...k,kind:D.some(T=>T.language)?"코드":"키워드",total:D.length,answered:w,correct:L,wrong:_}}),[e,f]),d=P.useMemo(()=>a===null?[]:e.filter(k=>k.subjectId===a),[e,a]),c=k=>{const D=e.filter(_=>_.subjectId===k);if(D.length===0)return;u(k);const B=v[k]??0,w=Math.min(Math.max(0,B),D.length-1);let L=D.findIndex((_,T)=>T>=w&&!f[_.id]);L===-1&&(L=D.findIndex(_=>!f[_.id])),L===-1&&(L=w),p(L)},m=()=>{u(null),p(0)},x=()=>{if(h===null)return;const k=new Set(e.filter(D=>D.subjectId===h).map(D=>D.id));y(D=>{const B={...D};return Object.keys(B).forEach(w=>{k.has(w)&&delete B[w]}),B}),S(D=>({...D,[h]:0})),g(null)},C=(k,D,B,w,L)=>{const _={inputs:D,isCorrect:B,manual:w,session:L,timestamp:new Date().toISOString()};y(T=>({...T,[k]:_})),t(k,B)},j=k=>{y(D=>D[k]?{...D,[k]:{...D[k],isCorrect:!0,manual:!0}}:D),r(k)},I=k=>{y(D=>{const B={...D};return delete B[k],B})};if(a===null)return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[l.jsx("div",{className:"glass-card",style:{padding:"24px 28px"},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"6px"},children:[l.jsx("div",{style:{width:"40px",height:"40px",background:"linear-gradient(135deg, #06b6d4, #0891b2)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"},children:l.jsx(hs,{size:22,color:"#fff"})}),l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:700,fontSize:"1.1rem"},children:"주제별 문제풀이"}),l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.88rem"},children:"원하는 주제를 선택해 집중 학습하세요 (이전 학습 위치부터 이어서 풀어볼 수 있습니다)"})]})]})}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"16px"},children:M.map(k=>{const D=So[k.id],B=(v[k.id]??0)>0||k.answered>0;return l.jsxs("button",{onClick:()=>c(k.id),style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"24px",cursor:k.total>0?"pointer":"not-allowed",textAlign:"left",display:"flex",flexDirection:"column",gap:"14px",transition:"all 0.25s ease",position:"relative",overflow:"hidden",opacity:k.total>0?1:.5},disabled:k.total===0,onMouseEnter:w=>{if(k.total===0)return;const L=w.currentTarget;L.style.transform="translateY(-3px)",L.style.boxShadow=`0 10px 30px ${D.glow}`,L.style.borderColor="rgba(255,255,255,0.2)"},onMouseLeave:w=>{const L=w.currentTarget;L.style.transform="translateY(0)",L.style.boxShadow="none",L.style.borderColor="var(--border-color)"},children:[l.jsx("div",{style:{position:"absolute",top:"-20px",right:"-20px",width:"100px",height:"100px",background:D.glow,borderRadius:"50%",filter:"blur(25px)",opacity:.4,pointerEvents:"none"}}),l.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",width:"100%"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("div",{style:{width:"52px",height:"52px",background:D.gradient,borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",fontWeight:900,color:"#fff",flexShrink:0,boxShadow:`0 6px 20px ${D.glow}`},children:k.id}),l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:700,fontSize:"1rem",color:"var(--text-main)"},children:k.name}),l.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginTop:"2px"},children:[k.kind," ",B&&l.jsx("span",{style:{color:"#06b6d4",fontWeight:600},children:" · 학습 진행 중"})]})]})]}),B&&l.jsx("div",{onClick:w=>{w.stopPropagation(),g(k.id)},title:"이 주제 풀이 기록 및 진행 위치 초기화",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"30px",height:"30px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.12)",color:"var(--text-muted)",borderRadius:"var(--radius-sm)",cursor:"pointer",zIndex:2,transition:"all 0.2s"},onMouseEnter:w=>{w.currentTarget.style.background="rgba(255, 255, 255, 0.15)",w.currentTarget.style.color="var(--text-main)"},onMouseLeave:w=>{w.currentTarget.style.background="rgba(255, 255, 255, 0.06)",w.currentTarget.style.color="var(--text-muted)"},children:l.jsx(En,{size:14})})]}),l.jsxs("div",{style:{marginTop:"auto"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px",fontSize:"0.85rem"},children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:k.total>0?`풀이 ${k.answered} / 정답 ${k.correct} / 오답 ${k.wrong}`:"문제 없음"}),k.total>0&&l.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",opacity:.8},children:["총 ",k.total,"문제"]})]}),k.total>0&&l.jsx("div",{style:{background:"rgba(255,255,255,0.08)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:l.jsx("div",{style:{height:"100%",width:`${Math.round(k.answered/k.total*100)}%`,background:D.gradient,transition:"width 0.4s ease"}})})]})]},k.id)})}),l.jsx(or,{isOpen:h!==null,title:`${((q=Cn.find(k=>k.id===h))==null?void 0:q.name)??""} 풀이 기록 초기화`,message:"선택하신 주제의 모든 풀이 기록과 학습 위치가 초기화됩니다. 계속 진행하시겠습니까?",confirmText:"초기화",cancelText:"취소",onConfirm:x,onClose:()=>g(null)})]});const b=d[o],E=b?f[b.id]:void 0,A=b?n.map(String).includes(String(b.id)):!1,U=d.length>0?Math.round((o+1)/d.length*100):0,W=Cn.find(k=>k.id===a),O=So[a];return d.length===0?l.jsxs("div",{className:"glass-card animate-fade-in",style:{padding:"60px",textAlign:"center"},children:[l.jsx(hs,{size:48,style:{color:"var(--text-muted)",marginBottom:"16px"}}),l.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"8px"},children:"해당 주제에 문제가 없습니다."}),l.jsx("button",{className:"btn-secondary",onClick:m,style:{marginTop:"16px"},children:"← 주제 선택으로 돌아가기"})]}):l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[l.jsxs("div",{className:"glass-card",style:{padding:"16px 24px",display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("button",{onClick:m,style:{background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-color)",color:"var(--text-muted)",padding:"6px 14px",borderRadius:"var(--radius-sm)",cursor:"pointer",fontSize:"0.88rem",display:"flex",alignItems:"center",gap:"6px"},children:"← 주제 선택"}),l.jsx("div",{style:{width:"36px",height:"36px",background:O.gradient,borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",fontWeight:900,color:"#fff"},children:a}),l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:700},children:W.name}),l.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:[o+1," / ",d.length," 문제"]})]})]}),l.jsx("div",{style:{background:"rgba(255,255,255,0.05)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:l.jsx("div",{style:{height:"100%",width:`${U}%`,background:O.gradient,transition:"width 0.3s ease"}})}),l.jsx(mr,{question:b,currentIndex:o,totalCount:d.length,userAnswer:E,isBookmarked:A,onSubmitAnswer:(k,D,B)=>C(String(b.id),k,D,B,b.session),onMarkCorrect:()=>j(String(b.id)),onToggleBookmark:s},b.id),l.jsxs("div",{className:"footer-controls",children:[l.jsxs("div",{style:{display:"flex",gap:"12px"},children:[l.jsxs("button",{className:"btn-secondary",onClick:()=>p(k=>Math.max(0,k-1)),disabled:o===0,style:{opacity:o===0?.5:1,cursor:o===0?"not-allowed":"pointer"},children:[l.jsx(Ls,{size:18}),"이전문제"]}),o<d.length-1?l.jsxs("button",{className:"btn-primary",style:{background:O.gradient},onClick:()=>p(k=>Math.min(d.length-1,k+1)),children:["다음문제",l.jsx(el,{size:18})]}):l.jsxs("button",{className:"btn-primary",style:{background:"linear-gradient(135deg, #10b981, #059669)"},onClick:i,children:[l.jsx(kt,{size:18}),"결과 보기"]})]}),l.jsxs("button",{className:"btn-secondary",onClick:()=>I(String(b.id)),disabled:!E,style:{opacity:E?1:.5,cursor:E?"pointer":"not-allowed"},children:[l.jsx(En,{size:18}),"다시풀기"]})]})]})}function j0({questions:e,userAnswers:n,wrongAnswers:t,onRetryWrongQuestions:r,onResetSessionAnswers:s}){const[i,a]=P.useState(null),[u,o]=P.useState(null),p=P.useMemo(()=>{const g={};return e.forEach(f=>{if(!g[f.session]){const S={};Cn.forEach(M=>{S[M.id]={name:M.name,total:0,correct:0}}),g[f.session]={total:0,answered:0,correct:0,subjectStats:S}}const y=g[f.session];y.total++,y.subjectStats[f.subjectId]&&y.subjectStats[f.subjectId].total++;const v=n[f.id];if(v){y.answered++;const S=zc(f,v);y.correct+=S,y.subjectStats[f.subjectId]&&(y.subjectStats[f.subjectId].correct+=S)}}),Object.entries(g).map(([f,y])=>{const v=y.answered>0&&y.answered===y.total,S=y.total>0?Math.round(y.correct/y.total*100):0,M=e.filter(C=>C.session===f&&t.includes(String(C.id))).length,d=v&&S>=60;let c="",m="",x="";return v?d?(c="합격권",m="var(--correct)",x="rgba(16, 185, 129, 0.15)"):(c="복습 필요",m="#f59e0b",x="rgba(245, 158, 11, 0.15)"):y.answered===0?(c="미풀이",m="var(--text-muted)",x="rgba(255, 255, 255, 0.08)"):(c=`풀이 진행 중 (${y.answered}/${y.total})`,m="var(--primary)",x="rgba(99, 102, 241, 0.15)"),{sessionName:f,totalQuestions:y.total,answeredCount:y.answered,correctCount:y.correct,wrongCount:M,score:S,isCompleted:v,isPassed:d,statusBadgeText:c,statusBadgeColor:m,statusBadgeBg:x,subjectStats:y.subjectStats}})},[e,n,t]),h=P.useMemo(()=>i&&p.find(g=>g.sessionName===i)||null,[i,p]);return i&&h?l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},className:"animate-fade-in",children:[l.jsx("div",{children:l.jsxs("button",{onClick:()=>a(null),style:{background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-color)",color:"var(--text-muted)",padding:"8px 16px",borderRadius:"var(--radius-sm)",cursor:"pointer",fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"6px"},children:[l.jsx(Ls,{size:18}),"유형 목록으로 돌아가기"]})}),l.jsxs("div",{className:"glass-card",style:{padding:"36px",textAlign:"center",position:"relative",overflow:"hidden"},children:[l.jsx("div",{style:{position:"absolute",top:"-50px",right:"-50px",width:"200px",height:"200px",background:h.isCompleted?h.isPassed?"rgba(16, 185, 129, 0.15)":"rgba(245, 158, 11, 0.15)":"rgba(99, 102, 241, 0.12)",borderRadius:"50%",filter:"blur(40px)"}}),l.jsx("div",{style:{display:"inline-flex",padding:"12px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.05)",marginBottom:"16px"},children:h.isCompleted?l.jsx(kt,{size:48,color:h.isPassed?"var(--correct)":"#f59e0b"}):l.jsx(Ef,{size:48,color:"var(--primary)"})}),l.jsx("div",{style:{marginBottom:"12px"},children:l.jsx("span",{className:"badge badge-session",style:{fontSize:"0.95rem",padding:"6px 14px"},children:h.sessionName})}),l.jsx("h2",{style:{fontSize:"1.8rem",fontWeight:700,marginBottom:"8px"},children:h.isCompleted?h.isPassed?"🎉 합격 기준(60점) 달성!":"💪 조금 더 복습이 필요해요":h.answeredCount===0?"아직 풀이를 시작하지 않은 유형입니다":`📝 풀이가 진행 중인 유형입니다 (${h.answeredCount}/${h.totalQuestions}문제)`}),l.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"24px"},children:h.isCompleted?h.isPassed?"실기 합격 기준인 100점 환산 60점 이상을 달성하셨습니다!":"100점 환산 60점 미만입니다. 오답노트로 틀린 문제를 복습해 보세요.":h.answeredCount===0?"유형별 문제풀이 메뉴에서 모든 문제를 풀면 최종 결과를 확인할 수 있습니다.":`현재 ${h.totalQuestions}문제 중 ${h.answeredCount}문제를 풀어보셨습니다. 모든 문제를 풀면 최종 결과가 표시됩니다.`}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"16px",maxWidth:"700px",margin:"0 auto 24px auto"},children:[l.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.6)",padding:"16px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:[l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:"4px"},children:"점수 (100점 환산)"}),l.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:h.isCompleted?h.score>=60?"var(--correct)":"#f59e0b":"var(--text-main)"},children:[h.score,"점"]})]}),l.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.6)",padding:"16px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:[l.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:"4px"},children:"오답노트 등록"}),l.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:"#f59e0b"},children:[h.wrongCount,"개"]})]})]}),l.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[h.wrongCount>0&&l.jsxs("button",{className:"btn-primary",onClick:()=>r(h.sessionName),children:[l.jsx(En,{size:18}),"이 유형 오답노트 복습하기"]}),h.answeredCount>0&&l.jsxs("button",{className:"btn-secondary",onClick:()=>o(h.sessionName),style:{borderColor:"rgba(245, 158, 11, 0.4)",color:"#f59e0b"},children:[l.jsx(ta,{size:18}),"이 유형 풀이결과 초기화"]})]})]}),l.jsxs("div",{className:"glass-card",style:{padding:"28px"},children:[l.jsxs("h3",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"20px",display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx(bf,{size:20,color:"var(--primary)"}),h.sessionName," 주제별 정답률"]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Object.values(h.subjectStats).map(g=>{if(g.total===0)return null;const f=Math.round(g.correct/g.total*100);return l.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.4)",padding:"16px 20px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",alignItems:"center"},children:[l.jsx("div",{style:{fontWeight:600,fontSize:"0.95rem"},children:g.name}),l.jsxs("div",{style:{fontWeight:700,color:f>=60?"var(--correct)":"var(--warning)"},children:[f,"점 (",Bc(g.correct),"/",g.total,")"]})]}),l.jsx("div",{style:{background:"rgba(255, 255, 255, 0.08)",height:"8px",borderRadius:"4px",overflow:"hidden"},children:l.jsx("div",{style:{width:`${f}%`,height:"100%",background:f>=60?"var(--correct)":"var(--warning)",transition:"width 0.4s ease"}})})]},g.name)})})]}),l.jsx(or,{isOpen:u!==null,title:"유형 풀이 기록 초기화",message:`[${u}] 유형의 문제 풀이 기록이 모두 삭제됩니다. (기존 오답노트에 등록된 기록은 유지됩니다)`,confirmText:"초기화",cancelText:"취소",onConfirm:()=>{u&&(s(u),o(null))},onClose:()=>o(null)})]}):l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},className:"animate-fade-in",children:[l.jsxs("div",{className:"glass-card",style:{padding:"28px"},children:[l.jsxs("h3",{style:{fontSize:"1.3rem",fontWeight:700,marginBottom:"6px",display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx(Pf,{size:22,color:"var(--primary)"}),"유형별 성적 분석"]}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",marginBottom:"24px"},children:"유형별 문제풀이 기록을 기준으로 집계합니다. 원하는 유형의 상세보기에서 주제별 정답률을 확인하거나 해당 유형 풀이 기록을 초기화할 수 있습니다."}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"16px"},children:p.map(g=>l.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.6)",padding:"20px",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",gap:"14px",transition:"all 0.2s ease"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:"badge badge-session",children:g.sessionName}),l.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,padding:"4px 8px",borderRadius:"4px",background:g.statusBadgeBg,color:g.statusBadgeColor},children:g.statusBadgeText})]}),l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:"1.8rem",fontWeight:800,color:g.isCompleted?g.score>=60?"var(--correct)":"#f59e0b":"var(--text-main)"},children:[g.score,"점"]}),l.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginTop:"2px"},children:["풀이 ",g.answeredCount," / 총 ",g.totalQuestions,"문제 (오답노트 ",g.wrongCount,"개)"]})]}),l.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"auto",paddingTop:"8px"},children:[l.jsx("button",{className:"btn-primary",onClick:()=>a(g.sessionName),style:{flex:1,padding:"8px 12px",fontSize:"0.85rem"},children:"상세보기 →"}),g.answeredCount>0&&l.jsx("button",{className:"btn-secondary",onClick:()=>o(g.sessionName),style:{padding:"8px 12px",color:"#f59e0b",borderColor:"rgba(245, 158, 11, 0.3)"},title:"이 유형 초기화",children:l.jsx(ta,{size:16})})]})]},g.sessionName))})]}),l.jsx(or,{isOpen:u!==null,title:"유형 풀이 기록 초기화",message:`[${u}] 유형의 문제 풀이 기록이 모두 삭제됩니다. (기존 오답노트에 등록된 기록은 유지됩니다)`,confirmText:"초기화",cancelText:"취소",onConfirm:()=>{u&&(s(u),o(null))},onClose:()=>o(null)})]})}function C0({questions:e,bookmarks:n,onSubmitAnswer:t,onMarkCorrect:r,onToggleBookmark:s}){const[i,a]=P.useState(0),[u,o]=P.useState(0),[p,h]=P.useState({}),g=P.useMemo(()=>{const j=n.map(String);return e.filter(I=>j.includes(String(I.id)))},[e,n]),f=P.useMemo(()=>{const j=new Set(g.map(I=>I.subjectId));return Cn.filter(I=>j.has(I.id))},[g]),y=P.useMemo(()=>i===0?g:g.filter(j=>j.subjectId===i),[g,i]),v=j=>{a(j),o(0)};if(P.useEffect(()=>{u>=y.length&&y.length>0&&o(y.length-1)},[y.length,u]),g.length===0)return l.jsxs("div",{className:"glass-card animate-fade-in",style:{padding:"60px",textAlign:"center"},children:[l.jsx(lr,{size:48,style:{color:"var(--bookmark)",marginBottom:"16px"}}),l.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"8px"},children:"북마크한 문제가 없습니다."}),l.jsx("p",{style:{color:"var(--text-muted)"},children:"문제 풀이 중 중요하거나 헷갈리는 문제의 오른쪽 상단 북마크 아이콘을 눌러 추가해보세요!"})]});const S=y[u],M=S?p[S.id]:void 0,d=S?n.map(String).includes(String(S.id)):!1,c=y.length>0?Math.round((u+1)/y.length*100):0,m=(j,I,b)=>{S&&(h(E=>({...E,[S.id]:{inputs:j,isCorrect:I,manual:b,session:S.session,timestamp:new Date().toISOString()}})),t(String(S.id),I))},x=()=>{!S||!M||(h(j=>({...j,[S.id]:{...M,isCorrect:!0,manual:!0}})),r(String(S.id)))},C=()=>{S&&h(j=>{const I={...j};return delete I[S.id],I})};return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[l.jsxs("div",{className:"glass-card",style:{padding:"20px 28px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[l.jsx(lr,{size:22,color:"var(--bookmark)",fill:"var(--bookmark)"}),l.jsxs("h3",{style:{fontSize:"1.2rem",fontWeight:700},children:["북마크 문제 모음 (",y.length,"개)"]})]}),l.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[l.jsx("button",{className:`nav-btn ${i===0?"active":""}`,onClick:()=>v(0),style:{padding:"6px 12px",fontSize:"0.85rem"},children:"전체"}),f.map(j=>l.jsx("button",{className:`nav-btn ${i===j.id?"active":""}`,onClick:()=>v(j.id),style:{padding:"6px 12px",fontSize:"0.85rem"},children:j.name},j.id))]})]}),y.length===0?l.jsxs("div",{className:"glass-card",style:{padding:"60px",textAlign:"center"},children:[l.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"8px"},children:"선택한 주제에 저장된 북마크 문제가 없습니다."}),l.jsx("p",{style:{color:"var(--text-muted)"},children:"다른 주제 필터를 선택해 주세요."})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{background:"rgba(255, 255, 255, 0.05)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:l.jsx("div",{style:{height:"100%",width:`${c}%`,background:"linear-gradient(90deg, #eab308, #ca8a04)",transition:"width 0.3s ease"}})}),l.jsx(mr,{question:S,currentIndex:u,totalCount:y.length,userAnswer:M,isBookmarked:d,onSubmitAnswer:m,onMarkCorrect:x,onToggleBookmark:()=>s(String(S.id))},S.id),l.jsxs("div",{className:"footer-controls",children:[l.jsxs("div",{style:{display:"flex",gap:"12px"},children:[l.jsxs("button",{className:"btn-secondary",onClick:()=>o(j=>Math.max(0,j-1)),disabled:u===0,style:{opacity:u===0?.5:1,cursor:u===0?"not-allowed":"pointer"},children:[l.jsx(Ls,{size:18}),"이전문제"]}),l.jsxs("button",{className:"btn-primary",onClick:()=>o(j=>Math.min(y.length-1,j+1)),disabled:u===y.length-1,style:{background:"linear-gradient(135deg, #eab308, #ca8a04)",opacity:u===y.length-1?.5:1,cursor:u===y.length-1?"not-allowed":"pointer"},children:["다음문제",l.jsx(el,{size:18})]})]}),l.jsxs("button",{className:"btn-secondary",onClick:C,disabled:!M,style:{opacity:M?1:.5,cursor:M?"pointer":"not-allowed"},children:[l.jsx(En,{size:18}),"다시풀기"]})]})]})]})}function N0({questions:e,wrongAnswers:n,bookmarks:t,initialSession:r,onRemoveWrongAnswer:s,onToggleBookmark:i}){const[a,u]=P.useState(r||"all"),[o,p]=P.useState(0),[h,g]=P.useState(0),[f,y]=P.useState({});P.useEffect(()=>{u(r||"all"),p(0),g(0)},[r]);const v=P.useMemo(()=>e.filter(O=>n.includes(String(O.id))),[e,n]),S=P.useMemo(()=>{const O=Array.from(new Set(v.map(q=>q.session)));return[{value:"all",label:`전체 유형 (${v.length}개)`},...O.map(q=>{const k=v.filter(D=>D.session===q).length;return{value:q,label:`${q} (${k}개)`}})]},[v]),M=P.useMemo(()=>{const O=new Set(v.filter(q=>a==="all"||q.session===a).map(q=>q.subjectId));return Cn.filter(q=>O.has(q.id))},[v,a]),d=P.useMemo(()=>v.filter(O=>{const q=a==="all"||O.session===a,k=o===0||O.subjectId===o;return q&&k}),[v,a,o]),c=O=>{u(O),p(0),g(0)},m=O=>{p(O),g(0)};if(P.useEffect(()=>{h>=d.length&&d.length>0&&g(d.length-1)},[d.length,h]),v.length===0)return l.jsxs("div",{className:"glass-card animate-fade-in",style:{padding:"60px",textAlign:"center"},children:[l.jsx(xt,{size:56,style:{color:"var(--correct)",marginBottom:"20px"}}),l.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:700,marginBottom:"10px"},children:"오답 문제가 없습니다! 🎉"}),l.jsxs("p",{style:{color:"var(--text-muted)",lineHeight:"1.6"},children:["아직 등록된 오답 문제가 없거나, 오답노트에서 모두 제외하셨습니다.",l.jsx("br",{}),"문제풀이 메뉴에서 문제를 먼저 풀어보세요."]})]});const x=d[h],C=x?f[x.id]:void 0,j=x?t.map(String).includes(String(x.id)):!1,I=d.length>0?Math.round((h+1)/d.length*100):0,b=(O,q,k)=>{x&&y(D=>({...D,[x.id]:{inputs:O,isCorrect:q,manual:k,session:x.session,timestamp:new Date().toISOString()}}))},E=()=>{!x||!C||y(O=>({...O,[x.id]:{...C,isCorrect:!0,manual:!0}}))},A=()=>{x&&y(O=>{const q={...O};return delete q[x.id],q})},U=()=>{x&&(A(),s(String(x.id)))},W=l.jsxs("div",{className:"glass-card",style:{padding:"18px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px",position:"relative",zIndex:50},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flex:"1"},children:[l.jsx("label",{style:{fontSize:"0.9rem",fontWeight:600,color:"var(--text-muted)",whiteSpace:"nowrap"},children:"유형 선택:"}),l.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:l.jsx(Uc,{options:S,value:a,onChange:c,placeholder:"문제 유형을 선택해주세요"})})]}),l.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[l.jsx("button",{className:`nav-btn ${o===0?"active":""}`,onClick:()=>m(0),style:{padding:"6px 12px",fontSize:"0.85rem"},children:"전체 주제"}),M.map(O=>l.jsx("button",{className:`nav-btn ${o===O.id?"active":""}`,onClick:()=>m(O.id),style:{padding:"6px 12px",fontSize:"0.85rem"},children:O.name},O.id))]})]});return d.length?l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[W,l.jsx("div",{style:{background:"rgba(255, 255, 255, 0.05)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:l.jsx("div",{style:{height:"100%",width:`${I}%`,background:"linear-gradient(90deg, #f43f5e, #f59e0b)",transition:"width 0.3s ease"}})}),l.jsx(mr,{question:x,currentIndex:h,totalCount:d.length,userAnswer:C,isBookmarked:j,onSubmitAnswer:b,onMarkCorrect:E,onToggleBookmark:()=>i(String(x.id))},x.id),l.jsxs("div",{className:"footer-controls",style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"space-between"},children:[l.jsxs("div",{style:{display:"flex",gap:"12px"},children:[l.jsx("button",{className:"btn-secondary",onClick:()=>g(O=>Math.max(0,O-1)),disabled:h===0,style:{opacity:h===0?.5:1,cursor:h===0?"not-allowed":"pointer"},children:"이전문제"}),l.jsx("button",{className:"btn-primary",onClick:()=>g(O=>Math.min(d.length-1,O+1)),disabled:h===d.length-1,style:{opacity:h===d.length-1?.5:1,cursor:h===d.length-1?"not-allowed":"pointer",background:"linear-gradient(135deg, #f43f5e, #e11d48)"},children:"다음문제"})]}),l.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[l.jsxs("button",{className:"btn-secondary",onClick:A,disabled:!C,style:{opacity:C?1:.5,cursor:C?"pointer":"not-allowed"},children:[l.jsx(En,{size:18}),"다시풀기"]}),l.jsxs("button",{className:"btn-secondary",onClick:U,style:{borderColor:"rgba(244, 63, 94, 0.4)",color:"#f43f5e",display:"flex",alignItems:"center",gap:"6px"},title:"이 문제를 오답 목록에서 제외합니다",children:[l.jsx(ta,{size:18}),"오답 제외하기"]})]})]})]}):l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[W,l.jsxs("div",{className:"glass-card",style:{padding:"60px",textAlign:"center"},children:[l.jsx(Mc,{size:48,style:{color:"var(--text-muted)",marginBottom:"16px"}}),l.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"8px"},children:"해당 조건의 오답 문제가 없습니다."}),l.jsx("p",{style:{color:"var(--text-muted)"},children:"다른 유형이나 주제 필터를 선택해 주세요."})]})]})}function I0(){const[e,n]=P.useState([]),[t,r]=P.useState([]),[s,i]=P.useState({}),[a,u]=P.useState([]),[o,p]=P.useState("home"),[h,g]=P.useState("all"),[f,y]=P.useState({date:"",total:0,correct:0,wrong:0}),[v,S]=P.useState(!1),M=P.useRef([]);P.useEffect(()=>{const k=i0(),D=Oc(),B=Ds(),w=tl();n(k),r(D),i(B),y(w),u(u0())},[]);const d=k=>{u(k),c0(k)},c=(k,D,B,w,L)=>{const _=l0(k,D,B,w,L);i({..._}),m(k,B)},m=(k,D)=>{const B=d0(D);y(B),!D&&!a.includes(String(k))&&d([...a,String(k)])},x=k=>{y(p0()),a.includes(String(k))&&d(a.filter(D=>D!==String(k)))},C=k=>{i({...o0(k)}),x(k)},j=()=>{const k=f0();y(k)},I=k=>{const D=a.filter(B=>B!==String(k));d(D)},b=k=>{const D=mo(k);i({...D})},E=k=>{const D=e.filter(w=>w.session===k).map(w=>w.id);let B={...s};D.forEach(w=>{B=mo(w)}),i({...B})},A=k=>{const D=a0(k);r([...D])},U=()=>{p("result")},W=k=>{g(k||"all"),p("wrong")},O=()=>{const k=Date.now(),D=M.current.filter(B=>k-B<=5e3);D.push(k),M.current=D,D.length>=30&&(S(!0),M.current=[])},q={home:"메인 홈",random:"랜덤문제 풀이",quiz:"유형별 문제풀이",subject:"주제별 문제풀이",wrong:"오답노트",bookmark:"북마크 문제풀이",result:"풀이결과"};return l.jsxs("div",{className:"app-container",children:[l.jsx(Lf,{activeTab:o,setActiveTab:p}),o!=="home"&&l.jsxs("div",{style:{marginBottom:"20px",display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("button",{onClick:()=>p("home"),style:{background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-color)",color:"var(--text-muted)",padding:"6px 14px",borderRadius:"var(--radius-sm)",cursor:"pointer",fontSize:"0.88rem",display:"flex",alignItems:"center",gap:"6px"},children:"← 홈으로"}),l.jsx("h2",{style:{fontSize:"1.3rem",fontWeight:700,color:"var(--text-main)"},children:q[o]})]}),l.jsxs("main",{className:"main-content",children:[o==="home"&&l.jsx(m0,{setActiveTab:p,questions:e,userAnswers:s,bookmarkCount:t.length,wrongAnswers:a,dailyStats:f,onResetDailyStats:j}),o==="random"&&l.jsx(b0,{questions:e,bookmarks:t,onSubmitAnswer:m,onMarkCorrect:x,onToggleBookmark:A,onFinishQuiz:U}),o==="quiz"&&l.jsx(k0,{questions:e,userAnswers:s,bookmarks:t,onSubmitAnswer:c,onMarkCorrect:C,onResetAnswer:b,onToggleBookmark:A,onFinishQuiz:U}),o==="subject"&&l.jsx(w0,{questions:e,bookmarks:t,onSubmitAnswer:m,onMarkCorrect:x,onToggleBookmark:A,onFinishQuiz:U}),o==="wrong"&&l.jsx(N0,{questions:e,wrongAnswers:a,bookmarks:t,initialSession:h,onRemoveWrongAnswer:I,onToggleBookmark:A}),o==="result"&&l.jsx(j0,{questions:e,userAnswers:s,wrongAnswers:a,onRetryWrongQuestions:W,onResetSessionAnswers:E}),o==="bookmark"&&l.jsx(C0,{questions:e,bookmarks:t,onSubmitAnswer:m,onMarkCorrect:x,onToggleBookmark:A})]}),l.jsx("footer",{onClick:O,style:{padding:"70px 0",textAlign:"center",color:"var(--text-dim)",fontSize:"0.85rem",cursor:"pointer",userSelect:"none",WebkitUserSelect:"none",WebkitTapHighlightColor:"transparent"},children:"정보처리기사 실기 마스터 • TypeScript + Vite + React"}),l.jsx(or,{isOpen:v,type:"info",title:"개발자 정보 🚀",confirmText:"확인",showCancel:!1,onConfirm:()=>S(!1),onClose:()=>S(!1),children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",background:"rgba(15, 23, 42, 0.6)",padding:"16px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)",fontWeight:600},children:"만든이"}),l.jsx("span",{style:{fontSize:"1rem",color:"var(--text-main)",fontWeight:700},children:"김형태"})]}),l.jsx("div",{style:{height:"1px",background:"var(--border-color)"}}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)",fontWeight:600},children:"Email"}),l.jsx("a",{href:"mailto:quantickim@gmail.com",style:{fontSize:"0.9rem",color:"#38bdf8",textDecoration:"none",fontWeight:600},children:"quantickim@gmail.com"})]})]})})]})}oi.createRoot(document.getElementById("root")).render(l.jsx(sd.StrictMode,{children:l.jsx(I0,{})}));
