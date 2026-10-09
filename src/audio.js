// Nhạc lo-fi chill được sinh trực tiếp bằng WebAudio (không cần file mp3, không dính bản quyền):
// piano điện + bass + trống nhẹ + tiếng đĩa than, kèm âm thanh động cơ / gió / mưa.
const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

// r = nốt bass, n = các nốt hợp âm (key C)
const PROGRESSIONS = [
  [{ r: 41, n: [53, 57, 60, 64] }, { r: 40, n: [52, 55, 59, 62] }, { r: 38, n: [50, 53, 57, 60] }, { r: 36, n: [52, 55, 59, 62] }],
  [{ r: 38, n: [50, 53, 57, 60] }, { r: 43, n: [53, 55, 59, 62] }, { r: 36, n: [52, 55, 59, 62] }, { r: 45, n: [55, 57, 60, 64] }],
  [{ r: 36, n: [52, 55, 59, 62] }, { r: 45, n: [55, 57, 60, 64] }, { r: 38, n: [50, 53, 57, 60] }, { r: 43, n: [53, 55, 59, 62] }],
  [{ r: 45, n: [55, 57, 60, 64] }, { r: 38, n: [50, 53, 57, 60] }, { r: 43, n: [53, 55, 59, 62] }, { r: 36, n: [52, 55, 59, 62] }],
];
const COMP_PATTERNS = [[0, 6, 10], [0, 7, 10, 14], [0, 10], [0, 3, 8, 11]];
const PENTA = [72, 74, 76, 79, 81, 84];

export class ChillAudio {
  constructor() {
    this.ctx = null;
    this.mode = 0;            // 0: nhạc + âm thanh, 1: chỉ nhạc, 2: tắt
    this.bpm = 74;
    this.step = 0; this.bar = 0;
    this.prog = PROGRESSIONS[0]; this.pattern = COMP_PATTERNS[0];
    this.lastMel = -99;
  }

  // phải gọi trong một thao tác của người dùng (trình duyệt chặn autoplay)
  async start() {
    if (this.ctx) { await this.ctx.resume(); return; }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = this.ctx = new Ctx();

    this.master = ctx.createGain();
    this.master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.ratio.value = 3;
    this.master.connect(comp).connect(ctx.destination);

    // bus nhạc
    this.musicGain = ctx.createGain();
    const lofi = ctx.createBiquadFilter();
    lofi.type = 'lowpass'; lofi.frequency.value = 4800; lofi.Q.value = 0.4;
    this.musicGain.connect(lofi).connect(this.master);

    this.pianoBus = ctx.createGain();
    const tone = ctx.createBiquadFilter();
    tone.type = 'lowpass'; tone.frequency.value = 2400;
    this.pianoBus.connect(tone).connect(this.musicGain);

    this.drumBus = ctx.createGain();
    const drumLp = ctx.createBiquadFilter();
    drumLp.type = 'lowpass'; drumLp.frequency.value = 3400;
    this.drumBus.connect(drumLp).connect(this.musicGain);

    // reverb tự tạo
    const len = ctx.sampleRate * 2.6;
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
    }
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = ir;
    const wet = ctx.createGain();
    wet.gain.value = 0.38;
    this.reverbIn = ctx.createGain();
    this.reverbIn.connect(this.reverb).connect(wet).connect(this.musicGain);
    tone.connect(this.reverbIn);

    // echo cho giai điệu
    this.echo = ctx.createDelay(2);
    this.echo.delayTime.value = (60 / this.bpm) * 0.75;
    const fb = ctx.createGain(); fb.gain.value = 0.34;
    const echoLp = ctx.createBiquadFilter(); echoLp.type = 'lowpass'; echoLp.frequency.value = 1800;
    this.echo.connect(echoLp).connect(fb).connect(this.echo);
    echoLp.connect(this.musicGain);

    // "wow" của băng cassette: LFO nhỏ điều biến cao độ
    this.wow = ctx.createOscillator();
    this.wow.frequency.value = 0.55;
    this.wowGain = ctx.createGain();
    this.wowGain.gain.value = 9;
    this.wow.connect(this.wowGain);
    this.wow.start();

    // noise dùng chung
    const nb = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const nd = nb.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    this.noise = nb;

    this._vinyl();
    this._ambient();

