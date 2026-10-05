# ROAD.md — sổ tay dự án Chill Drive

> Đọc file này trước khi sửa. Mỗi lần sửa xong: ghi 1 mục vào **Nhật ký** (cuối file) và tăng bộ đếm.
> Bộ đếm đủ 10 => đọc lại cả file, gộp nhật ký vào các mục "Trạng thái", xoá nhật ký cũ, đặt bộ đếm về 0.

**Bộ đếm cập nhật kể từ lần tóm tắt gần nhất: 7/10**

## 1. Tổng quan
- Game lái xe thư giãn 3D trên trình duyệt: three.js **0.160**, JS thuần, WebAudio. Mã nguồn `src/` → gộp bằng esbuild
  (`node build.mjs`) ra `docs/app.js` + `docs/style.css`; build tự gắn `?v=<hash>` vào `docs/index.html` (chống cache).
- Chạy trên GitHub Pages từ thư mục `/docs` của nhánh **`claude/focused-gates-gcpbj9`** (repo `mrgiangleai/chillguy-freedrive`).
  Sau khi push, Pages tự triển khai (~30 s); người chơi bấm Ctrl+F5.
- Thử cục bộ: `npx http-server docs -p 8080 -c-1`; Playwright + Chromium SwiftShader (`--use-angle=swiftshader`), rất chậm
  (~1 khung hình/giây) => **luôn thử ở chất lượng Low** (`localStorage['chilldrive.quality']='low'`), chạy từng trình duyệt một.
  Hook kiểm thử: `window.__app` (env, cars, rig, drive, state, stop, person, smoke, wing, audio, traffic, town, cows, waterfalls, ocean,
  terrain, toggleStop, nextMap…). Sau khi dời xe (`drive.s`) phải `terrain.prime(pos)`, không thì ô địa hình gần còn là ô thô.
  Máy chủ thử chạy nền tự tắt sau 2 giờ => bật lại. Script chụp tạm để ở scratchpad, không đưa file preview vào `docs/`.
  Máy chậm => môi trường (env map) chưa kịp chụp lại khi đổi giờ: gọi `__app.env.update(0.016, drive.pos); env._captureEnv()`.
