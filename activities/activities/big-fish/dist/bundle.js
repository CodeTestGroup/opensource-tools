!function(t){var i={};function e(s){if(i[s])return i[s].exports;var h=i[s]={i:s,l:!1,exports:{}};return t[s].call(h.exports,h,h.exports,e),h.l=!0,h.exports}e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var h in t)e.d(s,h,function(i){return t[i]}.bind(null,h));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";function s(t,i,e,s,h){return{x:Math.cos(h)*(t-e)-Math.sin(h)*(i-s)+e,y:Math.sin(h)*(t-e)+Math.cos(h)*(i-s)+s}}function h(t,i,e,h,n,o,l){const r=[],a=i*Math.sqrt(3)/2,c=l||1;r.push(s(h,n-2*a/3,h,n,e)),r.push(s(h+i/2,n+c*(a/3),h,n,e)),r.push(s(h-i/2,n+c*(a/3),h,n,e)),o&&(t.fillStyle=o),t.beginPath(),t.moveTo(r[0].x,r[0].y),t.lineTo(r[1].x,r[1].y),t.lineTo(r[2].x,r[2].y),t.lineTo(r[0].x,r[0].y),t.fill(),t.closePath()}function n(t,i,e,s,h,n,o,l,r){t.fillStyle=h,t.strokeStyle=o;const a=l||0,c=r||2*Math.PI;t.beginPath(),t.arc(i,e,s,a,c),null!==h&&t.fill(),t.closePath(),n&&o&&t.stroke()}function o(t,i,e,s,h,n,o){o&&(t.fillStyle=o),t.beginPath(),t.ellipse(i,e,s,h,n,0,2*Math.PI),t.fill(),t.closePath()}function l(t,i,e){return t*(1-e)+i*e}function r(t,i,e){return[Math.round(t[0]*(1-e)+i[0]*e),Math.round(t[1]*(1-e)+i[1]*e),Math.round(t[2]*(1-e)+i[2]*e)]}function a(t,i){const e=Math.ceil(t*(i.length-1)),s=(e-1)/(i.length-1),h=(t-s)/(e/(i.length-1)-s),n=c(i[e-1]),o=c(i[e]);return[Math.round(n[0]*(1-h)+o[0]*h),Math.round(n[1]*(1-h)+o[1]*h),Math.round(n[2]*(1-h)+o[2]*h)]}function c(t){var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?[parseInt(i[1],16),parseInt(i[2],16),parseInt(i[3],16)]:null}function d(t){return"#"+((1<<24)+(t[0]<<16)+(t[1]<<8)+t[2]).toString(16).slice(1)}e.r(i);class u{constructor(t,i,e,s){this.x=t||p(50),this.y=i||b(50),this.size=e||b(1.5),this.diameter=2*this.size,this.vx=0,this.vy=0,this.theta=s||0,this.speedDelta=b(.0135),this.thetaDelta=b(.0145),this.rightPressed=!1,this.leftPressed=!1,this.upPressed=!1,this.downPressed=!1,this.bubble=!1,this.bubblePoppedTime=0,this.bubblePopped=!1}draw(t,i){t.fillStyle=x.goldFishTwo,t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fill(),t.closePath();const e=1.5*this.size,h=e*Math.sqrt(3)/2,o=[[this.x,this.y+this.size/2],[this.x-e/2,this.y+h+this.size/2],[this.x+e/2,this.y+h+this.size/2],[this.x,this.y+this.size/2]];if(t.beginPath(),o.map((i,e)=>{const h=s(i[0],i[1],this.x,this.y,this.theta);0===e?t.moveTo(h.x,h.y):t.lineTo(h.x,h.y)}),t.closePath(),t.fill(),this.bubble)if(this.bubblePopped){const e=d(a(.5+.5*Math.sin(i/50),["#FFFFFF",x.blueTwo]));t.lineWidth=2,n(t,this.x,this.y,1.15*this.size,null,!0,e),n(t,this.x,this.y,1.1*this.size,null,!0,e,0,Math.PI/8),i>this.bubblePoppedTime+2500&&(this.bubble=!1,this.bubblePopped=!1)}else n(t,this.x,this.y,1.15*this.size,null,!0,"#FFFFFF"),n(t,this.x,this.y,1.1*this.size,null,!0,"#FFFFFF",0,Math.PI/8)}reposition(){this.leftPressed&&(this.vx-=this.speedDelta,this.theta>Math.PI/2?this.theta=l(this.theta,3*Math.PI/2,this.thetaDelta):this.theta<=Math.PI/2&&(this.theta=l(this.theta,-Math.PI/2,this.thetaDelta))),this.upPressed&&(this.vy-=this.speedDelta,this.theta<Math.PI&&this.theta>=0?this.theta=l(this.theta,0,this.thetaDelta):this.theta=l(this.theta,2*Math.PI,this.thetaDelta)),this.rightPressed&&(this.vx+=this.speedDelta,this.theta<3*Math.PI/2&&this.theta>=Math.PI/2?this.theta=l(this.theta,Math.PI/2,this.thetaDelta):this.theta>=3*Math.PI/2?this.theta=l(this.theta,5*Math.PI/2,this.thetaDelta):this.theta=l(this.theta,Math.PI/2,this.thetaDelta)),this.downPressed&&(this.vy+=this.speedDelta,this.theta=l(this.theta,Math.PI,this.thetaDelta)),this.theta>2*Math.PI?this.theta=this.theta-2*Math.PI:this.theta<0&&(this.theta=2*this.theta+2*Math.PI),this.x+=this.vx,this.y+=this.vy,this.x>=g+this.size?this.x=-this.size:this.x<=-this.size&&(this.x=g+this.size),this.y>=b(100)-this.size?(this.y=b(100)-this.size,this.vy=-.33*this.vy):this.y<=b(0)+this.size&&(this.y=b(0)+this.size,this.vy=-.33*this.vy)}render(t,i){this.reposition(),this.draw(t,i)}}const y=document.getElementById("canvas"),m=y.getContext("2d");let f=y.clientHeight,g=y.clientWidth;const p=t=>t*g/100,b=t=>t*f/100,x={blueOne:"#69D2E7",blueTwo:"#A7DBD8",goldFishOne:"#F38630",goldFishTwo:"#FA6900",testing:["#ffffcc","#d9f0a3","#addd8e","#78c679","#31a354","006837"],simpleFish:["#f3beb4","#b86454"],jumperFish:["#87a8eb","#4966a1"],pufferFish:["#E0E4CC"],pufferFishTail:"#c9cdb7",pufferFishMouth:"#f0b1a5"},v=[];v.push(...new Array(1).fill("puffer")),v.push(...new Array(6).fill("jumper")),v.push(...new Array(16).fill("simple"));let M=[],z=[],P=[],I={active:!0,fishEaten:0,score:0,progress:0,elapsed:0,enemyCount:25};const w=new u;class E{constructor(t,i,e,s,h,n,o){this.cycleTime=i,this.direction=n,this.color=o,this.size=t,this.vertices=4,this.x=s,this.y=h,this.vx=e,this.collision,this.state=[{start:0,end:.3,speed:this.vx,value:"coil"},{start:.2,end:.99,speed:5*this.vx,value:"jump"},{start:.75,end:1,speed:2*this.vx,value:"coil"}],this.coords={neutral:[[-t/2,0],[0,-t/2],[t/2,0],[0,t/2]],coil:[[-t/2,0],[0,-t],[t/2,0],[0,t]],jump:[[-t,0],[0,-t/2],[t,0],[0,t/2]]},this.currentCoords,this.diameter,this.dispose}reposition(t){const i=t%this.cycleTime/this.cycleTime,e=this.state.filter(t=>t.start<=i&&t.end>i),s=e.length>1?"transition":"stable",h=[];for(let t=0;t<this.vertices;t++){h[t]=[this.x,this.y];const n=new Array(2);if("transition"===s){const s=e[0],h=e[1];let o;s.start===h.start&&s.end<=h.end?o=(i-s.start)/(s.end-s.start):s.start<=h.start&&s.end<h.end?o=(i-h.start)/(s.end-h.start):s.start<h.start&&s.end===h.end&&(o=(i-h.end)/(h.end-h.start));const r=l(s.speed,h.speed,o);"left"===this.direction?this.x-=r:this.x+=r,n[0]=l(this.coords[s.value][t][0],this.coords[h.value][t][0],o),n[1]=l(this.coords[s.value][t][1],this.coords[h.value][t][1],o)}else{const i=e[0],s=i.speed;"left"===this.direction?this.x-=s:this.x+=s,n[0]=this.coords[i.value][t][0],n[1]=this.coords[i.value][t][1]}h[t][0]+=n[0],h[t][1]+=n[1]}this.currentCoords=h}collisionDetection(t,i,e){for(let s=0;s<this.currentCoords.length-1;s++){const h=e*e;let n=Math.pow(t-this.currentCoords[s][0],2),o=Math.pow(i-this.currentCoords[s][1],2);if(n+o<h)return!0;const l=(this.currentCoords[s][0]+this.currentCoords[s+1][0])/2,r=(this.currentCoords[s][1]+this.currentCoords[s+1][1])/2;if((n=(t-l)*(t-l))+(o=(i-r)*(i-r))<h)return!0}return!1}calculateDiameter(){const t=Math.abs(this.currentCoords[0][0]-this.currentCoords[2][0]),i=Math.abs(this.currentCoords[1][1]-this.currentCoords[2][1]);return Math.max(t,i)}draw(t){t.fillStyle=this.color,t.beginPath(),this.currentCoords.map((i,e)=>{0===e?t.moveTo(i[0],i[1]):t.lineTo(i[0],i[1])}),t.fill(),t.closePath()}render(t,i,e,s,h){this.reposition(i),this.diameter=this.calculateDiameter(),(this.x+this.size<p(0)||this.x-this.size>p(100))&&(this.dispose=!0),(Math.abs(e-this.x)<4*this.size||Math.abs(s-this.y)<4*this.size)&&(this.collision=this.collisionDetection(e,s,h)),this.draw(t)}}class T{constructor(t,i,e,s,h,n,o){this.size=t,this.diameter=2*t,this.cycleTime=i,this.vx=e,this.x=s,this.y=h,this.direction=n,this.color=o,this.vertices=4,this.tailSide=1.3*this.size,this.tailHeight=this.tailSide*Math.sqrt(3)/2,this.coords=[[0,this.tailSide/2],[-this.tailSide/2,this.tailHeight+this.size/2],[this.tailSide/2,this.tailHeight+this.size/2],[0,this.tailSide/2]],this.currentCoords,this.collision,this.dispose=!1,this.sideEye=!1,this.eyeAngle=0}reposition(t){const i=[];"left"===this.direction?this.x-=this.vx:this.x+=this.vx,this.coords.map((e,h)=>{const n=this.x+e[0],o=this.y+e[1];let l;l="left"===this.direction?-Math.PI/2:Math.PI/2;const r=Math.PI/16*Math.sin(t/this.cycleTime),a=s(n,o,this.x,this.y,l+r);i.push([a.x,a.y])}),this.currentCoords=i}collisionDetection(t,i){this.collision=t<i}draw(t){const i=d(r(c(this.color),[0,0,0],.15));t.fillStyle=this.color,t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fill(),t.closePath(),t.beginPath(),this.currentCoords.map((i,e)=>{0===e?t.moveTo(i[0],i[1]):t.lineTo(i[0],i[1])}),t.fill(),t.closePath(),n(t,"left"===this.direction?this.x-.55*this.size:this.x+.55*this.size,this.y-this.size/6,this.size/8,"#ffffff");const e="left"===this.direction?this.y-this.size/6-(this.sideEye?Math.sin(this.eyeAngle+Math.PI)*this.size/12:0):this.y-this.size/6-(this.sideEye?Math.sin(this.eyeAngle-Math.PI)*this.size/12:0),s="left"===this.direction?this.x-.55*this.size-(this.sideEye?Math.cos(this.eyeAngle+Math.PI)*this.size/12:0):this.x+.55*this.size-(this.sideEye?Math.cos(this.eyeAngle-Math.PI)*this.size/12:0);n(t,s,e,this.size/16,this.color);const h=["left"===this.direction?this.x-Math.cos(1.9*Math.PI)*this.size*.99:this.x+Math.cos(1.9*Math.PI)*this.size*.99,(this.direction,this.y-Math.sin(1.9*Math.PI)*this.size*.99)];t.strokeStyle=i,t.lineWidth=this.size/24,t.beginPath(),t.moveTo(h[0],h[1]),t.lineTo("left"===this.direction?h[0]+this.size/4:h[0]-this.size/4,h[1]),t.closePath(),t.stroke()}render(t,i,e,s,h){this.reposition(i),(this.x+this.size<p(0)||this.x-this.size>p(100))&&(this.dispose=!0);const n=(this.x-e)*(this.x-e)+(this.y-s)*(this.y-s),o=(this.size+h)*(this.size+h);n<2*o&&this.collisionDetection(n,o),n<24*o?(this.sideEye=!0,this.eyeAngle=Math.atan2(s-this.y,e-this.x)):this.sideEye=!1,this.draw(t)}}class F{constructor(t,i,e,s,h,n,o){this.cycleTime=i,this.direction=n,this.color=o,this.size=t,this.x=s,this.y=h,this.vx=e,this.state=[{start:0,end:.6,radius:this.size,speed:1.2*this.vx,value:"neutral"},{start:.5,end:.65,radius:this.size,speed:.75*this.vx,value:"huffing"},{start:.6,end:1,radius:3*this.size,speed:.5*this.vx,value:"puffing"},{start:.95,end:1,radius:this.size,speed:this.vx,value:"neutral"}],this.collision,this.currentState,this.currentCoords,this.diameter,this.dispose}reposition(t){const i=t%this.cycleTime/this.cycleTime;this.currentState=this.state.filter(t=>t.start<=i&&t.end>i);if("transition"===(this.currentState.length>1?"transition":"stable")){const t=this.currentState[0],e=this.currentState[1];let s;t.start===e.start&&t.end<=e.end?s=(i-t.start)/(t.end-t.start):t.start<=e.start&&t.end<e.end?s=(i-e.start)/(t.end-e.start):t.start<e.start&&t.end===e.end&&(s=(i-e.start)/(e.end-e.start));const h=l(t.speed,e.speed,s);"left"===this.direction?this.x-=h:this.x+=h;const n=l(t.radius,e.radius,s);this.size=n}else{const t=this.currentState[0],i=t.speed;"left"===this.direction?this.x-=i:this.x+=i,this.size=t.radius}this.finSize=this.size/2,this.finHeight=this.finSize*Math.sqrt(3)/2,this.currentCoords=[]}collisionDetection(t,i,e){const s=(this.x-t)*(this.x-t)+(this.y-i)*(this.y-i),h=(this.size+e)*(this.size+e);this.collision=s<h}render(t,i,e,s,l){this.reposition(i),this.diameter=2*this.size;const r=.25*Math.sin(this.vx*i/50),a=this.currentState.filter(t=>"huffing"===t.value).length>0?1+.25*Math.abs(Math.sin(i/100)):1;(this.x+this.size<p(0)||this.x-this.size>p(100))&&(this.dispose=!0),(Math.abs(this.x-e)<4*l||Math.abs(this.y-s)<4*l)&&this.collisionDetection(e,s,l),function(t,i,e,s,n,o,l){for(let r=0;r<i;r++){const a=2*Math.PI*(r/i);h(t,e,Math.PI/2+a,s+Math.cos(a)*o,n+Math.sin(a)*o,l)}}(t,25,this.size/8,this.x,this.y,this.size,x.pufferFish[0]),o(t,"left"===this.direction?this.x-this.size:this.x+this.size,this.y,a*(this.size/8),a*(this.size/3.4),0,x.pufferFishMouth),h(t,this.size,"left"===this.direction?-Math.PI/2:Math.PI/2,"left"===this.direction?this.x+this.size:this.x-this.size,this.y,x.pufferFishTail),n(t,this.x,this.y,this.size,x.pufferFish[0]),h(t,this.size/2,"left"===this.direction?-Math.PI/2:Math.PI/2,"left"===this.direction?this.x+this.size/4:this.x-this.size/4,this.y,x.pufferFishTail,r),o(t,"left"===this.direction?this.x-this.size/1.75:this.x+this.size/1.75,this.y-this.size/3,this.size/6,this.size/5,0,"#FFFFFF"),o(t,"left"===this.direction?this.x-this.size/1.75:this.x+this.size/1.75,this.y-this.size/3,this.size/12,this.size/10,0,x.pufferFishTail)}}class B{constructor(){this.x=p(5)+p(90)*Math.random(),this.y=b(0),this.vy=b(.2),this.xVariation=p(.25),this.cycleTime=200,this.collision=!1,this.color="#FFD700",this.rotation=0,this.size=b(2)}reposition(t){this.x=this.x+this.xVariation*Math.sin(t/this.cycleTime),this.y=this.y+Math.max(.1*-this.vy,Math.abs(Math.sin(t/this.cycleTime))*this.vy),this.rotation-=Math.sin(t/this.cycleTime)*this.vy/50,this.y>=b(100)&&(this.dispose=!0)}collisionDetection(t,i){this.collision=t<i}draw(t,i){!function(t,i,e,h,n,o){const l=2*Math.PI,r=[];r.push(s(i+Math.cos(5*l/5)*h,e+Math.sin(5*l/5)*h,i,e,o)),r.push(s(i+Math.cos(3*l/5)*h,e+Math.sin(3*l/5)*h,i,e,o)),r.push(s(i+Math.cos(1*l/5)*h,e+Math.sin(1*l/5)*h,i,e,o)),r.push(s(i+Math.cos(4*l/5)*h,e+Math.sin(4*l/5)*h,i,e,o)),r.push(s(i+Math.cos(2*l/5)*h,e+Math.sin(2*l/5)*h,i,e,o)),r.push(s(i+Math.cos(0*l/5)*h,e+Math.sin(0*l/5)*h,i,e,o)),t.fillStyle=n,t.beginPath(),r.map((i,e)=>{0===e?t.moveTo(i.x,i.y):t.lineTo(i.x,i.y)}),t.closePath(),t.fill()}(t,this.x,this.y,this.size,this.color,this.rotation)}render(t,i,e,s,h){this.reposition(i);const n=(this.x-e)*(this.x-e)+(this.y-s)*(this.y-s),o=(this.size+h)*(this.size+h);this.collisionDetection(n,o),this.draw(t,i)}}class C{constructor(){this.x=p(5)+p(90)*Math.random(),this.y=b(100),this.vy=b(.2),this.collision=!1,this.color="#FFFFFF",this.size=b(3),this.type="bubble",this.dispose=!1}draw(t){n(t,this.x,this.y,this.size,null,!0,this.color),n(t,this.x,this.y,.9*this.size,null,!0,this.color,0,Math.PI/8)}collisionDetection(t,i){this.collision=t<i}reposition(){this.y-=this.vy,this.y<=b(0)&&(this.dispose=!0)}render(t,i,e,s,h){this.reposition(i);const n=(this.x-e)*(this.x-e)+(this.y-s)*(this.y-s),o=(this.size+h)*(this.size+h);this.collisionDetection(n,o),this.draw(t,i)}}class H{constructor(t,i,e){this.x=t,this.y=i,this.size=e,this.width=e/10,this.cycleTime=500,this.numPoints=16}draw(t,i){const e=i/this.cycleTime;t.strokeStyle="#006837",t.fillStyle="#006837",t.beginPath(),t.moveTo(this.x-this.width/2,b(100));for(let i=0;i<this.numPoints;i++){const s=this.width*(i/this.numPoints);t.lineTo(this.x-this.width+s+this.width/4*Math.sin(e%this.cycleTime+2*Math.PI*i/this.numPoints*3),b(100)-this.size*(i/this.numPoints))}for(let i=this.numPoints;i>=0;i--){const s=this.width*(i/this.numPoints);t.lineTo(this.x+this.width-s+this.width/4*Math.sin(e%this.cycleTime+2*Math.PI*i/this.numPoints*3),b(100)-this.size*(i/this.numPoints))}t.closePath(),t.stroke(),t.fill()}render(t,i){this.draw(t,i)}}var S;function k(t){if(m.clearRect(0,0,g,f),m.fillStyle=x.blueOne,m.fillRect(0,0,g,f),w.render(m,t),M.length<I.enemyCount&&Math.random()>.6){switch(v[Math.floor(Math.random()*v.length)]){case"simple":{const{size:t,cycleTime:i,speed:e,x:s,y:h,direction:n,color:o}=function(){const t=b(1),i=b(7),e=t+b(6)*Math.random(),s=30+e,h=p(.05)-e/100+Math.random()*p(.075),n=Math.random()>=.5?"left":"right";return{size:e,cycleTime:s,speed:h,x:"right"===n?-e:p(100)+e,y:Math.random()*b(100),direction:n,color:d(a((e-t)/(i-t),x.testing))}}();M.push(new T(t,i,e,s,h,n,o));break}case"jumper":{const{size:t,cycleTime:i,speed:e,x:s,y:h,direction:n,color:o}=function(){const t=b(3),i=b(6.5),e=t+i*Math.random(),s=2500+10*e,h=p(.008),n=Math.random()>=.5?"left":"right";return{size:e,cycleTime:s,speed:h,x:"right"===n?-e:p(100)+e,y:Math.random()*b(100),direction:n,color:d(r(c(x.jumperFish[0]),c(x.jumperFish[1]),(e-t)/(i-t)))}}();M.push(new E(t,i,e,s,h,n,o));break}case"puffer":{const{size:t,cycleTime:i,speed:e,x:s,y:h,direction:n,color:o}=function(){const t=b(3)+b(5)*Math.random(),i=8500+10*t,e=p(.015)+Math.random()*p(.025),s=Math.random()>=.5?"left":"right";return{size:t,cycleTime:i,speed:e,x:"right"===s?-t:p(100)+t,y:Math.random()*b(100),direction:s,color:x.pufferFish}}();M.push(new F(t,i,e,s,h,n,o))}}}const i=[];M.map((e,s)=>{e.render(m,t,w.x,w.y,w.size),e.collision&&(e.diameter<w.diameter?(i.push(s),w.size+=e.diameter/20,w.diameter=2*w.size,I.fishEaten++,I.score+=1e3*e.diameter/b(100),I.progress=w.diameter/b(100),I.progress>=1&&(I.active=!1,document.getElementById("blur").style.visibility="visible",document.getElementById("blur").style.opacity=.8,window.setTimeout(()=>{document.getElementById("canvas").style.visibility="hidden",document.getElementById("title").style.visibility="hidden",document.getElementById("stats").style.visibility="hidden",document.getElementById("won-game").style.visibility="visible"},1e3)),D(),5===I.fishEaten&&v.push("puffer"),15===I.fishEaten&&v.push("puffer")):w.bubble?(w.bubblePopped=!0,w.bubblePoppedTime=t):w.bubblePopped||(I.active=!1,window.setTimeout(()=>{document.getElementById("blur").style.visibility="visible",document.getElementById("blur").style.opacity=.8},350),window.setTimeout(()=>{document.getElementById("canvas").style.visibility="hidden",document.getElementById("title").style.visibility="hidden",document.getElementById("stats").style.visibility="hidden",document.getElementById("game-over").style.visibility="visible"},1e3))),!0===e.dispose&&i.push(s)});for(let t=0;t<i.length;t++)M.splice(i[t],1);Math.random()<1e-4&&z.push(new B),Math.random()<1e-4&&z.push(new C);const e=[];z.map((i,s)=>{i.render(m,t,w.x,w.y,w.size),i.collision&&(e.push(s),I.score+=500,D(),"bubble"===i.type&&(w.bubble=!0)),i.dispose&&e.push(s)});for(let t=0;t<e.length;t++)z.splice(e[t],1);P.map(i=>{i.render(m,t)}),I.active&&requestAnimationFrame(k)}function D(){document.getElementById("count").innerText=I.fishEaten,document.getElementById("score").innerText=Number(Math.round(I.score)).toLocaleString("en"),document.getElementById("progress").style.width=`${6*I.progress}vw`}function W(t){switch(t.which||t.keyCode){case 37:w.leftPressed=!0;break;case 38:w.upPressed=!0;break;case 39:w.rightPressed=!0;break;case 40:w.downPressed=!0}}function j(t){switch(t.which||t.keyCode){case 37:w.leftPressed=!1;break;case 38:w.upPressed=!1;break;case 39:w.rightPressed=!1;break;case 40:w.downPressed=!1}}function A(){document.getElementById("intro").style.visibility="hidden",document.getElementById("blur").style.visibility="hidden",document.getElementById("blur").style.opacity=0,document.getElementById("title").style.visibility="visible",document.getElementById("canvas").style.visibility="visible",document.getElementById("stats").style.visibility="visible",k(0)}function O(){I.active=!0,I.fishEaten=0,I.score=0,I.progress=0,I.elapsed=0,I.enemyCount=25,I.stage=1,w.x=p(50),w.y=b(50),w.size=b(1.5),w.diameter=2*b(1.5),w.vx=0,w.vy=0,w.theta=0,w.speedDelta=b(.0135),w.thetaDelta=b(.0145),M.splice(0,M.length),P.splice(0,P.length),z.splice(0,z.length),document.getElementById("game-over").style.visibility="hidden",document.getElementById("won-game").style.visibility="hidden",document.getElementById("blur").style.opacity=0,document.getElementById("blur").style.visibility="hidden",document.getElementById("title").style.visibility="visible",document.getElementById("canvas").style.visibility="visible",document.getElementById("stats").style.visibility="visible",D(),k(0)}y.height=f,y.width=g,P.push(new H(p(50),b(100),b(10))),document.getElementById("start-button").onclick=()=>{A()},document.getElementById("restart-button").onclick=()=>{O()},document.getElementById("back-button").onclick=()=>{O()},document.getElementById("info").onclick=()=>{I.active=!1,document.getElementById("blur").style.opacity=.8,document.getElementById("canvas").style.visibility="hidden",document.getElementById("title").style.visibility="hidden",document.getElementById("stats").style.visibility="hidden",document.getElementById("info-panel").style.visibility="visible"},document.getElementById("hide-info").onclick=()=>{document.getElementById("blur").style.opacity=0,document.getElementById("canvas").style.visibility="visible",document.getElementById("title").style.visibility="visible",document.getElementById("stats").style.visibility="visible",document.getElementById("info-panel").style.visibility="hidden",I.active=!0,k(0)},document.addEventListener("keydown",W,!1),document.addEventListener("keyup",j,!1),document.addEventListener("resize",()=>{height=y.clientHeight,width=y.clientWidth,y.width=width,y.height=height},!1),function(){let t=p(1);const i=document.createElement("canvas");i.width=t,i.height=t;const e=i.getContext("2d");e.lineWidth=p(.05),e.fillStyle=x.pufferFishTail,e.fillRect(0,0,t,t),e.strokeStyle="#ffffff",e.moveTo(0,0),e.lineTo(t/2,t/2),e.lineTo(t,0),e.stroke();const s=document.getElementById("canvas-background"),h=s.getContext("2d");s.width=s.clientWidth,s.height=s.clientHeight,h.fillStyle=h.createPattern(i,"repeat"),h.rect(0,0,s.width,s.height),h.fill();for(let t=0;t<48;t++)P.push(new H(Math.random()*p(100),b(100),b(8)+Math.random()*b(5)))}(),(S=!0)||A(),S&&(document.getElementById("blur").style.visibility="visible",Array.from(document.getElementsByClassName("info-canvas")).forEach(t=>{switch(t.height=t.clientHeight,t.width=t.clientWidth,t.id){case"intro-avoid":{const i=new T(t.clientHeight/3,1,1,4.5*t.clientWidth/10,t.clientHeight/2,"right","#addd8e");i.reposition(0),i.draw(t.getContext("2d"));const e=new u(5.5*t.clientWidth/10,t.clientHeight/2,t.clientHeight/8,Math.PI/2);e.reposition(),e.draw(t.getContext("2d"));break}case"intro-eat":{const i=new T(t.clientHeight/10,1,1,4.75*t.clientWidth/10,t.clientHeight/2,"right","#d9f0a3");i.reposition(0),i.draw(t.getContext("2d"));const e=new u(5.25*t.clientWidth/10,t.clientHeight/2,t.clientHeight/8,3*Math.PI/2);e.reposition(),e.draw(t.getContext("2d"));break}case"intro-odd":{const i=new E(t.clientHeight/3,1,1,5*t.clientWidth/10-1.2*t.clientHeight,t.clientHeight/2,"right","#87a8eb");i.reposition(0),i.draw(t.getContext("2d"));const e=new u(5*t.clientWidth/10-t.clientHeight/3,t.clientHeight/2,t.clientHeight/4,Math.PI/2);e.reposition(),e.draw(t.getContext("2d"));const s=new E(t.clientHeight/5,1,1,5*t.clientWidth/10+t.clientHeight/2,t.clientHeight/2,"right","#87a8eb");s.reposition(0),s.draw(t.getContext("2d"));const h=new u(5*t.clientWidth/10+t.clientHeight,t.clientHeight/2,t.clientHeight/4,3*Math.PI/2);h.reposition(),h.draw(t.getContext("2d"));break}case"intro-tails":{const i=new T(t.clientHeight/2.3,1,1,5*t.clientWidth/10-t.clientHeight/2,t.clientHeight/2,"left","#addd8e");i.reposition(0),i.draw(t.getContext("2d"));const e=new u(5*t.clientWidth/10+t.clientHeight/2,t.clientHeight/2,t.clientHeight/4,Math.PI/2);e.reposition(),e.draw(t.getContext("2d"));break}case"intro-bonus":{const i=new B;i.x=t.clientWidth/2-t.clientHeight/2,i.y=t.clientHeight/2,i.draw(t.getContext("2d"));const e=new C;e.color="#666666",e.size=t.clientHeight/4,e.x=t.clientWidth/2+t.clientHeight/2,e.y=t.clientHeight/2,e.draw(t.getContext("2d"));break}case"intro-win":{const i=new u(5*t.clientWidth/10,t.clientHeight/2,t.clientHeight,0);i.reposition(),i.draw(t.getContext("2d"));break}}}),document.getElementById("intro").style.visibility="visible")}]);