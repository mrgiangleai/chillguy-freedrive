# ROAD.md — sổ tay dự án Chill Drive

> Đọc file này trước khi sửa. Mỗi lần sửa xong: ghi 1 mục vào **Nhật ký** (cuối file) và tăng bộ đếm.
> Bộ đếm đủ 10 => đọc lại cả file, gộp nhật ký vào các mục "Trạng thái", xoá nhật ký cũ, đặt bộ đếm về 0.

**Bộ đếm cập nhật kể từ lần tóm tắt gần nhất: 6/10**

## 1. Tổng quan
- Game lái xe thư giãn 3D trên trình duyệt: three.js **0.160**, JS thuần, WebAudio. Mã nguồn `src/` → gộp bằng esbuild
  (`node build.mjs`; `NOMIN=1` để không nén khi cần đọc lỗi) ra `docs/app.js` + `docs/style.css`; build tự gắn `?v=<hash>` vào `docs/index.html` (chống cache).
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
| `avenue.js` | Map Đại lộ (nút giao `ic(k)/_buildIC/carve`, trạm thu phí `_buildToll/updateToll`, atlas biển `signTexture`): dựng theo đoạn 200 m quanh xe (±1.4 km / 300 m sau): vạch kẻ (vàng liền sát dải phân cách, trắng đứt 6/9 m giữa làn, trắng liền mép ngoài), dải phân cách bê tông "jersey" kéo theo mặt cắt. Đường: `road.setShape('avenue')` (cong rất thoải), `AVENUE` trong road.js. Xe: `cityTraffic.setMode('avenue')` |
| `minimap.js` | Bản đồ tròn (chỉ chế độ Drive): canvas 2D vẽ từ dữ liệu thật — `road.pts`, khối nhà + đường ngang Phố, nút giao / nhánh / đường gom / nhà / trạm thu phí Đại lộ, xe khác (chấm), xe mình (mũi tên xanh). Thu nhỏ 150 px (điện thoại 104) góc phải giữa, bám xe, hướng xe lên trên, vẽ ~8 lần/s; bấm vào: phóng to giữa màn hình (78vmin), Bắc lên trên, kéo = pan, lăn chuột / chụm 2 ngón = zoom (0.02–4 px/m), ◎ về xe, × / Esc / bấm ngoài để thu nhỏ; thước tỉ lệ |
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
- **Dừng xe**: chân chạm đất thật (`stop._ground`: bàn chân thấp hơn so với `stop.groundAt` từ main — mặt đường +5 cm, vỉa hè
  phố +20 cm, còn lại địa hình; nâng/hạ cả người ≤ 4 cm/khung; trước đây lún ~7 cm). Xem `stopscene.js`; người áo đen; bước ra khỏi xe là camera quay quanh người + tự zoom ra xa hết cỡ trong 5 s
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
  kiểu Việt Nam: cột ở góc vỉa hè bên phải PHÍA XE TỚI, ngay vạch dừng (đường chính a = ∓(stopA − 0.35): tay vươn + đầu đèn
  phụ trên cột cao 3 m; đường ngang: cột thấp ở góc (su·(CW+1), su·(HW+0.8))), mặt đèn xanh–vàng–đỏ trái→phải. Đèn đi bộ nhỏ
  (`pedHeadGeo` 0.34×0.62, đỏ trên / xanh dưới, thấu kính ×0.62, quầng `aSz` 0.55) gắn cùng cột cao 2.45 m, quay sang phía
  bên kia vạch qua đường; xanh khi hướng kia đỏ, nhấp nháy 4 s cuối (`_lensOn`, kiểu 2/3). Biển vạch qua đường lùi về a = ∓14.2.
  Màu thấu kính đổi mỗi khung (instanceColor). NPC dừng trước vạch (`traffic.stopFor`, phanh ≤ 3.2 m/s²). Xe mình KHÔNG tự dừng:
  giữ Space/B hoặc hộp "Space" giữa đáy (−7.5 m/s²); đầu xe qua vạch dừng lúc đèn đỏ => toast "Vượt đèn đỏ! (lỗi thứ n)"; đi qua vạch
  khi có người đang băng qua trước mặt (|u − d| < 3.5) => "Không nhường người đi bộ!"; đâm => `cityIncident.js`. Camera không xuyên nhà: `rig.collide` → `city.collide` (tia xe→camera, OBB nhà, kéo vào tức thì, nhả từ từ). `ROAD.halfWidth` = 7.2 (4 làn: tâm làn ±1.75 / ±5.25,
  chia làn ±3.5), vỉa hè 4 m cao 0.2; đường ngang rộng 7 m + vỉa hè 2.5 m. Mặt đất theo hLow phố (phần lớn bằng), đồi xanh > 500 m.
  `terrain.js`/`scenery.js` đọc bề rộng đường lúc reset/setMap. Xe mình chạy làn ngoài phải (5.25), buông tay về làn gần nhất;
  vượt xe sang làn cùng chiều bên cạnh (`TrafficPolicy._other`). Camera bên hông 13 m, quay quanh 10 m. Không đom đóm.
  **Bảng 🚦 Giao thông** (nút `b-traffic`, chỉ hiện ở map Phố; `trafficTune` lưu trong `chilldrive.tuning.v1` mục `traffic`):
  nút bấm Bật/Tắt (`addToggle`, không thả danh sách): tự giữ khoảng cách (tắt => xe mình không bám xe trước, đâm được để thử
  cảnh tai nạn), tự động dừng xe khi đèn đỏ (`trafficTune.redStop`, mặc định tắt: giới hạn tốc độ √(2·3.5·(khoảng cách vạch − 1.2)),
  vàng chỉ dừng khi kịp phanh êm), thêm xe của chú; mật độ xe × (0.05–2.5;
  giảm thì bớt ngay xe đang chạy, xe đường ngang thưa theo), tốc độ xe khác ×,
  số người đi bộ, độ dài pha đèn × (`city.clockRate`). **Giao thông ngẫu nhiên** (`trafficTune.auto`, mặc định bật): vào phố
  luôn thấp 5 s (mật độ 0.4, tốc độ 0.4, 20 người — `TRAFFIC_START`), rồi đổi ngẫu nhiên 3 mức Thưa / Vừa / Đông mỗi 60–120 s
  (`trafficLevel` ghi đè số chỉnh tay, toast "Giao thông · …"); kéo thanh mật độ / tốc độ / số người => tắt ngẫu nhiên.
  Xe mình đứng yên > 7 s (không phải chờ đèn đỏ trong 25 m) => xe kẹt sau cùng làn (≤ 30 m, `stuckBehind`) bấm còi
  (`audio.horn`, 2 tiếng bíp 415/498 Hz, mỗi 2–3.5 s) + nháy đèn pha (`aHonk` theo từng xe) + toast. Vào map Phố / bắt đầu lại sau
  khi bị bắt: camera Sau xe; bị bắt xong xe về làn ngoài phải 5.25, dọn xe/người chồng chỗ, 3 s không tính va chạm.
  Xe cảnh sát / cấp cứu có đèn như xe mình (`cityTraffic._emSetup/_emUpdate`, tạo 1 lần khi vào phố): quầng đèn pha (cảnh sát
  thêm 2 SpotLight thật), quầng đèn hiệu trên nóc nhấp nháy đổi màu (cảnh sát đỏ/xanh, cấp cứu đỏ/trắng) + 1 PointLight hắt màu.
  Thời tiết `auto` mới (WEATHERS, `autoWeather`: đổi ngẫu nhiên 2.5–5 phút); vào phố: thời tiết + giờ Tự động tới khi chú tự đổi.
  Ngã tư: 4 đèn đường góc (tay đòn chĩa vào tâm; `city.lamps()` → `scenery.extraLamps` để 3 SpotLight dùng chung gán được),
  quầng sáng thấu kính đèn giao thông (Points to theo khoảng cách 16–130 px, chỉ thấy từ phía mặt đèn; lõi nhỏ dịu + quầng màu rộng,
  kênh sáng nhất kẹp ≤ 1 để không cháy trắng; màu thấu kính bão hoà hơn, hệ số sáng 1.5–2.8), biển báo atlas 4 ô
  (vạch qua đường xanh, "止まれ" trên đường ngang, tốc độ 40, cấm đỗ). Cài đặt thời tiết / giờ / camera của phố tách riêng
  (`scopes`, lưu `chilldrive.city`; mặc định Tự động / Tự động / Sau xe); ra khỏi phố trả lại bộ của map khác.
  Mỗi lần chuyển đổi (camera, xe, map, thời tiết, giờ, nhân vật, tốc độ, nhạc, chất lượng, dừng) có toast ngắn 1.6 s (`say`).
  **Map Đại lộ** (`avenue`, 🛣️, nhóm Drive cùng Phố; M trong Drive: Phố ↔ Đại lộ): cao tốc 6 làn (`AVENUE`: tâm làn ±2.25 / ±5.75 /
  ±9.25, dải phân cách ±0.5, mép làn ±11, lề khẩn cấp tới ±13), đường cong rất thoải (bán kính ≥ ~2 km), địa hình `avenue` (đồi cỏ
  thấp, cỏ cao `meadow` hai bên), hộ lan thép 2 bên, đèn đường 2 bên xen kẽ. Xe: `cityTraffic` chế độ avenue (3 làn mỗi chiều, tốc
  độ ×2, làn trong nhanh ×1.12 / làn ngoài ×0.84, không xe máy, không ngã tư; vượt sang làn bên cạnh ưu tiên làn trong). Xe mình
  làn giữa 5.75, không qua dải phân cách; cấp tốc độ `AV_GEARS` 80 / 100 / 180 km/h, chỉnh tay tới 120. Bộ cài đặt riêng
  `chilldrive.avenue` (lần đầu lấy bộ của Phố, `SCOPED`); dùng chung bảng 🚦 + giao thông ngẫu nhiên. Cảnh tai nạn dùng
  `cityTraffic.lanes`. **Nút giao** (`IC` trong road.js: mỗi 3 km, nút đầu ở s = 1500): cao tốc nhô lên 7.5 m (`avHump`, đỉnh
  phẳng ±40 m, dốc tới ±260 m) thành cầu vượt (bản mặt cầu + thành bê tông ±21 m, 2 hàng 3 trụ + xà mũ) qua đường ngang 2 làn
  (±4.6 m, vạch vàng đôi, ±420 m, bằng nền ±60 m rồi theo địa hình) chui dưới cầu. Mỗi chiều 1 cặp nhánh kiểu kim cương
  (`rampU(t)`: làn giảm tốc từ làn ngoài t = −480…−400, lệch dần ra |u| = 45 ở đường ngang, nhánh vào đối xứng sau cầu), đi ở cao
  độ nền (`road.baseY`). Địa hình: `terrain.extraCarve` → `avenue.carve` (kênh đường ngang mái 45° dưới cầu + nền nhánh); cỏ:
  `reeds` `uExcl` 16 đoạn loại cỏ (`avenue.excl`); hộ lan hở ở 300 < |t| < 495 (`scenery.railGap`). Xe mình: ở t −490…−390 lái
  sang phải quá vạch mép ngoài => `drive.ramp` (vị trí ngang lướt theo rampU, cao độ nền), hết nhánh tự về làn ngoài + toast.
  NPC làn ngoài 22% rẽ nhánh (≤ 50 km/h trên nhánh); xe đường ngang (`c.xr`, ±420 m, tốc độ phố) nhường xe đang qua chỗ nhánh
  cắt đường ngang; dưới cầu (|u| < 16) không tính va chạm. **Biển báo** (atlas `signTexture` 4×4 ô: biển chỉ dẫn xanh lá chữ
  trắng kiểu VN + biển tròn 120 / 100 / 60 / tối thiểu 60; phản quang sáng lên ban đêm `setLamps`): mỗi chiều giàn biển "LỐI RA
  … 1 km" (t = ∓1000) và "500 m" (∓500) trên cột + xà thép, biển "LỐI RA" ở mũi tách nhánh, biển tốc độ cột phải (120 / 100 / 120),
  "60" trên nhánh ra, biển "CAO TỐC tối đa 120 / tối thiểu 60" sau chỗ nhập. Mũi tên sơn trên làn ở t = ∓760 / 680 / 600 (làn ngoài
  thẳng + rẽ phải), vạch chéo vùng tách / nhập nhánh. **Đường gom + nhà**: mỗi nút giao 1–2 đường nhỏ 1 làn rẽ từ đường ngang ở
  |u| = 78, chạy song song cao tốc 280–500 m (theo địa hình), nhà 1–2 tầng hai bên (tường sơn, mái dốc đỏ / xanh / xám, cửa +
  cửa sổ phía đường), nền nhà / đường được đào phẳng (`I.lines`), loại cỏ (32 đoạn). **Trạm thu phí** (`TOLL`: s = 3000 + 6000k,
  giữa 2 nút giao; `tollDist(s, dir)`): đảo bê tông mũi vàng trên các vạch chia làn + mép (±4 / ±7.5 / ±11.45, dài 30 m), cabin trắng
  kính tối mái xanh, mái che 24 m có dải chữ "TRẠM THU PHÍ · ETC" 2 mặt, barie sọc đỏ trắng mỗi làn (`updateToll`: nâng khi có xe
  ≤ 16 m trước vạch, hạ khi trống), biển 1 km / 500 m + tốc độ 40. Mọi xe (NPC + xe mình, kể cả khi tắt tự giữ khoảng cách) giảm
  còn ~20 km/h tới vạch (v = 5.55 + √(3.2·(d − 2)), vùng 160 m) rồi tăng tốc; xe mình: toast báo trước ~300 m, qua vạch "bíp" 2 tiếng
  (`audio.beep`) + toast "Đã trừ phí tự động (ETC): 35.000đ".
  Khu chung cư (~9% lô mặt tiền, `apartment` trong `_build`): tòa nhà lùi 11 m, công viên nhỏ (cỏ `lawnMat`, hàng rào cây, cây tán
  tròn `broadleafGeometry`, ghế), bậc thang lên sân sảnh (sàn tầng trệt = sân), ban công 3D từng tầng (sàn + lan can); mẫu A 10–13
  tầng bậc hẹp 4 cây, mẫu B 6–8 tầng bậc rộng + ghế; nhà bên trong khối chừa chỗ. Bảng 🚦 có "Thêm xe của chú": xe model
  Mustang/Mazda từ kho `traffic.pool` chạy như xe phố (`cityTraffic.pool/useModels/releaseModels`).
  **Va chạm vật lý** (`crashfx.js` + `impact()` trong main): xe mình chúi đầu + nảy ngang, rung camera mạnh tắt dần ~0.6 s,
  tiếng "rầm" + kim loại (`audio.crash`), đâm > ~20 km/h tương đối thì khói bốc từ capo 4–10 s (48 sprite dùng lại); xe bị đâm
  trôi theo lực (`slide` ≤ 9 m/s, giảm 7 m/s²). Map khác: đụng xe NPC cũng khựng + rung + khói (không cảnh sát), hồi 2.5 s.
  **Cảnh tai nạn** (`cityIncident.js`): ~0.9 s sau va chạm chú bước ra khỏi xe (`stop.leaveCar`: cảnh dừng xe với `hold` +
  `noSmoke` + `faceTo`; đi dọc hông trái về gần đuôi xe, đứng quay mặt ra sau, không hút thuốc / đi lanh quanh). Cảnh sát tới đỗ
  sau xe, xuống cửa trái, đi thẳng ở ngoài mép trái 2 xe tới đứng trước mặt chú (cách 1.1 m), toast lời cảnh sát, 2.5 s sau
  `endStop` (`stop.release`: người về ghế, bị ẩn; camera trả về quay quanh xe, lướt từ chỗ đang đứng) => hình người lái dựng
  + cảnh sát đi cạnh nhau theo `cityPeople.goPath` về cửa xe cảnh sát. Hook main: `carPos/exitCar/personPos/endStop`.
  Camera cảnh dừng xe ở phố cũng `city.collide` (không xuyên nhà). Người đi bộ trong 45 m (tối đa 9) đi tới đứng quanh hiện
  trường trên vỉa hè phía mình, nhìn về chỗ tai nạn, ~30% giơ điện thoại (`cityPeople.gather/disperse`).
  **Người đi bộ thêm**: ~16% bấm điện thoại (tay phải đưa ra trước 0.75 rad trong shader, điện thoại nằm dưới bàn tay; thỉnh
  thoảng đứng lại 3–9 s), ~14% đeo tai nghe trắng (đỉnh `aAcc` ẩn khi không dùng; `aWalk.z` = đồ dùng). Hai người ngược chiều
  gặp nhau cùng vỉa hè (≤ 1.6 m) => 35% dừng nói chuyện 6–16 s, quay mặt vào nhau (hồi 25 s). Tiếng nói không chữ:
  `audio.setChatter` (răng cưa + 2 formant đổi nguyên âm mỗi âm tiết, 2 giọng thay lượt; đám đông nói chồng) — main `chatter()`
  lấy 3 nguồn gần camera ≤ 22 m (`cityPeople.voices`). Thử Low: không điểm nào của cảnh sát / người lái lọt vào thân xe.
  Thử Low: ~50 xe + ~38 người quanh xe, xe máy/người qua ngã tư theo đèn, cảnh tai nạn chạy trọn ~30 s. Chưa xem trên máy thật.
