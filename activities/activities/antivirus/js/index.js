var b="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,d){a!=Array.prototype&&a!=Object.prototype&&(a[c]=d.value)},e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function g(){g=function(){};e.Symbol||(e.Symbol=k)}var k=function(){var a=0;return function(c){return"jscomp_symbol_"+(c||"")+a++}}();
function m(){g();var a=e.Symbol.iterator;a||(a=e.Symbol.iterator=e.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&b(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return n(this)}});m=function(){}}function n(a){var c=0;return p(function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}})}function p(a){m();a={next:a};a[e.Symbol.iterator]=function(){return this};return a}function q(a){m();g();m();var c=a[Symbol.iterator];return c?c.call(a):n(a)}
var r=document.getElementById("anti-virus-canvas"),t=document.getElementById("anti-virus"),u=document.querySelector("#anti-virus .score"),v=r.getContext("2d"),w=Math.max(document.documentElement.clientHeight-50,500);r.height=w;t.style.height=w+"px";r.width=700;t.style.width="700px";var x=new Image;x.src="assets/background.png";x.width=200;x.height=145;var y=new Image;y.src="assets/player.png";var z=new Image;z.src="assets/opponent.png";
function A(a,c){return a.x<=c.x+c.width&&a.x+a.width>=c.x&&a.y<=c.y+c.height&&a.y+a.height>=c.y}function B(a){var c=a.x,d=a.y,f=a.width;a=a.height;v.fillStyle=v.createPattern(x,"repeat");v.fillRect(c,d,f,a)}function C(a,c){return 0===a||700===a+c}function D(a){var c=u.textContent;document.querySelector(".stage-frame").style.display="block";document.querySelector(".stage-frame .stage").innerHTML=a;document.querySelector(".stage-frame .stage-score").innerHTML=c}
function E(a){var c=u.textContent;document.querySelector(".game-over").style.display="block";document.querySelector(".game-over .stage-score").innerHTML=c;F(c);document.querySelector(".game-over .reset").onclick=function(){document.querySelector(".game-over").style.display="none";start(a)}}function G(){var a=u.textContent;document.querySelector(".game-completed").style.display="block";document.querySelector(".game-completed .stage-score").innerHTML=a;F(a)}
function F(a){localStorage.setItem("score",Math.max(+localStorage.getItem("score"),a))}var H=localStorage.getItem("score");H&&(document.querySelector(".high-score").style.display="block",document.querySelector(".high-score .stage-score").innerHTML=H);function I(a,c){var d=(void 0===c?{}:c).O;this.time=a;this.O="undefined"===typeof d?!0:d;this.Z=!0}I.prototype.exec=function(a){var c=this;this.Z&&(this.O&&a(),setTimeout(function(){c.Z=!0;!c.O&&a()},this.time),this.Z=!1)};
function J(a,c,d,f){this.x=a;this.y=c;this.b=10;this.pa=.4;this.o=d;this.a=0<d?1:-1;this.aa=0<d?Math.min(this.x+f,700-this.b):Math.max(this.x-f,this.b);this.I=!1}
J.prototype.i=function(){var a=this.x+this.pa*this.b*this.a,c=this.x+this.b*this.a;v.fillStyle="#d4f0ff";v.beginPath();v.moveTo(this.x,this.y-this.b);this.I?v.arc(this.x,this.y,this.b,0,2*Math.PI):(v.bezierCurveTo(a,this.y-this.b,a,this.y+this.b,this.x,this.y+this.b),v.bezierCurveTo(c,this.y+this.b/2,c,this.y-this.b/2,this.x,this.y-this.b));v.fill()};J.prototype.update=function(){1===this.a&&this.x>=this.aa||-1===this.a&&this.x<=this.aa?this.I=!0:this.x+=this.o};
function K(){var a={},c=void 0===a.height?50:a.height,d=void 0===a.width?40:a.width,f=void 0===a.x?20:a.x;a=void 0===a.y?w-c:a.y;this.height=c;this.width=d;this.x=f;this.y=a;this.P=!1;this.opacity=1;this.o=3;this.K=.5;this.R=this.T=10;this.G=20;this.l=0;this.h=!0;this.a=1;this.F={};this.na=5;this.ma=200;this.B=[];this.$=new I(400);L(this);M(this)}
K.prototype.i=function(){aa(this);v.save();v.translate(1===this.a?this.x:this.x+this.width,this.y);v.scale(this.a,1);0<=this.G?v.globalAlpha=+(0===this.G%2):this.P&&(this.opacity-=.01,v.globalAlpha=this.opacity);0<this.opacity&&v.drawImage(y,0,0,this.width,this.height);v.restore()};K.prototype.update=function(){this.P||(this.W(),this.X(),ba(this))};function ca(a){0>a.G&&(a.P=!0)}
K.prototype.W=function(){this.F[37]?(this.a=-1,this.x=Math.max(this.x-this.o,0)):this.F[39]&&(this.a=1,this.x=Math.min(this.x+this.o,700-this.width))};K.prototype.X=function(){this.h?this.F[38]&&(this.l=-this.R,this.h=!1):(this.y+=this.l,this.l=Math.min(this.l+this.K,this.T),this.y>=w-this.height&&(this.y=w-this.height,this.h=!0))};
function ba(a){a.F[32]&&a.$.exec(function(){return a.B.push(new J(1<a.a?a.x+a.width:a.x,a.y+a.height/2,a.a*a.na,a.ma))});for(var c=0;c<a.B.length;c++){var d=a.B[c];d.I?(a.B.splice(c,1),c--):d.update()}}function aa(a){a.B.forEach(function(a){return a.i()})}function L(a){document.addEventListener("keydown",function(c){c.preventDefault();a.F[c.keyCode]=!0});document.addEventListener("keyup",function(c){c.preventDefault();a.F[c.keyCode]=!1})}
function M(a){var c=setInterval(function(){a.G--;0>a.G&&clearInterval(c)},200)}function N(a){var c=void 0===a.y?0:a.y,d=void 0===a.height?50:a.height,f=void 0===a.width?40:a.width;this.x=a.x;this.y=c;this.height=d;this.width=f;this.o=this.fa=2;this.K=.5;this.T=10;this.l=0;this.R=10;this.a=.5<=Math.random()?1:-1;this.j=this.h=!1;this.J=8;this.da=this.A=!1;this.$=new I(500,{O:!1});this.ha=.004;this.ea=.2;this.la=.6;this.w=0;this.D=6;this.qa=3E3;this.ia=100;this.H=[];this.V=null}
N.prototype.i=function(){if(this.H.length)this.H.forEach(function(a){return a.i()});else{var a=(this.D-this.w)/this.D;v.save();v.translate(1===this.a?this.x:this.x+this.width,this.y);v.scale(1*this.a,1);v.drawImage(z,0,0,this.width,this.height);v.restore();v.fillStyle="#d4f0ff";v.fillRect(this.x,this.y+this.height*a,this.width,this.height*(1-a))}};
N.prototype.update=function(){var a=this;this.H.length?this.H.forEach(function(a){return a.update()}):(this.A&&C(this.x,this.width)&&this.y>=w-this.height&&(da(this),setTimeout(function(){a.da=!0;a.H=[]},500)),this.W(),this.X())};function O(a,c){var d=c.a;a.w=Math.min(a.w+(void 0===c.value?1:c.value),a.D);clearInterval(a.V);u.textContent=+u.textContent+10;a.w>=a.D?ea(a,d):(P(a),a.V=setInterval(function(){0===a.w?clearInterval(a.V):(a.w--,P(a))},a.qa))}function ea(a,c){a.J*=c;a.A=!0}
function P(a){a.o=a.fa*(a.D-a.w)/a.D}N.prototype.W=function(){var a=this;this.j&&(this.A?(this.J*=-1,this.j=!1):this.$.exec(function(){a.a*=-1;a.j=!1}));this.j||(this.x=Math.max(Math.min(this.x+(this.A?this.J:this.o*this.a),700-this.width),0));C(this.x,this.width)&&(this.j=!0)};N.prototype.X=function(){this.h?this.w<this.D&&Math.random()<this.ha&&(this.l=-this.R,this.h=!1):(this.y+=this.K+this.l,this.l=Math.min(this.l+this.K,this.T),this.y>=w-this.height&&(this.y=w-this.height,this.h=!0))};
function da(a){for(var c=0;c<a.ia;c++)a.H.push(new Q({x:a.x,y:a.y}))}function R(a){this.L=a.L}R.prototype.i=function(a){a=a.M;this["render"+this.L]();for(var c=0;c<a;c++){var d=void 0,f=40+30*c;d=void 0===d?10:d;v.fillStyle="red";v.beginPath();v.moveTo(f,40);v.arc(f+d/2,40,d/2,-Math.PI,0);v.arc(f-d/2,40,d/2,-Math.PI,0);v.moveTo(f+d,40);v.lineTo(f,40+d);v.lineTo(f-d,40);v.fill()}};
R.prototype.renderfloppy=function(){v.fillStyle="#05080f";v.fillRect(0,0,700,w);v.beginPath();v.fillStyle="#999";v.arc(350,w/2-2,51,0,2*Math.PI);v.fill();v.beginPath();v.fillStyle="#444a51";v.arc(350,w/2,50,0,2*Math.PI);v.fill();v.fillStyle="#999";v.fillRect(339,w/2-11,20,20);v.fillStyle="#05080f";v.fillRect(340,w/2-10,20,20);v.fillStyle="#999";v.fillRect(369,w/2-16,20,30);v.fillStyle="#05080f";v.fillRect(370,w/2-15,20,30);v.fillStyle="#fff";v.fillRect(80,0,540,10);v.fillStyle="#272a2f";v.fillRect(201,
6,300,100);v.fillStyle="#16191f";v.fillRect(200,5,300,100);v.fillStyle="#999";v.fillRect(201,6,200,100);v.fillStyle="#444a51";v.fillRect(200,5,200,100);v.fillStyle="#999";v.fillRect(229,24,50,75);v.fillRect(245,19,20,10);v.fillRect(359,19,30,20);v.fillStyle="#16191f";v.fillRect(230,25,50,75);v.fillRect(246,20,20,10);v.fillRect(360,20,30,20);v.fillStyle="#272a2f";v.fillRect(401,20,100,10);v.fillStyle="#000";v.fillRect(401,21,98,8);v.fillStyle="#fff";v.fillRect(20,w-50,40,30)};
R.prototype.rendercd=function(){var a=Math.min(w,700)/2-15;v.beginPath();v.fillStyle="black";v.fillRect(0,0,700,w);v.beginPath();v.strokeStyle="#fff";v.arc(349,w/2-1,a,0,2*Math.PI);v.stroke();v.beginPath();v.fillStyle="#797979";v.arc(350,w/2,a,0,2*Math.PI);v.fill();v.beginPath();v.strokeStyle="#fff";v.lineWidth=.5;v.arc(349,w/2-1,.4*a,0,2*Math.PI);v.stroke();v.beginPath();v.fillStyle="#444444";v.arc(350,w/2,.4*a,0,2*Math.PI);v.fill();v.beginPath();v.fillStyle="#b6b5bd";v.arc(350,w/2,.35*a,0,2*Math.PI);
v.fill();v.beginPath();v.strokeStyle="#000";v.lineWidth=.5;v.arc(350,w/2,.32*a,0,2*Math.PI);v.stroke();v.beginPath();v.lineWidth=1;v.arc(350,w/2,.27*a,0,2*Math.PI);v.stroke();v.beginPath();v.strokeStyle="#fff";v.lineWidth=.5;v.arc(349,w/2-1,.16*a,0,2*Math.PI);v.stroke();v.beginPath();v.fillStyle="#444444";v.arc(350,w/2,.16*a,0,2*Math.PI);v.fill();v.beginPath();v.strokeStyle="#fff";v.lineWidth=.5;v.arc(349,w/2-1,.14*a,0,2*Math.PI);v.stroke();v.beginPath();v.fillStyle="black";v.arc(350,w/2,.14*a,0,
2*Math.PI);v.fill()};
R.prototype.renderpenDrive=function(){v.beginPath();v.fillStyle="black";v.fillRect(0,0,700,w);v.strokeStyle="#444";v.fillStyle="#555";v.fillRect(178,177,350,w-230);v.fillStyle="#444";v.rect(175,180,350,w-230);v.moveTo(175,w-50);v.bezierCurveTo(210,w-10,700*.7,w-10,525,w-50);v.fill();v.beginPath();v.strokeStyle="black";v.fillStyle="#888";v.fillRect(336,w-49,30,20);v.fillStyle="black";v.fillRect(335,w-50,30,20);v.fillStyle="#333";v.fillRect(700*.35+2,142,210,20);v.fillStyle="#222";v.fillRect(700*.35,
140,210,20);v.fillStyle="#444";v.fillRect(212,158,280,20);v.fillStyle="#333";v.fillRect(210,160,280,20);v.fillStyle="#aaa";v.fillRect(285,25,140,110);v.fillStyle="#888";v.fillRect(280,30,140,110);v.fillStyle="#bbb";v.fillRect(302,72,30,20);v.fillRect(372,72,30,20);v.fillStyle="black";v.fillRect(300,70,30,20);v.fillRect(370,70,30,20);v.moveTo(345,30);v.lineTo(345,70);v.lineTo(360,70);v.lineTo(360,90);v.lineTo(345,90);v.lineTo(345,140);v.stroke()};
function Q(a){var c=a.y;this.x=a.x;this.y=c;this.b=3*Math.random();this.o=6*Math.random()-3;this.K=6*Math.random()-3}Q.prototype.i=function(){v.beginPath();v.fillStyle="#d4f0ff";v.arc(this.x,this.y,this.b,0,2*Math.PI);v.fill()};Q.prototype.update=function(){this.x+=this.o;this.y+=this.K};
function S(a){this.C=a.oa||0;this.M=3;this.ba=this.pause=!1;this.v=30;this.ka=10;this.g=new K;this.N=this.g.height+this.v+this.ka;this.m=w-this.N;this.s=this.m-this.N;this.c=this.s-this.N;this.f=this.c-this.N;this.S=this.f-this.N;this.U=[{name:"floppy",Y:[{x:0,y:w,width:700},{x:0,y:this.m,width:175},{x:280,y:this.m,width:140},{x:525,y:this.m,width:700},{x:140,y:this.s,width:420},{x:0,y:this.c,width:700*.35},{x:455,y:this.c,width:700},{x:70,y:this.f,width:140},{x:700*.7,y:this.f,width:140},{x:210,
y:this.f-this.v,width:280}],ra:[{x:210,y:this.f,width:280,height:this.v}]},{name:"cd",Y:[{x:0,y:w,width:700},{x:0,y:this.m,width:140},{x:700*.35,y:this.m,width:210},{x:560,y:this.m,width:140},{x:0,y:this.s,width:70},{x:315,y:this.s,width:70},{x:630,y:this.s,width:70},{x:0,y:this.c,width:70},{x:140,y:this.c,width:105,height:this.s-this.c+this.v},{x:315,y:this.c,width:70},{x:455,y:this.c,width:105,height:this.s-this.c+this.v},{x:630,y:this.c,width:70},{x:0,y:this.f,width:105},{x:210,y:this.f,width:280},
{x:595,y:this.f,width:105},{x:140,y:this.S,width:420}]},{name:"penDrive",Y:[{x:0,y:w,width:700},{x:70,y:this.m,width:700*.35},{x:700*.55,y:this.m,width:700*.35},{x:0,y:this.s,width:140},{x:560,y:this.s,width:140},{x:70,y:this.c,width:175},{x:455,y:this.c,width:140},{x:0,y:this.f,width:140},{x:560,y:this.f,width:140},{x:105,y:this.S,width:700*.7},{x:700*.35,y:this.f,width:70,height:this.m-this.c+this.v},{x:700*.55,y:this.f,width:70,height:this.m-this.c+this.v},{x:315,y:this.S+this.v,width:70,height:this.m-
this.S}]}];this.ja=[{x:0},{x:210},{x:420},{x:700},{x:105,y:this.f},{x:280,y:this.f},{x:525,y:this.f},{x:0,y:this.c},{x:700,y:this.c},{x:350,y:this.s}];T(this);U(this);V(this)}S.prototype.i=function(){this.pause||(this.background.i({M:this.M}),this.ga.forEach(function(a){return a.i()}),fa(this),this.u.forEach(function(a){return a.i()}),this.g.i())};
S.prototype.update=function(){var a=this;if(!this.ba&&!this.pause){this.g.update();for(var c=0;c<this.u.length;c++){var d=this.u[c];d.da?(u.textContent=+u.textContent+100,this.u.splice(c,1),c--):d.update()}if(!this.u.length)return ha(this);ia(this);this.g.h=!1;this.u.forEach(function(c,d){c.h=!1;for(var l=d+1;l<a.u.length;l++){var f=a.u[l],h=c.A&&f||f.A&&c;h?A(c,f)?(h.ca||(O(h,{a:0<h.J?1:-1,value:2}),h.j=!0),h.ca=!0):h.ca=!1:(c.x<f.x?1===c.a&&-1===f.a:-1===c.a&&1===f.a)&&A(c,f)&&(c.j=f.j=!0)}});c=
{};d=q(this.ga);for(var f=d.next();!f.done;c={platform:c.platform},f=d.next())c.platform=f.value,W(this.g,c.platform),this.g.h=this.g.h||X(this.g,c.platform),this.g.B.forEach(function(a){return function(c){c.I=c.I||W({x:1===c.a?c.x-c.b:c.x,y:c.y-c.b,width:c.b,height:2*c.b},a.platform)}}(c)),this.u.forEach(function(a){return function(c){if(!c.A){var d=a.platform,f=c.y+c.height===d.y,h=c.x>=d.x&&c.x<=d.x+c.o-1;d=c.x+c.width>=d.x+d.width&&c.x+c.width<=d.x+d.width+c.o-1;!c.j&&f&&(h&&-1===c.a||d&&1===
c.a)&&(f=Math.random(),f<c.ea?(c.l=-c.R,c.h=!1):f<c.la+c.ea&&(c.j=!0))}c.j=c.j||W(c,a.platform);c.h=c.h||X(c,a.platform)}}(c))}};function W(a,c){var d=a.y+a.height,f=a.x+a.width>=c.x&&a.x+a.width<=c.x+10,ja=a.x<=c.x+c.width&&a.x>=c.x+c.width-10,l=!1;if(a.y>c.y&&a.y<c.y+c.height||d<=c.y+c.height&&d>c.y)f?(a.x=c.x-a.width,l=!0):ja&&(a.x=c.x+c.width,l=!0);return l}
function X(a,c){var d=a.y+a.height<=c.y+a.T-1&&a.y+a.height>=c.y,f=a.x+a.width>c.x&&a.x<c.x+c.width;return 0<=a.l&&f&&d?(a.y=c.y-a.height,a.h=!0,a.l=0,!0):!1}function ia(a){a.u.some(function(c){if(!c.A){if(0>a.g.G&&A(a.g,c))return ka(a),!0;a.g.B.forEach(function(a){A({x:1===a.a?a.x:a.x-a.b,y:a.y-a.b,width:a.b,height:2*a.b},c)&&(O(c,{a:a.a}),a.I=!0)})}})}function la(a){a.ba=!0;E(a.C)}function ka(a){a.g.P||(a.M--,0===a.M?la(a):(ca(a.g),setTimeout(function(){a.g=new K},2E3)))}
function ha(a){a.C++;u.textContent=+u.textContent+1E3;a.pause=!0;a.C>=a.U.length?(G(),setTimeout(function(){document.querySelector(".game-completed").style.display="none";document.querySelector("#anti-virus .menu").style.display="block";document.getElementById("anti-virus-canvas").style.display="none"},7E3)):(D(a.C),setTimeout(function(){T(a);U(a);a.g=new K;V(a);document.querySelector(".stage-frame").style.display="none";a.pause=!1},5E3))}
function fa(a){var c=a.U[a.C].ra;c&&c.forEach(function(){return B({x:210,y:a.f,width:280,height:a.v})})}function T(a){a.ga=a.U[a.C].Y.map(function(a){return new Y(a)})}function U(a){a.u=a.ja.map(function(a){return new N(a)})}function V(a){a.background=new R({L:a.U[a.C].name})}function Y(a){var c=a.y,d=void 0===a.height?30:a.height,f=void 0===a.width?100:a.width;this.x=a.x;this.y=c;this.height=d;this.width=f}Y.prototype.i=function(){B(this)};function Z(a){this.L=new S({oa:a});this.loop()}
Z.prototype.update=function(){this.L.update()};Z.prototype.i=function(){this.L.i()};Z.prototype.loop=function(){var a=this;this.update();this.i();requestAnimationFrame(function(){return a.loop()})};window.start=function(a){document.querySelector("#anti-virus .menu").style.display="none";document.getElementById("anti-virus-canvas").style.display="block";u.textContent="0";new Z(a)};