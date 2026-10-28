// Map Hồ Xuân Hương – Đà Lạt (🌲, nhóm Chill): vòng khép kín 4.9 km quanh hồ theo đường thật (OpenStreetMap, ODbL), chiều kim đồng hồ
// (hồ bên phải xe). Dữ liệu do `node scripts/fetch-dalat.mjs` tạo từ file urban:EXPORT FBX: `dalat-data.json` (tuyến, độ cao đường, DEM 10 m)
// + docs/assets/dalat/ (dalat-city.glb: nhà / cầu / mặt nước; dalat-trees.json; dalat-streets.json). Toạ độ game: mặt hồ y = 0.
// Dùng lại code vòng của New York (`road.setShape('dalat', loop)`, s quấn vòng) và DEM của map HLG (`TP.dem`) => địa hình đúng FBX.
import * as THREE from 'three';
import DATA from './dalat-data.json' with { type: 'json' };
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { SgnCity } from './sgnCity.js';

export const DALAT = { data: DATA, length: DATA.length, start: DATA.start };

let DEM = null;
// lưới độ cao { x0, z0, cell, nx, nz, h } cho `TP.dem` (demAt nội suy song tuyến)
export function dalatDem() {
  if (DEM) return DEM;
  const D = DATA.dem, bin = atob(D.b64), u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  const q = new Int16Array(u8.buffer), h = new Float32Array(q.length);
  for (let i = 0; i < q.length; i++) h[i] = q[i] * D.scale;
  return (DEM = { x0: D.x0, z0: D.z0, cell: D.cell, nx: D.nx, nz: D.nz, h });
}

let LOOP = null;
export function dalatLoop() {
  if (LOOP) return LOOP;
  const L = DATA.length, E = DATA.elev, st = DATA.step;
  const lerp = (A) => (s) => { const r = ((s % L) + L) % L, f = r / st, i = Math.min(A.length - 2, Math.floor(f)), t = f - i; return A[i] + (A[i + 1] - A[i]) * t; };
  // abs(s): cao độ mặt đường tuyệt đối (road.js `_loopPt`), elev(s): chênh so với DEM tại tim đường
  LOOP = { loop: true, length: L, step: st, x: DATA.x, z: DATA.z, heading: DATA.heading, turn: Math.round(DATA.turn / (2 * Math.PI)) * 2 * Math.PI,
    elev: lerp(E), abs: lerp(DATA.road), keys: [], roof: -99, junctions: [], corners: [], streets: [{ s0: 0, name: 'Trần Quốc Toản' }], widths: null };
  return LOOP;
}

// cây thông Đà Lạt: thân + 3 tầng nón (gộp 1 geometry, màu đỉnh), cao 1 m => phóng theo chiều cao cây thật
function pineGeometry() {
  const parts = [], col = (g, hex) => {
    const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g;
  };
  parts.push(col(new THREE.CylinderGeometry(0.018, 0.028, 0.4, 5).translate(0, 0.2, 0), 0x5a4636));
  [[0.3, 0.42, 0.24], [0.5, 0.34, 0.2], [0.7, 0.26, 0.16], [0.86, 0.17, 0.14]].forEach(([y, r, h], k) =>
    parts.push(col(new THREE.ConeGeometry(r * 0.55, h + 0.12, 7).translate(0, y, 0), [0x2f5a2c, 0x35632f, 0x3b6b33, 0x427338][k])));
  const flat = parts.map((g) => { const f = g.toNonIndexed(); f.deleteAttribute('uv'); return f; });
  let n = 0; for (const g of flat) n += g.attributes.position.count;
  const pos = new Float32Array(n * 3), cl = new Float32Array(n * 3); let o = 0;
  for (const g of flat) { pos.set(g.attributes.position.array, o); cl.set(g.attributes.color.array, o); o += g.attributes.position.array.length; }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(cl, 3));
  geo.computeVertexNormals();
  return geo;
}

export class DalatScene {
  // groundAt(x, z): độ cao địa hình (DEM) — dải đường phụ / cây đặt theo đó
  constructor(scene, groundAt) {
    this.groundAt = groundAt;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.state = 'idle';
    this.lampU = { value: 0 };
    this.treeStride = 1;                       // Low: 2 => nửa số cây
  }
  set visible(v) { this.group.visible = v; if (v && this.state === 'idle') this._load(); }
  get visible() { return this.group.visible; }
  setLamps(k) { this.lampU.value = Math.max(0, k); }

