/**
 * screensize width=1300,height=700
 * height and width of player = 85,40
 * flag w,h = 50,90
 * winning point w,h = 100,80
 */
/**
 * Reverse start value is start point and endx will be point start-(end-start)
 * platform = color:"rgb(225, 237, 232)"
 * deathMaterial = color:"#f24d1b"
 * {
                x:1000,
                y:150,
                width:50,
                height:50,
                material:-1,
                movingX:true,
                movingY:false,
                startX:1000,
                startY:100,
                endX:1800,
                endY:400,
                mSpeed:30,
                reverse:true,
                color:"#f24d1b"
            },
 */
var levels = {
    Level1:{
        nextLevel:"Level2",
        startX:100,
        startY:415,
        Objects:{
            floor:{
                x:0,
                y:500,
                width:1300,
                height:80,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag:{
                x:50,
                y:410,
                width:50,
                height:90,
                material:1
            },
            winningSpot:{
                x:1100,
                y:420,
                width:100,
                height:80,
                material:2
            }
        }
    },
    Level2:{
        nextLevel:"Level3",
        startX:150,
        startY:555,
        Objects:{
            p1:{
                x:10,
                y:640,
                width:280,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            p2:{
                x:450,
                y:540,
                width:280,
                height:160,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            p3:{
                x:900,
                y:640,
                width:280,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag1:{
                x:590,
                y:450,
                width:50,
                height:90,
                material:1
            },
            flag2:{
                x:50,
                y:550,
                width:50,
                height:90,
                material:1
            },
            winningSpot:{
                x:980,
                y:560,
                width:100,
                height:80,
                material:2,
                color:"rgb(225, 237, 232)"
            }
        }
    },
    Level3:{
        nextLevel:"Level4",
        startX:150,
        startY:555,
        Objects:{
            p1:{
                x:10,
                y:640,
                width:280,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            p2:{
                x:300,
                y:430,
                width:700,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            p3:{
                x:10,
                y:200,
                width:280,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            p4:{
                x:1010,
                y:200,
                width:280,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag1:{
                x:135,
                y:110,
                width:50,
                height:90,
                material:1
            },
            flag2:{
                x:650,
                y:340,
                width:50,
                height:90,
                material:1
            },
            winningSpot:{
                x:1150,
                y:120,
                width:100,
                height:80,
                material:2,
                color:"rgb(225, 237, 232)"
            }
        }
    },
    Level4:{
        nextLevel:"Level5",
        startX:1050,
        startY:560,
        Objects:{
            base1:{
                x:1000,
                y:640,
                width:300,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            base2:{
                x:1000,
                y:400,
                width:300,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            base2d:{
                x:1000,
                y:455,
                width:300,
                height:5,
                material:-1,
                color:"#f24d1b"
            },
            base3:{
                x:1000,
                y:160,
                width:300,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            base3d:{
                x:1000,
                y:215,
                width:300,
                height:5,
                material:-1,
                color:"#f24d1b"
            },
            base4:{
                x:200,
                y:160,
                width:300,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            mp:{
                x:500,
                y:160,
                width:500,
                height:60,
                material:0,
                movingX:false,
                movingY:true,
                startX:0,
                startY:640,
                endX:510,
                endY:1120,
                mSpeed:4,
                reverse:false,
                color:"rgb(225, 237, 232)"
            },
            flag1:{
                x:1150,
                y:550,
                width:50,
                height:90,
                material:1
            },
            flag2:{
                x:1150,
                y:310,
                width:50,
                height:90,
                material:1
            },
            flag3:{
                x:1150,
                y:70,
                width:50,
                height:90,
                material:1
            },
            winningSpot:{
                x:300,
                y:80,
                width:100,
                height:80,
                material:2,
                color:"rgb(225, 237, 232)"
            }
        }
    },
    Level5:{
        nextLevel:"Level6",
        startX:170,
        startY:555,
        Objects:{
            p1:{
                x:460,
                y:640,
                width:380,
                height:60,
                material:0,
                movingX:false,
                movingY:true,
                startX:510,
                startY:640,
                endX:510,
                endY:1240,
                mSpeed:2,
                reverse:true,
                color:"rgb(225, 237, 232)"
            },
            db2p1m:{
                x:460,
                y:180,
                width:80,
                height:30,
                material:-1,
                movingX:true,
                movingY:false,
                startX:460,
                startY:160,
                endX:660,
                endY:320,
                mSpeed:3,
                reverse:false,
                color:"#f24d1b"
            },
            db2p2m:{
                x:560,
                y:180,
                width:80,
                height:30,
                material:-1,
                movingX:true,
                movingY:false,
                startX:560,
                startY:160,
                endX:760,
                endY:320,
                mSpeed:3,
                reverse:false,
                color:"#f24d1b"
            },
            base2:{
                x:540,
                y:150,
                width:220,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            dBoundry1:{
                x:450,
                y:-100,
                width:10,
                height:400,
                material:-1,
                color:"#f24d1b"
            },
            dBoundry2:{
                x:670+160,
                y:-100,
                width:10,
                height:400,
                material:-1,
                color:"#f24d1b"
            },
            flag2:{
                x:650,
                y:60,
                width:50,
                height:90,
                material:1
            },
            base:{
                x:10,
                y:640,
                width:320,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            winningP:{
                x:980,
                y:640,
                width:320,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            winningSpot:{
                x:1120,
                y:560,
                width:100,
                height:80,
                material:2,
                color:"rgb(225, 237, 232)"
            }
        }
    },
    Level6:{
        nextLevel:"Level7",
        startX:230,
        startY:320,
        Objects:{
            floor:{
                x:0,
                y:640,
                width:1300,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            dp:{
                x:0,
                y:590,
                width:50,
                height:50,
                material:-1,
                movingX:true,
                movingY:false,
                startX:0,
                startY:640,
                endX:510,
                endY:1240,
                mSpeed:6,
                reverse:false,
                color:"#f24d1b"
            },
            p1:{
                x:190,
                y:400,
                width:100,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            dp2:{
                x:500,
                y:480,
                width:350,
                height:15,
                material:-1,
                color:"#f24d1b"
            },
            fp2:{
                x:550,
                y:400,
                width:100,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag1:{
                x:235,
                y:550,
                width:50,
                height:90,
                material:1
            },
            flag2:{
                x:600,
                y:310,
                width:50,
                height:90,
                material:1
            },
            winningSpot:{
                x:1040,
                y:560,
                width:100,
                height:80,
                material:2,
                color:"rgb(225, 237, 232)"
            }
        }
    },
    Level9:{
        nextLevel:"Level10",
        startX:60,
        startY:560,
        Objects:{
            floor:{
                x:0,
                y:640,
                width:1300,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            dp1:{
                x:270,
                y:500,
                width:50,
                height:140,
                material:-1,
                color:"#f24d1b"
            },
            dp1m:{
                x:270,
                y:450,
                width:50,
                height:50,
                material:-1,
                movingX:false,
                movingY:true,
                startX:0,
                startY:450,
                endX:510,
                endY:580,
                mSpeed:4,
                reverse:false,
                color:"#f24d1b"
            },
            dp2:{
                x:570,
                y:500,
                width:50,
                height:140,
                material:-1,
                color:"#f24d1b"
            },
            dp2m:{
                x:570,
                y:450,
                width:50,
                height:50,
                material:-1,
                movingX:false,
                movingY:true,
                startX:0,
                startY:450,
                endX:510,
                endY:570,
                mSpeed:4,
                reverse:false,
                color:"#f24d1b"
            },
            dp3:{
                x:870,
                y:500,
                width:50,
                height:140,
                material:-1,
                color:"#f24d1b"
            },
            dp3m:{
                x:870,
                y:450,
                width:50,
                height:50,
                material:-1,
                movingX:false,
                movingY:true,
                startX:0,
                startY:450,
                endX:510,
                endY:550,
                mSpeed:4,
                reverse:false,
                color:"#f24d1b"
            },
            flag1:{
                x:185,
                y:550,
                width:50,
                height:90,
                material:1
            },
            flag2:{
                x:485,
                y:550,
                width:50,
                height:90,
                material:1
            },
            flag3:{
                x:785,
                y:550,
                width:50,
                height:90,
                material:1
            },
            winningSpot:{
                x:1040,
                y:560,
                width:100,
                height:80,
                material:2,
                color:"rgb(225, 237, 232)"
            }
        }
    },
    Level7:{
        nextLevel:"Level8",
        startX:1050,
        startY:540,
        Objects:{
            mp:{
                x:40,
                y:640,
                width:300,
                height:60,
                material:0,
                movingX:false,
                movingY:true,
                startX:0,
                startY:640,
                endX:510,
                endY:1120,
                mSpeed:4,
                reverse:true,
                color:"rgb(225, 237, 232)"
            },
            base1:{
                x:1000,
                y:640,
                width:300,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag1:{
                x:1150,
                y:550,
                width:50,
                height:90,
                material:1
            },
            dp1m:{
                x:880,
                y:640,
                width:50,
                height:50,
                material:-1,
                movingX:false,
                movingY:true,
                startX:0,
                startY:640,
                endX:510,
                endY:840,
                mSpeed:4,
                reverse:true,
                color:"#f24d1b"
            },
            base2:{
                x:500,
                y:640,
                width:300,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag2:{
                x:650,
                y:550,
                width:50,
                height:90,
                material:1
            },
            base3:{
                x:500,
                y:160,
                width:300,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag3:{
                x:650,
                y:70,
                width:50,
                height:90,
                material:1
            },
            dp2m:{
                x:880,
                y:160,
                width:50,
                height:50,
                material:-1,
                movingX:false,
                movingY:true,
                startX:0,
                startY:160,
                endX:510,
                endY:320,
                mSpeed:4,
                reverse:true,
                color:"#f24d1b"
            },
            base4:{
                x:1000,
                y:160,
                width:300,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            winningSpot:{
                x:1150,
                y:80,
                width:100,
                height:80,
                material:2,
                color:"rgb(225, 237, 232)"
            }
        }
    },
    Level8:{
        nextLevel:"Level9",
        startX:170,
        startY:555,
        Objects:{
            p1:{
                x:510,
                y:640,
                width:280,
                height:60,
                material:0,
                movingX:false,
                movingY:true,
                startX:510,
                startY:640,
                endX:510,
                endY:1240,
                mSpeed:6,
                reverse:true,
                color:"rgb(225, 237, 232)"
            },
            dp:{
                x:510,
                y:160,
                width:280,
                height:20,
                material:-1,
                color:"#f24d1b"
            },
            fp1:{
                x:190,
                y:290,
                width:100,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            fp2:{
                x:1010,
                y:290,
                width:100,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag1:{
                x:235,
                y:200,
                width:50,
                height:90,
                material:1
            },
            flag2:{
                x:1060,
                y:200,
                width:50,
                height:90,
                material:1
            },
            winningP:{
                x:10,
                y:640,
                width:320,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            winningSpot:{
                x:40,
                y:560,
                width:100,
                height:80,
                material:2,
                color:"rgb(225, 237, 232)"
            }
        }
    },
    
    Level10:{
        nextLevel:"Level11",
        startX:50,
        startY:540,
        Objects:{
            base1:{
                x:0,
                y:640,
                width:200,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag1:{
                x:100,
                y:550,
                width:50,
                height:90,
                material:1
            },
            dp1m:{
                x:300,
                y:390,
                width:50,
                height:50,
                material:-1,
                movingX:false,
                movingY:true,
                startX:0,
                startY:390,
                endX:510,
                endY:550,
                mSpeed:3,
                reverse:false,
                color:"#f24d1b"
            },
            base2:{
                x:300,
                y:540,
                width:150,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag2:{
                x:400,
                y:450,
                width:50,
                height:90,
                material:1
            },
            dp2m:{
                x:350,
                y:315,
                width:50,
                height:50,
                material:-1,
                movingX:true,
                movingY:false,
                startX:350,
                startY:90,
                endX:800,
                endY:250,
                mSpeed:4,
                reverse:false,
                color:"#f24d1b"
            },
            base3:{
                x:600,
                y:440,
                width:150,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag3:{
                x:700,
                y:350,
                width:50,
                height:90,
                material:1
            },
            base4:{
                x:900,
                y:340,
                width:150,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag4:{
                x:1000,
                y:250,
                width:50,
                height:90,
                material:1
            },
            dp3m:{
                x:1050,
                y:190,
                width:50,
                height:50,
                material:-1,
                movingX:false,
                movingY:true,
                startX:0,
                startY:90,
                endX:510,
                endY:250,
                mSpeed:4,
                reverse:false,
                color:"#f24d1b"
            },
            base5:{
                x:1140,
                y:240,
                width:150,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            winningSpot:{
                x:1180,
                y:160,
                width:100,
                height:80,
                material:2,
                color:"rgb(225, 237, 232)"
            }
        }
    },
    Level11:{
        nextLevel:"GameOver",
        startX:50,
        startY:555,
        Objects:{
            base1:{
                x:0,
                y:640,
                width:270,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            dp1m:{
                x:295,
                y:450,
                width:50,
                height:50,
                material:-1,
                movingX:false,
                movingY:true,
                startX:0,
                startY:450,
                endX:510,
                endY:580,
                mSpeed:5,
                reverse:false,
                color:"#f24d1b"
            },
            base2:{
                x:370,
                y:640,
                width:270,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            dp2m:{
                x:665,
                y:450,
                width:50,
                height:50,
                material:-1,
                movingX:false,
                movingY:true,
                startX:0,
                startY:450,
                endX:510,
                endY:580,
                mSpeed:5,
                reverse:false,
                color:"#f24d1b"
            },
            base3:{
                x:740,
                y:640,
                width:270,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            flag1:{
                x:485,
                y:550,
                width:50,
                height:90,
                material:1
            },
            flag2:{
                x:885,
                y:550,
                width:50,
                height:90,
                material:1
            },
            mp:{
                x:1100,
                y:640,
                width:200,
                height:60,
                material:0,
                movingX:false,
                movingY:true,
                startX:510,
                startY:640,
                endX:510,
                endY:1240,
                mSpeed:4,
                reverse:true,
                color:"rgb(225, 237, 232)"
            },
            base4:{
                x:0,
                y:220,
                width:1010,
                height:60,
                material:0,
                color:"rgb(225, 237, 232)"
            },
            dp3m:{
                x:295,
                y:20,
                width:50,
                height:50,
                material:-1,
                movingX:false,
                movingY:true,
                startX:0,
                startY:20,
                endX:510,
                endY:150,
                mSpeed:3,
                reverse:false,
                color:"#f24d1b"
            },
            dp1:{
                x:295,
                y:70,
                width:50,
                height:150,
                material:-1,
                color:"#f24d1b"
            },
            dp4m:{
                x:665,
                y:20,
                width:50,
                height:50,
                material:-1,
                movingX:false,
                movingY:true,
                startX:0,
                startY:50,
                endX:510,
                endY:150,
                mSpeed:3,
                reverse:false,
                color:"#f24d1b"
            },
            dp2:{
                x:665,
                y:70,
                width:50,
                height:150,
                material:-1,
                color:"#f24d1b"
            },
            dp:{
                x:1100,
                y:70,
                width:200,
                height:20,
                material:-1,
                color:"#f24d1b"
            },
            flag3:{
                x:485,
                y:130,
                width:50,
                height:90,
                material:1
            },
            flag4:{
                x:885,
                y:130,
                width:50,
                height:90,
                material:1
            },
            winningSpot:{
                x:80,
                y:140,
                width:100,
                height:80,
                material:2,
                color:"rgb(225, 237, 232)"
            }
        }
    },
}
function LevelGenerator(level="Level1"){
    if(level != "GameOver"){
        var screenLoader = document.getElementById("screenLoader")
        if(gameStarted){
            screenLoader.style.animation = "fadeIn 1s ease-in"
            screenLoader.style.display = "block"
        }
        player = new Player()
        var object_id = 0
        var flags = 0
        var objectArr = []
        var startX = levels[level].startX
        var startY = levels[level].startY
        var Objects = levels[level].Objects
        for (object in Objects){
            var objectGen = new ObjectMaterial(Objects[object].x,Objects[object].y,Objects[object].width,Objects[object].height,object,Objects[object].material,object_id++,Objects[object].movingX,Objects[object].movingY,Objects[object].startX,Objects[object].startY,Objects[object].endX,Objects[object].endY,Objects[object].mSpeed,Objects[object].reverse,Objects[object].color)
            objectArr.push(objectGen)
            if(Objects[object].material == 1){
                flags++
            }
        }
        var level = new gameLevel(startX,startY,objectArr,player,levels[level].nextLevel,level,flags)
        if(gameStarted){
            screenLoader.style.animation = "fadeOut 1s ease-in"
            setTimeout(()=>{
                screenLoader.style.display = "none"
            },1000)
        }
        return level
    }
    else {
        document.getElementById("screenLoader").style.opacity = 1
        var screenLoader = document.getElementById("endScreen")
        endScreen.style.animation = "fadeIn 1s ease-in"
        endScreen.style.display = "flex"
        return null
    }
}
class gameLevel {
    constructor (
        startX,startY,objects,player,nextLevel,name,totalFlags
    ){
        this.startX = startX
        this.startY = startY
        this.objects = objects
        this.player = player
        this.nextLevelKey = []
        this.nextLevel = nextLevel
        this.name = name
        this.totalFlags = totalFlags
        this.start()
    }
    start(){
        this.player.x = this.startX
        this.player.y = this.startY
    }
    playLevel(){
        this.objects.forEach((object)=>{
            object.objectInit()
        })
    }
}