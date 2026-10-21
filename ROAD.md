# ROAD.md — sổ tay dự án Chill Drive

> Đọc file này trước khi sửa. Mỗi lần sửa xong: ghi 1 mục vào **Nhật ký** (cuối file) và tăng bộ đếm.
> Bộ đếm đủ 10 => đọc lại cả file, gộp nhật ký vào các mục "Trạng thái", xoá nhật ký cũ, đặt bộ đếm về 0.

**Bộ đếm cập nhật kể từ lần tóm tắt gần nhất: 7/10**

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
  Khung trình duyệt trong app bị ẩn thì rAF đứng (ảnh không đổi) => dùng Playwright có sẵn ở `~/.npm/_npx/e41f203b7505f1fb/node_modules/playwright`
  với `executablePath` = `~/Library/Caches/ms-playwright/chromium_headless_shell-1248/…/chrome-headless-shell`, bấm nút qua `evaluate(el.click())`,
  `goto(..., { waitUntil: 'domcontentloaded' })`; map có cài đặt "Tự động" ghi đè camera / giờ => đặt lại ngay trước khi chụp.
  Máy chậm => môi trường (env map) chưa kịp chụp lại khi đổi giờ: gọi `__app.env.update(0.016, drive.pos); env._captureEnv()`.
- **Kiểm tra tự động** (node, không cần trình duyệt; đều PASS): `scripts/check-traffic.mjs`, `check-traffic-policy.mjs`, `check-steering.mjs`,
  `check-stopscene.mjs`, `check-hlg.mjs`, `check-nyc.mjs`, `check-mustang-grip.mjs`, `check-mazda.mjs`, `check-chisa.mjs`, `check-car-switch.mjs`, `check-ocean-loop.mjs`,
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
- **Handoff**: ROAD.md là sổ bàn giao giữa các phiên — mỗi thay đổi quan trọng (kể cả cấu hình ngoài repo) phải ghi vào đây ngay
  trong lượt làm, kèm việc còn dở ở mục 5, để phiên khác đọc là làm tiếp được.
- **Worker 3D MiniMax** (chú yêu cầu): `opencode run --standalone --auto --format json -m opencode/minimax-m3.1-flash-free` (free;
  mặc định KHÔNG `#high`, chỉ dùng cho việc 3D khó), chạy trong thư mục riêng ở scratchpad với `TASK.md` (tiêu chí + lệnh chấm +
  tối đa 5 vòng tự sửa) và script chấm; `perl -e 'alarm 300; exec @ARGV'` ~5 phút / việc, chạy nền chờ thông báo, chỉ chấm sản phẩm
  cuối. Việc vài dòng: tự sửa. Ví dụ: cây cao su (1 vòng tự sửa, ~5 phút). Bản free lúc nhanh (1 phút) lúc treo (> 10 phút).
- **Tiết kiệm quota (chú yêu cầu)**: việc làm theo khuôn (code nháp, sửa hàng loạt, tóm tắt) giao DeepSeek theo thứ tự:
  1) **opencode free** `opencode run --standalone -m opencode/deepseek-v4.1-flash-free` (ưu tiên; `opencode/deepseek-v4.1-flash` trả phí
  và `vibi/…` đã hết tiền); 2) bản free hết giới hạn => **hỏi chú trước** rồi mới dùng credit API riêng của chú: công cụ MCP `deepseek`
  (máy chủ `~/.claude/mcp/deepseek/server.mjs`, phạm vi user — mọi phiên Claude Code; khoá Keychain service `deepseek-api`; model
  `deepseek-flash`, có `deepseek-v4-pro`; mặc định chờ 120 s, tối đa 600; flash suy nghĩ ngầm nên đừng đặt `max_tokens` nhỏ) hoặc
  `deepseek/deepseek-flash` trong opencode. DeepSeek chỉ trả văn bản — Claude tự kiểm rồi mới ghi file. Việc nhiều bước rõ ràng:
  subagent Sonnet; việc chỉ đọc: Haiku. Không dùng `opencode run --auto` chạy nền dài với DeepSeek (đã treo ~15 phút).
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
  "Ban ngày" bớt ám xanh (chú yêu cầu 22/10/2026): `shared/sky.js` mốc 22° / 50° — chân trời `#cbd6e0` / dải `#e3e8eb` (trước `#b4d4f2` / `#d2e5f3`, làm sương + ánh sáng nền xanh), đỉnh trời dịu hơn.
- **Ánh sáng**: nắng gắt cân bằng kiểu máy ảnh: nắng ×2.3, ánh trời ×0.5, phơi sáng ×0.7. Đêm có trăng (đổ bóng).
- **Mặc định = cài đặt của chú** (`src/default-settings.json` = `DEF`, xuất từ localStorage Safari của chú 21/10/2026: `tuning`
  (chill / drive / traffic / mist), `scopes` city / avenue / hlg, `quality`): chưa có bản lưu => nạp `DEF.tuning`; nhóm thiếu => lấy
  của `DEF`; map có bộ riêng chưa lưu => `DEF.scopes[map]`; nút "Mặc định" của mọi bảng = số gốc trong code rồi phủ `defSet()`
  (bộ `DEF` của nhóm Chill / Drive đang dùng; sương / giao thông từ `DEF.tuning.mist / traffic`). Muốn đổi mặc định: chú chỉnh trên
  trình duyệt rồi xuất lại (Console: `copy(JSON.stringify(Object.fromEntries(Object.keys(localStorage).filter(k => k.startsWith
  ('chilldrive')).map(k => [k, localStorage.getItem(k)]))))`) và chuyển thành file này. Giao thông mặc định theo chú: không ngẫu
  nhiên, mật độ 2.5, tự dừng đèn đỏ, không chấm điểm, Phố 60–104 / cao tốc 120–208 km/h (đổi từ `speed: 2` cũ).
- **Lưu thông số chỉnh tay** (`chilldrive.tuning.v1`, `v: 2`): bảng camera / thời tiết / thời gian (ánh sáng chung) / Lighting /
  dừng xe lưu RIÊNG nhóm Chill và Drive (`tuneSets`, `switchTuneGroup` gọi trong applyMap; bản lưu cũ chung => khởi đầu cho cả 2).
  Giao thông (`traffic`, chỉ Drive) và sương (`mist`, đã chia nhóm) lưu chung tệp. Chất lượng (Low / Good / Ultra) vẫn dùng chung.
