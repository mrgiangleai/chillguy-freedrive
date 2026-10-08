// Central entity registry: stable IDs, category lookup, lifecycle add/remove.
export function createSceneRegistry(backing = []) {
  const items = backing;
  const key = (o) => o?.userData?.editor?.id || null;
  return {
    key,
    add(o) { if (o && !items.includes(o)) items.push(o); return o; },
    remove(o) { const i = items.indexOf(o); if (i >= 0) items.splice(i, 1); return i >= 0; },
    all() { return items; },
    byId(id) { return items.find((o) => key(o) === id) || null; },
    byCategory(cat) { return items.filter((o) => o?.userData?.editor?.category === cat); },
    byName(name) { return items.find((o) => o?.userData?.editor?.name === name) || null; },
  };
}
