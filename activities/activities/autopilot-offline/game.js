function draw(e,a){var s=[];e=e.toUpperCase();for(var t=0;t<e.length;t++){var i=letters[e.charAt(t)];i&&s.push(i)}ctx.fillStyle="white";var n=0;for(t=0;t<s.length;t++){i=s[t];for(var c=0,p=0,A=0;A<i.length;A++){for(var o=i[A],r=0;r<o.length;r++)o[r]&&ctx.fillRect(n+r*a,c,a,a);p=Math.max(p,o.length*a),c+=a}n+=a+p}}function degreesToRadians(e){return e*Math.PI/180}function random(e,a){return Math.round(Math.random()*a-e+e)}function startSoundtrack(){when=ac.currentTime,sequence1.play(when),sequence2.play(when+60/tempo*16),sequence3.play(when)}function keepDistance(){var e=spaceship.position.x-spacestation.position.x,a=spaceship.position.y-spacestation.position.y;Math.sqrt(e*e+a*a)<50&&(spacestation.position.x=random(40,200),spacestation.position.y=random(40,200),keepDistance())}function updateSpaceship(){spaceship.eva=spaceship.eva-.07,spaceship.position.x<0?spaceship.position.x=w:spaceship.position.x>w&&(spaceship.position.x=0),spaceship.position.y<0?spaceship.position.y=h:spaceship.position.y>h&&(spaceship.position.y=0),spaceship.position.x+=spaceship.velocity.x,spaceship.position.y+=spaceship.velocity.y;const e=Math.cos(degreesToRadians(spaceship.angle)),a=Math.sin(degreesToRadians(spaceship.angle));spaceship.fuel>=0&&(spaceship.rotatingRight?(spaceship.angle>=360&&(spaceship.angle=0),spaceship.angle+=4,spaceship.fuel=spaceship.fuel-.1):spaceship.rotatingLeft&&(spaceship.angle<=-360&&(spaceship.angle=0),spaceship.angle-=4,spaceship.fuel=spaceship.fuel-.1)),spaceship.engineOn&&spaceship.fuel>=0&&(spaceship.velocity.x*spaceship.velocity.x+spaceship.velocity.y*spaceship.velocity.y<400&&(spaceship.velocity.x+=.05*e,spaceship.velocity.y+=.05*a),spaceship.fuel=spaceship.fuel-.3)}function drawSpaceship(){ctx.clearRect(0,0,w,h),ctx.save(),ctx.beginPath(),ctx.translate(spaceship.position.x,spaceship.position.y),spaceship.angle>=0&&spaceship.angle<=44?ctx.drawImage(spaceshipSprite,0,0):spaceship.angle>=45&&spaceship.angle<=89?ctx.drawImage(spaceshipSprite45,0,0):spaceship.angle>=90&&spaceship.angle<=134?ctx.drawImage(spaceshipSprite90,0,0):spaceship.angle>=135&&spaceship.angle<=179?ctx.drawImage(spaceshipSprite135,0,0):spaceship.angle>=180&&spaceship.angle<=224?ctx.drawImage(spaceshipSprite180,0,0):spaceship.angle>=225&&spaceship.angle<=269?ctx.drawImage(spaceshipSprite225,0,0):spaceship.angle>=270&&spaceship.angle<=314?ctx.drawImage(spaceshipSprite270,0,0):spaceship.angle>=315&&spaceship.angle<=360?ctx.drawImage(spaceshipSprite315,0,0):spaceship.angle<=0&&spaceship.angle>=-44?ctx.drawImage(spaceshipSprite,0,0):spaceship.angle<=-45&&spaceship.angle>=-89?ctx.drawImage(spaceshipSprite315,0,0):spaceship.angle<=-90&&spaceship.angle>=-134?ctx.drawImage(spaceshipSprite270,0,0):spaceship.angle<=-135&&spaceship.angle>=-179?ctx.drawImage(spaceshipSprite225,0,0):spaceship.angle<=-180&&spaceship.angle>=-224?ctx.drawImage(spaceshipSprite180,0,0):spaceship.angle<=-225&&spaceship.angle>=-269?ctx.drawImage(spaceshipSprite135,0,0):spaceship.angle<=-270&&spaceship.angle>=-314?ctx.drawImage(spaceshipSprite90,0,0):spaceship.angle<=-315&&spaceship.angle>=-360&&ctx.drawImage(spaceshipSprite45,0,0),ctx.closePath(),ctx.restore()}function drawFuel(){ctx.save(),ctx.translate(220,5),draw("Fuel!",1),ctx.restore(),ctx.beginPath(),ctx.rect(w-spaceship.fuel,12,spaceship.fuel,5),ctx.fillStyle="#3b6d0c",ctx.fill(),ctx.closePath(),ctx.save(),ctx.translate(220,20),draw("Air",1),ctx.restore(),ctx.beginPath(),ctx.rect(w-spaceship.eva,27,spaceship.eva,5),ctx.fillStyle="#1F538A",ctx.fill(),ctx.closePath()}function star_field(e,a){var s,t,i,n;e.fillStyle="#000",e.save();for(var c=0;c<a;c++)s=Math.random()*w,t=Math.random()*h,n=1.5*Math.random(),i=random(80,100)/100,e.beginPath(),e.globalAlpha=i,e.fillStyle=starColours[random(0,starColours.length)],e.arc(s,t,n,0,2*Math.PI,!0),e.fill(),e.closePath();e.restore()}function drawSpaceStation(e){r1=32,ctx.save(),ctx.beginPath(),ctx.save(),ctx.translate(spacestation.position.x,spacestation.position.y),ctx.rotate(i/50),ctx.drawImage(spacestationSprite,-32,-32),ctx.closePath(),ctx.restore(),ctx.beginPath(),ctx.moveTo(spacestation.position.x,spacestation.position.y),ctx.lineTo(spacestation.position.x+Math.sin(e-.2-Math.PI)*r1,spacestation.position.y+Math.cos(e-.2-Math.PI)*r1),spacestation.gate1.x=spacestation.position.x+Math.sin(e-.2-Math.PI)*r1,spacestation.gate1.y=spacestation.position.y+Math.cos(e-.2-Math.PI)*r1,ctx.lineTo(spacestation.position.x+Math.sin(e-1.2+Math.PI)*r1,spacestation.position.y+Math.cos(e-1.2+Math.PI)*r1),spacestation.gate2.x=spacestation.position.x+Math.sin(e-1.2+Math.PI)*r1,spacestation.gate2.y=spacestation.position.y+Math.cos(e-1.2+Math.PI)*r1,ctx.lineTo(spacestation.position.x,spacestation.position.y),ctx.closePath(),ctx.restore()}function initGameBg(){star_field(ctx3,200)}function triangle_area(e,a,s,t,i,n){return Math.abs((e*(t-n)+s*(n-a)+i*(a-t))/2)}function isInside(e,a,s,t,i,n,c,p){return triangle_area(e,a,s,t,i,n)==triangle_area(c,p,s,t,i,n)+triangle_area(e,a,c,p,i,n)+triangle_area(e,a,s,t,c,p)}function collision_detection(){isInside(spacestation.position.x,spacestation.position.y,spacestation.gate1.x,spacestation.gate1.y,spacestation.gate2.x,spacestation.gate2.y,spaceship.position.x,spaceship.position.y)&&(stopAnim=!0,winScreen())}function loadScreen(){initGameBg(),ctx.save(),ctx.translate(20,100),draw("Autopilot offline",3),ctx.restore(),ctx.save(),ctx.translate(30,130),draw("your ships autopilot has malfunctioned you have",1),ctx.restore(),ctx.save(),ctx.translate(45,140),draw("to land before your fuel and eva runs out",1),ctx.restore(),ctx.save(),ctx.translate(55,170),draw("Use up to thrust and left and right",1),ctx.restore(),ctx.save(),ctx.translate(62,180),draw("to rotate to control your angle",1),ctx.restore(),ctx.save(),ctx.translate(60,200),draw("Press up to start!!",2),ctx.restore(),startSoundtrack()}function gameoverScreen(){onGameoverScreen=!0,ctx.clearRect(0,0,w,h),ctx.save(),ctx.translate(95,100),draw("Oh no..",3),ctx.restore(),ctx.save(),ctx.translate(70,130),draw(" you ran out of fuel or air",1),ctx.restore(),ctx.save(),ctx.translate(85,180),draw("press up to try again",1),ctx.restore()}function winScreen(){onWinScreen=!0,ctx.clearRect(0,0,w,h),initGameBg(),ctx.save(),ctx.translate(30,100),draw("Congratulations",3),ctx.restore(),ctx.save(),ctx.translate(50,130),draw("congratulations you landed your ship",1),ctx.restore(),ctx.save(),ctx.translate(80,140),draw(" enjoy some space beer!",1),ctx.restore(),ctx.save(),ctx.translate(80,180),draw("press up to start again",1),ctx.restore()}function startGame(){ctx.restore(),window.requestAnimationFrame(redraw),initGameBg()}function keyPressed(e){switch(e.keyCode){case 37:spaceship.rotatingLeft=!0;break;case 39:spaceship.rotatingRight=!0;break;case 38:1==onLoadScreen?(startGame(),onLoadScreen=!1):1==onWinScreen?location.reload():1==onGameoverScreen&&location.reload(),spaceship.engineOn=!0}}function keyLetGo(e){switch(e.keyCode){case 37:spaceship.rotatingLeft=!1;break;case 39:spaceship.rotatingRight=!1;break;case 38:spaceship.engineOn=!1}}var canvas=document.getElementById("offline"),game_background=document.getElementById("gamebackground"),ctx=canvas.getContext("2d"),ctx3=game_background.getContext("2d"),spaceshipSprite=new Image;spaceshipSprite.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVQ4T2NkoBAwUqifAW7Ajh07/sMM8/DwINpgsEKYZgUFBYYHDx6AzSHWEEZsmnF5C5uhYAOQbYZpXrBgAUNCQgJWs5ANgrsAWSOIja7Z48cHhh0cAigGggxCMQBkK7JmkMtgQOPGBTDzhoYBmIaFFXUNAJmM7gp41OLzAlUCEZsh6FGANRopTkgwWyhKypRkKKIzDS5LAMVPZF9LV4F+AAAAAElFTkSuQmCC";var spaceshipSprite90=new Image;spaceshipSprite90.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVQ4T9WTvRHAIAiFY5cyIziOYziaYziOI6RMlxzePe+Bf3WshPA+EIg7zMk5v9bHdgjBsa0MiL33RylFcdjHkAZYiUEaQRTAZk4pVW2MsVWDGFTRVYBIiGEzRHwdQJzcQAFAxHcWy101ERArED98yynYKuS9cngiPwKE51aLlM+r2tsncB8AmYmHU2CAbaLNPgUAwoCReAtY/YX41i0Si7CZs+wS+wFDwXkR1F6BpQAAAABJRU5ErkJggg==";var spaceshipSprite180=new Image;spaceshipSprite180.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVQ4T6XTsQ2AIBAF0KOzdARKSse4MRiNMRjDkpIRLO00dwkGCBjgqPmPfDgUCJcS5mEK8N4/6UBE5OwwkMJaa4gxskNIE8hPalXMkQLoBZ1zYK0trIQwUAfxvsBvexEghFYNqbwbbTDh5I3BHB+QOrcQOSCukBddvsT6qZaf8W+spwapB4lGuYcO/4Ue8AKKHF9JrVmWNQAAAABJRU5ErkJggg==";var spaceshipSprite270=new Image;spaceshipSprite270.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVQ4T82TwRGAIAwE9efTEiiHMiiNMiiHEnz60wnDMUdMeJuPM8Itl3Ds26JKKY8sxxh3b5u7ADGEHmQJCCE0fa3VdWECcDoDvFaWgHhfzUE5zva12vgAxuC6GDPwIC5AhLoFy8VPATnnLaU0ZQf/9CCnFjg8DNFAhgyATp6IuLQjQCaATF1ShwKExdhjAnB1DGEXfMAH0BLXX592osHmDEbiOsR7vvoWXkPxeRGk03K5AAAAAElFTkSuQmCC";var spaceshipSprite45=new Image;spaceshipSprite45.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAqUlEQVQ4T6WUQRLAEAxF2XXZW3EMR3MMbtVld+3ENCZImsywMsZ//k/g3ebwm3q3AEopDweNMbKHDYtUHELonFprm3OQDpBOpm5EwCzOOTddSmlJM0OaAwpAMVVSkAiAzJCVA1A3KgA2/0WYi9kjoAMLgEKWGmB2cDEXMd6XK8c5tNTcRhC3gn8AdGG6iZxYBND2aZcLOqI+Jg2iAtCRBDIDuGimCNp/8QIrlmFh0/jZJgAAAABJRU5ErkJggg==";var spaceshipSprite135=new Image;spaceshipSprite135.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAp0lEQVQ4T6XUMRKEIAwFUOgsvRUcg6NxDLiVpd063zFMiEnGHags/I8koDEsrriYDybQWvtpeM55yqgAhVNKw+i9j2eOuIDXHiEvQCu91npbpZTJBOICFOQpjriAFqYqMBvM5AVYk5ctqIAVxq5/Afk8Qtv2aVgA5ADxwmiB7w4ASyLySKdjlOV7iHoTvf6pVOtSxZUwUBOQpZoV3AN7vryvIY4t/w8uwV1jE5vOMHwAAAAASUVORK5CYII=";var spaceshipSprite225=new Image;spaceshipSprite225.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAArklEQVQ4T6WTPQ7AIAiFdevYW+kxPJrH0Ft1dGuDCYbyYzVl0aZ5n8AD736GB30p5YYzxti/d8KjmItWYSYAgV+gVwlW6jOICojt6qxynILJYQIwE1MagkbXhxPtEi/nnF1KSc1GALQ+AAACISEEV2vttr98tyxdBtChQhHPCLIwM6AAuGsQ2gtRAgfg67wEOmTq7Fu9mNpIfyIAasWArmvjbW7f6pJtry935TfgAZzGYxMjRFNzAAAAAElFTkSuQmCC";var spaceshipSprite315=new Image;spaceshipSprite315.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAApklEQVQ4T6WTsQ3EIBAEIfvwu4IyKI0yoCuHzvw6pEXAr72WfQEJmrlbTnj3svwTvpRyGBdj9LcFgNaGUnAGQnQpUDCNwKC4b61h+XynBJNAdiOSLmBwztmllOaO+9anMNgu22GCEIKrtTbAYKtVMNpeCQDTCdB93TemGeFJAIAJxihSoN6ACvCQ6l+scI8AcFynbQWF7UjB1SQM/ptARWD38jcq6Q/cTWFhP4NJPwAAAABJRU5ErkJggg==";var spacestationSprite=new Image;spacestationSprite.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACxklEQVR4Xu1b21HEMAwktEALSXFURHFJC7TAMWROnmEPsZJlO845/B1ObGu1ejqeXir/ret6iyyxLMsUeZ+9W3Xyn8WHAcAq6DzP/ypl2zamtH28FDOKMWA4ADSBUcNWjWpqn98+fg1tn+9/PprLiGwGDAuACL7Mr7sm1u3rX5vVNGM1GZkcmSD/R0Z4meBmwLAAMI15kZf5xGegr9AYVpoJZgYMC4AmuFfj6CgYoCwZKMUEyoBhAagluGgWfcA0Tbsy1HWVqBNlgsqAYQHQwlzU5pkPwPm9PiKXCQ8MuABQ6vdaDJA8QHwAY4qM5+YJKIfKANzI0wNQ2+kxzTKAoz5BqxkSAy4A7raPuTnTDMvYtHEE3LpONE8QJsh6Dwy4ALj37KQ6s2rGygRmy9b12Dy4H8kTDmcA23hzAGo7PyYwYw4DxOsTcL3pAsCY+aUU+X5Sw35rVV/q5UH/X+smMwbgOoxR2QxgAuP46QBg4c8LAJqW1vt78NYQhVLubzwjZD4H95F8wAWAgjwCw35bbVCquWQq5HzBOi97zsyAdCABwAwHAEM0dzzKAKYIzee4GZArIHuvewCs8dda7ZWKAt5opIVjqXXMUYBplDU8ugegVgsM+//RTDDKgOxM0MuAWpngaQHIBTDqi1itcPpq0AqsliI3b4mxXL2UxpnmD+sJDg+AppnSmu+WAd0DUDsf0JxWNwwYFgCrzVjDDnvudrvtX5G3Pn/o5nS4ewDw/D1qo0eFPyZHsy9ETgNAK19QywS8Bz2HfSXWPQClmVDbBLyaF/mafSl6WgAYE2TcGyWiJlAKUMqACwBI6VJLqvCNkVI3S7xMNDMAmVD6ysxpAGAmUfrWmKzH5vVq3hwFtKJGc0Jso6xI0sbZvM0BwI0yr6xpEuex3jPMFRjXc/sALyPw+ae9OhsFpnWnKOwDrLZsNY2jAPgGjQYXfQbG4aMAAAAASUVORK5CYII=";var letters=letters={A:[[,1],[1,,1],[1,,1],[1,1,1],[1,,1]],B:[[1,1],[1,,1],[1,1,1],[1,,1],[1,1]],C:[[1,1,1],[1],[1],[1],[1,1,1]],D:[[1,1],[1,,1],[1,,1],[1,,1],[1,1]],E:[[1,1,1],[1],[1,1,1],[1],[1,1,1]],F:[[1,1,1],[1],[1,1],[1],[1]],G:[[,1,1],[1],[1,,1,1],[1,,,1],[,1,1]],H:[[1,,1],[1,,1],[1,1,1],[1,,1],[1,,1]],I:[[1,1,1],[,1],[,1],[,1],[1,1,1]],J:[[1,1,1],[,,1],[,,1],[1,,1],[1,1,1]],K:[[1,,,1],[1,,1],[1,1],[1,,1],[1,,,1]],L:[[1],[1],[1],[1],[1,1,1]],M:[[1,1,1,1,1],[1,,1,,1],[1,,1,,1],[1,,,,1],[1,,,,1]],N:[[1,,,1],[1,1,,1],[1,,1,1],[1,,,1],[1,,,1]],O:[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],P:[[1,1,1],[1,,1],[1,1,1],[1],[1]],Q:[[0,1,1],[1,,,1],[1,,,1],[1,,1,1],[1,1,1,1]],R:[[1,1],[1,,1],[1,,1],[1,1],[1,,1]],S:[[1,1,1],[1],[1,1,1],[,,1],[1,1,1]],T:[[1,1,1],[,1],[,1],[,1],[,1]],U:[[1,,1],[1,,1],[1,,1],[1,,1],[1,1,1]],V:[[1,,,,1],[1,,,,1],[,1,,1],[,1,,1],[,,1]],W:[[1,,,,1],[1,,,,1],[1,,,,1],[1,,1,,1],[1,1,1,1,1]],X:[[1,,,,1],[,1,,1],[,,1],[,1,,1],[1,,,,1]],Y:[[1,,1],[1,,1],[,1],[,1],[,1]],Z:[[1,1,1,1,1],[,,,1],[,,1],[,1],[1,1,1,1,1]],0:[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],1:[[,1],[,1],[,1],[,1],[,1]],2:[[1,1,1],[0,0,1],[1,1,1],[1,0,0],[1,1,1]],3:[[1,1,1],[0,0,1],[1,1,1],[0,0,1],[1,1,1]],4:[[1,0,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1]],5:[[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1]],6:[[1,1,1],[1,0,0],[1,1,1],[1,0,1],[1,1,1]],7:[[1,1,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]],8:[[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,1,1]],9:[[1,1,1],[1,0,1],[1,1,1],[0,0,1],[1,1,1]]," ":[[,,],[,,],[,,],[,,],[,,]]},w=canvas.width,h=canvas.height,onLoadScreen=!0,onWinScreen=!1,onGameoverScreen=!1,starColours=["#ffffff","#ffe9c4","#d4fbff"],spaceship={maxSpeed:2.5,position:{x:random(10,230),y:random(10,230)},velocity:{x:.2*Math.random(),y:.2*Math.random()},height:18,width:18,angle:random(0,360),engineOn:!1,rotatingLeft:!1,rotatingRight:!1,fuel:100,eva:100},spacestation={position:{x:random(40,200),y:random(40,200)},gate1:{x:0,y:0},gate2:{x:0,y:0}},ac="undefined"!=typeof AudioContext?new AudioContext:new webkitAudioContext,when=ac.currentTime,tempo=132,sequence1,sequence2,sequence3,lead=["C4 w","G3 w","A#3 w","F3 w"],harmony=["-   e","C5  e","D#5 e","D4  e","G5 e","C5  e","D#5 e","G5 e","G3  e","A3  e","Bb3 e","A3  e","G3  e","A3  e","F3  q"],bass=["C3  w","G2  w","A#2  w","F2  w"];sequence1=new TinyMusic.Sequence(ac,tempo,lead),sequence2=new TinyMusic.Sequence(ac,tempo,harmony),sequence3=new TinyMusic.Sequence(ac,tempo,bass),sequence1.staccato=.55,sequence2.staccato=.55,sequence3.staccato=.05,sequence3.smoothing=.4,sequence1.gain.gain.value=.5,sequence2.gain.gain.value=.4,sequence3.gain.gain.value=.325,sequence1.mid.frequency.value=800,sequence1.mid.gain.value=3,sequence2.mid.frequency.value=1200,sequence3.mid.gain.value=3,sequence3.bass.gain.value=6,sequence3.bass.frequency.value=80,sequence3.mid.gain.value=-6,sequence3.mid.frequency.value=500,sequence3.treble.gain.value=-2,sequence3.treble.frequency.value=1400,keepDistance();var i=0,spaceshipRotation=0,stopAnim=!1,redraw=function(){ctx.save(),updateSpaceship(),drawSpaceship(),spaceshipRotation-=.02,drawSpaceStation(spaceshipRotation),drawFuel(),collision_detection(),(spaceship.fuel<=0||spaceship.eva<=0)&&gameoverScreen(),stopAnim||(i++,window.requestAnimationFrame(redraw))};loadScreen(),document.addEventListener("keydown",keyPressed),document.addEventListener("keyup",keyLetGo);