- **Kiểm tra tự động** (node, không cần trình duyệt): `scripts/check-traffic.mjs`, `check-traffic-policy.mjs`, `check-steering.mjs`,
  `check-waterfalls.mjs`, `check-rear-glass.mjs [model.glb]`. Model tải lên nặng: nén bằng `npx @gltf-transform/cli@4 webp … --quality 82`
  rồi `meshopt` (giữ file gốc); sóng biển bake bằng `node scripts/bake-ocean.mjs`. **Fixture GUI** `scripts/*-preview.js` (giữ cảnh cố định để chụp):
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
| `config.js` | `CARS` (thông số từng xe, `mats` sửa vật liệu, `seatMesh`, `seat` (Mustang: `SEAT_67` drop 0.19 / forward 0.16 / hip / foot / recline 0.1), `steer`/`steerMesh`/`steerShift`, `lamps {head, tail}` tâm bóng đèn bên phải đo từ model), `MAPS`, `WEATHERS`, `TIMES`, `CAMERAS`, `FSTOPS`, `QUALITY` |
| `world.js` | Bầu trời (shader, mặt trời, **trăng**), mây, sương phủ trời, ánh sáng mặt trời/trăng (1 DirectionalLight đổ bóng), hemi, phơi sáng, thời tiết, sét, chụp env map (PMREM), cân bằng nắng/trời (`sunK`) |
| `post.js` | Hậu kỳ: xoá phông (CoC ống kính thật), bloom, **tia nắng** (god rays), **mưa trên kính** (RAIN_GLASS), ACES + chỉnh màu phim, grain, blur xuyên tâm 180 km/h |
| `camera.js` | Các chế độ camera, tiêu cự 16–35 mm (`fovFor`), nhìn quanh (giữ góc sau khi thả), `cockpitPitch` hook |
| `cars.js` | Tải + chuẩn hoá xe, vật liệu (`mats`, `envK`), bánh xe quay, cửa tài xế, đèn hậu (quầng mềm `softGlowTexture`), bóng gầm, đèn cabin (tại màn hình taplo), dò **kính trước/sau** (mask raster từ toàn bộ tam giác kính thật), **cần gạt** 3D (`wiperRig`), vô lăng da (`leatherMaterial`), dời vô lăng (`steerShift`), pivot vô lăng + `steerAngle` (tự lái theo cua) |
| `headlights.js` | `lampsFor(dim)` (tâm bóng đèn từ `dim.lamps` hoặc ước lượng). Rig đèn pha chung xe người chơi + NPC: SpotLight thật + quầng giảm theo hướng nhìn (`createHeadlights(group, tex, {spots, glows})`, `placeHeadlights`, `updateHeadlights(rig, root, cam, level)`) |
| `mirror.js` | Gương chiếu hậu giữa (render-to-texture, **tỉ lệ 4:3**, `GW/GH`; đặt bên phải màn hình taplo theo `screen`, không có que đỡ) |
| `wingmirrors.js` | 2 gương hông soi thật (phản chiếu phẳng, frustum lệch tâm, vẽ xen kẽ; `uTex` theo hệ xe) — chỉ khi ngồi trong xe, chỉ xe Mustang |
| `wipers.js` | Gạt mưa tự động (pha cos) + lượng nước trên kính trước/sau |
| `dashscreen.js` | Màn hình giải trí taplo (canvas, tông ấm, kích thước giảm 15%) + đèn hắt |
| `person.js` | Người lái (Quaternius, animation), cao `HEIGHT` 1.70 m, áo đen/quần jeans/giày vẽ bằng shader (`footShade`: giày sẫm khi ngồi lái), IK 2 xương `reach(side, target, pole)` (tay) + `reachLeg(side, target, pole, toe)` (chân), `recline(angle)` (ngả spine_01, không cộng dồn dù clip không có track), `headOffsetSit`/`hipOffsetSit` |
| `stopscene.js` | Cảnh dừng xe: dừng → bước ra, đóng cửa → đi lên trước xe → hút thuốc → **đi lanh quanh** (`_wander`, `_pickTarget`, `_look`) → quay lại xe; camera trung cảnh (cửa mở, bước ra) → từ `OUT_T` 2.25 s của cảnh bước ra: toàn cảnh quay quanh + `autoZoom` 5 s ra xa hết cỡ (đã bỏ cận cảnh); `zoomBy(f)` ở toàn cảnh: 16–35 mm + lùi thêm `back` ≤20 m (25 m / đơn vị ln) |
| `smoke.js` | Điếu thuốc (kẹp giữa ngón trỏ/giữa), đầu thuốc đỏ, lửa bật lửa, hạt khói (đầu điếu + nhả từ miệng) |
| `terrain.js`, `terrain-noise.js` | Địa hình quadtree nhiều mức, cây tấm, cụm đá (`rockGeometry(k, detail)` export), texture ảnh; `setView` (Ultra xa ×2); `heightAt` (đặt `_d` = khoảng cách tới đường); `hash2`, `vnoise` |
| `nature.js` | Cây/bụi/đá model chi tiết quanh camera (gần đổ bóng, xa không) |
| `reeds.js` | Cỏ lau / búi cỏ / cỏ đồi (instancing, gió, `setView`) |
| `road.js`, `scenery.js` | Đường vô tận (`at`, `heading`, `curvature(s)` đổi hướng có dấu trên 12 m), đoạn đường đất; mặt đường (nhựa sần, vũng nước, phản chiếu), cọc, đèn đường (cột `LAMP_H` 11.1 m; ánh sáng = `LAMP_LIGHTS` 3 SpotLight dùng chung, `updateLights(cam)` gán cột gần nhất, mờ theo khoảng cách cột kế tiếp; 140 × lamps (đã giảm 80%), nửa góc 1.2, penumbra 0.8, decay 0.6, tầm 80 m, chếch vào lòng đường), hộ lan |
| `town.js` | Map núi: thị trấn nhỏ + **thị trấn lớn** dưới thung lũng, đèn đường |
| `waterfalls.js` | Map núi: suối/thác (`waterfallSpec`, `waterfallGeometry` → nodes/water/wet/rocks/sprays; `Waterfalls.setMap`, `update(time, s, light, {d, v, dim, npcs, cam, audio})`). Dòng dò theo dốc (`trace`) + uốn lượn (`meander`); nước = MeshStandardMaterial + nhiễu theo **thời gian chảy `tau`** (không dùng `along - uTime*speed` => tránh sọc); lớp ướt = blend nhân màu; đá tảng dùng `rockGeometry(k, 2)` + `terrain.rockMat`; nước bắn bánh xe (`Splash`, Points kéo về camera 4%) |
| `carriage.js` | `loadCarriage(loader)` → hàm tạo xe ngựa `{group, dim 5.6×2.8, wheels: [], mixer, carriage: true}`; `CARRIAGE` (15–30 s, tối đa 2, 25–40 km/h). traffic.js sinh/điều khiển như NPC (`_spawnCarriage`, `carriageTimer`, không đèn, không tiếng lướt, không nhận chùm pha dùng chung) |
| `ocean.js` | Map Biển: `Ocean.setMap(on, level)`, `update(time, cam, road, s)`. Lưới vuông 1.5 m ±120 m (sóng nhô lên ≤ ~100 m) + vành 8 m tới ±400 m + khung phẳng tới 6 km, **nắn theo bước 1.5 m** (đỉnh cố định trong thế giới). `waveAt`: atlas `assets/tex/ocean-waves.png?v=WAVE_VER` (76 khung, 10×8; bake bằng `scripts/bake-ocean.mjs`, trộn chéo 24 khung cuối vào đầu), ô ×2 = 54.2 m, cao ×1.3, chu kỳ ≈ 9 s; 4 mẫu lệch nửa ô; nội suy khung **dời theo hướng trôi** `DRIFT` (−0.5, +2.25 px/khung); **2 lớp lệch nửa vòng**, lớp tới chỗ nối fade sin² còn 10%, lớp kia giữ 100%, chuẩn hoá giữ biên độ; bọt ven bờ theo `uT` liên tục; `textureLod` theo khoảng cách (`uLod`); độ sâu ven đê từ 27 điểm tim đường (nắn bước 12 m) |
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
  Danh sách chỉ còn **Mustang đen / Mazda RX Vision Sport** (phím V/nút 🚗), cùng dùng cho NPC.
  Đã xóa cấu hình, model và các script riêng của Divo/Milk Truck/EB110.
  Mazda: `assets/models/mazda-rx-vision.glb`, dài 4.8 m, rộng 2.114 m, cao 1.265 m, nội thất tay lái bên phải,
  bốn cụm `WHEEL_*`, tám mesh `MazdaSteering_*` quay theo `steerAngle` + IK tay.
  `scripts/prepare-mazda.mjs` giữ hình học/texture binary giống từng byte với upload gốc: **1.315.319 tam giác, 19.8 MB**;
  không simplify/meshopt thêm, chỉ chỉnh metadata tên mesh và vật liệu kính/đèn/sơn. Sơn `body` lấy từ JSON chú cung cấp,
  lưu `src/mazda-paint.json`: #54545f, metalness 1, roughness 0.364192, clearcoat 1, clearcoatRoughness 0, env intensity 1.
  File upload gốc Mazda vẫn giữ nguyên. Xe xanh cũ đã gỡ cấu hình, file gốc còn lưu.
  Tự bám xe trước và tự vượt xe cùng chiều khi làn bên kia trống ≥50 m sau xe bị vượt và xe đối diện không kịp tới.
  Vô lăng + hai tay tự xoay theo cua thật (nhìn trước 0.4 s, tối đa 12 m; atan(curvature × 2.7) × 14 + lái tay, ±0.55 rad,
  nội suy 8/s; dừng xe thì trả giữa). Mustang: sơn đen bóng (env ×0.4), nội thất đen bóng, ghế da nâu, vô lăng da đen
  `steerShift −0.09`, vành đo 0.153 m; cổ tay ở bán kính 0.178 m, sâu 0.065 m,
  lòng bàn tay/ngón cong ôm vành gần 9/3 giờ; hàng khớp ngón xoay theo tiếp tuyến vành (`steer.grip`). Đèn pha/hậu đặt đúng tâm bóng đèn của từng model (`lamps` trong config, đo từ model). Đèn pha rig chung: màu `0xffd6a0`, `85 × lamps`, tầm 110 m, góc 0.8 rad,
  penumbra 1, decay 0.55; quầng `0xffc477`, opacity `0.45 × lamps × hướng nhìn`, 2.835 × 1.785 m.