  _load() {
    this.state = 'loading';
    const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load('assets/dalat/dalat-city.glb', (gltf) => this._city(gltf.scene), undefined, (e) => console.warn('dalat-city', e));
    fetch('assets/dalat/dalat-trees.json').then((r) => r.json()).then((T) => this._trees(T)).catch((e) => console.warn('dalat-trees', e));
    fetch('assets/dalat/dalat-streets.json').then((r) => r.json()).then((S) => this._streets(S.s)).catch((e) => console.warn('dalat-streets', e));
  }

  _city(root) {
    const winShader = (shader) => SgnCity.prototype._shader.call({ lampU: this.lampU }, shader);   // cửa sổ sáng ban đêm như map Landmark
    root.traverse((o) => {
      if (!o.isMesh) return;
      const name = o.material.name || o.name, color = o.material.color.clone();
      if (name === 'WATER') {
        o.material = new THREE.MeshStandardMaterial({ color: 0x35596a, roughness: 0.1, metalness: 0.25, side: THREE.DoubleSide,
          polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
        o.receiveShadow = true;
      } else {
        o.material = new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0 });
        if (name.startsWith('BUILDINGS')) o.material.onBeforeCompile = winShader;
        o.castShadow = o.receiveShadow = true;
      }
      o.matrixAutoUpdate = false; o.updateMatrix();
    });
    this.group.add(root);
    this.state = 'ready';
  }

  // cây theo ô 300 m (mỗi ô 1 InstancedMesh => frustum culling theo ô)
  _trees(T) {
    const geo = pineGeometry(), mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
    const C = 300, cells = new Map(), stride = this.treeStride;
    for (let i = 0, k = 0; i < T.length; i += 3, k++) {
      if (k % stride) continue;
      const key = Math.floor(T[i] / C) + ',' + Math.floor(T[i + 1] / C);
      (cells.get(key) || cells.set(key, []).get(key)).push(i);
    }
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), p = new THREE.Vector3(), sc = new THREE.Vector3();
    for (const idx of cells.values()) {
      const im = new THREE.InstancedMesh(geo, mat, idx.length);
      idx.forEach((i, n) => {
        const x = T[i], z = T[i + 1], h = T[i + 2], w = h * (0.85 + ((i * 7919) % 100) / 400);
        q.setFromAxisAngle(up, (i * 2.399) % 6.283);
        m4.compose(p.set(x, this.groundAt(x, z) - 0.2, z), q, sc.set(w, h, w));
        im.setMatrixAt(n, m4);
      });
      im.castShadow = true; im.receiveShadow = true;
      im.computeBoundingSphere();
      this.group.add(im);
    }
  }

  // các đường khác trong vùng: dải nhựa phủ trên địa hình (cao hơn mặt đất 0.15 m), lấy mẫu mỗi 4 m
  _streets(S) {
    const pos = [], G = this.groundAt;
    for (const st of S) {
      const hw = st[0], P = [];
      for (let k = 1; k + 1 < st.length; k += 2) P.push([st[k], st[k + 1]]);
      const Q = [];
      for (let i = 0; i + 1 < P.length; i++) {
        const [ax, az] = P[i], [bx, bz] = P[i + 1], n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / 4));
        for (let k = 0; k < n; k++) Q.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n]);
      }
      Q.push(P.at(-1));
      let prev = null;
      for (let i = 0; i < Q.length; i++) {
        const a = Q[Math.max(0, i - 1)], b = Q[Math.min(Q.length - 1, i + 1)];
        let dx = b[0] - a[0], dz = b[1] - a[1]; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
        const [x, z] = Q[i], nx = -dz * hw, nz = dx * hw;
        const cur = [x + nx, G(x + nx, z + nz) + 0.15, z + nz, x - nx, G(x - nx, z - nz) + 0.15, z - nz];
        if (prev) pos.push(...prev.slice(0, 3), ...prev.slice(3), ...cur.slice(0, 3), ...cur.slice(0, 3), ...prev.slice(3), ...cur.slice(3));
        prev = cur;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({ color: 0x4a4a4c, roughness: 0.92, side: THREE.DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    const m = new THREE.Mesh(geo, mat);
    m.receiveShadow = true; m.matrixAutoUpdate = false;
    this.group.add(m);
  }
}
