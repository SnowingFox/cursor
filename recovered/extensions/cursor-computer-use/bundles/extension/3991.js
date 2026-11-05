// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 3991 range:379651..383223
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3991: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(9278), s2 = t2(2613), o2 = t2(9361), { InvalidArgumentError: r, ConnectTimeoutError: i } = t2(7902);
    let A, c;
    c = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
      constructor(e3) {
        this._maxCachedSessions = e3, this._sessionCache = /* @__PURE__ */ new Map(), this._sessionRegistry = new global.FinalizationRegistry((e4) => {
          if (this._sessionCache.size < this._maxCachedSessions) return;
          const n3 = this._sessionCache.get(e4);
          void 0 !== n3 && void 0 === n3.deref() && this._sessionCache.delete(e4);
        });
      }
      get(e3) {
        const n3 = this._sessionCache.get(e3);
        return n3 ? n3.deref() : null;
      }
      set(e3, n3) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(e3, new WeakRef(n3)), this._sessionRegistry.register(n3, e3));
      }
    } : class {
      constructor(e3) {
        this._maxCachedSessions = e3, this._sessionCache = /* @__PURE__ */ new Map();
      }
      get(e3) {
        return this._sessionCache.get(e3);
      }
      set(e3, n3) {
        if (0 !== this._maxCachedSessions) {
          if (this._sessionCache.size >= this._maxCachedSessions) {
            const { value: e4 } = this._sessionCache.keys().next();
            this._sessionCache.delete(e4);
          }
          this._sessionCache.set(e3, n3);
        }
      }
    }, e2.exports = function({ allowH2: e3, maxCachedSessions: n3, socketPath: l, timeout: d, ...m }) {
      if (null != n3 && (!Number.isInteger(n3) || n3 < 0)) throw new r("maxCachedSessions must be a positive integer or zero");
      const u = { path: l, ...m }, g = new c(n3 ?? 100);
      return d = d ?? 1e4, e3 = null != e3 && e3, function({ hostname: n4, host: r2, protocol: c2, port: l2, servername: m2, localAddress: p, httpSocket: E }, h) {
        let T;
        if ("https:" === c2) {
          A || (A = t2(4756));
          const a3 = (m2 = m2 || u.servername || o2.getServerName(r2) || null) || n4, i2 = g.get(a3) || null;
          s2(a3), T = A.connect({ highWaterMark: 16384, ...u, servername: m2, session: i2, localAddress: p, ALPNProtocols: e3 ? ["http/1.1", "h2"] : ["http/1.1"], socket: E, port: l2 || 443, host: n4 }), T.on("session", function(e4) {
            g.set(a3, e4);
          });
        } else s2(!E, "httpSocket can only be sent on TLS update"), T = a2.connect({ highWaterMark: 65536, ...u, localAddress: p, port: l2 || 80, host: n4 });
        if (null == u.keepAlive || u.keepAlive) {
          const e4 = void 0 === u.keepAliveInitialDelay ? 6e4 : u.keepAliveInitialDelay;
          T.setKeepAlive(true, e4);
        }
        const k = (function(e4, n5) {
          if (!n5) return () => {
          };
          let t3 = null, a3 = null;
          const s3 = setTimeout(() => {
            t3 = setImmediate(() => {
              "win32" === process.platform ? a3 = setImmediate(() => e4()) : e4();
            });
          }, n5);
          return () => {
            clearTimeout(s3), clearImmediate(t3), clearImmediate(a3);
          };
        })(() => (function(e4) {
          o2.destroy(e4, new i());
        })(T), d);
        return T.setNoDelay(true).once("https:" === c2 ? "secureConnect" : "connect", function() {
          if (k(), h) {
            const e4 = h;
            h = null, e4(null, this);
          }
        }).on("error", function(e4) {
          if (k(), h) {
            const n5 = h;
            h = null, n5(e4);
          }
        }), T;
      };
    };
  }