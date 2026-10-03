# ROAD.md — sổ tay dự án Chill Drive

> Đọc file này trước khi sửa. Mỗi lần sửa xong: ghi 1 mục vào **Nhật ký** (cuối file) và tăng bộ đếm.
> Bộ đếm đủ 10 => đọc lại cả file, gộp nhật ký vào các mục "Trạng thái", xoá nhật ký cũ, đặt bộ đếm về 0.

**Bộ đếm cập nhật kể từ lần tóm tắt gần nhất: 6/10**

## 1. Tổng quan
- Game lái xe thư giãn 3D trên trình duyệt: three.js **0.160**, JS thuần, WebAudio. Mã nguồn `src/` → gộp bằng esbuild
  (`node build.mjs`) ra `docs/app.js` + `docs/style.css`; build tự gắn `?v=<hash>` vào `docs/index.html` (chống cache).
- Chạy trên GitHub Pages từ thư mục `/docs` của nhánh **`claude/focused-gates-gcpbj9`** (repo `mrgiangleai/chillguy-freedrive`).
  Sau khi push, Pages tự triển khai (~30 s); người chơi bấm Ctrl+F5.
- Thử cục bộ: `npx http-server docs -p 8080 -c-1`; Playwright + Chromium SwiftShader (`--use-angle=swiftshader`), rất chậm
  (~1 khung hình/giây) => **luôn thử ở chất lượng Low** (`localStorage['chilldrive.quality']='low'`), chạy từng trình duyệt một.
  Hook kiểm thử: `window.__app` (env, cars, rig, drive, state, stop, person, smoke, wing, audio, traffic, town, cows, …).
  Máy chậm => môi trường (env map) chưa kịp chụp lại khi đổi giờ: gọi `__app.env.update(0.016, drive.pos); env._captureEnv()`.

## 2. Quy ước làm việc
- Trả lời tiếng Việt, xưng "cháu", gọi người dùng là "chú". Đẩy từng phần (chú không thích chờ lâu).
- Chỉ push lên `claude/focused-gates-gcpbj9`; không tạo PR khi chưa được yêu cầu.
- Commit kết thúc bằng 2 dòng: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` và
  `Claude-Session: https://claude.ai/code/session_01WP3tGtiy9zkx8o65PTcvkV`. Không ghi tên/mã model trong code/commit.
- Sửa xong: `node build.mjs`, chụp thử (Low), cập nhật README nếu đổi tính năng, cập nhật ROAD.md, commit, push.

