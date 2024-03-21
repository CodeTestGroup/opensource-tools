function m(t,e){e=e||"",console.log("M"+t+" "+e)}function Game(t){this.code=randInt(1e4).toString(),this.players=[],this.mines=[],this.checkpoints=[],this.stage=game_stages.intro,t&&this.updateFromData(t),this.init(),this.log("game initialized"),this.numPlayers=2,this.drainOxygen=1}function randFloat(t,e){return"undefined"==typeof e&&(e=t,t=0),t+random()*(e-t)}function randInt(t,e){return Math.floor(randFloat(t,e))}function clamp(t,e,i){return Math.max(Math.min(t,i),e)}function range(t,e,i){i="undefined"==typeof i?1:i;for(var n=[],r=t;e>r;r+=i)n.push(r);return n}function xy(t,e){return{x:t,y:e}}function absMin(t,e){return Math.abs(t)<Math.abs(e)?t:e}function sign(t){return Math.abs(t)/t}function Mine(t){t=t||{},this.updateFromData(t)}function Player(t){t=t||{},this.updateFromData(t)}function setupSocket(t){var e=t.emit;return t.emit=function(){e.apply(t,arguments)},t.bind=function(e,i){i=ensureFunction(i),t.on(e,function(){i.apply(null,arguments)})},t}function ensureFunction(t){return"function"==typeof t?t:function(){}}function getWireId(t,e){return"wire_"+[t,e].sort().join("_")}function shallowCopy(t){var e={};for(var i in t)e[i]=t[i];return e}function choice(t){return t[Math.floor(Math.random()*t.length)]}Game.prototype.log=function(t){console.log(this.code+" > "+t)};var game_stages={intro:0,gameplay:1,ending:2};Game.prototype={},Game.prototype.init=function(){this.getPlayer=_.propFinder(this.players,"name"),this.getMineById=_.propFinder(this.mines,"id")},Game.prototype.updateFromData=function(data){["Mine","Player"].forEach(function(obj){var prop=obj.toLowerCase()+"s",Obj=eval(obj);data[prop]&&(data[prop]=data[prop].map(function(t){return new Obj(t)}))});for(var property in data)this[property]=data[property];this.init()},Game.prototype.data=function(){var t=function(t){return t.data()};return{code:this.code,stage:this.stage,checkpoints:this.checkpoints,mines:this.mines.map(t),players:this.players.map(t)}},Game.prototype.serialize=function(){return JSON.stringify(this.data())},Game.prototype.eachPlayer=function(t){var e=this;e.players.forEach(function(i){t.call(e,i)})},Game.prototype.getMine=function(t){return this.mines[Math.min(t,this.mines.length-1)]},Game.prototype.eachMine=function(t){var e=this;e.mines.forEach(function(i){t.call(e,i)})},Game.prototype.log=function(t){console.log(this.code+" > "+t)};var cos=Math.cos,sin=Math.sin,sqrt=Math.sqrt,random=Math.random,distance=function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},V={};V.add=function(t,e){return xy(t.x+e.x,t.y+e.y)},V.subtract=function(t,e){return xy(t.x-e.x,t.y-e.y)},V.rth=function(t,e){return xy(t*cos(e),t*sin(e))},V.scale=function(t,e){return xy(t.x*e,t.y*e)},V.round=function(t,e){var i=Math.pow(10,e);return xy(Math.round(t.x*i)/i,Math.round(t.y*i)/i)},Mine.prototype={},Mine.prototype.updateFromData=function(t){this.id=t.id,this.words=t.words.map(function(t){return shallowCopy(t)}),this.coords=t.coords,this.hidden=t.hidden||0,this.area=t.area||"",this.game=t.game,this.level=t.level||0,this.singlePlayerOnly=t.singlePlayerOnly||0,this.wires=t.wires||[],this.wirable=t.wirable||0,this.levelDownDistance=t.levelDownDistance||0,this.powered=t.powered||0,this.words.forEach(function(t){t.glitchLevel=t.glitchLevel||0})},Mine.prototype.data=function(){return{id:this.id,words:this.words,coords:this.coords,hidden:this.hidden,area:this.area,game:this.game.code,level:this.level,singlePlayerOnly:this.singlePlayerOnly,wirable:this.wirable,wires:this.wires,levelDownDistance:this.levelDownDistance,powered:this.powered}},Mine.prototype.getWord=function(t){return"undefined"==typeof t&&(t=this.level),this.words[Math.min(t,this.words.length-1)]},Mine.prototype.canPlayerTrigger=function(t){var e=this.getWord();if(e.requirePower&&!this.powered){var i=!1;if(t.forEachWire(function(t){var e=t.getCloseMine();e&&e.wirable&&e.powered&&(i=!0)}),!i)return}return e.pbatch&&t.hasPBatch(this,e)?!1:!0},Mine.prototype.levelUp=function(t){var e=this.getWord();e.pbatch&&t.addPBatch(this,e),this.level+=1,this.level=Math.min(this.words.length-1,this.level)},Mine.prototype.levelDown=function(){this.level-=1,this.level=Math.max(0,this.level)},Mine.prototype.hasWireTo=function(t){return-1!==this.wires.indexOf(t.id)},Player.prototype={},Player.prototype.updateFromData=function(t){this.name=t.name,this.id=t.name,this.game=this.game||t.game,this.checkpoint=t.checkpoint||xy(0,0),this.glitchLevel=t.glitchLevel||0,this.coords=t.coords||xy(40,40),this.mineState=t.mineState||{},this.oxygen="number"==typeof t.oxygen?t.oxygen:1,this.wires=t.wires||[]},Player.prototype.data=function(){return{name:this.name,id:this.id,game:this.game.code,checkpoint:this.checkpoint,glitchLevel:this.glitchLevel,coords:this.coords,mineState:this.mineState,oxygen:this.oxygen,wires:this.wires}},Player.prototype.getMineState=function(t){return t.id in this.mineState||(this.mineState[t.id]={pbatches:[]}),this.mineState[t.id]},Player.prototype.addPBatch=function(t,e){this.getMineState(t).pbatches.push(e.pbatch)},Player.prototype.hasPBatch=function(t,e){return t.id in this.mineState&&-1!==this.mineState[t.id].pbatches.indexOf(e.pbatch)},Player.prototype.hasWireTo=function(t){return-1!==this.wires.indexOf(t.name)},Player.prototype.forEachWire=function(t){var e=this,i=e.game;"object"!=typeof i&&g&&(i=g.game),e.wires.forEach(function(i){var n=e.game.getPlayer(i);n.hasWireTo(e)&&t(n)})},Player.prototype.getCloseMine=function(t){var e=this.coords,i=null;return this.game.eachMine(function(t){distance(t.coords,e)<Settings.playerWireRadius&&(i=t)}),i};var Settings={};Settings.tickTimeout=1e3,Settings.oxygenDrain=.005,Settings.glitchPerDeath=1,Settings.playerWireRadius=75,Settings.marginR=.4,Settings.marginL=.2,Settings.velocity=6,Settings.wireNear=30,Settings.wireFar=1e3;var _={};"undefined"!=typeof window&&(window._=_),_.propFinder=function(t,e){return function(i){var n=t.filter(function(t){return t[e]===i});return n.length>0?n[0]:null}},_.mapProp=function(t,e){return t.map(function(t){return t[e]})};
