// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 68505 range:2090310..2122872
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68505: (e, t, r) => {
    "use strict";
    r.d(t, { q: () => ue });
    var n, o, s, i, a, l, c, u, d, p, h, m, f, g, y, v, w, b, _, S, x, k, E, T, C, I, A, P, M, R, O, D, N, F, L, U, B, $, q, j, J, z, H, W, G, Y, V, K, Z, X = function(e2, t2, r2, n2, o2) {
      if ("m" === n2) throw new TypeError("Private method is not writable");
      if ("a" === n2 && !o2) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof t2 ? e2 !== t2 || !o2 : !t2.has(e2)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === n2 ? o2.call(e2, r2) : o2 ? o2.value = r2 : t2.set(e2, r2), r2;
    }, Q = function(e2, t2, r2, n2) {
      if ("a" === r2 && !n2) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof t2 ? e2 !== t2 || !n2 : !t2.has(e2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === r2 ? n2 : "a" === r2 ? n2.call(e2) : n2 ? n2.value : t2.get(e2);
    };
    const ee = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, te = /* @__PURE__ */ new Set(), re = "object" == typeof process && process ? process : {}, ne = (e2, t2, r2, n2) => {
      "function" == typeof re.emitWarning ? re.emitWarning(e2, t2, r2, n2) : console.error(`[${r2}] ${t2}: ${e2}`);
    };
    let oe = globalThis.AbortController, se = globalThis.AbortSignal;
    if (void 0 === oe) {
      se = class {
        constructor() {
          this._onabort = [], this.aborted = false;
        }
        addEventListener(e3, t3) {
          this._onabort.push(t3);
        }
      }, oe = class {
        constructor() {
          this.signal = new se(), t2();
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
    const ie = (e2) => e2 && e2 === Math.floor(e2) && e2 > 0 && Number.isFinite(e2), ae = (e2) => ie(e2) ? e2 <= 256 ? Uint8Array : e2 <= 65536 ? Uint16Array : e2 <= 2 ** 32 ? Uint32Array : e2 <= Number.MAX_SAFE_INTEGER ? le : null : null;
    class le extends Array {
      constructor(e2) {
        super(e2), this.fill(0);
      }
    }
    class ce {
      static create(e2) {
        const t2 = ae(e2);
        if (!t2) return [];
        X(n, n, true, "f", o);
        const r2 = new n(e2, t2);
        return X(n, n, false, "f", o), r2;
      }
      constructor(e2, t2) {
        if (!Q(n, n, "f", o)) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new t2(e2), this.length = 0;
      }
      push(e2) {
        this.heap[this.length++] = e2;
      }
      pop() {
        return this.heap[--this.length];
      }
    }
    n = ce, o = { value: false };
    class ue {
      get perf() {
        return Q(this, h, "f");
      }
      static unsafeExposeInternals(e2) {
        return { starts: Q(e2, T, "f"), ttls: Q(e2, C, "f"), sizes: Q(e2, E, "f"), keyMap: Q(e2, g, "f"), keyList: Q(e2, y, "f"), valList: Q(e2, v, "f"), next: Q(e2, w, "f"), prev: Q(e2, b, "f"), get head() {
          return Q(e2, _, "f");
        }, get tail() {
          return Q(e2, S, "f");
        }, free: Q(e2, x, "f"), isBackgroundFetch: (t2) => Q(e2, s, "m", W).call(e2, t2), backgroundFetch: (t2, r2, n2, o2) => Q(e2, s, "m", H).call(e2, t2, r2, n2, o2), moveToTail: (t2) => Q(e2, s, "m", Y).call(e2, t2), indexes: (t2) => Q(e2, s, "m", q).call(e2, t2), rindexes: (t2) => Q(e2, s, "m", j).call(e2, t2), isStale: (t2) => Q(e2, F, "f").call(e2, t2) };
      }
      get max() {
        return Q(this, i, "f");
      }
      get maxSize() {
        return Q(this, a, "f");
      }
      get calculatedSize() {
        return Q(this, f, "f");
      }
      get size() {
        return Q(this, m, "f");
      }
      get fetchMethod() {
        return Q(this, d, "f");
      }
      get memoMethod() {
        return Q(this, p, "f");
      }
      get dispose() {
        return Q(this, l, "f");
      }
      get onInsert() {
        return Q(this, c, "f");
      }
      get disposeAfter() {
        return Q(this, u, "f");
      }
      constructor(e2) {
        s.add(this), i.set(this, void 0), a.set(this, void 0), l.set(this, void 0), c.set(this, void 0), u.set(this, void 0), d.set(this, void 0), p.set(this, void 0), h.set(this, void 0), m.set(this, void 0), f.set(this, void 0), g.set(this, void 0), y.set(this, void 0), v.set(this, void 0), w.set(this, void 0), b.set(this, void 0), _.set(this, void 0), S.set(this, void 0), x.set(this, void 0), k.set(this, void 0), E.set(this, void 0), T.set(this, void 0), C.set(this, void 0), I.set(this, void 0), A.set(this, void 0), P.set(this, void 0), M.set(this, void 0), O.set(this, () => {
        }), D.set(this, () => {
        }), N.set(this, () => {
        }), F.set(this, () => false), U.set(this, (e3) => {
        }), B.set(this, (e3, t3, r3) => {
        }), $.set(this, (e3, t3, r3, n3) => {
          if (r3 || n3) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0;
        }), this[Z] = "LRUCache";
        const { max: t2 = 0, ttl: r2, ttlResolution: n2 = 1, ttlAutopurge: o2, updateAgeOnGet: q2, updateAgeOnHas: j2, allowStale: J2, dispose: z2, onInsert: H2, disposeAfter: W2, noDisposeOnSet: G2, noUpdateTTL: Y2, maxSize: V2 = 0, maxEntrySize: K2 = 0, sizeCalculation: re2, fetchMethod: oe2, memoMethod: se2, noDeleteOnFetchRejection: le2, noDeleteOnStaleGet: de, allowStaleOnFetchRejection: pe, allowStaleOnFetchAbort: he, ignoreFetchAbort: me, perf: fe } = e2;
        if (void 0 !== fe && "function" != typeof fe?.now) throw new TypeError("perf option must have a now() method if specified");
        if (X(this, h, fe ?? ee, "f"), 0 !== t2 && !ie(t2)) throw new TypeError("max option must be a nonnegative integer");
        const ge = t2 ? ae(t2) : Array;
        if (!ge) throw new Error(`invalid max value: ${t2}`);
        if (X(this, i, t2, "f"), X(this, a, V2, "f"), this.maxEntrySize = K2 || Q(this, a, "f"), this.sizeCalculation = re2, this.sizeCalculation) {
          if (!Q(this, a, "f") && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
        }
        if (void 0 !== se2 && "function" != typeof se2) throw new TypeError("memoMethod must be a function if defined");
        if (X(this, p, se2, "f"), void 0 !== oe2 && "function" != typeof oe2) throw new TypeError("fetchMethod must be a function if specified");
        if (X(this, d, oe2, "f"), X(this, A, !!oe2, "f"), X(this, g, /* @__PURE__ */ new Map(), "f"), X(this, y, new Array(t2).fill(void 0), "f"), X(this, v, new Array(t2).fill(void 0), "f"), X(this, w, new ge(t2), "f"), X(this, b, new ge(t2), "f"), X(this, _, 0, "f"), X(this, S, 0, "f"), X(this, x, ce.create(t2), "f"), X(this, m, 0, "f"), X(this, f, 0, "f"), "function" == typeof z2 && X(this, l, z2, "f"), "function" == typeof H2 && X(this, c, H2, "f"), "function" == typeof W2 ? (X(this, u, W2, "f"), X(this, k, [], "f")) : (X(this, u, void 0, "f"), X(this, k, void 0, "f")), X(this, I, !!Q(this, l, "f"), "f"), X(this, M, !!Q(this, c, "f"), "f"), X(this, P, !!Q(this, u, "f"), "f"), this.noDisposeOnSet = !!G2, this.noUpdateTTL = !!Y2, this.noDeleteOnFetchRejection = !!le2, this.allowStaleOnFetchRejection = !!pe, this.allowStaleOnFetchAbort = !!he, this.ignoreFetchAbort = !!me, 0 !== this.maxEntrySize) {
          if (0 !== Q(this, a, "f") && !ie(Q(this, a, "f"))) throw new TypeError("maxSize must be a positive integer if specified");
          if (!ie(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
          Q(this, s, "m", L).call(this);
        }
        if (this.allowStale = !!J2, this.noDeleteOnStaleGet = !!de, this.updateAgeOnGet = !!q2, this.updateAgeOnHas = !!j2, this.ttlResolution = ie(n2) || 0 === n2 ? n2 : 1, this.ttlAutopurge = !!o2, this.ttl = r2 || 0, this.ttl) {
          if (!ie(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
          Q(this, s, "m", R).call(this);
        }
        if (0 === Q(this, i, "f") && 0 === this.ttl && 0 === Q(this, a, "f")) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !Q(this, i, "f") && !Q(this, a, "f")) {
          const e3 = "LRU_CACHE_UNBOUNDED";
          if (((e4) => !te.has(e4))(e3)) {
            te.add(e3);
            ne("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e3, ue);
          }
        }
      }
      getRemainingTTL(e2) {
        return Q(this, g, "f").has(e2) ? 1 / 0 : 0;
      }
      *entries() {
        for (const e2 of Q(this, s, "m", q).call(this)) void 0 === Q(this, v, "f")[e2] || void 0 === Q(this, y, "f")[e2] || Q(this, s, "m", W).call(this, Q(this, v, "f")[e2]) || (yield [Q(this, y, "f")[e2], Q(this, v, "f")[e2]]);
      }
      *rentries() {
        for (const e2 of Q(this, s, "m", j).call(this)) void 0 === Q(this, v, "f")[e2] || void 0 === Q(this, y, "f")[e2] || Q(this, s, "m", W).call(this, Q(this, v, "f")[e2]) || (yield [Q(this, y, "f")[e2], Q(this, v, "f")[e2]]);
      }
      *keys() {
        for (const e2 of Q(this, s, "m", q).call(this)) {
          const t2 = Q(this, y, "f")[e2];
          void 0 === t2 || Q(this, s, "m", W).call(this, Q(this, v, "f")[e2]) || (yield t2);
        }
      }
      *rkeys() {
        for (const e2 of Q(this, s, "m", j).call(this)) {
          const t2 = Q(this, y, "f")[e2];
          void 0 === t2 || Q(this, s, "m", W).call(this, Q(this, v, "f")[e2]) || (yield t2);
        }
      }
      *values() {
        for (const e2 of Q(this, s, "m", q).call(this)) {
          void 0 === Q(this, v, "f")[e2] || Q(this, s, "m", W).call(this, Q(this, v, "f")[e2]) || (yield Q(this, v, "f")[e2]);
        }
      }
      *rvalues() {
        for (const e2 of Q(this, s, "m", j).call(this)) {
          void 0 === Q(this, v, "f")[e2] || Q(this, s, "m", W).call(this, Q(this, v, "f")[e2]) || (yield Q(this, v, "f")[e2]);
        }
      }
      [(i = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakSet(), R = function() {
        const e2 = new le(Q(this, i, "f")), t2 = new le(Q(this, i, "f"));
        X(this, C, e2, "f"), X(this, T, t2, "f"), X(this, N, (r3, n3, o2 = Q(this, h, "f").now()) => {
          if (t2[r3] = 0 !== n3 ? o2 : 0, e2[r3] = n3, 0 !== n3 && this.ttlAutopurge) {
            const e3 = setTimeout(() => {
              Q(this, F, "f").call(this, r3) && Q(this, s, "m", V).call(this, Q(this, y, "f")[r3], "expire");
            }, n3 + 1);
            e3.unref && e3.unref();
          }
        }, "f"), X(this, O, (r3) => {
          t2[r3] = 0 !== e2[r3] ? Q(this, h, "f").now() : 0;
        }, "f"), X(this, D, (o2, s2) => {
          if (e2[s2]) {
            const i2 = e2[s2], a2 = t2[s2];
            if (!i2 || !a2) return;
            o2.ttl = i2, o2.start = a2, o2.now = r2 || n2();
            const l2 = o2.now - a2;
            o2.remainingTTL = i2 - l2;
          }
        }, "f");
        let r2 = 0;
        const n2 = () => {
          const e3 = Q(this, h, "f").now();
          if (this.ttlResolution > 0) {
            r2 = e3;
            const t3 = setTimeout(() => {
              r2 = 0;
            }, this.ttlResolution);
            t3.unref && t3.unref();
          }
          return e3;
        };
        this.getRemainingTTL = (o2) => {
          const s2 = Q(this, g, "f").get(o2);
          if (void 0 === s2) return 0;
          const i2 = e2[s2], a2 = t2[s2];
          if (!i2 || !a2) return 1 / 0;
          return i2 - ((r2 || n2()) - a2);
        }, X(this, F, (o2) => {
          const s2 = t2[o2], i2 = e2[o2];
          return !!i2 && !!s2 && (r2 || n2()) - s2 > i2;
        }, "f");
      }, L = function() {
        const e2 = new le(Q(this, i, "f"));
        X(this, f, 0, "f"), X(this, E, e2, "f"), X(this, U, (t2) => {
          X(this, f, Q(this, f, "f") - e2[t2], "f"), e2[t2] = 0;
        }, "f"), X(this, $, (e3, t2, r2, n2) => {
          if (Q(this, s, "m", W).call(this, t2)) return 0;
          if (!ie(r2)) {
            if (!n2) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
            if ("function" != typeof n2) throw new TypeError("sizeCalculation must be a function");
            if (r2 = n2(t2, e3), !ie(r2)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
          }
          return r2;
        }, "f"), X(this, B, (t2, r2, n2) => {
          if (e2[t2] = r2, Q(this, a, "f")) {
            const r3 = Q(this, a, "f") - e2[t2];
            for (; Q(this, f, "f") > r3; ) Q(this, s, "m", z).call(this, true);
          }
          X(this, f, Q(this, f, "f") + e2[t2], "f"), n2 && (n2.entrySize = r2, n2.totalCalculatedSize = Q(this, f, "f"));
        }, "f");
      }, q = function* ({ allowStale: e2 = this.allowStale } = {}) {
        if (Q(this, m, "f")) for (let t2 = Q(this, S, "f"); Q(this, s, "m", J).call(this, t2) && (!e2 && Q(this, F, "f").call(this, t2) || (yield t2), t2 !== Q(this, _, "f")); ) t2 = Q(this, b, "f")[t2];
      }, j = function* ({ allowStale: e2 = this.allowStale } = {}) {
        if (Q(this, m, "f")) for (let t2 = Q(this, _, "f"); Q(this, s, "m", J).call(this, t2) && (!e2 && Q(this, F, "f").call(this, t2) || (yield t2), t2 !== Q(this, S, "f")); ) t2 = Q(this, w, "f")[t2];
      }, J = function(e2) {
        return void 0 !== e2 && Q(this, g, "f").get(Q(this, y, "f")[e2]) === e2;
      }, Symbol.iterator)]() {
        return this.entries();
      }
      find(e2, t2 = {}) {
        for (const r2 of Q(this, s, "m", q).call(this)) {
          const n2 = Q(this, v, "f")[r2], o2 = Q(this, s, "m", W).call(this, n2) ? n2.__staleWhileFetching : n2;
          if (void 0 !== o2 && e2(o2, Q(this, y, "f")[r2], this)) return this.get(Q(this, y, "f")[r2], t2);
        }
      }
      forEach(e2, t2 = this) {
        for (const r2 of Q(this, s, "m", q).call(this)) {
          const n2 = Q(this, v, "f")[r2], o2 = Q(this, s, "m", W).call(this, n2) ? n2.__staleWhileFetching : n2;
          void 0 !== o2 && e2.call(t2, o2, Q(this, y, "f")[r2], this);
        }
      }
      rforEach(e2, t2 = this) {
        for (const r2 of Q(this, s, "m", j).call(this)) {
          const n2 = Q(this, v, "f")[r2], o2 = Q(this, s, "m", W).call(this, n2) ? n2.__staleWhileFetching : n2;
          void 0 !== o2 && e2.call(t2, o2, Q(this, y, "f")[r2], this);
        }
      }
      purgeStale() {
        let e2 = false;
        for (const t2 of Q(this, s, "m", j).call(this, { allowStale: true })) Q(this, F, "f").call(this, t2) && (Q(this, s, "m", V).call(this, Q(this, y, "f")[t2], "expire"), e2 = true);
        return e2;
      }
      info(e2) {
        const t2 = Q(this, g, "f").get(e2);
        if (void 0 === t2) return;
        const r2 = Q(this, v, "f")[t2], n2 = Q(this, s, "m", W).call(this, r2) ? r2.__staleWhileFetching : r2;
        if (void 0 === n2) return;
        const o2 = { value: n2 };
        if (Q(this, C, "f") && Q(this, T, "f")) {
          const e3 = Q(this, C, "f")[t2], r3 = Q(this, T, "f")[t2];
          if (e3 && r3) {
            const t3 = e3 - (Q(this, h, "f").now() - r3);
            o2.ttl = t3, o2.start = Date.now();
          }
        }
        return Q(this, E, "f") && (o2.size = Q(this, E, "f")[t2]), o2;
      }
      dump() {
        const e2 = [];
        for (const t2 of Q(this, s, "m", q).call(this, { allowStale: true })) {
          const r2 = Q(this, y, "f")[t2], n2 = Q(this, v, "f")[t2], o2 = Q(this, s, "m", W).call(this, n2) ? n2.__staleWhileFetching : n2;
          if (void 0 === o2 || void 0 === r2) continue;
          const i2 = { value: o2 };
          if (Q(this, C, "f") && Q(this, T, "f")) {
            i2.ttl = Q(this, C, "f")[t2];
            const e3 = Q(this, h, "f").now() - Q(this, T, "f")[t2];
            i2.start = Math.floor(Date.now() - e3);
          }
          Q(this, E, "f") && (i2.size = Q(this, E, "f")[t2]), e2.unshift([r2, i2]);
        }
        return e2;
      }
      load(e2) {
        this.clear();
        for (const [t2, r2] of e2) {
          if (r2.start) {
            const e3 = Date.now() - r2.start;
            r2.start = Q(this, h, "f").now() - e3;
          }
          this.set(t2, r2.value, r2);
        }
      }
      set(e2, t2, r2 = {}) {
        var n2;
        if (void 0 === t2) return this.delete(e2), this;
        const { ttl: o2 = this.ttl, start: a2, noDisposeOnSet: d2 = this.noDisposeOnSet, sizeCalculation: p2 = this.sizeCalculation, status: h2 } = r2;
        let { noUpdateTTL: f2 = this.noUpdateTTL } = r2;
        const _2 = Q(this, $, "f").call(this, e2, t2, r2.size || 0, p2);
        if (this.maxEntrySize && _2 > this.maxEntrySize) return h2 && (h2.set = "miss", h2.maxEntrySizeExceeded = true), Q(this, s, "m", V).call(this, e2, "set"), this;
        let E2 = 0 === Q(this, m, "f") ? void 0 : Q(this, g, "f").get(e2);
        if (void 0 === E2) E2 = 0 === Q(this, m, "f") ? Q(this, S, "f") : 0 !== Q(this, x, "f").length ? Q(this, x, "f").pop() : Q(this, m, "f") === Q(this, i, "f") ? Q(this, s, "m", z).call(this, false) : Q(this, m, "f"), Q(this, y, "f")[E2] = e2, Q(this, v, "f")[E2] = t2, Q(this, g, "f").set(e2, E2), Q(this, w, "f")[Q(this, S, "f")] = E2, Q(this, b, "f")[E2] = Q(this, S, "f"), X(this, S, E2, "f"), X(this, m, (n2 = Q(this, m, "f"), ++n2), "f"), Q(this, B, "f").call(this, E2, _2, h2), h2 && (h2.set = "add"), f2 = false, Q(this, M, "f") && Q(this, c, "f")?.call(this, t2, e2, "add");
        else {
          Q(this, s, "m", Y).call(this, E2);
          const r3 = Q(this, v, "f")[E2];
          if (t2 !== r3) {
            if (Q(this, A, "f") && Q(this, s, "m", W).call(this, r3)) {
              r3.__abortController.abort(new Error("replaced"));
              const { __staleWhileFetching: t3 } = r3;
              void 0 === t3 || d2 || (Q(this, I, "f") && Q(this, l, "f")?.call(this, t3, e2, "set"), Q(this, P, "f") && Q(this, k, "f")?.push([t3, e2, "set"]));
            } else d2 || (Q(this, I, "f") && Q(this, l, "f")?.call(this, r3, e2, "set"), Q(this, P, "f") && Q(this, k, "f")?.push([r3, e2, "set"]));
            if (Q(this, U, "f").call(this, E2), Q(this, B, "f").call(this, E2, _2, h2), Q(this, v, "f")[E2] = t2, h2) {
              h2.set = "replace";
              const e3 = r3 && Q(this, s, "m", W).call(this, r3) ? r3.__staleWhileFetching : r3;
              void 0 !== e3 && (h2.oldValue = e3);
            }
          } else h2 && (h2.set = "update");
          Q(this, M, "f") && this.onInsert?.(t2, e2, t2 === r3 ? "update" : "replace");
        }
        if (0 === o2 || Q(this, C, "f") || Q(this, s, "m", R).call(this), Q(this, C, "f") && (f2 || Q(this, N, "f").call(this, E2, o2, a2), h2 && Q(this, D, "f").call(this, h2, E2)), !d2 && Q(this, P, "f") && Q(this, k, "f")) {
          const e3 = Q(this, k, "f");
          let t3;
          for (; t3 = e3?.shift(); ) Q(this, u, "f")?.call(this, ...t3);
        }
        return this;
      }
      pop() {
        try {
          for (; Q(this, m, "f"); ) {
            const e2 = Q(this, v, "f")[Q(this, _, "f")];
            if (Q(this, s, "m", z).call(this, true), Q(this, s, "m", W).call(this, e2)) {
              if (e2.__staleWhileFetching) return e2.__staleWhileFetching;
            } else if (void 0 !== e2) return e2;
          }
          return;
        } finally {
          if (Q(this, P, "f") && Q(this, k, "f")) {
            const e2 = Q(this, k, "f");
            let t2;
            for (; t2 = e2?.shift(); ) Q(this, u, "f")?.call(this, ...t2);
          }
        }
      }
      has(e2, t2 = {}) {
        const { updateAgeOnHas: r2 = this.updateAgeOnHas, status: n2 } = t2, o2 = Q(this, g, "f").get(e2);
        if (void 0 !== o2) {
          const e3 = Q(this, v, "f")[o2];
          if (Q(this, s, "m", W).call(this, e3) && void 0 === e3.__staleWhileFetching) return false;
          if (!Q(this, F, "f").call(this, o2)) return r2 && Q(this, O, "f").call(this, o2), n2 && (n2.has = "hit", Q(this, D, "f").call(this, n2, o2)), true;
          n2 && (n2.has = "stale", Q(this, D, "f").call(this, n2, o2));
        } else n2 && (n2.has = "miss");
        return false;
      }
      peek(e2, t2 = {}) {
        const { allowStale: r2 = this.allowStale } = t2, n2 = Q(this, g, "f").get(e2);
        if (void 0 === n2 || !r2 && Q(this, F, "f").call(this, n2)) return;
        const o2 = Q(this, v, "f")[n2];
        return Q(this, s, "m", W).call(this, o2) ? o2.__staleWhileFetching : o2;
      }
      async fetch(e2, t2 = {}) {
        const { allowStale: r2 = this.allowStale, updateAgeOnGet: n2 = this.updateAgeOnGet, noDeleteOnStaleGet: o2 = this.noDeleteOnStaleGet, ttl: i2 = this.ttl, noDisposeOnSet: a2 = this.noDisposeOnSet, size: l2 = 0, sizeCalculation: c2 = this.sizeCalculation, noUpdateTTL: u2 = this.noUpdateTTL, noDeleteOnFetchRejection: d2 = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: p2 = this.allowStaleOnFetchRejection, ignoreFetchAbort: h2 = this.ignoreFetchAbort, allowStaleOnFetchAbort: m2 = this.allowStaleOnFetchAbort, context: f2, forceRefresh: y2 = false, status: w2, signal: b2 } = t2;
        if (!Q(this, A, "f")) return w2 && (w2.fetch = "get"), this.get(e2, { allowStale: r2, updateAgeOnGet: n2, noDeleteOnStaleGet: o2, status: w2 });
        const _2 = { allowStale: r2, updateAgeOnGet: n2, noDeleteOnStaleGet: o2, ttl: i2, noDisposeOnSet: a2, size: l2, sizeCalculation: c2, noUpdateTTL: u2, noDeleteOnFetchRejection: d2, allowStaleOnFetchRejection: p2, allowStaleOnFetchAbort: m2, ignoreFetchAbort: h2, status: w2, signal: b2 }, S2 = Q(this, g, "f").get(e2);
        if (void 0 === S2) {
          w2 && (w2.fetch = "miss");
          const t3 = Q(this, s, "m", H).call(this, e2, S2, _2, f2);
          return t3.__returned = t3;
        }
        {
          const t3 = Q(this, v, "f")[S2];
          if (Q(this, s, "m", W).call(this, t3)) {
            const e3 = r2 && void 0 !== t3.__staleWhileFetching;
            return w2 && (w2.fetch = "inflight", e3 && (w2.returnedStale = true)), e3 ? t3.__staleWhileFetching : t3.__returned = t3;
          }
          const o3 = Q(this, F, "f").call(this, S2);
          if (!y2 && !o3) return w2 && (w2.fetch = "hit"), Q(this, s, "m", Y).call(this, S2), n2 && Q(this, O, "f").call(this, S2), w2 && Q(this, D, "f").call(this, w2, S2), t3;
          const i3 = Q(this, s, "m", H).call(this, e2, S2, _2, f2), a3 = void 0 !== i3.__staleWhileFetching && r2;
          return w2 && (w2.fetch = o3 ? "stale" : "refresh", a3 && o3 && (w2.returnedStale = true)), a3 ? i3.__staleWhileFetching : i3.__returned = i3;
        }
      }
      async forceFetch(e2, t2 = {}) {
        const r2 = await this.fetch(e2, t2);
        if (void 0 === r2) throw new Error("fetch() returned undefined");
        return r2;
      }
      memo(e2, t2 = {}) {
        const r2 = Q(this, p, "f");
        if (!r2) throw new Error("no memoMethod provided to constructor");
        const { context: n2, forceRefresh: o2, ...s2 } = t2, i2 = this.get(e2, s2);
        if (!o2 && void 0 !== i2) return i2;
        const a2 = r2(e2, i2, { options: s2, context: n2 });
        return this.set(e2, a2, s2), a2;
      }
      get(e2, t2 = {}) {
        const { allowStale: r2 = this.allowStale, updateAgeOnGet: n2 = this.updateAgeOnGet, noDeleteOnStaleGet: o2 = this.noDeleteOnStaleGet, status: i2 } = t2, a2 = Q(this, g, "f").get(e2);
        if (void 0 !== a2) {
          const t3 = Q(this, v, "f")[a2], l2 = Q(this, s, "m", W).call(this, t3);
          return i2 && Q(this, D, "f").call(this, i2, a2), Q(this, F, "f").call(this, a2) ? (i2 && (i2.get = "stale"), l2 ? (i2 && r2 && void 0 !== t3.__staleWhileFetching && (i2.returnedStale = true), r2 ? t3.__staleWhileFetching : void 0) : (o2 || Q(this, s, "m", V).call(this, e2, "expire"), i2 && r2 && (i2.returnedStale = true), r2 ? t3 : void 0)) : (i2 && (i2.get = "hit"), l2 ? t3.__staleWhileFetching : (Q(this, s, "m", Y).call(this, a2), n2 && Q(this, O, "f").call(this, a2), t3));
        }
        i2 && (i2.get = "miss");
      }
      delete(e2) {
        return Q(this, s, "m", V).call(this, e2, "delete");
      }
      clear() {
        Q(this, s, "m", K).call(this, "delete");
      }
    }
    Z = Symbol.toStringTag, z = function(e2) {
      var t2;
      const r2 = Q(this, _, "f"), n2 = Q(this, y, "f")[r2], o2 = Q(this, v, "f")[r2];
      return Q(this, A, "f") && Q(this, s, "m", W).call(this, o2) ? o2.__abortController.abort(new Error("evicted")) : (Q(this, I, "f") || Q(this, P, "f")) && (Q(this, I, "f") && Q(this, l, "f")?.call(this, o2, n2, "evict"), Q(this, P, "f") && Q(this, k, "f")?.push([o2, n2, "evict"])), Q(this, U, "f").call(this, r2), e2 && (Q(this, y, "f")[r2] = void 0, Q(this, v, "f")[r2] = void 0, Q(this, x, "f").push(r2)), 1 === Q(this, m, "f") ? (X(this, _, X(this, S, 0, "f"), "f"), Q(this, x, "f").length = 0) : X(this, _, Q(this, w, "f")[r2], "f"), Q(this, g, "f").delete(n2), X(this, m, (t2 = Q(this, m, "f"), --t2), "f"), r2;
    }, H = function(e2, t2, r2, n2) {
      const o2 = void 0 === t2 ? void 0 : Q(this, v, "f")[t2];
      if (Q(this, s, "m", W).call(this, o2)) return o2;
      const i2 = new oe(), { signal: a2 } = r2;
      a2?.addEventListener("abort", () => i2.abort(a2.reason), { signal: i2.signal });
      const l2 = { signal: i2.signal, options: r2, context: n2 }, c2 = (n3, o3 = false) => {
        const { aborted: a3 } = i2.signal, c3 = r2.ignoreFetchAbort && void 0 !== n3;
        if (r2.status && (a3 && !o3 ? (r2.status.fetchAborted = true, r2.status.fetchError = i2.signal.reason, c3 && (r2.status.fetchAbortIgnored = true)) : r2.status.fetchResolved = true), a3 && !c3 && !o3) return u2(i2.signal.reason);
        const d2 = p2, h3 = Q(this, v, "f")[t2];
        return (h3 === p2 || c3 && o3 && void 0 === h3) && (void 0 === n3 ? void 0 !== d2.__staleWhileFetching ? Q(this, v, "f")[t2] = d2.__staleWhileFetching : Q(this, s, "m", V).call(this, e2, "fetch") : (r2.status && (r2.status.fetchUpdated = true), this.set(e2, n3, l2.options))), n3;
      }, u2 = (n3) => {
        const { aborted: o3 } = i2.signal, a3 = o3 && r2.allowStaleOnFetchAbort, l3 = a3 || r2.allowStaleOnFetchRejection, c3 = l3 || r2.noDeleteOnFetchRejection, u3 = p2;
        if (Q(this, v, "f")[t2] === p2) {
          !c3 || void 0 === u3.__staleWhileFetching ? Q(this, s, "m", V).call(this, e2, "fetch") : a3 || (Q(this, v, "f")[t2] = u3.__staleWhileFetching);
        }
        if (l3) return r2.status && void 0 !== u3.__staleWhileFetching && (r2.status.returnedStale = true), u3.__staleWhileFetching;
        if (u3.__returned === u3) throw n3;
      };
      r2.status && (r2.status.fetchDispatched = true);
      const p2 = new Promise((t3, n3) => {
        const s2 = Q(this, d, "f")?.call(this, e2, o2, l2);
        s2 && s2 instanceof Promise && s2.then((e3) => t3(void 0 === e3 ? void 0 : e3), n3), i2.signal.addEventListener("abort", () => {
          r2.ignoreFetchAbort && !r2.allowStaleOnFetchAbort || (t3(void 0), r2.allowStaleOnFetchAbort && (t3 = (e3) => c2(e3, true)));
        });
      }).then(c2, (e3) => (r2.status && (r2.status.fetchRejected = true, r2.status.fetchError = e3), u2(e3))), h2 = Object.assign(p2, { __abortController: i2, __staleWhileFetching: o2, __returned: void 0 });
      return void 0 === t2 ? (this.set(e2, h2, { ...l2.options, status: void 0 }), t2 = Q(this, g, "f").get(e2)) : Q(this, v, "f")[t2] = h2, h2;
    }, W = function(e2) {
      if (!Q(this, A, "f")) return false;
      const t2 = e2;
      return !!t2 && t2 instanceof Promise && t2.hasOwnProperty("__staleWhileFetching") && t2.__abortController instanceof oe;
    }, G = function(e2, t2) {
      Q(this, b, "f")[t2] = e2, Q(this, w, "f")[e2] = t2;
    }, Y = function(e2) {
      e2 !== Q(this, S, "f") && (e2 === Q(this, _, "f") ? X(this, _, Q(this, w, "f")[e2], "f") : Q(this, s, "m", G).call(this, Q(this, b, "f")[e2], Q(this, w, "f")[e2]), Q(this, s, "m", G).call(this, Q(this, S, "f"), e2), X(this, S, e2, "f"));
    }, V = function(e2, t2) {
      var r2;
      let n2 = false;
      if (0 !== Q(this, m, "f")) {
        const o2 = Q(this, g, "f").get(e2);
        if (void 0 !== o2) if (n2 = true, 1 === Q(this, m, "f")) Q(this, s, "m", K).call(this, t2);
        else {
          Q(this, U, "f").call(this, o2);
          const n3 = Q(this, v, "f")[o2];
          if (Q(this, s, "m", W).call(this, n3) ? n3.__abortController.abort(new Error("deleted")) : (Q(this, I, "f") || Q(this, P, "f")) && (Q(this, I, "f") && Q(this, l, "f")?.call(this, n3, e2, t2), Q(this, P, "f") && Q(this, k, "f")?.push([n3, e2, t2])), Q(this, g, "f").delete(e2), Q(this, y, "f")[o2] = void 0, Q(this, v, "f")[o2] = void 0, o2 === Q(this, S, "f")) X(this, S, Q(this, b, "f")[o2], "f");
          else if (o2 === Q(this, _, "f")) X(this, _, Q(this, w, "f")[o2], "f");
          else {
            const e3 = Q(this, b, "f")[o2];
            Q(this, w, "f")[e3] = Q(this, w, "f")[o2];
            const t3 = Q(this, w, "f")[o2];
            Q(this, b, "f")[t3] = Q(this, b, "f")[o2];
          }
          X(this, m, (r2 = Q(this, m, "f"), --r2), "f"), Q(this, x, "f").push(o2);
        }
      }
      if (Q(this, P, "f") && Q(this, k, "f")?.length) {
        const e3 = Q(this, k, "f");
        let t3;
        for (; t3 = e3?.shift(); ) Q(this, u, "f")?.call(this, ...t3);
      }
      return n2;
    }, K = function(e2) {
      for (const t2 of Q(this, s, "m", j).call(this, { allowStale: true })) {
        const r2 = Q(this, v, "f")[t2];
        if (Q(this, s, "m", W).call(this, r2)) r2.__abortController.abort(new Error("deleted"));
        else {
          const n2 = Q(this, y, "f")[t2];
          Q(this, I, "f") && Q(this, l, "f")?.call(this, r2, n2, e2), Q(this, P, "f") && Q(this, k, "f")?.push([r2, n2, e2]);
        }
      }
      if (Q(this, g, "f").clear(), Q(this, v, "f").fill(void 0), Q(this, y, "f").fill(void 0), Q(this, C, "f") && Q(this, T, "f") && (Q(this, C, "f").fill(0), Q(this, T, "f").fill(0)), Q(this, E, "f") && Q(this, E, "f").fill(0), X(this, _, 0, "f"), X(this, S, 0, "f"), Q(this, x, "f").length = 0, X(this, f, 0, "f"), X(this, m, 0, "f"), Q(this, P, "f") && Q(this, k, "f")) {
        const e3 = Q(this, k, "f");
        let t2;
        for (; t2 = e3?.shift(); ) Q(this, u, "f")?.call(this, ...t2);
      }
    };
  }