- **NPC**: mật độ thấp (ngược chiều tối đa 2, cùng chiều tối đa 1); tốc độ hành trình 50–200 km/h, vào cua 60% (ngưỡng
  0.0015/0.0012 rad/m, phanh trước cua), né/phanh 30 m. Đổi làn/né: đánh lái thật (thân xoay ≤ ~11°, né gấp ≤ ~19°, bánh trước bẻ).
  **Xe ngược chiều không vượt nhau**: gặp xe chậm thì bám sau, giảm tốc chờ (chỉ né sang làn kia khi xe người chơi chạy hẳn
  vào làn của nó); xe cùng chiều vẫn vượt xe người chơi theo luật 50 m. Đèn pha NPC = 24% xe người chơi (≈20.4 khi bật hết),
  đèn hậu ×0.6. Tiếng xe lướt qua to/nhỏ theo tốc độ tương đối, lệch trái/phải theo vị trí. Mô phỏng 20 phút ở 25/50/180 km/h: 0 chồng thân xe.
- **Ngồi lái (Mustang)**: model ghế đặt quá cao so với trần (đệm 0.60, trần 1.27 m) => cụm ghế hạ 19 cm (đáy đệm khuất dưới sàn
  0.362) + trượt lên trước 16 cm (`cars.js`, `seat.drop/forward`); xương chậu đặt tại `seat.hip` (stopscene.place), lưng ngả 0.1 rad,
  chân IK duỗi tới sàn (cổ chân `seat.foot`, mũi giày chếch lên 24°), tay IK giữ vô lăng (khuỷu gập ~77°). Đo: lún đệm 1.6 cm,
  không chạm trần (đỉnh đầu 1.254) / sàn / tựa lưng; mắt 1.21 m.
