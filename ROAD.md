# ROAD.md — sổ tay dự án Chill Drive

> Đọc file này trước khi sửa. Mỗi lần sửa xong: ghi 1 mục vào **Nhật ký** (cuối file) và tăng bộ đếm.
> Bộ đếm đủ 10 => đọc lại cả file, gộp nhật ký vào các mục "Trạng thái", xoá nhật ký cũ, đặt bộ đếm về 0.

**Bộ đếm cập nhật kể từ lần tóm tắt gần nhất: 9/10**

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
| `cars.js` | Tải + chuẩn hoá xe, vật liệu (`mats`, `envK`), bánh xe quay, cửa tài xế, đèn pha/đèn hậu (quầng mềm `softGlowTexture`), bóng gầm, đèn cabin (đặt tại màn hình taplo), dò **kính trước/sau**, đường bao kính sau (`windshield()`), **cần gạt** 3D (`wiperRig`), vô lăng da (`leatherMaterial`), dời vô lăng (`steerShift`) |
| `mirror.js` | Gương chiếu hậu giữa (render-to-texture, **tỉ lệ 4:3**: 12.5 × 9.4 cm, `GW/GH`; đặt bên phải màn hình taplo theo `screen`, không có que đỡ) |
| `wingmirrors.js` | 2 gương hông soi thật (phản chiếu phẳng, frustum lệch tâm, vẽ xen kẽ; `uTex` theo hệ xe) — chỉ khi ngồi trong xe, chỉ xe Mustang |
| `wipers.js` | Gạt mưa tự động (pha cos) + lượng nước trên kính trước/sau |
| `dashscreen.js` | Màn hình giải trí taplo (canvas, tông ấm, kích thước giảm 15%) + đèn hắt |
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
| `traffic.js` | Xe ngược chiều (4–10 s/chiếc, tối đa 4) + cùng chiều (10–30 s/chiếc, tối đa 2), tốc độ hành trình 50–200 km/h; đèn pha dùng rig chung với xe người chơi |
| `traffic-ai.js` | Né người/xe khi khoảng trống giữa mép thân ≤30 m, giữ hướng né tới khi qua vật cản, phanh/dừng nếu bị chặn; chiếu vị trí người đi bộ về toạ độ đường |
| `headlights.js` | Rig đèn pha chung: tạo/đặt/cập nhật SpotLight và quầng sáng theo hướng nhìn |
| `audio.js` | Nhạc lo-fi tự sinh, gió/mưa/lốp/động cơ/sấm; bus `outGain` (trong xe ×0.4 + lowpass), tiếng mưa: ngoài `rainG` 0.08, kính `glassG` 0.08, mui `roofG` 0.02 (× lượng mưa) |
| `particles.js`, `mist.js`, `reflection.js`, `textures.js`, `colorspace.js` | Mưa/tuyết, sương tầng thấp, phản chiếu vũng nước, texture tự sinh, đổi màu hiển thị → tuyến tính |

## 4. Trạng thái hiện tại (tóm tắt)
- **Mặc định vào game**: map núi, camera Quay quanh, mưa, hoàng hôn (17.6 h), 16 mm f/1.4, chất lượng Good, xe Mustang '67 Đen,
  tốc độ 25 km/h. Cinematic luôn bật (không có nút).
