"use strict";
exports.id = 570, exports.ids = [570], exports.modules = { 22438: (t, e, n) => {
  n.d(e, { E: () => s });
  var a = n(48161);
  function r(t2, e2) {
    const n2 = [[e2.canvasesDir, "<canvasesDir>"], [e2.sdkSourceDir, "<sdkSourceDir>"], [(0, a.homedir)(), "~"]];
    n2.sort((t3, e3) => e3[0].length - t3[0].length);
    let r2 = t2;
    for (const [t3, e3] of n2) 0 !== t3.length && r2.includes(t3) && (r2 = r2.split(t3).join(e3));
    return r2;
  }
  function s(t2, e2) {
    return { errorName: t2 instanceof Error && t2.name.length > 0 ? t2.name : "UnknownError", errorMessage: r(t2 instanceof Error ? t2.message : String(t2), e2) };
  }
}, 35669: (t, e, n) => {
  t.exports = n.p + "a22718674812ee697cf3.js";
}, 87305: (t, e, n) => {
  n.d(e, { CX: () => qt, WT: () => b, e4: () => Nt, TT: () => Ce, Fh: () => pe, FY: () => Ht, $p: () => At, Xi: () => le, sH: () => zt, wV: () => Lt, dw: () => Bt, $h: () => _e });
  var a = n(77598), r = n(51455), s = n(98995), i = n(76760);
  function o(t2) {
    const e2 = (function(t3) {
      return t3.includes("PillTone") || (function(t4, e3, n2) {
        return t4.includes(n2) && t4.includes(e3);
      })(t3, "tone", "PillProps") ? 'Pill.tone is ignored (pills always render neutral) and has no "danger" member. Use Stat, Callout, Chart, or Table rowTone for semantic color.' : t3.includes("CardVariant") ? 'Card.variant is only "default" | "borderless". There is no accent variant — use Callout for emphasis.' : t3.includes("TableProps") && (t3.includes("does not exist") || t3.includes("is not assignable") || t3.includes("rowHeaderColumn")) ? "Table has no rowHeaderColumn. Props are headers, rows, columnAlign, rowTone, framed, striped, stickyHeader, emptyMessage, and style." : t3.includes("CanvasHostTheme") && (t3.includes("'colors'") || t3.includes('"colors"')) ? "useHostTheme() has no colors group. Use theme.bg.editor, theme.fill.primary, theme.text.primary, theme.stroke.secondary, or theme.accent.primary." : (function(t4) {
        return !(!t4.includes("ChartSeries") && !t4.includes("ChartDataPoint")) && (t4.includes("data: string") || t4.includes("value: string") || t4.includes("string[]") || /Type ['"]string['"] is not assignable to type ['"]number['"]/.test(t4));
      })(t3) ? "Chart series data and ChartDataPoint.value must be numbers, not strings." : void 0;
    })(t2);
    return void 0 === e2 ? t2 : `${t2} ${e2}`;
  }
  const c = "node_modules", u = ".node_modules.staging-", l = ".node_modules.old-";
  const d = "tsconfig.json", h = { target: "ES2021", module: "ESNext", moduleResolution: "bundler", jsx: "react-jsx", strict: true, noEmit: true, skipLibCheck: true, lib: ["ESNext", "DOM"] }, p = JSON.stringify({ compilerOptions: h, include: ["*.canvas.tsx"] }, null, 2);
  JSON.stringify({ compilerOptions: { ...h, types: [] }, include: ["*.canvas.tsx"] }, null, 2);
  async function f(t2) {
    const e2 = await v(t2.sdkSourceDir);
    if (void 0 === e2) return;
    await (async function(t3) {
      await (0, r.mkdir)(t3, { recursive: true });
      if ((await (0, r.lstat)(t3)).isSymbolicLink()) throw new Error(`Refusing to bootstrap canvas SDK into symlinked directory: ${t3}`);
    })(t2.canvasesDir);
    const n2 = (0, i.join)(t2.canvasesDir, c), a2 = (0, i.join)(t2.canvasesDir, d), s2 = t2.tsconfigContent ?? p, o2 = await v(n2) === e2, h2 = await (async function(t3, e3) {
      try {
        return await (0, r.readFile)(t3, "utf-8") === e3;
      } catch {
        return false;
      }
    })(a2, s2);
    return o2 || await (async function(t3, e3, n3) {
      const a3 = (0, i.join)(e3, c), s3 = `${process.pid}.${++g}`, o3 = (0, i.join)(e3, `${u}${s3}`), d2 = (0, i.join)(e3, `${l}${s3}`);
      await (0, r.cp)(t3, o3, { recursive: true });
      try {
        let t4 = false;
        try {
          await (0, r.rename)(a3, d2), t4 = true;
        } catch (t5) {
          if ("ENOENT" !== t5.code) throw t5;
        }
        try {
          await (0, r.rename)(o3, a3);
        } catch (e4) {
          t4 && await (0, r.rename)(d2, a3).catch(y);
          for (let t5 = 0; t5 < 20; t5++) {
            if (await v(a3) === n3) return;
            await new Promise((t6) => setTimeout(t6, 5));
          }
          throw e4;
        }
        t4 && await (0, r.rm)(d2, { recursive: true, force: true }).catch(y);
      } finally {
        await (0, r.rm)(o3, { recursive: true, force: true }).catch(y);
      }
    })(t2.sdkSourceDir, t2.canvasesDir, e2), h2 || await (async function(t3, e3) {
      const n3 = `${t3}.tmp.${process.pid}.${++m}`;
      await (0, r.writeFile)(n3, e3, "utf-8"), await (0, r.rename)(n3, t3);
    })(a2, s2), { canvasesDir: t2.canvasesDir, tsconfigPath: a2 };
  }
  async function v(t2) {
    try {
      return (await (0, r.readFile)((0, i.join)(t2, "canvas-sdk-version"), "utf-8")).trim();
    } catch {
      return;
    }
  }
  let m = 0;
  let g = 0;
  function y() {
  }
  function w(t2) {
    return t2.replace(/\\/g, "/");
  }
  function b(t2) {
    return new S(t2);
  }
  class S {
    constructor(t2) {
      this.canvasesDir = (0, i.normalize)(t2.canvasesDir), this.canvasesDirPrefix = this.canvasesDir.endsWith(i.sep) ? this.canvasesDir : `${this.canvasesDir}${i.sep}`;
      const e2 = void 0 === t2.extraMatchRoot ? [] : "string" == typeof t2.extraMatchRoot ? [t2.extraMatchRoot] : t2.extraMatchRoot;
      this.extraMatchRootPrefixes = e2.map((t3) => {
        const e3 = (0, i.normalize)(t3);
        return e3.endsWith(i.sep) ? e3 : `${e3}${i.sep}`;
      }), this.getExtraMatchRoots = t2.getExtraMatchRoots, this.tsResolveAnchor = t2.tsResolveAnchor;
      const n2 = (function(t3) {
        const e3 = (0, i.join)(t3, "cursor"), n3 = (0, i.join)(t3, "@types", "react");
        return { cursorPackageJson: (0, i.join)(e3, "package.json"), cursorCanvasIndex: (0, i.join)(e3, "canvas", "index.d.ts"), reactRoot: n3, reactIndex: (0, i.join)(n3, "index.d.ts"), reactJsxRuntime: (0, i.join)(n3, "jsx-runtime.d.ts") };
      })((0, i.join)(this.canvasesDir, c));
      this.resolutionTable = /* @__PURE__ */ new Map([["cursor/canvas", n2.cursorCanvasIndex], ["react", n2.reactIndex], ["react/jsx-runtime", n2.reactJsxRuntime], ["react/jsx-dev-runtime", n2.reactJsxRuntime]]), this.bootstrapReady = f({ canvasesDir: this.canvasesDir, sdkSourceDir: t2.sdkSourceDir });
    }
    async getDiagnostics(t2) {
      return (await this.getDiagnosticsSnapshot(t2))?.diagnostics;
    }
    async getDiagnosticsSnapshot(t2) {
      const e2 = (0, i.normalize)(t2);
      if (!e2.endsWith(".canvas.tsx") || !this.matchesRoot(e2)) return;
      let n2;
      try {
        n2 = await this.bootstrapReady;
      } catch {
        return;
      }
      if (void 0 === n2) return;
      const s2 = this.loadTypeScript();
      if (!s2) return;
      const o2 = await this.getOrInitCompilerSetup(s2);
      if (!o2) return;
      let c2;
      try {
        c2 = await (0, r.readFile)(e2);
      } catch {
        return;
      }
      if (!this.matchesRoot(e2)) return;
      const u2 = c2.toString("utf8"), l2 = this.buildProgram(s2, o2, e2, u2), d2 = l2.getSourceFile(e2) ?? l2.getSourceFile(w(e2));
      if (!d2) return;
      return { diagnostics: [...l2.getSyntacticDiagnostics(d2), ...l2.getSemanticDiagnostics(d2)].map((t3) => this.mapDiagnostic(s2, t3, d2)), sourceSha256: (0, a.createHash)("sha256").update(c2).digest("hex") };
    }
    matchesRoot(t2) {
      if (t2.startsWith(this.canvasesDirPrefix)) return true;
      if (this.extraMatchRootPrefixes.some((e3) => t2.startsWith(e3))) return true;
      let e2;
      try {
        e2 = this.getExtraMatchRoots?.();
      } catch {
        return false;
      }
      if (void 0 === e2) return false;
      return ("string" == typeof e2 ? [e2] : e2).some((e3) => {
        const n2 = (0, i.normalize)(e3), a2 = n2.endsWith(i.sep) ? n2 : `${n2}${i.sep}`;
        return t2.startsWith(a2);
      });
    }
    loadTypeScript() {
      return this.tsModule || (this.tsModule = (function(t2) {
        try {
          return (0, s.createRequire)((0, i.join)(t2, "package.json"))("typescript");
        } catch {
        }
        try {
          if ("function" == typeof require) return require("typescript");
        } catch {
        }
      })(this.tsResolveAnchor)), this.tsModule;
    }
    getOrInitCompilerSetup(t2) {
      if (this.compilerSetup) return this.compilerSetup;
      const e2 = (async () => {
        const e3 = (0, i.join)(this.canvasesDir, d);
        let n2;
        try {
          n2 = await (0, r.readFile)(e3, "utf-8");
        } catch {
          return;
        }
        const a2 = t2.readConfigFile(e3, () => n2);
        if (a2.error) return;
        const s2 = t2.parseJsonConfigFileContent(a2.config, t2.sys, this.canvasesDir);
        return { options: s2.options, sdkSourceFileCache: /* @__PURE__ */ new Map(), moduleResolutionCache: t2.createModuleResolutionCache(this.canvasesDir, (t3) => t3, s2.options) };
      })();
      return this.compilerSetup = e2, e2.then((t3) => {
        void 0 === t3 && this.compilerSetup === e2 && (this.compilerSetup = void 0);
      }, () => {
        this.compilerSetup === e2 && (this.compilerSetup = void 0);
      }), e2;
    }
    buildProgram(t2, e2, n2, a2) {
      const r2 = t2.createCompilerHost(e2.options), s2 = r2.getSourceFile.bind(r2), i2 = e2.sdkSourceFileCache, o2 = e2.moduleResolutionCache, c2 = this.resolutionTable, u2 = w(n2);
      return r2.getSourceFile = (e3, r3, o3, c3) => {
        if (e3 === n2 || w(e3) === u2) return t2.createSourceFile(e3, a2, r3, true, t2.ScriptKind.TSX);
        if (i2.has(e3)) return i2.get(e3);
        const l2 = s2(e3, r3, o3, c3);
        return i2.set(e3, l2), l2;
      }, r2.resolveModuleNameLiterals = (e3, n3, a3, s3) => e3.map((e4) => {
        const i3 = c2.get(e4.text);
        return void 0 !== i3 ? { resolvedModule: { resolvedFileName: i3, extension: t2.Extension.Dts, isExternalLibraryImport: true } } : t2.resolveModuleName(e4.text, n3, s3, r2, o2, a3);
      }), t2.createProgram({ rootNames: [n2], options: e2.options, host: r2 });
    }
    mapDiagnostic(t2, e2, n2) {
      const a2 = t2.flattenDiagnosticMessageText(e2.messageText, "\n"), r2 = void 0 !== e2.code ? `TS${e2.code}` : void 0;
      let s2 = { line: 0, character: 0 }, i2 = { line: 0, character: 0 };
      if (void 0 !== e2.start) {
        const t3 = n2.getLineAndCharacterOfPosition(e2.start);
        s2 = { line: t3.line, character: t3.character };
        const a3 = e2.start + (e2.length ?? 0), r3 = n2.getLineAndCharacterOfPosition(a3);
        i2 = { line: r3.line, character: r3.character };
      }
      let c2 = 1;
      switch (e2.category) {
        case t2.DiagnosticCategory.Error:
          c2 = 1;
          break;
        case t2.DiagnosticCategory.Warning:
          c2 = 2;
          break;
        case t2.DiagnosticCategory.Message:
        case t2.DiagnosticCategory.Suggestion:
          c2 = 3;
      }
      return { range: { start: s2, end: i2 }, severity: c2, code: r2, message: o(a2) };
    }
  }
  var C = n(31421), _ = n(73024), x = n(37067), P = n(48161), k = n(38522);
  const D = String.fromCodePoint(39), T = (t2) => `${D}${t2}${D}`, E = T("none"), j = T("unsafe-inline");
  [["default-src", E], ["script-src", j, "blob:"], ["sandbox", "allow-scripts"], ["style-src", j], ["img-src", "data:", "blob:"], ["font-src", "data:"], ["connect-src", E], ["worker-src", E], ["child-src", E], ["frame-src", E], ["object-src", E], ["base-uri", E], ["form-action", E]].map((t2) => t2.join(" ")).join("; "), ["accelerometer", "camera", "geolocation", "gyroscope", "magnetometer", "microphone", "payment", "usb", "clipboard-read", "clipboard-write"].map((t2) => `${t2}=()`).join(", "), String.raw`\u003c`, String.raw`\u003e`, String.raw`\u0026`, String.raw`\u2028`, String.raw`\u2029`;
  const F = '-apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", system-ui, "Ubuntu", "Droid Sans", sans-serif';
  var W = n(37949), $ = n(33002), R = n(47670);
  function O(t2) {
    return "number" == typeof t2 && Number.isInteger(t2) && t2 > 0 ? t2 : void 0;
  }
  function M(t2) {
    if ("object" != typeof t2 || null === t2) return;
    const e2 = t2;
    switch (e2.type) {
      case "openAgent":
        return "string" == typeof e2.agentId && e2.agentId.length > 0 ? { type: "openAgent", agentId: e2.agentId } : void 0;
      case "newComposerChat": {
        if (void 0 === e2.userPrompt) return { type: "newComposerChat" };
        if ("string" != typeof e2.userPrompt) return;
        const t3 = e2.userPrompt.trim();
        return t3.length > 0 ? { type: "newComposerChat", userPrompt: t3 } : { type: "newComposerChat" };
      }
      case "openFile": {
        if ("string" != typeof e2.path) return;
        const t3 = e2.path.trim();
        if (0 === t3.length) return;
        const n2 = (function(t4) {
          if (void 0 === t4) return;
          if ("object" != typeof t4 || null === t4) return;
          const e3 = t4, n3 = O(e3.startLineNumber);
          if (void 0 === n3) return;
          const a2 = O(e3.startColumn), r2 = O(e3.endLineNumber), s2 = O(e3.endColumn);
          return void 0 !== e3.startColumn && void 0 === a2 || void 0 !== e3.endLineNumber && void 0 === r2 || void 0 !== e3.endColumn && void 0 === s2 ? void 0 : { startLineNumber: n3, ...void 0 !== a2 ? { startColumn: a2 } : {}, ...void 0 !== r2 ? { endLineNumber: r2 } : {}, ...void 0 !== s2 ? { endColumn: s2 } : {} };
        })(e2.selection);
        if (void 0 !== e2.selection && void 0 === n2) return;
        return { type: "openFile", path: t3, ...void 0 !== n2 ? { selection: n2 } : {} };
      }
      default:
        return;
    }
  }
  var N = n(76576);
  const I = "canvases", J = ".canvas.bundle.gz", H = 5e6, A = 1;
  function L(t2) {
    return { version: A, runtimeEsm: t2.runtimeEsm, userModule: t2.userModule };
  }
  function z(t2) {
    const e2 = t2.trimStart();
    if (!e2.startsWith("{")) return { kind: "legacy-esm", source: t2 };
    try {
      const t3 = JSON.parse(e2);
      if ((function(t4) {
        if (!t4 || "object" != typeof t4) return false;
        const e3 = t4;
        return e3.version === A && "string" == typeof e3.runtimeEsm && "string" == typeof e3.userModule;
      })(t3)) return { kind: "bundle-v1", bundle: t3 };
    } catch {
    }
    return { kind: "legacy-esm", source: t2 };
  }
  function B(t2) {
    return t2.toLowerCase().endsWith(J);
  }
  function U(t2, e2, n2 = H) {
    return (function(t3, e3) {
      const n3 = Buffer.byteLength(JSON.stringify(e3), "utf-8");
      return t3.length + n3 + 64;
    })(t2, e2) <= n2;
  }
  (0, n(57975).promisify)(k.gzip);
  const q = { level: 9 };
  function G(t2) {
    return Buffer.from(JSON.stringify(t2), "utf-8");
  }
  function V(t2) {
    return e2 = G(t2), (0, k.gzipSync)(e2, q);
    var e2;
  }
  const K = "--cursor-canvas-viewport-height";
  function X() {
    const t2 = "calc(100vh - 48px)", e2 = (function({ viewportHeight: t3, legacyPreviewViewportHeight: e3 }) {
      return `#root{${K}:${t3}}${void 0 === e3 ? "" : `#root:is([style*="min-height:0"],[style*="min-height: 0"]){${K}:${e3}}`}#root>:only-child:is([style^="height:100%;"],[style^="height: 100%;"],[style*=";height:100%;"],[style*="; height: 100%;"]){min-height:var(${K})!important}`;
    })({ viewportHeight: t2, legacyPreviewViewportHeight: "100vh" });
    return `html,body{min-height:100vh}body{padding:24px 32px}#root{min-height:${t2};width:100%;margin:0 auto;overflow-x:auto;position:relative;contain:paint}${e2}${(function({ inlinePadding: t3, extraRules: e3 = "" } = {}) {
      const n2 = "calc(100vh - 32px)";
      return `@media (max-width: 479.98px){body{padding:${void 0 === t3 ? "16px" : `16px ${t3}`}}#root{min-height:${n2};${K}:${n2}}${e3}}`;
    })()}:root{--cursor-canvas-focus-ring-width:1px;--cursor-canvas-focus-ring-offset:2px;--cursor-canvas-focus-ring-radius:4px}*:focus,*:focus-visible{outline:none}*:focus-visible{outline:var(--cursor-canvas-focus-ring-width) solid var(--cursor-canvas-focus-ring-color,currentColor);outline-offset:var(--cursor-canvas-focus-ring-offset)}:where(a[href],[role="link"]):focus-visible{border-radius:var(--cursor-canvas-focus-ring-radius)}`;
  }
  function Y(t2) {
    return t2.replace(/^\s*import\b[\s\S]*?;\s*$/gm, "");
  }
  const Z = (0, W.h)("canvas-server:http-server");
  let Q;
  async function tt() {
    return Q ??= await Promise.resolve().then(n.t.bind(n, 41503, 19)), Q;
  }
  const et = /spawn\s+\S+\s+(ENOENT|EACCES|EPERM|ENOEXEC|ENOTDIR)\b/;
  let nt, at = 0, rt = false;
  function st(t2, e2) {
    if (rt) return;
    rt = true;
    const n2 = (function() {
      const t3 = (function() {
        const t4 = process.env.PATH;
        if (!t4) return;
        const e4 = "win32" === process.platform ? ["node.exe", "node.cmd"] : ["node"];
        for (const n3 of t4.split(i.delimiter)) if (n3) for (const t5 of e4) {
          const e5 = i.join(n3, t5);
          try {
            if (_.existsSync(e5)) return e5;
          } catch {
          }
        }
        return;
      })();
      if (!t3) return "absent";
      const e3 = (function(t4) {
        try {
          const e4 = (0, C.execFileSync)(t4, ["--version"], { cwd: P.tmpdir(), encoding: "utf8", timeout: 2e3, stdio: ["ignore", "pipe", "ignore"] }).trim(), n3 = /^v?(\d+)\./.exec(e4);
          return n3 ? Number.parseInt(n3[1], 10) : void 0;
        } catch {
          return;
        }
      })(t3);
      return void 0 === e3 ? "unusable" : e3 >= 18 ? "satisfies" : "unusable";
    })();
    if ("satisfies" === n2) return;
    if (!t2) return;
    const a2 = i.dirname(t2), r2 = process.env.PATH ?? "";
    if ("absent" === n2) {
      if (r2.split(i.delimiter).includes(a2)) return;
      return process.env.PATH = r2 ? `${r2}${i.delimiter}${a2}` : a2, void Z.info(e2, "Appended bundled node to PATH for esbuild-wasm (no node found on PATH)");
    }
    const s2 = r2.split(i.delimiter).filter((t3) => t3 && t3 !== a2);
    process.env.PATH = [a2, ...s2].join(i.delimiter), Z.info(e2, "Prepended bundled node to PATH for esbuild-wasm (resolved node is too old or unusable from an arbitrary directory)", { requiredMajor: 18 });
  }
  const it = "canvas-runtime.esm.js", ot = `/runtime/${it}`, ct = 1048576, ut = 5e6, lt = 2e7;
  function dt(t2, e2, n2) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Canvas</title>
  <style>*{margin:0;padding:0;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:rgba(121,121,121,0.4) transparent}${X()}::-webkit-scrollbar{width:8px;height:8px;background:transparent}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(121,121,121,0.4);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:rgba(121,121,121,0.7)}::-webkit-scrollbar-corner{background:transparent}</style>
</head>
<body>
  <div id="root"></div>
  ${(function(t3, e3) {
      const n3 = e3 ? `?token=${e3}` : "";
      return `
<script>
(function() {
  var canvasId = ${JSON.stringify(t3)};
  var tokenParam = ${JSON.stringify(n3)};
  var isPreview = false;
  try {
    isPreview = new URLSearchParams(window.location.search).has('preview');
  } catch (_) {}
  var isReloading = false;
  var isDisposed = false;
  var ws = null;

  // Preview-mode iframes auto-mount in chat without a user gesture, so we
  // close the canvas-action API surface by not exposing canvasId / tokenParam
  // on window.__cursorCanvas. dispatchCanvasAction() in canvas-components
  // early-returns when canvasId is missing, neutering the SDK end-to-end.
  // The closure-local canvasId / tokenParam stay available to the runtime's
  // own WebSocket connection (read-only: only forwards reload events).
  window.__cursorCanvas = {
    canvasId: isPreview ? undefined : canvasId,
    tokenParam: isPreview ? '' : tokenParam,
    state: new Map(),
    data: new Map(),
    reportError: function(message) {
      if (isPreview) return;
      fetch('/canvas/' + canvasId + '/report-error' + tokenParam, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: String(message) })
      }).catch(function() {});
    }
  };

  function connectHostState() {
    if (isDisposed || ws) return;
    var loc = window.location;
    var proto = loc.protocol === 'https:' ? 'wss:' : 'ws:';
    ws = new WebSocket(proto + '//' + loc.host + '/canvas/' + canvasId + '/ws' + tokenParam);
    ws.onmessage = function(e) {
      try {
        var msg = JSON.parse(e.data);
        if (msg.type === 'reload') { triggerReload(); return; }
        if (msg.type === 'state') {
          window.__cursorCanvas.state.set(msg.channel, msg.payload);
          document.dispatchEvent(
            new CustomEvent('cursor-canvas-state-change', { detail: { channel: msg.channel } })
          );
          return;
        }
        // Preview iframes are read-only; canvas-data round-trips through a
        // missing canvasId, so drop rather than partially apply.
        if (isPreview) return;
        if (msg.type === 'canvas-data') {
          if (msg.value === undefined) {
            window.__cursorCanvas.data.delete(msg.key);
          } else {
            window.__cursorCanvas.data.set(msg.key, msg.value);
          }
          document.dispatchEvent(
            new CustomEvent('cursor-canvas-data-change', { detail: { key: msg.key } })
          );
        }
      } catch (_) {}
    };
    ws.onclose = function() {
      ws = null;
      if (!isDisposed) setTimeout(connectHostState, 1000);
    };
  }

  function disconnectHostState() {
    if (!ws) return;
    ws.close();
    ws = null;
  }

  function cleanup() {
    if (isDisposed) return;
    isDisposed = true;
    disconnectHostState();
    window.removeEventListener('beforeunload', cleanup);
    window.removeEventListener('pagehide', cleanup);
  }

  function triggerReload() {
    if (isDisposed || isReloading) return;
    isReloading = true;
    window.location.reload();
  }

  window.addEventListener('beforeunload', cleanup);
  window.addEventListener('pagehide', cleanup);
  connectHostState();
})();
<\/script>
`;
    })(t2, e2)}
  <script type="module">
    import { mountCanvas } from "${n2}?token=${e2}";
    mountCanvas("/canvas/${t2}/app.js?token=${e2}");
  <\/script>
</body>
</html>`;
  }
  function ht(t2) {
    return a.createHash("sha256").update(`canvas:${t2}`).digest("hex").slice(0, 12);
  }
  function pt(t2) {
    const e2 = i.dirname(t2), n2 = i.basename(t2, i.extname(t2));
    return i.join(e2, `${n2}.status.json`);
  }
  function ft(t2) {
    const e2 = i.dirname(t2), n2 = i.basename(t2, i.extname(t2));
    return i.join(e2, `${n2}.data.json`);
  }
  class vt extends Error {
    constructor() {
      super("Request body too large");
    }
  }
  class mt extends Error {
    constructor() {
      super(`Canvas bundle exceeds the ${ut}-byte compressed size limit.`);
    }
  }
  class gt extends Error {
    constructor() {
      super("Canvas bundle exceeds the 20000000-byte decompressed size limit.");
    }
  }
  function yt(t2) {
    let e2;
    try {
      e2 = JSON.parse(t2);
    } catch {
      throw new Error("Canvas bundle must contain a valid strict v1 JSON payload; legacy ESM is not supported.");
    }
    if (!(function(t3) {
      if ("object" != typeof t3 || null === t3 || Array.isArray(t3)) return false;
      const e3 = Object.keys(t3).sort();
      return 3 === e3.length && "runtimeEsm" === e3[0] && "userModule" === e3[1] && "version" === e3[2] && "version" in t3 && 1 === t3.version && "runtimeEsm" in t3 && "string" == typeof t3.runtimeEsm && "userModule" in t3 && "string" == typeof t3.userModule;
    })(e2)) throw new Error('Canvas bundle must have exactly { "version": 1, "runtimeEsm": string, "userModule": string }; legacy ESM is not supported.');
    return e2;
  }
  class wt {
    constructor(t2) {
      this._registrations = /* @__PURE__ */ new Map(), this._dataWriteTimers = /* @__PURE__ */ new Map(), this.logContext = t2.logContext ?? (0, $.q6)(), this._runtimeDir = t2.runtimeDir, this._nodeExecPath = t2.nodeExecPath;
    }
    onAction(t2) {
      this._actionCallback = t2;
    }
    onError(t2) {
      this._errorCallback = t2;
    }
    onErrorCleared(t2) {
      this._errorClearedCallback = t2;
    }
    _readBody(t2, e2) {
      return new Promise((n2, a2) => {
        let r2 = "", s2 = 0, i2 = false;
        t2.on("data", (t3) => {
          s2 += t3.length, s2 > e2 ? i2 = true : i2 || (r2 += t3.toString());
        }), t2.on("end", () => {
          i2 ? a2(new vt()) : n2(r2);
        }), t2.on("error", a2);
      });
    }
    get registeredCanvasCount() {
      return this._registrations.size;
    }
    get sessionToken() {
      return this._sessionToken;
    }
    async start() {
      if (this._server) return { port: this._port, sessionToken: this._sessionToken };
      st(this._nodeExecPath, this.logContext);
      const t2 = Date.now();
      this._sessionToken = a.randomBytes(32).toString("hex"), this._runtimeModule ??= await Dt(this._runtimeDir);
      const e2 = x.createServer((t3, e3) => {
        this._handleRequest(t3, e3);
      }), n2 = new R.WebSocketServer({ noServer: true });
      e2.on("upgrade", (t3, e3, a2) => {
        const r2 = new URL(t3.url ?? "/", "http://127.0.0.1"), s2 = r2.pathname;
        if (!this._isValidOrigin(t3.headers.origin)) return void e3.destroy();
        if (r2.searchParams.get("token") !== this._sessionToken) return void e3.destroy();
        const i2 = s2.match(/^\/canvas\/([a-f0-9]{12})\/ws$/);
        if (!i2) return void e3.destroy();
        const o2 = this._registrations.get(i2[1]);
        o2 ? n2.handleUpgrade(t3, e3, a2, (t4) => {
          o2.eventClients.add(t4);
          for (const [e4, n3] of o2.hostState) t4.send(`{"type":"state","channel":${JSON.stringify(e4)},"payload":${n3}}`);
          for (const [e4, n3] of Object.entries(o2.canvasData)) t4.send(JSON.stringify({ type: "canvas-data", key: e4, value: n3 }));
          t4.on("close", () => {
            o2.eventClients.delete(t4);
          }), t4.on("error", () => {
            o2.eventClients.delete(t4);
          });
        }) : e3.destroy();
      });
      try {
        this._port = await this._listen(e2);
      } catch (t3) {
        throw e2.close(), t3;
      }
      return this._server = e2, this._wss = n2, Z.info(this.logContext, "Canvas server started", { port: this._port, startDurationMs: Date.now() - t2 }), { port: this._port, sessionToken: this._sessionToken };
    }
    async stop() {
      await this._flushPendingDataWrites();
      for (const t2 of this._registrations.values()) this._stopFileWatcher(t2), this._stopDataFileWatcher(t2), this._closeEventClients(t2), "source" === t2.kind && this._deleteStatusFile(t2);
      this._registrations.clear(), this._wss?.close(), this._wss = void 0, this._server?.close(), this._server = void 0, this._port = void 0, this._sessionToken = void 0, Z.info(this.logContext, "Canvas server stopped");
    }
    _validateId(t2) {
      return /^[a-f0-9]{12}$/.test(t2);
    }
    getUrl(t2, e2) {
      if (!this._validateId(t2)) return;
      if (!this._port || !this._sessionToken) return;
      if (!this._registrations.has(t2)) return;
      const n2 = `http://localhost:${this._port}/canvas/${t2}/`, a2 = new URL(n2);
      return a2.searchParams.set("token", this._sessionToken), e2 && a2.searchParams.set("preview", "1"), a2.toString();
    }
    async _registerCanvas(t2) {
      if (void 0 === this._port) throw new Error("CanvasServer.start() must be called before registerCanvas()");
      const e2 = (function(t3) {
        return "bundle" === t3.kind ? t3 : { kind: "source", path: t3.path };
      })(t2);
      if ("bundle" === e2.kind && (!B(n2 = i.basename(e2.path)) && n2 !== N.Rj)) throw new Error(`Canvas bundle path must end with ".canvas.bundle.gz" or be a user-store "canvas.bundle.gz": ${e2.path}`);
      var n2;
      const a2 = ht(e2.path);
      if (!this._validateId(a2)) throw new Error(`Invalid canvas ID: ${a2}`);
      const r2 = this._registrations.get(a2);
      if (r2 && (this._stopFileWatcher(r2), this._stopDataFileWatcher(r2), this._closeEventClients(r2)), "bundle" === e2.kind) {
        const t3 = this._dataWriteTimers.get(a2);
        void 0 !== t3 && (clearTimeout(t3), this._dataWriteTimers.delete(a2));
      }
      const s2 = { kind: e2.kind, canvasId: a2, path: e2.path, eventClients: /* @__PURE__ */ new Set(), hostState: /* @__PURE__ */ new Map(), canvasData: "source" === e2.kind ? await this._readDataFile(e2.path) : {}, pendingBuild: false, notifyClientsOnBuild: false };
      return this._startFileWatcher(s2), "source" === s2.kind && this._startDataFileWatcher(s2), this._registrations.set(a2, s2), a2;
    }
    async registerCanvas(t2) {
      return { canvasId: await this._registerCanvas(t2), path: t2.path };
    }
    getRegisteredCanvasPath(t2) {
      if (this._validateId(t2)) return this._registrations.get(t2)?.path;
    }
    async getShareArtifact(t2) {
      const e2 = ht(t2.path), n2 = this._registrations.get(e2);
      if (!n2) return { appJs: "", dataJson: {}, status: { status: "canvas-missing" } };
      const a2 = await this._ensureBuildState(n2), r2 = St(a2);
      if ("rendered" !== r2.status) return { appJs: "", dataJson: {}, status: r2 };
      const s2 = { ...n2.canvasData };
      let i2 = a2.runtimeModule;
      void 0 === i2 && (this._runtimeModule ??= await Dt(this._runtimeDir), i2 = this._runtimeModule);
      const o2 = V(L({ runtimeEsm: i2, userModule: a2.appModule }));
      return U(o2, s2) ? { appJs: o2.toString("base64"), dataJson: s2, status: r2 } : { appJs: "", dataJson: {}, status: { status: "content-too-large" } };
    }
    pushState(t2) {
      if (!this._validateId(t2.canvasId)) return false;
      const e2 = this._registrations.get(t2.canvasId);
      return !!e2 && (e2.hostState.set(t2.channel, t2.jsonPayload), this._sendStateEvent(e2, t2.channel, t2.jsonPayload), true);
    }
    pushStateAll(t2) {
      for (const e2 of this._registrations.values()) e2.hostState.set(t2.channel, t2.jsonPayload), this._sendStateEvent(e2, t2.channel, t2.jsonPayload);
    }
    _sendStateEvent(t2, e2, n2) {
      const a2 = `{"type":"state","channel":${JSON.stringify(e2)},"payload":${n2}}`;
      for (const e3 of t2.eventClients) try {
        e3.readyState === R.WebSocket.OPEN && e3.send(a2);
      } catch {
        t2.eventClients.delete(e3);
      }
    }
    _sendCanvasDataEvent(t2, e2, n2) {
      const a2 = JSON.stringify({ type: "canvas-data", key: e2, value: n2 });
      for (const e3 of t2.eventClients) try {
        e3.readyState === R.WebSocket.OPEN && e3.send(a2);
      } catch {
        t2.eventClients.delete(e3);
      }
    }
    async destroyCanvas(t2) {
      if (!this._validateId(t2.canvasId)) return;
      const e2 = this._registrations.get(t2.canvasId);
      e2 && ("source" === e2.kind && await this._flushDataWriteForCanvas(t2.canvasId, e2), this._registrations.delete(t2.canvasId), this._stopFileWatcher(e2), this._stopDataFileWatcher(e2), this._closeEventClients(e2), "source" === e2.kind && this._deleteStatusFile(e2));
    }
    _startFileWatcher(t2) {
      const e2 = t2.fileWatcherSnapshot;
      this._stopFileWatcher(t2);
      try {
        const n2 = this._captureFileWatcherSnapshot(t2.path);
        t2.fileWatcherSnapshot = n2;
        const a2 = _.watch(t2.path, { persistent: false }, (e3) => {
          this._registrations.get(t2.canvasId) === t2 && (t2.fileWatcherSnapshot = this._captureFileWatcherSnapshot(t2.path), this._requestBuild(t2, { notifyClients: true }), "rename" === e3 && (this._startParentDirectoryFileWatcher(t2), this._scheduleFileWatcherReattach(t2)));
        });
        t2.fileWatcher = a2;
        const r2 = this._captureFileWatcherSnapshot(t2.path);
        t2.fileWatcherSnapshot = r2, (n2 !== r2 || void 0 !== e2 && e2 !== r2) && this._registrations.get(t2.canvasId) === t2 && this._requestBuild(t2, { notifyClients: true }), a2.on("error", () => {
          t2.fileWatcher === a2 && this._startParentDirectoryFileWatcher(t2);
        });
      } catch {
        this._startParentDirectoryFileWatcher(t2);
      }
    }
    _startParentDirectoryFileWatcher(t2) {
      const e2 = t2.fileWatcherSnapshot;
      this._stopFileWatcher(t2);
      const n2 = i.basename(t2.path);
      try {
        const a2 = this._captureFileWatcherSnapshot(t2.path);
        t2.fileWatcherSnapshot = a2;
        const r2 = _.watch(i.dirname(t2.path), { persistent: false }, (e3, a3) => {
          if (this._registrations.get(t2.canvasId) === t2) {
            if (null !== a3) {
              if (a3.toString() !== n2) return;
              t2.fileWatcherSnapshot = this._captureFileWatcherSnapshot(t2.path);
            } else {
              const e4 = this._captureFileWatcherSnapshot(t2.path);
              if (e4 === t2.fileWatcherSnapshot) return;
              t2.fileWatcherSnapshot = e4;
            }
            this._requestBuild(t2, { notifyClients: true }), this._scheduleFileWatcherReattach(t2);
          }
        });
        t2.fileWatcher = r2;
        const s2 = this._captureFileWatcherSnapshot(t2.path);
        t2.fileWatcherSnapshot = s2, (a2 !== s2 || void 0 !== e2 && e2 !== s2) && this._registrations.get(t2.canvasId) === t2 && this._requestBuild(t2, { notifyClients: true }), r2.on("error", () => {
          t2.fileWatcher === r2 && this._stopFileWatcher(t2);
        });
      } catch {
      }
    }
    _captureFileWatcherSnapshot(t2) {
      try {
        const e2 = _.statSync(t2, { bigint: true });
        return [e2.dev, e2.ino, e2.size, e2.mtimeNs].join(":");
      } catch {
        return "missing";
      }
    }
    _scheduleFileWatcherReattach(t2) {
      void 0 !== t2.fileWatcherReattachTimer && clearTimeout(t2.fileWatcherReattachTimer), t2.fileWatcherReattachTimer = setTimeout(() => {
        t2.fileWatcherReattachTimer = void 0, this._registrations.get(t2.canvasId) === t2 && this._startFileWatcher(t2);
      }, 100);
    }
    _stopFileWatcher(t2) {
      void 0 !== t2.fileWatcherReattachTimer && (clearTimeout(t2.fileWatcherReattachTimer), t2.fileWatcherReattachTimer = void 0), t2.fileWatcher && (t2.fileWatcher.close(), t2.fileWatcher = void 0);
    }
    _startDataFileWatcher(t2) {
      this._stopDataFileWatcher(t2);
      const e2 = ft(t2.path);
      try {
        t2.dataFileWatcher = _.watch(e2, { persistent: false }, (e3) => {
          this._dataWriteTimers.has(t2.canvasId) || this._reloadDataFile(t2), "rename" === e3 && setTimeout(() => {
            this._registrations.get(t2.canvasId) === t2 && this._startDataFileWatcher(t2);
          }, 100);
        }), t2.dataFileWatcher.on("error", () => {
          this._stopDataFileWatcher(t2);
        });
      } catch {
      }
    }
    _stopDataFileWatcher(t2) {
      t2.dataFileWatcher && (t2.dataFileWatcher.close(), t2.dataFileWatcher = void 0);
    }
    async _reloadDataFile(t2) {
      const e2 = await this._readDataFile(t2.path);
      if (JSON.stringify(t2.canvasData) === JSON.stringify(e2)) return;
      const n2 = t2.canvasData;
      t2.canvasData = e2;
      const a2 = /* @__PURE__ */ new Set([...Object.keys(n2), ...Object.keys(e2)]);
      for (const r2 of a2) JSON.stringify(n2[r2]) !== JSON.stringify(e2[r2]) && this._sendCanvasDataEvent(t2, r2, e2[r2]);
    }
    _notifyReload(t2) {
      for (const e2 of t2.eventClients) try {
        e2.readyState === R.WebSocket.OPEN && e2.send('{"type":"reload"}');
      } catch {
        t2.eventClients.delete(e2);
      }
    }
    _closeEventClients(t2) {
      for (const e2 of t2.eventClients) try {
        e2.close();
      } catch {
      }
      t2.eventClients.clear();
    }
    async _requestBuild(t2, e2) {
      return t2.pendingBuild = true, t2.notifyClientsOnBuild = t2.notifyClientsOnBuild || e2.notifyClients, t2.buildPromise || (t2.buildPromise = (async () => {
        for (; t2.pendingBuild; ) {
          const e3 = t2.notifyClientsOnBuild;
          t2.pendingBuild = false, t2.notifyClientsOnBuild = false;
          const n2 = t2.buildState?.status, a2 = Date.now();
          t2.buildState = await this._buildCanvas(t2);
          const r2 = Date.now() - a2;
          this._logBuildOutcome(t2.path, n2, t2.buildState, r2), "source" === t2.kind && this._writeStatusFile(t2, St(t2.buildState)), "compile-error" === t2.buildState.status ? this._errorCallback?.({ canvasId: t2.canvasId, canvasPath: t2.path, error: t2.buildState.diagnosticsText ?? "Unknown compile error", errorKind: "compile-error" }) : "canvas-missing" === t2.buildState.status ? this._errorCallback?.({ canvasId: t2.canvasId, canvasPath: t2.path, error: "", errorKind: "canvas-missing" }) : "ready" === t2.buildState.status && this._errorClearedCallback?.(t2.canvasId, t2.path), e3 && this._notifyReload(t2);
        }
      })().finally(() => {
        t2.buildPromise = void 0, t2.pendingBuild && this._requestBuild(t2, { notifyClients: false });
      })), t2.buildPromise;
    }
    async _ensureBuildState(t2) {
      return t2.buildState || t2.buildPromise ? t2.buildPromise && await t2.buildPromise : await this._requestBuild(t2, { notifyClients: false }), t2.buildState ?? Ct("Canvas build did not produce any output.");
    }
    _serve404(t2, e2) {
      const n2 = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Canvas not found</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:${F};background:#1e1e1e;color:#ccc;display:flex;align-items:center;justify-content:center;min-height:100vh}
.c{text-align:center;padding:40px}
h1{font-size:18px;color:#888;margin-bottom:8px}
p{font-size:13px;color:#666}
code{background:#2a2a2a;padding:2px 6px;border-radius:4px;font-size:12px}
</style></head><body><div class="c">
<h1>Canvas not found</h1>
<p>${e2 ? `<code>${e2}</code> may have been deleted or expired.` : "Invalid canvas URL."}</p>
</div></body></html>`;
      t2.writeHead(404, { "Content-Type": "text/html; charset=utf-8" }), t2.end(n2);
    }
    _isValidOrigin(t2) {
      if (!t2) return true;
      try {
        const e2 = new URL(t2).hostname;
        return "localhost" === e2 || "127.0.0.1" === e2;
      } catch {
        return false;
      }
    }
    _rejectForbidden(t2) {
      t2.writeHead(403, { "Content-Type": "application/json" }), t2.end('{"error":"forbidden"}');
    }
    _rejectReadOnly(t2) {
      t2.writeHead(403, { "Content-Type": "application/json" }), t2.end('{"error":"canvas bundle is read only"}');
    }
    async _handleRequest(t2, e2) {
      const n2 = new URL(t2.url ?? "/", "http://127.0.0.1"), a2 = n2.pathname;
      if (!this._isValidOrigin(t2.headers.origin)) return void this._rejectForbidden(e2);
      if (n2.searchParams.get("token") !== this._sessionToken) return void this._rejectForbidden(e2);
      if (a2 === ot) return void this._serveRuntimeModule(e2);
      const r2 = a2.match(/^\/canvas\/([a-z0-9]+)\/runtime\.js$/);
      if (r2) return void await this._serveBundleRuntimeModule(e2, r2[1]);
      if (/^\/canvas\/([a-z0-9]+)\/(data|version)\.json$/.test(a2)) return e2.writeHead(404, { "Content-Type": "application/json" }), void e2.end('{"error":"not found"}');
      const s2 = a2.match(/^\/canvas\/([a-z0-9]+)\/state$/);
      if (s2) return "GET" === t2.method ? void this._handleStateGet(e2, s2[1]) : "POST" === t2.method ? void await this._handleStatePost(e2, s2[1], t2) : (e2.writeHead(405, { "Content-Type": "application/json" }), void e2.end('{"error":"method not allowed"}'));
      const i2 = a2.match(/^\/canvas\/([a-z0-9]+)\/report-error$/);
      if (i2 && "POST" === t2.method) return void await this._handleErrorReport(e2, i2[1], t2);
      const o2 = a2.match(/^\/canvas\/([a-z0-9]+)\/action$/);
      if (o2 && "POST" === t2.method) return void await this._handleAction(e2, o2[1], t2);
      const c2 = a2.match(/^\/canvas\/([a-z0-9]+)\/app\.js$/);
      if (c2) return void await this._serveCanvasApp(e2, c2[1]);
      const u2 = a2.match(/^\/canvas\/([a-z0-9]+)\/?$/);
      if (!u2) return void this._serve404(e2);
      const l2 = u2[1], d2 = this._registrations.get(l2);
      if (!d2) return void this._serve404(e2, l2);
      const h2 = ["default-src 'self'", "script-src 'self' 'unsafe-inline'", "style-src 'self' 'unsafe-inline'", "font-src 'self'", "img-src 'self' data: blob:", "connect-src 'self'"].join("; ");
      e2.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Content-Security-Policy": h2, "Cache-Control": "no-store" });
      const p2 = "bundle" === d2.kind ? `/canvas/${l2}/runtime.js` : ot;
      e2.end(dt(l2, this._sessionToken, p2));
    }
    _serveRuntimeModule(t2) {
      if (!this._runtimeModule) return t2.writeHead(503, { "Content-Type": "application/json" }), void t2.end('{"error":"server not started"}');
      t2.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8", "Cache-Control": "public, max-age=31536000, immutable" }), t2.end(this._runtimeModule);
    }
    async _serveBundleRuntimeModule(t2, e2) {
      const n2 = this._registrations.get(e2);
      if (!n2 || "bundle" !== n2.kind) return t2.writeHead(404, { "Content-Type": "application/json" }), void t2.end('{"error":"not found"}');
      const a2 = await this._ensureBuildState(n2);
      if ("ready" !== a2.status || void 0 === a2.runtimeModule) return t2.writeHead(422, { "Content-Type": "application/json" }), void t2.end(JSON.stringify({ error: a2.diagnosticsText ?? "Canvas bundle is not available." }));
      t2.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8", "Cache-Control": "no-store" }), t2.end(a2.runtimeModule);
    }
    async _handleErrorReport(t2, e2, n2) {
      const a2 = this._registrations.get(e2);
      if (!a2) return t2.writeHead(404, { "Content-Type": "application/json" }), void t2.end('{"error":"not found"}');
      let r2;
      try {
        r2 = await this._readBody(n2, ct);
      } catch (e3) {
        if (e3 instanceof vt) return t2.writeHead(413, { "Content-Type": "application/json" }), void t2.end('{"error":"request body too large"}');
        throw e3;
      }
      let s2 = "Unknown runtime error";
      try {
        const t3 = JSON.parse(r2);
        null != t3.message && (s2 = String(t3.message));
      } catch {
        const t3 = r2.trim();
        t3 && (s2 = t3.slice(0, 500));
      }
      "source" === a2.kind && this._writeStatusFile(a2, { status: "runtime-error", error: s2 }), this._errorCallback?.({ canvasId: e2, canvasPath: a2.path, error: s2, errorKind: "runtime-error" }), Z.warn(this.logContext, "Canvas runtime error reported", { canvasId: e2, path: a2.path, errorSummary: s2.split("\n")[0]?.slice(0, 200) }), t2.writeHead(200, { "Content-Type": "application/json" }), t2.end('{"ok":true}');
    }
    async _handleAction(t2, e2, n2) {
      const a2 = this._registrations.get(e2);
      if (!a2) return t2.writeHead(404, { "Content-Type": "application/json" }), void t2.end('{"error":"not found"}');
      if ("bundle" === a2.kind) return void this._rejectReadOnly(t2);
      let r2, s2;
      try {
        r2 = await this._readBody(n2, ct);
      } catch (e3) {
        if (e3 instanceof vt) return t2.writeHead(413, { "Content-Type": "application/json" }), void t2.end('{"error":"request body too large"}');
        throw e3;
      }
      try {
        s2 = JSON.parse(r2);
      } catch {
        return t2.writeHead(400, { "Content-Type": "application/json" }), void t2.end('{"error":"invalid JSON body"}');
      }
      const i2 = M(s2);
      if (!i2) return t2.writeHead(400, { "Content-Type": "application/json" }), void t2.end('{"error":"invalid action"}');
      if (this._actionCallback) try {
        this._actionCallback(e2, i2);
      } catch (t3) {
        Z.warn(this.logContext, "Canvas action callback error", { canvasId: e2, actionType: i2.type, error: t3 instanceof Error ? t3.message : String(t3) });
      }
      t2.writeHead(200, { "Content-Type": "application/json" }), t2.end('{"ok":true}');
    }
    _handleStateGet(t2, e2) {
      const n2 = this._registrations.get(e2);
      if (!n2) return t2.writeHead(404, { "Content-Type": "application/json" }), void t2.end('{"error":"not found"}');
      t2.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "no-store" }), t2.end(JSON.stringify(n2.canvasData));
    }
    async _handleStatePost(t2, e2, n2) {
      const a2 = this._registrations.get(e2);
      if (!a2) return t2.writeHead(404, { "Content-Type": "application/json" }), void t2.end('{"error":"not found"}');
      if ("bundle" === a2.kind) return void this._rejectReadOnly(t2);
      let r2, s2;
      try {
        r2 = await this._readBody(n2, ct);
      } catch (e3) {
        if (e3 instanceof vt) return t2.writeHead(413, { "Content-Type": "application/json" }), void t2.end('{"error":"request body too large"}');
        throw e3;
      }
      try {
        s2 = JSON.parse(r2);
      } catch {
        return t2.writeHead(400, { "Content-Type": "application/json" }), void t2.end('{"error":"invalid JSON body"}');
      }
      if ("string" != typeof s2.key) return t2.writeHead(400, { "Content-Type": "application/json" }), void t2.end('{"error":"key must be a string"}');
      const i2 = s2.key, o2 = s2.value;
      if (void 0 === o2) delete a2.canvasData[i2];
      else {
        const e3 = a2.canvasData[i2];
        a2.canvasData[i2] = o2;
        const n3 = JSON.stringify(a2.canvasData);
        if (Buffer.byteLength(n3, "utf-8") > 1048576) return a2.canvasData[i2] = e3, void 0 === e3 && delete a2.canvasData[i2], t2.writeHead(413, { "Content-Type": "application/json" }), void t2.end('{"error":"canvas state size limit exceeded"}');
      }
      this._scheduleDataFileWrite(a2.canvasId, a2.path, a2.canvasData), this._sendCanvasDataEvent(a2, i2, o2), t2.writeHead(200, { "Content-Type": "application/json" }), t2.end('{"ok":true}');
    }
    async _serveCanvasApp(t2, e2) {
      const n2 = this._registrations.get(e2);
      if (!n2) return t2.writeHead(404, { "Content-Type": "application/json" }), void t2.end('{"error":"not found"}');
      const a2 = await this._ensureBuildState(n2);
      t2.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8", "Cache-Control": "no-store" }), t2.end(a2.appModule);
    }
    _listen(t2) {
      return new Promise((e2, n2) => {
        t2.listen(0, "127.0.0.1", () => {
          const a2 = t2.address();
          a2 && "object" == typeof a2 ? e2(a2.port) : n2(new Error("Failed to bind canvas server"));
        }), t2.on("error", n2);
      });
    }
    async _buildCanvas(t2) {
      switch (t2.kind) {
        case "source":
          return this._buildCanvasSource(t2.path);
        case "bundle":
          return this._buildCanvasBundle(t2.path);
        default:
          return t2.kind;
      }
    }
    async _buildCanvasSource(t2) {
      try {
        const e2 = await _.promises.readFile(t2, "utf-8"), n2 = await this._transformCanvasSource(e2, t2);
        if (!n2.code) return Ct("Canvas build completed without producing output.");
        return { appModule: Y(n2.code), status: "ready" };
      } catch (t3) {
        if (xt(t3)) return { appModule: "export default function CanvasMissing() { return null; }\n", status: "canvas-missing" };
        return Ct(await Pt(t3));
      }
    }
    async _buildCanvasBundle(t2) {
      try {
        const e2 = await (async function(t3, e3) {
          const n3 = "number" == typeof _.constants.O_NOFOLLOW ? _.constants.O_NOFOLLOW : 0, a3 = await _.promises.open(t3, _.constants.O_RDONLY | n3), r2 = [];
          let s2 = 0;
          try {
            if (!(await a3.stat()).isFile()) throw new Error("Canvas bundle must be a regular file.");
            for (; ; ) {
              const t4 = Buffer.allocUnsafe(Math.min(65536, e3 + 1 - s2)), { bytesRead: n4 } = await a3.read(t4, 0, t4.length, null);
              if (0 === n4) return Buffer.concat(r2, s2);
              if (s2 += n4, s2 > e3) throw new mt();
              r2.push(t4.subarray(0, n4));
            }
          } finally {
            await a3.close();
          }
        })(t2, ut), n2 = await (function(t3, e3) {
          return new Promise((n3, a3) => {
            const r2 = k.createGunzip(), s2 = [];
            let i2 = 0, o2 = false;
            r2.on("data", (t4) => {
              if (!o2) {
                if (i2 += t4.length, i2 > e3) return o2 = true, s2.length = 0, void r2.destroy(new gt());
                s2.push(t4);
              }
            }), r2.once("error", a3), r2.once("end", () => {
              n3(Buffer.concat(s2, i2));
            }), r2.end(t3);
          });
        })(e2, lt), a2 = yt(n2.toString("utf-8"));
        return { appModule: a2.userModule, runtimeModule: a2.runtimeEsm, status: "ready" };
      } catch (t3) {
        if (xt(t3)) return { appModule: "export default function CanvasMissing() { return null; }\n", status: "canvas-missing" };
        return Ct(await Pt(t3));
      }
    }
    async _transformCanvasSource(t2, e2) {
      const n2 = at;
      try {
        return await this._runCanvasTransform(t2, e2);
      } catch (a2) {
        const r2 = (function(t3) {
          const e3 = t3 instanceof Error ? t3.message : String(t3);
          if (et.test(e3)) return "nonretryable-startup";
          return e3.includes("The service is no longer running") || "The service was stopped" === e3 || e3.includes("write EPIPE") || e3.includes("ECONNRESET") ? "retryable-disconnect" : void 0;
        })(a2);
        if ("retryable-disconnect" !== r2) throw a2;
        const s2 = await (async function(t3) {
          if (t3 !== at) return "restart-already-complete";
          if (nt) return await nt, "reused-inflight-restart";
          let e3 = false;
          return nt = (async () => {
            if (t3 !== at) return;
            const n3 = await tt();
            await n3.stop(), at += 1, e3 = true;
          })().finally(() => {
            nt = void 0;
          }), await nt, e3 ? "performed-restart" : "restart-already-complete";
        })(n2);
        "performed-restart" === s2 && Z.warn(this.logContext, "Canvas build service disconnected; restarting esbuild and retrying", { path: e2, error: a2 instanceof Error ? a2.message : String(a2) });
        try {
          const n3 = await this._runCanvasTransform(t2, e2);
          return "performed-restart" === s2 && Z.info(this.logContext, "Canvas build recovered after restarting esbuild", { path: e2 }), n3;
        } catch (t3) {
          throw Z.warn(this.logContext, "Canvas build retry failed after recovery", { path: e2, recoveryResult: s2, error: t3 instanceof Error ? t3.message : String(t3) }), t3;
        }
      }
    }
    async _runCanvasTransform(t2, e2) {
      return (await tt()).transform(t2, { loader: bt(e2), jsx: "transform", jsxFactory: "React.createElement", jsxFragment: "React.Fragment", format: "esm", target: "es2022", sourcefile: i.basename(e2), logLevel: "silent" });
    }
    _logBuildOutcome(t2, e2, n2, a2) {
      "compile-error" !== n2.status ? "canvas-missing" !== n2.status ? "compile-error" !== e2 && "canvas-missing" !== e2 || Z.info(this.logContext, "Canvas build recovered", { path: t2, buildDurationMs: a2 }) : Z.info(this.logContext, "Canvas source file missing", { path: t2, buildDurationMs: a2 }) : Z.warn(this.logContext, "Canvas build failed", { path: t2, diagnosticsSummary: kt(n2.diagnosticsText), buildDurationMs: a2 });
    }
    _writeStatusFile(t2, e2) {
      const n2 = pt(t2.path);
      try {
        const a2 = JSON.stringify(e2);
        if (t2.lastStatusJson === a2 && _.existsSync(n2)) return;
        _.writeFileSync(n2, a2, "utf-8"), t2.lastStatusJson = a2;
      } catch {
        Z.warn(this.logContext, "Failed to write canvas status file", { path: n2 });
      }
    }
    _deleteStatusFile(t2) {
      t2.lastStatusJson = void 0;
      const e2 = pt(t2.path);
      try {
        _.unlinkSync(e2);
      } catch {
      }
    }
    async _readDataFile(t2) {
      const e2 = ft(t2);
      try {
        const t3 = await _.promises.readFile(e2, "utf-8"), n2 = JSON.parse(t3);
        if (n2 && "object" == typeof n2 && !Array.isArray(n2)) return n2;
      } catch {
      }
      return {};
    }
    _scheduleDataFileWrite(t2, e2, n2) {
      const a2 = this._dataWriteTimers.get(t2);
      void 0 !== a2 && clearTimeout(a2);
      const r2 = JSON.stringify(n2, null, 2);
      this._dataWriteTimers.set(t2, setTimeout(() => {
        this._dataWriteTimers.delete(t2);
        const n3 = ft(e2);
        _.promises.writeFile(n3, r2, "utf-8").catch(() => {
          Z.warn(this.logContext, "Failed to write canvas data file", { path: n3 });
        });
      }, 300));
    }
    async _flushDataWriteForCanvas(t2, e2) {
      const n2 = this._dataWriteTimers.get(t2);
      if (void 0 === n2) return;
      clearTimeout(n2), this._dataWriteTimers.delete(t2);
      const a2 = ft(e2.path);
      try {
        await _.promises.writeFile(a2, JSON.stringify(e2.canvasData, null, 2), "utf-8");
      } catch {
        Z.warn(this.logContext, "Failed to flush canvas data file", { path: a2 });
      }
    }
    async _flushPendingDataWrites() {
      const t2 = [];
      for (const [e2, n2] of this._dataWriteTimers) {
        clearTimeout(n2);
        const a2 = this._registrations.get(e2);
        if (!a2 || "source" !== a2.kind) continue;
        const r2 = ft(a2.path);
        t2.push(_.promises.writeFile(r2, JSON.stringify(a2.canvasData, null, 2), "utf-8").catch(() => {
          Z.warn(this.logContext, "Failed to flush canvas data file", { path: r2 });
        }));
      }
      this._dataWriteTimers.clear(), await Promise.all(t2);
    }
  }
  function bt(t2) {
    switch (i.extname(t2).toLowerCase()) {
      case ".tsx":
      default:
        return "tsx";
      case ".ts":
        return "ts";
      case ".jsx":
        return "jsx";
      case ".js":
        return "js";
    }
  }
  function St(t2) {
    switch (t2.status) {
      case "compile-error":
        return { status: "compile-error", diagnostics: t2.diagnosticsText ?? "" };
      case "canvas-missing":
        return { status: "canvas-missing" };
      case "ready":
        return { status: "rendered" };
      default:
        return t2.status;
    }
  }
  function Ct(t2) {
    return { appModule: _t(t2), status: "compile-error", diagnosticsText: t2 };
  }
  function _t(t2) {
    return `
var diagnostics = ${JSON.stringify(t2)};

export default function CanvasCompileError() {
  return React.createElement("div", {
    style: {
      minHeight: "100vh",
      padding: "24px 32px",
      boxSizing: "border-box",
      background: ${JSON.stringify("#181818")},
      color: ${JSON.stringify("#E4E4E4EB")},
      fontFamily: ${JSON.stringify(F)},
    },
  },
    React.createElement("h1", {
      style: { margin: "0 0 12px 0", fontSize: "20px", fontWeight: "700" },
    }, "Canvas Compile Error"),
    React.createElement("p", {
      style: {
        margin: "0 0 16px 0",
        color: ${JSON.stringify("#E4E4E48D")},
        lineHeight: "1.5",
      },
    }, "Cursor could not compile this canvas. Fix the errors below and save again."),
    React.createElement("pre", {
      style: {
        margin: "0",
        padding: "16px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowX: "auto",
        borderRadius: "12px",
        border: "1px solid #E4E4E426",
        background: ${JSON.stringify("#1e1e1e")},
        color: ${JSON.stringify("#f5c2c7")},
        fontFamily: ${JSON.stringify('ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace')},
        fontSize: "13px",
        lineHeight: "1.6",
      },
    }, diagnostics)
  );
}
`;
  }
  function xt(t2) {
    return "object" == typeof t2 && null !== t2 && "ENOENT" === t2.code;
  }
  async function Pt(t2) {
    if ((function(t3) {
      return "object" == typeof t3 && null !== t3 && "errors" in t3 && Array.isArray(t3.errors);
    })(t2)) {
      const e2 = await tt(), n2 = await e2.formatMessages(t2.errors, { color: false, kind: "error", terminalWidth: 100 });
      if (n2.length > 0) return n2.join("\n\n");
    }
    return t2 instanceof Error ? t2.message : String(t2);
  }
  function kt(t2) {
    const e2 = t2?.trim();
    if (e2) return e2.split("\n")[0];
  }
  async function Dt(t2) {
    const e2 = i.join(t2, it);
    try {
      return await _.promises.readFile(e2, "utf-8");
    } catch {
      throw new Error(`Missing canvas runtime module "${it}" in ${t2}.`);
    }
  }
  var Tt = n(61933);
  const Et = /(?:^|[\\/])\.cursor[\\/]projects[\\/][^\\/]+[\\/]canvases[\\/][^\\/]+\.canvas\.tsx$/i, jt = /^[A-Za-z]:[\\/]/, Ft = /^[a-f0-9]{64}\.canvas\.tsx$/i, Wt = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function $t(t2) {
    return i.isAbsolute(t2) || jt.test(t2);
  }
  function Rt(t2) {
    return Et.test(t2);
  }
  function Ot(t2) {
    return Ft.test(t2);
  }
  function Mt(t2, e2) {
    return "" !== t2 && !t2.startsWith(`..${i.sep}`) && ".." !== t2 && !i.isAbsolute(t2) && !t2.includes(i.sep) && e2(t2);
  }
  function Nt({ before: t2, after: e2 }) {
    return t2.dev !== e2.dev || t2.ino !== e2.ino || t2.size !== e2.size || t2.mtimeMs !== e2.mtimeMs;
  }
  async function It(t2) {
    let e2, n2;
    try {
      e2 = await (0, r.lstat)(t2), n2 = await (0, r.realpath)(t2);
    } catch (t3) {
      return { status: "invalid", reason: t3 instanceof Error && "code" in t3 ? `stat-${String(t3.code)}` : "stat-failed" };
    }
    return !e2.isFile() || e2.isSymbolicLink() ? { status: "invalid", reason: "path-not-regular-file" } : { stats: e2, realPath: n2 };
  }
  async function Jt(t2, e2) {
    try {
      for (const e3 of t2) {
        const t3 = await (0, r.lstat)(e3);
        if (!t3.isDirectory() || t3.isSymbolicLink()) return;
      }
      return await (0, r.realpath)(e2);
    } catch {
      return;
    }
  }
  function Ht(t2) {
    const e2 = i.resolve(t2.path);
    if (i.basename(e2) === N.Rj) for (const n2 of t2.replicaFilesDirs) {
      const t3 = i.resolve(n2, Tt.sz), a2 = i.relative(t3, e2).split(i.sep);
      if (2 !== a2.length || void 0 === a2[0] || !Wt.test(a2[0]) || a2[1] !== N.Rj) continue;
      const r2 = a2[0].toLowerCase(), s2 = i.join(t3, r2);
      return { filesDir: i.resolve(n2), canvasId: r2, canvasDir: s2, sourcePath: i.join(s2, Tt.EN), bundlePath: e2 };
    }
  }
  function At(t2) {
    const e2 = i.dirname(t2.canvasDir);
    return Jt([t2.filesDir, e2, t2.canvasDir], e2);
  }
  async function Lt(t2) {
    if (!$t(t2) || !Rt(t2)) return { status: "invalid", reason: "path-not-managed-canvas" };
    const e2 = await It(t2);
    return "status" in e2 ? e2 : $t(e2.realPath) && Rt(e2.realPath) ? { status: "valid", stats: e2.stats, realPath: e2.realPath } : { status: "invalid", reason: "realpath-not-managed-canvas" };
  }
  async function zt(t2) {
    const { path: e2, peerAgentStoreFilesDirs: n2, replicaAgentStoreFilesDirs: a2, cloudCanvasCacheDir: r2 } = t2, s2 = i.basename(e2);
    if (!$t(e2) || !B(s2) && s2 !== N.Rj) return { status: "invalid", reason: "path-not-canvas-bundle" };
    const o2 = await It(e2);
    if ("status" in o2) return o2;
    const c2 = { status: "valid", stats: o2.stats, realPath: o2.realPath };
    if (void 0 !== r2) {
      const t3 = await Jt([r2], r2);
      if (void 0 !== t3 && Mt(i.relative(t3, o2.realPath), B)) return c2;
    }
    const u2 = Ht({ path: e2, replicaFilesDirs: a2 });
    if (void 0 !== u2) {
      const t3 = await At(u2), e3 = void 0 === t3 ? void 0 : i.relative(t3, o2.realPath).split(i.sep);
      return void 0 === e3 || 2 !== e3.length || e3[0]?.toLowerCase() !== u2.canvasId || e3[1] !== s2 ? { status: "invalid", reason: "realpath-not-replica-canvas-store" } : c2;
    }
    for (const t3 of n2) {
      const e3 = i.join(t3, "artifacts"), n3 = i.join(e3, ...I.split("/")), a3 = await Jt([t3, e3, n3], n3);
      if (void 0 !== a3 && Mt(i.relative(a3, o2.realPath), B)) return c2;
    }
    return { status: "invalid", reason: "realpath-not-peer-canvas-store" };
  }
  async function Bt(t2) {
    const { path: e2, cloudCanvasCacheDir: n2 } = t2;
    if (void 0 === n2 || !$t(e2) || !Ot(i.basename(e2))) return { status: "invalid", reason: "path-not-managed-canvas" };
    const a2 = await It(e2);
    if ("status" in a2) return a2;
    const r2 = await Jt([n2], n2);
    return void 0 !== r2 && Mt(i.relative(r2, a2.realPath), Ot) ? { status: "valid", stats: a2.stats, realPath: a2.realPath } : { status: "invalid", reason: "path-not-managed-canvas" };
  }
  const Ut = (0, W.h)("canvas-server");
  class qt {
    constructor(t2) {
      this._started = false, this.logContext = t2.logContext ?? (0, $.q6)(), this.canvasServer = new wt({ logContext: this.logContext, runtimeDir: t2.runtimeDir, nodeExecPath: t2.nodeExecPath });
    }
    onAction(t2) {
      this.canvasServer.onAction(t2);
    }
    onError(t2) {
      this.canvasServer.onError(t2);
    }
    onErrorCleared(t2) {
      this.canvasServer.onErrorCleared(t2);
    }
    async _ensureStarted() {
      this._started || (this._startPromise || (this._startPromise = this.canvasServer.start().then(() => {
        this._started = true;
      }).catch((t2) => {
        throw this._startPromise = void 0, t2;
      })), await this._startPromise);
    }
    get sessionToken() {
      return this.canvasServer.sessionToken;
    }
    async stop() {
      this._startPromise && !this._started && await this._startPromise.catch(() => {
      }), this._started && (await this.canvasServer.stop(), this._started = false, this._startPromise = void 0, Ut.info(this.logContext, "Canvas server stopped"));
    }
    async registerCanvas(t2) {
      await this._ensureStarted();
      const e2 = await this.canvasServer.registerCanvas(t2);
      return Ut.info(this.logContext, "Registered canvas", { path: t2.path, kind: t2.kind ?? "source", canvasId: e2.canvasId }), e2;
    }
    getCanvasUrl(t2) {
      return this.canvasServer.getUrl(t2.canvasId, t2.preview);
    }
    async destroyCanvas(t2) {
      await this.canvasServer.destroyCanvas({ canvasId: t2.canvasId });
    }
    getRegisteredCanvasPath(t2) {
      return this.canvasServer.getRegisteredCanvasPath(t2);
    }
    async getShareArtifact(t2) {
      return await this._ensureStarted(), this.canvasServer.getShareArtifact({ path: t2.path });
    }
    pushState(t2) {
      return this.canvasServer.pushState({ canvasId: t2.canvasId, channel: t2.channel, jsonPayload: t2.payload });
    }
    pushStateAll(t2) {
      this.canvasServer.pushStateAll({ channel: t2.channel, jsonPayload: t2.payload });
    }
    get isRunning() {
      return this._started;
    }
  }
  var Gt = n(73136);
  const Vt = "cursor/canvas", Kt = "grok/canvas", Xt = /* @__PURE__ */ new Map([[Vt, "cursor"], [Kt, "grok"]]), Yt = /^\s*(?:import|export)(\s+type)?\s+(?!default\b)((?:[\w\s*,{}]+)\s+from\s+|(?=["']))["']([^"']+)["']/gm;
  function Zt(t2) {
    const e2 = [];
    Yt.lastIndex = 0;
    for (const n2 of t2.matchAll(Yt)) {
      const t3 = n2[1], a2 = n2[2] ?? "", r2 = n2[3];
      void 0 !== r2 && e2.push({ specifier: r2, isTypeOnly: void 0 !== t3 || te(a2) });
    }
    return e2;
  }
  function Qt(t2) {
    const e2 = /* @__PURE__ */ new Set();
    for (const { specifier: n2 } of t2) {
      const t3 = Xt.get(n2);
      void 0 !== t3 && e2.add(t3);
    }
    return e2;
  }
  function te(t2) {
    const e2 = t2.replace(/\s+from\s+$/u, "").trim();
    if (!e2.startsWith("{") || !e2.endsWith("}")) return false;
    const n2 = e2.slice(1, -1).split(",").map((t3) => t3.trim()).filter((t3) => t3.length > 0);
    return n2.length > 0 && n2.every((t3) => /^type\s+\S/u.test(t3));
  }
  function ee(t2) {
    let e2 = "", n2 = 0;
    for (; n2 < t2.length; ) {
      const a2 = t2[n2], r2 = t2[n2 + 1];
      if ("/" !== a2 || "/" !== r2) if ("/" !== a2 || "*" !== r2) e2 += a2 ?? "", n2 += 1;
      else {
        for (n2 += 2; n2 < t2.length && ("*" !== t2[n2] || "/" !== t2[n2 + 1]); ) "\n" === t2[n2] && (e2 += "\n"), n2 += 1;
        n2 += 2;
      }
      else for (n2 += 2; n2 < t2.length && "\n" !== t2[n2]; ) n2 += 1;
    }
    return e2;
  }
  async function ne(t2) {
    const e2 = await Promise.resolve().then(n.t.bind(n, 41503, 19)), a2 = Y((await e2.transform(t2.source, { loader: ae(t2.canvasPath), jsx: "transform", jsxFactory: "React.createElement", jsxFragment: "React.Fragment", format: "esm", target: "es2022", sourcefile: i.basename(t2.canvasPath), logLevel: "silent" })).code);
    var r2;
    const s2 = V(L({ runtimeEsm: await (async function(t3, e3) {
      const a3 = /* @__PURE__ */ (function(t4) {
        return "grok" === t4 ? "canvas-runtime-grok.esm.js" : "canvas-runtime.esm.js";
      })(e3), r3 = i.join(t3 ?? i.join(i.dirname((0, Gt.fileURLToPath)(require("url").pathToFileURL(__filename).href)), "runtime"), a3);
      try {
        const t4 = await Promise.resolve().then(n.t.bind(n, 51455, 19));
        return await t4.readFile(r3, "utf-8");
      } catch (t4) {
        throw new Error(`Missing canvas runtime module "${a3}" in ${i.dirname(r3)}.`, { cause: t4 });
      }
    })(t2.runtimeDir, t2.kit ?? (r2 = t2.source, Qt(Zt(ee(r2))).has("grok") ? "grok" : "cursor")), userModule: a2 }));
    if (!U(s2, {})) throw new Error("Canvas share exceeds content limits.");
    return { appJs: new Uint8Array(s2), userModule: a2 };
  }
  function ae(t2) {
    switch (i.extname(t2).toLowerCase()) {
      case ".tsx":
      default:
        return "tsx";
      case ".ts":
        return "ts";
      case ".jsx":
        return "jsx";
      case ".js":
        return "js";
    }
  }
  (0, i.resolve)((0, Gt.fileURLToPath)(new URL(n(35669), n.b)), "..");
  const re = 2e7, se = [30, 120, 300];
  function ie(t2) {
    const e2 = t2?.code;
    return "EPERM" === e2 || "EACCES" === e2 || "EBUSY" === e2;
  }
  const oe = (t2) => new Promise((e2) => setTimeout(e2, t2));
  async function ce(t2) {
    const { filePath: e2, contents: n2, mode: s2 } = t2, i2 = `${e2}.tmp-${(0, a.randomBytes)(6).toString("hex")}`;
    try {
      await (0, r.writeFile)(i2, n2, { mode: s2 });
      try {
        return void await (0, r.rename)(i2, e2);
      } catch (t3) {
        if (!ie(t3)) throw t3;
        for (const t4 of se) {
          await oe(t4);
          try {
            return void await (0, r.rename)(i2, e2);
          } catch (t5) {
            if (!ie(t5)) throw t5;
          }
        }
        await (0, r.writeFile)(e2, n2, { mode: s2 }), await (0, r.unlink)(i2).catch(() => {
        });
      }
    } catch (t3) {
      throw await (0, r.unlink)(i2).catch(() => {
      }), t3;
    }
  }
  async function ue(t2) {
    const e2 = await (async function(t3, e3) {
      try {
        const n2 = z((0, k.gunzipSync)(t3, { maxOutputLength: re }).toString("utf8")), a2 = "bundle-v1" === n2.kind ? n2.bundle.userModule : n2.source;
        return await ce({ filePath: e3, contents: a2 }), e3;
      } catch {
        return;
      }
    })(t2.bundleGzip, t2.sourcePath);
    return void 0 === e2 ? { bundlePath: t2.bundlePath } : { bundlePath: t2.bundlePath, sourcePath: e2 };
  }
  async function le(t2) {
    const { bundleGzip: e2, cacheDir: n2 } = t2;
    if (e2.byteLength > ut) throw new Error("Cloud canvas bundle exceeds the compressed size limit");
    if (!(0, N.IR)(e2)) throw new Error("Cloud canvas bundle is not gzip data");
    const s2 = (0, a.createHash)("sha256").update(e2).digest("hex"), o2 = i.join(n2, `${s2}.canvas.bundle.gz`), c2 = i.join(n2, `${s2}.canvas.tsx`);
    try {
      const t3 = /* @__PURE__ */ new Date();
      await (0, r.utimes)(o2, t3, t3);
      try {
        return await (0, r.utimes)(c2, t3, t3), { bundlePath: o2, sourcePath: c2 };
      } catch (t4) {
        if ("ENOENT" !== t4.code) throw t4;
        return ue({ bundleGzip: e2, bundlePath: o2, sourcePath: c2 });
      }
    } catch (t3) {
      if ("ENOENT" !== t3.code) throw t3;
    }
    return await (0, r.mkdir)(n2, { recursive: true }), await ce({ filePath: o2, contents: e2 }), ue({ bundleGzip: e2, bundlePath: o2, sourcePath: c2 });
  }
  const de = 12096e5, he = 268435456;
  async function pe(t2) {
    let e2;
    try {
      e2 = await (0, r.readdir)(t2);
    } catch {
      return;
    }
    const n2 = async (t3, e3) => {
      try {
        const n3 = await (0, r.lstat)(t3);
        return n3.mtimeMs > e3 ? 0 : (await (0, r.unlink)(t3), n3.size);
      } catch {
        return 0;
      }
    }, a2 = [];
    for (const n3 of e2) {
      const e3 = i.join(t2, n3);
      try {
        const t3 = await (0, r.lstat)(e3);
        t3.isFile() && !t3.isSymbolicLink() && a2.push({ path: e3, mtimeMs: t3.mtimeMs, size: t3.size });
      } catch {
      }
    }
    const s2 = Date.now(), o2 = [];
    for (const t3 of a2) s2 - t3.mtimeMs > de ? await n2(t3.path, t3.mtimeMs) : o2.push(t3);
    o2.sort((t3, e3) => t3.mtimeMs - e3.mtimeMs);
    let c2 = o2.reduce((t3, e3) => t3 + e3.size, 0);
    for (const t3 of o2) {
      if (c2 <= he) break;
      c2 -= await n2(t3.path, t3.mtimeMs);
    }
  }
  var fe = n(46144);
  (0, fe.Pu)("canvas.compile.result", { description: "compileCanvasSource outcomes by result", labelNames: ["result"] }), (0, fe.v5)("canvas.compile.phase_ms", { description: "Wall time for each compileCanvasSource phase (bootstrap, queue_wait, typecheck, bundle, total)", labelNames: ["phase"] }), (0, fe.v5)("canvas.compile.source_bytes", { description: "UTF-8 byte length of canvas source at compile start" }), (0, fe.v5)("canvas.compile.bundle_bytes", { description: "UTF-8 byte length of the uncompressed canvas share bundle before gzip" }), (0, fe.v5)("canvas.compile.gzip_bytes", { description: "Byte length of the gzipped canvas share bundle (appJs)" });
  /* @__PURE__ */ new Map();
  (0, i.resolve)((0, Gt.fileURLToPath)(new URL(n(35669), n.b)), ".."), /* @__PURE__ */ new Map();
  const ve = /^\s*\/\/\s*cursor-canvas-title:[ \t]*(.*)$/m, me = 120;
  const ge = 200;
  function ye(t2) {
    return (0, a.createHash)("sha256").update(t2, "utf8").digest("hex");
  }
  class we extends Error {
    constructor() {
      super("Canvas source changed after diagnostics; save again to type-check the new source"), this.name = "CanvasDiagnosticsSourceMismatchError";
    }
  }
  async function be(t2) {
    try {
      const e2 = JSON.parse(await (0, r.readFile)(i.join(t2, N._g), "utf8"));
      if (null === e2 || "object" != typeof e2 || Array.isArray(e2)) return;
      const n2 = e2, a2 = (t3) => "string" == typeof t3 ? t3 : void 0;
      return { createdAt: a2(n2.createdAt), title: a2(n2.title), sourceSha256: a2(n2.sourceSha256) };
    } catch {
      return;
    }
  }
  async function Se(t2) {
    const e2 = i.join(t2.layout.canvasDir, N._g);
    for (const n3 of [t2.layout.bundlePath, e2]) {
      const t3 = await (0, r.lstat)(n3).catch(() => {
      });
      if (t3?.isSymbolicLink()) throw new Error(`Refusing to write replica canvas artifact through a symlink: ${i.basename(n3)}`);
    }
    const n2 = await (0, r.readFile)(t2.layout.sourcePath);
    if (void 0 !== t2.expectedSourceSha256 && (function(t3) {
      return (0, a.createHash)("sha256").update(t3).digest("hex");
    })(n2) !== t2.expectedSourceSha256) throw new we();
    const s2 = n2.toString("utf8"), o2 = await ne({ source: s2, canvasPath: t2.layout.sourcePath, runtimeDir: t2.runtimeDir }), c2 = await (0, r.readFile)(t2.layout.sourcePath);
    if (!n2.equals(c2)) throw new we();
    await ce({ filePath: t2.layout.bundlePath, contents: Buffer.from(o2.appJs), mode: 438 });
    const u2 = (/* @__PURE__ */ new Date()).toISOString(), l2 = await be(t2.layout.canvasDir), d2 = (function(t3) {
      const e3 = ve.exec(t3)?.[1]?.trim();
      if (void 0 !== e3 && 0 !== e3.length) return e3.slice(0, me);
    })(s2) ?? l2?.title, h2 = { version: 1, canvasId: t2.layout.canvasId, ...void 0 !== d2 ? { title: d2 } : {}, createdAt: l2?.createdAt ?? u2, updatedAt: u2, sourceSha256: ye(s2), compiledAt: u2 };
    await ce({ filePath: e2, contents: JSON.stringify(h2), mode: 438 });
  }
  async function Ce(t2) {
    const e2 = await (0, r.lstat)(t2.layout.bundlePath).catch(() => {
    }), n2 = true === e2?.isFile() && !e2.isSymbolicLink();
    let a2;
    try {
      const e3 = await (0, r.lstat)(t2.layout.sourcePath);
      if (!e3.isFile() || e3.isSymbolicLink()) return n2;
      a2 = await (0, r.readFile)(t2.layout.sourcePath, "utf8");
    } catch {
      return n2;
    }
    if (n2) {
      const e3 = await be(t2.layout.canvasDir);
      if (e3?.sourceSha256 === ye(a2)) return true;
    }
    try {
      return await Se(t2), true;
    } catch {
      return n2;
    }
  }
  function _e(t2) {
    let e2;
    const n2 = i.basename(t2.layout.sourcePath), a2 = (0, _.watch)(t2.layout.canvasDir, { persistent: false }, (a3, r2) => {
      r2 === n2 && (clearTimeout(e2), e2 = setTimeout(() => {
        Se({ layout: t2.layout, runtimeDir: t2.runtimeDir }).catch((e3) => {
          t2.onError?.(e3);
        });
      }, ge));
    });
    return a2.on("error", (e3) => {
      t2.onError?.(e3);
    }), { close() {
      clearTimeout(e2), e2 = void 0, a2.close();
    } };
  }
} };