- **Trong xe**: mắt = xương đầu +0.15 m; góc chúc tự canh: chừa phần dưới vành để thấy cả bàn tay và cẳng tay, không cắt
  gương giữa. Gương giữa (4:3, cạnh màn hình taplo) + 2 gương hông soi thật. Ánh sáng cabin từ màn hình taplo; đã bỏ dải LED
  và quầng sáng sàn. Mưa: giọt nước/vệt chảy trên kính trước + gạt mưa; kính sau dùng mask từ mesh kính thật (không phủ
  ghế/khung). Hạt mưa ngoài trời bị loại trong thể tích xe; âm thanh ngoài −60% + mưa lộp độp trên kính.
- **Thời tiết / giờ**: "Trời trong" (đổi tên từ "Trời nắng"); đã bỏ mốc "Giờ vàng".
- **Ánh sáng**: nắng gắt cân bằng kiểu máy ảnh: nắng ×2.3, ánh trời ×0.5, phơi sáng ×0.7. Đêm có trăng (đổ bóng), sương tự
  60% khi chọn Ban đêm. Bão/gió lớn: không rung lắc (chỉ 180 km/h rung nhẹ).
- **Map Biển** (`sea`, model `docs/assets/models/ocean_scene_animated.glb` chỉ dùng để bake): địa hình `TP.sea` — đáy biển =
  `TP.seaLevel − 7` (+gợn), đảo ở xa (> 400 m) từ đỉnh sống núi; đường `low 7`; `TP.seaLevel` = (đường thấp nhất trong 120 km
  tính từ chỗ xe) − 3 m, tính khi đổi map. Camera không xuống dưới mặt nước. Chống giật: xem dòng `ocean.js` ở bảng trên.
  Máy ảo Low: biển ~590 ms/khung, núi ~647 (biển không nặng hơn).
