// Category-aware selection rules, kept out of main.js.
export function createSelectionService() {
  let current = null;
  return {
    get current() { return current; },
    set(o) { current = o; return current; },
    clear() { current = null; },
    /** 'ok' | 'none' | 'locked' | 'hidden' */
    canSelect(o) {
      if (!o) return 'none';
      const e = o.userData?.editor || {};
      if (e.locked) return 'locked';
      if (o.visible === false) return 'hidden';
      return 'ok';
    },
  };
}
