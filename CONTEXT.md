# Bàn giao context — 06/10/2026

## Điểm bắt đầu

- Dự án: `/Users/keinle/Desktop/VIBECODE NEW/GAME/Chill drive`
- Remote: `https://github.com/mrgiangleai/chillguy-freedrive.git`
- Nhánh: `claude/focused-gates-gcpbj9`
- Mã tính năng đã push thành công đến `b0d0515`. Đây là thông tin bàn giao tại thời điểm ghi; không cần kiểm tra lại nếu công việc mới không phụ thuộc trạng thái Git.
- Cảnh mở đầu mới: đồi cỏ, camera quay quanh, nhiều mây, ban đêm, 180 km/h dưới lớp mờ. Bấm Start bỏ mờ, giữ 180 km/h thêm 3 giây rồi giảm đều về 25 km/h; chỉ khi đạt 25 km/h mới chuyển camera sau xe bằng nội suy 2 giây.
- Kiểm tra thay đổi mở đầu: `npm run build` thành công; chưa xác nhận GUI.
- Không còn mục chức năng đang chờ. Chờ yêu cầu tiếp theo của người dùng.
- Quy tắc làm việc hiện tại nằm trong `AGENTS.md`. Context mới chỉ cần đọc `CONTEXT.md` + `AGENTS.md`; không đọc lại toàn bộ context/lịch sử cũ hoặc quét codebase. Task đơn giản xử lý trực tiếp, chỉ mở file code liên quan khi cần; không gọi agent phụ nếu agent chính tự làm được. Tránh poll/retry/verify lặp. Riêng khi chạy bằng Codex: `git add`/`git commit` có thể bị sandbox chặn `.git/index.lock` (`Operation not permitted`); dùng cơ chế quyền phù hợp, chỉ retry tối đa 1 lần, lần hai vẫn lỗi thì dừng và báo người dùng cách xử lý. Commit theo task/mốc hợp lý, không theo từng chỉnh sửa nhỏ. Khi thread dài hoặc xong phase, cập nhật handoff ngắn rồi mở context mới.
- Đã lấy bộ `chilldrive.tuning.v1` cuối từ Safari ngày 06/10/2026 và ghi thành mặc định trong source: camera sau xe 16 mm; bên hông cách 23.2 m, cao 4.35 m, f/1.8; quay quanh bán kính 30 m, cao 7.5 m, nhấp nhô 3 m/nhịp 2, quay 0.13, f/2.8; đèn xe và đèn đường theo bộ đã chỉnh. Thời tiết và ánh sáng chung trong bộ lưu trùng với mặc định source. Trình duyệt mới dùng bộ mặc định này; các chỉnh sửa tiếp theo vẫn lưu riêng bằng localStorage, cần ghi source và push lại để chia sẻ.

## Các mục vừa hoàn tất

- `aac3ba5` — bảng chỉnh trực tiếp camera, thời tiết và thời gian; lưu thông số trong trình duyệt.
- `33687bb` — bấm đèn xe người chơi để chỉnh; đèn đường chỉ nhận bấm khi chế độ dừng xe hoạt động.
- `b0d0515` — sương mặc định phủ 90%, dày 40%; ẩn nút sương và ống kính; mặc định 24 mm f/3.5; mỗi camera lưu tiêu cự và khẩu độ riêng; đổi camera nội suy vị trí, cao độ, điểm nhìn và ống kính trong 2 giây.

## Code liên quan nếu người dùng yêu cầu sửa tiếp

- `src/main.js`: bảng chỉnh runtime, lưu localStorage (`chilldrive.tuning.v1`), chọn đèn bằng thao tác bấm, mặc định sương, nối UI với camera.
- `src/camera.js`: cấu hình từng camera và chuyển camera 2 giây.
- `src/config.js`: danh sách khẩu độ, mặc định f/3.5.
- `src/world.js`: cấu hình thời tiết và ánh sáng môi trường.
- `src/headlights.js`: thông số chùm sáng/quầng đèn xe.
- `src/scenery.js`: thông số ánh sáng và chọn đèn đường.
- `docs/index.html`, `src/style.css`: giao diện; `docs/app.js`, `docs/style.css` được tạo bởi build.

## Kiểm tra đã thực hiện trước khi push

- `npm run build` thành công.
- `scripts/check-live-tuning.mjs`: thông số từng camera, nội suy 2 giây và reset thành công.
- `scripts/check-light-tuning.mjs`: thông số chùm sáng/quầng áp dụng trực tiếp thành công.
- `scripts/check-steering.mjs`: kiểm tra 2.500 vị trí đường thành công.
- GUI: đã thấy bảng chỉnh đèn xe; hai nút sương/ống kính đã ẩn; sương 90/40; camera 24 mm f/3.5; phiên kiểm tra sạch không có lỗi console.
- Thao tác bấm đèn đường khi dừng xe chưa được xác nhận trực tiếp bằng GUI; điều kiện đã được kiểm tra trong code. Không cần kiểm tra thêm nếu người dùng chưa yêu cầu.

Không lặp lại các kiểm tra trên chỉ để mở context mới. Chỉ đọc/sửa phần liên quan đến yêu cầu mới.
