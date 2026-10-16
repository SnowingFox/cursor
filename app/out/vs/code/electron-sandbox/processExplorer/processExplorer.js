/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9c2bf2a7-f715-5ec7-864f-6de331088ad7");
  } catch (e2) {
  }
})();
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
    } catch (s) {
      throw onUnexpectedError(s, enableDeveloperKeybindings && !forceDisableShowDevtoolsOnError), s;
    } finally {
      restoreConsoleTimeStamp();
    }
  }
  function swapWorkbenchStylesheetForEntry(s, t) {
    if (t === s) return;
    const o = `${s.split("/").pop()}.css`, r = `${t.split("/").pop()}.css`;
    if (o === r) return;
    const e = document.querySelector(`link[rel="stylesheet"][href$="${o}"]`), p = e?.getAttribute("href");
    e && p && e.setAttribute("href", `${p.slice(0, p.length - o.length)}${r}`);
  }
  async function resolveWindowConfiguration() {
    const s = setTimeout(() => {
      console.error("[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...");
    }, 1e4);
    performance.mark("code/willWaitForWindowConfig");
    const t = await preloadGlobals.context.resolveConfiguration();
    return performance.mark("code/didWaitForWindowConfig"), clearTimeout(s), t;
  }
  function setupDeveloperKeybindings(s, t) {
    const { forceEnableDeveloperKeybindings: o, disallowReloadKeybinding: r, removeDeveloperKeybindingsAfterLoad: e, forceDisableShowDevtoolsOnError: p } = typeof t?.configureDeveloperSettings == "function" ? t.configureDeveloperSettings(s) : { forceEnableDeveloperKeybindings: false, disallowReloadKeybinding: false, removeDeveloperKeybindingsAfterLoad: false, forceDisableShowDevtoolsOnError: false }, a = !!(!!safeProcess.env.VSCODE_DEV || o);
    let n;
    return a && (n = registerDeveloperKeybindings(r)), { enableDeveloperKeybindings: a, removeDeveloperKeybindingsAfterLoad: e, developerDeveloperKeybindingsDisposable: n, forceDisableShowDevtoolsOnError: p };
  }
  function registerDeveloperKeybindings(s) {
    const t = preloadGlobals.ipcRenderer, o = function(a) {
      return [a.ctrlKey ? "ctrl-" : "", a.metaKey ? "meta-" : "", a.altKey ? "alt-" : "", a.shiftKey ? "shift-" : "", a.keyCode].join("");
    }, r = safeProcess.platform === "darwin" ? "meta-alt-73" : "ctrl-shift-73", e = "123", p = safeProcess.platform === "darwin" ? "meta-82" : "ctrl-82";
    let i = function(a) {
      const n = o(a);
      n === r || n === e ? t.send("vscode:toggleDevTools") : n === p && !s && t.send("vscode:reloadWindow");
    };
    return window.addEventListener("keydown", i), function() {
      i && (window.removeEventListener("keydown", i), i = void 0);
    };
  }
  function setupNLS(s) {
    globalThis._VSCODE_NLS_MESSAGES = s.nls.messages, globalThis._VSCODE_NLS_LANGUAGE = s.nls.language;
    let t = s.nls.language || "en";
    t === "zh-tw" ? t = "zh-Hant" : t === "zh-cn" && (t = "zh-Hans"), window.document.documentElement.setAttribute("lang", t);
  }
  function onUnexpectedError(s, t) {
    t && preloadGlobals.ipcRenderer.send("vscode:openDevTools"), console.error(`[uncaught exception]: ${s}`), s && typeof s != "string" && s.stack && console.error(s.stack);
  }
  function fileUriFromPath(s, t) {
    let o = s.replace(/\\/g, "/");
    o.length > 0 && o.charAt(0) !== "/" && (o = `/${o}`);
    let r;
    return t.isWindows && o.startsWith("//") ? r = encodeURI(`${t.scheme || "file"}:${o}`) : r = encodeURI(`${t.scheme || "file"}://${t.fallbackAuthority || ""}${o}`), r.replace(/#/g, "%23");
  }
  function devReactBundles(s) {
    return "react-production-bundles" in s && s["react-production-bundles"] === true ? "production" : "development";
  }
  function hideConsoleTimeStampFromReactDom(s, t) {
    const o = "react-performance-tracks" in s && s["react-performance-tracks"] === true || window.localStorage.getItem("cursor.developer.reactPerformanceTracks") === "true";
    if (!safeProcess.env.VSCODE_DEV || t !== "development" || o) return () => {
    };
    const r = console.timeStamp;
    return console.timeStamp = void 0, () => {
      console.timeStamp = r;
    };
  }
  function setupProcessGlobalForImportMappedModules(s) {
    const t = safeProcess.env.NODE_ENV ?? (safeProcess.env.VSCODE_DEV && s === "development" ? "development" : "production"), o = globalThis;
    if (o.process === void 0) {
      o.process = { env: { NODE_ENV: t } };
      return;
    }
    o.process.env ??= {}, o.process.env.NODE_ENV ??= t;
  }
  function setupCSSImportMaps(s, t, o) {
    const r = { react: `react/esm-index-${o}.js`, "react/jsx-runtime": `react/esm-jsx-runtime-${o}.js`, "react/compiler-runtime": `react/esm-compiler-runtime-${o}.js`, "react-dom": `react-dom/esm-index-${o}.js`, "react-dom/client": `react-dom/esm-client-${o}.js`, "react-vnc": "react-vnc/dist/react-vnc.js", "motion/react": "motion/dist/es/react.mjs", "motion/react-m": "motion/dist/es/react-m.mjs", "framer-motion": "framer-motion/dist/es/index.mjs", "framer-motion/m": "framer-motion/dist/es/m.mjs", "motion-dom": "motion-dom/dist/es/index.mjs", "motion-utils": "motion-utils/dist/es/index.mjs", "@tanstack/query-core": "@tanstack/query-core/build/modern/index.js", "@tanstack/solid-query": "@tanstack/solid-query/build/index.js", "@tanstack/react-virtual": "@tanstack/react-virtual/dist/esm/index.js", "@tanstack/virtual-core": "@tanstack/virtual-core/dist/esm/index.js", "solid-refresh": "solid-refresh/dist/solid-refresh.mjs", "@solid-devtools/overlay": "@solid-devtools/overlay/dist/index.js", "@solid-devtools/debugger/setup": "@solid-devtools/debugger/dist/setup.js", "@solid-devtools/debugger/bundled": "@solid-devtools/debugger/dist/bundled.js", "@solid-devtools/shared/utils": "@solid-devtools/shared/dist/utils.js", "@nothing-but/utils": "@nothing-but/utils/dist/index.js", "@nothing-but/utils/num": "@nothing-but/utils/dist/num.js", "solid-js": "solid-js/dist/dev.js", "solid-js/web": "solid-js/web/dist/dev.js", "solid-js/store": "solid-js/store/dist/dev.js", "solid-js/jsx-runtime": "solid-js/h/jsx-runtime/dist/jsx.js", "jotai/vanilla": "jotai/esm/vanilla.mjs", "jotai/vanilla/internals": "jotai/esm/vanilla/internals.mjs", "@opentelemetry/api": "@opentelemetry/api/build/esm/index.js", rxjs: "rxjs/dist/esm/index.js", "rxjs/internal/Subject": "rxjs/dist/esm/internal/Subject.js", zod: "zod/index.js", "zod/v4-mini": "zod/v4-mini/index.js", "gray-matter": "gray-matter/index.js", "js-yaml": "js-yaml/dist/js-yaml.mjs", "@dnd-kit/accessibility": "@dnd-kit/accessibility/dist/accessibility.esm.js", "@dnd-kit/core": "@dnd-kit/core/dist/core.esm.js", "@dnd-kit/sortable": "@dnd-kit/sortable/dist/sortable.esm.js", "@dnd-kit/utilities": "@dnd-kit/utilities/dist/utilities.esm.js", "perfect-freehand": "perfect-freehand/dist/esm/index.mjs", tslib: "tslib/tslib.es6.mjs", "@sentry/browser": "@sentry/browser/build/npm/esm/dev/index.js", "@sentry-internal/replay": "@sentry-internal/replay/build/npm/esm/index.js", "@sentry-internal/replay-canvas": "@sentry-internal/replay-canvas/build/npm/esm/index.js", "@sentry-internal/feedback": "@sentry-internal/feedback/build/npm/esm/index.js", "@stylexjs/stylex": "@stylexjs/stylex/lib/es/stylex.mjs", "react-window": "react-window/dist/react-window.js", "@base-ui/react/popover": "@base-ui/react/popover/index.mjs", "@floating-ui/react-dom": "@floating-ui/react-dom/dist/floating-ui.react-dom.mjs", "@floating-ui/dom": "@floating-ui/dom/dist/floating-ui.dom.mjs", "@floating-ui/core": "@floating-ui/core/dist/floating-ui.core.mjs", "@floating-ui/utils": "@floating-ui/utils/dist/floating-ui.utils.mjs", "@floating-ui/utils/dom": "@floating-ui/utils/dist/floating-ui.utils.dom.mjs", reselect: "reselect/dist/reselect.mjs", "@base-ui/utils/platform": "@base-ui/utils/platform/index.mjs", "@base-ui/utils/store": "@base-ui/utils/store/index.mjs", ...Object.fromEntries(["addEventListener", "empty", "error", "fastHooks", "fastObjectShallowCompare", "formatErrorMessage", "generateId", "getDefaultFormSubmitter", "getReactElementRef", "inertValue", "isElementDisabled", "isMouseWithinBounds", "mergeCleanups", "mergeObjects", "owner", "reactVersion", "safeReact", "useAnimationFrame", "useControlled", "useEnhancedClickHandler", "useForcedRerendering", "useId", "useInterval", "useIsoLayoutEffect", "useMergedRefs", "useOnFirstRender", "useOnMount", "usePreviousValue", "useRefWithInit", "useScrollLock", "useStableCallback", "useTimeout", "useValueAsRef", "visuallyHidden", "warn"].map((c) => [`@base-ui/utils/${c}`, `@base-ui/utils/${c}.mjs`])) }, e = "../../packages/ui/dist/automations.js", p = { "proto/": "../proto/", "@anysphere/proto/": "../proto/", "@bufbuild/protobuf": "bufbuild/protobuf.js", "@connectrpc/connect": "bufbuild/connect.js", "@connectrpc/connect/protocol": "bufbuild/connect/protocol/index.js", "@tanstack/react-query": "tanstack/react-query/index.js", "@sentry/core": "sentry/core/index.js", "use-sync-external-store/shim": "use-sync-external-store/shim.js", "use-sync-external-store/shim/with-selector": "use-sync-external-store/with-selector.js", "@sentry/types": "sentry/types/index.js", "@sentry-internal/browser-utils": "sentry/browser-utils/index.js", "@anysphere/analytics-types/cloud-agent-lifecycle": "../../packages/analytics-types/dist/cross-surface/cloud-agent-lifecycle.js", "@anysphere/analytics-types/p2p-referrals": "../../packages/analytics-types/dist/cross-surface/p2p-referrals.js", "@anysphere/cloud-agent-prompt-uploads": "../../packages/cloud-agent-prompt-uploads/dist/index.js", "@anysphere/cloud-agent-source": "../../packages/cloud-agent-source/dist/index.js", "@anysphere/constants": "../../packages/constants/dist/index.js", "@anysphere/constants/pull-request-stack-layout": "../../packages/constants/dist/pull-request-stack-layout.js", "@anysphere/voice-call-harness": "../../packages/voice-call-harness/dist/index.js", "@anysphere/voice-call-harness/harness": "../../packages/voice-call-harness/dist/harness/index.js", "@anysphere/voice-call-harness/browser": "../../packages/voice-call-harness/dist/browser/index.js", "@anysphere/cursor-voice": "../../packages/cursor-voice/dist/index.js", "@anysphere/cursor-voice/client": "../../packages/cursor-voice/dist/client.js", "@anysphere/custom-modes": "../../packages/custom-modes/dist/index.js", "@anysphere/design-mode-annotation": "../../packages/design-mode-annotation/dist/index.js", "@anysphere/environment-setup": "../../packages/environment-setup/dist/index.js", "@anysphere/mcp-core/admin-mcp-policy": "../../packages/mcp-core/dist/admin-mcp-policy.js", "@anysphere/mcp-core/admin-mcp-tool-allowlist": "../../packages/mcp-core/dist/admin-mcp-tool-allowlist.js", "@anysphere/mcp-core/mcp-tool-annotations": "../../packages/mcp-core/dist/mcp-tool-annotations.js", "@anysphere/mcp-core/fsm/coordinator": "../../packages/mcp-core/dist/fsm/coordinator.js", "@anysphere/mcp-core/fsm/error-classification": "../../packages/mcp-core/dist/fsm/error-classification.js", "@anysphere/mcp-core/lifecycle": "../../packages/mcp-core/dist/lifecycle.js", "@anysphere/mcp-core/lifecycle/client-adapter": "../../packages/mcp-core/dist/lifecycle/client-adapter.js", "@anysphere/mcp-core/lifecycle/server-lifecycle": "../../packages/mcp-core/dist/lifecycle/server-lifecycle.js", "@anysphere/mcp-core/lifecycle/transport-factory": "../../packages/mcp-core/dist/lifecycle/transport-factory.js", "@anysphere/mcp-core/oauth/mcp-oauth-keys": "../../packages/mcp-core/dist/oauth/mcp-oauth-keys.js", "@anysphere/mcp-core/oauth/rest-mcp-provider-metadata": "../../packages/mcp-core/dist/oauth/rest-mcp-provider-metadata.js", "@anysphere/mcp-core/oauth/resolved-oauth-client-id": "../../packages/mcp-core/dist/oauth/resolved-oauth-client-id.js", "@anysphere/mcp-core/connectivity/mcp-connectivity-change": "../../packages/mcp-core/dist/connectivity/mcp-connectivity-change.js", "@anysphere/mcp-core/config/mcp-config-service": "../../packages/mcp-core/dist/config/mcp-config-service.js", "@anysphere/mcp-config": "../../packages/mcp-config/dist/index.js", "@anysphere/mcp-core/transport/mcp-url-utils": "../../packages/mcp-core/dist/transport/mcp-url-utils.js", "@anysphere/mcp-core/oauth/grant-migration-binding": "../../packages/mcp-core/dist/oauth/grant-migration-binding.js", "@anysphere/agent-analytics": "../../packages/agent-analytics/dist/browser.js", "@anysphere/agent-analytics/browser": "../../packages/agent-analytics/dist/browser.js", "@anysphere/agent-analytics/commit-scoring": "../../packages/agent-analytics/dist/commit-scoring/index.js", "@anysphere/agent-exec": "../../packages/agent-exec/dist/index.js", "@anysphere/agent-core": "../../packages/agent-core/dist/index.js", "@anysphere/agent-kv": "../../packages/agent-kv/dist/index.js", "@anysphere/agent-transcript": "../../packages/agent-transcript/dist/index.js", "@anysphere/agent-transcript/browser": "../../packages/agent-transcript/dist/browser.js", "@anysphere/virtual": "../../packages/virtual/dist/index.js", "@anysphere/virtual/browser": "../../packages/virtual/dist/browser/index.js", "@anysphere/virtual/text": "../../packages/virtual/dist/text/index.js", "@anysphere/virtual/react": "../../packages/virtual/dist/react/index.js", "@anysphere/virtual/verify": "../../packages/virtual/dist/verify/index.js", "@anysphere/xai-commerce-prepaid": "../../packages/xai-commerce-prepaid/dist/index.js", "@chenglou/pretext": "../../packages/virtual/node_modules/@chenglou/pretext/dist/layout.js", "@anysphere/claude-code-import": "../../packages/claude-code-import/dist/index.js", "@anysphere/agent-client": "../../packages/agent-client/dist/index.js", "@anysphere/origin-sync-client": "../../packages/origin-sync-client/dist/index.js", "@anysphere/context": "../../packages/context/dist/index.js", "@anysphere/context-rpc": "../../packages/context-rpc/dist/index.js", "@anysphere/automation-deploy-spec/workflowDataSerializer": "../../packages/automation-deploy-spec/dist/src/workflowDataSerializer.js", "@anysphere/cursor-backend-control-mcp": "../../packages/cursor-backend-control-mcp/dist/index.js", "@anysphere/cursor-config/browser": "../../packages/cursor-config/dist/browser.js", "@anysphere/metrics": "../../packages/metrics/dist/index.js", "@anysphere/ui/components/Project/migration-bridge": "../../packages/ui/dist/bundle.js", "@anysphere/ui/components/Automations": e, "@anysphere/ui/components/Automations/AgentSettingsForm": e, "@anysphere/ui/components/Automations/AsyncAgentsList": e, "@anysphere/ui/components/Automations/PlatformTestModalShell": e, "@anysphere/ui/components/Automations/actions": e, "@anysphere/ui/components/Automations/components": e, "@anysphere/ui/components/Automations/constants": e, "@anysphere/ui/components/Automations/components/ChangeOwnerModal": e, "@anysphere/ui/components/Automations/hooks": e, "@anysphere/ui/components/Automations/hooks/useValidateAutomationToolsStateMachine": e, "@anysphere/ui/components/Automations/platform/capabilities": e, "@anysphere/ui/components/Automations/run-history": e, "@anysphere/ui/components/Automations/run-history/cells/RowToolsCell": e, "@anysphere/ui/components/Automations/run-history/run-history-view-model": e, "@anysphere/ui/components/Automations/run-history/run-history-view-model-utils": e, "@anysphere/ui/components/Automations/run-history/utils/run-history-utils": e, "@anysphere/ui/components/Automations/run-history/utils/summary-stats": e, "@anysphere/ui/components/Automations/runtime": e, "@anysphere/ui/components/Automations/runtime/AutomationsRuntime": e, "@anysphere/ui/components/Automations/templates": e, "@anysphere/ui/components/Automations/templates/TemplateGallery": e, "@anysphere/ui/components/Automations/triggers": e, "@anysphere/ui/components/Automations/triggers/InlineTriggerButton": e, "@anysphere/ui/components/Automations/types": e, "@anysphere/ui/components/Automations/utils/cronScheduleDisplay": e, "@anysphere/ui/components/Automations/utils/cronUtils": e, "@anysphere/ui/components/Automations/utils/enableBlockingIssues": e, "@anysphere/ui/components/Automations/utils/formatters": e, "@anysphere/ui/components/Automations/utils/getDefaultWorkflowData": e, "@anysphere/ui/components/Automations/utils/internal-user": e, "@anysphere/ui/components/Automations/utils/managed-agents-onboarding-entry": e, "@anysphere/ui/components/Automations/utils/mcp-plugin-by-server-name": e, "@anysphere/ui/components/Automations/utils/mcpPrefill": e, "@anysphere/ui/components/Automations/utils/no-repo-environment": e, "@anysphere/ui/components/Automations/utils/origin-branches": e, "@anysphere/ui/components/Automations/utils/origin-repo": e, "@anysphere/ui/components/Automations/utils/pendingEnableRequest": e, "@anysphere/ui/components/Automations/utils/permissions": e, "@anysphere/ui/components/Automations/utils/prefill": e, "@anysphere/ui/components/Automations/utils/processAvailableModels": e, "@anysphere/ui/components/Automations/utils/repo-compatibility": e, "@anysphere/ui/components/Automations/utils/repo-url-identity": e, "@anysphere/ui/components/Automations/utils/slack-conversations": e, "@anysphere/ui/components/Automations/utils/slack-channel-name-map": e, "@anysphere/ui/components/Automations/utils/triggerDataUtils": e, "@anysphere/ui": "../../packages/ui/dist/bundle.js", "@anysphere/cursor-ui": "../../packages/cursor-ui/dist/esm/index.js", "@anysphere/utils": "../../packages/utils/dist/browser.js", "@anysphere/utils/clock": "../../packages/utils/dist/clock.js", "@anysphere/utils/env-setup-actions": "../../packages/utils/dist/env-setup-actions.js", "@anysphere/git-core": "../../packages/git-core/dist/index.js", "@anysphere/git-core/diagnostics": "../../packages/git-core/dist/diagnostics.js", "@anysphere/hooks": "../../packages/hooks/dist/index.js", "@anysphere/hooks-carriers": "../../packages/hooks-carriers/dist/index.js", "@anysphere/model-selection": "../../packages/model-selection/dist/index.js", "@anysphere/proto/redaction-schema": "../../packages/proto/dist/redactionSchema.js", "@anysphere/redaction": "../../packages/redaction/dist/index.js", "@anysphere/redacted-protos": "../../packages/redacted-protos/dist/index.js", "@anysphere/redacted-protos/agent-v1": "../../packages/redacted-protos/dist/agent-v1.js", "@anysphere/redacted-protos/aiserver-v1": "../../packages/redacted-protos/dist/aiserver-v1.js", "@anysphere/redacted-protos/type-guards": "../../packages/redacted-protos/dist/type-guards.js" }, i = { imports: {} };
    for (const [c, u] of Object.entries(r)) i.imports[c] = new URL(`../node_modules/${u}`, t).href;
    for (const [c, u] of Object.entries(p)) i.imports[c] = new URL(`./external/${u}`, t).href;
    i.imports["pdfjs-dist"] = new URL("./vs/glass/browser/media/pdf.min.mjs", t).href;
    const a = ["api/context", "api/diag", "api/metrics", "api/propagation", "api/trace", "baggage/context-helpers", "baggage/internal/baggage-impl", "baggage/internal/symbol", "baggage/types", "baggage/utils", "common/Attributes", "common/Exception", "common/Time", "context/context", "context/NoopContextManager", "context/types", "diag/ComponentLogger", "diag/consoleLogger", "diag/internal/logLevelLogger", "diag/internal/noopLogger", "diag/types", "experimental/index", "experimental/trace/SugaredOptions", "experimental/trace/SugaredTracer", "internal/global-utils", "internal/semver", "metrics/Meter", "metrics/MeterProvider", "metrics/Metric", "metrics/NoopMeter", "metrics/NoopMeterProvider", "metrics/ObservableResult", "platform/browser/globalThis", "platform/browser/index", "platform/index", "platform/node/globalThis", "platform/node/index", "propagation/NoopTextMapPropagator", "propagation/TextMapPropagator", "trace/attributes", "trace/context-utils", "trace/internal/tracestate-impl", "trace/internal/tracestate-validators", "trace/internal/utils", "trace/invalid-span-constants", "trace/link", "trace/NonRecordingSpan", "trace/NoopTracer", "trace/NoopTracerProvider", "trace/ProxyTracer", "trace/ProxyTracerProvider", "trace/Sampler", "trace/SamplingResult", "trace/span", "trace/span_context", "trace/span_kind", "trace/spancontext-utils", "trace/SpanOptions", "trace/status", "trace/trace_flags", "trace/trace_state", "trace/tracer", "trace/tracer_options", "trace/tracer_provider", "context-api", "diag-api", "index", "metrics-api", "propagation-api", "trace-api", "version"], n = new URL("../node_modules/@opentelemetry/api/build/esm/", t).href;
    for (const c of a) i.imports[`${n}${c}`] = `${n}${c}.js`;
    if (i.imports[`${n}platform`] = `${n}platform/index.js`, i.imports[`${n}experimental`] = `${n}experimental/index.js`, i.imports[`${n}platform/node`] = `${n}platform/node/index.js`, i.imports[`${n}platform/browser`] = `${n}platform/browser/index.js`, s.cssModules && s.cssModules.size > 0) {
      performance.mark("code/willAddCssLoader"), globalThis._VSCODE_CSS_LOAD = function(l, m, y) {
        const d = document.createElement("link");
        d.rel = "stylesheet", d.href = l + "?hash=" + y, d.type = "text/css", d.media = "screen", d.id = m.replace(".css", ""), document.head.appendChild(d);
      };
      const c = s.cssModules;
      globalThis._VSCODE_CSS_IMPORT = function(l) {
        const m = c.get(l);
        m !== void 0 ? globalThis._VSCODE_CSS_LOAD(new URL(l, t).href, l, m) : console.error("[CSS_DEV] No cssModule found", l);
      };
      const u = `
				globalThis._VSCODE_CSS_IMPORT(new URLSearchParams(new URL(import.meta.url).hash.slice(1)).get('module'));
				export default {};
		`, f = new Blob([u], { type: "application/javascript" }), b = URL.createObjectURL(f);
      for (const [l, m] of s.cssModules) {
        const y = new URL(l, t).href;
        i.imports[y] = b + "#module=" + encodeURIComponent(l);
      }
      const v = window.trustedTypes?.createPolicy("vscode-bootstrapImportMap", { createScript(l) {
        return l;
      } }), h = JSON.stringify(i, void 0, 2), g = document.createElement("script");
      g.type = "importmap", g.setAttribute("nonce", "0c6a828f1297"), g.textContent = v?.createScript(h) ?? h, document.head.appendChild(g), performance.mark("code/didAddCssLoader");
    }
  }
  globalThis.MonacoBootstrapWindow = { load };
})(), (async function() {
  const s = window.MonacoBootstrapWindow, { result: t, configuration: o } = await s.load("vs/code/electron-sandbox/processExplorer/processExplorerMain", { configureDeveloperSettings: function() {
    return { forceEnableDeveloperKeybindings: true };
  } });
  t.startup(o);
})();