- **Chất lượng**: Low / Good (mặc định) / Ultra (cây chi tiết 200 m, địa hình/cỏ xa ×2). Điện thoại: Good giới hạn pixel ratio 1.25.
- **Tốc độ**: nút ⚡/phím F: 25 → 50 → 180 km/h. 180: blur rìa, không vệt dài; camera ngoài xe chuyển 16 mm.
- **Ống kính**: camera ngoài xe → 24 mm f/5.6; trong xe 16 mm f/16 (lấy nét taplo). Zoom 16–35 mm.
- **Xe**: chạy lệch tim đường `LANE_D = 1.5 m` (sát vạch vàng); xe ngược chiều 1.8 m; 4–10 giây/xe khi pool còn chỗ, tối đa 4 NPC ngược chiều; thêm tối đa 2 NPC cùng chiều, mỗi 10–30 giây khi có chỗ, đi vào từ phía sau 80–110 m; tốc độ hành trình 50–200 km/h, khi vào cua còn 60%, ra thẳng tăng lại. Né người đi bộ, xe người chơi và NPC khác trong 30 m từ mép thân; giới hạn trong mặt đường, giảm tốc/dừng khi bị chặn, tránh bước xuyên vật cản ở tốc độ cao. Mustang: sơn đen bóng (env ×0.4),
  nội thất đen bóng, ghế da nâu, vô lăng da đen đưa gần người lái 9 cm theo trục cột lái (gần hơn vị trí cũ 16 cm). Đèn pha/đèn hậu quầng mềm (pha vàng ấm). Xe người chơi và xe ngược chiều dùng chung rig pha: màu `0xffd6a0`, cường độ xe người chơi `85 × lamps`, NPC `51 × lamps` (giảm 40% cả quầng pha và quầng hậu), tầm 110 m, góc 0.8 rad, penumbra 1, decay 0.55; quầng `0xffc477`, opacity `0.45 × lamps × hướng nhìn`, kích thước 2.835 × 1.785 m. Đèn đường: vùng sáng mặt đường 24 × 28 m, texture giảm sáng liên tục ra mép, opacity `0.68 × lamps`.
- **Trong xe**: mắt = xương đầu +0.15 m; góc chúc tự canh: chừa phần dưới vành để thấy cả bàn tay và cẳng tay, không cắt
  gương giữa. Gương giữa + 2 gương hông soi thật. Ánh sáng cabin từ màn hình taplo. Đã bỏ toàn bộ dải LED trang trí và quầng sáng dưới sàn. Mưa: giọt nước/vệt chảy trên kính trước + gạt mưa; Kính sau lấy toàn bộ tam giác của mesh kính thật; lớp nước bám theo mặt cong, dùng mask độ sâu để khung kính và ghế che đúng vị trí, thu mép vào 1 pixel để tránh lấn viền. Hạt mưa ngoài trời bị loại trong thể tích xe, lớp nước không phủ lên ghế/nội thất; âm thanh ngoài −60% + mưa lộp độp trên kính.
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
- Đã gộp 10 cập nhật vào trạng thái: gương cạnh màn hình taplo không que đỡ; màn hình và viền thu nhỏ 15%; bỏ toàn bộ đèn hông, dải LED trang trí và quầng sáng sàn; kính sau có giọt mưa/vệt nước sát khung kính; chặn mưa ngoài trời trong xe. Các thay đổi sau `6c3026c` được gom trong đợt bàn giao này, kèm các cập nhật #1–#9 và bản build docs.
- Kiểm tra ở lần gộp trước chỉ xác nhận mặt phẳng/đường bao ước lượng; ảnh đó chưa đủ để kết luận khớp kính cong. Đã thay bằng kiểm tra và bản sửa #1 bên dưới.

- **#1** — Kiểm tra lại kỹ mưa kính sau: bỏ mặt phẳng/convex hull ước lượng (lệch tới 50.6–52.0 mm trên hai model Mustang); bỏ bộ lọc loại nhầm mép kính cong; loại mesh đèn khỏi bộ chọn kính. Mask raster từ toàn bộ tam giác kính, lưu UV trên bề mặt thật + độ sâu, chống phủ lên ghế/khung; thu vào 1 pixel ở mép. Chỉ thêm lượt vẽ mask khi nhìn kính sau và có nước.
  - `node scripts/check-rear-glass.mjs` và `node scripts/check-rear-glass.mjs mustang-blue.glb`: mỗi model 51.200 tia từ 4 vị trí; mọi tia có/không chạm kính khớp model thật, giao điểm trùng trong 0.01 mm. Mustang đen 480 tam giác, xanh 120.
  - Build và diff check đạt. Thử trực tiếp Mustang đen ở Low: kính trước, kính sau giữa/trái/phải, mưa và bão; không thấy nước trên khung, ghế, trần; không có lỗi shader. Chưa thử GUI Mustang xanh hoặc Good/Ultra.
  - Ảnh: `screenshots/rain-verified-front.jpg`, `rain-verified-rear.jpg`, `rain-verified-left.jpg`, `rain-verified-right.jpg`, `rain-verified-storm.jpg`.

