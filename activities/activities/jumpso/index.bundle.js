var Space;(()=>{var t={768:()=>{colors={dark:"#1d2b53",light:"#fff1e8",red:"#ff004d",darkred:"#422136",blue:"#29adff",black:"#000000"},tile_colors=["#754665","#ff6e59","#f3ef7d","#ffccaa","#7e2553","#ff004d","#fff1e8"];let t=1/60;ticks={second:1,half:.5,third:20*t,sixth:10*t,lengths:5*t,three:.05,one:1*t}},891:()=>{appr=(t,i,s)=>t<i?Math.min(t+s,i):Math.max(t-s,i),lerp=(t,i,s)=>(1-t)*i+s*t,inters=(t,i)=>!(t[0]>i[0]+i[2]||i[0]>t[0]+t[2]||t[1]>i[1]+i[3]||i[1]>t[1]+t[3])},202:(t,i,s)=>{"use strict";t.exports=s.p+"level.png"},221:(t,i,s)=>{"use strict";t.exports=s.p+"sprites.png"}},i={};function s(h){var e=i[h];if(void 0!==e)return e.exports;var o=i[h]={exports:{}};return t[h](o,o.exports,s),o.exports}s.d=(t,i)=>{for(var h in i)s.o(i,h)&&!s.o(t,h)&&Object.defineProperty(t,h,{enumerable:!0,get:i[h]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;s.g.importScripts&&(t=s.g.location+"");var i=s.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var h=i.getElementsByTagName("script");h.length&&(t=h[h.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=t})();var h={};(()=>{"use strict";function t(){this._btn=new Map;const t=t=>{this._btn.has(t)&&0!==this._btn.get(t)||this._btn.set(t,ticks.one)},i=t=>{this._btn.set(t,-ticks.sixth)};this.btn=t=>this._btn.get(t)||0,this.update=t=>{for(let[i,s]of this._btn){let h=Math.sign(s);0!==s&&(s+=t,Math.sign(s)!==h&&(s=0)),this._btn.set(i,s)}},document.addEventListener("keydown",(i=>{switch(i.key){case"ArrowUp":t("up");break;case"ArrowDown":t("down");break;case"ArrowLeft":t("left");break;case"ArrowRight":t("right");break;case"x":t("x");break;case"c":t("c")}})),document.addEventListener("keyup",(t=>{switch(t.key){case"ArrowUp":i("up");break;case"ArrowDown":i("down");break;case"ArrowLeft":i("left");break;case"ArrowRight":i("right");break;case"c":i("c");break;case"x":i("x")}}))}function i(t,i){let s=document.createElement("canvas"),h=s.getContext("2d");s.width=320,s.height=180,t.appendChild(s),h.imageSmoothingEnabled=!1,this.cls=()=>{h.clearRect(0,0,320,180)},this.ctx=t=>t(h),this.color=t=>{h.fillStyle=t,h.strokeStyle=t},this.fr=(t,i,s,e)=>{t=Math.floor(t),i=Math.floor(i),s=Math.floor(s),e=Math.floor(e),h.fillRect(t,i,s,e)},this.r=(t,i,s,e)=>{t=Math.round(t),i=Math.round(i),h.beginPath(),h.rect(t,i,s,e),h.stroke()},this.spr=(t,s,e,o,r,a,n,d,c=1)=>{t=Math.round(t),s=Math.round(s),h.save(),h.translate(t,s),n&&(h.translate(r,0),h.scale(-1,1)),h.drawImage(i,e,o,r,a,0,0,r*c,a*c),h.restore()}}s.r(h),s.d(h,{default:()=>U}),s(768),s(891);var e=s(221),o=s(202);function r(t){const i=["#ff0000","#c00000","#ffffcc","#0000ff","#ffff00","#ff004d"],s=t=>"#"+t.slice(0,3).map((t=>{return(1===(i=t).toString(16).length?"0":"")+i.toString(16);var i})).join("").toLowerCase();let h=document.createElement("canvas"),e=h.getContext("2d");this.width=t.width/4,this.height=t.height/4,this.res=i.map((t=>[])),h.width=t.width,h.height=t.height,e.drawImage(t,0,0,t.width,t.height);let{data:o}=e.getImageData(0,0,t.width,t.height);for(let h=0;h<t.height;h+=4)for(let e=0;e<t.width;e+=4){let r=t.width*h+e<<2,a=[o[r],o[r+1],o[r+2],o[r+3]],n=i.indexOf(s(a));-1!==n&&this.res[n].push([e/4,h/4])}}function a(t){let i=new Image;return new Promise((s=>{i.onload=function(){s(i)},i.src=t}))}function n(t,i,s,h,e,o=[],r=[]){this.w=i[0],this.h=i[1];let a=e.map(((t,e)=>[(i[2]||0)+(s+e)*i[0],(i[3]||0)+h*i[1],i[0],i[1]])),n=0,d=0,c=0,l=0;function f(){return a[l]}this.ri=0,this.o_x=()=>d,this.o_y=()=>c,this.is_ok=()=>l<1,this.goto=t=>{l=t,n=0,d=0,c=0,this.ri=0},this.update=t=>{n+=t,n>=e[l]&&(l=(l+1)%e.length,n=0,0===l&&this.ri++),d=lerp(.3,d,o[l]||0),c=lerp(.3,c,r[l]||0)},this.draw=(i,s,h,e,o)=>{let r=h?-1:1,a=e?-1:1,n=f();t.spr(i+d*r,s+c*a,...n,h,e,o)}}function d(t,i,s,h){t.solid(i,s,h)}const c=[d,d,function(t,i,s){t.player(i,s)},function(t,i,s){t.sword(i,s)},function(t,i,s){t.enemy(i,s)},function(t,i,s){t.love(i,s)}];function l(t,i,s,h){let e=s*t;this.data=new Map,this.all=()=>this.data.values(),this.collide=(t,i,s,h,e=0,o=0)=>{for(let r=0;r<s;r++)for(let s=0;s<h;s++)if(this.get(e+t+r,o+i+s))return!0;return!1},this.get=(s,h,o)=>{let[r,a]=[Math.floor(s/t),Math.floor(h/i)];return void 0!==o&&this.data.set(a*e+r,o),this.data.get(a*e+r)},this.draw=(e,o)=>{for(let o=0;o<s;o++)for(let s=0;s<h;s++)this.get(o*t,s*i)&&e.draw(o*t,s*i,t,i);for(let e=0;e<s;e++)for(let s=0;s<h;s++)33===this.get(e*t,s*i)&&o.spr(e*t,s*i-18,192,40,56,27)}}function f(t,i,s,h,e,o,r){this.x=t,this.y=i,this.ox=s,this.oy=h,this.w=e,this.h=o,this.cbox=[this.x+this.ox,this.y+this.oy,this.w,this.h],this.cbox_pre=[0,0,0,0],this.dx=0,this.dy=0,this.remx=0,this.remy=0,this.damping=1,this._get_body=()=>{this.cbox_pre[0]=this.cbox[0],this.cbox_pre[1]=this.cbox[1],this.cbox_pre[2]=this.cbox[2],this.cbox_pre[3]=this.cbox[3],this.cbox[0]=this.x+this.ox,this.cbox[1]=this.y+this.oy,this.cbox[2]=this.w,this.cbox[3]=this.h},this.manual=(t,i)=>{this.x=t,this.y=i,this._get_body()},this.move=t=>{this._get_body(),this.remx+=this.dx*t*this.damping;let i=Math.floor(this.remx);this._move_x(i),this.remx-=i,this.remy+=this.dy*t*this.damping,i=Math.floor(this.remy),this._move_y(i),this.remy-=i},this._move_x=t=>{let i=Math.sign(t);for(let s=0;s<Math.abs(t);s++)if(this.x+=i,this._get_body(),r(this))return this.x-=i,this.dx=0,void this._get_body()},this._move_y=t=>{let i=Math.sign(t);for(let s=0;s<Math.abs(t);s++)if(this.y+=i,this._get_body(),r(this))return this.y-=i,this.dy=0,void this._get_body()},this.draw=(t,i)=>{t.color(i),t.fr(this.cbox[0],this.cbox[1],this.cbox[2],this.cbox[3])}}const g=70/ticks.second,b=2*g/ticks.lengths,p=b/2,x=90/ticks.second,u=30/ticks.third,y=u/ticks.lengths,w=16/ticks.second,m=16/ticks.second,k=90/ticks.third,_=60/ticks.third;function M(t){let i=0;this.update=s=>{Math.abs(t.body.dx)>x?t.body.dx=appr(t.body.dx,t.move_x*g,p*s):t.body.dx=appr(t.body.dx,t.move_x*g,b*s),0!==t.move_x&&(t.facing=t.move_x),t.grounded?i=ticks.lengths:(i>0&&(i-=s),t.body.dy=appr(t.body.dy,u,y*s)),t.slashing>0&&(t.body.dx=_*(0===t.sdir[0]&&0===t.sdir[1]?t.facing:t.sdir[0]),t.body.dy=_*t.sdir[1]),0!==t.move_y&&i>0&&(i=0,t.body.dx+=w*t.move_x,t.body.dy=-k,t.body.dx+=m,t.body.dy-=m)}}function v(t,i,s){this.is="player";let{input:h}=t;this.update=t=>{let i=0,e=0,o=0;0!==h.btn("left")?i=-1:0!==h.btn("right")&&(i=1),0!==h.btn("up")?e=-1:0!==h.btn("down")&&(e=1),h.btn("x")>0&&h.btn("x")<ticks.sixth&&(o=1),h.btn("c")>0&&h.btn("c")<ticks.sixth&&s.slash(i,e),s.walk(i),s.jump(o)}}function j(t,i,s,h){let e,o,r=ticks.lengths+ticks.three,a=new n(t.g,[21,15,128,26],0,0,[r,r],[1,-1],[-2,0]),d=new n(t.g,[21,15,128,26],2,0,[ticks.sixth/3+.3*ticks.sixth,ticks.sixth/3-.1*ticks.sixth,ticks.second],[12,14,24],[-8,-8,-8]),c=new n(t.g,[21,14,0,25],0,0,[r,r,r],[1,-1,1],[-3,-2,-1]),l=new n(t.g,[21,25],0,0,[r,r,r],[-1,0,1]),f=new n(t.g,[21,25],3,0,[r,1.3*r,r],[3,0,-2]),p=new n(t.g,[21,25],6,0,[.5*-r+r,.5*-r+1.3*r,.5*-r+r],[2,0,-2],[-2,0,-1]),x=new n(t.g,[21,25],10,0,[ticks.sixth]),u=new n(t.g,[21,25],8,0,[ticks.sixth]),y=new n(t.g,[21,25],12,0,[ticks.sixth,30*ticks.second]),w=new n(t.g,[21,25],18,0,[(ticks.sixth+ticks.lengths)/3,(ticks.sixth+ticks.lengths)/3,ticks.third]),m=p,k=a;const _=t=>{o!==t&&(o=t,o.goto(0))},M=t=>{e!==t&&(e=t,e.goto(0))};this.update=t=>{0!==s.slashing?_(d):_(a),s.slashing>0?M(w):s.grounded?Math.abs(s.body.dx)<b&&0===s.move_x?M(l):Math.abs(s.body.dx)<.5*g?M(f):M(p):s.body.dy<0?M(x):Math.abs(s.body.dy)<.1*g?M(u):M(y),e&&e!==m&&(m=e,e=void 0),o&&o!==k&&(k=o,o=void 0),m.update(t),c.update(t),k.update(t)},this.draw=()=>{m.draw(s.body.x,s.body.y,-1===s.facing),c.draw(s.body.x+s.facing*m.o_x(),s.body.y+m.o_y(),-1===s.facing),s.dslash>=0&&k.draw(10*-s.facing+s.body.x+s.facing*m.o_x(),16+s.body.y+s.facing*m.o_y(),-1===s.facing)}}function S(t){let i,s=[0,0],h=[0,0],e=[130,70,60,40],o=[0,0];this.bounds=(t,s,h,e)=>{i=[t,s,h,e]},this.follow=t=>{h=t,o=[...h]},this.attach=(i=1,h=1)=>{t.ctx((t=>{t.save(),t.translate(Math.floor(-s[0]*i+160),Math.floor(-s[1]*h+90))}))},this.detach=()=>{t.ctx((t=>{t.restore()}))},this.update=t=>{let r=e[0],a=e[1],n=e[0]+e[2],d=e[1]+e[3],[c,l]=[0,0],[f,g]=this.get_local(...h),[b,p]=this.get_local(...s);if(f<b+(r+n-b)){let t=f-r;t<0&&(c=t)}if(f>b-(r+n-b)){let t=f-n;t>0&&(c=t)}if(g<p+(a+d-p)){let t=g-a;t<0&&(l=t)}if(g>p-(a+d-p)){let t=g-d;t>0&&(l=t)}c+=h[0]-o[0],l+=h[1]-o[1],o[0]=h[0],o[1]=h[1],s[0]=lerp(.5,s[0],s[0]+c),s[1]=lerp(.5,s[1],s[1]+l),i&&(s[0]=Math.min(Math.max(s[0],i[0]+160),i[0]+i[2]-160),s[1]=Math.min(Math.max(s[1],i[1]+90),i[1]+i[3]-90))},this.get_local=(t,i)=>[t-s[0]+160,i-s[1]+90],this.draw=()=>{t.color(colors.light),t.r(...e)}}function P(t,i,s,h){let e,o,r;this.init=(a,n)=>{e=[],o=a,r=n;for(let a=0;a<10;a++){let a=Math.random()*Math.PI*2;e.push(s(t,i,o+10*Math.cos(a),r+10*Math.sin(a),h))}},this.update=t=>{e=e.filter((i=>i.update(t))),0===e.length&&i.remove(this)},this.draw=()=>{e.forEach((t=>t.draw()))}}const A=(t,i,s,h,e)=>{let o=new E(t,i);return o.init(s,h,e),o};function E(t,i){let s,h,e,o,r,a,n,{g:d,a:c}=t;this.init=(t,i,d)=>{e=t,o=i,r=ticks.half+Math.random()*ticks.half,a=1+2*Math.random(),s=d*Math.random()*2-1*d,h=d*Math.random()*2-1*d,n=d},this.update=t=>(r=appr(r,0,t),s=appr(s,n,t*a),h=appr(h,n,t*a),e+=s*r,o+=h*r,0!==r),this.draw=()=>{let t=r>ticks.half?colors.red:r>.5*ticks.half?colors.darkred:colors.light;d.color(t),d.fr(e,o,16*r*Math.sin(a),r*r*8*a*Math.cos(a))}}function I(t,i,s,h){let e,o=[];for(let t=0;t<3;t++)for(let i=0;i<12;i++){let e=(t-1)/2*h-30*Math.random(),r=(i-1)/12*s+20*Math.random();o.push([r,e,Math.floor(5*Math.random()),Math.random()<.5,Math.random()<.5])}this.follow=t=>{e=t},this.update=s=>{Math.random()<.1&&t.fx(function(t){return new n(t,[7,12,24,48],0,0,[ticks.sixth,ticks.sixth,ticks.sixth],[1,0,-1],[0,-1,0])}(i),e[0]-160+320*Math.random(),e[1]-90+180*Math.random(),0,0)},this.draw=()=>{o.forEach((t=>{t[0]>e[0]-3200&&t[0]<e[0]+3200&&i.spr(t[0],t[1],352+16*t[2],32,16,16,t[3],t[4],t[4]?20:10)}))}}function O(t,i){let{g:s,a:h}=i;this.init=i=>{this.play=t,this.camera=new S(s),this.camera.bounds(0,0,4*i.width,4*i.height),this.grid=new l(4,4,i.width,i.height),this.width=4*i.width,this.height=4*i.height,this.bg=new I(this,s,this.width,this.height),this.objects=[],this.fxs=[];for(let t=0;t<i.res.length;t++)for(let s=0;s<i.res[t].length;s++){let[h,e]=i.res[t][s],o=c[t];o?o(this,4*h,4*e,t):console.warn(`notile ${t}`)}let h=Array(8).fill(0);for(let t=0;t<i.width;t+=1+10*Math.random())for(let s=0;s<i.height;s++)h.every(((i,h)=>this.grid.get(4*(t+h),4*s)))&&(this.grid.get(4*t,4*s,33),t+=15)},this.is_solid=(t,i,s,h,e,o)=>this.grid.collide(t,i,s,h,e,o),this.get=t=>this.objects.filter((i=>i.is===t)),this.collide_check=(t,i,s,h,e,o,r)=>this.objects.filter((i=>i.is===t&&i.body)).find((t=>inters(t.body.cbox,[i+o,s+r,h,e]))),this.solid=(t,i,s)=>{this.grid.get(t,i,tile_colors[s])},this.player=(t,s)=>{let h=new L(i,this);return this.objects.push(h),h.init(t,s),h},this.sword=(t,s)=>{let h=new T(i,this);return this.objects.push(h),h.init(t,s),h},this.enemy=(t,s)=>{let h=new q(i,this);return this.objects.push(h),h.init(t,s),h},this.love=(t,s)=>{let h=new $(i,this);return this.objects.push(h),h.init(t,s),h},this.fx=(t,s,h,e,o)=>{let r=new C(i,this);return this.fxs.push(r),r.init(t,s,h,e,o),r},this.fxi=(t,i,s)=>{t.init(i,s),this.fxs.push(t)},this.remove=t=>{this.objects=this.objects.filter((i=>i!==t)),this.fxs=this.fxs.filter((i=>i!==t))},this.f_collide=t=>!!this.is_solid(...t.cbox),this.update=t=>{this.bg.update(t),this.camera.update(t);for(let i of this.objects)i.update(t);for(let i of this.fxs)i.update(t);e.update(t)};let e=new n(i.g,[4,4,0,48],0,0,[ticks.second]);this.draw=()=>{this.camera.attach(.2,.2),this.bg.draw(),this.camera.detach(),this.camera.attach();for(let t of this.objects)t.draw();for(let t of this.fxs)t.draw();this.grid.draw(e,s),this.camera.detach()}}function L(t,i){let{g:s,a:h}=t,e=new n(t.g,[8,8,320,32],0,0,[ticks.sixth,ticks.sixth]);this.init=(s,h)=>{this.x=s,this.y=h;let e=new R(t,i);e.init(this.x,this.y,new v(t,i,e),new j(t,i,e)),i.objects.push(e),i.camera.follow(e.ctarget),i.bg.follow(e.ctarget)},this.update=t=>{e.update(t)},this.draw=()=>{e.draw(this.x+80,this.y-80)}}function T(t,i){let s=new n(t.g,[8,8,320,32],2,0,[ticks.sixth,ticks.sixth]);this.is="swordspawn";let{g:h,a:e}=t,o=new n(t.g,[16,16,128,48],0,0,[ticks.sixth,ticks.sixth,ticks.sixth,ticks.sixth],[1,-1,0,0],[-2,0,2,0]),r=-1;this.init=(t,s)=>{this.body=new f(t,s-25,0,0,16,16,i.f_collide)},this.req=()=>{r<0&&(r=ticks.second)},this.update=t=>{o.update(t),r>0&&(r=appr(r,0,t),0===r&&i.get("player")[0].sword()),s.update(t)},this.draw=()=>{if(r>0){let t=(ticks.second-r)/ticks.second;t*ticks.second%(2*ticks.lengths)<ticks.lengths&&o.draw(this.body.x,this.body.y-30*t)}else r<0?o.draw(this.body.x,this.body.y):s.draw(this.body.x,this.body.y-30)}}function C(t,i){let s,h,e,o,r;this.init=(t,i,a,n,d)=>{s=i,h=a,e=n,o=d,r=t,-1===e&&(s-=r.w)},this.update=t=>{r.update(t),1===r.ri&&i.remove(this)},this.draw=()=>{r.draw(s,h,-1===e,-1===o)}}function R(t,i){let{g:s,a:h}=t;this.g=s,this.ctarget=[0,0];const e=()=>{this.ctarget[0]=this.body.cbox[0]+.5*this.body.cbox[2],this.ctarget[1]=this.body.cbox[1]+.5*this.body.cbox[3]};this.init=(t,s,h,o)=>{this.room=i,this.anim=o,this.think=h,this.is=this.think.is,this.body=new f(t,s-25+4,4,4,15,21,i.f_collide),this.actions=new M(this),this.facing=1,this.grounded=!1,this.move_x=0,this.move_y=0,this.slashing=0,this.dslash=-1,e()},this.sword=()=>{this.dslash=1},this.walk=t=>this.move_x=t,this.jump=t=>this.move_y=t,this.slash=(t,i)=>{this.dslash>0&&0===this.slashing&&(this.sdir=[t,i],this.slashing=ticks.sixth+ticks.lengths,this.dslash-=1)},this.update=h=>{e(),this.slashing>0?(this.slashing=appr(this.slashing,0,h),0===this.slashing&&(this.slashing=-ticks.sixth)):this.slashing<0&&(this.slashing=appr(this.slashing,0,h)),this.grounded=i.is_solid(...this.body.cbox,0,1),this.grounded&&this.dslash>=0&&0===this.slashing&&(this.dslash=1),this.think.update(h),this.actions.update(h),this.body.move(h),this.anim.update(h);let r=i.collide_check("swordspawn",...this.body.cbox,0,0);r&&(i.get("enemy").forEach((t=>t.live())),r.req());let a=i.collide_check("enemy",...this.body.cbox,15*this.facing,0);this.body.damping=appr(this.body.damping,1,h),a?(this.body.damping=.6,this.slashing>0?(o||(o=!0,i.fx(function(t){return new n(t,[89,32,0,97],0,0,[ticks.three,ticks.sixth/2,ticks.sixth/2,ticks.lengths],[0,-4,4,2],[0,2,-2,0])}(s),this.body.cbox[0]+.5*this.body.cbox[2],this.body.cbox[1],this.facing,0),i.fxi(new P(t,i,A,this.facing),a.body.cbox[0],a.body.cbox[1])),a.damage()):(o=!1,this.dslash>0&&-1===a.t_dying&&(this.body.damping=-1))):o=!1;let d=this.body.cbox[0]+this.body.cbox[2]-i.width,c=0-this.body.cbox[0],l=this.body.cbox[1]-i.height;d>0?this.body.x-=d:c>0&&(this.body.x+=c),l>0&&i.play.rst(),this.dead&&i.remove(this)};let o=!1;this.draw=()=>{this.anim.draw()}}function $(t,i){this.is="love";let s,h,e,o=new n(t.g,[22,30,272,58],0,0,[ticks.third,ticks.sixth,ticks.sixth],[0,1,2]),{g:r,a}=t;this.init=(t,i)=>{s=t,h=i-26,e=!1},this.update=t=>{let a=i.collide_check("player",s,h,100,20,-100,0);a&&1===a.facing?(e=!0,i.play.end()):e=!1,e&&Math.random()<.1&&i.fx(function(t){const i=()=>Math.random()*ticks.sixth;return new n(t,[16,16,352,32],0,0,[i(),i(),i(),i(),i()],[1,0,-1,0,0],[0,-8,-8,-16,-24])}(r),s-80+64*Math.random(),h-20-16,0,0),o.update(t)};let d=0,c=0,l=0,f=0;this.draw=()=>{o.draw(s,h),e&&(d++,f=.5*l,l=.3*c,c=4*Math.sin(d/Math.PI*2*(.5*ticks.sixth)),r.color(colors.light),r.fr(s-80+c,h-60,80,40),r.fr(s-8+l,h-18,8,8),r.fr(s+2+f,h-10,4,4))}}function q(t,i){this.is="enemy";let s,h=new n(t.g,[33,19,0,77],0,0,[ticks.half,ticks.half,ticks.half]),e=new n(t.g,[33,19,0,77],3,0,[ticks.second]),{g:o,a:r}=t;this.init=(t,h)=>{this.body=new f(t,h-19+4,4,4,27,15,i.f_collide),s=e,this.t_dying=-1},this.live=()=>{s=h},this.damage=()=>this.t_dying<0&&(this.t_dying=ticks.half,this.body.dx=16/ticks.half,!0),this.update=t=>{this.t_dying>0&&(this.t_dying=appr(this.t_dying,0,t),0===this.t_dying&&(s=e)),this.body.dx=appr(this.body.dx,0,t*(16/ticks.half)),this.body.move(t),s.update(t)},this.draw=()=>{s.draw(this.body.x,this.body.y),this.t_dying>0&&this.t_dying/ticks.half%(2*ticks.sixth)<ticks.sixth&&(o.color(colors.light),o.fr(...this.body.cbox))}}function D(t,i){let{g:s,a:h,input:e}=i,o=ticks.sixth,r=new n(i.g,[16,16,48,48],0,0,[o,o,o,o]),a=10*ticks.second,d=0;this.init=()=>{d=a},this.update=i=>{d=appr(d,0,i),d>0?r.update(i):(r.goto(0),e.btn("x")>0&&t.init())},this.draw=()=>{s.color(colors.light),s.fr(0,0,320,180);let t=d/a;s.color(colors.black),s.fr(80,210*t-30,160,20),s.fr(60,210*t-60,140,20),s.fr(40,210*t-90,120,20),0===d&&(s.color(colors.red),s.fr(120,20,180,20)),r.draw(120+60*t*Math.cos(t*Math.PI*3),20+30*t*Math.sin(t*Math.PI*4)*3,-1,-1,6)}}function F(t){let{g:i,a:s}=t,h=ticks.half;this.room=new O(this,t),this.ending=new D(this,t);let e,o=0,r=0,a=0;this.init=()=>{e=!1,this.rst()},this.rst=()=>{0===o&&(o=.5*h)};let n=0;this.end=()=>{n=10*ticks.second},this.end_do=()=>{e=!0,this.ending.init()},this.update=t=>{n>0&&(n=appr(n,0,t),0===n&&(this.end_do(),o=.5*h)),o>0?(o=appr(o,0,t),0===o&&(a=ticks.sixth,this.room.init(s.level))):a>0?(a=appr(a,0,t),0===a&&(r=h)):r>0&&(r=appr(r,0,t)),0===o&&(e?this.ending.update(t):this.room.update(t))},this.draw=()=>{if(i.cls(),i.color(colors.dark),i.fr(0,0,320,180),0===o&&0===a&&(e?this.ending.draw():this.room.draw()),i.color(e?colors.blue:colors.red),o>0){let t=1-o/(.5*h);t*=t*t,i.fr(0,0,320*t,180),i.color(colors.light),i.fr(320*t,0,30*(1-t),180)}else if(r>0){let t=r/h;t*=2-t,i.fr(320*(1-t),0,320,180),i.color(colors.light),i.fr(320*(1-t),0,30*t,180),i.fr(1-320*t,0,30*t,180)}else a>0&&(ticks.sixth,i.fr(0,0,320,180))}}function U(s){Promise.all([a(e),a(o).then((t=>new r(t)))]).then((([t,i])=>({sprites:t,level:i}))).then((h=>{let e=new t,o=new F({a:h,g:new i(s,h.sprites),input:e});o.init(),function t(){e.update(1/60),o.update(1/60),o.draw(),requestAnimationFrame(t)}()}))}})(),Space=h})();