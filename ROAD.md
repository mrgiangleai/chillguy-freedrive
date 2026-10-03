# ROAD.md — sổ tay dự án Chill Drive

> Đọc file này trước khi sửa. Mỗi lần sửa xong: ghi 1 mục vào **Nhật ký** (cuối file) và tăng bộ đếm.
> Bộ đếm đủ 10 => đọc lại cả file, gộp nhật ký vào các mục "Trạng thái", xoá nhật ký cũ, đặt bộ đếm về 0.

**Bộ đếm cập nhật kể từ lần tóm tắt gần nhất: 3/10**

## 1. Tổng quan
- Game lái xe thư giãn 3D trên trình duyệt: three.js **0.160**, JS thuần, WebAudio. Mã nguồn `src/` → gộp bằng esbuild
  (`node build.mjs`) ra `docs/app.js` + `docs/style.css`; build tự gắn `?v=<hash>` vào `docs/index.html` (chống cache).
- Chạy trên GitHub Pages từ thư mục `/docs` của nhánh **`claude/focused-gates-gcpbj9`** (repo `mrgiangleai/chillguy-freedrive`).
  Sau khi push, Pages tự triển khai (~30 s); người chơi bấm Ctrl+F5.
- Thử cục bộ: `npx http-server docs -p 8080 -c-1`; Playwright + Chromium SwiftShader (`--use-angle=swiftshader`), rất chậm
  (~1 khung hình/giây) => **luôn thử ở chất lượng Low** (`localStorage['chilldrive.quality']='low'`), chạy từng trình duyệt một.
  Hook kiểm thử: `window.__app` (env, cars, rig, drive, state, stop, person, smoke, wing, audio, traffic, town, cows, waterfalls, …).
  Máy chậm => môi trường (env map) chưa kịp chụp lại khi đổi giờ: gọi `__app.env.update(0.016, drive.pos); env._captureEnv()`.
- **Kiểm tra tự động** (node, không cần trình duyệt): `scripts/check-traffic.mjs`, `check-traffic-policy.mjs`, `check-steering.mjs`,
  `check-waterfalls.mjs`, `check-rear-glass.mjs [model.glb]`. **Fixture GUI** `scripts/*-preview.js` (giữ cảnh cố định để chụp):
  bundle bằng esbuild ra `docs/<tên>-check.js`, sao `docs/index.html` thành trang riêng đổi script sang bundle đó; chụp xong
  **xoá** các file tạm trong `docs/`.

## 2. Quy ước làm việc
- Trả lời tiếng Việt, xưng "cháu", gọi người dùng là "chú". Đẩy từng phần (chú không thích chờ lâu).
- Chỉ push lên `claude/focused-gates-gcpbj9`; không tạo PR khi chưa được yêu cầu.
- Commit kết thúc bằng 2 dòng: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` và
  `Claude-Session: https://claude.ai/code/session_01WP3tGtiy9zkx8o65PTcvkV`. Không ghi tên/mã model trong code/commit.
- Sửa xong: `node build.mjs`, chạy các `check-*.mjs` liên quan, chụp thử (Low), cập nhật README nếu đổi tính năng,
  cập nhật ROAD.md, commit, push. Có thể có người khác (Codex) cùng sửa nhánh: `git fetch` trước khi làm.

