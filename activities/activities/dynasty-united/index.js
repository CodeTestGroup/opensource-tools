const e=[70,71,72,73,74,75,92,91,90,89,88,87,86,85,101,102,103,104,105,106,107,108,124,123,122,121,120,119,118,117],t=[[63,47,31,30,29,45,61,62,46],[23,24,25,26,42,41,40,39],[52,51,50,34,18,19,35,20,36]];let n=document.getElementById("grid");const o=document.getElementById("main-dash");let a="ally-base";function l(l){let i=document.createElement("div");n.appendChild(i),i.addEventListener("click",(()=>{!function(l){if("ally-base"===a||"right-wing"===a||"left-wing"===a)for(let e=0;e<t.length;e++)if(t[e].includes(l))return 0===e&&"ally-base"===a&&(c("right-wing"),p("Go to enemy right wing army")),1===e&&(c("center-back"),p("Go to enemy center back army")),2===e&&"ally-base"===a&&(c("left-wing"),p("Go to enemy left wing army")),o.style.display="block",n.style.pointerEvents="none",void(E.style.display="none");e.includes(l)&&(c("enemy-base"),o.style.display="block",n.style.pointerEvents="none",E.style.display="none",p("Arrived Enemy Base"))}(l),function(){const e=["Cavalry","Archer","Infantry"],t=Math.floor(Math.random()*e.length);f.textContent=e[t],y=e[t]}()}))}const r=document.getElementById("me");function s(e){let t=document.createElement("div");t.style.backgroundColor="none",e&&(t.style.backgroundColor="yellow"),r.appendChild(t)}function c(e){"right-wing"===e&&(r.style.animation="goToRightWing  1.5s ease forwards",setTimeout((()=>{r.style.bottom="580px",r.style.left="255px"}),2e3),a=e),"left-wing"==e&&(r.style.animation="goToLeftWing  1.5s ease forwards",setTimeout((()=>{r.style.bottom="580px",r.style.left="35px"}),2e3),a=e),"center-back"==e&&("right-wing"===a&&(r.style.animation="goLeft 1s ease forwards"),"left-wing"===a&&(r.style.animation="goRight 1s ease forwards"),setTimeout((()=>{r.style.left="140px"}),500),a=e),"enemy-base"==e&&(r.style.animation="goEnemyBase 1s ease forwards",a=e)}let y,d="cavalry";document.getElementById("announce");const m=document.getElementById("cavalry"),g=document.getElementById("archer"),u=document.getElementById("infantry"),f=document.getElementById("computer-choice"),b=document.getElementById("human-choice");m.addEventListener("click",(()=>{d="cavalry",b.textContent=d})),g.addEventListener("click",(()=>{d="archer",b.textContent=d})),u.addEventListener("click",(()=>{d="infantry",b.textContent=d}));const h=document.getElementById("attack"),E=document.getElementById("landing");h.addEventListener("click",(()=>{var e,t;announce.textContent=(t=y,(e=(e=d).toLowerCase())===(t=t.toLowerCase())?"It's a tie!":"cavalry"===e&&"archer"===t||"archer"===e&&"infantry"===t||"infantry"===e&&"cavalry"===t?(setTimeout((()=>{n.style.pointerEvents="auto",o.style.display="none","enemy-base"===a&&p('Executed <b style="color:red">Cao Cao</b> '),"left-wing"===a&&p('Executed <b style="color:red">Sun Jian</b>'),"center-back"===a&&p('Executed <b style="color:red">Liu Bei</b>'),"right-wing"===a&&p('<b style="color:red">Guan Yu, Zhang Fe, and Zhao Yun</b> Defeated'),p(`Won in the battle of ${a} army`),"left-wing"===a&&p('<b style="color:pink">Wu</b> Dynasty Defeated'),"center-back"===a&&p('<b style="color:green">Shu</b> Dynasty Defeated'),"right-wing"===a&&p('<b style="color:green">Shu</b> Generals Defeated'),"enemy-base"===a&&p('<b style="color:yellow">Mongol Empire </b> Victory!!')}),500),setTimeout((()=>{E.style.display="block"}),500),`You win! ${e} beats ${t}.`):`You lose! ${t} beats ${e}.`),setTimeout((()=>{announce.textContent="Restraint: cavalry << archer << infantry"}),500)}));const w=document.getElementById("log");function p(e){let t=document.createElement("li");t.innerHTML=e,w.appendChild(t)}window.addEventListener("load",(()=>{!function(){let e=0;for(j=0;j<32;j++)for(i=0;i<16;i++)e++,l(e)}(),function(){for(let e=0;e<6;e++)s(0!==e&&2!==e)}()}));