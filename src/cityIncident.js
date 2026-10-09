// Map Phố: cảnh tai nạn khi xe mình đâm vào xe khác / người đi bộ.
// 0 s   : va chạm — xe mình dừng, xe bị đâm đứng yên (crashed), người bị đâm ngã nằm.
// 1.2 s : xe cảnh sát tới từ phía sau cùng làn, dừng sau xe mình; xe cấp cứu tới từ phía trước (làn ngược chiều) dừng cạnh nạn nhân.
// ~1 s  : chú bước ra khỏi xe, đi dọc hông xe về gần đuôi, đứng quay mặt ra sau chờ.
// Cảnh sát xuống xe, đi thẳng (ở ngoài thân 2 xe, không xuyên qua xe chú) tới đứng trước mặt chú; nói chuyện 2 s;
// rồi cả hai đi về cửa xe cảnh sát, lên xe; xe cảnh sát chạy đi.
// Nhân viên cấp cứu (2 người) tới chỗ nạn nhân, đưa người lên xe (người ngã biến mất), quay về, xe cấp cứu chạy đi.
// Kết thúc: màn hình tối dần "bị đưa về đồn", dọn hiện trường, chạy tiếp.
import { icS, rampU, AVENUE } from './road.js';

const AV_MIN_U = AVENUE.median + 0.5;     // mép trong làn trong cùng Đại lộ (cách dải phân cách)

export class CityIncident {
  constructor(traffic, people, hooks) {
    this.traffic = traffic;
    this.people = people;
    this.hooks = hooks;           // { toast, fade(on, text), driverHidden(bool), carPos(), exitCar(), personPos(), endStop(), siren, end(), ramp() }
    this.active = false;
  }

  // victim: { car } hoặc { ped }
  start(s, d, dim, victim) {
    this.active = true;
    this.t = 0;
    this.s = s; this.d = d; this.dim = dim;
    this.victim = victim;
    this.ramp = this.hooks.ramp?.() ?? null;                 // Đại lộ: tai nạn trên nhánh rẽ (số nút giao) => xe ưu tiên tới theo nhánh
    this.step = 'impact';
    this.police = this.amb = this.officer = this.driver = null; this.behind = false;
    this.medics = [];
    this.exited = this.exitTried = false;
    if (victim.car) { victim.car.crashed = true; victim.car.v = 0; }
    if (victim.ped) { victim.ped.mode = 'fallen'; victim.ped.crossing = false; victim.ped.chatT = 0; victim.ped.target = null; }
    this.people.gather(...this._victimPos());               // người đi bộ gần đó tới đứng xem
    this.hooks.toast('💥 Va chạm! Đang gọi cảnh sát và xe cấp cứu…', true);
  }

  // vị trí nạn nhân theo toạ độ đường chính
  _victimPos() {
    const v = this.victim;
    if (v.ped) return [v.ped.s, v.ped.u];
    const c = v.car;
    if (c.cross) return [this.traffic.road.junction(c.cross.n) + c.cross.a, c.cross.u];
    if (c.xr) return [this.traffic.xrS(c), c.xr.u];
    return [c.s, c.d];
  }

  // tâm làn của xe cảnh sát / cấp cứu tại s: theo nhánh rẽ nếu tai nạn trên nhánh
  _laneU(s, lane) { return (this.ramp != null ? rampU(s - icS(this.ramp)) : null) ?? Math.abs(lane); }

  // còi hụ: bật khi xe ưu tiên đang chạy (tới hoặc rời đi), tắt khi đỗ; to dần khi lại gần hiện trường
  _sirens() {
    for (const [kind, c] of [['police', this.police], ['ambulance', this.amb]]) {
      let lv = 0, pan = 0;
      if (c && this.traffic.cars.includes(c) && c.v > 0.5) {
        const dist = Math.abs(c.s - this.s);
        lv = Math.max(0, 1 - dist / 260) ** 1.5 * 0.85 + 0.15 * (dist < 400 ? 1 : 0);
        pan = (c.d - this.d) / 8;
      }
      this.hooks.siren?.(kind, lv, pan);
    }
  }

