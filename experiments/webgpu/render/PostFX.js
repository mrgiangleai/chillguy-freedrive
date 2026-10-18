// TSL post effects: grade + vignette + grain, applied as a node on the scene colour.
import {screenUV, mix, smoothstep, length, float, vec2, vec4, time, sin} from 'three/tsl';

export function createPostFX() {
  let enabled = false, grade = 1, vignette = .6, grain = .3;

  function apply(col) {
    if (!enabled) return col;
    const d = length(screenUV.sub(vec2(0.5, 0.5)));
    const vig = smoothstep(float(0.9), float(0.35), d);
    let rgb = col.rgb.mul(mix(float(1.0), vig, float(vignette)));
    rgb = rgb.mul(float(grade));
    const gr = sin(screenUV.x.mul(640.0).add(screenUV.y.mul(1130.0)).add(time.mul(8.0))).mul(0.5).add(0.5).mul(float(grain)).mul(0.05);
    rgb = rgb.add(gr);
    return vec4(rgb, col.a);
  }
  return {
    apply,
    setEnabled(v) { enabled = v; },
    setParams(p) { if (p.grade != null) grade = p.grade; if (p.vignette != null) vignette = p.vignette; if (p.grain != null) grain = p.grain; },
    get enabled() { return enabled; },
  };
}
