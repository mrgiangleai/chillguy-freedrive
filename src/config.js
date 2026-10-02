// Danh sách xe (xe đầu tiên là xe mặc định). Model đã nén meshopt + WebP, đặt trong docs/assets/models/.
// length  : chiều dài xe (m) sau khi chuẩn hoá kích thước
// rotX    : xoay model về trục Y-up nếu cần (radian)
// flip    : true nếu model quay ngược đầu/đuôi
// wheels  : regex tên node bánh xe (để quay bánh)
// eye     : vị trí mắt người lái [x, y, z] trong hệ toạ độ xe (z âm = về phía trước); mặc định: ghế trái
// hide    : regex tên node cần bỏ (đạo cụ trưng bày đi kèm model)
// optional: chỉ hiện nếu có file (kiểm tra trước khi tải)
// doubleSide: vẽ cả mặt sau của vật liệu (cho model không dựng mặt trong cabin)
// mats    : sửa thông số vật liệu theo tên (model tải về hay bị gắn sai kim loại / độ bóng)
// basicMetal: thay mọi vật liệu (trừ kính) bằng kim loại cơ bản với thông số này
// door    : regex tên node cửa tài xế (tách sẵn trong model) để mở cửa khi dừng xe
export const CARS = [
  { id: 'mustang', name: "Mustang '67", file: 'assets/models/mustang.glb', length: 4.67, flip: true, eye: [-0.39, 1.08, 0.3], doubleSide: true, door: /^DriverDoor/,
    wheels: /^(Wheel|BrakeDisc)/,   // vành + đĩa phanh quay; lốp (dựng bẹt ở đáy) đứng yên
    mats: { Interior: { metalness: 0, roughness: 0.62 }, BlackPolished: { roughness: 0.18 }, Paint: { clearcoatRoughness: 0.08 } } },
  { id: 'mustang-blue', name: "Mustang '67 Xanh", file: 'assets/models/mustang-blue.glb', length: 4.67, flip: true, eye: [-0.39, 1.08, 0.3], doubleSide: true, door: /^DriverDoor/,
    wheels: /^(Wheel|BrakeDisc)/,   // vành + đĩa phanh quay; lốp (dựng bẹt ở đáy) đứng yên
    mats: { Interior: { metalness: 0, roughness: 0.62 }, BlackPolished: { roughness: 0.18 }, Body: { clearcoatRoughness: 0.08 } } },
  { id: 'divo', name: 'Bugatti Divo', file: 'assets/models/bugatti-divo.glb', length: 4.64, flip: true, wheels: /^(4_3|5_17)$/,
    basicMetal: { metalness: 0.6, roughness: 0.38 } },   // vật liệu gốc bị chuyển đổi sai => kim loại bóng nhẹ cơ bản
  { id: 'milktruck', name: 'Milk Truck', file: 'assets/models/milktruck.glb', length: 5.0, flip: true, eye: [-0.6, 1.8, -1.3],
    wheels: /^Wheels/ },
];

export const MAPS = [
  { id: 'reed', name: 'Đồng cỏ lau', icon: '🌾' },
  { id: 'forest', name: 'Đồi thông', icon: '🌲' },
  { id: 'mountain', name: 'Đường núi', icon: '⛰️' },
];

export const WEATHERS = [
  { id: 'clear', name: 'Trời nắng', icon: '☀️' },
  { id: 'cloudy', name: 'Nhiều mây', icon: '☁️' },
  { id: 'windy', name: 'Gió lớn', icon: '💨' },
  { id: 'rain', name: 'Mưa', icon: '🌧️' },
  { id: 'storm', name: 'Bão', icon: '⛈️' },
  { id: 'snow', name: 'Tuyết', icon: '❄️' },
  { id: 'fog', name: 'Sương mù', icon: '🌫️' },
];

export const TIMES = [
  { id: 'sunrise', name: 'Bình minh', icon: '🌅', hour: 6.4 },
  { id: 'noon', name: 'Ban ngày', icon: '🌤️', hour: 12.5 },
  { id: 'golden', name: 'Giờ vàng', icon: '🌞', hour: 17.55 },
  { id: 'sunset', name: 'Hoàng hôn', icon: '🌇', hour: 17.85 },
  { id: 'night', name: 'Ban đêm', icon: '🌙', hour: 22.5 },
  { id: 'auto', name: 'Tự động', icon: '🕒', hour: null },
];

export const CAMERAS = [
  { id: 'chase', name: 'Sau xe' },
  { id: 'low', name: 'Sát mặt đường' },
  { id: 'side', name: 'Bên hông' },
  { id: 'cockpit', name: 'Trong xe' },
  { id: 'orbit', name: 'Quay quanh' },
  { id: 'drone', name: 'Từ trên cao' },
];

export const MUSIC_MODES = [
  { id: 'all', name: 'Nhạc + âm thanh', icon: '🎵' },
  { id: 'music', name: 'Chỉ nhạc', icon: '🎶' },
  { id: 'off', name: 'Tắt tiếng', icon: '🔇' },
];

// khẩu độ ống kính (f-number) cho hiệu ứng xoá phông; mặc định f/2
export const FSTOPS = [1.4, 1.8, 2, 2.8, 4, 5.6, 8, 11, 16];
export const FSTOP_DEFAULT = 2;

// mức chất lượng (người chơi tự chọn, không tự đổi theo máy). Mặc định Mid: bật đủ mọi hiệu ứng.
// ratio: độ phân giải so với màn hình (không vượt quá mật độ điểm ảnh thật của màn hình, trừ Low)
// msaa : khử răng cưa khi hậu kỳ | veg: mật độ cỏ lau / búi cỏ | shadow: độ nét bóng đổ
// refl : phản chiếu vũng nước khi mưa | dof: số mẫu xoá phông (0 = tắt)
// trees: bán kính (m) quanh camera dùng cây / bụi / đá model chi tiết thay cho cây tấm (0 = chỉ cây tấm)
export const QUALITY = [
  { id: 'low', name: 'Low', ratio: 0.75, msaa: 0, veg: 0.35, shadow: 1024, refl: false, dof: 0, trees: 0 },
  { id: 'mid', name: 'Mid', ratio: 1, msaa: 2, veg: 0.6, shadow: 2048, refl: true, dof: 24, trees: 25 },
  { id: 'good', name: 'Good', ratio: 1.5, msaa: 4, veg: 0.85, shadow: 2048, refl: true, dof: 36, trees: 35 },
  { id: 'ultra', name: 'Ultra', ratio: 2, msaa: 4, veg: 1, shadow: 4096, refl: true, dof: 48, trees: 50 },
];
export const QUALITY_DEFAULT = 1;
