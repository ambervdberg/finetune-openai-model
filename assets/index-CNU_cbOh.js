(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vt(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ut={exports:{}};(function(n,t){(function(e,s){s()})(x,function(){function e(a,h){return typeof h>"u"?h={autoBom:!1}:typeof h!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),h={autoBom:!h}),h.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function s(a,h,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){l(d.response,h,c)},d.onerror=function(){console.error("could not download file")},d.send()}function i(a){var h=new XMLHttpRequest;h.open("HEAD",a,!1);try{h.send()}catch{}return 200<=h.status&&299>=h.status}function r(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var h=document.createEvent("MouseEvents");h.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(h)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof x=="object"&&x.global===x?x:void 0,p=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!p?function(a,h,c){var d=o.URL||o.webkitURL,u=document.createElement("a");h=h||a.name||"download",u.download=h,u.rel="noopener",typeof a=="string"?(u.href=a,u.origin===location.origin?r(u):i(u.href)?s(a,h,c):r(u,u.target="_blank")):(u.href=d.createObjectURL(a),setTimeout(function(){d.revokeObjectURL(u.href)},4e4),setTimeout(function(){r(u)},0))}:"msSaveOrOpenBlob"in navigator?function(a,h,c){if(h=h||a.name||"download",typeof a!="string")navigator.msSaveOrOpenBlob(e(a,c),h);else if(i(a))s(a,h,c);else{var d=document.createElement("a");d.href=a,d.target="_blank",setTimeout(function(){r(d)})}}:function(a,h,c,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof a=="string")return s(a,h,c);var u=a.type==="application/octet-stream",_=/constructor/i.test(o.HTMLElement)||o.safari,Q=/CriOS\/[\d]+/.test(navigator.userAgent);if((Q||u&&_||p)&&typeof FileReader<"u"){var z=new FileReader;z.onloadend=function(){var S=z.result;S=Q?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=S:location=S,d=null},z.readAsDataURL(a)}else{var tt=o.URL||o.webkitURL,B=tt.createObjectURL(a);d?d.location=B:location.href=B,d=null,setTimeout(function(){tt.revokeObjectURL(B)},4e4)}});o.saveAs=l.saveAs=l,n.exports=l})})(ut);var _t=ut.exports;const bt=vt(_t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,K=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),et=new WeakMap;let ft=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(K&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&et.set(e,t))}return t}toString(){return this.cssText}};const At=n=>new ft(typeof n=="string"?n:n+"",void 0,G),wt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new ft(e,n,G)},Et=(n,t)=>{if(K)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},st=K?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return At(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:St,defineProperty:xt,getOwnPropertyDescriptor:Mt,getOwnPropertyNames:Pt,getOwnPropertySymbols:Ut,getPrototypeOf:Ct}=Object,m=globalThis,it=m.trustedTypes,Ot=it?it.emptyScript:"",I=m.reactiveElementPolyfillSupport,P=(n,t)=>n,j={toAttribute(n,t){switch(t){case Boolean:n=n?Ot:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Z=(n,t)=>!St(n,t),nt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:Z};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&xt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=Mt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const p=i==null?void 0:i.call(this);r.call(this,o),this.requestUpdate(t,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??nt}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=Ct(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[...Pt(e),...Ut(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(st(i))}else t!==void 0&&e.push(st(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Et(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var r;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),p=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:j;this._$Em=i,this[i]=p.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??Z)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[P("elementProperties")]=new Map,b[P("finalized")]=new Map,I==null||I({ReactiveElement:b}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,L=U.trustedTypes,ot=L?L.createPolicy("lit-html",{createHTML:n=>n}):void 0,gt="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,mt="?"+g,Tt=`<${mt}>`,v=document,O=()=>v.createComment(""),T=n=>n===null||typeof n!="object"&&typeof n!="function",X=Array.isArray,Nt=n=>X(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",q=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,at=/>/g,$=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,ht=/"/g,$t=/^(?:script|style|textarea|title)$/i,Rt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),W=Rt(1),A=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ct=new WeakMap,y=v.createTreeWalker(v,129);function yt(n,t){if(!X(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}const Ht=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",o=M;for(let p=0;p<e;p++){const l=n[p];let a,h,c=-1,d=0;for(;d<l.length&&(o.lastIndex=d,h=o.exec(l),h!==null);)d=o.lastIndex,o===M?h[1]==="!--"?o=rt:h[1]!==void 0?o=at:h[2]!==void 0?($t.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=$):h[3]!==void 0&&(o=$):o===$?h[0]===">"?(o=i??M,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,a=h[1],o=h[3]===void 0?$:h[3]==='"'?ht:lt):o===ht||o===lt?o=$:o===rt||o===at?o=M:(o=$,i=void 0);const u=o===$&&n[p+1].startsWith("/>")?" ":"";r+=o===M?l+Tt:c>=0?(s.push(a),l.slice(0,c)+gt+l.slice(c)+g+u):l+g+(c===-2?p:u)}return[yt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const p=t.length-1,l=this.parts,[a,h]=Ht(t,e);if(this.el=N.createElement(a,s),y.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=y.nextNode())!==null&&l.length<p;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(gt)){const d=h[o++],u=i.getAttribute(c).split(g),_=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:_[2],strings:u,ctor:_[1]==="."?jt:_[1]==="?"?Lt:_[1]==="@"?kt:k}),i.removeAttribute(c)}else c.startsWith(g)&&(l.push({type:6,index:r}),i.removeAttribute(c));if($t.test(i.tagName)){const c=i.textContent.split(g),d=c.length-1;if(d>0){i.textContent=L?L.emptyScript:"";for(let u=0;u<d;u++)i.append(c[u],O()),y.nextNode(),l.push({type:2,index:++r});i.append(c[d],O())}}}else if(i.nodeType===8)if(i.data===mt)l.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(g,c+1))!==-1;)l.push({type:7,index:r}),c+=g.length-1}r++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function w(n,t,e=n,s){var o,p;if(t===A)return t;let i=s!==void 0?(o=e.o)==null?void 0:o[s]:e.l;const r=T(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((p=i==null?void 0:i._$AO)==null||p.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e.o??(e.o=[]))[s]=i:e.l=i),i!==void 0&&(t=w(n,i._$AS(n,t.values),i,s)),t}class Dt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??v).importNode(e,!0);y.currentNode=i;let r=y.nextNode(),o=0,p=0,l=s[0];for(;l!==void 0;){if(o===l.index){let a;l.type===2?a=new R(r,r.nextSibling,this,t):l.type===1?a=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(a=new Ft(r,this,t)),this._$AV.push(a),l=s[++p]}o!==(l==null?void 0:l.index)&&(r=y.nextNode(),o++)}return y.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class R{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.v=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),T(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Nt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(yt(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const o=new Dt(i,this),p=o.u(this.options);o.p(e),this.T(p),this._$AH=o}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new N(t)),e}k(t){X(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new R(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=w(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{const p=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=w(this,p[s+l],e,l),a===A&&(a=this._$AH[l]),o||(o=!T(a)||a!==this._$AH[l]),a===f?t=f:t!==f&&(t+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class jt extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class Lt extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class kt extends k{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??f)===A)return;const s=this._$AH,i=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ft{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const V=U.litHtmlPolyfillSupport;V==null||V(N,R),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.2.0");const zt=(n,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new R(t.insertBefore(O(),r),r,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class C extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return A}}var pt;C._$litElement$=!0,C.finalized=!0,(pt=globalThis.litElementHydrateSupport)==null||pt.call(globalThis,{LitElement:C});const J=globalThis.litElementPolyfillSupport;J==null||J({LitElement:C});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:Z},qt=(n=It,t,e)=>{const{kind:s,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(e.name,n),s==="accessor"){const{name:o}=e;return{set(p){const l=t.get.call(this);t.set.call(this,p),this.requestUpdate(o,l,n)},init(p){return p!==void 0&&this.P(o,void 0,n),p}}}if(s==="setter"){const{name:o}=e;return function(p){const l=this[o];t.call(this,p),this.requestUpdate(o,l,n)}}throw Error("Unsupported decorator location: "+s)};function Wt(n){return(t,e)=>typeof e=="object"?qt(n,t,e):((s,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(n){return Wt({...n,state:!0,attribute:!1})}var D=(n=>(n.system="system",n.user="user",n.assistant="assistant",n))(D||{});class dt{constructor(t){this.messages=[],this.addSystemMessage(t)}addMessage(t,e){this.messages.push({role:t,content:e})}addUserMessage(t){this.addMessage(D.user,t)}addAssistantMessage(t){this.addMessage(D.assistant,t)}addSystemMessage(t){this.addMessage(D.system,t)}}var Vt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,F=(n,t,e,s)=>{for(var i=s>1?void 0:s?Jt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Vt(t,e,i),i};let E=class extends C{constructor(){super(...arguments),this.userMessage="",this.assistantMessage="",this.systemMessage="",this.fileData=[]}render(){return W`
      <div class="container">
        <input type="file" @change=${this.onFileSelected} class="file-input" />

         <div class="input-group">
          <label>System Message:</label>
          <input
            type="text"
            .value=${this.systemMessage}
            @input=${n=>this.systemMessage=n.target.value}
          />
        </div>

        <div class="input-group">
          <label>User Message:</label>
          <input
            type="text"
            .value=${this.userMessage}
            @input=${n=>this.userMessage=n.target.value}
          />
        </div>
        <div class="input-group">
          <label>Assistant Message:</label>
          <input
            type="text"
            .value=${this.assistantMessage}
            @input=${n=>this.assistantMessage=n.target.value}
          />
        </div>
        <div class="button-group">
          <button @click=${this.onAddMessage}>Add messages to current chat</button>
          <button @click=${this.onNextChat}>Complete & Start next chat</button>
        </div>        
        
      </div>
      
      <div class="messages-container">
        <button id="save-button" @click=${this.onSaveToFile} class="save-button">Save to file</button>
        <h3>All chats:</h3>
          
        <code>
          <ul>
            ${this.fileData.map((n,t)=>W`
                <li>
                  <button class="delete-button" @click=${()=>this.onDeleteChat(t)}>Delete this chat</button>
                  ${n.messages.map(e=>W`
                      <strong>${e.role}:</strong> ${e.content}<br/>
                    `)}        
                  <hr />
                </li>
              `)}
          </ul>
        </code>
      </div>
    `}onNextChat(){this.chatData&&(this.userMessage&&this.assistantMessage&&this.onAddMessage(),this.chatData=void 0,this.requestUpdate())}onAddMessage(){this.chatData||(this.systemMessage||(this.systemMessage="You are a helpful assistant!"),this.chatData=new dt(this.systemMessage),this.fileData.push(this.chatData)),this.userMessage&&(this.chatData.addUserMessage(this.userMessage),this.userMessage=""),this.assistantMessage&&(this.chatData.addAssistantMessage(this.assistantMessage),this.assistantMessage=""),this.requestUpdate()}onFileSelected(n){const t=n.target;if(t.files&&t.files.length>0){const e=t.files[0],s=new FileReader;s.onload=()=>{const i=s.result;this.processFileContent(i)},s.readAsText(e)}}processFileContent(n){const t=n.split(`
`);this.fileData=t.filter(e=>e.trim()).map(e=>JSON.parse(e)).map(e=>{const s=new dt(this.systemMessage);return s.messages=e.messages,s}),this.systemMessage=this.fileData[0].messages[0].content,this.requestUpdate()}onSaveToFile(){this.userMessage&&this.assistantMessage&&this.onNextChat();const n=this.transformDataToJSONL(this.fileData),t=new Blob([n],{type:"application/jsonl"});bt(t,"input.jsonl")}transformDataToJSONL(n){return n.map(t=>JSON.stringify(t)).join(`
`)}onDeleteChat(n){this.fileData.splice(n,1),this.requestUpdate()}};E.styles=wt`
    :host {
      display: block;
      margin: 0 auto;
      padding: 0;
      font-family: Arial, sans-serif;
      height: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 600px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      padding: 16px;   
      margin: 16px auto;
    }

    .input-group {
      display: flex;
      flex-direction: column;
    }

    label {
      margin-bottom: 4px;
      font-weight: bold;
    }

    input[type="text"] {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }

    .file-input {
      margin-bottom: 16px;
    }

    .button-group {
      display: flex;
      gap: 8px;
    }

    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #0056b3;
    }

    .save-button {
      align-self: flex-start;
    }

    .messages-container {
      background-color: #1F1F1F;
      padding: 16px;
      height: 50%;
      position: fixed;
      bottom: 0;
      width: 100%;
      overflow-y: auto;
      box-sizing: border-box;
      box-shadow: -1px 1px 20px 0px #747474;

      h3 {
        color: white;
      }
    }

    #save-button {
      margin: 8px 0;
      float: right;
    }

    hr {
      border: none;
      height: 1px;
      background-color: #dddddd;
    }

    code {
      font-family: "Consolas", 'Courier New', monospace;
      font-size: 14px;
      color: #9CDCFE;
      flex-grow: 1;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;
    }

    li {
      padding: 4px 0;
    }

    strong {
      color: #d63384;
    }

    .delete-button {
      background: transparent;
      border: none;
      color: white;
      font-weight: bold;
      cursor: pointer;
      float: right;
    }
`;F([Y()],E.prototype,"userMessage",2);F([Y()],E.prototype,"assistantMessage",2);F([Y()],E.prototype,"systemMessage",2);E=F([Bt("my-element")],E);
