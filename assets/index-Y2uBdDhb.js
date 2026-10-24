(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function Hu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bl={exports:{}},yr={},wl={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=Symbol.for("react.element"),qu=Symbol.for("react.portal"),Wu=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),Ju=Symbol.for("react.provider"),$u=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),Ku=Symbol.for("react.suspense"),Yu=Symbol.for("react.memo"),Xu=Symbol.for("react.lazy"),so=Symbol.iterator;function Zu(e){return e===null||typeof e!="object"?null:(e=so&&e[so]||e["@@iterator"],typeof e=="function"?e:null)}var kl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nl=Object.assign,jl={};function vt(e,n,t){this.props=e,this.context=n,this.refs=jl,this.updater=t||kl}vt.prototype.isReactComponent={};vt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};vt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cl(){}Cl.prototype=vt.prototype;function ii(e,n,t){this.props=e,this.context=n,this.refs=jl,this.updater=t||kl}var oi=ii.prototype=new Cl;oi.constructor=ii;Nl(oi,vt.prototype);oi.isPureReactComponent=!0;var ro=Array.isArray,Il=Object.prototype.hasOwnProperty,li={current:null},Al={key:!0,ref:!0,__self:!0,__source:!0};function El(e,n,t){var s,r={},a=null,i=null;if(n!=null)for(s in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(a=""+n.key),n)Il.call(n,s)&&!Al.hasOwnProperty(s)&&(r[s]=n[s]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)r[s]===void 0&&(r[s]=l[s]);return{$$typeof:cs,type:e,key:a,ref:i,props:r,_owner:li.current}}function ed(e,n){return{$$typeof:cs,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ci(e){return typeof e=="object"&&e!==null&&e.$$typeof===cs}function nd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ao=/\/+/g;function Dr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?nd(""+e.key):n.toString(36)}function Rs(e,n,t,s,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case cs:case qu:i=!0}}if(i)return i=e,r=r(i),e=s===""?"."+Dr(i,0):s,ro(r)?(t="",e!=null&&(t=e.replace(ao,"$&/")+"/"),Rs(r,n,t,"",function(u){return u})):r!=null&&(ci(r)&&(r=ed(r,t+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(ao,"$&/")+"/")+e)),n.push(r)),1;if(i=0,s=s===""?".":s+":",ro(e))for(var l=0;l<e.length;l++){a=e[l];var c=s+Dr(a,l);i+=Rs(a,n,t,c,r)}else if(c=Zu(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=s+Dr(a,l++),i+=Rs(a,n,t,c,r);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function hs(e,n,t){if(e==null)return e;var s=[],r=0;return Rs(e,s,"","",function(a){return n.call(t,a,r++)}),s}function td(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Ls={transition:null},sd={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Ls,ReactCurrentOwner:li};function Pl(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:hs,forEach:function(e,n,t){hs(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return hs(e,function(){n++}),n},toArray:function(e){return hs(e,function(n){return n})||[]},only:function(e){if(!ci(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=vt;F.Fragment=Wu;F.Profiler=Gu;F.PureComponent=ii;F.StrictMode=Vu;F.Suspense=Ku;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sd;F.act=Pl;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Nl({},e.props),r=e.key,a=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,i=li.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)Il.call(n,c)&&!Al.hasOwnProperty(c)&&(s[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)s.children=t;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:cs,type:e.type,key:r,ref:a,props:s,_owner:i}};F.createContext=function(e){return e={$$typeof:$u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ju,_context:e},e.Consumer=e};F.createElement=El;F.createFactory=function(e){var n=El.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Qu,render:e}};F.isValidElement=ci;F.lazy=function(e){return{$$typeof:Xu,_payload:{_status:-1,_result:e},_init:td}};F.memo=function(e,n){return{$$typeof:Yu,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=Ls.transition;Ls.transition={};try{e()}finally{Ls.transition=n}};F.unstable_act=Pl;F.useCallback=function(e,n){return xe.current.useCallback(e,n)};F.useContext=function(e){return xe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};F.useEffect=function(e,n){return xe.current.useEffect(e,n)};F.useId=function(){return xe.current.useId()};F.useImperativeHandle=function(e,n,t){return xe.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return xe.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return xe.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return xe.current.useMemo(e,n)};F.useReducer=function(e,n,t){return xe.current.useReducer(e,n,t)};F.useRef=function(e){return xe.current.useRef(e)};F.useState=function(e){return xe.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return xe.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return xe.current.useTransition()};F.version="18.3.1";wl.exports=F;var E=wl.exports;const rd=Hu(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=E,id=Symbol.for("react.element"),od=Symbol.for("react.fragment"),ld=Object.prototype.hasOwnProperty,cd=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ud={key:!0,ref:!0,__self:!0,__source:!0};function Tl(e,n,t){var s,r={},a=null,i=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(i=n.ref);for(s in n)ld.call(n,s)&&!ud.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)r[s]===void 0&&(r[s]=n[s]);return{$$typeof:id,type:e,key:a,ref:i,props:r,_owner:cd.current}}yr.Fragment=od;yr.jsx=Tl;yr.jsxs=Tl;bl.exports=yr;var o=bl.exports,la={},Rl={exports:{}},Te={},Ll={exports:{}},Ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(k,L){var B=k.length;k.push(L);e:for(;0<B;){var T=B-1>>>1,_=k[T];if(0<r(_,L))k[T]=L,k[B]=_,B=T;else break e}}function t(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var L=k[0],B=k.pop();if(B!==L){k[0]=B;e:for(var T=0,_=k.length,ue=_>>>1;T<ue;){var he=2*(T+1)-1,cn=k[he],Ge=he+1,Se=k[Ge];if(0>r(cn,B))Ge<_&&0>r(Se,cn)?(k[T]=Se,k[Ge]=B,T=Ge):(k[T]=cn,k[he]=B,T=he);else if(Ge<_&&0>r(Se,B))k[T]=Se,k[Ge]=B,T=Ge;else break e}}return L}function r(k,L){var B=k.sortIndex-L.sortIndex;return B!==0?B:k.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],m=1,h=null,f=3,y=!1,v=!1,S=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(k){for(var L=t(u);L!==null;){if(L.callback===null)s(u);else if(L.startTime<=k)s(u),L.sortIndex=L.expirationTime,n(c,L);else break;L=t(u)}}function x(k){if(S=!1,g(k),!v)if(t(c)!==null)v=!0,O(j);else{var L=t(u);L!==null&&U(x,L.startTime-k)}}function j(k,L){v=!1,S&&(S=!1,p(b),b=-1),y=!0;var B=f;try{for(g(L),h=t(c);h!==null&&(!(h.expirationTime>L)||k&&!z());){var T=h.callback;if(typeof T=="function"){h.callback=null,f=h.priorityLevel;var _=T(h.expirationTime<=L);L=e.unstable_now(),typeof _=="function"?h.callback=_:h===t(c)&&s(c),g(L)}else s(c);h=t(c)}if(h!==null)var ue=!0;else{var he=t(u);he!==null&&U(x,he.startTime-L),ue=!1}return ue}finally{h=null,f=B,y=!1}}var N=!1,I=null,b=-1,A=5,P=-1;function z(){return!(e.unstable_now()-P<A)}function q(){if(I!==null){var k=e.unstable_now();P=k;var L=!0;try{L=I(!0,k)}finally{L?M():(N=!1,I=null)}}else N=!1}var M;if(typeof d=="function")M=function(){d(q)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,w=W.port2;W.port1.onmessage=q,M=function(){w.postMessage(null)}}else M=function(){D(q,0)};function O(k){I=k,N||(N=!0,M())}function U(k,L){b=D(function(){k(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,O(j))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(k){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var B=f;f=L;try{return k()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,L){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var B=f;f=k;try{return L()}finally{f=B}},e.unstable_scheduleCallback=function(k,L,B){var T=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?T+B:T):B=T,k){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=B+_,k={id:m++,callback:L,priorityLevel:k,startTime:B,expirationTime:_,sortIndex:-1},B>T?(k.sortIndex=B,n(u,k),t(c)===null&&k===t(u)&&(S?(p(b),b=-1):S=!0,U(x,B-T))):(k.sortIndex=_,n(c,k),v||y||(v=!0,O(j))),k},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(k){var L=f;return function(){var B=f;f=L;try{return k.apply(this,arguments)}finally{f=B}}}})(Ol);Ll.exports=Ol;var dd=Ll.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=E,Pe=dd;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dl=new Set,Wt={};function Wn(e,n){dt(e,n),dt(e+"Capture",n)}function dt(e,n){for(Wt[e]=n,e=0;e<n.length;e++)Dl.add(n[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ca=Object.prototype.hasOwnProperty,fd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,io={},oo={};function md(e){return ca.call(oo,e)?!0:ca.call(io,e)?!1:fd.test(e)?oo[e]=!0:(io[e]=!0,!1)}function hd(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gd(e,n,t,s){if(n===null||typeof n>"u"||hd(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,s,r,a,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=i}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ui=/[\-:]([a-z])/g;function di(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ui,di);ce[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ui,di);ce[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ui,di);ce[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function pi(e,n,t,s){var r=ce.hasOwnProperty(n)?ce[n]:null;(r!==null?r.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(gd(n,t,r,s)&&(t=null),s||r===null?md(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,s=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var ln=pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gs=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),fi=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),Ml=Symbol.for("react.provider"),Bl=Symbol.for("react.context"),mi=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),hi=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),_l=Symbol.for("react.offscreen"),lo=Symbol.iterator;function kt(e){return e===null||typeof e!="object"?null:(e=lo&&e[lo]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Mr;function Tt(e){if(Mr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Mr=n&&n[1]||""}return`
`+Mr+e}var Br=!1;function _r(e,n){if(!e||Br)return"";Br=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var s=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){s=u}e.call(n.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),a=s.stack.split(`
`),i=r.length-1,l=a.length-1;1<=i&&0<=l&&r[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(r[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||r[i]!==a[l]){var c=`
`+r[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{Br=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Tt(e):""}function yd(e){switch(e.tag){case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 2:case 15:return e=_r(e.type,!1),e;case 11:return e=_r(e.type.render,!1),e;case 1:return e=_r(e.type,!0),e;default:return""}}function fa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case Jn:return"Portal";case ua:return"Profiler";case fi:return"StrictMode";case da:return"Suspense";case pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bl:return(e.displayName||"Context")+".Consumer";case Ml:return(e._context.displayName||"Context")+".Provider";case mi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hi:return n=e.displayName||null,n!==null?n:fa(e.type)||"Memo";case dn:n=e._payload,e=e._init;try{return fa(e(n))}catch{}}return null}function xd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fa(n);case 8:return n===fi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ul(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vd(e){var n=Ul(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(i){s=""+i,a.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(i){s=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ys(e){e._valueTracker||(e._valueTracker=vd(e))}function Fl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=Ul(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function Vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ma(e,n){var t=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function co(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=Cn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function zl(e,n){n=n.checked,n!=null&&pi(e,"checked",n,!1)}function ha(e,n){zl(e,n);var t=Cn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ga(e,n.type,t):n.hasOwnProperty("defaultValue")&&ga(e,n.type,Cn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function uo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ga(e,n,t){(n!=="number"||Vs(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Rt=Array.isArray;function at(e,n,t,s){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&s&&(e[t].defaultSelected=!0)}else{for(t=""+Cn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ya(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function po(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(Rt(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Cn(t)}}function Hl(e,n){var t=Cn(n.value),s=Cn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function fo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ql(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ql(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xs,Wl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xs=xs||document.createElement("div"),xs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Vt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sd=["Webkit","ms","Moz","O"];Object.keys(Dt).forEach(function(e){Sd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Dt[n]=Dt[e]})});function Vl(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Dt.hasOwnProperty(e)&&Dt[e]?(""+n).trim():n+"px"}function Gl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=Vl(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,r):e[t]=r}}var bd=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(e,n){if(n){if(bd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function Sa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function gi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wa=null,it=null,ot=null;function mo(e){if(e=ps(e)){if(typeof wa!="function")throw Error(C(280));var n=e.stateNode;n&&(n=wr(n),wa(e.stateNode,e.type,n))}}function Jl(e){it?ot?ot.push(e):ot=[e]:it=e}function $l(){if(it){var e=it,n=ot;if(ot=it=null,mo(e),n)for(e=0;e<n.length;e++)mo(n[e])}}function Ql(e,n){return e(n)}function Kl(){}var Ur=!1;function Yl(e,n,t){if(Ur)return e(n,t);Ur=!0;try{return Ql(e,n,t)}finally{Ur=!1,(it!==null||ot!==null)&&(Kl(),$l())}}function Gt(e,n){var t=e.stateNode;if(t===null)return null;var s=wr(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var ka=!1;if(sn)try{var Nt={};Object.defineProperty(Nt,"passive",{get:function(){ka=!0}}),window.addEventListener("test",Nt,Nt),window.removeEventListener("test",Nt,Nt)}catch{ka=!1}function wd(e,n,t,s,r,a,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(m){this.onError(m)}}var Mt=!1,Gs=null,Js=!1,Na=null,kd={onError:function(e){Mt=!0,Gs=e}};function Nd(e,n,t,s,r,a,i,l,c){Mt=!1,Gs=null,wd.apply(kd,arguments)}function jd(e,n,t,s,r,a,i,l,c){if(Nd.apply(this,arguments),Mt){if(Mt){var u=Gs;Mt=!1,Gs=null}else throw Error(C(198));Js||(Js=!0,Na=u)}}function Vn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Xl(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ho(e){if(Vn(e)!==e)throw Error(C(188))}function Cd(e){var n=e.alternate;if(!n){if(n=Vn(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,s=n;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return ho(r),e;if(a===s)return ho(r),n;a=a.sibling}throw Error(C(188))}if(t.return!==s.return)t=r,s=a;else{for(var i=!1,l=r.child;l;){if(l===t){i=!0,t=r,s=a;break}if(l===s){i=!0,s=r,t=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===t){i=!0,t=a,s=r;break}if(l===s){i=!0,s=a,t=r;break}l=l.sibling}if(!i)throw Error(C(189))}}if(t.alternate!==s)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function Zl(e){return e=Cd(e),e!==null?ec(e):null}function ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ec(e);if(n!==null)return n;e=e.sibling}return null}var nc=Pe.unstable_scheduleCallback,go=Pe.unstable_cancelCallback,Id=Pe.unstable_shouldYield,Ad=Pe.unstable_requestPaint,ne=Pe.unstable_now,Ed=Pe.unstable_getCurrentPriorityLevel,yi=Pe.unstable_ImmediatePriority,tc=Pe.unstable_UserBlockingPriority,$s=Pe.unstable_NormalPriority,Pd=Pe.unstable_LowPriority,sc=Pe.unstable_IdlePriority,xr=null,Ke=null;function Td(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(xr,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Od,Rd=Math.log,Ld=Math.LN2;function Od(e){return e>>>=0,e===0?32:31-(Rd(e)/Ld|0)|0}var vs=64,Ss=4194304;function Lt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qs(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,r=e.suspendedLanes,a=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~r;l!==0?s=Lt(l):(a&=i,a!==0&&(s=Lt(a)))}else i=t&~r,i!==0?s=Lt(i):a!==0&&(s=Lt(a));if(s===0)return 0;if(n!==0&&n!==s&&!(n&r)&&(r=s&-s,a=n&-n,r>=a||r===16&&(a&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-qe(n),r=1<<t,s|=e[t],n&=~r;return s}function Dd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Md(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-qe(a),l=1<<i,c=r[i];c===-1?(!(l&t)||l&s)&&(r[i]=Dd(l,n)):c<=n&&(e.expiredLanes|=l),a&=~l}}function ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rc(){var e=vs;return vs<<=1,!(vs&4194240)&&(vs=64),e}function Fr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function us(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-qe(n),e[n]=t}function Bd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-qe(t),a=1<<r;n[r]=0,s[r]=-1,e[r]=-1,t&=~a}}function xi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-qe(t),r=1<<s;r&n|e[s]&n&&(e[s]|=n),t&=~r}}var V=0;function ac(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ic,vi,oc,lc,cc,Ca=!1,bs=[],yn=null,xn=null,vn=null,Jt=new Map,$t=new Map,fn=[],_d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yo(e,n){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$t.delete(n.pointerId)}}function jt(e,n,t,s,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:a,targetContainers:[r]},n!==null&&(n=ps(n),n!==null&&vi(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Ud(e,n,t,s,r){switch(n){case"focusin":return yn=jt(yn,e,n,t,s,r),!0;case"dragenter":return xn=jt(xn,e,n,t,s,r),!0;case"mouseover":return vn=jt(vn,e,n,t,s,r),!0;case"pointerover":var a=r.pointerId;return Jt.set(a,jt(Jt.get(a)||null,e,n,t,s,r)),!0;case"gotpointercapture":return a=r.pointerId,$t.set(a,jt($t.get(a)||null,e,n,t,s,r)),!0}return!1}function uc(e){var n=On(e.target);if(n!==null){var t=Vn(n);if(t!==null){if(n=t.tag,n===13){if(n=Xl(t),n!==null){e.blockedOn=n,cc(e.priority,function(){oc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Os(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ia(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);ba=s,t.target.dispatchEvent(s),ba=null}else return n=ps(t),n!==null&&vi(n),e.blockedOn=t,!1;n.shift()}return!0}function xo(e,n,t){Os(e)&&t.delete(n)}function Fd(){Ca=!1,yn!==null&&Os(yn)&&(yn=null),xn!==null&&Os(xn)&&(xn=null),vn!==null&&Os(vn)&&(vn=null),Jt.forEach(xo),$t.forEach(xo)}function Ct(e,n){e.blockedOn===n&&(e.blockedOn=null,Ca||(Ca=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Fd)))}function Qt(e){function n(r){return Ct(r,e)}if(0<bs.length){Ct(bs[0],e);for(var t=1;t<bs.length;t++){var s=bs[t];s.blockedOn===e&&(s.blockedOn=null)}}for(yn!==null&&Ct(yn,e),xn!==null&&Ct(xn,e),vn!==null&&Ct(vn,e),Jt.forEach(n),$t.forEach(n),t=0;t<fn.length;t++)s=fn[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<fn.length&&(t=fn[0],t.blockedOn===null);)uc(t),t.blockedOn===null&&fn.shift()}var lt=ln.ReactCurrentBatchConfig,Ks=!0;function zd(e,n,t,s){var r=V,a=lt.transition;lt.transition=null;try{V=1,Si(e,n,t,s)}finally{V=r,lt.transition=a}}function Hd(e,n,t,s){var r=V,a=lt.transition;lt.transition=null;try{V=4,Si(e,n,t,s)}finally{V=r,lt.transition=a}}function Si(e,n,t,s){if(Ks){var r=Ia(e,n,t,s);if(r===null)Kr(e,n,s,Ys,t),yo(e,s);else if(Ud(r,e,n,t,s))s.stopPropagation();else if(yo(e,s),n&4&&-1<_d.indexOf(e)){for(;r!==null;){var a=ps(r);if(a!==null&&ic(a),a=Ia(e,n,t,s),a===null&&Kr(e,n,s,Ys,t),a===r)break;r=a}r!==null&&s.stopPropagation()}else Kr(e,n,s,null,t)}}var Ys=null;function Ia(e,n,t,s){if(Ys=null,e=gi(s),e=On(e),e!==null)if(n=Vn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Xl(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ys=e,null}function dc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ed()){case yi:return 1;case tc:return 4;case $s:case Pd:return 16;case sc:return 536870912;default:return 16}default:return 16}}var hn=null,bi=null,Ds=null;function pc(){if(Ds)return Ds;var e,n=bi,t=n.length,s,r="value"in hn?hn.value:hn.textContent,a=r.length;for(e=0;e<t&&n[e]===r[e];e++);var i=t-e;for(s=1;s<=i&&n[t-s]===r[a-s];s++);return Ds=r.slice(e,1<s?1-s:void 0)}function Ms(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ws(){return!0}function vo(){return!1}function Re(e){function n(t,s,r,a,i){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ws:vo,this.isPropagationStopped=vo,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ws)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ws)},persist:function(){},isPersistent:ws}),n}var St={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=Re(St),ds=Z({},St,{view:0,detail:0}),qd=Re(ds),zr,Hr,It,vr=Z({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ki,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==It&&(It&&e.type==="mousemove"?(zr=e.screenX-It.screenX,Hr=e.screenY-It.screenY):Hr=zr=0,It=e),zr)},movementY:function(e){return"movementY"in e?e.movementY:Hr}}),So=Re(vr),Wd=Z({},vr,{dataTransfer:0}),Vd=Re(Wd),Gd=Z({},ds,{relatedTarget:0}),qr=Re(Gd),Jd=Z({},St,{animationName:0,elapsedTime:0,pseudoElement:0}),$d=Re(Jd),Qd=Z({},St,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kd=Re(Qd),Yd=Z({},St,{data:0}),bo=Re(Yd),Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function np(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ep[e])?!!n[e]:!1}function ki(){return np}var tp=Z({},ds,{key:function(e){if(e.key){var n=Xd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ki,charCode:function(e){return e.type==="keypress"?Ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sp=Re(tp),rp=Z({},vr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wo=Re(rp),ap=Z({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ki}),ip=Re(ap),op=Z({},St,{propertyName:0,elapsedTime:0,pseudoElement:0}),lp=Re(op),cp=Z({},vr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),up=Re(cp),dp=[9,13,27,32],Ni=sn&&"CompositionEvent"in window,Bt=null;sn&&"documentMode"in document&&(Bt=document.documentMode);var pp=sn&&"TextEvent"in window&&!Bt,fc=sn&&(!Ni||Bt&&8<Bt&&11>=Bt),ko=" ",No=!1;function mc(e,n){switch(e){case"keyup":return dp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function fp(e,n){switch(e){case"compositionend":return hc(n);case"keypress":return n.which!==32?null:(No=!0,ko);case"textInput":return e=n.data,e===ko&&No?null:e;default:return null}}function mp(e,n){if(Qn)return e==="compositionend"||!Ni&&mc(e,n)?(e=pc(),Ds=bi=hn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fc&&n.locale!=="ko"?null:n.data;default:return null}}var hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hp[e.type]:n==="textarea"}function gc(e,n,t,s){Jl(s),n=Xs(n,"onChange"),0<n.length&&(t=new wi("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var _t=null,Kt=null;function gp(e){Ic(e,0)}function Sr(e){var n=Xn(e);if(Fl(n))return e}function yp(e,n){if(e==="change")return n}var yc=!1;if(sn){var Wr;if(sn){var Vr="oninput"in document;if(!Vr){var Co=document.createElement("div");Co.setAttribute("oninput","return;"),Vr=typeof Co.oninput=="function"}Wr=Vr}else Wr=!1;yc=Wr&&(!document.documentMode||9<document.documentMode)}function Io(){_t&&(_t.detachEvent("onpropertychange",xc),Kt=_t=null)}function xc(e){if(e.propertyName==="value"&&Sr(Kt)){var n=[];gc(n,Kt,e,gi(e)),Yl(gp,n)}}function xp(e,n,t){e==="focusin"?(Io(),_t=n,Kt=t,_t.attachEvent("onpropertychange",xc)):e==="focusout"&&Io()}function vp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sr(Kt)}function Sp(e,n){if(e==="click")return Sr(n)}function bp(e,n){if(e==="input"||e==="change")return Sr(n)}function wp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ve=typeof Object.is=="function"?Object.is:wp;function Yt(e,n){if(Ve(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!ca.call(n,r)||!Ve(e[r],n[r]))return!1}return!0}function Ao(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eo(e,n){var t=Ao(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ao(t)}}function vc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sc(){for(var e=window,n=Vs();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Vs(e.document)}return n}function ji(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function kp(e){var n=Sc(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&vc(t.ownerDocument.documentElement,t)){if(s!==null&&ji(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,a=Math.min(s.start,r);s=s.end===void 0?a:Math.min(s.end,r),!e.extend&&a>s&&(r=s,s=a,a=r),r=Eo(t,a);var i=Eo(t,s);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),a>s?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Np=sn&&"documentMode"in document&&11>=document.documentMode,Kn=null,Aa=null,Ut=null,Ea=!1;function Po(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ea||Kn==null||Kn!==Vs(s)||(s=Kn,"selectionStart"in s&&ji(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ut&&Yt(Ut,s)||(Ut=s,s=Xs(Aa,"onSelect"),0<s.length&&(n=new wi("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=Kn)))}function ks(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Yn={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionend:ks("Transition","TransitionEnd")},Gr={},bc={};sn&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function br(e){if(Gr[e])return Gr[e];if(!Yn[e])return e;var n=Yn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in bc)return Gr[e]=n[t];return e}var wc=br("animationend"),kc=br("animationiteration"),Nc=br("animationstart"),jc=br("transitionend"),Cc=new Map,To="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,n){Cc.set(e,n),Wn(n,[e])}for(var Jr=0;Jr<To.length;Jr++){var $r=To[Jr],jp=$r.toLowerCase(),Cp=$r[0].toUpperCase()+$r.slice(1);En(jp,"on"+Cp)}En(wc,"onAnimationEnd");En(kc,"onAnimationIteration");En(Nc,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(jc,"onTransitionEnd");dt("onMouseEnter",["mouseout","mouseover"]);dt("onMouseLeave",["mouseout","mouseover"]);dt("onPointerEnter",["pointerout","pointerover"]);dt("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ot="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ot));function Ro(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,jd(s,n,void 0,e),e.currentTarget=null}function Ic(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],r=s.event;s=s.listeners;e:{var a=void 0;if(n)for(var i=s.length-1;0<=i;i--){var l=s[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&r.isPropagationStopped())break e;Ro(r,l,u),a=c}else for(i=0;i<s.length;i++){if(l=s[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&r.isPropagationStopped())break e;Ro(r,l,u),a=c}}}if(Js)throw e=Na,Js=!1,Na=null,e}function $(e,n){var t=n[Oa];t===void 0&&(t=n[Oa]=new Set);var s=e+"__bubble";t.has(s)||(Ac(n,e,2,!1),t.add(s))}function Qr(e,n,t){var s=0;n&&(s|=4),Ac(t,e,s,n)}var Ns="_reactListening"+Math.random().toString(36).slice(2);function Xt(e){if(!e[Ns]){e[Ns]=!0,Dl.forEach(function(t){t!=="selectionchange"&&(Ip.has(t)||Qr(t,!1,e),Qr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ns]||(n[Ns]=!0,Qr("selectionchange",!1,n))}}function Ac(e,n,t,s){switch(dc(n)){case 1:var r=zd;break;case 4:r=Hd;break;default:r=Si}t=r.bind(null,n,t,e),r=void 0,!ka||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Kr(e,n,t,s,r){var a=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var i=s.tag;if(i===3||i===4){var l=s.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(i===4)for(i=s.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;i=i.return}for(;l!==null;){if(i=On(l),i===null)return;if(c=i.tag,c===5||c===6){s=a=i;continue e}l=l.parentNode}}s=s.return}Yl(function(){var u=a,m=gi(t),h=[];e:{var f=Cc.get(e);if(f!==void 0){var y=wi,v=e;switch(e){case"keypress":if(Ms(t)===0)break e;case"keydown":case"keyup":y=sp;break;case"focusin":v="focus",y=qr;break;case"focusout":v="blur",y=qr;break;case"beforeblur":case"afterblur":y=qr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=So;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ip;break;case wc:case kc:case Nc:y=$d;break;case jc:y=lp;break;case"scroll":y=qd;break;case"wheel":y=up;break;case"copy":case"cut":case"paste":y=Kd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=wo}var S=(n&4)!==0,D=!S&&e==="scroll",p=S?f!==null?f+"Capture":null:f;S=[];for(var d=u,g;d!==null;){g=d;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,p!==null&&(x=Gt(d,p),x!=null&&S.push(Zt(d,x,g)))),D)break;d=d.return}0<S.length&&(f=new y(f,v,null,t,m),h.push({event:f,listeners:S}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&t!==ba&&(v=t.relatedTarget||t.fromElement)&&(On(v)||v[rn]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=u,v=v?On(v):null,v!==null&&(D=Vn(v),v!==D||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(S=So,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=wo,x="onPointerLeave",p="onPointerEnter",d="pointer"),D=y==null?f:Xn(y),g=v==null?f:Xn(v),f=new S(x,d+"leave",y,t,m),f.target=D,f.relatedTarget=g,x=null,On(m)===u&&(S=new S(p,d+"enter",v,t,m),S.target=g,S.relatedTarget=D,x=S),D=x,y&&v)n:{for(S=y,p=v,d=0,g=S;g;g=Gn(g))d++;for(g=0,x=p;x;x=Gn(x))g++;for(;0<d-g;)S=Gn(S),d--;for(;0<g-d;)p=Gn(p),g--;for(;d--;){if(S===p||p!==null&&S===p.alternate)break n;S=Gn(S),p=Gn(p)}S=null}else S=null;y!==null&&Lo(h,f,y,S,!1),v!==null&&D!==null&&Lo(h,D,v,S,!0)}}e:{if(f=u?Xn(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var j=yp;else if(jo(f))if(yc)j=bp;else{j=vp;var N=xp}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=Sp);if(j&&(j=j(e,u))){gc(h,j,t,m);break e}N&&N(e,f,u),e==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&ga(f,"number",f.value)}switch(N=u?Xn(u):window,e){case"focusin":(jo(N)||N.contentEditable==="true")&&(Kn=N,Aa=u,Ut=null);break;case"focusout":Ut=Aa=Kn=null;break;case"mousedown":Ea=!0;break;case"contextmenu":case"mouseup":case"dragend":Ea=!1,Po(h,t,m);break;case"selectionchange":if(Np)break;case"keydown":case"keyup":Po(h,t,m)}var I;if(Ni)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Qn?mc(e,t)&&(b="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(fc&&t.locale!=="ko"&&(Qn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Qn&&(I=pc()):(hn=m,bi="value"in hn?hn.value:hn.textContent,Qn=!0)),N=Xs(u,b),0<N.length&&(b=new bo(b,e,null,t,m),h.push({event:b,listeners:N}),I?b.data=I:(I=hc(t),I!==null&&(b.data=I)))),(I=pp?fp(e,t):mp(e,t))&&(u=Xs(u,"onBeforeInput"),0<u.length&&(m=new bo("onBeforeInput","beforeinput",null,t,m),h.push({event:m,listeners:u}),m.data=I))}Ic(h,n)})}function Zt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xs(e,n){for(var t=n+"Capture",s=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Gt(e,t),a!=null&&s.unshift(Zt(e,a,r)),a=Gt(e,n),a!=null&&s.push(Zt(e,a,r))),e=e.return}return s}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lo(e,n,t,s,r){for(var a=n._reactName,i=[];t!==null&&t!==s;){var l=t,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,r?(c=Gt(t,a),c!=null&&i.unshift(Zt(t,c,l))):r||(c=Gt(t,a),c!=null&&i.push(Zt(t,c,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Ap=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function Oo(e){return(typeof e=="string"?e:""+e).replace(Ap,`
`).replace(Ep,"")}function js(e,n,t){if(n=Oo(n),Oo(e)!==n&&t)throw Error(C(425))}function Zs(){}var Pa=null,Ta=null;function Ra(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,Pp=typeof clearTimeout=="function"?clearTimeout:void 0,Do=typeof Promise=="function"?Promise:void 0,Tp=typeof queueMicrotask=="function"?queueMicrotask:typeof Do<"u"?function(e){return Do.resolve(null).then(e).catch(Rp)}:La;function Rp(e){setTimeout(function(){throw e})}function Yr(e,n){var t=n,s=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){e.removeChild(r),Qt(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);Qt(n)}function Sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Mo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var bt=Math.random().toString(36).slice(2),Qe="__reactFiber$"+bt,es="__reactProps$"+bt,rn="__reactContainer$"+bt,Oa="__reactEvents$"+bt,Lp="__reactListeners$"+bt,Op="__reactHandles$"+bt;function On(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[rn]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Mo(e);e!==null;){if(t=e[Qe])return t;e=Mo(e)}return n}e=t,t=e.parentNode}return null}function ps(e){return e=e[Qe]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function wr(e){return e[es]||null}var Da=[],Zn=-1;function Pn(e){return{current:e}}function Q(e){0>Zn||(e.current=Da[Zn],Da[Zn]=null,Zn--)}function J(e,n){Zn++,Da[Zn]=e.current,e.current=n}var In={},me=Pn(In),ke=Pn(!1),Un=In;function pt(e,n){var t=e.type.contextTypes;if(!t)return In;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in t)r[a]=n[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ne(e){return e=e.childContextTypes,e!=null}function er(){Q(ke),Q(me)}function Bo(e,n,t){if(me.current!==In)throw Error(C(168));J(me,n),J(ke,t)}function Ec(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in n))throw Error(C(108,xd(e)||"Unknown",r));return Z({},t,s)}function nr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Un=me.current,J(me,e),J(ke,ke.current),!0}function _o(e,n,t){var s=e.stateNode;if(!s)throw Error(C(169));t?(e=Ec(e,n,Un),s.__reactInternalMemoizedMergedChildContext=e,Q(ke),Q(me),J(me,e)):Q(ke),J(ke,t)}var Ze=null,kr=!1,Xr=!1;function Pc(e){Ze===null?Ze=[e]:Ze.push(e)}function Dp(e){kr=!0,Pc(e)}function Tn(){if(!Xr&&Ze!==null){Xr=!0;var e=0,n=V;try{var t=Ze;for(V=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}Ze=null,kr=!1}catch(r){throw Ze!==null&&(Ze=Ze.slice(e+1)),nc(yi,Tn),r}finally{V=n,Xr=!1}}return null}var et=[],nt=0,tr=null,sr=0,Le=[],Oe=0,Fn=null,en=1,nn="";function Rn(e,n){et[nt++]=sr,et[nt++]=tr,tr=e,sr=n}function Tc(e,n,t){Le[Oe++]=en,Le[Oe++]=nn,Le[Oe++]=Fn,Fn=e;var s=en;e=nn;var r=32-qe(s)-1;s&=~(1<<r),t+=1;var a=32-qe(n)+r;if(30<a){var i=r-r%5;a=(s&(1<<i)-1).toString(32),s>>=i,r-=i,en=1<<32-qe(n)+r|t<<r|s,nn=a+e}else en=1<<a|t<<r|s,nn=e}function Ci(e){e.return!==null&&(Rn(e,1),Tc(e,1,0))}function Ii(e){for(;e===tr;)tr=et[--nt],et[nt]=null,sr=et[--nt],et[nt]=null;for(;e===Fn;)Fn=Le[--Oe],Le[Oe]=null,nn=Le[--Oe],Le[Oe]=null,en=Le[--Oe],Le[Oe]=null}var Ee=null,Ae=null,K=!1,He=null;function Rc(e,n){var t=De(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Uo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ee=e,Ae=Sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ee=e,Ae=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Fn!==null?{id:en,overflow:nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=De(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ee=e,Ae=null,!0):!1;default:return!1}}function Ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(K){var n=Ae;if(n){var t=n;if(!Uo(e,n)){if(Ma(e))throw Error(C(418));n=Sn(t.nextSibling);var s=Ee;n&&Uo(e,n)?Rc(s,t):(e.flags=e.flags&-4097|2,K=!1,Ee=e)}}else{if(Ma(e))throw Error(C(418));e.flags=e.flags&-4097|2,K=!1,Ee=e}}}function Fo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Cs(e){if(e!==Ee)return!1;if(!K)return Fo(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ra(e.type,e.memoizedProps)),n&&(n=Ae)){if(Ma(e))throw Lc(),Error(C(418));for(;n;)Rc(e,n),n=Sn(n.nextSibling)}if(Fo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ae=Sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ae=null}}else Ae=Ee?Sn(e.stateNode.nextSibling):null;return!0}function Lc(){for(var e=Ae;e;)e=Sn(e.nextSibling)}function ft(){Ae=Ee=null,K=!1}function Ai(e){He===null?He=[e]:He.push(e)}var Mp=ln.ReactCurrentBatchConfig;function At(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var s=t.stateNode}if(!s)throw Error(C(147,e));var r=s,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(i){var l=r.refs;i===null?delete l[a]:l[a]=i},n._stringRef=a,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function Is(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function zo(e){var n=e._init;return n(e._payload)}function Oc(e){function n(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function s(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function r(p,d){return p=Nn(p,d),p.index=0,p.sibling=null,p}function a(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,g,x){return d===null||d.tag!==6?(d=aa(g,p.mode,x),d.return=p,d):(d=r(d,g),d.return=p,d)}function c(p,d,g,x){var j=g.type;return j===$n?m(p,d,g.props.children,x,g.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dn&&zo(j)===d.type)?(x=r(d,g.props),x.ref=At(p,d,g),x.return=p,x):(x=qs(g.type,g.key,g.props,null,p.mode,x),x.ref=At(p,d,g),x.return=p,x)}function u(p,d,g,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=ia(g,p.mode,x),d.return=p,d):(d=r(d,g.children||[]),d.return=p,d)}function m(p,d,g,x,j){return d===null||d.tag!==7?(d=_n(g,p.mode,x,j),d.return=p,d):(d=r(d,g),d.return=p,d)}function h(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=aa(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gs:return g=qs(d.type,d.key,d.props,null,p.mode,g),g.ref=At(p,null,d),g.return=p,g;case Jn:return d=ia(d,p.mode,g),d.return=p,d;case dn:var x=d._init;return h(p,x(d._payload),g)}if(Rt(d)||kt(d))return d=_n(d,p.mode,g,null),d.return=p,d;Is(p,d)}return null}function f(p,d,g,x){var j=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return j!==null?null:l(p,d,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case gs:return g.key===j?c(p,d,g,x):null;case Jn:return g.key===j?u(p,d,g,x):null;case dn:return j=g._init,f(p,d,j(g._payload),x)}if(Rt(g)||kt(g))return j!==null?null:m(p,d,g,x,null);Is(p,g)}return null}function y(p,d,g,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(g)||null,l(d,p,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case gs:return p=p.get(x.key===null?g:x.key)||null,c(d,p,x,j);case Jn:return p=p.get(x.key===null?g:x.key)||null,u(d,p,x,j);case dn:var N=x._init;return y(p,d,g,N(x._payload),j)}if(Rt(x)||kt(x))return p=p.get(g)||null,m(d,p,x,j,null);Is(d,x)}return null}function v(p,d,g,x){for(var j=null,N=null,I=d,b=d=0,A=null;I!==null&&b<g.length;b++){I.index>b?(A=I,I=null):A=I.sibling;var P=f(p,I,g[b],x);if(P===null){I===null&&(I=A);break}e&&I&&P.alternate===null&&n(p,I),d=a(P,d,b),N===null?j=P:N.sibling=P,N=P,I=A}if(b===g.length)return t(p,I),K&&Rn(p,b),j;if(I===null){for(;b<g.length;b++)I=h(p,g[b],x),I!==null&&(d=a(I,d,b),N===null?j=I:N.sibling=I,N=I);return K&&Rn(p,b),j}for(I=s(p,I);b<g.length;b++)A=y(I,p,b,g[b],x),A!==null&&(e&&A.alternate!==null&&I.delete(A.key===null?b:A.key),d=a(A,d,b),N===null?j=A:N.sibling=A,N=A);return e&&I.forEach(function(z){return n(p,z)}),K&&Rn(p,b),j}function S(p,d,g,x){var j=kt(g);if(typeof j!="function")throw Error(C(150));if(g=j.call(g),g==null)throw Error(C(151));for(var N=j=null,I=d,b=d=0,A=null,P=g.next();I!==null&&!P.done;b++,P=g.next()){I.index>b?(A=I,I=null):A=I.sibling;var z=f(p,I,P.value,x);if(z===null){I===null&&(I=A);break}e&&I&&z.alternate===null&&n(p,I),d=a(z,d,b),N===null?j=z:N.sibling=z,N=z,I=A}if(P.done)return t(p,I),K&&Rn(p,b),j;if(I===null){for(;!P.done;b++,P=g.next())P=h(p,P.value,x),P!==null&&(d=a(P,d,b),N===null?j=P:N.sibling=P,N=P);return K&&Rn(p,b),j}for(I=s(p,I);!P.done;b++,P=g.next())P=y(I,p,b,P.value,x),P!==null&&(e&&P.alternate!==null&&I.delete(P.key===null?b:P.key),d=a(P,d,b),N===null?j=P:N.sibling=P,N=P);return e&&I.forEach(function(q){return n(p,q)}),K&&Rn(p,b),j}function D(p,d,g,x){if(typeof g=="object"&&g!==null&&g.type===$n&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case gs:e:{for(var j=g.key,N=d;N!==null;){if(N.key===j){if(j=g.type,j===$n){if(N.tag===7){t(p,N.sibling),d=r(N,g.props.children),d.return=p,p=d;break e}}else if(N.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dn&&zo(j)===N.type){t(p,N.sibling),d=r(N,g.props),d.ref=At(p,N,g),d.return=p,p=d;break e}t(p,N);break}else n(p,N);N=N.sibling}g.type===$n?(d=_n(g.props.children,p.mode,x,g.key),d.return=p,p=d):(x=qs(g.type,g.key,g.props,null,p.mode,x),x.ref=At(p,d,g),x.return=p,p=x)}return i(p);case Jn:e:{for(N=g.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){t(p,d.sibling),d=r(d,g.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=ia(g,p.mode,x),d.return=p,p=d}return i(p);case dn:return N=g._init,D(p,d,N(g._payload),x)}if(Rt(g))return v(p,d,g,x);if(kt(g))return S(p,d,g,x);Is(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(t(p,d.sibling),d=r(d,g),d.return=p,p=d):(t(p,d),d=aa(g,p.mode,x),d.return=p,p=d),i(p)):t(p,d)}return D}var mt=Oc(!0),Dc=Oc(!1),rr=Pn(null),ar=null,tt=null,Ei=null;function Pi(){Ei=tt=ar=null}function Ti(e){var n=rr.current;Q(rr),e._currentValue=n}function _a(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function ct(e,n){ar=e,Ei=tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(we=!0),e.firstContext=null)}function Be(e){var n=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:n,next:null},tt===null){if(ar===null)throw Error(C(308));tt=e,ar.dependencies={lanes:0,firstContext:e}}else tt=tt.next=e;return n}var Dn=null;function Ri(e){Dn===null?Dn=[e]:Dn.push(e)}function Mc(e,n,t,s){var r=n.interleaved;return r===null?(t.next=t,Ri(n)):(t.next=r.next,r.next=t),n.interleaved=t,an(e,s)}function an(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var pn=!1;function Li(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function bn(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,H&2){var r=s.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),s.pending=n,an(e,t)}return r=s.interleaved,r===null?(n.next=n,Ri(s)):(n.next=r.next,r.next=n),s.interleaved=n,an(e,t)}function Bs(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,xi(e,t)}}function Ho(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?r=a=i:a=a.next=i,t=t.next}while(t!==null);a===null?r=a=n:a=a.next=n}else r=a=n;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ir(e,n,t,s){var r=e.updateQueue;pn=!1;var a=r.firstBaseUpdate,i=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?a=u:i.next=u,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==i&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(a!==null){var h=r.baseState;i=0,m=u=c=null,l=a;do{var f=l.lane,y=l.eventTime;if((s&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,S=l;switch(f=n,y=t,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(y,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,f=typeof v=="function"?v.call(y,h,f):v,f==null)break e;h=Z({},h,f);break e;case 2:pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else y={eventTime:y,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=y,c=h):m=m.next=y,i|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(m===null&&(c=h),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=m,n=r.shared.interleaved,n!==null){r=n;do i|=r.lane,r=r.next;while(r!==n)}else a===null&&(r.shared.lanes=0);Hn|=i,e.lanes=i,e.memoizedState=h}}function qo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(C(191,r));r.call(s)}}}var fs={},Ye=Pn(fs),ns=Pn(fs),ts=Pn(fs);function Mn(e){if(e===fs)throw Error(C(174));return e}function Oi(e,n){switch(J(ts,n),J(ns,e),J(Ye,fs),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=xa(n,e)}Q(Ye),J(Ye,n)}function ht(){Q(Ye),Q(ns),Q(ts)}function _c(e){Mn(ts.current);var n=Mn(Ye.current),t=xa(n,e.type);n!==t&&(J(ns,e),J(Ye,t))}function Di(e){ns.current===e&&(Q(Ye),Q(ns))}var Y=Pn(0);function or(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zr=[];function Mi(){for(var e=0;e<Zr.length;e++)Zr[e]._workInProgressVersionPrimary=null;Zr.length=0}var _s=ln.ReactCurrentDispatcher,ea=ln.ReactCurrentBatchConfig,zn=0,X=null,se=null,ae=null,lr=!1,Ft=!1,ss=0,Bp=0;function de(){throw Error(C(321))}function Bi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ve(e[t],n[t]))return!1;return!0}function _i(e,n,t,s,r,a){if(zn=a,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_s.current=e===null||e.memoizedState===null?zp:Hp,e=t(s,r),Ft){a=0;do{if(Ft=!1,ss=0,25<=a)throw Error(C(301));a+=1,ae=se=null,n.updateQueue=null,_s.current=qp,e=t(s,r)}while(Ft)}if(_s.current=cr,n=se!==null&&se.next!==null,zn=0,ae=se=X=null,lr=!1,n)throw Error(C(300));return e}function Ui(){var e=ss!==0;return ss=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?X.memoizedState=ae=e:ae=ae.next=e,ae}function _e(){if(se===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var n=ae===null?X.memoizedState:ae.next;if(n!==null)ae=n,se=e;else{if(e===null)throw Error(C(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ae===null?X.memoizedState=ae=e:ae=ae.next=e}return ae}function rs(e,n){return typeof n=="function"?n(e):n}function na(e){var n=_e(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var s=se,r=s.baseQueue,a=t.pending;if(a!==null){if(r!==null){var i=r.next;r.next=a.next,a.next=i}s.baseQueue=r=a,t.pending=null}if(r!==null){a=r.next,s=s.baseState;var l=i=null,c=null,u=a;do{var m=u.lane;if((zn&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,i=s):c=c.next=h,X.lanes|=m,Hn|=m}u=u.next}while(u!==null&&u!==a);c===null?i=s:c.next=l,Ve(s,n.memoizedState)||(we=!0),n.memoizedState=s,n.baseState=i,n.baseQueue=c,t.lastRenderedState=s}if(e=t.interleaved,e!==null){r=e;do a=r.lane,X.lanes|=a,Hn|=a,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ta(e){var n=_e(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var s=t.dispatch,r=t.pending,a=n.memoizedState;if(r!==null){t.pending=null;var i=r=r.next;do a=e(a,i.action),i=i.next;while(i!==r);Ve(a,n.memoizedState)||(we=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,s]}function Uc(){}function Fc(e,n){var t=X,s=_e(),r=n(),a=!Ve(s.memoizedState,r);if(a&&(s.memoizedState=r,we=!0),s=s.queue,Fi(qc.bind(null,t,s,e),[e]),s.getSnapshot!==n||a||ae!==null&&ae.memoizedState.tag&1){if(t.flags|=2048,as(9,Hc.bind(null,t,s,r,n),void 0,null),ie===null)throw Error(C(349));zn&30||zc(t,n,r)}return r}function zc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Hc(e,n,t,s){n.value=t,n.getSnapshot=s,Wc(n)&&Vc(e)}function qc(e,n,t){return t(function(){Wc(n)&&Vc(e)})}function Wc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ve(e,t)}catch{return!0}}function Vc(e){var n=an(e,1);n!==null&&We(n,e,1,-1)}function Wo(e){var n=$e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},n.queue=e,e=e.dispatch=Fp.bind(null,X,e),[n.memoizedState,e]}function as(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function Gc(){return _e().memoizedState}function Us(e,n,t,s){var r=$e();X.flags|=e,r.memoizedState=as(1|n,t,void 0,s===void 0?null:s)}function Nr(e,n,t,s){var r=_e();s=s===void 0?null:s;var a=void 0;if(se!==null){var i=se.memoizedState;if(a=i.destroy,s!==null&&Bi(s,i.deps)){r.memoizedState=as(n,t,a,s);return}}X.flags|=e,r.memoizedState=as(1|n,t,a,s)}function Vo(e,n){return Us(8390656,8,e,n)}function Fi(e,n){return Nr(2048,8,e,n)}function Jc(e,n){return Nr(4,2,e,n)}function $c(e,n){return Nr(4,4,e,n)}function Qc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kc(e,n,t){return t=t!=null?t.concat([e]):null,Nr(4,4,Qc.bind(null,n,e),t)}function zi(){}function Yc(e,n){var t=_e();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Bi(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function Xc(e,n){var t=_e();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Bi(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function Zc(e,n,t){return zn&21?(Ve(t,n)||(t=rc(),X.lanes|=t,Hn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=t)}function _p(e,n){var t=V;V=t!==0&&4>t?t:4,e(!0);var s=ea.transition;ea.transition={};try{e(!1),n()}finally{V=t,ea.transition=s}}function eu(){return _e().memoizedState}function Up(e,n,t){var s=kn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},nu(e))tu(n,t);else if(t=Mc(e,n,t,s),t!==null){var r=ye();We(t,e,s,r),su(t,n,s)}}function Fp(e,n,t){var s=kn(e),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(nu(e))tu(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var i=n.lastRenderedState,l=a(i,t);if(r.hasEagerState=!0,r.eagerState=l,Ve(l,i)){var c=n.interleaved;c===null?(r.next=r,Ri(n)):(r.next=c.next,c.next=r),n.interleaved=r;return}}catch{}finally{}t=Mc(e,n,r,s),t!==null&&(r=ye(),We(t,e,s,r),su(t,n,s))}}function nu(e){var n=e.alternate;return e===X||n!==null&&n===X}function tu(e,n){Ft=lr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function su(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,xi(e,t)}}var cr={readContext:Be,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},zp={readContext:Be,useCallback:function(e,n){return $e().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:Vo,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Us(4194308,4,Qc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Us(4194308,4,e,n)},useInsertionEffect:function(e,n){return Us(4,2,e,n)},useMemo:function(e,n){var t=$e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=$e();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Up.bind(null,X,e),[s.memoizedState,e]},useRef:function(e){var n=$e();return e={current:e},n.memoizedState=e},useState:Wo,useDebugValue:zi,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=Wo(!1),n=e[0];return e=_p.bind(null,e[1]),$e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=X,r=$e();if(K){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),ie===null)throw Error(C(349));zn&30||zc(s,n,t)}r.memoizedState=t;var a={value:t,getSnapshot:n};return r.queue=a,Vo(qc.bind(null,s,a,e),[e]),s.flags|=2048,as(9,Hc.bind(null,s,a,t,n),void 0,null),t},useId:function(){var e=$e(),n=ie.identifierPrefix;if(K){var t=nn,s=en;t=(s&~(1<<32-qe(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=ss++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Bp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Hp={readContext:Be,useCallback:Yc,useContext:Be,useEffect:Fi,useImperativeHandle:Kc,useInsertionEffect:Jc,useLayoutEffect:$c,useMemo:Xc,useReducer:na,useRef:Gc,useState:function(){return na(rs)},useDebugValue:zi,useDeferredValue:function(e){var n=_e();return Zc(n,se.memoizedState,e)},useTransition:function(){var e=na(rs)[0],n=_e().memoizedState;return[e,n]},useMutableSource:Uc,useSyncExternalStore:Fc,useId:eu,unstable_isNewReconciler:!1},qp={readContext:Be,useCallback:Yc,useContext:Be,useEffect:Fi,useImperativeHandle:Kc,useInsertionEffect:Jc,useLayoutEffect:$c,useMemo:Xc,useReducer:ta,useRef:Gc,useState:function(){return ta(rs)},useDebugValue:zi,useDeferredValue:function(e){var n=_e();return se===null?n.memoizedState=e:Zc(n,se.memoizedState,e)},useTransition:function(){var e=ta(rs)[0],n=_e().memoizedState;return[e,n]},useMutableSource:Uc,useSyncExternalStore:Fc,useId:eu,unstable_isNewReconciler:!1};function Fe(e,n){if(e&&e.defaultProps){n=Z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ua(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:Z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var jr={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=ye(),r=kn(e),a=tn(s,r);a.payload=n,t!=null&&(a.callback=t),n=bn(e,a,r),n!==null&&(We(n,e,r,s),Bs(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=ye(),r=kn(e),a=tn(s,r);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=bn(e,a,r),n!==null&&(We(n,e,r,s),Bs(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),s=kn(e),r=tn(t,s);r.tag=2,n!=null&&(r.callback=n),n=bn(e,r,s),n!==null&&(We(n,e,s,t),Bs(n,e,s))}};function Go(e,n,t,s,r,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,i):n.prototype&&n.prototype.isPureReactComponent?!Yt(t,s)||!Yt(r,a):!0}function ru(e,n,t){var s=!1,r=In,a=n.contextType;return typeof a=="object"&&a!==null?a=Be(a):(r=Ne(n)?Un:me.current,s=n.contextTypes,a=(s=s!=null)?pt(e,r):In),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=jr,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),n}function Jo(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&jr.enqueueReplaceState(n,n.state,null)}function Fa(e,n,t,s){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Li(e);var a=n.contextType;typeof a=="object"&&a!==null?r.context=Be(a):(a=Ne(n)?Un:me.current,r.context=pt(e,a)),r.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Ua(e,n,a,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&jr.enqueueReplaceState(r,r.state,null),ir(e,t,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function gt(e,n){try{var t="",s=n;do t+=yd(s),s=s.return;while(s);var r=t}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:r,digest:null}}function sa(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function za(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Wp=typeof WeakMap=="function"?WeakMap:Map;function au(e,n,t){t=tn(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){dr||(dr=!0,Ya=s),za(e,n)},t}function iu(e,n,t){t=tn(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=n.value;t.payload=function(){return s(r)},t.callback=function(){za(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){za(e,n),typeof s!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function $o(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new Wp;var r=new Set;s.set(n,r)}else r=s.get(n),r===void 0&&(r=new Set,s.set(n,r));r.has(t)||(r.add(t),e=r1.bind(null,e,n,t),n.then(e,e))}function Qo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ko(e,n,t,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=tn(-1,1),n.tag=2,bn(t,n,1))),t.lanes|=1),e)}var Vp=ln.ReactCurrentOwner,we=!1;function ge(e,n,t,s){n.child=e===null?Dc(n,null,t,s):mt(n,e.child,t,s)}function Yo(e,n,t,s,r){t=t.render;var a=n.ref;return ct(n,r),s=_i(e,n,t,s,a,r),t=Ui(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,on(e,n,r)):(K&&t&&Ci(n),n.flags|=1,ge(e,n,s,r),n.child)}function Xo(e,n,t,s,r){if(e===null){var a=t.type;return typeof a=="function"&&!Qi(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,ou(e,n,a,s,r)):(e=qs(t.type,null,s,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&r)){var i=a.memoizedProps;if(t=t.compare,t=t!==null?t:Yt,t(i,s)&&e.ref===n.ref)return on(e,n,r)}return n.flags|=1,e=Nn(a,s),e.ref=n.ref,e.return=n,n.child=e}function ou(e,n,t,s,r){if(e!==null){var a=e.memoizedProps;if(Yt(a,s)&&e.ref===n.ref)if(we=!1,n.pendingProps=s=a,(e.lanes&r)!==0)e.flags&131072&&(we=!0);else return n.lanes=e.lanes,on(e,n,r)}return Ha(e,n,t,s,r)}function lu(e,n,t){var s=n.pendingProps,r=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(rt,Ie),Ie|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,J(rt,Ie),Ie|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:t,J(rt,Ie),Ie|=s}else a!==null?(s=a.baseLanes|t,n.memoizedState=null):s=t,J(rt,Ie),Ie|=s;return ge(e,n,r,t),n.child}function cu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ha(e,n,t,s,r){var a=Ne(t)?Un:me.current;return a=pt(n,a),ct(n,r),t=_i(e,n,t,s,a,r),s=Ui(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,on(e,n,r)):(K&&s&&Ci(n),n.flags|=1,ge(e,n,t,r),n.child)}function Zo(e,n,t,s,r){if(Ne(t)){var a=!0;nr(n)}else a=!1;if(ct(n,r),n.stateNode===null)Fs(e,n),ru(n,t,s),Fa(n,t,s,r),s=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var c=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Ne(t)?Un:me.current,u=pt(n,u));var m=t.getDerivedStateFromProps,h=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==s||c!==u)&&Jo(n,i,s,u),pn=!1;var f=n.memoizedState;i.state=f,ir(n,s,i,r),c=n.memoizedState,l!==s||f!==c||ke.current||pn?(typeof m=="function"&&(Ua(n,t,m,s),c=n.memoizedState),(l=pn||Go(n,t,l,s,f,c,u))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=c),i.props=s,i.state=c,i.context=u,s=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{i=n.stateNode,Bc(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Fe(n.type,l),i.props=u,h=n.pendingProps,f=i.context,c=t.contextType,typeof c=="object"&&c!==null?c=Be(c):(c=Ne(t)?Un:me.current,c=pt(n,c));var y=t.getDerivedStateFromProps;(m=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==h||f!==c)&&Jo(n,i,s,c),pn=!1,f=n.memoizedState,i.state=f,ir(n,s,i,r);var v=n.memoizedState;l!==h||f!==v||ke.current||pn?(typeof y=="function"&&(Ua(n,t,y,s),v=n.memoizedState),(u=pn||Go(n,t,u,s,f,v,c)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,v,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,v,c)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=v),i.props=s,i.state=v,i.context=c,s=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),s=!1)}return qa(e,n,t,s,a,r)}function qa(e,n,t,s,r,a){cu(e,n);var i=(n.flags&128)!==0;if(!s&&!i)return r&&_o(n,t,!1),on(e,n,a);s=n.stateNode,Vp.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&i?(n.child=mt(n,e.child,null,a),n.child=mt(n,null,l,a)):ge(e,n,l,a),n.memoizedState=s.state,r&&_o(n,t,!0),n.child}function uu(e){var n=e.stateNode;n.pendingContext?Bo(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Bo(e,n.context,!1),Oi(e,n.containerInfo)}function el(e,n,t,s,r){return ft(),Ai(r),n.flags|=256,ge(e,n,t,s),n.child}var Wa={dehydrated:null,treeContext:null,retryLane:0};function Va(e){return{baseLanes:e,cachePool:null,transitions:null}}function du(e,n,t){var s=n.pendingProps,r=Y.current,a=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),J(Y,r&1),e===null)return Ba(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=s.children,e=s.fallback,a?(s=n.mode,a=n.child,i={mode:"hidden",children:i},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Ar(i,s,0,null),e=_n(e,s,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Va(t),n.memoizedState=Wa,e):Hi(n,i));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Gp(e,n,i,s,l,r,t);if(a){a=s.fallback,i=n.mode,r=e.child,l=r.sibling;var c={mode:"hidden",children:s.children};return!(i&1)&&n.child!==r?(s=n.child,s.childLanes=0,s.pendingProps=c,n.deletions=null):(s=Nn(r,c),s.subtreeFlags=r.subtreeFlags&14680064),l!==null?a=Nn(l,a):(a=_n(a,i,t,null),a.flags|=2),a.return=n,s.return=n,s.sibling=a,n.child=s,s=a,a=n.child,i=e.child.memoizedState,i=i===null?Va(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~t,n.memoizedState=Wa,s}return a=e.child,e=a.sibling,s=Nn(a,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function Hi(e,n){return n=Ar({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function As(e,n,t,s){return s!==null&&Ai(s),mt(n,e.child,null,t),e=Hi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Gp(e,n,t,s,r,a,i){if(t)return n.flags&256?(n.flags&=-257,s=sa(Error(C(422))),As(e,n,i,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=s.fallback,r=n.mode,s=Ar({mode:"visible",children:s.children},r,0,null),a=_n(a,r,i,null),a.flags|=2,s.return=n,a.return=n,s.sibling=a,n.child=s,n.mode&1&&mt(n,e.child,null,i),n.child.memoizedState=Va(i),n.memoizedState=Wa,a);if(!(n.mode&1))return As(e,n,i,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var l=s.dgst;return s=l,a=Error(C(419)),s=sa(a,s,void 0),As(e,n,i,s)}if(l=(i&e.childLanes)!==0,we||l){if(s=ie,s!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|i)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,an(e,r),We(s,e,r,-1))}return $i(),s=sa(Error(C(421))),As(e,n,i,s)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=a1.bind(null,e),r._reactRetry=n,null):(e=a.treeContext,Ae=Sn(r.nextSibling),Ee=n,K=!0,He=null,e!==null&&(Le[Oe++]=en,Le[Oe++]=nn,Le[Oe++]=Fn,en=e.id,nn=e.overflow,Fn=n),n=Hi(n,s.children),n.flags|=4096,n)}function nl(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),_a(e.return,n,t)}function ra(e,n,t,s,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=t,a.tailMode=r)}function pu(e,n,t){var s=n.pendingProps,r=s.revealOrder,a=s.tail;if(ge(e,n,s.children,t),s=Y.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nl(e,t,n);else if(e.tag===19)nl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(J(Y,s),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&or(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),ra(n,!1,r,t,a);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&or(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}ra(n,!0,t,null,a);break;case"together":ra(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fs(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function on(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Hn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=Nn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Nn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Jp(e,n,t){switch(n.tag){case 3:uu(n),ft();break;case 5:_c(n);break;case 1:Ne(n.type)&&nr(n);break;case 4:Oi(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,r=n.memoizedProps.value;J(rr,s._currentValue),s._currentValue=r;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(J(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?du(e,n,t):(J(Y,Y.current&1),e=on(e,n,t),e!==null?e.sibling:null);J(Y,Y.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return pu(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(Y,Y.current),s)break;return null;case 22:case 23:return n.lanes=0,lu(e,n,t)}return on(e,n,t)}var fu,Ga,mu,hu;fu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ga=function(){};mu=function(e,n,t,s){var r=e.memoizedProps;if(r!==s){e=n.stateNode,Mn(Ye.current);var a=null;switch(t){case"input":r=ma(e,r),s=ma(e,s),a=[];break;case"select":r=Z({},r,{value:void 0}),s=Z({},s,{value:void 0}),a=[];break;case"textarea":r=ya(e,r),s=ya(e,s),a=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Zs)}va(t,s);var i;t=null;for(u in r)if(!s.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wt.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in s){var c=s[u];if(l=r!=null?r[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(t||(t={}),t[i]=c[i])}else t||(a||(a=[]),a.push(u,t)),t=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wt.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&$("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}t&&(a=a||[]).push("style",t);var u=a;(n.updateQueue=u)&&(n.flags|=4)}};hu=function(e,n,t,s){t!==s&&(n.flags|=4)};function Et(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function $p(e,n,t){var s=n.pendingProps;switch(Ii(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return Ne(n.type)&&er(),pe(n),null;case 3:return s=n.stateNode,ht(),Q(ke),Q(me),Mi(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Cs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,He!==null&&(ei(He),He=null))),Ga(e,n),pe(n),null;case 5:Di(n);var r=Mn(ts.current);if(t=n.type,e!==null&&n.stateNode!=null)mu(e,n,t,s,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(C(166));return pe(n),null}if(e=Mn(Ye.current),Cs(n)){s=n.stateNode,t=n.type;var a=n.memoizedProps;switch(s[Qe]=n,s[es]=a,e=(n.mode&1)!==0,t){case"dialog":$("cancel",s),$("close",s);break;case"iframe":case"object":case"embed":$("load",s);break;case"video":case"audio":for(r=0;r<Ot.length;r++)$(Ot[r],s);break;case"source":$("error",s);break;case"img":case"image":case"link":$("error",s),$("load",s);break;case"details":$("toggle",s);break;case"input":co(s,a),$("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},$("invalid",s);break;case"textarea":po(s,a),$("invalid",s)}va(t,a),r=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?s.textContent!==l&&(a.suppressHydrationWarning!==!0&&js(s.textContent,l,e),r=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&js(s.textContent,l,e),r=["children",""+l]):Wt.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&$("scroll",s)}switch(t){case"input":ys(s),uo(s,a,!0);break;case"textarea":ys(s),fo(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=Zs)}s=r,n.updateQueue=s,s!==null&&(n.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ql(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=i.createElement(t,{is:s.is}):(e=i.createElement(t),t==="select"&&(i=e,s.multiple?i.multiple=!0:s.size&&(i.size=s.size))):e=i.createElementNS(e,t),e[Qe]=n,e[es]=s,fu(e,n,!1,!1),n.stateNode=e;e:{switch(i=Sa(t,s),t){case"dialog":$("cancel",e),$("close",e),r=s;break;case"iframe":case"object":case"embed":$("load",e),r=s;break;case"video":case"audio":for(r=0;r<Ot.length;r++)$(Ot[r],e);r=s;break;case"source":$("error",e),r=s;break;case"img":case"image":case"link":$("error",e),$("load",e),r=s;break;case"details":$("toggle",e),r=s;break;case"input":co(e,s),r=ma(e,s),$("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=Z({},s,{value:void 0}),$("invalid",e);break;case"textarea":po(e,s),r=ya(e,s),$("invalid",e);break;default:r=s}va(t,r),l=r;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Gl(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Wl(e,c)):a==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&Vt(e,c):typeof c=="number"&&Vt(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Wt.hasOwnProperty(a)?c!=null&&a==="onScroll"&&$("scroll",e):c!=null&&pi(e,a,c,i))}switch(t){case"input":ys(e),uo(e,s,!1);break;case"textarea":ys(e),fo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Cn(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?at(e,!!s.multiple,a,!1):s.defaultValue!=null&&at(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Zs)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pe(n),null;case 6:if(e&&n.stateNode!=null)hu(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(C(166));if(t=Mn(ts.current),Mn(Ye.current),Cs(n)){if(s=n.stateNode,t=n.memoizedProps,s[Qe]=n,(a=s.nodeValue!==t)&&(e=Ee,e!==null))switch(e.tag){case 3:js(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&js(s.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[Qe]=n,n.stateNode=s}return pe(n),null;case 13:if(Q(Y),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ae!==null&&n.mode&1&&!(n.flags&128))Lc(),ft(),n.flags|=98560,a=!1;else if(a=Cs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(C(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[Qe]=n}else ft(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;pe(n),a=!1}else He!==null&&(ei(He),He=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?re===0&&(re=3):$i())),n.updateQueue!==null&&(n.flags|=4),pe(n),null);case 4:return ht(),Ga(e,n),e===null&&Xt(n.stateNode.containerInfo),pe(n),null;case 10:return Ti(n.type._context),pe(n),null;case 17:return Ne(n.type)&&er(),pe(n),null;case 19:if(Q(Y),a=n.memoizedState,a===null)return pe(n),null;if(s=(n.flags&128)!==0,i=a.rendering,i===null)if(s)Et(a,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=or(e),i!==null){for(n.flags|=128,Et(a,!1),s=i.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)a=t,e=s,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return J(Y,Y.current&1|2),n.child}e=e.sibling}a.tail!==null&&ne()>yt&&(n.flags|=128,s=!0,Et(a,!1),n.lanes=4194304)}else{if(!s)if(e=or(i),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Et(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!K)return pe(n),null}else 2*ne()-a.renderingStartTime>yt&&t!==1073741824&&(n.flags|=128,s=!0,Et(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(t=a.last,t!==null?t.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=ne(),n.sibling=null,t=Y.current,J(Y,s?t&1|2:t&1),n):(pe(n),null);case 22:case 23:return Ji(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Ie&1073741824&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function Qp(e,n){switch(Ii(n),n.tag){case 1:return Ne(n.type)&&er(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(),Q(ke),Q(me),Mi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Di(n),null;case 13:if(Q(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(Y),null;case 4:return ht(),null;case 10:return Ti(n.type._context),null;case 22:case 23:return Ji(),null;case 24:return null;default:return null}}var Es=!1,fe=!1,Kp=typeof WeakSet=="function"?WeakSet:Set,R=null;function st(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){ee(e,n,s)}else t.current=null}function Ja(e,n,t){try{t()}catch(s){ee(e,n,s)}}var tl=!1;function Yp(e,n){if(Pa=Ks,e=Sc(),ji(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var i=0,l=-1,c=-1,u=0,m=0,h=e,f=null;n:for(;;){for(var y;h!==t||r!==0&&h.nodeType!==3||(l=i+r),h!==a||s!==0&&h.nodeType!==3||(c=i+s),h.nodeType===3&&(i+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===e)break n;if(f===t&&++u===r&&(l=i),f===a&&++m===s&&(c=i),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}t=l===-1||c===-1?null:{start:l,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ta={focusedElem:e,selectionRange:t},Ks=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,D=v.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?S:Fe(n.type,S),D);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){ee(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return v=tl,tl=!1,v}function zt(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&Ja(n,t,a)}r=r.next}while(r!==s)}}function Cr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function $a(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function gu(e){var n=e.alternate;n!==null&&(e.alternate=null,gu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[es],delete n[Oa],delete n[Lp],delete n[Op])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yu(e){return e.tag===5||e.tag===3||e.tag===4}function sl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qa(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Zs));else if(s!==4&&(e=e.child,e!==null))for(Qa(e,n,t),e=e.sibling;e!==null;)Qa(e,n,t),e=e.sibling}function Ka(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ka(e,n,t),e=e.sibling;e!==null;)Ka(e,n,t),e=e.sibling}var oe=null,ze=!1;function un(e,n,t){for(t=t.child;t!==null;)xu(e,n,t),t=t.sibling}function xu(e,n,t){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(xr,t)}catch{}switch(t.tag){case 5:fe||st(t,n);case 6:var s=oe,r=ze;oe=null,un(e,n,t),oe=s,ze=r,oe!==null&&(ze?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(ze?(e=oe,t=t.stateNode,e.nodeType===8?Yr(e.parentNode,t):e.nodeType===1&&Yr(e,t),Qt(e)):Yr(oe,t.stateNode));break;case 4:s=oe,r=ze,oe=t.stateNode.containerInfo,ze=!0,un(e,n,t),oe=s,ze=r;break;case 0:case 11:case 14:case 15:if(!fe&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var a=r,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&Ja(t,n,i),r=r.next}while(r!==s)}un(e,n,t);break;case 1:if(!fe&&(st(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(l){ee(t,n,l)}un(e,n,t);break;case 21:un(e,n,t);break;case 22:t.mode&1?(fe=(s=fe)||t.memoizedState!==null,un(e,n,t),fe=s):un(e,n,t);break;default:un(e,n,t)}}function rl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Kp),n.forEach(function(s){var r=i1.bind(null,e,s);t.has(s)||(t.add(s),s.then(r,r))})}}function Ue(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var a=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,ze=!1;break e;case 3:oe=l.stateNode.containerInfo,ze=!0;break e;case 4:oe=l.stateNode.containerInfo,ze=!0;break e}l=l.return}if(oe===null)throw Error(C(160));xu(a,i,r),oe=null,ze=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){ee(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)vu(n,e),n=n.sibling}function vu(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(n,e),Je(e),s&4){try{zt(3,e,e.return),Cr(3,e)}catch(S){ee(e,e.return,S)}try{zt(5,e,e.return)}catch(S){ee(e,e.return,S)}}break;case 1:Ue(n,e),Je(e),s&512&&t!==null&&st(t,t.return);break;case 5:if(Ue(n,e),Je(e),s&512&&t!==null&&st(t,t.return),e.flags&32){var r=e.stateNode;try{Vt(r,"")}catch(S){ee(e,e.return,S)}}if(s&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,i=t!==null?t.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&zl(r,a),Sa(l,i);var u=Sa(l,a);for(i=0;i<c.length;i+=2){var m=c[i],h=c[i+1];m==="style"?Gl(r,h):m==="dangerouslySetInnerHTML"?Wl(r,h):m==="children"?Vt(r,h):pi(r,m,h,u)}switch(l){case"input":ha(r,a);break;case"textarea":Hl(r,a);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?at(r,!!a.multiple,y,!1):f!==!!a.multiple&&(a.defaultValue!=null?at(r,!!a.multiple,a.defaultValue,!0):at(r,!!a.multiple,a.multiple?[]:"",!1))}r[es]=a}catch(S){ee(e,e.return,S)}}break;case 6:if(Ue(n,e),Je(e),s&4){if(e.stateNode===null)throw Error(C(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(S){ee(e,e.return,S)}}break;case 3:if(Ue(n,e),Je(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{Qt(n.containerInfo)}catch(S){ee(e,e.return,S)}break;case 4:Ue(n,e),Je(e);break;case 13:Ue(n,e),Je(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Vi=ne())),s&4&&rl(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(u=fe)||m,Ue(n,e),fe=u):Ue(n,e),Je(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(R=e,m=e.child;m!==null;){for(h=R=m;R!==null;){switch(f=R,y=f.child,f.tag){case 0:case 11:case 14:case 15:zt(4,f,f.return);break;case 1:st(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){s=f,t=f.return;try{n=s,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(S){ee(s,t,S)}}break;case 5:st(f,f.return);break;case 22:if(f.memoizedState!==null){il(h);continue}}y!==null?(y.return=f,R=y):il(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{r=h.stateNode,u?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=h.stateNode,c=h.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Vl("display",i))}catch(S){ee(e,e.return,S)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(S){ee(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(n,e),Je(e),s&4&&rl(e);break;case 21:break;default:Ue(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(yu(t)){var s=t;break e}t=t.return}throw Error(C(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(Vt(r,""),s.flags&=-33);var a=sl(e);Ka(e,a,r);break;case 3:case 4:var i=s.stateNode.containerInfo,l=sl(e);Qa(e,l,i);break;default:throw Error(C(161))}}catch(c){ee(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xp(e,n,t){R=e,Su(e)}function Su(e,n,t){for(var s=(e.mode&1)!==0;R!==null;){var r=R,a=r.child;if(r.tag===22&&s){var i=r.memoizedState!==null||Es;if(!i){var l=r.alternate,c=l!==null&&l.memoizedState!==null||fe;l=Es;var u=fe;if(Es=i,(fe=c)&&!u)for(R=r;R!==null;)i=R,c=i.child,i.tag===22&&i.memoizedState!==null?ol(r):c!==null?(c.return=i,R=c):ol(r);for(;a!==null;)R=a,Su(a),a=a.sibling;R=r,Es=l,fe=u}al(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,R=a):al(e)}}function al(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||Cr(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!fe)if(t===null)s.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Fe(n.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&qo(n,a,s);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}qo(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Qt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}fe||n.flags&512&&$a(n)}catch(f){ee(n,n.return,f)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function il(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function ol(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Cr(4,n)}catch(c){ee(n,t,c)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var r=n.return;try{s.componentDidMount()}catch(c){ee(n,r,c)}}var a=n.return;try{$a(n)}catch(c){ee(n,a,c)}break;case 5:var i=n.return;try{$a(n)}catch(c){ee(n,i,c)}}}catch(c){ee(n,n.return,c)}if(n===e){R=null;break}var l=n.sibling;if(l!==null){l.return=n.return,R=l;break}R=n.return}}var Zp=Math.ceil,ur=ln.ReactCurrentDispatcher,qi=ln.ReactCurrentOwner,Me=ln.ReactCurrentBatchConfig,H=0,ie=null,te=null,le=0,Ie=0,rt=Pn(0),re=0,is=null,Hn=0,Ir=0,Wi=0,Ht=null,be=null,Vi=0,yt=1/0,Xe=null,dr=!1,Ya=null,wn=null,Ps=!1,gn=null,pr=0,qt=0,Xa=null,zs=-1,Hs=0;function ye(){return H&6?ne():zs!==-1?zs:zs=ne()}function kn(e){return e.mode&1?H&2&&le!==0?le&-le:Mp.transition!==null?(Hs===0&&(Hs=rc()),Hs):(e=V,e!==0||(e=window.event,e=e===void 0?16:dc(e.type)),e):1}function We(e,n,t,s){if(50<qt)throw qt=0,Xa=null,Error(C(185));us(e,t,s),(!(H&2)||e!==ie)&&(e===ie&&(!(H&2)&&(Ir|=t),re===4&&mn(e,le)),je(e,s),t===1&&H===0&&!(n.mode&1)&&(yt=ne()+500,kr&&Tn()))}function je(e,n){var t=e.callbackNode;Md(e,n);var s=Qs(e,e===ie?le:0);if(s===0)t!==null&&go(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&go(t),n===1)e.tag===0?Dp(ll.bind(null,e)):Pc(ll.bind(null,e)),Tp(function(){!(H&6)&&Tn()}),t=null;else{switch(ac(s)){case 1:t=yi;break;case 4:t=tc;break;case 16:t=$s;break;case 536870912:t=sc;break;default:t=$s}t=Au(t,bu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function bu(e,n){if(zs=-1,Hs=0,H&6)throw Error(C(327));var t=e.callbackNode;if(ut()&&e.callbackNode!==t)return null;var s=Qs(e,e===ie?le:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=fr(e,s);else{n=s;var r=H;H|=2;var a=ku();(ie!==e||le!==n)&&(Xe=null,yt=ne()+500,Bn(e,n));do try{t1();break}catch(l){wu(e,l)}while(!0);Pi(),ur.current=a,H=r,te!==null?n=0:(ie=null,le=0,n=re)}if(n!==0){if(n===2&&(r=ja(e),r!==0&&(s=r,n=Za(e,r))),n===1)throw t=is,Bn(e,0),mn(e,s),je(e,ne()),t;if(n===6)mn(e,s);else{if(r=e.current.alternate,!(s&30)&&!e1(r)&&(n=fr(e,s),n===2&&(a=ja(e),a!==0&&(s=a,n=Za(e,a))),n===1))throw t=is,Bn(e,0),mn(e,s),je(e,ne()),t;switch(e.finishedWork=r,e.finishedLanes=s,n){case 0:case 1:throw Error(C(345));case 2:Ln(e,be,Xe);break;case 3:if(mn(e,s),(s&130023424)===s&&(n=Vi+500-ne(),10<n)){if(Qs(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){ye(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=La(Ln.bind(null,e,be,Xe),n);break}Ln(e,be,Xe);break;case 4:if(mn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,r=-1;0<s;){var i=31-qe(s);a=1<<i,i=n[i],i>r&&(r=i),s&=~a}if(s=r,s=ne()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Zp(s/1960))-s,10<s){e.timeoutHandle=La(Ln.bind(null,e,be,Xe),s);break}Ln(e,be,Xe);break;case 5:Ln(e,be,Xe);break;default:throw Error(C(329))}}}return je(e,ne()),e.callbackNode===t?bu.bind(null,e):null}function Za(e,n){var t=Ht;return e.current.memoizedState.isDehydrated&&(Bn(e,n).flags|=256),e=fr(e,n),e!==2&&(n=be,be=t,n!==null&&ei(n)),e}function ei(e){be===null?be=e:be.push.apply(be,e)}function e1(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],a=r.getSnapshot;r=r.value;try{if(!Ve(a(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mn(e,n){for(n&=~Wi,n&=~Ir,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-qe(n),s=1<<t;e[t]=-1,n&=~s}}function ll(e){if(H&6)throw Error(C(327));ut();var n=Qs(e,0);if(!(n&1))return je(e,ne()),null;var t=fr(e,n);if(e.tag!==0&&t===2){var s=ja(e);s!==0&&(n=s,t=Za(e,s))}if(t===1)throw t=is,Bn(e,0),mn(e,n),je(e,ne()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Ln(e,be,Xe),je(e,ne()),null}function Gi(e,n){var t=H;H|=1;try{return e(n)}finally{H=t,H===0&&(yt=ne()+500,kr&&Tn())}}function qn(e){gn!==null&&gn.tag===0&&!(H&6)&&ut();var n=H;H|=1;var t=Me.transition,s=V;try{if(Me.transition=null,V=1,e)return e()}finally{V=s,Me.transition=t,H=n,!(H&6)&&Tn()}}function Ji(){Ie=rt.current,Q(rt)}function Bn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Pp(t)),te!==null)for(t=te.return;t!==null;){var s=t;switch(Ii(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&er();break;case 3:ht(),Q(ke),Q(me),Mi();break;case 5:Di(s);break;case 4:ht();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:Ti(s.type._context);break;case 22:case 23:Ji()}t=t.return}if(ie=e,te=e=Nn(e.current,null),le=Ie=n,re=0,is=null,Wi=Ir=Hn=0,be=Ht=null,Dn!==null){for(n=0;n<Dn.length;n++)if(t=Dn[n],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,a=t.pending;if(a!==null){var i=a.next;a.next=r,s.next=i}t.pending=s}Dn=null}return e}function wu(e,n){do{var t=te;try{if(Pi(),_s.current=cr,lr){for(var s=X.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}lr=!1}if(zn=0,ae=se=X=null,Ft=!1,ss=0,qi.current=null,t===null||t.return===null){re=1,is=n,te=null;break}e:{var a=e,i=t.return,l=t,c=n;if(n=le,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Qo(i);if(y!==null){y.flags&=-257,Ko(y,i,l,a,n),y.mode&1&&$o(a,u,n),n=y,c=u;var v=n.updateQueue;if(v===null){var S=new Set;S.add(c),n.updateQueue=S}else v.add(c);break e}else{if(!(n&1)){$o(a,u,n),$i();break e}c=Error(C(426))}}else if(K&&l.mode&1){var D=Qo(i);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Ko(D,i,l,a,n),Ai(gt(c,l));break e}}a=c=gt(c,l),re!==4&&(re=2),Ht===null?Ht=[a]:Ht.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var p=au(a,c,n);Ho(a,p);break e;case 1:l=c;var d=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(wn===null||!wn.has(g)))){a.flags|=65536,n&=-n,a.lanes|=n;var x=iu(a,l,n);Ho(a,x);break e}}a=a.return}while(a!==null)}ju(t)}catch(j){n=j,te===t&&t!==null&&(te=t=t.return);continue}break}while(!0)}function ku(){var e=ur.current;return ur.current=cr,e===null?cr:e}function $i(){(re===0||re===3||re===2)&&(re=4),ie===null||!(Hn&268435455)&&!(Ir&268435455)||mn(ie,le)}function fr(e,n){var t=H;H|=2;var s=ku();(ie!==e||le!==n)&&(Xe=null,Bn(e,n));do try{n1();break}catch(r){wu(e,r)}while(!0);if(Pi(),H=t,ur.current=s,te!==null)throw Error(C(261));return ie=null,le=0,re}function n1(){for(;te!==null;)Nu(te)}function t1(){for(;te!==null&&!Id();)Nu(te)}function Nu(e){var n=Iu(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,n===null?ju(e):te=n,qi.current=null}function ju(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Qp(t,n),t!==null){t.flags&=32767,te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(t=$p(t,n,Ie),t!==null){te=t;return}if(n=n.sibling,n!==null){te=n;return}te=n=e}while(n!==null);re===0&&(re=5)}function Ln(e,n,t){var s=V,r=Me.transition;try{Me.transition=null,V=1,s1(e,n,t,s)}finally{Me.transition=r,V=s}return null}function s1(e,n,t,s){do ut();while(gn!==null);if(H&6)throw Error(C(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Bd(e,a),e===ie&&(te=ie=null,le=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ps||(Ps=!0,Au($s,function(){return ut(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=Me.transition,Me.transition=null;var i=V;V=1;var l=H;H|=4,qi.current=null,Yp(e,t),vu(t,e),kp(Ta),Ks=!!Pa,Ta=Pa=null,e.current=t,Xp(t),Ad(),H=l,V=i,Me.transition=a}else e.current=t;if(Ps&&(Ps=!1,gn=e,pr=r),a=e.pendingLanes,a===0&&(wn=null),Td(t.stateNode),je(e,ne()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(dr)throw dr=!1,e=Ya,Ya=null,e;return pr&1&&e.tag!==0&&ut(),a=e.pendingLanes,a&1?e===Xa?qt++:(qt=0,Xa=e):qt=0,Tn(),null}function ut(){if(gn!==null){var e=ac(pr),n=Me.transition,t=V;try{if(Me.transition=null,V=16>e?16:e,gn===null)var s=!1;else{if(e=gn,gn=null,pr=0,H&6)throw Error(C(331));var r=H;for(H|=4,R=e.current;R!==null;){var a=R,i=a.child;if(R.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(R=u;R!==null;){var m=R;switch(m.tag){case 0:case 11:case 15:zt(8,m,a)}var h=m.child;if(h!==null)h.return=m,R=h;else for(;R!==null;){m=R;var f=m.sibling,y=m.return;if(gu(m),m===u){R=null;break}if(f!==null){f.return=y,R=f;break}R=y}}}var v=a.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var D=S.sibling;S.sibling=null,S=D}while(S!==null)}}R=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,R=i;else e:for(;R!==null;){if(a=R,a.flags&2048)switch(a.tag){case 0:case 11:case 15:zt(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,R=p;break e}R=a.return}}var d=e.current;for(R=d;R!==null;){i=R;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,R=g;else e:for(i=d;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Cr(9,l)}}catch(j){ee(l,l.return,j)}if(l===i){R=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,R=x;break e}R=l.return}}if(H=r,Tn(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(xr,e)}catch{}s=!0}return s}finally{V=t,Me.transition=n}}return!1}function cl(e,n,t){n=gt(t,n),n=au(e,n,1),e=bn(e,n,1),n=ye(),e!==null&&(us(e,1,n),je(e,n))}function ee(e,n,t){if(e.tag===3)cl(e,e,t);else for(;n!==null;){if(n.tag===3){cl(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wn===null||!wn.has(s))){e=gt(t,e),e=iu(n,e,1),n=bn(n,e,1),e=ye(),n!==null&&(us(n,1,e),je(n,e));break}}n=n.return}}function r1(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(le&t)===t&&(re===4||re===3&&(le&130023424)===le&&500>ne()-Vi?Bn(e,0):Wi|=t),je(e,n)}function Cu(e,n){n===0&&(e.mode&1?(n=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):n=1);var t=ye();e=an(e,n),e!==null&&(us(e,n,t),je(e,t))}function a1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Cu(e,t)}function i1(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(C(314))}s!==null&&s.delete(n),Cu(e,t)}var Iu;Iu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ke.current)we=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return we=!1,Jp(e,n,t);we=!!(e.flags&131072)}else we=!1,K&&n.flags&1048576&&Tc(n,sr,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Fs(e,n),e=n.pendingProps;var r=pt(n,me.current);ct(n,t),r=_i(null,n,s,e,r,t);var a=Ui();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ne(s)?(a=!0,nr(n)):a=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Li(n),r.updater=jr,n.stateNode=r,r._reactInternals=n,Fa(n,s,e,t),n=qa(null,n,s,!0,a,t)):(n.tag=0,K&&a&&Ci(n),ge(null,n,r,t),n=n.child),n;case 16:s=n.elementType;e:{switch(Fs(e,n),e=n.pendingProps,r=s._init,s=r(s._payload),n.type=s,r=n.tag=l1(s),e=Fe(s,e),r){case 0:n=Ha(null,n,s,e,t);break e;case 1:n=Zo(null,n,s,e,t);break e;case 11:n=Yo(null,n,s,e,t);break e;case 14:n=Xo(null,n,s,Fe(s.type,e),t);break e}throw Error(C(306,s,""))}return n;case 0:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Fe(s,r),Ha(e,n,s,r,t);case 1:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Fe(s,r),Zo(e,n,s,r,t);case 3:e:{if(uu(n),e===null)throw Error(C(387));s=n.pendingProps,a=n.memoizedState,r=a.element,Bc(e,n),ir(n,s,null,t);var i=n.memoizedState;if(s=i.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){r=gt(Error(C(423)),n),n=el(e,n,s,t,r);break e}else if(s!==r){r=gt(Error(C(424)),n),n=el(e,n,s,t,r);break e}else for(Ae=Sn(n.stateNode.containerInfo.firstChild),Ee=n,K=!0,He=null,t=Dc(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ft(),s===r){n=on(e,n,t);break e}ge(e,n,s,t)}n=n.child}return n;case 5:return _c(n),e===null&&Ba(n),s=n.type,r=n.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,Ra(s,r)?i=null:a!==null&&Ra(s,a)&&(n.flags|=32),cu(e,n),ge(e,n,i,t),n.child;case 6:return e===null&&Ba(n),null;case 13:return du(e,n,t);case 4:return Oi(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=mt(n,null,s,t):ge(e,n,s,t),n.child;case 11:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Fe(s,r),Yo(e,n,s,r,t);case 7:return ge(e,n,n.pendingProps,t),n.child;case 8:return ge(e,n,n.pendingProps.children,t),n.child;case 12:return ge(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,r=n.pendingProps,a=n.memoizedProps,i=r.value,J(rr,s._currentValue),s._currentValue=i,a!==null)if(Ve(a.value,i)){if(a.children===r.children&&!ke.current){n=on(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(a.tag===1){c=tn(-1,t&-t),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}a.lanes|=t,c=a.alternate,c!==null&&(c.lanes|=t),_a(a.return,t,n),l.lanes|=t;break}c=c.next}}else if(a.tag===10)i=a.type===n.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(C(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),_a(i,t,n),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}ge(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,s=n.pendingProps.children,ct(n,t),r=Be(r),s=s(r),n.flags|=1,ge(e,n,s,t),n.child;case 14:return s=n.type,r=Fe(s,n.pendingProps),r=Fe(s.type,r),Xo(e,n,s,r,t);case 15:return ou(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Fe(s,r),Fs(e,n),n.tag=1,Ne(s)?(e=!0,nr(n)):e=!1,ct(n,t),ru(n,s,r),Fa(n,s,r,t),qa(null,n,s,!0,e,t);case 19:return pu(e,n,t);case 22:return lu(e,n,t)}throw Error(C(156,n.tag))};function Au(e,n){return nc(e,n)}function o1(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,n,t,s){return new o1(e,n,t,s)}function Qi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function l1(e){if(typeof e=="function")return Qi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mi)return 11;if(e===hi)return 14}return 2}function Nn(e,n){var t=e.alternate;return t===null?(t=De(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function qs(e,n,t,s,r,a){var i=2;if(s=e,typeof e=="function")Qi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case $n:return _n(t.children,r,a,n);case fi:i=8,r|=8;break;case ua:return e=De(12,t,n,r|2),e.elementType=ua,e.lanes=a,e;case da:return e=De(13,t,n,r),e.elementType=da,e.lanes=a,e;case pa:return e=De(19,t,n,r),e.elementType=pa,e.lanes=a,e;case _l:return Ar(t,r,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ml:i=10;break e;case Bl:i=9;break e;case mi:i=11;break e;case hi:i=14;break e;case dn:i=16,s=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=De(i,t,n,r),n.elementType=e,n.type=s,n.lanes=a,n}function _n(e,n,t,s){return e=De(7,e,s,n),e.lanes=t,e}function Ar(e,n,t,s){return e=De(22,e,s,n),e.elementType=_l,e.lanes=t,e.stateNode={isHidden:!1},e}function aa(e,n,t){return e=De(6,e,null,n),e.lanes=t,e}function ia(e,n,t){return n=De(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function c1(e,n,t,s,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fr(0),this.expirationTimes=Fr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ki(e,n,t,s,r,a,i,l,c){return e=new c1(e,n,t,l,c),n===1?(n=1,a===!0&&(n|=8)):n=0,a=De(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Li(a),e}function u1(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function Eu(e){if(!e)return In;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ne(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(Ne(t))return Ec(e,t,n)}return n}function Pu(e,n,t,s,r,a,i,l,c){return e=Ki(t,s,!0,e,r,a,i,l,c),e.context=Eu(null),t=e.current,s=ye(),r=kn(t),a=tn(s,r),a.callback=n??null,bn(t,a,r),e.current.lanes=r,us(e,r,s),je(e,s),e}function Er(e,n,t,s){var r=n.current,a=ye(),i=kn(r);return t=Eu(t),n.context===null?n.context=t:n.pendingContext=t,n=tn(a,i),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=bn(r,n,i),e!==null&&(We(e,r,i,a),Bs(e,r,i)),i}function mr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ul(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Yi(e,n){ul(e,n),(e=e.alternate)&&ul(e,n)}function d1(){return null}var Tu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xi(e){this._internalRoot=e}Pr.prototype.render=Xi.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));Er(e,n,null,null)};Pr.prototype.unmount=Xi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;qn(function(){Er(null,e,null,null)}),n[rn]=null}};function Pr(e){this._internalRoot=e}Pr.prototype.unstable_scheduleHydration=function(e){if(e){var n=lc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<fn.length&&n!==0&&n<fn[t].priority;t++);fn.splice(t,0,e),t===0&&uc(e)}};function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dl(){}function p1(e,n,t,s,r){if(r){if(typeof s=="function"){var a=s;s=function(){var u=mr(i);a.call(u)}}var i=Pu(n,s,e,0,null,!1,!1,"",dl);return e._reactRootContainer=i,e[rn]=i.current,Xt(e.nodeType===8?e.parentNode:e),qn(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var l=s;s=function(){var u=mr(c);l.call(u)}}var c=Ki(e,0,!1,null,null,!1,!1,"",dl);return e._reactRootContainer=c,e[rn]=c.current,Xt(e.nodeType===8?e.parentNode:e),qn(function(){Er(n,c,t,s)}),c}function Rr(e,n,t,s,r){var a=t._reactRootContainer;if(a){var i=a;if(typeof r=="function"){var l=r;r=function(){var c=mr(i);l.call(c)}}Er(n,i,e,r)}else i=p1(t,n,e,r,s);return mr(i)}ic=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Lt(n.pendingLanes);t!==0&&(xi(n,t|1),je(n,ne()),!(H&6)&&(yt=ne()+500,Tn()))}break;case 13:qn(function(){var s=an(e,1);if(s!==null){var r=ye();We(s,e,1,r)}}),Yi(e,1)}};vi=function(e){if(e.tag===13){var n=an(e,134217728);if(n!==null){var t=ye();We(n,e,134217728,t)}Yi(e,134217728)}};oc=function(e){if(e.tag===13){var n=kn(e),t=an(e,n);if(t!==null){var s=ye();We(t,e,n,s)}Yi(e,n)}};lc=function(){return V};cc=function(e,n){var t=V;try{return V=e,n()}finally{V=t}};wa=function(e,n,t){switch(n){case"input":if(ha(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var r=wr(s);if(!r)throw Error(C(90));Fl(s),ha(s,r)}}}break;case"textarea":Hl(e,t);break;case"select":n=t.value,n!=null&&at(e,!!t.multiple,n,!1)}};Ql=Gi;Kl=qn;var f1={usingClientEntryPoint:!1,Events:[ps,Xn,wr,Jl,$l,Gi]},Pt={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m1={bundleType:Pt.bundleType,version:Pt.version,rendererPackageName:Pt.rendererPackageName,rendererConfig:Pt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zl(e),e===null?null:e.stateNode},findFiberByHostInstance:Pt.findFiberByHostInstance||d1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ts.isDisabled&&Ts.supportsFiber)try{xr=Ts.inject(m1),Ke=Ts}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f1;Te.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zi(n))throw Error(C(200));return u1(e,n,null,t)};Te.createRoot=function(e,n){if(!Zi(e))throw Error(C(299));var t=!1,s="",r=Tu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Ki(e,1,!1,null,null,t,!1,s,r),e[rn]=n.current,Xt(e.nodeType===8?e.parentNode:e),new Xi(n)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Zl(n),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return qn(e)};Te.hydrate=function(e,n,t){if(!Tr(n))throw Error(C(200));return Rr(null,e,n,!0,t)};Te.hydrateRoot=function(e,n,t){if(!Zi(e))throw Error(C(405));var s=t!=null&&t.hydratedSources||null,r=!1,a="",i=Tu;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Pu(n,null,e,1,t??null,r,!1,a,i),e[rn]=n.current,Xt(e),s)for(e=0;e<s.length;e++)t=s[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Pr(n)};Te.render=function(e,n,t){if(!Tr(n))throw Error(C(200));return Rr(null,e,n,!1,t)};Te.unmountComponentAtNode=function(e){if(!Tr(e))throw Error(C(40));return e._reactRootContainer?(qn(function(){Rr(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};Te.unstable_batchedUpdates=Gi;Te.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!Tr(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Rr(e,n,t,!1,s)};Te.version="18.3.1-next-f1338f8080-20240426";function Ru(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ru)}catch(e){console.error(e)}}Ru(),Rl.exports=Te;var Lu=Rl.exports,pl=Lu;la.createRoot=pl.createRoot,la.hydrateRoot=pl.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),G=(e,n)=>{const t=E.forwardRef(({color:s="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:l="",children:c,...u},m)=>E.createElement("svg",{ref:m,...h1,width:r,height:r,stroke:s,strokeWidth:i?Number(a)*24/Number(r):a,className:["lucide",`lucide-${g1(e)}`,l].join(" "),...u},[...n.map(([h,f])=>E.createElement(h,f)),...Array.isArray(c)?c:[c]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=G("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=G("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=G("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=G("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=G("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=G("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=G("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=G("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=G("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=G("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=G("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=G("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=G("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=G("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=G("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=G("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=G("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=G("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=G("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=G("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=G("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=G("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=G("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=G("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=G("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=G("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function R1({activeTab:e,setActiveTab:n}){const[t,s]=E.useState(!1),r=i=>{n(i),s(!1)},a=()=>{window.location.reload()};return o.jsxs("header",{className:"site-header",children:[o.jsxs("div",{className:"header-top-row",children:[o.jsxs("div",{className:"logo-wrapper",onClick:a,style:{cursor:"pointer"},children:[o.jsx("div",{className:"logo-icon",children:o.jsx(Ou,{size:20})}),o.jsx("span",{className:"logo-text",children:"정처기 실기 마스터"})]}),o.jsx("button",{className:"mobile-toggle-btn",onClick:()=>s(!t),"aria-label":"메뉴 토글",children:t?o.jsx(T1,{size:20}):o.jsx(j1,{size:20})})]}),o.jsxs("nav",{className:`nav-card glass-card ${t?"mobile-open":""}`,children:[o.jsxs("button",{className:`nav-btn ${e==="random"?"active":""}`,onClick:()=>r("random"),style:e==="random"?{background:"linear-gradient(135deg, #a855f7, #7e22ce)"}:{},children:[o.jsx(gr,{size:18}),o.jsx("span",{children:"랜덤문제"})]}),o.jsxs("button",{className:`nav-btn ${e==="quiz"?"active":""}`,onClick:()=>r("quiz"),children:[o.jsx(no,{size:18}),o.jsx("span",{children:"유형별"})]}),o.jsxs("button",{className:`nav-btn ${e==="subject"?"active":""}`,onClick:()=>r("subject"),style:e==="subject"?{background:"linear-gradient(135deg, #06b6d4, #0891b2)"}:{},children:[o.jsx(hr,{size:18}),o.jsx("span",{children:"주제별"})]}),o.jsxs("button",{className:`nav-btn ${e==="wrong"?"active":""}`,onClick:()=>r("wrong"),style:e==="wrong"?{background:"linear-gradient(135deg, #f43f5e, #e11d48)"}:{},children:[o.jsx(xt,{size:18}),o.jsx("span",{children:"오답노트"})]}),o.jsxs("button",{className:`nav-btn ${e==="bookmark"?"active":""}`,onClick:()=>r("bookmark"),children:[o.jsx(os,{size:18}),o.jsx("span",{children:"북마크"})]}),o.jsxs("button",{className:`nav-btn ${e==="result"?"active":""}`,onClick:()=>r("result"),children:[o.jsx(wt,{size:18}),o.jsx("span",{children:"풀이결과"})]})]})]})}const L1=[{id:"kw-001",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"시제품을 끊임없이 제작하며 사이클을 반복하는 개발 방법론으로, 워터폴과 대조적이며, 소프트웨어 개발을 넘어 기업 경영 전반에서 사용되고 있다. 고객의 변화하는 요구사항과 환경 변화에 능동적인 이 소프트웨어 개발 방법론을 쓰시오.",choices:["구조적 방법론(Structured)","정보공학 방법론(Information Engineering)","애자일(Agile)","폭포수(Waterfall)"],blanks:[{answer:"애자일(Agile)"}],explanation:`애자일(Agile)은 고객의 요구사항 변화에 유연하게 대응할 수 있도록 짧은 주기(스프린트, 이터레이션)를 반복하며 개발하는 방법론이다.
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
형상 통제는 변경 요구를 검토·승인하여 기준선(Baseline)에 반영되도록 조정하는 작업이며, 형상 통제 위원회(CCB)의 승인을 거친다.`},{id:"kw-130",session:"키워드",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에서 괄호에 들어갈 알맞은 용어를 쓰시오.",blocks:[{type:"text",text:"소프트웨어 ( )는 소프트웨어 개발 단계의 각 과정에서 만들어지는 프로그램, 프로그램을 설명하는 문서, 데이터 등을 관리하는 것을 말한다. 소프트웨어의 개발 과정에서 만들어지는 여러 버전들의 변경 사항을 관리하는 일련의 활동이며 이를 지원하는 도구로 Git, SVN 등이 있다."}],choices:["형상관리(SCM)","릴리즈 노트(Release Note)","빌드 자동화(Build Automation)","소프트웨어 패키징(Software Packaging)"],blanks:[{answer:"형상관리(SCM)",accepts:["형상 관리","Software Configuration Management"]}],explanation:"소프트웨어 형상 관리(SCM)는 개발 과정에서 만들어지는 프로그램, 문서, 데이터 등의 변경 사항을 관리하는 일련의 활동으로, Git, SVN, CVS 같은 도구를 사용한다."}],O1=Object.freeze(Object.defineProperty({__proto__:null,default:L1},Symbol.toStringTag,{value:"Module"})),D1=[{id:"2026-2-01",session:"2026년 2회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 함수를 쓰시오.",blocks:[{type:"text",text:`• 임의 길이의 입력 데이터를 고정된 길이의 값으로 변환한다.
• 변환된 값으로 원래 입력 데이터를 역으로 알아내기 어렵다(일방향성).
• 데이터가 변조되지 않았는지 확인하는 무결성 검사에 사용된다.`}],choices:["솔트(Salt)","전자서명(Digital Signature)","대칭키 암호(Symmetric Key)","해시(Hash) 함수"],blanks:[{answer:"해시(Hash) 함수"}],explanation:`정답
해시(Hash) 함수

정답 근거
해시 함수는 임의 길이의 입력을 고정 길이 값(해시값, 다이제스트)으로 바꾸는 일방향 함수다.
• 일방향성: 해시값으로 원래 입력을 알아내기 어렵다.
• 충돌 저항성: 같은 해시값을 갖는 서로 다른 입력을 찾기 어렵다.
• 용도: 무결성 검사, 비밀번호 저장(솔트와 함께), 전자서명
대표 알고리즘은 SHA-256 등이며, MD5는 취약해 권장되지 않는다. 대칭키 암호는 복호화가 가능하므로 일방향이 아니다.

풀이 보강
입력이 조금만 달라져도 해시값이 크게 달라지는 성질을 이용해 변경 여부를 확인한다. 다만 해시값이 같다고 원문이 반드시 같은 것은 아니며, 안전한 비교에는 신뢰할 수 있는 기준 해시가 필요하다. 솔트는 해시의 입력에 더하는 값이지 해시 함수 자체가 아니다. 비밀번호 저장에는 일반 해시만 반복 없이 쓰기보다 전용 비밀번호 해싱 방식을 사용한다.`},{id:"2026-2-02",session:"2026년 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 디자인 패턴을 쓰시오.",blocks:[{type:"text",text:`• 생성(Creational) 패턴에 속한다.
• 서로 관련된 객체들의 묶음(제품군)을 한꺼번에 생성한다.
• 클라이언트는 구체적인 클래스를 몰라도 같은 계열의 객체들을 일관되게 만들 수 있다.`}],choices:["Prototype(프로토타입)","Builder(빌더)","Abstract Factory(추상 팩토리)","Factory Method(팩토리 메서드)"],blanks:[{answer:"Abstract Factory(추상 팩토리)"}],explanation:`정답
Abstract Factory(추상 팩토리)

정답 근거
추상 팩토리(Abstract Factory)는 서로 관련된 객체들의 묶음(제품군)을 구체 클래스를 지정하지 않고 한꺼번에 생성하는 생성 패턴이다.
예) Windows용 버튼·체크박스, Mac용 버튼·체크박스를 각각의 팩토리로 일관되게 생성
오답 정리
• Factory Method: 객체 하나의 생성을 서브 클래스에 위임
• Builder: 복잡한 객체를 단계별로 조립
• Prototype: 기존 객체를 복제해서 생성

풀이 보강
제품군 예시로 같은 테마의 버튼과 체크박스를 생각하면 된다. 클라이언트가 개별 구체 클래스 대신 팩토리 인터페이스를 사용하므로 제품군 전체를 일관되게 교체할 수 있다. «하위 클래스가 생성 메서드를 재정의»하면 팩터리 메서드, «관련 제품들의 생성 인터페이스»이면 추상 팩토리에 초점을 둔다.`},{id:"2026-2-03",session:"2026년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 프로세스들을 SRT(Shortest Remaining Time) 방식으로 스케줄링할 때 평균 대기 시간을 구하시오.",blocks:[{type:"table",headers:["프로세스","도착 시간(ms)","실행 시간(ms)"],rows:[["P1","0","8"],["P2","1","4"],["P3","2","9"],["P4","3","5"]]}],choices:["6.5ms","7.75ms","11.75ms","9ms"],blanks:[{answer:"6.5ms"}],explanation:`정답
6.5ms

정답 근거
SRT는 남은 실행 시간이 가장 짧은 프로세스에 CPU를 주는 선점형 기법이다.
• 0~1: P1 실행(남은 7) → 1ms에 P2(4) 도착, 4 < 7이므로 선점
• 1~5: P2 완료 → 남은 시간 P1 7, P3 9, P4 5 중 P4 선택
• 5~10: P4 완료 → 10~17: P1 완료 → 17~26: P3 완료
대기 시간 = 완료 − 도착 − 실행
• P1 17−0−8 = 9, P2 5−1−4 = 0, P3 26−2−9 = 15, P4 10−3−5 = 2
평균 = (9 + 0 + 15 + 2) / 4 = 6.5ms

풀이 보강
새 작업이 도착할 때는 원래 실행 시간이 아니라 현재 남은 시간을 비교한다. 시각 2에는 실행 중인 작업의 남은 시간이 3, 시각 3에는 2이므로 새 작업이 CPU를 빼앗지 못한다. 반환시간은 완료−도착, 대기시간은 반환시간−실행시간이다. 처음 CPU를 받기까지의 응답시간과 누적 대기시간을 구별한다.`},{id:"2026-2-04",session:"2026년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 <수강> 테이블은 어느 정규형까지 만족하는가? (단, 기본키는 {고객아이디, 과정명}이며, 한 강사는 한 과정만 담당한다.)",blocks:[{type:"table",caption:"<수강>",headers:["고객아이디","과정명","강사번호"],rows:[["C01","데이터베이스","P1"],["C01","네트워크","P3"],["C02","데이터베이스","P2"],["C03","데이터베이스","P1"],["C03","네트워크","P3"]]},{type:"text",text:`함수 종속
• {고객아이디, 과정명} → 강사번호
• 강사번호 → 과정명`}],choices:["제3정규형","BCNF","제1정규형","제2정규형"],blanks:[{answer:"제3정규형"}],explanation:`정답
제3정규형

정답 근거
먼저 후보키를 찾는다. {고객아이디, 과정명}이 강사번호를 결정하고, 강사번호가 과정명을 결정하므로 {고객아이디, 강사번호}도 후보키다. 따라서 세 속성 모두 어떤 후보키에 속하는 주요 속성이다.
• 1NF: 모든 값이 원자값 → 만족
• 2NF·3NF: 부분 함수 종속·이행 함수 종속 제한은 비주요 속성에 대한 규칙인데, 비주요 속성이 없으므로 위반이 없다 → 만족
• BCNF: 모든 비자명한 함수 종속의 결정자가 슈퍼키여야 하는데, 강사번호 → 과정명에서 강사번호는 고객을 결정하지 못해 슈퍼키가 아님 → 위반
따라서 제3정규형까지 만족한다. BCNF로 만들려면 <수강(고객아이디, 강사번호)>와 <강사(강사번호, 과정명)>으로 분해한다.
※ 복원 자료의 가답안(제3정규형)에 맞춰, 판단에 필요한 테이블과 함수 종속을 보충해 다시 구성한 문제다.

풀이 보강
3NF의 정확한 판정은 비자명한 함수 종속 X→A마다 «X가 슈퍼키이거나 A가 주요 속성»인지 확인하는 것이다. BCNF는 주요 속성에 대한 예외 없이 X가 슈퍼키여야 한다. 강사번호만으로는 고객을 식별할 수 없으므로 슈퍼키가 아니다. 표의 우연한 중복 여부로 업무상 함수 종속을 새로 추정하지 말고 제시된 종속을 기준으로 판단한다.`},{id:"2026-2-05",session:"2026년 2회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"다음과 같이 점수 구간을 나누고, 구간마다 대표값을 하나씩 골라 테스트하는 블랙박스 테스트 기법을 쓰시오.",blocks:[{type:"table",headers:["점수 구간","등급","테스트 입력값"],rows:[["90~100","A","95"],["80~89","B","85"],["70~79","C","75"],["60~69","D","65"],["0~59","E","30"]]}],choices:["경계값 분석","동등 분할 테스트(동치 분할)","오류 예측","원인-효과 그래프"],blanks:[{answer:"동등 분할 테스트(동치 분할)"}],explanation:`정답
동등 분할 테스트(동치 분할)

정답 근거
동등(동치) 분할 테스트는 입력 범위를 같은 결과를 내는 구간(동치 클래스)으로 나누고, 각 구간에서 대표값을 하나씩 골라 테스트하는 블랙박스 기법이다.
예) 90~100(A), 80~89(B) … 구간마다 95, 85처럼 대표값 하나씩
오답 정리
• 경계값 분석: 구간의 경계(89, 90 등)를 집중적으로 테스트
• 원인-효과 그래프: 입력 조건 조합과 결과의 관계를 그래프로 분석
• 오류 예측: 경험으로 오류가 날 만한 값을 추측

풀이 보강
대표값을 고르는 목적은 같은 분할에 속한 값들이 비슷하게 처리된다는 가정 아래 테스트 수를 줄이는 것이다. 유효 구간만 검사하지 말고 허용 범위 밖의 무효 구간도 따로 나눈다. 경곗값 분석은 이 분할의 경계 부근을 집중 확인하는 기법이므로, 구간 대표값을 고르는 동등 분할과 함께 활용할 수 있다.`},{id:"2026-2-06",session:"2026년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 설명에 해당하는 라우팅 프로토콜을 쓰시오.",blocks:[{type:"text",text:`• 하나의 자율 시스템(AS) 내부에서 사용하는 라우팅 프로토콜이다.
• 링크 상태(Link State) 정보를 광고하여 네트워크 전체 구성을 파악한다.
• Dijkstra 최단 경로 알고리즘으로 경로를 계산한다.`}],choices:["BGP","EGP","OSPF","RIP"],blanks:[{answer:"OSPF"}],explanation:`정답
OSPF

정답 근거
OSPF(Open Shortest Path First)는 자율 시스템(AS) 내부에서 쓰는 링크 상태(Link State) 라우팅 프로토콜이다.
• 링크 상태 광고(LSA)로 전체 네트워크 지도를 만들고 Dijkstra 알고리즘으로 최단 경로를 계산
• RIP: 거리 벡터 방식, 홉 수 기준(최대 15홉)
• BGP·EGP: 자율 시스템 사이(AS 간)의 라우팅
※ 복원 가답안이며, 같은 링크 상태 방식인 IS-IS도 설명에 해당할 여지가 있다.

풀이 보강
OSPF의 최단 경로는 설정된 링크 비용의 합을 최소화한다는 의미이며, 단순히 라우터를 가장 적게 거치는 경로라는 뜻이 아니다. 링크 상태 정보를 공유한 뒤 각 라우터가 자신을 출발점으로 최단 경로 트리를 계산한다. «내부 라우팅»만으로는 RIP도 가능하므로 링크 상태·다익스트라라는 추가 단서를 함께 확인한다.`},{id:"2026-2-07",session:"2026년 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 결합도를 쓰시오.",blocks:[{type:"text",text:`• 한 모듈이 다른 모듈의 내부 변수나 기능을 직접 참조하거나 수정한다.
• 결합도 중 가장 강하며(가장 나쁘며), 캡슐화를 깨뜨린다.`}],choices:["공통 결합도","자료 결합도","내용 결합도","스탬프 결합도"],blanks:[{answer:"내용 결합도"}],explanation:`정답
내용 결합도

정답 근거
내용 결합도(Content Coupling)는 한 모듈이 다른 모듈의 내부 자료나 코드를 직접 참조·수정하는 경우로, 결합도 중 가장 강하다(가장 나쁘다).
결합도(약함 → 강함): 자료 < 스탬프 < 제어 < 외부 < 공통 < 내용
좋은 설계는 결합도는 낮게, 응집도는 높게 유지한다.

풀이 보강
공통 결합도는 여러 모듈이 공유 전역 데이터를 쓰는 경우이고, 내용 결합도는 상대 모듈의 숨겨진 내부 구현을 직접 건드리는 경우다. 예를 들어 상대 함수의 내부 변수 위치를 가정해 수정하면 구현 변경이 다른 모듈까지 깨뜨린다. 공개된 인터페이스로 필요한 값만 전달할수록 이 의존을 줄일 수 있다.`},{id:"2026-2-08",session:"2026년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 두 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오.",blocks:[{type:"table",caption:"<A>",headers:["id","v"],rows:[["1","10"],["1","20"],["2","30"]]},{type:"table",caption:"<B>",headers:["id","w"],rows:[["1","100"],["3","300"],["4","400"]]}],codeSnippet:`SELECT COUNT(*)
FROM A RIGHT JOIN B ON A.id = B.id
WHERE A.id IS NULL;`,language:"sql",choices:["0","1","2","3"],blanks:[{answer:"2"}],explanation:`정답
2

정답 근거
RIGHT JOIN은 오른쪽 테이블 B의 모든 행을 남기고, 왼쪽 A에 짝이 없으면 A의 열을 NULL로 채운다.
• B.id = 1 → A의 (1,10), (1,20)과 결합 (2행)
• B.id = 3 → A에 없음 → A.id는 NULL
• B.id = 4 → A에 없음 → A.id는 NULL
따라서 A.id IS NULL인 행은 2개다. A의 (2,30)은 B에 짝이 없어 결과에 나오지 않는다.

풀이 보강
조인 직후에는 B.id=1에 대응하는 두 행과 B.id=3·4의 짝 없는 행을 합해 총 4행이다. WHERE는 그중 A.id가 NULL인 두 행만 남긴다. 여기서 NULL은 숫자 0이나 빈 문자열이 아니므로 =NULL 대신 IS NULL로 검사한다. 조인 전체 행 수, 필터 후 행 수, COUNT(특정 열)의 수를 서로 다른 단계로 구분한다.`},{id:"2026-2-09",session:"2026년 2회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`s = "_THIS_IS_EASY_SLICING"
print(s[:4] + s[6:8] + s[18:])`,language:"python",choices:["_THISISING","_THI IS ING","THIISING","_THIISING"],blanks:[{answer:"_THIISING"}],explanation:`정답
_THIISING

정답 근거
파이썬 슬라이싱 s[시작:끝]은 끝 인덱스 바로 앞까지 잘라낸다.
• s[:4] → 0~3번째 → "_THI"
• s[6:8] → 6~7번째 → "IS"
• s[18:] → 18번째부터 끝까지 → "ING"
+로 이어 붙이면 공백 없이 _THIISING이 된다.

풀이 보강
문자열 전체 길이는 21이고 마지막 구간은 인덱스 18=I, 19=N, 20=G다. 첫 구간은 끝값 4를 포함하지 않아 S까지 가져오지 않는다. 두 번째 구간의 IS를 앞 구간 _THI에 바로 붙이므로 경계에 I가 연속해서 두 번 나타난다. 이 중복을 임의로 지우거나 출력 사이에 공백을 넣지 않는다.`},{id:"2026-2-10",session:"2026년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 두 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오.",blocks:[{type:"table",caption:"<A>",headers:["x"],rows:[["10"],["20"],["30"],["40"]]},{type:"table",caption:"<B>",headers:["y"],rows:[["5"],["15"],["25"]]}],codeSnippet:`SELECT COUNT(*)
FROM A
WHERE A.x > (SELECT AVG(B.y)
             FROM B
             WHERE B.y < A.x - 5);`,language:"sql",choices:["1","2","3","4"],blanks:[{answer:"3"}],explanation:`정답
3

정답 근거
상관 서브쿼리는 바깥 쿼리의 행마다 서브쿼리를 다시 실행한다.
• x = 10: 비교할 B.y 행이 없어 평균(AVG)이 NULL → NULL과의 비교는 참이 아니므로 제외
• x = 20, 30, 40: 평균보다 커서 조건 통과
따라서 COUNT(*)는 3이다. AVG는 대상 행이 없으면 0이 아니라 NULL을 반환한다는 점이 핵심이다.

풀이 보강
행별 서브쿼리 결과를 적으면 x=10은 평균 NULL, x=20은 평균 5, x=30은 평균 10, x=40은 평균 15다. B.y < A.x−5는 등호를 포함하지 않아 x=20일 때 y=15를 넣지 않는다. WHERE에서는 참인 비교만 남기므로 x=10의 UNKNOWN은 제외한다. 상관 조건이 있어 평균을 전체 B에 대해 한 번만 구하면 잘못된 풀이가 된다.`},{id:"2026-2-11",session:"2026년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"계절 값('봄', '여름', '가을', '겨울')만 허용하는 도메인을 만들려고 한다. 다음 SQL의 괄호에 들어갈 키워드를 쓰시오.",codeSnippet:`CREATE DOMAIN SEASON CHAR(2)
    DEFAULT '봄'
    CONSTRAINT VALID_SEASON (        ) (VALUE IN ('봄', '여름', '가을', '겨울'));`,language:"sql",choices:["REFERENCES","DEFAULT","UNIQUE","CHECK"],blanks:[{answer:"CHECK"}],explanation:`정답
CHECK

정답 근거
CHECK 제약조건은 값이 지정한 조건을 만족하는지 검사한다.
예) CREATE DOMAIN SEASON CHAR(2) CONSTRAINT VALID_SEASON CHECK (VALUE IN ('봄', '여름', '가을', '겨울'));
오답 정리
• UNIQUE: 중복 금지 / DEFAULT: 기본값 지정 / REFERENCES: 외래키 참조
CHECK는 NULL을 '알 수 없음'으로 보고 통과시키므로, NULL까지 막으려면 NOT NULL을 함께 쓴다.

풀이 보강
VALUE는 도메인에 들어오는 값을 가리킨다. DEFAULT는 값을 생략했을 때 봄을 넣고, CHECK는 실제 입력이 허용된 네 계절인지 검사한다. 따라서 DEFAULT만으로 다른 계절 문자열을 막을 수 없다. CREATE DOMAIN은 DBMS마다 지원 여부가 다르며, 이 문항은 제시된 도메인 제약 문법에서 조건 검사 키워드를 고르는 문제다.`},{id:"2026-2-12",session:"2026년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"IP 주소 10.0.0.0 ~ 10.0.0.15(총 16개)를 하나의 네트워크로 나타낼 때, CIDR 표기의 프리픽스 길이를 쓰시오.",blocks:[{type:"text",text:"10.0.0.0/(   )"}],choices:["/24","/28","/30","/27"],blanks:[{answer:"/28"}],explanation:`정답
/28

정답 근거
주소 16개 = 2⁴이므로 호스트 부분이 4비트다.
프리픽스 길이 = 32 − 4 = 28 → 10.0.0.0/28 (서브넷 마스크 255.255.255.240)
참고: /24 → 256개, /27 → 32개, /30 → 4개 주소

풀이 보강
전체 주소 수 16과 호스트에 실제 할당 가능한 주소 수를 혼동하지 않는다. 일반적인 /28 서브넷에서는 첫 주소 10.0.0.0이 네트워크, 마지막 10.0.0.15가 브로드캐스트이므로 호스트 범위는 .1~.14이다. 문제는 전체 주소 블록의 프리픽스를 묻기 때문에 14가 아니라 16을 2의 거듭제곱으로 바꾼다.`},{id:"2026-2-13",session:"2026년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
    static int f(int n) {
        if (n <= 1) return n;
        return f(n - 3) + f(n - 1);
    }
    public static void main(String[] args) {
        System.out.print(f(5));
    }
}`,language:"java",choices:["0","1","2","3"],blanks:[{answer:"1"}],explanation:`정답
1

정답 근거
f(n)은 n ≤ 1이면 n을, 아니면 f(n−3) + f(n−1)을 반환한다. 작은 값부터 차례로 구한다.
• f(2) = f(−1) + f(1) = −1 + 1 = 0
• f(3) = f(0) + f(2) = 0 + 0 = 0
• f(4) = f(1) + f(3) = 1 + 0 = 1
• f(5) = f(2) + f(4) = 0 + 1 = 1

풀이 보강
기저 조건이 n==0이나 n==1이 아니라 n<=1이라는 점이 중요하다. 그래서 음수 인수 f(-1)도 -1을 그대로 반환하며 0으로 처리하지 않는다. 재귀식의 두 호출을 각각 계산해 더해야 하고 호출 횟수를 더하는 문제가 아니다. f(5)는 f(2)+f(4)라서 0+1이며 피보나치의 n−1·n−2 규칙을 대신 적용하면 틀린다.`},{id:"2026-2-14",session:"2026년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"<학생> 테이블에서 이름이 '이'로 시작하는 학생을 이름의 내림차순으로 조회하려고 한다. SQL의 괄호(①, ②)에 들어갈 내용을 쓰시오.",codeSnippet:`SELECT *
FROM 학생
WHERE 이름 LIKE '( ① )'
ORDER BY 이름 ( ② );`,language:"sql",choices:["이_","%이","ASC","이%","DESC"],blanks:[{label:"①",answer:"이%"},{label:"②",answer:"DESC"}],explanation:`정답
①: 이%
②: DESC

정답 근거
SELECT * FROM 학생 WHERE 이름 LIKE '이%' ORDER BY 이름 DESC;
• %: 0개 이상의 임의 문자 → '이%'는 '이'로 시작하는 모든 이름
• _: 정확히 한 글자 → '이_'는 '이'로 시작하는 두 글자 이름만
• '%이'는 '이'로 끝나는 이름
• ORDER BY의 기본값은 ASC(오름차순), 내림차순은 DESC

풀이 보강
예를 들어 이, 이수, 이순신은 모두 이%에 맞지만 이_에는 이수처럼 정확히 두 글자인 이름만 맞는다. %이는 마지막 글자가 이인 이름을 찾는 반대 방향의 패턴이다. 조건으로 걸러진 행을 마지막에 ORDER BY 이름 DESC로 정렬하며, 한글의 구체 정렬 결과는 DBMS의 문자 정렬 규칙에 따른다.`},{id:"2026-2-15",session:"2026년 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 트리를 후위 순회(왼쪽 → 오른쪽 → 자신)할 때, 세 번째로 방문하는 노드의 값을 쓰시오. (괄호 안은 노드의 값)",blocks:[{type:"text",text:`• 루트 노드: an(5)
• an(5)의 왼쪽 자식: bn(12), 오른쪽 자식: cn(7)
• bn(12)의 왼쪽 자식: dn(3), 오른쪽 자식: en(8)
• dn, en, cn은 자식이 없다.`}],choices:["3","7","8","12"],blanks:[{answer:"12"}],explanation:`정답
12

정답 근거
후위 순회는 왼쪽 자식 → 오른쪽 자식 → 자기 자신 순으로 방문한다.
방문 순서가 dn → en → bn → cn → an이므로 세 번째로 방문하는 노드는 bn이고, bn의 값 12가 출력된다.
참고: 전위는 자기 → 왼쪽 → 오른쪽, 중위는 왼쪽 → 자기 → 오른쪽

풀이 보강
왼쪽 서브트리 전체를 먼저 처리하므로 값의 실제 방문 순서는 3 → 8 → 12 → 7 → 5이다. 세 번째는 오른쪽 서브트리의 7이 아니라 왼쪽 서브트리의 루트 12다. 루트를 처음 출력하면 전위, 두 자식 처리 사이에 출력하면 중위, 두 자식 처리 뒤에 출력하면 후위라는 위치로 구분하면 된다.`},{id:"2026-2-16",session:"2026년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class X {
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
}`,language:"java",choices:["20b","10a","10a20b","20b10a"],blanks:[{answer:"10a20b"}],explanation:`정답
10a20b

정답 근거
객체 생성 순서와 메서드 호출 순서를 따라가면 된다.
• new Y(10, 20) → super(10)으로 부모 X의 a = 10, 이어서 Y의 b = 20
• 자식 f()가 super.f()를 먼저 호출 → "10a" 출력
• 이어서 자식 부분 → "20b" 출력
print는 줄을 바꾸지 않으므로 붙어서 10a20b가 된다.

풀이 보강
X obj는 참조 변수의 타입이고 new Y(...)는 실제 객체의 타입이다. obj.f()는 오버라이딩된 Y.f()를 실행하지만 그 안의 super.f()는 부모 구현을 명시적으로 호출한다. 10+"a"는 숫자 덧셈이 아니라 문자열 연결이다. 부모 생성자는 a만 초기화하며 이 코드에서 생성자 자체는 아무것도 출력하지 않는다.`},{id:"2026-2-17",session:"2026년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 세 서브넷(A, B, C)에서 각각 호스트에 할당할 수 있는 IP 주소를 보기에서 고르시오.",blocks:[{type:"table",headers:["서브넷","네트워크"],rows:[["A","192.168.35.0/24"],["B","129.200.8.0/22"],["C","192.168.36.0/24"]]}],choices:["192.168.35.0","192.168.36.0","129.200.8.249","192.168.36.249","129.200.12.1","192.168.35.72"],blanks:[{label:"A",answer:"192.168.35.72"},{label:"B",answer:"129.200.8.249"},{label:"C",answer:"192.168.36.249"}],explanation:`정답
A: 192.168.35.72
B: 129.200.8.249
C: 192.168.36.249

정답 근거
각 서브넷에서 네트워크 주소(첫 주소)와 브로드캐스트 주소(마지막 주소)를 뺀 나머지가 할당 가능한 호스트 IP다.
• A 192.168.35.0/24 → .1 ~ .254 → 192.168.35.72 (192.168.35.0은 네트워크 주소)
• B 129.200.8.0/22 → 129.200.8.0 ~ 129.200.11.255 → 129.200.8.249 (129.200.12.1은 범위 밖)
• C 192.168.36.0/24 → 192.168.36.249 (192.168.36.0은 네트워크 주소)

풀이 보강
/22는 마스크 255.255.252.0이며 세 번째 옥텟을 4개씩 묶는다. 8~11이 같은 블록이므로 호스트 범위는 129.200.8.1~129.200.11.254이다. 129.200.8.0은 마지막 옥텟이 0이라서가 아니라 호스트 비트 전체가 0이라 제외된다. 같은 /22 안의 129.200.9.0처럼 마지막 옥텟이 0인 주소도 호스트가 될 수 있다.`},{id:"2026-2-18",session:"2026년 2회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`d = {"NYC": "NEWYORK", "LDN": "LONDON", "PAR": "PARIS", "TKY": "TOKYO"}
result = ""
for k, v in d.items():
    result += k[-1] + v[0]
print(result)`,language:"python",choices:["NCLNPRTY","CNNLRPYT","CNNLPRYT","CLRYNNPT"],blanks:[{answer:"CNNLRPYT"}],explanation:`정답
CNNLRPYT

정답 근거
삽입 순서대로 키와 값을 꺼내 key[-1](키의 마지막 글자) + value[0](값의 첫 글자)를 이어 붙인다.
• NYC:NEWYORK → C + N = CN
• LDN:LONDON → N + L = NL
• PAR:PARIS → R + P = RP
• TKY:TOKYO → Y + T = YT
결과는 CNNLRPYT이다. Python 3.7부터 딕셔너리는 삽입 순서를 유지한다.

풀이 보강
items()가 꺼내는 것은 키와 값의 한 쌍이다. 키의 마지막 문자와 값의 첫 문자를 선택하는 방향을 바꾸면 다른 보기가 된다. 누적 문자열은 CN → CNNL → CNNLRP → CNNLRPYT 순서다. 딕셔너리를 정렬하라는 코드가 없으므로 키의 알파벳순으로 다시 배열하지 않는다.`},{id:"2026-2-19",session:"2026년 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때 출력되는 네 값을 순서대로 쓰시오.",codeSnippet:`#include <stdio.h>
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
}`,language:"c",choices:["2","5","8","50","100"],blanks:[{label:"첫 번째 값",answer:"50"},{label:"두 번째 값",answer:"50"},{label:"세 번째 값",answer:"2"},{label:"네 번째 값",answer:"8"}],explanation:`정답
첫 번째 값: 50
두 번째 값: 50
세 번째 값: 2
네 번째 값: 8

정답 근거
C는 인수를 값으로 복사해서 전달한다(포인터도 주소값이 복사된다).
• *p = 50: 포인터가 가리키는 원본 i를 직접 바꿈 → i = 50
• p = 새 주소: 함수 안의 복사본 p만 바뀌고 호출자에는 영향 없음 → i는 그대로 50
• *q = q[0] = 2, *(q+3) = q[3] = 8
따라서 50, 50, 2, 8이 출력된다.

풀이 보강
set은 전달받은 주소를 역참조해 호출자의 정수 저장공간을 바꾸지만 move는 매개변수 p가 가리키는 곳만 지역 변수 x로 바꾼다. move가 끝난 뒤에도 i는 50이다. q의 주소 이동은 int 원소 단위여서 q+3은 네 번째 원소의 주소다. 포인터의 값 변경과 그 포인터가 가리키는 값 변경을 구별한다.`},{id:"2026-2-20",session:"2026년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class X {
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
}`,language:"java",choices:["18","500","509","1000"],blanks:[{answer:"509"}],explanation:`정답
509

정답 근거
오버라이딩된 메서드는 참조 변수의 타입이 아니라 실제 객체의 메서드가 실행된다(동적 바인딩).
• X 객체의 f() → 1 + 5 + 3 = 9
• Y 객체의 f() → Y가 재정의한 f() → 10 × 50 = 500
합계 9 + 500 = 509

풀이 보강
두 변수의 선언 타입이 모두 X여도 실제 객체는 각각 X와 Y이므로 f()의 구현이 다르게 선택된다. Y.f()가 실행될 때 X.f()가 자동으로 먼저 실행되는 것은 아니다. 부모 구현을 함께 실행하려면 자식 메서드 안에서 super.f() 등을 명시해야 한다. 이 코드는 서로 다른 두 객체의 반환값 9와 500을 더한다.`}],M1=Object.freeze(Object.defineProperty({__proto__:null,default:D1},Symbol.toStringTag,{value:"Module"})),B1=[{id:"2026-1-01",session:"2026년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    int a[10] = {10, 20, 30, 40, 50, 60, 70, 80, 90, 80};
    int sum = 0;
    for (int i = 0; i < 10; i++)
        sum += a[i];
    double avg1 = (double)sum / 10;
    double avg2 = sum / 10.0;
    printf("%.2f", avg1 + avg2);
    return 0;
}`,language:"c",choices:["106","53.00","106.00","106.000000"],blanks:[{answer:"106.00"}],explanation:`정답
106.00

정답 근거
배열 10개의 합 530을 개수 10으로 나누면 평균은 53이다. 두 방식 모두 53이므로 합은 106이다.
• %.2f: 소수점 둘째 자리까지 출력 → 106.00
• %f(기본): 소수점 여섯째 자리까지 출력 → 106.000000
정수끼리 나누면 몫만 남으므로, 실수 평균이 필요할 때는 (double) 형 변환에 주의한다.

풀이 보강
형 변환은 나눗셈 전에 이루어져야 한다. (double)sum/10과 sum/10.0은 둘 다 실수 나눗셈이지만 (double)(sum/10)은 정수 나눗셈이 끝난 뒤 변환한다. 이 데이터의 합 530은 10으로 나누어떨어져 우연히 차이가 드러나지 않는다. 출력 형식 %.2f가 소수점 아래 두 자리 00까지 요구하므로 106만 적는 보기와 구별한다.`},{id:"2026-1-02",session:"2026년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 디자인 패턴을 각각 쓰시오.",blocks:[{type:"text",text:`① 기능을 정의하는 추상 계층과 실제 구현 계층을 분리하여 각각 독립적으로 확장할 수 있게 하는 패턴
② 한 객체의 상태가 바뀌면 그 객체를 구독하는 다른 객체들에게 변경 사실을 자동으로 알리는 패턴`}],choices:["Mediator","Strategy","Bridge","Adapter","Observer"],blanks:[{label:"①",answer:"Bridge"},{label:"②",answer:"Observer"}],explanation:`정답
①: Bridge
②: Observer

정답 근거
• Bridge(브리지): 기능(추상) 계층과 구현 계층을 분리해 각각 독립적으로 확장하는 구조 패턴
• Observer(옵서버): 한 객체의 상태가 바뀌면 구독한 객체들에게 자동으로 알리는 행위 패턴(일대다 의존)
오답 정리
• Adapter: 호환되지 않는 인터페이스를 변환
• Mediator: 객체 간 상호작용을 중재자가 캡슐화
• Strategy: 알고리즘을 교체 가능하게 캡슐화

풀이 보강
브리지는 «무엇을 할지»와 «어떻게 구현할지»를 서로 다른 계층으로 두어 두 방향의 변경을 분리한다. 옵서버는 구독 목록을 통해 변경을 통지하므로 주체가 모든 구체 관찰자 클래스를 알 필요가 없다. 둘 다 의존을 줄이지만 전자는 구조의 확장, 후자는 변경 통지가 목적이므로 같은 패턴으로 묶지 않는다.`},{id:"2026-1-03",session:"2026년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"데이터베이스 설계 과정을 순서대로 올바르게 나열한 것을 고르시오.",choices:["개념적 설계 → 요구사항 분석 → 논리적 설계 → 물리적 설계 → 구현","요구사항 분석 → 논리적 설계 → 개념적 설계 → 물리적 설계 → 구현","요구사항 분석 → 물리적 설계 → 논리적 설계 → 개념적 설계 → 구현","요구사항 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계 → 구현"],blanks:[{answer:"요구사항 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계 → 구현"}],explanation:`정답
요구사항 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계 → 구현

정답 근거
데이터베이스 설계는 추상적인 것에서 구체적인 것 순서로 진행한다.
• 요구사항 분석: 사용자 요구 수집·분석
• 개념적 설계: E-R 다이어그램 작성 (DBMS와 무관)
• 논리적 설계: 특정 DBMS의 스키마(테이블)로 변환, 정규화
• 물리적 설계: 저장 구조·인덱스·접근 경로 결정
• 구현: 실제 DB 생성 (DDL 실행)

풀이 보강
산출물을 순서와 연결하면 요구 명세 → ER 모델 → 관계 스키마·키·정규화 결과 → 저장 구조·인덱스 설계 → 실제 테이블이 된다. 논리 설계는 선택한 데이터 모델의 구조를 정하고, 물리 설계는 구체 DBMS의 저장·접근 특성을 고려한다. 저장 위치부터 정하는 보기는 사용자 요구와 논리 구조보다 구현을 앞세워 순서가 뒤바뀐다.`},{id:"2026-1-04",session:"2026년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 비기능 요구사항이 각각 어떤 유형에 해당하는지 쓰시오.",blocks:[{type:"text",text:`① 시스템은 Windows와 Linux에서 모두 동작해야 한다.
② 시스템 실행에 필요한 최소 메모리와 장치를 확보해야 한다.
③ 사용자의 요청에 1초 이내로 응답해야 한다.`}],choices:["자원","가용성","보안성","유지보수성","이식성","성능"],blanks:[{label:"①",answer:"이식성"},{label:"②",answer:"자원"},{label:"③",answer:"성능"}],explanation:`정답
①: 이식성
②: 자원
③: 성능

정답 근거
비기능 요구사항은 기능 외에 시스템이 갖춰야 할 품질·제약 조건이다.
• 이식성: 다른 OS·하드웨어 환경에서도 동작 → 서로 다른 운영체제 지원
• 자원: 필요한 메모리·장치 등 하드웨어 조건 → 최소 메모리·장치 확보
• 성능: 응답 시간, 처리량 → 1초 이내 응답
그 밖에 보안성, 가용성, 유지보수성 등이 있다.

풀이 보강
분류할 때 요구사항에 적힌 측정 대상을 찾는다. OS 변경 가능성은 이식성, 최소 메모리·장치 조건은 자원 제약, 응답시간 상한은 성능이다. 가용성은 정해진 시간에 서비스를 사용할 수 있는 정도이고, 유지보수성은 수정·분석·시험의 용이성이다. 모두 비기능 요구지만 각 빈칸의 구체 단서와 연결해야 한다.`},{id:"2026-1-05",session:"2026년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 용어를 영문 약자로 쓰시오.",blocks:[{type:"text",text:`• 정보보호 관리체계를 뜻한다.
• 조직의 정보 자산을 보호하기 위한 정책, 절차, 통제를 체계적으로 수립하고 운영한다.
• 국내에서는 한국인터넷진흥원(KISA)이 인증한다.`}],choices:["ESM","SIEM","ISMS","PIMS"],blanks:[{answer:"ISMS"}],explanation:`정답
ISMS

정답 근거
ISMS(Information Security Management System, 정보보호 관리체계)는 조직의 정보 자산을 보호하기 위한 정책·절차·통제를 체계적으로 운영하는 관리체계이며 국내 ISMS 인증제도의 대상이다.
오답 정리
• PIMS: 개인정보보호 관리체계 (현재 ISMS-P로 통합)
• ESM: 여러 보안 솔루션을 통합 관리하는 시스템
• SIEM: 로그·보안 이벤트를 통합 수집·분석하는 솔루션

풀이 보강
ISMS는 보안 장비 한 대를 설치하는 것이 아니라 위험 평가, 정책 수립, 보호대책 운영, 점검·개선까지 지속하는 관리체계다. 개인정보 처리 과정의 보호까지 함께 평가하는 ISMS-P와 범위를 구별한다. KISA는 국내 제도 운영·인증에 관여하지만 모든 분야의 인증서를 KISA만 발급한다고 일반화하지 않는다.`},{id:"2026-1-06",session:"2026년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"HDLC에 대한 다음 설명에 해당하는 용어를 각각 쓰시오.",blocks:[{type:"text",text:`① 사용자 데이터를 전달하는 프레임
② 흐름 제어와 오류 제어를 위한 감독용 프레임
③ 링크의 설정·해제 등 제어를 위한 프레임
④ 모든 국이 대등한 관계에서 통신하는 동작 모드
⑤ 종국이 주국의 허락 없이 자발적으로 응답할 수 있는 동작 모드`}],choices:["정보(I)","정규 응답(NRM)","비동기 균형(ABM)","감독(S)","비동기 응답(ARM)","비번호(U)"],blanks:[{label:"①",answer:"정보(I)"},{label:"②",answer:"감독(S)"},{label:"③",answer:"비번호(U)"},{label:"④",answer:"비동기 균형(ABM)"},{label:"⑤",answer:"비동기 응답(ARM)"}],explanation:`정답
①: 정보(I)
②: 감독(S)
③: 비번호(U)
④: 비동기 균형(ABM)
⑤: 비동기 응답(ARM)

정답 근거
HDLC(High-level Data Link Control)의 프레임과 동작 모드
프레임
• 정보(I) 프레임: 사용자 데이터 전달
• 감독(S) 프레임: 흐름 제어·오류 제어(수신 확인 등)
• 비번호(U) 프레임: 링크 설정·해제 등 제어
동작 모드
• NRM(정규 응답 모드): 종국은 주국의 허락이 있어야 응답
• ARM(비동기 응답 모드): 종국이 허락 없이 자발적으로 응답
• ABM(비동기 균형 모드): 모든 국이 대등하게(혼합국) 통신

풀이 보강
I·S·U는 프레임의 종류이고 NRM·ARM·ABM은 통신의 동작 모드라서 서로 다른 분류 축이다. ARM도 주국·종국의 불균형 관계를 유지하되 종국의 자발적 응답을 허용한다. ABM은 혼합국끼리 대등한 균형 관계라는 점이 핵심이므로, 단순히 «허락 없이 송신»이라는 표현만 보고 두 모드를 섞지 않는다.`},{id:"2026-1-07",session:"2026년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class A {
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
}`,language:"java",choices:["0","1","2","3"],blanks:[{answer:"2"}],explanation:`정답
2

정답 근거
Java는 오버로딩과 오버라이딩을 결정하는 시점이 다르다.
• 오버로딩(같은 이름, 다른 매개변수): 컴파일 시점에 참조 변수의 타입(A) 기준으로 결정 → A에는 f(Object)만 있으므로 f(Object)로 고정
• 오버라이딩: 실행 시점에 실제 객체(B) 기준으로 실행 → B가 재정의한 f(Object)가 실행되어 2
B에만 있는 f(String)은 A 타입 기준으로는 보이지 않아 선택되지 않는다.

풀이 보강
f("a")가 쓰인 곳은 상속된 A.g()의 본문이다. 그 코드를 컴파일할 때 A에서 찾을 수 있는 f(Object)가 선택되며 실행 시 B.f(Object)로 동적 연결된다. B.f(String)은 다른 시그니처라 이 호출을 가로채지 않는다. 오버로딩 선택을 실제 객체 B에서 다시 수행한다고 생각하면 3을 고르게 되므로 호출이 적힌 클래스도 확인한다.`},{id:"2026-1-08",session:"2026년 1회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`s = "HumanDev"[::-1]
for c in "ong":
    s = s.replace(c, "")
print(s)`,language:"python",choices:["veDamuH","veamuH","HumaDev","veDnamuH"],blanks:[{answer:"veDamuH"}],explanation:`정답
veDamuH

정답 근거
• "HumanDev"[::-1] → "veDnamuH" (문자열 뒤집기)
• o, n, g를 각각 제거 → o와 g는 없고 n 하나만 제거 → "veDamuH"
※ replace("ong", "")처럼 "ong"라는 문자열 덩어리를 지우면 일치하는 부분이 없어 "veDnamuH"가 그대로 남는다.

풀이 보강
문자열은 불변이라 replace는 새 문자열을 반환한다. 여기서는 매 반복 s에 반환값을 다시 대입하므로 제거 결과가 누적된다. n을 제거한 뒤의 문자열은 v,e,D,a,m,u,H의 일곱 글자다. 대문자 D·H는 그대로 유지되며, "ong"를 통째로 지우는 연산과 세 문자를 하나씩 지우는 연산은 결과가 다르다.`},{id:"2026-1-09",session:"2026년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"<학생> 테이블에는 학과(DEPT)별로 컴퓨터 50명, 전자 100명, 기계 50명이 저장되어 있다. 각 SQL의 결과(행 수 또는 값)를 쓰시오.",codeSnippet:`① SELECT DEPT FROM 학생;
② SELECT DISTINCT DEPT FROM 학생;
③ SELECT COUNT(DISTINCT DEPT) FROM 학생 WHERE DEPT = '컴퓨터';`,language:"sql",choices:["200행","값 1","150행","1행","3행","값 3","값 50"],blanks:[{label:"①",answer:"200행"},{label:"②",answer:"3행"},{label:"③",answer:"값 1"}],explanation:`정답
①: 200행
②: 3행
③: 값 1

정답 근거
전체 학생 수는 50 + 100 + 50 = 200명이다.
• SELECT DEPT: 중복을 포함한 모든 행 → 200행
• SELECT DISTINCT DEPT: 중복 제거 → 학과 종류 수인 3행
• SELECT COUNT(DISTINCT DEPT) … WHERE DEPT = 한 학과: 한 학과만 남으므로 서로 다른 학과 수는 1
DISTINCT는 중복을 제거하고, COUNT(DISTINCT 열)은 서로 다른 값의 개수를 센다.

풀이 보강
①과 ②는 여러 데이터 행을 반환하는 조회이고 ③은 집계값 하나를 담은 1행을 반환한다. 따라서 ③의 «값 1»과 보기의 «1행»은 다른 질문에 대한 표현이다. 컴퓨터 학생이 50명이어도 DISTINCT로 남는 학과 값은 컴퓨터 한 종류다. COUNT(DEPT)와 COUNT(DISTINCT DEPT)를 구별해 50을 고르지 않는다.`},{id:"2026-1-10",session:"2026년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"PLAYER 테이블의 TEAM_ID를 TEAM 테이블의 TEAM_ID2를 참조하는 외래키로 지정하고, 제약조건 이름을 TEAM_TF로 하려고 한다. SQL의 괄호(①~⑤)에 들어갈 내용을 쓰시오.",codeSnippet:`ALTER TABLE PLAYER
ADD ( ① ) TEAM_TF
( ② ) KEY (( ③ ))
( ④ ) TEAM (( ⑤ ));`,language:"sql",choices:["FOREIGN","CONSTRAINT","TEAM_ID","REFERENCES","UNIQUE","TEAM_ID2","PRIMARY","CHECK"],blanks:[{label:"①",answer:"CONSTRAINT"},{label:"②",answer:"FOREIGN"},{label:"③",answer:"TEAM_ID"},{label:"④",answer:"REFERENCES"},{label:"⑤",answer:"TEAM_ID2"}],explanation:`정답
①: CONSTRAINT
②: FOREIGN
③: TEAM_ID
④: REFERENCES
⑤: TEAM_ID2

정답 근거
완성된 SQL
ALTER TABLE PLAYER ADD CONSTRAINT TEAM_TF FOREIGN KEY (TEAM_ID) REFERENCES TEAM (TEAM_ID2);
• CONSTRAINT 이름: 제약조건에 이름을 붙임
• FOREIGN KEY (열): 외래키로 지정할 현재 테이블의 열
• REFERENCES 테이블 (열): 참조할 부모 테이블과 열
PRIMARY KEY, CHECK, UNIQUE는 다른 종류의 제약조건이다.

풀이 보강
PLAYER.TEAM_ID는 참조하는 자식 열이고 TEAM.TEAM_ID2는 참조되는 부모 열이다. TEAM_TF는 테이블명이나 열명이 아니라 제약조건명이다. 참조 대상 열에는 기본키·유일성 등 외래키가 참조할 수 있는 제약이 갖추어져야 한다. 외래키는 중복이 가능하고 NULL 허용 여부는 별도 NOT NULL 지정과 함께 판단한다.`},{id:"2026-1-11",session:"2026년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 두 IP 주소의 서브넷 마스크가 255.255.254.0일 때, 각 주소가 속한 네트워크 주소를 CIDR 표기로 쓰시오.",blocks:[{type:"text",text:`① 192.168.11.20
② 192.168.12.200`}],choices:["192.168.10.0/23","192.168.12.0/23","192.168.11.0/24","192.168.11.0/23","192.168.12.0/24"],blanks:[{label:"①",answer:"192.168.10.0/23"},{label:"②",answer:"192.168.12.0/23"}],explanation:`정답
①: 192.168.10.0/23
②: 192.168.12.0/23

정답 근거
255.255.254.0은 /23이다. 세 번째 옥텟 254 = 11111110이므로 2 단위(…, 10~11, 12~13, …)로 네트워크가 나뉜다.
• 192.168.11.20 → 11은 10~11 블록 → 192.168.10.0/23
• 192.168.12.200 → 12는 12~13 블록 → 192.168.12.0/23
요령: 세 번째 옥텟을 2로 나눈 몫 × 2가 네트워크 주소의 세 번째 옥텟이다. (11 → 10, 12 → 12)

풀이 보강
비트 AND로도 검산할 수 있다. 세 번째 옥텟에서 11 & 254 = 10, 12 & 254 = 12이고 마지막 옥텟은 0과 AND되어 0이다. 각각의 브로드캐스트는 192.168.11.255와 192.168.13.255다. /23의 네트워크 경계는 세 번째 옥텟의 짝수에서 시작하므로 192.168.11.0/23은 올바른 네트워크 기준 주소가 아니다.`},{id:"2026-1-12",session:"2026년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
int* next(int* p) {
    return p + 1;
}
int main() {
    int n[3] = {16, 32, 48};
    int* (*fp)(int*) = next;
    printf("%x", *fp(n));
    return 0;
}`,language:"c",choices:["20","1f","32","40"],blanks:[{answer:"20"}],explanation:`정답
20

정답 근거
• 함수 포인터가 배열 시작 주소 n에 1을 더한 n+1을 반환 → 역참조하면 n[1] = 32
• %x는 정수를 16진수(소문자)로 출력: 32 = 2 × 16 + 0 → 20
참고: %d면 32, %o(8진수)면 40이 출력된다.

풀이 보강
int* (*fp)(int*)는 int 포인터를 받아 int 포인터를 반환하는 함수의 포인터다. fp(n)은 next(n)과 같아 주소 n+1을 반환한다. 포인터에 1을 더했다고 값 16이 17이 되지 않고 다음 원소 32를 읽는다. 그다음 %x 형식으로 32를 16진수 20으로 변환해 출력하므로 주소 계산과 출력 진법을 두 단계로 나누어 푼다.`},{id:"2026-1-13",session:"2026년 1회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`for i in list(range(10))[::-2]:
    print(i, end="A")`,language:"python",choices:["9A7A5A3A1","1A3A5A7A9A","9A7A5A3A1A","8A6A4A2A0A"],blanks:[{answer:"9A7A5A3A1A"}],explanation:`정답
9A7A5A3A1A

정답 근거
list(range(10)) = [0, 1, …, 9]이고, [::-2]는 끝에서부터 2칸씩 거꾸로 가져온다 → [9, 7, 5, 3, 1]
print(i, end="A")는 줄바꿈 대신 A를 붙여 출력하므로 마지막 1 뒤에도 A가 붙는다 → 9A7A5A3A1A

풀이 보강
슬라이스의 선택 인덱스는 9, 7, 5, 3, 1이다. 음수 간격에서 시작값 생략은 뒤쪽 끝에서 출발한다는 뜻이며 range(10) 자체는 0부터 9까지다. print를 다섯 번 호출할 때마다 end="A"가 적용되므로 마지막 숫자 뒤의 A도 출력된다. 전체 문자열을 완성한 뒤 마지막 구분자를 제거하는 코드는 없다.`},{id:"2026-1-14",session:"2026년 1회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`a = [[1], [2], [3], [4]]
b = a[:]
for i in range(1, 4):
    b[i] += b[i - 1]
print(sum(len(x) for x in a))`,language:"python",choices:["4","7","10","16"],blanks:[{answer:"10"}],explanation:`정답
10

정답 근거
리스트의 얕은 복사(copy(), [:])는 바깥 리스트만 새로 만들고, 안쪽 리스트 객체는 원본과 공유한다.
뒤 원소에 앞 원소를 += 하면 안쪽 리스트가 그 자리에서(in-place) 늘어난다.
• [1] → 길이 1
• [2] += [1] → [2, 1] → 길이 2
• [3] += [2, 1] → 길이 3
• [4] += [3, 2, 1] → 길이 4
합계 1 + 2 + 3 + 4 = 10

풀이 보강
최종 a와 b의 각 내부 리스트는 [1], [2,1], [3,2,1], [4,3,2,1]이다. +=는 리스트를 제자리에서 확장하므로 공유 중인 a에서도 변화가 보인다. b[i]=b[i]+b[i-1]처럼 새 리스트를 만들어 대입했다면 바깥 리스트 b의 참조만 바뀌는 다른 결과가 된다. 두 식의 객체 변경 방식 차이가 핵심이다.`},{id:"2026-1-15",session:"2026년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에서 공격에 이용되는 특수 파일을 쓰시오.",blocks:[{type:"text",text:`• 다른 파일의 경로를 가리키는 특수한 파일(바로가기)이다.
• 공격자는 프로그램이 만들 임시 파일 자리에 이 파일을 미리 만들어 두어, 프로그램이 중요한 파일을 대신 열거나 덮어쓰게 만든다.`}],choices:["파이프(Pipe)","하드 링크(Hard Link)","소켓 파일(Socket File)","심볼릭 링크(Symbolic Link)"],blanks:[{answer:"심볼릭 링크(Symbolic Link)"}],explanation:`정답
심볼릭 링크(Symbolic Link)

정답 근거
심볼릭 링크(Symbolic Link)는 다른 파일의 경로를 가리키는 특수 파일(바로가기)이다.
공격자가 프로그램이 만들 임시 파일 이름으로 중요 파일을 가리키는 심볼릭 링크를 미리 만들어 두면, 프로그램이 그 링크를 통해 중요 파일을 덮어쓰거나 읽게 된다(경쟁 조건, TOCTOU 공격).
• 하드 링크: 경로가 아니라 같은 파일(inode)을 가리키는 또 다른 이름

풀이 보강
공격의 핵심은 프로그램이 신뢰한 파일 이름이 실제로는 다른 경로를 가리킨다는 점이다. 경로 검사 뒤 사용하기 전 링크를 바꾸는 경우에는 TOCTOU 경쟁 조건도 결합된다. 파이프는 프로세스 간 데이터 전달, 소켓은 통신 끝점이다. 같은 inode의 이름을 추가하는 하드 링크와 경로 문자열을 저장하는 심볼릭 링크를 구별한다.`},{id:"2026-1-16",session:"2026년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 공격 기법을 쓰시오.",blocks:[{type:"text",text:`• 공격 대상이 자주 방문하는 정상 웹사이트를 미리 감염시킨다.
• 대상이 그 사이트에 방문하면 악성코드에 감염된다.
• 사자가 물웅덩이에서 먹잇감을 기다리는 모습에 빗댄 이름이다.`}],choices:["파밍(Pharming)","스피어 피싱(Spear Phishing)","워터링 홀(Watering Hole) 공격","타이포스쿼팅(Typosquatting)"],blanks:[{answer:"워터링 홀(Watering Hole) 공격"}],explanation:`정답
워터링 홀(Watering Hole) 공격

정답 근거
워터링 홀(Watering Hole)은 공격 대상이 자주 방문하는 정상 웹사이트를 미리 감염시켜 두고, 방문했을 때 악성코드에 감염되게 하는 표적 공격이다. 사자가 물웅덩이에서 먹잇감을 기다리는 것에 비유한 이름이다.
오답 정리
• 파밍: DNS 등을 변조해 정상 주소로 접속해도 가짜 사이트로 유도
• 타이포스쿼팅: 오타를 노린 유사 도메인 선점
• 스피어 피싱: 특정 대상에게 맞춤형 피싱 메일 발송

풀이 보강
공격 대상을 직접 속이는 대신 그 대상이 방문할 가능성이 높은 경유지를 먼저 장악하는 것이 식별 단서다. 실제 감염은 취약점 악용이나 악성 파일 실행 등 추가 경로로 일어나며 정상 사이트를 방문했다는 사실만으로 항상 감염되는 것은 아니다. 피싱 메일을 보내는 수단과 방문 사이트를 오염시키는 수단을 구분한다.`},{id:"2026-1-17",session:"2026년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
    static int func(int a, int b) { return a + b; }
    static int func(char a, char b) { return b - a; }
    static char func(char c) { return c; }

    public static void main(String[] args) {
        System.out.print(func(4, 5) + func('A', 'C') + "2" + func('3'));
    }
}`,language:"java",choices:["14","1123","1151","9223"],blanks:[{answer:"1123"}],explanation:`정답
1123

정답 근거
자바의 + 연산은 왼쪽부터 계산하며, 문자열을 만나면 그 뒤로는 문자열 연결이 된다.
• 9 + 2 = 11 (정수 덧셈)
• 11 + "2" = "112" (문자열 연결)
• "112" + '3' = "1123" (문자 '3'도 그대로 연결)
※ 문자열을 만나기 전에 char를 정수와 더하면 아스키 코드값('3' = 51)으로 계산되므로 주의한다.

풀이 보강
func(4,5)는 int 두 개 버전으로 9, func('A','C')는 char 두 개 버전으로 문자 코드 차이 2, func('3')는 char 한 개 버전으로 문자 3을 반환한다. +는 왼쪽 결합이라 9+2를 먼저 계산한다. 마지막 문자 3은 이미 문자열 뒤에 오므로 숫자 코드 51이 아니라 글자 3으로 연결된다.`},{id:"2026-1-18",session:"2026년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 두 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오.",blocks:[{type:"table",caption:"<dept>",headers:["dept_id","budget"],rows:[["10","100"],["20","300"],["30","200"]]},{type:"table",caption:"<emp>",headers:["emp_id","dept_id"],rows:[["1","10"],["2","20"],["3","20"],["4","30"]]}],codeSnippet:`SELECT COUNT(*)
FROM emp e JOIN dept d ON e.dept_id = d.dept_id
WHERE d.budget > (SELECT AVG(budget) FROM dept);`,language:"sql",choices:["1","2","3","4"],blanks:[{answer:"2"}],explanation:`정답
2

정답 근거
• 예산 평균 = (100 + 300 + 200) / 3 = 200
• 평균을 초과(>)하는 부서는 예산 300인 부서 20뿐이다 (200은 '초과'가 아님)
• 직원 테이블과 JOIN하면 부서 20 소속 직원 2명의 행만 남는다 → COUNT(*) = 2

풀이 보강
평균 초과 부서는 하나이지만 그 부서의 직원은 두 명이다. 조인 결과의 행 단위가 부서가 아니라 직원이므로 COUNT(*)는 1이 아니라 2다. 예산이 정확히 200인 부서는 > 조건을 통과하지 않는다. 부서 수를 세려면 COUNT(DISTINCT d.dept_id) 같은 다른 집계가 필요하다.`},{id:"2026-1-19",session:"2026년 1회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"통합 테스트에 대한 다음 설명에서 괄호(①, ②)에 들어갈 용어를 쓰시오.",blocks:[{type:"text",text:`• 하향식 통합 테스트에서는 아직 개발되지 않은 하위 모듈 대신 ( ① )을(를) 사용한다.
• 상향식 통합 테스트에서는 하위 모듈을 호출할 상위 모듈 대신 ( ② )을(를) 사용한다.`}],choices:["하네스(Harness)","클러스터(Cluster)","드라이버(Driver)","스텁(Stub)"],blanks:[{label:"①",answer:"스텁(Stub)"},{label:"②",answer:"드라이버(Driver)"}],explanation:`정답
①: 스텁(Stub)
②: 드라이버(Driver)

정답 근거
통합 테스트에서 아직 완성되지 않은 모듈을 대신하는 가짜 모듈
• 하향식(상위 → 하위): 하위 모듈 대신 스텁(Stub) 사용
• 상향식(하위 → 상위): 상위 호출자 대신 드라이버(Driver) 사용
• 클러스터: 상향식에서 하위 모듈들을 묶은 그룹
암기: 하향식-스텁, 상향식-드라이버

풀이 보강
호출 방향으로 기억하면 상위 호출자가 없을 때는 대신 호출하는 드라이버, 호출할 하위 기능이 없을 때는 대신 응답하는 스텁이 필요하다. 예를 들어 결제 상위 모듈을 먼저 검사할 때 미완성 승인 함수를 스텁으로 대체한다. 하네스는 실행·입력·결과 수집 등을 지원하는 더 넓은 시험 장치·환경을 뜻한다.`},{id:"2026-1-20",session:"2026년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 응집도를 각각 쓰시오.",blocks:[{type:"text",text:`① 모듈 안의 요소들이 정해진 순서에 따라 차례로 수행된다.
② 같은 입력 또는 출력 데이터를 사용하는 활동들을 모아 놓았다.
③ 모듈 안의 모든 요소가 하나의 기능만을 수행한다.`}],choices:["절차적 응집도","기능적 응집도","우연적 응집도","논리적 응집도","교환적(통신적) 응집도","시간적 응집도"],blanks:[{label:"①",answer:"절차적 응집도"},{label:"②",answer:"교환적(통신적) 응집도"},{label:"③",answer:"기능적 응집도"}],explanation:`정답
①: 절차적 응집도
②: 교환적(통신적) 응집도
③: 기능적 응집도

정답 근거
• 절차적 응집도: 모듈 안의 요소들이 정해진 순서에 따라 수행됨
• 교환적(통신적) 응집도: 같은 입력·출력 데이터를 사용하는 활동을 모음
• 기능적 응집도: 모든 요소가 하나의 기능만 수행 (가장 강하고 좋은 응집도)
응집도(강함 → 약함): 기능적 > 순차적 > 교환적 > 절차적 > 시간적 > 논리적 > 우연적

풀이 보강
절차적 응집도에는 실행 순서라는 연결이 있지만, 앞 단계의 출력이 다음 단계의 입력이어야 하는 것은 아니다. 그런 데이터 흐름까지 이어지면 순차적 응집도다. 교환적 응집도는 같은 데이터에 대해 하는 작업들을 묶는 경우이며, 하나의 목적에 모든 요소가 기여하는 기능적 응집도와 구별한다.`}],_1=Object.freeze(Object.defineProperty({__proto__:null,default:B1},Symbol.toStringTag,{value:"Module"})),U1=[{id:"2025-3-01",session:"2025년 3회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 UML 다이어그램을 쓰시오.",blocks:[{type:"text",text:`• 폴더 모양의 요소로 클래스나 하위 그룹을 묶는다.
• 묶음 사이의 의존 관계를 «import», «access», «merge» 같은 표시와 함께 나타낸다.
• 구조적(정적) 다이어그램에 속한다.`}],choices:["패키지 다이어그램","클래스 다이어그램","컴포넌트 다이어그램","배치 다이어그램"],blanks:[{answer:"패키지 다이어그램"}],explanation:`정답
패키지 다이어그램

정답 근거
패키지 다이어그램은 클래스·유스케이스 같은 모델 요소들을 폴더 모양의 패키지로 묶고, 패키지 사이의 의존 관계를 나타내는 구조적(정적) 다이어그램이다.
• 의존 관계는 점선 화살표에 «import», «access», «merge» 같은 키워드로 표시
오답 정리
• 컴포넌트 다이어그램: 컴포넌트와 인터페이스의 관계
• 클래스 다이어그램: 클래스의 속성·메서드와 클래스 간 관계
• 배치 다이어그램: 물리적 노드(서버 등)와 배치된 산출물

풀이 보강
패키지는 실행 파일이나 물리 폴더만을 뜻하지 않고 모델 요소를 묶는 이름 공간이다. 따라서 클래스 목록만 보이는 그림과 달리 «폴더형 묶음 사이의 관계»를 읽는다. import는 다른 패키지 요소의 이름을 사용할 수 있게 하는 관계이고 merge는 모델 정의를 결합하는 관계다. 이 표시는 일반적인 관계 키워드이며 모두 사용자 정의 스테레오타입인 것은 아니다.`},{id:"2025-3-02",session:"2025년 3회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"다음 설명에 해당하는 화이트박스 테스트 커버리지를 쓰시오.",blocks:[{type:"text",text:`• 결정문에 포함된 개별 조건식이 각각 참과 거짓을 최소 한 번씩 갖도록 테스트한다.
• 예) if (A > 0 && B > 0)에서 'A > 0'과 'B > 0'이 각각 참·거짓을 모두 가져 보도록 한다.`}],choices:["조건 커버리지","구문 커버리지","다중 조건 커버리지","결정 커버리지"],blanks:[{answer:"조건 커버리지"}],explanation:`정답
조건 커버리지

정답 근거
• 조건 커버리지: 결정문 안의 개별 조건식이 각각 참·거짓을 한 번 이상 갖도록 테스트
• 결정(분기) 커버리지: 결정문 전체의 결과가 참·거짓을 한 번 이상 갖도록
• 구문(문장) 커버리지: 모든 문장을 최소 한 번 실행
• 다중 조건 커버리지: 개별 조건들의 모든 참·거짓 조합을 테스트
예) if (A && B)에서 A와 B 각각이 참·거짓을 모두 가져 보면 조건 커버리지를 만족한다.

풀이 보강
검사 대상은 복합 결정식 전체가 아니라 그 안의 개별 Boolean 조건이다. 단축 평가가 없는 A XOR B에서 (참,참)과 (거짓,거짓)은 각 조건을 참·거짓으로 바꾸지만 결정 결과는 둘 다 거짓이다. 따라서 조건 커버리지와 결정 커버리지는 같은 기준이 아니다. &&나 ||처럼 단축 평가가 있는 언어 구문에서는 값의 조합뿐 아니라 각 조건이 실제로 평가되는지도 확인한다.`},{id:"2025-3-03",session:"2025년 3회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 기능을 수행하는 리눅스 명령어를 각각 쓰시오.",blocks:[{type:"text",text:`① 현재 작업 중인 디렉터리 경로 출력
② 파일·디렉터리 목록 보기
③ 다른 디렉터리로 이동
④ 파일 복사`}],choices:["rm","ls","cp","mv","mkdir","pwd","cd"],blanks:[{label:"①",answer:"pwd"},{label:"②",answer:"ls"},{label:"③",answer:"cd"},{label:"④",answer:"cp"}],explanation:`정답
①: pwd
②: ls
③: cd
④: cp

정답 근거
• pwd: 현재 작업 디렉터리 경로 출력 (print working directory)
• ls: 파일·디렉터리 목록 보기 (list)
• cd: 디렉터리 이동 (change directory)
• cp: 파일 복사 (copy)
오답 정리: mv(이동·이름 변경), rm(삭제), mkdir(디렉터리 생성)

풀이 보강
pwd는 현재 위치를 출력할 뿐 이동하지 않고 cd는 현재 셸의 작업 디렉터리를 바꾼다. ls는 목록 조회, cp 원본 대상은 내용을 복사하므로 원본이 남는다. mv는 이동·이름 변경이어서 원래 위치의 항목이 사라진다. 디렉터리 생성 mkdir와 파일 복사 cp도 구별하고, 경로에 공백이 있으면 인수를 따옴표로 묶는다.`},{id:"2025-3-04",session:"2025년 3회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"데이터 전송 오류 제어에 대한 다음 설명에 해당하는 용어를 각각 쓰시오.",blocks:[{type:"text",text:`① 오류를 검출하고 스스로 정정까지 할 수 있는 코드
② 수신 측이 재전송 요청 없이 스스로 오류를 정정하는 방식
③ 오류를 검출하면 송신 측에 재전송을 요청하는 방식
④ 1비트의 검사 비트를 추가해 오류를 검출하는 방식
⑤ 생성 다항식으로 나눈 나머지를 이용해 오류를 검출하는 방식`}],choices:["BEC","Checksum","Hamming","Huffman","FEC","CRC","Parity"],blanks:[{label:"①",answer:"Hamming"},{label:"②",answer:"FEC"},{label:"③",answer:"BEC"},{label:"④",answer:"Parity"},{label:"⑤",answer:"CRC"}],explanation:`정답
①: Hamming
②: FEC
③: BEC
④: Parity
⑤: CRC

정답 근거
• 해밍 코드(Hamming): 오류를 검출하고 스스로 정정까지 하는 코드 (1비트 오류 정정)
• FEC(전진 오류 수정): 수신 측이 재전송 요청 없이 스스로 오류를 정정
• BEC(후진 오류 수정): 오류를 검출하면 송신 측에 재전송을 요청 (ARQ 방식)
• 패리티(Parity): 1비트의 검사 비트로 오류 검출
• CRC(순환 중복 검사): 다항식 나눗셈의 나머지로 오류 검출
허프만(Huffman)은 데이터 압축 부호화 방식이다.

풀이 보강
해밍은 구체적인 오류 정정 코드이고 FEC는 재전송 없이 수신 측이 정정하는 방식의 분류다. BEC는 재전송을 이용하는 오류 제어이므로 ARQ와 연결한다. 단일 패리티는 홀수 개 비트 오류를 검출하지만 짝수 개가 뒤집히면 놓칠 수 있다. CRC는 오류 검출용이며 검출한 비트를 직접 복구하는 코드와 구분한다.`},{id:"2025-3-05",session:"2025년 3회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
struct test {
    int i;
    char *g;
};
int main() {
    struct test t[2] = { {1, "AB"}, {2, "DC"} };
    printf("%s", t[1].g + (t[1].i - 1));
    return 0;
}`,language:"c",choices:["2","D","C","DC"],blanks:[{answer:"C"}],explanation:`정답
C

정답 근거
g는 문자열 "DC"의 시작 주소다.
• i − 1 = 2 − 1 = 1 → g + 1은 두 번째 문자 'C'의 주소
• %s는 그 주소부터 널 문자('\\0')를 만날 때까지 출력 → "C"
참고: g를 그대로 출력하면 DC, *g를 %c로 출력하면 D가 된다.

풀이 보강
t[1]은 두 번째 구조체이며 i=2, g="DC"다. 멤버 i와 문자 D의 코드값은 관계가 없고 g+(i−1)은 주소 계산이다. 메모리를 D, C, 널 문자 순서로 그리면 g+1부터 문자열을 출력할 때 C 하나가 남는 것을 확인할 수 있다. %s로는 포인터가 가리키는 위치 뒤의 문자열을 출력한다.`},{id:"2025-3-06",session:"2025년 3회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    char str[] = "REPUBLICOFKOREA";
    int a = 0;
    while (str[a] != '\\0')
        a++;
    putchar(str[a - 2]);
    return 0;
}`,language:"c",choices:["E","A","O","R"],blanks:[{answer:"E"}],explanation:`정답
E

정답 근거
"REPUBLICOFKOREA"는 15글자이고 인덱스는 0~14이다(str[15]는 널 문자).
str[a − 2] = str[13]
R(0) E(1) P(2) U(3) B(4) L(5) I(6) C(7) O(8) F(9) K(10) O(11) R(12) E(13) A(14)
따라서 E가 출력된다. 마지막 글자 A는 str[14]다.

풀이 보강
while이 끝난 뒤 a는 마지막 문자 인덱스 14가 아니라 널 종료 문자의 인덱스 15다. 이 값에서 2를 뺀 13이 뒤에서 두 번째 문자 E를 가리킨다. 문자열 길이는 종료 문자를 포함하지 않는다. 종료 위치를 마지막 문자라고 착각해 a=14로 놓으면 R을 선택하는 한 칸 차이 오류가 생긴다.`},{id:"2025-3-07",session:"2025년 3회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
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
}`,language:"c",choices:["87","125","187","225"],blanks:[{answer:"187"}],explanation:`정답
187

정답 근거
• 누적: sum = 0 → 0×3 + 11 = 11 → 11×3 + 7 = 40 → 40×3 + 5 = 125
• XOR(^): 같은 비트는 0, 다른 비트는 1
  125 = 0111 1101
   42 = 0010 1010
  XOR = 0101 0111 = 87
• 87 + 100 = 187

풀이 보강
순회 순서는 선언된 변수명의 알파벳순을 추측하는 것이 아니라 next 포인터로 정해진 a→b→c다. 누적식 sum*3은 이전 값 전체에 적용한다. ^는 C의 거듭제곱 연산자가 아니라 비트 XOR이고, 125 XOR 42의 87은 아직 중간 결과다. printf 안의 +100까지 계산해야 최종 정답 187이 된다.`},{id:"2025-3-08",session:"2025년 3회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 코드의 괄호에 들어갈 알맞은 키워드를 쓰시오.",codeSnippet:`interface Animal {
    void sound();
}
class Dog (        ) Animal {
    public void sound() {
        System.out.print("멍멍");
    }
}`,language:"java",choices:["interface","abstract","extends","implements"],blanks:[{answer:"implements"}],explanation:`정답
implements

정답 근거
클래스가 인터페이스를 구현할 때는 implements를 쓴다.
예) class Dog implements Animal { … }
• extends: 클래스가 클래스를 상속하거나, 인터페이스가 인터페이스를 상속할 때
• 한 클래스는 여러 인터페이스를 implements할 수 있다(다중 구현).

풀이 보강
Dog는 구체 클래스이므로 Animal의 추상 메서드 sound를 구현해야 한다. 인터페이스 메서드는 이 선언에서 public이므로 구현 메서드도 public으로 접근을 좁히지 않는다. extends를 넣으면 인터페이스를 클래스의 직접 상위 클래스로 쓰려는 잘못된 선언이 된다. 문항의 코드는 선언 부분이므로 정답을 넣은 뒤 컴파일로 문법을 확인할 수 있다.`},{id:"2025-3-09",session:"2025년 3회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`data = [[1, 2, 3, 4, 5], [2, 3, 5], [2, 3, 4, 4, 5], [4, 5]]
result = {}
for i, lst in enumerate(data):
    result[i] = (sum(lst), len(lst))
print(result)`,language:"python",choices:["{1: (15, 5), 2: (10, 3), 3: (18, 5), 4: (9, 2)}","{0: 15, 1: 10, 2: 18, 3: 9}","[(15, 5), (10, 3), (18, 5), (9, 2)]","{0: (15, 5), 1: (10, 3), 2: (18, 5), 3: (9, 2)}"],blanks:[{answer:"{0: (15, 5), 1: (10, 3), 2: (18, 5), 3: (9, 2)}"}],explanation:`정답
{0: (15, 5), 1: (10, 3), 2: (18, 5), 3: (9, 2)}

정답 근거
enumerate(리스트)는 (인덱스, 값)을 0부터 차례로 꺼낸다.
result[i] = (sum(lst), len(lst))이므로 인덱스 0~3을 키로, (합, 길이) 튜플을 값으로 저장한다.
→ {0: (15, 5), 1: (10, 3), 2: (18, 5), 3: (9, 2)}
enumerate(lst, 1)처럼 시작값을 따로 주지 않으면 0부터 시작한다는 점에 주의한다.

풀이 보강
세 번째 리스트는 [2,3,4,4,5]라서 중복된 4도 합계와 길이에 각각 포함한다. 합은 18, 길이는 5다. 결과는 딕셔너리이고 각 값은 괄호로 만든 두 원소 튜플이므로 리스트 보기나 합계만 있는 보기와 형식도 다르다. 코드의 변수명 result와 실제 출력 구조를 연결해 확인한다.`},{id:"2025-3-10",session:"2025년 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오.",blocks:[{type:"table",caption:"<T>",headers:["val"],rows:[["10"],["20"],["30"],["40"],["50"]]}],codeSnippet:`SELECT COUNT(*)
FROM T
WHERE val BETWEEN 20 AND 50;`,language:"sql",choices:["2","3","4","5"],blanks:[{answer:"4"}],explanation:`정답
4

정답 근거
BETWEEN A AND B는 A 이상 B 이하로, 양 끝값을 포함한다.
값 >= 20 AND 값 <= 50과 같으므로 20, 30, 40, 50 → 4행이다. (10만 제외)

풀이 보강
BETWEEN 20 AND 50은 20<=val AND val<=50이다. 20과 50을 모두 빼면 2행, 한쪽 끝만 빼면 3행이 되어 오답 보기와 연결된다. 숫자 값 다섯 개 중 10만 제외하고 네 행을 센다. 출력되는 것은 그 네 값의 목록이 아니라 COUNT(*)가 만든 정수 하나다.`},{id:"2025-3-11",session:"2025년 3회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 인증 방식을 영문 약자로 쓰시오.",blocks:[{type:"text",text:`• 한 번 사용하면 다시 쓸 수 없는 일회용 비밀번호다.
• 로그인할 때마다 새로운 값이 발급된다.
• 시간 기반(TOTP)과 횟수 기반(HOTP) 방식이 있다.`}],choices:["OTP","SSO","MFA","PIN"],blanks:[{answer:"OTP"}],explanation:`정답
OTP

정답 근거
OTP(One-Time Password)는 일회용 비밀번호이다. 성공적으로 사용한 값을 다시 허용하지 않도록 검증하여 재사용 위험을 줄인다.
• TOTP: 시간 값을 기반으로 생성하며 같은 시간 구간에서는 동일한 값일 수 있다.
• HOTP: 이벤트 카운터 값을 기반으로 생성한다.
• SSO: 한 번의 인증으로 여러 서비스에 접근하는 방식이다.
• MFA: 서로 다른 종류의 인증 요소를 함께 요구하는 방식이다.
• PIN: 개인 식별 번호이며 그 자체가 일회용을 뜻하지 않는다.

풀이 보강
TOTP는 같은 시간 구간에서 같은 값이 생성될 수 있으므로 검증 서버가 유효기간과 이미 성공한 값의 재사용을 검사해야 일회성을 보장한다. OTP라는 이유만으로 실시간 피싱까지 모두 막는 것은 아니다. SSO는 여러 서비스의 로그인 통합, MFA는 서로 다른 종류의 인증 요소 조합이므로 OTP 하나와 같은 뜻이 아니다.`},{id:"2025-3-12",session:"2025년 3회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 코드에서 자식 생성자가 부모의 생성자를 호출하도록 괄호에 들어갈 키워드를 쓰시오.",codeSnippet:`class Parent {
    int x;
    Parent(int x) { this.x = x; }
}
class Child extends Parent {
    Child(int x) {
        (        )(x);
    }
}`,language:"java",choices:["this","super","parent","extends"],blanks:[{answer:"super"}],explanation:`정답
super

정답 근거
super(x)는 현재 생성자에서 부모 Parent의 생성자를 인수 x로 호출한다. Parent(int x)가 부모 필드 this.x를 초기화한다.
• super.메서드(): 부모 메서드의 구현을 명시적으로 호출한다.
• this(인수): 같은 클래스의 다른 생성자를 호출한다.
• extends: 클래스의 상속 관계를 선언할 때 사용하며 생성자를 호출하는 키워드는 아니다.
이 코드의 빈칸에는 부모 생성자 호출이 필요하므로 super를 넣는다.

풀이 보강
Parent에는 인수를 받는 생성자만 있어 Child에서 super(x)를 명시해야 한다. 생략하면 암시적인 인수 없는 부모 생성자 호출을 만족할 수 없다. this(x)는 같은 클래스의 생성자 호출이므로 이 위치에서 같은 생성자를 다시 부르면 재귀 생성자 호출 오류가 된다. 키워드 뒤의 (x)는 부모 초기화에 전달할 인수다.`},{id:"2025-3-13",session:"2025년 3회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 표준 프레임워크를 쓰시오.",blocks:[{type:"text",text:`• 사용자가 비밀번호를 제3자 서비스에 알려주지 않는다.
• 대신 접근 토큰(Access Token)을 발급하여, 정해진 범위의 자원에만 접근할 수 있도록 권한을 위임한다.
• 예) "구글 계정으로 다른 앱에 캘린더 접근 허용"`}],choices:["OAuth","LDAP","SAML","Kerberos"],blanks:[{answer:"OAuth"}],explanation:`정답
OAuth

정답 근거
OAuth는 사용자가 비밀번호를 제3자 앱에 알려주지 않고, 접근 토큰(Access Token)으로 자신의 자원에 대한 제한된 권한을 위임하는 표준이다.
예) "구글 계정으로 다른 앱에 캘린더 접근 허용"
오답 정리
• SAML: XML 기반으로 인증 정보를 교환(SSO)
• Kerberos: 티켓 기반 네트워크 인증
• LDAP: 디렉터리 서비스 조회 프로토콜

풀이 보강
OAuth에서 핵심은 인증 자체보다 자원 접근 권한의 위임이다. 사용자는 권한 범위를 승인하고 클라이언트는 접근 토큰으로 리소스 서버를 호출한다. 토큰의 범위·유효기간 안에서만 접근하며 비밀번호 공유를 대체한다. 사용자 신원 확인을 표준화하는 OpenID Connect는 OAuth 2.0 위의 별도 계층이라는 점도 구별한다.`},{id:"2025-3-14",session:"2025년 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 릴레이션 R, S에 대해 관계대수 R ÷ S의 결과를 쓰시오.",blocks:[{type:"table",caption:"<R>",headers:["A","B"],rows:[["a1","b1"],["a1","b2"],["a2","b1"]]},{type:"table",caption:"<S>",headers:["B"],rows:[["b1"],["b2"]]}],choices:["a1, a2","a1","a2","b1"],blanks:[{answer:"a1"}],explanation:`정답
a1

정답 근거
나누기(÷)는 R에서 S의 모든 값과 짝을 이루는 A 값만 남긴다.
• a1: (a1,b1), (a1,b2) → b1, b2 모두 있음 → 포함
• a2: (a2,b1)만 있고 b2가 없음 → 제외
따라서 R ÷ S = {a1}

풀이 보강
나누기는 «하나라도 포함»이 아니라 «S의 모든 B와 관계가 있음»이라는 전칭 조건이다. 결과 열은 R의 열에서 S의 열을 뺀 A만 남는다. a2에 (a2,b2)가 추가되었다면 a2도 포함되지만 현재 표에는 없다. S의 b1·b2 자체를 답으로 내거나 R의 행 수를 S의 행 수로 나누는 산술 계산을 하지 않는다.`},{id:"2025-3-15",session:"2025년 3회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    int z = 2;
    printf("%d", (z & (z >> 1)) * 7);
    return 0;
}`,language:"c",choices:["0","2","7","14"],blanks:[{answer:"0"}],explanation:`정답
0

정답 근거
• z = 2 → 2진수 10
• z >> 1 → 오른쪽으로 1비트 이동 → 01 = 1
• 10 & 01 = 00 = 0 (비트 AND는 둘 다 1인 자리만 1)
• 0 × 7 = 0

풀이 보강
오른쪽 시프트를 먼저 계산하면 z>>1은 1이다. 그다음 z & 1은 2진수 10과 01의 자리별 AND라 겹치는 1이 없어 0이다. 논리 AND인 &&를 적용하면 두 피연산자가 모두 0이 아니어서 1이 될 수 있지만 이 코드는 비트 AND인 &를 사용한다. 마지막 곱셈 7은 결과 0을 바꾸지 않는다.`},{id:"2025-3-16",session:"2025년 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"관계형 데이터베이스에 대한 다음 설명에 해당하는 용어를 각각 쓰시오.",blocks:[{type:"text",text:`① 릴레이션의 한 행
② 특정 시점에 릴레이션에 실제로 저장된 데이터 집합
③ 릴레이션의 행(튜플) 수`}],choices:["튜플","카디널리티","스키마","디그리","인스턴스","속성"],blanks:[{label:"①",answer:"튜플"},{label:"②",answer:"인스턴스"},{label:"③",answer:"카디널리티"}],explanation:`정답
①: 튜플
②: 인스턴스
③: 카디널리티

정답 근거
• 튜플(Tuple): 릴레이션의 한 행
• 인스턴스(Instance): 특정 시점에 릴레이션에 실제로 저장된 튜플들의 집합(데이터 상태)
• 카디널리티(Cardinality): 튜플(행)의 수
오답 정리: 속성 = 열, 스키마 = 구조 정의, 디그리 = 속성(열)의 수

풀이 보강
예를 들어 학생(학번, 이름)에 두 행이 저장되어 있으면 각 행은 튜플이고 두 행 전체가 현재 인스턴스이며 카디널리티는 2다. 새 행을 넣으면 인스턴스와 카디널리티는 달라져도 열 정의인 스키마와 차수는 그대로일 수 있다. 데이터 내용, 한 행, 행의 개수를 각각 구별해 대응시킨다.`},{id:"2025-3-17",session:"2025년 3회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`enum Tri {
    A("A"), B("AB"), C("ABC");
    final String code;
    Tri(String code) { this.code = code; }
}
public class Main {
    public static void main(String[] args) {
        int idx = Tri.A.name().length();
        System.out.print(Tri.values()[idx].code);
    }
}`,language:"java",choices:["B","1","AB","A"],blanks:[{answer:"AB"}],explanation:`정답
AB

정답 근거
• A.name()은 열거 상수의 이름 "A"를 반환 → length() = 1
• Tri.values()는 선언 순서대로 [A, B, …] 배열을 반환 → values()[1] = B
• B의 code 필드 값 "AB"를 출력
참고: enum 상수의 name()은 이름, ordinal()은 0부터 시작하는 순서를 반환한다.

풀이 보강
name()은 사용자 정의 code 필드가 아니라 열거 상수에 선언된 이름을 반환한다. A의 이름 길이는 1이라 배열의 두 번째 상수 B를 선택한다. values()[1]의 이름은 B이지만 코드가 출력하는 필드는 B.code로 "AB"다. 인덱스와 이름과 필드 값을 세 단계로 분리하면 B나 1을 고르는 실수를 피할 수 있다.`},{id:"2025-3-18",session:"2025년 3회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 접근 통제 모델을 각각 영문 약자로 쓰시오.",blocks:[{type:"text",text:`① 주체와 객체의 보안 등급을 비교하여 시스템이 중앙에서 접근을 통제한다.
② 사용자에게 부여된 직무 역할에 따라 접근 권한을 부여한다.
③ 데이터의 소유자가 다른 사용자에게 접근 권한을 허용한다.`}],choices:["DAC","RBAC","MAC","ABAC","ACL"],blanks:[{label:"①",answer:"MAC"},{label:"②",answer:"RBAC"},{label:"③",answer:"DAC"}],explanation:`정답
①: MAC
②: RBAC
③: DAC

정답 근거
• MAC(강제 접근통제): 주체·객체의 보안 등급(레이블)을 비교해 시스템(관리자)이 중앙에서 통제
• RBAC(역할 기반 접근통제): 사용자에게 직무 역할을 부여하고, 역할에 권한을 연결
• DAC(임의 접근통제): 데이터 소유자가 다른 사용자에게 권한을 허용
참고: ABAC는 속성 기반 접근통제, ACL은 객체별 접근 권한 목록이다.

풀이 보강
MAC는 소유자 마음대로 보안 등급 정책을 바꾸기 어렵고, DAC는 소유자의 허가 재량이 크다. RBAC에서는 사용자를 역할에 연결하고 역할에 권한을 연결하므로 인사 이동 때 역할 변경으로 권한을 관리하기 쉽다. ABAC는 사용자·자원·환경 등의 속성으로 정책을 평가한다. ACL은 권한을 표현하는 목록이지 이 세 모델과 동의어가 아니다.`},{id:"2025-3-19",session:"2025년 3회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"테스트 케이스의 구성 요소에 대한 다음 설명에 해당하는 항목명을 각각 쓰시오.",blocks:[{type:"text",text:`① 테스트를 수행하기 위해 갖춰져야 하는 사전 조건
② 테스트에 실제로 입력하는 구체적인 값
③ 테스트를 실행했을 때 기대하는 출력`}],choices:["실제 결과","테스트 데이터","예상 결과","사전 조건","테스트 절차","테스트 환경"],blanks:[{label:"①",answer:"사전 조건"},{label:"②",answer:"테스트 데이터"},{label:"③",answer:"예상 결과"}],explanation:`정답
①: 사전 조건
②: 테스트 데이터
③: 예상 결과

정답 근거
① 사전 조건: 테스트 실행 전에 갖추어야 할 상태이다. 예를 들어 로그인을 시험할 계정이 미리 생성되어 있어야 한다.
② 테스트 데이터: 실제로 입력하는 구체 값이다. 예를 들어 아이디 test01과 비밀번호이다.
③ 예상 결과: 올바르게 동작할 때 기대하는 출력이나 상태이다. 예를 들어 로그인 성공 화면으로 이동한다.
실제 결과는 시험을 실행한 뒤 관찰한 값이며 예상 결과와 비교해 통과 여부를 판단한다. 테스트 절차는 실행 순서, 테스트 환경은 운영체제·브라우저·서버 등의 실행 기반을 뜻한다.

풀이 보강
사전 조건은 실행 전에 이미 충족되어야 할 상태이고, 테스트 조건은 시험할 수 있는 기능·특성 등 검사 대상이다. 예를 들어 «계정이 미리 생성되어 있음»은 사전 조건, «유효한 자격증명으로 로그인 가능»은 테스트 조건이다. 두 용어를 같은 의미로 암기하지 않고, 실행 전 상태·실제 입력·기대하는 출력을 구별한다.`},{id:"2025-3-20",session:"2025년 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 테이블에 대해 SQL을 실행했을 때 출력되는 값을 쓰시오.",blocks:[{type:"table",caption:"<T>",headers:["col1","col2"],rows:[["1","3"],["2","1"],["3","2"],["4","5"],["2","NULL"]]}],codeSnippet:`SELECT COUNT(col2)
FROM T
WHERE col1 IN (2, 3) OR col2 IN (3, 5);`,language:"sql",choices:["2","3","4","5"],blanks:[{answer:"4"}],explanation:`정답
4

정답 근거
• 조건 판단: (1,3) col2=3 / (2,1) col1=2 / (3,2) col1=3 / (4,5) col2=5 / (2,NULL) col1=2 → 5행 모두 해당
• COUNT(*)는 행 수(5)를 세지만, COUNT(col2)는 col2가 NULL인 행을 세지 않는다 → 4
집계 함수(COUNT(열), SUM, AVG 등)는 NULL을 제외하고 계산한다.

풀이 보강
마지막 (2,NULL)은 왼쪽 조건 col1 IN (2,3)이 참이므로 전체 OR 조건을 통과한다. 그러나 COUNT(col2)에서는 NULL이라 제외된다. 앞 네 행의 col2 값은 3,1,2,5라 네 개를 센다. 이 행이 WHERE에서 사라져 4가 된다고 설명하면 같은 숫자에 도달해도 NULL·OR의 원리를 잘못 이해한 것이다.`}],F1=Object.freeze(Object.defineProperty({__proto__:null,default:U1},Symbol.toStringTag,{value:"Module"})),z1=[{id:"2025-2-01",session:"2025년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 설명에 해당하는 파일 접근 방식을 쓰시오.",blocks:[{type:"text",text:`• <키, 레코드 위치(주소)> 쌍으로 구성된 별도의 표를 이용한다.
• 표에서 키를 먼저 찾은 뒤 해당 위치의 레코드로 바로 접근한다.
• 처음부터 차례대로 읽는 순차 접근보다 검색이 빠르다.`}],choices:["클러스터(Cluster) 접근","순차(Sequential) 접근","인덱스(Index) 접근","해싱(Hashing) 접근"],blanks:[{answer:"인덱스(Index) 접근"}],explanation:`정답
인덱스(Index) 접근

정답 근거
인덱스(색인) 접근은 <키, 레코드 주소> 쌍으로 된 인덱스를 먼저 찾아 원하는 레코드에 바로 접근하는 방식이다.
• 순차 접근: 처음부터 차례대로 읽음
• 해싱 접근: 해시 함수로 키를 주소로 변환
파일 구조는 크게 순차, 색인(인덱스), 해싱 방식으로 나뉜다.

풀이 보강
키를 이용한다는 공통점만으로 해싱이라고 판단하지 않는다. 색인은 키와 저장 위치를 연결하는 별도 자료구조를 탐색하고, 해싱은 해시 함수가 계산한 버킷으로 접근한다. 색인은 조회를 돕지만 저장 공간과 갱신 비용이 추가된다. 모든 상황에서 순차 읽기보다 빠르다는 뜻은 아니며 이 문항의 결정 단서는 별도의 키·주소 표다.`},{id:"2025-2-02",session:"2025년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"관계형 데이터베이스에서 테이블의 열(Column)에 해당하며, 데이터 항목의 성질을 나타내는 용어를 영어로 쓰시오.",choices:["Tuple","Attribute","Degree","Domain"],blanks:[{answer:"Attribute"}],explanation:`정답
Attribute

정답 근거
• Attribute(속성): 열(Column), 데이터 항목의 성질
• Tuple(튜플): 행(Row)
• Domain(도메인): 한 속성이 가질 수 있는 값의 범위
• Degree(디그리): 속성의 개수 / Cardinality(카디널리티): 튜플의 개수

풀이 보강
학생(학번, 이름, 학과)라면 학번·이름·학과가 각각 Attribute다. 속성은 열 하나를 가리키고 Degree는 그런 열이 몇 개인지를 말하므로 서로 다르다. Domain은 그 열에 허용되는 값의 집합이며, 열에 들어 있는 특정 값 한 개와도 다르다. 예를 들어 학과 열의 도메인은 허용 학과 목록이다.`},{id:"2025-2-03",session:"2025년 2회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 프로토콜을 쓰시오.",blocks:[{type:"text",text:`• 원격지 컴퓨터에 접속해 명령을 실행할 수 있다.
• 명령, 인증 정보, 데이터를 모두 암호화해서 전송한다.
• 기본 포트 번호는 TCP 22번이다.`}],choices:["SSL","Telnet","SSH","FTP"],blanks:[{answer:"SSH"}],explanation:`정답
SSH

정답 근거
SSH(Secure Shell)는 원격 접속 시 명령, 인증 정보, 데이터를 모두 암호화하는 프로토콜이며 기본 포트는 22번이다.
오답 정리
• Telnet(23번): 원격 접속이지만 평문 전송이라 도청 위험
• FTP(20·21번): 파일 전송
• SSL: 웹 통신 등의 암호화 (HTTPS)

풀이 보강
암호화된 원격 명령 실행과 TCP 22라는 단서를 동시에 만족하는 것이 SSH다. SSH는 서버 신원을 호스트 키로 확인하고 사용자 인증 후 보호된 채널을 제공한다. FTP는 파일 전송, Telnet은 평문 원격 접속이다. SSL은 현재의 TLS와 구별되는 과거 보안 프로토콜 계열이며 그 자체가 SSH 같은 원격 셸 명령 프로토콜은 아니다.`},{id:"2025-2-04",session:"2025년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 설명에 해당하는 CPU 스케줄링 기법을 각각 쓰시오.",blocks:[{type:"text",text:`① 실행 시간이 가장 짧은 작업을 먼저 실행하는 비선점 방식
② 남은 실행 시간이 더 짧은 작업이 도착하면 CPU를 빼앗아 실행하는 선점 방식`}],choices:["SJF","SRT","FCFS","HRN","RR"],blanks:[{label:"①",answer:"SJF"},{label:"②",answer:"SRT"}],explanation:`정답
①: SJF
②: SRT

정답 근거
• SJF(Shortest Job First): 실행 시간이 가장 짧은 작업을 먼저 실행하는 비선점 방식
• SRT(Shortest Remaining Time): 남은 실행 시간이 더 짧은 작업이 오면 CPU를 빼앗는 선점 방식 (SJF의 선점형)
오답 정리: FCFS(먼저 온 순서), RR(시간 할당량만큼 돌아가며 실행), HRN((대기 시간 + 실행 시간) / 실행 시간이 큰 순서)

풀이 보강
P1이 실행 중이고 더 짧은 P2가 도착해도 비선점 SJF에서는 P1이 끝날 때까지 기다린다. SRT에서는 P1의 남은 시간과 P2의 실행 시간을 비교해 더 짧으면 선점한다. 두 방식 모두 긴 작업이 계속 밀려 기아가 생길 수 있다. RR은 시간 할당량이 기준이므로 실행시간이 짧다는 조건만으로 우선 선택하지 않는다.`},{id:"2025-2-05",session:"2025년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
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
}`,language:"java",choices:["BZ","ZB","BB","ZZ"],blanks:[{answer:"BB"}],explanation:`정답
BB

정답 근거
자바는 항상 값으로 전달하며, 객체(배열·문자열)는 '참조값'이 복사되어 전달된다.
• data[0] = s: 같은 배열 객체의 내용을 바꾸므로 호출자에서도 data[0]은 "B"
• s = "Z": 메서드 안의 매개변수 s가 다른 문자열을 가리키게 될 뿐, 호출자의 s는 그대로 "B"
따라서 data[0] + s = "B" + "B" = BB

풀이 보강
호출 전 data는 배열 객체 하나를, s는 문자열 B를 가리킨다. change 안의 data는 같은 배열 주소의 복사본이어서 원소 대입이 공유 객체에 반영된다. 반면 매개변수 s 자체를 Z에 재대입해도 호출자의 변수 s는 바뀌지 않는다. Java가 참조로 전달하는 언어라고 설명하지 않고 참조값을 값으로 전달한다고 설명해야 한다.`},{id:"2025-2-06",session:"2025년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"IP 주소 223.13.234.132의 서브넷 마스크가 255.255.255.192일 때, 다음을 쓰시오.",blocks:[{type:"text",text:`① 네트워크 주소의 마지막 옥텟 (223.13.234.( ① ))
② 이 네트워크에서 호스트에 할당할 수 있는 IP 주소의 개수`}],choices:["62","64","128","132","192"],blanks:[{label:"①",answer:"128"},{label:"②",answer:"62"}],explanation:`정답
①: 128
②: 62

정답 근거
255.255.255.192 = /26 → 마지막 옥텟 192 = 11000000, 블록 크기 256 − 192 = 64
네트워크: 0~63, 64~127, 128~191, 192~255
• 132는 128~191 블록 → 네트워크 주소 223.13.234.128
• 사용 가능한 호스트 = 64 − 2(네트워크·브로드캐스트 주소) = 62

풀이 보강
네트워크 주소는 마지막 옥텟의 132 & 192 = 128로도 구할 수 있다. 브로드캐스트는 223.13.234.191이고 할당 가능 범위는 .129~.190이다. 64는 블록의 전체 주소 수이고 62는 일반적인 호스트 할당 가능 수다. 132는 입력 호스트 주소의 일부이며 네트워크 주소의 경계가 아니다.`},{id:"2025-2-07",session:"2025년 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 디자인 패턴을 쓰시오.",blocks:[{type:"text",text:`• 실제 객체 앞에 대리 객체를 둔다.
• 대리 객체가 요청을 받아 접근 제어, 지연 생성(필요할 때 생성), 로그 기록 등을 처리한 뒤 실제 객체에 전달한다.`}],choices:["Adapter 패턴","Facade 패턴","Composite 패턴","Proxy 패턴"],blanks:[{answer:"Proxy 패턴"}],explanation:`정답
Proxy 패턴

정답 근거
프록시(Proxy) 패턴은 실제 객체 대신 대리 객체가 요청을 받아 접근 제어, 지연 생성(필요할 때 생성), 로깅, 캐싱 등을 처리한 뒤 실제 객체에 전달하는 구조 패턴이다.
오답 정리
• Adapter: 인터페이스 변환
• Facade: 복잡한 하위 시스템에 단순한 통합 창구 제공
• Composite: 부분-전체를 트리 구조로 동일하게 다룸

풀이 보강
클라이언트는 프록시를 통해 실제 객체와 같은 인터페이스로 요청할 수 있다. 프록시가 권한을 검사하거나 실제 객체 생성을 늦추는 목적은 접근을 통제하는 데 있다. 어댑터는 맞지 않는 인터페이스를 변환하고, 퍼사드는 여러 하위 기능을 단순한 창구로 묶으므로 «대리 객체가 원래 객체를 대신함»이라는 단서와 다르다.`},{id:"2025-2-08",session:"2025년 2회",subjectId:3,subjectName:"인터페이스·UI",type:"text",question:"다음 설명에 해당하는 웹 기술을 영문 약자로 쓰시오.",blocks:[{type:"text",text:`• JavaScript로 서버와 비동기 방식으로 통신한다.
• 페이지 전체를 새로 고치지 않고 필요한 부분만 갱신한다.`}],choices:["JSON","SOAP","AJAX","REST"],blanks:[{answer:"AJAX"}],explanation:`정답
AJAX

정답 근거
AJAX(Asynchronous JavaScript and XML)는 자바스크립트로 서버와 비동기 통신하여, 페이지 전체를 새로 고치지 않고 필요한 부분만 갱신하는 기술이다. 데이터 형식으로는 요즘 XML보다 JSON을 주로 쓴다.
오답 정리: JSON(데이터 표현 형식), REST(자원 중심 API 설계 방식), SOAP(XML 기반 메시지 프로토콜)

풀이 보강
AJAX는 단일 새 프로토콜이 아니라 브라우저의 JavaScript와 HTTP 요청 등을 조합한 통신 방식이다. XMLHttpRequest나 fetch로 요청하고 응답을 받은 뒤 화면 일부를 갱신할 수 있다. 이름에 XML이 들어 있어도 응답 형식이 XML로 제한되지는 않는다. JSON은 데이터 형식이고 REST는 아키텍처 스타일이라 역할이 다르다.`},{id:"2025-2-09",session:"2025년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`interface Calc {
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
}`,language:"java",choices:["7","12","15","19"],blanks:[{answer:"19"}],explanation:`정답
19

정답 근거
• 첫 번째 람다: 실행 중 예외 발생 → catch 블록의 return 7 실행 → 7
• 두 번째 람다: 3 + 9 = 12
• 합계: 7 + 12 = 19
try에서 예외가 나면 나머지 try 코드는 건너뛰고 catch로 이동한다.

풀이 보강
exec에 전달한 람다는 Calc의 run 메서드 구현으로 호출된다. 첫 람다의 정수 나눗셈은 반환값을 만들기 전에 예외가 나므로 catch의 7이 반환된다. 두 번째는 12다. print에 전달되는 것은 두 정수의 덧셈이므로 712 같은 문자열 연결이 아니라 19다. 람다를 만들 때와 실제 run을 호출하는 시점도 구별한다.`},{id:"2025-2-10",session:"2025년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class Parent {
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
}`,language:"java",choices:["5P","3C","3P","5C"],blanks:[{answer:"5P"}],explanation:`정답
5P

정답 근거
• 인스턴스 메서드 x(int): Child가 오버라이딩 → 실제 객체(Child) 기준으로 실행 → 5
• static 메서드 id(): 오버라이딩되지 않고 참조 변수 타입(Parent) 기준으로 호출 → "P"
5 + "P" → 5P
static 메서드는 객체가 아니라 클래스에 속하므로 동적 바인딩이 일어나지 않는다(메서드 숨김).

풀이 보강
p.x(3)은 가상 인스턴스 호출이라 Child.x(3)의 3+2를 사용한다. p.id()처럼 인스턴스 변수로 써도 static 메서드의 선택 기준은 p의 선언 타입 Parent다. Parent.id()로 적으면 이 의미가 더 분명하다. 5 뒤에 문자열 P가 연결되어 5P가 되며, static 메서드 숨김을 오버라이딩으로 취급하면 5C라는 오답이 된다.`},{id:"2025-2-11",session:"2025년 2회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"다음 제어 흐름 그래프에 대해 분기(결정) 커버리지를 적용하려고 한다. 결정 노드 번호와, 반드시 지나야 하는 분기(간선)의 수를 쓰시오.",blocks:[{type:"text",text:`• 2번 노드: 조건이 참이면 3번, 거짓이면 4번으로 이동
• 6번 노드: 조건이 참이면 1번, 거짓이면 7번으로 이동
• 그 밖의 노드는 다음 노드로 바로 이동`}],choices:["4개","1, 2","2개","3, 7","2, 6","8개"],blanks:[{label:"결정 노드",answer:"2, 6"},{label:"분기 간선 수",answer:"4개"}],explanation:`정답
결정 노드: 2, 6
분기 간선 수: 4개

정답 근거
분기(결정) 커버리지는 모든 결정문이 참과 거짓으로 각각 한 번 이상 실행되도록 한다.
• 결정 노드: 2번(2→3 또는 2→4), 6번(6→1 또는 6→7)
• 결정 2개 × (참·거짓) 2방향 = 4개의 분기 간선을 모두 지나야 한다.

풀이 보강
반드시 지나야 하는 것은 2→3, 2→4, 6→1, 6→7의 네 조건 분기다. 이것이 테스트 케이스가 반드시 네 개라는 뜻은 아니다. 하나의 실행이 여러 분기를 통과하거나 반복으로 다른 방향을 통과할 수 있다. 그래프 전체의 직선 간선 수나 가능한 전체 경로 수를 세는 문제와 구별한다.`},{id:"2025-2-12",session:"2025년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"큐에 다음 연산을 차례로 수행했을 때, 마지막에 두 번 꺼낸 값을 순서대로 쓰시오.",blocks:[{type:"text",text:`① 1 삽입
② 2 삽입
③ 하나 꺼냄
④ 3 삽입
⑤ 하나 꺼냄
⑥ 하나 꺼냄`}],choices:["1, 2","3, 2","1, 3","2, 3"],blanks:[{answer:"2, 3"}],explanation:`정답
2, 3

정답 근거
큐는 먼저 들어간 것이 먼저 나오는 FIFO 구조다.
• 1 삽입 → [1], 2 삽입 → [1, 2]
• 꺼냄 → 1이 나옴 → [2]
• 3 삽입 → [2, 3]
• 두 번 꺼냄 → 2, 3
원형 큐는 배열의 끝과 처음을 이어 공간을 재사용할 뿐, 동작은 똑같이 FIFO다.

풀이 보강
문제에서 마지막에 두 번 꺼낸 값은 ⑤와 ⑥의 반환값이다. ③에서 먼저 꺼낸 1까지 답에 포함하면 요구 범위가 달라진다. 삽입은 rear 쪽, 삭제는 front 쪽에서 수행하고 각 연산 뒤 남은 큐를 적으면 순서를 놓치지 않는다. 스택이었다면 최근에 넣은 3이 먼저 나오는 LIFO가 적용된다.`},{id:"2025-2-13",session:"2025년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 프로세스들을 RR(Round Robin) 방식으로 스케줄링할 때 평균 대기 시간을 구하시오. (단, 시간 할당량은 4ms이다.)",blocks:[{type:"table",headers:["프로세스","도착 시간(ms)","실행 시간(ms)"],rows:[["P1","0","8"],["P2","1","4"],["P3","2","9"],["P4","3","5"]]}],choices:["6.5ms","12.5ms","10.25ms","11.75ms"],blanks:[{answer:"11.75ms"}],explanation:`정답
11.75ms

정답 근거
RR(라운드 로빈)은 도착 순서대로 시간 할당량(4ms)만큼만 실행하고, 끝나지 않으면 큐 맨 뒤로 보낸다.
• 0~4 P1(남은 4) → 4~8 P2 완료(8) → 8~12 P3(남은 5) → 12~16 P4(남은 1)
• 16~20 P1 완료(20) → 20~24 P3(남은 1) → 24~25 P4 완료(25) → 25~26 P3 완료(26)
대기 시간 = 완료 − 도착 − 실행
• P1 20−0−8 = 12, P2 8−1−4 = 3, P3 26−2−9 = 15, P4 25−3−5 = 17
평균 = (12 + 3 + 15 + 17) / 4 = 11.75ms

풀이 보강
P1이 첫 할당량을 다 쓰는 시각 4에는 이미 도착한 P2·P3·P4 뒤로 P1을 보낸다. 짧은 남은 시간을 이유로 중간에 순서를 바꾸면 SRT와 섞인 계산이다. 반환시간은 각각 20, 7, 24, 22이고 평균 18.25다. 평균 실행시간 6.5를 빼면 평균 대기시간 11.75가 되어 별도로 검산할 수 있다.`},{id:"2025-2-14",session:"2025년 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
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
}`,language:"c",choices:["5 4","5 6","1 2","3 4"],blanks:[{answer:"5 6"}],explanation:`정답
5 6

정답 근거
pptr은 배열 a를 가리키는 포인터의 주소이므로, *pptr은 배열 a(의 시작 주소)이다.
• (*pptr)[1] = (*pptr)[2]는 a[1] = a[2]와 같다.
• 구조체끼리 대입하면 모든 멤버 값이 복사된다 → a[1].x = 5, a[1].y = 6

풀이 보강
pptr 자체는 ptr의 주소이고 *pptr은 ptr에 저장된 a의 시작 주소다. 괄호 (*pptr)[1]를 먼저 해석하면 두 번째 구조체를 뜻한다. 구조체 대입은 해당 멤버 x·y를 함께 복사하므로 x만 5가 되고 y가 4로 남는 5 4가 아니다. 이 코드의 멤버는 정수라 포인터가 가리키는 객체의 깊은 복사 문제도 없다.`},{id:"2025-2-15",session:"2025년 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class Obj {
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
}`,language:"java",choices:["1a2b3","3a3b1","1a3b3","3a2b1"],blanks:[{answer:"1a3b3"}],explanation:`정답
1a3b3

정답 근거
• 처음: arr = [a, b, c], a.v = 1, b.v = 2, c.v = 3
• arr[0]과 arr[2] 교환 → arr = [c, b, a] (객체가 아니라 참조만 바뀜)
• arr[1].v = arr[0].v → b.v = c.v = 3
결과: a.v = 1, b.v = 3, c.v = 3 (복원 출력 1a3b3)

풀이 보강
배열 슬롯을 교환한 뒤에도 지역 변수 a는 첫 객체, b는 둘째 객체, c는 셋째 객체를 계속 가리킨다. arr[1]은 b, arr[0]은 c이므로 필드 대입은 b.v=3이다. 최종 출력은 배열 순서가 아니라 원래 변수 a,b,c의 필드 순서로 만든다. 값 교환과 참조 교환을 혼동하면 3a3b1처럼 잘못 읽게 된다.`},{id:"2025-2-16",session:"2025년 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
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
}`,language:"c",choices:["3 2 1","3 1 2","2 1 3","1 2 3"],blanks:[{answer:"3 1 2"}],explanation:`정답
3 1 2

정답 근거
연결 리스트는 각 노드의 다음 노드 포인터를 따라가며 출력한다.
head = c → c(3) → c.n = a → a(1) → a.n = b → b(2) → b.n = NULL(끝)
출력: 3 1 2

풀이 보강
변수 선언 순서 a,b,c가 출력 순서인 것은 아니다. head에 &c를 저장한 뒤 c.n=&a, a.n=&b를 따라가므로 방문은 c,a,b다. 마지막 b.n은 NULL로 초기화되어 순회가 종료된다. printf의 공백은 각 값 뒤에 붙지만 의미 있는 값의 순서는 3,1,2이며 노드 이름과 저장된 수를 함께 적어 추적한다.`},{id:"2025-2-17",session:"2025년 2회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`lst = [1, 2, 3]
d = {x: x * 2 for x in lst}
s = {x * 2 for x in lst}
d[2] = 7
s.add(99)
print(len(set(d.values()) & s))`,language:"python",choices:["1","2","3","4"],blanks:[{answer:"2"}],explanation:`정답
2

정답 근거
• 딕셔너리 {x: 2x} → {1: 2, 2: 4, 3: 6}, dict[2] = 7로 바꾸면 값은 2, 7, 6
• 집합 {2, 4, 6}에 99 추가 → {2, 4, 6, 99}
• 교집합 {2, 7, 6} & {2, 4, 6, 99} = {2, 6} → 크기 2

풀이 보강
d[2]=7은 키 2를 삭제하는 것이 아니라 그 키의 값을 4에서 7로 바꾸는 연산이다. d.values()를 집합으로 바꾼 {2,7,6}과 s의 공통값은 2와 6이다. d 자체를 set으로 바꾸면 키 {1,2,3}을 얻는 다른 계산이 된다. len은 교집합 원소의 합이 아니라 서로 다른 원소의 개수를 센다.`},{id:"2025-2-18",session:"2025년 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
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
}`,language:"c",choices:["TSBE","BEST","TSEB","BTSE"],blanks:[{answer:"TSEB"}],explanation:`정답
TSEB

정답 근거
연결 리스트 머리(head)에 삽입하면 새 노드가 항상 맨 앞에 붙으므로 순서가 뒤집힌다.
B → E, B → S, E, B → T, S, E, B
순회 출력: TSEB (스택처럼 나중에 넣은 것이 먼저 나온다)

풀이 보강
각 삽입에서 n->next를 이전 head에 연결한 다음 head=n으로 갱신한다. 그래서 B 삽입 후 B, E 후 E→B, S 후 S→E→B, T 후 T→S→E→B가 된다. 순회가 문자열을 뒤집는 것이 아니라 이미 삽입 단계에서 순서가 뒤집힌 것이다. 꼬리에 붙이는 삽입이었다면 BEST 순서가 유지된다.`},{id:"2025-2-19",session:"2025년 2회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 공격 기법을 쓰시오.",blocks:[{type:"text",text:`• TCP 3-way handshake 과정에서 마지막 ACK를 보내지 않는다.
• SYN 패킷만 대량으로 보내 서버의 연결 대기 큐를 가득 채운다.
• 정상 사용자가 접속하지 못하게 만드는 서비스 거부(DoS) 공격이다.`}],choices:["SYN Flooding","Smurfing","LAND Attack","Ping of Death"],blanks:[{answer:"SYN Flooding"}],explanation:`정답
SYN Flooding

정답 근거
SYN Flooding은 TCP 3-way handshake(SYN → SYN+ACK → ACK)에서 마지막 ACK를 보내지 않은 채 SYN만 대량으로 보내, 서버의 연결 대기 큐(Backlog)를 가득 채워 정상 접속을 막는 서비스 거부(DoS) 공격이다.
오답 정리
• Smurfing: ICMP 에코 요청을 브로드캐스트로 보내 응답을 폭주시킴
• Ping of Death: 규정보다 큰 ICMP 패킷 전송
• LAND Attack: 출발지와 목적지 IP를 같게 위조

풀이 보강
SYN을 받은 서버는 SYN+ACK를 보내고 마지막 ACK를 기다리는 반개방 연결 상태를 유지한다. 이 상태가 과도하게 쌓이는 것이 자원 소진의 이유다. ICMP 브로드캐스트 증폭은 스머프, 조각 재조립의 중첩 취약점은 티어드롭이다. SYN 쿠키 등은 반개방 연결 상태의 저장 부담을 줄이는 대응 기법이다.`},{id:"2025-2-20",session:"2025년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 릴레이션 R에 대해 관계대수 π직책(R)의 결과를 쓰시오.",blocks:[{type:"table",caption:"<R>",headers:["이름","직책"],rows:[["김철수","부장"],["이영희","대리"],["박민수","과장"],["최지훈","차장"],["정수진","대리"]]}],choices:["부장, 대리, 과장, 차장","부장, 대리, 과장, 차장, 대리","부장, 과장, 차장","대리"],blanks:[{answer:"부장, 대리, 과장, 차장"}],explanation:`정답
부장, 대리, 과장, 차장

정답 근거
관계대수의 프로젝트(π)는 지정한 속성만 추출하며, 결과는 릴레이션(집합)이므로 중복 튜플이 제거된다.
π직책(R) → {부장, 대리, 과장, 차장}
※ SQL의 SELECT 직책은 중복을 그대로 보여주므로, 같은 결과를 얻으려면 DISTINCT를 써야 한다.

풀이 보강
원래 다섯 튜플에서 직책 열만 남기면 대리가 두 번 나타나지만 집합 기반의 관계대수 결과에는 한 번만 남는다. 따라서 결과의 카디널리티는 4, 차수는 1이다. 튜플의 순서는 관계대수의 의미에 포함되지 않는다. SQL의 SELECT DISTINCT 직책 FROM R은 중복 제거 측면에서 같은 효과를 낸다.`}],H1=Object.freeze(Object.defineProperty({__proto__:null,default:z1},Symbol.toStringTag,{value:"Module"})),q1=[{id:"2025-1-01",session:"2025년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 공격 기법을 쓰시오.",blocks:[{type:"text",text:`• 이미 인증을 마친 정상 사용자의 TCP 연결(세션)을 가로챈다.
• 시퀀스 번호 등을 조작하여 그 사용자의 권한으로 시스템에 접근한다.`}],choices:["세션 하이재킹(Session Hijacking)","파밍(Pharming)","스푸핑(Spoofing)","스니핑(Sniffing)"],blanks:[{answer:"세션 하이재킹(Session Hijacking)"}],explanation:`정답
세션 하이재킹(Session Hijacking)

정답 근거
세션 하이재킹(Session Hijacking)은 이미 인증된 정상 사용자의 세션(TCP 연결)을 가로채, 시퀀스 번호 등을 조작해서 그 사용자의 권한으로 시스템에 접근하는 공격이다.
오답 정리
• 스니핑: 네트워크 패킷을 몰래 엿봄(수동적 공격)
• 스푸핑: IP·MAC 주소 등을 위조해 다른 사람으로 위장
• 파밍: DNS 등을 변조해 가짜 사이트로 유도

풀이 보강
이미 성립된 인증 상태를 탈취한다는 점에서 인증 전 자격증명을 속여 얻는 공격과 구별한다. TCP 세션에서는 시퀀스 번호 같은 연결 상태를 악용하고, 웹에서는 세션 식별자 탈취 형태도 있다. 스니핑은 정보를 관찰하는 행위이고 스푸핑은 신원을 위조하는 행위라 세션 하이재킹의 수단이 될 수 있어도 같은 정의는 아니다.`},{id:"2025-1-02",session:"2025년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"데이터베이스 무결성에 대한 다음 설명에 해당하는 용어를 각각 쓰시오.",blocks:[{type:"text",text:`① 속성 값은 정해진 범위(도메인) 안의 값이어야 한다.
② 기본키는 NULL 값이나 중복 값을 가질 수 없다.
③ 외래키 값은 참조하는 테이블의 기본키 값이거나 NULL이어야 한다.`}],choices:["참조 무결성","사용자 정의 무결성","개체 무결성","도메인 무결성","정보 무결성"],blanks:[{label:"①",answer:"도메인 무결성"},{label:"②",answer:"개체 무결성"},{label:"③",answer:"참조 무결성"}],explanation:`정답
①: 도메인 무결성
②: 개체 무결성
③: 참조 무결성

정답 근거
• 도메인 무결성: 속성 값은 정해진 도메인(허용 범위·형식) 안에 있어야 함
• 개체 무결성: 기본키는 NULL이거나 중복될 수 없음
• 참조 무결성: 외래키 값은 NULL이거나 참조하는 테이블의 기본키 값이어야 함
참고: 사용자 정의 무결성은 업무 규칙을 만족해야 한다는 제약이다.

풀이 보강
기본키 중복·NULL은 행 식별의 문제, 외래키의 유효성은 테이블 간 연결의 문제, 속성 범위 위반은 값 자체의 문제로 구분한다. 외래키는 참조 대상의 UNIQUE 키를 가리킬 수도 있다. 외래키의 NULL 허용은 NOT NULL 제약 여부에 달려 있으므로 «외래키에는 항상 NULL을 넣을 수 있다»고 일반화하지 않는다.`},{id:"2025-1-03",session:"2025년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 설명에 해당하는 오류 검출 기법을 영문 약자로 쓰시오.",blocks:[{type:"text",text:`• 송신 측과 수신 측이 같은 생성 다항식을 사용한다.
• 데이터를 생성 다항식으로 나눈 나머지를 검사 값으로 붙여 보낸다.
• 수신 측은 같은 방식으로 나누어 전송 오류를 확인한다.`}],choices:["FEC","Hamming","ARQ","CRC"],blanks:[{answer:"CRC"}],explanation:`정답
CRC

정답 근거
CRC(Cyclic Redundancy Check, 순환 중복 검사)는 데이터를 생성 다항식으로 나눈 나머지를 검사 비트로 붙여 보내고, 수신 측에서 같은 방식으로 나눠 오류를 검출한다.
오답 정리
• ARQ: 오류를 발견하면 재전송 요청
• FEC: 수신 측이 스스로 오류를 정정
• 해밍 코드: 오류 검출과 1비트 정정이 가능한 코드

풀이 보강
송신 데이터 뒤에 생성 다항식 차수만큼 0을 붙여 XOR 방식으로 나누고, 나머지를 검사 비트로 붙인다. 수신 측은 전체 수신 비트열을 같은 다항식으로 나누어 오류 여부를 검사한다. 나머지가 0이어도 모든 가능한 오류가 없다고 증명되는 것은 아니며 생성 다항식에 따라 검출 가능한 오류 패턴이 정해진다.`},{id:"2025-1-04",session:"2025년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"다음 설명에 해당하는 악성 소프트웨어를 쓰시오.",blocks:[{type:"text",text:`• "컴퓨터가 악성코드에 감염되었습니다" 같은 가짜 경고를 띄운다.
• 사용자에게 불안감을 조성해 가짜 백신 결제나 프로그램 설치를 유도한다.`}],choices:["랜섬웨어(Ransomware)","애드웨어(Adware)","스파이웨어(Spyware)","스캐어웨어(Scareware)"],blanks:[{answer:"스캐어웨어(Scareware)"}],explanation:`정답
스캐어웨어(Scareware)

정답 근거
스캐어웨어(Scareware)는 '컴퓨터가 감염되었다' 같은 가짜 경고로 겁을 주어(scare) 가짜 백신 구매나 악성 프로그램 설치를 유도하는 악성 소프트웨어다.
오답 정리
• 애드웨어: 광고를 띄우는 소프트웨어
• 랜섬웨어: 파일을 암호화하고 몸값을 요구
• 스파이웨어: 몰래 정보를 수집

풀이 보강
가짜 감염 경고로 두려움을 조성해 결제·설치를 유도한다는 행동이 구분 기준이다. 스캐어웨어는 파일을 실제 암호화해야 성립하는 것이 아니다. 랜섬웨어의 암호화·접근 차단, 스파이웨어의 은밀한 정보 수집, 애드웨어의 광고 표시와 핵심 목적을 비교하면 보기의 이름만 외우지 않고 구별할 수 있다.`},{id:"2025-1-05",session:"2025년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
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
}`,language:"java",choices:["출력1출력5","출력1","출력2출력5","출력2출력1출력5"],blanks:[{answer:"출력1출력5"}],explanation:`정답
출력1출력5

정답 근거
• 5 / 0(정수) → ArithmeticException 발생 → try의 나머지 코드는 건너뜀
• 일치하는 catch(ArithmeticException) 실행 → "출력1"
• 이 코드에서는 catch 처리 뒤 finally도 실행 → "출력5"
줄바꿈 없이 이어서 출력하므로 출력1출력5
※ 실수 나눗셈 5.0 / 0은 예외 없이 Infinity가 된다.

풀이 보강
정수 5/0에서는 값이 만들어지지 않고 즉시 ArithmeticException으로 제어가 넘어간다. 따라서 출력2는 실행되지 않는다. 이 코드처럼 제어가 try/catch를 벗어날 때 finally가 실행되어 출력5가 이어진다. JVM 강제 종료처럼 일반 제어 흐름 자체가 중단되는 경우까지 finally가 무조건 실행된다고 일반화하지 않는다.`},{id:"2025-1-06",session:"2025년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"다음 설명에 해당하는 프로토콜을 각각 영문 약자로 쓰시오.",blocks:[{type:"text",text:`① IP 주소를 이용해 MAC 주소를 알아내는 프로토콜
② MAC 주소를 이용해 IP 주소를 알아내는 프로토콜`}],choices:["ICMP","RARP","NAT","ARP","DHCP"],blanks:[{label:"①",answer:"ARP"},{label:"②",answer:"RARP"}],explanation:`정답
①: ARP
②: RARP

정답 근거
• ARP(Address Resolution Protocol): IP 주소 → MAC 주소
• RARP(Reverse ARP): MAC 주소 → IP 주소 (현재는 DHCP 등으로 대체)
오답 정리: ICMP(오류·제어 메시지, ping), DHCP(IP 주소 자동 할당), NAT(사설 IP ↔ 공인 IP 변환)

풀이 보강
ARP는 IPv4를 사용하는 같은 링크에서 다음 홉의 MAC 주소를 찾는다. 목적지가 다른 네트워크라면 보통 최종 목적지의 MAC이 아니라 기본 게이트웨이의 MAC을 알아낸다. RARP는 미리 정해진 장치 주소로 IP를 찾는 방식이며 DHCP처럼 임대·게이트웨이·DNS 설정까지 제공하는 프로토콜과는 범위가 다르다.`},{id:"2025-1-07",session:"2025년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 두 테이블에 대해 SQL을 실행했을 때의 결과를 쓰시오.",blocks:[{type:"table",caption:"<직원>",headers:["id","이름"],rows:[["1","이순신"],["2","강감찬"],["3","김유신"]]},{type:"table",caption:"<수당>",headers:["id","수당"],rows:[["1","1000"],["2","300"],["3","450"]]}],codeSnippet:`SELECT 이름, 수당
FROM 직원 INNER JOIN 수당 ON 직원.id = 수당.id
WHERE 수당 >= 500;`,language:"sql",choices:["이순신 1000, 김유신 450","결과 없음","강감찬 300","이순신 1000"],blanks:[{answer:"이순신 1000"}],explanation:`정답
이순신 1000

정답 근거
• INNER JOIN은 양쪽에 짝이 있는 행만 결합 → (이순신, 1000), (강감찬, 300), (김유신, 450)
• WHERE 수당 >= 500 → 이순신 1000만 남음
김유신 450은 500 미만이라 제외된다.

풀이 보강
ON은 직원 id와 수당 id가 같은 행을 연결하고 WHERE는 연결된 행에서 금액을 검사한다. 금액 1000만 500 이상이므로 출력 열 순서 이름,수당에 따라 이순신 1000이다. 450도 포함하려면 비교 기준 자체가 달라져야 한다. INNER JOIN은 이름이 같아서가 아니라 id가 같아서 연결한다는 점을 확인한다.`},{id:"2025-1-08",session:"2025년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"관계형 데이터베이스에 대한 다음 설명에 해당하는 용어를 각각 영어로 쓰시오.",blocks:[{type:"text",text:`① 릴레이션의 속성(열) 수
② 릴레이션의 튜플(행) 수
③ 다른 릴레이션의 기본키를 참조하는 키
④ 하나의 속성이 가질 수 있는 값들의 집합`}],choices:["Foreign Key","Degree","Cardinality","Tuple","Attribute","Domain","Primary Key"],blanks:[{label:"①",answer:"Degree"},{label:"②",answer:"Cardinality"},{label:"③",answer:"Foreign Key"},{label:"④",answer:"Domain"}],explanation:`정답
①: Degree
②: Cardinality
③: Foreign Key
④: Domain

정답 근거
• Degree(디그리, 차수): 속성(열)의 수
• Cardinality(카디널리티, 기수): 튜플(행)의 수
• Foreign Key(외래키): 다른 릴레이션의 기본키를 참조하는 속성
• Domain(도메인): 속성이 가질 수 있는 값들의 집합
오답 정리: Tuple은 행, Attribute는 열, Primary Key는 기본키

풀이 보강
행 하나인 Tuple과 행의 개수인 Cardinality, 열 하나인 Attribute와 열의 개수인 Degree를 짝으로 구별한다. 데이터가 추가되면 카디널리티는 늘 수 있지만 차수는 열 정의를 바꾸지 않는 한 그대로다. Foreign Key는 테이블 간 참조를 표현하고 반드시 그 테이블에서 유일한 값일 필요는 없다.`},{id:"2025-1-09",session:"2025년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"호스트 192.168.35.10/22와 같은 네트워크에 속하는 IP 주소를 다음 중에서 모두 고르시오.",blocks:[{type:"text",text:`• 192.168.34.1
• 192.168.32.19
• 192.168.35.200
• 192.168.33.138
• 192.168.35.50`}],choices:["192.168.34.1, 192.168.35.200, 192.168.35.50 세 개","192.168.32.19를 제외한 4개","192.168.35.200, 192.168.35.50 두 개뿐","제시된 5개 모두"],blanks:[{answer:"제시된 5개 모두"}],explanation:`정답
제시된 5개 모두

정답 근거
/22 → 서브넷 마스크 255.255.252.0. 세 번째 옥텟 252 = 11111100이므로 4 단위로 블록이 나뉜다(…, 32~35, 36~39, …).
192.168.35.10의 세 번째 옥텟 35는 32~35 블록 → 네트워크 범위 192.168.32.0 ~ 192.168.35.255
보기의 세 번째 옥텟 34, 32, 35, 33, 35는 모두 32~35 안에 있으므로 5개 모두 같은 네트워크다.

풀이 보강
세 번째 옥텟에 마스크 252를 AND하면 34·32·35·33 모두 32가 된다. 따라서 네트워크 주소는 192.168.32.0/22로 같다. 이 블록에는 전체 1024개 주소가 있고 일반적인 호스트 범위는 192.168.32.1~192.168.35.254다. 제시된 다섯 주소는 네트워크·브로드캐스트도 아니므로 모두 호스트 주소로 사용할 수 있다.`},{id:"2025-1-10",session:"2025년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때 출력되는 두 줄을 순서대로 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    char arr[6] = "ACDE";
    printf("%d\\n", 'E' - 'A');

    int pos = 0;
    for (int i = 4; i > pos; i--)
        arr[i] = arr[i - 1];
    arr[pos] = 'B';
    printf("%s", arr);
    return 0;
}`,language:"c",choices:["ABCDE","69","4","BACDE","5"],blanks:[{label:"첫째 줄",answer:"4"},{label:"둘째 줄",answer:"BACDE"}],explanation:`정답
첫째 줄: 4
둘째 줄: BACDE

정답 근거
• 문자는 아스키 코드값으로 계산된다: 'E'(69) − 'A'(65) = 4
• 삽입은 삽입할 위치 뒤의 요소들을 한 칸씩 뒤로 민 다음 그 자리에 값을 넣는다 → B, A, C, D, E
(복원 자료의 코드 연산을 요약한 문제)

풀이 보강
문자를 밀 때 i=4→3→2→1로 뒤에서 앞으로 이동해야 원래 값을 덮어쓰지 않는다. arr[5]는 초기화 때 0으로 채워져 있어 B를 삽입한 뒤에도 문자열 끝에 널 문자가 남는다. 첫 printf는 줄바꿈을 포함하므로 첫 줄은 4, 둘째 줄은 BACDE다. 문자 코드 차이를 출력하는 식과 문자열 삽입 결과를 따로 계산한다.`},{id:"2025-1-11",session:"2025년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
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
}`,language:"c",choices:["-13","7","13","45"],blanks:[{answer:"13"}],explanation:`정답
13

정답 근거
배열을 행 순서대로 펼치면 9, 5, 2, 7, 4, 1, 8, 3, 6이고, +와 −를 번갈아 적용한다.
+9 −5 +2 −7 +4 −1 +8 −3 +6
= (9 + 2 + 4 + 8 + 6) − (5 + 7 + 1 + 3) = 29 − 16 = 13

풀이 보강
sign은 안쪽 반복마다 반전되며 새 행이 시작할 때 1로 초기화되지 않는다. 열 수가 홀수 3개라 둘째 행은 음수 부호부터 시작한다. 행별 합은 9−5+2=6, −7+4−1=−4, 8−3+6=11이고 총 13이다. 각 행에서 부호를 다시 +로 시작하면 원래 코드와 다른 계산이 된다.`},{id:"2025-1-12",session:"2025년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 결합도를 각각 쓰시오.",blocks:[{type:"text",text:`① 한 모듈이 다른 모듈의 내부 기능이나 자료를 직접 참조·수정한다.
② 배열이나 구조체 같은 자료구조를 매개변수로 전달한다.
③ 여러 모듈이 같은 전역 변수를 공유한다.`}],choices:["내용 결합도","제어 결합도","자료 결합도","공통 결합도","스탬프 결합도","외부 결합도"],blanks:[{label:"①",answer:"내용 결합도"},{label:"②",answer:"스탬프 결합도"},{label:"③",answer:"공통 결합도"}],explanation:`정답
①: 내용 결합도
②: 스탬프 결합도
③: 공통 결합도

정답 근거
• 내용 결합도: 다른 모듈의 내부 기능·자료를 직접 참조·수정
• 스탬프 결합도: 배열·구조체 같은 자료구조를 매개변수로 전달
• 공통 결합도: 여러 모듈이 전역 변수(공통 데이터 영역)를 공유
결합도(약함 → 강함): 자료 < 스탬프 < 제어 < 외부 < 공통 < 내용

풀이 보강
자료구조를 통째로 넘기면 필요한 일부 필드 외의 구조에도 의존할 수 있어 스탬프 결합도가 된다. 필요한 단순 값만 넘기면 자료 결합도이고, 그 값으로 상대 모듈의 실행 분기를 선택하면 제어 결합도다. 전역 변수 공유는 공통 결합도, 상대 구현 내부를 직접 수정하는 것은 내용 결합도라는 접근 경로를 기준으로 판단한다.`},{id:"2025-1-13",session:"2025년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`class Parent {
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
}`,language:"java",choices:["16","18","36","54"],blanks:[{answer:"54"}],explanation:`정답
54

정답 근거
자바에서는 부모 생성자 안에서 호출한 메서드라도, 자식이 오버라이딩했다면 자식의 메서드가 실행된다(동적 바인딩).
• new Child() → 부모 생성자 Parent()가 먼저 실행되고, 그 안의 show()는 Child의 show()(× 3) → 2 × 3 = 6
• 이어서 자식 생성자 Child()에서 show()를 두 번 호출 → 6 × 3 = 18 → 18 × 3 = 54
Parent의 show()(× 2)는 한 번도 실행되지 않으므로 최종 출력은 54이다.

풀이 보강
total은 static 필드라 부모·자식 생성자에서 같은 저장공간을 사용한다. Parent 생성자가 먼저 호출되어도 그 안의 인스턴스 메서드 show는 실제 Child 객체에 따라 선택된다. 곱하기 3이 총 세 번 적용되므로 2×3³=54로 검산한다. 부모 생성자 호출 순서와 부모 메서드 구현 선택은 서로 다른 문제다.`},{id:"2025-1-14",session:"2025년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 설명에 해당하는 디자인 패턴을 쓰시오.",blocks:[{type:"text",text:`• 인터페이스가 맞지 않는 기존 클래스를 감싼다(wrapping).
• 클라이언트가 원하는 인터페이스로 바꿔 주어 함께 사용할 수 있게 한다.
• 구조(Structural) 패턴에 속한다.`}],choices:["Composite(컴포지트) 패턴","Adapter(어댑터) 패턴","Bridge(브리지) 패턴","Facade(퍼사드) 패턴"],blanks:[{answer:"Adapter(어댑터) 패턴"}],explanation:`정답
Adapter(어댑터) 패턴

정답 근거
어댑터(Adapter) 패턴은 호환되지 않는 기존 클래스의 인터페이스를 감싸서(wrapping) 클라이언트가 원하는 인터페이스로 바꿔 주는 구조 패턴이다. 110V 플러그를 220V 콘센트에 꽂게 해주는 어댑터와 같다.
오답 정리
• Bridge: 기능과 구현 계층 분리
• Facade: 복잡한 하위 시스템에 단순한 창구 제공
• Composite: 부분-전체를 트리 구조로 다룸

풀이 보강
어댑터는 기존 기능을 새로 구현하는 대신 기존 객체에 대한 호출 형식을 바꾼다. 예를 들어 read()를 요구하는 클라이언트와 getData()만 제공하는 클래스를 연결하는 역할이다. 브리지는 처음부터 추상화·구현 두 축을 분리하는 설계이고, 퍼사드는 여러 복잡한 기능을 쓰기 쉽게 묶는 설계라 목적이 다르다.`},{id:"2025-1-15",session:"2025년 1회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"다음 코드의 반복문이 한 번 실행된 뒤 끝날 때, 실행되는 문장의 번호를 순서대로 고르시오.",codeSnippet:`① i = 0;
② while (i < 1) {
③     if (i == 0)
④         printf("%d", i);
⑤     i++;
   }
⑥ printf("끝");`,language:"c",choices:["① → ③ → ④ → ⑤ → ② → ⑥","① → ② → ③ → ④ → ⑤ → ② → ⑥","① → ② → ③ → ④ → ⑤ → ⑥","① → ② → ③ → ④ → ② → ⑤ → ⑥"],blanks:[{answer:"① → ② → ③ → ④ → ⑤ → ② → ⑥"}],explanation:`정답
① → ② → ③ → ④ → ⑤ → ② → ⑥

정답 근거
while문은 조건을 검사해 참이면 본문을 실행하고, 본문이 끝나면 다시 조건으로 돌아간다.
① 초기화 → ② 조건(참) → ③ if → ④ 본문 → ⑤ 증가 → ② 조건(거짓) → ⑥ 종료
반복이 끝날 때도 조건(②)을 한 번 더 검사해야 빠져나온다는 점이 핵심이다.

풀이 보강
②는 while 전체를 한 번 실행했다는 표시가 아니라 반복 조건 검사 지점이다. i=0에서는 참이고 ⑤에서 i=1이 된 뒤 다시 돌아오면 거짓이다. ③의 if 조건은 첫 반복에서 참이므로 ④가 실행된다. 실제 출력은 0끝이지만 문제는 출력 문자열이 아니라 실행 문장의 번호 순서를 요구한다.`},{id:"2025-1-16",session:"2025년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
    static int func(int[] a, int lo, int hi) {
        if (lo > hi) return 0;
        int mid = (lo + hi) / 2;
        return a[mid] + Math.max(func(a, lo, mid - 1), func(a, mid + 1, hi));
    }
    public static void main(String[] args) {
        int[] a = {3, 5, 8, 4, 8};
        System.out.print(func(a, 0, 4));
    }
}`,language:"java",choices:["8","12","16","20"],blanks:[{answer:"20"}],explanation:`정답
20

정답 근거
• 가운데 원소 a[2] = 8을 더함
• 왼쪽·오른쪽 재귀 결과 중 큰 값 선택 → max(8, 12) = 12
• 반환값 = 8 + 12 = 20

풀이 보강
왼쪽 구간 [0,1]은 mid=0의 3에 오른쪽 [1,1]의 5를 더해 8이다. 오른쪽 구간 [3,4]는 mid=3의 4에 [4,4]의 8을 더해 12다. 빈 구간은 lo>hi에서 0을 반환한다. 최상위 8에 양쪽 결과를 모두 더하지 않고 max(8,12)만 더하므로 28이 아니라 20이며 배열 전체의 합을 구하는 함수도 아니다.`},{id:"2025-1-17",session:"2025년 1회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`tree = [1, 5, 8, 2, 4, 6, 7]

def depth(i):
    d = 0
    while i > 0:
        i = (i - 1) // 2
        d += 1
    return d

print(sum(v for i, v in enumerate(tree) if depth(i) % 2 == 1))`,language:"python",choices:["5","8","13","18"],blanks:[{answer:"13"}],explanation:`정답
13

정답 근거
완전이진트리를 배열에 저장하면 인덱스 i의 부모는 (i − 1) // 2, 자식은 2i + 1, 2i + 2이다.
깊이: 루트(인덱스 0)는 0, 인덱스 1·2는 1, 인덱스 3~6은 2 …
깊이가 홀수인 노드는 깊이 1인 두 노드(값 5, 8)이므로 합은 5 + 8 = 13이다.

풀이 보강
enumerate가 반환하는 i는 배열 인덱스이고 v는 노드 값이다. depth는 i를 부모 인덱스로 반복 이동시켜 루트까지의 간선 수를 센다. 값이 홀수인 노드를 고르는 조건이 아니라 깊이가 홀수인 노드를 고르는 조건이다. 깊이 2의 값 2·4·6·7은 포함되지 않고 깊이 1의 5·8만 합산한다.`},{id:"2025-1-18",session:"2025년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
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
}`,language:"c",choices:["12345","35421","53421","54321"],blanks:[{answer:"35421"}],explanation:`정답
35421

정답 근거
• 머리(head)에 1, 2, 3, 4, 5를 차례로 삽입 → 5 → 4 → 3 → 2 → 1
• 값 3인 노드를 떼어내 맨 앞으로 연결 → 3 → 5 → 4 → 2 → 1
출력: 35421

풀이 보강
검색이 끝나면 prev는 값 4, target은 값 3인 노드를 가리킨다. prev->next=target->next로 4→2를 먼저 연결해 3을 떼고, target->next=head로 3→5를 만든 뒤 head를 3으로 바꾼다. 기존 연결을 끊지 않고 앞에 붙이면 순환이 생길 수 있다. 노드의 숫자를 바꾸는 작업이 아니라 연결 순서를 바꾸는 작업이다.`},{id:"2025-1-19",session:"2025년 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`#include <stdio.h>
int main() {
    unsigned char g[2][3] = { {0xA0, 0xA5, 0xDB}, {0xA0, 0xED, 0x81} };
    int sum = 0;
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 3; j++)
            sum += g[i][j] & 0xA5;
    printf("%d", sum);
    return 0;
}`,language:"c",choices:["454","810","908","1816"],blanks:[{answer:"908"}],explanation:`정답
908

정답 근거
0xA5 = 1010 0101과 비트 AND(&)하면 둘 다 1인 비트만 1이 된다.
• 0xA0(1010 0000) & 0xA5 = 1010 0000 = 160
• 0xA5 & 0xA5 = 165
• 0xDB(1101 1011) & 0xA5 = 1000 0001 = 129
• 0xED(1110 1101) & 0xA5 = 1010 0101 = 165
• 0x81(1000 0001) & 0xA5 = 1000 0001 = 129
첫 묶음 160 + 165 + 129 = 454, 둘째 묶음 160 + 165 + 129 = 454 → 합계 908

풀이 보강
0xA5의 1인 자리는 128·32·4·1의 자리다. 0xDB에는 32와 4 비트가 없어 AND 결과가 128+1=129이고, 0xED에는 마스크의 네 비트가 모두 있어 165가 된다. unsigned char로 선언되어 원소 0x80 이상도 음수로 읽지 않는다. 두 행의 마스크 결과 합이 모두 454인지 확인한 뒤 합친다.`},{id:"2025-1-20",session:"2025년 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 쓰시오.",codeSnippet:`public class Main {
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
}`,language:"java",choices:["3","4","5","8"],blanks:[{answer:"4"}],explanation:`정답
4

정답 근거
오버로딩된 메서드는 인수의 자료형으로 선택된다.
• calc("5") → 인수가 문자열이므로 calc(String) 실행
• calc(String)이 calc(4) + calc(2)를 반환 → 3 + 1 = 4
문자열 "5"가 정수 5로 자동 변환되어 calc(int)가 호출되는 일은 없다.

풀이 보강
문자열 인수를 받은 calc(String)은 s의 내용 5를 정수로 해석하지도 사용하지도 않는다. 메서드 본문에 적힌 calc(4)+calc(2)만 계산한다. int 버전은 f(1)=f(2)=1, f(3)=2, f(4)=3이므로 3+1=4다. 오버로드의 선택을 먼저 하고 그 안의 재귀식을 다음에 계산해야 5나 8을 고르는 실수를 피한다.`}],W1=Object.freeze(Object.defineProperty({__proto__:null,default:q1},Symbol.toStringTag,{value:"Module"})),V1=[{id:"2024-3-01",session:"연습 3회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`class A { int n=3; int calc() { return 5; } }
class B extends A { int n=7; int calc() { return 11; } }
class Main {
    public static void main(String[] args) {
        A p = new B();
        System.out.print(p.n + p.calc());
    }
}`,language:"java",choices:["8","14","12","18"],blanks:[{answer:"14"}],explanation:`정답
14

정답 근거
같은 객체를 사용해도 필드와 오버라이딩 메서드를 선택하는 기준은 서로 다르다.

항별 계산
① p의 선언 타입은 A이므로 p.n은 A의 필드 n=3이다.
② 실제 객체는 B이므로 p.calc()는 B가 재정의한 메서드를 실행해 11을 반환한다.
③ 최종 출력은 3+11=14이다.

오답 구분
8 = 부모 필드 3 + 부모 메서드 5
18 = 자식 필드 7 + 자식 메서드 11
둘 중 한 타입으로 모든 항을 계산하면 틀린다. 필드는 선언 타입, 재정의한 인스턴스 메서드는 실제 객체 타입을 확인한다.

풀이 보강
B 객체 안에는 부모 A가 선언한 n과 자식 B가 선언한 n이 별도 필드로 존재한다. p.n을 고를 때는 선언 타입 A를 보고, p.calc()는 실제 객체 B의 재정의를 본다. 필드도 메서드처럼 동적으로 선택된다고 계산하면 7+11=18이라는 오답이 된다. 숫자를 더하기 전에 각 항이 어느 클래스의 선언을 쓰는지 표시한다.`},{id:"2024-3-02",session:"연습 3회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"고정 기지국 없이 이동 단말끼리 직접 연결해 스스로 구성하는 네트워크를 고르시오.",choices:["애드혹(Ad hoc) 네트워크","SAN","VLAN","인프라스트럭처(Infrastructure) 네트워크"],blanks:[{answer:"애드혹(Ad hoc) 네트워크"}],explanation:`정답
애드혹(Ad hoc) 네트워크

정답 근거
애드혹 네트워크는 고정 기지국이나 기존 기반 시설 없이 단말들이 필요에 따라 직접 구성하는 네트워크이다.

판별 단서
중앙 액세스 포인트 없이 연결을 만들고, 상황에 따라 단말이 다른 단말의 데이터를 중계할 수도 있다. 임시 현장 통신이나 재난·긴급 통신과 연결해 이해할 수 있다.

오답 구분
• 인프라스트럭처: 액세스 포인트 같은 기반 시설을 이용한다.
• VLAN: 하나의 물리 네트워크를 논리적으로 분리한다.
• SAN: 서버와 저장장치 등을 연결하는 저장장치용 네트워크이다.

풀이 보강
중앙 액세스 포인트가 없다는 것이 인터넷 연결 여부나 암호화 유무를 뜻하지는 않는다. 단말들이 직접 연결을 형성하며 필요에 따라 여러 홉으로 전달할 수도 있다. 이동성이 강조되는 MANET은 모바일 애드혹 네트워크다. VLAN은 기존 LAN의 논리 구분이므로 물리 인프라 없이 임시로 자가 구성한다는 단서와 다르다.`},{id:"2024-3-03",session:"연습 3회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`class Main {
    public static void main(String[] args) {
        String a="go", b=new String("go");
        System.out.print(a.equals(b) + " " + (a==b));
    }
}`,language:"java",choices:["false false","true false","true true","false true"],blanks:[{answer:"true false"}],explanation:`정답
true false

정답 근거
두 비교의 대상이 다르므로 계산 순서를 분리한다. String.equals()는 내용, ==는 객체 참조를 비교한다.

① a.equals(b): 두 문자열의 내용이 모두 go이므로 true이다.
② a==b: b는 new String("go")로 생성한 별도 객체이므로 false이다.
③ 코드의 출력 순서는 equals 결과가 먼저이므로 true false이다.

주의: ==를 먼저 출력했던 다른 문제와 순서를 혼동하지 않는다. 결과를 외우지 말고 출력 식의 왼쪽부터 각 비교를 계산한다.

풀이 보강
리터럴 "go"의 참조와 new String("go")로 만든 참조는 서로 다르지만 내용은 같다. String.equals는 내용 비교를 구현하고 있으므로 true다. equals가 모든 Java 객체에서 항상 내용 비교라는 뜻은 아니며 배열 등에서는 별도 비교가 필요하다. 이 문항은 String에서 equals를 호출하고 있음을 확인한다.`},{id:"2024-3-04",session:"연습 3회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"클래스 사이의 is-a 관계를 나타내며, 실선 끝에 빈 삼각형 화살표를 사용하는 UML 관계를 고르시오.",choices:["의존(Dependency)","실체화(Realization)","합성(Composition)","일반화(Generalization)"],blanks:[{answer:"일반화(Generalization)"}],explanation:`정답
일반화(Generalization)

정답 근거
일반화는 자식 클래스가 부모 클래스의 한 종류인 is-a 관계, 즉 상속을 나타낸다.

표기 읽기
실선 끝의 빈 삼각형은 부모 방향을 가리킨다. 예를 들어 버스 → 자동차 관계에서는 자동차 쪽에 빈 삼각형을 둔다.

오답 구분
• 실체화: 점선 + 빈 삼각형
• 의존: 점선 + 일반 화살표
• 합성: 전체 쪽의 채운 마름모
삼각형인지 마름모인지, 실선인지 점선인지를 함께 확인해야 한다.

풀이 보강
표기 판별은 선의 종류와 끝 장식을 함께 본다. 일반화의 빈 삼각형은 일반적인 부모 쪽을 가리키고, 실체화는 같은 빈 삼각형이라도 점선이다. 합성의 채운 마름모는 전체 쪽에 놓인다. 의존은 다른 요소의 변경이 이용하는 쪽에 영향을 줄 수 있는 사용 관계이므로 실선 연관과 구별한다.`},{id:"2024-3-05",session:"연습 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"employee(dept, score)에서 평균 점수가 80 이상인 부서의 dept만 조회하는 SQL을 고르시오.",language:"sql",choices:["SELECT dept FROM employee WHERE score >= 80 GROUP BY dept;","SELECT dept FROM employee GROUP BY dept HAVING AVG(score) >= 80;","SELECT dept FROM employee GROUP BY dept HAVING SUM(score) >= 80;","SELECT dept FROM employee GROUP BY dept HAVING AVG(score) > 80;"],blanks:[{answer:"SELECT dept FROM employee GROUP BY dept HAVING AVG(score) >= 80;"}],explanation:`정답
SELECT dept FROM employee GROUP BY dept HAVING AVG(score) >= 80;

정답 근거
문제의 조건은 직원 개인의 점수가 아니라 부서 전체의 평균이다. 그룹을 만든 뒤 평균으로 걸러야 한다.

처리 순서
① GROUP BY dept: 같은 부서의 직원들을 묶는다.
② AVG(score): 각 부서의 평균을 계산한다.
③ HAVING AVG(score) >= 80: 평균이 80 이상인 부서를 남긴다.
④ SELECT dept: 해당 부서명만 조회한다.

오답 구분: 점수가 70·90인 부서는 평균 80으로 포함된다. WHERE score>=80을 먼저 적용하면 70인 직원을 빼고 평균을 계산하게 된다. SUM은 합계이며, >80은 정확히 80인 부서를 제외한다.

풀이 보강
평균 80인 부서와 80을 조금 넘는 부서를 둘 다 준비하면 >=와 >의 차이를 확인할 수 있다. NULL 점수는 AVG의 분모에서도 제외되며 모든 점수가 NULL인 그룹의 평균은 NULL이다. 이 문제는 단순히 높은 점수 직원을 찾는 것이 아니므로 그룹을 만든 뒤 그룹 수준의 조건을 적용해야 한다.`},{id:"2024-3-06",session:"연습 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"유일성은 만족하지만 식별에 불필요한 속성이 추가되어 최소성은 만족하지 않는 키를 고르시오.",choices:["기본키(Primary Key)","슈퍼키(Super Key)","후보키(Candidate Key)","대체키(Alternate Key)"],blanks:[{answer:"슈퍼키(Super Key)"}],explanation:`정답
슈퍼키(Super Key)

정답 근거
유일성은 각 행을 구별할 수 있다는 뜻이고, 최소성은 구별에 불필요한 속성이 하나도 없다는 뜻이다.

예시
학번만으로 학생을 구별할 수 있다면 {학번, 이름}도 유일하지만 이름은 불필요하다. 따라서 이 집합은 슈퍼키이지만 후보키는 아니다.

키 구분
• 슈퍼키: 유일성 만족, 최소성은 필수 아님
• 후보키: 유일성과 최소성 모두 만족
• 기본키: 후보키 중 대표로 선택한 키
• 대체키: 기본키로 선택되지 않은 후보키
슈퍼키가 항상 최소성을 위반하는 것은 아니라는 점도 주의한다.

풀이 보강
최소성은 속성 수가 다른 모든 키보다 가장 적다는 의미가 아니라, 그 키에서 어떤 속성도 빼면 유일성이 깨진다는 뜻이다. 예를 들어 학번과 이메일은 각각 후보키가 될 수 있고 둘 중 선택하지 않은 쪽은 대체키다. 두 속성으로 된 복합키도 불필요한 속성이 없다면 후보키가 될 수 있다.`},{id:"2024-3-07",session:"연습 3회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 코드를 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`def score(x):
    if type(x) is int: return x * 2
    return len(x)
print(score(2) + score("abc") + score([4, 5]))`,language:"python",choices:["8","7","9","10"],blanks:[{answer:"9"}],explanation:`정답
9

정답 근거
score는 입력이 정확히 int이면 두 배를 반환하고, 아니면 len(x)를 반환한다. 세 호출을 각각 계산한다.

① score(2): 정수이므로 2*2=4
② score("abc"): 문자열이므로 길이 3
③ score([4, 5]): 리스트이므로 원소 수 2
④ 4+3+2=9를 출력한다.

주의: 리스트 [4, 5]의 값을 합쳐 9를 반환하는 것이 아니다. len은 문자열의 문자 수 또는 컨테이너의 원소 수를 센다.

풀이 보강
type(x) is int는 정확히 int 타입인지를 검사한다. 문자열 "abc"를 숫자로 변환하는 코드도, 리스트 원소를 합치는 코드도 없다. bool은 int의 하위 타입이지만 type(True) is int는 거짓이라는 점에서 isinstance와도 차이가 있다. 문제의 세 입력은 정수·문자열·리스트라 각각 4,3,2라는 반환값을 가진다.`},{id:"2024-3-08",session:"연습 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"주문 테이블에서 기본키인 주문번호를 서로 다른 두 행이 같은 값으로 가지고 있다면 어떤 무결성 규칙을 위반한 것인지 고르시오.",choices:["사용자 정의 무결성","도메인 무결성","개체 무결성","참조 무결성"],blanks:[{answer:"개체 무결성"}],explanation:`정답
개체 무결성

정답 근거
기본키인 주문번호는 주문 한 행을 유일하게 식별해야 한다. 서로 다른 두 행의 주문번호가 같으면 개체 무결성 위반이다.

판단 순서
① 문제가 지목한 속성이 기본키인지 확인한다.
② 기본키의 중복 또는 NULL이 있으면 개체 무결성을 적용한다.
여기서는 중복 때문에 유일성이 깨졌다.

오답 구분: 참조 무결성은 외래키가 참조하는 행의 존재 여부와 관련된다. 도메인 무결성은 속성의 형식·범위, 사용자 정의 무결성은 별도의 업무 규칙과 관련된다.

풀이 보강
복합 기본키라면 조합 전체가 유일해야 하고 구성 열 각각은 NULL일 수 없다. 예를 들어 (주문번호, 상품번호)에서 같은 주문번호가 여러 행에 나타나는 것 자체는 허용되지만 동일한 쌍이 중복되면 위반이다. 단일 열 기본키의 중복 금지와 복합키 각 열의 개별 중복 금지를 혼동하지 않는다.`},{id:"2024-3-09",session:"연습 3회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`class Main {
    public static void main(String[] args) {
        int x=3;
        try {
            throw new IllegalArgumentException();
        } catch (IllegalArgumentException e) {
            x *= 4;
        } finally { x += 5; }
        System.out.print(x);
    }
}`,language:"java",choices:["3","8","17","12"],blanks:[{answer:"17"}],explanation:`정답
17

정답 근거
예외가 발생하면 일치하는 catch로 이동하고, 처리 후 finally도 실행된다.

x의 변화
① 초기값: 3
② try에서 IllegalArgumentException 발생
③ 일치하는 catch에서 x*=4 → 12
④ finally에서 x+=5 → 17
⑤ try/catch/finally 밖의 출력문에서 17 출력

오답 구분: 12는 catch 직후의 중간값이고 8은 catch를 건너뛰고 finally만 적용한 값이다. 이 코드에서는 catch와 finally가 모두 실행된다.

풀이 보강
throw 뒤에는 try의 정상 경로로 진행하지 않고 타입이 맞는 catch로 곧바로 이동한다. finally가 끝난 뒤 예외가 처리된 상태이므로 마지막 print까지 도달한다. 최종 값을 출력하는 문장이 finally 내부가 아니라 전체 구문 뒤에 있다는 위치도 확인한다. catch와 finally의 연산 순서를 바꾸면 다른 결과가 된다.`},{id:"2024-3-10",session:"연습 3회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"참조한 페이지가 메모리에 없어 보조기억장치에서 가져와야 하는 현상을 고르시오.",choices:["페이지 부재(Page Fault)","내부 단편화(Internal Fragmentation)","스래싱(Thrashing)","페이지 적중(Page Hit)"],blanks:[{answer:"페이지 부재(Page Fault)"}],explanation:`정답
페이지 부재(Page Fault)

정답 근거
페이지 부재는 참조한 가상 페이지가 현재 물리 메모리에 없는 상황이다. 페이지 번호가 유효하더라도 아직 적재되지 않았다면 발생할 수 있다.

처리 흐름
① 메모리에 해당 페이지가 없음을 확인한다.
② 운영체제가 필요하면 다른 페이지를 교체하고 요구 페이지를 불러온다.
③ 페이지 테이블을 갱신하고 중단된 명령을 다시 진행한다.

오답 구분
• 페이지 적중: 필요한 페이지가 이미 메모리에 있음
• 스래싱: 페이지 교체가 과도해 실제 작업을 거의 못 함
• 내부 단편화: 할당 영역 안에 쓰지 않는 공간이 남음

풀이 보강
페이지 부재가 한 번 났다고 바로 스래싱이 되는 것은 아니다. 처음 접근하는 페이지를 적재하는 정상 과정에서도 페이지 부재는 발생한다. 이용 가능한 빈 프레임이 있으면 교체 없이 적재할 수 있고, 없을 때에만 교체 정책으로 희생 페이지를 고른다. 따라서 페이지 부재와 페이지 교체 횟수는 항상 같지는 않다.`},{id:"2024-3-11",session:"연습 3회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`#include <stdio.h>
struct Pair { int x, y; };
int main(void) {
    struct Pair p = {7, 8};
    struct Pair *ptr = &p;
    printf("%d", ptr->x + ptr->y);
}`,language:"c",choices:["7","15","56","8"],blanks:[{answer:"15"}],explanation:`정답
15

정답 근거
구조체 포인터의 멤버는 ->로 접근한다. ptr->x는 (*ptr).x와 같은 의미이다.

값 추적
① p는 x=7, y=8인 구조체이다.
② ptr=&p이므로 ptr은 p를 가리킨다.
③ ptr->x는 7, ptr->y는 8이다.
④ 덧셈 결과 7+8=15를 출력한다.

오답 구분: 7 또는 8은 멤버 하나만 읽은 값이고 56은 두 멤버를 곱한 값이다. 이 코드의 연산자는 +이다.

풀이 보강
p.x처럼 구조체 변수에 점으로 접근하는 방식과 ptr->x처럼 포인터에 화살표로 접근하는 방식을 구별한다. ptr은 복사된 별도 구조체가 아니라 원래 p의 주소를 저장하므로 ptr로 읽는 멤버 값은 p의 값이다. *(ptr->x)처럼 정수 멤버를 다시 역참조하는 식은 이 코드의 의미가 아니다.`},{id:"2024-3-12",session:"연습 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"테이블 t에 다음 세 행이 있을 때, SQL 결과의 COUNT(*)와 COUNT(a) 값을 각각 고르시오.",blocks:[{type:"table",caption:"<t>",headers:["a"],rows:[["1"],["NULL"],["3"]]}],codeSnippet:"SELECT COUNT(*), COUNT(a) FROM t;",language:"sql",choices:["1","2","3","0","4"],blanks:[{label:"COUNT(*)",answer:"3"},{label:"COUNT(a)",answer:"2"}],explanation:`정답
COUNT(*): 3
COUNT(a): 2

정답 근거
COUNT(*)는 행 자체를 세고, COUNT(열)은 그 열이 NULL이 아닌 행만 센다.

세 행에 적용
• a=1: COUNT(*)와 COUNT(a)에 모두 포함
• a=NULL: COUNT(*)에만 포함
• a=3: 두 집계에 모두 포함
따라서 COUNT(*)=3, COUNT(a)=2이다.

주의: COUNT(a)는 a의 값을 더하는 연산도, 중복을 자동 제거하는 연산도 아니다. 서로 다른 값의 수를 세려면 COUNT(DISTINCT a)처럼 명시해야 한다.

풀이 보강
여기에 a=1인 행을 하나 더 넣는다고 가정하면 COUNT(*)=4, COUNT(a)=3, COUNT(DISTINCT a)=2가 된다. 이 비교로 행 개수·NULL 제외·중복 제거가 서로 다른 동작임을 확인할 수 있다. 현재 표의 NULL을 숫자 0으로 바꾸면 COUNT(a)에도 포함되므로 NULL과 0을 같은 빈 값으로 취급하지 않는다.`},{id:"2024-3-13",session:"연습 3회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"객체 생성 과정을 캡슐화하고 구체적으로 어떤 클래스의 객체를 만들지 하위 클래스에서 정하게 하는 생성 패턴을 고르시오.",choices:["빌더(Builder) 패턴","싱글턴(Singleton) 패턴","프로토타입(Prototype) 패턴","팩터리 메서드(Factory Method) 패턴"],blanks:[{answer:"팩터리 메서드(Factory Method) 패턴"}],explanation:`정답
팩터리 메서드(Factory Method) 패턴

정답 근거
팩터리 메서드는 생성 메서드의 인터페이스를 두고 하위 클래스가 실제로 만들 객체의 타입을 정하도록 하는 생성 패턴이다.

문제의 단서
«구체적인 생성 클래스를 하위 클래스에서 결정»한다는 부분이 중요하다. 호출자는 생성 과정의 세부 클래스에 덜 의존할 수 있다.

오답 구분
• 싱글턴: 인스턴스 하나를 유지·공유
• 빌더: 복잡한 객체를 단계적으로 조립
• 프로토타입: 기존 객체를 복제해 생성
추상 팩토리는 관련된 여러 제품군의 생성 인터페이스를 제공한다는 점에서 구별된다.

풀이 보강
생성자의 이름을 숨겼다는 사실만으로 모든 생성 코드를 팩터리 메서드 패턴이라고 부르지는 않는다. 이 문항의 핵심은 생성 동작을 하위 클래스가 재정의하여 실제 제품 타입을 결정한다는 점이다. 단순 정적 생성 함수와 GoF의 팩터리 메서드를 구별하고, 빌더의 단계적 조립과 프로토타입의 복제도 별도로 기억한다.`},{id:"2024-3-14",session:"연습 3회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`#include <stdio.h>
int main(void) {
    int a[] = {4, 10, 17};
    int *p = a;
    ++p;
    printf("%d", *p);
}`,language:"c",choices:["4","10","17","5"],blanks:[{answer:"10"}],explanation:`정답
10

정답 근거
포인터에 1을 더하면 가리키는 자료형의 원소 한 개만큼 이동한다. int 포인터를 증가시키는 것은 정수 값 자체를 증가시키는 것과 다르다.

실행 순서
① p=a로 p는 a[0]의 값 4가 있는 위치를 가리킨다.
② ++p로 다음 int 원소인 a[1] 위치로 이동한다.
③ *p는 a[1]의 값 10을 읽으므로 10이 출력된다.

주의: ++p와 ++(*p)를 구분한다. 앞의 것은 포인터 이동이고 뒤의 것은 포인터가 가리키는 값의 증가이다.

풀이 보강
++p는 p 자체를 다음 원소로 옮기지만 *p는 그 주소의 값을 읽을 뿐이다. 배열의 내용 {4,10,17}은 바뀌지 않는다. 만약 (*p)++였다면 첫 원소가 5로 바뀌고 p는 그대로였을 것이다. 이 문제는 포인터 증가 뒤에 역참조하므로 주소와 저장값을 두 칸으로 나누어 적으면 구별하기 쉽다.`},{id:"2024-3-15",session:"연습 3회",subjectId:5,subjectName:"정보 보안",type:"text",question:"임의 길이의 입력을 고정 길이의 다이제스트로 바꾸어 무결성 검증 등에 사용하는 함수를 고르시오.",choices:["공개키 암호화 함수","암호학적 해시 함수","키 교환 함수","대칭키 암호화 함수"],blanks:[{answer:"암호학적 해시 함수"}],explanation:`정답
암호학적 해시 함수

정답 근거
암호학적 해시 함수는 길이가 다양한 입력을 고정 길이 다이제스트로 바꾼다. 입력의 변경 여부를 확인하는 무결성 검증 등에 사용한다.

예시
SHA-256은 입력 파일 크기와 관계없이 256비트 해시값을 만든다. 원본과 받은 파일의 해시를 비교해 변조·손상 여부를 확인할 수 있다.

오답 구분: 대칭키·공개키 암호화는 복호화를 전제로 데이터를 암호문으로 바꾼다. 해시는 원문 복원을 어렵게 설계한 일방향 변환이다. 입력 공간보다 출력 공간이 작으므로 충돌 가능성이 완전히 사라지는 것은 아니다.

풀이 보강
입력이 조금만 달라져도 해시값이 크게 달라지는 성질을 이용해 변경 여부를 확인한다. 다만 해시값이 같다고 원문이 반드시 같은 것은 아니며, 안전한 비교에는 신뢰할 수 있는 기준 해시가 필요하다. 솔트는 해시의 입력에 더하는 값이지 해시 함수 자체가 아니다. 비밀번호 저장에는 일반 해시만 반복 없이 쓰기보다 전용 비밀번호 해싱 방식을 사용한다.`},{id:"2024-3-16",session:"연습 3회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 코드를 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`nums = [1, 2, 3, 4]
nums.reverse()
print(nums)`,language:"python",choices:["[1, 2, 3, 4]","None","[2, 1, 4, 3]","[4, 3, 2, 1]"],blanks:[{answer:"[4, 3, 2, 1]"}],explanation:`정답
[4, 3, 2, 1]

정답 근거
list.reverse()는 새 리스트를 반환하는 대신 원래 리스트의 순서를 제자리에서 뒤집는다.

실행 순서
① nums=[1, 2, 3, 4]
② nums.reverse() 실행 후 nums=[4, 3, 2, 1]
③ print(nums)는 바뀐 리스트를 출력하므로 [4, 3, 2, 1]이다.

오답 구분: reverse() 자체의 반환값은 None이다. print(nums.reverse())였다면 None을 출력하지만, 이 코드는 reverse() 실행 후 별도로 nums를 출력한다.

풀이 보강
제자리 변경과 반환값을 구별하면 reverse의 결과를 변수에 잘못 대입하지 않을 수 있다. copy=nums[::-1]은 역순의 새 리스트를 만들고, nums.reverse()는 기존 리스트의 순서를 바꾸며 반환값은 None이다. 이 코드에서는 print가 반환값을 받지 않고 변경된 nums를 다시 읽으므로 실제 리스트가 표시된다.`},{id:"2024-3-17",session:"연습 3회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"객체 사이에서 시간 순서에 따라 교환하는 메시지를 수직 생명선과 화살표로 표시하는 UML 다이어그램을 고르시오.",choices:["클래스(Class) 다이어그램","배치(Deployment) 다이어그램","유스케이스(Use Case) 다이어그램","시퀀스(Sequence) 다이어그램"],blanks:[{answer:"시퀀스(Sequence) 다이어그램"}],explanation:`정답
시퀀스(Sequence) 다이어그램

정답 근거
시퀀스 다이어그램은 객체 사이의 메시지 교환을 시간 순서대로 나타내는 UML 다이어그램이다.

읽는 방법
객체마다 세로 생명선이 있고, 생명선 사이의 화살표는 메시지 전달을 뜻한다. 일반적으로 위에서 아래로 내려가며 호출과 응답의 순서를 읽는다.

오답 구분
• 클래스: 클래스·속성·메서드와 정적 관계
• 유스케이스: 사용자와 시스템 기능의 관계
• 배치: 실행 노드와 소프트웨어의 배치
«시간 순서·생명선·메시지» 세 단서가 시퀀스를 가리킨다.

풀이 보강
같은 객체들의 상호작용을 그려도 시간 순서를 강조하면 시퀀스 다이어그램이고 객체 연결을 강조하면 커뮤니케이션 다이어그램이다. 시퀀스에서 생명선의 가로 위치가 시간 순서를 나타내는 것은 아니다. 메시지 화살표를 위에서 아래로 읽으며 호출이 중첩되는 구간과 반환을 따라가면 실행 흐름을 이해할 수 있다.`},{id:"2024-3-18",session:"연습 3회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"공중망을 통해 사설 네트워크처럼 안전하게 연결하는 기술의 영문 약어를 고르시오.",choices:["VPN","VLAN","NAT","DNS"],blanks:[{answer:"VPN"}],explanation:`정답
VPN

정답 근거
VPN은 Virtual Private Network의 약자로, 공중망 위에서 사설망과 같은 논리적 연결을 제공한다.

동작 이해
터널링으로 연결 구간을 구성하고 보안 VPN에서는 암호화·인증 등을 적용한다. IPsec VPN과 SSL/TLS VPN은 구현 방식의 예이다.

오답 구분
• VLAN: LAN을 논리적으로 분리
• NAT: IP 주소 변환
• DNS: 이름과 IP 주소 등의 대응 정보 제공
문제는 이름 변환이나 주소 변환이 아니라 공중망을 통한 사설 연결을 묻는다.

풀이 보강
VPN의 핵심은 공용 기반망 위의 논리적 사설 연결이다. 모든 VPN 기술이 정의상 암호화를 반드시 제공하는 것은 아니지만 인터넷 보안 VPN은 일반적으로 인증·암호화를 사용한다. VLAN은 로컬 네트워크의 논리적 분할, NAT는 주소 변환이므로 그 자체만으로 원격 구간의 보안 터널을 만드는 기술은 아니다.`},{id:"2024-3-19",session:"연습 3회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`#include <stdio.h>
int f(void) { static int x=0; x+=2; return x; }
int main(void) {
    int a = f();
    int b = f();
    printf("%d", a+b);
}`,language:"c",choices:["2","4","6","8"],blanks:[{answer:"6"}],explanation:`정답
6

정답 근거
static 지역 변수는 함수가 끝나도 값을 유지한다. 선언문의 초기화는 한 번만 수행된다.

호출별 추적
① 첫 f(): x가 0에서 2가 되고 2를 반환 → a=2
② 둘째 f(): 이전 값 2에서 4가 되고 4를 반환 → b=4
③ a+b=2+4=6을 출력한다.

오답 구분: 일반 지역 변수처럼 매번 0으로 초기화된다고 생각하면 2+2=4로 잘못 계산한다. 두 호출에서 같은 static 변수의 값이 누적됨을 표시하며 푼다.

풀이 보강
static 변수 x는 범위는 함수 내부지만 수명은 프로그램 실행 동안 유지된다. a,b는 각 호출이 돌려준 값의 복사본이라 둘째 호출 뒤 a가 4로 다시 바뀌는 것은 아니다. 처음의 a=2와 나중의 b=4를 더하는 것이므로 8도 아니다. 변수의 수명과 반환값을 저장한 변수의 값을 따로 추적한다.`},{id:"2024-3-20",session:"연습 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"student(name, score)에서 점수가 높은 순으로, 동점이면 이름의 오름차순으로 이름과 점수를 조회하는 SQL을 고르시오.",language:"sql",choices:["SELECT name, score FROM student ORDER BY score ASC, name ASC;","SELECT name, score FROM student ORDER BY score DESC, name ASC;","SELECT name, score FROM student ORDER BY name ASC, score DESC;","SELECT name, score FROM student ORDER BY score DESC, name DESC;"],blanks:[{answer:"SELECT name, score FROM student ORDER BY score DESC, name ASC;"}],explanation:`정답
SELECT name, score FROM student ORDER BY score DESC, name ASC;

정답 근거
ORDER BY의 정렬 기준은 왼쪽부터 적용된다. 먼저 점수 내림차순, 점수가 같을 때만 이름 오름차순을 적용해야 한다.

구문 해석
① score DESC: 높은 점수부터 배치한다.
② name ASC: 동점인 행들 안에서 이름을 오름차순으로 배치한다.
예를 들어 Alice=90, Bob=90, Zoe=100이면 Zoe → Alice → Bob 순이다.

오답 구분: name을 앞에 쓰면 이름이 최우선 정렬 기준이 된다. score ASC는 낮은 점수부터, name DESC는 동점자를 이름 역순으로 정렬한다.

풀이 보강
복수 정렬 기준에서는 두 번째 기준이 첫 번째의 동률인 범위 안에서만 적용된다. 예를 들어 이름이 더 앞서는 저득점 학생을 고득점 학생보다 위에 두지 않는다. ASC를 생략하면 기본 오름차순이지만 DESC는 열마다 명시해야 한다. ORDER BY score, name DESC처럼 쓰면 score까지 내림차순이 되는 것은 아니다.`}],G1=Object.freeze(Object.defineProperty({__proto__:null,default:V1},Symbol.toStringTag,{value:"Module"})),J1=[{id:"2024-2-01",session:"연습 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`class Main {
    public static void main(String[] args) {
        int[] a = {2, 5}, b = {2, 5};
        int[] c = a;
        System.out.print((a == b) + " " + (a == c));
    }
}`,language:"java",choices:["true false","false false","true true","false true"],blanks:[{answer:"false true"}],explanation:`정답
false true

정답 근거
배열에 대한 ==는 원소가 같은지가 아니라 같은 배열 객체를 가리키는지를 비교한다.

참조 관계
① a와 b는 각각 {2, 5}로 생성한 별도 배열이다. 내용이 같아도 a == b는 false이다.
② c = a는 배열을 복사하지 않고 a의 참조를 대입한다. 따라서 a == c는 true이다.
③ 공백을 사이에 두고 false true를 출력한다.

주의: 같은 배열인지 확인하는 비교와 배열의 내용을 비교하는 작업은 다르다. 참조 대입만으로 새 배열이 만들어지지 않는다.

풀이 보강
a,b는 별도 배열이고 c는 a의 별칭이다. c[0]을 바꾸면 a[0]도 같은 값으로 보이지만 b[0]은 바뀌지 않는다. 배열 원소의 내용 비교에는 Arrays.equals 같은 함수를 쓸 수 있다. 배열에서 상속된 equals도 기본적으로 참조를 비교하므로 문자열의 equals 규칙을 그대로 적용하지 않는다.`},{id:"2024-2-02",session:"연습 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"조회 속도를 높이기 위해 정규화된 테이블을 합치거나 중복 속성을 추가하는 기법을 고르시오.",choices:["정규화(Normalization)","인덱싱(Indexing)","반정규화(Denormalization)","파티셔닝(Partitioning)"],blanks:[{answer:"반정규화(Denormalization)"}],explanation:`정답
반정규화(Denormalization)

정답 근거
반정규화는 성능 등을 위해 정규화된 구조를 일부 완화하는 설계이다. 테이블 병합이나 중복 속성 추가가 대표적인 단서이다.

예시
주문 화면에서 고객 이름을 자주 읽을 때 매번 고객 테이블을 조인하는 대신 주문에 이름을 중복 저장할 수 있다. 조회 비용을 줄일 수 있지만 이름 변경 시 여러 곳을 함께 수정해야 한다.

오답 구분
• 정규화: 중복과 갱신 이상을 줄이도록 종속 관계를 정리한다.
• 인덱싱: 검색을 돕는 별도 접근 구조를 만든다.
• 파티셔닝: 큰 테이블을 기준에 따라 나누어 관리한다.

풀이 보강
반정규화 후에는 같은 사실을 여러 곳에 저장할 수 있어 갱신 이상이 다시 생길 수 있다. 따라서 조회 비용 감소와 수정 시 정합성 유지 비용을 함께 고려한다. 조인을 없앴다는 이유만으로 무조건 성능이 좋아지는 것은 아니며 실제 접근 패턴과 병목이 근거가 되어야 한다. 인덱스를 만드는 작업 자체와도 구별한다.`},{id:"2024-2-03",session:"연습 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"users(id, grade)에 id=9, grade='B'를 삽입하는 SQL과, id=9인 행의 grade를 'A'로 변경하는 SQL을 각각 고르시오.",language:"sql",choices:["UPDATE users SET grade='A' WHERE id=9;","INSERT INTO users(id, grade) VALUES (9, 'A');","UPDATE users SET grade='B' WHERE id=9;","UPDATE users SET grade='A';","DELETE FROM users WHERE id=9;","INSERT INTO users(id, grade) VALUES (9, 'B');"],blanks:[{label:"① 삽입",answer:"INSERT INTO users(id, grade) VALUES (9, 'B');"},{label:"② 변경",answer:"UPDATE users SET grade='A' WHERE id=9;"}],explanation:`정답
① 삽입: INSERT INTO users(id, grade) VALUES (9, 'B');
② 변경: UPDATE users SET grade='A' WHERE id=9;

정답 근거
첫 작업은 새 행 삽입이고 두 번째는 기존 행 수정이므로 서로 다른 SQL 명령이 필요하다.

① 삽입
INSERT INTO users(id, grade) VALUES (9, 'B');
열 순서 id, grade에 맞춰 9와 B를 넣는다. 삽입 직후 상태는 (9, B)이다.

② 변경
UPDATE users SET grade='A' WHERE id=9;
id가 9인 행만 찾아 등급을 A로 바꾼다. 최종 상태는 (9, A)이다.

주의: 처음부터 A를 넣는 것은 첫 단계의 요구와 다르다. WHERE를 뺀 UPDATE는 다른 사용자의 등급까지 바꾸고, DELETE는 행을 삭제한다.

풀이 보강
INSERT와 UPDATE를 순서대로 실행한 뒤 id=9를 조회하면 등급 A가 나와야 한다. 두 번째 작업은 기존 id를 그대로 두고 grade만 수정하므로 다른 열을 다시 삽입할 필요가 없다. WHERE는 바꿀 행의 범위를 한정한다. 같은 id를 INSERT로 또 넣으면 기본키가 있는 경우 중복 오류가 될 수 있어 수정과 삽입을 구별한다.`},{id:"2024-2-04",session:"연습 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"호출 모듈이 플래그 값을 전달하여 피호출 모듈의 내부 실행 분기를 선택하는 결합도를 고르시오.",choices:["스탬프 결합도(Stamp Coupling)","제어 결합도(Control Coupling)","자료 결합도(Data Coupling)","공통 결합도(Common Coupling)"],blanks:[{answer:"제어 결합도(Control Coupling)"}],explanation:`정답
제어 결합도(Control Coupling)

정답 근거
단순 데이터가 아니라 «어떤 처리를 실행할지» 결정하는 플래그를 넘기므로 제어 결합도이다.

예시
호출자가 mode=1이면 저장, mode=2이면 삭제를 하도록 피호출 모듈에 값을 전달한다. 이 값은 계산 재료가 아니라 상대 모듈의 실행 흐름을 선택하는 정보이다.

오답 구분
• 자료 결합도: 필요한 단순 데이터 값 전달
• 스탬프 결합도: 배열·구조체 등 자료구조 전달
• 공통 결합도: 여러 모듈이 전역 데이터 공유
플래그라는 이름보다 실제로 제어에 사용되는지가 중요하다.

풀이 보강
호출자가 피호출자의 내부 처리 종류를 알아야 하므로 변경 영향이 커질 수 있다. 같은 정수 인수라도 수량·금액처럼 계산에 쓰면 자료 전달이고, 1이면 저장·2이면 삭제처럼 분기를 지시하면 제어 전달이다. 매개변수의 자료형보다 역할을 기준으로 결합도를 판단하고, 전역 변수 사용 여부도 따로 확인한다.`},{id:"2024-2-05",session:"연습 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`#include <stdio.h>
int main(void) {
    int a[2][3] = {{5,6,7},{7,8,9}};
    int *ptr[2] = {a[0], a[1]};
    printf("%d", ptr[1][2] + ptr[0][1]);
}`,language:"c",choices:["13","15","14","16"],blanks:[{answer:"15"}],explanation:`정답
15

정답 근거
int *ptr[2]는 정수 포인터 두 개를 담는 배열이다. 각 포인터가 2차원 배열의 한 행을 가리킨다.

주소를 행·열로 바꾸기
① ptr[0] = a[0] → 첫 행 {5, 6, 7}
② ptr[1] = a[1] → 둘째 행 {7, 8, 9}
③ ptr[1][2] = 9이고 ptr[0][1] = 6이다.
④ 출력은 9 + 6 = 15이다.

주의: 인덱스 2는 세 번째 원소이다. ptr[1]을 첫 행이라고 해석하거나 포인터 값 자체를 더하지 않는다.

풀이 보강
ptr은 포인터 두 개를 저장하는 배열이며 int 전체가 연속으로 담긴 2차원 배열과 자료형은 다르다. 다만 각 원소가 a의 한 행을 가리켜 ptr[행][열] 형태로 같은 값을 읽는다. ptr[1]+2는 둘째 행의 세 번째 정수 위치다. 포인터 배열을 행 포인터들의 표로 그리면 9와 6을 쉽게 찾을 수 있다.`},{id:"2024-2-06",session:"연습 2회",subjectId:5,subjectName:"정보 보안",type:"text",question:"128비트 블록을 사용하고 128·192·256비트 키를 지원하는 대표적인 대칭키 블록 암호 표준을 고르시오.",choices:["DES","AES","RSA","SHA-256"],blanks:[{answer:"AES"}],explanation:`정답
AES

정답 근거
AES는 블록 크기가 128비트로 고정되고, 키 길이는 128·192·256비트 중에서 사용하는 대칭키 블록 암호이다.

판별 순서
① 암호화·복호화에 같은 비밀키를 쓰는 대칭키 방식인가?
② 한 블록이 128비트인가?
③ 세 가지 키 길이를 지원하는가?
세 조건을 함께 만족하는 보기가 AES이다.

오답 구분
• DES: 블록 64비트, 유효 키 56비트
• RSA: 공개키·개인키를 쓰는 비대칭키 암호
• SHA-256: 암호화가 아니라 해시 함수
블록 길이와 키 길이를 서로 바꾸어 외우지 않는다.

풀이 보강
AES-256에서 256은 블록 크기가 아니라 키 길이다. 세 종류 모두 블록은 128비트이며 키 길이에 따라 라운드 수는 10·12·14로 달라진다. 대칭키 암호라 복호화가 가능한 반면 SHA-256은 256비트 다이제스트를 만드는 해시다. 이름에 같은 숫자가 있어도 역할과 길이의 의미를 구별한다.`},{id:"2024-2-07",session:"연습 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`#include <stdio.h>
int main(void) {
    int result = 0;
    for (int i=1; i<=3; i++) result += i*2;
    printf("%d", result);
}`,language:"c",choices:["6","10","14","12"],blanks:[{answer:"12"}],explanation:`정답
12

정답 근거
for문의 범위는 i=1부터 i<=3까지이다. result에는 i 자체가 아니라 i*2를 더한다.

반복 추적
초기 result=0
i=1: 0+2=2
i=2: 2+4=6
i=3: 6+6=12
i=4: 조건이 거짓이 되어 종료
따라서 12를 출력한다.

오답 구분: 6은 i만 더한 1+2+3의 값이기도 하고 두 번째 반복 직후의 값이기도 하다. 곱하기 2와 <= 조건을 함께 확인한다.

풀이 보강
조건 검사는 본문 진입 전에 이루어지고 증가는 본문 뒤에 이루어진다. 따라서 i=3인 반복도 포함되어 총 세 번 실행된다. 누적항은 2·4·6이고 등차수열 합으로도 2×(1+2+3)=12가 된다. 조건을 i<3으로 잘못 읽으면 마지막 항을 빠뜨려 6을 고를 수 있다.`},{id:"2024-2-08",session:"연습 2회",subjectId:8,subjectName:"Java",type:"text",question:"같은 클래스 안에서 메서드 이름은 같게 두고 매개변수의 개수 또는 자료형을 다르게 정의하는 것을 고르시오.",choices:["오버라이딩(Overriding)","캡슐화(Encapsulation)","오버로딩(Overloading)","추상화(Abstraction)"],blanks:[{answer:"오버로딩(Overloading)"}],explanation:`정답
오버로딩(Overloading)

정답 근거
오버로딩은 같은 이름의 메서드를 매개변수 목록이 다르게 정의하는 것이다.

예시
print(int x)와 print(String x)는 매개변수 타입이 다르므로 오버로딩할 수 있다. print(int x, int y)처럼 개수를 다르게 해도 된다.

오답 구분
• 오버라이딩: 자식 클래스가 상속받은 메서드를 같은 시그니처로 재정의한다.
• 캡슐화: 데이터와 기능을 묶고 접근을 제한한다.
• 추상화: 공통적이고 중요한 특성을 뽑아 표현한다.
반환형만 바꾸고 매개변수 목록이 같으면 오버로딩이 아니다.

풀이 보강
메서드 선택은 호출 인수의 개수·타입과 적용 가능한 변환을 보고 컴파일 시점에 결정한다. 변수 이름을 바꾸거나 반환형만 바꾸는 것으로는 다른 시그니처가 되지 않는다. 오버라이딩은 상속 관계에서 같은 시그니처의 동작을 바꾸며 실제 객체 타입이 관여하므로 두 개념의 결정 시점도 구분해야 한다.`},{id:"2024-2-09",session:"연습 2회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 코드를 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`s = "A-BB-C"
print(s.split("-")[1])`,language:"python",choices:["['A', 'BB', 'C']","C","BB","A"],blanks:[{answer:"BB"}],explanation:`정답
BB

정답 근거
split("-")은 하이픈을 구분자로 사용해 문자열을 나눈다. 결과는 문자열이 아니라 문자열들의 리스트이다.

순서대로 계산
① "A-BB-C".split("-") → ['A', 'BB', 'C']
② 인덱스 0은 A, 1은 BB, 2는 C이다.
③ [1]로 두 번째 원소를 꺼내므로 BB를 출력한다.

주의: 전체 리스트를 출력하는 것이 아니다. print는 꺼낸 문자열의 따옴표를 붙이지 않는다.

풀이 보강
구분자 - 자체는 결과 원소에 포함되지 않고 문자열 A, BB, C만 남는다. 인덱스 [1]은 결과 리스트에서 적용되며 원래 문자열 s의 두 번째 문자인 -를 읽는 것이 아니다. 문자열 메서드 호출 → 리스트 생성 → 인덱싱 → 출력이라는 평가 순서를 나누어 확인한다.`},{id:"2024-2-10",session:"연습 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"패킷을 보내기 전에 논리적 경로를 설정하고 패킷들을 같은 경로로 전달하는 패킷 교환 방식을 고르시오.",choices:["데이터그램(Datagram) 방식","메시지 교환(Message Switching) 방식","가상 회선(Virtual Circuit) 방식","회선 교환(Circuit Switching) 방식"],blanks:[{answer:"가상 회선(Virtual Circuit) 방식"}],explanation:`정답
가상 회선(Virtual Circuit) 방식

정답 근거
가상회선은 패킷을 보내기 전에 논리적인 연결 경로를 설정하는 패킷 교환 방식이다. 이후 패킷들은 설정한 경로를 따라간다.

문제의 단서
«패킷 교환»이면서 «미리 경로 설정»을 한다는 두 조건을 함께 읽어야 한다. 전용 물리 회선을 확보하는 회선 교환과는 구별된다.

오답 구분
• 데이터그램: 사전 연결 없이 각 패킷이 독립적으로 전달된다.
• 회선 교환: 통신에 사용할 전용 회선을 설정한다.
• 메시지 교환: 메시지 단위로 저장한 뒤 전달한다.

풀이 보강
가상회선은 연결 상태를 설정하고 같은 논리 경로를 쓰지만 물리 통신 회선을 독점한다는 뜻은 아니다. 데이터그램은 패킷마다 독립적으로 전달되어 경로와 도착 순서가 달라질 수 있다. 연결형 패킷 교환과 전용 자원을 확보하는 회선 교환을 따로 구분하면 «경로 설정»이라는 공통 표현에 속지 않는다.`},{id:"2024-2-11",session:"연습 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"최근 가장 오랫동안 사용되지 않은 페이지를 교체 대상으로 선택하는 알고리즘을 고르시오.",choices:["LRU(Least Recently Used)","OPT(Optimal)","FIFO(First In First Out)","LFU(Least Frequently Used)"],blanks:[{answer:"LRU(Least Recently Used)"}],explanation:`정답
LRU(Least Recently Used)

정답 근거
LRU는 Least Recently Used로, 마지막 참조 시점이 가장 오래된 페이지를 교체한다. 횟수가 아니라 «언제 마지막으로 썼는가»가 기준이다.

예시
A를 시각 1, B를 시각 4, C를 시각 7에 마지막으로 참조했다면 A가 교체 대상이다. A가 과거에 많이 사용됐더라도 가장 오래 쉬었으면 선택된다.

오답 구분
• FIFO: 가장 먼저 메모리에 들어온 페이지
• LFU: 참조 횟수가 가장 적은 페이지
• OPT: 앞으로 가장 오랫동안 쓰지 않을 페이지
최근 사용은 LRU, 사용 빈도는 LFU로 구별한다.

풀이 보강
참조열 A, B, A 다음에 새 C를 넣어야 하는 두 프레임 상황이라면 LRU는 최근에 쓰인 A를 남기고 B를 교체한다. FIFO는 적재 순서가 바뀌지 않아 A를 교체할 수 있다. 적중 때도 최근 사용 시점을 갱신해야 LRU를 올바르게 계산할 수 있고, 프레임의 나열 위치만 보고 가장 오래된 것을 판단하지 않는다.`},{id:"2024-2-12",session:"연습 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"customer(id, name)과 purchase(customer_id, amount)에서 구매 내역이 존재하는 고객의 이름과 구매액을 조회하는 SQL을 고르시오.",language:"sql",choices:["SELECT c.name, p.amount FROM customer c CROSS JOIN purchase p;","SELECT c.name, p.amount FROM customer c INNER JOIN purchase p ON c.id=p.customer_id;","SELECT c.name, p.amount FROM customer c LEFT JOIN purchase p ON c.id=p.customer_id;","SELECT c.name, p.amount FROM customer c INNER JOIN purchase p ON c.id<>p.customer_id;"],blanks:[{answer:"SELECT c.name, p.amount FROM customer c INNER JOIN purchase p ON c.id=p.customer_id;"}],explanation:`정답
SELECT c.name, p.amount FROM customer c INNER JOIN purchase p ON c.id=p.customer_id;

정답 근거
두 테이블을 고객 ID로 연결하되, 양쪽에 대응하는 행이 있는 경우만 원하므로 INNER JOIN이다.

처리 흐름
① customer를 c, purchase를 p라는 별칭으로 부른다.
② ON c.id=p.customer_id로 같은 고객의 구매를 연결한다.
③ c.name과 p.amount를 조회한다.
한 고객의 구매가 세 건이면 그 고객 이름이 세 행에 나타날 수 있다.

오답 구분
• LEFT JOIN: 구매가 없는 고객도 NULL 구매액과 함께 남긴다.
• CROSS JOIN: 고객과 구매의 모든 조합을 만든다.
• <> 조건: 같은 고객이 아닌 구매를 연결하므로 목적과 다르다.

풀이 보강
고객 A가 구매 두 건, 고객 B가 구매 없이 저장되어 있다면 INNER JOIN은 A의 두 행만 반환한다. 고객 한 명당 한 행이 되는 조회가 아니라 구매 한 건당 한 행이 될 수 있다. 구매 없는 고객까지 남기는 LEFT JOIN과 모든 조합을 만드는 CROSS JOIN의 결과 행 수를 예시로 비교하면 조인 목적이 분명해진다.`},{id:"2024-2-13",session:"연습 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"하나의 모듈이 명확하게 정의된 단일 기능만 수행할 때의 응집도를 고르시오.",choices:["시간적 응집도","순차적 응집도","우연적 응집도","기능적 응집도"],blanks:[{answer:"기능적 응집도"}],explanation:`정답
기능적 응집도

정답 근거
기능적 응집도는 모듈의 모든 요소가 명확한 하나의 기능을 수행하도록 모인 상태이다. 일반적으로 가장 높은 응집도이다.

예시
하나의 모듈이 주문 총액 계산만 책임지고, 내부 요소들이 모두 그 계산에 기여한다면 기능적 응집도로 볼 수 있다.

오답 구분
• 순차적: 앞 기능의 출력이 다음 기능의 입력이 된다.
• 시간적: 초기화처럼 같은 시점에 수행하는 작업을 모은다.
• 우연적: 뚜렷한 관련 없이 작업을 한데 모은다.
단순히 실행 순서가 있다는 이유만으로 기능적이라고 판단하지 않는다.

풀이 보강
한 모듈이 내부적으로 여러 문장을 실행해도 모두 단일 목적을 이루면 기능적 응집도가 될 수 있다. 문장 수가 하나라는 뜻이 아니다. 예를 들어 총액 계산에 필요한 수량 확인·가격 곱셈·합산은 같은 기능에 기여한다. 초기화 시각이 같다는 이유로 무관한 설정을 모았다면 시간적 응집도에 가깝다.`},{id:"2024-2-14",session:"연습 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"복잡한 하위 시스템에 통합된 단순 인터페이스를 제공하는 구조 패턴을 고르시오.",choices:["퍼사드(Facade) 패턴","브리지(Bridge) 패턴","어댑터(Adapter) 패턴","옵서버(Observer) 패턴"],blanks:[{answer:"퍼사드(Facade) 패턴"}],explanation:`정답
퍼사드(Facade) 패턴

정답 근거
퍼사드는 복잡한 하위 시스템 앞에 사용하기 쉬운 통합 창구를 제공하는 구조 패턴이다.

예시
결제·재고·배송 모듈을 각각 호출하는 대신 주문하기() 하나가 필요한 하위 호출을 묶어 제공한다. 클라이언트는 복잡한 내부 절차를 덜 알아도 된다.

오답 구분
• 어댑터: 기존 인터페이스를 원하는 형태로 변환한다.
• 브리지: 추상화와 구현을 분리해 각각 확장한다.
• 옵서버: 상태 변화가 생기면 구독자들에게 알린다.
«복잡한 시스템에 단순한 인터페이스»가 퍼사드의 단서이다.

풀이 보강
퍼사드는 하위 시스템에 대한 접근 경로를 단순화하며 하위 클래스의 인터페이스 자체를 반드시 변경하지 않는다. 호출자가 여러 단계의 순서를 몰라도 통합된 작업을 실행할 수 있는 것이 장점이다. 접근 권한을 통제하는 대리 객체인 프록시나 인터페이스 호환을 해결하는 어댑터와 목적을 기준으로 구별한다.`},{id:"2024-2-15",session:"연습 2회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`#include <stdio.h>
#include <string.h>
int main(void) {
    char s[] = "abc";
    printf("%zu", strlen(s));
}`,language:"c",choices:["4","2","0","3"],blanks:[{answer:"3"}],explanation:`정답
3

정답 근거
C 문자열은 마지막에 널 종료 문자 \\0을 가진다. strlen은 종료 문자 앞에 있는 문자의 개수를 센다.

메모리 구성
s[0]=a, s[1]=b, s[2]=c, s[3]=\\0
문자 세 개 뒤에서 문자열이 끝나므로 strlen(s)는 3을 반환한다.

오답 구분: 배열 자체의 크기 sizeof(s)는 종료 문자까지 포함해 4바이트이다. strlen과 sizeof가 무엇을 세는지 구별한다. printf의 %zu는 size_t 값을 출력하는 지정자이다.

풀이 보강
문자열 "abc"의 배열 초기화에는 컴파일러가 종료 문자 하나를 추가한다. strlen은 첫 널 문자를 만날 때까지 세는 함수이고 sizeof(s)는 이 범위에서 배열 전체 크기를 계산한다. 함수에 포인터로 전달된 매개변수에 sizeof를 적용할 때는 배열 크기를 얻지 못할 수 있으므로 두 연산을 같은 길이 함수로 취급하지 않는다.`},{id:"2024-2-16",session:"연습 2회",subjectId:5,subjectName:"정보 보안",type:"text",question:"네트워크 계층에서 AH와 ESP를 활용해 IP 패킷을 보호하는 기술을 고르시오.",choices:["IPSec","SSH","HTTPS","TLS"],blanks:[{answer:"IPSec"}],explanation:`정답
IPSec

정답 근거
IPsec은 네트워크 계층의 IP 패킷을 보호하는 보안 프로토콜 모음이다. AH·ESP가 함께 나오면 IPsec을 떠올린다.

구성 구분
• AH: 데이터 무결성·송신자 인증 등을 제공하며 암호화 자체는 제공하지 않는다.
• ESP: 암호화를 통한 기밀성 등을 제공한다.
IPsec은 VPN을 구현하는 데 활용된다.

오답 구분: TLS는 보안 통신에, SSH는 원격 접속 등에 사용된다. HTTPS는 HTTP에 TLS를 적용한 방식이다. 이들은 AH·ESP를 구성 요소로 사용하는 체계가 아니다.

풀이 보강
AH는 무결성·출처 인증 등을 담당하며 데이터 암호화 기능은 없다. ESP는 선택한 보안 설정에 따라 기밀성과 무결성·인증 등을 제공한다. 전송 모드는 원래 IP 패킷의 상위 계층 부분을, 터널 모드는 원래 IP 패킷 전체를 새 패킷 안에 넣어 보호한다. 두 모드 모두 IPsec 체계 안에서 구분하는 것이다.`},{id:"2024-2-17",session:"연습 2회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`class P { int n = 1; }
class Main {
    public static void main(String[] args) {
        P a = new P();
        P b = a;
        b.n = 11;
        System.out.print(a.n);
    }
}`,language:"java",choices:["12","2","11","1"],blanks:[{answer:"11"}],explanation:`정답
11

정답 근거
Java에서 객체 변수를 대입하면 객체 자체가 복사되는 것이 아니라 참조가 복사된다.

실행 순서
① new P()로 객체 하나를 만들고 a가 가리킨다. n은 1이다.
② P b=a로 b도 같은 객체를 가리킨다. 새 객체는 생기지 않는다.
③ b.n=11은 그 공유 객체의 필드를 바꾼다.
④ a.n을 읽어도 11이 나온다.

주의: a와 b가 변수 두 개라는 이유로 객체도 두 개라고 세면 안 된다. 실제 객체 생성 지점인 new의 횟수를 확인한다.

풀이 보강
공유 객체의 필드를 변경하는 것과 변수 b에 다른 객체를 대입하는 것은 다르다. b.n=11은 같은 객체를 수정하지만 b=new P()였다면 b만 새 객체를 가리킨다. 실제 코드에는 new P()가 한 번뿐이고 필드 대입이므로 a,b 모두에서 n=11이 보인다. 참조를 선으로 그려 두면 객체의 개수가 분명해진다.`},{id:"2024-2-18",session:"연습 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"웹 페이지 전송에 사용하는 응용 계층 프로토콜과 TLS로 보호하는 버전을 각각 고르시오.",choices:["SSH","HTTP","SMTP","HTTPS","FTP"],blanks:[{label:"① 기본 프로토콜",answer:"HTTP"},{label:"② TLS 적용 버전",answer:"HTTPS"}],explanation:`정답
① 기본 프로토콜: HTTP
② TLS 적용 버전: HTTPS

정답 근거
웹의 요청·응답에 사용하는 기본 프로토콜은 HTTP이고, 여기에 TLS 보안을 적용한 방식은 HTTPS이다.

각 빈칸
① HTTP: Hypertext Transfer Protocol
② HTTPS: HTTP 통신을 TLS로 보호한 방식
일반적인 기본 포트는 각각 80과 443이다.

오답 구분
• FTP: 파일 전송
• SMTP: 전자우편 전송
• SSH: 보안 원격 접속
HTTPS의 단서는 웹 통신과 TLS가 함께 제시된다는 점이다.

풀이 보강
HTTPS가 적용되면 전송 중인 HTTP 데이터의 기밀성·무결성과 서버 인증을 TLS로 제공할 수 있다. 그러나 웹사이트의 내용 자체가 항상 신뢰할 만하다는 뜻은 아니다. 포트 80·443은 일반적인 기본값이며 다른 포트 사용도 가능하다. 문항은 포트 번호보다 웹 전송과 TLS 적용 여부를 기준으로 답을 고른다.`},{id:"2024-2-19",session:"연습 2회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 코드를 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`arr = [4, 5, 6, 7, 8]
print(arr[::-2])`,language:"python",choices:["[7, 5]","[8, 6, 4]","[8, 7, 6, 5, 4]","[4, 6, 8]"],blanks:[{answer:"[8, 6, 4]"}],explanation:`정답
[8, 6, 4]

정답 근거
슬라이스 [시작:끝:간격]에서 간격이 -2이면 뒤에서 앞으로 두 칸씩 이동한다. 시작과 끝을 비워 역방향 전체 범위를 사용한다.

인덱스 추적
원본: [4, 5, 6, 7, 8]
인덱스: 0, 1, 2, 3, 4
선택 순서: 4 → 2 → 0
선택한 값: 8 → 6 → 4
따라서 [8, 6, 4]이다.

오답 구분: [4, 6, 8]은 [::2], 전체 역순은 [::-1]이다. [::-2]는 원본 리스트를 제자리에서 바꾸지 않고 새 리스트를 만든다.

풀이 보강
간격이 음수일 때 생략된 끝 경계는 맨 앞 원소까지 포함하도록 해석된다. 인덱스 -1,-3,-5가 실제로 4,2,0에 해당한다. 끝값에 0을 명시한 arr[:0:-2]라면 0번 원소는 제외되어 결과가 달라진다. 시작·끝 생략과 숫자 0 지정은 항상 같지는 않다.`},{id:"2024-2-20",session:"연습 2회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"입력값을 유효·무효 집합으로 나누고 각 집합의 대표값을 선정하는 블랙박스 테스트 기법을 고르시오.",choices:["결정 테이블(Decision Table) 테스트","경곗값 분석(Boundary Value Analysis)","원인·결과 그래프(Cause-Effect Graph)","동등 분할(Equivalence Partitioning)"],blanks:[{answer:"동등 분할(Equivalence Partitioning)"}],explanation:`정답
동등 분할(Equivalence Partitioning)

정답 근거
동등 분할은 비슷한 동작을 낼 것으로 보는 입력을 유효·무효 집합으로 나눈 뒤, 각 집합에서 대표값을 골라 검사하는 기법이다.

예시
허용 나이가 1~120이라면 1 미만, 1~120, 120 초과로 나누고 -1, 30, 150 같은 대표값을 고를 수 있다. 모든 입력을 검사하는 부담을 줄이는 목적이다.

오답 구분
• 경곗값 분석: 0·1·2 또는 119·120·121처럼 경계 주변에 집중한다.
• 결정 테이블: 여러 조건의 조합과 동작을 표로 정리한다.
• 원인·결과 그래프: 입력 조건과 결과의 논리 관계를 표현한다.

풀이 보강
대표값을 고르는 목적은 같은 분할에 속한 값들이 비슷하게 처리된다는 가정 아래 테스트 수를 줄이는 것이다. 유효 구간만 검사하지 말고 허용 범위 밖의 무효 구간도 따로 나눈다. 경곗값 분석은 이 분할의 경계 부근을 집중 확인하는 기법이므로, 구간 대표값을 고르는 동등 분할과 함께 활용할 수 있다.`}],$1=Object.freeze(Object.defineProperty({__proto__:null,default:J1},Symbol.toStringTag,{value:"Module"})),Q1=[{id:"2024-1-01",session:"연습 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`class Box {
    static Box instance = new Box();
    int n = 0;
    static Box get() { return instance; }
    void add() { n++; }
}
class Main {
    public static void main(String[] args) {
        Box a = Box.get(), b = Box.get();
        a.add(); b.add(); a.add();
        System.out.print(b.n);
    }
}`,language:"java",choices:["1","3","0","2"],blanks:[{answer:"3"}],explanation:`정답
3

정답 근거
핵심: 변수의 개수와 객체의 개수는 다르다. Box.get()은 static 필드 instance에 저장된 같은 객체를 돌려준다.

실행 순서
① a와 b가 모두 같은 Box 객체를 가리킨다. n의 초깃값은 0이다.
② a.add(): n이 1이 된다.
③ b.add(): 같은 객체의 n이 2가 된다.
④ a.add(): n이 3이 된다.
⑤ b.n도 그 객체의 값을 읽으므로 3을 출력한다.

주의: a와 b에 서로 다른 n이 생기는 것이 아니다. new Box()로 각각 객체를 만들었을 때와 구별한다.

풀이 보강
static인 것은 객체 안의 n이 아니라 공유 참조를 보관하는 instance 필드다. n은 인스턴스 필드지만 같은 객체를 공유해서 누적된다. 이 예시는 공용 객체 반환을 보여 주며 생성자를 private으로 제한하지 않았으므로 클래스 전체에서 추가 객체 생성까지 금지하는 완전한 싱글턴 구현이라고 단정하지 않는다.`},{id:"2024-1-02",session:"연습 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`#include <stdio.h>
int main(void) {
    int x=0, y=12, z=6;
    if (x ? y : x) y = y << 1;
    else z = z << 2;
    printf("%d", z);
}`,language:"c",choices:["12","6","24","48"],blanks:[{answer:"24"}],explanation:`정답
24

정답 근거
조건 연산자 조건 ? 참일 때 값 : 거짓일 때 값은 조건에 따라 한쪽 값만 선택한다. C의 if에서는 0이 거짓이다.

계산 순서
① x=0이므로 x ? y : x는 뒤쪽 x, 즉 0이다.
② if가 거짓이어서 y를 바꾸는 문장은 실행하지 않는다.
③ else에서 z = 6 << 2를 계산한다. 양수 6을 왼쪽으로 2비트 이동하면 6 × 2² = 24이다.
④ 출력 대상은 y가 아니라 z이므로 24이다.

주의: << 2는 2를 더하거나 2배 하는 연산이 아니다. 이 값에서는 4배가 된다.

풀이 보강
최종적으로 y는 처음 값 12를 유지하고 z만 24가 된다. C의 조건 연산자는 조건이 선택하지 않은 피연산자를 평가하지 않는다. 이 코드에서는 x가 거짓이라 세 번째 항 x=0이 if의 조건값으로 쓰인다. 6을 이진수 110에서 11000으로 옮겼을 때 16+8=24인지 비트로도 확인할 수 있다.`},{id:"2024-1-03",session:"연습 1회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 코드를 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`items = ["Code", "Note", "Data"]
s = "F"
for item in items:
    s += item[-2]
print(s)`,language:"python",choices:["Fdta","Foea","Fdtt","Feed"],blanks:[{answer:"Fdtt"}],explanation:`정답
Fdtt

정답 근거
Python에서 -1은 마지막 문자, -2는 뒤에서 두 번째 문자이다. 반복할 때마다 해당 문자를 s 뒤에 이어 붙인다.

문자열 변화
① 시작: F
② Code[-2] = d → Fd
③ Note[-2] = t → Fdt
④ Data[-2] = t → Fdtt

주의: 음수 인덱스는 앞에서 두 번째 문자를 뜻하지 않는다. print는 따옴표를 표시하지 않으므로 출력은 Fdtt이다.

풀이 보강
각 문자열을 개별적으로 인덱싱하므로 Data[-2]도 대문자 D나 마지막 a가 아니라 t다. s가 처음부터 F로 시작한다는 점 때문에 세 문자 d,t,t만 이어 붙인 dtt와도 다르다. +=의 오른쪽은 한 글자 문자열이고 원래 items의 각 문자열을 변경하는 연산은 아니다.`},{id:"2024-1-04",session:"연습 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"링크 상태 정보와 다익스트라 알고리즘을 이용하는 대표적인 내부 라우팅 프로토콜을 고르시오.",choices:["OSPF","RIP","BGP","ARP"],blanks:[{answer:"OSPF"}],explanation:`정답
OSPF

정답 근거
정답 단서인 «링크 상태»와 «다익스트라»를 함께 만족하는 것은 OSPF이다. OSPF는 AS 내부에서 경로를 찾는 IGP에 속한다.

동작 이해
주변 링크 정보를 교환해 네트워크 구조를 파악한 뒤, 다익스트라 알고리즘으로 목적지까지의 최단 경로를 계산한다.

오답 구분
• RIP: 거리 벡터 방식이며 홉 수를 기준으로 경로를 선택한다.
• BGP: AS 사이의 경로 정보를 교환한다.
• ARP: 같은 링크에서 IP 주소에 대응하는 MAC 주소를 알아낸다. 라우팅 경로 계산용이 아니다.

풀이 보강
OSPF의 최단 경로는 설정된 링크 비용의 합을 최소화한다는 의미이며, 단순히 라우터를 가장 적게 거치는 경로라는 뜻이 아니다. 링크 상태 정보를 공유한 뒤 각 라우터가 자신을 출발점으로 최단 경로 트리를 계산한다. «내부 라우팅»만으로는 RIP도 가능하므로 링크 상태·다익스트라라는 추가 단서를 함께 확인한다.`},{id:"2024-1-05",session:"연습 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"member(id, name)의 모든 행을 backup(id, name)에 삽입하는 SQL을 고르시오.",language:"sql",choices:["INSERT INTO member(id, name) SELECT id, name FROM backup;","INSERT INTO backup(id, name) VALUES (id, name) FROM member;","INSERT INTO backup(id, name) SELECT id, name FROM member;","UPDATE backup SET id = member.id, name = member.name;"],blanks:[{answer:"INSERT INTO backup(id, name) SELECT id, name FROM member;"}],explanation:`정답
INSERT INTO backup(id, name) SELECT id, name FROM member;

정답 근거
이미 있는 테이블의 조회 결과를 다른 테이블에 넣을 때는 INSERT INTO ... SELECT를 사용한다.

구문 읽기
① INSERT INTO backup(id, name): 데이터를 받을 대상과 열 순서이다.
② SELECT id, name FROM member: 복사할 원본 행을 조회한다.
③ WHERE가 없으므로 member의 모든 행이 삽입 대상이다.

오답 구분
• 테이블 방향을 반대로 쓰면 backup을 읽어 member에 넣는다.
• VALUES는 직접 나열한 값을 삽입할 때 사용한다.
• UPDATE는 기존 행 수정이며 새 행 삽입이 아니다.
대상 열과 조회 열은 개수와 자료형이 호환되어야 한다.

풀이 보강
INSERT INTO 뒤가 목적지, SELECT의 FROM 뒤가 원본이다. SELECT 결과가 두 행이면 두 행이 목적지에 추가되고 원본 행은 삭제되지 않는다. 이미 backup에 같은 기본키가 있으면 중복 제약 위반이 날 수 있으므로 이 구문은 기존 행을 자동 갱신하는 명령이 아니다. 복사 방향과 추가 동작을 분리해 읽는다.`},{id:"2024-1-06",session:"연습 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"기본키에 NULL이 들어간 레코드가 존재한다면 어떤 무결성 규칙을 위반한 것인지 고르시오.",choices:["참조 무결성","개체 무결성","사용자 정의 무결성","도메인 무결성"],blanks:[{answer:"개체 무결성"}],explanation:`정답
개체 무결성

정답 근거
기본키는 각 행을 확실하게 식별해야 하므로 NULL을 가질 수 없고 중복되어서도 안 된다. 이 두 조건이 개체 무결성이다.

문제 적용
기본키에 NULL이 들어가면 그 행의 식별값이 없다는 뜻이므로 개체 무결성을 위반한다. 기본키에 같은 값이 두 번 나타나는 경우도 같은 규칙 위반이다.

오답 구분
• 참조 무결성: 외래키가 가리키는 대상이 유효한지 확인한다.
• 도메인 무결성: 나이·성별 등 속성의 허용 범위나 형식을 제한한다.
• 사용자 정의 무결성: 업무에서 별도로 정한 제약이다.

풀이 보강
복합 기본키라면 조합 전체가 유일해야 하고 구성 열 각각은 NULL일 수 없다. 예를 들어 (주문번호, 상품번호)에서 같은 주문번호가 여러 행에 나타나는 것 자체는 허용되지만 동일한 쌍이 중복되면 위반이다. 단일 열 기본키의 중복 금지와 복합키 각 열의 개별 중복 금지를 혼동하지 않는다.`},{id:"2024-1-07",session:"연습 1회",subjectId:9,subjectName:"Python",type:"text",question:"다음 Python 코드를 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`a = "7"
b = [1, 2, 3]
c = 3
print(len(a) + len(b) + c * 2)`,language:"python",choices:["7","12","10","16"],blanks:[{answer:"10"}],explanation:`정답
10

정답 근거
계산 전에 각 변수의 자료형을 구분한다. a는 문자열, b는 리스트, c는 정수이다.

항별 계산
① len("7") = 1: 숫자 7이 아니라 문자 한 개의 길이이다.
② len([1, 2, 3]) = 3: 리스트의 원소 개수이다.
③ c * 2 = 3 * 2 = 6이다.
④ 1 + 3 + 6 = 10을 출력한다.

주의: 리스트의 원소를 더하는 것이 아니다. len(b)는 1+2+3이 아니라 원소 수 3을 반환한다.

풀이 보강
곱셈이 덧셈보다 우선하므로 c*2를 먼저 계산한다. 모든 len 반환값과 c*2는 정수라 마지막 +는 문자열 연결이 아니라 숫자 덧셈이다. 변수 a의 겉모습이 숫자 7이어도 코드에서는 따옴표로 감싼 문자열이며 int(a)를 호출한 적이 없다는 자료형 단서를 놓치지 않는다.`},{id:"2024-1-08",session:"연습 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`class Base { int value() { return 4; } }
class Sub extends Base { int value() { return 12; } }
class Main {
    public static void main(String[] args) {
        Base p = new Sub();
        System.out.print(p.value());
    }
}`,language:"java",choices:["12","4","16","8"],blanks:[{answer:"12"}],explanation:`정답
12

정답 근거
오버라이딩한 인스턴스 메서드는 참조 변수의 선언 타입보다 실제 객체의 타입에 따라 선택된다.

실행 순서
① Base p는 변수를 Base 타입으로 선언한 것이다.
② new Sub()로 만든 실제 객체는 Sub이다.
③ p.value()를 호출하면 Sub이 재정의한 value()가 실행된다.
④ 그 메서드는 12를 반환하므로 12를 출력한다.

오답 구분: 4는 Base.value()의 반환값이다. 부모와 자식 메서드를 둘 다 실행하거나 두 반환값을 더하지 않는다.

풀이 보강
Sub.value()는 Base.value()와 이름·매개변수가 같은 재정의 메서드다. 호출마다 부모 반환값 4와 자식 반환값 12를 더하는 것이 아니며, 부모 구현을 명시 호출하는 super도 없다. 선언 타입 Base 덕분에 호출 자체는 가능하고 실행 구현은 Sub으로 정해진다는 두 단계를 구별한다.`},{id:"2024-1-09",session:"연습 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`#include <stdio.h>
int main(void) {
    int arr[] = {3, 4, 6};
    int *p = arr;
    printf("%d", *(p+2) + *p);
}`,language:"c",choices:["6","9","7","10"],blanks:[{answer:"9"}],explanation:`정답
9

정답 근거
배열 이름 arr로 포인터를 초기화하면 p는 첫 원소 arr[0]을 가리킨다. *(p+i)는 arr[i]와 같은 원소를 읽는다.

식 해석
① *(p+2) = arr[2] = 6이다.
② *p = arr[0] = 3이다.
③ 출력 식은 6 + 3 = 9이다.

주의: p+2는 값 3에 2를 더하는 연산이 아니라 int 원소 두 개만큼 주소를 이동하는 연산이다. 원소 번호는 0부터 센다.

풀이 보강
*(p+2)는 읽을 위치를 잠시 계산한 것이어서 p 변수 자체는 arr[0]에서 이동하지 않는다. 따라서 뒤의 *p도 여전히 3이다. p+=2였다면 p가 실제로 바뀌지만 현재 식에는 대입이 없다. 주소 계산식과 포인터 변수 갱신식을 구분해야 두 항을 모두 6으로 읽는 오류를 피할 수 있다.`},{id:"2024-1-10",session:"연습 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"후보키가 A이고 함수 종속 A → B, B → C가 있는 테이블에서, 비주요 속성 사이의 종속 B → C로 발생하는 이행 종속을 제거하는 정규형을 고르시오.",choices:["제2정규형(2NF)","제1정규형(1NF)","제3정규형(3NF)","제4정규형(4NF)"],blanks:[{answer:"제3정규형(3NF)"}],explanation:`정답
제3정규형(3NF)

정답 근거
A → B, B → C이면 A를 통해 B를 알고 다시 C를 알 수 있다. 비주요 속성 B를 거쳐 C가 키 A에 간접적으로 종속되는 것이 이행 함수 종속이다.

정규화 과정
① A가 후보키이고 B·C가 비주요 속성임을 확인한다.
② B → C 때문에 키가 아닌 속성에 다른 비주요 속성이 매달려 있다.
③ 보통 R1(A, B)와 R2(B, C)로 분리해 이행 종속을 제거한다. 이 단계가 제3정규형이다.

단계 구분
1NF: 속성 값을 원자 값으로 만든다.
2NF: 비주요 속성의 부분 함수 종속을 제거한다.
3NF: 비주요 속성의 이행 함수 종속을 제거한다.

풀이 보강
3NF를 정확히 검사할 때는 후보키와 주요 속성을 먼저 찾는다. 이 문항에서는 A가 후보키이고 B·C가 비주요 속성이라는 조건 때문에 B→C가 위반의 근거다. R1(A,B)와 R2(B,C)는 공통 속성 B로 원래 정보를 결합할 수 있다. 단순히 화살표가 두 개 이어졌다는 이유로 모든 관계가 3NF를 위반한다고 판단하지 않는다.`},{id:"2024-1-11",session:"연습 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"데이터를 암호화하고 복구 비용을 요구하는 악성 소프트웨어를 고르시오.",choices:["랜섬웨어(Ransomware)","스파이웨어(Spyware)","스캐어웨어(Scareware)","애드웨어(Adware)"],blanks:[{answer:"랜섬웨어(Ransomware)"}],explanation:`정답
랜섬웨어(Ransomware)

정답 근거
«데이터 암호화»와 «복구 대가로 금전 요구»가 함께 나오면 랜섬웨어이다. ransom은 몸값을 뜻한다.

공격 흐름
파일이나 시스템에 대한 접근을 막은 뒤 복호화·복구를 조건으로 돈을 요구한다. 단순한 광고 표시나 정보 수집이 핵심인 악성코드와 구별해야 한다.

오답 구분
• 스파이웨어: 사용자의 정보나 활동을 몰래 수집한다.
• 애드웨어: 광고를 표시한다.
• 스캐어웨어: 가짜 감염 경고 등으로 불안감을 주어 결제·설치를 유도한다.

풀이 보강
몸값을 요구한다는 점과 실제 데이터 접근을 막는다는 점을 함께 본다. 가짜 경고만 보여 주며 백신 구매를 유도하는 스캐어웨어와 구별된다. 랜섬웨어는 암호화 외에도 데이터 유출을 빌미로 협박할 수 있으므로 이름의 핵심은 금전 요구를 통한 강요다. 이 문제에서는 파일 암호화가 직접적인 판별 단서다.`},{id:"2024-1-12",session:"연습 1회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"모든 분기문의 참·거짓 결과를 각각 최소 한 번 실행하는 테스트 커버리지를 고르시오.",choices:["문장 커버리지","조건 커버리지","결정(분기) 커버리지","경로 커버리지"],blanks:[{answer:"결정(분기) 커버리지"}],explanation:`정답
결정(분기) 커버리지

정답 근거
결정(분기) 커버리지는 각 분기에서 참인 결과와 거짓인 결과를 모두 실행했는지 보는 기준이다.

예시
if (x > 0)이 있다면 x=1로 참 분기를, x=0으로 거짓 분기를 실행해야 한다. 참 분기만 여러 번 실행해서는 충족되지 않는다.

오답 구분
• 문장 커버리지: 각 명령문을 실행했는가?
• 조건 커버리지: 복합식의 개별 조건이 각각 참·거짓이 되었는가?
• 경로 커버리지: 실행 가능한 경로를 실행했는가?
문제의 «분기 결과 양쪽»이라는 표현이 결정 커버리지의 단서이다.

풀이 보강
if (x > 0) y=1;에서 x=1만 실행하면 y=1 문장을 실행하므로 문장 커버리지를 만족할 수 있지만 거짓 분기는 검증하지 않았다. 결정 커버리지에는 x=0처럼 거짓 결과를 만드는 경우도 필요하다. 모든 분기를 거쳤다고 모든 분기의 조합으로 이루어진 전체 경로까지 검사한 것은 아니다.`},{id:"2024-1-13",session:"연습 1회",subjectId:8,subjectName:"Java",type:"text",question:"다음 Java 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`class Main {
    public static void main(String[] args) {
        String a = new String("hi");
        String b = new String("hi");
        System.out.print((a == b) + " " + a.equals(b));
    }
}`,language:"java",choices:["true false","false true","false false","true true"],blanks:[{answer:"false true"}],explanation:`정답
false true

정답 근거
Java 문자열에서는 ==와 equals()가 무엇을 비교하는지 구분해야 한다.

비교 순서
① new String("hi")를 두 번 실행하므로 a와 b는 별도 객체이다.
② a == b: 같은 객체를 가리키는지 비교하므로 false이다.
③ a.equals(b): String의 내용 hi가 같은지 비교하므로 true이다.
④ 가운데 공백을 포함해 false true를 출력한다.

주의: 내용이 같다는 이유로 참조까지 같아지는 것은 아니다. 두 문자열 모두 new로 만들었다는 점이 중요하다.

풀이 보강
String.equals는 참조가 다르더라도 각 문자가 같으면 true를 반환한다. 반대로 ==는 같은 객체의 참조인지 검사한다. 두 번의 new가 각자 새 객체를 만든다는 것이 false의 근거다. 리터럴만 두 변수에 넣는 다른 예제에서는 문자열 풀 때문에 참조가 같을 수도 있으므로 코드의 생성 방식을 먼저 확인한다.`},{id:"2024-1-14",session:"연습 1회",subjectId:7,subjectName:"C 언어",type:"text",question:"다음 C 프로그램을 실행했을 때의 출력 결과를 고르시오.",codeSnippet:`#include <stdio.h>
int main(void) {
    int t[2][3] = {{2,3,4},{6,7,8}};
    printf("%d", t[1][1]);
}`,language:"c",choices:["7","3","8","6"],blanks:[{answer:"7"}],explanation:`정답
7

정답 근거
2차원 배열 t[행][열]의 두 인덱스는 모두 0부터 시작한다.

위치 찾기
① t[0]은 첫째 행 {2, 3, 4}이다.
② t[1]은 둘째 행 {6, 7, 8}이다.
③ t[1][1]은 둘째 행의 둘째 열이므로 7이다.

오답 구분: 3은 t[0][1], 6은 t[1][0], 8은 t[1][2]이다. 숫자 1을 첫째 행·첫째 열이라고 해석하면 안 된다.

풀이 보강
C의 2차원 배열은 행 우선으로 저장되므로 평탄화하면 2,3,4,6,7,8이다. 열 수가 3일 때 t[1][1]의 위치는 1×3+1=4번째 오프셋으로, 0부터 세면 다섯 번째 값 7이다. 행·열 좌표 방식과 저장 순서 방식으로 독립적으로 같은 원소를 찾을 수 있다.`},{id:"2024-1-15",session:"연습 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"발행자가 자신의 상태 변화를 등록된 여러 구독자에게 자동으로 알려 주는 디자인 패턴을 고르시오.",choices:["싱글턴(Singleton) 패턴","전략(Strategy) 패턴","옵서버(Observer) 패턴","어댑터(Adapter) 패턴"],blanks:[{answer:"옵서버(Observer) 패턴"}],explanation:`정답
옵서버(Observer) 패턴

정답 근거
옵서버는 한 객체의 상태가 바뀌면 등록된 여러 객체에게 그 사실을 알리는 행위 패턴이다. 문제의 발행자와 구독자는 각각 주체와 관찰자에 대응한다.

예시
뉴스 발행자에 여러 구독자가 등록해 두면 새 뉴스가 생겼을 때 등록된 구독자들에게 통지한다. 한 주체와 여러 관찰자 사이의 일대다 관계가 핵심이다.

오답 구분
• 전략: 실행할 알고리즘을 바꿔 끼운다.
• 어댑터: 맞지 않는 인터페이스를 변환한다.
• 싱글턴: 인스턴스를 하나로 제한해 공유한다.

풀이 보강
주체가 상태를 바꾸면 등록된 관찰자에게 알리고 관찰자는 통지에 맞춰 각자 동작한다. 관찰자가 계속 상태를 물어보는 폴링과 비교하면 변경 시점에 통지가 이루어진다는 차이가 있다. 다만 비동기 메시지 브로커를 쓰는 시스템만 옵서버인 것은 아니며 같은 프로그램 안의 이벤트 구독으로도 구현할 수 있다.`},{id:"2024-1-16",session:"연습 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"orders(category, price)에서 category별 총액이 100 이상인 카테고리와 합계를 조회하는 SQL을 고르시오.",language:"sql",choices:["SELECT category, SUM(price) FROM orders GROUP BY category HAVING SUM(price) > 100;","SELECT category, SUM(price) FROM orders GROUP BY category HAVING SUM(price) >= 100;","SELECT category, SUM(price) FROM orders GROUP BY price HAVING SUM(price) >= 100;","SELECT category, SUM(price) FROM orders WHERE price >= 100 GROUP BY category;"],blanks:[{answer:"SELECT category, SUM(price) FROM orders GROUP BY category HAVING SUM(price) >= 100;"}],explanation:`정답
SELECT category, SUM(price) FROM orders GROUP BY category HAVING SUM(price) >= 100;

정답 근거
개별 주문의 가격이 아니라 카테고리별 합계를 조건으로 거르므로 GROUP BY와 HAVING을 사용한다.

처리 흐름
① orders에서 행을 읽는다.
② GROUP BY category로 같은 카테고리끼리 묶는다.
③ SUM(price)로 각 그룹의 총액을 구한다.
④ HAVING SUM(price) >= 100으로 조건에 맞는 그룹을 남긴다.
⑤ category와 총액을 조회한다.

오답 구분: 40원·60원 주문은 합계가 100이라 포함되어야 한다. WHERE price >= 100으로 먼저 거르면 두 행이 모두 사라진다. 또한 «이상»이므로 >가 아니라 >=이다.

풀이 보강
범주 A의 금액이 40·60이고 B가 99라면 A의 합계 100만 결과에 포함된다. GROUP BY price는 금액이 같은 행끼리 묶어 요구한 범주별 집계와 달라진다. HAVING이 적용된 뒤 SELECT에서 범주와 합계를 함께 반환하며, >=100을 >100으로 바꾸면 정확히 100인 A까지 빠진다.`},{id:"2024-1-17",session:"연습 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"트랜잭션 수행 중 오류가 나면 일부만 반영하지 않고 전부 취소하거나 전부 반영해야 하는 특성을 고르시오.",choices:["원자성(Atomicity)","격리성(Isolation)","지속성(Durability)","일관성(Consistency)"],blanks:[{answer:"원자성(Atomicity)"}],explanation:`정답
원자성(Atomicity)

정답 근거
원자성은 트랜잭션의 작업을 전부 반영하거나 전부 취소해야 한다는 특성이다. 일부만 성공한 상태를 남기지 않는다.

예시
계좌 이체에서 출금은 반영됐는데 입금은 실패했다면 전체 작업을 취소해야 한다. 출금만 남겨 두는 것은 원자성을 어긴 것이다.

ACID 구분
• 원자성: 전부 성공 또는 전부 취소
• 일관성: 제약 조건을 만족하는 상태 유지
• 격리성: 동시에 실행되는 작업 간 간섭 제어
• 지속성: 커밋한 결과를 장애 뒤에도 보존

풀이 보강
실패 시 일부 변경을 되돌리는 ROLLBACK이 원자성과 연결되고, 성공한 트랜잭션을 확정하는 COMMIT 뒤의 보존은 지속성과 연결된다. 이체 전후 잔액 합 같은 업무 규칙을 유지하는 것은 일관성의 예다. 전부 반영 여부와 커밋 후 장애에도 남는 여부를 같은 특성으로 섞지 않는다.`},{id:"2024-1-18",session:"연습 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"두 프로세스가 각각 자원 하나를 보유하고 상대방 자원을 기다리며 진행하지 못하는 상태를 고르시오.",choices:["문맥 교환(Context Switching)","스래싱(Thrashing)","교착상태(Deadlock)","기아 상태(Starvation)"],blanks:[{answer:"교착상태(Deadlock)"}],explanation:`정답
교착상태(Deadlock)

정답 근거
교착상태는 프로세스들이 상대방이 보유한 자원을 기다려 더 이상 진행할 수 없는 상태이다.

문제 적용
P1은 자원 A를 보유한 채 B를 기다리고, P2는 B를 보유한 채 A를 기다린다. 서로 기다리는 고리가 생겨 어느 쪽도 작업을 끝내고 자원을 돌려주지 못한다.

필요 조건은 상호 배제, 점유와 대기, 비선점, 환형 대기이다.
오답 구분: 기아는 특정 작업이 계속 자원을 배정받지 못하는 현상, 스래싱은 지나친 페이지 교체, 문맥 교환은 CPU 실행 대상을 바꾸는 과정이다.

풀이 보강
주어진 대기 관계를 P1→P2, P2→P1로 그리면 순환이 보인다. 두 프로세스가 다른 작업을 계속하는 동안 한 프로세스만 자원을 못 받는 기아와 다르다. 교착 방지는 필요 조건 중 하나가 성립하지 않게 하고, 회피는 자원 할당 후에도 안전 상태가 유지되는지 판단하는 접근이라는 점도 함께 구별한다.`},{id:"2024-1-19",session:"연습 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"IPv4 주소의 프리픽스 길이가 /26일 때의 서브넷 마스크를 고르시오.",choices:["255.255.255.0","255.255.255.128","255.255.255.224","255.255.255.192"],blanks:[{answer:"255.255.255.192"}],explanation:`정답
255.255.255.192

정답 근거
프리픽스 /26은 서브넷 마스크의 왼쪽 26비트가 1이라는 뜻이다. IPv4 주소는 8비트씩 네 옥텟으로 나눈다.

계산
① 26 = 8 + 8 + 8 + 2이다.
② 앞 세 옥텟은 11111111이므로 각각 255이다.
③ 마지막 옥텟은 11000000이므로 128+64=192이다.
④ 따라서 255.255.255.192이다.

보기 구분: 마지막 옥텟이 0이면 /24, 128이면 /25, 224이면 /27이다. /26에서는 마지막 옥텟의 상위 두 비트만 1로 만든다.

풀이 보강
호스트 비트가 32−26=6개이므로 주소 블록은 2⁶=64개다. 마지막 옥텟은 0·64·128·192에서 네트워크가 시작하며 일반적인 할당 가능 호스트 수는 62다. /25는 128개, /27은 32개이므로 마스크를 비트로 계산한 결과와 블록 크기로 계산한 결과를 서로 대조할 수 있다.`},{id:"2024-1-20",session:"연습 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"원격 저장소의 변경 커밋을 가져와 현재 브랜치에 통합하는 대표적인 Git 명령어를 고르시오.",choices:["git commit","git push","git fetch","git pull"],blanks:[{answer:"git pull"}],explanation:`정답
git pull

정답 근거
문제는 원격 커밋을 «가져오기»뿐 아니라 현재 브랜치에 «통합»하는 명령을 묻는다. 두 작업을 묶어서 수행하는 것이 git pull이다.

동작 이해
git pull은 먼저 fetch로 원격 변경을 가져온 뒤 설정·옵션에 따라 merge 또는 rebase로 통합한다. 충돌이 있으면 사용자가 해결해야 할 수 있다.

오답 구분
• git fetch: 원격 변경을 가져오되 현재 브랜치에 자동 통합하지 않는다.
• git push: 로컬 커밋을 원격으로 보낸다.
• git commit: 로컬 변경을 커밋으로 기록한다.

풀이 보강
pull의 대상 원격과 브랜치는 인수 또는 현재 브랜치의 upstream 설정에 따라 결정된다. 가져온 변경이 현재 이력의 연장이라면 fast-forward로 반영할 수 있고, 이력이 갈라졌다면 설정·옵션에 따라 통합 방식이 달라진다. 충돌 해결이나 별도 통합을 직접 하려면 fetch 후 확인하는 흐름과 비교해 기억한다.`}],K1=Object.freeze(Object.defineProperty({__proto__:null,default:Q1},Symbol.toStringTag,{value:"Module"})),Y1=[{id:"2024-3-restored-01",session:"2024년 3회",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`class Main {
    public static void main(String[] args) {
        String[] values = {"A", "A", new String("A")};
        for (int i = 0; i + 1 < values.length; ++i) {
            System.out.print(values[i].equals(values[i + 1]) ? "O" : "N");
        }
        for (String value : values) System.out.print(value);
    }
}`,language:"java",choices:["NNAAA","NOAAA","ONAAA","OOAAA"],blanks:[{answer:"OOAAA"}],explanation:`정답
OOAAA

정답 근거
첫 반복문은 인접 문자열의 내용을 비교하고, 두 번째 반복문은 모든 문자열을 이어 출력한다.

출력 순서
① values[0].equals(values[1]): A와 A의 내용 비교 → O
② values[1].equals(values[2]): 마지막 원소가 new String이어도 내용은 A → O
③ 모든 원소를 순서대로 출력 → AAA
④ 두 출력을 합치면 OOAAA이다.

주의: equals를 ==로 오해하면 두 번째 비교를 거짓으로 판단해 ONAAA를 고르기 쉽다. 별도 객체여도 String.equals()는 내용이 같으면 참이다.

풀이 보강
첫 반복의 i는 0과 1뿐이라 인접한 문자열을 두 번 비교한다. 모두 내용 A가 같아 O가 두 번 나온 뒤 두 번째 반복이 A 세 개를 출력한다. 세 번째 원소가 new String으로 만들어졌어도 equals의 내용 비교 결과는 같다. 참조 비교 ==로 바뀌었을 때의 결과와 현재 코드의 결과를 섞지 않는다.`},{id:"2024-3-restored-02",session:"2024년 3회",subjectId:9,subjectName:"Python",type:"code",question:"다음 Python 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`values = [1, 2, 3, 4, 5, 6]
for i in range(len(values) // 2):
    values[i], values[-1 - i] = values[-1 - i], values[i]
print(sum(values[::2]) - sum(values[1::2]))`,language:"python",choices:["0","21","-3","3"],blanks:[{answer:"3"}],explanation:`정답
3

정답 근거
리스트를 먼저 제자리에서 뒤집은 다음, 바뀐 리스트에서 짝수·홀수 인덱스를 나눈다. 값의 홀짝을 구분하는 문제가 아니다.

뒤집기 과정
i=0: 첫 값 1과 마지막 값 6 교환
i=1: 2와 5 교환
i=2: 3과 4 교환
결과: [6,5,4,3,2,1]

슬라이스 계산
values[::2]: 인덱스 0,2,4 → [6,4,2], 합 12
values[1::2]: 인덱스 1,3,5 → [5,3,1], 합 9
따라서 12-9=3이다.

주의: 원본을 그대로 계산하면 -3이 된다. 리스트 변경을 먼저 적용하고, [::2]의 기준은 원소 값이 아닌 위치임을 확인한다.

풀이 보강
교환은 (0,5), (1,4), (2,3)에서 동시에 일어나 최종 리스트는 [6,5,4,3,2,1]이다. 짝수 인덱스의 합은 6+4+2=12, 홀수 인덱스의 합은 5+3+1=9라서 차는 3이다. 값의 홀짝이 아니라 인덱스의 홀짝으로 나누며 뒤집은 후에 두 합을 구해야 한다.`},{id:"2024-3-restored-03",session:"2024년 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 두 테이블에 대해 SQL을 실행했을 때 COUNT(*)의 결과를 고르시오.",blocks:[{type:"table",caption:"employee",headers:["no","first_name","last_name","project_id"],rows:[["1","John","Doe","10"],["2","Jim","Carry","20"],["3","Rachel","Redmond","10"]]},{type:"table",caption:"project",headers:["project_id","name"],rows:[["10","Alpha"],["20","Beta"],["10","Gamma"]]}],codeSnippet:`SELECT COUNT(*)
FROM employee AS e JOIN project AS p ON e.project_id = p.project_id
WHERE p.name IN (
    SELECT p2.name FROM project AS p2
    WHERE p2.project_id IN (
        SELECT project_id FROM employee
        GROUP BY project_id HAVING COUNT(*) < 2
    )
);`,language:"sql",choices:["3","1","2","5"],blanks:[{answer:"1"}],explanation:`정답
1

정답 근거
가장 안쪽의 그룹 집계부터 계산하면 긴 SQL도 단계별로 풀 수 있다.

① 직원 수 집계
employee를 project_id로 묶으면 10번 프로젝트는 John·Rachel의 2명, 20번은 Jim의 1명이다. HAVING COUNT(*)<2를 통과하는 ID는 20뿐이다.

② 프로젝트 이름 조회
project에서 ID=20의 이름은 Beta이다. 따라서 바깥 WHERE의 이름 집합은 {Beta}이다.

③ 조인 후 필터링
ID=10은 project에 Alpha·Gamma 두 행이 있어 직원 두 명과 결합하면 네 행이 생긴다. ID=20은 Jim과 Beta 한 행이다. 전체 조인 다섯 행 중 이름이 Beta인 한 행만 남는다.

④ COUNT(*)=1
project_id=10 중복 행을 임의로 삭제하지 않는다. 이 문항의 표를 그대로 사용하며, <2는 2명인 프로젝트를 포함하지 않는다는 점도 주의한다.

풀이 보강
안쪽 GROUP BY에서 project_id=10은 직원 두 명, 20은 한 명이라 20만 남는다. 그 id에 해당하는 프로젝트 이름은 Beta이고 바깥 조인에서 Beta에 속하는 Jim 한 행만 통과한다. project의 10이 두 행이라 필터 전 조인은 총 5행이지만 이 네 행은 최종 이름 조건에서 제외된다. 중복 id를 임의로 한 행으로 줄이지 않는다.`},{id:"2024-3-restored-04",session:"2024년 3회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"프레임이 3개이며 처음에는 비어 있을 때, 다음 참조열을 LRU로 처리한 페이지 부재 횟수를 고르시오.",blocks:[{type:"text",text:"페이지 참조열: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1"}],choices:["15","9","12","10"],blanks:[{answer:"12"}],explanation:`정답
12

정답 근거
LRU는 가장 오래 참조하지 않은 페이지를 교체한다. 적중한 페이지도 최근 사용 시점이 갱신되므로 순서를 바꿔 표시해야 한다.

프레임 추적
대괄호는 고정 프레임 위치가 아니라 «오래된 참조 → 최근 참조» 순이다.
01) 7 → 부재 [7]
02) 0 → 부재 [7, 0]
03) 1 → 부재 [7, 0, 1]
04) 2 → 부재 [0, 1, 2]
05) 0 → 적중 [1, 2, 0]
06) 3 → 부재 [2, 0, 3]
07) 0 → 적중 [2, 3, 0]
08) 4 → 부재 [3, 0, 4]
09) 2 → 부재 [0, 4, 2]
10) 3 → 부재 [4, 2, 3]
11) 0 → 부재 [2, 3, 0]
12) 3 → 적중 [2, 0, 3]
13) 2 → 적중 [0, 3, 2]
14) 1 → 부재 [3, 2, 1]
15) 2 → 적중 [3, 1, 2]
16) 0 → 부재 [1, 2, 0]
17) 1 → 적중 [2, 0, 1]
18) 7 → 부재 [0, 1, 7]
19) 0 → 적중 [1, 7, 0]
20) 1 → 적중 [7, 0, 1]

부재가 발생한 순번은 1,2,3,4,6,8,9,10,11,14,16,18번째로 총 12회이다. 처음 세 페이지 적재도 포함한다.

주의: 적중해도 최근성을 갱신하지 않으면 FIFO처럼 계산하게 된다. 예를 들어 5번째 참조 0이 적중한 뒤에는 0을 가장 최근 쪽으로 옮겨야 한다.

풀이 보강
전체 20회 참조 중 부재는 12회, 적중은 8회이므로 합이 20인지 확인한다. 빈 프레임에 처음 넣는 7·0·1도 부재로 센다. 0이 이미 있을 때 재참조하면 부재 수는 늘지 않지만 최근 사용 시점은 갱신된다. 프레임이 꽉 찼을 때만 마지막 참조가 가장 오래된 페이지를 교체한다.`},{id:"2024-3-restored-05",session:"2024년 3회",subjectId:5,subjectName:"정보 보안",type:"text",question:"피해자의 IP를 송신 주소로 위조한 ICMP Echo 요청을 브로드캐스트해 대량의 응답을 피해자에게 보내는 DoS 공격을 고르시오.",choices:["랜드(LAND) 공격","SYN 플러딩(SYN Flooding)","티어드롭(Teardrop) 공격","스머프(Smurf) 공격"],blanks:[{answer:"스머프(Smurf) 공격"}],explanation:`정답
스머프(Smurf) 공격

정답 근거
스머프 공격은 ICMP Echo 응답을 증폭시켜 피해자에게 집중시키는 서비스 거부 공격이다.

흐름
① 공격자가 요청의 송신 IP를 피해자 주소로 위조한다.
② ICMP Echo 요청을 브로드캐스트해 여러 호스트가 받게 한다.
③ 각 호스트가 피해자에게 Echo Reply를 보내도록 유도한다.
④ 다량의 응답이 피해자에게 몰리면서 서비스를 방해한다.

오답 구분
• SYN 플러딩: TCP 연결 설정 대기 자원 소모
• LAND: 송신·수신 주소를 같게 위조
• 티어드롭: 조각 패킷 재조립 취약점 악용
«ICMP·브로드캐스트·응답 증폭»을 한 묶음으로 기억한다.

풀이 보강
공격자가 보낸 한 요청에 여러 호스트가 응답하도록 해 트래픽을 증폭하고, 위조된 송신 주소의 피해자가 그 응답을 받는 구조다. 피해자가 직접 ICMP 요청을 보낼 필요는 없다. LAND는 출발지·목적지를 같게 위조하는 공격, SYN 플러딩은 TCP 연결 대기 상태를 소진시키는 공격이라 사용 프로토콜과 동작이 다르다.`},{id:"2024-3-restored-06",session:"2024년 3회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"Observer, Command, Chain of Responsibility가 속하는 GoF 디자인 패턴의 상위 분류를 고르시오.",choices:["생성(Creational) 패턴","구조(Structural) 패턴","행위(Behavioral) 패턴"],blanks:[{answer:"행위(Behavioral) 패턴"}],explanation:`정답
행위(Behavioral) 패턴

정답 근거
GoF 패턴은 크게 생성·구조·행위로 나눈다. 제시된 세 패턴은 모두 객체 사이의 상호작용이나 책임 전달을 다룬다.

예시 연결
• Observer: 상태 변화 사실을 관찰자들에게 알림
• Command: 요청을 객체로 표현해 전달
• Chain of Responsibility: 요청을 처리할 책임을 연결된 객체들 사이로 전달
따라서 공통 분류는 행위 패턴이다.

오답 구분: 생성 패턴은 객체를 만드는 방식, 구조 패턴은 클래스·객체를 조합하는 구조에 초점을 둔다. 각 패턴 이름의 철자보다 무엇을 해결하는지로 분류한다.

풀이 보강
Observer는 변경 통지, Command는 요청의 객체화, Chain of Responsibility는 요청을 처리할 후보들에게 순차 전달하는 패턴이다. 셋 모두 객체의 역할·요청 처리·협력 방식을 정하므로 행위 분류다. 생성은 객체를 만드는 방법, 구조는 클래스·객체를 조합하는 방법이라는 분류 기준을 먼저 적용한다.`},{id:"2024-3-restored-07",session:"2024년 3회",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`#include <stdio.h>
int next_value(void) {
    static int value = 0;
    value += 2;
    return value;
}
int main(void) {
    int total = 0;
    for (int i = 0; i < 4; ++i) total += next_value();
    printf("%d", total);
    return 0;
}`,language:"c",choices:["10","20","8","16"],blanks:[{answer:"20"}],explanation:`정답
20

정답 근거
static 지역 변수 value는 한 번 0으로 초기화된 뒤 함수 호출이 끝나도 값을 보존한다. total은 각 반환값을 누적한다.

호출별 계산
1회: value=2 반환, total=2
2회: value=4 반환, total=6
3회: value=6 반환, total=12
4회: value=8 반환, total=20

따라서 20을 출력한다. 8은 마지막 반환값일 뿐 합계가 아니다. 매번 0으로 초기화된다고 생각하면 2를 네 번 더해 8로 잘못 계산하게 된다.

풀이 보강
next_value의 반환값은 차례로 2,4,6,8이고 total은 2,6,12,20으로 바뀐다. 반복문 i는 0~3이라 호출은 네 번이다. 함수가 끝날 때마다 value가 0으로 초기화되면 8이 되지만 static 때문에 그런 초기화는 한 번만 일어난다. 마지막 반환값 8과 누적 합 20을 구별한다.`},{id:"2024-3-restored-08",session:"2024년 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"기본키 값이 NULL이거나 서로 다른 행에서 중복된 경우 위반하는 무결성 제약을 고르시오.",choices:["참조 무결성","도메인 무결성","개체 무결성","사용자 정의 무결성"],blanks:[{answer:"개체 무결성"}],explanation:`정답
개체 무결성

정답 근거
개체 무결성은 기본키가 행의 식별자 역할을 하도록 유일성과 NOT NULL을 요구한다.

두 위반 사례
① 기본키가 NULL: 식별값이 비어 있어 위반
② 서로 다른 행의 기본키가 중복: 하나의 식별값으로 두 행을 구분할 수 없어 위반
문제는 둘 중 어느 사례라도 개체 무결성으로 판단한다.

오답 구분: 외래키의 참조 대상이 없으면 참조 무결성, 정해진 값 범위나 형식에 어긋나면 도메인 무결성이다. 단순히 데이터가 잘못됐다는 이유로 모두 같은 규칙을 고르지 않는다.

풀이 보강
복합 기본키라면 조합 전체가 유일해야 하고 구성 열 각각은 NULL일 수 없다. 예를 들어 (주문번호, 상품번호)에서 같은 주문번호가 여러 행에 나타나는 것 자체는 허용되지만 동일한 쌍이 중복되면 위반이다. 단일 열 기본키의 중복 금지와 복합키 각 열의 개별 중복 금지를 혼동하지 않는다.`},{id:"2024-3-restored-09",session:"2024년 3회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"아래 URL의 구성 구역 번호를 query, path, scheme, authority, fragment 순서대로 고르시오.",blocks:[{type:"text",text:"foo://localhost:8080/over/there?name=ferret#nose"},{type:"table",caption:"복원 URL 그림을 구역 표로 재구성",headers:["번호","구역"],rows:[["1","foo"],["2","localhost:8080"],["3","/over/there"],["4","name=ferret"],["5","nose"]]}],choices:["3","2","5","1","4"],blanks:[{label:"query",answer:"4"},{label:"path",answer:"3"},{label:"scheme",answer:"1"},{label:"authority",answer:"2"},{label:"fragment",answer:"5"}],explanation:`정답
query: 4
path: 3
scheme: 1
authority: 2
fragment: 5

정답 근거
URL은 scheme://authority/path?query#fragment 형태로 구역을 나눠 읽는다. ://, ?, #는 구분자이며 구역 내용과 구별한다.

제시 URL 해석
① foo: scheme, 접근 방식·프로토콜
② localhost:8080: authority, 여기서는 호스트와 포트
③ /over/there: path, 자원의 경로
④ name=ferret: query, 전달할 추가 데이터
⑤ nose: fragment, 자원 안의 위치 식별

문제는 URL에 나타난 순서가 아니라 query → path → scheme → authority → fragment 순서를 요구한다. 번호를 대응하면 4 → 3 → 1 → 2 → 5이다.

주의: 8080은 query가 아니라 authority에 들어 있는 포트이다. 구역을 왼쪽부터 그대로 1,2,3,4,5로 쓰지 않는다.

풀이 보강
구분자 ://, ?, # 자체와 각 구성 요소의 내용을 구분한다. authority에는 호스트뿐 아니라 포트도 포함하므로 localhost:8080 전체가 2번이다. query는 name=ferret, fragment는 nose이며 물음표·샵은 경계 표시다. URL에 쓰인 순서와 문제에서 요구한 query→path→scheme→authority→fragment 순서가 다르므로 번호를 재배열한다.`},{id:"2024-3-restored-10",session:"2024년 3회",subjectId:9,subjectName:"Python",type:"code",question:"다음 Python 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`def measure(value):
    if type(value) is int:
        return 100
    if type(value) is str:
        return len(value)
    return 20

print(measure("100.0") + measure(100.0) + measure((100, 200)))`,language:"python",choices:["125","45","105","140"],blanks:[{answer:"45"}],explanation:`정답
45

정답 근거
입력의 모양이 아니라 실제 자료형에 따라 분기가 결정된다. type(value) is int와 type(value) is str를 각각 확인한다.

세 호출
① measure("100.0"): 문자열이므로 문자 수 5 반환. 소수점도 한 문자이다.
② measure(100.0): float이므로 두 if를 모두 통과하지 않아 20 반환.
③ measure((100,200)): tuple이므로 역시 20 반환.

합은 5+20+20=45이다. 문자열 "100.0"을 숫자 100으로 해석하거나, 튜플 길이 2를 반환한다고 생각하지 않는다. 이 함수가 len을 호출하는 대상은 문자열뿐이다.

풀이 보강
문자열 "100.0"은 다섯 글자라 5이고, 숫자 100.0은 float여서 int 분기에 들어가지 않아 20이다. 튜플 (100,200)도 str이나 int가 아니므로 마지막 return 20을 사용한다. 튜플 원소 합이나 길이를 구하라는 코드가 없다. 겉에 보이는 숫자보다 실제 타입과 선택되는 return을 먼저 찾는다.`},{id:"2024-3-restored-11",session:"2024년 3회",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`class Base {
    int x = 3;
    int getX() { return x * 2; }
}
class Derived extends Base {
    int x = 7;
    @Override
    int getX() { return x * 3; }
}
class Main {
    public static void main(String[] args) {
        Base a = new Derived();
        Derived b = new Derived();
        System.out.print(a.getX() + a.x + b.getX() + b.x);
    }
}`,language:"java",choices:["52","32","56","44"],blanks:[{answer:"52"}],explanation:`정답
52

정답 근거
필드 은닉과 인스턴스 메서드 오버라이딩을 분리해 계산해야 한다. a의 선언 타입은 Base, b의 선언 타입은 Derived이며 실제 객체는 둘 다 Derived이다.

네 항 계산
① a.getX(): Derived.getX() → 7×3=21
② a.x: 선언 타입 Base의 필드 → 3
③ b.getX(): Derived.getX() → 7×3=21
④ b.x: 선언 타입 Derived의 필드 → 7
합계: 21+3+21+7=52

주의: a.getX() 안에서 쓰는 x는 실행된 Derived 메서드가 참조하는 Derived.x이다. a가 Base 타입이라는 이유로 그 메서드 안의 x까지 3으로 바꾸면 안 된다.

풀이 보강
항별로 a.getX()=21, a.x=3, b.getX()=21, b.x=7이다. 메서드는 둘 다 Derived의 구현을 쓰지만 필드는 변수의 선언 타입 Base·Derived에 따라 달라진다. Derived.getX 내부의 x는 Derived가 선언한 7을 읽는다. 네 항을 나란히 적어 21+3+21+7=52로 검산한다.`},{id:"2024-3-restored-12",session:"2024년 3회",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 연결 리스트에서 앞의 두 노드 값을 한 번 교환한 뒤 출력한 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`#include <stdio.h>
struct Node { int value; struct Node *next; };
int main(void) {
    struct Node first = {1, NULL};
    struct Node second = {2, NULL};
    struct Node third = {3, NULL};
    first.next = &third;
    third.next = &second;
    struct Node *head = &first;
    int saved = head->value;
    head->value = head->next->value;
    head->next->value = saved;
    for (struct Node *p = head; p != NULL; p = p->next) printf("%d", p->value);
    return 0;
}`,language:"c",choices:["132","312","231","321"],blanks:[{answer:"312"}],explanation:`정답
312

정답 근거
노드가 선언된 순서와 next로 연결된 순서는 다를 수 있다. 출력은 선언 순서가 아니라 head부터 next를 따라가는 순서이다.

변화 추적
① 연결: first(1) → third(3) → second(2)
② saved에 첫 값 1 저장
③ 첫 노드 값에 다음 노드 값 3 대입
④ 다음 노드 값에 saved의 1 대입
⑤ 연결은 그대로이며 값은 3 → 1 → 2가 된다.

출력 구분자가 없으므로 312이다. 노드의 value만 교환했고 next 포인터는 바꾸지 않았다. 선언 순서 first, second, third대로 출력한다고 생각하지 않는다.

풀이 보강
초기 연결은 first→third→second이고 값은 1→3→2다. saved=1을 보관한 뒤 first.value=3, third.value=1로 바꿔 값의 순서가 3→1→2가 된다. next 포인터는 한 번도 수정하지 않으므로 물리적 연결 순서는 그대로다. 값 교환과 노드의 연결 교환을 다른 연산으로 구별한다.`},{id:"2024-3-restored-13",session:"2024년 3회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"아래 설명에 해당하는 테스트 커버리지를 각각 고르시오.",blocks:[{type:"text",text:`① 모든 실행 가능한 명령문을 최소 한 번 실행
② 각 분기 결과의 참·거짓을 모두 실행
③ 각 개별 Boolean 조건의 참·거짓을 모두 검사`}],choices:["변경 조건/결정 커버리지(MC/DC)","경로 커버리지","조건 커버리지","문장 커버리지","분기 커버리지"],blanks:[{label:"①",answer:"문장 커버리지"},{label:"②",answer:"분기 커버리지"},{label:"③",answer:"조건 커버리지"}],explanation:`정답
①: 문장 커버리지
②: 분기 커버리지
③: 조건 커버리지

정답 근거
커버리지의 이름보다 무엇을 빠짐없이 실행·검사하는지 확인한다.

① 모든 명령문 → 문장 커버리지
각 실행 가능한 문장이 최소 한 번 실행됐는지를 본다.

② 각 분기의 양쪽 결과 → 분기 커버리지
각 결정식 전체가 참·거짓일 때의 흐름을 모두 실행한다.

③ 각 개별 Boolean 조건의 참·거짓 → 조건 커버리지
복합 결정식 안에 있는 원자 조건 각각을 검사한다.

구분 예시: 단축 평가가 없는 A XOR B에서 (참,참), (거짓,거짓)을 실행하면 각 조건은 참·거짓을 모두 갖지만 전체 식은 항상 거짓이다. 조건 커버리지를 만족해도 분기 커버리지는 만족하지 않을 수 있다. MC/DC는 개별 조건의 독립적 영향까지 확인한다.

풀이 보강
문장 커버리지의 분모는 실행 가능한 문장 수, 결정 커버리지의 분모는 결정 결과 수, 조건 커버리지의 분모는 개별 조건의 참·거짓 결과 수다. A && B 같은 복합식을 한 결정으로 볼지 두 개별 조건으로 볼지 구분한다. MC/DC는 각 조건의 독립 영향까지 요구하므로 단순히 각 조건을 한 번씩 바꾸는 것보다 강한 요구다.`},{id:"2024-3-restored-14",session:"2024년 3회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"복원 UML 그림의 관계 표현을 설명한 표를 보고, 해당 관계를 순서대로 고르시오.",blocks:[{type:"table",caption:"UML 관계 (그림의 표기를 설명으로 재구성)",headers:["번호","표현"],rows:[["①","두 클래스 사이의 실선"],["②","부모 클래스 방향의 빈 삼각형과 실선"],["③","다른 클래스 방향의 점선 화살표"]]}],choices:["일반화","실체화","연관","의존","합성"],blanks:[{label:"①",answer:"연관"},{label:"②",answer:"일반화"},{label:"③",answer:"의존"}],explanation:`정답
①: 연관
②: 일반화
③: 의존

정답 근거
UML 관계는 선 모양과 끝 기호를 함께 확인한다. 복원 그림의 표현을 설명으로 옮긴 표에 적용한다.

① 실선 = 연관
클래스 사이에 관련성이 있음을 표현한다.

② 실선 + 부모 방향의 빈 삼각형 = 일반화
자식이 부모의 한 종류인 상속 관계이다. 삼각형 끝이 부모를 향한다.

③ 점선 + 일반 화살표 = 의존
한 요소가 다른 요소를 사용하는 등 상대의 변화에 영향을 받는 관계이다.

오답 구분: 실체화는 점선 + 빈 삼각형이고, 합성은 전체 쪽에 채운 마름모를 둔다. 실선만 보고 상속으로 고르거나 점선이면 모두 실체화라고 판단하지 않는다.

풀이 보강
표기 판별은 선의 종류와 끝 장식을 함께 본다. 일반화의 빈 삼각형은 일반적인 부모 쪽을 가리키고, 실체화는 같은 빈 삼각형이라도 점선이다. 합성의 채운 마름모는 전체 쪽에 놓인다. 의존은 다른 요소의 변경이 이용하는 쪽에 영향을 줄 수 있는 사용 관계이므로 실선 연관과 구별한다.`},{id:"2024-3-restored-15",session:"2024년 3회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 설명에 해당하는 데이터베이스 키를 순서대로 고르시오.",blocks:[{type:"text",text:`① 다른 테이블의 기본키를 참조하는 키
② 유일성과 최소성을 모두 만족하는 식별자
③ 기본키로 선택되지 않은 후보키
④ 최소성은 요구하지 않고 유일성만 만족하면 되는 식별자`}],choices:["복합키","후보키","슈퍼키","외래키","대체키","기본키"],blanks:[{label:"①",answer:"외래키"},{label:"②",answer:"후보키"},{label:"③",answer:"대체키"},{label:"④",answer:"슈퍼키"}],explanation:`정답
①: 외래키
②: 후보키
③: 대체키
④: 슈퍼키

정답 근거
유일성은 행을 구별할 수 있는지, 최소성은 식별에 불필요한 속성이 없는지를 뜻한다.

① 외래키
다른 테이블의 기본키를 참조하는 키이다. 예: 학생.학과코드가 학과.학과코드를 참조한다.

② 후보키
유일성과 최소성을 모두 만족한다. 학번만으로 학생을 구별할 수 있고 더 뺄 속성이 없다면 후보키이다.

③ 대체키
후보키 중 기본키로 선택되지 않은 키이다. 학번과 이메일이 각각 후보키이고 학번을 기본키로 골랐다면 이메일은 대체키이다.

④ 슈퍼키
유일성만 요구하며 최소성은 필수가 아니다. 학번이 이미 유일하다면 {학번, 이름}도 슈퍼키이다.
주의: 복합키는 여러 속성으로 구성된 키라는 말로, 최소성을 만족하는지까지 정해 주지는 않는다.

풀이 보강
최소성은 속성 수가 다른 모든 키보다 가장 적다는 의미가 아니라, 그 키에서 어떤 속성도 빼면 유일성이 깨진다는 뜻이다. 예를 들어 학번과 이메일은 각각 후보키가 될 수 있고 둘 중 선택하지 않은 쪽은 대체키다. 두 속성으로 된 복합키도 불필요한 속성이 없다면 후보키가 될 수 있다.`},{id:"2024-3-restored-16",session:"2024년 3회",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`#include <stdio.h>
void update(int **values, int size) {
    for (int i = 0; i < size; ++i) {
        (*values)[i] = ((*values)[i] + i) % 5;
    }
}
int main(void) {
    int arr[] = {3, 1, 4, 1, 5};
    int *ptr = arr;
    update(&ptr, 5);
    printf("%d", arr[2]);
    return 0;
}`,language:"c",choices:["6","1","0","4"],blanks:[{answer:"1"}],explanation:`정답
1

정답 근거
values는 포인터 ptr의 주소를 받은 이중 포인터이다. *values로 ptr을 얻고, (*values)[i]로 원본 arr의 i번째 원소에 접근한다.

갱신 계산
i=0: (3+0)%5=3
i=1: (1+1)%5=2
i=2: (4+2)%5=1
i=3: (1+3)%5=4
i=4: (5+4)%5=4
결과 배열은 [3,2,1,4,4]이다.

출력 대상 arr[2]는 세 번째 값 1이다. %5는 나눈 몫이 아니라 나머지를 구한다. 포인터로 원본 원소를 수정하므로 함수가 끝난 뒤에도 변경된 값이 남는다.

풀이 보강
update 뒤 배열 전체는 [(3+0)%5,(1+1)%5,(4+2)%5,(1+3)%5,(5+4)%5]=[3,2,1,4,4]이다. printf는 총합이 아니라 arr[2] 하나를 출력하므로 1이다. values는 int**라서 *values가 배열을 가리키는 int*이고 그 뒤 [i]로 원소를 수정한다.`},{id:"2024-3-restored-17",session:"2024년 3회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"공용망 위에 논리적으로 사설 네트워크를 구성하는 기술의 영문 약어를 고르시오.",choices:["VPN","VLAN","DNS","NAT"],blanks:[{answer:"VPN"}],explanation:`정답
VPN

정답 근거
VPN은 Virtual Private Network이다. 공용망 위에 논리적 사설 연결을 구성한다는 설명과 연결한다.

예시
외부 사용자가 인터넷을 통해 회사 내부망에 접속할 때 VPN 연결을 구성할 수 있다. 보안 VPN은 터널링과 암호화·인증 등을 이용해 통신을 보호한다.

오답 구분
• VLAN: LAN을 논리적으로 나누는 기술
• NAT: 내부·외부 통신에서 주소를 변환
• DNS: 도메인 이름 등에 대응하는 주소 정보 제공
«공용망을 통한 사설 연결»과 «LAN 내부의 논리 분리»를 구분한다.

풀이 보강
VPN의 핵심은 공용 기반망 위의 논리적 사설 연결이다. 모든 VPN 기술이 정의상 암호화를 반드시 제공하는 것은 아니지만 인터넷 보안 VPN은 일반적으로 인증·암호화를 사용한다. VLAN은 로컬 네트워크의 논리적 분할, NAT는 주소 변환이므로 그 자체만으로 원격 구간의 보안 터널을 만드는 기술은 아니다.`},{id:"2024-3-restored-18",session:"2024년 3회",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`class Main {
    public static void main(String[] args) {
        int sum = 0;
        try {
            String value = null;
            value.length();
        } catch (NullPointerException error) {
            sum += 1;
        } finally {
            sum += 100;
        }
        System.out.print(sum);
    }
}`,language:"java",choices:["100","1","0","101"],blanks:[{answer:"101"}],explanation:`정답
101

정답 근거
null 참조에 대해 인스턴스 메서드를 호출하면 NullPointerException이 발생한다. 일치하는 catch가 실행된 뒤 finally가 실행된다.

sum 추적
① 초기 sum=0
② value=null 상태에서 value.length() 호출 → 예외
③ catch에서 sum+=1 → 1
④ finally에서 sum+=100 → 101
⑤ 마지막 출력문이 101 출력

오답 구분: 1은 finally를 빠뜨린 값이고 100은 catch를 빠뜨린 값이다. 이 코드에서는 두 블록이 모두 실행된다. 예외 발생 위치에서 try의 정상 흐름을 계속 진행한다고 생각하지 않는다.

풀이 보강
null은 문자열 "null"이 아니라 아무 객체도 가리키지 않는 참조다. 따라서 length() 호출에서 NullPointerException이 발생하고 catch에서 1, finally에서 100을 더한다. finally 이후 예외가 처리된 상태로 print에 도달해 101을 출력한다. 문자열 길이 0을 반환하는 빈 문자열과도 구별해야 한다.`},{id:"2024-3-restored-19",session:"2024년 3회",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`class Printer {
    void print(Integer value) { System.out.print("A" + value); }
    void print(Object value) { System.out.print("B" + value); }
    void print(Number value) { System.out.print("C" + value); }
}
class Collection<T> {
    T value;
    Collection(T value) { this.value = value; }
    void show() { new Printer().print(value); }
}
class Main {
    public static void main(String[] args) {
        new Collection<Integer>(0).show();
    }
}`,language:"java",choices:["B0","컴파일 오류","C0","A0"],blanks:[{answer:"B0"}],explanation:`정답
B0

정답 근거
오버로딩은 호출식을 컴파일할 때의 타입으로 선택한다. 실행할 때 실제 값의 타입을 보고 오버로드를 다시 고르지 않는다.

선택 과정
① Collection<T>의 T에는 extends Number 같은 상한이 없다. 따라서 이 제네릭 코드에서 value는 Object를 기준으로 다뤄진다.
② show() 안의 print(value)를 검사할 때 적용할 수 있는 메서드는 print(Object)이다.
③ new Collection<Integer>(0)으로 만들어도 이 호출이 print(Integer)로 바뀌지 않는다.
④ 선택된 메서드는 B와 값 0을 이어 출력하므로 B0이다.

오답 구분: A0은 실제 값이 Integer라는 이유로 오버로드를 동적으로 선택한 오해이다. C0은 T가 Number를 상한으로 가진다고 가정한 경우이다. 인스턴스 메서드 오버라이딩의 동적 선택과 오버로딩을 구별한다.

풀이 보강
타입 매개변수 T에는 상한이 없어 Collection의 본문에서 Object로 다룬다. show를 컴파일할 때 선택 가능한 오버로드는 print(Object)이고, 이후 Integer로 인스턴스화한다고 print(Integer)로 다시 선택하지 않는다. 실제 값의 타입으로 오버로딩을 런타임에 다시 결정한다는 생각이 A0·C0 오답을 만든다.`},{id:"2024-3-restored-20",session:"2024년 3회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"중앙 기지국이나 고정 인프라 없이 단말끼리 필요할 때 직접 형성하는 임시 무선 네트워크를 고르시오.",choices:["애드혹 네트워크(Ad-hoc Network)","가상 LAN(VLAN)","인프라스트럭처 네트워크(Infrastructure Network)","스토리지 영역 네트워크(SAN)"],blanks:[{answer:"애드혹 네트워크(Ad-hoc Network)"}],explanation:`정답
애드혹 네트워크(Ad-hoc Network)

정답 근거
애드혹 네트워크는 고정 기반 시설 없이 단말끼리 필요에 따라 직접 형성하는 임시 네트워크이다.

문제의 단서
중앙 기지국 없음 + 고정 인프라 없음 + 단말끼리 직접 구성
이 세 조건을 묶어 판단한다. 재난 현장이나 긴급·군사 통신처럼 기존 기반 시설을 이용하기 어려운 상황과 연결해 이해할 수 있다.

오답 구분
• 인프라스트럭처: 액세스 포인트 등 기존 기반 시설 사용
• SAN: 서버와 저장장치 연결을 위한 네트워크
• VLAN: 하나의 물리 LAN을 논리적으로 분리
임시로 사용한다는 이유만이 아니라 연결 구성 방식이 기준이다.

풀이 보강
중앙 액세스 포인트가 없다는 것이 인터넷 연결 여부나 암호화 유무를 뜻하지는 않는다. 단말들이 직접 연결을 형성하며 필요에 따라 여러 홉으로 전달할 수도 있다. 이동성이 강조되는 MANET은 모바일 애드혹 네트워크다. VLAN은 기존 LAN의 논리 구분이므로 물리 인프라 없이 임시로 자가 구성한다는 단서와 다르다.`}],X1=Object.freeze(Object.defineProperty({__proto__:null,default:Y1},Symbol.toStringTag,{value:"Module"})),Z1=[{id:"2024-2-restored-01",session:"2024년 2회",subjectId:8,subjectName:"Java",type:"code",question:"내용이 같아도 별도로 만든 배열들을 비교하는 다음 Java 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`class Main {
    static void compare(int[] left, int[] right) {
        System.out.print(left == right ? "O" : "N");
    }
    public static void main(String[] args) {
        int[] first = {1, 2, 3, 4};
        int[] second = {1, 2, 3, 4};
        int[] third = {1, 2, 3};
        compare(first, second);
        compare(first, third);
        compare(second, third);
    }
}`,language:"java",choices:["OOO","NNO","NNN","ONN"],blanks:[{answer:"NNN"}],explanation:`정답
NNN

정답 근거
Java 배열의 ==는 배열 길이나 원소의 값이 아니라 객체 참조의 동일성을 비교한다.

비교 순서
① first와 second: 내용은 {1,2,3,4}로 같지만 별도 배열 → N
② first와 third: 별도 배열 → N
③ second와 third: 별도 배열 → N
구분 공백 없이 이어 출력하므로 NNN이다.

주의: 길이가 같고 모든 원소가 같아도 같은 객체라는 뜻은 아니다. 비교 대상 중 하나를 다른 참조에 대입한 코드가 있는지 확인한다. 이 문제에는 그런 참조 공유가 없다.

풀이 보강
세 배열은 각각 별도 초기화 식으로 생성되어 서로 다른 객체다. first와 second는 길이와 원소가 같지만 참조는 다르고 third는 길이도 다르다. compare에서 세 쌍의 == 결과가 모두 false이므로 N을 세 번 출력한다. print는 줄바꿈·구분자를 추가하지 않아 NNN이라는 한 문자열이 된다.`},{id:"2024-2-restored-02",session:"2024년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"조회 성능 개선을 위해 정규화로 나눈 데이터를 다시 합치거나 중복 저장하는 설계 기법을 고르시오.",choices:["반정규화(역정규화)","정규화","인덱스 삭제","파티셔닝"],blanks:[{answer:"반정규화(역정규화)"}],explanation:`정답
반정규화(역정규화)

정답 근거
반정규화는 정규화된 테이블을 합치거나 데이터를 중복 저장하여 조회 성능 등을 개선하려는 설계 기법이다. 역정규화라고도 부른다.

판단 이유
정규화는 데이터 중복과 갱신 이상을 줄이기 위한 분리이고, 반정규화는 그 구조를 일부 완화한다. 조인 횟수 등이 줄 수 있는 대신 중복 데이터의 일관성을 직접 관리할 부담이 커진다.

오답 구분: 파티셔닝은 테이블을 기준에 따라 나누는 방법이다. 인덱스를 삭제하는 행위 자체도 반정규화의 정의가 아니다. «다시 합치거나 중복 저장»이라는 설명을 기준으로 고른다.

풀이 보강
반정규화 후에는 같은 사실을 여러 곳에 저장할 수 있어 갱신 이상이 다시 생길 수 있다. 따라서 조회 비용 감소와 수정 시 정합성 유지 비용을 함께 고려한다. 조인을 없앴다는 이유만으로 무조건 성능이 좋아지는 것은 아니며 실제 접근 패턴과 병목이 근거가 되어야 한다. 인덱스를 만드는 작업 자체와도 구별한다.`},{id:"2024-2-restored-03",session:"2024년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"SQL의 빈칸 ①~④에 들어갈 키워드를 순서대로 고르시오.",codeSnippet:`-- staff(id, name), archive(id, name)이 존재한다고 가정한다.
INSERT INTO staff(id, name) ( ① ) (1, 'Kim');
INSERT INTO archive(id, name) ( ② ) id, name FROM staff;
SELECT * ( ③ ) staff;
UPDATE staff ( ④ ) name = 'Lee' WHERE id = 1;`,language:"sql",choices:["VALUES","WHERE","SET","UPDATE","FROM","GROUP BY","SELECT","INTO"],blanks:[{label:"①",answer:"VALUES"},{label:"②",answer:"SELECT"},{label:"③",answer:"FROM"},{label:"④",answer:"SET"}],explanation:`정답
①: VALUES
②: SELECT
③: FROM
④: SET

정답 근거
네 빈칸은 각각 값을 직접 넣기, 조회 결과 넣기, 조회 대상 지정, 수정할 값 지정에 대응한다.

① VALUES
INSERT INTO staff(id, name) VALUES (1, 'Kim');
직접 나열한 값으로 staff에 행을 넣는다.

② SELECT
INSERT INTO archive(id, name) SELECT id, name FROM staff;
staff를 조회한 결과를 archive에 삽입한다.

③ FROM
SELECT * FROM staff;
조회할 테이블을 지정한다.

④ SET
UPDATE staff SET name='Lee' WHERE id=1;
변경할 열과 값을 지정하고 WHERE는 변경 대상을 제한한다.

주의: VALUES와 SELECT는 둘 다 INSERT에 등장할 수 있지만 뒤에 직접 값 목록이 오는지, 조회 구문이 오는지에 따라 고른다.

풀이 보강
첫 문장 뒤 staff에는 (1,Kim), 둘째 뒤 archive에도 (1,Kim)이 저장된다. 셋째는 staff를 조회하고 넷째는 staff만 (1,Lee)로 바꾼다. archive에 복사된 이름은 참조로 연결되어 있지 않아 Kim으로 남는다. SELECT 결과 복사는 이후 원본 변경을 자동 동기화하는 것이 아니라는 점까지 함께 확인한다.`},{id:"2024-2-restored-04",session:"2024년 2회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"튜플 5개와 속성 4개로 이루어진 릴레이션의 카디널리티와 차수를 각각 고르시오.",choices:["3","4","9","5","6"],blanks:[{label:"카디널리티",answer:"5"},{label:"차수",answer:"4"}],explanation:`정답
카디널리티: 5
차수: 4

정답 근거
관계형 데이터베이스에서 행 하나는 튜플, 열 하나는 속성이라고 부른다. 행 수와 열 수의 이름을 구분하는 문제이다.

① 카디널리티(Cardinality)
릴레이션에 들어 있는 튜플의 수이다. 튜플이 5개이므로 5이다.

② 차수(Degree)
릴레이션을 구성하는 속성의 수이다. 속성이 4개이므로 4이다.

주의: 이 문항에서 카디널리티는 릴레이션의 행 수라는 뜻이다. 키 값의 합이나 셀 전체 개수 5×4=20을 구하는 것이 아니며, 요구 순서도 카디널리티가 먼저이다.

풀이 보강
릴레이션을 표로 생각하면 행이 세로로 5개, 열이 가로로 4개라는 뜻이다. 카디널리티와 차수의 순서를 바꿔 쓰지 않는다. 행을 한 개 삽입하면 카디널리티는 6이 되지만 차수는 4로 유지되고, 속성을 추가하면 차수가 변한다. 데이터 상태 변경과 스키마 변경을 구별하는 데도 같은 개념을 쓴다.`},{id:"2024-2-restored-05",session:"2024년 2회",subjectId:5,subjectName:"정보 보안",type:"text",question:"IP 계층에서 AH와 ESP를 이용해 IP 패킷의 인증·암호화 등을 제공하는 보안 체계를 고르시오.",choices:["TLS","HTTPS","SSH","IPsec"],blanks:[{answer:"IPsec"}],explanation:`정답
IPsec

정답 근거
Network layer, IP 패킷 보호, AH·ESP라는 단서가 모두 IPsec을 가리킨다. 보안 기능을 제공하는 프로토콜 모음이며 VPN 구성에 활용한다.

역할 구분
AH는 인증·무결성 등을 제공하지만 암호화로 내용을 숨기지는 않는다. ESP는 암호화를 통한 기밀성 등을 제공한다. 따라서 AH와 ESP의 역할을 같은 것으로 외우면 안 된다.

오답 구분: TLS는 응용 통신을 보호하는 데 사용되고 HTTPS는 HTTP에 TLS를 적용한 방식이다. SSH는 보안 원격 접속 등에 사용된다. 이들은 IPsec의 AH·ESP 체계가 아니다.

풀이 보강
AH는 무결성·출처 인증 등을 담당하며 데이터 암호화 기능은 없다. ESP는 선택한 보안 설정에 따라 기밀성과 무결성·인증 등을 제공한다. 전송 모드는 원래 IP 패킷의 상위 계층 부분을, 터널 모드는 원래 IP 패킷 전체를 새 패킷 안에 넣어 보호한다. 두 모드 모두 IPsec 체계 안에서 구분하는 것이다.`},{id:"2024-2-restored-06",session:"2024년 2회",subjectId:9,subjectName:"Python",type:"code",question:"다음 Python 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`def occurrences(source, part):
    total = 0
    for start in range(len(source)):
        if source[start:start + len(part)] == part:
            total += 1
    return total

value = "abdcabcabca"
print(f"ab{occurrences(value, 'ab')}ca{occurrences(value, 'ca')}")`,language:"python",choices:["ab3ca2","ab2ca3","ab2ca2","ab3ca3"],blanks:[{answer:"ab3ca3"}],explanation:`정답
ab3ca3

정답 근거
occurrences는 문자열의 모든 시작 인덱스에서 길이가 같은 슬라이스를 꺼내 part와 비교한다. 같은 부분 문자열을 찾을 때마다 total을 1씩 더한다.

출현 위치 (인덱스는 0부터)
원문: abdcabcabca
• ab: 0~1, 4~5, 7~8 → 3회
• ca: 3~4, 6~7, 9~10 → 3회

문자열 조합
f-string에 두 횟수를 넣으면 ab + 3 + ca + 3의 형식이 되어 ab3ca3을 출력한다.

주의: 각 글자의 수를 세는 것이 아니라 ab와 ca라는 연속된 두 글자를 센다. 이 구현은 시작 위치를 한 칸씩 옮기므로 겹치는 출현도 검사한다.

풀이 보강
ab가 시작하는 인덱스는 0,4,7이고 ca가 시작하는 인덱스는 3,6,9다. 함수는 모든 시작 위치를 검사하므로 같은 문자가 중복되더라도 각 일치 위치를 센다. 두 횟수 3을 f-string의 ab·ca 뒤에 삽입해 ab3ca3을 만든다. len(part)는 2이므로 비교 슬라이스는 매번 두 글자다.`},{id:"2024-2-restored-07",session:"2024년 2회",subjectId:5,subjectName:"정보 보안",type:"text",question:"블록 크기가 128비트이고 키 길이로 128·192·256비트를 지원하는 대칭키 블록 암호 표준을 고르시오.",choices:["AES","SHA-256","DES","RSA"],blanks:[{answer:"AES"}],explanation:`정답
AES

정답 근거
128비트 블록과 128·192·256비트 키를 지원하는 대칭 블록 암호라는 조합이 AES이다.

개념 구분
블록 크기는 한 번에 처리하는 데이터 단위이고, 키 길이는 암호화에 쓰는 키의 비트 수이다. AES의 블록 크기는 키 길이를 바꿔도 128비트이다.

오답 구분
• DES: 블록 64비트, 유효 키 56비트
• RSA: 공개키와 개인키를 사용하는 비대칭키 암호
• SHA-256: 256비트 해시값을 만드는 함수
이름에 숫자가 있다고 그 숫자가 모두 암호 키 길이를 뜻하는 것은 아니다.

풀이 보강
AES-256에서 256은 블록 크기가 아니라 키 길이다. 세 종류 모두 블록은 128비트이며 키 길이에 따라 라운드 수는 10·12·14로 달라진다. 대칭키 암호라 복호화가 가능한 반면 SHA-256은 256비트 다이제스트를 만드는 해시다. 이름에 같은 숫자가 있어도 역할과 길이의 의미를 구별한다.`},{id:"2024-2-restored-08",session:"2024년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"패킷 교환의 연결형 전송과 비연결형 전송에 해당하는 방식을 각각 고르시오.",choices:["메시지 교환","회선 교환","가상회선","데이터그램"],blanks:[{label:"① 연결형",answer:"가상회선"},{label:"② 비연결형",answer:"데이터그램"}],explanation:`정답
① 연결형: 가상회선
② 비연결형: 데이터그램

정답 근거
패킷 교환은 연결을 미리 설정하는지에 따라 가상회선과 데이터그램으로 나눠 이해한다.

① 연결형 = 가상회선
데이터를 보내기 전에 논리적 경로를 설정하고 패킷들이 그 연결을 따라 전달된다.

② 비연결형 = 데이터그램
미리 연결하지 않고 패킷마다 독립적으로 목적지까지 전달한다. 서로 다른 경로를 갈 수 있어 도착 순서가 달라질 수도 있다.

오답 구분: 회선 교환은 전용 회선을 확보하는 별도의 교환 방식이고, 메시지 교환은 메시지 단위의 저장·전달 방식이다. 문제는 «패킷 교환 안의 두 방식»을 묻는다.

풀이 보강
가상회선은 연결 상태를 설정하고 같은 논리 경로를 쓰지만 물리 통신 회선을 독점한다는 뜻은 아니다. 데이터그램은 패킷마다 독립적으로 전달되어 경로와 도착 순서가 달라질 수 있다. 연결형 패킷 교환과 전용 자원을 확보하는 회선 교환을 따로 구분하면 «경로 설정»이라는 공통 표현에 속지 않는다.`},{id:"2024-2-restored-09",session:"2024년 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"앞 기능의 출력이 다음 기능의 입력이 되도록 기능들을 묶은 모듈의 응집도를 고르시오.",choices:["교환적(통신적) 응집도","순차적 응집도","시간적 응집도","절차적 응집도"],blanks:[{answer:"순차적 응집도"}],explanation:`정답
순차적 응집도

정답 근거
앞 기능의 출력이 뒤 기능의 입력으로 이어지므로 순차적 응집도이다. 단순히 정해진 순서가 있다는 것보다 데이터가 연쇄적으로 전달된다는 점이 중요하다.

예시
파일 읽기 → 읽은 데이터 정제 → 정제한 결과 저장처럼 앞 단계의 결과를 다음 단계가 사용한다.

오답 구분
• 절차적: 실행 순서가 관련된 기능들의 모음
• 시간적: 비슷한 시점에 실행하는 작업들의 모음
• 통신적: 동일한 입력·출력 데이터를 사용하는 기능들의 모음
«출력이 다음 입력»이라는 문장을 발견하면 순차적을 우선 판단한다.

풀이 보강
입력 읽기 → 읽은 데이터 변환 → 변환 결과 출력처럼 앞 작업의 결과를 다음 작업이 직접 받아 쓰는 데이터 흐름이 핵심이다. 절차적 응집도는 순서만 연결될 수 있고, 교환적 응집도는 같은 자료를 함께 사용한다는 연결이다. 모두 차례대로 실행될 수 있으므로 «앞 출력이 다음 입력»이라는 추가 조건을 확인한다.`},{id:"2024-2-restored-10",session:"2024년 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"컬렉션의 내부 구조를 공개하지 않고 요소들을 차례대로 접근하게 하는 행위 패턴을 고르시오.",choices:["어댑터(Adapter)","팩터리 메서드(Factory Method)","컴포지트(Composite)","이터레이터(Iterator)"],blanks:[{answer:"이터레이터(Iterator)"}],explanation:`정답
이터레이터(Iterator)

정답 근거
이터레이터는 컬렉션의 내부 저장 방식을 드러내지 않고 원소를 차례대로 접근하도록 하는 행위 패턴이다.

동작 이해
클라이언트는 다음 원소를 얻는 공통 순회 인터페이스를 사용한다. 실제 자료구조가 배열인지 연결 리스트인지에 덜 의존하도록 순회 방법을 캡슐화한다.

오답 구분
• 어댑터: 인터페이스 호환성 해결
• 팩터리 메서드: 객체 생성 타입 결정
• 컴포지트: 부분과 전체를 트리 구조로 표현
«내부 구조를 노출하지 않는 순차 접근»이 이터레이터의 핵심이다.

풀이 보강
클라이언트는 컬렉션이 배열인지 연결 리스트인지 몰라도 반복자의 다음 요소 조회 기능을 이용할 수 있다. 순회 방식과 저장 구조를 분리하는 것이 목적이며 내부 자료구조를 다른 인터페이스로 변환하는 어댑터와 다르다. 컴포지트는 부분·전체의 트리 구조를 표현하므로 순차 접근이라는 설명의 직접적인 답이 아니다.`},{id:"2024-2-restored-11",session:"2024년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"아래 연결 관계에서 RIP의 홉 수 기준으로 A에서 F까지의 최단 경로를 고르시오.",blocks:[{type:"text",text:"복원 네트워크 그림을 연결 표로 옮겼습니다. 링크는 모두 양방향입니다. RIP에서는 아래 링크 비용 값을 합산하지 않고 링크 하나를 1홉으로 셉니다."},{type:"table",caption:"네트워크 연결",headers:["노드 1","노드 2","그림에 표시된 링크 비용"],rows:[["A","B","2"],["A","D","1"],["B","D","2"],["D","C","2"],["C","E","1"],["C","F","5"],["E","F","2"]]}],choices:["A → D → C → F","A → D → E → F","A → D → C → E → F","A → B → D → C → F"],blanks:[{answer:"A → D → C → F"}],explanation:`정답
A → D → C → F

정답 근거
RIP의 경로 선택 기준은 홉 수이다. 이 문항에서는 표시된 비용 숫자와 관계없이 링크 하나를 지날 때마다 1홉으로 센다.

경로 비교
• A → D → C → F: 3홉
• A → D → C → E → F: 4홉
• A → B → D → C → F: 4홉
• A → D → E → F: D-E 링크가 없어 성립하지 않는 경로

따라서 유효한 보기 중 가장 짧은 3홉 경로 A → D → C → F를 고른다.

주의: 링크 비용 합을 계산하면 A-D-C-F는 1+2+5=8이고 E를 거친 경로는 1+2+1+2=6이다. 비용 합이 더 작아도 RIP의 홉 수 비교에서는 4홉 경로가 정답이 아니다.

풀이 보강
A→D→C→F는 링크가 3개여서 3홉이다. A→D→C→E→F는 비용 합이 더 작아도 4홉이므로 이 문항의 RIP 기준에서는 선택하지 않는다. A→D→E→F는 D와 E를 직접 잇는 링크가 없어 유효 경로도 아니다. 먼저 연결의 존재, 다음으로 홉 수를 확인해야 한다.`},{id:"2024-2-restored-12",session:"2024년 2회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"처음에는 CPU가 비어 있고 문맥 교환 비용은 없을 때, SRT(선점형 SJF) 스케줄링의 평균 대기시간을 고르시오.",blocks:[{type:"table",caption:"프로세스",headers:["이름","도착 시간","실행 시간"],rows:[["A","0","8"],["B","1","4"],["C","2","9"],["D","3","5"]]}],choices:["6.5","8.25","5.5","7"],blanks:[{answer:"6.5"}],explanation:`정답
6.5

정답 근거
SRT는 도착해 있는 프로세스 중 남은 실행시간이 가장 짧은 것을 실행한다. 더 짧은 프로세스가 도착하면 실행 중인 작업을 선점할 수 있다.

실행 구간
0~1: A 실행, 남은 시간 7
1~5: B 실행. C와 D가 도착해도 B의 남은 시간이 더 짧아 계속 실행
5~10: D 실행 (5 < A의 7 < C의 9)
10~17: 남은 A 실행
17~26: C 실행

대기시간 = 완료시간 - 도착시간 - 실행시간
A: 17-0-8=9
B: 5-1-4=0
C: 26-2-9=15
D: 10-3-5=2

평균 = (9+0+15+2)/4 = 26/4 = 6.5이다. 완료-도착만 계산하면 대기시간이 아니라 반환시간이다. A는 선점된 뒤 기다린 시간도 포함해야 한다.

풀이 보강
새 작업이 도착할 때는 원래 실행 시간이 아니라 현재 남은 시간을 비교한다. 시각 2에는 실행 중인 작업의 남은 시간이 3, 시각 3에는 2이므로 새 작업이 CPU를 빼앗지 못한다. 반환시간은 완료−도착, 대기시간은 반환시간−실행시간이다. 처음 CPU를 받기까지의 응답시간과 누적 대기시간을 구별한다.`},{id:"2024-2-restored-13",session:"2024년 2회",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`#include <stdio.h>
int main(void) {
    int values[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};
    int *rows[] = {values[1], values[2]};
    printf("%d", rows[1][1] + *(rows[1] + 2) + **rows);
    return 0;
}`,language:"c",choices:["12","18","21","24"],blanks:[{answer:"21"}],explanation:`정답
21

정답 근거
포인터 배열 rows의 각 원소가 values의 어느 행을 가리키는지 먼저 표시한다.

행 연결
rows[0] → values[1] = {4,5,6}
rows[1] → values[2] = {7,8,9}

각 항 계산
① rows[1][1] = 8
② *(rows[1]+2) = rows[1][2] = 9
③ **rows = *(rows[0]) = 4
따라서 8+9+4=21이다.

주의: **rows는 원본 배열 전체의 첫 원소 1이 아니다. rows의 첫 포인터가 두 번째 행을 가리키므로 그 행의 첫 값 4를 읽는다.

풀이 보강
rows[0]은 values[1]={4,5,6}, rows[1]은 values[2]={7,8,9}를 가리킨다. 따라서 rows[1][1]=8, *(rows[1]+2)=9, **rows=rows[0][0]=4다. 합은 8+9+4=21이며, **rows가 첫 2차원 배열 원소 values[0][0]이 아니라 첫 행 포인터가 가리키는 값이라는 점을 확인한다.`},{id:"2024-2-restored-14",session:"2024년 2회",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java 코드가 출력하는 홀수 합과 짝수 합을 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`interface ParitySum {
    int sum(int[] values, boolean odd);
}
class Calculator implements ParitySum {
    public int sum(int[] values, boolean odd) {
        int total = 0;
        for (int value : values) {
            if ((value % 2 != 0) == odd) total += value;
        }
        return total;
    }
}
class Main {
    public static void main(String[] args) {
        int[] values = {1,2,3,4,5,6,7,8,9};
        ParitySum calculator = new Calculator();
        System.out.print(calculator.sum(values, true) + ", " + calculator.sum(values, false));
    }
}`,language:"java",choices:["25, 20","20, 25","25, 25","20, 20"],blanks:[{answer:"25, 20"}],explanation:`정답
25, 20

정답 근거
Calculator는 ParitySum 인터페이스의 sum을 구현한다. odd 인수가 true이면 홀수, false이면 짝수를 누적한다.

두 호출 계산
① sum(values, true)
1+3+5+7+9 = 25
② sum(values, false)
2+4+6+8 = 20
③ 가운데 쉼표와 공백을 넣어 25, 20을 출력한다.

주의: 조건 (value % 2 != 0) == odd를 읽을 때 odd=false이면 나머지가 0인 값이 선택된다. 홀수·짝수 출력 순서를 바꾸거나 9를 범위에서 빼지 않는다.

풀이 보강
odd=true이면 (value%2!=0)가 참인 값만, false이면 그 식이 거짓인 값만 합친다. 홀수는 1+3+5+7+9=25, 짝수는 2+4+6+8=20이다. 두 합을 더하면 전체 합 45가 되어 검산할 수 있다. 출력 순서는 true 호출 뒤 false 호출이며 가운데 문자열 ", "가 붙는다.`},{id:"2024-2-restored-15",session:"2024년 2회",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`#include <stdio.h>
void copy_text(char *target, const char *source) {
    while (*source != '\\0') {
        *target++ = *source++;
    }
    *target = '\\0';
}
int main(void) {
    char buffer[50] = "teststring";
    copy_text(buffer, "first");
    int total = 0;
    for (int i = 0; buffer[i] != '\\0'; ++i) total += i;
    printf("%d", total);
    return 0;
}`,language:"c",choices:["45","5","10","15"],blanks:[{answer:"10"}],explanation:`정답
10

정답 근거
문자 복사 후 널 종료 문자를 어디에 쓰는지가 문자열의 최종 길이를 결정한다.

실행 순서
① buffer에는 처음 teststring이 들어 있다.
② copy_text가 first의 다섯 문자를 앞부분에 복사한다.
③ 바로 뒤 buffer[5]에 \\0을 넣어 문자열을 끝낸다.
④ 반복문은 인덱스 0~4까지만 돌며 i를 더한다.
⑤ 0+1+2+3+4=10이다.

주의: 기존 teststring의 남은 바이트가 뒤에 있어도 \\0 뒤는 현재 문자열에 포함되지 않는다. 더하는 것은 문자 코드나 길이 5가 아니라 각 인덱스이다.

풀이 보강
copy_text가 first 다섯 글자를 덮어쓴 뒤 buffer[5]에 널 문자를 넣어 논리적 문자열 길이를 5로 만든다. 뒤쪽의 이전 문자 일부가 메모리에 남아도 첫 널 뒤라 순회하지 않는다. 합하는 것은 문자 코드나 문자 수가 아니라 인덱스 0+1+2+3+4=10이다. 문자열 끝 조건과 누적 대상을 함께 읽는다.`},{id:"2024-2-restored-16",session:"2024년 2회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다른 모듈의 내부 처리 흐름을 선택하도록 제어 플래그를 전달하는 결합도를 고르시오.",choices:["공통 결합도(Common Coupling)","제어 결합도(Control Coupling)","내용 결합도(Content Coupling)","자료 결합도(Data Coupling)"],blanks:[{answer:"제어 결합도(Control Coupling)"}],explanation:`정답
제어 결합도(Control Coupling)

정답 근거
제어 결합도는 다른 모듈의 내부 처리 흐름을 선택하도록 제어 정보를 전달하는 경우이다.

예시
한 모듈이 save 또는 delete를 선택하는 플래그를 넘겨 상대 모듈이 분기하게 한다. 전달 정보가 계산에 쓸 값인지, 실행할 처리를 지시하는 값인지 구분해야 한다.

오답 구분
• 자료 결합도: 필요한 단순 데이터 전달
• 공통 결합도: 전역 데이터 영역 공유
• 내용 결합도: 다른 모듈 내부 코드·데이터를 직접 참조하거나 수정
이 문제는 직접 내부를 수정하는 것이 아니라 플래그로 실행을 제어한다.

풀이 보강
호출자가 피호출자의 내부 처리 종류를 알아야 하므로 변경 영향이 커질 수 있다. 같은 정수 인수라도 수량·금액처럼 계산에 쓰면 자료 전달이고, 1이면 저장·2이면 삭제처럼 분기를 지시하면 제어 전달이다. 매개변수의 자료형보다 역할을 기준으로 결합도를 판단하고, 전역 변수 사용 여부도 따로 확인한다.`},{id:"2024-2-restored-17",session:"2024년 2회",subjectId:8,subjectName:"Java",type:"code",question:"다음 재귀 함수가 반환하여 출력하는 문자열을 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`class Main {
    static String unique(String value, int index, boolean[] used) {
        if (index < 0) return "";
        char current = value.charAt(index);
        String prefix = unique(value, index - 1, used);
        if (used[current]) return prefix;
        used[current] = true;
        return current + prefix;
    }
    public static void main(String[] args) {
        String value = "abacabcd";
        System.out.print(unique(value, value.length() - 1, new boolean[256]));
    }
}`,language:"java",choices:["abcd","dcbacaba","dcba","abacabcd"],blanks:[{answer:"dcba"}],explanation:`정답
dcba

정답 근거
재귀 함수에서 문자를 읽는 시점과 used에 방문 표시하는 시점은 다르다. 먼저 index-1을 호출하고, 그 호출이 돌아온 뒤 현재 문자의 중복 여부를 검사한다.

반환 단계 추적
index 0의 a: 처음 등장 → a
index 1의 b: 처음 등장 → ba
index 2의 a: 이미 사용 → ba
index 3의 c: 처음 등장 → cba
index 4의 a: 이미 사용 → cba
index 5의 b: 이미 사용 → cba
index 6의 c: 이미 사용 → cba
index 7의 d: 처음 등장 → dcba

따라서 dcba이다. 중복이 아닌 문자를 결과 뒤가 아니라 앞에 붙이는 current + prefix가 핵심이다. 오른쪽에서 시작한다는 이유만으로 방문 표시도 오른쪽부터라고 가정하면 안 된다.

풀이 보강
재귀 호출이 먼저 인덱스 -1까지 내려간 뒤 복귀하면서 a,b,a,c,a,b,c,d를 처리한다. 이미 본 문자는 건너뛰고 새 문자는 prefix 앞에 붙여 a→ba→cba→dcba가 된다. 앞에서부터 새 문자를 확인하지만 앞에 붙이기 때문에 출력 순서는 뒤집힌다. 뒤에서부터 중복을 제거한다고 단순히 설명하면 실제 실행 순서를 놓친다.`},{id:"2024-2-restored-18",session:"2024년 2회",subjectId:7,subjectName:"C 언어",type:"code",question:"값 전달과 switch의 fall-through에 주의하여 다음 C 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`#include <stdio.h>
void swap(int left, int right) {
    int saved = left;
    left = right;
    right = saved;
}
int main(void) {
    int a = 11, b = 19;
    swap(a, b);
    switch (a) {
        case 1: b += 1;
        case 11: b += 2;
        default: b += 3; break;
    }
    printf("%d", a - b);
    return 0;
}`,language:"c",choices:["-8","-10","-13","8"],blanks:[{answer:"-13"}],explanation:`정답
-13

정답 근거
먼저 swap의 효과를 판단하고, 그 뒤 switch를 실행해야 한다.

① 값 전달
swap의 left·right는 a·b의 복사본이다. 함수 안에서 두 값을 바꿔도 main의 a=11, b=19는 그대로이다.

② switch 실행
a가 11이므로 case 1은 건너뛰고 case 11에서 시작한다. b+=2로 21이 된다. break가 없어 default까지 내려가 b+=3을 적용하므로 b=24이다.

③ 출력
a-b = 11-24 = -13이다.

주의: default는 어떤 case도 맞지 않을 때만 실행되는 것은 아니다. 앞 case에서 break 없이 내려오면 실행될 수 있다. -10은 default를 빠뜨린 중간 계산값이다.

풀이 보강
swap은 정수의 복사본을 교환하므로 호출 뒤에도 a=11,b=19다. switch는 case 11에서 시작해 b=21이 되고 break가 없어 default까지 내려가 b=24가 된다. case 1은 위에 있어 실행하지 않는다. 따라서 11−24=−13이며, 함수를 참조 전달로 오해하거나 default를 무조건 제외하면 다른 보기가 나온다.`},{id:"2024-2-restored-19",session:"2024년 2회",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 단일 연결 리스트에서 출력되는 값을 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`#include <stdio.h>
struct Node { int value; struct Node *next; };
int main(void) {
    struct Node third = {30, NULL};
    struct Node second = {20, &third};
    struct Node first = {10, &second};
    struct Node *head = &first;
    printf("%d", head->next->value);
    return 0;
}`,language:"c",choices:["20","30","10","0"],blanks:[{answer:"20"}],explanation:`정답
20

정답 근거
연결 리스트에서는 next를 따라갈 때마다 다음 노드 하나로 이동한다. value는 도착한 노드의 데이터이다.

포인터 추적
① head → first (값 10)
② head->next → second (값 20)
③ head->next->value → second.value = 20

오답 구분: 10은 head->value, 30은 head->next->next->value이다. next를 한 번 따라갔는지 두 번 따라갔는지 세면서 푼다. 노드의 주소를 출력하는 코드가 아니라 정수 필드 값을 출력한다.

풀이 보강
head는 first이고 head->next는 second의 주소다. 그 뒤 ->value를 적용하면 second.value=20이다. head->value라면 10, head->next->next->value라면 30이므로 화살표 횟수를 세어 구별할 수 있다. next는 값 자체가 아니라 다음 노드의 포인터이므로 중간 주소와 최종 데이터를 따로 해석한다.`},{id:"2024-2-restored-20",session:"2024년 2회",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`class Main {
    public static void main(String[] args) {
        String text = "ITISTESTSTRING";
        String[] parts = text.split("T");
        System.out.print(parts[3]);
    }
}`,language:"java",choices:["S","RING","ES","IS"],blanks:[{answer:"S"}],explanation:`정답
S

정답 근거
String.split("T")는 대문자 T를 구분자로 사용한다. 구분자 T 자체는 결과 원소에 들어가지 않는다.

분리 결과와 인덱스
0: I
1: IS
2: ES
3: S
4: RING

코드는 parts[3]을 출력하므로 네 번째 문자열 S가 정답이다. ES는 인덱스 2이고 RING은 인덱스 4이다. 원본 문자열의 문자 인덱스 3을 찾는 문제와 혼동하지 않는다.

풀이 보강
T 기준 분할 결과는 ["I","IS","ES","S","RING"]이다. 문자열 첫 글자가 T가 아니므로 맨 앞 빈 항목은 없으며 인덱스 3은 네 번째 조각 S다. split은 구분자를 결과에서 빼고 조각을 배열로 반환한다. 원래 문자열의 3번 문자나 세 번째 조각 ES를 선택하는 문제와 구별한다.`}],e0=Object.freeze(Object.defineProperty({__proto__:null,default:Z1},Symbol.toStringTag,{value:"Module"})),n0=[{id:"2024-1-restored-01",session:"2024년 1회",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`class Connection {
    private static final Connection shared = new Connection();
    private int count;
    static Connection get() { return shared; }
    void count() { count += 1; }
    int getCount() { return count; }
}
class Main {
    public static void main(String[] args) {
        Connection first = Connection.get();
        first.count();
        Connection second = Connection.get();
        second.count();
        Connection third = Connection.get();
        third.count();
        first.count();
        System.out.print(first.getCount());
    }
}`,language:"java",choices:["1","3","4","0"],blanks:[{answer:"4"}],explanation:`정답
4

정답 근거
get()을 여러 번 호출해도 shared에 들어 있는 Connection 객체는 하나이다. 참조가 세 개여도 count 필드는 같은 객체에 속한다.

증가 순서
초기 count=0
① first.count() → 1
② second.count() → 2
③ third.count() → 3
④ first.count()를 한 번 더 실행 → 4
⑤ first.getCount()는 최종 공유 값 4를 반환한다.

주의: 호출마다 새 객체가 생긴다고 생각하면 1로 오해하기 쉽다. 앞의 세 번만 세어 3이라고 답하지 말고 마지막 first.count()까지 확인한다.

풀이 보강
get을 세 번 호출해도 shared가 가리키는 같은 Connection 하나를 반환한다. count 호출은 first에서 두 번, second와 third에서 한 번씩 총 네 번이다. count는 인스턴스 필드지만 세 참조가 같은 객체를 공유해 누적된다. 생성자가 private이 아니므로 이 코드만으로 외부의 추가 인스턴스 생성까지 완전히 차단하는 것은 아니다.`},{id:"2024-1-restored-02",session:"2024년 1회",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`#include <stdio.h>
int main(void) {
    int v1 = 0, v2 = 35, v3 = 29;
    if (v1 > v2 ? v2 : v1) {
        v2 <<= 2;
    } else {
        v3 <<= 2;
    }
    printf("%d", v2 + v3);
    return 0;
}`,language:"c",choices:["256","64","151","169"],blanks:[{answer:"151"}],explanation:`정답
151

정답 근거
조건 연산자의 조건은 v1 > v2이다. 선택된 값이 다시 if의 참·거짓 판단에 사용된다.

계산 순서
① 0 > 35는 거짓이므로 v1을 선택한다. 값은 0이다.
② if(0)이 거짓이어서 else로 이동한다.
③ v3 = 29 << 2 = 29 × 4 = 116이다.
④ v2는 변경되지 않아 35이다.
⑤ 출력 식 v2+v3 = 35+116 = 151이다.

주의: 조건 연산자는 비교 결과 자체가 아니라 v2 또는 v1을 반환한다. 또한 출력 대상은 v3 단독이 아니라 v2와 v3의 합이다.

풀이 보강
조건식은 (v1>v2)?v2:v1로 묶인다. 0>35가 거짓이라 선택된 값은 v1=0이고 if 전체가 거짓이 된다. 따라서 v2는 35를 유지하고 v3만 29×4=116이 된다. 최종 출력은 바뀐 v3 하나가 아니라 v2+v3이므로 35+116=151이다. 삼항식 결과와 if 분기를 순서대로 계산한다.`},{id:"2024-1-restored-03",session:"2024년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"다음 네 가지 응집도를 강한 순서부터 차례대로 고르시오.",blocks:[{type:"text",text:"비교 대상: 기능적, 교환적(통신적), 시간적, 우연적 응집도"}],choices:["순차적","기능적","논리적","우연적","절차적","시간적","교환적(통신적)"],blanks:[{label:"1순위",answer:"기능적"},{label:"2순위",answer:"교환적(통신적)"},{label:"3순위",answer:"시간적"},{label:"4순위",answer:"우연적"}],explanation:`정답
1순위: 기능적
2순위: 교환적(통신적)
3순위: 시간적
4순위: 우연적

정답 근거
응집도는 모듈 내부 요소들이 하나의 목적에 얼마나 밀접하게 모여 있는지를 나타낸다. 이 문제는 제시된 네 종류만 골라 강한 순서로 배열한다.

각 의미
① 기능적: 하나의 명확한 기능을 수행
② 교환적(통신적): 같은 입력·출력 데이터를 사용하는 기능들
③ 시간적: 초기화처럼 같은 시점에 수행하는 기능들
④ 우연적: 뚜렷한 연관 없이 모인 기능들

전체 순서는 기능적 > 순차적 > 교환적(통신적) > 절차적 > 시간적 > 논리적 > 우연적이다. 보기의 네 가지만 남기면 기능적 → 교환적 → 시간적 → 우연적이다. 실행 순서를 묶는 절차적·순차적과 통신적을 혼동하지 않는다.

풀이 보강
전체 순서에서 요구한 네 항목만 골라 쓰면 기능적 > 교환적 > 시간적 > 우연적이다. 보기에 있는 순차적·절차적·논리적은 전체 응집도 분류에는 존재하지만 문제의 비교 대상 네 가지에는 없다. 가장 강한 것을 기준으로 배열하고, 단순히 전체 분류 순서를 앞에서 네 개 적는 실수를 피한다.`},{id:"2024-1-restored-04",session:"2024년 1회",subjectId:7,subjectName:"C 언어",type:"code",question:"문자열을 뒤집은 뒤 홀수 인덱스 문자를 출력하는 다음 C 코드의 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`#include <stdio.h>
#include <string.h>
void reverse(char *s) {
    char *left = s;
    char *right = s + strlen(s) - 1;
    while (left < right) {
        char saved = *left;
        *left++ = *right;
        *right-- = saved;
    }
}
int main(void) {
    char value[] = "ABCDEFGH";
    reverse(value);
    int length = (int)strlen(value);
    for (int i = 1; i < length; i += 2) {
        printf("%c", value[i]);
    }
    return 0;
}`,language:"c",choices:["H F D B","ACEG","GECA","HFDB"],blanks:[{answer:"GECA"}],explanation:`정답
GECA

정답 근거
코드는 먼저 문자열 전체를 뒤집고, 뒤집힌 문자열에서 인덱스가 1,3,5,7인 문자만 출력한다.

뒤집기
양 끝 포인터가 A↔H, B↔G, C↔F, D↔E를 차례대로 교환한다. 결과는 HGFEDCBA이다.

인덱스로 선택
0:H, 1:G, 2:F, 3:E, 4:D, 5:C, 6:B, 7:A
선택되는 문자는 G → E → C → A이므로 GECA이다.

주의: 원본 ABCDEFGH의 홀수 인덱스를 먼저 고르면 BDFH가 되어 다른 결과가 나온다. 배열 변경을 적용한 뒤 출력 반복문을 계산한다.

풀이 보강
reverse 이후 value는 HGFEDCBA가 된다. 반복은 i=1,3,5,7에서 읽어 G,E,C,A를 출력한다. 홀수 인덱스는 사람이 세는 첫째·셋째·다섯째 위치가 아니라 둘째·넷째·여섯째·여덟째 위치다. 코드의 printf에는 공백이 없어 GECA로 붙여 쓰며 원래 문자열에서 홀수 인덱스를 고르는 것과도 다르다.`},{id:"2024-1-restored-05",session:"2024년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"각 기준 주소와 같은 서브넷에서 호스트에 할당할 수 있는 주소를 보기에서 각각 고르시오.",choices:["192.168.35.72","192.168.35.0","129.200.8.249","192.168.36.0","192.168.36.249","129.200.8.0"],blanks:[{label:"① 192.168.35.3/24",answer:"192.168.35.72"},{label:"② 129.200.10.16/22",answer:"129.200.8.249"},{label:"③ 192.168.36.24/24",answer:"192.168.36.249"}],explanation:`정답
① 192.168.35.3/24: 192.168.35.72
② 129.200.10.16/22: 129.200.8.249
③ 192.168.36.24/24: 192.168.36.249

정답 근거
각 보기에서 기준 주소와 같은 네트워크인지 확인한 뒤, 네트워크 주소와 브로드캐스트 주소를 제외한다.

① 192.168.35.3/24
네트워크: 192.168.35.0
브로드캐스트: 192.168.35.255
사용 가능: 192.168.35.1~254
따라서 보기의 192.168.35.72가 맞다.

② 129.200.10.16/22
마스크: 255.255.252.0
세 번째 옥텟은 4개씩 묶이므로 10은 8~11 구간이다.
네트워크: 129.200.8.0
브로드캐스트: 129.200.11.255
129.200.8.249는 그 사이의 유효한 호스트 주소이다.

③ 192.168.36.24/24
사용 가능 범위는 192.168.36.1~254이므로 192.168.36.249이다.

주의: 129.200.8.249처럼 마지막 옥텟이 .249인지만 보지 말고 프리픽스 전체를 적용한다. 보기의 세 .0 주소는 각각 해당 서브넷의 네트워크 주소라 배정할 수 없다.

풀이 보강
/22는 마스크 255.255.252.0이며 세 번째 옥텟을 4개씩 묶는다. 8~11이 같은 블록이므로 호스트 범위는 129.200.8.1~129.200.11.254이다. 129.200.8.0은 마지막 옥텟이 0이라서가 아니라 호스트 비트 전체가 0이라 제외된다. 같은 /22 안의 129.200.9.0처럼 마지막 옥텟이 0인 주소도 호스트가 될 수 있다.`},{id:"2024-1-restored-06",session:"2024년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"아래 함수 종속을 가정할 때 이 릴레이션이 만족하는 가장 높은 정규형을 고르시오.",blocks:[{type:"text",text:`복원 표를 바탕으로 정규형 판단에 필요한 업무 규칙을 명시했습니다.
• {고객아이디, 강좌명} → 강사번호
• 강사번호 → 강좌명
• 속성 값은 원자 값이며, 명시된 종속에서 유도되는 것 외에 추가 종속은 없다고 가정한다.`},{type:"table",caption:"수강",headers:["고객아이디","강좌명","강사번호"],rows:[["apple","영어회화","P001"],["banana","기초토익","P002"],["carrot","영어회화","P001"],["carrot","기초토익","P004"],["orange","영어회화","P003"],["orange","기초토익","P004"]]}],choices:["제3정규형(3NF)","제2정규형(2NF)","BCNF","제1정규형(1NF)"],blanks:[{answer:"제3정규형(3NF)"}],explanation:`정답
제3정규형(3NF)

정답 근거
이 문항은 지문에 명시한 함수 종속을 전제로 판단한다. 예시 표의 행만 보고 모든 업무 규칙을 확정할 수는 없다.

후보키 구하기
① {고객아이디, 강좌명}으로 강사번호를 알아낼 수 있으므로 전체 속성을 식별한다.
② {고객아이디, 강사번호}에서도 강사번호 → 강좌명으로 전체 속성을 알아낸다.
③ 두 집합 모두 불필요한 속성이 없어 후보키이다.

3NF와 BCNF 구분
모든 속성이 적어도 하나의 후보키에 포함되는 주요 속성이다. 강사번호 → 강좌명에서 우변 강좌명이 주요 속성이므로 3NF의 조건을 만족한다.
하지만 강사번호만으로 고객아이디까지 식별할 수 없으므로 강사번호는 슈퍼키가 아니다. 모든 비자명한 함수 종속의 결정자가 슈퍼키여야 하는 BCNF는 만족하지 않는다.

따라서 가장 높은 정규형은 3NF이다. «3NF를 만족하면 항상 BCNF도 만족한다»고 생각하지 않는다. 복원 정답에 맞춰 판단 조건을 명시한 재구성 문항이라는 점을 함께 기억한다.

풀이 보강
3NF의 정확한 판정은 비자명한 함수 종속 X→A마다 «X가 슈퍼키이거나 A가 주요 속성»인지 확인하는 것이다. BCNF는 주요 속성에 대한 예외 없이 X가 슈퍼키여야 한다. 강사번호만으로는 고객을 식별할 수 없으므로 슈퍼키가 아니다. 표의 우연한 중복 여부로 업무상 함수 종속을 새로 추정하지 말고 제시된 종속을 기준으로 판단한다.`},{id:"2024-1-restored-07",session:"2024년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"링크 상태 정보와 다익스트라 알고리즘으로 AS 내부의 최단 경로를 계산하는 프로토콜의 약어를 고르시오.",choices:["RIP","BGP","OSPF","ARP"],blanks:[{answer:"OSPF"}],explanation:`정답
OSPF

정답 근거
링크 상태 정보를 교환하고 다익스트라 알고리즘으로 AS 내부 최단 경로를 계산한다는 단서가 OSPF를 가리킨다.

용어 연결
OSPF = Open Shortest Path First
IGP = 하나의 자율 시스템 내부에서 사용하는 라우팅 프로토콜
링크 상태 정보를 바탕으로 전체 연결 구조를 파악하고 최단 경로를 계산한다.

오답 구분
• RIP: 거리 벡터, 홉 수 기준
• BGP: 자율 시스템 사이의 경로 교환
• ARP: IP에 대응하는 MAC 주소 확인
ARP는 라우팅 경로 선택 알고리즘이 아니다.

풀이 보강
OSPF의 최단 경로는 설정된 링크 비용의 합을 최소화한다는 의미이며, 단순히 라우터를 가장 적게 거치는 경로라는 뜻이 아니다. 링크 상태 정보를 공유한 뒤 각 라우터가 자신을 출발점으로 최단 경로 트리를 계산한다. «내부 라우팅»만으로는 RIP도 가능하므로 링크 상태·다익스트라라는 추가 단서를 함께 확인한다.`},{id:"2024-1-restored-08",session:"2024년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 설명에 해당하는 조인을 순서대로 고르시오.",blocks:[{type:"text",text:`① 비교 연산자를 조건으로 사용하는 조인
② 등호 조건을 사용하는 조인
③ 공통 속성의 중복 열을 제거하는 조인`}],choices:["외부 조인","세타 조인","교차 조인","자연 조인","동등 조인"],blanks:[{label:"①",answer:"세타 조인"},{label:"②",answer:"동등 조인"},{label:"③",answer:"자연 조인"}],explanation:`정답
①: 세타 조인
②: 동등 조인
③: 자연 조인

정답 근거
세 용어는 조인 조건의 범위와 공통 열 처리 방식으로 구별한다.

① 세타 조인
=, <, >, <=, >=, <> 같은 비교 연산을 조건으로 사용한다. 예를 들어 R.점수 > S.기준점수처럼 결합할 수 있다.

② 동등 조인
비교 조건이 등호인 세타 조인이다. R.부서번호 = S.부서번호처럼 같은 값끼리 결합하며 공통 열이 자동으로 하나로 합쳐지는 것은 아니다.

③ 자연 조인
같은 이름의 공통 속성끼리 같은 값인 행을 결합하고, 결과에서 그 공통 열을 한 번만 남긴다.

주의: 자연 조인의 «중복 열 제거»는 같은 결과 행 전체를 DISTINCT로 제거한다는 뜻이 아니다. 외부 조인은 짝이 없는 행을 남기는 방식, 교차 조인은 모든 조합을 만드는 방식이다.

풀이 보강
동등 조인은 세타 조인의 조건을 등호로 제한한 경우다. 자연 조인은 공통 이름의 속성을 등호로 맞추고 결과에서 그 공통 열을 한 번만 남긴다. 중복 열 제거와 중복 행 제거는 다른 개념이다. 교차 조인은 조건 없는 모든 조합이고 외부 조인은 짝이 없는 행을 보존한다는 목적을 기준으로 구별한다.`},{id:"2024-1-restored-09",session:"2024년 1회",subjectId:6,subjectName:"OS·네트워크·신기술",type:"text",question:"프레임이 3개이고 처음에는 비어 있을 때, 다음 참조열의 LRU와 LFU 페이지 부재 횟수를 각각 고르시오.",blocks:[{type:"text",text:`페이지 참조열: 1, 2, 3, 1, 2, 4, 1, 2, 5, 7
LRU: 가장 오랫동안 참조하지 않은 페이지 교체
LFU: 현재 프레임에서 참조 횟수가 가장 적은 페이지 교체 (동률이면 먼저 적재한 페이지)`}],choices:["5","7","4","8","6"],blanks:[{label:"LRU",answer:"6"},{label:"LFU",answer:"6"}],explanation:`정답
LRU: 6
LFU: 6

정답 근거
페이지 부재는 필요한 페이지가 현재 프레임에 없는 경우이다. 처음 비어 있는 프레임에 넣는 1·2·3도 각각 한 번씩 센다.

LRU 추적 (대괄호는 오래된 참조 → 최근 참조 순)
01) 1 → 부재 [1]
02) 2 → 부재 [1, 2]
03) 3 → 부재 [1, 2, 3]
04) 1 → 적중 [2, 3, 1]
05) 2 → 적중 [3, 1, 2]
06) 4 → 부재 [1, 2, 4]
07) 1 → 적중 [2, 4, 1]
08) 2 → 적중 [4, 1, 2]
09) 5 → 부재 [1, 2, 5]
10) 7 → 부재 [2, 5, 7]

LFU 판단
1과 2는 반복 참조되어 빈도가 높아진다. 4를 넣을 때 가장 적게 참조된 3을 교체하고, 5를 넣을 때 4를, 7을 넣을 때 5를 교체한다. 부재가 나는 참조는 1,2,3,4,5,7이므로 6회이다.

결론: LRU 6회, LFU 6회이다. 두 알고리즘의 기준은 각각 최근성·빈도이며, 이번에 횟수가 같다고 알고리즘까지 같은 것은 아니다. 적중한 참조를 부재로 더하지 않는다.

풀이 보강
처음 들어오는 1·2·3, 뒤에 새로 들어오는 4·5·7에서 총 여섯 번 부재가 난다. 중간의 1·2 재참조는 적중이다. LRU는 최근 사용 시점, LFU는 현재 프레임의 참조 횟수를 기준으로 하지만 이 참조열에서는 부재 횟수가 우연히 같다. 횟수가 같다는 결과만으로 두 알고리즘이 같은 방식이라고 결론 내리지 않는다.`},{id:"2024-1-restored-10",session:"2024년 1회",subjectId:8,subjectName:"Java",type:"text",question:"⑤에서 시작할 때 번호가 붙은 지점의 실행 순서를 고르시오. 같은 번호는 한 번만 쓰시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`class Parent {
    int x, y;
    Parent(int x, int y) { // ①
        this.x = x;
        this.y = y;
    }
    int getT() { // ②
        return x * y;
    }
}
class Child extends Parent {
    int x;
    Child(int x) { // ③
        super(x + 1, x);
        this.x = x;
    }
    int getT(int n) { // ④
        return super.getT() + n;
    }
}
class Main {
    public static void main(String[] args) { // ⑤
        Parent parent = new Child(3); // ⑥
        System.out.println(parent.getT()); // ⑦
    }
}`,language:"java",choices:["⑤ → ⑥ → ③ → ⑦ → ① → ②","⑤ → ⑥ → ① → ③ → ⑦ → ④ → ②","⑤ → ⑥ → ③ → ① → ⑦ → ②","⑤ → ⑥ → ③ → ① → ⑦ → ④"],blanks:[{answer:"⑤ → ⑥ → ③ → ① → ⑦ → ②"}],explanation:`정답
⑤ → ⑥ → ③ → ① → ⑦ → ②

정답 근거
생성자의 호출 관계와 메서드 오버로딩을 따로 추적한다. Child.getT(int)는 인수가 있는 다른 메서드이며 Parent.getT()를 오버라이딩한 것이 아니다.

번호 추적
⑤ main에 진입한다.
⑥ new Child(3)을 실행한다.
③ Child 생성자로 진입해 super(x+1, x)를 호출한다.
① Parent 생성자가 두 필드를 초기화한다. 이후 Child 생성자의 나머지 부분을 마친다.
⑦ parent.getT()를 평가한다.
② 인수 없는 Parent.getT()가 실행된다.

따라서 ⑤ → ⑥ → ③ → ① → ⑦ → ②이다. ④ getT(int n)는 호출할 인수가 없어 실행되지 않는다. 재구성 코드의 부모 필드는 4와 3이어서 프로그램 출력 자체는 12이지만, 문제는 출력값이 아닌 번호 순서를 묻는다.

풀이 보강
Child.getT(int)는 매개변수가 있어 Parent.getT()를 재정의하지 않고 이름만 같은 오버로드다. parent.getT()는 인수 없이 호출되어 ②를 실행한다. 부모 생성자는 x=4,y=3을 저장하고 자식의 별도 x는 3이지만 ②는 부모 필드로 12를 계산한다. 이 값은 실행 순서를 검산하는 출력이지 문항의 직접 답은 아니다.`},{id:"2024-1-restored-11",session:"2024년 1회",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C 코드가 출력하는 계좌번호와 잔액을 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`#include <stdio.h>
struct Account { int number; double balance; };
int main(void) {
    struct Account account = {9981, 2200.0};
    account.balance -= 100.0;
    for (int year = 0; year < 3; ++year) {
        account.balance *= 1.1;
    }
    printf("%d and %.2f", account.number, account.balance);
    return 0;
}`,language:"c",choices:["9981 and 2795.10","9981 and 2730.00","9981 and 2795.00","9981 and 2928.20"],blanks:[{answer:"9981 and 2795.10"}],explanation:`정답
9981 and 2795.10

정답 근거
구조체의 계좌번호는 유지하고 잔액만 갱신한다. 각 회차의 이자는 원금이 아니라 직전 회차까지의 잔액에 붙는다.

잔액 추적
① 초기 잔액: 2200
② 100 차감: 2100
③ 1회 복리: 2100×1.1=2310
④ 2회 복리: 2310×1.1=2541
⑤ 3회 복리: 2541×1.1=2795.1

출력 형식
%d는 계좌번호 9981을, %.2f는 잔액을 소수점 아래 두 자리로 출력한다. 최종 문자열은 9981 and 2795.10이다.

주의: 차감 전에 이자를 계산하거나 매년 최초 잔액의 10%만 더하면 달라진다. 출력에서는 끝의 0도 포함한다.

풀이 보강
출금 뒤 잔액은 2100이고 세 번의 곱셈으로 2310→2541→2795.1이 된다. 단리처럼 2100의 10%를 세 번 더하면 2730이 되어 다른 보기다. %.2f가 소수 둘째 자리까지 표시해 2795.10이 되고 계좌번호 9981은 수정하는 코드가 없어 그대로 출력된다.`},{id:"2024-1-restored-12",session:"2024년 1회",subjectId:9,subjectName:"Python",type:"code",question:"다음 Python 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`cities = ["Seoul", "Kyeonggi", "Incheon", "Daejun", "Daegu", "Pusan"]
result = "S"
for city in cities:
    result += city[1]
print(result)`,language:"python",choices:["SSKIDDP","SeoulKyeonggiIncheonDaejunDaeguPusan","Seynaau","Seyaau"],blanks:[{answer:"Seynaau"}],explanation:`정답
Seynaau

정답 근거
각 도시명의 인덱스 1, 즉 두 번째 문자를 초기 문자열 S 뒤에 이어 붙인다.

순서대로 추적
Seoul → e → Se
Kyeonggi → y → Sey
Incheon → n → Seyn
Daejun → a → Seyna
Daegu → a → Seynaa
Pusan → u → Seynaau

주의: 도시명의 첫 글자를 가져오는 것이 아니다. 초기 S를 잊지 말고, Daejun과 Daegu에서 a가 연속 두 번 추가된다는 점을 확인한다.

풀이 보강
도시 이름의 두 번째 글자는 각각 e,y,n,a,a,u다. result의 초기 글자 S를 맨 앞에 두어 S+e+y+n+a+a+u=Seynaau가 된다. 첫 글자를 고르거나 Incheon의 n을 빠뜨리면 다른 보기를 선택하게 된다. 인덱스 1을 문자열의 첫 문자로 읽지 않고 모든 도시에서 같은 위치를 반복 확인한다.`},{id:"2024-1-restored-13",session:"2024년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 SQL의 결과에서 B 열에 나타나는 값들을 고르시오. 행의 순서는 따지지 않으시오.",blocks:[{type:"table",caption:"R1",headers:["A","B","C"],rows:[["1","a","x"],["2","b","x"],["1","c","w"],["3","d","w"]]},{type:"table",caption:"R2",headers:["C","D","E"],rows:[["x","k","3"],["y","k","3"],["z","s","2"]]}],codeSnippet:`SELECT B FROM R1
WHERE C IN (SELECT C FROM R2 WHERE D = 'k');`,language:"sql",choices:["a, b","a, b, c, d","결과 없음","c, d"],blanks:[{answer:"a, b"}],explanation:`정답
a, b

정답 근거
중첩 질의는 안쪽 SELECT가 만드는 값 집합을 먼저 구한 뒤 바깥 IN 조건에 적용하면 이해하기 쉽다.

① 안쪽 질의
R2에서 D='k'인 행은 (x,k,3), (y,k,3)이다. SELECT C의 결과는 x와 y이다.

② 바깥 질의
R1의 C가 x 또는 y인 행만 남긴다. 첫 행 (1,a,x)과 둘째 행 (2,b,x)가 해당한다. C=w인 나머지 두 행은 제외된다.

③ SELECT B
남은 두 행에서 B만 뽑으므로 a, b이다. IN은 집합에 속하는지 검사하며 조건에 맞는 행 수만큼 출력한다. ORDER BY가 없어 a와 b의 표시 순서는 보장되지 않는다.

풀이 보강
안쪽 질의는 D=k인 R2 두 행에서 C 값 x,y를 만든다. 바깥 R1의 C는 x,x,w,w이므로 x인 첫 두 행만 남아 B가 a,b가 된다. IN은 포함 여부 검사라 안쪽 결과가 두 개라고 바깥 행을 두 번씩 복제하지 않는다. ORDER BY가 없어 행 표시 순서는 정답 판단 조건이 아니다.`},{id:"2024-1-restored-14",session:"2024년 1회",subjectId:4,subjectName:"애플리케이션 테스트",type:"text",question:"각 개별 조건이 다른 조건의 영향을 받지 않고 최종 결정 결과를 독립적으로 바꾸는지 확인하는 커버리지를 고르시오.",choices:["변경 조건/결정 커버리지(MC/DC)","문장 커버리지","결정(분기) 커버리지","조건 커버리지"],blanks:[{answer:"변경 조건/결정 커버리지(MC/DC)"}],explanation:`정답
변경 조건/결정 커버리지(MC/DC)

정답 근거
MC/DC는 각 원자 조건이 최종 결정 결과에 독립적으로 영향을 줄 수 있음을 확인하는 기준이다. 단순히 개별 조건을 참·거짓으로 한 번씩 만드는 것보다 요구가 강하다.

예시: 결정식 A AND B
• A의 영향: B를 참으로 고정하고 (A=참, B=참)과 (A=거짓, B=참)을 비교한다. 최종 결과가 참→거짓으로 바뀐다.
• B의 영향: A를 참으로 고정하고 (참,참)과 (참,거짓)을 비교한다.

오답 구분: 조건 커버리지는 개별 조건의 참·거짓 여부, 결정 커버리지는 전체 식의 참·거짓 여부를 본다. MC/DC의 핵심 단서는 «다른 조건의 영향을 받지 않는 독립적인 변화»이다.

풀이 보강
결정 A && B에서 A의 독립 영향을 보이려면 B를 참으로 고정하고 A만 바꾸어 결정 결과가 바뀌는 쌍을 만든다. B는 A를 참으로 고정한 쌍으로 확인한다. (참,참), (거짓,참), (참,거짓) 세 입력이 이 예의 기본 구성이며 모든 조합 네 개를 반드시 실행해야 하는 다중 조건 커버리지와 구별된다.`},{id:"2024-1-restored-15",session:"2024년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"운영체제 내부 동작에 개입하여 침입 흔적과 악성 활동을 숨기고 높은 권한을 유지하는 악성 도구의 유형을 고르시오.",choices:["스캐어웨어(Scareware)","랜섬웨어(Ransomware)","루트킷(Rootkit)","애드웨어(Adware)"],blanks:[{answer:"루트킷(Rootkit)"}],explanation:`정답
루트킷(Rootkit)

정답 근거
루트킷은 공격자가 침입한 사실과 악성 활동을 숨기고 시스템에 대한 접근·권한을 유지하도록 돕는 도구 모음이다.

판별 단서
운영체제 기능이나 프로그램의 동작에 개입해 악성 프로세스·파일 등이 정상적인 조회에서 보이지 않게 만드는 등 은닉과 탐지 회피에 초점을 둔다.

오답 구분
• 랜섬웨어: 파일 접근을 막고 복구 대가 요구
• 애드웨어: 광고 표시
• 스캐어웨어: 가짜 경고로 겁을 주어 결제·설치 유도
악성코드라는 공통점보다 문제에서 강조한 행위를 기준으로 고른다.

풀이 보강
루트킷의 판별 단서는 자신의 존재나 공격자의 활동을 숨기도록 파일·프로세스·시스템 호출 등의 관찰 결과에 개입한다는 점이다. 관리자 권한 유지와 은닉을 돕지만 루트킷이 반드시 커널 모드에서만 동작하는 것은 아니다. 암호화로 돈을 요구하는 랜섬웨어나 가짜 경고로 겁주는 스캐어웨어와 주된 역할이 다르다.`},{id:"2024-1-restored-16",session:"2024년 1회",subjectId:8,subjectName:"Java",type:"code",question:"다음 Java 코드의 출력 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`class Parent {
    int first = 2, second = 3;
    void print() { System.out.print(first + second); }
}
class Child extends Parent {
    int po = 3;
    @Override
    void print() { System.out.print(po * po); }
}
class Main {
    public static void main(String[] args) {
        Parent item = new Child();
        item.print();
    }
}`,language:"java",choices:["9","3","6","5"],blanks:[{answer:"9"}],explanation:`정답
9

정답 근거
item은 Parent 타입 변수지만 실제로는 Child 객체를 가리킨다. print()는 인수 목록까지 같은 형태로 재정의되어 있다.

실행 순서
① new Child()로 자식 객체 생성
② item.print() 호출
③ 실제 객체의 Child.print() 실행
④ po=3이므로 po*po=9 출력

주의: 부모 print()의 first+second=5를 계산하지 않는다. 같은 이름이어도 인수 목록이 달랐다면 오버로딩이므로 다른 판단이 필요하지만, 이 문제는 오버라이딩이다.

풀이 보강
Child.print()가 Parent.print()와 같은 시그니처로 재정의되어 실제 객체 Child의 구현을 실행한다. 그 구현은 po=3의 제곱 9를 출력한다. 부모 필드 first=2,second=3도 객체에 있지만 자식 구현에서는 사용하지 않는다. 부모 생성이 먼저 된다는 사실과 출력 메서드가 부모 구현이라는 주장은 별개다.`},{id:"2024-1-restored-17",session:"2024년 1회",subjectId:5,subjectName:"정보 보안",type:"text",question:"특정 기관을 장기간 정찰하고 여러 수단으로 단계적 침투와 정보 유출을 시도하는 공격의 약어를 고르시오.",choices:["APT","CSRF","XSS","DDoS"],blanks:[{answer:"APT"}],explanation:`정답
APT

정답 근거
APT는 Advanced Persistent Threat, 즉 지능형 지속 위협이다. 특정 목표에 대한 장기간의 단계적 공격이 핵심이다.

공격 흐름 이해
대상 정찰 → 초기 침투 → 내부 탐색·권한 확보 → 장기 잠복·정보 유출처럼 여러 수단을 결합할 수 있다. 한 가지 도구나 단일 취약점만을 뜻하는 용어가 아니다.

오답 구분
• DDoS: 분산된 다수의 시스템으로 서비스 자원 소모
• XSS: 웹에서 악성 스크립트를 실행시키는 공격
• CSRF: 사용자의 인증 상태를 악용해 의도하지 않은 요청 전송
장기성·표적성이라는 단서에 주목한다.

풀이 보강
APT는 Advanced Persistent Threat로, 특정 목표에 지속적으로 접근하는 공격 활동을 말한다. 정찰 → 초기 침투 → 권한 확대·내부 이동 → 정보 유출 등 여러 단계를 조합할 수 있다. XSS나 CSRF는 개별 웹 공격 기법이고 DDoS는 주로 서비스 가용성 저해가 목적이므로 장기적 표적 침투라는 설명과 구별한다.`},{id:"2024-1-restored-18",session:"2024년 1회",subjectId:2,subjectName:"데이터베이스",type:"text",question:"다음 SQL의 COUNT(*) 결과를 고르시오.",blocks:[{type:"table",caption:"employees (복원 표의 TABLE을 이름만 변경)",headers:["EMPNO","SAL"],rows:[["100","1000"],["200","3000"],["300","1500"]]}],codeSnippet:`SELECT COUNT(*) FROM employees
WHERE EMPNO > 100 AND SAL >= 3000 OR EMPNO = 200;`,language:"sql",choices:["2","0","3","1"],blanks:[{answer:"1"}],explanation:`정답
1

정답 근거
SQL에서는 AND가 OR보다 먼저 결합된다. 조건은 (EMPNO>100 AND SAL>=3000) OR EMPNO=200으로 해석한다.

행별 평가
① (100,1000): 100>100이 거짓이고 EMPNO=200도 거짓 → 제외
② (200,3000): 앞 AND 조건도 참이며 EMPNO=200도 참 → 포함
③ (300,1500): 급여 조건이 거짓이고 EMPNO=200도 거짓 → 제외

COUNT(*)는 조건을 통과한 행을 세므로 결과는 1이다. 둘째 행이 OR 양쪽을 모두 만족해도 같은 행을 두 번 세지 않는다. >100은 100 자체를 포함하지 않고 >=3000은 3000을 포함한다.

풀이 보강
AND가 OR보다 우선하여 조건은 (EMPNO>100 AND SAL>=3000) OR EMPNO=200이다. 100번은 양쪽 모두 거짓, 200번은 참, 300번은 급여 조건이 거짓이라 제외된다. 200번이 양쪽 조건을 모두 만족해도 OR는 행을 복제하지 않아 한 번만 센다. 조건별 만족 횟수의 합이 아니라 남은 행 수를 구한다.`},{id:"2024-1-restored-19",session:"2024년 1회",subjectId:7,subjectName:"C 언어",type:"code",question:"다음 C 코드의 문자 변환 결과를 고르시오.",blocks:[{type:"text",text:"제공된 복원 요약의 수치와 연산을 바탕으로 재구성한 코드입니다."}],codeSnippet:`#include <stdio.h>
int main(void) {
    char value[] = "It is 8";
    for (int i = 0; value[i] != '\\0'; ++i) {
        char c = value[i];
        if (c >= 'A' && c <= 'Z') {
            value[i] = 'A' + (c - 'A' + 5) % 25;
        } else if (c >= 'a' && c <= 'z') {
            value[i] = 'a' + (c - 'a' + 10) % 26;
        } else if (c >= '0' && c <= '9') {
            value[i] = '0' + (c - '0' + 3) % 10;
        }
    }
    printf("%s", value);
    return 0;
}`,language:"c",choices:["Nd sc 8","Nd sc 11","Nd sc 1","Ny nx 1"],blanks:[{answer:"Nd sc 1"}],explanation:`정답
Nd sc 1

정답 근거
문자 종류마다 기준 문자에서의 위치를 구한 뒤 이동량을 더하고 나머지를 적용한다. 공백은 어느 변환 분기에도 속하지 않아 그대로 남는다.

문자별 계산
I: (8+5)%25=13 → N
t: (19+10)%26=3 → d
i: (8+10)%26=18 → s
s: (18+10)%26=2 → c
8: (8+3)%10=1 → 1

원문 공백 두 개를 그대로 두면 Nd sc 1이 된다. 대문자 분기는 복원 조건대로 %25이고 소문자는 %26이다. 숫자 문자 8은 문자 코드에 3을 바로 더하는 것이 아니라 '0'을 빼서 숫자 위치로 바꾼 뒤 처리한다.

풀이 보강
I는 대문자 분기에서 8+5=13으로 N, t는 소문자 분기에서 (19+10)%26=3으로 d가 된다. i는 s, s는 c로 변환되고 숫자 8은 (8+3)%10=1이다. 공백은 어느 분기에도 속하지 않아 그대로 남는다. 대문자 분기의 %25는 코드에 적힌 그대로 적용하며 임의로 %26으로 고쳐 계산하지 않는다.`},{id:"2024-1-restored-20",session:"2024년 1회",subjectId:1,subjectName:"소프트웨어 설계",type:"text",question:"구체 클래스에 의존하지 않고 서로 관련된 객체 집합을 생성하도록 인터페이스를 제공하는 GoF 생성 패턴을 고르시오.",choices:["프로토타입(Prototype)","추상 팩토리(Abstract Factory)","어댑터(Adapter)","팩터리 메서드(Factory Method)"],blanks:[{answer:"추상 팩토리(Abstract Factory)"}],explanation:`정답
추상 팩토리(Abstract Factory)

정답 근거
추상 팩토리는 관련된 여러 종류의 객체를 일관된 제품군으로 생성하도록 인터페이스를 제공하는 생성 패턴이다.

예시
운영체제별 UI 팩토리가 버튼과 체크박스를 함께 만든다고 하자. 클라이언트는 구체 클래스 이름 대신 공통 팩토리 인터페이스를 사용해 같은 계열의 객체들을 얻는다.

오답 구분
• 팩터리 메서드: 구체 객체 생성 결정을 하위 클래스에 맡긴다.
• 프로토타입: 이미 존재하는 객체를 복제한다.
• 어댑터: 기존 인터페이스를 호환되게 바꾸는 구조 패턴이다.
«서로 관련된 객체 집합»이 추상 팩토리의 중요한 단서이다.

풀이 보강
제품군 예시로 같은 테마의 버튼과 체크박스를 생각하면 된다. 클라이언트가 개별 구체 클래스 대신 팩토리 인터페이스를 사용하므로 제품군 전체를 일관되게 교체할 수 있다. «하위 클래스가 생성 메서드를 재정의»하면 팩터리 메서드, «관련 제품들의 생성 인터페이스»이면 추상 팩토리에 초점을 둔다.`}],t0=Object.freeze(Object.defineProperty({__proto__:null,default:n0},Symbol.toStringTag,{value:"Module"})),jn=[{id:1,name:"소프트웨어 설계"},{id:2,name:"데이터베이스"},{id:3,name:"인터페이스·UI"},{id:4,name:"애플리케이션 테스트"},{id:5,name:"정보 보안"},{id:6,name:"OS·네트워크·신기술"},{id:7,name:"C 언어"},{id:8,name:"Java"},{id:9,name:"Python"}],Ce={BOOKMARKS:"practical_bookmarks_v1",USER_ANSWERS:"practical_user_answers_v1",WRONG_ANSWERS:"practical_wrong_answers_v1",DAILY_STATS:"practical_daily_stats_v1",SUBJECT_ANSWERS:"practical_subject_answers_v1",SUBJECT_LAST_INDEX:"practical_subject_last_index_v1",RESULTS_HISTORY:"practical_results_history_v1"},fl=Object.assign({"../data/01-keyword.json":O1,"../data/08-2026-02.json":M1,"../data/09-2026-01.json":_1,"../data/10-2025-03.json":F1,"../data/11-2025-02.json":H1,"../data/12-2025-01.json":W1,"../data/13-2024-03.json":G1,"../data/14-2024-02.json":$1,"../data/15-2024-01.json":K1,"../data/16-2024-03-restored.json":X1,"../data/17-2024-02-restored.json":e0,"../data/18-2024-01-restored.json":t0}),s0=()=>{let e=[];for(const t in fl){const s=fl[t],r=s.default||s,a=Array.isArray(r)?r:r&&Array.isArray(r.questions)?r.questions:[];e=[...e,...a]}const n=new Map([["연습 1회",0],["연습 2회",1],["연습 3회",2]]);return e.sort((t,s)=>(n.get(t.session)??n.size)-(n.get(s.session)??n.size))},r0=()=>{try{return s0()}catch(e){return console.error("Failed to load questions from files",e),[]}},Mu=()=>{const e=localStorage.getItem(Ce.BOOKMARKS);if(!e)return[];try{const n=JSON.parse(e);return Array.isArray(n)?n.map(String).filter(t=>t&&t.trim()!==""):[]}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}},a0=e=>{const n=String(e),t=Mu(),r=t.includes(n)?t.filter(a=>a!==n):[...t,n];return localStorage.setItem(Ce.BOOKMARKS,JSON.stringify(r)),r},Or=()=>{try{const e=localStorage.getItem(Ce.USER_ANSWERS);return e?JSON.parse(e):{}}catch{return{}}},i0=(e,n,t,s,r=!1)=>{const a=Or();return a[e]={inputs:n,isCorrect:t,manual:r,session:s,timestamp:new Date().toISOString()},localStorage.setItem(Ce.USER_ANSWERS,JSON.stringify(a)),a},o0=e=>{const n=Or();return n[e]&&(n[e]={...n[e],isCorrect:!0,manual:!0},localStorage.setItem(Ce.USER_ANSWERS,JSON.stringify(n))),n},ml=e=>{const n=Or();return delete n[e],localStorage.setItem(Ce.USER_ANSWERS,JSON.stringify(n)),n},l0=()=>{try{const e=localStorage.getItem(Ce.WRONG_ANSWERS);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(String):[]}catch{return[]}},c0=e=>(localStorage.setItem(Ce.WRONG_ANSWERS,JSON.stringify(e)),e),Bu=()=>{const e=new Date,n=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${n}-${t}-${s}`},to=()=>{const e=Bu();try{const n=localStorage.getItem(Ce.DAILY_STATS);if(n){const t=JSON.parse(n);if(t.date===e)return t}}catch(n){console.error("Failed to load daily stats",n)}return{date:e,total:0,correct:0,wrong:0}},u0=e=>{const n=to(),t={...n,total:n.total+1,correct:e?n.correct+1:n.correct,wrong:e?n.wrong:n.wrong+1};return localStorage.setItem(Ce.DAILY_STATS,JSON.stringify(t)),t},d0=()=>{const e=to();if(e.wrong===0)return e;const n={...e,correct:e.correct+1,wrong:e.wrong-1};return localStorage.setItem(Ce.DAILY_STATS,JSON.stringify(n)),n},p0=()=>{const n={date:Bu(),total:0,correct:0,wrong:0};return localStorage.setItem(Ce.DAILY_STATS,JSON.stringify(n)),n};function ls({isOpen:e,title:n,message:t,confirmText:s="확인",cancelText:r="취소",type:a="danger",icon:i,showCancel:l=!0,children:c,onConfirm:u,onClose:m}){if(E.useEffect(()=>{const f=y=>{y.key==="Escape"&&e&&m()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[e,m]),!e)return null;const h=a==="info";return o.jsx("div",{onClick:m,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(15, 23, 42, 0.75)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"16px"},className:"animate-fade-in",children:o.jsxs("div",{className:"glass-card",onClick:f=>f.stopPropagation(),style:{width:"100%",maxWidth:"380px",padding:"24px",display:"flex",flexDirection:"column",gap:"16px",boxShadow:h?"0 20px 25px -5px rgba(99, 102, 241, 0.3)":"0 20px 25px -5px rgba(244, 63, 94, 0.3)",border:h?"1px solid rgba(99, 102, 241, 0.3)":"1px solid rgba(244, 63, 94, 0.3)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[o.jsx("div",{style:{width:"40px",height:"40px",background:h?"rgba(99, 102, 241, 0.15)":"rgba(244, 63, 94, 0.15)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:h?"var(--primary)":"var(--wrong)",flexShrink:0},children:i||(h?o.jsx(no,{size:22}):o.jsx(y1,{size:22}))}),o.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-main)"},children:n})]}),t&&o.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",lineHeight:"1.5"},children:t}),c,o.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"8px"},children:[l&&o.jsx("button",{className:"btn-secondary",onClick:m,style:{flex:1,justifyContent:"center"},children:r}),o.jsx("button",{className:"btn-primary",onClick:()=>{u(),m()},style:{flex:1,justifyContent:"center",background:h?"linear-gradient(135deg, var(--primary), var(--primary-hover))":"linear-gradient(135deg, #f43f5e, #e11d48)"},children:s})]})]})})}function f0({setActiveTab:e,questions:n,userAnswers:t,bookmarkCount:s,wrongAnswers:r,dailyStats:a,onResetDailyStats:i}){const[l,c]=E.useState(!1);Object.keys(t).length,Object.values(t).filter(f=>f.isCorrect).length;const u=r.length,m=new Set(n.map(f=>f.session)).size,h=[{tab:"random",icon:o.jsx(gr,{size:32}),title:"랜덤 문제풀이",description:"키워드·코드 문제를 무작위로 섞어 실전처럼 풀어봅니다.",color:"linear-gradient(135deg, #a855f7, #7e22ce)",glow:"rgba(168, 85, 247, 0.35)",stat:`전체 ${n.length}문제`},{tab:"quiz",icon:o.jsx(no,{size:32}),title:"유형별 문제풀이",description:"키워드 문제와 2024~2026년 회차별 학습 문제를 골라 풀어보세요.",color:"linear-gradient(135deg, #6366f1, #4f46e5)",glow:"rgba(99, 102, 241, 0.35)",stat:`${m}개 유형·회차`},{tab:"subject",icon:o.jsx(hr,{size:32}),title:"주제별 문제풀이",description:"데이터베이스, 보안, 네트워크, C·Java·Python 등 취약한 주제를 집중 학습하세요.",color:"linear-gradient(135deg, #06b6d4, #0891b2)",glow:"rgba(6, 182, 212, 0.35)",stat:`${jn.length}개 주제 지원`},{tab:"wrong",icon:o.jsx(xt,{size:32}),title:"오답노트",description:"풀었던 문제 중 틀린 문제만 모아 집중 복습할 수 있습니다.",color:"linear-gradient(135deg, #f43f5e, #e11d48)",glow:"rgba(244, 63, 94, 0.35)",stat:u>0?`${u}문제 오답`:"오답 없음"},{tab:"bookmark",icon:o.jsx(os,{size:32}),title:"북마크 문제풀이",description:"중요하거나 헷갈려서 저장해둔 문제를 따로 집중 점검하세요.",color:"linear-gradient(135deg, #eab308, #ca8a04)",glow:"rgba(234, 179, 8, 0.35)",stat:s>0?`${s}문제 저장됨`:"저장된 문제 없음"},{tab:"result",icon:o.jsx(wt,{size:32}),title:"풀이결과",description:"유형별 점수와 주제별 정답률로 부족한 부분을 확인하세요.",color:"linear-gradient(135deg, #10b981, #059669)",glow:"rgba(16, 185, 129, 0.35)",stat:"유형별 풀이 점수"}];return o.jsxs("div",{className:"animate-fade-in",children:[o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 0 20px"},children:[o.jsx("div",{children:o.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(99, 102, 241, 0.1)",border:"1px solid rgba(99, 102, 241, 0.3)",borderRadius:"9999px",padding:"6px 16px",fontSize:"0.85rem",color:"#a5b4fc",fontWeight:600},children:[o.jsx(Ou,{size:15}),"정보처리기사 실기 유형별·회차별 ",n.length,"문제"]})}),o.jsxs("div",{className:"glass-card",style:{marginTop:"20px",padding:"16px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",maxWidth:"420px",width:"100%",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)",background:"rgba(30, 41, 59, 0.8)"},children:[o.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,color:"var(--text-muted)",letterSpacing:"0.05em"},children:"오늘의 학습 성과"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",width:"100%"},children:[o.jsxs("div",{style:{textAlign:"center",flex:1},children:[o.jsx("div",{style:{fontSize:"1.4rem",fontWeight:800,color:"#a5b4fc"},children:a.total}),o.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"풀이"})]}),o.jsx("div",{style:{width:"1px",height:"30px",background:"var(--border-color)"}}),o.jsxs("div",{style:{textAlign:"center",flex:1},children:[o.jsx("div",{style:{fontSize:"1.4rem",fontWeight:800,color:"var(--correct)"},children:a.correct}),o.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"정답"})]}),o.jsx("div",{style:{width:"1px",height:"30px",background:"var(--border-color)"}}),o.jsxs("div",{style:{textAlign:"center",flex:1},children:[o.jsx("div",{style:{fontSize:"1.4rem",fontWeight:800,color:"var(--wrong)"},children:a.wrong}),o.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"오답"})]}),o.jsx("div",{style:{width:"1px",height:"30px",background:"var(--border-color)"}}),o.jsx("button",{onClick:()=>c(!0),title:"오늘 측정 데이터 초기화",style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-color)",color:"var(--text-muted)",padding:"8px",borderRadius:"var(--radius-sm)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:f=>{f.currentTarget.style.background="rgba(244, 63, 94, 0.15)",f.currentTarget.style.color="#f43f5e",f.currentTarget.style.borderColor="rgba(244, 63, 94, 0.4)"},onMouseLeave:f=>{f.currentTarget.style.background="rgba(255, 255, 255, 0.05)",f.currentTarget.style.color="var(--text-muted)",f.currentTarget.style.borderColor="var(--border-color)"},children:o.jsx(An,{size:16})})]})]})]}),o.jsx("div",{className:"menu-cards-grid",children:h.map(f=>o.jsxs("button",{onClick:()=>e(f.tab),className:"menu-card",onMouseEnter:y=>{const v=y.currentTarget;v.style.transform="translateY(-4px)",v.style.boxShadow=`0 12px 40px ${f.glow}`,v.style.borderColor="rgba(255,255,255,0.2)"},onMouseLeave:y=>{const v=y.currentTarget;v.style.transform="translateY(0)",v.style.boxShadow="none",v.style.borderColor="var(--border-color)"},children:[o.jsx("div",{style:{position:"absolute",top:"-30px",right:"-30px",width:"100px",height:"100px",background:f.glow,borderRadius:"50%",filter:"blur(25px)",opacity:.5,pointerEvents:"none"}}),o.jsx("div",{className:"menu-card-icon",style:{background:f.color,boxShadow:`0 8px 24px ${f.glow}`},children:f.icon}),o.jsxs("div",{style:{width:"100%"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"6px"},children:[o.jsx("h3",{className:"menu-card-title",children:f.title}),o.jsx(x1,{className:"menu-card-arrow",size:16})]}),o.jsx("p",{className:"menu-card-desc",children:f.description}),f.stat&&o.jsx("span",{className:"menu-card-stat",children:f.stat})]})]},f.tab))}),o.jsx(ls,{isOpen:l,title:"당일 통계 초기화",message:"오늘 기록된 풀이, 정답, 오답 수량이 모두 0으로 초기화됩니다. 진행하시겠습니까?",confirmText:"초기화",cancelText:"취소",onConfirm:()=>{i(),c(!1)},onClose:()=>c(!1)})]})}const m0=e=>e.replace(/^\s*[①-⑳]\s*[:.)]?\s*/,""),oa=(e,n)=>{const t=e.normalize("NFKC").replace(/\s+/g,"");return n?t:t.toLowerCase()},hl=e=>e.replace(/[()[\]{}\-_.,·'"`‘’“”:;!?~]/g,""),h0=e=>{const n=e.match(/^(.+?)\s*\((.+)\)$/);return n?[e,...[n[1],n[2]].map(t=>t.trim()).filter(Boolean)]:[e]},g0=(e,n,t)=>{const s=oa(m0(e),t);return s?t?s===oa(n,t):h0(n).some(r=>{const a=oa(r,t);if(s===a)return!0;const i=hl(s);return i!==""&&i===hl(a)}):!1},gl=e=>e.replace(/\r\n?/g,`
`).split(`
`).map(n=>n.trim().replace(/[ \t]+/g," ")).join(`
`).replace(/^\n+|\n+$/g,""),si=e=>[e.answer,...e.accepts??[]],yl=(e,n,t)=>{if(e.type==="code"){const r=gl(n);return r!==""&&si(t).some(a=>gl(a)===r)}const s=e.language!==void 0;return si(t).some(r=>g0(n,r,s))},ri=(e,n)=>{const{blanks:t}=e;if(e.unordered){const r=new Set,a=t.map((l,c)=>{const u=t.findIndex((m,h)=>!r.has(h)&&yl(e,n[c]??"",m));return u===-1?!1:(r.add(u),!0)});return{isCorrect:n.filter(l=>l.trim()!=="").length===t.length&&a.every(Boolean),blankResults:a}}const s=t.map((r,a)=>yl(e,n[a]??"",r));return{isCorrect:s.every(Boolean),blankResults:s}},Ws=(e,n)=>{const{blanks:t}=e,s=(a,i)=>si(i).includes(a);if(e.unordered){const a=new Set,i=t.map((l,c)=>{const u=t.findIndex((m,h)=>!a.has(h)&&s(n[c]??"",m));return u===-1?!1:(a.add(u),!0)});return{isCorrect:n.length===t.length&&i.every(Boolean),blankResults:i}}const r=t.map((a,i)=>s(n[i]??"",a));return{isCorrect:r.every(Boolean),blankResults:r}},_u=(e,n)=>{var i;if(n.isCorrect)return 1;if(n.manual||e.blanks.length<2)return 0;const t=n.inputs,{blankResults:s}=(i=e.choices)!=null&&i.length?Ws(e,t):ri(e,t),r=s.filter(Boolean).length,a=e.unordered?Math.max(0,t.filter(l=>l.trim()!=="").length-e.blanks.length):0;return Math.max(0,r-a)/e.blanks.length},Uu=e=>Number.isInteger(e)?String(e):e.toFixed(1);function y0(e,n){var c;const t=e.replace(/\r\n?/g,`
`).trim();if(n!=="c"&&n!=="java"){const u=t.split(`
`),m=u.filter(f=>f.trim()).map(f=>{var y;return((y=f.match(/^[ \t]*/))==null?void 0:y[0].replace(/\t/g,"    ").length)??0}),h=Math.min(...m.filter(f=>f>0));return u.map(f=>{var v;const y=((v=f.match(/^[ \t]*/))==null?void 0:v[0].replace(/\t/g,"    ").length)??0;return`${"  ".repeat(Number.isFinite(h)?Math.floor(y/h):0)}${f.trim()}`}).join(`
`)}const s=[];let r="",a=0,i=0;const l=()=>{r.trim()&&s.push(`${"  ".repeat(a)}${r.trim()}`),r=""};for(let u=0;u<t.length;u++){const m=t[u];if(m==='"'||m==="'"||m==="/"){const h=(c=t.slice(u).match(/^(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/[^\n]*|\/\*[\s\S]*?\*\/)/))==null?void 0:c[0];if(h){r+=h,u+=h.length-1,h.startsWith("//")&&l();continue}}if(m==="#"&&!r.trim()){const h=t.indexOf(`
`,u);r+=t.slice(u,h===-1?t.length:h),u=h===-1?t.length:h,l()}else if(m==="{")r+=m,l(),a++;else if(m==="}"){l(),a=Math.max(0,a-1),r=m;const h=t.slice(u+1).trimStart()[0];(!h||!";,)]".includes(h))&&l()}else m===";"?(r+=m,i===0&&l()):m===`
`?l():/\s/.test(m)?r&&!r.endsWith(" ")&&(r+=" "):(m==="("&&i++,m===")"&&(i=Math.max(0,i-1)),r+=m)}return l(),s.join(`
`)}const ai=e=>{var n;return((n=e.match(/^([㉠-㉿])\s/))==null?void 0:n[1])??e},Fu=(e,n)=>{var t;return((t=e.choices)==null?void 0:t.find(s=>ai(s)===n))??n};function x0({question:e,userAnswer:n,onSubmitAnswer:t}){const s=e.choices??[],r=e.unordered===!0,a=!r&&e.blanks.length===1,i=!a&&!r,l=e.type!=="text"&&e.language!==void 0,u=Math.max(...s.flatMap(b=>b.split(`
`).map(A=>A.length)))>(l?14:22),m=n!=null,h=()=>r?(n==null?void 0:n.inputs)??[]:e.blanks.map((b,A)=>(n==null?void 0:n.inputs[A])??""),[f,y]=E.useState(h),[v,S]=E.useState(0);E.useEffect(()=>{y(h()),S(0)},[e.id,n]);const D=e.blanks.flatMap(b=>[b.answer,...b.accepts??[]]),p=m&&!r?Ws(e,n.inputs).blankResults:null,d=b=>e.blanks[b].label??String(b+1),g=b=>{if(m)return;if(a){t([b],Ws(e,[b]).isCorrect,!1);return}if(r){y(q=>q.includes(b)?q.filter(M=>M!==b):[...q,b]);return}const A=f.map((q,M)=>M===v?b:q);y(A);const P=A.findIndex((q,M)=>M>v&&!q),z=A.findIndex(q=>!q);S(P!==-1?P:z!==-1?z:v)},x=()=>{const b=r?s.map(ai).filter(A=>f.includes(A)):f;t(b,Ws(e,b).isCorrect,!1)},j=r?f.length>0:f.every(Boolean),N=m?n.inputs:f;let I="보기를 터치하면 바로 채점됩니다";return r?I="해당하는 보기를 모두 고른 뒤 채점하세요":a||(I="빈칸을 고르고 보기를 터치해 채우세요"),o.jsxs("div",{className:"choice-area",children:[o.jsxs("div",{className:"choices-title",children:["<보기>",!m&&o.jsx("span",{className:"answer-hint",children:I})]}),!a&&!r&&o.jsx("div",{className:"choice-slots",children:e.blanks.map((b,A)=>{const P=p==null?void 0:p[A];let z=!m&&A===v?" active":"";return P!==void 0&&(z=P?" correct":" wrong"),o.jsxs("button",{type:"button",className:`choice-slot${z}`,disabled:m,onClick:()=>S(A),children:[o.jsx("span",{className:"blank-label",children:d(A)}),o.jsx("span",{className:N[A]?"":"choice-slot-empty",children:N[A]?Fu(e,N[A]):"선택"}),P!==void 0&&o.jsx("span",{className:"blank-result",style:{marginLeft:"auto",color:P?"var(--correct)":"var(--wrong)"},children:P?o.jsx(ni,{size:18}):o.jsx(xt,{size:18})})]},A)})}),o.jsx("div",{className:`choice-grid${u?" wide":""}`,children:s.map(b=>{const A=ai(b),P=N.includes(A),z=D.includes(A),q=m&&!i;let M="";return q?z?M=" correct-answer":P?M=" wrong-answer":M=" dimmed":P&&!m&&!i&&(M=" selected"),o.jsxs("button",{type:"button",className:`choice-option${M}`,disabled:m,onClick:()=>g(A),children:[l?o.jsx("pre",{className:"choice-option-text choice-pre",children:b}):o.jsx("span",{className:`choice-option-text${e.language?" choice-mono":""}`,children:b}),q&&(z||P)&&o.jsxs("span",{className:"choice-corner",children:[q&&z&&o.jsx(ni,{size:18,color:"var(--correct)",className:"choice-corner-icon"}),q&&!z&&P&&o.jsx(xt,{size:18,color:"var(--wrong)",className:"choice-corner-icon"})]})]},b)})}),!m&&!a&&o.jsxs("div",{className:"answer-actions",children:[o.jsx("button",{className:"btn-primary answer-submit",onClick:x,disabled:!j,style:{opacity:j?1:.5,cursor:j?"pointer":"not-allowed"},children:"채점하기"}),r&&o.jsxs("span",{className:"answer-hint",children:[f.length,"개 선택"]})]})]})}const v0={c:"C",java:"Java",python:"Python",sql:"SQL"};function S0(e,n){return e.type==="text"?o.jsx("div",{className:"passage-box",children:e.text},n):e.type==="table"?o.jsx("div",{className:"q-table-wrap",children:o.jsxs("table",{className:`q-table${e.headers?"":" desc"}`,children:[e.caption&&o.jsx("caption",{children:e.caption}),e.headers&&o.jsx("thead",{children:o.jsx("tr",{children:e.headers.map((t,s)=>o.jsx("th",{children:t},s))})}),o.jsx("tbody",{children:e.rows.map((t,s)=>o.jsx("tr",{children:t.map((r,a)=>o.jsx("td",{children:r},a))},s))})]})},n):o.jsx("div",{style:{marginBottom:"16px",textAlign:"center"},children:o.jsx("img",{src:`/infoprocess-exam-app/${e.src.replace(/^\//,"")}`,alt:e.alt??"문제 이미지",className:"q-image"})},n)}function ms({question:e,currentIndex:n,totalCount:t,userAnswer:s,isBookmarked:r,onSubmitAnswer:a,onMarkCorrect:i,onToggleBookmark:l}){var L,B;const[c,u]=E.useState(()=>e.blanks.map((T,_)=>(s==null?void 0:s.inputs[_])??"")),[m,h]=E.useState(!1),f=E.useRef([]),y=E.useRef(null),v=s!=null,S=v||m,D=E.useRef(S);if(E.useEffect(()=>{u(e.blanks.map((T,_)=>(s==null?void 0:s.inputs[_])??"")),h(!1)},[e.id,s]),E.useEffect(()=>{var T,_;S&&!D.current&&((T=document.activeElement)==null||T.blur(),(_=y.current)==null||_.scrollIntoView({behavior:"smooth",block:"nearest"})),D.current=S},[S]),!e)return null;const p=e.type==="essay",d=!!((L=e.choices)!=null&&L.length),g=e.type!=="text",x=v||m,j=v&&!s.manual&&!p?ri(e,s.inputs):null,N=String(e.id),I=N.split("-"),b=parseInt(I[I.length-1],10),A=isNaN(b)?n+1:b,P=T=>e.blanks[T].label??(e.blanks.length>1?String(T+1):""),z=c.every(T=>T.trim()===""),q=(T,_)=>{u(ue=>ue.map((he,cn)=>cn===T?_:he))},M=()=>{if(!x){if(p){h(!0);return}a(c,ri(e,c).isCorrect,!1)}},W=T=>T.nativeEvent.isComposing||T.keyCode===229,w=(T,_)=>{var ue;T.key!=="Enter"||W(T)||(T.preventDefault(),_<e.blanks.length-1?(ue=f.current[_+1])==null||ue.focus():M())},O=T=>{T.key==="Enter"&&(T.ctrlKey||T.metaKey)&&!W(T)&&(T.preventDefault(),M())},U=()=>{const T=e.blanks[0].answer;return e.type==="code"||p&&e.language?o.jsx("pre",{className:"answer-pre",children:T}):p?o.jsx("div",{className:"answer-text",children:T}):o.jsx("ul",{className:"answer-list",children:e.blanks.map((_,ue)=>o.jsxs("li",{children:[P(ue)&&o.jsx("span",{className:"blank-label",children:P(ue)}),o.jsx("span",{children:Fu(e,_.answer)})]},ue))})};let k=o.jsx("span",{className:"badge badge-session",style:{marginLeft:"auto"},children:"✍️ 스스로 채점해 보세요"});if(v){const T=s.isCorrect?0:_u(e,s)*e.blanks.length;let _="❌ 틀렸습니다";s.isCorrect?_=s.manual?"⭕ 정답 처리":"⭕ 정답입니다!":T>0&&(_=`🔺 부분 정답 (${Uu(T)}/${e.blanks.length})`),k=o.jsx("span",{className:`badge ${s.isCorrect?"badge-subject":"badge-session"}`,style:{marginLeft:"auto"},children:_})}return o.jsxs("div",{className:"glass-card animate-fade-in",style:{padding:"32px",position:"relative"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[o.jsx("span",{className:"badge badge-session",children:e.session}),o.jsx("span",{className:"badge badge-subject",children:e.subjectName}),o.jsxs("span",{style:{fontSize:"0.88rem",color:"var(--text-muted)",fontWeight:600},children:[n+1," / ",t," 문제"]})]}),o.jsx("button",{className:`btn-icon ${r?"active-bookmark":""}`,onClick:()=>l(N),title:r?"북마크 해제":"북마크 추가",style:{background:r?"rgba(234, 179, 8, 0.15)":"rgba(255, 255, 255, 0.05)",border:"1px solid",borderColor:r?"rgba(234, 179, 8, 0.4)":"var(--border-color)",borderRadius:"var(--radius-sm)",padding:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},children:o.jsx(os,{size:26,fill:r?"var(--bookmark)":"none",color:r?"var(--bookmark)":"var(--text-muted)"})})]}),o.jsxs("h2",{style:{fontSize:"1.2rem",fontWeight:600,color:"var(--text-main)",lineHeight:"1.6",marginBottom:"16px",whiteSpace:"pre-line"},children:[A,". ",e.question]}),(B=e.blocks)==null?void 0:B.map(S0),e.codeSnippet&&o.jsxs("div",{className:"code-box",children:[o.jsxs("div",{className:"code-box-header",children:[o.jsx(w1,{size:14})," ",e.language?v0[e.language]:"코드"]}),o.jsx("pre",{children:y0(e.codeSnippet,e.language)})]}),e.choices&&!d&&o.jsxs("div",{className:"choices-box",children:[o.jsx("div",{className:"choices-title",children:"<보기>"}),o.jsx("div",{className:"choices-list",children:e.choices.map((T,_)=>o.jsx("span",{className:"choice-chip",children:T},_))})]}),d?o.jsx(x0,{question:e,userAnswer:s,onSubmitAnswer:a}):o.jsxs("div",{className:"answer-area",children:[o.jsxs("div",{className:"answer-area-title",children:[o.jsx(C1,{size:16}),p?"답안 작성 (서술형 · 스스로 채점)":e.type==="code"?"실행 결과 입력":"답안 입력",e.unordered&&o.jsx("span",{className:"answer-hint",children:"순서는 상관없습니다"})]}),e.blanks.map((T,_)=>{const ue=P(_),he=j==null?void 0:j.blankResults[_],cn=he===void 0?"":he?" correct":" wrong",Ge={value:c[_]??"",disabled:x,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1};return o.jsxs("div",{className:"blank-row",children:[ue&&o.jsx("span",{className:"blank-label",children:ue}),g?o.jsx("textarea",{...Ge,ref:Se=>f.current[_]=Se,className:`answer-input${e.type==="code"?" mono":""}${cn}`,rows:e.type==="code"?4:3,placeholder:e.type==="code"?"실행 결과를 입력하세요 (여러 줄이면 줄을 바꿔 입력)":"답안을 작성해 보세요 (비워 두고 정답을 확인해도 됩니다)",onChange:Se=>q(_,Se.target.value),onKeyDown:O}):o.jsx("input",{...Ge,ref:Se=>f.current[_]=Se,type:"text",enterKeyHint:_<e.blanks.length-1?"next":"done",className:`answer-input${e.language?" mono":""}${cn}`,placeholder:"정답 입력",onChange:Se=>q(_,Se.target.value),onKeyDown:Se=>w(Se,_)}),he!==void 0&&o.jsx("span",{className:"blank-result",style:{color:he?"var(--correct)":"var(--wrong)"},children:he?o.jsx(ni,{size:22}):o.jsx(xt,{size:22})})]},_)}),!x&&o.jsxs("div",{className:"answer-actions",children:[o.jsx("button",{className:"btn-primary answer-submit",onClick:M,children:p?"정답 확인":z?"정답 보기":"채점하기"}),!p&&o.jsx("span",{className:"answer-hint answer-key-hint",children:g?"Ctrl(⌘) + Enter로 채점":e.blanks.length>1?"Enter로 다음 칸 이동 · 마지막 칸에서 채점":"Enter로 채점"})]})]}),S&&o.jsxs("div",{ref:y,className:"explanation-box animate-fade-in",style:{scrollMarginBottom:"16px"},children:[o.jsxs("div",{className:"explanation-header",children:[o.jsx(k1,{size:20}),o.jsx("span",{children:"정답 및 해설"}),k]}),o.jsx("div",{style:{marginBottom:"8px",fontSize:"0.88rem",fontWeight:700,color:"var(--text-muted)"},children:p?"모범 답안":"정답"}),U(),!v&&m&&o.jsxs("div",{className:"answer-actions",style:{marginBottom:"16px"},children:[o.jsxs("button",{className:"btn-primary answer-submit",style:{background:"linear-gradient(135deg, #10b981, #059669)"},onClick:()=>a(c,!0,!0),children:[o.jsx(P1,{size:18}),"맞았어요"]}),o.jsxs("button",{className:"btn-secondary answer-submit",style:{color:"var(--wrong)",borderColor:"var(--wrong-border)"},onClick:()=>a(c,!1,!0),children:[o.jsx(E1,{size:18}),"틀렸어요"]})]}),v&&!s.isCorrect&&!p&&!d&&o.jsxs("div",{className:"answer-actions",style:{marginBottom:"16px"},children:[o.jsxs("button",{className:"btn-secondary answer-submit",onClick:i,children:[o.jsx(v1,{size:18}),"정답으로 인정하기"]}),o.jsx("span",{className:"answer-hint",children:"같은 뜻인데 표현이 달라 오답 처리되었다면 눌러 주세요"})]}),o.jsx("div",{className:"explanation-content",children:e.explanation})]})]})}function b0({questions:e,bookmarks:n,onSubmitAnswer:t,onMarkCorrect:s,onToggleBookmark:r,onFinishQuiz:a}){const[i,l]=E.useState([]),[c,u]=E.useState(0),[m,h]=E.useState({}),f=()=>{const x=[...e].sort(()=>Math.random()-.5);l(x),h({}),u(0)};if(E.useEffect(()=>{f()},[e]),i.length===0)return null;const y=i[c],v=y?m[y.id]:void 0,S=y?n.map(String).includes(String(y.id)):!1,D=Math.round((c+1)/i.length*100),p=(x,j,N)=>{y&&(h(I=>({...I,[y.id]:{inputs:x,isCorrect:j,manual:N,session:y.session,timestamp:new Date().toISOString()}})),t(String(y.id),j))},d=()=>{!y||!v||(h(x=>({...x,[y.id]:{...v,isCorrect:!0,manual:!0}})),s(String(y.id)))},g=()=>{y&&h(x=>{const j={...x};return delete j[y.id],j})};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[o.jsxs("div",{className:"glass-card",style:{padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[o.jsx("div",{style:{width:"40px",height:"40px",background:"linear-gradient(135deg, #a855f7, #7e22ce)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx(gr,{size:22,color:"#fff"})}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:700,fontSize:"1.05rem"},children:"랜덤 문제풀이"}),o.jsxs("div",{style:{color:"var(--text-muted)",fontSize:"0.88rem"},children:["전체 ",i.length,"문제 중 무작위 출제"]})]})]}),o.jsxs("button",{className:"btn-secondary",onClick:f,style:{padding:"8px 14px",fontSize:"0.88rem"},children:[o.jsx(gr,{size:16})," 문제 다시 섞기"]})]}),o.jsx("div",{style:{background:"rgba(255, 255, 255, 0.05)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:o.jsx("div",{style:{height:"100%",width:`${D}%`,background:"linear-gradient(90deg, #a855f7, #ec4899)",transition:"width 0.3s ease"}})}),o.jsx(ms,{question:y,currentIndex:c,totalCount:i.length,userAnswer:v,isBookmarked:S,onSubmitAnswer:p,onMarkCorrect:d,onToggleBookmark:()=>r(String(y.id))},y.id),o.jsxs("div",{className:"footer-controls",children:[o.jsxs("div",{style:{display:"flex",gap:"12px"},children:[o.jsxs("button",{className:"btn-secondary",onClick:()=>u(x=>Math.max(0,x-1)),disabled:c===0,style:{opacity:c===0?.5:1,cursor:c===0?"not-allowed":"pointer"},children:[o.jsx(Lr,{size:18}),"이전문제"]}),c<i.length-1?o.jsxs("button",{className:"btn-primary",style:{background:"linear-gradient(135deg, #a855f7, #7e22ce)"},onClick:()=>u(x=>Math.min(i.length-1,x+1)),children:["다음문제",o.jsx(eo,{size:18})]}):o.jsxs("button",{className:"btn-primary",style:{background:"linear-gradient(135deg, #10b981, #059669)"},onClick:a,children:[o.jsx(wt,{size:18}),"결과 보기"]})]}),o.jsxs("button",{className:"btn-secondary",onClick:g,disabled:!v,style:{opacity:v?1:.5,cursor:v?"pointer":"not-allowed"},children:[o.jsx(An,{size:18}),"다시풀기"]})]})]})}function zu({options:e,value:n,onChange:t,placeholder:s="선택하세요"}){const[r,a]=E.useState(!1),[i,l]=E.useState(null),c=E.useRef(null),u=E.useRef(null),m=e.find(y=>y.value===n),h=()=>{if(c.current){const y=c.current.getBoundingClientRect();l({top:y.bottom+6,left:y.left,width:y.width})}},f=()=>{r||h(),a(!r)};return E.useEffect(()=>{const y=S=>{const D=S.target,p=c.current&&c.current.contains(D),d=u.current&&u.current.contains(D);!p&&!d&&a(!1)},v=()=>{r&&h()};return document.addEventListener("mousedown",y),window.addEventListener("scroll",v,!0),window.addEventListener("resize",v),()=>{document.removeEventListener("mousedown",y),window.removeEventListener("scroll",v,!0),window.removeEventListener("resize",v)}},[r]),o.jsxs("div",{ref:c,style:{position:"relative",width:"100%"},children:[o.jsxs("div",{onClick:f,style:{background:"rgba(15, 23, 42, 0.8)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",padding:"10px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",color:m?"var(--text-main)":"var(--text-muted)",fontSize:"0.9rem",fontWeight:600,transition:"all 0.2s"},children:[o.jsx("span",{children:m?m.label:s}),o.jsx(b1,{size:16,style:{transform:r?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s",color:"var(--text-muted)"}})]}),r&&i&&Lu.createPortal(o.jsx("div",{ref:u,className:"glass-card animate-fade-in",style:{position:"fixed",top:`${i.top}px`,left:`${i.left}px`,width:`${i.width}px`,maxHeight:"240px",overflowY:"auto",zIndex:99999,padding:"6px",boxShadow:"0 20px 30px -10px rgba(0, 0, 0, 0.8)",background:"rgba(15, 23, 42, 0.98)"},children:e.map(y=>o.jsx("div",{onClick:()=>{t(y.value),a(!1)},style:{padding:"10px 12px",borderRadius:"6px",cursor:"pointer",fontSize:"0.9rem",fontWeight:y.value===n?700:500,color:y.value===n?"#fff":"var(--text-muted)",background:y.value===n?"var(--primary)":"transparent",transition:"background 0.15s"},onMouseEnter:v=>{y.value!==n&&(v.currentTarget.style.background="rgba(255, 255, 255, 0.06)")},onMouseLeave:v=>{y.value!==n&&(v.currentTarget.style.background="transparent")},children:y.label},y.value))}),document.body)]})}function w0({questions:e,userAnswers:n,bookmarks:t,onSubmitAnswer:s,onMarkCorrect:r,onResetAnswer:a,onToggleBookmark:i,onFinishQuiz:l}){const[c,u]=E.useState(""),[m,h]=E.useState(0),[f,y]=E.useState(0),v=E.useMemo(()=>Array.from(new Set(e.map(A=>A.session))).map(A=>({value:A,label:`${A} (${e.filter(P=>P.session===A).length}문제)`})),[e]),S=E.useMemo(()=>{const b=new Set(e.filter(A=>A.session===c).map(A=>A.subjectId));return jn.filter(A=>b.has(A.id))},[e,c]),D=E.useMemo(()=>c?e.filter(b=>{const A=b.session===c,P=m===0||b.subjectId===m;return A&&P}):[],[e,c,m]),p=b=>{const A=b;if(u(A),h(0),A){const P=e.filter(M=>M.session===A);let z=-1;for(let M=P.length-1;M>=0;M--)if(n[P[M].id]){z=M;break}const q=z>=0?Math.min(z+1,P.length-1):0;y(q)}else y(0)},d=b=>{h(b),y(0)},g=D[f],x=g?n[g.id]:void 0,j=g?t.includes(g.id):!1,N=D.length>0?Math.round((f+1)/D.length*100):0,I=o.jsxs("div",{className:"glass-card",style:{padding:"18px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px",position:"relative",zIndex:50},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flex:"1"},children:[o.jsx("label",{style:{fontSize:"0.9rem",fontWeight:600,color:"var(--text-muted)",whiteSpace:"nowrap"},children:"유형 선택:"}),o.jsx("div",{style:{width:"100%"},children:o.jsx(zu,{options:v,value:c,onChange:p,placeholder:"문제 유형을 선택해주세요"})})]}),c&&S.length>1&&o.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[o.jsx("button",{className:`nav-btn ${m===0?"active":""}`,onClick:()=>d(0),style:{padding:"6px 12px",fontSize:"0.85rem"},children:"전체 주제"}),S.map(b=>o.jsx("button",{className:`nav-btn ${m===b.id?"active":""}`,onClick:()=>d(b.id),style:{padding:"6px 12px",fontSize:"0.85rem"},children:b.name},b.id))]})]});return c?D.length?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[I,o.jsx("div",{style:{background:"rgba(255, 255, 255, 0.05)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:o.jsx("div",{style:{height:"100%",width:`${N}%`,background:"linear-gradient(90deg, var(--primary), var(--correct))",transition:"width 0.3s ease"}})}),o.jsx(ms,{question:g,currentIndex:f,totalCount:D.length,userAnswer:x,isBookmarked:j,onSubmitAnswer:(b,A,P)=>s(g.id,b,A,g.session,P),onMarkCorrect:()=>r(g.id),onToggleBookmark:i},g.id),o.jsxs("div",{className:"footer-controls",children:[o.jsxs("div",{style:{display:"flex",gap:"12px"},children:[o.jsx("button",{className:"btn-secondary",onClick:()=>y(b=>Math.max(0,b-1)),disabled:f===0,style:{opacity:f===0?.5:1,cursor:f===0?"not-allowed":"pointer"},children:"이전문제"}),f<D.length-1?o.jsx("button",{className:"btn-primary",onClick:()=>y(b=>Math.min(D.length-1,b+1)),children:"다음문제"}):o.jsxs("button",{className:"btn-primary",style:{background:"linear-gradient(135deg, #10b981, #059669)"},onClick:()=>l(D),children:[o.jsx(wt,{size:18}),"결과 제출하기"]})]}),o.jsxs("button",{className:"btn-secondary",onClick:()=>a(g.id),disabled:!x,style:{opacity:x?1:.5,cursor:x?"pointer":"not-allowed"},children:[o.jsx(An,{size:18}),"다시풀기"]})]})]}):o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[I,o.jsxs("div",{className:"glass-card",style:{padding:"60px",textAlign:"center"},children:[o.jsx(Du,{size:48,style:{color:"var(--text-muted)",marginBottom:"16px"}}),o.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"8px"},children:"해당 조건의 문제가 없습니다."}),o.jsx("p",{style:{color:"var(--text-muted)"},children:"다른 유형이나 주제 필터를 선택해 주세요."})]})]}):o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[I,o.jsxs("div",{className:"glass-card",style:{padding:"60px",textAlign:"center"},children:[o.jsx(N1,{size:48,style:{color:"var(--text-muted)",marginBottom:"16px"}}),o.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"8px"},children:"문제 유형을 선택해주세요"}),o.jsx("p",{style:{color:"var(--text-muted)"},children:"상단에서 키워드 유형 또는 회차를 선택하면 문제풀이가 시작됩니다."})]})]})}const xl=Ce.SUBJECT_ANSWERS,vl=Ce.SUBJECT_LAST_INDEX,Sl={1:{gradient:"linear-gradient(135deg, #6366f1, #4f46e5)",glow:"rgba(99,102,241,0.35)"},2:{gradient:"linear-gradient(135deg, #10b981, #059669)",glow:"rgba(16,185,129,0.35)"},3:{gradient:"linear-gradient(135deg, #f59e0b, #d97706)",glow:"rgba(245,158,11,0.35)"},4:{gradient:"linear-gradient(135deg, #f43f5e, #e11d48)",glow:"rgba(244,63,94,0.35)"},5:{gradient:"linear-gradient(135deg, #8b5cf6, #7c3aed)",glow:"rgba(139,92,246,0.35)"},6:{gradient:"linear-gradient(135deg, #06b6d4, #0891b2)",glow:"rgba(6,182,212,0.35)"},7:{gradient:"linear-gradient(135deg, #64748b, #475569)",glow:"rgba(100,116,139,0.35)"},8:{gradient:"linear-gradient(135deg, #f97316, #ea580c)",glow:"rgba(249,115,22,0.35)"},9:{gradient:"linear-gradient(135deg, #3b82f6, #2563eb)",glow:"rgba(59,130,246,0.35)"}};function k0({questions:e,bookmarks:n,onSubmitAnswer:t,onMarkCorrect:s,onToggleBookmark:r,onFinishQuiz:a}){var W;const[i,l]=E.useState(null),[c,u]=E.useState(0),[m,h]=E.useState(null),[f,y]=E.useState(()=>{try{const w=localStorage.getItem(xl);return w?JSON.parse(w):{}}catch(w){return console.error("Failed to load subject answers from localStorage",w),{}}}),[v,S]=E.useState(()=>{try{const w=localStorage.getItem(vl);return w?JSON.parse(w):{}}catch(w){return console.error("Failed to load last indexes from localStorage",w),{}}});E.useEffect(()=>{try{localStorage.setItem(xl,JSON.stringify(f))}catch(w){console.error("Failed to save subject answers to localStorage",w)}},[f]),E.useEffect(()=>{try{localStorage.setItem(vl,JSON.stringify(v))}catch(w){console.error("Failed to save last indexes to localStorage",w)}},[v]),E.useEffect(()=>{i!==null&&S(w=>({...w,[i]:c}))},[c,i]);const D=E.useMemo(()=>jn.map(w=>{const O=e.filter(T=>T.subjectId===w.id),U=O.filter(T=>f[T.id]),k=U.length,L=U.filter(T=>{var _;return(_=f[T.id])==null?void 0:_.isCorrect}).length,B=k-L;return{...w,kind:O.some(T=>T.language)?"코드":"키워드",total:O.length,answered:k,correct:L,wrong:B}}),[e,f]),p=E.useMemo(()=>i===null?[]:e.filter(w=>w.subjectId===i),[e,i]),d=w=>{const O=e.filter(B=>B.subjectId===w);if(O.length===0)return;l(w);const U=v[w]??0,k=Math.min(Math.max(0,U),O.length-1);let L=O.findIndex((B,T)=>T>=k&&!f[B.id]);L===-1&&(L=O.findIndex(B=>!f[B.id])),L===-1&&(L=k),u(L)},g=()=>{l(null),u(0)},x=()=>{if(m===null)return;const w=new Set(e.filter(O=>O.subjectId===m).map(O=>O.id));y(O=>{const U={...O};return Object.keys(U).forEach(k=>{w.has(k)&&delete U[k]}),U}),S(O=>({...O,[m]:0})),h(null)},j=(w,O,U,k,L)=>{const B={inputs:O,isCorrect:U,manual:k,session:L,timestamp:new Date().toISOString()};y(T=>({...T,[w]:B})),t(w,U)},N=w=>{y(O=>O[w]?{...O,[w]:{...O[w],isCorrect:!0,manual:!0}}:O),s(w)},I=w=>{y(O=>{const U={...O};return delete U[w],U})};if(i===null)return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[o.jsx("div",{className:"glass-card",style:{padding:"24px 28px"},children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"6px"},children:[o.jsx("div",{style:{width:"40px",height:"40px",background:"linear-gradient(135deg, #06b6d4, #0891b2)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"},children:o.jsx(hr,{size:22,color:"#fff"})}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:700,fontSize:"1.1rem"},children:"주제별 문제풀이"}),o.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.88rem"},children:"원하는 주제를 선택해 집중 학습하세요 (이전 학습 위치부터 이어서 풀어볼 수 있습니다)"})]})]})}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"16px"},children:D.map(w=>{const O=Sl[w.id],U=(v[w.id]??0)>0||w.answered>0;return o.jsxs("button",{onClick:()=>d(w.id),style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"24px",cursor:w.total>0?"pointer":"not-allowed",textAlign:"left",display:"flex",flexDirection:"column",gap:"14px",transition:"all 0.25s ease",position:"relative",overflow:"hidden",opacity:w.total>0?1:.5},disabled:w.total===0,onMouseEnter:k=>{if(w.total===0)return;const L=k.currentTarget;L.style.transform="translateY(-3px)",L.style.boxShadow=`0 10px 30px ${O.glow}`,L.style.borderColor="rgba(255,255,255,0.2)"},onMouseLeave:k=>{const L=k.currentTarget;L.style.transform="translateY(0)",L.style.boxShadow="none",L.style.borderColor="var(--border-color)"},children:[o.jsx("div",{style:{position:"absolute",top:"-20px",right:"-20px",width:"100px",height:"100px",background:O.glow,borderRadius:"50%",filter:"blur(25px)",opacity:.4,pointerEvents:"none"}}),o.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",width:"100%"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[o.jsx("div",{style:{width:"52px",height:"52px",background:O.gradient,borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",fontWeight:900,color:"#fff",flexShrink:0,boxShadow:`0 6px 20px ${O.glow}`},children:w.id}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:700,fontSize:"1rem",color:"var(--text-main)"},children:w.name}),o.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginTop:"2px"},children:[w.kind," ",U&&o.jsx("span",{style:{color:"#06b6d4",fontWeight:600},children:" · 학습 진행 중"})]})]})]}),U&&o.jsx("div",{onClick:k=>{k.stopPropagation(),h(w.id)},title:"이 주제 풀이 기록 및 진행 위치 초기화",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"30px",height:"30px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.12)",color:"var(--text-muted)",borderRadius:"var(--radius-sm)",cursor:"pointer",zIndex:2,transition:"all 0.2s"},onMouseEnter:k=>{k.currentTarget.style.background="rgba(255, 255, 255, 0.15)",k.currentTarget.style.color="var(--text-main)"},onMouseLeave:k=>{k.currentTarget.style.background="rgba(255, 255, 255, 0.06)",k.currentTarget.style.color="var(--text-muted)"},children:o.jsx(An,{size:14})})]}),o.jsxs("div",{style:{marginTop:"auto"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px",fontSize:"0.85rem"},children:[o.jsx("span",{style:{color:"var(--text-muted)"},children:w.total>0?`풀이 ${w.answered} / 정답 ${w.correct} / 오답 ${w.wrong}`:"문제 없음"}),w.total>0&&o.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",opacity:.8},children:["총 ",w.total,"문제"]})]}),w.total>0&&o.jsx("div",{style:{background:"rgba(255,255,255,0.08)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:o.jsx("div",{style:{height:"100%",width:`${Math.round(w.answered/w.total*100)}%`,background:O.gradient,transition:"width 0.4s ease"}})})]})]},w.id)})}),o.jsx(ls,{isOpen:m!==null,title:`${((W=jn.find(w=>w.id===m))==null?void 0:W.name)??""} 풀이 기록 초기화`,message:"선택하신 주제의 모든 풀이 기록과 학습 위치가 초기화됩니다. 계속 진행하시겠습니까?",confirmText:"초기화",cancelText:"취소",onConfirm:x,onClose:()=>h(null)})]});const b=p[c],A=b?f[b.id]:void 0,P=b?n.map(String).includes(String(b.id)):!1,z=p.length>0?Math.round((c+1)/p.length*100):0,q=jn.find(w=>w.id===i),M=Sl[i];return p.length===0?o.jsxs("div",{className:"glass-card animate-fade-in",style:{padding:"60px",textAlign:"center"},children:[o.jsx(hr,{size:48,style:{color:"var(--text-muted)",marginBottom:"16px"}}),o.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"8px"},children:"해당 주제에 문제가 없습니다."}),o.jsx("button",{className:"btn-secondary",onClick:g,style:{marginTop:"16px"},children:"← 주제 선택으로 돌아가기"})]}):o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[o.jsxs("div",{className:"glass-card",style:{padding:"16px 24px",display:"flex",alignItems:"center",gap:"12px"},children:[o.jsx("button",{onClick:g,style:{background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-color)",color:"var(--text-muted)",padding:"6px 14px",borderRadius:"var(--radius-sm)",cursor:"pointer",fontSize:"0.88rem",display:"flex",alignItems:"center",gap:"6px"},children:"← 주제 선택"}),o.jsx("div",{style:{width:"36px",height:"36px",background:M.gradient,borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",fontWeight:900,color:"#fff"},children:i}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:700},children:q.name}),o.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:[c+1," / ",p.length," 문제"]})]})]}),o.jsx("div",{style:{background:"rgba(255,255,255,0.05)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:o.jsx("div",{style:{height:"100%",width:`${z}%`,background:M.gradient,transition:"width 0.3s ease"}})}),o.jsx(ms,{question:b,currentIndex:c,totalCount:p.length,userAnswer:A,isBookmarked:P,onSubmitAnswer:(w,O,U)=>j(String(b.id),w,O,U,b.session),onMarkCorrect:()=>N(String(b.id)),onToggleBookmark:r},b.id),o.jsxs("div",{className:"footer-controls",children:[o.jsxs("div",{style:{display:"flex",gap:"12px"},children:[o.jsxs("button",{className:"btn-secondary",onClick:()=>u(w=>Math.max(0,w-1)),disabled:c===0,style:{opacity:c===0?.5:1,cursor:c===0?"not-allowed":"pointer"},children:[o.jsx(Lr,{size:18}),"이전문제"]}),c<p.length-1?o.jsxs("button",{className:"btn-primary",style:{background:M.gradient},onClick:()=>u(w=>Math.min(p.length-1,w+1)),children:["다음문제",o.jsx(eo,{size:18})]}):o.jsxs("button",{className:"btn-primary",style:{background:"linear-gradient(135deg, #10b981, #059669)"},onClick:a,children:[o.jsx(wt,{size:18}),"결과 보기"]})]}),o.jsxs("button",{className:"btn-secondary",onClick:()=>I(String(b.id)),disabled:!A,style:{opacity:A?1:.5,cursor:A?"pointer":"not-allowed"},children:[o.jsx(An,{size:18}),"다시풀기"]})]})]})}function N0({questions:e,userAnswers:n,wrongAnswers:t,onRetryWrongQuestions:s,onResetSessionAnswers:r}){const[a,i]=E.useState(null),[l,c]=E.useState(null),u=E.useMemo(()=>{const h={};return e.forEach(f=>{if(!h[f.session]){const S={};jn.forEach(D=>{S[D.id]={name:D.name,total:0,correct:0}}),h[f.session]={total:0,answered:0,correct:0,subjectStats:S}}const y=h[f.session];y.total++,y.subjectStats[f.subjectId]&&y.subjectStats[f.subjectId].total++;const v=n[f.id];if(v){y.answered++;const S=_u(f,v);y.correct+=S,y.subjectStats[f.subjectId]&&(y.subjectStats[f.subjectId].correct+=S)}}),Object.entries(h).map(([f,y])=>{const v=y.answered>0&&y.answered===y.total,S=y.total>0?Math.round(y.correct/y.total*100):0,D=e.filter(j=>j.session===f&&t.includes(String(j.id))).length,p=v&&S>=60;let d="",g="",x="";return v?p?(d="합격권",g="var(--correct)",x="rgba(16, 185, 129, 0.15)"):(d="복습 필요",g="#f59e0b",x="rgba(245, 158, 11, 0.15)"):y.answered===0?(d="미풀이",g="var(--text-muted)",x="rgba(255, 255, 255, 0.08)"):(d=`풀이 진행 중 (${y.answered}/${y.total})`,g="var(--primary)",x="rgba(99, 102, 241, 0.15)"),{sessionName:f,totalQuestions:y.total,answeredCount:y.answered,correctCount:y.correct,wrongCount:D,score:S,isCompleted:v,isPassed:p,statusBadgeText:d,statusBadgeColor:g,statusBadgeBg:x,subjectStats:y.subjectStats}})},[e,n,t]),m=E.useMemo(()=>a&&u.find(h=>h.sessionName===a)||null,[a,u]);return a&&m?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},className:"animate-fade-in",children:[o.jsx("div",{children:o.jsxs("button",{onClick:()=>i(null),style:{background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-color)",color:"var(--text-muted)",padding:"8px 16px",borderRadius:"var(--radius-sm)",cursor:"pointer",fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"6px"},children:[o.jsx(Lr,{size:18}),"유형 목록으로 돌아가기"]})}),o.jsxs("div",{className:"glass-card",style:{padding:"36px",textAlign:"center",position:"relative",overflow:"hidden"},children:[o.jsx("div",{style:{position:"absolute",top:"-50px",right:"-50px",width:"200px",height:"200px",background:m.isCompleted?m.isPassed?"rgba(16, 185, 129, 0.15)":"rgba(245, 158, 11, 0.15)":"rgba(99, 102, 241, 0.12)",borderRadius:"50%",filter:"blur(40px)"}}),o.jsx("div",{style:{display:"inline-flex",padding:"12px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.05)",marginBottom:"16px"},children:m.isCompleted?o.jsx(wt,{size:48,color:m.isPassed?"var(--correct)":"#f59e0b"}):o.jsx(I1,{size:48,color:"var(--primary)"})}),o.jsx("div",{style:{marginBottom:"12px"},children:o.jsx("span",{className:"badge badge-session",style:{fontSize:"0.95rem",padding:"6px 14px"},children:m.sessionName})}),o.jsx("h2",{style:{fontSize:"1.8rem",fontWeight:700,marginBottom:"8px"},children:m.isCompleted?m.isPassed?"🎉 합격 기준(60점) 달성!":"💪 조금 더 복습이 필요해요":m.answeredCount===0?"아직 풀이를 시작하지 않은 유형입니다":`📝 풀이가 진행 중인 유형입니다 (${m.answeredCount}/${m.totalQuestions}문제)`}),o.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"24px"},children:m.isCompleted?m.isPassed?"실기 합격 기준인 100점 환산 60점 이상을 달성하셨습니다!":"100점 환산 60점 미만입니다. 오답노트로 틀린 문제를 복습해 보세요.":m.answeredCount===0?"유형별 문제풀이 메뉴에서 모든 문제를 풀면 최종 결과를 확인할 수 있습니다.":`현재 ${m.totalQuestions}문제 중 ${m.answeredCount}문제를 풀어보셨습니다. 모든 문제를 풀면 최종 결과가 표시됩니다.`}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"16px",maxWidth:"700px",margin:"0 auto 24px auto"},children:[o.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.6)",padding:"16px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:[o.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:"4px"},children:"점수 (100점 환산)"}),o.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:m.isCompleted?m.score>=60?"var(--correct)":"#f59e0b":"var(--text-main)"},children:[m.score,"점"]})]}),o.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.6)",padding:"16px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:[o.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:"4px"},children:"오답노트 등록"}),o.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:"#f59e0b"},children:[m.wrongCount,"개"]})]})]}),o.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[m.wrongCount>0&&o.jsxs("button",{className:"btn-primary",onClick:()=>s(m.sessionName),children:[o.jsx(An,{size:18}),"이 유형 오답노트 복습하기"]}),m.answeredCount>0&&o.jsxs("button",{className:"btn-secondary",onClick:()=>c(m.sessionName),style:{borderColor:"rgba(245, 158, 11, 0.4)",color:"#f59e0b"},children:[o.jsx(ti,{size:18}),"이 유형 풀이결과 초기화"]})]})]}),o.jsxs("div",{className:"glass-card",style:{padding:"28px"},children:[o.jsxs("h3",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"20px",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(S1,{size:20,color:"var(--primary)"}),m.sessionName," 주제별 정답률"]}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Object.values(m.subjectStats).map(h=>{if(h.total===0)return null;const f=Math.round(h.correct/h.total*100);return o.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.4)",padding:"16px 20px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",alignItems:"center"},children:[o.jsx("div",{style:{fontWeight:600,fontSize:"0.95rem"},children:h.name}),o.jsxs("div",{style:{fontWeight:700,color:f>=60?"var(--correct)":"var(--warning)"},children:[f,"점 (",Uu(h.correct),"/",h.total,")"]})]}),o.jsx("div",{style:{background:"rgba(255, 255, 255, 0.08)",height:"8px",borderRadius:"4px",overflow:"hidden"},children:o.jsx("div",{style:{width:`${f}%`,height:"100%",background:f>=60?"var(--correct)":"var(--warning)",transition:"width 0.4s ease"}})})]},h.name)})})]}),o.jsx(ls,{isOpen:l!==null,title:"유형 풀이 기록 초기화",message:`[${l}] 유형의 문제 풀이 기록이 모두 삭제됩니다. (기존 오답노트에 등록된 기록은 유지됩니다)`,confirmText:"초기화",cancelText:"취소",onConfirm:()=>{l&&(r(l),c(null))},onClose:()=>c(null)})]}):o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},className:"animate-fade-in",children:[o.jsxs("div",{className:"glass-card",style:{padding:"28px"},children:[o.jsxs("h3",{style:{fontSize:"1.3rem",fontWeight:700,marginBottom:"6px",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(A1,{size:22,color:"var(--primary)"}),"유형별 성적 분석"]}),o.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",marginBottom:"24px"},children:"유형별 문제풀이 기록을 기준으로 집계합니다. 원하는 유형의 상세보기에서 주제별 정답률을 확인하거나 해당 유형 풀이 기록을 초기화할 수 있습니다."}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"16px"},children:u.map(h=>o.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.6)",padding:"20px",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",gap:"14px",transition:"all 0.2s ease"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("span",{className:"badge badge-session",children:h.sessionName}),o.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,padding:"4px 8px",borderRadius:"4px",background:h.statusBadgeBg,color:h.statusBadgeColor},children:h.statusBadgeText})]}),o.jsxs("div",{children:[o.jsxs("div",{style:{fontSize:"1.8rem",fontWeight:800,color:h.isCompleted?h.score>=60?"var(--correct)":"#f59e0b":"var(--text-main)"},children:[h.score,"점"]}),o.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginTop:"2px"},children:["풀이 ",h.answeredCount," / 총 ",h.totalQuestions,"문제 (오답노트 ",h.wrongCount,"개)"]})]}),o.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"auto",paddingTop:"8px"},children:[o.jsx("button",{className:"btn-primary",onClick:()=>i(h.sessionName),style:{flex:1,padding:"8px 12px",fontSize:"0.85rem"},children:"상세보기 →"}),h.answeredCount>0&&o.jsx("button",{className:"btn-secondary",onClick:()=>c(h.sessionName),style:{padding:"8px 12px",color:"#f59e0b",borderColor:"rgba(245, 158, 11, 0.3)"},title:"이 유형 초기화",children:o.jsx(ti,{size:16})})]})]},h.sessionName))})]}),o.jsx(ls,{isOpen:l!==null,title:"유형 풀이 기록 초기화",message:`[${l}] 유형의 문제 풀이 기록이 모두 삭제됩니다. (기존 오답노트에 등록된 기록은 유지됩니다)`,confirmText:"초기화",cancelText:"취소",onConfirm:()=>{l&&(r(l),c(null))},onClose:()=>c(null)})]})}function j0({questions:e,bookmarks:n,onSubmitAnswer:t,onMarkCorrect:s,onToggleBookmark:r}){const[a,i]=E.useState(0),[l,c]=E.useState(0),[u,m]=E.useState({}),h=E.useMemo(()=>{const N=n.map(String);return e.filter(I=>N.includes(String(I.id)))},[e,n]),f=E.useMemo(()=>{const N=new Set(h.map(I=>I.subjectId));return jn.filter(I=>N.has(I.id))},[h]),y=E.useMemo(()=>a===0?h:h.filter(N=>N.subjectId===a),[h,a]),v=N=>{i(N),c(0)};if(E.useEffect(()=>{l>=y.length&&y.length>0&&c(y.length-1)},[y.length,l]),h.length===0)return o.jsxs("div",{className:"glass-card animate-fade-in",style:{padding:"60px",textAlign:"center"},children:[o.jsx(os,{size:48,style:{color:"var(--bookmark)",marginBottom:"16px"}}),o.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"8px"},children:"북마크한 문제가 없습니다."}),o.jsx("p",{style:{color:"var(--text-muted)"},children:"문제 풀이 중 중요하거나 헷갈리는 문제의 오른쪽 상단 북마크 아이콘을 눌러 추가해보세요!"})]});const S=y[l],D=S?u[S.id]:void 0,p=S?n.map(String).includes(String(S.id)):!1,d=y.length>0?Math.round((l+1)/y.length*100):0,g=(N,I,b)=>{S&&(m(A=>({...A,[S.id]:{inputs:N,isCorrect:I,manual:b,session:S.session,timestamp:new Date().toISOString()}})),t(String(S.id),I))},x=()=>{!S||!D||(m(N=>({...N,[S.id]:{...D,isCorrect:!0,manual:!0}})),s(String(S.id)))},j=()=>{S&&m(N=>{const I={...N};return delete I[S.id],I})};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[o.jsxs("div",{className:"glass-card",style:{padding:"20px 28px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[o.jsx(os,{size:22,color:"var(--bookmark)",fill:"var(--bookmark)"}),o.jsxs("h3",{style:{fontSize:"1.2rem",fontWeight:700},children:["북마크 문제 모음 (",y.length,"개)"]})]}),o.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[o.jsx("button",{className:`nav-btn ${a===0?"active":""}`,onClick:()=>v(0),style:{padding:"6px 12px",fontSize:"0.85rem"},children:"전체"}),f.map(N=>o.jsx("button",{className:`nav-btn ${a===N.id?"active":""}`,onClick:()=>v(N.id),style:{padding:"6px 12px",fontSize:"0.85rem"},children:N.name},N.id))]})]}),y.length===0?o.jsxs("div",{className:"glass-card",style:{padding:"60px",textAlign:"center"},children:[o.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"8px"},children:"선택한 주제에 저장된 북마크 문제가 없습니다."}),o.jsx("p",{style:{color:"var(--text-muted)"},children:"다른 주제 필터를 선택해 주세요."})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{background:"rgba(255, 255, 255, 0.05)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:o.jsx("div",{style:{height:"100%",width:`${d}%`,background:"linear-gradient(90deg, #eab308, #ca8a04)",transition:"width 0.3s ease"}})}),o.jsx(ms,{question:S,currentIndex:l,totalCount:y.length,userAnswer:D,isBookmarked:p,onSubmitAnswer:g,onMarkCorrect:x,onToggleBookmark:()=>r(String(S.id))},S.id),o.jsxs("div",{className:"footer-controls",children:[o.jsxs("div",{style:{display:"flex",gap:"12px"},children:[o.jsxs("button",{className:"btn-secondary",onClick:()=>c(N=>Math.max(0,N-1)),disabled:l===0,style:{opacity:l===0?.5:1,cursor:l===0?"not-allowed":"pointer"},children:[o.jsx(Lr,{size:18}),"이전문제"]}),o.jsxs("button",{className:"btn-primary",onClick:()=>c(N=>Math.min(y.length-1,N+1)),disabled:l===y.length-1,style:{background:"linear-gradient(135deg, #eab308, #ca8a04)",opacity:l===y.length-1?.5:1,cursor:l===y.length-1?"not-allowed":"pointer"},children:["다음문제",o.jsx(eo,{size:18})]})]}),o.jsxs("button",{className:"btn-secondary",onClick:j,disabled:!D,style:{opacity:D?1:.5,cursor:D?"pointer":"not-allowed"},children:[o.jsx(An,{size:18}),"다시풀기"]})]})]})]})}function C0({questions:e,wrongAnswers:n,bookmarks:t,initialSession:s,onRemoveWrongAnswer:r,onToggleBookmark:a}){const[i,l]=E.useState(s||"all"),[c,u]=E.useState(0),[m,h]=E.useState(0),[f,y]=E.useState({});E.useEffect(()=>{l(s||"all"),u(0),h(0)},[s]);const v=E.useMemo(()=>e.filter(M=>n.includes(String(M.id))),[e,n]),S=E.useMemo(()=>{const M=Array.from(new Set(v.map(W=>W.session)));return[{value:"all",label:`전체 유형 (${v.length}개)`},...M.map(W=>{const w=v.filter(O=>O.session===W).length;return{value:W,label:`${W} (${w}개)`}})]},[v]),D=E.useMemo(()=>{const M=new Set(v.filter(W=>i==="all"||W.session===i).map(W=>W.subjectId));return jn.filter(W=>M.has(W.id))},[v,i]),p=E.useMemo(()=>v.filter(M=>{const W=i==="all"||M.session===i,w=c===0||M.subjectId===c;return W&&w}),[v,i,c]),d=M=>{l(M),u(0),h(0)},g=M=>{u(M),h(0)};if(E.useEffect(()=>{m>=p.length&&p.length>0&&h(p.length-1)},[p.length,m]),v.length===0)return o.jsxs("div",{className:"glass-card animate-fade-in",style:{padding:"60px",textAlign:"center"},children:[o.jsx(xt,{size:56,style:{color:"var(--correct)",marginBottom:"20px"}}),o.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:700,marginBottom:"10px"},children:"오답 문제가 없습니다! 🎉"}),o.jsxs("p",{style:{color:"var(--text-muted)",lineHeight:"1.6"},children:["아직 등록된 오답 문제가 없거나, 오답노트에서 모두 제외하셨습니다.",o.jsx("br",{}),"문제풀이 메뉴에서 문제를 먼저 풀어보세요."]})]});const x=p[m],j=x?f[x.id]:void 0,N=x?t.map(String).includes(String(x.id)):!1,I=p.length>0?Math.round((m+1)/p.length*100):0,b=(M,W,w)=>{x&&y(O=>({...O,[x.id]:{inputs:M,isCorrect:W,manual:w,session:x.session,timestamp:new Date().toISOString()}}))},A=()=>{!x||!j||y(M=>({...M,[x.id]:{...j,isCorrect:!0,manual:!0}}))},P=()=>{x&&y(M=>{const W={...M};return delete W[x.id],W})},z=()=>{x&&(P(),r(String(x.id)))},q=o.jsxs("div",{className:"glass-card",style:{padding:"18px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px",position:"relative",zIndex:50},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flex:"1"},children:[o.jsx("label",{style:{fontSize:"0.9rem",fontWeight:600,color:"var(--text-muted)",whiteSpace:"nowrap"},children:"유형 선택:"}),o.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:o.jsx(zu,{options:S,value:i,onChange:d,placeholder:"문제 유형을 선택해주세요"})})]}),o.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[o.jsx("button",{className:`nav-btn ${c===0?"active":""}`,onClick:()=>g(0),style:{padding:"6px 12px",fontSize:"0.85rem"},children:"전체 주제"}),D.map(M=>o.jsx("button",{className:`nav-btn ${c===M.id?"active":""}`,onClick:()=>g(M.id),style:{padding:"6px 12px",fontSize:"0.85rem"},children:M.name},M.id))]})]});return p.length?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[q,o.jsx("div",{style:{background:"rgba(255, 255, 255, 0.05)",height:"6px",borderRadius:"3px",overflow:"hidden"},children:o.jsx("div",{style:{height:"100%",width:`${I}%`,background:"linear-gradient(90deg, #f43f5e, #f59e0b)",transition:"width 0.3s ease"}})}),o.jsx(ms,{question:x,currentIndex:m,totalCount:p.length,userAnswer:j,isBookmarked:N,onSubmitAnswer:b,onMarkCorrect:A,onToggleBookmark:()=>a(String(x.id))},x.id),o.jsxs("div",{className:"footer-controls",style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"space-between"},children:[o.jsxs("div",{style:{display:"flex",gap:"12px"},children:[o.jsx("button",{className:"btn-secondary",onClick:()=>h(M=>Math.max(0,M-1)),disabled:m===0,style:{opacity:m===0?.5:1,cursor:m===0?"not-allowed":"pointer"},children:"이전문제"}),o.jsx("button",{className:"btn-primary",onClick:()=>h(M=>Math.min(p.length-1,M+1)),disabled:m===p.length-1,style:{opacity:m===p.length-1?.5:1,cursor:m===p.length-1?"not-allowed":"pointer",background:"linear-gradient(135deg, #f43f5e, #e11d48)"},children:"다음문제"})]}),o.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[o.jsxs("button",{className:"btn-secondary",onClick:P,disabled:!j,style:{opacity:j?1:.5,cursor:j?"pointer":"not-allowed"},children:[o.jsx(An,{size:18}),"다시풀기"]}),o.jsxs("button",{className:"btn-secondary",onClick:z,style:{borderColor:"rgba(244, 63, 94, 0.4)",color:"#f43f5e",display:"flex",alignItems:"center",gap:"6px"},title:"이 문제를 오답 목록에서 제외합니다",children:[o.jsx(ti,{size:18}),"오답 제외하기"]})]})]})]}):o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},className:"animate-fade-in",children:[q,o.jsxs("div",{className:"glass-card",style:{padding:"60px",textAlign:"center"},children:[o.jsx(Du,{size:48,style:{color:"var(--text-muted)",marginBottom:"16px"}}),o.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"8px"},children:"해당 조건의 오답 문제가 없습니다."}),o.jsx("p",{style:{color:"var(--text-muted)"},children:"다른 유형이나 주제 필터를 선택해 주세요."})]})]})}function I0(){const[e,n]=E.useState([]),[t,s]=E.useState([]),[r,a]=E.useState({}),[i,l]=E.useState([]),[c,u]=E.useState("home"),[m,h]=E.useState("all"),[f,y]=E.useState({date:"",total:0,correct:0,wrong:0}),[v,S]=E.useState(!1),D=E.useRef([]);E.useEffect(()=>{const w=r0(),O=Mu(),U=Or(),k=to();n(w),s(O),a(U),y(k),l(l0())},[]);const p=w=>{l(w),c0(w)},d=(w,O,U,k,L)=>{const B=i0(w,O,U,k,L);a({...B}),g(w,U)},g=(w,O)=>{const U=u0(O);y(U),!O&&!i.includes(String(w))&&p([...i,String(w)])},x=w=>{y(d0()),i.includes(String(w))&&p(i.filter(O=>O!==String(w)))},j=w=>{a({...o0(w)}),x(w)},N=()=>{const w=p0();y(w)},I=w=>{const O=i.filter(U=>U!==String(w));p(O)},b=w=>{const O=ml(w);a({...O})},A=w=>{const O=e.filter(k=>k.session===w).map(k=>k.id);let U={...r};O.forEach(k=>{U=ml(k)}),a({...U})},P=w=>{const O=a0(w);s([...O])},z=()=>{u("result")},q=w=>{h(w||"all"),u("wrong")},M=()=>{const w=Date.now(),O=D.current.filter(U=>w-U<=5e3);O.push(w),D.current=O,O.length>=30&&(S(!0),D.current=[])},W={home:"메인 홈",random:"랜덤문제 풀이",quiz:"유형별 문제풀이",subject:"주제별 문제풀이",wrong:"오답노트",bookmark:"북마크 문제풀이",result:"풀이결과"};return o.jsxs("div",{className:"app-container",children:[o.jsx(R1,{activeTab:c,setActiveTab:u}),c!=="home"&&o.jsxs("div",{style:{marginBottom:"20px",display:"flex",alignItems:"center",gap:"12px"},children:[o.jsx("button",{onClick:()=>u("home"),style:{background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-color)",color:"var(--text-muted)",padding:"6px 14px",borderRadius:"var(--radius-sm)",cursor:"pointer",fontSize:"0.88rem",display:"flex",alignItems:"center",gap:"6px"},children:"← 홈으로"}),o.jsx("h2",{style:{fontSize:"1.3rem",fontWeight:700,color:"var(--text-main)"},children:W[c]})]}),o.jsxs("main",{className:"main-content",children:[c==="home"&&o.jsx(f0,{setActiveTab:u,questions:e,userAnswers:r,bookmarkCount:t.length,wrongAnswers:i,dailyStats:f,onResetDailyStats:N}),c==="random"&&o.jsx(b0,{questions:e,bookmarks:t,onSubmitAnswer:g,onMarkCorrect:x,onToggleBookmark:P,onFinishQuiz:z}),c==="quiz"&&o.jsx(w0,{questions:e,userAnswers:r,bookmarks:t,onSubmitAnswer:d,onMarkCorrect:j,onResetAnswer:b,onToggleBookmark:P,onFinishQuiz:z}),c==="subject"&&o.jsx(k0,{questions:e,bookmarks:t,onSubmitAnswer:g,onMarkCorrect:x,onToggleBookmark:P,onFinishQuiz:z}),c==="wrong"&&o.jsx(C0,{questions:e,wrongAnswers:i,bookmarks:t,initialSession:m,onRemoveWrongAnswer:I,onToggleBookmark:P}),c==="result"&&o.jsx(N0,{questions:e,userAnswers:r,wrongAnswers:i,onRetryWrongQuestions:q,onResetSessionAnswers:A}),c==="bookmark"&&o.jsx(j0,{questions:e,bookmarks:t,onSubmitAnswer:g,onMarkCorrect:x,onToggleBookmark:P})]}),o.jsx("footer",{onClick:M,style:{padding:"70px 0",textAlign:"center",color:"var(--text-dim)",fontSize:"0.85rem",cursor:"pointer",userSelect:"none",WebkitUserSelect:"none",WebkitTapHighlightColor:"transparent"},children:"정보처리기사 실기 마스터 • TypeScript + Vite + React"}),o.jsx(ls,{isOpen:v,type:"info",title:"개발자 정보 🚀",confirmText:"확인",showCancel:!1,onConfirm:()=>S(!1),onClose:()=>S(!1),children:o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",background:"rgba(15, 23, 42, 0.6)",padding:"16px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)",fontWeight:600},children:"만든이"}),o.jsx("span",{style:{fontSize:"1rem",color:"var(--text-main)",fontWeight:700},children:"김형태"})]}),o.jsx("div",{style:{height:"1px",background:"var(--border-color)"}}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)",fontWeight:600},children:"Email"}),o.jsx("a",{href:"mailto:quantickim@gmail.com",style:{fontSize:"0.9rem",color:"#38bdf8",textDecoration:"none",fontWeight:600},children:"quantickim@gmail.com"})]})]})})]})}la.createRoot(document.getElementById("root")).render(o.jsx(rd.StrictMode,{children:o.jsx(I0,{})}));
