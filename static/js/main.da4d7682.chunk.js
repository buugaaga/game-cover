(this["webpackJsonpgame-cover"]=this["webpackJsonpgame-cover"]||[]).push([[0],{21:function(n,e,t){n.exports=t.p+"static/media/header.7bcf559d.png"},22:function(n,e,t){n.exports=t.p+"static/media/background.3a11c8fa.png"},23:function(n,e,t){n.exports=t.p+"static/media/task-kings.159c96d7.png"},24:function(n,e,t){n.exports=t.p+"static/media/task-time.94ef6c8d.png"},25:function(n,e,t){n.exports=t.p+"static/media/task-tournaments.935c7e99.png"},26:function(n,e,t){n.exports=t.p+"static/media/side-bg.324c7fbc.jpg"},27:function(n,e,t){n.exports=t.p+"static/media/background-screen.972e8bca.png"},28:function(n,e,t){n.exports=t(53)},33:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(16),i=t.n(o),c=(t(33),t(1)),u=t(2),l=t(6),s=t.n(l),p=t(19),d=t(5),f=t(20),g=t.n(f);function m(){var n=Object(c.a)(["\n    height: 100%;\n    width: ","%;\n    background-color: #909B5A;\n    border-radius: inherit;\n"]);return m=function(){return n},n}function b(){var n=Object(c.a)(["\n  width: 320px;\n  height: 2vh;\n  margin-top: 10px;\n  border: 2px solid #FFFED1;\n  border-radius: 50px;\n  background-color: #3B3B38;\n"]);return b=function(){return n},n}var x=u.a.div(b()),v=u.a.div(m(),(function(n){return n.progress}));function h(n){var e=n.progress;return a.a.createElement(x,null,a.a.createElement(v,{progress:e}))}function k(){var n=Object(c.a)(["\n  flex: 1 1 20%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 0 20px 0 20px;\n  margin: 0;\n\n  button {\n    border: 2px solid #171407;\n    border-radius: 4px;\n    \n    background: radial-gradient(#EDDA79, #EDDA79, #EDDA79, #8E834A);\n    height: 30px;\n    width: 130px;\n    padding: 0 ;\n    margin: 0;\n    font-size: .7rem;\n    letter-spacing: -0.5px;\n  }\n"]);return k=function(){return n},n}var E=u.a.div(k()),j=function(n){var e=n.isFull,t=n.setClosed;return a.a.createElement(E,null,e?a.a.createElement("button",{onClick:function(){return t(!0)}},"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0440\u0443\u0431\u0430\u0448\u043a\u0443"):null)};function w(){var n=Object(c.a)(["\n  flex: 1 1 70%;\n  p {\n    font-size: 1.2rem;\n    width: 300px;\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(c.a)(["\n  flex: 1 1 15%;\n  margin: 0 20px;\n  img {\n    transform: rotate(15deg);\n  }\n"]);return y=function(){return n},n}function O(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: row no-wrap;\n  justify-content: start;\n  box-sizing: border-box;\n  margin: 0;\n  height: 140px;\n  width: 100%;\n  padding: 10px 20px;\n"]);return O=function(){return n},n}var z=u.a.div(O()),A=u.a.div(y()),F=u.a.div(w());var D=function(n){var e=n.pathImg,t=n.progress,r=n.isFull,o=n.setClosed,i=n.phrasa;return a.a.createElement(z,null,a.a.createElement(A,null,a.a.createElement("img",{src:e,alt:"icon"})),a.a.createElement(F,null,a.a.createElement("p",null,a.a.createElement("b",null,i)),a.a.createElement(h,{progress:t})),a.a.createElement(j,{isFull:r,setClosed:o}))};function B(){var n=Object(c.a)(["\n    height: 100px;\n    width: 100px;\n    color: rgba($loadercolor, 0.2);\n    position: absolute;\n    top: 30%;\n    right: 40%;\n    display: inline-block;\n    border: 10px solid white;\n    border-radius: 50%;\n    border-right-color: grey;\n    animation: rotate 1s linear infinite;\n\n@keyframes rotate {\n    0%{transform: rotate(0);}\n    100%{transform: rotate(360deg);}\n}\n"]);return B=function(){return n},n}var C=u.a.div(B());var I=function(){return a.a.createElement(C,null)},S=t(4),J=t.n(S);function W(){var n=Object(c.a)(["\n  flex: 1 1;\n  p {\n    font-size: 0.5rem;\n    margin-top: -10px;\n    padding-top: 0;\n    text-align: center;\n  }\n"]);return W=function(){return n},n}function $(){var n=Object(c.a)(["\n  position: absolute;\n  top: -24px;\n  left: 280px;\n\n  width: auto;\n  max-height: 50px; \n  display: flex;\n  color: white;\n  font-size: 1.7rem;\n  overflow: hidden;\n  z-index: 4;\n"]);return $=function(){return n},n}var q=u.a.div($()),G=u.a.div(W()),H=function(n){var e=n.endsAt,t=J()(e),o=J()(t)-J()(),i=Object(r.useState)(o),c=Object(d.a)(i,2),u=c[0],l=c[1];Object(r.useEffect)((function(){var n=setInterval((function(){l(J()(t)-J()())}),1e3);return function(){return clearInterval(n)}}),[t]);var s=J()(u).date(),p=J()(u).hour(),f=J()(u).minute(),g=J()(u).second();return a.a.createElement(q,null,a.a.createElement(G,null,s,":",a.a.createElement("p",null,"\u0434\u043d\u0435\u0439")),a.a.createElement(G,null,p,":",a.a.createElement("p",null,"\u0447\u0430\u0441\u043e\u0432")),a.a.createElement(G,null,f,":",a.a.createElement("p",null,"\u043c\u0438\u043d\u0443\u0442")),a.a.createElement(G,null,g,a.a.createElement("p",null,"\u0441\u0435\u043a\u0443\u043d\u0434")))},K=t(21),L=t.n(K);function M(){var n=Object(c.a)(["\n  position: absolute;\n  top: -130px;\n\n  height: 170px;\n  width: 647px;\n  z-index: 2;\n  background-color: opacity;\n  background-image: url(",");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center center;\n"]);return M=function(){return n},n}var N=u.a.div(M(),L.a);var P=function(){return a.a.createElement(N,null)},Q=t(22),R=t.n(Q),T=t(23),U=t.n(T),V=t(24),X=t.n(V),Y=t(25),Z=t.n(Y),_="\u0412\u044b\u0439\u0433\u0440\u0430\u0442\u044c 3 \u0438\u0433\u0440\u044b \u043a\u0430\u0436\u0434\u0443\u044e \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u043c \u0437\u0430 3 \u043c\u0438\u043d\u0443\u0442\u044b",nn="\u0412\u044b\u0439\u0433\u0440\u0430\u0442\u044c \u0442\u0440\u0438 \u0438\u0433\u0440\u044b \u0440\u0430\u0437\u043b\u043e\u0436\u0438\u0432 \u0432\u0441\u0435\u0445 \u043a\u043e\u0440\u043e\u043b\u0435\u0439",en="\u0412\u044b\u0439\u0433\u0440\u0430\u0442\u044c \u043f\u044f\u0442\u044c \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432 \u043f\u043e\u0434\u0440\u044f\u0434";function tn(){var n=Object(c.a)(["\n  position: relative;\n  height: 437px;\n  width: 647px;\n  padding: 25px 20px 50px 20px;\n  background-color: opacity;\n  background-image: url(",");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n"]);return tn=function(){return n},n}var rn=u.a.div(tn(),R.a);var an=function(){var n=Object(r.useState)(!1),e=Object(d.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(!1),c=Object(d.a)(i,2),u=c[0],l=c[1],f=Object(r.useState)({endsAt:"0",tasks:[]}),m=Object(d.a)(f,2),b=m[0],x=b.endsAt,v=b.tasks,h=m[1];return Object(r.useEffect)((function(){(function(){var n=Object(p.a)(s.a.mark((function n(e){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,g()(e);case 4:t=n.sent,h(t.data),l(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}})()("https://cors-anywhere.herokuapp.com/http://sol-tst.herokuapp.com/api/v1/tasks/")}),[]),console.log(x),t?null:a.a.createElement(rn,null,a.a.createElement(P,null),u?a.a.createElement(I,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{endsAt:x}),v.map((function(n,e){return a.a.createElement(D,{pathImg:"time"===n.type?X.a:"kings"===n.type?U.a:"tournaments"===n.type?Z.a:null,phrasa:"time"===n.type?_:"kings"===n.type?nn:"tournaments"===n.type?en:null,progress:n.progress,isFull:100===n.progress,setClosed:o,key:e})}))))},on=t(26),cn=t.n(on),un=t(27),ln=t.n(un);function sn(){var n=Object(c.a)(["\n  height: 800px;\n  width: 894px;\n  background-color: #333;\n  background-image: url(",");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return sn=function(){return n},n}function pn(){var n=Object(c.a)(["\n  height: 800px;\n  width: 1920px;\n  background-color: #333;\n  background-image: url(",");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center center; \n  display: flex;\n  justify-content: center;\n"]);return pn=function(){return n},n}var dn=u.a.div(pn(),cn.a),fn=u.a.div(sn(),ln.a);var gn=function(){return a.a.createElement(dn,null,a.a.createElement(fn,null,a.a.createElement(an,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(gn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.da4d7682.chunk.js.map