- **Bảng 🌿 Nature** (Setting, `tuneKind = 'nature'`, `NATURE_DEFAULTS` trong reeds.js; mỗi loại cỏ một bộ riêng theo map đang ở:
  cỏ đồi `meadow` (map Đồi cỏ + Đại lộ, lưu `tuneSets.nature`) và cỏ lau `reeds` (map Cỏ lau, lưu `tuneSets.natureReed`, mặc định
  gần 43 m / xa 165 m = `reeds.defaults`); map khác: báo chưa có tuỳ chỉnh): cỏ dày tới (lớp gần, 15–80 m, mặc định 36), hiển thị cỏ xa tới (60–320 m
  × phạm vi chất lượng, mặc định 135), độ dày gần / xa ×, độ cao ×, độ đục lá, trong suốt viền lá (`aEdge` ±1 hai mép lá, lá dùng
  `alphaHash`). `_layout()`: ô lưới + vùng mờ giãn theo khoảng cách, số khóm × (giãn)² × độ dày để giữ mật độ; lớp xa hiện dần từ chỗ
  lớp gần hết; chừa sẵn bộ đệm (gần tới 80 m, xa tới 320 m × 2, dày ×2). Lý do: trước đây lớp xa thưa hơn lớp gần ~25 lần => ngoài ~30 m
  cỏ thưa hẳn.
- **Bảng 🐾 Animal** (Setting, `tuneKind = 'animals'`, lưu theo nhóm Chill / Drive trong `tuneSets` mục `fireflies` / `cows`):
  đom đóm (`fireflies.tune`, `FIREFLY_DEFAULTS`): số lượng × (0–5, tối đa 600 con), độ phủ dọc đường %, cách tim đường, bề rộng vùng
  bay, độ cao thấp nhất / bay cao thêm, độ sáng ×. Bò (`cows.tune`, `COW_DEFAULTS`): số bò mỗi đàn (0–16), cách tim đường (16–90 m;
  gần hơn 26 m thì bãi thu nhỏ + hàng rào sát mép đường, ≥ 6.2 m), khoảng cách giữa các đàn, bên đường (xen kẽ / trái / phải), hàng rào
  ẩn / hiện. Đổi thông số => `cows.retune()` dựng lại đàn, `fireflies.ground.clear()`.
