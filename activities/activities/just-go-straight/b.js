!function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var a=n(1),i=n(2),r=n(3);!function(){function e(e){return Math.random()*(e||268435455)|0}function t(t,n){return e(n-t)+t}function n(t){w.path_followed.push(t);var n=M.slice(0,w.path_followed.length);return n.join(",")==w.path_followed.join(",")?(w.path_followed.length==M.length&&(w.lost=!1,w.never_lost=!0,w.win=!0,w.x=10,w.y=320,w.cheated=!0,w.shovel=!0),void(w.lost=!0)):e(40)<w.chance_to_beach?(w.back_to_beach=!0,w.beach=!0,w.lost=!1,w.chance_to_beach=0,w.x=d.width-10,w.y=330,w.path_followed=[],void u.screen_change.play()):(w.lost=!0,w.never_lost=!1,w.straight_count=0,void w.chance_to_beach++)}function o(n){if(f.clone_index>-1){var a=l(f);x=a.clone_index,g[a.clone_index]=a}if(f.clone_index==-1&&(f.hat||f.sign>-1&&g.length<3)){var i=l(f);i.clone_index=g.length,g.push(i),x=g.length-1}if(f={sign:-1,sword:!1,hat:!1,steps:[],bound:[],tileset:[],tilesetb:[],clone_index:-1,eyes_x:0,eyes_y:0},f.steps=[],!w.beach&&!w.win){if(e(11)>6&&g.length>1){var r=0,o=g.slice(0);return x>-1&&o.splice(x,1),r=e(o.length),f=l(o[r]),u.screen_change.play(),f.tileset.forEach(function(e,t){2==n&&3==e&&(w.x=160*t+82)}),f.tilesetb.forEach(function(e,t){0==n&&3==e&&(w.x=160*t+82)}),void(x=-1)}x=-1,f.tileset=[e(3),e(3),e(3),e(3)],f.tilesetb=[e(3),e(3),e(3),e(3)];var s=e(4),h=e(4);f.tileset[s]=3,f.tilesetb[h]=3,0==n&&(w.x=160*h+82),2==n&&(w.x=160*s+78);var d=e(6);if(f.bounds=[],f.tileset.forEach(function(e,n){3==e?(f.bounds.push({x:160*n,y:0,width:56,height:308}),f.bounds.push({x:160*n+96,y:0,width:64,height:308})):(f.bounds.push({x:160*n,y:0,width:160,height:308}),d==n&&2==e&&(f.eyes_x=160*n+t(10,144),f.eyes_y=t(186,217)),d++)}),f.tilesetb.forEach(function(e,n){3==e?(f.bounds.push({x:160*n,y:344,width:60,height:136}),f.bounds.push({x:160*n+100,y:344,width:60,height:136})):(f.bounds.push({x:160*n,y:344,width:160,height:136}),d==n&&(f.eyes_x=160*n+t(10,144),f.eyes_y=t(424,460)),d++)}),f.sword=!1,f.hat=!1,f.sign=-1,!w.sword&&e(11)>6&&(f.sword=!0,f.sword_x=t(100,550)),!w.hat&&!f.sword&&e(11)>6&&(f.hat=!0,f.hat_x=t(100,550)),!f.hat&&!f.sword&&e(11)>4){var c=[];0==n&&(c=[0,1,3]),1==n&&(c=[0,1,2]),2==n&&(c=[1,2,3]),3==n&&(c=[0,2,3]),f.sign=c[e(3)]}u.screen_change.play()}}function s(){var e={};e=w.beach?y.bounds:f.bounds,e.forEach(function(e){e.x<w.x&&e.x+e.width>w.x&&e.y<w.y&&e.height+e.y>w.y&&(w.x=w.prev_x,w.y=w.prev_y,w.moving=!1)}),f.sword&&f.sword_x<w.x&&f.sword_x+20>w.x&&304<w.y&&344>w.y&&(f.sword=!1,w.sword=!0,u.pickup.play()),!w.hat&&f.hat&&f.hat_x<w.x&&f.hat_x+40>w.x&&300<w.y&&340>w.y&&(w.hat=!0,u.pickup.play()),w.beach&&y.shovel&&416<w.x&&456>w.x&&268<w.y&&312>w.y&&(y.shovel=!1,w.shovel=!0,u.pickup.play())}function h(){w={x:400,y:324,dir:1,moving:!1,step:0,lost:!1,straight_count:0,chance_to_beach:0,win:!1,beach:!0,back_to_beach:!1,sword:!1,hat:!1,shovel:!1,never_lost:!0,path_followed:[],end:-1,cheated:!1,end_sword:!1,end_shovel:0,dug:!1},f={sign:-1,sword:!1,hat:!1,steps:[],bounds:[],tileset:[],tilesetb:[],clone_index:-1,eyes_x:0,eyes_y:0},y={bounds:[{x:0,y:0,width:640,height:284},{x:0,y:0,width:360,height:480},{x:0,y:380,width:640,height:96},{x:580,y:340,width:60,height:140},{x:0,y:0,width:372,height:312},{x:0,y:0,width:400,height:308},{x:0,y:0,width:432,height:304},{x:0,y:0,width:464,height:300},{x:0,y:0,width:488,height:296},{x:468,y:284,width:160,height:24}],shovel:!0,steps:[]},g=[],S=0,A=0,j=0,C=1}function l(e){var t;if(Array.isArray(e))t=e.map(function(e){return Array.isArray(e)||"object"==typeof e&&e?l(e):e});else{t={};for(var n in e)e.hasOwnProperty(n)&&(Array.isArray(e[n])||"object"==typeof e[n]&&e[n]?t[n]=l(e[n]):t[n]=e[n])}return t}var d=document.createElement("canvas");d.width=640,d.height=480,d.style.backgroundColor="#000",document.body.appendChild(d);var c=d.getContext("2d");c.imageSmoothingEnabled=!1,c.mozImageSmoothingEnabled=!1,c.webkitImageSmoothingEnabled=!1;var w={},y={},f={},g=[],x=-1;h();var u={pickup:[0,,.0247,.3763,.2638,.8004,,,,,,.4915,.5263,,,,,,1,,,,,.5],screen_change:[0,,.1223,,.2985,.4522,,.2578,,,,,,.2074,,,,,.8619,,,,,.5],win:[0,,.42,,.61,.4823,.3,.28,.08,,,,,.5228,,.4983,,,1,,,,,.5],empty:[1,,.27,,.59,.45,,-.2325,,,,,,.0266,.1374,,,,1,,,,,.5],step:[1,,.0284,,.1618,.397,,-.6104,,,,,,,,,,,1,,,.2436,,.5],hit:[3,,.0833,,.1303,.3802,,-.4149,,,,,,,,,,,1,,,.1488,,.5],wave:[3,.56,.39,,.85,.41,,.26,.12,,,.08,,,,,,,.4,,,,-.26,.5]};Object.keys(u).map(function(e,t){var n=a.init(u[e]);u[e]=new Audio,u[e].src=n});var v=new Image;v.src="b.png";var p=new Image;p.src="p.png";var _=new Image;_.src="t.png";var m=new Image;m.src="j.png";var b=new Image;b.src="k.png";var I=new Image;I.src="i.png";var k=new Image;k.src="w.png";var R=[!1,!1,!1,!1],E=!1,S=0,A=0,D=0,j=0,T=2,C=1,M=[0,0,2,2,3,1,3,1];i.start(function(e){if(S+=e,c.clearRect(0,0,d.width,d.height),w.end>-1&&r.isDown(r.ENTER)&&R[0]&&R[1]&&R[2]&&R[3]&&!E&&(u.win.play(),E=!0),w.end>-1&&r.isDown(r.ENTER)&&(!E||C<=0)&&(E&&(E=!1,R=[!1,!1,!1,!1]),h(),u.screen_change.play()),w.prev_x=w.x,w.prev_y=w.y,w.moving=!1,w.win||w.back_to_beach||(r.isDown(r.UP)&&(w.y=w.y-300*e,w.dir=0,w.moving=!0,s()),r.isDown(r.RIGHT)&&(w.x=w.x+300*e,w.dir=1,w.moving=!0,s()),r.isDown(r.DOWN)&&(w.y=w.y+300*e,w.dir=2,w.moving=!0,s()),r.isDown(r.LEFT)&&(w.x=w.x-300*e,w.dir=3,w.moving=!0,s())),w.back_to_beach&&(w.x>550?(w.x=w.x-100*e,w.dir=3,w.moving=!0):w.back_to_beach=!1),w.x<10?(w.x=d.width-10,n(3),o(3)):w.x>d.width-10&&(w.x=10,w.beach=!1,w.lost?n(1):(w.straight_count++,w.straight_count>5&&(w.win=!0,w.x=10,w.y=320)),o(1)),w.y<236?(w.x=278,w.y=d.height-10,n(0),o(0)):w.y>d.height-10&&(w.x=378,w.y=240,n(2),o(2)),w.beach)c.drawImage(v,0,0,d.width,d.height),T>3&&c.drawImage(k,136,360,504,72),T>5&&(T=0,u.wave.play()),T+=e;else if(w.win)c.drawImage(_,0,0,d.width,d.height),w.never_lost&&(w.shovel||w.end_shovel>0)&&(w.walk_to=316,w.x>=240&&(w.shovel=!1,w.end_shovel=1),w.x>=w.walk_to&&(j+=e,j>.5&&(w.dug||(u.hit.play(),w.dug=!0),w.end_shovel=2),j>1&&(c.drawImage(I,65,0,40,28,248,236,160,112),c.drawImage(I,10,5,22,19,280,264,88,76),236!=w.y&&(f.steps.splice(f.steps.length-5),w.y=236)),j>1.5&&(w.dir=2,w.end_shovel=0,w.shovel=!0,w.cheated&&(u.win.play(),w.end=0,w.cheated=!1),w.end==-1&&(u.win.play(),w.end=3))),w.x>=150&&w.sword&&(u.hit.play(),w.sword=!1,w.end_sword=!0)),w.never_lost||(w.walk_to=200,c.drawImage(I,65,0,40,28,248,236,160,112),w.x>=w.walk_to&&w.end==-1&&(u.empty.play(),w.end=1)),w.never_lost&&!w.shovel&&0==w.end_shovel&&(w.walk_to=294,w.x>=w.walk_to&&w.end==-1&&(u.empty.play(),w.end=2,w.dir=2),w.x>=150&&w.sword&&(u.hit.play(),w.sword=!1,w.end_sword=!0)),w.x<=w.walk_to&&(w.x=w.x+100*e,w.dir=1,w.moving=!0);else{var t=0;f.tileset.forEach(function(e){c.drawImage(m,40*e,0,40,87,t,0,160,348),0==f.sign&&3==e&&c.drawImage(I,46,0,10,15,t+20,196,40,60),t+=160}),c.fillStyle="#ffcc00",c.fillRect(0,344,640,136)}if(w.moving&&(A+=e,(w.back_to_beach||w.win)&&A>.09||!w.back_to_beach&&!w.win&&A>.04)){A=0;var a={};w.step?(a={x:w.x+8,y:w.y},w.step=0):(a={x:w.x-12,y:w.y-4},w.step=1),w.beach?y.steps.push(a):f.steps.push(a)}if(c.fillStyle="#d6ad09",w.beach?y.steps.forEach(function(e){c.fillRect(e.x,e.y,4,4)}):f.steps.forEach(function(e){c.fillRect(e.x,e.y,4,4)}),w.beach&&y.shovel&&c.drawImage(I,84,52,7,9,416,276,28,36),w.beach||w.win||(f.sword&&c.drawImage(I,56,0,4,9,f.sword_x,292,16,36),f.hat&&(c.drawImage(I,0,0,10,10,f.hat_x,292,40,40),w.hat||c.drawImage(I,36,0,10,5,f.hat_x,292,40,20)),3==f.sign&&c.drawImage(I,90,28,12,14,14,238,48,56)),c.drawImage(p,8*w.dir,0,8,9,w.x-16,w.y-36,32,36),c.fillStyle="#4e3d1f",w.moving?Math.ceil(10*S)%2==0?(u.step.play(),c.fillRect(w.x+8,w.y,4,4)):c.fillRect(w.x-12,w.y,4,4):(c.fillRect(w.x+8,w.y,4,4),c.fillRect(w.x-12,w.y,4,4)),0==w.dir&&(w.shovel&&c.drawImage(I,79,52,2,8,w.x-20,w.y-32,8,32),w.sword&&c.drawImage(I,60,0,2,10,w.x+12,w.y-44,8,40),w.hat&&c.drawImage(I,10,0,8,5,w.x-16,w.y-40,32,20)),1==w.dir&&(w.hat&&c.drawImage(I,18,0,10,5,w.x-24,w.y-48,40,20),w.sword&&c.drawImage(I,60,0,2,10,w.x-12,w.y-44,8,40),w.shovel&&c.drawImage(I,79,49,12,3,w.x-28,w.y-12,48,12)),2==w.dir&&(w.shovel&&c.drawImage(I,81,52,3,8,w.x+8,w.y-20,12,32),w.hat&&c.drawImage(I,28,0,8,5,w.x-16,w.y-44,32,20),w.sword&&c.drawImage(I,62,0,2,10,w.x-20,w.y-44,8,40)),3==w.dir&&(w.shovel&&c.drawImage(I,79,46,12,3,w.x-20,w.y-12,48,12),w.sword&&c.drawImage(I,62,0,2,10,w.x-20,w.y-44,8,40),w.hat&&c.drawImage(I,36,0,10,5,w.x-16,w.y-48,40,20)),1==w.end_shovel&&c.drawImage(I,79,63,12,3,w.x-16,w.y-16,48,12),2==w.end_shovel&&c.drawImage(I,79,66,12,7,w.x-16,w.y-20,48,28),w.end>-1&&(c.drawImage(I,0,28,90,18,136,392,360,72),R[w.end]=!0,c.fillStyle="#bd7100",c.fillRect(142,32,356,4),c.fillRect(138,36,364,44),c.fillStyle="#905600",c.fillRect(138,76,4,4),c.fillRect(498,76,4,4),c.fillRect(142,80,356,4),R.forEach(function(e,t){c.fillStyle="#bd7100",c.fillRect(36*t+256+4,24,8,4),c.fillRect(36*t+256,28,16,4),c.fillStyle="#905600",c.fillRect(36*t+256+4,28,8,8),e&&(c.fillStyle="#ff0033",c.fillRect(36*t+256+4,28,8,8),w.end==t&&Math.ceil(10*S)%3==0&&(c.fillStyle="#905600",c.fillRect(36*t+256+4,28,8,8)))}),c.drawImage(I,0,9*w.end+46,79,9,162,42,316,36)),!w.beach&&!w.win){var i=0;f.tilesetb.forEach(function(e){c.drawImage(b,40*e,0,40,39,i,324,160,156),2==f.sign&&3==e&&c.drawImage(I,90,28,12,14,t+100,404,48,56),i+=160}),1==f.sign&&c.drawImage(I,46,0,10,15,586,332,40,60)}if(w.end_sword&&c.drawImage(I,56,0,4,9,150,304,16,36),f.eyes_x>0&&D<3&&(c.fillStyle="#ff0033",c.fillRect(f.eyes_x,f.eyes_y,4,4),c.fillRect(f.eyes_x+12,f.eyes_y,4,4)),D>=3.2?D=0:D+=e,E){C-=e,c.fillStyle="rgba(189,113,0,0.9)",c.fillRect(30,30,580,420),c.drawImage(I,0,81,99,9,122,100,396,36),c.fillStyle="#ffffff",c.font="20px serif";for(var l="You have found every possible ending and completed the game,\nI hope you enjoyed it.\nDid you find the konami code ending by yourself?\nIf you did, i'm impressed, give me a shout on twitter @bibishop\n\nPressing Enter again will reset the game and you will lose all\nthe achievements.",g=60,x=210,M=25,q=l.split("\n"),N=0;N<q.length;N++)c.fillText(q[N],g,x+N*M)}w.prev_x=w.x,w.prev_y=w.y})}()},function(e,t){function n(){this.setSettings=function(e){for(var t=0;t<24;t++)this[String.fromCharCode(97+t)]=e[t]||0;this.c<.01&&(this.c=.01);var n=this.b+this.c+this.e;if(n<.18){var a=.18/n;this.b*=a,this.c*=a,this.e*=a}}}function a(){this._params=new n;var e,t,a,i,r,o,s,h,l,d,c,w;this.reset=function(){var e=this._params;i=100/(e.f*e.f+.001),r=100/(e.g*e.g+.001),o=1-e.h*e.h*e.h*.01,s=-e.i*e.i*e.i*1e-6,e.a||(c=.5-e.n/2,w=5e-5*-e.o),h=1+e.l*e.l*(e.l>0?-.9:10),l=0,d=1==e.m?0:(1-e.m)*(1-e.m)*2e4+32},this.totalReset=function(){this.reset();var n=this._params;return e=n.b*n.b*1e5,t=n.c*n.c*1e5,a=n.e*n.e*1e5+12,3*((e+t+a)/3|0)},this.synthWave=function(n,y){var f=this._params,g=1!=f.s||f.v,x=f.v*f.v*.1,u=1+3e-4*f.w,v=f.s*f.s*f.s*.1,p=1+1e-4*f.t,_=1!=f.s,m=f.x*f.x,b=f.g,I=f.q||f.r,k=f.r*f.r*f.r*.2,R=f.q*f.q*(f.q<0?-1020:1020),E=f.p?((1-f.p)*(1-f.p)*2e4|0)+32:0,S=f.d,A=f.j/2,D=f.k*f.k*.01,j=f.a,T=e,C=1/e,M=1/t,q=1/a,N=5/(1+f.u*f.u*20)*(.01+v);N>.8&&(N=.8),N=1-N;for(var U,K,L,O,P,W,F=!1,G=0,H=0,z=0,Y=0,B=0,J=0,Q=0,V=0,X=0,Z=0,$=new Array(1024),ee=new Array(32),te=$.length;te--;)$[te]=0;for(var te=ee.length;te--;)ee[te]=2*Math.random()-1;for(var te=0;te<y;te++){if(F)return te;if(E&&++X>=E&&(X=0,this.reset()),d&&++l>=d&&(d=0,i*=h),o+=s,i*=o,i>r&&(i=r,b>0&&(F=!0)),K=i,A>0&&(Z+=D,K*=1+Math.sin(Z)*A),K|=0,K<8&&(K=8),j||(c+=w,c<0?c=0:c>.5&&(c=.5)),++H>T)switch(H=0,++G){case 1:T=t;break;case 2:T=a}switch(G){case 0:z=H*C;break;case 1:z=1+2*(1-H*M)*S;break;case 2:z=1-H*q;break;case 3:z=0,F=!0}I&&(R+=k,L=0|R,L<0?L=-L:L>1023&&(L=1023)),g&&u&&(x*=u,x<1e-5?x=1e-5:x>.1&&(x=.1)),W=0;for(var ne=8;ne--;){if(Q++,Q>=K&&(Q%=K,3==j))for(var ae=ee.length;ae--;)ee[ae]=2*Math.random()-1;switch(j){case 0:P=Q/K<c?.5:-.5;break;case 1:P=1-Q/K*2;break;case 2:O=Q/K,O=6.28318531*(O>.5?O-1:O),P=1.27323954*O+.405284735*O*O*(O<0?1:-1),P=.225*((P<0?-1:1)*P*P-P)+P;break;case 3:P=ee[Math.abs(32*Q/K|0)]}g&&(U=J,v*=p,v<0?v=0:v>.1&&(v=.1),_?(B+=(P-J)*v,B*=N):(J=P,B=0),J+=B,Y+=J-U,Y*=1-x,P=Y),I&&($[V%1024]=P,P+=$[(V-L+1024)%1024],V++),W+=P}W*=.125*z*m,n[te]=W>=1?32767:W<=-1?-32768:32767*W|0}return y}}var i=new a;e.exports={init:function(e){i._params.setSettings(e);var t=i.totalReset(),n=new Uint8Array(4*((t+1)/2|0)+44),a=2*i.synthWave(new Uint16Array(n.buffer,44),t),r=new Uint32Array(n.buffer,0,44);r[0]=1179011410,r[1]=a+36,r[2]=1163280727,r[3]=544501094,r[4]=16,r[5]=65537,r[6]=44100,r[7]=88200,r[8]=1048578,r[9]=1635017060,r[10]=a,a+=44;for(var o=0,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h="data:audio/wav;base64,";o<a;o+=3){var l=n[o]<<16|n[o+1]<<8|n[o+2];h+=s[l>>18]+s[l>>12&63]+s[l>>6&63]+s[63&l]}return h}}},function(e,t){function n(){return window.performance&&window.performance.now?window.performance.now():Date.now()}function a(e){return window.requestAnimationFrame(function(){i&&i.begin();var t=n(),a=t-r;a>999?a=1/60:a/=1e3,r=t,e(a),i&&i.end()})}var i,r=n();t.start=function(e){return a(function t(n){e(n),a(t)})}},function(e,t){var n={},a={};a.LEFT=37,a.UP=38,a.RIGHT=39,a.DOWN=40,a.ENTER=13,a.isDown=function(e){return n[e]},a.onKeydown=function(e){n[e.keyCode]=!0},a.onKeyup=function(e){n[e.keyCode]=null},window.addEventListener("keyup",function(e){a.onKeyup(e)},!1),window.addEventListener("keydown",function(e){a.onKeydown(e)},!1),e.exports=a}]);