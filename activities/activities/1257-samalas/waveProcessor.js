class WaveProcessor extends AudioWorkletProcessor{constructor(){super(),this.port.onmessage=event=>{this.t=eval(event.data)}}process(e,s){return s[0].forEach((e=>{for(let s=0;s<e.length;s++)if(e[s]=2*Math.random()-1,this.t){const r=currentTime,t=sampleRate;e[s]*=.2*(.1*this.t(s,r,t)[0]+.1*this.t(s,r,t)[1])}})),!0}}registerProcessor("waveProcessor",WaveProcessor);