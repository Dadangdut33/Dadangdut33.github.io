(this.webpackJsonpresource=this.webpackJsonpresource||[]).push([[0],{42:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),l=a(12),n=a.n(l),r=(a(18),a(19),a(41),a(42),a(2)),i=a(13),o=a.n(i),d=a.p+"static/media/dark.68573fd4.svg",b=a.p+"static/media/light.40331634.svg",j=a(0);function m(){var e=s.a.useState("dark"===localStorage.getItem("bgmode")),t=Object(r.a)(e,2),a=t[0],c=t[1],l=s.a.useState(a?d:b),n=Object(r.a)(l,2),i=n[0],m=n[1],h=function(){c(!0),m(d),document.querySelectorAll(".bg-light").forEach((function(e){e.className=e.className.replace(/-light/g,"-dark")})),document.body.classList.add("bg-dark"),document.body.classList.contains("text-dark")?document.body.classList.replace("text-dark","text-light"):document.body.classList.add("text-light"),document.body.classList.remove("light-scroll"),document.body.classList.add("dark-scroll")},x=function(){c(!1),m(b),document.querySelectorAll(".bg-dark").forEach((function(e){e.className=e.className.replace(/-dark/g,"-light")})),document.body.classList.remove("bg-dark"),document.body.classList.contains("text-light")?document.body.classList.replace("text-light","text-dark"):document.body.classList.add("text-dark"),document.body.classList.remove("dark-scroll"),document.body.classList.add("light-scroll")};return s.a.useEffect((function(){var e=localStorage.getItem("bgmode");if(null==e&&(e=(e=window.matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light",localStorage.setItem("bgmode",e)),"dark"===e){c(!0),m(d);var t=setInterval((function(){o()(".bg-light").length&&(clearInterval(t),h())}),100)}else x()}),[]),Object(j.jsxs)("div",{className:"form-check form-switch ms-auto mt-3 me-3",children:[Object(j.jsx)("label",{className:"form-check-label ms-3",htmlFor:"lightSwitch",style:{marginLeft:"3px"},children:Object(j.jsx)("img",{src:i,className:"bi bi-brightness-high",width:"25",height:"25",fill:"white",alt:"light/dark toggler",viewBox:"0 0 16 16",style:{marginBottom:"7px"}})}),Object(j.jsx)("input",{className:"form-check-input",type:"checkbox",id:"lightSwitch",onChange:function(){var e="dark"===localStorage.getItem("bgmode")?"light":"dark";localStorage.setItem("bgmode",e),"dark"===e?h():x()},checked:a,style:{marginLeft:"0px"}})]})}var h=a(3),x=a.n(h);function g(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){window.onscroll=function(){window.scrollY>400?s(!0):s(!1)}}),[]),Object(j.jsx)(x.a,{top:!0,when:a,children:Object(j.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light border-bottom fixed-top",id:"navbar_top",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"/#",children:Object(j.jsx)("span",{style:{fontSize:"26px"},children:"Dadangdut33"})}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto",style:{fontSize:"20px"},children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#home",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"#contact",children:"x"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"#about",children:"About"})})]}),Object(j.jsx)("div",{className:"d-flex",style:{marginBottom:"7px"},children:Object(j.jsx)(m,{})})]})]})})})}var u=a.p+"static/media/logo.c39392e7.png",O=a(4),f=a.n(O);function v(){return Object(c.useEffect)((function(){document.title="Dadangdut33's Profile"}),[]),Object(j.jsx)("section",{className:"center-flex-column",children:Object(j.jsx)(x.a,{children:Object(j.jsxs)("div",{className:"center-horizontal-vertical",style:{paddingBottom:"70px"},children:[Object(j.jsxs)("div",{className:"flex-dir-row",children:[Object(j.jsxs)("div",{className:"flex-dir-column",children:[Object(j.jsx)("img",{src:u,alt:"Logo",className:"logo-main content center-horizontal"})," ",Object(j.jsxs)("div",{className:"center-horizontal",style:{paddingTop:"4px"},children:[Object(j.jsx)("a",{href:"https://github.com/Dadangdut33",children:Object(j.jsx)("i",{className:"bi bi-github pad-small"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/fauzan-farhan-antoro/",children:Object(j.jsx)("i",{className:"bi bi-linkedin pad-small"})})]})]}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"flex-dir-row persist",children:[Object(j.jsx)("h1",{style:{marginRight:"1rem"},children:Object(j.jsx)("strong",{children:"Hello!"})}),Object(j.jsx)("h1",{style:{marginRight:"0.5rem"},children:"I'm Fauzan"}),Object(j.jsx)("h1",{children:Object(j.jsx)(f.a,{delay:750,children:"\ud83d\udc4b"})})]}),Object(j.jsx)("h2",{className:"lead",children:"Full Stack Developer"}),Object(j.jsxs)("h4",{class:"text-muted",children:["I'm currently pursuing my bachelor degree as an Informatics Engineering Student at"," ",Object(j.jsx)("a",{href:"https://www.uinjkt.ac.id/",className:"subtle-link",children:"UIN Jakarta"}),Object(j.jsx)("br",{}),"I like to learn new things and code for some side projects on my free time."]})]})]}),Object(j.jsx)(f.a,{delay:3e3,children:Object(j.jsx)("div",{className:"center",children:Object(j.jsxs)("a",{className:"btn btn-primary",href:"#about-me",style:{margin:"0 auto"},children:["Read more ",Object(j.jsx)("i",{class:"bi bi-arrow-down-short"})]})})})]})})})}function p(){return Object(j.jsx)("footer",{className:"text-center text-lg-start",children:Object(j.jsxs)("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2021 ",Object(j.jsx)("strong",{children:"Dadangdut33"})]})})}function N(){return Object(j.jsxs)("section",{className:"flex-column",children:[Object(j.jsx)("div",{className:"center-horizontal-vertical",children:Object(j.jsx)("h1",{children:"aaaaaa"})}),Object(j.jsx)(p,{})]})}function k(){return Object(j.jsx)("section",{className:"center-flex-column",children:Object(j.jsx)("div",{className:"center-horizontal-vertical",children:Object(j.jsx)("h1",{children:"aaaaaa"})})})}var y=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{}),Object(j.jsxs)("main",{className:"App",children:[Object(j.jsx)(v,{}),Object(j.jsx)(k,{}),Object(j.jsx)(k,{}),Object(j.jsx)(k,{}),Object(j.jsx)(N,{})]})]})};n.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.3084f949.chunk.js.map