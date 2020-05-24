(this["webpackJsonpintro-signup"]=this["webpackJsonpintro-signup"]||[]).push([[0],{10:function(e,n,r){e.exports=r.p+"static/media/bg-intro-desktop.eb8c9c16.png"},11:function(e,n,r){e.exports=r.p+"static/media/bg-intro-mobile.3e78c71a.png"},15:function(e,n,r){e.exports=r.p+"static/media/icon-error.eb2c6ce2.svg"},17:function(e,n,r){e.exports=r(25)},22:function(e,n,r){},25:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(9),i=r.n(o),c=(r(22),r(16)),l=r(1),u=r(2),s=r(10),d=r.n(s),m=r(11),p=r.n(m);function b(){var e=Object(l.a)(["\n    font-size: .8rem;\n    text-align: right;\n    color: var(--red);\n    position: relative;\n    bottom: 10px;\n"]);return b=function(){return e},e}function g(){var e=Object(l.a)(["\n    background: var(--blue);\n    text-align: center;\n    padding: 1em;\n    border-radius: 5px;\n    box-shadow: 0px 5px 0px rgba(0, 0, 0, .1);\n"]);return g=function(){return e},e}function h(){var e=Object(l.a)(["\n    font-size: 1.5rem;\n    @media (min-width: 600px) {\n        font-size: 2.5rem;\n    }\n"]);return h=function(){return e},e}function v(){var e=Object(l.a)([""]);return v=function(){return e},e}var f=u.c.p(v()),x=u.c.h1(h()),w=Object(u.c)(f)(g()),y=Object(u.c)(f)(b());function E(){var e=Object(l.a)(["\n    border: 1px solid var(--grayishblue);\n    border-radius: 5px;\n    padding: 2em;\n    background: white;\n    text-align: center;\n    color: var(--grayishblue);\n"]);return E=function(){return e},e}var j=u.c.form(E());function O(){var e=Object(l.a)(["\n    color: var(--grayishblue);\n    font-size: .8rem;\n    width: 90%;\n    margin: 0 auto;\n\n    a {\n        color: var(--red);\n        font-weight: bold;\n        cursor: pointer;\n    }\n"]);return O=function(){return e},e}var k=u.c.p(O());function N(){var e=Object(l.a)(["\n    text-align: center;\n    margin-bottom: 4em;\n    \n    @media (min-width: 600px) {\n        text-align: left;\n        align-self: center;\n        margin-right: 20px;\n    }\n"]);return N=function(){return e},e}var C=u.c.div(N());function z(){var e=Object(l.a)(["\n    text-align: center;\n    padding: 1em;\n    box-shadow: 0px 5px 0px var(--greenborder);\n    background: var(--green);\n    text-transform: uppercase;\n    border: none;\n    width: 100%;\n    border-radius: 5px;\n    color: white;\n    font-weight: bold;\n    margin-bottom: 1em;\n    font-size: 1.03rem;\n    outline: none;\n    transition: 0.5s;\n\n    &:hover, &:active {\n        opacity: .5;\n    }\n"]);return z=function(){return e},e}var T=u.c.button(z());function L(){var e=Object(l.a)(["\n    border: 1px solid var(--grayishblue);\n    border-radius: 5px;\n    padding: 1em;\n    display: block;\n    outline: none;\n    width: 100%;\n    margin-bottom: 1em;\n    font-size: 1.1rem;\n\n    &:focus {\n        border: 1px solid black;\n    }\n\n"]);return L=function(){return e},e}var P=u.c.input(L()),S=r(15),B=r.n(S);function F(){var e=Object(l.a)(["\n    &:after {\n        background: url(",");\n        content: '';\n        width: 24px;\n        height: 24px;\n        position: absolute;\n        top: 15px;\n        right: 15px;\n        transition: .5s;\n    }"]);return F=function(){return e},e}function V(){var e=Object(l.a)(["\n    position: relative;\n    ","\n"]);return V=function(){return e},e}var W=u.c.div(V(),(function(e){return e.error&&Object(u.b)(F(),B.a)}));function $(e){var n=e.placeholder,r=e.name,t=e.error,o=e.errorText,i=e.onChange,c=e.value,l=e.type;return a.a.createElement(W,{error:t},a.a.createElement(P,{type:l,placeholder:n,value:c,onChange:i,name:r,"aria-label":r}),t&&a.a.createElement(y,null,o||"Invalid input"))}var I=a.a.createContext({}),J=(I.Provider,I.Consumer,r(4)),A=r(5),D={firstName:"",lastName:"",email:"",password:"",clicked:!1};function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0,r=n.type,t=n.payload;switch(r){case"changeVal":var a=t.name,o=t.value;return Object(A.a)(Object(A.a)({},e),{},Object(J.a)({},a,o));case"reset":return Object(A.a)({},D);default:return e}}function R(){var e=Object(l.a)(["\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n:root {\n  --red: hsl(0, 100%, 74%);\n  --green: hsl(154, 59%, 51%);\n  --greenborder: hsl(154, 59%, 40%);\n  --blue: hsl(248, 32%, 49%);\n  --darkblue: hsl(249, 10%, 26%);\n  --grayishblue: hsl(246, 25%, 77%);\n}\nbody {\n  background: var(--red) url(",");\n  font-family: 'Poppins', sans-serif;\n  color: white;\n\n  @media (min-width: 600px) {\n    background: var(--red) url(",");\n  }\n}\n.app {\n  width: min(1200px, 100%);\n  padding: 5em 2.5em;\n  margin: 0 auto;\n\n  @media (min-width: 600px) {\n    display: flex;\n  }\n\n  div {\n    flex: 50% 1 1;\n  }\n}\n"]);return R=function(){return e},e}var q=Object(u.a)(R(),p.a,d.a);var G=function(){var e=Object(t.useReducer)(M,D),n=Object(c.a)(e,2),r=n[0],o=r.firstName,i=r.lastName,l=r.email,u=r.password,s=r.clicked,d=n[1],m=function(e){return function(n){return d({type:"changeVal",payload:{name:e,value:n.target.value}})}},p=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(l);return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,null),a.a.createElement("main",{className:"app"},a.a.createElement(C,null,a.a.createElement(x,null,"Learn to code by watching others"),a.a.createElement(f,null,"See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.")),a.a.createElement("div",null,a.a.createElement(w,null,a.a.createElement("strong",null,"Try it free 7 days")," then $20/mo. thereafter"),a.a.createElement(j,{onSubmit:function(e){e.preventDefault(),d({type:"changeVal",payload:{name:"clicked",value:!0}}),o&&i&&l&&u&&p&&d({type:"reset"})}},a.a.createElement($,{value:o,error:s&&!o,name:"firstName",errorText:"First Name cannot be empty",placeholder:"First Name",onChange:m("firstName")}),a.a.createElement($,{value:i,error:s&&!i,name:"lastName",errorText:"Last Name cannot be empty",placeholder:"Last Name",onChange:m("lastName")}),a.a.createElement($,{value:l,error:s&&(!l||!p),name:"email",errorText:l&&!p?"Looks like this is not an email":"Email cannot be empty",placeholder:"Email Address",onChange:m("email")}),a.a.createElement($,{value:u,error:s&&!u,name:"password",errorText:"Password cannot be empty",placeholder:"Password",type:"password",onChange:m("password")}),a.a.createElement(T,null,"Claim your free trial"),a.a.createElement(k,null,"By clicking the button, you are agreeing to our ",a.a.createElement("a",{href:"#"},"Terms and Services"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.690f208b.chunk.js.map