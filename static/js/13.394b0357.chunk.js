(this["webpackJsonpyda-static-page"]=this["webpackJsonpyda-static-page"]||[]).push([[13],{889:function(e,t,a){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"===typeof e||e instanceof String)){var t;throw t=null===e?"null":"object"===(t=r(e))&&e.constructor&&e.constructor.hasOwnProperty("name")?e.constructor.name:"a ".concat(t),new TypeError("Expected string but received ".concat(t,"."))}},e.exports=t.default,e.exports.default=t.default},893:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var a in t)"undefined"===typeof e[a]&&(e[a]=t[a]);return e},e.exports=t.default,e.exports.default=t.default},898:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,r.default)(e),(t=(0,n.default)(t,o)).allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));for(var a=e.split("."),l=0;l<a.length;l++)if(a[l].length>63)return!1;if(t.require_tld){var i=a.pop();if(!a.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(i))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(i))return!1}for(var s,c=0;c<a.length;c++){if(s=a[c],t.allow_underscores&&(s=s.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(s))return!1;if(/[\uff01-\uff5e]/.test(s))return!1;if("-"===s[0]||"-"===s[s.length-1])return!1}return!0};var r=l(a(889)),n=l(a(893));function l(e){return e&&e.__esModule?e:{default:e}}var o={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};e.exports=t.default,e.exports.default=t.default},899:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(0,n.default)(t);a=String(a);if(!a)return e(t,4)||e(t,6);if("4"===a)return!!l.test(t)&&t.split(".").sort((function(e,t){return e-t}))[3]<=255;if("6"===a){var r=t.split(":"),i=!1,s=e(r[r.length-1],4),c=s?7:8;if(r.length>c)return!1;if("::"===t)return!0;"::"===t.substr(0,2)?(r.shift(),r.shift(),i=!0):"::"===t.substr(t.length-2)&&(r.pop(),r.pop(),i=!0);for(var u=0;u<r.length;++u)if(""===r[u]&&u>0&&u<r.length-1){if(i)return!1;i=!0}else if(s&&u===r.length-1);else if(!o.test(r[u]))return!1;return i?r.length>=1:r.length===c}return!1};var r,n=(r=a(889))&&r.__esModule?r:{default:r};var l=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,o=/^[0-9A-F]{1,4}$/i;e.exports=t.default,e.exports.default=t.default},920:function(e,t,a){"use strict";var r=a(909),n=a.n(r),l=a(910),o=a(26),i=a(0),s=a.n(i),c=a(6),u=a(8),d=a(881),m=a(76),f=a(3),p=a(877),b=a(143),g=a(875),h=a(939),v=a(962),x=a(818),w=a(897),y=a.n(w),E=a(811),j=a(911),N=a(11),O=a(13),C=a(912),_=a.n(C),k=a(913),S=a.n(k),I=a(914),F=a.n(I),T=a(915),M=a.n(T),P=a(916),A=a.n(P),z=a(917),B=a.n(z);a(918),a(919);Object(j.registerPlugin)(_.a,A.a,S.a,F.a,M.a,B.a);var q=Object(u.a)({root:{"& label.Mui-focused":{color:"#000000"},"& .MuiInput-underline:after":{borderBottomColor:"#2e2e2e"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#2e2e2e"},"&:hover fieldset":{borderColor:"#000000"},"&.Mui-focused fieldset":{borderColor:"#000000"}},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"2.4rem"}}})(g.a),R=Object(d.a)((function(e){return{tag:{transition:"background-color .3s, transform .3s"},red:{backgroundColor:"transparent",border:"2.5px solid #ef7c71","&.active, &:hover":{backgroundColor:"#ef7c71",transform:"scale(1.3)",boxShadow:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"}},orange:{backgroundColor:"transparent",border:"2.5px solid #f5bb67","&.active, &:hover":{backgroundColor:"#f5bb67",transform:"scale(1.3)",boxShadow:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"}},yellow:{backgroundColor:"transparent",border:"2.5px solid #fbe571","&.active, &:hover":{backgroundColor:"#fbe571",transform:"scale(1.3)",boxShadow:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"}},green:{backgroundColor:"transparent",border:"2.5px solid #80db7b","&.active, &:hover":{backgroundColor:"#80db7b",transform:"scale(1.3)",boxShadow:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"}},blue:{backgroundColor:"transparent",border:"2.5px solid #63a5f8","&.active, &:hover":{backgroundColor:"#63a5f8",transform:"scale(1.3)",boxShadow:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"}},purple:{backgroundColor:"transparent",border:"2.5px solid #cb8cf8","&.active, &:hover":{backgroundColor:"#cb8cf8",transform:"scale(1.3)",boxShadow:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"}},gray:{backgroundColor:"transparent",border:"2.5px solid #b4b4b8","&.active, &:hover":{backgroundColor:"#b4b4b8",transform:"scale(1.3)",boxShadow:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"}},closeButton:{position:"absolute",right:5,top:"5px"},filePondWrapper:{opacity:".6",transition:"opacity .3s","& .filepond--root":{borderBottom:"none","& .filepond--drop-label":{color:"#2e2e2e",fontSize:"2em",fontWeight:"600"},"& .filepond--file-status":{fontSize:"2em"},"& .filepond--file-action-button":{fontSize:"2em"},"& .filepond--file-info-main":{fontSize:"2em"},"& .filepond--file-info-sub":{fontSize:"1.5em"}},"& .filepond--panel-root":{fontSize:"1.75em",backgroundColor:"transparent"},"&:hover, &.active":{opacity:"1",cursor:"pointer"}}}})),W=s.a.forwardRef((function(e,t){return s.a.createElement(x.a,Object.assign({direction:"up",ref:t},e))}));t.a=function(e){var t=R(e),a=Object(c.b)(),r=Object(c.c)((function(e){return e.auth.user.data.displayName})),u=Object(i.useState)(!1),d=Object(o.a)(u,2),g=d[0],x=d[1],w=Object(i.useState)(null),C=Object(o.a)(w,2),_=C[0],k=C[1],S=Object(i.useState)([]),I=Object(o.a)(S,2),F=I[0],T=I[1];function M(){k(null),x(!1)}function P(e){var t=new Set(F);t.has(e)?t.delete(e):t.add(e),T(Array.from(t))}return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{onClick:function(){x(!0)}},e.trigger),s.a.createElement(p.a,{classes:{paper:"rounded-12"},fullWidth:!0,fullScreen:!1,open:g,onClose:M,TransitionComponent:W},s.a.createElement(v.a,{disableTypography:!0,className:"text-center text-20 sm:text-24 font-semibold"},"\u4e0a\u50b3\u6211\u7684\u5716\u7247",s.a.createElement(E.a,{"aria-label":"Close",className:t.closeButton,onClick:M},s.a.createElement(y.a,null))),s.a.createElement(h.a,{className:"-mt-10"},s.a.createElement(m.a,null,s.a.createElement(b.a,{className:"mt-22 sm:mt-22 sm:py-12 text-14 sm:text-20 font-600 text-center pb-10",color:"inherit"},"\u76ee\u524d\u50c5\u652f\u63f4\u985e\u578b",s.a.createElement("br",null),s.a.createElement("span",{className:"text-blue"},"JPG\u3001PNG")," \u548c",s.a.createElement("span",{className:"text-blue"},"SVG")," \u7684\u5716\u7247")),null!==_&&s.a.createElement(m.b,{enter:{animation:"transition.expandIn"}},s.a.createElement(q,{className:"mb-24",label:"\u5716\u7247\u8aaa\u660e",id:"imageCaption",name:"imageCaption",value:_,onChange:function(e){return k(e.target.value)},variant:"outlined",fullWidth:!0}),s.a.createElement("div",{className:"flex justify-around items-center mb-24"},s.a.createElement("div",{onClick:function(){return P("red")},className:Object(f.a)(t.tag,t.red,F.includes("red")&&"active","cursor-pointer w-24 h-24 rounded-full hover:shadow-xl")}),s.a.createElement("div",{onClick:function(){return P("orange")},className:Object(f.a)(t.tag,t.orange,F.includes("orange")&&"active","cursor-pointer w-24 h-24 rounded-full hover:shadow-xl")}),s.a.createElement("div",{onClick:function(){return P("yellow")},className:Object(f.a)(t.tag,t.yellow,F.includes("yellow")&&"active","cursor-pointer w-24 h-24 rounded-full hover:shadow-xl")}),s.a.createElement("div",{onClick:function(){return P("green")},className:Object(f.a)(t.tag,t.green,F.includes("green")&&"active","cursor-pointer w-24 h-24 rounded-full hover:shadow-xl")}),s.a.createElement("div",{onClick:function(){return P("blue")},className:Object(f.a)(t.tag,t.blue,F.includes("blue")&&"active","cursor-pointer w-24 h-24 rounded-full hover:shadow-xl")}),s.a.createElement("div",{onClick:function(){return P("purple")},className:Object(f.a)(t.tag,t.purple,F.includes("purple")&&"active","cursor-pointer w-24 h-24 rounded-full hover:shadow-xl")}),s.a.createElement("div",{onClick:function(){return P("gray")},className:Object(f.a)(t.tag,t.gray,F.includes("gray")&&"active","cursor-pointer w-24 h-24 rounded-full hover:shadow-xl")}))),s.a.createElement("div",{className:Object(f.a)(t.filePondWrapper,"mb-12 rounded-12 border-3 border-dotted")},s.a.createElement(j.FilePond,{labelIdle:"\u9ede\u64ca \u6216 \u62d6\u66f3\u4f86 <span class='filepond--label-action'>\u4e0a\u50b3\u5716\u7247 </span>",labelInvalidField:"\u8acb\u4e0a\u50b3\u5716\u7247",labelFileWaitingForSize:"\u6aa2\u67e5\u5716\u7247\u5927\u5c0f",labelFileSizeNotAvailable:"\u5716\u7247\u6a94\u6848\u592a\u5927\u4e86",labelFileLoading:"\u8f09\u5165\u4e2d",labelFileLoadError:"\u51fa\u932f\u4e86",labelFileProcessing:"\u4e0a\u50b3\u4e2d",labelFileProcessingComplete:"\u4e0a\u50b3\u5b8c\u6210",labelFileProcessingAborted:"\u4e0a\u50b3\u5df2\u53d6\u6d88",labelTapToCancel:"\u53d6\u6d88",labelTapToRetry:"\u91cd\u65b0\u4e0a\u50b3",labelButtonRemoveItem:"\u79fb\u9664\u5716\u7247",labelButtonProcessItem:"\u4e0a\u50b3",allowMultiple:!1,labelFileTypeNotAllowed:"\u4e0d\u652f\u63f4\u7684\u5716\u7247\u683c\u5f0f",acceptedFileTypes:["image/jpeg","image/png","image/svg+xml"],dropValidation:!0,maxFileSize:"12MB",imageCropAspectRatio:"1:1",instantUpload:!1,fileValidateTypeLabelExpectedTypesMap:{"image/jpeg":".jpg","image/png":".png","image/svg+xml":".svg"},onupdatefiles:function(){var e=Object(l.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.length){e.next=3;break}return e.next=3,k("".concat(r,"_").concat(t[0].file.name));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),server:{url:"".concat(N.a,"/api/image"),timeout:7e3,process:function(e,t,r,n,l,o,i){var s=new FormData;s.append("imageData",t,t.name),s.append("imageName",t.name),s.append("imageTags",F),s.append("imageCaption",_),s.append("mimeType",t.type),s.append("imageHeight",r.size.height),s.append("imageWidth",r.size.width),s.append("imageSize",t.size);var c=new XMLHttpRequest;return c.open("POST","".concat(N.a,"/api/image")),c.setRequestHeader("Authorization","Bearer "+window.localStorage.getItem("jwt_access_token")),c.upload.onprogress=function(e){o(e.lengthComputable,e.loaded,e.total)},c.onload=function(){c.status>=200&&c.status<300?(n(c.responseText),a({type:O.a,payload:JSON.parse(c.responseText)}),a({type:O.e,options:{message:"\u5716\u7247\u4ef6\u4e0a\u50b3\u6210\u529f"}}),x(!1)):l("oh no")},c.send(s),{abort:function(){c.abort(),i()}}}}})),s.a.createElement(m.a,null,s.a.createElement(b.a,{className:"mt-22 sm:mt-22 sm:py-12 text-14 sm:text-20 font-600 text-center pb-10",color:"inherit"},"\u5927\u5c0f\u9650\u5236 ",s.a.createElement("span",{className:"text-blue"},"12 MB"))))))}},977:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,r.default)(e),!e||e.length>=2083||/[\s<>]/.test(e))return!1;if(0===e.indexOf("mailto:"))return!1;var a,i,d,m,f,p,b,g;if(t=(0,o.default)(t,s),b=e.split("#"),e=b.shift(),b=e.split("?"),e=b.shift(),(b=e.split("://")).length>1){if(a=b.shift().toLowerCase(),t.require_valid_protocol&&-1===t.protocols.indexOf(a))return!1}else{if(t.require_protocol)return!1;if("//"===e.substr(0,2)){if(!t.allow_protocol_relative_urls)return!1;b[0]=e.substr(2)}}if(""===(e=b.join("://")))return!1;if(b=e.split("/"),""===(e=b.shift())&&!t.require_host)return!0;if((b=e.split("@")).length>1){if(t.disallow_auth)return!1;if((i=b.shift()).indexOf(":")>=0&&i.split(":").length>2)return!1}m=b.join("@"),p=null,g=null;var h=m.match(c);h?(d="",g=h[1],p=h[2]||null):(b=m.split(":"),d=b.shift(),b.length&&(p=b.join(":")));if(null!==p&&(f=parseInt(p,10),!/^[0-9]+$/.test(p)||f<=0||f>65535))return!1;if(!(0,l.default)(d)&&!(0,n.default)(d,t)&&(!g||!(0,l.default)(g,6)))return!1;if(d=d||g,t.host_whitelist&&!u(d,t.host_whitelist))return!1;if(t.host_blacklist&&u(d,t.host_blacklist))return!1;return!0};var r=i(a(889)),n=i(a(898)),l=i(a(899)),o=i(a(893));function i(e){return e&&e.__esModule?e:{default:e}}var s={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1},c=/^\[([^\]]+)\](?::([0-9]+))?$/;function u(e,t){for(var a=0;a<t.length;a++){var r=t[a];if(e===r||(n=r,"[object RegExp]"===Object.prototype.toString.call(n)&&r.test(e)))return!0}var n;return!1}e.exports=t.default,e.exports.default=t.default},996:function(e,t,a){"use strict";a.r(t);var r=a(26),n=a(0),l=a.n(n),o=a(875),i=a(143),s=a(859),c=a(879),u=a(882),d=a(872),m=a(868),f=a(869),p=a(95),b=a(8),g=a(315),h=a(413),v=a(76),x=a(144),w=a(30),y=a(891),E=a.n(y),j=a(3),N=a(15),O=a(6),C=a(977),_=a.n(C),k=a(46),S=a(920),I=a(13),F=a(60),T=a(292),M=Object(b.a)({root:{"& label.Mui-focused":{color:"#3e3e3e"},"& .MuiInput-underline:after":{borderBottomColor:"#fefefe"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#5e5e5e"},"&:hover fieldset":{borderColor:"#3e3e3e"},"&.Mui-focused fieldset":{borderColor:"#3e3e3e"}},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"2.4rem"}}})(o.a),P=Object(h.a)((function(e){return{carouselImageFeaturedStar:{position:"absolute",top:0,right:0,color:g.a[400],opacity:0},carouselImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},carouselImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $carouselImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $carouselImageFeaturedStar":{opacity:1},"&:hover $carouselImageFeaturedStar":{opacity:1}}}}}));t.default=function(e){var t=Object(O.b)(),a=e.match.params.carouselId,o=Object(O.c)((function(e){return e.homePage.carousels})),b=Object(O.c)((function(e){return e.uploads.image})),g=b.docs,h=P(e),y=Object(n.useState)(0),C=Object(r.a)(y,2),A=C[0],z=C[1],B=Object(n.useState)(!1),q=Object(r.a)(B,2),R=q[0],W=q[1],$=Object(n.useState)(!1),L=Object(r.a)($,2),D=L[0],J=L[1],U=Object(n.useState)(!1),V=Object(r.a)(U,2),G=V[0],H=V[1],X=Object(x.c)(null),K=X.form,Q=X.handleChange,Y=X.setForm;function Z(){W(!0),t(I.A(K))}function ee(){return""===K.linkAddress?K.title&&K.imageName:K.title&&K.imageName&&_()(K.linkAddress)}return Object(n.useEffect)((function(){t(I.W())}),[t]),Object(n.useEffect)((function(){if(!K)if("new"===a)Y({_id:"new",title:"",subTitle:"",imageName:"",linkAddress:"",published:!1});else if(o.docs.length){var e=o.docs.filter((function(e){return e._id===a}))[0];e?Y(e):p.a.push({pathname:"/staff/carousels-list"})}else p.a.push({pathname:"/staff/carousels-list"})}),[o.docs,K,a,Y]),l.a.createElement(v.m,{classes:{toolbar:"p-0",header:"min-h-128 h-128 sm:h-136 sm:min-h-136"},header:K&&l.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},l.a.createElement("div",{className:"flex flex-col items-start"},l.a.createElement(v.a,{animation:"transition.slideRightIn",delay:300},l.a.createElement(i.a,{className:"normal-case flex items-center mb-12",component:w.a,role:"button",to:"/staff/carousels-list",color:"inherit"},l.a.createElement(s.a,{className:"mr-4 text-20"},"arrow_back"),"\u8fd4\u56de\u8f2a\u64ad\u5716\u7247\u5217\u8868")),l.a.createElement("div",{className:"flex items-center max-w-200 sm:max-w-512"},l.a.createElement(v.a,{animation:"transition.expandIn",delay:300},K.imageName?l.a.createElement("img",{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",src:Object(k.f)(K.imageName),alt:K.title}):l.a.createElement("img",{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:"\u9810\u8a2d\u5716\u7247"})),l.a.createElement("div",{className:"flex flex-col min-w-0"},l.a.createElement(v.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(i.a,{className:"text-16 sm:text-20 truncate"},K.title?K.title:"\u65b0\u589e\u8f2a\u64ad\u5716\u7247")),l.a.createElement(v.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(i.a,{variant:"caption"},"\u5716\u7247\u5167\u5bb9"))))),"new"===a?l.a.createElement(v.a,{animation:"transition.slideRightIn",delay:300},l.a.createElement(c.a,{className:"whitespace-no-wrap mx-12 rounded-full",variant:"contained",color:"secondary",disabled:!ee(),onClick:Z},R?l.a.createElement("span",{className:"flex justify-center"},"\u65b0\u589e\u5716\u7247\u4e2d ",l.a.createElement(T.a,{width:"2em",height:"2em"})):"\u65b0\u589e\u5716\u7247")):l.a.createElement("div",{className:"flex flex-row justify-around items-center h-full"},l.a.createElement(v.a,{animation:"transition.slideRightIn",delay:300},l.a.createElement(c.a,{className:"whitespace-no-wrap px-12 rounded-full bg-red text-white hover:bg-red-300",variant:"contained",onClick:function(){J(!0),t(I.m(a))},disabled:o.docs.length<2},D?l.a.createElement("span",{className:"flex justify-center"},"\u522a\u9664\u5716\u7247\u4e2d ",l.a.createElement(T.a,{width:"2em",height:"2em"})):"\u522a\u9664\u5716\u7247")),l.a.createElement(v.a,{animation:"transition.slideRightIn",delay:300},l.a.createElement(c.a,{className:"whitespace-no-wrap mx-12 rounded-full",variant:"contained",color:"secondary",disabled:!ee(),onClick:Z},R?l.a.createElement("span",{className:"flex justify-center"},"\u66f4\u65b0\u5716\u7247\u4e2d ",l.a.createElement(T.a,{width:"2em",height:"2em"})):"\u66f4\u65b0\u5716\u7247")))),contentToolbar:l.a.createElement(u.a,{value:A,onChange:function(e,t){z(t)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},l.a.createElement(d.a,{className:"h-64 normal-case",label:"\u57fa\u672c\u8a2d\u5b9a"}),l.a.createElement(d.a,{className:"h-64 normal-case",label:"\u5716\u7247\u8a2d\u5b9a"})),content:K&&l.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},0===A&&l.a.createElement("div",null,l.a.createElement(M,{className:"mt-8 mb-16",error:""===K.title,required:!0,label:"\u5927\u6a19\u984c",autoFocus:!0,id:"title",name:"title",value:K.title,onChange:Q,variant:"outlined",multiline:!0,rows:5,fullWidth:!0}),l.a.createElement(M,{className:"mt-8 mb-16",error:""===K.subTitle,required:!0,id:"subTitle",name:"subTitle",onChange:Q,label:"\u526f\u6a19\u984c",type:"text",value:K.subTitle,variant:"outlined",multiline:!0,rows:5,fullWidth:!0}),l.a.createElement(M,{error:Boolean(K.linkAddress&&!_()(K.linkAddress)),helperText:K.linkAddress&&!_()(K.linkAddress)?"\u7db2\u5740\u683c\u5f0f e.g. https://www.google.com":"",className:"mt-8 mb-16",id:"linkAddress",name:"linkAddress",onChange:Q,label:"\u5716\u7247\u9023\u7d50",type:"text",value:K.linkAddress,variant:"outlined",fullWidth:!0}),l.a.createElement(m.a,{className:"mt-8 mb-16",label:"\u5728\u9996\u9801\u986f\u793a\u5716\u7247",labelPlacement:"start",control:l.a.createElement(f.a,{checked:K.published,id:"published",name:"published",onChange:Q})})),1===A&&l.a.createElement("div",null,l.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap"},l.a.createElement(S.a,{trigger:l.a.createElement("label",{htmlFor:"button-file",className:Object(j.a)(h.carouselImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5")},l.a.createElement(s.a,{fontSize:"large",color:"action"},"cloud_upload"))}),g.map((function(e,t){return l.a.createElement("div",{onClick:function(){return t=e.imageName,void Y((function(e){return N.a.setIn(e,"imageName",t)}));var t},className:Object(j.a)(h.carouselImageItem,"flex items-center justify-center relative h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5",e.imageName===K.imageName&&"featured"),key:t},l.a.createElement(s.a,{className:h.carouselImageFeaturedStar},"star"),l.a.createElement("img",{className:"max-w-none w-auto h-full",src:Object(k.f)(e.imageName),alt:"\u5716\u7247"}))})),l.a.createElement(E.a,null,(function(e){var a=e.isVisible;return l.a.createElement("div",{className:"flex justify-center items-center w-full min-h-10"},G&&l.a.createElement(T.a,{width:128,height:128}),a&&!G&&function(){if(b.hasNextPage){H(!0);var e={page:b.nextPage,limit:20,sort:"updatedAt",order:-1};F.a.getUploadedImages(e).then((function(e){t({type:I.c,payload:e}),H(!1)}))}}())}))))),innerScroll:!0})}}}]);