# Chill Drive 🚗🌇

Web app lái xe thư giãn trên con đường vô tận, dùng **three.js** (JavaScript + HTML thuần, không cần build).

- **Địa hình đồi núi vô tận** (kiểu slowroads): đồi trập trùng, đường lên dốc/xuống dốc men theo địa hình, núi xa có đá & tuyết mờ trong sương xanh; sinh hoàn toàn bằng code nên tải rất nhanh
- **Map** (nút 🌾 hoặc phím `N`): **cánh đồng cỏ lau bất tận** 🌾 (mặc định) · **đồi thông** 🌲 kiểu slowroads: đồi cỏ xanh với búi cỏ mọc dày sát mép đường, cây có tán lá kết cấu, mảng rừng sẫm trên đồi xa · **đường núi** ⛰️ men sườn núi: vách đá một bên, vực thung lũng có hộ lan một bên
- **Cinematic** 🎬 (bật sẵn, tắt bằng nút 🎬 hoặc phím `K`): dải đen letterbox 2.39:1, bloom quanh mặt trời/đèn, chỉnh màu phim, hạt phim, tối viền, camera hơi rung như quay cầm tay, ống kính tele hơn và cảnh mở đầu camera lia từ thấp ra sau xe
- **Tốc độ**: mặc định chạy chill **35 km/h** (chỉnh được 10–40 km/h); nút **⚡ Fast drive** (hoặc phím `F`) tăng lên **150 km/h** kèm hiệu ứng blur tốc độ, góc nhìn rộng ra, camera rung nhẹ, gió ù ù; bấm lại để về chill
- **Xe**: chọn xe bằng nút 🚗 (model glTF miễn phí, đều ≤ 250k triangles)
- **Camera**: sau xe · sát mặt đường · đầu xe · trong xe · quay quanh · từ trên cao
- **Thời tiết**: nắng · nhiều mây · **gió lớn** · mưa · **bão** (trời âm u tối, mưa xối, sét + sấm) · tuyết · sương mù (chuyển cảnh mượt)
- **Bầu trời gradient** phối màu theo từng giờ (xanh trong ban ngày, cam–hồng–tím lúc hoàng hôn/bình minh, xanh than ban đêm), lớp mây thật, mây ti, sao, trăng; chân trời khớp màu với sương xa
- **Sương mù** 🌫️ (nút hoặc phím `G`): chỉnh **Độ phủ** (cao thấp, từng đám hay phủ kín) và **Độ dày**; sương đọng dày ở thung lũng và trôi theo gió
- **Mưa**: mặt đường ướt có **vũng nước phản chiếu** xe, đèn đường, bầu trời + gợn sóng giọt mưa
- **Thời gian**: bình minh · ban ngày · giờ vàng · hoàng hôn · ban đêm · tự động chạy hết ngày (đèn pha, đèn đường)
- **Âm thanh**: nhạc lo-fi chill tự sinh bằng WebAudio + tiếng động cơ / gió / mưa

## Điều khiển

| Phím | Tác dụng |
| --- | --- |
| `A` `D` / `←` `→` | đánh lái sang trái / phải (buông tay xe tự về giữa làn) |
| `W` `S` / `↑` `↓` | tăng / giảm tốc độ (10–40 km/h) |
| `F` | bật / tắt **Fast drive** (150 km/h) · `K` bật / tắt Cinematic · `G` bảng sương mù |
| `C` | đổi camera · `V` đổi xe · `N` đổi map · `R` đổi thời tiết · `T` đổi giờ · `M` đổi chế độ âm thanh |
| `H` | ẩn / hiện giao diện |

Trên điện thoại: kéo ngón tay sang trái/phải để lái, kéo lên/xuống để tăng/giảm tốc.

## Chạy trên GitHub Pages

1. Vào **Settings → Pages**.
2. **Source**: *Deploy from a branch* → chọn branch chứa code này, thư mục **/docs** → Save.
3. Chờ ~1 phút, mở `https://<tên-user>.github.io/chillguy-freedrive/`.