- **Map núi**: vách núi bên trái lồi lõm (`terrain._height`: `rel` = sống đá / khe ridged ~42 m & ~16 m + khối ~85 m, từ u 2→18 m;
  gờ đá ngang mỗi 10 m; chân vách sau lề (HW+1.5→HW+8) cũng nhô/lõm, kẹp ≥ mặt đường; màu đỉnh: khe tối, sống sáng). Cao 15 m
  cách tim đường 10–19 m. Thị trấn nhỏ + lớn có đèn.
- **Suối/thác map núi** (`waterfalls.js`): mỗi ~560 m, rộng 2–5 m, lưu lượng 0.25–1; dòng dò theo dốc lên núi 230 m / xuống vực
  190 m, uốn lượn; vách dốc => bọt trắng thành vệt, thoải => nước trong gợn; chân thác bọt + bụi nước; tràn mỏng qua đường (mặt
  đường ướt) rồi đổ xuống vực; lớp đá ướt (blend nhân màu, không loá), đá tảng hai bờ; mặt cắt 13 điểm + nâng theo dốc để không
  chìm vào vách lồi lõm. Xe (cả NPC) lội qua: nước bắn bánh xe + tiếng "xoè"; tiếng suối to dần khi lại gần. Giữ 2–4 dòng quanh xe,
  dựng ≤1 dòng/khung (~30 ms). Lỗi đã gặp: quầng sáng do lớp ướt PBR; sọc do `along − uTime·speed` (=> `tau` tích phân);
  hạt nước bắn bị mặt đường che (=> kéo về camera 4%).
- **Đèn đường**: cột 11.1 m; ánh sáng = 3 SpotLight thật dùng chung (gán cột gần camera, mờ trước khi đổi cột; số đèn cố định),
  140 × lamps (đã giảm 80% theo yêu cầu), nón rộng chếch vào lòng đường.
- **Xe ngựa cổ tích** (`carriage.js`, model nén `assets/models/carriage.glb` 1.6 MB từ file gốc 11 MB): chạy trên đường như NPC
  (15–30 s/chiếc, tối đa 2, 25–40 km/h, ngựa phi theo tốc độ; phần lớn ngược chiều; không đèn/tiếng lướt). Mây bụi dưới vó là
  một phần model.
- **Dừng xe**: xem `stopscene.js`; người áo đen; bước ra khỏi xe là camera quay quanh + tự zoom ra xa hết cỡ trong 5 s (16 mm +
  lùi 20 m), không còn cận cảnh; zoom tay ở toàn cảnh qua `zoomBy` (wheel / pinch / phím ±). Nhịp hút 3 s → 5 s → ngẫu nhiên
  5–12 s; đi lanh quanh trong 10 m, chỉ trong làn mình + lề phải.
- **Điện thoại**: tự toàn màn hình khi nhấc tay ở lần chạm đầu (và chạm lại nếu bị thoát), nút ⛶ chỉ hiện trên điện thoại,
  khoá ngang (Android), gợi ý xoay ngang khi cầm dọc; iPhone: "Thêm vào MH chính" (manifest fullscreen/landscape).

## 5. Việc còn mở / cần chú ý
- **Chờ chú**: map mới từ model `landscape_forest__mountains.glb` — chú dặn để lần sau, **hỏi chú trước khi làm**.
- Chưa kiểm chứng hiệu năng trên máy thật (gương + tia nắng + mưa kính + thác tốn thêm GPU); chưa thử Good/Ultra trên máy ảo.
- Cảnh dừng xe: đoạn ▶️ quay lại xe mới thử bằng mô phỏng logic (máy ảo quá chậm để chạy trọn).
- Mazda: chưa có cửa mở/gương hông soi thật; chưa thử cảnh dừng xe trọn vẹn, GUI mưa kính sau hoặc Good/Ultra.
- Chưa xem trên máy thật: chuyển động sóng biển (đã sửa giật 2 lần), cảnh dừng xe mới (quay quanh + zoom 5 s), xe ngựa ban đêm,
  map Biển ban đêm / mưa / trong xe; vân sóng lặp còn thấy khi nhìn từ trên cao.
