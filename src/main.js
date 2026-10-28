import * as THREE from 'three';
import { ROAD, ROAD_HW, CITY, AVENUE, IC, icS, icIndex, rampU, avHump, TOLL, tollDist, tollIndex, riverIndex, CAM, camS, camIndex, avLimit, setLayout, laneCount, Road } from './road.js';
import { HLG, hlgLayout, hlgDem } from './hlg.js';
import { HlgEnv } from './hlgEnv.js';
import { NYC, NYC_DIM, nycLoop, nycStreet, NycWorks } from './nyc.js';
import { SGN, sgnLoop, sgnStreet, sgnZone, SgnScene } from './sgn.js';
import { SgnEnv } from './sgnEnv.js';
import { SgnCity } from './sgnCity.js';
import { DALAT, dalatLoop, dalatDem, DalatScene, WATER_DROP, DALAT_ENV, FAKE_LIGHT, addFakeLight, CANAL_CUT, addCanalCut, noCenterLineNearRoundabout, RB_ON, nearRoundabout } from './dalat.js';
import { Diag } from './diag.js';
import { TimesSquare } from './timesSquare.js';
import { NycBuildings } from './nycBuildings.js';
import { NycStreetProps } from './nycStreet.js';
import { NycStreetNet } from './nycNet.js';
import { NycSound } from './nycSound.js';
import { VnHouses } from './vnHouses.js';
// mặc định của game = bộ cài đặt chú chỉnh trên Safari (xuất localStorage 21/10/2026): người chơi mới nhận bộ này,
// nút "Mặc định" trong các bảng chỉnh trả về số của bộ này (không phải số gốc trong code)
import DEF from './default-settings.json' with { type: 'json' };
import * as preload from './preload.js';
import { Avenue } from './avenue.js';
import { Minimap } from './minimap.js';
import { City, SIGNAL } from './city.js';
import { CityTraffic, VEHICLE_TYPES, VEHICLE_COLORS } from './cityTraffic.js';
import { loadNpcCars } from './npcCars.js';
import { CityPeople } from './cityPeople.js';
import { CityIncident } from './cityIncident.js';
import { CrashFx } from './crashfx.js';
import { Scenery, STREETLIGHT_DEFAULTS } from './scenery.js';
import { Terrain } from './terrain.js';
import { setTerrainMap, TP, demAt } from './terrain-noise.js';
import { Environment } from './world.js';
import { Cars } from './cars.js';
import { CameraRig, FOCAL_MIN, FOCAL_MAX } from './camera.js';
import { AdminCam } from './adminCam.js';
import { ChillAudio } from './audio.js';
import { ReedField } from './reeds.js';
import { Post } from './post.js';
import { installMist, MIST } from './mist.js';
import { WET } from './wetGlass.js';
import { WetReflection } from './reflection.js';
import { Person, CHARACTERS } from './person.js';
import { StopScene, PARK_DEFAULTS } from './stopscene.js';
import { Nature } from './nature.js';
import { RearMirror } from './mirror.js';
import { WingMirrors } from './wingmirrors.js';
import { Wipers } from './wipers.js';
import { Showroom } from './showroom.js';
import { Fireflies, FIREFLY_DEFAULTS } from './fireflies.js';
import { ValleyTown } from './town.js';
import { DashScreen } from './dashscreen.js';
import { Traffic } from './traffic.js';
import { Ocean } from './ocean.js';
import { roadPosition, TRAFFIC } from './traffic-ai.js';
import { Cows, COW_DEFAULTS } from './cows.js';
import { Waterfalls } from './waterfalls.js';
import { Smoke } from './smoke.js';
import { HEADLIGHT_DEFAULTS } from './headlights.js';

installMist();   // thay shader sương của three.js (phải chạy trước khi vật liệu được biên dịch)
import { MAPS, WEATHERS, TIMES, CAMERAS, MUSIC_MODES, FSTOPS, FSTOP_DEFAULT, QUALITY, QUALITY_DEFAULT } from './config.js';

const $ = (id) => document.getElementById(id);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// tốc độ (m/s). Chill: 10–40 km/h (mặc định 35). Fast drive: 150 km/h.
const KMH = 1 / 3.6;
// cấp tốc độ (nút ⚡ / phím F xoay vòng): chill 25 → 50 → Fast drive 180 km/h (có hiệu ứng tốc độ)
const LANE_D = 1.5;                // xe chạy lệch tim đường 1.5 m (sát vạch vàng giữa, giữa làn là 2.3 m)
const GEARS = [25 * KMH, 50 * KMH, 180 * KMH];
const CHILL_DEFAULT = GEARS[0], CHILL_MIN = 10 * KMH, CHILL_MAX = 60 * KMH, FAST_SPEED = GEARS[2];
// map Đại lộ: cấp tốc độ cao tốc 80 → 100 → 180 km/h, chỉnh tay (W/S) tới 120 km/h
const AV_GEARS = [80 * KMH, 100 * KMH, 180 * KMH], AV_MAX = 120 * KMH;
// map Cao tốc HLG (dữ liệu thật) dùng chung mọi thứ của Đại lộ: `mapKind` quy 'hlg' về 'avenue'; New York dùng map Phố
const mapKind = (id) => (id === 'hlg' ? 'avenue' : id === 'nyc' || id === 'sgn' ? 'city' : id);
const onNyc = () => MAPS[state.map]?.id === 'nyc';
const onSgn = () => MAPS[state.map]?.id === 'sgn';
const onDalat = () => MAPS[state.map]?.id === 'dalat';
const onAvenue = () => mapKind(MAPS[state.map]?.id) === 'avenue';
const gears = () => (onAvenue() ? AV_GEARS : GEARS);

// ---------- renderer / scene ----------
const canvas = $('c');
// cảnh luôn vẽ vào render target của hậu kỳ (có MSAA riêng) => canvas không cần khử răng cưa
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
let pixelRatio = 1;
renderer.setPixelRatio(pixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 1, 0.3, 4000);
camera.layers.enable(3);   // layer 3: mặt đường, cỏ, cây, mưa — chỉ vẽ ở camera chính (không vẽ trong ảnh phản chiếu)

const road = new Road();
const scenery = new Scenery(scene, road, renderer);
const terrain = new Terrain(scene, road, renderer);
addFakeLight(terrain.mat); addCanalCut(terrain.mat); addFakeLight(scenery.roadMat); noCenterLineNearRoundabout(scenery.roadMat);   // ánh sáng giả đèn đường (map Đà Lạt; map khác uFakeK = 0)
const env = new Environment(renderer, scene, camera);
env.starPx = renderer.getPixelRatio();          // cỡ sao theo độ phân giải (điện thoại ×2–3)
const reeds = new ReedField(scene, renderer);
const grass = new ReedField(scene, renderer, 'grass');   // búi cỏ cho map đồi thông
const meadow = new ReedField(scene, renderer, 'meadow'); // cỏ cao cho map đồi cỏ
const cars = new Cars(scene);
const rig = new CameraRig(camera);
const admin = new AdminCam(camera);   // camera quan sát cho chế độ Stop (src/adminCam.js)
rig.groundAt = (x, z) => (nycCovered() ? drive.pos.y : Math.max(terrain.heightAt(x, z), ocean.group.visible ? ocean.level + 1.2 : -Infinity));   // không chui xuống đất / xuống nước; trong hầm: mặt đường
admin.groundAt = (x, z) => rig.groundAt(x, z);   // camera admin cũng không chui xuống đất / nước
// New York: xe đang trong / sát đoạn hầm có trần => camera ở dưới trần (mặt dưới trần thấp hơn mặt phố 0.6 m)
const nycCovered = () => (onNyc() || onSgn()) && road.elevAt(drive.s) < road.loop.roof + 1.2;   // vòng có hầm kín: New York, Landmark (hầm Thủ Thiêm)
rig.ceilAt = () => (nycCovered() ? road.street.at(drive.s, {}).y - 1.9 : Infinity);
// mắt người lái thật: xương đầu + 9 cm lên, 4 cm về sau (toạ độ thế giới)
const _eyeF = new THREE.Vector3(), _eyeU = new THREE.Vector3();
rig.eyeAt = (out) => {
  if (!person.ready || stop.active) return false;
  person.head.getWorldPosition(out);
  _eyeF.set(0, 0, -1).applyQuaternion(cars.root.quaternion);
  _eyeU.set(0, 1, 0).applyQuaternion(cars.root.quaternion);
  out.addScaledVector(_eyeU, 0.15).addScaledVector(_eyeF, -0.04);   // mắt cao hơn xương đầu một chút
  return true;
};
const audio = new ChillAudio();
const nycSound = new NycSound(audio);                         // map New York: còi xe xa, còi hụ, đám đông Times Square
const post = new Post(renderer, QUALITY[QUALITY_DEFAULT].msaa);
const refl = new WetReflection(renderer);
const lakeRefl = new WetReflection(renderer);   // map Đà Lạt: phản chiếu cảnh trên mặt hồ Xuân Hương (theo cài đặt phản chiếu của chất lượng)
const person = new Person();
const stop = new StopScene(cars, person);
const showroom = new Showroom(renderer, post);   // chế độ Race!: showroom chọn xe + người lái (src/showroom.js)
// mặt đất dưới người khi xuống xe: mặt đường (+5 cm), vỉa hè map Phố (+20 cm), còn lại địa hình
// Đại lộ: ngoài mép cao tốc trong vùng nút giao (nhánh rẽ, đường ngang) mặt đất ở cao độ nền (`road.baseY`), không theo cầu vượt
const avLowY = (s, u) => (onAvenue() && Math.abs(u) > AVENUE.hw + 0.3 && Math.abs(s - icS(icIndex(s))) < IC.rampLen + 20 ? road.baseY(s) : null);
stop.groundAt = (x, z) => {
  const rp = roadPosition({ x, z }, road, drive.s), p = road.at(rp.s, {}), a = Math.abs(rp.d);
  const hw = road.hwAt(rp.s);
  if (a <= hw) return p.y + 0.05;
  const low = avLowY(rp.s, rp.d);
  if (low !== null) return low + 0.05;
  if (mapKind(MAPS[state.map].id) === 'city' && a <= hw + CITY.walk + 0.4) {
    const j = road.nearJunction(rp.s);
    return road.street.at(rp.s, {}).y + (Math.abs(rp.s - j) < CITY.side ? 0.05 : 0.2);   // New York: vỉa hè ở mặt phố (hầm / cầu cạn)
  }
  return Math.max(terrain.heightAt(x, z), p.y - 0.02);
};
cars.viewer = camera;
const smoke = new Smoke(scene, person);       // điếu thuốc + khói (cảnh dừng xe)
const nature = new Nature(scene);
const mirror = new RearMirror(renderer);
const wing = new WingMirrors(renderer);       // gương chiếu hậu hai bên (soi thật khi ngồi trong xe)
const wipers = new Wipers();
const fireflies = new Fireflies(scene);
const town = new ValleyTown(scene);           // map núi: thị trấn + đèn đường dưới thung lũng
const city = new City(scene, road, scenery.roadMat, scenery);
const vnHouses = new VnHouses();
city.vnHouses = vnHouses;
scenery.extraLamps = () => city.lamps();   // map Phố: nhà, vỉa hè, ngã tư, vạch kẻ
rig.collide = (pos, cam, dt) => city.collide(pos, cam, dt);
const dash = new DashScreen();                // màn hình giải trí trên taplo (hắt sáng lên người lái)
const _trafficPerson = new THREE.Vector3();
const traffic = new Traffic(scene, cars);     // thỉnh thoảng có xe chạy ngược chiều
traffic.stopFor = (s, dir, v) => city.stopAhead(s, dir, v);   // xe NPC dừng đèn đỏ (map Phố)
const cityTraffic = new CityTraffic(scene, road, city);      // map Phố: xe dựng bằng code, 4 làn + đường ngang
const cityPeople = new CityPeople(scene, road, city);        // map Phố: người đi bộ
const _yp = {};
cityPeople.yAt = (s, u, y) => avLowY(s, u) ?? ((onNyc() || onSgn()) && Math.abs(u) > CITY.hw ? road.street.at(s, _yp).y : y);   // đại lộ: nhánh rẽ / đường ngang ở cao độ nền; New York: vỉa hè ở mặt phố
cityPeople.groundAt = (x, z) => terrain.heightAt(x, z);      // người dạo công viên (Landmark) đứng trên địa hình thật
const CITY_DIM = { hw: CITY.hw, walk: CITY.walk, side: CITY.side, sideWalk: CITY.sideWalk, lanes: CITY.lanes };   // kích thước map Phố (gốc)
const nycWorks = new NycWorks(scene, road, scenery.roadMat);   // map New York: tường + trần hầm Park Ave, cầu cạn quanh Grand Central
const sgnWorks = new NycWorks(scene, road, scenery.roadMat, sgnLoop);
const sgnScene = new SgnScene(scene, (x, z) => terrain.heightAt(x, z));   // map Landmark: tháp Landmark 81 (toạ độ thật)
// vị trí công trình nhỏ quanh Landmark 81: cầu xoắn bắc ngang Trần Trọng Kim chỗ gần tháp nhất (trục X của model = ngang đường);
// tượng + hồ: tâm đài phun OSM gần chân tháp nhất (đọc sgn-env.json lúc dựng => dùng điểm cố định đo từ dữ liệu)
sgnScene.place = () => {
  const L = SGN.length, [lx, lz] = SGN.data.landmark81, P = {};
  let bs = 0, bd = Infinity;
  for (let s = 0; s < 2000; s += 2) { if (sgnStreet(s) !== 'Trần Trọng Kim') continue; road.at(L + s, P); const d = Math.hypot(P.x - lx, P.z - lz); if (d < bd) { bd = d; bs = s; } }
  road.at(L + bs, P);
  const out = [{ name: 'helixBridge', x: P.x, z: P.z, y: road.street.at(L + bs, {}).y, rot: P.th }];
  // tượng: lệch 55 m từ chân tháp về phía các tháp chung cư (hướng ngược tuyến Trần Trọng Kim), trục dài song song đường
  const dx = lx - P.x, dz = lz - P.z, l = Math.hypot(dx, dz) || 1;
  out.push({ name: 'plazaSculpture', x: lx + dx / l * 55, z: lz + dz / l * 55, rot: P.th + Math.PI / 2 });
  return out;
};
const sgnEnv = new SgnEnv(scene, (x, z) => terrain.heightAt(x, z));       // map Landmark: khu Vinhomes (tháp chung cư, biệt thự, công viên, hồ, sông, cây — OSM)
const sgnCity = new SgnCity(scene, (x, z) => terrain.heightAt(x, z));     // nhà / sông / cây thật quanh Landmark 81 (urban:EXPORT)
let fakeT = 1;
const diag = new Diag();                                                 // chẩn đoán map Đà Lạt (tạm thời, tới khi hết đơ)
let diagTris = '';
diag.info = () => diagTris;
const dalatScene = new DalatScene(scene, (x, z) => demAt(dalatDem(), x, z));
dalatScene.initTraffic(cityTraffic, VEHICLE_TYPES, VEHICLE_COLORS, 24);   // xe trên đường phụ Đà Lạt (số xe theo chất lượng: applyMap)        // map Hồ Xuân Hương: nhà / hồ / cây thông thật (urban:EXPORT), đường phụ OSM
dalatScene.diag = diag; dalatScene.renderer = renderer;   // renderer: chụp impostor cây xa
dalatScene.onLake = (tex, b) => { if (onDalat()) diag.time('ocean.setLake', () => ocean.setLake(true, WATER_DROP, tex, b)); };   // mặt hồ Xuân Hương = nước map Biển (chế độ hồ)
sgnEnv.city = sgnCity;                                                    // sgnEnv chờ cây của sgnCity rồi dựng chung
const sgnObb = () => { if (sgnEnv.visible) city.extraObb = sgnEnv.obb.concat(sgnCity.obb); };
sgnEnv.onReady = sgnObb;
sgnCity.onReady = sgnObb;
sgnEnv.avoid = (x, z) => sgnNear(x, z, 13);                  // cây không mọc trên lòng đường / vỉa hè tuyến
sgnEnv.base = SGN.data.vinhomes; sgnEnv.walk = CITY.walk;
sgnEnv.plaza = { x: SGN.data.landmark81[0], z: SGN.data.landmark81[1], r: 170 };   // khu đi bộ quanh chân Landmark 81 (đá lát, đài phun, cọ)                              // nền thảm cỏ cả khu Vinhomes
sgnEnv.roadGap = (x, z) => { const [d, s] = sgnNearest(x, z); return d - road.hwAt(SGN.length + s); };   // nền cỏ: khoảng cách tới mép nhựa thật
try { sgnEnv.treeDetail = localStorage.getItem('chilldrive.sgn.trees') !== '0'; } catch { /* chế độ riêng tư */ }
try { sgnEnv.treesVisible = localStorage.getItem('chilldrive.sgn.treesVisible') !== '0'; } catch { /* chế độ riêng tư */ }
// hàng cây hai bên đường từ Nguyễn Hữu Cảnh qua Vạn Hoa 4 / 3, Trần Trọng Kim (s 0–1500), mỗi 11 m, trên vỉa hè sát lề (tính khi dựng)
sgnEnv.street = {
  * [Symbol.iterator]() {
    const L = SGN.data.length, P = {}, hwAt = (s) => (road.hwAt ? road.hwAt(L + s) : CITY.hw);
    // ngoài khu Vinhomes (s < 494: Nguyễn Hữu Cảnh) cây thưa gấp đôi (22 m), trong khu 11 m
    for (let s = 20; s < 1500; s += s < 494 ? 22 : 11) { road.at(L + s, P); for (const su of [-1, 1]) { const u = su * (hwAt(s) + CITY.walk * 0.55); yield [P.x + Math.cos(P.th) * u, P.z - Math.sin(P.th) * u, 2, s]; } }
    // cây giữa dải phân cách bồn cây (mỗi 12 m, cùng loại cây với phố đó); city.js không dựng cây low-poly ở dải nữa (`medianTreesOff`)
    const md = { w: 0, kind: null };
    for (let s = 6; s < L; s += 12) { road.medianAt(L + s, md); if (md.kind !== 'plant' || md.w < 1) continue; road.at(L + s, P); yield [P.x, P.z, 2, s]; }
  },
};
const timesSq = new TimesSquare(scene, road, city);
try { timesSq.setMirror(localStorage.getItem('chilldrive.nyc.mirror') !== '0'); } catch { /* chế độ riêng tư */ }            // map New York: Times Square (nhà chọc trời, biển LED, quảng trường, đám đông)
let farShadowSaved = false;                                                                                                  // bóng nắng xa — ánh sáng dùng chung mọi map (mặc định tắt)
try { farShadowSaved = localStorage.getItem('chilldrive.farShadow') === '1'; } catch { /* chế độ riêng tư */ }
cityPeople.extra = () => (timesSq.visible ? timesSq.near : []);
const nycBld = new NycBuildings(scene, timesSq, road);
const nycNet = new NycStreetNet(scene, city.walkMat);          // map New York: mạng đường thật quanh tuyến (phố thông sang đại lộ bên cạnh)
nycNet.landmarks = () => nycBld.rectsReady;                    // nycNet chờ khung tòa nổi tiếng rồi mới dựng (cắt phố đi bộ dưới chân tòa)
const nycProps = new NycStreetProps(scene, road);            // map New York: biển tên đường, ONE WAY, trụ cứu hoả, thùng rác               // map New York: nhà thật OSM (footprint + chiều cao)
nycBld.onReady = () => { if (nycBld.visible) city.extraObb = timesSq.obb.concat(nycBld.obb); };
const avenue = new Avenue(scene, road, scenery.cityTex);     // map Đại lộ: vạch kẻ 6 làn + dải phân cách + nút giao (xe: cityTraffic chế độ avenue)
const hlgEnv = new HlgEnv(scene, road, city, avenue);       // map Cao tốc HLG: nhà / cây / màu đất theo bản đồ thật (tải assets/hlg-env.json)
hlgEnv.onLand = () => { if (hlgEnv.visible) { terrain.reset(); terrain.setCar(drive.s); } };   // lưới màu đất sẵn sàng => tô lại địa hình
terrain.extraCarve = (x, z, h, h0, ns, nd) => avenue.carve(x, z, h, h0, ns, nd);
avenue.groundAt = (x, z) => terrain.heightAt(x, z);
scenery.railGap = (s) => avenue.visible && avenue.railGap(s);
meadow.exclusions = avenue.excl;
cityTraffic.avenue = avenue;
// bản đồ tròn góc phải: đường + xe thật; bấm vào để phóng to, kéo / zoom như bản đồ
const _mmP = {}, _mmX = {};
const minimap = new Minimap({
  road, city, avenue,
  nyc: () => (state.map >= 0 && MAPS[state.map].id === 'nyc' ? { streets: nycNet.streets, bld: nycBld.foot } : null),
  sgn: () => (onSgn() ? SGN.data : null),
  sgnBld: () => (onSgn() ? sgnEnv.foot : null),                // map Landmark: nhà khu Vinhomes
  dalat: () => (onDalat() ? { lake: DALAT.data.lake, streets: dalatScene.streets } : null),   // map Đà Lạt: hồ + đường phụ
  visible: () => state.started && (isDriveMap(state.map) || onDalat() || admin.active),   // Stop: hiện ở mọi map để bấm; Đà Lạt (Chill) cũng hiện
  mapId: () => mapKind(MAPS[state.map].id),
  s: () => drive.s,
  player: () => ({ x: drive.pos.x, z: drive.pos.z, th: drive.yaw }),
  onCenter: () => admin.clearFocus(),                         // nút ◎: admin quay về xe
  // dấu camera admin (Stop): chấm xanh + hướng nhìn
  adminMark: () => {
    if (!admin.active) return null;
    const p = camera.position, t = admin.mode === 'free' ? null : (admin.focus || drive.pos);
    const th = t ? Math.atan2(-(t.x - p.x), -(t.z - p.z)) : admin.free.yaw;
    return { x: p.x, z: p.z, th };
  },
  // bấm bản đồ phóng to: tìm điểm trên đường chính gần chỗ bấm (≤ 60 m) rồi dời xe tới đó
  onPick: (x, z, small) => {
    if (admin.active) { admin.moveTo(x, z); return; }         // Stop: dời camera admin, xe đứng yên
    if (small) return;                                        // thu nhỏ: bấm chỉ để phóng to
    const s = minimap.nearestS(x, z, 60);
    if (s == null) return;
    jumpTo(s);
    return 'close';
  },
  cars: () => {
    const out = [];
    if (cityTraffic.visible) {
      for (const c of cityTraffic.cars) {
        if (c.xr) { avenue.crossPose(c.xr.I, c.xr.u, c.xr.a, c.xr.du, _mmX); out.push([_mmX.x, _mmX.z]); continue; }
        if (c.cross) { const F = city._frame(road.junction(c.cross.n)); out.push([F.x + F.fx * c.cross.a + F.rx * c.cross.u, F.z + F.fz * c.cross.a + F.rz * c.cross.u]); continue; }
        road.at(c.s, _mmP); out.push([_mmP.x + Math.cos(_mmP.th) * c.d, _mmP.z - Math.sin(_mmP.th) * c.d]);
      }
    } else for (const v of traffic.active) { road.at(v.s, _mmP); out.push([_mmP.x + Math.cos(_mmP.th) * v.d, _mmP.z - Math.sin(_mmP.th) * v.d]); }
    return out;
  },
});

// Bản đồ: dời xe tới độ dài cung s — giữ làn + tốc độ, dựng lại đường / địa hình / phố,
// dọn xe & người đang chồng chỗ mới, đặt camera ngay (không lướt từ xa tới).
function jumpTo(s) {
  const off = camera.position.clone().sub(drive.pos);
  const L = road.loop?.length || 0;
  const rel = (a, b) => {                                    // khoảng cách dọc đường, vòng kín: ngắn nhất
    if (!L) return a - b;
    let d = ((a - b) % L + L) % L;
    return d > L / 2 ? d - L : d;
  };
  const P = road.at(s, {});
  drive.s = s; drive.ramp = null; drive.latVel = 0;          // giữ drive.d, drive.v / target
  drive.pos.set(P.x + Math.cos(P.th) * drive.d, P.y, P.z - Math.sin(P.th) * drive.d);
  drive.yaw = P.th;
  terrain.setCar(s); city.prime(s); avenue.prime(s);
  terrain.prime(drive.pos);
  // xe NPC / người đi bộ đang chồng lên xe mình: bỏ đi (như lúc bắt đầu lại sau tai nạn)
  cityTraffic.cars = cityTraffic.cars.filter((c) => c.cross || c.xr || c.script || Math.abs(c.d - drive.d) > 2.6 || rel(c.s, s) < -14 || rel(c.s, s) > 22);
  for (const p of cityPeople.peds.slice()) if (Math.abs(p.u - drive.d) < 2.5 && Math.abs(rel(p.s, s)) < 6) cityPeople.remove(p);
  // camera: giữ nguyên góc nhìn tương đối nhưng đặt ngay tại vị trí mới
  camera.position.copy(drive.pos).add(off);
  rig.relP.copy(off);
  toast(`Tới s = ${Math.round(s)} m`, false, 1800);
}
cityTraffic.setup(scene, cars.softTex, camera);
const crashFx = new CrashFx(scene, cars.softTex);   // va chạm: rung mạnh + khói đầu xe
const _hood = new THREE.Vector3();
const hoodPos = (out) => cars.root.localToWorld(out.set(0, cars.dim.height * 0.62, -cars.dim.length / 2 + 0.75));
// cú va chạm vật lý: xe mình khựng + chúi đầu + nảy ngang, rung camera, đâm mạnh (> ~20 km/h tương đối) thì khói bốc từ capo
// tiếng người đi bộ nói chuyện (map Phố): 3 nguồn gần camera nhất trong 22 m; tắt hết khi rời phố
const _voices = [], _camR = new THREE.Vector3(), _vd = new THREE.Vector3();
function chatter(off = false) {
  if (!audio.chat && off) return;
  const list = off ? [] : cityPeople.voices(_voices);
  const cp = camera.position;
  for (const v of list) v.d = Math.hypot(v.x - cp.x, v.z - cp.z);
  list.sort((a, b) => a.d - b.d);
  _camR.set(1, 0, 0).applyQuaternion(camera.quaternion);
  for (let i = 0; i < 3; i++) {
    const v = list[i];
    if (!v || v.d > 22) { audio.setChatter(i, 0); continue; }
    _vd.set(v.x - cp.x, 0, v.z - cp.z).normalize();
    audio.setChatter(i, (1 - v.d / 22) ** 2 * (v.crowd ? 1.3 : 1), _vd.dot(_camR) * 0.8, v.crowd);
  }
}
function impact(rel, latSign) {
  const power = Math.min(1, rel / 14);
  drive.pitch -= 0.05 * power + 0.015;
  drive.latVel += latSign * (0.6 + 2.2 * power);
  crashFx.hit(power, hoodPos, rel > 5.5);
  audio.crash(power);
}
// bảng 🚦 "Thêm xe thật vào giao thông": lần đầu bật mới tải bản nhẹ xe thật (npcCars.js) cho giao thông phố (mọi map phố);
// map ngắm cảnh (traffic.js) vốn chỉ có xe thật — bật thì có cả xe chú đang lái
let npcCarsLoading = false;
function wantRealTraffic() {
  if (!trafficTune.models || npcCarsLoading || !cars.loader) return;
  npcCarsLoading = true;
  loadNpcCars(cars).then((ms) => { if (ms.length) cityTraffic.addReal(ms); }).catch((e) => console.warn('npc cars', e));
}
let driverHidden = false, crashCam = null, crashGrace = 0, hitCool = 0, tollWarn = null, tollPaid = null;
const incident = new CityIncident(cityTraffic, cityPeople, {   // map Phố: đâm xe / người => cảnh sát + cấp cứu
  toast: (t, bad) => toast(t, bad),
  fade: (on, text) => { const f = $('fade'); if (text) f.textContent = text; f.classList.toggle('show', on); },
  driverHidden: (b) => { driverHidden = b; },
  carPos: () => [drive.s, drive.d],
  ramp: () => (onAvenue() ? drive.ramp : null),
  // chú bước ra khỏi xe (cảnh dừng xe, đứng yên chờ, không hút thuốc)
  exitCar: () => { drive.v = 0; const ok = stop.leaveCar(cars.dim); if (ok) refreshUI(); return ok; },
  personPos: () => {
    if (stop.state !== 'parked' || !person.ready) return null;
    person.root.getWorldPosition(_trafficPerson);
    return roadPosition(_trafficPerson, road, drive.s);
  },
  // thôi cảnh đứng ngoài xe: người lái về ghế (bị ẩn), camera trả về chế độ quay quanh xe, lướt mượt từ chỗ đang đứng
  endStop: () => {
    if (!stop.active) return;
    const look = stop.cam.look.clone();
    stop.release();
    rig.setMode(state.cam);
    rig.relP.copy(camera.position).sub(drive.pos);
    rig.relL.copy(look).sub(drive.pos);
    rig.fov = camera.fov;
    rig.look.yaw = rig.look.pitch = 0;
    refreshUI();
  },
  siren: (kind, level, pan) => audio.setSiren(kind, level, pan),
  end: () => {
    drive.v = 0;
    // bắt đầu lại: xe về đúng làn ngoài bên phải, dọn xe / người đang chồng chỗ đó, 3 s không tính va chạm (khỏi bị bắt lặp lại)
    drive.home = cityTraffic.lanes[1]; drive.d = drive.home; drive.latVel = 0; drive.manual = false;
    drive.ramp = null;
    cityTraffic.cars = cityTraffic.cars.filter((c) => c.cross || c.xr || c.script || Math.abs(c.d - drive.d) > 2.6 || c.s < drive.s - 14 || c.s > drive.s + 22);
    for (const p of cityPeople.peds.slice()) if (Math.abs(p.u - drive.d) < 2.5 && Math.abs(p.s - drive.s) < 6) cityPeople.remove(p);
    crashGrace = 3;
    state.cam = CAMERAS.findIndex((c) => c.id === 'chase'); rig.setMode(state.cam); onCamChange(); refreshUI(); crashCam = null;   // bắt đầu lại: luôn camera Sau xe
    crashFx.clear();
    toast('Lái cẩn thận nhé! Nhớ dừng đèn đỏ và nhường người đi bộ.');
  },
});
const ocean = new Ocean(scene);               // map Biển: mặt biển sóng (bake từ ocean_scene_animated.glb)
const waterfalls = new Waterfalls(scene, road, terrain);
const cows = new Cows(scene);                 // map đồi cỏ: đàn bò sữa sau hàng rào gỗ
cars.tilt.add(dash.group);
cars.tilt.add(mirror.group);

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  post.resize();
  refl.resize(); lakeRefl.resize();
  layoutBars();
}
// dải đen letterbox: tỉ lệ khung ~2.39:1 (tối đa 13.5% chiều cao mỗi dải; màn hình rất rộng thì không có dải)
let barFrac = 0;
function layoutBars() {
  const w = window.innerWidth, h = window.innerHeight;
  const bar = Math.min(h * 0.135, Math.max(0, (h - w / 2.39) / 2));
  barFrac = bar / h;
  document.documentElement.style.setProperty('--bar', bar.toFixed(1) + 'px');
}
window.addEventListener('resize', resize);

