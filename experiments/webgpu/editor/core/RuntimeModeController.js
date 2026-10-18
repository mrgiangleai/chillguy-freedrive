// Explicit ownership of input, camera, gizmo and physics stepping.
export function createRuntimeModeController() {
  let mode = 'edit'; // 'edit' | 'character' | 'drive'
  return {
    get mode() { return mode; },
    set(m) { mode = m; },
    is(m) { return mode === m; },
    /** Only play modes own the camera / block editing. */
    ownsCamera() { return mode === 'character' || mode === 'drive'; },
  };
}