- **#2** — Đồng bộ toàn bộ đèn pha xe ngược chiều với xe người chơi qua `headlights.js`; thay mảng sáng giả dưới xe ngược chiều bằng SpotLight thật, sửa quầng lớn/sáng quá và không giảm theo hướng nhìn. Mở vùng sáng đèn đường từ 15 × 15 m lên 24 × 28 m, làm mịn phân bố sáng và xoay vùng sáng dọc theo đường.
  - Build và diff check đạt. Kiểm tra hướng quầng trước/sau với 3 góc quay xe và bật/tắt đèn đạt. Cảnh thử ban đêm Low, dùng rig Traffic thực + Mustang xanh đối diện: thông số trùng và cường độ cả hai là 85, không báo lỗi shader. Ảnh `screenshots/headlights-streetlights-verified.jpg`. Đây là fixture giữ xe ở gần, không phải chờ spawn ngẫu nhiên.
  - Fixture nguồn `scripts/lighting-preview.js`; để chạy lại, bundle bằng esbuild ra `docs/lighting-check.js`, sao `docs/index.html` thành `lighting-check.html` rồi đổi script entry sang bundle fixture. Hai file preview sinh trong docs đã được gỡ sau kiểm tra; không đưa vào bản game.

- **#3** — Tăng spawn NPC từ 15–70 lên 4–10 giây và pool từ 2 lên 4 xe; mỗi xe chọn tốc độ hành trình 50–200 km/h. Thêm `traffic-ai.js`: phát hiện trong 30 m từ mép thân, chọn khoảng ngang trống, giữ hướng tới khi qua vật cản, phanh và giới hạn bước tiến chống xuyên vật cản. Tất cả NPC dùng cùng snapshot mỗi frame. `main.js` truyền xe người chơi và vị trí thế giới thật của người khi bước ra/đi bộ/lên xe. Xe có thể chạy dưới 50 km/h hoặc dừng khi né; tăng tốc trở lại sau đó.
  - `node scripts/check-traffic.mjs`: 1000 mẫu tốc độ, ngưỡng 30 m, NPC 200 km/h né người/xe đỗ/xe người chơi 180 km/h/NPC 50 km/h; chặn cả đường thì dừng; tương tác 3 NPC và chiếu người vào đường cong đạt. Mô phỏng Traffic.update 120 giây: 16 spawn, đỉnh 4 xe, pool tái sử dụng đúng.
  - Fixture GUI Low `scripts/traffic-preview.js`: 3 NPC 200/50/200 km/h dùng Traffic thật, ghi nhận né và không có hộp thân xe chồng nhau trong lượt chạy; tạm giữ cảnh ở thời điểm né để chụp `screenshots/traffic-avoidance-verified.jpg`. Không thử trực tiếp trọn cảnh người đi bộ hoặc hiệu năng Good/Ultra.

- **#4** — Thêm `waterfalls.js`, chỉ trong map núi: seed theo vị trí, rộng 2–5 m, lưu lượng 0.25–1; mỗi khoảng 560 m có một thác, lệch vị trí 0–100 m. Lưới liên tục từ sườn núi cách đường 240 m xuống mặt đường rồi tới vực cách đường 190 m; nước/bọt chuyển động theo lưu lượng. Giữ 2–4 thác quanh xe, dispose hình học và spray khi rời vùng hoặc đổi map. Nguồn nằm trên sườn cao, không tạo hồ hay mô phỏng chất lỏng vật lý.
  - `node scripts/check-waterfalls.mjs`: 1000 seed bề ngang/lưu lượng; 10 lưới hữu hạn, nguồn cao hơn đường >100 m, cuối thấp hơn đường >80 m; nối qua cả hai làn, cao hơn mặt nhựa, UV tăng liên tục, khôi phục anchor terrain và chỉ bật ở map núi. Build và diff check đạt.
  - Fixture `scripts/waterfalls-preview.js` dùng game thật, giữ camera và xe tại thác đầu để kiểm tra Low; ảnh trong `screenshots/waterfall-road-verified.jpg` và `waterfall-overview-verified.jpg`. Đã đổi sang Đồi cỏ và xác nhận thác được gỡ (loaded=0). Không phát sinh lỗi console mới sau khi sửa fog uniforms; log cũ trước sửa vẫn còn trong tab. Chưa đánh giá hiệu năng Good/Ultra hoặc thiết bị di động.