// ---------- điện thoại: toàn màn hình + màn hình ngang ----------
const IS_PHONE = matchMedia('(pointer: coarse)').matches && Math.min(screen.width, screen.height) < 600;
const IS_IOS = /iP(hone|od|ad)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const docEl = document.documentElement;
const CAN_FS = !!(docEl.requestFullscreen || docEl.webkitRequestFullscreen);
const isFS = () => !!(document.fullscreenElement || document.webkitFullscreenElement);
function enterFS() {
  if (!CAN_FS || isFS()) return;
  const req = docEl.requestFullscreen ? docEl.requestFullscreen({ navigationUI: 'hide' }) : docEl.webkitRequestFullscreen();
  // toàn màn hình rồi thì khoá ngang (Android Chrome hỗ trợ; nơi khác bỏ qua)
  Promise.resolve(req).then(() => screen.orientation?.lock?.('landscape')).catch(() => {});
}
function exitFS() {
  if (!isFS()) return;
  try { screen.orientation?.unlock?.(); } catch { /* bỏ qua */ }
  (document.exitFullscreen || document.webkitExitFullscreen).call(document);
}
// điện thoại: tự vào toàn màn hình ở lần chạm đầu tiên (trình duyệt bắt buộc phải có thao tác chạm) và mỗi lần chạm sau
// nếu đã bị thoát ra (vuốt / xoay máy...) — trừ khi người chơi chủ động bấm nút thoát toàn màn hình
let fsOptOut = false;
const toggleFS = () => { if (isFS()) { fsOptOut = true; exitFS(); } else { fsOptOut = false; enterFS(); } };
// (cảm ứng: trình duyệt chỉ cho phép khi nhấc tay — pointerup / touchend — chứ không phải lúc chạm xuống)
const autoFS = (e) => { if (!fsOptOut && !isFS() && !el.full.contains(e.target)) enterFS(); };
if (IS_PHONE) { window.addEventListener('pointerup', autoFS, true); window.addEventListener('touchend', autoFS, true); }
// đổi hướng / vào-ra toàn màn hình: kích thước báo về trễ trên một số máy => đo lại vài lần
const resizeSoon = () => { resize(); setTimeout(resize, 120); setTimeout(resize, 450); updateRotate(); };
['fullscreenchange', 'webkitfullscreenchange'].forEach((ev) => document.addEventListener(ev, () => { resizeSoon(); refreshUI(); }));
window.addEventListener('orientationchange', resizeSoon);
window.visualViewport?.addEventListener('resize', resize);
// cầm dọc trên điện thoại: gợi ý xoay ngang (có thể bỏ qua)
let rotateOk = false;
function updateRotate() {
  const show = IS_PHONE && !rotateOk && window.innerHeight > window.innerWidth;
  $('rotate').hidden = !show;
}
$('rotate-ok').addEventListener('click', () => { rotateOk = true; updateRotate(); });
$('rotate').querySelector('.ios').hidden = !(IS_IOS && !CAN_FS && !navigator.standalone);
window.addEventListener('resize', updateRotate);
updateRotate();
resize();

// ---------- trạng thái lái xe ----------
const drive = {
  home: LANE_D, goal: 0, manual: false, halt: false,   // halt: bấm đúp phanh => dừng hẳn
  s: 150,          // độ dài cung trên đường
  d: LANE_D,       // lệch ngang so với tim đường (m, + = bên phải)
  v: CHILL_DEFAULT,        // bắt đầu 25 km/h; khung hình đầu chuyển ngay lên 180 km/h
  target: CHILL_DEFAULT,   // tốc độ mong muốn ở chế độ chill
  fast: true,              // Fast drive (cấp 3) đang bật
  gear: 2,                 // cấp tốc độ 0 / 1 / 2
  fx: 0,                   // cường độ hiệu ứng tốc độ 0..1 (theo tốc độ thực tế)
  latVel: 0,
  pitch: 0,
  pos: new THREE.Vector3(),
  yaw: 0,
};
const keys = new Set();
const pointer = { active: false, id: -1, x: 0, y: 0 };

// ---------- giao diện ----------
// cảnh chờ Start: đồi cỏ, camera quay quanh, nhiều mây, ban đêm
const state = { car: 0, character: 0, map: MAPS.findIndex((m) => m.id === 'meadow'), cam: CAMERAS.findIndex((c) => c.id === 'orbit'), weather: WEATHERS.findIndex((w) => w.id === 'cloudy'), time: TIMES.findIndex((t) => t.id === 'night'), music: 0, cine: true, started: false, mistCover: 0.9, mistDens: 0.4, fstop: FSTOP_DEFAULT, quality: loadQuality() };
let openingElapsed = null; // tính thời gian chạy sau khi bấm Start
// màn hình chờ: 1 cảnh cố định nhẹ — map Đồi cỏ, ban đêm, nhiều mây (sương của Chill), camera Quay quanh, xe chạy 25 km/h.
// Chất lượng Good, không giảm điểm ảnh (ratio 2 = không giới hạn; 0.5 khi muốn nhẹ). Nhạc nền + âm thanh bật ngay (trình duyệt chặn => mở ở lần chạm / bấm đầu).
// (Sau này chú sẽ thay bằng video cắt ghép.)
const PREVIEW = { map: 'meadow', time: 'night', weather: 'cloudy', cam: 'orbit', speed: 25 * KMH, quality: 'good', ratio: 2 };
let openingCameraPending = false;
const QUICK_OPENING = true;          // TẠM: đầu game rút còn 0.5 s (đặt false để có lại đoạn 3 s ở 180 km/h rồi giảm tốc)
const TUNE_KEY = 'chilldrive.tuning.v1';
let savedTuning = null;
// bảng 🚦 Giao thông (map Phố): chú tự chỉnh để thử
// tốc độ xe khác chỉnh bằng km/h (từ … đến …), riêng 3 nhóm map: chill (map ngắm cảnh), city (Phố), avenue (Đại lộ + Cao tốc HLG)
const TRAFFIC_KMH = Object.freeze({ chill: [50, 200], city: [30, 52], avenue: [60, 104] });
const TRAFFIC_DEFAULTS = Object.freeze({ avoid: 1, redStop: 0, score: 1, auto: 1, density: 1, walkers: 38, signal: 1, models: 0, incident: 1 });   // incident: cảnh tai nạn (cảnh sát / cấp cứu)
const trafficDefaults = () => ({ ...TRAFFIC_DEFAULTS, kmh: Object.fromEntries(Object.entries(TRAFFIC_KMH).map(([k, v]) => [k, [...v]])) });
// nhóm tốc độ của map đang chạy
const kmhGroup = () => { const k = mapKind(MAPS[state.map].id); return k === 'city' || k === 'avenue' ? k : 'chill'; };
// bảng Lighting: hệ số các loại đèn (ngoài đèn pha xe chú / đèn đường đã có thông số riêng)
const LIGHT_DEFAULTS = Object.freeze({ signal: 1, signalSize: 1, windows: 1, signs: 1, npc: 1, emergency: 1 });
const lightTune = { ...LIGHT_DEFAULTS };
function applyLightTune() {
  city.uSig.uGain.value = lightTune.signal; city.uSig.uSize.value = lightTune.signalSize;
  city.uWin.value = lightTune.windows; city.uSignK.value = lightTune.signs;
  cityTraffic.uNpc.value = lightTune.npc; traffic.lampK = lightTune.npc;
  cityTraffic.emK = lightTune.emergency;
  timesSq.signK = lightTune.signs; timesSq.winK = lightTune.windows;   // New York: biển LED + cửa sổ Times Square theo bảng Lighting
  nycBld.winK = lightTune.windows;
}
const trafficTune = trafficDefaults();
// sương sát đất (lớp MIST): lưu riêng cho nhóm Chill / Drive; mỗi kiểu thời tiết có độ phủ + độ dày (0..1), mỗi giờ có hệ số độ dày
// (giờ lẻ / Tự động: nội suy giữa 4 mốc theo giờ). Chỉnh trong bảng Thời tiết / Thời gian (và bảng 🌫️ phím G), tự lưu mục `mist`.
const MIST_HOURS = { sunrise: 6.4, noon: 12.5, sunset: 17.6, night: 22.5 };
const MIST_DEFAULTS = {
  chill: { w: { clear: [0.9, 0.4], cloudy: [0.9, 0.4], windy: [0.6, 0.25], rain: [0.9, 0.45], storm: [0.9, 0.5], snow: [0.9, 0.45], fog: [1, 0.75] },
    t: { sunrise: 1.25, noon: 0.8, sunset: 1, night: 1.5 } },
  drive: { w: { clear: [0.6, 0], cloudy: [0.6, 0], windy: [0.6, 0], rain: [0.7, 0.15], storm: [0.8, 0.25], snow: [0.8, 0.2], fog: [1, 0.5] },
    t: { sunrise: 1.25, noon: 0.8, sunset: 1, night: 1.5 } },
};
const mistDefaultsOf = (g) => ({ w: Object.fromEntries(Object.entries(MIST_DEFAULTS[g].w).map(([k, [cover, dens]]) => [k, { cover, dens }])), t: { ...MIST_DEFAULTS[g].t } });
const mistTune = { chill: mistDefaultsOf('chill'), drive: mistDefaultsOf('drive') };
const mistNow = { cover: 0.9, dens: 0.4 };                         // giá trị đang dùng (đổi mượt khi đổi thời tiết / map)
// mức giao thông đang chạy (ghi đè mật độ / tốc độ xe khác / số người của bảng 🚦; null = dùng số chú chỉnh tay):
// vào map Phố luôn thấp (0.4 / 0.4 / 20) 5 s, rồi nếu bật "ngẫu nhiên" thì đổi giữa 3 mức mỗi 60–120 s
const TRAFFIC_START = { name: 'Khởi động', density: 0.4, speed: 0.4, walkers: 20 };
const TRAFFIC_LEVELS = [
  { name: 'Thưa', density: 0.4, speed: 0.75, walkers: 20 },
  { name: 'Vừa', density: 1, speed: 1, walkers: 38 },
  { name: 'Đông', density: 1.8, speed: 1.15, walkers: 60 },
];
let trafficLevel = null, trafficStartT = 0, trafficLevelT = 0;
function pickTrafficLevel(announce = true) {
  const others = TRAFFIC_LEVELS.filter((l) => l !== trafficLevel);
  trafficLevel = others[Math.floor(Math.random() * others.length)];
  trafficLevelT = 60 + Math.random() * 60;
  applyTrafficTune();
  if (announce) say('Giao thông · ' + trafficLevel.name);
  if (tuneKind === 'traffic') renderTune();
}
function updateTrafficLevel(dt) {
  if (trafficStartT > 0) {
    if ((trafficStartT -= dt) > 0) return;
    if (trafficTune.auto) pickTrafficLevel(); else { trafficLevel = null; applyTrafficTune(); }
    return;
  }
  if (trafficTune.auto && trafficLevel && (trafficLevelT -= dt) <= 0) pickTrafficLevel();
}
function applyTrafficTune() {
  const T = trafficLevel || trafficTune;
  if (T.density < cityTraffic.density) {          // giảm mật độ: bớt ngay một phần xe đang chạy (không bỏ xe cảnh sát / cấp cứu / xe bị đâm)
    const keep = T.density / cityTraffic.density;
    cityTraffic.cars = cityTraffic.cars.filter((c) => c.script || c.crashed || Math.random() < keep);
  }
  cityTraffic.density = T.density;
  // tốc độ km/h của bảng 🚦 × hệ số mức giao thông ngẫu nhiên (Thưa / Vừa / Đông); xe đang chạy đổi theo tỉ lệ
  const lk = trafficLevel?.speed ?? 1, K = trafficTune.kmh, g = mapKind(MAPS[state.map].id) === 'avenue' ? 'avenue' : 'city';
  const main = K[g].map((v) => v * lk), mean = (r) => (r[0] + r[1]) / 2, ratio = mean(main) / mean(cityTraffic.vr.main);
  for (const c of cityTraffic.cars) if (!c.script && c.type !== 'police' && c.type !== 'ambulance' && !c.xr) c.vMax *= ratio;
  cityTraffic.vr = { main, cross: K.city.map((v) => v * lk) };
  // map ngắm cảnh: xe NPC (traffic.js) chạy trong khoảng km/h của nhóm chill
  const ck = mean(K.chill) / 3.6 / ((TRAFFIC.minSpeed + TRAFFIC.maxSpeed) / 2);
  TRAFFIC.minSpeed = K.chill[0] / 3.6; TRAFFIC.maxSpeed = K.chill[1] / 3.6;
  for (const v of traffic.active || []) if (!v.carriage) { v.cruise *= ck; }
  cityPeople.walkers = Math.round(T.walkers);
  city.clockRate = 1 / trafficTune.signal;
  cityTraffic.realOn = !!trafficTune.models;
  traffic.allCars = !!trafficTune.models;
  if (traffic.allCars && traffic.excluded && traffic.pool.length) { const id = traffic.excluded; traffic.excluded = null; traffic._load(null, id); }
  if (onSgn()) {
    city.vnHouse = (s) => sgnVnHouse(s);
    // start loading when entering map sgn
    if (vnHouses && vnHouses.ready) { /* already started */ }
  } else {
    city.vnHouse = null;
  }
}
// thông số chỉnh tay (bảng camera / thời tiết / thời gian / Lighting / dừng xe) lưu RIÊNG cho Chill và Drive: đổi nhóm map
// (applyMap) => cất bộ đang dùng, nạp bộ của nhóm kia. Giao thông chỉ có ở Drive; sương có bộ riêng trong mistTune.
const tuneParts = () => ({ camera: rig.tune, weather: env.weatherProfiles, environment: env.tune, carLights: cars.headlights.tune,
  streetLights: scenery.lampTune, lighting: lightTune, park: stop.tune, fireflies: fireflies.tune, cows: cows.tune, nature: meadow.tune, natureReed: reeds.tune });
const retuneAnimals = () => { fireflies.ground.clear(); cows.retune(); meadow.applyTune(); reeds.applyTune(); };
const cloneJ = (o) => JSON.parse(JSON.stringify(o));
const TUNE_BASE = cloneJ(tuneParts());                              // mặc định trong code (trước khi đọc bản lưu)
const tuneSets = { chill: null, drive: null };
let tuneGroup = ['city', 'avenue', 'hlg', 'nyc', 'sgn'].includes(MAPS[state.map].id) ? 'drive' : 'chill';
function loadTuneSet(src) {
  if (!src) return;
  const P = tuneParts();
  for (const [id, v] of Object.entries(src.camera || {})) if (rig.tune[id]) Object.assign(rig.tune[id], v);
  for (const [id, v] of Object.entries(src.weather || {})) if (env.weatherProfiles[id]) Object.assign(env.weatherProfiles[id], v);
  for (const k of ['environment', 'carLights', 'streetLights', 'lighting', 'park', 'fireflies', 'cows', 'nature', 'natureReed']) if (src[k]) Object.assign(P[k], src[k]);
}
// giao thông đã lưu (bản cũ có `speed` × => đổi sang km/h) / sương đã lưu của nhóm g
function loadTraffic(t) {
  if (!t) return;
  const { kmh, speed, ...rest } = t;
  Object.assign(trafficTune, rest);
  if (kmh) { for (const g of Object.keys(TRAFFIC_KMH)) if (Array.isArray(kmh[g]) && kmh[g].length === 2) trafficTune.kmh[g] = kmh[g].map(Number); }
  else if (speed && speed !== 1) for (const g of ['city', 'avenue']) trafficTune.kmh[g] = TRAFFIC_KMH[g].map((v) => Math.round(v * speed));
}
function loadMist(g, sv, w = null) {
  if (!sv) return;
  for (const [k, v] of Object.entries(sv.w || {})) if (mistTune[g].w[k] && (!w || k === w)) Object.assign(mistTune[g].w[k], v);
  if (!w) Object.assign(mistTune[g].t, sv.t || {});
}
const defSet = () => DEF.tuning[tuneGroup] || {};             // bộ mặc định (của chú) cho nhóm Chill / Drive đang dùng
function switchTuneGroup(g) {
  if (g === tuneGroup) return;
  tuneSets[tuneGroup] = cloneJ(tuneParts());
  loadTuneSet(TUNE_BASE); loadTuneSet(tuneSets[g]);
  tuneGroup = g;
  env.envKey = ''; applyLightTune(); retuneAnimals();
  if (tuneKind) renderTune();
}
try {
  savedTuning = JSON.parse(localStorage.getItem(TUNE_KEY)) || cloneJ(DEF.tuning);
  if (savedTuning?.v === 2) { tuneSets.chill = savedTuning.chill || cloneJ(DEF.tuning.chill); tuneSets.drive = savedTuning.drive || cloneJ(DEF.tuning.drive); }
  else if (savedTuning) {                                           // bản lưu cũ (chung): làm điểm khởi đầu cho cả 2 nhóm
    const legacy = {}; for (const k of Object.keys(TUNE_BASE)) if (savedTuning[k]) legacy[k] = savedTuning[k];
    tuneSets.chill = cloneJ(legacy); tuneSets.drive = cloneJ(legacy);
  }
  loadTuneSet(tuneSets[tuneGroup]); meadow.applyTune(); reeds.applyTune();
  loadTraffic(savedTuning?.traffic);
  for (const g of ['chill', 'drive']) loadMist(g, savedTuning?.mist?.[g]);
  if (savedTuning?.carLights) Object.assign(cars.headlights.tune, savedTuning.carLights);
  if (savedTuning?.streetLights) Object.assign(scenery.lampTune, savedTuning.streetLights);
} catch { /* thông số cũ/hỏng: dùng mặc định trong code */ }
rig.setMode(state.cam);
state.fstop = FSTOPS.indexOf(rig.aperture);
const el = { full: $('b-full'), stop: $('b-stop'), character: $('b-character'), quality: $('b-quality'), lens: $('b-lens'), mist: $('b-mist'), fast: $('b-fast'), car: $('b-car'), map: $('b-map'), cam: $('b-cam'), weather: $('b-weather'), time: $('b-time'), music: $('b-music') };
const setBtn = (btn, icon, text) => { btn.querySelector('b').textContent = icon; btn.querySelector('span').textContent = text; btn.title = text; };

function refreshUI() {
  setBtn(el.car, '🚗', cars.list[state.car]?.name ?? '…');
  setBtn(el.character, '🧑', characterLoading ? 'Đang tải…' : CHARACTERS[state.character].name);
  el.character.disabled = characterLoading || !person.ready || stop.active;
  el.character.title = 'Đổi nhân vật' + (cars.current?.def?.id === 'mustang' ? '' : ' (Chisa chỉ đi với Mustang)');
  setBtn(el.map, MAPS[state.map].icon, MAPS[state.map].name);
  setBtn(el.cam, '🎥', CAMERAS[state.cam].name);
  setBtn(el.weather, WEATHERS[state.weather].icon, WEATHERS[state.weather].name);
  setBtn(el.time, TIMES[state.time].icon, TIMES[state.time].name);
  setBtn(el.music, MUSIC_MODES[state.music].icon, MUSIC_MODES[state.music].name);
  setBtn(el.fast, '⚡', Math.round(gears()[drive.gear] * 3.6) + ' km/h');
  el.fast.classList.toggle('on', drive.gear > 0);
  setBtn(el.mist, '🌫️', 'Sương ' + Math.round(mistWeather().dens * 100) + '%');
  el.mist.classList.toggle('on', !$('mistpanel').hidden);
  setBtn(el.lens, '📷', lensLabel());
  setBtn(el.quality, '⚙️', QUALITY[state.quality].name);
  setBtn(el.stop, stop.state === 'parked' ? '▶️' : stop.state === 'off' ? '🅿️' : '⏳', stop.state === 'parked' ? 'Đi tiếp' : stop.state === 'off' ? 'Dừng xe' : '…');
  el.lens.classList.toggle('on', !$('lenspanel').hidden);
  el.cam.classList.toggle('on', tuneKind === 'camera');
  el.weather.classList.toggle('on', tuneKind === 'weather');
  el.time.classList.toggle('on', tuneKind === 'time');
  $('b-traffic').classList.toggle('on', tuneKind === 'traffic');
  $('b-lighting').classList.toggle('on', tuneKind === 'lighting');
  $('b-animals').classList.toggle('on', tuneKind === 'animals');
  $('b-nature').classList.toggle('on', tuneKind === 'nature');
  $('b-trees').classList.toggle('on', tuneKind === 'trees');
  $('b-water').classList.toggle('on', tuneKind === 'water');
  $('b-park').classList.toggle('on', tuneKind === 'park');
  setBtn($('b-people'), '🚶', 'Người 3D: ' + (cityPeople.detailed ? 'Bật' : 'Tắt'));
  $('b-people').classList.toggle('on', cityPeople.detailed);
  $('b-mode').querySelector('span').textContent = state.mode === 'drive' ? 'Drive' : 'Chill';
  $('b-mode').title = state.mode === 'drive' ? 'Đang ở chế độ Drive — bấm để đổi sang Chill' : 'Đang ở chế độ Chill — bấm để đổi sang Drive';
  el.full.hidden = !(CAN_FS && IS_PHONE);          // nút toàn màn hình chỉ có trên điện thoại (máy tính: phím U)
  setBtn(el.full, isFS() ? '🗗' : '⛶', isFS() ? 'Thoát toàn màn hình' : 'Toàn màn hình');
  // lối tắt bên trái
  const q = (id, text, title, on = false) => { const b = $(id); b.textContent = text; b.title = title; b.classList.toggle('on', on); return b; };
  q('q-speed', drive.gear > 0 ? Math.round(gears()[drive.gear] * 3.6) + ' km/h' : 'Speed', 'Tốc độ: ' + Math.round(gears()[drive.gear] * 3.6) + ' km/h (phím F)', drive.gear > 0);
  q('q-pause', stop.state === 'parked' ? 'Resume' : 'Pause', stop.state === 'parked' ? 'Đi tiếp (phím P)' : 'Dừng xe (phím P)', stop.active);
  q('q-car', 'Car', 'Xe: ' + (cars.list[state.car]?.name ?? '…') + ' (phím C)');
  q('q-cam', 'Camera', 'Camera: ' + CAMERAS[state.cam].name + ' (phím Q)');
  q('q-driver', 'Driver', 'Nhân vật: ' + CHARACTERS[state.character].name + ' (phím X)').disabled = el.character.disabled;
  q('q-map', 'Map', 'Map: ' + MAPS[state.map].name + ' (phím M)');
  q('q-weather', 'Weather', 'Thời tiết: ' + WEATHERS[state.weather].name + ' (phím R)');
  q('q-time', 'Time', 'Thời gian: ' + TIMES[state.time].name + ' (phím T)');
  q('q-setting', 'Setting', 'Cài đặt (phím K)', !$('bar').hidden);
  if (SCOPED[curMapId] && state.started) saveScope(curMapId);   // cài đặt trong phố / đại lộ chỉ lưu cho map đó
}
function loadQuality() {
  try { const i = QUALITY.findIndex((q) => q.id === localStorage.getItem('chilldrive.quality')); if (i >= 0) return i; } catch { /* không có localStorage */ }
  return QUALITY_DEFAULT;
}
// áp dụng mức chất lượng người chơi chọn (Low / Mid / Good / Ultra)
function applyQuality(save = true) {
  const q = QUALITY[state.quality];
  pixelRatio = q.id === 'low' ? q.ratio : Math.min(q.ratio, Math.max(1, window.devicePixelRatio || 1));
  if (IS_PHONE && q.id === 'good') pixelRatio = Math.min(pixelRatio, 1.25);   // màn hình điện thoại nhỏ: đủ nét, nhẹ GPU hơn
  if (!state.started) pixelRatio = Math.min(pixelRatio, PREVIEW.ratio);       // màn hình chờ: nền bị làm mờ => vẽ thưa điểm ảnh
  renderer.setPixelRatio(pixelRatio);
  env.starPx = pixelRatio;
  post.setSamples(q.msaa);
  resize();
  for (const f of [reeds, grass, meadow]) { f.setView(q.view); f.setDensity(q.veg); }
  terrain.setView(q.view, camera.position);       // phạm vi hiển thị (Ultra: xa gấp đôi) — đổi lúc đang chạy thì dựng lại địa hình
  env.setShadowSize(q.shadow);
  refl.enabled = q.refl;
  lakeRefl.div = q.refl ? 2 : 4; lakeRefl.resize();   // hồ Đà Lạt: luôn có phản chiếu (Low: 1/4 độ phân giải)
  nature.setRadius(q.trees);
  if (onSgn()) cityPeople.parkCount = q.id === 'low' ? 35 : 70;   // Low: nửa số người dạo công viên
  if (save) try { localStorage.setItem('chilldrive.quality', q.id); } catch { /* bỏ qua */ }
}
const nextQuality = () => { state.quality = (state.quality + 1) % QUALITY.length; applyQuality(); refreshUI(); say('Chất lượng · ' + QUALITY[state.quality].name); };
// thông báo ngắn trên đỉnh màn hình mỗi khi chuyển đổi
const say = (t) => { if (state.started) toast(t, false, 1600); };
function lensLabel() { return Math.round(rig.focal) + 'mm f/' + rig.aperture; }