- Vài tảng đá terrain trông lơ lửng trên vách núi gần đường (s≈250) — chưa sửa.

## 6. Nhật ký cập nhật
- Đã tóm tắt tới commit `80923c3` + bản sửa giật biển lần 2 (commit ngay sau đó: nội suy khung bù chuyển động, 2 lớp sóng lệch
  nửa vòng mờ còn 30% ở chỗ nối, bọt theo thời gian liên tục, điểm tim đường nắn bước 12 m).

- **#1** — Người lái ngồi xuyên ghế: trước đây xương chậu 0.34 m (đệm 0.60) — mông, đùi ngập ~30 cm, chân thòng xuyên sàn ra gầm
  xe (thấy vệt quần jeans dưới cửa). Nâng thẳng thì đầu xuyên trần => hạ + trượt ghế, người 1.78 → 1.70 m, đặt theo xương chậu,
  ngả lưng, IK chân, giày sẫm khi ngồi (giày trắng lộ qua vô lăng trong góc nhìn trong xe). Đo bằng `seat-check` (scratchpad):
  đỉnh thân người / mặt đệm / tựa lưng / trần / sàn; ảnh `screenshots/seat-cutaway-before.jpg`, `seat-cutaway-after.jpg`,
  `seat-side-after.jpg`, `seat-cockpit-after.jpg`. Check scripts đạt. Chưa chạy trọn cảnh dừng xe (bước ra / vào) với ghế mới.

- **#2 — Bugatti EB110 (05/10/2026)**: đồng bộ Git tới `b267bf3`, dùng model mới chú tải lên. Tạo bản game riêng,
  bỏ đạo cụ trưng bày; tách 25.920 tam giác bánh thành bốn cụm (giữ hình học), chuẩn hoá đầu −Z, chạm đất và dài 4.4 m;
  thêm xe sơn xanh vào `CARS`, căn đèn theo mesh bóng đèn, chỉnh chỗ ngồi cho cabin thấp. Giữ file gốc và thông tin
  Alex.Ka. / CC BY-NC 4.0 trong metadata + credits README/game. Vô lăng/cửa chưa tách riêng nên không thêm animation giả.
  Sửa tiến trình tải: chỉ xe đang chọn cập nhật nút xe, tải NPC và yêu cầu chọn xe cũ không ghi đè nhãn.
  - `check-eb110.mjs`: kích thước/hướng/gầm, bốn pivot + bán kính bánh, vị trí pha/hậu trong biên mesh, cấu hình NPC,
    tiến trình tải nền và hai yêu cầu chọn xe chồng nhau đạt. `check-traffic.mjs`, `check-traffic-policy.mjs`,
    `check-steering.mjs`, build và diff check đạt.
  - Fixture GUI Low `scripts/eb110-preview.js`: model tải được, nút hiển thị Bugatti EB110 sau tải NPC; quan sát trước/sau,
    cabin và pha ban đêm, không có lỗi console. Ảnh `screenshots/eb110-{front,rear,cockpit,night}-verified.jpg`.
    Fixture giữ xe/camera để chụp, bản NPC thứ hai chỉ kiểm tra tải/render; chưa phải lượt chạy NPC ngẫu nhiên thực tế.

