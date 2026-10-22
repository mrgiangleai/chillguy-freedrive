import * as THREE from 'three';

// Kính ướt khi mưa (dùng chung mọi map, gắn như withMist): kính tối + bóng hơn theo độ ướt. Bản nhẹ: không vệt nước chảy
// (xe không tới sát tòa nhà nên không thấy) — chỉ vài phép nhân trong shader MeshStandardMaterial, không thêm lượt vẽ.
export const WET = {
  uGlassWet: { value: 0 },                    // 0..1 = st.wet (main cập nhật mỗi khung)
};

// opts.grid: kính chỉ trong ô cửa của texture mặt tiền (facadeTex: 4 × 4 ô / texture, ô kính x 4..60, y 6..58 trên 64 px);
// không có => cả mặt là kính
export function withWetGlass(material, opts = {}) {
  const prev = material.onBeforeCompile;
  const prevKey = material.customProgramCacheKey;
  const hasPrev = prev && prev !== THREE.Material.prototype.onBeforeCompile;
  const grid = opts.grid && material.map ? 1 : 0;
  material.onBeforeCompile = function (shader, renderer) {
    if (hasPrev) prev.call(this, shader, renderer);
    Object.assign(shader.uniforms, WET);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uGlassWet;')
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
  if ( uGlassWet > 0.001 ) {
    float wg = uGlassWet;
    #if ${grid}
      vec2 cel = fract( vMapUv * 4.0 ) * 64.0;
      wg *= step( 4.0, cel.x ) * step( cel.x, 60.0 ) * step( 6.0, cel.y ) * step( cel.y, 58.0 );
    #endif
    roughnessFactor = mix( roughnessFactor, roughnessFactor * 0.55, wg );
    diffuseColor.rgb *= 1.0 - 0.22 * wg;
  }`);
  };
  const tag = (hasPrev ? prev.toString() : '') + (prevKey ? prevKey.call(material) : '');
  material.customProgramCacheKey = () => tag + '#wetglass' + grid;
  material.needsUpdate = true;
  return material;
}
