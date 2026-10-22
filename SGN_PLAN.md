# Plan: Map Landmark 81 — TP.HCM (🌆 id `sgn`, nhóm Drive)

> Phiên mới: đọc `CLAUDE.md` → `ROAD.md` → file này. Làm từng bước, mỗi bước push 1 lần để chú test.
> Chú chốt 23/10/2026: **vòng sông + hầm + cầu**, **nhà thật OSM + Landmark 81 (và vài tòa nổi bật) dựng bằng code**.

## Trọng tâm (chú dặn 23/10/2026)
- **Làm đẹp, chi tiết khu quanh Landmark 81**: Vinhomes Central Park, đoạn Nguyễn Hữu Cảnh / Điện Biên Phủ trước Landmark, chân cầu Sài Gòn,
  bờ sông. Các đoạn còn lại (Tôn Đức Thắng, Võ Văn Kiệt, hầm, Mai Chí Thọ, Võ Nguyên Giáp) **chỉ cần đúng** (đường, hầm / cầu, nhà khối đơn giản).

## Tuyến vòng khép kín (đường thật OSM, xe chạy 2 chiều bên phải kiểu Việt Nam)
```
        cầu Sài Gòn ←←←←←← Xa lộ Hà Nội ←←←← nút An Phú
   Điện Biên Phủ ↓                                   ↑
  Nguyễn Hữu Cảnh ↓ (chân Landmark 81)               ↑ Mai Chí Thọ
    Ba Son / Tôn Đức Thắng ↓                         ↑
            Võ Văn Kiệt →→ hầm Thủ Thiêm (dưới sông) →→
```
- Bắt đầu ở Nguyễn Hữu Cảnh trước Landmark 81, chạy về Ba Son → Tôn Đức Thắng → Võ Văn Kiệt → hầm Thủ Thiêm → Mai Chí Thọ
  → nút An Phú → Xa lộ Hà Nội → cầu Sài Gòn → Điện Biên Phủ → Nguyễn Hữu Cảnh. ~11–12 km. Chiều chạy kiểm bằng OSM (một chiều / nhánh).

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
**B5 — Hoàn thiện**: âm thanh, bản đồ tròn, ghi công OSM (README + ⓘ), thử Low.

## Trạng thái
- [x] B1 (23/10/2026: vòng 17.86 km, hầm sâu 11 m, cầu Sài Gòn cao 12 m, check-sgn PASS)  - [ ] B2  - [ ] B3  - [ ] B4  - [ ] B5
