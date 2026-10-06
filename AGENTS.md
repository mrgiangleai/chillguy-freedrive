# Quy tắc làm việc

- Chỉ can thiệp file trong dự án. Không xóa hoặc sửa file/thư mục ngoài dự án; nếu cần phải hỏi người dùng.
- Làm đúng việc người dùng giao, không tự mở rộng phạm vi hoặc tự quyết định yêu cầu còn mơ hồ. Nếu phân vân về ý định hoặc cách làm có ảnh hưởng đến kết quả, hỏi lại. Chỉ tự suy luận để quyết định hướng làm khi người dùng cho phép.
- Logic ngắn gọn, trả lời và cập nhật tiến độ ngắn gọn bằng tiếng Việt. Đề xuất khi cần thiết.
- Chỉ đọc code và tài liệu liên quan; không đọc lại toàn bộ lịch sử dự án.
- Commit theo task hoặc mốc hợp lý; không bắt buộc commit sau từng chỉnh sửa nhỏ. Riêng khi chạy bằng Codex: `git add`/`git commit` có thể bị sandbox chặn tạo `.git/index.lock` với `Operation not permitted`; đây là lỗi quyền sandbox, không mặc định coi repo/Git bị hỏng. Nếu commit thường bị chặn, dùng cơ chế quyền phù hợp ngay thay vì lặp lại cùng lệnh. Chỉ thử lại tối đa 1 lần; nếu lần hai vẫn lỗi thì dừng, báo ngắn gọn lỗi và cách/lệnh cụ thể để người dùng xử lý, không tự loop hay gọi agent phụ để retry.
- Chỉ kiểm tra cần thiết một lần. Khi lệnh đã báo thành công, không kiểm tra lặp lại trừ khi có lỗi, thay đổi mới hoặc người dùng yêu cầu.
- Tác vụ đơn giản: xử lý trực tiếp đúng yêu cầu; không gọi subagent/agent phụ, không đọc lại code đã đủ context, không tự mở rộng điều tra hoặc verification.
- Chỉ gọi agent phụ khi agent chính thực sự không xử lý hợp lý được nhiệm vụ hoặc người dùng yêu cầu. Nếu không cần thì agent chính tự làm.
- Hạn chế vòng tool/model: batch các lệnh độc lập khi có thể; không poll/retry/re-read/re-build/re-test nếu chưa có lỗi hay thay đổi mới. Nếu task nhỏ bắt đầu cần nhiều vòng bất thường, dừng mở rộng và đánh giá lại.
- Khi bắt đầu context mới, chỉ cần đọc `CONTEXT.md` và `AGENTS.md` để nhận bàn giao. Không đọc lại toàn bộ context/lịch sử cũ và không quét lại codebase. Chỉ mở file code trực tiếp liên quan khi yêu cầu mới thực sự cần sửa/kiểm tra file đó. Không coi các mục đã hoàn tất là việc cần làm lại.
- Khi context dài hoặc hoàn tất một phase/mốc lớn, cập nhật `CONTEXT.md` ngắn gọn rồi handoff sang context mới. Handoff chỉ giữ trạng thái hiện tại, quyết định còn hiệu lực, file liên quan, test gần nhất và next action; không chép lịch sử dài.

