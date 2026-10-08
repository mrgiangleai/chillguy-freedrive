// Road ribbon mesh + lane markings, built from a RoadPath.
import * as THREE from 'three/webgpu';

const DIRT = {period: 2600, start: 450, len: 800, ramp: 70};
const sst = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const dirtAt = (s) => { const m = ((s % DIRT.period) + DIRT.period) % DIRT.period; return sst(DIRT.start, DIRT.start + DIRT.ramp, m) * (1 - sst(DIRT.start + DIRT.len - DIRT.ramp, DIRT.start + DIRT.len, m)); };

export function buildRoadGeometry(path, {to = 240, step = 2, halfWidth = 4.6, shoulder = 1.4, dirt = false} = {}) {
  const group = new THREE.Group();
  const asphalt = new THREE.Color('#3b3e44'), dirtCol = new THREE.Color('#6b5233'), shoulderCol = new THREE.Color('#4a463f');
  const positions = [], colors = [], indices = [];
  const offsets = [-halfWidth - shoulder, -halfWidth, halfWidth, halfWidth + shoulder];
  const rows = [];
  for (let s = 0; s <= to + 1e-6; s += step) {
    const p = path.at(s), rx = Math.cos(p.th), rz = -Math.sin(p.th), d = dirt ? dirtAt(s) : 0;
    for (let c = 0; c < 4; c++) {
      const o = offsets[c];
      positions.push(p.x + rx * o, p.y + ((c === 0 || c === 3) ? 0 : 0.02), p.z + rz * o);
      const col = (c === 0 || c === 3) ? shoulderCol : _tmpRd.copy(asphalt).lerp(dirtCol, d);
      colors.push(col.r, col.g, col.b);
    }
    rows.push(s);
  }
  for (let r = 0; r < rows.length - 1; r++) for (let c = 0; c < 3; c++) {
    const a = r * 4 + c, b = a + 1, cc = (r + 1) * 4 + c, dd = cc + 1;
    indices.push(a, cc, b, b, cc, dd);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices); geo.computeVertexNormals();
  group.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({vertexColors: true, roughness: .95, metalness: 0, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2})));

  const matW = new THREE.MeshBasicMaterial({color: 0xe8e8e8, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4});
  const matY = new THREE.MeshBasicMaterial({color: 0xe0b93a, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4});
  function stripe(off, width, dash, mat) {
    const pos = [], idx = []; const hw = width / 2;
    if (dash) {
      let vi = 0;
      for (let s = 0; s < to; s += dash * 2) {
        const a = path.at(s), b = path.at(Math.min(to, s + dash));
        const rax = Math.cos(a.th), raz = -Math.sin(a.th), rbx = Math.cos(b.th), rbz = -Math.sin(b.th);
        pos.push(a.x + rax * (off - hw), a.y + .03, a.z + raz * (off - hw), a.x + rax * (off + hw), a.y + .03, a.z + raz * (off + hw), b.x + rbx * (off - hw), b.y + .03, b.z + rbz * (off - hw), b.x + rbx * (off + hw), b.y + .03, b.z + rbz * (off + hw));
        idx.push(vi, vi + 2, vi + 1, vi + 1, vi + 2, vi + 3); vi += 4;
      }
    } else {
      let vi = 0;
      for (let s = 0; s <= to + 1e-6; s += step) {
        const p = path.at(s), rx = Math.cos(p.th), rz = -Math.sin(p.th);
        pos.push(p.x + rx * (off - hw), p.y + .03, p.z + rz * (off - hw), p.x + rx * (off + hw), p.y + .03, p.z + rz * (off + hw));
      }
      const rowsN = pos.length / 6;
      for (let r = 0; r < rowsN - 1; r++) { const a = r * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx);
    return new THREE.Mesh(g, mat);
  }
  group.add(stripe(halfWidth - 0.3, 0.14, 0, matW));
  group.add(stripe(-(halfWidth - 0.3), 0.14, 0, matW));
  if (!dirt) group.add(stripe(0, 0.16, 4, matY));
  group.userData.road = true;
  return group;
}

const _tmpRd = new THREE.Color();
