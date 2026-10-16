"use strict";
exports.id = 850, exports.ids = [850], exports.modules = { 65850: (e, t, r) => {
  r.d(t, { createIdeCanvasActivate: () => x });
  var a = r(87305), n = r(37949), s = r(76760), o = r(91398), i = r(7334), c = r(22438), d = r(33002), h = r(41950);
  class l {
    constructor() {
      this._providers = /* @__PURE__ */ new Map(), this._providerListeners = /* @__PURE__ */ new Map(), this._changeListeners = [], this._disposed = false;
    }
    onDidChangeState(e2) {
      return this._changeListeners.push(e2), { dispose: () => {
        const t2 = this._changeListeners.indexOf(e2);
        t2 >= 0 && this._changeListeners.splice(t2, 1);
      } };
    }
    registerStateProvider(e2) {
      if (this._disposed) return e2.dispose(), { dispose() {
      } };
      const t2 = this._providers.get(e2.channel);
      t2 && (this._providerListeners.get(e2.channel)?.dispose(), t2.dispose()), this._providers.set(e2.channel, e2);
      const r2 = e2.onDidChange(() => {
        this._emitProvider(e2);
      });
      return this._providerListeners.set(e2.channel, r2), this._emitProvider(e2), { dispose: () => {
        this._providers.get(e2.channel) === e2 && (this._providerListeners.get(e2.channel)?.dispose(), this._providerListeners.delete(e2.channel), this._providers.delete(e2.channel), e2.dispose());
      } };
    }
    getAllState() {
      const e2 = [];
      for (const t2 of this._providers.values()) {
        const r2 = v(t2.getState());
        void 0 !== r2 && e2.push({ channel: t2.channel, payload: r2 });
      }
      return e2;
    }
    dispose() {
      if (!this._disposed) {
        this._disposed = true;
        for (const e2 of this._providerListeners.values()) e2.dispose();
        this._providerListeners.clear();
        for (const e2 of this._providers.values()) e2.dispose();
        this._providers.clear(), this._changeListeners.length = 0;
      }
    }
    _emitProvider(e2) {
      const t2 = v(e2.getState());
      if (void 0 !== t2) for (const r2 of this._changeListeners) r2(e2.channel, t2);
    }
  }
  function v(e2) {
    try {
      return JSON.stringify(e2);
    } catch {
      return;
    }
  }
  const u = (0, n.h)("canvas-server-provider");
  function p(e2) {
    o.commands.executeCommand("canvas.handleCanvasError", e2.canvasId, e2.error, e2.errorKind);
  }
  function g(e2) {
    o.commands.executeCommand("canvas.handleCanvasErrorCleared", e2);
  }
  const f = 1e4, m = 100;
  function C(e2) {
    return "function" == typeof e2?.then;
  }
  function w(e2, t2) {
    let r2;
    const a2 = new Promise((e3) => {
      r2 = setTimeout(() => e3(void 0), Math.max(0, t2));
    });
    return Promise.race([Promise.resolve(e2), a2]).finally(() => {
      void 0 !== r2 && clearTimeout(r2);
    });
  }
  function y(e2, t2) {
    const r2 = "string" == typeof e2 ? { runtimeDir: e2, logContext: t2 } : e2, { runtimeDir: n2 } = r2, i2 = new a.CX({ runtimeDir: n2, logContext: r2.logContext, nodeExecPath: r2.nodeExecPath }), c2 = new l(), v2 = c2.registerStateProvider((function() {
      const e3 = (0, d.q6)(), t3 = [];
      let r3 = D();
      const a2 = () => {
        for (const r4 of t3) try {
          r4();
        } catch (t4) {
          u.warn(e3, "Canvas theme listener threw during broadcast", { errorType: t4 instanceof Error ? t4.name : typeof t4 });
        }
      };
      let n3 = 0;
      const s2 = async () => {
        const e4 = ++n3;
        let t4;
        try {
          const e5 = await o.commands.executeCommand(h.P);
          e5 && "string" == typeof e5.kind && (t4 = { kind: e5.kind, ...e5.primary ? { primary: e5.primary } : {}, ...e5.editorBackground ? { editorBackground: e5.editorBackground } : {}, ...e5.editorForeground ? { editorForeground: e5.editorForeground } : {} });
        } catch {
          t4 = void 0;
        }
        if (e4 === n3) {
          if (void 0 === t4) {
            const e5 = D().kind;
            return void (e5 !== r3.kind && (r3 = { ...r3, kind: e5 }, a2()));
          }
          r3 = t4, a2();
        }
      }, i3 = o.window.onDidChangeActiveColorTheme(() => {
        s2();
      });
      return s2(), { channel: "theme", getState: () => r3, onDidChange: (e4) => (t3.push(e4), { dispose() {
        const r4 = t3.indexOf(e4);
        r4 >= 0 && t3.splice(r4, 1);
      } }), dispose() {
        i3.dispose(), t3.length = 0;
      } };
    })());
    i2.onAction((e3, t3) => (function(e4, t4, r3, a2) {
      switch (u.info(a2, "Canvas action dispatched", { canvasId: t4, actionType: r3.type }), r3.type) {
        case "openAgent":
          o.commands.executeCommand("canvas.openAgentByConversationId", r3.agentId);
          break;
        case "newComposerChat": {
          const n3 = e4.getRegisteredCanvasPath(t4);
          if (!n3) {
            u.warn(a2, "newComposerChat: unknown canvasId", { canvasId: t4 });
            break;
          }
          o.commands.executeCommand("canvas.newComposerChat", n3, r3.userPrompt);
          break;
        }
        case "openFile": {
          const e5 = [r3.path];
          void 0 !== r3.selection && e5.push(r3.selection), o.commands.executeCommand("canvas.openFileInWorkbench", ...e5);
          break;
        }
      }
    })(i2, e3, t3, y2)), i2.onError(p), i2.onErrorCleared(g);
    const y2 = r2.logContext ?? (0, d.q6)(), k2 = /* @__PURE__ */ new Map(), x2 = (e3) => {
      const t3 = k2.get(e3);
      void 0 !== t3 && (k2.delete(e3), t3.close());
    }, P = c2.onDidChangeState((e3, t3) => {
      i2.pushStateAll({ channel: e3, payload: t3 });
    });
    return void 0 !== r2.cloudCanvasCacheDir && (0, a.Fh)(r2.cloudCanvasCacheDir), { async registerCanvas(e3) {
      const t3 = (t4) => {
        throw u.warn(y2, "Rejected canvas registration for invalid path", { kind: e3.kind, reason: t4 }), new Error(`Invalid Canvas registration path: ${t4}`);
      }, o2 = "bundle" === e3.kind && (function(e4) {
        const t4 = s.resolve(e4), r3 = s.dirname(s.dirname(s.dirname(t4)));
        return void 0 !== (0, a.FY)({ path: t4, replicaFilesDirs: [r3] });
      })(e3.path) ? await (async function(e4) {
        if (void 0 === e4) return [];
        const t4 = Date.now() + f;
        for (; ; ) {
          const r3 = t4 - Date.now(), a2 = Math.min(m, r3), n3 = e4(), s2 = C(n3) ? await w(n3, a2) : n3;
          if (void 0 !== s2 && s2.length > 0) return s2;
          if (Date.now() >= t4) return s2 ?? [];
          void 0 !== s2 && await new Promise((e5) => setTimeout(e5, a2));
        }
      })(r2.getReplicaAgentStoreFilesDirs) : [];
      let d2;
      if ("bundle" === e3.kind && (d2 = (0, a.FY)({ path: e3.path, replicaFilesDirs: o2 }), void 0 !== d2)) {
        void 0 === await (0, a.$p)(d2) && t3("realpath-not-replica-canvas-store");
        await (0, a.TT)({ layout: d2, runtimeDir: n2 }) || t3("replica-source-missing");
      }
      const h2 = "bundle" === e3.kind ? await (0, a.sH)({ path: e3.path, peerAgentStoreFilesDirs: r2.getPeerAgentStoreFilesDirs?.() ?? [], replicaAgentStoreFilesDirs: o2, cloudCanvasCacheDir: r2.cloudCanvasCacheDir }) : await (async () => {
        const t4 = await (0, a.wV)(e3.path);
        return "valid" === t4.status ? t4 : (0, a.dw)({ path: e3.path, cloudCanvasCacheDir: r2.cloudCanvasCacheDir });
      })();
      "invalid" === h2.status && t3(h2.reason);
      const l2 = { kind: e3.kind, path: h2.realPath }, v3 = await i2.registerCanvas(l2).catch((e4) => {
        throw u.error(y2, "Failed to start canvas server", { errorType: e4 instanceof Error ? e4.name : typeof e4 }), e4;
      });
      for (const e4 of c2.getAllState()) i2.pushState({ canvasId: v3.canvasId, channel: e4.channel, payload: e4.payload });
      if (x2(v3.canvasId), void 0 !== d2) try {
        k2.set(v3.canvasId, (0, a.$h)({ layout: d2, runtimeDir: n2, onError: (e4) => {
          u.warn(y2, "Replica canvas persist failed", { errorType: e4 instanceof Error ? e4.name : typeof e4 });
        } }));
      } catch (e4) {
        u.warn(y2, "Replica canvas watch unavailable", { errorType: e4 instanceof Error ? e4.name : typeof e4 });
      }
      return v3;
    }, getCanvasUrl: async (e3, t3) => i2.getCanvasUrl({ canvasId: e3, preview: t3 }), async destroyCanvas(e3) {
      x2(e3), await i2.destroyCanvas({ canvasId: e3 });
    }, async stageCloudCanvasBundle(e3) {
      const t3 = r2.cloudCanvasCacheDir;
      if (void 0 === t3) throw new Error("Cloud canvas cache is not configured");
      return (0, a.Xi)({ bundleGzip: e3, cacheDir: t3 });
    }, async shareCanvas(e3, t3, r3) {
      const n3 = () => {
        if (r3?.isCancellationRequested) throw new o.CancellationError();
      };
      n3();
      const s2 = await (0, a.wV)(e3);
      if ("invalid" === s2.status) return u.warn(y2, "Rejected canvas share for invalid source path", { reason: s2.reason }), { status: "canvas-missing" };
      let c3;
      try {
        c3 = await i2.getShareArtifact({ path: s2.realPath }), n3();
      } catch (e4) {
        if (e4 instanceof o.CancellationError) throw e4;
        throw u.error(y2, "Failed to build canvas share artifact for upload", { errorType: e4 instanceof Error ? e4.name : typeof e4 }), e4;
      }
      switch (c3.status.status) {
        case "rendered": {
          const r4 = await (0, a.wV)(e3);
          if ("invalid" === r4.status) return u.warn(y2, "Rejected canvas share after source path changed", { reason: r4.reason }), { status: "canvas-missing" };
          if (s2.realPath !== r4.realPath || (0, a.e4)({ before: s2.stats, after: r4.stats })) return u.warn(y2, "Rejected canvas share after source file changed during artifact build"), { status: "canvas-missing" };
          n3();
          try {
            return { status: "shared", shareUrl: (await o.cursor.shareCanvasArtifact({ title: t3.title, visibility: t3.visibility, appJs: c3.appJs, dataJson: c3.dataJson, canvasPath: e3 })).shareUrl };
          } catch (e4) {
            throw u.error(y2, "Failed to upload canvas share artifact", { errorType: e4 instanceof Error ? e4.name : typeof e4 }), e4;
          }
        }
        case "compile-error":
        case "runtime-error":
        case "canvas-missing":
        case "content-too-large":
          return c3.status;
        default:
          return c3.status;
      }
    }, dispose() {
      for (const e3 of [...k2.keys()]) x2(e3);
      P.dispose(), v2.dispose(), c2.dispose(), i2.stop();
    } };
  }
  function D() {
    const { kind: e2 } = o.window.activeColorTheme;
    switch (e2) {
      case o.ColorThemeKind.Light:
        return { kind: "light" };
      case o.ColorThemeKind.Dark:
        return { kind: "dark" };
      case o.ColorThemeKind.HighContrast:
        return { kind: "hc-dark" };
      case o.ColorThemeKind.HighContrastLight:
        return { kind: "hc-light" };
      default:
        return { kind: "dark" };
    }
  }
  const k = (0, n.h)("cursor-agent-host-canvas");
  function x(e2) {
    const t2 = (0, s.join)(e2.projectDir, "canvases"), r2 = (0, s.join)(e2.context.extensionPath, "dist", "agent-sdk"), n2 = (0, a.WT)({ canvasesDir: t2, sdkSourceDir: r2, tsResolveAnchor: e2.context.extensionPath });
    n2.bootstrapReady.then((t3) => {
      void 0 === t3 && k.error(e2.logContext, "Canvas SDK source missing from extension bundle");
    }, (a2) => {
      const n3 = (0, c.E)(a2, { canvasesDir: t2, sdkSourceDir: r2 });
      k.warn(e2.logContext, "Canvas dir bootstrap failed", { errorName: n3.errorName, errorMessage: n3.errorMessage });
    });
    const d2 = o.env.bundledNodePath?.() ?? (process.versions.electron ? void 0 : process.execPath), h2 = y({ runtimeDir: (0, s.join)(e2.context.extensionPath, "dist", "canvas-runtime"), logContext: e2.logContext, nodeExecPath: d2, getPeerAgentStoreFilesDirs: i.getPeerAgentStoreFilesDirs, getReplicaAgentStoreFilesDirs: i.getUserAgentStoreFilesDirsReady, cloudCanvasCacheDir: (0, s.join)(e2.context.globalStorageUri.fsPath, "cloud-canvas-cache") });
    let l2;
    return { snapshot: { serverProviderRegistered: true, diagnosticsProviderCreated: true }, resourceDefaults: { getCanvasDiagnostics: (e3) => n2.getDiagnostics(e3) }, register: () => {
      void 0 === l2 && (l2 = o.cursor.registerCanvasServerProvider(h2));
    }, dispose: () => {
      l2?.dispose(), l2 = void 0, h2.dispose();
    } };
  }
} };