- **#5** — Giảm 40% độ sáng đèn NPC: SpotLight pha từ 85 xuống 51 khi bật hết, opacity quầng pha và toàn bộ quầng hậu nhân 0.6. Giữ nguyên rig và đèn xe người chơi. Build và diff check đạt; fixture ban đêm Low xác nhận NPC = 51, player = 85 (tỉ lệ 0.6), không có lỗi console. Ảnh `screenshots/npc-lights-60-percent.jpg`.

- **#6** — Thêm xe cùng chiều: timer riêng 10–30 s, tối đa 2; pool chung 6 xe, giới hạn ngược chiều 4. Spawn phía sau 80–110 m ở làn cùng phía người chơi, tránh sinh chồng xe; tốc độ hành trình 50–200 km/h. Tổng quát `stepTraffic` bằng direction ±1, snapshot ghi chiều thật của mỗi xe; hướng thân, nghiêng theo dốc và bánh xe theo chiều chạy. Tái sử dụng né/phanh 30 m và đèn NPC giảm 40%. Xe cùng chiều rời pool hoạt động khi xa hơn 750 m phía trước hoặc 180 m phía sau.
  - `node scripts/check-traffic.mjs`: kiểm tra cũ đạt, thêm tính đối xứng hai chiều, cùng chiều vượt xe chậm/né người/gặp xe đối diện; Traffic thật với hai biên random xác nhận timer 10/30 s, tốc độ 50/200 km/h, tiến về trước, yaw đúng, pha 51. Build và diff check đạt.
  - Fixture GUI Low `scripts/same-traffic-preview.js` giữ Mustang xanh cùng chiều cách xe người chơi 20 m để xem đuôi xe; không có lỗi console. Ảnh `screenshots/same-direction-traffic.jpg`. Timer và chuyển động tự nhiên được kiểm tra bằng mô phỏng, ảnh dùng fixture giữ khoảng cách.

- **#7** — NPC hai chiều giảm tốc độ hành trình 40% khi vào cua, ra thẳng tăng lại. `trafficCurveSpeed` đo độ đổi hướng trên đoạn 20 m, ngưỡng vào 0.0015 rad/m và ra 0.0012 rad/m; nhìn trước theo chiều chạy một quãng đủ phanh từ tốc độ hành trình xuống 60% (gia tốc phanh 12 m/s² hiện có). Giữ cruise gốc, truyền tốc độ cua vào logic né/phanh để vật cản vẫn có thể buộc xe chậm hơn.
  - `node scripts/check-traffic.mjs`: kiểm tra cũ đạt; thêm hai chiều với cruise 50/100/200 giảm đúng 30/60/120, ra thẳng phục hồi, phanh vật cản và nhìn trước đúng chiều. Build và diff check đạt.
  - Fixture Low `scripts/curve-traffic-preview.js` giữ NPC ở đoạn cua thật s=170, xác nhận cruise=200, speed=120, curve=true; không có lỗi console. Ảnh `screenshots/npc-curve-120-kmh.jpg`.