Chạy thử trên máy: `npx http-server docs -p 8080` (hoặc `python3 -m http.server 8080 -d docs`) rồi mở `http://localhost:8080`.
(Phải chạy qua server, mở thẳng file `index.html` sẽ không tải được module.)

## Sửa code

Mã nguồn nằm trong `src/`; site chạy bản đã gộp + nén `docs/app.js`, `docs/style.css` (1 file JS ~180 KB gzip thay vì ~20 file).
Sau khi sửa `src/` thì build lại rồi commit cả `docs/`:

```
npm install
npm run build      # src/ -> docs/app.js + docs/style.css
npm run dev        # build + mở server ở http://localhost:8080
```

## Thêm xe Mustang 1967

Slot Mustang đã được cấu hình sẵn: tải file `.glb` về, đặt tên **`docs/assets/models/mustang.glb`** là app tự nhận và đặt làm xe đầu tiên (mặc định).
Nếu xe bị quay ngược đầu/đuôi, đặt `flip: true` trong `src/config.js` rồi `npm run build`.

## Cấu trúc

```
src/               mã nguồn (gộp bằng esbuild: build.mjs)
  main.js         vòng lặp, điều khiển, giao diện
  road.js         đường vô tận (hình học đường)
  terrain.js      địa hình đồi núi (quadtree nhiều mức chi tiết), đường xẻ vào sườn đồi, vách đá, rừng cây "tấm lá"
  terrain-noise.js hàm độ cao dùng chung CPU/GPU
  scenery.js      mặt đường (vũng nước khi mưa), cọc tiêu, đèn đường, hộ lan
  reflection.js   phản chiếu vũng nước (planar reflection)
  mist.js         sương mù tầng thấp chỉnh độ phủ / độ dày
  reeds.js        cỏ lau / búi cỏ vô tận (instancing, gió, tự tránh mặt đường, mọc theo địa hình)
  world.js        bầu trời + mây, ánh sáng, giờ trong ngày, thời tiết, bão & sét
  particles.js    mưa / tuyết / bông cỏ bay (shader)
  cars.js         tải & chuẩn hoá model xe, bánh xe quay, đèn pha
  camera.js       các chế độ camera
  post.js         hậu kỳ: bloom, chỉnh màu phim, grain (Cinematic) + blur tốc độ (Fast drive)
  audio.js        nhạc lo-fi + âm thanh môi trường
  style.css
docs/              site GitHub Pages phục vụ
  index.html
  app.js, style.css  bản build (three.js r160 gộp sẵn, chạy không cần CDN)
  assets/         model xe (meshopt + webp) + texture
```

## Credits & giấy phép

- [three.js](https://threejs.org) r160 — MIT (gồm `Sky.js`, `GLTFLoader.js`, `BufferGeometryUtils.js`)
- **Car Concept** — Eric Chadwick / Darmstadt Graphics Group, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [Khronos glTF Sample Assets](https://github.com/KhronosGroup/glTF-Sample-Assets)
- **Toy Car** — Guido Odendahl & Eric Chadwick, [CC0](https://creativecommons.org/publicdomain/zero/1.0/) · Khronos glTF Sample Assets (đã bỏ tấm vải trưng bày đi kèm model)
- **Cesium Milk Truck** — Cesium, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · Khronos glTF Sample Assets
- Model xe đã được nén lại (meshopt + texture WebP) bằng glTF-Transform để tải nhanh (~3.7 MB tổng thay vì 17.5 MB)
- Địa hình, cỏ lau, búi cỏ, bông cỏ, tán lá cây (vẽ bằng canvas), mây, núi, đường, đèn đường, hộ lan: tạo bằng code / texture vẽ bằng canvas (không dùng asset ngoài)
- Nhạc: tự sinh bằng code (không dùng bản ghi âm nào)
