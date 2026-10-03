import * as THREE from 'three';
import { CARS } from './config.js';

// Giao thông: xe ngược chiều + xe cùng chiều (nhanh hơn đi từ phía sau tới / chậm hơn ở phía trước), thưa thớt, ngẫu nhiên.
// Mọi xe (kể cả xe người chơi đang tự lái) dùng chung một luật:
//  - xe phía trước cùng làn chạy chậm hơn => muốn vượt. Chỉ sang làn bên kia khi trong làn đó, từ xe mình tới 50 m phía trước
//    xe bị vượt KHÔNG có xe nào, và xe ngược chiều (nếu có, xa hơn) không kịp tới trước khi vượt xong. Không được thì
//    chạy chậm phía sau chờ (giữ khoảng cách theo tốc độ).
//  - đang vượt mà thấy nguy hiểm: còn ở sau xe bị vượt thì bỏ vượt, lùi về sau; đã ngang / vượt quá nửa thì tăng tốc vượt nốt.
//  - lớp an toàn: bất kỳ xe nào chắn trước mặt trong làn đang chạy (cùng chiều: bám theo; ngược chiều: phanh / tránh sang
//    làn trống) => không bao giờ đi xuyên qua nhau. Chỉ sang làn khi bên cạnh trống.
// Toạ độ theo đường: s (quãng đường), d (lệch ngang, + = bên phải chiều chạy của người chơi), dir = +1 cùng chiều / -1 ngược chiều.
// Mỗi khi có xe lướt qua xe người chơi: tiếng "vèo" (to nhỏ theo tốc độ tương đối) — audio.passBy.
const MAX_ACTIVE = 3;
const LANE_R = 1.5;                   // làn của chiều người chơi (khớp LANE_D trong main.js)
const LANE_L = -1.8;                  // làn ngược chiều (hơi lệch vào giữa)
const SIGHT = 50;                     // tầm nhìn tối thiểu phía trước xe bị vượt (m)
const MARGIN = 8;                     // vượt xong phải cách xe bị vượt (m) mới về làn
const LAT_SPEED = 2.4;                // tốc độ chuyển làn (m/s)

const ownLane = (dir) => (dir > 0 ? LANE_R : LANE_L);
const otherLane = (dir) => (dir > 0 ? LANE_L : LANE_R);
// làn của xe / làn để vượt (xe người chơi: làn đang giữ `home`, làn vượt là phía bên kia)
const laneOwn = (A) => (A.player ? A.home : ownLane(A.dir));
const laneOther = (A) => (A.player ? -A.home : otherLane(A.dir));
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

function poolTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 112, 4, 32, 96, 100);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.45, 'rgba(255,255,255,0.35)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 128);
  return new THREE.CanvasTexture(c);
}

export class Traffic {
  constructor(scene, cars) {
    this.scene = scene;
    this.cars = cars;
    this.pool = [];
    this.active = [];
    this.timer = 12 + Math.random() * 15;
    this.loading = false;
    this.wait = 6;              // chờ vài giây sau khi vào game rồi mới tải ngầm
    this.poolTex = poolTexture();
    // điều khiển gợi ý cho xe người chơi (dùng ở khung hình sau): làn muốn chạy (null = giữ làn hiện tại), tốc độ tối đa
    this.ctrl = { lane: null, maxV: Infinity };
    this.player = { s: 0, d: LANE_R, v: 0, dir: 1, len: 4.6, w: 1.9, player: true, state: 'cruise', target: null };
    this._p = {}; this._q = {};
  }

  async _load(excludeId) {
    this.loading = true;
    const defs = CARS.filter((d) => d.id !== excludeId).sort(() => Math.random() - 0.5).slice(0, MAX_ACTIVE);
    for (const def of defs) {
      try {
        const entry = await this.cars._load(def);
        if (this.cars.prepare) { try { await this.cars.prepare(entry.group); } catch { /* bỏ qua */ } }
        this.pool.push(this._vehicle(entry));
      } catch (e) { console.warn('traffic', def.id, e); }
    }
  }

