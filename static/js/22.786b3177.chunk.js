(this["webpackJsonpys-main-web"]=this["webpackJsonpys-main-web"]||[]).push([[22],{888:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(30),s=a(76),c=a(2),o=a(855),i=a(142);t.a=function(e){var t=e.pageNames||["\u6703\u54e1\u5831\u8868"],a=e.dense||!1,r=e.className||"";return a?n.a.createElement(s.b,{enter:{animation:"transition.expandIn"},className:Object(c.a)("flex items-center",r)},n.a.createElement(o.a,{className:"text-18 text-white"},"dashboard"),t.map((function(e){return n.a.createElement(n.a.Fragment,{key:e},n.a.createElement(o.a,{className:"text-16 text-white"},"chevron_right"),n.a.createElement(i.a,{className:"text-white"},e))}))):n.a.createElement(s.b,{enter:{animation:"transition.expandIn"},className:Object(c.a)("flex items-center my-16 sm:mb-0 pl-12",r)},n.a.createElement(l.a,{to:"/staff/dashboard",role:"button",className:"flex justify-center items-center text-white"},n.a.createElement(o.a,{className:"text-24 text-white"},"dashboard")),t.map((function(e){return n.a.createElement(n.a.Fragment,{key:e},n.a.createElement(o.a,null,"chevron_right"),n.a.createElement(i.a,{className:"text-24 text-white"},e))})))}},985:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(6),s=a(142),c=a(855),o=a(801),i=a(76),m=a(30),d=a(2),u=a(409),f=a(13),p=a(46),x=a(292),b=a(888),h=Object(u.a)((function(e){return{root:{background:"radial-gradient("+e.palette.primary.light+" 0%, "+e.palette.primary.dark+" 80%)",color:e.palette.primary.contrastText},board:{cursor:"pointer",boxShadow:e.shadows[0],transitionProperty:"box-shadow border-color",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",color:e.palette.getContrastText(e.palette.primary.dark),"&:hover":{boxShadow:e.shadows[6],transform:"translate(-3px, -3px)"}},boardInfoWrapper:{background:"linear-gradient(transparent, rgba(0, 0, 0, 0.9))"},newBoard:{borderWidth:2,borderStyle:"dashed",borderColor:e.palette.primary.contrastText}}}));t.default=function(e){var t=h(e),a=Object(l.b)(),u=Object(l.c)((function(e){return e.homePage.carousels})),E=u.docs,N=u.loading;return Object(r.useEffect)((function(){a(f.T())}),[a]),n.a.createElement("div",{className:Object(d.a)(t.root,"flex flex-grow flex-shrink-0 flex-col items-center")},n.a.createElement("div",{className:"flex flex-grow flex-shrink-0 flex-col items-center container px-16 md:px-24"},n.a.createElement(b.a,{className:"self-start pl-12",pageNames:["\u5167\u5bb9\u7ba1\u7406","\u8f2a\u64ad\u5716\u7247\u5217\u8868"]}),n.a.createElement(i.a,null,n.a.createElement(s.a,{className:"mt-12 sm:mt-16 sm:py-12 text-20 sm:text-24 font-600 text-center"},"\u50c5\u652f\u63f4",n.a.createElement("br",null),n.a.createElement("span",{className:"text-blue"},"JPG")," \u548c",n.a.createElement("span",{className:"text-blue"},"PNG")," \u4ee5\u53ca",n.a.createElement("span",{className:"text-blue"},"\u4e0a\u9650 5 \u5f35")," \u7684\u5716\u7247\u7a2e\u985e")),n.a.createElement(i.b,{className:"flex flex-wrap w-full justify-center py-32 px-16",enter:{animation:"transition.slideUpBigIn",duration:300}},E.length<5&&n.a.createElement("div",{className:"w-320 h-320 p-16"},n.a.createElement(m.a,{to:"/staff/carousels-list/new",className:Object(d.a)(t.board,t.newBoard,"flex flex-col items-center justify-center w-full h-full rounded py-24 rounded-lg"),role:"button"},n.a.createElement(c.a,{className:"text-56"},"add_circle"),n.a.createElement(s.a,{className:"text-16 font-300 text-center pt-16 px-32",color:"inherit"},"\u65b0\u589e\u8f2a\u64ad\u5716\u7247"))),E.map((function(e){return n.a.createElement(m.a,{to:"/staff/carousels-list/".concat(e._id),role:"button",key:e._id},n.a.createElement("div",{className:"w-320 h-320 p-16"},n.a.createElement("div",{className:Object(d.a)(t.board,"flex flex-col items-center justify-end w-full h-full rounded pt-24 rounded-lg"),style:{backgroundImage:"url(".concat(Object(p.f)(e.imageName),")")}},n.a.createElement("div",{className:Object(d.a)(t.boardInfoWrapper,"flex justify-start items-center rounded-b-lg w-full")},n.a.createElement(o.a,{src:Object(p.a)(e.author.photoURL),className:"mx-10 my-5",alt:e.author.displayName}),n.a.createElement(s.a,{className:"text-16 font-300 pr-32",color:"inherit"},e.author.displayName)))))})),n.a.createElement("div",{className:"flex justify-center items-center w-full min-h-10"},N&&n.a.createElement(x.a,{width:128,height:128})))))}}}]);