- **#8** — Căn hai tay bám vô lăng Mustang đen/xanh. Vô lăng cũ quá xa, IK gần duỗi hết tay; đổi steerShift từ +0.07 sang −0.09 (dịch về người lái 16 cm so với trước). Tay cầm gần 9/3 giờ; cổ tay ngoài vành 2 cm, về phía người lái 6.5 cm; hướng gốc ngón vào vành, giữ độ cong ngón của Driving_Loop; pole khuỷu xuống dưới/hơi ra ngoài. Tách pivot đúng tâm/trục vô lăng, xoay mượt theo lái ngang ±0.55 rad, điểm bám hai tay xoay cùng góc. Góc chúc cockpit chừa cẳng tay và vẫn giữ trọn gương. Divo/Milk Truck không có steer nên giữ tư thế cũ.
  - Fixture GUI Low `scripts/grip-preview.js`: model người thật + hai Mustang; tư thế thẳng và ±32°, sai số cổ tay so với điểm bám khoảng 0.00–0.01 mm, khuỷu gập khoảng 34–65°. Quan sát tay/vành và hai cẳng tay trong cockpit, không có lỗi console. Ảnh `screenshots/steering-grip-straight.jpg`, `steering-grip-left.jpg`, `steering-grip-right.jpg`, `steering-grip-blue.jpg`. Đây là sai số IK tới điểm bám, không phải đo giao nhau mọi tam giác ngón tay/vành.
  - Build và diff check đạt. Đã gỡ hai file preview sinh trong docs; fixture nguồn giữ để kiểm tra lại.

- **#9** — Vô lăng/hai tay tự lái theo cua thật của đường, kết hợp thao tác ngang của người chơi. `Road.curvature` lấy độ đổi hướng có dấu trên 12 m; main nhìn trước 0.4 s (tối đa 12 m), Cars dùng atan(curvature × 2.7) ×14 cộng phần lái ngang, giới hạn ±0.55 rad và nội suy 8/s. Xe dừng thì phần tự lái trả về giữa. IK hai tay dùng cùng steerAngle nên theo sát vành.
  - `node scripts/check-steering.mjs`: 2500 vị trí, đúng hướng trái/phải, phối hợp lái tay, dừng xe, giới hạn góc và chuyển vào cua/trả giữa mượt. Build và diff check đạt.
  - Fixture Low `scripts/curve-grip-preview.js`: giữ xe ở ba vị trí đường thật s=550/250/675, không ép curvature/góc vô lăng; ghi nhận góc khoảng +6°/−11°/0°, cổ tay sai số khoảng 0.01 mm, không có lỗi console. Ảnh `screenshots/curve-grip-left.jpg`, `curve-grip-right.jpg`. Fixture giữ vị trí để quan sát, không phải video chạy liên tục qua cả ba đoạn.

### Bàn giao Git — 03/10/2026
- Gom toàn bộ thay đổi đã thực hiện trong phiên: nội thất/gương/taplo, mưa kính, đèn xe/đường, NPC hai chiều và giảm tốc cua, thác map núi, tay bám vô lăng và động tác lái theo cua.
- Nhánh nhận bản cập nhật: `claude/focused-gates-gcpbj9`. Bao gồm mã nguồn, build `docs/`, README, các script kiểm tra và ảnh kiểm chứng; không đưa các trang preview tạm vào docs.

- Gộp nhánh GitHub tới `703f0ab` (gồm `1b4d466`): giữ vị trí gương/taplo của bản hiện tại, tích hợp luật bám/vượt 50 m vào `traffic-policy.js`, điều khiển tự bám/vượt của xe người chơi và âm thanh `audio.passBy`. Giữ engine né người/xe 30 m, timer/caps/tốc độ mới, pha thật giảm 40%, giảm tốc cua và tay lái. Không force push; lịch sử GitHub được giữ trong merge.
- `node scripts/check-traffic-policy.mjs`: vượt làn trống, chờ khi có xe trong tầm nhìn 50 m hoặc xe đối diện sẽ tới trước khi vượt xong; Traffic thật phát âm thanh lướt qua một lần/lượt và pha NPC vẫn 51.
- Bản gộp build và các script traffic/policy/waterfalls/steering đạt; cảnh fixture Low chạy không có lỗi console, ảnh `screenshots/git-merge-verified.jpg`.
