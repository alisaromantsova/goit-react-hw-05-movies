"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{881:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var s=a(861),r=a(439),n=a(757),i=a.n(n),c=a(87),o=a(243),l=a(791),u="Movies_section__bjPDA",h="Movies_title__MDLXB",m="Movies_input__KrUqs",d="Movies_button__GcIka",_="Movies_form__4ow+Z",v="Movies_list__hqYjd",p="Movies_moviesLi__Eb45w",g="Movies_name__28cIO",f="Movies_year__rySZs",x="Movies_text__FlKVm",j=a(643),b=a(184),w=function(){var e=(0,c.lr)(),t=(0,r.Z)(e,2),a=t[0],n=t[1],w=a.get("search"),M=(0,l.useState)(null),N=(0,r.Z)(M,2),k=N[0],y=N[1],Z=(0,l.useState)(a.get("search")),S=(0,r.Z)(Z,2),C=S[0],q=S[1],D=(0,l.useState)(""),I=(0,r.Z)(D,2),L=I[0],B=I[1],E=(0,l.useState)(!1),F=(0,r.Z)(E,2),K=F[0],U=F[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,s.Z)(i().mark((function e(){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.prev=1,e.next=4,o.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat("api_key=e777b5f5a1d00d3a4d56208d16e8e0e4","&query=").concat(w));case 4:t=e.sent,a=t.data.results.map((function(e){var t=e.title,a=e.name,s=e.id,r=e.poster_path,n=e.release_date;return{name:t||a,id:s,img:r,date:n?n.slice(0,4):""}})),y(a),U(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("error");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();w?e():y(null)}),[L]),(0,b.jsxs)("div",{className:u,children:[(0,b.jsx)("h1",{className:h,children:"Search movies"}),(0,b.jsxs)("form",{className:_,onSubmit:function(e){e.preventDefault(),e.target[0].value.trim()?(n({search:e.target[0].value.trim()}),B(e.target[0].value.trim())):n({})},children:[(0,b.jsx)("input",{onChange:function(e){q(e.target.value),n({search:e.target.value})},className:m,plaseholder:"Film name...",value:C}),(0,b.jsx)("button",{className:d,children:"Search"})]}),K&&(0,b.jsx)(j.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",margin:"auto"}),k&&k.length>0&&(0,b.jsx)("ul",{className:v,children:k.map((function(e){return(0,b.jsx)("li",{className:p,children:(0,b.jsxs)(c.rU,{to:"/movies/".concat(e.id),state:{from:"/movies?search=".concat(w)},children:[e.img?(0,b.jsx)("img",{height:"411px",width:"100%",src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.img," "),alt:"img"}):(0,b.jsx)("div",{style:{width:"274px",height:"411px",border:"#000 solid 1px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,b.jsx)("p",{children:"Not found"})}),(0,b.jsxs)("div",{className:x,children:[(0,b.jsx)("p",{className:g,children:e.name}),(0,b.jsx)("p",{className:f,children:e.date})]})]})},e.id)}))}),k&&0===k.length&&(0,b.jsx)("p",{children:"We haven't found anything."})]})}}}]);
//# sourceMappingURL=881.44e298b5.chunk.js.map