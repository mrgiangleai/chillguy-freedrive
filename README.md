# Chill Drive 🚗🌇

Web app lái xe thư giãn trên con đường vô tận, dùng **three.js** (JavaScript + HTML thuần).

- **Địa hình đồi núi vô tận** (kiểu slowroads): đồi trập trùng, đường lên dốc/xuống dốc men theo địa hình, núi xa có đá & tuyết mờ trong sương xanh; sinh hoàn toàn bằng code nên tải rất nhanh
- **Map** (nút 🌾 hoặc phím `N`): **cánh đồng cỏ lau bất tận** 🌾 · **đồi thông** 🌲 kiểu slowroads: đồi cỏ xanh với búi cỏ mọc dày sát mép đường, cây có tán lá kết cấu, mảng rừng sẫm trên đồi xa · **đường núi** ⛰️ (mặc định) men sườn núi: vách đá ảnh thật với cụm đá gồ ghề, thông mọc trên sườn, vực thung lũng có hộ lan một bên · **đồi cỏ** 🌿 đồi thoải chỉ toàn cỏ xanh dịu cao 1–1,5 m, cao thấp từng mảng, gợn sóng theo gió. Đồi thông có đoạn **đường đất gồ ghề xuyên rừng rậm** (~800 m, lặp lại mỗi 2,6 km)
- **Cinematic** (luôn bật): dải đen letterbox 2.39:1, **xoá phông** theo ống kính thật (lấy nét vào xe, tiền cảnh/hậu cảnh nhoè kiểu bokeh), bloom quanh mặt trời/đèn, chỉnh màu phim, hạt phim, tối viền, camera hơi rung như quay cầm tay và cảnh mở đầu camera lia từ thấp ra sau xe
- **Tốc độ**: mặc định chạy chill **25 km/h** (W/S chỉnh 10–60 km/h); nút **⚡** (hoặc phím `F`) đổi cấp: 25 → **50 km/h** → **Fast drive 180 km/h** (blur tốc độ, góc nhìn rộng ra, camera rung nhẹ, gió ù ù) → về 25
- **Xe ngược chiều**: thỉnh thoảng (ngẫu nhiên, khoảng 15–70 s một chiếc) có xe khác chạy ngược chiều ở làn bên kia, ban đêm bật đèn pha / đèn hậu
- **Xe**: chọn xe bằng nút 🚗: **Mustang '67** (mặc định) · Mustang '67 Xanh · Bugatti Divo · Milk Truck (model glTF miễn phí, đều ≤ 250k triangles)
- **Ống kính** 📷 (nút hoặc phím `L`): vào game **16 mm f/1.4**; đổi sang camera ngoài xe bất kỳ thì về **24 mm f/5.6** (chạy 180 km/h: camera ngoài xe chuyển 16 mm, thôi chạy nhanh về 24 mm); camera trong xe 16 mm f/16. Zoom 16–35 mm, khẩu độ f/1.4–f/16; độ xoá phông tính theo cảm biến full-frame
- **Camera**: sau xe · sát mặt đường · bên hông (ngang hông, lùi xa ~11 m, xe chiếm ~1/3 khung hình) · trong xe · **quay quanh** (mặc định) · từ trên cao; **bấm giữ + rê chuột / vuốt** để nhìn quanh 360° (thả tay camera vẫn giữ góc đã xoay, đổi camera thì về góc chuẩn), **lăn chuột / chụm 2 ngón / phím `+` `-`** để zoom (đổi tiêu cự)
- **Thời tiết**: nắng · nhiều mây · **gió lớn** · **mưa** (mặc định) · **bão** (trời âm u tối, mưa xối, sét + sấm) · tuyết · **sương mù** (chuyển cảnh mượt)
- **Bầu trời gradient** phối màu theo từng giờ (xanh trong ban ngày, cam–hồng–tím lúc hoàng hôn/bình minh, xanh than ban đêm), lớp mây thật, mây ti, sao; chân trời khớp màu với sương xa. **Mặt trời** lặn gần hướng đường chạy (vẫn lấp ló qua sương) + **tia nắng** xuyên qua hàng cây / mép đồi; **ban đêm** có **trăng** sáng (vân trăng, quầng sáng) chiếu sáng cảnh và đổ bóng, đèn pha dịu toả rộng, thỉnh thoảng có **đám đom đóm** nhấp nháy bay dọc mép đường
- **Sương mù** 🌫️ (nút hoặc phím `G`): chỉnh **Độ phủ** (cao thấp, từng đám hay phủ kín) và **Độ dày**; sương đọng dày ở thung lũng và trôi theo gió; chuyển sang **Ban đêm** thì độ phủ và độ dày tự về 60%
- **Map núi**: dưới thung lũng có các **thị trấn nhỏ** và **thị trấn lớn** gần đường hơn (3 dãy phố, có nhà cao tầng; cái đầu tiên ~1.3 km sau chỗ xuất phát) (nhà tường trắng, mái đỏ / nâu / xám) — ban đêm cửa sổ sáng đèn, quầng sáng ấm phủ trên thị trấn, **đèn đường** lác đác dọc con đường thung lũng
- **Mặt đường**: nhựa đường sần (hạt nhám, độ bóng lốm đốm), không trơn bóng; **mưa**: mặt đường ướt có **vũng nước phản chiếu** xe, đèn đường, bầu trời + gợn sóng giọt mưa; xe **tự bật gạt mưa** (bão gạt nhanh hơn; cần gạt quay thật, nhìn từ ngoài cũng thấy) — ngồi trong xe thấy giọt mưa bắn vào kính, đọng lại, chảy thành vệt, lưỡi gạt quét sạch từng lượt
- **Trong xe**: nhìn từ mắt người lái (2 tay cầm vành vô lăng), mặc định 16 mm f/16, góc nhìn tự canh để thấy trọn vô lăng (bọc da đen) và trọn gương chiếu hậu, lấy nét gần taplo; **màn hình giải trí** trên taplo (bản đồ, bài nhạc, tốc độ, giờ) hắt ánh sáng vàng ấm lên người lái — nhìn từ ngoài xe ban đêm cũng thấy, cabin có đèn nên không tối om, kính có phản xạ, **gương chiếu hậu soi thật** cảnh phía sau
- **Thời gian**: bình minh · ban ngày · giờ vàng · **hoàng hôn** (mặc định) · ban đêm · tự động chạy hết ngày (đèn pha, đèn đường)
- **Chất lượng** ⚙️ (nút hoặc phím `Q`): **Low / Good / Ultra** do người chơi chọn (mặc định **Good**; lựa chọn được nhớ trên máy). Low: độ phân giải 0.75, tắt xoá phông + phản chiếu vũng nước, cỏ thưa, chỉ cây tấm. Good: độ phân giải cao (tới mật độ điểm ảnh thật của màn hình), khử răng cưa 4x, cỏ dày, cây / bụi / đá model chi tiết trong bán kính 35 m. Ultra: **phạm vi hiển thị rộng gấp nhiều lần** — cây chi tiết tới 200 m, địa hình chi tiết xa gấp đôi, rừng xa rậm hơn, cỏ / lau trải xa gấp đôi; bóng đổ nét hơn, xoá phông mịn hơn
- **Dừng xe** 🅿️ (nút hoặc phím `P`): cận cảnh bánh xe chậm dần rồi dừng, cửa mở, người lái bước ra đi lên đầu xe đứng dựa vào xe, camera lùi ra toàn cảnh rồi quay chậm quanh xe (giữ chuột rê / vuốt để tự xoay quanh xe); bấm lần nữa (▶️) người quay lại xe, đóng cửa, chạy tiếp. Người lái ngồi sẵn trong xe khi chạy (ẩn ở camera trong xe)
- **Âm thanh**: nhạc lo-fi chill tự sinh bằng WebAudio + tiếng động cơ / gió / mưa

