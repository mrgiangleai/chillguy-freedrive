# Hướng dẫn cho Claude (Chill Drive)

- **Đọc `ROAD.md` trước** khi sửa bất cứ thứ gì: trong đó có bản đồ mã nguồn, trạng thái tính năng, quy ước làm việc.
  Chỉ tra cứu thêm code / lịch sử khi ROAD.md không đủ — không cần đọc lại toàn bộ ngữ cảnh cũ.
  `ROAD-ARCHIVE.md` = bản đầy đủ cũ (100 KB): KHÔNG đọc cả file, chỉ `grep` đúng từ khoá khi ROAD.md thiếu chi tiết.
  Giữ ROAD.md ≤ ~30 KB: mỗi tính năng 1–3 dòng (file, thông số code dùng), không kể quá trình sửa.
- **Mỗi lần sửa xong** (mỗi yêu cầu của chú): thêm 1 mục vào "Nhật ký cập nhật" cuối `ROAD.md`, sửa các mục trạng thái liên quan,
  tăng "Bộ đếm cập nhật". Khi bộ đếm đạt **10/10**: đọc lại cả file, gộp nhật ký vào các mục trạng thái cho gọn,
  xoá nhật ký cũ (giữ 1 dòng "đã tóm tắt tới commit …"), đặt bộ đếm về 0/10.
- Trả lời bằng tiếng Việt, xưng "cháu", gọi người dùng là "chú".
- Chỉ push lên nhánh `claude/focused-gates-gcpbj9`; build bằng `node build.mjs` (output `docs/`); thử trên máy ảo ở chất lượng Low.