- **#3 — Mazda RX Vision Sport, gỡ cấu hình xe xanh (05/10/2026)**: đồng bộ upload `7fba0b3`, giữ file gốc Mazda;
  tạo bản game nhẹ bằng dequantize/weld/simplify/meshopt, giữ hình dáng và bốn cụm bánh sẵn có. Căn đầu −Z, gầm chạm đường,
  đèn theo mesh bóng đèn; cabin bên phải, chân IK, trục vô lăng đo từ vành thật, tám mesh xoay + hai tay dùng engine lái chung.
  Gỡ toàn bộ khai báo xe màu xanh cũ (vật liệu, kích thước, mắt, ghế, vô lăng, cửa, bánh, đèn); bỏ bộ chọn riêng trong fixture
  tay lái và tham số kiểm tra kính; các fixture NPC/đèn dùng Mustang đen. Giữ các GLB gốc và ảnh lịch sử.
  - `node scripts/check-mazda.mjs`: danh sách đúng năm xe hiện có, giải mã bản nén <300k tam giác, kích thước/hướng/gầm,
    bốn bánh và pivot trước, pha/hậu trong biên mesh, tám mesh vô lăng và tia tiếp xúc chạm vành thật ở hai bên đạt.
    Các check EB110/traffic/traffic-policy/steering/rear-glass Mustang, build/diff check và bundle fixture đã sửa đều đạt.
  - GUI Low `scripts/mazda-preview.js`: trước/sau/cabin/ban đêm, đánh lái khoảng ±21.7°, cổ tay tới điểm bám khoảng <0.1 mm,
    không có lỗi console. Ảnh `screenshots/mazda-{front,rear,cockpit,night}-verified.jpg`, `mazda-steering-{left,right}.jpg`.
    Fixture giữ vị trí và cấp curvature để quan sát động tác, không phải video lái liên tục; chưa thử Good/Ultra hoặc cảnh
    dừng xe/mưa kính sau trọn vẹn. Bộ đếm 3/10.
  - Kiểm tra tab game chính phát hiện đổi xe nhanh ngay khi khởi động có thể hủy lượt tải đầu, khiến đặt taplo trên
    `cars.current = null` và bỏ qua tải người lái. `chooseCar` dừng phần setup của lượt bị thay thế; tải người lái vẫn tiếp tục,
    chỉ đặt ghế khi có xe. `check-car-switch.mjs` kiểm tra lượt hủy trước/sau khi có xe và lượt thành công.
    Reload bản game chính, đổi xe liên tiếp rồi chọn Mazda ở Low: người lái có mặt và bám vô lăng, không phát sinh cảnh báo mới;
    ảnh `screenshots/mazda-cockpit-live.jpg`. Đã trả chất lượng Good của chú sau khi kiểm tra.

- **#4 — Căn điểm bám tay Mustang mặc định (05/10/2026)**: giữ model người và độ cong ngón của `Driving_Loop`.
  Đo vành thật thay bán kính ước lượng 0.17 → 0.153 m; cấu hình `steer.grip` riêng Mustang: radial 0.025,
  depth 0.065, align true. Cổ tay ở bán kính 0.178 thay 0.190 m; vành nằm giữa lòng bàn tay và ngón cong.
  `Person.faceGrip` nhận tiếp tuyến tùy chọn, xoay hàng khớp index/pinky theo vành; các xe khác giữ offset/hướng cũ.
  - `check-mustang-grip.mjs`: giải mã GLB Mustang/người thật, ray từ vùng lòng bàn tay chạm mesh vành ở năm góc
    −0.55…+0.55 rad; pose thực ở sáu trạng thái (có trả giữa), vành nằm giữa lòng bàn tay/ngón cong, hàng khớp
    theo tiếp tuyến, sai số cổ tay tối đa 0.016 mm. Tái hiện điểm bám cũ không chạm vành.
  - GUI Low `grip-preview.js`: thẳng/trái/phải, tiếp xúc vành 2/2; giữ xe/camera và cấp lái ngang để quan sát,
    không phải video chạy liên tục. Ảnh `screenshots/mustang-grip-{before,straight,left,right}.jpg`.
    Check steering/Mazda/car-switch, build và diff check đạt. Bộ đếm 4/10.

