"use strict";
exports.id = 607, exports.ids = [607], exports.modules = { 13607: (n, e, t) => {
  t.d(e, { connectProductDaemon: () => z });
  var o = t(77598), a = t(91398);
  const i = "agentHost.clientInstanceId";
  async function s(n2, e2) {
    const t2 = (function(n3) {
      const e3 = void 0 === n3.nativeWindowId ? "unknown" : String(n3.nativeWindowId), t3 = n3.windowWorkspaceId?.trim() || "none";
      return `${i}.w${e3}.${n3.role}.${t3}`;
    })(e2 ?? { nativeWindowId: a.cursor.nativeWindowId, role: a.cursor.glassWorkspaceRole ?? "ide", windowWorkspaceId: a.cursor.windowWorkspaceId }), s2 = n2.get(t2);
    if ("string" == typeof s2 && s2.trim().length > 0) return s2.trim();
    const r2 = (0, o.randomUUID)();
    return await n2.update(t2, r2), r2;
  }
  var r = t(51455), d = t(76760), c = t(77030), l = t(60525), u = t(36038), h = t(85113);
  const p = { typeName: "agent.v1.AgentHostService", methods: { createSession: { name: "CreateSession", I: l.Hz, O: l.R1, kind: u.MethodKind.Unary }, forkSession: { name: "ForkSession", I: l.zF, O: l.BZ, kind: u.MethodKind.Unary }, listSessions: { name: "ListSessions", I: l.cK, O: l.Qk, kind: u.MethodKind.Unary }, hasSession: { name: "HasSession", I: l.bq, O: l.pI, kind: u.MethodKind.Unary }, watchSessions: { name: "WatchSessions", I: l.N9, O: l.cy, kind: u.MethodKind.ServerStreaming }, listWorkspaces: { name: "ListWorkspaces", I: l.XO, O: l.LX, kind: u.MethodKind.Unary }, listSkills: { name: "ListSkills", I: l.re, O: l.nP, kind: u.MethodKind.Unary }, sendMessage: { name: "SendMessage", I: l.AY, O: l.Ot, kind: u.MethodKind.Unary }, sendAction: { name: "SendAction", I: l.J6, O: l.Jn, kind: u.MethodKind.Unary }, deleteSession: { name: "DeleteSession", I: l.mq, O: l.mY, kind: u.MethodKind.Unary }, interruptTurn: { name: "InterruptTurn", I: l.ty, O: l.n4, kind: u.MethodKind.Unary }, cancelQueuedTurn: { name: "CancelQueuedTurn", I: l.To, O: l.ZS, kind: u.MethodKind.Unary }, reorderQueuedTurns: { name: "ReorderQueuedTurns", I: l.J4, O: l.j2, kind: u.MethodKind.Unary }, editQueuedTurn: { name: "EditQueuedTurn", I: l.dC, O: l.vq, kind: u.MethodKind.Unary }, respondToInteraction: { name: "RespondToInteraction", I: l.nK, O: l.Th, kind: u.MethodKind.Unary }, watchSessionInteractions: { name: "WatchSessionInteractions", I: l.X7, O: l.Mt, kind: u.MethodKind.ServerStreaming }, watchSessionBackgroundWork: { name: "WatchSessionBackgroundWork", I: l.j$, O: l.Ml, kind: u.MethodKind.ServerStreaming }, watchSessionTurnLifecycle: { name: "WatchSessionTurnLifecycle", I: l.X, O: l.m$, kind: u.MethodKind.ServerStreaming }, abortBackgroundWork: { name: "AbortBackgroundWork", I: l.c_, O: l.k4, kind: u.MethodKind.Unary }, abortAllBackgroundWork: { name: "AbortAllBackgroundWork", I: l.vC, O: l.fF, kind: u.MethodKind.Unary }, watchAgentHostSessionShellOutput: { name: "WatchAgentHostSessionShellOutput", I: l.Fg, O: l.k9, kind: u.MethodKind.ServerStreaming }, writeAgentHostSessionShellInput: { name: "WriteAgentHostSessionShellInput", I: l.Ev, O: l.Qf, kind: u.MethodKind.Unary }, attachSession: { name: "AttachSession", I: l.EM, O: l.cp, kind: u.MethodKind.ServerStreaming }, getSessionBlobs: { name: "GetSessionBlobs", I: l.z4, O: l.NY, kind: u.MethodKind.Unary }, readFile: { name: "ReadFile", I: l.Xi, O: l.JK, kind: u.MethodKind.ServerStreaming }, getDaemonInfo: { name: "GetDaemonInfo", I: l.OZ, O: l.D7, kind: u.MethodKind.Unary }, shutdownDaemon: { name: "ShutdownDaemon", I: l.H0, O: l.Zi, kind: u.MethodKind.Unary }, updateDaemonAuth: { name: "UpdateDaemonAuth", I: l.IO, O: l.Wn, kind: u.MethodKind.Unary }, setSessionTitle: { name: "SetSessionTitle", I: l.aq, O: l.Pg, kind: u.MethodKind.Unary }, openAgentHostSurfaceChannel: { name: "OpenAgentHostSurfaceChannel", I: h.HG, O: h.ww, kind: u.MethodKind.ServerStreaming }, respondAgentHostSurfaceCallback: { name: "RespondAgentHostSurfaceCallback", I: h.a, O: h.q_, kind: u.MethodKind.Unary }, pushAgentHostSessionPermissions: { name: "PushAgentHostSessionPermissions", I: h.DL, O: h.pj, kind: u.MethodKind.Unary } } };
  var m = t(18021), g = t(12865);
  const w = "http://127.0.0.1", f = 128;
  function k(n2) {
    const e2 = { socketPath: n2.socketPath, maxSessionMemory: f, createConnection: () => c.connect(n2.socketPath) }, t2 = new g.gE(w, void 0, e2), o2 = (0, g.Aw)({ baseUrl: w, httpVersion: "2", sessionManager: t2 });
    return { client: (0, m.UU)(p, o2), close: () => {
      t2.abort();
    } };
  }
  var S = t(48161);
  const b = ".cursor-agents", I = "daemon.sock";
  function v(n2) {
    return (0, d.join)(n2, b);
  }
  function E(n2) {
    return `unix://${n2.path}`;
  }
  var y = t(42761), O = t(47777);
  const P = "1";
  async function C(n2, e2 = {}) {
    return n2.getDaemonInfo(new l.OZ({ expectedApiSchemaRevision: e2.expectedApiSchemaRevision ?? P, desiredLocalLoopEnabled: true === e2.desiredLocalLoopEnabled, allowNewerSchema: e2.allowNewerSchema }));
  }
  var M = t(31421), D = t(73024);
  const _ = ["dist", "agent-host-daemon"], U = ["dist", "bin", "daemon.cjs"], R = ["dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node", "dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node"], H = ["dist/node_modules/tree-sitter/package.json", "dist/node_modules/tree-sitter/index.js", "dist/node_modules/tree-sitter-bash/package.json", "dist/node_modules/tree-sitter-bash/bindings/node/index.js", "dist/node_modules/node-gyp-build/package.json"];
  function L(n2, e2) {
    return (0, d.join)(n2, e2);
  }
  function x(n2) {
    const e2 = (function(n3) {
      return (0, d.join)(n3, ..._);
    })(n2), t2 = L(e2, U.join("/")), o2 = R.map((n3) => L(e2, n3));
    return { extensionPath: n2, packagedDaemonRoot: e2, daemonCjsPath: t2, nativeBindingPaths: o2 };
  }
  const K = ["CURSOR_API_KEY", "CURSOR_SERVICE_ACCOUNT_KEY"];
  function A(n2) {
    const e2 = x(n2.extensionPath);
    !(function(n3) {
      if (!(0, D.existsSync)(n3.daemonCjsPath)) throw new Error(`packaged agent-host-daemon entry missing: ${n3.daemonCjsPath}. Run the cursor-agent-host compile-dist pipeline so dist/agent-host-daemon is copied.`);
      const e3 = [...n3.nativeBindingPaths, ...H.map((e4) => L(n3.packagedDaemonRoot, e4))].filter((n4) => !(0, D.existsSync)(n4));
      if (e3.length > 0) throw new Error(`packaged agent-host-daemon native tree is incomplete (missing ${e3.join(", ")}). The host bundler must copy dist/node_modules from @anysphere/agent-host-daemon, not skip natives.`);
    })(e2);
    const t2 = (function() {
      const n3 = a.env.bundledNodePath?.();
      if (void 0 !== n3 && n3.length > 0) return n3;
      if (process.versions.electron) throw new Error("vscode.env.bundledNodePath() is required to spawn the packaged agent-host-daemon in Electron; refusing process.execPath because that would start a second Cursor instance");
      return process.execPath;
    })();
    !(function(n3) {
      const e3 = (0, d.basename)(n3);
      if ("node" !== e3 && "node.exe" !== e3) throw new Error(`packaged daemon must be launched with bundled Node (basename node/node.exe), got ${n3}`);
      if (process.versions.electron && n3 === process.execPath) throw new Error("packaged daemon must not spawn process.execPath inside Electron (that is a second Cursor)");
    })(t2);
    const o2 = (function(n3) {
      const e3 = [n3.daemonCjsPath, "--listen", (t3 = n3.listen, `unix://${t3.path}`)];
      var t3;
      return true === n3.localLoop && e3.push("--local-loop"), true === n3.updaterEnabled && e3.push("--updater"), true === n3.nativeCloudSubagents && e3.push("--native-cloud-subagents"), true === n3.surfaceOwnsBackgroundWakeups && e3.push("--surface-owns-background-wakeups"), void 0 !== n3.projectDir && e3.push("--project-dir", n3.projectDir), void 0 !== n3.blobsDir && e3.push("--blobs-dir", n3.blobsDir), e3;
    })({ daemonCjsPath: e2.daemonCjsPath, listen: n2.listen, localLoop: n2.localLoop, updaterEnabled: n2.updaterEnabled, nativeCloudSubagents: n2.nativeCloudSubagents, surfaceOwnsBackgroundWakeups: n2.surfaceOwnsBackgroundWakeups, projectDir: n2.projectDir, blobsDir: n2.blobsDir });
    !(function(n3) {
      const e3 = n3[0];
      if (void 0 === e3 || !e3.endsWith("daemon.cjs")) throw new Error(`packaged daemon argv must start with dist/bin/daemon.cjs, got ${JSON.stringify(n3)}`);
      if (n3.some((n4) => n4.endsWith(".mjs") || n4.includes("tsx") || n4.endsWith("agent-host-daemon.mjs"))) throw new Error(`packaged daemon argv must not use the .mjs wrapper or tsx: ${JSON.stringify(n3)}`);
    })(o2);
    return { command: t2, argv: o2, env: (function(n3, e3) {
      let t3 = (function(n4, e4) {
        return void 0 === e4 || 0 === e4.trim().length ? n4 : { ...n4, CURSOR_API_ENDPOINT: e4.trim() };
      })(n3, e3.apiEndpoint);
      const o3 = e3.ripgrepPath?.trim();
      void 0 !== o3 && o3.length > 0 && (t3 = { ...t3, CURSOR_AGENT_HOST_RIPGREP_PATH: o3 });
      const a2 = e3.sandboxHelperPath?.trim();
      return void 0 !== a2 && a2.length > 0 && (t3 = { ...t3, CURSOR_AGENT_HOST_SANDBOX_HELPER_PATH: a2 }), t3;
    })((function(n3, e3) {
      const t3 = { ...n3, ELECTRON_RUN_AS_NODE: "1", HOME: e3, USERPROFILE: e3 };
      for (const n4 of K) delete t3[n4];
      return t3;
    })(n2.env ?? process.env, n2.homeDir), n2.networkEnv ?? {}), cwd: n2.cwd ?? e2.packagedDaemonRoot, layout: e2, listen: n2.listen, homeDir: n2.homeDir };
  }
  function j(n2) {
    const e2 = A(n2);
    return { child: (0, M.spawn)(e2.command, [...e2.argv], { cwd: e2.cwd, env: e2.env, detached: n2.detached ?? true, stdio: n2.stdio ?? ["ignore", "ignore", "pipe"] }), plan: e2 };
  }
  const W = 6e4, T = 50, N = 5e3;
  async function B(n2) {
    const e2 = true === n2.localLoopEnabled, t2 = n2.env ?? process.env, a2 = n2.homeDir ?? (function(n3 = process.env) {
      const e3 = n3.HOME ?? n3.USERPROFILE;
      return void 0 !== e3 && e3.length > 0 ? e3 : (0, S.homedir)();
    })(t2), i2 = n2.listen ?? (function(n3) {
      return { kind: "unix", path: (0, d.join)(v(n3), I) };
    })(a2), s2 = n2.clientInstanceId ?? (0, o.randomUUID)(), c2 = n2.waitForReadyMs ?? W, l2 = await F(i2.path, e2);
    if ("ready" === l2.kind) return $({ clientInstanceId: s2, clientHandle: l2.clientHandle, info: l2.info, listen: i2, localLoopEnabled: e2, didSpawn: false });
    "mismatch" === l2.kind && await q(i2.path, e2), await (0, r.mkdir)(a2, { recursive: true }), await (0, r.mkdir)((0, d.dirname)(i2.path), { recursive: true });
    const u2 = (n2.spawnDaemon ?? j)({ extensionPath: n2.extensionPath, listen: i2, homeDir: a2, env: t2, localLoop: e2, updaterEnabled: true === n2.updaterEnabled, nativeCloudSubagents: true === n2.nativeCloudSubagents, surfaceOwnsBackgroundWakeups: true === n2.surfaceOwnsBackgroundWakeups, networkEnv: { apiEndpoint: n2.apiEndpoint, ripgrepPath: n2.ripgrepPath, sandboxHelperPath: n2.sandboxHelperPath }, detached: true, stdio: ["ignore", "ignore", "ignore"] });
    u2.child.unref();
    try {
      return await (async function(n3) {
        const e3 = Date.now() + n3.waitForReadyMs;
        let t3;
        for (; Date.now() < e3; ) {
          if (null !== n3.child.exitCode || null !== n3.child.signalCode) {
            t3 ??= Date.now();
            const e5 = await F(n3.listen.path, n3.localLoopEnabled);
            if ("ready" === e5.kind) return $({ clientInstanceId: n3.clientInstanceId, clientHandle: e5.clientHandle, info: e5.info, listen: n3.listen, localLoopEnabled: n3.localLoopEnabled, didSpawn: false });
            if ("mismatch" === e5.kind && await q(n3.listen.path, n3.localLoopEnabled), Date.now() - t3 >= N) throw new Error(`packaged agent-host-daemon exited before handshake at ${E(n3.listen)}`);
            await Q(T);
            continue;
          }
          const e4 = await F(n3.listen.path, n3.localLoopEnabled);
          if ("ready" === e4.kind) {
            const t4 = void 0 !== n3.child.pid && e4.info.processPid === n3.child.pid;
            return $({ clientInstanceId: n3.clientInstanceId, clientHandle: e4.clientHandle, info: e4.info, listen: n3.listen, localLoopEnabled: n3.localLoopEnabled, didSpawn: t4 });
          }
          "mismatch" === e4.kind && await q(n3.listen.path, n3.localLoopEnabled), await Q(T);
        }
        throw new Error(`timed out after ${String(n3.waitForReadyMs)}ms waiting for packaged agent-host-daemon at ${E(n3.listen)}`);
      })({ child: u2.child, listen: i2, localLoopEnabled: e2, clientInstanceId: s2, waitForReadyMs: c2 });
    } catch (n3) {
      const t3 = await F(i2.path, e2);
      if ("ready" === t3.kind) return $({ clientInstanceId: s2, clientHandle: t3.clientHandle, info: t3.info, listen: i2, localLoopEnabled: e2, didSpawn: false });
      throw (function(n4) {
        if (null !== n4.exitCode || null !== n4.signalCode) return;
        n4.kill("SIGTERM");
      })(u2.child), "mismatch" === t3.kind && await q(i2.path, e2), n3;
    }
  }
  function $(n2) {
    let e2 = false;
    return { clientInstanceId: n2.clientInstanceId, client: n2.clientHandle.client, info: n2.info, listen: n2.listen, localLoopEnabled: n2.localLoopEnabled, didSpawn: n2.didSpawn, close: () => {
      e2 || (e2 = true, n2.clientHandle.close());
    } };
  }
  async function F(n2, e2) {
    const t2 = k({ socketPath: n2 });
    try {
      return { kind: "ready", clientHandle: t2, info: await C(t2.client, { desiredLocalLoopEnabled: e2 }) };
    } catch (n3) {
      return t2.close(), (function(n4) {
        return n4 instanceof y.T && (n4.code === O.C.FailedPrecondition || n4.code === O.C.Unimplemented);
      })(n3) ? { kind: "mismatch", error: n3 } : { kind: "unreachable" };
    }
  }
  async function q(n2, e2) {
    const t2 = k({ socketPath: n2 });
    try {
      throw await (async function(n3, e3 = {}, t3) {
        try {
          return await C(n3, e3);
        } catch (n4) {
          throw (o2 = { didSpawnThisDaemon: false, runningSessionCount: 0, terminate: t3 }).didSpawnThisDaemon && (o2.runningSessionCount > 0 || o2.terminate), n4;
        }
        var o2;
      })(t2.client, { desiredLocalLoopEnabled: e2 }), new Error("agent-host-daemon handshake mismatch did not fail loud");
    } finally {
      t2.close();
    }
  }
  function Q(n2) {
    return new Promise((e2) => {
      setTimeout(e2, n2);
    });
  }
  const G = ["agent_host_plugins.v1", "agent_host_agent_store.v1", "auth_refresh.v1"];
  function J(n2, e2 = G) {
    const t2 = new Set(n2.map((n3) => n3.trim()).filter((n3) => n3.length > 0));
    return e2.filter((n3) => !t2.has(n3));
  }
  class X extends Error {
    constructor(n2) {
      super(`agent-host-daemon is busy and missing required capabilities: ${n2.join(", ")}`), this.name = "BusyIncompatibleDaemonError";
    }
  }
  async function Y(n2) {
    try {
      await n2.shutdownDaemon(new l.H0({ onlyIfIdle: true, reason: "cursor-agent-host: replace idle daemon missing capabilities" }));
    } catch (n3) {
      if (!(function(n4) {
        if (!(n4 instanceof y.T)) return false;
        if (n4.code === O.C.Unavailable || n4.code === O.C.Aborted || n4.code === O.C.Canceled) return true;
        if (n4.code === O.C.Internal) {
          const e2 = n4.message.toLowerCase();
          return e2.includes("missing status") || e2.includes("protocol error") || e2.includes("stream closed");
        }
        return false;
      })(n3)) throw n3;
    }
  }
  async function Z(n2) {
    const e2 = J(n2.info.capabilities ?? []);
    if (0 === e2.length) return "compatible";
    if (n2.info.runningSessionCount > 0) throw new X(e2);
    return await Y(n2.client), "idle-replaced";
  }
  async function z(n2) {
    if ("win32" === (n2.platform ?? process.platform)) throw new Error("cursor_agent_host_move_exec ON is not supported on Windows in this cut (no named pipes)");
    const e2 = n2.clientInstanceId ?? await s(n2.globalState), t2 = n2.connect ?? B, o2 = () => t2({ extensionPath: n2.extensionPath, localLoopEnabled: n2.localLoopEnabled, updaterEnabled: n2.updaterEnabled, nativeCloudSubagents: n2.nativeCloudSubagentsEnabled, surfaceOwnsBackgroundWakeups: true, clientInstanceId: e2, apiEndpoint: n2.apiEndpoint, ripgrepPath: n2.ripgrepPath, sandboxHelperPath: n2.sandboxHelperPath, homeDir: n2.homeDir, listen: n2.listen, env: n2.env, waitForReadyMs: n2.waitForReadyMs, spawnDaemon: n2.spawnDaemon });
    let a2 = await o2();
    try {
      if ("idle-replaced" === await Z({ client: a2.client, info: a2.info })) {
        a2.close(), a2 = await o2();
        if ("compatible" !== await Z({ client: a2.client, info: a2.info })) throw new Error(`respawned agent-host-daemon is still missing required capabilities: ${J(a2.info.capabilities ?? []).join(", ")}`);
      }
    } catch (n3) {
      throw a2.close(), n3;
    }
    return a2;
  }
} };
