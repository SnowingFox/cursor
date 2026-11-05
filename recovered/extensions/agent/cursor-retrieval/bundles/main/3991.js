// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3991 range:681206..684782
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3991: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(9278), s2 = n2(2613), o2 = n2(9361), { InvalidArgumentError: r2, ConnectTimeoutError: i2 } = n2(7902);
    let l, d;
    d = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
      constructor(e3) {
        this._maxCachedSessions = e3, this._sessionCache = /* @__PURE__ */ new Map(), this._sessionRegistry = new global.FinalizationRegistry((e4) => {
          if (this._sessionCache.size < this._maxCachedSessions) return;
          const a3 = this._sessionCache.get(e4);
          void 0 !== a3 && void 0 === a3.deref() && this._sessionCache.delete(e4);
        });
      }
      get(e3) {
        const a3 = this._sessionCache.get(e3);
        return a3 ? a3.deref() : null;
      }
      set(e3, a3) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(e3, new WeakRef(a3)), this._sessionRegistry.register(a3, e3));
      }
    } : class {
      constructor(e3) {
        this._maxCachedSessions = e3, this._sessionCache = /* @__PURE__ */ new Map();
      }
      get(e3) {
        return this._sessionCache.get(e3);
      }
      set(e3, a3) {
        if (0 !== this._maxCachedSessions) {
          if (this._sessionCache.size >= this._maxCachedSessions) {
            const { value: e4 } = this._sessionCache.keys().next();
            this._sessionCache.delete(e4);
          }
          this._sessionCache.set(e3, a3);
        }
      }
    }, e2.exports = function({ allowH2: e3, maxCachedSessions: a3, socketPath: m, timeout: c, ...p }) {
      if (null != a3 && (!Number.isInteger(a3) || a3 < 0)) throw new r2("maxCachedSessions must be a positive integer or zero");
      const A = { path: m, ...p }, u = new d(a3 ?? 100);
      return c = c ?? 1e4, e3 = null != e3 && e3, function({ hostname: a4, host: r3, protocol: d2, port: m2, servername: p2, localAddress: g, httpSocket: T }, h) {
        let k;
        if ("https:" === d2) {
          l || (l = n2(4756));
          const t3 = (p2 = p2 || A.servername || o2.getServerName(r3) || null) || a4, i3 = u.get(t3) || null;
          s2(t3), k = l.connect({ highWaterMark: 16384, ...A, servername: p2, session: i3, localAddress: g, ALPNProtocols: e3 ? ["http/1.1", "h2"] : ["http/1.1"], socket: T, port: m2 || 443, host: a4 }), k.on("session", function(e4) {
            u.set(t3, e4);
          });
        } else s2(!T, "httpSocket can only be sent on TLS update"), k = t2.connect({ highWaterMark: 65536, ...A, localAddress: g, port: m2 || 80, host: a4 });
        if (null == A.keepAlive || A.keepAlive) {
          const e4 = void 0 === A.keepAliveInitialDelay ? 6e4 : A.keepAliveInitialDelay;
          k.setKeepAlive(true, e4);
        }
        const _ = (function(e4, a5) {
          if (!a5) return () => {
          };
          let n3 = null, t3 = null;
          const s3 = setTimeout(() => {
            n3 = setImmediate(() => {
              "win32" === process.platform ? t3 = setImmediate(() => e4()) : e4();
            });
          }, a5);
          return () => {
            clearTimeout(s3), clearImmediate(n3), clearImmediate(t3);
          };
        })(() => (function(e4) {
          o2.destroy(e4, new i2());
        })(k), c);
        return k.setNoDelay(true).once("https:" === d2 ? "secureConnect" : "connect", function() {
          if (_(), h) {
            const e4 = h;
            h = null, e4(null, this);
          }
        }).on("error", function(e4) {
          if (_(), h) {
            const a5 = h;
            h = null, a5(e4);
          }
        }), k;
      };
    };
  }