let characterLoading = false, characterRequest = 0;
// có trên xe đang chọn không (Chisa chỉ được căn cho Mustang)
const charFits = (i) => !CHARACTERS[i].mustangOnly || cars.current?.def?.id === 'mustang';
// nhân vật kế tiếp theo hướng dir, bỏ qua nhân vật không hợp xe
const stepCharacter = (dir) => { let i = state.character; do i = (i + dir + CHARACTERS.length) % CHARACTERS.length; while (!charFits(i)); return i; };
async function chooseCharacter(i) {
  if (stop.active) return;
  i = (i + CHARACTERS.length) % CHARACTERS.length;
  if (!charFits(i)) i = 0;
  const request = ++characterRequest;
  characterLoading = true; refreshUI();
  let next;
  try {
    next = await new Person().load(CHARACTERS[i].url, { rig: CHARACTERS[i].rig });
    if (request !== characterRequest || !charFits(i)) { next.dispose(); return; }
    person.replace(next); state.character = i;
    stop.place(cars.dim); stop.sit();
    compileFor(post.sceneRT, camera, person.root).catch(() => {});
  } catch (e) { next?.dispose(); console.warn('Không tải được nhân vật', e); }
  finally { if (request === characterRequest) { characterLoading = false; refreshUI(); } }
}
const nextCharacter = () => { if (!characterLoading && person.ready) { const i = stepCharacter(1); say('Nhân vật · ' + CHARACTERS[i].name); return chooseCharacter(i); } };

async function chooseCar(i) {
  if (stop.active) return;                        // đang dừng xe: không đổi xe
  state.car = (i + cars.list.length) % cars.list.length;
  setBtn(el.car, '🚗', 'Đang tải…');
  try {
    if (!await cars.select(state.car)) return;     // lượt tải đã bị thay thế: chưa đặt gương/taplo khi xe chưa có
  } catch (e) {
    console.error('Không tải được xe', cars.list[state.car].name, e);
    if (cars.list.length > 1) { cars.list.splice(state.car, 1); return chooseCar(state.car); }
  }
  // Chisa chỉ được căn cho Mustang; xe khác dùng lại nhân vật mặc định.
  if (!charFits(state.character) || (characterLoading && cars.current?.def?.id !== 'mustang')) await chooseCharacter(0);
  if (person.ready && !stop.active) { stop.place(cars.dim); stop.sit(); }
  mirror.place(cars.dim, cars.current.screen);
  dash.place(cars.current.screen);
  wing.setCar(cars.current);
  warmShaders();
  refreshUI();
}
const nextCar = () => { if (stop.active) return; say('Xe · ' + cars.list[(state.car + 1) % cars.list.length].name); return chooseCar(state.car + 1); };

// dừng xe / đi tiếp (cảnh người bước ra khỏi xe)
function toggleStop() {
  if (incident.active) return;                   // đang xử lý tai nạn
  if (!person.ready || !state.started || characterLoading) return;
  if (stop.state === 'off') { setGear(0); stop.place(cars.dim); }
  if (stop.toggle(drive.v)) { refreshUI(); say(stop.state === 'enter' ? 'Đi tiếp' : 'Dừng xe'); }
}

// Biên dịch trước các shader chưa dùng tới (vật liệu khi vẽ ảnh phản chiếu vũng nước,
// mưa/tuyết/sét, sao/trăng) để lúc đổi thời tiết không bị khựng vì GPU phải dịch shader.
// compileAsync dùng KHR_parallel_shader_compile => trình duyệt dịch ở luồng nền.
let warmTimer = 0;
function compileFor(target, cam, obj = scene) {
  const off = [];
  obj.traverse((o) => { if (o.material && !o.layers.test(cam.layers)) { off.push(o, o.material); o.material = null; } });
  const prev = renderer.getRenderTarget();
  renderer.setRenderTarget(target);
  // compile (đồng bộ) thay compileAsync: compileAsync của three hỏi lại vật liệu theo chu kỳ và lỗi nếu vật liệu bị huỷ giữa chừng
  // (đổi map liên tục ở màn hình chờ)
  try { renderer.compile(obj, cam, scene); } catch (e) { console.warn('compile', e); }
  renderer.setRenderTarget(prev);
  for (let i = 0; i < off.length; i += 2) off[i].material = off[i + 1];
  return new Promise((r) => setTimeout(r, 0));
}
// xe mới tải: dịch shader (cả biến thể vẽ vào render target: hậu kỳ / phản chiếu vũng nước) trước khi gắn vào cảnh
env.onCarEnv = (tex) => cars.setEnvMap(tex);
if (env.carEnvRT) cars.setEnvMap(env.carEnvRT.texture);
cars.prepare = (group) => compileFor(post.sceneRT, camera, group);
cows.onBuild = (group) => { compileFor(post.sceneRT, camera, group).catch(() => {}); };
let skipWarm = false;           // màn hình chờ đổi cảnh liên tục: không biên dịch trước (vật liệu bị huỷ giữa chừng => lỗi trong three)
function warmShaders(delay = 500) {
  clearTimeout(warmTimer);
  if (skipWarm) return;
  warmTimer = setTimeout(() => {
    (onDalat() ? diag.time('biên dịch shader (warmShaders)', () => compileFor(post.sceneRT, camera)) : compileFor(post.sceneRT, camera)).catch((e) => console.warn('warmup', e));
  }, delay);
}
const applyMap = () => {
  let dT = performance.now();
  const dm = (n) => { if (!diagOn) return; const t = performance.now(); diag.mark(n, t - dT); dT = t; };
  const mapId = MAPS[state.map].id, id = mapKind(mapId), isHlg = mapId === 'hlg', isNyc = mapId === 'nyc', isSgn = mapId === 'sgn', isDalat = mapId === 'dalat';
  const diagOn = isDalat && curMapId !== mapId;                   // chẩn đoán: chỉ lúc mới vào map Đà Lạt
  if (isDalat) diag.on = true; else diag.on = false;
  if (isHlg && curMapId !== 'hlg') hlgDir = hlgLayout(false);
  setTerrainMap(id);            // đổi tham số địa hình (đồi thấp / đồi núi)
  dm('setTerrainMap');
  // cao tốc HLG: độ cao thật (SRTM) + gợn rất nhẹ, không có núi xa (đồng bằng Đông Nam Bộ)
  if (isHlg) Object.assign(TP, { low: 1.5, det: 1.2, fine: 0.35, mount: 0, dem: hlgDem(hlgDir) });
  if (isNyc || isSgn) Object.assign(TP, { hill: 0, mount: 0 });   // Manhattan / Sài Gòn: phẳng, không đồi núi xa
  if (isDalat) TP.dem = dalatDem();                              // Đà Lạt: địa hình thật (DEM 10 m từ urban:EXPORT), mặt hồ y = 0
  dm('DEM → TP.dem');
  hlgEnv.visible = isHlg;
  if (isHlg) hlgEnv.setDir(hlgDir);
  Object.assign(CITY, isNyc ? NYC_DIM : CITY_DIM);              // New York: đường / vỉa hè rộng theo Manhattan
  const isCity = id === 'city', isAvenue = id === 'avenue', isTraffic = isCity || isAvenue;   // nhóm Drive: Phố + Đại lộ + Cao tốc HLG
  ROAD.halfWidth = isCity ? CITY.hw : isAvenue ? AVENUE.hw : ROAD_HW;   // phố: 4 làn; đại lộ: 6 làn + lề
  // cao tốc HLG: vào map luôn ở An Phú, chiều đi Dầu Giây; bố trí công trình theo dữ liệu thật (Đại lộ: theo chu kỳ)
  setLayout(isHlg ? hlgDir : null);
  road.setShape(isHlg ? 'hlg' : isNyc ? 'nyc' : isSgn ? 'sgn' : id, isHlg ? hlgDir.real : isNyc ? nycLoop() : isSgn ? sgnLoop() : isDalat ? dalatLoop() : null);   // phố: đường thẳng theo đoạn + ngã tư; đại lộ: cong rất thoải; New York: vòng thật
  dm('road.setShape');
  // New York: vào map ở đầu Times Square (7th Ave 46 – 45 St), chạy làn ngoài phải
  if (isNyc && curMapId !== mapId) { drive.s = NYC.length + NYC.start; drive.d = CITY.lanes[1]; nycTurn = null; }
  if (isDalat) { dalatScene.buildBridge(road); dalatScene.buildSidewalk(road); dalatScene.buildStream(); }   // + vỉa hè ven hồ, suối Cam Ly   // + vỉa hè ven hồ                     // lan can cầu Sắt (1 lần, theo tuyến vòng hồ)
  if (isDalat && curMapId !== mapId) drive.s = DALAT.length + DALAT.start;   // Hồ Xuân Hương: bờ nam (Trần Quốc Toản), chiều kim đồng hồ
  if (isSgn && curMapId !== mapId) { drive.s = SGN.length + SGN.start; drive.d = CITY.lanes[1]; sgnName = null; }   // Landmark: Nguyễn Hữu Cảnh, về phía Ba Son
  if (isAvenue && curMapId !== mapId) { drive.s = isHlg ? HLG.start : 150; drive.ramp = null; }   // vào đại lộ: luôn từ đầu đường (cầu cao ở 700 m, cầu sông 2.2 km)
  road.dirt = id === 'forest';  // đồi thông: có đoạn đường đất xuyên rừng
  road.recomputeHeights();      // độ cao đường theo địa hình mới
  dm('road.recomputeHeights');
  // map Biển: mực nước thấp hơn chỗ thấp nhất của đường 3 m (xét 120 km đường phía trước)
  if (id === 'sea') { road.ensure(drive.s + 120000); let lo = Infinity; for (const p of road.pts) lo = Math.min(lo, p.y); TP.seaLevel = lo - 3; }
  ocean.setMap(id === 'sea', TP.seaLevel);
  dm('ocean.setMap/setLake');
  if (isDalat && dalatScene.lake) ocean.setLake(true, WATER_DROP, dalatScene.lake.tex, dalatScene.lake.bounds);
  if (isDalat) ocean.setLakeLook(dalatScene.water);   // chưa tải: onLake bật sau
  avenue.visible = isAvenue;    // trước địa hình: khung nút giao để đào kênh đường ngang / nền nhánh rẽ
  avenue.prime(drive.s);
  drive.ramp = null;
  scenery.lampK = isNyc ? 1.35 : 1;   // New York: cột đèn ~15 m, cần vươn dài (đường 18 m)
  scenery.ahead = isDalat ? 21 : 7; scenery.behind = isDalat ? 20 : 1;   // Đà Lạt: dựng đường + đèn cả vòng hồ 4.9 km (nhìn qua hồ thấy đèn bờ bên kia)
  scenery.lampSkip = isDalat ? (x, z) => nearRoundabout(x, z) : null; RB_ON.value = isDalat ? 1 : 0;
  scenery.setMap(id);
  scenery.roadMat.envMapIntensity = isDalat ? DALAT_ENV : 1; terrain.mat.envMapIntensity = isDalat ? DALAT_ENV : 0.8;   // Đà Lạt: bớt ám xanh trời
  dm('scenery.setMap');
  terrain.reset();
  terrain.setCar(drive.s);
  terrain.prime(camera.position.lengthSq() ? camera.position : drive.pos);
  dm('terrain.reset+prime');
  reeds.visible = id === 'reed';
  grass.visible = id === 'forest';
  meadow.visible = id === 'meadow' || isAvenue;   // đại lộ: hai bên là cỏ như map Đồi cỏ
  cows.visible = id === 'meadow';
  town.reset();
  town.visible = id === 'mountain';
  city.nyc = isNyc;
  city.street = isSgn;
  city.medianTreesOff = isSgn;
  // Landmark: cột / dây điện chỉ có ở một số đoạn (~1/3 số đoạn 300 m, chọn theo băm cố định); khu Vinhomes đi cáp ngầm
  city.noPoles = isSgn ? (s) => { const r = ((s % SGN.length) + SGN.length) % SGN.length; if (r > 380 && r < 1560) return true; const k = Math.floor(r / 300), h = Math.sin(k * 91.7 + 3.1) * 43758.5; return h - Math.floor(h) > 0.33; } : null;
  timesSq.density = state.quality === QUALITY.findIndex((q) => q.id === 'low') ? 0.6 : 1;   // đám đông Times Square: Low ít người hơn
  timesSq.visible = isNyc;      // trước khi dựng khối phố: vùng loại nhà map Phố
  nycBld.visible = isNyc;
  env.setFarShadow(farShadowSaved);            // bóng nắng xa: mọi map (theo cài đặt)
  nycProps.visible = isNyc;
  nycNet.visible = isNyc;
  if (isNyc) { city.exclude = () => true; nycBld.onReady(); }   // New York: không dựng nhà map Phố (nhà thật OSM thay)
  if (isSgn) city.exclude = sgnNoHouse;                         // Landmark: không dựng nhà quanh cầu / hầm (B3: nhà thật OSM)
  city.reset();                 // Phố ↔ New York: khối nhà dựng theo hình đường cũ
  city.visible = isCity;
  city.prime(drive.s);
  dm('city.reset+prime');
  nycWorks.visible = isNyc;
  sgnWorks.visible = isSgn;
  sgnScene.visible = isSgn;
  sgnCity.visible = isSgn;                                     // bắt đầu tải trước khi sgnEnv dựng cây
  sgnEnv.visible = isSgn;
  const dalatLow = state.quality === QUALITY.findIndex((q) => q.id === 'low');
  dalatScene.loadTune(dalatLow);
  dalatScene.carN = dalatLow ? 10 : 24; if (dalatScene.sideCars?.length > dalatScene.carN) dalatScene.sideCars.length = dalatScene.carN;   // xe đường phụ               // cài đặt cây (bảng 🌲 Cây; chưa lưu => mặc định theo chất lượng)
  $('b-trees').hidden = $('b-water').hidden = !isDalat;
  if ((tuneKind === 'trees' || tuneKind === 'water') && !isDalat) closeTune();
  dalatScene.visible = isDalat;
  if (!isDalat) FAKE_LIGHT.uFakeK.value = 0;
  CANAL_CUT.uCutOn.value = isDalat ? 1 : 0;
  dm('dalatScene.visible');
  if (isSgn) { sgnEnv.onReady(); sgnCity.onReady(); }           // camera không xuyên tháp / nhà thật (khi đã tải)
  fireflies.ground.clear();     // độ cao mặt đất nhớ theo hình đường cũ
  traffic.policy.city = isCity;
  if (incident.active) incident.finish();
  if (isTraffic) cityTraffic.setMode(isNyc ? 'nyc' : id);
  cityTraffic.visible = isTraffic;
  cityPeople.visible = isTraffic; cityPeople.ambient = isCity;   // đại lộ: chỉ người của cảnh tai nạn
  // Landmark: thêm người dạo trong công viên hai bên đường (Low: giảm nửa)
  cityPeople.parkAt = isSgn ? (x, z) => sgnEnv.inPark(x, z) : null;
  cityPeople.parkCount = isSgn ? (state.quality === QUALITY.findIndex((q) => q.id === 'low') ? 35 : 70) : 0;
  if (isTraffic) { traffic.clearAll(); trafficLevel = TRAFFIC_START; trafficStartT = 5; }   // vào phố / đại lộ: giao thông thấp 5 s đầu
  $('brake').hidden = !isTraffic;
  $('b-traffic').hidden = false;                // bảng 🚦: mọi map (map ngắm cảnh chỉ có tốc độ xe khác km/h)
  $('b-score').hidden = !isTraffic || !trafficTune.score;
  if (!isTraffic) $('score').hidden = true;
  if (tuneKind === 'traffic') renderTune();     // bảng 🚦 đổi nội dung theo nhóm map
  applyTrafficTune(); applyLightTune();
  if (isCity && state.started) toast(isNyc ? 'New York — vòng Midtown (dữ liệu thật © OpenStreetMap): đường một chiều, 4 khúc rẽ trái, hầm + cầu cạn Park Ave'
    : isSgn ? 'Landmark 81 – TP.HCM (dữ liệu thật © OpenStreetMap): vòng 18.4 km qua khu Vinhomes, cầu Sài Gòn, hầm Thủ Thiêm'
    : 'Map Phố: tự phanh khi gặp đèn đỏ — giữ phím Space hoặc nút Space');
  if (isDalat && state.started) toast('Hồ Xuân Hương – Đà Lạt (dữ liệu thật © OpenStreetMap, urban:EXPORT): vòng 4.9 km quanh hồ');
  if (isAvenue && state.started) toast(isHlg ? 'Cao tốc TP.HCM – Long Thành – Dầu Giây (dữ liệu thật © OpenStreetMap) — giữ ← / → để đổi làn'
    : 'Map Đại lộ: cao tốc 6 làn — giữ ← / → để đổi làn');
  cityFront = null;
  // cài đặt (thời tiết / giờ / camera) của map Phố tách riêng: vào phố => lấy bộ của phố (mặc định Tự động / Tự động / Sau xe,
  // lưu trên trình duyệt), ra khỏi phố => trả lại bộ của các map khác
  // đại lộ cũng có bộ riêng (lần đầu lấy theo bộ hiện tại của Phố)
  const prevMap = curMapId; curMapId = mapId;
  switchTuneGroup(isTraffic ? 'drive' : 'chill');               // thông số chỉnh tay riêng Chill / Drive (trước khi trả cài đặt map)
  if (prevMap !== mapId) {
    if (SCOPED[prevMap]) saveScope(prevMap);
    else if (prevMap !== null && SCOPED[mapId]) saveScope('world');
    // Landmark: luôn vào lúc Hoàng hôn + Nhiều mây (chú dặn — chụp lại cùng cảnh); camera giữ như lần trước
    if (isSgn) { restoreScope({ ...(scopes.sgn || scopes.city || DEF.scopes.city || cityDefaults()), weather: WEATHERS.findIndex((w) => w.id === 'cloudy'), time: TIMES.findIndex((t) => t.id === 'sunset') }); env.snapWeather('cloudy'); }
    else if (SCOPED[mapId]) restoreScope(scopes[mapId] || DEF.scopes[mapId] || (isHlg && scopes.avenue) || ((isAvenue || isNyc || isSgn) && scopes.city) || ((isNyc || isSgn) && DEF.scopes.city) || cityDefaults());
    else if (SCOPED[prevMap] && scopes.world) restoreScope(scopes.world);
    // Đà Lạt: vào map luôn Hoàng hôn + Trời trong (chú dặn); camera giữ nguyên
    if (isDalat) { setWeatherIdx(WEATHERS.findIndex((w) => w.id === 'clear')); env.snapWeather('clear'); state.time = TIMES.findIndex((t) => t.id === 'sunset'); env.setTime(TIMES[state.time].hour); }
  }
  rig.sideDist = isCity ? 13 : isAvenue ? 17 : null;   // phố / đại lộ: camera bên hông đứng trên đường (không chui vào nhà / ra ngoài hộ lan)
  rig.orbitR = isCity ? 10 : null;
  // làn nhà của xe mình: phố chạy làn ngoài bên phải; đại lộ làn giữa; map khác sát vạch giữa
  drive.home = isCity ? CITY.lanes[1] : isAvenue ? AVENUE.lanes[1] : LANE_D;
  if (isAvenue) drive.d = drive.home;
  if (state.started && !drive.fast) drive.target = gears()[Math.min(drive.gear || 0, 1)];   // tốc độ theo cấp của map (đại lộ nhanh hơn)
  waterfalls.setMap(id);
  rig.sidePref = id === 'mountain' ? 1 : 0;      // camera bên hông đứng phía thung lũng
  nature.setRadius(QUALITY[state.quality].trees);   // tính lại cây chi tiết cho map mới
  rig.sideSign = 0;
  dm('applyMap phần cuối'); if (diagOn) diag.clearLast();
  warmShaders();
};
// chế độ chọn ở màn hình vào game: Chill = các map ngắm cảnh (không có Phố), Drive = chỉ map Phố
const CITY_MAP = MAPS.findIndex((m) => m.id === 'city'), AVENUE_MAP = MAPS.findIndex((m) => m.id === 'avenue'), HLG_MAP = MAPS.findIndex((m) => m.id === 'hlg');
const NYC_MAP = MAPS.findIndex((m) => m.id === 'nyc'), SGN_MAP = MAPS.findIndex((m) => m.id === 'sgn');
const isDriveMap = (i) => i === CITY_MAP || i === AVENUE_MAP || i === HLG_MAP || i === NYC_MAP || i === SGN_MAP;     // nhóm Drive (giao thông): Phố + Đại lộ + Cao tốc HLG + New York + Landmark
let hlgDir = null;              // bố trí chiều đang chạy của cao tốc HLG (đổi khi quay đầu cuối tuyến)
let hlgTurnT = 0;
// cao tốc HLG: còn HLG.end m tới cuối tuyến => màn tối, quay đầu chạy chiều về (dựng lại đường + công trình của chiều kia)
function hlgEnd(dt) {
  if (MAPS[state.map].id !== 'hlg' || !hlgDir) { hlgTurnT = 0; return; }
  if (!hlgTurnT && drive.ramp == null && !stop.active && !incident.active && drive.s > HLG.length - HLG.end) {
    hlgTurnT = 1.4; $('fade').textContent = hlgDir.rev ? '↩ Tới An Phú (TP.HCM) — quay đầu đi Dầu Giây' : '↩ Tới Dầu Giây — quay đầu về TP.HCM';
    $('fade').classList.add('show');
  }
  if (hlgTurnT > 0 && (hlgTurnT -= dt) <= 0) {
    hlgTurnT = 0;
    hlgDir = hlgLayout(!hlgDir.rev);
    drive.s = HLG.start; drive.ramp = null;
    cityTraffic.visible = false;               // trả xe model, xoá xe theo đường cũ (applyMap bật lại)
    applyMap();
    $('fade').classList.remove('show');
    say(hlgDir.rev ? 'Chiều về · Dầu Giây → TP.HCM' : 'Chiều đi · TP.HCM → Dầu Giây');
  }
}
// New York: tốc độ tối đa khi tới khúc cua gắt (góc rẽ vuông, cầu cạn quanh Grand Central): ~22 km/h trong cua, phanh êm từ xa
let nycTurn = null, lastSteerT = -1e9, nycChecked = null;
const NYC_L4 = [-NYC_DIM.lanes[1], -NYC_DIM.lanes[0], NYC_DIM.lanes[0], NYC_DIM.lanes[1]];   // 4 làn cùng chiều (trái → phải)
function nycCornerV() {
  if (!(onNyc() || onSgn()) || !state.started) return Infinity;   // Landmark: khúc rẽ thật, vòng xoay Mê Linh
  return road.curveV(drive.s);
}
const nycLaneFree = (u) => !cityTraffic.cars.some((c) => !c.cross && !c.xr && Math.abs(c.d - u) < 2.2 && c.s - drive.s > -14 && c.s - drive.s < 16);
// New York — tự lái qua góc rẽ trái: ~150 m trước góc bật xi nhan trái, sang dần làn trái cùng khi làn bên cạnh trống, ôm cua;
// qua góc 40 m thì về lại làn ngoài phải (xi nhan phải). Chú vừa lái tay (≤ 8 s) thì không tự đổi làn.
// Đầu xe tới đầu khúc cua: chấm lỗi rẽ không từ làn trái / không bật xi nhan trái + báo tên đường mới
// Landmark: vùng không dựng nhà map Phố — trong 70 m quanh đoạn đường cao / thấp hơn mặt phố > 0.4 m (cầu, dốc cầu, hầm), lưới ô 50 m
let sgnNoGrid = null, sgnAllGrid = null, sgnIdxGrid = null;
// [khoảng cách, s] từ (x, z) tới điểm tim tuyến gần nhất (mẫu 5 m, tìm trong 3 × 3 ô 50 m; xa hơn => [Infinity, 0])
function sgnNearest(x, z) {
  sgnNear(0, 0, 0);
  const gx = Math.floor(x / 50), gz = Math.floor(z / 50), D = SGN.data; let bd = Infinity, bi = 0;
  for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
    const a = sgnIdxGrid.get((gx + i) + ',' + (gz + j)); if (!a) continue;
    for (const k of a) { const d = (D.x[k] - x) ** 2 + (D.z[k] - z) ** 2; if (d < bd) { bd = d; bi = k; } }
  }
  return [Math.sqrt(bd), bi * D.step];
}
// điểm (x, z) cách tim tuyến (mọi đoạn, mẫu 5 m) dưới r m?
function sgnNear(x, z, r) {
  if (!sgnAllGrid) {
    sgnAllGrid = new Map(); sgnIdxGrid = new Map(); const D = SGN.data;
    for (let i = 0; i < D.x.length; i++) { const k = Math.floor(D.x[i] / 50) + ',' + Math.floor(D.z[i] / 50); (sgnAllGrid.get(k) || sgnAllGrid.set(k, []).get(k)).push(D.x[i], D.z[i]); (sgnIdxGrid.get(k) || sgnIdxGrid.set(k, []).get(k)).push(i); }
  }
  const gx = Math.floor(x / 50), gz = Math.floor(z / 50);
  for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
    const a = sgnAllGrid.get((gx + i) + ',' + (gz + j)); if (!a) continue;
    for (let k = 0; k < a.length; k += 2) if ((a[k] - x) ** 2 + (a[k + 1] - z) ** 2 < r * r) return true;
  }
  return false;
}
const inPoly = (x, z, P) => { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) if ((P[i][1] > z) !== (P[j][1] > z) && x < P[i][0] + (P[j][0] - P[i][0]) * (z - P[i][1]) / (P[j][1] - P[i][1])) c = !c; return c; };
// tâm vòng tròn urban:EXPORT (lat 10.79514, lon 106.72347) trong toạ độ game; offset nội suy IDW 8 điểm gần nhất
let sgnCore = null;
function sgnCircleCenter() {
  if (sgnCore) return sgnCore;
  const D = SGN.data, E0 = (106.72347 - D.origin[1]) * D.KE, N0 = (10.79514 - D.origin[0]) * D.KN, best = [];
  for (const p of D.offs) {
    const d = (p[0] - E0) ** 2 + (p[1] - N0) ** 2;
    if (best.length < 8) best.push([d, p]); else if (d < best[7][0]) best[7] = [d, p]; else continue;
    best.sort((a, b) => a[0] - b[0]);
  }
  let w = 0, de = 0, dn = 0;
  for (const [d, p] of best) { const q = 1 / (d + 1e-6); w += q; de += p[2] * q; dn += p[3] * q; }
  return (sgnCore = [E0 + de / w, -(N0 + dn / w)]);
}
function sgnNoHouse(x, z) {
  const [hx, hz] = sgnCircleCenter();
  if ((x - hx) ** 2 + (z - hz) ** 2 < 1225 * 1225) return true;   // trong vòng urban:EXPORT: nhà thật sgnCity thay nhà map Phố
  if (!sgnNoGrid) {
    sgnNoGrid = new Map();
    const L = sgnLoop(), P = {};
    for (let s = 0; s < L.length; s += 8) {
      if (Math.abs(L.elev(s)) < 0.4) continue;
      road.at(SGN.length + s, P);
      const k = Math.floor(P.x / 50) + ',' + Math.floor(P.z / 50);
      (sgnNoGrid.get(k) || sgnNoGrid.set(k, []).get(k)).push(P.x, P.z);
    }
  }
  const [lx, lz] = SGN.data.landmark81;
  if ((x - lx) ** 2 + (z - lz) ** 2 < 95 * 95) return true;   // chân tháp Landmark 81 + khối đế Vincom
  if (inPoly(x, z, SGN.data.vinhomes)) return true;            // khu Vinhomes Central Park: không nhà map Phố (dựng riêng)
  const gx = Math.floor(x / 50), gz = Math.floor(z / 50);
  for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
    const a = sgnNoGrid.get((gx + i) + ',' + (gz + j)); if (!a) continue;
    for (let k = 0; k < a.length; k += 2) if ((a[k] - x) ** 2 + (a[k + 1] - z) ** 2 < 70 * 70) return true;
  }
  return false;
}