## 3. Bản đồ mã nguồn (`src/`)
| File | Nội dung chính |
|---|---|
| `main.js` | Ghép mọi thứ, vòng lặp `frame()`, giao diện/nút/phím, `state` mặc định, lái xe (`drive`), cấp tốc độ `GEARS`, ống kính theo camera (`onCamChange`), `cockpitPitch()`, `gripWheel()` (IK tay), `stopLook()`, `rayParams()`, toàn màn hình điện thoại, chọn xe/map/chất lượng |
| `config.js` | `CARS` (thông số từng xe, `mats` sửa vật liệu, `seatMesh`, `steer`/`steerMesh`/`steerShift`), `MAPS`, `WEATHERS`, `TIMES`, `CAMERAS`, `FSTOPS`, `QUALITY` |
| `world.js` | Bầu trời (shader, mặt trời, **trăng**), mây, sương phủ trời, ánh sáng mặt trời/trăng (1 DirectionalLight đổ bóng), hemi, phơi sáng, thời tiết, sét, chụp env map (PMREM), cân bằng nắng/trời (`sunK`) |
| `post.js` | Hậu kỳ: xoá phông (CoC ống kính thật), bloom, **tia nắng** (god rays), **mưa trên kính** (RAIN_GLASS), ACES + chỉnh màu phim, grain, blur xuyên tâm 180 km/h |
| `camera.js` | Các chế độ camera, tiêu cự 16–35 mm (`fovFor`), nhìn quanh (giữ góc sau khi thả), `cockpitPitch` hook |
| `cars.js` | Tải + chuẩn hoá xe, vật liệu (`mats`, `envK`), bánh xe quay, cửa tài xế, đèn pha/đèn hậu (quầng mềm `softGlowTexture`), bóng gầm, đèn cabin (đặt tại màn hình taplo), dò **kính lái** (`windshield()`), **cần gạt** 3D (`wiperRig`), vô lăng da (`leatherMaterial`), dời vô lăng (`steerShift`) |
| `mirror.js` | Gương chiếu hậu giữa (render-to-texture, **tỉ lệ 4:3**: 12.5 × 9.4 cm, `GW/GH`), **đặt trên taplo ngay bên phải màn hình taplo** như màn hình thứ hai (cùng góc nghiêng, `place(dim, shield, screen)`); không có `screen` thì treo sát mép trên kính lái |
| `wingmirrors.js` | 2 gương hông soi thật (phản chiếu phẳng, frustum lệch tâm, vẽ xen kẽ; `uTex` theo hệ xe) — chỉ khi ngồi trong xe, chỉ xe Mustang |
| `wipers.js` | Gạt mưa tự động (pha cos) + lượng nước trên kính |
| `dashscreen.js` | Màn hình giải trí taplo (canvas, tông ấm) + đèn hắt |
| `person.js` | Người lái (Quaternius, animation), áo đen/quần jeans vẽ bằng shader, IK 2 xương `reach(side, target, pole)`, xương `head`/`neck` |
| `stopscene.js` | Cảnh dừng xe: dừng → bước ra, đóng cửa → đi lên trước xe → hút thuốc → **đi lanh quanh** (`_wander`, `_pickTarget`, `_look`) → quay lại xe; camera trung cảnh → cận 50 mm → toàn cảnh quay quanh |
| `smoke.js` | Điếu thuốc (kẹp giữa ngón trỏ/giữa), đầu thuốc đỏ, lửa bật lửa, hạt khói (đầu điếu + nhả từ miệng) |
| `terrain.js`, `terrain-noise.js` | Địa hình quadtree nhiều mức, cây tấm, cụm đá, texture ảnh; `setView` (Ultra xa ×2) |
| `nature.js` | Cây/bụi/đá model chi tiết quanh camera (gần đổ bóng, xa không) |
| `reeds.js` | Cỏ lau / búi cỏ / cỏ đồi (instancing, gió, `setView`) |
| `road.js`, `scenery.js` | Đường vô tận, đoạn đường đất (đồi thông); mặt đường (nhựa sần, vũng nước, phản chiếu), cọc, đèn đường, hộ lan |
| `town.js` | Map núi: thị trấn nhỏ + **thị trấn lớn** dưới thung lũng, đèn đường |
| `cows.js` | Map đồi cỏ: đàn 5 bò sữa + hàng rào gỗ |
| `fireflies.js` | Đom đóm ban đêm |
| `traffic.js` | Xe ngược chiều ngẫu nhiên (15–70 s/chiếc, tối đa 2) |
| `audio.js` | Nhạc lo-fi tự sinh, gió/mưa/lốp/động cơ/sấm; bus `outGain` (trong xe ×0.4 + lowpass), tiếng mưa: ngoài `rainG` 0.08, kính `glassG` 0.08, mui `roofG` 0.02 (× lượng mưa) |
| `particles.js`, `mist.js`, `reflection.js`, `textures.js`, `colorspace.js` | Mưa/tuyết, sương tầng thấp, phản chiếu vũng nước, texture tự sinh, đổi màu hiển thị → tuyến tính |

## 4. Trạng thái hiện tại (tóm tắt)
- **Mặc định vào game**: map núi, camera Quay quanh, mưa, hoàng hôn (17.6 h), 16 mm f/1.4, chất lượng Good, xe Mustang '67 Đen,
  tốc độ 25 km/h. Cinematic luôn bật (không có nút).
