var Egg=function(t,g,o,e,i,h,c){this.ctx=t,this.image=g,this.tileId=o,this.width=e,this.height=i,this.x=h,this.y=c};Egg.prototype=new Sprite,Egg.prototype.constructor=Egg,Egg.prototype.collected=function(){console.log("Collected egg")};