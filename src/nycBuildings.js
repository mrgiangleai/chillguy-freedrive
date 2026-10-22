// Map New York — nhà thật theo OpenStreetMap (ODbL): footprint + chiều cao (`height` / `building:levels`), tạo bằng
// `node scripts/fetch-nyc.mjs` => `docs/assets/nyc-buildings.json` (tải khi vào map). Mỗi nhà: [cao, kiểu mặt tiền, s gần nhất, [x, z, …]]
// kiểu: 0 kính, 1 đá, 2 kính tối, 3 kính gương (phản chiếu của Times Square), 4 gạch. Thay hoàn toàn nhà map Phố; vùng Times Square do
// `timesSquare.js` dựng. Chia cụm 300 m theo s để camera bỏ qua cụm ngoài khung nhìn; obb cho camera không xuyên nhà.
import * as THREE from 'three';
import { hLow } from './terrain-noise.js';
import { withMist } from './mist.js';
import { obbHit, SIDE_EXTRA } from './nycNet.js';
import { facadeTex } from './timesSquare.js';
import { NYC } from './nyc.js';
import { CITY } from './road.js';
import * as empire from './landmarks/empire.js';
import * as chrysler from './landmarks/chrysler.js';
import * as metlife from './landmarks/metlife.js';
import * as helmsley from './landmarks/helmsley.js';
import * as grandcentral from './landmarks/grandcentral.js';
import * as waldorf from './landmarks/waldorf.js';
import * as seagram from './landmarks/seagram.js';
import * as lever from './landmarks/lever.js';
import * as macys from './landmarks/macys.js';
import * as msg from './landmarks/msg.js';
import * as vanderbilt from './landmarks/vanderbilt.js';
// tòa nổi tiếng: [module, kích thước X (đông–tây), Z (bắc–nam)]
const LANDMARKS = { empire: [empire, 129, 57], chrysler: [chrysler, 61, 58], metlife: [metlife, 90, 50], helmsley: [helmsley, 90, 60], grandcentral: [grandcentral, 90, 120],
  waldorf: [waldorf], seagram: [seagram], lever: [lever], macys: [macys], msg: [msg], vanderbilt: [vanderbilt] };
// tòa đặt theo toạ độ thật (`lm` từ fetch-nyc): [tên, góc xoay so với lưới phố (mặt chính −Z: 0 = bắc, π/2 = tây, −π/2 = đông, π = nam), co theo X]
const REAL = [['empire', 0, 1], ['chrysler', 0, 1], ['waldorf', Math.PI, 0.61], ['seagram', Math.PI / 2, 1], ['lever', -Math.PI / 2, 1],
  ['macys', Math.PI, 1], ['msg', -Math.PI / 2, 1], ['vanderbilt', Math.PI, 1]];

