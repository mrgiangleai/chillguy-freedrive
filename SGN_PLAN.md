# Plan: Map Landmark 81 — TP.HCM (🌆 id `sgn`, nhóm Drive)

> Phiên mới: đọc `CLAUDE.md` → `ROAD.md` → file này. Làm từng bước, mỗi bước push 1 lần để chú test.
> Chú chốt 23/10/2026: **vòng sông + hầm + cầu**, **nhà thật OSM + Landmark 81 (và vài tòa nổi bật) dựng bằng code**.

## Trọng tâm (chú dặn 23/10/2026)
- **Làm đẹp, chi tiết khu quanh Landmark 81**: Vinhomes Central Park, đoạn Nguyễn Hữu Cảnh / Điện Biên Phủ trước Landmark, chân cầu Sài Gòn,
  bờ sông. Các đoạn còn lại (Tôn Đức Thắng, Võ Văn Kiệt, hầm, Mai Chí Thọ, Võ Nguyên Giáp) **chỉ cần đúng** (đường, hầm / cầu, nhà khối đơn giản).

## Tuyến vòng khép kín (đường thật OSM, chú chốt lại 23/10/2026 — chiều kim đồng hồ)
- Nguyễn Hữu Cảnh → **rẽ vào khu Vinhomes Central Park**: Vạn Hoa 4 (xuyên khu) → Vạn Hoa 3 → **Trần Trọng Kim** (đại lộ ven sông, sát chân
  Landmark 81) → Điện Biên Phủ (quay đầu dưới gầm cầu) → **cầu Sài Gòn 2** → Võ Nguyên Giáp (Thảo Điền) → An Phú → Mai Chí Thọ (Thủ Thiêm)
  → **hầm Thủ Thiêm** → Võ Văn Kiệt (Q1) → Tôn Đức Thắng → Nguyễn Hữu Cảnh. 18.45 km.
- **Đường nội khu Vinhomes là điểm nhấn chính** (chi tiết + chính xác: bề rộng / số làn thật, vỉa hè, cây, toà Park / Central / Landmark, công viên,
  bờ sông). Ngoài khu chỉnh sau (vd. đoạn vòng Q1 Phó Đức Chính / Nguyễn Công Trứ).

## Tham khảo khu Vinhomes (chú gửi 23/10/2026)
- Sketchfab "Demo Vinhome Central Park" (BI.Beo, 89k mặt): **không cho tải, không giấy phép** => chỉ xem ảnh để dựng lại bằng code, không lấy model.
  Bố cục trong ảnh: cụm ~15–20 tháp chung cư hộp chữ nhật 40–50 tầng (kính xám sọc dọc) xếp dãy quanh Landmark 81; công viên ven sông rất nhiều
  cây (cọ + cây tán tròn), lối đi lát màu; góc đông nam là dãy biệt thự mái dốc (Villas). Dựng: footprint + chiều cao OSM (tên Park / Central /
  Landmark 1–6), công viên + cây theo `leisure=park` OSM, bờ sông.

## Ảnh tham khảo chú gửi (23/10/2026, Google Street View + drone) — việc theo ảnh
- Không cần đúng số Landmark mấy; chỉ cần dáng ổn, chân tháp mỗi tòa hơi khác. Chú gửi thêm ảnh khi cần, làm trước 1 cái rồi cái khác sau.
- **Đường nội khu (Vạn Hoa 4 / 3, Trần Trọng Kim)**: đường đôi, mỗi chiều 2 làn (vạch trắng đứt, mép trắng liền), **dải phân cách giữa có bồn cây
  bụi + cây thân gỗ / cọ**, không vạch vàng; vỉa hè lát gạch xám, nhiều cây; biển "cấm đi ngược", tốc độ 20. Xe máy nhiều.
- **Cầu đi bộ xoắn đỏ – vàng** qua Trần Trọng Kim cạnh Landmark 81: ống lưới thép, vòng xoắn đỏ + vành vàng, 2 tháp trụ tròn sọc đen trắng có cầu thang xoắn.
- **Quảng trường đi bộ** giữa Landmark 81 và các tháp: đá lát bàn cờ, hồ nước nông lan can kính, đài phun sáng xanh ngọc / hồng ban đêm,
  tượng điêu khắc xanh lá, cọ, quán cà phê / cửa hàng ở chân tháp.
- **Mặt tiền chính Landmark 81**: khối đế Vincom Center ốp đá vàng nhạt + kính, biển quảng cáo lớn (Dior, màn hình), Katinat, Starbucks; đêm LED dọc vàng / trắng / tím.
- **Cầu Sài Gòn**: mỗi chiều 3 làn, dải phân cách bê tông (jersey) giữa, lan can thép, cột đèn cao màu xanh dương 2 tay; bên cạnh tuyến metro trên cao.
- Đêm từ công viên: cầu vòm đá trắng có đèn qua hồ, đài phun nước hồng, tháp sáng nhiều cửa sổ ấm.

## Cách làm: dùng lại khung map New York (vòng khép kín) + map Phố
- `mapKind('sgn') = 'city'`: đèn giao thông, người đi bộ, tai nạn, chấm điểm, bảng 🚦. Bộ cài đặt riêng `chilldrive.sgn`.
- `road.setShape('sgn', loop)` dùng chung code vòng của New York (s quấn vòng). Giao thông 2 chiều kiểu map Phố (không phải một chiều NYC).
- Độ cao: hầm Thủ Thiêm (sâu, có trần — dùng lại kiểu `NycWorks`), cầu Sài Gòn (cao ~10 m, có sông bên dưới).
- Sông Sài Gòn: mặt nước theo đa giác OSM (`natural=water` / `waterway=riverbank`).

## Các bước
- Mặc định khi vào map: **Hoàng hôn + Nhiều mây** (chú dặn, để chụp lại cùng cảnh).

**B1 — Dữ liệu + đường**: `scripts/fetch-sgn.mjs` (Overpass, cache `<tmp>/chilldrive-osm/sgn`) → `src/sgn-data.json` (heading mỗi 5 m, ngã tư,
đèn, số làn, hầm / cầu); `src/sgn.js` (hằng số, độ cao hầm / cầu); main: MAPS `sgn`, vào map, xe tự chạy vòng; `scripts/check-sgn.mjs`.
**B2 — Sông + hầm + cầu**: mặt nước sông Sài Gòn, tường / trần hầm Thủ Thiêm, cầu Sài Gòn (dầm thép, lan can, trụ).
**B3 — Nhà**: nhà thật OSM (footprint + chiều cao, thiếu thì đoán theo loại), Landmark 81 dựng code (tháp bó ống bậc thang, chóp),
Vincom / Bitexco nhìn từ xa, khu Vinhomes Central Park.
**B4 — Giao thông VN**: nhiều xe máy, taxi xanh, buýt; mạng đường thật quanh tuyến; biển tên đường VN.
**B5 — Hoàn thiện**: âm thanh, (bản đồ tròn + tên đường / khu: xong 23/10), ghi công OSM (README + ⓘ), thử Low.

## Trạng thái
- [x] B1 (23/10/2026: vòng 17.86 km, hầm sâu 11 m, cầu Sài Gòn cao 12 m, check-sgn PASS)  - [ ] B2  - [x] B3 khu Vinhomes (23/10: tháp Landmark 81 GLB, 347 nhà OSM, cỏ / nước / ~2 240 cây, đường nội khu đúng bề rộng; thiếu Landmark 1–6 trong OSM)  - [ ] B4  - [ ] B5
