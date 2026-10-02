// Danh sách xe (xe đầu tiên là xe mặc định). Model đã nén meshopt + WebP, đặt trong docs/assets/models/.
// length  : chiều dài xe (m) sau khi chuẩn hoá kích thước
// rotX    : xoay model về trục Y-up nếu cần (radian)
// flip    : true nếu model quay ngược đầu/đuôi
// wheels  : regex tên node bánh xe (để quay bánh)
// eye     : vị trí mắt người lái [x, y, z] trong hệ toạ độ xe (z âm = về phía trước); mặc định: ghế trái
// hide    : regex tên node cần bỏ (đạo cụ trưng bày đi kèm model)
// optional: chỉ hiện nếu có file (kiểm tra trước khi tải)
// doubleSide: vẽ cả mặt sau của vật liệu (cho model không dựng mặt trong cabin)
export const CARS = [
  { id: 'mustang', name: "Mustang '67", file: 'assets/models/mustang.glb', length: 4.67, flip: true, eye: [-0.39, 1.08, 0.3], doubleSide: true,
    wheels: /^(Wheel|Tyre)/ },
  { id: 'mustang-blue', name: "Mustang '67 Xanh", file: 'assets/models/mustang-blue.glb', length: 4.67, flip: true, eye: [-0.39, 1.08, 0.3], doubleSide: true,
    wheels: /^(Wheel|Tyre)/ },
  { id: 'divo', name: 'Bugatti Divo', file: 'assets/models/bugatti-divo.glb', length: 4.64, flip: true, wheels: /^(4_3|5_17)$/ },
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
