// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 3991 range:375727..379303
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3991: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(9278), s2 = a2(2613), o2 = a2(9361), { InvalidArgumentError: r2, ConnectTimeoutError: i2 } = a2(7902);
    let A, l;
    l = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
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
    }, e2.exports = function({ allowH2: e3, maxCachedSessions: n3, socketPath: c, timeout: m, ...d }) {
      if (null != n3 && (!Number.isInteger(n3) || n3 < 0)) throw new r2("maxCachedSessions must be a positive integer or zero");
      const g = { path: c, ...d }, u = new l(n3 ?? 100);
      return m = m ?? 1e4, e3 = null != e3 && e3, function({ hostname: n4, host: r3, protocol: l2, port: c2, servername: d2, localAddress: E, httpSocket: p }, T) {
        let k;
        if ("https:" === l2) {
          A || (A = a2(4756));
          const t3 = (d2 = d2 || g.servername || o2.getServerName(r3) || null) || n4, i3 = u.get(t3) || null;
          s2(t3), k = A.connect({ highWaterMark: 16384, ...g, servername: d2, session: i3, localAddress: E, ALPNProtocols: e3 ? ["http/1.1", "h2"] : ["http/1.1"], socket: p, port: c2 || 443, host: n4 }), k.on("session", function(e4) {
            u.set(t3, e4);
          });
        } else s2(!p, "httpSocket can only be sent on TLS update"), k = t2.connect({ highWaterMark: 65536, ...g, localAddress: E, port: c2 || 80, host: n4 });
        if (null == g.keepAlive || g.keepAlive) {
          const e4 = void 0 === g.keepAliveInitialDelay ? 6e4 : g.keepAliveInitialDelay;
          k.setKeepAlive(true, e4);
        }
        const I = (function(e4, n5) {
          if (!n5) return () => {
          };
          let a3 = null, t3 = null;
          const s3 = setTimeout(() => {
            a3 = setImmediate(() => {
              "win32" === process.platform ? t3 = setImmediate(() => e4()) : e4();
            });
          }, n5);
          return () => {
            clearTimeout(s3), clearImmediate(a3), clearImmediate(t3);
          };
        })(() => (function(e4) {
          o2.destroy(e4, new i2());
        })(k), m);
        return k.setNoDelay(true).once("https:" === l2 ? "secureConnect" : "connect", function() {
          if (I(), T) {
            const e4 = T;
            T = null, e4(null, this);
          }
        }).on("error", function(e4) {
          if (I(), T) {
            const n5 = T;
            T = null, n5(e4);
          }
        }), k;
      };
    };
  }