- **Giao diện (HUD)**: bên trái là cột lối tắt hộp chữ thưa (`#quick .qbox`, cùng cỡ 80×58 — điện thoại 62×36, chữ mảnh weight 200, hoa chữ đầu + thường, giãn .16em, phím
  trong ngoặc bên phải): Speed (F; hiện "50 km/h"/"180 km/h" khi đang ở cấp đó) · Pause (P; "Resume" khi đang đỗ) · Car (C/V) ·
  Camera (Q) · Driver (X) · Map (M) · Weather (R) · Time (T). Góc phải dưới: biểu tượng máy ảnh nét sáng (chụp ảnh, phím O) +
  hộp Setting (K) mở thanh nút cũ `#bar` thành cột dọc: camera/thời tiết/thời gian (mở bảng chỉnh), nhạc (N), chất lượng,
  🅿️ Dừng xe (`stop.tune`, lưu mục `park`: thời gian giảm tốc tới dừng 0.5–10 s, độ zoom ra = m lùi xa khi tự zoom 0–40,
  thời gian zoom ra, camera quay quanh Nhân vật / Xe — nút bấm; lúc quay lại xe tâm luôn về người, tâm trượt mượt),
  💡 Lighting (đèn pha xe chú, đèn đường, hệ số `lightTune`: quầng + cỡ đèn giao thông, cửa sổ, biển hiệu, đèn xe khác, đèn ưu tiên),
  🚦 giao thông (map Phố), ⛶ (điện thoại). Nút cũ fast/stop/car/character/map còn trong DOM nhưng ẩn (JS cũ vẫn cập nhật).
  **Màn hình vào game**: tiêu đề + 2 hộp chọn chế độ `#m-chill` "Chill" (map ngắm cảnh, `nextMap` bỏ qua Phố; đang ở Phố thì
  về Đồi cỏ; có đoạn mở đầu) / `#m-drive` "Drive" (vào thẳng map Phố, không đoạn 180 km/h, phím M chỉ báo "chỉ có map Phố");
  phím Enter/1 = Chill, 2 = Drive (`state.mode`). Không còn "chạm bất kỳ để bắt đầu". Nền mờ blur 3.5 px. Màn hình chờ: cảnh nền
  tự đổi ngẫu nhiên mỗi 3 s (map + nhảy đoạn đường + giờ; không biên dịch trước `skipWarm`), camera ngẫu nhiên Quay quanh /
  Trong xe mỗi 5 s; màn hình chờ luôn chạy chất lượng Low (`applyQuality(false)` không ghi đè lựa chọn đã lưu), vào game trả lại
  mức chú chọn; `saveScope` bỏ qua khi chưa vào game; vào game trả lại map / thời tiết / giờ / camera đã chụp (`snap`).
  Mỗi lần vào chế độ: tên "Chill" / "Drive" hiện giữa màn hình 1 s rồi mờ dần (`#modename`). Setting có nút 🔀 đổi chế độ
  (`setGameMode`; Chill quay về map ngắm cảnh lần trước).
  Vào game luôn ẩn (`body.idle` từ đầu; bỏ qua cú bấm Start 1.2 s); chỉ rê chuột / chạm / kéo xoay mới hiện (mờ dần 0.7 s),
  phím tắt không làm hiện; tự ẩn sau 2 s. Đồng hồ tốc độ `#stats` nằm ngoài HUD (luôn hiện, góc trên phải trong khung hình,
  dưới viền đen cine), Times New Roman: số 46 px, "km/h" nhỏ nghiêng, giờ nhỏ bên dưới. Nút phanh = hộp "Space" giữa đáy (trong HUD, ẩn theo; giữ để phanh). ⓘ ở góc trên trái. Nhạc mặc định tên "Music + fx".
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
- Chưa nghe trên máy thật: tiếng người nói chuyện (`setChatter`), còi hụ, tiếng va chạm. Chưa chụp cận đèn đi bộ.
- `QUICK_OPENING = true` (TẠM, đầu game 0.5 s) — bật lại khi chú bảo. Kiểm thử Playwright: vào game bằng `#m-chill` / `#m-drive`.

