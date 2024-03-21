!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}a=n[o]={exports:{}};t[o][0].call(a.exports,function(e){var n=t[o][1][e];return s(n||e)},a,a.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var state,gameOverMessage,rand,supplyLinesCount,hordeStrength,balls,supplyLines,soldiers,forests,mainBall,year,city,round,roundWon,currentCityName,score,upgradeState,theScale,raf=require("./raf"),rng=require("./rng"),input=require("./input"),canvas=document.querySelector("#game"),ctx=canvas.getContext("2d"),colors=["#632F27","#C35A51","#FF4700","#FF794B","#FFC945"],landColors=["#a0e768","#b6e353","#a2fb75","#c7be60"],levels=[{cityName:"Ryazan",size:20,lines:2,soldiers:7,forests:5,seed:12},{cityName:"Kolomna",size:25,lines:2,soldiers:10,forests:6,seed:10},{cityName:"Moscow",size:10,lines:3,soldiers:12,forests:8,seed:4},{cityName:"Vladimir",size:30,lines:4,soldiers:10,forests:7,seed:5},{cityName:"Suzdal",size:10,lines:3,soldiers:15,forests:10,seed:6},{cityName:"Tver",size:20,lines:4,soldiers:15,forests:12,seed:7},{cityName:"Kostroma",size:40,lines:4,soldiers:10,forests:8,seed:8},{cityName:"Kiev",size:30,lines:5,soldiers:15,forests:10,seed:9}],upgrades_armor=["Heavy coat","Brigandine","Hardened leather Lamellar","Plate Lamellar"],upgrades_attack=["Wooden Saddles","Stirrup","Hooked lance","Three-Quivered Arrows"],upgrades_hordeSize=["Jagutu-iin Darga","Mingghan-u Noyan","Tumetu-iin Noyan","Khan Khuu"],upgrades_speed=["Pure Ado","War Training","High Cantle","Tengri's Blessing"],baseHordeSpeed=80,bgColor="#a0e768";function start(){state="running",gameOverMessage="",year=1237,round=-1,bgColor="#a0e768",upgradeState={armor:score=hordeStrength=0,attack:0,hordeSize:0,speed:0},zzfxX=new(window.AudioContext||webkitAudioContext);var i=0;song&&song.stop(),(song=zzfxP(...musicBuffers[i])).loop=!0,nextRound()}function gameOver(message){"gameOver"!==state&&(state="gameOver",gameOverMessage=message)}function doEnterKey(){"gameOver"===state?roundWon?upgradeState.armor+upgradeState.attack+upgradeState.hordeSize+upgradeState.speed===16&&nextRound(!1):state="title":"title"===state&&musicLoaded&&start()}function nextRound(upgrade){upgrade&&upgradeState[upgrade]++;for(var upgrade=baseHordeSpeed+10*upgradeState.speed,levelData=(roundWon=!1,levels[++round]),bonusBalls=(supplyLinesCount=levelData.lines,rand=rng(levelData.seed),balls=[],supplyLines=[],soldiers=[],forests=[],bgColor=landColors[round%landColors.length],Math.floor(hordeStrength/10)),i=0;i<49+5*upgradeState.hordeSize+bonusBalls;i++)balls.push({x:.75*canvas.width+rand.intN(canvas.width),y:canvas.height/2+rand.intN(canvas.height/2),radius:10,dx:0,dy:0,color:rand.pickN(colors),cooldown:-1});balls.push({x:.75*canvas.width,y:.75*canvas.height,radius:15,dx:0,dy:0,color:colors[1],cooldown:Math.random()}),hordeStrength=10*balls.length-100;for(i=0;i<supplyLinesCount;i++)supplyLines.push({x:rand.int(canvas.width),y:rand.int(canvas.height/2),radius:20,dx:Math.random()*baseHordeSpeed/2,dy:Math.random()*baseHordeSpeed/2,color:"#00FF00",cooldown:Math.random()});for(i=0;i<levelData.forests;i++)for(var blobs=rand.int(5)+10,fx=rand.int(canvas.width),fy=rand.int(canvas.height/2),j=0;j<blobs;j++)forests.push({x:fx-40+rand.int(80),y:fy-40+rand.int(80),radius:20+rand.int(10),color:"#228B22"});for(i=0;i<levelData.soldiers;i++)soldiers.push({x:rand.int(canvas.width),y:rand.int(canvas.height/2),radius:15,dx:Math.random()*baseHordeSpeed/2,dy:Math.random()*baseHordeSpeed/2,color:"#FF0000",cooldown:Math.random()}),i<supplyLinesCount&&(soldiers[i].supplyLine=supplyLines[i]);(mainBall=balls[balls.length-1]).dx=-upgrade,city={x:.5*canvas.width,y:.25*canvas.height,radius:levelData.size},currentCityName=levelData.cityName,state="running"}function resizeCanvas(){ih=window.innerHeight-30,iw=window.innerWidth-20,rat=800/600,(iw=window.innerWidth>window.screen.width?window.screen.width-20:iw)>ih*rat?iw=ih*rat:ih=iw*(1/rat),canvas.style.width=iw+"px",canvas.style.height=ih+"px",theScale=iw/canvas.width,window.innerWidth>window.innerHeight?document.getElementById("touchControls").style.display="none":(document.getElementById("touchControls").style.display="block",buttonHeight=(window.innerHeight-ih-70)/4,document.querySelectorAll(".touchButton").forEach(function(button){button.style.height=buttonHeight+"px"}))}raf.start(function(elapsed){if(ctx.fillStyle=bgColor,ctx.fillRect(0,0,canvas.width,canvas.height),"title"===state)(musicLoaded?function(ctx){ctx.fillStyle="#000000",ctx.font="48px Georgia",ctx.textAlign="left",ctx.fillText("The First Horde",10,60),ctx.font="32px Georgia",ctx.fillText("Use the cursor keys or swipe to guide your horde.",10,120),ctx.fillText("Avoid the Rus armies (⚔️) if possible.",10,160),ctx.fillText("Destroy the supply lines (🌾) to weaken the",10,200),ctx.fillText("defenses of the cities.",10,240),ctx.fillText("Raid the cities to win.",10,320),ctx.fillText("An entry for js13k 2023 by slashie and stoltverd.",10,400),ctx.fillText("Music and sound effects by quietgecko.",10,440),ctx.fillText("Press [Enter] to start",10,520)}:function(ctx){ctx.fillStyle="#000000",ctx.textAlign="left",ctx.font="32px Georgia",ctx.fillText("Loading music...",10,120)})(ctx);else{"running"===state&&1299<(year+=.15*elapsed)&&gameOver("The XIII century is over."),forests.forEach(function(forest){ctx.beginPath(),ctx.arc(forest.x,forest.y,forest.radius,0,2*Math.PI,!0),ctx.closePath(),ctx.fillStyle=forest.color,ctx.fill()});for(var hordeSpeed=baseHordeSpeed+10*upgradeState.speed,j=0;j<balls.length;j++){if((ball=balls[j])===mainBall&&"running"===state)input.isDown("ArrowLeft")?(ball.dy=0,ball.dx=-hordeSpeed):input.isDown("ArrowRight")?(ball.dy=0,ball.dx=hordeSpeed):input.isDown("ArrowUp")?(ball.dx=0,ball.dy=-hordeSpeed):input.isDown("ArrowDown")&&(ball.dx=0,ball.dy=hordeSpeed);else if(ball.cooldown<0){var angle=Math.atan2(mainBall.y-ball.y,mainBall.x-ball.x),rando=("gameOver"===state&&(angle=Math.random()*Math.PI*2),ball.dx=hordeSpeed*Math.cos(angle)*.9,ball.dy=hordeSpeed*Math.sin(angle)*.9,Math.random());ball.dx=ball.dx*(1+.3*rando),ball.dy=ball.dy*(1+.3*rando);for(var i=0;i<balls.length;i++){var ball2=balls[i];if(ball2===ball)break;if(Math.abs(ball.x-ball2.x)<=2*ball.radius&&Math.abs(ball.y-ball2.y)<=2*ball.radius){angle=angle-Math.PI/4+Math.random()*(Math.PI/2),ball.dx=hordeSpeed*Math.cos(angle)*.9,ball.dy=hordeSpeed*Math.sin(angle)*.9;break}}ball.cooldown=.5+.5*Math.random()}else ball.cooldown-=elapsed;(ball.x-ball.radius<0&&ball.dx<0||ball.x+ball.radius>canvas.width&&0<ball.dx)&&(ball.dx=.7*-ball.dx),(ball.y-ball.radius<0&&ball.dy<0||ball.y+ball.radius>canvas.height&&0<ball.dy)&&(ball.dy=.7*-ball.dy);for(var bdx=ball.dx,bdy=ball.dy,k=0;k<forests.length;k++){var forest=forests[k];if(Math.abs(ball.x-forest.x)<=2*ball.radius&&Math.abs(ball.y-forest.y)<=2*ball.radius){bdx*=.3,bdy*=.3;break}}ball.x+=bdx*elapsed,ball.y+=bdy*elapsed,ball.radius<=3?"running"===state&&(hordeStrength-=ball.radius,balls.splice(j,1),j--,ball===mainBall)&&(playSound(2),gameOver("The Khan is dead.")):(ctx.beginPath(),ctx.arc(ball.x,ball.y,ball.radius,0,2*Math.PI,!0),ctx.closePath(),ctx.fillStyle=ball.color,ctx.fill(),ball===mainBall&&(ctx.fillStyle="#000000",ctx.font="24px Georgia",ctx.fillText("🐎",ball.x,ball.y+8)))}for(j=0;j<supplyLines.length;j++){var supplyLine=supplyLines[j];if(supplyLine.cooldown<0?(angle=Math.random()*Math.PI*2,supplyLine.dx=baseHordeSpeed*Math.cos(angle)*.1,supplyLine.dy=baseHordeSpeed*Math.sin(angle)*.1,rando=Math.random(),supplyLine.dx=supplyLine.dx*(1+.3*rando),supplyLine.dy=supplyLine.dy*(1+.3*rando),supplyLine.cooldown=5+Math.random()):supplyLine.cooldown-=elapsed,"running"===state){for(i=0;i<balls.length;i++){var ball=balls[i];Math.abs(ball.x-supplyLine.x)<=2*supplyLine.radius&&Math.abs(ball.y-supplyLine.y)<=2*supplyLine.radius&&.7<Math.random()&&(damage=.1+.02*upgradeState.attack,supplyLine.radius-=damage,playSound(5))}if(supplyLine.radius<3){supplyLinesCount--,supplyLines.splice(j,1),j--,playSound(supplyLinesCount?3:2);continue}}(supplyLine.x-supplyLine.radius<0&&supplyLine.dx<0||supplyLine.x+supplyLine.radius>canvas.width&&0<supplyLine.dx)&&(supplyLine.dx=.7*-supplyLine.dx),(supplyLine.y-supplyLine.radius<0&&supplyLine.dy<0||supplyLine.y+supplyLine.radius>canvas.height&&0<supplyLine.dy)&&(supplyLine.dy=.7*-supplyLine.dy),supplyLine.x+=supplyLine.dx*elapsed,supplyLine.y+=supplyLine.dy*elapsed,ctx.beginPath(),ctx.arc(supplyLine.x,supplyLine.y,supplyLine.radius+5,0,2*Math.PI,!0),ctx.closePath(),ctx.fillStyle="#000",ctx.fill(),ctx.beginPath(),ctx.arc(supplyLine.x,supplyLine.y,supplyLine.radius,0,2*Math.PI,!0),ctx.closePath(),ctx.fillStyle=bgColor,ctx.fill(),ctx.fillStyle="#000000",ctx.font="24px Georgia",ctx.fillText("🌾",supplyLine.x,supplyLine.y+8)}if(soldiers.forEach(function(soldier){var angle;if(soldier.cooldown<0?(angle=soldier.supplyLine?Math.atan2(soldier.supplyLine.y-soldier.y,soldier.supplyLine.x-soldier.x):Math.random()*Math.PI*2,soldier.dx=baseHordeSpeed*Math.cos(angle)*.2,soldier.dy=baseHordeSpeed*Math.sin(angle)*.2,angle=Math.random(),soldier.dx=soldier.dx*(1+.3*angle),soldier.dy=soldier.dy*(1+.3*angle),soldier.cooldown=3+Math.random()):soldier.cooldown-=elapsed,"running"===state)for(var i=0;i<balls.length;i++){var damage,ball=balls[i];Math.abs(ball.x-soldier.x)<=2*soldier.radius&&Math.abs(ball.y-soldier.y)<=2*soldier.radius&&.7<Math.random()&&(damage=.2-.03*upgradeState.armor,playSound(4),ball.radius-=damage,(hordeStrength-=damage)<=0)&&(hordeStrength=0,gameOver("The horde disbands"),playSound(2))}(soldier.x-soldier.radius<0&&soldier.dx<0||soldier.x+soldier.radius>canvas.width&&0<soldier.dx)&&(soldier.dx=.7*-soldier.dx),(soldier.y-soldier.radius<0&&soldier.dy<0||soldier.y+soldier.radius>canvas.height&&0<soldier.dy)&&(soldier.dy=.7*-soldier.dy),soldier.x+=soldier.dx*elapsed,soldier.y+=soldier.dy*elapsed,ctx.beginPath(),ctx.arc(soldier.x,soldier.y,soldier.radius,0,2*Math.PI,!0),ctx.closePath(),ctx.fillStyle="#be913c",ctx.fill(),ctx.fillStyle="#000000",ctx.textAlign="center",ctx.font="24px Georgia",ctx.fillText("⚔️",soldier.x,soldier.y+8)}),"running"===state){for(i=0;i<balls.length;i++){var damage,ball=balls[i];0===supplyLinesCount&&Math.abs(ball.x-city.x)<=2*city.radius&&Math.abs(ball.y-city.y)<=2*city.radius&&.9<Math.random()&&(damage=.1+.02*upgradeState.attack,city.radius-=damage/2,playSound(5))}city.radius<6&&(score+=Math.floor(hordeStrength),playSound(6),playSound(0),round===levels.length-1?gameOver("Congratulations, you conquered Rus!"):(roundWon=!0,gameOver("You have invaded "+currentCityName+"!")))}0<supplyLinesCount&&(ctx.beginPath(),ctx.arc(city.x,city.y,city.radius+5,0,2*Math.PI,!0),ctx.closePath(),ctx.fillStyle="#000000",ctx.fill()),ctx.beginPath(),ctx.arc(city.x,city.y,city.radius,0,2*Math.PI,!0),ctx.closePath(),ctx.fillStyle=0<supplyLinesCount?bgColor:"#000000",ctx.fill(),3<=city.radius&&(ctx.fillStyle=0<supplyLinesCount?"#000000":bgColor,ctx.font="24px Georgia",ctx.fillText("♜",city.x,city.y+8)),ctx.fillStyle="#000000",ctx.font="24px Georgia",ctx.textAlign="left",ctx.fillText("Supply Lines: "+supplyLinesCount,10,530),ctx.fillText("Horde Strength: "+Math.floor(hordeStrength),10,580),ctx.textAlign="right",ctx.fillText("Round: "+(round+1),780,530),ctx.fillText("Score: "+score,780,580),ctx.textAlign="center",ctx.fillText("Year "+Math.floor(year),canvas.width/2,580),ctx.font="16px Georgia",ctx.fillText(currentCityName,canvas.width/2,.25*canvas.height+50),ctx.font="24px Georgia","gameOver"===state&&(ctx.fillText(gameOverMessage,canvas.width/2,40),roundWon?upgradeState.armor+upgradeState.attack+upgradeState.hordeSize+upgradeState.speed===16?ctx.fillText("Press [Enter to raid on]",canvas.width/2,90):(ctx.fillStyle=bgColor,ctx.fillRect(canvas.width/2-200,0,400,390),ctx.fillStyle="#000000",ctx.fillText(gameOverMessage,canvas.width/2,40),ctx.fillText("Select an improvement",canvas.width/2,90),ctx.font="18px Georgia",upgradeState.armor<4&&(ctx.beginPath(),ctx.rect(canvas.width/2-180,115,360,60),ctx.stroke(),ctx.fillText("1. Armor: "+upgrades_armor[upgradeState.armor],canvas.width/2,135),ctx.fillText("+3 Skirmish Defense",canvas.width/2,160)),upgradeState.attack<4&&(ctx.beginPath(),ctx.rect(canvas.width/2-180,185,360,60),ctx.stroke(),ctx.fillText("2. Weapons: "+upgrades_attack[upgradeState.attack],canvas.width/2,205),ctx.fillText("+2 Raid Attack",canvas.width/2,230)),upgradeState.hordeSize<4&&(ctx.beginPath(),ctx.rect(canvas.width/2-180,255,360,60),ctx.stroke(),ctx.fillText("3. Leadership: "+upgrades_hordeSize[upgradeState.hordeSize],canvas.width/2,275),ctx.fillText("+5 horde units on each new round",canvas.width/2,300)),upgradeState.speed<4&&(ctx.beginPath(),ctx.rect(canvas.width/2-180,325,360,60),ctx.stroke(),ctx.fillText("4. Horse Training: "+upgrades_speed[upgradeState.speed],canvas.width/2,345),ctx.fillText("+10 horde speed",canvas.width/2,370))):ctx.fillText("Press [Enter to restart]",canvas.width/2,90))}}),input.typed("Enter",function(){doEnterKey()}),input.typed("1",function(){"gameOver"===state&&roundWon&&upgradeState.armor<4&&nextRound("armor")}),input.typed("2",function(){"gameOver"===state&&roundWon&&upgradeState.attack<4&&nextRound("attack")}),input.typed("3",function(){"gameOver"===state&&roundWon&&upgradeState.hordeSize<4&&nextRound("hordeSize")}),input.typed("4",function(){"gameOver"===state&&roundWon&&upgradeState.speed<4&&nextRound("speed")}),state="title",window.addEventListener("resize",resizeCanvas,!1),resizeCanvas(),zzfxM=(n,f,t,e=125)=>{let l,o,z,r,g,h,x,a,u,c,i,m,p,G,M=0,R=[],b=[],j=[],k=0,q=0,s=1,v={},w=zzfxR/e*60>>2;for(;s;k++)R=[s=a=m=0],t.map((e,d)=>{for(x=f[e][k]||[0,0,0],s|=!!f[e][k],G=m+(f[e][0].length-2-!a)*w,p=d==t.length-1,o=2,r=m;o<x.length+p;a=++o){for(g=x[o],u=o==x.length+p-1&&p||c!=(x[0]||0)|g|0,z=0;z<w&&a;z++>w-99&&u&&(i+=(i<1)/99))h=(1-i)*R[M++]/2||0,b[r]=(b[r]||0)-h*q+h,j[r]=(j[r++]||0)+h*q+h;g&&(i=g%1,q=x[1]||0,g|=0)&&(R=v[[c=x[M=0]||0,g]]=v[[c,g]]||((l=[...n[c]])[2]*=2**((g-12)/12),0<g?zzfxG(...l):[]))}m=G});return[b,j]},zzfx=(...t)=>zzfxP(zzfxG(...t)),zzfxP=(...t)=>{let e=zzfxX.createBufferSource(),f=zzfxX.createBuffer(t.length,t[0].length,zzfxR);return t.map((d,i)=>f.getChannelData(i).set(d)),e.buffer=f,e.connect(zzfxX.destination),e.start(),e},zzfxG=(q=1,k=.05,c=220,e=0,t=0,u=.1,r=0,F=1,v=0,z=0,w=0,A=0,l=0,B=0,x=0,G=0,d=0,y=1,m=0,C=0)=>{let b=2*Math.PI,H=v*=500*b/zzfxR**2,I=(0<x?1:-1)*b/4,D=c*=(1+2*k*Math.random()-k)*b/zzfxR,Z=[],g=0,E=0,a=0,n=1,J=0,K=0,f=0,p,h;for(e=99+zzfxR*e,m*=zzfxR,t*=zzfxR,u*=zzfxR,d*=zzfxR,z*=500*b/zzfxR**3,x*=b/zzfxR,w*=b/zzfxR,A*=zzfxR,l=zzfxR*l|0,h=e+m+t+u+d|0;a<h;Z[a++]=f)++K%(100*G|0)||(f=r?1<r?2<r?3<r?Math.sin((g%b)**3):Math.max(Math.min(Math.tan(g),1),-1):1-(2*g/b%2+2)%2:1-4*Math.abs(Math.round(g/b)-g/b):Math.sin(g),f=(l?1-C+C*Math.sin(2*Math.PI*a/l):1)*(0<f?1:-1)*Math.abs(f)**F*q*zzfxV*(a<e?a/e:a<e+m?1-(a-e)/m*(1-y):a<e+m+t?y:a<h-d?(h-a-d)/u*y:0),f=d?f/2+(d>a?0:(a<h-d?1:(h-a)/d)*Z[a-d|0]/2):f),p=(c+=v+=z)*Math.sin(E*x-I),g+=p-p*B*(1-1e9*(Math.sin(a)+1)%2),E+=p-p*B*(1-1e9*(Math.sin(a)**2+1)%2),n&&++n>A&&(c+=w,D+=w,n=0),!l||++J%l||(c=D,v=H,n=n||1);return Z},zzfxV=.3,zzfxR=44100;const musics=[[[[,0,100,,.05,,,,,150,,,.04,.6,12,,,.3,.08],[.15,0,110,,2,1,4,.3,,,,2,.1,,,,.03,.7],[,0,80,,.1,,,20,,-10,,,10,.6,,,,.5,.08]],[[[,-1,,,,,1,1,1,1,,,,,1,8,8,1,,,,,1,8,,1,,,,,1,1,1,1,,,,,1,8,8,1,,,,,1,1,,1,,,,,1,1,,1,,,,,1,8,8,1],[2,,22,,27,28,22,,,,22,,,,22,,28,,28,,22,,22,,,,22,,,,22,28,29,30,22,,28,,22,25,28,30,22,,,,23,,,,22,,23,,23,,22,,22,,22,,22,,,23],[,1,26,,,,26,,,,26,,,,26,,26,,26,,,,26,,,,26,,,,26,,,,26,,26,,26,,,,26,,,,26,,,,26,,26,,26,,,,26,,,,26,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]],[[,-1,,,,,1,1,1,1,,,,,1,8,8,1,,,,,1,8,,1,,,,,1,1,1,1,,,,,1,8,8,1,,,,,1,1,,1,,,,,1,1,,1,,,,,1,8,8,1],[,,8,,,,8,,7,,8,,,,8,,,,8,,,,8,8,,7,8,,,,8,,,,8,,7,,8,,7,,8,,,,8,,,,8,,7,,8,,,,8,,,,8,7,,8],[,1,26,,,,26,,,,26,,,,26,,26,,26,,,,26,,,,26,,,,26,,,,26,,26,,26,,,,26,,,,26,,,,26,,26,,26,,,,26,,,,26,,,,],[1,,3,,,,,,,,,,,,,,,,3,,,,,,,,,,,,,,,,6,,,,,,,,,,,,,,,,6,,,,,,,,,,,,,,,,]],[[,-1,1,,,,1,1,1,1,,,,,1,8,8,1,,,,,1,8,,1,,,,,1,1,1,1,,,,,1,8,8,1,,,,,1,1,,1,,,,,1,1,,1,,,,,1,8,8,1],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[,1,26,,,,26,,,,26,,,,26,,26,,26,,,,26,,,,26,,,,26,,,,26,,26,,26,,,,26,,,,26,,,,26,,26,,26,,,,26,,,,26,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]],[[,-1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,3,,,,,,,,,,,,,,,,3,,,,,,,,,,,,,,,,6,,,,,,,,,,,,,,,,6,,,,,,,,,,,,,,,,]]],[3,2,1,0,1,2],100]];let song;const sfxs=[[,,100,,.05,.4,4,0,,,100,,,2,,-.7,.5,.37,.5,.35],[2.62,,269,.25,.04,1,4,.6,25,,,,.15,,.1,.1,.4,.7,.08,.45],[2.4,,210,.03,.4,.2,1,3,,-2,,,,1.4,3.5,,.09,.97,.3],[1.22,,269,.25,.04,1,4,.6,25,,,,.15,,.1,.1,.4,.7,.08,.45],[.4,.4,261.6256,,.05,.02,,3,-6,,,,,2.2,,,,1.1,.01,.21],[.1,,332,.07,.03,.09,4,.3,12,,,,.03,,,.2,,.4,.03],[,0,100,,.8,1.2,,,-2,1.2,4,1,,1.5,,,.07,.8,.4]];function playSound(i){zzfx(...sfxs[i])}let musicBuffers;var musicLoaded=!1;function into(x,y,xa,ya,w,h){return xa<x&&x<xa+w&&ya<y&&y<ya+h}setTimeout(()=>{musicBuffers=musics.map(m=>zzfxM(...m)),musicLoaded=!0},50),document.getElementById("game").addEventListener("pointerdown",function(e){var x=(e.clientX-e.target.offsetLeft)/theScale,e=(e.clientY-e.target.offsetTop)/theScale;"gameOver"===state&&roundWon?into(x,e,canvas.width/2-180,115,360,60)?upgradeState.armor<4&&nextRound("armor"):into(x,e,canvas.width/2-180,185,360,60)?upgradeState.attack<4&&nextRound("attack"):into(x,e,canvas.width/2-180,255,360,60)?upgradeState.hordeSize<4&&nextRound("hordeSize"):into(x,e,canvas.width/2-180,325,360,60)&&upgradeState.speed<4&&nextRound("speed"):doEnterKey()})},{"./input":2,"./raf":3,"./rng":4}],2:[function(require,module,exports){var pressed={},typedCallbacks={};window.onkeydown=e=>pressed[e.key]=!0,window.onkeyup=e=>pressed[e.key]=!1,window.addEventListener("keypress",function(e){typedCallbacks[e.key]&&typedCallbacks[e.key]()}),window.addEventListener("keydown",e=>{0===e.key.indexOf("Arrow")&&e.preventDefault()}),module.exports={isDown:function(keyCode){return pressed[keyCode]},typed:function(keyCode,callback){typedCallbacks[keyCode]=callback}},window.hordeGlobal={},window.hordeGlobal.touch=function(key){pressed[key]=!0},window.hordeGlobal.touchEnd=function(){pressed.ArrowUp=!1,pressed.ArrowDown=!1,pressed.ArrowLeft=!1,pressed.ArrowRight=!1},window.hordeGlobal.touchEnter=function(){typedCallbacks.Enter()},function(el,callback){var swipedir,startX,startY,distX,distY,startTime,handleswipe=callback||function(swipedir){};el.addEventListener("touchstart",function(e){var touchobj=e.changedTouches[0];swipedir="none",dist=0,startX=touchobj.pageX,startY=touchobj.pageY,startTime=(new Date).getTime(),e.preventDefault()},!1),el.addEventListener("touchmove",function(e){e.preventDefault()},!1),el.addEventListener("touchend",function(e){var touchobj=e.changedTouches[0];distX=touchobj.pageX-startX,distY=touchobj.pageY-startY,(new Date).getTime()-startTime<=500&&(50<=Math.abs(distX)&&Math.abs(distY)<=100?swipedir=distX<0?"left":"right":50<=Math.abs(distY)&&Math.abs(distX)<=100&&(swipedir=distY<0?"up":"down")),handleswipe(swipedir),e.preventDefault()},!1)}(document.getElementById("game"),function(swipedir){switch(pressed.ArrowUp=!1,pressed.ArrowDown=!1,pressed.ArrowLeft=!1,pressed.ArrowRight=!1,swipedir){case"left":pressed.ArrowLeft=!0;break;case"right":pressed.ArrowRight=!0;break;case"up":pressed.ArrowUp=!0;break;case"down":pressed.ArrowDown=!0}})},{}],3:[function(require,module,exports){var time=0;function raf(fn){return window.requestAnimationFrame(function(){var now=Date.now(),elapsed=now-time;999<elapsed?elapsed=1/60:elapsed/=1e3,time=now,fn(elapsed)})}module.exports={start:function(fn){return raf(function tick(elapsed){fn(elapsed),raf(tick)})},stop:function(id){window.cancelAnimationFrame(id)}}},{}],4:[function(require,module,exports){module.exports=function(seed){function random(){var x=1e4*Math.sin(.8765111159592828+seed++);return x-Math.floor(x)}var rng={int:function(max){return random()*(max||268435455)|0},intN:function(max){return Math.random()*max|0},float:random,bool:function(){return.5<random()},range:function(min,max){return rng.int(max-min)+min},pick:function(source){return source[rng.range(0,source.length)]},pickN:function(source){return source[rng.intN(source.length)]}};return rng}},{}]},{},[1]);