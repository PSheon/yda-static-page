(this["webpackJsonpys-main-web"]=this["webpackJsonpys-main-web"]||[]).push([[24],{975:function(e,a,t){"use strict";t.r(a);var n=t(9),o=t(26),r=t(0),l=t.n(r),c=t(142),i=t(866),s=t(898),m=t(875),d=t(863),u=t(854),f=t(855),p=t(803),b=t(864),g=t(879),E=t(918),h=t.n(E),v=t(919),w=t.n(v),y=t(104),k=t.n(y),x=t(76),N=t(409),O=t(35),j=t(143),C=t(2),P=t(30),I=t(6),D=t(13),T=t(11),q=t(46),A=t(292);function F(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var S=Object(N.a)((function(e){return{root:{backgroundImage:"url(/assets/images/backgrounds/ys-bg.jpg)",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover",color:e.palette.primary.contrastText},googleButton:{backgroundColor:"#d9534f","&:hover":{backgroundColor:"#d9534f"}},facebookButton:{backgroundColor:"#428bca","&:hover":{backgroundColor:"#428bca"}}}}));a.default=function(){var e=Object(I.b)(),a=S(),t=Object(I.c)((function(e){return e.auth.register})),E=Object(r.useState)(!1),v=Object(o.a)(E,2),y=v[0],N=v[1],L=Object(r.useState)(!1),R=Object(o.a)(L,2),W=R[0],_=R[1],B=Object(r.useRef)(null);Object(r.useEffect)((function(){t.error&&(t.error.displayName||t.error.password||t.error.email)&&(B.current.updateInputsWithError(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?F(t,!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},t.error)),G(),_(!1))}),[t.error]);var J=Object(j.c)({displayName:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1}),U=J.form,z=J.handleChange;function G(){N(!1)}return l.a.createElement("div",{className:Object(C.a)(a.root,"flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0")},l.a.createElement("div",{className:"flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"},l.a.createElement(x.a,{animation:"transition.expandIn"},l.a.createElement(P.a,{to:"/home"},l.a.createElement("img",{className:"w-400 mb-32",src:"assets/images/logos/logo.png",alt:"logo"}))),l.a.createElement(x.a,{animation:"transition.slideUpIn",delay:300},l.a.createElement(c.a,{variant:"h3",color:"inherit",className:"font-light font-bold"},"\u6b61\u8fce\u52a0\u5165"))),l.a.createElement(x.a,{animation:{translateX:[0,"100%"]}},l.a.createElement(i.a,{className:"w-full max-w-400 mx-auto m-16 md:m-0 rounded-12"},l.a.createElement(s.a,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "},l.a.createElement(c.a,{variant:"h6",className:"md:w-full mb-32 text-center"},"\u5efa\u7acb\u5e33\u865f"),l.a.createElement(h.a,{clientId:T.c,render:function(e){return l.a.createElement(m.a,{disabled:!0,variant:"contained",size:"large",onClick:e.onClick,className:Object(C.a)(a.googleButton,"normal-case w-256 mb-8 rounded-full text-white hover:shadow-xl")},l.a.createElement("img",{className:"w-36 px-0 mr-20 bg-white rounded-full",src:Object(q.i)("google"),alt:"google logo"}),"\u4f7f\u7528 Google \u5efa\u7acb")},onSuccess:function(a){!function(a){var t=a.googleId,n=a.accessToken,o=a.profileObj;_(!0),N(!1);var r={googleID:t,googleAccessToken:n,googleDisplayName:o.name,googleEmail:o.email,googlePhotoURL:o.imageUrl};e(O.q(r))}(a)},onFailure:function(a){e(D.J({message:"\u767b\u5165 Google \u5931\u6557"}))},cookiePolicy:"single_host_origin"}),l.a.createElement(w.a,{appId:T.b,fields:"name,email,picture",render:function(e){return l.a.createElement(m.a,{disabled:!0,variant:"contained",size:"large",onClick:e.onClick,className:Object(C.a)(a.facebookButton,"normal-case w-256 rounded-full text-white hover:shadow-xl")},l.a.createElement("img",{className:"w-36 px-0 mr-20 bg-white rounded-full",src:Object(q.i)("facebook"),alt:"facebook logo"}),"\u4f7f\u7528 Facebook \u5efa\u7acb")},callback:function(a){!function(a){var t=a.userID,n=a.accessToken,o=a.name,r=a.email,l=a.picture;_(!0),N(!1);var c={facebookID:t,facebookAccessToken:n,facebookDisplayName:o,facebookEmail:r,facebookPhotoURL:l.data?l.data.url:"assets/images/avatars/penguin.png"};e(O.p(c))}(a)},onFailure:function(a){e(D.J({message:"\u767b\u5165 Facebook \u5931\u6557"}))}}),l.a.createElement("div",{className:"my-24 flex items-center justify-center"},l.a.createElement(d.a,{className:"w-64"}),l.a.createElement("span",{className:"mx-8 font-bold"},"\u6216\u8005"),l.a.createElement(d.a,{className:"w-64"})),l.a.createElement(k.a,{onValidSubmit:function(a){_(!0),N(!1),e(O.r(a))},onValid:function(){N(!0),_(!1)},onInvalid:G,ref:B,className:"flex flex-col justify-center w-full"},l.a.createElement(x.y,{className:"mb-16",label:"\u540d\u7a31",autoFocus:!0,type:"name",name:"displayName",validations:{minLength:4},validationErrors:{minLength:"\u8acb\u8f38\u5165\u81f3\u5c11 4 \u4f4d\u6578"},InputProps:{endAdornment:l.a.createElement(u.a,{position:"end"},l.a.createElement(f.a,{className:"text-20",color:"action"},"account_circle"))},variant:"outlined",required:!0,fullWidth:!0}),l.a.createElement(x.y,{className:"mb-16",label:"\u4fe1\u7bb1",type:"email",name:"email",validations:"isEmail",validationErrors:{isEmail:"\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u4fe1\u7bb1\u4f4d\u5740"},InputProps:{endAdornment:l.a.createElement(u.a,{position:"end"},l.a.createElement(f.a,{className:"text-20",color:"action"},"email"))},variant:"outlined",required:!0,fullWidth:!0}),l.a.createElement(x.y,{className:"mb-16",label:"\u5bc6\u78bc",type:"password",name:"password",validations:{minLength:5},validationErrors:{minLength:"\u8acb\u8f38\u5165\u81f3\u5c11 5 \u4f4d\u6578"},InputProps:{endAdornment:l.a.createElement(u.a,{position:"end"},l.a.createElement(f.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",required:!0,fullWidth:!0}),l.a.createElement(x.y,{className:"mb-16",label:"\u78ba\u8a8d\u5bc6\u78bc",type:"password",name:"passwordConfirm",validations:"equalsField:password",validationErrors:{equalsField:"\u8f38\u5165\u7684\u5bc6\u78bc\u4e0d\u76f8\u7b26"},InputProps:{endAdornment:l.a.createElement(u.a,{position:"end"},l.a.createElement(f.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",required:!0,fullWidth:!0}),l.a.createElement(p.a,{className:"items-center"},l.a.createElement(b.a,{control:l.a.createElement(g.a,{name:"acceptTermsConditions",checked:U.acceptTermsConditions,onChange:z}),label:"\u6211\u5df2\u95b1\u8b80\u4e26\u540c\u610f\u76f8\u95dc\u670d\u52d9\u689d\u6b3e"})),l.a.createElement(m.a,{variant:"contained",color:"primary",className:"w-full mx-auto mt-16 rounded-full","aria-label":"Register",disabled:!y||!U.acceptTermsConditions,value:"legacy",type:"submit"},W?"\u5efa\u7acb\u5e33\u865f\u4e2d":"\u5efa\u7acb\u5e33\u865f",W&&l.a.createElement(A.a,{width:32,height:32}))),l.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},l.a.createElement("span",{className:"font-medium"},"\u5df2\u6709\u5e33\u865f\uff1f"),l.a.createElement(P.a,{className:"font-medium",to:"/login"},"\u767b\u5165"))))))}}}]);