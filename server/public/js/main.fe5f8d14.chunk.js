(this.webpackJsonpadvcdr=this.webpackJsonpadvcdr||[]).push([[0],{94:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(0),r=n.n(a),i=n(26),s=n.n(i),o=n(22),l=n(5),j=n(2),d=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Home is where the heart is"})})},h=n(27),u=n(28),O=n(34),b=n(32),p="SET_CALLERS_ACTION",x="API_ACTION",m=function(e){return{type:x,payload:e}},f="".concat("http://localhost:3000","/api"),v="".concat(f,"/callers"),g=n(55),y=n(108),A=n(111),E=n(113),S=n(114),T=n(109),C=n(112),_=n(106),I=n(110),N=function(e){var t=e.attempts,n=(e.id,e.handle),c=e.name,a=e.extenstion,r=e.teamId;e.idTeam;return Object(j.jsxs)(_.a,{children:[Object(j.jsx)(S.a,{component:"th",scope:"name",children:c}),Object(j.jsx)(S.a,{align:"right",children:t}),Object(j.jsx)(S.a,{align:"right",children:n}),Object(j.jsx)(S.a,{align:"right",children:a}),Object(j.jsx)(S.a,{align:"right",children:r})]},c)},k=Object(y.a)({table:{minWidth:650}}),w=function(e){var t=k(),n=e.callers;return Object(j.jsx)(T.a,{component:I.a,children:Object(j.jsxs)(A.a,{className:t.table,size:"small","aria-label":"a dense table",children:[Object(j.jsx)(C.a,{children:Object(j.jsxs)(_.a,{children:[Object(j.jsx)(S.a,{align:"right",children:"name"}),Object(j.jsx)(S.a,{children:"attempts"}),Object(j.jsx)(S.a,{align:"right",children:"handle"}),Object(j.jsx)(S.a,{align:"right",children:"extenstion"}),Object(j.jsx)(S.a,{align:"right",children:"teamId"})]})}),Object(j.jsx)(E.a,{children:n.map((function(e,t){return Object(j.jsx)(N,Object(g.a)({},e),t)}))})]})})},D=function(e){Object(O.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.createApiAction({url:v,onSuccess:function(t){e.props.createSetCallersAction(t.data)},onError:function(e){console.log(e)}})}},{key:"render",value:function(){var e=this.props.callers;return Object(j.jsx)("div",{children:Object(j.jsx)(w,{callers:e})})}}]),n}(r.a.PureComponent),M={createSetCallersAction:function(e){return{type:p,payload:e}},createApiAction:m},P=Object(c.c)((function(e){return{callers:e.callers}}),M)(D),J=function(e){Object(O.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:["Teams()",JSON.stringify(this.props.teams)]})}}]),n}(r.a.PureComponent),L={createSetTeamsAction:function(e){return{type:"SET_TEAMS_ACTION",payload:e}},createApiAction:m},H=Object(c.c)((function(e){return{teams:e.teams}}),L)(J),R=n(37),X=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(R.a,{to:"/",children:"Home"}),Object(j.jsx)(R.a,{to:"/callers",children:"Callers"})]})})},z=Object(j.jsxs)("div",{children:[Object(j.jsx)(X,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:d}),Object(j.jsx)(l.a,{path:"/callers",component:P}),Object(j.jsx)(l.a,{path:"/teams",component:H})]})]}),B=function(e){var t=e.history;return Object(j.jsx)(o.a,{history:t,children:z})},G=n(11),U=n(19),V=n(50),W=n(54),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e;switch(t.type){case p:n=Object(W.a)(t.payload)}return n},F=function(e){return Object(U.c)({router:Object(o.b)(e),callers:q})},K=n(40),Q=n.n(K),Y=n(53),Z=n.n(Y),$=function(e){return function(e){return function(t){if(t.type===x){var n=t.payload,c=n.method,a=void 0===c?"GET":c,r=n.url,i=n.data,s=n.params,o=n.onSuccess,l=void 0===o?Q.a.noop:o,j=n.onError,d=void 0===j?Q.a.noop:j;Z()({method:a,url:r,data:i,params:s}).then(l).catch(d)}else e(t)}}},ee=Object(G.a)();var te=function(e){var t=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||U.d;return Object(U.e)(F(ee),e,t(Object(U.a)($,Object(V.a)(ee))))}();s.a.render(Object(j.jsx)(c.a,{store:te,children:Object(j.jsx)(B,{history:ee})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.fe5f8d14.chunk.js.map