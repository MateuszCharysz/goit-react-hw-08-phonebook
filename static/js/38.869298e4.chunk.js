"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[38],{222:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(439),n=a(791),s=a(893),o=a(434),i=a(812),l="UserForm_container__xFaPB",c="UserForm_form__jvpq-",u="UserForm_btn__MM6cQ",m=a(184),d=function(e){var t=e.typeOfForm,a=(0,n.useState)(""),d=(0,r.Z)(a,2),f=d[0],h=d[1],p=(0,n.useState)(""),g=(0,r.Z)(p,2),_=g[0],b=g[1],v=(0,n.useState)(""),Z=(0,r.Z)(v,2),x=Z[0],j=Z[1],w=(0,o.I0)(),F=function(e,t,a,r){"Register"===e?function(e,t,a){if(a.length<6)alert("Password must be at least 7 characters long");else{var r={name:"".concat(e),email:"".concat(t),password:"".concat(a)};w(i.Z.register(r))}}(t,a,r):function(e,t){var a={email:e,password:t};w(i.Z.logIn(a))}(a,r)},k=function(e){var t=e.target,a=t.name,r=t.value;"email"===a?b(r):"name"===a?h(r):j(r)};return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F(t,f,_,x),function(e){"Register"===e?(h(""),b(""),j("")):(b(""),j(""))}()},className:l+" "+c,children:["Register"===t&&(0,m.jsx)(s.Z,{label:"User Name",type:"text",dataName:"name",title:"User name for server",required:!0,funcChange:k,stateField:f}),(0,m.jsx)(s.Z,{label:"Email",type:"email",dataName:"email",title:"Should look like smth@and.so.on",required:!0,funcChange:k,stateField:_}),(0,m.jsx)(s.Z,{label:"Password",type:"password",dataName:"password",title:"Should be secret",required:!0,funcChange:k,stateField:x}),(0,m.jsx)("button",{type:"submit",className:u,children:"Register"===t?t:"Log In"})]})})}},38:function(e,t,a){a.r(t);a(791);var r=a(33),n=a(222),s=a(184);t.default=function(){return(0,s.jsx)("div",{className:r.Z.background,children:(0,s.jsx)("div",{className:r.Z.container,children:(0,s.jsx)(n.Z,{typeOfForm:"Login"})})})}}}]);
//# sourceMappingURL=38.869298e4.chunk.js.map