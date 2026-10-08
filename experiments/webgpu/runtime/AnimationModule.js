// Character animation clip selection for the editor.
export function createAnimationModule() {
  function mixerOf(o) { return o?.userData?.editor?.mixer || null; }
  function clipsOf(o) { const m = mixerOf(o); return m ? m._actions.map((a) => a._clip).filter(Boolean) : []; }
  function setClip(o, index) {
    const m = mixerOf(o); if (!m) return 0;
    m._actions.forEach((a, i) => { if (i === index) { a.reset(); a.setEffectiveWeight(1); a.play(); } else a.stop(); });
    return index;
  }
  function playing(o) { const m = mixerOf(o); return !!m && m._actions.some((a) => a.isRunning()); }
  return {clipsOf, setClip, playing};
}