function sgnVnHouse(s) {
  if (!onSgn()) return false;
  const [hx, hz] = sgnCircleCenter();
  const L = SGN.length;
  let P = {};
  try { if (road.street) road.street.at(L + s, P); else if (road.at) road.at(L + s, P); } catch {}
  const x = P.x || 0, z = P.z || 0;
  if ((x - hx) ** 2 + (z - hz) ** 2 < 1225 * 1225) return false; // inside urban circle
  try { if (typeof inPoly === 'function' && inPoly(x, z, SGN.data.vinhomes)) return false; } catch {}
  if ((x - SGN.data.landmark81[0]) ** 2 + (z - SGN.data.landmark81[1]) ** 2 < 380 * 380) return false;
  if ((x - SGN.data.landmark81[0]) ** 2 + (z - SGN.data.landmark81[1]) ** 2 < 1560 * 1560 && s >= 380 && s <= 1560) return false;
  const idx = Math.floor((((s % L) + L) % L) / 300);          // theo vị trí trong vòng (mỗi vòng giống nhau)
  // deterministic hash
  let h = Math.imul(idx + 131542391, 1000000009);
  h = ((h ^ (h >>> 13)) >>> 0);
  return (h % 10000) / 10000 < 0.45;
}
// Landmark: dưới tốc độ luôn hiện đường + khu đang ở; đổi đường / khu => chữ lớn giữa màn hình (khu mới: tên khu, dòng dưới tên đường)
let sgnName = null, sgnArea = null, placeT = 0;
function sgnAuto() {
  const on = onSgn() && state.started;
  $('place').hidden = !on;
  if (!on) { if (sgnName !== null) { clearTimeout(placeT); $('placename').classList.remove('show'); } sgnName = sgnArea = null; return; }
  const n = sgnStreet(drive.s), a = sgnZone(drive.s);
  if (n === sgnName && a === sgnArea) return;
  const newArea = a !== sgnArea && a;                      // vừa vào map: hiện tên khu (Landmark 81) + tên đường
  sgnName = n; sgnArea = a;
  const P = $('place'); P.firstChild.textContent = n; P.lastChild.textContent = a;
  const C = $('placename');
  C.firstChild.textContent = newArea ? a : n; C.lastChild.textContent = newArea ? n : '';
  C.classList.add('show'); clearTimeout(placeT); placeT = setTimeout(() => C.classList.remove('show'), 2600);
}
function nycAuto() {
  if (!onNyc() || !state.started || stop.active || incident.active) { nycTurn = null; return; }
  const dc = road.cornerAhead(drive.s), auto = !drive.manual && performance.now() - lastSteerT > 8000;
  const nearest = () => NYC_L4.reduce((b, l, i) => (Math.abs(l - drive.home) < Math.abs(NYC_L4[b] - drive.home) ? i : b), 0);
  const front = drive.s + (cars.dim?.length ?? 4.6) / 2, cf = front + road.cornerAhead(front);
  if (road.cornerAhead(front) <= NYC.arc && nycChecked !== Math.round(cf)) {
    nycChecked = Math.round(cf);
    if (drive.d > -3.4) foul('turn', '↰ Rẽ trái không từ làn trái!');
    else if (blinker !== -1) foul('turnSig', '↰ Rẽ trái không bật xi nhan!');
    say('↰ ' + nycStreet(cf + 40));
  }
  if (dc < 150 && dc > NYC.arc) {
    nycTurn = { c: drive.s + dc };
    if (!auto) return;
    if (blinker !== -1) { blinker = -1; blinkAge = 0; }
    blinkDone = 0;
    const i = nearest();
    if (i > 0 && Math.abs(drive.d - drive.home) < 0.4 && nycLaneFree(NYC_L4[i - 1])) drive.home = NYC_L4[i - 1];
    return;
  }
  if (!nycTurn) return;
  if (blinker === -1 && drive.s > nycTurn.c + NYC.arc) blinker = 0;
  if (!auto || drive.s < nycTurn.c + 40) return;
  const i = nearest();
  if (i >= 3) { if (Math.abs(drive.d - drive.home) < 0.3) nycTurn = null; return; }
  if (blinker !== 1) { blinker = 1; blinkAge = 0; }
  if (Math.abs(drive.d - drive.home) < 0.4 && nycLaneFree(NYC_L4[i + 1])) drive.home = NYC_L4[i + 1];
}
let lastDriveMap = CITY_MAP;
let lastChillMap = MAPS.findIndex((m) => m.id === 'meadow');
// tên chế độ hiện giữa màn hình 1 giây rồi mờ dần
let modeNameT = 0;
function showModeName(mode) {
  const e = $('modename');
  e.textContent = mode === 'drive' ? 'Drive' : 'Chill';
  e.classList.add('show');
  clearTimeout(modeNameT); modeNameT = setTimeout(() => e.classList.remove('show'), 1000);
}
// đổi chế độ trong game (nút 🔀 trong Setting): Drive => map Phố; Chill => map ngắm cảnh lần trước
function setGameMode(mode) {
  if (state.mode === mode) return;
  if (state.mode === 'chill') lastChillMap = state.map; else lastDriveMap = state.map;
  const leftDrive = state.mode === 'drive' && session.dist > 300 && trafficTune.score;
  state.mode = mode;
  state.map = mode === 'drive' ? lastDriveMap : lastChillMap;
  applyMap(); refreshUI(); showModeName(mode);
  if (leftDrive) { renderScore(); $('score').hidden = false; }   // rời Drive: hiện bảng điểm buổi vừa lái
  if (mode === 'drive') { session = newSession(); violations = 0; }
}
const nextMap = () => {
  // Chill: các map ngắm cảnh; Drive: Phố ↔ Đại lộ
  do state.map = (state.map + 1) % MAPS.length; while (state.mode && isDriveMap(state.map) !== (state.mode === 'drive'));
  applyMap(); refreshUI(); say('Map · ' + MAPS[state.map].name);
};
function onCamChange() {
  state.fstop = Math.max(0, FSTOPS.indexOf(rig.aperture));
  syncLens();
}
let tuneKind = null;
let renderTune = () => {};
const nextCam = () => { state.cam = (state.cam + 1) % CAMERAS.length; rig.setMode(state.cam); onCamChange(); refreshUI(); if (tuneKind === 'camera') renderTune(); say('Camera · ' + CAMERAS[state.cam].name); };
// thời tiết 'auto': tự chọn ngẫu nhiên (trong / mây / mưa / sương / bão) mỗi 2.5–5 phút
let autoWeatherT = 0, curMapId = null;
const SCOPED = { city: 'chilldrive.city', avenue: 'chilldrive.avenue', hlg: 'chilldrive.hlg', nyc: 'chilldrive.nyc', sgn: 'chilldrive.sgn' };   // map có bộ cài đặt riêng (lưu trên trình duyệt)
const scopes = { world: null, city: null, avenue: null, hlg: null, nyc: null, sgn: null };
for (const [k, key] of Object.entries(SCOPED)) try { scopes[k] = JSON.parse(localStorage.getItem(key)); } catch { /* bỏ qua */ }
const cityDefaults = () => ({ weather: WEATHERS.findIndex((w) => w.id === 'auto'), time: TIMES.findIndex((t) => t.id === 'auto'), cam: CAMERAS.findIndex((c) => c.id === 'chase') });
function saveScope(name) {
  if (!state.started || admin.active) return;    // màn hình chờ / Stop: không ghi đè cài đặt của chú
  scopes[name] = { weather: state.weather, time: state.time, cam: state.cam };
  if (SCOPED[name]) try { localStorage.setItem(SCOPED[name], JSON.stringify(scopes[name])); } catch { /* chế độ riêng tư */ }
}
function restoreScope(sc) {
  if (!WEATHERS[sc.weather] || !TIMES[sc.time] || !CAMERAS[sc.cam]) sc = cityDefaults();
  setWeatherIdx(sc.weather);
  state.time = sc.time; env.setTime(TIMES[sc.time].hour);
  state.cam = sc.cam; rig.setMode(state.cam); onCamChange();
}
const AUTO_WEATHERS = [['clear', 0.34], ['cloudy', 0.34], ['rain', 0.16], ['fog', 0.1], ['storm', 0.06]];
function setWeatherIdx(i, byUser = false) {
  state.weather = i;
  if (WEATHERS[i].id === 'auto') autoWeatherT = 0; else env.setWeather(WEATHERS[i].id);
}
function autoWeather(dt) {
  if (WEATHERS[state.weather].id !== 'auto' || (autoWeatherT -= dt) > 0) return;
  autoWeatherT = 150 + Math.random() * 150;
  let k = Math.random(), id = 'cloudy';
  for (const [w, p] of AUTO_WEATHERS) { if ((k -= p) < 0) { id = w; break; } }
  if (id === env.weather) id = id === 'clear' ? 'cloudy' : 'clear';
  env.setWeather(id);
}

// ---------- chế độ Stop + camera admin ----------
// Bật: đóng băng mô phỏng (frame dùng dt = 0, simNow đứng yên), đưa về Trời trong + Ban ngày,
// giao camera cho adminCam.js. Tắt: trả camera / thời tiết / giờ như cũ. Không lưu vào localStorage.
let adminSaved = null;
function setAdmin(on) {
  if (on === admin.active || !state.started) return;
  if (on) {
    adminSaved = { weather: state.weather, time: state.time, hour: env.hour, weatherId: env.weather, autoT: autoWeatherT };
    admin.enter();
    setWeatherIdx(WEATHERS.findIndex((w) => w.id === 'clear'));
    env.snapWeather('clear');
    state.time = TIMES.findIndex((t) => t.id === 'noon');
    env.setTime(TIMES[state.time].hour); env.hour = TIMES[state.time].hour; env.tween = null;
    keys.clear();
    $('b-admin').classList.add('on');
    say('Stop / Admin — phím ` để thoát');
  } else {
    admin.exit();
    const s = adminSaved; adminSaved = null;
    if (s) {
      state.weather = s.weather; env.snapWeather(s.weatherId); autoWeatherT = s.autoT;
      state.time = s.time;
      const h = TIMES[s.time]?.hour;
      env.setTime(h == null ? null : s.hour);       // giờ Tự động: trả lại chế độ tự chạy như cũ
      if (h != null) { env.hour = s.hour; env.tween = null; }
    }
    keys.clear();
    $('b-admin').classList.remove('on');
    say('Chạy tiếp');
  }
  refreshUI();
}
admin.onExit = () => setAdmin(false);
const nextWeather = () => { setWeatherIdx((state.weather + 1) % WEATHERS.length, true); refreshUI(); if (tuneKind === 'weather') renderTune(); say('Thời tiết · ' + WEATHERS[state.weather].name); };
const nextTime = () => {
  state.time = (state.time + 1) % TIMES.length;
  env.setTime(TIMES[state.time].hour);
  refreshUI();
  if (tuneKind === 'time') renderTune();  say('Thời gian · ' + TIMES[state.time].name);
};
// sương sát đất theo nhóm (Chill / Drive), thời tiết đang có và giờ hiện tại
const mistGroup = () => mistTune[isDriveMap(state.map) ? 'drive' : 'chill'];
const mistWeather = () => { const g = mistGroup(); return g.w[env.weather] || g.w.cloudy; };
function mistTimeK(t, hour) {                                       // nội suy vòng 24 h giữa 4 mốc giờ
  const P = Object.entries(MIST_HOURS).map(([k, h]) => [h, t[k] ?? 1]).sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < P.length; i++) {
    const [h0, k0] = P[i], [h1r, k1] = P[(i + 1) % P.length], h1 = h1r <= h0 ? h1r + 24 : h1r, hh = hour < h0 ? hour + 24 : hour;
    if (hh >= h0 && hh <= h1) return k0 + (k1 - k0) * (hh - h0) / (h1 - h0);
  }
  return 1;
}
function updateMist(dt) {
  const W = mistWeather(), cover = W.cover, dens = Math.min(1, W.dens * mistTimeK(mistGroup().t, env.hour ?? 12));
  const k = mistNow.map !== state.map ? 1 : Math.min(1, dt * 0.8);   // đổi map: đặt ngay; đổi thời tiết / giờ: chuyển mượt
  mistNow.map = state.map;
  mistNow.cover += (cover - mistNow.cover) * k; mistNow.dens += (dens - mistNow.dens) * k;
}
// thanh trượt bảng 🌫️ (phím G): chỉnh sương của thời tiết đang có (nhóm hiện tại)
function syncMistPanel() {
  const W = mistWeather();
  for (const [id, key] of [['mist-cover', 'cover'], ['mist-dens', 'dens']]) { $(id).value = Math.round(W[key] * 100); $(id + '-v').textContent = $(id).value; }
}
// Cinematic luôn bật (letterbox, xoá phông, bloom, chỉnh màu...) — không còn nút tắt
const applyCine = () => document.body.classList.toggle('cine', state.cine && state.started);
function setGear(g) {
  const was = drive.fast;
  drive.gear = g; drive.fast = g === 2; drive.target = gears()[Math.min(g, 1)];
  if (drive.fast !== was) syncLens();
}
const toggleFast = () => { if (stop.active) return; setGear((drive.gear + 1) % GEARS.length); refreshUI(); say('Tốc độ · ' + Math.round(gears()[drive.gear] * 3.6) + ' km/h'); };
const nextMusic = () => { state.music = (state.music + 1) % MUSIC_MODES.length; audio.setMode(state.music); refreshUI(); say('Âm thanh · ' + MUSIC_MODES[state.music].name); };

el.fast.onclick = toggleFast;
// bảng chỉnh sương mù: độ phủ + độ dày
const closeTune = () => { tuneKind = null; $('tunepanel').hidden = true; refreshUI(); };
const toggleMistPanel = () => { closeTune(); $('mistpanel').hidden = !$('mistpanel').hidden; $('lenspanel').hidden = true; syncMistPanel(); refreshUI(); };
el.mist.onclick = toggleMistPanel;
// bảng chỉnh ống kính: tiêu cự (= zoom) + khẩu độ (độ xoá phông)
const toggleLensPanel = () => { closeTune(); $('lenspanel').hidden = !$('lenspanel').hidden; $('mistpanel').hidden = true; refreshUI(); };
el.lens.onclick = toggleLensPanel;
el.quality.onclick = nextQuality;
el.stop.onclick = toggleStop;
el.character.onclick = nextCharacter;
el.full.onclick = toggleFS;
// chụp ảnh màn hình: đánh dấu, chụp canvas ngay sau khi vẽ xong khung hình (canvas WebGL không giữ ảnh sau khi trình duyệt hiển thị)
let shotPending = false;
// map Phố: phanh (giữ nút / phím Space, B) + thông báo lỗi
let brakeHeld = false, cityFront = null, violations = 0, toastTimer = 0, yieldWarned = null, stillT = 0, honkT = 0, honkWarned = false;
{
  const b = $('brake');
  const on = (e) => { brakeHeld = true; b.classList.add('on'); e.preventDefault(); brakeTap(); };
  const off = () => { brakeHeld = false; b.classList.remove('on'); };
  b.addEventListener('pointerdown', on);
  for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) b.addEventListener(ev, off);
}
// bấm đúp phanh (Space / B / nút Space) => dừng hẳn và đứng yên; ↑ / W / F hoặc bấm đúp lần nữa để chạy tiếp
let brakeTapT = -1;
function brakeTap() {
  const t = performance.now();
  if (t - brakeTapT < 350) { drive.halt = !drive.halt; brakeTapT = -1; say(drive.halt ? 'Dừng hẳn — ↑ / W để chạy tiếp' : 'Chạy tiếp'); }
  else brakeTapT = t;
}
// xi nhan xe mình: phím , (trái) / . (phải) bật / tắt; điện thoại: giữ nút lái tự bật. Đèn vàng 4 góc xe + mũi tên dưới đồng hồ
// + tiếng tách tách. Đổi làn / vào nhánh ra ở map Drive mà không bật đúng bên => lỗi. Đổi làn xong tự tắt (quên: tự tắt sau 15 s).
let blinker = 0, blinkAge = 0, blinkPhase = 0, blinkLane = null, blinkSprites = null, blinkMap = -1;
function setBlinker(dir) { blinker = blinker === dir ? 0 : dir; blinkAge = 0; say(blinker ? (blinker < 0 ? 'Xi nhan trái' : 'Xi nhan phải') : 'Tắt xi nhan'); }
function updateBlinker(dt) {
  if (steerHeld && blinker !== steerHeld) { blinker = steerHeld; blinkAge = 0; }   // điện thoại: giữ nút lái = bật xi nhan bên đó
  blinkAge += dt;
  if (blinker && blinkAge > 15) blinker = 0;                                        // quên tắt: tự tắt sau 15 s
  const ph = blinker ? Math.floor(blinkAge * 3.2) % 2 : 0;
  if (blinker && ph !== blinkPhase) audio.tick(ph === 1);
  blinkPhase = ph;
  const on = blinker && ph === 1;
  $('blink').querySelector('.l').classList.toggle('on', on && blinker < 0);
  $('blink').querySelector('.r').classList.toggle('on', on && blinker > 0);
  // đèn vàng 4 góc xe mình
  if (!blinkSprites && cars.softTex) {
    blinkSprites = [];
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: cars.softTex, color: 0xff8a10, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      sp.scale.set(0.55, 0.55, 1); sp.userData = { sx, sz }; sp.renderOrder = 6; cars.tilt.add(sp); blinkSprites.push(sp);
    }
  }
  if (blinkSprites && cars.dim) for (const sp of blinkSprites) {
    const { sx, sz } = sp.userData;
    sp.position.set(sx * (cars.dim.width / 2 - 0.05), 0.75, sz * (cars.dim.length / 2 - 0.05));
    sp.material.opacity = on && sx === blinker ? 1 : 0;
  }
  // đổi làn ở map Drive: kiểm tra xi nhan
  if (blinkMap !== state.map) { blinkMap = state.map; blinkLane = null; blinker = 0; }   // đổi map / dịch chỗ: không tính là đổi làn
  if (!cityTraffic.visible || !state.started || stop.active || incident.active || drive.ramp != null) { blinkLane = null; return; }
  const L = cityTraffic.lanes, lane = Math.sign(drive.d || 1) * L.reduce((b, l) => (Math.abs(Math.abs(drive.d) - l) < Math.abs(Math.abs(drive.d) - b) ? l : b), L[0]);
  if (blinkLane !== null && lane !== blinkLane && (onNyc() || Math.sign(lane) === Math.sign(blinkLane))) {   // New York: một chiều, qua tim đường cũng là đổi làn
    const side = Math.sign(lane - blinkLane);                                        // + = sang phải
    if (blinker !== side) foul('lane', '↔ Đổi làn không bật xi nhan!');
  }
  if (blinker && blinkLane !== null && lane !== blinkLane) blinkDone = 1.5;   // đổi xong => tự tắt sau 1.5 s
  if (blinkDone > 0 && (blinkDone -= dt) <= 0 && !steerHeld) blinker = 0;
  blinkLane = lane;
}
let blinkDone = 0;
// chấm điểm buổi lái (map Drive): mỗi lỗi trừ điểm theo loại, bảng điểm 📋 / phím J (thời gian, quãng đường, tốc độ, số lỗi),
// rời chế độ Drive sau ≥ 300 m thì tự hiện bảng. Điểm nhỏ dưới đồng hồ. `violations` = tổng lỗi của buổi
const FOULS = { red: ['🚨 Vượt đèn đỏ', 15], ped: ['🚸 Không nhường người đi bộ', 15], crash: ['💥 Va chạm', 25],
  speed: ['📸 Quá tốc độ (camera)', 10], lane: ['↔ Đổi làn không xi nhan', 5], ramp: ['↘ Vào nhánh ra không xi nhan', 5],
  turn: ['↰ Rẽ trái không từ làn trái', 10], turnSig: ['↰ Rẽ không xi nhan', 5] };
const newSession = () => ({ t: 0, dist: 0, vmax: 0, n: {} });
let session = newSession(), scoreHit = 0;
const sessionScore = () => Math.max(0, 100 - Object.entries(session.n).reduce((a, [k, n]) => a + n * FOULS[k][1], 0));
const scoreGrade = (p) => (p >= 90 ? 'Xuất sắc' : p >= 75 ? 'Tốt' : p >= 50 ? 'Đạt' : 'Chưa đạt');
function foul(type, text) {
  violations++;
  if (!trafficTune.score) { if (text) toast(`${text} (lỗi thứ ${violations})`, true); return; }   // tắt chấm điểm: chỉ nhắc lỗi
  session.n[type] = (session.n[type] || 0) + 1; scoreHit = 1.5;
  if (text) toast(`${text} (lỗi thứ ${violations}, −${FOULS[type][1]} điểm)`, true);
  if (!$('score').hidden) renderScore();
}
function renderScore() {
  const p = sessionScore(), mm = Math.floor(session.t / 60), ss = Math.floor(session.t % 60);
  $('sc-pt').textContent = p; $('sc-grade').textContent = scoreGrade(p);
  $('sc-stats').innerHTML = `<span>Thời gian: ${mm}:${String(ss).padStart(2, '0')}</span><span>Quãng đường: ${(session.dist / 1000).toFixed(2)} km</span>`
    + `<span>Tốc độ TB: ${session.t > 1 ? Math.round(session.dist / session.t * 3.6) : 0} km/h</span><span>Cao nhất: ${Math.round(session.vmax * 3.6)} km/h</span>`;
  $('sc-list').innerHTML = Object.entries(FOULS).map(([k, [name, pen]]) => {
    const n = session.n[k] || 0;
    return `<tr class="${n ? '' : 'ok'}"><td>${name}</td><td>× ${n}</td><td>${n ? '−' + n * pen : ''}</td></tr>`;
  }).join('');
}
function toggleScore(show = $('score').hidden) {
  if (show) renderScore();
  $('score').hidden = !show;
}
function resetSession() { session = newSession(); violations = 0; renderScore(); say('Chấm điểm · bắt đầu buổi lái mới'); }
$('b-score').onclick = () => toggleScore();
$('sc-close').onclick = () => toggleScore(false);
$('sc-new').onclick = () => resetSession();
$('score').addEventListener('pointerdown', (e) => { if (e.target.id === 'score') toggleScore(false); });
function updateSession(dt) {
  const on = cityTraffic.visible && state.started && !!trafficTune.score;
  $('scoremini').hidden = !on;
  if (!on) return;
  if (!stop.active && !incident.active) { session.t += dt; session.dist += Math.abs(drive.v) * dt; session.vmax = Math.max(session.vmax, drive.v); }
  scoreHit = Math.max(0, scoreHit - dt);
  const txt = 'Điểm ' + sessionScore();
  if ($('scoremini').textContent !== txt) $('scoremini').textContent = txt;
  $('scoremini').classList.toggle('hit', scoreHit > 0);
}
// giới hạn tốc độ (map Drive): biển tròn cạnh đồng hồ — Phố 50, Đại lộ theo biển (`avLimit`: 120 / 100 quanh nút giao / 40 quanh
// trạm phí), trên nhánh 60; số tốc độ đỏ khi vượt quá 5 km/h. Đại lộ: qua cột camera mà đang quá tốc độ => đèn chớp + lỗi
let camPrevS = null, camWarned = -1, limitShown = -1;
function updateSpeedLimit() {
  const on = cityTraffic.visible && state.started && !stop.active && !incident.active;
  const lim = !on ? 0 : onAvenue() ? (drive.ramp != null ? 60 : avLimit(drive.s, 1)) : onNyc() ? 40 : 50;   // New York: 25 mph
  if (lim !== limitShown) { limitShown = lim; $('limit').hidden = !lim; $('limit').textContent = lim; }
  const kmh = drive.v * 3.6, over = lim > 0 && kmh > lim + CAM.tol;
  $('speed').parentElement.classList.toggle('over', over);
  if (!on || !onAvenue() || drive.ramp != null) { camPrevS = null; return; }
  const k = camIndex(drive.s + 400), cs = camS(k), ahead = cs - drive.s;
  if (ahead > 0 && ahead < 320 && over && camWarned !== k) { camWarned = k; toast(`📷 Phía trước có camera bắn tốc độ — giới hạn ${lim} km/h`); }
  const front = drive.s + (cars.dim?.length ?? 4) / 2;
  if (camPrevS !== null && camPrevS < cs && front >= cs && front - camPrevS < 60 && over) {
    avenue.flashCam(cs, 1); audio.tick(true);
    foul('speed', `📸 Camera bắn tốc độ: ${Math.round(kmh)} km/h — giới hạn ${lim}`);
  }
  camPrevS = front;
}
// điện thoại: nút lái trái / phải hai bên hộp Space (giữ để lái như phím ← / →)
let steerHeld = 0;
if (IS_PHONE) document.body.classList.add('phone');
for (const [id, dir] of [['steer-l', -1], ['steer-r', 1]]) {
  const b = $(id);
  b.addEventListener('pointerdown', (e) => { steerHeld = dir; b.classList.add('on'); e.preventDefault(); b.setPointerCapture?.(e.pointerId); });
  for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) b.addEventListener(ev, () => { if (steerHeld === dir) steerHeld = 0; b.classList.remove('on'); });
}
function toast(text, bad = false, ms = 0) {
  const t = $('toast');
  t.textContent = text;
  t.classList.toggle('bad', bad);
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), ms || (bad ? 2800 : 4500));
}
$('b-shot').onclick = () => { shotPending = true; };
function saveShot() {
  shotPending = false;
  canvas.toBlob(async (blob) => {
    if (!blob) return;
    const name = 'chill-drive-' + new Date().toISOString().slice(0, 19).replace(/[T:]/g, '-') + '.png';
    const file = new File([blob], name, { type: 'image/png' });
    if (IS_PHONE && navigator.canShare?.({ files: [file] })) { try { await navigator.share({ files: [file] }); return; } catch { /* huỷ chia sẻ => tải về */ } }
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }, 'image/png');
}
// ---- quay màn hình (nút ⏺ cạnh nút chụp ảnh, phím Y): hình canvas game (không có nút / HUD) + tiếng game.
// Lưu: Chrome / Edge máy tính chọn thư mục 1 lần (hộp chọn mở sẵn ở Desktop), nhớ trong IndexedDB rồi các lần sau ghi thẳng
// vào đó; trình duyệt khác => tải về như ảnh chụp (Downloads; điện thoại: bảng chia sẻ). Giữ Shift khi bấm: chọn lại thư mục.
const REC_MAX_MS = 10 * 60 * 1000;
let rec = null;                                                   // { mr, chunks, t0, timer, type }
const recIdb = (mode, fn) => new Promise((res, rej) => {
  const open = indexedDB.open('chilldrive', 1);
  open.onupgradeneeded = () => open.result.createObjectStore('kv');
  open.onerror = () => rej(open.error);
  open.onsuccess = () => { const tx = open.result.transaction('kv', mode), st = tx.objectStore('kv'), r = fn(st); tx.oncomplete = () => res(r?.result); tx.onerror = () => rej(tx.error); };
});
const recDir = { get: () => recIdb('readonly', (st) => st.get('recDir')).catch(() => null), set: (h) => recIdb('readwrite', (st) => st.put(h, 'recDir')).catch(() => {}) };
async function pickRecDir(force) {
  if (!window.showDirectoryPicker) return null;
  let dir = force ? null : await recDir.get();
  if (dir) {
    const opt = { mode: 'readwrite' };
    if ((await dir.queryPermission?.(opt)) !== 'granted' && (await dir.requestPermission?.(opt)) !== 'granted') dir = null;
  }
  if (!dir) {
    try { dir = await window.showDirectoryPicker({ id: 'chilldrive-rec', mode: 'readwrite', startIn: 'desktop' }); } catch { return null; }   // huỷ => tải về
    await recDir.set(dir);
  }
  return dir;
}
async function saveRecording(blob, ext) {
  const name = 'chill-drive-' + new Date().toISOString().slice(0, 19).replace(/[T:]/g, '-') + '.' + ext;
  const dir = rec?.dir;
  if (dir) {
    try { const fh = await dir.getFileHandle(name, { create: true }); const w = await fh.createWritable(); await w.write(blob); await w.close(); toast('💾 Đã lưu video vào thư mục "' + dir.name + '": ' + name); return; }
    catch (e) { console.warn('Lưu vào thư mục lỗi, tải về thay thế', e); }
  }
  const file = new File([blob], name, { type: blob.type });
  if (IS_PHONE && navigator.canShare?.({ files: [file] })) { try { await navigator.share({ files: [file] }); return; } catch { /* huỷ => tải về */ } }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  toast('💾 Đã tải video về: ' + name);
}
// định dạng có bộ mã HÌNH rõ ràng trước: mp4 H.264 (Chrome / Edge / Safari, thường mã hoá bằng phần cứng), rồi webm VP8 (nhẹ hơn
// VP9 khi vừa chơi vừa quay), VP9; 'video/mp4' trơn để cuối vì có trình duyệt nhận mp4 nhưng không có H.264 => file chỉ có tiếng
const recFmt = () => [['video/mp4;codecs=avc1,mp4a.40.2', 'mp4'], ['video/mp4;codecs=avc1', 'mp4'], ['video/webm;codecs=vp8,opus', 'webm'],
  ['video/webm;codecs=vp9,opus', 'webm'], ['video/webm', 'webm'], ['video/mp4', 'mp4']]
  .find(([t]) => window.MediaRecorder?.isTypeSupported?.(t)) || null;
