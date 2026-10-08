// Road entity editor panel (Landscape). Markup + input binding only.
export function createRoadModule(ctx) {
  function render() {
    const {state, t, icon, num} = ctx;
    const r = state.road;
    let h = '<b>' + icon('road') + ' ' + t('roadTitle') + '</b>';
    if (!r) return h + '<div class="actions"><button data-roadcreate="1">' + icon('plus') + ' ' + t('roadCreate') + '</button></div><small>' + t('roadHint') + '</small>';
    h += '<div class="actions fit"><button data-roadregen="1">' + icon('reset') + ' ' + t('roadRegen') + '</button><button data-roaddelete="1">' + icon('trash') + ' ' + t('delete') + '</button></div>';
    h += num(t('roadLength') + ' ' + Math.round(r.length) + 'm', r.length, 60, 1600, 20, 'roadLength');
    h += num(t('roadWidth') + ' ' + r.halfWidth.toFixed(1) + 'm', r.halfWidth, 2, 12, .2, 'roadHalfWidth');
    h += '<div class="actions"><button data-roaddirt="1" class="' + (r.dirt ? 'on' : '') + '">' + icon('brush') + ' ' + t('roadDirt') + ' ' + (r.dirt ? t('on') : t('off')) + '</button></div>';
    h += '<div class="actions fit"><button data-roadlights="1" class="' + (r.lights ? 'on' : '') + '">' + icon('lightbulb') + ' ' + t('roadLights') + ' ' + (r.lights ? t('on') : t('off')) + '</button></div>';
    if (r.lights) h += '<div class="actions fit"><button data-roadsidelights="both" class="' + (r.lightSide !== 'one' ? 'on' : '') + '">' + t('roadSideBoth') + '</button><button data-roadsidelights="one" class="' + (r.lightSide === 'one' ? 'on' : '') + '">' + t('roadSideOne') + '</button></div><small>' + (r.lightSide === 'one' ? t('roadSpacingOne') : t('roadSpacingBoth')) + '</small>';
    return h;
  }
  function bind(root, a) {
    root.querySelectorAll('[data-roadcreate]').forEach(b => b.onclick = a.createRoad);
    root.querySelectorAll('[data-roadregen]').forEach(b => b.onclick = a.regenRoad);
    root.querySelectorAll('[data-roaddelete]').forEach(b => b.onclick = a.deleteRoad);
    root.querySelectorAll('[data-roaddirt]').forEach(b => b.onclick = a.toggleRoadDirt);
    root.querySelectorAll('[data-roadlights]').forEach(b => b.onclick = a.roadLights);
    root.querySelectorAll('[data-roadsidelights]').forEach(b => b.onclick = () => a.roadLightSide(b.dataset.roadsidelights));
  }
  return {render, bind};
}
