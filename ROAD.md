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
  Hook kiểm thử: `window.__app` (env, cars, rig, drive, state, stop, person, smoke, wing, audio, traffic, town, cows, waterfalls, ocean,
  terrain, toggleStop, nextMap…). Sau khi dời xe (`drive.s`) phải `terrain.prime(pos)`, không thì ô địa hình gần còn là ô thô.
  Máy chủ thử chạy nền tự tắt sau 2 giờ => bật lại. Script chụp tạm để ở scratchpad, không đưa file preview vào `docs/`.
  Máy chậm => môi trường (env map) chưa kịp chụp lại khi đổi giờ: gọi `__app.env.update(0.016, drive.pos); env._captureEnv()`.
- **Kiểm tra tự động** (node, không cần trình duyệt): `scripts/check-traffic.mjs`, `check-traffic-policy.mjs`, `check-steering.mjs`,
  `check-stopscene.mjs`, `check-mustang-grip.mjs`, `check-mazda.mjs`, `check-chisa.mjs`, `check-car-switch.mjs`, `check-ocean-loop.mjs`,
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
| `stopscene.js` | Cảnh dừng xe: dừng → bước ra, đóng cửa → đi lên trước xe → hút thuốc → **đi lanh quanh** (`_wander`, `_pickTarget`, `_look`) → quay lại xe; từ `OUT_T` 2.25 s: camera quay quanh/bám người + `autoZoom` 5 s ra xa, dừng tự quay 2 s sau thao tác; `zoomBy(f)` 16–35 mm, khoảng cách 1–30 m; lúc đi về xe tự tiến dần tới 1 m |
| `smoke.js` | Điếu thuốc (kẹp giữa ngón trỏ/giữa), đầu thuốc đỏ, lửa bật lửa, hạt khói (đầu điếu + nhả từ miệng) |
| `terrain.js`, `terrain-noise.js` | Địa hình quadtree nhiều mức, cây tấm, cụm đá (`rockGeometry(k, detail)` export), texture ảnh; `setView` (Ultra xa ×2); `heightAt` (đặt `_d` = khoảng cách tới đường); `hash2`, `vnoise` |
| `nature.js` | Cây/bụi/đá model chi tiết quanh camera (gần đổ bóng, xa không) |
| `reeds.js` | Cỏ lau / búi cỏ / cỏ đồi (instancing, gió, `setView`) |
| `road.js`, `scenery.js` | Đường vô tận (`at`, `heading`, `curvature(s)` đổi hướng có dấu trên 12 m), đoạn đường đất; mặt đường (nhựa sần, vũng nước, phản chiếu), cọc, đèn đường (cột `LAMP_H` 11.1 m; ánh sáng = `LAMP_LIGHTS` 3 SpotLight dùng chung, `updateLights(cam)` gán cột gần nhất, mờ theo khoảng cách cột kế tiếp; 140 × lamps (đã giảm 80%), nửa góc 1.2, penumbra 0.8, decay 0.6, tầm 80 m, chếch vào lòng đường), hộ lan |
| `town.js` | Map núi: thị trấn nhỏ + **thị trấn lớn** dưới thung lũng, đèn đường |
| `waterfalls.js` | Map núi: suối/thác (`waterfallSpec`, `waterfallGeometry` → nodes/water/wet/rocks/sprays; `Waterfalls.setMap`, `update(time, s, light, {d, v, dim, npcs, cam, audio})`). Dòng dò theo dốc (`trace`) + uốn lượn (`meander`); nước = MeshStandardMaterial + nhiễu theo **thời gian chảy `tau`** (không dùng `along - uTime*speed` => tránh sọc); lớp ướt = blend nhân màu; đá tảng dùng `rockGeometry(k, 2)` + `terrain.rockMat`; nước bắn bánh xe (`Splash`, Points kéo về camera 4%) |
| `carriage.js` | `loadCarriage(loader)` → hàm tạo xe ngựa `{group, dim 5.6×2.8, wheels: [], mixer, carriage: true}`; `CARRIAGE` (15–30 s, tối đa 2, 25–40 km/h). traffic.js sinh/điều khiển như NPC (`_spawnCarriage`, `carriageTimer`, không đèn, không tiếng lướt, không nhận chùm pha dùng chung) |
| `ocean.js` | Map Biển: `Ocean.setMap(on, level)`, `update(time, cam, road, s)`. Lưới vuông 1.5 m ±120 m (sóng nhô lên ≤ ~100 m) + vành 8 m tới ±400 m + khung phẳng tới 6 km, **nắn theo bước 1.5 m** (đỉnh cố định trong thế giới). `waveAt`: atlas `assets/tex/ocean-waves.png?v=WAVE_VER` (76 khung, 10×8; bake bằng `scripts/bake-ocean.mjs`, trộn chéo 24 khung cuối vào đầu), ô ×2 = 54.2 m, cao ×1.3, chu kỳ ≈ 9 s; 4 mẫu lệch nửa ô; nội suy khung **dời theo hướng trôi** `DRIFT` (−0.5, +2.25 px/khung); **2 lớp lệch nửa vòng**, lớp tới chỗ nối fade sin² còn 10%, lớp kia giữ 100%, chuẩn hoá giữ biên độ; bọt ven bờ theo `uT` liên tục; `textureLod` theo khoảng cách (`uLod`); độ sâu ven đê từ 27 điểm tim đường (nắn bước 12 m) |
| `city.js` | Map Phố (kiểu phố Nhật): dựng theo **khối phố** n (giữa ngã tư `road.junction(n)` và n+1): đường ngang + vỉa hè + vạch (vằn qua đường, vạch dừng, tim vàng đôi, chia làn đứt/liền 30 m trước ngã tư, mũi tên), vỉa hè lát gạch + gạch dẫn đường vàng, nhà instancing (hộp + mái dốc) mặt tiền vẽ bằng shader (tầng trệt cửa hàng + biển chữ atlas, 4 kiểu cửa sổ, đèn đêm), biển dọc, máy bán nước, cột điện + dây võng. Nhà tới `DEPTH` 180 m, khối dựng ±1.2 km |
| `cityTraffic.js` | Map Phố: xe dựng bằng code (sedan, kei, taxi, van, buýt 10.5 m, xe máy + người lái), mỗi loại 1 InstancedMesh (aTint: sơn nhận instanceColor; aGloss: kính; aGlow: đèn × uLamp). 2 làn mỗi chiều, bám xe trước, dừng đèn đỏ (`city.stopAhead`), đổi làn cùng chiều để vượt; xe đường ngang ở ngã tư trong [s−60, s+330] theo pha đèn đường ngang. `ctrl.maxV` = bám xe trước cho xe mình. Xe NPC nặng (Mustang/Mazda) cất đi trong map Phố (`traffic.clearAll`) |
| `cityPeople.js` | Map Phố: người đi bộ dựng bằng code (1 InstancedMesh, chân tay đung đưa trong vertex shader theo `aWalk` = pha, đang đi). Toạ độ (s, u) theo đường chính. Đi vỉa hè (chờ đèn đường chính xanh mới qua đường ngang), chờ ở góc rồi băng qua vạch đường chính khi đèn đường ngang xanh còn ≥ 9 s. `spawn/goTo/remove` cho người kịch bản; `hitTest`, `crossingNear` |
| `cityIncident.js` | Map Phố: đâm xe / người => xe dừng khựng, nạn nhân ngã / xe đứng yên, camera Quay quanh; cảnh sát (xe đen trắng, đèn đỏ nhấp nháy) tới từ phía sau, cảnh sát đi tới cửa lái, người lái (ẩn model, hiện người dựng) theo về xe cảnh sát; xe cấp cứu tới từ phía trước làn ngược chiều, 2 nhân viên đưa nạn nhân đi; màn hình tối "bị đưa về đồn" rồi chạy tiếp (~30 s). Còi hụ (`audio.setSiren`: cảnh sát rú 650↔1350 Hz chu kỳ 4 s, cấp cứu "pi–po" 960/770 Hz) khi xe ưu tiên đang chạy, tắt khi đỗ, to dần khi lại gần |
| `cows.js` | Map đồi cỏ: đàn 5 bò sữa + hàng rào gỗ |
| `fireflies.js` | Đom đóm ban đêm |
| `traffic.js` | Spawn/pool/vẽ NPC: ngược chiều (10–25 s/chiếc, tối đa 2) + cùng chiều (25–60 s, tối đa 1, vào từ phía sau 80–110 m); pool 3 xe; NPC chỉ có quầng pha, chùm sáng thật = 1 cặp SpotLight dùng chung (`beam`, gắn NPC gần nhất ≤300 m, `_beam`); đèn `lamps × NPC_LAMP(0.24)`, đèn hậu ×0.6; thân xe xoay `yaw = atan(latV/v)` (≤0.35, nội suy 8/s), bánh trước `w.front` đánh lái `yaw × 1.8`; âm thanh lướt qua 1 lần/lượt; xuất `ctrl {lane, maxV}` cho xe người chơi |
| `traffic-policy.js` | Luật bám/vượt (`_decide`, `_follow`, `_canOvertake` tầm nhìn 50 m + thời gian xe đối diện tới, `_overtakeDanger`, `_sideClear`). Làn: chiều người chơi 1.5, ngược chiều −1.8. Cờ `noOvertake` (xe ngược chiều) |
| `traffic-ai.js` | `TRAFFIC` (mật độ), `stepTraffic`: né người/xe trong 30 m từ mép thân (+1.2 s × tốc độ xe lao tới), vận tốc ngang `latV` có gia tốc (3 m/s², né gấp 16) và trần 0.2 × v (né gấp 0.35 × v), giữ hướng né, phanh/dừng nếu bị chặn, chống xuyên vật cản; `trafficCurveSpeed` (vào cua 60%); `roadPosition` (chiếu người đi bộ về toạ độ đường) |
| `audio.js` | Nhạc lo-fi tự sinh, gió/mưa/lốp/động cơ/sấm; bus `outGain` (trong xe ×0.4 + lowpass), mưa: ngoài `rainG` 0.08, kính `glassG` 0.08, mui `roofG` 0.02 (× lượng mưa); `passBy(rel, pan, lat)` + `passDur(rel)` tiếng xe lướt qua theo tốc độ tương đối; `setSiren(kind, level, pan)` còi hụ; động cơ: hộp số ảo 6 số (`R` rpm/(m/s), đi êm lên số ≤ ~2200 rpm, đạp ga giữ tới ~5800), tần số nổ rpm/15, gầm nền + ống xả rào to dần theo vòng tua / tăng tốc (`load` = gia tốc/4) / tốc độ; `setWater(level, pan)` tiếng suối (buffer bọt khí tạo lần đầu), `splash(power)` xe lội nước |
| `particles.js`, `mist.js`, `reflection.js`, `textures.js`, `colorspace.js` | Mưa/tuyết, sương tầng thấp (`withMist`), phản chiếu vũng nước, texture tự sinh, đổi màu hiển thị → tuyến tính |

