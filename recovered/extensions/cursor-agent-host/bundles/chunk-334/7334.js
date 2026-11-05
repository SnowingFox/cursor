// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/334.js sha256:effaaa2ce229e70b509862e6dee420a80b3d97070a3992fc4eaf9e6d6b5b367f
// module: 7334 range:73..18266
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7334: (e, t, n) => {
  n.d(t, { iH: () => Mt, dw: () => Te, getPeerAgentStoreFilesDirs: () => Re, getUserAgentStoreFilesDirsReady: () => $e, V0: () => jt, uR: () => Ft, dk: () => qt, H_: () => xt, kE: () => Gt, te: () => Ht, mt: () => Bt, C: () => tt });
  var r = n(83737), s = n(23152);
  var o = n(35068);
  const i = "agentStore.skillRoots.v1", a = 6048e5;
  let d = Promise.resolve();
  function c(e2) {
    return Array.isArray(e2) && 2 === e2.length && ("user" === e2[0] || "team" === e2[0]) && "string" == typeof e2[1] && e2[1].length > 0;
  }
  function u(e2, t2, n2 = Date.now()) {
    if (void 0 === t2.authId) return;
    const r2 = e2.get(i);
    return !(function(e3) {
      if ("object" != typeof e3 || null === e3) return false;
      const t3 = e3;
      return "string" == typeof t3.authId && ("number" == typeof t3.teamId || null === t3.teamId) && "boolean" == typeof t3.enabled && Array.isArray(t3.mountKeys) && t3.mountKeys.every(c) && "number" == typeof t3.writtenAt && Number.isFinite(t3.writtenAt);
    })(r2) || r2.authId !== t2.authId || r2.teamId !== (t2.teamId ?? null) || Math.abs(n2 - r2.writtenAt) > a ? void 0 : { enabled: r2.enabled, mountKeys: r2.mountKeys };
  }
  var l = n(61933), f = n(94289), h = n(72795), g = n(18021), p = n(13920), m = n(77598), y = n(73024), v = n(76760), w = n(91398);
  const S = /https?:\/\/[^\s'")]+/g;
  function I(e2) {
    return (e2 instanceof Error ? e2.message : String(e2)).replace(S, (e3) => {
      try {
        const t2 = new URL(e3);
        return `${t2.protocol}//${t2.host}${t2.pathname}`;
      } catch {
        return "<unparseable-presigned-url>";
      }
    });
  }
  let b;
  function k() {
    return b ??= (async () => {
      try {
        return (0, o.agentStoreRpcServiceFromDedicatedGate)(await w.cursor.checkFeatureGate(l.QT, { disableExposureLog: true }));
      } catch {
        return o.DEFAULT_AGENT_STORE_RPC_SERVICE;
      }
    })(), b;
  }
  const A = [v.join(__dirname, "node_modules", "better-sqlite3", "build", "Release", "better_sqlite3.node"), v.join(__dirname, "..", "..", "cursor-agent-exec", "dist", "node_modules", "better-sqlite3", "build", "Release", "better_sqlite3.node"), v.join(__dirname, "..", "..", "..", "..", "cursor-agent-exec", "dist", "node_modules", "better-sqlite3", "build", "Release", "better_sqlite3.node")].find((e2) => y.existsSync(e2));
  const P = { getConnectTransport: () => w.cursor.connectTransport, getCursorCreds: () => w.cursor.getCursorCreds(), getDynamicConfigValue: (e2) => w.cursor.getDynamicConfigValue(e2), showWarningMessage: (e2) => w.window.showWarningMessage(e2), loadSqlite: async function() {
    return (function(e2) {
      if (void 0 === A) return e2;
      const t2 = function(t3, n2) {
        return new e2(t3, { ...n2, nativeBinding: n2?.nativeBinding ?? A });
      };
      return Object.setPrototypeOf(t2, e2), t2.prototype = e2.prototype, t2;
    })((await Promise.resolve().then(n.t.bind(n, 60677, 23))).default);
  }, sanitizeLogMessage: I, loadSyncModule: async () => await Promise.resolve().then(n.bind(n, 35068)), getAgentStoreRpcService: () => k() };
  class M extends o.AgentStoreSyncRuntimeController {
    constructor(e2, t2, n2, r2, s2, i2 = o.AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS, a2) {
      super(e2, t2, n2, P, r2, s2, i2, a2);
    }
  }
  const D = "agentStoreSync.pathHashSalt";
  async function C(e2) {
    const t2 = e2.globalState.get(D);
    if ("string" == typeof t2 && t2.length > 0) return t2;
    const n2 = (0, m.randomUUID)();
    await e2.globalState.update(D, n2);
    const r2 = e2.globalState.get(D);
    return "string" == typeof r2 && r2.length > 0 ? r2 : n2;
  }
  var _ = n(77273);
  const $ = "agent_store_principal_local_mounts", R = "agent_store_local_user_mount", L = "agent_store_sync_client", T = "agent_store_citation_index_tier";
  function K(e2) {
    if (void 0 === e2.storeBase) return [];
    const t2 = e2.principalMountKeys.get("user");
    if (void 0 === t2) return [];
    try {
      return [(0, r.yA)((0, r.WX)(e2.storeBase, t2))];
    } catch (t3) {
      return e2.onError(t3), [];
    }
  }
  const N = [5e3, 15e3, 3e4, 6e4];
  function E(e2, t2) {
    return e2.length === t2.length && e2.every((e3, n2) => e3 === t2[n2]);
  }
  function F(e2, t2) {
    const n2 = [];
    for (const r2 of e2) t2(r2) && n2.push(r2);
    return n2;
  }
  function H(e2) {
    if (0 === e2.conversationId.trim().length) return [];
    const t2 = [], n2 = /* @__PURE__ */ new Set();
    if (void 0 !== e2.selfFilesDir && e2.selfFilesDir.length > 0 && t2.push({ path: e2.selfFilesDir, kind: "self" }), void 0 !== e2.inherited) for (const r2 of e2.inherited) n2.has(r2.alias) || (n2.add(r2.alias), t2.push({ path: r2.filesDir, kind: "peer", alias: r2.alias, readOnly: r2.readOnly }));
    for (const r2 of e2.registry) {
      if (n2.has(r2.alias)) continue;
      let e3;
      switch (n2.add(r2.alias), r2.kind) {
        case "peer":
          e3 = "peer";
          break;
        case "share":
          e3 = "share";
          break;
        case "principal":
          e3 = "principal";
          break;
        default:
          return r2.kind;
      }
      t2.push({ path: r2.filesDir, kind: e3, alias: r2.alias, readOnly: "share" === r2.kind });
    }
    return t2;
  }
  function x(e2, t2) {
    return e2.ensureFilesDir(t2);
  }
  function B(e2, t2, n2) {
    e2.requestMount(t2, n2);
  }
  function G(e2, t2, n2) {
    return { scope: e2, path: t2, rootLinkPolicy: n2 };
  }
  const j = ["team", "user", "agent"];
  function q(e2, t2) {
    const n2 = (function(e3, t3) {
      const n3 = e3.getHarness();
      if (void 0 !== n3) try {
        (0, r._b)(t3);
        const e4 = (0, r.f$)((0, r.WX)(n3, t3));
        return (0, r.rs)(e4), e4;
      } catch {
        return;
      }
    })(e2, t2);
    if (void 0 === n2) return { kind: "unavailable" };
    const s2 = (function(e3, t3) {
      const n3 = e3.handoutPins, r2 = e3.windowId;
      if (void 0 === n3 || void 0 === r2) return "skipped";
      if (n3.has(t3)) return "reused";
      const s3 = e3.getHarness();
      if (void 0 === s3) return "skipped";
      const i2 = (0, o.acquireStorePinSync)({ store: s3, mountKey: t3, windowId: r2, purpose: "foreground" });
      if ("evicting" === i2.kind) return "evicting";
      if (!i2.handle.acquired) {
        const n4 = void 0 !== i2.handle.error ? `: ${String(i2.handle.error)}` : "";
        e3.warn?.(`agent store pin not acquired for ${t3}${n4}`);
      }
      return n3.set(t3, i2.handle), "new";
    })(e2, t2);
    if ("evicting" === s2) return { kind: "evicting" };
    try {
      y.mkdirSync(n2, { recursive: true, mode: r.qH });
      try {
        y.chmodSync(n2, r.qH);
      } catch {
      }
      return { kind: "ready", filesDir: n2 };
    } catch {
      if ("new" === s2) {
        const n3 = e2.handoutPins?.get(t2);
        e2.handoutPins?.delete(t2), n3?.release();
      }
      return { kind: "unavailable" };
    }
  }
  function O(e2, t2) {
    const n2 = q(e2, t2);
    return "ready" === n2.kind ? n2.filesDir : void 0;
  }
  async function W(e2) {
    const t2 = e2.handoutPins;
    if (void 0 === t2) return;
    const n2 = [...t2.values()];
    t2.clear(), await Promise.all(n2.map((e3) => e3.release()));
  }
  function z(e2, t2) {
    const n2 = { scope: "agent", reason: t2 };
    return { scopes: e2.scopes.filter((e3) => "agent" !== e3.scope), unavailableScopes: [...e2.unavailableScopes ?? [], n2] };
  }
  function U(e2, t2) {
    return async (n2) => {
      let s2;
      if (void 0 !== n2?.syncAgentPath) try {
        s2 = (0, o.normalizeRelPath)(n2.syncAgentPath);
      } catch {
        return;
      }
      if (void 0 === n2 || "string" != typeof n2.agentId || void 0 !== n2.mount && "self" !== n2.mount && "peer" !== n2.mount || void 0 !== n2.syncAgentPath && "string" != typeof n2.syncAgentPath || void 0 !== s2 && "peer" !== n2.mount) return;
      const i2 = n2.mount ?? "self", a2 = e2.getHarness();
      if (void 0 === a2) return d2 = true === e2.isHarnessSettling?.() ? "sync-starting" : "sync-unavailable", { scopes: [], unavailableScopes: j.map((e3) => ({ scope: e3, reason: d2 })) };
      var d2;
      const c2 = e2.getPrincipalMountKeys(), u2 = e2.getController(), f2 = (function(e3, t3, n3) {
        return { ...e3, scopes: e3.scopes.map((e4) => {
          const r2 = "agent" === e4.scope ? void 0 : t3.get(e4.scope);
          return void 0 === r2 ? e4 : { ...e4, syncState: n3?.getMountSyncState(r2) ?? "opening" };
        }) };
      })((function(e3) {
        const t3 = e3.agentId.trim(), { localStoreBase: n3, localStoreTmpDirName: s3 } = e3, o2 = (e4) => (0, r.f$)({ base: n3, agentId: e4, tmpDirName: s3 }), i3 = e3.localPrincipalSourceIds?.user, a3 = e3.localPrincipalSourceIds?.team;
        return { scopes: [...void 0 === a3 ? [] : [G("team", o2(a3), "reject")], ...void 0 === i3 ? [] : [G("user", o2(i3), "reject")], ...(0, l.v8)(t3) ? [G("agent", o2(t3), "reject")] : []] };
      })({ agentId: n2.agentId, localStoreBase: a2.base, localStoreTmpDirName: a2.tmpDirName, localPrincipalSourceIds: { user: c2.get("user"), team: c2.get("team") } }), c2, u2);
      if (void 0 === f2.scopes.find((e3) => "agent" === e3.scope)) return f2;
      const h2 = q(e2, n2.agentId);
      if ("evicting" === h2.kind) return z(f2, "sync-starting");
      if ("ready" !== h2.kind) return z(f2, "mount-failed");
      let g2;
      if ("peer" === i2) {
        if (void 0 === u2) return z(f2, "sync-unavailable");
        if (void 0 === s2) {
          const e3 = await u2.ensureMountedPeer({ peerAgentId: n2.agentId, isProjectStore: true === n2.isProjectStore, awaitInitialRound: false !== n2.awaitInitialRound }).catch(() => {
          });
          if (void 0 === e3 || "mounted" !== e3.outcome && "already-present" !== e3.outcome) return z(f2, "mount-failed");
          g2 = e3.syncState;
        } else if ("served" !== await u2.resolveCitedPath({ mountKey: n2.agentId, relPath: s2, indexTierEnabled: e2.isCitationIndexTierEnabled(), isProjectStore: true === n2.isProjectStore, ...void 0 !== t2?.citedFileWait ? { waitBudget: t2.citedFileWait } : {} })) return z(f2, "mount-failed");
      } else if (void 0 !== u2 && "lazy" === u2.mountPolicy()) if (u2.hasSelfMount(n2.agentId)) e2.releaseLazySelfWatch?.(n2.agentId);
      else {
        const t3 = (0, o.admitLocalAgentStore)({ agentId: n2.agentId, policy: "lazy", reason: "prompt_inventory", indexPopulated: u2.localStoreIndexIsPopulated(n2.agentId), resumeRequested: true === n2.resume || u2.hasAdmittedResume(n2.agentId) });
        if ("mount" === t3.action) {
          const r2 = () => {
            u2.hasSelfMount(n2.agentId) || u2.hasNonSelfMount(n2.agentId) ? e2.releaseLazySelfWatch?.(n2.agentId) : e2.noteLazySelfStore?.(n2.agentId, h2.filesDir);
          };
          Promise.resolve(u2.openAdmittedLazySelf(n2.agentId, t3.reason)).then(r2, r2);
        } else e2.noteLazySelfStore?.(n2.agentId, h2.filesDir);
      }
      else u2?.ensureMounted(n2.agentId);
      return { ...f2, scopes: f2.scopes.map((e3) => "agent" === e3.scope ? { ...e3, path: h2.filesDir, ...void 0 === g2 ? {} : { syncState: g2 } } : e3) };
    };
  }
  const X = { outcome: "unavailable", pushed: 0, pulled: 0 };
  const J = "user", V = "team", Q = 5e3, Y = 6e4, Z = "Agent store sync is currently disabled; it resumes automatically when re-enabled.";
  let ee, te, ne, re, se, oe = o.NEVER_STARTED_HARNESS_PHASE, ie = 0, ae = [];
  const de = /* @__PURE__ */ new Map();
  let ce, ue, le, fe, he, ge, pe, me, ye, ve, we, Se, Ie = 0, be = [], ke = true, Ae = o.DEFAULT_HARNESS_RECOVERY_CONFIG, Pe = Promise.resolve();
  function Me(e2) {
    Promise.resolve(Pe).then(() => {
      (0, o.isHarnessInactive)(oe) || e2();
    });
  }
  const De = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map();
  const _e = new class {
    constructor(e2) {
      this.current = e2;
    }
    ready() {
      const e2 = this.current();
      if (e2.length > 0) return Promise.resolve(e2);
      if (void 0 === this.pending) {
        let e3;
        const t2 = new Promise((t3) => {
          e3 = t3;
        });
        this.pending = { promise: t2, resolve: e3 };
      }
      return this.pending.promise;
    }
    settle(e2) {
      const t2 = this.pending;
      this.pending = void 0, t2?.resolve([e2]);
    }
  }(function() {
    if (void 0 === ee) return [];
    const e2 = Te.mountKeys.get("user");
    if (void 0 === e2) return [];
    try {
      const t2 = (0, r.f$)((0, r.WX)(ee, e2));
      return (0, r.rs)(t2), [t2];
    } catch {
      return [];
    }
  });
  function $e() {
    return _e.ready();
  }
  function Re() {
    return [.../* @__PURE__ */ new Set([...[...De.values()].filter((e2) => "peer" === e2.kind).map((e2) => e2.filesDir), ...Ce.values()])];
  }
  function Le(e2) {
    ge?.appendLine(`[cursor-agent-host] ${e2}`);
  }
  const Te = new class {
    constructor(e2) {
      this.deps = e2, this.mountKeysByAlias = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Set(), this.targetDirsListeners = /* @__PURE__ */ new Set(), this.enabled = false, this.enabledResolved = false, this.refreshGeneration = 0, this.retryPending = false, this.retryAttempts = 0, this.published = [], this.publishedTargetDirs = [];
    }
    get mountKeys() {
      return this.mountKeysByAlias;
    }
    get() {
      return (e2 = { enabled: this.enabled, storeBase: this.deps.getStoreBase(), principalMountKeys: this.mountKeysByAlias, onError: (e3) => {
        this.deps.log(`Agent store skills root unavailable: ${I(e3)}`);
      } }).enabled ? K(e2) : [];
      var e2;
    }
    targetDirs() {
      return K({ storeBase: this.deps.getStoreBase(), principalMountKeys: this.mountKeysByAlias, onError: (e2) => {
        this.deps.log(`Agent store skills target unavailable: ${I(e2)}`);
      } });
    }
    onDidChange(e2) {
      return this.listeners.add(e2), () => {
        this.listeners.delete(e2);
      };
    }
    onDidChangeTargetDirs(e2) {
      return this.targetDirsListeners.add(e2), () => {
        this.targetDirsListeners.delete(e2);
      };
    }
    setMountKey(e2, t2) {
      this.mountKeysByAlias.set(e2, t2), this.publishIfChanged();
    }
    deleteMountKey(e2) {
      this.mountKeysByAlias.delete(e2), this.publishIfChanged();
    }
    clearMountKeys() {
      this.mountKeysByAlias.clear(), this.publishIfChanged();
    }
    deleteMountKeyByValue(e2) {
      for (const [t2, n2] of this.mountKeysByAlias) if (n2 === e2) return this.deleteMountKey(t2), t2;
    }
    restore(e2) {
      this.enabled = e2.enabled, this.enabledResolved = false, this.mountKeysByAlias.clear();
      for (const [t2, n2] of e2.mountKeys) this.mountKeysByAlias.set(t2, n2);
      this.publishTargetDirsIfChanged(), this.publishRootsIfChanged();
    }
    forgetResolution() {
      this.refreshGeneration += 1, this.enabledResolved = false, this.enabled = false, this.publishRootsIfChanged();
    }
    async refreshGate() {
      const e2 = ++this.refreshGeneration;
      let t2;
      try {
        t2 = await this.deps.resolveEnabled();
      } catch (e3) {
        t2 = void 0, this.deps.log(`skills sync setting resolve failed: ${I(e3)}`);
      }
      e2 === this.refreshGeneration && (void 0 !== t2 ? (this.retryAttempts = 0, this.enabled = t2, this.enabledResolved = true, this.publishIfChanged()) : this.scheduleIndeterminateRetry());
    }
    scheduleIndeterminateRetry() {
      if (this.retryPending) return;
      if (void 0 === this.deps.getStoreBase()) return void (this.retryAttempts = 0);
      const e2 = N[Math.min(this.retryAttempts, N.length - 1)];
      this.retryAttempts += 1, this.retryPending = true, this.deps.scheduleRetry(() => (this.retryPending = false, this.refreshGate()), e2);
    }
    publishIfChanged() {
      this.publishTargetDirsIfChanged(), this.publishRootsIfChanged(), this.enabledResolved && this.deps.persist?.({ enabled: this.enabled, mountKeys: [...this.mountKeysByAlias] });
    }
    publishTargetDirsIfChanged() {
      const e2 = this.targetDirs();
      if (!E(e2, this.publishedTargetDirs)) {
        this.publishedTargetDirs = e2;
        for (const e3 of this.targetDirsListeners) try {
          e3();
        } catch (e4) {
          this.deps.log(`Agent store skills target listener failed: ${I(e4)}`);
        }
      }
    }
    publishRootsIfChanged() {
      const e2 = this.get();
      if (!E(e2, this.published)) {
        this.published = e2;
        for (const t2 of e2) this.ensureSkillsDirExists(t2);
        this.deps.log(`Agent store skills roots: count=${e2.length} enabled=${this.enabled ? "on" : "off"} user=${this.mountKeysByAlias.get("user") ?? "<none>"}`);
        for (const e3 of this.listeners) try {
          e3();
        } catch (e4) {
          this.deps.log(`Agent store skills root listener failed: ${I(e4)}`);
        }
      }
    }
    ensureSkillsDirExists(e2) {
      try {
        this.deps.ensureDirectory(e2);
      } catch (e3) {
        this.deps.log(`Agent store skills dir could not be created: ${I(e3)}`);
      }
    }
  }({ resolveEnabled: function() {
    return (async function(e2) {
      try {
        return "object" == typeof (t2 = await e2.getEffectiveSettings()) && null !== t2 && true === t2.enabled;
      } catch (t3) {
        return void e2.log(`skills sync setting read failed: ${I(t3)}`);
      }
      var t2;
    })({ getEffectiveSettings: () => (0, g.UU)(h.DashboardService, w.cursor.connectTransport).getEffectiveUserAgentStoreSkillsSettings({}), log: Le });
  }, getStoreBase: () => ee, ensureDirectory: r.Ew, scheduleRetry: function(e2, t2) {
    setTimeout(() => {
      e2();
    }, t2).unref();
  }, log: Le, persist: (e2) => {
    void 0 !== we && void 0 !== Se && (function(e3, t2, n2, r2 = Date.now()) {
      if (void 0 === t2.authId) return Promise.resolve();
      const s2 = { authId: t2.authId, teamId: t2.teamId ?? null, enabled: n2.enabled, mountKeys: n2.mountKeys, writtenAt: r2 };
      return d = d.catch(() => {
      }).then(() => e3.update(i, s2)), d;
    })(we, Se, e2).then(void 0, (e3) => {
      Le(`Agent store skills roots cache write failed: ${I(e3)}`);
    });
  }