## 3. Bản đồ mã nguồn (`src/`)
| File | Nội dung chính |
|---|---|
| `main.js` | Ghép mọi thứ, vòng lặp `frame()`, giao diện/nút/phím, `state` mặc định, lái xe (`drive`: `home` làn tự chọn, `goal` tốc độ, nhận `traffic.ctrl`), cấp tốc độ `GEARS`, ống kính theo camera (`onCamChange`), `cockpitPitch()`, `gripWheel()` (IK tay theo `cars.steerAngle`), `stopLook()`, `rayParams()`, toàn màn hình điện thoại, chọn xe/map/chất lượng |
| `config.js` | `CARS` (thông số từng xe, `mats` sửa vật liệu, `seatMesh`, `steer`/`steerMesh`/`steerShift`, `lamps {head, tail}` tâm bóng đèn bên phải đo từ model), `MAPS`, `WEATHERS`, `TIMES`, `CAMERAS`, `FSTOPS`, `QUALITY` |
| `world.js` | Bầu trời (shader, mặt trời, **trăng**), mây, sương phủ trời, ánh sáng mặt trời/trăng (1 DirectionalLight đổ bóng), hemi, phơi sáng, thời tiết, sét, chụp env map (PMREM), cân bằng nắng/trời (`sunK`) |
| `post.js` | Hậu kỳ: xoá phông (CoC ống kính thật), bloom, **tia nắng** (god rays), **mưa trên kính** (RAIN_GLASS), ACES + chỉnh màu phim, grain, blur xuyên tâm 180 km/h |
| `camera.js` | Các chế độ camera, tiêu cự 16–35 mm (`fovFor`), nhìn quanh (giữ góc sau khi thả), `cockpitPitch` hook |
| `cars.js` | Tải + chuẩn hoá xe, vật liệu (`mats`, `envK`), bánh xe quay, cửa tài xế, đèn hậu (quầng mềm `softGlowTexture`), bóng gầm, đèn cabin (tại màn hình taplo), dò **kính trước/sau** (mask raster từ toàn bộ tam giác kính thật), **cần gạt** 3D (`wiperRig`), vô lăng da (`leatherMaterial`), dời vô lăng (`steerShift`), pivot vô lăng + `steerAngle` (tự lái theo cua) |
| `headlights.js` | `lampsFor(dim)` (tâm bóng đèn từ `dim.lamps` hoặc ước lượng). Rig đèn pha chung xe người chơi + NPC: SpotLight thật + quầng giảm theo hướng nhìn (`createHeadlights(group, tex, {spots, glows})`, `placeHeadlights`, `updateHeadlights(rig, root, cam, level)`) |
| `mirror.js` | Gương chiếu hậu giữa (render-to-texture, **tỉ lệ 4:3**, `GW/GH`; đặt bên phải màn hình taplo theo `screen`, không có que đỡ) |
| `wingmirrors.js` | 2 gương hông soi thật (phản chiếu phẳng, frustum lệch tâm, vẽ xen kẽ; `uTex` theo hệ xe) — chỉ khi ngồi trong xe, chỉ xe Mustang |
| `wipers.js` | Gạt mưa tự động (pha cos) + lượng nước trên kính trước/sau |
| `dashscreen.js` | Màn hình giải trí taplo (canvas, tông ấm, kích thước giảm 15%) + đèn hắt |
| `person.js` | Người lái (Quaternius, animation), áo đen/quần jeans vẽ bằng shader, IK 2 xương `reach(side, target, pole)`, xương `head`/`neck` |
| `stopscene.js` | Cảnh dừng xe: dừng → bước ra, đóng cửa → đi lên trước xe → hút thuốc → **đi lanh quanh** (`_wander`, `_pickTarget`, `_look`) → quay lại xe; camera trung cảnh → cận 50 mm (`CLOSE_START` 1.25 → `CLOSE_END` 2.85 s, đúng đoạn châm thuốc) → toàn cảnh quay quanh; `zoomBy(f)` ở toàn cảnh: 16–35 mm + lùi thêm `back` ≤20 m (25 m / đơn vị ln) |
| `smoke.js` | Điếu thuốc (kẹp giữa ngón trỏ/giữa), đầu thuốc đỏ, lửa bật lửa, hạt khói (đầu điếu + nhả từ miệng) |
| `terrain.js`, `terrain-noise.js` | Địa hình quadtree nhiều mức, cây tấm, cụm đá (`rockGeometry(k, detail)` export), texture ảnh; `setView` (Ultra xa ×2); `heightAt` (đặt `_d` = khoảng cách tới đường); `hash2`, `vnoise` |
| `nature.js` | Cây/bụi/đá model chi tiết quanh camera (gần đổ bóng, xa không) |
| `reeds.js` | Cỏ lau / búi cỏ / cỏ đồi (instancing, gió, `setView`) |
| `road.js`, `scenery.js` | Đường vô tận (`at`, `heading`, `curvature(s)` đổi hướng có dấu trên 12 m), đoạn đường đất; mặt đường (nhựa sần, vũng nước, phản chiếu), cọc, đèn đường (cột `LAMP_H` 11.1 m; ánh sáng = `LAMP_LIGHTS` 3 SpotLight dùng chung, `updateLights(cam)` gán cột gần nhất, mờ theo khoảng cách cột kế tiếp; 700 × lamps, nửa góc 1.2, penumbra 0.8, decay 0.6, tầm 80 m, chếch vào lòng đường), hộ lan |
| `town.js` | Map núi: thị trấn nhỏ + **thị trấn lớn** dưới thung lũng, đèn đường |
| `waterfalls.js` | Map núi: suối/thác (`waterfallSpec`, `waterfallGeometry` → nodes/water/wet/rocks/sprays; `Waterfalls.setMap`, `update(time, s, light, {d, v, dim, npcs, cam, audio})`). Dòng dò theo dốc (`trace`) + uốn lượn (`meander`); nước = MeshStandardMaterial + nhiễu theo **thời gian chảy `tau`** (không dùng `along - uTime*speed` => tránh sọc); lớp ướt = blend nhân màu; đá tảng dùng `rockGeometry(k, 2)` + `terrain.rockMat`; nước bắn bánh xe (`Splash`, Points kéo về camera 4%) |
| `cows.js` | Map đồi cỏ: đàn 5 bò sữa + hàng rào gỗ |
| `fireflies.js` | Đom đóm ban đêm |
| `traffic.js` | Spawn/pool/vẽ NPC: ngược chiều (10–25 s/chiếc, tối đa 2) + cùng chiều (25–60 s, tối đa 1, vào từ phía sau 80–110 m); pool 3 xe; NPC chỉ có quầng pha, chùm sáng thật = 1 cặp SpotLight dùng chung (`beam`, gắn NPC gần nhất ≤300 m, `_beam`); đèn `lamps × NPC_LAMP(0.24)`, đèn hậu ×0.6; thân xe xoay `yaw = atan(latV/v)` (≤0.35, nội suy 8/s), bánh trước `w.front` đánh lái `yaw × 1.8`; âm thanh lướt qua 1 lần/lượt; xuất `ctrl {lane, maxV}` cho xe người chơi |
| `traffic-policy.js` | Luật bám/vượt (`_decide`, `_follow`, `_canOvertake` tầm nhìn 50 m + thời gian xe đối diện tới, `_overtakeDanger`, `_sideClear`). Làn: chiều người chơi 1.5, ngược chiều −1.8. Cờ `noOvertake` (xe ngược chiều) |
| `traffic-ai.js` | `TRAFFIC` (mật độ), `stepTraffic`: né người/xe trong 30 m từ mép thân (+1.2 s × tốc độ xe lao tới), vận tốc ngang `latV` có gia tốc (3 m/s², né gấp 16) và trần 0.2 × v (né gấp 0.35 × v), giữ hướng né, phanh/dừng nếu bị chặn, chống xuyên vật cản; `trafficCurveSpeed` (vào cua 60%); `roadPosition` (chiếu người đi bộ về toạ độ đường) |
| `audio.js` | Nhạc lo-fi tự sinh, gió/mưa/lốp/động cơ/sấm; bus `outGain` (trong xe ×0.4 + lowpass), mưa: ngoài `rainG` 0.08, kính `glassG` 0.08, mui `roofG` 0.02 (× lượng mưa); `passBy(rel, pan, lat)` + `passDur(rel)` tiếng xe lướt qua theo tốc độ tương đối; `setWater(level, pan)` tiếng suối (buffer bọt khí tạo lần đầu), `splash(power)` xe lội nước |
| `particles.js`, `mist.js`, `reflection.js`, `textures.js`, `colorspace.js` | Mưa/tuyết, sương tầng thấp (`withMist`), phản chiếu vũng nước, texture tự sinh, đổi màu hiển thị → tuyến tính |

