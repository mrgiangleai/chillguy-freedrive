// Map New York — tiếng phố: còi xe xa ngẫu nhiên (dày hơn ở Times Square, nhỏ trong hầm), còi hụ xa đi ngang mỗi 50–140 s,
// tiếng đám đông Times Square to dần khi tới gần (chatter slot 3 / 4). Bản DeepSeek theo đề + scripts/check-nyc-sound.mjs, Claude soát.
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;

export class NycSound {
  constructor(audio, rnd = Math.random) {
    this.audio = audio;
    this.rnd = rnd;
    this.wasOn = true; // assume active, so the first "off" frame silences
    this.replies = []; // scheduled reply horns {t, pan, vol}
    this.siren = null; // {t, T, peak, pan0, pan1}
    this.sirenIdle = this._rand(20, 60);
    this.chatPrev = [0, 0]; // last level for slots 3 and 4
  }

  _rand(a, b) {
    return a + this.rnd() * (b - a);
  }

  // Same as update(_, {on:false}): silence now.
  stop() {
    this.audio.setSiren('wail', 0);
    this.audio.setChatter(3, 0);
    this.audio.setChatter(4, 0);
    this.siren = null;
    this.replies.length = 0;
    this.chatPrev = [0, 0];
    this.wasOn = false;
  }

  update(dt, st) {
    if (!st || !st.on) {
      if (this.wasOn) {
        // one-shot silence, then stay quiet
        this.audio.setSiren('wail', 0);
        this.audio.setChatter(3, 0);
        this.audio.setChatter(4, 0);
        this.wasOn = false;
        this.siren = null;
        this.replies.length = 0;
        this.chatPrev = [0, 0];
      }
      return;
    }
    if (!this.wasOn) {
      // re-entering the map
      this.wasOn = true;
      this.siren = null;
      this.sirenIdle = this._rand(20, 60);
    }

    const L = st.L || 1;
    const s = ((st.s % L) + L) % L;
    const tunnel = clamp(st.tunnel || 0, 0, 1);
    const speed = st.speed || 0;
    const tsA = st.tsA, tsB = st.tsB;

    // ---- 1. distant horns (Poisson) ----
    const inTs = tsA <= tsB ? s >= tsA && s <= tsB : s >= tsA || s <= tsB;
    const rate =
      0.22 * (inTs ? 1.8 : 1) * (1 - 0.7 * tunnel) * (speed > 12 ? 0.6 : 1);
    if (this.rnd() < rate * dt) this._horn(tunnel);

    for (let i = this.replies.length - 1; i >= 0; i--) {
      const r = this.replies[i];
      r.t -= dt;
      if (r.t <= 0) {
        this.audio.horn(r.pan, r.vol * (1 - 0.5 * tunnel));
        this.replies.splice(i, 1);
      }
    }

    // ---- 2. passing siren ----
    if (this.siren) {
      const e = this.siren;
      e.t += dt;
      const u = Math.min(e.t / e.T, 1);
      const lv = e.peak * Math.sin(Math.PI * u) ** 2;
      this.audio.setSiren('wail', lv, lerp(e.pan0, e.pan1, u));
      if (e.t >= e.T) {
        this.audio.setSiren('wail', 0, e.pan1);
        this.siren = null;
        this.sirenIdle = this._rand(50, 140);
      }
    } else {
      this.sirenIdle -= dt;
      if (this.sirenIdle <= 0) {
        const side = this.rnd() < 0.5 ? -0.8 : 0.8;
        this.siren = {
          t: 0,
          T: this._rand(14, 22),
          peak: this._rand(0.18, 0.4) * (1 - 0.6 * tunnel),
          pan0: side,
          pan1: -side,
        };
      }
    }

    // ---- 3. Times Square crowd ----
    let d = 0;
    if (!inTs) {
      const toA = (tsA - s + L) % L;
      const fromB = (s - tsB + L) % L;
      d = Math.min(toA, fromB);
    }
    const lvC = 0.75 * clamp(1 - d / 180, 0, 1) * (1 - 0.8 * tunnel);
    for (let i = 0; i < 2; i++) {
      const slot = i + 3;
      const pan = i === 0 ? -0.45 : 0.45;
      if (lvC > 0) {
        this.audio.setChatter(slot, lvC, pan, 1);
      } else if (this.chatPrev[i] > 0) {
        this.audio.setChatter(slot, 0, pan, 0);
      }
      this.chatPrev[i] = lvC;
    }
  }

  _horn(tunnel) {
    const pan = this._rand(-0.9, 0.9);
    this.audio.horn(pan, this._rand(0.12, 0.45) * (1 - 0.5 * tunnel));
    if (this.rnd() < 0.25) {
      // 25% chance: a distant reply with a different pan
      let p2 = -pan;
      if (Math.abs(pan) < 0.05) p2 = pan + 0.6;
      this.replies.push({ t: this._rand(0.3, 0.9), pan: p2, vol: this._rand(0.12, 0.45) });
    }
  }
}
