// Traffic system panel (rail tab).
export function createTrafficModule(ctx) {
  function render() {
    const {state, t, icon, num} = ctx, tr = state.traffic;
    let h = '<b>' + icon('vehicle') + ' ' + t('trafficTitle') + '</b>';
    h += '<div class="actions"><button data-trafficon="1" class="' + (tr.enabled ? 'on' : '') + '">' + t('trafficOn') + ' ' + (tr.enabled ? t('on') : t('off')) + '</button></div>';
    h += num(t('trafficCount') + ' ' + tr.count, tr.count, 0, 12, 1, 'trafficCount');
    h += num(t('trafficSpeedMin') + ' ' + Math.round(tr.minSpeed * 3.6) + ' km/h', tr.minSpeed, 2, 25, .5, 'trafficSpeedMin');
    h += num(t('trafficSpeedMax') + ' ' + Math.round(tr.maxSpeed * 3.6) + ' km/h', tr.maxSpeed, 3, 45, .5, 'trafficSpeedMax');
    h += '<small>' + t('trafficHint') + '</small>';
    return h;
  }
  return {render};
}
