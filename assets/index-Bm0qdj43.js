(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function f(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(h){if(h.ep)return;h.ep=!0;const m=f(h);fetch(h.href,m)}})();var Bc={exports:{}},zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function Sg(){if(rf)return zi;rf=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function f(s,h,m){var v=null;if(m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),"key"in h){m={};for(var p in h)p!=="key"&&(m[p]=h[p])}else m=h;return h=m.ref,{$$typeof:r,type:s,key:v,ref:h!==void 0?h:null,props:m}}return zi.Fragment=u,zi.jsx=f,zi.jsxs=f,zi}var of;function bg(){return of||(of=1,Bc.exports=Sg()),Bc.exports}var c=bg(),Hc={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf;function Tg(){if(cf)return J;cf=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),v=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),R=Symbol.iterator;function j(T){return T===null||typeof T!="object"?null:(T=R&&T[R]||T["@@iterator"],typeof T=="function"?T:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,P={};function z(T,I,H){this.props=T,this.context=I,this.refs=P,this.updater=H||Q}z.prototype.isReactComponent={},z.prototype.setState=function(T,I){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,I,"setState")},z.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function V(){}V.prototype=z.prototype;function W(T,I,H){this.props=T,this.context=I,this.refs=P,this.updater=H||Q}var ne=W.prototype=new V;ne.constructor=W,q(ne,z.prototype),ne.isPureReactComponent=!0;var se=Array.isArray;function me(){}var Z={H:null,A:null,T:null,S:null},Le=Object.prototype.hasOwnProperty;function Ke(T,I,H){var G=H.ref;return{$$typeof:r,type:T,key:I,ref:G!==void 0?G:null,props:H}}function Ot(T,I){return Ke(T.type,I,T.props)}function pt(T){return typeof T=="object"&&T!==null&&T.$$typeof===r}function Ve(T){var I={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(H){return I[H]})}var wt=/\/+/g;function gt(T,I){return typeof T=="object"&&T!==null&&T.key!=null?Ve(""+T.key):I.toString(36)}function we(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(me,me):(T.status="pending",T.then(function(I){T.status==="pending"&&(T.status="fulfilled",T.value=I)},function(I){T.status==="pending"&&(T.status="rejected",T.reason=I)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function k(T,I,H,G,$){var ae=typeof T;(ae==="undefined"||ae==="boolean")&&(T=null);var pe=!1;if(T===null)pe=!0;else switch(ae){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(T.$$typeof){case r:case u:pe=!0;break;case C:return pe=T._init,k(pe(T._payload),I,H,G,$)}}if(pe)return $=$(T),pe=G===""?"."+gt(T,0):G,se($)?(H="",pe!=null&&(H=pe.replace(wt,"$&/")+"/"),k($,I,H,"",function(Fa){return Fa})):$!=null&&(pt($)&&($=Ot($,H+($.key==null||T&&T.key===$.key?"":(""+$.key).replace(wt,"$&/")+"/")+pe)),I.push($)),1;pe=0;var Ye=G===""?".":G+":";if(se(T))for(var Ne=0;Ne<T.length;Ne++)G=T[Ne],ae=Ye+gt(G,Ne),pe+=k(G,I,H,ae,$);else if(Ne=j(T),typeof Ne=="function")for(T=Ne.call(T),Ne=0;!(G=T.next()).done;)G=G.value,ae=Ye+gt(G,Ne++),pe+=k(G,I,H,ae,$);else if(ae==="object"){if(typeof T.then=="function")return k(we(T),I,H,G,$);throw I=String(T),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return pe}function B(T,I,H){if(T==null)return T;var G=[],$=0;return k(T,G,"","",function(ae){return I.call(H,ae,$++)}),G}function Y(T){if(T._status===-1){var I=T._result;I=I(),I.then(function(H){(T._status===0||T._status===-1)&&(T._status=1,T._result=H)},function(H){(T._status===0||T._status===-1)&&(T._status=2,T._result=H)}),T._status===-1&&(T._status=0,T._result=I)}if(T._status===1)return T._result.default;throw T._result}var ve=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},Ee={map:B,forEach:function(T,I,H){B(T,function(){I.apply(this,arguments)},H)},count:function(T){var I=0;return B(T,function(){I++}),I},toArray:function(T){return B(T,function(I){return I})||[]},only:function(T){if(!pt(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return J.Activity=E,J.Children=Ee,J.Component=z,J.Fragment=f,J.Profiler=h,J.PureComponent=W,J.StrictMode=s,J.Suspense=S,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,J.__COMPILER_RUNTIME={__proto__:null,c:function(T){return Z.H.useMemoCache(T)}},J.cache=function(T){return function(){return T.apply(null,arguments)}},J.cacheSignal=function(){return null},J.cloneElement=function(T,I,H){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var G=q({},T.props),$=T.key;if(I!=null)for(ae in I.key!==void 0&&($=""+I.key),I)!Le.call(I,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&I.ref===void 0||(G[ae]=I[ae]);var ae=arguments.length-2;if(ae===1)G.children=H;else if(1<ae){for(var pe=Array(ae),Ye=0;Ye<ae;Ye++)pe[Ye]=arguments[Ye+2];G.children=pe}return Ke(T.type,$,G)},J.createContext=function(T){return T={$$typeof:v,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:m,_context:T},T},J.createElement=function(T,I,H){var G,$={},ae=null;if(I!=null)for(G in I.key!==void 0&&(ae=""+I.key),I)Le.call(I,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&($[G]=I[G]);var pe=arguments.length-2;if(pe===1)$.children=H;else if(1<pe){for(var Ye=Array(pe),Ne=0;Ne<pe;Ne++)Ye[Ne]=arguments[Ne+2];$.children=Ye}if(T&&T.defaultProps)for(G in pe=T.defaultProps,pe)$[G]===void 0&&($[G]=pe[G]);return Ke(T,ae,$)},J.createRef=function(){return{current:null}},J.forwardRef=function(T){return{$$typeof:p,render:T}},J.isValidElement=pt,J.lazy=function(T){return{$$typeof:C,_payload:{_status:-1,_result:T},_init:Y}},J.memo=function(T,I){return{$$typeof:y,type:T,compare:I===void 0?null:I}},J.startTransition=function(T){var I=Z.T,H={};Z.T=H;try{var G=T(),$=Z.S;$!==null&&$(H,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(me,ve)}catch(ae){ve(ae)}finally{I!==null&&H.types!==null&&(I.types=H.types),Z.T=I}},J.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},J.use=function(T){return Z.H.use(T)},J.useActionState=function(T,I,H){return Z.H.useActionState(T,I,H)},J.useCallback=function(T,I){return Z.H.useCallback(T,I)},J.useContext=function(T){return Z.H.useContext(T)},J.useDebugValue=function(){},J.useDeferredValue=function(T,I){return Z.H.useDeferredValue(T,I)},J.useEffect=function(T,I){return Z.H.useEffect(T,I)},J.useEffectEvent=function(T){return Z.H.useEffectEvent(T)},J.useId=function(){return Z.H.useId()},J.useImperativeHandle=function(T,I,H){return Z.H.useImperativeHandle(T,I,H)},J.useInsertionEffect=function(T,I){return Z.H.useInsertionEffect(T,I)},J.useLayoutEffect=function(T,I){return Z.H.useLayoutEffect(T,I)},J.useMemo=function(T,I){return Z.H.useMemo(T,I)},J.useOptimistic=function(T,I){return Z.H.useOptimistic(T,I)},J.useReducer=function(T,I,H){return Z.H.useReducer(T,I,H)},J.useRef=function(T){return Z.H.useRef(T)},J.useState=function(T){return Z.H.useState(T)},J.useSyncExternalStore=function(T,I,H){return Z.H.useSyncExternalStore(T,I,H)},J.useTransition=function(){return Z.H.useTransition()},J.version="19.2.4",J}var sf;function Zc(){return sf||(sf=1,Hc.exports=Tg()),Hc.exports}var D=Zc(),jc={exports:{}},Bi={},qc={exports:{}},Uc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf;function Eg(){return uf||(uf=1,(function(r){function u(k,B){var Y=k.length;k.push(B);e:for(;0<Y;){var ve=Y-1>>>1,Ee=k[ve];if(0<h(Ee,B))k[ve]=B,k[Y]=Ee,Y=ve;else break e}}function f(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var B=k[0],Y=k.pop();if(Y!==B){k[0]=Y;e:for(var ve=0,Ee=k.length,T=Ee>>>1;ve<T;){var I=2*(ve+1)-1,H=k[I],G=I+1,$=k[G];if(0>h(H,Y))G<Ee&&0>h($,H)?(k[ve]=$,k[G]=Y,ve=G):(k[ve]=H,k[I]=Y,ve=I);else if(G<Ee&&0>h($,Y))k[ve]=$,k[G]=Y,ve=G;else break e}}return B}function h(k,B){var Y=k.sortIndex-B.sortIndex;return Y!==0?Y:k.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var v=Date,p=v.now();r.unstable_now=function(){return v.now()-p}}var S=[],y=[],C=1,E=null,R=3,j=!1,Q=!1,q=!1,P=!1,z=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function ne(k){for(var B=f(y);B!==null;){if(B.callback===null)s(y);else if(B.startTime<=k)s(y),B.sortIndex=B.expirationTime,u(S,B);else break;B=f(y)}}function se(k){if(q=!1,ne(k),!Q)if(f(S)!==null)Q=!0,me||(me=!0,Ve());else{var B=f(y);B!==null&&we(se,B.startTime-k)}}var me=!1,Z=-1,Le=5,Ke=-1;function Ot(){return P?!0:!(r.unstable_now()-Ke<Le)}function pt(){if(P=!1,me){var k=r.unstable_now();Ke=k;var B=!0;try{e:{Q=!1,q&&(q=!1,V(Z),Z=-1),j=!0;var Y=R;try{t:{for(ne(k),E=f(S);E!==null&&!(E.expirationTime>k&&Ot());){var ve=E.callback;if(typeof ve=="function"){E.callback=null,R=E.priorityLevel;var Ee=ve(E.expirationTime<=k);if(k=r.unstable_now(),typeof Ee=="function"){E.callback=Ee,ne(k),B=!0;break t}E===f(S)&&s(S),ne(k)}else s(S);E=f(S)}if(E!==null)B=!0;else{var T=f(y);T!==null&&we(se,T.startTime-k),B=!1}}break e}finally{E=null,R=Y,j=!1}B=void 0}}finally{B?Ve():me=!1}}}var Ve;if(typeof W=="function")Ve=function(){W(pt)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,gt=wt.port2;wt.port1.onmessage=pt,Ve=function(){gt.postMessage(null)}}else Ve=function(){z(pt,0)};function we(k,B){Z=z(function(){k(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_next=function(k){switch(R){case 1:case 2:case 3:var B=3;break;default:B=R}var Y=R;R=B;try{return k()}finally{R=Y}},r.unstable_requestPaint=function(){P=!0},r.unstable_runWithPriority=function(k,B){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Y=R;R=k;try{return B()}finally{R=Y}},r.unstable_scheduleCallback=function(k,B,Y){var ve=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ve+Y:ve):Y=ve,k){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Y+Ee,k={id:C++,callback:B,priorityLevel:k,startTime:Y,expirationTime:Ee,sortIndex:-1},Y>ve?(k.sortIndex=Y,u(y,k),f(S)===null&&k===f(y)&&(q?(V(Z),Z=-1):q=!0,we(se,Y-ve))):(k.sortIndex=Ee,u(S,k),Q||j||(Q=!0,me||(me=!0,Ve()))),k},r.unstable_shouldYield=Ot,r.unstable_wrapCallback=function(k){var B=R;return function(){var Y=R;R=B;try{return k.apply(this,arguments)}finally{R=Y}}}})(Uc)),Uc}var df;function Ag(){return df||(df=1,qc.exports=Eg()),qc.exports}var Gc={exports:{}},Xe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf;function Cg(){if(hf)return Xe;hf=1;var r=Zc();function u(S){var y="https://react.dev/errors/"+S;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)y+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+S+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(u(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},h=Symbol.for("react.portal");function m(S,y,C){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:E==null?null:""+E,children:S,containerInfo:y,implementation:C}}var v=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(S,y){if(S==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Xe.createPortal=function(S,y){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(u(299));return m(S,y,null,C)},Xe.flushSync=function(S){var y=v.T,C=s.p;try{if(v.T=null,s.p=2,S)return S()}finally{v.T=y,s.p=C,s.d.f()}},Xe.preconnect=function(S,y){typeof S=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(S,y))},Xe.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Xe.preinit=function(S,y){if(typeof S=="string"&&y&&typeof y.as=="string"){var C=y.as,E=p(C,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,j=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;C==="style"?s.d.S(S,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:E,integrity:R,fetchPriority:j}):C==="script"&&s.d.X(S,{crossOrigin:E,integrity:R,fetchPriority:j,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Xe.preinitModule=function(S,y){if(typeof S=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var C=p(y.as,y.crossOrigin);s.d.M(S,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(S)},Xe.preload=function(S,y){if(typeof S=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var C=y.as,E=p(C,y.crossOrigin);s.d.L(S,C,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Xe.preloadModule=function(S,y){if(typeof S=="string")if(y){var C=p(y.as,y.crossOrigin);s.d.m(S,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(S)},Xe.requestFormReset=function(S){s.d.r(S)},Xe.unstable_batchedUpdates=function(S,y){return S(y)},Xe.useFormState=function(S,y,C){return v.H.useFormState(S,y,C)},Xe.useFormStatus=function(){return v.H.useHostTransitionStatus()},Xe.version="19.2.4",Xe}var ff;function _g(){if(ff)return Gc.exports;ff=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),Gc.exports=Cg(),Gc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function xg(){if(mf)return Bi;mf=1;var r=Ag(),u=Zc(),f=_g();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(m(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return S(i),e;if(l===a)return S(i),t;l=l.sibling}throw Error(s(188))}if(n.return!==a.return)n=i,a=l;else{for(var o=!1,d=i.child;d;){if(d===n){o=!0,n=i,a=l;break}if(d===a){o=!0,a=i,n=l;break}d=d.sibling}if(!o){for(d=l.child;d;){if(d===n){o=!0,n=l,a=i;break}if(d===a){o=!0,a=l,n=i;break}d=d.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,R=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),W=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),Ke=Symbol.for("react.activity"),Ot=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=pt&&e[pt]||e["@@iterator"],typeof e=="function"?e:null)}var wt=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case z:return"Profiler";case P:return"StrictMode";case se:return"Suspense";case me:return"SuspenseList";case Ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case W:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:gt(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return gt(e(t))}catch{}}return null}var we=Array.isArray,k=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ve=[],Ee=-1;function T(e){return{current:e}}function I(e){0>Ee||(e.current=ve[Ee],ve[Ee]=null,Ee--)}function H(e,t){Ee++,ve[Ee]=e.current,e.current=t}var G=T(null),$=T(null),ae=T(null),pe=T(null);function Ye(e,t){switch(H(ae,t),H($,e),H(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Dh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Dh(t),e=Rh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(G),H(G,e)}function Ne(){I(G),I($),I(ae)}function Fa(e){e.memoizedState!==null&&H(pe,e);var t=G.current,n=Rh(t,e.type);t!==n&&(H($,e),H(G,n))}function Ki(e){$.current===e&&(I(G),I($)),pe.current===e&&(I(pe),Oi._currentValue=Y)}var Sr,is;function zn(e){if(Sr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sr=t&&t[1]||"",is=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Sr+e+is}var br=!1;function Tr(e,t){if(!e||br)return"";br=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(L){var M=L}Reflect.construct(e,[],w)}else{try{w.call()}catch(L){M=L}e.call(w.prototype)}}else{try{throw Error()}catch(L){M=L}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(L){if(L&&M&&typeof L.stack=="string")return[L.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),o=l[0],d=l[1];if(o&&d){var g=o.split(`
`),x=d.split(`
`);for(i=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;if(a===g.length||i===x.length)for(a=g.length-1,i=x.length-1;1<=a&&0<=i&&g[a]!==x[i];)i--;for(;1<=a&&0<=i;a--,i--)if(g[a]!==x[i]){if(a!==1||i!==1)do if(a--,i--,0>i||g[a]!==x[i]){var N=`
`+g[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=i);break}}}finally{br=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?zn(n):""}function Yf(e,t){switch(e.tag){case 26:case 27:case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return e.child!==t&&t!==null?zn("Suspense Fallback"):zn("Suspense");case 19:return zn("SuspenseList");case 0:case 15:return Tr(e.type,!1);case 11:return Tr(e.type.render,!1);case 1:return Tr(e.type,!0);case 31:return zn("Activity");default:return""}}function ls(e){try{var t="",n=null;do t+=Yf(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Er=Object.prototype.hasOwnProperty,Ar=r.unstable_scheduleCallback,Cr=r.unstable_cancelCallback,Zf=r.unstable_shouldYield,Jf=r.unstable_requestPaint,lt=r.unstable_now,$f=r.unstable_getCurrentPriorityLevel,rs=r.unstable_ImmediatePriority,os=r.unstable_UserBlockingPriority,Vi=r.unstable_NormalPriority,em=r.unstable_LowPriority,cs=r.unstable_IdlePriority,tm=r.log,nm=r.unstable_setDisableYieldValue,Wa=null,rt=null;function un(e){if(typeof tm=="function"&&nm(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(Wa,e)}catch{}}var ot=Math.clz32?Math.clz32:lm,am=Math.log,im=Math.LN2;function lm(e){return e>>>=0,e===0?32:31-(am(e)/im|0)|0}var Xi=256,Yi=262144,Zi=4194304;function Bn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ji(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=a&134217727;return d!==0?(a=d&~l,a!==0?i=Bn(a):(o&=d,o!==0?i=Bn(o):n||(n=d&~e,n!==0&&(i=Bn(n))))):(d=a&~l,d!==0?i=Bn(d):o!==0?i=Bn(o):n||(n=a&~e,n!==0&&(i=Bn(n)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:i}function Qa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ss(){var e=Zi;return Zi<<=1,(Zi&62914560)===0&&(Zi=4194304),e}function _r(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ka(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function om(e,t,n,a,i,l){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var d=e.entanglements,g=e.expirationTimes,x=e.hiddenUpdates;for(n=o&~n;0<n;){var N=31-ot(n),w=1<<N;d[N]=0,g[N]=-1;var M=x[N];if(M!==null)for(x[N]=null,N=0;N<M.length;N++){var L=M[N];L!==null&&(L.lane&=-536870913)}n&=~w}a!==0&&us(e,a,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function us(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ot(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ot(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function hs(e,t){var n=t&-t;return n=(n&42)!==0?1:xr(n),(n&(e.suspendedLanes|t))!==0?0:n}function xr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fs(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Jh(e.type))}function ms(e,t){var n=B.p;try{return B.p=e,t()}finally{B.p=n}}var dn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+dn,Je="__reactProps$"+dn,aa="__reactContainer$"+dn,Dr="__reactEvents$"+dn,cm="__reactListeners$"+dn,sm="__reactHandles$"+dn,ps="__reactResources$"+dn,Va="__reactMarker$"+dn;function Rr(e){delete e[Ue],delete e[Je],delete e[Dr],delete e[cm],delete e[sm]}function ia(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[aa]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ph(e);e!==null;){if(n=e[Ue])return n;e=Ph(e)}return t}e=n,n=e.parentNode}return null}function la(e){if(e=e[Ue]||e[aa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ra(e){var t=e[ps];return t||(t=e[ps]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[Va]=!0}var gs=new Set,ys={};function Hn(e,t){oa(e,t),oa(e+"Capture",t)}function oa(e,t){for(ys[e]=t,e=0;e<t.length;e++)gs.add(t[e])}var um=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vs={},Ss={};function dm(e){return Er.call(Ss,e)?!0:Er.call(vs,e)?!1:um.test(e)?Ss[e]=!0:(vs[e]=!0,!1)}function $i(e,t,n){if(dm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function el(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ut(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hm(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lr(e){if(!e._valueTracker){var t=bs(e)?"checked":"value";e._valueTracker=hm(e,t,""+e[t])}}function Ts(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=bs(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fm=/[\n"\\]/g;function vt(e){return e.replace(fm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Nr(e,t,n,a,i,l,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?kr(e,o,yt(t)):n!=null?kr(e,o,yt(n)):a!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+yt(d):e.removeAttribute("name")}function Es(e,t,n,a,i,l,o,d){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Lr(e);return}n=n!=null?""+yt(n):"",t=t!=null?""+yt(t):n,d||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=d?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Lr(e)}function kr(e,t,n){t==="number"&&tl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ca(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function As(e,t,n){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+yt(n):""}function Cs(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(we(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=yt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Lr(e)}function sa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _s(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||mm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function xs(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&_s(e,i,a)}else for(var l in t)t.hasOwnProperty(l)&&_s(e,l,t[l])}function Or(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(e){return gm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var wr=null;function Ir(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,da=null;function Ms(e){var t=la(e);if(t&&(e=t.stateNode)){var n=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(Nr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[Je]||null;if(!i)throw Error(s(90));Nr(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ts(a)}break e;case"textarea":As(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ca(e,!!n.multiple,t,!1)}}}var Pr=!1;function Ds(e,t,n){if(Pr)return e(t,n);Pr=!0;try{var a=e(t);return a}finally{if(Pr=!1,(ua!==null||da!==null)&&(Gl(),ua&&(t=ua,e=da,da=ua=null,Ms(t),e)))for(t=0;t<e.length;t++)Ms(e[t])}}function Ya(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Je]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zr=!1;if(Ft)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){zr=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{zr=!1}var hn=null,Br=null,al=null;function Rs(){if(al)return al;var e,t=Br,n=t.length,a,i="value"in hn?hn.value:hn.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===i[l-a];a++);return al=i.slice(e,1<a?1-a:void 0)}function il(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function Ls(){return!1}function $e(e){function t(n,a,i,l,o){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ll:Ls,this.isPropagationStopped=Ls,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=$e(jn),Ja=E({},jn,{view:0,detail:0}),ym=$e(Ja),Hr,jr,$a,ol=E({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ur,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$a&&($a&&e.type==="mousemove"?(Hr=e.screenX-$a.screenX,jr=e.screenY-$a.screenY):jr=Hr=0,$a=e),Hr)},movementY:function(e){return"movementY"in e?e.movementY:jr}}),Ns=$e(ol),vm=E({},ol,{dataTransfer:0}),Sm=$e(vm),bm=E({},Ja,{relatedTarget:0}),qr=$e(bm),Tm=E({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=$e(Tm),Am=E({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cm=$e(Am),_m=E({},jn,{data:0}),ks=$e(_m),xm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dm[e])?!!t[e]:!1}function Ur(){return Rm}var Lm=E({},Ja,{key:function(e){if(e.key){var t=xm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ur,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nm=$e(Lm),km=E({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Os=$e(km),Om=E({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ur}),wm=$e(Om),Im=E({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pm=$e(Im),zm=E({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=$e(zm),Hm=E({},jn,{newState:0,oldState:0}),jm=$e(Hm),qm=[9,13,27,32],Gr=Ft&&"CompositionEvent"in window,ei=null;Ft&&"documentMode"in document&&(ei=document.documentMode);var Um=Ft&&"TextEvent"in window&&!ei,ws=Ft&&(!Gr||ei&&8<ei&&11>=ei),Is=" ",Ps=!1;function zs(e,t){switch(e){case"keyup":return qm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ha=!1;function Gm(e,t){switch(e){case"compositionend":return Bs(t);case"keypress":return t.which!==32?null:(Ps=!0,Is);case"textInput":return e=t.data,e===Is&&Ps?null:e;default:return null}}function Fm(e,t){if(ha)return e==="compositionend"||!Gr&&zs(e,t)?(e=Rs(),al=Br=hn=null,ha=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ws&&t.locale!=="ko"?null:t.data;default:return null}}var Wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wm[e.type]:t==="textarea"}function js(e,t,n,a){ua?da?da.push(a):da=[a]:ua=a,t=Yl(t,"onChange"),0<t.length&&(n=new rl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ti=null,ni=null;function Qm(e){Eh(e,0)}function cl(e){var t=Xa(e);if(Ts(t))return e}function qs(e,t){if(e==="change")return t}var Us=!1;if(Ft){var Fr;if(Ft){var Wr="oninput"in document;if(!Wr){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),Wr=typeof Gs.oninput=="function"}Fr=Wr}else Fr=!1;Us=Fr&&(!document.documentMode||9<document.documentMode)}function Fs(){ti&&(ti.detachEvent("onpropertychange",Ws),ni=ti=null)}function Ws(e){if(e.propertyName==="value"&&cl(ni)){var t=[];js(t,ni,e,Ir(e)),Ds(Qm,t)}}function Km(e,t,n){e==="focusin"?(Fs(),ti=t,ni=n,ti.attachEvent("onpropertychange",Ws)):e==="focusout"&&Fs()}function Vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(ni)}function Xm(e,t){if(e==="click")return cl(t)}function Ym(e,t){if(e==="input"||e==="change")return cl(t)}function Zm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Zm;function ai(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Er.call(t,i)||!ct(e[i],t[i]))return!1}return!0}function Qs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ks(e,t){var n=Qs(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qs(n)}}function Vs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=tl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tl(e.document)}return t}function Qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Jm=Ft&&"documentMode"in document&&11>=document.documentMode,fa=null,Kr=null,ii=null,Vr=!1;function Ys(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||fa==null||fa!==tl(a)||(a=fa,"selectionStart"in a&&Qr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ii&&ai(ii,a)||(ii=a,a=Yl(Kr,"onSelect"),0<a.length&&(t=new rl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=fa)))}function qn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ma={animationend:qn("Animation","AnimationEnd"),animationiteration:qn("Animation","AnimationIteration"),animationstart:qn("Animation","AnimationStart"),transitionrun:qn("Transition","TransitionRun"),transitionstart:qn("Transition","TransitionStart"),transitioncancel:qn("Transition","TransitionCancel"),transitionend:qn("Transition","TransitionEnd")},Xr={},Zs={};Ft&&(Zs=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Un(e){if(Xr[e])return Xr[e];if(!ma[e])return e;var t=ma[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zs)return Xr[e]=t[n];return e}var Js=Un("animationend"),$s=Un("animationiteration"),eu=Un("animationstart"),$m=Un("transitionrun"),ep=Un("transitionstart"),tp=Un("transitioncancel"),tu=Un("transitionend"),nu=new Map,Yr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yr.push("scrollEnd");function Dt(e,t){nu.set(e,t),Hn(t,[e])}var sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},St=[],pa=0,Zr=0;function ul(){for(var e=pa,t=Zr=pa=0;t<e;){var n=St[t];St[t++]=null;var a=St[t];St[t++]=null;var i=St[t];St[t++]=null;var l=St[t];if(St[t++]=null,a!==null&&i!==null){var o=a.pending;o===null?i.next=i:(i.next=o.next,o.next=i),a.pending=i}l!==0&&au(n,i,l)}}function dl(e,t,n,a){St[pa++]=e,St[pa++]=t,St[pa++]=n,St[pa++]=a,Zr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Jr(e,t,n,a){return dl(e,t,n,a),hl(e)}function Gn(e,t){return dl(e,null,null,t),hl(e)}function au(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,l=e.return;l!==null;)l.childLanes|=n,a=l.alternate,a!==null&&(a.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-ot(n),e=l.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),l):null}function hl(e){if(50<xi)throw xi=0,cc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ga={};function np(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,a){return new np(e,t,n,a)}function $r(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function iu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fl(e,t,n,a,i,l){var o=0;if(a=e,typeof e=="function")$r(e)&&(o=1);else if(typeof e=="string")o=og(e,n,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ke:return e=st(31,n,t,i),e.elementType=Ke,e.lanes=l,e;case q:return Fn(n.children,i,l,t);case P:o=8,i|=24;break;case z:return e=st(12,n,t,i|2),e.elementType=z,e.lanes=l,e;case se:return e=st(13,n,t,i),e.elementType=se,e.lanes=l,e;case me:return e=st(19,n,t,i),e.elementType=me,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:o=10;break e;case V:o=9;break e;case ne:o=11;break e;case Z:o=14;break e;case Le:o=16,a=null;break e}o=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=st(o,n,t,i),t.elementType=e,t.type=a,t.lanes=l,t}function Fn(e,t,n,a){return e=st(7,e,a,t),e.lanes=n,e}function eo(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function lu(e){var t=st(18,null,null,0);return t.stateNode=e,t}function to(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ru=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var n=ru.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ls(t)},ru.set(e,t),t)}return{value:e,source:t,stack:ls(t)}}var ya=[],va=0,ml=null,li=0,Tt=[],Et=0,fn=null,It=1,Pt="";function Qt(e,t){ya[va++]=li,ya[va++]=ml,ml=e,li=t}function ou(e,t,n){Tt[Et++]=It,Tt[Et++]=Pt,Tt[Et++]=fn,fn=e;var a=It;e=Pt;var i=32-ot(a)-1;a&=~(1<<i),n+=1;var l=32-ot(t)+i;if(30<l){var o=i-i%5;l=(a&(1<<o)-1).toString(32),a>>=o,i-=o,It=1<<32-ot(t)+i|n<<i|a,Pt=l+e}else It=1<<l|n<<i|a,Pt=e}function no(e){e.return!==null&&(Qt(e,1),ou(e,1,0))}function ao(e){for(;e===ml;)ml=ya[--va],ya[va]=null,li=ya[--va],ya[va]=null;for(;e===fn;)fn=Tt[--Et],Tt[Et]=null,Pt=Tt[--Et],Tt[Et]=null,It=Tt[--Et],Tt[Et]=null}function cu(e,t){Tt[Et++]=It,Tt[Et++]=Pt,Tt[Et++]=fn,It=t.id,Pt=t.overflow,fn=e}var Ge=null,Ce=null,ce=!1,mn=null,At=!1,io=Error(s(519));function pn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ri(bt(t,e)),io}function su(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ue]=e,t[Je]=a,n){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(n=0;n<Di.length;n++)le(Di[n],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),Es(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),Cs(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||xh(t.textContent,n)?(a.popover!=null&&(le("beforetoggle",t),le("toggle",t)),a.onScroll!=null&&le("scroll",t),a.onScrollEnd!=null&&le("scrollend",t),a.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||pn(e,!0)}function uu(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:At=!1;return;case 27:case 3:At=!0;return;default:Ge=Ge.return}}function Sa(e){if(e!==Ge)return!1;if(!ce)return uu(e),ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ac(e.type,e.memoizedProps)),n=!n),n&&Ce&&pn(e),uu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ce=Ih(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ce=Ih(e)}else t===27?(t=Ce,Rn(e.type)?(e=Dc,Dc=null,Ce=e):Ce=t):Ce=Ge?_t(e.stateNode.nextSibling):null;return!0}function Wn(){Ce=Ge=null,ce=!1}function lo(){var e=mn;return e!==null&&(at===null?at=e:at.push.apply(at,e),mn=null),e}function ri(e){mn===null?mn=[e]:mn.push(e)}var ro=T(null),Qn=null,Kt=null;function gn(e,t,n){H(ro,t._currentValue),t._currentValue=n}function Vt(e){e._currentValue=ro.current,I(ro)}function oo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function co(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var o=i.child;l=l.firstContext;e:for(;l!==null;){var d=l;l=i;for(var g=0;g<t.length;g++)if(d.context===t[g]){l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),oo(l.return,n,e),a||(o=null);break e}l=d.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),oo(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ba(e,t,n,a){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var d=i.type;ct(i.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(i===pe.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Oi):e=[Oi])}i=i.return}e!==null&&co(t,e,n,a),t.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Kn(e){Qn=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return du(Qn,e)}function gl(e,t){return Qn===null&&Kn(e),du(e,t)}function du(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Kt===null){if(e===null)throw Error(s(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return n}var ap=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ip=r.unstable_scheduleCallback,lp=r.unstable_NormalPriority,Ie={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function so(){return{controller:new ap,data:new Map,refCount:0}}function oi(e){e.refCount--,e.refCount===0&&ip(lp,function(){e.controller.abort()})}var ci=null,uo=0,Ta=0,Ea=null;function rp(e,t){if(ci===null){var n=ci=[];uo=0,Ta=mc(),Ea={status:"pending",value:void 0,then:function(a){n.push(a)}}}return uo++,t.then(hu,hu),t}function hu(){if(--uo===0&&ci!==null){Ea!==null&&(Ea.status="fulfilled");var e=ci;ci=null,Ta=0,Ea=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function op(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var fu=k.S;k.S=function(e,t){Yd=lt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&rp(e,t),fu!==null&&fu(e,t)};var Vn=T(null);function ho(){var e=Vn.current;return e!==null?e:Ae.pooledCache}function yl(e,t){t===null?H(Vn,Vn.current):H(Vn,t.pool)}function mu(){var e=ho();return e===null?null:{parent:Ie._currentValue,pool:e}}var Aa=Error(s(460)),fo=Error(s(474)),vl=Error(s(542)),Sl={then:function(){}};function pu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Gt,Gt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vu(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vu(e),e}throw Yn=t,Aa}}function Xn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Yn=n,Aa):n}}var Yn=null;function yu(){if(Yn===null)throw Error(s(459));var e=Yn;return Yn=null,e}function vu(e){if(e===Aa||e===vl)throw Error(s(483))}var Ca=null,si=0;function bl(e){var t=si;return si+=1,Ca===null&&(Ca=[]),gu(Ca,e,t)}function ui(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tl(e,t){throw t.$$typeof===R?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Su(e){function t(A,b){if(e){var _=A.deletions;_===null?(A.deletions=[b],A.flags|=16):_.push(b)}}function n(A,b){if(!e)return null;for(;b!==null;)t(A,b),b=b.sibling;return null}function a(A){for(var b=new Map;A!==null;)A.key!==null?b.set(A.key,A):b.set(A.index,A),A=A.sibling;return b}function i(A,b){return A=Wt(A,b),A.index=0,A.sibling=null,A}function l(A,b,_){return A.index=_,e?(_=A.alternate,_!==null?(_=_.index,_<b?(A.flags|=67108866,b):_):(A.flags|=67108866,b)):(A.flags|=1048576,b)}function o(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function d(A,b,_,O){return b===null||b.tag!==6?(b=eo(_,A.mode,O),b.return=A,b):(b=i(b,_),b.return=A,b)}function g(A,b,_,O){var K=_.type;return K===q?N(A,b,_.props.children,O,_.key):b!==null&&(b.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Le&&Xn(K)===b.type)?(b=i(b,_.props),ui(b,_),b.return=A,b):(b=fl(_.type,_.key,_.props,null,A.mode,O),ui(b,_),b.return=A,b)}function x(A,b,_,O){return b===null||b.tag!==4||b.stateNode.containerInfo!==_.containerInfo||b.stateNode.implementation!==_.implementation?(b=to(_,A.mode,O),b.return=A,b):(b=i(b,_.children||[]),b.return=A,b)}function N(A,b,_,O,K){return b===null||b.tag!==7?(b=Fn(_,A.mode,O,K),b.return=A,b):(b=i(b,_),b.return=A,b)}function w(A,b,_){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=eo(""+b,A.mode,_),b.return=A,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case j:return _=fl(b.type,b.key,b.props,null,A.mode,_),ui(_,b),_.return=A,_;case Q:return b=to(b,A.mode,_),b.return=A,b;case Le:return b=Xn(b),w(A,b,_)}if(we(b)||Ve(b))return b=Fn(b,A.mode,_,null),b.return=A,b;if(typeof b.then=="function")return w(A,bl(b),_);if(b.$$typeof===W)return w(A,gl(A,b),_);Tl(A,b)}return null}function M(A,b,_,O){var K=b!==null?b.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return K!==null?null:d(A,b,""+_,O);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case j:return _.key===K?g(A,b,_,O):null;case Q:return _.key===K?x(A,b,_,O):null;case Le:return _=Xn(_),M(A,b,_,O)}if(we(_)||Ve(_))return K!==null?null:N(A,b,_,O,null);if(typeof _.then=="function")return M(A,b,bl(_),O);if(_.$$typeof===W)return M(A,b,gl(A,_),O);Tl(A,_)}return null}function L(A,b,_,O,K){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return A=A.get(_)||null,d(b,A,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case j:return A=A.get(O.key===null?_:O.key)||null,g(b,A,O,K);case Q:return A=A.get(O.key===null?_:O.key)||null,x(b,A,O,K);case Le:return O=Xn(O),L(A,b,_,O,K)}if(we(O)||Ve(O))return A=A.get(_)||null,N(b,A,O,K,null);if(typeof O.then=="function")return L(A,b,_,bl(O),K);if(O.$$typeof===W)return L(A,b,_,gl(b,O),K);Tl(b,O)}return null}function U(A,b,_,O){for(var K=null,ue=null,F=b,te=b=0,oe=null;F!==null&&te<_.length;te++){F.index>te?(oe=F,F=null):oe=F.sibling;var de=M(A,F,_[te],O);if(de===null){F===null&&(F=oe);break}e&&F&&de.alternate===null&&t(A,F),b=l(de,b,te),ue===null?K=de:ue.sibling=de,ue=de,F=oe}if(te===_.length)return n(A,F),ce&&Qt(A,te),K;if(F===null){for(;te<_.length;te++)F=w(A,_[te],O),F!==null&&(b=l(F,b,te),ue===null?K=F:ue.sibling=F,ue=F);return ce&&Qt(A,te),K}for(F=a(F);te<_.length;te++)oe=L(F,A,te,_[te],O),oe!==null&&(e&&oe.alternate!==null&&F.delete(oe.key===null?te:oe.key),b=l(oe,b,te),ue===null?K=oe:ue.sibling=oe,ue=oe);return e&&F.forEach(function(wn){return t(A,wn)}),ce&&Qt(A,te),K}function X(A,b,_,O){if(_==null)throw Error(s(151));for(var K=null,ue=null,F=b,te=b=0,oe=null,de=_.next();F!==null&&!de.done;te++,de=_.next()){F.index>te?(oe=F,F=null):oe=F.sibling;var wn=M(A,F,de.value,O);if(wn===null){F===null&&(F=oe);break}e&&F&&wn.alternate===null&&t(A,F),b=l(wn,b,te),ue===null?K=wn:ue.sibling=wn,ue=wn,F=oe}if(de.done)return n(A,F),ce&&Qt(A,te),K;if(F===null){for(;!de.done;te++,de=_.next())de=w(A,de.value,O),de!==null&&(b=l(de,b,te),ue===null?K=de:ue.sibling=de,ue=de);return ce&&Qt(A,te),K}for(F=a(F);!de.done;te++,de=_.next())de=L(F,A,te,de.value,O),de!==null&&(e&&de.alternate!==null&&F.delete(de.key===null?te:de.key),b=l(de,b,te),ue===null?K=de:ue.sibling=de,ue=de);return e&&F.forEach(function(vg){return t(A,vg)}),ce&&Qt(A,te),K}function Te(A,b,_,O){if(typeof _=="object"&&_!==null&&_.type===q&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case j:e:{for(var K=_.key;b!==null;){if(b.key===K){if(K=_.type,K===q){if(b.tag===7){n(A,b.sibling),O=i(b,_.props.children),O.return=A,A=O;break e}}else if(b.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Le&&Xn(K)===b.type){n(A,b.sibling),O=i(b,_.props),ui(O,_),O.return=A,A=O;break e}n(A,b);break}else t(A,b);b=b.sibling}_.type===q?(O=Fn(_.props.children,A.mode,O,_.key),O.return=A,A=O):(O=fl(_.type,_.key,_.props,null,A.mode,O),ui(O,_),O.return=A,A=O)}return o(A);case Q:e:{for(K=_.key;b!==null;){if(b.key===K)if(b.tag===4&&b.stateNode.containerInfo===_.containerInfo&&b.stateNode.implementation===_.implementation){n(A,b.sibling),O=i(b,_.children||[]),O.return=A,A=O;break e}else{n(A,b);break}else t(A,b);b=b.sibling}O=to(_,A.mode,O),O.return=A,A=O}return o(A);case Le:return _=Xn(_),Te(A,b,_,O)}if(we(_))return U(A,b,_,O);if(Ve(_)){if(K=Ve(_),typeof K!="function")throw Error(s(150));return _=K.call(_),X(A,b,_,O)}if(typeof _.then=="function")return Te(A,b,bl(_),O);if(_.$$typeof===W)return Te(A,b,gl(A,_),O);Tl(A,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,b!==null&&b.tag===6?(n(A,b.sibling),O=i(b,_),O.return=A,A=O):(n(A,b),O=eo(_,A.mode,O),O.return=A,A=O),o(A)):n(A,b)}return function(A,b,_,O){try{si=0;var K=Te(A,b,_,O);return Ca=null,K}catch(F){if(F===Aa||F===vl)throw F;var ue=st(29,F,null,A.mode);return ue.lanes=O,ue.return=A,ue}finally{}}}var Zn=Su(!0),bu=Su(!1),yn=!1;function mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function po(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(fe&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=hl(e),au(e,null,n),t}return dl(e,a,t,n),hl(e)}function di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ds(e,n)}}function go(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var yo=!1;function hi(){if(yo){var e=Ea;if(e!==null)throw e}}function fi(e,t,n,a){yo=!1;var i=e.updateQueue;yn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var g=d,x=g.next;g.next=null,o===null?l=x:o.next=x,o=g;var N=e.alternate;N!==null&&(N=N.updateQueue,d=N.lastBaseUpdate,d!==o&&(d===null?N.firstBaseUpdate=x:d.next=x,N.lastBaseUpdate=g))}if(l!==null){var w=i.baseState;o=0,N=x=g=null,d=l;do{var M=d.lane&-536870913,L=M!==d.lane;if(L?(re&M)===M:(a&M)===M){M!==0&&M===Ta&&(yo=!0),N!==null&&(N=N.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var U=e,X=d;M=t;var Te=n;switch(X.tag){case 1:if(U=X.payload,typeof U=="function"){w=U.call(Te,w,M);break e}w=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=X.payload,M=typeof U=="function"?U.call(Te,w,M):U,M==null)break e;w=E({},w,M);break e;case 2:yn=!0}}M=d.callback,M!==null&&(e.flags|=64,L&&(e.flags|=8192),L=i.callbacks,L===null?i.callbacks=[M]:L.push(M))}else L={lane:M,tag:d.tag,payload:d.payload,callback:d.callback,next:null},N===null?(x=N=L,g=w):N=N.next=L,o|=M;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;L=d,d=L.next,L.next=null,i.lastBaseUpdate=L,i.shared.pending=null}}while(!0);N===null&&(g=w),i.baseState=g,i.firstBaseUpdate=x,i.lastBaseUpdate=N,l===null&&(i.shared.lanes=0),Cn|=o,e.lanes=o,e.memoizedState=w}}function Tu(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Eu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Tu(n[e],t)}var _a=T(null),El=T(0);function Au(e,t){e=an,H(El,e),H(_a,t),an=e|t.baseLanes}function vo(){H(El,an),H(_a,_a.current)}function So(){an=El.current,I(_a),I(El)}var ut=T(null),Ct=null;function bn(e){var t=e.alternate;H(ke,ke.current&1),H(ut,e),Ct===null&&(t===null||_a.current!==null||t.memoizedState!==null)&&(Ct=e)}function bo(e){H(ke,ke.current),H(ut,e),Ct===null&&(Ct=e)}function Cu(e){e.tag===22?(H(ke,ke.current),H(ut,e),Ct===null&&(Ct=e)):Tn()}function Tn(){H(ke,ke.current),H(ut,ut.current)}function dt(e){I(ut),Ct===e&&(Ct=null),I(ke)}var ke=T(0);function Al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||xc(n)||Mc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,ee=null,Se=null,Pe=null,Cl=!1,xa=!1,Jn=!1,_l=0,mi=0,Ma=null,cp=0;function De(){throw Error(s(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Eo(e,t,n,a,i,l){return Xt=l,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?od:zo,Jn=!1,l=n(a,i),Jn=!1,xa&&(l=xu(t,n,a,i)),_u(e),l}function _u(e){k.H=yi;var t=Se!==null&&Se.next!==null;if(Xt=0,Pe=Se=ee=null,Cl=!1,mi=0,Ma=null,t)throw Error(s(300));e===null||ze||(e=e.dependencies,e!==null&&pl(e)&&(ze=!0))}function xu(e,t,n,a){ee=e;var i=0;do{if(xa&&(Ma=null),mi=0,xa=!1,25<=i)throw Error(s(301));if(i+=1,Pe=Se=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}k.H=cd,l=t(n,a)}while(xa);return l}function sp(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?pi(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(ee.flags|=1024),t}function Ao(){var e=_l!==0;return _l=0,e}function Co(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function _o(e){if(Cl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Cl=!1}Xt=0,Pe=Se=ee=null,xa=!1,mi=_l=0,Ma=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ee.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Oe(){if(Se===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Pe===null?ee.memoizedState:Pe.next;if(t!==null)Pe=t,Se=e;else{if(e===null)throw ee.alternate===null?Error(s(467)):Error(s(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Pe===null?ee.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pi(e){var t=mi;return mi+=1,Ma===null&&(Ma=[]),e=gu(Ma,e,t),t=ee,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?od:zo),e}function Ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pi(e);if(e.$$typeof===W)return Fe(e)}throw Error(s(438,String(e)))}function xo(e){var t=null,n=ee.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ee.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=xl(),ee.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Ot;return t.index++,n}function Yt(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=Oe();return Mo(t,Se,e)}function Mo(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var i=e.baseQueue,l=a.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}t.baseQueue=i=l,a.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var d=o=null,g=null,x=t,N=!1;do{var w=x.lane&-536870913;if(w!==x.lane?(re&w)===w:(Xt&w)===w){var M=x.revertLane;if(M===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),w===Ta&&(N=!0);else if((Xt&M)===M){x=x.next,M===Ta&&(N=!0);continue}else w={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},g===null?(d=g=w,o=l):g=g.next=w,ee.lanes|=M,Cn|=M;w=x.action,Jn&&n(l,w),l=x.hasEagerState?x.eagerState:n(l,w)}else M={lane:w,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},g===null?(d=g=M,o=l):g=g.next=M,ee.lanes|=w,Cn|=w;x=x.next}while(x!==null&&x!==t);if(g===null?o=l:g.next=d,!ct(l,e.memoizedState)&&(ze=!0,N&&(n=Ea,n!==null)))throw n;e.memoizedState=l,e.baseState=o,e.baseQueue=g,a.lastRenderedState=l}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Do(e){var t=Oe(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);ct(l,t.memoizedState)||(ze=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function Mu(e,t,n){var a=ee,i=Oe(),l=ce;if(l){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!ct((Se||i).memoizedState,n);if(o&&(i.memoizedState=n,ze=!0),i=i.queue,No(Lu.bind(null,a,i,e),[e]),i.getSnapshot!==t||o||Pe!==null&&Pe.memoizedState.tag&1){if(a.flags|=2048,Da(9,{destroy:void 0},Ru.bind(null,a,i,n,t),null),Ae===null)throw Error(s(349));l||(Xt&127)!==0||Du(a,t,n)}return n}function Du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t=xl(),ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ru(e,t,n,a){t.value=n,t.getSnapshot=a,Nu(t)&&ku(e)}function Lu(e,t,n){return n(function(){Nu(t)&&ku(e)})}function Nu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function ku(e){var t=Gn(e,2);t!==null&&it(t,e,2)}function Ro(e){var t=Ze();if(typeof e=="function"){var n=e;if(e=n(),Jn){un(!0);try{n()}finally{un(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function Ou(e,t,n,a){return e.baseState=n,Mo(e,Se,typeof a=="function"?a:Yt)}function up(e,t,n,a,i){if(Nl(e))throw Error(s(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};k.T!==null?n(!0):l.isTransition=!1,a(l),n=t.pending,n===null?(l.next=t.pending=l,wu(t,l)):(l.next=n.next,t.pending=n.next=l)}}function wu(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var l=k.T,o={};k.T=o;try{var d=n(i,a),g=k.S;g!==null&&g(o,d),Iu(e,t,d)}catch(x){Lo(e,t,x)}finally{l!==null&&o.types!==null&&(l.types=o.types),k.T=l}}else try{l=n(i,a),Iu(e,t,l)}catch(x){Lo(e,t,x)}}function Iu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Pu(e,t,a)},function(a){return Lo(e,t,a)}):Pu(e,t,n)}function Pu(e,t,n){t.status="fulfilled",t.value=n,zu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,wu(e,n)))}function Lo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,zu(t),t=t.next;while(t!==a)}e.action=null}function zu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Bu(e,t){return t}function Hu(e,t){if(ce){var n=Ae.formState;if(n!==null){e:{var a=ee;if(ce){if(Ce){t:{for(var i=Ce,l=At;i.nodeType!==8;){if(!l){i=null;break t}if(i=_t(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Ce=_t(i.nextSibling),a=i.data==="F!";break e}}pn(a)}a=!1}a&&(t=n[0])}}return n=Ze(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bu,lastRenderedState:t},n.queue=a,n=id.bind(null,ee,a),a.dispatch=n,a=Ro(!1),l=Po.bind(null,ee,!1,a.queue),a=Ze(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=up.bind(null,ee,i,l,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function ju(e){var t=Oe();return qu(t,Se,e)}function qu(e,t,n){if(t=Mo(e,t,Bu)[0],e=Dl(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=pi(t)}catch(o){throw o===Aa?vl:o}else a=t;t=Oe();var i=t.queue,l=i.dispatch;return n!==t.memoizedState&&(ee.flags|=2048,Da(9,{destroy:void 0},dp.bind(null,i,n),null)),[a,l,e]}function dp(e,t){e.action=t}function Uu(e){var t=Oe(),n=Se;if(n!==null)return qu(t,n,e);Oe(),t=t.memoizedState,n=Oe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Da(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ee.updateQueue,t===null&&(t=xl(),ee.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Gu(){return Oe().memoizedState}function Rl(e,t,n,a){var i=Ze();ee.flags|=e,i.memoizedState=Da(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ll(e,t,n,a){var i=Oe();a=a===void 0?null:a;var l=i.memoizedState.inst;Se!==null&&a!==null&&To(a,Se.memoizedState.deps)?i.memoizedState=Da(t,l,n,a):(ee.flags|=e,i.memoizedState=Da(1|t,l,n,a))}function Fu(e,t){Rl(8390656,8,e,t)}function No(e,t){Ll(2048,8,e,t)}function hp(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=xl(),ee.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Wu(e){var t=Oe().memoizedState;return hp({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Qu(e,t){return Ll(4,2,e,t)}function Ku(e,t){return Ll(4,4,e,t)}function Vu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xu(e,t,n){n=n!=null?n.concat([e]):null,Ll(4,4,Vu.bind(null,t,e),n)}function ko(){}function Yu(e,t){var n=Oe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&To(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Zu(e,t){var n=Oe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&To(t,a[1]))return a[0];if(a=e(),Jn){un(!0);try{e()}finally{un(!1)}}return n.memoizedState=[a,t],a}function Oo(e,t,n){return n===void 0||(Xt&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Jd(),ee.lanes|=e,Cn|=e,n)}function Ju(e,t,n,a){return ct(n,t)?n:_a.current!==null?(e=Oo(e,n,a),ct(e,t)||(ze=!0),e):(Xt&42)===0||(Xt&1073741824)!==0&&(re&261930)===0?(ze=!0,e.memoizedState=n):(e=Jd(),ee.lanes|=e,Cn|=e,t)}function $u(e,t,n,a,i){var l=B.p;B.p=l!==0&&8>l?l:8;var o=k.T,d={};k.T=d,Po(e,!1,t,n);try{var g=i(),x=k.S;if(x!==null&&x(d,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var N=op(g,a);gi(e,t,N,mt(e))}else gi(e,t,a,mt(e))}catch(w){gi(e,t,{then:function(){},status:"rejected",reason:w},mt())}finally{B.p=l,o!==null&&d.types!==null&&(o.types=d.types),k.T=o}}function fp(){}function wo(e,t,n,a){if(e.tag!==5)throw Error(s(476));var i=ed(e).queue;$u(e,i,t,Y,n===null?fp:function(){return td(e),n(a)})}function ed(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:Y},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function td(e){var t=ed(e);t.next===null&&(t=e.alternate.memoizedState),gi(e,t.next.queue,{},mt())}function Io(){return Fe(Oi)}function nd(){return Oe().memoizedState}function ad(){return Oe().memoizedState}function mp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mt();e=vn(n);var a=Sn(t,e,n);a!==null&&(it(a,t,n),di(a,t,n)),t={cache:so()},e.payload=t;return}t=t.return}}function pp(e,t,n){var a=mt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Nl(e)?ld(t,n):(n=Jr(e,t,n,a),n!==null&&(it(n,e,a),rd(n,t,a)))}function id(e,t,n){var a=mt();gi(e,t,n,a)}function gi(e,t,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))ld(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,d=l(o,n);if(i.hasEagerState=!0,i.eagerState=d,ct(d,o))return dl(e,t,i,0),Ae===null&&ul(),!1}catch{}finally{}if(n=Jr(e,t,i,a),n!==null)return it(n,e,a),rd(n,t,a),!0}return!1}function Po(e,t,n,a){if(a={lane:2,revertLane:mc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(t)throw Error(s(479))}else t=Jr(e,n,a,2),t!==null&&it(t,e,2)}function Nl(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function ld(e,t){xa=Cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ds(e,n)}}var yi={readContext:Fe,use:Ml,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};yi.useEffectEvent=De;var od={readContext:Fe,use:Ml,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Fu,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Rl(4194308,4,Vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rl(4194308,4,e,t)},useInsertionEffect:function(e,t){Rl(4,2,e,t)},useMemo:function(e,t){var n=Ze();t=t===void 0?null:t;var a=e();if(Jn){un(!0);try{e()}finally{un(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Ze();if(n!==void 0){var i=n(t);if(Jn){un(!0);try{n(t)}finally{un(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=pp.bind(null,ee,e),[a.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:function(e){e=Ro(e);var t=e.queue,n=id.bind(null,ee,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ko,useDeferredValue:function(e,t){var n=Ze();return Oo(n,e,t)},useTransition:function(){var e=Ro(!1);return e=$u.bind(null,ee,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ee,i=Ze();if(ce){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ae===null)throw Error(s(349));(re&127)!==0||Du(a,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Fu(Lu.bind(null,a,l,e),[e]),a.flags|=2048,Da(9,{destroy:void 0},Ru.bind(null,a,l,n,t),null),n},useId:function(){var e=Ze(),t=Ae.identifierPrefix;if(ce){var n=Pt,a=It;n=(a&~(1<<32-ot(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=_l++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=cp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Io,useFormState:Hu,useActionState:Hu,useOptimistic:function(e){var t=Ze();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Po.bind(null,ee,!0,n),n.dispatch=t,[e,t]},useMemoCache:xo,useCacheRefresh:function(){return Ze().memoizedState=mp.bind(null,ee)},useEffectEvent:function(e){var t=Ze(),n={impl:e};return t.memoizedState=n,function(){if((fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},zo={readContext:Fe,use:Ml,useCallback:Yu,useContext:Fe,useEffect:No,useImperativeHandle:Xu,useInsertionEffect:Qu,useLayoutEffect:Ku,useMemo:Zu,useReducer:Dl,useRef:Gu,useState:function(){return Dl(Yt)},useDebugValue:ko,useDeferredValue:function(e,t){var n=Oe();return Ju(n,Se.memoizedState,e,t)},useTransition:function(){var e=Dl(Yt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:pi(e),t]},useSyncExternalStore:Mu,useId:nd,useHostTransitionStatus:Io,useFormState:ju,useActionState:ju,useOptimistic:function(e,t){var n=Oe();return Ou(n,Se,e,t)},useMemoCache:xo,useCacheRefresh:ad};zo.useEffectEvent=Wu;var cd={readContext:Fe,use:Ml,useCallback:Yu,useContext:Fe,useEffect:No,useImperativeHandle:Xu,useInsertionEffect:Qu,useLayoutEffect:Ku,useMemo:Zu,useReducer:Do,useRef:Gu,useState:function(){return Do(Yt)},useDebugValue:ko,useDeferredValue:function(e,t){var n=Oe();return Se===null?Oo(n,e,t):Ju(n,Se.memoizedState,e,t)},useTransition:function(){var e=Do(Yt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:pi(e),t]},useSyncExternalStore:Mu,useId:nd,useHostTransitionStatus:Io,useFormState:Uu,useActionState:Uu,useOptimistic:function(e,t){var n=Oe();return Se!==null?Ou(n,Se,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:xo,useCacheRefresh:ad};cd.useEffectEvent=Wu;function Bo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ho={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=mt(),i=vn(a);i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(it(t,e,a),di(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=mt(),i=vn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(it(t,e,a),di(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),a=vn(n);a.tag=2,t!=null&&(a.callback=t),t=Sn(e,a,n),t!==null&&(it(t,e,n),di(t,e,n))}};function sd(e,t,n,a,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,o):t.prototype&&t.prototype.isPureReactComponent?!ai(n,a)||!ai(i,l):!0}function ud(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ho.enqueueReplaceState(t,t.state,null)}function $n(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function dd(e){sl(e)}function hd(e){console.error(e)}function fd(e){sl(e)}function kl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function md(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function jo(e,t,n){return n=vn(n),n.tag=3,n.payload={element:null},n.callback=function(){kl(e,t)},n}function pd(e){return e=vn(e),e.tag=3,e}function gd(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;e.payload=function(){return i(l)},e.callback=function(){md(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){md(t,n,a),typeof i!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function gp(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ba(t,n,i,!0),n=ut.current,n!==null){switch(n.tag){case 31:case 13:return Ct===null?Fl():n.alternate===null&&Re===0&&(Re=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Sl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),dc(e,a,i)),!1;case 22:return n.flags|=65536,a===Sl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),dc(e,a,i)),!1}throw Error(s(435,n.tag))}return dc(e,a,i),Fl(),!1}if(ce)return t=ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==io&&(e=Error(s(422),{cause:a}),ri(bt(e,n)))):(a!==io&&(t=Error(s(423),{cause:a}),ri(bt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=bt(a,n),i=jo(e.stateNode,a,i),go(e,i),Re!==4&&(Re=2)),!1;var l=Error(s(520),{cause:a});if(l=bt(l,n),_i===null?_i=[l]:_i.push(l),Re!==4&&(Re=2),t===null)return!0;a=bt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=jo(n.stateNode,a,e),go(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(_n===null||!_n.has(l))))return n.flags|=65536,i&=-i,n.lanes|=i,i=pd(i),gd(i,e,n,a),go(n,i),!1}n=n.return}while(n!==null);return!1}var qo=Error(s(461)),ze=!1;function We(e,t,n,a){t.child=e===null?bu(t,null,n,a):Zn(t,e.child,n,a)}function yd(e,t,n,a,i){n=n.render;var l=t.ref;if("ref"in a){var o={};for(var d in a)d!=="ref"&&(o[d]=a[d])}else o=a;return Kn(t),a=Eo(e,t,n,o,l,i),d=Ao(),e!==null&&!ze?(Co(e,t,i),Zt(e,t,i)):(ce&&d&&no(t),t.flags|=1,We(e,t,a,i),t.child)}function vd(e,t,n,a,i){if(e===null){var l=n.type;return typeof l=="function"&&!$r(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,Sd(e,t,l,a,i)):(e=fl(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Xo(e,i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:ai,n(o,a)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=Wt(l,a),e.ref=t.ref,e.return=t,t.child=e}function Sd(e,t,n,a,i){if(e!==null){var l=e.memoizedProps;if(ai(l,a)&&e.ref===t.ref)if(ze=!1,t.pendingProps=a=l,Xo(e,i))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return Uo(e,t,n,a,i)}function bd(e,t,n,a){var i=a.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,t.child=null;return Td(e,t,l,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(t,l!==null?l.cachePool:null),l!==null?Au(t,l):vo(),Cu(t);else return a=t.lanes=536870912,Td(e,t,l!==null?l.baseLanes|n:n,n,a)}else l!==null?(yl(t,l.cachePool),Au(t,l),Tn(),t.memoizedState=null):(e!==null&&yl(t,null),vo(),Tn());return We(e,t,i,n),t.child}function vi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Td(e,t,n,a,i){var l=ho();return l=l===null?null:{parent:Ie._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&yl(t,null),vo(),Cu(t),e!==null&&ba(e,t,a,!0),t.childLanes=i,null}function Ol(e,t){return t=Il({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ed(e,t,n){return Zn(t,e.child,null,n),e=Ol(t,t.pendingProps),e.flags|=2,dt(t),t.memoizedState=null,e}function yp(e,t,n){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(a.mode==="hidden")return e=Ol(t,a),t.lanes=536870912,vi(null,e);if(bo(t),(e=Ce)?(e=wh(e,At),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fn!==null?{id:It,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=lu(e),n.return=t,t.child=n,Ge=t,Ce=null)):e=null,e===null)throw pn(t);return t.lanes=536870912,null}return Ol(t,a)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(bo(t),i)if(t.flags&256)t.flags&=-257,t=Ed(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ze||ba(e,t,n,!1),i=(n&e.childLanes)!==0,ze||i){if(a=Ae,a!==null&&(o=hs(a,n),o!==0&&o!==l.retryLane))throw l.retryLane=o,Gn(e,o),it(a,e,o),qo;Fl(),t=Ed(e,t,n)}else e=l.treeContext,Ce=_t(o.nextSibling),Ge=t,ce=!0,mn=null,At=!1,e!==null&&cu(t,e),t=Ol(t,a),t.flags|=4096;return t}return e=Wt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Uo(e,t,n,a,i){return Kn(t),n=Eo(e,t,n,a,void 0,i),a=Ao(),e!==null&&!ze?(Co(e,t,i),Zt(e,t,i)):(ce&&a&&no(t),t.flags|=1,We(e,t,n,i),t.child)}function Ad(e,t,n,a,i,l){return Kn(t),t.updateQueue=null,n=xu(t,a,n,i),_u(e),a=Ao(),e!==null&&!ze?(Co(e,t,l),Zt(e,t,l)):(ce&&a&&no(t),t.flags|=1,We(e,t,n,l),t.child)}function Cd(e,t,n,a,i){if(Kn(t),t.stateNode===null){var l=ga,o=n.contextType;typeof o=="object"&&o!==null&&(l=Fe(o)),l=new n(a,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Ho,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=a,l.state=t.memoizedState,l.refs={},mo(t),o=n.contextType,l.context=typeof o=="object"&&o!==null?Fe(o):ga,l.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Bo(t,n,o,a),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&Ho.enqueueReplaceState(l,l.state,null),fi(t,a,l,i),hi(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){l=t.stateNode;var d=t.memoizedProps,g=$n(n,d);l.props=g;var x=l.context,N=n.contextType;o=ga,typeof N=="object"&&N!==null&&(o=Fe(N));var w=n.getDerivedStateFromProps;N=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,N||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d||x!==o)&&ud(t,l,a,o),yn=!1;var M=t.memoizedState;l.state=M,fi(t,a,l,i),hi(),x=t.memoizedState,d||M!==x||yn?(typeof w=="function"&&(Bo(t,n,w,a),x=t.memoizedState),(g=yn||sd(t,n,g,a,M,x,o))?(N||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=x),l.props=a,l.state=x,l.context=o,a=g):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{l=t.stateNode,po(e,t),o=t.memoizedProps,N=$n(n,o),l.props=N,w=t.pendingProps,M=l.context,x=n.contextType,g=ga,typeof x=="object"&&x!==null&&(g=Fe(x)),d=n.getDerivedStateFromProps,(x=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==w||M!==g)&&ud(t,l,a,g),yn=!1,M=t.memoizedState,l.state=M,fi(t,a,l,i),hi();var L=t.memoizedState;o!==w||M!==L||yn||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof d=="function"&&(Bo(t,n,d,a),L=t.memoizedState),(N=yn||sd(t,n,N,a,M,L,g)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?(x||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,L,g),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,L,g)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=L),l.props=a,l.state=L,l.context=g,a=N):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),a=!1)}return l=a,wl(e,t),a=(t.flags&128)!==0,l||a?(l=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&a?(t.child=Zn(t,e.child,null,i),t.child=Zn(t,null,n,i)):We(e,t,n,i),t.memoizedState=l.state,e=t.child):e=Zt(e,t,i),e}function _d(e,t,n,a){return Wn(),t.flags|=256,We(e,t,n,a),t.child}var Go={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fo(e){return{baseLanes:e,cachePool:mu()}}function Wo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ft),e}function xd(e,t,n){var a=t.pendingProps,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(i?bn(t):Tn(),(e=Ce)?(e=wh(e,At),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fn!==null?{id:It,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=lu(e),n.return=t,t.child=n,Ge=t,Ce=null)):e=null,e===null)throw pn(t);return Mc(e)?t.lanes=32:t.lanes=536870912,null}var d=a.children;return a=a.fallback,i?(Tn(),i=t.mode,d=Il({mode:"hidden",children:d},i),a=Fn(a,i,n,null),d.return=t,a.return=t,d.sibling=a,t.child=d,a=t.child,a.memoizedState=Fo(n),a.childLanes=Wo(e,o,n),t.memoizedState=Go,vi(null,a)):(bn(t),Qo(t,d))}var g=e.memoizedState;if(g!==null&&(d=g.dehydrated,d!==null)){if(l)t.flags&256?(bn(t),t.flags&=-257,t=Ko(e,t,n)):t.memoizedState!==null?(Tn(),t.child=e.child,t.flags|=128,t=null):(Tn(),d=a.fallback,i=t.mode,a=Il({mode:"visible",children:a.children},i),d=Fn(d,i,n,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,Zn(t,e.child,null,n),a=t.child,a.memoizedState=Fo(n),a.childLanes=Wo(e,o,n),t.memoizedState=Go,t=vi(null,a));else if(bn(t),Mc(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var x=o.dgst;o=x,a=Error(s(419)),a.stack="",a.digest=o,ri({value:a,source:null,stack:null}),t=Ko(e,t,n)}else if(ze||ba(e,t,n,!1),o=(n&e.childLanes)!==0,ze||o){if(o=Ae,o!==null&&(a=hs(o,n),a!==0&&a!==g.retryLane))throw g.retryLane=a,Gn(e,a),it(o,e,a),qo;xc(d)||Fl(),t=Ko(e,t,n)}else xc(d)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Ce=_t(d.nextSibling),Ge=t,ce=!0,mn=null,At=!1,e!==null&&cu(t,e),t=Qo(t,a.children),t.flags|=4096);return t}return i?(Tn(),d=a.fallback,i=t.mode,g=e.child,x=g.sibling,a=Wt(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,x!==null?d=Wt(x,d):(d=Fn(d,i,n,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,vi(null,a),a=t.child,d=e.child.memoizedState,d===null?d=Fo(n):(i=d.cachePool,i!==null?(g=Ie._currentValue,i=i.parent!==g?{parent:g,pool:g}:i):i=mu(),d={baseLanes:d.baseLanes|n,cachePool:i}),a.memoizedState=d,a.childLanes=Wo(e,o,n),t.memoizedState=Go,vi(e.child,a)):(bn(t),n=e.child,e=n.sibling,n=Wt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Qo(e,t){return t=Il({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Il(e,t){return e=st(22,e,null,t),e.lanes=0,e}function Ko(e,t,n){return Zn(t,e.child,null,n),e=Qo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Md(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),oo(e.return,t,n)}function Vo(e,t,n,a,i,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=i,o.treeForkCount=l)}function Dd(e,t,n){var a=t.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var o=ke.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,H(ke,o),We(e,t,a,n),a=ce?li:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Md(e,n,t);else if(e.tag===19)Md(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Al(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vo(t,!1,i,n,l,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Al(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vo(t,!0,n,null,l,a);break;case"together":Vo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ba(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function vp(e,t,n){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),gn(t,Ie,e.memoizedState.cache),Wn();break;case 27:case 5:Fa(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:gn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(bn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?xd(e,t,n):(bn(t),e=Zt(e,t,n),e!==null?e.sibling:null);bn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ba(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Dd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(ke,ke.current),a)break;return null;case 22:return t.lanes=0,bd(e,t,n,t.pendingProps);case 24:gn(t,Ie,e.memoizedState.cache)}return Zt(e,t,n)}function Rd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!Xo(e,n)&&(t.flags&128)===0)return ze=!1,vp(e,t,n);ze=(e.flags&131072)!==0}else ze=!1,ce&&(t.flags&1048576)!==0&&ou(t,li,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Xn(t.elementType),t.type=e,typeof e=="function")$r(e)?(a=$n(e,a),t.tag=1,t=Cd(null,t,e,a,n)):(t.tag=0,t=Uo(null,t,e,a,n));else{if(e!=null){var i=e.$$typeof;if(i===ne){t.tag=11,t=yd(null,t,e,a,n);break e}else if(i===Z){t.tag=14,t=vd(null,t,e,a,n);break e}}throw t=gt(e)||e,Error(s(306,t,""))}}return t;case 0:return Uo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=$n(a,t.pendingProps),Cd(e,t,a,i,n);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var l=t.memoizedState;i=l.element,po(e,t),fi(t,a,null,n);var o=t.memoizedState;if(a=o.cache,gn(t,Ie,a),a!==l.cache&&co(t,[Ie],n,!0),hi(),a=o.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=_d(e,t,a,n);break e}else if(a!==i){i=bt(Error(s(424)),t),ri(i),t=_d(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=_t(e.firstChild),Ge=t,ce=!0,mn=null,At=!0,n=bu(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wn(),a===i){t=Zt(e,t,n);break e}We(e,t,a,n)}t=t.child}return t;case 26:return wl(e,t),e===null?(n=jh(t.type,null,t.pendingProps,null))?t.memoizedState=n:ce||(n=t.type,e=t.pendingProps,a=Zl(ae.current).createElement(n),a[Ue]=t,a[Je]=e,Qe(a,n,e),je(a),t.stateNode=a):t.memoizedState=jh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fa(t),e===null&&ce&&(a=t.stateNode=zh(t.type,t.pendingProps,ae.current),Ge=t,At=!0,i=Ce,Rn(t.type)?(Dc=i,Ce=_t(a.firstChild)):Ce=i),We(e,t,t.pendingProps.children,n),wl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((i=a=Ce)&&(a=Vp(a,t.type,t.pendingProps,At),a!==null?(t.stateNode=a,Ge=t,Ce=_t(a.firstChild),At=!1,i=!0):i=!1),i||pn(t)),Fa(t),i=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,Ac(i,l)?a=null:o!==null&&Ac(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Eo(e,t,sp,null,null,n),Oi._currentValue=i),wl(e,t),We(e,t,a,n),t.child;case 6:return e===null&&ce&&((e=n=Ce)&&(n=Xp(n,t.pendingProps,At),n!==null?(t.stateNode=n,Ge=t,Ce=null,e=!0):e=!1),e||pn(t)),null;case 13:return xd(e,t,n);case 4:return Ye(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Zn(t,null,a,n):We(e,t,a,n),t.child;case 11:return yd(e,t,t.type,t.pendingProps,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,gn(t,t.type,a.value),We(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Kn(t),i=Fe(i),a=a(i),t.flags|=1,We(e,t,a,n),t.child;case 14:return vd(e,t,t.type,t.pendingProps,n);case 15:return Sd(e,t,t.type,t.pendingProps,n);case 19:return Dd(e,t,n);case 31:return yp(e,t,n);case 22:return bd(e,t,n,t.pendingProps);case 24:return Kn(t),a=Fe(Ie),e===null?(i=ho(),i===null&&(i=Ae,l=so(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=n),i=l),t.memoizedState={parent:a,cache:i},mo(t),gn(t,Ie,i)):((e.lanes&n)!==0&&(po(e,t),fi(t,null,null,n),hi()),i=e.memoizedState,l=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),gn(t,Ie,a)):(a=l.cache,gn(t,Ie,a),a!==i.cache&&co(t,[Ie],n,!0))),We(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Jt(e){e.flags|=4}function Yo(e,t,n,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(nh())e.flags|=8192;else throw Yn=Sl,fo}else e.flags&=-16777217}function Ld(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wh(t))if(nh())e.flags|=8192;else throw Yn=Sl,fo}function Pl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ss():536870912,e.lanes|=t,ka|=t)}function Si(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Sp(e,t,n){var a=t.pendingProps;switch(ao(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Vt(Ie),Ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Sa(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lo())),_e(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(Jt(t),l!==null?(_e(t),Ld(t,l)):(_e(t),Yo(t,i,null,a,n))):l?l!==e.memoizedState?(Jt(t),_e(t),Ld(t,l)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Jt(t),_e(t),Yo(t,i,e,a,n)),null;case 27:if(Ki(t),n=ae.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Jt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return _e(t),null}e=G.current,Sa(t)?su(t):(e=zh(i,a,n),t.stateNode=e,Jt(t))}return _e(t),null;case 5:if(Ki(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Jt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return _e(t),null}if(l=G.current,Sa(t))su(t);else{var o=Zl(ae.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?o.createElement(i,{is:a.is}):o.createElement(i)}}l[Ue]=t,l[Je]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(Qe(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Jt(t)}}return _e(t),Yo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Jt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=ae.current,Sa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Ge,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ue]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||xh(e.nodeValue,n)),e||pn(t,!0)}else e=Zl(e).createTextNode(a),e[Ue]=t,t.stateNode=e}return _e(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Sa(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ue]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else n=lo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(dt(t),t):(dt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return _e(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Sa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Ue]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else i=lo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(dt(t),t):(dt(t),null)}return dt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pl(t,t.updateQueue),_e(t),null);case 4:return Ne(),e===null&&vc(t.stateNode.containerInfo),_e(t),null;case 10:return Vt(t.type),_e(t),null;case 19:if(I(ke),a=t.memoizedState,a===null)return _e(t),null;if(i=(t.flags&128)!==0,l=a.rendering,l===null)if(i)Si(a,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Al(e),l!==null){for(t.flags|=128,Si(a,!1),e=l.updateQueue,t.updateQueue=e,Pl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)iu(n,e),n=n.sibling;return H(ke,ke.current&1|2),ce&&Qt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&lt()>ql&&(t.flags|=128,i=!0,Si(a,!1),t.lanes=4194304)}else{if(!i)if(e=Al(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Pl(t,e),Si(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!ce)return _e(t),null}else 2*lt()-a.renderingStartTime>ql&&n!==536870912&&(t.flags|=128,i=!0,Si(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(e=a.last,e!==null?e.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=lt(),e.sibling=null,n=ke.current,H(ke,i?n&1|2:n&1),ce&&Qt(t,a.treeForkCount),e):(_e(t),null);case 22:case 23:return dt(t),So(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),n=t.updateQueue,n!==null&&Pl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&I(Vn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Vt(Ie),_e(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function bp(e,t){switch(ao(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vt(Ie),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ki(t),null;case 31:if(t.memoizedState!==null){if(dt(t),t.alternate===null)throw Error(s(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(ke),null;case 4:return Ne(),null;case 10:return Vt(t.type),null;case 22:case 23:return dt(t),So(),e!==null&&I(Vn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vt(Ie),null;case 25:return null;default:return null}}function Nd(e,t){switch(ao(t),t.tag){case 3:Vt(Ie),Ne();break;case 26:case 27:case 5:Ki(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&dt(t);break;case 13:dt(t);break;case 19:I(ke);break;case 10:Vt(t.type);break;case 22:case 23:dt(t),So(),e!==null&&I(Vn);break;case 24:Vt(Ie)}}function bi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var l=n.create,o=n.inst;a=l(),o.destroy=a}n=n.next}while(n!==i)}}catch(d){ye(t,t.return,d)}}function En(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){var o=a.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,i=t;var g=n,x=d;try{x()}catch(N){ye(i,g,N)}}}a=a.next}while(a!==l)}}catch(N){ye(t,t.return,N)}}function kd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Eu(t,n)}catch(a){ye(e,e.return,a)}}}function Od(e,t,n){n.props=$n(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ye(e,t,a)}}function Ti(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){ye(e,t,i)}}function zt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){ye(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){ye(e,t,i)}else n.current=null}function wd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){ye(e,e.return,i)}}function Zo(e,t,n){try{var a=e.stateNode;Up(a,e.type,n,t),a[Je]=t}catch(i){ye(e,e.return,i)}}function Id(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Rn(e.type)||e.tag===4}function Jo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Rn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gt));else if(a!==4&&(a===27&&Rn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($o(e,t,n),e=e.sibling;e!==null;)$o(e,t,n),e=e.sibling}function zl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Rn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zl(e,t,n),e=e.sibling;e!==null;)zl(e,t,n),e=e.sibling}function Pd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Qe(t,a,n),t[Ue]=e,t[Je]=n}catch(l){ye(e,e.return,l)}}var $t=!1,Be=!1,ec=!1,zd=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Tp(e,t){if(e=e.containerInfo,Tc=ir,e=Xs(e),Qr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,d=-1,g=-1,x=0,N=0,w=e,M=null;t:for(;;){for(var L;w!==n||i!==0&&w.nodeType!==3||(d=o+i),w!==l||a!==0&&w.nodeType!==3||(g=o+a),w.nodeType===3&&(o+=w.nodeValue.length),(L=w.firstChild)!==null;)M=w,w=L;for(;;){if(w===e)break t;if(M===n&&++x===i&&(d=o),M===l&&++N===a&&(g=o),(L=w.nextSibling)!==null)break;w=M,M=w.parentNode}w=L}n=d===-1||g===-1?null:{start:d,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ec={focusedElem:e,selectionRange:n},ir=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,i=l.memoizedProps,l=l.memoizedState,a=n.stateNode;try{var U=$n(n.type,i);e=a.getSnapshotBeforeUpdate(U,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(X){ye(n,n.return,X)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)_c(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function Bd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:tn(e,n),a&4&&bi(5,n);break;case 1:if(tn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){ye(n,n.return,o)}else{var i=$n(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ye(n,n.return,o)}}a&64&&kd(n),a&512&&Ti(n,n.return);break;case 3:if(tn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Eu(e,t)}catch(o){ye(n,n.return,o)}}break;case 27:t===null&&a&4&&Pd(n);case 26:case 5:tn(e,n),t===null&&a&4&&wd(n),a&512&&Ti(n,n.return);break;case 12:tn(e,n);break;case 31:tn(e,n),a&4&&qd(e,n);break;case 13:tn(e,n),a&4&&Ud(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Lp.bind(null,n),Yp(e,n))));break;case 22:if(a=n.memoizedState!==null||$t,!a){t=t!==null&&t.memoizedState!==null||Be,i=$t;var l=Be;$t=a,(Be=t)&&!l?nn(e,n,(n.subtreeFlags&8772)!==0):tn(e,n),$t=i,Be=l}break;case 30:break;default:tn(e,n)}}function Hd(e){var t=e.alternate;t!==null&&(e.alternate=null,Hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Rr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,et=!1;function en(e,t,n){for(n=n.child;n!==null;)jd(e,t,n),n=n.sibling}function jd(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Wa,n)}catch{}switch(n.tag){case 26:Be||zt(n,t),en(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Be||zt(n,t);var a=xe,i=et;Rn(n.type)&&(xe=n.stateNode,et=!1),en(e,t,n),Li(n.stateNode),xe=a,et=i;break;case 5:Be||zt(n,t);case 6:if(a=xe,i=et,xe=null,en(e,t,n),xe=a,et=i,xe!==null)if(et)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(n.stateNode)}catch(l){ye(n,t,l)}else try{xe.removeChild(n.stateNode)}catch(l){ye(n,t,l)}break;case 18:xe!==null&&(et?(e=xe,kh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ja(e)):kh(xe,n.stateNode));break;case 4:a=xe,i=et,xe=n.stateNode.containerInfo,et=!0,en(e,t,n),xe=a,et=i;break;case 0:case 11:case 14:case 15:En(2,n,t),Be||En(4,n,t),en(e,t,n);break;case 1:Be||(zt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Od(n,t,a)),en(e,t,n);break;case 21:en(e,t,n);break;case 22:Be=(a=Be)||n.memoizedState!==null,en(e,t,n),Be=a;break;default:en(e,t,n)}}function qd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ja(e)}catch(n){ye(t,t.return,n)}}}function Ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ja(e)}catch(n){ye(t,t.return,n)}}function Ep(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zd),t;default:throw Error(s(435,e.tag))}}function Bl(e,t){var n=Ep(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var i=Np.bind(null,e,a);a.then(i,i)}})}function tt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],l=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(Rn(d.type)){xe=d.stateNode,et=!1;break e}break;case 5:xe=d.stateNode,et=!1;break e;case 3:case 4:xe=d.stateNode.containerInfo,et=!0;break e}d=d.return}if(xe===null)throw Error(s(160));jd(l,o,i),xe=null,et=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Gd(t,e),t=t.sibling}var Rt=null;function Gd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),nt(e),a&4&&(En(3,e,e.return),bi(3,e),En(5,e,e.return));break;case 1:tt(t,e),nt(e),a&512&&(Be||n===null||zt(n,n.return)),a&64&&$t&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Rt;if(tt(t,e),nt(e),a&512&&(Be||n===null||zt(n,n.return)),a&4){var l=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Va]||l[Ue]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),Qe(l,a,n),l[Ue]=e,je(l),a=l;break e;case"link":var o=Gh("link","href",i).get(a+(n.href||""));if(o){for(var d=0;d<o.length;d++)if(l=o[d],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(d,1);break t}}l=i.createElement(a),Qe(l,a,n),i.head.appendChild(l);break;case"meta":if(o=Gh("meta","content",i).get(a+(n.content||""))){for(d=0;d<o.length;d++)if(l=o[d],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(d,1);break t}}l=i.createElement(a),Qe(l,a,n),i.head.appendChild(l);break;default:throw Error(s(468,a))}l[Ue]=e,je(l),a=l}e.stateNode=a}else Fh(i,e.type,e.stateNode);else e.stateNode=Uh(i,a,e.memoizedProps);else l!==a?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,a===null?Fh(i,e.type,e.stateNode):Uh(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Zo(e,e.memoizedProps,n.memoizedProps)}break;case 27:tt(t,e),nt(e),a&512&&(Be||n===null||zt(n,n.return)),n!==null&&a&4&&Zo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(tt(t,e),nt(e),a&512&&(Be||n===null||zt(n,n.return)),e.flags&32){i=e.stateNode;try{sa(i,"")}catch(U){ye(e,e.return,U)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Zo(e,i,n!==null?n.memoizedProps:i)),a&1024&&(ec=!0);break;case 6:if(tt(t,e),nt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(U){ye(e,e.return,U)}}break;case 3:if(er=null,i=Rt,Rt=Jl(t.containerInfo),tt(t,e),Rt=i,nt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(t.containerInfo)}catch(U){ye(e,e.return,U)}ec&&(ec=!1,Fd(e));break;case 4:a=Rt,Rt=Jl(e.stateNode.containerInfo),tt(t,e),nt(e),Rt=a;break;case 12:tt(t,e),nt(e);break;case 31:tt(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Bl(e,a)));break;case 13:tt(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(jl=lt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Bl(e,a)));break;case 22:i=e.memoizedState!==null;var g=n!==null&&n.memoizedState!==null,x=$t,N=Be;if($t=x||i,Be=N||g,tt(t,e),Be=N,$t=x,nt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||g||$t||Be||ea(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){g=n=t;try{if(l=g.stateNode,i)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=g.stateNode;var w=g.memoizedProps.style,M=w!=null&&w.hasOwnProperty("display")?w.display:null;d.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(U){ye(g,g.return,U)}}}else if(t.tag===6){if(n===null){g=t;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(U){ye(g,g.return,U)}}}else if(t.tag===18){if(n===null){g=t;try{var L=g.stateNode;i?Oh(L,!0):Oh(g.stateNode,!1)}catch(U){ye(g,g.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Bl(e,n))));break;case 19:tt(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Bl(e,a)));break;case 30:break;case 21:break;default:tt(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Id(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode,l=Jo(e);zl(e,l,i);break;case 5:var o=n.stateNode;n.flags&32&&(sa(o,""),n.flags&=-33);var d=Jo(e);zl(e,d,o);break;case 3:case 4:var g=n.stateNode.containerInfo,x=Jo(e);$o(e,x,g);break;default:throw Error(s(161))}}catch(N){ye(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bd(e,t.alternate,t),t=t.sibling}function ea(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:En(4,t,t.return),ea(t);break;case 1:zt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Od(t,t.return,n),ea(t);break;case 27:Li(t.stateNode);case 26:case 5:zt(t,t.return),ea(t);break;case 22:t.memoizedState===null&&ea(t);break;case 30:ea(t);break;default:ea(t)}e=e.sibling}}function nn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:nn(i,l,n),bi(4,l);break;case 1:if(nn(i,l,n),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(x){ye(a,a.return,x)}if(a=l,i=a.updateQueue,i!==null){var d=a.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)Tu(g[i],d)}catch(x){ye(a,a.return,x)}}n&&o&64&&kd(l),Ti(l,l.return);break;case 27:Pd(l);case 26:case 5:nn(i,l,n),n&&a===null&&o&4&&wd(l),Ti(l,l.return);break;case 12:nn(i,l,n);break;case 31:nn(i,l,n),n&&o&4&&qd(i,l);break;case 13:nn(i,l,n),n&&o&4&&Ud(i,l);break;case 22:l.memoizedState===null&&nn(i,l,n),Ti(l,l.return);break;case 30:break;default:nn(i,l,n)}t=t.sibling}}function tc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&oi(n))}function nc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oi(e))}function Lt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wd(e,t,n,a),t=t.sibling}function Wd(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,n,a),i&2048&&bi(9,t);break;case 1:Lt(e,t,n,a);break;case 3:Lt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oi(e)));break;case 12:if(i&2048){Lt(e,t,n,a),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,d=l.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){ye(t,t.return,g)}}else Lt(e,t,n,a);break;case 31:Lt(e,t,n,a);break;case 13:Lt(e,t,n,a);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?Lt(e,t,n,a):Ei(e,t):l._visibility&2?Lt(e,t,n,a):(l._visibility|=2,Ra(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&tc(o,t);break;case 24:Lt(e,t,n,a),i&2048&&nc(t.alternate,t);break;default:Lt(e,t,n,a)}}function Ra(e,t,n,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,o=t,d=n,g=a,x=o.flags;switch(o.tag){case 0:case 11:case 15:Ra(l,o,d,g,i),bi(8,o);break;case 23:break;case 22:var N=o.stateNode;o.memoizedState!==null?N._visibility&2?Ra(l,o,d,g,i):Ei(l,o):(N._visibility|=2,Ra(l,o,d,g,i)),i&&x&2048&&tc(o.alternate,o);break;case 24:Ra(l,o,d,g,i),i&&x&2048&&nc(o.alternate,o);break;default:Ra(l,o,d,g,i)}t=t.sibling}}function Ei(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Ei(n,a),i&2048&&tc(a.alternate,a);break;case 24:Ei(n,a),i&2048&&nc(a.alternate,a);break;default:Ei(n,a)}t=t.sibling}}var Ai=8192;function La(e,t,n){if(e.subtreeFlags&Ai)for(e=e.child;e!==null;)Qd(e,t,n),e=e.sibling}function Qd(e,t,n){switch(e.tag){case 26:La(e,t,n),e.flags&Ai&&e.memoizedState!==null&&cg(n,Rt,e.memoizedState,e.memoizedProps);break;case 5:La(e,t,n);break;case 3:case 4:var a=Rt;Rt=Jl(e.stateNode.containerInfo),La(e,t,n),Rt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ai,Ai=16777216,La(e,t,n),Ai=a):La(e,t,n));break;default:La(e,t,n)}}function Kd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];qe=a,Xd(a,e)}Kd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vd(e),e=e.sibling}function Vd(e){switch(e.tag){case 0:case 11:case 15:Ci(e),e.flags&2048&&En(9,e,e.return);break;case 3:Ci(e);break;case 12:Ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hl(e)):Ci(e);break;default:Ci(e)}}function Hl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];qe=a,Xd(a,e)}Kd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:En(8,t,t.return),Hl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Hl(t));break;default:Hl(t)}e=e.sibling}}function Xd(e,t){for(;qe!==null;){var n=qe;switch(n.tag){case 0:case 11:case 15:En(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:oi(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,qe=a;else e:for(n=e;qe!==null;){a=qe;var i=a.sibling,l=a.return;if(Hd(a),a===n){qe=null;break e}if(i!==null){i.return=l,qe=i;break e}qe=l}}}var Ap={getCacheForType:function(e){var t=Fe(Ie),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Fe(Ie).controller.signal}},Cp=typeof WeakMap=="function"?WeakMap:Map,fe=0,Ae=null,ie=null,re=0,ge=0,ht=null,An=!1,Na=!1,ac=!1,an=0,Re=0,Cn=0,ta=0,ic=0,ft=0,ka=0,_i=null,at=null,lc=!1,jl=0,Yd=0,ql=1/0,Ul=null,_n=null,He=0,xn=null,Oa=null,ln=0,rc=0,oc=null,Zd=null,xi=0,cc=null;function mt(){return(fe&2)!==0&&re!==0?re&-re:k.T!==null?mc():fs()}function Jd(){if(ft===0)if((re&536870912)===0||ce){var e=Yi;Yi<<=1,(Yi&3932160)===0&&(Yi=262144),ft=e}else ft=536870912;return e=ut.current,e!==null&&(e.flags|=32),ft}function it(e,t,n){(e===Ae&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(wa(e,0),Mn(e,re,ft,!1)),Ka(e,n),((fe&2)===0||e!==Ae)&&(e===Ae&&((fe&2)===0&&(ta|=n),Re===4&&Mn(e,re,ft,!1)),Bt(e))}function $d(e,t,n){if((fe&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Qa(e,t),i=a?Mp(e,t):uc(e,t,!0),l=a;do{if(i===0){Na&&!a&&Mn(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!_p(n)){i=uc(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;i=_i;var g=d.current.memoizedState.isDehydrated;if(g&&(wa(d,o).flags|=256),o=uc(d,o,!1),o!==2){if(ac&&!g){d.errorRecoveryDisabledLanes|=l,ta|=l,i=4;break e}l=at,at=i,l!==null&&(at===null?at=l:at.push.apply(at,l))}i=o}if(l=!1,i!==2)continue}}if(i===1){wa(e,0),Mn(e,t,0,!0);break}e:{switch(a=e,l=i,l){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Mn(a,t,ft,!An);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=jl+300-lt(),10<i)){if(Mn(a,t,ft,!An),Ji(a,0,!0)!==0)break e;ln=t,a.timeoutHandle=Lh(eh.bind(null,a,n,at,Ul,lc,t,ft,ta,ka,An,l,"Throttled",-0,0),i);break e}eh(a,n,at,Ul,lc,t,ft,ta,ka,An,l,null,-0,0)}}break}while(!0);Bt(e)}function eh(e,t,n,a,i,l,o,d,g,x,N,w,M,L){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Qd(t,l,w);var U=(l&62914560)===l?jl-lt():(l&4194048)===l?Yd-lt():0;if(U=sg(w,U),U!==null){ln=l,e.cancelPendingCommit=U(ch.bind(null,e,t,l,n,a,i,o,d,g,N,w,null,M,L)),Mn(e,l,o,!x);return}}ch(e,t,l,n,a,i,o,d,g)}function _p(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],l=i.getSnapshot;i=i.value;try{if(!ct(l(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mn(e,t,n,a){t&=~ic,t&=~ta,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var l=31-ot(i),o=1<<l;a[l]=-1,i&=~o}n!==0&&us(e,n,t)}function Gl(){return(fe&6)===0?(Mi(0),!1):!0}function sc(){if(ie!==null){if(ge===0)var e=ie.return;else e=ie,Kt=Qn=null,_o(e),Ca=null,si=0,e=ie;for(;e!==null;)Nd(e.alternate,e),e=e.return;ie=null}}function wa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Wp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ln=0,sc(),Ae=e,ie=n=Wt(e.current,null),re=t,ge=0,ht=null,An=!1,Na=Qa(e,t),ac=!1,ka=ft=ic=ta=Cn=Re=0,at=_i=null,lc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-ot(a),l=1<<i;t|=e[i],a&=~l}return an=t,ul(),n}function th(e,t){ee=null,k.H=yi,t===Aa||t===vl?(t=yu(),ge=3):t===fo?(t=yu(),ge=4):ge=t===qo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,ie===null&&(Re=1,kl(e,bt(t,e.current)))}function nh(){var e=ut.current;return e===null?!0:(re&4194048)===re?Ct===null:(re&62914560)===re||(re&536870912)!==0?e===Ct:!1}function ah(){var e=k.H;return k.H=yi,e===null?yi:e}function ih(){var e=k.A;return k.A=Ap,e}function Fl(){Re=4,An||(re&4194048)!==re&&ut.current!==null||(Na=!0),(Cn&134217727)===0&&(ta&134217727)===0||Ae===null||Mn(Ae,re,ft,!1)}function uc(e,t,n){var a=fe;fe|=2;var i=ah(),l=ih();(Ae!==e||re!==t)&&(Ul=null,wa(e,t)),t=!1;var o=Re;e:do try{if(ge!==0&&ie!==null){var d=ie,g=ht;switch(ge){case 8:sc(),o=6;break e;case 3:case 2:case 9:case 6:ut.current===null&&(t=!0);var x=ge;if(ge=0,ht=null,Ia(e,d,g,x),n&&Na){o=0;break e}break;default:x=ge,ge=0,ht=null,Ia(e,d,g,x)}}xp(),o=Re;break}catch(N){th(e,N)}while(!0);return t&&e.shellSuspendCounter++,Kt=Qn=null,fe=a,k.H=i,k.A=l,ie===null&&(Ae=null,re=0,ul()),o}function xp(){for(;ie!==null;)lh(ie)}function Mp(e,t){var n=fe;fe|=2;var a=ah(),i=ih();Ae!==e||re!==t?(Ul=null,ql=lt()+500,wa(e,t)):Na=Qa(e,t);e:do try{if(ge!==0&&ie!==null){t=ie;var l=ht;t:switch(ge){case 1:ge=0,ht=null,Ia(e,t,l,1);break;case 2:case 9:if(pu(l)){ge=0,ht=null,rh(t);break}t=function(){ge!==2&&ge!==9||Ae!==e||(ge=7),Bt(e)},l.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:pu(l)?(ge=0,ht=null,rh(t)):(ge=0,ht=null,Ia(e,t,l,7));break;case 5:var o=null;switch(ie.tag){case 26:o=ie.memoizedState;case 5:case 27:var d=ie;if(o?Wh(o):d.stateNode.complete){ge=0,ht=null;var g=d.sibling;if(g!==null)ie=g;else{var x=d.return;x!==null?(ie=x,Wl(x)):ie=null}break t}}ge=0,ht=null,Ia(e,t,l,5);break;case 6:ge=0,ht=null,Ia(e,t,l,6);break;case 8:sc(),Re=6;break e;default:throw Error(s(462))}}Dp();break}catch(N){th(e,N)}while(!0);return Kt=Qn=null,k.H=a,k.A=i,fe=n,ie!==null?0:(Ae=null,re=0,ul(),Re)}function Dp(){for(;ie!==null&&!Zf();)lh(ie)}function lh(e){var t=Rd(e.alternate,e,an);e.memoizedProps=e.pendingProps,t===null?Wl(e):ie=t}function rh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ad(n,t,t.pendingProps,t.type,void 0,re);break;case 11:t=Ad(n,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:_o(t);default:Nd(n,t),t=ie=iu(t,an),t=Rd(n,t,an)}e.memoizedProps=e.pendingProps,t===null?Wl(e):ie=t}function Ia(e,t,n,a){Kt=Qn=null,_o(t),Ca=null,si=0;var i=t.return;try{if(gp(e,i,t,n,re)){Re=1,kl(e,bt(n,e.current)),ie=null;return}}catch(l){if(i!==null)throw ie=i,l;Re=1,kl(e,bt(n,e.current)),ie=null;return}t.flags&32768?(ce||a===1?e=!0:Na||(re&536870912)!==0?e=!1:(An=e=!0,(a===2||a===9||a===3||a===6)&&(a=ut.current,a!==null&&a.tag===13&&(a.flags|=16384))),oh(t,e)):Wl(t)}function Wl(e){var t=e;do{if((t.flags&32768)!==0){oh(t,An);return}e=t.return;var n=Sp(t.alternate,t,an);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Re===0&&(Re=5)}function oh(e,t){do{var n=bp(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);Re=6,ie=null}function ch(e,t,n,a,i,l,o,d,g){e.cancelPendingCommit=null;do Ql();while(He!==0);if((fe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(l=t.lanes|t.childLanes,l|=Zr,om(e,n,l,o,d,g),e===Ae&&(ie=Ae=null,re=0),Oa=t,xn=e,ln=n,rc=l,oc=i,Zd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kp(Vi,function(){return fh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=k.T,k.T=null,i=B.p,B.p=2,o=fe,fe|=4;try{Tp(e,t,n)}finally{fe=o,B.p=i,k.T=a}}He=1,sh(),uh(),dh()}}function sh(){if(He===1){He=0;var e=xn,t=Oa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var a=B.p;B.p=2;var i=fe;fe|=4;try{Gd(t,e);var l=Ec,o=Xs(e.containerInfo),d=l.focusedElem,g=l.selectionRange;if(o!==d&&d&&d.ownerDocument&&Vs(d.ownerDocument.documentElement,d)){if(g!==null&&Qr(d)){var x=g.start,N=g.end;if(N===void 0&&(N=x),"selectionStart"in d)d.selectionStart=x,d.selectionEnd=Math.min(N,d.value.length);else{var w=d.ownerDocument||document,M=w&&w.defaultView||window;if(M.getSelection){var L=M.getSelection(),U=d.textContent.length,X=Math.min(g.start,U),Te=g.end===void 0?X:Math.min(g.end,U);!L.extend&&X>Te&&(o=Te,Te=X,X=o);var A=Ks(d,X),b=Ks(d,Te);if(A&&b&&(L.rangeCount!==1||L.anchorNode!==A.node||L.anchorOffset!==A.offset||L.focusNode!==b.node||L.focusOffset!==b.offset)){var _=w.createRange();_.setStart(A.node,A.offset),L.removeAllRanges(),X>Te?(L.addRange(_),L.extend(b.node,b.offset)):(_.setEnd(b.node,b.offset),L.addRange(_))}}}}for(w=[],L=d;L=L.parentNode;)L.nodeType===1&&w.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<w.length;d++){var O=w[d];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}ir=!!Tc,Ec=Tc=null}finally{fe=i,B.p=a,k.T=n}}e.current=t,He=2}}function uh(){if(He===2){He=0;var e=xn,t=Oa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var a=B.p;B.p=2;var i=fe;fe|=4;try{Bd(e,t.alternate,t)}finally{fe=i,B.p=a,k.T=n}}He=3}}function dh(){if(He===4||He===3){He=0,Jf();var e=xn,t=Oa,n=ln,a=Zd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?He=5:(He=0,Oa=xn=null,hh(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(_n=null),Mr(n),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Wa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=k.T,i=B.p,B.p=2,k.T=null;try{for(var l=e.onRecoverableError,o=0;o<a.length;o++){var d=a[o];l(d.value,{componentStack:d.stack})}}finally{k.T=t,B.p=i}}(ln&3)!==0&&Ql(),Bt(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===cc?xi++:(xi=0,cc=e):xi=0,Mi(0)}}function hh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,oi(t)))}function Ql(){return sh(),uh(),dh(),fh()}function fh(){if(He!==5)return!1;var e=xn,t=rc;rc=0;var n=Mr(ln),a=k.T,i=B.p;try{B.p=32>n?32:n,k.T=null,n=oc,oc=null;var l=xn,o=ln;if(He=0,Oa=xn=null,ln=0,(fe&6)!==0)throw Error(s(331));var d=fe;if(fe|=4,Vd(l.current),Wd(l,l.current,o,n),fe=d,Mi(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Wa,l)}catch{}return!0}finally{B.p=i,k.T=a,hh(e,t)}}function mh(e,t,n){t=bt(n,t),t=jo(e.stateNode,t,2),e=Sn(e,t,2),e!==null&&(Ka(e,2),Bt(e))}function ye(e,t,n){if(e.tag===3)mh(e,e,n);else for(;t!==null;){if(t.tag===3){mh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_n===null||!_n.has(a))){e=bt(n,e),n=pd(2),a=Sn(t,n,2),a!==null&&(gd(n,a,t,e),Ka(a,2),Bt(a));break}}t=t.return}}function dc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Cp;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(ac=!0,i.add(n),e=Rp.bind(null,e,t,n),t.then(e,e))}function Rp(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ae===e&&(re&n)===n&&(Re===4||Re===3&&(re&62914560)===re&&300>lt()-jl?(fe&2)===0&&wa(e,0):ic|=n,ka===re&&(ka=0)),Bt(e)}function ph(e,t){t===0&&(t=ss()),e=Gn(e,t),e!==null&&(Ka(e,t),Bt(e))}function Lp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ph(e,n)}function Np(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),ph(e,n)}function kp(e,t){return Ar(e,t)}var Kl=null,Pa=null,hc=!1,Vl=!1,fc=!1,Dn=0;function Bt(e){e!==Pa&&e.next===null&&(Pa===null?Kl=Pa=e:Pa=Pa.next=e),Vl=!0,hc||(hc=!0,wp())}function Mi(e,t){if(!fc&&Vl){fc=!0;do for(var n=!1,a=Kl;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var o=a.suspendedLanes,d=a.pingedLanes;l=(1<<31-ot(42|e)+1)-1,l&=i&~(o&~d),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Sh(a,l))}else l=re,l=Ji(a,a===Ae?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||Qa(a,l)||(n=!0,Sh(a,l));a=a.next}while(n);fc=!1}}function Op(){gh()}function gh(){Vl=hc=!1;var e=0;Dn!==0&&Fp()&&(e=Dn);for(var t=lt(),n=null,a=Kl;a!==null;){var i=a.next,l=yh(a,t);l===0?(a.next=null,n===null?Kl=i:n.next=i,i===null&&(Pa=n)):(n=a,(e!==0||(l&3)!==0)&&(Vl=!0)),a=i}He!==0&&He!==5||Mi(e),Dn!==0&&(Dn=0)}function yh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-ot(l),d=1<<o,g=i[o];g===-1?((d&n)===0||(d&a)!==0)&&(i[o]=rm(d,t)):g<=t&&(e.expiredLanes|=d),l&=~d}if(t=Ae,n=re,n=Ji(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Cr(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Qa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Cr(a),Mr(n)){case 2:case 8:n=os;break;case 32:n=Vi;break;case 268435456:n=cs;break;default:n=Vi}return a=vh.bind(null,e),n=Ar(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Cr(a),e.callbackPriority=2,e.callbackNode=null,2}function vh(e,t){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ql()&&e.callbackNode!==n)return null;var a=re;return a=Ji(e,e===Ae?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:($d(e,a,t),yh(e,lt()),e.callbackNode!=null&&e.callbackNode===n?vh.bind(null,e):null)}function Sh(e,t){if(Ql())return null;$d(e,t,!0)}function wp(){Qp(function(){(fe&6)!==0?Ar(rs,Op):gh()})}function mc(){if(Dn===0){var e=Ta;e===0&&(e=Xi,Xi<<=1,(Xi&261888)===0&&(Xi=256)),Dn=e}return Dn}function bh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nl(""+e)}function Th(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ip(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var l=bh((i[Je]||null).action),o=a.submitter;o&&(t=(t=o[Je]||null)?bh(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var d=new rl("action","action",null,a,i);e.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Dn!==0){var g=o?Th(i,o):new FormData(i);wo(n,{pending:!0,data:g,method:i.method,action:l},null,g)}}else typeof l=="function"&&(d.preventDefault(),g=o?Th(i,o):new FormData(i),wo(n,{pending:!0,data:g,method:i.method,action:l},l,g))},currentTarget:i}]})}}for(var pc=0;pc<Yr.length;pc++){var gc=Yr[pc],Pp=gc.toLowerCase(),zp=gc[0].toUpperCase()+gc.slice(1);Dt(Pp,"on"+zp)}Dt(Js,"onAnimationEnd"),Dt($s,"onAnimationIteration"),Dt(eu,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt($m,"onTransitionRun"),Dt(ep,"onTransitionStart"),Dt(tp,"onTransitionCancel"),Dt(tu,"onTransitionEnd"),oa("onMouseEnter",["mouseout","mouseover"]),oa("onMouseLeave",["mouseout","mouseover"]),oa("onPointerEnter",["pointerout","pointerover"]),oa("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Di));function Eh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var o=a.length-1;0<=o;o--){var d=a[o],g=d.instance,x=d.currentTarget;if(d=d.listener,g!==l&&i.isPropagationStopped())break e;l=d,i.currentTarget=x;try{l(i)}catch(N){sl(N)}i.currentTarget=null,l=g}else for(o=0;o<a.length;o++){if(d=a[o],g=d.instance,x=d.currentTarget,d=d.listener,g!==l&&i.isPropagationStopped())break e;l=d,i.currentTarget=x;try{l(i)}catch(N){sl(N)}i.currentTarget=null,l=g}}}}function le(e,t){var n=t[Dr];n===void 0&&(n=t[Dr]=new Set);var a=e+"__bubble";n.has(a)||(Ah(t,e,2,!1),n.add(a))}function yc(e,t,n){var a=0;t&&(a|=4),Ah(n,e,a,t)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function vc(e){if(!e[Xl]){e[Xl]=!0,gs.forEach(function(n){n!=="selectionchange"&&(Bp.has(n)||yc(n,!1,e),yc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xl]||(t[Xl]=!0,yc("selectionchange",!1,t))}}function Ah(e,t,n,a){switch(Jh(t)){case 2:var i=hg;break;case 8:i=fg;break;default:i=Oc}n=i.bind(null,t,n,e),i=void 0,!zr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Sc(e,t,n,a,i){var l=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var d=a.stateNode.containerInfo;if(d===i)break;if(o===4)for(o=a.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;d!==null;){if(o=ia(d),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){a=l=o;continue e}d=d.parentNode}}a=a.return}Ds(function(){var x=l,N=Ir(n),w=[];e:{var M=nu.get(e);if(M!==void 0){var L=rl,U=e;switch(e){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":L=Nm;break;case"focusin":U="focus",L=qr;break;case"focusout":U="blur",L=qr;break;case"beforeblur":case"afterblur":L=qr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=wm;break;case Js:case $s:case eu:L=Em;break;case tu:L=Pm;break;case"scroll":case"scrollend":L=ym;break;case"wheel":L=Bm;break;case"copy":case"cut":case"paste":L=Cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Os;break;case"toggle":case"beforetoggle":L=jm}var X=(t&4)!==0,Te=!X&&(e==="scroll"||e==="scrollend"),A=X?M!==null?M+"Capture":null:M;X=[];for(var b=x,_;b!==null;){var O=b;if(_=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||_===null||A===null||(O=Ya(b,A),O!=null&&X.push(Ri(b,O,_))),Te)break;b=b.return}0<X.length&&(M=new L(M,U,null,n,N),w.push({event:M,listeners:X}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",M&&n!==wr&&(U=n.relatedTarget||n.fromElement)&&(ia(U)||U[aa]))break e;if((L||M)&&(M=N.window===N?N:(M=N.ownerDocument)?M.defaultView||M.parentWindow:window,L?(U=n.relatedTarget||n.toElement,L=x,U=U?ia(U):null,U!==null&&(Te=m(U),X=U.tag,U!==Te||X!==5&&X!==27&&X!==6)&&(U=null)):(L=null,U=x),L!==U)){if(X=Ns,O="onMouseLeave",A="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(X=Os,O="onPointerLeave",A="onPointerEnter",b="pointer"),Te=L==null?M:Xa(L),_=U==null?M:Xa(U),M=new X(O,b+"leave",L,n,N),M.target=Te,M.relatedTarget=_,O=null,ia(N)===x&&(X=new X(A,b+"enter",U,n,N),X.target=_,X.relatedTarget=Te,O=X),Te=O,L&&U)t:{for(X=Hp,A=L,b=U,_=0,O=A;O;O=X(O))_++;O=0;for(var K=b;K;K=X(K))O++;for(;0<_-O;)A=X(A),_--;for(;0<O-_;)b=X(b),O--;for(;_--;){if(A===b||b!==null&&A===b.alternate){X=A;break t}A=X(A),b=X(b)}X=null}else X=null;L!==null&&Ch(w,M,L,X,!1),U!==null&&Te!==null&&Ch(w,Te,U,X,!0)}}e:{if(M=x?Xa(x):window,L=M.nodeName&&M.nodeName.toLowerCase(),L==="select"||L==="input"&&M.type==="file")var ue=qs;else if(Hs(M))if(Us)ue=Ym;else{ue=Vm;var F=Km}else L=M.nodeName,!L||L.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?x&&Or(x.elementType)&&(ue=qs):ue=Xm;if(ue&&(ue=ue(e,x))){js(w,ue,n,N);break e}F&&F(e,M,x),e==="focusout"&&x&&M.type==="number"&&x.memoizedProps.value!=null&&kr(M,"number",M.value)}switch(F=x?Xa(x):window,e){case"focusin":(Hs(F)||F.contentEditable==="true")&&(fa=F,Kr=x,ii=null);break;case"focusout":ii=Kr=fa=null;break;case"mousedown":Vr=!0;break;case"contextmenu":case"mouseup":case"dragend":Vr=!1,Ys(w,n,N);break;case"selectionchange":if(Jm)break;case"keydown":case"keyup":Ys(w,n,N)}var te;if(Gr)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else ha?zs(e,n)&&(oe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(oe="onCompositionStart");oe&&(ws&&n.locale!=="ko"&&(ha||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ha&&(te=Rs()):(hn=N,Br="value"in hn?hn.value:hn.textContent,ha=!0)),F=Yl(x,oe),0<F.length&&(oe=new ks(oe,e,null,n,N),w.push({event:oe,listeners:F}),te?oe.data=te:(te=Bs(n),te!==null&&(oe.data=te)))),(te=Um?Gm(e,n):Fm(e,n))&&(oe=Yl(x,"onBeforeInput"),0<oe.length&&(F=new ks("onBeforeInput","beforeinput",null,n,N),w.push({event:F,listeners:oe}),F.data=te)),Ip(w,e,x,n,N)}Eh(w,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yl(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Ya(e,n),i!=null&&a.unshift(Ri(e,i,l)),i=Ya(e,t),i!=null&&a.push(Ri(e,i,l))),e.tag===3)return a;e=e.return}return[]}function Hp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ch(e,t,n,a,i){for(var l=t._reactName,o=[];n!==null&&n!==a;){var d=n,g=d.alternate,x=d.stateNode;if(d=d.tag,g!==null&&g===a)break;d!==5&&d!==26&&d!==27||x===null||(g=x,i?(x=Ya(n,l),x!=null&&o.unshift(Ri(n,x,g))):i||(x=Ya(n,l),x!=null&&o.push(Ri(n,x,g)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var jp=/\r\n?/g,qp=/\u0000|\uFFFD/g;function _h(e){return(typeof e=="string"?e:""+e).replace(jp,`
`).replace(qp,"")}function xh(e,t){return t=_h(t),_h(e)===t}function be(e,t,n,a,i,l){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||sa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&sa(e,""+a);break;case"className":el(e,"class",a);break;case"tabIndex":el(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":el(e,n,a);break;case"style":xs(e,a,l);break;case"data":if(t!=="object"){el(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=nl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&be(e,t,"name",i.name,i,null),be(e,t,"formEncType",i.formEncType,i,null),be(e,t,"formMethod",i.formMethod,i,null),be(e,t,"formTarget",i.formTarget,i,null)):(be(e,t,"encType",i.encType,i,null),be(e,t,"method",i.method,i,null),be(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=nl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Gt);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=nl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":le("beforetoggle",e),le("toggle",e),$i(e,"popover",a);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":$i(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=pm.get(n)||n,$i(e,n,a))}}function bc(e,t,n,a,i,l){switch(n){case"style":xs(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?sa(e,a):(typeof a=="number"||typeof a=="bigint")&&sa(e,""+a);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ys.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),l=e[Je]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):$i(e,n,a)}}}function Qe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var a=!1,i=!1,l;for(l in n)if(n.hasOwnProperty(l)){var o=n[l];if(o!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:be(e,t,l,o,n,null)}}i&&be(e,t,"srcSet",n.srcSet,n,null),a&&be(e,t,"src",n.src,n,null);return;case"input":le("invalid",e);var d=l=o=i=null,g=null,x=null;for(a in n)if(n.hasOwnProperty(a)){var N=n[a];if(N!=null)switch(a){case"name":i=N;break;case"type":o=N;break;case"checked":g=N;break;case"defaultChecked":x=N;break;case"value":l=N;break;case"defaultValue":d=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:be(e,t,a,N,n,null)}}Es(e,l,d,g,x,o,i,!1);return;case"select":le("invalid",e),a=o=l=null;for(i in n)if(n.hasOwnProperty(i)&&(d=n[i],d!=null))switch(i){case"value":l=d;break;case"defaultValue":o=d;break;case"multiple":a=d;default:be(e,t,i,d,n,null)}t=l,n=o,e.multiple=!!a,t!=null?ca(e,!!a,t,!1):n!=null&&ca(e,!!a,n,!0);return;case"textarea":le("invalid",e),l=i=a=null;for(o in n)if(n.hasOwnProperty(o)&&(d=n[o],d!=null))switch(o){case"value":a=d;break;case"defaultValue":i=d;break;case"children":l=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:be(e,t,o,d,n,null)}Cs(e,a,i,l);return;case"option":for(g in n)if(n.hasOwnProperty(g)&&(a=n[g],a!=null))switch(g){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:be(e,t,g,a,n,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(a=0;a<Di.length;a++)le(Di[a],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in n)if(n.hasOwnProperty(x)&&(a=n[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:be(e,t,x,a,n,null)}return;default:if(Or(t)){for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!==void 0&&bc(e,t,N,a,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!=null&&be(e,t,d,a,n,null))}function Up(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,o=null,d=null,g=null,x=null,N=null;for(L in n){var w=n[L];if(n.hasOwnProperty(L)&&w!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":g=w;default:a.hasOwnProperty(L)||be(e,t,L,null,a,w)}}for(var M in a){var L=a[M];if(w=n[M],a.hasOwnProperty(M)&&(L!=null||w!=null))switch(M){case"type":l=L;break;case"name":i=L;break;case"checked":x=L;break;case"defaultChecked":N=L;break;case"value":o=L;break;case"defaultValue":d=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,t));break;default:L!==w&&be(e,t,M,L,a,w)}}Nr(e,o,d,g,x,N,l,i);return;case"select":L=o=d=M=null;for(l in n)if(g=n[l],n.hasOwnProperty(l)&&g!=null)switch(l){case"value":break;case"multiple":L=g;default:a.hasOwnProperty(l)||be(e,t,l,null,a,g)}for(i in a)if(l=a[i],g=n[i],a.hasOwnProperty(i)&&(l!=null||g!=null))switch(i){case"value":M=l;break;case"defaultValue":d=l;break;case"multiple":o=l;default:l!==g&&be(e,t,i,l,a,g)}t=d,n=o,a=L,M!=null?ca(e,!!n,M,!1):!!a!=!!n&&(t!=null?ca(e,!!n,t,!0):ca(e,!!n,n?[]:"",!1));return;case"textarea":L=M=null;for(d in n)if(i=n[d],n.hasOwnProperty(d)&&i!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:be(e,t,d,null,a,i)}for(o in a)if(i=a[o],l=n[o],a.hasOwnProperty(o)&&(i!=null||l!=null))switch(o){case"value":M=i;break;case"defaultValue":L=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==l&&be(e,t,o,i,a,l)}As(e,M,L);return;case"option":for(var U in n)if(M=n[U],n.hasOwnProperty(U)&&M!=null&&!a.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:be(e,t,U,null,a,M)}for(g in a)if(M=a[g],L=n[g],a.hasOwnProperty(g)&&M!==L&&(M!=null||L!=null))switch(g){case"selected":e.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:be(e,t,g,M,a,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in n)M=n[X],n.hasOwnProperty(X)&&M!=null&&!a.hasOwnProperty(X)&&be(e,t,X,null,a,M);for(x in a)if(M=a[x],L=n[x],a.hasOwnProperty(x)&&M!==L&&(M!=null||L!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:be(e,t,x,M,a,L)}return;default:if(Or(t)){for(var Te in n)M=n[Te],n.hasOwnProperty(Te)&&M!==void 0&&!a.hasOwnProperty(Te)&&bc(e,t,Te,void 0,a,M);for(N in a)M=a[N],L=n[N],!a.hasOwnProperty(N)||M===L||M===void 0&&L===void 0||bc(e,t,N,M,a,L);return}}for(var A in n)M=n[A],n.hasOwnProperty(A)&&M!=null&&!a.hasOwnProperty(A)&&be(e,t,A,null,a,M);for(w in a)M=a[w],L=n[w],!a.hasOwnProperty(w)||M===L||M==null&&L==null||be(e,t,w,M,a,L)}function Mh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],l=i.transferSize,o=i.initiatorType,d=i.duration;if(l&&d&&Mh(o)){for(o=0,d=i.responseEnd,a+=1;a<n.length;a++){var g=n[a],x=g.startTime;if(x>d)break;var N=g.transferSize,w=g.initiatorType;N&&Mh(w)&&(g=g.responseEnd,o+=N*(g<d?1:(d-x)/(g-x)))}if(--a,t+=8*(l+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tc=null,Ec=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function Dh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cc=null;function Fp(){var e=window.event;return e&&e.type==="popstate"?e===Cc?!1:(Cc=e,!0):(Cc=null,!1)}var Lh=typeof setTimeout=="function"?setTimeout:void 0,Wp=typeof clearTimeout=="function"?clearTimeout:void 0,Nh=typeof Promise=="function"?Promise:void 0,Qp=typeof queueMicrotask=="function"?queueMicrotask:typeof Nh<"u"?function(e){return Nh.resolve(null).then(e).catch(Kp)}:Lh;function Kp(e){setTimeout(function(){throw e})}function Rn(e){return e==="head"}function kh(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(i),ja(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Li(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Li(n);for(var l=n.firstChild;l;){var o=l.nextSibling,d=l.nodeName;l[Va]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=o}}else n==="body"&&Li(e.ownerDocument.body);n=i}while(n);ja(t)}function Oh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function _c(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":_c(n),Rr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Vp(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Va])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function Xp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_t(e.nextSibling),e===null))return null;return e}function wh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function xc(e){return e.data==="$?"||e.data==="$~"}function Mc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Yp(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Dc=null;function Ih(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return _t(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ph(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function zh(e,t,n){switch(t=Zl(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Li(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Rr(e)}var xt=new Map,Bh=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rn=B.d;B.d={f:Zp,r:Jp,D:$p,C:eg,L:tg,m:ng,X:ig,S:ag,M:lg};function Zp(){var e=rn.f(),t=Gl();return e||t}function Jp(e){var t=la(e);t!==null&&t.tag===5&&t.type==="form"?td(t):rn.r(e)}var za=typeof document>"u"?null:document;function Hh(e,t,n){var a=za;if(a&&typeof t=="string"&&t){var i=vt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Bh.has(i)||(Bh.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Qe(t,"link",e),je(t),a.head.appendChild(t)))}}function $p(e){rn.D(e),Hh("dns-prefetch",e,null)}function eg(e,t){rn.C(e,t),Hh("preconnect",e,t)}function tg(e,t,n){rn.L(e,t,n);var a=za;if(a&&e&&t){var i='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+vt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+vt(n.imageSizes)+'"]')):i+='[href="'+vt(e)+'"]';var l=i;switch(t){case"style":l=Ba(e);break;case"script":l=Ha(e)}xt.has(l)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),xt.set(l,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(Ni(l))||t==="script"&&a.querySelector(ki(l))||(t=a.createElement("link"),Qe(t,"link",e),je(t),a.head.appendChild(t)))}}function ng(e,t){rn.m(e,t);var n=za;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+vt(a)+'"][href="'+vt(e)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ha(e)}if(!xt.has(l)&&(e=E({rel:"modulepreload",href:e},t),xt.set(l,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ki(l)))return}a=n.createElement("link"),Qe(a,"link",e),je(a),n.head.appendChild(a)}}}function ag(e,t,n){rn.S(e,t,n);var a=za;if(a&&e){var i=ra(a).hoistableStyles,l=Ba(e);t=t||"default";var o=i.get(l);if(!o){var d={loading:0,preload:null};if(o=a.querySelector(Ni(l)))d.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=xt.get(l))&&Rc(e,n);var g=o=a.createElement("link");je(g),Qe(g,"link",e),g._p=new Promise(function(x,N){g.onload=x,g.onerror=N}),g.addEventListener("load",function(){d.loading|=1}),g.addEventListener("error",function(){d.loading|=2}),d.loading|=4,$l(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:d},i.set(l,o)}}}function ig(e,t){rn.X(e,t);var n=za;if(n&&e){var a=ra(n).hoistableScripts,i=Ha(e),l=a.get(i);l||(l=n.querySelector(ki(i)),l||(e=E({src:e,async:!0},t),(t=xt.get(i))&&Lc(e,t),l=n.createElement("script"),je(l),Qe(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function lg(e,t){rn.M(e,t);var n=za;if(n&&e){var a=ra(n).hoistableScripts,i=Ha(e),l=a.get(i);l||(l=n.querySelector(ki(i)),l||(e=E({src:e,async:!0,type:"module"},t),(t=xt.get(i))&&Lc(e,t),l=n.createElement("script"),je(l),Qe(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function jh(e,t,n,a){var i=(i=ae.current)?Jl(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ba(n.href),n=ra(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ba(n.href);var l=ra(i).hoistableStyles,o=l.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=i.querySelector(Ni(e)))&&!l._p&&(o.instance=l,o.state.loading=5),xt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xt.set(e,n),l||rg(i,e,n,o.state))),t&&a===null)throw Error(s(528,""));return o}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ha(n),n=ra(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ba(e){return'href="'+vt(e)+'"'}function Ni(e){return'link[rel="stylesheet"]['+e+"]"}function qh(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function rg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Qe(t,"link",n),je(t),e.head.appendChild(t))}function Ha(e){return'[src="'+vt(e)+'"]'}function ki(e){return"script[async]"+e}function Uh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+vt(n.href)+'"]');if(a)return t.instance=a,je(a),a;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),je(a),Qe(a,"style",i),$l(a,n.precedence,e),t.instance=a;case"stylesheet":i=Ba(n.href);var l=e.querySelector(Ni(i));if(l)return t.state.loading|=4,t.instance=l,je(l),l;a=qh(n),(i=xt.get(i))&&Rc(a,i),l=(e.ownerDocument||e).createElement("link"),je(l);var o=l;return o._p=new Promise(function(d,g){o.onload=d,o.onerror=g}),Qe(l,"link",a),t.state.loading|=4,$l(l,n.precedence,e),t.instance=l;case"script":return l=Ha(n.src),(i=e.querySelector(ki(l)))?(t.instance=i,je(i),i):(a=n,(i=xt.get(l))&&(a=E({},n),Lc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),je(i),Qe(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,$l(a,n.precedence,e));return t.instance}function $l(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,o=0;o<a.length;o++){var d=a[o];if(d.dataset.precedence===t)l=d;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var er=null;function Gh(e,t,n){if(er===null){var a=new Map,i=er=new Map;i.set(n,a)}else i=er,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var l=n[i];if(!(l[Va]||l[Ue]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var d=a.get(o);d?d.push(l):a.set(o,[l])}}return a}function Fh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function og(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Wh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cg(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Ba(a.href),l=t.querySelector(Ni(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=tr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,je(l);return}l=t.ownerDocument||t,a=qh(a),(i=xt.get(i))&&Rc(a,i),l=l.createElement("link"),je(l);var o=l;o._p=new Promise(function(d,g){o.onload=d,o.onerror=g}),Qe(l,"link",a),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=tr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Nc=0;function sg(e,t){return e.stylesheets&&e.count===0&&ar(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&ar(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Nc===0&&(Nc=62500*Gp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ar(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Nc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function tr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ar(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nr=null;function ar(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nr=new Map,t.forEach(ug,e),nr=null,tr.call(e))}function ug(e,t){if(!(t.state.loading&4)){var n=nr.get(e);if(n)var a=n.get(null);else{n=new Map,nr.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var o=i[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}i=t.instance,o=i.getAttribute("data-precedence"),l=n.get(o)||a,l===a&&n.set(null,i),n.set(o,i),this.count++,a=tr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Oi={$$typeof:W,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function dg(e,t,n,a,i,l,o,d,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_r(0),this.hiddenUpdates=_r(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Qh(e,t,n,a,i,l,o,d,g,x,N,w){return e=new dg(e,t,n,o,g,x,N,w,d),t=1,l===!0&&(t|=24),l=st(3,null,null,t),e.current=l,l.stateNode=e,t=so(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:a,isDehydrated:n,cache:t},mo(l),e}function Kh(e){return e?(e=ga,e):ga}function Vh(e,t,n,a,i,l){i=Kh(i),a.context===null?a.context=i:a.pendingContext=i,a=vn(t),a.payload={element:n},l=l===void 0?null:l,l!==null&&(a.callback=l),n=Sn(e,a,t),n!==null&&(it(n,e,t),di(n,e,t))}function Xh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kc(e,t){Xh(e,t),(e=e.alternate)&&Xh(e,t)}function Yh(e){if(e.tag===13||e.tag===31){var t=Gn(e,67108864);t!==null&&it(t,e,67108864),kc(e,67108864)}}function Zh(e){if(e.tag===13||e.tag===31){var t=mt();t=xr(t);var n=Gn(e,t);n!==null&&it(n,e,t),kc(e,t)}}var ir=!0;function hg(e,t,n,a){var i=k.T;k.T=null;var l=B.p;try{B.p=2,Oc(e,t,n,a)}finally{B.p=l,k.T=i}}function fg(e,t,n,a){var i=k.T;k.T=null;var l=B.p;try{B.p=8,Oc(e,t,n,a)}finally{B.p=l,k.T=i}}function Oc(e,t,n,a){if(ir){var i=wc(a);if(i===null)Sc(e,t,a,lr,n),$h(e,a);else if(pg(i,e,t,n,a))a.stopPropagation();else if($h(e,a),t&4&&-1<mg.indexOf(e)){for(;i!==null;){var l=la(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=Bn(l.pendingLanes);if(o!==0){var d=l;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var g=1<<31-ot(o);d.entanglements[1]|=g,o&=~g}Bt(l),(fe&6)===0&&(ql=lt()+500,Mi(0))}}break;case 31:case 13:d=Gn(l,2),d!==null&&it(d,l,2),Gl(),kc(l,2)}if(l=wc(a),l===null&&Sc(e,t,a,lr,n),l===i)break;i=l}i!==null&&a.stopPropagation()}else Sc(e,t,a,null,n)}}function wc(e){return e=Ir(e),Ic(e)}var lr=null;function Ic(e){if(lr=null,e=ia(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=v(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return lr=e,null}function Jh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($f()){case rs:return 2;case os:return 8;case Vi:case em:return 32;case cs:return 268435456;default:return 32}default:return 32}}var Pc=!1,Ln=null,Nn=null,kn=null,wi=new Map,Ii=new Map,On=[],mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $h(e,t){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(t.pointerId)}}function Pi(e,t,n,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},t!==null&&(t=la(t),t!==null&&Yh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pg(e,t,n,a,i){switch(t){case"focusin":return Ln=Pi(Ln,e,t,n,a,i),!0;case"dragenter":return Nn=Pi(Nn,e,t,n,a,i),!0;case"mouseover":return kn=Pi(kn,e,t,n,a,i),!0;case"pointerover":var l=i.pointerId;return wi.set(l,Pi(wi.get(l)||null,e,t,n,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Ii.set(l,Pi(Ii.get(l)||null,e,t,n,a,i)),!0}return!1}function ef(e){var t=ia(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=v(n),t!==null){e.blockedOn=t,ms(e.priority,function(){Zh(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,ms(e.priority,function(){Zh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);wr=a,n.target.dispatchEvent(a),wr=null}else return t=la(n),t!==null&&Yh(t),e.blockedOn=n,!1;t.shift()}return!0}function tf(e,t,n){rr(e)&&n.delete(t)}function gg(){Pc=!1,Ln!==null&&rr(Ln)&&(Ln=null),Nn!==null&&rr(Nn)&&(Nn=null),kn!==null&&rr(kn)&&(kn=null),wi.forEach(tf),Ii.forEach(tf)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Pc||(Pc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gg)))}var cr=null;function nf(e){cr!==e&&(cr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cr===e&&(cr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Ic(a||n)===null)continue;break}var l=la(n);l!==null&&(e.splice(t,3),t-=3,wo(l,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function ja(e){function t(g){return or(g,e)}Ln!==null&&or(Ln,e),Nn!==null&&or(Nn,e),kn!==null&&or(kn,e),wi.forEach(t),Ii.forEach(t);for(var n=0;n<On.length;n++){var a=On[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<On.length&&(n=On[0],n.blockedOn===null);)ef(n),n.blockedOn===null&&On.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],l=n[a+1],o=i[Je]||null;if(typeof l=="function")o||nf(n);else if(o){var d=null;if(l&&l.hasAttribute("formAction")){if(i=l,o=l[Je]||null)d=o.formAction;else if(Ic(i)!==null)continue}else d=o.action;typeof d=="function"?n[a+1]=d:(n.splice(a,3),a-=3),nf(n)}}}function af(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function zc(e){this._internalRoot=e}sr.prototype.render=zc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=mt();Vh(n,a,e,t,null,null)},sr.prototype.unmount=zc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vh(e.current,2,null,e,null,null),Gl(),t[aa]=null}};function sr(e){this._internalRoot=e}sr.prototype.unstable_scheduleHydration=function(e){if(e){var t=fs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<On.length&&t!==0&&t<On[n].priority;n++);On.splice(n,0,e),n===0&&ef(e)}};var lf=u.version;if(lf!=="19.2.4")throw Error(s(527,lf,"19.2.4"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var yg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ur.isDisabled&&ur.supportsFiber)try{Wa=ur.inject(yg),rt=ur}catch{}}return Bi.createRoot=function(e,t){if(!h(e))throw Error(s(299));var n=!1,a="",i=dd,l=hd,o=fd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qh(e,1,!1,null,null,n,a,null,i,l,o,af),e[aa]=t.current,vc(e),new zc(t)},Bi.hydrateRoot=function(e,t,n){if(!h(e))throw Error(s(299));var a=!1,i="",l=dd,o=hd,d=fd,g=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.formState!==void 0&&(g=n.formState)),t=Qh(e,1,!0,t,n??null,a,i,g,l,o,d,af),t.context=Kh(null),n=t.current,a=mt(),a=xr(a),i=vn(a),i.callback=null,Sn(n,i,a),n=a,t.current.lanes=n,Ka(t,n),Bt(t),e[aa]=t.current,vc(e),new sr(t)},Bi.version="19.2.4",Bi}var pf;function Mg(){if(pf)return jc.exports;pf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),jc.exports=xg(),jc.exports}var Dg=Mg();/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gf="popstate";function yf(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Rg(r={}){function u(h,m){let{pathname:v="/",search:p="",hash:S=""}=na(h.location.hash.substring(1));return!v.startsWith("/")&&!v.startsWith(".")&&(v="/"+v),Xc("",{pathname:v,search:p,hash:S},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(h,m){let v=h.document.querySelector("base"),p="";if(v&&v.getAttribute("href")){let S=h.location.href,y=S.indexOf("#");p=y===-1?S:S.slice(0,y)}return p+"#"+(typeof m=="string"?m:Ui(m))}function s(h,m){kt(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return Ng(u,f,s,r)}function Me(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function kt(r,u){if(!r){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Lg(){return Math.random().toString(36).substring(2,10)}function vf(r,u){return{usr:r.state,key:r.key,idx:u,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Xc(r,u,f=null,s,h){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof u=="string"?na(u):u,state:f,key:u&&u.key||s||Lg(),unstable_mask:h}}function Ui({pathname:r="/",search:u="",hash:f=""}){return u&&u!=="?"&&(r+=u.charAt(0)==="?"?u:"?"+u),f&&f!=="#"&&(r+=f.charAt(0)==="#"?f:"#"+f),r}function na(r){let u={};if(r){let f=r.indexOf("#");f>=0&&(u.hash=r.substring(f),r=r.substring(0,f));let s=r.indexOf("?");s>=0&&(u.search=r.substring(s),r=r.substring(0,s)),r&&(u.pathname=r)}return u}function Ng(r,u,f,s={}){let{window:h=document.defaultView,v5Compat:m=!1}=s,v=h.history,p="POP",S=null,y=C();y==null&&(y=0,v.replaceState({...v.state,idx:y},""));function C(){return(v.state||{idx:null}).idx}function E(){p="POP";let P=C(),z=P==null?null:P-y;y=P,S&&S({action:p,location:q.location,delta:z})}function R(P,z){p="PUSH";let V=yf(P)?P:Xc(q.location,P,z);f&&f(V,P),y=C()+1;let W=vf(V,y),ne=q.createHref(V.unstable_mask||V);try{v.pushState(W,"",ne)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;h.location.assign(ne)}m&&S&&S({action:p,location:q.location,delta:1})}function j(P,z){p="REPLACE";let V=yf(P)?P:Xc(q.location,P,z);f&&f(V,P),y=C();let W=vf(V,y),ne=q.createHref(V.unstable_mask||V);v.replaceState(W,"",ne),m&&S&&S({action:p,location:q.location,delta:0})}function Q(P){return kg(P)}let q={get action(){return p},get location(){return r(h,v)},listen(P){if(S)throw new Error("A history only accepts one active listener");return h.addEventListener(gf,E),S=P,()=>{h.removeEventListener(gf,E),S=null}},createHref(P){return u(h,P)},createURL:Q,encodeLocation(P){let z=Q(P);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:R,replace:j,go(P){return v.go(P)}};return q}function kg(r,u=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Me(f,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Ui(r);return s=s.replace(/ $/,"%20"),!u&&s.startsWith("//")&&(s=f+s),new URL(s,f)}function Mf(r,u,f="/"){return Og(r,u,f,!1)}function Og(r,u,f,s){let h=typeof u=="string"?na(u):u,m=on(h.pathname||"/",f);if(m==null)return null;let v=Df(r);wg(v);let p=null;for(let S=0;p==null&&S<v.length;++S){let y=Wg(m);p=Gg(v[S],y,s)}return p}function Df(r,u=[],f=[],s="",h=!1){let m=(v,p,S=h,y)=>{let C={relativePath:y===void 0?v.path||"":y,caseSensitive:v.caseSensitive===!0,childrenIndex:p,route:v};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(s)&&S)return;Me(C.relativePath.startsWith(s),`Absolute route path "${C.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(s.length)}let E=qt([s,C.relativePath]),R=f.concat(C);v.children&&v.children.length>0&&(Me(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Df(v.children,u,R,E,S)),!(v.path==null&&!v.index)&&u.push({path:E,score:qg(E,v.index),routesMeta:R})};return r.forEach((v,p)=>{var S;if(v.path===""||!((S=v.path)!=null&&S.includes("?")))m(v,p);else for(let y of Rf(v.path))m(v,p,!0,y)}),u}function Rf(r){let u=r.split("/");if(u.length===0)return[];let[f,...s]=u,h=f.endsWith("?"),m=f.replace(/\?$/,"");if(s.length===0)return h?[m,""]:[m];let v=Rf(s.join("/")),p=[];return p.push(...v.map(S=>S===""?m:[m,S].join("/"))),h&&p.push(...v),p.map(S=>r.startsWith("/")&&S===""?"/":S)}function wg(r){r.sort((u,f)=>u.score!==f.score?f.score-u.score:Ug(u.routesMeta.map(s=>s.childrenIndex),f.routesMeta.map(s=>s.childrenIndex)))}var Ig=/^:[\w-]+$/,Pg=3,zg=2,Bg=1,Hg=10,jg=-2,Sf=r=>r==="*";function qg(r,u){let f=r.split("/"),s=f.length;return f.some(Sf)&&(s+=jg),u&&(s+=zg),f.filter(h=>!Sf(h)).reduce((h,m)=>h+(Ig.test(m)?Pg:m===""?Bg:Hg),s)}function Ug(r,u){return r.length===u.length&&r.slice(0,-1).every((s,h)=>s===u[h])?r[r.length-1]-u[u.length-1]:0}function Gg(r,u,f=!1){let{routesMeta:s}=r,h={},m="/",v=[];for(let p=0;p<s.length;++p){let S=s[p],y=p===s.length-1,C=m==="/"?u:u.slice(m.length)||"/",E=gr({path:S.relativePath,caseSensitive:S.caseSensitive,end:y},C),R=S.route;if(!E&&y&&f&&!s[s.length-1].route.index&&(E=gr({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},C)),!E)return null;Object.assign(h,E.params),v.push({params:h,pathname:qt([m,E.pathname]),pathnameBase:Xg(qt([m,E.pathnameBase])),route:R}),E.pathnameBase!=="/"&&(m=qt([m,E.pathnameBase]))}return v}function gr(r,u){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[f,s]=Fg(r.path,r.caseSensitive,r.end),h=u.match(f);if(!h)return null;let m=h[0],v=m.replace(/(.)\/+$/,"$1"),p=h.slice(1);return{params:s.reduce((y,{paramName:C,isOptional:E},R)=>{if(C==="*"){let Q=p[R]||"";v=m.slice(0,m.length-Q.length).replace(/(.)\/+$/,"$1")}const j=p[R];return E&&!j?y[C]=void 0:y[C]=(j||"").replace(/%2F/g,"/"),y},{}),pathname:m,pathnameBase:v,pattern:r}}function Fg(r,u=!1,f=!0){kt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],h="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,p,S,y,C)=>{if(s.push({paramName:p,isOptional:S!=null}),S){let E=C.charAt(y+v.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),h+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?h+="\\/*$":r!==""&&r!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,u?void 0:"i"),s]}function Wg(r){try{return r.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return kt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),r}}function on(r,u){if(u==="/")return r;if(!r.toLowerCase().startsWith(u.toLowerCase()))return null;let f=u.endsWith("/")?u.length-1:u.length,s=r.charAt(f);return s&&s!=="/"?null:r.slice(f)||"/"}var Qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Kg(r,u="/"){let{pathname:f,search:s="",hash:h=""}=typeof r=="string"?na(r):r,m;return f?(f=f.replace(/\/\/+/g,"/"),f.startsWith("/")?m=bf(f.substring(1),"/"):m=bf(f,u)):m=u,{pathname:m,search:Yg(s),hash:Zg(h)}}function bf(r,u){let f=u.replace(/\/+$/,"").split("/");return r.split("/").forEach(h=>{h===".."?f.length>1&&f.pop():h!=="."&&f.push(h)}),f.length>1?f.join("/"):"/"}function Fc(r,u,f,s){return`Cannot include a '${r}' character in a manually specified \`to.${u}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vg(r){return r.filter((u,f)=>f===0||u.route.path&&u.route.path.length>0)}function Lf(r){let u=Vg(r);return u.map((f,s)=>s===u.length-1?f.pathname:f.pathnameBase)}function Jc(r,u,f,s=!1){let h;typeof r=="string"?h=na(r):(h={...r},Me(!h.pathname||!h.pathname.includes("?"),Fc("?","pathname","search",h)),Me(!h.pathname||!h.pathname.includes("#"),Fc("#","pathname","hash",h)),Me(!h.search||!h.search.includes("#"),Fc("#","search","hash",h)));let m=r===""||h.pathname==="",v=m?"/":h.pathname,p;if(v==null)p=f;else{let E=u.length-1;if(!s&&v.startsWith("..")){let R=v.split("/");for(;R[0]==="..";)R.shift(),E-=1;h.pathname=R.join("/")}p=E>=0?u[E]:"/"}let S=Kg(h,p),y=v&&v!=="/"&&v.endsWith("/"),C=(m||v===".")&&f.endsWith("/");return!S.pathname.endsWith("/")&&(y||C)&&(S.pathname+="/"),S}var qt=r=>r.join("/").replace(/\/\/+/g,"/"),Xg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Yg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Zg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Jg=class{constructor(r,u,f,s=!1){this.status=r,this.statusText=u||"",this.internal=s,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function $g(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function ey(r){return r.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Nf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function kf(r,u){let f=r;if(typeof f!="string"||!Qg.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let s=f,h=!1;if(Nf)try{let m=new URL(window.location.href),v=f.startsWith("//")?new URL(m.protocol+f):new URL(f),p=on(v.pathname,u);v.origin===m.origin&&p!=null?f=p+v.search+v.hash:h=!0}catch{kt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:h,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Of=["POST","PUT","PATCH","DELETE"];new Set(Of);var ty=["GET",...Of];new Set(ty);var Ga=D.createContext(null);Ga.displayName="DataRouter";var yr=D.createContext(null);yr.displayName="DataRouterState";var ny=D.createContext(!1),wf=D.createContext({isTransitioning:!1});wf.displayName="ViewTransition";var ay=D.createContext(new Map);ay.displayName="Fetchers";var iy=D.createContext(null);iy.displayName="Await";var Mt=D.createContext(null);Mt.displayName="Navigation";var Fi=D.createContext(null);Fi.displayName="Location";var cn=D.createContext({outlet:null,matches:[],isDataRoute:!1});cn.displayName="Route";var $c=D.createContext(null);$c.displayName="RouteError";var If="REACT_ROUTER_ERROR",ly="REDIRECT",ry="ROUTE_ERROR_RESPONSE";function oy(r){if(r.startsWith(`${If}:${ly}:{`))try{let u=JSON.parse(r.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function cy(r){if(r.startsWith(`${If}:${ry}:{`))try{let u=JSON.parse(r.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new Jg(u.status,u.statusText,u.data)}catch{}}function sy(r,{relative:u}={}){Me(Wi(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:s}=D.useContext(Mt),{hash:h,pathname:m,search:v}=Qi(r,{relative:u}),p=m;return f!=="/"&&(p=m==="/"?f:qt([f,m])),s.createHref({pathname:p,search:v,hash:h})}function Wi(){return D.useContext(Fi)!=null}function sn(){return Me(Wi(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(Fi).location}var Pf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zf(r){D.useContext(Mt).static||D.useLayoutEffect(r)}function uy(){let{isDataRoute:r}=D.useContext(cn);return r?Ay():dy()}function dy(){Me(Wi(),"useNavigate() may be used only in the context of a <Router> component.");let r=D.useContext(Ga),{basename:u,navigator:f}=D.useContext(Mt),{matches:s}=D.useContext(cn),{pathname:h}=sn(),m=JSON.stringify(Lf(s)),v=D.useRef(!1);return zf(()=>{v.current=!0}),D.useCallback((S,y={})=>{if(kt(v.current,Pf),!v.current)return;if(typeof S=="number"){f.go(S);return}let C=Jc(S,JSON.parse(m),h,y.relative==="path");r==null&&u!=="/"&&(C.pathname=C.pathname==="/"?u:qt([u,C.pathname])),(y.replace?f.replace:f.push)(C,y.state,y)},[u,f,m,h,r])}D.createContext(null);function Qi(r,{relative:u}={}){let{matches:f}=D.useContext(cn),{pathname:s}=sn(),h=JSON.stringify(Lf(f));return D.useMemo(()=>Jc(r,JSON.parse(h),s,u==="path"),[r,h,s,u])}function hy(r,u){return Bf(r,u)}function Bf(r,u,f){var P;Me(Wi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=D.useContext(Mt),{matches:h}=D.useContext(cn),m=h[h.length-1],v=m?m.params:{},p=m?m.pathname:"/",S=m?m.pathnameBase:"/",y=m&&m.route;{let z=y&&y.path||"";jf(p,!y||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let C=sn(),E;if(u){let z=typeof u=="string"?na(u):u;Me(S==="/"||((P=z.pathname)==null?void 0:P.startsWith(S)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${z.pathname}" was given in the \`location\` prop.`),E=z}else E=C;let R=E.pathname||"/",j=R;if(S!=="/"){let z=S.replace(/^\//,"").split("/");j="/"+R.replace(/^\//,"").split("/").slice(z.length).join("/")}let Q=Mf(r,{pathname:j});kt(y||Q!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),kt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=yy(Q&&Q.map(z=>Object.assign({},z,{params:Object.assign({},v,z.params),pathname:qt([S,s.encodeLocation?s.encodeLocation(z.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?S:qt([S,s.encodeLocation?s.encodeLocation(z.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),h,f);return u&&q?D.createElement(Fi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...E},navigationType:"POP"}},q):q}function fy(){let r=Ey(),u=$g(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),f=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:s},m={padding:"2px 4px",backgroundColor:s},v=null;return console.error("Error handled by React Router default ErrorBoundary:",r),v=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:m},"ErrorBoundary")," or"," ",D.createElement("code",{style:m},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},u),f?D.createElement("pre",{style:h},f):null,v)}var my=D.createElement(fy,null),Hf=class extends D.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,u){return u.location!==r.location||u.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:u.error,location:u.location,revalidation:r.revalidation||u.revalidation}}componentDidCatch(r,u){this.props.onError?this.props.onError(r,u):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const f=cy(r.digest);f&&(r=f)}let u=r!==void 0?D.createElement(cn.Provider,{value:this.props.routeContext},D.createElement($c.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?D.createElement(py,{error:r},u):u}};Hf.contextType=ny;var Wc=new WeakMap;function py({children:r,error:u}){let{basename:f}=D.useContext(Mt);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let s=oy(u.digest);if(s){let h=Wc.get(u);if(h)throw h;let m=kf(s.location,f);if(Nf&&!Wc.get(u))if(m.isExternal||s.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:s.replace}));throw Wc.set(u,v),v}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return r}function gy({routeContext:r,match:u,children:f}){let s=D.useContext(Ga);return s&&s.static&&s.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=u.route.id),D.createElement(cn.Provider,{value:r},f)}function yy(r,u=[],f){let s=f==null?void 0:f.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(u.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let h=r,m=s==null?void 0:s.errors;if(m!=null){let C=h.findIndex(E=>E.route.id&&(m==null?void 0:m[E.route.id])!==void 0);Me(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),h=h.slice(0,Math.min(h.length,C+1))}let v=!1,p=-1;if(f&&s){v=s.renderFallback;for(let C=0;C<h.length;C++){let E=h[C];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(p=C),E.route.id){let{loaderData:R,errors:j}=s,Q=E.route.loader&&!R.hasOwnProperty(E.route.id)&&(!j||j[E.route.id]===void 0);if(E.route.lazy||Q){f.isStatic&&(v=!0),p>=0?h=h.slice(0,p+1):h=[h[0]];break}}}}let S=f==null?void 0:f.onError,y=s&&S?(C,E)=>{var R,j;S(C,{location:s.location,params:((j=(R=s.matches)==null?void 0:R[0])==null?void 0:j.params)??{},unstable_pattern:ey(s.matches),errorInfo:E})}:void 0;return h.reduceRight((C,E,R)=>{let j,Q=!1,q=null,P=null;s&&(j=m&&E.route.id?m[E.route.id]:void 0,q=E.route.errorElement||my,v&&(p<0&&R===0?(jf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,P=null):p===R&&(Q=!0,P=E.route.hydrateFallbackElement||null)));let z=u.concat(h.slice(0,R+1)),V=()=>{let W;return j?W=q:Q?W=P:E.route.Component?W=D.createElement(E.route.Component,null):E.route.element?W=E.route.element:W=C,D.createElement(gy,{match:E,routeContext:{outlet:C,matches:z,isDataRoute:s!=null},children:W})};return s&&(E.route.ErrorBoundary||E.route.errorElement||R===0)?D.createElement(Hf,{location:s.location,revalidation:s.revalidation,component:q,error:j,children:V(),routeContext:{outlet:null,matches:z,isDataRoute:!0},onError:y}):V()},null)}function es(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vy(r){let u=D.useContext(Ga);return Me(u,es(r)),u}function Sy(r){let u=D.useContext(yr);return Me(u,es(r)),u}function by(r){let u=D.useContext(cn);return Me(u,es(r)),u}function ts(r){let u=by(r),f=u.matches[u.matches.length-1];return Me(f.route.id,`${r} can only be used on routes that contain a unique "id"`),f.route.id}function Ty(){return ts("useRouteId")}function Ey(){var s;let r=D.useContext($c),u=Sy("useRouteError"),f=ts("useRouteError");return r!==void 0?r:(s=u.errors)==null?void 0:s[f]}function Ay(){let{router:r}=vy("useNavigate"),u=ts("useNavigate"),f=D.useRef(!1);return zf(()=>{f.current=!0}),D.useCallback(async(h,m={})=>{kt(f.current,Pf),f.current&&(typeof h=="number"?await r.navigate(h):await r.navigate(h,{fromRouteId:u,...m}))},[r,u])}var Tf={};function jf(r,u,f){!u&&!Tf[r]&&(Tf[r]=!0,kt(!1,f))}D.memo(Cy);function Cy({routes:r,future:u,state:f,isStatic:s,onError:h}){return Bf(r,void 0,{state:f,isStatic:s,onError:h})}function jt(r){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _y({basename:r="/",children:u=null,location:f,navigationType:s="POP",navigator:h,static:m=!1,unstable_useTransitions:v}){Me(!Wi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),S=D.useMemo(()=>({basename:p,navigator:h,static:m,unstable_useTransitions:v,future:{}}),[p,h,m,v]);typeof f=="string"&&(f=na(f));let{pathname:y="/",search:C="",hash:E="",state:R=null,key:j="default",unstable_mask:Q}=f,q=D.useMemo(()=>{let P=on(y,p);return P==null?null:{location:{pathname:P,search:C,hash:E,state:R,key:j,unstable_mask:Q},navigationType:s}},[p,y,C,E,R,j,s,Q]);return kt(q!=null,`<Router basename="${p}"> is not able to match the URL "${y}${C}${E}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:D.createElement(Mt.Provider,{value:S},D.createElement(Fi.Provider,{children:u,value:q}))}function xy({children:r,location:u}){return hy(Yc(r),u)}function Yc(r,u=[]){let f=[];return D.Children.forEach(r,(s,h)=>{if(!D.isValidElement(s))return;let m=[...u,h];if(s.type===D.Fragment){f.push.apply(f,Yc(s.props.children,m));return}Me(s.type===jt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!s.props.index||!s.props.children,"An index route cannot have child routes.");let v={id:s.props.id||m.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(v.children=Yc(s.props.children,m)),f.push(v)}),f}var fr="get",mr="application/x-www-form-urlencoded";function vr(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function My(r){return vr(r)&&r.tagName.toLowerCase()==="button"}function Dy(r){return vr(r)&&r.tagName.toLowerCase()==="form"}function Ry(r){return vr(r)&&r.tagName.toLowerCase()==="input"}function Ly(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Ny(r,u){return r.button===0&&(!u||u==="_self")&&!Ly(r)}var dr=null;function ky(){if(dr===null)try{new FormData(document.createElement("form"),0),dr=!1}catch{dr=!0}return dr}var Oy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qc(r){return r!=null&&!Oy.has(r)?(kt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mr}"`),null):r}function wy(r,u){let f,s,h,m,v;if(Dy(r)){let p=r.getAttribute("action");s=p?on(p,u):null,f=r.getAttribute("method")||fr,h=Qc(r.getAttribute("enctype"))||mr,m=new FormData(r)}else if(My(r)||Ry(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=r.getAttribute("formaction")||p.getAttribute("action");if(s=S?on(S,u):null,f=r.getAttribute("formmethod")||p.getAttribute("method")||fr,h=Qc(r.getAttribute("formenctype"))||Qc(p.getAttribute("enctype"))||mr,m=new FormData(p,r),!ky()){let{name:y,type:C,value:E}=r;if(C==="image"){let R=y?`${y}.`:"";m.append(`${R}x`,"0"),m.append(`${R}y`,"0")}else y&&m.append(y,E)}}else{if(vr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=fr,s=null,h=mr,v=r}return m&&h==="text/plain"&&(v=m,m=void 0),{action:s,method:f.toLowerCase(),encType:h,formData:m,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ns(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function Iy(r,u,f,s){let h=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return f?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${s}`:h.pathname=`${h.pathname}.${s}`:h.pathname==="/"?h.pathname=`_root.${s}`:u&&on(h.pathname,u)==="/"?h.pathname=`${u.replace(/\/$/,"")}/_root.${s}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${s}`,h}async function Py(r,u){if(r.id in u)return u[r.id];try{let f=await import(r.module);return u[r.id]=f,f}catch(f){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zy(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function By(r,u,f){let s=await Promise.all(r.map(async h=>{let m=u.routes[h.route.id];if(m){let v=await Py(m,f);return v.links?v.links():[]}return[]}));return Uy(s.flat(1).filter(zy).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Ef(r,u,f,s,h,m){let v=(S,y)=>f[y]?S.route.id!==f[y].route.id:!0,p=(S,y)=>{var C;return f[y].pathname!==S.pathname||((C=f[y].route.path)==null?void 0:C.endsWith("*"))&&f[y].params["*"]!==S.params["*"]};return m==="assets"?u.filter((S,y)=>v(S,y)||p(S,y)):m==="data"?u.filter((S,y)=>{var E;let C=s.routes[S.route.id];if(!C||!C.hasLoader)return!1;if(v(S,y)||p(S,y))return!0;if(S.route.shouldRevalidate){let R=S.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:((E=f[0])==null?void 0:E.params)||{},nextUrl:new URL(r,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Hy(r,u,{includeHydrateFallback:f}={}){return jy(r.map(s=>{let h=u.routes[s.route.id];if(!h)return[];let m=[h.module];return h.clientActionModule&&(m=m.concat(h.clientActionModule)),h.clientLoaderModule&&(m=m.concat(h.clientLoaderModule)),f&&h.hydrateFallbackModule&&(m=m.concat(h.hydrateFallbackModule)),h.imports&&(m=m.concat(h.imports)),m}).flat(1))}function jy(r){return[...new Set(r)]}function qy(r){let u={},f=Object.keys(r).sort();for(let s of f)u[s]=r[s];return u}function Uy(r,u){let f=new Set;return new Set(u),r.reduce((s,h)=>{let m=JSON.stringify(qy(h));return f.has(m)||(f.add(m),s.push({key:m,link:h})),s},[])}function qf(){let r=D.useContext(Ga);return ns(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Gy(){let r=D.useContext(yr);return ns(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var as=D.createContext(void 0);as.displayName="FrameworkContext";function Uf(){let r=D.useContext(as);return ns(r,"You must render this element inside a <HydratedRouter> element"),r}function Fy(r,u){let f=D.useContext(as),[s,h]=D.useState(!1),[m,v]=D.useState(!1),{onFocus:p,onBlur:S,onMouseEnter:y,onMouseLeave:C,onTouchStart:E}=u,R=D.useRef(null);D.useEffect(()=>{if(r==="render"&&v(!0),r==="viewport"){let q=z=>{z.forEach(V=>{v(V.isIntersecting)})},P=new IntersectionObserver(q,{threshold:.5});return R.current&&P.observe(R.current),()=>{P.disconnect()}}},[r]),D.useEffect(()=>{if(s){let q=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(q)}}},[s]);let j=()=>{h(!0)},Q=()=>{h(!1),v(!1)};return f?r!=="intent"?[m,R,{}]:[m,R,{onFocus:Hi(p,j),onBlur:Hi(S,Q),onMouseEnter:Hi(y,j),onMouseLeave:Hi(C,Q),onTouchStart:Hi(E,j)}]:[!1,R,{}]}function Hi(r,u){return f=>{r&&r(f),f.defaultPrevented||u(f)}}function Wy({page:r,...u}){let{router:f}=qf(),s=D.useMemo(()=>Mf(f.routes,r,f.basename),[f.routes,r,f.basename]);return s?D.createElement(Ky,{page:r,matches:s,...u}):null}function Qy(r){let{manifest:u,routeModules:f}=Uf(),[s,h]=D.useState([]);return D.useEffect(()=>{let m=!1;return By(r,u,f).then(v=>{m||h(v)}),()=>{m=!0}},[r,u,f]),s}function Ky({page:r,matches:u,...f}){let s=sn(),{future:h,manifest:m,routeModules:v}=Uf(),{basename:p}=qf(),{loaderData:S,matches:y}=Gy(),C=D.useMemo(()=>Ef(r,u,y,m,s,"data"),[r,u,y,m,s]),E=D.useMemo(()=>Ef(r,u,y,m,s,"assets"),[r,u,y,m,s]),R=D.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let q=new Set,P=!1;if(u.forEach(V=>{var ne;let W=m.routes[V.route.id];!W||!W.hasLoader||(!C.some(se=>se.route.id===V.route.id)&&V.route.id in S&&((ne=v[V.route.id])!=null&&ne.shouldRevalidate)||W.hasClientLoader?P=!0:q.add(V.route.id))}),q.size===0)return[];let z=Iy(r,p,h.unstable_trailingSlashAwareDataRequests,"data");return P&&q.size>0&&z.searchParams.set("_routes",u.filter(V=>q.has(V.route.id)).map(V=>V.route.id).join(",")),[z.pathname+z.search]},[p,h.unstable_trailingSlashAwareDataRequests,S,s,m,C,u,r,v]),j=D.useMemo(()=>Hy(E,m),[E,m]),Q=Qy(E);return D.createElement(D.Fragment,null,R.map(q=>D.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...f})),j.map(q=>D.createElement("link",{key:q,rel:"modulepreload",href:q,...f})),Q.map(({key:q,link:P})=>D.createElement("link",{key:q,nonce:f.nonce,...P,crossOrigin:P.crossOrigin??f.crossOrigin})))}function Vy(...r){return u=>{r.forEach(f=>{typeof f=="function"?f(u):f!=null&&(f.current=u)})}}var Xy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xy&&(window.__reactRouterVersion="7.13.2")}catch{}function Yy({basename:r,children:u,unstable_useTransitions:f,window:s}){let h=D.useRef();h.current==null&&(h.current=Rg({window:s,v5Compat:!0}));let m=h.current,[v,p]=D.useState({action:m.action,location:m.location}),S=D.useCallback(y=>{f===!1?p(y):D.startTransition(()=>p(y))},[f]);return D.useLayoutEffect(()=>m.listen(S),[m,S]),D.createElement(_y,{basename:r,children:u,location:v.location,navigationType:v.action,navigator:m,unstable_useTransitions:f})}var Gf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qa=D.forwardRef(function({onClick:u,discover:f="render",prefetch:s="none",relative:h,reloadDocument:m,replace:v,unstable_mask:p,state:S,target:y,to:C,preventScrollReset:E,viewTransition:R,unstable_defaultShouldRevalidate:j,...Q},q){let{basename:P,navigator:z,unstable_useTransitions:V}=D.useContext(Mt),W=typeof C=="string"&&Gf.test(C),ne=kf(C,P);C=ne.to;let se=sy(C,{relative:h}),me=sn(),Z=null;if(p){let we=Jc(p,[],me.unstable_mask?me.unstable_mask.pathname:"/",!0);P!=="/"&&(we.pathname=we.pathname==="/"?P:qt([P,we.pathname])),Z=z.createHref(we)}let[Le,Ke,Ot]=Fy(s,Q),pt=$y(C,{replace:v,unstable_mask:p,state:S,target:y,preventScrollReset:E,relative:h,viewTransition:R,unstable_defaultShouldRevalidate:j,unstable_useTransitions:V});function Ve(we){u&&u(we),we.defaultPrevented||pt(we)}let wt=!(ne.isExternal||m),gt=D.createElement("a",{...Q,...Ot,href:(wt?Z:void 0)||ne.absoluteURL||se,onClick:wt?Ve:u,ref:Vy(q,Ke),target:y,"data-discover":!W&&f==="render"?"true":void 0});return Le&&!W?D.createElement(D.Fragment,null,gt,D.createElement(Wy,{page:se})):gt});qa.displayName="Link";var Ff=D.forwardRef(function({"aria-current":u="page",caseSensitive:f=!1,className:s="",end:h=!1,style:m,to:v,viewTransition:p,children:S,...y},C){let E=Qi(v,{relative:y.relative}),R=sn(),j=D.useContext(yr),{navigator:Q,basename:q}=D.useContext(Mt),P=j!=null&&i0(E)&&p===!0,z=Q.encodeLocation?Q.encodeLocation(E).pathname:E.pathname,V=R.pathname,W=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;f||(V=V.toLowerCase(),W=W?W.toLowerCase():null,z=z.toLowerCase()),W&&q&&(W=on(W,q)||W);const ne=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let se=V===z||!h&&V.startsWith(z)&&V.charAt(ne)==="/",me=W!=null&&(W===z||!h&&W.startsWith(z)&&W.charAt(z.length)==="/"),Z={isActive:se,isPending:me,isTransitioning:P},Le=se?u:void 0,Ke;typeof s=="function"?Ke=s(Z):Ke=[s,se?"active":null,me?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let Ot=typeof m=="function"?m(Z):m;return D.createElement(qa,{...y,"aria-current":Le,className:Ke,ref:C,style:Ot,to:v,viewTransition:p},typeof S=="function"?S(Z):S)});Ff.displayName="NavLink";var Zy=D.forwardRef(({discover:r="render",fetcherKey:u,navigate:f,reloadDocument:s,replace:h,state:m,method:v=fr,action:p,onSubmit:S,relative:y,preventScrollReset:C,viewTransition:E,unstable_defaultShouldRevalidate:R,...j},Q)=>{let{unstable_useTransitions:q}=D.useContext(Mt),P=n0(),z=a0(p,{relative:y}),V=v.toLowerCase()==="get"?"get":"post",W=typeof p=="string"&&Gf.test(p),ne=se=>{if(S&&S(se),se.defaultPrevented)return;se.preventDefault();let me=se.nativeEvent.submitter,Z=(me==null?void 0:me.getAttribute("formmethod"))||v,Le=()=>P(me||se.currentTarget,{fetcherKey:u,method:Z,navigate:f,replace:h,state:m,relative:y,preventScrollReset:C,viewTransition:E,unstable_defaultShouldRevalidate:R});q&&f!==!1?D.startTransition(()=>Le()):Le()};return D.createElement("form",{ref:Q,method:V,action:z,onSubmit:s?S:ne,...j,"data-discover":!W&&r==="render"?"true":void 0})});Zy.displayName="Form";function Jy(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wf(r){let u=D.useContext(Ga);return Me(u,Jy(r)),u}function $y(r,{target:u,replace:f,unstable_mask:s,state:h,preventScrollReset:m,relative:v,viewTransition:p,unstable_defaultShouldRevalidate:S,unstable_useTransitions:y}={}){let C=uy(),E=sn(),R=Qi(r,{relative:v});return D.useCallback(j=>{if(Ny(j,u)){j.preventDefault();let Q=f!==void 0?f:Ui(E)===Ui(R),q=()=>C(r,{replace:Q,unstable_mask:s,state:h,preventScrollReset:m,relative:v,viewTransition:p,unstable_defaultShouldRevalidate:S});y?D.startTransition(()=>q()):q()}},[E,C,R,f,s,h,u,r,m,v,p,S,y])}var e0=0,t0=()=>`__${String(++e0)}__`;function n0(){let{router:r}=Wf("useSubmit"),{basename:u}=D.useContext(Mt),f=Ty(),s=r.fetch,h=r.navigate;return D.useCallback(async(m,v={})=>{let{action:p,method:S,encType:y,formData:C,body:E}=wy(m,u);if(v.navigate===!1){let R=v.fetcherKey||t0();await s(R,f,v.action||p,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:C,body:E,formMethod:v.method||S,formEncType:v.encType||y,flushSync:v.flushSync})}else await h(v.action||p,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:C,body:E,formMethod:v.method||S,formEncType:v.encType||y,replace:v.replace,state:v.state,fromRouteId:f,flushSync:v.flushSync,viewTransition:v.viewTransition})},[s,h,u,f])}function a0(r,{relative:u}={}){let{basename:f}=D.useContext(Mt),s=D.useContext(cn);Me(s,"useFormAction must be used inside a RouteContext");let[h]=s.matches.slice(-1),m={...Qi(r||".",{relative:u})},v=sn();if(r==null){m.search=v.search;let p=new URLSearchParams(m.search),S=p.getAll("index");if(S.some(C=>C==="")){p.delete("index"),S.filter(E=>E).forEach(E=>p.append("index",E));let C=p.toString();m.search=C?`?${C}`:""}}return(!r||r===".")&&h.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(m.pathname=m.pathname==="/"?f:qt([f,m.pathname])),Ui(m)}function i0(r,{relative:u}={}){let f=D.useContext(wf);Me(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Wf("useViewTransitionState"),h=Qi(r,{relative:u});if(!f.isTransitioning)return!1;let m=on(f.currentLocation.pathname,s)||f.currentLocation.pathname,v=on(f.nextLocation.pathname,s)||f.nextLocation.pathname;return gr(h.pathname,v)!=null||gr(h.pathname,m)!=null}const l0=[{id:"q1",cat:"Nền tảng",lv:"easy",q:"AIoT khác IoT truyền thống ở điểm cốt lõi nào?",opts:["Dùng WiFi 6 nhanh hơn","Tích hợp AI xử lý tại thiết bị (Edge AI)","Tiêu thụ điện năng ít hơn","Giao thức bảo mật mạnh hơn"],ans:1,exp:"AIoT = AI + IoT: AI được nhúng trực tiếp vào thiết bị IoT, xử lý dữ liệu tại chỗ (Edge) thay vì gửi toàn bộ lên Cloud. Giảm độ trễ, tiết kiệm băng thông, hoạt động offline."},{id:"q2",cat:"Nền tảng",lv:"easy",q:"Kiến trúc AIoT 3 tầng từ dưới lên là?",opts:["Cloud → Edge → Device","Device → Edge → Cloud","Sensor → AI → Actuator","MCU → OS → Application"],ans:1,exp:"Device Layer (cảm biến, inference) → Edge/Gateway Layer (aggregation, pre-processing) → Cloud Layer (training, BI, dashboard). Data xử lý càng nhiều ở tầng dưới càng tốt."},{id:"q3",cat:"Nền tảng",lv:"medium",q:"Năm 2025, số lượng thiết bị IoT kết nối toàn cầu xấp xỉ bao nhiêu?",opts:["1 tỷ","5 tỷ","18 tỷ","100 tỷ"],ans:2,exp:"Năm 2025 có khoảng 18 tỷ thiết bị IoT kết nối. Dữ liệu sinh ra ~79 Zettabyte/năm — đây là lý do Edge AI cần thiết thay vì gửi toàn bộ lên cloud."},{id:"q4",cat:"Phần cứng",lv:"easy",q:"ESP32 có cấu hình CPU như thế nào?",opts:["1 lõi 160MHz","2 lõi 240MHz (Xtensa LX6)","4 lõi 120MHz ARM","1 lõi 240MHz + co-processor"],ans:1,exp:"ESP32 có dual-core Xtensa LX6 chạy tối đa 240MHz. Hỗ trợ FreeRTOS thực sự, chạy 2 task song song trên 2 core. 520KB SRAM + 4MB Flash."},{id:"q5",cat:"Phần cứng",lv:"easy",q:"ESP32-CAM khác ESP32 thường ở điểm nào?",opts:["Nhanh hơn 2x","Tích hợp camera OV2640 2MP + slot SD","Hỗ trợ 5GHz WiFi","RAM lớn hơn 10x"],ans:1,exp:"ESP32-CAM = ESP32 + camera OV2640 (2MP, 30fps) + SD card slot. Hỗ trợ JPEG streaming, face detection tích hợp. Phù hợp surveillance, barcode scanning."},{id:"q6",cat:"Phần cứng",lv:"medium",q:"Arduino Nano 33 BLE Sense khác Uno ở điểm quan trọng nhất với AIoT?",opts:["Nhỏ hơn về kích thước","Có TFLite Micro + 9-DOF IMU + microphone + BLE 5","Nhiều GPIO hơn","Giá rẻ hơn"],ans:1,exp:"Nano 33 BLE Sense có: Cortex-M4 FPU 64MHz, TFLite Micro support, LSM9DS1 IMU, MP34DT05 microphone, APDS-9960 gesture + color, BLE 5.0. Thiết kế sẵn cho TinyML."},{id:"q7",cat:"Phần cứng",lv:"medium",q:"ADC của ESP32 có độ phân giải bao nhiêu bit?",opts:["8-bit (256 bước)","10-bit (1024 bước)","12-bit (4096 bước)","16-bit (65536 bước)"],ans:2,exp:"ESP32 ADC 12-bit: giá trị 0–4095. Điện áp tham chiếu 3.3V → độ phân giải ~0.8mV/bước. Lưu ý: ADC2 không dùng được khi WiFi bật."},{id:"q8",cat:"Phần cứng",lv:"hard",q:"Trong hệ thống AIoT, tại sao ESP32-S3 tốt hơn ESP32 cho AI inference?",opts:["Giá rẻ hơn","Có vector extensions (SIMD) tăng tốc TFLite 4.5x","RAM lớn hơn 10x","Hỗ trợ WiFi 6"],ans:1,exp:"ESP32-S3 có Xtensa LX7 + AI/vector extensions (SIMD instructions). Theo Espressif benchmark, TFLite inference nhanh hơn ESP32 4.5x với cùng model. RAM 512KB, hỗ trợ PSRAM 8MB ngoài."},{id:"q9",cat:"Giao thức",lv:"easy",q:"MQTT dùng mô hình giao tiếp nào?",opts:["Request/Response như HTTP","Publish/Subscribe qua Broker","Peer-to-Peer trực tiếp","Master/Slave"],ans:1,exp:"MQTT Pub/Sub: Publisher gửi message đến Broker với Topic. Subscriber đăng ký Topic nhận message từ Broker. Publisher và Subscriber không cần biết nhau. Broker = trung gian."},{id:"q10",cat:"Giao thức",lv:"easy",q:"LoRa truyền tối đa bao xa trong điều kiện ngoài trời thoáng?",opts:["500m","2km","15km","100km"],ans:2,exp:"LoRa (Long Range) dùng Chirp Spread Spectrum, tầm truyền 2–15km ngoài trời thoáng, 1–5km trong đô thị. Tốc độ 0.3–50Kbps. Điện năng rất thấp: ~10mA khi transmit."},{id:"q11",cat:"Giao thức",lv:"easy",q:"I2C cần bao nhiêu dây tín hiệu?",opts:["1 dây","2 dây (SDA + SCL)","3 dây (MOSI+MISO+SCK)","4 dây"],ans:1,exp:"I2C chỉ cần 2 dây: SDA (data) và SCL (clock). Hỗ trợ 127 slave trên cùng bus, phân biệt bằng địa chỉ 7-bit. Tốc độ: 100kHz (Standard), 400kHz (Fast), 1MHz (Fast+)."},{id:"q12",cat:"Giao thức",lv:"medium",q:"MQTT QoS 2 đảm bảo điều gì?",opts:["Nhanh nhất","Message đến ít nhất 1 lần","Message đến đúng 1 lần (exactly once)","Message mã hóa"],ans:2,exp:"QoS 2 = Exactly Once Delivery: 4-step handshake (PUBLISH→PUBREC→PUBREL→PUBCOMP). Chậm nhất nhưng đảm bảo không mất, không trùng. Dùng cho thanh toán, lệnh điều khiển quan trọng."},{id:"q13",cat:"Giao thức",lv:"medium",q:"Tại sao ADC2 của ESP32 không dùng được khi WiFi bật?",opts:["Xung đột GPIO","ADC2 chia sẻ hardware với WiFi RF front-end","Software limitation","Nhiệt độ quá cao"],ans:1,exp:"ADC2 channels chia sẻ hardware với WiFi radio. Khi WiFi hoạt động, ADC2 bị chiếm dụng và trả về giá trị sai. Giải pháp: chỉ dùng ADC1 (GPIO32–39) trong project có WiFi."},{id:"q14",cat:"Giao thức",lv:"hard",q:'Trong UART, "baud rate 115200" có nghĩa là?',opts:["115200 byte/giây","115200 bit/giây","115200 frame/giây","115200 byte/phút"],ans:1,exp:"Baud rate = số symbol/giây. Với UART NRZ, 1 symbol = 1 bit. 115200 baud = 115200 bit/s. Với 1 start bit + 8 data bits + 1 stop bit = 10 bit/frame → throughput ~11520 byte/s."},{id:"q15",cat:"TinyML",lv:"easy",q:"Workflow TinyML từ đầu đến cuối là gì?",opts:["Code → Upload → Run","Collect data → Train → Convert → Deploy → Inference","Design PCB → Solder → Test","Install library → Include → Compile"],ans:1,exp:"TinyML workflow: Thu thập data → Tiền xử lý → Train model (PC/Cloud) → Optimize (quantize) → Convert sang TFLite → Export C array → Deploy vào MCU → Chạy inference."},{id:"q16",cat:"TinyML",lv:"easy",q:"Quantization INT8 mang lại lợi ích gì?",opts:["Tăng accuracy lên 4x","Giảm model size ~4x và tăng tốc inference ~2-4x","Tương thích nhiều hardware hơn","Giảm thời gian training"],ans:1,exp:"float32 (4 bytes) → int8 (1 byte): giảm model size 4x. Integer arithmetic nhanh hơn float trên MCU không có FPU. Accuracy giảm nhẹ ~1-2% nhưng chấp nhận được."},{id:"q17",cat:"TinyML",lv:"medium",q:"Edge Impulse là gì?",opts:["Phần mềm thiết kế PCB","Platform end-to-end cho TinyML: data → train → deploy","IDE cho FPGA","Database IoT"],ans:1,exp:"Edge Impulse cung cấp: data collection từ device, signal processing blocks (MFCC, FFT), auto-train NN, EON Tuner tối ưu cho target hardware, export Arduino/C++ library. Miễn phí cho education."},{id:"q18",cat:"TinyML",lv:"medium",q:"MFCC trong speech AI là gì?",opts:["Micro-controller Feature Computation","Mel-Frequency Cepstral Coefficients — đặc trưng âm thanh","Multiple Frame Cross-Correlation","Memory Footprint Compression Codec"],ans:1,exp:"MFCC (Mel-Frequency Cepstral Coefficients): trích xuất đặc trưng âm thanh mô phỏng cách tai người nghe. Chuỗi bước: Pre-emphasis → Framing → FFT → Mel filterbank → Log → DCT → 13 coefficients."},{id:"q19",cat:"TinyML",lv:"hard",q:"Trong Federated Learning cho AIoT, điều gì KHÔNG xảy ra?",opts:["Mỗi device train local model","Chỉ gradient/weights được gửi lên server","Dữ liệu thô được gửi lên server để train tập trung","Server aggregates model updates"],ans:2,exp:"Federated Learning: dữ liệu KHÔNG rời thiết bị. Mỗi device train local model trên data của mình, chỉ gửi gradient hoặc model weights (đã thêm Differential Privacy noise) lên server để aggregation."},{id:"q20",cat:"TinyML",lv:"hard",q:"Autoencoder dùng trong anomaly detection như thế nào?",opts:["Train trên cả normal và abnormal data","Train chỉ trên normal data; reconstruction error cao = anomaly","Train với supervised labels","Không cần training, rule-based"],ans:1,exp:"Autoencoder train trên normal data: học cách compress rồi reconstruct data bình thường. Khi gặp data bất thường, model không reconstruct tốt → MSE (reconstruction error) cao → phát hiện anomaly mà không cần label negative."},{id:"q21",cat:"Hệ thống",lv:"easy",q:"Node-RED là gì?",opts:["Ngôn ngữ lập trình mới","Visual flow-based programming tool cho IoT automation","Time-series database","Message broker"],ans:1,exp:'Node-RED là flow-based visual programming environment: kéo thả "nodes" tạo workflow IoT. Tích hợp MQTT, HTTP, WebSocket, database, AI, Telegram. Chạy trên Node.js, miễn phí.'},{id:"q22",cat:"Hệ thống",lv:"easy",q:"InfluxDB phù hợp nhất cho IoT vì?",opts:["Hỗ trợ SQL đầy đủ","Time-series database tối ưu: compression tốt, query nhanh theo time range","Chạy được trên ESP32","Hoàn toàn miễn phí mãi mãi"],ans:1,exp:'InfluxDB là time-series DB: tối ưu cho data có timestamp liên tục như sensor. Nén dữ liệu 10-40x, query "last 24h" hoặc "1h ago to now" cực nhanh. Flux query language mạnh hơn SQL cho time-series.'},{id:"q23",cat:"Hệ thống",lv:"medium",q:"TIG Stack trong IoT là viết tắt của?",opts:["Thing-Internet-Gateway","Telegraf-InfluxDB-Grafana","TCP-IoT-Gateway","Time-series-Influx-Graph"],ans:1,exp:"TIG = Telegraf (data collector, MQTT consumer) + InfluxDB (time-series storage) + Grafana (visualization, alerting). Stack phổ biến nhất cho IoT monitoring. Toàn bộ open-source."},{id:"q24",cat:"Hệ thống",lv:"hard",q:"Trong MQTT retained message, điều gì xảy ra?",opts:["Message được mã hóa","Broker lưu message cuối cùng và gửi ngay cho subscriber mới","Message không bao giờ hết hạn","Message được gửi nhiều lần"],ans:1,exp:"Retained message: broker lưu message cuối với flag retained=true. Subscriber mới connect và subscribe topic sẽ nhận ngay message này — không cần đợi publisher gửi lại. Dùng cho: device status, config, last known value."},{id:"q25",cat:"FPGA",lv:"easy",q:"FPGA khác CPU về cơ bản nhất ở?",opts:["FPGA luôn nhanh hơn CPU","FPGA thực thi song song thực sự (true parallelism), CPU tuần tự","FPGA ít tiêu thụ điện hơn","FPGA dễ lập trình hơn"],ans:1,exp:"CPU thực hiện instruction tuần tự (dù multi-core vẫn tuần tự trong mỗi core). FPGA mô tả hardware — tất cả logic hoạt động song song cùng lúc. 256 MAC units trên FPGA = 256 phép nhân/clock cycle thực sự."},{id:"q26",cat:"FPGA",lv:"easy",q:"Ngôn ngữ nào KHÔNG dùng để lập trình FPGA?",opts:["VHDL","Verilog","SystemVerilog","Python thuần túy (không qua HLS)"],ans:3,exp:"HDL (Hardware Description Language) cho FPGA: VHDL, Verilog, SystemVerilog. Python có thể dùng qua HLS (High-Level Synthesis) như Xilinx Vitis HLS. Python thuần không mô tả hardware được."},{id:"q27",cat:"FPGA",lv:"medium",q:"Systolic Array trong FPGA dùng để làm gì trong AI?",opts:["Lưu trữ model weights","Thực hiện matrix multiplication song song (tăng tốc CNN)","Giao tiếp với sensor","Quản lý clock"],ans:1,exp:'Systolic Array: mảng Processing Elements (PE), mỗi PE thực hiện 1 MAC (Multiply-Accumulate). Data "chảy" qua array song song → matrix multiply rất nhanh. Google TPU dùng 65536 × 65536 systolic array.'},{id:"q28",cat:"FPGA",lv:"hard",q:"Tang Nano 9K FPGA (Gowin GW1NR-9) có bao nhiêu LUT?",opts:["1K","4K","8640","20K"],ans:2,exp:"Tang Nano 9K: 8640 LUT4, 468Kb BRAM, 6 DSP blocks, 27MHz internal oscillator. Giá ~350K VND. Phù hợp học FPGA, LED matrix, UART, simple CNN accelerator."},{id:"q29",cat:"Bảo mật",lv:"medium",q:"Secure Boot trên ESP32 bảo vệ điều gì?",opts:["Mã hóa dữ liệu sensor","Chỉ cho phép chạy firmware đã được ký bằng private key","Mã hóa WiFi password","Bảo vệ kết nối MQTT"],ans:1,exp:"Secure Boot: bootloader kiểm tra chữ ký RSA-4096 của firmware trước khi chạy. Nếu firmware bị tamper hoặc không có chữ ký hợp lệ → từ chối boot. Kết hợp Flash Encryption bảo vệ toàn diện."},{id:"q30",cat:"Bảo mật",lv:"hard",q:"Differential Privacy trong Federated Learning AIoT thêm gì vào gradient?",opts:["Mã hóa AES","Gaussian noise hiệu chỉnh (calibrated noise) đảm bảo epsilon-delta privacy","Timestamp","Digital signature"],ans:1,exp:"DP-SGD (Differentially Private SGD): clip gradient norm (giới hạn ảnh hưởng 1 sample) rồi thêm Gaussian noise được calibrate theo epsilon-delta privacy budget. Đảm bảo không thể suy ra thông tin cụ thể từ gradient gửi lên."}],r0=[{id:"q31",cat:"Cloud",lv:"easy",q:"Docker Compose trong AIoT dùng để làm gì?",opts:["Lập trình vi điều khiển","Triển khai nhiều services (MQTT broker, database, dashboard) bằng 1 lệnh","Thiết kế PCB","Mô phỏng mạch điện"],ans:1,exp:"Docker Compose định nghĩa nhiều containers trong file YAML. Chạy docker-compose up -d để khởi động toàn bộ TIG Stack (Telegraf/Node-RED + InfluxDB + Grafana + Mosquitto) trong vài phút."},{id:"q32",cat:"Cloud",lv:"easy",q:"AWS IoT Core và ESP32 giao tiếp qua giao thức nào?",opts:["HTTP REST","MQTT over TLS (port 8883)","WebSocket không mã hóa","FTP"],ans:1,exp:"AWS IoT Core hỗ trợ MQTT over TLS (port 8883), MQTT over WebSocket (port 443), HTTP. ESP32 dùng WiFiClientSecure + PubSubClient với certificates từ AWS để authenticate."},{id:"q33",cat:"Cloud",lv:"medium",q:"NVS (Non-Volatile Storage) trên ESP32 dùng để làm gì?",opts:["Lưu code chương trình","Lưu key-value data tồn tại qua reboot (WiFi credentials, calibration)","RAM tốc độ cao","Cache của CPU"],ans:1,exp:"NVS là flash storage cấu trúc key-value. Dữ liệu tồn tại khi tắt nguồn. Dùng để lưu: WiFi SSID/password, sensor calibration, user preferences, device state."},{id:"q34",cat:"Cloud",lv:"medium",q:"Lợi ích của MQTT ACL (Access Control List) là gì?",opts:["Tăng tốc độ truyền","Phân quyền: device chỉ được publish/subscribe topic của mình","Nén dữ liệu","Backup data"],ans:1,exp:"MQTT ACL kiểm soát quyền theo user/client: ESP32-device1 chỉ được pub sensors/device1/# và sub devices/device1/cmd. Ngăn một device đọc data của device khác hoặc inject lệnh giả."},{id:"q35",cat:"Cloud",lv:"hard",q:"AWS IoT Device Shadow dùng để làm gì?",opts:["Backup firmware","Lưu trạng thái reported/desired của device — sync offline hoặc online","Mã hóa data","Load balancing"],ans:1,exp:'Device Shadow = JSON document với hai phần: "reported" (trạng thái thực tế device gửi lên) và "desired" (trạng thái app muốn). Khi device offline, desired được giữ lại và sync khi reconnect.'},{id:"q36",cat:"Xử lý tín hiệu",lv:"easy",q:"FFT (Fast Fourier Transform) chuyển đổi tín hiệu từ đâu sang đâu?",opts:["Analog sang Digital","Time-domain sang Frequency-domain","Spatial sang Temporal","Float sang Integer"],ans:1,exp:"FFT chuyển tín hiệu từ time-domain (biên độ theo thời gian) sang frequency-domain (biên độ theo tần số). Ứng dụng: phát hiện tần số rung động lỗi máy móc, trích xuất MFCC features cho speech AI."},{id:"q37",cat:"Xử lý tín hiệu",lv:"easy",q:"Kalman Filter dùng để làm gì trong AIoT?",opts:["Tăng tốc độ sampling","Lọc nhiễu và kết hợp nhiều nguồn sensor để ước lượng tốt hơn","Mã hóa dữ liệu","Giảm tiêu thụ điện"],ans:1,exp:"Kalman Filter là optimal estimator kết hợp model dự đoán (predict step) và sensor measurement (update step). Ví dụ: kết hợp accelerometer (noise nhiều) + gyroscope (drift nhiều) → angle estimate chính xác."},{id:"q38",cat:"Xử lý tín hiệu",lv:"medium",q:"MFCC (Mel-Frequency Cepstral Coefficients) dùng trong ứng dụng nào?",opts:["Đo nhiệt độ","Speech recognition, wake word detection, audio classification","Điều khiển motor","Đo khoảng cách"],ans:1,exp:"MFCC mô phỏng cách tai người xử lý âm thanh. Chuỗi: Pre-emphasis → Framing → FFT → Mel filterbank (log-spaced) → Log → DCT → 13 coefficients. Đây là feature chuẩn cho speech AI trên MCU."},{id:"q39",cat:"Xử lý tín hiệu",lv:"medium",q:"Complementary Filter kết hợp accelerometer và gyroscope như thế nào?",opts:["Lấy trung bình cộng đơn giản","Gyro cho short-term (ALPHA≈0.98), Accelerometer cho long-term correction (1-ALPHA≈0.02)","Chỉ dùng gyroscope","Chỉ dùng accelerometer"],ans:1,exp:"Complementary Filter: angle = α*(angle + gyro*dt) + (1-α)*accel_angle. α=0.98 → 98% tin vào gyro (chính xác ngắn hạn, drift dài hạn) và 2% correction từ accelerometer (drift-free dài hạn, noisy ngắn hạn)."},{id:"q40",cat:"Xử lý tín hiệu",lv:"hard",q:"Số samples N trong FFT phải thỏa điều kiện gì?",opts:["Số nguyên bất kỳ","Số chẵn","Lũy thừa của 2 (2^n) để dùng thuật toán Cooley-Tukey","Số nguyên tố"],ans:2,exp:"FFT Cooley-Tukey (phổ biến nhất) yêu cầu N = 2^n (128, 256, 512, 1024...). Nếu N không phải lũy thừa 2, phải dùng zero-padding. ArduinoFFT library yêu cầu N là power-of-2."},{id:"q41",cat:"Deep Learning",lv:"easy",q:"Transfer Learning là gì?",opts:["Chuyển model từ Python sang C++","Dùng lại weights pretrained (VD: ImageNet) và fine-tune cho task mới với dataset nhỏ","Copy model từ cloud về device","Chuyển đổi giữa các framework"],ans:1,exp:"Transfer Learning: dùng lại feature extractor đã train trên 14M ảnh ImageNet. Chỉ cần fine-tune classification head với 200-1000 ảnh của task bạn. Tiết kiệm 99% thời gian và data so với train from scratch."},{id:"q42",cat:"Deep Learning",lv:"easy",q:"MobileNetV3 Small phù hợp AIoT vì?",opts:["Accuracy cao nhất","Kích thước nhỏ (~2MB), tốc độ nhanh, thiết kế cho edge devices","Miễn phí license","Hỗ trợ tiếng Việt"],ans:1,exp:"MobileNetV3 Small: ~2.5MB, ~56ms inference trên Raspberry Pi 4. Dùng depthwise separable convolutions giảm FLOPs 8-9x. Accuracy ImageNet ~67.4% — đủ cho nhiều edge AI applications."},{id:"q43",cat:"Deep Learning",lv:"medium",q:"Data Augmentation giải quyết vấn đề gì trong Transfer Learning?",opts:["Tăng tốc training","Giải quyết overfitting khi dataset nhỏ bằng cách tạo variations giả","Giảm model size","Tăng accuracy tuyệt đối"],ans:1,exp:"Dataset nhỏ → model overfit (học thuộc thay vì học pattern). Augmentation tạo variations (flip, rotate, zoom, brightness, contrast) giúp model học được invariances. 200 ảnh + augment ~ hiệu quả của 2000 ảnh."},{id:"q44",cat:"Deep Learning",lv:"medium",q:"Trong Q-Learning, Epsilon (ε) kiểm soát điều gì?",opts:["Learning rate","Exploration vs Exploitation trade-off: ε lớn = khám phá nhiều, ε nhỏ = dùng knowledge hiện tại","Discount factor của future rewards","Kích thước Q-table"],ans:1,exp:"Epsilon-greedy policy: với xác suất ε chọn action ngẫu nhiên (explore), với xác suất 1-ε chọn action tốt nhất từ Q-table (exploit). Epsilon decay theo thời gian: ban đầu explore nhiều, sau khai thác knowledge đã học."},{id:"q45",cat:"Deep Learning",lv:"hard",q:"Attention mechanism trong Multi-modal Fusion hoạt động như thế nào?",opts:["Lấy trung bình tất cả features","Học weight động cho từng modality dựa trên context (self-attention scores)","Ghép nối (concatenate) tất cả features","Chỉ dùng modality có accuracy cao nhất"],ans:1,exp:"Attention: Q (query), K (key), V (value) matrices. Score = softmax(QK^T/√d_k)×V. Model học tự động: khi vibration normal, trust audio more; khi audio normal, trust vibration more. Dynamic weighting based on input."},{id:"q46",cat:"Kiến trúc",lv:"easy",q:"ESP-NOW khác WiFi MQTT ở điểm nào quan trọng?",opts:["Tốc độ nhanh hơn","P2P trực tiếp giữa các ESP32 không cần router/broker — latency <10ms, offline OK","Range xa hơn","Bảo mật tốt hơn"],ans:1,exp:"ESP-NOW: IEEE 802.11 dataframe trực tiếp ESP32-to-ESP32, không cần WiFi AP hay MQTT broker. Latency <10ms, hoạt động khi không có WiFi, tiêu thụ điện thấp. Phù hợp: sensor mesh network, robot swarm."},{id:"q47",cat:"Kiến trúc",lv:"easy",q:"SPIFFS trên ESP32 dùng để làm gì?",opts:["Tăng tốc RAM","Lưu files (HTML, certificates, JSON config, TFLite model) trong Flash partition","Giao thức mạng","Loại RAM nhanh"],ans:1,exp:"SPIFFS (SPI Flash File System) tạo filesystem trong Flash partition của ESP32. Dùng để lưu: HTML/CSS web server, certificates cho TLS, config JSON, TFLite model file. Mount với SPIFFS.begin()."},{id:"q48",cat:"Kiến trúc",lv:"medium",q:"LWT (Last Will Testament) trong MQTT dùng để làm gì?",opts:["Mã hóa messages","Broker gửi message tự động khi client disconnect đột ngột để báo offline","Backup toàn bộ topics","Xác thực user"],ans:1,exp:'LWT: khi connect, client đăng ký 1 topic + message sẽ được broker publish nếu client disconnect bất ngờ (mất điện, crash). Dùng cho: thiết bị gửi "status: offline" khi mất kết nối — không cần heartbeat polling.'},{id:"q49",cat:"Kiến trúc",lv:"medium",q:"OEE (Overall Equipment Effectiveness) đo lường gì trong Industrial IoT?",opts:["Nhiệt độ thiết bị","Availability × Performance × Quality — hiệu quả tổng thể dây chuyền sản xuất","Lượng điện tiêu thụ","Tốc độ mạng IoT"],ans:1,exp:"OEE = Availability × Performance × Quality. Availability: thiết bị sẵn sàng bao nhiêu % (downtime). Performance: chạy đúng tốc độ mục tiêu? Quality: % sản phẩm đạt chuẩn. OEE world-class = 85%."},{id:"q50",cat:"Kiến trúc",lv:"hard",q:"Trong hệ thống AIoT production, Watchdog Timer giải quyết vấn đề gì?",opts:["Đồng bộ thời gian","Tự động reset MCU nếu code bị treo/deadlock, đảm bảo uptime cao","Tăng tốc WiFi reconnect","Mã hóa firmware"],ans:1,exp:"Watchdog Timer: hardware timer reset MCU nếu code không gọi esp_task_wdt_reset() trong N giây. Giải quyết: deadlock, infinite loop, stack overflow, WiFi hang. Production device cần WDT để self-recover không cần can thiệp."},{id:"q51",cat:"Ứng dụng",lv:"easy",q:"Smart Agriculture (nông nghiệp thông minh) với AIoT tiết kiệm nước như thế nào?",opts:["Tắt nước hoàn toàn","AI kết hợp soil moisture sensor + weather forecast không tưới khi sắp mưa, chỉ tưới khi cần","Dùng ống nước nhỏ hơn","Tưới ban đêm"],ans:1,exp:"AIoT Smart Irrigation: soil sensor đo độ ẩm thực tế + OpenWeatherMap API 48h forecast. Không tưới trước 2 giờ có mưa. Tưới đúng lượng cần. Thực tế: tiết kiệm 40-60% nước so với tưới cố định theo lịch."},{id:"q52",cat:"Ứng dụng",lv:"easy",q:"Ứng dụng AIoT nào phù hợp nhất cho sinh viên Đà Lạt nghiên cứu?",opts:["Autonomous driving car","Smart greenhouse hoa lan/rau sạch — phù hợp địa phương, dataset dễ thu thập","Satellite communication","Quantum computing"],ans:1,exp:"Đà Lạt có lợi thế: nông nghiệp hoa lan, rau sạch, cà phê; khí hậu đặc biệt. Smart Greenhouse AIoT: dễ thu thập data thực tế, có thể pilot test với nông dân địa phương, giá trị kinh tế rõ ràng."},{id:"q53",cat:"Ứng dụng",lv:"medium",q:"Digital Twin trong công nghiệp là gì?",opts:["Bản sao vật lý của máy móc","Mô hình số sync realtime với thiết bị thực — dùng để mô phỏng, dự báo, tối ưu hóa","Phần mềm tạo tài liệu","Hệ thống backup dữ liệu"],ans:1,exp:'Digital Twin = bản sao số của asset vật lý, sync realtime từ IoT sensors. Cho phép: mô phỏng "what-if" (thay đổi tham số và xem kết quả), phát hiện anomaly, dự báo maintenance. Thị trường $73B vào 2027.'},{id:"q54",cat:"Ứng dụng",lv:"medium",q:"BEMS (Building Energy Management System) với AIoT giảm chi phí điện bằng cách nào?",opts:["Tắt tất cả thiết bị ban đêm","LSTM forecast nhu cầu điện 24h + Demand Response tắt thiết bị không cần thiết giờ peak tariff","Dùng đèn LED thay thường","Lắp thêm pin mặt trời"],ans:1,exp:"BEMS AIoT: PZEM energy meter thu thập data 20 phòng → LSTM dự báo peak demand → Demand Response tự động tắt thiết bị phụ (máy in, máy lạnh phòng trống) khi giá điện cao. Tiết kiệm 20-30% hóa đơn."},{id:"q55",cat:"Ứng dụng",lv:"hard",q:"Hệ thống Predictive Maintenance AIoT phát hiện hỏng hóc trước bao lâu?",opts:["1 phút","1 giờ","3-30 ngày — đủ để lên kế hoạch bảo trì, tránh unplanned downtime","1 năm"],ans:2,exp:"Predictive Maintenance tốt phát hiện được 3-30 ngày trước khi hỏng. Bearing fault: 2-4 tuần. Motor winding degradation: 1-2 tháng. Đủ thời gian đặt phụ kiện, lên lịch ngừng máy có kế hoạch. Giảm downtime 60%, chi phí maintenance 35%."},{id:"q56",cat:"Ứng dụng",lv:"hard",q:"Trong hệ thống chấm công nhận dạng khuôn mặt, Privacy-by-Design nghĩa là gì?",opts:["Mã hóa file ảnh","Xử lý tại thiết bị (on-device inference), không lưu ảnh, chỉ lưu face embeddings — compliant với GDPR/PDPA","Xóa ảnh sau 30 ngày","Dùng password bảo vệ database"],ans:1,exp:"Privacy-by-Design: ảnh khuôn mặt được inference ngay tại camera (ESP32-CAM), chỉ lưu embedding vector (128 floats, không thể reconstruct ảnh). Không vi phạm quyền riêng tư. Compliant với GDPR Article 25. PDPA Việt Nam sắp có hiệu lực."},{id:"q57",cat:"Phần cứng",lv:"medium",q:"PZEM-004T là gì và dùng để làm gì?",opts:["Cảm biến nhiệt độ cao","Đo lường điện AC: voltage, current, power factor, energy (kWh) — kết nối UART","Module WiFi cho Arduino","Bộ nhớ Flash ngoài"],ans:1,exp:"PZEM-004T: non-invasive AC power meter. Đo: voltage (80-260V AC), current (0-100A với CT clamp), power (W), power factor, frequency, energy (kWh). Giao tiếp UART (Modbus RTU). Dùng trong BEMS, smart meter."},{id:"q58",cat:"Phần cứng",lv:"medium",q:"MAX30105 (MAX30102) cảm biến đo được gì?",opts:["CO2 và VOC","Heart rate (BPM) và SpO2 (%) qua photoplethysmography (PPG) — không cần kim tiêm","Gia tốc và con quay","Áp suất không khí"],ans:1,exp:"MAX30105 là PPG sensor: phát LED đỏ + IR, đo ánh sáng phản chiếu từ mao mạch. Mỗi nhịp tim → peak trong tín hiệu. SpO2: tỷ lệ hấp thụ đỏ/IR. Dùng trong wearable health monitoring, pulse oximeter."},{id:"q59",cat:"Phần cứng",lv:"hard",q:"ESP32-S3 có lợi thế gì so với ESP32 gốc cho AI inference?",opts:["Giá rẻ hơn","Xtensa LX7 + AI/vector extensions (SIMD) tăng tốc TFLite 4.5x, hỗ trợ USB OTG, camera interface tốt hơn","WiFi 5GHz","4 lõi CPU"],ans:1,exp:"ESP32-S3: Xtensa LX7 @240MHz + vector instruction extensions (SIMD cho operations như dot product, multiply-accumulate). Espressif đo được 4.5x faster TFLite inference so với ESP32. Thêm USB OTG native, 45 GPIO, hỗ trợ camera trực tiếp."},{id:"q60",cat:"Phần cứng",lv:"hard",q:"JTAG debugging trên ESP32 cho phép làm gì mà Serial.print() không làm được?",opts:["In ra màn hình đẹp hơn","Breakpoint, step-through code, xem/thay đổi memory/registers realtime mà không cần thêm code","Tăng tốc upload firmware","Đọc sensor từ xa"],ans:1,exp:"JTAG (Joint Test Action Group): hardware debugging interface. Với OpenOCD + GDB: đặt breakpoint, step line-by-line, xem stack trace khi crash, đọc/ghi bất kỳ memory address. Không phải thêm Serial.print() và re-flash. Cần thiết cho production debugging."}],o0=[{id:"e1",cat:"Cơ bản",diff:"easy",time:"30 phút",hw:"Arduino/ESP32 + 3 LED",title:"Đèn giao thông State Machine",desc:"Mô phỏng đèn giao thông bằng 3 LED (đỏ, vàng, xanh). Đỏ 5s, vàng 1s, xanh 4s. Thêm nút khẩn cấp (tất cả đỏ). Dùng State Machine — không dùng delay().",steps:["Kết nối 3 LED với resistor 220Ω vào GPIO 2, 4, 5","Định nghĩa enum TrafficState {RED, YELLOW, GREEN, EMERGENCY}","Implement state machine với switch-case và millis()","Thêm interrupt cho nút khẩn cấp (GPIO 15, INPUT_PULLUP)","Log mỗi state transition qua Serial với timestamp"],hint:"Tách logic timing (millis) khỏi logic state để dễ mở rộng.",expected:"LED chuyển đúng thứ tự, EMERGENCY mode ngay khi nhấn nút, không dùng delay()"},{id:"e2",cat:"Cơ bản",diff:"easy",time:"45 phút",hw:"ESP32 + Potentiometer + LED",title:"Dimmer LED thông minh",desc:"Đọc giá trị potentiometer (ADC), điều chỉnh độ sáng LED bằng PWM. Thêm Serial plotter để xem biểu đồ realtime. Implement hysteresis để tránh flicker.",steps:["Kết nối potentiometer vào GPIO34 (ADC1)","Đọc ADC và map 0–4095 → 0–255","Dùng ledcWrite() cho PWM thay analogWrite()","Thêm rolling average 10 mẫu để ổn định","In ra Serial: raw ADC, voltage (V), brightness (%)"],hint:"Rolling average: lưu mảng 10 giá trị, tính trung bình mỗi lần đọc mới.",expected:"LED mờ dần/sáng dần khi xoay biến trở, Serial Plotter hiển thị đường cong mượt"},{id:"e3",cat:"Cơ bản",diff:"easy",time:"60 phút",hw:"ESP32 + DHT22",title:"Data Logger nhiệt độ",desc:"Đọc DHT22 mỗi 10 giây, lưu 24 mẫu vào circular buffer trong RAM. In bảng thống kê (min, max, mean, trend) qua Serial. Cảnh báo khi vượt ngưỡng tùy chỉnh.",steps:["Setup DHT22 với thư viện Adafruit","Implement circular buffer 24 phần tử (struct với index)","Tính min/max/mean/stddev từ buffer","Detect trend: đang tăng hay giảm (linear regression đơn giản)","Hiển thị bảng dữ liệu đẹp trên Serial với formatting"],hint:"Circular buffer: index = (index + 1) % BUFFER_SIZE.",expected:"Sau 4 phút có đủ 24 mẫu, bảng thống kê chính xác, trend detection hoạt động"},{id:"e4",cat:"Trung cấp",diff:"medium",time:"90 phút",hw:"ESP32",title:"MQTT Smart Switch với Auto-discovery",desc:"ESP32 làm smart switch MQTT: nhận lệnh bật/tắt relay, publish trạng thái + uptime + RSSI. Thêm Home Assistant MQTT Discovery để tự động thêm vào dashboard mà không cần cấu hình thủ công.",steps:["Setup WiFiManager + PubSubClient","Publish discovery payload JSON lên homeassistant/switch/esp32/config","Subscribe homeassistant/switch/esp32/set","Publish state lên homeassistant/switch/esp32/state","Implement LWT (Last Will Testament) cho offline detection"],hint:'HA Discovery JSON: {"name":"ESP32 Switch","cmd_t":"...","stat_t":"...","uniq_id":"..."}',expected:"Switch tự động xuất hiện trong Home Assistant, điều khiển ON/OFF từ dashboard"},{id:"e5",cat:"Trung cấp",diff:"medium",time:"120 phút",hw:"ESP32 + BME280 + OLED",title:"Weather Station với REST API",desc:"Station đo 4 thông số (temp, hum, pressure, altitude). OLED hiển thị các màn hình xoay vòng. Web server cung cấp REST API JSON. Lưu lịch sử 1 giờ trong SPIFFS.",steps:["Setup BME280 (I2C) + SSD1306 OLED 128x64","Implement màn hình xoay mỗi 3 giây (state machine)","Web server /api/current, /api/history, /api/stats","Lưu data vào SPIFFS mỗi 60s (JSON array)","Bootstrap CSS web dashboard tại /"],hint:'SPIFFS: SPIFFS.begin(true), File f = SPIFFS.open("/data.json", "w")',expected:"OLED hiển thị 4 màn hình, API trả JSON, web dashboard vẽ đồ thị"},{id:"e6",cat:"Trung cấp",diff:"medium",time:"120 phút",hw:"2x ESP32",title:"ESP-NOW Mesh Sensor Network",desc:"2 ESP32 giao tiếp trực tiếp ESP-NOW (không cần router). Node 1 (sensor): gửi data mỗi 5s. Node 2 (gateway): nhận data, forward lên MQTT. Implement ACK và retry logic.",steps:["Setup ESP-NOW trên cả 2 board","Định nghĩa struct data giao tiếp","Node 1: read sensor, pack struct, esp_now_send()","Node 2: onDataReceive callback, forward MQTT","Thêm sequence number + ACK để detect lost packets"],hint:"esp_now_send() không block. Dùng callback onDataSent kiểm tra delivery status.",expected:"Node 1 gửi data reliably, Node 2 forward lên MQTT với delivery confirmation"},{id:"e7",cat:"Trung cấp",diff:"medium",time:"150 phút",hw:"ESP32 + LoRa SX1276",title:"LoRa GPS Tracker",desc:"ESP32 + GPS NEO-M8N + LoRa: gửi vị trí GPS mỗi 30s qua LoRa tầm xa. Gateway nhận và forward lên MQTT. Web dashboard hiển thị track trên OpenStreetMap.",steps:["Setup GPS NEO-M8N (UART1) với TinyGPS++","Setup LoRa SX1276 (SPI)","Packet format: ID + lat + lng + alt + speed + battery","Gateway: nhận packet, parse, publish MQTT JSON","Web: Leaflet.js map với polyline track history"],hint:"GPS warm-up 1-2 phút lần đầu. HDOP < 2.0 là vị trí chấp nhận được.",expected:"Track GPS hiển thị trên map web, độ chính xác <5m ngoài trời"},{id:"e8",cat:"TinyML",diff:"hard",time:"180 phút",hw:"ESP32 + INMP441 mic",title:"Wake Word Detection ngoại tuyến",desc:'Dùng Edge Impulse train model nhận dạng 1 wake word tùy chọn (VD: "xin chào", "help", "alarm"). Deploy trên ESP32 với microphone INMP441. Accuracy >85%, latency <200ms.',steps:['Đăng ký Edge Impulse, tạo project "Wake Word"',"Thu thập 80+ mẫu wake word + 80 background noise","Configure impulse: 1s window, MFCC block, NN block","Train và verify accuracy >85% trên test set","Export Arduino library, test realtime"],hint:"Thu thập data đa dạng: giọng nam/nữ, khoảng cách khác nhau, background noise.",expected:"Wake word nhận dạng trong <200ms, false positive < 1 lần/phút"},{id:"e9",cat:"TinyML",diff:"hard",time:"180 phút",hw:"ESP32 + MPU6050",title:"Fall Detection cho người cao tuổi",desc:"MPU6050 accelerometer + ML phát hiện ngã. Train 3 class: normal_walk, sit_stand, fall. Deploy TFLite. Gửi Telegram alert khi phát hiện ngã với GPS location (nếu có).",steps:["Thu thập data 3 activities (150 mẫu/class)","Feature extraction: gravity separation, jerk, impact peak","Train CNN 1D trên Edge Impulse","Deploy TFLite Micro trên ESP32","Alert: Telegram bot + mqtt + buzzer"],hint:"Fall signature: acceleration spike >3g rồi sudden giảm (lying position).",expected:"Phát hiện ngã trong 2s, false alarm <5%, Telegram alert <10s"},{id:"e10",cat:"TinyML",diff:"hard",time:"240 phút",hw:"ESP32-CAM + MQTT",title:"Smart Doorbell với Face Recognition",desc:"ESP32-CAM: chụp ảnh khi phát hiện chuyển động (PIR), nhận dạng khuôn mặt đã đăng ký, gửi thông báo Telegram với ảnh. Tự động ghi hình vào SD card.",steps:["Setup ESP32-CAM + PIR sensor","Enroll khuôn mặt: chụp 5 ảnh/người, lưu vào Flash","Face detection + recognition khi PIR trigger","Upload ảnh lên Telegram Bot với caption","Lưu ảnh vào SD card với timestamp filename"],hint:"MTMN face detection tích hợp sẵn trong esp-face library. Enroll dùng face_recognition_enrollment().",expected:"Nhận ra người đã đăng ký trong <3s, gửi Telegram trong <10s"},{id:"e11",cat:"Hệ thống",diff:"hard",time:"240 phút",hw:"Raspberry Pi + nhiều ESP32",title:"Smart Home Hub hoàn chỉnh",desc:"Raspberry Pi làm hub trung tâm: Mosquitto broker + Node-RED + InfluxDB + Grafana. 3 ESP32 node: sensor, switch, camera. Dashboard web responsive. Automation rules. Voice command.",steps:["Cài TIG stack + Node-RED trên RPi","ESP32 #1: DHT22 + soil sensor, pub mỗi 30s","ESP32 #2: 4-channel relay điều khiển từ dashboard","ESP32-CAM: motion detection + MJPEG stream","Node-RED: automation rules + Telegram alerts"],hint:"Dùng Docker Compose để cài tất cả services trên RPi một lệnh.",expected:"Dashboard Grafana realtime, điều khiển relay từ điện thoại, automation hoạt động"},{id:"e12",cat:"Hệ thống",diff:"hard",time:"300 phút",hw:"ESP32 multi-node + cloud",title:"Industrial Vibration Monitor",desc:"Mạng 4 ESP32 + accelerometer MPU6050 gắn vào 4 thiết bị công nghiệp. Thu thập FFT data, detect anomaly bằng Autoencoder TFLite. Alert khi phát hiện bất thường. Log dữ liệu 30 ngày.",steps:['Thu thập 48 giờ vibration data "normal" từ 4 máy',"Train Autoencoder riêng cho từng máy (on PC)","Convert và deploy TFLite trên 4 ESP32","MQTT hierarchy: factory/machine[1-4]/vibration","Grafana dashboard: FFT spectrum + anomaly score + alert timeline"],hint:"Threshold = mean_error + 3*std_error trên validation set.",expected:"Detect anomaly (lắc cố ý) trong <5s, false alarm <1 lần/ngày"},{id:"e13",cat:"Khởi nghiệp",diff:"medium",time:"120 phút",hw:"Máy tính",title:"Business Plan AIoT Startup",desc:"Xây dựng Business Plan cho 1 ý tưởng AIoT startup. Phân tích thị trường, mô hình kinh doanh, MVP, financial projection 3 năm, pitch deck 10 slides.",steps:["Chọn 1 vấn đề thực tế tại địa phương để giải quyết bằng AIoT","Tìm hiểu thị trường: quy mô, đối thủ, TAM/SAM/SOM","Phác thảo MVP: hardware cost + monthly subscription","Dự báo doanh thu: 50/200/1000 customers năm 1/2/3","Tạo pitch deck (Canva/Google Slides) đủ 10 mục chuẩn"],hint:"Tập trung vào 1 vấn đề cụ thể, 1 segment khách hàng. Đừng quá rộng.",expected:"Business plan hoàn chỉnh, pitch deck chuyên nghiệp, có thể trình bày 5 phút"},{id:"e14",cat:"Khởi nghiệp",diff:"hard",time:"300 phút",hw:"ESP32 + sensors",title:"MVP Smart Farm cho 1 sào đất",desc:"Build MVP thực tế: monitor 1 sào đất với 3 soil moisture sensor, 1 weather station, điều khiển 2 bơm tưới tự động theo AI. Chụp ảnh cây hàng ngày. Dashboard cho nông dân.",steps:["Hardware: 3 capacitive soil sensor + BME280 + relay 2 bơm","AI watering rule: soil<40% AND hour 6-8 AM → water 30s","ESP32-CAM: chụp ảnh cây mỗi 8 giờ, upload MQTT","Mobile-first dashboard: nhiệt độ, độ ẩm đất, lịch sử tưới","Tính ROI: tiết kiệm nước, tiết kiệm công tưới"],hint:"Test ít nhất 1 tuần liên tục để validate automation logic.",expected:"Hệ thống chạy tự động 1 tuần, so sánh lượng nước trước/sau, ảnh chronicle cây lớn"}],c0=[{id:"e15",cat:"Cơ bản",diff:"easy",time:"45 phút",hw:"ESP32 + Potentiometer + Buzzer",title:"PWM Tone Generator",desc:'Tạo nhạc chuông đơn giản bằng buzzer passive + PWM. Thực hiện giai điệu "Happy Birthday" (8 nốt nhạc). Hiển thị nốt đang phát trên Serial.',steps:["Kết nối buzzer passive vào GPIO25 (DAC channel)","Định nghĩa mảng tần số các nốt: C4=262Hz, D4=294, E4=330, F4=349, G4=392, A4=440, B4=494, C5=523","Dùng ledcWriteTone() để phát từng nốt","Định nghĩa mảng melody + duration cho Happy Birthday","Thêm volume control bằng potentiometer"],hint:"ledcSetup(0, freq, 8); ledcWrite(0, 128); để phát nốt. ledcWrite(0,0) để ngừng.",expected:"Phát được giai điệu nhận ra được, volume thay đổi theo potentiometer"},{id:"e16",cat:"Cơ bản",diff:"easy",time:"60 phút",hw:"ESP32 + 4-digit 7-segment",title:"Đồng hồ đếm ngược (countdown timer)",desc:"Đồng hồ đếm ngược dùng màn hình 7-segment 4 chữ số (TM1637). Nút Start/Stop, nút Reset, nút tăng/giảm thời gian. Buzzer kêu khi về 0.",steps:["Cài thư viện TM1637 → kết nối CLK=22, DIO=21","Implement State Machine: IDLE, RUNNING, PAUSED, DONE","Nút Start/Stop: GPIO14, Reset: GPIO27, +1min: GPIO26","Non-blocking countdown dùng millis()","Buzzer 3 lần khi countdown đến 0"],hint:"TM1637.display(minute, second) format phút:giây.",expected:"Đếm ngược đúng, nút phản hồi chính xác, buzzer khi xong"},{id:"e17",cat:"Cơ bản",diff:"easy",time:"45 phút",hw:"ESP32 + Rain Sensor + LED",title:"Cảm biến mưa tự động đóng cửa sổ",desc:"Mô phỏng hệ thống đóng cửa sổ tự động khi trời mưa. Rain sensor (analog) → threshold detection → servo motor đóng/mở → LED indicator + buzzer alert.",steps:["Kết nối rain sensor: AO→GPIO34, DO→GPIO35","Đọc analog giá trị độ ẩm mưa (0=ướt, 4095=khô)","Servo motor mô phỏng cửa sổ: 0°=đóng, 90°=mở","Hysteresis: mở khi dry>80%, đóng khi wet<40%","LED xanh=mở, đỏ=đóng; Telegram alert khi trời mưa"],hint:"Hysteresis tránh servo đóng mở liên tục khi ở biên threshold.",expected:"Servo tự động đóng khi đổ nước vào sensor, mở khi khô"},{id:"e18",cat:"Trung cấp",diff:"medium",time:"90 phút",hw:"ESP32 + RFID RC522",title:"Hệ thống kiểm soát ra vào bằng RFID",desc:"RFID RC522 đọc thẻ/tag → kiểm tra trong whitelist → mở relay (cửa) nếu được phép → log vào SPIFFS → web admin xem lịch sử, thêm/xóa thẻ.",steps:["Kết nối RC522 (SPI): MOSI=23, MISO=19, SCK=18, SS=5, RST=27","Cài thư viện MFRC522, đọc UID thẻ dạng hex string","Whitelist trong SPIFFS /whitelist.json: [{uid,name,role}]","Relay GPIO26 mở 3 giây khi thẻ hợp lệ","Web API: GET /api/logs, POST /api/whitelist, DELETE /api/whitelist/:uid"],hint:"UID thẻ RFID là unique — dùng làm key trong JSON whitelist.",expected:"Thẻ hợp lệ → relay mở + log; thẻ không hợp lệ → từ chối + log"},{id:"e19",cat:"Trung cấp",diff:"medium",time:"120 phút",hw:"ESP32 + SD Card",title:"Offline Data Logger với SD Card",desc:"Logger ghi mọi sensor data vào SD card khi không có WiFi. Khi có WiFi, tự động sync data lên server. Implement circular buffer trên SD tránh đầy dung lượng.",steps:["Kết nối SD card (SPI): MOSI=23, MISO=19, SCK=18, CS=5","Tạo file /data/YYYYMMDD.csv mỗi ngày","Ghi: timestamp,temp,hum,pressure mỗi 30s","Khi WiFi available: read file + POST lên server + delete file","Circular log: xóa file cũ nhất khi SD > 80% full"],hint:"SD.begin(5) với CS=GPIO5. Dùng RTClib hoặc NTP để có timestamp chính xác.",expected:"Ghi data offline, sync tự động khi có WiFi, không bao giờ đầy SD"},{id:"e20",cat:"Trung cấp",diff:"medium",time:"150 phút",hw:"ESP32 + 4-channel Relay + PIR",title:"Home Automation với Schedule & Scene",desc:"4 relay điều khiển đèn/quạt với: web dashboard bật/tắt manual, schedule theo giờ, scene (all on/all off/night mode), PIR trigger. Lưu schedule vào SPIFFS.",steps:["4 relay active-LOW vào GPIO26,27,14,12","Web dashboard 4 toggle switches + schedule form","Schedule JSON: [{device,hour,minute,action}]","PIR trigger: bật đèn 5 phút khi có chuyển động ban đêm","Scene buttons: Morning (đèn phòng khách on), Night (tắt hết), Movie (đèn mờ)"],hint:"Dùng NTP để so sánh thời gian với schedule mỗi phút.",expected:"Dashboard điều khiển realtime, schedule chạy đúng giờ, scene hoạt động"},{id:"e21",cat:"TinyML",diff:"hard",time:"240 phút",hw:"ESP32 + Camera + MQTT",title:"Object Counter tự động cho cửa hàng",desc:"ESP32-CAM đếm số người vào/ra cửa hàng (object counting với line crossing). MQTT publish count realtime. Dashboard heatmap số khách theo giờ.",steps:["ESP32-CAM setup với QVGA resolution","Background subtraction phát hiện movement","Virtual line: object cross từ trái sang phải = IN, ngược lại = OUT",'MQTT: publish {"in":5,"out":3,"current":2} mỗi lần crossing',"Grafana dashboard: khách hiện tại, tổng vào/ra, biểu đồ theo giờ"],hint:"Background subtraction: absDiff(current_frame, bg_frame) > threshold.",expected:"Đếm chính xác >85% trong điều kiện ánh sáng tốt"},{id:"e22",cat:"TinyML",diff:"hard",time:"210 phút",hw:"ESP32 + Microphone array",title:"Sound Event Detection (tiếng chó sủa, còi xe, v.v.)",desc:"Train model phân loại 5 âm thanh: chó sủa, còi xe, kính vỡ, khóc trẻ em, tiếng nổ. Deploy ESP32 với INMP441 microphone. Gửi alert Telegram khi phát hiện nguy hiểm.",steps:["Thu thập 60 mẫu × 5 class (nguồn: Freesound.org hoặc thu trực tiếp)","Edge Impulse: MFE block (Mel filterbank, không MFCC) cho sound events","CNN: Conv1D → MaxPool → Conv1D → Dense → 5 classes","Deploy + test realtime với INMP441","Alert: Telegram khi glass_break, baby_cry hoặc explosion detected"],hint:"MFE tốt hơn MFCC cho sound events (không phải speech). 1s window, 44Hz stride.",expected:"Accuracy >80% trên 5 classes, false alarm < 2 lần/phút trong môi trường im lặng"},{id:"e23",cat:"Hệ thống",diff:"hard",time:"300 phút",hw:"Multiple ESP32 + Raspberry Pi",title:"Fleet Management cho IoT Devices",desc:"Quản lý fleet 5+ ESP32 nodes: OTA update đồng loạt, monitor health (heap, RSSI, uptime), remote reboot, config push từ central server. Dashboard Grafana.",steps:["Central server: Node.js + MQTT + InfluxDB","ESP32 agents: heartbeat mỗi 30s (heap, RSSI, uptime, firmware version)",'OTA trigger: pub topic "fleet/update" → tất cả check và download firmware mới','Config push: pub "fleet/config" JSON → apply ngay không cần reboot',"Grafana: fleet overview panel, alert khi node offline > 5 phút"],hint:'OTA trigger qua MQTT: subscribe "devices/+/ota", parse firmware URL từ payload.',expected:"OTA cập nhật tất cả nodes trong <5 phút, fleet dashboard realtime"},{id:"e24",cat:"Hệ thống",diff:"hard",time:"360 phút",hw:"ESP32 + Cloud",title:"Edge-Cloud Hybrid AI Pipeline",desc:"ESP32 xử lý AI đơn giản (classification) tại edge. Kết quả bất thường → gửi raw data lên Cloud (AWS Lambda) để phân tích chuyên sâu hơn. Giảm bandwidth 95%.",steps:["ESP32: TFLite Micro classifier — normal/abnormal (2 class)","Nếu normal: chỉ publish aggregated stats mỗi 5 phút (bandwidth thấp)","Nếu abnormal: gửi raw window data lên AWS S3 via HTTPS","AWS Lambda trigger: nhận S3 event → run full model → store result DynamoDB","Dashboard: view edge decisions vs cloud reanalysis accuracy"],hint:"S3 presigned URL: ESP32 request URL từ Lambda, dùng HTTP PUT upload thẳng lên S3.",expected:"Bandwidth giảm >90%, cloud reanalysis accuracy >95%"},{id:"e25",cat:"Khởi nghiệp",diff:"hard",time:"480 phút",hw:"ESP32 + Custom PCB",title:"Thiết kế PCB cho sản phẩm AIoT",desc:"Từ prototype breadboard → thiết kế PCB thực tế với KiCad. ESP32-WROOM tích hợp cảm biến, nguồn pin LiPo, charging circuit, mạch bảo vệ. Đặt sản xuất tại JLCPCB.",steps:["Schematic: ESP32-WROOM + DHT22 + BMP280 + LiPo + TP4056 charger + AMS1117 3.3V","Symbol và footprint cho tất cả components","PCB layout 2-layer: route theo best practices (analog/digital separation, decoupling caps)","Design rule check: trace width, clearance, courtyard","Export Gerber → order JLCPCB (~5$ cho 5 PCBs, 7 ngày)"],hint:"Decoupling: 100nF ceramic cap ngay cạnh mỗi VCC pin của MCU.",expected:"PCB design hoàn chỉnh, Gerber file sẵn sàng để order"},{id:"e26",cat:"Khởi nghiệp",diff:"hard",time:"240 phút",hw:"Máy tính",title:"Technical Due Diligence cho AIoT Startup",desc:"Đóng vai CTO đánh giá technical feasibility của 3 ý tưởng startup AIoT. Phân tích: tech stack, BOM cost, manufacturing risk, IP landscape, competitive moat, time-to-market.",steps:["Ý tưởng 1: Smart waste bin (ultrasonic + LoRa + AI route optimization)","Ý tưởng 2: Wearable fall detection (ESP32-S3 + IMU + BLE + cloud AI)","Ý tưởng 3: Industrial air quality monitor (multi-sensor + FPGA + 5G)","Technical matrix: feasibility score, risk level, estimated BOM, moat","Recommendation report: chọn 1 ý tưởng với roadmap 12 tháng"],hint:"BOM (Bill of Materials): liệt kê từng component với giá quantity 1000 units.",expected:"Technical Due Diligence report 5-10 trang, có thể defend trước mentor"}],Gi=[...o0,...c0],s0=[{id:1,color:"#00e676",level:"easy",dur:"4–6 tuần",team:"1–2 SV",title:"Hệ thống giám sát chất lượng không khí trong nhà",sub:"Indoor Air Quality Monitor",overview:"Monitor CO2, TVOC, bụi PM2.5, nhiệt độ, độ ẩm trong phòng học/văn phòng. So sánh với tiêu chuẩn WHO và cảnh báo khi vượt ngưỡng.",scope:["ESP32 + SGP30 + BME280 + PMS5003 laser dust sensor","OLED hiển thị AQI realtime với color coding","MQTT + Node-RED + Grafana dashboard 30 ngày","Telegram alert tự động","Báo cáo tuần tự động gửi email"],deploy:["T1–2: Hardware setup, I2C scanner, calibration từng sensor","T3–4: MQTT pipeline + Node-RED flows","T5–6: Grafana dashboard + alert system + báo cáo"],result:["AQI realtime cập nhật mỗi phút","Alert khi CO2 > 1000ppm hoặc PM2.5 > 25µg/m³","Dashboard lịch sử 30 ngày, export CSV"],tech:["ESP32","SGP30","Node-RED","InfluxDB","Grafana","Telegram Bot"]},{id:2,color:"#00d4ff",level:"medium",dur:"6–8 tuần",team:"2–3 SV",title:"Smart Greenhouse — Nhà kính thông minh",sub:"AI-powered Greenhouse Automation",overview:"Tự động hóa nhà kính: kiểm soát nhiệt độ, độ ẩm, ánh sáng, tưới nước với AI rule-based. Theo dõi sinh trưởng cây bằng camera. App mobile điều khiển từ xa.",scope:["5 loại cảm biến: soil, BME280, BH1750, CO2, rain","3 actuator: quạt, grow light, bơm nước","AI rule engine: threshold adaptive theo mùa vụ","ESP32-CAM chụp ảnh cây mỗi 8 giờ (time-lapse)","Flutter app iOS/Android điều khiển realtime"],deploy:["T1–2: Hardware + calibration","T3–4: Control logic + AI rules","T5–6: Camera + timelapse","T7–8: App mobile + testing"],result:["Tiết kiệm nước 40% so với tưới thủ công","Năng suất tăng 25% (so sánh đối chứng)","Time-lapse 30 ngày sinh trưởng cây"],tech:["ESP32","FreeRTOS","ESP32-CAM","ThingSpeak","Flutter","Firebase"]},{id:3,color:"#00d4ff",level:"medium",dur:"6–8 tuần",team:"2–3 SV",title:"Hệ thống nhận dạng cảm xúc học sinh",sub:"Student Emotion Recognition for Smart Classroom",overview:"Camera + AI nhận dạng 7 cảm xúc cơ bản của học sinh trong lớp học. Thống kê engagement để GV điều chỉnh phương pháp. Privacy-first: không lưu ảnh.",scope:["ESP32-CAM + FaceNet lightweight model","TFLite 7-class emotion classifier (happy, sad, angry, surprise, fear, disgust, neutral)","Privacy by design: chỉ lưu aggregated stats, không lưu ảnh","Dashboard thống kê theo buổi học (engagement timeline)","Báo cáo tự động PDF gửi GV sau mỗi tiết"],deploy:["T1–2: Dataset + model training trên Colab","T3–4: Deploy TFLite ESP32-CAM","T5–6: Privacy layer + dashboard","T7–8: Pilot test 2 lớp + evaluation"],result:["Accuracy >80% trên 7 emotion classes","Privacy: 0 ảnh được lưu","Báo cáo engagement tự động"],tech:["ESP32-CAM","TFLite","Edge Impulse","Python dashboard","Privacy by design"]},{id:4,color:"#f59e0b",level:"hard",dur:"8–10 tuần",team:"2–4 SV",title:"AIoT cho phát hiện lỗi PCB tự động",sub:"PCB Defect Detection with Computer Vision",overview:"Camera công nghiệp + AI CNN phát hiện lỗi hàn thiếc, thiếu linh kiện, linh kiện sai trên PCB sản xuất. Real-time decision <1s. Độ chính xác >95%.",scope:["Raspberry Pi 4 + camera 12MP + ring light đồng đều","Dataset 5000+ ảnh PCB: 10 loại lỗi","YOLOv8n train custom dataset","Conveyor belt simulation với servo motor","REST API cho ERP integration + logging"],deploy:["T1–3: Dataset collection + labeling (Roboflow)","T4–6: YOLOv8 training + hyperparameter tuning","T7–8: Hardware integration + conveyor","T9–10: Production test + documentation"],result:["Precision >95%, Recall >92%","Throughput: 3 PCB/giây","ROI: tiết kiệm 70% chi phí QC manual"],tech:["Raspberry Pi","YOLOv8","OpenCV","Roboflow","ONNX Runtime","PostgreSQL"]},{id:5,color:"#a855f7",level:"advanced",dur:"10–12 tuần",team:"3–4 SV",title:"Predictive Maintenance cho động cơ điện",sub:"AI Predictive Maintenance System",overview:"Thu thập rung động, nhiệt độ, dòng điện từ động cơ 3 pha. AI dự báo hỏng hóc trước 7 ngày, giảm downtime 60%.",scope:["IEPE accelerometer + K-type thermocouple + CT clamp 100A","Raspberry Pi 4 + Edge AI (LSTM + Autoencoder)","Feature engineering: FFT, MFCC, statistical features","Remaining Useful Life (RUL) prediction","Grafana dashboard + Telegram/Email alert"],deploy:["T1–2: Hardware + data collection 48h normal","T3–5: Feature engineering + LSTM training","T6–8: Deployment + threshold calibration","T9–10: Field validation","T11–12: Paper + presentation"],result:["Phát hiện trước hỏng 7 ngày (95% confidence)","AUC-ROC > 0.93","Giảm maintenance cost 35%"],tech:["Raspberry Pi 4","TensorFlow LSTM","Grafana","Industrial sensors","MQTT"]},{id:6,color:"#a855f7",level:"advanced",dur:"10–12 tuần",team:"3–5 SV",title:"FPGA Accelerator cho CNN Inference",sub:"Hardware Neural Network Accelerator",overview:"Thiết kế phần cứng FPGA tăng tốc CNN inference (MobileNet-like). So sánh hiệu suất: FPGA vs CPU vs MCU vs GPU.",scope:["Xilinx Artix-7 (Basys 3) hoặc Tang Nano 9K","Verilog: Systolic array 4×4 MAC units","INT8 quantized CNN pipeline","Benchmark: latency, throughput, power consumption","Resource utilization analysis (LUT, BRAM, DSP)"],deploy:["T1–3: Architecture design + Verilog RTL","T4–6: Simulation ModelSim + verification","T7–9: Hardware test + profiling","T10–12: Benchmark comparison + paper"],result:["10× faster than ARM Cortex-M4","3× faster than Raspberry Pi 4 CPU","IEEE/Springer conference submission"],tech:["Xilinx Vivado","Verilog","Systolic Array","ModelSim","HLS (optional)"]},{id:7,color:"#ff6b35",level:"advanced",dur:"12–16 tuần",team:"2–4 SV",title:"Lidar Navigation Robot với AIoT",sub:"Autonomous Mobile Robot with Cloud Monitoring",overview:"Robot tự hành trong nhà dùng Lidar 2D + SLAM + AI obstacle avoidance. Raspberry Pi làm brain, ESP32 điều khiển motor, cloud monitoring dashboard.",scope:["RPLIDAR A1M8 2D Lidar (12m range)","Raspberry Pi 4 + ROS2 Humble","SLAM: GMapping, tạo bản đồ 2D","Deep RL hoặc DWA obstacle avoidance","Cloud dashboard: map realtime, mission logging","Delivery task: đến điểm đích, thông báo khi đến"],deploy:["T1–3: Hardware chassis + ROS2 setup","T4–6: SLAM implementation + testing","T7–9: Navigation + AI avoidance","T10–12: Cloud integration","T13–16: Field demo + paper"],result:["Map accuracy <5cm","Navigation success >90% trong môi trường thực","Cloud monitoring realtime","Paper IEEE ICRA/RA-L"],tech:["ROS2","SLAM","ESP32","Raspberry Pi 4","MQTT","Docker"]},{id:8,color:"#ff6b35",level:"advanced",dur:"12–15 tuần",team:"3–5 SV",title:"Federated Learning cho AIoT Privacy",sub:"Privacy-Preserving Distributed AI",overview:"Triển khai Federated Learning cho mạng lưới IoT thiết bị: train local model không chia sẻ data raw, chỉ gradient. Differential Privacy. So sánh với centralized.",scope:["10 ESP32 + Raspberry Pi aggregation server","Flower FL framework (flwr)","Non-IID data distribution simulation","DP-SGD (Differential Privacy SGD)","Privacy budget analysis (epsilon-delta)","Communication cost vs accuracy tradeoff"],deploy:["T1–3: FL architecture + Flower setup","T4–6: Training pipeline","T7–9: DP-SGD integration","T10–12: Experiments + analysis","T13–15: Paper writing + submission"],result:["Accuracy: 97% FL vs 99% centralized (acceptable)","Zero raw data leaves device","Paper: USENIX Security / IEEE S&P quality"],tech:["Flower FL","TFLite","DP-SGD","FastAPI","ESP32","Python"]},{id:9,color:"#00e676",level:"easy",dur:"4–6 tuần",team:"1–2 SV",title:"Hệ thống chấm công nhận dạng khuôn mặt",sub:"Face Recognition Attendance System",overview:"ESP32-CAM nhận dạng khuôn mặt cán bộ/sinh viên, ghi chấm công tự động vào Google Sheet. Web admin quản lý danh sách. Thay thế hoàn toàn thẻ từ.",scope:["ESP32-CAM + buzzer + LCD 20x4","Enroll 50+ khuôn mặt (5 ảnh/người)","Google Sheet API để ghi chấm công real-time","Web admin: thêm/xóa nhân viên, xem báo cáo","Báo cáo tháng: late, absent, overtime"],deploy:["T1–2: Face enroll + recognition accuracy test","T3–4: Google Sheet integration","T5–6: Web admin + report generation"],result:["Nhận dạng <2s, accuracy >95%","Google Sheet cập nhật realtime","Báo cáo tháng tự động"],tech:["ESP32-CAM","face_recognition","Google Sheets API","Flask web"]},{id:10,color:"#00e676",level:"easy",dur:"4–6 tuần",team:"2 SV",title:"Smart Parking — Bãi đỗ xe thông minh",sub:"IoT Parking Management System",overview:"Sensor phát hiện xe ở mỗi chỗ đậu, LED indicator xanh/đỏ, màn hình hiển thị số chỗ trống, app tìm chỗ đậu gần nhất. Ứng dụng cho trường học, chung cư.",scope:["ESP32 + 10× HC-SR04 ultrasonic sensor","LED RGB indicator mỗi chỗ đậu","Matrix LED 32×8 hiển thị số chỗ trống","MQTT realtime, app web responsive","Thống kê tần suất sử dụng theo giờ/ngày"],deploy:["T1–2: Hardware 10 sensor + LED array","T3–4: MQTT + web dashboard","T5–6: Analytics + app mobile"],result:["Detect xe chính xác 99%","Tiết kiệm 15 phút/lượt tìm chỗ đậu","Dashboard realtime cho quản lý"],tech:["ESP32","MQTT","Node-RED","Progressive Web App","InfluxDB"]},{id:11,color:"#00d4ff",level:"medium",dur:"6–8 tuần",team:"2–3 SV",title:"AI Phát hiện dịch bệnh cây trồng",sub:"Plant Disease Detection with Transfer Learning",overview:"Smartphone/ESP32-CAM chụp ảnh lá cây, AI CNN phân loại 10+ bệnh phổ biến (đốm lá, mốc, thối rễ...). Đề xuất biện pháp xử lý. Ứng dụng cho nông nghiệp Đà Lạt.",scope:["Dataset: PlantVillage 54,305 ảnh (26 loại bệnh, 14 loại cây)","Transfer learning: MobileNetV3 Small fine-tuned","Deploy TFLite trên Android app","ESP32-CAM phiên bản field (không cần điện thoại)","Database bệnh cây + phương pháp điều trị (text + ảnh)"],deploy:["T1–2: Dataset download + augmentation","T3–4: Transfer learning training","T5–6: Android app + ESP32-CAM","T7–8: Field testing tại nông trại Đà Lạt"],result:["Top-5 accuracy >92% trên 26 bệnh","Android app hoạt động offline","Thử nghiệm 3 hộ nông dân"],tech:["TensorFlow","MobileNetV3","TFLite","Android","PlantVillage dataset"]},{id:12,color:"#00d4ff",level:"medium",dur:"6–8 tuần",team:"2–3 SV",title:"Hệ thống đếm và phân loại sản phẩm",sub:"Product Counting and Sorting System",overview:"Băng chuyền công nghiệp: camera AI đếm sản phẩm, phân loại theo màu sắc/hình dạng, loại bỏ sản phẩm lỗi tự động bằng cơ cấu khí nén. OEE dashboard.",scope:["ESP32-CAM + băng chuyền servo + solenoid valve","Phân loại: màu sắc (RGB sensor) + hình dạng (CNN)","Tốc độ xử lý: 3 sản phẩm/giây","OEE (Overall Equipment Effectiveness) dashboard","Cảnh báo khi tỷ lệ lỗi > 5%"],deploy:["T1–2: Cơ cấu băng chuyền + camera setup","T3–4: Classification model + deployment","T5–6: Cơ cấu loại bỏ lỗi + OEE","T7–8: Integration test tốc độ cao"],result:["Accuracy phân loại >95%","Throughput 3 item/s","OEE dashboard realtime"],tech:["ESP32-CAM","TFLite","OpenCV","Node-RED","MQTT"]},{id:13,color:"#f59e0b",level:"hard",dur:"8–12 tuần",team:"3–4 SV",title:"AIoT Quản lý năng lượng tòa nhà",sub:"Building Energy Management System (BEMS)",overview:"Hệ thống thu thập tiêu thụ điện 20 phòng/thiết bị, AI dự báo nhu cầu điện, tối ưu hóa lịch bật/tắt thiết bị, giảm hóa đơn điện 20–30%.",scope:["20× PZEM-004T energy meter (UART) + ESP32 hub","AI forecasting: LSTM dự báo tiêu thụ điện 24h tới","Demand Response: tắt thiết bị không cần thiết giờ peak","Integration: EVN API giá điện thời gian thực","ROI calculator: tiết kiệm kWh × giá EVN"],deploy:["T1–3: PZEM network + data collection 2 tuần","T4–6: LSTM forecasting model","T7–9: Demand response automation","T10–12: ROI analysis + deployment"],result:["Dự báo sai số <5%","Giảm điện năng 20–30%","Payback period <6 tháng"],tech:["ESP32","PZEM-004T","TensorFlow LSTM","InfluxDB","Grafana","EVN API"]},{id:14,color:"#f59e0b",level:"hard",dur:"10–12 tuần",team:"2–4 SV",title:"Hệ thống tưới nước thông minh theo dự báo thời tiết",sub:"AI Weather-Aware Irrigation System",overview:"Tích hợp dự báo thời tiết (OpenWeatherMap API) vào hệ thống tưới: không tưới nếu 2 tiếng nữa có mưa, tăng lượng nước ngày nắng nóng. AI học từ lịch sử.",scope:["ESP32 + 6 soil sensor + 3 van điện từ (solenoid valve)","OpenWeatherMap API 48h forecast","Reinforcement Learning: Q-learning tối ưu lịch tưới","Water meter flow sensor: đo lượng nước thực tế","Mobile app + web dashboard"],deploy:["T1–3: Hardware + sensor calibration","T4–6: Weather API integration + basic rules","T7–9: RL model training + deployment","T10–12: Field test 4 tuần"],result:["Tiết kiệm nước 50% vs tưới cố định","Không tưới trước mưa: 0 lần (vs 15 lần/tháng tưới cố định)","RL policy học cải thiện theo thời gian"],tech:["ESP32","OpenWeatherMap API","Q-learning","MQTT","React dashboard"]},{id:15,color:"#a855f7",level:"advanced",dur:"10–14 tuần",team:"3–5 SV",title:"Digital Twin cho dây chuyền sản xuất",sub:"Industrial Digital Twin with AIoT",overview:"Xây dựng Digital Twin (bản sao số) của dây chuyền sản xuất thực: sync realtime từ sensor IoT, mô phỏng 3D trong browser, AI dự báo bottleneck và đề xuất tối ưu hóa.",scope:["10 ESP32 sensor node: nhiệt độ, rung động, OEE từng máy","Digital Twin engine: Three.js 3D visualization","AI optimization: Genetic Algorithm tối ưu schedule","What-if simulation: thay đổi tham số và xem ảnh hưởng","KPI dashboard: OEE, throughput, downtime"],deploy:["T1–3: IoT data pipeline + Digital Twin model 3D","T4–6: Realtime sync + visualization","T7–9: AI optimization module","T10–12: What-if simulation","T13–14: Validation + paper"],result:["Sync latency <1s","OEE tăng 8% nhờ AI optimization","Paper: IEEE TII / Industrial Informatics"],tech:["ESP32","Three.js","TensorFlow","Genetic Algorithm","WebSocket","InfluxDB"]},{id:16,color:"#a855f7",level:"advanced",dur:"12–16 tuần",team:"3–5 SV",title:"Multi-modal AIoT: Âm thanh + Rung động + Nhiệt độ",sub:"Multi-sensor Fusion for Industrial Fault Diagnosis",overview:"Fusion 3 modality (audio spectrogram + vibration FFT + thermal) để chẩn đoán lỗi máy móc với accuracy cao hơn từng modality riêng lẻ. Novel architecture cho MCU.",scope:["ESP32 + INMP441 + MPU6050 + MLX90614 IR thermal","Multi-modal fusion architecture (attention-based)","Dataset: 5 loại lỗi phổ biến (bearing wear, misalignment, unbalance, looseness, cavitation)","Model compression: pruning + quantization cho ESP32","Comparison: single modal vs fusion accuracy"],deploy:["T1–3: Multi-sensor sync (time alignment)","T4–6: Feature extraction per modality","T7–9: Fusion architecture design + training","T10–12: Compression + ESP32 deployment","T13–16: Benchmark + paper"],result:["Fusion accuracy: >96% vs ~87% single modal","Model size: <200KB (fits ESP32)","Paper: IEEE Sensors Journal / AAAI"],tech:["ESP32","TFLite","Attention mechanism","Keras","Python","Signal processing"]},{id:17,color:"#ff6b35",level:"startup",dur:"16–24 tuần",team:"3–6 SV",title:"AgriAI — Nền tảng nông nghiệp thông minh",sub:"Full-stack AgTech Startup MVP",overview:"Startup MVP đầy đủ cho nông nghiệp thông minh: phần cứng sensor kit, firmware OTA, cloud platform, mobile app nông dân, AI engine, marketplace. Mô hình SaaS.",scope:["Hardware: ESP32 sensor kit chuẩn hóa (soil + weather + camera)","Firmware: OTA update, WiFiManager, end-to-end encryption","Cloud: Multi-tenant SaaS (AWS/GCP), user isolation","Mobile app React Native: iOS + Android","AI engine: crop recommendation, disease detection, irrigation","Marketplace: nông dân bán trực tiếp → người tiêu dùng"],deploy:["T1–4: Architecture + MVP hardware batch 10 units","T5–8: Cloud platform + mobile app","T9–12: AI models integration","T13–16: Beta testing 5 trang trại","T17–24: Iteration + go-to-market"],result:["10 trang trại pilot, 100+ sensor nodes","Mobile app 4.0+ rating","ARR target: 50M VND năm 1","Demo Day pitch + incubator application"],tech:["ESP32","React Native","AWS","TensorFlow Serving","PostgreSQL","Redis","Stripe"]},{id:18,color:"#ff6b35",level:"startup",dur:"16–20 tuần",team:"2–5 SV",title:"MediWatch — Vòng đeo tay theo dõi sức khỏe",sub:"Healthcare IoT Wearable Startup",overview:"Wearable theo dõi: nhịp tim, SpO2, nhiệt độ cơ thể, hoạt động, giấc ngủ. AI phát hiện bất thường tim mạch. Ứng dụng cho người cao tuổi + bệnh nhân sau phẫu thuật.",scope:["Hardware custom: ESP32-S3 mini + MAX30105 + MPU6050 + LiPo","Firmware: FreeRTOS + BLE 5.0 + power management (<7 ngày pin)","AI: ECG-like PPG analysis, sleep stage classification","App: React Native + health data visualization","Cloud: HIPAA-aware architecture (data isolation, audit log)","Business: B2B với bệnh viện + B2C direct"],deploy:["T1–4: PCB design + prototype 5 units","T5–8: Firmware + AI models","T9–12: Mobile app","T13–16: Clinical validation 10 users","T17–20: Business development"],result:["Battery 7 ngày liên tục","SpO2 accuracy ±2%","Heart anomaly detection sensitivity >90%","Letter of intent từ 1 bệnh viện/clinic"],tech:["ESP32-S3","BLE 5","TFLite","React Native","AWS HealthLake","KiCad PCB"]}],u0=[{id:19,color:"#00e676",level:"easy",dur:"4–6 tuần",team:"1–2 SV",title:"Hệ thống tưới cây thông minh cho ban công",sub:"Balcony Smart Plant Watering",overview:"Hệ thống tự động tưới 4 chậu cây trên ban công: soil sensor mỗi chậu, van điện từ riêng, schedule + threshold tự động, app điều khiển từ xa. Phù hợp gia đình ở chung cư.",scope:["ESP32 + 4 capacitive soil sensor + 4 solenoid valve + relay 4-channel","Battery 18650 + solar panel nhỏ (autonomous energy)","App Blynk điều khiển và giám sát","Schedule theo ngày trong tuần + ngưỡng đất khô","Water consumption tracker: đếm lít tưới mỗi tuần"],deploy:["T1–2: Hardware + calibration 4 sensor","T3–4: Valve control + schedule logic","T5–6: App Blynk + water tracking"],result:["Tự động tưới đúng cây cần","Tiết kiệm 50% nước so với tưới thủ công","Battery tuần 1 lần nhờ solar"],tech:["ESP32","Blynk","Solar charging","Solenoid valve"]},{id:20,color:"#00e676",level:"easy",dur:"4–6 tuần",team:"2 SV",title:"Máy đo chất lượng nước uống IoT",sub:"Smart Water Quality Monitor",overview:"Đo các chỉ số nước uống: pH, TDS (total dissolved solids), turbidity (độ đục), nhiệt độ. Cảnh báo khi vượt tiêu chuẩn WHO. Dashboard và lịch sử cho gia đình hoặc trường học.",scope:["ESP32 + pH sensor (analog) + TDS sensor + turbidity sensor + DS18B20","Calibration procedure cho từng sensor","So sánh với WHO drinking water standards","Web dashboard lịch sử 30 ngày + alert SMS/Telegram","Báo cáo tháng: xu hướng chất lượng nước"],deploy:["T1–2: Multi-sensor setup + calibration","T3–4: WHO threshold logic + alert","T5–6: Dashboard + báo cáo"],result:["Monitor 4 chỉ số liên tục","Alert khi vượt chuẩn WHO trong <2 phút","Dashboard gia đình-friendly"],tech:["ESP32","pH sensor","TDS sensor","Node-RED","InfluxDB"]},{id:21,color:"#00d4ff",level:"medium",dur:"6–8 tuần",team:"2–3 SV",title:"Robot theo dõi sức khỏe người cao tuổi",sub:"Elderly Monitoring IoT System",overview:"Hệ thống giám sát người cao tuổi sống một mình: wearable ESP32 đo nhịp tim + SpO2, PIR phát hiện hoạt động, fall detection AI, alert gia đình qua app khi bất thường.",scope:["Wearable: ESP32-S3 mini + MAX30105 + MPU6050 + LiPo (1 tuần pin)","Home sensors: 5 PIR phòng + bathroom sensor","Fall detection: TFLite trên wearable (Edge Impulse)","Activity recognition: phát hiện inactive > 2 tiếng","App gia đình: realtime status + alert + history"],deploy:["T1–2: Wearable hardware + sensor integration","T3–4: Fall detection model (Edge Impulse)","T5–6: Activity monitoring + app","T7–8: Pilot test + user feedback"],result:["Fall detection sensitivity >90%","False alarm < 1 lần/tuần","Gia đình nhận alert trong <30s"],tech:["ESP32-S3","MAX30105","TFLite","React Native app","Firebase"]},{id:22,color:"#00d4ff",level:"medium",dur:"6–8 tuần",team:"2–3 SV",title:"Hệ thống giám sát nhiều điểm tưới nước LoRa",sub:"Multi-point LoRa Irrigation Monitoring",overview:"10+ sensor node LoRa rải khắp vườn rau/trang trại quy mô vừa (1-5 hecta). Mỗi node: soil moisture + nhiệt độ, truyền LoRa về gateway, gateway forward MQTT, dashboard map view.",scope:["10 ESP32 LoRa node (battery + solar): soil + DHT22","Gateway: ESP32 LoRa + WiFi + MQTT forward","Map dashboard: vị trí mỗi node + giá trị realtime","Cảnh báo theo zone: zone A đang khô, zone B đủ ẩm","Power analysis: tuổi thọ pin mỗi node (mục tiêu >30 ngày)"],deploy:["T1–2: Node hardware + LoRa range test","T3–4: Gateway + MQTT pipeline","T5–6: Map dashboard + zone alert","T7–8: Battery optimization + field test 2 tuần"],result:["LoRa range >500m trong vườn có cây","Node battery life >30 ngày","Map dashboard cập nhật mỗi 5 phút"],tech:["ESP32","LoRa SX1276","Leaflet.js map","MQTT","Solar charging"]},{id:23,color:"#f59e0b",level:"hard",dur:"8–10 tuần",team:"3–4 SV",title:"AIoT Kiểm soát chất lượng không khí trường học",sub:"School Air Quality Management",overview:"Mạng lưới 10+ sensor node trong trường DLU đo CO2, VOC, bụi PM2.5, nhiệt độ. AI đề xuất mở cửa sổ / bật điều hòa. Dashboard public hiển thị AQI realtime. Nghiên cứu tác động đến học lực.",scope:["10 node ESP32 + SGP30 + BME280 + PMS5003 (battery + PoE option)","AI rule engine: CO2 > 1000ppm → khuyến nghị thông gió","Public dashboard: TV màn hình lớn trong trường hiển thị AQI","Study: so sánh test kết quả vs AQI (data-driven)","Báo cáo hàng tháng lên Ban Giám Hiệu"],deploy:["T1–2: Node hardware + calibration","T3–4: Network deployment trong trường","T5–6: AI recommendations + dashboard","T7–8: Data collection + study","T9–10: Analysis + báo cáo BGH"],result:["10 phòng giám sát realtime","AQI public dashboard cho 1000+ sinh viên","Nghiên cứu: tương quan CO2 vs điểm thi"],tech:["ESP32","SGP30","Node-RED","Grafana","InfluxDB","Python analysis"]},{id:24,color:"#f59e0b",level:"hard",dur:"10–12 tuần",team:"2–4 SV",title:"Hệ thống tự động điều khiển nhà kính thủy canh",sub:"Automated Hydroponic Greenhouse",overview:"Nhà kính thủy canh tự động hoàn toàn: EC (electrical conductivity), pH dung dịch, mực nước, ánh sáng, nhiệt độ. AI điều chỉnh dinh dưỡng, tưới, đèn theo giai đoạn phát triển. Camera theo dõi.",scope:["ESP32 + pH sensor + EC sensor + level sensor + BME280 + BH1750","3 pump: dung dịch A, B, nước sạch (điều chỉnh EC và pH)","Grow light PWM: quang kỳ theo giai đoạn (seedling, veg, flower)","AI growth stage detection từ ảnh (lá xanh/vàng, size)","Yield prediction: dự báo ngày thu hoạch"],deploy:["T1–3: Hydroponic hardware + sensor calibration","T4–6: Auto-dosing logic + EC/pH control","T7–9: Camera + growth stage AI","T10–12: Yield prediction + optimization"],result:["EC và pH tự động ±0.1 accuracy","Yield tăng 30% vs manual hydroponic","Tiết kiệm nước 80% vs soil farming"],tech:["ESP32","Peristaltic pump","TFLite","OpenCV","MQTT","Grafana"]},{id:25,color:"#a855f7",level:"advanced",dur:"12–16 tuần",team:"3–5 SV",title:"Swarm Intelligence cho IoT Sensor Network",sub:"Self-organizing IoT Mesh Network",overview:"Mạng lưới 15+ ESP32 nodes tự tổ chức (self-organizing mesh). Node lỗi → mạng tự heal routing. Load balancing, sleep scheduling tối ưu năng lượng. Novel protocol so với LoRa/Zigbee.",scope:["15 ESP32 + ESP-NOW mesh protocol custom","Distributed consensus algorithm: leader election (Raft-inspired)","Energy-aware routing: ưu tiên node còn pin nhiều","Fault tolerance: detect và route around failed nodes","Benchmarks: throughput, latency, reliability vs WiFi MQTT vs LoRa"],deploy:["T1–3: Protocol design + simulation","T4–6: ESP32 implementation","T7–9: Mesh testing + fault injection","T10–12: Benchmarks + optimization","T13–16: Paper + demo"],result:["Self-heal trong <30s khi 30% nodes fail","Energy balanced: ±10% battery across nodes","Paper: IEEE IOTJ hoặc conference"],tech:["ESP32","ESP-NOW","Distributed systems","Graph algorithms","Python simulation"]},{id:26,color:"#a855f7",level:"advanced",dur:"12–15 tuần",team:"3–5 SV",title:"Continual Learning cho Adaptive AIoT",sub:"Online Learning Edge AI System",overview:"AI model trên edge device học liên tục (continual learning) từ data mới mà không quên kiến thức cũ (catastrophic forgetting). Adapt với environment thay đổi không cần retrain từ đầu.",scope:["ESP32-S3 + PSRAM 8MB cho model storage","Elastic Weight Consolidation (EWC) implementation","Progressive Neural Networks (PNN) variant cho MCU","Evaluation: accuracy on old tasks vs new tasks over time","Benchmark: memory, compute, accuracy vs periodic offline retrain"],deploy:["T1–3: Literature review + algorithm selection","T4–6: MCU-optimized implementation","T7–9: Experiments: drift scenarios","T10–12: Comparison baseline","T13–15: Paper ICML/NeurIPS workshop"],result:["Old task accuracy drop <5% after 5 new tasks","MCU inference <50ms after new task learn","Novel: first EWC implementation on MCU"],tech:["ESP32-S3","TFLite custom ops","Python simulation","C++ MCU code"]},{id:27,color:"#ff6b35",level:"startup",dur:"12–18 tuần",team:"3–5 SV",title:"EduBot — Robot dạy học STEM cho học sinh phổ thông",sub:"STEM Education Robot Startup",overview:"Robot đơn giản dựa ESP32 + chassis, lập trình được qua visual blocks (Scratch-like) trên tablet. AI tutor hướng dẫn từng bước. Kit $25-30/robot, bán cho trường học.",scope:["Hardware: ESP32 + L298N motor + ultrasonic + line sensor + RGB LED","Visual block programming web app (Blockly)","AI tutor: hints khi học sinh bị stuck (offline NLP nhỏ)","Curriculum: 20 bài học STEM từ cơ bản đến robot maze solver","B2B sales: trường học, trung tâm STEM"],deploy:["T1–3: Robot hardware + firmware","T4–6: Blockly web interface","T7–9: AI tutor + curriculum 20 bài","T10–12: Pilot 2 trường","T13–18: Iterate + go-to-market"],result:["Kit cost <$30, sell $75-100 (3x margin)","Pilot: 50 học sinh, NPS >50","ARR target: 200M VND năm 1 (200 robots)"],tech:["ESP32","Blockly.js","TFLite NLP","React web","3D printing chassis"]},{id:28,color:"#ff6b35",level:"startup",dur:"16–24 tuần",team:"4–7 SV",title:"AirMind — Mạng lưới sensor chất lượng không khí đô thị",sub:"Urban Air Quality Network as a Service",overview:"Triển khai 100+ low-cost AQI sensor nodes khắp thành phố Đà Lạt. Data AI → pollution source identification + health advisories. Sell data API cho chính quyền, bệnh viện, trường học.",scope:["Hardware: low-cost node $15 (SDS011 PM2.5 + MQ135 CO2 + BME280 + LoRa)","Calibration ML: align low-cost sensor với reference station","Data platform: multi-tenant API, visualization, historical data","AI: pollution plume tracking, source identification","B2G/B2B: tỉnh Lâm Đồng, Sở TN&MT, bệnh viện"],deploy:["T1–4: Hardware + deployment 20 nodes pilot","T5–8: Calibration ML + data pipeline","T9–12: API platform","T13–16: AI analytics","T17–24: Scale 100+ nodes + business development"],result:["100 nodes deployed Đà Lạt city","Data API: 5+ paying customers","Research: SCI paper về low-cost sensor calibration","Potential: Techfest pitching"],tech:["ESP32","LoRa","Scikit-learn calibration","Django API","React dashboard","PostgreSQL TimescaleDB"]}],Pn=[...s0,...u0],Ua=[...l0,...r0],Ht={name:"Trần Vĩnh Phúc",avatar:"PT",email:"phuctv@dlu.edu.vn",phone:"0976 353 606",dept:"Khoa Công nghệ Thông tin",uni:"Đại học Đà Lạt",city:"Đà Lạt, Lâm Đồng"},d0=[{cat:"Tài liệu chính thức",color:"#00d4ff",items:[{name:"ESP32 Technical Reference Manual",url:"https://docs.espressif.com/projects/esp-idf/en/latest/",desc:"Tài liệu đầy đủ từ Espressif: peripheral, register map, timing, pinout."},{name:"TensorFlow Lite Micro",url:"https://www.tensorflow.org/lite/microcontrollers",desc:"Deploy AI model lên MCU. Examples cho ESP32, Arduino Nano BLE."},{name:"Edge Impulse Documentation",url:"https://docs.edgeimpulse.com/",desc:"Platform TinyML end-to-end: data→train→deploy."},{name:"Arduino Language Reference",url:"https://www.arduino.cc/reference/en/",desc:"Reference đầy đủ Arduino/C++ API."},{name:"FreeRTOS API Reference",url:"https://www.freertos.org/a00106.html",desc:"Task, queue, semaphore, timer, event group."},{name:"PlatformIO Documentation",url:"https://docs.platformio.org/",desc:"IDE chuyên nghiệp: package manager, CI/CD, unit test."},{name:"MQTT 5.0 Specification",url:"https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html",desc:"Đặc tả đầy đủ giao thức MQTT 5.0."},{name:"LoRaWAN Specification v1.0.4",url:"https://lora-alliance.org/resource_hub/",desc:"LoRaWAN MAC protocol, regional parameters, security."},{name:"AWS IoT Core Developer Guide",url:"https://docs.aws.amazon.com/iot/latest/developerguide/",desc:"Connect devices, rules engine, Device Shadow, Lambda."},{name:"Docker Documentation",url:"https://docs.docker.com/",desc:"Container basics, Docker Compose cho AIoT stack."}]},{cat:"Khóa học & Video",color:"#00e676",items:[{name:"Random Nerd Tutorials",url:"https://randomnerdtutorials.com/",desc:"Hàng trăm tutorial ESP32/Arduino miễn phí, ảnh chi tiết."},{name:"TinyML on edX (Harvard)",url:"https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning",desc:"Chứng chỉ TinyML từ Harvard. Audit miễn phí."},{name:"Fast.ai — Practical Deep Learning",url:"https://course.fast.ai/",desc:"DL thực hành nhất. Top-down approach, miễn phí."},{name:"DeepLearning.AI TensorFlow",url:"https://www.coursera.org/specializations/tensorflow2",desc:"TensorFlow Developer Specialization: 4 khóa từ Google."},{name:"Andreas Spiess YouTube",url:"https://www.youtube.com/@AndreasSpiess",desc:"ESP32, LoRa, MQTT thực tế. Rất uy tín."},{name:"MIT 6.S191 Deep Learning",url:"http://introtodeeplearning.com/",desc:"DL course MIT. Slides + video miễn phí."},{name:"Embedded ML Summit",url:"https://www.youtube.com/@tinyml_summit",desc:"Talks Edge AI từ Google, Arm, ST, Nordic."}]},{cat:"Công cụ & Platform",color:"#a855f7",items:[{name:"Edge Impulse Studio",url:"https://studio.edgeimpulse.com/",desc:"Train TinyML miễn phí, export Arduino library tự động."},{name:"Wokwi Simulator",url:"https://wokwi.com/",desc:"Mô phỏng Arduino/ESP32 online, không cần phần cứng."},{name:"Roboflow",url:"https://roboflow.com/",desc:"CV dataset: label, augment, export YOLO/TFLite."},{name:"ThingSpeak IoT",url:"https://thingspeak.com/",desc:"Cloud IoT miễn phí: 3M messages/năm."},{name:"Node-RED",url:"https://nodered.org/",desc:"Visual flow-based IoT programming. Open source."},{name:"MQTT Explorer",url:"https://mqtt-explorer.com/",desc:"GUI MQTT client: xem topics dạng tree."},{name:"Fritzing",url:"https://fritzing.org/",desc:"Vẽ sơ đồ breadboard cho tài liệu."},{name:"KiCad EDA",url:"https://www.kicad.org/",desc:"PCB design chuyên nghiệp miễn phí."},{name:"Google Colab",url:"https://colab.research.google.com/",desc:"Jupyter notebook GPU miễn phí để train model."}]},{cat:"Sách tham khảo",color:"#f59e0b",items:[{name:"TinyML — Pete Warden (O'Reilly)",url:"https://www.oreilly.com/library/view/tinyml/9781492052036/",desc:"Sách TinyML nền tảng nhất từ Google. Audio, vision, gesture."},{name:"AI at the Edge — Situnayake",url:"https://www.oreilly.com/library/view/ai-at-the/9781098120191/",desc:"Edge AI production: optimization, deployment, case studies."},{name:"Hands-On ML — Géron",url:"https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/",desc:"ML nền tảng tốt nhất. Scikit-learn + TensorFlow + Keras."},{name:"Deep Learning — Goodfellow",url:"https://www.deeplearningbook.org/",desc:"Lý thuyết DL đầy đủ nhất. Miễn phí online."},{name:"Programming ESP32 — Dogan Ibrahim",url:"https://www.elektor.com/",desc:"ESP32: WiFi, BLE, FreeRTOS, sensors toàn diện."}]},{cat:"Dataset & Model Hub",color:"#2dd4bf",items:[{name:"Kaggle Datasets",url:"https://www.kaggle.com/datasets",desc:"Hàng nghìn dataset IoT, sensors, time-series."},{name:"PlantVillage Dataset",url:"https://plantvillage.psu.edu/",desc:"54K ảnh bệnh cây 26 loại. Phù hợp nông nghiệp Đà Lạt."},{name:"TensorFlow Hub",url:"https://tfhub.dev/",desc:"Pre-trained: MobileNet, EfficientDet. Fine-tune nhanh."},{name:"Roboflow Universe",url:"https://universe.roboflow.com/",desc:"100K+ CV datasets. Export YOLO, COCO, TFLite."},{name:"Edge Impulse Model Zoo",url:"https://edgeimpulse.com/model-zoo",desc:"Pre-trained TinyML: keyword, gesture, vibration."},{name:"UCI ML Repository",url:"https://archive.ics.uci.edu/ml/",desc:"Classic benchmark datasets. IoT time-series."}]},{cat:"Cộng đồng & Khởi nghiệp",color:"#ff6b35",items:[{name:"Techfest Vietnam",url:"https://techfest.vn/",desc:"Festival khởi nghiệp lớn nhất VN. Pitch + funding."},{name:"Hackster.io",url:"https://www.hackster.io/",desc:"Community hardware+IoT. Sharing, hackathon có thưởng."},{name:"Arduino Forum",url:"https://forum.arduino.cc/",desc:"1M thành viên, hỗ trợ kỹ thuật nhanh."},{name:"ESP32 Forum",url:"https://esp32.com/",desc:"Forum chính thức ESP32 từ Espressif."},{name:"GitHub Student Pack",url:"https://education.github.com/pack",desc:"Miễn phí: GitHub Pro, AWS, Azure, Figma cho sinh viên."},{name:"DLU Innovation Lab",url:"https://dlu.edu.vn/",desc:"Lab khởi nghiệp Đại học Đà Lạt. Mentoring + coworking."}]}],Qf=[{id:"c1",title:"Nền tảng AIoT",color:"#00d4ff",sections:[{id:"c1s1",title:"AIoT là gì?",content:`## AIoT — Artificial Intelligence of Things

**AIoT** là sự hội tụ của **AI (Trí tuệ nhân tạo)** và **IoT (Internet vạn vật)**, tạo ra hệ sinh thái thông minh có khả năng cảm nhận, học hỏi và hành động tự động mà không cần kết nối cloud liên tục.

### Tại sao AIoT là xu thế tất yếu?

Năm 2025, có hơn **18 tỷ** thiết bị IoT kết nối toàn cầu. Lượng dữ liệu sinh ra từ cảm biến đạt **79 Zettabyte/năm**. Gửi toàn bộ dữ liệu lên cloud là bất khả thi — AIoT xử lý tại chỗ.

### So sánh kiến trúc

| Tiêu chí | Cloud IoT | Edge IoT | AIoT (Edge AI) |
|----------|-----------|----------|----------------|
| Xử lý | Server cloud | Gateway | Tại thiết bị |
| Độ trễ | 100ms – 2s | 10–100ms | < 5ms |
| Băng thông | Rất cao | Cao | Thấp |
| Hoạt động offline | Không | Giới hạn | Đầy đủ |
| Bảo mật dữ liệu | Thấp | Trung bình | Cao |
| Chi phí vận hành | Cao | TB | Thấp |

### Kiến trúc 3 tầng AIoT

\`\`\`
[Cloud Layer]      Training, Global model, BI Dashboard
      |
[Edge/Gateway]     Pre-processing, Model update, Aggregation
      |
[Device Layer]     Inference, Sensing, Actuation  <-- Đây là trọng tâm AIoT
      |
[Physical World]   Cảm biến, Camera, Micro, Motor, Relay
\`\`\`

### Ứng dụng thực tiễn 2024–2025

- **Smart Agriculture**: ESP32 + soil sensor + AI dự báo tưới nước tiết kiệm 40% nước
- **Industrial Predictive Maintenance**: Phát hiện lỗi động cơ 7 ngày trước khi hỏng
- **Smart Retail**: Camera AI đếm người, nhận dạng hành vi mua hàng
- **Healthcare Wearable**: Phát hiện ngã, đo ECG, dự báo cơn động kinh
- **Smart City**: Đèn đường thông minh, quản lý rác thải, đỗ xe tự động`},{id:"c1s2",title:"Hệ sinh thái phần cứng",content:`## Hệ sinh thái phần cứng AIoT

### Bảng so sánh toàn diện

| Platform | CPU | RAM | Flash | WiFi/BT | AI Support | Giá VND |
|----------|-----|-----|-------|---------|-----------|---------|
| Arduino Uno R3 | 16MHz AVR | 2KB | 32KB | Không | Không | ~120K |
| Arduino Nano 33 BLE Sense | 64MHz Cortex-M4 | 256KB | 1MB | BLE 5 | TFLite Micro | ~600K |
| ESP8266 NodeMCU | 80/160MHz | 80KB | 4MB | 802.11n | Giới hạn | ~55K |
| ESP32 WROOM | 240MHz dual | 520KB | 4MB | WiFi+BT | TFLite Micro | ~130K |
| ESP32-S3 | 240MHz dual | 512KB | 8MB | WiFi6+BT5 | Vector ext | ~160K |
| ESP32-CAM | 240MHz dual | 520KB | 4MB | WiFi | Face detect | ~80K |
| Raspberry Pi Zero 2W | 1GHz quad | 512MB | — | WiFi+BT | TFLite | ~350K |
| Raspberry Pi 4B 4GB | 1.8GHz quad | 4GB | — | WiFi+BT | OpenCV+TFLite | ~1.8M |
| NVIDIA Jetson Nano | 1.43GHz quad | 4GB | — | — | CUDA inference | ~3.5M |

### ESP32 — Lựa chọn tốt nhất cho AIoT học thuật

\`\`\`
ESP32 Highlights:
├── Dual-core Xtensa LX6 @ 240MHz
├── 520KB SRAM + 4MB Flash
├── WiFi 802.11 b/g/n + Bluetooth 4.2/BLE
├── 34 GPIO programmable
├── ADC 12-bit (18 channels)
├── DAC 8-bit (2 channels)  
├── 4× SPI, 2× I2C, 3× UART, 16× PWM
├── Hall sensor, Touch sensor (10 pins)
├── FreeRTOS built-in
└── TFLite Micro support
\`\`\`

### Cảm biến phổ biến theo ứng dụng

| Ứng dụng | Cảm biến | Giao thức | Độ chính xác |
|---------|---------|-----------|-------------|
| Nhiệt độ/Độ ẩm | DHT22, BME280 | 1-Wire / I2C | ±0.5°C / ±2% |
| Chất lượng KK | MQ135, SGP30, PMS5003 | ADC / I2C | ppm level |
| Khoảng cách | HC-SR04, VL53L1X | GPIO / I2C | 2mm accuracy |
| Gia tốc/Gyro | MPU6050, ICM-42688 | I2C / SPI | 16-bit |
| Camera | OV2640 (ESP32-CAM) | DVP | 2MP |
| GPS | NEO-M8N | UART | 2.5m CEP |
| Ánh sáng | BH1750, TSL2591 | I2C | 0.01 lux |
| Soil moisture | Capacitive v1.2 | ADC | % relative |

### FPGA trong AIoT

FPGA cung cấp **true parallelism** — thực hiện nhiều phép tính đồng thời, lý tưởng cho:
- Xử lý CNN layer parallel
- Digital signal processing (FFT, FIR filter)
- High-speed data acquisition

**Board học tập**: Tang Nano 9K (~350K), Basys 3 (~3M), DE0-Nano (~2M)`},{id:"c1s3",title:"Giao thức IoT",content:`## Giao thức truyền thông IoT

### Tầng Physical & Link

| Giao thức | Range | Speed | Power | Topology | Use case |
|-----------|-------|-------|-------|---------|---------|
| WiFi 4 (802.11n) | 100m | 300Mbps | Cao | Star | Camera, streaming |
| BLE 5.0 | 40m | 2Mbps | Rất thấp | Mesh | Wearable, beacon |
| Zigbee (802.15.4) | 75m | 250Kbps | Rất thấp | Mesh | Smart home |
| Z-Wave | 30m | 100Kbps | Thấp | Mesh | Smart home (EU) |
| LoRa / LoRaWAN | 15km | 50Kbps | Cực thấp | Star | Smart farm, city |
| NB-IoT | 10km | 250Kbps | Thấp | Star | Industrial |
| Sigfox | 50km | 100bps | Cực thấp | Star | Asset tracking |
| RS-485 | 1200m | 10Mbps | Thấp | Bus | Industrial |

### MQTT Protocol — Chuẩn IoT số 1

\`\`\`
Client (ESP32)  ←→  Broker (Mosquitto)  ←→  Subscriber (Dashboard)

QoS Levels:
├── QoS 0: Fire-and-forget (tốc độ cao, có thể mất)
├── QoS 1: At least once (đảm bảo nhận, có thể trùng)
└── QoS 2: Exactly once (đảm bảo đúng 1 lần, chậm nhất)

Topic convention:
<building>/<floor>/<room>/<device>/<measurement>
home/1/bedroom/dht22/temperature
factory/a/line1/motor1/vibration
farm/zone1/sensor01/soil_moisture
\`\`\`

### HTTP REST vs MQTT vs CoAP vs WebSocket

| | HTTP REST | MQTT | CoAP | WebSocket |
|--|-----------|------|------|-----------|
| Mô hình | Req/Res | Pub/Sub | Req/Res | Full-duplex |
| Header size | ~200-800B | 2B | 4B | ~50B |
| Phù hợp | Web API | IoT sensor | Constrained | Dashboard |
| Broker cần | Không | Có | Có | Không |

### Giao thức Hardware: I2C, SPI, UART, 1-Wire

**I2C**: 2 dây (SDA, SCL), tới 127 devices, 400KHz standard
\`\`\`
Master: ESP32  →  Slave 1: BME280 (0x76)
                → Slave 2: MPU6050 (0x68)
                → Slave 3: SSD1306 OLED (0x3C)
\`\`\`

**SPI**: 4 dây (MOSI, MISO, SCK, CS), tốc độ 80MHz, full-duplex
\`\`\`
Dùng cho: SD card, TFT display, LoRa SX1276, ADC ngoài
\`\`\`

**UART**: 2 dây (TX, RX), async, baud rate 9600–921600
\`\`\`
Dùng cho: GPS NEO-M8N, GSM SIM800, Debug console, Bluetooth HC-05
\`\`\``}]},{id:"c2",title:"Lập trình nhúng",color:"#00e676",sections:[{id:"c2s1",title:"Arduino & C++ nền tảng",content:`## Lập trình Arduino/ESP32 từ nền tảng

### Cấu trúc chương trình

\`\`\`cpp
// ── 1. Include thư viện ──
#include <Arduino.h>
#include <DHT.h>
#include <ArduinoJson.h>

// ── 2. Định nghĩa hằng số ──
#define LED_PIN     2    // Tránh "magic numbers"
#define DHT_PIN     4
#define THRESHOLD   30.0f

// ── 3. Biến toàn cục (hạn chế) ──
DHT dht(DHT_PIN, DHT22);
unsigned long lastReadMs = 0;

// ── 4. Hàm helper ──
float readTemperature() {
  float t = dht.readTemperature();
  return isnan(t) ? -999.0f : t;
}

// ── 5. Setup: chạy 1 lần ──
void setup() {
  Serial.begin(115200);
  delay(100);
  dht.begin();
  pinMode(LED_PIN, OUTPUT);
  Serial.println(F("AIoT System Ready")); // F() lưu string vào Flash
}

// ── 6. Loop: chạy liên tục ──
void loop() {
  const unsigned long now = millis();
  
  // Non-blocking: đọc mỗi 2 giây
  if (now - lastReadMs >= 2000UL) {
    lastReadMs = now;
    
    const float temp = readTemperature();
    const float hum  = dht.readHumidity();
    
    if (temp > -999.0f) {
      Serial.printf("T:%.1f C  H:%.1f%%\\n", temp, hum);
      digitalWrite(LED_PIN, temp > THRESHOLD);
    }
  }
  
  // Các task khác vẫn chạy song song ở đây
}
\`\`\`

### Kiểu dữ liệu trên MCU

| Kiểu | Bytes | Phạm vi | Dùng cho |
|------|-------|---------|---------|
| bool | 1 | true/false | Flag |
| uint8_t | 1 | 0–255 | Byte data, pin state |
| int16_t | 2 | -32768–32767 | Sensor raw value |
| uint32_t | 4 | 0–4.29B | millis(), timestamp |
| float | 4 | 1.2e-38–3.4e38 | Sensor measurement |
| char[] | n | ASCII | String (prefer over String) |

### GPIO Patterns

\`\`\`cpp
// INPUT_PULLUP: nút nhấn không cần điện trở ngoài
// Logic ngược: LOW khi nhấn, HIGH khi thả
pinMode(BUTTON_PIN, INPUT_PULLUP);
bool pressed = (digitalRead(BUTTON_PIN) == LOW);

// PWM: điều chỉnh độ sáng LED, tốc độ motor
// ESP32 dùng ledcWrite thay analogWrite
ledcSetup(0, 5000, 8);      // channel 0, 5KHz, 8-bit
ledcAttachPin(LED_PIN, 0);
ledcWrite(0, 128);           // 50% duty cycle

// ADC: đọc cảm biến analog (ESP32: 12-bit = 0-4095)
int raw = analogRead(SENSOR_PIN);
float voltage = raw * 3.3f / 4095.0f;
\`\`\`

### Interrupt & Non-blocking Pattern

\`\`\`cpp
// Interrupt: phản hồi tức thời không cần polling
volatile bool motionFlag = false; // volatile bắt buộc!

void IRAM_ATTR onMotion() {  // IRAM_ATTR: hàm chạy trong RAM
  motionFlag = true;
}

void setup() {
  attachInterrupt(digitalPinToInterrupt(PIR_PIN), onMotion, RISING);
}

void loop() {
  if (motionFlag) {
    motionFlag = false;      // Clear flag ngay
    handleMotion();          // Xử lý ngoài ISR
  }
}

// Debounce nút nhấn: tránh đọc nhiễu cơ học
class Button {
  int pin; unsigned long lastMs; bool state;
public:
  Button(int p) : pin(p), lastMs(0), state(false) {
    pinMode(p, INPUT_PULLUP);
  }
  bool pressed() {
    if (digitalRead(pin) == LOW && millis()-lastMs > 50) {
      lastMs = millis(); return true;
    }
    return false;
  }
};
\`\`\``},{id:"c2s2",title:"FreeRTOS & Multitasking",content:`## FreeRTOS trên ESP32

### Tại sao cần RTOS?

Hệ thống AIoT cần làm nhiều việc đồng thời:
- Đọc 5 cảm biến mỗi 100ms
- Gửi MQTT mỗi 5 giây
- Chạy inference AI khi có trigger
- Phục vụ web server
- Xử lý interrupt

\`\`\`cpp
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
#include <freertos/semphr.h>
#include <freertos/queue.h>

// ── Shared data structure ──
struct SensorData {
  float temperature;
  float humidity;
  uint32_t timestamp;
};

// ── Mutex bảo vệ shared data ──
SemaphoreHandle_t dataMutex;
SensorData latestData;

// ── Queue để truyền data giữa tasks ──
QueueHandle_t sensorQueue;

// ── Task đọc cảm biến (Core 0) ──
void sensorTask(void* param) {
  SensorData data;
  for (;;) {
    data.temperature = dht.readTemperature();
    data.humidity    = dht.readHumidity();
    data.timestamp   = millis();
    
    // Gửi vào queue (không block nếu đầy)
    xQueueSend(sensorQueue, &data, 0);
    
    // Cập nhật shared state
    if (xSemaphoreTake(dataMutex, pdMS_TO_TICKS(10)) == pdTRUE) {
      latestData = data;
      xSemaphoreGive(dataMutex);
    }
    
    vTaskDelay(pdMS_TO_TICKS(500)); // Yield 500ms
  }
}

// ── Task gửi MQTT (Core 1) ──
void mqttTask(void* param) {
  SensorData data;
  for (;;) {
    // Chờ data từ queue (block tối đa 6 giây)
    if (xQueueReceive(sensorQueue, &data, pdMS_TO_TICKS(6000)) == pdTRUE) {
      char json[128];
      snprintf(json, sizeof(json),
        "{\\"temp\\":%.1f,\\"hum\\":%.1f,\\"ts\\":%lu}",
        data.temperature, data.humidity, data.timestamp);
      
      if (mqttClient.connected())
        mqttClient.publish("sensors/data", json);
    }
  }
}

// ── Task AI inference (Core 0) ──
void aiTask(void* param) {
  for (;;) {
    // Đợi notification từ sensor task
    ulTaskNotifyTake(pdTRUE, portMAX_DELAY);
    runInference();
  }
}

void setup() {
  dataMutex   = xSemaphoreCreateMutex();
  sensorQueue = xQueueCreate(10, sizeof(SensorData));
  
  // Core 0: sensor + AI, Core 1: WiFi/MQTT
  xTaskCreatePinnedToCore(sensorTask, "Sensor", 4096, NULL, 2, NULL, 0);
  xTaskCreatePinnedToCore(mqttTask,   "MQTT",   8192, NULL, 1, NULL, 1);
  xTaskCreatePinnedToCore(aiTask,     "AI",     8192, NULL, 1, NULL, 0);
}
\`\`\``},{id:"c2s3",title:"WiFi, MQTT & HTTP",content:`## Kết nối ESP32 — WiFi, MQTT, HTTP

### WiFiManager: Cấu hình không cần hard-code

\`\`\`cpp
#include <WiFiManager.h>

void setup() {
  WiFiManager wm;
  wm.setConfigPortalTimeout(120); // 2 phút rồi reboot
  
  // Custom param: MQTT server
  WiFiManagerParameter mqttParam("mqtt", "MQTT Host", "192.168.1.100", 20);
  wm.addParameter(&mqttParam);
  
  // Tự động kết nối, nếu fail mở AP "AIoT-Setup"
  if (!wm.autoConnect("AIoT-Setup", "12345678")) {
    ESP.restart();
  }
  
  String mqttHost = mqttParam.getValue();
}
\`\`\`

### MQTT với reconnect tự động

\`\`\`cpp
#include <PubSubClient.h>
#include <ArduinoJson.h>

const char* MQTT_HOST = "192.168.1.100";
const int   MQTT_PORT = 1883;
const char* CLIENT_ID = "esp32-" + String((uint32_t)ESP.getEfuseMac(), HEX);

WiFiClient   wifiClient;
PubSubClient mqtt(wifiClient);

void onMessage(char* topic, byte* payload, unsigned int len) {
  // Parse JSON command
  JsonDocument doc;
  deserializeJson(doc, payload, len);
  
  const char* cmd = doc["cmd"];
  if (strcmp(cmd, "reboot") == 0) ESP.restart();
  if (strcmp(cmd, "led") == 0) digitalWrite(LED_PIN, doc["val"].as<int>());
}

bool ensureMQTT() {
  if (mqtt.connected()) return true;
  
  Serial.print("MQTT connecting...");
  if (mqtt.connect(CLIENT_ID.c_str(), "user", "pass",
                   "devices/status", 1, true, "offline")) {
    mqtt.publish("devices/status", "online", true); // Retained
    mqtt.subscribe("devices/esp32/cmd");
    Serial.println(" OK");
    return true;
  }
  Serial.println(" FAIL rc=" + String(mqtt.state()));
  return false;
}

void publishSensorData(float t, float h) {
  JsonDocument doc;
  doc["temperature"] = serialized(String(t, 1));
  doc["humidity"]    = serialized(String(h, 1));
  doc["rssi"]        = WiFi.RSSI();
  doc["heap"]        = ESP.getFreeHeap();
  doc["uptime"]      = millis() / 1000;
  
  char buf[200];
  serializeJson(doc, buf);
  mqtt.publish("sensors/env", buf);
}
\`\`\`

### HTTP REST Client và Server

\`\`\`cpp
// ── HTTP Client: gửi data lên server ──
#include <HTTPClient.h>

void postToServer(float temp) {
  HTTPClient http;
  http.begin("https://api.example.com/sensors");
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Authorization", "Bearer YOUR_TOKEN");
  
  String body = "{\\"temp\\":" + String(temp, 1) + "}";
  int code = http.POST(body);
  
  if (code == 200) {
    Serial.println(http.getString());
  }
  http.end();
}

// ── HTTP Server: dashboard đơn giản ──
#include <WebServer.h>
WebServer server(80);

void setup() {
  server.on("/api/sensors", HTTP_GET, []() {
    JsonDocument doc;
    doc["temp"] = readTemp();
    doc["hum"]  = readHum();
    String json; serializeJson(doc, json);
    server.send(200, "application/json", json);
  });
  
  server.on("/", HTTP_GET, []() {
    server.send(200, "text/html", getDashboardHTML());
  });
  
  server.begin();
}
\`\`\``}]},{id:"c3",title:"Cảm biến & Actuator",color:"#00e676",sections:[{id:"c3s1",title:"Cảm biến môi trường",content:`## Cảm biến môi trường

### BME280 — 3-in-1 chuyên nghiệp

\`\`\`cpp
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;

void setup() {
  Wire.begin(21, 22); // SDA=21, SCL=22
  if (!bme.begin(0x76)) {
    Serial.println("BME280 not found!");
    while(1);
  }
  // Cấu hình cho weather monitoring
  bme.setSampling(Adafruit_BME280::MODE_FORCED,
    Adafruit_BME280::SAMPLING_X1,  // temperature
    Adafruit_BME280::SAMPLING_X1,  // pressure
    Adafruit_BME280::SAMPLING_X1,  // humidity
    Adafruit_BME280::FILTER_OFF);
}

struct EnvData {
  float temp;   // °C
  float hum;    // %RH
  float press;  // hPa
  float alt;    // meters (approx)
};

EnvData readEnv() {
  bme.takeForcedMeasurement();
  return {
    bme.readTemperature(),
    bme.readHumidity(),
    bme.readPressure() / 100.0f,
    bme.readAltitude(1013.25f)
  };
}
\`\`\`

### Cảm biến chất lượng không khí

\`\`\`cpp
// SGP30: CO2 + TVOC qua I2C (chính xác hơn MQ series)
#include <Adafruit_SGP30.h>
Adafruit_SGP30 sgp;
sgp.begin();
sgp.IAQmeasure();
// sgp.eCO2: 400-60000 ppm (400 = fresh air)
// sgp.TVOC: 0-60000 ppb

// PMS5003: bụi PM1.0, PM2.5, PM10 (UART)
// Đọc 32 bytes packet mỗi giây
struct PMSData {
  uint16_t pm1_0, pm2_5, pm10;
};
\`\`\`

### Cảm biến đặc biệt

\`\`\`cpp
// MAX30105: Heart rate + SpO2
#include <MAX3010x.h>
MAX30105 particleSensor;
particleSensor.begin(Wire, I2C_SPEED_FAST);
particleSensor.setup();
long irValue = particleSensor.getIR();
// Dùng thư viện SparkFun HeartRate để tính BPM

// PZEM-004T: Đo điện (AC) - Voltage, Current, Power, Energy
#include <PZEM004Tv30.h>
PZEM004Tv30 pzem(Serial2, 16, 17); // RX, TX
float voltage = pzem.voltage();
float current = pzem.current();
float power   = pzem.power();
float energy  = pzem.energy();
\`\`\``},{id:"c3s2",title:"Actuator & Điều khiển",content:`## Actuator — Điều khiển thế giới vật lý

### Relay điều khiển tải AC/DC

\`\`\`cpp
// Relay module: active LOW (phổ biến nhất)
#define RELAY1_PIN 26
#define RELAY2_PIN 27

class RelayController {
  int pins[4]; int count;
public:
  RelayController(int p[], int n) : count(n) {
    for(int i=0;i<n;i++) {
      pins[i] = p[i];
      pinMode(p[i], OUTPUT);
      digitalWrite(p[i], HIGH); // Mặc định OFF (active LOW)
    }
  }
  void on(int idx)  { if(idx<count) digitalWrite(pins[idx], LOW);  }
  void off(int idx) { if(idx<count) digitalWrite(pins[idx], HIGH); }
  void toggle(int idx) {
    if(idx<count) digitalWrite(pins[idx], !digitalRead(pins[idx]));
  }
};

int relayPins[] = {26, 27, 14, 12};
RelayController relays(relayPins, 4);
\`\`\`

### Motor DC & Stepper

\`\`\`cpp
// L298N H-Bridge: điều khiển motor DC 2 chiều
#define ENA 5   // PWM speed
#define IN1 18
#define IN2 19

void motorForward(int speed) {  // 0-255
  ledcWrite(0, speed);
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
}
void motorBackward(int speed) {
  ledcWrite(0, speed);
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
}
void motorStop() { ledcWrite(0, 0); }

// Servo Motor
#include <ESP32Servo.h>
Servo myServo;
myServo.attach(SERVO_PIN, 500, 2400); // min/max pulse us
myServo.write(90); // 0-180 độ
\`\`\`

### Màn hình OLED SSD1306

\`\`\`cpp
#include <Adafruit_SSD1306.h>
Adafruit_SSD1306 display(128, 64, &Wire, -1);

void displayData(float temp, float hum, bool alert) {
  display.clearDisplay();
  
  // Header
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0, 0);
  display.println("AIoT Monitor");
  display.drawLine(0, 10, 127, 10, WHITE);
  
  // Temperature (large)
  display.setTextSize(2);
  display.setCursor(0, 16);
  display.printf("%.1fC", temp);
  
  // Humidity
  display.setTextSize(1);
  display.setCursor(0, 40);
  display.printf("Hum: %.1f%%", hum);
  
  // Alert
  if (alert) {
    display.setCursor(70, 40);
    display.setTextColor(BLACK, WHITE); // Invert
    display.print(" ALERT ");
  }
  
  display.display();
}
\`\`\``}]},{id:"c4",title:"TinyML & Edge AI",color:"#a855f7",sections:[{id:"c4s1",title:"TensorFlow Lite Micro",content:`## TensorFlow Lite Micro (TFLM)

### Workflow TinyML đầy đủ

\`\`\`
Bước 1: Thu thập data  →  Sensor, Camera, Microphone
Bước 2: Tiền xử lý    →  Normalize, FFT, MFCC, resize
Bước 3: Train model    →  Python + TF/Keras trên PC/Colab
Bước 4: Optimize       →  Quantize (float32 → int8), prune
Bước 5: Convert        →  TFLite → C array (xxd -i)
Bước 6: Deploy         →  Copy vào Arduino library
Bước 7: Inference      →  Gọi tflite::MicroInterpreter
Bước 8: Post-process   →  Softmax, threshold, action
\`\`\`

### Train model phân loại 3 class

\`\`\`python
import tensorflow as tf
import numpy as np

# Giả sử: phân loại nhiệt độ cao/thấp/bình thường
# Dữ liệu từ 3 cảm biến: temp, hum, co2
X = np.load('sensor_data.npy')    # shape: (N, 3)
y = np.load('labels.npy')          # shape: (N,) values: 0,1,2

# Chuẩn hóa
mean, std = X.mean(0), X.std(0)
X_norm = (X - mean) / (std + 1e-8)

# Split
split = int(0.8 * len(X))
X_tr, X_val = X_norm[:split], X_norm[split:]
y_tr, y_val = y[:split], y[split:]

# Model: nhỏ gọn cho MCU
model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(3,)),
    tf.keras.layers.Dense(16, activation='relu'),
    tf.keras.layers.BatchNormalization(),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(8, activation='relu'),
    tf.keras.layers.Dense(3, activation='softmax'),
])
model.compile('adam', 'sparse_categorical_crossentropy', ['accuracy'])
model.fit(X_tr, y_tr, 50, 32, validation_data=(X_val, y_val))

# Quantize INT8 (giảm 4x size, 2-4x speed)
def representative_data():
    for i in range(100):
        yield [X_tr[i:i+1].astype(np.float32)]

cvt = tf.lite.TFLiteConverter.from_keras_model(model)
cvt.optimizations = [tf.lite.Optimize.DEFAULT]
cvt.representative_dataset = representative_data
cvt.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]
cvt.inference_input_type  = tf.int8
cvt.inference_output_type = tf.int8

tflite_model = cvt.convert()
print(f"Model size: {len(tflite_model)/1024:.1f} KB")
# Lưu để convert sang C array
with open('model.tflite', 'wb') as f: f.write(tflite_model)
\`\`\`

### Deploy TFLM trên ESP32

\`\`\`cpp
#include <TensorFlowLite_ESP32.h>
#include "model_data.h"  // từ: xxd -i model.tflite > model_data.h

// Operators cần thiết (giảm flash)
#include "tensorflow/lite/micro/micro_mutable_op_resolver.h"

using namespace tflite;

const int kArenaSize = 12 * 1024;
uint8_t tensor_arena[kArenaSize];
MicroInterpreter* interpreter = nullptr;

void setupModel() {
  const Model* model = GetModel(g_model);
  
  static MicroMutableOpResolver<5> resolver;
  resolver.AddFullyConnected();
  resolver.AddRelu();
  resolver.AddSoftmax();
  resolver.AddBatchNormalization();
  resolver.AddReshape();
  
  static MicroInterpreter interp(model, resolver, tensor_arena, kArenaSize);
  interpreter = &interp;
  
  if (interpreter->AllocateTensors() != kTfLiteOk) {
    Serial.println("AllocateTensors FAILED");
    return;
  }
  
  Serial.printf("Input: %d floats, Arena used: %d bytes\\n",
    interpreter->input(0)->bytes / sizeof(float),
    interpreter->arena_used_bytes());
}

// Norm params lưu từ training
const float MEAN[] = {25.0f, 65.0f, 600.0f};
const float STD[]  = { 8.0f, 15.0f, 200.0f};

int predict(float temp, float hum, float co2) {
  TfLiteTensor* in = interpreter->input(0);
  in->data.int8[0] = quantize((temp - MEAN[0]) / STD[0], in->params);
  in->data.int8[1] = quantize((hum  - MEAN[1]) / STD[1], in->params);
  in->data.int8[2] = quantize((co2  - MEAN[2]) / STD[2], in->params);
  
  interpreter->Invoke();
  
  TfLiteTensor* out = interpreter->output(0);
  int best = 0;
  for (int i = 1; i < 3; i++)
    if (out->data.int8[i] > out->data.int8[best]) best = i;
  return best; // 0=low, 1=normal, 2=high
}
\`\`\``},{id:"c4s2",title:"Edge Impulse & Speech AI",content:`## Edge Impulse — TinyML Platform tốt nhất

### Workflow Edge Impulse

\`\`\`
1. Tạo project: studio.edgeimpulse.com
2. Data acquisition:
   - Kết nối ESP32 qua USB + edge-impulse-daemon
   - Hoặc upload CSV/WAV file
   - Thu thập 50+ mẫu/class
3. Create Impulse:
   - Input: Time-series / Image / Raw
   - Processing block: Spectral / MFCC / MFE / Flatten
   - Learning block: Classification / Anomaly / Object detection
4. Train: Click "Start training"
   - Auto-optimize architecture
   - EON Tuner: tối ưu cho target hardware
5. Deploy:
   - Arduino library (.zip) → import vào IDE
   - C++ library (manual integration)
   - WebAssembly (test trên browser)
\`\`\`

### Nhận dạng giọng nói offline trên ESP32

\`\`\`cpp
// Sau khi export Arduino library từ Edge Impulse
#include <WakeWord_inferencing.h>
#include <driver/i2s.h>

// INMP441 Microphone (I2S digital)
#define I2S_WS  25
#define I2S_SCK 26
#define I2S_SD  22

void setupMic() {
  i2s_config_t cfg = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
    .sample_rate = 16000,
    .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT,
    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
    .communication_format = I2S_COMM_FORMAT_STAND_I2S,
    .dma_buf_count = 8, .dma_buf_len = 512,
  };
  i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
  i2s_pin_config_t pins = {
    .ws_io_num = I2S_WS, .bck_io_num = I2S_SCK,
    .data_out_num = -1,  .data_in_num = I2S_SD
  };
  i2s_set_pin(I2S_NUM_0, &pins);
}

void loop() {
  // Đọc 1 giây audio (16K samples)
  int16_t audio[16000];
  size_t bytes; 
  i2s_read(I2S_NUM_0, audio, sizeof(audio), &bytes, 1100);
  
  signal_t signal;
  numpy::signal_from_buffer(audio, 16000, &signal);
  
  ei_impulse_result_t result;
  run_classifier(&signal, &result, false);
  
  // Kết quả
  for (auto& c : result.classification) {
    if (strcmp(c.label, "hey_aiot") == 0 && c.value > 0.75f) {
      Serial.printf("Wake word! (%.1f%%)\\n", c.value * 100);
      activateAssistant();
    }
  }
}
\`\`\``},{id:"c4s3",title:"Computer Vision ESP32-CAM",content:`## Computer Vision trên ESP32-CAM

### Setup Camera

\`\`\`cpp
#include <esp_camera.h>

// AI-Thinker ESP32-CAM pinout
camera_config_t config = {
  .pin_pwdn  = 32, .pin_reset = -1,
  .pin_xclk  = 0,  .pin_sscb_sda = 26, .pin_sscb_scl = 27,
  .pin_d7=35, .pin_d6=34, .pin_d5=39, .pin_d4=38,
  .pin_d3=37, .pin_d2=36, .pin_d1=21, .pin_d0=19,
  .pin_vsync=25, .pin_href=23, .pin_pclk=22,
  .xclk_freq_hz = 20000000,
  .ledc_timer = LEDC_TIMER_0, .ledc_channel = LEDC_CHANNEL_0,
  .pixel_format = PIXFORMAT_JPEG,
  .frame_size = FRAMESIZE_QVGA,  // 320x240
  .jpeg_quality = 10,
  .fb_count = 2,
};
esp_camera_init(&config);
\`\`\`

### Phát hiện khuôn mặt tích hợp

\`\`\`cpp
#include <esp_camera.h>
#include <fd_forward.h>
#include <fr_forward.h>

// Face detection
mtmn_config_t mtmn = mtmn_init_config();
mtmn.min_face = 80;

camera_fb_t* fb = esp_camera_fb_get();
dl_matrix3du_t* img = dl_matrix3du_alloc(1, fb->width, fb->height, 3);
fmt2rgb888(fb->buf, fb->len, fb->format, img->item);

box_array_t* boxes = face_detect(img, &mtmn);
if (boxes && boxes->len > 0) {
  Serial.printf("Detected %d face(s)\\n", boxes->len);
  
  // Face recognition (nếu có enrolled faces)
  for (int i = 0; i < boxes->len; i++) {
    float confidence = boxes->score[i];
    Serial.printf("  Face %d: confidence=%.2f\\n", i, confidence);
  }
}
esp_camera_fb_return(fb);
\`\`\`

### Object Detection với YOLOv5 Nano

\`\`\`python
# Trên PC/Cloud: train YOLOv5n (nhỏ nhất, ~1.9MB)
# Rồi convert sang ONNX → TFLite int8 → deploy RPi/Jetson

import torch
model = torch.hub.load('ultralytics/yolov5', 'yolov5n')
model.export(format='tflite', int8=True, imgsz=320)
# Output: yolov5n-int8.tflite (~1.5MB)
# Chạy trên Raspberry Pi 4: ~15 FPS
# Chạy trên Jetson Nano: ~60 FPS
\`\`\``}]},{id:"c5",title:"Hệ thống AIoT",color:"#f59e0b",sections:[{id:"c5s1",title:"Node-RED & Automation",content:`## Node-RED — Visual IoT Programming

### Cài đặt

\`\`\`bash
# Cài Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -
sudo apt install nodejs -y

# Cài Node-RED
sudo npm install -g --unsafe-perm node-red
node-red  # Truy cập: http://localhost:1880

# Cài dashboard UI
npm install @flowfuse/node-red-dashboard
\`\`\`

### Flow mẫu: Smart Home Controller

\`\`\`json
[
  {"type":"mqtt in","topic":"home/#","broker":"local-broker"},
  {"type":"json","name":"Parse JSON"},
  {"type":"function","name":"Check thresholds","func":
    "const t=msg.payload.temp, h=msg.payload.hum;\\n
     msg.alert = (t>35||h>85) ? {level:'high',msg:'Overtemp!'} : null;\\n
     return msg;"
  },
  {"type":"ui_gauge","label":"Nhiệt độ","min":0,"max":50},
  {"type":"telegram sender","name":"Alert Telegram"}
]
\`\`\`

### Automation Rules Engine

\`\`\`javascript
// Function node: Rule-based automation
const now = new Date();
const hour = now.getHours();
const temp = msg.payload.temperature;
const hum  = msg.payload.humidity;
const soil = msg.payload.soil_moisture;

const rules = [
  // Smart irrigation
  { cond: soil < 30 && hour >= 6 && hour <= 20,
    action: { device: 'pump1', cmd: 'on', duration: 30 } },
  // Smart HVAC
  { cond: temp > 28,
    action: { device: 'fan1', speed: Math.min(100, (temp-28)*20) } },
  // Alert
  { cond: temp > 38 || hum > 90,
    action: { telegram: "ALERT: " + (temp>38?"Overtemp":"High hum") } },
];

const triggered = rules.filter(r => r.cond).map(r => r.action);
msg.actions = triggered;
return msg;
\`\`\``},{id:"c5s2",title:"Grafana & InfluxDB",content:`## Time-series Stack: Telegraf + InfluxDB + Grafana

### Kiến trúc TIG Stack

\`\`\`
ESP32 → MQTT → [Telegraf] → [InfluxDB v2] → [Grafana]
                    |              |               |
              MQTT Consumer   Time-series DB   Dashboard
\`\`\`

### InfluxDB Line Protocol (ghi từ ESP32)

\`\`\`cpp
#include <InfluxDbClient.h>

InfluxDBClient influx(
  "http://192.168.1.100:8086",
  "my-org", "sensors",
  "my-token"
);

void sendToInflux(float temp, float hum, String location) {
  Point p("environment");
  p.addTag("device", "esp32-001");
  p.addTag("location", location);
  p.addField("temperature", temp);
  p.addField("humidity",    hum);
  p.addField("rssi",        (long)WiFi.RSSI());
  p.setTime(WritePrecision::S);  // Unix seconds
  
  if (!influx.writePoint(p))
    Serial.println("Write error: " + influx.getLastErrorMessage());
}
\`\`\`

### Telegraf Config: MQTT → InfluxDB

\`\`\`toml
[[inputs.mqtt_consumer]]
  servers = ["tcp://localhost:1883"]
  topics  = ["home/+/+", "farm/+/+", "factory/+/+"]
  data_format = "json"
  json_time_key = "timestamp"
  json_time_format = "unix"
  json_string_fields = ["device_id", "location"]
  tag_keys = ["device_id", "location", "type"]

[[outputs.influxdb_v2]]
  urls   = ["http://localhost:8086"]
  token  = "your-api-token"
  org    = "aiot-edu"
  bucket = "sensors"
\`\`\`

### Grafana Queries (Flux)

\`\`\`flux
// Query: nhiệt độ trung bình theo giờ
from(bucket: "sensors")
  |> range(start: -24h)
  |> filter(fn: (r) => r._measurement == "environment")
  |> filter(fn: (r) => r._field == "temperature")
  |> aggregateWindow(every: 1h, fn: mean, createEmpty: false)
  |> yield(name: "hourly_avg")

// Query: phát hiện anomaly (>3σ)
|> stddev() |> map(fn: (r) => ({r with is_anomaly: r._value > r.mean + 3*r.stddev}))
\`\`\``}]},{id:"c6",title:"FPGA cho AIoT",color:"#f472b6",sections:[{id:"c6s1",title:"Giới thiệu FPGA",content:`## FPGA — Field Programmable Gate Array

### Kiến trúc FPGA

FPGA bao gồm các khối có thể cấu hình lại:
- **CLB** (Configurable Logic Block): LUT + Flip-flop
- **Block RAM**: SRAM nhúng, 18Kbit mỗi block
- **DSP slice**: Multiplier + Accumulator (perfect for AI)
- **I/O Block**: Giao tiếp với ngoại vi
- **PLL/MMCM**: Clock management

\`\`\`
So sánh thực thi CNN:
CPU (ARM Cortex-M4 @ 168MHz):  ~50ms/inference
ESP32 (dual 240MHz):             ~15ms/inference
FPGA (Artix-7, optimized):      ~1ms/inference
NVIDIA Jetson Nano GPU:          ~2ms/inference
\`\`\`

### Verilog cơ bản

\`\`\`verilog
// Module: LED blink với clock divider
module blink #(
  parameter CLK_HZ  = 27_000_000,  // Tang Nano 9K
  parameter BLINK_HZ = 1           // 1Hz blink
)(
  input  wire clk, rst_n,
  output reg  led
);
  localparam COUNT_MAX = CLK_HZ / BLINK_HZ / 2 - 1;
  reg [$clog2(COUNT_MAX)-1:0] cnt;  // Đủ bit tự động

  always @(posedge clk or negedge rst_n) begin
    if (!rst_n) begin
      cnt <= 0; led <= 0;
    end else if (cnt == COUNT_MAX) begin
      cnt <= 0; led <= ~led;
    end else
      cnt <= cnt + 1;
  end
endmodule
\`\`\`

### Systolic Array cho Matrix Multiply (CNN core)

\`\`\`verilog
// Processing Element: 1 MAC operation
module pe #(parameter W=8)(
  input  clk, rst,
  input  signed [W-1:0] a_in, b_in,
  input  signed [2*W+15:0] c_in,   // Accumulated sum
  output reg signed [W-1:0] a_out, b_out,
  output reg signed [2*W+15:0] c_out
);
  always @(posedge clk) begin
    if (rst) c_out <= 0;
    else     c_out <= c_in + a_in * b_in;  // MAC
    a_out <= a_in;  // Pass through (systolic)
    b_out <= b_in;
  end
endmodule

// 4×4 systolic array = 16 MAC hoạt động song song
// Throughput: 16 multiply-adds per clock cycle
\`\`\``}]},{id:"c7",title:"AIoT Thực tiễn & Khởi nghiệp",color:"#ff6b35",sections:[{id:"c7s1",title:"Mô hình kinh doanh AIoT",content:`## Khởi nghiệp với AIoT

### Market Size 2024–2030

| Phân khúc | Giá trị 2024 | CAGR | Giá trị 2030 |
|-----------|-------------|------|-------------|
| Global AIoT | $61.5B | 34.7% | $407B |
| Smart Agriculture | $13.8B | 23.1% | $47.3B |
| Industrial IoT | $110B | 22.8% | $300B |
| Smart Home | $83B | 26.9% | $338B |
| Healthcare IoT | $28B | 25.9% | $107B |

### Mô hình kinh doanh phổ biến

**1. Product as a Service (PaaS)**
\`\`\`
Bán thiết bị AIoT + thu phí subscription cho cloud/AI
Ví dụ: Máy lọc nước thông minh $50 + $5/tháng dashboard
\`\`\`

**2. Data-as-a-Service (DaaS)**
\`\`\`
Triển khai sensor network, bán data analytics cho doanh nghiệp
Ví dụ: Mạng lưới cảm biến chất lượng không khí đô thị
\`\`\`

**3. Maintenance as a Service**
\`\`\`
Predictive maintenance: phát hiện lỗi trước khi xảy ra
T�nh phí theo % downtime đã giảm được
\`\`\`

**4. Platform Business**
\`\`\`
Xây nền tảng kết nối manufacturers với end users
Thu phí marketplace transaction
\`\`\`

### Startup AIoT Việt Nam thành công

- **Agriscaping**: Smart greenhouse, series A $2M (2023)
- **GreenTech**: Sensor mạng lưới nước sạch nông thôn
- **MedBot**: Thiết bị theo dõi bệnh nhân tại nhà

### Lộ trình từ sinh viên đến startup

\`\`\`
Năm 3: Lab courses → Prototype hardware
Năm 4: NCKH → MVP (Minimum Viable Product)
T��t nghiệp: Tham gia incubator (VinUni, BK, FPT)
Năm 1 startup: Seed funding từ angel investors
Năm 2-3: Series A nếu PMF (Product-Market Fit)
\`\`\``},{id:"c7s2",title:"Bảo mật trong AIoT",content:`## Bảo mật AIoT — Thách thức và Giải pháp

### Các vector tấn công phổ biến

| Tấn công | Mô tả | Phòng chống |
|---------|-------|------------|
| Replay attack | Ghi lại và phát lại packet MQTT | Timestamp + HMAC |
| MITM | Chặn giữa device và broker | TLS/SSL |
| Firmware tampering | Thay firmware độc hại | Secure boot + signing |
| Physical access | Đọc Flash qua JTAG | Flash encryption |
| DoS | Flood MQTT broker | Rate limiting + auth |
| Model extraction | Copy AI model từ device | Model encryption |

### Secure MQTT với TLS

\`\`\`cpp
#include <WiFiClientSecure.h>
#include <PubSubClient.h>

// Certificates (từ CA của bạn)
const char* CA_CERT = R"(
-----BEGIN CERTIFICATE-----
MIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjAN...
-----END CERTIFICATE-----
)";

WiFiClientSecure wifiClient;
PubSubClient mqtt(wifiClient);

void setupSecureMQTT() {
  wifiClient.setCACert(CA_CERT);
  // Mutual TLS (optional but recommended)
  wifiClient.setCertificate(DEVICE_CERT);
  wifiClient.setPrivateKey(DEVICE_KEY);
  
  mqtt.setServer("mqtt.yourdomain.com", 8883); // Port 8883 = TLS
}
\`\`\`

### Firmware Over-the-Air (OTA) an toàn

\`\`\`cpp
#include <ArduinoOTA.h>
#include <esp_ota_ops.h>

// Verify firmware signature trước khi apply
void setupSecureOTA() {
  ArduinoOTA.setPassword("secure-ota-password");
  
  ArduinoOTA.onStart([]() {
    Serial.println("OTA Start - verifying...");
  });
  
  ArduinoOTA.onEnd([]() {
    // Verify SHA256 của firmware mới
    esp_app_desc_t* app_desc = esp_ota_get_app_description();
    Serial.printf("New firmware: v%s\\n", app_desc->version);
  });
  
  ArduinoOTA.begin();
}
\`\`\`

### Differential Privacy cho Federated Learning

Khi nhiều thiết bị IoT train model chung mà không chia sẻ dữ liệu thô:
\`\`\`python
import tensorflow_privacy as tfp

# Thêm Gaussian noise vào gradient
optimizer = tfp.DPKerasSGDOptimizer(
    l2_norm_clip=1.0,
    noise_multiplier=0.1,   # Epsilon-delta privacy
    num_microbatches=32,
    learning_rate=0.01
)
model.compile(optimizer=optimizer, loss='mse')
# Dữ liệu không rời thiết bị, chỉ gradient (đã nhiễu) được gửi lên
\`\`\``}]},,{id:"c8",title:"Deep Learning cho AIoT",color:"#2dd4bf",sections:[{id:"c8s1",title:"CNN & Transfer Learning",content:`## Convolutional Neural Network cho Edge AI

### Kiến trúc CNN cơ bản

\`\`\`
Input Image (224×224×3)
  → Conv2D(32, 3×3) + ReLU + BatchNorm
  → MaxPool(2×2)                           → 112×112×32
  → Conv2D(64, 3×3) + ReLU + BatchNorm
  → MaxPool(2×2)                           → 56×56×64
  → Conv2D(128, 3×3) + ReLU
  → GlobalAvgPool                          → 128
  → Dense(64) + ReLU + Dropout(0.3)
  → Dense(num_classes) + Softmax
\`\`\`

### Transfer Learning — Tận dụng model đã train

\`\`\`python
import tensorflow as tf

# MobileNetV3 Small — tối ưu cho Edge AI
base = tf.keras.applications.MobileNetV3Small(
    input_shape=(96, 96, 3),
    include_top=False,
    weights='imagenet'
)
base.trainable = False  # Freeze base layers

model = tf.keras.Sequential([
    base,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(5, activation='softmax')  # 5 classes
])

model.compile(
    optimizer=tf.keras.optimizers.Adam(0.001),
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Fine-tuning: mở một số layers cuối
base.trainable = True
fine_tune_at = 80  # Freeze đến layer 80
for layer in base.layers[:fine_tune_at]:
    layer.trainable = False

model.compile(
    optimizer=tf.keras.optimizers.Adam(1e-5),  # LR nhỏ hơn
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)
\`\`\`

### Model Comparison cho Edge Deployment

| Model | Top-1 Acc | Size | Latency (Cortex-M55) | Latency (ESP32-S3) |
|-------|-----------|------|---------------------|------------------|
| MobileNetV1 | 70.9% | 16MB | 45ms | 320ms |
| MobileNetV2 | 71.8% | 14MB | 38ms | 280ms |
| MobileNetV3-Small | 67.4% | 3.4MB | 8ms | 65ms |
| EfficientNet-Lite0 | 75.1% | 4.4MB | 11ms | 85ms |
| MCUNet | 70.7% | 1.0MB | 4ms | 30ms |
| **TinyML custom** | 85%+ | <200KB | <2ms | <15ms |

### Pruning & Quantization Pipeline

\`\`\`python
import tensorflow_model_optimization as tfmot

# 1. Pruning: xóa 50% weights nhỏ
pruning_params = {
    'pruning_schedule': tfmot.sparsity.keras.PolynomialDecay(
        initial_sparsity=0.0, final_sparsity=0.5,
        begin_step=0, end_step=1000
    )
}
model_pruned = tfmot.sparsity.keras.prune_low_magnitude(
    model, **pruning_params
)

# 2. Quantization Aware Training (QAT)
model_qat = tfmot.quantization.keras.quantize_model(model)
model_qat.compile(optimizer='adam', loss='mse')
model_qat.fit(X_train, y_train, epochs=5)

# 3. Convert pipeline
converter = tf.lite.TFLiteConverter.from_keras_model(model_qat)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
converter.target_spec.supported_ops = [
    tf.lite.OpsSet.TFLITE_BUILTINS_INT8
]
converter.inference_input_type  = tf.int8
converter.inference_output_type = tf.int8

tflite_model = converter.convert()
print(f"Original: {model.count_params()*4/1024:.1f} KB")
print(f"Optimized: {len(tflite_model)/1024:.1f} KB")
\`\`\``},{id:"c8s2",title:"LSTM & Time-series",content:`## LSTM cho dữ liệu chuỗi thời gian IoT

### Tại sao LSTM cho IoT?

Dữ liệu sensor IoT có tính **temporal dependency**: nhiệt độ lúc 14:00 phụ thuộc vào 13:00, 12:00... LSTM học được pattern này, RNN và Dense Network không thể.

### Kiến trúc LSTM cho sensor prediction

\`\`\`python
import numpy as np
import tensorflow as tf

# Dữ liệu: chuỗi thời gian sensor 4 features × 24h
# Shape: (samples, time_steps, features)
LOOKBACK = 48    # Nhìn lại 48 điểm (24h nếu 30min/sample)
FEATURES = 4     # temp, hum, pressure, co2
HORIZON  = 12    # Dự báo 12 điểm tới

def create_sequences(data, lookback=48, horizon=12):
    X, y = [], []
    for i in range(len(data) - lookback - horizon + 1):
        X.append(data[i:i+lookback])
        y.append(data[i+lookback:i+lookback+horizon, 0])  # Predict temp
    return np.array(X), np.array(y)

# Model
inputs = tf.keras.Input(shape=(LOOKBACK, FEATURES))

# Bidirectional LSTM cho accuracy tốt hơn
x = tf.keras.layers.Bidirectional(
    tf.keras.layers.LSTM(64, return_sequences=True))(inputs)
x = tf.keras.layers.Dropout(0.2)(x)
x = tf.keras.layers.LSTM(32)(x)
x = tf.keras.layers.Dense(64, activation='relu')(x)
x = tf.keras.layers.Dropout(0.2)(x)
output = tf.keras.layers.Dense(HORIZON)(x)

model = tf.keras.Model(inputs, output)
model.compile(
    optimizer=tf.keras.optimizers.Adam(0.001),
    loss='mse',
    metrics=['mae']
)

# Training
history = model.fit(
    X_train, y_train,
    epochs=100, batch_size=32,
    validation_split=0.2,
    callbacks=[
        tf.keras.callbacks.EarlyStopping(patience=15, restore_best_weights=True),
        tf.keras.callbacks.ReduceLROnPlateau(patience=7, factor=0.5)
    ]
)
\`\`\`

### Lightweight LSTM cho MCU (TFLite)

\`\`\`python
# Model nhỏ hơn cho deployment trên Pi/Jetson
inputs = tf.keras.Input(shape=(LOOKBACK, FEATURES))
x = tf.keras.layers.LSTM(16, return_sequences=False)(inputs)
x = tf.keras.layers.Dense(8, activation='relu')(x)
output = tf.keras.layers.Dense(HORIZON)(x)

# Quantize
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
tflite = converter.convert()
# Size: ~8KB, latency RPi4: ~2ms, Jetson: <1ms
\`\`\`

### Anomaly Detection với LSTM Autoencoder

\`\`\`python
# Encoder
enc_inputs = tf.keras.Input(shape=(LOOKBACK, FEATURES))
encoded = tf.keras.layers.LSTM(32, return_sequences=False)(enc_inputs)

# Decoder (phải tái tạo sequence đầu vào)
decoded = tf.keras.layers.RepeatVector(LOOKBACK)(encoded)
decoded = tf.keras.layers.LSTM(32, return_sequences=True)(decoded)
decoded = tf.keras.layers.TimeDistributed(
    tf.keras.layers.Dense(FEATURES))(decoded)

lstm_ae = tf.keras.Model(enc_inputs, decoded)
lstm_ae.compile('adam', 'mse')

# Train chỉ trên normal data
lstm_ae.fit(X_normal, X_normal, epochs=50)

# Threshold từ validation set
val_pred = lstm_ae.predict(X_val)
errors = np.mean(np.mean((X_val - val_pred)**2, axis=2), axis=1)
threshold = np.percentile(errors, 99)  # 99th percentile
print(f"Anomaly threshold: {threshold:.4f}")
\`\`\``},{id:"c8s3",title:"Reinforcement Learning IoT",content:`## Reinforcement Learning cho IoT Control

### RL trong AIoT — Ứng dụng thực tế

- **Smart HVAC**: RL tối ưu nhiệt độ phòng, giảm 20-30% điện năng
- **Smart Irrigation**: Q-learning học lịch tưới tối ưu theo thời tiết  
- **Traffic Control**: Multi-agent RL điều khiển đèn giao thông
- **Robot Navigation**: DQN/PPO cho autonomous navigation

### Q-Learning cơ bản cho Smart Irrigation

\`\`\`python
import numpy as np
from collections import defaultdict

class IrrigationEnv:
    """Môi trường tưới cây đơn giản"""
    def __init__(self):
        self.soil_moisture = 50.0   # % (0-100)
        self.hour          = 6      # 6am start
        self.day           = 0

    def step(self, action):
        # action: 0=no water, 1=water 10min, 2=water 20min
        water_amount = [0, 10, 20][action]
        cost         = [0, 1, 2][action]   # Water cost

        # Cập nhật môi trường
        evaporation = 0.5 * (1 + np.random.normal(0, 0.1))
        self.soil_moisture = max(0, min(100,
            self.soil_moisture - evaporation + water_amount * 0.8))
        self.hour = (self.hour + 1) % 24

        # Reward function
        if self.soil_moisture < 20:
            reward = -10   # Khô hạn = rất xấu
        elif self.soil_moisture > 80:
            reward = -2    # Ngập úng = xấu
        elif 40 <= self.soil_moisture <= 70:
            reward = 5 - cost  # Tối ưu - chi phí nước
        else:
            reward = 1 - cost

        done = (self.day >= 30)
        state = (int(self.soil_moisture/10), self.hour//6)
        return state, reward, done

    def reset(self):
        self.soil_moisture = np.random.uniform(30, 70)
        self.hour = 6; self.day = 0
        return (int(self.soil_moisture/10), 1)

# Q-Learning Agent
Q = defaultdict(lambda: np.zeros(3))
lr, gamma, eps = 0.1, 0.95, 1.0

env = IrrigationEnv()
for episode in range(5000):
    state = env.reset()
    total_reward = 0

    for _ in range(24 * 30):  # 30 ngày
        # Epsilon-greedy action selection
        if np.random.random() < eps:
            action = np.random.randint(3)
        else:
            action = np.argmax(Q[state])

        next_state, reward, done = env.step(action)
        
        # Q-update (Bellman equation)
        Q[state][action] += lr * (
            reward + gamma * np.max(Q[next_state]) - Q[state][action]
        )
        state = next_state; total_reward += reward
        if done: break

    eps = max(0.01, eps * 0.995)  # Decay epsilon

print(f"Learned policy — Q-table size: {len(Q)} states")
# Deploy: lookup Q-table trên Raspberry Pi / ESP32
\`\`\``}]},{id:"c9",title:"IoT Protocols Nâng cao",color:"#00d4ff",sections:[{id:"c9s1",title:"LoRaWAN & LPWAN",content:`## LoRaWAN — IoT Tầm xa

### Kiến trúc LoRaWAN

\`\`\`
[End Device]  ──LoRa RF──  [Gateway]  ──IP──  [Network Server]  ──  [App Server]
 ESP32+SX1276              RAK7244          The Things Network        Your Backend
\`\`\`

### LoRaWAN Classes

| Class | Downlink | Power | Use case |
|-------|---------|-------|---------|
| A | Chỉ sau TX | Cực thấp | Sensor node, tracker |
| B | Scheduled slots | Thấp | Actuator |
| C | Continuous RX | Cao | Gateway, mains-powered |

### Join Procedure (OTAA — Over-the-Air Activation)

\`\`\`cpp
// Dùng MCCI LoRaWAN LMIC library
#include <lmic.h>
#include <hal/hal.h>

// Keys từ The Things Network Console
static const u1_t PROGMEM APPEUI[8]  = { ... };
static const u1_t PROGMEM DEVEUI[8]  = { ... };
static const u1_t PROGMEM APPKEY[16] = { ... };

// Payload encoding: Cayenne LPP format
#include <CayenneLPP.h>
CayenneLPP lpp(51);  // 51 byte max payload

void buildPayload(float temp, float hum, float lat, float lng) {
    lpp.reset();
    lpp.addTemperature(1, temp);        // Channel 1
    lpp.addRelativeHumidity(2, hum);    // Channel 2
    lpp.addGPS(3, lat, lng, 0);         // Channel 3
}

// Gửi lên LoRaWAN (DR0 = SF12 = max range)
LMIC_setDrTxpow(DR_SF10, 14);  // SF10, 14dBm
\`\`\`

### Duty Cycle & Fair Use Policy

\`\`\`
EU868 (dùng tại VN): Duty cycle 1%
→ Nếu TX 1 giây → phải chờ 99 giây trước TX tiếp theo

SF7  BW125: ToA ≈ 56ms  → có thể gửi ~17.8 lần/phút
SF10 BW125: ToA ≈ 371ms → có thể gửi ~2.7 lần/phút
SF12 BW125: ToA ≈ 1318ms → có thể gửi ~0.76 lần/phút

T��i ưu: SF7 cho node gần gateway, SF12 cho node xa
ADR (Adaptive Data Rate): Tự động chọn SF tối ưu
\`\`\``},{id:"c9s2",title:"OPC-UA & Industrial IoT",content:`## OPC-UA — Giao thức IIoT chuẩn

### OPC-UA là gì?

**OPC-UA** (Unified Architecture): giao thức IIoT chuẩn công nghiệp ISO 62541. Thay thế OPC Classic (Windows-only) bằng platform-neutral, secure, với semantic data model.

### So sánh MQTT vs OPC-UA

| | MQTT | OPC-UA |
|--|------|--------|
| Mô hình | Pub/Sub đơn giản | Client/Server + Pub/Sub |
| Data model | Flat topics | Hierarchical address space |
| Security | TLS + auth | X.509 certs + signed/encrypted |
| Discovery | Không | Auto-discovery |
| Semantic | Không | Information model (type system) |
| Phù hợp | Consumer IoT | Industrial automation |

### Python OPC-UA Server (trên Raspberry Pi)

\`\`\`python
from opcua import Server
from datetime import datetime
import random, time

server = Server()
server.set_endpoint("opc.tcp://0.0.0.0:4840/freeopcua/server/")
server.set_server_name("AIoT Factory Server")

# Namespace
ns = server.register_namespace("http://aiot.dlu.edu.vn")
objects = server.get_objects_node()

# Tạo object "Factory"
factory = objects.add_object(ns, "Factory")
machine1 = factory.add_object(ns, "Machine1")

# Variables
temperature = machine1.add_variable(ns, "Temperature", 25.0)
vibration   = machine1.add_variable(ns, "Vibration", 0.1)
status      = machine1.add_variable(ns, "Status", "Running")
# Writable
temperature.set_writable()

server.start()
print("OPC-UA server running at opc.tcp://localhost:4840/")

try:
    while True:
        # Cập nhật giá trị từ sensor thực
        temperature.set_value(read_temperature())
        vibration.set_value(read_vibration())
        time.sleep(1)
finally:
    server.stop()
\`\`\`

### ESP32 → OPC-UA qua MQTT Bridge

\`\`\`
ESP32 sensor → MQTT broker → [Bridge service] → OPC-UA server → SCADA/HMI

Bridge code (Python):
import paho.mqtt.client as mqtt
from opcua import Client

def on_mqtt_message(client, userdata, msg):
    data = json.loads(msg.payload)
    # Write to OPC-UA node
    opc_temp_node.set_value(data["temperature"])

mqtt_client.subscribe("factory/+/sensors")
mqtt_client.on_message = on_mqtt_message
\`\`\``},{id:"c9s3",title:"WebSocket & Real-time Dashboard",content:`## WebSocket cho Real-time IoT Dashboard

### So sánh polling vs WebSocket vs SSE

| | HTTP Polling | WebSocket | Server-Sent Events |
|--|-------------|-----------|-------------------|
| Direction | Client → Server | Bidirectional | Server → Client |
| Latency | ~polling interval | <5ms | <5ms |
| Overhead | Header mỗi request | Minimal | Minimal |
| Complexity | Thấp | Trung bình | Thấp |
| Browser support | Tốt | Tốt | Tốt |
| Phù hợp | Snapshot data | Control + data | Sensor stream |

### WebSocket Server trên ESP32

\`\`\`cpp
#include <WiFi.h>
#include <WebSocketsServer.h>
#include <ArduinoJson.h>

WebSocketsServer ws(81);  // Port 81

void onWebSocketEvent(uint8_t clientId, WStype_t type,
                      uint8_t* payload, size_t length) {
    if (type == WStype_CONNECTED) {
        Serial.printf("Client %d connected\\n", clientId);
        // Gửi welcome + current state
        JsonDocument doc;
        doc["type"] = "welcome";
        doc["temp"] = readTemp();
        char buf[100]; serializeJson(doc, buf);
        ws.sendTXT(clientId, buf);
    }
    else if (type == WStype_TEXT) {
        // Nhận lệnh từ dashboard
        JsonDocument cmd;
        deserializeJson(cmd, payload, length);
        if (cmd["type"] == "set_relay")
            digitalWrite(RELAY_PIN, cmd["state"].as<bool>());
    }
}

// Broadcast sensor data mỗi 500ms
void broadcastSensorData() {
    static unsigned long last = 0;
    if (millis() - last < 500) return;
    last = millis();

    JsonDocument doc;
    doc["type"] = "sensor_data";
    doc["temp"] = readTemp();
    doc["hum"]  = readHum();
    doc["ts"]   = millis();
    char buf[150]; serializeJson(doc, buf);
    ws.broadcastTXT(buf);
}

void setup() {
    WiFi.begin(SSID, PASS);
    while(WiFi.status()!=WL_CONNECTED) delay(500);
    ws.begin();
    ws.onEvent(onWebSocketEvent);
}

void loop() {
    ws.loop();
    broadcastSensorData();
}
\`\`\`

### React/HTML Dashboard nhận WebSocket

\`\`\`javascript
// Real-time dashboard JavaScript
const ws = new WebSocket('ws://ESP32_IP:81');
const history = { temp:[], hum:[], ts:[] };
const MAX_POINTS = 60;  // 30 giây (500ms interval)

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type !== 'sensor_data') return;

    // Cập nhật UI
    document.getElementById('temp').textContent = data.temp.toFixed(1);
    document.getElementById('hum').textContent  = data.hum.toFixed(1);

    // Lưu lịch sử
    history.temp.push(data.temp);
    history.hum.push(data.hum);
    history.ts.push(new Date(data.ts));
    if (history.temp.length > MAX_POINTS) {
        history.temp.shift(); history.hum.shift(); history.ts.shift();
    }

    // Cập nhật Chart.js
    chart.data.labels = history.ts;
    chart.data.datasets[0].data = history.temp;
    chart.update('none');  // 'none' = không animate để smooth
};

// Gửi lệnh điều khiển
function setRelay(state) {
    ws.send(JSON.stringify({ type:'set_relay', state }));
}
\`\`\``}]},{id:"c10",title:"MLOps & DevOps cho AIoT",color:"#f59e0b",sections:[{id:"c10s1",title:"CI/CD cho Firmware IoT",content:`## CI/CD Pipeline cho IoT Firmware

### Vì sao cần CI/CD cho IoT?

- **100+ thiết bị** ngoài thực địa: update thủ công bất khả thi
- **Firmware bug** ảnh hưởng toàn bộ fleet
- **Testing** trước khi deploy lên production device
- **Rollback** nhanh khi có vấn đề

### GitHub Actions Pipeline

\`\`\`yaml
# .github/workflows/firmware-ci.yml
name: Firmware CI/CD

on:
  push:
    branches: [main]
    paths: ['firmware/**']

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup PlatformIO
        run: pip install platformio

      - name: Build firmware
        run: pio run --project-dir firmware

      - name: Run unit tests (native)
        run: pio test --environment native --project-dir firmware

      - name: Static analysis
        run: pio check --project-dir firmware

      - name: Upload firmware artifact
        uses: actions/upload-artifact@v4
        with:
          name: firmware-$\${{ github.sha }}
          path: firmware/.pio/build/esp32dev/firmware.bin

  deploy-staging:
    needs: build-and-test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to staging devices (OTA)
        run: |
          curl -X POST https://ota-server.aiot.dlu.edu.vn/deploy \\
            -H "Authorization: Bearer $\${{ secrets.OTA_TOKEN }}" \\
            -F "firmware=@firmware.bin" \\
            -F "group=staging" \\
            -F "rollout_pct=10"  # 10% rollout trước
\`\`\`

### OTA Server với versioning

\`\`\`python
# Flask OTA server
from flask import Flask, request, jsonify
import hashlib, os

app = Flask(__name__)
FIRMWARE_DIR = "/var/firmware"

@app.route('/api/ota/check', methods=['GET'])
def check_update():
    device_version = request.args.get('version')
    device_group   = request.args.get('group', 'stable')

    latest = get_latest_version(device_group)
    if latest['version'] != device_version:
        return jsonify({
            'update_available': True,
            'version': latest['version'],
            'url': f"/api/ota/download/{latest['filename']}",
            'sha256': latest['sha256'],
            'size': latest['size'],
            'changelog': latest['changelog']
        })
    return jsonify({'update_available': False})

@app.route('/api/ota/download/<filename>')
def download_firmware(filename):
    return send_from_directory(FIRMWARE_DIR, filename)
\`\`\`

### ESP32 OTA Client (check + update)

\`\`\`cpp
#include <HTTPClient.h>
#include <Update.h>
#include <ArduinoJson.h>

const char* OTA_SERVER = "https://ota.aiot.dlu.edu.vn";
const char* CURRENT_VER = "1.2.3";

void checkAndUpdate() {
    HTTPClient http;
    String url = String(OTA_SERVER) + "/api/ota/check"
                 + "?version=" + CURRENT_VER
                 + "&group=stable";
    http.begin(url);

    if (http.GET() == 200) {
        JsonDocument doc;
        deserializeJson(doc, http.getString());

        if (doc["update_available"].as<bool>()) {
            String newVer = doc["version"];
            String dlUrl  = String(OTA_SERVER) + doc["url"].as<String>();
            Serial.printf("Update: %s → %s\\n", CURRENT_VER, newVer.c_str());
            performOTA(dlUrl);
        }
    }
    http.end();
}

void performOTA(String url) {
    HTTPClient http;
    http.begin(url);
    int code = http.GET();
    if (code == 200) {
        int contentLen = http.getSize();
        WiFiClient* stream = http.getStreamPtr();
        Update.begin(contentLen);
        Update.writeStream(*stream);
        if (Update.end()) {
            Serial.println("OTA Success! Rebooting...");
            ESP.restart();
        }
    }
}
\`\`\``},{id:"c10s2",title:"Docker & Edge Deployment",content:`## Docker cho Edge Computing

### Docker trên Raspberry Pi / Jetson

\`\`\`bash
# Cài Docker trên Raspberry Pi OS
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
sudo usermod -aG docker pi

# Test
docker run hello-world
docker run --rm arm64v8/python:3.11-slim python --version
\`\`\`

### Docker Compose cho IoT Stack

\`\`\`yaml
# docker-compose.yml — Full IoT stack
version: '3.8'

services:
  mosquitto:
    image: eclipse-mosquitto:2
    ports: ["1883:1883", "9001:9001"]
    volumes:
      - ./mosquitto/config:/mosquitto/config
      - mosquitto-data:/mosquitto/data
    restart: unless-stopped

  influxdb:
    image: influxdb:2.7-alpine
    ports: ["8086:8086"]
    volumes: [influxdb-data:/var/lib/influxdb2]
    environment:
      DOCKER_INFLUXDB_INIT_MODE: setup
      DOCKER_INFLUXDB_INIT_USERNAME: admin
      DOCKER_INFLUXDB_INIT_PASSWORD: aiot2025!
      DOCKER_INFLUXDB_INIT_ORG: aiot-edu
      DOCKER_INFLUXDB_INIT_BUCKET: sensors

  grafana:
    image: grafana/grafana:10-ubuntu
    ports: ["3000:3000"]
    volumes: [grafana-data:/var/lib/grafana]
    depends_on: [influxdb]

  node-red:
    image: nodered/node-red:3
    ports: ["1880:1880"]
    volumes: [nodered-data:/data]
    depends_on: [mosquitto, influxdb]

  ai-inference:
    build: ./ai-service
    ports: ["5000:5000"]
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia   # Nếu có GPU (Jetson)
              count: 1
              capabilities: [gpu]

volumes:
  mosquitto-data: influxdb-data: grafana-data: nodered-data:
\`\`\`

### AI Inference Microservice

\`\`\`python
# ai-service/app.py
from flask import Flask, request, jsonify
import numpy as np
import tflite_runtime.interpreter as tflite
import paho.mqtt.client as mqtt

app = Flask(__name__)

# Load TFLite model
interpreter = tflite.Interpreter('model.tflite')
interpreter.allocate_tensors()
input_details  = interpreter.get_input_details()
output_details = interpreter.get_output_details()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['features']
    input_data = np.array(data, dtype=np.float32).reshape(
        input_details[0]['shape']
    )
    interpreter.set_tensor(input_details[0]['index'], input_data)
    interpreter.invoke()
    output = interpreter.get_tensor(output_details[0]['index'])
    return jsonify({
        'prediction': output.tolist(),
        'class': int(np.argmax(output)),
        'confidence': float(np.max(output))
    })

# MQTT subscriber + auto inference
def on_sensor_data(client, userdata, msg):
    data = json.loads(msg.payload)
    features = extract_features(data)
    result = predict_internal(features)
    if result['confidence'] > 0.8:
        client.publish('ai/inference/result', json.dumps(result))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
\`\`\``}]},{id:"c11",title:"AIoT trong các lĩnh vực",color:"#ff6b35",sections:[{id:"c11s1",title:"Smart Agriculture Đà Lạt",content:`## Smart Agriculture cho nông nghiệp Đà Lạt

### Thách thức đặc thù Đà Lạt

Đà Lạt có khí hậu đặc biệt: sương mù buổi sáng, nhiệt độ dao động 10–22°C, địa hình đồi núi phức tạp. AIoT giải quyết:

- **Sương mù làm nhiễu** cảm biến optical → dùng cảm biến capacitive
- **Địa hình phân tán** → LoRa thay WiFi cho kết nối tầm xa
- **Nhiệt độ thấp ban đêm** → AI dự báo sương giá
- **Cây đặc thù** (dâu tây, rau hydroponics, hoa cắt cành) → model riêng

### Hệ thống IoT cho Nông trại Dâu tây

\`\`\`
Sensor Node (mỗi luống 20m²):
├── Soil moisture (capacitive) × 2
├── Soil temperature (DS18B20)
├── Air temperature + humidity (BME280)
├── Light intensity (BH1750)
└── ESP32 + LoRa SX1276 → Gateway

Gateway Node (1 node/5000m²):
├── Raspberry Pi 4
├── LoRa gateway (RAK2287)
├── 4G/WiFi uplink
└── Edge AI: disease detection, irrigation decision

Cloud:
├── InfluxDB time-series storage
├── Grafana dashboard (nông dân xem trên điện thoại)
├── AI model training pipeline
└── Weather API integration (OpenWeatherMap)
\`\`\`

### AI Disease Detection cho Dâu tây

\`\`\`python
# Dataset: ảnh lá dâu tây 5 loại bệnh phổ biến tại Đà Lạt
# 1. Powdery mildew (phấn trắng)
# 2. Gray mold / Botrytis (mốc xám)
# 3. Leaf scorch (cháy lá)
# 4. Angular leaf spot (đốm góc cạnh)
# 5. Healthy (khỏe mạnh)

CLASSES = ['powdery_mildew', 'gray_mold', 'leaf_scorch',
           'angular_spot', 'healthy']

# Transfer learning từ PlantVillage pre-trained
base = tf.keras.applications.MobileNetV3Small(
    input_shape=(224,224,3), include_top=False,
    weights='imagenet'
)

# Data augmentation cho Đà Lạt conditions
augmentation = tf.keras.Sequential([
    tf.keras.layers.RandomFlip('horizontal'),
    tf.keras.layers.RandomRotation(0.2),
    tf.keras.layers.RandomBrightness(0.3),   # Sương mù
    tf.keras.layers.RandomContrast(0.3),
    tf.keras.layers.GaussianNoise(0.02),      # Noise sensor
])
\`\`\`

### ROI Analysis (Vùng rau 1 sào = 1000m²)

| Chỉ số | Truyền thống | AIoT | Tiết kiệm |
|--------|-------------|------|---------|
| Nước tưới | 3,000 L/ngày | 1,800 L/ngày | 40% |
| Phân bón | 15kg/tháng | 10kg/tháng | 33% |
| Thuốc BVTV | 8 lần/vụ | 3 lần/vụ | 62% |
| Nhân công | 2 người | 0.5 người | 75% |
| Năng suất | 100% | 120–130% | +25% |
| ROI payback | — | 8–14 tháng | — |`},{id:"c11s2",title:"Smart Healthcare & Wearable",content:`## AIoT trong Healthcare

### Thiết bị Wearable IoT

\`\`\`
ECG Patch (Holter Monitor tự làm):
├── Electrode (3-lead) → AD8232 ECG module
├── ESP32-S3 (240MHz + BLE 5)
├── Accelerometer MPU6050 (fall detection)
├── Temperature DS18B20 (body temp)
├── MAX30105 (SpO2 + HR)
├── LiPo 500mAh (7 ngày pin)
└── BLE → Smartphone App → Cloud

Data pipeline:
ECG raw (250Hz) → QRS detection → HRV analysis
                → ST segment analysis
                → Arrhythmia classification (TFLite)
\`\`\`

### ECG Signal Processing trên ESP32

\`\`\`cpp
// AD8232 ECG sampling @ 250Hz
#include <driver/adc.h>

#define ECG_PIN 34   // ADC1_CH6
#define LO_PLUS 32
#define LO_MINUS 33

const int SAMPLE_RATE = 250; // Hz
const int BUFFER_SIZE = 750; // 3 giây data

int16_t ecgBuffer[BUFFER_SIZE];
int bufIdx = 0;

void IRAM_ATTR sampleECG() {
    // Called by timer ISR @ 250Hz
    if (digitalRead(LO_PLUS) || digitalRead(LO_MINUS)) {
        ecgBuffer[bufIdx++] = 0;  // Lead off
    } else {
        ecgBuffer[bufIdx++] = analogRead(ECG_PIN);
    }
    if (bufIdx >= BUFFER_SIZE) bufIdx = 0;
}

// R-peak detection (Pan-Tompkins simplified)
float detectHeartRate(int16_t* buf, int len) {
    // 1. Bandpass filter 5-15Hz
    // 2. Derivative
    // 3. Squaring
    // 4. Moving window integration
    // 5. Adaptive threshold for R-peak detection
    // Return: BPM
}
\`\`\`

### AI Arrhythmia Detection

\`\`\`python
# 1D-CNN cho ECG phân loại từ PhysioNet MIT-BIH dataset
# 5 classes: Normal, AFib, V-flutter, Noise, Others

model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(187, 1)),  # 0.75s @ 250Hz
    tf.keras.layers.Conv1D(32, 5, activation='relu'),
    tf.keras.layers.MaxPooling1D(2),
    tf.keras.layers.Conv1D(64, 5, activation='relu'),
    tf.keras.layers.MaxPooling1D(2),
    tf.keras.layers.Conv1D(128, 3, activation='relu'),
    tf.keras.layers.GlobalAveragePooling1D(),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dropout(0.5),
    tf.keras.layers.Dense(5, activation='softmax')
])
# Sensitivity AFib: >94%, Specificity: >97%
# Model size quantized: ~48KB → fits ESP32!
\`\`\`

### HIPAA-aware Cloud Architecture

\`\`\`
Patient Device → BLE → Smartphone (local processing)
                           |
                    AES-256 encrypted
                           |
                    API Gateway (Auth)
                           |
              ┌────────────────────────┐
              │   HIPAA-compliant Zone │
              │  ├── Audit logging     │
              │  ├── Data isolation    │
              │  ├── Encryption at rest│
              │  └── Access control    │
              └────────────────────────┘
                           |
                    AI Analysis (de-identified)
                           |
                    Doctor Dashboard + Alerts
\`\`\``},{id:"c11s3",title:"Smart City & Industry 4.0",content:`## Smart City và Industry 4.0

### Thành phần Smart City với AIoT

\`\`\`
Smart Lighting: Cảm biến ánh sáng + chuyển động → Dim 30% khi vắng người
Smart Parking:  Ultrasonic × 100 chỗ → App tìm chỗ đậu gần nhất
Smart Waste:    Fill-level sensor → Tối ưu lịch thu gom
Smart Water:    Flow meter + AI leak detection → Phát hiện rò rỉ
Air Quality:    PM2.5 network × 50 điểm → Heatmap ô nhiễm realtime
Traffic:        Camera AI → Đếm xe, điều chỉnh đèn tự động
\`\`\`

### Industry 4.0 — Condition Monitoring

\`\`\`python
# Multi-sensor fusion cho industrial equipment
# Sensors: vibration, temperature, current draw, acoustic emission

class MachineLearningMonitor:
    def __init__(self, machine_id: str):
        self.machine_id = machine_id
        self.models = {
            'bearing':    load_model('bearing_classifier.tflite'),
            'imbalance':  load_model('imbalance_detector.tflite'),
            'misalign':   load_model('misalignment.tflite'),
            'rul':        load_model('remaining_useful_life.tflite'),
        }
        self.history = deque(maxlen=1000)

    def analyze(self, sensor_data: dict) -> dict:
        features = self.extract_features(sensor_data)
        results = {}

        for fault_type, model in self.models.items():
            prob = model.predict(features)
            results[fault_type] = {
                'probability': float(prob),
                'severity': 'high' if prob > 0.8 else
                            'medium' if prob > 0.5 else 'low'
            }

        # Remaining Useful Life
        rul_days = self.models['rul'].predict(features)
        results['rul_days'] = float(rul_days)

        if rul_days < 7:
            self.trigger_alert(f"URGENT: {self.machine_id} RUL={rul_days:.1f} days")

        return results

    def extract_features(self, data: dict) -> np.ndarray:
        # Time domain: mean, std, RMS, crest factor, kurtosis
        # Freq domain: FFT peak freq, spectral entropy
        # Envelope: bearing defect frequencies
        pass
\`\`\`

### Digital Twin Architecture

\`\`\`
Physical Asset ──sensor data──→ Digital Twin ──simulation──→ Insights
    │                               │                           │
    │                          Real-time sync              What-if scenarios
    │                          3D visualization             Predictive alerts
    └──actuator commands───── AI optimization ←── KPI targets
\`\`\`

**Tech stack Digital Twin:**
- **3D Model**: Three.js / Unity WebGL
- **Physics simulation**: PyBullet / Gazebo
- **Data sync**: MQTT → InfluxDB
- **AI**: TensorFlow optimization loop
- **Visualization**: Grafana + custom React dashboard`}]}],Kf=[{id:"c12",title:"Cloud & DevOps cho AIoT",color:"#2dd4bf",sections:[{id:"c12s1",title:"Docker & Containerization",content:`## Docker cho AIoT Stack

### Tại sao cần Docker?

Triển khai AIoT stack (Mosquitto + Node-RED + InfluxDB + Grafana) thường mất 2-3 giờ cài thủ công. Docker Compose: **1 lệnh, 2 phút**.

### docker-compose.yml cho AIoT

\`\`\`yaml
version: '3.8'

services:
  mosquitto:
    image: eclipse-mosquitto:2
    ports: ["1883:1883", "9001:9001"]
    volumes:
      - ./mosquitto/config:/mosquitto/config
      - ./mosquitto/data:/mosquitto/data
    restart: unless-stopped

  influxdb:
    image: influxdb:2.7
    ports: ["8086:8086"]
    environment:
      DOCKER_INFLUXDB_INIT_MODE: setup
      DOCKER_INFLUXDB_INIT_USERNAME: admin
      DOCKER_INFLUXDB_INIT_PASSWORD: aiot2025!
      DOCKER_INFLUXDB_INIT_ORG: aiot-edu
      DOCKER_INFLUXDB_INIT_BUCKET: sensors
      DOCKER_INFLUXDB_INIT_ADMIN_TOKEN: mytoken123
    volumes:
      - influxdb_data:/var/lib/influxdb2
    restart: unless-stopped

  grafana:
    image: grafana/grafana:10.2.0
    ports: ["3000:3000"]
    environment:
      GF_SECURITY_ADMIN_PASSWORD: admin2025
    volumes:
      - grafana_data:/var/lib/grafana
      - ./grafana/provisioning:/etc/grafana/provisioning
    depends_on: [influxdb]
    restart: unless-stopped

  node-red:
    image: nodered/node-red:3.1
    ports: ["1880:1880"]
    volumes:
      - node_red_data:/data
    depends_on: [mosquitto, influxdb]
    restart: unless-stopped

volumes:
  influxdb_data:
  grafana_data:
  node_red_data:
\`\`\`

### Khởi động và quản lý

\`\`\`bash
# Khởi động toàn bộ stack
docker-compose up -d

# Xem status
docker-compose ps

# Xem logs realtime
docker-compose logs -f mosquitto
docker-compose logs -f influxdb

# Dừng stack
docker-compose down

# Dừng + xóa data (NGUY HIỂM!)
docker-compose down -v

# Cập nhật image
docker-compose pull && docker-compose up -d
\`\`\`

### Grafana Auto-provisioning

\`\`\`yaml
# grafana/provisioning/datasources/influxdb.yaml
apiVersion: 1
datasources:
  - name: InfluxDB
    type: influxdb
    access: proxy
    url: http://influxdb:8086
    jsonData:
      version: Flux
      organization: aiot-edu
      defaultBucket: sensors
    secureJsonData:
      token: mytoken123
\`\`\``},{id:"c12s2",title:"MQTT over TLS & Auth",content:`## Bảo mật MQTT với TLS và Authentication

### Tại sao cần bảo mật MQTT?

MQTT mặc định **không mã hóa** và **không xác thực**. Ai cũng có thể connect broker và đọc/ghi mọi topic. Rủi ro trong môi trường production:
- Đọc dữ liệu nhạy cảm (nhiệt độ phòng máy chủ, vị trí GPS...)
- Inject lệnh giả (bật/tắt relay, thay đổi setpoint)
- DoS broker bằng spam messages

### Cấu hình Mosquitto với TLS

\`\`\`bash
# Tạo CA và certificates tự ký (development)
mkdir -p certs && cd certs

# 1. Tạo CA key và certificate
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 3650 -key ca.key -out ca.crt \\
  -subj "/CN=AIoT-CA/O=DLU/C=VN"

# 2. Tạo server key và CSR
openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr \\
  -subj "/CN=mqtt.aiot.local/O=DLU/C=VN"

# 3. Sign server cert với CA
openssl x509 -req -days 3650 -in server.csr \\
  -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt

# 4. Tạo client cert (cho ESP32)
openssl genrsa -out esp32-client.key 2048
openssl req -new -key esp32-client.key -out esp32-client.csr \\
  -subj "/CN=esp32-001/O=DLU/C=VN"
openssl x509 -req -days 3650 -in esp32-client.csr \\
  -CA ca.crt -CAkey ca.key -CAcreateserial -out esp32-client.crt
\`\`\`

\`\`\`conf
# mosquitto.conf
listener 1883
allow_anonymous false
password_file /mosquitto/config/passwd

listener 8883
cafile   /mosquitto/config/certs/ca.crt
certfile /mosquitto/config/certs/server.crt
keyfile  /mosquitto/config/certs/server.key
require_certificate true  # Mutual TLS
tls_version tlsv1.2

# ACL: kiểm soát quyền theo user
acl_file /mosquitto/config/acl
\`\`\`

\`\`\`bash
# Tạo password file
mosquitto_passwd -c /mosquitto/config/passwd esp32-device1
mosquitto_passwd  /mosquitto/config/passwd dashboard-user
\`\`\`

### ESP32 connect Mosquitto TLS

\`\`\`cpp
#include <WiFiClientSecure.h>
#include <PubSubClient.h>

// Certificates (copy từ file .crt và .key)
const char CA_CERT[] = R"(
-----BEGIN CERTIFICATE-----
MIIFqDCCA5CgAwIBAgIUQ... (ca.crt content)
-----END CERTIFICATE-----
)";
const char CLIENT_CERT[] = R"(-----BEGIN CERTIFICATE-----...
)";
const char CLIENT_KEY[] = R"(-----BEGIN RSA PRIVATE KEY-----...
)";

WiFiClientSecure net;
PubSubClient     mqtt(net);

void setupTLS() {
  net.setCACert(CA_CERT);
  net.setCertificate(CLIENT_CERT);  // Mutual TLS
  net.setPrivateKey(CLIENT_KEY);
  mqtt.setServer("mqtt.aiot.local", 8883);
}
\`\`\`

### ACL File — Phân quyền topic

\`\`\`conf
# /mosquitto/config/acl

# esp32-device1: chỉ được pub sensors, sub commands
user esp32-device1
topic write sensors/device1/#
topic read  devices/device1/cmd
topic read  devices/device1/config

# dashboard-user: đọc tất cả sensors, ghi tất cả commands
user dashboard-user
topic read  sensors/#
topic write devices/#
topic readwrite homeassistant/#
\`\`\``},{id:"c12s3",title:"AWS IoT Core & Azure IoT Hub",content:`## Cloud IoT Platforms

### So sánh Cloud IoT Platforms

| Platform | Devices Free | Protocol | AI Integration | Giá ($/msg) |
|----------|-------------|----------|---------------|-------------|
| **AWS IoT Core** | Unlimited | MQTT, HTTP, WebSocket | SageMaker, Lambda | $1.2/1M msg |
| **Azure IoT Hub** | 8,000 msg/ngày | MQTT, AMQP, HTTP | Azure ML, Stream Analytics | $10/1M msg |
| **Google Cloud IoT** | (đã ngừng 2023) | MQTT, HTTP | Vertex AI | — |
| **ThingSpeak** | 3M msg/năm | MQTT, HTTP | MATLAB | Miễn phí |
| **Adafruit IO** | 30 msg/phút | MQTT, HTTP | — | Miễn phí |
| **HiveMQ Cloud** | 100 connections | MQTT | — | Miễn phí |

### AWS IoT Core với ESP32

\`\`\`bash
# 1. Tạo Thing trong AWS Console
# IoT Core → Manage → Things → Create Thing

# 2. Download certificates
# - device-certificate.crt
# - device-private-key.key
# - AmazonRootCA1.pem

# 3. Tạo Policy
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["iot:Connect","iot:Publish","iot:Subscribe","iot:Receive"],
    "Resource": "arn:aws:iot:ap-southeast-1:*:*"
  }]
}
\`\`\`

\`\`\`cpp
// ESP32 kết nối AWS IoT Core
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include "certs.h"  // Certificates từ AWS

const char* AWS_ENDPOINT = "xxxxx.iot.ap-southeast-1.amazonaws.com";

WiFiClientSecure net;
PubSubClient     aws(net);

void setup() {
  net.setCACert(AWS_ROOT_CA);
  net.setCertificate(AWS_CERT);
  net.setPrivateKey(AWS_KEY);
  aws.setServer(AWS_ENDPOINT, 8883);
  aws.connect("esp32-thing-001");
}

void publishToAWS(float temp, float hum) {
  // AWS IoT Device Shadow
  String shadow = "{\\"state\\":{\\"reported\\":{"
    "\\"temperature\\":" + String(temp,1) +
    ",\\"humidity\\":" + String(hum,1) + "}}}";
  aws.publish("$aws/things/esp32-thing-001/shadow/update", shadow.c_str());
}
\`\`\`

### AWS Lambda xử lý IoT data

\`\`\`python
# Lambda function: nhận MQTT → lưu DynamoDB → gửi SNS alert
import json, boto3
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
sns = boto3.client('sns')
table = dynamodb.Table('IoTSensorData')

def lambda_handler(event, context):
    # event từ IoT Rule
    device_id = event.get('device_id', 'unknown')
    temp = float(event.get('temperature', 0))
    hum  = float(event.get('humidity', 0))

    # Lưu DynamoDB
    table.put_item(Item={
        'deviceId': device_id,
        'timestamp': datetime.utcnow().isoformat(),
        'temperature': str(temp),
        'humidity': str(hum)
    })

    # Alert nếu nhiệt độ cao
    if temp > 35.0:
        sns.publish(
            TopicArn='arn:aws:sns:...:IoTAlerts',
            Message=f'ALERT: {device_id} temperature={temp}°C',
            Subject='IoT Temperature Alert'
        )

    return {'statusCode': 200}
\`\`\``}]},{id:"c13",title:"Xử lý tín hiệu số (DSP)",color:"#f59e0b",sections:[{id:"c13s1",title:"FFT & Spectral Analysis",content:`## Fast Fourier Transform cho AIoT

### Tại sao FFT quan trọng?

**Vấn đề**: Dữ liệu cảm biến theo thời gian (time-domain) khó phân tích pattern.
**Giải pháp**: FFT chuyển sang frequency-domain, dễ nhận biết hơn.

\`\`\`
Ứng dụng FFT trong AIoT:
├── Phát hiện lỗi động cơ: tần số rung động bất thường
├── Wake word detection: MFCC = Mel + FFT
├── Vibration analysis: bearing wear → freq thay đổi
├── Power quality: harmonic distortion → FFT
└── EEG/ECG: biểu đồ tần số não/tim
\`\`\`

### FFT trên ESP32 (ArduinoFFT)

\`\`\`cpp
#include <arduinoFFT.h>

#define SAMPLES     512     // Phải là số 2^n
#define SAMPLE_FREQ 1000.0  // Hz

double vReal[SAMPLES], vImag[SAMPLES];
ArduinoFFT<double> FFT(vReal, vImag, SAMPLES, SAMPLE_FREQ);

void sampleAndFFT() {
  // 1. Thu thập mẫu
  for (int i = 0; i < SAMPLES; i++) {
    vReal[i] = analogRead(MIC_PIN) - 2048; // AC-coupled
    vImag[i] = 0.0;
    delayMicroseconds(1000000 / SAMPLE_FREQ); // 1ms @ 1kHz
  }

  // 2. FFT
  FFT.windowing(FFTWindow::Hamming, FFTDirection::Forward);
  FFT.compute(FFTDirection::Forward);
  FFT.complexToMagnitude();

  // 3. Tìm tần số dominant
  double peak_freq = FFT.majorPeak();
  double peak_mag  = vReal[(int)(peak_freq * SAMPLES / SAMPLE_FREQ)];

  Serial.printf("Peak: %.1f Hz (magnitude: %.1f)\\n", peak_freq, peak_mag);

  // 4. In spectrum (0 - 500 Hz)
  for (int i = 0; i < SAMPLES/2; i++) {
    double freq = i * SAMPLE_FREQ / SAMPLES;
    if (freq > 500) break;
    Serial.printf("%.0f Hz: %.2f\\n", freq, vReal[i]);
  }
}
\`\`\`

### FFT Feature Extraction cho TinyML

\`\`\`python
import numpy as np

def extract_fft_features(signal, fs=1000, n_bins=16):
    """Trích xuất FFT features từ chuỗi tín hiệu"""
    N = len(signal)

    # Apply Hanning window trước FFT
    window = np.hanning(N)
    windowed = signal * window

    # FFT
    fft = np.fft.rfft(windowed)
    magnitude = np.abs(fft) / N * 2  # Scale

    # Frequency bins
    freqs = np.fft.rfftfreq(N, 1/fs)

    # Mel-spaced frequency bins (16 bins)
    mel_lo = 2595 * np.log10(1 + 0 / 700)
    mel_hi = 2595 * np.log10(1 + (fs/2) / 700)
    mel_bins = np.linspace(mel_lo, mel_hi, n_bins + 2)
    hz_bins = 700 * (10 ** (mel_bins / 2595) - 1)

    features = []
    for i in range(n_bins):
        lo, center, hi = hz_bins[i], hz_bins[i+1], hz_bins[i+2]
        mask = (freqs >= lo) & (freqs <= hi)
        if mask.any():
            features.append(np.log(np.sum(magnitude[mask]) + 1e-10))
        else:
            features.append(-23.0)  # log(1e-10)

    return np.array(features)

# Usage:
signal = np.array([...])  # 1000 samples @ 1kHz = 1 giây
features = extract_fft_features(signal)  # 16 features
\`\`\``},{id:"c13s2",title:"Kalman Filter & Sensor Fusion",content:`## Kalman Filter & Sensor Fusion

### Vấn đề với cảm biến thực tế

Mọi cảm biến đều có **nhiễu** (noise). DHT22 có thể dao động ±2°C giữa các lần đọc kế tiếp. GPS có thể nhảy 5m. Accelerometer rung liên tục.

Giải pháp: **Sensor Fusion** — kết hợp nhiều nguồn data để ước lượng tốt hơn.

### Moving Average (Đơn giản nhất)

\`\`\`cpp
class MovingAverage {
  float buffer[16];
  int idx = 0, count = 0;
public:
  float update(float val) {
    buffer[idx] = val;
    idx = (idx + 1) % 16;
    if (count < 16) count++;
    float sum = 0;
    for (int i = 0; i < count; i++) sum += buffer[i];
    return sum / count;
  }
};

MovingAverage tempFilter, humFilter;

void loop() {
  float raw_temp = dht.readTemperature();
  float smoothed = tempFilter.update(raw_temp);
  Serial.printf("Raw:%.1f Smooth:%.1f\\n", raw_temp, smoothed);
}
\`\`\`

### Kalman Filter 1D (Tốt hơn)

\`\`\`cpp
class KalmanFilter1D {
  float Q = 0.001f;  // Process noise (uncertainty in model)
  float R = 0.1f;    // Measurement noise (sensor noise)
  float P = 1.0f;    // Estimate error covariance
  float K = 0.0f;    // Kalman gain
  float X = 0.0f;    // State estimate

public:
  KalmanFilter1D(float process_noise = 0.001f,
                 float measure_noise = 0.1f)
    : Q(process_noise), R(measure_noise) {}

  float update(float measurement) {
    // Predict
    P = P + Q;

    // Update
    K = P / (P + R);           // Kalman gain
    X = X + K * (measurement - X);  // State update
    P = (1 - K) * P;               // Error covariance update

    return X;
  }
};

KalmanFilter1D tempKF(0.001f, 0.1f);

void loop() {
  float raw  = dht.readTemperature();
  float filtered = tempKF.update(raw);
  // filtered rất mượt, ít bị ảnh hưởng bởi noise
}
\`\`\`

### IMU Sensor Fusion — Complementary Filter

\`\`\`cpp
// Kết hợp accelerometer (chính xác dài hạn, nhiễu ngắn hạn)
// và gyroscope (chính xác ngắn hạn, drift dài hạn)

#include <MPU6050_tockn.h>
MPU6050 mpu(Wire);

float pitch = 0, roll = 0;
const float ALPHA = 0.98f;  // Gyro weight
unsigned long prevTime = 0;

void updateAngles() {
  mpu.update();
  unsigned long now = millis();
  float dt = (now - prevTime) / 1000.0f;
  prevTime = now;

  // Từ accelerometer (noisy nhưng không drift)
  float accel_pitch = atan2(mpu.getAccY(), mpu.getAccZ()) * 180/PI;
  float accel_roll  = atan2(-mpu.getAccX(),
    sqrt(mpu.getAccY()*mpu.getAccY() + mpu.getAccZ()*mpu.getAccZ())) * 180/PI;

  // Complementary filter
  pitch = ALPHA * (pitch + mpu.getGyroX() * dt) + (1-ALPHA) * accel_pitch;
  roll  = ALPHA * (roll  + mpu.getGyroY() * dt) + (1-ALPHA) * accel_roll;

  Serial.printf("Pitch:%.1f° Roll:%.1f°\\n", pitch, roll);
}
\`\`\``}]},{id:"c14",title:"Deep Learning nâng cao",color:"#a855f7",sections:[{id:"c14s1",title:"Transfer Learning",content:`## Transfer Learning cho AIoT

### Khái niệm

Train từ đầu một CNN cần **hàng triệu ảnh** và nhiều giờ. Transfer Learning dùng lại weights đã train trên ImageNet (14 triệu ảnh) → fine-tune với dataset nhỏ của bạn.

### MobileNetV3 — Tối ưu cho Edge

\`\`\`python
import tensorflow as tf

# Tải pretrained MobileNetV3 Small (nhỏ nhất, phù hợp MCU)
base_model = tf.keras.applications.MobileNetV3Small(
    input_shape=(96, 96, 3),
    include_top=False,    # Bỏ phần classification head
    weights='imagenet'    # Dùng pretrained weights
)

# Freeze layers gốc (giữ nguyên feature extractor)
base_model.trainable = False

# Thêm classification head cho task của bạn
model = tf.keras.Sequential([
    base_model,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(NUM_CLASSES, activation='softmax')
])

# Phase 1: Train chỉ head (10-20 epochs)
model.compile('adam', 'sparse_categorical_crossentropy', ['accuracy'])
model.fit(train_data, epochs=15)

# Phase 2: Fine-tune 20 layers cuối của base model
base_model.trainable = True
for layer in base_model.layers[:-20]:
    layer.trainable = False

model.compile(tf.keras.optimizers.Adam(1e-5),  # LR nhỏ hơn!
              'sparse_categorical_crossentropy', ['accuracy'])
model.fit(train_data, epochs=10)

# Convert sang TFLite INT8 cho deployment
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
converter.representative_dataset = lambda: [
    [img.astype('float32')] for img, _ in train_data.take(100)
]
converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]
tflite_quant = converter.convert()
print(f"TFLite model: {len(tflite_quant)/1024:.0f} KB")
# MobileNetV3-Small INT8: ~900KB — fits ESP32 with PSRAM
\`\`\`

### Data Augmentation cho dataset nhỏ

\`\`\`python
# Kỹ thuật tăng cường dataset tự động
augment = tf.keras.Sequential([
    tf.keras.layers.RandomFlip("horizontal"),
    tf.keras.layers.RandomRotation(0.15),
    tf.keras.layers.RandomZoom(0.15),
    tf.keras.layers.RandomBrightness(0.2),
    tf.keras.layers.RandomContrast(0.2),
])

# Áp dụng vào data pipeline
train_ds = raw_train_ds.map(
    lambda x, y: (augment(x, training=True), y)
).cache().shuffle(1000).batch(32).prefetch(tf.data.AUTOTUNE)

# Với 200 ảnh/class + augmentation → hiệu quả như 2000 ảnh
\`\`\``},{id:"c14s2",title:"Reinforcement Learning cho IoT",content:`## Reinforcement Learning cho Điều khiển IoT

### Khái niệm RL

| Thành phần | Ý nghĩa | Ví dụ Smart AC |
|-----------|---------|---------------|
| Agent | Bộ điều khiển | ESP32 controller |
| Environment | Môi trường | Phòng + nhiệt kế |
| State (S) | Trạng thái hiện tại | Temp, humidity, hour |
| Action (A) | Hành động | AC power: 0,25,50,75,100% |
| Reward (R) | Phần thưởng | +1 nếu T∈[22,26]°C, -1 nếu ngoài |
| Policy (π) | Chiến lược | S→A mapping |

### Q-Learning đơn giản cho Smart HVAC

\`\`\`python
import numpy as np
import random

class SmartHVAC_QLearning:
    def __init__(self):
        # States: (temp_bin, hour_bin, occupancy) → discrete
        # 10 temp bins (16-35°C) × 24 hours × 2 occupied
        self.state_space  = (10, 24, 2)
        self.action_space = 5  # AC: off, 25%, 50%, 75%, 100%
        self.Q = np.zeros((*self.state_space, self.action_space))

        self.alpha   = 0.1   # Learning rate
        self.gamma   = 0.95  # Discount factor
        self.epsilon = 0.3   # Exploration (giảm theo thời gian)

    def state_to_idx(self, temp, hour, occupied):
        temp_bin = min(int((temp - 16) / 2), 9)  # 2°C bins
        return (max(0,temp_bin), int(hour) % 24, int(occupied))

    def get_action(self, state_idx):
        if random.random() < self.epsilon:
            return random.randint(0, self.action_space-1)  # Explore
        return np.argmax(self.Q[state_idx])  # Exploit

    def reward(self, temp):
        if 22 <= temp <= 26: return  1.0   # Comfortable
        if 20 <= temp <= 28: return  0.3   # OK
        if temp < 18 or temp > 32: return -2.0  # Bad
        return -0.5

    def update(self, s, a, r, s_next):
        best_next = np.max(self.Q[s_next])
        self.Q[s][a] += self.alpha * (r + self.gamma * best_next - self.Q[s][a])

    def decay_epsilon(self, episode):
        self.epsilon = max(0.05, 0.3 * (0.99 ** episode))

# Sau 10,000 episodes training trong simulation:
# Agent học tắt AC khi đã đủ mát, tránh tốn điện
# Dùng nhiều điện hơn vào giờ cao điểm khi có người
\`\`\`

### Triển khai Q-table lên ESP32

\`\`\`cpp
// Q-table sau training: 10×24×2×5 = 2400 float values = 9.6KB
// Fits ESP32 RAM!

float Q_table[10][24][2][5];  // Load từ SPIFFS

int getAction(float temp, int hour, bool occupied) {
  int temp_bin = constrain((int)((temp - 16) / 2), 0, 9);
  int best_action = 0;
  float best_q = -999.0f;

  for (int a = 0; a < 5; a++) {
    float q = Q_table[temp_bin][hour][occupied][a];
    if (q > best_q) { best_q = q; best_action = a; }
  }

  return best_action;
}

const float AC_POWERS[] = {0, 25, 50, 75, 100};  // % power
void controlAC(float temp, int hour, bool occupied) {
  int action = getAction(temp, hour, occupied);
  setACPower(AC_POWERS[action]);
}
\`\`\``}]},{id:"c15",title:"ESP-IDF & Lập trình chuyên sâu",color:"#00d4ff",sections:[{id:"c15s1",title:"ESP-IDF vs Arduino",content:`## ESP-IDF — Framework chuyên nghiệp

### So sánh ESP-IDF vs Arduino Framework

| Tiêu chí | Arduino | ESP-IDF |
|---------|---------|---------|
| Độ khó | Thấp | Cao |
| Hiệu năng | Tốt | Tốt hơn 10-30% |
| Control | Giới hạn | Full control |
| Debugging | Serial.print | GDB, JTAG |
| OTA update | Cơ bản | Rollback, partition |
| Flash encrypt | Không hỗ trợ | Có |
| Production | Prototype | Production |
| Build system | Arduino CLI | CMake |
| Dùng khi | Học, prototype | Product thực tế |

### Dự án ESP-IDF đầu tiên

\`\`\`bash
# Cài ESP-IDF
mkdir -p ~/esp && cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf && ./install.sh esp32
source ./export.sh

# Tạo project mới từ template
idf.py create-project hello_aiot
cd hello_aiot

# Build và flash
idf.py set-target esp32
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
\`\`\`

\`\`\`c
// main/main.c — ESP-IDF style (C, không phải C++)
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "driver/gpio.h"
#include "esp_log.h"
#include "nvs_flash.h"

#define LED_GPIO GPIO_NUM_2
static const char* TAG = "AIOT";

void led_task(void* arg) {
  gpio_config_t io = {
    .pin_bit_mask = 1ULL << LED_GPIO,
    .mode = GPIO_MODE_OUTPUT,
  };
  gpio_config(&io);

  int state = 0;
  while (1) {
    gpio_set_level(LED_GPIO, state ^= 1);
    ESP_LOGI(TAG, "LED %s", state ? "ON" : "OFF");
    vTaskDelay(pdMS_TO_TICKS(1000));
  }
}

void app_main(void) {
  nvs_flash_init();
  ESP_LOGI(TAG, "AIoT EDU - ESP-IDF Hello World");
  xTaskCreate(led_task, "led", 2048, NULL, 5, NULL);
}
\`\`\`

### NVS — Non-Volatile Storage (Lưu config)

\`\`\`c
#include "nvs_flash.h"
#include "nvs.h"

// Lưu WiFi credentials vào Flash (tồn tại qua reboot)
esp_err_t save_config(const char* ssid, const char* password) {
  nvs_handle_t handle;
  esp_err_t err = nvs_open("config", NVS_READWRITE, &handle);
  if (err != ESP_OK) return err;

  nvs_set_str(handle, "wifi_ssid", ssid);
  nvs_set_str(handle, "wifi_pass", password);
  nvs_commit(handle);
  nvs_close(handle);
  return ESP_OK;
}

esp_err_t load_config(char* ssid, char* password, size_t max_len) {
  nvs_handle_t handle;
  nvs_open("config", NVS_READONLY, &handle);
  nvs_get_str(handle, "wifi_ssid", ssid, &max_len);
  nvs_get_str(handle, "wifi_pass", password, &max_len);
  nvs_close(handle);
  return ESP_OK;
}
\`\`\``}]}],Af=[...Qf,...Kf],qi=[{id:"l1",group:"Cơ bản",groupColor:"#00e676",diff:"easy",time:"45 phút",hw:"Arduino Uno / ESP32",title:"Lab 1 — Cài đặt & Hello World",obj:"Cài Arduino IDE, cấu hình ESP32, chạy chương trình Serial đầu tiên.",theory:"Arduino IDE là môi trường phát triển tích hợp chính thức. ESP32 cần cài thêm board package từ Espressif (~200MB).",steps:[{t:"Cài Arduino IDE 2.x",lang:"bash",info:"Download từ arduino.cc/en/software — chọn hệ điều hành của bạn",code:`# Ubuntu/Debian:
sudo snap install arduino
# Hoặc download .AppImage và chạy trực tiếp

# Windows: Download .exe installer, chạy Administrator
# macOS: Download .dmg, kéo vào Applications`},{t:"Thêm ESP32 Board Package",lang:"",info:"File → Preferences → Additional Boards Manager URLs:",code:`https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json

# Sau đó: Tools → Board Manager → tìm "esp32" by Espressif Systems → Install
# Lần đầu mất ~5-10 phút (200MB)`},{t:"Cài driver & chọn port",lang:"bash",info:"Cài driver CH340/CP2102, sau đó chọn port",code:`# Linux: thêm user vào group dialout
sudo adduser $USER dialout
# Logout và login lại, rồi kiểm tra:
ls /dev/ttyUSB*

# Windows: Device Manager → Ports (COM & LPT)
# macOS: ls /dev/cu.*

# Arduino IDE: Tools → Port → chọn COMx hoặc /dev/ttyUSB0`},{t:"Upload chương trình đầu tiên",lang:"cpp",info:"File → New → paste code dưới → Ctrl+U để upload",code:`void setup() {
  Serial.begin(115200);
  delay(500);
  Serial.println("=== AIoT EDU - Hello World ===");
  Serial.println("ESP32 ready!");
}

int counter = 0;
void loop() {
  Serial.printf("[%lu ms] Count: %d | Heap: %lu bytes\\n",
    millis(), ++counter, ESP.getFreeHeap());
  delay(1000);
}`},{t:"Mở Serial Monitor",lang:"",info:"Tools → Serial Monitor → chọn 115200 baud",code:`# Kết quả mong đợi:
=== AIoT EDU - Hello World ===
ESP32 ready!
[1002 ms] Count: 1 | Heap: 295832 bytes
[2004 ms] Count: 2 | Heap: 295832 bytes
[3006 ms] Count: 3 | Heap: 295832 bytes`}],tips:["Nếu upload fail: giữ nút BOOT trong khi click Upload","Driver CH340: wch.cn/downloads — CH341SER.EXE","Linux permission lỗi: sudo chmod 666 /dev/ttyUSB0"],expect:"Serial Monitor hiển thị counter tăng dần mỗi giây, heap free ~290KB",verify:[{q:"Upload thành công?",cmd:"Không có lỗi đỏ trong console"},{q:"Serial output đúng?",cmd:"115200 baud, xem count tăng"},{q:"Heap stable?",cmd:"Heap free không giảm theo thời gian (memory leak)"}]},{id:"l2",group:"Cơ bản",groupColor:"#00e676",diff:"easy",time:"60 phút",hw:"ESP32 + DHT22 + LED",title:"Lab 2 — Cảm biến DHT22 & LED cảnh báo",obj:"Đọc nhiệt độ + độ ẩm DHT22, hiển thị Serial, LED đỏ cảnh báo khi nhiệt độ cao.",theory:"DHT22 dùng giao thức 1-Wire tùy chỉnh với timing chặt chẽ. Thư viện Adafruit DHT xử lý timing này, chỉ cần gọi readTemperature() và readHumidity().",steps:[{t:"Kết nối phần cứng",lang:"",info:"Sơ đồ đấu dây DHT22 + LED",code:`DHT22:
  Pin 1 (VCC)  → 3.3V
  Pin 2 (DATA) → GPIO4 (kèm resistor 10KΩ lên 3.3V)
  Pin 4 (GND)  → GND

LED đỏ:
  Anode  → GPIO2 (qua resistor 220Ω)
  Cathode → GND

GPIO2 = LED built-in trên nhiều board ESP32`},{t:"Cài thư viện DHT",lang:"",info:"Tools → Library Manager → tìm và cài 2 thư viện:",code:`1. "DHT sensor library" by Adafruit → Install
2. "Adafruit Unified Sensor" by Adafruit → Install
(nếu hỏi install dependencies → Yes)`},{t:"Code đọc sensor & cảnh báo",lang:"cpp",info:"",code:`#include <DHT.h>

#define DHT_PIN     4
#define DHT_TYPE    DHT22
#define LED_PIN     2
#define TEMP_HIGH   32.0f   // Ngưỡng cảnh báo
#define TEMP_LOW    15.0f

DHT dht(DHT_PIN, DHT_TYPE);
unsigned long lastRead = 0;

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(LED_PIN, OUTPUT);
  Serial.println("DHT22 Monitor - AIoT EDU");
}

void loop() {
  if (millis() - lastRead >= 2000) {
    lastRead = millis();

    float temp = dht.readTemperature();
    float hum  = dht.readHumidity();

    if (isnan(temp) || isnan(hum)) {
      Serial.println("ERROR: Sensor read failed! Check wiring.");
      return;
    }

    float hi = dht.computeHeatIndex(temp, hum, false);

    Serial.printf("[%lu s] T:%.1fC H:%.1f%% HI:%.1fC",
      millis()/1000, temp, hum, hi);

    if (temp > TEMP_HIGH) {
      digitalWrite(LED_PIN, HIGH);
      Serial.println(" <<< HIGH TEMP ALERT >>>");
    } else if (temp < TEMP_LOW) {
      digitalWrite(LED_PIN, HIGH);
      Serial.println(" <<< LOW TEMP ALERT >>>");
    } else {
      digitalWrite(LED_PIN, LOW);
      Serial.println(" OK");
    }
  }
}`}],tips:["DHT22 cần ít nhất 2s giữa 2 lần đọc","Nếu NaN: kiểm tra pull-up 10KΩ và dây kết nối","Thở vào sensor để tăng nhiệt độ và test LED alert"],expect:"Serial hiện T:XX.X C H:XX.X% mỗi 2s, LED sáng khi nhiệt cao",verify:[{q:"Giá trị hợp lệ?",cmd:"Serial: không có NaN, nhiệt độ 20-40°C"},{q:"LED phản hồi?",cmd:"Thở vào sensor: nhiệt độ tăng, LED sáng"}]},{id:"l3",group:"Cơ bản",groupColor:"#00e676",diff:"easy",time:"75 phút",hw:"ESP32 + OLED SSD1306",title:"Lab 3 — OLED Display Dashboard",obj:"Kết nối màn hình OLED SSD1306 128×64 qua I2C, hiển thị dashboard với dữ liệu sensor.",theory:"SSD1306 OLED dùng I2C chỉ cần 2 dây (SDA + SCL). Thư viện Adafruit SSD1306 + GFX cung cấp đầy đủ drawing primitives.",steps:[{t:"Kết nối OLED I2C",lang:"",info:"",code:`SSD1306 OLED:
  VCC → 3.3V
  GND → GND
  SDA → GPIO21 (I2C SDA mặc định ESP32)
  SCK → GPIO22 (I2C SCL mặc định ESP32)

Nếu có nhiều thiết bị I2C (BME280, MPU6050...):
Tất cả đều share cùng SDA và SCL — không cần thêm dây`},{t:"Cài thư viện OLED",lang:"",info:"Library Manager:",code:`1. "Adafruit SSD1306" → Install
2. "Adafruit GFX Library" → Install`},{t:"Code OLED Dashboard",lang:"cpp",info:"Hiển thị uptime + random data (thay bằng sensor thật)",code:`#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include <DHT.h>

Adafruit_SSD1306 display(128, 64, &Wire, -1);
DHT dht(4, DHT22);
float temp = 0, hum = 0;

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  dht.begin();

  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("OLED not found! Check wiring.");
    while(1);
  }

  display.clearDisplay();
  display.setTextColor(WHITE);
  display.setTextSize(1);
  display.setCursor(20, 25);
  display.println("AIoT EDU - DLU");
  display.display();
  delay(2000);
}

void updateDisplay() {
  display.clearDisplay();

  // Header
  display.setTextSize(1);
  display.setCursor(0, 0);
  display.print("AIoT Monitor");
  display.drawLine(0, 10, 127, 10, WHITE);

  // Temperature (large font)
  display.setTextSize(2);
  display.setCursor(0, 16);
  display.printf("%.1f", temp);
  display.setTextSize(1);
  display.setCursor(56, 16);
  display.print("C");

  // Humidity
  display.setTextSize(1);
  display.setCursor(0, 40);
  display.printf("Hum: %.1f%%", hum);

  // Uptime
  display.setCursor(0, 52);
  display.printf("Up: %lus", millis()/1000);

  // Progress bar (humidity)
  int barW = (int)(hum * 0.8f);
  display.drawRect(80, 38, 46, 8, WHITE);
  display.fillRect(80, 38, barW > 46 ? 46 : barW, 8, WHITE);

  display.display();
}

unsigned long lastRead = 0;
void loop() {
  if (millis() - lastRead >= 2000) {
    lastRead = millis();
    float t = dht.readTemperature();
    float h = dht.readHumidity();
    if (!isnan(t)) { temp = t; hum = h; }
    updateDisplay();
  }
}`}],tips:["Địa chỉ I2C OLED thường 0x3C hoặc 0x3D — dùng I2C Scanner để xác nhận","Tắt display.clearDisplay() ở setup nếu muốn splash screen","Font size 1=6×8px, 2=12×16px, 3=18×24px"],expect:"OLED hiển thị nhiệt độ lớn, độ ẩm, uptime, progress bar humidity",verify:[{q:"OLED sáng lên?",cmd:"Kiểm tra VCC=3.3V, địa chỉ 0x3C"},{q:"Data cập nhật 2s?",cmd:"Quan sát uptime counter tăng"}]},{id:"l4",group:"Trung cấp",groupColor:"#00d4ff",diff:"medium",time:"90 phút",hw:"ESP32",title:"Lab 4 — WiFi & MQTT với DHT22",obj:"Kết nối ESP32 lên MQTT broker, publish sensor data dạng JSON mỗi 5s, subscribe lệnh điều khiển LED.",theory:'MQTT Pub/Sub: ESP32 (client) kết nối đến Broker (Mosquitto). Publish data lên topic "sensors/data", subscribe topic "devices/led" để nhận lệnh điều khiển.',steps:[{t:"Cài Mosquitto Broker (PC)",lang:"bash",info:"Chạy trên máy tính trong cùng mạng LAN",code:`# Ubuntu:
sudo apt install mosquitto mosquitto-clients -y
sudo systemctl start mosquitto

# Kiểm tra:
systemctl status mosquitto  # → active (running)

# Test nhanh:
mosquitto_sub -h localhost -t "test/#" -v &
mosquitto_pub -h localhost -t "test/hello" -m "world"
# Output: test/hello world`},{t:"Cài thư viện Arduino",lang:"",info:"Library Manager:",code:`1. "PubSubClient" by Nick O'Leary → Install
2. "ArduinoJson" by Benoit Blanchon → Install
3. "DHT sensor library" by Adafruit → Install`},{t:"Code ESP32 MQTT Client",lang:"cpp",info:"Thay WIFI_SSID, WIFI_PASS, MQTT_HOST",code:`#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <DHT.h>

const char* WIFI_SSID = "YourSSID";
const char* WIFI_PASS = "YourPassword";
const char* MQTT_HOST = "192.168.1.100";  // IP máy tính
const int   MQTT_PORT = 1883;
const char* CLIENT_ID = "esp32-lab4";

DHT dht(4, DHT22);
WiFiClient wc;
PubSubClient mqtt(wc);

void onMessage(char* topic, byte* payload, unsigned int len) {
  String msg((char*)payload, len);
  Serial.printf("Received [%s]: %s\\n", topic, msg.c_str());
  if (String(topic) == "devices/led")
    digitalWrite(2, msg == "ON" ? HIGH : LOW);
}

void connectWiFi() {
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  Serial.print("WiFi");
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.println("\\nWiFi OK: " + WiFi.localIP().toString());
}

void connectMQTT() {
  while (!mqtt.connected()) {
    Serial.print("MQTT connecting...");
    if (mqtt.connect(CLIENT_ID, nullptr, nullptr,
                     "devices/status", 1, true, "offline")) {
      mqtt.publish("devices/status", "online", true);
      mqtt.subscribe("devices/led");
      Serial.println(" OK");
    } else {
      Serial.println(" fail(" + String(mqtt.state()) + ") retry 3s");
      delay(3000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(2, OUTPUT);
  mqtt.setServer(MQTT_HOST, MQTT_PORT);
  mqtt.setCallback(onMessage);
  connectWiFi();
  connectMQTT();
}

unsigned long lastPub = 0;
void loop() {
  if (!mqtt.connected()) connectMQTT();
  mqtt.loop();

  if (millis() - lastPub >= 5000) {
    lastPub = millis();
    float t = dht.readTemperature();
    float h = dht.readHumidity();
    if (isnan(t)) return;

    JsonDocument doc;
    doc["device"]      = CLIENT_ID;
    doc["temperature"] = serialized(String(t,1));
    doc["humidity"]    = serialized(String(h,1));
    doc["rssi"]        = WiFi.RSSI();
    doc["uptime"]      = millis()/1000;

    char buf[200]; serializeJson(doc, buf);
    mqtt.publish("sensors/data", buf);
    Serial.println("Published: " + String(buf));
  }
}`},{t:"Test từ PC",lang:"bash",info:"Mở terminal mới trên PC:",code:`# Xem data từ ESP32:
mosquitto_sub -h localhost -t "sensors/data" -v

# Điều khiển LED:
mosquitto_pub -h localhost -t "devices/led" -m "ON"
mosquitto_pub -h localhost -t "devices/led" -m "OFF"

# Kết quả mẫu:
# sensors/data {"device":"esp32-lab4","temperature":"26.3","humidity":"68.1","rssi":-42,"uptime":15}`}],tips:["Tìm IP máy tính: ipconfig (Win) hoặc ip addr (Linux)","Dùng MQTT Explorer (mqtt-explorer.com) để xem topics dễ hơn","Public broker: broker.hivemq.com:1883 nếu không cài local"],expect:"PC nhận JSON mỗi 5s, LED bật/tắt theo lệnh MQTT từ terminal",verify:[{q:"WiFi connected?",cmd:"Serial: WiFi OK: 192.168.x.x"},{q:"MQTT connected?",cmd:"Serial: MQTT connecting... OK"},{q:"Data 5s/lần?",cmd:"mosquitto_sub xem output"},{q:"LED điều khiển?",cmd:"Publish ON rồi OFF, quan sát LED"}]},{id:"l5",group:"Trung cấp",groupColor:"#00d4ff",diff:"medium",time:"90 phút",hw:"2x ESP32 + LoRa SX1276",title:"Lab 5 — LoRa Long-range Communication",obj:"2 ESP32 + LoRa SX1276 giao tiếp trực tiếp không cần WiFi/SIM. Sender gửi data, Receiver hiển thị + đo RSSI/SNR.",theory:"LoRa (Long Range) dùng Chirp Spread Spectrum, truyền 2-15km ngoài trời với công suất 100mW. SX1276 kết nối SPI với ESP32.",steps:[{t:"Kết nối LoRa SX1276 (cả 2 module)",lang:"",info:"SPI connection — giống nhau cho cả Sender và Receiver:",code:`SX1276    →   ESP32
VCC       →   3.3V
GND       →   GND
SCK       →   GPIO18
MISO      →   GPIO19
MOSI      →   GPIO23
NSS/CS    →   GPIO5
RST       →   GPIO14
DIO0/IRQ  →   GPIO26

QUAN TRONG: Phải có anten! Dây thẳng 8.2cm cho 433MHz`},{t:"Cài thư viện",lang:"",info:"Library Manager:",code:'"LoRa" by Sandeep Mistry → Install'},{t:"Code Sender (Node 1)",lang:"cpp",info:"Upload lên ESP32 số 1",code:`#include <LoRa.h>
#include <DHT.h>

DHT dht(4, DHT22);
int pktId = 0;

void setup() {
  Serial.begin(115200);
  dht.begin();
  LoRa.setPins(5, 14, 26);  // CS, RST, IRQ

  if (!LoRa.begin(433E6)) {  // 433 MHz
    Serial.println("LoRa init failed!");
    while(1);
  }
  LoRa.setSpreadingFactor(10);    // SF7-12
  LoRa.setSignalBandwidth(125E3); // 125 kHz BW
  LoRa.setCodingRate4(5);         // 4/5 coding rate
  LoRa.setTxPower(20);            // Max power
  Serial.println("LoRa Sender ready - 433MHz SF10");
}

void loop() {
  float t = dht.readTemperature();
  float h = dht.readHumidity();

  // Packet: id,temp,hum
  String packet = String(pktId++) + "," + String(t,1) + "," + String(h,1);

  LoRa.beginPacket();
  LoRa.print(packet);
  LoRa.endPacket();

  Serial.println("Sent #" + String(pktId-1) + ": " + packet);
  delay(5000);
}`},{t:"Code Receiver (Node 2)",lang:"cpp",info:"Upload lên ESP32 số 2",code:`#include <LoRa.h>

void setup() {
  Serial.begin(115200);
  LoRa.setPins(5, 14, 26);
  if (!LoRa.begin(433E6)) {
    Serial.println("LoRa init failed!"); while(1);
  }
  LoRa.setSpreadingFactor(10);
  LoRa.setSignalBandwidth(125E3);
  LoRa.setCodingRate4(5);
  Serial.println("LoRa Receiver ready");
}

void loop() {
  int packetSize = LoRa.parsePacket();
  if (packetSize) {
    String data = "";
    while (LoRa.available()) data += (char)LoRa.read();

    int rssi = LoRa.packetRssi();
    float snr = LoRa.packetSnr();

    // Parse: id,temp,hum
    int c1 = data.indexOf(','), c2 = data.lastIndexOf(',');
    int id    = data.substring(0, c1).toInt();
    float t   = data.substring(c1+1, c2).toFloat();
    float h   = data.substring(c2+1).toFloat();

    Serial.printf("Pkt#%d T:%.1fC H:%.1f%% | RSSI:%ddBm SNR:%.1fdB\\n",
      id, t, h, rssi, snr);
  }
}`}],tips:["RSSI: -30 dBm tốt, -100 dBm yếu, -120 dBm không nhận","SF cao hơn = tầm xa hơn nhưng tốc độ chậm hơn","Không chạy LoRa không có anten — phá hardware!"],expect:"Receiver nhận packet mỗi 5s, RSSI -30 đến -80 dBm trong phòng",verify:[{q:"Packet nhận được?",cmd:"Serial Receiver xem output"},{q:"RSSI hợp lệ?",cmd:"-30 đến -100 dBm là bình thường"},{q:"Data decode đúng?",cmd:"Temperature và humidity khớp sender"}]},{id:"l6",group:"Trung cấp",groupColor:"#00d4ff",diff:"medium",time:"120 phút",hw:"ESP32 + DHT22 + OLED",title:"Lab 6 — Web Server Dashboard realtime",obj:"ESP32 làm web server: dashboard HTML/CSS/JS hiển thị sensor data realtime, API JSON, điều khiển relay từ browser.",theory:"ESP32 WebServer library tạo HTTP server nhúng. JavaScript fetch() gọi /api/data mỗi 2s để cập nhật dashboard mà không cần reload trang.",steps:[{t:"Cài thư viện",lang:"",info:"Đã có sẵn trong ESP32 core:",code:`#include <WiFi.h>       // Built-in
#include <WebServer.h>  // Built-in
// Chỉ cần cài thêm DHT nếu chưa có`},{t:"Code Web Server",lang:"cpp",info:"Thay WiFi credentials",code:`#include <WiFi.h>
#include <WebServer.h>
#include <DHT.h>

const char* SSID = "YourSSID";
const char* PASS = "YourPassword";

DHT dht(4, DHT22);
WebServer server(80);
float temp=25.0, hum=60.0;

// HTML dashboard nhúng (PROGMEM để tiết kiệm RAM)
const char HTML[] PROGMEM = R"HTML(
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AIoT Dashboard</title>
<style>
  body{font-family:monospace;background:#07090f;color:#cdd8e8;
       display:flex;flex-direction:column;align-items:center;
       min-height:100vh;margin:0;padding:2rem 1rem}
  h1{color:#00d4ff;margin-bottom:1.5rem;font-size:1.5rem}
  .cards{display:flex;gap:1rem;flex-wrap:wrap;justify-content:center}
  .card{background:#111927;border:1px solid #1c2c44;border-radius:12px;
        padding:2rem;text-align:center;min-width:150px}
  .val{font-size:2.5rem;font-weight:bold;color:#00e676;margin:.5rem 0}
  .lbl{font-size:.85rem;color:#6e8faa}
  .btn{padding:.6rem 1.5rem;background:#00d4ff;color:#000;border:none;
       border-radius:8px;cursor:pointer;font-weight:bold;margin:.3rem;font-size:.9rem}
  .btn:hover{background:#1de8ff}
  .status{margin-top:1rem;font-size:.8rem;color:#334d62}
</style>
</head>
<body>
<h1>AIoT Monitor — ESP32</h1>
<div class="cards">
  <div class="card"><div class="val" id="temp">--</div><div class="lbl">Nhiet do (C)</div></div>
  <div class="card"><div class="val" id="hum">--</div><div class="lbl">Do am (%)</div></div>
</div>
<div style="margin-top:1.5rem">
  <button class="btn" onclick="led('ON')">LED ON</button>
  <button class="btn" onclick="led('OFF')">LED OFF</button>
</div>
<div class="status" id="status">Dang ket noi...</div>
<script>
let ok=0, err=0;
async function fetchData(){
  try{
    const r = await fetch('/api/data');
    const d = await r.json();
    document.getElementById('temp').textContent = d.temperature;
    document.getElementById('hum').textContent  = d.humidity;
    document.getElementById('status').textContent =
      'Cap nhat: ' + new Date().toLocaleTimeString() +
      ' | OK:' + (++ok) + ' Loi:' + err;
  }catch(e){ err++; }
}
async function led(cmd){
  await fetch('/api/led?cmd=' + cmd);
}
fetchData();
setInterval(fetchData, 2000);
<\/script>
</body></html>
)HTML";

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(2, OUTPUT);
  WiFi.begin(SSID, PASS);
  while(WiFi.status()!=WL_CONNECTED){delay(500);Serial.print(".");}
  Serial.println("\\nWiFi: http://" + WiFi.localIP().toString());

  server.on("/", [](){
    server.send_P(200, "text/html", HTML);
  });

  server.on("/api/data", [](){
    char json[100];
    snprintf(json, sizeof(json),
      "{\\"temperature\\":\\"%.1f\\",\\"humidity\\":\\"%.1f\\",\\"uptime\\":%lu}",
      temp, hum, millis()/1000);
    server.send(200, "application/json", json);
  });

  server.on("/api/led", [](){
    String cmd = server.arg("cmd");
    digitalWrite(2, cmd == "ON" ? HIGH : LOW);
    server.send(200, "application/json", "{\\"status\\":\\"ok\\"}");
  });

  server.begin();
}

unsigned long lastRead = 0;
void loop() {
  server.handleClient();
  if (millis()-lastRead >= 2000) {
    lastRead = millis();
    float t = dht.readTemperature();
    float h = dht.readHumidity();
    if (!isnan(t)) { temp=t; hum=h; }
  }
}`}],tips:["Truy cập từ điện thoại trong cùng WiFi network","Chrome DevTools → Network để xem API requests","Thêm chart.js từ CDN để vẽ biểu đồ lịch sử"],expect:"Mở http://IP-ESP32 trên điện thoại thấy dashboard, data cập nhật 2s/lần",verify:[{q:"Dashboard load?",cmd:"Truy cập IP trên browser"},{q:"Data cập nhật?",cmd:"Nhiệt độ thay đổi khi thở vào sensor"},{q:"LED điều khiển?",cmd:"Click ON/OFF button"}]},{id:"l7",group:"TinyML",groupColor:"#a855f7",diff:"hard",time:"180 phút",hw:"ESP32 + MPU6050 + Edge Impulse",title:"Lab 7 — Nhận dạng cử chỉ tay (TinyML)",obj:"Thu thập dữ liệu accelerometer, train model phân loại 4 cử chỉ tay bằng Edge Impulse, deploy TFLite Micro trên ESP32.",theory:"Edge Impulse: platform end-to-end cho TinyML. Spectral Analysis block trích xuất FFT features từ accelerometer. NN Classifier với quantization INT8 chạy trên ESP32 < 20ms/inference.",steps:[{t:"Kết nối MPU6050",lang:"",info:"I2C connection:",code:`MPU6050:
  VCC → 3.3V
  GND → GND
  SDA → GPIO21
  SCL → GPIO22
  AD0 → GND (địa chỉ 0x68, nếu AD0=3.3V → 0x69)

Library Manager: "MPU6050" by Electronic Cats → Install
Hoặc: "I2Cdevlib-MPU6050" → Install`},{t:"Thu thập dữ liệu với Edge Impulse",lang:"bash",info:"",code:`# 1. Đăng ký: studio.edgeimpulse.com (miễn phí)
# 2. New Project → Accelerometer (motion)
# 3. Data Acquisition → Connect device

# Cài edge-impulse-cli:
npm install -g edge-impulse-cli

# Kết nối ESP32 qua USB, chạy:
edge-impulse-daemon

# Quay lại studio → Data Acquisition
# Thu thập 30+ mẫu × 4 class × 2 giây mỗi mẫu:
# - shake   (lắc ngang)
# - wave    (vẫy lên xuống)
# - circle  (vòng tròn)
# - idle    (đặt yên)`},{t:"Tạo Impulse & Train",lang:"",info:"Trên Edge Impulse Studio:",code:`Create Impulse:
  Input:  Window 2000ms, 50Hz → 100 samples
  Signal Processing: Spectral Analysis
    - FFT length: 16
    - Noise floor: -52 dB
  Learning: Classification
    - 4 output classes
    - Dense layers: 20 → Dropout 0.25 → 10

Training:
  Epochs: 30
  LR: 0.001
  Expected accuracy: >88%

Deploy:
  Arduino library → Build → Download .zip
  Arduino IDE → Sketch → Include Library → Add .ZIP`},{t:"Inference trên ESP32",lang:"cpp",info:"Sau khi import library từ Edge Impulse:",code:`// Library name thay đổi theo project của bạn
#include <YourProject_inferencing.h>
#include <MPU6050_tockn.h>

MPU6050 mpu(Wire);
float features[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE];

int raw_feature_get_data(size_t offset, size_t length, float *signal) {
  memcpy(signal, features + offset, length * sizeof(float));
  return 0;
}

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  mpu.begin();
  mpu.calcGyroOffsets(true);
  Serial.printf("Model: %d classes, %d features\\n",
    EI_CLASSIFIER_LABEL_COUNT,
    EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
}

void loop() {
  Serial.println("Sampling 2s...");
  for (int i=0; i < EI_CLASSIFIER_RAW_SAMPLE_COUNT; i++) {
    mpu.update();
    int base = i * EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME;
    features[base+0] = mpu.getAccX();
    features[base+1] = mpu.getAccY();
    features[base+2] = mpu.getAccZ();
    delay(1000 / EI_CLASSIFIER_FREQUENCY);
  }

  signal_t signal;
  signal.total_length = EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE;
  signal.get_data     = &raw_feature_get_data;

  ei_impulse_result_t result;
  EI_IMPULSE_ERROR err = run_classifier(&signal, &result, false);

  if (err != EI_IMPULSE_OK) {
    Serial.println("Classifier error: " + String(err)); return;
  }

  // Print all predictions
  float maxVal = 0; const char* maxLabel = "";
  for (auto& c : result.classification) {
    Serial.printf("  %s: %.1f%%\\n", c.label, c.value*100);
    if (c.value > maxVal) { maxVal = c.value; maxLabel = c.label; }
  }
  Serial.printf("==> %s (%.1f%%) in %lums\\n\\n",
    maxLabel, maxVal*100, result.timing.dsp + result.timing.classification);
}`}],tips:["Thu thập data đa dạng: nhiều người, nhiều tốc độ","Idle class quan trọng để tránh false positive","Accuracy <80%: thu thập thêm data, đặc biệt class bị nhầm"],expect:"4 cử chỉ nhận dạng chính xác >85%, inference <50ms",verify:[{q:"Accuracy >85%?",cmd:"Edge Impulse Test set accuracy"},{q:"Inference time?",cmd:"Serial: timing in ms"},{q:"4 class đúng?",cmd:"Test từng cử chỉ 10 lần"}]},{id:"l8",group:"TinyML",groupColor:"#a855f7",diff:"hard",time:"180 phút",hw:"ESP32 + MPU6050",title:"Lab 8 — Anomaly Detection rung động",obj:"Train Autoencoder TFLite phát hiện rung động bất thường (gắn vào máy móc). Deploy trên ESP32 với threshold tự động.",theory:'Autoencoder train chỉ trên data "bình thường". Reconstruction error thấp = bình thường. Reconstruction error cao = bất thường. Không cần label negative samples.',steps:[{t:"Thu thập data bình thường",lang:"cpp",info:"Gắn ESP32+MPU6050 vào máy đang hoạt động bình thường, chạy 1 giờ:",code:`#include <MPU6050_tockn.h>
MPU6050 mpu(Wire);

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  mpu.begin();
  mpu.calcGyroOffsets(true);
  Serial.println("Logging started...");
}

void loop() {
  mpu.update();
  // Log CSV: timestamp, ax, ay, az, gx, gy, gz
  Serial.printf("%lu,%.4f,%.4f,%.4f,%.4f,%.4f,%.4f\\n",
    millis(),
    mpu.getAccX(), mpu.getAccY(), mpu.getAccZ(),
    mpu.getGyroX(), mpu.getGyroY(), mpu.getGyroZ());
  delay(20); // 50 Hz
}`},{t:"Train Autoencoder (Python/Colab)",lang:"python",info:"",code:`import numpy as np
import tensorflow as tf

# Load CSV data (bỏ header, lấy cột ax,ay,az)
data = np.genfromtxt('normal_vibration.csv', delimiter=',')
acc = data[:, 1:4]  # ax, ay, az

# Feature extraction: window 256 samples
def features(w):
    out = []
    for ax in w.T:  # 3 axes
        out += [np.mean(ax), np.std(ax),
                np.max(ax)-np.min(ax),  # range
                np.sqrt(np.mean(ax**2))] # RMS
    return np.array(out)  # 12 features

# Tạo windows
WIN = 256
X = np.array([features(acc[i:i+WIN]) for i in range(0, len(acc)-WIN, 50)])
print(f"Dataset: {X.shape}")  # (N, 12)

# Normalize (lưu params để dùng trên device)
mean, std = X.mean(0), X.std(0)
np.savetxt('norm_params.csv', np.vstack([mean, std]))
Xn = (X - mean) / (std + 1e-8)

# Autoencoder
inp = tf.keras.Input(shape=(12,))
x   = tf.keras.layers.Dense(8, 'relu')(inp)
x   = tf.keras.layers.Dense(4, 'relu')(x)   # bottleneck
x   = tf.keras.layers.Dense(8, 'relu')(x)
out = tf.keras.layers.Dense(12)(x)
ae  = tf.keras.Model(inp, out)
ae.compile('adam', 'mse')
ae.fit(Xn, Xn, 100, 32, validation_split=0.2, verbose=1)

# Threshold: mean + 3*std of reconstruction error
errors = np.mean((ae.predict(Xn) - Xn)**2, axis=1)
thresh = errors.mean() + 3 * errors.std()
print(f"Threshold: {thresh:.5f}")

# Convert TFLite INT8
cvt = tf.lite.TFLiteConverter.from_keras_model(ae)
cvt.optimizations = [tf.lite.Optimize.DEFAULT]
tflite = cvt.convert()
print(f"Model: {len(tflite)/1024:.1f} KB")

# Tạo C header
with open('anomaly_model.h', 'w') as f:
    f.write('const unsigned char g_model[] = {')
    f.write(','.join(f'0x{b:02x}' for b in tflite))
    f.write(f'}};\\nconst unsigned int g_model_len = {len(tflite)};')`},{t:"Deploy & Inference ESP32",lang:"cpp",info:"",code:`#include <TensorFlowLite_ESP32.h>
#include "anomaly_model.h"
#include "tensorflow/lite/micro/all_ops_resolver.h"
#include "tensorflow/lite/micro/micro_interpreter.h"

// Norm params từ training
const float MEAN[12] = {/* copy từ norm_params.csv */};
const float STD[12]  = {/* copy từ norm_params.csv */};
const float THRESHOLD = 0.0142f; // Từ training

const int ARENA = 8*1024;
uint8_t arena[ARENA];
tflite::MicroInterpreter* interp = nullptr;

void setup() {
  Serial.begin(115200);
  Wire.begin(21,22); mpu.begin();
  // ... init TFLite như Lab 7
  Serial.printf("Threshold: %.5f\\n", THRESHOLD);
}

void loop() {
  // 1. Thu thập window 256 mẫu
  float acc[256][3];
  for(int i=0;i<256;i++){
    mpu.update();
    acc[i][0]=mpu.getAccX();
    acc[i][1]=mpu.getAccY();
    acc[i][2]=mpu.getAccZ();
    delay(20);
  }

  // 2. Extract 12 features
  TfLiteTensor* in = interp->input(0);
  for(int ax=0;ax<3;ax++){
    float mn=0,rms=0,mn2=0,rnge;
    float mx=-999,mi=999;
    for(int i=0;i<256;i++){
      mn+=acc[i][ax]; rms+=acc[i][ax]*acc[i][ax];
      if(acc[i][ax]>mx) mx=acc[i][ax];
      if(acc[i][ax]<mi) mi=acc[i][ax];
    }
    mn/=256; rms=sqrt(rms/256);
    for(int i=0;i<256;i++){float d=acc[i][ax]-mn;mn2+=d*d;}
    float sd=sqrt(mn2/256);
    int b=ax*4;
    in->data.f[b+0]=(mn  -MEAN[b+0])/(STD[b+0]+1e-8f);
    in->data.f[b+1]=(sd  -MEAN[b+1])/(STD[b+1]+1e-8f);
    in->data.f[b+2]=(mx-mi-MEAN[b+2])/(STD[b+2]+1e-8f);
    in->data.f[b+3]=(rms -MEAN[b+3])/(STD[b+3]+1e-8f);
  }

  // 3. Inference
  interp->Invoke();
  TfLiteTensor* out = interp->output(0);

  // 4. Reconstruction MSE
  float mse=0;
  for(int i=0;i<12;i++){float d=out->data.f[i]-in->data.f[i];mse+=d*d;}
  mse/=12;

  Serial.printf("MSE:%.5f %s\\n", mse, mse>THRESHOLD?"[ANOMALY!]":"OK");
}`}],tips:["Thu thập ít nhất 500 windows để threshold chính xác","Test anomaly: gõ nhẹ vào bàn, thêm tải vào máy","Gửi MQTT alert khi anomaly để logging"],expect:"Normal MSE < threshold, lắc mạnh → ANOMALY detected",verify:[{q:"Normal state OK?",cmd:"Đặt yên: MSE < threshold"},{q:"Anomaly detected?",cmd:"Lắc mạnh: MSE > threshold"}]},{id:"l9",group:"Hệ thống",groupColor:"#f59e0b",diff:"hard",time:"240 phút",hw:"Raspberry Pi + ESP32",title:"Lab 9 — Node-RED & Grafana Dashboard",obj:"Raspberry Pi: cài Mosquitto + Node-RED + InfluxDB + Grafana. ESP32 gửi data. Dashboard realtime professional.",theory:"TIG Stack (Telegraf/Node-RED + InfluxDB + Grafana): pipeline IoT chuẩn sản xuất. Node-RED xử lý logic, InfluxDB lưu time-series, Grafana vẽ biểu đồ.",steps:[{t:"Cài stack trên Raspberry Pi",lang:"bash",info:"Chạy trên Raspberry Pi 4 (Ubuntu Server 22.04):",code:`# 1. Cài Mosquitto MQTT broker
sudo apt install mosquitto mosquitto-clients -y
sudo systemctl enable --now mosquitto

# 2. Cài Node-RED
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
sudo systemctl enable --now nodered
# Truy cập: http://PI_IP:1880

# 3. Cài InfluxDB v2
wget -q https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1_linux_arm64.tar.gz
tar xf influxdb2-*.tar.gz
sudo mv influxdb2-*/influxdb2 /usr/local/bin/influxd
sudo systemctl start influxd
# Setup: http://PI_IP:8086

# 4. Cài Grafana
sudo apt install grafana -y
sudo systemctl enable --now grafana-server
# Truy cập: http://PI_IP:3000 (admin/admin)`},{t:"Node-RED Flow: MQTT → InfluxDB",lang:"",info:"Import flow JSON vào Node-RED:",code:`Flow mẫu (kéo từ palette):

[mqtt-in: topic="sensors/#"] 
  → [json parse] 
  → [function: add tags]
  → [influxdb out: bucket="sensors"]
  → [debug]

Function node code:
msg.measurement = "environment";
msg.tags = {
    device: msg.payload.device || "esp32",
    location: msg.topic.split('/')[1]
};
msg.fields = {
    temperature: parseFloat(msg.payload.temperature),
    humidity:    parseFloat(msg.payload.humidity),
    rssi:        msg.payload.rssi
};
return msg;`},{t:"Grafana Dashboard",lang:"",info:"Tạo dashboard sau khi có data:",code:`Data Source: InfluxDB
  URL: http://localhost:8086
  Token: [từ InfluxDB setup]
  Org: aiot-edu, Bucket: sensors

Panel 1 — Temperature Time Series:
from(bucket:"sensors")
  |> range(start: -1h)
  |> filter(fn: (r) => r._field == "temperature")
  |> aggregateWindow(every: 1m, fn: mean)

Panel 2 — Humidity Gauge: range 0-100%
Panel 3 — RSSI Stat panel: last value
Panel 4 — Heatmap: temperature distribution
Panel 5 — Table: last 10 readings
Panel 6 — Alert: temp > 35°C → Telegram notification`}],tips:["Docker Compose là cách dễ nhất để cài toàn bộ stack","Grafana Alert: notification channel → Telegram bot rất hữu ích","InfluxDB retention policy: xóa data cũ hơn 30 ngày tự động"],expect:"Grafana dashboard realtime cập nhật mỗi giây, alert hoạt động",verify:[{q:"Node-RED nhận MQTT?",cmd:"Debug node hiển thị payload"},{q:"InfluxDB có data?",cmd:"Data Explorer: query sensors bucket"},{q:"Grafana chart?",cmd:"Panel hiển thị đường time-series"}]},{id:"l10",group:"Hệ thống",groupColor:"#f59e0b",diff:"hard",time:"240 phút",hw:"ESP32 multi-node + cloud",title:"Lab 10 — Smart Farm end-to-end",obj:"Hệ thống tưới cây thông minh hoàn chỉnh: soil sensor + DHT22 + relay bơm + AI quyết định + dashboard + Telegram alert.",theory:"Smart Farm kết hợp multi-sensor, AI decision logic, actuator control và cloud monitoring. Đây là mẫu điển hình của AIoT production system.",steps:[{t:"Hardware setup",lang:"",info:"Linh kiện cần thiết:",code:`ESP32 Dev Board × 1
DHT22 (nhiệt độ + độ ẩm KK) × 1
Capacitive Soil Moisture Sensor v1.2 × 2
Relay Module 5V × 1 (điều khiển bơm nước)
Mini Water Pump 5V × 1 + ống nước silicone
NTP Time (không cần module, dùng WiFi NTP)
Power Supply 5V 2A

Kết nối:
  Soil 1 → GPIO34 (ADC1_CH6)
  Soil 2 → GPIO35 (ADC1_CH7)
  DHT22  → GPIO4
  Relay  → GPIO26 (active LOW)`},{t:"AI quyết định tưới",lang:"cpp",info:"Rule-based AI kết hợp nhiều yếu tố:",code:`#include <WiFi.h>
#include <time.h>
#include <DHT.h>
#include <PubSubClient.h>

// NTP Time
const char* NTP_SERVER = "pool.ntp.org";
const long  GMT_OFFSET = 7*3600;  // UTC+7 Việt Nam

// Calibration (đo thực tế với đất của bạn)
#define SOIL_DRY   3200  // ADC khi đất khô
#define SOIL_WET   1200  // ADC khi đất ướt

float getSoilMoisture(int pin) {
  int raw = analogRead(pin);
  float pct = map(raw, SOIL_DRY, SOIL_WET, 0, 100);
  return constrain(pct, 0, 100);
}

bool pumpOn = false;
void pump(bool on, int sec=0) {
  pumpOn = on;
  digitalWrite(RELAY_PIN, on ? LOW : HIGH); // active LOW
  if (on && sec>0) { delay((long)sec*1000); pump(false); }
}

// AI decision engine
String waterDecision(float s1, float s2, float t, float h, int hr) {
  float avg = (s1 + s2) / 2.0f;

  if (hr < 6 || hr > 20) return "SKIP_NIGHT";
  if (h > 85.0f)          return "SKIP_HIGH_HUMIDITY";
  if (avg > 65.0f)        return "SKIP_WET_SOIL";

  if (avg < 25.0f) return "WATER_URGENT";
  if (avg < 40.0f && t > 30.0f) return "WATER_HOT";
  if (avg < 45.0f && (hr==7||hr==18)) return "WATER_ROUTINE";

  return "NO_ACTION";
}

void loop() {
  static unsigned long last = 0;
  if (millis()-last < 60000) return;
  last = millis();

  struct tm tm; getLocalTime(&tm);
  int hour = tm.tm_hour;

  float s1 = getSoilMoisture(SOIL1_PIN);
  float s2 = getSoilMoisture(SOIL2_PIN);
  float t  = dht.readTemperature();
  float h  = dht.readHumidity();

  String decision = waterDecision(s1, s2, t, h, hour);
  Serial.printf("[%02d:00] Soil:%.0f/%.0f T:%.1f H:%.1f -> %s\\n",
    hour, s1, s2, t, h, decision.c_str());

  if (decision.startsWith("WATER_")) {
    int duration = decision.contains("URGENT") ? 60 : 30;
    pump(true, duration);
    // MQTT notification
    mqtt.publish("farm/watering",
      ("start:" + String(duration) + "s").c_str());
  }
}`},{t:"Telegram Bot Alert",lang:"cpp",info:"",code:`#include <WiFiClientSecure.h>
#include <HTTPClient.h>

const char* BOT_TOKEN = "YOUR_BOT_TOKEN";
const char* CHAT_ID   = "YOUR_CHAT_ID";

void sendTelegram(String msg) {
  if (WiFi.status() != WL_CONNECTED) return;

  WiFiClientSecure client;
  client.setInsecure(); // Bỏ qua cert verify

  HTTPClient http;
  String url = "https://api.telegram.org/bot" +
               String(BOT_TOKEN) + "/sendMessage";
  http.begin(client, url);
  http.addHeader("Content-Type", "application/json");

  String body = "{\\"chat_id\\":\\"" + String(CHAT_ID) +
                "\\",\\"text\\":\\"" + msg + "\\"}";
  http.POST(body);
  http.end();
}

// Gọi khi cần alert:
// sendTelegram("Dat kho! Soil: 20% - Da tuoi 60 giac.");
// sendTelegram("CANH BAO: Nhiet do cao " + String(t) + "C");`}],tips:["Tạo Telegram bot: chat với @BotFather trên Telegram","Calibrate soil sensor: đo ADC khi cắm vào nước và khi để khô","Test ban đầu với chậu cây nhỏ trước khi triển khai thực tế"],expect:"Hệ thống tự động tưới khi đất khô, Telegram nhận alert trong <30s",verify:[{q:"Soil moisture đọc đúng?",cmd:"Serial log, so sánh với đất ẩm/khô"},{q:"Bơm bật khi cần?",cmd:"Đặt ngưỡng thấp, test logic"},{q:"Telegram alert?",cmd:"Trigger watering, check điện thoại"}]}],Vf=[{id:"l11",group:"Nâng cao",groupColor:"#2dd4bf",diff:"hard",time:"180 phút",hw:"ESP32 + INMP441 + Edge Impulse",title:"Lab 11 — Phân loại âm thanh máy móc",obj:"Thu thập âm thanh máy móc 4 trạng thái (bình thường, mất cân bằng, thiếu dầu, hỏng bearing), train MFCC + CNN, deploy realtime.",theory:"Âm thanh máy móc chứa thông tin về tình trạng: bearing fault tạo ra high-frequency harmonics, cavitation tạo broadband noise. MFCC trích xuất đặc trưng âm thanh tốt cho classification.",steps:[{t:"Setup microphone I2S INMP441",lang:"cpp",info:"",code:`// INMP441 MEMS Microphone - I2S interface
// Chính xác hơn analog mic: SNR ~61dB, frequency 60Hz-15kHz

#define I2S_WS  25  // Word Select (L/R clock)
#define I2S_SCK 26  // Bit Clock
#define I2S_SD  22  // Serial Data

#include <driver/i2s.h>

void setupI2S() {
  i2s_config_t config = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
    .sample_rate = 16000,       // 16kHz — đủ cho máy móc
    .bits_per_sample = I2S_BITS_PER_SAMPLE_32BIT,
    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
    .communication_format = I2S_COMM_FORMAT_STAND_I2S,
    .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1,
    .dma_buf_count = 8,
    .dma_buf_len = 512,
    .use_apll = true,           // Better clock accuracy
  };
  i2s_driver_install(I2S_NUM_0, &config, 0, NULL);

  i2s_pin_config_t pins = {
    .bck_io_num   = I2S_SCK,
    .ws_io_num    = I2S_WS,
    .data_out_num = I2S_PIN_NO_CHANGE,
    .data_in_num  = I2S_SD,
  };
  i2s_set_pin(I2S_NUM_0, &pins);
}

// Đọc audio: trả về buffer 16-bit samples
void readAudio(int16_t* buffer, int len) {
  int32_t raw[512];
  size_t bytesRead;
  for (int i = 0; i < len; i += 512) {
    int chunk = min(512, len - i);
    i2s_read(I2S_NUM_0, raw, chunk * 4, &bytesRead, 100);
    for (int j = 0; j < chunk; j++)
      buffer[i+j] = (int16_t)(raw[j] >> 11);  // 32-bit → 16-bit
  }
}`},{t:"Thu thập data 4 class trên Edge Impulse",lang:"bash",info:"",code:`# Cách thu thập: gắn mic vào máy đang chạy
# Mỗi class: 60 mẫu × 1 giây @ 16kHz

Class 1 (normal):    Máy chạy bình thường
Class 2 (imbalance): Thêm counterweight lệch vào motor
Class 3 (dry):       Tắt dầu bôi trơn bearing
Class 4 (fault):     Damage bearing (nếu có)
Background:          Tiếng ồn xung quanh (không có máy)

# Edge Impulse Impulse Design:
Input:     1000ms window, 16000Hz → 16000 samples
Processing: MFCC block
  - Frame length: 0.02s
  - Frame stride: 0.01s
  - Num filters: 40
  - Noise floor: -52dB
  - Num coefficients: 13
Learning:  Classification NN
  - 2D Conv (mFCC heatmap input)
  - Dense layers
  - Output: 5 classes`},{t:"Deploy TFLite + realtime classification",lang:"cpp",info:"",code:`#include <MachineSoundClassifier_inferencing.h>

const int SAMPLE_LEN = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
int16_t audio_buffer[SAMPLE_LEN];

const char* LABELS[] = {"normal","imbalance","dry_bearing","fault","background"};
const float THRESHOLD = 0.75f;  // Minimum confidence

void classifyAudio() {
  readAudio(audio_buffer, SAMPLE_LEN);

  signal_t signal;
  numpy::signal_from_buffer(audio_buffer, SAMPLE_LEN, &signal);

  ei_impulse_result_t result;
  EI_IMPULSE_ERROR err = run_classifier(&signal, &result, false);

  if (err != EI_IMPULSE_OK) return;

  float maxConf = 0; int maxIdx = 0;
  for (int i=0; i<5; i++) {
    if (result.classification[i].value > maxConf) {
      maxConf = result.classification[i].value;
      maxIdx  = i;
    }
  }

  if (maxConf >= THRESHOLD && maxIdx != 4) {  // Bỏ background
    Serial.printf("[ALERT] %s (%.1f%%)\\n",
      LABELS[maxIdx], maxConf * 100);

    // Gửi MQTT alert
    char payload[100];
    snprintf(payload, sizeof(payload),
      "{\\"fault\\":\\"%s\\",\\"confidence\\":%.2f}",
      LABELS[maxIdx], maxConf);
    mqtt.publish("factory/machine1/fault", payload);
  }
}

void loop() {
  classifyAudio();  // Continuous classification
  mqtt.loop();
}`}],tips:["Gắn mic chắc vào máy, không rung lắc do mount","Thu thập ở nhiều tốc độ motor để model generalize","Background noise samples quan trọng để tránh false positive"],expect:"4 class phân biệt chính xác >85%, MQTT alert khi phát hiện lỗi",verify:[{q:"Accuracy >85%?",cmd:"Edge Impulse test set report"},{q:"Realtime <100ms?",cmd:"Đo inference timing từ Serial"},{q:"MQTT alert nhận được?",cmd:"mosquitto_sub xem factory/machine1/fault"}]},{id:"l12",group:"Nâng cao",groupColor:"#2dd4bf",diff:"hard",time:"240 phút",hw:"ESP32 + sensors + cloud",title:"Lab 12 — MQTT over TLS với Certificate Auth",obj:"Bảo mật hoàn toàn MQTT bằng TLS 1.3 + X.509 mutual authentication. Mỗi ESP32 có certificate duy nhất. ACL per device.",theory:"TLS mutual auth: (1) Server gửi cert → client verify broker identity (chống MITM). (2) Client gửi cert → broker verify device identity (không cần username/password). X.509 cert không thể stolen từ firmware vì private key không accessible.",steps:[{t:"Tạo CA và certificates",lang:"bash",info:"Chạy trên Linux/Mac:",code:`# 1. Tạo CA (Certificate Authority)
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 3650 -key ca.key -out ca.crt \\
  -subj "/CN=AIoT-CA/O=DLU/C=VN"

# 2. Tạo server certificate cho Mosquitto
openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr \\
  -subj "/CN=192.168.1.100/O=AIoT-Broker/C=VN"
openssl x509 -req -days 365 -in server.csr \\
  -CA ca.crt -CAkey ca.key -CAcreateserial \\
  -out server.crt

# 3. Tạo client cert cho ESP32-001
openssl genrsa -out esp32-001.key 2048
openssl req -new -key esp32-001.key -out esp32-001.csr \\
  -subj "/CN=esp32-001/O=AIoT-Devices/C=VN"
openssl x509 -req -days 365 -in esp32-001.csr \\
  -CA ca.crt -CAkey ca.key -CAcreateserial \\
  -out esp32-001.crt

echo "Certs generated:"
ls -la *.crt *.key`},{t:"Cấu hình Mosquitto TLS",lang:"bash",info:"",code:`# /etc/mosquitto/mosquitto.conf
listener 8883
protocol mqtt

# TLS config
cafile   /etc/mosquitto/certs/ca.crt
certfile /etc/mosquitto/certs/server.crt
keyfile  /etc/mosquitto/certs/server.key

# Require client certificate
require_certificate true
use_identity_as_username true  # CN của cert = username cho ACL

# ACL file
acl_file /etc/mosquitto/acl

# /etc/mosquitto/acl
# esp32-001 chỉ được pub/sub topic của mình
user esp32-001
topic readwrite devices/esp32-001/#
topic read commands/esp32-001

user esp32-002
topic readwrite devices/esp32-002/#
topic read commands/esp32-002`},{t:"ESP32 TLS Client Code",lang:"cpp",info:"",code:`#include <WiFiClientSecure.h>
#include <PubSubClient.h>

// CA cert (từ ca.crt)
const char* CA_CERT = R"(
-----BEGIN CERTIFICATE-----
MIIFazCCA1OgAwIBAgIUCB... (content của ca.crt)
-----END CERTIFICATE-----
)";

// Device cert (từ esp32-001.crt)
const char* DEVICE_CERT = R"(
-----BEGIN CERTIFICATE-----
MIIDpTCCAo2gAwIBAgIU... (content của esp32-001.crt)
-----END CERTIFICATE-----
)";

// Device private key (từ esp32-001.key)
const char* DEVICE_KEY = R"(
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA... (content của esp32-001.key)
-----END RSA PRIVATE KEY-----
)";

WiFiClientSecure wifiClient;
PubSubClient mqtt(wifiClient);

void setupSecureMQTT() {
  wifiClient.setCACert(CA_CERT);
  wifiClient.setCertificate(DEVICE_CERT);
  wifiClient.setPrivateKey(DEVICE_KEY);

  mqtt.setServer("192.168.1.100", 8883);  // TLS port
  
  if (mqtt.connect("esp32-001")) {
    Serial.println("Secure MQTT connected!");
    mqtt.subscribe("commands/esp32-001");
    mqtt.publish("devices/esp32-001/status", "online");
  }
}`}],tips:["Private key phải được protect: không log ra Serial!",'Chuyển cert thành C string: cat ca.crt | sed "s/^/\\"/;s/$/\\\\n\\"/"',"Cert expire: tạo với -days 3650 (10 năm) cho IoT devices"],expect:"TLS handshake thành công. Wireshark: traffic encrypted. Device01 không access topic của device02.",verify:[{q:"TLS connect OK?",cmd:"Serial: Secure MQTT connected!"},{q:"Traffic encrypted?",cmd:"Wireshark: Application Data"},{q:"ACL enforced?",cmd:"Thử pub topic khác → rejected"}]},{id:"l13",group:"Nâng cao",groupColor:"#2dd4bf",diff:"hard",time:"300 phút",hw:"Raspberry Pi 4 + ESP32-CAM",title:"Lab 13 — Real-time Object Detection với YOLOv8n",obj:"Deploy YOLOv8 Nano trên Raspberry Pi 4 để detect người và xe trên RTSP stream từ ESP32-CAM. Dashboard đếm theo giờ trên Grafana.",theory:"YOLOv8n (Nano): 3.2M parameters, 8.7ms RPi4. Single-shot detector: chia ảnh thành grid, mỗi cell predict bounding boxes + class. Tốt hơn Cascade Classifier và MobileNet SSD.",steps:[{t:"Setup ESP32-CAM RTSP stream",lang:"cpp",info:"",code:`#include <esp_camera.h>
#include <WiFi.h>
#include "src/OV2640.h"
#include "SimStreamer.h"
#include "OV2640Streamer.h"
#include "CRtspSession.h"

// Sau khi setup camera (FRAMESIZE_VGA 640×480)
WiFiServer server(554);  // RTSP port
WiFiClient client;
CStreamer* streamer;

void loop() {
  client = server.accept();
  if (client) {
    streamer = new OV2640Streamer(&client, cam);
    CRtspSession* session = new CRtspSession(&client, streamer);
    while (client.connected()) {
      session->handleRequests(0);
      delay(1);
    }
    delete session; delete streamer;
  }
}
// Connect từ VLC: rtsp://ESP32_CAM_IP:554/mjpeg/1`},{t:"YOLOv8n inference trên Raspberry Pi",lang:"bash",info:"",code:`# Cài YOLOv8
pip install ultralytics opencv-python

# Download pre-trained YOLOv8n (3.2MB)
yolo export model=yolov8n.pt format=ncnn   # Faster on Pi
# Hoặc dùng trực tiếp PyTorch: chậm hơn nhưng đơn giản hơn`},{t:"Detection + MQTT pipeline",lang:"python",info:"",code:`from ultralytics import YOLO
import cv2, json, time
import paho.mqtt.client as mqtt

model = YOLO('yolov8n.pt')
cap   = cv2.VideoCapture('rtsp://192.168.1.x:554/mjpeg/1')
mq    = mqtt.Client()
mq.connect("localhost", 1883)

CLASSES_OF_INTEREST = ['person', 'car', 'bicycle', 'motorcycle']
counts = {c: 0 for c in CLASSES_OF_INTEREST}

prev_publish = time.time()

while True:
    ret, frame = cap.read()
    if not ret: time.sleep(0.1); continue

    results = model(frame, conf=0.5, verbose=False)[0]

    # Count detections
    frame_counts = {c: 0 for c in CLASSES_OF_INTEREST}
    for box in results.boxes:
        cls_name = model.names[int(box.cls[0])]
        if cls_name in CLASSES_OF_INTEREST:
            frame_counts[cls_name] += 1

    # Publish mỗi 5 giây
    if time.time() - prev_publish >= 5:
        prev_publish = time.time()
        payload = {
            "timestamp": int(time.time()),
            "counts": frame_counts,
            "fps": cap.get(cv2.CAP_PROP_FPS)
        }
        mq.publish("camera/detections", json.dumps(payload))
        print(f"Published: {frame_counts}")

    # Annotate frame (optional, cho debug)
    annotated = results.plot()
    cv2.imshow('YOLOv8', annotated)
    if cv2.waitKey(1) == ord('q'): break`}],tips:["YOLOv8n trên RPi4 CPU: ~8-12 FPS. Dùng NCNN export cho RPi: ~20 FPS","Coral USB Accelerator: 4× speedup, tương thích TFLite","Giảm frame size xuống 416×416 hoặc 320×320 tăng FPS"],expect:"Detection 8+ FPS. Grafana: stacked bar chart đếm người/xe theo giờ",verify:[{q:"RTSP stream stable?",cmd:"VLC: rtsp://ESP32IP:554/mjpeg/1"},{q:"Detection accuracy?",cmd:"Visually inspect annotated frames"},{q:"MQTT data flow?",cmd:"mosquitto_sub camera/detections"}]},{id:"l14",group:"Nâng cao",groupColor:"#2dd4bf",diff:"hard",time:"300 phút",hw:"ESP32 + multi-sensors",title:"Lab 14 — Multi-sensor Fusion Wearable",obj:"Wearable prototype: đeo trên cổ tay, fusion MAX30105 (SpO2/HR) + MPU6050 (hoạt động) + nhiệt độ. Alert khi bất thường. BLE → điện thoại.",theory:"Wearable fusion: nhiệt độ da + HR + SpO2 + activity → context-aware monitoring. Ví dụ: HR cao khi đang tập thể dục là bình thường, HR cao khi nằm ngủ là bất thường.",steps:[{t:"Đọc MAX30105 Heart Rate + SpO2",lang:"cpp",info:"",code:`#include <MAX3010x.h>
#include "heartRate.h"  // HeartRate algorithm from SparkFun

MAX30105 particleSensor;
const byte RATE_SIZE = 4;
byte rates[RATE_SIZE]; byte rateSpot = 0;
long lastBeat = 0;
float beatsPerMinute;
int   beatAvg;

void setupHeartRate() {
  particleSensor.begin(Wire, I2C_SPEED_FAST);
  particleSensor.setup();
  particleSensor.setPulseAmplitudeRed(0x1F);
  particleSensor.setPulseAmplitudeIR(0x1F);
}

void readHR() {
  long irValue = particleSensor.getIR();
  
  if (checkForBeat(irValue)) {
    long delta = millis() - lastBeat;
    lastBeat = millis();
    beatsPerMinute = 60 / (delta / 1000.0);
    
    if (beatsPerMinute > 20 && beatsPerMinute < 255) {
      rates[rateSpot++] = (byte)beatsPerMinute;
      rateSpot %= RATE_SIZE;
      beatAvg = 0;
      for (byte x=0; x<RATE_SIZE; x++) beatAvg += rates[x];
      beatAvg /= RATE_SIZE;
    }
  }
  
  Serial.printf("HR: %d BPM | IR: %ld\\n", beatAvg, irValue);
  if (irValue < 50000) Serial.println("No finger detected");
}`},{t:"Activity detection + context fusion",lang:"cpp",info:"",code:`#include <MPU6050_tockn.h>

MPU6050 mpu(Wire);
enum Activity { RESTING, WALKING, RUNNING, SLEEPING };

Activity detectActivity() {
  mpu.update();
  float ax = mpu.getAccX(), ay = mpu.getAccY(), az = mpu.getAccZ();
  float magnitude = sqrt(ax*ax + ay*ay + az*az);
  
  // Tính variance trong 1 giây (50 samples)
  static float samples[50]; static int idx=0;
  samples[idx++ % 50] = magnitude;
  float mean=0;
  for(auto s:samples) mean+=s; mean/=50;
  float var=0;
  for(auto s:samples) var+=(s-mean)*(s-mean); var/=50;
  
  if (var < 0.01) return SLEEPING;
  if (var < 0.05) return RESTING;
  if (var < 0.3)  return WALKING;
  return RUNNING;
}

// Context-aware alert
void analyzeHealth(int hr, float temp, Activity act) {
  bool alert = false;
  String reason = "";
  
  if (act == RESTING && hr > 100) { alert=true; reason="Resting HR cao"; }
  if (act == SLEEPING && hr < 40) { alert=true; reason="HR quá thấp khi ngủ"; }
  if (temp > 38.5) { alert=true; reason="Sốt: "+String(temp,1)+"C"; }
  
  if (alert) {
    Serial.println("ALERT: " + reason);
    sendBLEAlert(reason);
    // Vibration motor nếu có
  }
}`},{t:"BLE Notify để gửi data lên điện thoại",lang:"cpp",info:"",code:`#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>
#include <BLE2902.h>

#define SERVICE_UUID    "12345678-1234-1234-1234-123456789abc"
#define HR_CHAR_UUID    "12345678-1234-1234-1234-123456789abd"
#define ALERT_CHAR_UUID "12345678-1234-1234-1234-123456789abe"

BLECharacteristic* hrCharacteristic;
BLECharacteristic* alertCharacteristic;
bool deviceConnected = false;

void setupBLE() {
  BLEDevice::init("AIoT-Wearable");
  BLEServer* server = BLEDevice::createServer();
  BLEService* service = server->createService(SERVICE_UUID);
  
  hrCharacteristic = service->createCharacteristic(
    HR_CHAR_UUID,
    BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY
  );
  hrCharacteristic->addDescriptor(new BLE2902());
  
  service->start();
  BLEDevice::startAdvertising();
}

void notifyHR(int hr, float spo2, float temp) {
  if (!deviceConnected) return;
  char data[50];
  snprintf(data, sizeof(data),
    "{\\"hr\\":%d,\\"spo2\\":%.1f,\\"temp\\":%.1f}", hr, spo2, temp);
  hrCharacteristic->setValue(data);
  hrCharacteristic->notify();
}`}],tips:["MAX30105 cần áp chặt vào da để đo chính xác","Baseline HR: đo 5 phút nghỉ ngơi trước khi set threshold","BLE power: BLE advertising ~0.5mA, notify when connected ~2mA"],expect:"BLE data visible trên nRF Connect app. HR chính xác ±5BPM. Alert khi HR > 100 khi nghỉ ngơi.",verify:[{q:"MAX30105 detect finger?",cmd:"Serial: IR > 50000"},{q:"BLE visible?",cmd:"nRF Connect scan: thấy AIoT-Wearable"},{q:"HR notification?",cmd:"Subscribe HR characteristic, xem values"}]},{id:"l15",group:"Nâng cao",groupColor:"#2dd4bf",diff:"hard",time:"360 phút",hw:"Multiple ESP32 + Gateway",title:"Lab 15 — Mesh Sensor Network với ESP-NOW",obj:"Build mesh network 4 ESP32 không cần router: 3 sensor nodes gửi data → 1 gateway node → MQTT → Dashboard. Tự heal khi 1 node mất kết nối.",theory:"ESP-NOW: Espressif proprietary protocol, 2.4GHz, peer-to-peer, không cần WiFi router. Latency <1ms, unicast/broadcast, tối đa 20 peers, payload 250 bytes. Gateway node có thể đồng thời ESP-NOW + WiFi.",steps:[{t:"Sensor Node (3 boards)",lang:"cpp",info:"",code:`#include <esp_now.h>
#include <WiFi.h>
#include <DHT.h>

// MAC address của Gateway — lấy từ: WiFi.macAddress() trên gateway board
uint8_t GATEWAY_MAC[] = {0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF};

DHT dht(4, DHT22);
int NODE_ID = 1;  // Mỗi board set khác nhau: 1, 2, 3

struct SensorPacket {
  uint8_t  nodeId;
  float    temperature;
  float    humidity;
  int32_t  rssi;
  uint32_t uptime;
  uint16_t sequence;
};

void onSent(const uint8_t* mac, esp_now_send_status_t status) {
  Serial.printf("Send to Gateway: %s\\n",
    status == ESP_NOW_SEND_SUCCESS ? "OK" : "FAIL");
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.mode(WIFI_STA);
  esp_now_init();
  esp_now_register_send_cb(onSent);

  esp_now_peer_info_t peer = {};
  memcpy(peer.peer_addr, GATEWAY_MAC, 6);
  peer.channel = 0; peer.encrypt = false;
  esp_now_add_peer(&peer);
}

uint16_t seqNum = 0;
unsigned long lastSend = 0;
void loop() {
  if (millis() - lastSend >= 5000) {
    lastSend = millis();
    SensorPacket pkt;
    pkt.nodeId      = NODE_ID;
    pkt.temperature = dht.readTemperature();
    pkt.humidity    = dht.readHumidity();
    pkt.rssi        = WiFi.RSSI();
    pkt.uptime      = millis() / 1000;
    pkt.sequence    = seqNum++;
    esp_now_send(GATEWAY_MAC, (uint8_t*)&pkt, sizeof(pkt));
  }
}`},{t:"Gateway Node (1 board)",lang:"cpp",info:"Gateway: nhận ESP-NOW + forward MQTT",code:`#include <esp_now.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

struct SensorPacket {
  uint8_t nodeId; float temperature, humidity;
  int32_t rssi; uint32_t uptime; uint16_t sequence;
};

WiFiClient wc; PubSubClient mqtt(wc);
uint16_t lastSeq[4] = {0};  // Track sequence per node
uint32_t lostPackets[4] = {0};

void onDataReceive(const esp_now_recv_info_t* info,
                   const uint8_t* data, int len) {
  if (len != sizeof(SensorPacket)) return;
  SensorPacket pkt;
  memcpy(&pkt, data, sizeof(pkt));

  // Detect lost packets
  uint16_t expected = lastSeq[pkt.nodeId] + 1;
  if (pkt.sequence != expected && lastSeq[pkt.nodeId] != 0)
    lostPackets[pkt.nodeId] += pkt.sequence - expected;
  lastSeq[pkt.nodeId] = pkt.sequence;

  // Forward to MQTT
  JsonDocument doc;
  doc["node_id"]     = pkt.nodeId;
  doc["temperature"] = pkt.temperature;
  doc["humidity"]    = pkt.humidity;
  doc["rssi"]        = pkt.rssi;
  doc["uptime"]      = pkt.uptime;
  doc["seq"]         = pkt.sequence;
  doc["lost_pkts"]   = lostPackets[pkt.nodeId];

  char topic[32]; sprintf(topic, "mesh/node%d", pkt.nodeId);
  char buf[200]; serializeJson(doc, buf);
  mqtt.publish(topic, buf);
  Serial.printf("Node%d: T=%.1f H=%.1f seq=%d\\n",
    pkt.nodeId, pkt.temperature, pkt.humidity, pkt.sequence);
}

void setup() {
  WiFi.mode(WIFI_AP_STA);  // Dual mode!
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  while(WiFi.status()!=WL_CONNECTED) delay(500);
  Serial.println("Gateway MAC: " + WiFi.macAddress());
  
  esp_now_init();
  esp_now_register_recv_cb(onDataReceive);
  
  mqtt.setServer(MQTT_HOST, 1883);
  mqtt.connect("esp32-gateway");
}

void loop() {
  if (!mqtt.connected()) mqtt.connect("esp32-gateway");
  mqtt.loop();
}`}],tips:["Gateway MAC: chạy WiFi.macAddress() trước, copy vào sensor nodes","WiFi.mode(WIFI_AP_STA) cần thiết cho gateway để dùng cả 2","ESP-NOW channel phải match WiFi channel của router (default: channel 6)"],expect:"3 sensor nodes gửi data mỗi 5s. Gateway forward MQTT. Packet loss <1%. Grafana 3 series.",verify:[{q:"ESP-NOW send OK?",cmd:"Serial sensor: Send to Gateway: OK"},{q:"Gateway forward?",cmd:"mosquitto_sub mesh/#"},{q:"Lost packets?",cmd:'doc["lost_pkts"] gần 0'}]}],Nt=[...qi,...Vf],h0=[{id:"Cơ bản",color:"#00e676",count:qi.filter(r=>r.group==="Cơ bản").length},{id:"Trung cấp",color:"#00d4ff",count:qi.filter(r=>r.group==="Trung cấp").length},{id:"TinyML",color:"#a855f7",count:qi.filter(r=>r.group==="TinyML").length},{id:"Hệ thống",color:"#f59e0b",count:qi.filter(r=>r.group==="Hệ thống").length},{id:"Nâng cao",color:"#2dd4bf",count:Vf.length}],Cf=Qf.length+Kf.length;function f0(){const r=[{n:Cf,l:"Chương lý thuyết",c:"var(--c)"},{n:Nt.length,l:"Labs thực hành",c:"var(--g)"},{n:Ua.length,l:"Câu trắc nghiệm",c:"var(--p)"},{n:Gi.length,l:"Bài tập",c:"var(--y)"},{n:Pn.length,l:"Đề tài NCKH",c:"var(--o)"}],u=[{to:"/theory",c:"var(--c)",n:"01",t:"Lý thuyết",d:`${Cf} chương — AIoT, DL, FPGA, Industry 4.0, Khởi nghiệp`},{to:"/labs",c:"var(--g)",n:"02",t:"Lab thực hành",d:`${Nt.length} labs — Hello World → Mesh Network → YOLOv8`},{to:"/quiz",c:"var(--p)",n:"03",t:"Trắc nghiệm",d:`${Ua.length} câu hỏi 8 chủ đề, 3 cấp độ, giải thích chi tiết`},{to:"/exercises",c:"var(--y)",n:"04",t:"Bài tập",d:`${Gi.length} bài từ LED đến FPGA systolic array`},{to:"/thesis",c:"var(--o)",n:"05",t:"Đề tài",d:`${Pn.length} đề tài từ Easy đến Startup IPO-ready`},{to:"/resources",c:"var(--tl)",n:"06",t:"Tài liệu",d:"Sách, khóa học, tools, dataset, cộng đồng khởi nghiệp"}],f=[{l:"Nhập môn",c:"var(--g)",d:"Arduino UNO, GPIO, ADC, UART, cảm biến cơ bản"},{l:"IoT Cơ bản",c:"var(--c)",d:"ESP32, WiFi, MQTT, OLED, REST API, LoRa"},{l:"TinyML",c:"var(--p)",d:"TFLite Micro, Edge Impulse, CNN, anomaly detection"},{l:"Hệ thống AIoT",c:"var(--y)",d:"Node-RED, Grafana, Docker, OTA, multi-node"},{l:"FPGA & Advanced",c:"var(--pk)",d:"Verilog, systolic array, LSTM, Digital Twin"},{l:"Startup",c:"var(--o)",d:"Business model, MVP, funding, go-to-market"}],s=[{tag:"TinyML",c:"var(--p)"},{tag:"ESP32-S3",c:"var(--c)"},{tag:"YOLOv8n",c:"var(--g)"},{tag:"LoRaWAN",c:"var(--y)"},{tag:"Federated Learning",c:"var(--o)"},{tag:"Digital Twin",c:"var(--tl)"},{tag:"ESP-NOW Mesh",c:"var(--c)"},{tag:"FPGA Accelerator",c:"var(--pk)"},{tag:"Smart Agriculture",c:"var(--g)"},{tag:"Industry 4.0",c:"var(--y)"},{tag:"OPC-UA",c:"var(--c)"},{tag:"Blockchain IoT",c:"var(--o)"}];return c.jsxs("div",{className:"fu",children:[c.jsxs("div",{style:{textAlign:"center",padding:"2rem 0 2.5rem"},children:[c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:".45rem",background:"rgba(0,212,255,.06)",border:"1px solid rgba(0,212,255,.18)",padding:".2rem .9rem",borderRadius:999,marginBottom:"1rem"},children:[c.jsx("span",{style:{width:6,height:6,background:"var(--g)",borderRadius:"50%",animation:"pulse 2s infinite",display:"inline-block"}}),c.jsx("span",{style:{fontSize:".68rem",color:"var(--c)",fontFamily:"var(--fm)"},children:"Đại học Đà Lạt — Khoa CNTT — 2025"})]}),c.jsxs("h1",{style:{marginBottom:".5rem"},children:[c.jsx("span",{className:"gt",children:"AIoT EDU"}),c.jsx("br",{}),c.jsx("span",{style:{color:"var(--txt2)",fontSize:".42em",fontWeight:400,lineHeight:1.5},children:"Giáo trình AI & IoT toàn diện từ cơ bản đến khởi nghiệp"})]}),c.jsx("p",{style:{color:"var(--txt2)",maxWidth:540,margin:"0 auto 1.3rem",fontSize:".86rem",lineHeight:1.8},children:"Arduino, ESP32, FPGA, TinyML, Edge AI, LoRa, MQTT — thực hành trên phần cứng thực tế. Phù hợp xu thế công nghiệp 4.0 và cơ hội khởi nghiệp công nghệ."}),c.jsxs("div",{style:{display:"flex",gap:".55rem",justifyContent:"center",flexWrap:"wrap"},children:[c.jsx(qa,{to:"/theory",className:"btn btn-p",children:"Bắt đầu học"}),c.jsx(qa,{to:"/labs",className:"btn btn-o",children:"Thực hành Lab"}),c.jsx(qa,{to:"/thesis",className:"btn btn-s",children:"Đề tài NCKH"})]})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(90px,1fr))",gap:".48rem",marginBottom:"2rem"},children:r.map((h,m)=>c.jsxs("div",{className:"card",style:{padding:".82rem .5rem",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:h.c,fontFamily:"var(--fm)",lineHeight:1,marginBottom:".2rem"},children:h.n}),c.jsx("div",{style:{fontSize:".65rem",color:"var(--txt3)",lineHeight:1.35},children:h.l})]},m))}),c.jsxs("div",{style:{marginBottom:"2rem"},children:[c.jsx("div",{style:{fontSize:".6rem",color:"var(--txt3)",fontFamily:"var(--fm)",marginBottom:".65rem",textTransform:"uppercase",letterSpacing:".08em"},children:"Lộ trình học"}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(200px,100%),1fr))",gap:".5rem"},children:u.map(h=>c.jsxs(qa,{to:h.to,className:"card card-a fu",style:{padding:"1rem",textDecoration:"none",borderColor:`${h.c}1a`},children:[c.jsx("div",{style:{fontSize:".6rem",color:h.c,fontFamily:"var(--fm)",fontWeight:700,marginBottom:".2rem"},children:h.n}),c.jsx("div",{style:{fontWeight:700,fontSize:".86rem",color:"var(--txt)",marginBottom:".2rem"},children:h.t}),c.jsx("div",{style:{fontSize:".74rem",color:"var(--txt3)",lineHeight:1.5},children:h.d})]},h.to))})]}),c.jsxs("div",{style:{marginBottom:"2rem"},children:[c.jsx("div",{style:{fontSize:".6rem",color:"var(--txt3)",fontFamily:"var(--fm)",marginBottom:".65rem",textTransform:"uppercase",letterSpacing:".08em"},children:"Chủ đề nổi bật 2026"}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:".38rem"},children:s.map((h,m)=>c.jsx("span",{style:{padding:".22rem .65rem",borderRadius:999,background:`${h.c}0d`,border:`1px solid ${h.c}28`,color:h.c,fontSize:".74rem",fontFamily:"var(--fm)",fontWeight:600},children:h.tag},m))})]}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:".6rem",color:"var(--txt3)",fontFamily:"var(--fm)",marginBottom:".65rem",textTransform:"uppercase",letterSpacing:".08em"},children:"Cấp độ nội dung"}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(195px,100%),1fr))",gap:".48rem"},children:f.map((h,m)=>c.jsxs("div",{className:"card",style:{padding:".85rem 1rem",borderLeft:`3px solid ${h.c}`,borderColor:`${h.c}14`,borderLeftColor:h.c},children:[c.jsx("div",{style:{fontWeight:700,fontSize:".83rem",color:h.c,marginBottom:".2rem"},children:h.l}),c.jsx("div",{style:{fontSize:".74rem",color:"var(--txt3)",lineHeight:1.5},children:h.d})]},m))})]}),c.jsxs("div",{style:{marginTop:"2rem",padding:"1rem 1.2rem",background:"rgba(0,212,255,.025)",border:"1px solid rgba(0,212,255,.12)",borderRadius:10,display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"},children:[c.jsx("div",{style:{width:40,height:40,borderRadius:9,background:"linear-gradient(135deg,var(--c),var(--g))",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:"1rem",color:"#000",flexShrink:0,fontFamily:"var(--fm)"},children:"PT"}),c.jsxs("div",{style:{flex:1},children:[c.jsx("div",{style:{fontWeight:700,fontSize:".86rem",color:"var(--txt)"},children:"GV. Trần Vĩnh Phúc"}),c.jsx("div",{style:{fontSize:".74rem",color:"var(--txt3)"},children:"Khoa CNTT — Đại học Đà Lạt"})]}),c.jsx("a",{href:"mailto:phuctv@dlu.edu.vn",className:"btn btn-o",style:{fontSize:".78rem"},children:"phuctv@dlu.edu.vn"})]})]})}function m0({code:r}){const[u,f]=D.useState(!1);return c.jsx("button",{className:`cpbtn${u?" ok":""}`,onClick:()=>{var s;(s=navigator.clipboard)==null||s.writeText(r),f(!0),setTimeout(()=>f(!1),1800)},children:u?"copied":"copy"})}function ji(r){return typeof r!="string"?"":r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>")}function p0({text:r}){if(!r||typeof r!="string")return null;const u=r.trim().split(`
`),f=[];let s=0;for(;s<u.length;){const h=u[s]||"";if(h.startsWith("```")){const m=[];for(s++;s<u.length&&!u[s].startsWith("```");)m.push(u[s]),s++;const v=m.join(`
`);f.push(c.jsxs("div",{style:{position:"relative",margin:".5rem 0"},children:[c.jsx("pre",{children:c.jsx("code",{style:{color:"#b8d4e8"},children:v})}),c.jsx(m0,{code:v})]},`pre${s}`)),s++;continue}if(h.startsWith("|")){const m=[];for(;s<u.length&&u[s].startsWith("|");)u[s].includes("---")||m.push(u[s].split("|").filter(Boolean).map(v=>v.trim())),s++;if(m.length>0){const[v,...p]=m;f.push(c.jsx("div",{className:"tw",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsx("tr",{children:v.map((S,y)=>c.jsx("th",{dangerouslySetInnerHTML:{__html:ji(S)}},y))})}),c.jsx("tbody",{children:p.map((S,y)=>c.jsx("tr",{children:S.map((C,E)=>c.jsx("td",{dangerouslySetInnerHTML:{__html:ji(C)}},E))},y))})]})},`tbl${s}`))}continue}if(h.startsWith("## ")){f.push(c.jsx("h2",{style:{fontSize:".97rem",color:"var(--c)",margin:"1.2rem 0 .5rem",borderBottom:"1px solid var(--brd)",paddingBottom:".3rem"},children:h.slice(3)},`h2${s}`)),s++;continue}if(h.startsWith("### ")){f.push(c.jsx("h3",{style:{fontSize:".91rem",color:"var(--txt)",margin:".9rem 0 .36rem",fontWeight:600},children:h.slice(4)},`h3${s}`)),s++;continue}if(h.trim()==="---"){f.push(c.jsx("div",{className:"divider"},`hr${s}`)),s++;continue}if(h.match(/^[-*] /)){const m=[];for(;s<u.length&&u[s].match(/^[-*] /);)m.push(u[s].slice(2)),s++;f.push(c.jsx("ul",{className:"ul",children:m.map((v,p)=>c.jsx("li",{dangerouslySetInnerHTML:{__html:ji(v)}},p))},`ul${s}`));continue}if(h.match(/^\d+\. /)){const m=[];for(;s<u.length&&u[s].match(/^\d+\. /);)m.push(u[s].replace(/^\d+\. /,"")),s++;f.push(c.jsx("ol",{className:"ol",children:m.map((v,p)=>c.jsx("li",{dangerouslySetInnerHTML:{__html:ji(v)}},p))},`ol${s}`));continue}if(h.trim()===""){s++;continue}f.push(c.jsx("p",{style:{color:"var(--txt2)",margin:".2rem 0 .55rem",fontSize:".86rem",lineHeight:1.75},dangerouslySetInnerHTML:{__html:ji(h)}},`p${s}`)),s++}return c.jsx(c.Fragment,{children:f})}function g0(){const r=(Array.isArray(Af)?Af:[]).filter(R=>{var j;return R&&R.id&&((j=R.sections)==null?void 0:j.length)}),[u,f]=D.useState(()=>r[0]??null),[s,h]=D.useState(()=>{var R,j;return((j=(R=r[0])==null?void 0:R.sections)==null?void 0:j[0])??null});if(!r.length||!u||!s)return c.jsxs("div",{style:{padding:"2rem",color:"var(--txt2)",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"1.2rem",marginBottom:".5rem",color:"var(--c)"},children:"Dang tai ly thuyet..."}),c.jsxs("div",{style:{fontSize:".8rem",color:"var(--txt3)"},children:["Chapters loaded: ",r.length]})]});const m=R=>{f(R),h(R.sections[0]),window.scrollTo(0,0)},v=r.indexOf(u),p=u.sections.indexOf(s),S=v>0||p>0,y=v<r.length-1||p<u.sections.length-1,C=()=>{if(p>0)h(u.sections[p-1]),window.scrollTo(0,0);else if(v>0){const R=r[v-1];f(R),h(R.sections[R.sections.length-1]),window.scrollTo(0,0)}},E=()=>{if(p<u.sections.length-1)h(u.sections[p+1]),window.scrollTo(0,0);else if(v<r.length-1){const R=r[v+1];f(R),h(R.sections[0]),window.scrollTo(0,0)}};return c.jsxs("div",{children:[c.jsxs("div",{className:"page-hdr",children:[c.jsx("h1",{children:c.jsx("span",{className:"gt",children:"Lý thuyết AIoT"})}),c.jsxs("p",{children:[r.length," Chương — Nền tảng IoT đến Deep Learning, FPGA và khởi nghiệp"]})]}),c.jsx("div",{className:"mob",style:{display:"flex",gap:".3rem",overflowX:"auto",paddingBottom:".4rem",marginBottom:".7rem",scrollbarWidth:"none"},children:r.map(R=>c.jsx("button",{onClick:()=>m(R),style:{padding:".3rem .62rem",borderRadius:7,flexShrink:0,background:u.id===R.id?`${R.color}14`:"var(--sur)",border:`1px solid ${u.id===R.id?R.color+"35":"var(--brd)"}`,color:u.id===R.id?R.color:"var(--txt3)",cursor:"pointer",fontSize:".73rem",whiteSpace:"nowrap"},children:R.title},R.id))}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"185px 1fr",gap:"1.1rem",alignItems:"start"},children:[c.jsx("div",{style:{position:"sticky",top:"1rem"},className:"desk",children:r.map(R=>c.jsxs("button",{onClick:()=>m(R),style:{display:"flex",alignItems:"center",gap:".42rem",width:"100%",padding:".4rem .6rem",borderRadius:7,marginBottom:2,background:u.id===R.id?`${R.color}0d`:"transparent",border:`1px solid ${u.id===R.id?R.color+"28":"transparent"}`,cursor:"pointer",textAlign:"left",transition:"all .12s"},children:[c.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:R.color,opacity:u.id===R.id?1:.4,flexShrink:0}}),c.jsx("span",{style:{fontSize:".78rem",color:u.id===R.id?R.color:"var(--txt2)",fontWeight:u.id===R.id?600:400,lineHeight:1.3},children:R.title})]},R.id))}),c.jsxs("div",{className:"fu",children:[c.jsxs("div",{className:"card",style:{padding:".95rem 1.1rem",marginBottom:".75rem",background:`${u.color}06`,borderColor:`${u.color}22`},children:[c.jsx("span",{className:"badge",style:{background:`${u.color}12`,color:u.color,border:`1px solid ${u.color}28`,marginBottom:".4rem",display:"inline-flex"},children:u.title}),c.jsx("h2",{style:{fontWeight:800,fontSize:"1.05rem",marginTop:".3rem"},children:s.title})]}),u.sections.length>1&&c.jsx("div",{className:"tabs",children:u.sections.map(R=>c.jsx("button",{className:`tab${s.id===R.id?" on":""}`,onClick:()=>{h(R),window.scrollTo(0,0)},children:R.title},R.id))}),c.jsx("div",{className:"card",style:{padding:"1.1rem 1.2rem"},children:c.jsx(p0,{text:s.content})}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:".75rem",gap:".5rem"},children:[c.jsx("button",{className:"btn btn-s",disabled:!S,onClick:C,children:"Trang trước"}),c.jsx("button",{className:"btn btn-o",disabled:!y,onClick:E,children:"Trang tiếp"})]})]})]})]})}function _f({code:r}){const[u,f]=D.useState(!1);return c.jsx("button",{className:`cpbtn${u?" ok":""}`,onClick:()=>{var s;(s=navigator.clipboard)==null||s.writeText(r),f(!0),setTimeout(()=>f(!1),1800)},children:u?"copied":"copy"})}const Xf=r=>r==="easy"?"Cơ bàn":r==="medium"?"Trung cấp":"Nâng cao",pr=r=>r==="easy"?"var(--g)":r==="medium"?"var(--c)":"var(--p)";function y0({lab:r,done:u,setDone:f,onBack:s}){var S,y;const[h,m]=D.useState(0),[v,p]=D.useState("steps");return r?c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",gap:".5rem",marginBottom:"1rem",flexWrap:"wrap",alignItems:"center"},children:[c.jsx("button",{className:"btn btn-s",onClick:s,children:"← Quay lại"}),c.jsx("span",{className:"badge",style:{background:`${pr(r.diff)}12`,color:pr(r.diff),border:`1px solid ${pr(r.diff)}28`},children:Xf(r.diff)}),c.jsx("span",{style:{fontSize:".75rem",color:"var(--txt3)"},children:r.time}),c.jsx("span",{style:{fontSize:".75rem",color:"var(--txt3)"},children:r.hw})]}),c.jsxs("div",{className:"card",style:{padding:"1.1rem",marginBottom:".9rem",background:`${r.groupColor}06`,borderColor:`${r.groupColor}25`},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:".5rem",flexWrap:"wrap"},children:[c.jsxs("div",{style:{flex:1,minWidth:0},children:[c.jsx("div",{style:{fontSize:".6rem",color:r.groupColor,fontFamily:"var(--fm)",fontWeight:700,marginBottom:".12rem",textTransform:"uppercase"},children:r.group}),c.jsx("h2",{style:{fontWeight:800,fontSize:"1.05rem",marginBottom:".3rem",lineHeight:1.3,color:"var(--txt)"},children:r.title}),c.jsx("p",{style:{fontSize:".83rem",color:"var(--txt2)",lineHeight:1.55},children:r.obj})]}),c.jsx("button",{className:`btn ${u[r.id]?"btn-s":"btn-p"}`,style:{flexShrink:0,marginTop:".2rem"},onClick:()=>f(C=>({...C,[r.id]:!C[r.id]})),children:u[r.id]?"Đã xong":"Mark done"})]}),c.jsxs("div",{style:{marginTop:".8rem"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:".67rem",color:"var(--txt3)",marginBottom:".22rem"},children:[c.jsxs("span",{children:["Buoc ",h+1," / ",r.steps.length]}),c.jsxs("span",{children:[Math.round((h+1)/r.steps.length*100),"%"]})]}),c.jsx("div",{className:"prog",children:c.jsx("div",{className:"prog-f",style:{width:`${(h+1)/r.steps.length*100}%`}})})]})]}),c.jsx("div",{className:"tabs",children:[["steps","Các bước"],["theory","Lý thuyết"],["verify","Kiểm tra"]].map(([C,E])=>c.jsx("button",{className:`tab${v===C?" on":""}`,onClick:()=>p(C),children:E},C))}),v==="steps"&&c.jsxs("div",{children:[r.steps.map((C,E)=>c.jsx("div",{onClick:()=>m(E),className:"card",style:{padding:".85rem 1rem",marginBottom:".45rem",cursor:"pointer",borderColor:E===h?r.groupColor:E<h?"rgba(0,230,118,.3)":"var(--brd)",background:E===h?`${r.groupColor}07`:E<h?"rgba(0,230,118,.025)":"var(--sur)"},children:c.jsxs("div",{style:{display:"flex",gap:".65rem",alignItems:"flex-start"},children:[c.jsx("div",{style:{width:24,height:24,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:".67rem",fontFamily:"var(--fm)",fontWeight:700,background:E<h?"var(--g)":E===h?r.groupColor:"var(--sur2)",color:E<=h?"#000":"var(--txt3)"},children:E<h?"v":E+1}),c.jsxs("div",{style:{flex:1,minWidth:0},children:[c.jsx("div",{style:{fontWeight:600,fontSize:".87rem",color:E===h?"var(--txt)":"var(--txt2)",marginBottom:E===h?".4rem":0},children:C.t}),E===h&&c.jsxs(c.Fragment,{children:[C.info&&c.jsx("p",{style:{color:"var(--txt3)",fontSize:".82rem",marginBottom:".4rem",lineHeight:1.55},children:C.info}),c.jsxs("div",{style:{position:"relative"},children:[c.jsx("pre",{"data-lang":C.lang||"cpp",children:c.jsx("code",{style:{color:"#b8d4e8"},children:C.code})}),c.jsx(_f,{code:C.code})]})]})]})]})},E)),r.expect&&c.jsxs("div",{className:"alert as",style:{marginTop:".6rem",fontSize:".83rem"},children:[c.jsx("strong",{children:"Kết quả:"})," ",r.expect]}),((S=r.tips)==null?void 0:S.length)>0&&c.jsxs("div",{className:"alert aw",style:{marginTop:".5rem",fontSize:".82rem"},children:[c.jsx("strong",{children:"Tips:"}),c.jsx("ul",{className:"ul",style:{marginTop:".3rem"},children:r.tips.map((C,E)=>c.jsx("li",{children:C},E))})]}),c.jsxs("div",{style:{display:"flex",gap:".5rem",marginTop:".8rem",flexWrap:"wrap"},children:[c.jsx("button",{className:"btn btn-s",disabled:h===0,onClick:C=>{C.stopPropagation(),m(E=>E-1)},children:"Bước trước"}),c.jsx("button",{className:"btn btn-o",disabled:h===r.steps.length-1,onClick:C=>{C.stopPropagation(),m(E=>E+1)},children:"Bước tiếp"}),h===r.steps.length-1&&c.jsx("button",{className:"btn btn-p",onClick:()=>{f(C=>({...C,[r.id]:!0})),p("verify")},children:"Hoàn thành"})]})]}),v==="theory"&&c.jsx("div",{className:"card",style:{padding:"1.2rem"},children:c.jsxs("div",{className:"alert ai",style:{fontSize:".85rem",lineHeight:1.65},children:[c.jsx("strong",{children:"Lý thuyết:"})," ",r.theory]})}),v==="verify"&&c.jsxs("div",{children:[c.jsxs("div",{className:"card",style:{padding:"1.1rem",marginBottom:".75rem"},children:[c.jsx("div",{style:{fontWeight:700,color:"var(--c)",marginBottom:"1rem"},children:"Câu hỏi kiểm tra"}),(y=r.verify)==null?void 0:y.map((C,E)=>c.jsxs("div",{style:{background:"var(--bg)",borderRadius:8,padding:".75rem .9rem",marginBottom:".5rem",border:"1px solid var(--brd)"},children:[c.jsxs("div",{style:{fontWeight:600,fontSize:".84rem",color:"var(--txt)",marginBottom:".38rem"},children:[E+1,". ",C.q]}),c.jsxs("div",{style:{position:"relative"},children:[c.jsx("pre",{children:c.jsx("code",{style:{color:"#9ab"},children:C.cmd})}),c.jsx(_f,{code:C.cmd})]})]},E))]}),u[r.id]?c.jsxs("div",{className:"alert as",children:["Xuất sắc ! Đã hoàn thành ",c.jsx("strong",{children:r.title})]}):c.jsx("div",{className:"alert aw",children:"Chưa mark done. Quay lại tab Các bước."})]})]}):null}function v0({lab:r,isSelected:u,isDone:f,onClick:s}){return c.jsxs("div",{className:"card card-a",onClick:s,style:{padding:".95rem 1rem",borderColor:`${r.groupColor}18`,cursor:"pointer",borderLeftColor:u?r.groupColor:void 0,borderLeftWidth:u?3:1,background:u?`${r.groupColor}06`:"var(--sur)"},children:[c.jsx("div",{style:{fontSize:".62rem",color:r.groupColor,fontFamily:"var(--fm)",fontWeight:700,marginBottom:".25rem",textTransform:"uppercase"},children:r.group}),c.jsxs("div",{style:{fontWeight:700,fontSize:".88rem",color:"var(--txt)",marginBottom:".25rem",lineHeight:1.35},children:[r.title,f&&c.jsx("span",{style:{color:"var(--g)",marginLeft:".4rem",fontSize:".85rem"},children:"✓"})]}),c.jsx("div",{style:{fontSize:".78rem",color:"var(--txt3)",marginBottom:".6rem",lineHeight:1.45},children:r.obj}),c.jsxs("div",{style:{display:"flex",gap:".3rem",flexWrap:"wrap",alignItems:"center"},children:[c.jsx("span",{style:{fontSize:".68rem",color:pr(r.diff),fontWeight:600},children:Xf(r.diff)}),c.jsxs("span",{style:{fontSize:".68rem",color:"var(--txt3)"},children:["| ",r.time]})]})]})}function S0(){const[r,u]=D.useState(null),[f,s]=D.useState({}),[h,m]=D.useState("all");if(!Nt||Nt.length===0)return c.jsx("div",{className:"page-hdr",children:c.jsx("h1",{children:"Labs chưa có dữ liệu"})});const v=h==="all"?Nt:Nt.filter(C=>C.group===h),p=Object.values(f).filter(Boolean).length,S=C=>{u(C),window.scrollTo(0,0)},y=()=>u(null);return r?c.jsx("div",{className:"fu",children:c.jsx(y0,{lab:r,done:f,setDone:s,onBack:y})}):c.jsxs("div",{className:"fu",children:[c.jsxs("div",{className:"page-hdr",children:[c.jsx("h1",{children:c.jsx("span",{className:"gt",children:"Lab thực hành"})}),c.jsxs("p",{children:[Nt.length," labs — ",p,"/",Nt.length," Hoàn thành"]})]}),c.jsxs("div",{className:"tabs",style:{marginBottom:"1.2rem"},children:[c.jsxs("button",{className:`tab${h==="all"?" on":""}`,onClick:()=>m("all"),children:["Tat ca (",Nt.length,")"]}),h0.map(C=>c.jsxs("button",{className:`tab${h===C.id?" on":""}`,onClick:()=>m(C.id),style:h===C.id?{color:C.color,borderBottomColor:C.color}:{},children:[C.id," (",C.count,")"]},C.id))]}),c.jsxs("div",{style:{padding:".6rem .9rem",background:"rgba(0,212,255,.04)",border:"1px solid rgba(0,212,255,.12)",borderRadius:8,marginBottom:"1.2rem",display:"flex",alignItems:"center",gap:".8rem"},children:[c.jsx("span",{style:{fontSize:".7rem",color:"var(--txt3)",fontFamily:"var(--fm)",flexShrink:0},children:"TIẾN ĐỘ"}),c.jsx("div",{className:"prog",style:{flex:1},children:c.jsx("div",{className:"prog-f",style:{width:`${p/Nt.length*100}%`}})}),c.jsxs("span",{style:{fontSize:".72rem",color:"var(--c)",fontFamily:"var(--fm)",flexShrink:0},children:[p,"/",Nt.length]})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(280px, 100%), 1fr))",gap:".75rem"},children:v.map(C=>c.jsx(v0,{lab:C,isSelected:!1,isDone:!!f[C.id],onClick:()=>S(C)},C.id))})]})}const b0=["all",...new Set(Ua.map(r=>r.cat))],T0=["all","easy","medium","hard"],Kc={easy:"Cơ Bản",medium:"Trung Cấp",hard:"Nâng cao"};function E0(){const[r,u]=D.useState("all"),[f,s]=D.useState("all"),[h,m]=D.useState(0),[v,p]=D.useState({}),[S,y]=D.useState("browse"),[C,E]=D.useState(null),R=Ua.filter(P=>(r==="all"||P.cat===r)&&(f==="all"||P.lv===f)),j=R[h],Q=(P,z)=>{v[P]===void 0&&p(V=>({...V,[P]:z}))},q=()=>E(R.filter((P,z)=>v[z]===R[z].ans).length);if(S==="test"&&C===null)return c.jsxs("div",{className:"fu",children:[c.jsxs("div",{style:{display:"flex",gap:".5rem",marginBottom:"1rem",flexWrap:"wrap",alignItems:"center"},children:[c.jsxs("h1",{style:{fontSize:"1.1rem",flex:1},children:[c.jsx("span",{className:"gt",children:"Kiem tra"})," — ",R.length," cau"]}),c.jsx("button",{className:"btn btn-s",onClick:()=>{y("browse"),p({}),m(0)},children:"Thoat"})]}),c.jsxs("div",{style:{fontSize:".76rem",color:"var(--txt3)",marginBottom:".6rem"},children:[Object.keys(v).length,"/",R.length," da tra loi"]}),c.jsx("div",{className:"prog",style:{marginBottom:"1.1rem"},children:c.jsx("div",{className:"prog-f",style:{width:`${Object.keys(v).length/R.length*100}%`}})}),R.map((P,z)=>c.jsxs("div",{className:"card",style:{padding:"1.05rem",marginBottom:".65rem"},children:[c.jsxs("div",{style:{fontSize:".72rem",color:"var(--txt3)",marginBottom:".32rem"},children:["Cau ",z+1," · ",P.cat," · ",Kc[P.lv]||P.lv]}),c.jsx("p",{style:{fontWeight:600,color:"var(--txt)",fontSize:".87rem",marginBottom:".65rem",lineHeight:1.55},children:P.q}),P.opts.map((V,W)=>{const ne=v[z]!==void 0,se=v[z]===W,me=P.ans===W;return c.jsxs("div",{onClick:()=>Q(z,W),className:`qopt${ne&&me?" qr":ne&&se&&!me?" qw":""}`,style:{opacity:ne&&!me&&!se?.5:1},children:[c.jsx("div",{className:"qbub",children:ne&&me?"v":ne&&se?"x":["A","B","C","D"][W]}),c.jsx("span",{children:V})]},W)}),v[z]!==void 0&&c.jsx("div",{className:"alert as",style:{marginTop:".55rem",fontSize:".81rem"},children:P.exp})]},P.id)),c.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"1rem 0"},children:c.jsxs("button",{className:"btn btn-p",disabled:Object.keys(v).length<R.length,onClick:q,children:["Nop bai (",Object.keys(v).length,"/",R.length,")"]})})]});if(S==="test"&&C!==null){const P=Math.round(C/R.length*100);return c.jsxs("div",{className:"fu",style:{textAlign:"center",padding:"3.5rem 1rem"},children:[c.jsxs("div",{style:{fontFamily:"var(--fm)",fontSize:"2rem",fontWeight:800,color:P>=80?"var(--g)":P>=60?"var(--y)":"var(--r)",marginBottom:".4rem"},children:[C,"/",R.length]}),c.jsxs("div",{style:{color:"var(--txt2)",marginBottom:"1.5rem",fontSize:".9rem"},children:[P,"% — ",P>=80?"Xuat sac!":P>=60?"Kha tot!":"Can on them!"]}),c.jsxs("div",{style:{display:"flex",gap:".6rem",justifyContent:"center",flexWrap:"wrap"},children:[c.jsx("button",{className:"btn btn-p",onClick:()=>{p({}),E(null),y("test")},children:"Lam lai"}),c.jsx("button",{className:"btn btn-s",onClick:()=>{p({}),E(null),y("browse"),m(0)},children:"Ve browse"})]})]})}return j?c.jsxs("div",{className:"fu",children:[c.jsxs("div",{className:"page-hdr",children:[c.jsx("h1",{children:c.jsx("span",{className:"gt",children:"Trắc Nghiệm AIoT"})}),c.jsxs("p",{children:[Ua.length," Câu hỏi — 6 Chủ Đề — Có Giải Thích Chi Tiết"]})]}),c.jsxs("div",{style:{display:"flex",gap:".45rem",flexWrap:"wrap",marginBottom:"1rem",alignItems:"center"},children:[c.jsx("select",{value:r,onChange:P=>{u(P.target.value),m(0),p({})},style:{padding:".38rem .65rem",background:"var(--sur)",border:"1px solid var(--brd)",color:"var(--txt)",borderRadius:6,fontSize:".81rem",fontFamily:"var(--fd)",cursor:"pointer"},children:b0.map(P=>c.jsx("option",{value:P,children:P==="all"?`Tất cả (${Ua.length})`:P},P))}),c.jsx("select",{value:f,onChange:P=>{s(P.target.value),m(0),p({})},style:{padding:".38rem .65rem",background:"var(--sur)",border:"1px solid var(--brd)",color:"var(--txt)",borderRadius:6,fontSize:".81rem",fontFamily:"var(--fd)",cursor:"pointer"},children:T0.map(P=>c.jsx("option",{value:P,children:P==="all"?"Tất cả cấp độ":Kc[P]},P))}),c.jsxs("button",{className:"btn btn-p",onClick:()=>{p({}),E(null),y("test")},children:["Bắt đầu kiểm tra (",R.length,")"]})]}),c.jsxs("div",{style:{fontSize:".74rem",color:"var(--txt3)",marginBottom:".65rem"},children:["Cau ",h+1,"/",R.length," · ",j.cat," · ",Kc[j.lv]||j.lv]}),c.jsx("div",{className:"prog",style:{marginBottom:".9rem"},children:c.jsx("div",{className:"prog-f",style:{width:`${(h+1)/R.length*100}%`}})}),c.jsxs("div",{className:"card",style:{padding:"1.2rem",marginBottom:".9rem"},children:[c.jsx("p",{style:{fontWeight:600,color:"var(--txt)",fontSize:".9rem",lineHeight:1.6,marginBottom:".9rem"},children:j.q}),j.opts.map((P,z)=>{const V=v[h]!==void 0,W=v[h]===z,ne=j.ans===z;return c.jsxs("div",{onClick:()=>Q(h,z),className:`qopt${V&&ne?" qr":V&&W&&!ne?" qw":W?" qs":""}`,style:{opacity:V&&!ne&&!W?.5:1},children:[c.jsx("div",{className:"qbub",children:V&&ne?"v":V&&W?"x":["A","B","C","D"][z]}),c.jsx("span",{children:P})]},z)}),v[h]!==void 0&&c.jsxs("div",{className:"alert as",style:{marginTop:".7rem",fontSize:".83rem"},children:[c.jsx("strong",{children:"Giải thích:"})," ",j.exp]})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:".5rem"},children:[c.jsx("button",{className:"btn btn-s",disabled:h===0,onClick:()=>m(P=>P-1),children:"Câu trước"}),c.jsx("button",{className:"btn btn-o",disabled:h===R.length-1,onClick:()=>m(P=>P+1),children:"Câu tiếp"})]})]}):c.jsx("div",{className:"page-hdr",children:c.jsx("h1",{children:"Không có câu hỏi nào"})})}const hr=r=>r==="easy"?"var(--g)":r==="medium"?"var(--c)":"var(--p)",xf=r=>r==="easy"?"Cơ Bản":r==="medium"?"Trung Bình":"Nâng Cao",A0=["all",...new Set(Gi.map(r=>r.cat))];function C0(){const[r,u]=D.useState("all"),[f,s]=D.useState("all"),[h,m]=D.useState(null),v=Gi.filter(p=>(r==="all"||p.diff===r)&&(f==="all"||p.cat===f));return c.jsxs("div",{className:"fu",children:[c.jsxs("div",{className:"page-hdr",children:[c.jsx("h1",{children:c.jsx("span",{className:"gt",children:"Bài tập thực hành"})}),c.jsxs("p",{children:[Gi.length," Bài tập cơ bản hướng dẫn — Từ cơ bản đến đề tài khởi nghiệp"]})]}),c.jsxs("div",{style:{display:"flex",gap:".45rem",flexWrap:"wrap",marginBottom:"1rem"},children:[c.jsxs("select",{value:r,onChange:p=>u(p.target.value),style:{padding:".38rem .65rem",background:"var(--sur)",border:"1px solid var(--brd)",color:"var(--txt)",borderRadius:6,fontSize:".81rem",fontFamily:"var(--fd)"},children:[c.jsx("option",{value:"all",children:"Tất cả độ khó"}),["easy","medium","hard"].map(p=>c.jsx("option",{value:p,children:xf(p)},p))]}),c.jsx("select",{value:f,onChange:p=>s(p.target.value),style:{padding:".38rem .65rem",background:"var(--sur)",border:"1px solid var(--brd)",color:"var(--txt)",borderRadius:6,fontSize:".81rem",fontFamily:"var(--fd)"},children:A0.map(p=>c.jsx("option",{value:p,children:p==="all"?"Tất cả chủ đề":p},p))})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:".48rem"},children:[v.map(p=>c.jsxs("div",{className:"card",style:{overflow:"hidden",borderColor:h===p.id?`${hr(p.diff)}35`:"var(--brd)"},children:[c.jsxs("div",{onClick:()=>m(h===p.id?null:p.id),style:{display:"flex",alignItems:"center",gap:".7rem",padding:".82rem 1rem",cursor:"pointer",flexWrap:"wrap"},children:[c.jsxs("div",{style:{flex:1,minWidth:150},children:[c.jsxs("div",{style:{display:"flex",gap:".35rem",alignItems:"center",marginBottom:".18rem",flexWrap:"wrap"},children:[c.jsx("span",{className:"badge",style:{fontSize:".6rem",background:`${hr(p.diff)}0e`,color:hr(p.diff),border:`1px solid ${hr(p.diff)}28`},children:xf(p.diff)}),c.jsx("span",{className:"badge bc",style:{fontSize:".6rem"},children:p.cat}),c.jsxs("span",{style:{fontSize:".7rem",color:"var(--txt3)"},children:["| ",p.time]})]}),c.jsx("div",{style:{fontWeight:600,fontSize:".87rem",color:"var(--txt)",lineHeight:1.3},children:p.title})]}),c.jsx("span",{style:{color:"var(--txt3)",fontSize:".75rem",flexShrink:0},children:h===p.id?"[ - ]":"[ + ]"})]}),h===p.id&&c.jsxs("div",{style:{borderTop:"1px solid var(--brd)",padding:".95rem 1.05rem",background:"var(--bg)"},children:[c.jsxs("div",{style:{fontSize:".63rem",color:"var(--txt3)",fontFamily:"var(--fm)",marginBottom:".35rem"},children:["PHẦN CỨNG: ",p.hw]}),c.jsx("p",{style:{fontSize:".85rem",color:"var(--txt2)",lineHeight:1.65,marginBottom:".85rem"},children:p.desc}),c.jsx("div",{style:{fontSize:".68rem",color:"var(--c)",fontWeight:700,fontFamily:"var(--fm)",marginBottom:".42rem",letterSpacing:.5},children:"HƯỚNG DẪN TỪNG BƯỚC"}),c.jsx("ol",{className:"ol",children:p.steps.map((S,y)=>c.jsx("li",{children:S},y))}),p.hint&&c.jsxs("div",{className:"alert aw",style:{marginTop:".65rem",fontSize:".82rem"},children:[c.jsx("strong",{children:"Gợi ý:"})," ",p.hint]}),c.jsxs("div",{className:"alert as",style:{marginTop:".5rem",fontSize:".83rem"},children:[c.jsx("strong",{children:"Kết quả mong đợi:"})," ",p.expected]})]})]},p.id)),v.length===0&&c.jsx("div",{style:{textAlign:"center",padding:"3rem",color:"var(--txt3)",fontSize:".87rem"},children:"Không có bài tập phù hợp với bộ lọc này."})]})]})}const Vc={easy:"Cơ Bản",medium:"Trung Bình",hard:"Khó",advanced:"Nâng Cao",startup:"Khởi Nghiệp"},In={easy:"var(--g)",medium:"var(--c)",hard:"var(--y)",advanced:"var(--p)",startup:"var(--o)"};function _0(){const[r,u]=D.useState("all"),[f,s]=D.useState(null),[h,m]=D.useState("overview"),v=r==="all"?Pn:Pn.filter(p=>p.level===r);if(f){const p=Pn.find(S=>S.id===f);return c.jsxs("div",{className:"fu",children:[c.jsx("button",{className:"btn btn-s",style:{marginBottom:"1.1rem"},onClick:()=>{s(null),m("overview")},children:"Danh sách đề tài"}),c.jsxs("div",{className:"card",style:{padding:"1.2rem",borderColor:`${p.color}28`,background:`${p.color}04`,marginBottom:"1.1rem"},children:[c.jsxs("div",{style:{display:"flex",gap:".45rem",flexWrap:"wrap",marginBottom:".55rem",alignItems:"center"},children:[c.jsx("span",{className:"badge",style:{background:`${In[p.level]||p.color}12`,color:In[p.level]||p.color,border:`1px solid ${In[p.level]||p.color}28`},children:Vc[p.level]||p.level}),c.jsxs("span",{style:{fontSize:".74rem",color:"var(--txt3)"},children:["Thời gian: ",p.dur]}),c.jsxs("span",{style:{fontSize:".74rem",color:"var(--txt3)"},children:["Nhóm: ",p.team]})]}),c.jsx("h2",{style:{fontWeight:800,fontSize:"1.08rem",marginBottom:".22rem"},children:p.title}),c.jsx("p",{style:{fontSize:".79rem",color:p.color,fontFamily:"var(--fm)",marginBottom:".55rem"},children:p.sub}),c.jsx("p",{style:{fontSize:".86rem",color:"var(--txt2)",lineHeight:1.65},children:p.overview})]}),c.jsx("div",{className:"tabs",children:[["overview","Tổng quan"],["scope","Phạm vi"],["deploy","Kế hoạch"],["result","Kết quả"],["tech","Công nghệ"]].map(([S,y])=>c.jsx("button",{className:`tab${h===S?" on":""}`,onClick:()=>m(S),children:y},S))}),c.jsxs("div",{className:"card",style:{padding:"1.1rem"},children:[h==="overview"&&c.jsx("p",{style:{color:"var(--txt2)",fontSize:".87rem",lineHeight:1.7},children:p.overview}),h==="scope"&&c.jsx("ul",{className:"ul",children:p.scope.map((S,y)=>c.jsx("li",{children:S},y))}),h==="deploy"&&c.jsx("ul",{className:"ul",children:p.deploy.map((S,y)=>c.jsx("li",{children:S},y))}),h==="result"&&c.jsx("ul",{className:"ul",children:p.result.map((S,y)=>c.jsx("li",{children:S},y))}),h==="tech"&&c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:".32rem"},children:p.tech.map(S=>c.jsx("span",{className:"tag",children:S},S))})]})]})}return c.jsxs("div",{className:"fu",children:[c.jsxs("div",{className:"page-hdr",children:[c.jsx("h1",{children:c.jsx("span",{className:"gt",children:"Đề tài NCKH"})}),c.jsxs("p",{children:[Pn.length," Đề tài từ cơ bản đến nâng cao và khởi nghiệp dành cho SV"]})]}),c.jsxs("div",{className:"tabs",style:{marginBottom:"1rem"},children:[c.jsxs("button",{className:`tab${r==="all"?" on":""}`,onClick:()=>u("all"),children:["Tất Cả(",Pn.length,")"]}),Object.entries(Vc).map(([p,S])=>c.jsxs("button",{className:`tab${r===p?" on":""}`,onClick:()=>u(p),style:r===p?{color:In[p]||"var(--c)",borderBottomColor:In[p]||"var(--c)"}:{},children:[S," (",Pn.filter(y=>y.level===p).length,")"]},p))]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(270px,100%),1fr))",gap:".7rem"},children:v.map(p=>c.jsxs("div",{className:"card card-a",onClick:()=>{s(p.id),m("overview")},style:{padding:"1.05rem",borderColor:`${p.color}18`},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:".45rem",gap:".35rem",flexWrap:"wrap"},children:[c.jsx("span",{className:"badge",style:{fontSize:".6rem",background:`${In[p.level]||p.color}0e`,color:In[p.level]||p.color,border:`1px solid ${In[p.level]||p.color}22`},children:Vc[p.level]||p.level}),c.jsx("span",{style:{fontSize:".7rem",color:"var(--txt3)"},children:p.dur})]}),c.jsx("h3",{style:{fontWeight:700,fontSize:".87rem",color:"var(--txt)",marginBottom:".24rem",lineHeight:1.35},children:p.title}),c.jsx("p",{style:{fontSize:".73rem",color:p.color,fontFamily:"var(--fm)",marginBottom:".4rem"},children:p.sub}),c.jsxs("p",{style:{fontSize:".79rem",color:"var(--txt3)",lineHeight:1.5,marginBottom:".65rem"},children:[p.overview.slice(0,105),"..."]}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:".25rem"},children:p.tech.slice(0,4).map(S=>c.jsx("span",{className:"tag",children:S},S))})]},p.id))})]})}function x0(){return c.jsxs("div",{className:"fu",children:[c.jsxs("div",{className:"page-hdr",children:[c.jsx("h1",{children:c.jsx("span",{className:"gt",children:"Tài liệu tham khảo"})}),c.jsx("p",{children:"Sách, khóa học, công cụ, dataset và cộng đồng AIoT được chọn lọc"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.8rem"},children:d0.map(r=>c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".6rem",marginBottom:".75rem",borderBottom:"1px solid var(--brd)",paddingBottom:".4rem"},children:[c.jsx("div",{style:{width:3,height:16,background:r.color,borderRadius:2,flexShrink:0}}),c.jsx("h2",{style:{fontSize:".92rem",fontWeight:700,color:"var(--txt)"},children:r.cat})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(250px,100%),1fr))",gap:".6rem"},children:r.items.map(u=>c.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"card card-a",style:{padding:".95rem 1rem",textDecoration:"none",display:"block",borderColor:`${r.color}18`},children:[c.jsx("div",{style:{fontWeight:600,color:r.color,fontSize:".84rem",marginBottom:".25rem",lineHeight:1.35},children:u.name}),c.jsx("div",{style:{fontSize:".78rem",color:"var(--txt2)",lineHeight:1.55},children:u.desc})]},u.name))})]},r.cat))})]})}const M0=[{title:"Thiết lập môi trường",color:"#00d4ff",items:[{t:"Cài Arduino IDE 2.x",content:`# Arduino IDE 2.x + ESP32
# Bước 1: Download Arduino IDE
https://www.arduino.cc/en/software
# Windows: .exe installer | macOS: .dmg | Linux: AppImage

# Bước 2: Thêm ESP32 board URL
File → Preferences → Additional boards manager URLs:
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json

# Bước 3: Cài ESP32 board package
Tools → Board → Boards Manager → Tìm "esp32" by Espressif → Install

# Bước 4: Chọn board
Tools → Board → ESP32 Arduino → ESP32 Dev Module
Tools → Upload Speed → 921600
Tools → Port → COM3 (Win) | /dev/ttyUSB0 (Linux) | /dev/cu.usbserial (Mac)`},{t:"Driver USB-Serial",content:`# Driver cần thiết theo chip USB-Serial:

# CH340/CH341 (board Trung Quốc phổ biến)
# Windows: http://www.wch.cn/download/CH341SER_EXE.html
# macOS: https://www.wch.cn/download/CH341SER_MAC_ZIP.html

# CP2102 (Silabs, nhiều DevKit chính hãng)
# https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers

# Linux: Thêm user vào group dialout
sudo adduser $USER dialout
# Rồi logout và login lại

# Kiểm tra port:
# Windows: Device Manager → Ports (COM & LPT)
# Linux: ls /dev/ttyUSB* hoặc ls /dev/ttyACM*
# macOS: ls /dev/cu.*`},{t:"PlatformIO (IDE chuyên nghiệp)",content:`# PlatformIO - IDE chuyên nghiệp hơn Arduino IDE
# Cài qua VS Code extension

# 1. Cài VS Code: code.visualstudio.com
# 2. Extensions → Tìm "PlatformIO IDE" → Install
# 3. Khởi động lại VS Code

# Tạo project mới:
# PlatformIO icon → New Project
# Name: aiot-project
# Board: Espressif ESP32 Dev Module
# Framework: Arduino

# platformio.ini tự động tạo:
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
lib_deps =
    adafruit/DHT sensor library @ ^1.4.4
    knolleary/PubSubClient @ ^2.8
    bblanchon/ArduinoJson @ ^7.0.0`}]},{title:"Kết nối phần cứng",color:"#00e676",items:[{t:"I2C Scanner — tìm địa chỉ thiết bị",content:`// Upload sketch này để tìm địa chỉ I2C
#include <Wire.h>

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22); // SDA=21, SCL=22 (ESP32 default)
  Serial.println("I2C Scanner...");
}

void loop() {
  int found = 0;
  for (byte addr = 8; addr < 127; addr++) {
    Wire.beginTransmission(addr);
    byte err = Wire.endTransmission();
    if (err == 0) {
      Serial.printf("  Found: 0x%02X", addr);
      // Gợi ý thiết bị phổ biến:
      if (addr == 0x3C) Serial.print(" <- SSD1306 OLED");
      if (addr == 0x76 || addr == 0x77) Serial.print(" <- BME280");
      if (addr == 0x68) Serial.print(" <- MPU6050");
      if (addr == 0x23) Serial.print(" <- BH1750");
      if (addr == 0x58) Serial.print(" <- SGP30");
      Serial.println();
      found++;
    }
  }
  if (found == 0) Serial.println("No I2C devices found!");
  delay(3000);
}`},{t:"Sơ đồ kết nối chuẩn ESP32",content:`# Kết nối phần cứng chuẩn cho AIoT Lab:

ESP32 GPIO Pinout (ESP32 Dev Module 38-pin):
┌─────────────────────────────────┐
│  DHT22:  GPIO4 (DATA) + 10KΩ pull-up 3.3V  │
│  BME280: SDA=GPIO21, SCL=GPIO22             │
│  OLED:   SDA=GPIO21, SCL=GPIO22 (same I2C) │
│  LoRa:   MOSI=23, MISO=19, SCK=18, CS=5   │
│           RST=14, IRQ=26                   │
│  Relay:  GPIO26 (active LOW)               │
│  LED:    GPIO2 (built-in)                  │
│  Button: GPIO15 (INPUT_PULLUP)             │
│  ADC1:   GPIO32-39 (dùng với WiFi)         │
└─────────────────────────────────┘

QUAN TRONG: Không dùng ADC2 khi WiFi bật!
ADC2 = GPIO0,2,4,12-15,25-27 — bị chiếm bởi WiFi RF`}]},{title:"MQTT & Network",color:"#a855f7",items:[{t:"Cài Mosquitto Broker",content:`# Ubuntu/Debian:
sudo apt install mosquitto mosquitto-clients -y
sudo systemctl start mosquitto
sudo systemctl enable mosquitto  # Auto-start

# Kiểm tra:
systemctl status mosquitto

# Test broker:
# Terminal 1 - Subscribe:
mosquitto_sub -h localhost -t "test/#" -v

# Terminal 2 - Publish:
mosquitto_pub -h localhost -t "test/hello" -m "world"
mosquitto_pub -h localhost -t "home/temp" -m '{"temp":25.3,"hum":65}'

# Public brokers để test (không cần cài):
broker.hivemq.com:1883
test.mosquitto.org:1883
mqtt.eclipseprojects.io:1883`},{t:"MQTT Explorer — Debug tool",content:`# MQTT Explorer: mqtt-explorer.com
# GUI client để xem tất cả topics dạng tree

# Cài:
# Windows/macOS: Download installer
# Linux: sudo snap install mqtt-explorer

# Kết nối:
Host: localhost (hoặc IP broker)
Port: 1883
Protocol: mqtt://

# Features hữu ích:
# - Xem tất cả topics dạng tree
# - Publish message với payload JSON
# - View history của từng topic
# - Export to CSV
# - Color-coded topic changes`}]},{title:"TinyML Workflow",color:"#f59e0b",items:[{t:"Edge Impulse — Hướng dẫn nhanh",content:`# Edge Impulse Quick Start
# https://studio.edgeimpulse.com

# 1. Đăng ký tài khoản miễn phí
# 2. New Project → Chọn loại project (motion, audio, image)

# 3. Data Acquisition:
# Option A: Kết nối ESP32 qua USB
npm install -g edge-impulse-cli
edge-impulse-daemon  # Rồi mở studio → Data acquisition

# Option B: Upload file CSV/WAV
# Cột: timestamp, ax, ay, az (cho IMU)
# Hoặc: audio WAV 16kHz mono (cho speech)

# 4. Create Impulse:
# - Window size: 2000ms (2 giây)
# - Window increase: 200ms
# - Sampling freq: 50Hz (IMU) | 16000Hz (audio)

# 5. Processing block:
# - IMU: Spectral Analysis
# - Audio: MFE hoặc MFCC
# - Image: Image (96x96 RGB)

# 6. Learning block:
# - Classification, Anomaly, Object detection

# 7. Train → Download Arduino library
# Sketch → Add library → .zip file`},{t:"Convert TFLite sang C array",content:`# Sau khi train trên PC và save model.tflite:

# Python — tạo C header file:
with open('model.tflite', 'rb') as f:
    data = f.read()

hex_data = ', '.join([f'0x{b:02x}' for b in data])
c_code = f"""
// Auto-generated — DO NOT EDIT
#include <stdint.h>
const unsigned char g_model[] = {{{hex_data}}};
const unsigned int g_model_len = {len(data)};
"""
with open('model_data.h', 'w') as f:
    f.write(c_code)
print(f"Model: {len(data)/1024:.1f} KB")

# Hoặc dùng xxd (Linux/macOS):
xxd -i model.tflite model_data.h

# Sau đó trong Arduino:
#include "model_data.h"
// Dùng g_model và g_model_len`}]},{title:"Deploy & Production",color:"#ff6b35",items:[{t:"OTA Update (Over-the-Air)",content:`#include <ArduinoOTA.h>

void setupOTA(const char* hostname, const char* password) {
  ArduinoOTA.setHostname(hostname);  // "esp32-office"
  ArduinoOTA.setPassword(password);  // Đổi ngay!

  ArduinoOTA.onStart([]() {
    String type = ArduinoOTA.getCommand() == U_FLASH ? "sketch" : "filesystem";
    Serial.println("OTA Start: " + type);
  });

  ArduinoOTA.onEnd([]() {
    Serial.println("\\nOTA Done! Rebooting...");
  });

  ArduinoOTA.onProgress([](unsigned int prog, unsigned int total) {
    Serial.printf("OTA: %u%%\\r", prog / (total / 100));
  });

  ArduinoOTA.onError([](ota_error_t error) {
    Serial.printf("OTA Error[%u]: ", error);
  });

  ArduinoOTA.begin();
  Serial.printf("OTA ready: %s.local\\n", hostname);
}

void loop() {
  ArduinoOTA.handle();  // Gọi mỗi loop iteration
  // ... code khác
}`},{t:"Watchdog Timer — Tự recover",content:`#include <esp_task_wdt.h>

// Watchdog: reset ESP32 nếu code bị treo > N giây
#define WDT_TIMEOUT_S 30

void setup() {
  // Init watchdog timeout 30 giây
  esp_task_wdt_init(WDT_TIMEOUT_S, true);
  esp_task_wdt_add(NULL);  // Add current task
  Serial.println("Watchdog initialized (30s)");
}

void loop() {
  // Reset watchdog timer — phải gọi thường xuyên!
  esp_task_wdt_reset();

  // Nếu code bị treo ở đây > 30s → ESP32 tự reset
  doWork();
}

// Lưu reset reason vào NVS để debug:
#include <esp_system.h>
esp_reset_reason_t reason = esp_reset_reason();
if (reason == ESP_RST_WDT) {
  Serial.println("Last reset: Watchdog timeout!");
}`},{t:"Power Management cho Battery",content:`// Tiết kiệm pin cho thiết bị chạy bằng pin

// Deep Sleep: tiêu thụ ~10µA (vs 240mA active)
#include <esp_sleep.h>

void deepSleep(uint64_t seconds) {
  esp_sleep_enable_timer_wakeup(seconds * 1000000ULL);

  // Tắt WiFi/BT trước khi ngủ
  WiFi.disconnect(true);
  WiFi.mode(WIFI_OFF);
  btStop();

  Serial.println("Going to sleep...");
  Serial.flush();
  esp_deep_sleep_start();  // Không return
}

// Wakeup sources:
// Timer:   esp_sleep_enable_timer_wakeup(uS)
// GPIO:    esp_sleep_enable_ext0_wakeup(pin, level)
// Touch:   esp_sleep_enable_touchpad_wakeup()

// Ví dụ: đọc sensor mỗi 15 phút, ngủ giữa các lần
void loop() {
  readAndSendSensorData();
  deepSleep(15 * 60);  // 15 phút
}`}]}];function D0(){return c.jsxs("div",{className:"fu",children:[c.jsxs("div",{className:"page-hdr",children:[c.jsx("h1",{children:c.jsx("span",{className:"gt",children:"Hướng dẫn nhanh"})}),c.jsx("p",{children:"Quick reference: setup, kết nối, debug, deploy cho AIoT"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.8rem"},children:M0.map(r=>c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".6rem",marginBottom:".75rem",borderBottom:"1px solid var(--brd)",paddingBottom:".4rem"},children:[c.jsx("div",{style:{width:3,height:16,background:r.color,borderRadius:2,flexShrink:0}}),c.jsx("h2",{style:{fontSize:".92rem",fontWeight:700,color:"var(--txt)"},children:r.title})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(300px,100%),1fr))",gap:".65rem"},children:r.items.map((u,f)=>c.jsxs("div",{className:"card",style:{padding:"1rem",borderColor:`${r.color}18`,borderLeft:`3px solid ${r.color}`},children:[c.jsx("div",{style:{fontWeight:700,fontSize:".82rem",color:r.color,marginBottom:".55rem",fontFamily:"var(--fm)"},children:u.t}),c.jsx("pre",{style:{fontSize:".72rem",background:"var(--bg)",border:"1px solid var(--brd)",borderLeft:"none",lineHeight:1.65,padding:".75rem .85rem",borderRadius:6,overflowX:"auto",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:c.jsx("code",{style:{color:"#b8d4e8"},children:u.content})})]},f))})]},r.title))}),c.jsxs("div",{style:{marginTop:"2rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".6rem",marginBottom:".75rem",borderBottom:"1px solid var(--brd)",paddingBottom:".4rem"},children:[c.jsx("div",{style:{width:3,height:16,background:"var(--tl)",borderRadius:2}}),c.jsx("h2",{style:{fontSize:".92rem",fontWeight:700,color:"var(--txt)"},children:"Bảng kiểm tra nhanh"})]}),c.jsx("div",{className:"tw",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Tính năng"}),c.jsx("th",{children:"Lệnh kiểm tra"}),c.jsx("th",{children:"Kết quả OK"})]})}),c.jsx("tbody",{children:[["ESP32 kết nối","Tools → Get Board Info","Board: ESP32-WROOM-32"],["DHT22 đọc OK","Serial Monitor 115200","Temp:XX.X, Hum:XX.X (không có NaN)"],["WiFi connected",'Serial: "WiFi OK: 192.168.x.x"',"IP address hợp lệ"],["MQTT connected",'Serial: "MQTT connected"',"Subscribe/publish hoạt động"],["I2C device found","Upload I2C Scanner sketch","Found at 0x3C/0x76/0x68..."],["TFLite model loaded",'Serial: "AllocateTensors OK"',"Inference < 100ms"],["LoRa initialized",'Serial: "LoRa ready"',"RSSI > -100 dBm"],["OTA ready",'Serial: "esp32-node.local"',"Upload qua WiFi thành công"]].map((r,u)=>c.jsxs("tr",{children:[c.jsx("td",{style:{color:"var(--txt)",fontWeight:500},children:r[0]}),c.jsx("td",{children:c.jsx("code",{style:{color:"var(--g)",fontSize:".77rem"},children:r[1]})}),c.jsx("td",{style:{color:"var(--txt2)",fontSize:".8rem"},children:r[2]})]},u))})]})})]})]})}function R0(){return c.jsxs("div",{className:"fu",children:[c.jsxs("div",{className:"page-hdr",children:[c.jsx("h1",{children:c.jsx("span",{className:"gt",children:"Liên hệ giảng viên"})}),c.jsx("p",{children:"Thắc mắc về bài tập, đề tài, thực tập hoặc NCKH"})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(300px,100%),1fr))",gap:"1.1rem",maxWidth:800},children:[c.jsxs("div",{className:"card",style:{padding:"1.5rem",borderColor:"rgba(0,212,255,.22)",background:"rgba(0,212,255,.025)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".95rem",marginBottom:"1.2rem"},children:[c.jsx("div",{style:{width:52,height:52,borderRadius:12,background:"linear-gradient(135deg,var(--c),var(--g))",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:"1.15rem",color:"#000",flexShrink:0,fontFamily:"var(--fm)"},children:Ht.avatar}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:800,fontSize:"1rem",color:"var(--txt)",marginBottom:".08rem"},children:Ht.name}),c.jsx("div",{style:{fontSize:".76rem",color:"var(--txt3)",marginBottom:".04rem"},children:Ht.dept}),c.jsx("div",{style:{fontSize:".74rem",color:"var(--c2)"},children:Ht.uni})]})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:".5rem"},children:[c.jsx("a",{href:`mailto:${Ht.email}`,className:"btn btn-o",style:{justifyContent:"flex-start",fontSize:".82rem"},children:Ht.email}),c.jsx("a",{href:`tel:${Ht.phone.replace(/\s/g,"")}`,className:"btn btn-s",style:{justifyContent:"flex-start",fontSize:".82rem"},children:Ht.phone})]}),c.jsx("div",{className:"divider"}),c.jsxs("div",{style:{fontSize:".73rem",color:"var(--txt3)",lineHeight:1.65},children:[c.jsx("div",{style:{marginBottom:".2rem"},children:Ht.city}),c.jsxs("div",{children:["Khoa Công nghệ Thông tin, ",Ht.uni]})]})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[c.jsxs("div",{className:"card",style:{padding:"1.1rem"},children:[c.jsx("div",{style:{fontSize:".65rem",color:"var(--txt3)",fontFamily:"var(--fm)",textTransform:"uppercase",letterSpacing:".07em",marginBottom:".55rem"},children:"Liên hệ"}),c.jsxs("ul",{className:"ul",children:[c.jsx("li",{children:"phuctv@dlu.edu.vn"}),c.jsx("li",{children:"0976353606"}),c.jsx("li",{children:"Nhà A7 — Khoa CNTT, DLU"}),c.jsx("li",{children:"Ngoài giờ: liên hệ qua email trước 24h"})]})]}),c.jsxs("div",{className:"card",style:{padding:"1.1rem"},children:[c.jsx("div",{style:{fontSize:".65rem",color:"var(--txt3)",fontFamily:"var(--fm)",textTransform:"uppercase",letterSpacing:".07em",marginBottom:".55rem"},children:"Hướng dẫn liên hệ hiệu quả"}),c.jsxs("ul",{className:"ul",children:[c.jsx("li",{children:"Email: ghi rõ Tên, MSSV, Môn học, Tiêu đề cụ thể"}),c.jsx("li",{children:"Đính kèm code + error message nếu hỏi kỹ thuật"}),c.jsx("li",{children:"Đề tài NCKH: chuẩn bị 1-trang tóm tắt ý tưởng"}),c.jsx("li",{children:"Phản hồi email trong 24–48 giờ (ngày làm việc)"})]})]}),c.jsx("div",{className:"alert ai",style:{margin:0},children:"Sinh viên có thể đặt câu hỏi kỹ thuật bất kỳ lúc nào qua email. Kèm theo code snippet và mô tả lỗi để được hỗ trợ nhanh nhất."})]})]}),c.jsxs("div",{style:{marginTop:"2rem",maxWidth:800},children:[c.jsx("div",{style:{fontSize:".65rem",color:"var(--txt3)",fontFamily:"var(--fm)",textTransform:"uppercase",letterSpacing:".07em",marginBottom:".75rem"},children:"Câu hỏi thường gặp"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:".5rem"},children:[["Mua phần cứng ở đâu?",'Shopee/Lazada: tìm "ESP32 Dev Kit", "DHT22", "SSD1306 OLED". Arduino House (TP.HCM) hoặc shop.inodesign.vn có hàng chất lượng tốt. Giá tham khảo trong tài liệu Lab.'],["Không có phần cứng, vẫn học được không?","Có. Dùng Wokwi.com mô phỏng Arduino/ESP32 online miễn phí. Hầu hết sensor và libraries đều được hỗ trợ."],["Đề tài NCKH cần chuẩn bị gì?","Đọc đề tài trong mục Đề tài, chọn phù hợp trình độ. Chuẩn bị 1 trang A4: tóm tắt bài toán, giải pháp đề xuất, timeline. Đặt lịch gặp GV để thảo luận."],["Có thể làm nhóm không?","Có. Đề tài có ghi số người: 1-2 SV, 2-3 SV, hoặc 3-5 SV. Mỗi thành viên cần đóng góp rõ ràng, có thể demo phần của mình."],["Khởi nghiệp từ đề tài môn học?","Hoàn toàn được khuyến khích. Xem mục Đề tài cấp Startup. DLU có chương trình hỗ trợ startup sinh viên. Có thể nộp Techfest, VinUni Hackathon."]].map(([r,u],f)=>c.jsxs("div",{className:"card",style:{padding:".95rem 1.1rem"},children:[c.jsx("div",{style:{fontWeight:600,fontSize:".85rem",color:"var(--c)",marginBottom:".32rem"},children:r}),c.jsx("div",{style:{fontSize:".83rem",color:"var(--txt2)",lineHeight:1.65},children:u})]},f))})]})]})}const L0=[{group:"Học tập",items:[{to:"/",label:"Tổng quan"},{to:"/theory",label:"Lý thuyết"},{to:"/labs",label:"Lab thực hành"}]},{group:"Luyện tập",items:[{to:"/quiz",label:"Trắc nghiệm"},{to:"/exercises",label:"Bài tập"},{to:"/thesis",label:"Đề tài"}]},{group:"Hỗ trợ",items:[{to:"/resources",label:"Tài liệu"},{to:"/guide",label:"Hướng dẫn"},{to:"/contact",label:"Liên hệ GV"}]}];function N0({onLogin:r}){const[u,f]=D.useState(""),[s,h]=D.useState(!1),[m,v]=D.useState(!1),p=S=>{S.preventDefault(),u==="aiot2026"?(localStorage.setItem("auth","true"),r(!0)):(h(!0),setTimeout(()=>h(!1),500))};return c.jsxs("div",{style:he.wrap,children:[c.jsx("div",{style:he.grid}),c.jsx("div",{style:he.glow1}),c.jsx("div",{style:he.glow2}),c.jsxs("div",{style:he.card,children:[c.jsxs("div",{style:he.left,children:[c.jsx("div",{style:he.badge,children:"AIoT · CNTT · DLU"}),c.jsxs("div",{style:he.logo,children:[c.jsx("span",{style:he.logoAccent,children:"AIoT"}),c.jsx("span",{style:he.logoMain,children:"EDU"})]}),c.jsxs("p",{style:he.tagline,children:["Hệ thống học tập & nghiên cứu",c.jsx("br",{}),"AIoT (Artificial Intelligence of Things) "]}),c.jsx("div",{style:he.divider}),c.jsxs("div",{style:he.meta,children:[c.jsxs("div",{style:he.metaRow,children:[c.jsx("span",{style:he.metaDot})," GV: Trần Vĩnh Phúc"]}),c.jsxs("div",{style:he.metaRow,children:[c.jsx("span",{style:he.metaDot})," phuctv@dlu.edu.vn"]}),c.jsxs("div",{style:he.metaRow,children:[c.jsx("span",{style:he.metaDot})," 0976 353 605"]})]})]}),c.jsxs("div",{style:he.right,children:[c.jsxs("div",{style:he.formHead,children:[c.jsx("div",{style:he.lock,children:"🔐"}),c.jsx("h2",{style:he.formTitle,children:"Truy cập hệ thống"}),c.jsx("p",{style:he.formSub,children:"Nhập mật khẩu được cấp bởi giảng viên"})]}),c.jsxs("form",{onSubmit:p,children:[c.jsxs("div",{style:{...he.inputWrap,...m?he.inputWrapFocus:{},...s?he.inputWrapShake:{}},children:[c.jsx("span",{style:he.inputIcon,children:"⬡"}),c.jsx("input",{type:"password",placeholder:"••••••••",value:u,onChange:S=>f(S.target.value),onFocus:()=>v(!0),onBlur:()=>v(!1),style:he.input})]}),c.jsxs("button",{type:"submit",style:he.btn,children:[c.jsx("span",{children:"Đăng nhập"}),c.jsx("span",{style:he.btnArrow,children:"→"})]})]}),c.jsx("p",{style:he.hint,children:"Liên hệ giảng viên nếu chưa có mật khẩu"})]})]}),c.jsx("style",{children:`
        @keyframes gridMove { from { transform: translateY(0) } to { transform: translateY(40px) } }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-5px)} 80%{transform:translateX(5px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
        .login-card { animation: fadeUp .5s cubic-bezier(.16,1,.3,1) both }
        .login-btn:hover { background: linear-gradient(135deg,#00eeff,#00e676) !important; box-shadow: 0 8px 32px rgba(0,212,255,.35) !important; transform: translateY(-1px) }
        .login-btn:active { transform: translateY(0) }
      `})]})}function k0(){const[r,u]=D.useState(!1);D.useEffect(()=>{localStorage.getItem("auth")==="true"&&u(!0)},[]);const[f,s]=D.useState(!1),h=sn();return D.useEffect(()=>{s(!1),window.scrollTo(0,0)},[h.pathname]),r?c.jsxs("div",{className:"layout",children:[f&&c.jsx("div",{className:"overlay show",onClick:()=>s(!1)}),c.jsxs("aside",{className:`sidebar${f?" open":""}`,children:[c.jsxs("div",{style:{padding:"1rem .9rem",borderBottom:"1px solid var(--brd)",display:"flex",alignItems:"center",gap:".6rem"},children:[c.jsx("div",{style:{width:30,height:30,borderRadius:7,background:"linear-gradient(135deg,var(--c),var(--g))",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:".85rem",color:"#000",flexShrink:0,fontFamily:"var(--fm)"},children:"A"}),c.jsxs("div",{style:{flex:1,minWidth:0},children:[c.jsx("div",{style:{fontWeight:800,fontSize:".83rem",color:"var(--c)"},children:"AIoT EDU"}),c.jsx("div",{style:{fontSize:".58rem",color:"var(--txt3)",fontFamily:"var(--fm)"},children:"DLU — Khoa CNTT"})]}),c.jsx("button",{onClick:()=>s(!1),style:{background:"none",border:"none",color:"var(--txt3)",cursor:"pointer",fontSize:".9rem",padding:".2rem",display:"none"},className:"mob-close",children:"✕"})]}),c.jsx("nav",{style:{flex:1,padding:".4rem .45rem",overflowY:"auto"},children:L0.map(m=>c.jsxs("div",{children:[c.jsx("div",{className:"nav-grp",children:m.group}),m.items.map(v=>c.jsx(Ff,{to:v.to,end:v.to==="/",className:({isActive:p})=>`nav-link${p?" on":""}`,children:v.label},v.to))]},m.group))}),c.jsxs("div",{style:{padding:".7rem .9rem",borderTop:"1px solid var(--brd)",fontSize:".64rem",color:"var(--txt3)",lineHeight:1.55},children:[c.jsx("div",{style:{fontWeight:600,color:"var(--txt2)",marginBottom:".1rem"},children:"GV. Trần Vĩnh Phúc"}),c.jsx("a",{href:"mailto:phuctv@dlu.edu.vn",style:{color:"var(--c)"},children:"phuctv@dlu.edu.vn"})]})]}),c.jsxs("div",{className:"main",children:[c.jsxs("div",{className:"topbar",children:[c.jsx("button",{className:"ham",onClick:()=>s(m=>!m),children:"☰"}),c.jsx("span",{style:{fontWeight:700,fontSize:".87rem",color:"var(--c)",flex:1},children:"AIoT EDU"}),c.jsx("span",{style:{fontSize:".6rem",color:"var(--txt3)",fontFamily:"var(--fm)"},children:"DLU"})]}),c.jsx("main",{className:"pg",children:c.jsxs(xy,{children:[c.jsx(jt,{path:"/",element:c.jsx(f0,{})}),c.jsx(jt,{path:"/theory",element:c.jsx(g0,{})}),c.jsx(jt,{path:"/labs",element:c.jsx(S0,{})}),c.jsx(jt,{path:"/quiz",element:c.jsx(E0,{})}),c.jsx(jt,{path:"/exercises",element:c.jsx(C0,{})}),c.jsx(jt,{path:"/thesis",element:c.jsx(_0,{})}),c.jsx(jt,{path:"/resources",element:c.jsx(x0,{})}),c.jsx(jt,{path:"/guide",element:c.jsx(D0,{})}),c.jsx(jt,{path:"/contact",element:c.jsx(R0,{})})]})})]})]}):c.jsx(N0,{onLogin:u})}const he={wrap:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#07090f",padding:"1rem",position:"relative",overflow:"hidden",fontFamily:"'Be Vietnam Pro', sans-serif"},grid:{position:"absolute",inset:0,backgroundImage:`
      linear-gradient(rgba(0,212,255,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,212,255,.04) 1px, transparent 1px)
    `,backgroundSize:"40px 40px",animation:"gridMove 4s linear infinite alternate",pointerEvents:"none"},glow1:{position:"absolute",top:"-20%",left:"-10%",width:"50vw",height:"50vw",background:"radial-gradient(circle, rgba(0,212,255,.12) 0%, transparent 70%)",pointerEvents:"none"},glow2:{position:"absolute",bottom:"-20%",right:"-10%",width:"45vw",height:"45vw",background:"radial-gradient(circle, rgba(0,230,118,.1) 0%, transparent 70%)",pointerEvents:"none"},card:{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"clamp(200px, 40%, 340px) 1fr",width:"100%",maxWidth:820,background:"rgba(11,15,26,.85)",border:"1px solid rgba(0,212,255,.15)",borderRadius:20,overflow:"hidden",backdropFilter:"blur(24px)",boxShadow:"0 32px 80px rgba(0,0,0,.7), inset 0 1px 0 rgba(255,255,255,.05)",animation:"fadeUp .5s cubic-bezier(.16,1,.3,1) both"},left:{padding:"2.5rem 2rem",background:"linear-gradient(160deg, rgba(0,212,255,.07) 0%, rgba(0,230,118,.04) 100%)",borderRight:"1px solid rgba(0,212,255,.1)",display:"flex",flexDirection:"column",justifyContent:"center"},badge:{display:"inline-block",padding:".25rem .7rem",background:"rgba(0,212,255,.1)",border:"1px solid rgba(0,212,255,.2)",borderRadius:999,fontSize:".62rem",fontFamily:"'JetBrains Mono', monospace",color:"#00d4ff",letterSpacing:".1em",marginBottom:"1.5rem"},logo:{fontSize:"clamp(2rem, 5vw, 2.8rem)",fontWeight:800,lineHeight:1,marginBottom:".75rem",fontFamily:"'Syne', sans-serif"},logoAccent:{color:"#00d4ff",display:"block"},logoMain:{color:"rgba(255,255,255,.15)",display:"block",letterSpacing:".05em"},tagline:{fontSize:".82rem",color:"rgba(255,255,255,.4)",lineHeight:1.7,marginBottom:"1.5rem"},divider:{height:1,background:"linear-gradient(90deg, rgba(0,212,255,.3), transparent)",marginBottom:"1.5rem"},meta:{display:"flex",flexDirection:"column",gap:".45rem"},metaRow:{display:"flex",alignItems:"center",gap:".5rem",fontSize:".78rem",color:"rgba(255,255,255,.45)",fontFamily:"'JetBrains Mono', monospace"},metaDot:{width:5,height:5,borderRadius:"50%",background:"#00d4ff",flexShrink:0,animation:"pulse 2s ease infinite"},right:{padding:"2.5rem",display:"flex",flexDirection:"column",justifyContent:"center"},formHead:{marginBottom:"2rem"},lock:{fontSize:"1.8rem",marginBottom:".75rem"},formTitle:{fontSize:"1.3rem",fontWeight:700,color:"#fff",marginBottom:".35rem"},formSub:{fontSize:".82rem",color:"rgba(255,255,255,.35)"},inputWrap:{display:"flex",alignItems:"center",gap:".75rem",padding:".8rem 1rem",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:10,marginBottom:".85rem",transition:"all .2s"},inputWrapFocus:{border:"1px solid rgba(0,212,255,.5)",background:"rgba(0,212,255,.04)",boxShadow:"0 0 0 3px rgba(0,212,255,.1)"},inputWrapShake:{animation:"shake .4s ease both"},inputIcon:{fontSize:".9rem",color:"rgba(0,212,255,.5)",flexShrink:0},input:{flex:1,background:"none",border:"none",outline:"none",color:"#fff",fontSize:"1rem",fontFamily:"'JetBrains Mono', monospace",letterSpacing:".15em"},btn:{width:"100%",padding:".85rem",background:"linear-gradient(135deg, #00d4ff, #00e676)",border:"none",borderRadius:10,color:"#000",fontWeight:700,fontSize:".9rem",cursor:"pointer",transition:"all .2s",display:"flex",alignItems:"center",justifyContent:"center",gap:".5rem",fontFamily:"'Be Vietnam Pro', sans-serif",className:"login-btn"},btnArrow:{fontSize:"1rem",transition:"transform .2s"},hint:{marginTop:"1.25rem",fontSize:".75rem",color:"rgba(255,255,255,.2)",textAlign:"center"}};Dg.createRoot(document.getElementById("root")).render(c.jsx(D.StrictMode,{children:c.jsx(Yy,{children:c.jsx(k0,{})})}));
