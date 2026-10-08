// Drive binding panel shown for a selected vehicle: bind to the road, then control it.
export function createDriveModule(ctx) {
  function render(o) {
    const {state, t, icon, objectKey, defFor} = ctx;
    if (!o || o.userData.editor?.category !== 'vehicle') return '';
    const id = objectKey(o), road = state.road, d = state.drive, def = defFor(id);
    let h = '<hr><b>' + icon('vehicle') + ' ' + t('driveTitle') + '</b>';
    if (!road) return h + '<small>' + t('driveNeedRoad') + '</small>';
    const bound = !!d && d.vehicleId === id;
    h += '<div class="actions"><button data-drivebind="1" class="' + (bound ? 'on' : '') + '">' + icon('link') + ' ' + (bound ? t('driveUnbind') : t('driveBind')) + '</button>' + (bound ? '<button data-drivestart="1">' + icon('gamepad') + ' ' + t('driveControl') + '</button>' : '') + '</div>';
    if (bound) h += '<small>' + def.name + ' · ' + t('driveTier') + ': ' + def.speedTiers[d.tier] + ' m/s · ' + t('driveKeys') + '</small>';
    return h;
  }
  return {render};
}
