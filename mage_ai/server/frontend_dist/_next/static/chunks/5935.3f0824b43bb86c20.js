(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5935],{5508:function(n,e,t){"use strict";t.r(e);t(82684);var r=t(46042),u=t(79047),o=t(40062),i=t(30210),l=t(9518),c=t(62088),d=t(28598);e.default=function(n){var e=n.children,t=n.main,s=n.router,a=n.theme,f=new o.S;return(0,d.jsx)(l.ThemeProvider,{theme:a,children:(0,d.jsx)(u.aM,{router:s,theme:a,children:(0,d.jsx)(i.aH,{client:f,children:(0,d.jsx)(r.sp,{children:(0,d.jsx)(c.pn,{main:t,children:e})})})})})}},90477:function(n,e,t){"use strict";t.d(e,{AR:function(){return r},Jm:function(){return u},Mg:function(){return o},Ri:function(){return i},d8:function(){return c},lL:function(){return d}});var r,u,o,i,l=t(82684);!function(n){n.DOWN="down",n.LEFT="left",n.RIGHT="right",n.UP="up"}(r||(r={})),function(n){n.CENTER="center",n.END="end",n.START="start"}(u||(u={})),function(n){n.CENTER="center",n.END="end",n.START="start"}(o||(o={})),function(n){n.BLUR="blur",n.CLICK="click",n.ESCAPE="escape",n.LEAVE="leave"}(i||(i={}));var c=(0,l.createContext)(null),d=function(){var n=(0,l.useContext)(c);if(!n)throw new Error("useTooltip must be used within a TooltipProvider");return n}},62088:function(n,e,t){"use strict";t.d(e,{Mg:function(){return r.Mg},AR:function(){return r.AR},Jm:function(){return r.Jm},pn:function(){return R},pf:function(){return w}});var r=t(90477),u=t(82684),o=t(82394),i=t(85253),l=t.n(i),c=t(28598);function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){var t,r,u,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=(t=n.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,u=window.pageYOffset||document.documentElement.scrollTop,{pageX:t.left+r,pageY:t.top+u,width:t.width,height:t.height}),c=l.pageX,d=l.pageY;c&&(c-=o),d&&(d-=i);var s=c,a=d+l.height;e.style.position="absolute",e.style.left="".concat(s,"px"),e.style.top="".concat(a,"px")}function f(n,e){var t=n.children,o=n.layout,i=n.offset,d=n.options,f=(n.optionsPrev,d.event),v=d.style,h=d.wrapperRef,p=o.align,m=void 0===p?r.Mg.START:p,g=o.justify,R=void 0===g?r.Jm.START:g,w=o.position,E=o.horizontalDirection,T=void 0===E?r.AR.RIGHT:E,y=o.verticalDirection,O=void 0===y?r.AR.UP:y;return(0,u.useEffect)((function(){if(null!=e&&e.current&&null!=h&&h.current){var n,t,u,o=null!=f?f:{},c=(o.pageX,o.pageY,null==e||null===(n=e.current)||void 0===n?void 0:n.getBoundingClientRect()),d=c.height,s=(c.left,c.top,c.width),v=null!==(t=null==h||null===(u=h.current)||void 0===u?void 0:u.getBoundingClientRect())&&void 0!==t?t:{},p=v.height,g=void 0===p?0:p,E=(v.left,v.top,v.width),y=void 0===E?0:E,C=window.innerWidth,x=window.innerHeight,j=0,b=0;m===r.Mg.START?j=r.AR.RIGHT===T?0:-s:m===r.Mg.CENTER?j=-Math.abs(y-s)/2:m===r.Mg.END&&(j=r.AR.LEFT===T?-(s-y):y),R===r.Jm.START?b=r.AR.UP===O?-(d+g):-d:R===r.Jm.CENTER?b=-(g+(d-g)/2):R===r.Jm.END&&(b=0),(null==w?void 0:w.x)+j<0?j=0-w.x:(null==w?void 0:w.x)+j>C&&(j=C-w.x),(null==w?void 0:w.y)+b<0?b=0-w.y:(null==w?void 0:w.y)+b>x&&(b=x-w.y),function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;a(n,e,t,r);var u=function(){a(n,e,t,r)};window.addEventListener("scroll",u)}(h.current,e.current,null==i?void 0:i.x,null==i?void 0:i.y),e.current.style.transform="translate(".concat(j,"px, ").concat(b,"px)"),e.current.classList.remove(l().hide)}}),[m,R]),(0,c.jsx)("div",{className:[l().tooltipContent,l().hide].join(" "),ref:e,style:s({},v),children:t})}var v=u.forwardRef(f),h=t(51774),p=t.n(h),m=t(78050),g=t(9518),R=function(n){var e=n.children,o=(n.main,(0,u.useContext)(g.ThemeContext)),i=(0,u.useRef)(null),l=(0,u.useRef)(null),d=(0,u.useRef)(null),s=(0,u.useRef)(null),a=(0,u.useRef)(null),f=(0,u.useRef)(null),h=(0,u.useRef)(!1);function R(){clearTimeout(i.current),clearTimeout(l.current),i.current=null,l.current=null}function w(n){i.current=setTimeout((function(){R(),d.current&&d.current.render(null),a.current=null,f.current=null,h.current=!1}),null!=n?n:1e3)}return(0,u.useEffect)((function(){var n=function(n){var e,t,r,u,o,i=(null!==(e=a.current)&&void 0!==e?e:{}).wrapperRef;if(!i)return!1;var l=null!==(t=null==i||null===(r=i.current)||void 0===r?void 0:r.getBoundingClientRect())&&void 0!==t?t:{},c=l.height,d=l.left,s=l.top,v=l.width,h=null!==(u=null==f||null===(o=f.current)||void 0===o?void 0:o.getBoundingClientRect())&&void 0!==u?u:{},p=h.height,m=h.left,g=h.top,R=h.width,w=n.pageX,E=n.pageY;return w>=d&&w<=d+v&&E>=s&&E<=s+c||w>=m&&w<=m+R&&E>=g&&E<=g+p},e=function(e){var t,u,o,c;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(t=a.current)&&void 0!==t&&null!==(u=t.hideOn)&&void 0!==u&&u.length&&null!=a&&null!==(o=a.current)&&void 0!==o&&null!==(c=o.hideOn)&&void 0!==c&&c.includes(r.Ri.LEAVE)&&(n(e)||i.current||(l.current=null,w()))},t=function(e){var t,u;clearTimeout(l.current),null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(t=a.current)&&void 0!==t&&null!==(u=t.hideOn)&&void 0!==u&&u.includes(r.Ri.CLICK)&&(n(e)||w(0))},u=function(n){var e,t;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(e=a.current)&&void 0!==e&&null!==(t=e.hideOn)&&void 0!==t&&t.includes(r.Ri.ESCAPE)&&"Escape"===n.key&&w(0)};document.addEventListener("focusout",(function(n){var e,t;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(e=a.current)&&void 0!==e&&null!==(t=e.hideOn)&&void 0!==t&&t.includes(r.Ri.BLUR)&&([a.current.wrapperRef,f].some((function(e){return(null==e?void 0:e.current)&&!(null!=e&&e.current.contains(n.relatedTarget))}))&&w(0))}),!0),document.addEventListener("keydown",u,!0),document.addEventListener("mousedown",t,!0),document.addEventListener("mousemove",e,!0);var o=d.current,c=s.current;return function(){document.removeEventListener("focusout",e),document.removeEventListener("keydown",u),document.removeEventListener("mousedown",t),document.removeEventListener("mousemove",e),o&&o.unmount(),c&&document.body.removeChild(c)}}),[]),(0,c.jsx)(r.d8.Provider,{value:{hideTooltip:w,showTooltip:function(n,e,r){R();var u=a.current;a.current=r;var i=p()((function(){return Promise.resolve().then(t.bind(t,5508))}),{loadableGenerated:{webpack:function(){return[5508]}}});null!=s&&s.current||(s.current=document.createElement("div"),s.current.className="tooltip-root",s.current.id=String(Number(new Date)),document.body.appendChild(s.current)),d.current||(d.current=(0,m.createRoot)(s.current)),l.current=setTimeout((function(){R(),d.current.render((0,c.jsx)(i,{theme:o,children:(0,c.jsx)(v,{layout:e,options:r,optionsPrev:u,ref:f,children:n})})),h.current=!0}),h.current?0:2e3)}},children:e})};function w(n){var e=n.align,t=n.children,o=n.hide,i=n.justify,l=n.position,d=n.showOnClick,s=n.showOnHover,a=n.style,f=n.tooltip,v=n.tooltipStyle,h=n.horizontalDirection,p=n.verticalDirection,m=(0,r.lL)().showTooltip,g=(0,u.useRef)(null),R=(0,u.useCallback)((function(n){var t=n.target;if(t instanceof HTMLElement){var u=t.getBoundingClientRect(),o=u.left,c=u.top,s=[r.Ri.BLUR,r.Ri.CLICK,r.Ri.ESCAPE];d||s.push(r.Ri.LEAVE),m(f,{align:e,horizontalDirection:h,justify:i,position:null!=l?l:{x:o,y:c},verticalDirection:p},{event:n,hideOn:s,style:v,wrapperRef:g})}}),[e,i,l,d,m,f,v,h,p]);return o?t:(0,c.jsx)("div",{onClick:d?R:void 0,onMouseEnter:s||!d?R:void 0,ref:g,style:a,children:t})}},75502:function(n,e,t){"use strict";t.d(e,{I:function(){return i},Z:function(){return l}});var r=t(53860),u=t(82684),o=t(28598);function i(n){var e=n.children,t=n.onMount,i=n.uuid,l=n.waitUntil,c=n.maxAttempts,d=void 0===c?10:c,s=n.pollInterval,a=void 0===s?100:s,f=n.withRef,v=(0,u.useRef)(0),h=(0,u.useRef)(0),p=(0,u.useRef)(null),m=(0,u.useRef)(null);return(0,u.useEffect)((function(){if(!(h.current>=d)){r.e.hooks.withOnMount&&console.log("[WithOnMount:".concat(i,":").concat(v.current,"]")),0===v.current&&(p.current=setTimeout((function n(){clearTimeout(p.current),h.current+=1,h.current>=d?r.e.hooks.withOnMount&&console.log("[WithOnMount]: maxAttempts reached"):0!==v.current||!t||l&&!l(f?m:null)||f&&(null==m||!m.current)?p.current=setTimeout(n,a):(r.e.hooks.withOnMount&&console.log("[WithOnMount:".concat(i,":").concat(v.current,"]")),f?t(m):t(),v.current+=1)}),a));var n=p.current;return function(){clearTimeout(n),h.current=0,v.current=0,p.current=null}}}),[d,t,a]),f?(0,o.jsx)("div",{ref:m,children:e}):(0,o.jsx)(o.Fragment,{children:e})}function l(n){var e=n.children,t=n.onMount,i=n.waitUntil,l=n.maxAttempts,c=void 0===l?10:l,d=n.pollInterval,s=void 0===d?100:d,a=(0,u.useRef)(0),f=(0,u.useRef)(0),v=(0,u.useRef)(null);return r.e.hooks.withOnMount&&console.log("[useWithOnMount] rendering...",null==a?void 0:a.current),(0,u.useEffect)((function(){if(!(f.current>=c)){0===a.current&&(v.current=setTimeout((function n(){clearTimeout(v.current),f.current>=c||(f.current+=1,0!==a.current||!t||i&&!i()?v.current=setTimeout(n,s):(t(),a.current+=1))}),s));var n=v.current;return function(){clearTimeout(n),a.current=0,v.current=null,f.current=0}}}),[c,t,s]),(0,o.jsx)(o.Fragment,{children:e})}},85253:function(n){n.exports={tooltipContent:"TooltipContent_tooltipContent__jwrVy",hide:"TooltipContent_hide__q3_7w"}}}]);