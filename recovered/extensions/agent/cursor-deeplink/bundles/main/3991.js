// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3991 range:478806..482378
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3991: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(9278), r2 = A2(2613), o2 = A2(9361), { InvalidArgumentError: s, ConnectTimeoutError: i } = A2(7902);
    let a, c;
    c = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
      constructor(e3) {
        this._maxCachedSessions = e3, this._sessionCache = /* @__PURE__ */ new Map(), this._sessionRegistry = new global.FinalizationRegistry((e4) => {
          if (this._sessionCache.size < this._maxCachedSessions) return;
          const t3 = this._sessionCache.get(e4);
          void 0 !== t3 && void 0 === t3.deref() && this._sessionCache.delete(e4);
        });
      }
      get(e3) {
        const t3 = this._sessionCache.get(e3);
        return t3 ? t3.deref() : null;
      }
      set(e3, t3) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(e3, new WeakRef(t3)), this._sessionRegistry.register(t3, e3));
      }
    } : class {
      constructor(e3) {
        this._maxCachedSessions = e3, this._sessionCache = /* @__PURE__ */ new Map();
      }
      get(e3) {
        return this._sessionCache.get(e3);
      }
      set(e3, t3) {
        if (0 !== this._maxCachedSessions) {
          if (this._sessionCache.size >= this._maxCachedSessions) {
            const { value: e4 } = this._sessionCache.keys().next();
            this._sessionCache.delete(e4);
          }
          this._sessionCache.set(e3, t3);
        }
      }
    }, e2.exports = function({ allowH2: e3, maxCachedSessions: t3, socketPath: l, timeout: u, ...g }) {
      if (null != t3 && (!Number.isInteger(t3) || t3 < 0)) throw new s("maxCachedSessions must be a positive integer or zero");
      const E = { path: l, ...g }, h = new c(t3 ?? 100);
      return u = u ?? 1e4, e3 = null != e3 && e3, function({ hostname: t4, host: s2, protocol: c2, port: l2, servername: g2, localAddress: d, httpSocket: I }, B) {
        let Q;
        if ("https:" === c2) {
          a || (a = A2(4756));
          const n3 = (g2 = g2 || E.servername || o2.getServerName(s2) || null) || t4, i2 = h.get(n3) || null;
          r2(n3), Q = a.connect({ highWaterMark: 16384, ...E, servername: g2, session: i2, localAddress: d, ALPNProtocols: e3 ? ["http/1.1", "h2"] : ["http/1.1"], socket: I, port: l2 || 443, host: t4 }), Q.on("session", function(e4) {
            h.set(n3, e4);
          });
        } else r2(!I, "httpSocket can only be sent on TLS update"), Q = n2.connect({ highWaterMark: 65536, ...E, localAddress: d, port: l2 || 80, host: t4 });
        if (null == E.keepAlive || E.keepAlive) {
          const e4 = void 0 === E.keepAliveInitialDelay ? 6e4 : E.keepAliveInitialDelay;
          Q.setKeepAlive(true, e4);
        }
        const f = (function(e4, t5) {
          if (!t5) return () => {
          };
          let A3 = null, n3 = null;
          const r3 = setTimeout(() => {
            A3 = setImmediate(() => {
              "win32" === process.platform ? n3 = setImmediate(() => e4()) : e4();
            });
          }, t5);
          return () => {
            clearTimeout(r3), clearImmediate(A3), clearImmediate(n3);
          };
        })(() => (function(e4) {
          o2.destroy(e4, new i());
        })(Q), u);
        return Q.setNoDelay(true).once("https:" === c2 ? "secureConnect" : "connect", function() {
          if (f(), B) {
            const e4 = B;
            B = null, e4(null, this);
          }
        }).on("error", function(e4) {
          if (f(), B) {
            const t5 = B;
            B = null, t5(e4);
          }
        }), Q;
      };
    };
  }