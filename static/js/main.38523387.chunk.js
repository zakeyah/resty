(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},39:function(e,t){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(14),s=n.n(c),i=(n(21),n(2)),u=n(3),o=n(5),j=n(4),l=(n(22),n(0)),b=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"RESTy"})})},d=(n(24),function(){return Object(l.jsx)("footer",{children:"\xa9  2021 Code Fellows"})}),h=n(10),O=n.n(h),p=n(15),x=(n(26),n(16)),f=n.n(x),m=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleBtnClick=function(){var t=Object(p.a)(O.a.mark((function t(n){var r,a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=n.target.url.value,t.next=4,f.a.get(r);case 4:a=t.sent,c=a.headers,e.props.handler(a,c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:this.handleBtnClick,children:[Object(l.jsx)("input",{name:"url"}),Object(l.jsx)("button",{tybe:"submit",children:"Go"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",name:"method",value:"GET"}),Object(l.jsx)("label",{children:"GET"}),Object(l.jsx)("input",{type:"radio",name:"method",value:"POST"}),Object(l.jsx)("label",{children:"POST"}),Object(l.jsx)("input",{type:"radio",name:"method",value:"Put"}),Object(l.jsx)("label",{children:"Put"}),Object(l.jsx)("input",{type:"radio",name:"method",value:"Delete"}),Object(l.jsx)("label",{children:"Delete"})]})})}}]),n}(a.a.Component),v=n(11),y=n.n(v),k=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log(this.props.data),Object(l.jsxs)("div",{id:"output",children:[Object(l.jsx)(y.a,{src:this.props.data.headers,name:"headers"}),Object(l.jsx)(y.a,{src:this.props.data.results,name:"response"})]})}}]),n}(a.a.Component),g=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleForm=function(e,t){r.setState({results:e.body,headers:t})},r.state={headers:{},results:{}},r}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(m,{handler:this.handleForm}),Object(l.jsx)(k,{data:this.state}),Object(l.jsx)(d,{})]})}}]),n}(a.a.Component);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.38523387.chunk.js.map