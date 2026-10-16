(() => {
  "use strict";
  var e = { 93: (e2, t2, r2) => {
    r2.r(t2), r2.d(t2, { DEFAULT_NDJSON_PORT_RANGE_END: () => h, DEFAULT_NDJSON_PORT_RANGE_START: () => f, NdjsonIngestServer: () => N, NdjsonServerStartError: () => w, chooseNdjsonPort: () => v, isPortAvailable: () => l, resolveLogger: () => d });
    const o2 = require("node:events"), n2 = require("node:fs"), s2 = require("node:http"), i = require("node:path"), a = require("node:stream/promises"), c = { info: () => {
    }, warn: () => {
    }, error: () => {
    } };
    function d(e3) {
      return e3 ?? c;
    }
    const g = require("node:stream"), u = /^[a-zA-Z0-9-]+$/;
    async function l(e3, t3) {
      return new Promise((r3) => {
        const o3 = s2.createServer();
        o3.once("error", () => r3(false)), o3.once("listening", () => {
          o3.close(() => r3(true));
        }), o3.listen(e3, t3);
      });
    }
    function p(e3) {
      if (e3 && u.test(e3)) return e3;
    }
    const f = 7242, h = 7942;
    class w extends Error {
      constructor(e3) {
        super(e3.message), this.name = "NdjsonServerStartError", this.code = e3.code, this.port = e3.port, void 0 !== e3.cause && (this.cause = e3.cause);
      }
    }
    async function v(e3) {
      const t3 = e3.configuredPort ?? 0;
      if (0 !== t3) return t3;
      const r3 = new Set((e3.excludedPorts ?? []).filter((e4) => e4 > 0)), o3 = e3.previouslyAllocatedPort ?? 0;
      if (0 !== o3 && !r3.has(o3)) {
        if (await l(o3, e3.bindAddress)) return d(e3.logger).info(`Reusing previously allocated port ${o3}`), o3;
        d(e3.logger).info(`Previously allocated port ${o3} is unavailable; scanning for a new port`);
      }
      const n3 = e3.rangeStart ?? f, s3 = e3.rangeEnd ?? h;
      if (n3 > s3) throw new Error(`Invalid port range ${n3}-${s3}`);
      const i2 = s3 - n3 + 1, a2 = Math.floor(Math.random() * i2);
      for (let t4 = 0; t4 < i2; t4++) {
        const o4 = n3 + (a2 + t4) % i2;
        if (!r3.has(o4) && await l(o4, e3.bindAddress)) return await e3.onAutoAllocatedPort?.(o4), d(e3.logger).info(`Auto-allocated port ${o4} and saved to internal storage`), o4;
      }
      throw new Error(`No available ports in range ${n3}-${s3}`);
    }
    class N {
      constructor(e3) {
        this.options = e3, this.currentPort = 0, this.writeQueue = Promise.resolve(), this.logger = d(e3.logger);
      }
      getLoopbackUrl() {
        if (this.currentPort) return `http://${this.options.bindAddress}:${this.currentPort}/ingest/${this.options.ingestPathId}`;
      }
      getLogDirectory() {
        return this.options.logDirectory;
      }
      getLogPathForSession(e3) {
        const t3 = p(e3);
        if (!t3) throw new Error("Expected a valid debug session id");
        return (0, i.join)(this.options.logDirectory, `debug-${t3}.log`);
      }
      async start() {
        if (this.server) return this.buildStartResult();
        n2.mkdirSync(this.options.logDirectory, { recursive: true });
        const e3 = s2.createServer((e4, t4) => this.handleRequest(e4, t4));
        try {
          await this.listen(e3);
        } catch (t4) {
          throw e3.removeAllListeners(), (function(e4, t5) {
            if (e4 instanceof w) return e4;
            if (e4 instanceof Error) {
              const r3 = e4.message || `Failed to start NDJSON server on port ${t5}`;
              return new w({ message: r3, port: t5, code: y(e4), cause: e4 });
            }
            return new w({ message: `Failed to start NDJSON server on port ${t5}`, port: t5, cause: e4 });
          })(t4, this.options.port);
        }
        this.server = e3;
        const t3 = this.server.address();
        return this.currentPort = t3?.port ?? 0, this.logger.info(`NDJSON ingest server started on port ${this.currentPort} in directory ${this.options.logDirectory}`), this.buildStartResult();
      }
      async stop() {
        const e3 = this.server;
        e3 && (e3.closeAllConnections(), e3.close(), await (0, o2.once)(e3, "close"), this.server = void 0, this.currentPort = 0);
      }
      async appendExclusive(e3, t3) {
        const r3 = async () => {
          const r4 = n2.createWriteStream(t3, { flags: "a" });
          await (0, a.pipeline)(e3, (function() {
            let e4 = 10;
            return new g.Transform({ transform(t4, r5, o4) {
              t4.length > 0 && (e4 = t4[t4.length - 1]), o4(null, t4);
            }, flush(t4) {
              10 !== e4 && this.push(Buffer.from("\n")), t4();
            } });
          })(), r4);
        }, o3 = this.writeQueue.then(r3, r3);
        return this.writeQueue = o3.catch((e4) => {
          this.logger.error("Error appending to log file:", e4);
        }), o3;
      }
      buildStartResult() {
        const e3 = this.getLoopbackUrl();
        if (!e3) throw new Error("NDJSON server is not listening");
        return { loopbackUrl: e3, logDirectory: this.options.logDirectory };
      }
      async handleRequest(e3, t3) {
        if (t3.setHeader("Access-Control-Allow-Origin", "*"), t3.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"), t3.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Debug-Session-Id"), "OPTIONS" === e3.method) return t3.writeHead(200), void t3.end();
        if ("POST" !== e3.method || e3.url !== `/ingest/${this.options.ingestPathId}`) return t3.writeHead(404), void t3.end();
        const r3 = e3.headers["x-debug-session-id"];
        if (void 0 === r3) return this.logger.warn("Rejected NDJSON ingest request without X-Debug-Session-Id header"), t3.writeHead(400), void t3.end("missing-session-id");
        if ("string" != typeof r3) return this.logger.warn("Rejected NDJSON ingest request with invalid X-Debug-Session-Id header"), t3.writeHead(400), void t3.end("invalid-session-id");
        const o3 = p(r3);
        if (!o3) return this.logger.warn("Rejected NDJSON ingest request with invalid X-Debug-Session-Id header"), t3.writeHead(400), void t3.end("invalid-session-id");
        try {
          const r4 = this.getLogPathForSession(o3);
          await this.appendExclusive(e3, r4), t3.writeHead(204), t3.end();
        } catch (e4) {
          this.logger.error("NDJSON ingest write error:", e4), t3.writeHead(500), t3.end("write-failed");
        }
      }
      async listen(e3) {
        e3.listen(this.options.port, this.options.bindAddress), await (0, o2.once)(e3, "listening");
      }
    }
    function y(e3) {
      if ("code" in e3 && "string" == typeof e3.code) return e3.code;
    }
  }, 184: function(e2, t2, r2) {
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
  }, 377: function(e2, t2, r2) {
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
    Object.defineProperty(t2, "__esModule", { value: true }), t2.NdjsonIngestLogger = void 0;
    const a = i(r2(398));
    class c {
      static init() {
        c.output = a.window.createOutputChannel("NDJSON Ingest", { log: true });
      }
      static error(e3, ...t3) {
        c.output || c.init(), c.output?.error(e3, ...t3);
      }
      static warn(e3, ...t3) {
        c.output || c.init(), c.output?.warn(e3, ...t3);
      }
      static info(e3, ...t3) {
        c.output || c.init(), c.output?.info(e3, ...t3);
      }
      static debug(e3, ...t3) {
        c.output || c.init(), c.output?.debug(e3, ...t3);
      }
      static trace(e3, ...t3) {
        c.output || c.init(), c.output?.trace(e3, ...t3);
      }
    }
    t2.NdjsonIngestLogger = c;
  }, 398: (e2) => {
    e2.exports = require("vscode");
  }, 857: (e2) => {
    e2.exports = require("os");
  }, 928: (e2) => {
    e2.exports = require("path");
  }, 982: (e2) => {
    e2.exports = require("crypto");
  } }, t = {};
  function r(o2) {
    var n2 = t[o2];
    if (void 0 !== n2) return n2.exports;
    var s2 = t[o2] = { exports: {} };
    return e[o2].call(s2.exports, s2, s2.exports, r), s2.exports;
  }
  r.d = (e2, t2) => {
    for (var o2 in t2) r.o(t2, o2) && !r.o(e2, o2) && Object.defineProperty(e2, o2, { enumerable: true, get: t2[o2] });
  }, r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  };
  var o = r(184), n = exports;
  for (var s in o) n[s] = o[s];
  o.__esModule && Object.defineProperty(n, "__esModule", { value: true });
})();
