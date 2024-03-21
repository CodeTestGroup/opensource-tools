(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var a=[{key:"u1",type:"uncommon",text:"Adds an item with a large amount of time",rate:"★",price:32},{key:"u2",type:"uncommon",text:"Adds an item with a large number of coins",rate:"★",price:32},{key:"r1",type:"rare",text:"Increases maximum time over 60",rate:"★★",price:64},{key:"r2",type:"rare",text:"Increases the probability of finding a coin",rate:"★★",price:64},{key:"e1",type:"epic",text:"Adds an item with a random effect",rate:"★★★",price:128},{key:"e2",type:"epic",text:"Gives a critical hit chance for each item",rate:"★★★",price:128},{key:"l1",type:"legendary",text:"Increases maximum number of airdrops",rate:"★★★★",price:256}];window.defaultGameItems=[{probability:9,isActive:!0,rank:"common",name:"+1",coin:1,style:{width:70,height:70,background:"linear-gradient(#5F8AFA, #4FD1D9)",fontSize:25}},{probability:7,isActive:!0,rank:"common",name:"+2",coin:2,style:{width:60,height:60,fontSize:22,background:"linear-gradient(#6B6EF9, #4FD1D9)"}},{key:"u2",probability:4,isActive:!1,rank:"uncommon",name:"+4",coin:4,style:{width:60,height:60,fontSize:22,background:"linear-gradient(#6B6EF9, #4FD1D9)"}},{probability:3,isActive:!0,rank:"common",name:"T+1",time:10,style:{width:40,height:40,fontSize:16,background:"linear-gradient(#E3935B, #FFC860)"}},{rank:"common",isActive:!0,probability:4,name:"T-1",time:-10,style:{width:60,height:60,fontSize:22,background:"linear-gradient(#E3935B, #FFC860)"}},{key:"u1",isActive:!1,probability:2,name:"T+2",time:20,style:{width:50,height:50,fontSize:18,background:"linear-gradient(#E3935B, #FFC860)"}},{key:"e1",isActive:!1,probability:3,name:"�",style:{width:50,height:50,fontSize:20,background:"linear-gradient(to right, #485563, #29323c)"}}],document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".coin");window.activeItems=window.defaultGameItems.filter((function(e){return e.isActive}));var n=localStorage.getItem("coin");JSON.parse(localStorage.getItem("purchasedCards"));window.coin=n?parseInt(n):0,e.innerText=window.coin,window.gameCards=a.map((function(e){return i(i({},e),{},{status:"disabled"})})),window.crit=!1,window.maxAirdrop=2;var r=[];window.maxAirdrop=2;window.setCoin=function(t){window.coin+=t,e.innerText=window.coin,document.querySelectorAll(".market__card").forEach((function(e){var t=e.querySelector(".card__price").innerHTML;window.coin>=t&&!e.classList.contains("active")&&e.classList.remove("disabled"),t>window.coin&&!e.classList.contains("active")&&e.classList.add("disabled")}))};var o=document.querySelector(".field"),c=document.body.offsetWidth,d=document.body.offsetHeight-200;o&&(c=o.clientWidth,d=o.clientHeight);function l(e){var n=document.createElement("div");n.className="field__item",n.innerHTML=e.name,document.querySelector(".field").appendChild(n),n.style.cssText="\n      background: ".concat(e.style.background,";\n      top: ").concat(e.style.top,"px;\n      left: ").concat(e.style.left,"px;\n      width: ").concat(e.style.width,"px;\n      height: ").concat(e.style.height,"px;\n      font-size: ").concat(e.style.fontSize,"px;\n    "),n.addEventListener("click",(function(n){window.crit&&m();var i=function(e){return window.crit?e*m():e};e.time?function(e){var t=1e3*e;window.endTime+=t}(i(e.time)):setCoin(i(e.coin)),n.target.remove(),r.splice(r.indexOf(r.find((function(e){return e.id===n.id}))),1);var o=f(window.maxAirdrop,r.length,c,d);r.push.apply(r,t(o)),o.forEach((function(e){return l(e)}))}))}document.getElementById("start").addEventListener("click",(function(){if(!window.gameStarted){window.gameStarted=!0;var e=f(3,0,c,d);r.push.apply(r,t(e)),s(),e.forEach((function(e){l(e)}))}}))})),document.addEventListener("DOMContentLoaded",(function(){window.gameCards.forEach((function(e){var t,n=e.key,r=e.type,i=(e.text,e.rate,e.price),o=e.status,a=document.createElement("div");a.className="market__card ".concat(r," ").concat(o),a.innerHTML='<div class="card__rate">'.concat((t=e).rate,'</div>\n    <div class="card__text">').concat(t.text,'</div>\n    <div class="card__price">').concat(t.price,'</div>\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 602" class="card__border">\n      <g><path d="M339 365V237h1v128Zm-2-349.91L317 3h-76l-10.35 4H110.36L100 3H23L3 15.09V69H0V14h.39L0 13.33 22 0h295.74L340 13.36l-.37.64h.37v55h-3ZM1 365H0V237h1Zm1 1H0V237h1Zm1.64-234L16 153.26V449L2.67 471 0 469.49 13 448V154L0 132.51Zm228 464 10.36 4H100l10.36-4ZM340 469.49l-2.66 1.5L324 449V153.26L337.36 131l2.63 1.5L327 154v294ZM3 586.91 23 599h294l20-12.09V533h3v55h-.38l.37.64L317.74 602H22L0 588.67l.39-.67H0v-55h3Z" data-name="Layer 1" style="fill-rule:evenodd"/></g>\n    </svg>');var c=a.querySelector(".card__price");c&&c.addEventListener("click",(function(t){t.target.closest(".market__card").classList.add("active"),setCoin(-i),window.coin>e.price&&a.classList.remove("disabled"),"l1"===n&&window.maxAirdrop++,"r1"===n&&(window.maxTime*=window.maxTime),"r2"===n&&window.activeItems.forEach((function(e){e.coin&&e.probability++})),"e2"===n&&(window.crit=!0)})),window.market.appendChild(a)}))}));window.maxTime=60,window.gameStarted=!1;var c=document.getElementById("timer");window.timerInterval=null;var d=function(e){return(e-Date.now())/1e3},l=6e4;window.endTime=Date.now()+l,window.seconds=d(window.endTime),window.pausedTimeBallance=null;var s=function(){window.pausedTimeBallance=null,window.seconds=60,window.endTime=Date.now()+l,window.timerInterval=setInterval((function(){if(window.pausedTimeBallance)return clearInterval(window.timerInterval),void(window.timerInterval=null);var e=d(window.endTime);e>0?(e>window.maxTime&&(window.endTime=Date.now()+l),e<window.maxTime&&(window.seconds=e,c.innerHTML="".concat(seconds))):(console.log("Game Over"),window.seconds=0,c.innerHTML=window.seconds,clearInterval(window.timerInterval),window.timerInterval=null,document.querySelector(".field").innerHTML="",window.gameStarted=!1,localStorage.setItem("coin",window.coin.toString()),localStorage.setItem("purchasedCards",JSON.stringify(purchasedCards)))}),70)},u=function(e,t){var n=e-.5+Math.random()*(t-e+1);return Math.round(n)},m=function(){return 2===u(-2,2)?2:1},w=function(e,t){var n,r=(n=y(window.activeItems))[u(0,n.length-1)],o=function(e,t,n,r){return{top:u(0,t-r),left:u(0,e-n)}}(e,t,r.style.width,r.style.height);return i(i({id:(Date.now()+1e3*Math.random()).toString()},r),{},{style:i(i({},r.style),o),handler:function(){}})},f=function(e,t,n,r){for(var i=u(t>0?0:1,e),o=[],a=0;a<i;a++)o.push(w(n,r));return o},y=function(e){var t=[];return e.forEach((function(e){for(var n=0;n<e.probability;n++)t.push(e)})),t};window.market=document.querySelector(".market")})();