  _vehicle(entry) {
    const root = new THREE.Group();
    root.visible = false;
    root.add(entry.group);
    const d = entry.dim, x = d.width * 0.3, y = Math.min(0.7, d.height * 0.45);
    const sprite = (color, size) => {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.cars.softTex, color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
      }));
      sp.scale.set(size * 1.35, size * 0.7, 1);                  // quầng mềm, dẹt ngang (như đèn xe mình)
      root.add(sp);
      return sp;
    };
    const heads = [-1, 1].map((k) => { const s = sprite(0xffb560, 3.0); s.position.set(k * x, y, -d.length / 2 - 0.05); return s; });
    const tails = [-1, 1].map((k) => { const s = sprite(0xff2412, 1.6); s.position.set(k * x, y + 0.05, d.length / 2 + 0.05); return s; });
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 11).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({
      map: this.poolTex, color: 0xffe2b8, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
      polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    }));
    pool.position.set(0, 0.06, -d.length / 2 - 5.2);
    root.add(pool);
    this.scene.add(root);
    return { root, wheels: entry.wheels, len: d.length, w: d.width, heads, tails, pool, busy: false,
      s: 0, d: 0, v: 0, dir: -1, vDes: 15, latVel: 0, dTarget: 0, state: 'cruise', target: null, brake: 0, heard: false };
  }

  // ---------- hình học làn ----------
  _overlapLat(e, d, w) { return Math.abs(e.d - d) < (e.w + w) / 2 + 0.25; }
  _all() { return [this.player, ...this.active]; }

  // xe gần nhất phía trước A (theo chiều chạy của A) có chiếm làn ngang tại d, trong tầm `range`
  _ahead(A, d, range) {
    let best = null, bd = range;
    for (const e of this._all()) {
      if (e === A || !this._overlapLat(e, d, A.w)) continue;
      const D = (e.s - A.s) * A.dir;
      if (D > 0 && D < bd) { bd = D; best = e; }
    }
    return best ? { e: best, gap: bd - (A.len + best.len) / 2 } : null;
  }

  // tốc độ bám theo xe trước cùng chiều (giữ khoảng cách an toàn theo tốc độ)
  _follow(vl, gap) { return Math.max(0, vl + 0.5 * (gap - (6 + 1.1 * vl))); }

  // làn bên kia có trống để vượt L không (tầm nhìn 50 m sau xe bị vượt + xe ngược chiều không kịp tới)
  _canOvertake(A, L, vOver) {
    const lane = laneOther(A);
    const rel = (L.s - A.s) * A.dir;
    const margin = L.player && L.v < 1 ? 16 : MARGIN;             // vượt xe đang đỗ: chừa chỗ cho người đứng trước xe
    const dv = Math.max(1, vOver - L.v);
    const T = (rel + (A.len + L.len) / 2 + margin) / dv;          // thời gian vượt xong
    for (const e of this._all()) {
      if (e === A || e === L || !this._overlapLat(e, lane, A.w)) continue;
      const D = (e.s - A.s) * A.dir;
      // xe cùng chiều đang lao tới từ phía sau trong làn vượt (nó đang vượt mình): chờ nó qua
      if (D < 0 && e.dir === A.dir && e.v > A.v - 1 && -D - (A.len + e.len) / 2 < 15 + (e.v - A.v) * 4) return false;
      if (D < -(A.len + e.len) / 2 - 3) continue;                  // ở hẳn phía sau
      if (D < rel + L.len / 2 + SIGHT) return false;               // có xe trong tầm nhìn 50 m
      if (e.dir !== A.dir && D - (vOver + e.v) * T < 25) return false;
      if (e.dir === A.dir && e.v < vOver && D - (vOver - e.v) * T < 15) return false;
    }
    return true;
  }

  // đang vượt: còn an toàn không (xe ngược chiều trong làn vượt có kịp tránh)
  _overtakeDanger(A, L, vOver) {
    const lane = laneOther(A);
    const rem = (L.s - A.s) * A.dir + (A.len + L.len) / 2 + MARGIN;
    const T = Math.max(0, rem) / Math.max(1, vOver - L.v);
    for (const e of this._all()) {
      if (e === A || e === L || e.dir === A.dir || !this._overlapLat(e, lane, A.w)) continue;
      const D = (e.s - A.s) * A.dir;
      if (D > 0 && D - (vOver + e.v) * T < 15) return true;
    }
    return false;
  }

  // làn `d` bên cạnh A có trống để chuyển sang: không xe nào chồng theo chiều dọc, và không xe nào đang lao tới
  // (cùng chiều nhanh hơn từ phía sau / ngược chiều phía trước) trong vòng ~3 s
  _sideClear(A, d, extra = 2) {
    for (const e of this._all()) {
      if (e === A || !this._overlapLat(e, d, A.w)) continue;
      const x = (e.s - A.s) * A.dir, gap = Math.abs(x) - (A.len + e.len) / 2;
      if (gap < extra) return false;
      const closing = x < 0 ? (e.dir === A.dir ? e.v - A.v : -1e9) : (e.dir === A.dir ? A.v - e.v : A.v + e.v);
      if (closing > 0 && gap < closing * 3 + 5) return false;
    }
    return true;
  }

  // quyết định của một xe: trả về { dT: làn đích, vT: tốc độ đích }. vDes: tốc độ muốn chạy
  _decide(A, vDes) {
    const own = laneOwn(A), other = laneOther(A);
    let dT = own, vT = vDes;
    const range = 60 + 3 * Math.max(A.v, vDes);
    if (A.state === 'overtake' && A.target && this.active.concat([this.player]).includes(A.target)) {
      const L = A.target, vOver = Math.max(vDes, L.v + 6);
      const ahead = (A.s - L.s) * A.dir;                            // >0: đã vượt lên trước L
      dT = other; vT = vOver;
      if (ahead > (A.len + L.len) / 2 + (L.player && L.v < 1 ? 16 : MARGIN)) {
        A.state = 'cruise'; A.target = null; dT = own; vT = vDes;   // vượt xong => về làn
      } else if (this._overtakeDanger(A, L, vOver)) {
        if (ahead < 0) { A.state = 'cruise'; A.target = null; dT = own; vT = Math.max(0, L.v - 4); }   // bỏ vượt, lùi về sau
        else vT = vOver + 6;                                                                            // vượt nốt
      }
    } else {
      A.state = 'cruise'; A.target = null;
      const f = this._ahead(A, own, range);
      if (f) {
        if (f.e.dir === A.dir) {
          if (f.e.v < vDes - 1.5 && f.gap < 30 + 1.2 * A.v && this._canOvertake(A, f.e, Math.max(vDes, f.e.v + 6))) {
            A.state = 'overtake'; A.target = f.e; dT = other; vT = Math.max(vDes, f.e.v + 6);
          } else vT = Math.min(vT, this._follow(f.e.v, f.gap));
        } else if (!A.player && f.e.player && f.e.home * ownLane(A.dir) > 0 && f.gap < 200 && this._sideClear(A, other, 30)) {
          dT = other;                                                // người chơi chạy hẳn sang làn này: né sang làn trống
        } else if (f.gap < 120) {
          dT = own + (own > 0 ? 0.8 : -0.8);                         // xe đang vượt lấn làn: phanh + nép sát lề nhường
        }
      }
    }
    // lớp an toàn theo vị trí ngang hiện tại (và làn đích)
    for (const d of [A.d, dT]) {
      const f = this._ahead(A, d, range);
      if (!f) continue;
      if (f.e.dir === A.dir) vT = Math.min(vT, this._follow(f.e.v, f.gap));
      else vT = Math.min(vT, Math.max(0, (f.gap - 12) * 0.7));       // đối đầu: phanh, dừng cách ~12 m
    }
    if (dT !== A.d && Math.abs(dT - A.d) > 0.3 && !this._sideClear(A, dT)) dT = A.d;   // bên cạnh có xe: chưa chuyển làn
    return { dT, vT };
  }

  // p: { s, d, v, goal, len, w, home } xe người chơi (home: làn đang giữ); lamps 0..1; audio: để phát tiếng xe lướt qua
  update(dt, p, road, lamps, excludeId, audio) {
    const P = this.player;
    Object.assign(P, { s: p.s, d: p.d, v: p.v, len: p.len, w: p.w, home: p.home });
    if (!this.pool.length) {
      if (!this.loading && (this.wait -= dt) <= 0) this._load(excludeId);
      this.ctrl.lane = null; this.ctrl.maxV = Infinity;
      return;
    }
    this._spawn(dt, P);
    // xe người chơi (tự lái): bám / vượt theo cùng luật
    const pc = this._decide(P, p.goal);
    this.ctrl.lane = pc.dT;
    this.ctrl.maxV = pc.vT;
    // xe máy
    const q = this._p, q2 = this._q;
    for (let i = this.active.length - 1; i >= 0; i--) {
      const v = this.active[i];
      const { dT, vT } = this._decide(v, v.vDes);
      const acc = clamp(vT - v.v, -8 * dt, 2.5 * dt);
      v.brake += ((acc < -0.6 * dt ? 1 : 0) - v.brake) * (1 - Math.exp(-dt * 8));
      v.v = Math.max(0, v.v + acc);
      v.s += v.v * v.dir * dt;
      const want = clamp((dT - v.d) * 1.6, -LAT_SPEED, LAT_SPEED);
      v.latVel += (want - v.latVel) * (1 - Math.exp(-dt * 5));
      v.d += v.latVel * dt;
      // tiếng xe lướt qua xe người chơi: phát sớm nửa tiếng để đỉnh âm trùng lúc ngang nhau
      const x = v.s - P.s, vr = v.v * v.dir - P.v, rel = Math.abs(vr);
      if (Math.abs(x) > 70) v.heard = false;
      if (!v.heard && rel > 2 && x * vr < 0 && Math.abs(v.d - P.d) < 7) {
        const tc = -x / vr, dur = audio ? audio.passDur(rel) : 1.5;
        if (tc < dur * 0.5) { v.heard = true; if (audio) audio.passBy(rel, clamp((v.d - P.d) / 4, -0.8, 0.8), Math.abs(v.d - P.d)); }
      }
      // ra khỏi vùng quanh người chơi => cất đi
      if ((v.dir < 0 && x < -120) || x < -230 || x > 750) { v.busy = false; v.root.visible = false; this.active.splice(i, 1); continue; }
      road.at(v.s, q);
      const yA = road.at(v.s + 2.5, q2).y, yB = road.at(v.s - 2.5, q2).y;
      v.root.position.set(q.x + Math.cos(q.th) * v.d, q.y, q.z - Math.sin(q.th) * v.d);
      const yaw = q.th + (v.dir < 0 ? Math.PI : 0) - v.dir * Math.atan2(v.latVel, Math.max(v.v, 4)) * 0.9;
      v.root.rotation.set(Math.atan2((yA - yB) * v.dir, 5), yaw, 0, 'YXZ');
      for (const w of v.wheels) w.pivot.rotation.x -= (v.v * dt) / w.radius;
      const L = lamps;
      for (const h of v.heads) h.material.opacity = L;
      for (const t of v.tails) t.material.opacity = Math.min(1, 0.25 + 0.6 * L + 0.6 * v.brake);
      v.pool.material.opacity = 0.5 * L;
      v.pool.visible = L > 0.02;
    }
  }

  // thả xe mới (thưa thớt): ngược chiều phía trước / cùng chiều nhanh hơn từ phía sau / cùng chiều chậm hơn ở phía trước
  _spawn(dt, P) {
    this.timer -= dt;
    if (this.timer > 0) return;
    this.timer = 15 + Math.random() * 40;
    const free = this.pool.filter((v) => !v.busy);
    if (!free.length || this.active.length >= MAX_ACTIVE) return;
    const kinds = ['on', 'on'];
    if (P.v < 17) kinds.push('behind');                         // mình chạy chậm: có xe nhanh hơn từ sau tới vượt
    if (P.v > 12) kinds.push('ahead');                          // mình chạy nhanh: gặp xe chậm phía trước
    const kind = kinds[Math.floor(Math.random() * kinds.length)];
    const v = free[Math.floor(Math.random() * free.length)];
    if (kind === 'on') { v.dir = -1; v.s = P.s + 430 + Math.random() * 80; v.vDes = 12 + Math.random() * 9; }
    else if (kind === 'behind') { v.dir = 1; v.s = P.s - 120 - Math.random() * 40; v.vDes = Math.max(P.v + 6, 15) + Math.random() * 6; }
    else { v.dir = 1; v.s = P.s + 330 + Math.random() * 80; v.vDes = Math.min(Math.max(6, P.v - 6), 9 + Math.random() * 6); }
    v.d = v.dTarget = ownLane(v.dir); v.v = v.vDes; v.latVel = 0; v.state = 'cruise'; v.target = null; v.heard = false; v.brake = 0;
    // chỗ thả phải trống
    for (const e of this._all()) if (e !== v && this._overlapLat(e, v.d, v.w) && Math.abs(e.s - v.s) < 50) return;
    v.busy = true; v.root.visible = true;
    this.active.push(v);
  }
}
