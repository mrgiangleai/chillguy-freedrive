# Plan: Map New York (🗽, nhóm Drive) — B1 XONG (đường + vòng + rẽ + hầm + cầu cạn)

> Phiên mới: đọc `CLAUDE.md` → `ROAD.md` → file này. Làm theo từng bước, mỗi bước push 1 lần để chú test.
> Plan gốc soạn ở phiên cloud (bị chặn mạng); phiên Mac này tải OSM được (như map HLG) nên không cần mở mạng.

## Tuyến vòng khép kín (chú chốt 21/10/2026) — không tối màn hình
```
   7th Ave ←←←←←←←←←← W 55th St (đi về tây) ←←←←←←←←←← Park Ave
     ↓                                                    ↑  cầu cạn Park Ave quanh Grand Central (40–46 St)
     ↓ TIMES SQUARE (42–47 St)                            ↑  hầm Park Ave (33–40 St)
     ↓                                                    ↑
     →→→→→→→→→→→→→→→ E/W 32nd St (đi về đông) →→→→→→→→→→→→→
```
- 7th Ave một chiều xuống nam (qua Times Square) → rẽ trái vào 32nd St (đông) → rẽ trái lên Park Ave (bắc): xuống **hầm Park Ave**
  33–40 St, lên **cầu cạn** qua 42nd St / Pershing Square (nhìn xuống đám đông + xe), vòng quanh Grand Central, qua cổng Helmsley
  Building, xuống lại Park Ave ở 46 St → rẽ trái vào 55th St (tây) → rẽ trái vào 7th Ave. Cả 4 khúc là rẽ trái, đúng luật một chiều.
- Dài ~5.5–6 km (~8–9 phút ở 40 km/h). Đi gần Herald Square / Koreatown trên 32nd St.
- **Phải kiểm bằng OSM trước khi dựng** (chưa chắc 100%): chiều một chiều của 32nd St (đông) và 55th St (tây); hầm Park Ave chỉ chạy
  hướng bắc; nhánh cầu cạn hướng bắc. Sai thì đổi sang đường ngang bên cạnh có chiều đúng (chẵn thường đi đông, lẻ đi tây).

## Cách làm: tận dụng map Phố + cách làm map HLG
- `mapKind('nyc') = 'city'`: dùng lại đèn giao thông, người đi bộ, tai nạn + cảnh sát, chấm điểm, bảng 🚦 (km/h). Bộ cài đặt riêng
  `chilldrive.nyc` (thêm vào `SCOPED`, `DEF.scopes`).
- Đường + vị trí ngã tư từ dữ liệu (`road.setShape('nyc', real)` giống HLG: heading thật mỗi 5 m; vòng khép kín => s quấn vòng theo
  chiều dài vòng, KHÔNG quay đầu). Cua góc vuông thật ở 4 góc (bán kính nhỏ ~10–15 m) — cần kiểm `trafficCurveSpeed`, camera, cityTraffic.
- Bề rộng đường đổi theo đoạn: đại lộ 4–5 làn một chiều, đường ngang 1–2 làn hẹp (ROAD.halfWidth hiện là hằng số / map => cần
  bề rộng theo s hoặc vẽ vạch theo làn thật như HLG `laneCount`).
- Độ cao: hầm (đường xuống dưới mặt đất, có tường + trần) và cầu cạn (dùng lại deck của HLG `_buildBig` kind 'deck').

## Các bước
**B1 — Dữ liệu + đường + 4 khúc rẽ**
- `scripts/fetch-nyc.mjs` (Overpass, User-Agent bắt buộc, cache `<tmp>/chilldrive-osm/nyc`; xem `fetch-hlg.mjs` / `fetch-hlg-env.mjs`)
  → `src/nyc-data.json`: heading mỗi 5 m dọc vòng; ngã tư (s, tên, bề rộng, chiều một chiều đường ngang); đèn tín hiệu; số làn;
  đoạn hầm / cầu cạn (s0, s1, độ cao); ranh giới khu đi bộ Times Square.
- `src/nyc.js` (bố trí, như `hlg.js`): vạch kẻ kiểu Mỹ (mép trái vàng liền, chia làn trắng đứt, vạch qua đường sọc).
- Xe tự lái: ~150 m trước khúc rẽ tự bật xi nhan trái, nhập làn trái, giảm ~20 km/h, ôm cua; đèn đỏ chờ (NY cấm rẽ khi đỏ).
  Lái tay: rẽ sai làn / không xi nhan / rẽ khi người đang qua => lỗi (dùng `foul`).
- Menu map (MAPS `nyc`, nhóm Drive, phím M). `scripts/check-nyc.mjs`: vòng liền (điểm cuối ≡ điểm đầu), đúng chiều một chiều,
  ngã tư cách ~80 m, hầm / cầu dốc ≤ 6%.
