// Cinematic post panel (rail tab "Post") + wet-road toggle.
export function createPostModule(ctx) {
  function render() {
    const {state, t, icon, num} = ctx, p = state.post;
    let h = '<b>' + icon('camera') + ' ' + t('postTitle') + '</b>';
    h += '<div class="actions"><button data-poston="1" class="' + (p.enabled ? 'on' : '') + '">' + t('postOn') + ' ' + (p.enabled ? t('on') : t('off')) + '</button></div>';
    h += num(t('postGrade') + ' ' + p.grade.toFixed(2), p.grade, .5, 1.5, .05, 'postGrade');
    h += num(t('postVignette') + ' ' + p.vignette.toFixed(2), p.vignette, 0, 1, .05, 'postVignette');
    h += num(t('postGrain') + ' ' + p.grain.toFixed(2), p.grain, 0, 1, .05, 'postGrain');
    h += '<div class="actions"><button data-wetroad="1" class="' + (p.wet ? 'on' : '') + '">' + icon('weather') + ' ' + t('postWet') + ' ' + (p.wet ? t('on') : t('off')) + '</button></div>';
    const ao = p.ao || {enabled: true}, bl = p.bloom || {enabled: true, strength: .35, radius: .45, threshold: .95};
    h += '<hr><b>' + icon('sparkle') + ' ' + t('postAO') + '</b><div class="actions"><button data-postao="1" class="' + (ao.enabled ? 'on' : '') + '">' + t('postAO') + ' ' + (ao.enabled ? t('on') : t('off')) + '</button></div>';
    h += '<b>' + icon('sparkle') + ' ' + t('postBloom') + '</b><div class="actions"><button data-postbloom="1" class="' + (bl.enabled ? 'on' : '') + '">' + t('postBloom') + ' ' + (bl.enabled ? t('on') : t('off')) + '</button></div>';
    if (bl.enabled) {
      h += num(t('bloomStrength') + ' ' + bl.strength.toFixed(2), bl.strength, 0, 2, .05, 'postBloomStrength');
      h += num(t('bloomRadius') + ' ' + bl.radius.toFixed(2), bl.radius, 0, 1, .02, 'postBloomRadius');
      h += num(t('bloomThreshold') + ' ' + bl.threshold.toFixed(2), bl.threshold, 0, 2, .05, 'postBloomThreshold');
    }
    return h;
  }
  return {render};
}
