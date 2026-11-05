// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/305.js sha256:54d5fa4cf215825eafb00493b51c809c66436b8598c487bd6b63e2be18968ff2
// module: "../utils/dist/lru-cache.js" range:1292964..1315266
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
var n,
  o,
  s,
  i,
  a,
  c,
  l,
  u,
  d,
  h,
  p,
  f,
  m,
  g,
  w,
  y,
  v,
  b,
  S,
  k,
  _,
  C,
  E,
  x,
  P,
  I,
  R,
  T,
  A,
  $,
  M,
  D,
  O,
  F,
  N,
  j,
  L,
  U,
  B,
  W,
  H,
  q,
  z,
  G,
  V,
  K,
  J,
  Z,
  X,
  Q = function (e, t, r, n, o) {
    if ("m" === n) throw new TypeError("Private method is not writable");
    if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
  },
  Y = function (e, t, r, n) {
    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
  };
const ee = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
  te = new Set(),
  re = "object" == typeof process && process ? process : {},
  ne = (e, t, r, n) => {
    "function" == typeof re.emitWarning ? re.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`);
  };
let oe,
  se = globalThis.AbortController;
if (void 0 === se) {
  oe = class {
    constructor() {
      this._onabort = [], this.aborted = !1;
    }
    addEventListener(e, t) {
      this._onabort.push(t);
    }
  }, se = class {
    constructor() {
      this.signal = new oe(), t();
    }
    abort(e) {
      if (!this.signal.aborted) {
        this.signal.reason = e, this.signal.aborted = !0;
        for (const t of this.signal._onabort) t(e);
        this.signal.onabort?.(e);
      }
    }
  };
  let e = "1" !== re.env?.LRU_CACHE_IGNORE_AC_WARNING;
  const t = () => {
    e && (e = !1, ne("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t));
  };
}
Symbol("type");
const ie = e => e && e === Math.floor(e) && e > 0 && Number.isFinite(e),
  ae = e => ie(e) ? e <= 256 ? Uint8Array : e <= 65536 ? Uint16Array : e <= 2 ** 32 ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? ce : null : null;
class ce extends Array {
  constructor(e) {
    super(e), this.fill(0);
  }
}
class le {
  static create(e) {
    const t = ae(e);
    if (!t) return [];
    Q(n, n, !0, "f", o);
    const r = new n(e, t);
    return Q(n, n, !1, "f", o), r;
  }
  constructor(e, t) {
    if (!Y(n, n, "f", o)) throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new t(e), this.length = 0;
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
}
n = le, o = {
  value: !1
};
class ue {
  get perf() {
    return Y(this, p, "f");
  }
  static unsafeExposeInternals(e) {
    return {
      starts: Y(e, x, "f"),
      ttls: Y(e, P, "f"),
      sizes: Y(e, E, "f"),
      keyMap: Y(e, g, "f"),
      keyList: Y(e, w, "f"),
      valList: Y(e, y, "f"),
      next: Y(e, v, "f"),
      prev: Y(e, b, "f"),
      get head() {
        return Y(e, S, "f");
      },
      get tail() {
        return Y(e, k, "f");
      },
      free: Y(e, _, "f"),
      isBackgroundFetch: t => Y(e, s, "m", G).call(e, t),
      backgroundFetch: (t, r, n, o) => Y(e, s, "m", z).call(e, t, r, n, o),
      moveToTail: t => Y(e, s, "m", K).call(e, t),
      indexes: t => Y(e, s, "m", B).call(e, t),
      rindexes: t => Y(e, s, "m", W).call(e, t),
      isStale: t => Y(e, F, "f").call(e, t)
    };
  }
  get max() {
    return Y(this, i, "f");
  }
  get maxSize() {
    return Y(this, a, "f");
  }
  get calculatedSize() {
    return Y(this, m, "f");
  }
  get size() {
    return Y(this, f, "f");
  }
  get fetchMethod() {
    return Y(this, d, "f");
  }
  get memoMethod() {
    return Y(this, h, "f");
  }
  get dispose() {
    return Y(this, c, "f");
  }
  get onInsert() {
    return Y(this, l, "f");
  }
  get disposeAfter() {
    return Y(this, u, "f");
  }
  constructor(e) {
    s.add(this), i.set(this, void 0), a.set(this, void 0), c.set(this, void 0), l.set(this, void 0), u.set(this, void 0), d.set(this, void 0), h.set(this, void 0), p.set(this, void 0), f.set(this, void 0), m.set(this, void 0), g.set(this, void 0), w.set(this, void 0), y.set(this, void 0), v.set(this, void 0), b.set(this, void 0), S.set(this, void 0), k.set(this, void 0), _.set(this, void 0), C.set(this, void 0), E.set(this, void 0), x.set(this, void 0), P.set(this, void 0), I.set(this, void 0), R.set(this, void 0), T.set(this, void 0), A.set(this, void 0), M.set(this, () => {}), D.set(this, () => {}), O.set(this, () => {}), F.set(this, () => !1), j.set(this, e => {}), L.set(this, (e, t, r) => {}), U.set(this, (e, t, r, n) => {
      if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    }), this[X] = "LRUCache";
    const {
      max: t = 0,
      ttl: r,
      ttlResolution: n = 1,
      ttlAutopurge: o,
      updateAgeOnGet: B,
      updateAgeOnHas: W,
      allowStale: H,
      dispose: q,
      onInsert: z,
      disposeAfter: G,
      noDisposeOnSet: V,
      noUpdateTTL: K,
      maxSize: J = 0,
      maxEntrySize: Z = 0,
      sizeCalculation: re,
      fetchMethod: oe,
      memoMethod: se,
      noDeleteOnFetchRejection: ce,
      noDeleteOnStaleGet: de,
      allowStaleOnFetchRejection: he,
      allowStaleOnFetchAbort: pe,
      ignoreFetchAbort: fe,
      perf: me
    } = e;
    if (void 0 !== me && "function" != typeof me?.now) throw new TypeError("perf option must have a now() method if specified");
    if (Q(this, p, me ?? ee, "f"), 0 !== t && !ie(t)) throw new TypeError("max option must be a nonnegative integer");
    const ge = t ? ae(t) : Array;
    if (!ge) throw new Error(`invalid max value: ${t}`);
    if (Q(this, i, t, "f"), Q(this, a, J, "f"), this.maxEntrySize = Z || Y(this, a, "f"), this.sizeCalculation = re, this.sizeCalculation) {
      if (!Y(this, a, "f") && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
    }
    if (void 0 !== se && "function" != typeof se) throw new TypeError("memoMethod must be a function if defined");
    if (Q(this, h, se, "f"), void 0 !== oe && "function" != typeof oe) throw new TypeError("fetchMethod must be a function if specified");
    if (Q(this, d, oe, "f"), Q(this, R, !!oe, "f"), Q(this, g, new Map(), "f"), Q(this, w, new Array(t).fill(void 0), "f"), Q(this, y, new Array(t).fill(void 0), "f"), Q(this, v, new ge(t), "f"), Q(this, b, new ge(t), "f"), Q(this, S, 0, "f"), Q(this, k, 0, "f"), Q(this, _, le.create(t), "f"), Q(this, f, 0, "f"), Q(this, m, 0, "f"), "function" == typeof q && Q(this, c, q, "f"), "function" == typeof z && Q(this, l, z, "f"), "function" == typeof G ? (Q(this, u, G, "f"), Q(this, C, [], "f")) : (Q(this, u, void 0, "f"), Q(this, C, void 0, "f")), Q(this, I, !!Y(this, c, "f"), "f"), Q(this, A, !!Y(this, l, "f"), "f"), Q(this, T, !!Y(this, u, "f"), "f"), this.noDisposeOnSet = !!V, this.noUpdateTTL = !!K, this.noDeleteOnFetchRejection = !!ce, this.allowStaleOnFetchRejection = !!he, this.allowStaleOnFetchAbort = !!pe, this.ignoreFetchAbort = !!fe, 0 !== this.maxEntrySize) {
      if (0 !== Y(this, a, "f") && !ie(Y(this, a, "f"))) throw new TypeError("maxSize must be a positive integer if specified");
      if (!ie(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
      Y(this, s, "m", N).call(this);
    }
    if (this.allowStale = !!H, this.noDeleteOnStaleGet = !!de, this.updateAgeOnGet = !!B, this.updateAgeOnHas = !!W, this.ttlResolution = ie(n) || 0 === n ? n : 1, this.ttlAutopurge = !!o, this.ttl = r || 0, this.ttl) {
      if (!ie(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
      Y(this, s, "m", $).call(this);
    }
    if (0 === Y(this, i, "f") && 0 === this.ttl && 0 === Y(this, a, "f")) throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !Y(this, i, "f") && !Y(this, a, "f")) {
      const e = "LRU_CACHE_UNBOUNDED";
      (e => !te.has(e))(e) && (te.add(e), ne("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, ue));
    }
  }
  getRemainingTTL(e) {
    return Y(this, g, "f").has(e) ? 1 / 0 : 0;
  }
  *entries() {
    for (const e of Y(this, s, "m", B).call(this)) void 0 === Y(this, y, "f")[e] || void 0 === Y(this, w, "f")[e] || Y(this, s, "m", G).call(this, Y(this, y, "f")[e]) || (yield [Y(this, w, "f")[e], Y(this, y, "f")[e]]);
  }
  *rentries() {
    for (const e of Y(this, s, "m", W).call(this)) void 0 === Y(this, y, "f")[e] || void 0 === Y(this, w, "f")[e] || Y(this, s, "m", G).call(this, Y(this, y, "f")[e]) || (yield [Y(this, w, "f")[e], Y(this, y, "f")[e]]);
  }
  *keys() {
    for (const e of Y(this, s, "m", B).call(this)) {
      const t = Y(this, w, "f")[e];
      void 0 === t || Y(this, s, "m", G).call(this, Y(this, y, "f")[e]) || (yield t);
    }
  }
  *rkeys() {
    for (const e of Y(this, s, "m", W).call(this)) {
      const t = Y(this, w, "f")[e];
      void 0 === t || Y(this, s, "m", G).call(this, Y(this, y, "f")[e]) || (yield t);
    }
  }
  *values() {
    for (const e of Y(this, s, "m", B).call(this)) void 0 === Y(this, y, "f")[e] || Y(this, s, "m", G).call(this, Y(this, y, "f")[e]) || (yield Y(this, y, "f")[e]);
  }
  *rvalues() {
    for (const e of Y(this, s, "m", W).call(this)) void 0 === Y(this, y, "f")[e] || Y(this, s, "m", G).call(this, Y(this, y, "f")[e]) || (yield Y(this, y, "f")[e]);
  }
  [(i = new WeakMap(), a = new WeakMap(), c = new WeakMap(), l = new WeakMap(), u = new WeakMap(), d = new WeakMap(), h = new WeakMap(), p = new WeakMap(), f = new WeakMap(), m = new WeakMap(), g = new WeakMap(), w = new WeakMap(), y = new WeakMap(), v = new WeakMap(), b = new WeakMap(), S = new WeakMap(), k = new WeakMap(), _ = new WeakMap(), C = new WeakMap(), E = new WeakMap(), x = new WeakMap(), P = new WeakMap(), I = new WeakMap(), R = new WeakMap(), T = new WeakMap(), A = new WeakMap(), M = new WeakMap(), D = new WeakMap(), O = new WeakMap(), F = new WeakMap(), j = new WeakMap(), L = new WeakMap(), U = new WeakMap(), s = new WeakSet(), $ = function () {
    const e = new ce(Y(this, i, "f")),
      t = new ce(Y(this, i, "f"));
    Q(this, P, e, "f"), Q(this, x, t, "f"), Q(this, O, (r, n, o = Y(this, p, "f").now()) => {
      if (t[r] = 0 !== n ? o : 0, e[r] = n, 0 !== n && this.ttlAutopurge) {
        const e = setTimeout(() => {
          Y(this, F, "f").call(this, r) && Y(this, s, "m", J).call(this, Y(this, w, "f")[r], "expire");
        }, n + 1);
        e.unref && e.unref();
      }
    }, "f"), Q(this, M, r => {
      t[r] = 0 !== e[r] ? Y(this, p, "f").now() : 0;
    }, "f"), Q(this, D, (o, s) => {
      if (e[s]) {
        const i = e[s],
          a = t[s];
        if (!i || !a) return;
        o.ttl = i, o.start = a, o.now = r || n();
        const c = o.now - a;
        o.remainingTTL = i - c;
      }
    }, "f");
    let r = 0;
    const n = () => {
      const e = Y(this, p, "f").now();
      if (this.ttlResolution > 0) {
        r = e;
        const t = setTimeout(() => {
          r = 0;
        }, this.ttlResolution);
        t.unref && t.unref();
      }
      return e;
    };
    this.getRemainingTTL = o => {
      const s = Y(this, g, "f").get(o);
      if (void 0 === s) return 0;
      const i = e[s],
        a = t[s];
      return i && a ? i - ((r || n()) - a) : 1 / 0;
    }, Q(this, F, o => {
      const s = t[o],
        i = e[o];
      return !!i && !!s && (r || n()) - s > i;
    }, "f");
  }, N = function () {
    const e = new ce(Y(this, i, "f"));
    Q(this, m, 0, "f"), Q(this, E, e, "f"), Q(this, j, t => {
      Q(this, m, Y(this, m, "f") - e[t], "f"), e[t] = 0;
    }, "f"), Q(this, U, (e, t, r, n) => {
      if (Y(this, s, "m", G).call(this, t)) return 0;
      if (!ie(r)) {
        if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
        if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
        if (r = n(t, e), !ie(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
      }
      return r;
    }, "f"), Q(this, L, (t, r, n) => {
      if (e[t] = r, Y(this, a, "f")) {
        const r = Y(this, a, "f") - e[t];
        for (; Y(this, m, "f") > r;) Y(this, s, "m", q).call(this, !0);
      }
      Q(this, m, Y(this, m, "f") + e[t], "f"), n && (n.entrySize = r, n.totalCalculatedSize = Y(this, m, "f"));
    }, "f");
  }, B = function* ({
    allowStale: e = this.allowStale
  } = {}) {
    if (Y(this, f, "f")) for (let t = Y(this, k, "f"); Y(this, s, "m", H).call(this, t) && (!e && Y(this, F, "f").call(this, t) || (yield t), t !== Y(this, S, "f"));) t = Y(this, b, "f")[t];
  }, W = function* ({
    allowStale: e = this.allowStale
  } = {}) {
    if (Y(this, f, "f")) for (let t = Y(this, S, "f"); Y(this, s, "m", H).call(this, t) && (!e && Y(this, F, "f").call(this, t) || (yield t), t !== Y(this, k, "f"));) t = Y(this, v, "f")[t];
  }, H = function (e) {
    return void 0 !== e && Y(this, g, "f").get(Y(this, w, "f")[e]) === e;
  }, Symbol.iterator)]() {
    return this.entries();
  }
  find(e, t = {}) {
    for (const r of Y(this, s, "m", B).call(this)) {
      const n = Y(this, y, "f")[r],
        o = Y(this, s, "m", G).call(this, n) ? n.__staleWhileFetching : n;
      if (void 0 !== o && e(o, Y(this, w, "f")[r], this)) return this.get(Y(this, w, "f")[r], t);
    }
  }
  forEach(e, t = this) {
    for (const r of Y(this, s, "m", B).call(this)) {
      const n = Y(this, y, "f")[r],
        o = Y(this, s, "m", G).call(this, n) ? n.__staleWhileFetching : n;
      void 0 !== o && e.call(t, o, Y(this, w, "f")[r], this);
    }
  }
  rforEach(e, t = this) {
    for (const r of Y(this, s, "m", W).call(this)) {
      const n = Y(this, y, "f")[r],
        o = Y(this, s, "m", G).call(this, n) ? n.__staleWhileFetching : n;
      void 0 !== o && e.call(t, o, Y(this, w, "f")[r], this);
    }
  }
  purgeStale() {
    let e = !1;
    for (const t of Y(this, s, "m", W).call(this, {
      allowStale: !0
    })) Y(this, F, "f").call(this, t) && (Y(this, s, "m", J).call(this, Y(this, w, "f")[t], "expire"), e = !0);
    return e;
  }
  info(e) {
    const t = Y(this, g, "f").get(e);
    if (void 0 === t) return;
    const r = Y(this, y, "f")[t],
      n = Y(this, s, "m", G).call(this, r) ? r.__staleWhileFetching : r;
    if (void 0 === n) return;
    const o = {
      value: n
    };
    if (Y(this, P, "f") && Y(this, x, "f")) {
      const e = Y(this, P, "f")[t],
        r = Y(this, x, "f")[t];
      if (e && r) {
        const t = e - (Y(this, p, "f").now() - r);
        o.ttl = t, o.start = Date.now();
      }
    }
    return Y(this, E, "f") && (o.size = Y(this, E, "f")[t]), o;
  }
  dump() {
    const e = [];
    for (const t of Y(this, s, "m", B).call(this, {
      allowStale: !0
    })) {
      const r = Y(this, w, "f")[t],
        n = Y(this, y, "f")[t],
        o = Y(this, s, "m", G).call(this, n) ? n.__staleWhileFetching : n;
      if (void 0 === o || void 0 === r) continue;
      const i = {
        value: o
      };
      if (Y(this, P, "f") && Y(this, x, "f")) {
        i.ttl = Y(this, P, "f")[t];
        const e = Y(this, p, "f").now() - Y(this, x, "f")[t];
        i.start = Math.floor(Date.now() - e);
      }
      Y(this, E, "f") && (i.size = Y(this, E, "f")[t]), e.unshift([r, i]);
    }
    return e;
  }
  load(e) {
    this.clear();
    for (const [t, r] of e) {
      if (r.start) {
        const e = Date.now() - r.start;
        r.start = Y(this, p, "f").now() - e;
      }
      this.set(t, r.value, r);
    }
  }
  set(e, t, r = {}) {
    var n;
    if (void 0 === t) return this.delete(e), this;
    const {
      ttl: o = this.ttl,
      start: a,
      noDisposeOnSet: d = this.noDisposeOnSet,
      sizeCalculation: h = this.sizeCalculation,
      status: p
    } = r;
    let {
      noUpdateTTL: m = this.noUpdateTTL
    } = r;
    const S = Y(this, U, "f").call(this, e, t, r.size || 0, h);
    if (this.maxEntrySize && S > this.maxEntrySize) return p && (p.set = "miss", p.maxEntrySizeExceeded = !0), Y(this, s, "m", J).call(this, e, "set"), this;
    let E = 0 === Y(this, f, "f") ? void 0 : Y(this, g, "f").get(e);
    if (void 0 === E) E = 0 === Y(this, f, "f") ? Y(this, k, "f") : 0 !== Y(this, _, "f").length ? Y(this, _, "f").pop() : Y(this, f, "f") === Y(this, i, "f") ? Y(this, s, "m", q).call(this, !1) : Y(this, f, "f"), Y(this, w, "f")[E] = e, Y(this, y, "f")[E] = t, Y(this, g, "f").set(e, E), Y(this, v, "f")[Y(this, k, "f")] = E, Y(this, b, "f")[E] = Y(this, k, "f"), Q(this, k, E, "f"), Q(this, f, (n = Y(this, f, "f"), ++n), "f"), Y(this, L, "f").call(this, E, S, p), p && (p.set = "add"), m = !1, Y(this, A, "f") && Y(this, l, "f")?.call(this, t, e, "add");else {
      Y(this, s, "m", K).call(this, E);
      const r = Y(this, y, "f")[E];
      if (t !== r) {
        if (Y(this, R, "f") && Y(this, s, "m", G).call(this, r)) {
          r.__abortController.abort(new Error("replaced"));
          const {
            __staleWhileFetching: t
          } = r;
          void 0 === t || d || (Y(this, I, "f") && Y(this, c, "f")?.call(this, t, e, "set"), Y(this, T, "f") && Y(this, C, "f")?.push([t, e, "set"]));
        } else d || (Y(this, I, "f") && Y(this, c, "f")?.call(this, r, e, "set"), Y(this, T, "f") && Y(this, C, "f")?.push([r, e, "set"]));
        if (Y(this, j, "f").call(this, E), Y(this, L, "f").call(this, E, S, p), Y(this, y, "f")[E] = t, p) {
          p.set = "replace";
          const e = r && Y(this, s, "m", G).call(this, r) ? r.__staleWhileFetching : r;
          void 0 !== e && (p.oldValue = e);
        }
      } else p && (p.set = "update");
      Y(this, A, "f") && this.onInsert?.(t, e, t === r ? "update" : "replace");
    }
    if (0 === o || Y(this, P, "f") || Y(this, s, "m", $).call(this), Y(this, P, "f") && (m || Y(this, O, "f").call(this, E, o, a), p && Y(this, D, "f").call(this, p, E)), !d && Y(this, T, "f") && Y(this, C, "f")) {
      const e = Y(this, C, "f");
      let t;
      for (; t = e?.shift();) Y(this, u, "f")?.call(this, ...t);
    }
    return this;
  }
  pop() {
    try {
      for (; Y(this, f, "f");) {
        const e = Y(this, y, "f")[Y(this, S, "f")];
        if (Y(this, s, "m", q).call(this, !0), Y(this, s, "m", G).call(this, e)) {
          if (e.__staleWhileFetching) return e.__staleWhileFetching;
        } else if (void 0 !== e) return e;
      }
      return;
    } finally {
      if (Y(this, T, "f") && Y(this, C, "f")) {
        const e = Y(this, C, "f");
        let t;
        for (; t = e?.shift();) Y(this, u, "f")?.call(this, ...t);
      }
    }
  }
  has(e, t = {}) {
    const {
        updateAgeOnHas: r = this.updateAgeOnHas,
        status: n
      } = t,
      o = Y(this, g, "f").get(e);
    if (void 0 !== o) {
      const e = Y(this, y, "f")[o];
      if (Y(this, s, "m", G).call(this, e) && void 0 === e.__staleWhileFetching) return !1;
      if (!Y(this, F, "f").call(this, o)) return r && Y(this, M, "f").call(this, o), n && (n.has = "hit", Y(this, D, "f").call(this, n, o)), !0;
      n && (n.has = "stale", Y(this, D, "f").call(this, n, o));
    } else n && (n.has = "miss");
    return !1;
  }
  peek(e, t = {}) {
    const {
        allowStale: r = this.allowStale
      } = t,
      n = Y(this, g, "f").get(e);
    if (void 0 === n || !r && Y(this, F, "f").call(this, n)) return;
    const o = Y(this, y, "f")[n];
    return Y(this, s, "m", G).call(this, o) ? o.__staleWhileFetching : o;
  }
  async fetch(e, t = {}) {
    const {
      allowStale: r = this.allowStale,
      updateAgeOnGet: n = this.updateAgeOnGet,
      noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
      ttl: i = this.ttl,
      noDisposeOnSet: a = this.noDisposeOnSet,
      size: c = 0,
      sizeCalculation: l = this.sizeCalculation,
      noUpdateTTL: u = this.noUpdateTTL,
      noDeleteOnFetchRejection: d = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection: h = this.allowStaleOnFetchRejection,
      ignoreFetchAbort: p = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort,
      context: m,
      forceRefresh: w = !1,
      status: v,
      signal: b
    } = t;
    if (!Y(this, R, "f")) return v && (v.fetch = "get"), this.get(e, {
      allowStale: r,
      updateAgeOnGet: n,
      noDeleteOnStaleGet: o,
      status: v
    });
    const S = {
        allowStale: r,
        updateAgeOnGet: n,
        noDeleteOnStaleGet: o,
        ttl: i,
        noDisposeOnSet: a,
        size: c,
        sizeCalculation: l,
        noUpdateTTL: u,
        noDeleteOnFetchRejection: d,
        allowStaleOnFetchRejection: h,
        allowStaleOnFetchAbort: f,
        ignoreFetchAbort: p,
        status: v,
        signal: b
      },
      k = Y(this, g, "f").get(e);
    if (void 0 === k) {
      v && (v.fetch = "miss");
      const t = Y(this, s, "m", z).call(this, e, k, S, m);
      return t.__returned = t;
    }
    {
      const t = Y(this, y, "f")[k];
      if (Y(this, s, "m", G).call(this, t)) {
        const e = r && void 0 !== t.__staleWhileFetching;
        return v && (v.fetch = "inflight", e && (v.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t;
      }
      const o = Y(this, F, "f").call(this, k);
      if (!w && !o) return v && (v.fetch = "hit"), Y(this, s, "m", K).call(this, k), n && Y(this, M, "f").call(this, k), v && Y(this, D, "f").call(this, v, k), t;
      const i = Y(this, s, "m", z).call(this, e, k, S, m),
        a = void 0 !== i.__staleWhileFetching && r;
      return v && (v.fetch = o ? "stale" : "refresh", a && o && (v.returnedStale = !0)), a ? i.__staleWhileFetching : i.__returned = i;
    }
  }
  async forceFetch(e, t = {}) {
    const r = await this.fetch(e, t);
    if (void 0 === r) throw new Error("fetch() returned undefined");
    return r;
  }
  memo(e, t = {}) {
    const r = Y(this, h, "f");
    if (!r) throw new Error("no memoMethod provided to constructor");
    const {
        context: n,
        forceRefresh: o,
        ...s
      } = t,
      i = this.get(e, s);
    if (!o && void 0 !== i) return i;
    const a = r(e, i, {
      options: s,
      context: n
    });
    return this.set(e, a, s), a;
  }
  get(e, t = {}) {
    const {
        allowStale: r = this.allowStale,
        updateAgeOnGet: n = this.updateAgeOnGet,
        noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
        status: i
      } = t,
      a = Y(this, g, "f").get(e);
    if (void 0 !== a) {
      const t = Y(this, y, "f")[a],
        c = Y(this, s, "m", G).call(this, t);
      return i && Y(this, D, "f").call(this, i, a), Y(this, F, "f").call(this, a) ? (i && (i.get = "stale"), c ? (i && r && void 0 !== t.__staleWhileFetching && (i.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (o || Y(this, s, "m", J).call(this, e, "expire"), i && r && (i.returnedStale = !0), r ? t : void 0)) : (i && (i.get = "hit"), c ? t.__staleWhileFetching : (Y(this, s, "m", K).call(this, a), n && Y(this, M, "f").call(this, a), t));
    }
    i && (i.get = "miss");
  }
  delete(e) {
    return Y(this, s, "m", J).call(this, e, "delete");
  }
  clear() {
    Y(this, s, "m", Z).call(this, "delete");
  }
}
X = Symbol.toStringTag, q = function (e) {
  var t;
  const r = Y(this, S, "f"),
    n = Y(this, w, "f")[r],
    o = Y(this, y, "f")[r];
  return Y(this, R, "f") && Y(this, s, "m", G).call(this, o) ? o.__abortController.abort(new Error("evicted")) : (Y(this, I, "f") || Y(this, T, "f")) && (Y(this, I, "f") && Y(this, c, "f")?.call(this, o, n, "evict"), Y(this, T, "f") && Y(this, C, "f")?.push([o, n, "evict"])), Y(this, j, "f").call(this, r), e && (Y(this, w, "f")[r] = void 0, Y(this, y, "f")[r] = void 0, Y(this, _, "f").push(r)), 1 === Y(this, f, "f") ? (Q(this, S, Q(this, k, 0, "f"), "f"), Y(this, _, "f").length = 0) : Q(this, S, Y(this, v, "f")[r], "f"), Y(this, g, "f").delete(n), Q(this, f, (t = Y(this, f, "f"), --t), "f"), r;
}, z = function (e, t, r, n) {
  const o = void 0 === t ? void 0 : Y(this, y, "f")[t];
  if (Y(this, s, "m", G).call(this, o)) return o;
  const i = new se(),
    {
      signal: a
    } = r;
  a?.addEventListener("abort", () => i.abort(a.reason), {
    signal: i.signal
  });
  const c = {
      signal: i.signal,
      options: r,
      context: n
    },
    l = (n, o = !1) => {
      const {
          aborted: a
        } = i.signal,
        l = r.ignoreFetchAbort && void 0 !== n;
      if (r.status && (a && !o ? (r.status.fetchAborted = !0, r.status.fetchError = i.signal.reason, l && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), a && !l && !o) return u(i.signal.reason);
      const d = h,
        p = Y(this, y, "f")[t];
      return (p === h || l && o && void 0 === p) && (void 0 === n ? void 0 !== d.__staleWhileFetching ? Y(this, y, "f")[t] = d.__staleWhileFetching : Y(this, s, "m", J).call(this, e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, n, c.options))), n;
    },
    u = n => {
      const {
          aborted: o
        } = i.signal,
        a = o && r.allowStaleOnFetchAbort,
        c = a || r.allowStaleOnFetchRejection,
        l = c || r.noDeleteOnFetchRejection,
        u = h;
      if (Y(this, y, "f")[t] === h && (l && void 0 !== u.__staleWhileFetching ? a || (Y(this, y, "f")[t] = u.__staleWhileFetching) : Y(this, s, "m", J).call(this, e, "fetch")), c) return r.status && void 0 !== u.__staleWhileFetching && (r.status.returnedStale = !0), u.__staleWhileFetching;
      if (u.__returned === u) throw n;
    };
  r.status && (r.status.fetchDispatched = !0);
  const h = new Promise((t, n) => {
      const s = Y(this, d, "f")?.call(this, e, o, c);
      s && s instanceof Promise && s.then(e => t(void 0 === e ? void 0 : e), n), i.signal.addEventListener("abort", () => {
        r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = e => l(e, !0)));
      });
    }).then(l, e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), u(e))),
    p = Object.assign(h, {
      __abortController: i,
      __staleWhileFetching: o,
      __returned: void 0
    });
  return void 0 === t ? (this.set(e, p, {
    ...c.options,
    status: void 0
  }), t = Y(this, g, "f").get(e)) : Y(this, y, "f")[t] = p, p;
}, G = function (e) {
  if (!Y(this, R, "f")) return !1;
  const t = e;
  return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof se;
}, V = function (e, t) {
  Y(this, b, "f")[t] = e, Y(this, v, "f")[e] = t;
}, K = function (e) {
  e !== Y(this, k, "f") && (e === Y(this, S, "f") ? Q(this, S, Y(this, v, "f")[e], "f") : Y(this, s, "m", V).call(this, Y(this, b, "f")[e], Y(this, v, "f")[e]), Y(this, s, "m", V).call(this, Y(this, k, "f"), e), Q(this, k, e, "f"));
}, J = function (e, t) {
  var r;
  let n = !1;
  if (0 !== Y(this, f, "f")) {
    const o = Y(this, g, "f").get(e);
    if (void 0 !== o) if (n = !0, 1 === Y(this, f, "f")) Y(this, s, "m", Z).call(this, t);else {
      Y(this, j, "f").call(this, o);
      const n = Y(this, y, "f")[o];
      if (Y(this, s, "m", G).call(this, n) ? n.__abortController.abort(new Error("deleted")) : (Y(this, I, "f") || Y(this, T, "f")) && (Y(this, I, "f") && Y(this, c, "f")?.call(this, n, e, t), Y(this, T, "f") && Y(this, C, "f")?.push([n, e, t])), Y(this, g, "f").delete(e), Y(this, w, "f")[o] = void 0, Y(this, y, "f")[o] = void 0, o === Y(this, k, "f")) Q(this, k, Y(this, b, "f")[o], "f");else if (o === Y(this, S, "f")) Q(this, S, Y(this, v, "f")[o], "f");else {
        const e = Y(this, b, "f")[o];
        Y(this, v, "f")[e] = Y(this, v, "f")[o];
        const t = Y(this, v, "f")[o];
        Y(this, b, "f")[t] = Y(this, b, "f")[o];
      }
      Q(this, f, (r = Y(this, f, "f"), --r), "f"), Y(this, _, "f").push(o);
    }
  }
  if (Y(this, T, "f") && Y(this, C, "f")?.length) {
    const e = Y(this, C, "f");
    let t;
    for (; t = e?.shift();) Y(this, u, "f")?.call(this, ...t);
  }
  return n;
}, Z = function (e) {
  for (const t of Y(this, s, "m", W).call(this, {
    allowStale: !0
  })) {
    const r = Y(this, y, "f")[t];
    if (Y(this, s, "m", G).call(this, r)) r.__abortController.abort(new Error("deleted"));else {
      const n = Y(this, w, "f")[t];
      Y(this, I, "f") && Y(this, c, "f")?.call(this, r, n, e), Y(this, T, "f") && Y(this, C, "f")?.push([r, n, e]);
    }
  }
  if (Y(this, g, "f").clear(), Y(this, y, "f").fill(void 0), Y(this, w, "f").fill(void 0), Y(this, P, "f") && Y(this, x, "f") && (Y(this, P, "f").fill(0), Y(this, x, "f").fill(0)), Y(this, E, "f") && Y(this, E, "f").fill(0), Q(this, S, 0, "f"), Q(this, k, 0, "f"), Y(this, _, "f").length = 0, Q(this, m, 0, "f"), Q(this, f, 0, "f"), Y(this, T, "f") && Y(this, C, "f")) {
    const e = Y(this, C, "f");
    let t;
    for (; t = e?.shift();) Y(this, u, "f")?.call(this, ...t);
  }
};
export { ue as q };
