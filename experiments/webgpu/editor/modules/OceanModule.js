// Ocean panel (rail tab "Water").
export function createOceanModule(ctx) {
  function render() {
    const {state, t, icon, num} = ctx, o = state.ocean;
    let h = '<b>' + icon('water') + ' ' + t('oceanTitle') + '</b>';
    h += '<div class="actions"><button data-oceanon="1" class="' + (o.enabled ? 'on' : '') + '">' + t('oceanOn') + ' ' + (o.enabled ? t('on') : t('off')) + '</button></div>';
    h += num(t('oceanLevel') + ' ' + o.level.toFixed(1) + 'm', o.level, -20, 10, .5, 'oceanLevel');
    h += num(t('oceanOpacity') + ' ' + (o.opacity ?? .9).toFixed(2), o.opacity ?? .9, .1, 1, .02, 'oceanOpacity');
    h += num(t('oceanBob') + ' ' + (o.bob ?? .15).toFixed(2), o.bob ?? .15, 0, 2, .05, 'oceanBob');
    h += num(t('oceanBobSpeed') + ' ' + (o.bobSpeed ?? .6).toFixed(2), o.bobSpeed ?? .6, .1, 3, .1, 'oceanBobSpeed');
    h += '<div class="row"><label>' + t('oceanColor') + '</label><input data-oceancolor type="color" value="' + (o.color || '#2f6f8f') + '"></div>';
    return h;
  }
  return {render};
}
