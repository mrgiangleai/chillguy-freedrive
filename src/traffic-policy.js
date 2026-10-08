// Luật bám/vượt xe từ commit upstream 703f0ab, dùng chung với rig/spawn/né 30 m hiện tại.
const LANE_R = 1.5;                   // làn của chiều người chơi (khớp LANE_D trong main.js)
const LANE_L = -1.8;                  // làn ngược chiều (hơi lệch vào giữa)
const SIGHT = 50;                     // tầm nhìn tối thiểu phía trước xe bị vượt (m)
const MARGIN = 8;                     // vượt xong phải cách xe bị vượt (m) mới về làn
const LAT_SPEED = 2.4;                // tốc độ chuyển làn (m/s)

const ownLane = (dir) => (dir > 0 ? LANE_R : LANE_L);
const otherLane = (dir) => (dir > 0 ? LANE_L : LANE_R);
// làn của xe / làn để vượt (xe người chơi: làn đang giữ `home`, làn vượt là phía bên kia)
const laneOwn = (A) => (A.home ?? ownLane(A.dir));
const laneOther = (A) => (A.home !== undefined ? -A.home : otherLane(A.dir));
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

export class TrafficPolicy {
  constructor(){this.player={player:true,state:"cruise",target:null,dir:1};this.active=[];this.city=false;}
  // làn để vượt: map Phố (2 làn mỗi chiều) vượt sang làn cùng chiều bên cạnh, không lấn sang chiều ngược lại
  _other(A) { if (!this.city) return laneOther(A); const o = laneOwn(A); return Math.sign(o) * (Math.abs(o) < 3.5 ? 5.25 : 1.75); }
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
    const lane = this._other(A);
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
    const lane = this._other(A);
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
    const own = laneOwn(A), other = this._other(A);
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
          if (!A.noOvertake && f.e.v < vDes - 1.5 && f.gap < 30 + 1.2 * A.v && this._canOvertake(A, f.e, Math.max(vDes, f.e.v + 6))) {
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

}
