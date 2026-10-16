import * as __lcpReact from "./react-runtime/react/esm-index-production.js";
import * as __lcpJsxRuntime from "./react-runtime/react/esm-jsx-runtime-production.js";
// [cursor-re local mode] Host bridge + loader for src/vs/workbench/contrib/localMode.
//
// Publishes the bundle internals local mode needs under readable names (typed
// in src/vs/glass/host/cursorHost.ts) and loads its entry point: the Vite build
// next to this bundle, or the Vite dev server under `bun run dev`
// (CURSOR_LOCAL_MODE_DEV_URL). Getters keep lazily initialized bundle modules
// out of the picture until something actually asks for them.
var __lcpListeners = /* @__PURE__ */ new Set();
var __lcpHost = globalThis.__cursorLocalMode = {
  react: __lcpReact,
  jsxRuntime: __lcpJsxRuntime,
  cursor: {
    get buildFlags() {
      return vl;
    },
    get ModelDetails() {
      return Ove;
    },
    toAvailableModel: (m) => Ipn(m),
    batch: (fn) => Qm(fn),
    useService: (id) => et(id),
    get services() {
      return { storage: ki, ai: jl, localInference: VW_ };
    },
    get ui() {
      return { Section: Tf, Entries: Hs, Button: An, Switch: qx };
    }
  },
  impl: void 0,
  loading: void 0,
  register(impl) {
    this.impl = impl;
    for (const l of __lcpListeners) l();
  }
};
function __lcpSubscribe(listener) {
  return __lcpListeners.add(listener), () => __lcpListeners.delete(listener);
}
function __lcpLoad() {
  return __lcpHost.loading ??= (async () => {
    const dev = globalThis.vscode?.process?.env?.CURSOR_LOCAL_MODE_DEV_URL;
    await import(dev || "./contrib/localMode/browser/localMode.js");
    if (__lcpHost.impl === void 0) throw new Error("local mode did not register an implementation");
    return __lcpHost.impl;
  })().catch((e) => {
    __lcpHost.loading = void 0;
    console.error("[local mode] failed to load", e);
    throw e;
  });
}
// Renders local mode view `name`, or `fallback` until it has loaded.
function __lcpSlot({ name, props, fallback }) {
  const impl = __lcpReact.useSyncExternalStore(__lcpSubscribe, () => __lcpHost.impl);
  __lcpReact.useEffect(() => {
    impl === void 0 && __lcpLoad().catch(() => {
    });
  }, [impl === void 0]);
  const View = impl?.views?.[name];
  return View === void 0 ? fallback ?? null : __lcpReact.createElement(View, props);
}
function __lcpView(name, props, fallback) {
  return __lcpReact.createElement(__lcpSlot, { name, props, fallback });
}
