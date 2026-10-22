import * as THREE from 'three';

// Kính ướt khi mưa (dùng chung mọi map, gắn như withMist): kính tối + bóng hơn, vệt nước mảnh chảy dọc mặt kính làm méo nhẹ
// ánh phản chiếu. Không thêm lượt vẽ — chỉ chèn vào shader MeshStandardMaterial. Độ ướt / thời gian dùng chung (main cập nhật mỗi khung).
export const WET = {
  uGlassWet: { value: 0 },                    // 0..1 = st.wet
  uGlassT: { value: 0 },                      // giây
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
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWgPos;\nvarying vec3 vWgNor;')
      .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
  vWgPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
  vWgNor = normalize( mat3( modelMatrix ) * objectNormal );`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
uniform float uGlassWet, uGlassT;
varying vec3 vWgPos;
varying vec3 vWgNor;
float wgHash( float n ) { return fract( sin( n * 127.1 ) * 43758.5453 ); }
float wgMask;      // 0..1: phần kính được làm ướt (sau khi nhân độ ướt)
float wgStreak;    // vệt nước tại điểm ảnh
`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
  wgMask = 0.0; wgStreak = 0.0;
  if ( uGlassWet > 0.001 ) {
    float glass = 1.0;
    #if ${grid}
      vec2 cel = fract( vMapUv * 4.0 ) * 64.0;
      glass = step( 4.0, cel.x ) * step( cel.x, 60.0 ) * step( 6.0, cel.y ) * step( cel.y, 58.0 );
    #endif
    float up = abs( vWgNor.y );
    wgMask = glass * uGlassWet * ( 1.0 - smoothstep( 0.5, 0.8, up ) );        // chỉ mặt đứng
    if ( wgMask > 0.0 ) {
      // vệt nước: cột 0.22 m dọc tường, 40 % cột có vệt; mỗi vệt là các đoạn dài chảy xuống với tốc độ riêng
      vec2 tg = normalize( vec2( -vWgNor.z, vWgNor.x ) + 1e-5 );
      float h = dot( vWgPos.xz, tg ) / 0.22, col = floor( h ), r = wgHash( col );
      float xin = abs( fract( h ) - 0.5 - ( r - 0.5 ) * 0.5 );
      float run = fract( ( vWgPos.y + uGlassT * ( 0.35 + 0.9 * wgHash( col + 3.7 ) ) ) * ( 0.18 + 0.2 * r ) + r * 9.0 );
      float line = ( 1.0 - smoothstep( 0.04, 0.12, xin ) ) * smoothstep( 0.0, 0.15, run ) * ( 1.0 - smoothstep( 0.55, 0.75, run ) );
      float far = 1.0 - smoothstep( 15.0, 70.0, length( vWgPos - cameraPosition ) );   // xa: vệt quá mảnh => chỉ còn độ bóng chung
      wgStreak = step( r, 0.4 ) * line * far * wgMask;
    }
    roughnessFactor = mix( roughnessFactor, roughnessFactor * 0.55, wgMask ) * ( 1.0 - 0.5 * wgStreak );
    diffuseColor.rgb *= 1.0 - 0.22 * wgMask;
  }`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
  if ( wgStreak > 0.0 ) {
    vec3 tv = normalize( ( viewMatrix * vec4( -vWgNor.z, 0.0, vWgNor.x, 0.0 ) ).xyz );
    normal = normalize( normal + tv * 0.18 * wgStreak );                     // mép vệt nước bẻ ánh phản chiếu
  }`);
  };
  const tag = (hasPrev ? prev.toString() : '') + (prevKey ? prevKey.call(material) : '');
  material.customProgramCacheKey = () => tag + '#wetglass' + grid;
  material.needsUpdate = true;
  return material;
}
