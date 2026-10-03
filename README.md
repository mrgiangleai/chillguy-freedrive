# Chill Drive 🚗🌇

Web app lái xe thư giãn trên con đường vô tận, dùng **three.js** (JavaScript + HTML thuần).

- **Địa hình đồi núi vô tận** (kiểu slowroads): đồi trập trùng, đường lên dốc/xuống dốc men theo địa hình, núi xa có đá & tuyết mờ trong sương xanh; sinh hoàn toàn bằng code nên tải rất nhanh
- **Map** (nút 🌾 hoặc phím `N`): **cánh đồng cỏ lau bất tận** 🌾 · **đồi thông** 🌲 kiểu slowroads: đồi cỏ xanh với búi cỏ mọc dày sát mép đường, cây có tán lá kết cấu, mảng rừng sẫm trên đồi xa · **đường núi** ⛰️ (mặc định) men sườn núi: vách đá ảnh thật với cụm đá gồ ghề, thông mọc trên sườn, vực thung lũng có hộ lan một bên · **đồi cỏ** 🌿 đồi thoải chỉ toàn cỏ xanh dịu cao 1–1,5 m, cao thấp từng mảng, gợn sóng theo gió — có **đàn 5 con bò sữa** loang đen trắng gặm cỏ sau hàng rào gỗ (cúi gặm, ngẩng nhìn, thong thả đi, vẫy đuôi; đàn đầu tiên ~270 m sau chỗ xuất phát, rồi mỗi 2,4 km lại gặp một đàn). Đồi thông có đoạn **đường đất gồ ghề xuyên rừng rậm** (~800 m, lặp lại mỗi 2,6 km)
- **Thác nước map núi**: các thác nhỏ rộng ngẫu nhiên 2–5 m, lưu lượng và tốc độ dòng khác nhau; chảy từ sườn núi cao xuống, tràn ngang mặt đường rồi tiếp tục xuống vực. Có vệt nước chuyển động và bọt ở chân thác; sinh dọc đường, giữ nguyên khi quay lại.
- **Cinematic** (luôn bật): dải đen letterbox 2.39:1, **xoá phông** theo ống kính thật (lấy nét vào xe, tiền cảnh/hậu cảnh nhoè kiểu bokeh), bloom quanh mặt trời/đèn, chỉnh màu phim, hạt phim, tối viền, camera hơi rung như quay cầm tay và cảnh mở đầu camera lia từ thấp ra sau xe
- **Tốc độ**: mặc định chạy chill **25 km/h** (W/S chỉnh 10–60 km/h); nút **⚡** (hoặc phím `F`) đổi cấp: 25 → **50 km/h** → **Fast drive 180 km/h** (blur tốc độ, góc nhìn rộng ra, camera rung nhẹ, gió ù ù) → về 25
- **Xe NPC**: cùng chiều xuất hiện mỗi 10–30 giây khi còn chỗ, tối đa 2 xe, đi vào từ phía sau; tốc độ hành trình ngẫu nhiên 50–200 km/h, biết né/phanh như xe ngược chiều. Xe ngược chiều xuất hiện mỗi 4–10 giây khi còn chỗ, tối đa 4 xe; tốc độ hành trình ngẫu nhiên 50–200 km/h. Phát hiện người và xe trong phạm vi 30 m tính từ mép thân, tìm khoảng trống để né; giảm tốc hoặc dừng khi bị chặn, rồi trở lại tốc độ hành trình. Vào cua giảm 40% tốc độ hành trình ở cả hai chiều, phanh trước cua và tăng tốc lại khi ra thẳng. Xe ngược chiều không vượt nhau: gặp xe chậm thì bám sau, giảm tốc chờ. Xe cùng chiều khi vượt kiểm tra làn vượt trống ít nhất 50 m phía trước xe bị vượt và thời gian xe đối diện tới; xe người chơi tự bám/vượt theo luật này. Có tiếng xe lướt qua theo tốc độ tương đối. Ban đêm bật đèn pha / đèn hậu
- **Xe**: chọn xe bằng nút 🚗: **Mustang '67 Đen** (mặc định, sơn đen bóng) · Mustang '67 Xanh · Bugatti Divo · Milk Truck (model glTF miễn phí, đều ≤ 250k triangles)
- **Ống kính** 📷 (nút hoặc phím `L`): vào game **16 mm f/1.4**; đổi sang camera ngoài xe bất kỳ thì về **24 mm f/5.6** (chạy 180 km/h: camera ngoài xe chuyển 16 mm, thôi chạy nhanh về 24 mm); camera trong xe 16 mm f/16. Zoom 16–35 mm, khẩu độ f/1.4–f/16; độ xoá phông tính theo cảm biến full-frame
- **Tay lái Mustang**: hai tay bám hai bên vành ở khoảng 9/3 giờ, khuỷu gập tự nhiên; vô lăng và tay tự xoay theo hướng/độ gắt của cua, phối hợp với thao tác đánh lái và trả giữa mượt khi ra thẳng. Góc trong xe thấy bàn tay và cẳng tay.
- **Camera**: sau xe · sát mặt đường · bên hông (ngang hông, lùi xa ~11 m, xe chiếm ~1/3 khung hình) · trong xe · **quay quanh** (mặc định) · từ trên cao; **bấm giữ + rê chuột / vuốt** để nhìn quanh 360° (thả tay camera vẫn giữ góc đã xoay, đổi camera thì về góc chuẩn), **lăn chuột / chụm 2 ngón / phím `+` `-`** để zoom (đổi tiêu cự)
- **Thời tiết**: nắng · nhiều mây · **gió lớn** (không rung lắc) · **mưa** (mặc định) · **bão** (trời âm u tối, mưa xối, sét + sấm; camera và xe không rung lắc) · tuyết · **sương mù** (chuyển cảnh mượt)
- **Bầu trời gradient** phối màu theo từng giờ (xanh trong ban ngày, cam–hồng–tím lúc hoàng hôn/bình minh, xanh than ban đêm), lớp mây thật, mây ti, sao; chân trời khớp màu với sương xa. **Mặt trời** lặn gần hướng đường chạy (vẫn lấp ló qua sương) + **tia nắng** xuyên qua hàng cây / mép đồi; **ban đêm** có **trăng** sáng (vân trăng, quầng sáng) chiếu sáng cảnh và đổ bóng, đèn pha dịu toả rộng, thỉnh thoảng có **đám đom đóm** nhấp nháy bay dọc mép đường
- **Sương mù** 🌫️ (nút hoặc phím `G`): chỉnh **Độ phủ** (cao thấp, từng đám hay phủ kín) và **Độ dày**; sương đọng dày ở thung lũng và trôi theo gió; chuyển sang **Ban đêm** thì độ phủ và độ dày tự về 60%
- **Map núi**: dưới thung lũng có các **thị trấn nhỏ** và **thị trấn lớn** gần đường hơn (3 dãy phố, có nhà cao tầng; cái đầu tiên ~1.3 km sau chỗ xuất phát) (nhà tường trắng, mái đỏ / nâu / xám) — ban đêm cửa sổ sáng đèn, quầng sáng ấm phủ trên thị trấn, **đèn đường** lác đác dọc con đường thung lũng
- **Mặt đường**: nhựa đường sần (hạt nhám, độ bóng lốm đốm), không trơn bóng; **mưa**: mặt đường ướt có **vũng nước phản chiếu** xe, đèn đường, bầu trời + gợn sóng giọt mưa; xe **tự bật gạt mưa** (bão gạt nhanh hơn; cần gạt quay thật, nhìn từ ngoài cũng thấy) — ngồi trong xe thấy giọt mưa bắn vào kính, đọng lại, chảy thành vệt, lưỡi gạt quét sạch từng lượt; kính sau có giọt nước và vệt chảy bám theo mặt kính cong thật, khung kính và ghế che nước đúng vị trí, hạt mưa ngoài trời được chặn trong thể tích xe
- **Đèn xe và đèn đường**: NPC hai chiều dùng rig đèn pha thật của xe người chơi, đèn pha/quầng trước còn 24% so với xe người chơi, đèn hậu 60%; quầng pha giảm theo hướng nhìn. Ánh sáng đèn đường trên mặt đường phủ rộng 24 × 28 m và giảm dần mềm ra mép.
- **Trong xe**: nhìn từ mắt người lái (2 tay cầm vành vô lăng), mặc định 16 mm f/16, góc nhìn tự canh để thấy trọn vô lăng (bọc da đen) và trọn gương chiếu hậu, lấy nét gần taplo; **màn hình giải trí** trên taplo (bản đồ, bài nhạc, tốc độ, giờ) hắt ánh sáng vàng ấm lên người lái — nhìn từ ngoài xe ban đêm cũng thấy, ánh sáng trong cabin toả ra từ màn hình taplo nên không tối om, kính có phản xạ, **gương chiếu hậu cạnh màn hình taplo, soi thật** cảnh phía sau, **hai gương hông** cũng soi thật (gương phẳng, tự chỉnh theo mắt người lái khi ngồi vào)
- **Ánh sáng ban ngày**: trời nắng cân bằng như máy ảnh thật — nắng trực tiếp mạnh hơn ánh trời khoảng 4–5 lần, phơi sáng giảm theo, nên bóng râm rõ, màu cỏ / mặt đường tự nhiên, bầu trời và phản chiếu trên xe không trắng loá
- **Thời gian**: bình minh · ban ngày · giờ vàng · **hoàng hôn** (mặc định) · ban đêm · tự động chạy hết ngày (đèn pha, đèn đường)
- **Điện thoại**: chạm lần đầu là tự vào **toàn màn hình** và khoá **nằm ngang** (Android), lỡ thoát ra (vuốt, xoay máy…) thì chạm lại là vào lại; nút ⛶ (chỉ hiện trên điện thoại) để chủ động tắt / bật toàn màn hình; cầm dọc thì hiện gợi ý xoay ngang (bỏ qua được); giao diện gọn cho màn hình ngang thấp, chừa tai thỏ. iPhone (Safari không cho web tự toàn màn hình): **Chia sẻ → Thêm vào MH chính** rồi mở từ biểu tượng để chơi toàn màn hình. Mức Good trên điện thoại giới hạn độ phân giải 1.25x cho nhẹ máy
- **Chất lượng** ⚙️ (nút hoặc phím `Q`): **Low / Good / Ultra** do người chơi chọn (mặc định **Good**; lựa chọn được nhớ trên máy). Low: độ phân giải 0.75, tắt xoá phông + phản chiếu vũng nước, cỏ thưa, chỉ cây tấm. Good: độ phân giải cao (tới mật độ điểm ảnh thật của màn hình), khử răng cưa 4x, cỏ dày, cây / bụi / đá model chi tiết trong bán kính 35 m. Ultra: **phạm vi hiển thị rộng gấp nhiều lần** — cây chi tiết tới 200 m, địa hình chi tiết xa gấp đôi, rừng xa rậm hơn, cỏ / lau trải xa gấp đôi; bóng đổ nét hơn, xoá phông mịn hơn
- **Dừng xe** 🅿️ (nút hoặc phím `P`): cận cảnh bánh xe chậm dần rồi dừng, cửa mở, người lái (áo phông đen) bước ra, **đóng cửa** rồi đi vòng lên trước đầu xe, rút điếu thuốc trong túi ra bật lửa châm hút, rồi **đi lanh quanh chill chill** trước đầu xe (trong vòng 10 m quanh chỗ dừng): đứng nhìn quanh, ngước nhìn trời, nhìn sang hai bên, thỉnh thoảng đi thêm vài bước — mọi cử động ngẫu nhiên; điếu thuốc kẹp giữa ngón trỏ - ngón giữa, rít thì đầu lọc ở môi, đầu thuốc đỏ rực; hạ tay nghỉ 3 s, rồi 5 s, sau đó ngẫu nhiên 5–12 s mới hút tiếp; khói bốc lên từ đầu điếu, nhả khói từ miệng, khói trôi theo gió. Camera: trung cảnh theo người → cận trung cảnh 50 mm lúc hút → sau hơi thứ hai lùi ra toàn cảnh, quay chậm quanh xe (giữ chuột rê / vuốt để xoay). Bấm lần nữa (▶️): vứt thuốc, từ chỗ đang đứng đi về cửa, mở cửa, ngồi vào, đóng cửa, chạy tiếp. Người lái ngồi sẵn trong xe khi chạy (ẩn ở camera trong xe)
- **Âm thanh**: nhạc lo-fi chill tự sinh bằng WebAudio + tiếng động cơ / gió / mưa; ngồi trong xe thì tiếng bên ngoài nhỏ đi 60% và trầm xuống, trời mưa nghe tiếng mưa lộp độp trên kính + rào rào trên mui

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
| `U` | bật / tắt toàn màn hình (nút ⛶) |

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
  wingmirrors.js  hai gương chiếu hậu hông (phản chiếu phẳng thật)
  wipers.js       gạt mưa tự động + lớp nước trên kính lái
  fireflies.js    đom đóm ban đêm dọc mép đường
  town.js         thị trấn + đèn đường dưới thung lũng (map núi)
  dashscreen.js   màn hình giải trí trên taplo + ánh sáng hắt lên người lái
  traffic.js      NPC hai chiều, spawn và tái sử dụng xe
  traffic-ai.js   tốc độ 50–200 km/h, phát hiện/né người và xe trong 30 m
  cows.js         đàn bò sữa + hàng rào gỗ (map đồi cỏ)
  person.js       người lái (animation, quần áo vẽ bằng shader)
  stopscene.js    cảnh dừng xe: cận bánh xe, mở cửa, người bước ra hút thuốc, camera quay quanh
  smoke.js        điếu thuốc + khói thuốc
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
