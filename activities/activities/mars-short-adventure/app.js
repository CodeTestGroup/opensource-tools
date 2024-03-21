(()=>{function e(){gc.size={x:window.innerWidth,y:window.innerHeight},gc.originalRatio=Math.min(gc.size.x/gc.res.x,gc.size.y/gc.res.y),gc.canvas.style.width=Math.round(gc.res.x*gc.originalRatio)+"px",gc.canvas.style.height=Math.round(gc.res.y*gc.originalRatio)+"px",gc.ratio=gc.originalRatio*(window.devicePixelRatio||1),t()}function t(){gc.canvas.width=Math.round(gc.res.x*gc.ratio*gc.graphicsQuality),gc.canvas.height=Math.round(gc.res.y*gc.ratio*gc.graphicsQuality)}function a(){gc.last=+new Date,function(){if(gc.paused)return;scene.n(),character.isGoingBack()?(gc.paused=1,s(-1)):character.levelIsCompleted()?(gc.paused=1,s(1)):character.isDead()&&(gc.paused=1,r())}(),c.save(),c.scale(gc.ratio*gc.graphicsQuality,gc.ratio*gc.graphicsQuality),scene.r(),c.restore(),requestAnimationFrame(a)}function r(){scene.reset(),gc.paused=0}function s(e){setTimeout((()=>{map.nextLevel(e),r()}),30)}window.rInt=(e,t)=>Math.floor(e+Math.random()*(t-e)),window.rFloat=(e,t)=>e+Math.random()*(t-e),window.gc={res:{x:1280,y:720},start:+new Date,last:+new Date,paused:0,splashScreen:0,graphicsQuality:1,muted:1,stars:0,starsTotal:0,changeQuality:e=>{gc.graphicsQuality=e,t()}},window.onload=function(){var t;t=document.getElementById("app"),gc.canvas=t,window.c=gc.canvas.getContext("2d"),c.imageSmoothingEnabled=0,window.l=c.lineTo.bind(c),window.m=c.moveTo.bind(c),window.bp=c.beginPath.bind(c),window.cp=c.closePath.bind(c),gc.gravity=new F(0,-.4),e(),control.i(),scene.i(),a(),gc.canvas.addEventListener("click",(e=>{gc.splashScreen&&(gc.splashScreen=0),gc.ac=window.AudioContext?new AudioContext:new window.webkitAudioContext})),document.addEventListener("paste",(e=>{map.setMap(JSON.parse(e.clipboardData.getData("text/plain"))),e.preventDefault(),gc.stars=0,gc.starsTotal=0,map.i(),character.savePosition(map.getStart()),r()}))},window.onresize=e})(),window.control=(()=>{const e=[0,0,0,0];return{i:()=>{window.addEventListener("keydown",(t=>{"KeyA"!==t.code&&"ArrowLeft"!==t.code||(e[3]=1),"KeyW"!==t.code&&"ArrowUp"!==t.key||(e[0]=1),"KeyD"!==t.code&&"ArrowRight"!==t.code||(e[1]=1),"KeyS"!==t.code&&"ArrowDown"!==t.code||(e[2]=1),"Space"===t.code&&(e[4]=1),"Digit1"===t.code&&gc.changeQuality(1),"Digit2"===t.code&&gc.changeQuality(.75),"Digit3"===t.code&&gc.changeQuality(.5),"Digit4"===t.code&&gc.changeQuality(.1),"KeyM"===t.code&&(gc.muted=!gc.muted)})),window.addEventListener("keyup",(t=>{"KeyA"!==t.code&&"ArrowLeft"!==t.code||(e[3]=0),"KeyW"!==t.code&&"ArrowUp"!==t.code||(e[0]=0),"KeyD"!==t.code&&"ArrowRight"!==t.code||(e[1]=0),"KeyS"!==t.code&&"ArrowDown"!==t.code||(e[2]=0),"Space"===t.code&&(e[4]=0)}))},pressed:e}})(),window.characterAnimations=(()=>{const e=[35,73],t=[[[19,42,22,59,14,73],"#240000","#EBEFF2",1],[[20,42,29,56,27,73],"#240000","#EBEFF2",1],[[22,16,9,26,22,38,15,26],"#240000","#EBEFF2",1],[[21,15,18,41,10,45,4,19],"#240000","#EBEFF2",1],[[20,41,22,15,27,29],"#240000","#EBEFF2",1],[[17,13,30,13,34,3,6,0],"#240000","#EBEFF2",1],[[29,6,25,5,26,8],"#240000","#A54B19",1],[[4,31,48,29,47,34,31,35,27,39,0,37],"#240000","#A54B19",1],[[22,15,9,26,22,38,15,26],"#240000","#EBEFF2",1]],a={stay:[t,[[[19,45,23,60,14,73],[20,45,30,58,27,73],[22,19,9,29,22,41,15,29],[21,18,19,44,10,48,4,23],[20,44,23,18,28,33],[16,17,29,18,34,8,6,3],[29,10,25,9,26,12],[4,33,48,32,47,37,31,38,27,42,0,39],[22,19,9,30,22,42,14,30]]],700,0],walk:[t,[[[19,43,16,61,-1,71],[21,44,35,52,38,71],[22,18,9,29,22,41,15,28],[22,17,19,43,10,46,5,21],[20,43,24,17,28,32],[17,15,30,15,34,5,6,2],[29,8,25,7,26,10],[4,32,48,30,47,35,31,37,27,41,0,39],[22,19,10,30,22,42,15,29]],[0,0,0,0,0,0,0,0,0],[[22,44,38,53,45,72],[19,44,16,60,-4,72],[22,19,9,30,22,42,15,29],[23,17,19,43,10,46,6,21],[21,44,24,18,28,32],[17,15,31,16,34,6,7,2],[29,8,25,7,26,10],[2,33,46,31,45,36,29,37,25,41,-2,39],[22,19,10,30,22,42,15,30]]],200,0],jump:[t,[[[19,43,15,60,-2,73],[20,42,38,41,27,55],[22,16,10,26,22,39,15,26],[22,15,19,41,10,44,5,19],[20,41,24,15,28,29],[19,14,32,9,32,-1,5,5],[28,3,24,4,26,6],[4,31,48,29,47,34,31,35,27,39,0,37],[22,15,9,26,22,38,15,26]]],300,1],fall:[t,[[[19,42,27,57,22,73],[19,42,33,56,36,73],[22,16,11,28,23,42,17,28],[18,15,19,41,11,46,2,22],[21,42,19,15,26,29],[11,11,24,13,29,4,2,-4],[23,6,19,5,20,8],[2,29,46,27,45,32,29,34,26,38,-2,36],[22,16,9,27,24,37,14,27]]],300,1],drop:[t,[[[17,61,29,66,14,73],[19,60,39,66,27,73],[25,37,12,48,25,60,18,47],[21,36,18,62,9,65,4,40],[20,63,22,37,27,51],[17,37,30,38,34,28,6,24],[29,30,24,29,26,32],[5,51,49,49,48,54,32,56,29,60,1,58],[24,37,12,48,24,60,17,48]]],150,1],sit:[t,[[[17,61,29,66,14,73],[19,60,39,66,27,73],[25,37,12,48,25,60,18,47],[21,36,18,62,9,65,4,40],[20,63,22,37,27,51],[17,37,30,38,34,28,6,24],[29,30,24,29,26,32],[5,51,49,49,48,54,32,56,29,60,1,58],[24,37,12,48,24,60,17,48]]],150,1],wall:[[[[21,44,33,55,32,74],"#240000","#EBEFF2",1],[[22,44,34,35,33,53],"#240000","#EBEFF2",1],[[20,19,27,31,35,14,26,24],"#240000","#EBEFF2",1],[[19,17,21,44,13,48,3,25],"#240000","#EBEFF2",1],[[24,43,21,17,28,30],"#240000","#EBEFF2",1],[[17,19,25,9,20,0,0,19],"#240000","#EBEFF2",1],[[20,5,16,8,20,9],"#240000","#A54B19",1],[[11,59,7,15,12,16,14,32,18,35,18,63],"#240000","#A54B19",1],[[21,18,33,18,36,2,31,14],"#240000","#EBEFF2",1]],[]],climb:[[[[21,44,33,55,32,74],"#240000","#EBEFF2",1],[[22,44,34,35,33,53],"#240000","#EBEFF2",1],[[20,19,27,31,35,14,26,24],"#240000","#EBEFF2",1],[[19,17,21,44,13,48,3,25],"#240000","#EBEFF2",1],[[24,43,21,17,28,30],"#240000","#EBEFF2",1],[[17,19,25,9,20,0,0,19],"#240000","#EBEFF2",1],[[20,5,16,8,20,9],"#240000","#A54B19",1],[[11,59,7,15,12,16,14,32,18,35,18,63],"#240000","#A54B19",1],[[21,18,33,18,36,2,31,14],"#240000","#EBEFF2",1]],[[[21,44,34,33,34,50],[21,45,33,57,33,74],[20,19,33,14,36,1,28,11],[19,18,21,44,13,49,3,25],[23,44,20,18,27,31],[17,18,25,8,20,-1,0,18],[20,4,16,8,20,8],[11,60,7,17,12,17,14,33,18,37,18,64],[21,18,32,29,35,15,31,21]]],300],die:[t,[[[-8,62,8,67,17,81],[65,63,52,73,35,73],[51,68,34,68,21,74,39,71],[4,44,22,63,19,72,-3,60],[16,64,42,65,29,70],[57,72,70,72,74,62,46,59],[69,66,64,65,65,68],[9,66,53,64,52,69,36,70,32,74,5,72],[-19,68,-3,73,13,71,-6,69]]],1e3,1]};let r,s=new D(...a.stay,300),i="stay",n=0,o=0;return{direction:()=>n?-1:1,mirror:e=>{n=e},to:(e,t,c)=>{"walk"===e?sfx.run():"wall"===e?sfx.wall():"flying"===e&&sfx.flying(),i!==e&&("jump"===e?sfx.jump():"drop"===e?sfx.fall():"die"===e&&sfx.die(),o&&!c?r=e:(s=new D(...a[e]),i=e,o=t))},r:(t,l)=>{let h=l||1;c.translate(t.x+e[0]/2,t.y+e[1]/2),c.scale(n?-h:h,-h),draw.r(s.n(),e,3),o&&s.isFinished()&&r&&(s=new D(...a[r]),i=r,r=null,o=0)}}})();const e=[3,4,5,6],t=[150,150,200,250],a=[150,170,250,300],r=[12,12,13,14];window.character=(()=>{let s,i,n=0,o=a[n],l=t[n],h={isDead:0,dying:0},d=0,w=0,g=new F;const y=35,p=73;let u={first:1,second:0,done:0},f=0,m=0,x=0;function b(e){h.dying||(e?particles.dying(i.get().add(new F(0,p)),[color.dying1,color.dying2,color.dying3,color.dying4]):particles.dying(i,[color.dying1,color.dying2,color.dying3,color.dying4]),g=new F,h.dying=1,setTimeout((()=>{h.isDead=1}),1e3))}return{i:()=>{i=map.getStart().get(),s=i.get()},savePosition:e=>{s=e||i.get()},reset:()=>{g=new F,i=s.get()||map.getStart().get(),o=a[n],l=t[n],characterAnimations.mirror(0!==i.x),h={dying:0,isDead:0},characterAnimations.to("stay"),f=0,d=0,w=0},n:()=>{if(h.dying){g.y>0&&(g.y=0),characterAnimations.to("die",0,1);const e=g.get().normalize().mult(-.017);return e.add(gc.gravity.get().mult(.45)),g.add(e),i.add(g),0}const c=g.get().normalize().mult(-.017);c.add(gc.gravity.get().mult(.9)),control.pressed[3]?(c.add(new F(-1,0)),characterAnimations.mirror(1),x=1):control.pressed[1]&&(c.add(new F(1,0)),characterAnimations.mirror(0),x=0),g.add(c),g.x=Math.abs(g.x)<e[n]?g.x:Math.abs(g.x)/g.x*e[n],i.add(g);const a=function(e){const t={touches:[],sides:[],isOverFan:0};return map.getMap().doors.forEach((c=>{const a=c.getPosition();if(c.active&&e.x+y>a.x&&e.x<a.x+c.w&&e.y<a.y+c.h&&e.y+p>a.y){const r=[a.y+c.h,a.x+c.w,a.y-p,a.x-y],s=[a.y+c.h-e.y,a.x+c.w-e.x,e.y+p-a.y,e.x+y-a.x],i=s.indexOf(Math.min(...s));t.sides.push(i),t.touches.push({side:i,type:c.type,intersect:r[i],velocity:new F})}})),map.getMap().keys.forEach((t=>{const c=t.getCenter();t.active&&c.distance(e.get().add(new F(y/2,p/2)))<50&&(t.active=0,keys.add(t.type))})),map.getMap().map.forEach((c=>{if(5!==c.type&&c.active&&e.x+y>c.x&&e.x<c.x+c.w&&e.y<c.y+c.h&&e.y+p>c.y){const a=[c.y+c.h,c.x+c.w,c.y-p,c.x-y],r=[c.y+c.h-e.y,c.x+c.w-e.x,e.y+p-c.y,e.x+y-c.x],s=r.indexOf(Math.min(...r));if(3===c.type&&0!==s)return;1===c.type&&+new Date-c.lastDamage>2e3&&(g.y>0&&(g.y=0),character.damage(70),c.lastDamage=+new Date),t.sides.push(s),t.touches.push({side:s,type:c.type,intersect:a[s],velocity:c.getVelocity(),climbing:1,block:c})}})),t}(i);a.touches.forEach((e=>{0===e.side&&g.y<=0&&(l+=5,l>t[n]&&(l=t[n]),i.y=e.intersect,g.y=0,i.add(e.velocity),control.pressed[3]||control.pressed[1]||(2===e.type?g.x/=1.02:g.x/=2),Math.abs(g.x)>.1&&particles.addRunning(i,g)),1===e.side&&(i.x=e.intersect,e.climbing&&(control.pressed[3]&&l>0&&-1===a.sides.indexOf(0)&&n>1?(g=e.velocity,particles.addWall(i,-1),l-=1.2,control.pressed[0]?(g=new F(0,2),characterAnimations.to("climb",0)):characterAnimations.to("wall")):l<=0&&characterAnimations.to("wall"))),3===e.side&&(i.x=e.intersect,e.climbing&&(control.pressed[1]&&l>0&&-1===a.sides.indexOf(0)&&n>1?(g=e.velocity,particles.addWall(i,1),l-=1.2,control.pressed[0]?(g=new F(0,2),characterAnimations.to("climb",0)):characterAnimations.to("wall")):l<=0&&characterAnimations.to("wall"))),2===e.side&&(i.y=e.intersect,g.y=g.y>=0?0:g.y)})),-1!==a.sides.indexOf(0)&&g.y<=0?(m=0,control.pressed[3]||control.pressed[1]?characterAnimations.to("walk"):control.pressed[2]?(m=1,characterAnimations.to("sit")):characterAnimations.to("stay"),control.pressed[0]&&u.first&&(g.add(new F(0,r[n])),characterAnimations.to("jump",0,1),u.first=0),u.first||control.pressed[0]||(u.first=1,u.second=0,u.done=0),f&&(control.pressed[2]||characterAnimations.to("drop",1),particles.addJump(i,g.x),f=0)):f=1,(!a.sides.length||l<0)&&g.y<0&&(a.isOverFan||characterAnimations.to("fall"),control.pressed[0]&&(u.second||u.first),!control.pressed[0]&&!u.first&&u.done),!control.pressed[0]&&g.y>0&&(g.y/=1.2),2===a.sides.length&&-1!==a.sides.indexOf(2)&&-1!==a.sides.indexOf(0)&&b()},nSplashScreen:()=>{},damage:e=>{o-=e,o<0?b():particles.dying(i,[color.dying1,color.dying2,color.dying3,color.dying4])},upgrade:()=>{n++,n>3&&(n=3),o=a[n],l=t[n],messages.show("You are stronger now...",5e3)},r:()=>{c.save(),characterAnimations.r(i),c.restore()},rSplashScreen:()=>{c.save(),characterAnimations.r(new F(320,350),6),c.restore()},center:()=>i.get().add(new F(y/2,p/2)),restore:e=>{o+=e,o>a[n]&&(o=a[n])},position:()=>i,isDead:()=>h.isDead,isSitting:()=>m,isMirrored:()=>x,health:()=>o,stamina:()=>l,maxHealth:()=>a[n],maxStamina:()=>t[n],levelIsCompleted:()=>d,isGoingBack:()=>w}})();const s=[500,550,650,800],i=[8,9,11,13],n=[1,2,3,4],o=[35,45,65,100];function h(e,t,a,r){const s=+new Date;this.active=1,this.position=e,this.n=function(){this.position.add(t),+new Date-s>a&&(this.active=0),map.getMap().enemy.forEach((e=>{e.active&&this.position.distance(e.center())<=e.radius()&&(e.damage(o[r]),this.active=0)}))},this.r=function(){c.save(),c.beginPath(),c.strokeStyle="#000",c.lineWidth=4,c.lineJoin="round",c.translate(this.position.x,this.position.y),c.fillStyle="green",c.rect(0,0,5,5),c.fill(),c.stroke(),c.closePath(),c.restore()}}function d(e,t,a,r,s,i){this.type=e,this.x=t,this.y=a,this.w=r,this.h=s,this.d=i,this.active=1,this.collisionRadius=35;let n=+new Date;const o=[()=>{g+=w,d+=g,g<=-.5&&x()},()=>{g*=.97,d+=g;const e=p.get().add(this.d.get().mult(u));this.x=e.x,this.y=e.y,(u>1||u<0)&&(m*=-1,x()),u+=f*m}],l=[[[19,0,28,11,27,21,13,17,0,28,12,26,20,34,10,39,7,56,16,45,24,46,22,56,36,68,32,56,39,48,48,58,65,56,53,50,49,40,63,43,76,30,62,33,52,27,64,16,54,0,54,12,41,19,33,4],"black","black",1]],h=[[[11,0,0,18,23,20],color.black,color.black,1],[[10,11,13,11,11,13],color.black,color.mechanics,1]];let d=0,w=-.015,g=0,y=-1,p=new F(t,a),u=0,f=1/Math.floor(i.mag()/6),m=1;function x(){y++,y===o.length&&(y=0)}x(),this.n=()=>{o[y](),+new Date-n>=1e3&&new F(this.x+15,this.y+15).distance(character.center())<50&&(character.damage(100),n=+new Date)},this.r=()=>{c.save(),c.translate(this.x+18,this.y+18),c.scale(1,-1),c.rotate(d),draw.r(l,[76,68]),c.restore(),c.save(),c.translate(p.x+18,p.y+18),draw.r(h,[23,20]),c.restore(),c.save(),c.translate(p.x+i.x+18,p.y+i.y+18),draw.r(h,[23,20]),c.restore()}}function w(e,t,a,r,s,i){this.type=e,this.x=t,this.y=a,this.w=r,this.h=s,this.d=i,this.isMovable=i.mag()>0,this.active=1,this.lastDamage=0;const n=[color.black,color.grey,color.ice,color.grey],o=[[[0,8,40,8,35,0,34,6,23,1,21,5,15,7,11,1,8,6,3,1],color.black,color.black,1]],l=[[[11,0,0,18,23,20],color.black,color.black,1],[[10,11,13,11,11,13],color.black,color.mechanics,1]];let h=new F(t,a),d=0,w=this.isMovable?1/Math.floor(i.mag()/2):0,g=1;this.n=()=>{if(this.isMovable){const e=h.get().add(this.d.get().mult(d));this.x=e.x,this.y=e.y,(d>1||d<0)&&(g*=-1),d+=w*g}},this.getVelocity=()=>i.get().normalize().mult(2*g),this.r=()=>{if(this.isMovable&&(c.save(),c.translate(h.x+r/2,h.y+s/2),draw.r(l,[23,20],1),c.restore(),c.save(),c.translate(h.x+i.x+r/2,h.y+i.y+s/2),draw.r(l,[23,20]),c.restore(),c.save(),c.strokeStyle=color.mechanics,c.moveTo(h.x+r/2,h.y+s/2),c.lineTo(h.x+i.x+r/2,h.y+i.y+s/2),c.stroke(),c.restore()),c.save(),c.translate(this.x,this.y),1===this.type){c.save(),c.scale(1,-1),c.translate(-20,-this.h-4);for(let e=0;e<Math.floor(this.w/40);e++)c.translate(40,0),draw.r(o,[40,8],1);c.restore(),c.save(),c.translate(-20,-4);for(let e=0;e<Math.floor(this.w/40);e++)c.translate(40,0),draw.r(o,[40,8],1);c.restore(),c.save(),c.rotate(Math.PI/2),c.translate(-20,-this.w-4);for(let e=0;e<Math.floor(this.h/40);e++)c.translate(40,0),draw.r(o,[40,8],1);c.restore(),c.save(),c.rotate(-Math.PI/2),c.translate(-this.h-20,-4);for(let e=0;e<Math.floor(this.h/40);e++)c.translate(40,0),draw.r(o,[40,8],1);c.restore(),c.fillStyle=color.black,c.fillRect(0,0,this.w,this.h)}else bp(),c.strokeStyle=color.black,c.fillStyle=n[this.type],c.rect(0,0,this.w,this.h),c.stroke(),c.fill(),cp();c.restore()}}function g(e,t){const a=[[[1,108,0,74,35,74,35,109],color.black,color.health,1],[[0,74,0,37,35,37,35,74],color.black,color.black,1],[[1,37,1,1,35,0,35,38],color.black,color.health,1],[[35,1,73,1,71,36,35,38],color.black,color.black,1],[[73,1,107,1,109,38,72,37],color.black,color.health,1],[[71,37,71,73,108,73,108,38],color.black,color.black,1],[[71,73,72,109,107,108,107,73],color.black,color.health,1]],r=[[[73,37,72,2,107,2,107,37],[72,74,72,37,107,37,107,74],[72,109,72,73,107,72,107,110],[72,38,34,36,36,1,72,0],[0,74,35,73,36,110,-1,109],[-2,37,-2,72,35,73,35,38],[0,1,1,37,36,36,35,1]]];let s=new D(a,r,1500,1);const i=[109,109];let n=+new Date;this.n=function(){+new Date-n>2e3&&new F(e+i[0]/2,t+i[1]/2).distance(character.center())<100&&(this.active=0,s=new D(a,r,1500,1),character.savePosition(),n=+new Date,messages.show("CHECKPOINT",5e3))},this.r=function(){c.save(),c.translate(e,t+55),c.scale(1,-1),draw.r(s.n(),i),c.restore()}}function y(e,t,a){const r=colors[e-21],s=new D([[[1,0,0,80,33,79,33,0],color.black,color.black,1],[[10,8,5,25,16,24,18,13],color.black,r,1],[[24,18,21,39,28,33,29,21],color.black,r,1],[[5,32,3,77,21,75,12,58,17,27],color.black,r,1],[[24,53,19,60,29,70,30,50],color.black,r,1]],[[0,[10,2,4,26,18,25,22,9],[24,13,22,39,28,35,29,21],[4,35,2,71,17,70,10,45,14,31],[24,51,17,60,30,72,32,47]],[0,[10,7,7,17,13,16,15,10],[24,15,21,38,29,35,30,18],[4,28,3,69,17,71,11,44,18,23],[22,48,16,59,28,70,30,46]]],2e3);this.active=1,this.x=t,this.y=a,this.w=33,this.h=80,this.shift=0,this.getPosition=function(){return new F(this.x,this.y+this.shift)},this.n=()=>{new F(this.x+this.w/2,this.y+this.h/2).distance(character.center())<200?keys.has(e+4)?this.shift+=2:messages.show("You need a "+colors[e-21].toUpperCase()+" key...",1e3):this.shift-=2,this.shift>80&&(this.shift=80),this.shift<0&&(this.shift=0)},this.r=()=>{c.save(),c.translate(this.x+this.w/2+3.5,this.y+this.h/2+this.shift),draw.r(s.n(),[this.w,this.h]),c.restore()}}window.bullets=(()=>{let e=0,t=+new Date,c=[];return{upgrade:()=>{e++,messages.show("Your fun is better now...",5e3)},n:()=>{control.pressed[4]&&c.length<n[e]&&+new Date-t>=300&&function(){const a=new F(characterAnimations.direction()*i[e],0),r=character.position().get().add(new F(a.x<0?-20:40,character.isSitting()?18:36));c.push(new h(r,a,s[e],e)),t=+new Date}();for(let e=0;e<c.length;e++)c[e].n();c=c.filter((e=>e.active))},r:()=>{for(let e=0;e<c.length;e++)c[e].r()}}})(),window.keys=(()=>{const e=[],t={};return{i:()=>{e.length=0,e.push(new v(25,40,40,1)),e.push(new v(26,90,40,1)),e.push(new v(27,140,40,1)),e.push(new v(28,190,40,1))},add:e=>{t[e]=1},has:e=>t[e],r:()=>{c.save(),bp(),c.globalAlpha=.5,c.fillStyle=color.white,c.rect(30,20,210,66),c.fill(),cp(),c.restore(),e.forEach((e=>{bp(),t[e.type]?c.globalAlpha=1:c.globalAlpha=.3,e.r(),cp()}))}}})(),window.background=(()=>{const e=[[[0,2,494,0,497,163,469,51,471,144,451,96,447,162,423,65,425,139,385,52,373,146,352,157,350,37,330,130,310,159,290,151,281,38,273,163,262,88,255,141,232,39,215,141,203,162,180,94,174,163,152,157,143,89,117,124,113,172,77,149,74,85,57,164,54,82,32,173,19,60,2,160],"","black",1],[[138,107,124,167,156,194],"","black",1],[[183,116,189,156,182,195,179,154],"","black",1],[[233,63,214,158,232,159],"","black",1],[[236,75,251,151,237,195],"","black",1],[[281,94,279,158,288,162],"","black",1],[[346,76,347,149,353,182,321,199,322,167],"","black",1],[[387,75,374,149,386,149,401,181,401,147,426,150,393,106],"","black",1],[[455,117,455,154,475,158],"","black",1],[[18,88,2,204,23,162],"","black",1],[[50,115,41,163,55,193],"","black",1]];return{i:()=>{},reset:()=>{},n:()=>{},r:()=>{c.save(),c.translate(2400-camera.getPosition().x/2,1e3-camera.getPosition().y/2),c.globalAlpha=.1,c.scale(10,-10),draw.r(e,[497,204]),c.globalAlpha=1,c.restore()}}})(),colors=["red","green","yellow","purple"];const p=[2e3],u=[70,90];function f(e,t,a){this.active=1,this.position=t,this.start=+new Date,this.n=function(){t.add(a),t.distance(character.center())<30&&(character.damage(u[e]),this.active=0),+new Date-this.start>p[e]&&(this.active=0)},this.r=function(){c.save(),bp(),c.fillStyle="yellow",c.fillRect(t.x,t.y,7,7),cp(),c.restore()}}function x(e,t,a){this.active=1;const r=[81,37],s=[[[56,37,81,36,71,11],"#000000","black",1],[[73,34,63,11,47,36],"#000000","black",1],[[31,34,50,12,59,36],"#000000","black",1],[[49,33,33,9,18,37],"#000000","black",1],[[33,16,11,0,0,35,30,33],"#000000","black",1],[[13,11,11,15,16,15,16,12],"#000000","red",1]],i=[[[64,38,88,32,74,10],[74,34,68,10,48,32],[32,33,46,9,59,31],[45,35,34,9,14,32],[26,14,2,1,-4,37,26,32],[7,11,7,16,11,15,11,11]]],n=[[[47,37,72,35,62,10],[65,34,56,11,39,36],[33,34,52,12,61,36],[59,37,48,11,28,35],[53,17,33,0,20,34,50,35],[35,12,33,16,38,17,39,13]]];let o=new D(s,i,200),l=new F(e,t),h=0,d=1/Math.floor(a.mag()/1),w=1,g=a.x<0?1:-1,y={last:+new Date,started:0,start:+new Date},p=50,u=50,f=0;this.damage=function(t){u-=t,u<=0&&(this.active=0,f=+new Date),(1===g&&character.center().x>e||-1===g&&character.center().x<e)&&(w*=-1,g*=-1,y.last=+new Date-1300)},this.radius=function(){return 15},this.center=function(){return new F(e+r[0]/2,t+r[1]/2)},this.makeActive=function(){this.active=1,p+=30,u=p,y.started=0,o=new D(s,i,200)},this.n=function(){if(!this.active&&+new Date-f>2e4)return void this.makeActive();if(!this.active)return;if(y.started)return void(+new Date-y.start>=300&&(y.started=0,o=new D(s,i,200)));if((1===g&&character.center().x<e||-1===g&&character.center().x>e)&&character.center().distance(this.center())<250)return void(+new Date-y.last<1400||(y.started=1,y.start=+new Date,o=new D(s,n,200,1),enemySpit.add(0,new F(e+r[0]/2,t+r[1]/2),new F(6*-g,0)),y.last=+new Date));const c=l.get().add(a.get().mult(h));e=c.x,t=c.y,(h>1||h<0)&&(w*=-1,g*=-1),h+=d*w},this.r=function(){this.active&&(c.save(),c.translate(e+r[0]/2,t+r[1]/2-4),c.scale(g,-1),draw.r(o.n(),r,1),c.restore())}}function b(e,t,a){this.active=1;const r=[53,125],s=[[[3,124,53,125,27,87],"#000000","black",1],[[5,103,50,98,16,59],"#000000","black",1],[[6,69,45,73,33,33],"#000000","black",1],[[11,42,53,32,41,0,0,0],"#000000","black",1],[[9,6,9,14,20,13,18,4],"#000000","red",1]],i=[[[0,130,55,121,20,84],[-2,99,49,107,23,54],[1,76,45,70,21,30],[3,41,47,35,38,2,-3,-2],[4,6,4,13,15,13,14,5]]],n=[[[3,124,53,125,27,87],[5,97,50,105,28,57],[14,58,47,79,54,38],[34,35,70,60,85,29,57,-1],[56,13,53,20,62,25,65,16]],[0,0,0,0,0]];let o=new D(s,i,200),l=new F(e,t),h=0,d=1/Math.floor(a.mag()/1),w=1,g=a.x<0?1:-1,y={last:+new Date,started:0,start:+new Date},p=150,u=p,f=0;this.damage=function(t){u-=t,u<=0&&(this.active=0,f=+new Date),(1===g&&character.center().x>e||-1===g&&character.center().x<e)&&(w*=-1,g*=-1,y.last=+new Date-1100)},this.radius=function(){return 50},this.center=function(){return new F(e+r[0]/2,t+r[1]/2)},this.makeActive=function(){this.active=1,p+=30,u=p,y.started=0,o=new D(s,i,200)},this.n=function(){if(!this.active&&+new Date-f>2e4)return void this.makeActive();if(!this.active)return;if(y.started)return void(+new Date-y.start>=300&&(y.started=0,o=new D(s,i,200)));if((1===g&&character.center().x<e||-1===g&&character.center().x>e)&&character.center().distance(this.center())<250)return void(+new Date-y.last<1200||(y.started=1,y.start=+new Date,o=new D(s,n,200,1),enemySpit.add(0,new F(e+r[0]/2,t+r[1]-20),new F(5*-g,0)),enemySpit.add(0,new F(e+r[0]/2,t+r[1]-20),new F(5*-g,2)),enemySpit.add(0,new F(e+r[0]/2,t+r[1]-20),new F(5*-g,-2)),y.last=+new Date));const c=l.get().add(a.get().mult(h));e=c.x,t=c.y,(h>1||h<0)&&(w*=-1,g*=-1),h+=d*w},this.r=function(){this.active&&(c.save(),c.translate(e+r[0]/2,t+r[1]/2-4),c.scale(g,-1),draw.r(o.n(),r,1),c.restore())}}function v(e,t,a,r){const s=["red","green","yellow","purple"][e-25],i=new D([[[0,0,0,24,18,24,18,0],color.black,color.black,1],[[3,2,1,7,5,6,5,3],color.black,s,1],[[10,2,14,8,16,6,16,2],color.black,s,1],[[2,9,1,23,13,22,8,16,6,8],color.black,s,1],[[13,11,8,13,17,19,15,10],color.black,s,1]],[[0,[2,2,2,9,6,8,6,3],[8,4,14,12,17,10,17,4],[2,12,5,23,15,20,9,16,5,10],[14,15,12,16,16,18,15,14]],[0,[2,3,7,8,8,3,5,1],[13,2,10,8,13,9,16,7],[2,15,2,22,8,22,5,19,4,14],[14,10,6,10,13,23,17,10]]],2e3);this.active=1,this.type=e,this.x=t,this.y=a,this.w=18,this.h=24,this.shift=0,this.direction=-.2,this.getCenter=function(){return new F(this.x+this.w/2,this.y+this.h/2)},this.n=()=>{r||(this.shift+=this.direction,this.shift>20?this.direction=-.2:this.shift<0&&(this.direction=.2))},this.r=()=>{c.save(),c.translate(this.x+this.w/2+10,this.y+this.h/2+this.shift),r&&c.scale(2,-2),draw.r(i.n(),[this.w,this.h],1),c.restore()}}function k(e,t,a){this.active=1;let r=0,s=1;const i=[29,27];35===e&&gc.starsTotal++,this.n=function(){r+=s,r>20?s=-.2:r<0&&(s=.2),new F(t+i[0]/2,a+i[1]/2+r).distance(character.center())<50&&(this.active=0,31===e?bullets.upgrade():32===e?character.upgrade():34===e?character.restore(100):35===e&&gc.stars++)},this.r=function(){c.save(),c.translate(t+20,a+r),c.scale(1,-1),bp(),31===e?draw.r([[[29,21,0,22,0,27,11,27,16,24,28,24],color.black,color.bonus,1],[[1,13,14,8,29,13,28,15,14,10,1,15],color.black,color.bonus,1],[[0,8,13,2,28,9,28,7,14,0,0,7],color.black,color.bonus,1]],i,3):32===e?draw.r([[[0,6,13,0,26,7,26,8,13,3,0,9],color.black,color.bonus,1],[[0,15,13,9,26,15,26,17,13,11,0,17],color.black,color.bonus,1],[[0,23,13,17,26,23,26,25,13,19,0,25],color.black,color.bonus,1]],i,3):34===e?draw.r([[[16,7,9,0,0,5,2,18,16,30,30,19,33,7,25,0],color.black,color.health,1]],i,3):35===e&&draw.r([[[0,9,13,10,16,0,20,10,32,8,22,15,28,26,18,20,8,27,11,17],color.black,color.bonus,1]],i,3),cp(),c.restore()}}function E(e,t,a,r,s,i){this.isActive=1;let n=a.get(),o=r.get(),l=new F;const h=+new Date;this.n=()=>{l.add(o.get().normalize().mult(.001)),l.add(gc.gravity.get().mult(e)),o.add(l),n.add(o),l.mult(0),+new Date-h>=s&&(this.isActive=0)},this.r=()=>{const e=1-(+new Date-h)/s;c.save(),c.translate(n.x+20,n.y),c.globalAlpha=e>=0?e:0,bp(),c.fillStyle=i,c.rect(-t/2,-t/2,2*t,2*t),c.fill(),cp(),c.restore()}}function D(e,t,c,a){const r=c||200,s=t.length+1,i=[];let n,o=0,l=0,h=0,d=+new Date,w=d,g=0;i.push(e),t.forEach((t=>{i.push(e.map(((e,c)=>{let a=e;return t[c]&&(a=e.map(((e,a)=>a?e:t[c]))),a})))})),this.n=()=>{w=+new Date-d,l+=w,o=Math.floor(l%(s*r)/r),o+1===s&&(g=1);const e=o+1===s?a?o:0:o+1;return h=l%(s*r)%r,d=+new Date,n=a&&g?i[s-1]:i[o].map(((t,c)=>t.map(((t,a)=>a?t:t.map(((t,s)=>t+(i[e][c][a][s]-t)*h/r)))))),n},this.isFinished=()=>g}function F(e,t){this.x=e||0,this.y=t||0,this.add=e=>(this.x+=e.x,this.y+=e.y,this),this.angle=e=>e?Math.atan2(this.y,this.x):Math.atan2(e.y-this.y,e.x-this.x),this.apply=e=>(this.x=e.x,this.y=e.y,this),this.distance=e=>Math.hypot(this.x-e.x,this.y-e.y),this.div=e=>(this.x/=e,this.y/=e,this),this.dot=e=>this.mag()*e.mag()*Math.cos(this.angle(e)),this.get=()=>new F(this.x,this.y),this.mag=()=>Math.hypot(this.x,this.y),this.mult=e=>(this.x*=e,this.y*=e,this),this.normalize=()=>(this.mag()>0&&this.div(this.mag()),this),this.perpendicular=()=>{let e=this.x;return this.x=this.y,this.y=-e,this},this.round=()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this),this.sub=e=>(this.x-=e.x,this.y-=e.y,this),this.normal=e=>new F(this.x-e.x,this.y-e.y).perpendicular().normalize(),this.center=e=>new F(this.x+(e.x-this.x)/2,this.y+(e.y-this.y)/2)}window.enemySpit=(()=>{let e=[];return{add:(t,c,a)=>{e.push(new f(t,c,a))},n:()=>{e.forEach((e=>{e.n()})),e=e.filter((e=>e.active))},r:()=>{e.forEach((e=>{e.r()}))}}})(),window.map=(()=>{const e=40;let t=15,c=[[0,0,0,35,5],[0,38,0,62,5],[0,38,5,2,3],[0,34,7,4,1],[21,34,5,1,1],[0,0,-8,35,8],[0,38,-8,62,8],[0,-100,0,100,5],[0,-100,-8,100,8],[0,100,0,100,5],[0,100,-8,100,8],[0,-29,7,21,43],[24,-15,5,1,1],[0,-11,50,3,50],[0,-100,5,12,45],[0,-100,50,12,50],[0,200,0,100,5],[0,200,-8,100,8],[0,271,50,29,8],[0,63,5,1,3],[0,68,6,12,1],[0,83,8,1,1],[0,88,8,1,2],[0,93,8,1,3],[0,88,13,1,1],[0,83,15,1,1],[0,70,17,10,1],[0,70,21,4,1],[0,70,25,2,1],[0,70,29,1,1],[35,70,31,1,1],[10,104,5,1,1,19,0],[0,111,8,4,1],[0,132,5,6,18],[3,128,8,4,1],[3,128,12,4,1],[3,129,16,3,1],[3,130,20,2,1],[0,142,10,4,1],[0,121,23,4,1,-21,18],[0,92,40,7,1],[35,95,42,1,1],[0,160,5,1,2],[0,171,5,1,2],[1,155,4,5,1],[1,161,4,4,1],[1,166,4,5,1],[34,180,8,1,1],[3,187,8,6,1],[0,204,15,16,1,0,-11],[0,224,5,9,27],[0,200,19,4,1,16,10],[3,219,19,5,1],[3,220,23,4,1],[3,222,27,2,1],[0,206,33,6,13],[35,208,47,1,1],[0,233,8,6,1],[0,233,12,5,1],[0,233,16,3,1,0,13],[10,248,5,1,1,18,0],[11,285,5,1,1,-14,0],[3,287,8,3,1],[3,288,12,2,1],[3,289,16,1,1],[0,270,18,17,1],[0,272,19,5,1],[0,273,20,3,1],[0,274,21,1,1],[34,288,6,1,1],[33,228,32,1,1],[25,274,23,1,1],[0,284,22,6,1],[0,285,26,5,1],[0,286,29,4,1],[0,287,33,3,1],[0,288,37,2,1],[0,289,41,1,1],[32,289,45,1,1],[0,165,5,1,2],[0,154,5,1,2],[0,0,-50,100,1],[0,0,-58,100,8],[0,5,-19,19,7],[0,0,-19,5,11],[31,11,-11,1,1],[35,7,-11,1,1],[0,35,4,3,1,0,-53],[0,-55,-50,55,1],[0,24,-47,6,37],[22,25,-49,1,1],[0,49,-26,9,1],[0,61,-24,1,1],[0,65,-23,1,1],[0,69,-22,1,1],[0,73,-21,1,1],[0,76,-19,2,1],[0,81,-17,2,1],[0,86,-15,7,1],[0,87,-14,5,1],[0,88,-13,3,1],[31,89,-11,1,1],[3,45,-46,5,1],[0,52,-46,8,1],[10,52,-45,1,1,6,0],[0,62,-42,7,1],[11,62,-41,1,1,5,0],[1,51,-50,23,1],[0,74,-46,1,1],[0,79,-49,5,13],[0,100,-58,100,8],[0,89,-47,3,30],[35,90,-16,1,1],[3,87,-39,2,1],[3,84,-43,2,1],[3,87,-46,2,1],[3,87,-25,2,1],[33,107,-49,1,1],[0,92,-22,6,1],[0,102,-21,5,1],[0,116,-49,1,4],[0,144,-49,1,4],[10,121,-49,1,1,18,0],[10,126,-49,1,1,10,0],[10,132,-49,1,1,-12,0],[35,129,-47,1,1],[0,154,-47,4,39],[0,166,-49,5,37],[0,100,-50,100,1],[0,158,-46,5,1],[10,158,-45,1,1,3,0],[0,161,-42,5,1],[10,161,-41,1,1,3,0],[3,158,-38,6,1],[0,163,-35,3,1,0,10],[0,158,-21,5,1],[11,158,-20,1,1,3,0],[0,164,-18,2,1],[0,165,-14,1,1],[34,168,-11,1,1],[1,108,-21,3,1],[0,111,-20,1,1],[0,116,-19,4,1],[0,129,-18,11,1],[0,127,-19,15,1],[0,131,-17,7,1],[0,133,-16,3,1],[35,134,-14,1,1],[0,181,-47,6,39],[0,190,-49,10,2],[0,192,-47,8,4],[0,194,-43,6,4],[0,196,-39,4,4],[26,198,-34,1,1],[0,187,-36,5,1],[0,187,-32,3,1],[32,188,-30,1,1],[31,47,-44,1,1],[3,187,-20,2,1],[0,191,-18,1,1],[0,194,-15,1,1],[0,197,-12,1,1],[35,197,-10,1,1],[0,176,-19,5,1],[10,176,-18,1,1,3,0],[0,176,-31,5,1],[11,176,-30,1,1,3,0],[0,171,-14,4,1,0,-31],[0,176,-42,5,1],[11,176,-41,1,1,3,0],[34,179,-28,1,1],[0,158,-30,5,1],[10,158,-29,1,1,3,0],[0,138,7,3,1],[0,138,14,3,1],[0,142,18,3,1],[0,138,22,1,1],[0,62,-46,3,1,8,0],[0,200,-58,29,8],[0,200,-50,29,42],[0,-100,-50,45,42],[0,-100,-58,100,8],[0,5,-46,13,1],[0,20,-42,4,1],[0,9,-38,10,1],[0,20,-34,4,1],[11,5,-45,1,1,9,0],[11,16,-45,1,1,-8,0],[10,9,-37,1,1,8,0],[10,12,-37,1,1,4,0],[0,2,-30,17,1],[34,11,-28,1,1],[10,5,-29,1,1,11,0],[11,8,-29,1,1,9,0],[10,14,-29,1,1,-11,0],[33,41,-49,1,1],[35,2,-23,1,1],[0,0,-26,6,1],[1,-55,-50,55,1],[0,-5,-48,1,1],[0,-9,-46,1,1],[0,-14,-44,1,1],[0,-19,-42,1,1],[2,-26,-42,3,1],[2,-32,-42,3,1],[2,-40,-46,3,1],[2,-42,-39,4,1],[2,-53,-36,8,1],[11,-53,-35,1,1,6,0],[10,-51,-35,1,1,3,0],[0,-37,-17,16,1],[10,-36,-16,1,1,8,0],[11,-24,-16,1,1,-11,0],[11,-33,-16,1,1,10,0],[4,-45,-28,1,1,0,16],[4,-18,-11,1,1,0,-18],[0,-15,-16,1,1],[0,-11,-16,1,1],[0,-3,-12,3,1],[28,-2,-10,1,1],[3,-55,-24,8,1],[0,-55,-16,6,1],[33,-53,-15,1,1],[3,-48,-20,8,1],[4,-28,-47,1,1,0,11],[4,-34,-47,1,1,0,11],[2,-38,-42,3,1],[2,-45,-46,1,1],[2,-49,-46,1,1],[2,-55,-46,3,1],[35,-54,-43,1,1],[34,-52,-22,1,1],[4,168,6,1,1,0,12],[4,157,6,1,1,0,12],[0,-7,-16,5,1],[34,-5,-14,1,1],[0,-38,-28,3,1],[0,-32,-25,5,1],[35,-30,-21,1,1],[4,67,-27,1,1,0,10],[4,79,-24,1,1,0,12],[4,63,-26,1,1,0,5],[0,290,7,10,43],[23,294,5,1,1],[0,300,0,42,5],[0,300,-8,42,8],[0,322,5,20,45],[0,300,36,22,14],[35,304,7,1,1],[35,308,7,1,1],[35,312,7,1,1],[35,316,7,1,1],[35,320,7,1,1],[31,306,9,1,1],[31,314,9,1,1],[32,310,9,1,1],[32,318,9,1,1],[0,303,17,1,2],[0,304,15,1,2],[0,305,16,1,1],[0,306,15,1,2],[0,307,17,1,2],[0,305,17,1,1],[0,310,15,1,4],[0,313,15,1,4],[0,316,15,1,4],[0,314,17,1,1],[0,315,16,1,1],[35,310,23,1,1],[0,-25,-25,3,1],[31,-24,-21,1,1],[4,248,8,1,1,18,0],[27,-20,52,1,1],[1,-88,4,25,1],[0,-88,9,2,1],[35,-87,11,1,1],[33,-36,5,1,1],[11,-45,5,1,1,-14,0],[11,-55,5,1,1,12,0],[10,-51,5,1,1,4,0],[0,-30,9,1,1],[0,-30,14,1,1],[0,-30,19,1,1],[0,-30,24,1,1],[0,-41,22,4,1],[4,-44,19,1,1,0,7],[0,-48,22,2,1],[0,-56,22,2,1],[0,-62,22,2,1],[1,-60,22,4,1],[1,-54,22,6,1],[1,-69,22,7,1],[0,-70,22,1,1],[0,-88,25,4,1],[4,-77,41,1,1,0,6],[0,-74,44,40,1],[11,-73,45,1,1,7,0],[11,-69,45,1,1,8,0],[2,-71,49,1,1],[2,-62,49,1,1],[2,-54,49,1,1],[10,-58,45,1,1,7,0],[10,-45,45,1,1,-9,0],[11,-38,45,1,1,-4,0],[1,-74,41,45,1],[1,-77,22,7,1],[0,-80,22,3,1],[34,-87,28,1,1],[4,-75,24,1,1,18,0],[0,-88,31,1,1],[0,-88,37,1,1],[0,-88,42,1,1],[0,-84,44,4,1],[34,-25,52,1,1],[34,-15,52,1,1],[2,-83,6,1,1],[2,-77,6,1,1],[2,-70,6,1,1],[0,77,-44,2,1],[0,78,-40,1,1],[30,26,5,1,1]],a=0,r={map:[],enemy:[],doors:[],keys:[],upgrades:[],checkpoints:[],mechanics:[],start:new F,end:new F};return{i:()=>{r={map:[],enemy:[],doors:[],keys:[],upgrades:[],checkpoints:[],mechanics:[],start:new F,end:new F},c.forEach((t=>{4===t[0]?r.mechanics.push(new d(t[0],t[1]*e,t[2]*e,t[3]*e,t[4]*e,(void 0!==t[5]?new F(t[5],t[6]):new F).get().mult(e))):t[0]<10?r.map.push(new w(t[0],t[1]*e,t[2]*e,t[3]*e,t[4]*e,(void 0!==t[5]?new F(t[5],t[6]):new F).get().mult(e))):10===t[0]?r.enemy.push(new x(t[1]*e,t[2]*e,(void 0!==t[5]?new F(t[5],t[6]):new F).get().mult(e))):11===t[0]?r.enemy.push(new b(t[1]*e,t[2]*e,(void 0!==t[5]?new F(t[5],t[6]):new F).get().mult(e))):t[0]>=21&&t[0]<25?r.doors.push(new y(t[0],t[1]*e,t[2]*e)):t[0]>=25&&t[0]<=28?r.keys.push(new v(t[0],t[1]*e,t[2]*e)):30===t[0]?r.start=new F(t[1]*e,t[2]*e):33===t[0]?r.checkpoints.push(new g(t[1]*e,t[2]*e)):t[0]<40&&r.upgrades.push(new k(t[0],t[1]*e,t[2]*e))}))},reset:()=>{r.enemy.forEach((e=>{e.makeActive()}))},setMap:e=>{c=e},n:()=>{r.map.forEach((e=>{e.n()})),r.enemy.forEach((e=>{e.n()})),r.doors.forEach((e=>{e.n()})),r.mechanics.forEach((e=>{e.n()})),r.keys=r.keys.filter((e=>e.active)),r.keys.forEach((e=>{e.n()})),r.upgrades=r.upgrades.filter((e=>e.active)),r.upgrades.forEach((e=>{e.n()})),r.checkpoints.forEach((e=>{e.n()}))},r:()=>{r.map.forEach((e=>{e.r()})),r.mechanics.forEach((e=>{e.r()})),r.enemy.forEach((e=>{e.r()})),r.doors.forEach((e=>{e.r()})),r.keys.forEach((e=>{e.r()})),r.upgrades.forEach((e=>{e.r()})),r.checkpoints.forEach((e=>{e.r()}))},getMap:()=>r,currentLevel:()=>t,nextLevel:e=>{a=-1===e,t+=e},getStart:()=>r.start,getCharacterStart:()=>a?r.end:r.start,isFirst:()=>0===t}})(),window.particles=function(){let e=[],t=+new Date,c=+new Date;return{reset:()=>{e=[]},addRunning:(c,a)=>{if(+new Date-t<200)return 0;for(let t=0;t<5;t++)e.push(new E(rFloat(.1,.15),1,c.get(),new F(rFloat(-1,1),rFloat(.5,.5+a.x/5)),500,color.walking));t=+new Date},addWall:(t,a)=>{if(+new Date-c<200)return 0;for(let c=0;c<5;c++)e.push(new E(rFloat(.1,.15),1,t.get().add(new F(20*a,0)),new F(rFloat(-.5,.5),rFloat(.1,.5)),500,color.walking));c=+new Date},addJump:(t,c)=>{for(let a=0;a<50;a++)e.push(new E(rFloat(.1,.15),1,t.get(),new F(rFloat(c-2,c+2),rFloat(.5,1)),500,color.walking))},addFan:t=>{for(let c=0;c<1;c++)e.push(new E(rFloat(1e-4,15e-5),2,t.get().add(new F(rInt(0,100),rInt(0,20))),new F(0,rFloat(1,3)),2e3,color.walking))},dying:(t,c)=>{for(let a=0;a<30;a++)e.push(new E(rFloat(.1,.3),rInt(3,10),t.get(),new F(rFloat(.5,2)*Math.sin(rFloat(0,2*Math.PI)),rFloat(3,4)*Math.cos(rFloat(0,2*Math.PI))),500,c[rInt(0,c.length)]))},takePower:t=>{for(let c=0;c<30;c++)e.push(new E(rFloat(.1,.3),rInt(1,4),t.get(),new F(rFloat(.5,2)*Math.sin(rFloat(0,2*Math.PI)),rFloat(3,4)*Math.cos(rFloat(0,2*Math.PI))),500,color.power))},n:()=>{e=e.filter((function(e){return e.n(),e.isActive}))},r:()=>{e.forEach((function(e){e.r()}))}}}(),window.camera=(()=>{let e=new F,t=new F;return{i:()=>{const t=character.position();e.apply(new F(t.x-gc.res.x/2,t.y-gc.res.y/3))},reset:()=>{const t=character.position();e.apply(new F(t.x-gc.res.x/2,t.y-gc.res.y/3))},n:()=>{const c=character.position().get();t.apply(new F(c.x-gc.res.x/2,c.y-gc.res.y/(character.isSitting()?2:3))),e.add(t.get().sub(e).mult(.05)),e.y-c.y>-100&&(e.y=c.y-100)},r:()=>{c.translate(-e.x,-e.y)},getPosition:()=>e}})(),window.finalScene=(()=>{const e=[[[8,52,11,72,16,36],"","black",1],[[75,36,86,53,80,72],"","black",1],[[39,35,56,35,67,72,26,72],"","rgba(255, 255, 255, .1)",1],[[51,0,0,36,97,37],"","black",1],[[36,17,15,30,33,29],"","red",1],[[65,17,82,31,67,29],"","red",1]];let t,a,r=0,s=new F(1e3,147),i=new F,n=0,o=3;return{i:()=>{r=1,a=+new Date,t=new D(e,[[0,0,[39,35,56,35,56,35,38,35],0,0,0],[[33,32,47,16,16,35],[76,36,56,34,46,16],[39,35,56,35,57,35,38,35],0,0,0]],2e3,1)},n:()=>{if(r&&+new Date-a>2500){n+=.01,n>Math.PI/4&&(n=Math.PI/4),o-=.01;const e=i.get().normalize().mult(-.017);e.add(new F(-.2,.1)),i.add(e),s.add(i)}},r:()=>{c.save(),c.translate(100,550),c.scale(1,-1),c.font="120px Courier New",c.textAlign="left",c.fillStyle="white",c.fillText("THE END",0,0),c.translate(0,100),c.font="60px Courier New",c.fillText("Thanks for playing!",10,0),c.restore(),c.save(),c.translate(s.x,s.y),c.scale(o,-o),c.rotate(n),draw.r(r?t.n():e,[97,72]),c.restore()},rBackground:()=>{let e=c.createLinearGradient(0,0,0,gc.res.y);e.addColorStop(0,"hsl(238, 10%, 30%)"),e.addColorStop(1,"hsl(238, 10%, 10%)"),c.save(),c.fillStyle=e,c.fillRect(0,0,gc.res.x,gc.res.y),c.restore()}}})(),window.messages=(()=>{this.active=0;let e="You need a RED key.",t=+new Date,a=5e3;return{show:(c,r)=>{e=c,this.active=1,t=+new Date,a=r||5e3},n:()=>{this.active&&+new Date-t>a&&(this.active=0)},r:()=>{this.active&&(c.save(),bp(),c.globalAlpha=.5,c.fillStyle=color.white,c.rect(300,50,gc.res.x-600,50),c.fill(),cp(),bp(),c.globalAlpha=1,c.translate(gc.res.x/2,75),c.scale(1,-1),c.fillStyle=color.black,c.font="32px Courier New",c.textAlign="center",c.textBaseline="middle",c.fillText(e,0,0),cp(),c.restore())}}})(),window.scene=(()=>{let e;return{i:()=>{e=c.createLinearGradient(0,0,0,gc.res.y),e.addColorStop(0,"hsl(37, 30%, 45%)"),e.addColorStop(1,"hsl(37, 30%, 10%)"),background.i(),map.i(),character.i(),camera.i(),keys.i()},reset:()=>{background.reset(),map.reset(),character.reset(),particles.reset(),camera.reset()},n:()=>{gc.splashScreen?splashScreen.n():(background.n(),map.n(),character.n(),bullets.n(),particles.n(),camera.n(),enemySpit.n(),messages.n())},r:()=>{c.save(),c.fillStyle="#BFAEA4",c.fillRect(0,0,gc.res.x,gc.res.y),c.restore(),c.save(),camera.r(),bp(),c.fillStyle="#BFAEA4",c.fillRect(-5e3,0,2e4,6e3),cp(),bp(),c.fillStyle="#776F5C",c.fillRect(-5e3,-5e3,2e4,5e3),cp(),splashScreen.r(),map.r(),character.r(),bullets.r(),enemySpit.r(),particles.r(),c.restore(),function(){c.save(),bp(),c.strokeStyle=color.black,c.fillStyle=color.white,c.lineWidth=3,c.lineJoin="round";const e=character.maxHealth();c.rect(20,gc.res.y-40,e,20),c.fill(),c.stroke(),cp(),bp(),c.fillStyle=color.health;const t=character.health();c.rect(22,gc.res.y-38,t-4<0?0:t-4,16),c.fill(),cp(),c.restore()}(),function(){c.save(),bp(),c.strokeStyle=color.black,c.fillStyle=color.white,c.lineWidth=3,c.lineJoin="round";const e=character.maxStamina();c.rect(gc.res.x-e-20,gc.res.y-40,e,20),c.fill(),c.stroke(),cp(),bp(),c.fillStyle=color.stamina;const t=character.stamina();c.rect(gc.res.x-e-18+(e-t),gc.res.y-38,t-4<0?0:t-4,16),c.fill(),cp(),c.restore()}(),c.save(),keys.r(),c.restore(),c.save(),bp(),c.globalAlpha=.5,c.fillStyle=color.white,c.rect(gc.res.x-175,20,150,40),c.fill(),cp(),c.restore(),c.save(),c.translate(gc.res.x-150,40),c.scale(1,-1),draw.r([[[0,9,13,10,16,0,20,10,32,8,22,15,28,26,18,20,8,27,11,17],color.black,color.bonus,1]],[32,27],3),bp(),c.translate(30,0),c.textBaseline="middle",c.font="30px Courier New",c.fillText(gc.stars+"/"+gc.starsTotal,0,0),cp(),c.restore(),messages.r()}}})(),window.sfx=(()=>{let e=+new Date;function t(e,t,c){if(gc.muted)return 0;const a=gc.ac.createOscillator(),r=gc.ac.createGain();a.type="triangle",a.connect(r),r.connect(gc.ac.destination),a.frequency.value=e,a.start(0),r.gain.value=c||1,r.gain.exponentialRampToValueAtTime(1e-5,gc.ac.currentTime+(t||.5))}return{fall:()=>{t(43.65)},jump:()=>{t(82.41,.2)},run:()=>{+new Date-e<200||(t(146.83,.05,.4),e=+new Date)},wall:()=>{+new Date-e<100||(t(41.2,.2),e=+new Date)},die:()=>{t(61.74,3)},fallingBlock:()=>{t(51.91,5)},takePower:()=>{t(220,.5)},flying:()=>{+new Date-e<30||(t(27.5,.5),e=+new Date)}}})(),window.splashScreen={n:()=>{},r:()=>{c.save(),c.translate(450,500),c.scale(1,-1),c.font="100px Courier New",c.textAlign="left",c.fillStyle="white",c.fillText("Mars:",0,0),c.translate(0,60),c.font="48px Courier New",c.fillText("Short Adventure",0,0),c.restore()}},window.color={mechanics:"hsl(60, 100%, 15%)",walking:"hsl(224, 4%, 5%)",dying1:"hsl(15, 85%, 41%)",dying2:"hsl(15, 85%, 60%)",dying3:"hsl(15, 85%, 10%)",dying4:"hsl(15, 85%, 30%)",black:"#240000",grey:"#5A290C",ice:"#0678BF",stamina:"#416CA6",health:"#A54B19",power:"yellow",white:"#EBEFF2",bonus:"#8EB782"},window.draw=(()=>{let e="transparent";return{r:(t,a,r)=>{c.save(),a&&c.translate(-a[0]/2,-a[1]/2),t.forEach((t=>{bp(),c.fillStyle=color[t[2]]||t[2]||e,c.strokeStyle=color[t[1]]||t[1]||e,c.lineWidth=r||5,c.lineJoin="round",m(t[0][0],t[0][1]);for(let e=2;e<t[0].length;e+=2)l(t[0][e],t[0][e+1]);t[3]&&cp(),c.stroke(),t[3]&&c.fill()})),c.restore()}}})();