import * as THREE from 'three';
import { TrafficPolicy } from './traffic-policy.js';
import { ROAD } from './road.js';
import { TRAFFIC, trafficSpeed, trafficCurveSpeed, stepTraffic } from './traffic-ai.js';
import { createHeadlights, placeHeadlights, updateHeadlights, lampsFor } from './headlights.js';
import { loadCarriage, CARRIAGE } from './carriage.js';

// Xe ngược chiều: 10–25 giây, tối đa 2; cùng chiều: 25–60 giây, tối đa 1 (ít xe => nhẹ máy). Tốc độ 50–200 km/h.
// Xe ngược chiều xuất hiện xa phía trước
// ở làn bên kia rồi chạy ngang qua. Model lấy từ các xe có sẵn (khác xe đang lái), tải ngầm sau khi vào game.
// Phát hiện người / xe trong 30 m, tìm khoảng trống để né và phanh nếu không đủ chỗ.
// Đèn pha: mỗi NPC chỉ có quầng; chùm sáng thật là MỘT cặp SpotLight dùng chung, gắn vào NPC gần người chơi nhất
// (số đèn trong cảnh luôn cố định => không biên dịch lại shader mỗi khi xe xuất hiện/biến mất).
// Đổi làn / né: thân xe xoay theo hướng chạy thực (vận tốc ngang / tốc độ tiến), bánh trước đánh lái.
// Xe ngựa cổ tích: 15–30 giây/chiếc, tối đa 2, 25–40 km/h, cùng luật bám/né/phanh với xe NPC (không đèn, không tiếng lướt).
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
    this.carriages = [];         // xe ngựa đã tạo (tái sử dụng)
    this.makeCarriage = null; this.carriageLoading = false;
    this.carriageTimer = 6;      // chiếc đầu tiên vài giây sau khi tải xong
  }

  // làn của chiều người chơi theo làn NHÀ của xe mình (không theo vị trí tức thời: đang vượt sang trái mà lấy playerD
  // thì xe ngược chiều sẽ sinh ra ngay trong làn của mình => kẹt đối đầu)
  _homeLane(playerD) { return (this.playerHome ?? playerD) >= 0 ? LANE : -LANE; }

  async _loadCarriage() {
    this.carriageLoading = true;
    try { this.makeCarriage = await loadCarriage(this.cars.loader); } catch (e) { console.warn('carriage', e); }
  }

  // sinh xe ngựa: ngược chiều xuất hiện xa phía trước; cùng chiều thì vào từ phía sau nếu nhanh hơn xe mình,
  // còn chậm hơn thì xuất hiện phía trước (xe mình bám theo rồi vượt)
  _spawnCarriage(s, playerD, playerV) {
    if (this.active.filter(v => v.carriage).length >= CARRIAGE.max) return false;   // đủ 2 chiếc: thử lại sau 1 s
    const cruise = CARRIAGE.minSpeed + Math.random() * (CARRIAGE.maxSpeed - CARRIAGE.minSpeed);
    // cùng chiều chỉ khi chênh tốc độ đủ lớn (không thì xe ngựa lởn vởn quanh xe mình rất lâu)
    const direction = Math.random() < 0.4 && Math.abs(cruise - playerV) > 3 ? 1 : -1;
    const at = direction === -1 ? s + SPAWN_AHEAD + Math.random() * 80
      : cruise > playerV + 1 ? Math.max(10, s - 80 - Math.random() * 30) : s + 150 + Math.random() * 70;
    if (this.active.some(o => Math.abs(o.s - at) < 60) || Math.abs(at - s) < 40) return false;
    let v = this.carriages.find(c => !c.busy);
    if (!v) { if (this.carriages.length >= CARRIAGE.max) return false; v = this._vehicle(this.makeCarriage()); this.carriages.push(v); }
    const lane = this._homeLane(playerD);
    Object.assign(v, { s: at, direction, busy: true, cruise, v: cruise, heard: true, policy: null, inCurve: false, avoidFor: null, latV: 0, yaw: 0 });
    v.d = v.baseD = v.avoidD = direction === 1 ? lane : -lane;
    v.root.visible = true;
    this.active.push(v);
    return true;
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
    const carriage = !!entry.carriage;                              // xe ngựa: không đèn pha / đèn hậu
    const headlights = createHeadlights(root, this.cars.softTex, { spots: false, glows: !carriage });
    placeHeadlights(headlights, d);
    for (const w of entry.wheels) { w.front = w.pivot.position.z < 0; w.pivot.rotation.order = 'YXZ'; }
    const [tx, ty, tz] = lampsFor(d).tail;                         // quầng đèn hậu đúng tâm bóng đèn hậu của model
    const tails = carriage ? [] : [-1, 1].map((k) => { const s = sprite(0xff2412, 1.6); s.position.set(k * tx, ty, tz + 0.03); return s; });
    this.scene.add(root);
    return { root, wheels: entry.wheels, dim: d, headlights, tails, busy: false, s: 0, v: 0, d: 0, carriage, mixer: entry.mixer || null };
  }

  // s: quãng đường xe mình; playerD: lệch ngang của xe mình (+ = bên phải); lamps 0..1; excludeId: xe đang lái
  update(dt, s, playerD, road, lamps, excludeId, obstacles = [], audio = null) {
    if (!this.pool.length) {
      if (!this.loading && (this.wait -= dt) <= 0) this._load(excludeId);
      return;
    }
    if (this.cars.loader && !this.makeCarriage && !this.carriageLoading) this._loadCarriage();
    const player0 = obstacles.find(o => o.id === 'player');
    if (this.makeCarriage && (this.carriageTimer -= dt) <= 0) {
      this.carriageTimer = this._spawnCarriage(s, playerD, player0?.speed || 0) ? CARRIAGE.gapMin + Math.random() * (CARRIAGE.gapMax - CARRIAGE.gapMin) : 1;
    }
    this.timer -= dt; this.sameTimer -= dt;
    for (const direction of [-1, 1]) {
      const same = direction === 1, timer = same ? 'sameTimer' : 'timer';
      if (this[timer] > 0) continue;
      const min = same ? TRAFFIC.sameGapMin : TRAFFIC.gapMin;
      const max = same ? TRAFFIC.sameGapMax : TRAFFIC.gapMax;
      this[timer] = min + Math.random() * (max - min);
      const free = this.pool.filter(v => !v.busy);
      if (!free.length || this.active.filter(v => !v.carriage && (v.direction ?? -1) === direction).length >= (same ? TRAFFIC.sameMax : TRAFFIC.maxActive)) continue;
      const v = free[Math.floor(Math.random() * free.length)];
      const lane = this._homeLane(playerD);
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
      // map Phố: đèn đỏ / vàng => phanh êm (≤ 3.2 m/s²) để dừng trước vạch (tính từ đầu xe)
      let cap = decision.vT;
      if (this.stopFor) {
        const dir = v.direction ?? -1, st = this.stopFor(v.s + dir * v.dim.length / 2, dir, v.v);
        if (st < Infinity) cap = Math.min(cap, Math.sqrt(2 * 3.2 * Math.max(0, st - 1)));
      }
      const next = stepTraffic(v, snapshot, ROAD.halfWidth, dt, Math.min(curveSpeed, cap), canChooseLane);
      v.s = next.s; v.d = next.d; v.v = next.v; v.avoiding = next.avoiding; v.latV = next.latV;
      if (v.s < s - (v.direction === 1 ? 180 : 90) || (v.direction === 1 && v.s > s + (v.carriage ? 400 : 750))) { v.busy = false; v.root.visible = false; this.active.splice(i, 1); continue; }
      if (audio && player && !v.carriage) {
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
      if (v.mixer) { v.mixer.timeScale = v.v / CARRIAGE.gallop; v.mixer.update(dt); }   // ngựa phi theo tốc độ (dừng thì đứng)
      updateHeadlights(v.headlights, v.root, this.cars.viewer, lamps * NPC_LAMP);
      for (const t of v.tails) t.material.opacity = (0.25 + 0.6 * lamps) * 0.6;
    }
    this._beam(s, lamps);
  }

  // map Phố: cất hết xe NPC nặng (phố dùng giao thông riêng cityTraffic)
  clearAll() {
    for (const v of this.active) { v.busy = false; v.root.visible = false; }
    this.active.length = 0;
    this._beam(0, 0);
    this.ctrl.lane = null; this.ctrl.maxV = Infinity;
  }

  // chùm sáng thật: gắn cặp SpotLight vào NPC gần xe người chơi nhất (trong 300 m)
  _beam(s, lamps) {
    let best = null, bd = 300;
    for (const v of this.active) { if (v.carriage) continue; const d = Math.abs(v.s - s); if (d < bd) { bd = d; best = v; } }
    if (best !== this.beamFor) { this.beamFor = best; if (best) placeHeadlights(this.beam, best.dim); }
    if (best) {
      best.root.updateMatrixWorld();
      best.root.matrixWorld.decompose(this.beamRoot.position, this.beamRoot.quaternion, this.beamRoot.scale);
    }
    updateHeadlights(this.beam, this.beamRoot, null, best ? lamps * NPC_LAMP : 0);
  }
}