## 4. Trạng thái hiện tại (tóm tắt)
- **Mặc định vào game**: map núi, camera Quay quanh, mưa, hoàng hôn (17.6 h), 16 mm f/1.4, chất lượng Good, xe Mustang '67 Đen,
  tốc độ 25 km/h. Cinematic luôn bật (không có nút).
- **Chất lượng**: Low / Good (mặc định) / Ultra (cây chi tiết 200 m, địa hình/cỏ xa ×2). Điện thoại: Good giới hạn pixel ratio 1.25.
- **Tốc độ**: nút ⚡/phím F: 25 → 50 → 180 km/h. 180: blur rìa, không vệt dài; camera ngoài xe chuyển 16 mm.
- **Ống kính**: camera ngoài xe → 24 mm f/5.6; trong xe 16 mm f/16 (lấy nét taplo). Zoom 16–35 mm.
- **Xe người chơi**: tự lái, chạy lệch tim đường `LANE_D = 1.5 m` (sát vạch vàng); lái ngang tay đổi làn `drive.home`.
  Tự bám xe trước và tự vượt xe cùng chiều khi làn bên kia trống ≥50 m sau xe bị vượt và xe đối diện không kịp tới.
  Vô lăng + hai tay tự xoay theo cua thật (nhìn trước 0.4 s, tối đa 12 m; atan(curvature × 2.7) × 14 + lái tay, ±0.55 rad,
  nội suy 8/s; dừng xe thì trả giữa). Mustang: sơn đen bóng (env ×0.4), nội thất đen bóng, ghế da nâu, vô lăng da đen
  `steerShift −0.09`, tay cầm gần 9/3 giờ. Đèn pha rig chung: màu `0xffd6a0`, `85 × lamps`, tầm 110 m, góc 0.8 rad,
  penumbra 1, decay 0.55; quầng `0xffc477`, opacity `0.45 × lamps × hướng nhìn`, 2.835 × 1.785 m.
