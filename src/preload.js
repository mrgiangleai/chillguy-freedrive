// Tải trước + lưu tài nguyên trên thiết bị (Cache Storage, cùng bộ nhớ với service worker `docs/sw.js`).
// - `assets-manifest.json` (build.mjs tạo): { "assets/…": [bytes, hash] }. Khoá lưu = đường dẫn + '?h=' + hash => file đổi thì tải lại
//   (không dùng '#': Cache API bỏ qua phần fragment khi so khoá).
// - ensure(urls, onProgress): tải các file còn thiếu, báo tiến độ theo byte thật (đọc dòng dữ liệu); file đã lưu bỏ qua ngay.
// - queue(urls): tải ngầm từng file một (không chặn game), dùng ở màn hình chờ và sau khi vào game.
export const CACHE = 'chilldrive-assets-v1';
// tài nguyên dùng chung mọi map (xe mặc định, người lái, cây chi tiết, xe ngựa, texture đất đá)
export const COMMON = ['assets/models/mustang.glb', 'assets/models/person.glb', 'assets/models/nature.glb', 'assets/models/carriage.glb',
  'assets/tex/dirt.webp', 'assets/tex/gravel.webp', 'assets/tex/rock.webp', 'assets/tex/rock_n.webp'];
// tài nguyên riêng từng map (map không có ở đây chỉ cần COMMON)
const BY_MAP = {
  sea: ['assets/tex/ocean-waves.png'],
  avenue: ['assets/tex/ocean-waves.png'],
  hlg: ['assets/tex/ocean-waves.png', 'assets/hlg-env.json'],
  nyc: ['assets/nyc-buildings.json', 'assets/nyc-streets.json'],
  sgn: ['assets/models/sgn/landmark81.glb', 'assets/sgn-env.json',
    'assets/models/sgn/trees/acacia.glb', 'assets/models/sgn/trees/maple.glb', 'assets/models/sgn/trees/palm-fan.glb',
    'assets/models/sgn/trees/palm-date.glb', 'assets/models/sgn/trees/cypress.glb', 'assets/models/sgn/trees/urban-tall.glb',
    'assets/models/sgn/trees/urban-round.glb'],
};
// tải sau cùng (chỉ cần khi chú chọn): xe Mazda, nhân vật Chisa
export const EXTRA = ['assets/models/mazda-rx-vision.glb', 'assets/models/chisa_wuthering_waves.glb'];
export const assetsFor = (mapId) => [...COMMON, ...(BY_MAP[mapId] || [])];

let manifest = null;
async function getManifest() {
  if (manifest) return manifest;
  try { manifest = await (await fetch('assets-manifest.json', { cache: 'no-cache' })).json(); } catch { manifest = {}; }
  return manifest;
}
const keyOf = (url, M) => url + '?h=' + (M[url]?.[1] || '0');
const cacheOk = () => typeof caches !== 'undefined' && window.isSecureContext;

// file chưa có trong bộ nhớ thiết bị (theo hash hiện tại)
async function missing(urls) {
  const M = await getManifest(), uniq = [...new Set(urls)];
  if (!cacheOk()) return uniq.map((u) => ({ url: u, size: M[u]?.[0] || 0 }));
  const c = await caches.open(CACHE), out = [];
  for (const u of uniq) if (!(await c.match(keyOf(u, M)))) out.push({ url: u, size: M[u]?.[0] || 0 });
  return out;
}

// tải 1 file, cộng byte vào tiến độ, lưu vào bộ nhớ thiết bị
async function fetchStore(url, onBytes) {
  const M = await getManifest();
  const res = await fetch(url);
  if (!res.ok) throw new Error(url + ' HTTP ' + res.status);
  const parts = [], reader = res.body?.getReader();
  if (reader) for (;;) { const { done, value } = await reader.read(); if (done) break; parts.push(value); onBytes(value.length); }
  const blob = reader ? new Blob(parts, { type: res.headers.get('content-type') || '' }) : await res.blob();
  if (cacheOk()) {
    const c = await caches.open(CACHE);
    await c.put(keyOf(url, M), new Response(blob, { headers: { 'content-type': res.headers.get('content-type') || 'application/octet-stream' } }));
  }
}

// tải đủ danh sách, onProgress(0..1, bytesDone, bytesTotal); trả về true nếu thật sự phải tải gì đó
export async function ensure(urls, onProgress = () => {}) {
  const need = await missing(urls);
  if (!need.length) { onProgress(1, 0, 0); return false; }
  const total = need.reduce((t, f) => t + f.size, 0) || 1;
  let done = 0;
  onProgress(0, 0, total);
  for (const f of need) {
    try { await fetchStore(f.url, (n) => { done += n; onProgress(Math.min(1, done / total), done, total); }); }
    catch (e) { console.warn('Tải trước lỗi', e); }
  }
  onProgress(1, total, total);
  return true;
}

// tải ngầm tuần tự (một file một lúc), có thể thêm tiếp; ensure() vẫn dùng chung bộ nhớ nên không tải trùng
const bg = [];
let running = false;
export function queue(urls) {
  for (const u of urls) if (!bg.includes(u)) bg.push(u);
  if (!running) run();
}
async function run() {
  running = true;
  while (bg.length) {
    const u = bg.shift();
    try { if ((await missing([u])).length) await fetchStore(u, () => {}); } catch (e) { console.warn('Tải ngầm lỗi', u, e); }
    await new Promise((r) => setTimeout(r, 150));                 // nhường mạng / CPU cho game giữa các file
  }
  running = false;
}

// service worker: trả tài nguyên từ bộ nhớ thiết bị (lần sau mở game không phải tải lại)
export function registerSW() {
  if (!('serviceWorker' in navigator) || !window.isSecureContext) return;
  navigator.serviceWorker.register('sw.js').catch((e) => console.warn('Service worker', e));
}
