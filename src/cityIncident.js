// Map Phố: cảnh tai nạn khi xe mình đâm vào xe khác / người đi bộ.
// 0 s   : va chạm — xe mình dừng, xe bị đâm đứng yên (crashed), người bị đâm ngã nằm.
// 1.2 s : xe cảnh sát tới từ phía sau cùng làn, dừng sau xe mình; xe cấp cứu tới từ phía trước (làn ngược chiều) dừng cạnh nạn nhân.
// Cảnh sát xuống xe, đi tới cửa lái; người lái bước ra (ẩn người ngồi trong xe), cả hai đi về xe cảnh sát rồi lên xe; xe cảnh sát chạy đi.
// Nhân viên cấp cứu (2 người) tới chỗ nạn nhân, đưa người lên xe (người ngã biến mất), quay về, xe cấp cứu chạy đi.
// Kết thúc: màn hình tối dần "bị đưa về đồn", dọn hiện trường, chạy tiếp.
export class CityIncident {
  constructor(traffic, people, hooks) {
    this.traffic = traffic;
    this.people = people;
    this.hooks = hooks;           // { toast(text, bad), fade(on, text), driverHidden(bool), end() }
    this.active = false;
  }

  // victim: { car } hoặc { ped }
  start(s, d, dim, victim) {
    this.active = true;
    this.t = 0;
    this.s = s; this.d = d; this.dim = dim;
    this.victim = victim;
    this.step = 'impact';
    this.police = this.amb = this.officer = this.driver = null;
    this.medics = [];
    if (victim.car) { victim.car.crashed = true; victim.car.v = 0; }
    if (victim.ped) { victim.ped.mode = 'fallen'; victim.ped.crossing = false; }
    this.hooks.toast('💥 Va chạm! Đang gọi cảnh sát và xe cấp cứu…', true);
  }

  // vị trí nạn nhân theo toạ độ đường chính
  _victimPos() {
    const v = this.victim;
    if (v.ped) return [v.ped.s, v.ped.u];
    const c = v.car;
    if (c.cross) return [this.traffic.road.junction(c.cross.n) + c.cross.a, c.cross.u];
    return [c.s, c.d];
  }

  update(dt) {
    if (!this.active) return;
    this.t += dt;
    const T = this.traffic, P = this.people, L = this.dim.length;
    const lane = this.d >= 0 ? (Math.abs(this.d) < 3.5 ? 1.75 : 5.25) : (Math.abs(this.d) < 3.5 ? -1.75 : -5.25);
    // xe cảnh sát + cấp cứu
    if (this.step === 'impact' && this.t > 1.2) {
      this.step = 'coming';
      this.police = T.spawnScripted('police', this.s - 130, lane, 1, this.s - L / 2 - 2.3 - 2.3, 15);
      const [vs, vu] = this._victimPos();
      // xe cấp cứu tới từ phía trước theo làn trong ngược chiều, dừng trước nạn nhân 6 m
      this.amb = T.spawnScripted('ambulance', vs + 140, -1.75, -1, vs + 6, 15);
      this.hooks.toast('🚓🚑 Cảnh sát và xe cấp cứu đang tới…', true);
    }
    // cảnh sát xuống xe, tới cửa lái
    const doorU = this.d - 1.25;
    if (this.step === 'coming' && this.police.script.arrived) {
      this.step = 'officer';
      this.officer = P.spawn('officer', this.police.s + 0.6, this.police.d - 1.15);
      P.goTo(this.officer, this.s + 0.3, doorU - 0.4);
    }
    if (this.step === 'officer' && P.arrived(this.officer)) { this.step = 'talk'; this.tTalk = this.t; }
    if (this.step === 'talk' && this.t - this.tTalk > 2) {
      this.step = 'arrest';
      this.hooks.driverHidden(true);
      this.driver = P.spawn('driver', this.s + 0.4, doorU);
      const back = this.police.s + 0.2;
      P.goTo(this.driver, back, this.police.d - 1.1);
      P.goTo(this.officer, back - 0.9, this.police.d - 1.3);
      this.hooks.toast('👮 Cảnh sát đưa chú lên xe…', true);
    }
    if (this.step === 'arrest' && P.arrived(this.driver) && P.arrived(this.officer)) {
      this.step = 'leaving';
      P.remove(this.driver); P.remove(this.officer);
      this.police.script = null; this.police.home = lane > 3.5 ? 1.75 : lane > 0 ? 5.25 : lane; this.police.changing = true;
      this.tLeave = this.t;
    }
    // cấp cứu
    if (this.amb?.script?.arrived && !this.medics.length && !this.ambDone) {
      const [vs, vu] = this._victimPos();
      for (const k of [-1, 1]) {
        const m = P.spawn('medic', this.amb.s + this.amb.dir * 2.6 * -1, this.amb.d + k * 0.5);
        P.goTo(m, vs + k * 0.7, vu + 0.8);
        this.medics.push(m);
      }
    }
    if (this.medics.length && !this.ambDone && this.medics.every((m) => P.arrived(m))) {
      this.tMed ??= this.t;
      if (this.t - this.tMed > 4) {
        if (this.victim.ped) { P.remove(this.victim.ped); this.victim.ped = null; this.victimGone = true; }
        for (const m of this.medics) P.goTo(m, this.amb.s - this.amb.dir * 2.6, this.amb.d);
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
    this.active = false; this.fading = null; this.ambDone = false; this.tMed = null; this.medics = [];
    this.hooks.driverHidden(false);
    this.hooks.fade(false);
    this.hooks.end();
  }
}
