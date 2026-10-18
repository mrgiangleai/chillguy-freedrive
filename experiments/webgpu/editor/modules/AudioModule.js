// Audio panel (rail tab): master switch + volume for engine/wind/pass-by.
export function createAudioModule(ctx) {
  function render() {
    const {state, t, icon, num} = ctx, a = state.audio;
    let h = '<b>' + icon('sound') + ' ' + t('audioTitle') + '</b>';
    h += '<div class="actions"><button data-audioon="1" class="' + (a.enabled ? 'on' : '') + '">' + t('audioOn') + ' ' + (a.enabled ? t('on') : t('off')) + '</button></div>';
    h += num(t('audioVolume') + ' ' + Math.round(a.volume * 100) + '%', a.volume, 0, 1, .05, 'audioVolume');
    if (a.enabled) h += '<small>' + t('audioHint') + '</small>';
    return h;
  }
  return {render};
}
