(() => {
  "use strict";
  var e = { d: (t2, o2) => {
    for (var s2 in o2) e.o(o2, s2) && !e.o(t2, s2) && Object.defineProperty(t2, s2, { enumerable: true, get: o2[s2] });
  }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  } }, t = {};
  e.r(t), e.d(t, { activate: () => w, deactivate: () => m });
  const o = require("net"), s = require("tls"), r = require("vscode"), n = "CursorSocketTransient", i = 3e3, c = "cursorSocket.injectFailure", a = r.window.createOutputChannel("Cursor Socket", { log: true });
  let d = 1, l = 1, h = 1;
  const u = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set();
  function $(e2) {
    return Object.assign(new Error(e2), { code: n });
  }
  function w(e2) {
    a.info("cursor-socket extension activating"), e2.subscriptions.push(a, r.commands.registerCommand(c, () => (function() {
      let e3 = 0;
      for (const [t3, o2] of v) a.warn(`[inject-failure] destroying client socket ${t3}`), e3++, o2.destroy($("Injected cursor-socket failure"));
      let t2 = 0;
      for (const e4 of f) t2 += e4.injectFailure("developer command");
      return a.warn(`[inject-failure] destroyed ${e3} client socket(s) and ${t2} server connection(s)`), { destroyedClientSockets: e3, destroyedServerConnections: t2 };
    })()), r.cursor.registerSocketConnectionProvider({ provideConnection: async (e3) => (function(e4) {
      const t2 = d++, i2 = e4.tls ? "tls" : "tcp", c2 = `${e4.host}:${e4.port}`;
      return a.info(`[socket ${t2}] opening ${i2} connection to ${c2}`), new Promise((d2, l2) => {
        const h2 = new r.EventEmitter(), u2 = new r.EventEmitter();
        let f2, w2, m2 = false;
        function p2(e5) {
          e5.on("data", (e6) => h2.fire(new Uint8Array(e6))), e5.on("close", (e6) => {
            v.delete(t2), a.info(`[socket ${t2}] closed (hadError=${e6}) — ${i2} ${c2}`), u2.fire(e6 ? f2 ?? $(`Socket closed with error: ${i2} ${c2}`) : void 0), h2.dispose(), u2.dispose();
          }), e5.on("error", (e6) => {
            f2 = "string" == typeof e6.code ? e6 : Object.assign(e6, { code: n }), a.error(`[socket ${t2}] error: ${e6.message} — ${i2} ${c2}`), m2 || (m2 = true, l2(e6));
          });
        }
        function g2(e5) {
          return { onDidReceiveData: h2.event, onDidClose: u2.event, send(t3) {
            e5.write(t3);
          }, close() {
            a.info(`[socket ${t2}] close requested — ${i2} ${c2}`), e5.end();
          } };
        }
        e4.tls ? (w2 = s.connect({ host: e4.host, port: e4.port, rejectUnauthorized: e4.tls.rejectUnauthorized ?? true, servername: e4.tls.servername ?? e4.host, ca: e4.tls.ca, cert: e4.tls.cert, key: e4.tls.key }, () => {
          m2 = true, a.info(`[socket ${t2}] connected (tls) to ${c2}`), d2(g2(w2));
        }), p2(w2)) : (w2 = o.createConnection({ host: e4.host, port: e4.port }, () => {
          m2 = true, a.info(`[socket ${t2}] connected (tcp) to ${c2}`), d2(g2(w2));
        }), p2(w2)), v.set(t2, w2);
      });
    })(e3) }), r.cursor.registerSocketServerProvider({ provideServer: async (e3, t2) => (function(e4, t3) {
      return p(e4, t3).then((e5) => e5.acquireLease());
    })(e3, t2) })), a.info("cursor-socket extension activated");
  }
  function m() {
    a.info("cursor-socket extension deactivating");
  }
  async function p(e2, t2) {
    const o2 = (function(e3, t3) {
      if (0 !== t3) return `${e3}:${t3}`;
    })(e2, t2);
    if (!o2) return a.info(`[server] creating non-reusable server for ${e2}:${t2}`), g.create({ localHost: e2, localPort: t2, shutdownGracePeriodMs: 0 });
    let s2, r2 = u.get(o2);
    r2 ? a.info(`[server] reusing managed server for ${o2}`) : (a.info(`[server] creating reusable server for ${o2}`), r2 = g.create({ localHost: e2, localPort: t2, reusableKey: o2, shutdownGracePeriodMs: i, onFullyClosed: () => {
      u.get(o2) === r2 && u.delete(o2);
    } }), u.set(o2, r2));
    try {
      s2 = await r2;
    } catch (e3) {
      throw u.get(o2) === r2 && (a.warn(`[server] failed to create reusable server for ${o2}, removing from cache`), u.delete(o2)), e3;
    }
    return s2.isClosed() ? (a.warn(`[server] reusable server ${o2} is already closed, recreating`), u.get(o2) === r2 && u.delete(o2), p(e2, t2)) : s2;
  }
  class g {
    constructor(e2, t2, o2, s2, r2, n2, i2, c2) {
      this.serverId = e2, this.server = t2, this.localHost = o2, this.requestedLocalPort = s2, this.localPort = r2, this.reusableKey = n2, this.shutdownGracePeriodMs = i2, this.onFullyClosed = c2, this.leases = /* @__PURE__ */ new Map(), this.connections = /* @__PURE__ */ new Map(), this.closed = false;
    }
    static async create(e2) {
      const t2 = d++, s2 = o.createServer();
      try {
        await (function(e3, t3, o2) {
          return new Promise((s3, r3) => {
            const n3 = (t4) => {
              e3.off("listening", i2), r3(t4);
            }, i2 = () => {
              e3.off("error", n3), s3();
            };
            e3.once("error", n3), e3.once("listening", i2), e3.listen(o2, t3);
          });
        })(s2, e2.localHost, e2.localPort);
      } catch (o2) {
        throw a.error(`[server ${t2}] failed to listen on port ${e2.localPort}: ${o2.message}`), s2.close(), o2;
      }
      const r2 = s2.address();
      a.info(`[server ${t2}] listening on ${e2.localHost}:${r2.port} (requested ${e2.localPort})`);
      const n2 = new g(t2, s2, e2.localHost, e2.localPort, r2.port, e2.reusableKey, e2.shutdownGracePeriodMs, e2.onFullyClosed);
      return f.add(n2), s2.on("connection", (e3) => n2.handleAcceptedSocket(e3)), n2;
    }
    isClosed() {
      return this.closed;
    }
    acquireLease() {
      if (this.closed) throw new Error(`Managed TCP server ${this.serverId} is closed`);
      this.cancelShutdownTimer();
      const e2 = h++, t2 = this.createLease(e2);
      this.leases.set(e2, t2);
      const o2 = this.currentOwnerLeaseId;
      return this.currentOwnerLeaseId = e2, a.info(`[server ${this.serverId}] lease ${e2} acquired (localPort=${this.localPort})`), void 0 !== o2 && o2 !== e2 && (a.info(`[server ${this.serverId}] lease handoff ${o2} -> ${e2}`), this.closeConnectionsForLease(o2, "lease handoff")), { localPort: this.localPort, onDidAccept: t2.acceptEmitter.event, onDidReceiveData: t2.dataEmitter.event, onDidCloseConnection: t2.closeConnectionEmitter.event, write: (t3, o3) => {
        this.writeFromLease(e2, t3, o3);
      }, closeConnection: (t3) => {
        this.closeConnectionFromLease(e2, t3);
      }, close: (t3) => {
        this.releaseLease(e2, t3);
      } };
    }
    createLease(e2) {
      return { leaseId: e2, acceptEmitter: new r.EventEmitter(), dataEmitter: new r.EventEmitter(), closeConnectionEmitter: new r.EventEmitter(), isDisposed: false };
    }
    releaseLease(e2, t2) {
      const o2 = this.leases.get(e2);
      o2 && !o2.isDisposed && (a.info(`[server ${this.serverId}] lease ${e2} released`), this.closeConnectionsForLease(e2, "lease released"), this.currentOwnerLeaseId === e2 && (this.currentOwnerLeaseId = void 0, this.scheduleShutdownIfUnowned(t2)), this.disposeLease(o2), this.leases.delete(e2));
    }
    disposeLease(e2) {
      e2.isDisposed || (e2.isDisposed = true, e2.acceptEmitter.dispose(), e2.dataEmitter.dispose(), e2.closeConnectionEmitter.dispose());
    }
    handleAcceptedSocket(e2) {
      if (this.closed) return a.warn(`[server ${this.serverId}] dropping incoming connection because server is closed`), void e2.destroy();
      const t2 = this.currentOwnerLeaseId;
      if (void 0 === t2) return a.warn(`[server ${this.serverId}] dropping incoming connection because no active lease`), void e2.destroy();
      const o2 = l++;
      this.connections.set(o2, { socket: e2, ownerLeaseId: t2 });
      const s2 = `${e2.remoteAddress ?? "unknown"}:${e2.remotePort ?? 0}`;
      a.info(`[server ${this.serverId}] accepted connection ${o2} from ${s2} on lease ${t2}`), e2.on("data", (e3) => {
        const s3 = this.connections.get(o2);
        if (!s3 || s3.ownerLeaseId !== t2) return;
        const r2 = this.leases.get(t2);
        r2 && !r2.isDisposed && r2.dataEmitter.fire({ connectionId: o2, data: new Uint8Array(e3) });
      }), e2.on("error", (e3) => {
        this.finalizeConnection(o2, e3.message);
      }), e2.on("close", (e3) => {
        a.info(`[server ${this.serverId}] connection ${o2} terminated (hadError=${e3})`), this.finalizeConnection(o2, void 0);
      }), this.leases.get(t2)?.acceptEmitter.fire({ connectionId: o2 });
    }
    finalizeConnection(e2, t2) {
      const o2 = this.connections.get(e2);
      if (!o2) return;
      this.connections.delete(e2), t2 ? a.warn(`[server ${this.serverId}] connection ${e2} closed with error: ${t2}`) : a.info(`[server ${this.serverId}] connection ${e2} closed`);
      const s2 = this.leases.get(o2.ownerLeaseId);
      s2 && !s2.isDisposed && s2.closeConnectionEmitter.fire({ connectionId: e2, error: t2 });
    }
    writeFromLease(e2, t2, o2) {
      const s2 = this.connections.get(t2);
      s2 && s2.ownerLeaseId === e2 && s2.socket.write(o2);
    }
    closeConnectionFromLease(e2, t2) {
      const o2 = this.connections.get(t2);
      o2 && o2.ownerLeaseId === e2 && (a.info(`[server ${this.serverId}] lease ${e2} closing connection ${t2}`), this.connections.delete(t2), this.leases.get(e2)?.closeConnectionEmitter.fire({ connectionId: t2, error: void 0 }), o2.socket.end());
    }
    closeConnectionsForLease(e2, t2) {
      for (const [o2, s2] of this.connections) s2.ownerLeaseId === e2 && (a.info(`[server ${this.serverId}] closing connection ${o2} for lease ${e2} (${t2})`), this.connections.delete(o2), this.leases.get(e2)?.closeConnectionEmitter.fire({ connectionId: o2, error: void 0 }), s2.socket.end());
    }
    injectFailure(e2) {
      let t2 = 0;
      for (const [o2, s2] of this.connections) t2++, a.warn(`[server ${this.serverId}] injecting failure into connection ${o2} (${e2})`), s2.socket.destroy($(`Injected cursor-socket failure (${e2})`));
      return t2;
    }
    scheduleShutdownIfUnowned(e2) {
      if (this.closed || void 0 !== this.currentOwnerLeaseId) return;
      const t2 = void 0 === e2 ? this.shutdownGracePeriodMs : 1e3 * e2;
      if (t2 <= 0) return this.cancelShutdownTimer(), void this.shutdown("last lease released");
      this.shutdownTimer || (a.info(`[server ${this.serverId}] scheduling shutdown in ${t2}ms`), this.shutdownTimer = setTimeout(() => {
        this.shutdownTimer = void 0, void 0 === this.currentOwnerLeaseId && this.shutdown("reuse grace elapsed");
      }, t2));
    }
    cancelShutdownTimer() {
      this.shutdownTimer && (a.info(`[server ${this.serverId}] cancelling scheduled shutdown`), clearTimeout(this.shutdownTimer), this.shutdownTimer = void 0);
    }
    shutdown(e2) {
      if (!this.closed) {
        a.info(`[server ${this.serverId}] shutting down (${e2})`), this.closed = true, f.delete(this), this.cancelShutdownTimer();
        for (const [e3, t2] of this.connections) {
          this.connections.delete(e3);
          const o2 = this.leases.get(t2.ownerLeaseId);
          o2 && !o2.isDisposed && o2.closeConnectionEmitter.fire({ connectionId: e3, error: void 0 }), t2.socket.destroy();
        }
        for (const e3 of this.leases.values()) this.disposeLease(e3);
        this.leases.clear(), this.server.close(() => {
          this.onFullyClosed?.();
        });
      }
    }
  }
  var I = exports;
  for (var y in t) I[y] = t[y];
  t.__esModule && Object.defineProperty(I, "__esModule", { value: true });
})();
