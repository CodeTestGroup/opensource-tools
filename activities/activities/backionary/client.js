aa.value=localStorage.getItem('name')||'';let ab;const ac=a=>{for(const b of document.querySelectorAll('.'+a))b.dataset.display=b.dataset.display||('none'==b.style.display?'':b.style.display),b.style.display='none'},af=a=>{for(const b of document.querySelectorAll('.'+a))b.style.display=b.dataset.display||''},ag=(a,b)=>{aj('Set state',a,b),ac('ak'),ac('al'),ac('am'),ac('an'),ac('ao'),ac('ap'),ac('aq'),af(a);'am'===a?(ar.innerText=b.as,at.removeAttribute('viewBox')):'an'===a?b.au&&(at.innerHTML='',at.setAttribute('viewBox',b.au)):void 0},av={aw(a,b){ay(),az(b.ba),ag('am',b)},bb(a,b){az(b.ba),ag('ap',{})},bc(){ag('ap',{})},am(a,b){ag('an',b)},bd(a,b){ay(),ag('ao',b)},be(a,b){let c=at.querySelectorAll('path')[b.bg];c?bi(c,b.be):c=bh(b.be)},bj(a,b){az(b.ba)},bk(a,b){0<b.bl.length&&(bm.innerText=b.bl.join('\n'),bm.style.display='')},aq(a,b){af('aq'),bn.innerText=b.aq.toFixed(1)}},bo=()=>{ab.on('connect',async()=>{aj('Socket connected'),await bp(ab,'bq',{br:aa.value})}),ab.on('disconnect',()=>{setTimeout(()=>location.reload(),1e3)}),ab.on('error',()=>{setTimeout(()=>location.reload(),1e3)}),ab.on('bs',bt(ab)),ab.on('bu',a=>{if(aj('Received response',a),!a||3!==a.length)return void console.error('Invalid response structure',a,a.length);const[b,c,d]=a;return c&&b&&bx[c]?void bx[c](d):void console.error('Invalid response data',c,d)})},az=a=>{by.innerHTML='';for(const b of a.bz){const a=document.createElement('div');a.innerText=`${b.br} - ${b.cb}pts`,by.append(a)}};