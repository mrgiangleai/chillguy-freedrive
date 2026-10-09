import mazdaPaint from './mazda-paint.json' with { type: 'json' };
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
// Mustang '67: ghế hạ 19 cm (phần đáy đệm khuất dưới sàn 0.362), trượt lên trước 16 cm; người ngồi trên đệm, lưng ngả nhẹ, chân duỗi tới sàn
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
    steer: { c: [-0.385, 0.883, -0.155], n: [0, 0.338, 0.941], r: 0.153,
      grip: { radial: 0.025, depth: 0.065, align: true } }, steerMesh: /^(Torus\.?001|Cube\.?009)/ },   // vành thật ~15.3 cm; lòng bàn tay ôm vành, giữ ngón cong của clip lái
  { id: 'mazda-rx-vision', name: 'Mazda RX Vision Sport', file: 'assets/models/mazda-rx-vision.glb', length: 4.8,
    flip: true, wheels: /^WHEEL_(LF|LR|RF|RR)_/,
    eye: [0.394, 1.09, 0.45],
    seat: { hip: [0.394, 0.34, 0.48], foot: [0.49, 0.26, -0.58], recline: 0.1 },
    steer: { c: [0.394, 0.795, 0.082], n: [0, 0.156, 0.9878], r: 0.18 }, steerMesh: /^MazdaSteering_/,
    lamps: { head: [0.74, 0.57, -1.99], tail: [0.7, 0.838, 2.086] },
    mats: { body: { color: mazdaPaint.color, metalness: mazdaPaint.metalness, roughness: mazdaPaint.roughness,
      clearcoat: mazdaPaint.clearcoat, clearcoatRoughness: mazdaPaint.clearcoatRoughness,
      specularIntensity: mazdaPaint.specularIntensity, specularColor: mazdaPaint.specularColor, envK: mazdaPaint.envMapIntensity } } },
];

export const MAPS = [
  { id: 'reed', name: 'Đồng cỏ lau', icon: '🌾' },
  { id: 'forest', name: 'Đồi thông', icon: '🌲' },
  { id: 'mountain', name: 'Đường núi', icon: '⛰️' },
  { id: 'meadow', name: 'Đồi cỏ', icon: '🌿' },
  { id: 'sea', name: 'Biển', icon: '🌊' },
  { id: 'city', name: 'Phố', icon: '🏙️' },
  { id: 'avenue', name: 'Đại lộ', icon: '🛣️' },
];

export const WEATHERS = [
  { id: 'clear', name: 'Trời trong', icon: '☀️' },
  { id: 'cloudy', name: 'Nhiều mây', icon: '☁️' },
  { id: 'windy', name: 'Gió lớn', icon: '💨' },
  { id: 'rain', name: 'Mưa', icon: '🌧️' },
  { id: 'storm', name: 'Bão', icon: '⛈️' },
  { id: 'snow', name: 'Tuyết', icon: '❄️' },
  { id: 'fog', name: 'Sương mù', icon: '🌫️' },
  { id: 'auto', name: 'Tự động', icon: '🔄' },          // tự đổi thời tiết mỗi 2.5–5 phút (main.js: autoWeather)
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
  { id: 'all', name: 'Music + fx', icon: '🎵' },
  { id: 'music', name: 'Chỉ nhạc', icon: '🎶' },
  { id: 'off', name: 'Tắt tiếng', icon: '🔇' },
];

// khẩu độ ống kính (f-number) cho hiệu ứng xoá phông; mặc định f/3.5
export const FSTOPS = [1.4, 1.8, 2, 2.8, 3.5, 4, 5.6, 8, 11, 16];
export const FSTOP_DEFAULT = FSTOPS.indexOf(3.5);

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
