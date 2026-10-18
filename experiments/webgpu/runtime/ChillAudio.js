// Renderer-independent WebAudio: engine tone, wind ambience and pass-by whooshes.
export function createChillAudio() {
  let ctx = null, master = null, engineOsc = null, engineGain = null, windGain = null, ready = false;

  function ensure() {
    if (ctx) { resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0.6; master.connect(ctx.destination);

    engineOsc = ctx.createOscillator(); engineOsc.type = 'sawtooth'; engineOsc.frequency.value = 60;
    const filt = ctx.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = 900;
    engineGain = ctx.createGain(); engineGain.gain.value = 0;
    engineOsc.connect(filt); filt.connect(engineGain); engineGain.connect(master); engineOsc.start();

    const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const wind = ctx.createBufferSource(); wind.buffer = buf; wind.loop = true;
    const wf = ctx.createBiquadFilter(); wf.type = 'lowpass'; wf.frequency.value = 520;
    windGain = ctx.createGain(); windGain.gain.value = 0;
    wind.connect(wf); wf.connect(windGain); windGain.connect(master); wind.start();
    ready = true;
  }
  function resume() { if (ctx && ctx.state === 'suspended') ctx.resume(); }
  function setMaster(v) { if (master) master.gain.value = Math.max(0, Math.min(1, v)); }
  /** speed01: 0..1 of top speed; driving gates the engine. */
  function update(speed01, driving) { if (!ctx) return; engineGain.gain.value = driving ? 0.12 + 0.4 * speed01 : Math.max(0, engineGain.gain.value - 0.05); engineOsc.frequency.value = 60 + speed01 * 240; windGain.gain.value = 0.04 + 0.22 * speed01; }
  function off() { if (engineGain) engineGain.gain.value = 0; if (windGain) windGain.gain.value = 0; }
  function passBy() {
    if (!ctx) return;
    const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain(), bp = ctx.createBiquadFilter();
    o.type = 'sawtooth'; bp.type = 'bandpass'; bp.Q.value = 2; bp.frequency.setValueAtTime(1200, t); bp.frequency.exponentialRampToValueAtTime(320, t + 0.35);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.14, t + 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
    o.connect(bp); bp.connect(g); g.connect(master); o.start(t); o.stop(t + 0.42);
  }
  return {ensure, resume, setMaster, update, off, passBy, get ready() { return ready; }};
}