## Điều khiển

| Phím | Tác dụng |
| --- | --- |
| `A` `D` / `←` `→` | đánh lái sang trái / phải (buông tay xe tự về giữa làn) |
| `W` `S` / `↑` `↓` | tăng / giảm tốc độ (10–40 km/h) |
| `F` | đổi cấp tốc độ 25 → 50 → 180 km/h (Fast drive) · `G` bảng sương mù |
| `C` | đổi camera · `V` đổi xe · `N` đổi map · `R` đổi thời tiết · `T` đổi giờ · `M` đổi chế độ âm thanh |
| `+` `-` | zoom (tiêu cự 16–35 mm) · `L` bảng ống kính (tiêu cự + khẩu độ) |
| `Q` | đổi mức chất lượng Low / Good / Ultra |
| `P` | dừng xe (cảnh người bước ra) / đi tiếp |
| `H` | ẩn / hiện giao diện |

Chuột / màn hình cảm ứng: **bấm giữ rồi rê** (vuốt) để nhìn xung quanh 360°, thả tay camera tự quay về; **lăn chuột** hoặc **chụm / mở 2 ngón** để zoom.

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

## Thay / thêm xe

Đã có sẵn: `docs/assets/models/mustang.glb` (xe mặc định). Muốn thay/thêm xe: upload file `.glb` vào `docs/assets/models/` rồi khai báo trong `src/config.js` (nên nén lại bằng glTF-Transform trước).
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
  cars.js         tải & chuẩn hoá model xe, bánh xe quay, cửa tài xế, đèn pha, dò mặt phẳng kính lái
  mirror.js       gương chiếu hậu trong xe (vẽ cảnh phía sau vào texture)
  wipers.js       gạt mưa tự động + lớp nước trên kính lái
  fireflies.js    đom đóm ban đêm dọc mép đường
  town.js         thị trấn + đèn đường dưới thung lũng (map núi)
  dashscreen.js   màn hình giải trí trên taplo + ánh sáng hắt lên người lái
  traffic.js      xe chạy ngược chiều ngẫu nhiên, thưa thớt
  person.js       người lái (animation, quần áo vẽ bằng shader)
  stopscene.js    cảnh dừng xe: cận bánh xe, mở cửa, người bước ra, camera quay quanh
  colorspace.js   đổi màu hiển thị -> tuyến tính cho shader tự tô màu
  camera.js       các chế độ camera
  post.js         hậu kỳ: xoá phông, bloom, tia nắng, mưa trên kính, chỉnh màu phim, grain (Cinematic) + blur tốc độ (Fast drive)
  audio.js        nhạc lo-fi + âm thanh môi trường
  style.css