## 4. Trạng thái hiện tại (tóm tắt)
- **Mặc định vào game**: map núi, camera Quay quanh, mưa, hoàng hôn (17.6 h), 16 mm f/1.4, chất lượng Good, xe Mustang '67 Đen,
  tốc độ 25 km/h. Cinematic luôn bật (không có nút). Bấm Start: 3 s ở 180 km/h, giảm về 25 km/h rồi tự chuyển camera **Bên hông**
  (**tạm thời** `QUICK_OPENING = true` trong main.js: chỉ 0.5 s rồi về 25 km/h ngay — chú yêu cầu, bật lại khi chú bảo).
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
- **Cầm vô lăng**: điểm bám `steer.grip` (Mustang: vành 0.153 m, cổ tay bán kính 0.178, sâu 0.065, hàng khớp theo tiếp tuyến);
  cầm hờ `person.looseGrip(side, 0.15, surfAt, n)`: đốt ngón 2–3 nới 15% về góc nghỉ (45% thì ngón duỗi thẳng qua vành),
  ngón cái IK nằm dọc mặt vành phía người lái, hướng lên đỉnh, đầu ngón cách gốc 82% chiều dài (bấu nhẹ).
- **Nhân vật**: nút 🧑 đổi Người lái / Chisa (chỉ Mustang; Chisa retarget 52 xương từ rig Quaternius, ngồi thẳng hơn).
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
- **Dừng xe**: xem `stopscene.js`; người áo đen; bước ra khỏi xe là camera quay quanh người + tự zoom ra xa hết cỡ trong 5 s
  (16 mm + lùi 20 m). Rê/zoom dừng tự quay 2 s; zoom tay (wheel / pinch / phím ±) tiến sát tới 1 m. Khi đi về xe,
  camera bám người và tiến từ khoảng cách hiện tại tới 1 m đúng lúc tới cửa. Nhịp hút 8 s → 12 s → ngẫu nhiên 12–24 s;
  đi lanh quanh trong 10 m, chỉ trong làn mình + lề phải.