## 6. Nhật ký cập nhật
- Đã tóm tắt tới commit này (sau `52e209a`): va chạm vật lý (rung, khói, tiếng), cảnh tai nạn mới (chú bước ra, cảnh sát đi
  vòng ngoài xe tới trước mặt), đèn giao thông rõ màu + đặt kiểu Việt Nam + đèn đi bộ, bảng 🚦 nút Bật/Tắt + tự dừng đèn đỏ +
  giao thông ngẫu nhiên 3 mức, cài đặt chế độ P, người đi bộ (xem tai nạn, nói chuyện có tiếng, điện thoại / tai nghe),
  màn hình chọn Chill / Drive (cảnh nền tự đổi, nút đổi chế độ, tên chế độ giữa màn hình).

- **#1 — Map Đại lộ bước 1: cao tốc 6 làn, dải phân cách, cỏ, giao thông 6 làn, nhóm Drive (09/10/2026)**. `compileFor` dùng `renderer.compile` (đồng bộ) thay `compileAsync` (lỗi `isReady` khi đổi map liên tục).
- **#2 — Map Đại lộ bước 2: nút giao, cầu vượt, đường ngang có xe, nhánh ra / vào đi thử được (09/10/2026)**.
- **#3 — Map Đại lộ bước 3: biển báo, giàn biển lối ra, mũi tên làn, đường gom + nhà (09/10/2026)**.
- **#4 — Map Đại lộ bước 4: trạm thu phí tự động, mọi xe chậm lại (09/10/2026)**.
- **#5 — Màn hình chờ chạy chất lượng Low (09/10/2026)**.
- **#6 — Bản đồ tròn (Drive): đường + xe thật, bấm để phóng to, kéo / zoom (09/10/2026)**.
