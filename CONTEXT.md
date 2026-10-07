# Bàn giao context — 08/10/2026

## Điểm bắt đầu
- Dự án: `/Users/keinle/Desktop/VIBECODE NEW/GAME/Chill drive`
- Remote: `https://github.com/mrgiangleai/chillguy-freedrive.git`
- **Nhánh đang làm: `experiment/webgpu-vertical-slice`** (local, **chưa push**; origin chỉ có `claude/focused-gates-gcpbj9`).
- **Game chính (`src/`, `docs/`, `scripts/`) tạm khoá** — không can thiệp; chỉ mở khi có yêu cầu riêng.

## Dòng việc: experiment `experiments/webgpu/`
Editor + runtime WebGPU/TSL + Rapier (Vite), tách khỏi game chính. Đang làm lại UI theo hướng **Lumion**.

### Cách chạy (dùng server lưu chung)
- `cd experiments/webgpu && npm start` → `node server.mjs`, mở `http://localhost:4173`.
- Server phục vụ `dist/` + API lưu dự án ra `experiments/webgpu/.store/` (gitignore): `project.json`, `blobs/` (GLB import), `meshes/` (terrain sculpt/paint).
- `npm run build` = `vite build`; `npm run preview` = `vite preview` (khi đó tự fallback lưu theo từng trình duyệt: localStorage + IndexedDB).
- Lưu ý: scene tự nạp 6 model test (~625 MB) → lần đầu tải ~45–60 s. Ảnh chụp từ agent cần cửa sổ desktop hiển thị (thường fail trong harness).
- **UI-first + model lazy (mới)**: UI (rail/panel) dựng ngay; model test nạp ở nền sau khi UI hiện. Lần đầu, cả 6 model test được đánh dấu `unloaded` (mặc định lazy) → scene khởi động chỉ có Ground/Road; thư viện hiện tile "Load" + nút **"Tải tất cả model test"** theo từng mode (Character/Vehicle/Landscape). Model người dùng bấm Load sẽ tự nạp lại ở lần sau (đã bỏ khỏi `unloaded`). Cờ `state.lazyModelsV1`.
- **Cache tĩnh**: `server.mjs` phục vụ `/assets/*` immutable 1 năm, media/model `max-age=86400`; `index.html`/API `no-store`. Sửa xong phải **restart server** mới áp dụng. Nếu reload lại tải 625 MB thì kiểm tra server cũ còn gửi `no-store`.

### Tính năng đã có
- **Thời tiết**: preset Clear/Cloudy/Windy/Rain/Storm/Snow/Foggy (số liệu port từ `src/world.js`) + slider Mưa/Tuyết(0–5)/Gió/Sương/**Độ sáng sương**; mưa (LineSegments) & **tuyết 4 cỡ hạt (0.45–2.0, lớn dần theo slider)** bám camera; **chuyển preset mượt 3 s**, **sấm chớp** khi bão, **tuyết phủ trắng** Ground/Terrain (`cover`); sương mù pha màu thời tiết + `fogBright` (hết đen trong bão, có thanh kéo). Lưu trong `state.scene.weather`. File `editor/core/weather.js`.
- **Slider hiện số realtime**: hàm `liveLabel` trong `main.js` tự cập nhật nhãn mọi thanh kéo (`[data-key]`, effects, `#uicfg`) khi kéo.
- **Bầu trời + mặt trời/trăng** (mới): port `SKY_KEYS`/gradient từ `src/world.js` — dome gradient theo độ cao mặt trời (canvas, `toneMapped:false`) + sprite mặt trời (quầng additive) và mặt trăng (có vết, hiện khi trời tối), bị che khuất bởi địa hình; tự đổi theo Time + thời tiết. File `editor/core/sky.js`.
- **Thời tiết auto** (mới): nút Auto trong panel Weather; chu kỳ đổi preset lấy từ cài đặt UI (`#uicfg` → "Tự đổi thời tiết mỗi (giây)", mặc định **30s**), lưu `wgpuSandbox.autoWeather`/`autoWeatherSec`.
- **UI-first + model lazy**: UI dựng ngay; 6 model test mặc định `unloaded` → chỉ Ground/Road khi mở; tile "Load" + nút "Tải tất cả model test" theo mode.
- **Tự lưu**: mọi thay đổi (object, đèn, vật liệu, terrain mesh, import GLB, scene/camera/DOF, effects, layers) + flush khi thoát. Lưu cả localStorage lẫn server.
- **Server lưu chung + chống đè**: có `rev`/conflict (409); tab cũ không ghi đè bản mới; tab tự reload khi có thay đổi từ trình duyệt khác (không realtime tức thời).
- **UI kiểu Lumion**: mode bar ở đáy (icon + nhãn) + nút **UI** (chỉnh độ mờ/màu nền/màu chữ) + **Theatre** (H) ẩn UI; **library trái** (lưới thumbnail + search) / **inspector phải**; **Effects stack** (thêm/bật-tắt/đổi thứ tự/xoá); **placement Move/Rotate/Scale** + Layers; panel **kéo-thả, snap 2 chiều, không đè** (hẹp thì tự xếp dọc).
- Đã sửa lỗi handler thiếu: `objectCamera`, `selectModelTransform`.

## Commit gần đây
- `0d8823e` cache static + load progress · `eaf4e20` fix TDZ crash · `78e7fef` hoàn tất EN-VI · `d8b142f` docs handoff P5 · `77eca29` P5 polish UI (khoảng cách/icon/EN-VI/tương phản) · `d99fd90` panel kéo-thả + cấu hình UI · `4f72c6b` P4.
- Đã commit toàn bộ thay đổi panel/UI trước đó (không còn thay đổi dở).

## Việc còn mở / next action
- **P5 — polish**: đã làm: token tương phản (`--ui-line`/`--ui-fg-dim` sáng hơn, focus-visible), khoảng cách (`.row` cột label 104px, nút lib 22px), bộ icon thống nhất (thêm `theatre/arrow*/close/world/brush/water`, đổi icon Theatre khỏi trùng `eye`, nút reorder effects dùng icon), và **EN-VI toàn UI** (rail/library/effects/light/inspector/physics/camera/layers/UI-settings/HUD, module landscape + lighting, `index.html`).
- Đã Việt hoá cả nhãn kỹ thuật (FOV→Góc nhìn, Cam X/Y/Z→Vị trí, Target→Ngắm, Aperture→Khẩu độ, Focal Length→Tiêu cự, preset camera, Static/Dynamic, tên light, tên material). Chỉ còn giữ nguyên danh từ riêng/tên asset (Venom, Lily 4K, Mazda…) và nhãn `UI`/`Theatre`/`WEBGPU SANDBOX`.
- Chưa xem trực quan (harness không chụp được); đã build `vite build` OK, `dist/` là gitignore nên cần `npm run build` trước khi `npm start`.
- Giới hạn đã biết: import GLB **nén meshopt** lỗi (`setMeshoptDecoder must be called`) — lỗi loader có sẵn, không liên quan lưu trữ.
- Chưa push nhánh experiment; lần đầu cần `git push -u origin experiment/webgpu-vertical-slice`.

## Quy tắc làm việc
- Xem `AGENTS.md`. Context mới chỉ đọc `CONTEXT.md` + `AGENTS.md`; không quét lại codebase, không đọc lịch sử dài, tránh poll/retry/verify lặp.
