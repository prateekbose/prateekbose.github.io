(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{36:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),i=n.n(o),s=n(12),r=n.n(s),a=n(3),l=n(8),d=n.n(l),u=n(2),j=n(37),b=function(e){var t=e.navOpen,n=e.setNavOpen,o=e.nextPage,i=e.setItemType,s=e.redirect,r=Object(u.b)({opacity:1,from:{opacity:0},delay:9400,config:{duration:600,easing:j.a}});return Object(c.jsxs)(u.a.nav,{style:r,className:t?"nav-active":"",children:[Object(c.jsx)("h1",{children:"Prateek Bose"}),Object(c.jsxs)("div",{className:"nav-links",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h1",{onClick:function(){return o(e="Projects"),void i(e);var e},children:"Projects"})}),Object(c.jsx)("h1",{className:"nav-link-contact",onClick:function(){return s("mailto:prateekbose20011@gmail.com?body=Hi!")},children:"Contact"})]}),Object(c.jsxs)("div",{className:"burger ".concat(t?"burger-active":""),children:[Object(c.jsx)("h2",{children:Object(c.jsx)(d.a,{text:"".concat(t?"Close":"Menu"),springConfig:l.presets.default,delay:600})}),Object(c.jsxs)("div",{className:"burger-icon",onClick:n,children:[Object(c.jsx)("div",{className:"burger-line line1"}),Object(c.jsx)("div",{className:"burger-line line2"}),Object(c.jsx)("div",{className:"burger-line line3"})]})]})]})},f=function(){var e=document.querySelector(".loader"),t=document.querySelector(".loader h1"),n=document.querySelector("#root");return Object(o.useEffect)((function(){document.addEventListener("readystatechange",(function(c){"complete"===c.target.readyState&&(t.classList.remove("blink"),t.classList.add("hide"),setInterval((function(){t.innerHTML="Hello.",setTimeout((function(){t.classList.remove("hide")}),300)}),300),setTimeout((function(){n.classList.remove("loading"),e.classList.add("hide")}),1600)),"loading"!==c.target.readyState&&"interactive"!==c.target.readyState||(e.current.style.opacity=1)}))}),[]),null},m=function(e){e.fontSize,e.setPage;var t=e.page,n=(e.nextPage,e.setItemType,["Travelaholic","hungri","mindfull"]),i=document.querySelector("html"),s=Object(o.useRef)(null),r=Object(o.useRef)(null),l=Object(o.useState)(0),d=Object(a.a)(l,2),b=d[0],f=d[1],m=Object(o.useState)("down"),h=Object(a.a)(m,2),g=(h[0],h[1]),v=Object(o.useState)(!1),O=Object(a.a)(v,2),p=O[0],x=O[1],y=Object(o.useState)(!1),w=Object(a.a)(y,2),k=w[0],S=w[1],L=Object(o.useState)(0),P=Object(a.a)(L,2),T=P[0],N=P[1],I=Object(u.b)({to:{opacity:1},from:{opacity:0},delay:9400,config:{duration:600,easing:j.a}}),C=function(){var e=window.scrollY;g(e>b?"down":"up"),f(e),x(e>=s.current.offsetTop),setTimeout((function(){S(e>=s.current.offsetTop)}),300),e>=s.current.offsetTop?(i.classList.add("html-project-active"),E(T+1)):i.classList.remove("html-project-active")},E=function e(t){if(window.scrollY>=s.current.offsetTop){console.log(t%n.length),setTimeout((function(){S(!0)}),300);setTimeout((function(){window.scrollY>=s.current.offsetTop&&(N(t%n.length),S(!1),e(t+1))}),1e4)}};return Object(o.useEffect)((function(){return window.addEventListener("scroll",C),function(){return window.removeEventListener("scroll",C)}}),[]),[Object(c.jsx)(u.a.div,{className:"image-holder".concat(p&&"Home"===t?" image-holder-active":""),style:Object(u.b)({from:{marginLeft:-50,opacity:0},to:{marginLeft:0,opacity:1},delay:8200,config:{duration:600,easing:j.a}}),ref:s,children:Object(c.jsxs)("div",{className:"project".concat(p?" project-active":""," ").concat(["proj-one","proj-two","proj-three"][T%3]),children:[Object(c.jsx)("h1",{children:"Work"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(u.a.h1,{className:"".concat(k&&"Home"===t?"active-header":""),children:n[T%3]}),Object(c.jsx)("div",{className:"project-loader",ref:r})]})]})}),Object(c.jsxs)(u.a.div,{className:"side-links-left ".concat(p&&"Home"===t?"side-links-left-dark":""),style:I,children:[Object(c.jsx)("a",{href:"https://www.linkedin.com/in/prateek-bose-790a4316b/",children:Object(c.jsx)("h1",{children:"linkedin"})}),Object(c.jsx)("a",{href:"https://github.com/prateekbose",children:Object(c.jsx)("h1",{children:"github"})})]}),Object(c.jsx)(u.a.h1,{className:"side-links-right ".concat(p&&"Home"===t?"hide-text":""),style:I,children:"\u27f5 scroll to see more"}),Object(c.jsx)(u.a.h1,{className:"side-links-right see-more".concat(p&&"Home"===t?" see-more-active":""),style:I,children:"see more work in projects section"})]},h=function(e){var t=e.children,n=e.bold;return t.map((function(e,t){return Object(c.jsx)(u.a.span,{style:(o=t,Object(u.b)({to:{opacity:1,marginLeft:0},from:{opacity:0,marginLeft:-20},delay:750*o+3600,config:{mass:2,easing:j.a}})),className:"".concat(n.includes(e)?"header-bold":""),children:e},t);var o}))},g=function(e){var t=e.fontSize,n=e.setPage,i=e.page,s=e.html,r="I'm Prateek, a \nUI/UX Designer \nand a \nFront-End Web Developer\n. Striving to create amazing experiences\n, on web and mobile devices.".split("\n"),a=Object(u.b)({to:{marginTop:0},from:{marginTop:window.innerHeight/4},delay:7800,config:{duration:600,easing:j.a}});return Object(o.useEffect)((function(){s.classList.add("no-scroll"),setTimeout((function(){s.classList.remove("no-scroll")}),8800)})),[Object(c.jsx)("div",{className:"hero",children:Object(c.jsx)(u.a.h1,{className:"hero-header",style:a,children:Object(c.jsx)(h,{bold:["UI/UX Designer ","Front-End Web Developer"],children:r})})}),Object(c.jsx)(m,{fontSize:t,setPage:n,page:i})]},v=function e(t){t.fontSize;var n=t.navOpen,o=t.nextPage,i=t.setItemType,s=t.redirect,r=function(e){return Object(u.b)({from:{marginLeft:-10,opacity:0},to:{marginLeft:n?-10:0,opacity:n?1:0},delay:1200+150*e,config:{duration:450,easing:j.a}})};return Object(c.jsxs)(u.a.div,{className:"menu ".concat(n?"menu-active":""),style:e,children:[Object(c.jsxs)("div",{className:"menu-links",children:[Object(c.jsx)(u.a.h1,{style:r(2),onClick:function(){return o(e="Projects"),void i(e);var e},children:"Projects"}),Object(c.jsx)(u.a.h1,{style:r(3),onClick:function(){return s("https://github.com/prateekbose")},children:"GitHub"}),Object(c.jsx)(u.a.h1,{style:r(4),onClick:function(){return s("https://www.linkedin.com/in/prateek-bose-790a4316b/")},children:"LinkedIn"})]}),Object(c.jsxs)("div",{className:"menu-buttons",children:[Object(c.jsx)("button",{onClick:function(){return s("https://www.linkedin.com/in/prateek-bose-790a4316b/")},children:"Message"}),Object(c.jsx)("button",{onClick:function(){return s("mailto:prateekbose20011@gmail.com?body=Hi!")},children:"Mail"})]})]})},O=Object(o.lazy)((function(){return n.e(3).then(n.bind(null,41))})),p=Object(o.lazy)((function(){return n.e(4).then(n.bind(null,43))})),x=Object(o.lazy)((function(){return n.e(5).then(n.bind(null,40))})),y=function(){var e=Object(o.useRef)(null),t=Object(o.useState)(0),n=Object(a.a)(t,2),i=n[0],s=n[1],r=Object(o.useState)(!1),l=Object(a.a)(r,2),d=l[0],u=l[1],j=document.querySelector("html"),m=Object(o.useState)("Home"),h=Object(a.a)(m,2),y=h[0],w=h[1],k=Object(o.useState)([]),S=Object(a.a)(k,2),L=S[0],P=S[1],T=Object(o.useState)("Projects"),N=Object(a.a)(T,2),I=N[0],C=N[1],E=Object(o.useState)(0),z=Object(a.a)(E,2),W=z[0],H=z[1];Object(o.useEffect)((function(){console.log(y),"Item"===y&&d?j.classList.remove("no-scroll"):d&&(j.classList.add("no-scroll"),j.classList.remove("html-project-active"))}),[y]);var D=function(e){var t=L;t.push(y),P(t),w(e),d&&u(!1),"Item"===e&&j.classList.remove("no-scroll")},F=function(){"Item"===L.pop()&&P([]),w("Home"),j.classList.remove("html-project-active"),d&&u(!1)};Object(o.useEffect)((function(){var t=window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size");s(parseInt(t,10)),console.log("FONT SIZE: ".concat(i)),console.log(e)}),[]),Object(o.useEffect)((function(){d?j.classList.add("no-scroll"):j.classList.remove("no-scroll")}),[d]);var U=function(e){window.location.href=e};return[Object(c.jsx)(f,{}),Object(c.jsx)(b,{navOpen:d,setNavOpen:function(){u(!d)},page:y,nextPage:D,setItemType:C,redirect:U}),Object(c.jsx)(v,{fontSize:i,navOpen:d,setPage:w,nextPage:D,setItemType:C,redirect:U}),Object(c.jsx)(g,{fontSize:i,setPage:w,page:y,html:j,nextPage:D,setItemType:C}),Object(c.jsxs)(o.Suspense,{fallback:Object(c.jsx)("div",{}),children:[Object(c.jsx)(p,{fontSize:i,page:y,prevPage:F,Works:["Dummy Work One","Dummy Work Two"],nextPage:D,setItemIndex:H}),Object(c.jsx)(x,{fontSize:i,page:y,prevPage:F,Projects:["travelaholic","hungri","mindfull"],nextPage:D,setItemIndex:H})]}),Object(c.jsx)(o.Suspense,{fallback:Object(c.jsx)("div",{}),children:Object(c.jsx)(O,{itemType:I,itemIndex:W,fontSize:i,page:y,setPrev:F,html:j})})]},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))},L=function(){return Object(o.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.jsx)(y,{})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):k(t,e)}))}}(),S()}},[[36,1,2]]]);
//# sourceMappingURL=main.cef9d648.chunk.js.map