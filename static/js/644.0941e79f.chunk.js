"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{3644:function(t,n,e){e.r(n),e.d(n,{default:function(){return Mt}});var r=e(3433),o=e(5861),a=e(9439),i=e(4687),s=e.n(i),c=e(2791),u=e(168),l=e(9142);function f(t,n,e){return(n=(0,l.Z)(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){f(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var m={data:""},v=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||m},b=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,y=function t(n,e){var r="",o="",a="",i=function(i){var c=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?t(c,i):i+"{"+t(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=t(c,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=t.p?t.p(i,c):i+":"+c+";"),s=i};for(var s in n)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},x={},w=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},j=function(t,n,e,r,o){var a=w(t),i=x[a]||(x[a]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(a));if(!x[i]){var s=a!==t?t:function(t){for(var n,e,r=[{}];n=b.exec(t.replace(h,""));)n[4]?r.shift():n[3]?(e=n[3].replace(g," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(g," ").trim();return r[0]}(t);x[i]=y(o?f({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&x.g?x.g:null;return e&&(x.g=x[i]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(x[i],n,r,c),i},O=function(t,n,e){return t.reduce((function(t,r,o){var a=n[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":y(i,""):!1===i?"":i}return t+r+(null==a?"":a)}),"")};function Z(t){var n=this||{},e=t.call?t(n.p):t;return j(e.unshift?e.raw?O(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,v(n.target),n.g,n.o,n.k)}Z.bind({g:1});var k,E,P,C,D,S,N,z,A,I,F,M,T,_,H,L,U,W,Y,$=Z.bind({k:1});function q(t,n){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:E&&E()},s),e.o=/ *go\d+/.test(c),s.className=Z.apply(e,r)+(c?" "+c:""),n&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),P&&u[0]&&P(s),k(u,s)}return n?n(o):o}}var B=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},R=function(){var t=0;return function(){return(++t).toString()}}(),G=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),J=new Map,K=function(t){if(!J.has(t)){var n=setTimeout((function(){J.delete(t),tt({type:4,toastId:t})}),1e3);J.set(t,n)}},Q=function t(n,e){switch(e.type){case 0:return p(p({},n),{},{toasts:[e.toast].concat((0,r.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=J.get(t);n&&clearTimeout(n)}(e.toast.id),p(p({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?p(p({},t),e.toast):t}))});case 2:var o=e.toast;return n.toasts.find((function(t){return t.id===o.id}))?t(n,{type:1,toast:o}):t(n,{type:0,toast:o});case 3:var a=e.toastId;return a?K(a):n.toasts.forEach((function(t){K(t.id)})),p(p({},n),{},{toasts:n.toasts.map((function(t){return t.id===a||void 0===a?p(p({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?p(p({},n),{},{toasts:[]}):p(p({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return p(p({},n),{},{pausedAt:e.time});case 6:var i=e.time-(n.pausedAt||0);return p(p({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return p(p({},t),{},{pauseDuration:t.pauseDuration+i})}))})}},V=[],X={toasts:[],pausedAt:void 0},tt=function(t){X=Q(X,t),V.forEach((function(t){t(X)}))},nt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},et=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return p(p({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||R()})}(n,t,e);return tt({type:2,toast:r}),r.id}},rt=function(t,n){return et("blank")(t,n)};rt.error=et("error"),rt.success=et("success"),rt.loading=et("loading"),rt.custom=et("custom"),rt.dismiss=function(t){tt({type:3,toastId:t})},rt.remove=function(t){return tt({type:4,toastId:t})},rt.promise=function(t,n,e){var r=rt.loading(n.loading,p(p({},e),null==e?void 0:e.loading));return t.then((function(t){return rt.success(B(n.success,t),p(p({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){rt.error(B(n.error,t),p(p({id:r},e),null==e?void 0:e.error))})),t};var ot=function(t,n){tt({type:1,toast:{id:t,height:n}})},at=function(){tt({type:5,time:Date.now()})},it=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,c.useState)(X),e=(0,a.Z)(n,2),r=e[0],o=e[1];(0,c.useEffect)((function(){return V.push(o),function(){var t=V.indexOf(o);t>-1&&V.splice(t,1)}}),[r]);var i=r.toasts.map((function(n){var e,r;return p(p(p(p({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||nt[n.type],style:p(p(p({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return p(p({},r),{},{toasts:i})}(t),e=n.toasts,o=n.pausedAt;(0,c.useEffect)((function(){if(!o){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return rt.dismiss(n.id)}),e);n.visible&&rt.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,o]);var i=(0,c.useCallback)((function(){o&&tt({type:6,time:Date.now()})}),[o]),s=(0,c.useCallback)((function(t,n){var o,a=n||{},i=a.reverseOrder,s=void 0!==i&&i,c=a.gutter,u=void 0===c?8:c,l=a.defaultPosition,f=e.filter((function(n){return(n.position||l)===(t.position||l)&&n.height})),d=f.findIndex((function(n){return n.id===t.id})),p=f.filter((function(t,n){return n<d&&t.visible})).length;return(o=f.filter((function(t){return t.visible}))).slice.apply(o,(0,r.Z)(s?[p+1]:[0,p])).reduce((function(t,n){return t+(n.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:ot,startPause:at,endPause:i,calculateOffset:s}}},st=$(C||(C=(0,u.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),ct=$(D||(D=(0,u.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ut=$(S||(S=(0,u.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),lt=q("div")(N||(N=(0,u.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),st,ct,(function(t){return t.secondary||"#fff"}),ut),ft=$(z||(z=(0,u.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),dt=q("div")(A||(A=(0,u.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),ft),pt=$(I||(I=(0,u.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),mt=$(F||(F=(0,u.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),vt=q("div")(M||(M=(0,u.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),pt,mt,(function(t){return t.secondary||"#fff"})),bt=q("div")(T||(T=(0,u.Z)(["\n  position: absolute;\n"]))),ht=q("div")(_||(_=(0,u.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),gt=$(H||(H=(0,u.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),yt=q("div")(L||(L=(0,u.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),gt),xt=function(t){var n=t.toast,e=n.icon,r=n.type,o=n.iconTheme;return void 0!==e?"string"==typeof e?c.createElement(yt,null,e):e:"blank"===r?null:c.createElement(ht,null,c.createElement(dt,p({},o)),"loading"!==r&&c.createElement(bt,null,"error"===r?c.createElement(lt,p({},o)):c.createElement(vt,p({},o))))},wt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},jt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},Ot=q("div")(U||(U=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Zt=q("div")(W||(W=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),kt=c.memo((function(t){var n=t.toast,e=t.position,r=t.style,o=t.children,i=n.height?function(t,n){var e=t.includes("top")?1:-1,r=G()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[wt(e),jt(e)],o=(0,a.Z)(r,2),i=o[0],s=o[1];return{animation:n?"".concat($(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat($(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},s=c.createElement(xt,{toast:n}),u=c.createElement(Zt,p({},n.ariaProps),B(n.message,n));return c.createElement(Ot,{className:n.className,style:p(p(p({},i),r),n.style)},"function"==typeof o?o({icon:s,message:u}):c.createElement(c.Fragment,null,s,u))}));!function(t,n,e,r){y.p=n,k=t,E=e,P=r}(c.createElement);var Et=function(t){var n=t.id,e=t.className,r=t.style,o=t.onHeightUpdate,a=t.children,i=c.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;o(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,o]);return c.createElement("div",{ref:i,className:e,style:r},a)},Pt=Z(Y||(Y=(0,u.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Ct=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,o=t.toastOptions,a=t.gutter,i=t.children,s=t.containerStyle,u=t.containerClassName,l=it(o),f=l.toasts,d=l.handlers;return c.createElement("div",{style:p({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:u,onMouseEnter:d.startPause,onMouseLeave:d.endPause},f.map((function(t){var e=t.position||r,o=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return p(p({left:0,right:0,display:"flex",position:"absolute",transition:G()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),o)}(e,d.calculateOffset(t,{reverseOrder:n,gutter:a,defaultPosition:r}));return c.createElement(Et,{id:t.id,key:t.id,onHeightUpdate:d.updateHeight,className:t.visible?Pt:"",style:o},"custom"===t.type?B(t.message,t):i?i(t):c.createElement(kt,{toast:t,position:e}))})))},Dt=function(t){rt.error(t,{position:"bottom-right",duration:2e3,style:{background:"#ff7340",color:"#fff"}})},St=e(184),Nt=function(t){var n=t.submit,e=(0,c.useState)(""),r=(0,a.Z)(e,2),o=r[0],i=r[1];return(0,St.jsxs)(St.Fragment,{children:[(0,St.jsx)(Ct,{}),(0,St.jsxs)("form",{onSubmit:function(t){var e=o.toLowerCase().trim();if(t.preventDefault(),!e)return Dt("Enter some value before submit!");n(e),i("")},children:[(0,St.jsx)("label",{htmlFor:"movies",className:"visually-hidden",children:"Search Movies"}),(0,St.jsx)("input",{id:"movies",type:"text",value:o,onChange:function(t){return i(t.target.value)}}),(0,St.jsx)("button",{type:"submit",children:"Search"})]})]})},zt=e(1087),At=e(7689),It=e(7995),Ft=e(6816),Mt=function(){var t=(0,zt.lr)(),n=(0,a.Z)(t,2),e=n[0],i=n[1],u=(0,c.useState)([]),l=(0,a.Z)(u,2),f=l[0],d=l[1],p=(0,c.useState)(!1),m=(0,a.Z)(p,2),v=m[0],b=m[1],h=(0,c.useState)(null),g=(0,a.Z)(h,2),y=g[0],x=g[1],w=(0,c.useState)(null),j=(0,a.Z)(w,2),O=j[0],Z=j[1],k=(0,At.TH)();(0,c.useEffect)((function(){var t,n=null!==(t=e.get("movies"))&&void 0!==t?t:"",a=new AbortController;if(n)return function(){i.apply(this,arguments)}(),function(){return a.abort()};function i(){return(i=(0,o.Z)(s().mark((function t(){var e,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.prev=1,t.next=4,(0,It.Wf)(n,a);case 4:if(e=t.sent,o=e.results,d((0,r.Z)(o)),!(o.length<1)){t.next=10;break}return Z("empty"),t.abrupt("return");case 10:Z("resolved"),t.next=18;break;case 13:if(t.prev=13,t.t0=t.catch(1),"canceled"!==t.t0.message){t.next=17;break}return t.abrupt("return");case 17:x(t.t0);case 18:return t.prev=18,b(!1),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[1,13,18,21]])})))).apply(this,arguments)}}),[e]);return(0,St.jsxs)("main",{children:[(0,St.jsx)(Nt,{submit:function(t){if(e.get("movies")===t)return Dt("You enter the same value!");i({movies:t}),d([]),x(null)}}),v&&(0,St.jsx)(Ft.$j,{}),"empty"===O&&(0,St.jsx)(Ft.hD,{}),"resolved"===O&&(0,St.jsx)(Ft.eW,{movies:f,location:{from:k}}),y&&(0,St.jsx)(Ft.D2,{})]})}}}]);
//# sourceMappingURL=644.0941e79f.chunk.js.map