- **Map Phố** (`city`, 🏙️, đủ 4 bước: đường + nhà, đèn giao thông + phanh tay, giao thông dựng bằng code, người đi bộ + tai nạn).
  Lý do tự dựng xe/người: máy ảo chỉ tải được GitHub (Sketchfab/Poly Pizza/Quaternius bị chặn), xe miễn phí trên GitHub là kiểu
  đồ chơi (KayKit/Kenney) — chú chọn tự dựng. `road.setShape(true)` => đường thẳng theo đoạn 720 m, 70% đoạn
  bẻ hướng 0.25–0.75 rad trong 190 m đầu đoạn (bán kính ≥ ~130 m); 3 ngã tư/đoạn (~240 m) trên phần thẳng. Dốc: `TP.hill` 9
  (hLow phố = đồi ~260 m trong vùng mặt nạ ~900 m, dốc tới ~10%), đường cao theo hLow; nhà có chân móng (plinth, mã trong
  aInfo.z) khi đất dốc; phía trong khúc cua bỏ nhà xa hơn 0.55·R. Dãy mặt tiền: ~13% hẻm bậc thang (`_alley`), ~8% bãi đất trống
  (`_lot`). **Đèn giao thông** (`SIGNAL`, chu kỳ 46 s lệch pha theo ngã tư; `_phase(n)`, `mainLight(n)`, `stopAhead(s, dir, v)`):
  2 cột tay vươn cho đường chính (phía bên kia ngã tư) + 2 cột thấp cho đường ngang, mặt đèn xanh–vàng–đỏ trái→phải; màu
  thấu kính đổi mỗi khung (instanceColor). NPC dừng trước vạch (`traffic.stopFor`, phanh ≤ 3.2 m/s²). Xe mình KHÔNG tự dừng:
  giữ Space/B hoặc nút PHANH (−7.5 m/s²); đầu xe qua vạch dừng lúc đèn đỏ => toast "Vượt đèn đỏ! (lỗi thứ n)"; đi qua vạch
  khi có người đang băng qua trước mặt (|u − d| < 3.5) => "Không nhường người đi bộ!"; đâm => `cityIncident.js`. Camera không xuyên nhà: `rig.collide` → `city.collide` (tia xe→camera, OBB nhà, kéo vào tức thì, nhả từ từ). `ROAD.halfWidth` = 7.2 (4 làn: tâm làn ±1.75 / ±5.25,
  chia làn ±3.5), vỉa hè 4 m cao 0.2; đường ngang rộng 7 m + vỉa hè 2.5 m. Mặt đất theo hLow phố (phần lớn bằng), đồi xanh > 500 m.
  `terrain.js`/`scenery.js` đọc bề rộng đường lúc reset/setMap. Xe mình chạy làn ngoài phải (5.25), buông tay về làn gần nhất;
  vượt xe sang làn cùng chiều bên cạnh (`TrafficPolicy._other`). Camera bên hông 13 m, quay quanh 10 m. Không đom đóm.
  **Bảng 🚦 Giao thông** (nút `b-traffic`, chỉ hiện ở map Phố; `trafficTune` lưu trong `chilldrive.tuning.v1` mục `traffic`):
  tự giữ khoảng cách bật/tắt (tắt => xe mình không bám xe trước, đâm được để thử cảnh tai nạn), mật độ xe ×, tốc độ xe khác ×,
  số người đi bộ, độ dài pha đèn × (`city.clockRate`).
  Thử Low: ~50 xe + ~38 người quanh xe, xe máy/người qua ngã tư theo đèn, cảnh tai nạn chạy trọn ~30 s. Chưa xem trên máy thật;
  chưa có ảnh rõ cảnh sát/cấp cứu; người lái bị bắt là hình dựng (không phải model nhân vật).
