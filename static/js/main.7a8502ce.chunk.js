(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{36:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),o=c.n(a),s=c(12),i=c.n(s),r=c(3),l=c(8),j=c.n(l),u=c(2),d=c(37),b=function(e){var t=e.navOpen,c=e.setNavOpen,a=e.nextPage,o=Object(u.b)({opacity:1,from:{opacity:0},delay:9400,config:{duration:600,easing:d.a}});return Object(n.jsxs)(u.a.nav,{style:o,className:t?"nav-active":"",children:[Object(n.jsx)("h1",{children:"Prateek Bose"}),Object(n.jsxs)("div",{className:"nav-links",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{onClick:function(){return a("Projects")},children:"Projects"}),Object(n.jsx)("h1",{children:"Work"})]}),Object(n.jsx)("h1",{className:"nav-link-contact",children:"Contact"})]}),Object(n.jsxs)("div",{className:"burger ".concat(t?"burger-active":""),children:[Object(n.jsx)("h2",{children:Object(n.jsx)(j.a,{text:"".concat(t?"Close":"Menu"),springConfig:l.presets.default,delay:600})}),Object(n.jsxs)("div",{className:"burger-icon",onClick:function(){c(!t)},children:[Object(n.jsx)("div",{className:"burger-line line1"}),Object(n.jsx)("div",{className:"burger-line line2"}),Object(n.jsx)("div",{className:"burger-line line3"})]})]})]})},f=function(){var e=document.querySelector(".loader"),t=document.querySelector(".loader h1"),c=document.querySelector("#root");return Object(a.useEffect)((function(){document.addEventListener("readystatechange",(function(n){"complete"===n.target.readyState&&(t.classList.remove("blink"),t.classList.add("hide"),setInterval((function(){t.innerHTML="Hello.",setTimeout((function(){t.classList.remove("hide")}),300)}),300),setTimeout((function(){c.classList.remove("loading"),e.classList.add("hide")}),1600)),"loading"!==n.target.readyState&&"interactive"!==n.target.readyState||(e.current.style.opacity=1)}))}),[]),null},m=function(e){e.fontSize,e.setPage;var t=["Dummy One","Dummy Two"],c=document.querySelector("html"),o=Object(a.useRef)(null),s=Object(a.useRef)(null),i=Object(a.useState)(0),l=Object(r.a)(i,2),j=l[0],b=l[1],f=Object(a.useState)("down"),m=Object(r.a)(f,2),h=(m[0],m[1]),O=Object(a.useState)(!1),g=Object(r.a)(O,2),p=g[0],v=g[1],y=Object(a.useState)(!1),x=Object(r.a)(y,2),S=x[0],w=x[1],N=Object(a.useState)(0),k=Object(r.a)(N,2),L=k[0],P=k[1],T=Object(u.b)({to:{opacity:1},from:{opacity:0},delay:9400,config:{duration:600,easing:d.a}}),C=function(){var e=window.scrollY;h(e>j?"down":"up"),b(e),v(e>=o.current.offsetTop),setTimeout((function(){w(e>=o.current.offsetTop)}),300),e>=o.current.offsetTop?(c.style.backgroundColor="#202020",D(L+1)):c.style.backgroundColor="#ffffff"},D=function e(c){if(window.scrollY>=o.current.offsetTop){console.log(c%t.length),setTimeout((function(){w(!0)}),300);setTimeout((function(){window.scrollY>=o.current.offsetTop&&(P(c%t.length),w(!1),e(c+1))}),1e4)}};return Object(a.useEffect)((function(){return window.addEventListener("scroll",C),function(){return window.removeEventListener("scroll",C)}}),[]),[Object(n.jsx)(u.a.div,{className:"image-holder".concat(p?" image-holder-active":""),style:Object(u.b)({from:{marginLeft:-50,opacity:0},to:{marginLeft:0,opacity:1},delay:8200,config:{duration:600,easing:d.a}}),ref:o,children:Object(n.jsxs)("div",{className:"project".concat(p?" project-active":""," ").concat(["proj-one","proj-two"][L%2]),children:[Object(n.jsx)("h1",{children:"Work"}),Object(n.jsxs)("div",{children:[Object(n.jsx)(u.a.h1,{className:"".concat(S?"active-header":""),children:t[L%2]}),Object(n.jsx)("div",{className:"project-loader",ref:s})]})]})}),Object(n.jsxs)(u.a.div,{className:"side-links-left ".concat(p?"side-links-left-dark":""),style:T,children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/prateek-bose-790a4316b/",children:Object(n.jsx)("h1",{children:"linkedin"})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("h1",{children:"behance"})}),Object(n.jsx)("a",{href:"https://github.com/prateekbose",children:Object(n.jsx)("h1",{children:"github"})})]}),Object(n.jsx)(u.a.h1,{className:"side-links-right ".concat(p?"hide-text":""),style:T,children:"\u27f5 scroll to see more"}),Object(n.jsx)(u.a.h1,{className:"side-links-right see-more".concat(p?" see-more-active":""),style:T,children:"see more work"})]},h=function(e){var t=e.children,c=e.bold;return t.map((function(e,t){return Object(n.jsx)(u.a.span,{style:(a=t,Object(u.b)({to:{opacity:1,marginLeft:0},from:{opacity:0,marginLeft:-20},delay:750*a+3600,config:{mass:2,easing:d.a}})),className:"".concat(c.includes(e)?"header-bold":""),children:e},t);var a}))},O=function(e){var t=e.fontSize,c=e.setPage,a="I'm Prateek, a \nUI/UX Designer \nand a \nFull-Stack Web Developer\n. Specialized on creating amazing experiences\n, on web and mobile devices.".split("\n"),o=Object(u.b)({to:{marginTop:0},from:{marginTop:window.innerHeight/4},delay:7800,config:{duration:600,easing:d.a}});return[Object(n.jsx)("div",{className:"hero",children:Object(n.jsx)(u.a.h1,{className:"hero-header",style:o,children:Object(n.jsx)(h,{bold:["UI/UX Designer ","Full-Stack Web Developer"],children:a})})}),Object(n.jsx)(m,{fontSize:t,setPage:c})]},g=function(e){e.fontSize;var t=e.navOpen,c=e.nextPage,a=function(e){return Object(u.b)({from:{marginLeft:-10,opacity:0},to:{marginLeft:t?-10:0,opacity:t?1:0},delay:1200+150*e,config:{duration:450,easing:d.a}})};return Object(n.jsxs)("div",{className:"menu ".concat(t?"menu-active":""),children:[Object(n.jsxs)("div",{className:"menu-links",children:[Object(n.jsx)(u.a.h1,{style:a(0),children:"Home"}),Object(n.jsx)(u.a.h1,{style:a(1),children:"Work"}),Object(n.jsx)(u.a.h1,{style:a(2),onClick:function(){return c("Projects")},children:"Projects"}),Object(n.jsx)(u.a.h1,{style:a(3),children:"About"}),Object(n.jsx)(u.a.h1,{style:a(4),children:"Contact"})]}),Object(n.jsxs)("div",{className:"menu-buttons",children:[Object(n.jsx)("button",{children:"Message"}),Object(n.jsx)("button",{children:"Mail"})]})]})},p=c.p+"static/media/proj-one.f543c2f4.png",v=c.p+"static/media/proj-two.626659fd.png",y=function(e){var t=e.fontSize,c=e.page,o=e.prevPage,s=[p,v,p,v],i=Object(a.useState)(null),l=Object(r.a)(i,2),j=l[0],b=l[1],f=Object(u.b)({from:{marginLeft:-100*t,opacity:0},to:{marginLeft:"Projects"===c?0:-100*t,opacity:"Projects"===c?1:0},delay:300,config:{duration:1200,easing:d.a}}),m=function(e){return Object(u.b)({from:{width:0,opacity:0,height:24*t},to:{width:e===j?32*t:0,opacity:e===j?1:0,height:24*t},config:{duration:450,easing:d.a}})},h=function(e){return Object(u.b)({from:{marginLeft:-10,opacity:0},to:{marginLeft:"Projects"===c?0:-10,opacity:"Projects"===c?1:0},delay:1400+150*e,config:{duration:450,easing:d.a}})};return Object(n.jsxs)(u.a.div,{className:"project-section",style:f,children:[Object(n.jsxs)(u.a.div,{className:"section-burger",onClick:function(){return o()},style:Object(u.b)({from:{opacity:0},to:{opacity:"Projects"===c?1:0},delay:1600,config:{duration:450,easing:d.a}}),children:[Object(n.jsx)("div",{className:"line line1"}),Object(n.jsx)("div",{className:"line line2"})]}),Object(n.jsx)("div",{className:"project-item-section",children:["Dummy One","Dummy Two","Dummy Three","Dummy Four"].map((function(e,t){return Object(n.jsxs)(u.a.div,{className:"project-item",style:h(t),children:[Object(n.jsx)("h1",{onMouseEnter:function(){return b(t)},onMouseLeave:function(){return b(null)},children:e}),Object(n.jsx)("p",{children:"quisque egestas diam in arcu cursus euismod quis viverra nibh"}),Object(n.jsx)(u.a.img,{src:s[t],alt:"".concat(e," Demo"),style:m(t)})]})}))})]})},x=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(0),c=Object(r.a)(t,2),o=c[0],s=c[1],i=Object(a.useState)(!1),l=Object(r.a)(i,2),j=l[0],u=l[1],d=(document.querySelector("#root"),document.querySelector("html")),m=(document.querySelector(".loader"),Object(a.useState)("Home")),h=Object(r.a)(m,2),p=h[0],v=h[1],x=Object(a.useState)([""]),S=Object(r.a)(x,2),w=S[0],N=S[1],k=function(e){var t=w;t.push(p),N(t),v(e),console.log(w)};return Object(a.useEffect)((function(){var t=window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size");s(parseInt(t,10)),console.log("FONT SIZE: ".concat(o)),console.log(e)}),[]),Object(a.useEffect)((function(){j?d.classList.add("no-scroll"):d.classList.remove("no-scroll")}),[j]),[Object(n.jsx)(f,{}),Object(n.jsx)(b,{navOpen:j,setNavOpen:u,page:p,nextPage:k}),Object(n.jsx)(g,{fontSize:o,navOpen:j,setPage:v,nextPage:k}),Object(n.jsx)(O,{}),Object(n.jsx)(y,{fontSize:o,page:p,prevPage:function(){var e=w,t=e.pop();N(e),v(t)}})]},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),o(e),s(e)}))},w=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsx)(x,{})};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),S()}},[[36,1,2]]]);
//# sourceMappingURL=main.7a8502ce.chunk.js.map