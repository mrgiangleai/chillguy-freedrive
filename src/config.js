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
// lamps   : tâm bóng đèn pha (head) / đèn hậu (tail) bên phải [x, y, z] trong hệ toạ độ xe (đo từ model; bên trái lấy −x)
// seat    : tư thế ngồi lái (đo từ model): drop = hạ cụm ghế (m), hip = vị trí xương chậu [x, y, z], foot = cổ chân trái [x, y, z]
//           (phải lấy đối xứng quanh hip.x), recline = ngả lưng (rad)
// Mustang '67 (cả hai bản): ghế hạ 19 cm (phần đáy đệm khuất dưới sàn 0.362), trượt lên trước 16 cm; người ngồi trên đệm, lưng ngả nhẹ, chân duỗi tới sàn
const SEAT_67 = { drop: 0.19, forward: 0.16, hip: [-0.39, 0.45, 0.28], foot: [-0.48, 0.45, -0.48], recline: 0.1 };
const INTERIOR = { color: 0x0c0c0e, metalness: 0, roughness: 0.3, envK: 0.6 };   // nội thất nhựa / da đen bóng
export const CARS = [
  { id: 'mustang', name: "Mustang '67 Đen", file: 'assets/models/mustang.glb', length: 4.67, flip: true, eye: [-0.39, 1.08, 0.3], doubleSide: true, door: /^DriverDoor/,
    wheels: /^(Wheel|BrakeDisc)/,   // vành + đĩa phanh quay; lốp (dựng bẹt ở đáy) đứng yên
    // sơn đen bóng: lớp màu gần như đen, không ánh kim, không phản xạ riêng — phản chiếu chỉ đến từ lớp phủ bóng;
    // envK: phản chiếu môi trường yếu (vùng tối giữ đen, chỉ sáng ở chỗ loé nắng / mép trời). Vành bánh bớt lớp phủ bóng.
    // Nội thất đen bóng, ghế da nâu (seatMesh), vô lăng da đen (steerMesh) dời theo trục cột lái (steerShift âm = gần người lái hơn)
    mats: { Interior: INTERIOR, BlackPolished: { roughness: 0.18 },
      Paint: { color: 0x151619, metalness: 0, roughness: 0.42, specularIntensity: 0, clearcoat: 1, clearcoatRoughness: 0.07, envK: 0.4 }, Wheel: { clearcoat: 0.25 } },
    seatMesh: /^Cube\.?00[678]/, steerShift: -0.09,
    lamps: { head: [0.839, 0.661, -2.06], tail: [0.44, 0.769, 2.26] },
    seat: SEAT_67,
    steer: { c: [-0.385, 0.883, -0.155], n: [0, 0.338, 0.941], r: 0.17 }, steerMesh: /^(Torus\.?001|Cube\.?009)/ },   // vô lăng: tâm, pháp tuyến (hướng về người lái), bán kính vành; vành + cốt giữa
  { id: 'mustang-blue', name: "Mustang '67 Xanh", file: 'assets/models/mustang-blue.glb', length: 4.67, flip: true, eye: [-0.39, 1.08, 0.3], doubleSide: true, door: /^DriverDoor/,
    wheels: /^(Wheel|BrakeDisc)/,   // vành + đĩa phanh quay; lốp (dựng bẹt ở đáy) đứng yên
    mats: { Interior: INTERIOR, BlackPolished: { roughness: 0.18 }, Body: { clearcoatRoughness: 0.08 } },
    seatMesh: /^Seat/, steerShift: -0.09,
    lamps: { head: [0.838, 0.663, -2.065], tail: [0.44, 0.769, 2.26] },
    seat: SEAT_67,
    steer: { c: [-0.385, 0.883, -0.155], n: [0, 0.338, 0.941], r: 0.17 }, steerMesh: /^SteeringWheel/ },   // vô lăng: tâm, pháp tuyến (hướng về người lái), bán kính vành
  { id: 'divo', name: 'Bugatti Divo', file: 'assets/models/bugatti-divo.glb', length: 4.64, flip: true, wheels: /^(4_3|5_17)$/,
    basicMetal: { metalness: 0.6, roughness: 0.38 },   // vật liệu gốc bị chuyển đổi sai => kim loại bóng nhẹ cơ bản
    lamps: { head: [0.84, 0.66, -1.8], tail: [0.66, 0.73, 2.05] } },
  { id: 'milktruck', name: 'Milk Truck', file: 'assets/models/milktruck.glb', length: 5.0, flip: true, eye: [-0.6, 1.8, -1.3],
    wheels: /^Wheels/, lamps: { head: [0.82, 0.9, -2.38], tail: [0.79, 0.63, 2.39] } },
  { id: 'eb110', name: 'Bugatti EB110', file: 'assets/models/bugatti-eb110.glb', length: 4.4,
    flip: true, wheels: /^Wheel(F|R)[LR]$/,
    eye: [-0.36, 0.93, 0.12],
    seat: { hip: [-0.36, 0.22, 0.18], foot: [-0.45, 0.22, -0.65], recline: 0.16 },
    lamps: { head: [0.52, 0.53, -1.6], tail: [0.7, 0.68, 2.12] },
    mats: { Bugatti_EB110SS_By_Alex_Ka: { color: 0x2854c9, envK: 0.6 } } },
];

export const MAPS = [
  { id: 'reed', name: 'Đồng cỏ lau', icon: '🌾' },
  { id: 'forest', name: 'Đồi thông', icon: '🌲' },
  { id: 'mountain', name: 'Đường núi', icon: '⛰️' },
  { id: 'meadow', name: 'Đồi cỏ', icon: '🌿' },
  { id: 'sea', name: 'Biển', icon: '🌊' },
];

export const WEATHERS = [
  { id: 'clear', name: 'Trời trong', icon: '☀️' },
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
  { id: 'sunset', name: 'Hoàng hôn', icon: '🌇', hour: 17.6 },
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
export const FSTOP_DEFAULT = 0;     // f/1.4 lúc vào game

// mức chất lượng (người chơi tự chọn, không tự đổi theo máy). Mặc định Mid: bật đủ mọi hiệu ứng.
// ratio: độ phân giải so với màn hình (không vượt quá mật độ điểm ảnh thật của màn hình, trừ Low)
// msaa : khử răng cưa khi hậu kỳ | veg: mật độ cỏ lau / búi cỏ | shadow: độ nét bóng đổ
// refl : phản chiếu vũng nước khi mưa | dof: số mẫu xoá phông (0 = tắt)
// trees: bán kính (m) quanh camera dùng cây / bụi / đá model chi tiết thay cho cây tấm (0 = chỉ cây tấm)
// view: hệ số phạm vi hiển thị — địa hình chi tiết xa hơn, rừng xa rậm hơn, cỏ / lau xa hơn (1 = thường)
export const QUALITY = [
  { id: 'low', name: 'Low', ratio: 0.75, msaa: 0, veg: 0.35, shadow: 1024, refl: false, dof: 0, trees: 0, view: 1 },
  { id: 'good', name: 'Good', ratio: 1.5, msaa: 4, veg: 0.85, shadow: 2048, refl: true, dof: 36, trees: 35, view: 1 },
  { id: 'ultra', name: 'Ultra', ratio: 2, msaa: 4, veg: 1, shadow: 4096, refl: true, dof: 48, trees: 200, view: 2 },
];
export const QUALITY_DEFAULT = QUALITY.findIndex((q) => q.id === 'good');