- **Giao diện (HUD)**: bên trái là cột lối tắt hộp chữ thưa (`#quick .qbox`, cùng cỡ 136×38, chữ in hoa giãn .34em, phím
  trong ngoặc bên phải): Speed (F; hiện "50 km/h"/"180 km/h" khi đang ở cấp đó) · Pause (P; "Resume" khi đang đỗ) · Car (C/V) ·
  Camera (Q) · Driver (X) · Map (M) · Weather (R) · Time (T). Góc phải dưới: biểu tượng máy ảnh nét sáng (chụp ảnh, phím O) +
  hộp Setting (K) mở thanh nút cũ `#bar` thành cột dọc: camera/thời tiết/thời gian (mở bảng chỉnh), nhạc (N), chất lượng,
  🚦 giao thông (map Phố), ⛶ (điện thoại). Nút cũ fast/stop/car/character/map còn trong DOM nhưng ẩn (JS cũ vẫn cập nhật).
  Tất cả tự ẩn sau 5 s không thao tác (`body.idle`), rê chuột / chạm là hiện. ⓘ ở góc trên trái.
- **Chụp ảnh**: biểu tượng máy ảnh / phím O — chụp canvas ngay sau `post.render` (không cần preserveDrawingBuffer), tải PNG
  `chill-drive-<thời gian>.png`; điện thoại dùng bảng chia sẻ nếu có (lưu vào Ảnh).
