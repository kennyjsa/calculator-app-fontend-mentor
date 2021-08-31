(this["webpackJsonpcalculator-app-fontend-mentor"]=this["webpackJsonpcalculator-app-fontend-mentor"]||[]).push([[0],{21:function(e,n,t){},22:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var r,c,i,a=t(1),o=t.n(a),s=t(10),l=t.n(s),d=t(2),u=t(3),j=u.a.div(r||(r=Object(d.a)(["\n  height: 100vh;\n  width: 100vw;\n\n  background-color: var(--main-background);\n  \n  font-weight: 700;\n  color: var(--text-color-base);\n  \n  display: grid;\n  grid-template-rows: auto 2.5rem;\n"]))),h=u.a.footer(c||(c=Object(d.a)(["\n    font-size: 0.7rem;\n    white-space: nowrap;\n    font-weight: 400;\n    color: var(--text-color-base);\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    a {\n       color: var(--key-background-primary);\n    }\n"]))),b=u.a.main(i||(i=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),f=t(4);function m(){var e={userPrefersDark:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}.userPrefersDark,n=Object(a.useState)(e),t=Object(f.a)(n,2),r=t[0],c=t[1],i=Object(a.useCallback)((function(e){c(e.matches)}),[]);return Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");return e.addEventListener("change",i),function(){e.removeEventListener("change",i)}}),[i]),{darkMode:r}}var x,O=t(0);!function(e){e.theme1="theme1",e.theme2="theme2",e.theme3="theme3"}(x||(x={}));var p,v,k=Object(a.createContext)({}),g=function(e){var n=e.children,t=Object(a.useState)(x.theme1),r=Object(f.a)(t,2),c=r[0],i=r[1],o=m().darkMode;return Object(a.useEffect)((function(){i(o?x.theme1:x.theme2)}),[o]),Object(O.jsx)(k.Provider,{value:{theme:c,setTheme:i},children:Object(O.jsx)("div",{className:c.toString(),children:n})})},w=u.a.div(p||(p=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n\n  width: 327px;\n  font-weight: 700;\n\n  \n  \n  @media (min-width:600px) { \n    width: 540px;\n  }\n"]))),C=u.a.header(v||(v=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  .title{\n    font-size: 2rem;\n  }\n"]))),y=t(6);t(21);var N,E,S,M,z,F=(N={},Object(y.a)(N,x.theme1,"5px"),Object(y.a)(N,x.theme2,"27px"),Object(y.a)(N,x.theme3,"49px"),N),T=function(){var e=function(){var e=Object(a.useContext)(k);return{theme:e.theme,setTheme:e.setTheme}}(),n=e.theme,t=e.setTheme;return Object(O.jsxs)("div",{className:"theme-switch-container",children:[Object(O.jsx)("div",{className:"label",children:"THEME"}),Object(O.jsxs)("div",{className:"theme-switch",children:[Object(O.jsxs)("div",{className:"labels",children:[Object(O.jsx)("div",{onClick:function(){return t(x.theme1)},children:"1"}),Object(O.jsx)("div",{onClick:function(){return t(x.theme2)},children:"2"}),Object(O.jsx)("div",{onClick:function(){return t(x.theme3)},children:"3"})]}),Object(O.jsxs)("div",{className:"switch",children:[Object(O.jsx)("div",{onClick:function(){return t(x.theme1)},className:"item"}),Object(O.jsx)("div",{onClick:function(){return t(x.theme2)},className:"item"}),Object(O.jsx)("div",{onClick:function(){return t(x.theme3)},className:"item"}),Object(O.jsx)("div",{className:"bullet",style:{left:F[n]}})]})]})]})},P=u.a.div(E||(E=Object(d.a)(['\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  background-color: var(--screen-background);\n\n  height: 88px;\n  font-size: 2rem;\n  padding: 0 1.5rem;\n\n  border-radius: var(--border-radius);\n  overflow: hidden;\n\n  position: relative;\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 2.5rem;\n    box-shadow: inset 55px 0px 20px -25px var(--screen-background);\n  }\n\n  @media (min-width: 600px) {\n    height: 128px;\n    font-size: 3rem;\n    padding: 0 2.25rem;\n  }\n']))),D=u.a.div(S||(S=Object(d.a)(["\n  //height: 480px;\n  background-color: var(--keypad-background);\n  padding: 1rem;\n  border-radius: var(--border-radius);\n"]))),J=u.a.div(M||(M=Object(d.a)(["\n  display: flex;\n  align-items: flex-end;\n  border-radius: var(--border-radius);\n\n  gap: 0.813rem;\n  padding: 0.4065rem;\n\n  button {\n    flex: 1;\n  }\n\n  @media (min-width: 600px) {\n    gap: 1.5rem;\n    padding: 0.75rem;\n  }\n"]))),L=u.a.button(z||(z=Object(d.a)(["\n  height: 64px;\n  font-size: ",";\n  font-weight: 700;\n  color: var(--text-color-",");\n  cursor: pointer;\n\n  background-color: var(--key-background-",");\n  border: 0;\n  border-radius: 8px;\n\n  box-shadow: inset 0 -4px 0 0 var(--key-shadow-",");\n\n  transition: all 200ms ease;\n  &:hover {\n    filter: brightness(0.90);\n  }\n\n  &:active{\n    box-shadow: inset 0 -2px 0 0 var(--key-shadow-",");\n    padding-top: 3px;\n    margin-top: 2px;\n    height: 58px;\n    filter: brightness(0.90);\n  }\n\n  @media (min-width:600px) { \n    font-size: ",";\n  }\n"])),(function(e){return"default"===e.intent?"1.75rem":"1rem"}),(function(e){return e.intent}),(function(e){return e.intent}),(function(e){return e.intent}),(function(e){return e.intent}),(function(e){return"default"===e.intent?"2rem":"1.25rem"}));L.defaultProps={intent:"default"};var B=function(){var e=Object(a.useState)(!1),n=Object(f.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)("0"),i=Object(f.a)(c,2),o=i[0],s=i[1],l=Object(a.useState)(null),d=Object(f.a)(l,2),u=d[0],j=d[1],h=Object(a.useState)(null),b=Object(f.a)(h,2),m=b[0],x=b[1],p=function(e){var n=0;t?(n=e,r(!1)):n=parseFloat("".concat(o).concat(e)),s("".concat(n))},v=function(e,n,t){switch(n){case"+":return e+t;case"-":return e-t;case"/":return e/t;case"*":return e*t;default:return 0}},k=function(e){if(!m)return j(e),x(parseFloat(o)),void r(!0);if(m&&u){var n=v(m,u,parseFloat(o));r(!0),x(n),s("".concat(n)),j(e)}};return Object(O.jsxs)(w,{children:[Object(O.jsxs)(C,{children:[Object(O.jsx)("div",{className:"title",children:"calc"}),Object(O.jsx)(T,{})]}),Object(O.jsx)(P,{children:o}),Object(O.jsxs)(D,{children:[Object(O.jsxs)(J,{children:[Object(O.jsx)(L,{onClick:function(){return p(7)},children:"7"}),Object(O.jsx)(L,{onClick:function(){return p(8)},children:"8"}),Object(O.jsx)(L,{onClick:function(){return p(9)},children:"9"}),Object(O.jsx)(L,{intent:"secondary",onClick:function(){var e="".concat(o.substring(0,o.length-1)),n=parseFloat(e);isNaN(n)&&(n=0),s("".concat(n))},children:"DEL"})]}),Object(O.jsxs)(J,{children:[Object(O.jsx)(L,{onClick:function(){return p(4)},children:"4"}),Object(O.jsx)(L,{onClick:function(){return p(5)},children:"5"}),Object(O.jsx)(L,{onClick:function(){return p(6)},children:"6"}),Object(O.jsx)(L,{onClick:function(){return k("+")},children:"+"})]}),Object(O.jsxs)(J,{children:[Object(O.jsx)(L,{onClick:function(){return p(1)},children:"1"}),Object(O.jsx)(L,{onClick:function(){return p(2)},children:"2"}),Object(O.jsx)(L,{onClick:function(){return p(3)},children:"3"}),Object(O.jsx)(L,{onClick:function(){return k("-")},children:"-"})]}),Object(O.jsxs)(J,{children:[Object(O.jsx)(L,{onClick:function(){if(t)s("0."),r(!1);else{if(o.indexOf(".")>-1)return;s("".concat(o,"."))}},children:"."}),Object(O.jsx)(L,{onClick:function(){return p(0)},children:"0"}),Object(O.jsx)(L,{onClick:function(){return k("/")},children:"/"}),Object(O.jsx)(L,{onClick:function(){return k("*")},children:"x"})]}),Object(O.jsxs)(J,{children:[Object(O.jsx)(L,{intent:"secondary",onClick:function(){s("0"),x(0),j(null)},children:"RESET"}),Object(O.jsx)(L,{intent:"primary",onClick:function(){if(m&&u){var e=v(m,u,parseFloat(o));x(null),j(null),r(!0),s("".concat(e))}},children:"="})]})]})]})},H=(t(22),function(){return Object(O.jsx)(g,{children:Object(O.jsxs)(j,{children:[Object(O.jsx)(b,{children:Object(O.jsx)(B,{})}),Object(O.jsxs)(h,{children:["Challenge by\xa0",Object(O.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",rel:"noreferrer",target:"_blank",children:"Frontend Mentor"}),". Coded by\xa0",Object(O.jsx)("a",{href:"https://github.com/kennyjsa",children:"Kenny Johnson"}),"."]})]})})});l.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(H,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4ea5e4f8.chunk.js.map