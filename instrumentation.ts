export async function register() {
  // On Node.js 22+, Next.js 15.3.x passes --localstorage-file without a valid
  // path, creating a global `localStorage` object whose methods are broken
  // (either absent or throw). This causes SSR to crash with
  // "TypeError: localStorage.getItem is not a function".
  //
  // This hook runs during server startup (before the first request is served),
  // so we can replace the broken storage with a safe server-side no-op before
  // any React rendering begins.
  if (typeof window !== "undefined") return; // guard: server only

  const noop: Storage = {
    length: 0,
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
  };

  const isBroken = (key: "localStorage" | "sessionStorage"): boolean => {
    try {
      const s = (globalThis as Record<string, unknown>)[key];
      // null/undefined/non-object or missing getItem method
      if (!s || typeof s !== "object") return true;
      if (typeof (s as Record<string, unknown>).getItem !== "function")
        return true;
      // method exists — probe call to catch runtime throws
      (s as Storage).getItem("__probe__");
      return false;
    } catch {
      return true;
    }
  };

  const applyPatch = (key: "localStorage" | "sessionStorage") => {
    try {
      Object.defineProperty(globalThis, key, {
        value: noop,
        writable: true,
        configurable: true,
      });
    } catch {
      // defineProperty blocked (non-configurable) — try direct assignment
      try {
        (globalThis as Record<string, unknown>)[key] = noop;
      } catch {
        // nothing more we can do
      }
    }
  };

  if (isBroken("localStorage")) applyPatch("localStorage");
  if (isBroken("sessionStorage")) applyPatch("sessionStorage");
}
