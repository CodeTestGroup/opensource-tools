let generateMap=function(a){let b=a.size,c=JSON.parse(JSON.stringify(a.pieces)),d=[];for(let l=0;l<b;l++){d[l]=[];for(let m=0;m<b;m++)if(0!=l&&l!=b-1||0!=m&&m!=b-1){let n=Math.floor(Math.random()*c.length);for(;0==c[n].count;)c.splice(n,1),n=Math.floor(Math.random()*c.length);c[n].count--,d[l][m]={type:c[n].type,rotation:Math.floor(4*Math.random()),treasure:-1}}}let e=[];d[0][0]={type:SPAWN,rotation:0,treasure:-1,players:[0]},d[b-1][0]={type:SPAWN,rotation:1,treasure:-1,players:[1]},e.push({x:0,y:0}),e.push({x:b-1,y:0}),3<=a.playerCount?(d[b-1][b-1]={type:SPAWN,rotation:2,treasure:-1,players:[2]},e.push({x:b-1,y:b-1}),4===a.playerCount?(d[0][b-1]={type:SPAWN,rotation:3,treasure:-1,players:[3]},e.push({x:0,y:b-1})):d[0][b-1]={type:CORNER,rotation:3,treasure:-1}):(d[b-1][b-1]={type:CORNER,rotation:2,treasure:-1},d[0][b-1]={type:CORNER,rotation:3,treasure:-1});let f=4*a.goalsCount,g=[];for(;0<f;){let l=Math.floor(Math.random()*b),m=Math.floor(Math.random()*b);d[l][m].type!=SPAWN&&0>d[l][m].treasure&&(f--,d[l][m].treasure=f,g.push(f))}let h=[];for(let l=0;l<a.playerCount;l++){h[l]=[];for(let n,m=0;m<a.goalsCount;m++)n=Math.floor(Math.random()*g.length),h[l].push({id:g[n],found:!1}),g.splice(n,1)}let k={type:c[0].type,rotation:0,treasure:-1};return{map:d,movingPiece:k,playerPos:e,playerGoals:h}};function User(a){this.name='Guest'+a.id.substr(0,4),this.socket=a,this.game=null}let activeGames=[],pendingGames=[];function Game(a,b){this.rules=a,this.players=[b],this.map=null}Game.prototype.emit=function(a,b){for(let c=0;c<this.players.length;c++)this.players[c].socket.emit(a,b)},Game.prototype.start=function(){pendingGames.splice(pendingGames.indexOf(this),1),activeGames.push(this);let a=generateMap(this.rules);this.map=a.map,this.movingPiece=a.movingPiece,this.playerPos=a.playerPos,this.playerGoals=a.playerGoals,this.pieceMoved=!1,this.currentPlayer=-1,this.lastMove=null,this.emit('gameStart',{map:this.map,movingPiece:this.movingPiece,playerPos:this.playerPos});for(let b=0;b<this.players.length;b++)this.players[b].socket.emit('goalsUpdate',this.playerGoals[b]);this.newTurn()},Game.prototype.newTurn=function(){this.currentPlayer++,this.currentPlayer>=this.rules.playerCount&&(this.currentPlayer=0),this.pieceMoved=!1,this.emit('newTurn',this.currentPlayer)},Game.prototype.movePiece=function(a,b){if(!(this.players[this.currentPlayer]!==a||this.pieceMoved||0==b.index%2)){if(null!==this.lastMove&&b.side%2==this.lastMove.side%2&&b.side!==this.lastMove.side&&b.index===this.lastMove.index)return void a.socket.emit('alert','You can\'t reverse the last player\'s move!');this.lastMove=b;let c={};switch(b.side){case TOP:c=this.map[b.index][this.rules.size-1];for(let d=this.rules.size-1;0<d;d--)this.map[b.index][d]=this.map[b.index][d-1];this.map[b.index][0]=this.movingPiece,this.movingPiece=c;for(let d=0;d<this.players.length;d++)this.playerPos[d].x===b.index&&(this.playerPos[d].y++,this.playerPos[d].y>=this.rules.size&&(this.playerPos[d].y=0));break;case LEFT:c=this.map[this.rules.size-1][b.index];for(let d=this.rules.size-1;0<d;d--)this.map[d][b.index]=this.map[d-1][b.index];this.map[0][b.index]=this.movingPiece,this.movingPiece=c;for(let d=0;d<this.players.length;d++)this.playerPos[d].y===b.index&&(this.playerPos[d].x++,this.playerPos[d].x>=this.rules.size&&(this.playerPos[d].x=0));break;case BOTTOM:c=this.map[b.index][0];for(let d=0;d<this.rules.size-1;d++)this.map[b.index][d]=this.map[b.index][d+1];this.map[b.index][this.rules.size-1]=this.movingPiece,this.movingPiece=c;for(let d=0;d<this.players.length;d++)this.playerPos[d].x===b.index&&(this.playerPos[d].y--,0>this.playerPos[d].y&&(this.playerPos[d].y=this.rules.size-1));break;case RIGHT:c=this.map[0][b.index];for(let d=0;d<this.rules.size-1;d++)this.map[d][b.index]=this.map[d+1][b.index];this.map[this.rules.size-1][b.index]=this.movingPiece,this.movingPiece=c;for(let d=0;d<this.players.length;d++)this.playerPos[d].y===b.index&&(this.playerPos[d].x--,0>this.playerPos[d].x&&(this.playerPos[d].x=this.rules.size-1));}this.emit('mapUpdate',{map:this.map,movingPiece:this.movingPiece}),this.emit('playerPosUpdate',this.playerPos),this.pieceMoved=!0}};function hasTopGap(a){switch(a.type){case SPAWN:case CORNER:return 2<=a.rotation;case STRAIGHT:return 0==a.rotation%2;case TRIPLE:return 2!==a.rotation;}}function hasBottomGap(a){switch(a.type){case SPAWN:case CORNER:return 2>a.rotation;case STRAIGHT:return 0==a.rotation%2;case TRIPLE:return 0!==a.rotation;}}function hasLeftGap(a){switch(a.type){case SPAWN:case CORNER:return 0!=a.rotation%3;case STRAIGHT:return 1==a.rotation%2;case TRIPLE:return 1!==a.rotation;}}function hasRightGap(a){switch(a.type){case SPAWN:case CORNER:return 0==a.rotation%3;case STRAIGHT:return 1==a.rotation%2;case TRIPLE:return 3!==a.rotation;}}Game.prototype.canMove=function(a,b){return 0>a.x||a.x>=this.rules.size||0>a.y||a.y>=this.rules.size||0>b.x||b.x>=this.rules.size||0>b.y||b.y>=this.rules.size?!1:a.y<b.y?hasBottomGap(this.map[a.x][a.y])&&hasTopGap(this.map[b.x][b.y]):a.y>b.y?hasTopGap(this.map[a.x][a.y])&&hasBottomGap(this.map[b.x][b.y]):a.x<b.x?hasRightGap(this.map[a.x][a.y])&&hasLeftGap(this.map[b.x][b.y]):a.x>b.x?hasLeftGap(this.map[a.x][a.y])&&hasRightGap(this.map[b.x][b.y]):void 0},Game.prototype.canMovePath=function(a,b,c){return a.x===b.x&&a.y===b.y||!(-1<c.indexOf(a.x+':'+a.y))&&(c.push(a.x+':'+a.y),this.canMove(a,{x:a.x-1,y:a.y})&&this.canMovePath({x:a.x-1,y:a.y},b,c)||this.canMove(a,{x:a.x+1,y:a.y})&&this.canMovePath({x:a.x+1,y:a.y},b,c)||this.canMove(a,{x:a.x,y:a.y-1})&&this.canMovePath({x:a.x,y:a.y-1},b,c)||this.canMove(a,{x:a.x,y:a.y+1})&&this.canMovePath({x:a.x,y:a.y+1},b,c))},Game.prototype.movePlayer=function(a,b){if(this.players[this.currentPlayer]===a&&this.pieceMoved){let c=this.players.indexOf(a);if(this.canMovePath(this.playerPos[c],b,[])){this.playerPos[c]=b;let d=this.playerGoals[c].findIndex(e=>e.id===this.map[b.x][b.y].treasure);if(-1<d&&(this.playerGoals[c][d].found=!0,a.socket.emit('goalsUpdate',this.playerGoals[c]),this.map[b.x][b.y].treasure=-1,this.emit('mapUpdate',{map:this.map,movingPiece:this.movingPiece})),this.map[b.x][b.y].type===SPAWN&&this.map[b.x][b.y].rotation===c&&0===this.playerGoals[c].filter(e=>!1===e.found).length){this.emit('playerPosUpdate',this.playerPos);for(let e=0;e<this.players.length;e++)e===c?this.players[e].socket.emit('playerWon',c):this.players[e].socket.emit('playerLoose',c),this.players[e].game=null;activeGames.splice(activeGames.indexOf(this),1)}else this.emit('playerPosUpdate',this.playerPos),this.newTurn()}else a.socket.emit('alert','There is no path to this destination!')}},Game.prototype.rotateMovingPiece=function(a){this.players[this.currentPlayer]!==a||this.pieceMoved||(this.movingPiece.rotation++,3<this.movingPiece.rotation&&(this.movingPiece.rotation=0),this.emit('movingPieceUpdate',this.movingPiece))},Game.prototype.handleLeave=function(a){if(null!==this.map){for(let b=0;b<this.players.length;b++)this.players[b].socket.emit('returnHome'),this.players[b].game=null;activeGames.splice(activeGames.indexOf(this),1)}else if(a.socket.emit('returnHome'),a.game=null,1===this.players.length)pendingGames.splice(pendingGames.indexOf(this),1);else{let b=this.players.indexOf(a);this.players.splice(b,1),this.emit('playerLeave',b)}};function findGame(a,b){let c=null;for(let d=0;d<pendingGames.length;d++)if(!b.wantsDefaultRules){c=pendingGames[d];break}else if(rulesAreEquals(pendingGames[d].rules,defaultRules)){c=pendingGames[d];break}if(null===c)a.socket.emit('alert','No game is available matching your criteria. Try creating one instead!');else{a.game=c,c.players.push(a),a.socket.emit('gameFound',c.rules);for(let d=0;d<c.players.length-1;d++)c.players[d].socket.emit('playerJoin',a.name),a.socket.emit('playerJoin',c.players[d].name);a.socket.emit('playerJoin',a.name),c.players.length==c.rules.playerCount&&c.start()}}module.exports=function(a){let b=new User(a);a.on('disconnect',function(){null!==b.game&&b.game.handleLeave(b)}),a.emit('username',b.name),a.on('username',function(c){b.name=c.trim().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;'),a.emit('username',b.name)}),a.on('createLobby',function(c){if(null===b.game){let d=rulesAreValid(c);return!0===d?void(b.game=new Game(c,b),pendingGames.push(b.game),a.emit('gameFound',c),a.emit('playerJoin',b.name)):void a.emit('alert','Invalid '+d+'!')}}),a.on('joinLobby',function(c){null!==b.game||findGame(b,c)}),a.on('leaveLobby',function(){null===b.game||b.game.handleLeave(b)}),a.on('movePiece',function(c){null===b.game||b.game.movePiece(b,c)}),a.on('movePlayer',function(c){null===b.game||b.game.movePlayer(b,c)}),a.on('rotateMovingPiece',function(){null===b.game||b.game.rotateMovingPiece(b)}),console.log('Connected: '+a.id)};