    this.nextTime = ctx.currentTime + 0.15;
    this.timer = setInterval(() => this._tick(), 50);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) ctx.suspend(); else if (this.mode !== 2) ctx.resume();
    });
    this.setMode(this.mode);
  }

  setMode(m) {
    this.mode = m;
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(m === 2 ? 0 : 0.9, t, 0.4);
  }

  _src(buffer, loop = true) {
    const s = this.ctx.createBufferSource();
    s.buffer = buffer; s.loop = loop;
    s.loopStart = Math.random();
    return s;
  }

  _vinyl() {
    const ctx = this.ctx;
    const len = ctx.sampleRate * 4;
    const b = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * 0.012;
    for (let n = 0; n < 70; n++) {
      const p = Math.floor(Math.random() * (len - 10));
      d[p] += rand(0.25, 0.8) * (Math.random() < 0.5 ? -1 : 1);
      d[p + 1] -= rand(0.1, 0.4);
    }
    const s = ctx.createBufferSource();
    s.buffer = b; s.loop = true;
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1300;
    const g = ctx.createGain(); g.gain.value = 0.16;
    s.connect(hp).connect(g).connect(this.musicGain);
    s.start();
  }

  _ambient() {
    const ctx = this.ctx;
    this.ambGain = ctx.createGain();
    this.ambGain.gain.value = 1;
    this.ambGain.connect(this.master);
    // âm thanh bên ngoài xe (mưa, gió, lốp, sấm): ngồi trong xe thì nhỏ đi 60% và trầm xuống (kính / cửa cách âm)
    this.outLp = ctx.createBiquadFilter(); this.outLp.type = 'lowpass'; this.outLp.frequency.value = 20000;
    this.outGain = ctx.createGain(); this.outGain.gain.value = 1;
    this.outGain.connect(this.outLp).connect(this.ambGain);

    const mkNoise = (type, freq, q) => {
      const s = this._src(this.noise);
      const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
      const g = ctx.createGain(); g.gain.value = 0;
      s.connect(f).connect(g).connect(this.outGain);
      s.start();
      return g;
    };
    this.rainG = mkNoise('bandpass', 2200, 0.5);
    this.windG = mkNoise('lowpass', 420, 0.7);
    this.tireG = mkNoise('lowpass', 750, 0.6);
    // gió giật: LFO chậm cộng thêm vào độ lớn tiếng gió
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.13;
    this.gustG = ctx.createGain();
    this.gustG.gain.value = 0;
    lfo.connect(this.gustG).connect(this.windG.gain);
    lfo.start();

    // tiếng động cơ: vòng tua theo hộp số ảo (xem setAmbient) — gầm nền (răng cưa + tam giác ×2 + vuông ×0.5) qua lọc thấp
    // mở dần theo vòng tua / độ đạp ga, cộng tiếng ống xả rào (nhiễu băng hẹp quanh tần số nổ ×2) khi tăng tốc / chạy nhanh
    this.engLp = ctx.createBiquadFilter(); this.engLp.type = 'lowpass'; this.engLp.frequency.value = 260; this.engLp.Q.value = 1.2;
    this.engG = ctx.createGain(); this.engG.gain.value = 0;
    this.eng = [ctx.createOscillator(), ctx.createOscillator(), ctx.createOscillator()];
    this.eng[0].type = 'sawtooth'; this.eng[1].type = 'triangle'; this.eng[2].type = 'square';
    const subG = ctx.createGain(); subG.gain.value = 0.35;
    this.eng[0].connect(this.engLp); this.eng[1].connect(this.engLp); this.eng[2].connect(subG).connect(this.engLp);
    this.eng.forEach((o) => { o.frequency.value = 40; o.start(); });
    this.engLp.connect(this.engG).connect(this.ambGain);
    const ex = this._src(this.noise);
    this.exBp = ctx.createBiquadFilter(); this.exBp.type = 'bandpass'; this.exBp.Q.value = 2.2; this.exBp.frequency.value = 150;
    this.exG = ctx.createGain(); this.exG.gain.value = 0;
    ex.connect(this.exBp).connect(this.exG).connect(this.ambGain);
    ex.start();
    this.rpm = 900; this.load = 0; this._lastV = 0; this._lastT = 0;

    // mưa đập vào kính (chỉ nghe khi ngồi trong xe): giọt lộp độp = xung nhiễu ngắn + tiếng "tách" cộng hưởng nhỏ,
    // rải ngẫu nhiên trong vòng lặp 4 s, cộng một lớp rào rào trầm của mưa trên mui
    const sr = ctx.sampleRate, len = sr * 4;
    const b = ctx.createBuffer(1, len, sr), d = b.getChannelData(0);
    for (let n = 0; n < 1400; n++) {
      const p = Math.floor(Math.random() * len), amp = 0.08 + Math.random() * Math.random() * 0.5;
      const f = 1800 + Math.random() * 3800, tn = sr * (0.0012 + Math.random() * 0.0025), tr = sr * (0.004 + Math.random() * 0.008);
      for (let j = 0; j < sr * 0.03; j++) {
        d[(p + j) % len] += amp * ((Math.random() * 2 - 1) * Math.exp(-j / tn) + 0.5 * Math.sin(6.2832 * f * j / sr) * Math.exp(-j / tr));
      }
    }
    const drops = ctx.createBufferSource(); drops.buffer = b; drops.loop = true;
    const dHp = ctx.createBiquadFilter(); dHp.type = 'highpass'; dHp.frequency.value = 700;
    this.glassG = ctx.createGain(); this.glassG.gain.value = 0;
    drops.connect(dHp).connect(this.glassG).connect(this.ambGain);
    drops.start();
    const roof = this._src(this.noise);
    const rLp = ctx.createBiquadFilter(); rLp.type = 'lowpass'; rLp.frequency.value = 900;
    this.roofG = ctx.createGain(); this.roofG.gain.value = 0;
    roof.connect(rLp).connect(this.roofG).connect(this.ambGain);
    roof.start();
  }

  // speed (m/s), rain/snow/wind/dark 0..1, inCar: đang ngồi trong xe
  setAmbient({ speed, rain, snow, wind = 0, dark = 0, fx = 0, inCar = false }) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, k = 0.25;
    const on = this.mode === 0 ? 1 : 0;
    this.ambGain.gain.setTargetAtTime(on, t, 0.4);
    this.outGain.gain.setTargetAtTime(inCar ? 0.4 : 1, t, 0.3);
    this.outLp.frequency.setTargetAtTime(inCar ? 1600 : 20000, t, 0.3);
    this.glassG.gain.setTargetAtTime(inCar ? rain * 0.08 * (1 + 0.6 * dark) : 0, t, 0.3);   // mưa lộp độp trên kính (đã giảm 2 lần × 60%)
    this.roofG.gain.setTargetAtTime(inCar ? rain * 0.02 * (1 + dark) : 0, t, 0.3);   // rào rào trên mui (đã giảm 60%)
    this.rainG.gain.setTargetAtTime(rain * 0.08 * (1 + 0.6 * dark), t, k);   // tiếng mưa bên ngoài (đã giảm 60%)
    this.windG.gain.setTargetAtTime(0.012 + speed * 0.0016 + snow * 0.05 + wind * wind * 0.1 + fx * 0.085, t, k);
    this.gustG.gain.setTargetAtTime(wind * wind * 0.07, t, k);
    this.tireG.gain.setTargetAtTime(Math.min(speed * 0.0011, 0.05) * (1 + rain), t, k);
    // hộp số ảo 6 cấp: vòng tua tăng trong mỗi số, tụt xuống khi lên số; đạp ga (tăng tốc) => to + gắt hơn
    const dtA = Math.min(0.2, Math.max(1e-3, t - this._lastT)); this._lastT = t;
    const acc = (speed - this._lastV) / dtA; this._lastV = speed;
    this.load += (Math.max(0, Math.min(1, acc / 4)) - this.load) * Math.min(1, dtA * 3);
    // tỉ số vòng tua / tốc độ (rpm mỗi m/s) của 6 số; đi êm thì lên số sớm (≤ ~2200 rpm), đạp ga thì giữ số tới ~5800 rpm
    const R = [400, 240, 165, 125, 100, 82], up = 2200 + this.load * 3600;
    this.gear ??= 0;
    if (speed * R[this.gear] > up && this.gear < 5) this.gear++;
    else if (this.gear > 0 && speed * R[this.gear - 1] < up * 0.8) this.gear--;
    const rpmT = Math.max(850, speed * R[this.gear]);
    this.rpm += (rpmT - this.rpm) * Math.min(1, dtA * 6);
    const n = Math.min(1, (this.rpm - 850) / 5450);                      // 0..1
    const f = this.rpm / 15;                                             // tần số nổ V8: 4 lần nổ / vòng
    this.eng[0].frequency.setTargetAtTime(f, t, 0.06);
    this.eng[1].frequency.setTargetAtTime(f * 2, t, 0.06);
    this.eng[2].frequency.setTargetAtTime(f * 0.5, t, 0.06);
    const sp = Math.min(1, speed / 50);
    this.engLp.frequency.setTargetAtTime(220 + n * 900 + this.load * 900 + sp * 600, t, 0.08);
    this.engG.gain.setTargetAtTime(0.02 + n * 0.03 + this.load * 0.035 + sp * 0.05, t, 0.1);
    this.exBp.frequency.setTargetAtTime(f * 2, t, 0.06);
    this.exG.gain.setTargetAtTime((0.01 + sp * 0.07) * (0.4 + 0.6 * n) + this.load * 0.05, t, 0.1);
  }

  // tiếng xe lướt qua: thời lượng (s) theo tốc độ tương đối rel (m/s) — nhanh thì "vèo" ngắn, chậm thì "ù" dài
  passDur(rel) { return clamp(2.8 - rel * 0.03, 0.8, 2.6); }

  // xe lướt qua xe người chơi: tiếng gió rít + tiếng máy (hiệu ứng Doppler: cao lúc tới, trầm xuống khi đi qua).
  // Độ lớn theo tốc độ tương đối, nhỏ dần nếu xe kia ở xa theo chiều ngang. pan: -1 trái .. +1 phải. Đỉnh âm ở giữa thời lượng.
  passBy(rel, pan = 0, lat = 3) {
    if (!this.ctx || this.mode !== 0) return;
    const ctx = this.ctx, t = ctx.currentTime, dur = this.passDur(rel), mid = t + dur * 0.5;
    const vol = clamp(0.12 + rel / 45, 0.12, 1) / (1 + 0.12 * Math.max(0, lat - 2));
    const p = ctx.createStereoPanner();
    p.pan.setValueAtTime(pan * 0.4, t); p.pan.linearRampToValueAtTime(pan, mid); p.pan.linearRampToValueAtTime(pan * 0.5, t + dur);
    p.connect(this.outGain);
    const s = this._src(this.noise, true);
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 0.7;
    f.frequency.setValueAtTime(400 + rel * 10, t); f.frequency.linearRampToValueAtTime(900 + rel * 22, mid);
    f.frequency.exponentialRampToValueAtTime(260 + rel * 5, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.16 * vol, mid); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(p);
    s.start(t); s.stop(t + dur + 0.05);
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    const f0 = 55 + rel * 1.1, dop = Math.min(0.25, rel / 343);
    o.frequency.setValueAtTime(f0 * (1 + dop), t); o.frequency.setValueAtTime(f0 * (1 + dop), mid - dur * 0.08);
    o.frequency.exponentialRampToValueAtTime(f0 * (1 - dop), mid + dur * 0.12);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 320 + rel * 6;
    const og = ctx.createGain();
    og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime(0.07 * vol, mid); og.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(lp).connect(og).connect(p);
    o.start(t); o.stop(t + dur + 0.05);
  }

  // còi xe "bíp bíp": 2 tiếng ngắn, 2 tông lệch nhau (còi điện đôi)
  horn(pan = 0, vol = 1) {
    if (!this.ctx) return;
    const ctx = this.ctx, t0 = ctx.currentTime;
    const p = ctx.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan));
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400;
    lp.connect(p).connect(this.outGain);
    for (const [st, len] of [[0, 0.16], [0.24, 0.22]]) {
      const g = ctx.createGain(), t = t0 + st;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09 * vol, t + 0.015);
      g.gain.setValueAtTime(0.09 * vol, t + len - 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
      g.connect(lp);
      for (const f of [415, 498]) { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(g); o.start(t); o.stop(t + len + 0.02); }
    }
  }

  // còi hụ xe ưu tiên (map Phố): 'police' rú lên xuống 650 ↔ 1350 Hz chu kỳ 4 s; 'ambulance' "pi–po" 960 / 770 Hz mỗi 0.65 s.
  // Gọi mỗi khung: level 0..1 (theo khoảng cách), pan -1..1. level 0 => tắt dần (giữ nguồn để bật lại nhanh)
  setSiren(kind, level, pan = 0) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    this.sirens ||= {};
    let v = this.sirens[kind];
    if (!v) {
      if (level <= 0) return;
      const o = ctx.createOscillator(); o.type = 'square';
      const o2 = ctx.createOscillator(); o2.type = 'sine';
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2600;
      const g = ctx.createGain(); g.gain.value = 0;
      const p = ctx.createStereoPanner();
      const g2 = ctx.createGain(); g2.gain.value = 0.6;
      o.connect(lp); o2.connect(g2).connect(lp);
      lp.connect(g).connect(p).connect(this.outGain);
      o.start(); o2.start();
      v = this.sirens[kind] = { o, o2, g, p };
    }
    let f;
    if (kind === 'police') f = 650 + 700 * (0.5 - 0.5 * Math.cos(t * Math.PI / 2));
    else f = Math.floor(t / 0.65) % 2 ? 770 : 960;
    v.o.frequency.setTargetAtTime(f, t, kind === 'police' ? 0.05 : 0.008);
    v.o2.frequency.setTargetAtTime(f * 2.01, t, kind === 'police' ? 0.05 : 0.008);
    v.g.gain.setTargetAtTime(0.11 * Math.max(0, Math.min(1, level)), t, 0.25);
    v.p.pan.setTargetAtTime(Math.max(-1, Math.min(1, pan)), t, 0.1);
  }

  // tiếng suối/thác: vòng lặp 4 s gồm rào rào (nhiễu nâu + trắng) và tiếng "lục bục" (bọt khí: sin tắt nhanh, cao dần).
  // Tạo khi cần lần đầu. level 0..1, pan -1 trái .. +1 phải
  setWater(level, pan = 0) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    if (!this.waterG) {
      if (level <= 0.001) return;
      const sr = ctx.sampleRate, len = sr * 4, b = ctx.createBuffer(1, len, sr), d = b.getChannelData(0);
      let br = 0;
      for (let i = 0; i < len; i++) { br = br * 0.985 + (Math.random() * 2 - 1) * 0.06; d[i] = br * 0.55 + (Math.random() * 2 - 1) * 0.045; }
      for (let n = 0; n < 1500; n++) {
        const p = Math.floor(Math.random() * len), f0 = 380 * Math.pow(5, Math.random()), dur = sr * (0.003 + Math.random() * 0.009);
        const amp = 0.05 + Math.random() * Math.random() * 0.22;
        let ph = 0;
        for (let j = 0; j < dur * 3; j++) { ph += 6.2832 * f0 * (1 + 0.7 * j / dur) / sr; d[(p + j) % len] += amp * Math.sin(ph) * Math.exp(-j / dur); }
      }
      // khớp hai đầu vòng lặp (không có tiếng "tách")
      for (let i = 0; i < 2000; i++) { const w = i / 2000; d[i] = d[i] * w + d[len - 2000 + i] * (1 - w); }
      const s = ctx.createBufferSource(); s.buffer = b; s.loop = true; s.loopEnd = (len - 2000) / sr;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 110;
      this.waterPan = ctx.createStereoPanner();
      this.waterG = ctx.createGain(); this.waterG.gain.value = 0;
      s.connect(hp).connect(this.waterG).connect(this.waterPan).connect(this.outGain);
      s.start();
    }
    this.waterG.gain.setTargetAtTime(clamp(level, 0, 1) * 0.3, t, 0.35);
    this.waterPan.pan.setTargetAtTime(clamp(pan, -1, 1), t, 0.25);
  }

  // xe lội qua lớp nước tràn: tiếng "xoè" (nhiễu dải giữa, tắt dần) mạnh theo tốc độ
  splash(power = 1) {
    if (!this.ctx || this.mode !== 0) return;
    const ctx = this.ctx, t = ctx.currentTime, dur = 0.35 + 0.45 * Math.min(1, power);
    const s = this._src(this.noise, true);
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 0.6;
    f.frequency.setValueAtTime(900 + 900 * power, t); f.frequency.exponentialRampToValueAtTime(500, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.22 * power, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(this.outGain);
    s.start(t); s.stop(t + dur + 0.05);
  }

  // sấm: tiếng rền trầm (nhiễu nâu qua lowpass) đến sau tia chớp `delay` giây
  thunder(delay = 1.5, power = 1) {
    if (!this.ctx || this.mode !== 0) return;
    const ctx = this.ctx, t = ctx.currentTime + delay;
    const len = ctx.sampleRate * 5;
    const b = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = b.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {            // nhiễu nâu: tích phân nhiễu trắng
      last = (last + (Math.random() * 2 - 1) * 0.06) / 1.02;
      d[i] = last * 3.5;
    }
    const s = ctx.createBufferSource(); s.buffer = b;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(900, t);
    lp.frequency.exponentialRampToValueAtTime(110, t + 4);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.9 * power, t + 0.12);
    g.gain.setTargetAtTime(0.0001, t + 0.3, 1.1);
    s.connect(lp).connect(g).connect(this.outGain);
    s.start(t); s.stop(t + 5);
    // tiếng nổ lách tách ở đầu
    this._noiseHit(t, 0.25, 'bandpass', 700, 0.3 * power, this.outGain);
  }

  // ---- lịch phát nhạc (look-ahead scheduler) ----
  _tick() {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    const sixteenth = 60 / this.bpm / 4;
    while (this.nextTime < ctx.currentTime + 0.3) {
      const swing = this.step % 2 ? sixteenth * 0.2 : 0;
      this._step(this.step, this.nextTime + swing);
      this.nextTime += sixteenth;
      if (++this.step === 16) { this.step = 0; this.bar++; }
    }
  }

  _step(i, t) {
    if (i === 0 && this.bar % 4 === 0) {
      this.prog = pick(PROGRESSIONS);
      this.pattern = pick(COMP_PATTERNS);
    }
    const c = this.prog[this.bar % 4];

    if (this.pattern.includes(i)) {
      const vel = i === 0 ? 1 : rand(0.55, 0.8);
      c.n.forEach((n, j) => this._epiano(n, t + j * 0.014 + rand(0, 0.008), vel, i === 0 ? 2.4 : 1.2));
    }
    if (i === 0) this._bass(c.r, t, 1.7);
    if (i === 10 || (i === 14 && Math.random() < 0.4)) this._bass(c.r + (Math.random() < 0.5 ? 0 : 7), t, 0.8);

    // trống
    if (i === 0 || i === 10 || (i === 7 && Math.random() < 0.3)) this._kick(t);
    if (i === 4 || i === 12) this._snare(t);
    if (i % 2 === 0) this._hat(t, i % 4 === 2 ? 0.8 : 0.5, i === 14 && Math.random() < 0.25);

    // giai điệu thưa
    if (i % 2 === 0 && this.bar - this.lastMel > 0 && Math.random() < 0.16) {
      this._pluck(pick(PENTA), t, rand(0.5, 0.9));
      this.lastMel = this.bar + (Math.random() < 0.5 ? 0 : -1);
    }
  }

  _osc(type, f, t, dur, detune = 0) {
    const o = this.ctx.createOscillator();
    o.type = type; o.frequency.value = f; o.detune.value = detune;
    this.wowGain.connect(o.detune);
    o.start(t); o.stop(t + dur);
    return o;
  }

  _epiano(note, t, vel, dur) {
    const ctx = this.ctx, f = midi(note);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vel * 0.075, t + 0.012);
    g.gain.exponentialRampToValueAtTime(vel * 0.03, t + 0.4);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    this._osc('sine', f, t, dur + 0.1).connect(g);
    this._osc('triangle', f, t, dur + 0.1, rand(3, 8)).connect(g);
    const tg = ctx.createGain();
    tg.gain.setValueAtTime(vel * 0.022, t);
    tg.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
    this._osc('sine', f * 4, t, 0.3).connect(tg).connect(this.pianoBus);
    g.connect(this.pianoBus);
  }

  _bass(note, t, dur) {
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.2, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380;
    this._osc('sine', midi(note), t, dur + 0.1).connect(g);
    this._osc('triangle', midi(note), t, dur + 0.1).connect(g);
    g.connect(lp).connect(this.musicGain);
  }

  _pluck(note, t, vel) {
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vel * 0.06, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2200;
    this._osc('triangle', midi(note), t, 1.2).connect(g);
    g.connect(lp);
    lp.connect(this.pianoBus);
    const send = this.ctx.createGain(); send.gain.value = 0.6;
    lp.connect(send).connect(this.echo);
  }

  _kick(t) {
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.frequency.setValueAtTime(130, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.14);
    g.gain.setValueAtTime(0.5, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
    o.connect(g).connect(this.drumBus);
    o.start(t); o.stop(t + 0.35);
  }

  _noiseHit(t, dur, type, freq, gain, dest = this.drumBus) {
    const s = this._src(this.noise, false);
    const f = this.ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(dest);
    s.start(t, Math.random()); s.stop(t + dur + 0.02);
  }

  _snare(t) {
    this._noiseHit(t, 0.16, 'bandpass', 1900, 0.28);
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.frequency.value = 185;
    g.gain.setValueAtTime(0.16, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
    o.connect(g).connect(this.drumBus);
    o.start(t); o.stop(t + 0.12);
  }

  _hat(t, vel, open) {
    this._noiseHit(t, open ? 0.2 : 0.045, 'highpass', 7500, 0.12 * vel * rand(0.7, 1));
  }
}
