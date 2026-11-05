// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 68505 range:6139807..6172369
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68505: (e, t, r) => {
    "use strict";
    r.d(t, { q: () => ue });
    var n, s, o, i, a, c, l, u, d, p, m, h, f, g, y, w, v, _, b, S, k, x, E, I, T, C, P, A, R, M, J, O, B, D, q, N, F, U, L, $, j, G, z, W, H, K, V, Y, Q, X = function(e2, t2, r2, n2, s2) {
      if ("m" === n2) throw new TypeError("Private method is not writable");
      if ("a" === n2 && !s2) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof t2 ? e2 !== t2 || !s2 : !t2.has(e2)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === n2 ? s2.call(e2, r2) : s2 ? s2.value = r2 : t2.set(e2, r2), r2;
    }, Z = function(e2, t2, r2, n2) {
      if ("a" === r2 && !n2) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof t2 ? e2 !== t2 || !n2 : !t2.has(e2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === r2 ? n2 : "a" === r2 ? n2.call(e2) : n2 ? n2.value : t2.get(e2);
    };
    const ee = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, te = /* @__PURE__ */ new Set(), re = "object" == typeof process && process ? process : {}, ne = (e2, t2, r2, n2) => {
      "function" == typeof re.emitWarning ? re.emitWarning(e2, t2, r2, n2) : console.error(`[${r2}] ${t2}: ${e2}`);
    };
    let se = globalThis.AbortController, oe = globalThis.AbortSignal;
    if (void 0 === se) {
      oe = class {
        constructor() {
          this._onabort = [], this.aborted = false;
        }
        addEventListener(e3, t3) {
          this._onabort.push(t3);
        }
      }, se = class {
        constructor() {
          this.signal = new oe(), t2();
        }
        abort(e3) {
          if (!this.signal.aborted) {
            this.signal.reason = e3, this.signal.aborted = true;
            for (const t3 of this.signal._onabort) t3(e3);
            this.signal.onabort?.(e3);
          }
        }
      };
      let e2 = "1" !== re.env?.LRU_CACHE_IGNORE_AC_WARNING;
      const t2 = () => {
        e2 && (e2 = false, ne("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t2));
      };
    }
    /* @__PURE__ */ Symbol("type");
    const ie = (e2) => e2 && e2 === Math.floor(e2) && e2 > 0 && Number.isFinite(e2), ae = (e2) => ie(e2) ? e2 <= 256 ? Uint8Array : e2 <= 65536 ? Uint16Array : e2 <= 2 ** 32 ? Uint32Array : e2 <= Number.MAX_SAFE_INTEGER ? ce : null : null;
    class ce extends Array {
      constructor(e2) {
        super(e2), this.fill(0);
      }
    }
    class le {
      static create(e2) {
        const t2 = ae(e2);
        if (!t2) return [];
        X(n, n, true, "f", s);
        const r2 = new n(e2, t2);
        return X(n, n, false, "f", s), r2;
      }
      constructor(e2, t2) {
        if (!Z(n, n, "f", s)) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new t2(e2), this.length = 0;
      }
      push(e2) {
        this.heap[this.length++] = e2;
      }
      pop() {
        return this.heap[--this.length];
      }
    }
    n = le, s = { value: false };
    class ue {
      get perf() {
        return Z(this, m, "f");
      }
      static unsafeExposeInternals(e2) {
        return { starts: Z(e2, I, "f"), ttls: Z(e2, T, "f"), sizes: Z(e2, E, "f"), keyMap: Z(e2, g, "f"), keyList: Z(e2, y, "f"), valList: Z(e2, w, "f"), next: Z(e2, v, "f"), prev: Z(e2, _, "f"), get head() {
          return Z(e2, b, "f");
        }, get tail() {
          return Z(e2, S, "f");
        }, free: Z(e2, k, "f"), isBackgroundFetch: (t2) => Z(e2, o, "m", W).call(e2, t2), backgroundFetch: (t2, r2, n2, s2) => Z(e2, o, "m", z).call(e2, t2, r2, n2, s2), moveToTail: (t2) => Z(e2, o, "m", K).call(e2, t2), indexes: (t2) => Z(e2, o, "m", L).call(e2, t2), rindexes: (t2) => Z(e2, o, "m", $).call(e2, t2), isStale: (t2) => Z(e2, D, "f").call(e2, t2) };
      }
      get max() {
        return Z(this, i, "f");
      }
      get maxSize() {
        return Z(this, a, "f");
      }
      get calculatedSize() {
        return Z(this, f, "f");
      }
      get size() {
        return Z(this, h, "f");
      }
      get fetchMethod() {
        return Z(this, d, "f");
      }
      get memoMethod() {
        return Z(this, p, "f");
      }
      get dispose() {
        return Z(this, c, "f");
      }
      get onInsert() {
        return Z(this, l, "f");
      }
      get disposeAfter() {
        return Z(this, u, "f");
      }
      constructor(e2) {
        o.add(this), i.set(this, void 0), a.set(this, void 0), c.set(this, void 0), l.set(this, void 0), u.set(this, void 0), d.set(this, void 0), p.set(this, void 0), m.set(this, void 0), h.set(this, void 0), f.set(this, void 0), g.set(this, void 0), y.set(this, void 0), w.set(this, void 0), v.set(this, void 0), _.set(this, void 0), b.set(this, void 0), S.set(this, void 0), k.set(this, void 0), x.set(this, void 0), E.set(this, void 0), I.set(this, void 0), T.set(this, void 0), C.set(this, void 0), P.set(this, void 0), A.set(this, void 0), R.set(this, void 0), J.set(this, () => {
        }), O.set(this, () => {
        }), B.set(this, () => {
        }), D.set(this, () => false), N.set(this, (e3) => {
        }), F.set(this, (e3, t3, r3) => {
        }), U.set(this, (e3, t3, r3, n3) => {
          if (r3 || n3) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0;
        }), this[Q] = "LRUCache";
        const { max: t2 = 0, ttl: r2, ttlResolution: n2 = 1, ttlAutopurge: s2, updateAgeOnGet: L2, updateAgeOnHas: $2, allowStale: j2, dispose: G2, onInsert: z2, disposeAfter: W2, noDisposeOnSet: H2, noUpdateTTL: K2, maxSize: V2 = 0, maxEntrySize: Y2 = 0, sizeCalculation: re2, fetchMethod: se2, memoMethod: oe2, noDeleteOnFetchRejection: ce2, noDeleteOnStaleGet: de, allowStaleOnFetchRejection: pe, allowStaleOnFetchAbort: me, ignoreFetchAbort: he, perf: fe } = e2;
        if (void 0 !== fe && "function" != typeof fe?.now) throw new TypeError("perf option must have a now() method if specified");
        if (X(this, m, fe ?? ee, "f"), 0 !== t2 && !ie(t2)) throw new TypeError("max option must be a nonnegative integer");
        const ge = t2 ? ae(t2) : Array;
        if (!ge) throw new Error(`invalid max value: ${t2}`);
        if (X(this, i, t2, "f"), X(this, a, V2, "f"), this.maxEntrySize = Y2 || Z(this, a, "f"), this.sizeCalculation = re2, this.sizeCalculation) {
          if (!Z(this, a, "f") && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
        }
        if (void 0 !== oe2 && "function" != typeof oe2) throw new TypeError("memoMethod must be a function if defined");
        if (X(this, p, oe2, "f"), void 0 !== se2 && "function" != typeof se2) throw new TypeError("fetchMethod must be a function if specified");
        if (X(this, d, se2, "f"), X(this, P, !!se2, "f"), X(this, g, /* @__PURE__ */ new Map(), "f"), X(this, y, new Array(t2).fill(void 0), "f"), X(this, w, new Array(t2).fill(void 0), "f"), X(this, v, new ge(t2), "f"), X(this, _, new ge(t2), "f"), X(this, b, 0, "f"), X(this, S, 0, "f"), X(this, k, le.create(t2), "f"), X(this, h, 0, "f"), X(this, f, 0, "f"), "function" == typeof G2 && X(this, c, G2, "f"), "function" == typeof z2 && X(this, l, z2, "f"), "function" == typeof W2 ? (X(this, u, W2, "f"), X(this, x, [], "f")) : (X(this, u, void 0, "f"), X(this, x, void 0, "f")), X(this, C, !!Z(this, c, "f"), "f"), X(this, R, !!Z(this, l, "f"), "f"), X(this, A, !!Z(this, u, "f"), "f"), this.noDisposeOnSet = !!H2, this.noUpdateTTL = !!K2, this.noDeleteOnFetchRejection = !!ce2, this.allowStaleOnFetchRejection = !!pe, this.allowStaleOnFetchAbort = !!me, this.ignoreFetchAbort = !!he, 0 !== this.maxEntrySize) {
          if (0 !== Z(this, a, "f") && !ie(Z(this, a, "f"))) throw new TypeError("maxSize must be a positive integer if specified");
          if (!ie(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
          Z(this, o, "m", q).call(this);
        }
        if (this.allowStale = !!j2, this.noDeleteOnStaleGet = !!de, this.updateAgeOnGet = !!L2, this.updateAgeOnHas = !!$2, this.ttlResolution = ie(n2) || 0 === n2 ? n2 : 1, this.ttlAutopurge = !!s2, this.ttl = r2 || 0, this.ttl) {
          if (!ie(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
          Z(this, o, "m", M).call(this);
        }
        if (0 === Z(this, i, "f") && 0 === this.ttl && 0 === Z(this, a, "f")) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !Z(this, i, "f") && !Z(this, a, "f")) {
          const e3 = "LRU_CACHE_UNBOUNDED";
          if (((e4) => !te.has(e4))(e3)) {
            te.add(e3);
            ne("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e3, ue);
          }
        }
      }
      getRemainingTTL(e2) {
        return Z(this, g, "f").has(e2) ? 1 / 0 : 0;
      }
      *entries() {
        for (const e2 of Z(this, o, "m", L).call(this)) void 0 === Z(this, w, "f")[e2] || void 0 === Z(this, y, "f")[e2] || Z(this, o, "m", W).call(this, Z(this, w, "f")[e2]) || (yield [Z(this, y, "f")[e2], Z(this, w, "f")[e2]]);
      }
      *rentries() {
        for (const e2 of Z(this, o, "m", $).call(this)) void 0 === Z(this, w, "f")[e2] || void 0 === Z(this, y, "f")[e2] || Z(this, o, "m", W).call(this, Z(this, w, "f")[e2]) || (yield [Z(this, y, "f")[e2], Z(this, w, "f")[e2]]);
      }
      *keys() {
        for (const e2 of Z(this, o, "m", L).call(this)) {
          const t2 = Z(this, y, "f")[e2];
          void 0 === t2 || Z(this, o, "m", W).call(this, Z(this, w, "f")[e2]) || (yield t2);
        }
      }
      *rkeys() {
        for (const e2 of Z(this, o, "m", $).call(this)) {
          const t2 = Z(this, y, "f")[e2];
          void 0 === t2 || Z(this, o, "m", W).call(this, Z(this, w, "f")[e2]) || (yield t2);
        }
      }
      *values() {
        for (const e2 of Z(this, o, "m", L).call(this)) {
          void 0 === Z(this, w, "f")[e2] || Z(this, o, "m", W).call(this, Z(this, w, "f")[e2]) || (yield Z(this, w, "f")[e2]);
        }
      }
      *rvalues() {
        for (const e2 of Z(this, o, "m", $).call(this)) {
          void 0 === Z(this, w, "f")[e2] || Z(this, o, "m", W).call(this, Z(this, w, "f")[e2]) || (yield Z(this, w, "f")[e2]);
        }
      }
      [(i = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakSet(), M = function() {
        const e2 = new ce(Z(this, i, "f")), t2 = new ce(Z(this, i, "f"));
        X(this, T, e2, "f"), X(this, I, t2, "f"), X(this, B, (r3, n3, s2 = Z(this, m, "f").now()) => {
          if (t2[r3] = 0 !== n3 ? s2 : 0, e2[r3] = n3, 0 !== n3 && this.ttlAutopurge) {
            const e3 = setTimeout(() => {
              Z(this, D, "f").call(this, r3) && Z(this, o, "m", V).call(this, Z(this, y, "f")[r3], "expire");
            }, n3 + 1);
            e3.unref && e3.unref();
          }
        }, "f"), X(this, J, (r3) => {
          t2[r3] = 0 !== e2[r3] ? Z(this, m, "f").now() : 0;
        }, "f"), X(this, O, (s2, o2) => {
          if (e2[o2]) {
            const i2 = e2[o2], a2 = t2[o2];
            if (!i2 || !a2) return;
            s2.ttl = i2, s2.start = a2, s2.now = r2 || n2();
            const c2 = s2.now - a2;
            s2.remainingTTL = i2 - c2;
          }
        }, "f");
        let r2 = 0;
        const n2 = () => {
          const e3 = Z(this, m, "f").now();
          if (this.ttlResolution > 0) {
            r2 = e3;
            const t3 = setTimeout(() => {
              r2 = 0;
            }, this.ttlResolution);
            t3.unref && t3.unref();
          }
          return e3;
        };
        this.getRemainingTTL = (s2) => {
          const o2 = Z(this, g, "f").get(s2);
          if (void 0 === o2) return 0;
          const i2 = e2[o2], a2 = t2[o2];
          if (!i2 || !a2) return 1 / 0;
          return i2 - ((r2 || n2()) - a2);
        }, X(this, D, (s2) => {
          const o2 = t2[s2], i2 = e2[s2];
          return !!i2 && !!o2 && (r2 || n2()) - o2 > i2;
        }, "f");
      }, q = function() {
        const e2 = new ce(Z(this, i, "f"));
        X(this, f, 0, "f"), X(this, E, e2, "f"), X(this, N, (t2) => {
          X(this, f, Z(this, f, "f") - e2[t2], "f"), e2[t2] = 0;
        }, "f"), X(this, U, (e3, t2, r2, n2) => {
          if (Z(this, o, "m", W).call(this, t2)) return 0;
          if (!ie(r2)) {
            if (!n2) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
            if ("function" != typeof n2) throw new TypeError("sizeCalculation must be a function");
            if (r2 = n2(t2, e3), !ie(r2)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
          }
          return r2;
        }, "f"), X(this, F, (t2, r2, n2) => {
          if (e2[t2] = r2, Z(this, a, "f")) {
            const r3 = Z(this, a, "f") - e2[t2];
            for (; Z(this, f, "f") > r3; ) Z(this, o, "m", G).call(this, true);
          }
          X(this, f, Z(this, f, "f") + e2[t2], "f"), n2 && (n2.entrySize = r2, n2.totalCalculatedSize = Z(this, f, "f"));
        }, "f");
      }, L = function* ({ allowStale: e2 = this.allowStale } = {}) {
        if (Z(this, h, "f")) for (let t2 = Z(this, S, "f"); Z(this, o, "m", j).call(this, t2) && (!e2 && Z(this, D, "f").call(this, t2) || (yield t2), t2 !== Z(this, b, "f")); ) t2 = Z(this, _, "f")[t2];
      }, $ = function* ({ allowStale: e2 = this.allowStale } = {}) {
        if (Z(this, h, "f")) for (let t2 = Z(this, b, "f"); Z(this, o, "m", j).call(this, t2) && (!e2 && Z(this, D, "f").call(this, t2) || (yield t2), t2 !== Z(this, S, "f")); ) t2 = Z(this, v, "f")[t2];
      }, j = function(e2) {
        return void 0 !== e2 && Z(this, g, "f").get(Z(this, y, "f")[e2]) === e2;
      }, Symbol.iterator)]() {
        return this.entries();
      }
      find(e2, t2 = {}) {
        for (const r2 of Z(this, o, "m", L).call(this)) {
          const n2 = Z(this, w, "f")[r2], s2 = Z(this, o, "m", W).call(this, n2) ? n2.__staleWhileFetching : n2;
          if (void 0 !== s2 && e2(s2, Z(this, y, "f")[r2], this)) return this.get(Z(this, y, "f")[r2], t2);
        }
      }
      forEach(e2, t2 = this) {
        for (const r2 of Z(this, o, "m", L).call(this)) {
          const n2 = Z(this, w, "f")[r2], s2 = Z(this, o, "m", W).call(this, n2) ? n2.__staleWhileFetching : n2;
          void 0 !== s2 && e2.call(t2, s2, Z(this, y, "f")[r2], this);
        }
      }
      rforEach(e2, t2 = this) {
        for (const r2 of Z(this, o, "m", $).call(this)) {
          const n2 = Z(this, w, "f")[r2], s2 = Z(this, o, "m", W).call(this, n2) ? n2.__staleWhileFetching : n2;
          void 0 !== s2 && e2.call(t2, s2, Z(this, y, "f")[r2], this);
        }
      }
      purgeStale() {
        let e2 = false;
        for (const t2 of Z(this, o, "m", $).call(this, { allowStale: true })) Z(this, D, "f").call(this, t2) && (Z(this, o, "m", V).call(this, Z(this, y, "f")[t2], "expire"), e2 = true);
        return e2;
      }
      info(e2) {
        const t2 = Z(this, g, "f").get(e2);
        if (void 0 === t2) return;
        const r2 = Z(this, w, "f")[t2], n2 = Z(this, o, "m", W).call(this, r2) ? r2.__staleWhileFetching : r2;
        if (void 0 === n2) return;
        const s2 = { value: n2 };
        if (Z(this, T, "f") && Z(this, I, "f")) {
          const e3 = Z(this, T, "f")[t2], r3 = Z(this, I, "f")[t2];
          if (e3 && r3) {
            const t3 = e3 - (Z(this, m, "f").now() - r3);
            s2.ttl = t3, s2.start = Date.now();
          }
        }
        return Z(this, E, "f") && (s2.size = Z(this, E, "f")[t2]), s2;
      }
      dump() {
        const e2 = [];
        for (const t2 of Z(this, o, "m", L).call(this, { allowStale: true })) {
          const r2 = Z(this, y, "f")[t2], n2 = Z(this, w, "f")[t2], s2 = Z(this, o, "m", W).call(this, n2) ? n2.__staleWhileFetching : n2;
          if (void 0 === s2 || void 0 === r2) continue;
          const i2 = { value: s2 };
          if (Z(this, T, "f") && Z(this, I, "f")) {
            i2.ttl = Z(this, T, "f")[t2];
            const e3 = Z(this, m, "f").now() - Z(this, I, "f")[t2];
            i2.start = Math.floor(Date.now() - e3);
          }
          Z(this, E, "f") && (i2.size = Z(this, E, "f")[t2]), e2.unshift([r2, i2]);
        }
        return e2;
      }
      load(e2) {
        this.clear();
        for (const [t2, r2] of e2) {
          if (r2.start) {
            const e3 = Date.now() - r2.start;
            r2.start = Z(this, m, "f").now() - e3;
          }
          this.set(t2, r2.value, r2);
        }
      }
      set(e2, t2, r2 = {}) {
        var n2;
        if (void 0 === t2) return this.delete(e2), this;
        const { ttl: s2 = this.ttl, start: a2, noDisposeOnSet: d2 = this.noDisposeOnSet, sizeCalculation: p2 = this.sizeCalculation, status: m2 } = r2;
        let { noUpdateTTL: f2 = this.noUpdateTTL } = r2;
        const b2 = Z(this, U, "f").call(this, e2, t2, r2.size || 0, p2);
        if (this.maxEntrySize && b2 > this.maxEntrySize) return m2 && (m2.set = "miss", m2.maxEntrySizeExceeded = true), Z(this, o, "m", V).call(this, e2, "set"), this;
        let E2 = 0 === Z(this, h, "f") ? void 0 : Z(this, g, "f").get(e2);
        if (void 0 === E2) E2 = 0 === Z(this, h, "f") ? Z(this, S, "f") : 0 !== Z(this, k, "f").length ? Z(this, k, "f").pop() : Z(this, h, "f") === Z(this, i, "f") ? Z(this, o, "m", G).call(this, false) : Z(this, h, "f"), Z(this, y, "f")[E2] = e2, Z(this, w, "f")[E2] = t2, Z(this, g, "f").set(e2, E2), Z(this, v, "f")[Z(this, S, "f")] = E2, Z(this, _, "f")[E2] = Z(this, S, "f"), X(this, S, E2, "f"), X(this, h, (n2 = Z(this, h, "f"), ++n2), "f"), Z(this, F, "f").call(this, E2, b2, m2), m2 && (m2.set = "add"), f2 = false, Z(this, R, "f") && Z(this, l, "f")?.call(this, t2, e2, "add");
        else {
          Z(this, o, "m", K).call(this, E2);
          const r3 = Z(this, w, "f")[E2];
          if (t2 !== r3) {
            if (Z(this, P, "f") && Z(this, o, "m", W).call(this, r3)) {
              r3.__abortController.abort(new Error("replaced"));
              const { __staleWhileFetching: t3 } = r3;
              void 0 === t3 || d2 || (Z(this, C, "f") && Z(this, c, "f")?.call(this, t3, e2, "set"), Z(this, A, "f") && Z(this, x, "f")?.push([t3, e2, "set"]));
            } else d2 || (Z(this, C, "f") && Z(this, c, "f")?.call(this, r3, e2, "set"), Z(this, A, "f") && Z(this, x, "f")?.push([r3, e2, "set"]));
            if (Z(this, N, "f").call(this, E2), Z(this, F, "f").call(this, E2, b2, m2), Z(this, w, "f")[E2] = t2, m2) {
              m2.set = "replace";
              const e3 = r3 && Z(this, o, "m", W).call(this, r3) ? r3.__staleWhileFetching : r3;
              void 0 !== e3 && (m2.oldValue = e3);
            }
          } else m2 && (m2.set = "update");
          Z(this, R, "f") && this.onInsert?.(t2, e2, t2 === r3 ? "update" : "replace");
        }
        if (0 === s2 || Z(this, T, "f") || Z(this, o, "m", M).call(this), Z(this, T, "f") && (f2 || Z(this, B, "f").call(this, E2, s2, a2), m2 && Z(this, O, "f").call(this, m2, E2)), !d2 && Z(this, A, "f") && Z(this, x, "f")) {
          const e3 = Z(this, x, "f");
          let t3;
          for (; t3 = e3?.shift(); ) Z(this, u, "f")?.call(this, ...t3);
        }
        return this;
      }
      pop() {
        try {
          for (; Z(this, h, "f"); ) {
            const e2 = Z(this, w, "f")[Z(this, b, "f")];
            if (Z(this, o, "m", G).call(this, true), Z(this, o, "m", W).call(this, e2)) {
              if (e2.__staleWhileFetching) return e2.__staleWhileFetching;
            } else if (void 0 !== e2) return e2;
          }
          return;
        } finally {
          if (Z(this, A, "f") && Z(this, x, "f")) {
            const e2 = Z(this, x, "f");
            let t2;
            for (; t2 = e2?.shift(); ) Z(this, u, "f")?.call(this, ...t2);
          }
        }
      }
      has(e2, t2 = {}) {
        const { updateAgeOnHas: r2 = this.updateAgeOnHas, status: n2 } = t2, s2 = Z(this, g, "f").get(e2);
        if (void 0 !== s2) {
          const e3 = Z(this, w, "f")[s2];
          if (Z(this, o, "m", W).call(this, e3) && void 0 === e3.__staleWhileFetching) return false;
          if (!Z(this, D, "f").call(this, s2)) return r2 && Z(this, J, "f").call(this, s2), n2 && (n2.has = "hit", Z(this, O, "f").call(this, n2, s2)), true;
          n2 && (n2.has = "stale", Z(this, O, "f").call(this, n2, s2));
        } else n2 && (n2.has = "miss");
        return false;
      }
      peek(e2, t2 = {}) {
        const { allowStale: r2 = this.allowStale } = t2, n2 = Z(this, g, "f").get(e2);
        if (void 0 === n2 || !r2 && Z(this, D, "f").call(this, n2)) return;
        const s2 = Z(this, w, "f")[n2];
        return Z(this, o, "m", W).call(this, s2) ? s2.__staleWhileFetching : s2;
      }
      async fetch(e2, t2 = {}) {
        const { allowStale: r2 = this.allowStale, updateAgeOnGet: n2 = this.updateAgeOnGet, noDeleteOnStaleGet: s2 = this.noDeleteOnStaleGet, ttl: i2 = this.ttl, noDisposeOnSet: a2 = this.noDisposeOnSet, size: c2 = 0, sizeCalculation: l2 = this.sizeCalculation, noUpdateTTL: u2 = this.noUpdateTTL, noDeleteOnFetchRejection: d2 = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: p2 = this.allowStaleOnFetchRejection, ignoreFetchAbort: m2 = this.ignoreFetchAbort, allowStaleOnFetchAbort: h2 = this.allowStaleOnFetchAbort, context: f2, forceRefresh: y2 = false, status: v2, signal: _2 } = t2;
        if (!Z(this, P, "f")) return v2 && (v2.fetch = "get"), this.get(e2, { allowStale: r2, updateAgeOnGet: n2, noDeleteOnStaleGet: s2, status: v2 });
        const b2 = { allowStale: r2, updateAgeOnGet: n2, noDeleteOnStaleGet: s2, ttl: i2, noDisposeOnSet: a2, size: c2, sizeCalculation: l2, noUpdateTTL: u2, noDeleteOnFetchRejection: d2, allowStaleOnFetchRejection: p2, allowStaleOnFetchAbort: h2, ignoreFetchAbort: m2, status: v2, signal: _2 }, S2 = Z(this, g, "f").get(e2);
        if (void 0 === S2) {
          v2 && (v2.fetch = "miss");
          const t3 = Z(this, o, "m", z).call(this, e2, S2, b2, f2);
          return t3.__returned = t3;
        }
        {
          const t3 = Z(this, w, "f")[S2];
          if (Z(this, o, "m", W).call(this, t3)) {
            const e3 = r2 && void 0 !== t3.__staleWhileFetching;
            return v2 && (v2.fetch = "inflight", e3 && (v2.returnedStale = true)), e3 ? t3.__staleWhileFetching : t3.__returned = t3;
          }
          const s3 = Z(this, D, "f").call(this, S2);
          if (!y2 && !s3) return v2 && (v2.fetch = "hit"), Z(this, o, "m", K).call(this, S2), n2 && Z(this, J, "f").call(this, S2), v2 && Z(this, O, "f").call(this, v2, S2), t3;
          const i3 = Z(this, o, "m", z).call(this, e2, S2, b2, f2), a3 = void 0 !== i3.__staleWhileFetching && r2;
          return v2 && (v2.fetch = s3 ? "stale" : "refresh", a3 && s3 && (v2.returnedStale = true)), a3 ? i3.__staleWhileFetching : i3.__returned = i3;
        }
      }
      async forceFetch(e2, t2 = {}) {
        const r2 = await this.fetch(e2, t2);
        if (void 0 === r2) throw new Error("fetch() returned undefined");
        return r2;
      }
      memo(e2, t2 = {}) {
        const r2 = Z(this, p, "f");
        if (!r2) throw new Error("no memoMethod provided to constructor");
        const { context: n2, forceRefresh: s2, ...o2 } = t2, i2 = this.get(e2, o2);
        if (!s2 && void 0 !== i2) return i2;
        const a2 = r2(e2, i2, { options: o2, context: n2 });
        return this.set(e2, a2, o2), a2;
      }
      get(e2, t2 = {}) {
        const { allowStale: r2 = this.allowStale, updateAgeOnGet: n2 = this.updateAgeOnGet, noDeleteOnStaleGet: s2 = this.noDeleteOnStaleGet, status: i2 } = t2, a2 = Z(this, g, "f").get(e2);
        if (void 0 !== a2) {
          const t3 = Z(this, w, "f")[a2], c2 = Z(this, o, "m", W).call(this, t3);
          return i2 && Z(this, O, "f").call(this, i2, a2), Z(this, D, "f").call(this, a2) ? (i2 && (i2.get = "stale"), c2 ? (i2 && r2 && void 0 !== t3.__staleWhileFetching && (i2.returnedStale = true), r2 ? t3.__staleWhileFetching : void 0) : (s2 || Z(this, o, "m", V).call(this, e2, "expire"), i2 && r2 && (i2.returnedStale = true), r2 ? t3 : void 0)) : (i2 && (i2.get = "hit"), c2 ? t3.__staleWhileFetching : (Z(this, o, "m", K).call(this, a2), n2 && Z(this, J, "f").call(this, a2), t3));
        }
        i2 && (i2.get = "miss");
      }
      delete(e2) {
        return Z(this, o, "m", V).call(this, e2, "delete");
      }
      clear() {
        Z(this, o, "m", Y).call(this, "delete");
      }
    }
    Q = Symbol.toStringTag, G = function(e2) {
      var t2;
      const r2 = Z(this, b, "f"), n2 = Z(this, y, "f")[r2], s2 = Z(this, w, "f")[r2];
      return Z(this, P, "f") && Z(this, o, "m", W).call(this, s2) ? s2.__abortController.abort(new Error("evicted")) : (Z(this, C, "f") || Z(this, A, "f")) && (Z(this, C, "f") && Z(this, c, "f")?.call(this, s2, n2, "evict"), Z(this, A, "f") && Z(this, x, "f")?.push([s2, n2, "evict"])), Z(this, N, "f").call(this, r2), e2 && (Z(this, y, "f")[r2] = void 0, Z(this, w, "f")[r2] = void 0, Z(this, k, "f").push(r2)), 1 === Z(this, h, "f") ? (X(this, b, X(this, S, 0, "f"), "f"), Z(this, k, "f").length = 0) : X(this, b, Z(this, v, "f")[r2], "f"), Z(this, g, "f").delete(n2), X(this, h, (t2 = Z(this, h, "f"), --t2), "f"), r2;
    }, z = function(e2, t2, r2, n2) {
      const s2 = void 0 === t2 ? void 0 : Z(this, w, "f")[t2];
      if (Z(this, o, "m", W).call(this, s2)) return s2;
      const i2 = new se(), { signal: a2 } = r2;
      a2?.addEventListener("abort", () => i2.abort(a2.reason), { signal: i2.signal });
      const c2 = { signal: i2.signal, options: r2, context: n2 }, l2 = (n3, s3 = false) => {
        const { aborted: a3 } = i2.signal, l3 = r2.ignoreFetchAbort && void 0 !== n3;
        if (r2.status && (a3 && !s3 ? (r2.status.fetchAborted = true, r2.status.fetchError = i2.signal.reason, l3 && (r2.status.fetchAbortIgnored = true)) : r2.status.fetchResolved = true), a3 && !l3 && !s3) return u2(i2.signal.reason);
        const d2 = p2, m3 = Z(this, w, "f")[t2];
        return (m3 === p2 || l3 && s3 && void 0 === m3) && (void 0 === n3 ? void 0 !== d2.__staleWhileFetching ? Z(this, w, "f")[t2] = d2.__staleWhileFetching : Z(this, o, "m", V).call(this, e2, "fetch") : (r2.status && (r2.status.fetchUpdated = true), this.set(e2, n3, c2.options))), n3;
      }, u2 = (n3) => {
        const { aborted: s3 } = i2.signal, a3 = s3 && r2.allowStaleOnFetchAbort, c3 = a3 || r2.allowStaleOnFetchRejection, l3 = c3 || r2.noDeleteOnFetchRejection, u3 = p2;
        if (Z(this, w, "f")[t2] === p2) {
          !l3 || void 0 === u3.__staleWhileFetching ? Z(this, o, "m", V).call(this, e2, "fetch") : a3 || (Z(this, w, "f")[t2] = u3.__staleWhileFetching);
        }
        if (c3) return r2.status && void 0 !== u3.__staleWhileFetching && (r2.status.returnedStale = true), u3.__staleWhileFetching;
        if (u3.__returned === u3) throw n3;
      };
      r2.status && (r2.status.fetchDispatched = true);
      const p2 = new Promise((t3, n3) => {
        const o2 = Z(this, d, "f")?.call(this, e2, s2, c2);
        o2 && o2 instanceof Promise && o2.then((e3) => t3(void 0 === e3 ? void 0 : e3), n3), i2.signal.addEventListener("abort", () => {
          r2.ignoreFetchAbort && !r2.allowStaleOnFetchAbort || (t3(void 0), r2.allowStaleOnFetchAbort && (t3 = (e3) => l2(e3, true)));
        });
      }).then(l2, (e3) => (r2.status && (r2.status.fetchRejected = true, r2.status.fetchError = e3), u2(e3))), m2 = Object.assign(p2, { __abortController: i2, __staleWhileFetching: s2, __returned: void 0 });
      return void 0 === t2 ? (this.set(e2, m2, { ...c2.options, status: void 0 }), t2 = Z(this, g, "f").get(e2)) : Z(this, w, "f")[t2] = m2, m2;
    }, W = function(e2) {
      if (!Z(this, P, "f")) return false;
      const t2 = e2;
      return !!t2 && t2 instanceof Promise && t2.hasOwnProperty("__staleWhileFetching") && t2.__abortController instanceof se;
    }, H = function(e2, t2) {
      Z(this, _, "f")[t2] = e2, Z(this, v, "f")[e2] = t2;
    }, K = function(e2) {
      e2 !== Z(this, S, "f") && (e2 === Z(this, b, "f") ? X(this, b, Z(this, v, "f")[e2], "f") : Z(this, o, "m", H).call(this, Z(this, _, "f")[e2], Z(this, v, "f")[e2]), Z(this, o, "m", H).call(this, Z(this, S, "f"), e2), X(this, S, e2, "f"));
    }, V = function(e2, t2) {
      var r2;
      let n2 = false;
      if (0 !== Z(this, h, "f")) {
        const s2 = Z(this, g, "f").get(e2);
        if (void 0 !== s2) if (n2 = true, 1 === Z(this, h, "f")) Z(this, o, "m", Y).call(this, t2);
        else {
          Z(this, N, "f").call(this, s2);
          const n3 = Z(this, w, "f")[s2];
          if (Z(this, o, "m", W).call(this, n3) ? n3.__abortController.abort(new Error("deleted")) : (Z(this, C, "f") || Z(this, A, "f")) && (Z(this, C, "f") && Z(this, c, "f")?.call(this, n3, e2, t2), Z(this, A, "f") && Z(this, x, "f")?.push([n3, e2, t2])), Z(this, g, "f").delete(e2), Z(this, y, "f")[s2] = void 0, Z(this, w, "f")[s2] = void 0, s2 === Z(this, S, "f")) X(this, S, Z(this, _, "f")[s2], "f");
          else if (s2 === Z(this, b, "f")) X(this, b, Z(this, v, "f")[s2], "f");
          else {
            const e3 = Z(this, _, "f")[s2];
            Z(this, v, "f")[e3] = Z(this, v, "f")[s2];
            const t3 = Z(this, v, "f")[s2];
            Z(this, _, "f")[t3] = Z(this, _, "f")[s2];
          }
          X(this, h, (r2 = Z(this, h, "f"), --r2), "f"), Z(this, k, "f").push(s2);
        }
      }
      if (Z(this, A, "f") && Z(this, x, "f")?.length) {
        const e3 = Z(this, x, "f");
        let t3;
        for (; t3 = e3?.shift(); ) Z(this, u, "f")?.call(this, ...t3);
      }
      return n2;
    }, Y = function(e2) {
      for (const t2 of Z(this, o, "m", $).call(this, { allowStale: true })) {
        const r2 = Z(this, w, "f")[t2];
        if (Z(this, o, "m", W).call(this, r2)) r2.__abortController.abort(new Error("deleted"));
        else {
          const n2 = Z(this, y, "f")[t2];
          Z(this, C, "f") && Z(this, c, "f")?.call(this, r2, n2, e2), Z(this, A, "f") && Z(this, x, "f")?.push([r2, n2, e2]);
        }
      }
      if (Z(this, g, "f").clear(), Z(this, w, "f").fill(void 0), Z(this, y, "f").fill(void 0), Z(this, T, "f") && Z(this, I, "f") && (Z(this, T, "f").fill(0), Z(this, I, "f").fill(0)), Z(this, E, "f") && Z(this, E, "f").fill(0), X(this, b, 0, "f"), X(this, S, 0, "f"), Z(this, k, "f").length = 0, X(this, f, 0, "f"), X(this, h, 0, "f"), Z(this, A, "f") && Z(this, x, "f")) {
        const e3 = Z(this, x, "f");
        let t2;
        for (; t2 = e3?.shift(); ) Z(this, u, "f")?.call(this, ...t2);
      }
    };
  }