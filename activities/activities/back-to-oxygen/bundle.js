!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=Object.freeze({METHANE:Symbol("methane"),DIOXIDE:Symbol("dioxine"),CARBON:Symbol("carbon"),OXYGEN:Symbol("oxygen"),HYDROGEN:Symbol("hydrogen")});function a(e,t,n){let o=e.getContext("2d"),a=window.innerWidth,s=window.innerHeight;Math.max(a/t,s/n);var i=Math.min(a/t,s/n);e.style.width=a+"px",e.style.height=s+"px",e.width=a,e.height=s;let r=a/2-t/2*i,c=s/2-n/2*i;return o.setTransform(i,0,0,i,r,c),{canvas:e,nativeWidth:t,nativeHeight:n}}Math.PI;function s(...e){if(4==e.length)return function(e,t,n,o){let a=n-e,s=o-t;return Math.sqrt(a**2+s**2)}(...e);if(2==e.length)return function(e,t){let n=t.x-e.x,o=t.y-e.y;return Math.sqrt(n**2+o**2)}(...e);throw"ERROR: Pass 4 numbers for cordinates or 2 objects with x,y props"}const i=e=>e*Math.PI/180;function r(e){return e.toUpperCase().charCodeAt(0)-46}function c(e,t,n,o,a=1,s="text_spritesheet.png"){let i=new Image;i.src=`./assets/${s}`;let c=e.getContext("2d");c.save(),c.scale(a,a);let f=function(e){return e.split("").map(r)}(t);for(let e=0;e<f.length;e++){const t=f[e];c.drawImage(i,16*t,0,16,16,n+16*e,o/a,16,16)}c.restore()}function f(e){var t=Math.floor(e/6e4),n=(e%6e4/1e3).toFixed(0);return t+":"+(n<10?"0":"")+n}function l(e){e.forEach(e=>{!function(e){if(!e.alive)return;const t=e.state.canvas.getContext("2d");t.save(),t.imageSmoothingEnabled=!1;const{x:n,y:o,rotation:a}=e,s=n+1.5,i=o+1.5;t.save(),t.translate(s,i),t.rotate(Math.PI/180*a),t.translate(-s,-i),t.drawImage(e.img,24,0,1,16,n,o,8,3),t.restore()}(e)})}function u(e){e.alive&&(e.x+=Math.cos(i(e.rotation))*(e.dx*e.state.maxImpulse+1),e.y+=Math.sin(i(e.rotation))*(e.dy*e.state.maxImpulse+1),e.x>=e.state.nativeWidth-8&&(e.x=e.state.nativeWidth-8,e.alive=!1),e.x<=0&&(e.x=0,e.alive=!1),e.y>=e.state.nativeHeight-8&&(e.y=e.state.nativeHeight-8,e.alive=!1),e.y<=0&&(e.y=0,e.alive=!1))}function _(e){const t=e.state.canvas.getContext("2d");t.save(),t.imageSmoothingEnabled=!1;const{x:n,y:o}=e;t.save(),t.drawImage(e.img,24,0,1,16,n,o,100,16),t.drawImage(e.img,54,0,1,16,n,o,100*e.state.impulse/e.state.maxImpulse,16),c(e.state.canvas,"impulse",n+408,o+4,.5),t.restore()}function d(e,t,n,o="spritesheet.png"){let a=new Image;a.src=`./assets/${o}`;return{state:e,x:t,y:n,rotation:0,img:a}}function v(e,t,n,o,a){return{...e,dx:t,dy:n,type:o,radius:a,rotation:Math.floor(360*Math.random()),innerRotation:0,alive:!0}}function m(e){const{state:t}=e;e.state.bullets.forEach(n=>{const a=e.type;if(e.alive)if(s(e,n)<=2*e.radius&&a==o.METHANE){n.alive=!1,e.alive=!1;const a=d(t,e.x,e.y);t.molecules.push(v(a,1,1,o.DIOXIDE,11)),t.molecules.push(v(a,1,1,o.HYDROGEN,7))}else if(s(e,n)<=e.radius&&a==o.DIOXIDE){n.alive=!1,e.alive=!1;const a=d(t,e.x,e.y);t.molecules.push(v(a,1,1,o.CARBON,7)),t.molecules.push(v(a,1,1,o.OXYGEN,7)),t.molecules.push(v(a,1,1,o.OXYGEN,7))}else s(e,n)<=2*e.radius&&a==o.CARBON&&(n.alive=!1,e.alive=!1,n.x=-10,n.y=-10)}),e.innerRotation-=2,e.x+=Math.cos(i(e.rotation))*(1*e.dx),e.y+=Math.sin(i(e.rotation))*(1*e.dy),e.x>=t.nativeWidth-32&&(e.x=t.nativeWidth-32,e.dx*=-1),e.x<=0&&(e.x=0,e.dx*=-1),e.y>=t.nativeHeight-32&&(e.y=t.nativeHeight-32,e.dy*=-1),e.y<=0&&(e.y=0,e.dy*=-1)}function h(e){e.forEach(e=>{!function(e){const t=e.state.canvas.getContext("2d");t.save(),t.imageSmoothingEnabled=!1;const{x:n,y:a,innerRotation:s,type:i}=e;let r,c;e.type==o.METHANE||o.DIOXIDE?(r=32,c=32):(r=16,c=16);const f=n+.5*r,l=a+.5*c;if(t.save(),t.translate(f,l),t.rotate(Math.PI/180*s),t.translate(-f,-l),e.alive)switch(i){case o.METHANE:t.drawImage(e.img,80,0,16,16,n+1,a+1,16,16),t.drawImage(e.img,96,0,16,16,n+16-1,a+1,16,16),t.drawImage(e.img,112,0,16,16,n+1,a+16-1,16,16),t.drawImage(e.img,128,0,16,16,n+16-1,a+16-1,16,16);break;case o.DIOXIDE:t.drawImage(e.img,144,0,16,16,n+1,a+1,16,16),t.drawImage(e.img,160,0,16,16,n+16-1,a+1,16,16),t.drawImage(e.img,176,0,16,16,n+1,a+16-1,16,16),t.drawImage(e.img,192,0,16,16,n+16-1,a+16-1,16,16);break;case o.CARBON:t.drawImage(e.img,16,0,16,16,n,a,16,16);break;case o.HYDROGEN:t.drawImage(e.img,64,0,16,16,n,a,16,16);break;case o.OXYGEN:t.drawImage(e.img,32,0,16,16,n,a,16,16)}t.restore()}(e)})}function g(e){const t=e.state.canvas.getContext("2d");t.save(),t.imageSmoothingEnabled=!1;const{x:n,y:o}=e;t.save(),t.drawImage(e.img,24,0,1,16,n,o,100,16),t.drawImage(e.img,38,0,1,16,n,o,100*e.state.oxygenCurrent/e.state.oxygenGoal,16),c(e.state.canvas,"oxygen",n+220,o+4,.5),t.restore()}var x=2,p=33,y=null;function w(e){return Math.sin(6.283184*e)}var b=[w,function(e){return w(e)<0?-1:1},function(e){return e%1-.5},function(e){var t=e%1*4;return t<2?t-1:3-t}];function q(e){return.00390625*Math.pow(1.059463094,e-128)}function I(e,t){setTimeout(function(){var n=new Uint8Array(e*x*2),o=n.length-2,a=function(){for(var e=new Date,s=0;o>=0;)if(n[o]=0,n[o+1]=128,o-=2,(s+=1)%1e3==0&&new Date-e>p)return void setTimeout(a,0);setTimeout(function(){t(n)},0)};setTimeout(a,0)},0)}function E(e,t,n,o,a){var s=n.fx_delay_time*o>>1,i=n.fx_delay_amt/255,r=0,c=function(){for(var n=new Date,o=0;r<t-s;){var f=4*r,l=4*(r+s),u=e[l]+(e[l+1]<<8)+(e[f+2]+(e[f+3]<<8)-32768)*i;if(e[l]=255&u,e[l+1]=u>>8&255,u=e[l+2]+(e[l+3]<<8)+(e[f]+(e[f+1]<<8)-32768)*i,e[l+2]=255&u,e[l+3]=u>>8&255,++r,(o+=1)%1e3==0&&new Date-n>p)return void setTimeout(c,0)}setTimeout(a,0)};setTimeout(c,0)}var M=function(e){this.mixBuf=e,this.waveSize=e.length/x/2};M.prototype.getWave=function(){var e,t,n,o,a,s,i,r=this.mixBuf,c=this.waveSize*x*2;for(s=(a=c-8)-36,o=String.fromCharCode(82,73,70,70,255&a,a>>8&255,a>>16&255,a>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&s,s>>8&255,s>>16&255,s>>24&255),e=0;e<c;){for(n="",t=0;t<256&&e<c;++t,e+=2)i=(i=4*(r[e]+(r[e+1]<<8)-32768))<-32768?-32768:i>32767?32767:i,n+=String.fromCharCode(255&i,i>>8&255);o+=n}return o},M.prototype.getAudio=function(){var e=this.getWave(),t=new Audio("data:audio/wav;base64,"+btoa(e));return t.preload="none",t.load(),t},M.prototype.getAudioBuffer=function(e){null===y&&(y=new AudioContext);var t=this.mixBuf,n=this.waveSize,o=y.createBuffer(x,this.waveSize,44100),a=o.getChannelData(0),s=o.getChannelData(1),i=0,r=function(){for(var c=new Date,f=0;i<n;){var l=4*(t[4*i]+(t[4*i+1]<<8)-32768);if(l=l<-32768?-32768:l>32767?32767:l,a[i]=l/32768,l=(l=4*(t[4*i+2]+(t[4*i+3]<<8)-32768))<-32768?-32768:l>32767?32767:l,s[i]=l/32768,i+=1,(f+=1)%1e3==0&&new Date-c>p)return void setTimeout(r,0)}setTimeout(function(){e(o)},0)};setTimeout(r,0)};var D=function(e,t){this.instr=e,this.rowLen=t||5605,this.osc_lfo=b[e.lfo_waveform],this.osc1=b[e.osc1_waveform],this.osc2=b[e.osc2_waveform],this.attack=e.env_attack,this.sustain=e.env_sustain,this.release=e.env_release,this.panFreq=Math.pow(2,e.fx_pan_freq-8)/this.rowLen,this.lfoFreq=Math.pow(2,e.lfo_freq-8)/this.rowLen};D.prototype.genSound=function(e,t,n){new Date;for(var o=0,a=0,s=q(e+12*(this.instr.osc1_oct-8)+this.instr.osc1_det)*(1+8e-4*this.instr.osc1_detune),i=q(e+12*(this.instr.osc2_oct-8)+this.instr.osc2_det)*(1+8e-4*this.instr.osc2_detune),r=this.instr.fx_resonance/255,c=0,f=0,l=this.attack+this.sustain+this.release-1;l>=0;--l){var u=l+n,_=this.osc_lfo(u*this.lfoFreq)*this.instr.lfo_amt/512+.5,d=1;l<this.attack?d=l/this.attack:l>=this.attack+this.sustain&&(d-=(l-this.attack-this.sustain)/this.release);var v=s;this.instr.lfo_osc1_freq&&(v+=_),this.instr.osc1_xenv&&(v*=d*d),o+=v;var m=this.osc1(o)*this.instr.osc1_vol;v=i,this.instr.osc2_xenv&&(v*=d*d),a+=v,m+=this.osc2(a)*this.instr.osc2_vol,this.instr.noise_fader&&(m+=(2*Math.random()-1)*this.instr.noise_fader*d),m*=d/255;var h=this.instr.fx_freq;this.instr.lfo_fx_freq&&(h*=_);var g=r*(m-f)-(c+=(h=1.5*Math.sin(3.141592*h/44100))*f);switch(f+=h*g,this.instr.fx_filter){case 1:m=g;break;case 2:m=c;break;case 3:m=f;break;case 4:m=c+g}if(v=w(u*this.panFreq)*this.instr.fx_pan_amt/512+.5,m*=39*this.instr.env_master,(u*=4)+3<t.length){var x=t[u]+(t[u+1]<<8)+m*(1-v);t[u]=255&x,t[u+1]=x>>8&255,x=t[u+2]+(t[u+3]<<8)+m*v,t[u+2]=255&x,t[u+3]=x>>8&255}}},D.prototype.getAudioGenerator=function(e,t){var n=this.attack+this.sustain+this.release-1+32*this.rowLen,o=this;I(n,function(a){o.genSound(e,a,0),E(a,n,o.instr,o.rowLen,function(){t(new M(a))})})},D.prototype.createAudio=function(e,t){this.getAudioGenerator(e,function(e){t(e.getAudio())})},D.prototype.createAudioBuffer=function(e,t){this.getAudioGenerator(e,function(e){e.getAudioBuffer(t)})};var k=function(e){this.song=e,this.waveSize=44100*e.songLen};k.prototype.generateTrack=function(e,t,n){var o=this;I(this.waveSize,function(a){var s=o.waveSize,i=o.waveSize*x*2,r=o.song.rowLen,c=o.song.endPattern,f=new D(e,r),l=0,u=0,_=0,d=function(){for(var t=new Date;;)if(32!==_){if(u===c-1)return void setTimeout(v,0);var n=e.p[u];if(n){var o=e.c[n-1].n[_];o&&f.genSound(o,a,l)}if(l+=r,_+=1,new Date-t>p)return void setTimeout(d,0)}else _=0,u+=1},v=function(){E(a,s,e,r,h)},m=0,h=function(){for(var e=new Date,o=0;m<i;){var s=t[m]+(t[m+1]<<8)+a[m]+(a[m+1]<<8)-32768;if(t[m]=255&s,t[m+1]=s>>8&255,m+=2,(o+=1)%1e3==0&&new Date-e>p)return void setTimeout(h,0)}setTimeout(n,0)};setTimeout(d,0)})},k.prototype.getAudioGenerator=function(e){var t=this;I(this.waveSize,function(n){var o=0,a=function(){o<t.song.songData.length?(o+=1,t.generateTrack(t.song.songData[o-1],n,a)):e(new M(n))};a()})},k.prototype.createAudioBuffer=function(e){this.getAudioGenerator(function(t){t.getAudioBuffer(e)})};let C,A,S=new AudioContext,O=(e,t,n,o=1,a=.1,s=0,i=0,r=0,c=0)=>{let f=44100,l=Math.PI;n*=2*l/f,n*=1+t*(2*Math.random()-1),s*=1e3*l/f**2,a*=0|(o=0<o?f*(10<o?10:o)|0:1),r*=2*l/f,c*=l,t=[];for(var u=0,_=0,d=0;d<o;++d)t[d]=.5*e*Math.cos(u*n*Math.cos(_*r+c))*(d<a?d/a:1-(d-a)/(o-a)),u+=1+i*(2*Math.random()-1),_+=1+i*(2*Math.random()-1),n+=s;return e=S.createBuffer(1,o,f),n=S.createBufferSource(),e.getChannelData(0).set(t),n.buffer=e,n.connect(S.destination),n.start(),n},T=!1,H=!1;n.d(t,"fire",function(){return te}),n.d(t,"drawBackground",function(){return ne});const G=document.getElementsByTagName("canvas")[0];G.addEventListener("click",()=>{"menu"==U.scene&&(U.scene="loadingsound",function(e){let t=new k({songLen:37,songData:[{osc1_oct:7,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:192,osc1_waveform:3,osc2_oct:7,osc2_det:0,osc2_detune:7,osc2_xenv:0,osc2_vol:201,osc2_waveform:3,noise_fader:0,env_attack:789,env_sustain:1234,env_release:13636,env_master:191,fx_filter:2,fx_freq:5839,fx_resonance:254,fx_delay_time:6,fx_delay_amt:121,fx_pan_freq:6,fx_pan_amt:147,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:6,lfo_amt:195,lfo_waveform:0,p:[1,2,0,0,1,2,1,2],c:[{n:[154,0,154,0,152,0,147,0,0,0,0,0,0,0,0,0,154,0,154,0,152,0,157,0,0,0,156,0,0,0,0,0]},{n:[154,0,154,0,152,0,147,0,0,0,0,0,0,0,0,0,154,0,154,0,152,0,157,0,0,0,159,0,0,0,0,0]}]},{osc1_oct:7,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:255,osc1_waveform:2,osc2_oct:8,osc2_det:0,osc2_detune:18,osc2_xenv:1,osc2_vol:191,osc2_waveform:2,noise_fader:0,env_attack:3997,env_sustain:56363,env_release:1e5,env_master:255,fx_filter:2,fx_freq:392,fx_resonance:255,fx_delay_time:8,fx_delay_amt:69,fx_pan_freq:5,fx_pan_amt:67,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:4,lfo_amt:57,lfo_waveform:3,p:[1,2,1,2,1,2,1,2],c:[{n:[130,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[123,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]},{osc1_oct:8,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:0,osc1_waveform:0,osc2_oct:8,osc2_det:0,osc2_detune:0,osc2_xenv:0,osc2_vol:0,osc2_waveform:0,noise_fader:60,env_attack:50,env_sustain:419,env_release:4607,env_master:130,fx_filter:1,fx_freq:10332,fx_resonance:120,fx_delay_time:4,fx_delay_amt:16,fx_pan_freq:5,fx_pan_amt:108,lfo_osc1_freq:0,lfo_fx_freq:0,lfo_freq:5,lfo_amt:187,lfo_waveform:0,p:[0,0,0,0,1,1],c:[{n:[0,0,147,0,0,0,147,147,0,0,147,0,0,147,0,147,0,0,147,0,0,0,147,147,0,0,147,0,0,147,0,147]}]},{osc1_oct:7,osc1_det:0,osc1_detune:0,osc1_xenv:1,osc1_vol:255,osc1_waveform:0,osc2_oct:7,osc2_det:0,osc2_detune:0,osc2_xenv:1,osc2_vol:255,osc2_waveform:0,noise_fader:0,env_attack:50,env_sustain:150,env_release:4800,env_master:200,fx_filter:2,fx_freq:600,fx_resonance:254,fx_delay_time:0,fx_delay_amt:0,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:0,lfo_freq:0,lfo_amt:0,lfo_waveform:0,p:[1,1,1,1,1,1],c:[{n:[147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0]}]},{osc1_oct:7,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:255,osc1_waveform:2,osc2_oct:7,osc2_det:0,osc2_detune:9,osc2_xenv:0,osc2_vol:154,osc2_waveform:2,noise_fader:0,env_attack:2418,env_sustain:1075,env_release:10614,env_master:240,fx_filter:3,fx_freq:2962,fx_resonance:255,fx_delay_time:6,fx_delay_amt:117,fx_pan_freq:3,fx_pan_amt:73,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:5,lfo_amt:124,lfo_waveform:0,p:[0,0,0,0,1,2,1,2],c:[{n:[154,0,154,0,152,0,147,0,0,0,0,0,0,0,0,0,154,0,154,0,152,0,157,0,0,0,156,0,0,0,0,0]},{n:[154,0,154,0,152,0,147,0,0,0,0,0,0,0,0,0,154,0,147,0,152,0,157,0,0,0,159,0,0,0,0,0]}]},{osc1_oct:7,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:192,osc1_waveform:1,osc2_oct:6,osc2_det:0,osc2_detune:9,osc2_xenv:0,osc2_vol:192,osc2_waveform:1,noise_fader:0,env_attack:137,env_sustain:2e3,env_release:4611,env_master:192,fx_filter:1,fx_freq:982,fx_resonance:89,fx_delay_time:6,fx_delay_amt:25,fx_pan_freq:6,fx_pan_amt:77,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:3,lfo_amt:69,lfo_waveform:0,p:[1,2,1,3,1,3],c:[{n:[130,0,130,0,142,0,130,130,0,142,130,0,142,0,130,0,130,0,130,0,142,0,130,130,0,142,130,0,142,0,130,0]},{n:[123,0,123,0,135,0,123,123,0,135,123,0,135,0,123,0,123,0,123,0,135,0,123,123,0,135,123,0,135,0,123,0]},{n:[135,0,135,0,147,0,135,135,0,147,135,0,147,0,135,0,135,0,135,0,147,0,135,135,0,147,135,0,147,0,135,0]}]},{osc1_oct:7,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:255,osc1_waveform:3,osc2_oct:8,osc2_det:0,osc2_detune:0,osc2_xenv:0,osc2_vol:255,osc2_waveform:0,noise_fader:127,env_attack:22,env_sustain:88,env_release:3997,env_master:255,fx_filter:3,fx_freq:4067,fx_resonance:234,fx_delay_time:4,fx_delay_amt:33,fx_pan_freq:2,fx_pan_amt:84,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:3,lfo_amt:28,lfo_waveform:0,p:[0,0,1,2,1,2,1,3],c:[{n:[0,0,142,0,154,0,0,0,142,0,0,0,154,0,0,0,0,0,142,0,154,0,0,0,142,0,0,0,154,0,0,0]},{n:[0,0,147,0,154,0,0,0,147,0,0,0,154,0,0,0,0,0,147,0,154,0,147,0,0,0,154,0,0,0,154,0]},{n:[0,0,147,0,154,0,0,0,147,0,0,0,154,0,0,0,0,0,147,0,154,0,0,0,147,0,0,0,0,0,0,0]}]},{osc1_oct:8,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:0,osc1_waveform:0,osc2_oct:8,osc2_det:0,osc2_detune:0,osc2_xenv:0,osc2_vol:0,osc2_waveform:0,noise_fader:255,env_attack:140347,env_sustain:9216,env_release:133417,env_master:208,fx_filter:2,fx_freq:2500,fx_resonance:16,fx_delay_time:2,fx_delay_amt:157,fx_pan_freq:8,fx_pan_amt:207,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:2,lfo_amt:51,lfo_waveform:0,p:[0,0,1,1,1,1,1,1],c:[{n:[147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]}],rowLen:5513,endPattern:9});C=new AudioContext,console.log("loading sound..."),t.createAudioBuffer(function(t){(A=C.createBufferSource()).buffer=t,A.connect(C.destination),C.suspend(),H=!0,e.scene="play"})}(U))});const L=G.getContext("2d");let R,N=!1,W=!1,B=(new Date).getTime();const P=B,X=6e4;let z,j=6e4,Y=!1,F=!1;const U={...a(G,640,360),molecules:[],bullets:[],impulse:0,maxImpulse:2,oxygenCurrent:0,oxygenGoal:5,shootDelay:200,model:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],scene:"menu"};a(G,U.nativeWidth,U.nativeHeight),window.addEventListener("resize",()=>{a(G,U.nativeWidth,U.nativeHeight)}),window.addEventListener("gamepadconnected",e=>{console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",e.gamepad.index,e.gamepad.id,e.gamepad.buttons.length,e.gamepad.axes.length),Y=!0});const $=function(e,t,n,o=!1,a=!1){return{...e,dx:t,dy:n,turnLeft:o,turnRight:a,alive:!0}}(d(U,U.nativeWidth/2,U.nativeHeight/2),2,2);const J=(K=d(U,16,8),Q=U.oxygenGoal,V=U.oxygenCurrent,{...K,current:Q,goal:V});var K,Q,V;const Z=function(e,t,n){return{...e,impulse:t,maxImpulse:n}}(d(U,525,8),U.impulse,U.maxImpulse);var ee;function te(e,t){if(t.state.shootDelay<=0){const n=function(e,t,n,o){return{...e,rotation:o,dx:t,dy:n,alive:!0}}(d(t.state,t.x+5,t.y+6),2,2,t.rotation);e.push(n),t.state.shootDelay=200}}function ne(e){const t=e.canvas.getContext("2d");t.save(),t.imageSmoothingEnabled=!1;let n=new Image;n.src="./assets/spritesheet.png";for(let e=0;e<6;e++)for(let o=0;o<10;o++)F?t.drawImage(n,224,0,16,15,0+16*o*4,0+15*e*4,64,60):t.drawImage(n,208,0,16,15,0+16*o*4,0+15*e*4,64,60);t.restore()}ee=$,window.addEventListener("keydown",e=>{if(!ee.alive)return;const t=e.keyCode;switch(t){case 39:ee.turnRight=!0;break;case 37:ee.turnLeft=!0;break;case 32:O(1,.1,1495,.2,.25,.1,.1,9.7,.98),te(U.bullets,ee)}38==t&&(N=!0),40==t&&(W=!0)}),window.addEventListener("keyup",e=>{const t=e.keyCode;switch(t){case 39:ee.turnRight=!1;break;case 37:ee.turnLeft=!1}38==t&&(N=!1),40==t&&(W=!1)}),window.addEventListener("gamepadconnected",e=>{const t=navigator.getGamepads()[e.gamepad.index];!function(...e){window.LOGGER&&console.log(...e)}("Gamepad connected at index %d: %s. %d buttons, %d axes.",t.index,t.id,t.buttons.length,t.axes.length)}),function(e,t){for(let n=0;n<t;n++){const t=d(e,Math.random()*e.nativeWidth,Math.random()*e.nativeHeight),n=Math.random()>=.5?o.METHANE:o.DIOXIDE;e.molecules.push(v(t,1,1,n,n==o.METHANE?13:11))}}(U,5),U.oxygenGoal=2*U.molecules.length,function e(){if(F)return c(U.canvas,f(j),U.nativeWidth/2-48,8,1),g(J),_(Z),void("win"==U.scene?c(U.canvas,"you win!",U.nativeWidth/2-48,U.nativeHeight/2,1):"lose"==U.scene&&c(U.canvas,"you lose!",U.nativeWidth/2-48,U.nativeHeight/2,1));if(requestAnimationFrame(e),L.clearRect(-16,-16,U.nativeWidth+16,U.nativeHeight+16),U.shootDelay-=15,(R=(new Date).getTime())-B>=1e3&&(j=X-(R-P),B=R),Y){const e=(z=navigator.getGamepads())[0],t=e.buttons[14],n=e.buttons[15],o=e.buttons[12],a=e.buttons[13],s=e.buttons[0];t.pressed?$.turnLeft=!0:$.turnLeft=!1,n.pressed?$.turnRight=!0:$.turnRight=!1,N=!!o.pressed,W=!!a.pressed,s.pressed&&te(U.bullets,$)}if("play"==U.scene)!T&&(C.resume(),A.start(0),T=!0),ne(U),function(e){e.alive&&(e.state.molecules.forEach(t=>{t.alive&&(t.type==o.METHANE&&s(e,t)<=1.5*t.radius&&(e.alive=!1),t.type==o.DIOXIDE&&s(e,t)<=1.8*t.radius&&(e.alive=!1),t.type==o.CARBON&&s(e,t)<=t.radius&&(e.alive=!1),t.type==o.HYDROGEN&&s(e,t)<=2*t.radius&&(e.alive=!1),t.type==o.OXYGEN&&s(e,t)<=2*t.radius&&(t.alive=!1,e.state.oxygenCurrent<e.state.oxygenGoal&&e.state.oxygenCurrent++))}),e.turnRight?e.rotation=e.rotation<360?e.rotation+=2:e.rotation=0:e.turnLeft&&(e.rotation=e.rotation>0?e.rotation-=2:e.rotation=360),e.x+=Math.cos(i(e.rotation))*(e.dx*e.state.impulse),e.y+=Math.sin(i(e.rotation))*(e.dy*e.state.impulse),e.x>=e.state.nativeWidth-16&&(e.x=e.state.nativeWidth-16),e.x<=0&&(e.x=0),e.y>=e.state.nativeHeight-16&&(e.y=e.state.nativeHeight-16),e.y<=0&&(e.y=0))}($),function(e){if(!e.alive)return;const t=e.state.canvas.getContext("2d");t.save(),t.imageSmoothingEnabled=!1;const{x:n,y:o,rotation:a}=e,s=n+8,i=o+8;t.save(),t.translate(s,i),t.rotate(Math.PI/180*a),t.translate(-s,-i),t.drawImage(e.img,0,0,16,16,n,o,16,16),t.restore()}($),function(e){let t=e.filter(e=>e.alive);for(let e=0;e<t.length;e++){u(t[e])}e=t}(U.bullets),l(U.bullets),function(e){let t=e.filter(e=>e.alive);for(let e=0;e<t.length;e++){m(t[e])}e=t}(U.molecules),h(U.molecules),c(U.canvas,f(j),U.nativeWidth/2-48,8,1),g(J),_(Z),N&&(U.impulse+=.02,U.impulse>=U.maxImpulse&&(U.impulse=U.maxImpulse)),W&&(U.impulse*=.98,U.impulse<=0&&(U.impulse=0)),U.oxygenCurrent>=U.oxygenGoal&&(F=!0,U.scene="win"),j<=0&&(F=!0,U.scene="lose"),$.alive||(F=!0,U.scene="lose");else if("menu"==U.scene){ne(U);let e=["Clean the clouds","Bring back the oxygen to the sky","by breaking the toxic molecules","and catching blue <oxygen> molecules"];!function(e,t,n,o=!0){for(let a=0;a<n.length;a++){const s=n[a];let i=o?16*s.length:0;c(U.canvas,s,e-i/2,24*a+t,1)}}(U.nativeWidth/2,96,e),c(U.canvas,"Press to play",U.nativeWidth/2-112,U.nativeHeight/2+16,1)}else"loadingsound"===U.scene&&(ne(U),c(U.canvas,"Loading sound...",U.nativeWidth/2-124,U.nativeHeight/2,1))}()}]);
//# sourceMappingURL=bundle.js.map