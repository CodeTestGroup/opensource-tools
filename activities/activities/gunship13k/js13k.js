!function(){window.drawShape=function(e,t,n,i,a,o){e.beginPath(),e.moveTo(n.x+t[0][0],n.y+t[0][1]);var r,s=t.length;for(r=1;s>r;++r)e.lineTo(n.x+t[r][0],n.y+t[r][1]);if(1==i)for(r=s-1;r>-1;--r)e.lineTo(n.x+-t[r][0],n.y+t[r][1]);1==o&&e.fill(),1==a&&e.stroke()},window.drawCircle=function(e,t,n,i,a,o){e.beginPath(),e.arc(t,n,i,0,2*Math.PI),1==o&&e.fill(),a!==!1&&e.stroke()},window.drawGradientCircle=function(e,t,n,i,a,o){e.beginPath();var r=e.createRadialGradient(t,n,5,t,n,i);r.addColorStop(0,"rgba("+a+", "+o+")"),r.addColorStop(.5,"rgba("+a+", "+o+")"),r.addColorStop(1,"rgba("+a+", 0)"),e.fillStyle=r,e.arc(t,n,i,0,2*Math.PI),e.fill()},window.drawArc=function(e,t,n,i,a,o){e.beginPath(),e.arc(t,n,i,a,o),e.stroke()},window.drawGrid=function(e,t){var n=t.bounds,i=t.step,a=t.offset,o=Math.floor(n.bottom/i);e.lineWidth=1,e.strokeStyle="rgba(80, 80, 80, 1)",e.beginPath();for(var r,s=0;o>s;++s)r=s*i+a,e.moveTo(n.left,r),e.lineTo(n.right,r);e.stroke()},window.drawTextLine=function(e,t,n,i){e.fillStyle="rgba(255, 255, 255, 1)",e.fillText(t,n,i)},window.drawParagraph=function(e,t,n,i,a){void 0==a&&(a="left");var o=n;switch(a){case"left":n-=200,o=n-20}e.textAlign=a,e.font="18px Arial",drawTextLine(e,t[0],o,i),i+=10,e.font="14px Arial";for(var r=1;r<t.length;++r)drawTextLine(e,t[r],n,i+20*r)}}(),function(){window.FrameTimer=function(e){var t=this;t._frames=[],t._graph=[],t._fps=0,t.bounds=e.bounds,t._deltaHistory=[],t._drawHistory=[],t._lastDraw=0,t.update=function(e,n){t._deltaHistory.push(n),t._deltaHistory.length>t.bounds.right&&t._deltaHistory.shift()},t.draw=function(e){var n=performance.now(),i=n-t._lastDraw;t._drawHistory.push(i),t._drawHistory.length>t.bounds.right&&t._drawHistory.shift(),t._lastDraw=n,t.drawGraph(e,t._drawHistory,"rgba(255, 0, 0, 0.5)"),t.drawGraph(e,t._deltaHistory,"rgba(0, 255, 0, 0.5)")},t.drawGraph=function(e,n,i){for(var a=[],o=0;o<n.length;++o)a.push([o,50-n[o]]);e.strokeStyle=i,a.length&&drawShape(e,a,{x:t.bounds.right-n.length,y:0},!1,!0)}}}(),function(){var e=.06,t=function(){return window.performance&&window.performance.now?performance.now():(new Date).getTime()},n=function(){var e=this;e._assets=[],e.add=function(t){return t.assetList=e,e._assets.push(t),t},e.remove=function(t){var n=e._assets.indexOf(t);return n>-1&&e._assets.splice(n,1),t},e.update=function(t,n){e._assets.forEach(function(e){e.update&&e.update(t,n)})},e.draw=function(t){e._assets.forEach(function(e){e.draw&&e.draw(t)})}};window.GameLoop=function(i){var a=this;extend(a,i),a.ctx=a.canvas.getContext("2d"),a.width=a.canvas.width,a.height=a.canvas.height,a._running=!1,a.paused=!1,a._lastUpdate=t(),a.run=function(){a.assets=new n,a._running?a.setupGameAssets(a.assets):(a.initialize(a.assets,function(){a.setupGameAssets(a.assets),a._setup=!0}),a._running=!0,a._queueUpdate())},a.pause=function(e){a.paused=e},a._queueUpdate=function(){setTimeout(a._update,0)},a._queueDraw=function(){window.requestAnimationFrame?window.requestAnimationFrame(a._draw):window.setTimeout(a._draw,1e3/60)},a._update=function(){var n=t(),i=n-a._lastUpdate,o=e*i;a._lastUpdate=n,a.paused||(a.assets.update(i,o),a._setup&&a.update(i,o)),a._queueDraw()},a._draw=function(){a.assets.draw(a.ctx),a.draw(),a._queueUpdate()}}}(),function(){window.$=function(e){return"#"==e.charAt(0)?document.getElementById(e.substr(1,e.length)):void 0},window.intersectRect=function(e,t){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)},window.extend=function(){for(var e=arguments,t=e[0]||{},n=1;n<e.length;++n){var i=e[n];for(var a in i)t[a]=i[a]}return t}}(),function(){var e={},t=0,n=0;document.addEventListener("keydown",function(t){e[t.keyCode]=!0}),document.addEventListener("keyup",function(t){delete e[t.keyCode]}),document.addEventListener("mousedown",function(){e.leftmouse=!0}),document.addEventListener("mouseup",function(){delete e.leftmouse}),document.addEventListener("mousemove",function(e){var i=window.game.canvas.getBoundingClientRect();t=e.clientX-i.left,n=e.clientY-i.top}),_isDown=function(t){for(var n=0;n<t.length;++n)if(1==e[t[n]])return!0;return!1},window.Input={up:function(){return _isDown([38,87])},right:function(){return _isDown([39,68])},down:function(){return _isDown([40,83])},left:function(){return _isDown([37,65])},fire:function(){return _isDown([32,"leftmouse"])},restart:function(){return _isDown([13])},mouse:function(){return{x:t,y:n}}}}(),function(){window.Background=function(e){var t=this;e=e||{},t.width=e.width||400,t.height=e.height||400,t.offset=0,t.update=function(e,n){t.offset+=n,t.offset>50&&(t.offset-=50)},t.draw=function(e){var n=t.width,i=t.height;e.fillStyle="#000",e.fillRect(0,0,n,i),drawGrid(e,{bounds:{top:0,right:n,bottom:i,left:0},step:50,offset:t.offset})}}}(),function(){window.Bullet=function(e){window.Bullet.instances.push(this);var t=this;t.x=e.x,t.y=e.y,t.speedVariation=e.speedVariation||0,t.angleVariation=e.angleVariation||0,t.bounds=e.bounds;var n=Math.random()*t.angleVariation-t.angleVariation/2,i=t.angle=e.angle+n,a=Math.random()*t.speedVariation-t.speedVariation/2;t.speed=(e.speed||10)+a,t._cos=Math.cos(i),t._sin=-Math.sin(i),t.update=function(e,n){t.speed-=.05*n;var i=t.speed*n,a=t.bounds,o=t.x+=i*t._cos,r=t.y+=i*t._sin;(o<a.left||o>a.right||r<a.top||r>a.bottom)&&t.destroy({explode:!0})},t.draw=function(e){var n=t.x,i=t.y;e.lineWidth=1,e.strokeStyle="rgba(255, 255, 255, 1)",e.beginPath(),e.moveTo(n+20*t._cos,i+20*t._sin),e.lineTo(n,i),e.stroke()},t.destroy=function(e){if(window.Bullet.instances.splice(window.Bullet.instances.indexOf(t),1),t.assetList.remove(t),e&&e.explode)for(var n=0;5>n;++n)t.assetList.add(new Particle({x:t.x,y:t.y,speed:t.speed,speedVariation:2.5,angle:t.angle,angleVariation:2,bounds:t.bounds,life:500}))},t.hits=function(e){var n=e.getRect(),i=t.x,a=t.y;return i>n.left&&i<n.right&&a>n.top&&a<n.bottom?!0:!1}},window.Bullet.instances=[]}(),function(){window.Enemy=function(e){window.Enemy.instances.push(this);var t=this;t.x=e.x,t.y=e.y,t.bounds=e.bounds,t.speed=e.speed||1.5,t.escaped=e.escaped,t.health=t.originalHealth=e.health||1;var n;switch(t.health){case 2:n=[0,255,0];break;case 3:n=[117,223,255];break;case 4:n=[186,66,186];break;case 5:n=[255,43,43];break;default:n=[255,255,255]}t.color=n,t.colorRGBA="rgba("+n[0]+", "+n[1]+", "+n[2]+", 1)",t.update=function(e,n){var i=t.bounds,a=t.y+=t.speed*n;(a<i.top||a>i.bottom)&&(t.escaped&&t.escaped(),t.health=0,t.destroy())},t.draw=function(e){e.lineWidth=t.health,e.strokeStyle=t.colorRGBA,drawCircle(e,t.x,t.y,12-t.originalHealth+t.health)},t.getRect=function(){var e=12-t.originalHealth+2*t.health;return{top:t.y-e,right:t.x+e,bottom:t.y+e,left:t.x-e}},t.damage=function(e){return t.health-=e.damage,t.explode(e),t.health<=0?(t.destroy(),!0):!1},t.explode=function(e){void 0===e.angleVariation&&(e.angleVariation=2);for(var n=0;10>n;++n)t.assetList.add(new Particle({x:e.x,y:e.y,speed:e.speed,speedVariation:2.5,angle:e.angle,angleVariation:e.angleVariation,bounds:t.bounds,color:t.color,life:500}))},t.destroy=function(){for(var e=0;e<t.health;++e)t.explode({x:t.x,y:t.y,speed:5,angle:0,angleVariation:6.28});window.Enemy.instances.splice(window.Enemy.instances.indexOf(t),1),t.assetList.remove(t);for(var n in t)delete t[n]}},window.Enemy.instances=[]}(),function(){window.GameOver=function(e){var t=this;t.bounds=e.bounds,t.scoreModel=e.scoreModel,t.bulletsFired=e.bulletsFired,t.enemiesKilled=e.enemiesKilled,t.enemiesescaped=e.enemiesescaped,t.x=t.bounds.right/2,t.y=t.bounds.bottom/2-100,t._framesPassed=0,t.position=0,t.y=t.bounds.bottom/2-120-(50-50*t.position),t.update=function(e){t.position<1&&(t._framesPassed+=e,t.position=Math.min(1,.002*t._framesPassed),t.y=t.bounds.bottom/2-120-(50-50*t.position))},t.draw=function(e){var n=t.x,i=t.y,a=t.bounds,o=t.position;e.beginPath(),e.lineWidth=1,e.strokeStyle="rgba(255, 255, 255, 1)",e.fillStyle="rgba(0, 0, 0, 0.2)",e.fillRect(0,0,a.right,a.bottom),e.stroke(),e.fillStyle="rgba(255, 255, 255, "+o+")",e.textAlign="center",e.font="36px Arial",drawTextLine(e,"Game Over!",n,i);var r,s=t.scoreModel.score(),l=t.scoreModel.highScore();r=s>l?["You set a new high score!","Score: "+s,"Previous best: "+l]:["You can do better than that!","Score: "+s,"Previous best: "+l],r=r.concat(["Highest multiplier: "+t.scoreModel.score(),"Bullets fired: "+t.bulletsFired,"Enemies killed: "+t.enemiesKilled,"Longest kill chain: "+t.scoreModel.longestKillChain(),"Enemies escaped: "+t.enemiesescaped]),drawParagraph(e,r,n,i+40,"center"),e.textAlign="center",e.font="18px Arial",e.fillText("Press [Enter] to try again",n,i+230)}}}(),function(){var e=["Controls:","Move left and right using [a] and [d] or arrow left and right.","Aim cannons with mouse cursor.","Fire with [space] or left mouse button.","Pause and resume with [p]."],t=["Game:","Shoot enemies to score points.","Chain kills to increase your multiplier and power up your cannon.","If an enemy gets past you, the score multiplier is reset!","Hitting an enemy with your ship will trigger an explosion and","kill all enemies.","But if you get hit three times it's Game Over!"];window.Instructions=function(n){var i=this;i.bounds=n.bounds,i.x=i.bounds.right/2,i.y=70,i.start=n.start,i.message=n.message||"Press [p] to resume!",i.update=function(){Input.restart()&&(i.start&&i.start(),i.assetList.remove(i))},i.draw=function(n){var a=i.x,o=i.y,r=i.bounds;n.beginPath(),n.lineWidth=1,n.strokeStyle="rgba(255, 255, 255, 1)",n.fillStyle="rgba(0, 0, 0, 0.7)",n.fillRect(0,0,r.right,r.bottom),n.stroke(),n.font="36px Arial",n.textAlign="center",drawTextLine(n,"Gunship13k",a,o),drawParagraph(n,t,a,o+50),drawParagraph(n,e,a,o+230),n.textAlign="center",n.font="18px Arial",drawTextLine(n,i.message,a,o+450)}}}(),function(){var e=$("#smokesprite"),t=e.getContext("2d");t.strokeStyle="rgba(150, 150, 150, 1)",t.fillStyle="rgba(150, 150, 150, 1)",drawCircle(t,100,100,100,!0,!0);var n=e,i=function(e){0-(e+Math.PI-0);return-Math.PI-e},a=function(e){var t=.5*Math.PI-(e+Math.PI-.5*Math.PI);return t=2*Math.PI-e,-e};window.Particle=function(e){window.Particle.instances.push(this);var t=this;t.x=e.x,t.y=e.y,t.speedVariation=e.speedVariation||0,t.angleVariation=e.angleVariation||0,t.lifeVariation=e.lifeVariation||200,t.bounds=e.bounds;var o=t.color=e.color||[255,255,255];t._colorString=o[0]+", "+o[1]+", "+o[2],t.particleLength=e.particleLength||10,t.radius=e.radius;var r=Math.random()*t.speedVariation-t.speedVariation/2;t.speed=(e.speed||10)+r;var s=Math.random()*t.lifeVariation-t.lifeVariation/2;t.life=(e.life||300)+s;var l=Math.random()*t.angleVariation-t.angleVariation/2,d=e.angle+l,u=function(e){t.angle=e,t._cos=Math.cos(e),t._sin=-Math.sin(e)};u(d),t._age=0,t.update=function(e,n){t.speed-=.05*n;var o,r,s=t.speed*n,l=t.bounds,d=function(){o=t.x+s*t._cos,r=t.y+s*t._sin};d(),(o<l.left||o>l.right)&&(u(i(t.angle)),d()),(r<l.top||r>l.bottom)&&(u(a(t.angle)),d()),t.x=o,t.y=r,t._age+=e,t._age>t.life&&t.destroy()},t.draw=function(e){var i=t.x,a=t.y,o=1-1/t.life*t._age,r=t.particleLength;if(t.radius){var s=t.radius/2+t.radius/2/t.life*t._age;o=Math.round(.1*o*100)/100,e.save(),e.globalAlpha=o,e.drawImage(n,i-s,a-s,2*s,2*s),e.restore()}else e.lineWidth=1,e.strokeStyle="rgba("+t._colorString+", "+o+")",e.beginPath(),e.moveTo(i+r*t._cos,a+r*t._sin),e.lineTo(i,a),e.stroke()},t.destroy=function(){window.Particle.instances.splice(window.Bullet.instances.indexOf(t),1),t.assetList.remove(t)}},window.Particle.instances=[]}(),function(){window.ScoreBoard=function(e){var t=this;t.bounds=e.bounds,t.scoreModel=e.scoreModel,t.draw=function(e){e.fillStyle="#fff",e.font="18px Arial",e.textAlign="right",e.fillText(t.scoreModel.multiplier()+"x   "+t.scoreModel.score(),t.bounds.right-20,30)}}}(),function(){window.ScoreModel=function(e){var t=this;t._points=0,t._multiplier=1,t._maxMultiplier=20,t._enemyChain=t._threshold=10,t._totalEnemies=0,t._difficultyLevel=0,t._difficultyChain=0,t.increaseDifficulty=e.increaseDifficulty,t._powerupLevel=0,t._powerupChain=0,t.increasePowerup=e.increasePowerup,t._previousHighScore=0,t._killChain=0,t._bulletsFired=0,t._enemiesKilled=0,t._enemiesEscaped=0,t._longestKillChain=0;var n=localStorage.getItem("gunship");n&&(t._previousHighScore=JSON.parse(n).score),t.save=function(){t.score()>t._previousHighScore&&localStorage.setItem("gunship",JSON.stringify({date:(new Date).getTime(),score:t.score()}))},t.multiplier=function(){return t._multiplier},t.score=function(){return t._points},t.highScore=function(){return t._previousHighScore},t.longestKillChain=function(){return t._longestKillChain},t.resetMultiplier=function(){t._multiplier=1,t._enemyChain=t._threshold,t._powerupChain=0,t._killChain=0},t.add=function(e){t._points+=e*t._multiplier,t._longestKillChain=Math.max(t._longestKillChain,++t._killChain),t._multiplier<t._maxMultiplier&&0==--t._enemyChain&&(++t._multiplier,t._enemyChain=t._threshold),++t._totalEnemies,10==++t._difficultyChain&&(t._difficultyChain=0,++t._difficultyLevel,t.increaseDifficulty&&t.increaseDifficulty(t._difficultyLevel)),20==++t._powerupChain&&(t._powerupChain=0,++t._powerupLevel,t.increasePowerup&&t.increasePowerup(t._powerupLevel))}}}(),function(){var e=2*Math.PI,t=e/2,n=e/4,i=e/5,a=3*n,o=n,r=0,s=t;window.Ship=function(t){var n=this;t=t||{},n.x=t.x||0,n.y=t.y||0,n.bounds=t.bounds,n._rotation=0,n._acceleration=.2,n._maxSpeed=5,n._motion=0,n._drag=.05,n._lastFired=0,n._lastBurst=0,n._burst=0,n._bulletX=void 0,n._bulletY=void 0,n.burstLength=3,n.roundDelay=90,n.burstDelay=n.burstLength*n.roundDelay+540,n.cannonAngle=0,n.bulletsFired=0,n.powerup=function(e){extend(n,e),n.burstDelay=n.burstLength*n.roundDelay+540},n.health=3;var l=function(e,t){n.assetList.add(new Particle({x:e,y:t,speed:3,speedVariation:1,angle:5,angleVariation:1.5,bounds:n.bounds,life:1e3,particleLength:7,color:[255,132,0]}))},d=function(e,t){n.assetList.add(new Particle({x:e,y:t,speed:3,speedVariation:1,angle:5,angleVariation:1.5,bounds:n.bounds,life:2e3,radius:60,color:[200,200,200]}))};n._particleTime=0,n.update=function(e,t){if(n.health>0){n.updateRotor(t),n.updateMovement(t),n.updateCannon(t);var i=n._lastFired+e,a=n._lastBurst+e,o=n._burst;if(Input.fire()&&1>o&&a>n.burstDelay&&(o=n.burstLength,a=0),o>0&&i>n.roundDelay&&(n.fire(),--o,i=0),n._lastFired=i,n._lastBurst=a,n._burst=o,n.health<3&&(n._particleTime+=e,n._particleTime>100)){n._particleTime-=100;for(var r=n.health<2?2:1,s=0;r>s;++s)l(n.x,n.y+40),d(n.x,n.y+40)}}},n.updateCannon=function(){var e=Input.mouse(),t={x:e.x-n.x,y:e.y-n.y-10},i=Math.atan2(-t.y,t.x);0>i&&(i+=2*Math.PI),n.cannonAngle=i},n.updateRotor=function(t){var i=n._rotation;i-=e/30*t,-e>i&&(i+=e),n._rotation=i},n.updateMovement=function(e){var t=n._acceleration*e,i=n._drag*e,a=n._maxSpeed,o=n._motion,r=(n.bounds,!1);Input.right()&&(o+=t,r=!0),Input.left()&&(o-=t,r=!0),o=Math.max(-a,Math.min(a,o));r||(o>i?o-=i:-i>o?o+=i:o=0);var s=n.x+o*e,l=n.bounds.left+30,d=n.bounds.right-30;s>d?(o=0,s=d):l>s&&(o=0,s=l),n.x=s,n._motion=o},n.draw=function(e){var t=n.x,i=n.y;e.lineWidth=1,e.strokeStyle="rgba(255, 255, 255, 1)",e.fillStyle="rgba(0, 0, 0, 1)",n.drawCannon(e),e.drawImage(u,t-21,i-1),n.drawRoter(e)},n.drawCannon=function(e){var t=n.x,i=n.y+10,a=n._bulletX=t+20*Math.cos(n.cannonAngle),o=n._bulletY=i+20*-Math.sin(n.cannonAngle);e.beginPath(),e.moveTo(a,o),e.lineTo(t,i),e.stroke()},n.drawRoter=function(e){var t=n.x,l=n.y+40,d=n._rotation,u=a+d,c=o+d,h=r+d,f=s+d;drawArc(e,t,l,23,u,u+i),drawArc(e,t,l,25,c,c+i);var p;switch(n.health){case 1:p=50;break;case 2:p=55;break;default:p=60}drawArc(e,t,l,p,h,h+i),drawArc(e,t,l,60,f,f+i)},n.fire=function(){++n.bulletsFired,n.assetList.add(new Bullet({x:n._bulletX,y:n._bulletY,speed:10,speedVariation:1,angle:n.cannonAngle,angleVariation:.1,bounds:n.bounds}))},n.getRects=function(){return[{top:n.y,right:n.x+10,bottom:n.y+60,left:n.x-10},{top:n.y+30,right:n.x+20,bottom:n.y+47,left:n.x-20},{top:n.y+47,right:n.x+3,bottom:n.y+125,left:n.x-3},{top:n.y+110,right:n.x+15,bottom:n.y+116,left:n.x-15}]},n.hits=function(e){for(var t=n.getRects(),i=0;i<t.length;++i)if(intersectRect(e.getRect(),t[i]))return!0},n.damage=function(e){return n.health-=e,n.explode(100*(3-n.health)),n.health<=0?!0:!1},n.explode=function(e){void 0==e&&(e=100);for(var t=0;e>t;++t)n.assetList.add(new Particle({x:n.x,y:n.y+40,speed:10,speedVariation:8,angle:0,angleVariation:6.28,bounds:n.bounds,life:500}))},n.destroy=function(){n.assetList.remove(n)}};var l=$("#shipsprite"),d=l.getContext("2d");d.lineWidth=1,d.strokeStyle="rgba(255, 255, 255, 1)",d.fillStyle="rgba(0, 0, 0, 1)",drawShape(d,[[0,0],[3,0],[3,4],[5,6],[6,9],[7,14],[7,38],[10,38],[10,30],[14,30],[14,38],[17,38],[17,30],[20,30],[20,47],[12,47],[12,60],[6,64],[6,58],[3,58],[3,64],[3,98],[2,100],[2,110],[15,110],[15,116],[1,116],[1,125],[0,125]],{x:21,y:1},!0,!0,!0),drawCircle(d,21,41,6,!0,!0);var u=l}(),function(){var e,t,n,i=2e3,a=1,o=i,r=0,s=!1,l=!1,d=_enemiesEscaped=0,u=[{health:1},{health:2},{health:3},{health:4},{health:5}],c=[{burstLength:2,roundDelay:90},{burstLength:3,roundDelay:90},{burstLength:5,roundDelay:90},{burstLength:5,roundDelay:60}],h=function(e,t){e.add(new Instructions({message:"Press [Enter] to start!",bounds:{top:0,right:y.width,bottom:y.height,left:0},start:t}))},f=function(i){l=!0,r=0,n=[u[0]],d=_enemiesEscaped=0,a=1,t=new ScoreModel({increaseDifficulty:function(e){u.length>e&&n.push(u[(u.length-1,e)]),a>.6&&(a=Math.max(.6,a-.03))},increasePowerup:function(t){c.length>t&&e.powerup(c[t])}});var o={top:0,right:y.width,bottom:y.height,left:0};i.add(new Background({width:y.width,height:y.height})),i.add(new ScoreBoard({bounds:o,scoreModel:t})),e=i.add(new Ship({x:y.width/2,y:y.height-135,bounds:o})),e.powerup(c[0])},p=function(l){if(s)return void(Input.restart()&&(s=!1,y.run()));if(r+=l,r>o){r=0,o=i*a;var u=extend({x:Math.random()*(y.width-40)+20,y:-20,bounds:{top:-20,right:y.width,bottom:y.height+20,left:0},escaped:function(){t.resetMultiplier(),++_enemiesEscaped}},n[Math.floor(Math.random()*n.length)]);y.assets.add(new Enemy(u))}for(var c=Bullet.instances,h=Enemy.instances,f=h.length-1;f>-1;--f){for(var p=h[f],m=!1,_=c.length-1;_>-1;--_){var b=c[_];if(b.hits(p)&&(b.destroy(),p.damage({damage:1,angle:b.angle,speed:.8*b.speed,x:b.x,y:b.y}))){m=!0,t.add(10),++d;break}}if(!m&&e.hits(p)&&(g(),e.damage(1)))return void w()}},g=function(){for(var e=Enemy.instances,n=e.length-1;n>-1;--n){var i=e[n];i.destroy({explode:!0,x:i.x,y:i.y,speed:5,angle:0,angleVariation:6.28}),t.add(10),++d}a=Math.min(1,Math.max(.6,a+.1))},w=function(){s=!0,e.destroy(),t.save(),y.assets.add(new GameOver({bounds:{top:0,right:y.width,bottom:y.height,left:0},scoreModel:t,bulletsFired:e.bulletsFired,enemiesKilled:d,enemiesescaped:_enemiesEscaped}))},m=function(){};document.addEventListener("keydown",function(e){!s&&l&&80==e.keyCode&&(y.paused?(y.assets.remove(instructions),y.pause(!1)):(instructions=new Instructions({state:"paused",bounds:{top:0,right:y.width,bottom:y.height,left:0}}),y.assets.add(instructions),y.pause(!0)))});var y=window.game=new GameLoop({canvas:$("#canvas"),initialize:h,setupGameAssets:f,update:p,draw:m});y.run()}();