# Bàn giao context — 08/10/2026

## Điểm bắt đầu
- Dự án: `/Users/keinle/Desktop/VIBECODE NEW/GAME/Chill drive`
- Remote: `https://github.com/mrgiangleai/chillguy-freedrive.git`
- **Nhánh đang làm: `experiment/webgpu-vertical-slice`** (local, **chưa push**; origin chỉ có `claude/focused-gates-gcpbj9`).
- **Game chính (`src/`, `docs/`, `scripts/`) tạm khoá** — không can thiệp; chỉ mở khi có yêu cầu riêng.

## Dòng việc: experiment `experiments/webgpu/`
Editor + runtime WebGPU/TSL + Rapier (Vite), tách khỏi game chính. Đang làm lại UI theo hướng **Lumion**.

### Cách chạy (dùng server lưu chung)
- `cd experiments/webgpu && npm start` → `node server.mjs`, mở `http://localhost:4173`.
- Server phục vụ `dist/` + API lưu dự án ra `experiments/webgpu/.store/` (gitignore): `project.json`, `blobs/` (GLB import), `meshes/` (terrain sculpt/paint).
- `npm run build` = `vite build`; `npm run preview` = `vite preview` (khi đó tự fallback lưu theo từng trình duyệt: localStorage + IndexedDB).
- Lưu ý: scene tự nạp 6 model test (~625 MB) → lần đầu tải ~45–60 s. Ảnh chụp từ agent cần cửa sổ desktop hiển thị (thường fail trong harness).

### Tính năng đã có
- **Tự lưu**: mọi thay đổi (object, đèn, vật liệu, terrain mesh, import GLB, scene/camera/DOF, effects, layers) + flush khi thoát. Lưu cả localStorage lẫn server.
- **Server lưu chung + chống đè**: có `rev`/conflict (409); tab cũ không ghi đè bản mới; tab tự reload khi có thay đổi từ trình duyệt khác (không realtime tức thời).
- **UI kiểu Lumion**: mode bar ở đáy (icon + nhãn) + nút **UI** (chỉnh độ mờ/màu nền/màu chữ) + **Theatre** (H) ẩn UI; **library trái** (lưới thumbnail + search) / **inspector phải**; **Effects stack** (thêm/bật-tắt/đổi thứ tự/xoá); **placement Move/Rotate/Scale** + Layers; panel **kéo-thả, snap 2 chiều, không đè** (hẹp thì tự xếp dọc).
- Đã sửa lỗi handler thiếu: `objectCamera`, `selectModelTransform`.

## Commit gần đây
- `592dcb2` UI refresh + auto-save + shared store · `0aceb09` P1 shell · `2ff12e5` P2 library grid · `90675ff` P3 effects · `4f72c6b` P4 placement + layers.
- **Chưa commit**: panel kéo-thả/snap/không đè + nút cấu hình UI (`main.js`, `editor/core/ui.js`, `editor/core/icons.js`) — cần commit.

## Việc còn mở / next action
- Commit thay đổi panel/UI-settings đang dở.
- **P5 — polish**: khoảng cách/đồng bộ icon/tăng tương phản/EN-VI; và các yêu cầu tiếp của chủ dự án.
- Giới hạn đã biết: import GLB **nén meshopt** lỗi (`setMeshoptDecoder must be called`) — lỗi loader có sẵn, không liên quan lưu trữ.
- Chưa push nhánh experiment; lần đầu cần `git push -u origin experiment/webgpu-vertical-slice`.

## Quy tắc làm việc
- Xem `AGENTS.md`. Context mới chỉ đọc `CONTEXT.md` + `AGENTS.md`; không quét lại codebase, không đọc lịch sử dài, tránh poll/retry/verify lặp.