async function toggleRecord(e) {
  if (rec) { rec.mr.stop(); return; }
  const fmt = recFmt();
  if (!fmt || !canvas.captureStream) { toast('Trình duyệt này không hỗ trợ quay màn hình', true); return; }
  const dir = window.showDirectoryPicker ? await pickRecDir(!!e?.shiftKey) : null;   // chọn thư mục trước khi quay (cần cú bấm của chú)
  const stream = canvas.captureStream(30);
  const at = audio.recordTrack(); if (at) stream.addTrack(at);
  let mr;
  try { mr = new MediaRecorder(stream, { mimeType: fmt[0], videoBitsPerSecond: 10e6, audioBitsPerSecond: 160e3 }); }
  catch (err) { toast('Không quay được: ' + err.message, true); return; }
  rec = { mr, chunks: [], t0: performance.now(), type: fmt[0], ext: fmt[1], dir };
  mr.ondataavailable = (ev) => { if (ev.data?.size) rec?.chunks.push(ev.data); };
  mr.onstop = async () => {
    const r = rec; rec = null; clearInterval(r.timer);
    stream.getVideoTracks().forEach((t) => t.stop());
    $('b-rec').classList.remove('on'); $('rec-time').textContent = ''; document.body.classList.remove('recording');
    const blob = new Blob(r.chunks, { type: r.type.split(';')[0] });
    if (blob.size) await saveRecording(blob, r.ext); else toast('Video trống, không lưu', true);
  };
  mr.start(1000);
  $('b-rec').classList.add('on'); document.body.classList.add('recording');
  rec.timer = setInterval(() => {
    const t = (performance.now() - rec.t0) / 1000;
    $('rec-time').textContent = String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(Math.floor(t % 60)).padStart(2, '0');
    if (t * 1000 > REC_MAX_MS) rec.mr.stop();
  }, 250);
  toast('⏺ Đang quay — bấm lại nút (hoặc phím Y) để dừng và lưu' + (dir ? ' vào "' + dir.name + '"' : ''));
}
$('b-rec').onclick = (e) => { toggleRecord(e); e.currentTarget.blur(); };

const focalIn = $('lens-focal'), fstopIn = $('lens-fstop');
focalIn.min = FOCAL_MIN; focalIn.max = FOCAL_MAX;
fstopIn.max = FSTOPS.length - 1;
const syncLens = () => {
  focalIn.value = Math.round(rig.focal); $('lens-focal-v').textContent = Math.round(rig.focal) + 'mm';
  state.fstop = Math.max(0, FSTOPS.indexOf(rig.aperture));
  fstopIn.value = state.fstop; $('lens-fstop-v').textContent = 'f/' + rig.aperture;
};
focalIn.addEventListener('input', () => { const t = rig.tune[CAMERAS[state.cam].id]; t.focal = rig.focal = Number(focalIn.value); syncLens(); refreshUI(); });
fstopIn.addEventListener('input', () => { const t = rig.tune[CAMERAS[state.cam].id]; state.fstop = Number(fstopIn.value); t.aperture = rig.aperture = FSTOPS[state.fstop]; syncLens(); refreshUI(); });
for (const i of [focalIn, fstopIn]) i.addEventListener('change', () => i.blur());
syncLens();
for (const [id, key] of [['mist-cover', 'cover'], ['mist-dens', 'dens']]) {
  const input = $(id);
  input.addEventListener('input', () => { mistWeather()[key] = input.value / 100; $(id + '-v').textContent = input.value; saveTuning(); refreshUI(); });
  input.addEventListener('change', () => input.blur());   // trả phím mũi tên lại cho việc lái xe
}

const CAM_FIELDS = {
  chase: [['distance','Khoảng lùi (m)',1,20,.1],['height','Độ cao (m)',.2,8,.05],['carHeight','Theo chiều cao xe',0,1,.01],['lookAhead','Nhìn trước (m)',0,40,.5],['lookHeight','Cao điểm nhìn (m)',0,5,.05],['slopeLook','Bám dốc',0,25,.5],['speedBack','Lùi theo tốc độ',0,6,.1],['cineBack','Lùi cinematic',0,6,.1],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.02,2,.01]],
  low: [['distance','Khoảng lùi (m)',1,20,.1],['height','Độ cao (m)',.2,5,.05],['lookAhead','Nhìn trước (m)',0,40,.5],['lookHeight','Cao điểm nhìn (m)',0,5,.05],['slopeLook','Bám dốc',0,25,.5],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.02,2,.01]],
  side: [['distance','Khoảng ngang (m)',1,25,.1],['height','Độ cao (m)',.2,8,.05],['lookHeight','Tỉ lệ cao xe',0,1,.01],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.02,2,.01]],
  cockpit: [['eyeSide','Dịch ngang (m)',-.5,.5,.005],['eyeHeight','Dịch cao (m)',-.5,.5,.005],['eyeForward','Dịch trước (m)',-.5,.5,.005],['pitch','Góc chúc (rad)',-.2,.8,.005],['lookDistance','Tầm nhìn (m)',5,80,1],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.01,.5,.005]],
  orbit: [['radius','Bán kính (m)',1,30,.1],['height','Độ cao (m)',.2,12,.05],['heightWave','Nhấp nhô (m)',0,4,.05],['waveRate','Nhịp nhấp nhô',0,3,.05],['speed','Tốc độ quay',-.8,.8,.01],['lookHeight','Cao điểm nhìn (m)',0,5,.05],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.02,2,.01]],
  drone: [['distance','Khoảng lùi (m)',1,50,.5],['height','Độ cao (m)',2,50,.5],['lookAhead','Nhìn trước (m)',-10,40,.5],['lookHeight','Cao điểm nhìn (m)',0,8,.05],['follow','Mượt vị trí',.2,20,.1],['lookFollow','Mượt điểm nhìn',.2,20,.1],['near','Cắt gần (m)',.02,2,.01]],
};
const WEATHER_FIELDS = [
  ['fog','Mật độ sương',0,.012,.0001],['overcast','Độ âm u',0,1,.01],['clouds','Mây che phủ',0,1,.01],['sun','Cường độ nắng',0,2,.01],
  ['rain','Lượng mưa',0,1,.01],['snow','Lượng tuyết',0,1,.01],['wet','Độ ướt đường',0,1,.01],['cover','Tuyết phủ đất',0,1,.01],
  ['wind','Sức gió',0,1,.01],['dark','Độ tối',0,1,.01],
];
const ENV_FIELDS = [
  ['exposure','Phơi sáng',.2,2.5,.01],['skyBrightness','Độ sáng trời',0,3,.01],['directLight','Ánh sáng chính',0,3,.01],
  ['ambientLight','Ánh sáng phủ',0,3,.01],['sunGlow','Quầng mặt trời',0,3,.01],['sunDisc','Đĩa mặt trời',0,3,.01],
  ['cloudBrightness','Độ sáng mây',0,3,.01],['rays','Tia sáng',0,3,.01],
];
const tunePanel = $('tunepanel'), tuneMode = $('tune-mode'), tuneFields = $('tune-fields');
const saveTuning = () => {
  tuneSets[tuneGroup] = cloneJ(tuneParts());
  try { localStorage.setItem(TUNE_KEY, JSON.stringify({ v: 2, chill: tuneSets.chill, drive: tuneSets.drive, traffic: trafficTune, mist: mistTune })); } catch { /* chế độ riêng tư */ }
};
const addHeading = (text) => { const h = document.createElement('h4'); h.textContent = text; tuneFields.append(h); };
const addNumber = ({ label, min, max, step, get, set }) => {
  const row = document.createElement('label'), name = document.createElement('span'), range = document.createElement('input'), number = document.createElement('input');
  name.textContent = label; range.type = 'range'; number.type = 'number';
  for (const input of [range, number]) { input.min = min; input.max = max; input.step = step; input.value = get(); }
  const apply = (value) => { value = clamp(Number(value), Number(min), Number(max)); set(value); range.value = number.value = value; saveTuning(); };
  range.oninput = () => apply(range.value); number.onchange = () => { apply(number.value); number.blur(); };
  row.append(name, range, number); tuneFields.append(row);
};
const addColor = ({ label, get, set }) => {
  const row = document.createElement('label'), name = document.createElement('span'), input = document.createElement('input');
  name.textContent = label; input.type = 'color'; input.value = get(); input.oninput = () => { set(input.value); saveTuning(); };
  row.append(name, input); tuneFields.append(row);
};
const addChoice = ({ label, options, get, set }) => {
  const row = document.createElement('label'), name = document.createElement('span'), select = document.createElement('select');
  name.textContent = label;
  options.forEach((text, value) => { const option = document.createElement('option'); option.value = value; option.textContent = text; option.selected = value === get(); select.append(option); });
  select.onchange = () => { set(Number(select.value)); saveTuning(); }; row.append(name, select); tuneFields.append(row);
};
// nút bật / tắt (bấm là đổi ngay, không cần thả danh sách)
const addToggle = ({ label, get, set, names = ['Tắt', 'Bật'] }) => {
  const row = document.createElement('label'), name = document.createElement('span'), btn = document.createElement('button');
  name.textContent = label; btn.type = 'button'; btn.className = 'tog';
  const show = () => { const on = !!get(); btn.textContent = names[on ? 1 : 0]; btn.classList.toggle('on', on); };
  btn.onclick = (e) => { e.preventDefault(); set(get() ? 0 : 1); saveTuning(); show(); };
  show(); row.append(name, btn); tuneFields.append(row);
};
const cameraSpecs = () => {
  const id = CAMERAS[state.cam].id, values = rig.tune[id];
  return CAM_FIELDS[id].map(([key,label,min,max,step]) => ({ label, min, max, step, get: () => values[key], set: (v) => {
    values[key] = v; if (key === 'near') { camera.near = v; camera.updateProjectionMatrix(); }
  } }));
};
const environmentSpecs = () => ENV_FIELDS.map(([key,label,min,max,step]) => ({ label, min, max, step, get: () => env.tune[key], set: (v) => { env.tune[key] = v; env.envKey = ''; } }));

renderTune = () => {
  if (!tuneKind) return;
  tuneFields.replaceChildren(); tuneMode.replaceChildren();
  // tốc độ xe khác (km/h) của nhóm map đang chạy: từ / đến (đến ≥ từ + 5)
  // (đang ở mức ngẫu nhiên Thưa / Vừa / Đông: hiện số đã nhân hệ số mức; chỉnh tay => tắt ngẫu nhiên trước rồi lưu đúng số chú nhập)
  const kmhFields = (pre = () => {}) => {
    const g = kmhGroup(), r = trafficTune.kmh[g], lk = () => (g === 'chill' ? 1 : trafficLevel?.speed ?? 1);
    const name = { chill: 'map ngắm cảnh', city: 'Phố', avenue: 'cao tốc' }[g];
    addNumber({ label: `Tốc độ xe khác — từ (km/h, ${name})`, min: 10, max: 250, step: 1, get: () => Math.round(r[0] * lk()), set: (v) => { pre(); r[0] = v; r[1] = Math.max(r[1], v + 5); applyTrafficTune(); } });
    addNumber({ label: `Tốc độ xe khác — đến (km/h, ${name})`, min: 15, max: 260, step: 1, get: () => Math.round(r[1] * lk()), set: (v) => { pre(); r[1] = v; r[0] = Math.min(r[0], v - 5); applyTrafficTune(); } });
  };
  if (tuneKind === 'traffic' && kmhGroup() === 'chill') {           // map ngắm cảnh: chỉ có tốc độ xe khác
    tuneMode.hidden = true;
    $('tune-title').textContent = 'Giao thông';
    addHeading('Xe khác trên đường');
    kmhFields();
    return;
  }
  if (tuneKind === 'traffic') {
    tuneMode.hidden = true;
    $('tune-title').textContent = 'Giao thông (Phố / Đại lộ / Cao tốc)';
    if (onNyc()) {                                                   // New York: thử hiển thị
      addHeading('New York');
      addToggle({ label: 'Phản chiếu kính (một số tòa nhà Times Square)', get: () => timesSq.mirror, set: (v) => {
        timesSq.setMirror(v); try { localStorage.setItem('chilldrive.nyc.mirror', v ? '1' : '0'); } catch { /* chế độ riêng tư */ }
        toast(v ? 'Đã bật phản chiếu kính' : 'Đã tắt phản chiếu kính'); } });
    }
    if (onSgn()) {                                                   // Landmark: thử đồ hoạ cây / tắt hẳn cây
      addHeading('Landmark');
      addToggle({ label: 'Cây model chi tiết (gần 100 m)', get: () => sgnEnv.treeDetail, set: (v) => {
        sgnEnv.setTreeDetail(v); try { localStorage.setItem('chilldrive.sgn.trees', v ? '1' : '0'); } catch { /* chế độ riêng tư */ }
        toast(v ? 'Đã bật cây model chi tiết' : 'Đã tắt cây model chi tiết — chỉ còn cây low-poly'); } });
      addToggle({ label: 'Hiện cây (thử đồ hoạ)', get: () => sgnEnv.treesVisible, set: (v) => {
        sgnEnv.setTreesVisible(v); try { localStorage.setItem('chilldrive.sgn.treesVisible', v ? '1' : '0'); } catch { /* chế độ riêng tư */ }
        toast(v ? 'Đã hiện cây' : 'Đã ẩn toàn bộ cây'); } });
    }
    addHeading('Xe của chú');
    addToggle({ label: 'Tự giữ khoảng cách (tránh đâm xe trước)', get: () => trafficTune.avoid, set: (v) => { trafficTune.avoid = v; toast(v ? 'Đã bật tự giữ khoảng cách' : 'Đã tắt tự giữ khoảng cách — chú tự phanh, đâm là có cảnh sát tới', !v); } });
    addToggle({ label: 'Cảnh tai nạn (đâm xe / người: dừng xe, cảnh sát + cấp cứu tới)', get: () => trafficTune.incident, set: (v) => { trafficTune.incident = v;
      toast(v ? 'Đã bật cảnh tai nạn' : 'Đã tắt cảnh tai nạn — đâm xe chỉ khựng + rung rồi chạy tiếp'); } });
    addToggle({ label: 'Tự động dừng xe khi đèn đỏ', get: () => trafficTune.redStop, set: (v) => { trafficTune.redStop = v; toast(v ? 'Đã bật tự dừng đèn đỏ' : 'Đã tắt tự dừng đèn đỏ — chú tự phanh (Space)'); } });
    addToggle({ label: 'Chấm điểm buổi lái (bật lại = tính lại từ đầu)', get: () => trafficTune.score, set: (v) => {
      trafficTune.score = v; $('b-score').hidden = !v;
      if (v) resetSession(); else { $('score').hidden = true; say('Đã tắt chấm điểm'); }
    } });
    addToggle({ label: 'Thêm xe thật vào giao thông', get: () => trafficTune.models, set: (v) => { trafficTune.models = v; applyTrafficTune(); } });
    addHeading('Xe và người');
    addToggle({ label: 'Giao thông ngẫu nhiên (xe + người)' + (trafficTune.auto && trafficLevel ? ' — đang: ' + trafficLevel.name : ''), get: () => trafficTune.auto, set: (v) => {
      trafficTune.auto = v;
      if (trafficStartT <= 0) { if (v) pickTrafficLevel(); else { trafficLevel = null; applyTrafficTune(); say('Giao thông · chỉnh tay'); } }
      renderTune();
    } });
    // chỉnh tay mật độ / tốc độ / số người => tắt chế độ ngẫu nhiên
    const stopAuto = () => { if (trafficTune.auto || trafficLevel) { trafficTune.auto = 0; trafficLevel = null; trafficStartT = 0; } };
    const manual = (key) => (v) => { trafficTune[key] = v; stopAuto(); applyTrafficTune(); };

    addNumber({ label: 'Mật độ xe (×)', min: 0.05, max: 2.5, step: 0.05, get: () => trafficLevel?.density ?? trafficTune.density, set: manual('density') });
    kmhFields(stopAuto);
    addNumber({ label: 'Số người đi bộ', min: 0, max: 80, step: 1, get: () => trafficLevel?.walkers ?? trafficTune.walkers, set: manual('walkers') });
    addHeading('Đèn giao thông');
    addNumber({ label: 'Độ dài pha đèn (×)', min: 0.3, max: 3, step: 0.1, get: () => trafficTune.signal, set: (v) => { trafficTune.signal = v; applyTrafficTune(); } });
    return;
  }
  if (tuneKind === 'water') {                                        // map Đà Lạt: chỉnh nước hồ Xuân Hương (đổi tức thì, lưu chilldrive.dalat.water)
    tuneMode.hidden = true;
    $('tune-title').textContent = 'Nước hồ · Đà Lạt';
    const W = dalatScene.water, put = (k) => (v) => { dalatScene.setWater({ [k]: v }); ocean.setLakeLook(W); };
    addColor({ label: 'Màu nước', get: () => W.color, set: put('color') });
    addNumber({ label: 'Độ sáng nước (×)', min: 0.1, max: 5, step: 0.05, get: () => W.bright, set: put('bright') });
    addNumber({ label: 'Soi trời (×)', min: 0, max: 1, step: 0.01, get: () => W.sky, set: put('sky') });
    addNumber({ label: 'Nhuộm soi trời theo màu nước (%)', min: 0, max: 100, step: 5, get: () => Math.round(W.tint * 100), set: (v) => put('tint')(v / 100) });
    addNumber({ label: 'Ánh nắng trên mặt nước (×)', min: 0, max: 1, step: 0.01, get: () => W.sun, set: put('sun') });
    addNumber({ label: 'Phản chiếu cảnh (%)', min: 0, max: 60, step: 1, get: () => W.refl, set: put('refl') });
    addNumber({ label: 'Gợn sóng (×)', min: 0, max: 1.5, step: 0.05, get: () => W.wave, set: put('wave') });
    return;
  }
  if (tuneKind === 'trees') {                                        // map Đà Lạt: thử hiển thị cây (đổi tức thì, lưu chilldrive.dalat.trees)
    tuneMode.hidden = true;
    $('tune-title').textContent = 'Cây · Đà Lạt';
    const T = dalatScene.tune, put = (k) => (v) => dalatScene.setTune({ [k]: v });
    addToggle({ label: 'Hiện cây', get: () => T.on, set: put('on') });
    addToggle({ label: 'Cây xa', get: () => T.model3d, set: put('model3d'), names: ['Demo (nón)', 'Model 3D'] });
    addNumber({ label: 'Mật độ cây (%)', min: 0, max: 100, step: 5, get: () => T.density, set: put('density') });
    addNumber({ label: 'Cây model chi tiết trong (m)', min: 0, max: 200, step: 5, get: () => T.lodR, set: put('lodR') });
    addNumber({ label: 'Số cây chi tiết tối đa', min: 0, max: 1500, step: 10, get: () => T.maxHi, set: put('maxHi') });
    addNumber({ label: 'Vẽ cây xa tới (m)', min: 50, max: 2500, step: 50, get: () => T.far, set: put('far') });
    addHeading('Cây chi tiết ~11k tam giác/cây; cây xa: nón ~80, model 3D (ảnh chụp model) 4 tam giác/cây');
    return;
  }
  if (tuneKind === 'nature') {
    tuneMode.hidden = true;
    $('tune-title').textContent = 'Nature · cỏ cây';
    // mỗi loại cỏ một bộ riêng: map Cỏ lau => cỏ lau (`reeds`), map Đồi cỏ / Đại lộ => cỏ đồi (`meadow`)
    const mid = mapKind(MAPS[state.map].id), fld = mid === 'reed' ? reeds : mid === 'meadow' || mid === 'avenue' ? meadow : null;
    if (!fld) { addHeading('Map này chưa có tuỳ chỉnh cỏ (có ở map Đồi cỏ, Cỏ lau, Đại lộ)'); return; }
    const N = fld.tune, ap = () => fld.applyTune();
    addHeading(fld === reeds ? 'Cỏ lau (map Cỏ lau)' : 'Cỏ (map Đồi cỏ' + (mid === 'avenue' ? ', Đại lộ)' : ')'));
    addNumber({ label: 'Cỏ dày tới (m)', min: 15, max: 80, step: 1, get: () => N.near, set: (v) => { N.near = v; ap(); } });
    addNumber({ label: 'Hiển thị cỏ xa tới (m)', min: 60, max: 320, step: 5, get: () => N.far, set: (v) => { N.far = v; ap(); } });
    addNumber({ label: 'Độ dày cỏ gần (×)', min: 0.2, max: 2, step: 0.05, get: () => N.density, set: (v) => { N.density = v; ap(); } });
    addNumber({ label: 'Độ dày cỏ xa (×)', min: 0, max: 2, step: 0.05, get: () => N.farDensity, set: (v) => { N.farDensity = v; ap(); } });
    addNumber({ label: 'Độ cao cỏ (×)', min: 0.3, max: 2.5, step: 0.05, get: () => N.height, set: (v) => { N.height = v; ap(); } });
    addNumber({ label: 'Độ đục lá (%)', min: 20, max: 100, step: 1, get: () => Math.round(N.opacity * 100), set: (v) => { N.opacity = v / 100; ap(); } });
    addNumber({ label: 'Trong suốt viền lá (%)', min: 0, max: 100, step: 1, get: () => Math.round(N.edge * 100), set: (v) => { N.edge = v / 100; ap(); } });
    return;
  }
  if (tuneKind === 'animals') {
    tuneMode.hidden = true;
    $('tune-title').textContent = 'Animal · động vật';
    const F = fireflies.tune, C = cows.tune;
    const ff = (v) => { fireflies.ground.clear(); return v; };
    addHeading('Đom đóm (ban đêm, mọi map trừ Phố / Đại lộ)');
    addNumber({ label: 'Số lượng (× mỗi chỗ)', min: 0, max: 5, step: 0.1, get: () => F.amount, set: (v) => { F.amount = v; } });
    addNumber({ label: 'Độ phủ dọc đường (%)', min: 0, max: 100, step: 1, get: () => Math.round(F.cover * 100), set: (v) => { F.cover = v / 100; } });
    addNumber({ label: 'Cách tim đường (m)', min: 2, max: 40, step: 0.5, get: () => F.near, set: (v) => { F.near = ff(v); } });
    addNumber({ label: 'Bề rộng vùng bay (m)', min: 1, max: 60, step: 0.5, get: () => F.spread, set: (v) => { F.spread = ff(v); } });
    addNumber({ label: 'Độ cao thấp nhất (m)', min: 0, max: 6, step: 0.1, get: () => F.height, set: (v) => { F.height = v; } });
    addNumber({ label: 'Bay cao thêm (m)', min: 0, max: 10, step: 0.1, get: () => F.rise, set: (v) => { F.rise = v; } });
    addNumber({ label: 'Độ sáng (×)', min: 0, max: 3, step: 0.05, get: () => F.glow, set: (v) => { F.glow = v; } });
    addHeading('Bò (map Đồi cỏ)');
    addNumber({ label: 'Số bò mỗi đàn', min: 0, max: 16, step: 1, get: () => C.count, set: (v) => { C.count = v; cows.retune(); } });
    addNumber({ label: 'Cách tim đường (m)', min: 16, max: 90, step: 1, get: () => C.lat, set: (v) => { C.lat = v; cows.retune(); } });
    addNumber({ label: 'Khoảng cách giữa các đàn (m)', min: 400, max: 6000, step: 50, get: () => C.gap, set: (v) => { C.gap = v; cows.retune(); } });
    addChoice({ label: 'Bên đường', options: ['Hai bên xen kẽ', 'Bên trái', 'Bên phải'], get: () => (C.side < 0 ? 1 : C.side > 0 ? 2 : 0), set: (v) => { C.side = [0, -1, 1][v]; cows.retune(); } });
    addToggle({ label: 'Hàng rào gỗ', names: ['Ẩn', 'Hiện'], get: () => C.fence, set: (v) => { C.fence = v; cows.retune(); } });
    return;
  }
  if (tuneKind === 'park') {
    tuneMode.hidden = true;
    $('tune-title').textContent = 'Chế độ dừng xe (P)';
    const T = stop.tune;
    addNumber({ label: 'Thời gian dừng xe (s)', min: 0.5, max: 10, step: 0.1, get: () => T.stopTime, set: (v) => { T.stopTime = v; } });
    addNumber({ label: 'Độ zoom ra (m lùi xa)', min: 0, max: 40, step: 0.5, get: () => T.zoom, set: (v) => { T.zoom = v; } });
    addNumber({ label: 'Thời gian zoom ra (s)', min: 0.5, max: 20, step: 0.5, get: () => T.zoomTime, set: (v) => { T.zoomTime = v; } });
    addToggle({ label: 'Camera quay quanh', names: ['Nhân vật', 'Xe'], get: () => T.orbitCar, set: (v) => { T.orbitCar = v; } });
    return;
  }
  if (tuneKind === 'lighting') {
    tuneMode.hidden = true;
    $('tune-title').textContent = 'Lighting';
    const H = cars.headlights.tune, Lp = scenery.lampTune;
    addHeading('Nắng');
    addToggle({ label: 'Bóng nắng xa (nhà, cây, núi đổ bóng xa ±320 m — nặng hơn)', get: () => !!env.farShadow, set: (v) => {
      farShadowSaved = v; env.setFarShadow(v);
      try { localStorage.setItem('chilldrive.farShadow', v ? '1' : '0'); } catch { /* chế độ riêng tư */ }
      toast(v ? 'Đã bật bóng nắng xa' : 'Đã tắt bóng nắng xa — nhẹ máy hơn'); } });
    addHeading('Đèn pha xe chú');
    [['intensity','Cường độ',0,300,1],['distance','Tầm chiếu (m)',10,250,1],['angle','Góc mở (rad)',.1,1.55,.01],['penumbra','Độ mềm viền',0,1,.01],
      ['glowOpacity','Độ sáng quầng',0,2,.01],['glowSize','Kích thước quầng',.2,8,.05]]
      .forEach(([key,label,min,max,step]) => addNumber({ label,min,max,step,get:()=>H[key],set:(v)=>{ H[key]=v; } }));
    addColor({ label: 'Màu đèn pha', get: () => H.color, set: (v) => { H.color = v; } });
    addHeading('Đèn đường');
    [['intensity','Cường độ',0,500,1],['distance','Tầm phủ (m)',10,250,1],['angle','Góc mở (rad)',.1,1.55,.01],['glowOpacity','Độ sáng quầng',0,2,.01],['glowSize','Kích thước quầng',1,24,.1],
      ['range','Phạm vi đèn sáng thật quanh camera (m)',20,800,10], ...(onDalat() ? [['fakeK','Ánh sáng giả quanh cột (Đà Lạt, 0 = tắt)',0,12,0.1], ['fakeR','Bán kính ánh sáng giả (m)',5,40,1]] : []), [onDalat() ? 'countDalat' : 'count', 'Số đèn sáng thật' + (onDalat() ? ' (Đà Lạt)' : '') + ' — nhiều thì nặng', 0, 24, 1]]
      .forEach(([key,label,min,max,step]) => addNumber({ label,min,max,step,get:()=>Lp[key] ?? STREETLIGHT_DEFAULTS[key],set:(v)=>{ Lp[key]=v; } }));
    addColor({ label: 'Màu đèn đường', get: () => Lp.color, set: (v) => { Lp.color = v; } });
    addHeading('Map Phố');
    const L = [['signal','Đèn giao thông: độ sáng (×)',0,3,.05],['signalSize','Đèn giao thông: cỡ quầng (×)',.3,3,.05],['windows','Cửa sổ + cửa hàng ban đêm (×)',0,3,.05],
      ['signs','Biển hiệu (×)',0,3,.05],['npc','Đèn xe khác (×)',0,3,.05],['emergency','Đèn cảnh sát / cấp cứu (×)',0,3,.05]];
    L.forEach(([key,label,min,max,step]) => addNumber({ label,min,max,step,get:()=>lightTune[key],set:(v)=>{ lightTune[key]=v; applyLightTune(); } }));
    return;
  }
  if (tuneKind === 'carLight' || tuneKind === 'streetLight') {
    tuneMode.hidden = true;
    const carLight = tuneKind === 'carLight', values = carLight ? cars.headlights.tune : scenery.lampTune;
    $('tune-title').textContent = carLight ? 'Đèn xe người chơi' : 'Đèn đường';
    addHeading(carLight ? 'Chùm sáng và quầng đèn' : 'Ánh sáng phủ mặt đường');
    const specs = carLight ? [
      ['intensity','Cường độ',0,300,1],['distance','Tầm chiếu (m)',10,250,1],['angle','Góc mở (rad)',.1,1.55,.01],
      ['penumbra','Độ mềm viền',0,1,.01],['decay','Suy giảm',0,2,.01],['glowOpacity','Độ sáng quầng',0,2,.01],['glowSize','Kích thước quầng',.2,8,.05],
    ] : [
      ['intensity','Cường độ',0,500,1],['distance','Tầm phủ (m)',10,250,1],['angle','Góc mở (rad)',.1,1.55,.01],
      ['penumbra','Độ mềm viền',0,1,.01],['decay','Suy giảm',0,2,.01],['glowOpacity','Độ sáng quầng',0,2,.01],['glowSize','Kích thước quầng',1,24,.1],
    ];
    specs.map(([key,label,min,max,step]) => ({ label,min,max,step,get:()=>values[key],set:(v)=>{ values[key]=v; } })).forEach(addNumber);
    addColor({ label: 'Màu ánh sáng', get: () => values.color, set: (v) => { values.color = v; } });
    if (carLight) addColor({ label: 'Màu quầng', get: () => values.glowColor, set: (v) => { values.glowColor = v; } });
    return;
  }
  tuneMode.hidden = false;
  const list = tuneKind === 'camera' ? CAMERAS : tuneKind === 'weather' ? WEATHERS : TIMES;
  const selected = state[tuneKind === 'camera' ? 'cam' : tuneKind];
  list.forEach((item, i) => { const o = document.createElement('option'); o.value = i; o.textContent = item.name; o.selected = i === selected; tuneMode.append(o); });
  $('tune-title').textContent = tuneKind === 'camera' ? 'Camera · ' + CAMERAS[state.cam].name : tuneKind === 'weather' ? 'Thời tiết · ' + WEATHERS[state.weather].name : 'Thời gian · ' + TIMES[state.time].name;
  if (tuneKind === 'camera') {
    const values = rig.tune[CAMERAS[state.cam].id];
    addHeading('Vị trí và chuyển động'); cameraSpecs().forEach(addNumber);
    addHeading('Ống kính');
    addNumber({ label: 'Tiêu cự (mm)', min: FOCAL_MIN, max: FOCAL_MAX, step: 1, get: () => values.focal, set: (v) => { values.focal = rig.focal = v; syncLens(); refreshUI(); } });
    addChoice({ label: 'Khẩu độ', options: FSTOPS.map((v) => 'f/' + v), get: () => Math.max(0, FSTOPS.indexOf(values.aperture)), set: (v) => { values.aperture = rig.aperture = FSTOPS[v]; state.fstop = v; syncLens(); refreshUI(); } });
  } else if (tuneKind === 'weather') {
    const id = WEATHERS[state.weather].id === 'auto' ? env.weather : WEATHERS[state.weather].id, profile = env.weatherProfiles[id];
    addHeading('Preset ' + WEATHERS[state.weather].name);
    WEATHER_FIELDS.map(([key,label,min,max,step]) => ({ label,min,max,step,get:()=>profile[key],set:(v)=>{ profile[key]=v; env.w[key]=v; } })).forEach(addNumber);
    addColor({ label: 'Màu khí quyển', get: () => profile.tint, set: (v) => { profile.tint = v; env.tint.set(v); env.envKey = ''; } });
    const MW = mistGroup().w[id] || mistWeather();
    addHeading('Sương sát đất · ' + WEATHERS.find((w) => w.id === id)?.name + (isDriveMap(state.map) ? ' (Drive)' : ' (Chill)'));
    addNumber({ label: 'Độ phủ sương (%)', min: 0, max: 100, step: 1, get: () => Math.round(MW.cover * 100), set: (v) => { MW.cover = v / 100; } });
    addNumber({ label: 'Độ dày sương (%)', min: 0, max: 100, step: 1, get: () => Math.round(MW.dens * 100), set: (v) => { MW.dens = v / 100; } });
    addHeading('Ánh sáng chung'); environmentSpecs().forEach(addNumber);
  } else {
    addHeading('Chu kỳ ngày đêm');
    addNumber({ label: 'Giờ hiện tại', min: 0, max: 23.99, step: .05, get: () => env.hour, set: (v) => { env.hour = v; env.tween = null; env.envKey = ''; } });
    addNumber({ label: 'Tốc độ tự chạy', min: 0, max: 1, step: .005, get: () => env.tune.autoSpeed, set: (v) => { env.tune.autoSpeed = v; } });
    addNumber({ label: 'Hướng mặt trời', min: -3.142, max: 3.142, step: .01, get: () => env.tune.sunAzimuth, set: (v) => { env.tune.sunAzimuth = v; env.envKey = ''; } });
    addNumber({ label: 'Hướng mặt trăng', min: -3.142, max: 3.142, step: .01, get: () => env.tune.moonAzimuth, set: (v) => { env.tune.moonAzimuth = v; env.envKey = ''; } });
    const MT = mistGroup().t;
    addHeading('Sương theo giờ (× độ dày)' + (isDriveMap(state.map) ? ' · Drive' : ' · Chill'));
    for (const [k, label] of [['sunrise', 'Bình minh'], ['noon', 'Ban ngày'], ['sunset', 'Hoàng hôn'], ['night', 'Ban đêm']])
      addNumber({ label: 'Sương ' + label, min: 0, max: 3, step: 0.05, get: () => MT[k], set: (v) => { MT[k] = v; } });
    addHeading('Ánh sáng chung'); environmentSpecs().forEach(addNumber);
  }
};
const openTune = (kind) => {
  tuneKind = kind; $('mistpanel').hidden = $('lenspanel').hidden = true; tunePanel.hidden = false; renderTune(); refreshUI();
};
tuneMode.onchange = () => {
  const i = Number(tuneMode.value);
  if (tuneKind === 'camera') { state.cam = i; rig.setMode(i); onCamChange(); }
  else if (tuneKind === 'weather') setWeatherIdx(i, true);
  else { state.time = i; env.setTime(TIMES[i].hour); }
  refreshUI(); renderTune();
};
$('tune-close').onclick = closeTune;
$('tune-reset').onclick = () => {
  // về số gốc trong code rồi phủ bộ mặc định của chú (`DEF`, theo nhóm Chill / Drive)
  const D = defSet(), g = isDriveMap(state.map) ? 'drive' : 'chill';
  if (tuneKind === 'trees') dalatScene.resetTune();
  else if (tuneKind === 'water') { dalatScene.resetWater(); ocean.setLakeLook(dalatScene.water); }
  else if (tuneKind === 'camera') { const id = CAMERAS[state.cam].id; rig.resetTune(id); Object.assign(rig.tune[id], D.camera?.[id] || {}); rig.setMode(state.cam); onCamChange(); }
  else if (tuneKind === 'weather') {
    const w = WEATHERS[state.weather].id === 'auto' ? env.weather : WEATHERS[state.weather].id; env.resetWeather(w); Object.assign(env.weatherProfiles[w] || {}, D.weather?.[w] || {});
    env.resetTune(); Object.assign(env.tune, D.environment || {}); env.snapWeather(w);
    const d = MIST_DEFAULTS[g].w[w]; if (d) Object.assign(mistTune[g].w[w], { cover: d[0], dens: d[1] }); loadMist(g, DEF.tuning.mist?.[g], w);
  }
  else if (tuneKind === 'time') { env.resetTune(); Object.assign(env.tune, D.environment || {}); env.setTime(TIMES[state.time].hour); Object.assign(mistTune[g].t, MIST_DEFAULTS[g].t, DEF.tuning.mist?.[g]?.t || {}); }
  else if (tuneKind === 'carLight') Object.assign(cars.headlights.tune, HEADLIGHT_DEFAULTS, D.carLights || {});
  else if (tuneKind === 'traffic') { Object.assign(trafficTune, trafficDefaults()); loadTraffic(DEF.tuning.traffic); $('b-score').hidden = !cityTraffic.visible || !trafficTune.score; if (trafficTune.auto && trafficStartT <= 0 && !trafficLevel) pickTrafficLevel(false); else { if (!trafficTune.auto) trafficLevel = null; applyTrafficTune(); } }
  else if (tuneKind === 'park') Object.assign(stop.tune, PARK_DEFAULTS, D.park || {});
  else if (tuneKind === 'animals') { Object.assign(fireflies.tune, FIREFLY_DEFAULTS, D.fireflies || {}); Object.assign(cows.tune, COW_DEFAULTS, D.cows || {}); retuneAnimals(); }
  else if (tuneKind === 'nature') { const reed = MAPS[state.map].id === 'reed', f = reed ? reeds : meadow; Object.assign(f.tune, f.defaults, (reed ? D.natureReed : D.nature) || {}); f.applyTune(); }
  else if (tuneKind === 'lighting') { Object.assign(cars.headlights.tune, HEADLIGHT_DEFAULTS, D.carLights || {}); Object.assign(scenery.lampTune, STREETLIGHT_DEFAULTS, D.streetLights || {}); Object.assign(lightTune, LIGHT_DEFAULTS, D.lighting || {}); applyLightTune(); }
  else Object.assign(scenery.lampTune, STREETLIGHT_DEFAULTS, D.streetLights || {});
  saveTuning(); refreshUI(); renderTune();
};
el.car.onclick = nextCar;
el.map.onclick = nextMap;
el.cam.onclick = () => openTune('camera');
el.weather.onclick = () => openTune('weather');
el.time.onclick = () => openTune('time');
$('b-traffic').onclick = () => (tuneKind === 'traffic' ? closeTune() : openTune('traffic'));
$('b-lighting').onclick = () => (tuneKind === 'lighting' ? closeTune() : openTune('lighting'));
$('b-animals').onclick = () => (tuneKind === 'animals' ? closeTune() : openTune('animals'));
$('b-nature').onclick = () => (tuneKind === 'nature' ? closeTune() : openTune('nature'));
$('b-trees').onclick = () => (tuneKind === 'trees' ? closeTune() : openTune('trees'));
$('b-water').onclick = () => (tuneKind === 'water' ? closeTune() : openTune('water'));
$('b-mode').onclick = () => { if (state.started) setGameMode(state.mode === 'drive' ? 'chill' : 'drive'); };
$('b-park').onclick = () => (tuneKind === 'park' ? closeTune() : openTune('park'));
el.music.onclick = nextMusic;
// người đi bộ dùng model 3D (mọi map có người; mặc định tắt, lưu trên máy)
try { cityPeople.detailed = localStorage.getItem('chilldrive.people3d') === '1'; } catch { /* không có localStorage */ }
$('b-people').onclick = () => {
  cityPeople.detailed = !cityPeople.detailed;
  try { localStorage.setItem('chilldrive.people3d', cityPeople.detailed ? '1' : '0'); } catch { /* bỏ qua */ }
  say('Người đi bộ · ' + (cityPeople.detailed ? 'model 3D' : 'người nhẹ'));
  refreshUI();
};
// mở cột Setting (góc phải): bản đồ tròn trượt sang trái cạnh cột (điện thoại: ẩn đi) để không che nút
const toggleSettings = () => {
  const bar = $('bar'); bar.hidden = !bar.hidden;
  document.body.classList.toggle('setopen', !bar.hidden);
  if (!bar.hidden) document.body.style.setProperty('--barw', bar.offsetWidth + 'px');
  refreshUI();
};
for (const [id, fn] of [['q-speed', () => toggleFast()], ['q-pause', () => toggleStop()], ['q-car', () => nextCar()], ['q-cam', () => nextCam()],
  ['q-driver', () => nextCharacter()], ['q-map', () => nextMap()], ['q-weather', () => nextWeather()], ['q-time', () => nextTime()], ['q-setting', toggleSettings]]) {
  $(id).onclick = (e) => { fn(); e.currentTarget.blur(); };
}
$('b-info').onclick = () => { const c = $('credits'); c.hidden = !c.hidden; };
// nút Setting: bật / tắt chế độ Stop + camera admin (phím `)
$('b-admin').onclick = () => setAdmin(!admin.active);