docs/              site GitHub Pages phục vụ
  index.html
  app.js, style.css  bản build (three.js r160 gộp sẵn, chạy không cần CDN)
  assets/         model xe (meshopt + webp) + texture
```

## Credits & giấy phép

- [three.js](https://threejs.org) r160 — MIT (gồm `Sky.js`, `GLTFLoader.js`, `BufferGeometryUtils.js`)
- **'67 Mustang (High poly)** và **'67 Mustang** — [Nick Broad](https://sketchfab.com/nickbroad), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · Sketchfab
- **Bugati Divo** — [Jonrss](https://sketchfab.com/huy14320000006), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · Sketchfab (đã giảm từ 332k xuống 194k triangles)
- **Cesium Milk Truck** — Cesium, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · Khronos glTF Sample Assets
- **Người lái** — [Quaternius](https://quaternius.com): Universal Base Characters (Superhero Male) + 6 clip từ Universal Animation Library, [CC0](https://creativecommons.org/publicdomain/zero/1.0/); quần áo vẽ thêm bằng shader
- Model xe đã được nén lại (meshopt + texture WebP ≤ 1024px) bằng glTF-Transform để tải nhanh (~4.9 MB tổng thay vì ~37 MB)
- **Cây / đá / dương xỉ chi tiết** — [Quaternius](https://quaternius.com) Stylized Nature MegaKit, [CC0](https://creativecommons.org/publicdomain/zero/1.0/) (nén còn ~1 MB)
- **Texture đất, sỏi đá vụn** — [Babylon.js Assets](https://github.com/BabylonJS/Assets), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · **vách đá** — [Godot demo projects](https://github.com/godotengine/godot-demo-projects), MIT
- Địa hình, cỏ lau, búi cỏ, bông cỏ, tán lá cây (vẽ bằng canvas), mây, núi, đường, đèn đường, hộ lan: tạo bằng code / texture vẽ bằng canvas (không dùng asset ngoài)
- Nhạc: tự sinh bằng code (không dùng bản ghi âm nào)
