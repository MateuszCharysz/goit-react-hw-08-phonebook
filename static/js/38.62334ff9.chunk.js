"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[38],{294:function(e,t,a){var n=a(439),o=a(791),r=a(893),s=a(434),l=a(783),i=a(184);t.Z=function(e){var t=e.typeOfForm;console.log(t);var a=(0,o.useState)(""),u=(0,n.Z)(a,2),c=u[0],m=u[1],d=(0,o.useState)(""),f=(0,n.Z)(d,2),g=f[0],h=f[1],p=(0,o.useState)(""),b=(0,n.Z)(p,2),v=b[0],x=b[1],Z=(0,s.I0)(),j=function(e,t,a,n){"Register"===e?(console.log("handleSubmitReg"),function(e,t,a){var n={name:"".concat(e),email:"".concat(t),password:"".concat(a)};Z(l.Z.register(n))}(t,a,n)):(console.log("handleSubmitLog"),function(e,t){var a={email:e,password:t};console.log(typeof e),Z(l.Z.logIn(a))}(a,n))},w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?h(n):"name"===a?m(n):x(n)};return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(t,c,g,v),function(e){"Register"===e?(m(""),h(""),x("")):(h(""),x(""))}()},children:["Register"===t&&(0,i.jsx)(r.Z,{label:"User Name",type:"text",dataName:"name",title:"User name for server",required:!0,funcChange:w,stateField:c}),(0,i.jsx)(r.Z,{label:"Email",type:"email",dataName:"email",title:"Should look like smth@and.so.on",required:!0,funcChange:w,stateField:g}),(0,i.jsx)(r.Z,{label:"Password",type:"password",dataName:"password",title:"Should be secret",required:!0,funcChange:w,stateField:v}),(0,i.jsx)("button",{type:"submit",children:"Register"===t?t:"Log In"})]})}},38:function(e,t,a){a.r(t);a(791);var n=a(270),o=a(294),r=a(184);t.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.q,{children:(0,r.jsx)("title",{children:"Login"})}),(0,r.jsx)(o.Z,{typeOfForm:"Login"})]})}}}]);
//# sourceMappingURL=38.62334ff9.chunk.js.map