export class NycBuildings {
  constructor(scene, ts, road) {
    this.ts = ts; this.road = road;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.state = 'idle'; this.obb = [];
    this.lmRects = [];                                   // khung tòa nổi tiếng (dùng chung với nycNet)
    this.rectsReady = new Promise((res) => { this._rectsOK = res; });
    const [map, em] = facadeTex(4);
    this.brick = withMist(new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.85 }));
    this.roof = withMist(new THREE.MeshStandardMaterial({ color: 0x4a4c4f, roughness: 0.9 }));
    const [sm, se] = shopTex();
    this.shop = withMist(new THREE.MeshStandardMaterial({ map: sm, emissiveMap: se, emissive: 0xffffff, emissiveIntensity: 0.15, roughness: 0.35, metalness: 0.1 }));
    this.awn = withMist(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, side: THREE.DoubleSide }));
  }
  set visible(v) { this.group.visible = v; if (v && this.state === 'idle') this._load(); }
  get visible() { return this.group.visible; }
  setLamps(k) { const w = this.winK ?? 1; this.brick.emissiveIntensity = 1.2 * k * w; this.shop.emissiveIntensity = (0.15 + 1.3 * k) * w; }

  async _load() {
    this.state = 'loading';
    try {
      const [D, NS] = await Promise.all([fetch('assets/nyc-buildings.json').then((r) => r.json()),
        fetch('assets/nyc-streets.json').then((r) => r.json()).catch(() => null)]);
      this._landmarks(D.lm || {}, NS && NS.s);
      this._rectsOK(this.lmRects);                         // nycNet chờ khung tòa để cắt phố đi bộ dưới chân tòa
      this.foot = D.b;                                    // footprint cho bản đồ tròn
      this._build(D.b);
      this.state = 'ready';
      if (this.onReady) this.onReady();
    } catch (e) { console.warn('nyc-buildings', e); this._rectsOK(this.lmRects || []); this.state = 'idle'; }
  }

  // `streets` = docs/assets/nyc-streets.json (`s`): phố xe (type 0) phải tránh; phố đi bộ (type 1, kể cả vòng kín) do nycNet cắt
  // mảnh dưới chân tòa (tòa đứng trên quảng trường riêng). Không tìm được chỗ: bỏ tòa (không đặt lên phố) + console.warn.
  _landmarks(lm, streets) {
    this.lmRects = [];
    this.lmStats = { moved: [], scaled: [], skipped: [] };
    const road = this.road.street, L = NYC.length, P = {}, D = NYC.data, HW = CITY.hw;
    const thG = D.heading[Math.round(4100 / D.step)];                // trục lưới phố (Park Ave hướng bắc)
    const mat = withMist(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.15 }));
    // khung bao thật của model (model có thể to hơn kích thước danh nghĩa tới 8 %): nửa rộng theo X / Z quanh gốc
    const geos = {}, geo = (name) => {
      if (!geos[name]) { const g = LANDMARKS[name][0].build(THREE).geometry; g.computeBoundingBox(); const b = g.boundingBox;
        geos[name] = { g, hx: Math.max(-b.min.x, b.max.x), hz: Math.max(-b.min.z, b.max.z) }; }
      return geos[name];
    };
    const place = (name, x, z, yaw, sz = 1, sx = 1) => {
      const { g, hx: GX, hz: GZ } = geo(name), X = 2 * GX * sx, Z = 2 * GZ * sz;
      const m = new THREE.Mesh(g, mat); m.position.set(x, hLow(x, z) - 0.3, z); m.rotation.y = yaw; m.scale.set(sx, 1, sz); m.castShadow = m.receiveShadow = true;
      this.group.add(m);
      // khung chính xác (nửa rộng hx × hz); mặc định nới 4 m khi dò nhà OSM (chừa tường), phố dò với 0.5 m
      const c = Math.cos(yaw), s = Math.sin(yaw), hx = X / 2, hz = Z / 2;
      const f = (px, pz, mg = 4) => { const ex = px - x, ez = pz - z; return Math.abs(ex * c - ez * s) < hx + mg && Math.abs(ex * s + ez * c) < hz + mg; };
      f.lm = name; f.rect = [x, z, c, s, hx, hz];
      this.lmRects.push(f);
      this.obb.push(x, z, c, s, X / 2, Z / 2, hLow(x, z) + 60);
      return f;
    };
    // phố xe nycNet: mảnh ≤ 2 m (tim, hướng, nửa dài, nửa bề rộng) trong lưới ô 20 m; phố đi bộ không cần tránh (nycNet cắt)
    const CELLS = 20, grid = new Map(), segs = [];
    for (const rec of streets || []) {
      const pts = rec && rec[3];
      if (!pts || pts.length < 4 || rec[1] === 1) continue;
      const hw = rec[0] / 2 + SIDE_EXTRA - 1;               // lòng đường + vỉa hè nycNet vẽ; tòa được lấn 1 m mép ngoài vỉa hè
      for (let i = 0; i + 3 < pts.length; i += 2) {
        const X0 = pts[i], Z0 = pts[i + 1], X1 = pts[i + 2], Z1 = pts[i + 3], n = Math.max(1, Math.ceil(Math.hypot(X1 - X0, Z1 - Z0) / 2));
        for (let q = 0; q < n; q++) {
          const ax = X0 + (X1 - X0) * q / n, az = Z0 + (Z1 - Z0) * q / n, bx = X0 + (X1 - X0) * (q + 1) / n, bz = Z0 + (Z1 - Z0) * (q + 1) / n;
          const dx = bx - ax, dz = bz - az, sl = Math.hypot(dx, dz) || 1;
          const id = segs.push([(ax + bx) / 2, (az + bz) / 2, dx / sl, dz / sl, sl / 2, hw]) - 1;
          const e = Math.max(hw, sl / 2) + 1;
          for (let gx = Math.floor((ax - e) / CELLS); gx <= Math.floor((ax + e) / CELLS); gx++)
            for (let gz = Math.floor((az - e) / CELLS); gz <= Math.floor((az + e) / CELLS); gz++) {
              const k = gx + '|' + gz, a = grid.get(k);
              if (a) { if (a[a.length - 1] !== id) a.push(id); } else grid.set(k, [id]);
            }
        }
        if (i > 0) {                                         // đĩa nối ở đỉnh gấp khúc (nycNet vẽ) — coi là ô vuông ±hw như script kiểm
          const id = segs.push([X0, Z0, 1, 0, hw, hw]) - 1;
          for (let gx = Math.floor((X0 - hw - 1) / CELLS); gx <= Math.floor((X0 + hw + 1) / CELLS); gx++)
            for (let gz = Math.floor((Z0 - hw - 1) / CELLS); gz <= Math.floor((Z0 + hw + 1) / CELLS); gz++) {
              const k = gx + '|' + gz, a = grid.get(k);
              if (a) a.push(id); else grid.set(k, [id]);
            }
        }
      }
    }
    // khung tòa có đè lòng phố xe không (nới `clear` m); phố đã cắt mảnh 2 m nên dò theo lưới là đủ
    let SEGS = null;                                           // mảnh phố quanh tòa đang dò (lọc 1 lần / tòa), null = dò theo lưới
    const nearSegs = (x, z, r) => {
      const ids = new Set();
      for (let i = Math.floor((x - r) / CELLS); i <= Math.floor((x + r) / CELLS); i++)
        for (let j = Math.floor((z - r) / CELLS); j <= Math.floor((z + r) / CELLS); j++) for (const id of grid.get(i + '|' + j) || []) ids.add(id);
      SEGS = [...ids].map((id) => segs[id]).sort((a, b) => (a[0] - x) ** 2 + (a[1] - z) ** 2 - (b[0] - x) ** 2 - (b[1] - z) ** 2);   // gần trước => chạm sớm, dừng sớm
    };
    const streetClear = (x, z, c, sn, hx, hz, clear = 0.6) => {
      const rb = Math.hypot(hx, hz) + clear;
      if (SEGS) {
        for (const s of SEGS) {
          const dx = s[0] - x, dz = s[1] - z, rr = rb + Math.hypot(s[4], s[5]);
          if (dx * dx + dz * dz > rr * rr) continue;
          if (obbHit(x, z, c, sn, hx, hz, s[0], s[1], s[2], -s[3], s[4], s[5], clear)) return false;
        }
        return true;
      }
      const R = rb + 16, i0 = Math.floor((x - R) / CELLS), i1 = Math.floor((x + R) / CELLS), j0 = Math.floor((z - R) / CELLS), j1 = Math.floor((z + R) / CELLS);
      for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
        const a = grid.get(i + '|' + j); if (!a) continue;
        for (const id of a) {
          const s = segs[id], dx = s[0] - x, dz = s[1] - z, rr = rb + Math.hypot(s[4], s[5]);
          if (dx * dx + dz * dz > rr * rr) continue;                     // xa hẳn: bỏ qua phép OBB (đắt)
          if (obbHit(x, z, c, sn, hx, hz, s[0], s[1], s[2], -s[3], s[4], s[5], clear)) return false;
        }
      }
      return true;
    };
    const boxes = [];                                        // tòa đã đặt: [x, z, c, sn, hx, hz] — không chồng nhau
    const freeOf = (x, z, c, sn, hx, hz, gap = 0) => !boxes.some((b) => obbHit(x, z, c, sn, hx, hz, b[0], b[1], b[2], b[3], b[4], b[5], gap));
    // toạ độ thật; lấn vỉa hè / đường (mép nhà gần tim đường hơn mép vỉa hè) thì đẩy ra xa từng 2 m theo hướng từ điểm đường gần nhất
    const FRONT = HW + CITY.walk + 0.4, RQ = {}, ROUTE = [];
    for (let t = 0; t < L; t += 4) { road.at(L + t, RQ); ROUTE.push(RQ.x, RQ.z); }
    let NEAR = ROUTE;                                         // điểm tuyến gần tòa đang dò (lọc 1 lần / tòa cho nhanh)
    const nearRoute = (x, z, r) => { NEAR = []; for (let i = 0; i < ROUTE.length; i += 2) if ((ROUTE[i] - x) ** 2 + (ROUTE[i + 1] - z) ** 2 < r * r) NEAR.push(ROUTE[i], ROUTE[i + 1]); };
    const routeClear = (x, z, c, sn, hx, hz) => {              // giữ FRONT so với tim tuyến (mọi cao độ, như bản cũ)
      const ROUTE = NEAR;
      for (let i = 0; i < ROUTE.length; i += 2) {
        const ex = ROUTE[i] - x, ez = ROUTE[i + 1] - z, lx = ex * c - ez * sn, lz = ex * sn + ez * c;
        const dx = Math.max(0, Math.abs(lx) - hx), dz = Math.max(0, Math.abs(lz) - hz);
        if (dx * dx + dz * dz < FRONT * FRONT) return false;
      }
      return true;
    };
    for (const [name, rot, sx0] of REAL) {
      if (!lm[name]) continue;
      const [rx, rz] = lm[name];
      let x = rx, z = rz;
      const yaw = thG + rot, c = Math.cos(yaw), sn = Math.sin(yaw), hx = geo(name).hx * sx0, hz = geo(name).hz;
      for (let it = 0; it < 15; it++) {
        let bd = Infinity, bx = 0, bz = 0;
        for (let t = 0; t < L; t += 3) {
          road.at(L + t, RQ); const ex = RQ.x - x, ez = RQ.z - z;
          if (Math.abs(ex) > 400 || Math.abs(ez) > 400) continue;
          const lx = ex * c - ez * sn, lz = ex * sn + ez * c, dx = Math.max(0, Math.abs(lx) - hx), dz = Math.max(0, Math.abs(lz) - hz), d = Math.hypot(dx, dz);
          if (d < bd) { bd = d; bx = RQ.x; bz = RQ.z; }
        }
        if (bd >= FRONT) break;
        const nl = Math.hypot(x - bx, z - bz) || 1; x += (x - bx) / nl * 2; z += (z - bz) / nl * 2;
      }
      // còn đè phố xe / chồng tòa khác: dời quanh toạ độ thật (lấy chỗ gần nhất), rồi mới thu nhỏ dần;
      // không có chỗ thì dùng vị trí đã đẩy khỏi làn tuyến (giữ luật FRONT cũ), cuối cùng mới bỏ tòa.
      // Seagram: nới bán kính dò 40 m, thu tới 0.7. Macy's: model 140 × 115 m sâu hơn hẳn khối phố thật 34–35 St (~60 m)
      // => cho thu riêng từng trục (0.4–1, giữ trục kia ≥ 0.8), thử theo diện tích giảm dần.
      // thu đều tới 0.8; chưa được thì thu riêng 1 trục tới 0.5 (trục kia ≥ 0.8) — khối phố Midtown chỉ sâu ~60 m giữa 2 phố ngang
      // (Macy's 140 × 115 m, Waldorf / Seagram có quảng trường) — thử theo diện tích giảm dần
      const RMAX = 40, KS = [];
      for (let k = 1; k >= 0.799; k -= 0.05) KS.push([k, k]);
      const AX = [];
      const AMIN = name === 'macys' ? 0.35 : 0.5;              // Macy's: model sâu 115 m, khối 34–35 St trừ vỉa hè chỉ ~44 m
      for (let a = 0.95; a >= AMIN - 1e-6; a -= 0.05) for (let b = 1; b >= 0.799; b -= 0.05) if (a < b - 1e-6) AX.push([a, b], [b, a]);
      AX.sort((p, q) => q[0] * q[1] - p[0] * p[1]);
      KS.push(...AX);
      nearRoute(rx, rz, RMAX + Math.hypot(hx, hz) + FRONT + 4);
      nearSegs(rx, rz, RMAX + Math.hypot(hx, hz) + 20);
      let pick = null, bestD = Infinity;
      for (const [kx, kz] of KS) {
        const HX = hx * kx, HZ = hz * kz;
        const fit = (px, pz) => freeOf(px, pz, c, sn, HX, HZ) && routeClear(px, pz, c, sn, HX, HZ) && streetClear(px, pz, c, sn, HX, HZ);
        for (let r = 0; r <= RMAX && !pick; r += 2) for (let a = 0; a < 24; a++) {
          if (!r && a) break;
          const t = a * Math.PI / 12, px = rx + Math.cos(t) * r, pz = rz + Math.sin(t) * r;
          if (fit(px, pz)) { pick = [px, pz, kx, kz]; bestD = r; break; }
        }
        if (pick) break;
      }
      if (!pick && streetClear(x, z, c, sn, hx, hz) && freeOf(x, z, c, sn, hx, hz)) { pick = [x, z, 1, 1]; bestD = Math.hypot(x - rx, z - rz); }
      if (!pick) { console.warn(`nyc-landmarks: không có chỗ đặt ${name} (không đè phố) — bỏ tòa`); this.lmStats.skipped.push(name); continue; }
      const [px, pz, kx, kz] = pick;
      if (bestD > 0.5) this.lmStats.moved.push([name, +bestD.toFixed(1)]);
      if (kx < 0.999 || kz < 0.999) this.lmStats.scaled.push([name, kx === kz ? +kx.toFixed(2) : `${kx.toFixed(2)}×${kz.toFixed(2)}`]);
      place(name, px, pz, yaw, kz, sx0 * kx);
      boxes.push([px, pz, c, sn, hx * kx, hz * kz]);
    }
    NEAR = ROUTE; SEGS = null;
    const pas = D.passages[0];
    if (pas) {
      // Helmsley: cầu cạn chạy xuyên cổng đông (x ∈ [2, 16] của model). Đoạn qua tòa nhà thật lượn ~60° => đặt ở đoạn thẳng ngay trước
      // ngã tư 46 St, đế thu ngắn theo trục phố (sz) cho vừa; dò tâm / độ thu sao cho 4 làn xe (±7.2 m) nằm trọn trong lòng cổng.
      const j46 = D.junctions.find((j) => j.s > pas.s1 - 5)?.s ?? pas.s1 + 15, endS = j46 - CITY.side - CITY.sideWalk - 1;
      const PA = {}, PB = {}, PC = {};
      helm: for (const sz of [1, 0.85, 0.7, 0.6, 0.5, 0.42]) {
        const half = geo('helmsley').hz * sz;
        for (let c = endS - half; c > pas.s0; c -= 2) {
          road.at(L + c - half, PA); road.at(L + c + half, PB); road.at(L + c, PC);
          const th = Math.atan2(-(PB.x - PA.x), -(PB.z - PA.z)), cs = Math.cos(th), sn = Math.sin(th);   // hướng dây cung qua đế
          const SX = 1.15, x = PC.x - cs * 9 * SX, z = PC.z + sn * 9 * SX;                                // tim đường ở tâm cổng đông (x = +9, nới ngang ×1.15)
          let ok = true;
          for (let t = c - half - 4; t <= c + half + 4 && ok; t += 2) {
            road.at(L + t, PA);
            for (const u of [-6.4, 6.4]) {                                      // thân xe ở làn ngoài cùng (5.4 ± 0.95)
              const ex = PA.x + Math.cos(PA.th) * u - x, ez = PA.z - Math.sin(PA.th) * u - z, lx = ex * cs - ez * sn, lz = ex * sn + ez * cs;
              if (Math.abs(lz) < half + 1 && (lx < 2 * SX + 0.2 || lx > 16 * SX - 0.2)) ok = false;
            }
          }
          const hx = geo('helmsley').hx * SX;
          if (ok && streetClear(x, z, cs, sn, hx, half)) {
            const f = place('helmsley', x, z, th, sz, SX);
            f.portal = [x, z, cs, sn, 2 * SX, 16 * SX, half];                // cổng: tuyến xuyên qua theo thiết kế (miễn trừ khi kiểm)
            this._helm = [x, z, hx, half];
            boxes.push([x, z, cs, sn, hx, half]);
            break helm;
          }
        }
      }
      if (!this._helm) { console.warn('nyc-landmarks: không có chỗ đặt helmsley (không đè phố) — bỏ tòa'); this.lmStats.skipped.push('helmsley'); }
      // Grand Central (mặt chính −Z quay về nam / 42 St => yaw + π) rồi MetLife phía bắc: dò chỗ bên trái đoạn cầu cạn chạy dọc nhà ga sao cho
      // mép đường (±HW) không chạm footprint (nới 1 m) và không chồng tòa khác
      const Q = {};
      const clear = (x, z, th, hx, hz) => {
        const c = Math.cos(th), sn = Math.sin(th);
        for (let t = pas.s0 - 420; t < pas.s1 + 40; t += 2) { road.at(L + t, Q); for (const u of [-HW, 0, HW]) {
          const ex = Q.x + Math.cos(Q.th) * u - x, ez = Q.z - Math.sin(Q.th) * u - z;
          if (Math.abs(ex * c - ez * sn) < hx + 1 && Math.abs(ex * sn + ez * c) < hz + 1) return false; } }
        return freeOf(x, z, c, sn, hx, hz, 2) && streetClear(x, z, c, sn, hx, hz) && routeClear(x, z, c, sn, hx, hz);
      };
      for (const [name, d0, d1, flip] of [['grandcentral', 110, 220, Math.PI], ['metlife', 40, 200, 0]]) {
        const X0 = 2 * geo(name).hx, Z0 = 2 * geo(name).hz;
        let done = false;
        for (let n = 0; n <= 2 && !done; n++) {
          const k = 1 - n * 0.1;
          const X = X0 * k, Z = Z0 * k;
          search: for (let ds = d0; ds <= d1; ds += 5) for (let ex = 0; ex <= 40; ex += 5) {
            road.at(L + pas.s0 - ds, P);
            const o = HW + 1.5 + X / 2 + ex, x = P.x - Math.cos(P.th) * o, z = P.z + Math.sin(P.th) * o;
            if (!clear(x, z, P.th, X / 2, Z / 2)) continue;
            place(name, x, z, P.th + flip, k, k);
            boxes.push([x, z, Math.cos(P.th + flip), Math.sin(P.th + flip), X / 2, Z / 2]);
            if (k < 0.999) this.lmStats.scaled.push([name, +k.toFixed(2)]);
            done = true; break search;
          }
        }
        if (!done) { console.warn(`nyc-landmarks: không có chỗ đặt ${name} (không đè phố) — bỏ tòa`); this.lmStats.skipped.push(name); }
      }
    }
  }

  _build(list) {
    const mats = [...this.ts.mats.slice(0, 4), this.brick], excl = this.ts.excl;
    // trục lưới phố Manhattan (Park Ave đi bắc) cho obb camera
    const th = NYC.data.heading[Math.round(4100 / NYC.data.step)], cs = Math.cos(th), sn = Math.sin(th);
    const chunks = new Map(), awn = [], road = this.road.street, RP = {}, FRONT = CITY.hw + CITY.walk + 0.4, SHOP = 4.8;
    for (const [h, cls, s, pts0] of list) {
      const n = pts0.length / 2;
      let cx = 0, cz = 0; for (let i = 0; i < n; i++) { cx += pts0[2 * i]; cz += pts0[2 * i + 1]; } cx /= n; cz /= n;
      if ((excl && excl(cx, cz)) || this.lmRects.some((f) => f(cx, cz))) continue;   // Times Square / tòa nổi tiếng: model riêng
      let hitLm = false; for (let i = 0; i < n && !hitLm; i++) hitLm = this.lmRects.some((f) => f(pts0[2 * i], pts0[2 * i + 1]));
      if (hitLm) continue;                                         // góc nhà OSM lấn vào tòa nổi tiếng => bỏ (tường chồng nhau nhấp nháy)
      // thu mỗi nhà vào 0.1–0.3 m (khác nhau theo nhà): tường chung của 2 nhà sát vách không còn trùng mặt phẳng => hết đè chớp chớp
      const ins = 0.1 + 0.2 * (((cx * 12.9898 + cz * 78.233) * 0.0137 % 1 + 1) % 1), pts = new Array(n * 2);
      for (let i = 0; i < n; i++) { const dx = cx - pts0[2 * i], dz = cz - pts0[2 * i + 1], l = Math.hypot(dx, dz) || 1, k = Math.min(ins, l * 0.3) / l; pts[2 * i] = pts0[2 * i] + dx * k; pts[2 * i + 1] = pts0[2 * i + 1] + dz * k; }
      const key = Math.floor(s / 300);
      if (!chunks.has(key)) chunks.set(key, { walls: mats.map(() => mk()), roof: mk(), shop: mk() });
      const C = chunks.get(key), B = C.walls[cls], y0 = hLow(cx, cz) - 0.6, y1 = y0 + 0.6 + h;
      // hướng vòng: diện tích có dấu => đi ngược / xuôi chiều kim đồng hồ để pháp tuyến tường quay ra ngoài
      let area = 0; for (let i = 0; i < n; i++) { const j = (i + 1) % n; area += pts[2 * i] * pts[2 * j + 1] - pts[2 * j] * pts[2 * i + 1]; }
      const sg = area > 0 ? 1 : -1;
      // tầng trệt cửa hàng (cao SHOP m, kính + bảng hiệu màu) rồi mặt tiền phía trên; mặt nhìn ra tuyến đường có mái hiên ở ~1/2 số cửa hàng
      road.at(NYC.length + s, RP);
      const rrx = Math.cos(RP.th), rrz = -Math.sin(RP.th), ys = h > 9 ? y0 + 0.6 + SHOP : y0;
      let per = (cx * 7.31 + cz * 3.17) % 24;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n, ax = pts[2 * i], az = pts[2 * i + 1], bx = pts[2 * j], bz = pts[2 * j + 1], L = Math.hypot(bx - ax, bz - az);
        const nx = sg * (bz - az) / L, nz = -sg * (bx - ax) / L;
        if (ys > y0) quad(C.shop, [[ax, y0, az], [bx, y0, bz], [bx, ys, bz], [ax, ys, az]], [nx, 0, nz], [[per / 24, 0], [(per + L) / 24, 0], [(per + L) / 24, 1], [per / 24, 1]]);
        quad(B, [[ax, ys, az], [bx, ys, bz], [bx, y1, bz], [ax, y1, az]], [nx, 0, nz], [[per / 12, (ys - y0) / 14], [(per + L) / 12, (ys - y0) / 14], [(per + L) / 12, (y1 - y0) / 14], [per / 12, (ys - y0) / 14 + (y1 - ys) / 14]]);
        // mặt tiền ra đường: cách tim đường gần FRONT, pháp tuyến quay về phía đường
        const mx = (ax + bx) / 2 - RP.x, mz = (az + bz) / 2 - RP.z, u = mx * rrx + mz * rrz;
        if (ys > y0 && L > 5 && Math.abs(Math.abs(u) - FRONT) < 5 && (nx * rrx + nz * rrz) * Math.sign(u) < -0.8) {
          for (let t = 1.5; t + 4 < L; t += 6) if (((cx + t * 13.7) * 0.37 % 1 + 1) % 1 < 0.55) {
            const k = (t + 2) / L, x = ax + (bx - ax) * k, z = az + (bz - az) * k;
            awn.push([x + nx * 0.8, y0 + 0.6 + 3.35, z + nz * 0.8, Math.atan2(nx, nz), Math.floor(((cx * 3.1 + t) % 5 + 5) % 5)]);
          }
        }
        per += L;
      }
      const shape = []; for (let i = 0; i < n; i++) shape.push(new THREE.Vector2(pts[2 * i], pts[2 * i + 1]));
      const b0 = C.roof.pos.length / 3;
      for (const p of shape) { C.roof.pos.push(p.x, y1, p.y); C.roof.nor.push(0, 1, 0); C.roof.uv.push(0, 0); }
      for (const t of THREE.ShapeUtils.triangulateShape(shape, [])) C.roof.idx.push(b0 + t[0], b0 + t[1], b0 + t[2]);
      // obb theo lưới phố
      let a0 = Infinity, a1 = -Infinity, f0 = Infinity, f1 = -Infinity;
      for (let i = 0; i < n; i++) { const ex = pts[2 * i] - cx, ez = pts[2 * i + 1] - cz, lx = ex * cs - ez * sn, lz = ex * sn + ez * cs; a0 = Math.min(a0, lx); a1 = Math.max(a1, lx); f0 = Math.min(f0, lz); f1 = Math.max(f1, lz); }
      const mx = (a0 + a1) / 2, mz = (f0 + f1) / 2;
      this.obb.push(cx + mx * cs + mz * sn, cz - mx * sn + mz * cs, cs, sn, (a1 - a0) / 2, (f1 - f0) / 2, y1);
    }
    let tris = 0;
    for (const C of chunks.values()) {
      C.walls.forEach((B, k) => { tris += mesh(this.group, B, mats[k]); });
      tris += mesh(this.group, C.roof, this.roof, true);
      tris += mesh(this.group, C.shop, this.shop);
    }
    // mái hiên: tấm nghiêng 4 × 1.6 m, màu đỏ / xanh lá / xanh navy / đen / vàng sẫm
    const AW = [0xa3201c, 0x1f5a37, 0x1d2f5c, 0x1b1b1d, 0x9a6a12];
    const ag = new THREE.BoxGeometry(4, 0.08, 1.6).rotateX(0.32), im = new THREE.InstancedMesh(ag, this.awn, awn.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
    awn.forEach(([x, y, z, yw, k], i) => { q.setFromAxisAngle(up, yw); m4.compose(v.set(x, y, z), q, sc); im.setMatrixAt(i, m4); im.setColorAt(i, col.set(AW[k])); });
    if (awn.length) { im.instanceColor.needsUpdate = true; im.castShadow = true; im.frustumCulled = false; this.group.add(im); }
    this.count = { buildings: this.obb.length / 7, chunks: chunks.size, tris, awnings: awn.length };
  }
}

