// Waterfall panel (rail tab "Water").
export function createWaterfallModule(ctx) {
  function render() {
    const {state, t, icon, num} = ctx, w = state.waterfalls;
    let h = '<hr><b>' + icon('water') + ' ' + t('waterfallTitle') + '</b>';
    h += '<div class="actions"><button data-waterfallon="1" class="' + (w.enabled ? 'on' : '') + '">' + t('waterfallOn') + ' ' + (w.enabled ? t('on') : t('off')) + '</button></div>';
    h += num(t('waterfallCount') + ' ' + w.count, w.count, 0, 12, 1, 'waterfallCount');
    h += num(t('waterfallSeed') + ' ' + w.seed, w.seed, 1, 99, 1, 'waterfallSeed');
    return h;
  }
  return {render};
}
