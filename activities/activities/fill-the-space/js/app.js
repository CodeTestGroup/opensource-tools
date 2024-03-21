!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(t){return e[t]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=3)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={box:{totalBoxPerRow:7,boxAnimationTime:250},grid:{totalRow:7,totalBoxPerRow:7},level:{max:18},classList:{wrapper:{gridWrapper:"grids-wrapper",subGridWrapper:"sub-grid-wrapper"},box:{box:"box",boxHide:"box--hide",boxFloat:"box--float",childboxWhite:"child-box--white",childBox:"child-box",childBoxDot:"child-box--dot",childBoxHide:"child-box--hide"},circleTransition:{show:"circle-transition--show",hide:"circle-transition--hide"},btn:{disabled:"btn--disabled"},congrat:{show:"congrat--show",hide:"congrat--hide"},text:{disabled:"text--disabled"}},ids:{clickCounter:"click-counter",levelCounter:"level-counter",circleTransition:"circle-transition",reset:"reset",next:"next",prev:"prev",congrat:"congrat",congratDetail:"congrat-detail",playagain:"playagain"},saveKey:{maxLevel:"maxLevel",maxClick:"maxClick",isGameComplete:"isGameComplete"}}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),l=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2];i(this,e),this.maxLevel=t,this.maxClick=n,this.isGameComplete=o}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"setMaxLevel",value:function(e){this.maxLevel=e>this.maxLevel?e:this.maxLevel}},{key:"setMaxClick",value:function(e){this.maxClick=e>this.maxClick?e:this.maxClick}},{key:"setIsGameComplete",value:function(e){this.isGameComplete=e}},{key:"isCanClickNext",value:function(e){return e<this.maxLevel}},{key:"isCanIncreaseClick",value:function(e){return e>this.maxLevel}},{key:"saveToLocalStorage",value:function(){localStorage.setItem(a.default.saveKey.maxLevel,this.maxLevel),localStorage.setItem(a.default.saveKey.maxClick,this.maxClick),localStorage.setItem(a.default.saveKey.isGameComplete,this.isGameComplete)}},{key:"loadData",value:function(){this.maxLevel=parseInt(localStorage.getItem(a.default.saveKey.maxLevel)||1),this.maxClick=parseInt(localStorage.getItem(a.default.saveKey.maxClick)||0),this.isGameComplete="true"===localStorage.getItem(a.default.saveKey.isGameComplete)||!1}}]),e}();t.default=l},function(e,t){"use strict";function n(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.text=document.getElementById(t),this.counter=0}return function(e,t,i){t&&n(e.prototype,t),i&&n(e,i)}(e,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.counter=e,this.updateText()}},{key:"increaseCounter",value:function(){this.counter+=1,this.updateText()}},{key:"decreaseCounter",value:function(){this.counter-=1,this.updateText()}},{key:"updateText",value:function(){this.text.innerHTML="".concat(this.counter)}}]),e}();t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=i(n(4)),a=i(n(5)),l=i(n(6)),r=i(n(7)),c=i(n(8)),s=i(n(12)),u=i(n(13)),f=i(n(14)),d=i(n(15)),h=i(n(2)),v=i(n(1)),p=i(n(0));n(16);for(var b,m=document.getElementById("grids-wrapper"),x=0;x<p.default.grid.totalRow;x+=1){(b=document.createElement("div")).className=p.default.classList.wrapper.subGridWrapper;for(var y,C=0;C<p.default.grid.totalBoxPerRow;C+=1){(y=document.createElement("div")).className=p.default.classList.box.box;var g=document.createElement("div");g.className=p.default.classList.box.childBox,y.appendChild(g),b.appendChild(y)}m.appendChild(b)}var k=new v.default(1);k.loadData();var w=new c.default,L=new u.default,_=new f.default(k),B=new h.default(p.default.ids.levelCounter),O=new d.default(p.default.ids.clickCounter),S=new s.default(p.default.ids.reset),P=new s.default(p.default.ids.next),j=new s.default(p.default.ids.prev),M=function(){1===B.counter&&j.setDisableClick(!0)},D=function(){B.counter!==p.default.level.max&&k.isCanClickNext(B.counter)||P.setDisableClick(!0)},E=function(e){S.setDisableClick(e),P.setDisableClick(e),j.setDisableClick(e),M(),D()};L.setEvent((function(){B.counter<p.default.level.max?(B.increaseCounter(),w.setLevel(B.counter-1),k.setMaxLevel(B.counter),k.saveToLocalStorage()):(w.setLevel(0),B.init(1)),E(!1)}),(function(){_.show(k.maxClick),k.setIsGameComplete(!0),k.saveToLocalStorage(),E()})),S.setClickEvent((function(){(0,o.default)().start(),w.setLevel(B.counter-1)})),P.setClickEvent((function(){B.counter!==p.default.level.max&&k.isCanClickNext(B.counter)&&((0,o.default)().start(),B.increaseCounter(),w.setLevel(B.counter-1),j.setDisableClick(!1),(B.counter===p.default.level.max||!k.isCanClickNext(B.counter))&&P.setDisableClick(!0))})),j.setClickEvent((function(){1===B.counter||((0,o.default)().start(),B.decreaseCounter(),w.setLevel(B.counter-1),P.setDisableClick(!1),1===B.counter&&j.setDisableClick(!0))})),_.setOnPlayAgainClick((function(){L.handleShowDone()})),w.setEvent((function(){O.setDisabled(B.counter<k.maxLevel||k.isGameComplete)}),(function(){(0,l.default)().start(),k.isGameComplete||(O.increaseCounter(),k.setMaxClick(O.counter))}),(function(){E(!0),(0,r.default)().start()}),(function(){L.show(B.counter===p.default.level.max&&!k.isGameComplete),(0,a.default)().start()})),B.init(k.maxLevel),O.init(k.maxClick),w.setLevel(k.maxLevel-1),_.init(),D(),M()},function(e,t){"use strict";var n=Math.pow;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){for(var e=function(e){return e>1e4?null:(128&n(e,1.055)?1:-1)*n(t(e,1e4),2)},t=function(e,t){return(t-e)/t},i=new AudioContext,o=i.createBuffer(1,96e3,48e3),a=o.getChannelData(0),l=96e3;l--;)a[l]=e(l);var r=i.createBufferSource();return r.buffer=o,r.connect(i.destination),r}},function(e,t){"use strict";var n=Math.pow;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){for(var e=function(e){var i=Math.sin;if(e>5e4)return null;e=5.3*n(e,1-i(e/1e5));var o=i(e/30+i(e/1500));return n(o,9)*t(e,5e4)},t=function(e,t){return(t-e)/t},i=new AudioContext,o=i.createBuffer(1,96e3,48e3),a=o.getChannelData(0),l=96e3;l--;)a[l]=e(l);var r=i.createBufferSource();return r.buffer=o,r.connect(i.destination),r}},function(e,t){"use strict";var n=Math.pow;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){for(var e=function(e){var i=1e4;if(e>i)return null;var o=n(t(e,i),2.1);return n(e,3)&(e<i/3?16:99)?o:-o},t=function(e,t){return(t-e)/t},i=new AudioContext,o=i.createBuffer(1,96e3,48e3),a=o.getChannelData(0),l=96e3;l--;)a[l]=e(l);var r=i.createBufferSource();return r.buffer=o,r.connect(i.destination),r}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){for(var e=function(e){var n=[0,4,7,12,void 0,7,12],i=35e3;if(e>i)return null;var o=n[0|n.length*e/i];if(void 0===o)return 0;var a=.8*Math.pow(2,o/12),l=t(e*n.length%i,i);return 64&e*a?l:-l},t=function(e,t){return(t-e)/t},n=new AudioContext,i=n.createBuffer(1,96e3,48e3),o=i.getChannelData(0),a=96e3;a--;)o[a]=e(a);var l=n.createBufferSource();return l.buffer=i,l.connect(n.destination),l}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(9)),r=i(n(10)),c=i(n(11)),s=function(){function e(){var t=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.boxes=[],this.activeBoxes=[],this.isCanClickBox=!0,this.checkCompleteDebounce=r.default.debounce(this.checkComplete,500),this.onSetLevel=function(){},this.onBoxCllick=function(){},this.onLevelComplete=function(){},this.onStartCompleteAnimation=function(){},this.currentLevel=0;var n=Array.from(document.getElementsByClassName("box"))||[],i=0,o=0;n.forEach((function(e){0==o&&(t.boxes[i]=[]);var n=new c.default(e,o,i,t.handleBoxClick.bind(t));t.boxes[i][o]=n,(o+=1)===a.default.box.totalBoxPerRow&&(o=0,i+=1)}))}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"init",value:function(){this.activeBoxes.length=0,this.isCanClickBox=!0}},{key:"setEvent",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){},i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:function(){};this.onSetLevel=e,this.onBoxCllick=t,this.onLevelComplete=i,this.onStartCompleteAnimation=n}},{key:"setLevel",value:function(e){var t=this;this.init(),this.currentLevel=e,l.default[e].forEach((function(e,n){e.forEach((function(e,i){var o=t.boxes[n][i];o.init(e),0!==e&&t.activeBoxes.push(o)}))})),this.onSetLevel()}},{key:"checkComplete",value:function(){for(var e=this,t=!0,n=0;n<this.activeBoxes.length;n+=1)if(!this.activeBoxes[n].isFilled){t=!1;break}if(t){for(var i=0;i<this.activeBoxes.length;i+=1)this.activeBoxes[i].addCompleteEffect();this.isCanClickBox=!1,this.onStartCompleteAnimation(),setTimeout((function(){e.onLevelComplete()}),1e3)}}},{key:"handleBoxClick",value:function(e,t){this.isCanClickBox&&(this.changeShapeOfBox(e,t),this.changeShapeOfBox(e+1,t),this.changeShapeOfBox(e-1,t),this.changeShapeOfBox(e,t+1),this.changeShapeOfBox(e,t-1),this.checkCompleteDebounce(),this.onBoxCllick())}},{key:"changeShapeOfBox",value:function(e,t){0>e||e>=a.default.grid.totalBoxPerRow||0>t||t>=a.default.grid.totalRow||this.boxes[t][e].changeShape()}}]),e}();t.default=s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=[[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,2,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,2,2,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,2,2,2,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,2,2,0,2,2,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,2,0,0,0,0],[0,0,2,0,2,0,0],[0,0,2,0,2,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,2,2,0,0,0],[0,0,2,0,2,0,0],[0,0,0,2,2,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,2,2,2,0,0],[0,0,0,0,0,0,0],[0,0,1,2,0,0,0],[0,0,2,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,2,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,2,0,0,0,0],[0,0,1,0,0,0,0],[0,0,2,1,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,2,0,0,0],[0,0,1,2,2,0,0],[0,0,0,2,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,2,1,2,0,0],[0,0,0,2,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,2,1,0,0,0],[0,0,0,2,0,0,0],[0,0,0,1,2,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,2,0,0,0,0],[0,0,2,0,1,0,0],[0,0,1,2,2,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,1,0,0],[0,0,2,1,2,0,0],[0,0,1,2,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,2,1,0,0,0],[0,0,0,2,2,1,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,2,2,0,0,0,0],[0,0,1,2,1,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,0,1,0,0],[0,0,2,1,1,2,0],[0,0,2,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,2,0,1,0,0],[0,0,1,1,2,0,0],[0,0,0,2,0,0,0],[0,0,0,2,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]]]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={debounce:function(e,t,n){var i;return function(){var o=this,a=arguments,l=n&&!i;clearTimeout(i),i=setTimeout((function(){i=null,n||e.apply(o,a)}),t),l&&e.apply(o,a)}}}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),l=function(){function e(t,n,o){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:function(){};i(this,e),this.box=t,this.child=this.box.firstChild,this.isCanChangeShape=!0,this.isFilled=!1,this.onBoxClick=function(){return a(n,o)},this.box.addEventListener("mousedown",this.handleBoxClick.bind(this))}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"handleBoxClick",value:function(){this.isCanChangeShape&&this.onBoxClick()}},{key:"changeShape",value:function(){this.isCanChangeShape&&(this.isFilled?(this.isFilled=!1,this.child.classList.add(a.default.classList.box.childBoxDot)):(this.isFilled=!0,this.child.classList.remove(a.default.classList.box.childBoxDot)))}},{key:"init",value:function(e){this.isCanChangeShape=!0,this.isFilled=!1,0===e?(this.isCanChangeShape=!1,this.box.className="".concat(a.default.classList.box.box," ").concat(a.default.classList.box.boxHide),this.child.className="".concat(a.default.classList.box.childBox," ").concat(a.default.classList.box.childBoxHide)):1===e?(this.isFilled=!0,this.box.className=a.default.classList.box.box,this.child.className=a.default.classList.box.childBox):(this.box.className=a.default.classList.box.box,this.child.className="".concat(a.default.classList.box.childBox," ").concat(a.default.classList.box.childBoxDot))}},{key:"addCompleteEffect",value:function(){this.child.classList.add(a.default.classList.box.childboxWhite)}}]),e}();t.default=l},function(e,t,n){"use strict";function i(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),a=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.btn=document.getElementById(t)}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"setClickEvent",value:function(e){this.btn.onclick=e}},{key:"setDisableClick",value:function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];e?this.btn.classList.add(o.default.classList.btn.disabled):this.btn.classList.remove(o.default.classList.btn.disabled)}}]),e}();t.default=a},function(e,t,n){"use strict";function i(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),a=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.circle=document.getElementById(o.default.ids.circleTransition),this.onShowDone=function(){}}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"setEvent",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};this.onShowDone=e,this.onAllLevelComplete=t}},{key:"show",value:function(){var e=this,t=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0];this.circle.classList.remove(o.default.classList.circleTransition.hide),this.circle.classList.add(o.default.classList.circleTransition.show),setTimeout((function(){t?e.onAllLevelComplete():e.handleShowDone()}),1500)}},{key:"handleShowDone",value:function(){this.onShowDone(),this.circle.classList.remove(o.default.classList.circleTransition.show),this.circle.classList.add(o.default.classList.circleTransition.hide)}}]),e}();t.default=a},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=(i(n(1)),function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.congrat=document.getElementById(a.default.ids.congrat),this.detail=document.getElementById(a.default.ids.congratDetail),this.playagainBtn=document.getElementById(a.default.ids.playagain)}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"init",value:function(){this.congrat.classList.add(a.default.classList.congrat.hide)}},{key:"setOnPlayAgainClick",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){};this.playagainBtn.onclick=function(){t(),e.congrat.classList.add(a.default.classList.congrat.hide),e.congrat.classList.remove(a.default.classList.congrat.show)}}},{key:"show",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.congrat.classList.remove(a.default.classList.congrat.hide),this.congrat.classList.add(a.default.classList.congrat.show),this.detail.innerHTML="You have completed all levels with ".concat(e," click")}}]),e}());t.default=l},function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function l(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function r(e,t,n){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(0)),f=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,u.default.ids.clickCounter))).isDisabled=!1,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(t,[{key:"increaseCounter",value:function(){this.isDisabled||r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"increaseCounter",this).call(this)}},{key:"setDisabled",value:function(e){this.isDisabled=e,e?this.text.classList.add(u.default.classList.text.disabled):this.text.classList.remove(u.default.classList.text.disabled)}}]),t}(o(n(2)).default);t.default=f},function(){}]);
//# sourceMappingURL=app.js.map