// ---------- input ----------
window.addEventListener('keydown', (e) => {
  if (showroom.active) return;                     // showroom Race!: phím do màn hình chờ xử lý (Enter / Esc)
  // chế độ Stop / Admin: chỉ phím admin (adminCam.js tự nghe 1–4, WASD, E/Q/C…), giữ O chụp ảnh, H ẩn HUD, ` thoát
  if (admin.active) {
    if (e.repeat) return;
    if (e.code === 'KeyO') shotPending = true;
    else if (e.code === 'KeyH') document.body.classList.toggle('hidehud');
    else if (e.code === 'KeyR') nextWeather();                // Stop vẫn đổi thời tiết / giờ thủ công để kiểm tra
    else if (e.code === 'KeyT') nextTime();
    else if (e.code === 'Backquote') setAdmin(false);
    else if (e.code === 'Space') e.preventDefault();
    return;
  }
  if (e.code === 'Backquote') { if (!e.repeat) setAdmin(true); return; }   // ` bật / tắt Stop
  if (e.repeat) { keys.add(e.code); return; }
  keys.add(e.code);
  if (e.code === 'Space' || e.code === 'KeyB') brakeTap();
  else if (drive.halt && (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'KeyF')) { drive.halt = false; say('Chạy tiếp'); }
  switch (e.code) {
    case 'KeyC': nextCar(); break;               // lối tắt: Car (C), Camera (Q), Driver (X), Map (M), Weather (R), Time (T), Setting (K)
    case 'KeyV': nextCar(); break;
    case 'KeyQ': nextCam(); break;
    case 'KeyX': nextCharacter(); break;
    case 'KeyM': nextMap(); break;
    case 'KeyN': nextMusic(); break;
    case 'KeyH': document.body.classList.toggle('hidehud'); break;
    case 'KeyT': nextTime(); break;
    case 'KeyR': nextWeather(); break;
    case 'KeyF': toggleFast(); break;
    case 'KeyG': toggleMistPanel(); break;
    case 'KeyL': toggleLensPanel(); break;
    case 'KeyP': toggleStop(); break;
    case 'KeyU': toggleFS(); break;
    case 'KeyK': toggleSettings(); break;
    case 'KeyO': shotPending = true; break;
    case 'Digit1': if (diag.on) diag.toggle(); break;   // map Đà Lạt: ẩn / hiện bảng chẩn đoán
    case 'KeyY': toggleRecord(e); break;
    case 'KeyJ': if (cityTraffic.visible && trafficTune.score) toggleScore(); break;
    case 'Escape': if (!$('score').hidden) toggleScore(false); break;
    case 'Comma': setBlinker(-1); break;         // xi nhan trái (<) / phải (>)
    case 'Period': setBlinker(1); break;
  }
  if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault();
});
window.addEventListener('keyup', (e) => keys.delete(e.code));
window.addEventListener('blur', () => keys.clear());

// bấm giữ + rê chuột / vuốt màn hình: nhìn xung quanh 360° (thả ra camera tự về vị trí cũ)
// lăn chuột / chụm-mở 2 ngón / phím + -: zoom
const touches = new Map();                         // pointerId -> {x, y}
const clickStart = new Map();
// zoom: cảnh dừng xe đang toàn cảnh thì zoom 16–35 mm + khoảng cách 1–30 m, còn lại zoom camera chạy xe
function zoomBy(f) { if (!(stop.active && stop.zoomBy(f))) rig.zoomBy(f); }
let pinchDist = 0;
const spread = () => { const [a, b] = [...touches.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
canvas.addEventListener('pointerdown', (e) => {
  if (admin.active) return;                        // Stop: chuột / chạm do camera admin xử lý
  touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
  clickStart.set(e.pointerId, { x: e.clientX, y: e.clientY, moved: false });
  canvas.setPointerCapture(e.pointerId);
  if (touches.size === 1) {
    pointer.active = true; pointer.id = e.pointerId; pointer.x = e.clientX; pointer.y = e.clientY;
    rig.look.hold = true;
  } else if (touches.size === 2) {
    pointer.active = false;                        // 2 ngón: chuyển sang zoom
    pinchDist = spread();
  }
});
canvas.addEventListener('pointermove', (e) => {
  if (admin.active) return;
  const t = touches.get(e.pointerId);
  if (!t) return;
  t.x = e.clientX; t.y = e.clientY;
  const start = clickStart.get(e.pointerId); if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > 8) start.moved = true;
  if (touches.size === 2) {
    const d = spread();
    if (pinchDist > 0 && d > 0) zoomBy(pinchDist / d);
    pinchDist = d;
  } else if (pointer.active && e.pointerId === pointer.id) {
    const dx = e.clientX - pointer.x, dy = e.clientY - pointer.y;
    rig.lookBy(dx * 4.7 / window.innerWidth, dy * 2.2 / window.innerHeight);
    if (stop.active && Math.abs(dx) + Math.abs(dy) > 0) stop.noteCameraInput();
    pointer.x = e.clientX; pointer.y = e.clientY;
  }
});
const endPointer = (e) => {
  if (admin.active) return;
  const start = clickStart.get(e.pointerId);
  if (start && !start.moved && e.type === 'pointerup') {
    cars.root.updateWorldMatrix(true, true);
    const rect = canvas.getBoundingClientRect(), p = new THREE.Vector3();
    const hitCarLight = cars.headGlow.some((glow) => {
      if (!glow.visible) return false;
      glow.getWorldPosition(p).project(camera);
      const x = rect.left + (p.x + 1) * rect.width * .5, y = rect.top + (1 - p.y) * rect.height * .5;
      return p.z >= -1 && p.z <= 1 && Math.hypot(e.clientX - x, e.clientY - y) <= 56;
    });
    if (hitCarLight) openTune('carLight');
    else if (stop.active && scenery.hitLamp(camera, e.clientX, e.clientY, rect)) openTune('streetLight');
  }
  clickStart.delete(e.pointerId);
  touches.delete(e.pointerId);
  if (touches.size < 2) pinchDist = 0;
  if (touches.size === 0) { pointer.active = false; rig.look.hold = false; }
};
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (admin.active) return;                        // Stop: con lăn do camera admin xử lý
  const dy = e.deltaY * (e.deltaMode === 1 ? 33 : e.deltaMode === 2 ? 400 : 1);
  zoomBy(Math.exp(clamp(dy, -200, 200) * 0.0012));
}, { passive: false });

// ẩn giao diện khi không thao tác
let idleTimer = 0, wakeFrom = Infinity;
// giao diện luôn ẩn khi vào game; chỉ hiện (mờ dần lên) khi rê chuột / chạm / kéo xoay màn hình, tự ẩn lại sau 5 s.
// Phím tắt không làm hiện giao diện. Cú bấm Start không tính (chỉ nhận sau khi vào game 1.2 s)
const wake = () => {
  if (performance.now() < wakeFrom) return;
  document.body.classList.remove('idle');
  clearTimeout(idleTimer);
  const hide = () => { if (uiHeld.size) idleTimer = setTimeout(hide, 500); else document.body.classList.add('idle'); };   // đang giữ nút (◀ ▶ Space) thì chưa ẩn
  idleTimer = setTimeout(hide, 2000);
};
const uiHeld = new Set();
// chỉ hiện khi CHẠM / BẤM vào màn hình (nhấc tay ngay, không kéo) hoặc rê chuột không bấm; giữ kéo để xoay camera (pan) thì không hiện.
// Chạm vào chính các nút giao diện (đang hiện) thì giữ cho giao diện hiện tiếp.
const tapStart = new Map();
window.addEventListener('pointerdown', (e) => {
  tapStart.set(e.pointerId, { x: e.clientX, y: e.clientY, t: performance.now() });
  if (e.target !== canvas) uiHeld.add(e.pointerId);
  if (e.target !== canvas && !document.body.classList.contains('idle')) wake();
}, { passive: true });
window.addEventListener('pointermove', (e) => {
  const t = tapStart.get(e.pointerId);
  if (t && Math.hypot(e.clientX - t.x, e.clientY - t.y) > 10) t.moved = true;
  if (e.pointerType === 'mouse' && e.buttons === 0) wake();
}, { passive: true });
window.addEventListener('pointerup', (e) => {
  const t = tapStart.get(e.pointerId); tapStart.delete(e.pointerId); uiHeld.delete(e.pointerId);
  if (t && !t.moved && performance.now() - t.t < 450) wake();
}, { passive: true });
window.addEventListener('pointercancel', (e) => { tapStart.delete(e.pointerId); uiHeld.delete(e.pointerId); }, { passive: true });
// bấm nút xong thì bỏ focus (không thì phím Space bấm lại nút đó thay vì phanh)
window.addEventListener('pointerup', () => { if (document.activeElement?.tagName === 'BUTTON') document.activeElement.blur(); });
document.body.classList.add('idle');

// ---------- vòng lặp ----------
const _right = new THREE.Vector3();
let last = performance.now();
let simNow = last;                 // thời gian shader / hiệu ứng; đứng yên khi Stop
let uiTimer = 0;
let cineAmt = 0;
const roadPt = {};

// xoá phông theo ống kính thật (cảm biến full-frame 36 mm): lấy nét vào xe (camera trong xe: nét ở xa phía trước)
// vòng nhoè trên cảm biến = f² / (N·(F − f)) · |z − F| / z  (mm)  -> quy ra điểm ảnh theo cạnh dài khung hình
// BOKEH: phóng đại vòng nhoè kiểu ống kính điện ảnh (ở 28 mm f/2 vòng nhoè thật chỉ 1–2 điểm ảnh, khó thấy)
const BOKEH = 3.5;
const dof = { amt: 0, range: 0, samples: 0, near: 0.1, far: 1000, focus: 10, cocK: 0, maxCoc: 24 };
const _focusP = new THREE.Vector3();
function dofParams(dt) {
  const inCar = CAMERAS[state.cam].id === 'cockpit';
  _focusP.copy(drive.pos).y += 0.6;
  if (stop.active) _focusP.copy(stop.cam.focus);
  const target = inCar && !stop.active ? 25 : Math.max(0.5, camera.position.distanceTo(_focusP));   // trong xe: nét 0–50 m (tâm 25 m ± 25 m)
  dof.focus += (target - dof.focus) * (dof.amt > 0.01 ? 1 - Math.exp(-dt * 6) : 1);
  const f = rig.focalEff, N = rig.apertureS, F = dof.focus * 1000;
  dof.cocK = ((f * f) / (N * Math.max(F - f, 1))) * (post.longSide / 36) * BOKEH;
  dof.maxCoc = Math.max(6, post.longSide * 0.0125);
  // cả chiếc xe nằm trong vùng nét: nửa bề dày xe theo hướng nhìn
  if (stop.active) dof.range = stop.cam.range;
  else if (inCar) dof.range = 25;
  else {
    const dx = camera.position.x - _focusP.x, dz = camera.position.z - _focusP.z, h = Math.hypot(dx, dz) || 1;
    const s = Math.sin(drive.yaw), c = Math.cos(drive.yaw);
    dof.range = Math.abs((-s * dx - c * dz) / h) * cars.dim.length * 0.5 + Math.abs((c * dx - s * dz) / h) * cars.dim.width * 0.5 + 0.3;
  }
  dof.near = camera.near; dof.far = camera.far;
  dof.amt = admin.active ? 0 : cineAmt;             // Stop: không xoá phông để quan sát / chụp ảnh rõ
  dof.samples = QUALITY[state.quality].dof;
  return dof;
}

// cảnh dừng xe: camera bay vòng quanh điểm nhìn theo góc người dùng rê chuột (yaw 360°, pitch), không chui xuống đất
const _sl = new THREE.Vector3();
function stopLook(pos, look) {
  const lk = rig.look;
  const v = _sl.copy(pos).sub(look);
  if (Math.abs(lk.yaw) > 1e-4 || Math.abs(lk.pitch) > 1e-4) {
    const c = Math.cos(lk.yaw), s = Math.sin(lk.yaw);
    v.set(v.x * c + v.z * s, v.y, -v.x * s + v.z * c);
    const h = Math.hypot(v.x, v.z), R = v.length();
    const el = clamp(Math.atan2(v.y, h) + lk.pitch, 0.03, 1.35);
    const f = (R * Math.cos(el)) / Math.max(h, 1e-3);
    v.set(v.x * f, R * Math.sin(el), v.z * f);
  }
  camera.position.copy(look).add(v);
  const g = Math.max(terrain.heightAt(camera.position.x, camera.position.z) + 0.25, ocean.group.visible ? ocean.level + 1.2 : -Infinity);
  if (camera.position.y < g) camera.position.y = g;
}

// camera trong xe: góc chúc xuống vừa đủ để mép dưới vành vô lăng chạm mép dưới khung hình (trong dải letterbox),
// nhưng không chúc quá mức làm mất mép trên gương chiếu hậu (ưu tiên thấy trọn gương)
const _ck = new THREE.Vector3();
function cockpitPitch() {
  const sw = cars.current?.steer;
  if (!sw || !rig.eyeAt || !rig.eyeAt(_ck)) return 0.2;
  cars.tilt.worldToLocal(_ck);
  const [, ny, nz] = sw.n;
  const uy = 1 - ny * ny, uz = -ny * nz, ul = Math.hypot(uy, uz) || 1;    // hướng "lên" trong mặt phẳng vô lăng
  // Chừa phần dưới vành để thấy hai tay và cẳng tay; vẫn ưu tiên không cắt gương.
  const r = sw.r * 0.65;
  const by = sw.c[1] - (uy / ul) * r, bz = sw.c[2] - (uz / ul) * r;
  const down = Math.atan2(_ck.y - by, _ck.z - bz);
  const half = Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * (1 - 2 * barFrac * cineAmt));
  const mp = mirror.group.position;                                     // mép trên gương (hệ xe)
  const up = Math.atan2(mp.y + mirror.size[1] / 2 + 0.012 - _ck.y, _ck.z - mp.z);
  const lo = down - half + 0.01, hi = half - up - 0.015;
  return clamp(lo <= hi ? lo : hi, -0.1, 0.6);
}

// showroom Race!: xe + người lái cùng đứng trên bục; người đứng cạnh cửa tài xế hoặc ngồi trong xe (tay trên vô lăng)
let raceStand = true;
function showroomFrame(dt) {
  showroom.update(dt);
  cars.cabinLevel = 0; cars.cabin.intensity = 0;
  if (person.ready) {
    person.root.visible = true;
    person.head.scale.setScalar(1);
    if (raceStand && !characterLoading) {
      if (person.root.parent !== showroom.spin) showroom.spin.add(person.root);
      const d = cars.dim;
      person.root.position.set(-d.width / 2 - 0.75, showroom.drops.person.y, -d.length * 0.06);
      person.root.rotation.set(0, -2.15, 0);            // quay ra ngoài, hơi về phía đầu xe
      person.tilt.rotation.set(0, 0, 0);
      person.recline(0);
      person.footShade.value = 0;
      person.play('Idle_Loop', person.current ? 0.3 : 0);
      person.update(dt);
    } else {
      if (person.root.parent !== cars.tilt) cars.tilt.add(person.root);
      if (person.current !== person.actions.Driving_Loop) stop.sit();
      person.update(dt);
      person.footShade.value = 1;
      showroom.scene.updateMatrixWorld();
      seatPose(cars.dim.seat);
      if (cars.current?.steer) gripWheel(cars.current.steer);
    }
  }
  showroom.render(simNow / 1000);
}

// hai tay đặt lên vành vô lăng (animation lái gốc dùng vô lăng to/thấp hơn => tay lơ lửng ngoài vành)
const _wc = new THREE.Vector3(), _wn = new THREE.Vector3(), _wr = new THREE.Vector3(), _wu = new THREE.Vector3(), _wt = new THREE.Vector3(), _wp = new THREE.Vector3();
const GRIP = 0.08;            // góc cầm (rad dưới phương ngang): gần 3 giờ & 9 giờ
// tư thế ngồi trên ghế đã đo (config `seat`): ngả lưng, chân duỗi tới sàn (gọi trước gripWheel: ngả lưng làm dời vai)
const _ft = new THREE.Vector3(), _fp = new THREE.Vector3(), _fd = new THREE.Vector3();
function seatPose(seat) {
  if (!seat || person.ownClips) return;                         // clip riêng (Rig Tool): giữ nguyên dáng ngồi của clip
  person.recline(seat.recline || 0);
  const m = cars.tilt.matrixWorld, [fx, fy, fz] = seat.foot, cx = seat.hip[0];
  for (const [side, x] of [['l', fx], ['r', 2 * cx - fx]]) {
    _ft.set(x, fy, fz).applyMatrix4(m);
    _fp.set(0, 1, -0.6).transformDirection(m);                    // đầu gối hướng lên, hơi ra trước
    _fd.set(0, 0.45, -1).transformDirection(m);                   // mũi giày đặt lên bàn đạp (chếch lên ~24°)
    person.reachLeg(side, _ft, _fp, _fd);
  }
}

