// Ocean panel (rail tab "Water").
export function createOceanModule(ctx) {
  function render() {
    const {state, t, icon, num} = ctx, o = state.ocean;
    let h = '<b>' + icon('water') + ' ' + t('oceanTitle') + '</b>';
    h += '<div class="actions"><button data-oceanon="1" class="' + (o.enabled ? 'on' : '') + '">' + t('oceanOn') + ' ' + (o.enabled ? t('on') : t('off')) + '</button></div>';
    h += num(t('oceanLevel') + ' ' + o.level.toFixed(1) + 'm', o.level, -20, 10, .5, 'oceanLevel');
    h += '<div class="row"><label>' + t('oceanColor') + '</label><input data-oceancolor type="color" value="' + (o.color || '#2f6f8f') + '"></div>';
    return h;
  }
  return {render};
}
