// Landscape panel: Land (fixed base) / Terrain / material. Road is appended by main.
export function createLandscapeModule(ctx) {
  function render() {
    const {state, num, t, icon} = ctx;
    // --- Land: fixed base, only switches type (Land / Ocean), infinite ---
    let h = '<b>' + icon('world') + ' ' + t('landTitle') + '</b>';
    h += '<div class="actions fit"><button data-landtype="land" class="' + (state.land !== 'ocean' ? 'on' : '') + '">' + icon('landscape') + ' ' + t('landLand') + '</button><button data-landtype="ocean" class="' + (state.land === 'ocean' ? 'on' : '') + '">' + icon('water') + ' ' + t('landOcean') + '</button></div>';
    if (state.land !== 'ocean') {
      h += '<div class="actions fit">' + ['reed', 'forest', 'mountain', 'meadow', 'sea'].map(id => '<button data-streammap="' + id + '" class="' + (state.streamMap === id ? 'on' : '') + '">' + t('map' + id[0].toUpperCase() + id.slice(1)) + '</button>').join('') + '</div>';
      h += '<small>' + t('landInfinite') + '</small>';
    }
    // --- Terrain: finite authored sculpt terrain ---
    h += '<hr><b>' + icon('landscape') + ' ' + t('terrainTitle') + '</b><div class="actions fit"><button data-terrain="create">' + icon('plus') + ' ' + t('create') + '</button><button data-terrain="infinite">' + t('infinite') + ' ' + (state.terrainInfinite ? t('on') : t('off')) + '</button></div>';
    h += num(t('size') + ' ' + Math.round(state.terrainSize) + 'm', state.terrainSize, 20, 500, 10, 'terrainsize');
    h += num(t('terrainRough') + ' ' + state.terrainRough.toFixed(1), state.terrainRough, 0, 35, .5, 'terrainrough');
    h += num(t('spacing') + ' ' + Math.round(state.terrainScale), state.terrainScale, 5, 100, 1, 'terrainscale');
    h += num(t('seed') + ' ' + state.terrainSeed, state.terrainSeed, 1, 99, 1, 'terrainseed');
    h += '<small>' + t('terrainInfiniteHint') + '</small>';
    if (state.selected?.userData.editor?.terrain) {
      h += '<hr><b>' + icon('brush') + ' ' + t('terrainBrush') + '</b><div class="actions fit"><button data-brushtool="sculpt">' + t('sculpt') + '</button><button data-brushtool="paint">' + t('paint') + '</button></div>';
      h += state.brushTool === 'sculpt' ? '<div class="actions fit">' + [['raise', t('raise')], ['lower', t('lower')], ['smooth', t('smooth')], ['flatten', t('flatten')]].map(x => '<button data-sculpt="' + x[0] + '">' + x[1] + '</button>').join('') + '</div>' : '<small>' + t('paintHint') + '</small>';
      h += num(t('brush') + ' ' + state.sculptSize.toFixed(1) + 'm', state.sculptSize, 1, 40, .5, 'sculptSize');
      h += state.brushTool === 'sculpt' ? num(t('strengthLabel') + ' ' + state.sculptStrength.toFixed(2), state.sculptStrength, .02, 1, .02, 'sculptStrength') : num(t('paintStrength') + ' ' + state.paintStrength.toFixed(2), state.paintStrength, .02, 1, .02, 'paintStrength');
      h += '<small>' + t('brushHint') + '</small>';
    }
    // --- Water circle (kept under Terrain) ---
    h += '<hr><b>' + icon('water') + ' ' + t('water') + '</b><div class="actions fit"><button data-watercreate="1">' + icon('plus') + ' ' + t('waterCircle') + '</button></div>';
    if (state.selected?.userData.editor?.water) h += num(t('waterSize') + ' ' + state.waterSize.toFixed(0) + 'm', state.waterSize, 2, 300, 1, 'waterSize') + num(t('opacity') + ' ' + state.waterOpacity.toFixed(2), state.waterOpacity, .05, .95, .01, 'waterOpacity');
    h += '<hr><b>' + icon('world') + ' ' + t('propTitle') + '</b><div class="actions fit"><button data-prop="tree">' + icon('plus') + ' ' + t('propTree') + '</button><button data-prop="bush">' + icon('plus') + ' ' + t('propBush') + '</button><button data-prop="rock">' + icon('plus') + ' ' + t('propRock') + '</button></div>';
    return h;
  }
  function material() { return ctx.materialLibraryHTML(); }
  function bind(root) {
    const a = ctx.actions;
    root.querySelectorAll('[data-landtype]').forEach(b => b.onclick = () => a.landType(b.dataset.landtype));
    root.querySelectorAll('[data-streammap]').forEach(b => b.onclick = () => a.streamMap(b.dataset.streammap));
    root.querySelectorAll('[data-terrain]').forEach(b => b.onclick = () => a.terrain(b.dataset.terrain));
    root.querySelectorAll('[data-brushtool]').forEach(b => b.onclick = () => a.brushTool(b.dataset.brushtool));
    root.querySelectorAll('[data-sculpt]').forEach(b => b.onclick = () => a.sculpt(b.dataset.sculpt));
    root.querySelectorAll('[data-watercreate]').forEach(b => b.onclick = a.createWater);
    root.querySelectorAll('[data-prop]').forEach(b => b.onclick = () => a.prop(b.dataset.prop));
    root.querySelectorAll('[data-material]').forEach(b => b.onclick = () => a.material(b.dataset.material));
    root.querySelectorAll('[data-applymaterial]').forEach(b => b.onclick = a.applyMaterial);
  }
  return {render, material, bind};
}
