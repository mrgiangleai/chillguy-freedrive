// Character panel extra: driver binding to a vehicle (seat / preview / camera / clip).
export function createCharacterModule(ctx) {
  function render(o) {
    if (!o || o.userData.editor?.category !== 'character') return '';
    const {state, t, icon, objectKey, vehicles, byId, anim} = ctx;
    const id = objectKey(o), d = state.driver, vehs = vehicles();
    let h = '<hr><b>' + icon('person1') + ' ' + t('driverTitle') + '</b>';
    if (!vehs.length) return h + '<small>' + t('driverNeedVehicle') + '</small>';
    const bound = d && d.characterId === id;
    if (!bound) {
      h += '<div class="actions">' + vehs.map((v) => '<button data-driverbind="' + objectKey(v) + '">' + icon('link') + ' ' + (v.userData.editor.name || 'Vehicle') + '</button>').join('') + '</div>';
      return h;
    }
    const veh = byId(d.vehicleId);
    h += '<small>' + t('driverSeat') + ': ' + (veh?.userData.editor.name || '?') + '</small>';
    h += '<div class="actions"><button data-driverpreview="1" class="' + (d.preview ? 'on' : '') + '">' + icon('person1') + ' ' + t('driverPreview') + '</button><button data-drivercam="1" class="' + (d.cam ? 'on' : '') + '">' + icon('video') + ' ' + t('driverCam') + '</button><button data-driverunbind="1">' + t('driveUnbind') + '</button></div>';
    const clips = anim.clipsOf(o);
    if (clips.length) h += '<div class="actions">' + clips.map((c, i) => '<button data-driverclip="' + i + '" class="' + (d.clip === i ? 'on' : '') + '">' + c.name + '</button>').join('') + '</div>';
    return h;
  }
  return {render};
}
