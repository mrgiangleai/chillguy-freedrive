// Module dùng chung (game src/traffic-ai.js + editor experiments/webgpu/runtime/TrafficMath.js): giảm tốc vào cua cho xe NPC.
// Nhìn trước đủ quãng phanh để vào cua ở 60% tốc độ; hai ngưỡng tránh nhấp nháy ở mép cua.
//  v: { s, v, cruise?, direction? (game) | dir? (editor): +1 cùng chiều người chơi, -1 ngược chiều (mặc định) }
//  road: có heading(s), hoặc at(s, out).th
export function trafficCurveSpeed(v, road) {
  const cruise = v.cruise ?? v.v, direction = v.direction ?? v.dir ?? -1;
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
