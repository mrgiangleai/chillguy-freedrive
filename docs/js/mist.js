import * as THREE from 'three';

// Sương mù tầng thấp (height fog) chỉnh được ĐỘ PHỦ và ĐỘ DÀY, cộng thêm vào sương xa có sẵn của three.js.
// - Mật độ giảm theo hàm mũ khi lên cao (dày ở mặt đường / thung lũng, loãng dần lên trên).
// - Độ phủ: chiều cao lớp sương + mức "từng đám" (thấp: các đám sương rời rạc; cao: phủ kín).
// - Độ dày: mật độ sương.
// - Các đám sương trôi theo gió.
// Cách làm: thay các đoạn shader fog_* của three.js (áp dụng cho mọi vật liệu có fog),
// uniform dùng chung được gắn vào từng vật liệu qua withMist().
export const MIST = {
  uMistD: { value: 0 },                       // mật độ ở cao độ gốc (1/m)
  uMistH: { value: 12 },                      // độ dày lớp theo chiều cao (m)
  uMistBase: { value: 0 },                    // cao độ gốc (theo mặt đường chỗ xe)
  uMistCover: { value: 0.5 },                 // 0..1
  uMistT: { value: 0 },
  uMistWind: { value: new THREE.Vector2() },
  uMistColor: { value: new THREE.Color() },   // màu đã ở không gian hiển thị (như fogColor)
};

export function installMist() {
  const C = THREE.ShaderChunk;
  C.fog_pars_vertex = `
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorld;
#endif`;
  C.fog_vertex = `
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorld = ( mvPosition.xyz - viewMatrix[ 3 ].xyz ) * mat3( viewMatrix );
#endif`;
  C.fog_pars_fragment = `
#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  varying vec3 vFogWorld;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
  uniform float uMistD, uMistH, uMistBase, uMistCover, uMistT;
  uniform vec2 uMistWind;
  uniform vec3 uMistColor;
  float mistHash( vec2 p ) { return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453 ); }
  float mistNoise( vec2 p ) {
    vec2 i = floor( p ), f = fract( p ); f = f * f * ( 3.0 - 2.0 * f );
    return mix( mix( mistHash( i ), mistHash( i + vec2( 1.0, 0.0 ) ), f.x ), mix( mistHash( i + vec2( 0.0, 1.0 ) ), mistHash( i + vec2( 1.0, 1.0 ) ), f.x ), f.y );
  }
#endif`;
  C.fog_fragment = `
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  vec3 fogMix = fogColor;
  if ( uMistD > 0.0 ) {
    float mDist = length( vFogWorld - cameraPosition );
    float h0 = clamp( ( cameraPosition.y - uMistBase ) / uMistH, -2.5, 40.0 );
    float h1 = clamp( ( vFogWorld.y - uMistBase ) / uMistH, -2.5, 40.0 );
    float dh = h1 - h0;
    float e1 = exp( - h1 );
    float avg = abs( dh ) > 1e-3 ? ( exp( - h0 ) - e1 ) / dh : e1;     // mật độ trung bình dọc tia nhìn
    float mn = mistNoise( vFogWorld.xz * 0.0045 + uMistWind * uMistT ) * 0.65
             + mistNoise( vFogWorld.xz * 0.017 - uMistWind * uMistT * 1.7 + 7.3 ) * 0.35;
    float patchy = smoothstep( 0.78 - 0.78 * uMistCover, 1.02 - 0.55 * uMistCover, mn );
    float mist = 1.0 - exp( - uMistD * mDist * clamp( avg, 0.0, 12.0 ) * patchy );
    float keep = ( 1.0 - fogFactor ) * ( 1.0 - mist );
    fogMix = mix( uMistColor, fogColor, fogFactor / max( 1.0 - keep, 1e-4 ) );
    fogFactor = 1.0 - keep;
  }
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogMix, fogFactor );
#endif`;
}

// gắn uniform sương dùng chung vào vật liệu (giữ nguyên onBeforeCompile sẵn có nếu có)
export function withMist(material) {
  const prev = material.onBeforeCompile;
  const prevKey = material.customProgramCacheKey;
  const hasPrev = prev && prev !== THREE.Material.prototype.onBeforeCompile;
  material.onBeforeCompile = function (shader, renderer) {
    if (hasPrev) prev.call(this, shader, renderer);
    Object.assign(shader.uniforms, MIST);
  };
  const tag = (hasPrev ? prev.toString() : '') + (prevKey ? prevKey.call(material) : '');
  material.customProgramCacheKey = () => tag + '#mist';
  material.needsUpdate = true;
  return material;
}
