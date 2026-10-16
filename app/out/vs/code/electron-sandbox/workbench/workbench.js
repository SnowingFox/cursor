/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "13afaf2d-44b4-51c7-b4c6-51714f072063");
  } catch (e2) {
  }
})();
var ThemeTypeSelector = ((e) => (e.VS = "vs", e.VS_DARK = "vs-dark", e.HC_BLACK = "hc-black", e.HC_LIGHT = "hc-light", e))(ThemeTypeSelector || {}), DEFAULT_THEME_BG_LIGHT = "#FFFFFF", DEFAULT_THEME_BG_DARK = "#1F1F1F", DEFAULT_THEME_BG_HC_BLACK = "#000000", DEFAULT_THEME_BG_HC_LIGHT = "#FFFFFF";
function getDefaultThemeBackgroundColor(e) {
  switch (e) {
    case ThemeTypeSelector.VS:
      return DEFAULT_THEME_BG_LIGHT;
    case ThemeTypeSelector.HC_BLACK:
      return DEFAULT_THEME_BG_HC_BLACK;
    case ThemeTypeSelector.HC_LIGHT:
      return DEFAULT_THEME_BG_HC_LIGHT;
    case ThemeTypeSelector.VS_DARK:
    default:
      return DEFAULT_THEME_BG_DARK;
  }
}
function baseThemeFromColorScheme(e) {
  return e.highContrast ? e.dark ? ThemeTypeSelector.HC_BLACK : ThemeTypeSelector.HC_LIGHT : e.dark ? ThemeTypeSelector.VS_DARK : ThemeTypeSelector.VS;
}
var WELCOME_SPLASH_COMPONENT = "welcome-splash", WELCOME_SPLASH_EARLY_SOURCE = "early", WELCOME_SPLASH_EARLY_FADE_MS = 180, WELCOME_SPLASH_EARLY_MAX_HOLD_MS = 2e4, HTML_CLASS = "welcome-splash-early", STYLESHEET_ID = "welcome-splash-early-stylesheet", BG_VAR = "--welcome-splash-early-bg", WELCOME_SPLASH_LOGO_NORMAL_FILE = "cursor-splash-logo-normal.png", WELCOME_SPLASH_LOGO_GLASS_FILE = "cursor-splash-logo-glass.png", WELCOME_SPLASH_LOGO_FROM_WORKBENCH = "../../../glass/browser/media/";
function resolveWelcomeSplashEarlyLogoSrc(e, a) {
  return new URL(`${WELCOME_SPLASH_LOGO_FROM_WORKBENCH}${e}`, a).href;
}
var EARLY_SPLASH_CSS = `
html.welcome-splash-early,
html.welcome-splash-early body {
	background-color: var(${BG_VAR});
	margin: 0;
	padding: 0;
}
[data-component="${WELCOME_SPLASH_COMPONENT}"][data-splash-source="${WELCOME_SPLASH_EARLY_SOURCE}"] {
	position: fixed;
	inset: 0;
	z-index: 10000;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
	opacity: 1;
	will-change: opacity;
}
[data-component="${WELCOME_SPLASH_COMPONENT}"][data-splash-source="${WELCOME_SPLASH_EARLY_SOURCE}"] .welcome-splash-early-background {
	position: absolute;
	inset: 0;
	background-color: var(${BG_VAR});
}
[data-component="${WELCOME_SPLASH_COMPONENT}"][data-splash-source="${WELCOME_SPLASH_EARLY_SOURCE}"] .welcome-splash-early-logo-container {
	position: relative;
	z-index: 1;
	width: 60px;
	height: 69px;
}
[data-component="${WELCOME_SPLASH_COMPONENT}"][data-splash-source="${WELCOME_SPLASH_EARLY_SOURCE}"] .welcome-splash-early-logo {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: contain;
	pointer-events: none;
	user-select: none;
}
[data-component="${WELCOME_SPLASH_COMPONENT}"][data-splash-source="${WELCOME_SPLASH_EARLY_SOURCE}"][data-splash-bucket="light"] .welcome-splash-early-logo {
	filter: invert(1);
}
[data-component="${WELCOME_SPLASH_COMPONENT}"][data-splash-source="${WELCOME_SPLASH_EARLY_SOURCE}"] .welcome-splash-early-logo-glass {
	opacity: 0;
}
`;
function resolveWelcomeSplashEarlyColors(e) {
  const { glassSplash: a, colorScheme: l } = e, c = a?.baseTheme ?? baseThemeFromColorScheme(l), t = c === ThemeTypeSelector.VS || c === ThemeTypeSelector.HC_LIGHT;
  return { background: a?.background ?? getDefaultThemeBackgroundColor(c), isLight: t };
}
function ensureWelcomeSplashEarlyStylesheet(e) {
  if (e.getElementById(STYLESHEET_ID)) return;
  const a = e.createElement("style");
  a.id = STYLESHEET_ID, a.textContent = EARLY_SPLASH_CSS, e.head.appendChild(a);
}
function findEarlyWelcomeSplash(e) {
  return e.querySelector(`[data-component="${WELCOME_SPLASH_COMPONENT}"][data-splash-source="${WELCOME_SPLASH_EARLY_SOURCE}"]`);
}
var maxHoldTimer, fadeTimer;
function clearMaxHoldTimer(e) {
  maxHoldTimer !== void 0 && (e.defaultView?.clearTimeout(maxHoldTimer), maxHoldTimer = void 0);
}
function clearEarlyWelcomeSplashChrome(e) {
  const a = e.documentElement;
  a.classList.remove(HTML_CLASS), a.style.removeProperty(BG_VAR), e.body && e.body.style.removeProperty("background-color"), e.querySelector("style.initialShellColors")?.remove(), e.getElementById(STYLESHEET_ID)?.remove();
}
function showWelcomeSplashEarly(e, a) {
  ensureWelcomeSplashEarlyStylesheet(e);
  const l = e.documentElement;
  l.classList.add(HTML_CLASS), l.style.setProperty(BG_VAR, "transparent"), e.body && (e.body.style.backgroundColor = "transparent");
  let c = findEarlyWelcomeSplash(e);
  if (c) c.setAttribute("data-splash-bucket", a.isLight ? "light" : "dark");
  else {
    c = e.createElement("div"), c.setAttribute("data-component", WELCOME_SPLASH_COMPONENT), c.setAttribute("data-splash-source", WELCOME_SPLASH_EARLY_SOURCE), c.setAttribute("data-splash-phase", "opaque"), c.setAttribute("data-splash-bucket", a.isLight ? "light" : "dark"), c.setAttribute("role", "status"), c.setAttribute("aria-live", "polite"), c.setAttribute("aria-label", "Loading");
    const t = e.createElement("div");
    t.className = "welcome-splash-early-background", c.appendChild(t);
    const h = e.createElement("div");
    h.className = "welcome-splash-early-logo-container";
    const o = e.baseURI, d = e.createElement("img");
    d.className = "welcome-splash-early-logo welcome-splash-early-logo-normal", d.alt = "", d.draggable = false, d.decoding = "async", d.src = resolveWelcomeSplashEarlyLogoSrc(WELCOME_SPLASH_LOGO_NORMAL_FILE, o);
    const i = e.createElement("img");
    i.className = "welcome-splash-early-logo welcome-splash-early-logo-glass", i.alt = "", i.draggable = false, i.decoding = "async", i.src = resolveWelcomeSplashEarlyLogoSrc(WELCOME_SPLASH_LOGO_GLASS_FILE, o), h.appendChild(d), h.appendChild(i), c.appendChild(h), e.documentElement.appendChild(c);
  }
  clearMaxHoldTimer(e), maxHoldTimer = e.defaultView?.setTimeout(() => {
    maxHoldTimer = void 0, removeWelcomeSplashEarly(e, { fadeMs: WELCOME_SPLASH_EARLY_FADE_MS });
  }, WELCOME_SPLASH_EARLY_MAX_HOLD_MS), performance.mark("glass/didShowEarlyStartupSplash");
}
function removeWelcomeSplashEarly(e, a) {
  if (clearMaxHoldTimer(e), fadeTimer !== void 0) return;
  const l = findEarlyWelcomeSplash(e), c = a?.fadeMs ?? 0;
  if (!l) {
    clearEarlyWelcomeSplashChrome(e), performance.mark("glass/didRemoveEarlyStartupSplash");
    return;
  }
  const t = () => {
    fadeTimer = void 0, findEarlyWelcomeSplash(e)?.remove(), clearEarlyWelcomeSplashChrome(e), performance.mark("glass/didRemoveEarlyStartupSplash");
  };
  if (c <= 0) {
    t();
    return;
  }
  const h = e.defaultView;
  if (!h) {
    t();
    return;
  }
  l.style.transition = `opacity ${c}ms ease-out`, l.offsetWidth, l.style.opacity = "0", fadeTimer = h.setTimeout(t, c);
}
(function() {
  const preloadGlobals = window.vscode, safeProcess = preloadGlobals.process;
  async function load(defaultEsModule, options) {
    const configuration = await resolveWindowConfiguration(), esModule = options?.resolveEsModule?.(configuration) ?? defaultEsModule;
    swapWorkbenchStylesheetForEntry(defaultEsModule, esModule), options?.beforeImport?.(configuration);
    const { enableDeveloperKeybindings, removeDeveloperKeybindingsAfterLoad, developerDeveloperKeybindingsDisposable, forceDisableShowDevtoolsOnError } = setupDeveloperKeybindings(configuration, options);
    setupNLS(configuration);
    const baseUrl = new URL(`${fileUriFromPath(configuration.appRoot, { isWindows: safeProcess.platform === "win32", scheme: "vscode-file", fallbackAuthority: "vscode-app" })}/out/`);
    globalThis._VSCODE_FILE_ROOT = baseUrl.toString();
    const reactBundles = devReactBundles(configuration);
    setupProcessGlobalForImportMappedModules(reactBundles), setupCSSImportMaps(configuration, baseUrl, reactBundles);
    const restoreConsoleTimeStamp = hideConsoleTimeStampFromReactDom(configuration, reactBundles);
    try {
      let result;
      if (esModule === "vs/workbench/workbench.glass.main" && configuration.cssModules && configuration.devBundleMtime !== void 0) {
        const glassBundleUrl = new URL("vs/workbench/workbench.glass.main.bundle.js", baseUrl);
        configuration.devBundleMtime !== void 0 && glassBundleUrl.searchParams.set("mtime", String(configuration.devBundleMtime));
        try {
          result = await eval("import(glassBundleUrl.href)");
        } catch {
          result = void 0;
        }
      }
      return result || (result = await import(new URL(`${esModule}.js`, baseUrl).href)), developerDeveloperKeybindingsDisposable && removeDeveloperKeybindingsAfterLoad && developerDeveloperKeybindingsDisposable(), { result, configuration };
    } catch (e) {
      throw onUnexpectedError(e, enableDeveloperKeybindings && !forceDisableShowDevtoolsOnError), e;
    } finally {
      restoreConsoleTimeStamp();
    }
  }
  function swapWorkbenchStylesheetForEntry(e, a) {
    if (a === e) return;
    const l = `${e.split("/").pop()}.css`, c = `${a.split("/").pop()}.css`;
    if (l === c) return;
    const t = document.querySelector(`link[rel="stylesheet"][href$="${l}"]`), h = t?.getAttribute("href");
    t && h && t.setAttribute("href", `${h.slice(0, h.length - l.length)}${c}`);
  }
  async function resolveWindowConfiguration() {
    const e = setTimeout(() => {
      console.error("[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...");
    }, 1e4);
    performance.mark("code/willWaitForWindowConfig");
    const a = await preloadGlobals.context.resolveConfiguration();
    return performance.mark("code/didWaitForWindowConfig"), clearTimeout(e), a;
  }
  function setupDeveloperKeybindings(e, a) {
    const { forceEnableDeveloperKeybindings: l, disallowReloadKeybinding: c, removeDeveloperKeybindingsAfterLoad: t, forceDisableShowDevtoolsOnError: h } = typeof a?.configureDeveloperSettings == "function" ? a.configureDeveloperSettings(e) : { forceEnableDeveloperKeybindings: false, disallowReloadKeybinding: false, removeDeveloperKeybindingsAfterLoad: false, forceDisableShowDevtoolsOnError: false }, d = !!(!!safeProcess.env.VSCODE_DEV || l);
    let i;
    return d && (i = registerDeveloperKeybindings(c)), { enableDeveloperKeybindings: d, removeDeveloperKeybindingsAfterLoad: t, developerDeveloperKeybindingsDisposable: i, forceDisableShowDevtoolsOnError: h };
  }
  function registerDeveloperKeybindings(e) {
    const a = preloadGlobals.ipcRenderer, l = function(d) {
      return [d.ctrlKey ? "ctrl-" : "", d.metaKey ? "meta-" : "", d.altKey ? "alt-" : "", d.shiftKey ? "shift-" : "", d.keyCode].join("");
    }, c = safeProcess.platform === "darwin" ? "meta-alt-73" : "ctrl-shift-73", t = "123", h = safeProcess.platform === "darwin" ? "meta-82" : "ctrl-82";
    let o = function(d) {
      const i = l(d);
      i === c || i === t ? a.send("vscode:toggleDevTools") : i === h && !e && a.send("vscode:reloadWindow");
    };
    return window.addEventListener("keydown", o), function() {
      o && (window.removeEventListener("keydown", o), o = void 0);
    };
  }
  function setupNLS(e) {
    globalThis._VSCODE_NLS_MESSAGES = e.nls.messages, globalThis._VSCODE_NLS_LANGUAGE = e.nls.language;
    let a = e.nls.language || "en";
    a === "zh-tw" ? a = "zh-Hant" : a === "zh-cn" && (a = "zh-Hans"), window.document.documentElement.setAttribute("lang", a);
  }
  function onUnexpectedError(e, a) {
    a && preloadGlobals.ipcRenderer.send("vscode:openDevTools"), console.error(`[uncaught exception]: ${e}`), e && typeof e != "string" && e.stack && console.error(e.stack);
  }
  function fileUriFromPath(e, a) {
    let l = e.replace(/\\/g, "/");
    l.length > 0 && l.charAt(0) !== "/" && (l = `/${l}`);
    let c;
    return a.isWindows && l.startsWith("//") ? c = encodeURI(`${a.scheme || "file"}:${l}`) : c = encodeURI(`${a.scheme || "file"}://${a.fallbackAuthority || ""}${l}`), c.replace(/#/g, "%23");
  }
  function devReactBundles(e) {
    return "react-production-bundles" in e && e["react-production-bundles"] === true ? "production" : "development";
  }
  function hideConsoleTimeStampFromReactDom(e, a) {
    const l = "react-performance-tracks" in e && e["react-performance-tracks"] === true || window.localStorage.getItem("cursor.developer.reactPerformanceTracks") === "true";
    if (!safeProcess.env.VSCODE_DEV || a !== "development" || l) return () => {
    };
    const c = console.timeStamp;
    return console.timeStamp = void 0, () => {
      console.timeStamp = c;
    };
  }
  function setupProcessGlobalForImportMappedModules(e) {
    const a = safeProcess.env.NODE_ENV ?? (safeProcess.env.VSCODE_DEV && e === "development" ? "development" : "production"), l = globalThis;
    if (l.process === void 0) {
      l.process = { env: { NODE_ENV: a } };
      return;
    }
    l.process.env ??= {}, l.process.env.NODE_ENV ??= a;
  }
  function setupCSSImportMaps(e, a, l) {
    const c = { react: `react/esm-index-${l}.js`, "react/jsx-runtime": `react/esm-jsx-runtime-${l}.js`, "react/compiler-runtime": `react/esm-compiler-runtime-${l}.js`, "react-dom": `react-dom/esm-index-${l}.js`, "react-dom/client": `react-dom/esm-client-${l}.js`, "react-vnc": "react-vnc/dist/react-vnc.js", "motion/react": "motion/dist/es/react.mjs", "motion/react-m": "motion/dist/es/react-m.mjs", "framer-motion": "framer-motion/dist/es/index.mjs", "framer-motion/m": "framer-motion/dist/es/m.mjs", "motion-dom": "motion-dom/dist/es/index.mjs", "motion-utils": "motion-utils/dist/es/index.mjs", "@tanstack/query-core": "@tanstack/query-core/build/modern/index.js", "@tanstack/solid-query": "@tanstack/solid-query/build/index.js", "@tanstack/react-virtual": "@tanstack/react-virtual/dist/esm/index.js", "@tanstack/virtual-core": "@tanstack/virtual-core/dist/esm/index.js", "solid-refresh": "solid-refresh/dist/solid-refresh.mjs", "@solid-devtools/overlay": "@solid-devtools/overlay/dist/index.js", "@solid-devtools/debugger/setup": "@solid-devtools/debugger/dist/setup.js", "@solid-devtools/debugger/bundled": "@solid-devtools/debugger/dist/bundled.js", "@solid-devtools/shared/utils": "@solid-devtools/shared/dist/utils.js", "@nothing-but/utils": "@nothing-but/utils/dist/index.js", "@nothing-but/utils/num": "@nothing-but/utils/dist/num.js", "solid-js": "solid-js/dist/dev.js", "solid-js/web": "solid-js/web/dist/dev.js", "solid-js/store": "solid-js/store/dist/dev.js", "solid-js/jsx-runtime": "solid-js/h/jsx-runtime/dist/jsx.js", "jotai/vanilla": "jotai/esm/vanilla.mjs", "jotai/vanilla/internals": "jotai/esm/vanilla/internals.mjs", "@opentelemetry/api": "@opentelemetry/api/build/esm/index.js", rxjs: "rxjs/dist/esm/index.js", "rxjs/internal/Subject": "rxjs/dist/esm/internal/Subject.js", zod: "zod/index.js", "zod/v4-mini": "zod/v4-mini/index.js", "gray-matter": "gray-matter/index.js", "js-yaml": "js-yaml/dist/js-yaml.mjs", "@dnd-kit/accessibility": "@dnd-kit/accessibility/dist/accessibility.esm.js", "@dnd-kit/core": "@dnd-kit/core/dist/core.esm.js", "@dnd-kit/sortable": "@dnd-kit/sortable/dist/sortable.esm.js", "@dnd-kit/utilities": "@dnd-kit/utilities/dist/utilities.esm.js", "perfect-freehand": "perfect-freehand/dist/esm/index.mjs", tslib: "tslib/tslib.es6.mjs", "@sentry/browser": "@sentry/browser/build/npm/esm/dev/index.js", "@sentry-internal/replay": "@sentry-internal/replay/build/npm/esm/index.js", "@sentry-internal/replay-canvas": "@sentry-internal/replay-canvas/build/npm/esm/index.js", "@sentry-internal/feedback": "@sentry-internal/feedback/build/npm/esm/index.js", "@stylexjs/stylex": "@stylexjs/stylex/lib/es/stylex.mjs", "react-window": "react-window/dist/react-window.js", "@base-ui/react/popover": "@base-ui/react/popover/index.mjs", "@floating-ui/react-dom": "@floating-ui/react-dom/dist/floating-ui.react-dom.mjs", "@floating-ui/dom": "@floating-ui/dom/dist/floating-ui.dom.mjs", "@floating-ui/core": "@floating-ui/core/dist/floating-ui.core.mjs", "@floating-ui/utils": "@floating-ui/utils/dist/floating-ui.utils.mjs", "@floating-ui/utils/dom": "@floating-ui/utils/dist/floating-ui.utils.dom.mjs", reselect: "reselect/dist/reselect.mjs", "@base-ui/utils/platform": "@base-ui/utils/platform/index.mjs", "@base-ui/utils/store": "@base-ui/utils/store/index.mjs", ...Object.fromEntries(["addEventListener", "empty", "error", "fastHooks", "fastObjectShallowCompare", "formatErrorMessage", "generateId", "getDefaultFormSubmitter", "getReactElementRef", "inertValue", "isElementDisabled", "isMouseWithinBounds", "mergeCleanups", "mergeObjects", "owner", "reactVersion", "safeReact", "useAnimationFrame", "useControlled", "useEnhancedClickHandler", "useForcedRerendering", "useId", "useInterval", "useIsoLayoutEffect", "useMergedRefs", "useOnFirstRender", "useOnMount", "usePreviousValue", "useRefWithInit", "useScrollLock", "useStableCallback", "useTimeout", "useValueAsRef", "visuallyHidden", "warn"].map((u) => [`@base-ui/utils/${u}`, `@base-ui/utils/${u}.mjs`])) }, t = "../../packages/ui/dist/automations.js", h = { "proto/": "../proto/", "@anysphere/proto/": "../proto/", "@bufbuild/protobuf": "bufbuild/protobuf.js", "@connectrpc/connect": "bufbuild/connect.js", "@connectrpc/connect/protocol": "bufbuild/connect/protocol/index.js", "@tanstack/react-query": "tanstack/react-query/index.js", "@sentry/core": "sentry/core/index.js", "use-sync-external-store/shim": "use-sync-external-store/shim.js", "use-sync-external-store/shim/with-selector": "use-sync-external-store/with-selector.js", "@sentry/types": "sentry/types/index.js", "@sentry-internal/browser-utils": "sentry/browser-utils/index.js", "@anysphere/analytics-types/cloud-agent-lifecycle": "../../packages/analytics-types/dist/cross-surface/cloud-agent-lifecycle.js", "@anysphere/analytics-types/p2p-referrals": "../../packages/analytics-types/dist/cross-surface/p2p-referrals.js", "@anysphere/cloud-agent-prompt-uploads": "../../packages/cloud-agent-prompt-uploads/dist/index.js", "@anysphere/cloud-agent-source": "../../packages/cloud-agent-source/dist/index.js", "@anysphere/constants": "../../packages/constants/dist/index.js", "@anysphere/constants/pull-request-stack-layout": "../../packages/constants/dist/pull-request-stack-layout.js", "@anysphere/voice-call-harness": "../../packages/voice-call-harness/dist/index.js", "@anysphere/voice-call-harness/harness": "../../packages/voice-call-harness/dist/harness/index.js", "@anysphere/voice-call-harness/browser": "../../packages/voice-call-harness/dist/browser/index.js", "@anysphere/cursor-voice": "../../packages/cursor-voice/dist/index.js", "@anysphere/cursor-voice/client": "../../packages/cursor-voice/dist/client.js", "@anysphere/custom-modes": "../../packages/custom-modes/dist/index.js", "@anysphere/design-mode-annotation": "../../packages/design-mode-annotation/dist/index.js", "@anysphere/environment-setup": "../../packages/environment-setup/dist/index.js", "@anysphere/mcp-core/admin-mcp-policy": "../../packages/mcp-core/dist/admin-mcp-policy.js", "@anysphere/mcp-core/admin-mcp-tool-allowlist": "../../packages/mcp-core/dist/admin-mcp-tool-allowlist.js", "@anysphere/mcp-core/mcp-tool-annotations": "../../packages/mcp-core/dist/mcp-tool-annotations.js", "@anysphere/mcp-core/fsm/coordinator": "../../packages/mcp-core/dist/fsm/coordinator.js", "@anysphere/mcp-core/fsm/error-classification": "../../packages/mcp-core/dist/fsm/error-classification.js", "@anysphere/mcp-core/lifecycle": "../../packages/mcp-core/dist/lifecycle.js", "@anysphere/mcp-core/lifecycle/client-adapter": "../../packages/mcp-core/dist/lifecycle/client-adapter.js", "@anysphere/mcp-core/lifecycle/server-lifecycle": "../../packages/mcp-core/dist/lifecycle/server-lifecycle.js", "@anysphere/mcp-core/lifecycle/transport-factory": "../../packages/mcp-core/dist/lifecycle/transport-factory.js", "@anysphere/mcp-core/oauth/mcp-oauth-keys": "../../packages/mcp-core/dist/oauth/mcp-oauth-keys.js", "@anysphere/mcp-core/oauth/rest-mcp-provider-metadata": "../../packages/mcp-core/dist/oauth/rest-mcp-provider-metadata.js", "@anysphere/mcp-core/oauth/resolved-oauth-client-id": "../../packages/mcp-core/dist/oauth/resolved-oauth-client-id.js", "@anysphere/mcp-core/connectivity/mcp-connectivity-change": "../../packages/mcp-core/dist/connectivity/mcp-connectivity-change.js", "@anysphere/mcp-core/config/mcp-config-service": "../../packages/mcp-core/dist/config/mcp-config-service.js", "@anysphere/mcp-config": "../../packages/mcp-config/dist/index.js", "@anysphere/mcp-core/transport/mcp-url-utils": "../../packages/mcp-core/dist/transport/mcp-url-utils.js", "@anysphere/mcp-core/oauth/grant-migration-binding": "../../packages/mcp-core/dist/oauth/grant-migration-binding.js", "@anysphere/agent-analytics": "../../packages/agent-analytics/dist/browser.js", "@anysphere/agent-analytics/browser": "../../packages/agent-analytics/dist/browser.js", "@anysphere/agent-analytics/commit-scoring": "../../packages/agent-analytics/dist/commit-scoring/index.js", "@anysphere/agent-exec": "../../packages/agent-exec/dist/index.js", "@anysphere/agent-core": "../../packages/agent-core/dist/index.js", "@anysphere/agent-kv": "../../packages/agent-kv/dist/index.js", "@anysphere/agent-transcript": "../../packages/agent-transcript/dist/index.js", "@anysphere/agent-transcript/browser": "../../packages/agent-transcript/dist/browser.js", "@anysphere/virtual": "../../packages/virtual/dist/index.js", "@anysphere/virtual/browser": "../../packages/virtual/dist/browser/index.js", "@anysphere/virtual/text": "../../packages/virtual/dist/text/index.js", "@anysphere/virtual/react": "../../packages/virtual/dist/react/index.js", "@anysphere/virtual/verify": "../../packages/virtual/dist/verify/index.js", "@anysphere/xai-commerce-prepaid": "../../packages/xai-commerce-prepaid/dist/index.js", "@chenglou/pretext": "../../packages/virtual/node_modules/@chenglou/pretext/dist/layout.js", "@anysphere/claude-code-import": "../../packages/claude-code-import/dist/index.js", "@anysphere/agent-client": "../../packages/agent-client/dist/index.js", "@anysphere/origin-sync-client": "../../packages/origin-sync-client/dist/index.js", "@anysphere/context": "../../packages/context/dist/index.js", "@anysphere/context-rpc": "../../packages/context-rpc/dist/index.js", "@anysphere/automation-deploy-spec/workflowDataSerializer": "../../packages/automation-deploy-spec/dist/src/workflowDataSerializer.js", "@anysphere/cursor-backend-control-mcp": "../../packages/cursor-backend-control-mcp/dist/index.js", "@anysphere/cursor-config/browser": "../../packages/cursor-config/dist/browser.js", "@anysphere/metrics": "../../packages/metrics/dist/index.js", "@anysphere/ui/components/Project/migration-bridge": "../../packages/ui/dist/bundle.js", "@anysphere/ui/components/Automations": t, "@anysphere/ui/components/Automations/AgentSettingsForm": t, "@anysphere/ui/components/Automations/AsyncAgentsList": t, "@anysphere/ui/components/Automations/PlatformTestModalShell": t, "@anysphere/ui/components/Automations/actions": t, "@anysphere/ui/components/Automations/components": t, "@anysphere/ui/components/Automations/constants": t, "@anysphere/ui/components/Automations/components/ChangeOwnerModal": t, "@anysphere/ui/components/Automations/hooks": t, "@anysphere/ui/components/Automations/hooks/useValidateAutomationToolsStateMachine": t, "@anysphere/ui/components/Automations/platform/capabilities": t, "@anysphere/ui/components/Automations/run-history": t, "@anysphere/ui/components/Automations/run-history/cells/RowToolsCell": t, "@anysphere/ui/components/Automations/run-history/run-history-view-model": t, "@anysphere/ui/components/Automations/run-history/run-history-view-model-utils": t, "@anysphere/ui/components/Automations/run-history/utils/run-history-utils": t, "@anysphere/ui/components/Automations/run-history/utils/summary-stats": t, "@anysphere/ui/components/Automations/runtime": t, "@anysphere/ui/components/Automations/runtime/AutomationsRuntime": t, "@anysphere/ui/components/Automations/templates": t, "@anysphere/ui/components/Automations/templates/TemplateGallery": t, "@anysphere/ui/components/Automations/triggers": t, "@anysphere/ui/components/Automations/triggers/InlineTriggerButton": t, "@anysphere/ui/components/Automations/types": t, "@anysphere/ui/components/Automations/utils/cronScheduleDisplay": t, "@anysphere/ui/components/Automations/utils/cronUtils": t, "@anysphere/ui/components/Automations/utils/enableBlockingIssues": t, "@anysphere/ui/components/Automations/utils/formatters": t, "@anysphere/ui/components/Automations/utils/getDefaultWorkflowData": t, "@anysphere/ui/components/Automations/utils/internal-user": t, "@anysphere/ui/components/Automations/utils/managed-agents-onboarding-entry": t, "@anysphere/ui/components/Automations/utils/mcp-plugin-by-server-name": t, "@anysphere/ui/components/Automations/utils/mcpPrefill": t, "@anysphere/ui/components/Automations/utils/no-repo-environment": t, "@anysphere/ui/components/Automations/utils/origin-branches": t, "@anysphere/ui/components/Automations/utils/origin-repo": t, "@anysphere/ui/components/Automations/utils/pendingEnableRequest": t, "@anysphere/ui/components/Automations/utils/permissions": t, "@anysphere/ui/components/Automations/utils/prefill": t, "@anysphere/ui/components/Automations/utils/processAvailableModels": t, "@anysphere/ui/components/Automations/utils/repo-compatibility": t, "@anysphere/ui/components/Automations/utils/repo-url-identity": t, "@anysphere/ui/components/Automations/utils/slack-conversations": t, "@anysphere/ui/components/Automations/utils/slack-channel-name-map": t, "@anysphere/ui/components/Automations/utils/triggerDataUtils": t, "@anysphere/ui": "../../packages/ui/dist/bundle.js", "@anysphere/cursor-ui": "../../packages/cursor-ui/dist/esm/index.js", "@anysphere/utils": "../../packages/utils/dist/browser.js", "@anysphere/utils/clock": "../../packages/utils/dist/clock.js", "@anysphere/utils/env-setup-actions": "../../packages/utils/dist/env-setup-actions.js", "@anysphere/git-core": "../../packages/git-core/dist/index.js", "@anysphere/git-core/diagnostics": "../../packages/git-core/dist/diagnostics.js", "@anysphere/hooks": "../../packages/hooks/dist/index.js", "@anysphere/hooks-carriers": "../../packages/hooks-carriers/dist/index.js", "@anysphere/model-selection": "../../packages/model-selection/dist/index.js", "@anysphere/proto/redaction-schema": "../../packages/proto/dist/redactionSchema.js", "@anysphere/redaction": "../../packages/redaction/dist/index.js", "@anysphere/redacted-protos": "../../packages/redacted-protos/dist/index.js", "@anysphere/redacted-protos/agent-v1": "../../packages/redacted-protos/dist/agent-v1.js", "@anysphere/redacted-protos/aiserver-v1": "../../packages/redacted-protos/dist/aiserver-v1.js", "@anysphere/redacted-protos/type-guards": "../../packages/redacted-protos/dist/type-guards.js" }, o = { imports: {} };
    for (const [u, m] of Object.entries(c)) o.imports[u] = new URL(`../node_modules/${m}`, a).href;
    for (const [u, m] of Object.entries(h)) o.imports[u] = new URL(`./external/${m}`, a).href;
    o.imports["pdfjs-dist"] = new URL("./vs/glass/browser/media/pdf.min.mjs", a).href;
    const d = ["api/context", "api/diag", "api/metrics", "api/propagation", "api/trace", "baggage/context-helpers", "baggage/internal/baggage-impl", "baggage/internal/symbol", "baggage/types", "baggage/utils", "common/Attributes", "common/Exception", "common/Time", "context/context", "context/NoopContextManager", "context/types", "diag/ComponentLogger", "diag/consoleLogger", "diag/internal/logLevelLogger", "diag/internal/noopLogger", "diag/types", "experimental/index", "experimental/trace/SugaredOptions", "experimental/trace/SugaredTracer", "internal/global-utils", "internal/semver", "metrics/Meter", "metrics/MeterProvider", "metrics/Metric", "metrics/NoopMeter", "metrics/NoopMeterProvider", "metrics/ObservableResult", "platform/browser/globalThis", "platform/browser/index", "platform/index", "platform/node/globalThis", "platform/node/index", "propagation/NoopTextMapPropagator", "propagation/TextMapPropagator", "trace/attributes", "trace/context-utils", "trace/internal/tracestate-impl", "trace/internal/tracestate-validators", "trace/internal/utils", "trace/invalid-span-constants", "trace/link", "trace/NonRecordingSpan", "trace/NoopTracer", "trace/NoopTracerProvider", "trace/ProxyTracer", "trace/ProxyTracerProvider", "trace/Sampler", "trace/SamplingResult", "trace/span", "trace/span_context", "trace/span_kind", "trace/spancontext-utils", "trace/SpanOptions", "trace/status", "trace/trace_flags", "trace/trace_state", "trace/tracer", "trace/tracer_options", "trace/tracer_provider", "context-api", "diag-api", "index", "metrics-api", "propagation-api", "trace-api", "version"], i = new URL("../node_modules/@opentelemetry/api/build/esm/", a).href;
    for (const u of d) o.imports[`${i}${u}`] = `${i}${u}.js`;
    if (o.imports[`${i}platform`] = `${i}platform/index.js`, o.imports[`${i}experimental`] = `${i}experimental/index.js`, o.imports[`${i}platform/node`] = `${i}platform/node/index.js`, o.imports[`${i}platform/browser`] = `${i}platform/browser/index.js`, e.cssModules && e.cssModules.size > 0) {
      performance.mark("code/willAddCssLoader"), globalThis._VSCODE_CSS_LOAD = function(s, r, v) {
        const b = document.createElement("link");
        b.rel = "stylesheet", b.href = s + "?hash=" + v, b.type = "text/css", b.media = "screen", b.id = r.replace(".css", ""), document.head.appendChild(b);
      };
      const u = e.cssModules;
      globalThis._VSCODE_CSS_IMPORT = function(s) {
        const r = u.get(s);
        r !== void 0 ? globalThis._VSCODE_CSS_LOAD(new URL(s, a).href, s, r) : console.error("[CSS_DEV] No cssModule found", s);
      };
      const m = `
				globalThis._VSCODE_CSS_IMPORT(new URLSearchParams(new URL(import.meta.url).hash.slice(1)).get('module'));
				export default {};
		`, g = new Blob([m], { type: "application/javascript" }), f = URL.createObjectURL(g);
      for (const [s, r] of e.cssModules) {
        const v = new URL(s, a).href;
        o.imports[v] = f + "#module=" + encodeURIComponent(s);
      }
      const n = window.trustedTypes?.createPolicy("vscode-bootstrapImportMap", { createScript(s) {
        return s;
      } }), p = JSON.stringify(o, void 0, 2), y = document.createElement("script");
      y.type = "importmap", y.setAttribute("nonce", "0c6a828f1297"), y.textContent = n?.createScript(p) ?? p, document.head.appendChild(y), performance.mark("code/didAddCssLoader");
    }
  }
  globalThis.MonacoBootstrapWindow = { load };
})(), (async function() {
  performance.mark("code/didStartRenderer");
  const e = window.MonacoBootstrapWindow, a = window.vscode;
  function l() {
    const o = globalThis;
    if (o.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== void 0) return;
    const d = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    let u = 1;
    const m = () => {
    };
    o.__REACT_DEVTOOLS_GLOBAL_HOOK__ = { renderers: d, supportsFiber: true, isDisabled: false, inject: (g) => {
      const f = u++;
      return d.set(f, g), f;
    }, on: m, off: m, sub: () => m, emit: m, checkDCE: m, getFiberRoots: (g) => {
      let f = i.get(g);
      return f === void 0 && (f = /* @__PURE__ */ new Set(), i.set(g, f)), f;
    }, onCommitFiberRoot: m, onCommitFiberUnmount: m, onPostCommitFiberRoot: m };
  }
  function c(o) {
    if (performance.mark("code/willShowPartsSplash"), o.glass === true) {
      showWelcomeSplashEarly(window.document, resolveWelcomeSplashEarlyColors({ glassSplash: o.glassSplash, colorScheme: o.colorScheme })), typeof o.zoomLevel == "number" && typeof a?.webFrame?.setZoomLevel == "function" && a.webFrame.setZoomLevel(o.zoomLevel), performance.mark("code/didShowPartsSplash");
      return;
    }
    let i = o.partsSplash;
    i && (o.autoDetectHighContrast && o.colorScheme.highContrast ? (o.colorScheme.dark && i.baseTheme !== "hc-black" || !o.colorScheme.dark && i.baseTheme !== "hc-light") && (i = void 0) : o.autoDetectColorScheme && (o.colorScheme.dark && i.baseTheme !== "vs-dark" || !o.colorScheme.dark && i.baseTheme !== "vs") && (i = void 0)), i && o.extensionDevelopmentPath && (i.layoutInfo = void 0);
    let u, m, g;
    i ? (u = i.baseTheme, m = i.colorInfo.editorBackground, g = i.colorInfo.foreground) : o.autoDetectHighContrast && o.colorScheme.highContrast ? o.colorScheme.dark ? (u = "hc-black", m = "#000000", g = "#FFFFFF") : (u = "hc-light", m = "#FFFFFF", g = "#000000") : o.autoDetectColorScheme && (o.colorScheme.dark ? (u = "vs-dark", m = "#1E1E1E", g = "#CCCCCC") : (u = "vs", m = "#FFFFFF", g = "#000000"));
    const f = document.createElement("style");
    if (f.className = "initialShellColors", window.document.head.appendChild(f), f.textContent = `body {	background-color: ${m}; color: ${g}; margin: 0; padding: 0; }`, typeof i?.zoomLevel == "number" && typeof a?.webFrame?.setZoomLevel == "function" && a.webFrame.setZoomLevel(i.zoomLevel), i?.layoutInfo) {
      const { layoutInfo: n, colorInfo: p } = i, y = document.createElement("div");
      if (y.id = "monaco-parts-splash", y.className = u ?? "vs-dark", n.windowBorder && p.windowBorder) {
        const s = document.createElement("div");
        s.style.position = "absolute", s.style.width = "calc(100vw - 2px)", s.style.height = "calc(100vh - 2px)", s.style.zIndex = "1", s.style.border = "1px solid var(--window-border-color)", s.style.setProperty("--window-border-color", p.windowBorder), n.windowBorderRadius && (s.style.borderRadius = n.windowBorderRadius), y.appendChild(s);
      }
      if (n.auxiliarySideBarWidth = Math.min(n.auxiliarySideBarWidth, window.innerWidth - (n.activityBarWidth + n.editorPartMinWidth + n.sideBarWidth)), n.sideBarWidth = Math.min(n.sideBarWidth, window.innerWidth - (n.activityBarWidth + n.editorPartMinWidth + n.auxiliarySideBarWidth)), n.titleBarHeight > 0) {
        const s = document.createElement("div");
        if (s.style.position = "absolute", s.style.width = "100%", s.style.height = `${n.titleBarHeight}px`, s.style.left = "0", s.style.top = "0", s.style.backgroundColor = `${p.titleBarBackground}`, s.style["-webkit-app-region"] = "drag", y.appendChild(s), p.titleBarBorder) {
          const r = document.createElement("div");
          r.style.position = "absolute", r.style.width = "100%", r.style.height = "1px", r.style.left = "0", r.style.bottom = "0", r.style.borderBottom = `1px solid ${p.titleBarBorder}`, s.appendChild(r);
        }
      }
      if (n.activityBarWidth > 0) {
        const s = document.createElement("div");
        if (s.style.position = "absolute", s.style.width = `${n.activityBarWidth}px`, s.style.height = `calc(100% - ${n.titleBarHeight + n.statusBarHeight}px)`, s.style.top = `${n.titleBarHeight}px`, n.sideBarSide === "left" ? s.style.left = "0" : s.style.right = "0", s.style.backgroundColor = `${p.activityBarBackground}`, y.appendChild(s), p.activityBarBorder) {
          const r = document.createElement("div");
          r.style.position = "absolute", r.style.width = "1px", r.style.height = "100%", r.style.top = "0", n.sideBarSide === "left" ? (r.style.right = "0", r.style.borderRight = `1px solid ${p.activityBarBorder}`) : (r.style.left = "0", r.style.borderLeft = `1px solid ${p.activityBarBorder}`), s.appendChild(r);
        }
      }
      if (o.workspace && n.sideBarWidth > 0) {
        const s = document.createElement("div");
        if (s.style.position = "absolute", s.style.width = `${n.sideBarWidth}px`, s.style.height = `calc(100% - ${n.titleBarHeight + n.statusBarHeight}px)`, s.style.top = `${n.titleBarHeight}px`, n.sideBarSide === "left" ? s.style.left = `${n.activityBarWidth}px` : s.style.right = `${n.activityBarWidth}px`, s.style.backgroundColor = `${p.sideBarBackground}`, y.appendChild(s), p.sideBarBorder) {
          const r = document.createElement("div");
          r.style.position = "absolute", r.style.width = "1px", r.style.height = "100%", r.style.top = "0", r.style.right = "0", n.sideBarSide === "left" ? r.style.borderRight = `1px solid ${p.sideBarBorder}` : (r.style.left = "0", r.style.borderLeft = `1px solid ${p.sideBarBorder}`), s.appendChild(r);
        }
      }
      if (n.auxiliarySideBarWidth > 0 || (n.unifiedSideBarWidth ?? 0) > 0) {
        const s = n.unifiedSideBarWidth ?? n.auxiliarySideBarWidth, r = document.createElement("div");
        if (r.style.position = "absolute", r.style.width = `${s}px`, r.style.height = `calc(100% - ${n.titleBarHeight + n.statusBarHeight}px)`, r.style.top = `${n.titleBarHeight}px`, n.sideBarSide === "left" ? r.style.right = "0" : r.style.left = "0", r.style.backgroundColor = `${p.sideBarBackground}`, y.appendChild(r), p.sideBarBorder) {
          const v = document.createElement("div");
          v.style.position = "absolute", v.style.width = "1px", v.style.height = "100%", v.style.top = "0", n.sideBarSide === "left" ? (v.style.left = "0", v.style.borderLeft = `1px solid ${p.sideBarBorder}`) : (v.style.right = "0", v.style.borderRight = `1px solid ${p.sideBarBorder}`), r.appendChild(v);
        }
      }
      if (n.statusBarHeight > 0) {
        const s = document.createElement("div");
        if (s.style.position = "absolute", s.style.width = "100%", s.style.height = `${n.statusBarHeight}px`, s.style.bottom = "0", s.style.left = "0", o.workspace && p.statusBarBackground ? s.style.backgroundColor = p.statusBarBackground : !o.workspace && p.statusBarNoFolderBackground && (s.style.backgroundColor = p.statusBarNoFolderBackground), y.appendChild(s), p.statusBarBorder) {
          const r = document.createElement("div");
          r.style.position = "absolute", r.style.width = "100%", r.style.height = "1px", r.style.top = "0", r.style.borderTop = `1px solid ${p.statusBarBorder}`, s.appendChild(r);
        }
      }
      window.document.body.appendChild(y);
    }
    performance.mark("code/didShowPartsSplash");
  }
  const { result: t, configuration: h } = await e.load("vs/workbench/workbench.desktop.main", { resolveEsModule: function(o) {
    return o.glass === true ? "vs/workbench/workbench.glass.main" : "vs/workbench/workbench.desktop.main";
  }, configureDeveloperSettings: function(o) {
    return { forceDisableShowDevtoolsOnError: typeof o.extensionTestsPath == "string" || o["enable-smoke-test-driver"] === true, forceEnableDeveloperKeybindings: Array.isArray(o.extensionDevelopmentPath) && o.extensionDevelopmentPath.length > 0, removeDeveloperKeybindingsAfterLoad: true };
  }, beforeImport: function(o) {
    (o.willReloadWindowMs !== void 0 || o.cssModulesComputeMs !== void 0) && (globalThis.__glassReloadTiming = { willReloadWindowMs: o.willReloadWindowMs, cssModulesComputeMs: o.cssModulesComputeMs }), o.glass === true && l(), c(o), Object.defineProperty(window, "vscodeWindowId", { get: () => o.windowId }), window.requestIdleCallback(() => {
      const d = document.createElement("canvas");
      d.getContext("2d")?.clearRect(0, 0, d.width, d.height), d.remove();
    }, { timeout: 50 }), performance.mark("code/willLoadWorkbenchMain");
  } });
  performance.mark("code/didLoadWorkbenchMain"), t.main(h);
})();
