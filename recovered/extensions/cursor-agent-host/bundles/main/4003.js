// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 4003 range:156848..160408
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4003: (e, t, r) => {
    "use strict";
    const n = r(69278), s = r(42613), o = r(83589), { InvalidArgumentError: i, ConnectTimeoutError: a } = r(48762);
    let c, l;
    l = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
      constructor(e2) {
        this._maxCachedSessions = e2, this._sessionCache = /* @__PURE__ */ new Map(), this._sessionRegistry = new global.FinalizationRegistry((e3) => {
          if (this._sessionCache.size < this._maxCachedSessions) return;
          const t2 = this._sessionCache.get(e3);
          void 0 !== t2 && void 0 === t2.deref() && this._sessionCache.delete(e3);
        });
      }
      get(e2) {
        const t2 = this._sessionCache.get(e2);
        return t2 ? t2.deref() : null;
      }
      set(e2, t2) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(e2, new WeakRef(t2)), this._sessionRegistry.register(t2, e2));
      }
    } : class {
      constructor(e2) {
        this._maxCachedSessions = e2, this._sessionCache = /* @__PURE__ */ new Map();
      }
      get(e2) {
        return this._sessionCache.get(e2);
      }
      set(e2, t2) {
        if (0 !== this._maxCachedSessions) {
          if (this._sessionCache.size >= this._maxCachedSessions) {
            const { value: e3 } = this._sessionCache.keys().next();
            this._sessionCache.delete(e3);
          }
          this._sessionCache.set(e2, t2);
        }
      }
    }, e.exports = function({ allowH2: e2, maxCachedSessions: t2, socketPath: u, timeout: d, ...p }) {
      if (null != t2 && (!Number.isInteger(t2) || t2 < 0)) throw new i("maxCachedSessions must be a positive integer or zero");
      const m = { path: u, ...p }, h = new l(t2 ?? 100);
      return d = d ?? 1e4, e2 = null != e2 && e2, function({ hostname: t3, host: i2, protocol: l2, port: u2, servername: p2, localAddress: f, httpSocket: g }, y) {
        let w;
        if ("https:" === l2) {
          c || (c = r(64756));
          const n2 = (p2 = p2 || m.servername || o.getServerName(i2) || null) || t3, a2 = h.get(n2) || null;
          s(n2), w = c.connect({ highWaterMark: 16384, ...m, servername: p2, session: a2, localAddress: f, ALPNProtocols: e2 ? ["http/1.1", "h2"] : ["http/1.1"], socket: g, port: u2 || 443, host: t3 }), w.on("session", function(e3) {
            h.set(n2, e3);
          });
        } else s(!g, "httpSocket can only be sent on TLS update"), w = n.connect({ highWaterMark: 65536, ...m, localAddress: f, port: u2 || 80, host: t3 });
        if (null == m.keepAlive || m.keepAlive) {
          const e3 = void 0 === m.keepAliveInitialDelay ? 6e4 : m.keepAliveInitialDelay;
          w.setKeepAlive(true, e3);
        }
        const v = (function(e3, t4) {
          if (!t4) return () => {
          };
          let r2 = null, n2 = null;
          const s2 = setTimeout(() => {
            r2 = setImmediate(() => {
              "win32" === process.platform ? n2 = setImmediate(() => e3()) : e3();
            });
          }, t4);
          return () => {
            clearTimeout(s2), clearImmediate(r2), clearImmediate(n2);
          };
        })(() => (function(e3) {
          o.destroy(e3, new a());
        })(w), d);
        return w.setNoDelay(true).once("https:" === l2 ? "secureConnect" : "connect", function() {
          if (v(), y) {
            const e3 = y;
            y = null, e3(null, this);
          }
        }).on("error", function(e3) {
          if (v(), y) {
            const t4 = y;
            y = null, t4(e3);
          }
        }), w;
      };
    };
  }