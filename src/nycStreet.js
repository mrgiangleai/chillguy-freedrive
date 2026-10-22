// Map New York — đồ phố: biển tên đường xanh lá kiểu NYC ("W 53 St", "7 Av") trên cột ở góc ngã tư (tên thật từ OSM), biển ONE WAY
// (đen, mũi tên trắng) theo chiều thật của phố ngang + của đại lộ, trụ cứu hoả đỏ / vàng sát mép vỉa hè, thùng rác xanh ở góc.
// Dựng 1 lần ở vòng 1 (vị trí thế giới mọi vòng trùng nhau).
import * as THREE from 'three';
import { CITY } from './road.js';
import { NYC, nycStreet } from './nyc.js';
import { withMist } from './mist.js';
import { build as subwayGeo } from './subwayEntrance.js';

// "53rd Street" => "53 St", "Madison Avenue" => "Madison Av"; phía đông / tây của 5th Ave: E / W
const short = (n) => n.replace(/(\d+)(st|nd|rd|th)\b/, '$1').replace(/ Street$/, ' St').replace(/ Avenue$/, ' Av').replace(/^(\d+) Av$/, '$1 Av');

function nameAtlas(names) {
  const W = 1024, CH = 96, rows = Math.ceil(names.length / 2), H = THREE.MathUtils.ceilPowerOfTwo(rows * CH);
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#0d5c3a'; g.fillRect(0, 0, W, H);
  names.forEach((n, i) => {
    const x = (i % 2) * 512, y = Math.floor(i / 2) * CH;
    g.fillStyle = '#0f6b43'; g.fillRect(x + 4, y + 4, 504, CH - 8);
    g.strokeStyle = '#f2f2f2'; g.lineWidth = 4; g.strokeRect(x + 10, y + 10, 492, CH - 20);
    let fs = 58; g.font = `bold ${fs}px Arial, Helvetica, sans-serif`;
    while (g.measureText(n).width > 460 && fs > 24) { fs -= 2; g.font = `bold ${fs}px Arial, Helvetica, sans-serif`; }
    g.fillStyle = '#ffffff'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(n, x + 256, y + CH / 2 + 2);
  });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return { t, uv: (i) => { const x = (i % 2) * 0.5, y0 = 1 - (Math.floor(i / 2) * CH) / H, y1 = 1 - ((Math.floor(i / 2) + 1) * CH) / H; return [x, y1, x + 0.5, y0]; } };
}
function oneWayTex() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 96;
  const g = c.getContext('2d');
  g.fillStyle = '#111'; g.fillRect(0, 0, 256, 96);
  g.fillStyle = '#fff'; g.beginPath();
  g.moveTo(14, 30); g.lineTo(180, 30); g.lineTo(180, 12); g.lineTo(244, 48); g.lineTo(180, 84); g.lineTo(180, 66); g.lineTo(14, 66); g.closePath(); g.fill();
  g.fillStyle = '#111'; g.font = 'bold 30px Arial, Helvetica, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('ONE WAY', 98, 49);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
