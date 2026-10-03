const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
export const TRAFFIC = { maxActive: 4, sameMax: 2, sameGapMin: 10, sameGapMax: 30, gapMin: 4, gapMax: 10, detect: 30, minSpeed: 50 / 3.6, maxSpeed: 200 / 3.6 };
export const trafficSpeed = () => TRAFFIC.minSpeed + Math.random() * (TRAFFIC.maxSpeed - TRAFFIC.minSpeed);

// Nhìn trước đủ quãng phanh để vào cua ở 60% tốc độ; hai ngưỡng tránh nhấp nháy ở mép cua.
export function trafficCurveSpeed(v, road) {
  const cruise = v.cruise ?? v.v, direction = v.direction ?? -1;
  const heading = s => road.heading ? road.heading(Math.max(0,s)) : road.at(Math.max(0,s),{}).th;
  const look = Math.max(12, (cruise * cruise - (cruise * 0.6) ** 2) / 24 + 10);
  let bend = 0;
  for (let d = 0; d <= look; d += 6) {
    const s = Math.max(0, v.s + direction * d), lo = Math.max(0,s-10), hi = s+10;
    const angle = heading(hi) - heading(lo);
    bend = Math.max(bend, Math.abs(Math.atan2(Math.sin(angle),Math.cos(angle))) / (hi-lo));
  }
  v.inCurve = bend >= (v.inCurve ? 0.0012 : 0.0015);
  return cruise * (v.inCurve ? 0.6 : 1);
}

// direction: +1 đi cùng chiều người chơi, -1 đi ngược chiều (mặc định cũ).
export function stepTraffic(v, obstacles, halfWidth, dt, cruise = v.cruise ?? v.v, canChooseLane = () => true) {
  const direction = v.direction ?? -1;
  const ahead = o => direction * (o.s - v.s);
  const limit = Math.max(0, halfWidth - v.dim.width / 2 - 0.25);
  const base = clamp(v.baseD ?? v.d, -limit, limit);
  const nearby = obstacles.filter(o => {
    if (o.id === v || ahead(o) < -(v.dim.length + o.length) / 2 - 2) return false;
    const along = Math.max(0, ahead(o) - (v.dim.length + o.length) / 2);
    const across = Math.max(0, Math.abs(v.d - o.d) - (v.dim.width + o.width) / 2);
    return Math.hypot(along, across) <= TRAFFIC.detect + 1e-6;
  });
  const clearance = o => (v.dim.width + o.width) / 2 + 0.6;
  const conflict = (d, o) => Math.abs(d - o.d) < clearance(o);
  const held = obstacles.find(o => o.id === v.avoidFor);
  let target = held && ahead(held) > -(v.dim.length + held.length) / 2 - 8 ? v.avoidD : base;
  const threats = nearby.filter(o => conflict(v.d, o) || conflict(target, o));
  let speed = cruise;
  if (threats.length) {
    const choices = [target, -1.8, 1.8, -limit, limit, ...threats.flatMap(o => [o.d - clearance(o) - 0.1, o.d + clearance(o) + 0.1])];
    const free = choices.filter(d => Math.abs(d) <= limit && canChooseLane(d) && nearby.every(o => !conflict(d, o)));
    free.sort((a, b) => Math.abs(a - v.d) - Math.abs(b - v.d) || Math.abs(a - base) - Math.abs(b - base));
    if (free.length) {
      target = free[0];
      const closest = threats.reduce((a, b) => ahead(a) < ahead(b) ? a : b);
      v.avoidFor = closest.id; v.avoidD = target;
    } else target = v.d;
    // Giảm tốc theo khoảng trống còn lại, kể cả khi đang đổi hướng ngang.
    for (const o of threats) {
      const gap = Math.max(0, ahead(o) - (v.dim.length + o.length) / 2 - 2);
      const closingOther = -direction * (o.direction || 0) * (o.speed || 0);
      speed = Math.min(speed, Math.max(0, Math.sqrt(24 * gap) - closingOther));
    }
  }
  const nextD = v.d + clamp(target - v.d, -(threats.length ? 8 : 2.2) * dt, (threats.length ? 8 : 2.2) * dt);
  let nextV = v.v + clamp(speed - v.v, -12 * dt, 5 * dt);
  // Không bước xuyên vật cản trong một frame, nhất là ở 200 km/h hoặc khi cả hai làn bị chặn.
  for (const o of nearby) {
    const lo = Math.min(v.d, nextD), hi = Math.max(v.d, nextD);
    if (o.d + clearance(o) <= lo || o.d - clearance(o) >= hi) continue;
    const gap = ahead(o) - (v.dim.length + o.length) / 2 - 1.5;
    const otherAdvance = -direction * (o.direction || 0) * (o.speed || 0) * dt;
    nextV = Math.min(nextV, Math.max(0, (gap - otherAdvance) / Math.max(dt, 1e-6)));
  }
  return { d: nextD, v: nextV, s: v.s + direction * nextV * dt, avoiding: threats.length > 0 };
}

// Người đi bộ dùng vị trí thế giới thật, chiếu về đoạn đường quanh xe người chơi.
export function roadPosition(point, road, anchor) {
  const p = {};
  const distance = s => { road.at(s, p); return (p.x - point.x) ** 2 + (p.z - point.z) ** 2; };
  let best = anchor, dist = Infinity;
  for (let s = Math.max(0, anchor - 35); s <= anchor + 35; s += 2) {
    const d = distance(s); if (d < dist) { dist = d; best = s; }
  }
  let lo = Math.max(0, best - 2), hi = best + 2;
  for (let i = 0; i < 12; i++) {
    const a = (lo * 2 + hi) / 3, b = (lo + hi * 2) / 3;
    if (distance(a) < distance(b)) hi = b; else lo = a;
  }
  const s = (lo + hi) / 2; road.at(s, p);
  return { s, d: (point.x - p.x) * Math.cos(p.th) - (point.z - p.z) * Math.sin(p.th) };
}
