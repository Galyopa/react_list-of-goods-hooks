(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s,c=n(9),a=n.n(c),o=n(3),i=n(1),r=(n(16),n(11)),l=n(10),u=n(0);!function(e){e[e.len=0]="len",e[e.alphabet=1]="alphabet",e[e.reset=2]="reset"}(s||(s={}));var b=function(e){var t=Object(i.useState)(!1),n=Object(o.a)(t,2),c=n[0],a=n[1],b=Object(i.useState)(s.reset),j=Object(o.a)(b,2),d=j[0],h=j[1],m=Object(i.useState)(1),O=Object(o.a)(m,2),p=O[0],f=O[1],x=e.goods.filter((function(e){return e.length>=p})),g=Object(l.a)(x).slice(0);g.sort((function(e,t){switch(d){case s.len:return e.length-t.length;case s.alphabet:return e.localeCompare(t);default:return 0}})),c&&g.reverse();return Object(u.jsxs)("div",{className:"box is-small",children:[Object(u.jsx)("ul",{className:"Goods__list content is-medium",children:g.map((function(e){return Object(u.jsx)("li",{className:"Goods__item",children:e},e)}))}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{className:"button is-success",type:"button",onClick:function(){a(!1),h(s.alphabet)},children:"Sort alphabetically"}),Object(u.jsx)("button",{className:"button is-success",type:"button",onClick:function(){a(!1),h(s.len)},children:"Sort by length"}),Object(u.jsx)("button",{className:"button is-warning",type:"button",onClick:function(){a(!c)},children:"Reverse"}),Object(u.jsx)("button",{className:"button is-danger",type:"button",onClick:function(){a(!1),h(s.reset),f(1)},children:"Reset"})]}),Object(u.jsx)("div",{className:"select is-normal is-rounded",children:Object(u.jsx)("select",{name:"minLen",id:"minLen",value:p,onChange:function(e){f(Number(e.target.value))},children:Object(r.a)(new Array(10)).map((function(e,t){return Object(u.jsx)("option",{value:t+1,children:t+1})}))})})]})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(u.jsxs)("div",{className:"App container is-fluid",children:[Object(u.jsx)("h1",{className:"title is-1",children:"Goods"}),n?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{className:"button is-success",type:"button",onClick:function(){return s(!1)},children:"Start"})}):Object(u.jsx)(b,{goods:j})]})};a.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fe0bed67.chunk.js.map