// trụ cứu hoả: thân trụ + nắp vòm + 2 vòi ngang (gốc tại đáy)
function hydrantGeo() {
  const parts = [new THREE.CylinderGeometry(0.13, 0.15, 0.55, 10).translate(0, 0.32, 0), new THREE.SphereGeometry(0.14, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(0, 0.59, 0),
    new THREE.CylinderGeometry(0.2, 0.2, 0.06, 10).translate(0, 0.06, 0), new THREE.CylinderGeometry(0.05, 0.05, 0.42, 8).rotateZ(Math.PI / 2).translate(0, 0.42, 0)];
  return merge(parts);
}
function merge(parts) {
  const pos = [], nor = [];
  for (const p of parts) { const g = p.toNonIndexed(); pos.push(...g.attributes.position.array); nor.push(...g.attributes.normal.array); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  return g;
}

export class NycStreetProps {
  constructor(scene, road) {
    this.road = road;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.built = false;
    this.uLit = { value: 0 };                                    // cầu đèn xanh cửa tàu điện ngầm sáng về đêm
  }
  setLamps(k) { this.uLit.value = k; }
  set visible(v) { this.group.visible = v; if (v && !this.built) this._build(); }
  get visible() { return this.group.visible; }

  _build() {
    this.built = true;
    const road = this.road.street, L = NYC.length, P = {}, HW = CITY.hw, WALK = CITY.walk, CW = CITY.side, SWK = CITY.sideWalk;
    const J = NYC.data.junctions.filter((j) => !j.corner);
    // tên (đại lộ / phố ngang) => ô atlas
    const names = [], idx = (n) => { let i = names.indexOf(n); if (i < 0) { i = names.length; names.push(n); } return i; };
    const signs = [], ones = [], poles = [], hyd = [], cans = [];
    for (const j of J) {
      road.at(L + j.s, P);
      const fx = -Math.sin(P.th), fz = -Math.cos(P.th), rx = Math.cos(P.th), rz = -Math.sin(P.th);
      const W = (a, u) => [P.x + fx * a + rx * u, P.z + fz * a + rz * u];
      const main = short(nycStreet(j.s - 30)), cross = short(j.names[0]);
      // cột tên đường: góc trước-phải (phía xe tới), sát mép vỉa hè
      const a0 = -(CW + SWK + 1.2), u0 = HW + 0.7, [px, pz] = W(a0, u0);
      poles.push([px, P.y + 0.2, pz, 4.2]);
      signs.push({ x: px, y: P.y + 0.2 + 3.9, z: pz, ax: rx, az: rz, cell: idx(cross) });   // biển phố ngang: nằm dọc phố ngang (người đi đại lộ đọc)
      signs.push({ x: px, y: P.y + 0.2 + 3.55, z: pz, ax: fx, az: fz, cell: idx(main) });    // biển đại lộ
      if (j.ow) ones.push({ x: px, y: P.y + 0.2 + 3.05, z: pz, ax: rx * j.ow, az: rz * j.ow });   // ONE WAY phố ngang: mũi tên theo chiều thật
      ones.push({ x: px, y: P.y + 0.2 + 2.6, z: pz, ax: fx, az: fz });                            // ONE WAY đại lộ (chiều đi của vòng)
      const [cx, cz] = W(a0 + 1.6, -(HW + 1.0)); cans.push([cx, P.y + 0.2, cz]);
      const [dx, dz] = W(-a0 - 1.6, HW + 1.0); cans.push([dx, P.y + 0.2, dz]);
      // trụ cứu hoả: 1 cái mỗi bên khối, sau ngã tư ~ 14–30 m
      for (const su of [-1, 1]) { const a = CW + SWK + 14 + ((j.s * 7.3 + su * 13) % 16 + 16) % 16; const [hx, hz] = W(a, su * (HW + 0.55)); hyd.push([hx, P.y + 0.2, hz, (j.s + su) % 3 < 1 ? 1 : 0]); }
    }
    // biển: mỗi biển 2 mặt (quad 2 lần ngược chiều), uv theo ô atlas
    const atlas = nameAtlas(names);
    const quadSigns = (list, w, h, uvOf) => {
      const pos = [], uv = [], nor = [], id = [];
      for (const S of list) {
        const nx = -S.az, nz = S.ax, [u0, v0, u1, v1] = uvOf(S);
        for (const side of [1, -1]) {
          const b = pos.length / 3, ox = nx * 0.02 * side, oz = nz * 0.02 * side;
          const A = [S.x - S.ax * w / 2 + ox, S.y - h / 2, S.z - S.az * w / 2 + oz], B = [S.x + S.ax * w / 2 + ox, S.y - h / 2, S.z + S.az * w / 2 + oz];
          pos.push(...A, ...B, B[0], B[1] + h, B[2], A[0], A[1] + h, A[2]);
          for (let k = 0; k < 4; k++) nor.push(nx * side, 0, nz * side);
          // mặt sau đọc ngược chiều => lật u để chữ không bị ngược
          if (side > 0) uv.push(u0, v0, u1, v0, u1, v1, u0, v1); else uv.push(u1, v0, u0, v0, u0, v1, u1, v1);
          if (side > 0) id.push(b, b + 1, b + 2, b, b + 2, b + 3); else id.push(b, b + 2, b + 1, b, b + 3, b + 2);
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(id);
      return g;
    };
    const signMat = withMist(new THREE.MeshStandardMaterial({ map: atlas.t, roughness: 0.5 }));
    this.group.add(new THREE.Mesh(quadSigns(signs, 1.9, 0.34, (S) => atlas.uv(S.cell)), signMat));
    const oneMat = withMist(new THREE.MeshStandardMaterial({ map: oneWayTex(), roughness: 0.5 }));
    this.group.add(new THREE.Mesh(quadSigns(ones, 0.92, 0.34, () => [0, 0, 1, 1]), oneMat));
    // cột, trụ cứu hoả, thùng rác: InstancedMesh
    const m4 = new THREE.Matrix4(), v = new THREE.Vector3(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), c = new THREE.Color();
    const inst = (geo, mat, list, fn) => { const im = new THREE.InstancedMesh(geo, mat, list.length); list.forEach((e, i) => { fn(e, i, im); im.setMatrixAt(i, m4); }); im.castShadow = true; im.frustumCulled = false; this.group.add(im); return im; };
    const poleMat = withMist(new THREE.MeshStandardMaterial({ color: 0x3a4a3f, roughness: 0.6, metalness: 0.4 }));
    inst(new THREE.CylinderGeometry(0.05, 0.06, 1, 8).translate(0, 0.5, 0), poleMat, poles, ([x, y, z, h]) => m4.compose(v.set(x, y, z), q.identity(), sc.set(1, h, 1)));
    const hm = inst(hydrantGeo(), withMist(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })), hyd, ([x, y, z, k], i, im) => {
      m4.compose(v.set(x, y, z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), i), sc.set(1, 1, 1)); im.setColorAt(i, c.set(k ? 0xe2b007 : 0xc8231b)); });
    hm.instanceColor.needsUpdate = true;
    inst(new THREE.CylinderGeometry(0.32, 0.28, 0.95, 10).translate(0, 0.475, 0), withMist(new THREE.MeshStandardMaterial({ color: 0x2f5b3a, roughness: 0.7 })), cans,
      ([x, y, z]) => m4.compose(v.set(x, y, z), q.identity(), sc.set(1, 1, 1)));
    // cửa tàu điện ngầm: vị trí thật OSM (nyc-data `subway`), đặt giữa vỉa hè bên đó, dời khỏi miệng ngã tư; bỏ đoạn hầm / cầu cạn
    const D = NYC.data, skip = [...D.portals, ...D.tunnels, ...D.bridges, ...D.passages], subs = [], gap = CW + SWK + 4;
    for (const [x, z, s0] of D.subway || []) {
      if (skip.some((r) => s0 > r.s0 - 30 && s0 < r.s1 + 30)) continue;
      road.at(L + s0, P);
      const rx = Math.cos(P.th), rz = -Math.sin(P.th), u = (x - P.x) * rx + (z - P.z) * rz, su = u < 0 ? -1 : 1;
      let s = s0;
      for (const j of NYC.data.junctions) { const d = s - j.s; if (Math.abs(d) < gap + 2.5) s = j.s + (d < 0 ? -1 : 1) * (gap + 2.5); }
      if (subs.some((q) => Math.abs(q.s - s) < 7 && q.su === su)) continue;
      road.at(L + s, P);
      const ex = Math.cos(P.th), ez = -Math.sin(P.th), uc = su * (HW + WALK * 0.5);
      subs.push({ s, su, x: P.x + ex * uc, y: P.y + 0.2, z: P.z + ez * uc, th: P.th + (Math.round(s) % 2 ? Math.PI : 0) });
    }
    if (subs.length) {
      const mat = withMist(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.2 }));
      mat.onBeforeCompile = (sh) => {
        sh.uniforms.uLit = this.uLit;
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uLit;')
          .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += vColor * step(0.7, vColor.g) * step(vColor.r, 0.5) * (0.25 + 2.2 * uLit);');   // cầu kính xanh
      };
      const sg = subwayGeo(THREE).geometry, sp = sg.attributes.position, scol = sg.attributes.color;
      for (let i = 0; i < sp.count; i++) {                       // lòng cầu thang (dải xám thấp sát mặt hè) tối hẳn: nhìn như lối xuống sâu
        const r = scol.getX(i), g = scol.getY(i), b = scol.getZ(i);
        if (sp.getY(i) < 0.06 && Math.abs(sp.getX(i)) < 0.86 && r < 0.3 && Math.abs(r - g) < 0.05 && Math.abs(g - b) < 0.05) scol.setXYZ(i, r * 0.25, g * 0.25, b * 0.25);
      }
      inst(sg, mat, subs, (e) => m4.compose(v.set(e.x, e.y, e.z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), e.th), sc.set(1, 1, 1)));
    }
    this.count = { names: names.length, signs: signs.length, oneWay: ones.length, hydrants: hyd.length, subway: subs.length };
  }
}
