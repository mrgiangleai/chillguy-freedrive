import { ROAD, CITY, IC, tollS, tollIndex, camS, camIndex } from './road.js';

// Bản đồ tròn (góc phải giữa màn hình): vẽ 2D từ dữ liệu thật của thế giới — đường (road.pts), đường ngang + khối nhà map Phố,
// nút giao / nhánh / đường gom / nhà / trạm thu phí map Đại lộ, xe khác, xe mình (mũi tên). Thu nhỏ: bám xe, quay theo hướng xe
// (hướng đi luôn lên trên), vẽ ~8 lần/giây. Bấm vào: phóng to giữa màn hình, hướng Bắc lên trên, kéo để di chuyển (pan), lăn chuột /
// chụm 2 ngón để zoom, nút ◎ về lại xe, nút × (hoặc Esc / bấm ra ngoài) để thu nhỏ.
const BG = {
  nyc: '#e3e0d8', sgn: '#e6e2d6', reed: '#cdbb84', forest: '#7fa05a', mountain: '#8fae6a', meadow: '#8db86a', sea: '#7fb6d6', city: '#e8e5df', avenue: '#9cc27a',
};
const ROADC = { city: '#ffffff', avenue: '#f6cf6a', nyc: '#fbe3a0', sgn: '#fbe3a0' };

export class Minimap {
  // src: { road, mapId(), player() => {x, z, th}, cars() => [[x, z]], city, avenue }
  constructor(src) {
    this.src = src;
    const el = this.el = document.createElement('div');
    el.id = 'minimap';
    el.innerHTML = '<canvas></canvas><div class="mm-n">N</div><button class="mm-center" title="Về vị trí xe">◎</button><button class="mm-close" title="Thu nhỏ (Esc)">×</button>';
    document.body.appendChild(el);
    this.cv = el.querySelector('canvas');
    this.g = this.cv.getContext('2d');
    this.big = false;
    this.zoom = 0.75;            // px CSS / m khi thu nhỏ
    this.bigZoom = 0.45;
    this.center = null;          // tâm khi đã kéo (null = bám xe)
    this.t = 0;
    this.ptrs = new Map();
    el.addEventListener('click', (e) => { if (!this.big && !e.target.closest('button')) this.open(); });
    el.querySelector('.mm-close').onclick = (e) => { e.stopPropagation(); this.close(); };
    el.querySelector('.mm-center').onclick = (e) => { e.stopPropagation(); this.center = null; this._draw(); };
    el.addEventListener('pointerdown', (e) => {
      if (!this.big || e.target.closest('button')) return;
      e.preventDefault(); el.setPointerCapture(e.pointerId);
      this.ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    });
    el.addEventListener('pointermove', (e) => {
      if (!this.big || !this.ptrs.has(e.pointerId)) return;
      const prev = this.ptrs.get(e.pointerId), cur = { x: e.clientX, y: e.clientY };
      if (this.ptrs.size === 1) {                               // kéo: dời tâm bản đồ
        const P = this.src.player();
        this.center ||= { x: P.x, z: P.z };
        this.center.x -= (cur.x - prev.x) / this.bigZoom; this.center.z -= (cur.y - prev.y) / this.bigZoom;
      } else if (this.ptrs.size === 2) {                        // chụm 2 ngón: zoom theo tỉ lệ khoảng cách
        const [a, b] = [...this.ptrs.entries()].map(([id, p]) => (id === e.pointerId ? cur : p));
        const [a0, b0] = [...this.ptrs.entries()].map(([, p]) => p);
        const d1 = Math.hypot(a.x - b.x, a.y - b.y), d0 = Math.hypot(a0.x - b0.x, a0.y - b0.y);
        if (d0 > 10) this._zoomBy(d1 / d0);
      }
      this.ptrs.set(e.pointerId, cur);
      this._draw();
    });
    const up = (e) => this.ptrs.delete(e.pointerId);
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    el.addEventListener('wheel', (e) => { if (!this.big) return; e.preventDefault(); e.stopPropagation(); this._zoomBy(Math.exp(-e.deltaY * 0.0015)); this._draw(); }, { passive: false });
    window.addEventListener('keydown', (e) => { if (this.big && e.code === 'Escape') this.close(); });
    window.addEventListener('pointerdown', (e) => { if (this.big && !el.contains(e.target)) this.close(); });
    window.addEventListener('resize', () => this._size());
    this._size();
  }

