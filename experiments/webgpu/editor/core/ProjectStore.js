// Versioned project store: schema migration + a single save/load path.
export const PROJECT_VERSION = 3;

export function createProjectStore({loadProject, saveProject, flushProject}) {
  function migrate(raw) {
    const st = raw || {};
    st.version = st.version || 1;
    st.purged ??= [];
    st.deleted ??= [];
    st.unloaded ??= [];
    st.cameras ??= [];
    st.scene ??= {};
    st.objects ??= {};
    st.ents ??= [];
    st.events ??= [];
    st.effects ??= ['sun', 'environment', 'exposure', 'fog'].map((id) => ({id}));
    st.layers ??= [{id: 'default', name: 'Default', visible: true, locked: false}];
    st.streamTerrain ??= null;
    st.road ??= null;
    st.drive ??= null;
    if (st.version < PROJECT_VERSION) st.version = PROJECT_VERSION;
    return st;
  }
  return {
    version: PROJECT_VERSION,
    migrate,
    async load() { return migrate(await loadProject()); },
    save(state) { return saveProject(state); },
    flush(state) { return flushProject(state); },
  };
}
