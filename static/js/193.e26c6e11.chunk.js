"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[193],{193:function(e,a,s){s.r(a),s.d(a,{default:function(){return R}});var i=s(861),t=s(439),n=s(757),r=s.n(n),c=s(791),l="MovieDetails_title__RBndM",o="MovieDetails_div__40K5M",d="MovieDetails_textContainer__DlcLK",v="MovieDetails_ratingP__MnRCl",_="MovieDetails_ratingSpan__Ig0LO",h="MovieDetails_genres__80iSK",u="MovieDetails_list__y5Rs9",m="MovieDetails_overviewTitle__ZoxNc",x="MovieDetails_overview__EVogb",g="MovieDetails_buttons__V2S70",f="MovieDetails_castLink__5wU63",j=s(87),p=s(184),N=function(e){var a=e.film,s=a.img,i=a.name,t=a.date,n=a.rating,r=a.overview,c=a.genres;return(0,p.jsxs)("div",{className:o,children:[s&&(0,p.jsx)("img",{height:"500px",src:"".concat("https://image.tmdb.org/t/p/w500").concat(s),alt:""}),(0,p.jsxs)("div",{className:d,children:[i?(0,p.jsxs)("h2",{className:l,children:[i,"(",t,")"]}):(0,p.jsx)("h2",{className:l,children:" Not found"}),n?(0,p.jsxs)("p",{className:v,children:["Rating: ",(0,p.jsx)("span",{className:_,children:n})]}):(0,p.jsx)("p",{className:v,children:"Rating: Not found"}),(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("h3",{className:v,children:"Genres:"}),(0,p.jsx)("ul",{className:u,children:c&&c.map((function(e){return(0,p.jsx)("li",{children:e.name},e.id)}))})]}),(0,p.jsx)("h3",{className:m,children:"Overview"}),r?(0,p.jsx)("p",{className:x,children:r}):(0,p.jsx)("p",{className:x,children:"Not found"}),(0,p.jsxs)("ul",{className:g,children:[(0,p.jsx)("li",{children:(0,p.jsx)(j.OL,{className:f,to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(j.OL,{className:f,to:"reviews",children:"Review"})})]})]})]})},w=s(689),M=s(243),b="MoviePage_section__AQDAA",k="MoviePage_back__j4CPa",D=s(643),R=function(){var e,a,s=(0,w.TH)(),n=(0,c.useRef)(null!==(e=null===(a=s.state)||void 0===a?void 0:a.from)&&void 0!==e?e:"/"),l=(0,w.UO)(),o=(0,c.useState)({}),d=(0,t.Z)(o,2),v=d[0],_=d[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)(r().mark((function e(){var a,s,i,t,n,c,o,d,v;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.Z.get("".concat("https://api.themoviedb.org/3","/movie/").concat(l.movieId,"?").concat("api_key=e777b5f5a1d00d3a4d56208d16e8e0e4"));case 3:a=e.sent,s=a.data,i=s.original_title,t=s.release_date,n=s.poster_path,c=s.vote_average,o=s.overview,d=s.genres,v={name:i,date:t.slice(0,4)||"Not found",img:n||"",rating:c.toFixed(2)||"Not found",overview:o||"Not found",genres:d},_(v),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("div",{className:b,children:[(0,p.jsx)(j.rU,{to:n.current,className:k,children:"Go back"}),(0,p.jsx)(N,{film:v}),(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)(D.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",margin:"auto"}),children:(0,p.jsx)(w.j3,{})})]})}}}]);
//# sourceMappingURL=193.e26c6e11.chunk.js.map