- **Đom đóm** (không có ở map Phố): đoạn có đom đóm ~2/3 chiều dài đường (nhiễu `sst(0.38, 0.58)`), 90% ô 5 m có, 1–3 con/ô, ra tới ~16 m hai bên,
  cao 0.7–3.3 m, tối đa 200, nhìn trước 200 m. Điểm vẽ `0.25·uScale/z` (2.5–22 px), màu (9, 12, 2.6), lõi bán kính 0.11, quầng rộng nhoè mờ về 0 ở mép.
- **Biển (sửa atlas)**: atlas bake ô 128 px (100 + viền lặp 14 px, 1280×1024), `flipY=false` (trước bị đảo hàng => giật);
  lớp chạm điểm nối mờ còn 10% (sin²), lớp kia 100%.
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
- `scripts/check-traffic-policy.mjs` và `check-traffic.mjs` đang lỗi sẵn (lỗi cả trước khi thêm map Phố) — chưa xem nguyên nhân.
- Map Phố: camera Từ trên cao hay bị nhà chắn nên kéo sát xe; Mustang/Mazda NPC không chạy trong phố (thay bằng xe dựng code).

## 6. Nhật ký cập nhật
- Đã tóm tắt tới commit `8ce878f` + còi hụ (nút chụp ảnh, đom đóm nhỏ/sáng/thưa, đầu game Bên hông + rút 0.5 s, map Phố 4 bước:
  đường/nhà/hẻm/bãi trống/dốc/cua, camera không xuyên nhà, đèn giao thông + phanh + báo lỗi, xe dựng code, người đi bộ, tai nạn +
  cảnh sát/cấp cứu + còi hụ).

- **#1 — Tiếng xe to dần khi tăng tốc / chạy nhanh (09/10/2026)**: viết lại tiếng động cơ (xem dòng `audio.js`): 25 km/h êm
  (~1700 rpm), đạp ga gầm to, 180 km/h gầm + ống xả rào (to gấp ~4 lần trước).

- **#2 — Bảng cài đặt giao thông 🚦 (09/10/2026)**: xem mục Map Phố. Thử Low: bảng mở được, tắt "tự giữ khoảng cách" thì xe đâm
  xe đỗ phía trước và cảnh tai nạn bắt đầu.

- **#3 — Giao diện mới: cột lối tắt bên trái + Setting (09/10/2026)**: xem mục Giao diện. Đổi phím: C đổi xe, Q camera,
  X nhân vật, M map, N nhạc, K Setting, O chụp ảnh (README cập nhật). Thử Low máy tính 1280×720 + điện thoại ngang 844×390.
