"use strict";class Game{constructor(e){game=this,console.log("new game"),objID=0,this.players={},this.input={},this.updates=[],this.team=0,this.screen=vec(),this.field=vec(512,512),this.scale=1,this.cam=new Obj({}),this.buttons=[new Obj({x:innerWidth-100,y:100}),new Obj({x:innerWidth-100,y:200}),new Obj({x:innerWidth-100,y:300})],this.objIDs={},this.objects={},this.op=ObjectPool(Obj),this.bp=BroadPhase({w:100,h:100,size:12}),this.gameOver=!1,this.waveTimer=4e3,server=!e,client=e,2===e&&(local=!0,client=!1,this.addUser({socket:{id:1}},1),this.addUser({socket:{id:0}},0)),this.teams=[{buildings:[]},{buildings:[]}],client||(ROCKS.forEach((e,t)=>{_obj=new Obj({type:7,team:2,x:32*e[0],y:32*e[1],subtype:t}),this.objects[_obj.id]=_obj,_obj=new Obj({type:7,team:2,x:32*(16-e[0]),y:32*(16-e[1]),subtype:t}),this.objects[_obj.id]=_obj}),FORESTS.forEach((e,t)=>{_obj=new Obj({type:8,team:2,x:32*e[0],y:32*e[1],subtype:t}),this.objects[_obj.id]=_obj,_obj=new Obj({type:8,team:2,x:32*(16-e[0]),y:32*(16-e[1]),subtype:t}),this.objects[_obj.id]=_obj}),BASES.forEach(e=>{_obj=new Obj({type:e[0],team:0,x:e[1],y:e[2]}),this.objects[_obj.id]=_obj,this.teams[0].buildings.push(_obj)}),BASES.forEach(e=>{_obj=new Obj({type:e[0],team:1,x:game.field.x-e[1],y:game.field.y-e[2]}),this.objects[_obj.id]=_obj,this.teams[1].buildings.push(_obj)}),simulate(0)),server||this.resize()}endGame(e){if(this.gameOver=5e3,console.log("game over"),server)for(_id in this.players)this.players[_id].user.socket.emit("gameOver",e)}resize(){this.screen.x=innerWidth<innerHeight?innerWidth:innerHeight,this.screen.y=this.screen.x,this.scale=3*innerWidth/512,this.cam.size.x=this.screen.x/this.scale,this.cam.size.y=this.screen.y/this.scale,this.buttons.forEach(e=>{e.size.x=12*this.scale,e.size.y=12*this.scale,e.x=innerWidth-e.size.x})}addObj(e,t){switch(e[0]){case 1:this.objects[e[4]]&&this.objects[e[4]].attack({aTarget:this.objects[e[7]],pos:e[2],objID:t,id:e[4],damage:e[8]});break;case 2:case 3:case 4:this.objects[t]=new Obj({type:e[0],pos:e[2],id:t,life:e[5],team:e[6]});break;case 5:this.objects[t]=game.op.newObject({type:e[0],pos:e[2],id:t,life:e[5],team:e[6],subtype:e[9],aTarget:{}}),this.objects[t].effect=effects[e[9]];break;case 7:case 8:this.objects[t]=new Obj({type:e[0],pos:e[2],id:t,life:e[5],team:e[6],subtype:e[9]})}}removeUser(e){if(delete this.objects[e],delete this.input[e],delete this.players[e],removeAnimations(e),server)for(_id in this.players)this.players[_id].user.socket.emit("removeUser",e)}addUser(e,t){_obj=new Obj({id:e.objID,team:void 0===e.team?t:e.team}),game.objIDs[e.socket.id]=_obj.id,(client&&e.socket.id===socket.id||local)&&(this.team=client?e.team:t,this.player=_obj,this.cam.mTarget=_obj,client&&socket.emit("changeHero",{id:_obj.id,hero:hero})),1===t?_obj.home.copy(this.field).scl(.9):_obj.home.copy(this.field).scl(.1),_obj.pos.copy(_obj.mTarget.copy(_obj.home)),this.objects[_obj.id]=_obj,this.players[_obj.id]={user:e,team:e.team||t,objID:_obj.id},this.input[_obj.id]=[],assignButtonFunctions(_obj.id,local?hero:0),server&&e.socket.emit("gameFound")}usersAdded(){for(let e in this.players)for(let t in this.players)_obj=this.players[t],this.players[e].user.socket.emit("addPlayer",{team:_obj.team,objID:_obj.objID,socket:{id:_obj.user.socket.id}})}updateUsers(){for(_id in _update={id:updateID++},this.objects)_obj=this.objects[_id],_update[_id]=[_obj.type,_obj.mTarget,_obj.pos,_obj.vel,_obj.parent,_obj.life,_obj.team,_obj.aTarget?_obj.aTarget.id:null,_obj.damage,_obj.subtype,_obj.visible];for(_id in this.players)this.players[_id].user.socket.emit("update",JSON.stringify(_update))}releaseWave(){for(_id=0;_id<4;_id++)_obj=this.op.newObject({type:4,team:0,pos:vec(100,115+10*_id),path:0}),this.objects[_obj.id]=_obj,_obj=this.op.newObject({type:4,team:1,pos:vec(397-10*_id,412),path:1}),this.objects[_obj.id]=_obj,_obj=this.op.newObject({type:4,team:0,pos:vec(115+10*_id,100),path:1}),this.objects[_obj.id]=_obj,_obj=this.op.newObject({type:4,team:1,pos:vec(412,397-10*_id),path:0}),this.objects[_obj.id]=_obj}update(e){if(game.gameOver&&(game.gameOver-=e),game.gameOver<0)if(server){for(_id in this.players)removeUser(this.players[_id].user);animations.length=0,game=null,toRender=null}else animations.length=0,game=null,toRender=null,showButtons();else{if(buttonCooldowns.forEach(t=>{for(_id in t)t[_id]-=e,t[_id]<0&&(t[_id]=0)}),processAnimations(e),!client)for(_id in this.waveTimer-=e,this.waveTimer<0&&(this.waveTimer+=1e4,this.releaseWave()),this.input)(_input=this.input[_id])&&(_input.forEach(e=>{e&&(_obj=this.objects[this.players[_id].objID],e[0].button?skills[e[0].button].pressed(_id):e[0].activate?skills[e[0].activate].activate(_id,e[0]):void 0!==e[0].target?_obj.aTarget=this.objects[e[0].target]:(_obj.mTarget.copy(e[0]),_obj.aTarget=null))}),this.input[_id].length=0);for(_id in this.objects){if(_obj=this.objects[_id],(!client||6===_obj.type)&&_obj.life<=0)switch(_obj.type){case 0:_obj.deathTime?Date.now()>_obj.deathTime+1e4&&(_obj.life=_obj.mLife,_obj.deathTime=null):(_obj.deathTime=Date.now(),_obj.pos.copy(_obj.home),_obj.mTarget.copy(_obj.home));break;case 2:delete game.objects[_obj.id],game.gameOver||game.endGame(_obj.team);break;case 3:delete game.objects[_obj.id];break;case 4:case 5:case 6:delete game.objects[_obj.id],_obj.release()}if(_obj.aTime=Math.max(_obj.aTime-e,0),_obj.visible=Math.max(_obj.visible-e,0),!_obj.deathTime){switch(_obj.type){case 0:local&&1===_obj.team&&(_obj.aTarget&&(0===_obj.aTarget.life||_obj.pos.dist(_obj.aTarget.pos)>1.5*_obj.aRange)&&(_obj.aTarget=null),_obj.aTarget||_obj.findNearestEnemy(),!_obj.aTarget&&_obj.path.length&&(_obj.path.length>3?_obj.mTarget.copy(game.teams[_obj.team].buildings[_obj.path[0]].pos):_obj.mTarget.copy(game.teams[_obj.eTeam].buildings[_obj.path[0]].pos),_obj.path.length>1&&_obj.pos.dist(_obj.mTarget)<20&&_obj.path.shift())),_obj.aTarget&&0===_obj.aTarget.life&&(_obj.aTarget=null,_obj.findNearestEnemy()),_obj.aTarget&&(_obj.pos.dist(_obj.aTarget.pos)>_obj.aRange?_obj.mTarget.copy(_obj.aTarget.pos):(_obj.mTarget.copy(_obj.pos),!client&&_obj.aTime<=0&&_obj.attack())),_obj.pos.dist(_obj.mTarget)>1?_obj.vel.copy(_obj.mTarget).sub(_obj.pos).unit().scl(_obj.mSpeed):_obj.vel.clr(),_obj.vel.mag()>.1&&!isAnimated(_obj.id,"bounce")&&registerAnimation([_obj.id,"bounce",easeOut,_obj.size.y/2,125,[_obj.id,"bounce",easeIn,-_obj.size.y/2,125]]);break;case 1:_obj.aTarget&&(_obj.pos.dist(_obj.aTarget.pos)>100&&(delete game.objects[_obj.id],_obj.release()),_obj.pos.dist(_obj.aTarget.pos)>1?(_obj.vel.copy(_obj.aTarget.pos).sub(_obj.pos).unit().scl(_obj.mSpeed),0===_obj.aTarget.life&&(_obj.mTarget.copy(_obj.aTarget.pos),_obj.aTarget=null)):(client||_obj.aTarget.takeDamage(_obj.damage),delete game.objects[_obj.id],_obj.release())),_obj.aTarget||(_obj.pos.dist(_obj.mTarget)>1?_obj.vel.copy(_obj.mTarget).sub(_obj.pos).unit().scl(_obj.mSpeed):(_obj.release(),delete game.objects[_obj.id]));break;case 2:case 3:client||(_obj.aTarget&&(0===_obj.aTarget.life||_obj.pos.dist(_obj.aTarget.pos)>_obj.aRange)&&(_obj.aTarget=null),_obj.aTarget||_obj.findNearestEnemy(),_obj.aTarget&&_obj.aTime<=0&&(_obj.aTime=_obj.aSpeed,_obj.attack()));break;case 4:client||(_obj.aTarget&&(0===_obj.aTarget.life||_obj.pos.dist(_obj.aTarget.pos)>1.5*_obj.aRange)&&(_obj.aTarget=null),_obj.aTarget||_obj.findNearestEnemy(),!_obj.aTarget&&_obj.path.length&&(_obj.path.length>3?_obj.mTarget.copy(game.teams[_obj.team].buildings[_obj.path[0]].pos):_obj.mTarget.copy(game.teams[_obj.eTeam].buildings[_obj.path[0]].pos),_obj.path.length>1&&_obj.pos.dist(_obj.mTarget)<20&&_obj.path.shift()),_obj.vel.mag()>.1&&!isAnimated(_obj.id,"bounce")&&registerAnimation([_obj.id,"bounce",easeOut,_obj.size.y/2,125,[_obj.id,"bounce",easeIn,-_obj.size.y/2,125]])),_obj.aTarget&&(_obj.pos.dist(_obj.aTarget.pos)>_obj.aRange?_obj.mTarget.copy(_obj.aTarget.pos):(_obj.mTarget.copy(_obj.pos),!client&&_obj.aTime<=0&&(_obj.aTime=_obj.aSpeed,_obj.attack()))),_obj.pos.dist(_obj.mTarget)>1?_obj.vel.copy(_obj.mTarget).sub(_obj.pos).unit().scl(_obj.mSpeed):_obj.vel.clr();break;case 5:_obj.aTime<=0&&(_obj.life-=e);break;case 6:_obj.life-=e}_tVec.copy(_obj.vel).scl(simT/1e3),_obj.pos.add(_tVec)}}for(_id in this.bp.grid=[],this.bp.populateGrid(this.objects),this.objects)switch((_obj=this.objects[_id]).type){case 0:case 4:_obj.parent=null,(objList=game.bp.findMatches(_obj,!0,!0)).forEach(e=>{(_id2=rectCollision(_obj,e))&&(8===e.type?pointCollision(_obj.pos,e)&&(0===_obj.visible&&(_obj.parent=e.subtype),client&&_obj.team===game.team&&(_obj.parent=e.subtype)):_obj.pos.add(_id2))});break;case 5:if(!(_obj.aTime<=0))break;server||effects[_obj.subtype].fx(_obj.id),(objList=game.bp.findMatches(_obj)).forEach(e=>{(_id2=circleCollision(_obj,e))&&(client||(_obj.aTarget[e.id]?Date.now()-_obj.aTarget[e.id]>250&&(effects[_obj.subtype].affect(e.id),_obj.aTarget[e.id]=Date.now()):(_obj.aTarget[e.id]=Date.now(),effects[_obj.subtype].affect(e.id))))})}if(client)for(;this.updates.length;){for(_id in(_update=this.updates.shift()).id>lastID?(lastID=_update.id,ooo=!1):ooo=!0,objList=Object.keys(this.objects),_update)(_obj=this.objects[_id])?(objList.splice(objList.indexOf(_id),1),_obj.type,_update[_id][1]&&(_obj.mTarget.copy(_update[_id][1]),_obj.aTarget=this.objects[_update[_id][7]]),ooo||isAnimated(game.player.id,"x")||(_obj.pos.copy(_update[_id][2]),_obj.vel.copy(_update[_id][3]),_obj.life=_update[_id][5],_obj.visible=_update[_id][10])):"id"!==_id&&this.addObj(_update[_id],_id);objList.forEach(e=>{6!==this.objects[e].type&&delete this.objects[e]})}!server&&this.cam.mTarget&&this.cam.mTarget.pos&&this.cam.pos.copy(this.cam.mTarget.pos)}}render(){game&&(ctx=canvas.context,ctx.save(),ctx.scale(this.scale,this.scale),_tVec.copy(this.cam.pos),1===this.team&&(_tVec.x=this.field.x-_tVec.x,_tVec.y=this.field.y-_tVec.y),ctx.translate(-_tVec.x+this.cam.size.x/2,-_tVec.y+this.cam.size.y/2),ctx.fillStyle="sienna",ctx.fillRect(0,0,this.field.x,this.field.y),(toRender=Object.keys(this.objects)).sort((e,t)=>game.objects[e].y+game.objects[e].zIndex-(game.objects[t].y+game.objects[t].zIndex)),toRender.forEach(e=>{switch(_obj=this.objects[e],_tVec.copy(_obj.pos),1===this.team&&(_tVec.x=game.field.x-_tVec.x,_tVec.y=game.field.y-_tVec.y),ctx.save(),ctx.translate(_tVec.x,_tVec.y),_obj.skillPrepped&&(ctx.strokeStyle="lightgreen",ctx.beginPath(),ctx.arc(0,0,skills[_obj.skillPrepped].radius,0,2*Math.PI),ctx.stroke()),_obj.type){case 0:switch(null===_obj.parent||_obj.visible||(ctx.globalAlpha=.5),null===game.player.parent&&_obj.parent!==game.player.parent&&(ctx.globalAlpha=0),_obj.subtype){case 0:ctx.fillStyle="darkred";break;case 1:ctx.fillStyle="yellow";break;case 2:ctx.fillStyle="darkgrey"}break;case 1:ctx.fillStyle="black";break;case 2:ctx.fillStyle="grey";break;case 3:ctx.fillStyle="lightgrey";break;case 4:ctx.fillStyle="pink";break;case 5:_obj.aTime<=0?ctx.strokeStyle="red":ctx.strokeStyle="orange";break;case 6:ctx.fillStyle=particles[_obj.subtype].fillStyle;break;case 7:ctx.fillStyle="darkslategrey";break;case 8:ctx.fillStyle="darkgreen"}switch(5===_obj.type?ctx.strokeRect(-_obj.size.x/2,-_obj.size.y/2-_obj.bounce,_obj.size.x,_obj.size.y):ctx.fillRect(-_obj.size.x/2,-_obj.size.y/2-_obj.bounce,_obj.size.x,_obj.size.y),_obj.type){case 0:case 2:case 3:case 4:ctx.fillStyle="black",ctx.fillRect(-5,-_obj.size.y,10,2),_obj.team===this.team?0===_obj.type?ctx.fillStyle="blue":ctx.fillStyle="green":ctx.fillStyle="red",ctx.fillRect(-5,-_obj.size.y,_obj.life/_obj.mLife*10,2)}_obj.type,ctx.restore()}),ctx.restore(),this.buttons.forEach(e=>{ctx.strokeStyle="black",this.player&&e.parent===this.player.skillPrepped&&(ctx.strokeStyle="green"),ctx.strokeRect(e.pos.x-e.size.x/2,e.pos.y-e.size.y/2,e.size.x,e.size.y),ctx.fillStyle="rgba(0,0,0,0.3)",e.parent&&(ctx.fillRect(e.pos.x-e.size.x/2,e.pos.y-e.size.y/2,e.size.x*(buttonCooldowns[this.player.id][e.parent]/skills[e.parent].cooldown),e.size.y),ctx.font=2*game.scale+"px futura",ctx.fillStyle="black",ctx.fillText(" "+e.parent,e.x-e.size.x/2,e.y))}),game.gameOver&&(ctx.save(),ctx.font="48px futura",ctx.fillStyle="black",ctx.textAlign="center",ctx.fillText(innerWidth/2,innerHeight/2,"GAME OVER"),ctx.restore()))}}class Obj{constructor(e){switch(this.id=client?parseInt(e.id):objID++,this._effect=null,this.team=e.team,this.eTeam=1-e.team,this.subtype=e.subtype||0,this.type=e.type||0,this.home=vec(),this.pos=vec(e.x,e.y),e.pos&&this.pos.copy(e.pos),this.zIndex=e.zIndex||0,this.skillPrepped=null,this.aTarget=e.aTarget||null,this.mTarget=vec().copy(this.pos),this.vel=vec(),this.aRange=OBJECTS[this.type].range,this.aTime=0,this.aSpeed=500,this.visible=!0,this.parent=null,this.size=vec().copy(OBJECTS[this.type].size),this.mSpeed=OBJECTS[this.type].speed,this.mLife=OBJECTS[this.type].life,this.life=this.mLife,this.damage=OBJECTS[this.type].damage,this.bounce=0,this.offset=vec(),this.path=[],this.type){case 0:local&&1===this.team&&(this.path=PATHS[Math.floor(2*Math.random())].slice());break;case 4:client||(this.path=PATHS[e.path].slice());break;case 7:this.size.x*=ROCKS[this.subtype][2],this.size.y*=ROCKS[this.subtype][3];break;case 8:this.size.x*=FORESTS[this.subtype][2],this.size.y*=FORESTS[this.subtype][3],this.zIndex=-1e3}}init(e){switch(this.id=e.id||this.id,this._effect=null,this.team=e.team,this.eTeam=1-e.team,this.subtype=e.subtype||0,this.type=e.type,this.size.copy(OBJECTS[e.type].size),this.aRange=e.range||OBJECTS[e.type].range,this.skillPrepped=null,this.aTarget=e.aTarget||null,this.vel.clr(),this.pos.copy(e.pos),this.zIndex=e.zIndex||0,this.mSpeed=OBJECTS[e.type].speed,this.mLife=OBJECTS[this.type].life,this.life=this.mLife,this.damage=OBJECTS[this.type].damage||e.damage,this.bounce=0,this.offset.clr(),this.visible=!0,this.parent=e.parent||null,this.type){case 4:client||(this.path=PATHS[e.path].slice())}}initParticle(e){switch(this.size.scl(particles[this.subtype].scale),this.life=particles[this.subtype].life,particles[this.subtype].direction){case 0:this.vel.y=-1;break;case 1:this.vel.x=1;break;case 2:this.vel.y=1;break;case 3:this.vel.x=-1;break;case 4:this.vel.copy(game.objects[e].pos).sub(this.pos).unit();break;case 5:this.vel.copy(this.pos).sub(game.objects[e].pos).unit()}particles[this.subtype].direction<4&&client&&1===game.team&&this.vel.scl(-1),this.vel.scl(particles[this.subtype].speed)}set x(e){this.pos.x=e}get x(){return this.pos.x}set y(e){this.pos.y=e}get y(){return this.pos.y}set effect(e){this._effect=e,this.size.scl(e.scale),this.aTime=e.delay,this.life=e.duration}findNearestEnemy(){_obj2.pos.copy(this.pos),_obj2.size.copy(_tVec.copy(ONES).scl(2*this.aRange)),_obj2.id=this.id,_obj2.team=this.team,(objList=game.bp.findMatches(_obj2)).length?(_id2=null,objList.forEach(e=>{if(7!==e.type&&8!==e.type){if(null!==e.parent)return;_id2||(_id2=e.id),game.objects[_id2]&&this.pos.dist(e.pos)<this.pos.dist(game.objects[_id2].pos)&&(_id2=e.id)}}),this.aTarget=game.objects[_id2]):this.aTarget=null}attack(e){switch(e=e||this,this.type){case 0:case 2:case 3:case 4:game.op.newObject({type:1,aTarget:e.aTarget,pos:e.pos,parent:e.id,id:e.objID,damage:this.damage}),this.aTime=this.aSpeed,this.visible=1e3}}takeDamage(e){this.life=Math.max(this.life-e,0)}}let vec=(e,t)=>new Vec(e,t);class Vec{constructor(e=0,t=0){return this.x=e,this.y=t,this.m=0,this}copy(e){return this.x=e.x,this.y=e.y,this}vFrD(e){return this.x=Math.cos(e),this.y=Math.sin(e),this}clr(){return this.x=0,this.y=0,this}add(e){return this.x+=e.x,this.y+=e.y,this}sub(e){return this.x-=e.x,this.y-=e.y,this}scl(e){return this.x*=e,this.y*=e,this}dir(){return Math.atan2(this.y,this.x)}dist(e){return Math.sqrt((e.x-this.x)*(e.x-this.x)+(e.y-this.y)*(e.y-this.y))}mag(){return this.m=Math.sqrt(this.x*this.x+this.y*this.y),this.m}unit(){return 0===this.x&&0===this.y?(this.x=1,this.y=1,this):(this.mag(),this.x/=this.m,this.y/=this.m,this.mag(),this)}}let anm,server,toRender,_obj,_obj3,_input,_id,_id2,_update,colliders,_o,rowResult,areaResult,_top,_bottom,_right,_row,_cells,_cell,matchResults,results,knownIDs,updateID=1,lastID=0,ooo=!1,objID=1,OBJECTS={0:{size:{x:8,y:8},speed:50,life:500,range:40,damage:20},1:{size:{x:2,y:2},speed:100,life:20},2:{size:{x:24,y:24},speed:0,life:1e3,range:60,damage:50},3:{size:{x:16,y:16},speed:0,life:500,range:45,damage:20},4:{size:{x:6,y:6},speed:45,life:100,range:20,damage:5},5:{size:{x:1,y:1}},6:{size:{x:1,y:1}},7:{size:{x:32,y:32},life:1},8:{size:{x:32,y:32},life:1}},BASES=[[2,80,80],[3,130,130],[3,130,280],[3,280,130]],ROCKS=[[1,11,2,10],[3,14,2,4],[7,15,6,2],[6,6.5,1,2],[9,9,2,1],[6.75,8.5,.5,2],[2,5.5,2,1],[5.5,2,1,2]],FORESTS=[[2.5,9,1,6],[6,8.5,1,2],[7,13.5,6,1],[7,6,2,1]],PATHS=[[1,2,3,1,0],[1,3,2,1,0]],HEROES={FireQueen:{skills:["boots","splosion","flamePillars"],speed:50,damage:35,range:35,aSpeed:400,statLine:"A fire elemental that likes to make things explode, and summons pillars of flame."},WindSpirit:{skills:["boots","gale","leafAttack"],speed:60,damage:25,range:50,aSpeed:250,statLine:"A quick little faerie that can slow her enemies with gale winds, and cut them open with razor sharp leaves."},RockMonster:{skills:["boots","rockFall","earthquake"],speed:40,damage:60,range:25,aSpeed:500,statLine:"A lumbering golem that hits like a truck.  He can rain rocks on his enemies and rumble the ground beneath their feet."}},ONES=vec(1,1),objList=[],animations=[],processAnimations=e=>{animations.forEach(t=>{t[7]=Math.min(t[7]+e,t[4]),game.objects[t[0]]&&(game.objects[t[0]][t[1]]=t[2](t[7]/t[4])*t[3]+t[6]),t[7]===t[4]&&(animations.splice(animations.indexOf(t),1),t[5]&&registerAnimation(t[5]))})},registerAnimation=e=>{game.objects[e[0]]&&animations.push([e[0],e[1],e[2],e[3],e[4],e[5],game.objects[e[0]][e[1]],0])},easeIn=e=>e*e*e,easeOut=e=>1-Math.pow(1-e,3),inOut=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,isAnimated=(e,t)=>(anm=!1,animations.forEach(s=>{s[0]===e&&s[1]===t&&(anm=!0)}),anm),removeAnimations=(e,t)=>{animations.forEach(s=>{s[0]===e&&t&&s[1]!==t||animations.splice(animations.indexOf(s),1)})},buttonFunctions=[],buttonCooldowns=[],assignButtonFunctions=(e,t)=>{if(buttonCooldowns[e]={},buttonFunctions[e]=[],HEROES[Object.keys(HEROES)[t]].skills.forEach((t,s)=>{buttonFunctions[e].push(skills[t]),buttonCooldowns[e][t]=0,game&&(game.buttons[s].parent=t)}),game&&game.objects[e]&&(game.objects[e].mSpeed=HEROES[Object.keys(HEROES)[t]].speed,game.objects[e].damage=HEROES[Object.keys(HEROES)[t]].damage,game.objects[e].aRange=HEROES[Object.keys(HEROES)[t]].range,game.objects[e].aSpeed=HEROES[Object.keys(HEROES)[t]].aSpeed),server)for(_id in game.players)game.players[_id].user.socket.emit("changedHero",{id:e,hero:t});else game&&game.objects[e]&&(game.objects[e].subtype=t)},skills={boots:{pressed:e=>{0===buttonCooldowns[e].boots&&skills.boots.activate(e)},activate:e=>{registerAnimation([e,"mSpeed",easeOut,50,2e3,[e,"mSpeed",easeIn,-50,2e3]]),buttonCooldowns[e].boots=skills.boots.cooldown},cooldown:1e4},dash:{pressed:(e,t="dash")=>{server||0===buttonCooldowns[e][t]&&(game.player.skillPrepped===t?game.player.skillPrepped=null:game.player.skillPrepped=t)},activate:(e,t,s="dash")=>{game.objects[e].mTarget.copy(t),_tVec.copy(t).sub(game.objects[e].pos),registerAnimation([e,"x",inOut,_tVec.x,250]),registerAnimation([e,"y",inOut,_tVec.y,250]),buttonCooldowns[e][s]=skills[s].cooldown},cooldown:2e3,radius:50},splosion:{pressed:(e,t="splosion")=>{server||0===buttonCooldowns[e][t]&&(game.player.skillPrepped===t?game.player.skillPrepped=null:game.player.skillPrepped=t)},activate:(e,t,s="splosion")=>{game.objects[e].visible=1e3,client||((_obj3=game.op.newObject({pos:t,type:5,team:game.objects[e].team,aTarget:{},subtype:0})).effect=effects[0],game.objects[_obj3.id]=_obj3),buttonCooldowns[e][s]=skills[s].cooldown},cooldown:6e3,radius:60},gale:{pressed:(e,t="gale")=>{server||0===buttonCooldowns[e][t]&&(game.player.skillPrepped===t?game.player.skillPrepped=null:game.player.skillPrepped=t)},activate:(e,t,s="gale")=>{game.objects[e].visible=1e3,client||((_obj3=game.op.newObject({pos:t,type:5,team:game.objects[e].team,aTarget:{},subtype:1})).effect=effects[1],game.objects[_obj3.id]=_obj3),buttonCooldowns[e][s]=skills[s].cooldown},cooldown:12e3,radius:75},leafAttack:{pressed:(e,t="leafAttack")=>{server||0===buttonCooldowns[e][t]&&(game.player.skillPrepped===t?game.player.skillPrepped=null:game.player.skillPrepped=t)},activate:(e,t,s="leafAttack")=>{game.objects[e].visible=1e3,client||((_obj3=game.op.newObject({pos:t,type:5,team:game.objects[e].team,aTarget:{},subtype:2})).effect=effects[2],game.objects[_obj3.id]=_obj3),buttonCooldowns[e][s]=skills[s].cooldown},cooldown:8e3,radius:65},flamePillars:{pressed:(e,t="flamePillars")=>{server||0===buttonCooldowns[e][t]&&(game.player.skillPrepped===t?game.player.skillPrepped=null:game.player.skillPrepped=t)},activate:(e,t,s="flamePillars")=>{if(game.objects[e].visible=1e3,!client)for(let s=0;s<10;s++)_tVec.copy(t).sub(game.objects[e].pos).unit().scl((s+1)/10).scl(75).add(game.objects[e].pos),(_obj3=game.op.newObject({pos:_tVec,type:5,team:game.objects[e].team,aTarget:{},subtype:3})).effect=effects[3],_obj3.aTime=200+200*s,game.objects[_obj3.id]=_obj3;buttonCooldowns[e][s]=skills[s].cooldown},cooldown:1e4,radius:75},rockFall:{pressed:(e,t="rockFall")=>{server||0===buttonCooldowns[e][t]&&(game.player.skillPrepped===t?game.player.skillPrepped=null:game.player.skillPrepped=t)},activate:(e,t,s="rockFall")=>{game.objects[e].visible=1e3,client||((_obj3=game.op.newObject({pos:t,type:5,team:game.objects[e].team,aTarget:{},subtype:4})).effect=effects[4],game.objects[_obj3.id]=_obj3),buttonCooldowns[e][s]=skills[s].cooldown},cooldown:8e3,radius:75},earthquake:{pressed:(e,t="earthquake")=>{server||0===buttonCooldowns[e][t]&&(game.player.skillPrepped===t?game.player.skillPrepped=null:game.player.skillPrepped=t)},activate:(e,t,s="earthquake")=>{game.objects[e].visible=1e3,client||((_obj3=game.op.newObject({pos:t,type:5,team:game.objects[e].team,aTarget:{},subtype:5})).effect=effects[5],game.objects[_obj3.id]=_obj3),buttonCooldowns[e][s]=skills[s].cooldown},cooldown:12e3,radius:75}},pID=0,effects=[{scale:10,delay:350,duration:350,fx:e=>{game.objects[e]&&(_tVec.x=Math.random()*game.objects[e].size.x+game.objects[e].x-game.objects[e].size.x/2,_tVec.y=Math.random()*game.objects[e].size.y+game.objects[e].y-game.objects[e].size.y/2,_obj3=game.op.newObject({pos:_tVec,type:6,subtype:1,id:client?"p"+pID:null}),pID=(pID+1)%1e4,_obj3.initParticle(e),game.objects[_obj3.id]=_obj3)},affect:e=>{game.objects[e].takeDamage(25)}},{scale:30,delay:600,duration:1e3,fx:e=>{game.objects[e]&&(_tVec.x=game.objects[e].pos.x-game.objects[e].size.x/2,_tVec.y=game.objects[e].pos.y+Math.random()*game.objects[e].size.y-game.objects[e].size.y/2,_obj3=game.op.newObject({pos:_tVec,type:6,subtype:2,id:client?"p"+pID:null}),pID=(pID+1)%1e4,_obj3.initParticle(e),game.objects[_obj3.id]=_obj3)},affect:e=>{registerAnimation([e,"mSpeed",inOut,-25,2e3,[e,"mSpeed",inOut,25,2e3]])}},{scale:50,delay:400,duration:1200,fx:e=>{game.objects[e]&&(_tVec.x=game.objects[e].pos.x-game.objects[e].size.x/2,_tVec.y=game.objects[e].pos.y+Math.random()*game.objects[e].size.y-game.objects[e].size.y/2,_obj3=game.op.newObject({pos:_tVec,type:6,subtype:0,id:client?"p"+pID:null}),pID=(pID+1)%1e4,_obj3.initParticle(e),game.objects[_obj3.id]=_obj3)},affect:e=>{game.objects[e].takeDamage(15)}},{scale:6,delay:500,duration:5e3,fx:e=>{game.objects[e]&&(_tVec.x=Math.random()*game.objects[e].size.x+game.objects[e].x-game.objects[e].size.x/2,_tVec.y=Math.random()*game.objects[e].size.y+game.objects[e].y-game.objects[e].size.y/2,_obj3=game.op.newObject({pos:_tVec,type:6,subtype:3,id:client?"p"+pID:null}),pID=(pID+1)%1e4,_obj3.initParticle(e),game.objects[_obj3.id]=_obj3)},affect:e=>{game.objects[e].takeDamage(10)}},{scale:60,delay:300,duration:5e3,fx:e=>{game.objects[e]&&(_tVec.x=Math.random()*game.objects[e].size.x+game.objects[e].x-game.objects[e].size.x/2,_tVec.y=Math.random()*game.objects[e].size.y+game.objects[e].y-game.objects[e].size.y,_obj3=game.op.newObject({pos:_tVec,type:6,subtype:4,id:client?"p"+pID:null}),pID=(pID+1)%1e4,_obj3.initParticle(e),game.objects[_obj3.id]=_obj3)},affect:e=>{game.objects[e].takeDamage(5)}},{scale:75,delay:500,duration:2e3,fx:e=>{game.objects[e]&&(_tVec.x=Math.random()*game.objects[e].size.x+game.objects[e].x-game.objects[e].size.x/2,_tVec.y=Math.random()*game.objects[e].size.y+game.objects[e].y-game.objects[e].size.y/2,_obj3=game.op.newObject({pos:_tVec,type:6,subtype:5,id:client?"p"+pID:null}),pID=(pID+1)%1e4,_obj3.initParticle(e),game.objects[_obj3.id]=_obj3)},affect:e=>{game.objects[e].takeDamage(10)}}],particles=[{scale:2,life:350,direction:1,speed:150,fillStyle:"lightgreen"},{scale:5,life:100,direction:5,speed:20,fillStyle:"red"},{scale:3,life:450,direction:1,speed:75,fillStyle:"rgba(255,255,255,0.3)"},{scale:3,life:70,direction:0,speed:200,fillStyle:"red"},{scale:4,life:350,direction:2,speed:100,fillStyle:"grey"},{scale:15,life:100,direction:0,speed:10,fillStyle:"saddlebrown"}],paused=!1,timePaused=0,startT=null,lastT=0,deltaT=0,simT=1e3/60,gameTime=0,simulate=e=>{if(null===startT&&(startT=Date.now()),paused)for(deltaT+=e-lastT,lastT=e;deltaT>simT;)deltaT-=simT,timePaused+=simT;else{for(deltaT+=e-lastT,lastT=e,begin(e);deltaT>simT;)deltaT-=simT,gameTime+=simT,update(simT);server||render()}server?game&&setTimeout(()=>{simulate(Date.now()-startT+simT)},simT):requestAnimationFrame(simulate)},receiveInput=e=>{game&&game.input[local?game.player.id:e[0]]&&game.input[local?game.player.id:e[0]].push(e[1])},receiveUpdate=e=>{game&&game.updates.push(JSON.parse(e))},updatePeriod=50,updateTime=0,begin=e=>{game&&(server?game&&e>updateTime+updatePeriod&&(game.updateUsers(),updateTime=e):game&&touches.length&&(_input=[game.player.id,touches.slice()],_id=0,_input[1].forEach(e=>{if(null!==heroPicked&&e.x===heroPicked.x&&e.y===heroPicked.y)return _input.splice(_input.indexOf(e)),void(heroPicked=null);if(game.buttons.forEach((t,s)=>{pointCollision(e,t)&&(_id=1,client&&buttonFunctions[game.player.id][s].pressed(game.player.id),e.button=game.buttons[s].parent)}),!_id){if(_tVec.copy(game.cam.pos),1===game.team&&_tVec.scl(-1).add(game.field),e.x=e.x/game.scale+_tVec.x-game.cam.size.x/2,e.y=e.y/game.scale+_tVec.y-game.cam.size.y/2,1===game.team&&(e.x=game.field.x-e.x,e.y=game.field.y-e.y),game.player.skillPrepped&&game.player.pos.dist(e)<skills[game.player.skillPrepped].radius)return e.activate=game.player.skillPrepped,client&&skills[game.player.skillPrepped].activate(game.player.id,e),void(game.player.skillPrepped=null);(colliders=game.bp.findMatches({pos:e,team:game.team,life:1,id:-1})).forEach(t=>{t.team!==game.team&&7!==t.type&&8!==t.type&&pointCollision(e,t)&&(null!==t.parent?t.parent===game.player.parent&&(e.target=t.id):e.target=t.id)})}}),client&&socket.emit("input",JSON.stringify(_input)),local&&receiveInput(_input),touches.length=0))},update=e=>{game&&(game.gameOver&&game.gameOver<=0?(timePaused=0,gameTime=0):game.update(e))},render=()=>{canvas.context.fillStyle="cornflowerblue",canvas.context.fillRect(0,0,canvas.width,canvas.height),game&&game.render()},end=()=>{},game=null,local=!1,client=!0,_tVec=vec(),_obj2=new Obj({}),pointCollision=(e,t)=>{if(e.x>t.pos.x-t.size.x/2&&e.x<t.pos.x-t.size.x/2+t.size.x&&e.y>t.pos.y-t.size.y/2&&e.y<t.pos.y-t.size.y/2+t.size.y)return!0},circleCollision=(e,t)=>(_tVec.copy(t.pos).sub(e.pos).mag(),_tVec.m-=e.size.x/2+t.size.x/2,_tVec.m<0&&(_id2=_tVec.m,_tVec.unit().scl(_id2),_tVec)),rectCollision=(e,t)=>(_tVec.copy(t.pos).sub(e.pos),_tVec.x=Math.abs(_tVec.x)-(e.size.x/2+t.size.x/2),_tVec.y=Math.abs(_tVec.y)-(e.size.y/2+t.size.y/2),_tVec.x<0&&_tVec.y<0&&(_tVec.x>_tVec.y?(e.x>t.x&&_tVec.scl(-1),_tVec.y=0):(e.y>t.y&&_tVec.scl(-1),_tVec.x=0),_tVec)),ObjectPool=e=>{let t={active:[],inactive:[],newObject:function(s){let i;return t.inactive.length<1?((i=new e({})).init(s),i.release=(()=>{t.active.splice(t.active.indexOf(i),1),t.inactive.push(i)})):(i=t.inactive.shift()).init(s),t.active.push(i),game.objects[i.id]=i,i}};return t},BroadPhase=e=>{let t={grid:[]};return t.size=e.size,t.findCell=function(e){if(e)return vec(Math.floor(e.x/t.size),Math.floor(e.y/t.size))},t.findCellsRow=function(e,t){rowResult=[];for(let s=0,i=t.x-e.x+1;s<i;s++)rowResult.push(vec(e.x+s,e.y));return rowResult},t.findCellsArea=function(e){areaResult=[],e.size||(e.size=vec(1,1)),_top=t.findCell({x:e.pos.x-e.size.x/2,y:e.pos.y-e.size.y/2}),_right=t.findCell({x:e.pos.x+e.size.x/2,y:e.pos.y});for(let s=0,i=(_bottom=t.findCell({x:e.pos.x,y:e.pos.y+e.size.y/2})).y-_top.y+1;s<i;s++)_row=t.findCellsRow(vec(_top.x,_top.y+s),vec(_right.x,_top.y+s)),areaResult=areaResult.concat(_row);return areaResult},t.addToGrid=function(e){for(let s=0,i=(_cells=t.findCellsArea(e)).length;s<i;s++)_cell=_cells[s],t.grid[_cell.y]||(t.grid[_cell.y]=[]),t.grid[_cell.y][_cell.x]||(t.grid[_cell.y][_cell.x]=[]),t.grid[_cell.y][_cell.x].push(e)},t.populateGrid=function(e){for(_obj in e)t.addToGrid(e[_obj])},t.findMatches=function(e,s,i){return matchResults=[],knownIDs=[],results=[],(_cells=t.findCellsArea(e)).forEach(e=>{void 0!==t.grid[e.y]&&void 0!==t.grid[e.y][e.x]&&(matchResults=matchResults.concat(t.grid[e.y][e.x]))}),matchResults.forEach((t,i)=>{t.id!==e.id&&1!==t.type&&5!==t.type&&6!==t.type&&-1===results.indexOf(t)&&t.life>0&&5!==t.type&&(s?results.push(t):void 0!==t.team&&t.team!==e.team&&results.push(t))}),results},t};