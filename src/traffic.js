import * as THREE from 'three';
import { TrafficPolicy } from './traffic-policy.js';
import { ROAD } from './road.js';
import { TRAFFIC, trafficSpeed, trafficCurveSpeed, stepTraffic } from './traffic-ai.js';
import { createHeadlights, placeHeadlights, updateHeadlights, lampsFor } from './headlights.js';

// Xe ngược chiều: 10–25 giây, tối đa 2; cùng chiều: 25–60 giây, tối đa 1 (ít xe => nhẹ máy). Tốc độ 50–200 km/h.
// Xe ngược chiều xuất hiện xa phía trước
// ở làn bên kia rồi chạy ngang qua. Model lấy từ các xe có sẵn (khác xe đang lái), tải ngầm sau khi vào game.
// Phát hiện người / xe trong 30 m, tìm khoảng trống để né và phanh nếu không đủ chỗ.
// Đèn pha: mỗi NPC chỉ có quầng; chùm sáng thật là MỘT cặp SpotLight dùng chung, gắn vào NPC gần người chơi nhất
// (số đèn trong cảnh luôn cố định => không biên dịch lại shader mỗi khi xe xuất hiện/biến mất).
// Đổi làn / né: thân xe xoay theo hướng chạy thực (vận tốc ngang / tốc độ tiến), bánh trước đánh lái.
const SPAWN_AHEAD = 430;
const NPC_LAMP = 0.24;                // NPC: đèn pha + quầng trước còn 24% xe người chơi (đèn hậu giữ 60%)
const LANE = 1.8;                     // xe ngược chiều chạy hơi lệch vào giữa đường (như xe mình)
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

export class Traffic {
  constructor(scene, cars) {
    this.scene = scene;
    this.cars = cars;
    this.pool = [];            // xe đã tải: { root, model, wheels, dim, busy }
    this.active = [];
    this.policy = new TrafficPolicy(); this.ctrl = {lane:null,maxV:Infinity};
    this.timer = 4 + Math.random() * 6;
    this.sameTimer = TRAFFIC.sameGapMin + Math.random() * (TRAFFIC.sameGapMax - TRAFFIC.sameGapMin);
    this.loading = false;
    this.wait = 6;              // chờ vài giây sau khi vào game rồi mới tải ngầm
    this._p = {}; this._q = {};
    // cặp SpotLight dùng chung cho NPC (luôn nằm trong cảnh, tắt bằng intensity 0)
    this.beamRoot = new THREE.Group();
    this.beam = createHeadlights(this.beamRoot, null, { glows: false });
    this.beamFor = null;
    scene.add(this.beamRoot);
  }

