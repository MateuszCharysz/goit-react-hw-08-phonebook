"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[285],{222:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(439),r=a(791),o=a(893),s=a(434),l=a(783),i="UserForm_container__xFaPB",c="UserForm_form__jvpq-",u="UserForm_btn__MM6cQ",m=a(184),d=function(e){var t=e.typeOfForm;console.log(t);var a=(0,r.useState)(""),d=(0,n.Z)(a,2),f=d[0],g=d[1],p=(0,r.useState)(""),h=(0,n.Z)(p,2),b=h[0],_=h[1],v=(0,r.useState)(""),Z=(0,n.Z)(v,2),x=Z[0],F=Z[1],j=(0,s.I0)(),k=function(e,t,a,n){"Register"===e?(console.log("handleSubmitReg"),function(e,t,a){var n={name:"".concat(e),email:"".concat(t),password:"".concat(a)};j(l.Z.register(n))}(t,a,n)):(console.log("handleSubmitLog"),function(e,t){var a={email:e,password:t};console.log(typeof e),j(l.Z.logIn(a))}(a,n))},w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?_(n):"name"===a?g(n):F(n)};return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(t,f,b,x),function(e){"Register"===e?(g(""),_(""),F("")):(_(""),F(""))}()},className:i+" "+c,children:["Register"===t&&(0,m.jsx)(o.Z,{label:"User Name",type:"text",dataName:"name",title:"User name for server",required:!0,funcChange:w,stateField:f}),(0,m.jsx)(o.Z,{label:"Email",type:"email",dataName:"email",title:"Should look like smth@and.so.on",required:!0,funcChange:w,stateField:b}),(0,m.jsx)(o.Z,{label:"Password",type:"password",dataName:"password",title:"Should be secret",required:!0,funcChange:w,stateField:x}),(0,m.jsx)("button",{type:"submit",className:u,children:"Register"===t?t:"Log In"})]})})}},285:function(e,t,a){a.r(t);a(791);var n=a(222),r=a(33),o=a(184);t.default=function(){return(0,o.jsx)("div",{className:r.Z.background,children:(0,o.jsx)(n.Z,{typeOfForm:"Register"})})}}}]);
//# sourceMappingURL=285.60e7525f.chunk.js.map