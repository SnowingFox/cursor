"use strict";
exports.id = 334, exports.ids = [334], exports.modules = { 7334: (e, t, n) => {
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
  } });
  let Ke, Ne, Ee = false, Fe = true, He = 0, xe = 0, Be = Promise.resolve();
  const Ge = /* @__PURE__ */ new Map();
  function je(e2, t2, n2) {
    De.set(t2, n2), "user" === n2.alias && _e.settle(n2.filesDir), e2.appendLine(`[cursor-agent-host] mount alias add kind=${n2.kind} mountKey=${t2} alias=${n2.alias}`);
  }
  function qe() {
    return void 0 !== ee && void 0 !== te;
  }
  function Oe() {
    void 0 !== ue && (clearTimeout(ue), ue = void 0);
    const e2 = le;
    le = void 0, e2?.();
  }
  function We(e2, t2, n2) {
    const r2 = oe;
    "stopping" === t2.kind && Oe(), "starting" === t2.kind ? (ke = false, "down" === r2.kind && "server_disabled" === r2.reason && (ye = r2.attempts)) : "up" === t2.kind ? ke = 0 === be.length : "down" === t2.kind && "server_disabled" !== t2.reason && (ye = void 0), oe = t2, e2.appendLine(`[cursor-agent-host] agent store harness ${(0, o.formatHarnessTransition)({ from: r2, to: t2, reason: n2 })}`), Ue(e2);
  }
  function ze() {
    void 0 !== ve && (clearTimeout(ve), ve = void 0);
  }
  function Ue(e2) {
    ze();
    const t2 = (0, o.harnessProbeDelayMs)({ phase: oe, now: Date.now(), config: Ae });
    if (void 0 === t2 || t2 <= 0 || void 0 === pe) return;
    ve = setTimeout(() => {
      ve = void 0, Xe(e2);
    }, Math.min(t2, 2147483647));
  }
  async function Xe(e2) {
    "down" === oe.kind && (Date.now() < oe.nextProbeAtMs ? Ue(e2) : void 0 !== pe && await _t(pe, e2, "probe_timer"));
  }
  function Je(e2) {
    "down" === oe.kind && ("touch" === e2 && (0, o.harnessTouchIsCoolingDown)({ phase: oe, now: Date.now(), config: Ae }) || void 0 !== pe && void 0 !== me && _t(pe, me, e2));
  }
  function Ve() {
    const e2 = ae;
    ae = [];
    for (const t2 of e2) t2.dispose();
  }
  function Qe(e2) {
    return "starting" !== oe.kind || ie !== e2;
  }
  function Ye() {
    return "stopping" === oe.kind || "down" === oe.kind && "extension_deactivate" === oe.reason;
  }
  function Ze() {
    w.window.showInformationMessage(Z);
  }
  async function et(e2) {
    try {
      const e3 = await w.cursor.getDynamicConfigValue(o.AGENT_STORE_SYNC_CLIENT_CONFIG_NAME);
      return (0, o.resolveAgentStoreSyncClientConfig)(e3 ?? void 0, "ide");
    } catch (t2) {
      return e2.appendLine(`[cursor-agent-host] Agent store sync config read failed, using defaults: ${I(t2)}`), (0, o.agentStoreSyncClientCodeDefaults)("ide");
    }
  }
  async function tt(e2) {
    const t2 = te, n2 = Te.mountKeys.get("user");
    return void 0 === t2 || void 0 === n2 ? "absent" : await t2.forceSyncPathsForConflictNotices({ mountKey: n2, absPaths: e2 });
  }
  function nt(e2) {
    const t2 = te, n2 = [...Te.mountKeys];
    Te.clearMountKeys();
    for (const [, e3] of n2) De.delete(e3);
    const r2 = Be.then(async () => {
      await Promise.allSettled(n2.map(async ([n3, r3]) => {
        void 0 !== t2 && await t2.unmountPrincipal(r3), e2.appendLine(`[cursor-agent-host] principal mount removed alias=${n3}`);
      }));
    });
    return Be = r2.catch(() => {
    }), r2;
  }
  function rt(e2) {
    He += 1, Fe = true, (function() {
      for (const e3 of Te.mountKeys.values()) De.delete(e3);
    })(), void 0 !== Ne && (clearTimeout(Ne), Ne = void 0), xe = 0;
    const t2 = nt(e2);
    Me(() => {
      t2.finally(() => {
        ct(e2);
      });
    });
  }
  function st(e2, t2) {
    var n2, r2;
    (n2 = t2, r2 = Se, n2?.authId !== r2?.authId || n2?.teamId !== r2?.teamId) && (Se = t2, Te.forgetResolution(), rt(e2), ot(t2), Me(() => {
      Te.refreshGate();
    }));
  }
  function ot(e2) {
    if (void 0 === we || void 0 === ee) return;
    const t2 = u(we, e2);
    void 0 !== t2 && (function(e3, t3) {
      const n2 = new Map(t3.mountKeys).get("user");
      if (void 0 === n2) return true;
      try {
        return true === y.statSync((0, r.yA)((0, r.WX)(e3, n2)), { throwIfNoEntry: false })?.isDirectory();
      } catch {
        return false;
      }
    })(ee, t2) && Te.restore(t2);
  }
  function it(e2, t2) {
    const n2 = /* @__PURE__ */ new Set([J, V]);
    for (const [r2, s2] of De) if (r2 !== t2) {
      if (s2.alias === e2) {
        const t3 = gt(`${e2}_mounted`, n2);
        De.set(r2, { ...s2, alias: t3 });
        continue;
      }
      n2.add(s2.alias);
    }
  }
  async function at(e2) {
    const t2 = He;
    if (!qe() || void 0 === ee || void 0 === te) return false;
    if (await Be, t2 !== He) return false;
    const n2 = await (async function(e3) {
      try {
        return await w.cursor.checkFeatureGate($) ? ["user", "team"] : await w.cursor.checkFeatureGate(R) ? ["user"] : [];
      } catch (t3) {
        return e3.appendLine(`[cursor-agent-host] Principal agent-store mount gate check failed, defaulting to disabled: ${String(t3)}`), [];
      }
    })(e2);
    if (0 === n2.length) return t2 !== He || await nt(e2), false;
    const s2 = await w.cursor.getUserId();
    if (t2 !== He) return false;
    if (void 0 === s2) return void 0 === w.cursor.getCursorAuthToken() || Fe ? await nt(e2) : e2.appendLine("[cursor-agent-host] principal mount refresh kept existing mounts because user lookup was unavailable"), void 0 !== w.cursor.getCursorAuthToken();
    const o2 = Se?.teamId ?? w.cursor.getTeamId(), i2 = new Map((function(e3) {
      const t3 = [];
      return e3.mountAliases.includes("user") && t3.push({ alias: "user", sourceId: (0, l._N)({ userId: e3.userId, teamId: e3.teamId }) }), void 0 !== e3.teamId && e3.mountAliases.includes("team") && t3.push({ alias: "team", sourceId: (0, l.Ko)(e3.teamId) }), t3;
    })({ userId: s2, teamId: o2, mountAliases: n2 }).map((e3) => [e3.alias, e3.sourceId])), a2 = [...Te.mountKeys].filter(([e3, t3]) => i2.get(e3) !== t3);
    for (const [e3, t3] of a2) Te.deleteMountKey(e3), De.delete(t3);
    if (await Promise.allSettled(a2.map(async ([, e3]) => {
      await te?.unmountPrincipal(e3);
    })), t2 !== He) return false;
    Fe = false;
    let d2 = false;
    for (const [n3, s3] of i2) {
      const { outcome: o3, reason: i3 } = await te.ensureMountedPrincipal({ sourceId: s3, alias: n3 });
      if (t2 !== He) return await te.unmountPrincipal(s3), false;
      "mounted" === o3 || "already-present" === o3 ? (it(n3, s3), Te.setMountKey(n3, s3), je(e2, s3, { alias: n3, filesDir: (0, r.f$)((0, r.WX)(ee, s3)), kind: "principal" })) : (e2.appendLine(`[cursor-agent-host] principal mount skipped alias=${n3} outcome=${o3} reason=${i3}`), d2 = true);
    }
    return d2;
  }
  function dt(e2) {
    if (void 0 !== Ne || (0, o.isHarnessInactive)(oe)) return;
    xe += 1;
    const t2 = Math.min(Y, Q * 2 ** Math.min(xe - 1, 4));
    Ne = setTimeout(() => {
      Ne = void 0, ct(e2);
    }, t2);
  }
  function ct(e2) {
    (0, o.isHarnessInactive)(oe) || (Ee = true, void 0 === Ke && (Ke = (async () => {
      for (; Ee; ) {
        Ee = false;
        let t2 = false;
        try {
          t2 = await at(e2);
        } catch (n2) {
          e2.appendLine(`[cursor-agent-host] principal mount refresh failed: ${I(n2)}`), Fe && await nt(e2), t2 = true;
        }
        t2 ? dt(e2) : (xe = 0, void 0 !== Ne && (clearTimeout(Ne), Ne = void 0));
      }
    })().finally(() => {
      Ke = void 0, Ee && ct(e2);
    })));
  }
  async function ut(e2) {
    return (async function(e3) {
      const t2 = await pt(e3);
      return "enabled" === t2;
    })(e2);
  }
  async function lt(e2) {
    try {
      return await w.cursor.checkFeatureGate(L);
    } catch (t2) {
      return e2.appendLine(`[cursor-agent-host] Agent store subagent inherit gate check failed, defaulting to disabled: ${String(t2)}`), false;
    }
  }
  async function ft(e2, t2) {
    if (Je("touch"), !await lt(e2) || !qe() || void 0 === ee) return { applied: false, inheritedSourceIds: [] };
    const n2 = t2.parentConversationId.trim(), s2 = t2.childConversationId.trim();
    if (0 === n2.length || 0 === s2.length || !(0, r.v8)(n2)) return { applied: false, inheritedSourceIds: [] };
    const o2 = /* @__PURE__ */ new Map();
    te?.ensureMounted(n2);
    const i2 = (0, r.f$)((0, r.WX)(ee, n2));
    try {
      (0, r.rs)(i2), o2.set(l._u, { alias: l._u, filesDir: i2, readOnly: false });
    } catch (t3) {
      e2.appendLine(`[cursor-agent-host] subagent inherit skip parent store: ${I(t3)}`);
    }
    if (0 === o2.size) return { applied: false, inheritedSourceIds: [] };
    const a2 = false !== t2.registerLocalShellMounts;
    return a2 && Ge.set(s2, o2), te?.noteInheritedConflictNoticeMounts(s2, [n2]), e2.appendLine(`[cursor-agent-host] subagent inherit applied child=${s2} parent=${n2} mounts=${o2.size} registerLocalShellMounts=${a2}`), { applied: true, inheritedSourceIds: [n2] };
  }
  function ht(e2, t2) {
    const n2 = t2.childConversationId.trim();
    if (0 === n2.length) return;
    const r2 = Ge.delete(n2);
    te?.clearInheritedConflictNoticeMounts(n2), r2 && e2.appendLine(`[cursor-agent-host] subagent inherit cleared child=${n2}`);
  }
  function gt(e2, t2) {
    return (0, o.allocateUniqueAgentStoreMountAlias)({ preferred: e2, usedAliases: t2 });
  }
  async function pt(e2) {
    try {
      return await w.cursor.checkFeatureGate(L) ? "enabled" : void 0 === await w.cursor.getAuthId() ? "unknown" : "disabled";
    } catch (t2) {
      return e2.appendLine(`[cursor-agent-host] Agent store sync gate check failed: ${String(t2)}`), "unknown";
    }
  }
  let mt = false;
  async function yt(e2) {
    try {
      mt = await w.cursor.checkFeatureGate(T);
    } catch (t2) {
      mt = false, e2.appendLine(`[cursor-agent-host] Agent store citation index tier gate check failed, defaulting to disabled: ${String(t2)}`);
    }
  }
  async function vt(e2, t2) {
    if (!await ut(e2) || !qe()) return t2.silent || Ze(), { mounted: false, reason: "disabled" };
    if (!(function(e3) {
      if ("object" != typeof e3 || null === e3 || Array.isArray(e3)) return false;
      const t3 = e3;
      return !(void 0 !== t3.input && "string" != typeof t3.input || void 0 !== t3.storeId && "string" != typeof t3.storeId || void 0 !== t3.shareId && "string" != typeof t3.shareId || void 0 !== t3.alias && "string" != typeof t3.alias || void 0 !== t3.silent && "boolean" != typeof t3.silent);
    })(t2)) return { mounted: false, reason: "invalid-mount" };
    const n2 = (0, r.j6)(t2);
    if (void 0 === n2) return { mounted: false, reason: "invalid-mount" };
    const s2 = "share" === n2.kind ? n2.shareId : n2.agentId, i2 = De.get(s2);
    if (void 0 !== i2) return { mounted: true, kind: i2.kind, mountKey: s2, storeId: "peer" === n2.kind ? n2.agentId : void 0, shareId: "share" === n2.kind ? n2.shareId : void 0, alias: i2.alias, filesDir: i2.filesDir, reason: "already-mounted" };
    const a2 = t2.alias?.trim(), d2 = (c2 = a2 && (0, o.isValidAgentStoreMountAlias)(a2) ? a2 : (0, o.defaultAgentStoreMountAlias)(n2.kind, s2), (0, o.allocateUniqueAgentStoreMountAlias)({ preferred: c2, usedAliases: /* @__PURE__ */ new Set([J, V, ...[...De.values()].map((e3) => e3.alias)]) }));
    var c2;
    if (void 0 === te || void 0 === ee) return t2.silent || Ze(), { mounted: false, kind: n2.kind, mountKey: s2, alias: d2, reason: "disabled" };
    const { outcome: u2 } = "share" === n2.kind ? await te.ensureMountedShare({ shareId: n2.shareId, alias: d2 }) : await te.ensureMountedPeer({ peerAgentId: n2.agentId, alias: d2 });
    if ("mounted" !== u2 && "already-present" !== u2) return { mounted: false, kind: n2.kind, mountKey: s2, storeId: "peer" === n2.kind ? n2.agentId : void 0, shareId: "share" === n2.kind ? n2.shareId : void 0, alias: d2, reason: "mount-not-started" };
    const l2 = (0, r.f$)((0, r.WX)(ee, s2));
    return je(e2, s2, { alias: d2, filesDir: l2, kind: n2.kind }), t2.silent || w.window.showInformationMessage(`Mounted ${n2.kind} ${s2} as ${d2}`), { mounted: true, kind: n2.kind, mountKey: s2, storeId: "peer" === n2.kind ? n2.agentId : void 0, shareId: "share" === n2.kind ? n2.shareId : void 0, alias: d2, filesDir: l2 };
  }
  let wt = `${process.pid}-${(0, m.randomUUID)()}`;
  const St = /* @__PURE__ */ new Map(), It = { getHarness: () => ee, getController: () => te, getPrincipalMountKeys: () => Te.mountKeys, isCitationIndexTierEnabled: () => mt, isHarnessSettling: function() {
    return !Ye() && (void 0 !== ce || !(0, o.isHarnessInactive)(oe) && Ie > 0);
  }, get windowId() {
    return wt;
  }, handoutPins: St, warn: (e2) => Le(e2), noteLazySelfStore: (e2, t2) => {
    te?.noteDeferredLocalStore(e2, "prompt_inventory"), Kt(e2, t2);
  }, releaseLazySelfWatch: (e2) => {
    Tt(e2);
  } }, bt = U(It), kt = (function(e2) {
    const t2 = U(e2);
    return async (n2) => {
      if (void 0 === n2 || "string" != typeof n2.agentId || "string" != typeof n2.relPath) return { outcome: "invalid" };
      let r2;
      try {
        r2 = (0, o.normalizeRelPath)(n2.relPath);
      } catch {
        return { outcome: "invalid" };
      }
      const s2 = await t2({ agentId: n2.agentId, mount: "self" }), i2 = s2?.scopes.find((e3) => "agent" === e3.scope)?.path, a2 = e2.getController();
      if (void 0 === i2 || void 0 === a2) return { outcome: "absent" };
      if ("lazy" === a2.mountPolicy?.()) {
        if ("absent" === await a2.prepareExplicitSelfSync(n2.agentId, "explicit_sync", { openEmpty: true })) return { outcome: "absent" };
      } else {
        const { outcome: e3 } = await a2.ensureMountedSelfAwaited(n2.agentId);
        if ("mounted" !== e3 && "already-present" !== e3) return { outcome: "absent" };
      }
      return { outcome: await a2.forceSyncPathForConflictNotices({ mountKey: n2.agentId, absPath: v.join(i2, r2) }) };
    };
  })(It), At = (Pt = It, async (e2) => {
    if (void 0 === e2 || "string" != typeof e2.agentId || true !== e2.isProjectStore || !Array.isArray(e2.relPaths) || 0 === e2.relPaths.length || e2.relPaths.length > f.d1) return { outcome: "invalid", pushed: 0, pulled: 0 };
    const t2 = [];
    for (const n3 of e2.relPaths) {
      if ("string" != typeof n3) return { outcome: "invalid", pushed: 0, pulled: 0 };
      try {
        t2.push((0, o.normalizeRelPath)(n3));
      } catch {
        return { outcome: "invalid", pushed: 0, pulled: 0 };
      }
    }
    if (void 0 === Pt.getHarness()) return X;
    if (void 0 === O(Pt, e2.agentId)) return X;
    const n2 = Pt.getController();
    if (void 0 === n2) return X;
    let r2;
    try {
      r2 = await n2.refreshPeerPaths({ peerAgentId: e2.agentId, relPaths: t2, isProjectStore: true });
    } catch {
      return { outcome: "error", pushed: 0, pulled: 0 };
    }
    switch (r2.kind) {
      case "ran":
        return { outcome: r2.errors > 0 ? "error" : "refreshed", pushed: r2.pushed, pulled: r2.pulled };
      case "holder-owns-fetch":
        return { outcome: "passive", pushed: 0, pulled: 0 };
      case "throttled":
        return { outcome: "throttled", pushed: 0, pulled: 0 };
      case "unavailable":
        return X;
      case "failed":
        return { outcome: "error", pushed: 0, pulled: 0 };
    }
  });
  var Pt;
  async function Mt(e2, t2, n2, i2) {
    pe = e2, me = t2, void 0 !== i2?.whenProviderRegistered && (Pe = i2.whenProviderRegistered), we = e2.globalState, e2.subscriptions.push(w.commands.registerCommand(f._4, (e3) => void 0 === e3 ? Promise.resolve({ mounted: false, reason: "invalid-mount" }) : vt(t2, e3)), w.commands.registerCommand(f.kJ, (e3) => (function(e4) {
      if (void 0 === ee) return [];
      const t3 = new Set([...De.values()].map((e5) => e5.alias)), n3 = [], s2 = /* @__PURE__ */ new Set();
      for (const i4 of e4?.storeIds ?? []) {
        const e5 = i4.trim();
        if (!(0, r.Y6)(e5) && !(0, r.v8)(e5) || s2.has(e5)) continue;
        s2.add(e5);
        const a3 = De.get(e5), d2 = a3?.alias ?? gt((0, o.defaultAgentStoreMountAlias)("peer", e5), t3), c2 = a3?.filesDir ?? (0, r.f$)((0, r.WX)(ee, e5));
        n3.push({ kind: "mine", storeId: e5, alias: d2, filesDir: c2 });
      }
      const i3 = /* @__PURE__ */ new Set();
      for (const s3 of e4?.shareIds ?? []) {
        const e5 = s3.trim();
        if (!(0, r.A8)(e5) || i3.has(e5)) continue;
        i3.add(e5);
        const a3 = De.get(e5), d2 = a3?.alias ?? gt((0, o.defaultAgentStoreMountAlias)("share", e5), t3), c2 = a3?.filesDir ?? (0, r.f$)((0, r.WX)(ee, e5));
        n3.push({ kind: "shared", shareId: e5, alias: d2, filesDir: c2 });
      }
      return n3;
    })(e3)), w.commands.registerCommand(f.$P, () => Te.get()), w.commands.registerCommand(f.Ak, () => Te.targetDirs()), w.commands.registerCommand(f.cX, () => Te.refreshGate()), w.commands.registerCommand(f.P9, async (e3) => {
      Je("touch");
      const t3 = await bt(e3);
      if ("peer" === e3?.mount) {
        const n3 = t3?.scopes.find((e4) => "agent" === e4.scope)?.path;
        void 0 === n3 ? Ce.delete(e3.agentId) : Ce.set(e3.agentId, n3);
      }
      return t3;
    }), w.commands.registerCommand(f.OT, (e3) => kt(e3)), w.commands.registerCommand(f.Ml, (e3) => At(e3)), w.commands.registerCommand(f.H8, (e3) => void 0 === e3 || 0 === e3.conversationId.trim().length ? { stores: [] } : (function(e4, t3) {
      if (!ee) return { stores: [] };
      const n3 = e4.trim();
      try {
        (0, r._b)(n3);
      } catch {
        return { stores: [] };
      }
      const s2 = (e5, t4) => {
        try {
          return (0, r.rs)(e5), true;
        } catch (e6) {
          return ge?.appendLine(`[cursor-agent-host] omitting ${t4} from prompt inventory: ${I(e6)}`), false;
        }
      };
      let o2 = Nt(n3, "prompt_inventory", true === t3?.resume);
      void 0 === o2 || s2(o2, `self mount ${n3}`) || (o2 = void 0);
      const i3 = F(Ge.get(n3)?.values() ?? [], (e5) => s2(e5.filesDir, `inherited mount alias ${e5.alias}`));
      return { stores: H({ conversationId: n3, selfFilesDir: o2, registry: F(De.values(), (e5) => s2(e5.filesDir, `mount alias ${e5.alias}`)), inherited: i3 }) };
    })(e3.conversationId, { resume: true === e3.resume })), w.commands.registerCommand(f.oP, (e3) => ft(t2, e3)), w.commands.registerCommand(f.Bi, (e3) => ht(t2, e3)), w.commands.registerCommand(f.rs, (e3) => (async function(e4, t3) {
      if (!await lt(e4) || !qe()) return;
      const n3 = /* @__PURE__ */ new Set();
      for (const s2 of t3.agentIds) {
        const t4 = s2.trim();
        if (0 === t4.length || n3.has(t4) || !(0, r.v8)(t4)) continue;
        n3.add(t4);
        const o2 = await te?.forceSyncMountedIfPresent(t4);
        if ("synced" === o2?.kind) {
          const { summary: t5 } = o2;
          e4.appendLine(`[cursor-agent-host] subagent-pre-cloud-sync mounted done: pushed=${t5.filesPushed} pulled=${t5.filesPulled} skipped=${t5.filesSkipped} refusals=${t5.refusals} errors=${t5.errors.length} (${t5.durationMs}ms)`);
          for (const n4 of t5.errors) e4.appendLine(`[cursor-agent-host]   error ${n4.code} on ${n4.relPath ?? "<unknown>"}: ${I(n4.message)}`);
          continue;
        }
        "mounted-no-summary" !== o2?.kind ? e4.appendLine(`[cursor-agent-host] subagent-pre-cloud-sync skipped unmounted store ${t4}`) : e4.appendLine(`[cursor-agent-host] subagent-pre-cloud-sync mounted failed without summary for ${t4}`);
      }
    })(t2, e3)));
    const a2 = { applySubagentStoreMounts: async (e3) => {
      try {
        await ft(t2, { parentConversationId: e3.parentStoreId, childConversationId: e3.childStoreId });
      } catch (e4) {
        t2.appendLine(`[cursor-agent-host] local subagent store mount apply failed: ${I(e4)}`);
      }
    }, clearSubagentStoreMounts: async (e3) => {
      try {
        ht(t2, { childConversationId: e3.childStoreId });
      } catch (e4) {
        t2.appendLine(`[cursor-agent-host] local subagent store mount clear failed: ${I(e4)}`);
      }
    } };
    !(function(e3, t3) {
      const n3 = [], r2 = /* @__PURE__ */ new Set();
      for (; ; ) {
        const s2 = t3.getActive();
        if (void 0 === s2 || s2 === e3) break;
        if (r2.has(s2)) break;
        r2.add(s2), t3.unregister(s2), n3.push(s2);
      }
      t3.register(e3);
      for (const e4 of n3) t3.register(e4);
    })(a2, { getActive: s.ux, register: s.R6, unregister: s.gR }), n2.push(async () => {
      (0, s.gR)(a2), await Rt(t2, { reason: "extension_deactivate" }), ze(), pe = void 0, me = void 0;
    }), "down" === oe.kind && "extension_deactivate" === oe.reason || (e2.subscriptions.push(w.cursor.onDidChangeGates((n3) => {
      var r2;
      (void 0 === (r2 = n3.changedGates) || r2.includes(L)) && _t(e2, t2), (function(e3) {
        return void 0 === e3 || e3.includes(T);
      })(n3.changedGates) && yt(t2);
    })), await yt(t2), await _t(e2, t2));
  }
  const Dt = { enabled: "Agent store harness enabled by agent_store_sync_client", disabled: "Agent store harness disabled by agent_store_sync_client", unknown: "Agent store sync gate unknown; leaving the harness as it is" };
  function Ct(e2, t2) {
    he !== t2 && (he = t2, e2.appendLine(`[cursor-agent-host] ${Dt[t2]}`));
  }
  async function _t(e2, t2, n2 = "gate_change") {
    if ("starting" === oe.kind && void 0 !== ce) {
      if (await ce, !(0, o.shouldReconcileAfterParkedHarnessStart)({ coreReady: qe(), phase: oe })) return;
      return _t(e2, t2, n2);
    }
    if ("stopping" === oe.kind && void 0 !== fe) return await fe, _t(e2, t2, n2);
    if ("starting" === oe.kind || "stopping" === oe.kind) return;
    let s2;
    Ie++;
    try {
      s2 = await pt(t2);
    } finally {
      Ie--;
    }
    const i2 = he;
    if (Ct(t2, s2), "disabled" === s2 && "down" === oe.kind && void 0 !== ue && (Oe(), ie += 1), void 0 !== ce && (await ce, !(0, o.shouldReconcileAfterParkedHarnessStart)({ coreReady: qe(), phase: oe, gateState: s2 }))) return;
    Ae = (0, o.harnessRecoveryConfigFromClient)(await et(t2));
    switch ((0, o.planHarnessAction)({ phase: oe, gateState: s2, trigger: n2, now: Date.now(), config: Ae, previousGateState: i2 })) {
      case "start":
        return void await (async function(e3, t3, n3 = "gate_change", s3) {
          if (void 0 !== ce) {
            if (await ce, !(0, o.shouldReconcileAfterParkedHarnessStart)({ coreReady: qe(), phase: oe })) return;
            return _t(e3, t3, n3);
          }
          if (qe() || Ye()) return;
          const i3 = (async function(e4, t4, n4, s4) {
            const i4 = oe, a2 = ie;
            "down" === i4.kind && "gate_change" !== n4 && t4.appendLine(`[cursor-agent-host] agent store harness probe attempt=${i4.attempts + 1} (${n4})`);
            const d2 = "gate_change" === n4 ? (0, o.harnessRecoveryStartDelayMs)({ fromPhase: i4, jitterMs: Ae.startJitterMs }) : 0;
            if (d2 > 0) {
              if (await (function(e6) {
                return new Promise((t5) => {
                  le = t5, ue = setTimeout(() => {
                    ue = void 0, le = void 0, t5();
                  }, e6);
                });
              })(d2), qe() || Ye()) return;
              if (ie !== a2) return void queueMicrotask(() => {
                void 0 !== pe && ("down" !== oe.kind || "server_disabled" !== oe.reason || Rt(t4, { reason: "gate_off" }));
              });
              Ae = (0, o.harnessRecoveryConfigFromClient)(await et(t4));
              const e5 = Date.now(), r2 = (0, o.settleHarnessTriggerAfterJitter)({ trigger: n4, phase: oe, now: e5, config: Ae }), c3 = await pt(t4);
              Ct(t4, c3);
              const u2 = (0, o.planHarnessAction)({ phase: oe, gateState: c3, trigger: r2, now: e5, config: Ae, previousGateState: s4 });
              if (!(0, o.shouldContinueHarnessStartAfterJitter)({ action: u2, gateState: c3, trigger: r2, policy: Ae.policy, phase: oe, fromPhase: i4 })) return void queueMicrotask(() => {
                void 0 !== pe && ("stand-down" !== u2 ? _t(pe, t4, r2) : Rt(t4, { reason: "gate_off" }));
              });
            }
            if (Ye() || ie !== a2) return;
            ie += 1;
            const c2 = ie;
            We(t4, { kind: "starting" }, (0, o.harnessStartTransitionReason)(i4)), Fe = true, xe = 0, He += 1;
            try {
              const n5 = Promise.all([Promise.resolve(w.cursor.getAuthId()).catch(() => {
              }), Promise.resolve(w.cursor.getActiveTeamId()).catch(() => {
              })]).then(([e5, t5]) => ({ authId: e5, teamId: t5 })), s5 = (0, r.v5)({ urlProtocol: w.env.uriScheme });
              if (await (async function({ base: e5, tmpDirName: t5 }) {
                const n6 = v.join(e5, t5);
                await y.promises.mkdir(n6, { recursive: true, mode: r.qH });
                try {
                  await y.promises.chmod(n6, r.qH);
                } catch {
                }
              })({ base: s5.base, tmpDirName: s5.tmpDirName }), Qe(c2)) return;
              const a3 = await (async function(e5) {
                return (0, o.createAgentStoreSyncMetrics)({ sink: { increment(e6, t5, n6) {
                  w.cursor.metricsIncrement({ stat: e6, value: t5, tags: { ...n6 } });
                }, distribution(e6, t5, n6) {
                  w.cursor.metricsDistribution({ stat: e6, value: t5, tags: { ...n6 } });
                }, gauge(e6, t5, n6) {
                  w.cursor.metricsGauge({ stat: e6, value: t5, tags: { ...n6 } });
                } }, surface: "ide", extraTags: { os: process.platform }, pathHashSalt: await C(e5), service: await k(), breadcrumbs: { addBreadcrumb(e6) {
                  w.tracing.addBreadcrumb({ category: e6.category, level: e6.level, message: e6.message, data: e6.data });
                } } });
              })(e4);
              if (Qe(c2)) return;
              const d3 = await et(t4);
              if (Qe(c2)) return;
              const u2 = await n5;
              if (Qe(c2)) return;
              const l2 = `${process.pid}-${(0, m.randomUUID)()}`, f2 = new M(s5, l2, t4, ({ mountKey: e5, mountKind: n6 }) => {
                if (De.delete(e5), "principal" !== n6) return;
                const r2 = Te.deleteMountKeyByValue(e5);
                t4.appendLine(`[cursor-agent-host] principal mount invalidated alias=${r2 ?? "<unknown>"}`), dt(t4);
              }, a3, d3, (e5, n6) => {
                te === f2 && Rt(t4, { reason: `server_disabled:${e5}`, retryAfterMs: n6?.retryAfterMs });
              });
              if (Qe(c2)) return void f2.dispose();
              if (wt = l2, ee = s5, ge = t4, te = f2, (function() {
                $t();
                const e5 = new o.AgentStoreConversationActivityTracker({ idleQuiesceMs: () => te?.idleQuiesceMs() ?? 0, setActivity: (e6, t5) => {
                  te?.setConversationActivity(e6, t5);
                }, quiesceSelfSessions: () => {
                  te?.quiesceIdleSelfSessions();
                }, schedule: (e6, t5) => {
                  const n6 = setTimeout(e6, t5);
                  return { dispose() {
                    clearTimeout(n6);
                  } };
                } });
                ne = e5, te?.setIdleQuiesceEnabledListener(() => {
                  const t5 = false !== w.window.state?.focused;
                  t5 && te?.releaseNewSelfSessionHold(), e5.noteWindowFocused(t5);
                }), re = (0, o.setAgentStoreConversationTurnListener)((t5, n6) => {
                  e5.noteTurn(t5, n6);
                }), se = w.window.onDidChangeWindowState((t5) => {
                  t5.focused && te?.releaseNewSelfSessionHold(), e5.noteWindowFocused(t5.focused);
                }), false === w.window.state?.focused && e5.noteWindowFocused(false);
              })(), t4.appendLine(`[cursor-agent-host] Agent store sync ready at ${v.join(s5.base, s5.tmpDirName)} (source=${s5.source}, ephemeral=${s5.ephemeralOnLogout}, uriScheme=${w.env.uriScheme})`), (0, o.isNonDefaultAgentStoreSyncClientConfig)(d3) && t4.appendLine(`[cursor-agent-host] Agent store sync client config (non-default): ${JSON.stringify(d3)}`), Qe(c2)) return;
              if (Se = u2, ot(u2), ae.push(w.cursor.onDidChangeCursorAuthToken((e5) => {
                const n6 = (function(e6) {
                  const t5 = e6?.split(".")[1];
                  if (void 0 !== t5) try {
                    const e7 = JSON.parse(Buffer.from(t5, "base64url").toString("utf8")), n7 = "object" == typeof e7 && null !== e7 ? e7.sub : void 0;
                    return "string" == typeof n7 && n7.length > 0 ? n7 : void 0;
                  } catch {
                    return;
                  }
                })(e5);
                void 0 === n6 && void 0 === Se?.authId || st(t4, { authId: n6, teamId: Se?.teamId ?? w.cursor.getTeamId() });
              }), w.cursor.onDidChangeActiveTeamId((e5) => {
                st(t4, { authId: Se?.authId, teamId: e5 });
              }), w.cursor.onDidChangeGates((e5) => {
                var n6;
                (void 0 === (n6 = e5.changedGates) || n6.includes($) || n6.includes(R)) && Me(() => {
                  ct(t4);
                });
              })), Qe(c2)) return;
              We(t4, { kind: "up" }, "down" === i4.kind ? (0, o.harnessStartTransitionReason)(i4) : "started"), Me(() => {
                "up" === oe.kind && ie === c2 && (Te.refreshGate(), ct(t4), (async function(e5, t5) {
                  const n6 = be;
                  if (0 === n6.length) return void (ie === t5 && (ke = true));
                  e5.appendLine(`[cursor-agent-host] agent store harness replaying ${n6.length} remembered mount(s)`);
                  const r2 = (0, o.rememberedMountsOldestFirst)(n6);
                  let s6 = true;
                  for (let e6 = 0; e6 < r2.length; e6++) {
                    const n7 = r2[e6];
                    if (void 0 === n7) continue;
                    if ("up" !== oe.kind || void 0 === te || ie !== t5) return;
                    const i5 = (0, o.rememberedMountReplay)(n7);
                    if (void 0 === i5) continue;
                    const a4 = (0, o.harnessRecoveryStartDelayMs)({ fromPhase: (0, o.createDownPhase)({ reason: "gate_off", since: 0 }), jitterMs: Ae.startJitterMs });
                    if (a4 > 0 && await new Promise((e7) => setTimeout(e7, a4)), "up" !== oe.kind || void 0 === te || ie !== t5) return;
                    const d4 = "self" === i5.kind ? await te.ensureMountedSelfAwaited(i5.agentId) : "peer" === i5.kind ? await te.ensureMountedPeer({ peerAgentId: i5.agentId, ...void 0 !== i5.alias ? { alias: i5.alias } : {}, ...true === i5.isProjectStore ? { isProjectStore: true } : {} }) : await te.ensureMountedShare({ shareId: i5.shareId, ...void 0 !== i5.alias ? { alias: i5.alias } : {} });
                    if ("mounted" === d4.outcome || "already-present" === d4.outcome) {
                      if ("up" !== oe.kind || void 0 === te || ie !== t5) return;
                    } else s6 = false;
                  }
                  ie === t5 && s6 && (be = [], ke = true);
                })(t4, c2));
              });
            } catch (e5) {
              if (t4.appendLine(`[cursor-agent-host] Failed to resolve agent store base: ${String(e5)}`), "starting" === oe.kind && ie === c2) {
                const e6 = te;
                te = void 0, ee = void 0, ge = void 0, Ve(), void 0 !== e6 && e6.dispose(), We(t4, (0, o.startFailedHarnessPhase)({ previous: i4, now: Date.now(), config: Ae }), "start_failed");
              }
            }
          })(e3, t3, n3, s3);
          ce = i3;
          try {
            await i3;
          } finally {
            ce = void 0;
          }
        })(e2, t2, n2, i2);
      case "stand-down":
        return void await Rt(t2, { reason: "gate_off" });
      case "none":
        return (0, o.shouldPromoteDueNoneToProbe)({ trigger: n2, phase: oe, now: Date.now(), config: Ae }) ? void queueMicrotask(() => {
          Xe(t2);
        }) : void Ue(t2);
    }
  }
  function $t() {
    te?.setIdleQuiesceEnabledListener(void 0), se?.dispose(), se = void 0, re?.(), re = void 0, ne?.dispose(), ne = void 0;
  }
  async function Rt(e2, t2) {
    const n2 = (0, o.classifyHarnessDownReason)(t2.reason), r2 = "extension_deactivate" !== n2;
    if (void 0 !== fe && await fe, r2 && (0, o.isHarnessLatchedDown)(oe) && void 0 === te && void 0 === ee) {
      const r3 = (0, o.remintAlreadyDownPhase)({ phase: oe, downReason: n2, now: Date.now(), config: Ae, retryAfterMs: t2.retryAfterMs, previousDownAttempts: ye });
      return Oe(), ie += 1, void 0 !== r3 && (Oe(), ie += 1, We(e2, r3, t2.reason)), void await W(It);
    }
    if (void 0 !== fe) return;
    const s2 = (async function(e3, t3, n3, r3) {
      try {
        ie += 1, We(e3, { kind: "stopping", next: n3 }, t3), Ve(), Ee = false, void 0 !== Ne && (clearTimeout(Ne), Ne = void 0), await Ke?.catch(() => {
        }), await Be, Ae = (0, o.harnessRecoveryConfigFromClient)(await et(e3)), $t();
        const s3 = te;
        "extension_deactivate" === n3 || "latch" === Ae.policy ? (be = [], ke = true) : be = (0, o.snapshotRememberedHarnessMounts)({ live: s3?.listMounts() ?? [], pending: be, replayComplete: ke, max: Ae.rememberedMountsMax }), te = void 0, ee = void 0, ge = void 0, Ce.clear(), Ge.clear(), (function() {
          for (const e4 of [...de.keys()]) Tt(e4);
        })(), Te.forgetResolution(), Te.clearMountKeys();
        for (const [e4, t4] of De) "principal" === t4.kind && De.delete(e4);
        if (e3.appendLine(`[cursor-agent-host] Agent store harness stood down (${t3})`), void 0 !== s3) try {
          await s3.dispose();
        } catch (t4) {
          e3.appendLine(`[cursor-agent-host] controller dispose failed: ${String(t4)}`);
        }
        We(e3, (0, o.createDownPhase)({ reason: n3, since: Date.now(), attempts: (0, o.nextDownAttempts)({ reason: n3, previousDownAttempts: ye }), retryAfterMs: r3, config: Ae }), t3);
      } finally {
        await W(It);
      }
    })(e2, t2.reason, n2, t2.retryAfterMs);
    fe = s2;
    try {
      await s2;
    } finally {
      fe = void 0;
    }
  }
  function Lt() {
    return { ensureFilesDir: (e2) => O(It, e2), requestMount: (e2, t2) => {
      const n2 = () => {
        true !== te?.hasSelfMount(e2) && true !== te?.hasNonSelfMount(e2) || Tt(e2);
      };
      let r2;
      "write_detected" === t2 ? r2 = te?.requestDeferredSelfMount(e2, t2) : "resume" === t2 ? r2 = te?.openAdmittedLazySelf(e2, t2) : (te?.recordMountRequested(e2, t2), te?.ensureMounted(e2)), n2(), void 0 !== r2 && r2.then(n2, n2);
    } };
  }
  function Tt(e2) {
    const t2 = de.get(e2);
    if (void 0 !== t2) {
      de.delete(e2);
      try {
        t2.close();
      } catch {
      }
    }
  }
  function Kt(e2, t2) {
    if (de.has(e2) || true === te?.hasSelfMount(e2) || true === te?.hasNonSelfMount(e2)) return;
    const n2 = (function(e3, t3, n3 = y.watch) {
      try {
        return n3(e3, { recursive: true }, t3);
      } catch {
        try {
          return n3(e3, t3);
        } catch {
          return;
        }
      }
    })(t2, () => {
      !(function(e3, t3) {
        Je("touch"), B(Lt(), e3, t3);
      })(e2, "write_detected");
    });
    void 0 !== n2 && (de.set(e2, n2), n2.on("error", () => {
      Tt(e2);
    }));
  }
  function Nt(e2, t2, n2) {
    if (void 0 === te) return Et(e2);
    const r2 = (0, o.admitLocalAgentStore)({ agentId: e2, policy: te.mountPolicy(), reason: t2, indexPopulated: te.localStoreIndexIsPopulated(e2), resumeRequested: n2 });
    if ("mount" === r2.action) {
      "resume" !== r2.reason && Tt(e2);
      const t3 = (function(e3, t4) {
        return Je("touch"), (function(e4, t5, n3) {
          const r3 = x(e4, t5);
          if (void 0 !== r3) return B(e4, t5, n3), r3;
        })(Lt(), e3, t4);
      })(e2, r2.reason);
      return "resume" === r2.reason && void 0 !== t3 && true !== te.hasSelfMount(e2) && true !== te.hasNonSelfMount(e2) && Kt(e2, t3), t3;
    }
    const s2 = Et(e2);
    return void 0 !== s2 ? (te?.noteDeferredLocalStore(e2, t2), Kt(e2, s2), s2) : void 0;
  }
  function Et(e2) {
    return Je("touch"), x(Lt(), e2);
  }
  function Ft(e2 = () => true, t2) {
    return { listJournalRefs: () => {
      if (!e2()) return [];
      const n2 = "function" == typeof t2 ? t2() : t2, r2 = n2?.trim();
      return void 0 === r2 || 0 === r2.length ? [] : te?.listConflictJournalRefs(r2) ?? [];
    } };
  }
  function Ht(e2 = () => true, t2) {
    return { wakeForWrittenPath: (n2) => {
      e2() && te?.wakeForWrittenPath({ writtenPath: n2, basePaths: t2?.() });
    }, wakeExposedMounts: () => {
      e2() && te?.wakeAllRunningSessions();
    } };
  }
  function xt(e2 = () => true, t2) {
    return async (n2) => {
      const r2 = te;
      if (void 0 === r2 || !e2()) return "not_store_path";
      const s2 = t2?.(), o2 = r2.resolveConflictNoticeMountKeyForPath({ absPath: n2, basePaths: s2 });
      if (void 0 === o2) return "not_store_path";
      const i2 = await r2.forceSyncPathForConflictNotices({ mountKey: o2, absPath: n2, basePaths: s2 });
      return "synced-path" === i2 ? "synced_path" : i2;
    };
  }
  function Bt() {
    return () => te?.writeBarrierTimeoutMs() ?? o.AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.writeBarrierTimeoutMs;
  }
  function Gt() {
    return (e2) => {
      te?.recordWriteBarrier(e2);
    };
  }
  function jt(e2 = () => true, t2) {
    return { listMounts: (t3) => e2() ? te?.listConflictNoticeMounts(t3) ?? [] : [], resolveMountKeyForPath: (e3) => te?.resolveConflictNoticeMountKeyForPath({ absPath: e3, basePaths: t2?.() }), resolveWrittenPathAbs: (e3) => te?.resolveConflictNoticeWrittenPath({ absPath: e3, basePaths: t2?.() }), isMountDirty: (e3) => te?.isConflictNoticeMountDirty(e3) ?? false, forceSyncMount: async (e3) => await te?.forceSyncForConflictNotices(e3) ?? "absent", forceSyncMountPath: async ({ mountKey: e3, absPath: n2, timeoutMs: r2 }) => await te?.forceSyncPathForConflictNotices({ mountKey: e3, absPath: n2, basePaths: t2?.(), timeoutMs: r2 }) ?? "absent" };
  }
  function qt(e2) {
    const t2 = /* @__PURE__ */ new Map();
    return (n2) => {
      if (!ee) return {};
      const s2 = n2.get(p.zN), o2 = (0, _.L)(n2, s2?.conversationId), i2 = o2 ?? e2.sessionId;
      try {
        (0, r._b)(i2);
      } catch {
        return {};
      }
      let a2 = t2.get(i2);
      if (void 0 === a2 || !St.has(i2)) {
        t2.delete(i2);
        const e3 = void 0 !== te;
        if (a2 = Nt(i2, "env_provider", true === s2?.resumeAgentStore), void 0 === a2) return {};
        e3 && t2.set(i2, a2);
      }
      const d2 = { [l.jO]: a2 }, c2 = void 0 !== o2 && Ge.has(o2);
      return (De.size > 0 || c2) && void 0 !== ge && (d2[l.eX] = (function(e3, t3) {
        const n3 = /* @__PURE__ */ Object.create(null), s3 = void 0 !== t3 ? Ge.get(t3) : void 0;
        if (void 0 !== s3) for (const t4 of s3.values()) {
          try {
            (0, r.rs)(t4.filesDir);
          } catch (n4) {
            e3.appendLine(`[cursor-agent-host] omitting inherited mount alias ${t4.alias} from env: ${I(n4)}`);
            continue;
          }
          n3[t4.alias] = { path: t4.filesDir, readOnly: t4.readOnly };
        }
        for (const [t4, s4] of De) if (void 0 === n3[s4.alias]) {
          try {
            (0, r.rs)(s4.filesDir);
          } catch (n4) {
            e3.appendLine(`[cursor-agent-host] omitting mount alias ${s4.alias} (${t4}) from env: ${I(n4)}`);
            continue;
          }
          n3[s4.alias] = { path: s4.filesDir, readOnly: "share" === s4.kind };
        }
        return JSON.stringify(n3);
      })(ge, o2)), d2;
    };
  }
} };
