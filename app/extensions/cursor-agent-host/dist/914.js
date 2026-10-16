"use strict";
exports.id = 914, exports.ids = [914], exports.modules = { 41914: (e, t, n) => {
  n.d(t, { createDaemonAgentHostProvider: () => m });
  var s = n(91398), a = n(60525), o = n(85113);
  function i(e2) {
    return void 0 === (t2 = e2.request.workspacePathsFilter) || 0 === t2.length || t2.every((e3) => 0 === e3.trim().length) ? (function(e3) {
      const t3 = (n2 = e3.workspacePaths, [...n2].filter((e4) => e4.trim().length > 0));
      var n2;
      if (true === e3.isGlassRoot && 0 === t3.length && t3.push(e3.clientInstanceId), 0 === t3.length) throw new Error("agent-host: workspace_paths_filter must be non-empty (daemon fail-closed)");
      return new a.cK({ workspacePathsFilter: t3, includeChildren: e3.includeChildren, parentSessionId: e3.parentSessionId, limit: e3.limit, ownerClientInstanceId: true === e3.isGlassRoot ? e3.clientInstanceId : void 0, includeOwnerUnrootedSessions: true === e3.isGlassRoot || void 0 });
    })({ workspacePaths: e2.windowWorkspacePaths, clientInstanceId: e2.clientInstanceId, isGlassRoot: e2.isGlassRoot, includeChildren: e2.request.includeChildren, parentSessionId: (e2.request.parentSessionId ?? "").length > 0 ? e2.request.parentSessionId : void 0, limit: e2.request.limit }) : true === e2.isGlassRoot && 0 === (e2.request.ownerClientInstanceId ?? "").length ? new a.cK({ includeChildren: e2.request.includeChildren, parentSessionId: e2.request.parentSessionId, limit: e2.request.limit, workspacePathsFilter: e2.request.workspacePathsFilter, matchAnyWorkspaceRoot: e2.request.matchAnyWorkspaceRoot, ownerClientInstanceId: e2.clientInstanceId, includeOwnerUnrootedSessions: true }) : e2.request;
    var t2;
  }
  var r = n(13574);
  function c(e2) {
    switch (e2) {
      case "unrestricted":
        return o.pB.UNRESTRICTED;
      case "allowlist":
        return o.pB.ALLOWLIST;
      case "ask-every-time":
        return o.pB.ASK_EVERY_TIME;
      default:
        return o.pB.UNSPECIFIED;
    }
  }
  function l(e2) {
    switch (e2) {
      case "system":
        return o.wb.SYSTEM;
      case "workspace":
        return o.wb.WORKSPACE;
      default:
        return;
    }
  }
  function d(e2) {
    if (void 0 === e2) return;
    if ("insecure_none" === e2.type) return new r.Mw({ type: r.vc.INSECURE_NONE, ...void 0 === e2.captureDenies ? {} : { captureDenies: e2.captureDenies }, ...void 0 === e2.debugOutputDir ? {} : { debugOutputDir: e2.debugOutputDir } });
    const t2 = (function(e3) {
      switch (e3) {
        case "workspace":
          return r.Sz.WORKSPACE;
        case "system":
          return r.Sz.SYSTEM;
        default:
          return r.Sz.UNSPECIFIED;
      }
    })(e2.readBoundary), n2 = { networkAccess: e2.networkAccess, readBoundary: t2, ...void 0 === e2.captureDenies ? {} : { captureDenies: e2.captureDenies }, ...void 0 === e2.debugOutputDir ? {} : { debugOutputDir: e2.debugOutputDir }, ...void 0 === e2.skipStatsigDefaults ? {} : { skipStatsigDefaults: e2.skipStatsigDefaults } };
    return "workspace_readonly" === e2.type ? new r.Mw({ type: r.vc.WORKSPACE_READONLY, additionalReadonlyPaths: [...e2.additionalReadonlyPaths ?? []], additionalReadPaths: [...e2.additionalReadPaths ?? []], ...n2 }) : new r.Mw({ type: r.vc.WORKSPACE_READWRITE, additionalReadwritePaths: [...e2.additionalReadwritePaths ?? []], additionalReadonlyPaths: [...e2.additionalReadonlyPaths ?? []], additionalReadPaths: [...e2.additionalReadPaths ?? []], ...void 0 === e2.disableTmpWrite ? {} : { disableTmpWrite: e2.disableTmpWrite }, ...n2 });
  }
  function u(e2) {
    return new o.Xn({ allow: [...e2.allow], deny: [...e2.deny], approvalMode: c(e2.approvalMode), readBoundary: l(e2.readBoundary), userSandboxDataFolderName: e2.userSandboxDataFolderName, userConfiguredPolicy: d(e2.userConfiguredPolicy), dashboardTerminalAllowlistOverriddenByPermissionsFile: e2.dashboardTerminalAllowlistOverriddenByPermissionsFile, ...void 0 === e2.smartAllowlistEnabled ? {} : { smartAllowlistEnabled: e2.smartAllowlistEnabled }, ...void 0 === e2.promptWorkspaceWrites ? {} : { promptWorkspaceWrites: e2.promptWorkspaceWrites }, smartAllowlistDenylist: [...e2.smartAllowlistDenylist ?? []] });
  }
  var w = n(69584);
  class p extends Error {
    constructor(e2) {
      super(`agent-host: catalogHydrate but HasSession is false for ${e2}; do not proto-Create`), this.name = "HydrateMissError";
    }
  }
  async function h(e2) {
    const t2 = (function(e3) {
      return e3.exists ? { action: "rebind" } : e3.catalogHydrate ? { action: "hydrate-miss" } : { action: "create" };
    })({ exists: (await e2.client.hasSession(new a.bq({ sessionId: e2.input.sessionId }))).exists, catalogHydrate: true === e2.input.catalogHydrate });
    if ("rebind" === t2.action) return { action: "rebind" };
    if ("hydrate-miss" === t2.action) throw new p(e2.input.sessionId);
    return await e2.client.createSession((function(e3) {
      return new a.Hz({ sessionId: e3.input.sessionId, clientInstanceId: e3.clientInstanceId, sessionOptions: { workspacePaths: [...e3.input.workspacePaths], ...void 0 === e3.input.isGlassRoot ? {} : { isGlassRoot: e3.input.isGlassRoot }, ...void 0 === e3.input.worktreeMainPath ? {} : { worktreeMainPath: e3.input.worktreeMainPath }, ...void 0 === e3.input.owningProject ? {} : { owningProject: { projectAgentId: e3.input.owningProject.projectAgentId, ...void 0 === e3.input.owningProject.projectName ? {} : { projectName: e3.input.owningProject.projectName } } }, ...true === e3.input.hostedMcpRoutingEnabled ? { hostedMcpRoutingEnabled: true } : {} }, ...void 0 === e3.input.initialHistory ? {} : { initialHistory: w.Y9z.fromBinary(e3.input.initialHistory) } });
    })({ clientInstanceId: e2.clientInstanceId, input: e2.input })), { action: "create" };
  }
  const y = /* @__PURE__ */ new Set(["watchSessions", "watchSessionInteractions", "watchSessionBackgroundWork", "watchSessionTurnLifecycle", "watchAgentHostSessionShellOutput", "attachSession", "readFile", "openAgentHostSurfaceChannel"]);
  function I(e2) {
    let t2 = 0;
    const n2 = [], s2 = () => {
      const e3 = n2.splice(0);
      for (const t3 of e3) t3();
    }, a2 = () => {
      t2--;
    }, o2 = (e3) => {
      let a3;
      const o3 = (t2 > 0 ? Promise.resolve() : new Promise((e4) => {
        n2.push(e4), queueMicrotask(s2);
      })).then(() => {
        a3 = e3();
      });
      return { [Symbol.asyncIterator]() {
        let e4;
        return { next: async () => (await o3, e4 ??= a3[Symbol.asyncIterator](), e4.next()), return: async (t3) => (await o3, void 0 === e4?.return ? { done: true, value: void 0 } : e4.return(t3)), async throw(t3) {
          if (await o3, void 0 === e4?.throw) throw t3;
          return e4.throw(t3);
        } };
      } };
    };
    return new Proxy(e2, { get(e3, n3, i2) {
      const r2 = Reflect.get(e3, n3, i2);
      if ("function" != typeof r2) return r2;
      const c2 = r2.bind(e3);
      return y.has(String(n3)) ? (l2 = c2, (...e4) => o2(() => l2(...e4))) : /* @__PURE__ */ ((e4) => (...n4) => {
        t2++;
        try {
          const t3 = e4(...n4);
          return s2(), Promise.resolve(t3).finally(() => a2());
        } catch (e5) {
          throw a2(), e5;
        }
      })(c2);
      var l2;
    } });
  }
  function m(e2) {
    const t2 = I(e2.client), n2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map(), l2 = "rootWorkspace" === s.cursor.glassWorkspaceRole, d2 = () => {
      const t3 = e2.workspacePaths?.();
      return void 0 !== t3 && t3.length > 0 ? [...t3] : (s.workspace.workspaceFolders ?? []).map((e3) => e3.uri.fsPath);
    }, w2 = (t3) => (function(e3) {
      const t4 = i({ request: new a.cK({ workspacePathsFilter: e3.request.workspacePathsFilter, matchAnyWorkspaceRoot: e3.request.matchAnyWorkspaceRoot, ownerClientInstanceId: e3.request.ownerClientInstanceId, includeOwnerUnrootedSessions: e3.request.includeOwnerUnrootedSessions }), windowWorkspacePaths: e3.windowWorkspacePaths, clientInstanceId: e3.clientInstanceId, isGlassRoot: e3.isGlassRoot });
      return new a.N9({ workspacePathsFilter: t4.workspacePathsFilter, matchAnyWorkspaceRoot: t4.matchAnyWorkspaceRoot, ownerClientInstanceId: t4.ownerClientInstanceId, includeOwnerUnrootedSessions: t4.includeOwnerUnrootedSessions });
    })({ request: t3, windowWorkspacePaths: d2(), clientInstanceId: e2.clientInstanceId, isGlassRoot: l2 }), p2 = (n3) => {
      r2.get(n3.sessionId)?.dispose();
      const s2 = n3.onDidChangePermissions((s3) => {
        const a2 = (async (n4, s4) => {
          await t2.pushAgentHostSessionPermissions(new o.DL({ sessionId: n4, clientInstanceId: e2.clientInstanceId, permissions: u(s4) }));
        })(n3.sessionId, s3);
        c2.set(n3.sessionId, a2), a2.catch(() => {
        });
      });
      r2.set(n3.sessionId, s2);
    }, y2 = (e3) => {
      r2.get(e3)?.dispose(), r2.delete(e3), c2.delete(e3), n2.delete(e3);
    }, m2 = (t3) => ({ sessionId: t3.sessionId, workspacePaths: t3.workspacePaths, catalogHydrate: t3.catalogHydrate, isGlassRoot: t3.isGlassRoot, worktreeMainPath: t3.worktreeMainPath, owningProject: t3.owningProject, initialHistory: t3.initialHistory, hostedMcpRoutingEnabled: true === e2.hostedMcpRoutingEnabled?.() });
    return { sessionHandlers: n2, ...void 0 === e2.loop ? {} : { loop: e2.loop }, async createSession(s2) {
      n2.set(s2.sessionId, s2);
      try {
        await h({ client: t2, clientInstanceId: e2.clientInstanceId, input: m2(s2) });
      } catch (e3) {
        throw y2(s2.sessionId), e3;
      }
      return p2(s2), new a.R1().toBinary();
    }, async deleteSession(e3) {
      const n3 = a.mq.fromBinary(e3);
      return y2(n3.sessionId), (async function(e4) {
        const t3 = a.mq.fromBinary(e4.request);
        return (await e4.client.deleteSession(t3)).toBinary();
      })({ client: t2, request: e3 });
    }, async flushPermissionPush(e3) {
      await c2.get(e3);
    }, listSessions: async (n3) => (await t2.listSessions(((t3) => i({ request: t3, windowWorkspacePaths: d2(), clientInstanceId: e2.clientInstanceId, isGlassRoot: l2 }))(a.cK.fromBinary(n3)))).toBinary(), watchSessions: (e3, n3) => g(t2.watchSessions(w2(a.N9.fromBinary(e3)), { signal: k(n3) }), n3), sendMessage: async (e3) => (await t2.sendMessage(a.AY.fromBinary(e3))).toBinary(), sendAction: async (e3) => (await t2.sendAction(a.J6.fromBinary(e3))).toBinary(), interruptTurn: async (e3) => (await t2.interruptTurn(a.ty.fromBinary(e3))).toBinary(), cancelQueuedTurn: async (e3) => (await t2.cancelQueuedTurn(a.To.fromBinary(e3))).toBinary(), watchSessionInteractions: (e3, n3) => g(t2.watchSessionInteractions(a.X7.fromBinary(e3), { signal: k(n3) }), n3), watchSessionBackgroundWork: (e3, n3) => g(t2.watchSessionBackgroundWork(a.j$.fromBinary(e3), { signal: k(n3) }), n3), watchSessionTurnLifecycle: (e3, n3) => g(t2.watchSessionTurnLifecycle(a.X.fromBinary(e3), { signal: k(n3) }), n3), abortBackgroundWork: async (e3) => (await t2.abortBackgroundWork(a.c_.fromBinary(e3))).toBinary(), abortAllBackgroundWork: async (e3) => (await t2.abortAllBackgroundWork(a.vC.fromBinary(e3))).toBinary(), attachSession(n3, s2) {
      const o2 = a.EM.fromBinary(n3);
      return g(t2.attachSession(new a.EM({ sessionId: o2.sessionId, clientInstanceId: e2.clientInstanceId, lastEventId: o2.lastEventId, backgroundTaskCompletionsOnly: o2.backgroundTaskCompletionsOnly }), { signal: k(s2) }), s2);
    }, async setSessionTitle(e3) {
      await t2.setSessionTitle(new a.aq({ sessionId: e3.sessionId, title: e3.title }));
    }, getSessionBlobs: async (e3) => (await t2.getSessionBlobs(a.z4.fromBinary(e3))).toBinary(), async listWorkspaces(e3) {
      a.XO.fromBinary(e3);
      const t3 = await s.cursor.listAgentHostWorkspaceCatalog();
      return void 0 === t3 ? new a.LX().toBinary() : new a.LX({ workspaces: t3.map((e4) => new a.hq({ workspacePaths: [...e4.workspacePaths], ...void 0 === e4.worktreeMainPath ? {} : { worktreeMainPath: e4.worktreeMainPath }, ...void 0 === e4.displayPath ? {} : { displayPath: e4.displayPath } })) }).toBinary();
    }, async fetchPrivateInferenceCatalog() {
    } };
  }
  async function* g(e2, t2) {
    for await (const n2 of e2) {
      if (true === t2?.isCancellationRequested) return;
      yield n2.toBinary();
    }
  }
  function k(e2) {
    const t2 = new AbortController();
    return true === e2?.isCancellationRequested ? (t2.abort(), t2.signal) : (e2?.onCancellationRequested?.(() => t2.abort()), t2.signal);
  }
} };
