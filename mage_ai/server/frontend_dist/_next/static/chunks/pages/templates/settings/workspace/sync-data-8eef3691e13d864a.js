(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4998],{79264:function(e,t,n){"use strict";var i=n(82394),r=n(75582),l=n(82684),s=n(21764),o=n(46568),c=n(97618),a=n(68562),u=n(82682),d=n(30160),h=n(17488),p=n(36300),f=n(72473),b=n(31748),m=n(79633),y=n(70515),j=n(72619),g=n(33834),v=n(83455),x=n(22271),Z=n(28598);t.Z=function(e){var t=e.copyText,n=e.deleteVariable,_=e.disableKeyEdit,w=e.editStateInit,O=void 0!==w&&w,k=e.fetchVariables,P=e.focusKey,C=e.hideEdit,S=e.obfuscate,T=e.onEnterCallback,I=e.onEscapeCallback,E=e.pipelineUUID,M=e.updateVariable,D=e.variable||{},q=D.uuid,G=D.value,N=(0,l.useRef)(null),H=(0,l.useRef)(null),A=(0,l.useState)(!1),R=A[0],W=A[1],z=(0,l.useState)(q),L=z[0],U=z[1],V=(0,l.useState)(G),B=V[0],F=V[1],Y=(0,l.useState)(O),J=Y[0],K=Y[1],X=(0,v.Db)(x.ZP.variables.pipelines.useUpdate(E,q),{onSuccess:function(e){return(0,j.wD)(e,{callback:function(){K(!1),k()}})}}),$=(0,r.Z)(X,1)[0],Q=(0,l.useCallback)((function(e){if("Enter"===e.key){var t=B;try{t=JSON.parse(B)}catch(e){}M?L&&B&&(null==M||M((0,i.Z)({},L,B)),K(!1)):$({variable:{name:L,value:t}}),(0,g.ez)(),null==T||T()}else"Escape"===e.key&&((0,g.ez)(),K(!1),null==I||I())}),[T,I,M,$,L,B]),ee=(0,l.useCallback)((function(){(0,g.ez)(),n()}),[n]);(0,l.useEffect)((function(){var e,t;J&&(P?null==N||null===(e=N.current)||void 0===e||e.focus():null==H||null===(t=H.current)||void 0===t||t.focus())}),[J,P]);var te=t||"kwargs['".concat(q,"']");return(0,Z.jsx)("div",{onMouseEnter:function(){return W(!0)},onMouseLeave:function(){return W(!1)},children:(0,Z.jsxs)(u.Z,{children:[(0,Z.jsx)(o.Z,{hiddenSmDown:!0,md:1,children:(0,Z.jsx)(p.qZ,{noPadding:!0,children:(0,Z.jsx)(a.ZP,{backgroundColor:b.qJ,borderless:!0,centerText:!0,muted:!0,onClick:function(){navigator.clipboard.writeText(te),s.Am.success("Successfully copied to clipboard.",{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:q})},small:!0,uuid:"Sidekick/GlobalVariables/".concat(q),withIcon:!0,children:(0,Z.jsx)(f.Copy,{size:2.5*y.iI})})})}),(0,Z.jsx)(o.Z,{md:S?9:4,children:J&&!_?(0,Z.jsx)(p.qZ,{children:(0,Z.jsx)(h.Z,{borderless:!0,compact:!0,fullWidth:!0,monospace:!0,onChange:function(e){U(e.target.value),e.preventDefault()},onKeyDown:Q,paddingHorizontal:0,placeholder:"variable",ref:N,small:!0,value:L})}):(0,Z.jsx)(p.qZ,{children:(0,Z.jsx)(d.ZP,{color:m.Or,monospace:!0,small:!0,title:q,children:q})})}),(0,Z.jsx)(o.Z,{md:S?2:7,children:J?(0,Z.jsx)(p.qZ,{children:(0,Z.jsx)(h.Z,{borderless:!0,compact:!0,fullWidth:!0,monospace:!0,onChange:function(e){F(e.target.value),e.preventDefault()},onKeyDown:Q,paddingHorizontal:0,placeholder:"enter value",ref:H,small:!0,value:B})}):(0,Z.jsxs)(p.qZ,{children:[S?(0,Z.jsx)(d.ZP,{monospace:!0,small:!0,children:R?"*":"*******"}):(0,Z.jsx)(d.ZP,{monospace:!0,small:!0,title:G.toString(),children:G.toString()}),(0,Z.jsxs)(c.Z,{children:[!C&&R&&(0,Z.jsx)(a.ZP,{backgroundColor:b.qJ,borderless:!0,inline:!0,muted:!0,onClick:function(){K(!0)},small:!0,uuid:"Sidekick/GlobalVariables/edit_".concat(q),withIcon:!0,children:(0,Z.jsx)(f.Edit,{size:2.5*y.iI})}),n&&R&&(0,Z.jsx)(a.ZP,{backgroundColor:b.qJ,borderless:!0,inline:!0,muted:!0,onClick:ee,small:!0,uuid:"Sidekick/GlobalVariables/delete_".concat(q),withIcon:!0,children:(0,Z.jsx)(f.Trash,{size:2.5*y.iI})})]})]})})]})})}},36300:function(e,t,n){"use strict";n.d(t,{kA:function(){return a},qZ:function(){return u}});var i=n(9518),r=n(2842),l=n(4982),s=n(61896),o=n(47041),c=n(70515),a=(c.iI,l.O$,c.iI,s.dN,i.default.div.withConfig({displayName:"indexstyle__SidekickContainerStyle",componentId:"sc-cr39lf-0"})(["height:calc(100vh - ","px - ","px);width:fit-content;",""],r.Wi,o.nn,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),i.default.div.withConfig({displayName:"indexstyle__PaddingContainerStyle",componentId:"sc-cr39lf-1"})(["padding:","px;",""],2*c.iI,(function(e){return e.noPadding&&"\n    padding: 0;\n  "})),i.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-cr39lf-2"})(["",""],(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))),u=i.default.td.withConfig({displayName:"indexstyle__CellStyle",componentId:"sc-cr39lf-3"})(["display:flex;align-items:center;justify-content:space-between;border:1px solid #1C1C1C;height:100%;",""],(function(e){return!e.noPadding&&"\n    padding: 0 ".concat(2*c.iI,"px;\n  ")}))},46568:function(e,t,n){"use strict";var i=n(82394),r=n(26304),l=(n(82684),n(33591)),s=n(28598),o=["children","fullHeight","gutter","style"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.children,n=e.fullHeight,i=e.gutter,c=e.style,u=void 0===c?{}:c,d=(0,r.Z)(e,o),h=a({},u);return i&&(h.paddingLeft=i,h.paddingRight=h.paddingLeft),n&&(h.height="100%"),(0,s.jsx)(l.Col,a(a({},d),{},{style:h,children:t}))}},82682:function(e,t,n){"use strict";var i=n(82394),r=n(26304),l=n(82684),s=n(33591),o=n(28598),c=["children","fullHeight","gutter","justifyContent","style"];function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.children,n=e.fullHeight,i=e.gutter,a=e.justifyContent,d=e.style,h=void 0===d?{}:d,p=(0,r.Z)(e,c),f=u({},h);return i&&(f.marginLeft=-1*i,f.marginRight=f.marginLeft),n&&(f.height="100%"),(0,o.jsx)(s.Row,u(u({},p),{},{justifyContent:a,style:f,children:l.Children.map(t,(function(e,t){return e&&l.cloneElement(e,{gutter:i,key:t})}))}))}},79072:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var i,r=n(77837),l=n(82394),s=n(75582),o=n(38860),c=n.n(o),a=n(82684),u=n(12691),d=n.n(u),h=n(21764),p=n(83455),f=n(71180),b=n(90299),m=n(70652),y=n(50724),j=n(15338),g=n(82555),v=n(55485),x=n(85854),Z=n(48670),_=n(93808),w=n(44085),O=n(28274),k=n(38276);!function(e){e.SSH="ssh",e.HTTPS="https"}(i||(i={}));var P=[{autoComplete:"remote_repo_link",label:"Remote repo url",required:!0,uuid:"remote_repo_link"},{autoComplete:"repo_path",label:"Local directory path",labelDescription:"Defaults to Python's os.getcwd() if omitted. Mage will create this local directory if it doesn't already exist.",uuid:"repo_path"}],C=[{autoComplete:"username",label:"Username",uuid:"username"},{autoComplete:"email",label:"Email",uuid:"email"},{autoComplete:"ssh_public_key",label:"SSH public key in base64",type:"password",uuid:"ssh_public_key"},{autoComplete:"ssh_private_key",label:"SSH private key in base64",type:"password",uuid:"ssh_private_key"}],S=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",label:"Email",required:!0,uuid:"email"},{autoComplete:"access_token",label:"Access token",labelDescription:"Add your Git access token to authenticate with your provided username. The access token will be stored as a Mage secret. You will see the secret below if you have already added it.",required:!0,type:"password",uuid:"access_token"}],T=[{autoComplete:"branch",label:"Branch name",required:!0,uuid:"branch"}],I=n(30160),E=n(17488),M=n(79264),D=n(22271),q=n(70515),G=n(24755),N=n(15610),H=n(72619),A=n(69419),R=n(28598);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={label:function(){return"One-way Git Sync"},uuid:"git_sync"},U={label:function(){return"Git Actions"},uuid:"git_integration"},V=[L,U];function B(){var e=D.ZP.syncs.list(),t=e.data,n=e.mutate,r=(0,a.useState)(null),o=r[0],c=r[1],u=(0,a.useState)(null),_=u[0],W=u[1],B=(0,a.useState)(null),F=B[0],Y=B[1];(0,a.useEffect)((function(){if(t){var e,n=null==t||null===(e=t.syncs)||void 0===e?void 0:e[0];W(null==n?void 0:n.user_git_settings),c(n)}}),[t]);var J=(0,a.useMemo)((function(){if(t){var e,n=null==t||null===(e=t.syncs)||void 0===e?void 0:e[0];return!(null==n||!n.branch)}return!1}),[t]),K=D.ZP.git_branches.detail("test",{_format:"with_basic_details"},{revalidateOnFocus:!1}),X=K.data,$=(K.mutate,(0,a.useMemo)((function(){return(null==X?void 0:X.git_branch)||{}}),[X]).is_git_integration_enabled),Q=(0,p.Db)(D.ZP.syncs.useCreate(),{onSuccess:function(e){return(0,H.wD)(e,{callback:function(e){var t=e.sync;t&&(c(t),window.location.reload(),h.Am.success("Sync saved",{position:h.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"}))},onErrorCallback:function(e,t){return Y({errors:t,response:e})}})}}),ee=(0,s.Z)(Q,2),te=ee[0],ne=ee[1].isLoading,ie=(0,p.Db)(D.ZP.syncs.useUpdate("git"),{onSuccess:function(e){return(0,H.wD)(e,{callback:function(e){e.sync&&h.Am.success("Success!",{position:h.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"})},onErrorCallback:function(e,t){return Y({errors:t,response:e})}})}}),re=(0,s.Z)(ie,2),le=re[0],se=re[1].isLoading,oe=(0,p.Db)((function(e){return D.ZP.secrets.useDelete(e)()}),{onSuccess:function(e){return(0,H.wD)(e,{callback:function(){n()},onErrorCallback:function(e){var t=e.error,n=(t.errors,t.message);setErrorMessages((function(e){return e.concat(n)}))}})}}),ce=(0,s.Z)(oe,1)[0],ae=(0,a.useMemo)((function(){return(null==o?void 0:o.auth_type)||i.SSH}),[null==o?void 0:o.auth_type]),ue=(0,a.useMemo)((function(){return ae===i.HTTPS?S:C}),[ae]),de=D.ZP.statuses.list().data,he=(0,a.useMemo)((function(){var e,t;return null==de||null===(e=de.statuses)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.require_user_authentication}),[de]),pe=(0,a.useMemo)((function(){return V}),[]),fe=(0,a.useState)(),be=fe[0],me=fe[1];(0,a.useEffect)((function(){be||me($?U:L)}),[$,be]);var ye=(0,a.useMemo)((function(){var e,t=c,n=o;(null==be?void 0:be.uuid)===U.uuid&&he&&(t=W,n=_);var i=Object.entries(n||{}).filter((function(e){var t=(0,s.Z)(e,2),n=t[0],i=t[1];return n.endsWith("_secret_name")&&!!i}));return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("form",{children:ue.map((function(e){var i,r,s=e.autoComplete,o=e.disabled,c=e.label,a=e.labelDescription,u=e.required,d=e.type,p=e.uuid;return r="ssh_public_key"===p?(0,R.jsx)(k.Z,{mb:1,children:(0,R.jsxs)(I.ZP,{small:!0,children:["Run ",(0,R.jsx)(Z.Z,{onClick:function(){navigator.clipboard.writeText("cat ~/.ssh/id_ed25519.pub | base64 | tr -d \\\\n && echo"),h.Am.success("Successfully copied to clipboard.",{position:h.Am.POSITION.BOTTOM_RIGHT,toastId:p})},small:!0,children:"cat ~/.ssh/id_ed25519.pub | base64 | tr -d \\\\n && echo"})," in terminal to get base64 encoded public key and paste the result here. The key will be stored as a Mage secret. You will see the secret below if you have already added it."]})}):"ssh_private_key"===p?(0,R.jsx)(k.Z,{mb:1,children:(0,R.jsxs)(I.ZP,{small:!0,children:["Follow same steps as the public key, but run ",(0,R.jsx)(Z.Z,{onClick:function(){navigator.clipboard.writeText("cat ~/.ssh/id_ed25519 | base64 | tr -d \\\\n && echo"),h.Am.success("Successfully copied to clipboard.",{position:h.Am.POSITION.BOTTOM_RIGHT,toastId:p})},small:!0,children:"cat ~/.ssh/id_ed25519 | base64 | tr -d \\\\n && echo"})," instead. The key will be stored as a Mage secret. You will see the secret below if you have already added it."]})}):a&&(0,R.jsx)(k.Z,{mb:1,children:(0,R.jsx)(I.ZP,{small:!0,children:a})}),(0,R.jsxs)(k.Z,{mt:2,children:[r,(0,R.jsx)(E.Z,{autoComplete:s,disabled:o,label:c,onChange:function(e){t((function(t){return z(z({},t),{},(0,l.Z)({},p,e.target.value))}))},primary:!0,required:u,setContentOnMount:!0,type:d,value:(null===(i=n)||void 0===i?void 0:i[p])||""})]},p)}))}),(0,R.jsx)(k.Z,{mb:1,mt:q.Mq,children:(0,R.jsx)(x.Z,{level:5,children:"Git secrets"})}),i&&i.length>0?i.map((function(e){var t=(0,s.Z)(e,2),n=(t[0],t[1]);return(0,R.jsx)(M.Z,{deleteVariable:function(){return ce(n)},hideEdit:!0,obfuscate:!0,variable:{uuid:n,value:"placeholder"}},n)})):(0,R.jsxs)(I.ZP,{children:["You have no Git secrets saved for ",null==be||null===(e=be.label)||void 0===e?void 0:e.call(be)]})]})}),[ue,ce,he,be,W,c,o,_]),je=(0,A.iV)();(0,a.useEffect)((function(){null!=je&&je.tab&&me(pe.find((function(e){return e.uuid===(null==je?void 0:je.tab)})))}),[je,pe]);var ge=(0,a.useMemo)((function(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(k.Z,{mt:q.Mq,children:[(0,R.jsxs)(I.ZP,{inline:!0,children:["To learn more about One-way git sync, click"," "]}),(0,R.jsx)(Z.Z,{bold:!0,href:"https://docs.mage.ai/production/data-sync/git-sync",openNewWindow:!0,children:"here"})]}),(0,R.jsx)(k.Z,{mt:q.Mq,children:(0,R.jsx)(I.ZP,{bold:!0,children:"Sync with a specified branch. These settings will be saved at the project level."})}),(0,R.jsx)("form",{children:T.map((function(e){var t=e.autoComplete,n=e.disabled,i=e.label,r=e.required,s=e.type,a=e.uuid;return(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsx)(E.Z,{autoComplete:t,disabled:n,label:i,onChange:function(e){c((function(t){return z(z({},t),{},(0,l.Z)({},a,e.target.value))}))},primary:!0,required:r,setContentOnMount:!0,type:s,value:(null==o?void 0:o[a])||""})},a)}))}),(0,R.jsx)(v.ZP,{alignItems:"center",children:(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsx)(m.Z,{checked:null==o?void 0:o.sync_submodules,label:"Include submodules",onClick:function(){c((function(e){return z(z({},e),{},{sync_submodules:!(null!=o&&o.sync_submodules)})}))}})})}),(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsx)(x.Z,{level:5,children:"Additional sync settings"})}),(0,R.jsx)(v.ZP,{alignItems:"center",children:(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsx)(m.Z,{checked:null==o?void 0:o.sync_on_pipeline_run,label:"Sync before each trigger run",onClick:function(){c((function(e){return z(z({},e),{},{sync_on_pipeline_run:!(null!=o&&o.sync_on_pipeline_run)})}))}})})}),(0,R.jsx)(v.ZP,{alignItems:"center",children:(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsx)(m.Z,{checked:null==o?void 0:o.sync_on_start,label:"Sync on server start up",onClick:function(){c((function(e){return z(z({},e),{},{sync_on_start:!(null!=o&&o.sync_on_start)})}))}})})}),(0,R.jsx)(k.Z,{mt:q.Mq,children:(0,R.jsx)(I.ZP,{bold:!0,children:"Configure the Git authentication credentials that will be used to sync with the specified Git repository."})}),ye]})}),[o,ye]),ve=(0,a.useMemo)((function(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(k.Z,{mt:q.Mq,children:[!$&&(0,R.jsx)(k.Z,{mb:1,children:(0,R.jsx)(I.ZP,{bold:!0,warning:!0,children:"When One-way git sync is enabled, you will be unable to access the Git Actions modal. If you want to bypass this safeguard, set the GIT_ENABLE_GIT_INTEGRATION environment variable."})}),(0,R.jsxs)(I.ZP,{bold:!0,children:["We recommend using the ",(0,R.jsx)(d(),{as:"/version-control",href:"/version-control",children:(0,R.jsx)(Z.Z,{bold:!0,inline:!0,children:"version control app"})})," unless you have a specific need to use the Git Actions modal."]})]}),(0,R.jsx)(k.Z,{mt:q.Mq,children:(0,R.jsx)(I.ZP,{children:"These fields are required to help Mage configure your Git settings. These settings will be specific to your user."})}),ye]})}),[$,ye]);return(0,R.jsx)(O.Z,{uuidItemSelected:G.fF,uuidWorkspaceSelected:G.WH,children:(0,R.jsxs)(k.Z,{p:q.cd,style:{width:"600px"},children:[(0,R.jsx)(x.Z,{children:"Git repository settings"}),(0,R.jsx)(k.Z,{mt:1,children:(0,R.jsx)(I.ZP,{bold:!0,children:"Authentication type"})}),(0,R.jsx)(k.Z,{mt:1,children:(0,R.jsx)(w.Z,{compact:!0,label:"Authentication type",onChange:function(e){var t=e.target.value;c((function(e){return z(z({},e),{},{auth_type:t})}))},value:ae,children:Object.entries(i).map((function(e){var t=(0,s.Z)(e,2),n=t[0],i=t[1];return(0,R.jsx)("option",{value:i,children:n},i)}))})}),(0,R.jsx)(k.Z,{mt:q.Mq,children:ae===i.SSH&&(0,R.jsxs)(I.ZP,{bold:!0,children:["You will need to ",(0,R.jsx)(Z.Z,{href:"https://docs.mage.ai/development/git/configure#generate-ssh-token",openNewWindow:!0,children:"set up your SSH key"})," if you have not done so already."]})}),(0,R.jsx)("form",{children:P.map((function(e){var t=e.autoComplete,n=e.disabled,i=e.label,r=e.labelDescription,s=e.required,a=e.type,u=e.uuid;return(0,R.jsxs)(k.Z,{mt:2,children:[r&&(0,R.jsx)(k.Z,{mb:1,children:(0,R.jsx)(I.ZP,{small:!0,children:r})}),(0,R.jsx)(E.Z,{autoComplete:t,disabled:n,label:i,onChange:function(e){c((function(t){return z(z({},t),{},(0,l.Z)({},u,e.target.value))}))},primary:!0,required:s,setContentOnMount:!0,type:a,value:(null==o?void 0:o[u])||""})]},u)}))}),(0,R.jsx)(k.Z,{mt:q.Mq,children:(0,R.jsx)(j.Z,{light:!0})}),(0,R.jsx)(b.Z,{onClickTab:function(e){var t=e.uuid;(0,N.u)({tab:t})},selectedTabUUID:null==be?void 0:be.uuid,tabs:pe,underlineStyle:!0}),(0,R.jsx)(j.Z,{light:!0}),(0,R.jsxs)(k.Z,{ml:2,children:[L.uuid===(null==be?void 0:be.uuid)&&ge,U.uuid===(null==be?void 0:be.uuid)&&ve]}),(0,R.jsx)(k.Z,{mt:q.HN,children:(0,R.jsx)(f.ZP,{loading:ne,onClick:function(){return te({sync:z(z({},o),{},{user_git_settings:_})})},primary:!0,children:"Save repository settings"})}),F&&(0,R.jsx)(y.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null==Y?void 0:Y(null)},children:(0,R.jsx)(g.Z,z(z({},F),{},{onClose:function(){return null==Y?void 0:Y(null)}}))}),J&&(0,R.jsxs)(k.Z,{mt:q.HN,children:[(0,R.jsx)(x.Z,{children:"Synchronize code from remote repository"}),(0,R.jsxs)(k.Z,{mt:1,children:[(0,R.jsxs)(I.ZP,{children:["Running the sync from this page will run a one time sync with the remote repository.",(0,R.jsx)("br",{}),"This may ",(0,R.jsx)(I.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," your existing data, so make sure you’ve committed or backed up your current changes."]}),(0,R.jsx)(k.Z,{mt:2}),(0,R.jsxs)(I.ZP,{children:["Reset will tell Mage to try to clone your repository from remote. This will also ",(0,R.jsx)(I.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," all your local changes and reset any settings you may have configured for your local Git repo. This may be helpful if you are having issues syncing your repository."]})]}),(0,R.jsx)(k.Z,{mt:2,children:(0,R.jsxs)(v.ZP,{children:[(0,R.jsx)(f.ZP,{loading:se,onClick:function(){return le({sync:{action_type:"sync_data"}})},warning:!0,children:"Synchronize code"}),(0,R.jsx)(k.Z,{ml:2}),(0,R.jsx)(f.ZP,{danger:!0,loading:se,onClick:function(){return le({sync:{action_type:"reset"}})},children:"Reset repository"})]})})]})]})})}B.getInitialProps=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var F=(0,_.Z)(B)},4566:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/templates/settings/workspace/sync-data",function(){return n(79072)}])}},function(e){e.O(0,[125,1799,140,1557,5699,8095,4982,9774,2888,179],(function(){return t=4566,e(e.s=t);var t}));var t=e.O();_N_E=t}]);