- **#5 — Khôi phục chi tiết Mazda, sơn theo JSON và gỡ ba xe (05/10/2026)**: bỏ bản giảm chi tiết/nén thêm,
  dựng lại Mazda từ upload gốc. Giữ 1.315.319 tam giác và toàn bộ BIN/mesh/accessor/texture byte-identical; file 19.8 MB.
  Chỉ chỉnh tên mesh vô lăng/vật liệu để dùng rig có sẵn. Trích riêng vật liệu sơn `body` từ JSON chú cung cấp,
  lưu thông số xám #54545f trong `src/mazda-paint.json`; không nhập scene/scripts/camera của JSON vào game.
  - Xóa Divo/Milk Truck/EB110 khỏi CARS và model assets, gỡ script chuẩn bị/preview/test EB110; chuyển các kiểm tra
    tiến trình tải vốn nằm trong check EB110 sang `check-car-switch.mjs`. CARS/NPC chỉ dùng Mustang và Mazda.
  - `check-mazda.mjs`: so byte BIN và cấu trúc hình học/texture với upload gốc, thông số sơn, kích thước, bánh, đèn,
    vô lăng và pool NPC hai xe đạt. Check Mustang grip/car-switch/traffic/traffic-policy/steering và build/diff check đạt.
  - GUI Low với bản đầy đủ chi tiết: trước/sau/cabin/ban đêm đạt, shader vật liệu thực đọc đúng
    #54545f / metalness 1 / roughness 0.364192 / clearcoat 1 / clearcoatRoughness 0 / env 1; không có lỗi console.
    Ảnh `screenshots/mazda-original-{front,rear,cockpit,night}.jpg`. Chưa kiểm chứng hiệu năng Good/Ultra của bản nặng.

- **#6 — Làm mượt vòng lặp sóng biển (05/10/2026)**: giảm đóng góp lớp chạm điểm đầu/cuối từ 30% xuống 10%; lớp sóng
  lệch nửa vòng vẫn ở 100% để che. Dùng fade sin² có độ dốc bằng 0 tại điểm nối và tiếp tục chuẩn hoá hai trọng số để không
  hụt biên độ. `check-ocean-loop.mjs` kiểm tra tuần hoàn/đạo hàm/biên trọng số và đo trực tiếp atlas: thay đổi trước/sau nối
  dưới 0.5% RMS. GUI Low khóa camera tại phase 0.999 / 0 / 0.001, không thấy cú nhảy; ảnh
  `screenshots/ocean-loop-{before,seam,after}.png`. Chưa đo hiệu năng Good/Ultra.

- **#7 — Sửa nguyên nhân giật atlas biển (05/10/2026)**: atlas ghi hàng từ trên xuống nhưng TextureLoader mặc định
  flipY=true; shader vì thế đọc đảo hàng, gồm bốn ô trống tại frame 6–9. Đặt flipY=false, giữ hướng bù trôi đã đo.
  Bake ô 128×128: dữ liệu 100×100 + viền lặp 14 px, căn ô theo mipmap để footprint tới LOD 2.5 không lẫn khung khác;
  atlas 1280×1024 / 2.61 MB, tăng phiên bản texture lên 4. Giữ chu kỳ, hình học và fade 10%.
  - Thay phép kiểm tra cũ bằng bilinear/trilinear, bù trôi và bốn mẫu lệch như shader; kiểm tra 76 khung có dữ liệu,
    padding byte-identical, footprint mip 0–3 nằm cùng ô và hướng bù trôi giảm sai số. Đo bước 60 Hz qua hai điểm nối:
    RMS LOD 0 = 0.00611 (thông thường 0.00611), LOD 1 = 0.00485 (0.00451), LOD 2.5 = 0.00267 (0.00267).
  - Đính chính mục #6: phép đo trước bỏ qua flipY/bù trôi/mipmap; kết luận đã mượt chưa đủ căn cứ.
  - GUI Low: fixture khoá s và camera theo thế giới, bọt dùng thời gian liên tục khi chạy và cố định khi so ảnh;
    render hết hai vòng (cycles=2.00), đọc flipY=false / atlas=1280×1024, console không có lỗi/cảnh báo.
    Ảnh `screenshots/ocean-atlas-fixed-{before,seam,after}.jpg` tại phase 0.999 / 0 / 0.001.
    Tab game chính đã reload hash mới, trả Mazda / Biển / Trời trong / Good. Chưa đo FPS Good/Ultra.
