var Control=function(){var e=function(){};return e.prototype.LEFT=37,e.prototype.RIGHT=39,e.prototype.DOWN=40,e.prototype.ESC=27,e.prototype.R=82,e.prototype.SPACE=32,e.prototype.init=function(e){this.game=e,this.keyDownHandler(e)},e.prototype.keyDownHandler=function(e){var o=(e.container.curTetris,this);window.addEventListener("keydown",function(n){e.running&&(n.keyCode===o.LEFT?e.container.curTetris.slide(-1):n.keyCode===o.RIGHT?e.container.curTetris.slide(1):n.keyCode===o.DOWN?e.container.rush():n.keyCode===o.R?e.container.reverse():n.keyCode===o.SPACE?e.container.reverse():n.keyCode===o.ESC&&(e.stop(),e.menu.show()))}),window.addEventListener("keyup",function(n){n.keyCode===o.DOWN&&e.container.release()})},e}();