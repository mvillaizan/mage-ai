(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5912],{44162:function(t,e,n){"use strict";n.d(e,{HC:function(){return g},Kf:function(){return s},Nk:function(){return p},PY:function(){return f},gE:function(){return m},jv:function(){return b},nz:function(){return h},oh:function(){return d},qn:function(){return l},t1:function(){return x},y9:function(){return A}});var r=n(38626),o=n(23831),i=n(86422),c=n(73942),a=n(49125),u=n(90880),d=68;function l(t,e){var n,r,c=((null===e||void 0===e||null===(n=e.theme)||void 0===n?void 0:n.borders)||o.Z.borders).light,a=((null===e||void 0===e||null===(r=e.theme)||void 0===r?void 0:r.monotone)||o.Z.monotone).grey500,u=e||{},d=u.blockColor,l=u.isSelected,s=u.theme;return l?c=(s||o.Z).content.active:i.tf.TRANSFORMER===t||d===i.Lq.PURPLE?(c=(s||o.Z).accent.purple,a=(s||o.Z).accent.purpleLight):i.tf.DATA_EXPORTER===t||d===i.Lq.YELLOW?(c=(s||o.Z).accent.yellow,a=(s||o.Z).accent.yellowLight):i.tf.DATA_LOADER===t||d===i.Lq.BLUE?(c=(s||o.Z).accent.blue,a=(s||o.Z).accent.blueLight):i.tf.MARKDOWN===t?(c=(s||o.Z).accent.sky,a=(s||o.Z).accent.skyLight):i.tf.SENSOR===t||d===i.Lq.PINK?(c=(s||o.Z).accent.pink,a=(s||o.Z).accent.pinkLight):i.tf.DBT===t?(c=(s||o.Z).accent.dbt,a=(s||o.Z).accent.dbtLight):i.tf.EXTENSION===t||d===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).teal,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).tealLight):i.tf.CALLBACK===t?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).rose,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).roseLight):(i.tf.CONDITIONAL===t||i.tf.SCRATCHPAD===t||d===i.Lq.GREY||i.tf.CUSTOM===t&&!d)&&(c=(s||o.Z).content.default,a=(s||o.Z).accent.contentDefaultTransparent),{accent:c,accentLight:a}}var s=(0,r.css)([""," "," "," "," "," "," ",""],(0,u.eR)(),(function(t){return!t.selected&&!t.hasError&&"\n    border-color: ".concat(l(t.blockType,t).accentLight,";\n  ")}),(function(t){return t.selected&&!t.hasError&&"\n    border-color: ".concat(l(t.blockType,t).accent,";\n  ")}),(function(t){return!t.selected&&t.hasError&&"\n    border-color: ".concat((t.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(t){return t.selected&&t.hasError&&"\n    border-color: ".concat((t.theme.borders||o.Z.borders).danger,";\n  ")}),(function(t){return t.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(t){return t.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),p=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),f=r.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],s,c.n_,c.M8,c.mP,(function(t){return"\n    background-color: ".concat((t.theme||o.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(l(t.blockType,t).accent,";\n    }\n  ")})),h=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-2"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," "," ",""],s,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,a.iI,(function(t){return"\n    background-color: ".concat((t.theme||o.Z).background.content,";\n  ")}),(function(t){return t.bottomBorder&&"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((t.theme||o.Z).borders.medium2,";\n  ")}),(function(t){return t.zIndex&&"\n    z-index: ".concat(6+(t.zIndex||0),";\n  ")})),b=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-3"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,c.M8,c.mP,c.M8,c.mP,a.iI,a.iI,(function(t){return"\n    background-color: ".concat((t.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(t){return t.lightBackground&&"\n    background-color: ".concat((t.theme||o.Z).background.content,";\n  ")}),(function(t){return!t.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),m=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-4"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*a.iI,.5*a.iI,(function(t){return t.additionalZIndex>0&&"\n      z-index: ".concat(8+t.additionalZIndex,";\n    ")}),(function(t){return"\n        background-color: ".concat((t.theme.text||o.Z.text).fileBrowser,";\n      ")})),x=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-5"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*a.iI),A=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-6"})(["margin-bottom:","px;padding-bottom:","px;",""],1*a.iI,1*a.iI,(function(t){return"\n    border-bottom: 1px solid ".concat((t.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(t.normalPadding?a.iI:d,"px;\n  ")})),g=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-7"})(["bottom:","px;left:","px;position:absolute;"],1*a.iI,d)},43032:function(t,e,n){"use strict";n.d(e,{Cl:function(){return a},Nk:function(){return u},ZG:function(){return c}});var r=n(38626),o=n(23831),i=n(49125),c=1.5*i.iI,a=1*c+i.iI/2,u=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(t){return"\n      background-color: ".concat((t.theme.interactive||o.Z.interactive).hoverBackground,";\n    ")}))},67591:function(t,e,n){"use strict";var r=n(26304),o=n(82394),i=n(21831),c=(n(82684),n(84969)),a=n(90948),u=n(81354),d=n(67778),l=n(29989),s=n(17066),p=n(29179),f=n(65376),h=n(48072),b=n(98677),m=n(84181),x=n(24903),A=n(67971),g=n(26226),O=n(19711),y=n(52359),Z=n(23831),v=n(73942),T=n(2005),R=n(49125),E=n(344),D=n(28598),_=["height","width","xAxisLabel","yAxisLabel"];function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t){var e=t.backgroundColor,n=t.colors,r=t.data,o=t.getXValue,A=(t.getYValue,t.height),g=t.keys,y=t.margin,R=t.numYTicks,_=t.showLegend,C=t.tooltipLeftOffset,j=void 0===C?0:C,k=t.width,N=t.xLabelFormat,P=t.yLabelFormat,S=(0,p.Z)(),w=S.hideTooltip,M=S.showTooltip,I=S.tooltipData,B=S.tooltipLeft,H=S.tooltipOpen,X=S.tooltipTop,F=k-(y.left+y.right),K=A-(y.bottom+y.top),U=r.reduce((function(t,e){var n=e,r=g.reduce((function(t,e){return Number(n[e])&&(t+=Number(n[e])),t}),0);return t.push(r),t}),[]),Y=(0,b.Z)({domain:r.map(o),padding:.4,range:[0,F],round:!1}),q=(0,m.Z)({domain:[0,Math.max.apply(Math,(0,i.Z)(U))],range:[K,0],round:!0}),z=(0,x.Z)({domain:g,range:n});return(0,D.jsxs)("div",{style:{position:"relative",zIndex:2},children:[(0,D.jsxs)("svg",{height:A,width:k,children:[(0,D.jsx)("rect",{fill:e||Z.Z.background.chartBlock,height:A,rx:14,width:k,x:0,y:0}),(0,D.jsx)(d.Z,{height:K,left:y.left,scale:q,stroke:"black",strokeOpacity:.2,top:y.top,width:F}),(0,D.jsx)(l.Z,{left:y.left,top:y.top,children:(0,D.jsx)(u.Z,{color:z,data:r,keys:g,value:function(t,e){return t[e]||0},x:o,xScale:Y,yScale:q,children:function(t){return t.map((function(t){return t.bars.map((function(e){return(0,D.jsx)("rect",{fill:e.color,height:e.height,onMouseLeave:w,onMouseMove:function(t){var n=(0,h.Z)(t),r=e.x+e.width/2+j;M({tooltipData:e,tooltipLeft:r,tooltipTop:(null===n||void 0===n?void 0:n.y)+10})},width:e.width,x:e.x,y:e.y},"bar-stack-".concat(t.index,"-").concat(e.index))}))}))}})}),(0,D.jsx)(c.Z,{hideTicks:!0,left:y.left,numTicks:R,scale:q,stroke:Z.Z.content.muted,tickFormat:function(t){return P?P(t):(0,E.P5)(t)},tickLabelProps:function(){return{fill:Z.Z.content.muted,fontFamily:T.ry,fontSize:11,textAnchor:"end",transform:"translate(0,2.5)"}},top:y.top}),(0,D.jsx)(a.Z,{hideTicks:!0,left:y.left,scale:Y,stroke:Z.Z.content.muted,tickFormat:N,tickLabelProps:function(){return{fill:Z.Z.content.muted,fontFamily:T.ry,fontSize:11,textAnchor:"middle"}},top:K+y.top})]}),_&&(0,D.jsx)("div",{style:{display:"flex",fontSize:"14px",justifyContent:"center",position:"absolute",top:y.top/2-10,width:"100%"},children:(0,D.jsx)(s.Z,{direction:"row",labelMargin:"0 15px 0 0",scale:z})}),H&&I&&(0,D.jsxs)(f.Z,{left:B,style:L(L({},f.j),{},{backgroundColor:Z.Z.background.page,borderRadius:"".concat(v.TR,"px"),padding:".3rem .4rem"}),top:X,children:[(0,D.jsx)(O.ZP,{bold:!0,color:z(I.key),children:I.key}),(0,D.jsx)(O.ZP,{children:I.bar.data[I.key]}),(0,D.jsx)(O.ZP,{children:o(I.bar.data)})]})]})}e.Z=function(t){var e=t.height,n=t.width,o=t.xAxisLabel,i=t.yAxisLabel,c=(0,r.Z)(t,_);return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)("div",{style:{height:e,marginBottom:R.iI,width:n},children:[i&&(0,D.jsx)(A.Z,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,D.jsx)(y.Z,{children:(0,D.jsx)(O.ZP,{center:!0,muted:!0,small:!0,children:i})})}),(0,D.jsx)("div",{style:{height:e,width:i?0===n?n:n-28:n},children:(0,D.jsx)(g.Z,{children:function(t){var e=t.height,n=t.width;return(0,D.jsx)(j,L(L({},c),{},{height:e,width:n}))}})}),o&&(0,D.jsx)("div",{style:{paddingLeft:i?36:0,paddingTop:4},children:(0,D.jsx)(O.ZP,{center:!0,muted:!0,small:!0,children:o})})]})})}},86422:function(t,e,n){"use strict";n.d(e,{$W:function(){return h},DA:function(){return f},HX:function(){return x},J8:function(){return m},L8:function(){return c},Lq:function(){return s},M5:function(){return p},Qj:function(){return A},Ut:function(){return Z},V4:function(){return y},VZ:function(){return b},dO:function(){return l},f2:function(){return O},iZ:function(){return g},t6:function(){return a},tf:function(){return d}});var r,o,i,c,a,u=n(82394);!function(t){t.CONDITION="condition",t.DBT_SNAPSHOT="snapshot",t.DYNAMIC="dynamic",t.DYNAMIC_CHILD="dynamic_child",t.REDUCE_OUTPUT="reduce_output",t.REPLICA="replica"}(c||(c={})),function(t){t.MARKDOWN="markdown",t.PYTHON="python",t.R="r",t.SQL="sql",t.YAML="yaml"}(a||(a={}));var d,l=(r={},(0,u.Z)(r,a.MARKDOWN,"MD"),(0,u.Z)(r,a.PYTHON,"PY"),(0,u.Z)(r,a.R,"R"),(0,u.Z)(r,a.SQL,"SQL"),(0,u.Z)(r,a.YAML,"YAML"),r);!function(t){t.CALLBACK="callback",t.CHART="chart",t.CONDITIONAL="conditional",t.CUSTOM="custom",t.DATA_EXPORTER="data_exporter",t.DATA_LOADER="data_loader",t.DBT="dbt",t.EXTENSION="extension",t.SCRATCHPAD="scratchpad",t.SENSOR="sensor",t.MARKDOWN="markdown",t.TRANSFORMER="transformer"}(d||(d={}));var s,p=[d.CALLBACK,d.CONDITIONAL,d.EXTENSION];!function(t){t.BLUE="blue",t.GREY="grey",t.PINK="pink",t.PURPLE="purple",t.TEAL="teal",t.YELLOW="yellow"}(s||(s={}));var f,h=[d.CHART,d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN,d.TRANSFORMER],b=[d.DATA_EXPORTER,d.DATA_LOADER],m=[d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],x=[d.DATA_EXPORTER,d.DATA_LOADER,d.DBT,d.TRANSFORMER],A=[d.CHART,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN],g=[d.CALLBACK,d.CHART,d.EXTENSION,d.SCRATCHPAD,d.MARKDOWN];!function(t){t.EXECUTED="executed",t.FAILED="failed",t.NOT_EXECUTED="not_executed",t.UPDATED="updated"}(f||(f={}));var O=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],y=(o={},(0,u.Z)(o,d.CALLBACK,"Callback"),(0,u.Z)(o,d.CUSTOM,"Custom"),(0,u.Z)(o,d.DATA_EXPORTER,"Data exporter"),(0,u.Z)(o,d.DATA_LOADER,"Data loader"),(0,u.Z)(o,d.EXTENSION,"Extension"),(0,u.Z)(o,d.SCRATCHPAD,"Scratchpad"),(0,u.Z)(o,d.SENSOR,"Sensor"),(0,u.Z)(o,d.MARKDOWN,"Markdown"),(0,u.Z)(o,d.TRANSFORMER,"Transformer"),o),Z=[d.DATA_LOADER,d.TRANSFORMER,d.DATA_EXPORTER,d.SENSOR];i={},(0,u.Z)(i,d.DATA_EXPORTER,"DE"),(0,u.Z)(i,d.DATA_LOADER,"DL"),(0,u.Z)(i,d.SCRATCHPAD,"SP"),(0,u.Z)(i,d.SENSOR,"SR"),(0,u.Z)(i,d.MARKDOWN,"MD"),(0,u.Z)(i,d.TRANSFORMER,"TF")},50094:function(t,e,n){"use strict";n.r(e);var r=n(77837),o=n(75582),i=n(82394),c=n(38860),a=n.n(c),u=n(82684),d=n(92083),l=n.n(d),s=n(38626),p=n(67591),f=n(16634),h=n(67971),b=n(87372),m=n(87465),x=n(41788),A=n(55378),g=n(86673),O=n(82531),y=n(23831),Z=n(92953),v=n(43032),T=n(44162),R=n(42305),E=n(24224),D=n(28598);function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t){var e=t.pipeline,n=(0,u.useContext)(s.ThemeContext),r=(0,u.useState)(null),c=r[0],a=r[1],d=e.uuid,x=O.ZP.pipelines.detail(d,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,_=(0,u.useMemo)((function(){return C(C({},null===x||void 0===x?void 0:x.pipeline),{},{uuid:d})}),[x,d]),L=O.ZP.pipeline_schedules.pipelines.list(d).data,j=(0,u.useMemo)((function(){return null===L||void 0===L?void 0:L.pipeline_schedules}),[L]),k=(0,u.useMemo)((function(){return(0,E.HK)(null===_||void 0===_?void 0:_.blocks,(function(t){return t.uuid}))||{}}),[_]),N={pipeline_uuid:d};(c||0===c)&&(N.pipeline_schedule_id=Number(c));var P=O.ZP.monitor_stats.detail("block_run_count",N),S=P.data,w=P.mutate,M=((null===S||void 0===S?void 0:S.monitor_stat)||{}).stats,I=(0,u.useMemo)((function(){return(0,R.Y_)()}),[]),B=(0,u.useMemo)((function(){if(M)return Object.entries(M).reduce((function(t,e){var n=(0,o.Z)(e,2),r=n[0],c=n[1].data,a=I.map((function(t){return C({date:t},c[t]||{})}));return C(C({},t),{},(0,i.Z)({},r,a))}),{})}),[I,M]),H=(0,u.useMemo)((function(){var t=[];return t.push({bold:!0,label:function(){return"Monitors"}}),t}),[]);return(0,D.jsx)(m.Z,{breadcrumbs:H,monitorType:Z.a_.BLOCK_RUNS,pipeline:_,subheader:(0,D.jsx)(h.Z,{children:(0,D.jsxs)(A.Z,{backgroundColor:y.Z.interactive.defaultBackground,label:"Trigger:",onChange:function(t){var e=t.target.value;"initial"!==e?(a(e),w(e)):(w(),a(null))},value:c||"initial",children:[(0,D.jsx)("option",{value:"initial",children:"All"}),j&&j.map((function(t){return(0,D.jsx)("option",{value:t.id,children:t.name},t.id)}))]})}),children:(0,D.jsx)(g.Z,{mx:2,children:B&&Object.entries(B).map((function(t){var e,r,i=(0,o.Z)(t,2),c=i[0],a=i[1];return(0,D.jsxs)(g.Z,{mt:3,children:[(0,D.jsxs)(h.Z,{alignItems:"center",children:[(0,D.jsx)(g.Z,{mx:1,children:(0,D.jsx)(f.Z,{color:(0,T.qn)(null===(e=k[c])||void 0===e?void 0:e.type,{blockColor:null===(r=k[c])||void 0===r?void 0:r.color,theme:n}).accent,size:v.ZG,square:!0})}),(0,D.jsx)(b.Z,{level:4,children:c})]}),(0,D.jsx)(g.Z,{mt:1,children:(0,D.jsx)(p.Z,{colors:Z.NU,data:a,getXValue:function(t){return t.date},height:200,keys:Z.hu,margin:{bottom:30,left:35,right:0,top:10},tooltipLeftOffset:Z.CD,xLabelFormat:function(t){return l()(t).format("MMM DD")}})})]},c)}))})})}L.getInitialProps=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query.pipeline,t.abrupt("return",{pipeline:{uuid:n}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.default=(0,x.Z)(L)},83542:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors/block-runs",function(){return n(50094)}])}},function(t){t.O(0,[844,9902,5896,2714,5239,1424,1005,2437,4738,9774,2888,179],(function(){return e=83542,t(t.s=e);var e}));var e=t.O();_N_E=e}]);