  open() { this.big = true; this.center = null; this.el.classList.add('big'); document.body.classList.add('mapopen'); this._size(); this._draw(); }
  close() { this.big = false; this.center = null; this.ptrs.clear(); this.el.classList.remove('big'); document.body.classList.remove('mapopen'); this._size(); this._draw(); }
  _zoomBy(f) { this.bigZoom = Math.min(4, Math.max(0.02, this.bigZoom * f)); }
  _size() {
    const r = this.el.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    this.W = r.width || 160; this.cv.width = Math.round(this.W * dpr); this.cv.height = Math.round(this.W * dpr); this.dpr = dpr;
  }

  update(dt) {
    if (!this.src.visible()) { this.el.classList.add('off'); return; }
    this.el.classList.remove('off');
    this.t -= dt;
    if (this.t > 0 && !this.big) return;
    this.t = 0.12;
    this._draw();
  }

  _draw() {
    const g = this.g, W = this.W, R = W / 2, S = this.src, N = S.nyc?.(), D = S.sgn?.(), id = N ? 'nyc' : D ? 'sgn' : S.mapId(), road = S.road, P = S.player();
    const big = this.big, z = big ? this.bigZoom : this.zoom;
    const cx = big && this.center ? this.center.x : P.x, cz = big && this.center ? this.center.z : P.z;
    const rot = big ? 0 : P.th;                                // thu nhỏ: hướng xe lên trên
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    g.clearRect(0, 0, W, W);
    g.save();
    g.beginPath(); g.arc(R, R, R - 1, 0, Math.PI * 2); g.clip();
    g.fillStyle = BG[id] || '#9cb87a'; g.fillRect(0, 0, W, W);
    g.translate(R, R); g.rotate(rot); g.scale(z, z); g.translate(-cx, -cz);
    const span = R / z * 1.5;                                  // bán kính vùng thấy được (m) có dư
    const lw = (m, minPx) => Math.max(m, minPx / z);           // bề rộng nét (m) tối thiểu theo px
    const line = (pts, width, color, minPx = 1.2) => {
      if (pts.length < 2) return;
      g.strokeStyle = color; g.lineWidth = lw(width, minPx); g.lineCap = 'round'; g.lineJoin = 'round';
      g.beginPath(); g.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]); g.stroke();
    };
    const sNow = S.s();
    // ---- đường chính (đoạn trong vùng thấy) ----
    const pts = road.pts, step = ROAD.step, i0 = Math.max(0, Math.floor((sNow - span * 1.6 - Math.hypot(cx - P.x, cz - P.z)) / step)), i1 = Math.min(pts.length - 1, Math.ceil((sNow + span * 1.6 + Math.hypot(cx - P.x, cz - P.z)) / step));
    const stride = Math.max(1, Math.floor(2 / z / step));
    const main = [];
    for (let i = i0; i <= i1; i += stride) main.push([pts[i].x, pts[i].z]);
    const hw = N ? CITY.hw : ROAD.halfWidth;
    // ---- map Phố: khối nhà hai bên + đường ngang ----
    if (id === 'city' && S.city && !N) {
      const n0 = road.junctionIndex(sNow - span * 1.6), n1 = road.junctionIndex(sNow + span * 1.6);
      const blocks = []; for (let i = i0; i <= i1; i += stride) blocks.push([pts[i].x, pts[i].z]);
      line(blocks, 2 * 120, '#d5d1c8', 0);                      // dải nhà (tới ~120 m mỗi bên)
      for (let n = n0; n <= n1; n++) {
        const F = S.city._frame(road.junction(n));
        line([[F.x - F.rx * 180, F.z - F.rz * 180], [F.x + F.rx * 180, F.z + F.rz * 180]], CITY.side * 2 + 2, '#ffffff', 1.5);
      }
    }
    // ---- map New York: nhà thật (footprint OSM) + mạng phố thật (bề rộng thật) ----
    if (N) {
      const near = (p) => Math.abs(p[0] - cx) < span + 150 && Math.abs(p[1] - cz) < span + 150;
      g.fillStyle = '#c9c4b9';
      for (const [, , , p] of N.bld || []) {
        if (!near(p)) continue;
        g.beginPath(); g.moveTo(p[0], p[1]); for (let i = 2; i < p.length; i += 2) g.lineTo(p[i], p[i + 1]); g.closePath(); g.fill();
      }
      for (const [w, ped, , p] of N.streets || []) {
        let hit = false; for (let i = 0; i < p.length && !hit; i += 2) hit = Math.abs(p[i] - cx) < span + 50 && Math.abs(p[i + 1] - cz) < span + 50;
        if (!hit) continue;
        const q = []; for (let i = 0; i < p.length; i += 2) q.push([p[i], p[i + 1]]);
        line(q, w, ped ? '#f1ece2' : '#ffffff', 1);
      }
    }
    // ---- map Đại lộ: đường ngang, nhánh, đường gom, nhà, trạm thu phí ----
    if (id === 'avenue' && S.avenue) {
      for (const Rv of (S.avenue.rivers || new Map()).values()) {    // sông: dải xanh theo độ uốn
        if (Math.abs(Rv.P.x - cx) > span + 3000 || Math.abs(Rv.P.z - cz) > span + 3000) continue;
        const pts = [];
        for (let u = -3000; u <= 3000; u += 60) { const m = (Rv.mA ?? 40) * Math.sin(u / 300); pts.push([Rv.P.x + Rv.rx * u + Rv.fx * m, Rv.P.z + Rv.rz * u + Rv.fz * m]); }
        line(pts, Rv.hw * 2, '#6fa8d6', 3);
      }
      for (const D of (S.avenue.decks || new Map()).values()) for (const C of D.creeks || []) {   // suối / kênh dưới cầu cạn (HLG)
        if (!C.Pc || Math.abs(C.Pc.x - cx) > span + 500 || Math.abs(C.Pc.z - cz) > span + 500) continue;
        const L = C.len ?? 400;
        line([[C.Pc.x - C.rx * L, C.Pc.z - C.rz * L], [C.Pc.x + C.rx * L, C.Pc.z + C.rz * L]], C.hw * 2, '#6fa8d6', 2);
      }
      for (const F of (S.avenue.flys || new Map()).values()) {       // quốc lộ 4 làn dưới cầu cao
        if (Math.abs(F.P.x - cx) > span + 700 || Math.abs(F.P.z - cz) > span + 700) continue;
        line([[F.P.x - F.rx * F.crossLen, F.P.z - F.rz * F.crossLen], [F.P.x + F.rx * F.crossLen, F.P.z + F.rz * F.crossLen]], F.crossHW * 2, '#ffffff', 2);
      }
      for (const I of S.avenue.ics.values()) {
        if (Math.abs(I.P.x - cx) > span + 600 || Math.abs(I.P.z - cz) > span + 600) continue;
        for (const L of I.lanes) line(L.pts.map((q) => [q.x, q.z]), 4.2, '#ffffff', 1.2);
        line([[I.P.x - I.rx * IC.crossLen, I.P.z - I.rz * IC.crossLen], [I.P.x + I.rx * IC.crossLen, I.P.z + I.rz * IC.crossLen]], IC.crossHW * 2, '#ffffff', 1.6);
        for (const Rm of I.ramps) line(Rm.pts.filter((q) => Math.abs(q.u) > 9).map((q) => [q.x, q.z]), 5, '#fbe3a0', 1.3);
        g.fillStyle = '#c9b8a6';
        for (const H of I.houses) {
          const q = road.at(I.s + H.t, {}), x = q.x + Math.cos(q.th) * H.u, zz = q.z - Math.sin(q.th) * H.u;
          g.save(); g.translate(x, zz); g.rotate(-q.th); g.fillRect(-H.d / 2, -H.w / 2, H.d, H.w); g.restore();
        }
      }
    }
    // ---- map Landmark: cả vòng tuyến (thấy toàn tuyến khi thu nhỏ bản đồ lớn) ----
    const labels = [];                                         // [x, z, chữ, kiểu, hướng (rad, theo thế giới) | null]
    if (D) {
      const BL = S.sgnBld?.();                                 // nhà khu Vinhomes (footprint OSM)
      if (BL) for (const [, cls, , p] of BL) {
        if (Math.abs(p[0] - cx) > span + 200 || Math.abs(p[1] - cz) > span + 200) continue;
        g.fillStyle = cls === 0 ? '#b9b3a6' : '#cfc8bb';
        g.beginPath(); g.moveTo(p[0], p[1]); for (let i = 2; i < p.length; i += 2) g.lineTo(p[i], p[i + 1]); g.closePath(); g.fill();
      }
      const st = Math.max(1, Math.round(2 / z / D.step)), loop = [];
      for (let i = 0; i < D.x.length; i += st) loop.push([D.x[i], D.z[i]]);
      loop.push([D.x[0], D.z[0]]);
      line(loop, hw * 2 + 1.5, 'rgba(60,60,60,0.35)', 3);
      line(loop, hw * 2, ROADC.sgn, 2.2);
      const at = (s) => { const i = Math.round((((s % D.length) + D.length) % D.length) / D.step); return [D.x[i], D.z[i], D.x[Math.min(D.x.length - 1, i + 2)] - D.x[Math.max(0, i - 2)], D.z[Math.min(D.x.length - 1, i + 2)] - D.z[Math.max(0, i - 2)]]; };
      // tên đường dọc tuyến: chia đều mỗi đoạn tên, cách nhau ~200 px trên màn hình (250 m – 1 km) => phóng to vẫn thấy tên
      const gap = Math.min(1000, Math.max(250, 200 / z));
      D.streets.forEach((t, k) => {
        const s1 = D.streets[k + 1]?.s0 ?? D.length + D.streets[0].s0, len = s1 - t.s0, n = Math.max(1, Math.round(len / gap));
        for (let j = 0; j < n; j++) { const [x, zz, dx, dz] = at(t.s0 + len * (j + 0.5) / n); labels.push([x, zz, t.name, 'street', Math.atan2(dz, dx)]); }
      });
      if (big && z > 0.25) for (const j of D.junctions) { const [x, zz, dx, dz] = at(j.s); labels.push([x, zz, j.names[0], 'cross', Math.atan2(dz, dx) + Math.PI / 2]); }
      for (const A of D.areas) labels.push([A.x, A.z, A.name, 'area', null]);
      // Landmark 81: ô vuông đậm
      const [lx, lz] = D.landmark81, q = Math.max(9, 7 / z);
      g.fillStyle = '#3b4a5a'; g.strokeStyle = '#fff'; g.lineWidth = Math.max(1.5, 1.5 / z);
      g.fillRect(lx - q / 2, lz - q / 2, q, q); g.strokeRect(lx - q / 2, lz - q / 2, q, q);
      labels.push([lx, lz, 'Landmark 81', 'lm', null]);
    }
    // viền + mặt đường chính
    line(main, hw * 2 + 1.5, 'rgba(60,60,60,0.35)', 3);
    line(main, hw * 2, ROADC[id] || '#f3f1ea', 2.2);
    if (id === 'avenue') {                                       // dải phân cách + trạm thu phí
      line(main, 0.8, '#b8a060', 0);
      for (let k = tollIndex(sNow - span * 1.6); k <= tollIndex(sNow + span * 1.6); k++) {
        if (Math.abs(tollS(k) - sNow) > span * 1.6 + 100) continue;
        const q = road.at(tollS(k), {});
        g.save(); g.translate(q.x, q.z); g.rotate(-q.th); g.fillStyle = '#2f5fae'; g.fillRect(-hw - 2, -12, hw * 2 + 4, 24); g.restore();
      }
      for (let k = camIndex(sNow - span * 1.6); k <= camIndex(sNow + span * 1.6); k++) {   // camera bắn tốc độ: chấm đỏ viền trắng bên phải
        const q = road.at(camS(k), {}), r = Math.max(5, 6 / z);
        g.beginPath(); g.arc(q.x + Math.cos(q.th) * (hw + r), q.z - Math.sin(q.th) * (hw + r), r, 0, Math.PI * 2);
        g.fillStyle = '#d93025'; g.strokeStyle = '#fff'; g.lineWidth = Math.max(1.5, 2 / z); g.fill(); g.stroke();
      }
    }
    // ---- xe khác ----
    g.fillStyle = '#4a4f57';
    const cr = Math.max(1.6, 2.4 / z);
    for (const [x, zz] of S.cars()) { if (Math.abs(x - cx) > span || Math.abs(zz - cz) > span) continue; g.beginPath(); g.arc(x, zz, cr, 0, Math.PI * 2); g.fill(); }
    // ---- xe mình: mũi tên xanh có viền trắng ----
    g.save(); g.translate(P.x, P.z); g.rotate(-P.th); g.scale(1 / z, 1 / z);
    g.beginPath(); g.moveTo(0, -11); g.lineTo(7.5, 8); g.lineTo(0, 4); g.lineTo(-7.5, 8); g.closePath();
    g.fillStyle = '#1a73e8'; g.strokeStyle = '#fff'; g.lineWidth = 2.2; g.fill(); g.stroke();
    g.restore();
    g.restore();
    // ---- chữ trên bản đồ (map Landmark): vẽ theo toạ độ màn hình để cỡ chữ không đổi khi zoom, luôn đứng thẳng ----
    if (labels.length) {
      g.save();
      g.beginPath(); g.arc(R, R, R - 1, 0, Math.PI * 2); g.clip();
      const cs = Math.cos(rot), sn = Math.sin(rot), F = big ? 1 : 0.85;
      const STY = { street: [600, 11, '#3a3424', 'rgba(255,250,235,0.9)'], cross: [400, 10, '#6b6658', 'rgba(255,250,235,0.85)'],
        area: [700, 12, '#8a4b2a', 'rgba(255,250,235,0.9)'], lm: [700, 11, '#1d2a38', 'rgba(255,255,255,0.95)'] };
      const placed = [], PRI = { lm: 0, area: 1, street: 2, cross: 3 };
      labels.sort((p, q) => PRI[p[3]] - PRI[q[3]]);                 // chữ quan trọng đặt trước, chữ sau chồng lên thì bỏ
      for (const [x, zz, text, kind, ang] of labels) {
        if (!big && kind === 'cross') continue;
        const dx = (x - cx) * z, dz = (zz - cz) * z, X = R + dx * cs - dz * sn, Y = R + dx * sn + dz * cs;
        if (Math.hypot(X - R, Y - R) > R - 8) continue;
        const [wt, px, fill, halo] = STY[kind], size = Math.round(px * F);
        g.font = `${kind === 'area' ? 'italic ' : ''}${wt} ${size}px system-ui, sans-serif`;
        const w = g.measureText(text).width;
        if (Math.hypot(X - R, Y - R) + w / 2 + 4 > R) continue;     // nhãn dài sát mép: bỏ (không để vòng tròn cắt mất chữ)
        // tránh chồng chữ (hộp bao gần đúng)
        const box = [X - w / 2 - 2, Y - size, X + w / 2 + 2, Y + size];
        if (placed.some((b) => b[0] < box[2] && box[0] < b[2] && b[1] < box[3] && box[1] < b[3])) continue;
        placed.push(box);
        g.save(); g.translate(X, Y + (kind === 'lm' ? -Math.max(9, 7) - 4 : 0));
        if (ang !== null) { let a = ang + rot; while (a > Math.PI / 2) a -= Math.PI; while (a < -Math.PI / 2) a += Math.PI; g.rotate(a); }
        g.textAlign = 'center'; g.textBaseline = 'middle';
        g.lineWidth = 3; g.strokeStyle = halo; g.strokeText(text, 0, 0);
        g.fillStyle = fill; g.fillText(text, 0, 0);
        g.restore();
      }
      g.restore();
    }
    // vòng viền + chữ N theo hướng Bắc
    g.strokeStyle = 'rgba(255,255,255,0.75)'; g.lineWidth = 2; g.beginPath(); g.arc(R, R, R - 1.5, 0, Math.PI * 2); g.stroke();
    const n = this.el.querySelector('.mm-n'), a = rot;            // Bắc (−z) sau khi quay
    n.style.transform = `translate(${R - 7 + Math.sin(a) * (R - 13)}px, ${R - 8 - Math.cos(a) * (R - 13)}px)`;
    // thước tỉ lệ khi phóng to
    if (big) {
      const m = [10, 20, 50, 100, 200, 500, 1000, 2000, 5000].find((v) => v * z > 60) || 5000, px = m * z;
      g.fillStyle = 'rgba(0,0,0,0.45)'; g.fillRect(R - px / 2 - 8, W - 34, px + 16, 20);
      g.strokeStyle = '#fff'; g.lineWidth = 2; g.beginPath(); g.moveTo(R - px / 2, W - 20); g.lineTo(R + px / 2, W - 20); g.stroke();
      g.fillStyle = '#fff'; g.font = '11px system-ui, sans-serif'; g.textAlign = 'center'; g.fillText(m >= 1000 ? m / 1000 + ' km' : m + ' m', R, W - 24);
    }
  }
}
