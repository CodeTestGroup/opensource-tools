function Game(e,t,n,r,i){return this.id="game"+Math.random(),this.players_amount=e,this.players=[],this.castles_amount=r,this.width=t,this.height=n,this.duration=i,this.playing=!1,this.finished=!1,waiting_games[this.id]=this,this}function Player(e){return this.socket=e,this.socket.on("create_game",this.create_game.bind(this)),this.socket.on("join_game",this.join_game.bind(this)),this.socket.on("disconnect",this.onExit.bind(this)),this.socket.on("get_open_games",this.get_open_games.bind(this)),this.socket.on("action",this.on_action.bind(this)),this.game_id=null,players.push(this),this}function waiting_games_data(){var e=[];for(var t in waiting_games)waiting_games.hasOwnProperty(t)&&e.push({id:t,players_amount:waiting_games[t].players_amount,missing_players:waiting_games[t].players_amount-waiting_games[t].players.length,width:waiting_games[t].width,height:waiting_games[t].height,bases:waiting_games[t].castles_amount,duration:waiting_games[t].duration/1e3,used_colors:waiting_games[t].players.map(function(e){return e.color})});return e}var io=require("sandbox-io"),generator=require("./level_generation.js"),running_games={},waiting_games={},players=[];Game.prototype.start=function(){this.create_level(),running_games[this.id]=this,delete waiting_games[this.id],this.start_time=Date.now(),this.send_level(),this.duration+=1e3,setTimeout(this.tic.bind(this),1e3)},Game.prototype.tic=function(){if(this.finished)return;this.update_actions(),this.update(),this.send_level(),setTimeout(this.tic.bind(this),16)},Game.prototype.send_level=function(){var e=[];for(var t=0;t<this.level.tanks.length;t++)e.push({y:this.level.tanks[t].y,x:this.level.tanks[t].x,direction:this.level.tanks[t].direction,color:this.level.tanks[t].color});var n={grid:this.level.grid,tanks:e,castles:this.level.castles,bullets:this.level.bullets,dude_size:this.level.dude_size,bullet_size:this.level.bullet_size,remaining_time:(this.duration-(Date.now()-this.start_time))/1e3,bullet_sound:this.level.bullet_sound};io.to(this.id).emit("level",{level:n})},Game.prototype.add_player=function(e){this.players.push(e),this.players.length==this.players_amount&&this.start()},Game.prototype.remove_player=function(e){this.players=this.players.filter(function(t){return t.color!==e.color}),this.players.length===0&&this.end()},Game.prototype.update_actions=function(){for(var e=0;e<this.level.tanks.length;e++)this.level.tanks[e].direction=this.level.tanks[e].player.direction,this.level.tanks[e].moving=this.level.tanks[e].player.moving,this.level.tanks[e].shoot=this.level.tanks[e].player.shoot},Game.prototype.end=function(){for(var e=0;e<this.players.length;e++)this.players[e].exit();this.playing==1?delete running_games[this.id]:delete waiting_games[this.id]},Game.prototype.create_level=function(){var e=[];for(var t=0;t<this.height;t++){e[t]=[];for(var n=0;n<this.width;n++)e[t][n]=0}generator.prim(e,{width:this.width,height:this.height});for(var t=0;t<this.height;t++)for(var n=0;n<this.width;n++)if(t==0||n==0||t==this.height-1||n==this.width-1)e[t][n]=1;var r=[],i=generator.generate_castles(this.players,this.castles_amount,e,this.width,this.height,r),s=generator.generate_tanks(this.players,e,this.width,this.height,r);this.level={grid:e,tanks:s,castles:i,bullets:[],dude_size:.6,bullet_size:.05,step:.02,bullet_step:.05,bullet_sound:!1}},Game.prototype.collision=function(e,t){return closeness=1,Math.abs(e.x-t.x)<closeness*this.level.dude_size&&Math.abs(e.y-t.y)<closeness*this.level.dude_size},Game.prototype.out_of_grid_check=function(e){e.y<0?e.y=0:e.y+this.level.dude_size>=this.height&&(e.y=this.height-this.level.dude_size),e.x<0?e.x=0:e.x+this.level.dude_size>=this.width&&(e.x=this.width-this.level.dude_size)},Game.prototype.hit_wall_check=function(e){var t=1e-5,n=Math.max(e.x+t|0,0),r=Math.min(e.x+this.level.dude_size-t|0,this.width-1),i=Math.max(e.y+t|0,0),s=Math.min(e.y+this.level.dude_size-t|0,this.height-1);e.direction!=0||this.level.grid[i][n]===1&&this.level.grid[i][r]===1?e.direction!=3||this.level.grid[s][n]===1&&this.level.grid[s][r]===1?e.direction!=1||this.level.grid[i][r]===1&&this.level.grid[s][r]===1?e.direction==2&&(this.level.grid[i][n]!==1||this.level.grid[s][n]!==1)&&(e.x=n+1):e.x=n+1-this.level.dude_size:e.y=i+1-this.level.dude_size:e.y=i+1},Game.prototype.hit_tank_check=function(e){for(var t=0;t<this.level.tanks.length;t++){if(e.color==this.level.tanks[t].color)continue;e.direction==0&&this.collision(e,this.level.tanks[t])&&e.y>this.level.tanks[t].y?e.y=this.level.tanks[t].y+this.level.dude_size:e.direction==1&&this.collision(e,this.level.tanks[t])&&e.x<this.level.tanks[t].x?e.x=this.level.tanks[t].x-this.level.dude_size:e.direction==2&&this.collision(e,this.level.tanks[t])&&e.x>this.level.tanks[t].x?e.x=this.level.tanks[t].x+this.level.dude_size:e.direction==3&&this.collision(e,this.level.tanks[t])&&e.y<this.level.tanks[t].y&&(e.y=this.level.tanks[t].y-this.level.dude_size)}},Game.prototype.move_tank=function(e){if(!e.moving)return;e.direction==0?e.y-=this.level.step:e.direction==1?e.x+=this.level.step:e.direction==2?e.x-=this.level.step:e.direction==3&&(e.y+=this.level.step),this.out_of_grid_check(e),this.hit_wall_check(e),this.hit_tank_check(e)},Game.prototype.shoot=function(e){if(!e.shoot||e.reload>0)return;var t,n,r=.05;e.direction==0?(t=e.x+this.level.dude_size/2,n=e.y-r):e.direction==1?(t=e.x+this.level.dude_size+r,n=e.y+this.level.dude_size/2):e.direction==2?(t=e.x-r,n=e.y+this.level.dude_size/2):e.direction==3&&(t=e.x+this.level.dude_size/2,n=e.y+this.level.dude_size+r);var i={color:e.color,direction:e.direction,x:t,y:n};this.level.bullets.push(i),e.shoot=!1,e.reload=30,this.level.bullet_sound=!0},Game.prototype.update_tank=function(e){e.reload=Math.max(0,e.reload-1),this.move_tank(e),this.shoot(e)},Game.prototype.move_bullet=function(e){e.direction==0?e.y-=this.level.bullet_step:e.direction==1?e.x+=this.level.bullet_step:e.direction==2?e.x-=this.level.bullet_step:e.direction==3&&(e.y+=this.level.bullet_step)},Game.prototype.bullet_hits=function(e){if(e.x<0||e.y<0||e.x>this.width||e.y>this.height)return!1;if(this.level.grid[e.y|0][e.x|0]===0)return!1;for(var t=0;t<this.level.tanks.length;t++)if(e.color!==this.level.tanks[t].color&&e.x>this.level.tanks[t].x&&e.x<this.level.tanks[t].x+this.level.dude_size&&e.y>this.level.tanks[t].y&&e.y<this.level.tanks[t].y+this.level.dude_size){for(var n=0;n<this.level.tanks.length;n++)this.level.tanks[n].color==e.color&&(this.level.tanks[n].color=this.level.tanks[t].color,this.level.tanks[n].player.color=this.level.tanks[t].color);return this.level.tanks[t].color=e.color,this.level.tanks[t].player.color=e.color,!1}for(var t=0;t<this.level.castles.length;t++)if(e.x>this.level.castles[t].x&&e.x<this.level.castles[t].x+1&&e.y>this.level.castles[t].y&&e.y<this.level.castles[t].y+1)return this.level.castles[t].color=e.color,!1;return!0},Game.prototype.check_winners=function(){var e={};for(var t=0;t<this.level.tanks.length;t++)e[this.level.tanks[t].color]=0;for(var t=0;t<this.level.castles.length;t++)e[this.level.castles[t].color]+=1;var n=[];for(var t=0;t<this.level.tanks.length;t++)n.push([this.level.tanks[t].color,e[this.level.tanks[t].color]]);n.sort(function(e,t){return t[1]-e[1]}),n[0]=[1,n[0][0],n[0][1]];for(var t=1;t<n.length;t++)n[t][1]==n[t-1][2]?n[t]=[n[t-1][0],n[t][0],n[t][1]]:n[t]=[n[t-1][0]+1,n[t][0],n[t][1]];return n},Game.prototype.update=function(){this.level.bullet_sound=!1;for(var e=0;e<this.level.tanks.length;e++)this.update_tank(this.level.tanks[e]);for(var e=0;e<this.level.bullets.length;e++)this.move_bullet(this.level.bullets[e]);this.level.bullets=this.level.bullets.filter(this.bullet_hits.bind(this)),Date.now()-this.start_time>this.duration&&this.finish()},Game.prototype.finish=function(){io.to(this.id).emit("finish",{positions:this.check_winners()}),this.finished=!0,delete running_games[this.id];for(var e=0;e<this.players.length;e++)this.players[e].game_id=null},Player.prototype.create_game=function(e){this.moving=!1,this.shoot=!1,this.direction=0,this.color=e.color,game=new Game(e.players_amount,e.width,e.height,e.castles_amount,e.duration),this.game_id=game.id,this.socket.join(game.id),game.add_player(this)},Player.prototype.join_game=function(e){this.moving=!1,this.shoot=!1,this.direction=0,this.color=e.color,game=waiting_games[e.game_id],this.game_id=game.id,this.socket.join(game.id),game.add_player(this)},Player.prototype.on_action=function(e){this.direction=e.direction,this.shoot=e.shoot,this.moving=e.moving},Player.prototype.onExit=function(){this.game_id!=null&&(waiting_games.hasOwnProperty(this.game_id)?waiting_games[this.game_id].remove_player(this):running_games.hasOwnProperty(this.game_id)&&running_games[this.game_id].remove_player(this))},Player.prototype.exit=function(e){if(!this.game_id)return;this.socket.disconnect(),this.game_id=null},Player.prototype.get_open_games=function(){this.socket.emit("games",{games:waiting_games_data()})},io.on("connection",function(e){var t=new Player(e);e.emit("games",{games:waiting_games_data()})});