// Road entity editor panel (Landscape → Road). Markup + input binding only.
export function createRoadModule(ctx) {
  function render() {
    const {state, t, icon, numIn} = ctx;
    const r = state.road;
    let h = '<b>' + icon('road') + ' ' + t('roadTitle') + '</b>';
    if (!r) return h + '<div class="actions"><button data-roadplace="1">' + icon('plus') + ' ' + t('roadCreate') + '</button></div><small>' + t('roadHint') + '</small>';
    h += '<div class="actions fit"><button data-roadregen="1">' + icon('reset') + ' ' + t('roadRegen') + '</button><button data-roaddelete="1">' + icon('trash') + ' ' + t('delete') + '</button></div>';
    h += numIn(t('roadLength') + ' (m)', Math.round(r.length), 50, 5000, 10, 'roadLength');
    h += numIn(t('roadWidth') + ' (m)', Math.round(r.width), 50, 200, 5, 'roadWidth');
    h += '<div class="actions fit"><button data-roadloop="1" class="' + (r.loop ? 'on' : '') + '">' + icon('reset') + ' ' + t('roadLoop') + ' ' + (r.loop ? t('on') : t('off')) + '</button></div>';
    h += '<b>' + icon('rotate') + ' ' + t('roadCurve') + '</b>';
    (r.bends || []).forEach((b, i) => {
      h += '<div class="card"><span>' + icon('rotate') + '</span><span><b>' + t('roadBend') + ' ' + (i + 1) + '</b></span><span><button data-roadbenddel="' + i + '">' + icon('trash') + '</button></span></div>';
      h += numIn(t('roadBendAt'), Math.round((b.at ?? 0.5) * 100), 0, 100, 1, 'roadBendAt:' + i);
      h += numIn(t('roadBendAmt'), b.amount ?? 0, -1, 1, .05, 'roadBendAmt:' + i);
    });
    h += '<div class="actions"><button data-roadbendadd="1">' + icon('plus') + ' ' + t('roadAddBend') + '</button></div>';
    h += '<div class="actions"><button data-roaddirt="1" class="' + (r.dirt ? 'on' : '') + '">' + icon('brush') + ' ' + t('roadDirt') + ' ' + (r.dirt ? t('on') : t('off')) + '</button></div>';
    h += '<div class="actions fit"><button data-roadlights="1" class="' + (r.lights ? 'on' : '') + '">' + icon('lightbulb') + ' ' + t('roadLights') + ' ' + (r.lights ? t('on') : t('off')) + '</button></div>';
    if (r.lights) h += '<div class="actions fit"><button data-roadsidelights="both" class="' + (r.lightSide !== 'one' ? 'on' : '') + '">' + t('roadSideBoth') + '</button><button data-roadsidelights="one" class="' + (r.lightSide === 'one' ? 'on' : '') + '">' + t('roadSideOne') + '</button></div>';
    return h;
  }
  function bind(root, a) {
    root.querySelectorAll('[data-roadplace]').forEach(b => b.onclick = () => a.createRoad());
    root.querySelectorAll('[data-roadregen]').forEach(b => b.onclick = a.regenRoad);
    root.querySelectorAll('[data-roaddelete]').forEach(b => b.onclick = a.deleteRoad);
    root.querySelectorAll('[data-roadloop]').forEach(b => b.onclick = a.roadLoop);
    root.querySelectorAll('[data-roadbendadd]').forEach(b => b.onclick = a.roadBendAdd);
    root.querySelectorAll('[data-roadbenddel]').forEach(b => b.onclick = () => a.roadBendDel(+b.dataset.roadbenddel));
    root.querySelectorAll('[data-roaddirt]').forEach(b => b.onclick = a.toggleRoadDirt);
    root.querySelectorAll('[data-roadlights]').forEach(b => b.onclick = a.roadLights);
    root.querySelectorAll('[data-roadsidelights]').forEach(b => b.onclick = () => a.roadLightSide(b.dataset.roadsidelights));
  }
  return {render, bind};
}