  async _load(excludeId) {
    this.loading = true;
    const defs = this.cars.list.filter(d => d.id !== excludeId).sort(() => Math.random() - 0.5);
    for (let i = 0; i < TRAFFIC.maxActive + TRAFFIC.sameMax && defs.length; i++) {
      const def = defs[i % defs.length];
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
    const d = entry.dim;
    const sprite = (color, size) => {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.cars.softTex, color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
      }));
      sp.scale.set(size * 1.35, size * 0.7, 1);                  // quầng mềm, dẹt ngang (như đèn xe mình)
      root.add(sp);
      return sp;
    };
    const headlights = createHeadlights(root, this.cars.softTex, { spots: false });
    placeHeadlights(headlights, d);
    for (const w of entry.wheels) { w.front = w.pivot.position.z < 0; w.pivot.rotation.order = 'YXZ'; }
    const [tx, ty, tz] = lampsFor(d).tail;                         // quầng đèn hậu đúng tâm bóng đèn hậu của model
    const tails = [-1, 1].map((k) => { const s = sprite(0xff2412, 1.6); s.position.set(k * tx, ty, tz + 0.03); return s; });
    this.scene.add(root);
    return { root, wheels: entry.wheels, dim: d, headlights, tails, busy: false, s: 0, v: 0, d: 0 };
  }

  // s: quãng đường xe mình; playerD: lệch ngang của xe mình (+ = bên phải); lamps 0..1; excludeId: xe đang lái
  update(dt, s, playerD, road, lamps, excludeId, obstacles = [], audio = null) {
    if (!this.pool.length) {
      if (!this.loading && (this.wait -= dt) <= 0) this._load(excludeId);
      return;
    }
    this.timer -= dt; this.sameTimer -= dt;
    for (const direction of [-1, 1]) {
      const same = direction === 1, timer = same ? 'sameTimer' : 'timer';
      if (this[timer] > 0) continue;
      const min = same ? TRAFFIC.sameGapMin : TRAFFIC.gapMin;
      const max = same ? TRAFFIC.sameGapMax : TRAFFIC.gapMax;
      this[timer] = min + Math.random() * (max - min);
      const free = this.pool.filter(v => !v.busy);
      if (!free.length || this.active.filter(v => (v.direction ?? -1) === direction).length >= (same ? TRAFFIC.sameMax : TRAFFIC.maxActive)) continue;
      const v = free[Math.floor(Math.random() * free.length)];
      const lane = playerD >= 0 ? LANE : -LANE;
      // Xe cùng chiều vào từ phía sau để vượt xe người chơi; không sinh chồng lên xe khác.
      v.s = same ? Math.max(10, s - 80 - Math.random() * 30) : s + SPAWN_AHEAD + Math.random() * 80;
      if (this.active.some(o => Math.abs(o.s - v.s) < 60) || Math.abs(v.s - s) < 40) continue;
      v.direction = direction; v.busy = true;
      v.cruise = v.v = trafficSpeed(); v.d = v.baseD = same ? lane : -lane;
      v.heard = false; v.policy = null; v.inCurve = false; v.avoidFor = null; v.avoidD = v.d; v.latV = 0; v.yaw = 0; v.root.visible = true;
      this.active.push(v);
    }
    const snapshot = [...obstacles, ...this.active.map(v => ({ id: v, s: v.s, d: v.d, speed: v.v, direction: v.direction ?? -1, width: v.dim.width, length: v.dim.length }))];
    const player = obstacles.find(o => o.id === 'player');
    Object.assign(this.policy.player, {s, d:playerD, v:player?.speed || 0, len:player?.length || this.cars.dim?.length || 4.7,
      w:player?.width || this.cars.dim?.width || 2, home:this.playerHome ?? (playerD >= 0 ? 1.5 : -1.5)});
    this.policy.active = this.active.map(v => {
      v.policy ||= {state:'cruise',target:null};
      // xe ngược chiều không vượt nhau: chỉ bám sau, giảm tốc chờ
      return Object.assign(v.policy,{s:v.s,d:v.d,v:v.v,dir:v.direction ?? -1,len:v.dim.length,w:v.dim.width,home:v.baseD,noOvertake:(v.direction ?? -1) < 0});
    });
    this.policy.active.push(...obstacles.filter(o => o.id === 'person').map(o => ({s:o.s,d:o.d,v:o.speed || 0,dir:0,len:o.length,w:o.width,player:true,home:o.d})));
    const pc = this.policy._decide(this.policy.player, this.playerGoal ?? player?.speed ?? 0);
    this.ctrl.lane = pc.dT; this.ctrl.maxV = pc.vT;
    const p = this._p, q = this._q;
    for (let i = this.active.length - 1; i >= 0; i--) {
      const v = this.active[i];
      const curveSpeed = trafficCurveSpeed(v, road);
      const decision = this.policy._decide(v.policy, curveSpeed);
      const canChooseLane = d => d * v.baseD >= 0 || (decision.dT * v.baseD < 0 && this.policy._sideClear(v.policy, d));
      const next = stepTraffic(v, snapshot, ROAD.halfWidth, dt, Math.min(curveSpeed,decision.vT), canChooseLane);
      v.s = next.s; v.d = next.d; v.v = next.v; v.avoiding = next.avoiding; v.latV = next.latV;
      if (v.s < s - (v.direction === 1 ? 180 : 90) || (v.direction === 1 && v.s > s + 750)) { v.busy = false; v.root.visible = false; this.active.splice(i, 1); continue; }
      if (audio && player) {
        const x=v.s-s, vr=v.v*(v.direction ?? -1)-player.speed, rel=Math.abs(vr);
        if (Math.abs(x)>70) v.heard=false;
        if (!v.heard && rel>2 && x*vr<0 && Math.abs(v.d-playerD)<7 && -x/vr<audio.passDur(rel)*0.5) {
          v.heard=true; audio.passBy(rel,THREE.MathUtils.clamp((v.d-playerD)/4,-.8,.8),Math.abs(v.d-playerD));
        }
      }
      road.at(v.s, p);
      const yA = road.at(v.s + 2.5, q).y, yB = road.at(v.s - 2.5, q).y;
      v.root.position.set(p.x + Math.cos(p.th) * v.d, p.y, p.z - Math.sin(p.th) * v.d);
      const direction = v.direction ?? -1;
      // thân xe xoay theo hướng chạy thực khi đổi làn (vận tốc ngang so với tốc độ tiến), mượt dần
      const yawT = clamp(Math.atan2(v.latV || 0, Math.max(3, v.v)), -0.35, 0.35);
      v.yaw = (v.yaw || 0) + (yawT - (v.yaw || 0)) * (1 - Math.exp(-dt * 8));
      v.root.rotation.set(-direction * Math.atan2(yB - yA, 5), p.th + (direction === -1 ? Math.PI : 0) - direction * v.yaw, 0, 'YXZ');
      const steer = clamp(-direction * v.yaw * 1.8, -0.4, 0.4);      // bánh trước đánh lái cùng chiều xoay thân xe
      for (const w of v.wheels) { w.pivot.rotation.x += direction * (v.v * dt) / w.radius; if (w.front) w.pivot.rotation.y = steer; }
      updateHeadlights(v.headlights, v.root, this.cars.viewer, lamps * NPC_LAMP);
      for (const t of v.tails) t.material.opacity = (0.25 + 0.6 * lamps) * 0.6;
    }
    this._beam(s, lamps);
  }

  // chùm sáng thật: gắn cặp SpotLight vào NPC gần xe người chơi nhất (trong 300 m)
  _beam(s, lamps) {
    let best = null, bd = 300;
    for (const v of this.active) { const d = Math.abs(v.s - s); if (d < bd) { bd = d; best = v; } }
    if (best !== this.beamFor) { this.beamFor = best; if (best) placeHeadlights(this.beam, best.dim); }
    if (best) {
      best.root.updateMatrixWorld();
      best.root.matrixWorld.decompose(this.beamRoot.position, this.beamRoot.quaternion, this.beamRoot.scale);
    }
    updateHeadlights(this.beam, this.beamRoot, null, best ? lamps * NPC_LAMP : 0);
  }
}
