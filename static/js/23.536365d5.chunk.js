(this["webpackJsonpys-main-web"]=this["webpackJsonpys-main-web"]||[]).push([[23],{991:function(e,a,t){"use strict";t.r(a);var n=t(9),o=t(26),r=t(0),l=t.n(r),c=t(866),s=t(898),m=t(142),i=t(875),u=t(863),d=t(854),f=t(855),b=t(803),g=t(864),p=t(879),E=t(409),h=t(6),w=t(918),x=t.n(w),k=t(919),v=t.n(k),j=t(76),O=t(104),y=t.n(O),N=t(35),P=t(143),I=t(30),C=t(2),D=t(13),S=t(11),A=t(46),F=t(292);function T(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var B=Object(E.a)((function(e){return{root:{backgroundImage:"url(/assets/images/backgrounds/yda-bg.jpg)",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover",color:e.palette.primary.contrastText},googleButton:{backgroundColor:"#d9534f","&:hover":{backgroundColor:"#d9534f"}},facebookButton:{backgroundColor:"#428bca","&:hover":{backgroundColor:"#428bca"}}}}));a.default=function(){var e=Object(h.b)(),a=B(),t=Object(h.c)((function(e){return e.auth.login})),E=Object(r.useState)(!1),w=Object(o.a)(E,2),k=w[0],O=w[1],J=Object(r.useState)(!1),L=Object(o.a)(J,2),R=L[0],q=L[1],z=Object(r.useRef)(null);Object(r.useEffect)((function(){t.error&&(t.error.email||t.error.password)&&(z.current.updateInputsWithError(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?T(t,!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},t.error)),V(),q(!1))}),[t.error,t.success]);var U=Object(P.c)({email:"",password:"",remember:!0}),W=U.form,G=U.handleChange;function V(){O(!1)}return l.a.createElement("div",{className:Object(C.a)(a.root,"flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0")},l.a.createElement("div",{className:"flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"},l.a.createElement(j.a,{animation:"transition.expandIn"},l.a.createElement(I.a,{to:"/"},l.a.createElement("img",{className:"w-400 mb-32",src:"assets/images/logos/logo.png",alt:"logo"})))),l.a.createElement(j.a,{animation:{translateX:[0,"100%"]}},l.a.createElement(c.a,{className:"w-full max-w-400 mx-auto m-16 md:m-0 rounded-12"},l.a.createElement(s.a,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-96"},l.a.createElement(m.a,{variant:"h6",className:"md:w-full mb-32 text-center"},"\u767b\u5165\u60a8\u7684\u5e33\u865f"),l.a.createElement(x.a,{clientId:S.c,render:function(e){return l.a.createElement(i.a,{disabled:!0,variant:"contained",size:"large",onClick:e.onClick,className:Object(C.a)(a.googleButton,"normal-case w-256 mb-8 rounded-full text-white hover:shadow-xl")},l.a.createElement("img",{className:"w-36 px-0 mr-20 bg-white rounded-full",src:Object(A.i)("google"),alt:"google logo"}),"\u4f7f\u7528 Google \u767b\u5165")},onSuccess:function(a){!function(a){var t=a.googleId,n=a.accessToken,o=a.profileObj;q(!0),O(!1);var r={googleID:t,googleAccessToken:n,googleDisplayName:o.name,googleEmail:o.email,googlePhotoURL:o.imageUrl};e(N.q(r))}(a)},onFailure:function(a){e(D.J({message:"\u767b\u5165 Google \u5931\u6557"}))}}),l.a.createElement(v.a,{appId:S.b,fields:"name,email,picture",render:function(e){return l.a.createElement(i.a,{disabled:!0,variant:"contained",size:"large",onClick:e.onClick,className:Object(C.a)(a.facebookButton,"normal-case w-256 rounded-full text-white hover:shadow-xl")},l.a.createElement("img",{className:"w-36 px-0 mr-20 bg-white rounded-full",src:Object(A.i)("facebook"),alt:"facebook logo"}),"\u4f7f\u7528 Facebook \u767b\u5165")},callback:function(a){!function(a){var t=a.userID,n=a.accessToken,o=a.name,r=a.email,l=a.picture;q(!0),O(!1);var c={facebookID:t,facebookAccessToken:n,facebookDisplayName:o,facebookEmail:r,facebookPhotoURL:l.data?l.data.url:"assets/images/avatars/penguin.png"};e(N.p(c))}(a)},onFailure:function(a){e(D.J({message:"\u767b\u5165 Facebook \u5931\u6557"}))}}),l.a.createElement("div",{className:"my-24 flex items-center justify-center"},l.a.createElement(u.a,{className:"w-64"}),l.a.createElement("span",{className:"mx-8 font-bold"},"\u6216\u8005"),l.a.createElement(u.a,{className:"w-64"})),l.a.createElement(y.a,{onValidSubmit:function(a){q(!0),O(!1),e(N.o(a))},onValid:function(){O(!0),q(!1)},onInvalid:V,ref:z,className:"flex flex-col justify-center w-full"},l.a.createElement(j.y,{className:"mb-16",label:"\u4fe1\u7bb1",autoFocus:!0,type:"email",name:"email",validations:{minLength:4,isEmail:!0},validationErrors:{minLength:"\u8acb\u8f38\u5165\u6b63\u78ba\u4fe1\u7bb1\u5730\u5740",isEmail:"\u8acb\u8f38\u5165\u6b63\u78ba\u4fe1\u7bb1\u5730\u5740"},InputProps:{endAdornment:l.a.createElement(d.a,{position:"end"},l.a.createElement(f.a,{className:"text-20",color:"action"},"email"))},variant:"outlined",required:!0,fullWidth:!0}),l.a.createElement(j.y,{className:"mb-16",label:"\u5bc6\u78bc",type:"password",name:"password",InputProps:{endAdornment:l.a.createElement(d.a,{position:"end"},l.a.createElement(f.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",required:!0,fullWidth:!0}),l.a.createElement("div",{className:"flex items-center justify-between"},l.a.createElement(b.a,null,l.a.createElement(g.a,{control:l.a.createElement(p.a,{name:"remember",checked:W.remember,onChange:G}),label:"\u4fdd\u6301\u767b\u5165"})),l.a.createElement(I.a,{className:"font-medium",to:"####"},"\u5fd8\u8a18\u5bc6\u78bc\uff1f")),l.a.createElement(i.a,{type:"submit",variant:"contained",color:"primary",className:"w-full mx-auto mt-16 rounded-full hover:shadow-xl","aria-label":"\u767b\u5165",disabled:!k,value:"legacy"},R?"\u767b\u5165\u4e2d":"\u767b\u5165",R&&l.a.createElement(F.a,{width:32,height:32}))),l.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},l.a.createElement("span",{className:"font-medium"},"\u5c1a\u672a\u64c1\u6709\u5e33\u865f\uff1f"),l.a.createElement(I.a,{className:"font-medium",to:"####",disabled:!0},"\u5efa\u7acb\u5e33\u865f"))))))}}}]);