// Kiểm dữ liệu map New York (nhà OSM, mạng đường, tòa nổi tiếng) — viết bởi worker GLM 5.3 flash free theo đề, Claude soát. Chạy: node scripts/check-nyc-buildings.mjs
// Node 20+, ES module, không phụ thuộc. Nhà < 4 m trong OSM đã được fetch-nyc nâng lên 4 m.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { performance } from 'node:perf_hooks';

const t0 = performance.now();

const read = (p) => JSON.parse(readFileSync(fileURLToPath(new URL('../' + p, import.meta.url)), 'utf8'));

const route = read('./src/nyc-data.json');
const bld = read('./docs/assets/nyc-buildings.json');
const streets = read('./docs/assets/nyc-streets.json');

const rx = route.x;
const rz = route.z;

const isFin = (v) => typeof v === 'number' && Number.isFinite(v);

// ---------------------------------------------------------------- helpers

// Absolute shoelace area of a flat [x0,z0,x1,z1,...] polygon.
function shoelace(p) {
  let a = 0;
  const n = p.length / 2;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    a += p[2 * j] * p[2 * i + 1] - p[2 * i] * p[2 * j + 1];
  }
  return Math.abs(a) / 2;
}

// Even-odd ray casting; tolerant of closed rings (zero-length edges are skipped).
function pointInPoly(px, pz, p) {
  let inside = false;
  const n = p.length / 2;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const xi = p[2 * i], zi = p[2 * i + 1];
    const xj = p[2 * j], zj = p[2 * j + 1];
    if ((zi > pz) !== (zj > pz) && px < ((xj - xi) * (pz - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

// Distance from point to segment [a, b]; zero-length segments degrade to point distance.
function distPointSeg(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const len2 = dx * dx + dz * dz;
  let t = len2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / len2 : 0;
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  const ex = ax + t * dx - px, ez = az + t * dz - pz;
  return Math.sqrt(ex * ex + ez * ez);
}

// Min distance from a point to all polygon edges.
function distToPolyEdges(px, pz, p) {
  let best = Infinity;
  const n = p.length / 2;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const d = distPointSeg(px, pz, p[2 * j], p[2 * j + 1], p[2 * i], p[2 * i + 1]);
    if (d < best) best = d;
  }
  return best;
}

function median(sorted) {
  const n = sorted.length;
  return n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
}

// ---------------------------------------------------------------- checks

const results = [];
let failed = false;
const report = (ok, line) => {
  if (!ok) failed = true;
  results.push(`${ok ? 'PASS' : 'FAIL'} ${line}`);
};

// --- Check 1: footprint geometry -----------------------------------------
{
  let badPts = 0, badFinite = 0, badArea = 0, badDup = 0, usable = 0;
  let minArea = Infinity;
  for (const [, , , poly] of bld.b) {
    if (!Array.isArray(poly) || poly.length / 2 < 3) { badPts++; continue; }
    let okFin = true;
    for (let k = 0; k < poly.length; k++) if (!isFin(poly[k])) { okFin = false; break; }
    if (!okFin) { badFinite++; continue; }
    usable++;
    const area = shoelace(poly);
    if (!(area > 4)) badArea++;
    if (area < minArea) minArea = area;
    const n = poly.length / 2;
    for (let i = 0; i < n - 1; i++) {
      if (poly[2 * i] === poly[2 * i + 2] && poly[2 * i + 1] === poly[2 * i + 3]) { badDup++; break; }
    }
  }
  const bad = badPts + badFinite + badArea + badDup;
  report(
    bad === 0,
    `1 footprints: ${bld.b.length} checked, ${bad} invalid (points<3: ${badPts}, non-finite: ${badFinite}, area<=4m2: ${badArea}, consec-dup: ${badDup}), min area ${usable ? minArea.toFixed(1) : 'n/a'} m2`
  );
}

// --- Check 2: heights ------------------------------------------------------
{
  const heights = bld.b.map((b) => b[0]).filter(isFin).sort((a, b) => a - b);
  const out = heights.filter((h) => h < 4 || h > 460).length;
  const below20 = heights.filter((h) => h < 20).length;
  report(
    heights.length === bld.b.length && out === 0,
    `2 heights: min ${heights[0]} / median ${median(heights)} / max ${heights[heights.length - 1]} m, ${below20} below 20 m, ${out} outside [4, 460]`
  );
}

// --- Check 3: class --------------------------------------------------------
{
  const bad = bld.b.filter((b) => !Number.isInteger(b[1]) || b[1] < 0 || b[1] > 4).length;
  report(bad === 0, `3 cls: ${bld.b.length} values checked, ${bad} not an integer in 0..4`);
}

// --- Check 4: corridor clearance (grid spatial index) ----------------------
{
  const CELL = 60;                       // query radius
  const CLEAR = 14.5;                    // required clearance in m
  const nB = bld.b.length;
  const bbox = new Float64Array(4 * nB); // minx, minz, maxx, maxz per building
  const grid = new Map();                // cell key -> building ids
  const key = (cx, cz) => (cx + 512) * 1024 + (cz + 512);

  const validGeo = new Uint8Array(nB);   // polygons usable for the geometry tests
  for (let i = 0; i < nB; i++) {
    const poly = bld.b[i][3];
    if (!Array.isArray(poly) || poly.length / 2 < 3) continue;
    let ok = true;
    for (let k = 0; k < poly.length; k += 2) {
      if (!isFin(poly[k]) || !isFin(poly[k + 1])) { ok = false; break; }
    }
    if (!ok) continue;
    validGeo[i] = 1;
    let minx = Infinity, minz = Infinity, maxx = -Infinity, maxz = -Infinity;
    for (let k = 0; k < poly.length; k += 2) {
      const x = poly[k], z = poly[k + 1];
      if (x < minx) minx = x;
      if (x > maxx) maxx = x;
      if (z < minz) minz = z;
      if (z > maxz) maxz = z;
    }
    bbox[4 * i] = minx; bbox[4 * i + 1] = minz; bbox[4 * i + 2] = maxx; bbox[4 * i + 3] = maxz;
    const cx0 = Math.floor(minx / CELL), cx1 = Math.floor(maxx / CELL);
    const cz0 = Math.floor(minz / CELL), cz1 = Math.floor(maxz / CELL);
    for (let cx = cx0; cx <= cx1; cx++) {
      for (let cz = cz0; cz <= cz1; cz++) {
        const k = key(cx, cz);
        let cell = grid.get(k);
        if (!grid.has(k)) grid.set(k, (cell = []));
        cell.push(i);
      }
    }
  }

  const stamp = new Int32Array(nB).fill(-1);
  let queryId = 0;
  let pairs = 0, violations = 0, worst = Infinity;

  for (let p = 0; p < rx.length; p++) {
    const px = rx[p], pz = rz[p];
    if (!isFin(px) || !isFin(pz)) continue;
    queryId++;
    const cx0 = Math.floor((px - CELL) / CELL), cx1 = Math.floor((px + CELL) / CELL);
    const cz0 = Math.floor((pz - CELL) / CELL), cz1 = Math.floor((pz + CELL) / CELL);
    for (let cx = cx0; cx <= cx1; cx++) {
      for (let cz = cz0; cz <= cz1; cz++) {
        const cell = grid.get(key(cx, cz));
        if (!cell) continue;
        for (const i of cell) {
          if (stamp[i] === queryId) continue; // already tested against this route point
          stamp[i] = queryId;
          pairs++;
          const poly = bld.b[i][3];
          const d = distToPolyEdges(px, pz, poly);
          if (d < worst) worst = d;
          if (pointInPoly(px, pz, poly) || d < CLEAR) violations++;
        }
      }
    }
  }
  if (worst === Infinity) worst = NaN; // no candidate pairs at all
  report(
    violations === 0,
    `4 corridor: ${rx.length} route points, ${pairs} point/building pairs within ${CELL} m, worst clearance ${worst.toFixed(2)} m (min required ${CLEAR} m), ${violations} violations`
  );
}

// --- Check 5: streets ------------------------------------------------------
{
  let bad = 0, badPts = 0, badFin = 0, badWidth = 0, badKind = 0, badOneway = 0;
  let total = 0;
  for (const [width, kind, oneway, coords] of streets.s) {
    let invalid = false;
    if (!Array.isArray(coords) || coords.length / 2 < 2) { badPts++; invalid = true; }
    else {
      for (let k = 0; k < coords.length; k++) if (!isFin(coords[k])) { badFin++; invalid = true; break; }
      if (!invalid) {
        for (let i = 0, j = coords.length / 2 - 1; i < j; i++) {
          const dx = coords[2 * i + 2] - coords[2 * i];
          const dz = coords[2 * i + 3] - coords[2 * i + 1];
          total += Math.sqrt(dx * dx + dz * dz);
        }
      }
    }
    if (!(isFin(width) && width >= 6 && width <= 20)) { badWidth++; invalid = true; }
    if (!(kind === 0 || kind === 1)) { badKind++; invalid = true; }
    if (!(oneway === 0 || oneway === 1)) { badOneway++; invalid = true; }
    if (invalid) bad++;
  }
  report(
    bad === 0,
    `5 streets: ${streets.s.length} polylines, ${bad} invalid (pts<2: ${badPts}, non-finite: ${badFin}, width: ${badWidth}, kind: ${badKind}, oneway: ${badOneway}), total length ${(total / 1000).toFixed(2)} km`
  );
}

// --- Check 6: landmarks ----------------------------------------------------
{
  const names = Object.keys(bld.lm ?? {});
  let badShape = 0, badDist = 0, maxNearest = 0;
  for (const name of names) {
    const v = bld.lm[name];
    if (!Array.isArray(v) || v.length !== 2 || !isFin(v[0]) || !isFin(v[1])) { badShape++; continue; }
    let best = Infinity;
    for (let p = 0; p < rx.length; p++) {
      const dx = rx[p] - v[0], dz = rz[p] - v[1];
      const d = Math.sqrt(dx * dx + dz * dz);
      if (d < best) best = d;
    }
    if (best > maxNearest) maxNearest = best;
    if (!(best <= 1500)) badDist++;
  }
  report(
    badShape === 0 && badDist === 0,
    `6 landmarks: ${names.length} checked, ${badShape} malformed, ${badDist} farther than 1500 m from every route point, farthest nearest-route distance ${maxNearest.toFixed(1)} m`
  );
}

// ---------------------------------------------------------------- summary

for (const line of results) console.log(line);
const secs = (performance.now() - t0) / 1000;
console.log(`elapsed: ${secs.toFixed(2)} s`);
process.exitCode = failed ? 1 : 0;