function gripWheel(sw) {
  cars.root.updateMatrixWorld();
  const m = cars.tilt.matrixWorld;
  _wc.fromArray(sw.c).applyMatrix4(m);
  _wn.fromArray(sw.n).transformDirection(m);
  _wr.set(1, 0, 0).transformDirection(m);
  _wr.addScaledVector(_wn, -_wr.dot(_wn)).normalize();
  _wu.crossVectors(_wn, _wr);
  if (person.ownClips) {                                        // clip riêng: tay đúng như clip, chỉ xoay theo vô lăng khi đánh lái
    for (const side of ['r', 'l']) person.steerHold(side, _wc, _wn, cars.steerAngle || 0);
    return;
  }
  for (const [side, ang] of [['r', -GRIP], ['l', Math.PI + GRIP]]) {
    const a = ang + (cars.steerAngle || 0), cx = Math.cos(a), cy = Math.sin(a);
    // Offset theo xe: căn lòng bàn tay với vành thật, giữ tư thế ngón của animation.
    const radius = sw.r + (sw.grip?.radial ?? 0.02), depth = sw.grip?.depth ?? 0.065;
    _wt.copy(_wc).addScaledVector(_wr, cx * radius).addScaledVector(_wu, cy * radius).addScaledVector(_wn, depth);
    const pole = _wp.copy(_wr).multiplyScalar(side === 'r' ? 0.25 : -0.25).addScaledVector(_wu, -1).addScaledVector(_wn, 0.2);
    person.reach(side, _wt, pole);
    const tangent = sw.grip?.align ? _wp.copy(_wu).multiplyScalar(cx).addScaledVector(_wr, -cy).multiplyScalar(side === 'r' ? 1 : -1) : null;
    person.faceGrip(side, _wn, tangent);
    // cầm hờ: ngón nới 15% (vẫn móc sau vành); ngón cái nằm dọc mặt vành phía người lái (hơi vào trong), hướng lên đỉnh vô lăng
    const dir = side === 'r' ? 1 : -1, ri = sw.r - 0.01;
    person.looseGrip(side, 0.15, (s, o) => {
      const b = a + dir * s / ri;
      return o.copy(_wc).addScaledVector(_wr, Math.cos(b) * ri).addScaledVector(_wu, Math.sin(b) * ri).addScaledVector(_wn, 0.016);
    }, _wn);
  }
}

// tia nắng: vị trí mặt trời (hoặc trăng) trên màn hình; nhạt dần khi quay lưng lại hoặc mặt trời ra xa ngoài khung hình
const _sunP = new THREE.Vector3(), _camF = new THREE.Vector3();
function rayParams() {
  const st = env.state, r = post.rays;
  r.near = camera.near; r.far = camera.far;
  let amt = st.rays * THREE.MathUtils.smoothstep(camera.getWorldDirection(_camF).dot(st.rayDir), 0.05, 0.5);
  if (amt > 0.002) {
    _sunP.copy(st.rayDir).multiplyScalar(1000).add(camera.position).project(camera);
    amt *= 1 - THREE.MathUtils.smoothstep(Math.max(Math.abs(_sunP.x), Math.abs(_sunP.y)), 1.0, 1.9);
    r.uv.set(_sunP.x * 0.5 + 0.5, _sunP.y * 0.5 + 0.5);
  }
  r.color.copy(st.rayCol).multiplyScalar(Math.max(amt, 0) * 1.2);
}

function frame(now) {
  const rawDt = clamp((now - last) / 1000, 0, 0.05);   // thời gian thật (camera admin dùng)
  last = now;
  const dt = admin.active ? 0 : rawDt;                 // Stop: mọi mô phỏng đứng yên
  if (!admin.active) simNow += rawDt * 1000;           // đồng hồ shader / nước / cỏ / đom đóm (đứng yên khi Stop)
  if (admin.active) { steerHeld = 0; brakeHeld = false; }   // bỏ nút lái / phanh đang giữ trên điện thoại
  diag.begin();
  if (showroom.active) { showroomFrame(rawDt); requestAnimationFrame(frame); return; }   // Race!: chỉ vẽ showroom, đường đi đứng yên

  if (openingElapsed !== null) {
    openingElapsed += dt;
    if (openingElapsed >= (QUICK_OPENING ? 0.5 : 3)) {
      openingElapsed = null;
      setGear(0);
      openingCameraPending = true;
      if (QUICK_OPENING) drive.v = CHILL_DEFAULT;   // tạm thời: bỏ đoạn giảm tốc 180 → 25 km/h (chú muốn chờ ít); bật lại: QUICK_OPENING = false
    }
  }
  const opening = !state.started || openingElapsed !== null;

  // điều khiển
  const left = keys.has('ArrowLeft') || keys.has('KeyA') || steerHeld < 0;
  const right = keys.has('ArrowRight') || keys.has('KeyD') || steerHeld > 0;
  const steer = incident.active ? 0 : (right ? 1 : 0) - (left ? 1 : 0);
  if (keys.has('ArrowUp') || keys.has('KeyW')) drive.target += 2.5 * dt;
  if (keys.has('ArrowDown') || keys.has('KeyS')) drive.target -= 2.5 * dt;
  if (keys.has('Equal') || keys.has('NumpadAdd')) zoomBy(Math.exp(-1.2 * dt));
  if (keys.has('Minus') || keys.has('NumpadSubtract')) zoomBy(Math.exp(1.2 * dt));
  drive.target = clamp(drive.target, CHILL_MIN, onAvenue() ? AV_MAX : CHILL_MAX);
  drive.goal = drive.fast ? FAST_SPEED : drive.target;
  const goal = opening && state.started ? FAST_SPEED : Math.min(drive.goal, traffic.ctrl.maxV, nycCornerV());
  if (!state.started) drive.v = PREVIEW.speed;                // màn hình chờ: chạy đều 25 km/h
  else if (opening) drive.v = FAST_SPEED;
  else if (stop.active) drive.v = stop.speed(drive.v, dt);    // cảnh dừng xe: giảm tốc đều tới khi dừng hẳn
  else if (incident.active) drive.v = Math.max(0, drive.v - 25 * dt);          // vừa va chạm: dừng khựng
  else if (keys.has('Space') || keys.has('KeyB') || brakeHeld || drive.halt) drive.v = Math.max(0, drive.v - 7.5 * dt);   // phanh tay (giữ) / dừng hẳn (bấm đúp)
  else drive.v += clamp(goal - drive.v, -8 * dt, 6 * dt);
  if (openingCameraPending && drive.v <= CHILL_DEFAULT + 0.01) {
    openingCameraPending = false;
    drive.v = CHILL_DEFAULT;
    state.cam = CAMERAS.findIndex((c) => c.id === (isDriveMap(state.map) ? 'chase' : 'side'));
    rig.setMode(state.cam);
    onCamChange();
    refreshUI();
  }
  drive.s += drive.v * dt;
  hlgEnd(dt);
  // hiệu ứng tốc độ tăng dần theo tốc độ thực tế (không có gì dưới ~55 km/h)
  drive.fx += (sstep(55 * KMH, FAST_SPEED, drive.v) - drive.fx) * (1 - Math.exp(-dt * 4));

  // lệch ngang: lái tay, hoặc tự về giữa làn khi buông tay
  if (steer !== 0) drive.manual = true;
  else if (drive.manual) {
    drive.manual = false;
    // buông tay: về làn gần nhất (phố 4 làn: ±1.75 / ±5.25)
    const lanes = cityTraffic.visible ? cityTraffic.lanes : [LANE_D];
    drive.home = Math.sign(drive.d || 1) * lanes.reduce((b, l) => (Math.abs(Math.abs(drive.d) - l) < Math.abs(Math.abs(drive.d) - b) ? l : b), lanes[0]);
  }
  if (steer !== 0) lastSteerT = now;
  nycAuto();
  sgnAuto();
  if (onSgn() && !drive.manual) drive.home = Math.sign(drive.d || 1) * road.laneAt(drive.s, 1);
  const lane = traffic.ctrl.lane ?? drive.home;
  const wantLat = stop.active ? 0 : steer !== 0 ? steer * (2.2 + drive.v * 0.06) : (lane - drive.d) * 0.8 * Math.min(1, drive.v / 3);
  drive.latVel += (wantLat - drive.latVel) * (1 - Math.exp(-dt * 5));
  drive.d += drive.latVel * dt;
  const lim = road.hwAt(drive.s) - 0.9;
  if (Math.abs(drive.d) > lim && drive.ramp == null) { drive.d = Math.sign(drive.d) * lim; drive.latVel = 0; }
  if (onSgn()) {                                             // Landmark: có dải phân cách giữa => không lái xuyên qua
    const md = road.medianAt(drive.s);
    if (md.w > 0.2) { const mn = md.w / 2 + 1; if (Math.abs(drive.d) < mn) { drive.d = Math.sign(drive.d || 1) * mn; drive.latVel = 0; } }
  }
  if (onAvenue() && drive.d < AVENUE.median + 1.25) { drive.d = AVENUE.median + 1.25; drive.latVel = Math.max(0, drive.latVel); }   // đại lộ: không qua dải phân cách
  // đại lộ: lái sang phải quá vạch mép ngoài ở đoạn làn giảm tốc trước nút giao => vào nhánh ra, đi xuống đường ngang dưới cầu,
  // qua đường ngang rồi theo nhánh vào leo lại nhập làn ngoài sau cầu (vị trí ngang theo rampU, cao độ nền)
  if (onAvenue()) {
    if (drive.ramp == null && !stop.active && !incident.active) {
      const t = drive.s - icS(icIndex(drive.s));
      if (t > -490 && t < -390 && drive.d > AVENUE.edge - 0.2) {
        drive.ramp = icIndex(drive.s);
        if (blinker !== 1) foul('ramp', '↘ Vào nhánh ra không bật xi nhan phải!');
        else toast('↘ Nhánh ra — xuống đường ngang dưới cầu vượt');
        blinkDone = 2;
      }
    }
    // tuyến 2 làn (HLG): đang tự lái ở làn ngoài cùng mà phía trước hết làn => tự nhập làn giữa
    if (drive.ramp == null && !drive.manual && Math.abs(drive.home - AVENUE.lanes[2]) < 0.1 && laneCount(drive.s + 150) < 3) drive.home = AVENUE.lanes[1];
    if (drive.ramp != null) {
      const t = drive.s - icS(drive.ramp), u = rampU(t);
      if (u === null || t > IC.rampLen - 6) { drive.ramp = null; drive.home = AVENUE.lanes[2]; drive.manual = false; say('↗ Đã nhập lại cao tốc'); }
      else { const d0 = drive.d; drive.d += (u - drive.d) * Math.min(1, dt * 3); drive.latVel = (drive.d - d0) / Math.max(dt, 1e-3); drive.home = drive.d; }
    }
  }

  // tư thế xe (độ cao + độ dốc theo mặt đường)
  road.ensure(drive.s + 8000);
  road.at(drive.s, roadPt);
  const onRamp = drive.ramp != null;                  // nhánh rẽ: đi ở cao độ nền (không theo cầu vượt)
  drive.pos.set(roadPt.x + Math.cos(roadPt.th) * drive.d, onRamp ? road.baseY(drive.s) : roadPt.y, roadPt.z - Math.sin(roadPt.th) * drive.d);
  const yA = onRamp ? road.baseY(drive.s - 2.5) : road.at(drive.s - 2.5, {}).y, yB = onRamp ? road.baseY(drive.s + 2.5) : road.at(drive.s + 2.5, {}).y;
  drive.pitch += (Math.atan2(yB - yA, 5) - drive.pitch) * (1 - Math.exp(-dt * 6));
  drive.yaw = roadPt.th - Math.atan2(drive.latVel, Math.max(drive.v, 4)) * 0.9;

  cineAmt += ((state.cine && state.started ? 1 : 0) - cineAmt) * (1 - Math.exp(-dt * 2.5));
  rig.cine = cineAmt;
  cars.update(dt, { pos: drive.pos, yaw: drive.yaw, pitch: drive.pitch, speed: drive.v, latVel: drive.latVel, curvature: road.curvature(drive.s + Math.min(12, drive.v * 0.4)), rough: road.dirtAt(drive.s) });
  // người lái: luôn ngồi trong xe; camera trong xe nhìn từ mắt người lái => thu nhỏ đầu (không nhìn xuyên vào đầu)
  if (person.ready) {
    person.root.visible = !driverHidden;
    const inCar = CAMERAS[state.cam].id === 'cockpit' && !stop.active;
    person.head.scale.setScalar(inCar ? 0.001 : 1);
    cars.cabinLevel = inCar ? (0.35 + 0.45 * env.state.dayF) * (1 + env.state.dark) : 0;   // đèn cabin để taplo / tay không tối om (bão: bù độ phơi sáng bị giảm)
    person.update(dt);
    const sw = cars.current?.steer;
    const seated = stop.state === 'off' || stop.state === 'stopping';
    person.footShade.value = seated ? 1 : 0;                       // giày trong hốc để chân: tối
    if (seated) { seatPose(cars.dim.seat); if (sw) gripWheel(sw); }
  }
  if (stop.active) {
    const prev = stop.state;
    stop.update(dt, cars.root, drive.v);
    const c = stop.cam;
    stopLook(c.pos, c.look);                       // giữ chuột rê: xoay quanh người; tự quay nghỉ 2 giây sau thao tác
    if (city.visible) { _sl.copy(c.look); _sl.y -= 1.3; city.collide(_sl, camera.position, dt); }   // map Phố: không xuyên nhà
    camera.lookAt(c.look);
    const fov = rig.fovFor(c.focal);
    const near = stop.closeK > 0.01 ? 0.06 : 0.3;                 // cận cảnh miệng: mặt phẳng cắt gần sát hơn (tay không bị cắt)
    if (Math.abs(camera.fov - fov) > 0.01 || camera.near !== near) { camera.fov = fov; camera.near = near; camera.updateProjectionMatrix(); }
    if (stop.state === 'off') {                    // xong cảnh: trả camera cho chế độ đang chọn, lướt mượt về
      rig.setMode(state.cam);                      // (trả lại mặt phẳng cắt gần của chế độ camera)
      rig.relP.copy(camera.position).sub(drive.pos);
      rig.relL.copy(c.look).sub(drive.pos);
      rig.fov = camera.fov;
      rig.look.yaw = rig.look.pitch = 0;           // góc xoay đã nằm sẵn trong vị trí camera
    }
    if (stop.state !== prev) refreshUI();
  } else {
    rig.cockpitPitch = cockpitPitch();
    rig.update(dt, { pos: drive.pos, yaw: drive.yaw, pitch: drive.pitch, speed: drive.v, dim: cars.dim, fx: drive.fx, side: drive.d >= 0 ? -1 : 1 });
  }
  // Stop: camera admin ghi đè sau rig.update (rig giữ nguyên trạng thái để tắt Stop là về camera cũ)
  if (admin.active) admin.update(rawDt, { pos: drive.pos, yaw: drive.yaw, s: drive.s });

  // môi trường
  env.precip.setCar(cars.tilt, cars.dim);
  autoWeather(dt);
  env.update(dt, drive.pos);
  const st = env.state;
  scenery.update(drive.s);
  scenery.apply(st);
  scenery.updateLights(camera.position);
  if (avenue.visible) {                                    // đại lộ: mặt sông khi tới gần cầu sông (≤ 3.5 km)
    const R = avenue.river(riverIndex(drive.s));
    ocean.setRiver(Math.abs(R.s - drive.s) < 3500, R.level, R.P, { x: R.fx, z: R.fz }, R.hw, R.mA ?? 40);
  }
  diag.lap('logic đầu khung + scenery'); ocean.update(simNow / 1000, camera.position, road, drive.s); diag.lap('ocean');
  waterfalls.update(simNow / 1000, drive.s, st.light, { d: drive.d, v: drive.v, dim: cars.dim, npcs: traffic.active, cam: camera, audio });
  if (reeds.visible) reeds.update(simNow / 1000, camera.position, road, drive.s, st);
  grass.group.visible = MAPS[state.map].id === 'forest' && st.cover < 0.5;   // tuyết phủ thì ẩn cỏ
  if (grass.visible) grass.update(simNow / 1000, camera.position, road, drive.s, st);
  meadow.group.visible = (MAPS[state.map].id === 'meadow' || onAvenue()) && st.cover < 0.5;
  if (meadow.visible) meadow.update(simNow / 1000, camera.position, road, drive.s, st);
  cows.update(dt, drive.s, road, terrain);
  terrain.setCar(drive.s);
  terrain.update(camera.position); diag.lap('terrain');
  nature.update(camera.position, terrain); diag.lap('nature');
  terrain.apply(st);
  // đom đóm: lúc trời tối, không mưa / tuyết / gió mạnh
  const ss = THREE.MathUtils.smoothstep;
  const ffAmt = (MAPS[state.map].id === 'city' ? 0 : 1) * ss(st.night, 0.35, 0.9) * (1 - Math.min(1, st.rain * 2)) * (1 - st.snow) * (1 - st.cover) * (1 - ss(st.wind, 0.6, 0.9));
  fireflies.update(simNow / 1000, drive.s, road, terrain, ffAmt, post.size.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)), scene.fog.density);
  dash.update(dt, drive.v * 3.6, env.clock);
  smoke.update(dt, stop.smoking, st, post.size.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)));
  if (state.started && cars.current) {
    const obstacles = [{ id: 'player', s: drive.s, d: drive.d, speed: drive.v, direction: 1, width: cars.dim.width, length: cars.dim.length }];
    if (person.ready && ['exit', 'parked', 'enter'].includes(stop.state)) {
      person.root.getWorldPosition(_trafficPerson);
      obstacles.push({ id: 'person', ...roadPosition(_trafficPerson, road, drive.s), width: 0.8, length: 0.8, speed: 0, direction: 0 });
    }
    traffic.playerHome = drive.home; traffic.playerGoal = stop.active ? 0 : drive.goal;
    if (cityTraffic.visible) {
      wantRealTraffic();
      cityTraffic.playerRamp = drive.ramp != null ? { k: drive.ramp, s: drive.s } : null;
      cityTraffic.update(dt, drive.s, drive.d, drive.v, st.lamps, cars.dim.length);
      cityPeople.update(dt, drive.s);
      chatter();
      nycSound.update(dt, { on: onNyc() && state.started, s: drive.s, L: NYC.length, speed: drive.v, tunnel: Math.min(1, Math.max(0, -road.elevAt(drive.s) - 4) / 2), tsA: 470, tsB: 960 });
      if (state.started) updateTrafficLevel(dt);
      // xe mình đứng yên > 7 s (không phải đang chờ đèn đỏ ngay trước mặt) => xe kẹt phía sau bấm còi + nháy đèn
      const redAhead = city.stopAhead(drive.s + cars.dim.length / 2, 1, 0) < 25;
      stillT = drive.v < 0.3 && !incident.active && !redAhead ? stillT + dt : 0;
      const stuck = stillT > 7 ? cityTraffic.stuckBehind(drive.s, drive.d) : [];
      for (const c of cityTraffic.cars) c.honk = false;
      for (const c of stuck) c.honk = true;
      if (stuck.length && (honkT -= dt) <= 0) {
        honkT = 2 + Math.random() * 1.5;
        audio.horn(0, Math.min(1, 1.2 - (drive.s - stuck[0].s) / 40));
        if (!honkWarned) { honkWarned = true; toast('📢 Xe phía sau đang bấm còi — chú đi tiếp đi!', true); }
      }
      if (!stuck.length) { honkT = 0; honkWarned = false; }
      incident.update(dt);
      // va chạm => cảnh sát + cấp cứu
      crashGrace = Math.max(0, crashGrace - dt);
      if (!incident.active && !stop.active && crashGrace <= 0) {
        const L = cars.dim.length, W = cars.dim.width;
        const car = cityTraffic.hitTest(drive.s, drive.d, L, W), ped = car ? null : cityPeople.hitTest(drive.s, drive.d, L, W);
        if ((car && (drive.v > 1.2 || car.v > 1.2)) || (ped && drive.v > 0.8)) {
          foul('crash');
          if (car) {
            const side = car.cross || car.xr;                 // xe đường ngang (phố / dưới cầu đại lộ)
            const along = side ? 0 : car.v * car.dir, rel = side ? Math.hypot(drive.v, car.v) : Math.abs(drive.v - along);
            impact(rel, drive.d >= (side ? drive.d : car.d) ? 1 : -1);
            if (!side) { car.slide = Math.min(9, Math.max(0, drive.v - along) * 0.7); car.slideDir = 1; car.slideLat = car.d - drive.d; }
          } else impact(drive.v * 0.4, 0);
          if (!trafficTune.incident) crashGrace = 2.5;        // tắt cảnh tai nạn: chỉ khựng + rung + khói rồi chạy tiếp
          else {
            crashCam = state.cam;
            state.cam = CAMERAS.findIndex((c) => c.id === 'orbit'); rig.setMode(state.cam); onCamChange(); refreshUI();
            incident.start(drive.s, drive.d, cars.dim, car ? { car } : { ped });
          }
        }
      }
      let maxV = stop.active || !trafficTune.avoid ? Infinity : cityTraffic.ctrl.maxV;
      if (trafficTune.redStop && !stop.active && !incident.active) {        // tự dừng trước vạch khi đèn đỏ (vàng: chỉ khi còn kịp phanh êm)
        const dl = city.stopAhead(drive.s + cars.dim.length / 2, 1, drive.v);
        if (dl < Infinity) maxV = Math.min(maxV, Math.sqrt(2 * 3.5 * Math.max(0, dl - 1.2)));
      }
      // đại lộ: trạm thu phí — xe mình cũng tự giảm còn ~20 km/h tới vạch barie, trừ phí tự động (ETC) rồi đi tiếp
      if (onAvenue() && !stop.active && drive.ramp == null) {
        const front = drive.s + cars.dim.length / 2, dl = tollDist(front, 1);
        if (dl < TOLL.zone && dl > -14) maxV = Math.min(maxV, TOLL.slow + Math.sqrt(2 * 1.6 * Math.max(0, dl - 2)));
        const tk = tollIndex(front + dl);
        if (dl < 300 && dl > 150 && tollWarn !== tk) { tollWarn = tk; toast('🛂 Sắp tới trạm thu phí — tự giảm tốc, thu phí tự động'); }
        if (dl < 0 && dl > -14 && tollPaid !== tk) { tollPaid = tk; audio.beep(); toast('💳 Đã trừ phí tự động (ETC): 35.000đ'); }
        avenue.updateToll(dt, [{ s: front, d: drive.d, dir: 1 }, ...cityTraffic.cars.filter((c) => !c.xr && !c.cross && c.ramp == null).map((c) => ({ s: c.s + c.dir * c.len / 2, d: c.d, dir: c.dir }))]);
      }
      traffic.ctrl.lane = null; traffic.ctrl.maxV = maxV;
    } else {
      chatter(true);
      nycSound.update(dt, { on: false });
      traffic.update(dt, drive.s, drive.d, road, st.lamps, cars.current.def.id, obstacles, audio);
      // các map khác: đụng xe NPC => khựng lại, rung, khói (không có cảnh sát)
      hitCool = Math.max(0, hitCool - dt);
      if (!stop.active && hitCool <= 0) {
        const L = cars.dim.length, W = cars.dim.width;
        for (const v of traffic.active) {
          if (Math.abs(v.s - drive.s) < (L + v.dim.length) / 2 - 0.3 && Math.abs(v.d - drive.d) < (W + v.dim.width) / 2 - 0.2) {
            const along = v.v * (v.direction ?? -1), rel = Math.abs(drive.v - along);
            if (rel < 1) continue;
            impact(rel, drive.d >= v.d ? 1 : -1);
            if (v.s > drive.s && along >= 0) v.v += Math.max(0, drive.v - along) * 0.5; else v.v *= 0.3;
            drive.v *= 0.25;
            hitCool = 2.5;
            break;
          }
        }
      }
    }
  }
  avenue.update(drive.s, 1, dt); avenue.setLamps(st.lamps);
  hlgEnv.update(drive.s, st.lamps);
  if (nycBld.visible) { nycBld.setLamps(st.lamps); nycProps.setLamps(st.lamps); }
  if (timesSq.visible) { timesSq.update(dt, st.lamps, drive.pos, drive.s); timesSq.capture(renderer, scene, dt, st.lamps); }
  if (nycWorks.visible) { nycWorks.setLamps(st.lamps); nycWorks.update(drive.pos, sstep(-1.5, -4.5, road.elevAt(drive.s))); }
  if (sgnEnv.visible) { sgnEnv.winK = lightTune.windows; sgnEnv.setLamps(st.lamps); sgnEnv.update(dt, camera.position); }
  if (sgnCity.visible) sgnCity.setLamps(st.lamps * lightTune.windows);
  if (dalatScene.visible) { dalatScene.setLamps(st.lamps * lightTune.windows); diag.lap('trước dalatScene'); dalatScene.update(dt, camera.position); dalatScene.updateTraffic(dt, camera.position, st.lamps);
    if ((fakeT += dt) > 1) { fakeT = 0; const L = []; for (const c of scenery.chunks.values()) for (const l of c.userData.lamps || []) L.push(l[0]); dalatScene.updateFakeLight(L, scenery.lampTune.fakeR ?? 18); }
    FAKE_LIGHT.uFakeK.value = (scenery.lampTune.fakeK ?? 3) * scenery.lampOn; FAKE_LIGHT.uFakeCol.value.set(scenery.lampTune.color);
    diag.lap('dalatScene'); }
  if (sgnScene.visible) sgnScene.setLamps(st.lamps * lightTune.signs);   // LED dọc Landmark 81 theo đèn đêm × "biển hiệu" bảng Lighting
  if (sgnWorks.visible) { sgnWorks.setLamps(st.lamps); sgnWorks.update(drive.pos, sstep(-1.5, -4.5, road.elevAt(drive.s))); }
  diag.lap('traffic + khác'); minimap.update(dt); diag.lap('minimap');
  updateBlinker(dt);
  updateSpeedLimit();
  updateSession(dt);
  city.update(drive.s, st.lamps, dt, 1, post.size.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)), scene.fog.density);
  // map Phố: vượt vạch dừng khi đèn đỏ => báo lỗi
  if (city.visible && state.started && !stop.active && cars.dim) {
    const front = drive.s + cars.dim.length / 2;
    if (cityFront !== null && front > cityFront && front - cityFront < 30 && (drive.d > 0 || onNyc())) {   // nhảy > 30 m (dịch chỗ / đổi map): không tính
      const { n, line } = city.nextLine(cityFront);
      if (line <= front && city.mainLight(n) === 2) {
        foul('red', '🚨 Vượt đèn đỏ!');
      }
      // đi qua vạch qua đường khi có người đang băng qua trước mặt => không nhường người đi bộ
      const jn = road.nearJunction(front);
      for (const c of [jn - 8.4, jn + 8.4]) {
        if (Math.abs(front - c) < 2 && drive.v > 0.8 && yieldWarned !== c && cityPeople.crossingNear(c, drive.d)) {
          yieldWarned = c; foul('ped', '🚸 Không nhường người đi bộ!');
        }
      }
    }
    cityFront = front;
  }
  town.update(drive.s, road, terrain, st.lamps, post.size.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)), scene.fog.density);
  cars.setLights(st.lamps);
  audio.setAmbient({ speed: drive.v, rain: st.rain, snow: st.snow, wind: st.wind, dark: st.dark, fx: drive.fx,
    inCar: CAMERAS[state.cam].id === 'cockpit' && !stop.active });

  // tốc độ cao: camera rung nhẹ (gió lớn không rung). Trời bão: tắt mọi rung lắc (camera, cầm tay, thân xe nhún)
  const calm = 1 - st.dark;
  cars.calm = st.dark;
  const shake = 0.016 * drive.fx * drive.fx * calm;
  if (shake > 0 && !admin.active) {
    const t = simNow / 1000;
    camera.position.x += (Math.sin(t * 11.3) + Math.sin(t * 17.9) * 0.6) * shake;
    camera.position.y += (Math.sin(t * 13.7) + Math.sin(t * 23.1) * 0.5) * shake * 0.7;
  }

  crashFx.update(dt, camera);
  // cinematic: camera hơi "thở" và nghiêng nhẹ như quay cầm tay
  const hand = cineAmt * calm;
  if (hand > 0.01 && !admin.active) {
    const t = simNow / 1000;
    camera.position.x += Math.sin(t * 0.37) * 0.014 * hand;
    camera.position.y += Math.sin(t * 0.53) * 0.012 * hand;
    camera.rotateZ((Math.sin(t * 0.31) * 0.0045 + Math.sin(t * 0.83) * 0.002) * hand);
  }

  uiTimer -= dt;
  if (uiTimer <= 0) {
    $('speed').textContent = Math.round(drive.v * 3.6);
    $('clock').textContent = env.clock;
    if (el.lens.title !== lensLabel()) { refreshUI(); syncLens(); }
    updateRotate();                                // (một số máy không báo resize khi xoay)
    uiTimer = 0.25;
  }

  // sương mù tầng thấp: theo nhóm Chill / Drive + thời tiết + giờ (mistTune), gốc theo độ cao mặt đường chỗ xe, trôi theo gió.
  // Drive mặc định gần như không sương (đồng phẳng nhìn xa thì lớp sương loang thành mảng trắng loá)
  updateMist(dt);
  const mistDens = mistNow.dens, mistCover = mistNow.cover;
  MIST.uMistD.value = 0.05 * mistDens * mistDens;
  MIST.uMistH.value = 3 + 70 * Math.pow(mistCover, 1.4);
  MIST.uMistCover.value = mistCover;
  MIST.uMistBase.value = drive.pos.y - 1.5;
  MIST.uMistT.value = simNow / 1000;
  WET.uGlassWet.value = st.wet;                                        // kính ướt khi mưa (wetGlass.js)
  MIST.uMistWind.value.copy(st.windDir).multiplyScalar(0.0012 + 0.006 * st.wind);
  MIST.uMistColor.value.copy(st.mistColor);
  env.mistCover = mistCover; env.mistDens = mistDens;                // sương phủ cả bầu trời

  // đường ướt: vẽ ảnh phản chiếu cho vũng nước (chỉ khi mưa)
  if (onDalat() && ocean.u.uLake.value > 0.5) {                // hồ Xuân Hương: vẽ cảnh đối xứng qua mặt hồ mỗi khung (ẩn mặt nước khi vẽ)
    // ẩn khi vẽ ảnh phản chiếu: mặt nước, quầng sáng giả + vũng sáng giả của đèn đường (cộng sáng => thành mảng sáng to sau hàng cây)
    const ov = ocean.group.visible, gv = scenery.glowMat.visible, pv = scenery.poolMat.visible;
    ocean.group.visible = false; scenery.glowMat.visible = scenery.poolMat.visible = false;
    lakeRefl.render(scene, camera, WATER_DROP);
    ocean.group.visible = ov; scenery.glowMat.visible = gv; scenery.poolMat.visible = pv;
    ocean.setLakeReflection(lakeRefl, dalatScene.water.refl / 100);   // trộn vào chính mặt nước gợn sóng (như vũng nước mưa), độ rõ theo bảng 💧
  } else if (lakeRefl.active) { lakeRefl.active = false; ocean.setLakeReflection(null); }
  diag.lap('phản chiếu hồ');
  if (st.wet > 0.001) refl.render(scene, camera, drive.pos.y + 0.05);
  else refl.active = false;
  scenery.setReflection(refl, simNow / 1000);

  // cảnh luôn vẽ vào render target (màu tuyến tính + độ sâu); hậu kỳ tone mapping + xoá phông/bloom/chỉnh màu (Cinematic) + blur tốc độ
  // gương chiếu hậu (chỉ khi ngồi trong xe)
  const inCabin = CAMERAS[state.cam].id === 'cockpit' && !stop.active;
  mirror.group.visible = inCabin;
  if (inCabin) mirror.render(scene, cars.tilt);
  wing.render(scene, camera, inCabin);
  // gạt mưa tự bật khi mưa / bão (cần gạt 3D quay, nhìn từ ngoài cũng thấy); trong xe thấy nước mưa trên kính
  wipers.update(dt, stop.active ? 0 : st.rain, drive.v);
  const glassAmt = inCabin ? wipers.wet : 0;
  if (cars.shield) cars.setWiper(wipers.angle(cars.shield.sweep));
  post.begin();
  diag.lap('logic trước render');
  renderer.render(scene, camera);
  if (diag.on) { diag.lap('render cảnh'); const R = renderer.info.render; diagTris = `cảnh: ${(R.triangles / 1e6).toFixed(2)} M tam giác · ${R.calls} lượt vẽ`; }
  rayParams();
  wipers.apply(post.final.uniforms, glassAmt > 0.01 ? glassAmt : 0, camera, cars.tilt, cars.shield, simNow / 1000, cars.rearShield);
  post.renderGlassMask(camera, cars.tilt, cars.rearShield);
  post.render(simNow / 1000, cineAmt, drive.fx, dofParams(dt));
  diag.lap('hậu kỳ'); diag.end();
  if (shotPending) saveShot();
  requestAnimationFrame(frame);
}

