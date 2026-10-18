// Module dùng chung (game src/world.js + editor experiments/webgpu/editor/core/sky.js): bảng màu bầu trời.
// Giữ dạng mã màu hex (không phụ thuộc three); mỗi bên tự đổi sang THREE.Color của bản three mình dùng.
// Các mốc màu theo độ cao mặt trời e (độ):
//            e,    đỉnh trời,  giữa,      chân trời, dải ấm phía mặt trời, quầng mặt trời
export const SKY_KEYS = [
  [-18, '#040a1a', '#08142c', '#122244', '#122244', '#000000'],
  [-9, '#06102e', '#0e1d47', '#1f2d5a', '#363562', '#24182c'],
  [-4, '#122052', '#2a3c79', '#67588d', '#d06e7a', '#a24a40'],
  [0, '#1d3d80', '#4868ab', '#e3987c', '#ff8a48', '#ff7030'],
  [4, '#2453a0', '#6286c4', '#f0bd92', '#ffb36c', '#ff9a52'],
  [10, '#2a64b4', '#719fd9', '#f1d9bd', '#ffd59c', '#ffcf88'],
  [22, '#2468c8', '#5b9be3', '#c6def3', '#e1edf5', '#fff1d6'],
  [50, '#1e5fc4', '#4f92e0', '#b4d4f2', '#d2e5f3', '#fff7e6'],
];

// Đổi bảng hex sang màu: Color = lớp THREE.Color của bên gọi.
export const skyKeys = (Color) => SKY_KEYS.map(([e, ...c]) => [e, ...c.map((h) => new Color(h))]);
