window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();var tb={boundingBox:function(e,t,n,r,i,s,o,u){var a=!1;return e>i+o||e+n<i||t+r<s||t>s+u?a=!1:a=!0,a},rnd:function(e,t){return t?Math.random()*(t-e)+e:Math.random()*e},rndInt:function(e,t){return Math.round(tb.rnd(e,t))},g:function(e){return document.getElementById(e)},per:function(e,t){return e*100/t},checkCanvas:function(){try{var e=document.createElement("canvas");return e.getContext("2d")?!0:!1}catch(t){return!1}},formatNumber:function(e){var t=String(e),n="",r="";t.indexOf(".")!=-1&&(r=t.substr(t.indexOf("."),t.length),t=t.substr(0,t.indexOf(".")));if(t.length<=3)n=t;else{for(var i=0;i!=3;i++){if(String(Number((t.length-i)/3)).indexOf(".")!=-1)continue;break}n=t.slice(0,i);for(var s=i;s<t.length;s+=3)n.length==0&&(n=t.slice(0,3),s+=3),n+=","+t.slice(s,s+3)}return n+r},breakToLines:function(e,t,n){var r=[],i=0,s="",o=0,u=0;while(o!=e.length){(s.length+1)*t+u>n&&(i++,u=0),r[i]==undefined&&(r[i]=""),s+=e[o];if(e.charCodeAt(o)==32||e.length==o+1)r[i]+=s,u+=s.length*t,s="";(s.length+1)*t>n&&(s.length+1!=e.length-1&&(e.charCodeAt(o+1)!=32?r[i]+=s+"-":r[i]+=s),s="",i++,u=0),o++}return r},printStringArrayToContext:function(e,t,n,r,i){t.font=n+"px arial",t.fillStyle="#ffffff";for(var s=0;s!=e.length;s++)t.fillText(e[s],r,i+s*n);return i+(s+1)*n},parkIt:function(e){try{localStorage.park=JSON.stringify(e)}catch(t){}},getIt:function(){try{if(localStorage.park)return JSON.parse(localStorage.park)}catch(e){}}}