  update(dt) {
    if (!this.active) return;
    this.t += dt;
    this._sirens();
    const T = this.traffic, P = this.people, L = this.dim.length;
    // làn gần chỗ xe mình nhất (Phố 2 làn / Đại lộ 3 làn mỗi chiều)
    const LS = T.lanes, li = LS.reduce((b, l, i) => (Math.abs(Math.abs(this.d) - l) < Math.abs(Math.abs(this.d) - LS[b]) ? i : b), 0);
    const lane = Math.sign(this.d || 1) * LS[li];
    // chú bước ra khỏi xe (xe đã dừng hẳn)
    if (this.step === 'impact' && !this.exitTried && this.t > 0.9) {
      [this.s, this.d] = this.hooks.carPos();
      this.exited = this.hooks.exitCar();
      this.exitTried = true;
    }
    // xe cảnh sát + cấp cứu
    if (this.step === 'impact' && this.t > 1.2) {
      this.step = 'coming';
      [this.s, this.d] = this.hooks.carPos();
      const polTo = this.s - L / 2 - 2.3 - 2.3;
      this.police = T.spawnScripted('police', this.s - 130, lane, 1, polTo, 15, this.ramp);
      const [vs, vu] = this._victimPos();
      // xe cấp cứu tới từ phía trước theo làn trong ngược chiều, dừng trước nạn nhân 6 m.
      // Đại lộ (dải phân cách giữa) / nhánh rẽ một chiều: tới từ phía sau cùng chiều (theo nhánh nếu có), đỗ sau xe cảnh sát
      this.behind = this.ramp != null || T.avenue;
      if (this.behind) this.amb = T.spawnScripted('ambulance', this.s - 175, lane, 1, polTo - 7.5, 15, this.ramp);
      else this.amb = T.spawnScripted('ambulance', vs + 140, -LS[0], -1, vs + 6, 15);
      this.hooks.toast('🚓🚑 Cảnh sát và xe cấp cứu đang tới…', true);
    }
    const cu = (u) => (T.avenue ? Math.max(u, AV_MIN_U) : u);         // Đại lộ: không đi vào dải phân cách giữa
    const doorU = cu(this.d - 1.25);
    const pol = this.police;
    // cảnh sát xuống xe (cửa bên trái), đi tới trước mặt chú (chú đứng cạnh đuôi xe, quay mặt ra sau)
    if (this.step === 'coming' && pol.script.arrived && (!this.exited || this.hooks.personPos())) {
      this.step = 'officer';
      this.officer = P.spawn('officer', pol.s + 0.6, pol.d - 1.15);
      if (this.exited) {
        const me = this.hooks.personPos();
        // đứng cách chú 1.1 m về phía sau, nhưng không lấn vào thân xe chú (u ngoài mép trái xe)
        P.goTo(this.officer, me.s - 1.1, cu(Math.min(me.d, this.d - this.dim.width / 2 - 0.45)));
      } else P.goTo(this.officer, this.s + 0.3, doorU - 0.4);
    }
    if (this.step === 'officer' && P.arrived(this.officer)) { this.step = 'talk'; this.tTalk = this.t; this.hooks.toast('👮 Cảnh sát: "Mời anh xuất trình giấy tờ…"', true); }
    if (this.step === 'talk' && this.t - this.tTalk > 2.5) {
      this.step = 'arrest';
      let ds = this.s + 0.4, du = doorU;
      if (this.exited) { const me = this.hooks.personPos(); if (me) { ds = me.s; du = me.d; } this.hooks.endStop(); }
      this.hooks.driverHidden(true);
      this.driver = P.spawn('driver', ds, du);
      // về cửa trái xe cảnh sát: chú đi trước, cảnh sát đi sau — đều ở ngoài mép trái 2 xe
      const back = pol.s + 0.2, sideU = Math.min(pol.d, this.d) - 1.2;
      if (this.exited) {
        P.goPath(this.driver, [[ds - 0.8, cu(Math.min(du, sideU))], [back, cu(pol.d - 1.1)]]);
        P.goPath(this.officer, [[this.officer.s, cu(Math.min(this.officer.u, sideU) - 0.7)], [back - 0.9, cu(pol.d - 1.5)]]);   // bước sang bên, đi cạnh chú
      } else {
        P.goTo(this.driver, back, cu(pol.d - 1.1));
        P.goTo(this.officer, back - 0.9, cu(pol.d - 1.3));
      }
      this.hooks.toast('👮 Cảnh sát đưa chú lên xe…', true);
    }
    if (this.step === 'arrest' && P.arrived(this.driver) && P.arrived(this.officer)) {
      this.step = 'leaving';
      P.remove(this.driver); P.remove(this.officer);
      pol.script = null; pol.home = lane > 0 ? LS[li > 0 ? li - 1 : 1] : lane; pol.changing = true;   // rời đi: sang làn bên cạnh
      this.tLeave = this.t;
    }
    // cấp cứu
    if (this.amb?.script?.arrived && !this.medics.length && !this.ambDone) {
      const [vs, vu] = this._victimPos();
      for (const k of [-1, 1]) {
        const m = P.spawn('medic', this.amb.s + this.amb.dir * 2.6 * -1, this.amb.d + k * 0.5);
        if (this.behind) {
          // đi phía bên phải làn / phía ngoài nhánh, vòng qua xe cảnh sát + xe chú (theo độ cong nhánh nếu có)
          const ru = (s, off) => this._laneU(s, lane) + off;
          const pts = [];
          for (let a = this.amb.s + 3; a < vs - 3; a += 6) pts.push([a, ru(a, 2.6 + k * 0.4)]);
          pts.push([vs - 2, ru(vs - 2, 2.2 + k * 0.4)], [vs + k * 0.7, vu + 1.6]);
          P.goPath(m, pts);
        } else P.goTo(m, vs + k * 0.7, vu + 0.8);
        this.medics.push(m);
      }
    }
    if (this.medics.length && !this.ambDone && this.medics.every((m) => P.arrived(m))) {
      this.tMed ??= this.t;
      if (this.t - this.tMed > 4) {
        if (this.victim.ped) { P.remove(this.victim.ped); this.victim.ped = null; this.victimGone = true; }
        for (const m of this.medics) {
          if (this.behind) {
            const ru = (s) => this._laneU(s, lane) + 2.8, pts = [];
            for (let a = m.s - 3; a > this.amb.s + 3; a -= 6) pts.push([a, ru(a)]);
            pts.push([this.amb.s - 2.6, this.amb.d]);
            P.goPath(m, pts);
          } else P.goTo(m, this.amb.s - this.amb.dir * 2.6, this.amb.d);
        }
        this.ambDone = true;
      }
    }
    if (this.ambDone && this.medics.length && this.medics.every((m) => P.arrived(m))) {
      for (const m of this.medics) P.remove(m);
      this.medics = [];
      this.amb.script = null;
    }
    // kết thúc
    if (this.step === 'leaving' && this.t - this.tLeave > 4 && !this.fading) {
      this.fading = this.t;
      this.hooks.fade(true, '🚓 Chú đã bị đưa về đồn. Bắt đầu lại — lái cẩn thận nhé!');
    }
    if (this.fading && this.t - this.fading > 3) this.finish();
  }

  finish() {
    const T = this.traffic, P = this.people;
    if (this.victim?.car) T.remove(this.victim.car);
    if (this.victim?.ped) P.remove(this.victim.ped);
    for (const c of [this.police, this.amb]) if (c) { c.script = null; if (c.crashed) c.crashed = false; T.remove(c); }
    for (const p of [this.officer, this.driver, ...(this.medics || [])]) if (p) P.remove(p);
    P.disperse();
    this.active = false; this.fading = null; this.ambDone = false; this.tMed = null; this.medics = [];
    this.hooks.siren?.('police', 0); this.hooks.siren?.('ambulance', 0);
    if (this.exited) this.hooks.endStop();
    this.exited = false;
    this.hooks.driverHidden(false);
    this.hooks.fade(false);
    this.hooks.end();
  }
}
