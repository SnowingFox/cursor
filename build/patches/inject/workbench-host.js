import * as __lcpReact from "./react-runtime/react/esm-index-production.js";
import * as __lcpJsxRuntime from "./react-runtime/react/esm-jsx-runtime-production.js";
// [cursor-re local mode] Host bridge + loader for src/vs/workbench/contrib/localMode.
//
// Publishes the bundle internals local mode needs under readable names (typed
// in src/vs/glass/host/cursorHost.ts) and loads its entry point: the Vite build
// next to this bundle, or the Vite dev server under `bun run dev`
// (CURSOR_LOCAL_MODE_DEV_URL). Getters keep lazily initialized bundle modules
// out of the picture until something actually asks for them.
//
// Both workbench bundles get this file: the agent window (glass) and the IDE
// (desktop). $BUNDLE.<role> is replaced with that bundle's minified name for
// the role (BUNDLE_NAMES in build/patches/patches.mjs).
var __lcpListeners = /* @__PURE__ */ new Set();
var __lcpHost = globalThis.__cursorLocalMode = {
  react: __lcpReact,
  jsxRuntime: __lcpJsxRuntime,
  surface: "$BUNDLE.surface",
  cursor: {
    get buildFlags() {
      return $BUNDLE.buildFlags;
    },
    get proto() {
      return { Plugin: $BUNDLE.Plugin, Marketplace: $BUNDLE.Marketplace, UserPluginInstall: $BUNDLE.UserPluginInstall, Struct: $BUNDLE.Struct };
    },
    get pluginsService() {
      return __lcpPluginsService;
    },
    get ModelDetails() {
      return $BUNDLE.ModelDetails;
    },
    toAvailableModel: (m) => $BUNDLE.toAvailableModel(m),
    batch: (fn) => $BUNDLE.batch(fn),
    useService: (id) => $BUNDLE.useService(id),
    get services() {
      return { storage: $BUNDLE.storageService, ai: $BUNDLE.aiService, localInference: $BUNDLE.localInferenceService, auth: $BUNDLE.authService, commands: $BUNDLE.commandService };
    },
    get ui() {
      return { Page: $BUNDLE.Page, Section: $BUNDLE.Section, Entries: $BUNDLE.Entries, Button: $BUNDLE.Button, Switch: $BUNDLE.Switch };
    }
  },
  account: {
    get: () => __lcpAccount(),
    set: (auth, patch) => __lcpSetAccount(auth, patch),
    subscribe(listener) {
      return __lcpAccountListeners.add(listener), () => __lcpAccountListeners.delete(listener);
    }
  },
  impl: void 0,
  loading: void 0,
  register(impl) {
    this.impl = impl;
    for (const l of __lcpListeners) l();
  }
};
// Local sign-in: the account local mode is signed in as. The patched auth
// service reads it synchronously (isAuthenticated runs before the Vite module
// loads), so it lives here; the devtool edits it through `account.set`.
var __lcpAccountKey = "cursorLocalMode.account";
var __lcpAccountListeners = /* @__PURE__ */ new Set();
var __lcpAccountValue;
function __lcpAccountClean(value) {
  const o = value !== null && typeof value === "object" ? value : {};
  // Version 1 saved the OS user name as the default; start over from "cursor".
  const own = o.version === 2;
  const text = (v, fallback) => own && typeof v === "string" && v.trim() !== "" ? v.trim() : fallback;
  return {
    signedIn: typeof o.signedIn === "boolean" ? o.signedIn : true,
    name: text(o.name, "cursor"),
    email: text(o.email, "cursor@localhost")
  };
}
function __lcpAccount() {
  if (__lcpAccountValue === void 0) {
    let stored;
    try {
      stored = JSON.parse(globalThis.localStorage?.getItem(__lcpAccountKey) ?? "null");
    } catch {
    }
    __lcpAccountValue = __lcpAccountClean(stored);
  }
  return __lcpAccountValue;
}
// Updates the account; with `auth` (the authentication service) also tells the
// workbench, which re-reads the profile and signed-in state.
function __lcpSetAccount(auth, patch) {
  const prev = __lcpAccount(), next = __lcpAccountClean({ ...prev, ...patch, version: 2 });
  __lcpAccountValue = next;
  try {
    globalThis.localStorage?.setItem(__lcpAccountKey, JSON.stringify({ version: 2, ...next }));
  } catch {
  }
  for (const l of __lcpAccountListeners) l();
  if (auth !== void 0) {
    (next.signedIn !== prev.signedIn || next.name !== prev.name || next.email !== prev.email) && auth.notifyLoginChangedListeners(next.signedIn);
  }
}
// getScopedDashboardProfile's shape. authId stays empty: a non-empty one turns
// on cloud features that would call Cursor's backend.
function __lcpProfile() {
  const a = __lcpAccount();
  return a.signedIn ? { firstName: a.name, lastName: "", pictureUrl: void 0, teamName: "", authId: "", email: a.email, numericId: void 0, hasActiveMobileSession: false, createdAt: void 0 } : { teamName: "", authId: "", email: "", numericId: void 0 };
}
// Cursor 3.27+ encrypts the tokens it stores in the shared profile
// ("cursor-safe-storage:v1:<base64>"). This build would decode that as a JWT
// and throw, which fails cursor-agent-exec's activation; read it as signed
// out, as Cursor does when it can't decrypt.
function __lcpStoredToken(value) {
  return typeof value === "string" && value.startsWith("cursor-safe-storage:") ? void 0 : value;
}
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
// Local marketplace (src/vs/workbench/contrib/localMode/browser/marketplace.ts):
// the PluginsProviderService registers itself here, and the Customize page's
// plugins backend (grpcPluginsProvider) becomes these methods.
var __lcpPluginsService;
function __lcpMarketplace(name, ...args) {
  return __lcpLoad().then((impl) => impl.marketplace[name](...args));
}
var __lcpMarketplaceProvider = Object.fromEntries(
  ["listMarketplacePlugins", "listMarketplaces", "listUserPluginInstalls", "getPlugin", "installUserPlugin", "installTeamPlugin", "updateUserPluginInstall", "uninstallUserPlugin", "uninstallTeamPlugin", "addMarketplace", "removeMarketplace", "registerMarketplaceAndPlugins"].map(
    (name) => [name, (request) => __lcpLoad().then((impl) => impl.marketplace.provider[name](request))]
  )
);
