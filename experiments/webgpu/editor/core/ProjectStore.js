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
    st.events = st.events.filter((e) => e && e.objectId);
    st.effects ??= ['sun', 'environment', 'exposure', 'fog'].map((id) => ({id}));
    st.layers ??= [{id: 'default', name: 'Default', visible: true, locked: false}];
    st.streamTerrain ??= null;
    st.road ??= null;
    st.drive ??= null;
    st.autoSelect ??= false;
    st.traffic ??= {enabled: false, count: 4, minSpeed: 8, maxSpeed: 22};
    st.audio ??= {enabled: false, volume: .6};
    st.driver ??= {characterId: null, vehicleId: null, clip: 0, preview: false, cam: false};
    st.ocean ??= {enabled: false, level: -2, color: '#2f6f8f'};
    st.waterfalls ??= {enabled: false, count: 4, seed: 7};
    st.post ??= {enabled: false, grade: 1, vignette: .6, grain: .3, wet: true};
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
