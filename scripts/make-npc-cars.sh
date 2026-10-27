#!/bin/zsh
# Bản nhẹ xe thật cho giao thông NPC (src/npcCars.js): docs/assets/models/<xe>.glb -> docs/assets/models/npc/<xe>.glb
# Giữ tên node/mesh/vật liệu (bánh, sơn, kính dùng như xe mình); simplify ~24k tam giác/xe, ảnh WebP 256, meshopt.
# Cần gltf-transform 4.x (vd `npm i -g @gltf-transform/cli` hoặc đặt GT=đường dẫn tới lệnh).
set -e
cd "$(dirname "$0")/.."
GT=${GT:-gltf-transform}
O=(--compress meshopt --texture-compress webp --texture-size 256 --join false --flatten false --instance false --palette false
   --simplify true --simplify-error 0.03 --simplify-lock-border false)
mkdir -p docs/assets/models/npc
$GT optimize docs/assets/models/mustang.glb docs/assets/models/npc/mustang.glb $O --simplify-ratio 0.05
$GT optimize docs/assets/models/mazda-rx-vision.glb docs/assets/models/npc/mazda-rx-vision.glb $O --simplify-ratio 0.01
