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
    return h;
  }
  return {render};
}