**B2 — Toà nhà thật**: footprint + chiều cao OSM (NY có `height` / `building:levels`), dùng khung `hlgEnv.js`, mặt tiền kiểu NY
(kính cao tầng, gạch / đá tiền chiến, brownstone, tầng trệt cửa hàng có mái hiên); đồ phố: cột đèn, trụ cứu hoả, cửa tàu điện ngầm,
biển tên đường xanh, "ONE WAY". Việc 3D lớn có thể giao worker MiniMax (quy trình ở ROAD.md mục 2).
**B3 — Giao thông một chiều**: `cityTraffic` chế độ `oneway` (mọi xe cùng chiều 4 làn; ~40% taxi vàng, buýt, xe tải giao hàng),
xe đường ngang đúng chiều thật; đèn treo kiểu Mỹ + đèn đi bộ bàn tay / người; "làn sóng xanh"; giới hạn 25 mph (~40 km/h).
**B4 — Times Square đông người**: quảng trường đi bộ theo ranh giới thật, bậc thang đỏ (TKTS) ở góc 47 St dựng bằng code; biển LED
khổng lồ có hình động (thương hiệu tự chế), sáng ban đêm; hệ thống đám đông mới nhẹ (400–600 người, chỉ cập nhật kỹ người gần
camera, qua đường thành đợt khi đèn đi bộ xanh; map Phố hiện tối đa 96 người).
**B5 — Âm thanh + hoàn thiện**: còi xe dày, còi hụ, tiếng đám đông to dần ở quảng trường; bản đồ tròn vẽ lưới phố thật; ghi công OSM
(ODbL) trong README + ⓘ; cập nhật ROAD.md; thử Low trên máy ảo, chú thử hiệu năng điện thoại.

## Trạng thái
- [x] B1  - [ ] B2  - [ ] B3  - [ ] B4  - [ ] B5   (cập nhật ô này + ROAD.md sau mỗi bước)
- **Phản hồi chú sau B1 (21/10/2026)**: "nhìn không khác map Phố, không giống Times Square" — chú muốn kiểu ảnh low-poly Times Square
  (tháp One Times Square phủ biển LED ở giữa, nhà chọc trời kính, biển quảng cáo lớn nhiều tầng, quảng trường lát gạch + bậc đỏ TKTS).
  => ưu tiên làm **B4 (Times Square)** gộp phần nhà cao tầng của B2 cho đoạn 7th Ave 42–47 St trước, rồi mới phủ nhà thật cả vòng.
- **Times Square lượt 1 (21/10/2026)**: `src/timesSquare.js` + `src/adAtlas.js` — nhà chọc trời, biển LED động, tháp One Times Square,
  quảng trường + bậc đỏ TKTS (chi tiết ở ROAD.md mục 1). Chưa có: đám đông, biển cong quấn góc, taxi vàng, Broadway cắt chéo thật.

## Kết quả B1 (đã kiểm OSM 21/10/2026 — đúng hết, không phải đổi đường ngang)
- `scripts/fetch-nyc.mjs` dò từng chặng bằng Dijkstra trên đồ thị CÓ HƯỚNG chỉ gồm way đúng tên (sai chiều => dừng báo lỗi), chặng Park Ave
  bắt buộc qua cạnh tunnel + bridge, góc có nhiều node (đường đôi) thì quay lui. Kết quả: 7th Ave nam (1.84 km), 32nd St đông (0.90),
  Park Ave bắc (1.91, hầm way 46520834 một chiều bắc, cầu cạn có đoạn 2 chiều trước chỗ tách), 55th St tây (0.90). Vòng 5 543 m, 42 ngã tư
  (đại lộ cách ~80 m), hầm OSM s 2766–3189, cầu cạn 3319–3719, cổng Helmsley 3719–3793. Cầu cạn thật có 2 khúc 90° vòng quanh Grand Central.
- Làm mượt hướng trung bình trượt 24 m => góc vuông thành cung R ≈ 15.3 m (nửa cung 12 m, tiếp tuyến 15.3 m = `NYC.arc/tangent`, `CORNER` trong city.js).
- Độ cao (nyc.js `nycElevKeys`): hầm sâu 5.5 m, cầu cạn cao 6 m, dốc smoothstep ≤ 6 %; trần kín khi sâu > 4.8 m (390 m).
- Chưa làm (để bước sau): bề rộng đường theo đoạn (đang 4 làn 7.2 m mọi nơi), nhà thật, Grand Central / Helmsley, xe buýt / taxi vàng,
  đường ngang dưới cầu cạn (42 St) và trên hầm (33–39 St) chưa vẽ, góc trong khúc cua để trống.
