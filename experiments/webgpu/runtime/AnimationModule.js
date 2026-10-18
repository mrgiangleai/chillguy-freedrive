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
  function pick(o, re) { const m = mixerOf(o); if (!m) return null; return m._actions.find((a) => re.test((a._clip && a._clip.name) || '')) || null; }
  function activate(o, act, weight = 1) {
    const m = mixerOf(o); if (!m) return;
    for (const a of m._actions) {
      if (a === act) { if (!a.isRunning()) a.play(); a.enabled = true; a.setEffectiveWeight(weight); }
      else a.setEffectiveWeight(0);
    }
  }
  /** Drive the walk clip from movement: speed01 in 0..1, moving boolean. */
  function syncWalk(o, speed01, moving) {
    const m = mixerOf(o); if (!m || !m._actions.length) return {walk: false, idle: false};
    const walk = pick(o, /walk|run|move|jog/i), idle = pick(o, /idle|stand|breath|wait/i), first = m._actions[0];
    const s = 0.7 + Math.min(1, speed01) * 1.8;
    if (moving) {
      const act = walk || (idle && !walk ? null : first);
      if (walk) { activate(o, walk, 1); walk.setEffectiveTimeScale(s); }
      else if (first) { activate(o, first, 1); first.setEffectiveTimeScale(s); }
    } else {
      if (idle) activate(o, idle, 1);
      else if (walk) { activate(o, walk, 1); walk.setEffectiveTimeScale(0); }
      else { activate(o, first, 1); first.setEffectiveTimeScale(0); }
    }
    return {walk: !!(walk || first), idle: !!idle};
  }
  return {clipsOf, setClip, playing, syncWalk, pick};
}
