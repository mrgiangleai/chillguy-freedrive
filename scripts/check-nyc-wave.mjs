// Kiểm "làn sóng xanh" map New York — mô phỏng: xe chạy đều v km/h (chậm ở cua theo curveV) 1 vòng, đếm số ngã tư gặp đỏ (khi tới vạch dừng), so sánh có / không làn sóng xanh
import { Road } from '../src/road.js';
import { nycLoop, NYC } from '../src/nyc.js';
import { City } from '../src/city.js';
const road = new Road(); road.setShape('nyc', nycLoop());
for (const nyc of [true]) for (const kmh of [25, 30, 35, 40, 45, 50]) {
  const c = Object.create(City.prototype); Object.assign(c, { clock: 0, nyc, road });
  let s = NYC.length, t = 0, reds = 0, stop = 0; const L2 = 2 * NYC.length;
  let { n, line } = c.nextLine.call(c, s);
  while (s < L2) {
    const v = Math.min(kmh / 3.6, road.curveV(s));
    if (s + v * 0.1 >= line) {
      const ph = City.prototype._phase.call(c, n).main;
      if (ph !== 0) { if (!stop) reds++; stop = 1; c.clock += 0.1; t += 0.1; continue; }
      stop = 0; ({ n, line } = c.nextLine.call(c, line + 0.5));
    }
    s += v * 0.1; c.clock += 0.1; t += 0.1;
  }
  console.log(`${nyc ? 'sóng xanh' : 'pha ngẫu nhiên'} ${kmh} km/h: gặp đỏ ${reds} / 42 ngã tư, 1 vòng ${(t / 60).toFixed(1)} phút`);
}