- **NPC**: mật độ thấp (ngược chiều tối đa 2, cùng chiều tối đa 1); tốc độ hành trình 50–200 km/h, vào cua 60% (ngưỡng
  0.0015/0.0012 rad/m, phanh trước cua), né/phanh 30 m. Đổi làn/né: đánh lái thật (thân xoay ≤ ~11°, né gấp ≤ ~19°, bánh trước bẻ).
  **Xe ngược chiều không vượt nhau**: gặp xe chậm thì bám sau, giảm tốc chờ (chỉ né sang làn kia khi xe người chơi chạy hẳn
  vào làn của nó); xe cùng chiều vẫn vượt xe người chơi theo luật 50 m. Đèn pha NPC = 24% xe người chơi (≈20.4 khi bật hết),
  đèn hậu ×0.6. Tiếng xe lướt qua to/nhỏ theo tốc độ tương đối, lệch trái/phải theo vị trí. Mô phỏng 20 phút ở 25/50/180 km/h: 0 chồng thân xe.
- **Trong xe**: mắt = xương đầu +0.15 m; góc chúc tự canh: chừa phần dưới vành để thấy cả bàn tay và cẳng tay, không cắt
  gương giữa. Gương giữa (4:3, cạnh màn hình taplo) + 2 gương hông soi thật. Ánh sáng cabin từ màn hình taplo; đã bỏ dải LED
  và quầng sáng sàn. Mưa: giọt nước/vệt chảy trên kính trước + gạt mưa; kính sau dùng mask từ mesh kính thật (không phủ
  ghế/khung). Hạt mưa ngoài trời bị loại trong thể tích xe; âm thanh ngoài −60% + mưa lộp độp trên kính.
- **Ánh sáng**: nắng gắt cân bằng kiểu máy ảnh: nắng ×2.3, ánh trời ×0.5, phơi sáng ×0.7. Đêm có trăng (đổ bóng), sương tự
  60% khi chọn Ban đêm. Bão/gió lớn: không rung lắc (chỉ 180 km/h rung nhẹ).
- **Map núi**: thị trấn nhỏ + lớn có đèn; suối/thác qua đường (`waterfalls.js`, rộng 2–5 m, lưu lượng 0.25–1, giữ 2–4 dòng
  quanh xe, dựng tối đa 1 dòng/khung hình ~20 ms, dispose khi rời vùng/đổi map). Xem nhật ký #1.