// ---------- chế độ Race!: showroom chọn xe / nhân vật + đèn tự thêm (chưa có luật đua: Start => vào Drive) ----------
// thanh trượt của đèn đang chọn: get / set trên cfg; only = chỉ cho loại đèn đó
const LIGHT_FIELDS = [
  { k: 'x', label: 'X', min: -8.8, max: 8.8, step: 0.05, only: 'spot omni dir', get: (c) => c.pos[0], set: (c, v) => { c.pos[0] = v; }, fmt: (v) => v.toFixed(1) },
  { k: 'y', label: 'Cao', min: 0.15, max: 5.45, step: 0.05, only: 'spot omni dir', get: (c) => c.pos[1], set: (c, v) => { c.pos[1] = v; }, fmt: (v) => v.toFixed(1) },
  { k: 'z', label: 'Z', min: -5, max: 10.8, step: 0.05, only: 'spot omni dir', get: (c) => c.pos[2], set: (c, v) => { c.pos[2] = v; }, fmt: (v) => v.toFixed(1) },
  { k: 'intensity', label: 'Độ sáng', min: 0, max: 400, step: 1, only: 'spot omni', fmt: (v) => Math.round(v) },
  { k: 'intensity', label: 'Độ sáng', min: 0, max: 10, step: 0.05, only: 'dir', fmt: (v) => v.toFixed(2) },
  { k: 'intensity', label: 'Độ sáng', min: 0, max: 3, step: 0.01, only: 'hemi', fmt: (v) => v.toFixed(2) },
  { k: 'intensity', label: 'Độ sáng', min: 0, max: 4, step: 0.01, only: 'led', fmt: (v) => '×' + v.toFixed(2) },
  { k: 'intensity', label: 'Mức', min: 0.3, max: 2, step: 0.01, only: 'exposure', fmt: (v) => v.toFixed(2) },
  { k: 'size', label: 'Độ lớn', min: 1, max: 30, step: 0.5, only: 'spot omni', fmt: (v) => v.toFixed(1) + ' m' },
  { k: 'spread', label: 'Độ toả', min: 5, max: 85, step: 1, only: 'spot', fmt: (v) => Math.round(v) + '°' },
  { k: 'spread', label: 'Độ toả', min: 0, max: 100, step: 1, only: 'omni', fmt: (v) => Math.round(v) + '%' },
  { k: 'soft', label: 'Độ mềm', min: 0, max: 1, step: 0.01, only: 'spot', fmt: (v) => Math.round(v * 100) + '%' },
];
const ROOM_LIGHT_COUNT = showroom.userLights.filter((l) => l.builtin).length;   // đèn có sẵn đứng đầu danh sách
const race = {
  begin: null,                                    // = begin(mode) của màn hình chờ (gán trong init)
  loading: false,
  open() {
    if (state.started || showroom.active || stop.active) return;
    showroom.open(cars);
    try { showroom.spinOn = localStorage.getItem('chilldrive.raceSpin') !== '0'; } catch { /* bỏ qua */ }
    $('start').classList.add('race');
    $('race').hidden = false;
    // nút chọn xe: theo danh sách xe có file thật
    const box = $('r-cars');
    box.textContent = '';
    cars.list.forEach((c, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'qbox'; b.textContent = c.name;
      b.onclick = () => this.pickCar(i);
      box.append(b);
    });
    try { showroom.physics = localStorage.getItem('chilldrive.racePhys') !== '0'; } catch { /* bỏ qua */ }
    showroom.personRoot = person.root;
    showroom.settle('car'); showroom.settle('person');
    this.tab('car');
    this.lights();
  },
  close() {
    if (!showroom.active) return;
    if (person.ready) { cars.tilt.add(person.root); person.root.visible = true; stop.place(cars.dim); stop.sit(); }
    showroom.close(env.carEnvRT?.texture);
    this.editLights(false);
    $('race').hidden = true;
    $('start').classList.remove('race');
  },
  tab(t) {
    showroom.setSubject(t);
    $('race').querySelectorAll('.r-tabs button').forEach((b) => { b.classList.toggle('on', b.dataset.tab === t); b.setAttribute('aria-selected', b.dataset.tab === t); });
    $('race').querySelectorAll('.r-row[data-for]').forEach((r) => { r.hidden = r.dataset.for !== t; });
    $('r-prev').title = $('r-next').title = t === 'car' ? 'Xe trước / tiếp theo' : 'Người trước / tiếp theo';
    this.sync();
  },
  // nút ‹ › hai bên: xe / người trước – tiếp theo (theo tab đang mở; Chisa chỉ đi với Mustang => bỏ qua khi xe khác)
  step(dir) {
    if (showroom.subject === 'car') this.pickCar((state.car + dir + cars.list.length) % cars.list.length);
    else this.pickCharacter(stepCharacter(dir));
  },
  async pickCar(i) {
    if (this.loading || i === state.car) return;
    this.loading = true; this.sync();
    try { await chooseCar(i); } finally { this.loading = false; this.progress(null); showroom.settle('car'); this.sync(); }
  },
  async pickCharacter(i) {
    if (characterLoading || i === state.character) return;
    const p = chooseCharacter(i); this.sync();
    await p; showroom.settle('person'); this.sync();
  },
  // thanh tải xe (Mazda ~20 MB): f = 0..1, null = ẩn
  progress(f) {
    if (!showroom.active) return;
    const bar = $('r-load');
    bar.hidden = f === null || f >= 1;
    if (f !== null) { bar.querySelector('.lb-fill').style.width = (f * 100).toFixed(1) + '%'; bar.querySelector('.lb-text').textContent = 'Đang tải xe… ' + Math.round(f * 100) + '%'; }
  },
  sync() {
    [...$('r-cars').children].forEach((b, i) => { b.classList.toggle('on', i === state.car); b.disabled = this.loading; });
    $('r-chars').querySelectorAll('button').forEach((b) => {
      const i = +b.dataset.ch;
      b.classList.toggle('on', i === state.character);
      b.disabled = characterLoading || this.loading || !charFits(i);
      b.title = !charFits(i) ? 'Chisa chỉ đi với Mustang (chọn Mustang ở tab Xe)' : '';
    });
    $('r-spin').classList.toggle('on', showroom.spinOn);
    $('r-spin').setAttribute('aria-pressed', showroom.spinOn);
    $('r-phys').classList.toggle('on', showroom.physics);
    $('r-phys').setAttribute('aria-pressed', showroom.physics);
    $('r-pose').textContent = raceStand ? 'Đứng cạnh xe' : 'Ngồi trong xe';
    $('r-led').textContent = 'LED · ' + ['Trắng', 'Vàng', 'RGB'][showroom.ledMode];
    $('r-prev').disabled = $('r-next').disabled = this.loading || characterLoading;
    $('r-start').disabled = this.loading || characterLoading;
  },
  start() {
    if (this.loading || characterLoading || !showroom.active) return;
    this.close();
    this.begin?.('drive');
  },
  // ---- lớp cài đặt đèn ----
  editLights(on) {
    showroom.editing = on;
    $('r-lights').hidden = !on;
    $('r-lighttog').classList.toggle('on', on);
    $('race').classList.toggle('editing', on);
    if (on) this.lights();
  },
  // danh sách đèn + bảng thanh trượt của đèn đang chọn
  lights() {
    const list = $('r-llist');
    list.textContent = '';
    showroom.userLights.forEach((it, n) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = it.builtin ? it.builtin.name : (it.cfg.type === 'spot' ? 'Spot ' : 'Omni ') + (n + 1 - ROOM_LIGHT_COUNT);
      if (it.builtin) b.classList.add('room');
      b.classList.toggle('on', it === showroom.selected);
      b.onclick = () => { showroom.select(it); this.lights(); };
      list.append(b);
    });
    const sel = showroom.selected, form = $('r-lform');
    $('r-add-spot').disabled = $('r-add-omni').disabled = showroom.userLights.length - ROOM_LIGHT_COUNT >= 8;
    $('r-lhint').textContent = 'Chọn đèn để chỉnh; kéo chấm sáng trong cảnh để dời đèn (xoay camera để đổi chiều sâu). Tự lưu.';
    form.hidden = !sel;
    form.textContent = '';
    if (!sel) return;
    const c = sel.cfg;
    for (const f of LIGHT_FIELDS) {
      if (!f.only.split(' ').includes(c.type)) continue;
      const lab = document.createElement('label'), inp = document.createElement('input'), out = document.createElement('output');
      lab.append(Object.assign(document.createElement('span'), { textContent: f.label }), inp, out);
      Object.assign(inp, { type: 'range', min: f.min, max: f.max, step: f.step });
      const get = () => (f.get ? f.get(c) : c[f.k]);
      inp.value = get(); out.textContent = f.fmt(+inp.value);
      inp.oninput = () => { const v = +inp.value; f.set ? f.set(c, v) : (c[f.k] = v); out.textContent = f.fmt(v); showroom.applyLight(sel); };
      inp.onchange = () => showroom.saveLights();
      inp.dataset.k = f.k;
      form.append(lab);
    }
    for (const [k, label] of [['color', c.type === 'hemi' ? 'Màu trời' : 'Màu'], ['color2', 'Màu đất']]) {
      if (c[k] === undefined) continue;
      const lab = document.createElement('label'), col = document.createElement('input');
      col.type = 'color'; col.value = c[k];
      col.oninput = () => { c[k] = col.value; showroom.applyLight(sel); };
      col.onchange = () => showroom.saveLights();
      lab.append(Object.assign(document.createElement('span'), { textContent: label }), col, document.createElement('span'));
      form.append(lab);
    }
    const del = document.createElement('button');
    del.type = 'button';
    del.textContent = sel.builtin ? 'Về mặc định' : 'Xoá đèn này';
    del.onclick = () => { if (sel.builtin) showroom.resetLight(sel); else showroom.removeLight(sel); showroom.saveLights(); this.lights(); };
    form.append(del);
  },
  // sau khi kéo chấm sáng: cập nhật thanh X / Cao / Z
  syncPos() {
    const sel = showroom.selected;
    if (!sel) return;
    $('r-lform').querySelectorAll('input[type=range]').forEach((inp) => {
      const i = { x: 0, y: 1, z: 2 }[inp.dataset.k];
      if (i === undefined) return;
      inp.value = sel.cfg.pos[i];
      inp.nextElementSibling.textContent = sel.cfg.pos[i].toFixed(1);
    });
  },
};
$('r-back').onclick = () => race.close();
$('r-start').onclick = () => race.start();
$('race').querySelectorAll('.r-tabs button').forEach((b) => { b.onclick = () => race.tab(b.dataset.tab); });
$('r-chars').querySelectorAll('button').forEach((b) => { b.onclick = () => race.pickCharacter(+b.dataset.ch); });
$('r-spin').onclick = () => {
  showroom.spinOn = !showroom.spinOn;
  try { localStorage.setItem('chilldrive.raceSpin', showroom.spinOn ? '1' : '0'); } catch { /* bỏ qua */ }
  race.sync();
};
$('r-phys').onclick = () => {
  showroom.physics = !showroom.physics;
  try { localStorage.setItem('chilldrive.racePhys', showroom.physics ? '1' : '0'); } catch { /* bỏ qua */ }
  showroom.settle('car'); showroom.settle('person');
  race.sync();
};
$('r-pose').onclick = () => { raceStand = !raceStand; if (raceStand) showroom.settle('person'); race.sync(); };
$('r-led').onclick = () => {
  showroom.setLedMode((showroom.ledMode + 1) % 3);
  try { localStorage.setItem('chilldrive.raceLed', showroom.ledMode); } catch { /* bỏ qua */ }
  race.sync();
};
$('r-prev').onclick = () => race.step(-1);
$('r-next').onclick = () => race.step(1);
$('r-lighttog').onclick = () => race.editLights(!showroom.editing);
$('r-lclose').onclick = () => race.editLights(false);
for (const type of ['spot', 'omni']) {
  $('r-add-' + type).onclick = () => {
    // đèn mới đặt lệch theo số đèn để không chồng lên nhau, phía camera đang nhìn
    const n = showroom.userLights.length - ROOM_LIGHT_COUNT, a = showroom.orbit.yaw + (n % 2 ? -0.7 : 0.7);
    const it = showroom.addLight(type, { pos: [Math.sin(a) * 3.2, 3.4, Math.max(-4.8, Math.cos(a) * 3.2)] });
    if (it) { showroom.select(it); showroom.saveLights(); race.lights(); }
  };
}
// kéo (chuột / 1 ngón) xoay camera quanh xe / nhân vật, lăn chuột / chụm 2 ngón để zoom; chỉ trên nền showroom (không phải trên nút).
// Lớp đèn đang mở: bấm trúng chấm sáng thì kéo đèn đó
{
  const el = $('race'), pts = new Map();
  let pinch = 0, dragLight = null;
  el.addEventListener('pointerdown', (e) => {
    if (e.target !== el) return;
    const hit = showroom.pick(e.clientX, e.clientY);
    if (hit) {
      dragLight = { id: e.pointerId, it: hit };
      showroom.select(hit); race.lights();
      el.setPointerCapture?.(e.pointerId);
      return;
    }
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    el.setPointerCapture?.(e.pointerId);
    pinch = 0;
  });
  el.addEventListener('pointermove', (e) => {
    if (dragLight?.id === e.pointerId) { showroom.dragLight(dragLight.it, e.clientX, e.clientY); race.syncPos(); return; }
    const p = pts.get(e.pointerId);
    if (!p) return;
    if (pts.size === 1) showroom.drag(e.clientX - p.x, e.clientY - p.y);
    p.x = e.clientX; p.y = e.clientY;
    if (pts.size === 2) {
      const [a, b] = [...pts.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch) showroom.zoom(pinch / d);
      pinch = d;
    }
  });
  const up = (e) => {
    if (dragLight?.id === e.pointerId) { dragLight = null; showroom.saveLights(); }
    pts.delete(e.pointerId); pinch = 0;
  };
  el.addEventListener('pointerup', up);
  el.addEventListener('pointercancel', up);
  el.addEventListener('wheel', (e) => {
    e.preventDefault();
    const dy = e.deltaY * (e.deltaMode === 1 ? 33 : e.deltaMode === 2 ? 400 : 1);
    showroom.zoom(Math.exp(clamp(dy, -200, 200) * 0.0012));
  }, { passive: false });
}

// ---------- khởi động ----------
async function init() {
  applyQuality();
  env.setTime(TIMES[state.time].hour);
  env.hour = TIMES[state.time].hour;
  env.snapWeather(WEATHERS[state.weather].id === 'auto' ? 'cloudy' : WEATHERS[state.weather].id);
  env.onThunder = (delay, power) => audio.thunder(delay, power);
  road.ensure(drive.s + 8000);
  road.at(drive.s, roadPt);
  drive.pos.set(roadPt.x, roadPt.y, roadPt.z);
  applyMap();
  await cars.probe();
  refreshUI();
  requestAnimationFrame(frame);
  // cho bấm chơi ngay; xe tải song song (thường chỉ 1–3 MB)
  const start = $('start');
  $('hint').textContent = 'Chọn chế độ';
  $('modes').hidden = false;
  // màn hình chờ (xem PREVIEW). Không ghi vào cài đặt của chú; vào game thì trả lại như cũ.
  const snap = { map: state.map, weather: state.weather, time: state.time, cam: state.cam, quality: state.quality };
  state.quality = Math.max(0, QUALITY.findIndex((q) => q.id === PREVIEW.quality)); applyQuality(false);
  state.map = MAPS.findIndex((m) => m.id === PREVIEW.map); applyMap();
  state.weather = WEATHERS.findIndex((w) => w.id === PREVIEW.weather); env.snapWeather(PREVIEW.weather);
  state.time = TIMES.findIndex((t) => t.id === PREVIEW.time); env.setTime(TIMES[state.time].hour); env.hour = TIMES[state.time].hour; env.tween = null;
  state.cam = CAMERAS.findIndex((c) => c.id === PREVIEW.cam); rig.setMode(state.cam); onCamChange();
  drive.v = PREVIEW.speed;
  // âm thanh: thử bật ngay; nếu trình duyệt chặn thì mở ở lần chạm / bấm phím đầu tiên
  const kickAudio = () => { audio.start().catch((e) => console.warn('Audio:', e)); };
  kickAudio();
  for (const ev of ['pointerdown', 'keydown', 'touchstart']) window.addEventListener(ev, kickAudio, { once: true, capture: true });
  cars.onProgress = (f) => { setBtn(el.car, '🚗', 'Đang tải… ' + Math.round(f * 100) + '%'); race.progress(f); };
  // cây / bụi / đá chi tiết: tải song song; xong thì dựng lại địa hình để cụm đá dùng model đá thật
  nature.load('assets/models/nature.glb').then(() => {
    if (nature.rockGeos.length) terrain.rockGeos = nature.rockGeos;
    terrain.reset();
    terrain.prime(camera.position.lengthSq() ? camera.position : drive.pos);
    nature.setRadius(QUALITY[state.quality].trees);
    compileFor(post.sceneRT, camera, nature.group).catch(() => {});
  }).catch((e) => console.warn('Không tải được cây / đá chi tiết', e));
  chooseCar(0).then(() => person.load(CHARACTERS[0].url, { rig: CHARACTERS[0].rig })).then(() => {
    cars.tilt.add(person.root);
    if (cars.current) { stop.place(cars.dim); stop.sit(); }
    compileFor(post.sceneRT, camera, person.root).catch(() => {});
    refreshUI();
  }).catch((e) => console.warn('Không tải được người lái', e));
  const go = (mode) => {
    if (state.started) return;
    state.mode = mode;
    // trả lại cảnh như trước màn hình chờ, rồi vào map của chế độ (Drive: Phố với bộ cài đặt riêng của phố)
    state.map = mode === 'drive' ? CITY_MAP : snap.map; curMapId = null;
    const urlMap = MAPS.findIndex((m) => m.id === new URLSearchParams(location.search).get('map'));   // ?map=nyc: vào thẳng map Drive đó (script chụp kiểm)
    if (mode === 'drive' && urlMap >= 0 && isDriveMap(urlMap)) state.map = urlMap;
    scopes.world = { weather: snap.weather, time: snap.time, cam: snap.cam };
    restoreScope(snap);
    if (WEATHERS[state.weather].id !== 'auto') env.snapWeather(WEATHERS[state.weather].id);   // bỏ mưa / mây của màn hình chờ ngay
    state.started = true;
    state.quality = snap.quality; applyQuality(false);              // trả mức chất lượng + độ phân giải đầy đủ
    applyMap();
    start.classList.add('gone');
    showModeName(mode);
    wakeFrom = performance.now() + 1200; document.body.classList.add('playing');
    applyCine();
    if (mode === 'drive') { drive.v = CHILL_DEFAULT; setGear(0); openingCameraPending = true; }   // vào phố: không chạy đoạn 180 km/h
    else {                                                        // vào Chill: chạy luôn 25 km/h, camera Sau xe (không đoạn 180 km/h)
      drive.v = CHILL_DEFAULT; setGear(0);
      state.cam = CAMERAS.findIndex((c) => c.id === 'chase'); rig.setMode(state.cam); onCamChange();
    }
    audio.start().catch((e) => console.warn('Audio:', e));
    window.removeEventListener('keydown', onKey);
    refreshUI();
  };
  // phím: Enter / 1 = Chill, 2 = Drive, 3 = Race! (trong showroom: Enter = Start, Esc = quay lại, L = lớp cài đặt đèn)
  const onKey = (e) => {
    if (showroom.active) {
      if (e.code !== 'Escape' && e.target.closest?.('input, button')) return;   // đang chỉnh thanh trượt / nút đang được chọn (Enter = bấm nút đó)
      if (e.code === 'Enter') race.start(); else if (e.code === 'Escape') race.close(); else if (e.code === 'KeyL') race.editLights(!showroom.editing);
      else if (e.code === 'ArrowLeft') race.step(-1); else if (e.code === 'ArrowRight') race.step(1);
      return;
    }
    if (e.code === 'Enter' || e.code === 'Digit1') begin('chill'); else if (e.code === 'Digit2') begin('drive'); else if (e.code === 'Digit3') race.open();
  };
  // bấm Chill / Drive: tải đủ dữ liệu map đầu của chế độ (thanh tiến độ thật, lưu vào thiết bị — lần sau bỏ qua), rồi vào game và
  // tải ngầm tiếp các map còn lại theo thứ tự trong danh sách map
  const firstMap = (mode) => MAPS[mode === 'drive' ? CITY_MAP : snap.map].id;
  let starting = false;
  const begin = async (mode) => {
    if (state.started || starting) return;
    starting = true;
    const bar = $('loadbar'), fill = bar.querySelector('.lb-fill'), text = bar.querySelector('.lb-text'), mb = (b) => (b / 1048576).toFixed(1);
    $('modes').hidden = true;
    let shown = false;
    await preload.ensure(preload.assetsFor(firstMap(mode)), (k, done, total) => {
      if (!shown && k < 1) { shown = true; bar.hidden = false; }
      fill.style.width = (k * 100).toFixed(1) + '%';
      text.textContent = total ? `Đang tải dữ liệu về máy… ${mb(done)} / ${mb(total)} MB` : 'Đã có sẵn trên máy';
    });
    bar.hidden = true;
    go(mode);
    const rest = MAPS.map((m) => m.id).filter((id) => id !== firstMap(mode));
    setTimeout(() => preload.queue(rest.flatMap(preload.assetsFor)), 4000);   // Mazda / Chisa (~42 MB) chỉ tải khi chú chọn
  };
  $('m-chill').onclick = () => begin('chill');
  $('m-drive').onclick = () => begin('drive');
  $('m-race').onclick = () => race.open();
  race.begin = begin;
  window.addEventListener('keydown', onKey);
  // màn hình chờ: tải ngầm trước dữ liệu map đầu của Chill rồi của Drive
  preload.queue([...preload.assetsFor(firstMap('chill')), ...preload.assetsFor(firstMap('drive'))]);
}
init();
preload.registerSW();                                            // lưu tài nguyên trên thiết bị (docs/sw.js)

// hook phục vụ debug / kiểm thử
window.__app = { dalatScene, __Raycaster: THREE.Raycaster, __V3: THREE.Vector3, sgnWorks, sgnScene, sgnEnv, sgnCity, nycBld, nycProps, timesSq, nycNet, nycWorks, get crashFx() { return crashFx; }, get blinker() { return blinker; }, get violations() { return violations; }, minimap, avenue, hlgEnv, city, cityTraffic, cityPeople, incident, ocean, waterfalls, wing, audio, smoke, cows, traffic, dash, town, fireflies, wipers, meadow, nature, person, stop, toggleStop: () => toggleStop(), admin, setAdmin: (v) => setAdmin(v), refl, MIST, forceCine: (v) => { cineAmt = v; }, post, toggleFast, env, cars, rig, drive, state, nextCharacter, chooseCharacter, nextCar, nextMap, nextCam, nextWeather, nextTime, chooseCar, renderer, scene, camera, scenery, terrain, reeds, grass, road };