const mk = () => ({ pos: [], nor: [], uv: [], idx: [] });
// tầng trệt: 4 cửa hàng / ô texture (24 m): bảng hiệu màu phía trên, kính lớn chia ô, cửa ra vào; ban đêm kính sáng ấm
function shopTex() {
  const W = 1024, H = 192, c = document.createElement('canvas'), e = document.createElement('canvas');
  c.width = e.width = W; c.height = e.height = H;
  const g = c.getContext('2d'), ge = e.getContext('2d');
  g.fillStyle = '#2a2724'; g.fillRect(0, 0, W, H); ge.fillStyle = '#000'; ge.fillRect(0, 0, W, H);
  const SIGN = ['#b3261e', '#1f4e8c', '#e8e4da', '#1b1b1b', '#2e7d4f', '#d98a1b', '#6b2d82', '#c9c3b5'];
  for (let k = 0; k < 4; k++) {
    const x0 = k * 256, sc = SIGN[(k * 3 + 1) % SIGN.length];
    g.fillStyle = sc; g.fillRect(x0 + 6, 8, 244, 40);                          // bảng hiệu
    g.fillStyle = sc === '#e8e4da' || sc === '#c9c3b5' ? '#222' : '#f4f1ea';
    for (let i = 0; i < 6; i++) g.fillRect(x0 + 40 + i * 30, 20, 20, 16);       // chữ giả (khối)
    g.fillStyle = '#121619'; g.fillRect(x0 + 10, 56, 236, 130);                  // kính
    ge.fillStyle = ['#ffd8a0', '#fff0d0', '#ffe3b8'][k % 3]; ge.fillRect(x0 + 12, 58, 232, 126);
    g.fillStyle = '#2a2724'; for (let i = 1; i < 4; i++) g.fillRect(x0 + 10 + i * 59, 56, 4, 130);
    g.fillStyle = '#3b3530'; g.fillRect(x0 + 100, 92, 56, 94);                   // cửa
    g.fillStyle = 'rgba(160,190,210,0.25)'; g.fillRect(x0 + 14, 60, 60, 40);       // ánh phản chiếu
  }
  const mkT = (cv) => { const t = new THREE.CanvasTexture(cv); t.wrapS = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; };
  return [mkT(c), mkT(e)];
}
function quad(B, V, N, uvs) {
  const b = B.pos.length / 3;
  for (let i = 0; i < 4; i++) { B.pos.push(...V[i]); B.nor.push(...N); B.uv.push(...uvs[i]); }
  const ax = V[1][0] - V[0][0], ay = V[1][1] - V[0][1], az = V[1][2] - V[0][2], bx = V[2][0] - V[0][0], by = V[2][1] - V[0][1], bz = V[2][2] - V[0][2];
  if ((ay * bz - az * by) * N[0] + (az * bx - ax * bz) * N[1] + (ax * by - ay * bx) * N[2] >= 0) B.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); else B.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
}
function mesh(group, B, mat, roof = false) {
  if (!B.idx.length) return 0;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(B.nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(B.uv, 2)); g.setIndex(B.idx);
  if (roof) { /* mái: tam giác có thể ngược chiều => vẽ 2 mặt */ mat.side = THREE.DoubleSide; }
  g.computeBoundingSphere();
  const m = new THREE.Mesh(g, mat); m.castShadow = true; m.receiveShadow = true; group.add(m);
  return B.idx.length / 3;
}