- **Dừng xe**: xem `stopscene.js`; người áo đen; cận cảnh chỉ ~1.5 s lúc châm thuốc rồi ra toàn cảnh (zoom + lùi 20 m);
  nhịp hút 3 s → 5 s → ngẫu nhiên 5–12 s; đi lanh quanh trong 10 m,
  chỉ trong làn mình + lề phải.
- **Điện thoại**: tự toàn màn hình khi nhấc tay ở lần chạm đầu (và chạm lại nếu bị thoát), nút ⛶ chỉ hiện trên điện thoại,
  khoá ngang (Android), gợi ý xoay ngang khi cầm dọc; iPhone: "Thêm vào MH chính" (manifest fullscreen/landscape).

## 5. Việc còn mở / cần chú ý
- Chưa kiểm chứng hiệu năng trên máy thật (gương + tia nắng + mưa kính + thác tốn thêm GPU); chưa thử Good/Ultra trên máy ảo.
- Cảnh dừng xe: đoạn ▶️ quay lại xe mới thử bằng mô phỏng logic (máy ảo quá chậm để chạy trọn).
- Divo / xe tải sữa: không có gương hông, không có `steer` (tay giữ tư thế animation).
- Mưa kính sau trên Mustang xanh mới kiểm bằng script, chưa xem GUI.

## 6. Nhật ký cập nhật
- Đã tóm tắt tới commit `925dc91` (đèn pha NPC −60%, xe ngược chiều không vượt nhau).

- **#1** — Làm lại suối/thác map núi cho tự nhiên (bản cũ: dải xanh trắng đều, sọc chéo, nằm như vạch sơn trên đường).
  - Hình: dòng dò theo dốc địa hình từ mép đường lên núi 230 m / xuống vực 190 m, quán tính + lệch ≤35° so với pháp tuyến
    đường, uốn lượn theo nhiễu; rộng hẹp không đều, chân thác toả rộng, trên đường loe thành lớp tràn (0.6 × width mỗi bên);
    đoạn trên cao lúc ẩn lúc hiện. Mặt cắt 9 điểm lấy độ cao thật => nước bám địa hình, trên đường cao hơn nhựa 3.5–5.5 cm.
  - Shader nước: vách dốc => bọt trắng thành vệt dài + tách nhánh; thoải => nước trong, gợn (bump theo đạo hàm màn hình), vệt bọt
    mảnh; xoáy bọt ở chỗ dốc giảm đột ngột (chân thác), trên đường bọt tan nhanh. Mép nham nhở. Bọt albedo ~0.62 để không kích
    bloom (ngưỡng 0.92). polygonOffset −6/−12 (mặt đường −2/−2) + kéo về camera 0.5% khoảng cách.
  - Lỗi đã gặp: (1) quầng sáng quanh thác = lớp đá ướt PBR phản chiếu trời => đổi sang blend nhân màu; (2) sọc ngang ở chân
    thác = `along - uTime*speed` khi speed đổi theo dốc => dùng `tau` tích phân; (3) hạt nước bắn bị mặt đường che => kéo 4%.
  - Đá tảng hai bờ ~90/dòng (dày gần đường, ít trên vách dốc), màu đá ướt; bụi nước chân thác + mép vực (sprite phồng/tan).
  - Âm thanh: tiếng suối (nhiễu nâu + bọt khí, lệch trái/phải theo camera), tiếng "xoè" khi bánh xe vào lớp nước.
  - `node scripts/check-waterfalls.mjs` (viết lại): 1000 seed; 10 dòng: lưới hữu hạn, `tau` tăng dần, nước trên nhựa/địa hình
    (0/2800 mẫu thấp), đá không nằm trên đường, khôi phục `iCar`, chỉ bật ở map núi. Các check khác vẫn đạt.
  - Ảnh Low: `screenshots/waterfall-road-verified.jpg`, `waterfall-base-verified.jpg`, `waterfall-cliff-verified.jpg`,
    `waterfall-overview-verified.jpg`, `waterfall-crossing-verified.jpg`, `waterfall-splash-verified.jpg`. Script chụp tạm ở scratchpad (giữ xe/camera cố định),
    không thêm file preview vào docs. Chưa nghe thử âm thanh thật (máy ảo không có loa) và chưa đo FPS máy thật.
  - Thấy thêm (chưa sửa): vài **tảng đá của terrain lơ lửng** trên vách núi gần đường (cục đen to ở s≈250).

