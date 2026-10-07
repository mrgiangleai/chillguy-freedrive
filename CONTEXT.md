# Bàn giao context — 07/10/2026

## Điểm bắt đầu
- Dự án: `/Users/keinle/Desktop/VIBECODE NEW/GAME/Chill drive`
- Remote: `https://github.com/mrgiangleai/chillguy-freedrive.git`
- **Nhánh đang làm: `experiment/webgpu-vertical-slice`** (local, **chưa push**; `origin` mới chỉ có `claude/focused-gates-gcpbj9`).
- **Game chính (`src/`, `docs/`, `scripts/`) tạm khoá**: không can thiệp khi đang làm experiment. Chỉ mở lại khi có yêu cầu riêng.

## Dòng công việc hiện tại: experiment WebGPU
- Thư mục: `experiments/webgpu/` — editor sandbox + runtime **WebGPU/TSL + Rapier** (Vite), tách khỏi game chính.
- Giai đoạn đầu: `index.html`, `main.js` (composition root), `editor/modules/{CharacterController,PhysicsModule,LandscapeModule,LightingModule}.js`.
- Tài liệu kế hoạch: `experiments/webgpu/docs/GAMESTUDIO_ROADMAP.md` (lộ trình milestone) và `CHILL_DRIVE_PARITY_AUDIT.md` (đối chiếu parity với game chính).
- Ràng buộc theo roadmap: giữ baseline WebGPU/TSL, Character/Vehicle cards, Character Control + Rapier, OrbitControls tắt khi control/1Person, Landscape/Terrain/Sculpt/Paint/Water, **Global Physics mặc định OFF**, autosave `wgpuSandbox.v2`. File game chính ở root là read-only, chỉ chép thuật toán/asset đã duyệt vào experiment.

## Quyết định còn hiệu lực
- Bỏ track build output + model test nặng để tránh phình repo:
  - `experiments/webgpu/.gitignore` ignore `node_modules/`, `dist/`, `public/models/stress/`, `public/models/venom.glb`.
  - Đã `git rm --cached` + **viết lại lịch sử 9 commit local** của nhánh experiment (purge blob nặng) rồi `git gc`. `.git` **675 MB → 145 MB**. File nặng **vẫn còn trên đĩa**, chỉ ngừng track.
  - Hệ quả: hash 9 commit local đã đổi (nhánh chưa push nên an toàn); lần push đầu cần `git push -u origin experiment/webgpu-vertical-slice`.
- Chưa cài `git-lfs` / `git-filter-repo` (đã dùng `git filter-branch` có sẵn).

## Kiểm tra gần nhất
- `npm run build` (game chính): OK, `docs/app.js` khớp `src/` (không phát sinh diff).
- Experiment: **chưa** chạy build/test (Vite + WebGPU); `npm test` mặc định còn báo lỗi.

## Next action
- Xây dựng vertical slice WebGPU theo roadmap (ưu tiên slice chơi được sớm). Hỏi chủ dự án chọn milestone trước khi mở rộng.

## Quy tắc làm việc
- Xem `AGENTS.md`. Context mới chỉ cần đọc `CONTEXT.md` + `AGENTS.md`; không quét lại codebase, không đọc lại lịch sử dài, tránh poll/retry/verify lặp.
