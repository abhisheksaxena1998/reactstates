(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(7),i=n.n(s);n(13),n.p,n(14);var o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},u=(n(15),n(2)),l=n(3),d=n(5),h=n(4),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:e.props.value},e.styles={fontSize:14,fontWeight:"bold"},e.handleIncrement=function(){console.log(),e.setState({value:e.state.value+1})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return console.log("props",this.props),Object(a.jsxs)(c.a.Fragment,{children:[this.props.children,Object(a.jsx)("span",{style:this.styles,className:"badge badge-primary m-4",children:this.formatCount()}),Object(a.jsx)("button",{onClick:function(){return e.handleIncrement()},className:this.getBadgeClasses(),children:"Increment"})]})}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.state.value?"warning":"info"}},{key:"formatCount",value:function(){var e=this.state.value;return 0===e?"Zero":e}}]),n}(r.Component),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={counters:[{id:1,value:4},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:this.state.counters.map((function(e){return Object(a.jsx)(v,{value:e.value,id:e.id,children:Object(a.jsxs)("h4",{children:["Counter #",e.id]})},e.id)}))})}}]),n}(r.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.4b2956d3.chunk.js.map