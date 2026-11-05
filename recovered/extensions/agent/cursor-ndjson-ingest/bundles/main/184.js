// @recovered-by cursor-re
// artifact: app/extensions/cursor-ndjson-ingest/dist/main.js sha256:c20522000288197a1017b7169f8d5c503fe24f6cafe518222b9f24bea4fea3dc
// module: 184 range:6537..18464
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
184: function(e2, t2, r2) {
    var o2, n2 = this && this.__createBinding || (Object.create ? function(e3, t3, r3, o3) {
      void 0 === o3 && (o3 = r3);
      var n3 = Object.getOwnPropertyDescriptor(t3, r3);
      n3 && !("get" in n3 ? !t3.__esModule : n3.writable || n3.configurable) || (n3 = { enumerable: true, get: function() {
        return t3[r3];
      } }), Object.defineProperty(e3, o3, n3);
    } : function(e3, t3, r3, o3) {
      void 0 === o3 && (o3 = r3), e3[o3] = t3[r3];
    }), s2 = this && this.__setModuleDefault || (Object.create ? function(e3, t3) {
      Object.defineProperty(e3, "default", { enumerable: true, value: t3 });
    } : function(e3, t3) {
      e3.default = t3;
    }), i = this && this.__importStar || (o2 = function(e3) {
      return o2 = Object.getOwnPropertyNames || function(e4) {
        var t3 = [];
        for (var r3 in e4) Object.prototype.hasOwnProperty.call(e4, r3) && (t3[t3.length] = r3);
        return t3;
      }, o2(e3);
    }, function(e3) {
      if (e3 && e3.__esModule) return e3;
      var t3 = {};
      if (null != e3) for (var r3 = o2(e3), i2 = 0; i2 < r3.length; i2++) "default" !== r3[i2] && n2(t3, e3, r3[i2]);
      return s2(t3, e3), t3;
    });
    Object.defineProperty(t2, "__esModule", { value: true }), t2.activate = async function(e3) {
      l.NdjsonIngestLogger.init(), e3.subscriptions.push(g.workspace.onDidChangeConfiguration((t3) => {
        (t3.affectsConfiguration("ndjson.port") || t3.affectsConfiguration("ndjson.bindAddress")) && (function(e4) {
          _(), y = setTimeout(() => {
            y = void 0, b(async () => {
              if (!p || !N) return;
              const t4 = g.workspace.getConfiguration("ndjson"), r3 = t4.get("bindAddress", "127.0.0.1"), o3 = t4.get("port", 0);
              if (r3 === N.bindAddress && o3 === N.configuredPort) return;
              const n3 = f;
              l.NdjsonIngestLogger.info("Server settings changed, restarting ingest server"), await L();
              const s3 = await E(e4, { surface: n3 });
              void 0 !== s3 && "string" != typeof s3 && l.NdjsonIngestLogger.info("NDJSON ingest server restarted after settings change");
            });
          }, 300);
        })(e3);
      })), e3.subscriptions.push(g.commands.registerCommand("cursor.ndjsonIngest.start", (t3) => (function(e4, t4 = {}) {
        return b(() => E(e4, t4));
      })(e3, (function(e4) {
        if ("string" == typeof e4) return { sessionId: e4 };
        return e4 ?? {};
      })(t3)))), e3.subscriptions.push(g.commands.registerCommand("cursor.ndjsonIngest.stop", () => A())), e3.subscriptions.push(g.commands.registerCommand("cursor.ndjsonIngest.copyCurl", async () => {
        if (!h) return void g.window.showWarningMessage("Server is not running.");
        const e4 = `curl -sS -H "Content-Type: application/x-ndjson" --data-binary '{"hello":"world"}' "${h.toString()}"`;
        await g.env.clipboard.writeText(e4), g.window.showInformationMessage("NDJSON Ingest: curl command copied to clipboard.");
      })), e3.subscriptions.push(g.commands.registerCommand("cursor.ndjsonIngest.reassignPort", (t3) => (function(e4, t4) {
        return b(async () => {
          const r3 = m(t4 ?? f), o3 = g.workspace.getConfiguration("ndjson").get("port", 0);
          if (0 !== o3) return O(`NDJSON Ingest: Cannot reassign the port while ndjson.port is pinned to ${o3}. Set ndjson.port to 0 to use automatic workspace port assignment.`), `Cannot reassign pinned port ${o3}`;
          const n3 = D(h || p?.getLoopbackUrl()) ?? j(e4, r3);
          0 !== n3 ? l.NdjsonIngestLogger.info(`Reassigning NDJSON ingest server away from sticky port ${n3}`) : l.NdjsonIngestLogger.info("Reassigning NDJSON ingest server to a fresh auto-allocated port"), await I(e4, r3, 0), await L();
          const s3 = await E(e4, { ignoreStickyPort: true, excludedPorts: 0 !== n3 ? [n3] : [], surface: r3 });
          if ("string" != typeof s3 && s3) {
            const e5 = D(s3.externalUrl);
            0 !== n3 && void 0 !== e5 && e5 !== n3 ? g.window.showInformationMessage(`NDJSON Ingest: Reassigned workspace port from ${n3} to ${e5} and restarted the server.`) : void 0 !== e5 ? g.window.showInformationMessage(`NDJSON Ingest: Restarted the server on port ${e5}.`) : g.window.showInformationMessage("NDJSON Ingest: Reassigned workspace port and restarted the server.");
          }
          return s3;
        });
      })(e3, t3))), e3.subscriptions.push(g.commands.registerCommand("cursor.ndjsonIngest.showStatus", () => {
        h ? g.window.showInformationMessage(`URL: ${h.toString()}`) : g.window.showInformationMessage("NDJSON: server not running.");
      }));
    }, t2.deactivate = async function() {
      _(), await A();
    };
    const a = i(r2(982)), c = r2(857), d = r2(928), g = i(r2(398)), u = r2(93), l = r2(377);
    let p, f, h = "";
    const w = 1, v = "classic";
    let N, y, S = Promise.resolve();
    function b(e3) {
      const t3 = S.then(e3, e3);
      return S = t3.catch(() => {
      }), t3;
    }
    function m(e3) {
      return "glass" === e3 ? "glass" : v;
    }
    function P(e3) {
      return "classic" === e3 ? { allocatedPortKey: "ndjson.allocatedPort", ingestPathIdKey: "ndjson.targetId" } : { allocatedPortKey: `ndjson.allocatedPort.${e3}`, ingestPathIdKey: `ndjson.targetId.${e3}` };
    }
    function j(e3, t3) {
      return e3.workspaceState.get(P(t3).allocatedPortKey, 0);
    }
    async function I(e3, t3, r3) {
      await e3.workspaceState.update(P(t3).allocatedPortKey, 0 === r3 ? void 0 : r3);
    }
    function O(e3) {
      g.window.showErrorMessage(e3, "Change Port").then((e4) => {
        "Change Port" === e4 && g.commands.executeCommand("workbench.action.openWorkspaceSettings", "ndjson.port");
      });
    }
    function D(e3) {
      if (e3) try {
        const t3 = new URL(e3);
        if (!t3.port) return;
        const r3 = Number(t3.port);
        return Number.isInteger(r3) && r3 > 0 ? r3 : void 0;
      } catch (t3) {
        return void l.NdjsonIngestLogger.warn(`Failed to parse NDJSON server URL while resolving port: ${e3}`, t3);
      }
    }
    async function $(e3, t3, r3) {
      const o3 = await e3.start();
      p = e3, f = r3;
      const n3 = g.Uri.parse(o3.loopbackUrl);
      try {
        const e4 = await g.env.asExternalUri(n3);
        h = e4.toString();
      } catch (e4) {
        l.NdjsonIngestLogger.error("asExternalUri failed; using loopback URL", e4), h = n3.toString();
      }
      return { externalUrl: h, logPath: t3 ? e3.getLogPathForSession(t3) : "" };
    }
    async function L() {
      l.NdjsonIngestLogger.info("Stopping NDJSON ingest server"), p && (await p.stop().catch((e3) => {
        l.NdjsonIngestLogger.error("Error stopping NDJSON ingest server:", e3);
      }), p = void 0, h = "", f = void 0, N = void 0);
    }
    async function E(e3, t3 = {}) {
      const r3 = m(t3.surface ?? f);
      if (!g.workspace.isTrusted) return void g.window.showWarningMessage("debug mode disabled in untrusted workspace.");
      const o3 = g.workspace.workspaceFolders?.[0], n3 = o3 ? g.Uri.joinPath(o3.uri, ".cursor").fsPath : (0, d.join)((0, c.homedir)(), ".cursor", "debug-logs");
      if (p) {
        const e4 = (0, d.resolve)(p.getLogDirectory()) === (0, d.resolve)(n3), o4 = h || p.getLoopbackUrl();
        if (e4) if (o4) {
          if (void 0 === f || f === r3) return { externalUrl: o4, logPath: t3.sessionId ? p.getLogPathForSession(t3.sessionId) : "" };
          l.NdjsonIngestLogger.info(`Restarting NDJSON ingest server to switch from ${f} to ${r3} sticky identity`), await L();
        } else l.NdjsonIngestLogger.warn("Server was set but no URL was available; stopping stale server."), await L();
        else await L();
      }
      const s3 = g.workspace.getConfiguration("ndjson"), i2 = s3.get("bindAddress", "127.0.0.1"), v2 = s3.get("port", 0), y2 = 0 === v2, S2 = j(e3, r3), b2 = t3.ignoreStickyPort ? 0 : S2, D2 = await (async function(e4, t4) {
        const { ingestPathIdKey: r4 } = P(t4), o4 = e4.workspaceState.get(r4);
        if (o4 && o4.length > 0) return o4;
        const n4 = a.randomUUID();
        return await e4.workspaceState.update(r4, n4), n4;
      })(e3, r3);
      let A2, _2 = false;
      try {
        A2 = await (0, u.chooseNdjsonPort)({ bindAddress: i2, configuredPort: v2, previouslyAllocatedPort: b2, excludedPorts: t3.excludedPorts, onAutoAllocatedPort: async (e4) => {
          _2 = true;
        }, logger: l.NdjsonIngestLogger });
      } catch (e4) {
        const t4 = e4 instanceof Error ? e4.message : String(e4);
        return l.NdjsonIngestLogger.error("Failed to choose port:", e4), g.window.showErrorMessage(`NDJSON Ingest: ${t4}`), t4;
      }
      const J = new u.NdjsonIngestServer({ bindAddress: i2, port: A2, ingestPathId: D2, logDirectory: n3, logger: l.NdjsonIngestLogger }), k = y2 && !t3.ignoreStickyPort && 0 !== S2 && A2 === S2;
      try {
        const o4 = await $(J, t3.sessionId, r3);
        if (N = { bindAddress: i2, configuredPort: v2 }, _2) try {
          await I(e3, r3, A2);
        } catch (e4) {
          l.NdjsonIngestLogger.error("Failed to persist allocated port (server is running anyway):", e4);
        }
        return o4;
      } catch (o4) {
        let n4 = o4;
        if (o4 instanceof u.NdjsonServerStartError && "EADDRINUSE" === o4.code && k) {
          l.NdjsonIngestLogger.info(`Sticky port ${A2} busy, retrying after brief delay...`), await new Promise((e4) => setTimeout(e4, 300));
          try {
            const o5 = await $(J, t3.sessionId, r3);
            if (N = { bindAddress: i2, configuredPort: v2 }, _2) try {
              await I(e3, r3, A2);
            } catch (e4) {
              l.NdjsonIngestLogger.error("Failed to persist allocated port (server is running anyway):", e4);
            }
            return o5;
          } catch (e4) {
            n4 = e4;
          }
        }
        const s4 = t3.autoAllocatedPortRetryCount ?? w;
        if (n4 instanceof u.NdjsonServerStartError && "EADDRINUSE" === n4.code && y2 && s4 > 0) return l.NdjsonIngestLogger.info(`Port ${A2} was claimed by another process; retrying with a fresh auto-allocated port`), E(e3, { ...t3, surface: r3, ignoreStickyPort: true, excludedPorts: [...t3.excludedPorts ?? [], A2], autoAllocatedPortRetryCount: s4 - 1 });
        if (n4 instanceof u.NdjsonServerStartError) return (function(e4, t4) {
          switch (e4.code) {
            case "EADDRINUSE":
              return l.NdjsonIngestLogger.error(`Port ${e4.port} is already in use`), t4 ? g.window.showErrorMessage(`NDJSON Ingest: Cannot start server - port ${e4.port} became unavailable. Please try again.`) : O(`NDJSON Ingest: Cannot start server - port ${e4.port} is already in use. Try changing the port in settings or stopping the other service.`), "Port is already in use";
            case "EACCES":
              return l.NdjsonIngestLogger.error(`Permission denied for port ${e4.port}`), t4 ? g.window.showErrorMessage(`NDJSON Ingest: Permission denied for port ${e4.port}. This is unexpected for auto-allocated ports.`) : O(`NDJSON Ingest: Permission denied for port ${e4.port}. Try using a port number greater than 1024.`), `Permission denied for port ${e4.port}`;
            default:
              return l.NdjsonIngestLogger.error("NDJSON ingest server listen error:", e4), g.window.showErrorMessage(`NDJSON Ingest: Server error - ${e4.message}`), `Server error - ${e4.message}`;
          }
        })(n4, y2);
        const a2 = n4 instanceof Error ? n4.message : String(n4);
        return l.NdjsonIngestLogger.error("NDJSON ingest server listen error:", n4), g.window.showErrorMessage(`NDJSON Ingest: Server error - ${a2}`), `Server error - ${a2}`;
      }
    }
    function A() {
      return b(() => L());
    }
    function _() {
      void 0 !== y && (clearTimeout(y), y = void 0);
    }
  }