// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4003 range:1047537..1051111
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4003: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(9278), s2 = r2(2613), i2 = r2(3589), { InvalidArgumentError: o2, ConnectTimeoutError: a } = r2(8762);
    let u, c;
    c = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
      constructor(t3) {
        this._maxCachedSessions = t3, this._sessionCache = /* @__PURE__ */ new Map(), this._sessionRegistry = new global.FinalizationRegistry((t4) => {
          if (this._sessionCache.size < this._maxCachedSessions) return;
          const e3 = this._sessionCache.get(t4);
          void 0 !== e3 && void 0 === e3.deref() && this._sessionCache.delete(t4);
        });
      }
      get(t3) {
        const e3 = this._sessionCache.get(t3);
        return e3 ? e3.deref() : null;
      }
      set(t3, e3) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(t3, new WeakRef(e3)), this._sessionRegistry.register(e3, t3));
      }
    } : class {
      constructor(t3) {
        this._maxCachedSessions = t3, this._sessionCache = /* @__PURE__ */ new Map();
      }
      get(t3) {
        return this._sessionCache.get(t3);
      }
      set(t3, e3) {
        if (0 !== this._maxCachedSessions) {
          if (this._sessionCache.size >= this._maxCachedSessions) {
            const { value: t4 } = this._sessionCache.keys().next();
            this._sessionCache.delete(t4);
          }
          this._sessionCache.set(t3, e3);
        }
      }
    }, t2.exports = function({ allowH2: t3, maxCachedSessions: e3, socketPath: l, timeout: m, ...d }) {
      if (null != e3 && (!Number.isInteger(e3) || e3 < 0)) throw new o2("maxCachedSessions must be a positive integer or zero");
      const f = { path: l, ...d }, p = new c(e3 ?? 100);
      return m = m ?? 1e4, t3 = null != t3 && t3, function({ hostname: e4, host: o3, protocol: c2, port: l2, servername: d2, localAddress: h, httpSocket: g }, A) {
        let _;
        if ("https:" === c2) {
          u || (u = r2(4756));
          const n3 = (d2 = d2 || f.servername || i2.getServerName(o3) || null) || e4, a2 = p.get(n3) || null;
          s2(n3), _ = u.connect({ highWaterMark: 16384, ...f, servername: d2, session: a2, localAddress: h, ALPNProtocols: t3 ? ["http/1.1", "h2"] : ["http/1.1"], socket: g, port: l2 || 443, host: e4 }), _.on("session", function(t4) {
            p.set(n3, t4);
          });
        } else s2(!g, "httpSocket can only be sent on TLS update"), _ = n2.connect({ highWaterMark: 65536, ...f, localAddress: h, port: l2 || 80, host: e4 });
        if (null == f.keepAlive || f.keepAlive) {
          const t4 = void 0 === f.keepAliveInitialDelay ? 6e4 : f.keepAliveInitialDelay;
          _.setKeepAlive(true, t4);
        }
        const y = (function(t4, e5) {
          if (!e5) return () => {
          };
          let r3 = null, n3 = null;
          const s3 = setTimeout(() => {
            r3 = setImmediate(() => {
              "win32" === process.platform ? n3 = setImmediate(() => t4()) : t4();
            });
          }, e5);
          return () => {
            clearTimeout(s3), clearImmediate(r3), clearImmediate(n3);
          };
        })(() => (function(t4) {
          i2.destroy(t4, new a());
        })(_), m);
        return _.setNoDelay(true).once("https:" === c2 ? "secureConnect" : "connect", function() {
          if (y(), A) {
            const t4 = A;
            A = null, t4(null, this);
          }
        }).on("error", function(t4) {
          if (y(), A) {
            const e5 = A;
            A = null, e5(t4);
          }
        }), _;
      };
    };
  }