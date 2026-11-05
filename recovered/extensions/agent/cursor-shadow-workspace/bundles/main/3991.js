// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 3991 range:375460..379032
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3991: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(9278), r2 = t2(2613), o2 = t2(9361), { InvalidArgumentError: s, ConnectTimeoutError: a } = t2(7902);
    let i, c;
    c = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
      constructor(e3) {
        this._maxCachedSessions = e3, this._sessionCache = /* @__PURE__ */ new Map(), this._sessionRegistry = new global.FinalizationRegistry((e4) => {
          if (this._sessionCache.size < this._maxCachedSessions) return;
          const A3 = this._sessionCache.get(e4);
          void 0 !== A3 && void 0 === A3.deref() && this._sessionCache.delete(e4);
        });
      }
      get(e3) {
        const A3 = this._sessionCache.get(e3);
        return A3 ? A3.deref() : null;
      }
      set(e3, A3) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(e3, new WeakRef(A3)), this._sessionRegistry.register(A3, e3));
      }
    } : class {
      constructor(e3) {
        this._maxCachedSessions = e3, this._sessionCache = /* @__PURE__ */ new Map();
      }
      get(e3) {
        return this._sessionCache.get(e3);
      }
      set(e3, A3) {
        if (0 !== this._maxCachedSessions) {
          if (this._sessionCache.size >= this._maxCachedSessions) {
            const { value: e4 } = this._sessionCache.keys().next();
            this._sessionCache.delete(e4);
          }
          this._sessionCache.set(e3, A3);
        }
      }
    }, e2.exports = function({ allowH2: e3, maxCachedSessions: A3, socketPath: l, timeout: g, ...E }) {
      if (null != A3 && (!Number.isInteger(A3) || A3 < 0)) throw new s("maxCachedSessions must be a positive integer or zero");
      const u = { path: l, ...E }, d = new c(A3 ?? 100);
      return g = g ?? 1e4, e3 = null != e3 && e3, function({ hostname: A4, host: s2, protocol: c2, port: l2, servername: E2, localAddress: I, httpSocket: h }, Q) {
        let m;
        if ("https:" === c2) {
          i || (i = t2(4756));
          const n3 = (E2 = E2 || u.servername || o2.getServerName(s2) || null) || A4, a2 = d.get(n3) || null;
          r2(n3), m = i.connect({ highWaterMark: 16384, ...u, servername: E2, session: a2, localAddress: I, ALPNProtocols: e3 ? ["http/1.1", "h2"] : ["http/1.1"], socket: h, port: l2 || 443, host: A4 }), m.on("session", function(e4) {
            d.set(n3, e4);
          });
        } else r2(!h, "httpSocket can only be sent on TLS update"), m = n2.connect({ highWaterMark: 65536, ...u, localAddress: I, port: l2 || 80, host: A4 });
        if (null == u.keepAlive || u.keepAlive) {
          const e4 = void 0 === u.keepAliveInitialDelay ? 6e4 : u.keepAliveInitialDelay;
          m.setKeepAlive(true, e4);
        }
        const C = (function(e4, A5) {
          if (!A5) return () => {
          };
          let t3 = null, n3 = null;
          const r3 = setTimeout(() => {
            t3 = setImmediate(() => {
              "win32" === process.platform ? n3 = setImmediate(() => e4()) : e4();
            });
          }, A5);
          return () => {
            clearTimeout(r3), clearImmediate(t3), clearImmediate(n3);
          };
        })(() => (function(e4) {
          o2.destroy(e4, new a());
        })(m), g);
        return m.setNoDelay(true).once("https:" === c2 ? "secureConnect" : "connect", function() {
          if (C(), Q) {
            const e4 = Q;
            Q = null, e4(null, this);
          }
        }).on("error", function(e4) {
          if (C(), Q) {
            const A5 = Q;
            Q = null, A5(e4);
          }
        }), m;
      };
    };
  }