function playTone(n,t){let e=50*Math.random();n.frequency.value=150+50*Math.random(),n.start(0),n.connect(t.destination),setInterval(()=>{e=50*Math.random(),n.frequency.value=Math.random()>.5?150+e:20},500),setInterval(()=>{n.frequency.value=Math.random()>.5?500+e:20},1e3)}function playMusic(){window.AudioContext=window.AudioContext||window.webkitAudioContext;const n=new AudioContext;playTone(n.createOscillator(),n)}
