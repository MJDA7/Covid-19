(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{43:function(e,a,t){e.exports=t(57)},48:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),o=(t(48),t(20)),m=t.n(o),s=t(24),i=t(25),u=t(26),d=t(38),E=t(39),v=t(80),f=t(73),h=t(74),N=t(78),p=t(75),w=t(79),b=t(76),y=t(27),D=t.n(y),G=t(32),T=t.n(G),g=t(33),C=t.n(g),j=t(34),k=t.n(j),O=t(35),R=t.n(O),I=t(36),x=t.n(I),L=t(37),M=t.n(L),B=function(e){var a=e.date,t=e.NewConfirmed,n=e.TotalConfirmed,l=e.NewDeaths,c=e.TotalDeaths,o=e.NewRecovered,m=e.TotalRecovered;return r.a.createElement(v.a,{className:"card"},r.a.createElement(f.a,{title:"Informaci\xf3n Global de COVID-19",subheader:D()(a).format("LLLL")}),r.a.createElement("div",{className:"card-row"},r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(N.a,null,r.a.createElement(p.a,null,r.a.createElement(w.a,{className:"avatar1"},r.a.createElement(T.a,{className:"color1"}))),r.a.createElement(b.a,{primary:"Nuevos confirmado: ",secondary:t})),r.a.createElement(N.a,null,r.a.createElement(p.a,null,r.a.createElement(w.a,{className:"avatar1"},r.a.createElement(C.a,{className:"color1"}))),r.a.createElement(b.a,{primary:"Total confirmado: ",secondary:n})),r.a.createElement(N.a,null,r.a.createElement(p.a,null,r.a.createElement(w.a,{className:"avatar2"},r.a.createElement(k.a,{className:"color2"}))),r.a.createElement(b.a,{primary:"Nuevas muertes: ",secondary:l})))),r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(N.a,null,r.a.createElement(p.a,null,r.a.createElement(w.a,{className:"avatar2"},r.a.createElement(R.a,{className:"color2"}))),r.a.createElement(b.a,{primary:"Muertes totales: ",secondary:c})),r.a.createElement(N.a,null,r.a.createElement(p.a,null,r.a.createElement(w.a,{className:"avatar3"},r.a.createElement(x.a,{className:"color3"}))),r.a.createElement(b.a,{primary:"Nuevos recuperado: ",secondary:o})),r.a.createElement(N.a,null,r.a.createElement(p.a,null,r.a.createElement(w.a,{className:"avatar3"},r.a.createElement(M.a,{className:"color3"}))),r.a.createElement(b.a,{primary:"Total recuperado: ",secondary:m}))))))},J=t(77),S=(t(56),function(e){Object(E.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={data:[]},e.stateData=function(a){e.setState({data:a})},e.getData=Object(s.a)(m.a.mark((function a(){var t,n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://api.covid19api.com/summary");case 2:return t=a.sent,a.next=5,t.json();case 5:n=a.sent,e.stateData(n);case 7:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,"COVID-19")),r.a.createElement(J.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(B,{date:e.Date,NewConfirmed:e.Global&&e.Global.NewConfirmed,TotalConfirmed:e.Global&&e.Global.TotalConfirmed,NewDeaths:e.Global&&e.Global.NewDeaths,TotalDeaths:e.Global&&e.Global.TotalDeaths,NewRecovered:e.Global&&e.Global.NewRecovered,TotalRecovered:e.Global&&e.Global.TotalRecovered})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.553e7bee.chunk.js.map