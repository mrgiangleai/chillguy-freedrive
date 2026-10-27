// Map Landmark 81: nhà + sông + cây thật quanh vòng tròn 2 450 m từ urban:EXPORT.
// Dữ liệu do `node scripts/convert-urban-export.mjs` tạo: sgn-city.bin/json, sgn-water.json, sgn-ue-trees.json.
// Nhà gộp 1 geometry / loại (flat normal), đế nâng theo `groundAt`; cửa sổ phát sáng ban đêm bằng shader.
import * as THREE from 'three';

const COLORS = [0xd8cfbd, 0xb9c7cf, 0xd9c3a5, 0xc2bdb6, 0xcfcdc6, 0xc9c7c2];   // nhà ở, công cộng, thương mại, công nghiệp, hạ tầng, khác

export class SgnCity {
  constructor(scene, groundAt) {
    this.groundAt = groundAt;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.state = 'idle'; this.ready = null; this.obb = []; this.treePts = null; this.count = 0;
    this.lampU = { value: 0 };
    this.mats = COLORS.map((color) => {
      const m = new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0 });
      m.onBeforeCompile = (shader) => this._shader(shader);
      return m;
    });
    this.waterMat = new THREE.MeshStandardMaterial({
      color: 0x2f5568, roughness: 0.12, metalness: 0.2, side: THREE.DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    });
  }
  set visible(v) { this.group.visible = v; if (v && this.state === 'idle') this._load(); }
  get visible() { return this.group.visible; }
  setLamps(k) { this.lampU.value = Math.max(0, k); }

  // cửa sổ 3 m khoang × 3,4 m tầng, ~35 % sáng, chỉ mặt đứng; uCityLamp do setLamps điều khiển
  _shader(shader) {
    shader.uniforms.uCityLamp = this.lampU;
    shader.vertexShader = 'varying vec3 vCityW;\nvarying vec3 vCityN;\n' + shader.vertexShader.replace(
      '#include <worldpos_vertex>',
      `#include <worldpos_vertex>
      vCityW = (modelMatrix * vec4(transformed, 1.0)).xyz;
      vCityN = normalize(mat3(modelMatrix) * objectNormal);`);
    shader.fragmentShader = 'uniform float uCityLamp;\nvarying vec3 vCityW;\nvarying vec3 vCityN;\n' + shader.fragmentShader.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
      if (abs(vCityN.y) < 0.45 && uCityLamp > 0.001) {
        float lat = abs(vCityN.x) > abs(vCityN.z) ? vCityW.z : vCityW.x;
        float dep = abs(vCityN.x) > abs(vCityN.z) ? vCityW.x : vCityW.z;
        float fx = fract(lat / 3.0), fy = fract(vCityW.y / 3.4);
        float win = step(0.12, fx) * step(fx, 0.88) * step(0.18, fy) * step(fy, 0.80);
        vec3 cell = vec3(floor(lat / 3.0), floor(vCityW.y / 3.4), floor(dep / 3.0));
        float h = fract(sin(dot(cell, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
        totalEmissiveRadiance += vec3(1.0, 0.72, 0.42) * step(0.65, h) * win * uCityLamp * 1.5;
      }`);
  }

  _load() {
    this.state = 'loading';
    this.ready = this._run();
  }
  async _run() {
    try {
      const [H, ab, W, T] = await Promise.all([
        fetch('assets/sgn-city.json').then((r) => r.json()),
        fetch('assets/sgn-city.bin').then((r) => r.arrayBuffer()),
        fetch('assets/sgn-water.json').then((r) => r.json()),
        fetch('assets/sgn-ue-trees.json').then((r) => r.json()),
      ]);
      const pts = new Array(T.length / 2);
      for (let i = 0; i < T.length; i += 2) pts[i / 2] = [T[i], T[i + 1]];
      this.treePts = pts;                                  // sgnEnv lấy trước khi dựng cây (nếu kịp)
      this._build(H, ab);
      this._water(W.tris);
      this.state = 'ready';
    } catch (e) {
      console.warn('sgn-city', e);
      this.state = 'idle';
    }
    if (this.onReady) this.onReady();
  }

  _build(H, ab) {
    const G = this.groundAt;
    const table = new Uint32Array(ab, H.tableOffset, H.tableCount * 3);
    const src = new Float32Array(ab, H.posOffset, H.tris * 9);
    const sizes = new Array(COLORS.length).fill(0);
    for (let i = 0; i < H.buildings; i++) sizes[table[i * 3 + 2]] += table[i * 3 + 1] * 9;
    const buf = sizes.map((n) => new Float32Array(n));
    const put = new Array(COLORS.length).fill(0);
    const obb = this.obb;
    for (let i = 0; i < H.buildings; i++) {
      const first = table[i * 3], count = table[i * 3 + 1], cat = table[i * 3 + 2], o = first * 9;
      let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity, y1 = 0;
      for (let k = o; k < o + count * 9; k += 3) {
        const x = src[k], y = src[k + 1], z = src[k + 2];
        if (x < x0) x0 = x; if (x > x1) x1 = x;
        if (z < z0) z0 = z; if (z > z1) z1 = z;
        if (y > y1) y1 = y;
      }
      const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      const y0 = G(cx, cz) || 0;
      // sao chép, nâng đế toà lên mặt đất
      const dst = buf[cat]; let w = put[cat];
      for (let k = o; k < o + count * 9; k += 3) {
        dst[w++] = src[k]; dst[w++] = src[k + 1] + y0; dst[w++] = src[k + 2];
      }
      put[cat] = w;
      // obb camera: trục theo cạnh ngang dài nhất; local như sgnEnv.obb
      let ax = 1, az = 0, best = 0;
      for (let t = 0; t < count; t++) {
        const a = o + t * 9;
        for (const [p, q] of [[0, 3], [3, 6], [6, 0]]) {
          const dx = src[a + q] - src[a + p], dz = src[a + q + 2] - src[a + p + 2], l2 = dx * dx + dz * dz;
          if (l2 > best) { best = l2; ax = dx; az = dz; }
        }
      }
      const len = Math.sqrt(best) || 1, cs = ax / len, sn = az / len;
      let a0 = Infinity, a1 = -Infinity, f0 = Infinity, f1 = -Infinity;
      for (let k = o; k < o + count * 9; k += 3) {
        const ex = src[k] - cx, ez = src[k + 2] - cz;
        const lx = ex * cs - ez * sn, lz = ex * sn + ez * cs;
        if (lx < a0) a0 = lx; if (lx > a1) a1 = lx;
        if (lz < f0) f0 = lz; if (lz > f1) f1 = lz;
      }
      const mx = (a0 + a1) / 2, mz = (f0 + f1) / 2;
      obb.push(
        cx + mx * cs + mz * sn, cz - mx * sn + mz * cs, cs, sn,
        Math.max(0.5, (a1 - a0) / 2), Math.max(0.5, (f1 - f0) / 2), y0 + y1,
      );
    }
    this.count = H.buildings;
    sizes.forEach((n, cat) => {
      if (!n) return;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(buf[cat], 3));
      geo.computeVertexNormals();
      geo.computeBoundingSphere();
      const mesh = new THREE.Mesh(geo, this.mats[cat]);
      mesh.castShadow = mesh.receiveShadow = true;
      mesh.matrixAutoUpdate = false;
      this.group.add(mesh);
    });
  }

  _water(tris) {
    const G = this.groundAt, n = tris.length / 2;
    const p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const x = tris[i * 2], z = tris[i * 2 + 1];
      p[i * 3] = x; p[i * 3 + 1] = (G(x, z) || 0) + 0.35; p[i * 3 + 2] = z;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(p, 3));
    geo.computeVertexNormals();
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, this.waterMat);
    mesh.receiveShadow = true;
    this.group.add(mesh);
  }
}
