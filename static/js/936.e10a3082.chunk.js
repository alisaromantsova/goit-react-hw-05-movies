"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{328:function(e,t,a){a.d(t,{O:function(){return m}});var n="MovielistCard_moviesLi__+lGJe",r="MovielistCard_name__zAXFP",i="MovielistCard_year__2EJtW",s="MovielistCard_text__vBB6Z",c=a(689),o=a(87),l=a(184),d=function(e){var t=e.id,a=e.img,d=e.name,u=e.date,m=(0,c.TH)();return(0,l.jsx)("li",{className:n,children:(0,l.jsxs)(o.rU,{to:"/movies/".concat(t),state:{from:m},children:[a?(0,l.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(a," "),alt:d||"",height:"411px"}):(0,l.jsx)("div",{style:{width:"274px",height:"411px",border:"#000 solid 1px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)("p",{children:"Not found"})}),(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("p",{className:r,children:d}),(0,l.jsx)("p",{className:i,children:u})]})]})})},u="MoviesList_list__0Owr9",m=function(e){var t=e.movies;return(0,l.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,a=e.name,n=e.date,r=e.img;return(0,l.jsx)(d,{id:t,name:a,date:n,img:r},t)}))})}},936:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(861),r=a(439),i=a(757),s=a.n(i),c=a(243),o=a(791),l="Home_title__L087v",d="Home_section__uZuiO",u=a(643),m=a(328),h=a(184),p=function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),a=t[0],i=t[1],p=(0,o.useState)(!1),_=(0,r.Z)(p,2),v=_[0],f=_[1];return(0,o.useEffect)((function(){f(!0);var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,c.Z.get("".concat("https://api.themoviedb.org/3","/trending/all/day?").concat("api_key=e777b5f5a1d00d3a4d56208d16e8e0e4"));case 4:t=e.sent,a=t.data.results.map((function(e){var t=e.title,a=e.name,n=e.id,r=e.poster_path,i=e.release_date;return{name:t||a,id:n,img:r,date:i?i.slice(0,4):""}})),i(a),f(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("error");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,h.jsxs)("section",{className:d,children:[(0,h.jsx)("h1",{className:l,children:"Trending today"}),v&&(0,h.jsx)(u.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",margin:"auto"}),(0,h.jsx)(m.O,{movies:a})]})}}}]);
//# sourceMappingURL=936.e10a3082.chunk.js.map