# Chill Drive 🚗🌇

Web app lái xe thư giãn trên con đường vô tận, dùng **three.js** (JavaScript + HTML thuần, không cần build).

- **Xe**: chọn xe bằng nút 🚗 (model glTF miễn phí, đều ≤ 250k triangles)
- **Camera**: sau xe · sát mặt đường · đầu xe · trong xe · quay quanh · từ trên cao
- **Thời tiết**: nắng · nhiều mây · mưa · tuyết · sương mù (chuyển cảnh mượt)
- **Thời gian**: bình minh · ban ngày · hoàng hôn · ban đêm · tự động chạy hết ngày (đèn pha, đèn đường, sao, trăng)
- **Âm thanh**: nhạc lo-fi chill tự sinh bằng WebAudio + tiếng động cơ / gió / mưa

## Điều khiển

| Phím | Tác dụng |
| --- | --- |
| `A` `D` / `←` `→` | đánh lái sang trái / phải (buông tay xe tự về giữa làn) |
| `W` `S` / `↑` `↓` | tăng / giảm tốc độ |
| `C` | đổi camera · `V` đổi xe · `R` đổi thời tiết · `T` đổi giờ · `M` đổi chế độ âm thanh |
| `H` | ẩn / hiện giao diện |

Trên điện thoại: kéo ngón tay sang trái/phải để lái, kéo lên/xuống để tăng/giảm tốc.

## Chạy trên GitHub Pages

1. Vào **Settings → Pages**.
2. **Source**: *Deploy from a branch* → chọn branch chứa code này, thư mục **/ (root)** → Save.
3. Chờ ~1 phút, mở `https://<tên-user>.github.io/chillguy-freedrive/`.

Chạy thử trên máy: `npx http-server -p 8080` (hoặc `python3 -m http.server 8080`) rồi mở `http://localhost:8080`.
(Phải chạy qua server, mở thẳng file `index.html` sẽ không tải được module.)

## Thêm xe Mustang 1967

Slot Mustang đã được cấu hình sẵn: tải file `.glb` về, đặt tên **`assets/models/mustang.glb`** là app tự nhận và đặt làm xe đầu tiên (mặc định).
Nếu xe bị quay ngược đầu/đuôi, đặt `flip: true` trong `js/config.js`.

## Cấu trúc

```
index.html, style.css
js/main.js      vòng lặp, điều khiển, giao diện
js/road.js      đường vô tận (hình học đường)
js/scenery.js   mặt đường, cây, đèn đường, núi, mặt đất
js/world.js     bầu trời, ánh sáng, giờ trong ngày, thời tiết
js/particles.js mưa / tuyết (shader)
js/cars.js      tải & chuẩn hoá model xe, bánh xe quay, đèn pha
js/camera.js    các chế độ camera
js/audio.js     nhạc lo-fi + âm thanh môi trường
vendor/three    three.js r160 (đã đóng gói sẵn, chạy được không cần mạng ngoài)
assets/         model xe + texture
```

## Credits & giấy phép

- [three.js](https://threejs.org) r160 — MIT (gồm `Sky.js`, `GLTFLoader.js`, `BufferGeometryUtils.js`)
- **Car Concept** — Eric Chadwick / Darmstadt Graphics Group, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [Khronos glTF Sample Assets](https://github.com/KhronosGroup/glTF-Sample-Assets)
- **Toy Car** — Guido Odendahl & Eric Chadwick, [CC0](https://creativecommons.org/publicdomain/zero/1.0/) · Khronos glTF Sample Assets (đã bỏ tấm vải trưng bày đi kèm model)
- **Cesium Milk Truck** — Cesium, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · Khronos glTF Sample Assets
- Texture cỏ `grasslight-big.jpg` — three.js examples (thu nhỏ còn 1024px)
- Cây, núi, đường, đèn đường: hình khối đơn giản tạo bằng code
- Nhạc: tự sinh bằng code (không dùng bản ghi âm nào)
