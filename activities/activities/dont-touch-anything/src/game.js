game_canvas=document.getElementById("game"),game_canvas.width=window.window.innerWidth,game_canvas.height=window.window.innerHeight-170;let width_border=game_canvas.width,height_border=game_canvas.height,first_dialog=document.getElementsByClassName("box_content")[0],second_dialog=document.getElementsByClassName("game_btns")[0],model=document.getElementsByClassName("box_model")[0],restart_btn=document.getElementsByClassName("restart_btn")[0],timer=document.getElementsByClassName("timer")[0],score=document.getElementsByClassName("best-score")[0];function show_as_block(e){for(i=0;i<arguments.length;i++)arguments[i].style.display="block"}function hide(e){for(i=0;i<arguments.length;i++)arguments[i].style.display="none"}function new_game(){show_as_block(first_dialog)}function next_dialog(){first_dialog.style.display="none",second_dialog.style.display="block"}function play_again(){show_as_block(restart_btn),show_as_block(model)}function start_game(){hide(first_dialog,second_dialog,restart_btn,model),null===kontra.store.get("score")?score.innerHTML="You Don't Have Best Score Yet!":score.innerHTML="your best score is "+kontra.store.get("score")+" Seconds";let e=0;setInterval(function(){console.log("timer!"),timer.innerHTML=e+" Seconds",e++},1e3),localStorage.setItem("visted",!0),loop.start()}function game_over(){loop.stop(),parseInt(timer.innerHTML)>kontra.store.get("score")&&kontra.store.set("score",parseInt(timer.innerHTML)),location.reload()}addEventListener("DOMContentLoaded",function(){localStorage.getItem("visted")?play_again():new_game()}),kontra.init();let sprite=kontra.sprite({x:game_canvas.width/2,y:game_canvas.height/2,width:game_canvas.width/40,height:game_canvas.width/20,render:function(){this.context.beginPath(),this.context.arc(this.x,this.y,this.width,0,3*Math.PI),this.context.stroke()}}),enemies=[kontra.sprite({x:0,y:0,width:game_canvas.width/6,height:game_canvas.width/6,color:"red",dx:.5,dy:5}),kontra.sprite({x:game_canvas.width,y:0,width:game_canvas.width/6,height:game_canvas.height/12,color:"red",dx:3,dy:.1}),kontra.sprite({x:0,y:game_canvas.height,width:game_canvas.width/7,height:game_canvas.width/7,color:"red",dx:3.1,dy:.8}),kontra.sprite({x:game_canvas.width,y:game_canvas.height,width:game_canvas.width/24,height:game_canvas.width/6,color:"red",dx:3.5,dy:3.8})];var loop=kontra.gameLoop({update:function(){sprite.x=kontra.pointer.x,sprite.y=kontra.pointer.y,sprite.x>width_border-sprite.width&&(sprite.x=width_border-sprite.width,game_over()),sprite.x<sprite.width&&(sprite.x=sprite.width,game_over()),sprite.y>height_border-sprite.width&&(sprite.y=height_border-sprite.width,game_over()),sprite.y<sprite.width&&(sprite.y=sprite.width,game_over()),(game_canvas.width<300||game_canvas.height<300)&&(game_over(),alert("Sorry but you can't play the game at a screen that has less then 300px in width and 300 height , if you think there is something wrong try to refresh the page.")),game_canvas.width=window.window.innerWidth,game_canvas.height=window.window.innerHeight-170,width_border==game_canvas.width&&height_border==game_canvas.height||(width_border=game_canvas.width,height_border=game_canvas.height,sprite.width=game_canvas.width/40,sprite.height=game_canvas.height/20,enemies[0].width=game_canvas.width/6,enemies[0].height=game_canvas.width/6,enemies[1].width=game_canvas.width/6,enemies[1].height=game_canvas.height/12,enemies[2].width=game_canvas.width/7,enemies[2].height=game_canvas.width/7,enemies[3].width=game_canvas.width/24,enemies[3].height=game_canvas.height/6),sprite.update(),enemies.forEach(function(e){e.x>width_border-e.width&&(e.dx=-Math.floor(2*Math.random()+5)),e.x<0&&(e.dx=Math.floor(2*Math.random()+5)),e.y>height_border-e.height&&(e.dy=-Math.floor(2*Math.random()+5)),e.y<0&&(e.dy=Math.floor(2*Math.random()+5)),e.update(),e.collidesWith(sprite)&&(sprite.x=enemies.x,sprite.y=enemies.y,game_over())})},render:function(){sprite.render(),enemies.forEach(function(e){e.render()})}});