- **Chất lượng**: Low / Good (mặc định) / Ultra (cây chi tiết 200 m, địa hình/cỏ xa ×2). Điện thoại: Good giới hạn pixel ratio 1.25.
- **Tốc độ**: nút ⚡/phím F: 25 → 50 → 180 km/h. 180: blur rìa, không vệt dài; camera ngoài xe chuyển 16 mm.
- **Ống kính**: camera ngoài xe → 24 mm f/5.6; trong xe 16 mm f/16 (lấy nét taplo). Zoom 16–35 mm.
- **Xe**: chạy lệch tim đường `LANE_D = 1.5 m` (sát vạch vàng); xe ngược chiều 1.8 m. Mustang: sơn đen bóng (env ×0.4),
  nội thất đen bóng, ghế da nâu, vô lăng da đen lùi 7 cm. Đèn pha/đèn hậu quầng mềm (pha vàng ấm).
- **Trong xe**: mắt = xương đầu +0.15 m; góc chúc tự canh: mép dưới khung hình qua chỗ tay cầm (thấy nửa bàn tay), không cắt
  gương giữa. Gương giữa + 2 gương hông soi thật. Ánh sáng cabin từ màn hình taplo. Mưa: giọt nước/vệt chảy trên kính + gạt
  mưa; âm thanh ngoài −60% + mưa lộp độp trên kính.
- **Ánh sáng**: nắng gắt (mặt trời cao, trời quang) cân bằng kiểu máy ảnh: nắng ×2.3, ánh trời ×0.5, phơi sáng ×0.7.
  Đêm có trăng (đổ bóng), sương tự 60% khi chọn Ban đêm. Bão/gió lớn: không rung lắc (chỉ 180 km/h rung nhẹ).
- **Dừng xe**: xem `stopscene.js` ở trên; người áo đen; nhịp hút 3 s → 5 s → ngẫu nhiên 5–12 s; đi lanh quanh trong 10 m,
  chỉ trong làn mình + lề phải.
- **Điện thoại**: tự toàn màn hình khi nhấc tay ở lần chạm đầu (và chạm lại nếu bị thoát), nút ⛶ chỉ hiện trên điện thoại,
  khoá ngang (Android), gợi ý xoay ngang khi cầm dọc; iPhone: "Thêm vào MH chính" (manifest fullscreen/landscape).

## 5. Việc còn mở / cần chú ý
- Chưa kiểm chứng hiệu năng trên máy thật (gương + tia nắng + mưa kính tốn thêm GPU).
- Cảnh dừng xe: đoạn ▶️ quay lại xe mới thử bằng mô phỏng logic (máy ảo quá chậm để chạy trọn).
- Divo / xe tải sữa: không có gương hông, không có `steer` (tay giữ tư thế animation).

## 6. Nhật ký cập nhật
- **#1** — Tạo ROAD.md (tóm tắt toàn bộ dự án tới commit `bd6513f`: gương giữa 3/4 sát mép trên kính).
- **#2** — Gương chiếu hậu giữa đổi sang tỉ lệ 4:3 (25 × 18.75 cm, không bẹp nữa); `cockpitPitch` giữ trọn mép trên gương theo `mirror.size`.
- **#3** — Tiếng mưa đập kính (trong xe) nhỏ đi 60%: `glassG` 0.5 → 0.2 × lượng mưa (`audio.js`); tiếng rào rào trên mui giữ nguyên.
- **#4** — Gương chiếu hậu giữa thu nhỏ 50% (12.5 × 9.4 cm, vẫn 4:3), mép trên giữ nguyên chỗ (căn lề trên).
- **#5** — Tiếng mưa nhỏ thêm 60%: mưa ngoài `rainG` 0.2 → 0.08, mưa đập kính `glassG` 0.2 → 0.08, mui `roofG` 0.05 → 0.02.
- **#6** — Gương chiếu hậu giữa chuyển xuống taplo, đặt ngay bên phải màn hình taplo (cùng góc nghiêng, bỏ chân treo).
