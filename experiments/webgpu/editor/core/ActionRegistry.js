// Named actions: one validated execution path shared by buttons and shortcuts.
export function createActionRegistry() {
  const map = new Map();
  return {
    register(name, fn, validate) { map.set(name, {fn, validate}); return fn; },
    has(name) { return map.has(name); },
    run(name, arg) {
      const a = map.get(name);
      if (!a) { console.warn('Unknown action:', name); return undefined; }
      if (a.validate && !a.validate(arg)) return undefined;
      return a.fn(arg);
    },
    names() { return [...map.keys()]; },
  };
}
