// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 60039 range:328664..332827
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60039: (A, e, t) => {
  "use strict";
  const r = t(77030), s = t(56970), o = t(55201), { InvalidArgumentError: n, ConnectTimeoutError: i } = t(38238), a = t(29254);
  function Q() {
  }
  let g, E;
  E = !global.FinalizationRegistry || process.env.NODE_V8_COVERAGE || process.env.UNDICI_NO_FG ? class {
    constructor(A2) {
      this._maxCachedSessions = A2, this._sessionCache = /* @__PURE__ */ new Map();
    }
    get(A2) {
      return this._sessionCache.get(A2);
    }
    set(A2, e2) {
      if (0 !== this._maxCachedSessions) {
        if (this._sessionCache.size >= this._maxCachedSessions) {
          const { value: A3 } = this._sessionCache.keys().next();
          this._sessionCache.delete(A3);
        }
        this._sessionCache.set(A2, e2);
      }
    }
  } : class {
    constructor(A2) {
      this._maxCachedSessions = A2, this._sessionCache = /* @__PURE__ */ new Map(), this._sessionRegistry = new global.FinalizationRegistry((A3) => {
        if (this._sessionCache.size < this._maxCachedSessions) return;
        const e2 = this._sessionCache.get(A3);
        void 0 !== e2 && void 0 === e2.deref() && this._sessionCache.delete(A3);
      });
    }
    get(A2) {
      const e2 = this._sessionCache.get(A2);
      return e2 ? e2.deref() : null;
    }
    set(A2, e2) {
      0 !== this._maxCachedSessions && (this._sessionCache.set(A2, new WeakRef(e2)), this._sessionRegistry.register(e2, A2));
    }
  };
  const B = "win32" === process.platform ? (A2, e2) => {
    if (!e2.timeout) return Q;
    let t2 = null, r2 = null;
    const s2 = a.setFastTimeout(() => {
      t2 = setImmediate(() => {
        r2 = setImmediate(() => c(A2.deref(), e2));
      });
    }, e2.timeout);
    return () => {
      a.clearFastTimeout(s2), clearImmediate(t2), clearImmediate(r2);
    };
  } : (A2, e2) => {
    if (!e2.timeout) return Q;
    let t2 = null;
    const r2 = a.setFastTimeout(() => {
      t2 = setImmediate(() => {
        c(A2.deref(), e2);
      });
    }, e2.timeout);
    return () => {
      a.clearFastTimeout(r2), clearImmediate(t2);
    };
  };
  function c(A2, e2) {
    if (null == A2) return;
    let t2 = "Connect Timeout Error";
    Array.isArray(A2.autoSelectFamilyAttemptedAddresses) ? t2 += ` (attempted addresses: ${A2.autoSelectFamilyAttemptedAddresses.join(", ")},` : t2 += ` (attempted address: ${e2.hostname}:${e2.port},`, t2 += ` timeout: ${e2.timeout}ms)`, o.destroy(A2, new i(t2));
  }
  A.exports = function({ allowH2: A2, maxCachedSessions: e2, socketPath: i2, timeout: a2, session: Q2, ...c2 }) {
    if (null != e2 && (!Number.isInteger(e2) || e2 < 0)) throw new n("maxCachedSessions must be a positive integer or zero");
    const I = { path: i2, ...c2 }, C = new E(e2 ?? 100);
    return a2 = a2 ?? 1e4, A2 = null != A2 && A2, function({ hostname: e3, host: n2, protocol: i3, port: E2, servername: c3, localAddress: h, httpSocket: l }, u) {
      let d;
      if ("https:" === i3) {
        g || (g = t(41692));
        const r2 = (c3 = c3 || I.servername || o.getServerName(n2) || null) || e3;
        s(r2);
        const i4 = Q2 || C.get(r2) || null;
        E2 = E2 || 443, d = g.connect({ highWaterMark: 16384, ...I, servername: c3, session: i4, localAddress: h, ALPNProtocols: A2 ? ["http/1.1", "h2"] : ["http/1.1"], socket: l, port: E2, host: e3 }), d.on("session", function(A3) {
          C.set(r2, A3);
        });
      } else s(!l, "httpSocket can only be sent on TLS update"), E2 = E2 || 80, d = r.connect({ highWaterMark: 65536, ...I, localAddress: h, port: E2, host: e3 });
      if (null == I.keepAlive || I.keepAlive) {
        const A3 = void 0 === I.keepAliveInitialDelay ? 6e4 : I.keepAliveInitialDelay;
        d.setKeepAlive(true, A3);
      }
      const f = B(new WeakRef(d), { timeout: a2, hostname: e3, port: E2 });
      return d.setNoDelay(true).once("https:" === i3 ? "secureConnect" : "connect", function() {
        if (queueMicrotask(f), u) {
          const A3 = u;
          u = null, A3(null, this);
        }
      }).on("error", function(A3) {
        if (queueMicrotask(f), u) {
          const e4 = u;
          u = null, e4(A3);
        }
      }), d;
    };
  };
}