- **Sương sát đất** (lớp `MIST`, khác thời tiết "Sương mù"): `mistTune` lưu mục `mist`, riêng nhóm Chill / Drive; mỗi thời tiết có
  độ phủ + độ dày (bảng Thời tiết, mục "Sương sát đất"; bảng 🌫️ phím G chỉnh thời tiết đang có), mỗi mốc giờ có hệ số độ dày (bảng
  Thời gian, "Sương theo giờ"; giờ lẻ nội suy vòng 24 h, `mistTimeK`); đổi thời tiết / giờ chuyển mượt, đổi map đặt ngay; nút Mặc
  định trả sương nhóm hiện tại. Drive mặc định gần như không sương (trời trong / mây 0, mưa 15%, sương mù 50%) — sương loang thành
  mảng trắng loá trên đồng phẳng Đại lộ. Bão/gió lớn: không rung lắc (chỉ 180 km/h rung nhẹ).
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
- **Dừng xe**: camera quay quanh bám người không trễ (tâm `_ctr` = vị trí người từng khung, chỉ trượt tỉ lệ người ↔ xe `_carK`,
  đổi người ↔ xe mượt ~1.5 s). Chân chạm đất thật (`stop._ground`: bàn chân thấp hơn so với `stop.groundAt` từ main — mặt đường +5 cm, vỉa hè
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
  **Tốc độ xe khác chỉnh bằng km/h** (từ / đến, `trafficTune.kmh`, mặc định `TRAFFIC_KMH`: chill 50–200, city 30–52, avenue
  60–104 — avenue gồm cả Cao tốc HLG; `kmhGroup()`): nút 🚦 hiện ở MỌI map — map ngắm cảnh chỉ có 2 ô km/h (đặt
  `TRAFFIC.minSpeed/maxSpeed` của traffic.js, xe đang chạy đổi theo tỉ lệ). cityTraffic: `vr.main` / `vr.cross` (đường ngang dưới cầu
  dùng khoảng Phố), loại xe giữ vị trí tương đối trong `V_REF` 30–52 (`kmh(raw, R)`), × `laneK`; bỏ `speedK` / `vK`. Mức ngẫu nhiên
  Thưa / Vừa / Đông (và khởi động 0.4) vẫn nhân hệ số lên khoảng km/h; ô km/h hiện số đã nhân, chỉnh tay => tắt ngẫu nhiên rồi lưu đúng
  số nhập. Bản lưu cũ có `speed` (×) được đổi sang km/h. Các nút bấm Bật/Tắt (`addToggle`, không thả danh sách): tự giữ khoảng cách (tắt => xe mình không bám xe trước, đâm được để thử
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
  **Map Cao tốc HCM – Long Thành – Dầu Giây** (`hlg`, 🛣️, nhóm Drive; M: Phố → Đại lộ → Cao tốc): dùng toàn bộ Đại lộ (`mapKind('hlg')`
  = 'avenue' trong main; địa hình / cỏ / xe / bảng 🚦 như Đại lộ, 3 làn mỗi chiều dù OSM ghi 2), đường + công trình theo dữ liệu thật
  (OSM ODbL, credits trong README + ⓘ). Chiều đi An Phú → Dầu Giây 54.5 km: nút giao Đỗ Xuân Hợp 3.1, Vành đai 2 4.5, Long Trường 7.8,
  Nhơn Trạch 19.5, QL51 23.3, Long Thành 24.7, Cẩm Mỹ 43.0 km (tên thật trên giàn biển, `hlgSign`); Cầu Long Thành (sông Đồng Nai hw 332,
  tháp) 12.5, Nước Trong 16.1, Đồng Môn 21.5; cầu cạn Mương Kênh 1.4, Ruột Ngựa 14.6; trạm phí Long Phước 11.1, Dầu Giây 52.2;
  giới hạn 60 (An Phú) / 80 / 120 / 100 (Cầu Long Thành) / 60 (nút QL51 – Long Thành). Còn 320 m tới cuối => `#fade` 1.4 s, `hlgLayout(!rev)`,
  `applyMap()` dựng lại (xe về s = 150). Bộ cài đặt riêng `chilldrive.hlg` (lần đầu lấy của Đại lộ). **Cầu cạn / cầu nhỏ** (`decks`,
  21 đoạn, tổng 9.6 km): mọi cầu OSM trừ cầu sông lớn, cầu vượt của chính nút giao và 600 m 2 đầu; cầu dài chia đoạn ≤ 800 m nối liền
  (cầu cạn Long Phước 4.18–10.69 km = 9 đoạn). Độ nhô: chứa nút giao hoặc dài > 1.5 km = `IC.hump` 7.5 m (nút giao đó `hump: 0`),
  < 150 m 2.5, < 400 m 4, còn lại 5.5; dốc dẫn 300 m; `deckHump` lấy max 3 cầu quanh s (không gãy khúc). `baseY` nâng nhánh nút giao
  trên cầu: `deckHump · sm(60, 400, |t|)` (tách ở cao độ cầu, về mặt đất tại đường ngang). avenue.js: `deck(k)` + `_buildBig` kind
  'deck' (không đường dưới gầm / tháp, bỏ ±30 m quanh tâm nút giao, tường mố chỉ ở 2 đầu thật), mặt đất dưới cầu giữ tự nhiên.
  **Lạch dưới cầu** (`creeks`, sông / suối < 300 m nằm gọn dưới cầu, 9 lạch: Sông Tắc hw 92, Bà Cua, Nước Trong, Đồng Môn, Suối Sâu,
  Suối Râm…): dải nước phẳng ±400 m (`creekMat`), lòng lạch đào xuống (`carve`, `creekA`), trụ xuống đáy lạch, bản đồ tròn vẽ xanh.
  Chỉ Đồng Nai dùng mặt nước shader sông. Sông / lạch cắt vuông góc tuyến (đơn giản hoá).
  **Số làn** (`laneCount(s)`, `lay.lanes`): OSM kẹp 2–3 mỗi chiều, quanh nút giao (±620 m) luôn 3; đoạn 2 làn: vạch ngoài cùng (±7.5)
  liền, làn thứ 3 thành làn khẩn cấp — mặt đường giữ bề rộng 3 làn. cityTraffic: không sinh / vượt vào làn 3 ở đoạn 2 làn, xe làn 3
  nhập làn giữa trước khi hết làn (chờ ở 40 m nếu kẹt), 18% xe làn giữa sang làn 3 ở t −640…−560 để ra nhánh (`exitK`); xe mình tự
  nhập làn giữa nếu đang tự lái ở làn 3. **Độ cao thật** (SRTM 30 m, `src/hlg-dem.json` 546 × 31 theo (s, u) ±1.5 km, làm mượt 5×5
  ~500 m): `hlgDem(lay)` → lưới thế giới 50 m, `TP.dem` cộng vào `hLow` (shared) + GLSL `tDem` (texelFetch, khớp CPU; reeds đẩy
  `uDem/uDemBox/uDemN`). HLG: `TP.low 1.5, mount 0` (bỏ núi xa). Cao độ đường ~2 m (Thủ Đức) → 13 (Long Thành) → ~199 m (Dầu Giây),
  dốc tối đa 5.9% (cầu vượt nút giao Long Thành). **Cảnh quan** (`hlgEnv.js`): 8 401 nhà = OSM 522 + Microsoft Global ML Building
  Footprints 7 879 (ODbL, 2 ô quadkey zoom 9, |u| 22–450 m; OSM thắng khi trùng); 21 chung cư ≥ 20 m, 378 thương mại, 138 xưởng.
  Ô đất OSM trống được lấp: mật độ nhà => 'r' / 'i'; còn lại theo độ cao SRTM: < 5 m ruộng 'p', 5–14 m pha ruộng / rừng theo mảng
  ~200 m, ≥ 14 m rừng cao su 'f' (15% trảng). Cây 'f': 3 / ô khi |u| < 160 m, 1 / ô tới 360 m; ô 'f' cao ≥ 14 m (theo `TP.dem`) trồng
  `rubberTreeGeometry` (scenery.js, 214 tam giác, cao ~12 m) thẳng hàng dọc đường, còn lại cây tán tròn.
  **Map New York** (`nyc`, 🗽, nhóm Drive; `mapKind('nyc') = 'city'`, cài đặt `chilldrive.nyc`; plan + kết quả chi tiết: `NYC_PLAN.md`):
  vòng khép kín Midtown 5 543 m theo OSM (`scripts/fetch-nyc.mjs` → `src/nyc-data.json`; Dijkstra có hướng kiểm chiều một chiều: 7th Ave nam,
  32nd St đông, Park Ave bắc qua hầm + cầu cạn, 55th St tây). road.js `setShape('nyc', nycLoop())`: s quấn vòng (hướng +2π / vòng), ngã tư /
  góc từ dữ liệu (`junctionInfo`, `cornerAhead`), `curveV` (tốc độ vào cua aLat 2.4 — cả xe mình + NPC), `elevAt` + `road.street` (mặt phố),
  điểm đường có `g` cho địa hình. Hầm sâu 5.5 m / cầu cạn cao 6 m (`nycElevKeys`, dốc ≤ 6 %), `NycWorks` (tường gạch men, trần, đèn trần,
  PointLight theo xe trong hầm; bản mặt cầu, lan can, trụ); camera trong hầm có trần (`rig.ceilAt`). city.js (`city.nyc`): góc rẽ `_corner` /
  `_cornerFrame` (cung R 15.3 m, `CORNER`), vạch Mỹ một chiều, lọc nhà theo đường chéo góc (`owns`), không cột điện, `stopA(n)` / `nextLine`,
  `exclude` + `extraObb` (vùng nhà riêng). cityTraffic chế độ `nyc` (một chiều 4 làn). main: vào ở s = L + 30, `nycAuto` (xi nhan trái 150 m,
  sang làn trái khi trống, về làn phải sau góc 40 m), lỗi `turn` / `turnSig`, biển 40 (25 mph).
  **Kích thước Manhattan** (`NYC_DIM` trong nyc.js, main `Object.assign(CITY, …)` khi vào / ra map): đại lộ mép 9 m (4 làn ±1.8 / ±5.4),
  vỉa hè 5.5 m, phố ngang 9 m + vỉa hè 3 m; góc rẽ cung R 20.4 m (`FILLET` 32 trong fetch-nyc, `NYC.arc` 16 / `tangent` 20.4); hầm sâu 7 m
  (trần kín khi sâu > 5.6 m). **Nhà thật OSM** (`nycBuildings.js` ← `docs/assets/nyc-buildings.json` 227 KB, tải khi vào map): 1 758 footprint
  + chiều cao (`height` / levels·3.6; 219 nhà thiếu => 14–24 m), dời theo độ lệch đường đã làm mượt, lấn vỉa hè thì lùi ≤ 9 m, mặt tiền 5 kiểu
  (kính / đá / kính tối / kính gương / gạch); bỏ hẳn nhà map Phố (`city.exclude = () => true`); obb camera theo lưới phố. Cache Overpass
  `nyc/buildings.json` (4.9 MB, kumi hay 504). **Tòa nổi tiếng** (`src/landmarks/*.js`, DeepSeek viết theo đề + `check.mjs` kích thước thật):
  Empire State, Chrysler (toạ độ thật `lm`), Helmsley (cầu cạn xuyên cổng đông x = +9), MetLife (tự dò chỗ trái cầu cạn không chạm đường);
  Grand Central (trái đoạn cầu cạn chạy dọc nhà ga, mặt chính quay nam; dò chỗ cùng MetLife: không chạm đường, không chồng nhau). Đề + script
  chấm worker: scratchpad `lm/<tên>/TASK.md, check.mjs, spec.json` — đừng để log trong thư mục làm việc (DeepSeek đọc nhầm log rồi thoát).
  MiniMax free treo > 15 phút ở lượt này. Đã sửa lỗi đám đông Times Square (thuộc tính `z` trùng: vùng / toạ độ => đám đông riêng không hiện).
  **Mặt tiền + đồ phố**: nhà OSM cao > 9 m có tầng trệt cửa hàng 4.8 m (`shopTex`: bảng hiệu màu, kính sáng ấm ban đêm), mặt nhìn ra tuyến có mái
  hiên (393 tấm, 5 màu); `nycStreet.js`: cột ở góc trước-phải mỗi ngã tư (không phải góc rẽ) với biển tên đường xanh lá NYC ("W 53 St" → "53 St",
  "7 Av", tên thật OSM, atlas canvas), biển ONE WAY phố ngang (chiều thật `ow`) + đại lộ, trụ cứu hoả đỏ / vàng 2 cái mỗi khối, thùng rác xanh.
  Đèn tín hiệu NYC: đầu đèn dọc (đỏ trên, `headGeoV`), cần vươn tới u = −1.5 với 2 đầu đèn treo trên làn + 1 trên cột, không có cột chiều ngược.
  **Làn sóng xanh** (city.js `_phase`, `WAVE` 40 km/h, `SIGNAL_NYC`: đường chính xanh 30 s / chu kỳ 46 s, ngang 7.5 s): đèn lệch pha theo
  s / tốc độ sóng, xe đúng 40 km/h tới giữa pha xanh. `scripts/check-nyc-wave.mjs`: 1 vòng 42 ngã tư gặp đỏ 7 / 5 / 2 / 1 lần ở 25 / 30 / 35 / 40 km/h
  (pha ngẫu nhiên cũ ~23), > 40 km/h gặp đỏ nhiều (16–27). Xe đường ngang NYC thưa × 2.5. cityPeople dùng `ph.crossEnd` (không cứng 42).
  **Times Square** (`timesSquare.js`, s 470–960 = 47 → 42 St): nhà chọc trời kính nhiều bậc lùi 3 dãy (35–250 m, 3 kiểu mặt tiền canvas, cửa
  sổ sáng đêm), thay nhà map Phố trong vùng (`city.exclude`); biển LED InstancedMesh đổi hình 5–11 s/hình (`adAtlas.js`: 16 thương hiệu tự chế,
  DeepSeek viết, đã soát), dải biển tầng trệt, mặt bắc nhà đầu khối phủ biển; tháp One Times Square (bên trái 43→42 St, 112 m, 15 tấm biển);
  quảng trường lát gạch (phải 47→46 St có 13 bậc đỏ TKTS + quầy kính; trái 45→43 St) có bàn ghế đỏ, bồn cây.
  **Đám đông** (`_crowd`): ~400 người (Low × 0.6) tản bộ trong vùng (quảng trường / vỉa hè 7th Ave / bậc TKTS), đứng 3–17 s ngắm biển,
  ~20 % giơ điện thoại; chỉ vẽ người trong ~230 m quanh xe, vẽ chung InstancedMesh của cityPeople (`extra`, thêm `CROWD` 520 chỗ).
  Xe NYC: taxi vàng ~40 %, buýt MTA xanh / trắng, không xe kei / xe máy (`MODES.nyc.mix / colors`).
  **Kính gương** (~35 % tòa, kiểu mặt tiền 3): envMap = `CubeCamera` 256 px đặt giữa Times Square cao 22 m (`capture`: lần đầu, đèn đổi > 0.12,
  mỗi 15 s; tắt envMap của chính nó lúc chụp) => phản chiếu nhà + biển LED. Bật / tắt ở bảng 🚦 mục "New York" (`chilldrive.nyc.mirror`, mặc định bật).
  **Map Đại lộ** (`avenue`, 🛣️, nhóm Drive cùng Phố; M trong Drive: Phố ↔ Đại lộ): cao tốc 6 làn (`AVENUE`: tâm làn ±2.25 / ±5.75 /
  ±9.25, dải phân cách ±0.5, mép làn ±11, lề khẩn cấp tới ±13), đường cong rất thoải (bán kính ≥ ~2 km), địa hình `avenue` (đồi cỏ
  thấp, cỏ cao `meadow` hai bên), hộ lan thép 2 bên, đèn đường 2 bên xen kẽ. Xe: `cityTraffic` chế độ avenue (3 làn mỗi chiều, tốc
  độ ×2, làn trong nhanh ×1.12 / làn ngoài ×0.84, không xe máy, có xe tải thùng 8.2 m + đầu kéo container 15.5 m (`heavy`: không vào làn
  trong cùng, không chạy đường ngang nút giao 2 làn), không ngã tư; vượt sang làn bên cạnh ưu tiên làn trong). Xe mình
  làn giữa 5.75, không qua dải phân cách; cấp tốc độ `AV_GEARS` 80 / 100 / 180 km/h, chỉnh tay tới 120. Bộ cài đặt riêng
  `chilldrive.avenue` (lần đầu lấy bộ của Phố, `SCOPED`); dùng chung bảng 🚦 + giao thông ngẫu nhiên. Cảnh tai nạn dùng
  `cityTraffic.lanes`. Vào Đại lộ luôn bắt đầu ở s = 150 (để gặp ngay cầu cao ở 700 m, cầu sông ở 2.2 km). **Nút giao** (`IC` trong
  road.js: mỗi 3 km, nút đầu ở s = 4000): cao tốc nhô lên 7.5 m (`avHump`, đỉnh
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
  "60" trên nhánh ra, biển "CAO TỐC tối đa 120 / tối thiểu 60" sau chỗ nhập. **Bảng chỉ đường lớn riêng từng nút giao**
  (`icSignTexture(k)`: canvas 1024×768, tên địa danh / số tuyến chọn theo k từ `PLACES` / `ROUTES`, vật liệu riêng huỷ cùng nhóm,
  phản quang theo `setLamps`): giàn dàn thép (2 cột + 2 thanh + giằng chéo `trussMat`) "LỐI RA … 1 km" (t = ∓1000), "500 m" (∓500),
  sơ đồ tách làn (∓430: biển vàng CT.xx + điểm đến đi thẳng, có thể kèm máy bay; mũi tên thẳng + nhánh phải đầu thoi đỏ; biển trắng
  QL.xx + 2 địa danh lối ra); khung trên đầu nhánh (∓365, cột phải, tay vươn): "LỐI RA / EXIT ↗" trên nhánh + "GIẢM TỐC ĐỘ / SLOW
  DOWN" vàng trên làn ngoài; biển hình mũi tên 2 cột ở mũi tách nhánh (∓285, alphaTest). Mũi tách / nhập nhánh (chỗ mép nhánh cách
  mép cao tốc ≥ 1.2 m, |t| ≈ 334): đệm chống va 6 khối sọc vàng / đen + 2 dải bê tông thấp 60 m (mép cao tốc, mép nhánh), khối đầu sơn vàng. Mũi tên sơn trên làn ở t = ∓760 / 680 / 600 (làn ngoài
  thẳng + rẽ phải), vạch chéo vùng tách / nhập nhánh. **Đường gom + nhà**: mỗi nút giao 1–2 đường nhỏ 1 làn rẽ từ đường ngang ở
  |u| = 78, chạy song song cao tốc 280–500 m (theo địa hình), nhà 1–2 tầng hai bên (tường sơn, mái dốc đỏ / xanh / xám, cửa +
  cửa sổ phía đường), nền nhà / đường được đào phẳng (`I.lines`), loại cỏ (32 đoạn). **Trạm thu phí** (`TOLL`: s = 5500 + 6000k,
  giữa 2 nút giao; `tollDist(s, dir)`): đảo bê tông mũi vàng trên các vạch chia làn + mép (±4 / ±7.5 / ±11.45, dài 30 m), cabin trắng
  kính tối mái xanh, mái che 24 m có dải chữ "TRẠM THU PHÍ · ETC" 2 mặt, barie sọc đỏ trắng mỗi làn (`updateToll`: nâng khi có xe
  ≤ 16 m trước vạch, hạ khi trống), biển 1 km / 500 m + tốc độ 40. Mọi xe (NPC + xe mình, kể cả khi tắt tự giữ khoảng cách) giảm
  còn ~20 km/h tới vạch (v = 5.55 + √(3.2·(d − 2)), vùng 160 m) rồi tăng tốc; xe mình: toast báo trước ~300 m, qua vạch "bíp" 2 tiếng
  (`audio.beep`) + toast "Đã trừ phí tự động (ETC): 35.000đ". **Cầu vượt cao** (`FLY` trong road.js, s = 700 rồi 8500 + 12000k): cao tốc nhô
  12 m (đỉnh ±70, dốc tới ±400) thành **cầu cạn** |t| < 230 (bản mặt cầu dày 1.6 m rộng ±14.8, gờ lan can, trụ đôi mỗi 28 m + xà mũ,
  tường mố 2 đầu; dưới cầu mặt đất giữ tự nhiên — `avenue.carve` nhận `h0` + `ns/nd` từ terrain) qua **quốc lộ 4 làn** (±8.2 m, vàng
  đôi, đứt ±3.5, ±520 m) nằm trong hào 3 m; xe 2 chiều mỗi chiều 2 làn (`c.xr.I` = khung đường ngang chung cho nút giao / cầu cao,
  `avenue.crossings`). **Cầu sông** (`RIVER`, s = 2200 rồi 14500 + 12000k): cao tốc nhô 8 m, cầu cạn |t| < 330 qua thung lũng sông rộng 240 m
  (mặt nước thấp hơn nền 14 m, sâu 5 m, bờ thoải; sông uốn `meander(u) = 40·sin(u/300)`), trụ xuống lòng sông, 2 tháp dây văng cao 42 m
  trên dải phân cách ở t = ±70 (dây thép `cableMat`). Mặt nước: shader Ocean chế độ sông (`ocean.setRiver`: cắt theo dải sông, sóng
  ×0.35, màu sẫm, nhám hơn, không bọt bờ; phản chiếu trời × 0.4, vệt nắng × 0.45, nhám +0.24 — trước sáng bạc như gương), bật khi xe trong 3.5 km quanh cầu sông. Cỏ: loại dọc cầu cạn ±30 m + dải sông. Biển tốc độ
  của nút giao dời từ ±1300 về ±1150 (không rơi vào cầu cạn). Ban đêm: đèn vàng dọc 2 lan can cầu cạn mỗi 12 m (`railGlow`; mọi quầng Points của Đại lộ kẹp cỡ tối đa ~22–40 px quy về màn 1080 trong shader — trước không kẹp nên đèn sát xe phình hàng trăm px, cộng sáng thành mảng loá trên cầu ban đêm / khi mưa), cầu sông
  có đèn hắt dọc tháp (`towerGlow`), đèn đỏ đỉnh tháp nhấp nháy cả ngày (`redGlow`), dây văng sáng ấm lên theo `setLamps`. Bờ sông:
  hàng cây tán tròn (`broadleafGeometry`, instancing) 2 bờ trong ±1400 m (bỏ đoạn gần cao tốc), cao độ theo `avenue.groundAt` =
  `terrain.heightAt`; 6 thuyền (2 sà lan chở cát 30 m, 4 thuyền nhỏ 9 m, `boatGeometry`) chạy dọc sông theo độ uốn, nhấp nhô, có đèn
  ban đêm (`_boats(dt)`); nhịp chính giữa 2 tháp (|t| < 84) không có trụ để làm luồng tàu.
  Khu chung cư (~9% lô mặt tiền, `apartment` trong `_build`): tòa nhà lùi 11 m, công viên nhỏ (cỏ `lawnMat`, hàng rào cây, cây tán
  tròn `broadleafGeometry`, ghế), bậc thang lên sân sảnh (sàn tầng trệt = sân), ban công 3D từng tầng (sàn + lan can); mẫu A 10–13
  tầng bậc hẹp 4 cây, mẫu B 6–8 tầng bậc rộng + ghế; nhà bên trong khối chừa chỗ. Bảng 🚦 có "Thêm xe của chú": xe model
  Mustang/Mazda từ kho `traffic.pool` chạy như xe phố (`cityTraffic.pool/useModels/releaseModels`).
  **Xi nhan** (`setBlinker/updateBlinker` trong main): phím `,` trái / `.` phải bật–tắt (điện thoại: giữ ◀ / ▶ tự bật), 4 quầng vàng
  góc xe mình + mũi tên `#blink` dưới đồng hồ + tiếng tách (`audio.tick`); đổi làn xong tự tắt sau 1.5 s, quên thì tắt sau 15 s.
  Ở Phố / Đại lộ: đổi làn (cùng chiều) không bật đúng bên => "↔ Đổi làn không bật xi nhan!" (cộng `violations`); vào nhánh ra
  không bật xi nhan phải => lỗi; đổi map / bị bắt xong không tính. NPC: hộp đèn vàng 4 góc (`lamps()` cờ `ind`, `aFlash` 3/4),
  nháy theo `aBlink` (±1) khi đang đổi làn (`c.changing`) hoặc rẽ nhánh. `__app.blinker / violations` để kiểm thử.
  **Giới hạn tốc độ + camera** (`updateSpeedLimit` trong main, `avLimit / CAM / camS / camIndex` trong road.js): biển tròn `#limit`
  cạnh số km/h ở Phố / Đại lộ — Phố 50 (biển phố đổi 40 → 50), Đại lộ 120, 100 quanh nút giao (t −700…620), 40 quanh trạm phí
  (−250…+120, sau trạm có biển 120), nhánh 60; vượt quá 5 km/h => số tốc độ đỏ. Cột camera (`avenue._buildCam`, s = 1450 rồi
  6200 + 3000k, mỗi chiều 1 cột phải + tay vươn qua 2 làn ngoài, 2 hộp camera + đèn chớp, biển 120 trên cột, biển xanh "CAMERA giám sát
  tốc độ" ô atlas 12 ở −500 / −250): đang quá tốc độ thì báo trước ~300 m, qua cột => đèn chớp 2 lần (`flashCam`) + toast
  "📸 Camera bắn tốc độ … (lỗi thứ n)". Bản đồ tròn: chấm đỏ ở vị trí camera. Phố chưa có camera.
  **Chấm điểm buổi lái** (`foul(type, text)`, `session`, `FOULS` trong main): mọi lỗi Drive đi qua `foul` (đỏ −15, không nhường −15,
  va chạm −25, camera −10, đổi làn / vào nhánh không xi nhan −5; toast ghi "lỗi thứ n, −x điểm"). "Điểm n" nhỏ dưới giờ (đỏ 1.5 s khi
  vừa bị trừ). Bảng 📋 (`#score`, nút `b-score` trong Setting ở map Drive, phím J, Esc / bấm nền để đóng): điểm + xếp loại (≥ 90 Xuất
  sắc / ≥ 75 Tốt / ≥ 50 Đạt / Chưa đạt), thời gian, quãng đường, tốc độ TB / cao nhất (không tính lúc dừng xe / tai nạn), số lỗi từng
  loại; "Buổi mới" đặt lại. Vào Drive => buổi mới; rời Drive sau > 300 m => tự hiện bảng. Bảng 🚦 có nút "Chấm điểm buổi lái"
  (`trafficTune.score`, mặc định Bật): tắt => ẩn điểm + nút 📋, lỗi chỉ nhắc (không trừ điểm); bật lại => tính lại từ đầu.
  **Va chạm vật lý** (`crashfx.js` + `impact()` trong main): xe mình chúi đầu + nảy ngang, rung camera mạnh tắt dần ~0.6 s,
  tiếng "rầm" + kim loại (`audio.crash`), đâm > ~20 km/h tương đối thì khói bốc từ capo 4–10 s (48 sprite dùng lại); xe bị đâm
  trôi theo lực (`slide` ≤ 9 m/s, giảm 7 m/s²). Map khác: đụng xe NPC cũng khựng + rung + khói (không cảnh sát), hồi 2.5 s.
  **Cảnh tai nạn** (`cityIncident.js`): ~0.9 s sau va chạm chú bước ra khỏi xe (`stop.leaveCar`: cảnh dừng xe với `hold` +
  `noSmoke` + `faceTo`; đi dọc hông trái về gần đuôi xe, đứng quay mặt ra sau, không hút thuốc / đi lanh quanh). Cảnh sát tới đỗ
  sau xe, xuống cửa trái, đi thẳng ở ngoài mép trái 2 xe tới đứng trước mặt chú (cách 1.1 m), toast lời cảnh sát, 2.5 s sau
  `endStop` (`stop.release`: người về ghế, bị ẩn; camera trả về quay quanh xe, lướt từ chỗ đang đứng) => hình người lái dựng
  + cảnh sát đi cạnh nhau theo `cityPeople.goPath` về cửa xe cảnh sát. Hook main: `carPos/exitCar/personPos/endStop`.
  **Tai nạn ở Đại lộ**: `cityPeople` bật cả ở Đại lộ nhưng `ambient = false` (không người đi bộ, chỉ người kịch bản; trước đây bị
  tắt hẳn nên cảnh tai nạn kẹt ở bước cảnh sát đi tới). Xe cấp cứu tới cùng chiều từ phía sau, đỗ sau xe cảnh sát (`behind`), nhân viên
  y tế đi phía phải làn (không trèo dải phân cách); người không đi vào dải phân cách (|u| ≥ 1). Trên nhánh rẽ (`hooks.ramp` = 
  `drive.ramp`): xe cảnh sát / cấp cứu `spawnScripted(..., ramp)` chạy theo `rampU`, người đi theo độ cong nhánh (`_laneU`);
  độ cao người ngoài mép cao tốc trong vùng nút giao = `road.baseY` (`avLowY`, dùng cho `stop.groundAt` + `cityPeople.yAt`).
  Đã thử Low (tăng tốc thời gian): trọn cảnh trên nhánh ra (t = −300) và trên cầu cạn cao (s = 640).
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
  🚦 giao thông (map Phố), ⛶ (điện thoại). Mở cột Setting (`body.setopen`, `--barw` = bề rộng cột): bản đồ tròn trượt sang trái cạnh
  cột; màn thấp / hẹp (điện thoại) thì bản đồ mờ ẩn và cột Setting xếp 2 cột (`grid`, cao tối đa 100vh − 150px, cuộn nếu dài). Nút cũ fast/stop/car/character/map còn trong DOM nhưng ẩn (JS cũ vẫn cập nhật).
  **Màn hình vào game**: tiêu đề + 2 hộp chọn chế độ `#m-chill` "Chill" (map ngắm cảnh, `nextMap` bỏ qua Phố; đang ở Phố thì
  về Đồi cỏ; có đoạn mở đầu) / `#m-drive` "Drive" (vào thẳng map Phố, không đoạn 180 km/h, phím M chỉ báo "chỉ có map Phố");
  phím Enter/1 = Chill, 2 = Drive (`state.mode`). Không còn "chạm bất kỳ để bắt đầu". Nền mờ blur 3.5 px. Màn hình chờ (`PREVIEW` trong main): 1 cảnh cố
  định nhẹ — map Đồi cỏ, ban đêm, nhiều mây (sương theo bộ Chill), camera Quay quanh, xe chạy đều 25 km/h; chất lượng Good, không
  giảm điểm ảnh (`PREVIEW.quality` / `ratio`, 0.5 khi muốn nhẹ); nhạc nền + âm thanh bật ngay, trình duyệt chặn thì mở ở lần chạm /
  bấm đầu (`kickAudio`). (Bản nhiều cảnh ngẫu nhiên + hoà tan + dịch sẵn shader đã bỏ vì nặng — chú sẽ thay bằng video cắt ghép.)
  Vào Chill: chạy luôn 25 km/h (cấp 0), camera Sau xe, không đoạn 180 km/h; vào Drive như cũ. `saveScope` bỏ qua khi chưa vào game; vào game trả lại map / thời tiết / giờ / camera đã chụp (`snap`).
  Mỗi lần vào chế độ: tên "Chill" / "Drive" hiện giữa màn hình 1 s rồi mờ dần (`#modename`). Setting có nút 🔀 đổi chế độ
  (`setGameMode`; Chill quay về map ngắm cảnh lần trước).
  Vào game luôn ẩn (`body.idle` từ đầu; bỏ qua cú bấm Start 1.2 s); chỉ rê chuột / chạm / kéo xoay mới hiện (mờ dần 0.7 s),
  phím tắt không làm hiện; tự ẩn sau 2 s. Đồng hồ tốc độ `#stats` nằm ngoài HUD (luôn hiện, góc trên phải trong khung hình,
  dưới viền đen cine), Times New Roman: số 46 px, "km/h" nhỏ nghiêng, giờ nhỏ bên dưới. Nút phanh = hộp "Space" giữa đáy (trong HUD, ẩn theo; giữ để phanh). Điện thoại (`body.phone`, `IS_PHONE`): thêm 2 hộp ◀ / ▶
  hai bên Space (giữ để lái như phím ← / →, `steerHeld`; hiện ở mọi map, ẩn theo HUD). ⓘ ở góc trên trái. Nhạc mặc định tên "Music + fx".
- **Quay màn hình** (nút `#b-rec` cạnh nút chụp ảnh, phím Y; `toggleRecord` trong main): `canvas.captureStream(30)` (hình game sau
  hậu kỳ, không có nút / HUD) + tiếng game (`audio.recordTrack()` = nhánh `MediaStreamDestination` sau compressor). Định dạng:
  mp4 H.264 nếu có → webm VP8 → VP9 (`recFmt`; 'video/mp4' trơn để cuối vì Chromium không H.264 cho file chỉ có tiếng), 10 Mbps, tối đa
  10 phút. Lưu: Chrome / Edge máy tính `showDirectoryPicker({ startIn: 'desktop' })` lần đầu, nhớ handle trong IndexedDB `chilldrive/kv`
  (`recDir`), lần sau ghi thẳng vào thư mục đó (Shift + bấm: chọn lại); trình duyệt khác / huỷ chọn => tải về (điện thoại: chia sẻ).
  Đang quay: nút đỏ, chấm nhấp nháy, đồng hồ `#rec-time`.
- **Chụp ảnh**: biểu tượng máy ảnh / phím O — chụp canvas ngay sau `post.render` (không cần preserveDrawingBuffer), tải PNG
  `chill-drive-<thời gian>.png`; điện thoại dùng bảng chia sẻ nếu có (lưu vào Ảnh).
- **Đom đóm** (không có ở map Phố): đoạn có đom đóm ~2/3 chiều dài đường (nhiễu `sst(0.38, 0.58)`), 90% ô 5 m có, 1–3 con/ô, ra tới ~16 m hai bên,
  cao 0.7–3.3 m, tối đa 200, nhìn trước 200 m. Điểm vẽ `0.25·uScale/z` (2.5–22 px), màu (9, 12, 2.6), lõi bán kính 0.11, quầng rộng nhoè mờ về 0 ở mép.
- **Biển (sửa atlas)**: atlas bake ô 128 px (100 + viền lặp 14 px, 1280×1024), `flipY=false` (trước bị đảo hàng => giật);
  lớp chạm điểm nối mờ còn 10% (sin²), lớp kia 100%.
- **Điện thoại**: tự toàn màn hình khi nhấc tay ở lần chạm đầu (và chạm lại nếu bị thoát), nút ⛶ chỉ hiện trên điện thoại,
  khoá ngang (Android), gợi ý xoay ngang khi cầm dọc; iPhone: "Thêm vào MH chính" (manifest fullscreen/landscape).

## 5. Việc còn mở / cần chú ý
- **TIẾP THEO — Map New York** 🗽: B1 + Times Square lượt 1 xong, chờ chú xem. Còn: biển LED quấn góc nhà / cong, đám đông quảng trường
  (B4: qua đường thành đợt), nhà thật cả vòng (B2), Grand Central / Helmsley, đường ngang dưới cầu cạn + trên hầm, góc trong khúc cua trống.
  Ảnh chụp Low: ban đêm biển sáng rõ; camera Bên hông dễ bị 1 tấm biển che kín khung hình.
- **Map Cao tốc HLG — có thể làm tiếp**: footprint Microsoft không có chiều cao ở VN => cao theo diện tích (đoán); sông / lạch cắt chéo
  đúng góc thật (đang vuông góc tuyến); mặt nước lạch dài ±400 m rồi dừng; cỏ cao `meadow` vẫn phủ cả khu dân cư; biển tốc độ dựng bên đường còn theo mẫu Đại lộ (HUD đã đúng biển thật); Cầu Long Thành dùng tháp dây văng
  chung của Đại lộ (chưa đối chiếu ảnh thật); nút giao chưa có tên đường cắt ngang cho Nhơn Trạch / QL51 / Long Thành / Cẩm Mỹ
  (`cross` null trong dữ liệu); trạm thu phí trên nhánh QL51 bị bỏ. Chưa xem trên máy thật / Good / Ultra.
  Dữ liệu tạo lại: `node scripts/fetch-hlg.mjs` (cache Overpass `HLG_CACHE`, mặc định `<tmp>/chilldrive-osm`) rồi `check-hlg.mjs`;
  `node scripts/fetch-hlg-env.mjs` (`ONLY=dem|env`; SRTM qua OpenTopoData ~4.5 phút, Overpass hay 502/504 ~23 phút — đừng dùng
  `[maxsize:…]`, chia nhỏ bbox).
- **Chờ chú**: map mới từ model `landscape_forest__mountains.glb` — chú dặn để lần sau, **hỏi chú trước khi làm**.
- Chưa kiểm chứng hiệu năng trên máy thật (gương + tia nắng + mưa kính + thác tốn thêm GPU); chưa thử Good/Ultra trên máy ảo.
- Cảnh dừng xe: đoạn ▶️ quay lại xe mới thử bằng mô phỏng logic (máy ảo quá chậm để chạy trọn).
- Mazda: chưa có cửa mở/gương hông soi thật; chưa thử cảnh dừng xe trọn vẹn, GUI mưa kính sau hoặc Good/Ultra.
- Chưa xem trên máy thật: chuyển động sóng biển (đã sửa giật 2 lần), cảnh dừng xe mới (quay quanh + zoom 5 s), xe ngựa ban đêm,
  map Biển ban đêm / mưa / trong xe; vân sóng lặp còn thấy khi nhìn từ trên cao.
- Vài tảng đá terrain trông lơ lửng trên vách núi gần đường (s≈250) — chưa sửa.
- Map Phố: camera Từ trên cao hay bị nhà chắn nên kéo sát xe; Mustang/Mazda NPC không chạy trong phố (thay bằng xe dựng code).
- Chưa nghe trên máy thật: tiếng người nói chuyện (`setChatter`), còi hụ, tiếng va chạm. Chưa chụp cận đèn đi bộ.
- `QUICK_OPENING = true` (TẠM, đầu game 0.5 s) — bật lại khi chú bảo. Kiểm thử Playwright: vào game bằng `#m-chill` / `#m-drive`.

## 6. Nhật ký cập nhật
- Đã tóm tắt tới commit "Map New York: Times Square lượt 1" (gồm: handoff + MCP DeepSeek, HLG số làn / SRTM / nhà Microsoft / cây cao su,
  tốc độ giao thông km/h, cài đặt Safari làm mặc định, chốt plan + B1 map New York, thứ tự dùng DeepSeek, Times Square lượt 1).
- **#1 — Times Square: đám đông + taxi vàng / buýt (21/10/2026)**: xem mục 1 (Map New York). Chụp Low: quảng trường đông người, không lỗi console.
- **#2 — Times Square: kính gương phản chiếu + nút bật / tắt (21/10/2026)**: chụp Low bật / tắt so sánh, không lỗi console.
- **#3 — NYC: làn sóng xanh + xe ngang thưa (21/10/2026)**: chú chê nhiều đèn đỏ / đường cắt ngang. Mô phỏng + chạy thử không lỗi.
- **#4 — NYC: kích thước thật, nhà OSM, 4 tòa nổi tiếng, hầm 7 m (21/10/2026)**: check-nyc PASS, Playwright: 1 657 nhà dựng, không lỗi trang.
- **#5 — NYC: Grand Central + sửa đám đông Times Square (22/10/2026)**: build không cảnh báo, 5 tòa nổi tiếng không chạm đường, 218 người quanh xe.
- **#6 — NYC: cửa hàng tầng trệt, mái hiên, biển tên đường, ONE WAY, trụ cứu hoả, đèn dọc kiểu Mỹ (22/10/2026)**: chụp Low không lỗi trang.
- **#7 — Bớt ám xanh "Ban ngày" (22/10/2026)**: chỉ đổi bảng màu trời; chưa chụp so sánh (chú bảo khỏi chụp vì chậm).
