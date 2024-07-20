"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3958],{37361:function(e,n,r){r.d(n,{X:function(){return k}});var i=r(21831),l=r(75582),t=r(82394),s=r(21764),o=r(82684),a=r(83455),c=r(34376),u=r(71180),d=r(70652),f=r(15338),E=r(97618),p=r(55485),j=r(85854),I=r(65956),Z=r(28274),m=r(38276),h=r(75499),x=r(30160),g=r(17488),A=r(22271),_=r(8193),L=r(72473),S=r(70515),D=r(24755),v=r(3917),R=r(76417),P=r(36717),T=r(50178),b=r(86735),O=r(42122),C=r(72619),w=r(95924),B=r(28598);function y(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function N(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?y(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var k,W=2*S.iI;!function(e){e.PERMISSIONS="Permissions",e.ROLES="Roles"}(k||(k={})),n.Z=function(e){var n,r,t,y=e.contained,M=e.disableFields,U=e.onCancel,H=e.slug,Y=(0,T.PR)()||{},z=Y.id,Q=Y.owner,V=(0,c.useRouter)(),q=(0,o.useState)(!0),F=q[0],G=q[1],K=(0,o.useState)(null),$=K[0],X=K[1],J=(0,o.useState)({}),ee=J[0],ne=J[1],re=(0,o.useState)(null),ie=re[0],le=re[1],te=(0,o.useCallback)((function(e,n,r){le(N(N({},e),{},{rolesMapping:(0,b.HK)(n||[],(function(e){return e.id})),permissionsMapping:(0,b.HK)(r||[],(function(e){return e.id}))}))}),[le]),se=(0,o.useCallback)((function(e){ne((function(n){return N(N({},n),e)})),le((function(n){return N(N({},n),e)}))}),[ne,le]),oe=A.ZP.users.detail(H,{},{revalidateOnFocus:!1}).data,ae=(0,o.useMemo)((function(){return null==oe?void 0:oe.user}),[oe]);(0,o.useEffect)((function(){ae&&te(ae,null==ae?void 0:ae.roles_new,null==ae?void 0:ae.permissions)}),[te,ae]);var ce=(0,a.Db)(ae?A.ZP.users.useUpdate(H):A.ZP.users.useCreate(),{onSuccess:function(e){return(0,C.wD)(e,{callback:function(e){var n=e.user;ne({}),te(n,null==n?void 0:n.roles_new,null==n?void 0:n.permissions),ae||V.push("/settings/workspace/users/".concat(null==n?void 0:n.id)),String(null==n?void 0:n.id)===String(z)&&(0,T.av)(N(N({},(0,T.PR)()),{},{avatar:null==n?void 0:n.avatar,first_name:null==n?void 0:n.first_name,last_name:null==n?void 0:n.last_name,username:null==n?void 0:n.username})),s.Am.success(ae?"User profile successfully updated.":"New user created successfully.",{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(n.id)})},onErrorCallback:function(e){var n=e.error,r=n.errors,i=n.exception,l=n.message,t=n.type;s.Am.error((null==r?void 0:r.error)||i||l,{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:t})}})}}),ue=(0,l.Z)(ce,2),de=ue[0],fe=ue[1].isLoading,Ee=(0,a.Db)(A.ZP.users.useDelete(null==ae?void 0:ae.id),{onSuccess:function(e){return(0,C.wD)(e,{callback:function(){V.push("/settings/workspace/users"),s.Am.success("User successfully delete.",{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:"user-delete-success-".concat(null==ae?void 0:ae.id)})},onErrorCallback:function(e){var n=e.error,r=n.errors,i=n.exception,l=n.message,t=n.type;s.Am.error((null==r?void 0:r.error)||i||l,{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:t})}})}}),pe=(0,l.Z)(Ee,2),je=pe[0],Ie=pe[1].isLoading,Ze=A.ZP.roles.list().data,me=(0,o.useMemo)((function(){return(0,b.YC)((null==Ze?void 0:Ze.roles)||[],"name")}),[Ze]),he=(0,o.useMemo)((function(){return(null==ie?void 0:ie.rolesMapping)||{}}),[ie]),xe=(0,o.useMemo)((function(){return(0,b.YC)(Object.values(he),"name")}),[he]),ge=A.ZP.permissions.list({_limit:1e3}).data,Ae=((0,o.useMemo)((function(){return(0,b.YC)((null==ge?void 0:ge.permissions)||[],"entity_name")}),[ge]),(0,o.useMemo)((function(){return(null==ie?void 0:ie.permissionsMapping)||{}}),[ie])),_e=(0,o.useMemo)((function(){return(0,b.YC)(Object.values(Ae),"entity_name")}),[Ae]),Le=(0,o.useMemo)((function(){return(null==xe?void 0:xe.length)>=1}),[xe]),Se=(0,o.useMemo)((function(){return(0,B.jsx)(u.ZP,{beforeIcon:(0,B.jsx)(L.Add,{}),compact:!0,onClick:function(){X(k.ROLES),G(!1)},primary:!Le,secondary:Le,small:!0,children:"Add roles"})}),[Le,X,G]),De=(0,o.useMemo)((function(){return(null==_e?void 0:_e.length)>=1}),[_e]),ve=((0,o.useMemo)((function(){return(0,B.jsx)(u.ZP,{beforeIcon:(0,B.jsx)(L.Add,{}),compact:!0,onClick:function(){X(k.PERMISSIONS),G(!1)},primary:!De,secondary:De,small:!0,children:"Add permission"})}),[De,X,G]),(0,o.useCallback)((function(e,n,r){return(0,B.jsx)(h.Z,{columnFlex:[].concat((0,i.Z)(r?[]:[null]),[1]),columns:[].concat((0,i.Z)(r?[]:[{label:function(){var n=null==e?void 0:e.every((function(e){var n=e.id;return null==he?void 0:he[n]}));return(0,B.jsx)(d.Z,{checked:n,onClick:function(r){(0,w.j)(r),se(n?{rolesMapping:{}}:{rolesMapping:(0,b.HK)(e,(function(e){return e.id}))})}},"checkbox")},uuid:"actions"}]),[{uuid:"Role"}]),onClickRow:n&&!r?function(n){var r=e[n];r&&window.open("/settings/workspace/roles/".concat(null==r?void 0:r.id),"_blank").focus()}:null,rows:null==e?void 0:e.map((function(e){var n=e.name,l=e.id,t=!(null==he||!he[l]);return[].concat((0,i.Z)(r?[]:[(0,B.jsx)(d.Z,{checked:t,onClick:function(n){(0,w.j)(n);var r=N({},he);t?null==r||delete r[l]:r[l]=e,se({rolesMapping:r})}},"checkbox")]),[(0,B.jsx)(x.ZP,{monospace:!0,children:n},"name")])})),uuid:"roles"})}),[he,se])),Re=(0,o.useCallback)((function(e,n,r){return(0,B.jsx)(h.Z,{columnFlex:[null,2,1,1,6],columns:[{uuid:"ID"},{uuid:"Entity"},{uuid:"Subtype"},{uuid:"Entity ID"},{rightAligned:!0,uuid:"Access"}],onClickRow:n&&!r?function(n){var r=e[n];r&&window.open("/settings/workspace/permissions/".concat(null==r?void 0:r.id),"_blank").focus()}:null,rows:null==e?void 0:e.map((function(e){var n=e.access,r=e.entity,i=e.entity_id,l=e.entity_name,t=e.entity_type,s=e.id,o=n?(0,P.q)(n):[],a=(null==o?void 0:o.length)||0;return[(0,B.jsx)(x.ZP,{default:!0,monospace:!0,children:s},"id"),(0,B.jsx)(x.ZP,{monospace:!0,children:l||r},"entityName"),(0,B.jsx)(x.ZP,{default:!0,monospace:!!t,children:t||"-"},"entityType"),(0,B.jsx)(x.ZP,{default:!0,monospace:!!i,children:i||"-"},"entityID"),(0,B.jsx)("div",{children:a>=1&&(0,B.jsx)(p.ZP,{alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end",children:null==o?void 0:o.map((function(e,n){return(0,B.jsx)("div",{children:(0,B.jsxs)(x.ZP,{default:!0,monospace:!0,small:!0,children:[e,a>=2&&n<a-1&&(0,B.jsx)(x.ZP,{inline:!0,muted:!0,small:!0,children:", "})]})},e)}))})},"access")]})),uuid:"permissions"})}),[]),Pe=(0,o.useMemo)((function(){return ve(me)}),[ve,me]),Te=(0,o.useMemo)((function(){var e;return ve(xe,!0,null===(e=M||[])||void 0===e?void 0:e.includes(k.ROLES))}),[ve,M,xe]),be=(0,o.useMemo)((function(){var e;return Re(_e,!0,null===(e=M||[])||void 0===e?void 0:e.includes(k.PERMISSIONS))}),[Re,M,_e]),Oe=(0,B.jsxs)(_.N,{children:[(0,B.jsxs)(I.Z,{noPadding:!0,children:[(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsx)(j.Z,{level:4,children:"Profile"})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsxs)(p.ZP,{alignItems:"center",children:[(0,B.jsx)(x.ZP,{default:!0,large:!0,children:"Avatar"}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(g.Z,{afterIcon:(0,B.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null==n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return se({avatar:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"Add initials or an emoji",value:(null==ie?void 0:ie.avatar)||""})})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsxs)(p.ZP,{alignItems:"center",children:[(0,B.jsxs)(x.ZP,{danger:"username"in ee&&!(null!=ie&&ie.username),default:!0,large:!0,children:["Username ","username"in ee&&!(null!=ie&&ie.username)&&(0,B.jsx)(x.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(g.Z,{afterIcon:(0,B.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null==n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return se({username:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Mage Supreme",value:(null==ie?void 0:ie.username)||""})})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsxs)(p.ZP,{alignItems:"center",children:[(0,B.jsx)(x.ZP,{default:!0,large:!0,children:"First name"}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(g.Z,{afterIcon:(0,B.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null==n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return se({first_name:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Urza",value:(null==ie?void 0:ie.first_name)||""})})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsxs)(p.ZP,{alignItems:"center",children:[(0,B.jsx)(x.ZP,{default:!0,large:!0,children:"Last name"}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(g.Z,{afterIcon:(0,B.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null==n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return se({last_name:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Andromeda",value:(null==ie?void 0:ie.last_name)||""})})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsxs)(p.ZP,{alignItems:"center",children:[ae&&(0,B.jsx)(x.ZP,{default:!0,large:!0,children:"Email"}),!ae&&(0,B.jsxs)(x.ZP,{danger:"email"in ee&&!(null!=ie&&ie.email),default:!0,large:!0,children:["Email ","email"in ee&&!(null!=ie&&ie.email)&&(0,B.jsx)(x.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(m.Z,{mr:S.cd}),ae&&(0,B.jsxs)(E.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(x.ZP,{large:!0,muted:!0,children:null==ie?void 0:ie.email}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(L.Alphabet,{muted:!0,size:W}),(0,B.jsx)(m.Z,{mr:1})]}),!ae&&(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(g.Z,{afterIcon:(0,B.jsx)(L.Alphabet,{}),afterIconClick:function(e,n){var r;null==n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return se({email:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. mage@power.com",type:"email",value:(null==ie?void 0:ie.email)||""})})]})})]}),(0,B.jsx)(m.Z,{mb:S.HN}),(0,B.jsxs)(I.Z,{noPadding:!0,children:[(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsx)(j.Z,{level:4,children:"Authentication"})}),(0,B.jsx)(f.Z,{light:!0}),ae&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsxs)(p.ZP,{alignItems:"center",children:[(0,B.jsxs)(x.ZP,{danger:"password_current"in ee&&!(null!=ie&&ie.password_current),default:!0,large:!0,children:["Current password ","password_current"in ee&&!(null!=ie&&ie.password_current)&&(0,B.jsx)(x.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(g.Z,{afterIcon:(0,B.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null==n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return se({password_current:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null==ie?void 0:ie.password_current)||""})})]})}),(0,B.jsx)(f.Z,{light:!0})]}),(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsxs)(p.ZP,{alignItems:"center",children:[(0,B.jsxs)(x.ZP,{danger:"password"in ee&&!(null!=ie&&ie.password),default:!0,large:!0,children:[ae?"New password":"Password"," ","password"in ee&&!(null!=ie&&ie.password)&&(0,B.jsx)(x.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(g.Z,{afterIcon:(0,B.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null==n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return se({password:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null==ie?void 0:ie.password)||""})})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsxs)(p.ZP,{alignItems:"center",children:[(0,B.jsxs)(x.ZP,{danger:"password_confirmation"in ee&&!(null!=ie&&ie.password_confirmation),default:!0,large:!0,children:["Confirm ",ae?"new password":"password"," ","password_confirmation"in ee&&!(null!=ie&&ie.password_confirmation)&&(0,B.jsx)(x.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(E.Z,{flex:1,children:(0,B.jsx)(g.Z,{afterIcon:(0,B.jsx)(L.Edit,{}),afterIconClick:function(e,n){var r;null==n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:W,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return se({password_confirmation:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null==ie?void 0:ie.password_confirmation)||""})})]})})]}),(0,B.jsx)(m.Z,{mb:S.HN}),ae&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(I.Z,{noPadding:!0,children:[(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsxs)(p.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,B.jsx)(j.Z,{level:4,children:"Roles"}),(0,B.jsx)(m.Z,{mr:S.cd}),Le&&!(null!==(n=M||[])&&void 0!==n&&n.includes(k.ROLES))&&(0,B.jsx)(p.ZP,{alignItems:"center",children:Se})]})}),(0,B.jsx)(f.Z,{light:!0}),!Le&&!(null!==(r=M||[])&&void 0!==r&&r.includes(k.ROLES))&&(0,B.jsxs)(m.Z,{p:S.cd,children:[(0,B.jsx)(m.Z,{mb:S.cd,children:(0,B.jsx)(x.ZP,{default:!0,children:"This user currently has no roles attached."})}),(0,B.jsx)(p.ZP,{alignItems:"center",children:Se})]}),Le&&(0,B.jsx)(m.Z,{pb:S.Mq,children:Te})]}),(0,B.jsx)(m.Z,{mb:S.HN}),(0,B.jsxs)(I.Z,{noPadding:!0,children:[(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsx)(p.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,B.jsx)(j.Z,{level:4,children:"Permissions"})})}),(0,B.jsx)(f.Z,{light:!0}),!De&&(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsx)(x.ZP,{default:!0,children:"This user currently has no permissions."})}),De&&(0,B.jsx)(m.Z,{pb:S.Mq,children:be})]}),(0,B.jsx)(m.Z,{mb:S.HN}),(0,B.jsxs)(I.Z,{noPadding:!0,children:[(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsx)(j.Z,{level:4,children:"Metadata"})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsxs)(p.ZP,{alignItems:"center",children:[(0,B.jsx)(x.ZP,{default:!0,large:!0,children:"Last updated"}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsxs)(E.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(x.ZP,{large:!0,monospace:!0,muted:!0,children:(null==ie?void 0:ie.updated_at)&&(0,v.d$)(null==ie?void 0:ie.updated_at,{includeSeconds:!0})}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(L.Schedule,{muted:!0,size:W}),(0,B.jsx)(m.Z,{mr:1})]})]})}),(0,B.jsx)(f.Z,{light:!0}),(0,B.jsx)(m.Z,{p:S.cd,children:(0,B.jsxs)(p.ZP,{alignItems:"center",children:[(0,B.jsx)(x.ZP,{default:!0,large:!0,children:"Created at"}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsxs)(E.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(x.ZP,{large:!0,monospace:!0,muted:!0,children:(null==ie?void 0:ie.created_at)&&(0,v.d$)(null==ie?void 0:ie.created_at,{includeSeconds:!0})}),(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(L.Schedule,{muted:!0,size:W}),(0,B.jsx)(m.Z,{mr:1})]})]})})]}),(0,B.jsx)(m.Z,{mb:S.HN})]}),(0,B.jsxs)(p.ZP,{children:[(0,B.jsx)(u.ZP,{beforeIcon:(0,B.jsx)(L.Save,{}),disabled:!ee||!(null!==(t=Object.keys(ee))&&void 0!==t&&t.length),loading:fe,onClick:function(){return de({user:N(N({},(0,O.GL)(ie,["avatar","first_name","last_name","password","password_confirmation","password_current","username"].concat(ae?[]:"email"),{include_blanks:!0})),null!=M&&M.includes(k.ROLES)?{}:{role_ids:Object.keys((null==ie?void 0:ie.rolesMapping)||{}).map((function(e){return Number(e)}))})})},primary:!0,children:ae?"Save changes":"Create new user"}),U&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(u.ZP,{onClick:function(){return null==U?void 0:U()},secondary:!0,children:"Cancel and go back"})]}),ae&&String(z)!==String(H)&&Q&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(m.Z,{mr:S.cd}),(0,B.jsx)(u.ZP,{beforeIcon:(0,B.jsx)(L.Trash,{}),danger:!0,loading:Ie,onClick:function(){return je()},children:"Delete user"})]})]})]});return y?Oe:(0,B.jsx)(Z.Z,{after:Pe,afterHeader:(0,B.jsx)(m.Z,{px:S.cd,children:(0,B.jsx)(x.ZP,{bold:!0,children:$})}),afterHidden:F,afterWidth:60*S.iI,appendBreadcrumbs:!0,breadcrumbs:[{label:function(){return"Users"},linkProps:{href:"/settings/workspace/users"}},{bold:!0,label:function(){return(0,R.s)(ie)}}],setAfterHidden:G,title:ae?(0,R.s)(ae):"New user",uuidItemSelected:D.B2.USERS,uuidWorkspaceSelected:D.Pl.USER_MANAGEMENT,children:ae&&Oe})}},36288:function(e,n,r){r.d(n,{Fy:function(){return p},G9:function(){return u},H1:function(){return j},K4:function(){return a},ND:function(){return c},Pt:function(){return d},WG:function(){return t},hl:function(){return E},m_:function(){return s},oO:function(){return f}});var i,l,t,s,o=r(82394);!function(e){e[e.OWNER=1]="OWNER",e[e.ADMIN=2]="ADMIN",e[e.EDITOR=4]="EDITOR",e[e.VIEWER=8]="VIEWER",e[e.LIST=16]="LIST",e[e.DETAIL=32]="DETAIL",e[e.CREATE=64]="CREATE",e[e.UPDATE=128]="UPDATE",e[e.DELETE=512]="DELETE",e[e.OPERATION_ALL=1024]="OPERATION_ALL",e[e.QUERY=2048]="QUERY",e[e.QUERY_ALL=4096]="QUERY_ALL",e[e.READ=8192]="READ",e[e.READ_ALL=16384]="READ_ALL",e[e.WRITE=32768]="WRITE",e[e.WRITE_ALL=65536]="WRITE_ALL",e[e.ALL=131072]="ALL",e[e.DISABLE_LIST=262144]="DISABLE_LIST",e[e.DISABLE_DETAIL=524288]="DISABLE_DETAIL",e[e.DISABLE_CREATE=1048576]="DISABLE_CREATE",e[e.DISABLE_UPDATE=2097152]="DISABLE_UPDATE",e[e.DISABLE_DELETE=4194304]="DISABLE_DELETE",e[e.DISABLE_OPERATION_ALL=8388608]="DISABLE_OPERATION_ALL",e[e.DISABLE_QUERY=16777216]="DISABLE_QUERY",e[e.DISABLE_QUERY_ALL=33554432]="DISABLE_QUERY_ALL",e[e.DISABLE_READ=67108864]="DISABLE_READ",e[e.DISABLE_READ_ALL=134217728]="DISABLE_READ_ALL",e[e.DISABLE_WRITE=268435456]="DISABLE_WRITE",e[e.DISABLE_WRITE_ALL=536870912]="DISABLE_WRITE_ALL",e[e.DISABLE_UNLESS_CONDITIONS=1073741824]="DISABLE_UNLESS_CONDITIONS"}(t||(t={})),function(e){e.HAS_NOTEBOOK_EDIT_ACCESS="HAS_NOTEBOOK_EDIT_ACCESS",e.HAS_PIPELINE_EDIT_ACCESS="HAS_PIPELINE_EDIT_ACCESS",e.USER_OWNS_ENTITY="USER_OWNS_ENTITY"}(s||(s={}));var a=(i={},(0,o.Z)(i,t.OWNER,"Owner"),(0,o.Z)(i,t.ADMIN,"Admin"),(0,o.Z)(i,t.EDITOR,"Editor"),(0,o.Z)(i,t.VIEWER,"Viewer"),(0,o.Z)(i,t.LIST,"List"),(0,o.Z)(i,t.DETAIL,"Detail"),(0,o.Z)(i,t.CREATE,"Create"),(0,o.Z)(i,t.UPDATE,"Update"),(0,o.Z)(i,t.DELETE,"Delete"),(0,o.Z)(i,t.OPERATION_ALL,"All operations"),(0,o.Z)(i,t.QUERY,"Query"),(0,o.Z)(i,t.QUERY_ALL,"Query all attributes"),(0,o.Z)(i,t.READ,"Read"),(0,o.Z)(i,t.READ_ALL,"Read all attributes"),(0,o.Z)(i,t.WRITE,"Write"),(0,o.Z)(i,t.WRITE_ALL,"Write all attributes"),(0,o.Z)(i,t.ALL,"All"),(0,o.Z)(i,t.DISABLE_LIST,"Disable list"),(0,o.Z)(i,t.DISABLE_DETAIL,"Disable detail"),(0,o.Z)(i,t.DISABLE_CREATE,"Disable create"),(0,o.Z)(i,t.DISABLE_UPDATE,"Disable update"),(0,o.Z)(i,t.DISABLE_DELETE,"Disable delete"),(0,o.Z)(i,t.DISABLE_OPERATION_ALL,"Disable all operations"),(0,o.Z)(i,t.DISABLE_QUERY,"Disable query"),(0,o.Z)(i,t.DISABLE_QUERY_ALL,"Disable all query parameters"),(0,o.Z)(i,t.DISABLE_READ,"Disable read"),(0,o.Z)(i,t.DISABLE_READ_ALL,"Disable all read attributes"),(0,o.Z)(i,t.DISABLE_WRITE,"Disable write"),(0,o.Z)(i,t.DISABLE_WRITE_ALL,"Disable all write attributes"),i),c=(l={},(0,o.Z)(l,s.HAS_NOTEBOOK_EDIT_ACCESS,"Disable unless user has notebook edit access"),(0,o.Z)(l,s.HAS_PIPELINE_EDIT_ACCESS,"Disable unless user has pipeline edit access"),(0,o.Z)(l,s.USER_OWNS_ENTITY,"Disable unless user owns the current entity"),l),u=[t.OWNER,t.ADMIN,t.EDITOR,t.VIEWER,t.ALL],d=[t.LIST,t.DETAIL,t.CREATE,t.UPDATE,t.DELETE,t.OPERATION_ALL],f=[t.DISABLE_LIST,t.DISABLE_DETAIL,t.DISABLE_CREATE,t.DISABLE_UPDATE,t.DISABLE_DELETE,t.DISABLE_OPERATION_ALL],E=[t.QUERY,t.QUERY_ALL,t.DISABLE_QUERY,t.DISABLE_QUERY_ALL],p=[t.READ,t.READ_ALL,t.DISABLE_READ,t.DISABLE_READ_ALL],j=[t.WRITE,t.WRITE_ALL,t.DISABLE_WRITE,t.DISABLE_WRITE_ALL]},36717:function(e,n,r){r.d(n,{q:function(){return t}});var i=r(75582),l=r(36288);function t(e){return Object.entries(l.K4).reduce((function(n,r){var l=(0,i.Z)(r,2),t=l[0],s=l[1];return e&Number(t)?n.concat(s):n}),[])}},76417:function(e,n,r){function i(e){return null!=e&&e.first_name?[null==e?void 0:e.first_name,null==e?void 0:e.last_name].filter((function(e){return e})).join(" "):null==e?void 0:e.username}r.d(n,{s:function(){return i}})},80022:function(e,n,r){function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(n,{Z:function(){return i}})},15544:function(e,n,r){function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}r.d(n,{Z:function(){return i}})},13692:function(e,n,r){r.d(n,{Z:function(){return l}});var i=r(61049);function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,i.Z)(e,n)}},93189:function(e,n,r){r.d(n,{Z:function(){return t}});var i=r(12539),l=r(80022);function t(e,n){if(n&&("object"===i(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,l.Z)(e)}}}]);