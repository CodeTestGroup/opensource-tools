class Computer{constructor(e){1===e&&(this.supply=5,this.units=[new Unit("computer",VILLAGER,[4,3],{type:"farmer",farm:[5,3]}),new Unit("computer",VILLAGER,[4,4],{type:"farmer",farm:[5,4]}),new Unit("computer",VILLAGER,[7,3],{type:"farmer",farm:[6,3]}),new Unit("computer",VILLAGER,[7,4],{type:"farmer",farm:[6,4]}),new Unit("computer",VILLAGER,[22,3],{type:"builder",buildings:[["yurt",[21,4]],["yurt",[22,4]],["yurt",[22,3]],["yurt",[23,4]],["yurt",[23,3]],["yurt",[24,3]],["yurt",[24,4]]]}),],this.buildings=[new Building("computer",FARM,[5,3]),new Building("computer",FARM,[5,4]),new Building("computer",FARM,[6,3]),new Building("computer",FARM,[6,4]),new Building("computer",YURT,[19,3],["villager"]),new Building("computer",YURT,[19,4],["villager"]),new Building("computer",YURT,[20,3],["villager"]),new Building("computer",YURT,[20,4],["villager"]),new Building("computer",YURT,[21,3],["villager"]),],this.resources={food:0,gold:0})}computerTurn(){this.units.forEach(e=>{if(e.moved=!1,e.attacked=!1,"farmer"===e.AI_behaviour.type)Math.abs(e.coord[0]-e.AI_behaviour.farm[0]<=1)&&Math.abs(e.coord[1]-e.AI_behaviour.farm[1]<=1)?this.resources.food+=1:e.findClosestPath(e.AI_behaviour.farm);else if("builder"===e.AI_behaviour.type){if(e.AI_behaviour.buildings.length>=1){let r=e.AI_behaviour.buildings[0][1];e.coord[0]>=r[0]&&(controller.view.eraseUnit(e,"computer"),e.move([r[0]+1,r[1]]),controller.view.drawUnit(e,"computer"),"yurt"===e.AI_behaviour.buildings[0][0]&&this.resources.food>5&&(this.resources.food-=5,e.build(YURT,r,["villager"]),this.supply+=1,e.AI_behaviour.buildings.shift()))}}else if("aggressive"===e.AI_behaviour.type){let t=e.findClosestEnemy();e.calculatePossibleAttacks().forEach(r=>{if(convertToHtml(t).toString()===convertToHtml(r).toString()){let i=getEntityAt(t);console.log(i),i&&(e.attack(t),i.health<=0&&i.destroySelf())}}),e.findClosestPath(t)}0===controller.player.units.length&&alert("You Lost!")}),this.buildings.forEach(e=>{if("yurt"===e.name&&void 0!==e.unitPriorities){let r=e.coord,t=e.calculateNearestFreeSpot(r,1);"villager"===e.unitPriorities[0]&&this.resources.food>2&&this.supply>this.units.length&&void 0!=t&&(e.produce(VILLAGER,t),this.resources.food-=2)}})}}