- **#2** — Giảm lag xe + sửa vùng sáng đèn đường trên dốc + NPC đánh lái thật.
  - Lag: mỗi NPC từng có 2 SpotLight; NPC hiện/ẩn làm đổi số đèn => three.js biên dịch lại shader mọi vật liệu (khựng) và
    mỗi pixel phải tính thêm đèn. Nay NPC chỉ có quầng; 1 cặp SpotLight dùng chung luôn trong cảnh (tắt = intensity 0) gắn
    vào NPC gần nhất. Mật độ: ngược chiều 4–10 s/tối đa 4 → 10–25 s/tối đa 2; cùng chiều 10–30 s/tối đa 2 → 25–60 s/tối đa 1.
  - Đèn đường: tấm phẳng 24 × 28 m đặt ở độ cao chân cột => ở dốc 6–7% (vd s≈1326 map núi) nửa tấm chìm dưới mặt đường,
    nửa lơ lửng, mép thẳng cắt vào vách/vực. Nay là lưới bám mặt đường, chỉ phủ mặt đường + lề phẳng, mờ dần ở mép.
  - Đổi làn: trước đây `d` đổi đều 2.2–8 m/s, thân xe luôn song song tim đường (trượt ngang như robot). Nay có vận tốc ngang
    tăng/giảm có gia tốc, trần theo tốc độ tiến; thân xe xoay theo hướng chạy thực và bánh trước bẻ lái. Xe lao tới được
    thấy sớm hơn 1.2 s theo tốc độ của nó để kịp đánh lái từ từ.
  - `check-traffic.mjs`/`check-traffic-policy.mjs` cập nhật: mật độ mới, pool 3, NPC không có SpotLight riêng, chùm dùng chung
    = 20.4, xe lao tới được phát hiện sớm 1.2 s; các kịch bản né cũ (200 km/h, xe 180 km/h lao tới…) vẫn không va chạm.
    Mô phỏng 20 phút (25/50/180 km/h): 0 chồng thân xe, tối đa 3 NPC cùng lúc, yaw tối đa ~19°.
  - Ảnh Low: `screenshots/streetlight-slope-verified.jpg` (đêm, dốc 7% s≈1326), `npc-lane-change-verified.jpg` (fixture giữ
    NPC giữa lúc đổi làn: thân xoay −7.8°, bánh trước 14°). Chưa đo FPS máy thật.

- **#3** — Đổi "Trời nắng" → "Trời trong"; bỏ mốc "Giờ vàng". Đèn xe đúng tâm bóng đèn: đo từ model (Mustang: mesh `Headlight_emissive`/
  `TailLight_emissive`; Divo/Milk Truck: mesh gộp nên đo bằng ảnh chiếu thẳng có lưới + tia tìm mặt kính) => `lamps` trong config,
  `placeHeadlights` + quầng hậu xe người chơi/NPC dùng chung. Đèn đường: cột ×1.5 (11.1 m), bỏ texture vùng sáng, thay bằng
  3 SpotLight thật dùng chung (số đèn cố định). Cảnh dừng: cận cảnh châm thuốc ~1.5 s rồi ra toàn cảnh; zoom ở toàn cảnh
  16 mm → lùi thêm 20 m, zoom vào thì tiến lại 20 m trước rồi mới tăng tới 35 mm (wheel / pinch / phím ± qua `zoomBy` trong main).
  - Check scripts đạt; logic zoom kiểm bằng script (26→16 mm→+20 m; vào: 20 m→0 rồi 16→35 mm). Ảnh đèn đường đêm Low (dốc s≈1206)
    đã xem. **Chưa chạy thử cảnh dừng xe trên máy ảo** (chú dừng lượt thử để chuyển việc khác).
