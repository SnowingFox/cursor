// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 91105 range:13049700..13724250
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91105: (e, t, r) => {
    "use strict";
    r.d(t, { EVC: () => zr, waD: () => lp, Rxj: () => Vr, _Ji: () => cn, BNF: () => a, $1H: () => Is, khl: () => ml, E1e: () => Ve, KOV: () => Hr, O0K: () => Dd, aAA: () => Od, gRo: () => Fd, Npg: () => Qd, DvK: () => ed, VzO: () => sn, utt: () => to, x7h: () => bo, NB: () => ud, Px0: () => Gr, o_K: () => an, $3f: () => mr, KpW: () => Zr, aZ7: () => lu, S5n: () => gs, mAh: () => Zl, r5P: () => p, hQM: () => St, V2h: () => Gt, BQk: () => Rt, ky5: () => Fe, T2h: () => Id, a82: () => Ne.a8, myO: () => Xl, Zu2: () => pp, yeE: () => ze, o9_: () => Te, ba_: () => Sr, Rhp: () => Jd, gMI: () => He });
    var n = r(51455), s = r(76760), o = r.t(s, 2);
    const i = 2592e6, a = 864e5, c = [".txt", ".json", ".jsonl"], l = ["agent-transcripts", "agent-tools"], u = 100;
    async function d(e2, t2, r2, o2, i2, a2) {
      let c2 = 0, l2 = 0, p2 = true;
      try {
        const m2 = await (0, n.readdir)(e2, { withFileTypes: true });
        for (const h2 of m2) {
          a2.entriesSinceYield++, a2.entriesSinceYield >= u && (a2.entriesSinceYield = 0, await new Promise((e3) => setImmediate(e3)));
          const m3 = (0, s.join)(e2, h2.name);
          if (h2.isDirectory()) {
            if (!i2) {
              p2 = false;
              continue;
            }
            const e3 = await d(m3, t2, r2, o2, i2, a2);
            if (c2 += e3.scannedFiles, l2 += e3.deletedFiles, !e3.isEmpty) {
              p2 = false;
              continue;
            }
            try {
              await (0, n.rmdir)(m3);
            } catch {
              p2 = false;
            }
            continue;
          }
          if (h2.isFile() && o2.some((e3) => h2.name.endsWith(e3))) {
            c2++;
            try {
              const e3 = await (0, n.stat)(m3);
              Number.isFinite(e3.mtimeMs) && t2 - e3.mtimeMs > r2 ? (await (0, n.rm)(m3, { force: true }), l2++) : p2 = false;
            } catch {
              p2 = false;
            }
          } else p2 = false;
        }
      } catch {
        p2 = false;
      }
      return { scannedFiles: c2, deletedFiles: l2, isEmpty: p2 };
    }
    async function p(e2) {
      const t2 = e2.nowMs ?? Date.now(), r2 = e2.ttlMs ?? i, o2 = e2.allowedExtensions ?? c, a2 = e2.subdirs ?? l;
      let u2 = 0, p2 = 0, m2 = 0;
      const h2 = { entriesSinceYield: 0 };
      try {
        const i2 = await (0, n.readdir)(e2.projectsDir, { withFileTypes: true });
        for (const c2 of i2) if (c2.isDirectory()) {
          u2++;
          for (const i3 of a2) {
            const a3 = (0, s.join)(e2.projectsDir, c2.name, i3);
            try {
              if (!(await (0, n.lstat)(a3)).isDirectory()) continue;
            } catch {
              continue;
            }
            const l2 = await d(a3, t2, r2, o2, "agent-tools" === i3, h2);
            p2 += l2.scannedFiles, m2 += l2.deletedFiles;
          }
        }
      } catch {
      }
      return { scannedProjects: u2, scannedFiles: p2, deletedFiles: m2 };
    }
    var m = r(9639);
    const h = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, f = /* @__PURE__ */ new Set(), g = "object" == typeof process && process ? process : {}, y = (e2, t2, r2, n2) => {
      "function" == typeof g.emitWarning ? g.emitWarning(e2, t2, r2, n2) : console.error(`[${r2}] ${t2}: ${e2}`);
    };
    let w = globalThis.AbortController, v = globalThis.AbortSignal;
    if (void 0 === w) {
      v = class {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(e3, t3) {
          this._onabort.push(t3);
        }
      }, w = class {
        constructor() {
          t2();
        }
        signal = new v();
        abort(e3) {
          if (!this.signal.aborted) {
            this.signal.reason = e3, this.signal.aborted = true;
            for (const t3 of this.signal._onabort) t3(e3);
            this.signal.onabort?.(e3);
          }
        }
      };
      let e2 = "1" !== g.env?.LRU_CACHE_IGNORE_AC_WARNING;
      const t2 = () => {
        e2 && (e2 = false, y("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t2));
      };
    }
    /* @__PURE__ */ Symbol("type");
    const _ = (e2) => e2 && e2 === Math.floor(e2) && e2 > 0 && isFinite(e2), A = (e2) => _(e2) ? e2 <= Math.pow(2, 8) ? Uint8Array : e2 <= Math.pow(2, 16) ? Uint16Array : e2 <= Math.pow(2, 32) ? Uint32Array : e2 <= Number.MAX_SAFE_INTEGER ? S : null : null;
    class S extends Array {
      constructor(e2) {
        super(e2), this.fill(0);
      }
    }
    class b {
      heap;
      length;
      static #ee = false;
      static create(e2) {
        const t2 = A(e2);
        if (!t2) return [];
        b.#ee = true;
        const r2 = new b(e2, t2);
        return b.#ee = false, r2;
      }
      constructor(e2, t2) {
        if (!b.#ee) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new t2(e2), this.length = 0;
      }
      push(e2) {
        this.heap[this.length++] = e2;
      }
      pop() {
        return this.heap[--this.length];
      }
    }
    class E {
      #te;
      #re;
      #ne;
      #se;
      #oe;
      #ie;
      #ae;
      #ce;
      get perf() {
        return this.#ce;
      }
      ttl;
      ttlResolution;
      ttlAutopurge;
      updateAgeOnGet;
      updateAgeOnHas;
      allowStale;
      noDisposeOnSet;
      noUpdateTTL;
      maxEntrySize;
      sizeCalculation;
      noDeleteOnFetchRejection;
      noDeleteOnStaleGet;
      allowStaleOnFetchAbort;
      allowStaleOnFetchRejection;
      ignoreFetchAbort;
      #le;
      #ue;
      #de;
      #pe;
      #me;
      #he;
      #fe;
      #ge;
      #ye;
      #we;
      #ve;
      #_e;
      #Ae;
      #Se;
      #be;
      #Ee;
      #Ie;
      #Ce;
      #ke;
      static unsafeExposeInternals(e2) {
        return { starts: e2.#Ae, ttls: e2.#Se, autopurgeTimers: e2.#be, sizes: e2.#_e, keyMap: e2.#de, keyList: e2.#pe, valList: e2.#me, next: e2.#he, prev: e2.#fe, get head() {
          return e2.#ge;
        }, get tail() {
          return e2.#ye;
        }, free: e2.#we, isBackgroundFetch: (t2) => e2.#xe(t2), backgroundFetch: (t2, r2, n2, s2) => e2.#Te(t2, r2, n2, s2), moveToTail: (t2) => e2.#Re(t2), indexes: (t2) => e2.#Be(t2), rindexes: (t2) => e2.#Pe(t2), isStale: (t2) => e2.#Je(t2) };
      }
      get max() {
        return this.#te;
      }
      get maxSize() {
        return this.#re;
      }
      get calculatedSize() {
        return this.#ue;
      }
      get size() {
        return this.#le;
      }
      get fetchMethod() {
        return this.#ie;
      }
      get memoMethod() {
        return this.#ae;
      }
      get dispose() {
        return this.#ne;
      }
      get onInsert() {
        return this.#se;
      }
      get disposeAfter() {
        return this.#oe;
      }
      constructor(e2) {
        const { max: t2 = 0, ttl: r2, ttlResolution: n2 = 1, ttlAutopurge: s2, updateAgeOnGet: o2, updateAgeOnHas: i2, allowStale: a2, dispose: c2, onInsert: l2, disposeAfter: u2, noDisposeOnSet: d2, noUpdateTTL: p2, maxSize: m2 = 0, maxEntrySize: g2 = 0, sizeCalculation: w2, fetchMethod: v2, memoMethod: S2, noDeleteOnFetchRejection: I2, noDeleteOnStaleGet: C2, allowStaleOnFetchRejection: k2, allowStaleOnFetchAbort: x2, ignoreFetchAbort: T2, perf: R2 } = e2;
        if (void 0 !== R2 && "function" != typeof R2?.now) throw new TypeError("perf option must have a now() method if specified");
        if (this.#ce = R2 ?? h, 0 !== t2 && !_(t2)) throw new TypeError("max option must be a nonnegative integer");
        const B2 = t2 ? A(t2) : Array;
        if (!B2) throw new Error("invalid max value: " + t2);
        if (this.#te = t2, this.#re = m2, this.maxEntrySize = g2 || this.#re, this.sizeCalculation = w2, this.sizeCalculation) {
          if (!this.#re && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
        }
        if (void 0 !== S2 && "function" != typeof S2) throw new TypeError("memoMethod must be a function if defined");
        if (this.#ae = S2, void 0 !== v2 && "function" != typeof v2) throw new TypeError("fetchMethod must be a function if specified");
        if (this.#ie = v2, this.#Ie = !!v2, this.#de = /* @__PURE__ */ new Map(), this.#pe = new Array(t2).fill(void 0), this.#me = new Array(t2).fill(void 0), this.#he = new B2(t2), this.#fe = new B2(t2), this.#ge = 0, this.#ye = 0, this.#we = b.create(t2), this.#le = 0, this.#ue = 0, "function" == typeof c2 && (this.#ne = c2), "function" == typeof l2 && (this.#se = l2), "function" == typeof u2 ? (this.#oe = u2, this.#ve = []) : (this.#oe = void 0, this.#ve = void 0), this.#Ee = !!this.#ne, this.#ke = !!this.#se, this.#Ce = !!this.#oe, this.noDisposeOnSet = !!d2, this.noUpdateTTL = !!p2, this.noDeleteOnFetchRejection = !!I2, this.allowStaleOnFetchRejection = !!k2, this.allowStaleOnFetchAbort = !!x2, this.ignoreFetchAbort = !!T2, 0 !== this.maxEntrySize) {
          if (0 !== this.#re && !_(this.#re)) throw new TypeError("maxSize must be a positive integer if specified");
          if (!_(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
          this.#Me();
        }
        if (this.allowStale = !!a2, this.noDeleteOnStaleGet = !!C2, this.updateAgeOnGet = !!o2, this.updateAgeOnHas = !!i2, this.ttlResolution = _(n2) || 0 === n2 ? n2 : 1, this.ttlAutopurge = !!s2, this.ttl = r2 || 0, this.ttl) {
          if (!_(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
          this.#qe();
        }
        if (0 === this.#te && 0 === this.ttl && 0 === this.#re) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !this.#te && !this.#re) {
          const e3 = "LRU_CACHE_UNBOUNDED";
          if (((e4) => !f.has(e4))(e3)) {
            f.add(e3);
            y("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e3, E);
          }
        }
      }
      getRemainingTTL(e2) {
        return this.#de.has(e2) ? 1 / 0 : 0;
      }
      #qe() {
        const e2 = new S(this.#te), t2 = new S(this.#te);
        this.#Se = e2, this.#Ae = t2;
        const r2 = this.ttlAutopurge ? new Array(this.#te) : void 0;
        this.#be = r2, this.#De = (n3, s3, o2 = this.#ce.now()) => {
          if (t2[n3] = 0 !== s3 ? o2 : 0, e2[n3] = s3, r2?.[n3] && (clearTimeout(r2[n3]), r2[n3] = void 0), 0 !== s3 && r2) {
            const e3 = setTimeout(() => {
              this.#Je(n3) && this.#Oe(this.#pe[n3], "expire");
            }, s3 + 1);
            e3.unref && e3.unref(), r2[n3] = e3;
          }
        }, this.#Ne = (r3) => {
          t2[r3] = 0 !== e2[r3] ? this.#ce.now() : 0;
        }, this.#Fe = (r3, o2) => {
          if (e2[o2]) {
            const i2 = e2[o2], a2 = t2[o2];
            if (!i2 || !a2) return;
            r3.ttl = i2, r3.start = a2, r3.now = n2 || s2();
            const c2 = r3.now - a2;
            r3.remainingTTL = i2 - c2;
          }
        };
        let n2 = 0;
        const s2 = () => {
          const e3 = this.#ce.now();
          if (this.ttlResolution > 0) {
            n2 = e3;
            const t3 = setTimeout(() => n2 = 0, this.ttlResolution);
            t3.unref && t3.unref();
          }
          return e3;
        };
        this.getRemainingTTL = (r3) => {
          const o2 = this.#de.get(r3);
          if (void 0 === o2) return 0;
          const i2 = e2[o2], a2 = t2[o2];
          if (!i2 || !a2) return 1 / 0;
          return i2 - ((n2 || s2()) - a2);
        }, this.#Je = (r3) => {
          const o2 = t2[r3], i2 = e2[r3];
          return !!i2 && !!o2 && (n2 || s2()) - o2 > i2;
        };
      }
      #Ne = () => {
      };
      #Fe = () => {
      };
      #De = () => {
      };
      #Je = () => false;
      #Me() {
        const e2 = new S(this.#te);
        this.#ue = 0, this.#_e = e2, this.#Ue = (t2) => {
          this.#ue -= e2[t2], e2[t2] = 0;
        }, this.#Le = (e3, t2, r2, n2) => {
          if (this.#xe(t2)) return 0;
          if (!_(r2)) {
            if (!n2) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
            if ("function" != typeof n2) throw new TypeError("sizeCalculation must be a function");
            if (r2 = n2(t2, e3), !_(r2)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
          }
          return r2;
        }, this.#$e = (t2, r2, n2) => {
          if (e2[t2] = r2, this.#re) {
            const r3 = this.#re - e2[t2];
            for (; this.#ue > r3; ) this.#Qe(true);
          }
          this.#ue += e2[t2], n2 && (n2.entrySize = r2, n2.totalCalculatedSize = this.#ue);
        };
      }
      #Ue = (e2) => {
      };
      #$e = (e2, t2, r2) => {
      };
      #Le = (e2, t2, r2, n2) => {
        if (r2 || n2) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        return 0;
      };
      *#Be({ allowStale: e2 = this.allowStale } = {}) {
        if (this.#le) for (let t2 = this.#ye; this.#je(t2) && (!e2 && this.#Je(t2) || (yield t2), t2 !== this.#ge); ) t2 = this.#fe[t2];
      }
      *#Pe({ allowStale: e2 = this.allowStale } = {}) {
        if (this.#le) for (let t2 = this.#ge; this.#je(t2) && (!e2 && this.#Je(t2) || (yield t2), t2 !== this.#ye); ) t2 = this.#he[t2];
      }
      #je(e2) {
        return void 0 !== e2 && this.#de.get(this.#pe[e2]) === e2;
      }
      *entries() {
        for (const e2 of this.#Be()) void 0 === this.#me[e2] || void 0 === this.#pe[e2] || this.#xe(this.#me[e2]) || (yield [this.#pe[e2], this.#me[e2]]);
      }
      *rentries() {
        for (const e2 of this.#Pe()) void 0 === this.#me[e2] || void 0 === this.#pe[e2] || this.#xe(this.#me[e2]) || (yield [this.#pe[e2], this.#me[e2]]);
      }
      *keys() {
        for (const e2 of this.#Be()) {
          const t2 = this.#pe[e2];
          void 0 === t2 || this.#xe(this.#me[e2]) || (yield t2);
        }
      }
      *rkeys() {
        for (const e2 of this.#Pe()) {
          const t2 = this.#pe[e2];
          void 0 === t2 || this.#xe(this.#me[e2]) || (yield t2);
        }
      }
      *values() {
        for (const e2 of this.#Be()) {
          void 0 === this.#me[e2] || this.#xe(this.#me[e2]) || (yield this.#me[e2]);
        }
      }
      *rvalues() {
        for (const e2 of this.#Pe()) {
          void 0 === this.#me[e2] || this.#xe(this.#me[e2]) || (yield this.#me[e2]);
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      [Symbol.toStringTag] = "LRUCache";
      find(e2, t2 = {}) {
        for (const r2 of this.#Be()) {
          const n2 = this.#me[r2], s2 = this.#xe(n2) ? n2.__staleWhileFetching : n2;
          if (void 0 !== s2 && e2(s2, this.#pe[r2], this)) return this.get(this.#pe[r2], t2);
        }
      }
      forEach(e2, t2 = this) {
        for (const r2 of this.#Be()) {
          const n2 = this.#me[r2], s2 = this.#xe(n2) ? n2.__staleWhileFetching : n2;
          void 0 !== s2 && e2.call(t2, s2, this.#pe[r2], this);
        }
      }
      rforEach(e2, t2 = this) {
        for (const r2 of this.#Pe()) {
          const n2 = this.#me[r2], s2 = this.#xe(n2) ? n2.__staleWhileFetching : n2;
          void 0 !== s2 && e2.call(t2, s2, this.#pe[r2], this);
        }
      }
      purgeStale() {
        let e2 = false;
        for (const t2 of this.#Pe({ allowStale: true })) this.#Je(t2) && (this.#Oe(this.#pe[t2], "expire"), e2 = true);
        return e2;
      }
      info(e2) {
        const t2 = this.#de.get(e2);
        if (void 0 === t2) return;
        const r2 = this.#me[t2], n2 = this.#xe(r2) ? r2.__staleWhileFetching : r2;
        if (void 0 === n2) return;
        const s2 = { value: n2 };
        if (this.#Se && this.#Ae) {
          const e3 = this.#Se[t2], r3 = this.#Ae[t2];
          if (e3 && r3) {
            const t3 = e3 - (this.#ce.now() - r3);
            s2.ttl = t3, s2.start = Date.now();
          }
        }
        return this.#_e && (s2.size = this.#_e[t2]), s2;
      }
      dump() {
        const e2 = [];
        for (const t2 of this.#Be({ allowStale: true })) {
          const r2 = this.#pe[t2], n2 = this.#me[t2], s2 = this.#xe(n2) ? n2.__staleWhileFetching : n2;
          if (void 0 === s2 || void 0 === r2) continue;
          const o2 = { value: s2 };
          if (this.#Se && this.#Ae) {
            o2.ttl = this.#Se[t2];
            const e3 = this.#ce.now() - this.#Ae[t2];
            o2.start = Math.floor(Date.now() - e3);
          }
          this.#_e && (o2.size = this.#_e[t2]), e2.unshift([r2, o2]);
        }
        return e2;
      }
      load(e2) {
        this.clear();
        for (const [t2, r2] of e2) {
          if (r2.start) {
            const e3 = Date.now() - r2.start;
            r2.start = this.#ce.now() - e3;
          }
          this.set(t2, r2.value, r2);
        }
      }
      set(e2, t2, r2 = {}) {
        if (void 0 === t2) return this.delete(e2), this;
        const { ttl: n2 = this.ttl, start: s2, noDisposeOnSet: o2 = this.noDisposeOnSet, sizeCalculation: i2 = this.sizeCalculation, status: a2 } = r2;
        let { noUpdateTTL: c2 = this.noUpdateTTL } = r2;
        const l2 = this.#Le(e2, t2, r2.size || 0, i2);
        if (this.maxEntrySize && l2 > this.maxEntrySize) return a2 && (a2.set = "miss", a2.maxEntrySizeExceeded = true), this.#Oe(e2, "set"), this;
        let u2 = 0 === this.#le ? void 0 : this.#de.get(e2);
        if (void 0 === u2) u2 = 0 === this.#le ? this.#ye : 0 !== this.#we.length ? this.#we.pop() : this.#le === this.#te ? this.#Qe(false) : this.#le, this.#pe[u2] = e2, this.#me[u2] = t2, this.#de.set(e2, u2), this.#he[this.#ye] = u2, this.#fe[u2] = this.#ye, this.#ye = u2, this.#le++, this.#$e(u2, l2, a2), a2 && (a2.set = "add"), c2 = false, this.#ke && this.#se?.(t2, e2, "add");
        else {
          this.#Re(u2);
          const r3 = this.#me[u2];
          if (t2 !== r3) {
            if (this.#Ie && this.#xe(r3)) {
              r3.__abortController.abort(new Error("replaced"));
              const { __staleWhileFetching: t3 } = r3;
              void 0 === t3 || o2 || (this.#Ee && this.#ne?.(t3, e2, "set"), this.#Ce && this.#ve?.push([t3, e2, "set"]));
            } else o2 || (this.#Ee && this.#ne?.(r3, e2, "set"), this.#Ce && this.#ve?.push([r3, e2, "set"]));
            if (this.#Ue(u2), this.#$e(u2, l2, a2), this.#me[u2] = t2, a2) {
              a2.set = "replace";
              const e3 = r3 && this.#xe(r3) ? r3.__staleWhileFetching : r3;
              void 0 !== e3 && (a2.oldValue = e3);
            }
          } else a2 && (a2.set = "update");
          this.#ke && this.onInsert?.(t2, e2, t2 === r3 ? "update" : "replace");
        }
        if (0 === n2 || this.#Se || this.#qe(), this.#Se && (c2 || this.#De(u2, n2, s2), a2 && this.#Fe(a2, u2)), !o2 && this.#Ce && this.#ve) {
          const e3 = this.#ve;
          let t3;
          for (; t3 = e3?.shift(); ) this.#oe?.(...t3);
        }
        return this;
      }
      pop() {
        try {
          for (; this.#le; ) {
            const e2 = this.#me[this.#ge];
            if (this.#Qe(true), this.#xe(e2)) {
              if (e2.__staleWhileFetching) return e2.__staleWhileFetching;
            } else if (void 0 !== e2) return e2;
          }
        } finally {
          if (this.#Ce && this.#ve) {
            const e2 = this.#ve;
            let t2;
            for (; t2 = e2?.shift(); ) this.#oe?.(...t2);
          }
        }
      }
      #Qe(e2) {
        const t2 = this.#ge, r2 = this.#pe[t2], n2 = this.#me[t2];
        return this.#Ie && this.#xe(n2) ? n2.__abortController.abort(new Error("evicted")) : (this.#Ee || this.#Ce) && (this.#Ee && this.#ne?.(n2, r2, "evict"), this.#Ce && this.#ve?.push([n2, r2, "evict"])), this.#Ue(t2), this.#be?.[t2] && (clearTimeout(this.#be[t2]), this.#be[t2] = void 0), e2 && (this.#pe[t2] = void 0, this.#me[t2] = void 0, this.#we.push(t2)), 1 === this.#le ? (this.#ge = this.#ye = 0, this.#we.length = 0) : this.#ge = this.#he[t2], this.#de.delete(r2), this.#le--, t2;
      }
      has(e2, t2 = {}) {
        const { updateAgeOnHas: r2 = this.updateAgeOnHas, status: n2 } = t2, s2 = this.#de.get(e2);
        if (void 0 !== s2) {
          const e3 = this.#me[s2];
          if (this.#xe(e3) && void 0 === e3.__staleWhileFetching) return false;
          if (!this.#Je(s2)) return r2 && this.#Ne(s2), n2 && (n2.has = "hit", this.#Fe(n2, s2)), true;
          n2 && (n2.has = "stale", this.#Fe(n2, s2));
        } else n2 && (n2.has = "miss");
        return false;
      }
      peek(e2, t2 = {}) {
        const { allowStale: r2 = this.allowStale } = t2, n2 = this.#de.get(e2);
        if (void 0 === n2 || !r2 && this.#Je(n2)) return;
        const s2 = this.#me[n2];
        return this.#xe(s2) ? s2.__staleWhileFetching : s2;
      }
      #Te(e2, t2, r2, n2) {
        const s2 = void 0 === t2 ? void 0 : this.#me[t2];
        if (this.#xe(s2)) return s2;
        const o2 = new w(), { signal: i2 } = r2;
        i2?.addEventListener("abort", () => o2.abort(i2.reason), { signal: o2.signal });
        const a2 = { signal: o2.signal, options: r2, context: n2 }, c2 = (n3, s3 = false) => {
          const { aborted: i3 } = o2.signal, c3 = r2.ignoreFetchAbort && void 0 !== n3, d3 = r2.ignoreFetchAbort || !(!r2.allowStaleOnFetchAbort || void 0 === n3);
          if (r2.status && (i3 && !s3 ? (r2.status.fetchAborted = true, r2.status.fetchError = o2.signal.reason, c3 && (r2.status.fetchAbortIgnored = true)) : r2.status.fetchResolved = true), i3 && !c3 && !s3) return l2(o2.signal.reason, d3);
          const p2 = u2, m2 = this.#me[t2];
          return (m2 === u2 || c3 && s3 && void 0 === m2) && (void 0 === n3 ? void 0 !== p2.__staleWhileFetching ? this.#me[t2] = p2.__staleWhileFetching : this.#Oe(e2, "fetch") : (r2.status && (r2.status.fetchUpdated = true), this.set(e2, n3, a2.options))), n3;
        }, l2 = (n3, s3) => {
          const { aborted: i3 } = o2.signal, a3 = i3 && r2.allowStaleOnFetchAbort, c3 = a3 || r2.allowStaleOnFetchRejection, l3 = c3 || r2.noDeleteOnFetchRejection, d3 = u2;
          if (this.#me[t2] === u2) {
            !l3 || !s3 && void 0 === d3.__staleWhileFetching ? this.#Oe(e2, "fetch") : a3 || (this.#me[t2] = d3.__staleWhileFetching);
          }
          if (c3) return r2.status && void 0 !== d3.__staleWhileFetching && (r2.status.returnedStale = true), d3.__staleWhileFetching;
          if (d3.__returned === d3) throw n3;
        };
        r2.status && (r2.status.fetchDispatched = true);
        const u2 = new Promise((t3, n3) => {
          const i3 = this.#ie?.(e2, s2, a2);
          i3 && i3 instanceof Promise && i3.then((e3) => t3(void 0 === e3 ? void 0 : e3), n3), o2.signal.addEventListener("abort", () => {
            r2.ignoreFetchAbort && !r2.allowStaleOnFetchAbort || (t3(void 0), r2.allowStaleOnFetchAbort && (t3 = (e3) => c2(e3, true)));
          });
        }).then(c2, (e3) => (r2.status && (r2.status.fetchRejected = true, r2.status.fetchError = e3), l2(e3, false))), d2 = Object.assign(u2, { __abortController: o2, __staleWhileFetching: s2, __returned: void 0 });
        return void 0 === t2 ? (this.set(e2, d2, { ...a2.options, status: void 0 }), t2 = this.#de.get(e2)) : this.#me[t2] = d2, d2;
      }
      #xe(e2) {
        if (!this.#Ie) return false;
        const t2 = e2;
        return !!t2 && t2 instanceof Promise && t2.hasOwnProperty("__staleWhileFetching") && t2.__abortController instanceof w;
      }
      async fetch(e2, t2 = {}) {
        const { allowStale: r2 = this.allowStale, updateAgeOnGet: n2 = this.updateAgeOnGet, noDeleteOnStaleGet: s2 = this.noDeleteOnStaleGet, ttl: o2 = this.ttl, noDisposeOnSet: i2 = this.noDisposeOnSet, size: a2 = 0, sizeCalculation: c2 = this.sizeCalculation, noUpdateTTL: l2 = this.noUpdateTTL, noDeleteOnFetchRejection: u2 = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: d2 = this.allowStaleOnFetchRejection, ignoreFetchAbort: p2 = this.ignoreFetchAbort, allowStaleOnFetchAbort: m2 = this.allowStaleOnFetchAbort, context: h2, forceRefresh: f2 = false, status: g2, signal: y2 } = t2;
        if (!this.#Ie) return g2 && (g2.fetch = "get"), this.get(e2, { allowStale: r2, updateAgeOnGet: n2, noDeleteOnStaleGet: s2, status: g2 });
        const w2 = { allowStale: r2, updateAgeOnGet: n2, noDeleteOnStaleGet: s2, ttl: o2, noDisposeOnSet: i2, size: a2, sizeCalculation: c2, noUpdateTTL: l2, noDeleteOnFetchRejection: u2, allowStaleOnFetchRejection: d2, allowStaleOnFetchAbort: m2, ignoreFetchAbort: p2, status: g2, signal: y2 };
        let v2 = this.#de.get(e2);
        if (void 0 === v2) {
          g2 && (g2.fetch = "miss");
          const t3 = this.#Te(e2, v2, w2, h2);
          return t3.__returned = t3;
        }
        {
          const t3 = this.#me[v2];
          if (this.#xe(t3)) {
            const e3 = r2 && void 0 !== t3.__staleWhileFetching;
            return g2 && (g2.fetch = "inflight", e3 && (g2.returnedStale = true)), e3 ? t3.__staleWhileFetching : t3.__returned = t3;
          }
          const s3 = this.#Je(v2);
          if (!f2 && !s3) return g2 && (g2.fetch = "hit"), this.#Re(v2), n2 && this.#Ne(v2), g2 && this.#Fe(g2, v2), t3;
          const o3 = this.#Te(e2, v2, w2, h2), i3 = void 0 !== o3.__staleWhileFetching && r2;
          return g2 && (g2.fetch = s3 ? "stale" : "refresh", i3 && s3 && (g2.returnedStale = true)), i3 ? o3.__staleWhileFetching : o3.__returned = o3;
        }
      }
      async forceFetch(e2, t2 = {}) {
        const r2 = await this.fetch(e2, t2);
        if (void 0 === r2) throw new Error("fetch() returned undefined");
        return r2;
      }
      memo(e2, t2 = {}) {
        const r2 = this.#ae;
        if (!r2) throw new Error("no memoMethod provided to constructor");
        const { context: n2, forceRefresh: s2, ...o2 } = t2, i2 = this.get(e2, o2);
        if (!s2 && void 0 !== i2) return i2;
        const a2 = r2(e2, i2, { options: o2, context: n2 });
        return this.set(e2, a2, o2), a2;
      }
      get(e2, t2 = {}) {
        const { allowStale: r2 = this.allowStale, updateAgeOnGet: n2 = this.updateAgeOnGet, noDeleteOnStaleGet: s2 = this.noDeleteOnStaleGet, status: o2 } = t2, i2 = this.#de.get(e2);
        if (void 0 !== i2) {
          const t3 = this.#me[i2], a2 = this.#xe(t3);
          return o2 && this.#Fe(o2, i2), this.#Je(i2) ? (o2 && (o2.get = "stale"), a2 ? (o2 && r2 && void 0 !== t3.__staleWhileFetching && (o2.returnedStale = true), r2 ? t3.__staleWhileFetching : void 0) : (s2 || this.#Oe(e2, "expire"), o2 && r2 && (o2.returnedStale = true), r2 ? t3 : void 0)) : (o2 && (o2.get = "hit"), a2 ? t3.__staleWhileFetching : (this.#Re(i2), n2 && this.#Ne(i2), t3));
        }
        o2 && (o2.get = "miss");
      }
      #Ge(e2, t2) {
        this.#fe[t2] = e2, this.#he[e2] = t2;
      }
      #Re(e2) {
        e2 !== this.#ye && (e2 === this.#ge ? this.#ge = this.#he[e2] : this.#Ge(this.#fe[e2], this.#he[e2]), this.#Ge(this.#ye, e2), this.#ye = e2);
      }
      delete(e2) {
        return this.#Oe(e2, "delete");
      }
      #Oe(e2, t2) {
        let r2 = false;
        if (0 !== this.#le) {
          const n2 = this.#de.get(e2);
          if (void 0 !== n2) if (this.#be?.[n2] && (clearTimeout(this.#be?.[n2]), this.#be[n2] = void 0), r2 = true, 1 === this.#le) this.#He(t2);
          else {
            this.#Ue(n2);
            const r3 = this.#me[n2];
            if (this.#xe(r3) ? r3.__abortController.abort(new Error("deleted")) : (this.#Ee || this.#Ce) && (this.#Ee && this.#ne?.(r3, e2, t2), this.#Ce && this.#ve?.push([r3, e2, t2])), this.#de.delete(e2), this.#pe[n2] = void 0, this.#me[n2] = void 0, n2 === this.#ye) this.#ye = this.#fe[n2];
            else if (n2 === this.#ge) this.#ge = this.#he[n2];
            else {
              const e3 = this.#fe[n2];
              this.#he[e3] = this.#he[n2];
              const t3 = this.#he[n2];
              this.#fe[t3] = this.#fe[n2];
            }
            this.#le--, this.#we.push(n2);
          }
        }
        if (this.#Ce && this.#ve?.length) {
          const e3 = this.#ve;
          let t3;
          for (; t3 = e3?.shift(); ) this.#oe?.(...t3);
        }
        return r2;
      }
      clear() {
        return this.#He("delete");
      }
      #He(e2) {
        for (const t2 of this.#Pe({ allowStale: true })) {
          const r2 = this.#me[t2];
          if (this.#xe(r2)) r2.__abortController.abort(new Error("deleted"));
          else {
            const n2 = this.#pe[t2];
            this.#Ee && this.#ne?.(r2, n2, e2), this.#Ce && this.#ve?.push([r2, n2, e2]);
          }
        }
        if (this.#de.clear(), this.#me.fill(void 0), this.#pe.fill(void 0), this.#Se && this.#Ae) {
          this.#Se.fill(0), this.#Ae.fill(0);
          for (const e3 of this.#be ?? []) void 0 !== e3 && clearTimeout(e3);
          this.#be?.fill(void 0);
        }
        if (this.#_e && this.#_e.fill(0), this.#ge = 0, this.#ye = 0, this.#we.length = 0, this.#ue = 0, this.#le = 0, this.#Ce && this.#ve) {
          const e3 = this.#ve;
          let t2;
          for (; t2 = e3?.shift(); ) this.#oe?.(...t2);
        }
      }
    }
    var I = r(4573), C = r(73024), k = r(37949), x = r(98875), T = r(44498), R = r(62671), B = r(25925), P = r(37374), J = r(97051), M = r(68388);
    const q = async (e2) => {
      const t2 = (0, M.o1)(e2);
      try {
        return await (0, n.realpath)(t2);
      } catch {
        return t2;
      }
    }, D = "CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT", O = "CURSOR_FORCED_SHELL_EGRESS_DEPENDENCY_DENY_DOMAINS", N = /\$\(|`|<\(|>\(/, F = /[;&|]/;
    let U, L, $, Q;
    function j() {
      if (void 0 === U) {
        const e2 = (process.env.CURSOR_FORCED_SHELL_EGRESS ?? "").trim().toLowerCase();
        U = "" !== e2 && "0" !== e2 && "false" !== e2 && "off" !== e2;
      }
      return U;
    }
    function G(e2) {
      const t2 = (process.env[e2] ?? "").trim();
      if (t2) try {
        return new RegExp(t2, "i"), t2;
      } catch (t3) {
        throw new Error(`[forced-egress] invalid regex in ${e2}: ${String(t3)}`);
      }
    }
    function H(e2) {
      return (process.env[e2] ?? "").split(",").map((e3) => e3.trim()).filter((e3) => e3.length > 0);
    }
    function z(e2) {
      const t2 = (process.env[e2] ?? "").split(":").map((e3) => e3.trim()).filter((e3) => e3.length > 0), r2 = t2.filter((e3) => e3.startsWith("/")), n2 = t2.length - r2.length;
      return n2 > 0 && console.error(`[forced-egress] ignoring ${n2} non-absolute path(s) in ${e2}.`), r2;
    }
    function W() {
      if (void 0 === Q) {
        const e2 = (process.env[D] ?? "").trim().toLowerCase();
        let t2 = "deny";
        "allow" === e2 || "deny" === e2 ? t2 = e2 : "" !== e2 && console.error(`[forced-egress] ignoring invalid value in ${D} (expected "allow" or "deny"); using "deny".`);
        const r2 = H("CURSOR_FORCED_SHELL_EGRESS_DENY_DOMAINS"), n2 = (process.env[O] ?? "").trim();
        let s2 = r2;
        "none" === n2.toLowerCase() ? s2 = [] : "" !== n2 && (s2 = H(O)), Q = { networkDefault: t2, denyDomains: r2, dependencyDenyDomains: s2, allowDomains: H("CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS"), writablePaths: z("CURSOR_FORCED_SHELL_EGRESS_WRITABLE_PATHS") };
      }
      return Q;
    }
    function V(e2, t2, r2 = {}) {
      const n2 = [G(e2), G(t2)].filter((e3) => void 0 !== e3).map((e3) => `(?:${e3})`);
      if (0 === n2.length) return null;
      const s2 = n2.join("|"), o2 = r2.anchorToExecutable ? `^\\s*(?:[A-Za-z_][A-Za-z0-9_]*=[^\\s]*\\s+)*(?:${s2})` : s2;
      return new RegExp(o2, "i");
    }
    function K(e2, t2) {
      const r2 = (function() {
        const e3 = W();
        return { type: "workspace_readwrite", ...e3.writablePaths.length > 0 ? { additionalReadwritePaths: e3.writablePaths } : {}, networkPolicy: { version: 1, default: e3.networkDefault, allow: ["127.0.0.0/8", "::1/128", "localhost", ...e3.allowDomains], ...e3.denyDomains.length > 0 ? { deny: e3.denyDomains } : {} }, networkPolicyStrict: true, skipStatsigDefaults: true, enableSharedBuildCache: true };
      })(), n2 = (void 0 === L && (L = V("CURSOR_FORCED_SHELL_EGRESS_DEPENDENCY_REGEX", "CURSOR_FORCED_SHELL_EGRESS_EXTRA_DEPENDENCY_REGEX", { anchorToExecutable: true })), L);
      if (null === n2) return r2;
      const s2 = t2?.executableCommands ?? [];
      if (t2?.parsingFailed || 0 === s2.length) return r2;
      if (N.test(e2)) return r2;
      const o2 = (void 0 === $ && ($ = V("CURSOR_FORCED_SHELL_EGRESS_SOURCE_REGEX", "CURSOR_FORCED_SHELL_EGRESS_EXTRA_SOURCE_REGEX")), $);
      for (const e3 of s2) {
        const t3 = e3.fullText?.trim() || e3.name?.trim() || "";
        if (!t3 || o2?.test(t3) || F.test(t3)) return r2;
      }
      return s2.every((e3) => n2.test(e3.fullText?.trim() || e3.name?.trim() || "")) ? (function() {
        const e3 = W();
        return { type: "workspace_readwrite", ...e3.writablePaths.length > 0 ? { additionalReadwritePaths: e3.writablePaths } : {}, networkPolicy: { version: 1, default: "allow", ...e3.dependencyDenyDomains.length > 0 ? { deny: e3.dependencyDenyDomains } : {} }, skipStatsigDefaults: true, enableSharedBuildCache: true };
      })() : r2;
    }
    var Y = r(13574);
    function Z(e2) {
      if (!e2) return;
      let t2;
      return "allow" === e2.default ? t2 = Y.h1.ALLOW : "deny" === e2.default && (t2 = Y.h1.DENY), new Y.RB({ version: e2.version, defaultAction: t2, deny: e2.deny ?? [], allow: e2.allow ?? [], logging: e2.logging ? (r2 = e2.logging, new Y.Qq({ decisionLogPath: r2.decisionLogPath, logFormat: r2.logFormat })) : void 0 });
      var r2;
    }
    function X(e2) {
      const t2 = (function(e3) {
        if (!e3) return;
        const t3 = {};
        if (void 0 !== e3.version && (t3.version = e3.version), void 0 !== e3.defaultAction) switch (e3.defaultAction) {
          case Y.h1.ALLOW:
            t3.default = "allow";
            break;
          case Y.h1.DENY:
            t3.default = "deny";
        }
        return e3.deny && e3.deny.length > 0 && (t3.deny = e3.deny), e3.allow && e3.allow.length > 0 && (t3.allow = e3.allow), e3.logging && (t3.logging = (function(e4) {
          const t4 = {};
          return e4.decisionLogPath && (t4.decisionLogPath = e4.decisionLogPath), "jsonl" === e4.logFormat && (t4.logFormat = "jsonl"), t4;
        })(e3.logging)), t3;
      })(e2.networkPolicy);
      return t2 || (e2.networkAccess ? (0, B.T6)() : (0, B.Po)());
    }
    function ee(e2) {
      switch (e2) {
        case "system":
          return Y.Sz.SYSTEM;
        case "workspace":
          return Y.Sz.WORKSPACE;
        default:
          return Y.Sz.UNSPECIFIED;
      }
    }
    function te(e2) {
      const t2 = (function(e3) {
        switch (e3) {
          case Y.Sz.SYSTEM:
            return "system";
          case Y.Sz.WORKSPACE:
            return "workspace";
          case Y.Sz.UNSPECIFIED:
          default:
            return;
        }
      })(e2.readBoundary), r2 = e2.additionalReadPaths ?? [];
      return { readBoundary: t2, additionalReadPaths: "workspace" === t2 && r2.length > 0 ? r2 : void 0 };
    }
    function re(e2) {
      if (!e2) return { type: "insecure_none" };
      switch (e2.type) {
        case Y.vc.INSECURE_NONE:
        case Y.vc.UNSPECIFIED:
          return { type: "insecure_none", allowlistEscalated: e2.allowlistEscalated, enableSharedBuildCache: e2.enableSharedBuildCache, debugOutputDir: e2.debugOutputDir, captureDenies: e2.captureDenies };
        case Y.vc.WORKSPACE_READWRITE:
          return { type: "workspace_readwrite", networkPolicy: X(e2), skipStatsigDefaults: e2.skipStatsigDefaults, additionalReadwritePaths: e2.additionalReadwritePaths, additionalReadonlyPaths: e2.additionalReadonlyPaths, disableTmpWrite: e2.disableTmpWrite, enableSharedBuildCache: e2.enableSharedBuildCache, debugOutputDir: e2.debugOutputDir, captureDenies: e2.captureDenies, networkPolicyStrict: e2.networkPolicyStrict, ...te(e2) };
        case Y.vc.WORKSPACE_READONLY:
          return { type: "workspace_readonly", networkPolicy: X(e2), skipStatsigDefaults: e2.skipStatsigDefaults, additionalReadonlyPaths: e2.additionalReadonlyPaths, disableTmpWrite: e2.disableTmpWrite, enableSharedBuildCache: e2.enableSharedBuildCache, debugOutputDir: e2.debugOutputDir, captureDenies: e2.captureDenies, networkPolicyStrict: e2.networkPolicyStrict, ...te(e2) };
        default:
          return { type: "insecure_none" };
      }
    }
    function ne(e2) {
      if (e2) return "insecure_none" === e2.type ? new Y.Mw({ type: Y.vc.INSECURE_NONE, allowlistEscalated: e2.allowlistEscalated, enableSharedBuildCache: e2.enableSharedBuildCache, debugOutputDir: e2.debugOutputDir, captureDenies: e2.captureDenies }) : "workspace_readwrite" === e2.type ? new Y.Mw({ type: Y.vc.WORKSPACE_READWRITE, networkAccess: (0, B.$b)(e2.networkPolicy), skipStatsigDefaults: e2.skipStatsigDefaults, additionalReadwritePaths: e2.additionalReadwritePaths ?? [], additionalReadonlyPaths: e2.additionalReadonlyPaths ?? [], disableTmpWrite: e2.disableTmpWrite, enableSharedBuildCache: e2.enableSharedBuildCache, debugOutputDir: e2.debugOutputDir, captureDenies: e2.captureDenies, networkPolicy: Z(e2.networkPolicy), networkPolicyStrict: e2.networkPolicyStrict, readBoundary: ee(e2.readBoundary), additionalReadPaths: "workspace" === e2.readBoundary ? e2.additionalReadPaths ?? [] : [] }) : "workspace_readonly" === e2.type ? new Y.Mw({ type: Y.vc.WORKSPACE_READONLY, networkAccess: (0, B.$b)(e2.networkPolicy), skipStatsigDefaults: e2.skipStatsigDefaults, additionalReadonlyPaths: e2.additionalReadonlyPaths ?? [], disableTmpWrite: e2.disableTmpWrite, enableSharedBuildCache: e2.enableSharedBuildCache, debugOutputDir: e2.debugOutputDir, captureDenies: e2.captureDenies, networkPolicy: Z(e2.networkPolicy), networkPolicyStrict: e2.networkPolicyStrict, readBoundary: ee(e2.readBoundary), additionalReadPaths: "workspace" === e2.readBoundary ? e2.additionalReadPaths ?? [] : [] }) : new Y.Mw({ type: Y.vc.INSECURE_NONE });
    }
    function se(e2) {
      return " " === e2 || "	" === e2 || "\n" === e2 || "\r" === e2 || " " === e2 || "​" === e2 || "‌" === e2 || "‍" === e2 || "\uFEFF" === e2;
    }
    function oe(e2) {
      let t2 = "", r2 = false;
      for (const n2 of e2) se(n2) ? r2 = true : (r2 && t2.length > 0 && (t2 += " "), r2 = false, t2 += n2);
      return t2;
    }
    function ie(e2) {
      return e2.length > 0 && [...e2].every((e3) => "*" === e3);
    }
    function ae(e2) {
      const t2 = e2.indexOf(":");
      if (t2 <= 0) return;
      const r2 = e2.slice(0, t2).trim();
      return [...r2].some((e3) => 0 === e3.trim().length) ? void 0 : { executablePattern: r2, argsPattern: e2.slice(t2 + 1).trim() };
    }
    function ce(e2, t2) {
      const r2 = e2.trim(), n2 = (function(e3) {
        return e3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      })(r2), s2 = `^${n2.replace(/\\\*/g, ".*")}$`;
      try {
        return new RegExp(s2).test(t2);
      } catch {
        return r2 === t2;
      }
    }
    function le({ command: e2, parsingResult: t2 }) {
      return [.../* @__PURE__ */ new Set([e2, ...t2.executableCommands.map((e3) => e3.fullText)])];
    }
    const ue = { a: "\x07", b: "\b", e: "\x1B", E: "\x1B", f: "\f", n: "\n", r: "\r", t: "	", v: "\v", "\\": "\\", "'": "'", '"': '"', "?": "?" };
    function de(e2) {
      let t2 = "", r2 = "plain", n2 = 0;
      for (; n2 < e2.length; ) {
        const s2 = e2[n2];
        if ("plain" === r2) {
          "$" === s2 && "'" === e2[n2 + 1] ? (r2 = "ansi", n2 += 2) : "$" === s2 && '"' === e2[n2 + 1] ? (r2 = "double", n2 += 2) : "'" === s2 ? (r2 = "single", n2++) : '"' === s2 ? (r2 = "double", n2++) : "\\" === s2 && n2 + 1 < e2.length ? ("\n" !== e2[n2 + 1] && (t2 += e2[n2 + 1]), n2 += 2) : (t2 += s2, n2++);
          continue;
        }
        if ("single" === r2) {
          "'" === s2 ? r2 = "plain" : t2 += s2, n2++;
          continue;
        }
        if ("double" === r2) {
          if ('"' === s2) {
            r2 = "plain", n2++;
            continue;
          }
          if ("\\" === s2 && n2 + 1 < e2.length) {
            const r3 = e2[n2 + 1];
            if ("$" === r3 || "`" === r3 || '"' === r3 || "\\" === r3 || "\n" === r3) {
              "\n" !== r3 && (t2 += r3), n2 += 2;
              continue;
            }
          }
          t2 += s2, n2++;
          continue;
        }
        if ("'" === s2) {
          r2 = "plain", n2++;
          continue;
        }
        if ("\\" !== s2 || n2 + 1 >= e2.length) {
          t2 += s2, n2++;
          continue;
        }
        const o2 = e2[n2 + 1], i2 = ue[o2];
        if (void 0 !== i2) {
          t2 += i2, n2 += 2;
          continue;
        }
        const a2 = "x" === o2 ? e2.slice(n2 + 2).match(/^[0-9a-fA-F]{1,2}/)?.[0] : "u" === o2 ? e2.slice(n2 + 2).match(/^[0-9a-fA-F]{1,4}/)?.[0] : "U" === o2 ? e2.slice(n2 + 2).match(/^[0-9a-fA-F]{1,8}/)?.[0] : e2.slice(n2 + 1).match(/^[0-7]{1,3}/)?.[0], c2 = "u" === o2 || "U" === o2, l2 = "x" === o2 || c2 ? 16 : 8;
        if (void 0 !== a2) {
          const e3 = Number.parseInt(a2, l2);
          if (!c2 || e3 <= 1114111) {
            t2 += c2 ? String.fromCodePoint(e3) : String.fromCharCode(e3), n2 += a2.length + (16 === l2 ? 2 : 1);
            continue;
          }
        }
        t2 += o2, n2 += 2;
      }
      return oe(t2);
    }
    function pe({ rule: e2, command: t2 }) {
      const r2 = oe(e2).trim();
      return 0 !== r2.length && (null !== (function(e3) {
        const t3 = oe(e3).trim();
        if (0 === t3.length) return "Rule cannot be empty";
        if (t3.length > 512) return "Rule cannot exceed 512 characters";
        if (ie(t3)) return "Rule cannot match every command; be more specific than wildcards alone";
        if (t3.startsWith(":")) return "Colon rules need an executable before `:` (e.g. `aws:*s3 rm*`)";
        const r3 = ae(t3);
        if (void 0 !== r3) {
          const { executablePattern: e4, argsPattern: t4 } = r3;
          if (ie(e4) && (0 === t4.length || ie(t4))) return "Rule cannot match every command; narrow the executable or argument pattern";
        }
        return null;
      })(r2) || [t2.trim(), oe(t2).trim(), de(t2).trim()].some((e3) => (function(e4, t3) {
        const r3 = ae(e4);
        if (void 0 !== r3) {
          const { executablePattern: e5, argsPattern: n2 } = r3, s2 = t3.indexOf(" "), o2 = -1 === s2 ? t3 : t3.slice(0, s2), i2 = -1 === s2 ? "" : t3.slice(s2 + 1).trim();
          if (ce(e5, o2) && ce(n2, i2)) return true;
        }
        if (e4.includes("*")) return ce(e4, t3);
        return t3 === e4 || t3.startsWith(`${e4} `);
      })(r2, e3)));
    }
    function me({ matchForms: e2, blockedCommands: t2 }) {
      const r2 = t2.map((e3) => e3.trim()).filter((e3) => e3.length > 0);
      if (0 === r2.length) return;
      const n2 = e2.map((e3) => e3.trim()).filter((e3) => e3.length > 0), s2 = n2.length > 0 ? n2 : [""];
      for (const e3 of r2) if (s2.some((t3) => pe({ rule: e3, command: t3 }))) return e3;
    }
    function he(e2) {
      return `Denied: this command was blocked by administrator policy (denylist rule: ${e2}) and was not executed. It cannot be approved from this conversation; only a user can run it manually outside the agent. You may continue working on the task.`;
    }
    function fe({ command: e2, parsingResult: t2, blockedCommands: r2 }) {
      if (0 === r2.length) return;
      if (t2.parsingFailed || 0 === t2.executableCommands.length) return "Denied: this command could not be conclusively analyzed against your team's administrator command denylist, so it was blocked (fail-closed) and was not executed. It cannot be approved from this conversation; only a user can run it manually outside the agent. You may continue working on the task.";
      const n2 = me({ matchForms: le({ command: e2, parsingResult: t2 }), blockedCommands: r2 });
      return void 0 === n2 ? void 0 : he(n2);
    }
    var ge = r(48161), ye = r(33002), we = r(68505);
    const ve = ["Desktop", "Documents", "Downloads", "Music", "Movies", "Pictures", "Library", ".Trash"], _e = "/Volumes";
    function Ae(e2) {
      const t2 = e2.replace(/\/{2,}/g, "/");
      return t2.length > 1 && t2.endsWith("/") ? t2.slice(0, -1) : t2;
    }
    function Se(e2, t2) {
      if ("darwin" !== t2.platform) return [];
      const r2 = Ae(e2), n2 = r2.toLowerCase(), s2 = Ae(t2.homeDirectory), o2 = "/" === r2 ? 1 : r2.split("/").length;
      return [...ve.map((e3) => `${s2}/${e3}`), _e].filter((e3) => {
        return (t3 = e3.toLowerCase()) !== (r3 = n2) && t3.startsWith(r3.endsWith("/") ? r3 : `${r3}/`);
        var t3, r3;
      }).map((e3) => {
        const t3 = e3.split("/").slice(o2).join("/");
        return `${"/" === r2 ? "" : r2}/${t3}`;
      });
    }
    var be = r(65716), Ee = r(46842), Ie = r(86613), Ce = r(70406);
    class ke {
      constructor({ ttlMs: e2, now: t2 = Date.now }) {
        this.entries = /* @__PURE__ */ new Map(), this.ttlMs = "function" == typeof e2 ? e2 : ke.validated(e2), this.now = t2;
      }
      static validated(e2) {
        if (!Number.isFinite(e2) || e2 <= 0) throw new Error(`TTL cache requires a positive ttlMs, got ${e2}`);
        return () => e2;
      }
      get(e2) {
        const t2 = this.entries.get(e2);
        if (void 0 !== t2) {
          if (!(t2.expiresAtMs <= this.now())) return t2.value;
          this.entries.delete(e2);
        }
      }
      has(e2) {
        const t2 = this.entries.get(e2);
        return void 0 !== t2 && (!(t2.expiresAtMs <= this.now()) || (this.entries.delete(e2), false));
      }
      set(e2, t2) {
        this.entries.set(e2, { value: t2, expiresAtMs: this.now() + this.ttlMs() });
      }
      delete(e2) {
        return this.entries.delete(e2);
      }
      clear() {
        this.entries.clear();
      }
    }
    let xe;
    function Te(e2) {
      xe = e2;
    }
    function Re() {
      return void 0 !== xe;
    }
    function Be(e2) {
      if (void 0 !== xe) try {
        xe(e2);
      } catch {
      }
    }
    var Pe = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Je = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function Me(e2, { root: t2, searchPaths: r2 = [], includeGlobs: n2 = [], excludeGlobs: s2 = [], caseSensitive: o2 = false, cursorIgnoreFiles: i2 = [], sandboxPolicy: a2 = { type: "insecure_none" }, noIgnoreVcs: c2 = false, followSymlinks: l2 = false, source: u2 = "ripwalk" }) {
      const d2 = ["--files", "--hidden", "--no-require-git", "--no-config", "--color=never"], p2 = (function(e3 = process.env) {
        const t3 = e3.CURSOR_RIPWALK_THREADS?.trim();
        if (void 0 !== t3 && "" !== t3) {
          const e4 = Number(t3);
          if (Number.isInteger(e4) && e4 >= 0) return 0 === e4 ? void 0 : e4;
        }
        return Math.min(2, (0, ge.availableParallelism)());
      })();
      void 0 !== p2 && d2.push("--threads", String(p2)), l2 && d2.push("--follow"), c2 && d2.push("--no-ignore-vcs"), o2 && d2.push("--case-sensitive");
      for (const e3 of i2) d2.push("--cursor-ignore", e3);
      for (const e3 of n2) d2.push("--iglob", e3);
      for (const e3 of s2) d2.push("--iglob", `!${e3}`);
      r2.length > 0 && d2.push("--", ...r2);
      let m2, h2 = false;
      const f2 = new Promise((e3) => {
        m2 = e3;
      });
      return { lines: (async function* () {
        const r3 = { stack: [], error: void 0, hasError: false };
        try {
          const o3 = Pe(r3, (function(e3, t3, r4, n3) {
            const s3 = (0, B.spawnInSandbox)((0, B.Ko)(), t3, { cwd: r4 }, n3), o4 = [];
            s3.stderr?.on("data", (e4) => {
              o4.push(e4);
            });
            const i4 = new Promise((e4, t4) => {
              s3.on("error", t4), s3.on("close", (t5) => e4(t5 ?? 0));
            });
            if (i4.catch(() => {
            }), !s3.stdout) throw new Error("No stdout from ripgrep process");
            const a3 = new Promise((t4) => {
              e3.signal.aborted ? t4("aborted") : e3.signal.addEventListener("abort", () => t4("aborted"), { once: true });
            });
            return { stdout: s3.stdout, processExit: i4, stderr: () => Buffer.concat(o4).toString(), aborted: a3, [Symbol.dispose]() {
              s3.kill();
            } };
          })(e2, d2, t2, a2), false);
          Re() && Be({ timestamp: Date.now(), source: u2, mode: "files", patternLength: 0, hasPath: true, includeGlobCount: n2.length, excludeGlobCount: s2.length, sandboxPolicyType: a2.type });
          let i3 = 0;
          const c3 = (async function* (e3) {
            let t3 = "";
            for await (const r4 of e3) {
              t3 += r4.toString();
              const e4 = t3.split("\n");
              t3 = e4.pop() ?? "", yield* e4;
            }
            t3 && (yield t3);
          })(o3.stdout)[Symbol.asyncIterator]();
          for (; ; ) {
            const e3 = await Promise.race([c3.next(), o3.aborted]);
            if ("aborted" === e3) {
              h2 = true, m2(true);
              break;
            }
            if (e3.done) break;
            i3++, yield e3.value;
          }
          if (i3 > 0) ;
          else if (!h2) {
            const e3 = await o3.processExit;
            if (0 !== e3 && 1 !== e3) {
              const t3 = o3.stderr();
              throw new Error(`Ripgrep failed (exit ${e3}) with no results${t3 ? `: ${t3}` : ""}`);
            }
          }
          h2 || m2(false);
        } catch (e3) {
          r3.error = e3, r3.hasError = true;
        } finally {
          Je(r3);
        }
      })(), didTimeout: f2 };
    }
    let qe;
    function De({ root: e2, searchPaths: t2 = [], includeGlobs: r2 = [], excludeGlobs: n2 = [], caseSensitive: s2 = false, cursorIgnoreFiles: o2 = [], sandboxPolicy: i2 = { type: "insecure_none" }, noIgnoreVcs: a2 = false, followSymlinks: c2 = false }) {
      return JSON.stringify({ root: e2, searchPaths: t2, includeGlobs: r2, excludeGlobs: n2, caseSensitive: s2, cursorIgnoreFiles: o2, sandboxPolicy: i2, noIgnoreVcs: a2, followSymlinks: c2 });
    }
    class Oe {
      constructor(e2 = () => (function(e3 = process.env) {
        if (void 0 !== qe) return qe;
        const t2 = e3.CURSOR_RIPWALK_CACHE_TTL_MS?.trim();
        if (void 0 !== t2 && "" !== t2) {
          const e4 = Number(t2);
          if (Number.isFinite(e4) && e4 > 0) return e4;
        }
        return 2e4;
      })()) {
        this.cache = new ke({ ttlMs: e2 });
      }
      clear() {
        this.cache.clear();
      }
      delete(e2) {
        this.cache.delete(De(e2));
      }
      walk(e2, t2) {
        const r2 = De(t2);
        let n2, s2 = false, o2 = false;
        const i2 = new Promise((e3) => {
          n2 = e3;
        }), a2 = (e3) => {
          o2 || (o2 = true, n2(e3));
        }, c2 = (l2 = e2.signal, new Promise((e3) => {
          l2.aborted ? e3("aborted") : l2.addEventListener("abort", () => e3("aborted"), { once: true });
        }));
        var l2;
        const u2 = async function* () {
          const n3 = this.cache.get(r2);
          if (void 0 !== n3) {
            const e3 = await Promise.race([n3.linesPromise.then((e4) => ({ type: "lines", lines: e4 }), (e4) => ({ type: "error", error: e4 })), c2.then(() => ({ type: "aborted" }))]);
            if ("aborted" === e3.type) return s2 = true, void a2(true);
            if ("lines" === e3.type) return a2(false), void (yield* e3.lines);
            this.cache.get(r2) === n3 && this.cache.delete(r2);
          }
          let o3, i3;
          const l3 = { linesPromise: new Promise((e3, t3) => {
            o3 = e3, i3 = t3;
          }) };
          l3.linesPromise.catch(() => {
          }), this.cache.set(r2, l3);
          const u3 = [];
          let d2, p2 = false;
          try {
            const r3 = Me(e2, t2);
            for await (const e3 of r3.lines) u3.push(e3), yield e3;
            if (await r3.didTimeout) return s2 = true, d2 = new Error("Ripwalk aborted before cacheable result was available"), void a2(true);
            p2 = true;
          } catch (e3) {
            throw d2 = e3, e3;
          } finally {
            p2 ? o3?.(u3) : (this.cache.get(r2) === l3 && this.cache.delete(r2), i3?.(d2 ?? new Error("Ripwalk terminated before cacheable result was available"))), s2 || a2(false);
          }
        }.bind(this);
        return { lines: u2(), didTimeout: i2 };
      }
    }
    var Ne = r(15071);
    async function Fe(e2, t2, r2) {
      try {
        return (await t2.exec(e2, r2, ["rev-parse", "--show-toplevel"], { caller: "findGitRoot" })).stdout.trim();
      } catch {
        return null;
      }
    }
    async function Ue(e2, t2, r2) {
      try {
        return (await t2.exec(e2, r2, ["config", "--get", "remote.origin.url"], { caller: "getGitRemoteUrl" })).stdout.trim();
      } catch {
        return;
      }
    }
    function Le(e2) {
      const t2 = e2.trim();
      if ("" === t2) return t2;
      try {
        const e3 = new URL(t2);
        return e3.username = "", e3.password = "", e3.toString();
      } catch {
        return t2;
      }
    }
    function $e(e2) {
      let t2 = e2.trim();
      t2.startsWith("git@") && (t2 = `https://${t2.slice(4).replace(":", "/")}`), /^[a-z][a-z0-9+.-]*:\/\//i.test(t2) && !/^https?:\/\//i.test(t2) && (t2 = t2.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "https://")), /^https?:\/\//i.test(t2) || (t2 = `https://${t2}`);
      try {
        const e3 = new URL(t2), r2 = e3.pathname.replace(/\/+$/, "").replace(/\.git$/i, "").replace(/\/+$/, "");
        return e3.hostname + r2;
      } catch {
        return t2 = t2.replace(/^https?:\/\//i, ""), t2 = t2.replace(/[?#].*$/, ""), t2 = t2.replace(/\/+$/, ""), t2 = t2.replace(/\.git$/i, ""), t2 = t2.replace(/\/+$/, ""), t2;
      }
    }
    const Qe = ["**/node_modules/**", "**/.git/**", "**/.turbo/**", "**/.next/**", "**/.cache/**", "**/.pnpm/**", "**/.yarn/**", "**/dist/**", "**/build/**", "**/out/**", "**/target/**", "**/.vscode/**", "**/.idea/**", "**/venv/**", "**/__pycache__/**", "**/logs/**", "**/tmp/**", "**/temp/**"];
    function je(e2, t2) {
      return Se(e2, t2).map((t3) => `/${s.posix.relative(e2, t3)}`);
    }
    const Ge = [".gitignore", ".cursorignore"];
    function He(e2) {
      return e2;
    }
    async function ze(e2) {
      if (!(0, s.isAbsolute)(e2)) return null;
      const t2 = await (0, M.DN)(e2);
      return null === t2 ? null : t2;
    }
    async function We(e2) {
      return e2.getShellSandboxIgnoreMapping ? e2.getShellSandboxIgnoreMapping() : e2.getCursorIgnoreMapping();
    }
    class Ve {
      constructor(e2, t2, r2) {
        this.ignoreServicePromise = Ye.init((0, ye.q6)(), e2, r2 ?? [process.cwd()], t2);
      }
      isIgnoredByAny(e2) {
        return this.ignoreServicePromise.then((t2) => t2.isIgnoredByAny(e2));
      }
      isGitIgnored(e2) {
        return this.ignoreServicePromise.then((t2) => t2.isGitIgnored(e2));
      }
      isCursorIgnored(e2) {
        return this.ignoreServicePromise.then((t2) => t2.isCursorIgnored(e2));
      }
      isRepoBlocked(e2) {
        return this.ignoreServicePromise.then((t2) => t2.isRepoBlocked(e2));
      }
      listCursorIgnoreFilesByRoot(e2) {
        return this.ignoreServicePromise.then((t2) => t2.listCursorIgnoreFilesByRoot(e2));
      }
      getCursorIgnoreMapping() {
        return this.ignoreServicePromise.then((e2) => e2.getCursorIgnoreMapping());
      }
      getShellSandboxIgnoreMapping() {
        return this.ignoreServicePromise.then((e2) => e2.getShellSandboxIgnoreMapping());
      }
      getGitIgnoreMapping() {
        return this.ignoreServicePromise.then((e2) => e2.getGitIgnoreMapping());
      }
      getRepoBlockExcludeGlobs(e2) {
        return this.ignoreServicePromise.then((t2) => t2.getRepoBlockExcludeGlobs(e2));
      }
      handleCursorIgnoreCreated(e2) {
        return this.ignoreServicePromise.then((t2) => t2.handleCursorIgnoreCreated(e2));
      }
      handleCursorIgnoreChanged(e2) {
        return this.ignoreServicePromise.then((t2) => t2.handleCursorIgnoreChanged(e2));
      }
      handleCursorIgnoreDeleted(e2) {
        return this.ignoreServicePromise.then((t2) => t2.handleCursorIgnoreDeleted(e2));
      }
    }
    const Ke = Math.min(8, Math.max(1, Math.floor(ge.availableParallelism() / 2)));
    class Ye {
      constructor(e2, t2, r2, n2, s2, o2) {
        this.gitExecutor = e2, this.gitIgnoreMapping = t2, this.cursorIgnoreMapping = r2, this.teamSettingsService = n2, this.rootDirectories = s2, this.scanEnvironment = o2, this.gitIgnoreCache = new we.q({ max: 2e3 }), this.cursorIgnoreCache = new we.q({ max: 2e3 }), this.gitRootCache = new we.q({ max: 1e3 }), this.gitRemoteUrlCache = new we.q({ max: 200 }), this.hasGitDirCache = new we.q({ max: 1e3 }), this.gitParsedIgnoreCache = /* @__PURE__ */ new Map(), this.cursorParsedIgnoreCache = /* @__PURE__ */ new Map(), this.unwalkedFolders = s2.flatMap((e3) => Se(e3, o2));
      }
      static getRipwalkCache() {
        return Ye.ripwalkCache ??= new Oe(), Ye.ripwalkCache;
      }
      getIgnoreInstance(e2, t2, r2) {
        let n2 = r2.get(e2);
        return n2 || (n2 = Ie().add(t2), r2.set(e2, n2)), n2;
      }
      hasNoWorkspaceFolders() {
        return 0 === Object.keys(this.gitIgnoreMapping).length && 0 === Object.keys(this.cursorIgnoreMapping).length;
      }
      async resolveLookupRoot(e2) {
        return await (0, M.DN)(e2) ?? (0, M.o1)(e2);
      }
      static async init(e2, t2, r2, n2, s2 = { platform: process.platform, homeDirectory: ge.homedir() }) {
        const o2 = { ...s2, homeDirectory: await (0, M.DN)(s2.homeDirectory) ?? s2.homeDirectory }, i2 = await (0, be.PH)(r2, async (e3) => {
          const t3 = await (0, M.DN)(e3);
          return null === t3 ? (console.warn(`[IgnoreService] Cannot resolve workspace root, using as-is: ${e3}`), e3) : t3;
        }), a2 = {}, c2 = {}, l2 = (await (0, be.PH)(i2, async (r3) => {
          const n3 = await Fe(e2, t2, r3);
          return null !== n3 && Se(n3, o2).length > 0 ? r3 : n3;
        })).filter((e3) => null !== e3);
        return l2.length > 0 && await Promise.all([Ye.initializeIgnoreMapping(l2, ".gitignore", a2, o2), Ye.initializeIgnoreMapping(i2, ".cursorignore", c2, o2)]), new Ye(t2, a2, c2, n2, i2, o2);
      }
      static async preloadHierarchy(e2, t2, r2, n2) {
        let o2 = (0, M.o1)(e2);
        const i2 = (0, s.parse)(o2).root;
        for (; o2 !== i2; ) {
          if (n2?.has(o2)) {
            const e4 = (0, s.dirname)(o2);
            if (e4 === o2) break;
            o2 = e4;
            continue;
          }
          void 0 === r2[o2] && await Ye.handleHierarchyIgnore(o2, t2, r2), n2?.add(o2);
          const e3 = (0, s.dirname)(o2);
          if (e3 === o2) break;
          o2 = e3;
        }
      }
      static async handleHierarchyIgnore(e2, t2, r2) {
        const o2 = (0, s.join)(e2, t2);
        try {
          await (0, n.access)(o2, n.constants.F_OK);
          const t3 = await (0, Ee.yR)(o2), s2 = Ye.parseIgnoreRules(t3);
          r2[e2] = s2;
        } catch (n2) {
          "ENOENT" === n2.code || console.error(`Error reading ${t2} file at ${o2}:`, n2), r2[e2] = [];
        }
      }
      static async initializeIgnoreMapping(e2, t2, r2, n2) {
        try {
          const o2 = Ye.deduplicateRootDirectories(e2), i2 = await Ye.promiseQueue.enqueueList(o2, (e3) => Ye.findFilesWithRipgrep(e3, t2, n2)), a2 = Array.from(i2.values()).flat();
          await Promise.all(a2.map(async (e3) => {
            try {
              const t3 = await (0, Ee.yR)(e3), n3 = Ye.parseIgnoreRules(t3), o3 = (0, s.dirname)(e3);
              r2[o3] = n3;
            } catch (r3) {
              console.error(`Error processing ${t2} file at ${e3}:`, r3);
            }
          }));
          const c2 = /* @__PURE__ */ new Set();
          for (const e3 of o2) await Ye.preloadHierarchy(e3, t2, r2, c2);
        } catch (e3) {
          console.error(`Error initializing ignore mapping for ${t2}:`, e3);
        }
      }
      static async findFilesWithRipgrep(e2, t2, r2) {
        const n2 = (0, ye.q6)(), o2 = [], i2 = { root: e2, includeGlobs: Ge.map((e3) => `**/${e3}`), excludeGlobs: [...Qe, ...je(e2, r2)], source: "ignore_scan" }, a2 = Ye.getRipwalkCache().walk(n2, i2);
        for await (const r3 of a2.lines) (0, s.basename)(r3) === t2 && o2.push((0, s.join)(e2, r3));
        return o2;
      }
      async handleManualLookupWhenNoWorkspaceDirs(e2, t2) {
        const r2 = {};
        let n2 = (0, s.dirname)(e2);
        const o2 = (0, s.parse)(n2).root;
        for (; ; ) {
          const e3 = (0, s.join)(n2, t2);
          try {
            const t3 = await (0, Ee.yR)(e3), s2 = Ye.parseIgnoreRules(t3);
            s2.length > 0 && (r2[n2] = s2);
          } catch {
          }
          if (n2 === o2) break;
          n2 = (0, s.dirname)(n2);
        }
        return this.testIgnored(e2, r2, (e3, t3) => Ie().add(t3));
      }
      async isIgnoredByAny(e2) {
        const [t2, r2, n2] = await Promise.all([this.checkGitIgnored(e2), this.checkCursorIgnored(e2), this.checkRepoBlocked(e2)]);
        return t2 || r2 || n2;
      }
      async isGitIgnored(e2) {
        return this.checkGitIgnored(e2);
      }
      async isCursorIgnored(e2) {
        return this.checkCursorIgnored(e2);
      }
      async checkGitIgnored(e2) {
        if (this.hasNoWorkspaceFolders()) return this.handleManualLookupWhenNoWorkspaceDirs(e2, ".gitignore");
        const t2 = this.gitIgnoreCache.get(e2);
        if (void 0 !== t2) return t2;
        await this.populateHierarchyIfNeeded(e2, ".gitignore", this.gitIgnoreMapping);
        const r2 = this.checkIgnored(e2, this.gitIgnoreMapping, this.gitParsedIgnoreCache);
        return this.gitIgnoreCache.set(e2, r2), r2;
      }
      async checkCursorIgnored(e2) {
        if (this.hasNoWorkspaceFolders()) return this.handleManualLookupWhenNoWorkspaceDirs(e2, ".cursorignore");
        const t2 = this.cursorIgnoreCache.get(e2);
        if (void 0 !== t2) return t2;
        await this.populateHierarchyIfNeeded(e2, ".cursorignore", this.cursorIgnoreMapping);
        const r2 = this.checkIgnored(e2, this.cursorIgnoreMapping, this.cursorParsedIgnoreCache);
        return this.cursorIgnoreCache.set(e2, r2), r2;
      }
      isInUnwalkedFolder(e2) {
        const t2 = "darwin" === this.scanEnvironment.platform, r2 = t2 ? e2.toLowerCase() : e2;
        return this.unwalkedFolders.some((e3) => (0, M.ZU)({ basePath: t2 ? e3.toLowerCase() : e3, targetPath: r2 }));
      }
      async populateHierarchyIfNeeded(e2, t2, r2) {
        let n2 = (0, s.dirname)((0, M.o1)(e2));
        const o2 = [], i2 = (0, s.parse)(n2).root;
        for (; n2 !== i2; ) {
          const e3 = this.isInUnwalkedFolder(n2);
          if (!e3 && this.rootDirectories.some((e4) => (0, M.ZU)({ basePath: e4, targetPath: n2 }))) {
            n2 = (0, s.dirname)(n2);
            continue;
          }
          if (void 0 === r2[n2]) o2.push(n2);
          else if (!e3) break;
          const t3 = (0, s.dirname)(n2);
          if (t3 === n2) break;
          n2 = t3;
        }
        o2.length > 0 && (await Ye.promiseQueue.enqueueList(o2, (e3) => Ye.handleHierarchyIgnore(e3, t2, r2)), ".gitignore" === t2 ? this.gitIgnoreCache.clear() : this.cursorIgnoreCache.clear());
      }
      testIgnored(e2, t2, r2) {
        for (const [n2, o2] of Object.entries(t2)) {
          if (0 === o2.length) continue;
          if (!(0, M.ZU)({ basePath: n2, targetPath: e2 })) continue;
          const t3 = (0, s.relative)(n2, e2);
          if ("" === t3) continue;
          const i2 = r2(n2, o2), a2 = (0, M.oL)(t3), c2 = i2.test(a2);
          if (c2.ignored && !c2.unignored) return true;
          const l2 = i2.test(`${a2}/`);
          if (l2.ignored && !l2.unignored) return true;
        }
        return false;
      }
      checkIgnored(e2, t2, r2) {
        return this.testIgnored(e2, t2, (e3, t3) => this.getIgnoreInstance(e3, t3, r2));
      }
      async listCursorIgnoreFilesByRoot(e2) {
        const t2 = await this.resolveLookupRoot(e2), r2 = [];
        for (const [e3, o2] of Object.entries(this.cursorIgnoreMapping)) {
          if (0 === o2.length) continue;
          if (!(0, M.ZU)({ basePath: t2, targetPath: e3 })) continue;
          const i2 = (0, s.join)(e3, ".cursorignore");
          try {
            await (0, n.access)(i2), r2.push(i2);
          } catch {
          }
        }
        return r2;
      }
      async getCursorIgnoreMapping() {
        return { ...this.cursorIgnoreMapping };
      }
      async getShellSandboxIgnoreMapping() {
        const e2 = { ...this.cursorIgnoreMapping };
        for (const t2 of this.rootDirectories) {
          const r2 = await this.getRepoBlockExcludeGlobs(t2);
          if (0 === r2.length) continue;
          const n2 = e2[t2];
          e2[t2] = n2 ? [...n2, ...r2] : r2;
        }
        return e2;
      }
      async getGitIgnoreMapping() {
        return { ...this.gitIgnoreMapping };
      }
      static deduplicateRootDirectories(e2) {
        const t2 = [...e2.map((e3) => (0, M.o1)(e3))].sort((e3, t3) => e3.length - t3.length), r2 = [];
        for (const e3 of t2) {
          r2.some((t3) => e3.startsWith(`${t3}/`) || e3.startsWith(`${t3}\\`)) || r2.push(e3);
        }
        return r2;
      }
      static parseIgnoreRules(e2) {
        return e2.split("\n").map((e3) => e3.replace(/\r$/, "").trimStart()).filter((e3) => "" !== e3 && !e3.startsWith("#"));
      }
      clearCaches() {
        this.gitIgnoreCache.clear(), this.cursorIgnoreCache.clear(), this.gitRootCache.clear(), this.gitRemoteUrlCache.clear(), this.hasGitDirCache.clear(), this.gitParsedIgnoreCache.clear(), this.cursorParsedIgnoreCache.clear();
      }
      async handleCursorIgnoreCreated(e2) {
        const t2 = (0, s.dirname)(e2), r2 = await (0, Ee.yR)(e2), n2 = Ye.parseIgnoreRules(r2);
        this.cursorIgnoreMapping[t2] = n2, this.cursorParsedIgnoreCache.delete(t2), this.cursorIgnoreCache.clear();
      }
      async handleCursorIgnoreChanged(e2) {
        const t2 = (0, s.dirname)(e2), r2 = await (0, Ee.yR)(e2), n2 = Ye.parseIgnoreRules(r2);
        this.cursorIgnoreMapping[t2] = n2, this.cursorParsedIgnoreCache.delete(t2), this.cursorIgnoreCache.clear();
      }
      handleCursorIgnoreDeleted(e2) {
        const t2 = (0, s.dirname)(e2);
        this.cursorIgnoreMapping[t2] = [], this.cursorParsedIgnoreCache.delete(t2), this.cursorIgnoreCache.clear();
      }
      async findGitRootsForFile(e2) {
        const t2 = (0, M.o1)(e2), r2 = this.gitRootCache.get(t2);
        if (void 0 !== r2) return r2;
        const o2 = [], i2 = [], a2 = [];
        let c2 = t2;
        const l2 = (0, s.parse)(c2).root;
        for (; c2 !== l2; ) {
          i2.push(c2), void 0 === this.hasGitDirCache.get(c2) && a2.push(c2);
          const e3 = (0, s.dirname)(c2);
          if (e3 === c2) break;
          c2 = e3;
        }
        if (a2.length > 0) {
          const e3 = a2.map((e4) => (0, n.access)((0, s.join)(e4, ".git"), n.constants.F_OK).then(() => [e4, true]).catch(() => [e4, false])), t3 = await Promise.all(e3);
          for (const [e4, r3] of t3) this.hasGitDirCache.set(e4, r3);
        }
        for (const e3 of i2) {
          true === this.hasGitDirCache.get(e3) && o2.push(e3);
        }
        return this.gitRootCache.set(t2, o2), o2;
      }
      async isRepoBlocked(e2) {
        return this.checkRepoBlocked(e2);
      }
      async checkRepoBlocked(e2) {
        const t2 = await this.findGitRootsForFile(e2), r2 = await this.teamSettingsService?.getTeamRepos();
        if (!r2) return false;
        const n2 = r2.repos ?? [], o2 = r2.disableLocalExecAllowlistEnforcement ? [] : r2.allowedRepos ?? [];
        if (0 === n2.length && 0 === o2.length) return false;
        if (0 === t2.length) return this.checkNonRepoPathBlockedByAllowlist(e2, o2);
        let i2 = 0 === o2.length, a2 = false;
        for (const r3 of t2) {
          let t3;
          if (this.gitRemoteUrlCache.has(r3) ? t3 = this.gitRemoteUrlCache.get(r3) : (t3 = await Ue((0, ye.q6)(), this.gitExecutor, r3), void 0 !== t3 && this.gitRemoteUrlCache.set(r3, t3)), void 0 === t3) continue;
          const c2 = t3, l2 = (0, s.relative)(r3, e2) || ".";
          for (const e3 of n2) if (this.doesRepoUrlMatch(e3.url, c2)) {
            for (const t4 of e3.patterns || []) if (this.matchGlob(t4.pattern, l2)) return true;
          }
          o2.length > 0 && !a2 && (a2 = true, i2 = o2.some((e3) => this.doesRepoUrlMatch(e3.url, c2) && (e3.patterns || []).some((e4) => this.matchGlob(e4.pattern, l2))));
        }
        return !i2;
      }
      async checkNonRepoPathBlockedByAllowlist(e2, t2) {
        if (0 === t2.length) return false;
        const r2 = await this.getCursorDataDir();
        if ((0, M.ZU)({ basePath: r2, targetPath: e2 })) return false;
        const n2 = this.getWorkspaceRelativePath(e2);
        for (const e3 of t2) if (this.isWildcardUrl(e3.url)) {
          if ((e3.patterns || []).some((e4) => this.matchGlob(e4.pattern, n2))) return false;
        } else if (this.isPathPatternUrl(e3.url) && this.matchGlob(e3.url, n2)) return false;
        return true;
      }
      isWildcardUrl(e2) {
        return "*" === e2.trim();
      }
      isPathPatternUrl(e2) {
        return !(e2.includes("://") || e2.includes("github.com") || e2.includes("gitlab.com") || e2.includes("bitbucket.org") || e2.includes("@"));
      }
      getWorkspaceRelativePath(e2) {
        let t2;
        for (const r2 of this.rootDirectories) (0, M.ZU)({ basePath: r2, targetPath: e2 }) && (void 0 === t2 || r2.length > t2.length) && (t2 = r2);
        return void 0 !== t2 ? (0, M.oL)((0, s.relative)(t2, e2)) : (0, M.oL)(e2);
      }
      getCursorDataDir() {
        return this.cursorDataDirPromise ??= (async () => {
          const e2 = (0, s.join)(ge.homedir(), ".cursor");
          return await (0, M.DN)(e2) ?? e2;
        })(), this.cursorDataDirPromise;
      }
      doesRepoUrlMatch(e2, t2) {
        e2.trim().toLowerCase().replace(/\.git$/i, "");
        if (e2.includes("*")) {
          if ("*" === e2.trim()) return true;
          const r2 = $e(e2).toLowerCase(), n2 = $e(t2).toLowerCase();
          return this.matchRepoUrlGlob(r2, n2);
        }
        return $e(e2).toLowerCase() === $e(t2).toLowerCase();
      }
      matchGlob(e2, t2) {
        const r2 = e2.trim();
        if (!("." !== t2 && "" !== t2 || "**" !== r2 && "**/*" !== r2)) return true;
        try {
          return Ce(r2, { dot: true })(t2);
        } catch {
          return r2 === t2;
        }
      }
      matchRepoUrlGlob(e2, t2) {
        const r2 = e2.trim();
        return !!this.matchGlob(r2, t2) || !!r2.startsWith("*/") && this.matchGlob(`**/${r2.slice(2)}`, t2);
      }
      async getRepoBlockExcludeGlobs(e2) {
        const t2 = await this.teamSettingsService?.getTeamRepos();
        if (!t2?.repos?.length) return [];
        const r2 = await this.resolveLookupRoot(e2), n2 = await this.getGitRepoMapping();
        if (0 === n2.size) return [];
        const o2 = [];
        for (const [e3, i2] of n2) {
          if (void 0 === i2) continue;
          const n3 = this.normalizePathForComparison(e3), a2 = this.normalizePathForComparison(r2);
          let c2 = false, l2 = "";
          if (a2.startsWith(n3) ? (c2 = true, l2 = "") : n3.startsWith(a2) && (c2 = true, l2 = (0, s.relative)(r2, e3)), !c2) continue;
          const u2 = t2.repos.filter((e4) => this.doesRepoUrlMatch(e4.url, i2));
          if (0 !== u2.length) for (const e4 of u2) for (const t3 of e4.patterns || []) {
            const e5 = t3.pattern.trim();
            if (!e5) continue;
            let r3;
            r3 = l2 ? (0, s.join)(l2, e5).replace(/\\/g, "/") : e5, o2.push(r3), r3.endsWith("/**") || o2.push(`${r3}/**`);
          }
        }
        return o2;
      }
      normalizePathForComparison(e2) {
        let t2 = e2.replace(/\\/g, "/");
        return t2.startsWith("/") && t2.length > 2 && ":" === t2[2] && (t2 = t2.substring(1)), "win32" === process.platform && (t2 = t2.toLowerCase()), t2;
      }
      getGitRepoMapping() {
        return this.gitRepoMappingPromise || (this.gitRepoMappingPromise = this.initializeGitRepoMapping()), this.gitRepoMappingPromise;
      }
      async initializeGitRepoMapping() {
        const e2 = /* @__PURE__ */ new Map(), t2 = [], r2 = ["**/node_modules/**", "**/.turbo/**", "**/.next/**", "**/.cache/**", "**/.pnpm/**", "**/.yarn/**", "**/dist/**", "**/build/**", "**/out/**", "**/target/**", "**/.vscode/**", "**/.idea/**", "**/venv/**", "**/__pycache__/**", "**/logs/**", "**/tmp/**", "**/temp/**"], o2 = (0, ye.q6)();
        for (const e3 of this.rootDirectories) {
          const i2 = (0, M.o1)(e3);
          try {
            await (0, n.access)((0, s.join)(i2, ".git"), n.constants.F_OK), t2.includes(i2) || t2.push(i2);
          } catch {
          }
          let a2 = (0, s.dirname)(i2);
          const c2 = (0, s.parse)(a2).root;
          for (; a2 !== c2 && "" !== a2; ) {
            try {
              await (0, n.access)((0, s.join)(a2, ".git"), n.constants.F_OK), t2.includes(a2) || t2.push(a2);
            } catch {
            }
            const e4 = (0, s.dirname)(a2);
            if (e4 === a2) break;
            a2 = e4;
          }
          try {
            const e4 = { root: i2, includeGlobs: ["**/.git/config"], excludeGlobs: [...r2, ...je(i2, this.scanEnvironment)], noIgnoreVcs: true, source: "ignore_scan" }, n2 = Ye.getRipwalkCache().walk(o2, e4);
            for await (const e5 of n2.lines) {
              const r3 = (0, s.join)(i2, e5), n3 = (0, s.dirname)(r3), o3 = (0, s.dirname)(n3);
              t2.includes(o3) || t2.push(o3);
            }
          } catch {
          }
        }
        return await Promise.all(t2.map(async (t3) => {
          try {
            const r3 = await Ue(o2, this.gitExecutor, t3);
            e2.set(t3, r3);
          } catch {
            e2.set(t3, void 0);
          }
        })), e2;
      }
    }
    async function Ze(e2, t2) {
      switch (e2.type) {
        case "needsApproval":
          return t2.onNeedsApproval(e2.approvalReason, e2.approvalDetails);
        case "userRejected":
          return t2.onUserRejected(e2.reason);
        case "cursorIgnore":
          return t2.onPermissionDenied("Blocked by cursor ignore");
        case "permissionsConfig":
          return t2.onPermissionDenied("Blocked by permissions configuration", { isReadonly: e2.isReadonly });
        case "cursorFiles":
          return t2.onPermissionDenied("Blocked by cursor files protection");
        case "adminBlock":
          return t2.onPermissionDenied("Blocked by admin repository block");
        case "adminCommandDenylist":
          return t2.onPermissionDenied(he(e2.pattern));
        case "unsafeResolution":
          return t2.onPermissionDenied(e2.message);
        default: {
          const t3 = e2;
          throw new Error(`Unhandled block reason type: ${JSON.stringify(t3)}`);
        }
      }
    }
    function Xe(e2) {
      switch (e2.type) {
        case "userRejected":
          return e2.reason;
        case "unsafeResolution":
          return e2.message;
        case "adminCommandDenylist":
          return he(e2.pattern);
        case "needsApproval":
        case "cursorIgnore":
        case "adminBlock":
        case "permissionsConfig":
        case "cursorFiles":
          return "Command is not allowed";
        default: {
          const t2 = e2;
          return `Command is not allowed (${JSON.stringify(t2)})`;
        }
      }
    }
    function et(e2, t2, r2) {
      return "permissionsConfig" === r2.type ? { case: "permissionDenied", value: new R.jn({ command: e2, workingDirectory: t2, error: "Command blocked by permissions configuration", isReadonly: r2.isReadonly ?? false }) } : { case: "rejected", value: new R.pZ({ command: e2, workingDirectory: t2, reason: Xe(r2) }) };
    }
    Ye.promiseQueue = new be.TJ({ max: Ke });
    var tt = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, rt = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const nt = (0, k.h)("local-exec:background-shell");
    function st(e2, t2, r2) {
      return new T.Lt({ result: et(e2, t2, r2) });
    }
    class ot {
      constructor(e2, t2) {
        this.id = e2, this.abortController = t2, this.disposed = false, this.completed = false, this.completionListeners = [];
      }
      abort() {
        this.abortController.abort();
      }
      dispose() {
        this.disposed || (this.disposed = true, this.abortController.signal.aborted || this.abortController.abort());
      }
      get signal() {
        return this.abortController.signal;
      }
      isDisposed() {
        return this.disposed;
      }
      onComplete(e2) {
        this.completed && this.completion ? e2(this.completion) : this.completionListeners.push(e2);
      }
      markCompleted(e2) {
        if (this.completed) return;
        this.completed = true, this.completion = e2;
        const t2 = [...this.completionListeners];
        this.completionListeners = [];
        for (const r2 of t2) r2(e2);
      }
    }
    async function it(e2, t2) {
      let r2;
      try {
        for (let n2 = await t2.next(); !n2.done; n2 = await t2.next()) "stdin_ready" === n2.value.type ? (e2.stdin = n2.value.stdin, e2.pid = n2.value.pid) : "exit" === n2.value.type && (r2 = { code: n2.value.code, aborted: n2.value.aborted, outputPath: n2.value.outputLocation?.filePath });
      } catch (e3) {
      } finally {
        e2.markCompleted(r2 ?? { code: null, aborted: e2.signal.aborted });
      }
    }
    function at(e2) {
      e2().catch(() => {
      });
    }
    const ct = 1e3, lt = 999999;
    const ut = 65536;
    class dt {
      constructor(e2) {
        if (this.args = e2, this.carryover = "", this.matchedOccurrences = 0, this.emittedNotifications = 0, this.finished = false, this.startedAtMs = Date.now(), this.limit = e2.config.notificationLimit ?? 100, e2.config.pattern.length > 500) throw new Error("Output notification pattern exceeds 500 characters");
        this.regex = J.L3.compile(e2.config.pattern, J.L3.MULTILINE);
      }
      observe(e2) {
        if (this.finished || this.matchedOccurrences >= this.limit || 0 === e2.length) return;
        if (e2.length > ut) {
          for (let t3 = 0; t3 < e2.length && this.matchedOccurrences < this.limit; t3 += ut) this.observe(e2.slice(t3, t3 + ut));
          return;
        }
        const t2 = this.carryover.length, r2 = `${this.carryover}${e2}`, n2 = this.regex.matcher(r2);
        for (; this.matchedOccurrences < this.limit && n2.find(); ) {
          const e3 = n2.group() ?? "";
          n2.end() > t2 && this.queueMatch(e3);
        }
        this.carryover = r2.slice(-1024);
      }
      finish() {
        this.finished || (this.finished = true, this.flushPendingBatch("finish"), this.clearFlushTimer(), 0 === this.matchedOccurrences && this.recordWatchOutcome("silent", { silent_ms: Date.now() - this.startedAtMs }));
      }
      queueMatch(e2) {
        if (this.matchedOccurrences >= this.limit) return;
        this.matchedOccurrences += 1;
        const t2 = this.matchedOccurrences, r2 = (function(e3, t3) {
          return e3.length <= 5e3 ? `${t3}: ${e3}` : `${t3} is ${e3.length} characters; omitted from notification detail.`;
        })(e2, 1 === t2 ? "Matched text" : "Latest match");
        return 1 === t2 ? (this.emitNotification({ startOccurrence: t2, endOccurrence: t2, count: 1, matchedTextDetail: r2 }), this.recordWatchOutcome("matched", { first_match_ms: Date.now() - this.startedAtMs }), void (t2 === this.limit && this.emitLimitReachedNotification())) : (this.pendingBatch ? (this.pendingBatch.endOccurrence = t2, this.pendingBatch.count += 1, this.pendingBatch.matchedTextDetail = r2) : this.pendingBatch = { startOccurrence: t2, endOccurrence: t2, count: 1, matchedTextDetail: r2 }, t2 === this.limit ? (this.flushPendingBatch("limit"), void this.emitLimitReachedNotification()) : void this.scheduleFlush());
      }
      scheduleFlush() {
        if (void 0 !== this.flushTimer) return;
        const e2 = this.getDebounceMs();
        this.flushTimer = setTimeout(() => {
          this.flushPendingBatch("debounce");
        }, e2);
      }
      getDebounceMs() {
        const e2 = this.args.debounceMs ?? (function(e3) {
          const t2 = e3.debounce;
          if (void 0 !== t2 && Number.isFinite(t2)) return Math.ceil(1e3 * t2);
        })(this.args.config) ?? 5e3;
        return Math.max(e2, 5e3);
      }
      clearFlushTimer() {
        void 0 !== this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = void 0);
      }
      flushPendingBatch(e2) {
        const t2 = this.pendingBatch;
        t2 && (this.pendingBatch = void 0, this.clearFlushTimer(), this.emitNotification(t2));
      }
      emitNotification(e2) {
        this.emittedNotifications += 1;
        const t2 = this.args.config.reason.trim() || `Shell output contains /${this.args.config.pattern}/`, r2 = this.args.config.pattern, n2 = void 0 !== e2.matchedTextDetail ? ` ${e2.matchedTextDetail}.` : "", s2 = 1 === e2.count ? `Shell output has pattern /${r2}/. This is occurrence number ${e2.startOccurrence}.${n2} The title message is being displayed to the user.` : `Shell output matched /${r2}/ ${e2.count} more times since the previous notification. The title message is being displayed to the user.${n2}`, o2 = `${this.args.shellId}:task_progress:${this.emittedNotifications}`;
        var i2;
        this.args.registry.enqueue({ conversationId: this.args.conversationId, id: o2, source: "shell", payload: { taskId: o2, ...void 0 !== this.args.toolCallId ? { toolCallId: this.args.toolCallId } : {}, kind: "shell", status: "success", title: (i2 = t2, i2.length <= 500 ? i2 : `${i2.slice(0, 500)}...`), detail: s2, outputPath: this.args.outputPath, reason: "task_progress" } });
      }
      emitLimitReachedNotification() {
        this.emittedNotifications += 1;
        const e2 = this.args.config.pattern, t2 = `${this.args.shellId}:task_progress:${this.emittedNotifications}`;
        this.args.registry.enqueue({ conversationId: this.args.conversationId, id: t2, source: "shell", payload: { taskId: t2, ...void 0 !== this.args.toolCallId ? { toolCallId: this.args.toolCallId } : {}, kind: "shell", status: "success", title: `Notification limit reached (${this.limit})`, detail: `Shell output matched /${e2}/ ${this.limit} times and has reached the notification limit. No further notifications will be sent for this pattern. To continue monitoring, read the output file directly at the output path.`, outputPath: this.args.outputPath, reason: "task_progress" } }), this.recordWatchOutcome("limit_reached");
      }
      recordWatchOutcome(e2, t2) {
        void 0 !== this.args.ctx && nt.info(this.args.ctx, "agent.shell_output_notification_match", { event: "agent.shell_output_notification_match", outcome: e2, shell_id: this.args.shellId, conversation_id: this.args.conversationId, tool_call_id: this.args.toolCallId, limit: this.limit, ...t2 });
      }
    }
    class pt {
      constructor(e2, t2, r2) {
        this.innerFactory = e2, this.projectDir = t2, this.backgroundWorkRegistry = r2;
      }
      async spawn(e2, t2) {
        const r2 = this.createObserver(e2.ctx, e2.shellId, e2.conversationId, e2.toolCallId, e2.outputNotification);
        if (!r2) return this.innerFactory.spawn(e2, t2);
        try {
          return await this.innerFactory.spawn(e2, this.createObservingExecutor(t2, r2));
        } catch (e3) {
          throw r2.finish(), e3;
        }
      }
      async adopt(e2) {
        const t2 = this.createObserver(e2.ctx, e2.shellId, void 0, e2.toolCallId, e2.outputNotification);
        if (!t2) return this.innerFactory.adopt(e2);
        e2.initialOutput.length > 0 && t2.observe(e2.initialOutput);
        try {
          return await this.innerFactory.adopt({ ...e2, eventIterator: this.createObservingIterator(e2.eventIterator, t2) });
        } catch (e3) {
          throw t2.finish(), e3;
        }
      }
      createObserver(e2, t2, r2, n2, o2) {
        if (!this.backgroundWorkRegistry || !o2) return;
        if (0 === o2.pattern.trim().length) return;
        const i2 = s.join(this.projectDir, "terminals", `${t2}.txt`);
        try {
          return new dt({ shellId: t2, outputPath: i2, config: o2, conversationId: r2 ?? m.sn5, toolCallId: n2, registry: this.backgroundWorkRegistry, ctx: e2 });
        } catch (r3) {
          return void (void 0 !== e2 && nt.warn(e2, "Invalid shell output notification pattern", { shellId: t2, error: r3 instanceof Error ? r3.message : String(r3) }));
        }
      }
      createObservingExecutor(e2, t2) {
        const r2 = e2.execute.bind(e2);
        return { ...e2, execute: async function* (e3, n2) {
          try {
            for await (const s2 of r2(e3, n2)) "stdout" === s2.type || "stderr" === s2.type ? t2.observe(s2.data) : "exit" === s2.type && t2.finish(), yield s2;
          } finally {
            t2.finish();
          }
        } };
      }
      createObservingIterator(e2, t2) {
        const r2 = e2.return?.bind(e2);
        return { next: async () => {
          try {
            const r3 = await e2.next();
            if (r3.done) t2.finish();
            else {
              const e3 = r3.value;
              "stdout" === e3.type || "stderr" === e3.type ? t2.observe(e3.data) : "exit" === e3.type && t2.finish();
            }
            return r3;
          } catch (e3) {
            throw t2.finish(), e3;
          }
        }, return: async (e3) => (t2.finish(), r2 ? r2(e3) : { done: true, value: void 0 }) };
      }
    }
    class mt {
      async spawn(e2, t2) {
        const r2 = new AbortController(), n2 = new ot(e2.shellId, r2), s2 = t2.execute(e2.ctx, { command: e2.command, workingDirectory: e2.workingDirectory, signal: r2.signal, toolCallId: e2.toolCallId, conversationId: e2.conversationId, requestId: e2.requestId, secretScopeId: e2.secretScopeId, sandboxPolicy: e2.sandboxPolicy, pipeStdin: e2.enableWriteShellStdinTool, showElapsedTime: true })[Symbol.asyncIterator]();
        try {
          for (let e3 = await s2.next(); !e3.done; e3 = await s2.next()) if ("stdin_ready" === e3.value.type) {
            n2.stdin = e3.value.stdin, n2.pid = e3.value.pid;
            break;
          }
        } catch (e3) {
          if (e3 instanceof B.SandboxUnsupportedError) throw e3;
        }
        return at(() => it(n2, s2)), n2;
      }
      async adopt(e2) {
        const t2 = new ot(e2.shellId, e2.abortController);
        return t2.stdin = e2.stdin, t2.pid = e2.pid, at(() => it(t2, e2.eventIterator)), t2;
      }
    }
    function ht(e2) {
      return `"${e2.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t")}"`;
    }
    function ft(e2) {
      const t2 = String(e2.runningForMs).padEnd(9, " "), r2 = e2.status.padEnd(9, " ");
      let n2 = "---\n";
      return void 0 !== e2.pid && 0 !== e2.pid && (n2 += `pid: ${e2.pid}
`), n2 += `cwd: ${ht(e2.cwd)}
`, n2 += `command: ${ht(e2.command)}
`, void 0 !== e2.title && e2.title.trim().length > 0 && (n2 += `title: ${ht(e2.title)}
`), n2 += `status: ${r2}
`, n2 += `started_at: ${e2.startedAt}
`, n2 += `running_for_ms: ${t2}
`, n2 += "---\n", n2;
    }
    class gt {
      constructor(e2, t2) {
        this.innerFactory = e2, this.projectDir = t2;
      }
      async spawn(e2, t2) {
        const r2 = s.join(this.projectDir, "terminals");
        await (0, n.mkdir)(r2, { recursive: true });
        const o2 = this.createLoggingExecutor(t2, e2, r2);
        return this.innerFactory.spawn(e2, o2);
      }
      createLoggingExecutor(e2, t2, r2) {
        const o2 = e2.execute.bind(e2);
        return { ...e2, execute: async function* (e3, i2) {
          let a2, c2, l2, u2 = false, d2 = false;
          const p2 = Date.now(), m2 = new Date(p2).toISOString();
          let h2, f2 = "running", g2 = false, y2 = Promise.resolve();
          const w2 = async (e4) => {
            if (c2) try {
              await c2.write(e4);
            } catch (e5) {
            }
          }, v2 = t2.shellId, _2 = s.join(r2, `${v2}.txt`), A2 = async () => {
            if (!a2) return;
            const e4 = Date.now() - p2, r3 = ft({ pid: h2, cwd: t2.workingDirectory, command: t2.command, title: t2.description, status: f2, startedAt: m2, runningForMs: e4 });
            try {
              await a2.write(r3, 0, "utf8");
            } catch (e5) {
            }
          }, S2 = () => (y2 = y2.then(A2).catch(() => {
          }), y2), b2 = () => {
            void 0 !== l2 && (clearInterval(l2), l2 = void 0);
          }, E2 = async (e4) => {
            if (d2) return;
            d2 = true, h2 = e4;
            const r3 = Date.now() - p2, s2 = ft({ pid: e4, cwd: t2.workingDirectory, command: t2.command, title: t2.description, status: f2, startedAt: m2, runningForMs: r3 });
            await (0, n.writeFile)(_2, s2, "utf8"), l2 = setInterval(() => {
              S2();
            }, 5e3);
          }, k2 = async () => {
            a2 || (a2 = await C.promises.open(_2, "r+")), c2 || (c2 = await C.promises.open(_2, "a"));
          }, x2 = async (e4, t3) => {
            if (!g2) {
              if (g2 = true, b2(), d2 || await E2(), await k2(), void 0 !== t3) {
                const e5 = Date.now() - p2, r3 = `
---
${t3}
` + (i2.showElapsedTime ? `elapsed_ms: ${e5}
` : "") + `ended_at: ${(/* @__PURE__ */ new Date()).toISOString()}
---
`;
                await w2(r3);
              }
              f2 = e4, await S2();
            }
          };
          try {
            for await (const r3 of o2(e3, i2)) {
              if ("stdout" === r3.type) d2 || (await E2(), await k2()), await w2(r3.data);
              else if ("stderr" === r3.type) d2 || (await E2(), await k2()), await w2(r3.data);
              else if ("stdin_ready" !== r3.type || u2) "exit" === r3.type && await x2(r3.aborted ? "aborted" : 0 === r3.code ? "succeeded" : "failed", `exit_code: ${r3.code ?? "unknown"}`);
              else {
                u2 = true, d2 || (await E2(r3.pid), await k2());
                const e4 = r3.stdin;
                if (e4 && true !== t2.suppressStdinLogging) {
                  const t3 = (e5) => {
                    if (null == e5) return;
                    const t4 = "string" == typeof e5 ? e5 : I.Buffer.isBuffer(e5) ? e5.toString() : String(e5);
                    if (!t4) return;
                    const r5 = t4.endsWith("\n") ? t4 : `${t4}
`;
                    w2(`[stdin] ${r5}`);
                  }, r4 = e4.write.bind(e4);
                  if (e4.write = (e5, n2, s2) => (t3(e5), r4(e5, n2, s2)), "function" == typeof e4.end) {
                    const r5 = e4.end.bind(e4);
                    e4.end = (e5, n2, s2) => (void 0 !== e5 && t3(e5), r5(e5, n2, s2));
                  }
                }
              }
              yield r3;
            }
            if (!g2) {
              const e4 = i2.signal?.aborted ?? false;
              await x2(e4 ? "aborted" : "failed");
            }
          } catch (e4) {
            const t3 = i2.signal?.aborted ?? false, r3 = ht(e4 instanceof Error ? e4.message : "Unknown error");
            if (await x2(t3 ? "aborted" : "failed", t3 ? void 0 : `error: ${r3}`), !t3) throw e4;
          } finally {
            if (b2(), await y2, a2) try {
              await a2.close();
            } catch {
            }
            if (c2) try {
              await c2.close();
            } catch {
            }
          }
        } };
      }
      async adopt(e2) {
        const t2 = s.join(this.projectDir, "terminals");
        await (0, n.mkdir)(t2, { recursive: true });
        const r2 = s.join(t2, `${e2.shellId}.txt`), o2 = e2.startTime, i2 = new Date(o2).toISOString();
        let a2 = "running";
        const c2 = Date.now() - o2, l2 = ft({ pid: e2.pid, cwd: e2.workingDirectory, command: e2.command, title: e2.description, status: a2, startedAt: i2, runningForMs: c2 }) + (e2.initialOutput ?? "");
        await (0, n.writeFile)(r2, l2, "utf8");
        const u2 = await C.promises.open(r2, "r+");
        let d2;
        try {
          d2 = await C.promises.open(r2, "a");
        } catch (e3) {
          throw await u2.close(), e3;
        }
        let p2 = false, m2 = false, h2 = Promise.resolve();
        const f2 = async () => {
          const t3 = Date.now() - o2, r3 = ft({ pid: e2.pid, cwd: e2.workingDirectory, command: e2.command, title: e2.description, status: a2, startedAt: i2, runningForMs: t3 });
          try {
            await u2.write(r3, 0, "utf8");
          } catch {
          }
        }, g2 = () => (h2 = h2.then(f2).catch(() => {
        }), h2);
        let y2 = setInterval(() => {
          g2();
        }, 5e3);
        const w2 = () => {
          void 0 !== y2 && (clearInterval(y2), y2 = void 0);
        }, v2 = async () => {
          if (!p2) {
            p2 = true, w2(), await h2;
            try {
              await u2.close();
            } catch {
            }
            try {
              await d2.close();
            } catch {
            }
          }
        }, _2 = async (e3) => {
          try {
            await d2.write(e3);
          } catch (e4) {
          }
        }, A2 = async (t3, r3) => {
          if (!m2) {
            if (m2 = true, w2(), void 0 !== r3) {
              const t4 = Date.now() - o2, n2 = `
---
${r3}
` + (e2.showElapsedTime ? `elapsed_ms: ${t4}
` : "") + `ended_at: ${(/* @__PURE__ */ new Date()).toISOString()}
---
`;
              await _2(n2);
            }
            a2 = t3, await g2();
          }
        }, S2 = { next: async () => {
          try {
            const t3 = await e2.eventIterator.next();
            if (t3.done) {
              if (!m2) {
                const t4 = e2.abortController.signal.aborted;
                await A2(t4 ? "aborted" : "failed");
              }
            } else {
              const e3 = t3.value;
              "stdout" === e3.type || "stderr" === e3.type ? await _2(e3.data) : "exit" === e3.type && (await A2(e3.aborted ? "aborted" : 0 === e3.code ? "succeeded" : "failed", `exit_code: ${e3.code ?? "unknown"}`), await v2());
            }
            return t3.done && await v2(), t3;
          } catch (t3) {
            const r3 = e2.abortController.signal.aborted;
            throw await A2(r3 ? "aborted" : "failed"), await v2(), t3;
          }
        }, return: async () => {
          if (!m2) {
            const t3 = e2.abortController.signal.aborted;
            await A2(t3 ? "aborted" : "failed");
          }
          return await v2(), e2.eventIterator.return ? e2.eventIterator.return() : { done: true, value: void 0 };
        } };
        return this.innerFactory.adopt({ ...e2, eventIterator: S2 });
      }
    }
    class yt {
      constructor(e2, t2) {
        this.factory = e2, this.backgroundWorkRegistry = t2, this.runningShells = /* @__PURE__ */ new Map(), this.nextShellId = ct + Math.floor(999e3 * Math.random());
      }
      registerShellWork(e2, t2) {
        const r2 = String(e2.id);
        this.backgroundWorkRegistry?.upsertWork({ id: r2, kind: "shell", state: "running", metadata: (0, m.zyy)(t2), abort: () => {
          this.abort(e2.id);
        } });
      }
      clearShellWork(e2) {
        this.backgroundWorkRegistry?.clearWork(String(e2));
      }
      cleanupShell(e2) {
        this.runningShells.has(e2) && (this.runningShells.delete(e2), this.clearShellWork(e2));
      }
      enqueueShellCompletion(e2, t2, r2, n2, s2) {
        if (!this.backgroundWorkRegistry) return;
        const o2 = s2.aborted ? "aborted" : 0 === s2.code ? "success" : "error", i2 = s2.aborted || null === s2.code || 0 === s2.code ? void 0 : `exit_code=${s2.code}`, a2 = String(e2);
        this.backgroundWorkRegistry.enqueue({ conversationId: r2 ?? m.sn5, id: a2, source: "shell", payload: { taskId: a2, ...void 0 !== t2 ? { toolCallId: t2 } : {}, kind: "shell", status: o2, title: n2, ...i2 ? { detail: i2 } : {}, ...s2.outputPath ? { outputPath: s2.outputPath } : {}, reason: "task_finished" } });
      }
      async spawn(e2, t2) {
        const r2 = await this.factory.spawn(e2, t2);
        return this.runningShells.set(r2.id, r2), this.registerShellWork(r2, { title: e2.description || e2.command, cwd: e2.workingDirectory, startTimeMs: Date.now() }), r2.signal.addEventListener("abort", () => {
          this.cleanupShell(r2.id);
        }), r2.onComplete?.((t3) => {
          this.enqueueShellCompletion(r2.id, e2.toolCallId, e2.conversationId, e2.description || e2.command, t3), this.cleanupShell(r2.id);
        }), { shellId: r2.id, pid: r2.pid };
      }
      async adopt(e2) {
        const t2 = await this.factory.adopt(e2);
        return this.runningShells.set(t2.id, t2), this.registerShellWork(t2, { title: e2.description || e2.command, cwd: e2.workingDirectory, startTimeMs: e2.startTime }), t2.signal.addEventListener("abort", () => {
          this.cleanupShell(t2.id);
        }), t2.onComplete?.((r2) => {
          this.enqueueShellCompletion(t2.id, e2.toolCallId, void 0, e2.description || e2.command, r2), this.cleanupShell(t2.id);
        }), { shellId: t2.id, pid: e2.pid };
      }
      generateShellId() {
        for (let e2 = 0; e2 <= 998999; e2++) {
          this.nextShellId > lt && (this.nextShellId = ct);
          const e3 = this.nextShellId;
          if (this.nextShellId += 1, !this.runningShells.has(e3)) return e3;
        }
        throw new Error("No available background shell id in range");
      }
      abort(e2) {
        const t2 = this.runningShells.get(e2);
        return !!t2 && (t2.abort(), this.runningShells.delete(e2), this.clearShellWork(e2), true);
      }
      isRunning(e2) {
        return this.runningShells.has(e2);
      }
      dispose() {
        for (const [e2, t2] of this.runningShells) t2.dispose(), this.clearShellWork(e2);
        this.runningShells.clear();
      }
      async writeStdin(e2, t2) {
        const r2 = this.runningShells.get(e2);
        if (!r2) throw new Error("Shell not found");
        if (!r2.stdin) throw new Error("Shell stdin not available");
        const n2 = t2.indexOf(""), s2 = -1 !== n2 ? n2 : t2.indexOf("\\u0004");
        if (-1 !== s2) {
          const e3 = t2.substring(0, s2);
          e3.length > 0 && await new Promise((t3, n3) => {
            r2.stdin.write(e3, (e4) => {
              e4 ? n3(e4) : t3(void 0);
            });
          }), r2.stdin.end();
        } else await new Promise((e3, n3) => {
          r2.stdin.write(t2, (t3) => {
            t3 ? n3(t3) : e3(void 0);
          });
        });
      }
    }
    async function wt(e2, t2) {
      if (void 0 === e2) throw new Error("Shell stdin not available");
      if (0 === t2.byteLength) return 0;
      const r2 = I.Buffer.from(t2.buffer, t2.byteOffset, t2.byteLength), n2 = r2.indexOf(4);
      if (-1 !== n2) {
        const t3 = r2.subarray(0, n2);
        return t3.byteLength > 0 && await vt(e2, t3), e2.end(), t3.byteLength;
      }
      return await vt(e2, r2), r2.byteLength;
    }
    function vt(e2, t2) {
      return new Promise((r2, n2) => {
        e2.write(t2, (e3) => {
          null == e3 ? r2() : n2(e3);
        });
      });
    }
    class _t {
      constructor() {
        this.handlers = [], this.buffer = [], this.open = false, this.chain = Promise.resolve();
      }
      register(e2) {
        this.handlers.push(e2);
      }
      emit(e2) {
        return this.enqueue(async () => {
          this.open ? await this.dispatch(e2) : this.buffer.push(e2);
        });
      }
      openAndFlush(e2) {
        return this.enqueue(async () => {
          this.open = true;
          const t2 = [...e2?.leading ?? [], ...this.buffer.splice(0)];
          for (const e3 of t2) await this.dispatch(e3);
        });
      }
      enqueue(e2) {
        return this.chain = this.chain.then(e2, e2), this.chain;
      }
      async dispatch(e2) {
        for (const t2 of this.handlers) switch (e2.type) {
          case "start":
            await t2.onStart?.();
            break;
          case "stdout":
            await t2.onStdout(e2.data);
            break;
          case "stderr":
            await t2.onStderr(e2.data);
            break;
          case "exit":
            await t2.onExit(e2.code);
            break;
          default:
        }
      }
    }
    class At {
      constructor(e2, t2, r2) {
        this.innerFactory = e2, this.creationCallback = t2, this.conversationIdExtractor = r2;
      }
      async spawn(e2, t2) {
        const r2 = new _t(), n2 = this.createStreamingExecutor(t2, r2), s2 = await this.innerFactory.spawn(e2, n2), o2 = this.conversationIdExtractor?.(e2.ctx);
        try {
          await this.creationCallback.onShellCreated({ shellId: e2.shellId, command: e2.command, cwd: e2.workingDirectory, registerEventHandler: (e3) => {
            r2.register(e3);
          }, conversationId: o2, abortShell: () => s2.abort(), description: e2.description, toolCallId: e2.toolCallId, writeStdin: (e3) => wt(s2.stdin, e3) }), await r2.openAndFlush();
        } catch (t3) {
          try {
            s2.dispose();
          } catch (t4) {
            nt.warn(e2.ctx, "Failed to dispose background shell after onShellCreated failed", { shellId: e2.shellId, disposeError: t4 });
          }
          throw t3;
        }
        return s2;
      }
      createStreamingExecutor(e2, t2) {
        const r2 = e2.execute.bind(e2);
        return { ...e2, execute: async function* (e3, n2) {
          await t2.emit({ type: "start" });
          try {
            for await (const s2 of r2(e3, n2)) yield s2, "stdout" === s2.type ? await t2.emit({ type: "stdout", data: s2.data }) : "stderr" === s2.type ? await t2.emit({ type: "stderr", data: s2.data }) : "exit" === s2.type && await t2.emit({ type: "exit", code: s2.code });
          } catch (e4) {
            if (!(n2.signal?.aborted ?? false)) throw await t2.emit({ type: "exit", code: -1 }), e4;
          }
        } };
      }
      async adopt(e2) {
        const t2 = new _t(), r2 = { next: async () => {
          const r3 = await e2.eventIterator.next();
          if (!r3.done) {
            const e3 = r3.value;
            "stdout" === e3.type ? await t2.emit({ type: "stdout", data: e3.data }) : "stderr" === e3.type ? await t2.emit({ type: "stderr", data: e3.data }) : "exit" === e3.type && await t2.emit({ type: "exit", code: e3.code });
          }
          return r3;
        } }, n2 = await this.innerFactory.adopt({ ...e2, eventIterator: r2 }), s2 = e2.ctx ? this.conversationIdExtractor?.(e2.ctx) : void 0;
        try {
          await this.creationCallback.onShellCreated({ shellId: e2.shellId, command: e2.command, cwd: e2.workingDirectory, registerEventHandler: (e3) => {
            t2.register(e3);
          }, conversationId: s2, abortShell: () => n2.abort(), description: e2.description, toolCallId: e2.toolCallId, writeStdin: (e3) => wt(n2.stdin, e3) }), await t2.openAndFlush({ leading: void 0 !== e2.initialOutput && e2.initialOutput.length > 0 ? [{ type: "stdout", data: e2.initialOutput }] : [] });
        } catch (t3) {
          try {
            n2.dispose();
          } catch (t4) {
            e2.ctx && nt.warn(e2.ctx, "Failed to dispose background shell after onShellCreated failed", { shellId: e2.shellId, disposeError: t4 });
          }
          throw t3;
        }
        return n2;
      }
    }
    function St(e2, t2, r2) {
      const n2 = new mt(), s2 = new gt(n2, e2);
      return new At(s2, t2, r2);
    }
    class bt {
      constructor(e2, t2) {
        this.inner = e2, this.ownerConversationId = t2;
      }
      enqueue(e2) {
        this.inner.enqueue({ ...e2, conversationId: this.ownerConversationId });
      }
      enqueueCompletion(e2) {
        this.enqueue({ conversationId: this.ownerConversationId, id: e2.taskId, source: e2.kind, payload: e2 });
      }
      pull(e2) {
        return this.inner.pull(e2);
      }
      ack(e2) {
        return this.inner.ack(e2);
      }
      nack(e2, t2) {
        this.inner.nack(e2, t2);
      }
      suppress(e2, t2) {
        this.inner.suppress(e2, t2);
      }
      upsertWork(e2) {
        this.inner.upsertWork(e2);
      }
      clearWork(e2) {
        return this.inner.clearWork(e2);
      }
      abortWork(e2) {
        return this.inner.abortWork(e2);
      }
      hasRunningWork(e2) {
        return this.inner.hasRunningWork(e2);
      }
      abortAllWork(e2) {
        return this.inner.abortAllWork(e2);
      }
      listWork(e2) {
        return this.inner.listWork(e2);
      }
      drainCompletions() {
        return this.inner.drainCompletions();
      }
      hasPendingCompletions(e2) {
        return this.inner.hasPendingCompletions(e2);
      }
      markAwaitedCompletion(e2) {
        this.inner.suppress(this.ownerConversationId, e2);
      }
    }
    class Et {
      constructor(e2, t2, r2, n2, s2, o2, i2) {
        this.permissionsService = e2, this.coreExecutor = t2, this.ignoreService = r2;
        const a2 = o2 && void 0 !== i2 ? new bt(o2, i2) : o2, c2 = s2 ?? (function(e3) {
          const t3 = new mt();
          return new gt(t3, e3);
        })(n2), l2 = new pt(c2, n2, a2);
        this.backgroundShellManager = new yt(l2, a2);
      }
      getManager() {
        return this.backgroundShellManager;
      }
      dispose() {
        this.backgroundShellManager.dispose();
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          tt(r2, (0, x.VI)(e2.withName("LocalBackgroundShellExecutor.execute")), false);
          const n2 = t2.command, s2 = t2.sandboxPolicy ? re(t2.sandboxPolicy) : void 0, o2 = t2.workingDirectory || await this.coreExecutor.getCwd(t2.conversationId), i2 = (0, M.o1)(o2), a2 = new R.HO((0, P.UD)(n2).structured), c2 = fe({ command: n2, parsingResult: a2, blockedCommands: t2.adminCommandDenylist });
          if (void 0 !== c2) return new T.Lt({ result: { case: "rejected", value: new R.pZ({ command: n2, workingDirectory: i2, reason: c2 }) } });
          let l2 = s2;
          if (nt.info(e2, "Background shell: approval gate reached", { toolCallId: t2.toolCallId, skipApproval: t2.skipApproval, hasSmartModeApproval: void 0 !== t2.smartModeApproval, hasSmartModeApprovalReason: void 0 !== t2.smartModeApproval?.reason, hasSmartModeApprovalRequestId: void 0 !== t2.smartModeApproval?.requestId, requestedPolicyType: s2?.type ?? "undefined", parserCommandCount: a2.executableCommands.length, classifierCommandCount: t2.classifierResult?.commands.length ?? 0, commandLength: n2.length }), t2.skipApproval) {
            const r3 = await this.permissionsService.shouldEnforceShellInvariantBlocks(e2, { workingDirectory: i2, skipUnsafeWorkingDirectoryBlock: true, command: n2, parsingResult: a2, toolCallId: t2.toolCallId }, s2);
            if ("block" === r3.kind) return nt.info(e2, "Background shell: invariant blocked command", { toolCallId: t2.toolCallId, blockReasonType: r3.reason.type, skipApproval: t2.skipApproval }), st(n2, i2, r3.reason);
            nt.info(e2, "Background shell: skipped local approval", { toolCallId: t2.toolCallId, requestedPolicyType: s2?.type ?? "undefined" });
          } else {
            const r3 = await this.permissionsService.shouldBlockShellCommand(e2, n2, { workingDirectory: i2, timeout: 0, parsingResult: a2, toolCallId: t2.toolCallId, classifierResult: t2.classifierResult, smartModeApprovalReason: t2.smartModeApproval?.reason, smartModeApprovalRequestId: t2.smartModeApproval?.requestId, hookApprovalRequirement: (0, m.oGr)(t2) }, s2);
            if ("block" === r3.kind) return nt.info(e2, "Background shell: approval gate blocked command", { toolCallId: t2.toolCallId, blockReasonType: r3.reason.type, hasSmartModeApproval: void 0 !== t2.smartModeApproval, skipApproval: t2.skipApproval }), st(n2, i2, r3.reason);
            l2 = r3.policy, nt.info(e2, "Background shell: approval gate allowed command", { toolCallId: t2.toolCallId, skipApproval: t2.skipApproval, effectivePolicyType: l2.type });
          }
          if (j() && (l2 = K(n2, a2), "insecure_none" !== l2.type)) {
            const e3 = await We(this.ignoreService);
            l2 = { ...l2, ignoreMapping: e3 };
          }
          try {
            const r3 = this.backgroundShellManager.generateShellId(), s3 = l2 ? { perRepo: l2 } : void 0, o3 = { ctx: e2, command: n2, workingDirectory: i2, toolCallId: t2.toolCallId, conversationId: t2.conversationId, requestId: t2.requestId, secretScopeId: t2.secretScopeId, sandboxPolicy: s3, shellId: r3, enableWriteShellStdinTool: t2.enableWriteShellStdinTool, suppressStdinLogging: t2.suppressStdinLogging, description: t2.description, outputNotification: t2.outputNotification }, a3 = await this.backgroundShellManager.spawn(o3, this.coreExecutor);
            return new T.Lt({ result: { case: "success", value: new T.Po({ shellId: r3, command: n2, workingDirectory: i2, pid: a3.pid }) } });
          } catch (r3) {
            if (r3 instanceof B.SandboxUnsupportedError) {
              const s3 = l2?.type ?? "unknown";
              return nt.debug(e2, "Background shell: sandbox policy unsupported on this host", { toolCallId: t2.toolCallId, policyType: s3, reason: r3.reason }), new T.Lt({ result: { case: "sandboxUnsupported", value: new R.rI({ command: n2, workingDirectory: i2, sandboxPolicyType: s3, reason: r3.reason ?? r3.message, isReadonly: "workspace_readonly" === s3 }) } });
            }
            return new T.Lt({ result: { case: "error", value: new T.Of({ command: n2, workingDirectory: i2, error: r3 instanceof Error ? r3.message : "Unknown error" }) } });
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          rt(r2);
        }
      }
      writeStdin(e2, t2) {
        return this.backgroundShellManager.writeStdin(e2, t2);
      }
    }
    const It = /\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)|\x1b\[[0-?]*[ -/]*[@-~]/g, Ct = /https?:\/\/[^\s"'<>]+/gi, kt = /[)\],.;'"]+$/, xt = 4096;
    function Tt(e2) {
      try {
        const t2 = new URL(e2);
        return "" === t2.username && "" === t2.password && "/" === t2.pathname && "" === t2.search && "" === t2.hash;
      } catch {
        return false;
      }
    }
    function Rt(e2, t2) {
      const r2 = /* @__PURE__ */ new Set(), n2 = (n3, { complete: s3 }) => {
        if (!n3.includes("://")) return;
        const o2 = n3.replace(It, "");
        for (const n4 of o2.matchAll(Ct)) {
          if (!s3 && n4.index + n4[0].length === o2.length) continue;
          const i2 = n4[0].replace(kt, "");
          !r2.has(i2) && Tt(i2) && (r2.add(i2), t2({ kind: "url", shellId: e2, url: i2 }));
        }
      }, s2 = () => {
        let e3 = "";
        return (t3) => {
          const r3 = (e3 + t3).split(/\r\n|\r|\n/);
          e3 = (r3.pop() ?? "").slice(-xt);
          for (const e4 of r3) n2(e4, { complete: true });
          n2(e3, { complete: false });
        };
      };
      return { onStdout: s2(), onStderr: s2(), onExit: () => {
      } };
    }
    r(16698);
    var Bt = r(46135), Pt = r(57975), Jt = r(63553), Mt = r(83133), qt = r(43955), Dt = r(60896), Ot = r(77598);
    const Nt = (0, Pt.debuglog)("agent-skills-catalog-cache"), Ft = 1;
    function Ut(e2) {
      return (0, Ot.createHash)("sha256").update(JSON.stringify({ v: Ft, ...e2 })).digest("hex");
    }
    async function Lt(e2) {
      try {
        return (await (0, n.stat)(e2)).mtimeMs;
      } catch {
        return;
      }
    }
    function $t(e2) {
      if ("object" != typeof e2 || null === e2) return false;
      const t2 = e2;
      return t2.version === Ft && Array.isArray(t2.rules) && Array.isArray(t2.agentSkills) && Array.isArray(t2.realSkillFilePathsByFullPath) && t2.realSkillFilePathsByFullPath.every((e3) => Array.isArray(e3) && 2 === e3.length && "string" == typeof e3[0] && "string" == typeof e3[1]) && "object" == typeof t2.fileMtimesMs && null !== t2.fileMtimesMs && Object.values(t2.fileMtimesMs).every((e3) => "number" == typeof e3 && Number.isFinite(e3));
    }
    const Qt = "skills-catalog", jt = 5242880;
    function Gt(e2) {
      const t2 = (0, s.join)(e2, Qt), r2 = (e3) => (0, s.join)(t2, `${e3.replace(/[^a-z0-9]/gi, "_")}.json`);
      return { async read(e3) {
        try {
          const t3 = r2(e3);
          if ((await (0, n.stat)(t3)).size > jt) return;
          const s2 = JSON.parse(await (0, n.readFile)(t3, "utf8"));
          return $t(s2) ? s2 : void 0;
        } catch {
          return;
        }
      }, async write(e3, s2) {
        const o2 = r2(e3), i2 = `${o2}.${process.pid}.${Date.now()}.tmp`;
        try {
          await (0, n.mkdir)(t2, { recursive: true }), await (0, n.writeFile)(i2, JSON.stringify(s2), "utf8"), await (0, n.rename)(i2, o2);
        } catch (e4) {
          Nt("write failed: %O", e4), await (0, n.rm)(i2, { force: true }).catch(() => {
          });
        }
      } };
    }
    const Ht = { configDir: ".cursor", subdir: "skills-cursor", thirdParty: false, builtin: true }, zt = [{ configDir: ".cursor", subdir: "skills", thirdParty: false, builtin: false }, { configDir: ".claude", subdir: "skills", thirdParty: true, builtin: false }, { configDir: ".codex", subdir: "skills", thirdParty: true, builtin: false }, { configDir: ".grok", subdir: "skills", thirdParty: true, builtin: false }, { configDir: ".agents", subdir: "skills", thirdParty: false, builtin: false }, Ht], Wt = (new Set(zt.map((e2) => e2.configDir)), /* @__PURE__ */ new Set(["imagegen", "openai-docs", "opneai-docs", "plugin-creator", "skill-creator", "skill-installer"]));
    function Vt(e2) {
      const t2 = e2.findIndex((t3, r2) => (function(e3, t4) {
        return zt.some((r3) => r3.configDir === e3 && r3.subdir === t4);
      })(t3, e2[r2 + 1]));
      return -1 !== t2 && e2.slice(t2 + 2).some((e3) => e3.startsWith("."));
    }
    function Kt(e2) {
      const t2 = (function(e3) {
        return e3.replace(/\\/g, "/").split("/").filter(Boolean);
      })(e2);
      if (Vt(t2)) return true;
      const r2 = t2.lastIndexOf(".codex");
      if (-1 === r2 || "skills" !== t2[r2 + 1]) return false;
      const n2 = t2.at(-1), s2 = "SKILL.md" === n2 ? t2.at(-2) : n2;
      return void 0 !== s2 && Wt.has(s2);
    }
    function Yt(e2) {
      return { dirPath: (0, s.join)(e2, Ht.configDir, Ht.subdir), scope: "builtin", source: "builtin" };
    }
    function Zt(e2) {
      return zt.filter((t2) => !t2.builtin && (e2 || !t2.thirdParty));
    }
    function Xt(e2, t2) {
      return Zt(t2).map((t3) => ({ dirPath: (0, s.join)(e2, t3.configDir, t3.subdir), scope: "project", source: "workspace" }));
    }
    function er(e2, t2) {
      return Zt(t2).map((t3) => ({ dirPath: (0, s.join)(e2, t3.configDir, t3.subdir), scope: "user", source: "user" }));
    }
    var tr = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, rr = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function nr(e2) {
      return e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    const sr = zt.map(({ configDir: e2, subdir: t2, thirdParty: r2 }) => ({ pattern: new RegExp(`[/\\\\]${nr(e2)}[/\\\\]${nr(t2)}[/\\\\]`, "i"), requiresThirdParty: r2 })), or = /[/\\]\.cursor[/\\]rules[/\\]/i, ir = [{ pattern: /[/\\]\.cursor[/\\]agents[/\\]/i, requiresThirdParty: false }, { pattern: /[/\\]\.claude[/\\]agents[/\\]/i, requiresThirdParty: true }], ar = /* @__PURE__ */ new Set(["AGENTS.md", "CLAUDE.md", "CLAUDE.local.md"]);
    function cr(e2, t2) {
      const r2 = e2.replace(/\\/g, "/");
      const n2 = (0, s.basename)(r2);
      if (ar.has(n2)) return "AGENTS.md" === n2 || t2 && ("CLAUDE.md" === n2 || "CLAUDE.local.md" === n2) ? "markdown" : void 0;
      if (or.test(r2) && n2.endsWith(".mdc")) return "rules";
      if ("SKILL.md" === n2) {
        for (const { pattern: e3, requiresThirdParty: n3 } of sr) if (e3.test(r2)) {
          if (n3 && !t2) continue;
          return "skills";
        }
      }
      if (n2.endsWith(".md")) {
        for (const { pattern: e3, requiresThirdParty: n3 } of ir) if (e3.test(r2)) {
          if (n3 && !t2) continue;
          return "agents";
        }
      }
    }
    class lr {
      constructor(e2, t2, r2, n2) {
        this.root = e2, this.gitExecutor = t2, this.userHomeDirectory = r2, this.getThirdPartyExtensibilityEnabled = n2;
      }
      static getRipwalkCache() {
        return lr.ripwalkCache ??= new Oe(), lr.ripwalkCache;
      }
      async discover(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          const r2 = tr(t2, (0, x.VI)(e2.withName("NestedExtensibilityService.discover")), false), n2 = { rules: [], skills: [], markdown: [], agents: [] }, o2 = (0, s.resolve)(this.root), i2 = (0, s.resolve)(this.userHomeDirectory);
          if (o2 === i2 || Se(o2, { platform: process.platform, homeDirectory: i2 }).length > 0) return r2.span.setAttribute("nested_extensibility.rules", 0), r2.span.setAttribute("nested_extensibility.skills", 0), r2.span.setAttribute("nested_extensibility.markdown", 0), r2.span.setAttribute("nested_extensibility.agents", 0), n2;
          if (!await Fe(e2, this.gitExecutor, (0, s.resolve)(this.root))) return r2.span.setAttribute("nested_extensibility.rules", 0), r2.span.setAttribute("nested_extensibility.skills", 0), r2.span.setAttribute("nested_extensibility.markdown", 0), r2.span.setAttribute("nested_extensibility.agents", 0), n2;
          const a2 = this.getThirdPartyExtensibilityEnabled(), c2 = this.buildIncludeGlobs(a2), l2 = { root: this.root, includeGlobs: c2, excludeGlobs: Qe, followSymlinks: true, source: "nested_extensibility" }, u2 = { rules: [], skills: [], markdown: [], agents: [] }, d2 = lr.getRipwalkCache();
          try {
            const e3 = d2.walk(r2.ctx, l2);
            try {
              for await (const t3 of e3.lines) {
                const e4 = cr(t3, a2);
                e4 && u2[e4].push((0, s.resolve)(this.root, t3));
              }
            } finally {
              d2.delete(l2);
            }
          } catch {
          }
          return r2.span.setAttribute("nested_extensibility.rules", u2.rules.length), r2.span.setAttribute("nested_extensibility.skills", u2.skills.length), r2.span.setAttribute("nested_extensibility.markdown", u2.markdown.length), r2.span.setAttribute("nested_extensibility.agents", u2.agents.length), u2;
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          rr(t2);
        }
      }
      buildIncludeGlobs(e2) {
        const t2 = ["*/**/.cursor/**", "*/**/.agents/**", "*/**/AGENTS.md"];
        return e2 && t2.push("*/**/.claude/**", "*/**/.codex/**", "*/**/.grok/**", "*/**/CLAUDE.md", "*/**/CLAUDE.local.md"), t2;
      }
    }
    const ur = /* @__PURE__ */ new Set(["node_modules", "__pycache__", "dist", "build"]);
    function dr(e2) {
      return e2.startsWith(".") || ur.has(e2);
    }
    async function pr({ rootDir: e2, includeFile: t2, maxDepth: r2 = 10, containmentRootDir: o2 }) {
      const i2 = [], a2 = [{ dir: e2, depth: 0 }], c2 = /* @__PURE__ */ new Set(), l2 = void 0 !== o2 ? await (0, n.realpath)(o2) : null, u2 = (e3) => {
        if (null === l2) return true;
        const t3 = (0, s.relative)(l2, e3);
        return "" === t3 || !t3.startsWith("..") && !(0, s.isAbsolute)(t3);
      };
      for (; a2.length > 0; ) {
        const e3 = a2.pop();
        if (void 0 === e3) continue;
        const { dir: o3, depth: l3 } = e3;
        if (l3 > r2) continue;
        try {
          const e4 = await (0, n.realpath)(o3);
          if (!u2(e4)) continue;
          if (c2.has(e4)) continue;
          c2.add(e4);
        } catch {
          continue;
        }
        const d2 = await (0, n.readdir)(o3, { withFileTypes: true, encoding: "utf8" }).catch(() => null);
        if (null !== d2) for (const e4 of d2) {
          const r3 = (0, s.join)(o3, e4.name);
          let c3 = e4.isDirectory(), u3 = e4.isFile();
          if (e4.isSymbolicLink()) try {
            const e5 = await (0, n.stat)(r3);
            c3 = e5.isDirectory(), u3 = e5.isFile();
          } catch {
            continue;
          }
          if (c3) {
            if (dr(e4.name)) continue;
            a2.push({ dir: r3, depth: l3 + 1 });
          } else u3 && t2(e4.name) && i2.push(r3);
        }
      }
      return i2.sort((e3, t3) => e3.localeCompare(t3)), i2;
    }
    const mr = { agentStoreSkillsDirs: [], userHomeDirectory: "" };
    function hr(e2) {
      const t2 = e2.replace(/\\/g, "/");
      return t2.endsWith("/") ? t2.slice(0, -1) : t2;
    }
    function fr(e2, t2) {
      const r2 = hr(t2.userHomeDirectory), n2 = e2.replace(/\\/g, "/");
      if (r2.length > 0) for (const e3 of t2.agentStoreSkillsDirs) {
        const t3 = hr(e3);
        if (t3.length > 0 && n2.startsWith(`${t3}/`)) return { key: `${r2}::skills/${n2.slice(t3.length + 1)}`, inAgentStore: true };
      }
      return { key: gr(e2), inAgentStore: false };
    }
    function gr(e2) {
      const t2 = e2.replace(/\\/g, "/"), r2 = t2.toLowerCase(), n2 = r2.indexOf("/.cursor/"), s2 = r2.indexOf("/.claude/"), o2 = r2.indexOf("/.codex/"), i2 = r2.indexOf("/.grok/"), a2 = r2.indexOf("/.agents/");
      if (-1 !== n2) {
        return `${t2.slice(0, n2)}::${t2.slice(n2 + 9)}`;
      }
      if (-1 !== s2) {
        return `${t2.slice(0, s2)}::${t2.slice(s2 + 9)}`;
      }
      if (-1 !== o2) {
        return `${t2.slice(0, o2)}::${t2.slice(o2 + 8)}`;
      }
      if (-1 !== i2) {
        return `${t2.slice(0, i2)}::${t2.slice(i2 + 7)}`;
      }
      if (-1 !== a2) {
        return `${t2.slice(0, a2)}::${t2.slice(a2 + 9)}`;
      }
      return e2;
    }
    function yr(e2, t2) {
      const r2 = /* @__PURE__ */ new Map(), n2 = [];
      for (const s2 of e2) {
        const { key: e3, inAgentStore: o2 } = fr(s2.fullPath, t2), i2 = r2.get(e3);
        void 0 !== i2 ? o2 && !n2[i2].inAgentStore && (n2[i2] = { item: s2, inAgentStore: o2 }) : (r2.set(e3, n2.length), n2.push({ item: s2, inAgentStore: o2 }));
      }
      return n2.map((e3) => e3.item);
    }
    var wr = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, vr = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const _r = (0, k.h)("local-exec:cursor-rules");
    let Ar = false;
    function Sr(e2) {
      Ar = e2;
    }
    async function br(e2) {
      return await pr({ rootDir: e2, includeFile: (e3) => "SKILL.md" === e3 });
    }
    async function Er(e2) {
      let t2;
      try {
        t2 = await (0, Ee.yR)(e2);
      } catch (t3) {
        return { skillFilePath: e2, error: (0, m.OOW)(t3) };
      }
      try {
        return { skillFilePath: e2, content: t2, parsed: (0, Dt.be)(t2) };
      } catch (t3) {
        return { skillFilePath: e2, error: (0, m.kQm)(t3) };
      }
    }
    async function Ir(e2) {
      const t2 = await q(e2);
      return { ...await Er(e2), realSkillFilePath: t2 };
    }
    function Cr(e2) {
      return Tr(e2.data?.environments ?? e2.data?.metadata?.environments) ?? [];
    }
    function kr(e2) {
      return Tr(e2.data?.["disabled-environments"] ?? e2.data?.metadata?.disabledEnvironments) ?? [];
    }
    function xr(e2) {
      return Tr(e2.data?.metadata?.scopedTo ?? e2.data?.["metadata.scopedTo"]) ?? [];
    }
    function Tr(e2) {
      if (Array.isArray(e2)) {
        const t2 = e2.filter((e3) => "string" == typeof e3 && e3.length > 0);
        return 0 === t2.length ? void 0 : t2;
      }
      if ("string" == typeof e2) {
        const t2 = e2.split(",").map((e3) => e3.trim()).filter((e3) => e3.length > 0);
        return 0 === t2.length ? void 0 : t2;
      }
    }
    function Rr(e2, t2) {
      const r2 = (function(e3) {
        const t3 = e3.data?.metadata?.surfaces;
        return Array.isArray(t3) ? t3 : "string" == typeof t3 ? t3.split(",").map((e4) => e4.trim()).filter(Boolean) : [];
      })(e2);
      return r2.length > 0 && !r2.includes(t2);
    }
    function Br(e2) {
      return e2.slice(0, 1536);
    }
    function Pr(e2) {
      return true === e2.data?.alwaysApply;
    }
    function Jr(e2) {
      return true === e2.data?.["disable-model-invocation"];
    }
    function Mr({ skillFilePath: e2, content: t2, parsed: r2 }) {
      const n2 = (function(e3) {
        return (0, Dt.$Y)(e3);
      })(r2);
      if (Pr(r2)) return new qt.DX({ fullPath: e2, content: t2, frontmatter: n2, type: new qt.f5({ type: { case: "global", value: new qt.i9() } }), environments: Cr(r2), disabledEnvironments: kr(r2), scopedTo: xr(r2) });
      const s2 = "string" == typeof r2.data?.description ? Br(r2.data.description) : void 0, o2 = (0, m.ujx)(s2, Jr(r2));
      return o2 ? new qt.DX({ fullPath: e2, parseError: o2, frontmatter: n2, scopedTo: xr(r2), type: new qt.f5({ type: { case: "agentFetched", value: new qt.Xo() } }) }) : new qt.DX({ fullPath: e2, content: t2, frontmatter: n2, type: new qt.f5({ type: { case: "agentFetched", value: new qt.Xo({ description: s2 }) } }), environments: Cr(r2), disabledEnvironments: kr(r2), scopedTo: xr(r2) });
    }
    function qr({ skillFilePath: e2, content: t2, parsed: r2 }) {
      const n2 = "string" == typeof r2.data?.description ? Br(r2.data.description) : "", s2 = (0, Jt.nSO)(r2.data?.paths ?? r2.data?.globs), o2 = Jr(r2);
      return new Mt.N({ fullPath: e2, content: t2, description: n2, globs: s2 ?? [], parseError: (0, m.ujx)(n2, o2), environments: Cr(r2), disabledEnvironments: kr(r2), scopedTo: xr(r2), disableModelInvocation: o2 });
    }
    function Dr({ rules: e2, agentSkills: t2, skillFilePath: r2, errorMessage: n2 }) {
      e2.push((function({ skillFilePath: e3, errorMessage: t3 }) {
        return new qt.DX({ fullPath: e3, parseError: t3, type: new qt.f5({ type: { case: "agentFetched", value: new qt.Xo() } }) });
      })({ skillFilePath: r2, errorMessage: n2 })), t2.push((function({ skillFilePath: e3, errorMessage: t3 }) {
        return new Mt.N({ fullPath: e3, parseError: t3 });
      })({ skillFilePath: r2, errorMessage: n2 }));
    }
    function Or(e2, t2, r2) {
      if ("error" in t2) return e2.realSkillFilePathsByFullPath.set(t2.skillFilePath, t2.realSkillFilePath), void Dr({ rules: e2.rules, agentSkills: e2.agentSkills, skillFilePath: t2.skillFilePath, errorMessage: t2.error });
      Rr(t2.parsed, r2) || (e2.realSkillFilePathsByFullPath.set(t2.skillFilePath, t2.realSkillFilePath), e2.rules.push(Mr(t2)), Pr(t2.parsed) || e2.agentSkills.push(qr(t2)));
    }
    const Nr = (0, Pt.debuglog)("cursor-rules-service");
    function Fr() {
      return { rules: [], agentSkills: [], realSkillFilePathsByFullPath: /* @__PURE__ */ new Map() };
    }
    function Ur(e2) {
      return (t2) => (Nr("%s: %O", e2, t2), Fr());
    }
    function Lr(e2, t2) {
      return Ut({ kind: "agent-store", surface: e2, roots: [...t2].sort() });
    }
    function $r(e2, t2) {
      const r2 = t2.replace(/\\/g, "/").replace(/\/+$/, "");
      return "" !== r2 && e2.replace(/\\/g, "/").startsWith(`${r2}/`);
    }
    function Qr(e2) {
      const t2 = e2.trim();
      return "true" === t2 || "false" !== t2 && (t2.startsWith('"') && t2.endsWith('"') || t2.startsWith("'") && t2.endsWith("'") ? t2.slice(1, -1) : t2);
    }
    function jr(e2) {
      const t2 = e2.trimStart();
      if (!t2.startsWith("---")) return null;
      const r2 = t2.split("---").filter(Boolean);
      if (r2.length < 2) return null;
      const n2 = r2[0].trim(), s2 = r2.slice(1).join("---").trim(), o2 = {};
      let i2 = null, a2 = null;
      for (const e3 of n2.split("\n")) {
        const t3 = e3.replace(/\r$/, ""), r3 = t3.match(/^\s+-\s+(.*)$/);
        if (r3 && a2) {
          let e4 = r3[1].trim();
          (e4.startsWith('"') && e4.endsWith('"') || e4.startsWith("'") && e4.endsWith("'")) && (e4 = e4.slice(1, -1));
          const t4 = o2[a2];
          Array.isArray(t4) && t4.push(e4);
          continue;
        }
        const n3 = t3.startsWith("  ") || t3.startsWith("	");
        if (i2 && n3) {
          const e4 = t3.trim(), r4 = e4.indexOf(":");
          if (-1 === r4) continue;
          const n4 = e4.slice(0, r4).trim(), s4 = e4.slice(r4 + 1).trim(), c3 = Qr(s4), l3 = `${i2}.${n4}`;
          "" === s4 ? (o2[l3] = [], a2 = l3) : "metadata.environments" === l3 || "metadata.disabledEnvironments" === l3 || "metadata.scopedTo" === l3 ? (o2[l3] = String(c3).split(",").map((e5) => e5.trim()).filter(Boolean), a2 = null) : (o2[l3] = c3, a2 = null);
          continue;
        }
        i2 = null, a2 = null;
        const s3 = t3.indexOf(":");
        if (-1 === s3) continue;
        const c2 = t3.slice(0, s3).trim(), l2 = t3.slice(s3 + 1).trim();
        if ("" === l2 && "metadata" === c2) {
          i2 = c2;
          continue;
        }
        if ("globs" === c2 && "" === l2) {
          o2.globs = [], a2 = "globs";
          continue;
        }
        const u2 = Qr(l2);
        "metadata.environments" !== c2 && "metadata.disabledEnvironments" !== c2 && "metadata.scopedTo" !== c2 ? o2[c2] = u2 : o2[c2] = String(u2).split(",").map((e4) => e4.trim()).filter(Boolean);
      }
      return { frontmatter: o2, rawFrontmatter: `---
${n2}
---`, body: s2 };
    }
    class Gr {
      constructor(e2, t2) {
        this.cursorRulesServices = e2, this.getAgentStoreSkillsContext = t2, this.onChangeCallbacks = /* @__PURE__ */ new Set();
      }
      async getAllCursorRules(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          const r2 = wr(t2, (0, x.VI)(e2.withName("MergedCursorRulesService.getAllCursorRules")), false), n2 = this.cursorRulesServices.map((e3) => e3.getAllCursorRules(r2.ctx).catch((e4) => ((0, Pt.debuglog)("Failed to load cursor rules from service:", e4), []))), s2 = await Promise.all(n2);
          return yr(s2.flat(), this.getAgentStoreSkillsContext());
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          vr(t2);
        }
      }
      reload(e2) {
        for (const t2 of this.cursorRulesServices) t2.reload(e2);
      }
      scheduleDidChangeRules() {
        void 0 === this.changeTimer && (this.changeTimer = setTimeout(() => {
          this.changeTimer = void 0;
          for (const e2 of Array.from(this.onChangeCallbacks)) e2();
        }, Gr.CHANGE_COALESCE_MS));
      }
      ensureChangeListenersRegistered() {
        void 0 === this.disposeChangeListeners && (this.disposeChangeListeners = this.cursorRulesServices.map((e2) => e2.onDidChangeRules(() => this.scheduleDidChangeRules())));
      }
      disposeChangeListenersIfUnused() {
        if (!(this.onChangeCallbacks.size > 0 || void 0 === this.disposeChangeListeners)) {
          for (const e2 of this.disposeChangeListeners) e2();
          this.disposeChangeListeners = void 0, void 0 !== this.changeTimer && (clearTimeout(this.changeTimer), this.changeTimer = void 0);
        }
      }
      onDidChangeRules(e2) {
        return this.onChangeCallbacks.add(e2), this.ensureChangeListenersRegistered(), () => {
          this.onChangeCallbacks.delete(e2), this.disposeChangeListenersIfUnused();
        };
      }
      dispose() {
        if (void 0 !== this.changeTimer && (clearTimeout(this.changeTimer), this.changeTimer = void 0), this.onChangeCallbacks.clear(), void 0 !== this.disposeChangeListeners) {
          for (const e2 of this.disposeChangeListeners) e2();
          this.disposeChangeListeners = void 0;
        }
        for (const e2 of this.cursorRulesServices) e2.dispose && e2.dispose();
      }
    }
    Gr.CHANGE_COALESCE_MS = 1e3;
    class Hr {
      constructor(e2, t2, r2, n2, o2, i2, a2, c2) {
        this.gitExecutor = t2, this.rootDirectory = r2, this.loadNestedRules = n2, this.getThirdPartyExtensibilityEnabled = o2, this.loadTraceId = void 0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.nestedExtensibilityService = new lr(r2, t2, (0, ge.homedir)(), o2), this.ignoreService = a2 ?? new Ve(t2, void 0, [this.rootDirectory]);
        const l2 = performance.now();
        if (this._rules = this.load(e2, c2).then((t3) => {
          try {
            _r.info(e2, "LocalCursorRulesService load completed", { durationMs: Math.round(performance.now() - l2), ruleCount: t3.length });
          } catch {
          }
          return t3;
        }).catch((e3) => ((0, Pt.debuglog)("Failed to load cursor rules:", e3), [])), i2) {
          const e3 = [".cursor/rules/**/*.mdc", "AGENTS.md", "CLAUDE.md", "CLAUDE.local.md", ".cursorrules", ".cursorignore"];
          this.unsubscribeWatcher = i2.subscribe(this.rootDirectory, e3, (e4) => {
            const t3 = { stack: [], error: void 0, hasError: false };
            try {
              const r3 = (0, ye.q6)(), n3 = wr(t3, (0, x.VI)(r3.withName("LocalCursorRulesService.fileWatcher.subscribe")), false);
              if (".cursorignore" === (0, s.basename)(e4)) return Hr.getRipwalkCache().clear(), void this.reload(n3.ctx);
              this.reloadAtPath(n3.ctx, e4);
            } catch (e5) {
              t3.error = e5, t3.hasError = true;
            } finally {
              vr(t3);
            }
          });
        }
      }
      reload(e2) {
        this._rules = this.load(e2).catch((e3) => ((0, Pt.debuglog)("Failed to load cursor rules:", e3), []));
        for (const e3 of this.onChangeCallbacks) e3();
      }
      static getRipwalkCache() {
        return Hr.ripwalkCache ??= new Oe(), Hr.ripwalkCache;
      }
      reloadAtPath(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = wr(r2, (0, x.VI)(e2.withName("LocalCursorRulesService.reloadAtPath")), false), s2 = this._rules;
          this._rules = (async () => {
            const e3 = (await s2).filter((e4) => e4.fullPath !== t2);
            if (Ar && t2.endsWith(".mdc") && await this.isCursorIgnored(t2)) return e3;
            const r3 = (await this.readRulesAtPath(n2.ctx, t2)).map((e4) => this.toCursorRule(e4));
            return [...e3, ...r3];
          })().catch((e3) => ((0, Pt.debuglog)("Failed to load cursor rules at path:", e3), []));
          for (const e3 of this.onChangeCallbacks) e3();
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
      isRuleMarkdownFile(e2) {
        return "CLAUDE.md" === e2 || "CLAUDE.local.md" === e2 || "AGENTS.md" === e2;
      }
      async readRulesAtPath(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = wr(r2, (0, x.VI)(e2.withName("LocalCursorRulesService.readRulesAtPath")), false), o2 = (0, s.basename)(t2);
          if (".cursorrules" === o2) {
            const e3 = (0, s.resolve)(this.rootDirectory), t3 = await Fe(n2.ctx, this.gitExecutor, e3) || e3, r3 = await this.loadCursorRulesRule(n2.ctx, t3);
            return r3 ? [r3] : [];
          }
          if (o2.endsWith(".mdc")) try {
            const e3 = jr(await (0, Ee.yR)(t2));
            if (e3) return [{ filename: (0, s.basename)(t2, ".mdc"), path: t2, frontmatter: e3.frontmatter, rawFrontmatter: e3.rawFrontmatter, body: e3.body }];
          } catch {
          }
          else if (this.isRuleMarkdownFile(o2)) try {
            return await this.loadRulesFromMarkdownFile(n2.ctx, (0, s.dirname)(t2), o2);
          } catch {
          }
          return [];
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
      onDidChangeRules(e2) {
        return this.onChangeCallbacks.add(e2), () => {
          this.onChangeCallbacks.delete(e2);
        };
      }
      dispose() {
        this.unsubscribeWatcher && (this.unsubscribeWatcher(), this.unsubscribeWatcher = void 0);
      }
      async load(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = wr(r2, (0, x.VI)(e2.withName("LocalCursorRulesService.load")), false);
          this.loadTraceId = n2.span.spanContext().traceId;
          const o2 = (0, s.resolve)(this.rootDirectory), i2 = await Fe(n2.ctx, this.gitExecutor, o2) || o2, a2 = this.loadCursorRulesRule(n2.ctx, i2).then((e3) => e3 ? [e3] : []), c2 = this.loadRulesFromDirAndAncestors(n2.ctx, o2);
          let l2, u2;
          if (this.loadNestedRules) {
            const e3 = t2 ?? this.nestedExtensibilityService.discover(n2.ctx);
            l2 = e3.then((e4) => this.parseNestedRuleFiles(n2.ctx, e4.rules)), u2 = e3.then((e4) => this.parseNestedMarkdownFiles(n2.ctx, e4.markdown));
          } else l2 = [], u2 = [];
          const d2 = (await Promise.all([a2, c2, l2, u2])).flat(), p2 = /* @__PURE__ */ new Map();
          for (const e3 of d2) p2.set(e3.path, e3);
          return [...p2.values()].map((e3) => this.toCursorRule(e3));
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
      async loadCursorRulesRule(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          wr(r2, (0, x.VI)(e2.withName("LocalCursorRulesService.loadCursorrules")), false);
          try {
            const e3 = (0, s.join)(t2, ".cursorrules");
            if ((await (0, n.stat)(e3)).isFile()) {
              return { filename: ".cursorrules", path: e3, frontmatter: { alwaysApply: true }, body: await (0, Ee.yR)(e3) };
            }
          } catch {
          }
          return null;
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
      async getAllCursorRules(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          return wr(t2, (0, x.VI)(e2.withName("LocalCursorRulesService.getAllCursorRules")), false).span.setAttribute("cacheTraceId", this.loadTraceId ?? "undefined"), await this._rules;
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          vr(t2);
        }
      }
      toCursorRule(e2) {
        return (function(e3) {
          let t2;
          if (true === e3.frontmatter.alwaysApply) t2 = { case: "global", value: new qt.i9() };
          else {
            const r3 = (0, Jt.nSO)(e3.frontmatter.globs);
            t2 = r3 && r3.length > 0 ? { case: "fileGlobbed", value: new qt.uT({ globs: r3 }) } : "string" == typeof e3.frontmatter.description && e3.frontmatter.description.trim().length > 0 ? { case: "agentFetched", value: new qt.Xo({ description: Br(e3.frontmatter.description) }) } : { case: "manuallyAttached", value: new qt._u() };
          }
          const r2 = e3.frontmatter["metadata.environments"], n2 = Array.isArray(r2) ? r2 : [], s2 = e3.frontmatter["metadata.disabledEnvironments"], o2 = Array.isArray(s2) ? s2 : [], i2 = e3.frontmatter["metadata.scopedTo"], a2 = Array.isArray(i2) ? i2 : [];
          return new qt.DX({ fullPath: e3.path, content: e3.body, type: new qt.f5({ type: t2 }), environments: n2, disabledEnvironments: o2, scopedTo: a2, frontmatter: e3.rawFrontmatter ?? "" });
        })({ path: e2.path, body: e2.body, frontmatter: e2.frontmatter, rawFrontmatter: e2.rawFrontmatter });
      }
      async loadRulesFromDirAndAncestors(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = wr(r2, (0, x.VI)(e2.withName("LocalCursorRulesService.loadRulesFromDirAndAncestors")), false), o2 = [];
          let i2 = t2;
          const a2 = this.getThirdPartyExtensibilityEnabled();
          for (; ; ) {
            const e3 = (0, s.join)(i2, ".cursor", "rules"), t3 = i2;
            o2.push((async () => await this.dirIsDirectory(n2.ctx, e3) ? this.loadRulesFromDirectory(n2.ctx, t3) : [])());
            const r3 = [];
            a2 && r3.push("CLAUDE.md", "CLAUDE.local.md"), r3.push("AGENTS.md");
            for (const e4 of r3) o2.push(this.loadRulesFromMarkdownFile(n2.ctx, i2, e4));
            const c3 = (0, s.dirname)(i2);
            if (c3 === i2) break;
            i2 = c3;
          }
          const c2 = (await Promise.all(o2)).flat();
          return n2.span.setAttribute("rules", c2.length), c2;
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
      async loadRulesFromMarkdownFile(e2, t2, r2) {
        const o2 = { stack: [], error: void 0, hasError: false };
        try {
          wr(o2, (0, x.VI)(e2.withName("LocalCursorRulesService.loadRulesFromMarkdownFile")), false).span.setAttribute("filename", r2);
          try {
            const e3 = (0, s.join)(t2, r2);
            if (await this.isCursorIgnored(e3)) return [];
            if ((await (0, n.stat)(e3)).isFile()) {
              const t3 = await (0, Ee.yR)(e3);
              return [{ filename: (0, s.basename)(e3, ".md"), path: e3, frontmatter: { alwaysApply: true }, body: t3 }];
            }
          } catch {
          }
          return [];
        } catch (e3) {
          o2.error = e3, o2.hasError = true;
        } finally {
          vr(o2);
        }
      }
      async isCursorIgnored(e2) {
        try {
          const t2 = await ze((0, s.resolve)(this.rootDirectory, e2));
          return null === t2 || await this.ignoreService.isCursorIgnored(t2);
        } catch {
          return false;
        }
      }
      async parseNestedRuleFiles(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = wr(r2, (0, x.VI)(e2.withName("LocalCursorRulesService.parseNestedRuleFiles")), false), o2 = (await Promise.all(t2.map(async (e3) => {
            try {
              const t3 = jr(await (0, Ee.yR)(e3));
              if (t3) return { filename: (0, s.basename)(e3, ".mdc"), path: e3, frontmatter: t3.frontmatter, rawFrontmatter: t3.rawFrontmatter, body: t3.body };
            } catch {
            }
          }))).filter((e3) => void 0 !== e3);
          return n2.span.setAttribute("ruleFiles", o2.length), o2;
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
      async parseNestedMarkdownFiles(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = wr(r2, (0, x.VI)(e2.withName("LocalCursorRulesService.parseNestedMarkdownFiles")), false), o2 = (await Promise.all(t2.map(async (e3) => {
            try {
              const t3 = (0, s.basename)(e3);
              if (!this.isRuleMarkdownFile(t3)) return [];
              const r3 = (0, s.dirname)(e3);
              return await this.loadRulesFromMarkdownFile(n2.ctx, r3, t3);
            } catch {
            }
            return [];
          }))).flat();
          return n2.span.setAttribute("markdownFiles", o2.length), o2;
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
      async loadRulesFromDirectory(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = wr(r2, (0, x.VI)(e2.withName("LocalCursorRulesService.loadRulesFromDirectory")), false), i2 = [];
          try {
            const e3 = (0, s.join)(t2, ".cursorignore"), r3 = Ar ? await (0, n.stat)(e3).then((t3) => t3.isFile() ? [e3] : [], () => []) : [], a2 = Ar ? { root: t2, searchPaths: [(0, s.join)(".cursor", "rules")], includeGlobs: ["**/*.mdc"], cursorIgnoreFiles: r3, followSymlinks: true, source: "cursor_rules" } : { root: (0, s.join)(t2, ".cursor", "rules"), includeGlobs: ["**/*.mdc"], followSymlinks: true, source: "cursor_rules" }, c2 = Hr.getRipwalkCache().walk(o2.ctx, a2);
            for await (const e4 of c2.lines) {
              const t3 = (0, s.join)(a2.root, e4);
              i2.push(...await this.readRulesAtPath(o2.ctx, t3));
            }
          } catch {
          }
          return o2.span.setAttribute("rules", i2.length), i2;
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
      async dirIsDirectory(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          wr(r2, (0, x.VI)(e2.withName("LocalCursorRulesService.dirIsDirectory")), false);
          try {
            return (await (0, n.stat)(t2)).isDirectory();
          } catch {
            return false;
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
    }
    class zr {
      constructor(e2, t2, r2, n2, s2, o2, i2 = () => true, a2 = Promise.resolve(), c2 = "ide", l2, u2 = () => [], d2) {
        if (this.workspacePaths = t2, this.userHomeDirectory = r2, this.gitExecutor = n2, this.initialBuiltinSkillsSyncPromise = a2, this.agentStoreLoadInFlight = false, this.agentStoreLoadRequestedWhileInFlight = false, this.agentStoreLoadGeneration = 0, this.watchersByFolder = /* @__PURE__ */ new Map(), this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.reloadRequestedDuringSeed = false, this.surface = c2, this.getAgentStoreSkillRoots = u2, this.fileWatcher = o2, this.getThirdPartyExtensibilityEnabled = i2, this.catalogCache = d2, this.workspaceCatalogKey = Ut({ kind: "workspace", surface: c2, loadNestedSkills: s2, thirdPartyExtensibility: i2(), workspacePaths: [...t2].sort(), userHomeDirectory: r2 }), void 0 !== l2 && l2.length !== t2.length) throw new Error(`initialNestedExtensibilityResults length (${l2.length}) must match workspacePaths length (${t2.length})`);
        this.nestedExtensibilityEntries = s2 ? t2.map((e3) => new lr(e3, n2, r2, i2)) : [], this.foldersToWatch = this.computeFoldersToWatch();
        const p2 = performance.now();
        let m2 = false, h2 = false, f2 = false;
        const g2 = this.loadAll(e2, l2).then((t3) => {
          try {
            _r.info(e2, "AgentSkillsCursorRulesService load completed", { durationMs: Math.round(performance.now() - p2), ruleCount: t3.rules.length, skillCount: t3.agentSkills.length, servedFromCache: m2 });
          } catch {
          }
          return t3;
        }).catch((e3) => (h2 = true, Ur("Failed to load Agent Skills")(e3)));
        if (void 0 === this.catalogCache) this._loaded = g2;
        else {
          const t3 = this.readCatalog(this.workspaceCatalogKey).then((r3) => (f2 = true, this._loaded !== t3 ? this._loaded : (h2 && this.closeSeedWindow(e2), void 0 === r3 ? g2 : (m2 = true, r3))));
          this.seededLoaded = t3, this._loaded = t3, g2.then((r3) => {
            this._loaded === t3 ? h2 ? f2 && this.closeSeedWindow(e2) : (this._loaded = g2, m2 && this.notifyChanged(), this.persistCatalog(this.workspaceCatalogKey, r3), this.closeSeedWindow(e2)) : this.seededLoaded = void 0;
          });
        }
        this.refreshAgentStoreSkills(), this.setupWatchers(this.foldersToWatch);
      }
      closeSeedWindow(e2) {
        this.seededLoaded = void 0, this.reloadRequestedDuringSeed && (this.reloadRequestedDuringSeed = false, this.reload(e2));
      }
      async readCatalog(e2) {
        if (void 0 !== this.catalogCache) try {
          const t2 = await this.catalogCache.read(e2);
          return void 0 === t2 ? void 0 : await (async function(e3) {
            if (!$t(e3)) return;
            const t3 = /* @__PURE__ */ new Map();
            if (await Promise.all(e3.realSkillFilePathsByFullPath.map(async ([r3, n2]) => {
              const s2 = e3.fileMtimesMs[n2];
              void 0 !== s2 && await Lt(r3) === s2 && t3.set(r3, n2);
            })), 0 === t3.size) return;
            const r2 = (e4) => void 0 !== e4 && t3.has(e4);
            try {
              return { rules: e3.rules.map((e4) => qt.DX.fromJson(e4, { ignoreUnknownFields: true })).filter((e4) => r2(e4.fullPath)), agentSkills: e3.agentSkills.map((e4) => Mt.N.fromJson(e4, { ignoreUnknownFields: true })).filter((e4) => r2(e4.fullPath)), realSkillFilePathsByFullPath: t3 };
            } catch (e4) {
              return void Nt("snapshot failed to decode: %O", e4);
            }
          })(t2);
        } catch (e3) {
          return void Nr("Failed to read the skills catalog cache: %O", e3);
        }
      }
      persistCatalog(e2, t2) {
        const r2 = this.catalogCache;
        void 0 !== r2 && (async function(e3) {
          const t3 = new Set(e3.realSkillFilePathsByFullPath.values()), r3 = {};
          return await Promise.all(Array.from(t3, async (e4) => {
            const t4 = await Lt(e4);
            void 0 !== t4 && (r3[e4] = t4);
          })), { version: Ft, rules: e3.rules.map((e4) => e4.toJson()), agentSkills: e3.agentSkills.map((e4) => e4.toJson()), realSkillFilePathsByFullPath: Array.from(e3.realSkillFilePathsByFullPath), fileMtimesMs: r3 };
        })(t2).then((t3) => r2.write(e2, t3)).catch((e3) => {
          Nr("Failed to persist the skills catalog cache: %O", e3);
        });
      }
      computeFoldersToWatch() {
        const e2 = this.getThirdPartyExtensibilityEnabled(), t2 = /* @__PURE__ */ new Set();
        for (const r2 of this.workspacePaths) {
          t2.add((0, s.join)(r2, ".cursor", "rules"));
          for (const n2 of Xt(r2, e2)) t2.add(n2.dirPath);
        }
        for (const r2 of er(this.userHomeDirectory, e2)) t2.add(r2.dirPath);
        for (const e3 of this.getAgentStoreSkillRoots()) t2.add(e3);
        return t2.add(Yt(this.userHomeDirectory).dirPath), Array.from(t2);
      }
      setupWatchers(e2) {
        if (!this.fileWatcher) return;
        const t2 = ["**"];
        for (const r2 of e2) {
          if (this.watchersByFolder.has(r2)) continue;
          const e3 = this.fileWatcher.subscribe(r2, t2, (e4) => {
            const t3 = { stack: [], error: void 0, hasError: false };
            try {
              const r3 = (0, ye.q6)(), n2 = wr(t3, (0, x.VI)(r3.withName("AgentSkillsCursorRulesService.fileWatcher.subscribe")), false);
              this.reloadAtPath(n2.ctx, e4);
            } catch (e5) {
              t3.error = e5, t3.hasError = true;
            } finally {
              vr(t3);
            }
          });
          this.watchersByFolder.set(r2, e3);
        }
      }
      removeWatchers(e2) {
        for (const t2 of e2) {
          const e3 = this.watchersByFolder.get(t2);
          e3 && (e3(), this.watchersByFolder.delete(t2));
        }
      }
      async getAllCursorRules(e2) {
        const [t2] = await Promise.all([this._loaded, this.awaitAgentStoreSeed()]);
        return this.withAgentStoreSkills(t2).rules;
      }
      async awaitAgentStoreSeed() {
        void 0 !== this.agentStoreSeedInFlight && await (0, be.wj)(this.agentStoreSeedInFlight, 250, "Agent Store skills cache read timed out").catch(() => {
        });
      }
      reload(e2) {
        this.syncWatchers(), this.seededLoaded = void 0, this.reloadRequestedDuringSeed = false;
        const t2 = this.loadAll(e2), r2 = t2.catch(Ur("Failed to load Agent Skills"));
        this._loaded = r2, t2.then((e3) => {
          this._loaded === r2 && this.persistCatalog(this.workspaceCatalogKey, e3);
        }, () => {
        }), this.refreshAgentStoreSkills(), this.notifyChanged();
      }
      reloadSkillRoots() {
        try {
          this.syncWatchers();
        } finally {
          this.refreshAgentStoreSkills();
        }
      }
      syncWatchers() {
        const e2 = this.computeFoldersToWatch(), t2 = new Set(this.foldersToWatch), r2 = new Set(e2);
        this.removeWatchers(this.foldersToWatch.filter((e3) => !r2.has(e3))), this.setupWatchers(e2.filter((e3) => !t2.has(e3))), this.foldersToWatch = e2;
      }
      isPrunedByExtensibilityScan(e2) {
        const t2 = e2.replace(/\\/g, "/");
        for (const e3 of this.foldersToWatch) {
          const r2 = e3.replace(/\\/g, "/");
          if (t2.startsWith(`${r2}/`)) return t2.slice(r2.length + 1).split("/").slice(0, -1).some((e4) => e4.startsWith("."));
        }
        return false;
      }
      reloadAtPath(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = wr(r2, (0, x.VI)(e2.withName("AgentSkillsCursorRulesService.reloadAtPath")), false), i2 = t2.endsWith("SKILL.md") ? t2 : (0, s.join)(t2, "SKILL.md");
          if (void 0 !== this.seededLoaded && this._loaded === this.seededLoaded && !this.getAgentStoreSkillRoots().some((e3) => $r(i2, e3))) return void (this.reloadRequestedDuringSeed = true);
          if (this.getAgentStoreSkillRoots().some((e3) => $r(i2, e3))) return void this.refreshAgentStoreSkills();
          if (this.foldersToWatch.some((e3) => "" === (0, s.relative)(e3, t2))) return void this.reload(o2.ctx);
          const a2 = this._loaded, c2 = (async () => {
            const e3 = await a2, { realSkillFilePathsByFullPath: t3 } = e3, r3 = (function(e4, t4) {
              const r4 = new Map(e4.realSkillFilePathsByFullPath);
              for (const e5 of t4) r4.delete(e5);
              return { rules: e4.rules.filter((e5) => !t4.has(e5.fullPath)), agentSkills: e4.agentSkills.filter((e5) => !t4.has(e5.fullPath)), realSkillFilePathsByFullPath: r4 };
            })(e3, /* @__PURE__ */ new Set([i2]));
            if (Kt(i2) || this.isPrunedByExtensibilityScan(i2)) return r3;
            const s2 = t3.get(i2);
            if (void 0 === s2) {
              try {
                await (0, n.stat)(i2);
              } catch {
                return r3;
              }
              return await this.loadAll(o2.ctx);
            }
            let c3;
            try {
              c3 = await (0, n.realpath)(i2);
            } catch {
              return await this.loadAll(o2.ctx);
            }
            if (c3 !== s2) return await this.loadAll(o2.ctx);
            try {
              return Or(r3, { ...await (async function(e4) {
                const t4 = await (0, Ee.yR)(e4);
                return { skillFilePath: e4, content: t4, parsed: (0, Dt.be)(t4) };
              })(i2), realSkillFilePath: c3 }, this.surface), r3;
            } catch {
              return await this.loadAll(o2.ctx);
            }
          })().catch(Ur("Failed to load Agent Skills at path"));
          this._loaded = c2, this.notifyChanged();
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
      async getAllAgentSkills(e2) {
        const [t2] = await Promise.all([this._loaded, this.awaitAgentStoreSeed()]);
        return this.withAgentStoreSkills(t2).agentSkills;
      }
      withAgentStoreSkills(e2) {
        const t2 = this.settledAgentStoreSkills?.loaded;
        if (void 0 === t2 || 0 === t2.realSkillFilePathsByFullPath.size) return e2;
        const r2 = new Set(e2.realSkillFilePathsByFullPath.values()), n2 = { rules: [...e2.rules], agentSkills: [...e2.agentSkills], realSkillFilePathsByFullPath: new Map(e2.realSkillFilePathsByFullPath) }, s2 = /* @__PURE__ */ new Set();
        for (const [e3, o2] of t2.realSkillFilePathsByFullPath) n2.realSkillFilePathsByFullPath.has(e3) || r2.has(o2) ? s2.add(e3) : n2.realSkillFilePathsByFullPath.set(e3, o2);
        for (const e3 of t2.rules) s2.has(e3.fullPath) || n2.rules.push(e3);
        for (const e3 of t2.agentSkills) s2.has(e3.fullPath) || n2.agentSkills.push(e3);
        return n2;
      }
      refreshAgentStoreSkills() {
        const e2 = this.getAgentStoreSkillRoots().filter((e3) => "" !== e3.trim()), t2 = ++this.agentStoreLoadGeneration;
        var r2, n2;
        if (void 0 === this.settledAgentStoreSkills || (r2 = this.settledAgentStoreSkills.roots, n2 = e2, r2.length === n2.length && r2.every((e3, t3) => e3 === n2[t3])) || (this.settledAgentStoreSkills = void 0, this.notifyChanged()), 0 !== e2.length) {
          if (void 0 === this.settledAgentStoreSkills) {
            const r3 = this.seedAgentStoreSkills(e2, t2).finally(() => {
              this.agentStoreSeedInFlight === r3 && (this.agentStoreSeedInFlight = void 0);
            });
            this.agentStoreSeedInFlight = r3;
          }
          this.agentStoreLoadInFlight ? this.agentStoreLoadRequestedWhileInFlight = true : (this.agentStoreLoadInFlight = true, (0, be.wj)(this.loadAgentStoreSkills(e2), 3e4, "Agent Store skills walk timed out").then((r3) => {
            t2 === this.agentStoreLoadGeneration && (this.settledAgentStoreSkills = { roots: e2, loaded: r3 }, this.notifyChanged(), (r3.rules.length > 0 || r3.agentSkills.length > 0) && this.persistCatalog(Lr(this.surface, e2), r3));
          }, (e3) => {
            Nr("Failed to load Agent Store skills: %O", e3);
          }).finally(() => {
            this.agentStoreLoadInFlight = false, this.agentStoreLoadRequestedWhileInFlight && (this.agentStoreLoadRequestedWhileInFlight = false, this.refreshAgentStoreSkills());
          }));
        }
      }
      async seedAgentStoreSkills(e2, t2) {
        const r2 = await this.readCatalog(Lr(this.surface, e2));
        void 0 !== r2 && t2 === this.agentStoreLoadGeneration && void 0 === this.settledAgentStoreSkills && (this.settledAgentStoreSkills = { roots: e2, loaded: r2 }, this.notifyChanged());
      }
      async loadAgentStoreSkills(e2) {
        const t2 = Fr(), r2 = (await Promise.all(e2.map((e3) => br(e3)))).flat().filter((e3) => !Kt(e3)), n2 = await Promise.all(r2.map((e3) => Ir(e3))), s2 = /* @__PURE__ */ new Set();
        for (const e3 of n2) s2.has(e3.realSkillFilePath) || (s2.add(e3.realSkillFilePath), Or(t2, e3, this.surface));
        return t2;
      }
      notifyChanged() {
        for (const e2 of Array.from(this.onChangeCallbacks)) e2();
      }
      onDidChangeSkills(e2) {
        return this.onDidChangeRules(e2);
      }
      onDidChangeRules(e2) {
        return this.onChangeCallbacks.add(e2), () => {
          this.onChangeCallbacks.delete(e2);
        };
      }
      dispose() {
        for (const e2 of this.watchersByFolder.values()) e2();
        this.watchersByFolder.clear();
      }
      async loadAll(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = wr(r2, (0, x.VI)(e2.withName("AgentSkillsCursorRulesService.loadAll")), false);
          await this.initialBuiltinSkillsSyncPromise;
          const s2 = [], o2 = [], i2 = /* @__PURE__ */ new Map(), a2 = Promise.all(this.nestedExtensibilityEntries.map((e3, r3) => (t2?.[r3] ?? e3.discover(n2.ctx)).catch((e4) => {
            Nr("Failed to discover nested agent skills: %O", e4);
          }))), c2 = new Set(this.getAgentStoreSkillRoots()), l2 = await Promise.all(this.foldersToWatch.filter((e3) => !c2.has(e3)).map(async (e3) => {
            const t3 = (await br(e3)).filter((e4) => !Kt(e4));
            return Promise.all(t3.map((e4) => Ir(e4)));
          })), u2 = /* @__PURE__ */ new Set();
          for (const e3 of l2) for (const t3 of e3) if (!u2.has(t3.realSkillFilePath)) if (u2.add(t3.realSkillFilePath), "error" in t3) i2.set(t3.skillFilePath, t3.realSkillFilePath), Dr({ rules: s2, agentSkills: o2, skillFilePath: t3.skillFilePath, errorMessage: t3.error });
          else {
            if (Rr(t3.parsed, this.surface)) continue;
            i2.set(t3.skillFilePath, t3.realSkillFilePath), s2.push(Mr(t3)), Pr(t3.parsed) || o2.push(qr(t3));
          }
          const d2 = (await a2).flatMap((e3) => e3?.skills ?? []).filter((e3) => !Kt(e3)), p2 = await Promise.all(d2.map((e3) => q(e3))), m2 = [];
          for (const [e3, t3] of d2.entries()) {
            const r3 = p2[e3];
            u2.has(r3) || (u2.add(r3), m2.push(t3));
          }
          const h2 = await Promise.all(m2.map((e3) => Ir(e3)));
          for (const e3 of h2) if ("error" in e3) i2.set(e3.skillFilePath, e3.realSkillFilePath), Dr({ rules: s2, agentSkills: o2, skillFilePath: e3.skillFilePath, errorMessage: e3.error });
          else {
            if (Rr(e3.parsed, this.surface)) continue;
            i2.set(e3.skillFilePath, e3.realSkillFilePath), s2.push(Mr(e3)), Pr(e3.parsed) || o2.push(qr(e3));
          }
          return n2.span.setAttribute("agent_skills.total", s2.length), n2.span.setAttribute("agent_skills_proto.total", o2.length), { rules: s2, agentSkills: o2, realSkillFilePathsByFullPath: i2 };
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
    }
    function Wr(e2) {
      let t2;
      switch (e2.type) {
        case "global":
          t2 = new qt.f5({ type: { case: "global", value: new qt.i9() } });
          break;
        case "fileGlobbed":
          t2 = new qt.f5({ type: { case: "fileGlobbed", value: new qt.uT({ globs: e2.globs ?? [] }) } });
          break;
        case "agentFetched":
          t2 = new qt.f5({ type: { case: "agentFetched", value: new qt.Xo({ description: Br(e2.description ?? "") }) } });
          break;
        case "manuallyAttached":
          t2 = new qt.f5({ type: { case: "manuallyAttached", value: new qt._u() } });
          break;
        default:
          e2.type;
          t2 = new qt.f5({ type: { case: "manuallyAttached", value: new qt._u() } });
      }
      return new qt.DX({ fullPath: e2.fullPath, content: e2.content, type: t2, gitRemoteOrigin: e2.gitRemoteOrigin, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId, environments: e2.environments ?? [], disabledEnvironments: e2.disabledEnvironments ?? [], scopedTo: [] });
    }
    class Vr {
      constructor(e2, t2, r2, n2) {
        this.getImportSettings = t2, this.pluginsService = n2, this._rules = Promise.resolve([]), this._agentSkills = Promise.resolve([]), this._lastLoaded = { rules: [], agentSkills: [] }, this._loadGeneration = 0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.currentImportSettings = this.getImportSettings();
        const s2 = performance.now();
        this.startLoad(e2, false, (t3) => {
          try {
            _r.info(e2, "CursorPluginsAgentSkillsService load completed", { durationMs: Math.round(performance.now() - s2), ruleCount: t3.rules.length, skillCount: t3.agentSkills.length });
          } catch {
          }
        });
      }
      startLoad(e2, t2, r2) {
        const n2 = ++this._loadGeneration, s2 = this.loadAll(e2, t2).catch((e3) => ((0, Pt.debuglog)("cursor-plugins-agent-skills")("Failed to load Cursor Plugins Agent Skills: %s", e3 instanceof Error ? e3.message : String(e3)), { rules: [], agentSkills: [] })).then((e3) => (n2 === this._loadGeneration && (this._lastLoaded = e3, r2?.(e3)), e3)), o2 = () => (s2.then((e3) => {
          n2 === this._loadGeneration && (this._rules = Promise.resolve(e3.rules), this._agentSkills = Promise.resolve(e3.agentSkills), this.notifyChange());
        }), this._lastLoaded), i2 = void 0 !== this._overBudgetLoad ? Promise.resolve(o2()) : (0, be.wj)(s2, 5e3, "Cursor plugin load did not finish within the rules wait budget").catch((t3) => (_r.warn(e2, "Serving rules without plugin primitives while plugins load", { error: t3 instanceof Error ? t3.message : String(t3), waitMs: 5e3 }), this._overBudgetLoad = s2, s2.then(() => {
          this._overBudgetLoad === s2 && (this._overBudgetLoad = void 0);
        }), o2()));
        this._rules = i2.then((e3) => e3.rules), this._agentSkills = i2.then((e3) => e3.agentSkills);
      }
      notifyChange() {
        for (const e2 of Array.from(this.onChangeCallbacks)) e2();
      }
      async getAllCursorRules(e2) {
        return await this._rules;
      }
      async getAllAgentSkills(e2) {
        return await this._agentSkills;
      }
      reload(e2) {
        const t2 = this.getImportSettings();
        this.currentImportSettings = t2, this.startLoad(e2, true), this.notifyChange();
      }
      onDidChangeRules(e2) {
        return this.onChangeCallbacks.add(e2), () => {
          this.onChangeCallbacks.delete(e2);
        };
      }
      onDidChangeSkills(e2) {
        return this.onDidChangeRules(e2);
      }
      dispose() {
        this.onChangeCallbacks.clear();
      }
      async loadAll(e2, t2 = false) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = wr(r2, (0, x.VI)(e2.withName("CursorPluginsAgentSkillsService.loadAll")), false), o2 = [], i2 = [];
          try {
            let e3 = t2 ? await this.pluginsService.reload() : await this.pluginsService.getAllEnabledPlugins();
            this.currentImportSettings.importThirdPartyPlugins || (e3 = e3.filter((e4) => "claude-plugin" !== e4.identifier.source)), n2.span.setAttribute("cursor_plugins.loaded", e3.length);
            const r3 = (0, Jt.AkQ)(e3), a2 = (0, Jt.Vwy)(e3);
            for (const e4 of [...r3, ...a2]) o2.push(Wr(e4));
            for (const t3 of e3) {
              const e4 = `plugin:${(0, Jt.s4m)(t3.identifier)}`, r4 = (0, Jt.dBY)(t3.identifier), n3 = (0, Jt.R3Q)(t3.identifier), o3 = (0, Jt.xJd)(t3.identifier), a3 = (0, Jt.iUy)(t3.identifier);
              for (const c2 of t3.skills) {
                if (true === c2.alwaysApply) continue;
                let l2 = false;
                if (c2.content?.includes("disable-model-invocation")) try {
                  l2 = true === (0, Dt.be)(c2.content).data?.["disable-model-invocation"];
                } catch {
                }
                i2.push(new Mt.N({ fullPath: (0, s.join)(t3.installPath, c2.path), content: c2.content, description: Br(c2.description ?? ""), environments: c2.environments ?? [], disabledEnvironments: c2.disabledEnvironments ?? [], gitRemoteOrigin: e4, plugin: r4, marketplace: n3, pluginId: o3, marketplaceId: a3, disableModelInvocation: l2 }));
              }
            }
          } catch (e3) {
            n2.span.setAttribute("cursor_plugins.error", String(e3));
          }
          return n2.span.setAttribute("cursor_plugins.total", o2.length), n2.span.setAttribute("cursor_plugins_proto.total", i2.length), { rules: o2, agentSkills: i2 };
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          vr(r2);
        }
      }
    }
    var Kr = r(11491);
    const Yr = (0, Pt.debuglog)("local-subagents");
    class Zr {
      async getAllSubagents() {
        return [];
      }
      async reload() {
        return [];
      }
    }
    function Xr(e2) {
      return "true" === (e2 ?? "").trim().toLowerCase();
    }
    function en(e2) {
      const t2 = e2.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/m);
      if (!t2) return null;
      const r2 = t2[1] ?? "", n2 = (t2[2] ?? "").trim();
      if (0 === n2.length) return null;
      const s2 = {};
      for (const e3 of r2.split("\n")) {
        const t3 = e3.trim();
        if (0 === t3.length || t3.startsWith("#")) continue;
        const r3 = t3.indexOf(":");
        if (-1 === r3) continue;
        const n3 = t3.slice(0, r3).trim().toLowerCase(), o3 = t3.slice(r3 + 1).trim();
        0 !== n3.length && (s2[n3] = o3);
      }
      const o2 = s2.name ?? "", i2 = s2.description, a2 = s2.model, c2 = Xr(s2["force-default-model"]), l2 = "true" === (s2.readonly ?? "").trim().toLowerCase() ? Kr.b$.READONLY : Kr.b$.DEFAULT;
      const u2 = Xr(s2.background ?? s2.is_background), d2 = s2.tools;
      return { name: o2, description: i2, tools: void 0 !== d2 && d2.length > 0 ? d2.split(",").map((e3) => e3.trim()).filter((e3) => e3.length > 0) : [], model: a2, forceDefaultModel: c2, prompt: n2, permissionMode: l2, isBackground: u2 };
    }
    function tn(e2) {
      const t2 = (0, s.extname)(e2).toLowerCase();
      return ".md" === t2 || ".mdc" === t2 || ".markdown" === t2;
    }
    function rn(e2) {
      return (0, s.basename)(e2, (0, s.extname)(e2)).replace(/[\s_]+/g, "-");
    }
    async function nn(e2, t2) {
      return await pr({ rootDir: e2, includeFile: tn, containmentRootDir: t2 });
    }
    class sn {
      constructor(e2, t2, r2 = "workspace", n2 = false) {
        this.workspacePath = e2, this.cursorAgentsSource = r2, this.allowExternalAgentSymlinks = n2, this.getThirdPartyExtensibilityEnabled = t2 ?? (() => true), this.subagents = this.load().catch((e3) => (Yr("Failed to load subagents: %o", e3), []));
      }
      async getAllSubagents() {
        return this.subagents;
      }
      async reload() {
        return this.subagents = this.load().catch((e2) => (Yr("Failed to load subagents: %o", e2), [])), await this.subagents;
      }
      computeAgentsDirs() {
        const e2 = (0, s.resolve)(this.workspacePath), t2 = [{ dirPath: (0, s.join)(e2, ".cursor", "agents"), source: this.cursorAgentsSource }];
        return this.getThirdPartyExtensibilityEnabled() && (t2.push({ dirPath: (0, s.join)(e2, ".claude", "agents"), source: "claude" }), t2.push({ dirPath: (0, s.join)(e2, ".grok", "agents"), source: "grok" })), t2;
      }
      async load() {
        const e2 = this.computeAgentsDirs(), t2 = [];
        for (const { dirPath: r2, source: o2 } of e2) {
          const e3 = await nn(r2, this.allowExternalAgentSymlinks ? void 0 : this.workspacePath);
          for (const r3 of e3) {
            const e4 = (0, s.basename)(r3);
            try {
              if (!(await (0, n.stat)(r3)).isFile()) continue;
            } catch (e5) {
              Yr("Skipping subagent file %s due to stat error: %o", r3, e5);
              continue;
            }
            try {
              const n2 = en(await (0, Ee.yR)(r3));
              if (!n2) continue;
              t2.push(new Kr.zz({ fullPath: r3, name: n2.name || rn(e4), description: n2.description ?? "", tools: n2.tools, model: n2.model ?? "inherit", forceDefaultModel: n2.forceDefaultModel, prompt: n2.prompt, permissionMode: n2.permissionMode, isBackground: n2.isBackground, source: o2 }));
            } catch (e5) {
              Yr("Failed to parse subagent file %s: %o", r3, e5);
            }
          }
        }
        return t2;
      }
    }
    const on = /* @__PURE__ */ new Set(["claude-code-tutor"]);
    class an {
      constructor(e2) {
        this.subagentsServices = e2;
      }
      async getAllSubagents() {
        const e2 = await Promise.all(this.subagentsServices.map((e3) => e3.getAllSubagents().catch((e4) => (Yr("Failed to load subagents from merged service: %o", e4), [])))), t2 = /* @__PURE__ */ new Map();
        for (const r2 of e2) for (const e3 of r2) on.has(e3.name) || t2.has(e3.name) || t2.set(e3.name, e3);
        return Array.from(t2.values());
      }
      async reload() {
        return await Promise.all(this.subagentsServices.map((e2) => e2.reload())), this.getAllSubagents();
      }
    }
    class cn {
      constructor(e2, t2) {
        this.getSettings = e2, this.pluginsService = t2, this._subagentsCache = [], this._loadId = 0, this._loadPromise = null, this._loadedOnce = false, this.runLoadInBackground();
      }
      async getAllSubagents() {
        return this._loadPromise && await this._loadPromise, this._loadedOnce || await this.reload(), [...this._subagentsCache];
      }
      async reload() {
        return this.runLoadInBackground(true), this._loadPromise && await this._loadPromise, this._subagentsCache;
      }
      runLoadInBackground(e2 = false) {
        const t2 = ++this._loadId;
        this._loadPromise = this.load(e2).then((e3) => {
          t2 === this._loadId && (this._subagentsCache = e3, this._loadedOnce = true);
        }).catch((e3) => {
          t2 === this._loadId && (Yr("Failed to load Cursor plugin subagents: %o", e3), this._subagentsCache = [], this._loadedOnce = true);
        }).finally(() => {
          t2 === this._loadId && (this._loadPromise = null);
        });
      }
      dispose() {
      }
      async load(e2) {
        const t2 = [];
        try {
          let r2 = e2 ? await this.pluginsService.reload() : await this.pluginsService.getAllEnabledPlugins();
          this.getSettings().importThirdPartyPlugins || (r2 = r2.filter((e3) => "claude-plugin" !== e3.identifier.source));
          const n2 = (0, Jt.DuR)(r2, { stripModel: true, stripTools: true });
          for (const e3 of n2) {
            const r3 = "readonly" === e3.permissionMode ? Kr.b$.READONLY : Kr.b$.DEFAULT;
            t2.push(new Kr.zz({ name: e3.name, description: e3.description, tools: [], model: "inherit", prompt: e3.prompt, fullPath: e3.fullPath, permissionMode: r3, plugin: e3.plugin, marketplace: e3.marketplace, pluginId: e3.pluginId, marketplaceId: e3.marketplaceId, source: "plugin" }));
          }
        } catch {
        }
        return t2;
      }
    }
    var ln = r(46144), un = r(43643);
    var dn = r(31421), pn = r(73015);
    const mn = (0, Pt.promisify)(dn.execFile), hn = mn;
    function fn(e2) {
      let t2, r2, n2;
      for (const s2 of e2.split("\n")) if (s2.includes("*")) {
        const e3 = s2.trim().match(/^(\d+)x(\d+)/);
        e3 && (t2 = parseInt(e3[1], 10), r2 = parseInt(e3[2], 10));
        const o2 = s2.match(/(\d+(?:\.\d+)?)\*(?:\+)?/);
        if (o2) {
          const e4 = parseFloat(o2[1]);
          e4 > 0 && e4 <= 500 && (n2 = Math.round(e4));
        }
        if (t2 && r2) break;
      }
      if (!t2 || !r2) {
        const n3 = e2.match(/current\s+(\d+)\s*x\s*(\d+)/i);
        n3 && (t2 = parseInt(n3[1], 10), r2 = parseInt(n3[2], 10));
      }
      if (!t2 || !r2) throw new Error(`Could not detect display resolution from xrandr output.
Expected a line with '*' indicating active mode, or 'current WxH'.
xrandr output:
${e2}`);
      return n2 || (n2 = 60), { width: t2, height: r2, refreshRate: n2 };
    }
    function gn(e2, t2, r2, n2) {
      const s2 = (function(e3 = {}) {
        const t3 = e3.displayWidth ?? 1920, r3 = e3.displayHeight ?? 1200, n3 = e3.apiWidth ?? 1280;
        return { width: n3, height: Math.round(n3 * r3 / t3) };
      })({ displayWidth: e2, displayHeight: t2, apiWidth: r2 });
      return { display: { width: e2, height: t2 }, api: { width: s2.width, height: n2 ?? s2.height } };
    }
    async function yn(e2) {
      const { stdout: t2 } = await (0, pn.D9)(hn, "xrandr", ["--display", e2], { timeout: 5e3, encoding: "utf8" }), r2 = fn(t2);
      return { display: r2, resolution: gn(r2.width, r2.height), resolutionString: `${r2.width}x${r2.height}` };
    }
    require("node:timers/promises");
    const wn = 3e4, vn = dn.execFile;
    function _n(e2, t2, r2) {
      return new Promise((n2, s2) => {
        r2?.signal?.throwIfAborted();
        const o2 = { timeout: r2?.timeoutMs ?? wn, env: r2?.env ? { ...process.env, ...r2.env } : void 0, signal: r2?.signal };
        (0, pn.D9)(vn, e2, t2.map(String), { ...o2, encoding: "utf8" }, (e3, t3) => {
          e3 ? s2(e3) : n2(t3);
        });
      });
    }
    un.w3.UNSPECIFIED, un.w3.LEFT, un.w3.MIDDLE, un.w3.RIGHT, un.w3.BACK, un.w3.FORWARD, un.Dh.UNSPECIFIED, un.Dh.UP, un.Dh.DOWN, un.Dh.LEFT, un.Dh.RIGHT;
    un.yq.NONE, un.yq.FIXED, un.yq.STABLE, un.yq.CAP, un.yq.CAPTURE_FAILED, (0, ln.v5)("computer_use.session.duration_ms", { description: "Duration of computer-use session in milliseconds" }), (0, ln.v5)("computer_use.session.action_count", { description: "Number of actions executed in a computer-use session" }), (0, ln.Pu)("computer_use.session.result", { description: "Result status of computer-use session", labelNames: ["outcome"] }), (0, ln.Pu)("computer_use.session.action_kind", { description: "Requested computer-use actions by bounded kind", labelNames: ["kind"] }), (0, k.h)("computer-use");
    var An = r(57614);
    Error;
    (0, ln.Pu)("computer_use.desktop_lease.check", { description: "Desktop lease action-gate outcomes", labelNames: ["outcome", "reason"] }), An.MP;
    var Sn = r(36038), bn = r(8592);
    const En = "agent.v1.";
    bn.HL;
    var In = (0, bn.QT)(Sn.proto3, En, "CursorType", [[0, "UNSPECIFIED"], [1, "ARROW"], [2, "POINTER"], [3, "TEXT"], [4, "WAIT"], [5, "CROSSHAIR"], [6, "MOVE"], [7, "RESIZE_NS"], [8, "RESIZE_EW"], [9, "RESIZE_NWSE"], [10, "RESIZE_NESW"], [11, "NOT_ALLOWED"], [12, "GRAB"], [13, "GRABBING"]], 1);
    Sn.proto3, Sn.proto3, Sn.proto3, Sn.proto3;
    class Cn {
      constructor(e2) {
        this.config = e2;
        const t2 = e2.display.width / e2.display.height, r2 = e2.api.width / e2.api.height;
        if (Math.abs(t2 - r2) > 0.02) throw new Error(`Aspect ratio mismatch: display=${t2.toFixed(3)}, api=${r2.toFixed(3)}`);
        this.xScaleUp = e2.display.width / e2.api.width, this.yScaleUp = e2.display.height / e2.api.height, this.xScaleDown = e2.api.width / e2.display.width, this.yScaleDown = e2.api.height / e2.display.height;
      }
      apiToDisplay(e2, t2) {
        return { x: Math.round(e2 * this.xScaleUp), y: Math.round(t2 * this.yScaleUp) };
      }
      displayToApi(e2, t2) {
        return { x: Math.round(e2 * this.xScaleDown), y: Math.round(t2 * this.yScaleDown) };
      }
      get apiWidth() {
        return this.config.api.width;
      }
      get apiHeight() {
        return this.config.api.height;
      }
      get displayWidth() {
        return this.config.display.width;
      }
      get displayHeight() {
        return this.config.display.height;
      }
    }
    const kn = { left_ptr: In.ARROW, arrow: In.ARROW, default: In.ARROW, top_left_arrow: In.ARROW, hand: In.POINTER, hand1: In.POINTER, hand2: In.POINTER, pointer: In.POINTER, pointing_hand: In.POINTER, xterm: In.TEXT, ibeam: In.TEXT, text: In.TEXT, watch: In.WAIT, wait: In.WAIT, progress: In.WAIT, left_ptr_watch: In.WAIT, crosshair: In.CROSSHAIR, cross: In.CROSSHAIR, tcross: In.CROSSHAIR, move: In.MOVE, fleur: In.MOVE, size_all: In.MOVE, sb_v_double_arrow: In.RESIZE_NS, v_double_arrow: In.RESIZE_NS, ns_resize: In.RESIZE_NS, row_resize: In.RESIZE_NS, top_side: In.RESIZE_NS, bottom_side: In.RESIZE_NS, sb_h_double_arrow: In.RESIZE_EW, h_double_arrow: In.RESIZE_EW, ew_resize: In.RESIZE_EW, col_resize: In.RESIZE_EW, left_side: In.RESIZE_EW, right_side: In.RESIZE_EW, top_left_corner: In.RESIZE_NWSE, bottom_right_corner: In.RESIZE_NWSE, nwse_resize: In.RESIZE_NWSE, size_fdiag: In.RESIZE_NWSE, top_right_corner: In.RESIZE_NESW, bottom_left_corner: In.RESIZE_NESW, nesw_resize: In.RESIZE_NESW, size_bdiag: In.RESIZE_NESW, not_allowed: In.NOT_ALLOWED, no_drop: In.NOT_ALLOWED, forbidden: In.NOT_ALLOWED, circle: In.NOT_ALLOWED, grab: In.GRAB, openhand: In.GRAB, grabbing: In.GRABBING, closedhand: In.GRABBING };
    class xn {
      constructor(e2) {
        this.events = [], this.recordingStartTime = 0, this.lastKnownPosition = { x: 0, y: 0 }, this.isRunning = false, this.pending = Promise.resolve();
        const t2 = e2.displayNum ?? 1;
        this.env = { DISPLAY: `:${t2}` }, this.scaler = new Cn(e2.resolution);
      }
      async start() {
        this.events = [], this.recordingStartTime = Date.now(), this.isRunning = true, this.pending = Promise.resolve();
        try {
          this.lastKnownPosition = await this.captureCurrentPosition();
        } catch {
          this.lastKnownPosition = { x: Math.floor(this.scaler.apiWidth / 2), y: Math.floor(this.scaler.apiHeight / 2) };
        }
      }
      logEvent(e2, t2, r2) {
        if (!this.isRunning) return;
        const n2 = { ...this.lastKnownPosition }, s2 = this.getExpectedPositionAfterAction(e2, n2);
        this.lastKnownPosition = s2;
        const o2 = async () => {
          let o3, i2;
          try {
            [o3, i2] = await Promise.all([this.captureCurrentPosition(), this.detectCursorType()]), this.lastKnownPosition = o3;
          } catch {
            o3 = s2, i2 = In.ARROW;
          }
          const a2 = { executionTimestampMs: r2 - this.recordingStartTime, action: e2, commandDurationMs: r2 - t2, positionBefore: n2, positionAfter: o3, cursorTypeAfter: i2 };
          this.events.push(a2);
        };
        this.pending = this.pending.then(() => o2()).catch(() => {
        });
      }
      async stop() {
        return this.isRunning = false, await this.pending, [...this.events];
      }
      getEvents() {
        return [...this.events];
      }
      getRecordingStartTime() {
        return this.recordingStartTime;
      }
      getIsRunning() {
        return this.isRunning;
      }
      async captureCurrentPosition() {
        const e2 = await _n("xdotool", ["getmouselocation", "--shell"], { env: this.env }), t2 = e2.match(/X=(\d+)/), r2 = e2.match(/Y=(\d+)/);
        if (!t2 || !r2) throw new Error(`Failed to parse cursor position: ${e2}`);
        const n2 = parseInt(t2[1], 10), s2 = parseInt(r2[1], 10);
        return this.scaler.displayToApi(n2, s2);
      }
      async detectCursorType() {
        try {
          const e2 = (await _n("xdotool", ["getmouselocation", "--shell"], { env: this.env })).match(/CURSOR=(\S+)/i);
          if (e2) {
            const t2 = e2[1].toLowerCase();
            return kn[t2] ?? In.ARROW;
          }
          try {
            const e3 = await _n("xprop", ["-root", "_XSERVER_CURSOR"], { env: this.env, timeoutMs: 500 });
            for (const [t2, r2] of Object.entries(kn)) if (e3.toLowerCase().includes(t2)) return r2;
          } catch {
          }
          return In.ARROW;
        } catch {
          return In.ARROW;
        }
      }
      getExpectedPositionAfterAction(e2, t2) {
        const r2 = e2.action;
        if (!r2) return t2;
        switch (r2.case) {
          case "mouseMove": {
            const e3 = r2.value.coordinate;
            if (e3) return { x: e3.x, y: e3.y };
            break;
          }
          case "click": {
            const e3 = r2.value.coordinate;
            if (e3) return { x: e3.x, y: e3.y };
            break;
          }
          case "drag": {
            const e3 = r2.value.path;
            if (e3.length > 0) {
              const t3 = e3[e3.length - 1];
              return { x: t3.x, y: t3.y };
            }
            break;
          }
          case "scroll": {
            const e3 = r2.value.coordinate;
            if (e3) return { x: e3.x, y: e3.y };
            break;
          }
        }
        return t2;
      }
    }
    (0, k.h)("computer-use-lazy");
    var Tn = r(77030), Rn = r(81958);
    class Bn extends Error {
      constructor(e2) {
        super(e2), this.name = "MacRPCProtocolError";
      }
    }
    const Pn = Rn.Ik({ rpcSocketPath: Rn.Yj().min(1).optional(), appControlSocketPath: Rn.Yj().min(1).optional() }).passthrough(), Jn = Rn.Ik({ data: Rn.Yj(), mimeType: Rn.Yj().min(1) }).strip(), Mn = Rn.Ik({ message: Rn.Yj(), screenshot: Jn.optional(), screenshotBefore: Jn.optional(), structuredContent: Rn.L5().optional(), isError: Rn.zM() }).strip(), qn = Rn.Ik({ accessibilityTrusted: Rn.zM(), screenRecordingGranted: Rn.zM() }).strip(), Dn = Rn.KC([Rn.Ik({ id: Rn.ai().int(), result: Mn, ok: Rn.Zm().optional(), error: Rn.Zm().optional(), errorCode: Rn.Zm().optional(), permissionStatus: Rn.Zm().optional(), sessionId: Rn.Zm().optional() }).strip(), Rn.Ik({ id: Rn.ai().int(), sessionId: Rn.Yj().min(1), ok: Rn.eu(true).optional(), result: Rn.Zm().optional(), error: Rn.Zm().optional(), errorCode: Rn.Zm().optional(), permissionStatus: Rn.Zm().optional() }).strip(), Rn.Ik({ id: Rn.ai().int(), ok: Rn.eu(true), result: Rn.Zm().optional(), error: Rn.Zm().optional(), errorCode: Rn.Zm().optional(), permissionStatus: Rn.Zm().optional(), sessionId: Rn.Zm().optional() }).strip(), Rn.Ik({ id: Rn.ai().int().nullable().optional(), error: Rn.Yj().min(1), errorCode: Rn.Yj().min(1).optional(), result: Rn.Zm().optional(), ok: Rn.Zm().optional(), permissionStatus: Rn.Zm().optional(), sessionId: Rn.Zm().optional() }).strip(), Rn.Ik({ id: Rn.ai().int(), permissionStatus: qn, result: Rn.Zm().optional(), ok: Rn.Zm().optional(), error: Rn.Zm().optional(), errorCode: Rn.Zm().optional(), sessionId: Rn.Zm().optional() }).strip()]);
    function On(e2, t2) {
      try {
        return JSON.parse(e2);
      } catch {
        throw new Bn(`local-cua ${t2} is not valid JSON`);
      }
    }
    const Nn = { responseMaxBytes: 33554432, parseServiceState(e2) {
      const t2 = Pn.safeParse(On(e2, "service state")), r2 = t2.success ? t2.data.rpcSocketPath ?? t2.data.appControlSocketPath : void 0;
      if (!t2.success || void 0 === r2) throw new Bn("local-cua service state is malformed");
      return { ...t2.data, rpcSocketPath: r2 };
    }, parseResponse({ line: e2, expectedID: t2 }) {
      const r2 = Dn.safeParse(On(e2.toString("utf8"), "RPC response"));
      if (!r2.success) throw new Bn("local-cua RPC response is malformed");
      if (void 0 !== r2.data.id && null !== r2.data.id && r2.data.id !== t2) throw new Bn("local-cua RPC response ID did not match");
      return r2.data;
    } };
    class Fn extends Error {
      constructor(e2, t2) {
        super(e2), this.name = "MacComputerUseRPCError", this.code = t2?.code, this.userFacing = true === t2?.userFacing, this.tool = t2?.tool;
      }
    }
    function Un(e2) {
      return "object" == typeof e2 && null !== e2 && "code" in e2 && "string" == typeof e2.code ? e2.code : e2 instanceof Error ? Ln(e2.message) ? e2.name : e2.message.length > 0 ? `${e2.name}: ${e2.message}` : e2.name : "unknown";
    }
    function Ln(e2) {
      return !!e2.includes(ge.homedir()) || (e2.includes("node_modules") || e2.includes("Application Support") || /\.wasm\b/.test(e2) || /(?:^|[\s'`"])(?:\/|\.{1,2}\/|[A-Za-z]:[\\/]|\\\\)/.test(e2));
    }
    class $n {
      constructor(e2) {
        this.mode = e2;
      }
      static isInstalled() {
        return !!(0, C.existsSync)($n.serviceExecutablePath()) || (0, C.existsSync)($n.serviceStatePath());
      }
      screenshot(e2) {
        return this.callTool(e2, "computer_use_screenshot", {});
      }
      click(e2, t2) {
        return this.callTool(e2, "computer_use_click", { method: "coordinate", ...void 0 !== t2.coordinate && { x: t2.coordinate.x, y: t2.coordinate.y }, button: t2.button, count: t2.count, modifier_keys: t2.modifierKeys });
      }
      scroll(e2, t2) {
        return this.callTool(e2, "computer_use_scroll", { x: t2.coordinate?.x, y: t2.coordinate?.y, direction: t2.direction, amount: t2.amount, modifier_keys: t2.modifierKeys });
      }
      move(e2, t2) {
        return this.callTool(e2, "computer_use_mouse_move", { x: t2.x, y: t2.y });
      }
      mouseButton(e2, t2) {
        return this.callTool(e2, "computer_use_mouse_button", { button: t2.button, action: t2.action });
      }
      drag(e2, t2) {
        return this.callTool(e2, "computer_use_drag", { button: t2.button, path: t2.path, modifier_keys: t2.modifierKeys });
      }
      typeText(e2, t2) {
        return this.callTool(e2, "computer_use_typing", { value: t2 });
      }
      pressKey(e2, t2) {
        return this.callTool(e2, "computer_use_press_key", { key: t2.key, hold_duration_ms: t2.holdDurationMs });
      }
      checkPermissions(e2) {
        return this.callTool(e2, "computer_use_check_permissions", {});
      }
      async startControl(e2) {
        if ("remote" !== this.mode || void 0 !== this.activeSessionId) return;
        $n.throwIfAborted(e2.signal);
        const t2 = (0, Ot.randomUUID)(), r2 = await this.sendWithRelaunchRetry(e2, () => ({ id: $n.requestID, method: "control/start", requestID: t2, mode: this.mode }), "control/start");
        if (void 0 !== r2.error) throw $n.rpcError(r2);
        if (void 0 === r2.sessionId) throw new Fn("local-cua control/start returned no session");
        this.activeSessionId = r2.sessionId;
      }
      async releaseControl(e2) {
        const t2 = this.activeSessionId;
        if (void 0 !== t2) {
          this.activeSessionId = void 0;
          try {
            const e3 = await $n.readServiceState();
            if (void 0 === e3) return;
            const r2 = await $n.sendOnce($n.socketPathFrom(e3), { id: $n.requestID, method: "control/release", requestID: (0, Ot.randomUUID)(), mode: this.mode, sessionId: t2 }, $n.defaultCallTimeoutMs);
            if (void 0 !== r2.error) throw $n.rpcError(r2);
          } catch (t3) {
            $n.logger.warn(e2, "local-cua control release failed", { error: Un(t3) });
          }
        }
      }
      async callTool(e2, t2, r2) {
        $n.throwIfAborted(e2.signal);
        const n2 = $n.defaultCallTimeoutMs, s2 = await this.sendWithRelaunchRetry(e2, () => {
          const e3 = Date.now() / 1e3, s3 = this.activeSessionId;
          return { id: $n.requestID, method: "tools/call", requestID: (0, Ot.randomUUID)(), name: t2, arguments: r2, timeoutSeconds: n2 / 1e3, startedAtEpochSeconds: e3, deadlineEpochSeconds: e3 + n2 / 1e3, mode: this.mode, ...void 0 !== s3 && { sessionId: s3 } };
        }, t2);
        if (void 0 !== s2.error) throw $n.rpcError(s2, t2);
        const o2 = s2.result;
        if (void 0 === o2) throw new Fn(`local-cua tool ${t2} returned no result`, { tool: t2 });
        if (o2.isError) {
          const e3 = o2.message.trim();
          throw new Fn(e3.length > 0 ? e3 : `local-cua tool ${t2} reported an error`, { tool: t2, userFacing: e3.length > 0 });
        }
        return o2;
      }
      async sendWithRelaunchRetry(e2, t2, r2) {
        const n2 = $n.defaultCallTimeoutMs, s2 = await this.ensureSocketPath(e2);
        $n.throwIfAborted(e2.signal);
        try {
          return await $n.sendOnce(s2, t2(), n2, e2.signal);
        } catch (s3) {
          if (!$n.isPreDeliveryConnectionError(s3)) throw s3;
          $n.logger.warn(e2, "local-cua callTool failed; relaunching and retrying", { tool: r2, error: $n.spawnErrorCode(s3) });
          const o2 = await this.ensureSocketPath(e2, true);
          return $n.throwIfAborted(e2.signal), void 0 !== this.activeSessionId && (this.activeSessionId = void 0, await this.startControl(e2)), await $n.sendOnce(o2, t2(), n2, e2.signal);
        }
      }
      static rpcError(e2, t2) {
        return new Fn(e2.error, { code: e2.errorCode, userFacing: true, tool: t2 });
      }
      async ensureSocketPath(e2, t2 = false) {
        if ($n.throwIfAborted(e2.signal), !t2) {
          const e3 = await $n.readServiceState();
          if (e3) return $n.socketPathFrom(e3);
        }
        await this.launchAndWait(e2);
        const r2 = await $n.readServiceState();
        if (!r2) throw new Fn("local-cua sidecar did not publish service.json after launch");
        return $n.socketPathFrom(r2);
      }
      async launchAndWait(e2) {
        const t2 = $n.serviceAppPath();
        $n.logger.info(e2, "launching local-cua sidecar", $n.sidecarLaunchLogFields(t2)), "1" === process.env[$n.directLaunchEnv] ? await $n.spawnSidecarProcess(e2, $n.serviceExecutablePath(), [], { detached: true }) : await $n.spawnSidecarProcess(e2, "/usr/bin/open", ["-g", t2]);
        const r2 = Date.now() + $n.launchReadyTimeoutMs;
        for (; Date.now() < r2; ) {
          $n.throwIfAborted(e2.signal);
          const t3 = await $n.readServiceState();
          if (t3) try {
            if ("ok" in await $n.sendOnce($n.socketPathFrom(t3), { id: $n.requestID, method: "ping" }, 2e3, e2.signal)) return;
          } catch {
          }
          await (0, be.cb)($n.launchPollIntervalMs);
        }
        throw new Fn("local-cua sidecar did not become ready in time");
      }
      static isPreDeliveryConnectionError(e2) {
        const t2 = Un(e2);
        return "ENOENT" === t2 || "ECONNREFUSED" === t2;
      }
      static appSupportDirectory() {
        const e2 = process.env[$n.appSupportOverrideEnv];
        return e2 && e2.length > 0 ? e2 : s.join(ge.homedir(), "Library", "Application Support", $n.appSupportFolder);
      }
      static serviceStatePath() {
        return s.join($n.appSupportDirectory(), "service.json");
      }
      static serviceAppPath() {
        const e2 = process.env[$n.serviceAppOverrideEnv];
        return e2 && e2.length > 0 ? e2 : s.join(ge.homedir(), ".cursor", "cursor-computer-use", `${$n.serviceAppBundleName}.app`);
      }
      static sidecarLaunchLogFields(e2) {
        const t2 = `${$n.serviceAppBundleName}.app`;
        return { appName: s.basename(e2) === t2 ? t2 : "custom", appPathHash: (0, Ot.createHash)("sha256").update(e2).digest("hex"), usingOverride: Boolean(process.env[$n.serviceAppOverrideEnv]) };
      }
      static spawnErrorCode(e2) {
        return Un(e2);
      }
      static socketError(e2) {
        const t2 = Un(e2);
        return new Fn(`local-cua RPC connection failed: ${t2}`, { code: t2 });
      }
      static serviceExecutablePath() {
        return s.join($n.serviceAppPath(), "Contents", "MacOS", "CUCursorService");
      }
      static spawnSidecarProcess(e2, t2, r2, n2) {
        return new Promise((s2, o2) => {
          const i2 = (0, dn.spawn)(t2, [...r2], { detached: true === n2?.detached, stdio: "ignore" }), a2 = (e3) => {
            o2(new Fn(`local-cua sidecar launch failed: ${$n.spawnErrorCode(e3)}`));
          };
          i2.once("error", a2), i2.once("spawn", () => {
            i2.removeListener("error", a2), i2.on("error", (t3) => {
              $n.logger.warn(e2, "local-cua sidecar process error after launch", { error: $n.spawnErrorCode(t3) });
            }), i2.unref(), s2();
          });
        });
      }
      static async readServiceState() {
        try {
          const e2 = await (0, n.readFile)($n.serviceStatePath(), "utf8");
          return Nn.parseServiceState(e2);
        } catch (e2) {
          if (e2 instanceof Error && "code" in e2 && "ENOENT" === e2.code) return;
          if (e2 instanceof Bn) return;
          throw new Fn("local-cua service state could not be read");
        }
      }
      static socketPathFrom(e2) {
        return e2.rpcSocketPath;
      }
      static abortError(e2) {
        return e2.reason instanceof Error ? e2.reason : new Fn("local-cua RPC aborted");
      }
      static throwIfAborted(e2) {
        if (e2.aborted) throw $n.abortError(e2);
      }
      static sendOnce(e2, t2, r2, n2) {
        return n2?.aborted ? Promise.reject($n.abortError(n2)) : new Promise((s2, o2) => {
          let i2 = false, a2 = [], c2 = 0, l2 = false;
          const u2 = (0, Tn.createConnection)({ path: e2 }), d2 = (e3) => {
            i2 || (i2 = true, clearTimeout(m2), n2?.removeEventListener("abort", p2), u2.destroy(), e3());
          }, p2 = () => {
            d2(() => o2(void 0 === n2 ? new Fn("local-cua RPC aborted") : $n.abortError(n2)));
          }, m2 = setTimeout(() => {
            d2(() => o2(new Fn(`local-cua RPC timed out after ${r2}ms`)));
          }, r2);
          n2?.addEventListener("abort", p2, { once: true }), n2?.aborted ? p2() : (u2.on("connect", () => {
            u2.write(`${JSON.stringify(t2)}
`, (e3) => {
              null == e3 ? l2 = true : d2(() => o2($n.socketError(e3)));
            });
          }), u2.on("data", (e3) => {
            const t3 = e3.indexOf(10), r3 = c2 + (t3 < 0 ? e3.length : t3);
            if (r3 > Nn.responseMaxBytes) return void d2(() => o2(new Fn("local-cua RPC response exceeded the size limit")));
            if (t3 < 0) return a2.push(e3), void (c2 += e3.length);
            a2.push(e3.subarray(0, t3));
            const n3 = Buffer.concat(a2, r3);
            a2 = [], c2 = 0;
            try {
              const e4 = Nn.parseResponse({ line: n3, expectedID: $n.requestID });
              d2(() => s2(e4));
            } catch (e4) {
              d2(() => o2(e4));
            }
          }), u2.on("error", (e3) => {
            d2(l2 ? () => o2(new Fn("local-cua RPC connection failed after request delivery")) : () => o2($n.socketError(e3)));
          }), u2.on("close", () => {
            const e3 = c2 > 0 ? "local-cua RPC response ended without a newline" : l2 ? "local-cua RPC connection closed after request delivery" : "local-cua RPC connection closed";
            d2(() => o2(new Fn(e3)));
          }));
        });
      }
    }
    $n.logger = (0, k.h)("local-cua:rpc"), $n.serviceAppBundleName = "Cursor Computer Use", $n.appSupportFolder = "cursor-computer-use", $n.appSupportOverrideEnv = "CUA_APP_SUPPORT_DIR", $n.serviceAppOverrideEnv = "CUA_SERVICE_APP", $n.directLaunchEnv = "CUA_DIRECT_LAUNCH", $n.defaultCallTimeoutMs = 45e3, $n.launchReadyTimeoutMs = 8e3, $n.launchPollIntervalMs = 200, $n.requestID = 1;
    var Qn = r(5393), jn = r(98995), Gn = r.t(jn, 2), Hn = r(73136);
    const zn = "mac-webp-runtime.cjs";
    const Wn = () => {
      const e2 = Error.prepareStackTrace;
      try {
        Error.prepareStackTrace = (e4, t3) => t3;
        const e3 = new Error().stack, t2 = Array.isArray(e3) ? e3[0]?.getFileName() : void 0;
        return (function() {
          const e4 = Gn, t3 = e4.createRequire ?? e4.default?.createRequire;
          if ("function" != typeof t3) throw new Error("node:module createRequire is unavailable");
          return t3;
        })()("string" == typeof t2 && t2.length > 0 ? t2 : (0, s.join)(process.cwd(), "package.json"));
      } finally {
        Error.prepareStackTrace = e2;
      }
    };
    let Vn;
    function Kn() {
      return Vn ??= Wn(), Vn;
    }
    const Yn = "__MAC_WEBP_IMPORT__";
    function Zn(e2) {
      return e2.startsWith("file:") ? (0, Hn.fileURLToPath)(e2) : e2;
    }
    function Xn() {
      const e2 = [], t2 = /* @__PURE__ */ new Set(), r2 = (r3) => {
        t2.has(r3) || (t2.add(r3), e2.push(r3));
      };
      for (const e3 of (function() {
        const e4 = Error.prepareStackTrace;
        try {
          Error.prepareStackTrace = (e6, t4) => t4;
          const e5 = new Error().stack;
          if (!Array.isArray(e5)) return [];
          const t3 = [];
          for (const r3 of e5) {
            const e6 = r3.getFileName();
            "string" == typeof e6 && e6.length > 0 && t3.push(e6);
          }
          return t3;
        } finally {
          Error.prepareStackTrace = e4;
        }
      })()) {
        const t3 = (0, s.dirname)(Zn(e3));
        r2((0, s.join)(t3, zn)), r2((0, s.join)(t3, "..", "..", "src", "computer-use", zn));
      }
      "string" == typeof process.argv[1] && process.argv[1].length > 0 && r2((0, s.join)((0, s.dirname)(process.argv[1]), zn)), r2((0, s.join)(process.cwd(), "src", "computer-use", zn)), r2((0, s.join)(process.cwd(), "computer-use", zn));
      try {
        const e3 = (0, s.dirname)(Kn().resolve("@anysphere/local-exec/package.json"));
        r2((0, s.join)(e3, "src", "computer-use", zn)), r2((0, s.join)(e3, "dist", "computer-use", zn));
      } catch {
      }
      for (const t3 of e2) try {
        const e3 = Kn()(t3);
        if ("function" == typeof e3.importFile) return e3.importFile.bind(e3);
      } catch {
      }
      throw new Error("mac-webp runtime importer was not found next to the bundle");
    }
    let es;
    function ts() {
      const e2 = globalThis[Yn];
      return "function" == typeof e2 ? e2 : (es ??= Xn(), es);
    }
    function rs(...e2) {
      return t2 = ["@jsquash", "webp", ...e2].join("/"), Kn().resolve(t2);
      var t2;
    }
    const ns = [["decode.js"], ["utils.js"], ["meta.js"], ["codec", "dec", "webp_dec.js"], ["codec", "dec", "webp_dec.wasm"], ["codec", "enc", "webp_enc.js"], ["codec", "enc", "webp_enc.wasm"]];
    async function ss(...e2) {
      return await (t2 = (0, Hn.pathToFileURL)(rs(...e2)).href, ts()(t2));
      var t2;
    }
    const os = (e2) => {
      let t2;
      return () => {
        if (void 0 === t2) {
          const r2 = e2();
          r2.catch(() => {
            t2 === r2 && (t2 = void 0);
          }), t2 = r2;
        }
        return t2;
      };
    }, is = os(async () => {
      const e2 = await ss("decode.js");
      return await e2.init({ wasmBinary: await C.promises.readFile(rs("codec", "dec", "webp_dec.wasm")) }), e2;
    }), as = os(async () => {
      const [e2, t2, r2] = await Promise.all([ss("utils.js"), ss("meta.js"), ss("codec", "enc", "webp_enc.js")]);
      return { module: await e2.initEmscriptenModule(r2.default, void 0, { wasmBinary: await C.promises.readFile(rs("codec", "enc", "webp_enc.wasm")) }), defaultOptions: t2.defaultOptions };
    }), cs = async (e2) => {
      const t2 = await is(), r2 = await t2.default(e2);
      return { data: new Uint8Array(r2.data.buffer, r2.data.byteOffset, r2.data.byteLength), width: r2.width, height: r2.height };
    }, ls = async (e2, t2) => {
      const { module: r2, defaultOptions: n2 } = await as(), s2 = new Uint8ClampedArray(e2.data.buffer, e2.data.byteOffset, e2.data.byteLength);
      return Buffer.from(r2.encode(s2, e2.width, e2.height, { ...n2, ...t2 }));
    }, us = "image/png", ds = { async normalize(e2) {
      if (e2.mimeType !== us) throw new Error(`Mac screenshot must be ${us}, received ${e2.mimeType}`);
      const t2 = await (0, Qn.I)(), r2 = await t2.read(Buffer.from(e2.data, "base64"));
      var n2;
      return (await (n2 = { data: r2.bitmap.data, width: r2.bitmap.width, height: r2.bitmap.height }, ls(n2, { lossless: 1, exact: 1 }))).toString("base64");
    } };
    class ps {
      constructor({ ctx: e2, actions: t2, sidecar: r2 }) {
        this.startTime = Date.now(), this.geometryPrimed = false, this.actionCount = 0, this.hasCompletedActuation = false, this.staleAfterWait = false, this.ctx = e2, this.actions = t2, this.sidecar = r2;
      }
      async execute() {
        const e2 = this.actions.some((e3) => ps.isInputAction(e3.action.case));
        try {
          this.throwIfAborted(), e2 && await this.sidecar.startControl(this.ctx);
          for (const e3 of this.actions) {
            this.throwIfAborted();
            const t3 = e3.action;
            if (void 0 === t3.case) throw new Error("Computer use action case is undefined");
            switch (this.actionCount += 1, t3.case) {
              case "screenshot":
              case "cursorPosition":
                await this.captureScreen();
                break;
              case "click":
                void 0 !== t3.value.coordinate && await this.ensureGeometryCached(), this.recordActuation(await this.sidecar.click(this.ctx, { coordinate: t3.value.coordinate, button: ps.mouseButtonName(t3.value.button), count: t3.value.count > 0 ? t3.value.count : 1, modifierKeys: t3.value.modifierKeys }), t3.value.coordinate);
                break;
              case "scroll":
                void 0 !== t3.value.coordinate && await this.ensureGeometryCached(), this.recordActuation(await this.sidecar.scroll(this.ctx, { coordinate: t3.value.coordinate, direction: ps.scrollDirectionName(t3.value.direction), amount: t3.value.amount > 0 ? t3.value.amount : 3, modifierKeys: t3.value.modifierKeys }), t3.value.coordinate);
                break;
              case "mouseMove":
                if (void 0 === t3.value.coordinate) throw new Error("MouseMoveAction requires coordinate");
                await this.ensureGeometryCached(), this.recordActuation(await this.sidecar.move(this.ctx, { x: t3.value.coordinate.x, y: t3.value.coordinate.y }), t3.value.coordinate);
                break;
              case "mouseDown":
                this.recordActuation(await this.sidecar.mouseButton(this.ctx, { button: ps.mouseButtonName(t3.value.button), action: "down" }));
                break;
              case "mouseUp":
                this.recordActuation(await this.sidecar.mouseButton(this.ctx, { button: ps.mouseButtonName(t3.value.button), action: "up" }));
                break;
              case "drag": {
                const e4 = t3.value.path.map((e5) => ({ x: e5.x, y: e5.y }));
                await this.ensureGeometryCached(), this.recordActuation(await this.sidecar.drag(this.ctx, { button: ps.mouseButtonName(t3.value.button), path: e4, modifierKeys: t3.value.modifierKeys }), e4.at(-1));
                break;
              }
              case "type":
                this.recordActuation(await this.sidecar.typeText(this.ctx, t3.value.text));
                break;
              case "key":
                if (t3.value.stroke === un.EB.DOWN || t3.value.stroke === un.EB.UP) throw new Error("Held keys (KeyAction.stroke DOWN/UP) are not supported by the macOS computer-use sidecar; use hold_duration_ms");
                this.recordActuation(await this.sidecar.pressKey(this.ctx, { key: t3.value.key, holdDurationMs: t3.value.holdDurationMs }));
                break;
              case "wait":
                await this.delay(Math.max(0, t3.value.durationMs)), this.staleAfterWait = true;
                break;
              default: {
                const e4 = t3;
                throw new Error(`Unknown computer use action: ${JSON.stringify(e4)}`);
              }
            }
          }
          this.throwIfAborted(), (void 0 === this.screenshot || this.staleAfterWait) && await this.captureScreen(), this.throwIfAborted();
          const t2 = await this.normalizeRetainedScreenshots();
          return t2.screenshotFailed && !this.hasCompletedActuation ? this.screenshotUnavailableResult(t2.failureReason) : (this.throwIfAborted(), new un.ks({ result: { case: "success", value: new un.Wd({ actionCount: this.actionCount, durationMs: Date.now() - this.startTime, screenshot: t2.screenshot, cursorPosition: this.cursor, log: t2.screenshotFailed ? "Screenshot unavailable" : void 0 }) } }));
        } catch (e3) {
          return this.ctx.signal.aborted ? this.abortedResult() : this.errorResult(e3);
        } finally {
          e2 && await this.sidecar.releaseControl(this.ctx);
        }
      }
      static isInputAction(e2) {
        switch (e2) {
          case "click":
          case "scroll":
          case "mouseMove":
          case "mouseDown":
          case "mouseUp":
          case "drag":
          case "type":
          case "key":
            return true;
          default:
            return false;
        }
      }
      async captureScreen() {
        const e2 = await this.sidecar.screenshot(this.ctx);
        this.screenshot = e2.screenshot, this.cursor = ps.cursorFromResult(e2) ?? this.cursor, this.geometryPrimed = true, this.staleAfterWait = false;
      }
      async ensureGeometryCached() {
        this.geometryPrimed || await this.captureScreen();
      }
      recordActuation(e2, t2) {
        this.screenshot = e2.screenshot, this.hasCompletedActuation = true, this.staleAfterWait = false, void 0 !== e2.screenshot && (this.geometryPrimed = true), this.cursor = ps.cursorFromResult(e2) ?? ps.coordinateFromPoint(t2) ?? this.cursor;
      }
      async errorResult(e2) {
        let t2;
        if (ps.logger.error(this.ctx, "local-cua execute failed", void 0, { error: Un(e2) }), !(function(e3) {
          return e3 instanceof Fn && ("computer_use_screenshot" === e3.tool || "permission_required" === e3.code);
        })(e2)) try {
          const e3 = await this.sidecar.screenshot(this.ctx);
          t2 = (await this.normalizeScreenshot(e3.screenshot, "error")).data;
        } catch (e3) {
          ps.logger.warn(this.ctx, "local-cua error screenshot capture failed", { error: Un(e3) });
        }
        const r2 = (function(e3) {
          if (e3 instanceof Fn && e3.userFacing && e3.message.trim().length > 0 && !Ln(e3.message)) return e3.message.trim();
        })(e2);
        return new un.ks({ result: { case: "error", value: new un.Jb({ error: void 0 === r2 ? "Computer use failed" : `Computer use failed: ${r2}`, actionCount: this.actionCount, durationMs: Date.now() - this.startTime, screenshot: t2 }) } });
      }
      screenshotUnavailableResult(e2) {
        return new un.ks({ result: { case: "error", value: new un.Jb({ error: "Screenshot unavailable", actionCount: this.actionCount, durationMs: Date.now() - this.startTime, log: e2 }) } });
      }
      abortedResult() {
        return new un.ks({ result: { case: "error", value: new un.Jb({ error: "Computer use aborted", actionCount: this.actionCount, durationMs: Date.now() - this.startTime }) } });
      }
      static mouseButtonName(e2) {
        return ps.mouseButtonNames[e2] ?? "left";
      }
      static scrollDirectionName(e2) {
        return ps.scrollDirectionNames[e2] ?? "down";
      }
      async normalizeRetainedScreenshots() {
        const e2 = await this.normalizeScreenshot(this.screenshot, "post-action");
        return { screenshot: e2.data, screenshotFailed: void 0 === this.screenshot || e2.failed, failureReason: void 0 === this.screenshot ? "sidecar returned no image" : e2.reason };
      }
      async normalizeScreenshot(e2, t2) {
        if (void 0 === e2) return { failed: false };
        try {
          return { data: await ds.normalize(e2), failed: false };
        } catch (r2) {
          const n2 = Un(r2);
          return ps.logger.error(this.ctx, "local-cua screenshot conversion failed", void 0, { frame: t2, error: n2 }), "image/png" === e2.mimeType && e2.data.length > 0 ? { data: e2.data, failed: false } : { failed: true, reason: n2 };
        }
      }
      static coordinateFromPoint(e2) {
        if (void 0 !== e2 && Number.isFinite(e2.x) && Number.isFinite(e2.y)) return new un.xp({ x: Math.round(e2.x), y: Math.round(e2.y) });
      }
      static cursorFromResult(e2) {
        const t2 = e2.structuredContent;
        if ("object" != typeof t2 || null === t2 || !("cursor" in t2)) return;
        const r2 = t2.cursor;
        return "object" == typeof r2 && null !== r2 && "x" in r2 && "y" in r2 && "number" == typeof r2.x && "number" == typeof r2.y && Number.isFinite(r2.x) && Number.isFinite(r2.y) ? new un.xp({ x: Math.round(r2.x), y: Math.round(r2.y) }) : void 0;
      }
      throwIfAborted() {
        if (this.ctx.signal.aborted) throw this.ctx.signal.reason ?? new Error("Computer use aborted");
      }
      delay(e2) {
        return this.throwIfAborted(), new Promise((t2, r2) => {
          const n2 = () => {
            clearTimeout(s2), r2(this.ctx.signal.reason ?? new Error("Computer use aborted"));
          }, s2 = setTimeout(() => {
            this.ctx.signal.removeEventListener("abort", n2), t2();
          }, e2);
          this.ctx.signal.addEventListener("abort", n2, { once: true }), this.ctx.signal.aborted && n2();
        });
      }
    }
    ps.logger = (0, k.h)("local-cua:actions"), ps.mouseButtonNames = { [un.w3.UNSPECIFIED]: "left", [un.w3.LEFT]: "left", [un.w3.RIGHT]: "right", [un.w3.MIDDLE]: "middle", [un.w3.BACK]: "left", [un.w3.FORWARD]: "left" }, ps.scrollDirectionNames = { [un.Dh.UNSPECIFIED]: "down", [un.Dh.UP]: "up", [un.Dh.DOWN]: "down", [un.Dh.LEFT]: "left", [un.Dh.RIGHT]: "right" };
    s.join("Contents", "MacOS", "CUCursorService");
    var ms = r(19260);
    const hs = 1048576, fs = 52428800;
    var gs;
    !(function(e2) {
      e2.Write = "write", e2.Read = "read", e2.Shell = "shell", e2.Delete = "delete", e2.Mcp = "mcp";
    })(gs || (gs = {}));
    var ys = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, ws = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class vs {
      constructor(e2, t2, r2, n2, s2) {
        this.pendingDecisionProvider = e2, this.fileChangeTracker = t2, this.permissionsService = r2, this.workspacePath = n2, this.onDeleteForAiTracking = s2;
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          ys(r2, (0, x.VI)(e2.withName("LocalDeleteExecutor.execute")), false);
          const s2 = t2.path, o2 = (0, M.o1)(s2, this.workspacePath), i2 = await this.permissionsService.shouldBlockWrite(e2, o2, "");
          if (i2) {
            const e3 = await Ze(i2, { onNeedsApproval: async (e4, t3) => null, onUserRejected: (e4) => new ms.Pi({ result: { case: "rejected", value: new ms.iq({ path: o2, reason: e4 || "" }) } }), onPermissionDenied: (e4, t3) => new ms.Pi({ result: { case: "permissionDenied", value: new ms.QG({ path: o2, clientVisibleError: e4, isReadonly: t3?.isReadonly ?? false }) } }) });
            if (null !== e3) return e3;
          }
          const a2 = await this.pendingDecisionProvider.requestApproval({ type: gs.Delete, details: { path: o2 }, toolCallId: t2.toolCallId });
          if (!a2.approved) return new ms.Pi({ result: { case: "rejected", value: new ms.iq({ path: o2, reason: a2.reason || "" }) } });
          let c2;
          try {
            c2 = await (0, n.stat)(o2);
          } catch (e3) {
            return "ENOENT" === e3.code ? new ms.Pi({ result: { case: "fileNotFound", value: new ms.n0({ path: o2 }) } }) : new ms.Pi({ result: { case: "error", value: new ms.GU({ path: o2, error: e3.message }) } });
          }
          if (!c2.isFile()) {
            const e3 = c2.isDirectory() ? "directory" : "other";
            return new ms.Pi({ result: { case: "notFile", value: new ms.LX({ path: o2, actualType: e3 }) } });
          }
          const l2 = c2.size;
          let u2;
          if (l2 <= fs) try {
            u2 = await (0, Ee.yR)(o2);
          } catch {
          }
          const d2 = u2 ?? "";
          try {
            await (0, n.unlink)(o2);
          } catch (e3) {
            return "EACCES" === e3.code ? new ms.Pi({ result: { case: "permissionDenied", value: new ms.QG({ path: o2, clientVisibleError: "Permission denied" }) } }) : "EBUSY" === e3.code ? new ms.Pi({ result: { case: "fileBusy", value: new ms.vX({ path: o2 }) } }) : new ms.Pi({ result: { case: "error", value: new ms.GU({ path: o2, error: e3.message }) } });
          }
          if (this.fileChangeTracker && void 0 !== u2) {
            const e3 = t2.toolCallId ? { toolCallId: t2.toolCallId } : void 0;
            await this.fileChangeTracker.trackChange(o2, u2, void 0, e3);
          }
          return this.onDeleteForAiTracking && this.onDeleteForAiTracking({ path: o2 }).catch(() => {
          }), new ms.Pi({ result: { case: "success", value: new ms.fl({ path: o2, deletedFile: o2, fileSize: BigInt(l2), prevContent: d2 }) } });
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          ws(r2);
        }
      }
    }
    var _s = r(34175);
    var As = r(31489), Ss = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, bs = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class Es {
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          Ss(r2, (0, x.VI)(e2.withName("LocalFetchExecutor.execute")), false);
          const n2 = t2.url;
          try {
            const e3 = await fetch(n2), t3 = await e3.text(), r3 = e3.headers.get("content-type") || "text/plain";
            return new As.uN({ result: { case: "success", value: new As.Uk({ url: n2, content: t3, statusCode: e3.status, contentType: r3 }) } });
          } catch (e3) {
            return new As.uN({ result: { case: "error", value: new As.fk({ url: n2, error: e3.message }) } });
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          bs(r2);
        }
      }
    }
    class Is {
      constructor(e2) {
        this.workspacePath = e2, this.changes = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Set();
      }
      subscribe(e2) {
        return this.listeners.add(e2), () => {
          this.listeners.delete(e2);
        };
      }
      notify(e2) {
        for (const t2 of this.listeners) t2(e2);
      }
      async trackChange(e2, t2, r2, n2) {
        const s2 = this.changes.get(e2);
        if (s2) {
          const t3 = s2.before, o2 = n2 || s2.metadata;
          if (t3 === r2 || void 0 === t3 && void 0 === r2) this.changes.delete(e2), this.notify();
          else {
            const n3 = { path: e2, before: t3, after: r2, metadata: o2 };
            this.changes.set(e2, n3), this.notify(n3);
          }
        } else {
          const s3 = { path: e2, before: t2, after: r2, metadata: n2 };
          this.changes.set(e2, s3), this.notify(s3);
        }
      }
      getChanges() {
        return Array.from(this.changes.values());
      }
      getChange(e2) {
        return this.changes.get(e2);
      }
      hasChange(e2) {
        return this.changes.has(e2);
      }
      accept(e2) {
        const t2 = this.changes.get(e2);
        this.changes.delete(e2), this.notify(t2);
      }
      acceptAll() {
        this.changes.clear(), this.notify();
      }
      async reject(e2) {
        const t2 = this.changes.get(e2);
        if (t2) try {
          void 0 === t2.before && void 0 !== t2.after ? await (0, n.unlink)(e2) : (void 0 !== t2.before && void 0 === t2.after || void 0 !== t2.before && void 0 !== t2.after) && await (0, Ee.x3)(e2, t2.before, this.workspacePath);
        } catch {
        } finally {
          this.changes.delete(e2), this.notify(t2);
        }
      }
      async rejectAll() {
        const e2 = Array.from(this.changes.keys());
        await Promise.all(e2.map((e3) => this.reject(e3)));
      }
      clear() {
        const e2 = this.changes.values().next().value;
        this.changes.clear(), this.notify(e2);
      }
      get size() {
        return this.changes.size;
      }
      dispose() {
        this.changes.clear(), this.listeners.clear();
      }
    }
    "function" == typeof SuppressedError && SuppressedError;
    var Cs = r(59903);
    const ks = -(2 ** 31), xs = 2 ** 31 - 1;
    function Ts(e2) {
      return Number.isNaN(e2) ? 0 : e2 < ks ? ks : e2 > xs ? xs : e2;
    }
    function Rs(e2) {
      if ("number" == typeof e2 && Number.isFinite(e2) && !(e2 < 0)) return Ts(Math.trunc(e2));
    }
    const Bs = 0, Ps = 13, Js = 45, Ms = 48, qs = 57, Ds = 58;
    class Os {
      constructor() {
        this.lineEnd = 0, this.nextStart = 0;
      }
    }
    function Ns(e2, t2, r2) {
      const n2 = e2.length;
      if (t2 >= n2) return false;
      const s2 = e2.indexOf("\n", t2);
      if (-1 !== s2) {
        for (let n4 = t2; n4 < s2; n4++) if (e2.charCodeAt(n4) === Ps && n4 + 1 !== s2) return r2.lineEnd = n4, r2.nextStart = n4 + 1, true;
        const n3 = s2 > t2 && e2.charCodeAt(s2 - 1) === Ps;
        return r2.lineEnd = n3 ? s2 - 1 : s2, r2.nextStart = s2 + 1, true;
      }
      const o2 = e2.indexOf("\r", t2);
      return -1 !== o2 ? (r2.lineEnd = o2, r2.nextStart = o2 + 1, true) : (r2.lineEnd = n2, r2.nextStart = n2, true);
    }
    function Fs(e2, t2, r2) {
      return r2 - t2 === 2 && e2.charCodeAt(t2) === Js && e2.charCodeAt(t2 + 1) === Js;
    }
    var Us = r(82142), Ls = r(77099), $s = r(11197), Qs = r(64500), js = r(78780), Gs = r(80738), Hs = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, zs = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const Ws = (0, ln.Pu)("mcp.filesystem.divergence", { description: "Divergence detected between MCP lease state and filesystem state", labelNames: ["divergence_type", "mcp_source", "configured_servers", "mcp_version"] }), Vs = (0, ln.Pu)("mcp.filesystem.sync_check", { description: "MCP filesystem sync check executed", labelNames: ["synced", "mcp_source", "configured_servers", "mcp_version"] }), Ks = (0, ln.wt)("mcp.filesystem.sync_check.expected_servers", { description: "Number of expected MCP servers at last sync check", labelNames: ["mcp_source", "mcp_version"] }), Ys = (0, ln.wt)("mcp.filesystem.sync_check.actual_servers", { description: "Number of actual MCP servers on disk at last sync check", labelNames: ["mcp_source", "mcp_version"] }), Zs = (0, ln.wt)("mcp.filesystem.sync_check.servers_missing", { description: "Number of expected MCP servers missing from disk at last sync check", labelNames: ["mcp_source", "mcp_version"] }), Xs = (0, ln.wt)("mcp.filesystem.sync_check.tool_mismatches", { description: "Number of MCP servers with tool count mismatches at last sync check", labelNames: ["mcp_source", "mcp_version"] }), eo = (0, k.h)("McpFileSystemWriter"), to = "mcpFsStructuredLogOptIn";
    function ro(e2, t2) {
      return t2?.includeStructuredLogs ? { ...e2 ?? {}, [to]: true } : e2;
    }
    const no = { debug(e2, t2, r2, n2) {
      eo.debug(e2, t2, ro(r2, n2));
    }, info(e2, t2, r2, n2) {
      eo.info(e2, t2, ro(r2, n2));
    }, warn(e2, t2, r2, n2) {
      eo.warn(e2, t2, ro(r2, n2));
    }, error(e2, t2, r2, n2, s2) {
      eo.error(e2, t2, r2, ro(n2, s2));
    } }, so = "mcps", oo = "tools", io = "~staging", ao = "~prev", co = "mcp_auth", lo = "Authenticate this MCP server so its tools can be used. Call this tool through your MCP tool-calling interface when STATUS.md indicates this server needs authentication.", uo = "# >>> CURSOR MANAGED BLOCK >>>", po = "# <<< CURSOR MANAGED BLOCK <<<", mo = ["# Ignore everything in .cursor", "*", "# Un-ignore projects so we can descend to allowlisted subdirs", "!projects/", "projects/*", "!projects/*/", "projects/*/*", "# MCP tool descriptors, resources, prompts", "!projects/*/mcps/", "!projects/*/mcps/**", "# Agent transcripts for citation", "!projects/*/agent-transcripts/", "!projects/*/agent-transcripts/**", "# Terminal output files", "!projects/*/terminals/", "!projects/*/terminals/**", "# Conversation notes (shared scratchpad)", "!projects/*/agent-notes/", "!projects/*/agent-notes/**", "# Large tool output files", "!projects/*/agent-tools/", "!projects/*/agent-tools/**", "# Plugin cache (rules, skills, agents)", "!plugins/", "!plugins/**", "# Built-in Cursor skills", "!skills-cursor/", "!skills-cursor/**", "# User's personal skills", "!skills/", "!skills/**", "# User's personal slash commands", "!commands/", "!commands/**", "# User's plan files", "!plans/", "!plans/**", "# Subagent state/transcripts", "!subagents/", "!subagents/**", "# User-level cursor rules", "!rules/", "!rules/**"].join("\n");
    function ho(e2, t2, r2 = 15e3) {
      let n2;
      return Promise.race([e2.catch(() => t2), new Promise((e3) => {
        n2 = setTimeout(() => e3(t2), r2);
      })]).finally(() => clearTimeout(n2));
    }
    function fo(e2) {
      return e2.replace(/[^a-zA-Z0-9_-]/g, "_");
    }
    function go(e2) {
      if (void 0 === e2) return;
      const t2 = e2.trim();
      return t2.length > 0 ? t2 : void 0;
    }
    function yo(e2) {
      return { clientKey: e2.serverIdentifier, providerIdentifier: e2.serverName, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId, toolName: co, name: co, description: e2.authToolDescription, inputSchema: { type: "object", properties: {}, additionalProperties: false } };
    }
    function wo(e2) {
      switch (e2.kind) {
        case "loading":
          return "initializing";
        case "requires_authentication":
          return "needsAuth";
        case "ready":
          return "connected";
        case "error":
          return "error";
        default:
          return "disconnected";
      }
    }
    function vo(e2) {
      if (Array.isArray(e2)) return e2.map((e3) => vo(e3));
      if (null !== e2 && "object" == typeof e2) {
        const t2 = Object.entries(e2).filter(([, e3]) => void 0 !== e3).sort(([e3], [t3]) => e3 < t3 ? -1 : e3 > t3 ? 1 : 0).map(([e3, t3]) => [e3, vo(t3)]);
        return Object.fromEntries(t2);
      }
      return e2;
    }
    function _o(e2) {
      return JSON.stringify(vo(e2));
    }
    function Ao(e2) {
      const t2 = e2.map((e3) => ({ value: e3, key: _o(e3) }));
      return t2.sort((e3, t3) => e3.key < t3.key ? -1 : e3.key > t3.key ? 1 : 0), t2.map((e3) => e3.value);
    }
    function So(e2) {
      const t2 = Ao(e2.tools.map((e3) => ({ name: e3.toolName, description: e3.description, inputSchema: e3.inputSchema, outputSchema: e3.outputSchema }))), r2 = Ao(e2.resources.map((e3) => ({ uri: e3.uri, name: e3.name, description: e3.description, mimeType: e3.mimeType }))), n2 = Ao(e2.prompts.map((e3) => ({ name: e3.name, description: e3.description, arguments: e3.arguments })));
      return _o({ id: e2.serverIdentifier, name: e2.serverName, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId, tools: t2, resources: r2, prompts: n2, instructions: e2.instructions, status: e2.status });
    }
    class bo {
      constructor(e2, t2, r2) {
        this.cachedFingerprints = /* @__PURE__ */ new Map(), this.disposed = false, this.hasPendingLeaseChangeEvent = false, this.lastDivergenceCheckMs = 0, this.mcpLease = e2, this.projectDir = t2, this.debounceMs = r2?.debounceMs ?? 100, this.mcpAuthCopyOverrides = r2?.mcpAuthCopyOverrides, this.exposeVirtualMcpAuthTool = r2?.exposeVirtualMcpAuthTool ?? true, this.alwaysExposeVirtualMcpAuthTool = r2?.alwaysExposeVirtualMcpAuthTool ?? false, this.snapshotProvider = r2?.snapshotProvider, this.mcpVersion = r2?.mcpVersion ?? (this.snapshotProvider ? "snapshots" : "v1"), this.onDidWrite = r2?.onDidWrite, this.ctx = this.getContext(r2?.loggerBackend), this.startupCleanupPromise = this.cleanupStaleStagingDirs(this.ctx), this.leaseChangeDisposable = this.mcpLease.onDidChange((e3) => {
          no.info(this.ctx, "Lease change event received", { serverIdentifiers: e3?.serverIdentifiers, reason: e3?.reason }), this.onLeaseChanged(this.ctx, e3);
        }), no.info(this.ctx, "Constructor: scheduling initial write"), this.scheduleWrite(this.ctx), this.ensureCursorDirGitignore();
      }
      ensureCursorDirGitignore() {
        (async function(e2) {
          const t2 = (0, s.join)(e2, ".gitignore"), r2 = `${uo}
${mo}
${po}
`;
          let o2;
          await (0, n.mkdir)(e2, { recursive: true });
          try {
            o2 = await (0, n.readFile)(t2, "utf-8");
          } catch (e3) {
            if ("ENOENT" !== e3?.code) throw e3;
          }
          if (void 0 === o2) return void await (0, n.writeFile)(t2, r2);
          const i2 = o2.indexOf(uo), a2 = o2.indexOf(po, i2 + 30);
          if (-1 !== i2 && -1 !== a2) {
            const e3 = `${o2.slice(0, i2)}${r2}${o2.slice(a2 + 30).replace(/^\n/, "")}`;
            return void (e3 !== o2 && await (0, n.writeFile)(t2, e3));
          }
          await (0, n.writeFile)(t2, r2);
        })((0, s.join)((0, ge.homedir)(), ".cursor")).catch((e2) => {
          no.warn(this.ctx, "Failed to ensure ~/.cursor/.gitignore", e2);
        });
      }
      async cleanupStaleStagingDirs(e2) {
        const t2 = this.getLogContext(e2), r2 = (0, s.join)(this.projectDir, so);
        try {
          const e3 = await (0, n.readdir)(r2);
          await Promise.allSettled(e3.filter((e4) => e4.endsWith(io)).map((e4) => (0, n.rm)((0, s.join)(r2, e4), { recursive: true, force: true })));
        } catch (e3) {
          "ENOENT" !== e3?.code && no.error(t2, "Error clearing stale mcps staging dirs", e3);
        }
      }
      onLeaseChanged(e2, t2) {
        if (this.disposed) return;
        const r2 = t2 ?? { serverIdentifiers: void 0 };
        this.hasPendingLeaseChangeEvent ? this.pendingLeaseChangeEvent = (0, m.sfj)(this.pendingLeaseChangeEvent ?? { serverIdentifiers: void 0 }, r2) : (this.pendingLeaseChangeEvent = r2, this.hasPendingLeaseChangeEvent = true), void 0 !== this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(() => {
          this.debounceTimer = void 0;
          const t3 = this.takePendingLeaseChangeEvent();
          this.scheduleWrite(e2, t3);
        }, this.debounceMs);
      }
      takePendingLeaseChangeEvent() {
        if (!this.hasPendingLeaseChangeEvent) return;
        const e2 = this.pendingLeaseChangeEvent ?? { serverIdentifiers: void 0 };
        return this.pendingLeaseChangeEvent = void 0, this.hasPendingLeaseChangeEvent = false, e2;
      }
      scheduleWrite(e2, t2) {
        const r2 = this.getLogContext(e2);
        if (this.disposed) return;
        const n2 = this.writePromise;
        this.writePromise = (async () => {
          if (n2) try {
            await n2;
          } catch (e3) {
            no.error(r2, "Error waiting for previous write", e3);
          }
          this.disposed || (await this.startupCleanupPromise, this.disposed || await this.fetchAndWrite(e2, t2));
        })();
      }
      getContext(e2) {
        let t2 = (0, ye.q6)();
        return e2 && (t2 = t2.with(k._O, e2)), t2;
      }
      getLogContext(e2) {
        return e2.with(k._O, this.ctx.get(k._O));
      }
      getMetricTags(e2) {
        return { ...e2, mcp_version: this.mcpVersion };
      }
      getMcpAuthToolDescription() {
        return go(this.mcpAuthCopyOverrides?.authToolDescription) ?? lo;
      }
      shouldExposeVirtualMcpAuthToolForStatus(e2, t2) {
        return this.exposeVirtualMcpAuthTool && (0, m.N1y)(e2) && (this.alwaysExposeVirtualMcpAuthTool || "needsAuth" === t2);
      }
      getErrorStatusMessage() {
        return go(this.mcpAuthCopyOverrides?.errorStatusMessage) ?? "The MCP server errored. If this server is important for completing the task, concisely inform the user and ask them to check the MCP status in Cursor's Customize page > MCPs; otherwise continue with a different approach.";
      }
      getNeedsAuthStatusMessage(e2) {
        return (function(e3, t2) {
          return e3.replace(/\{serverIdentifier\}/g, t2.serverIdentifier).replace(/\{authToolName\}/g, t2.authToolName);
        })(go(this.mcpAuthCopyOverrides?.needsAuthStatusMessageWithAuthTool) ?? 'The MCP server needs authentication. Authenticate it by calling the `{authToolName}` tool for server "{serverIdentifier}" through your MCP tool-calling interface using an empty arguments object. If this server is important for completing the task, authenticate it first; otherwise continue with a different approach.', { serverIdentifier: e2, authToolName: co });
      }
      getNeedsAuthStatusMessageForWrite(e2) {
        return this.exposeVirtualMcpAuthTool && (0, m.N1y)(e2) ? this.getNeedsAuthStatusMessage(e2) : go(this.mcpAuthCopyOverrides?.needsAuthStatusMessageWithoutVirtualTool) ?? "This MCP server requires authentication before its tools can be used. Open Cursor's Customize page > MCPs, select this server, and use Authenticate/Reopen, or refresh credentials in your MCP configuration (for example mcp.json), then restart this environment. If this server is not required for the task, continue without it.";
      }
      async getToolsForServers(e2, t2) {
        if (0 === t2.length) return [];
        const r2 = this.getLogContext(e2);
        try {
          return await this.mcpLease.getToolsForServers(e2, t2);
        } catch (n2) {
          no.warn(r2, `getToolsForServers() threw, falling back to filtered getTools(): ${n2}`);
          const s2 = await this.mcpLease.getTools(e2).catch((e3) => (no.warn(r2, `getTools() threw during scoped-tool fallback, defaulting to []: ${e3}`), [])), o2 = new Set(t2);
          return s2.filter((e3) => o2.has(e3.clientKey));
        }
      }
      async fetchClientDataForServer(e2, t2, r2, n2) {
        const s2 = await ho(r2.getState(e2), { kind: "error" }).then((r3) => ("error" !== r3.kind || "message" in r3 || no.warn(e2, `getState() timed out for "${t2}", defaulting to error`), r3)), o2 = "ready" === s2.kind || "requires_authentication" === s2.kind, [i2, a2, c2] = await Promise.all([o2 ? ho(r2.listResources(e2), { resources: [] }) : Promise.resolve({ resources: [] }), o2 ? ho(r2.listPrompts(e2), []) : Promise.resolve([]), o2 && n2?.fetchInstructions ? ho(r2.getInstructions(e2), void 0) : Promise.resolve(void 0)]);
        return { clientKey: t2, serverName: r2.serverName, plugin: r2.plugin, marketplace: r2.marketplace, pluginId: r2.pluginId, marketplaceId: r2.marketplaceId, resources: i2.resources.map((e3) => ({ ...e3, serverIdentifier: t2, serverName: r2.serverName })), prompts: a2.map((e3) => ({ ...e3, serverIdentifier: t2, serverName: r2.serverName })), instructions: c2, status: wo(s2) };
      }
      buildServerDataMap(e2, t2, r2) {
        const n2 = /* @__PURE__ */ new Map();
        for (const e3 of t2) {
          const t3 = Ro(e3.clientKey);
          n2.set(e3.clientKey, { serverIdentifier: e3.clientKey, serverName: e3.serverName, plugin: e3.plugin, marketplace: e3.marketplace, pluginId: e3.pluginId, marketplaceId: e3.marketplaceId, sanitizedId: t3, folderPath: (0, s.join)(this.projectDir, so, t3), tools: [], resources: e3.resources, prompts: e3.prompts, instructions: e3.instructions, status: e3.status });
        }
        for (const t3 of e2) {
          let e3 = n2.get(t3.clientKey);
          if (!e3) {
            const r3 = Ro(t3.clientKey);
            e3 = { serverIdentifier: t3.clientKey, serverName: t3.providerIdentifier, plugin: t3.plugin, marketplace: t3.marketplace, pluginId: t3.pluginId, marketplaceId: t3.marketplaceId, sanitizedId: r3, folderPath: (0, s.join)(this.projectDir, so, r3), tools: [], resources: [], prompts: [], instructions: void 0, status: void 0 }, n2.set(t3.clientKey, e3);
          }
          e3.tools.push(t3);
        }
        if (void 0 !== r2) for (const e3 of r2) {
          const t3 = e3.serverIdentifier?.trim();
          let r3 = t3 ? Array.from(n2.values()).find((e4) => e4.serverIdentifier === t3) : void 0;
          if (!r3) {
            const t4 = e3.serverName?.trim();
            r3 = t4 ? Array.from(n2.values()).find((e4) => e4.serverName === t4) : void 0;
          }
          r3 && (e3.instructions && (r3.instructions = e3.instructions));
        }
        if (this.exposeVirtualMcpAuthTool) for (const e3 of n2.values()) {
          if (!this.shouldExposeVirtualMcpAuthToolForStatus(e3.serverIdentifier, e3.status)) continue;
          e3.tools.some((e4) => e4.toolName === co) || e3.tools.push(yo({ serverIdentifier: e3.serverIdentifier, serverName: e3.serverName, plugin: e3.plugin, marketplace: e3.marketplace, pluginId: e3.pluginId, marketplaceId: e3.marketplaceId, authToolDescription: this.getMcpAuthToolDescription() }));
        }
        return n2;
      }
      buildServersToWrite(e2, t2) {
        const r2 = [], n2 = /* @__PURE__ */ new Set();
        for (const s2 of t2.values()) {
          const t3 = s2.tools.length > 0 || s2.resources.length > 0 || s2.prompts.length > 0 || s2.instructions, o2 = "error" === s2.status || "needsAuth" === s2.status || "initializing" === s2.status;
          t3 || o2 ? n2.has(s2.sanitizedId) ? no.warn(e2, `Skipping server "${s2.serverIdentifier}" — sanitizedId "${s2.sanitizedId}" collides with another server`) : (n2.add(s2.sanitizedId), r2.push(s2)) : no.info(e2, `Server "${s2.serverIdentifier}" excluded from write: tools=${s2.tools.length}, resources=${s2.resources.length}, prompts=${s2.prompts.length}, hasInstructions=${!!s2.instructions}, status=${s2.status}`);
        }
        return r2;
      }
      mergeScopedRefreshWithCachedServerData(e2, t2) {
        const r2 = [...t2.tools];
        if (this.shouldExposeVirtualMcpAuthToolForStatus(e2.serverIdentifier, e2.status) && !r2.some((e3) => e3.toolName === co)) {
          const t3 = e2.tools.find((e3) => e3.toolName === co);
          void 0 !== t3 && r2.push(t3);
        }
        return { ...e2, ...t2, tools: r2, resources: e2.resources, prompts: e2.prompts, instructions: e2.instructions, status: e2.status, plugin: t2.plugin ?? e2.plugin, marketplace: t2.marketplace ?? e2.marketplace, pluginId: t2.pluginId ?? e2.pluginId, marketplaceId: t2.marketplaceId ?? e2.marketplaceId };
      }
      async refreshServersFromLease(e2, t2) {
        const r2 = this.getLogContext(e2), n2 = [...new Set(t2.serverIdentifiers ?? [])];
        no.info(r2, `fetchAndWrite: refreshing ${n2.length} targeted servers`, { serverIdentifiers: n2 });
        const s2 = await this.getToolsForServers(e2, n2), o2 = await this.mcpLease.getInstructions(e2).catch((e3) => (no.warn(r2, `getInstructions() threw during scoped refresh, defaulting to []: ${e3}`), [])), i2 = await Promise.all(n2.map(async (t3) => {
          try {
            const r3 = await this.mcpLease.getClient(e2, t3);
            return void 0 === r3 ? { serverIdentifier: t3, kind: "missing" } : { serverIdentifier: t3, kind: "client", client: r3 };
          } catch (e3) {
            return no.warn(r2, `getClient("${t3}") threw during scoped refresh, preserving cached data: ${e3}`), { serverIdentifier: t3, kind: "error", error: e3 };
          }
        })), a2 = i2.filter((e3) => "missing" === e3.kind).map((e3) => e3.serverIdentifier);
        let c2 = /* @__PURE__ */ new Set();
        if (a2.length > 0) {
          const t3 = await this.mcpLease.getClients(e2).catch((e3) => {
            no.warn(r2, `getClients() threw while confirming targeted server removal, preserving cached data: ${e3}`);
          });
          void 0 !== t3 && (c2 = new Set(a2.filter((e3) => void 0 === t3[e3])));
        }
        const l2 = await Promise.all(i2.filter((e3) => "client" === e3.kind).map(({ serverIdentifier: t3, client: r3 }) => this.fetchClientDataForServer(e2, t3, r3, { fetchInstructions: true }))), u2 = new Map((this.cachedServerData ?? []).map((e3) => [e3.serverIdentifier, e3])), d2 = this.buildServerDataMap(s2, l2, o2), p2 = new Set(n2), m2 = new Set(i2.filter((e3) => "error" === e3.kind || "missing" === e3.kind && !c2.has(e3.serverIdentifier)).map((e3) => e3.serverIdentifier));
        for (const e3 of n2) {
          const t3 = u2.get(e3), n3 = d2.get(e3);
          if (void 0 === n3) c2.has(e3) ? u2.delete(e3) : no.warn(r2, `refreshServersFromLease: preserving cached data for "${e3}" because targeted refresh returned no replacement`);
          else {
            if (m2.has(e3) && void 0 !== t3) {
              u2.set(e3, this.mergeScopedRefreshWithCachedServerData(t3, n3)), no.warn(r2, `refreshServersFromLease: preserving cached metadata for "${e3}" because the client was unavailable during targeted refresh`);
              continue;
            }
            u2.set(e3, n3);
          }
        }
        const h2 = new Map(Array.from(u2.values()).map((e3) => [e3.sanitizedId, e3.serverIdentifier]));
        for (const [e3, t3] of this.cachedFingerprints) if (!p2.has(e3) && !u2.has(e3)) {
          const t4 = Ro(e3);
          h2.set(t4, e3);
        }
        const f2 = this.buildServersToWrite(e2, u2);
        await this.writeServerData(e2, f2, h2), this.cachedServerData = f2, this.fireOnDidWrite(f2);
      }
      async fetchAndWrite(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          Hs(r2, (0, x.VI)(e2.withName("McpFileSystemWriter.fetchAndWrite")), false);
          const n2 = this.getLogContext(e2);
          try {
            if (void 0 !== this.cachedServerData && void 0 !== t2 && !(0, m._1u)(t2)) {
              if ([...new Set(t2.serverIdentifiers ?? [])].length > 0) return void await this.refreshServersFromLease(e2, t2);
            }
            const [r3, s2, o2] = await Promise.all([this.mcpLease.getTools(e2).catch((e3) => (no.warn(n2, `getTools() threw, defaulting to []: ${e3}`), [])), this.mcpLease.getInstructions(e2).catch(() => []), this.mcpLease.getClients(e2).catch((e3) => (no.warn(n2, `getClients() threw, defaulting to {}: ${e3}`), {}))]), i2 = Object.keys(o2);
            no.info(n2, `fetchAndWrite: lease returned ${r3.length} tools across ${i2.length} clients`);
            const a2 = Object.entries(o2).map(([t3, r4]) => this.fetchClientDataForServer(e2, t3, r4)), c2 = await Promise.all(a2), l2 = this.buildServerDataMap(r3, c2, s2), u2 = this.buildServersToWrite(e2, l2), d2 = new Map(Array.from(l2.values()).map((e3) => [e3.sanitizedId, e3.serverIdentifier]));
            await this.writeServerData(e2, u2, d2), this.cachedServerData = u2, this.fireOnDidWrite(u2);
          } catch (e3) {
            no.error(n2, "Error fetching/writing MCP state", e3);
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          zs(r2);
        }
      }
      fireOnDidWrite(e2) {
        if (this.onDidWrite) try {
          const t2 = e2.map((e3) => ({ serverIdentifier: e3.serverIdentifier, folderPath: e3.folderPath, tools: e3.tools.map((t3) => ({ toolName: t3.toolName, definitionPath: (0, s.join)(e3.folderPath, oo, `${fo(t3.toolName)}.json`) })) }));
          this.onDidWrite(t2);
        } catch {
        }
      }
      async writeServerData(e2, t2, r2) {
        const o2 = { stack: [], error: void 0, hasError: false };
        try {
          Hs(o2, (0, x.VI)(e2.withName("McpFileSystemWriter.writeServerData")), false);
          const i2 = this.getLogContext(e2), a2 = (0, s.join)(this.projectDir, so);
          await (0, n.mkdir)(a2, { recursive: true });
          const c2 = /* @__PURE__ */ new Map();
          for (const e3 of t2) try {
            c2.set(e3.serverIdentifier, So(e3));
          } catch (t3) {
            no.error(i2, "Error computing server fingerprint, will force write", t3, { serverIdentifier: e3.serverIdentifier }), c2.set(e3.serverIdentifier, `__error_${Date.now()}_${Math.random()}`);
          }
          const l2 = [];
          for (const e3 of t2) {
            const t3 = this.cachedFingerprints.get(e3.serverIdentifier);
            t3 !== c2.get(e3.serverIdentifier) && (l2.push(e3), void 0 !== t3 && no.info(i2, `Server "${e3.serverIdentifier}" fingerprint changed: tools=${e3.tools.length}, status=${e3.status}`));
          }
          for (const e3 of t2) if (!l2.includes(e3)) try {
            await (0, n.stat)((0, s.join)(a2, e3.sanitizedId));
          } catch {
            no.info(i2, `Server "${e3.serverIdentifier}" directory missing on disk, forcing write`), l2.push(e3);
          }
          const u2 = /* @__PURE__ */ new Set();
          for (const [e3] of this.cachedFingerprints) if (!c2.has(e3)) {
            const t3 = this.cachedServerData?.find((t4) => t4.serverIdentifier === e3), n2 = t3?.sanitizedId ?? Ro(e3);
            r2.has(n2) ? (no.info(i2, `Server "${e3}" (sanitized="${n2}") still in lease but excluded from write, preserving directory`), c2.set(e3, this.cachedFingerprints.get(e3))) : (no.info(i2, `Server "${e3}" (sanitized="${n2}") left the lease, scheduling directory removal`), u2.add(n2));
          }
          const d2 = void 0 === this.cachedServerData;
          if (d2) try {
            const e3 = await (0, n.readdir)(a2), t3 = new Set(e3.filter((e4) => !e4.endsWith(io) && !e4.endsWith(ao)));
            for (const r3 of e3) if (r3.endsWith(io)) await (0, n.rm)((0, s.join)(a2, r3), { recursive: true, force: true });
            else if (r3.endsWith(ao)) {
              const e4 = r3.slice(0, -5);
              if (t3.has(e4)) await (0, n.rm)((0, s.join)(a2, r3), { recursive: true, force: true });
              else try {
                await (0, n.rename)((0, s.join)(a2, r3), (0, s.join)(a2, e4)), t3.add(e4);
              } catch {
                await (0, n.rm)((0, s.join)(a2, r3), { recursive: true, force: true }).catch(() => {
                });
              }
            }
            for (const e4 of t3) if (r2.has(e4)) {
              const t4 = r2.get(e4);
              c2.has(t4) || c2.set(t4, `__preserved_${e4}`);
            } else u2.add(e4);
          } catch (e3) {
            no.error(i2, "Error clearing mcps directory", e3);
          }
          const p2 = Array.from(u2);
          if (l2.length > 0 || u2.size > 0) {
            const e3 = l2.map((e4) => ({ serverIdentifier: e4.serverIdentifier, sanitizedId: e4.sanitizedId, toolCount: e4.tools.length }));
            no.info(i2, `Incremental write: ${l2.length} changed, ${u2.size} removed, ${t2.length - l2.length} unchanged`, { changedServerCount: l2.length, changedServers: e3, removedServerCount: u2.size, removedServerSanitizedIds: p2, unchangedServerCount: t2.length - l2.length, totalServerCount: t2.length, leaseServerCount: r2.size, coldStartReconcile: d2, projectDirHash: (0, Ot.createHash)("sha256").update(this.projectDir).digest("hex") }, { includeStructuredLogs: true });
          }
          const m2 = await Promise.allSettled(l2.map((t3) => this.writeServerAtomic(e2, t3, a2)));
          for (let t3 = 0; t3 < l2.length; t3++) {
            const r3 = m2[t3];
            if ("rejected" === r3.status) {
              const n2 = l2[t3], s2 = this.cachedFingerprints.get(n2.serverIdentifier);
              void 0 !== s2 ? c2.set(n2.serverIdentifier, s2) : c2.delete(n2.serverIdentifier), no.error(e2, "Error writing server directory", r3.reason, { serverIdentifier: n2.serverIdentifier, sanitizedId: n2.sanitizedId }, { includeStructuredLogs: true });
            }
          }
          const h2 = await Promise.allSettled(p2.map((e3) => (0, n.rm)((0, s.join)(a2, e3), { recursive: true, force: true })));
          for (let r3 = 0; r3 < h2.length; r3++) {
            const n2 = h2[r3];
            if ("rejected" === n2.status) {
              const s2 = p2[r3];
              no.error(e2, "Error removing server directory", n2.reason, { sanitizedId: s2, removalIndex: r3, removalAttemptCount: h2.length, removedServerCount: p2.length, removedServerSanitizedIds: p2, changedServerCount: l2.length, unchangedServerCount: t2.length - l2.length, totalServerCount: t2.length }, { includeStructuredLogs: true });
            }
          }
          this.cachedFingerprints = c2;
        } catch (e3) {
          o2.error = e3, o2.hasError = true;
        } finally {
          zs(o2);
        }
      }
      async writeServerAtomic(e2, t2, r2) {
        const o2 = { stack: [], error: void 0, hasError: false };
        try {
          Hs(o2, (0, x.VI)(e2.withName("McpFileSystemWriter.writeServerAtomic")), false);
          const i2 = `${t2.sanitizedId}${io}`, a2 = `${t2.sanitizedId}${ao}`, c2 = (0, s.join)(r2, i2), l2 = (0, s.join)(r2, a2), u2 = (0, s.join)(r2, t2.sanitizedId);
          await (0, n.rm)(c2, { recursive: true, force: true });
          try {
            await (0, n.rename)(l2, u2);
          } catch {
            await (0, n.rm)(l2, { recursive: true, force: true });
          }
          await this.writeServerDirectory(e2, t2, { basePath: r2, dirName: i2 });
          try {
            try {
              await (0, n.rename)(u2, l2);
            } catch {
            }
            await (0, n.rename)(c2, u2);
          } catch (r3) {
            no.error(e2, "Per-server swap failed", r3, { serverIdentifier: t2.serverIdentifier, sanitizedId: t2.sanitizedId }, { includeStructuredLogs: true });
            try {
              await (0, n.rename)(l2, u2);
            } catch {
            }
            throw await (0, n.rm)(c2, { recursive: true, force: true }), r3;
          }
          await (0, n.rm)(l2, { recursive: true, force: true }).catch(() => {
          });
        } catch (e3) {
          o2.error = e3, o2.hasError = true;
        } finally {
          zs(o2);
        }
      }
      async writeServerDirectory(e2, t2, r2) {
        const o2 = { stack: [], error: void 0, hasError: false };
        try {
          Hs(o2, (0, x.VI)(e2.withName("McpFileSystemWriter.writeServerDirectory")), false);
          const i2 = (0, s.join)(r2.basePath, r2.dirName ?? t2.sanitizedId);
          if (await (0, n.mkdir)(i2, { recursive: true }), t2.tools.length > 0) {
            const e3 = (0, s.join)(i2, oo);
            await (0, n.mkdir)(e3, { recursive: true });
            for (const r3 of t2.tools) {
              const t3 = fo(r3.toolName), o3 = (0, s.join)(e3, `${t3}.json`), i3 = (0, m.kUN)(r3);
              await (0, n.writeFile)(o3, JSON.stringify(i3, null, 2));
            }
          }
          if (t2.resources.length > 0) {
            const e3 = (0, s.join)(i2, "resources");
            await (0, n.mkdir)(e3, { recursive: true });
            for (const r3 of t2.resources) {
              const t3 = fo(r3.name || r3.uri.replace(/[^a-zA-Z0-9_-]/g, "_")), o3 = (0, s.join)(e3, `${t3}.json`), i3 = { uri: r3.uri, name: r3.name, description: r3.description, mimeType: r3.mimeType };
              await (0, n.writeFile)(o3, JSON.stringify(i3, null, 2));
            }
          }
          if (t2.prompts.length > 0) {
            const e3 = (0, s.join)(i2, "prompts");
            await (0, n.mkdir)(e3, { recursive: true });
            for (const r3 of t2.prompts) {
              const t3 = fo(r3.name), o3 = (0, s.join)(e3, `${t3}.json`), i3 = { name: r3.name, description: r3.description, arguments: r3.arguments };
              await (0, n.writeFile)(o3, JSON.stringify(i3, null, 2));
            }
          }
          if (t2.instructions && t2.instructions.trim().length > 0) {
            const e3 = (0, s.join)(i2, "INSTRUCTIONS.md");
            await (0, n.writeFile)(e3, t2.instructions.trim());
          }
          if ("error" === t2.status || "needsAuth" === t2.status) {
            const e3 = (0, s.join)(i2, "STATUS.md"), r3 = "error" === t2.status ? this.getErrorStatusMessage() : this.getNeedsAuthStatusMessageForWrite(t2.serverIdentifier);
            await (0, n.writeFile)(e3, r3);
          }
          const a2 = (0, s.join)(i2, "SERVER_METADATA.json"), c2 = { serverIdentifier: t2.serverIdentifier, serverName: t2.serverName };
          await (0, n.writeFile)(a2, JSON.stringify(c2, null, 2));
        } catch (e3) {
          o2.error = e3, o2.hasError = true;
        } finally {
          zs(o2);
        }
      }
      async getMcpFileSystemOptions(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          if (this.disposed) return;
          Hs(r2, (0, x.VI)(e2.withName("McpFileSystemWriter.getMcpFileSystemOptions")), false);
          const n2 = this.getLogContext(e2), o2 = await this.ensureWritesSettled(e2, t2?.timeoutMs);
          if (this.snapshotProvider && !o2) return this.buildOptionsFromSnapshots(e2);
          this.snapshotProvider && o2 && no.warn(n2, "Snapshot mode write barrier timed out; falling back to cached descriptors", { timeoutMs: t2?.timeoutMs }, { includeStructuredLogs: true });
          const i2 = (this.cachedServerData ?? []).map((e3) => {
            const t3 = e3.tools.map((t4) => {
              const r3 = fo(t4.toolName), n3 = (0, s.join)(e3.folderPath, oo, `${r3}.json`);
              return new _s.E$({ toolName: t4.toolName, definitionPath: n3, ...(0, Gs.hT)(t4.annotations) });
            });
            return new _s.UC({ serverIdentifier: e3.serverIdentifier, serverName: e3.serverName, plugin: e3.plugin, marketplace: e3.marketplace, pluginDbId: e3.pluginId, marketplaceId: e3.marketplaceId, folderPath: e3.folderPath, serverUseInstructions: e3.instructions, tools: t3 });
          });
          return this.checkDescriptorsVsFilesystem(e2, i2, "workbench_lease"), new _s.Is({ enabled: true, workspaceProjectDir: this.projectDir, mcpDescriptors: i2 });
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          zs(r2);
        }
      }
      async ensureWritesSettled(e2, t2) {
        const r2 = this.getLogContext(e2), n2 = void 0 !== this.debounceTimer;
        if (void 0 !== this.debounceTimer && (clearTimeout(this.debounceTimer), this.debounceTimer = void 0, this.scheduleWrite(e2, this.takePendingLeaseChangeEvent())), n2 && no.info(r2, "getMcpFileSystemOptions force-fired pending debounce"), !this.writePromise) return false;
        if (void 0 !== t2) {
          let e3, n3 = false;
          try {
            await Promise.race([this.writePromise, new Promise((r3) => {
              e3 = setTimeout(() => {
                n3 = true, r3();
              }, t2);
            })]);
          } catch (e4) {
            no.error(r2, "Error waiting for pending write to complete", e4);
          } finally {
            clearTimeout(e3);
          }
          return n3 && no.warn(r2, `getMcpFileSystemOptions timed out after ${t2}ms waiting for write; returning stale cache`), n3;
        }
        try {
          await this.writePromise;
        } catch (e3) {
          no.error(r2, "Error waiting for pending write to complete", e3);
        }
        return false;
      }
      async buildOptionsFromSnapshots(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          Hs(t2, (0, x.VI)(e2.withName("McpFileSystemWriter.buildOptionsFromSnapshots")), false);
          const r2 = this.getLogContext(e2), n2 = Date.now(), o2 = await this.snapshotProvider.getAllSnapshots(e2), i2 = (0, s.join)(this.projectDir, so), a2 = o2.filter((e3) => e3.tools.length > 0 || e3.resources.length > 0 || e3.prompts.length > 0 || void 0 !== e3.instructions || this.shouldExposeVirtualMcpAuthToolForStatus(e3.serverIdentifier, e3.status) || "needsAuth" === e3.status || "error" === e3.status).map((e3) => {
            const t3 = Ro(e3.serverIdentifier), r3 = (0, s.join)(i2, t3), n3 = e3.tools.map((e4) => {
              const t4 = fo(e4.name);
              return new _s.E$({ toolName: e4.name, definitionPath: (0, s.join)(r3, oo, `${t4}.json`), ...(0, Gs.hT)(e4.annotations) });
            });
            if (this.shouldExposeVirtualMcpAuthToolForStatus(e3.serverIdentifier, e3.status) && !e3.tools.some((e4) => e4.name === co)) {
              const e4 = fo(co);
              n3.push(new _s.E$({ toolName: co, definitionPath: (0, s.join)(r3, oo, `${e4}.json`) }));
            }
            return new _s.UC({ serverIdentifier: e3.serverIdentifier, serverName: e3.serverName, plugin: e3.plugin, marketplace: e3.marketplace, pluginDbId: e3.pluginId, marketplaceId: e3.marketplaceId, folderPath: r3, serverUseInstructions: e3.instructions, tools: n3 });
          }), c2 = a2.reduce((e3, t3) => e3 + t3.tools.length, 0);
          return no.info(r2, `buildOptionsFromSnapshots completed in ${Date.now() - n2}ms: ${o2.length} snapshots, ${a2.length} descriptors, ${c2} tools`), this.checkDescriptorsVsFilesystem(e2, a2, "snapshot"), new _s.Is({ enabled: true, workspaceProjectDir: this.projectDir, mcpDescriptors: a2 });
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          zs(t2);
        }
      }
      async waitForPendingWrites() {
        if (void 0 !== this.debounceTimer && await new Promise((e2) => {
          const t2 = () => {
            void 0 === this.debounceTimer ? e2() : setTimeout(t2, 10);
          };
          t2();
        }), this.writePromise) try {
          await this.writePromise;
        } catch {
        }
      }
      getCachedServerData() {
        return this.cachedServerData;
      }
      checkDescriptorsVsFilesystem(e2, t2, r2) {
        const n2 = this.getLogContext(e2), s2 = Date.now();
        s2 - this.lastDivergenceCheckMs < bo.DIVERGENCE_CHECK_COOLDOWN_MS || (this.lastDivergenceCheckMs = s2, this._checkDescriptorsVsFilesystemAsync(e2, t2, r2).catch((e3) => {
          no.warn(n2, "Divergence check failed", e3);
        }));
      }
      async _checkDescriptorsVsFilesystemAsync(e2, t2, r2) {
        const o2 = this.getLogContext(e2), i2 = (0, s.join)(this.projectDir, so), a2 = /* @__PURE__ */ new Set(), c2 = /* @__PURE__ */ new Map();
        for (const e3 of t2) {
          const t3 = Ro(e3.serverIdentifier);
          a2.add(t3), c2.set(t3, e3.tools.length);
        }
        let l2 = [];
        try {
          l2 = await (0, n.readdir)(i2), l2 = l2.filter((e3) => !e3.endsWith(io) && !e3.endsWith(ao));
        } catch (e3) {
          if ("ENOENT" !== e3?.code) throw e3;
        }
        const u2 = new Set(l2);
        let d2 = true, p2 = 0, m2 = 0, h2 = 0;
        const f2 = (function(e3) {
          return 0 === e3 ? "0" : e3 <= 3 ? "1-3" : e3 <= 6 ? "4-6" : e3 <= 10 ? "7-10" : "11+";
        })(a2.size);
        for (const t3 of a2) u2.has(t3) || (d2 = false, p2++, Ws.increment(e2, 1, this.getMetricTags({ divergence_type: "server_missing", mcp_source: r2, configured_servers: f2 })), no.warn(o2, "Divergence detected: server missing from filesystem", { mcpFileSystemMeta: { divergenceType: "server_missing", serverId: t3, source: r2, configuredServers: a2.size, configuredServersBucket: f2 } }, { includeStructuredLogs: true }));
        for (const t3 of u2) a2.has(t3) || (d2 = false, m2++, Ws.increment(e2, 1, this.getMetricTags({ divergence_type: "server_stale", mcp_source: r2, configured_servers: f2 })));
        for (const t3 of a2) {
          if (!u2.has(t3)) continue;
          const l3 = c2.get(t3) ?? 0, p3 = (0, s.join)(i2, t3, oo);
          let m3 = 0;
          try {
            m3 = (await (0, n.readdir)(p3)).filter((e3) => e3.endsWith(".json")).length;
          } catch {
          }
          m3 !== l3 && (d2 = false, h2++, Ws.increment(e2, 1, this.getMetricTags({ divergence_type: "tool_count_mismatch", mcp_source: r2, configured_servers: f2 })), no.warn(o2, "Divergence detected: tool count mismatch", { mcpFileSystemMeta: { divergenceType: "tool_count_mismatch", serverId: t3, expected: l3, actual: m3, source: r2, configuredServers: a2.size, configuredServersBucket: f2 } }, { includeStructuredLogs: true }));
        }
        Vs.increment(e2, 1, this.getMetricTags({ synced: String(d2), mcp_source: r2, configured_servers: f2 })), Ks.gauge(e2, a2.size, this.getMetricTags({ mcp_source: r2 })), Ys.gauge(e2, u2.size, this.getMetricTags({ mcp_source: r2 })), Zs.gauge(e2, p2, this.getMetricTags({ mcp_source: r2 })), Xs.gauge(e2, h2, this.getMetricTags({ mcp_source: r2 })), no.info(o2, "MCP filesystem sync check", { mcpFileSystemMeta: { synced: d2, expectedServers: a2.size, actualServers: u2.size, serversMissing: p2, serversStale: m2, toolMismatches: h2, source: r2, configuredServers: a2.size, configuredServersBucket: f2 } }, { includeStructuredLogs: true }), d2 || no.warn(o2, "MCP filesystem divergence summary", { mcpFileSystemMeta: { synced: d2, expectedServers: a2.size, actualServers: u2.size, serversMissing: p2, serversStale: m2, toolMismatches: h2, source: r2, configuredServers: a2.size, configuredServersBucket: f2 } }, { includeStructuredLogs: true });
      }
      dispose() {
        this.disposed || (this.disposed = true, void 0 !== this.debounceTimer && (clearTimeout(this.debounceTimer), this.debounceTimer = void 0), this.leaseChangeDisposable && (this.leaseChangeDisposable.dispose(), this.leaseChangeDisposable = void 0), this.cachedServerData = void 0, this.cachedFingerprints.clear());
      }
    }
    bo.DIVERGENCE_CHECK_COOLDOWN_MS = 1e4;
    var Eo = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Io = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const Co = (0, k.h)("local-exec:mcp");
    function ko(e2, t2) {
      const r2 = s.relative(e2, t2);
      return "" === r2 || !s.isAbsolute(r2) && ".." !== r2 && !r2.startsWith(`..${s.sep}`);
    }
    function xo(e2) {
      return e2 instanceof Error && "code" in e2 && "string" == typeof e2.code ? e2.code : void 0;
    }
    function To(e2) {
      return new $s._Z({ content: { case: "text", value: new $s.zN({ text: e2 }) } });
    }
    function Ro(e2) {
      const t2 = e2.replace(/\s/g, "_").replace(/[^a-zA-Z0-9_.-]/g, "").replace(/\.+/g, ".");
      return "." === t2 || ".." === t2 ? t2.replace(/\./g, "_") : 0 === t2.length ? "_" : t2;
    }
    class Bo {
      constructor(e2, t2, r2, n2, s2 = Us.g4, o2, i2) {
        this.toolSet = e2, this.permissionsService = t2, this.pendingDecisionProvider = r2, this.projectDir = n2, this.fileOutputThresholdBytes = s2, this.elicitationFactory = o2, this.ensureMcpServersLoaded = i2;
      }
      async describeDisconnectedServer(e2, t2) {
        const r2 = new Set(t2.filter((e3) => "" !== e3));
        if (0 === r2.size) return;
        let n2;
        try {
          n2 = await this.toolSet.getClients(e2);
        } catch {
          return;
        }
        const s2 = Object.entries(n2).find(([e3, t3]) => r2.has(e3) || r2.has(t3.serverName));
        if (void 0 === s2) return;
        const [o2, i2] = s2;
        let a2;
        try {
          a2 = await i2.getState(e2);
        } catch {
          return;
        }
        if ("ready" === a2.kind) return;
        const c2 = (0, m.ggl)((0, m.Lxn)(a2));
        if (void 0 === c2) return;
        return `MCP server "${o2}" has no callable tools right now. ${c2}${"error" === a2.kind && a2.message ? ` (${a2.message})` : ""}`;
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = Eo(r2, (0, x.VI)(e2.withName("LocalMcpToolExecutor.execute")), false).ctx, i2 = t2.serverIdentifier || t2.providerIdentifier;
          await this.ensureMcpServersLoaded?.(o2, [i2]);
          const a2 = await this.toolSet.getTools(o2), c2 = Array.from(new Set(a2.map((e3) => e3.clientKey))).sort(), l2 = a2.find((e3) => e3.clientKey === i2 && e3.toolName === t2.toolName), u2 = await (async function(e3, t3, r3) {
            const n2 = !t3.skipApproval && await r3.permissionsService.shouldBlockMcp(e3, t3, r3.toolDef?.annotations);
            if (!n2) return;
            const s2 = await Ze(n2, { onNeedsApproval: async (e4, n3) => {
              if ("mcp" !== n3.type) return new $s.iz({ result: { case: "error", value: new $s.Nh({ error: "Invalid approval details type for MCP execution" }) } });
              const s3 = await r3.pendingDecisionProvider.requestApproval({ type: gs.Mcp, details: { name: n3.name, toolName: n3.toolName, providerIdentifier: n3.providerIdentifier, source: r3.toolDef?.source, args: n3.args, reason: n3.reason ?? e4, canAllowlist: n3.canAllowlist, smartModeApprovalReason: n3.smartModeApprovalReason, smartModeApprovalRequestId: n3.smartModeApprovalRequestId }, toolCallId: t3.toolCallId });
              return s3.approved ? t3.smartModeApprovalOnly ? new $s.iz({ result: { case: "approved", value: new $s.Ke() } }) : null : new $s.iz({ result: { case: "rejected", value: new $s.xo({ reason: `User rejected MCP: ${t3.name}${s3.reason ? ` - ${s3.reason}` : ""}` }) } });
            }, onUserRejected: (e4) => new $s.iz({ result: { case: "error", value: new $s.Nh({ error: `User rejected MCP: ${t3.name}${e4 ? ` - ${e4}` : ""}` }) } }), onPermissionDenied: (e4, r4) => {
              const n3 = `MCP tool execution blocked: ${t3.name} - ${e4}`;
              return new $s.iz({ result: { case: "permissionDenied", value: new $s.HQ({ error: n3, isReadonly: r4?.isReadonly ?? false }) } });
            } });
            return s2 ?? void 0;
          })(o2, t2, { permissionsService: this.permissionsService, pendingDecisionProvider: this.pendingDecisionProvider, toolDef: l2 });
          if (void 0 !== u2) return u2;
          const d2 = await this.toolSet.getToolSet(o2);
          let p2;
          try {
            p2 = await d2.execute(t2.name, Object.fromEntries(Object.entries(t2.args).map(([e3, t3]) => [e3, t3.toJson()])), t2.toolCallId, this.elicitationFactory);
          } catch (e3) {
            let r3 = e3;
            if ((0, Ls._o)(r3) && t2.providerIdentifier.length > 0 && !a2.some((e4) => e4.clientKey === t2.providerIdentifier || e4.providerIdentifier === t2.providerIdentifier) && (r3 = new Ls.bm(t2.providerIdentifier, c2)), r3 instanceof Ls.bm) {
              const e4 = await this.describeDisconnectedServer(o2, [i2, t2.providerIdentifier]);
              return void 0 !== e4 ? new $s.iz({ result: { case: "error", value: new $s.Nh({ error: e4 }) } }) : new $s.iz({ result: { case: "serverNotFound", value: new $s.JL({ name: r3.serverName, availableServers: r3.availableServers }) } });
            }
            if ((0, Ls._o)(r3)) return new $s.iz({ result: { case: "toolNotFound", value: new $s.WV({ name: r3.toolName, availableTools: r3.availableTools }) } });
            throw r3;
          }
          const m2 = [];
          for (const e3 of p2.content) {
            const t3 = e3.type;
            if ("text" === t3) {
              const t4 = e3;
              m2.push(To(t4.text));
            } else if ("resource" === t3) {
              const t4 = e3;
              t4.resource?.text && m2.push(To(t4.resource.text));
            } else if ("image" === t3) {
              const t4 = e3, r3 = Buffer.from(t4.data, "base64"), n2 = await (0, js.O5)(r3);
              m2.push(new $s._Z({ content: { case: "image", value: new $s.do({ data: n2.data, mimeType: n2.mimeType }) } }));
            } else if ("image" !== t3) {
              const t4 = (0, Ls.SW)(e3);
              m2.push(To(t4));
            }
          }
          const h2 = await (0, Us._y)({ contentItems: m2, thresholdBytes: this.fileOutputThresholdBytes, write: (e3) => (async function(e4, t3) {
            const r3 = s.join(t3, Us.YW), o3 = s.join(r3, `${(0, Ot.randomUUID)()}.txt`);
            await (0, n.mkdir)(s.dirname(o3), { recursive: true });
            const i3 = e4.slice(0, Us.Ol), a3 = i3.split("\n").length, c3 = Buffer.byteLength(i3, "utf8");
            return await (0, n.writeFile)(o3, i3, "utf8"), new Qs.pV({ filePath: o3, sizeBytes: BigInt(c3), lineCount: BigInt(a3) });
          })(e3, this.projectDir) });
          if (void 0 === h2) throw new Error("Failed to materialize MCP text output");
          const f2 = p2.structuredContent && "object" == typeof p2.structuredContent && !Array.isArray(p2.structuredContent) ? Sn.Struct.fromJson(p2.structuredContent) : void 0, g2 = new $s.QW({ content: h2, isError: p2.isError, structuredContent: f2 });
          return new $s.iz({ result: { case: "success", value: g2 } });
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Io(r2);
        }
      }
    }
    class Po {
      constructor(e2, t2) {
        this.mcpLease = e2, this.ensureMcpServersLoaded = t2;
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = Eo(r2, (0, x.VI)(e2.withName("LocalListMcpResourcesExecutor.execute")), false).ctx;
          try {
            if (t2.server) {
              await this.ensureMcpServersLoaded?.(n2, [t2.server]);
              const e4 = await this.mcpLease.getClients(n2), r4 = e4[t2.server] ?? Object.values(e4).find((e5) => e5.serverName === t2.server);
              if (!r4) return new $s.kP({ result: { case: "error", value: new $s.w2({ error: `Server "${t2.server}" not found` }) } });
              const s3 = await this.listResourcesFromClient(n2, r4, t2.server, true);
              return new $s.kP({ result: { case: "success", value: new $s.T2({ resources: s3 }) } });
            }
            const e3 = await this.mcpLease.getClients(n2), r3 = /* @__PURE__ */ new Set(), s2 = await this.mcpLease.getTools(n2);
            for (const e4 of s2) r3.add(e4.providerIdentifier), r3.add(`user-${e4.providerIdentifier}`);
            const o2 = [];
            for (const [t3, s3] of Object.entries(e3)) {
              if (r3.size > 0 && !r3.has(t3)) continue;
              const e4 = await this.listResourcesFromClient(n2, s3, t3);
              o2.push(...e4);
            }
            return new $s.kP({ result: { case: "success", value: new $s.T2({ resources: o2 }) } });
          } catch (e3) {
            const t3 = e3 instanceof Error ? e3.message : String(e3);
            return new $s.kP({ result: { case: "error", value: new $s.w2({ error: `Failed to list MCP resources: ${t3}` }) } });
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Io(r2);
        }
      }
      async listResourcesFromClient(e2, t2, r2, n2 = false) {
        const s2 = await t2.getState(e2);
        if ("ready" !== s2.kind && (!n2 || "loading" !== s2.kind)) return [];
        const o2 = await t2.listResources(e2);
        return o2 && o2.resources ? o2.resources.map((e3) => new $s.X2({ uri: e3.uri, name: e3.name, description: e3.description, mimeType: e3.mimeType, server: r2, annotations: e3.annotations })) : [];
      }
    }
    class Jo {
      constructor(e2, t2 = ".", r2, n2 = [], s2, o2) {
        this.mcpLease = e2, this.projectDir = t2, this.permissionsService = r2, this.pendingDecisionProvider = s2, this.ensureMcpServersLoaded = o2, this.workspacePaths = n2.filter((e3) => e3.length > 0);
      }
      resolveProjectDir(e2) {
        const t2 = e2.get(m.IjH), r2 = t2?.find((e3) => "string" == typeof e3 && e3.length > 0);
        return r2 || (this.workspacePaths.length > 0 ? this.workspacePaths[0] : this.projectDir);
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = Eo(r2, (0, x.VI)(e2.withName("LocalReadMcpResourceExecutor.execute")), false).ctx, i2 = t2.smartModeApproval?.reason;
          if (void 0 !== i2) {
            if (void 0 === this.pendingDecisionProvider) return new $s.ZD({ result: { case: "error", value: new $s.Jx({ uri: t2.uri, error: "Auto-review approval provider is not configured" }) } });
            const e3 = await this.pendingDecisionProvider.requestApproval({ type: gs.Mcp, details: { name: "FetchMcpResource", toolName: "FetchMcpResource", providerIdentifier: t2.server, args: { server: Sn.Value.fromJson(t2.server), uri: Sn.Value.fromJson(t2.uri), ...void 0 !== t2.downloadPath ? { downloadPath: Sn.Value.fromJson(t2.downloadPath) } : {} }, reason: "smartMode", canAllowlist: false, smartModeApprovalReason: i2, smartModeApprovalRequestId: t2.smartModeApproval?.requestId }, toolCallId: t2.toolCallId });
            if (!e3.approved) return new $s.ZD({ result: { case: "rejected", value: new $s.Dh({ reason: "User rejected MCP resource fetch" + (e3.reason ? ` - ${e3.reason}` : "") }) } });
          }
          await this.ensureMcpServersLoaded?.(o2, [t2.server]);
          const a2 = await this.mcpLease.getClients(o2), c2 = a2[t2.server] ?? Object.values(a2).find((e3) => e3.serverName === t2.server);
          if (!c2) return new $s.ZD({ result: { case: "error", value: new $s.Jx({ uri: t2.uri, error: `Server "${t2.server}" not found` }) } });
          try {
            if ("ready" !== (await c2.getState(o2)).kind) return new $s.ZD({ result: { case: "error", value: new $s.Jx({ uri: t2.uri, error: `Server "${t2.server}" is not ready` }) } });
            const e3 = await c2.readResource(o2, { uri: t2.uri });
            if (!e3 || !e3.contents || 0 === e3.contents.length) return new $s.ZD({ result: { case: "notFound", value: new $s.ov({ uri: t2.uri }) } });
            const r3 = e3.contents[0];
            if (t2.downloadPath) {
              const e4 = await (async function(e5, t3) {
                const r4 = s.resolve(e5), o3 = await (0, n.realpath)(r4), i3 = s.resolve(r4, t3.replace(/^\/+/, ""));
                if (!ko(r4, i3)) throw new Error("downloadPath must stay within the workspace");
                let a3 = s.dirname(i3);
                for (; ; ) try {
                  if (!ko(o3, await (0, n.realpath)(a3))) throw new Error("downloadPath must stay within the workspace");
                  break;
                } catch (e6) {
                  if ("ENOENT" !== xo(e6)) throw e6;
                  const t4 = s.dirname(a3);
                  if (t4 === a3) throw e6;
                  a3 = t4;
                }
                if (await (0, n.mkdir)(s.dirname(i3), { recursive: true }), !ko(o3, await (0, n.realpath)(s.dirname(i3)))) throw new Error("downloadPath must stay within the workspace");
                try {
                  if ((await (0, n.lstat)(i3)).isSymbolicLink()) throw new Error("downloadPath must stay within the workspace");
                } catch (e6) {
                  if ("ENOENT" !== xo(e6)) throw e6;
                }
                return i3;
              })(this.resolveProjectDir(o2), t2.downloadPath);
              if (r3.text) await (0, n.writeFile)(e4, r3.text, "utf8");
              else if (r3.blob) {
                const t3 = Buffer.from(r3.blob, "base64");
                await (0, n.writeFile)(e4, t3);
              }
              return new $s.ZD({ result: { case: "success", value: new $s.KZ({ uri: t2.uri, name: r3.name, description: r3.description, mimeType: r3.mimeType }) } });
            }
            if (r3.text) return new $s.ZD({ result: { case: "success", value: new $s.KZ({ uri: t2.uri, name: r3.name, description: r3.description, mimeType: r3.mimeType, annotations: r3.annotations, metaJson: (0, m.Qw5)(r3._meta), content: { case: "text", value: r3.text } }) } });
            if (r3.blob) {
              const e4 = Buffer.from(r3.blob, "base64");
              return new $s.ZD({ result: { case: "success", value: new $s.KZ({ uri: t2.uri, name: r3.name, description: r3.description, mimeType: r3.mimeType, annotations: r3.annotations, metaJson: (0, m.Qw5)(r3._meta), content: { case: "blob", value: e4 } }) } });
            }
            return new $s.ZD({ result: { case: "error", value: new $s.Jx({ uri: t2.uri, error: "Failed to read resource" }) } });
          } catch (e3) {
            const r3 = e3 instanceof Error ? e3.message : String(e3);
            return Co.warn(o2, "LocalReadMcpResourceExecutor.execute failed", { server: t2.server, hasDownloadPath: Boolean(t2.downloadPath), errorName: e3 instanceof Error ? e3.name : typeof e3, errorMessage: r3 }), new $s.ZD({ result: { case: "error", value: new $s.Jx({ uri: t2.uri, error: `Failed to read MCP resource: ${r3}` }) } });
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Io(r2);
        }
      }
    }
    async function Mo(e2, t2) {
      const r2 = Ro(t2), o2 = (0, s.join)(e2, m.FHy, r2, m.J6s);
      let i2;
      try {
        i2 = await (0, n.readdir)(o2);
      } catch (e3) {
        if ("ENOENT" === e3?.code) return { toolNames: [], toolsDirExists: false };
        throw e3;
      }
      const a2 = await Promise.all(i2.map(async (e3) => {
        if (e3.endsWith(".json")) try {
          const t3 = await (0, n.readFile)((0, s.join)(o2, e3), "utf8");
          return (0, m.TGP)(t3);
        } catch {
          return;
        }
      })), c2 = /* @__PURE__ */ new Set();
      for (const e3 of a2) e3 && c2.add(e3);
      return { toolNames: Array.from(c2).sort((e3, t3) => e3.localeCompare(t3)), toolsDirExists: true };
    }
    const qo = (0, k.h)("local-exec:mcp-disk-freshness-on-access"), Do = "/mcps/", Oo = (0, ln.Pu)("mcp.discovery_freshness.check", { description: "MCP discovery surface freshness comparison outcome against canonical live tools", labelNames: ["surface", "outcome"] }), No = (0, ln.v5)("mcp.discovery_freshness.missing_tools", { description: "Number of tools present in canonical live state but missing from the observed discovery surface", labelNames: ["surface"] }), Fo = (0, ln.v5)("mcp.discovery_freshness.extra_tools", { description: "Number of tools present on the observed discovery surface but absent from canonical live state", labelNames: ["surface"] }), Uo = (0, ln.v5)("mcp.discovery_freshness.symmetric_difference", { description: "Total symmetric difference between canonical live tools and the observed discovery surface", labelNames: ["surface"] }), Lo = /* @__PURE__ */ new Map();
    function $o(e2) {
      const t2 = e2.replace(/\\/g, "/");
      return t2.endsWith("/mcps") ? `${t2}/` : t2;
    }
    async function Qo({ ctx: e2, mcpStateAccessor: t2, projectDir: r2, sanitizedServerFolder: n2, readDiskCatalog: s2, state: o2 }) {
      let i2 = o2;
      if (void 0 === i2) try {
        i2 = await t2.getState(e2);
      } catch (t3) {
        return void qo.warn(e2, "mcp_disk_state_read_failed", { error_type: t3 instanceof Error ? t3.name : typeof t3 });
      }
      const a2 = i2.servers.find((e3) => Ro(e3.serverIdentifier) === n2);
      if (void 0 === a2) return;
      let c2;
      try {
        c2 = await s2(r2, a2.serverIdentifier);
      } catch (t3) {
        return void qo.warn(e2, "mcp_disk_catalog_read_failed", { error_type: t3 instanceof Error ? t3.name : typeof t3 });
      }
      if (!c2.toolsDirExists) return;
      const l2 = a2.tools.map((e3) => e3.toolName).filter((e3) => e3.length > 0).sort((e3, t3) => e3.localeCompare(t3));
      !(function({ ctx: e3, serverIdentifier: t3, canonicalToolNames: r3, observedToolNames: n3 }) {
        const s3 = new Set(n3), o3 = new Set(r3), i3 = r3.filter((e4) => !s3.has(e4)), a3 = n3.filter((e4) => !o3.has(e4)), c3 = 0 === i3.length && 0 === a3.length ? "match" : "mismatch", l3 = { surface: "disk" };
        Oo.increment(e3, 1, { ...l3, outcome: c3 }), No.histogram(e3, i3.length, l3), Fo.histogram(e3, a3.length, l3), Uo.histogram(e3, i3.length + a3.length, l3), "mismatch" === c3 && qo.warn(e3, "mcp_disk_discovery_freshness_mismatch", { server_identifier: t3, missing_tool_count: i3.length, extra_tool_count: a3.length });
      })({ ctx: e2, serverIdentifier: a2.serverIdentifier, canonicalToolNames: l2, observedToolNames: c2.toolNames });
    }
    function jo(e2, t2, r2, n2 = Mo) {
      if (void 0 === r2 || !(function(e3) {
        return void 0 !== e3 && $o(e3).includes(Do);
      })(r2)) return;
      const s2 = (function(e3) {
        const t3 = $o(e3), r3 = t3.indexOf(Do);
        if (-1 === r3) return;
        const n3 = t3.slice(0, r3), s3 = t3.slice(r3 + 6).split("/").filter(Boolean);
        return 0 !== n3.length ? 0 === s3.length ? { projectDir: n3, kind: "mcps_root" } : { projectDir: n3, kind: "server", sanitizedServerFolder: s3[0] } : void 0;
      })(r2);
      if (void 0 === s2) return;
      let o2, i2;
      const a2 = "mcps_root" === s2.kind;
      "mcps_root" === s2.kind ? (o2 = `${s2.projectDir}\0__mcps_root__`, i2 = void 0) : (o2 = `${s2.projectDir}\0${s2.sanitizedServerFolder}`, i2 = s2.sanitizedServerFolder);
      const c2 = Lo.get(o2);
      void 0 !== c2 && clearTimeout(c2);
      const l2 = e2, u2 = setTimeout(() => {
        Lo.delete(o2);
        (async () => {
          if (a2) {
            const e3 = await t2.getState(l2);
            for (const r3 of e3.servers) {
              const o3 = Ro(r3.serverIdentifier);
              await Qo({ ctx: l2, mcpStateAccessor: t2, projectDir: s2.projectDir, sanitizedServerFolder: o3, readDiskCatalog: n2, state: e3 });
            }
            return;
          }
          void 0 !== i2 && await Qo({ ctx: l2, mcpStateAccessor: t2, projectDir: s2.projectDir, sanitizedServerFolder: i2, readDiskCatalog: n2 });
        })().catch((e3) => {
          qo.warn(l2, "mcp_disk_discovery_freshness_schedule_failed", { error_type: e3 instanceof Error ? e3.name : typeof e3 });
        });
      }, 2e3);
      Lo.set(o2, u2);
    }
    var Go = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Ho = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function zo(e2, t2, r2) {
      const n2 = (function(e3, t3) {
        let r3;
        for (const n3 of t3) (0, M.ZU)({ basePath: n3, targetPath: e3 }) && (void 0 === r3 || n3.length > r3.length) && (r3 = n3);
        return r3;
      })((0, s.resolve)(e2, t2), r2);
      return void 0 === n2 || n2 === e2;
    }
    function Wo(e2, t2, r2) {
      return (function(e3, t3, r3) {
        const n2 = e3.trim();
        if ("" === n2) return { files: [], totalFiles: 0, clientTruncated: false, ripgrepTruncated: false };
        const s2 = [], o2 = new Os();
        let i2 = 0, a2 = 0;
        for (; Ns(n2, a2, o2); ) {
          const e4 = a2, r4 = o2.lineEnd;
          a2 = o2.nextStart, i2 < t3 && s2.push(n2.slice(e4, r4)), i2++;
        }
        return { files: s2, totalFiles: Ts(i2), clientTruncated: i2 > t3, ripgrepTruncated: i2 >= r3 };
      })(e2, t2, r2);
    }
    function Vo(e2, t2, r2) {
      return (function(e3, t3, r3) {
        const n2 = e3.trim();
        if ("" === n2) return { counts: [], totalFiles: 0, totalMatches: 0, clientTruncated: false, ripgrepTruncated: false };
        const s2 = [], o2 = new Os();
        let i2 = 0;
        for (; Ns(n2, i2, o2); ) {
          const e4 = i2, t4 = o2.lineEnd;
          if (i2 = o2.nextStart, t4 === e4) continue;
          const r4 = n2.lastIndexOf(":", t4 - 1);
          if (r4 < e4 || r4 === e4) continue;
          const a3 = n2.slice(r4 + 1, t4).trim(), c3 = parseInt(a3, 10);
          Number.isFinite(c3) && s2.push({ file: n2.slice(e4, r4), count: c3 });
        }
        const a2 = s2.length;
        let c2 = 0;
        for (let e4 = 0; e4 < s2.length; e4++) {
          const t4 = s2[e4];
          void 0 !== t4 && (c2 += t4.count);
        }
        const l2 = [], u2 = a2 < t3 ? a2 : t3;
        for (let e4 = 0; e4 < u2; e4++) {
          const t4 = s2[e4];
          void 0 !== t4 && l2.push(t4);
        }
        return { counts: l2, totalFiles: Ts(a2), totalMatches: Ts(c2), clientTruncated: a2 > t3, ripgrepTruncated: a2 >= r3 };
      })(e2, t2, r2);
    }
    function Ko(e2, t2, r2, n2) {
      const s2 = { stack: [], error: void 0, hasError: false };
      try {
        Go(s2, (0, x.VI)(n2.withName("parseContentOutput")), false);
        return (function(e3, t3, r3) {
          const n3 = { byFile: /* @__PURE__ */ new Map(), totalLines: 0, totalMatchedLines: 0, totalFiles: 0, clientTruncated: false, ripgrepTruncated: false };
          if ("" === e3.trim()) return n3;
          const s3 = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Set(), i2 = new Os();
          let a2 = 0, c2 = 0, l2 = 0, u2 = 0;
          for (; Ns(e3, u2, i2); ) {
            const r4 = u2, n4 = i2.lineEnd;
            if (u2 = i2.nextStart, l2++, Fs(e3, r4, n4)) continue;
            let d2 = -1;
            for (let t4 = r4; t4 < n4; t4++) if (e3.charCodeAt(t4) === Bs) {
              d2 = t4;
              break;
            }
            if (-1 === d2) continue;
            let p2 = d2 + 1;
            if (p2 >= n4) continue;
            let m2 = 0, h2 = 0;
            for (; p2 < n4; ) {
              const t4 = e3.charCodeAt(p2);
              if (t4 < Ms || t4 > qs) break;
              m2 = 10 * m2 + (t4 - Ms), h2++, p2++;
            }
            if (0 === h2 || p2 >= n4 || !Number.isFinite(m2)) continue;
            const f2 = e3.charCodeAt(p2);
            if (f2 !== Ds && f2 !== Js) continue;
            const g2 = f2 === Js;
            false === g2 && a2++;
            const y2 = e3.slice(r4, d2);
            if (o2.has(y2) || o2.add(y2), c2 >= t3) continue;
            const w2 = e3.slice(p2 + 1, n4);
            let v2 = s3.get(y2);
            void 0 === v2 && (v2 = { file: y2, matches: [] }, s3.set(y2, v2)), v2.matches.push({ lineNumber: m2, content: w2, isContextLine: g2 }), c2++;
          }
          return { byFile: s3, totalLines: Ts(l2), totalMatchedLines: Ts(a2), totalFiles: Ts(o2.size), clientTruncated: c2 >= t3, ripgrepTruncated: l2 >= r3 };
        })(e2, t2, r2);
      } catch (e3) {
        s2.error = e3, s2.hasError = true;
      } finally {
        Ho(s2);
      }
    }
    const Yo = (0, k.h)("local-exec/grep");
    function Zo(e2) {
      return e2 instanceof Error && (e2.message.includes("ENOENT") && e2.message.includes("spawn"));
    }
    function Xo(e2) {
      try {
        return (0, C.existsSync)(e2);
      } catch {
        return "check_failed";
      }
    }
    function ei(e2, t2, r2, n2) {
      return { ...ri(e2), ...n2, cwd: t2, cwdExists: Xo(t2), errorMessage: r2.message, errorCode: r2.code, errno: r2.errno, syscall: r2.syscall, errorPath: r2.path };
    }
    function ti(e2) {
      return new Error(`Path does not exist: ${e2}`);
    }
    function ri(e2) {
      const t2 = { rgPath: e2, platform: process.platform, arch: process.arch, pid: process.pid, uptimeSeconds: Math.round(process.uptime()), execPath: process.execPath };
      try {
        t2.rgPathExists = (0, C.existsSync)(e2);
      } catch (e3) {
        t2.rgPathExists = false, t2.rgPathExistsError = e3 instanceof Error ? e3.message : String(e3);
      }
      try {
        const r3 = (0, C.lstatSync)(e2);
        t2.rgIsSymlink = r3.isSymbolicLink(), r3.isSymbolicLink() && !t2.rgPathExists && (t2.rgBrokenSymlink = true);
      } catch {
        t2.rgLstatFailed = true;
      }
      const r2 = (0, s.dirname)(e2);
      try {
        t2.parentDirExists = (0, C.existsSync)(r2), t2.parentDirExists && (t2.parentDirContents = (0, C.readdirSync)(r2).slice(0, 50));
      } catch (e3) {
        t2.parentDirError = e3 instanceof Error ? e3.message : String(e3);
      }
      const n2 = (0, s.dirname)(r2);
      try {
        t2.grandparentDirExists = (0, C.existsSync)(n2), t2.grandparentDirExists && (t2.grandparentDirContents = (0, C.readdirSync)(n2).slice(0, 50));
      } catch (e3) {
        t2.grandparentDirError = e3 instanceof Error ? e3.message : String(e3);
      }
      if (t2.rgPathExists) try {
        const r3 = (0, C.statSync)(e2);
        t2.rgFileSize = r3.size, t2.rgFileMode = r3.mode.toString(8), t2.rgIsFile = r3.isFile(), t2.rgModifiedMs = r3.mtimeMs;
      } catch (e3) {
        t2.rgStatError = e3 instanceof Error ? e3.message : String(e3);
      }
      const o2 = "node_modules.asar.unpacked";
      if (e2.includes(o2)) {
        const r3 = e2.split(o2)[0];
        if (r3) {
          const e3 = r3.concat("node_modules.asar");
          try {
            t2.asarExists = (0, C.existsSync)(e3);
          } catch {
            t2.asarExists = "check_failed";
          }
          const n3 = r3.concat(o2);
          try {
            if (t2.asarUnpackedDirExists = (0, C.existsSync)(n3), t2.asarUnpackedDirExists) {
              const e4 = (0, s.join)(n3, "@vscode", "ripgrep");
              t2.ripgrepPkgDirExists = (0, C.existsSync)(e4);
            }
          } catch {
            t2.asarUnpackedDirExists = "check_failed";
          }
        }
      }
      return t2;
    }
    class ni {
      constructor(e2, t2, r2, n2) {
        this.ignoreService = e2, this.grepProvider = t2, this.workspacePath = r2;
        const s2 = Array.isArray(this.workspacePath) ? this.workspacePath[0] : this.workspacePath;
        this.singleWorkspacePath = Array.isArray(this.workspacePath) && this.workspacePath.length > 1 ? void 0 : s2, this.mcpStateAccessor = n2?.mcpStateAccessor, this.permissionsService = n2?.permissionsService;
      }
      computeRelativeTarget(e2, t2) {
        const r2 = (0, M.o1)(e2, this.singleWorkspacePath ?? t2);
        return r2 === t2 ? "." : (0, s.relative)(t2, r2);
      }
      isRootIndependentSearchPath(e2) {
        return (0, s.isAbsolute)(e2) || /^~(?=$|[/\\])/.test(e2) || e2.startsWith("file://");
      }
      resolveSearchTargets(e2, t2) {
        const r2 = this.isRootIndependentSearchPath(e2);
        return t2.map((t3) => {
          const n2 = (0, s.resolve)(t3);
          return { root: t3, resolvedRoot: n2, target: (0, M.o1)(e2, r2 ? void 0 : n2) };
        });
      }
      clampGrepArgsToWorkspace(e2, t2) {
        if (void 0 === e2.path || "" === e2.path) return e2;
        const r2 = this.resolveSearchTargets(e2.path, t2);
        if (this.isRootIndependentSearchPath(e2.path) ? r2.some(({ resolvedRoot: e3, target: t3 }) => (0, M.BJ)(t3, e3)) : r2.every(({ resolvedRoot: e3, target: t3 }) => (0, M.BJ)(t3, e3))) return e2;
        const n2 = e2.clone();
        return n2.path = void 0, n2;
      }
      async buildArgs(e2, t2, r2) {
        const n2 = [], s2 = await this.ignoreService.listCursorIgnoreFilesByRoot(e2);
        for (const e3 of s2) n2.push("--cursor-ignore", e3);
        if ("content" === r2) n2.push("--line-number", "--with-filename", "--no-heading", "-0"), void 0 !== t2.contextBefore && n2.push("--before-context", String(t2.contextBefore)), void 0 !== t2.contextAfter && n2.push("--after-context", String(t2.contextAfter)), n2.push("--max-columns", String(1e3), "--max-columns-preview"), void 0 !== t2.context && void 0 === t2.contextBefore && void 0 === t2.contextAfter && n2.push("--before-context", String(t2.context), "--after-context", String(t2.context));
        else if ("files_with_matches" === r2) n2.push("-l");
        else {
          if ("count" !== r2) {
            throw new Error(`Unknown output mode: ${r2}`);
          }
          n2.push("-c", "--with-filename");
        }
        true === t2.caseInsensitive ? n2.push("--ignore-case") : n2.push("--case-sensitive"), t2.type && n2.push("--type", t2.type), t2.glob && n2.push("--iglob", t2.glob), t2.multiline && n2.push("--multiline", "--multiline-dotall");
        const o2 = t2.sort ?? "modified";
        if ("none" !== o2) {
          const e3 = true === t2.sortAscending ? "--sort" : "--sortr";
          n2.push(e3, o2);
        }
        return n2.push("--no-config", "--color=never"), n2.push("--hidden"), n2.push("--follow"), n2.push("--regexp", t2.pattern), n2.push("--"), n2.push(t2.path ? this.computeRelativeTarget(t2.path, e2) : "."), n2;
      }
      async filterBlockedFiles(e2, t2) {
        const r2 = await this.permissionsService?.getFileReadBoundaryBlocker?.(), n2 = [];
        for (const s2 of e2) {
          const e3 = (0, M.o1)(s2.file, t2), o2 = await ze(e3);
          null === o2 || await this.isPostRipgrepBlocked(o2) || void 0 !== r2 && await r2(e3, o2) || n2.push(s2);
        }
        return n2;
      }
      async isPostRipgrepBlocked(e2) {
        const [t2, r2] = await Promise.all([this.ignoreService.isCursorIgnored(e2), this.ignoreService.isRepoBlocked(e2)]);
        return t2 || r2;
      }
      async runFilesMode(e2, t2, r2, n2, s2) {
        const o2 = { stack: [], error: void 0, hasError: false };
        try {
          const i2 = Go(o2, (0, x.VI)(e2.withName("LocalGrepExecutor.runFilesMode")), false), a2 = await this.buildArgs(t2, r2, "files_with_matches"), c2 = await this.executeRg(i2.ctx, t2, a2, void 0, n2, s2);
          if (("" !== c2.stderr || 2 === c2.exitCode) && "" === c2.stdout.trim()) throw new Error(c2.stderr || `ripgrep exited with code ${c2.exitCode}`);
          const { files: l2, totalFiles: u2, clientTruncated: d2, ripgrepTruncated: p2 } = Wo(c2.stdout, ni.CLIENT_LIMIT_LINES, ni.HARD_MAX_OUTPUT_LINES), m2 = (await this.filterBlockedFiles(l2.map((e3) => ({ file: e3 })), t2)).map(({ file: e3 }) => e3), h2 = l2.length - m2.length, f2 = new Cs.T7({ files: m2, totalFiles: Ts(u2 - h2), clientTruncated: d2, ripgrepTruncated: p2 });
          return new Cs.vD({ result: { case: "files", value: f2 } });
        } catch (e3) {
          o2.error = e3, o2.hasError = true;
        } finally {
          Ho(o2);
        }
      }
      async runCountMode(e2, t2, r2, n2, s2) {
        const o2 = { stack: [], error: void 0, hasError: false };
        try {
          const i2 = Go(o2, (0, x.VI)(e2.withName("LocalGrepExecutor.runCountMode")), false), a2 = await this.buildArgs(t2, r2, "count"), c2 = await this.executeRg(i2.ctx, t2, a2, void 0, n2, s2);
          if (("" !== c2.stderr || 2 === c2.exitCode) && "" === c2.stdout.trim()) throw new Error(c2.stderr || `ripgrep exited with code ${c2.exitCode}`);
          const { counts: l2, totalFiles: u2, totalMatches: d2, clientTruncated: p2, ripgrepTruncated: m2 } = Vo(c2.stdout, ni.CLIENT_LIMIT_LINES, ni.HARD_MAX_OUTPUT_LINES), h2 = await this.filterBlockedFiles(l2, t2), f2 = h2.reduce((e3, t3) => e3 + t3.count, 0), g2 = l2.length - h2.length, y2 = l2.reduce((e3, t3) => e3 + t3.count, 0) - f2, w2 = new Cs.xA({ counts: h2.map((e3) => new Cs.sS({ file: e3.file, count: Ts(e3.count) })), totalFiles: Ts(u2 - g2), totalMatches: Ts(d2 - y2), clientTruncated: p2, ripgrepTruncated: m2 });
          return new Cs.vD({ result: { case: "count", value: w2 } });
        } catch (e3) {
          o2.error = e3, o2.hasError = true;
        } finally {
          Ho(o2);
        }
      }
      async runContentMode(e2, t2, r2, n2, s2) {
        const o2 = { stack: [], error: void 0, hasError: false };
        try {
          const i2 = Go(o2, (0, x.VI)(e2.withName("LocalGrepExecutor.runContentMode")), false), a2 = await this.buildArgs(t2, r2, "content"), c2 = await this.executeRg(i2.ctx, t2, a2, void 0, n2, s2);
          if (("" !== c2.stderr || 2 === c2.exitCode) && "" === c2.stdout.trim()) throw new Error(c2.stderr || `ripgrep exited with code ${c2.exitCode}`);
          const { byFile: l2, totalLines: u2, totalMatchedLines: d2, clientTruncated: p2, ripgrepTruncated: m2 } = Ko(c2.stdout, ni.CLIENT_LIMIT_LINES, ni.HARD_MAX_OUTPUT_LINES, i2.ctx), h2 = Array.from(l2.values()), f2 = await this.filterBlockedFiles(h2, t2), g2 = h2.filter((e3) => !f2.includes(e3)), y2 = g2.reduce((e3, t3) => e3 + t3.matches.length, 0), w2 = g2.reduce((e3, t3) => e3 + t3.matches.filter((e4) => !e4.isContextLine).length, 0), v2 = new Cs.Zp({ matches: f2.map((e3) => new Cs.uI({ file: e3.file, matches: e3.matches.map((e4) => new Cs.dx({ lineNumber: e4.lineNumber, content: e4.content, isContextLine: e4.isContextLine })) })), totalLines: Ts(u2 - y2), totalMatchedLines: Ts(d2 - w2), clientTruncated: p2, ripgrepTruncated: m2 });
          return new Cs.vD({ result: { case: "content", value: v2 } });
        } catch (e3) {
          o2.error = e3, o2.hasError = true;
        } finally {
          Ho(o2);
        }
      }
      async executeIndexedGrepWithTimeout(e2, t2, r2, n2) {
        if (void 0 === this.grepProvider.executeIndexedGrep) return;
        const [s2, o2] = e2.withTimeoutAndCancel(ni.INDEXED_GREP_CONTEXT_TIMEOUT_MS), i2 = { phase: "provider" }, a2 = performance.now();
        try {
          return await (0, be.wj)(this.grepProvider.executeIndexedGrep(s2, t2, r2, i2), ni.INDEXED_GREP_TIMEOUT_MS, `Indexed grep timed out after ${ni.INDEXED_GREP_TIMEOUT_MS / 1e3}s`);
        } catch (t3) {
          if (t3 instanceof be.MU) return void Yo.debug(e2, "indexed_grep.timeout_fallback", { ...n2, totalMs: Math.round(performance.now() - a2), ...i2 });
          throw t3;
        } finally {
          o2();
        }
      }
      async executeRg(e2, t2, r2, n2, s2, o2) {
        const i2 = (0, x.VI)(e2.withName("LocalGrepExecutor.executeRg")), a2 = "utf8", c2 = 8388608;
        return n2 = n2 ?? ni.HARD_MAX_OUTPUT_LINES, new Promise((l2, u2) => {
          let d2 = false, p2 = false;
          const m2 = () => {
            p2 || (p2 = true, i2.span.end());
          };
          let h2, f2;
          try {
            const e3 = s2;
            if (h2 = (0, B.spawnInSandbox)((0, B.Ko)(), r2, { cwd: t2 }, e3), Re()) {
              const t3 = r2.indexOf("--regexp"), n3 = t3 >= 0 && t3 + 1 < r2.length ? r2[t3 + 1].length : 0;
              let s3 = 0;
              for (const e4 of r2) "--iglob" === e4 && s3++;
              Be({ timestamp: Date.now(), source: "agent_grep_tool", mode: o2.outputMode, patternLength: n3, hasPath: void 0 !== o2.targetPath, includeGlobCount: s3, excludeGlobCount: 0, sandboxPolicyType: e3.type, toolCallId: o2.toolCallId, execId: o2.execId });
            }
          } catch (r3) {
            if (m2(), Zo(r3)) {
              const n3 = r3, s3 = (0, B.Ko)();
              if (Yo.error(e2, "rg_diagnostics.spawn_throw", void 0, ei(s3, t2, n3, o2)), false === Xo(t2)) return u2(ti(t2));
            }
            return u2(r3);
          }
          const g2 = [], y2 = [];
          let w2 = 0, v2 = 0, _2 = 0, A2 = false;
          f2 = setTimeout(() => {
            if (!d2) try {
              m2(), u2(new Error(`Timed out after ${ni.MAIN_TIMEOUT_MS / 1e3}s`)), h2.kill();
            } catch {
            }
          }, ni.MAIN_TIMEOUT_MS), h2.stdout?.on("data", (e3) => {
            if (w2 += e3.length, void 0 !== n2 && true !== A2) {
              let t3 = -1, r3 = 0;
              for (let s4 = 0; s4 < e3.length; s4++) if (10 === e3[s4] && (r3++, _2 + r3 >= n2)) {
                t3 = s4 + 1, A2 = true;
                try {
                  h2.kill();
                } catch {
                }
                break;
              }
              _2 += r3;
              const s3 = t3 >= 0 ? e3.subarray(0, t3) : e3;
              w2 <= c2 && g2.push(s3);
            } else true !== A2 && w2 <= c2 && g2.push(e3);
          }), h2.stderr?.on("data", (e3) => {
            v2 += e3.length, v2 <= c2 && y2.push(e3);
          }), h2.on("error", (r3) => {
            if (clearTimeout(f2), m2(), Zo(r3)) {
              const n3 = (0, B.Ko)(), s3 = r3;
              if (Yo.error(e2, "rg_diagnostics.spawn_enoent", void 0, ei(n3, t2, s3, o2)), false === Xo(t2)) return void u2(ti(t2));
            }
            u2(r3);
          }), h2.on("close", (e3) => {
            d2 = true, clearTimeout(f2);
            const t3 = Buffer.concat(g2).toString(a2), r3 = Buffer.concat(y2).toString(a2);
            m2(), l2({ stdout: t3, stderr: r3, exitCode: e3 ?? 0 });
          });
        });
      }
      async execute(e2, t2, r2) {
        const o2 = { stack: [], error: void 0, hasError: false };
        try {
          const i2 = Go(o2, (0, x.VI)(e2.withName("LocalGrepExecutor.execute")), false), a2 = Array.isArray(this.workspacePath) ? this.workspacePath : [this.workspacePath ?? process.cwd()], c2 = t2.outputMode ?? "content", l2 = { toolCallId: t2.toolCallId, execId: r2?.execId, outputMode: c2, targetPath: t2.path, workspacePaths: a2 }, u2 = re(t2.sandboxPolicy), d2 = this.grepProvider.getWorktreeGuardInfo?.(a2);
          if ((0, M.fl)({ targetPath: t2.path, workspacePaths: a2, mainWorktreePath: d2?.mainWorktreePath })) return new Cs.Ud({ result: { case: "error", value: new Cs.ts({ error: M.PS }) } });
          const p2 = this.clampGrepArgsToWorkspace(t2, a2);
          let m2 = a2;
          try {
            if (p2.path) {
              const t4 = [];
              let r4 = false, n3 = false;
              for (const { root: s2, resolvedRoot: o4, target: i3 } of this.resolveSearchTargets(p2.path, a2)) {
                if (!(0, M.BJ)(i3, o4)) continue;
                const a3 = await ze(i3);
                null !== a3 ? await this.ignoreService.isCursorIgnored(a3) ? r4 = true : (t4.push(s2), void 0 !== this.mcpStateAccessor && jo(e2, this.mcpStateAccessor, a3)) : n3 = true;
              }
              if (0 === t4.length) {
                const e3 = r4 ? `Path '${p2.path}' is filtered out by .cursorignore` : n3 ? (function(e4) {
                  return `Path '${e4}' could not be verified while resolving symlinks. This can happen when access is denied or the path contains a symlink loop.`;
                })(p2.path) : `Path '${p2.path}' is outside the workspace`;
                return new Cs.Ud({ result: { case: "error", value: new Cs.ts({ error: e3 }) } });
              }
              m2 = t4;
            }
            let t3 = {};
            const r3 = await this.executeIndexedGrepWithTimeout(i2.ctx, m2, p2, l2);
            if (void 0 !== r3) {
              t3 = r3;
              for (const [e3, r4] of Object.entries(t3)) {
                const t4 = r4.result;
                switch (t4.case) {
                  case "content":
                    t4.value.matches = await this.filterBlockedFiles(t4.value.matches, e3);
                    break;
                  case "files":
                    t4.value.files = (await this.filterBlockedFiles(t4.value.files.map((e4) => ({ file: e4 })), e3)).map(({ file: e4 }) => e4);
                    break;
                  case "count":
                    t4.value.counts = await this.filterBlockedFiles(t4.value.counts, e3);
                }
              }
            } else for (const e3 of m2) {
              if (false === Xo(e3)) return new Cs.Ud({ result: { case: "error", value: new Cs.ts({ error: `Path does not exist: ${e3}` }) } });
              let r4;
              if ("content" === c2) r4 = await this.runContentMode(i2.ctx, e3, p2, u2, l2);
              else if ("files_with_matches" === c2) r4 = await this.runFilesMode(i2.ctx, e3, p2, u2, l2);
              else {
                if ("count" !== c2) {
                  throw new Error(`Unknown output mode: ${c2}`);
                }
                r4 = await this.runCountMode(i2.ctx, e3, p2, u2, l2);
              }
              t3[e3] = r4;
            }
            const n2 = (function(e3, t4) {
              if (t4.length <= 1) return e3;
              const r4 = [...new Set(t4.map((e4) => (0, s.resolve)(e4)))], n3 = {};
              for (const [t5, o4] of Object.entries(e3)) {
                const e4 = (0, s.resolve)(t5), i3 = (t6) => zo(e4, t6, r4), a3 = o4.result;
                switch (a3.case) {
                  case "content": {
                    const e5 = a3.value, r5 = [];
                    let s2 = 0, o5 = 0;
                    for (const t6 of e5.matches) i3(t6.file) ? r5.push(t6) : (s2 += t6.matches.length, o5 += t6.matches.filter((e6) => !e6.isContextLine).length);
                    n3[t5] = new Cs.vD({ result: { case: "content", value: new Cs.Zp({ ...e5, matches: r5, totalLines: Math.max(0, e5.totalLines - s2), totalMatchedLines: Math.max(0, e5.totalMatchedLines - o5) }) } });
                    break;
                  }
                  case "files": {
                    const e5 = a3.value, r5 = e5.files.filter((e6) => i3(e6));
                    n3[t5] = new Cs.vD({ result: { case: "files", value: new Cs.T7({ ...e5, files: r5, totalFiles: Math.max(0, e5.totalFiles - (e5.files.length - r5.length)) }) } });
                    break;
                  }
                  case "count": {
                    const e5 = a3.value, r5 = [];
                    let s2 = 0;
                    for (const t6 of e5.counts) i3(t6.file) ? r5.push(t6) : s2 += t6.count;
                    n3[t5] = new Cs.vD({ result: { case: "count", value: new Cs.xA({ ...e5, counts: r5, totalFiles: Math.max(0, e5.totalFiles - (e5.counts.length - r5.length)), totalMatches: Math.max(0, e5.totalMatches - s2) }) } });
                    break;
                  }
                  default:
                    n3[t5] = o4;
                }
              }
              return n3;
            })(t3, m2), o3 = new Cs._0({ pattern: p2.pattern, path: p2.path, outputMode: c2, workspaceResults: n2 });
            return new Cs.Ud({ result: { case: "success", value: o3 } });
          } catch (e3) {
            if (p2.path) {
              const e4 = (0, M.o1)(p2.path, this.singleWorkspacePath);
              try {
                await (0, n.stat)(e4);
              } catch (t3) {
                return new Cs.Ud({ result: { case: "error", value: new Cs.ts({ error: `Path does not exist: ${e4}` }) } });
              }
            }
            return new Cs.Ud({ result: { case: "error", value: new Cs.ts({ error: e3 instanceof Error ? e3.message : String(e3) }) } });
          }
        } catch (e3) {
          o2.error = e3, o2.hasError = true;
        } finally {
          Ho(o2);
        }
      }
    }
    ni.MAIN_TIMEOUT_MS = 25e3, ni.INDEXED_GREP_TIMEOUT_MS = 25e3, ni.INDEXED_GREP_CONTEXT_TIMEOUT_MS = ni.INDEXED_GREP_TIMEOUT_MS + 100, ni.HARD_MAX_OUTPUT_LINES = 1e4, ni.CLIENT_LIMIT_LINES = 2e3;
    Rn.Ik({ record_v: Rn.ai().int().nullish(), pid: Rn.ai().int().nonnegative().nullish(), version: Rn.Yj().nullish(), started_at: Rn.ai().nullish(), control_sock: Rn.Yj().nullish(), runtime_dir: Rn.Yj().nullish(), data_dir: Rn.Yj().nullish(), config_path: Rn.Yj().nullish(), log_path: Rn.Yj().nullish(), metrics_addr: Rn.Yj().nullish(), exe: Rn.Yj().nullish() });
    Rn.Ik({ mountpoint: Rn.Yj().nullish(), capabilities: Rn.YO(Rn.Yj()).nullish(), nfs_transport: Rn.Yj().nullish(), bind_ignored: Rn.Ik({ active: Rn.YO(Rn.Yj()).nullish() }).passthrough().nullish() }), Rn.Ik({ daemon_alive: Rn.zM().nullish(), mounts: Rn.YO(Rn.L5()).nullish(), data_plane: Rn.Ik({ enabled: Rn.zM().nullish() }).passthrough().nullish() });
    const si = Rn.ai().int().nonnegative(), oi = Rn.Ik({ line_no: Rn.ai().int().positive(), kind: Rn.k5(["match", "before", "after"]), text: Rn.Yj().optional(), bytes: Rn.Yj().regex(/^(?:[0-9a-fA-F]{2})*$/).optional(), truncated: Rn.zM().default(false) }).refine((e2) => void 0 !== e2.text || void 0 !== e2.bytes);
    Rn.Ik({ type: Rn.eu("file"), path: Rn.Yj(), lines: Rn.YO(oi) }), Rn.Ik({ type: Rn.eu("summary"), files_searched: si, more: Rn.zM(), stop_reason: Rn.Yj().nullable(), skipped: Rn.Ik({ over_size: si, size_unknown: si, budget_exhausted: si, fetch_failed: si, unreadable: si }) }), Rn.Ik({ type: Rn.Yj() });
    (0, k.h)("local-exec/grove-grep");
    var ii = r(72730), ai = r(90066), ci = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, li = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class ui {
      constructor(e2, t2, r2) {
        this.permissionsService = e2, this.ignoreService = t2, this.workspacePath = r2;
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          ci(r2, (0, x.VI)(e2.withName("LocalLsExecutor.execute")), false).ctx;
          const s2 = (0, M.o1)(t2.path, this.workspacePath);
          try {
            let r3;
            try {
              r3 = await (0, n.stat)(s2);
            } catch (e3) {
              return "ENOENT" === e3.code ? (0, ai.jq)(s2) ? new ii.fv({ result: { case: "error", value: new ii.uj({ path: s2, error: "No active terminals." }) } }) : new ii.fv({ result: { case: "error", value: new ii.uj({ path: s2, error: `Path does not exist: ${s2}` }) } }) : new ii.fv({ result: { case: "error", value: new ii.uj({ path: s2, error: e3.message }) } });
            }
            if (!r3.isDirectory()) return new ii.fv({ result: { case: "error", value: new ii.uj({ path: s2, error: `Path is not a directory: ${s2}` }) } });
            const o2 = re(t2.sandboxPolicy), i2 = t2.timeoutMs ?? 5e3, a2 = e2.withTimeout(i2), { tree: c2, didTimeout: l2 } = await this.getDirectoryTree(a2, s2, t2.ignore, o2);
            return l2 ? new ii.fv({ result: { case: "timeout", value: new ii.ze({ directoryTreeRoot: c2 }) } }) : new ii.fv({ result: { case: "success", value: new ii.PC({ directoryTreeRoot: c2 }) } });
          } catch (e3) {
            return new ii.fv({ result: { case: "error", value: new ii.uj({ path: s2, error: e3 instanceof Error ? e3.message : "Unknown error occurred" }) } });
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          li(r2);
        }
      }
      async getDirectoryTree(e2, t2, r2, n2) {
        const s2 = { stack: [], error: void 0, hasError: false };
        try {
          ci(s2, (0, x.VI)(e2.withName("LocalLsExecutor.getDirectoryTree")), false);
          return await this.buildTreeFromRipgrepStream(e2, t2, r2, n2, 2500);
        } catch (e3) {
          s2.error = e3, s2.hasError = true;
        } finally {
          li(s2);
        }
      }
      async buildTreeFromRipgrepStream(e2, t2, r2, n2, o2) {
        const i2 = { stack: [], error: void 0, hasError: false };
        try {
          ci(i2, (0, x.VI)(e2.withName("LocalLsExecutor.buildTreeFromRipgrepStream")), false);
          const a2 = (0, s.resolve)(t2), c2 = new ii.vq({ absPath: a2, childrenDirs: [], childrenFiles: [], childrenWereProcessed: true, fullSubtreeExtensionCounts: {} }), l2 = /* @__PURE__ */ new Map();
          l2.set(a2, c2);
          const u2 = { charactersUsed: a2.length, budgetExceeded: false }, [d2, p2] = await Promise.all([this.ignoreService.listCursorIgnoreFilesByRoot(t2), this.ignoreService.getRepoBlockExcludeGlobs(t2)]), m2 = [...r2, ...p2], { lines: h2, didTimeout: f2 } = Me(e2, { root: t2, excludeGlobs: m2, caseSensitive: true, cursorIgnoreFiles: d2, sandboxPolicy: n2, source: "ls" });
          for await (const e3 of h2) {
            if (!e3) continue;
            const r3 = (0, s.resolve)(t2, e3), n3 = await ze(r3);
            null === n3 || await this.ignoreService.isCursorIgnored(n3) || await this.ignoreService.isRepoBlocked(n3) || this.addPathToTree(r3, a2, l2, u2, o2);
          }
          return this.sortTreeChildren(c2), { tree: c2, didTimeout: await f2 };
        } catch (e3) {
          i2.error = e3, i2.hasError = true;
        } finally {
          li(i2);
        }
      }
      addPathToTree(e2, t2, r2, n2, o2) {
        const i2 = (0, s.basename)(e2), a2 = (0, s.dirname)(e2);
        this.ensureDirectoryPath(a2, t2, r2, n2.budgetExceeded);
        const c2 = r2.get(a2);
        if (!c2) return;
        const l2 = i2.length;
        if (!n2.budgetExceeded && n2.charactersUsed + l2 <= o2) {
          const e3 = new ii.ur({ name: i2 });
          c2.childrenFiles.push(e3), n2.charactersUsed += l2;
        } else {
          if (!n2.budgetExceeded) {
            n2.budgetExceeded = true;
            let e3 = a2;
            for (; e3.startsWith(t2); ) {
              const t3 = r2.get(e3);
              t3 && (t3.childrenWereProcessed = false);
              const n3 = (0, s.dirname)(e3);
              if (n3 === e3) break;
              e3 = n3;
            }
          }
          const o3 = (0, s.extname)(e2);
          let i3 = a2;
          for (; i3.startsWith(t2); ) {
            const e3 = r2.get(i3);
            e3 && (e3.fullSubtreeExtensionCounts[o3] ??= 0, e3.fullSubtreeExtensionCounts[o3] = Ts(e3.fullSubtreeExtensionCounts[o3] + 1), e3.numFiles ??= 0, e3.numFiles = Ts(e3.numFiles + 1));
            const t3 = (0, s.dirname)(i3);
            if (t3 === i3) break;
            i3 = t3;
          }
        }
      }
      ensureDirectoryPath(e2, t2, r2, n2) {
        if (r2.has(e2) || e2 === t2) return;
        const o2 = (0, s.dirname)(e2);
        o2 !== e2 && o2.startsWith(t2) && this.ensureDirectoryPath(o2, t2, r2, n2);
        const i2 = new ii.vq({ absPath: e2, childrenDirs: [], childrenFiles: [], childrenWereProcessed: !n2, fullSubtreeExtensionCounts: {} });
        r2.set(e2, i2);
        const a2 = r2.get(o2);
        a2 && a2.childrenDirs.push(i2);
      }
      sortTreeChildren(e2) {
        e2.childrenDirs.sort((e3, t2) => (0, s.basename)(e3.absPath).localeCompare((0, s.basename)(t2.absPath))), e2.childrenFiles.sort((e3, t2) => e3.name.localeCompare(t2.name));
        for (const t2 of e2.childrenDirs) this.sortTreeChildren(t2);
      }
    }
    var di = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, pi = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const mi = 1e4, hi = 5e3, fi = { PAGER: "cat", MANPAGER: "cat", LESS: "-R", PIP_PROGRESS_BAR: "off", TQDM_DISABLE: "1" };
    class gi {
      constructor() {
        this.fullOutput = "", this.outputHead = "", this.outputTail = "", this.totalChars = 0;
      }
      append(e2) {
        if (0 === e2.length) return;
        const t2 = this.totalChars;
        if (this.totalChars += e2.length, this.outputHead.length < hi && (this.outputHead = (this.outputHead + e2).slice(0, hi)), this.outputTail = (this.outputTail + e2).slice(-5e3), t2 < mi) {
          const r2 = Math.min(e2.length, mi - t2);
          this.fullOutput += e2.slice(0, r2);
        }
        this.totalChars > mi && (this.fullOutput = "");
      }
      getOutput() {
        return this.totalChars <= mi ? this.fullOutput : void 0;
      }
      getTruncation() {
        if (!(this.totalChars <= mi)) return { outputHead: this.outputHead, outputTail: this.outputTail, elidedChars: this.totalChars - mi };
      }
    }
    function yi(e2, t2) {
      const r2 = hs - e2.length;
      return r2 <= 0 ? e2 : e2 + t2.slice(0, r2);
    }
    function wi(e2, t2) {
      return null !== e2 ? e2 : null === t2 ? -1 : -ge.constants.signals[t2];
    }
    class vi {
      constructor(e2, t2, r2) {
        this.permissionsService = e2, this.ignoreService = t2, this.defaultCwd = r2;
      }
      buildResult({ args: e2, workingDirectory: t2, processResult: r2, sandboxPolicy: n2 }) {
        const s2 = { command: e2.command, workingDirectory: t2, exitCode: r2.returncode, signal: r2.signal, stdout: r2.stdout, stderr: r2.exceptionInfo || r2.stderr, interleavedOutput: r2.output, outputHead: r2.outputTruncation?.outputHead, outputTail: r2.outputTruncation?.outputTail, elidedChars: r2.outputTruncation?.elidedChars, executionTime: r2.localExecutionTimeMs ?? 0, localExecutionTimeMs: r2.localExecutionTimeMs }, o2 = r2.exceptionInfo.length > 0, i2 = 0 !== r2.returncode || o2 ? { case: "failure", value: new R.xC({ ...s2, aborted: o2, abortReason: r2.abortReason }) } : { case: "success", value: new R.QR(s2) };
        return new R.W4({ result: i2, sandboxPolicy: ne(n2) });
      }
      async runProcess({ ctx: e2, args: t2, workingDirectory: r2, sandboxPolicy: n2, timeoutMs: s2 }) {
        const o2 = performance.now(), i2 = this.defaultCwd, a2 = (await (0, B.resolveSandboxPolicyForWorkspace)(i2, n2 ? { perRepo: n2 } : void 0)).policy, c2 = "insecure_none" !== a2.type ? { ...a2, sandboxWorkspaceRoot: i2 } : a2;
        return await new Promise((n3) => {
          const i3 = new gi();
          let a3, l2, u2 = "", d2 = "", p2 = false, m2 = false, h2 = "", f2 = () => {
          };
          const g2 = (0, B.Xw)({ ...process.env, ...fi, CURSOR_AGENT: "1" }), y2 = { cwd: r2, env: g2, stdio: ["pipe", "pipe", "pipe"], detached: "win32" !== process.platform, windowsVerbatimArguments: "win32" === process.platform }, w2 = "win32" === process.platform ? { executable: process.env.ComSpec ?? "cmd.exe", args: (v2 = t2.command, ["/d", "/s", "/c", `"${v2}"`]) } : { executable: "/bin/sh", args: ["-c", t2.command] };
          var v2;
          const _2 = "insecure_none" === c2.type ? (0, pn.D9)(dn.spawn, w2.executable, w2.args, y2) : (0, B.spawnInSandbox)(w2.executable, w2.args, y2, c2);
          _2.stdin?.end();
          const A2 = (e3) => {
            p2 || (p2 = true, clearTimeout(l2), f2(), n3({ ...e3, output: i3.getOutput(), outputTruncation: i3.getTruncation(), localExecutionTimeMs: Rs(performance.now() - o2) }));
          };
          l2 = setTimeout(() => {
            if (m2 = true, void 0 === a3 && (h2 = `An error occurred while executing the command: Command timed out after ${s2}ms`, a3 = R.Lv.TIMEOUT, f2()), void 0 !== _2.pid && "win32" !== process.platform) try {
              return void process.kill(-_2.pid, "SIGKILL");
            } catch {
            }
            _2.kill("SIGKILL");
          }, s2);
          const S2 = () => {
            if (void 0 === a3) {
              if (h2 = "An error occurred while executing the command: Command aborted", a3 = R.Lv.USER_ABORT, void 0 !== _2.pid && "win32" !== process.platform) try {
                return void process.kill(-_2.pid, "SIGTERM");
              } catch {
              }
              _2.kill("SIGTERM");
            }
          };
          e2.signal.aborted ? S2() : (e2.signal.addEventListener("abort", S2, { once: true }), f2 = () => {
            e2.signal.removeEventListener("abort", S2);
          }), _2.stdout?.on("data", (e3) => {
            const t3 = e3.toString();
            u2 = yi(u2, t3), i3.append(t3);
          }), _2.stderr?.on("data", (e3) => {
            const t3 = e3.toString();
            d2 = yi(d2, t3), i3.append(t3);
          }), _2.on("error", (e3) => {
            A2({ stdout: u2, stderr: d2, returncode: -1, signal: "", exceptionInfo: `An error occurred while executing the command: ${e3.message}` });
          }), _2.on("close", (e3, t3) => {
            A2({ stdout: u2, stderr: d2, returncode: h2.length > 0 ? -1 : wi(e3, t3), signal: t3 ?? (m2 ? "SIGKILL" : ""), exceptionInfo: h2, abortReason: a3 });
          });
        });
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = di(r2, (0, x.VI)(e2.withName("LocalMiniSweAgentBashExecutor.execute")), false).ctx;
          (0, x.HF)(n2, "LocalMiniSweAgentBashExecutor.execute");
          const s2 = t2.command, o2 = (0, M.o1)(t2.workingDirectory || this.defaultCwd), i2 = t2.timeout > 0 ? t2.timeout : 3e4;
          if (!t2.parsingResult) return new R.W4({ result: { case: "spawnError", value: new R.mJ({ command: s2, workingDirectory: o2, error: "Parsing result is required" }) } });
          let a2 = t2.requestedSandboxPolicy ? re(t2.requestedSandboxPolicy) : void 0;
          const c2 = await this.permissionsService.shouldBlockShellCommand(n2, s2, { workingDirectory: o2, timeout: i2, parsingResult: t2.parsingResult, toolCallId: t2.toolCallId }, a2);
          if ("block" === c2.kind) {
            return "permissionsConfig" === c2.reason.type && (c2.reason.isReadonly ?? false) ? new R.W4({ result: { case: "permissionDenied", value: new R.jn({ command: s2, workingDirectory: o2, error: "Command blocked by permissions configuration", isReadonly: true }) } }) : new R.W4({ result: { case: "rejected", value: new R.pZ({ command: s2, workingDirectory: o2, reason: Xe(c2.reason) }) } });
          }
          a2 = c2.policy, j() && (a2 = K(s2, t2.parsingResult)), a2 && "insecure_none" !== a2.type && (a2 = { ...a2, ignoreMapping: await this.ignoreService.getCursorIgnoreMapping() });
          const l2 = await this.runProcess({ ctx: n2, args: t2, workingDirectory: o2, sandboxPolicy: a2, timeoutMs: i2 });
          return this.buildResult({ args: t2, workingDirectory: o2, processResult: l2, sandboxPolicy: a2 });
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          pi(r2);
        }
      }
    }
    var _i = r(83407), Ai = r(38036);
    const Si = 51200;
    function bi(e2) {
      return Buffer.byteLength(e2, "utf8");
    }
    function Ei(e2) {
      return e2 < 1024 ? `${e2}B` : `${Math.round(e2 / 1024)}KB`;
    }
    function Ii(e2) {
      return new Ai.d({ truncated: e2.truncated, truncatedBy: e2.truncatedBy ?? "", totalLines: e2.totalLines, outputLines: e2.outputLines, outputBytes: e2.outputBytes, maxLines: e2.maxLines, maxBytes: e2.maxBytes, firstLineExceedsLimit: e2.firstLineExceedsLimit ?? false, lastLinePartial: e2.lastLinePartial ?? false });
    }
    function Ci(e2, t2) {
      const r2 = t2?.maxLines ?? 2e3, n2 = t2?.maxBytes ?? Si, s2 = e2.split("\n"), o2 = s2.length;
      if (bi(s2[0] ?? "") > n2) return { content: "", truncation: Ii({ truncated: true, truncatedBy: "bytes", totalLines: o2, outputLines: 0, outputBytes: 0, maxLines: r2, maxBytes: n2, firstLineExceedsLimit: true }) };
      const i2 = [];
      let a2, c2 = 0;
      for (let e3 = 0; e3 < s2.length; e3++) {
        if (i2.length >= r2) {
          a2 = "lines";
          break;
        }
        const t3 = s2[e3], o3 = i2.length > 0 ? 1 : 0, l2 = bi(t3) + o3;
        if (c2 + l2 > n2) {
          a2 = "bytes";
          break;
        }
        i2.push(t3), c2 += l2;
      }
      return { content: i2.join("\n"), truncation: Ii({ truncated: void 0 !== a2, truncatedBy: a2, totalLines: o2, outputLines: i2.length, outputBytes: c2, maxLines: r2, maxBytes: n2 }) };
    }
    function ki(e2) {
      return e2.length <= 500 ? { text: e2, wasTruncated: false } : { text: `${e2.slice(0, 500)}... [truncated]`, wasTruncated: true };
    }
    var xi = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Ti = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    async function Ri(e2) {
      const { content: t2, truncation: r2 } = (function(e3, t3) {
        const r3 = t3?.maxLines ?? 2e3, n2 = t3?.maxBytes ?? Si, s2 = e3.split("\n"), o3 = s2.length, i3 = [];
        let a3, c3 = 0, l2 = false;
        for (let e4 = s2.length - 1; e4 >= 0; e4--) {
          if (i3.length >= r3) {
            a3 = "lines";
            break;
          }
          const t4 = s2[e4], o4 = i3.length > 0 ? 1 : 0, u2 = bi(t4) + o4;
          if (c3 + u2 > n2) {
            if (a3 = "bytes", 0 === i3.length) {
              const e5 = Buffer.from(t4, "utf8");
              i3.unshift(e5.subarray(Math.max(0, e5.length - n2)).toString("utf8")), c3 = bi(i3[0]), l2 = true;
            }
            break;
          }
          i3.unshift(t4), c3 += u2;
        }
        return { content: i3.join("\n"), truncation: Ii({ truncated: void 0 !== a3, truncatedBy: a3, totalLines: o3, outputLines: i3.length, outputBytes: c3, maxLines: r3, maxBytes: n2, lastLinePartial: l2 }) };
      })(e2 || "(no output)");
      if (!r2.truncated) return { output: t2 };
      const o2 = await (0, n.mkdtemp)((0, s.join)((0, ge.tmpdir)(), "pi-bash-")), i2 = (0, s.join)(o2, "output.log");
      await (0, n.writeFile)(i2, e2, "utf8");
      const a2 = r2.totalLines - r2.outputLines + 1, c2 = r2.totalLines;
      return { output: `${t2}

${r2.lastLinePartial ? `[Showing last ${Ei(r2.outputBytes)} of line ${c2} (${Ei(Si)} limit). Full output: ${i2}]` : `[Showing lines ${a2}-${c2} of ${r2.totalLines}. Full output: ${i2}]`}`, fullOutputPath: i2, truncation: r2 };
    }
    class Bi {
      constructor(e2) {
        this.shellExecutor = e2;
      }
      async execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = xi(n2, (0, x.VI)(e2.withName("LocalPiBashExecutor.execute")), false), o2 = await this.shellExecutor.execute(s2.ctx, (function(e3, t3) {
            const r3 = void 0 !== e3.timeout && e3.timeout > 0 ? Math.round(1e3 * e3.timeout) : 2147483647, n3 = e3.command.trim().split(/\s+/)[0] ?? "";
            return new R.a({ command: e3.command, timeout: r3, toolCallId: t3?.execId ?? "", fileOutputThresholdBytes: BigInt(0), parsingResult: new R.HO({ parsingFailed: false, executableCommands: [{ name: n3, fullText: e3.command, args: [] }] }) });
          })(t2, r2), r2);
          switch (o2.result.case) {
            case "success": {
              const e3 = await Ri(`${o2.result.value.stdout}${o2.result.value.stderr}`);
              return new _i.AH({ result: { case: "success", value: new _i.cV(e3) } });
            }
            case "failure": {
              const e3 = await Ri(`${o2.result.value.stdout}${o2.result.value.stderr}`);
              return new _i.AH({ result: { case: "success", value: new _i.cV({ ...e3, output: `${e3.output}

Command exited with code ${o2.result.value.exitCode}` }) } });
            }
            case "timeout":
              return this.error(`Command timed out after ${Math.round(o2.result.value.timeoutMs / 1e3)} seconds`);
            case "rejected":
              return this.error(o2.result.value.reason || "Command aborted");
            case "permissionDenied":
            case "spawnError":
              return this.error(o2.result.value.error);
            default:
              return this.error("Command failed");
          }
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          Ti(n2);
        }
      }
      error(e2) {
        return new _i.AH({ result: { case: "error", value: new _i.bD({ error: e2 }) } });
      }
    }
    var Pi = r(98837), Ji = r(19950);
    function Mi(e2) {
      switch (e2.type) {
        case "cursorIgnore":
          return "Path is blocked by cursorignore";
        case "adminBlock":
          return `Blocked by ${e2.source}`;
        case "adminCommandDenylist":
          return he(e2.pattern);
        case "userRejected":
          return e2.reason ?? "User rejected the operation";
        case "permissionsConfig":
          return e2.isReadonly ? "Blocked by readonly permissions configuration" : "Blocked by permissions configuration";
        case "cursorFiles":
          return "Path is blocked because it is a Cursor internal file";
        case "unsafeResolution":
          return e2.message;
        case "needsApproval":
          return e2.approvalReason;
      }
    }
    var qi = r(75261);
    function Di(e2) {
      return e2.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    }
    function Oi(e2) {
      return e2.normalize("NFKC").replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[\u2013\u2014]/g, "-").replace(/\u00a0/g, " ").split("\n").map((e3) => e3.trimEnd()).join("\n");
    }
    function Ni(e2, t2) {
      if (0 === t2.length) return 0;
      let r2 = 0, n2 = e2.indexOf(t2);
      for (; -1 !== n2; ) r2++, n2 = e2.indexOf(t2, n2 + t2.length);
      return r2;
    }
    function Fi(e2, t2) {
      const r2 = e2.split("\n"), n2 = t2.split("\n"), s2 = Math.max(r2.length, n2.length);
      for (let e3 = 0; e3 < s2; e3++) if (r2[e3] !== n2[e3]) return e3 + 1;
    }
    function Ui(e2, t2, r2) {
      if (0 === r2.length) throw new Error("edits must contain at least one replacement.");
      const { bom: n2, text: s2 } = 65279 === (o2 = t2).charCodeAt(0) ? { bom: o2[0], text: o2.slice(1) } : { bom: "", text: o2 };
      var o2;
      const i2 = (function(e3) {
        return e3.includes("\r\n") ? "\r\n" : "\n";
      })(s2), a2 = Di(s2), { matches: c2, matchedContent: l2 } = (function(e3, t3) {
        const r3 = [];
        let n3 = false;
        for (const s4 of t3) {
          if (0 === s4.oldText.length) throw new Error("oldText must not be empty.");
          const t4 = Di(s4.oldText), o4 = Ni(e3, t4);
          if (1 !== o4) {
            if (o4 > 1) throw new Error("oldText must be unique in the file.");
            n3 = true;
            break;
          }
          r3.push({ index: e3.indexOf(t4), length: t4.length, replacement: Di(s4.newText) });
        }
        if (!n3) return { matches: r3, matchedContent: e3 };
        const s3 = Oi(e3), o3 = [];
        for (const e4 of t3) {
          const t4 = Oi(Di(e4.oldText)), r4 = Ni(s3, t4);
          if (0 === r4) throw new Error("oldText was not found in the file.");
          if (r4 > 1) throw new Error("oldText must be unique in the file.");
          o3.push({ index: s3.indexOf(t4), length: t4.length, replacement: Oi(Di(e4.newText)) });
        }
        return { matches: o3, matchedContent: s3 };
      })(a2, r2), u2 = (function(e3, t3) {
        const r3 = [...t3].sort((e4, t4) => e4.index - t4.index);
        for (let e4 = 1; e4 < r3.length; e4++) {
          const t4 = r3[e4 - 1];
          if (r3[e4].index < t4.index + t4.length) throw new Error("edits must not overlap.");
        }
        let n3 = e3;
        for (const e4 of r3.reverse()) n3 = n3.slice(0, e4.index) + e4.replacement + n3.slice(e4.index + e4.length);
        return n3;
      })(l2, c2);
      if (u2 === a2) throw new Error("edits did not change the file.");
      const d2 = n2 + (function(e3, t3) {
        return "\n" === t3 ? e3 : e3.replace(/\n/g, "\r\n");
      })(u2, i2), p2 = (0, qi.ss)(e2, e2, a2, u2, "", "", { context: 4 });
      return { newContent: d2, diff: p2, patch: p2, firstChangedLine: Fi(a2, u2) };
    }
    const Li = /* @__PURE__ */ new Map();
    async function $i(e2, t2) {
      const r2 = await (async function(e3) {
        try {
          return await (0, n.realpath)(e3);
        } catch {
          return e3;
        }
      })(e2), s2 = Li.get(r2) ?? Promise.resolve();
      let o2;
      const i2 = new Promise((e3) => {
        o2 = e3;
      }), a2 = s2.then(() => i2);
      Li.set(r2, a2), await s2;
      try {
        return await t2();
      } finally {
        o2(), Li.get(r2) === a2 && Li.delete(r2);
      }
    }
    function Qi(e2, t2) {
      let r2 = e2.trim().replace(/\u00a0/g, " ");
      return r2.startsWith("@") && (r2 = r2.slice(1)), r2.startsWith("file://") && (r2 = (0, Hn.fileURLToPath)(r2)), ("~" === r2 || r2.startsWith("~/")) && (r2 = (0, s.join)((0, ge.homedir)(), r2.slice(2))), (0, s.normalize)((0, s.isAbsolute)(r2) ? r2 : (0, s.resolve)(t2 ?? process.cwd(), r2));
    }
    function ji(e2, t2) {
      const r2 = Qi(e2, t2);
      if ((0, C.existsSync)(r2)) return r2;
      for (const e3 of (function(e4) {
        const t3 = (0, s.dirname)(e4), r3 = e4.slice(t3.length + 1), n2 = /* @__PURE__ */ new Set();
        return n2.add(e4), n2.add((0, s.join)(t3, r3.normalize("NFD"))), n2.add((0, s.join)(t3, r3.replace(/'/g, "’"))), n2.add((0, s.join)(t3, r3.replace(/ /g, " "))), n2.add((0, s.join)(t3, r3.replace(/'/g, "’").normalize("NFD"))), [...n2];
      })(r2)) if ((0, C.existsSync)(e3)) return e3;
      return r2;
    }
    var Gi = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Hi = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class zi {
      constructor(e2, t2, r2) {
        this.permissionsService = e2, this.writeExecutor = t2, this.workspacePath = r2;
      }
      async execute(e2, t2, r2) {
        const s2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = Gi(s2, (0, x.VI)(e2.withName("LocalPiEditExecutor.execute")), false), i2 = Qi(t2.path, this.workspacePath);
          return $i(i2, async () => {
            const e3 = await this.permissionsService.shouldBlockRead(i2);
            if (e3) return this.error(`Read blocked: ${Mi(e3)}`);
            try {
              if ((await (0, n.stat)(i2)).isDirectory()) return this.error(`Path is a directory: ${i2}`);
              const e4 = (await (0, n.readFile)(i2)).toString("utf8"), s3 = Ui(t2.path, e4, t2.edits), a2 = await this.writeExecutor.execute(o2.ctx, new Ji.hY({ path: i2, fileText: s3.newContent, toolCallId: r2?.execId ?? "" }), r2);
              switch (a2.result.case) {
                case "success":
                  return new Pi.u7({ result: { case: "success", value: new Pi.uL({ output: `Successfully replaced ${t2.edits.length} block(s) in ${t2.path}.`, diff: s3.diff, patch: s3.patch, firstChangedLine: s3.firstChangedLine }) } });
                case "rejected":
                  return new Pi.u7({ result: { case: "rejected", value: new Pi.pE({ reason: a2.result.value.reason }) } });
                default:
                  return this.error(this.writeErrorMessage(a2.result.value, t2.path));
              }
            } catch (e4) {
              return this.error(e4 instanceof Error ? e4.message : "Unknown edit error");
            }
          });
        } catch (e3) {
          s2.error = e3, s2.hasError = true;
        } finally {
          Hi(s2);
        }
      }
      writeErrorMessage(e2, t2) {
        if (null != e2 && "object" == typeof e2 && "error" in e2) {
          const t3 = e2.error;
          if ("string" == typeof t3) return t3;
        }
        return `Failed to edit ${t2}`;
      }
      error(e2) {
        return new Pi.u7({ result: { case: "error", value: new Pi.Nd({ error: e2 }) } });
      }
    }
    var Wi = r(83426), Vi = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Ki = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function Yi(e2) {
      return e2.split(s.sep).join("/");
    }
    class Zi {
      constructor(e2, t2) {
        this.permissionsService = e2, this.workspacePath = t2;
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          Vi(r2, (0, x.VI)(e2.withName("LocalPiFindExecutor.execute")), false);
          const o2 = Qi(t2.path || ".", this.workspacePath), i2 = await this.permissionsService.shouldBlockRead(o2);
          if (i2) return this.error(`Find blocked: ${Mi(i2)}`);
          try {
            if (!(await (0, n.stat)(o2)).isDirectory()) return this.error(`Not a directory: ${o2}`);
            const e3 = Math.max(1, t2.limit ?? 1e3), r3 = await (async function(e4, t3, r4) {
              const o3 = [];
              return await (async function e5(i4) {
                if (o3.length >= t3) return;
                const a3 = await (0, n.readdir)(i4, { withFileTypes: true });
                for (const n2 of a3) {
                  if (o3.length >= t3) return;
                  if (".git" === n2.name || "node_modules" === n2.name) continue;
                  const a4 = (0, s.join)(i4, n2.name);
                  await r4(a4) && (o3.push(a4 + (n2.isDirectory() ? s.sep : "")), n2.isDirectory() && await e5(a4));
                }
              })(e4), o3;
            })(o2, e3, async (e4) => !await this.permissionsService.shouldBlockRead(e4)), i3 = t2.pattern.includes("/") && !t2.pattern.startsWith("**/") ? `**/${t2.pattern}` : t2.pattern, a2 = r3.map((e4) => ({ raw: e4, relative: Yi((0, s.relative)(o2, e4)) })).filter(({ relative: e4 }) => (0, Bt.xF)(e4, i3, { dot: true }));
            if (0 === a2.length) return this.success("No files found matching pattern");
            const c2 = Ci(a2.map((e4) => e4.relative).join("\n"), { maxLines: Number.MAX_SAFE_INTEGER }), l2 = r3.length >= e3 ? e3 : void 0, u2 = [];
            return void 0 !== l2 && u2.push(`${e3} results limit reached. Use limit=${2 * e3} for more, or refine pattern`), c2.truncation.truncated && u2.push(`${Ei(Si)} limit reached`), this.success(u2.length > 0 ? `${c2.content}

[${u2.join(". ")}]` : c2.content, { resultLimitReached: l2, truncation: c2.truncation.truncated ? c2.truncation : void 0 });
          } catch (e3) {
            return this.error(e3 instanceof Error ? e3.message : "Unknown find error");
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Ki(r2);
        }
      }
      success(e2, t2) {
        return new Wi.bT({ result: { case: "success", value: new Wi.x9({ output: e2, truncation: t2?.truncation, resultLimitReached: t2?.resultLimitReached }) } });
      }
      error(e2) {
        return new Wi.bT({ result: { case: "error", value: new Wi.Uy({ error: e2 }) } });
      }
    }
    const Xi = require("node:readline");
    var ea = r(71125), ta = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, ra = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const na = dn.spawn;
    class sa {
      constructor(e2, t2) {
        this.permissionsService = e2, this.workspacePath = t2;
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          ta(r2, (0, x.VI)(e2.withName("LocalPiGrepExecutor.execute")), false);
          const s2 = Qi(t2.path || ".", this.workspacePath), o2 = await this.permissionsService.shouldBlockRead(s2);
          if (o2) return this.error(`Search blocked: ${Mi(o2)}`);
          try {
            const e3 = (await (0, n.stat)(s2)).isDirectory(), r3 = ["--json", "--line-number", "--color=never", "--hidden"];
            t2.ignoreCase && r3.push("--ignore-case"), t2.literal && r3.push("--fixed-strings"), void 0 !== t2.glob && r3.push("--glob", t2.glob), r3.push("--", t2.pattern, s2);
            const o3 = (0, pn.D9)(na, (0, B.Ko)(), r3, { stdio: ["ignore", "pipe", "pipe"] }), i2 = [];
            let a2 = "", c2 = false;
            const l2 = Math.max(1, t2.limit ?? 100), u2 = (0, Xi.createInterface)({ input: o3.stdout });
            o3.stderr.on("data", (e4) => {
              a2 += e4.toString();
            }), u2.on("line", (e4) => {
              if (i2.length >= l2 || 0 === e4.trim().length) return;
              const t3 = JSON.parse(e4);
              if ("match" !== t3.type) return;
              const r4 = t3.data?.path?.text, n2 = t3.data?.line_number;
              void 0 !== r4 && void 0 !== n2 && (i2.push({ filePath: r4, lineNumber: n2, lineText: t3.data?.lines?.text?.replace(/\n$/, "") }), i2.length >= l2 && (c2 = true, o3.kill()));
            });
            const d2 = await new Promise((e4, t3) => {
              o3.on("error", t3), o3.on("close", e4);
            });
            if (u2.close(), !c2 && 0 !== d2 && 1 !== d2) return this.error(a2.trim() || `ripgrep exited with code ${d2}`);
            if (0 === i2.length) return this.success("No matches found");
            const p2 = [];
            for (const e4 of i2) await this.permissionsService.shouldBlockRead(e4.filePath) || p2.push(e4);
            if (0 === p2.length) return this.success("No matches found");
            const { output: m2, linesTruncated: h2 } = await this.formatMatches(p2, s2, e3, Math.max(0, t2.context ?? 0)), f2 = Ci(m2, { maxLines: Number.MAX_SAFE_INTEGER }), g2 = [];
            return c2 && g2.push(`${l2} matches limit reached. Use limit=${2 * l2} for more, or refine pattern`), f2.truncation.truncated && g2.push(`${Ei(Si)} limit reached`), h2 && g2.push("Some lines truncated to 500 chars. Use read tool to see full lines"), this.success(g2.length > 0 ? `${f2.content}

[${g2.join(". ")}]` : f2.content, { matchLimitReached: c2 ? l2 : void 0, linesTruncated: h2, truncation: f2.truncation.truncated ? f2.truncation : void 0 });
          } catch (e3) {
            return this.error(e3 instanceof Error ? e3.message : "Unknown grep error");
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          ra(r2);
        }
      }
      async formatMatches(e2, t2, r2, o2) {
        const i2 = [];
        let a2 = false;
        for (const c2 of e2) {
          const e3 = r2 ? (0, s.relative)(t2, c2.filePath) : (0, s.basename)(c2.filePath);
          if (0 === o2 && void 0 !== c2.lineText) {
            const t3 = ki(c2.lineText);
            a2 = a2 || t3.wasTruncated, i2.push(`${e3}:${c2.lineNumber}: ${t3.text}`);
            continue;
          }
          const l2 = (await (0, n.readFile)(c2.filePath, "utf8")).replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n"), u2 = Math.max(1, c2.lineNumber - o2), d2 = Math.min(l2.length, c2.lineNumber + o2);
          for (let t3 = u2; t3 <= d2; t3++) {
            const r3 = ki(l2[t3 - 1] ?? "");
            a2 = a2 || r3.wasTruncated, i2.push(t3 === c2.lineNumber ? `${e3}:${t3}: ${r3.text}` : `${e3}-${t3}- ${r3.text}`);
          }
        }
        return { output: i2.join("\n"), linesTruncated: a2 };
      }
      success(e2, t2) {
        return new ea.mr({ result: { case: "success", value: new ea.oC({ output: e2, truncation: t2?.truncation, matchLimitReached: t2?.matchLimitReached, linesTruncated: t2?.linesTruncated ?? false }) } });
      }
      error(e2) {
        return new ea.mr({ result: { case: "error", value: new ea.hP({ error: e2 }) } });
      }
    }
    var oa = r(53996), ia = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, aa = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class ca {
      constructor(e2, t2) {
        this.permissionsService = e2, this.workspacePath = t2;
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          ia(r2, (0, x.VI)(e2.withName("LocalPiLsExecutor.execute")), false);
          const o2 = Qi(t2.path || ".", this.workspacePath), i2 = await this.permissionsService.shouldBlockRead(o2);
          if (i2) return this.error(`List blocked: ${Mi(i2)}`);
          try {
            if (!(await (0, n.stat)(o2)).isDirectory()) return this.error(`Not a directory: ${o2}`);
            const e3 = Math.max(1, t2.limit ?? 500), r3 = (await (0, n.readdir)(o2)).sort((e4, t3) => e4.toLowerCase().localeCompare(t3.toLowerCase())), i3 = [];
            let a2 = false;
            for (const t3 of r3) {
              if (i3.length >= e3) {
                a2 = true;
                break;
              }
              try {
                const e4 = (0, s.join)(o2, t3);
                if (await this.permissionsService.shouldBlockRead(e4)) continue;
                const r4 = await (0, n.stat)(e4);
                i3.push(t3 + (r4.isDirectory() ? "/" : ""));
              } catch {
              }
            }
            if (0 === i3.length) return this.success("(empty directory)");
            const c2 = Ci(i3.join("\n"), { maxLines: Number.MAX_SAFE_INTEGER }), l2 = [];
            return a2 && l2.push(`${e3} entries limit reached. Use limit=${2 * e3} for more`), c2.truncation.truncated && l2.push(`${Ei(Si)} limit reached`), this.success(l2.length > 0 ? `${c2.content}

[${l2.join(". ")}]` : c2.content, { entryLimitReached: a2 ? e3 : void 0, truncation: c2.truncation.truncated ? c2.truncation : void 0 });
          } catch (e3) {
            return this.error(e3 instanceof Error ? e3.message : "Unknown ls error");
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          aa(r2);
        }
      }
      success(e2, t2) {
        return new oa.pX({ result: { case: "success", value: new oa.f5({ output: e2, truncation: t2?.truncation, entryLimitReached: t2?.entryLimitReached }) } });
      }
      error(e2) {
        return new oa.pX({ result: { case: "error", value: new oa.iG({ error: e2 }) } });
      }
    }
    var la = r(39857), ua = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, da = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class pa {
      constructor(e2, t2) {
        this.permissionsService = e2, this.workspacePath = t2;
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          ua(r2, (0, x.VI)(e2.withName("LocalPiReadExecutor.execute")), false);
          const s2 = ji(t2.path, this.workspacePath), o2 = await this.permissionsService.shouldBlockRead(s2);
          if (o2) return this.error(`Read blocked: ${Mi(o2)}`);
          try {
            if ((await (0, n.stat)(s2)).isDirectory()) return this.error(`Path is a directory: ${s2}`);
            const e3 = (await (0, n.readFile)(s2)).toString("utf8").split("\n"), r3 = void 0 !== t2.offset ? Math.max(0, t2.offset - 1) : 0;
            if (r3 >= e3.length) return this.error(`Offset ${t2.offset} is beyond end of file (${e3.length} lines total)`);
            const o3 = void 0 !== t2.limit ? e3.slice(r3, r3 + t2.limit).join("\n") : e3.slice(r3).join("\n"), { content: i2, truncation: a2 } = Ci(o3), c2 = r3 + 1;
            let l2 = i2;
            if (a2.firstLineExceedsLimit) {
              l2 = `[Line ${c2} is ${Ei(Buffer.byteLength(e3[r3] ?? "", "utf8"))}, exceeds ${Ei(Si)} limit. Use bash: sed -n '${c2}p' ${t2.path} | head -c 51200]`;
            } else if (a2.truncated) {
              const t3 = c2 + a2.outputLines - 1;
              l2 += `

[Showing lines ${c2}-${t3} of ${e3.length}. Use offset=${t3 + 1} to continue.]`;
            } else if (void 0 !== t2.limit && r3 + t2.limit < e3.length) {
              const n2 = r3 + t2.limit + 1;
              l2 += `

[${e3.length - (r3 + t2.limit)} more lines in file. Use offset=${n2} to continue.]`;
            }
            return new la.Q({ result: { case: "success", value: new la.yP({ output: l2, truncation: a2.truncated ? a2 : void 0 }) } });
          } catch (e3) {
            return this.error(e3 instanceof Error ? e3.message : "Unknown read error");
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          da(r2);
        }
      }
      error(e2) {
        return new la.Q({ result: { case: "error", value: new la.tB({ error: e2 }) } });
      }
    }
    var ma = r(43464), ha = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, fa = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class ga {
      constructor(e2, t2) {
        this.writeExecutor = e2, this.workspacePath = t2;
      }
      async execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = ha(n2, (0, x.VI)(e2.withName("LocalPiWriteExecutor.execute")), false), o2 = Qi(t2.path, this.workspacePath);
          return $i(o2, async () => {
            const e3 = await this.writeExecutor.execute(s2.ctx, new Ji.hY({ path: o2, fileText: t2.content, toolCallId: r2?.execId ?? "" }), r2);
            switch (e3.result.case) {
              case "success":
                return new ma.hO({ result: { case: "success", value: new ma.vu({ output: `Successfully wrote ${t2.content.length} bytes to ${t2.path}` }) } });
              case "rejected":
                return new ma.hO({ result: { case: "rejected", value: new ma.Ye({ reason: e3.result.value.reason }) } });
              case "permissionDenied":
              case "noSpace":
              case "error":
                return new ma.hO({ result: { case: "error", value: new ma.OD({ error: "error" in e3.result.value ? e3.result.value.error : `Failed to write ${t2.path}` }) } });
              default:
                return new ma.hO({ result: { case: "error", value: new ma.OD({ error: `Failed to write ${t2.path}` }) } });
            }
          });
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          fa(n2);
        }
      }
    }
    var ya = r(88701);
    function wa(e2) {
      if (void 0 !== e2) return { journalEpoch: e2.journalEpoch, seq: Number(e2.seq), lastEventId: e2.lastEventId };
    }
    class va {
      constructor(e2) {
        this.drainer = e2;
      }
      async execute(e2, t2) {
        try {
          void 0 !== t2.includeQuotaNotices && this.drainer.setIncludeQuotaNoticesOverride(t2.includeQuotaNotices);
          const e3 = await this.drainer.drain({ cursor: wa(t2.cursor), advance: false !== t2.advance });
          return new ya.Ev({ result: { case: "success", value: new ya.iS({ events: e3.events.map((e4) => new ya.RZ({ v: e4.v, eventId: e4.event_id, journalEpoch: e4.journal_epoch, seq: BigInt(e4.seq), tsMs: BigInt(e4.ts_ms), kind: e4.kind, storeId: e4.store_id, originalRelPath: e4.original_rel_path, conflictRelPath: e4.conflict_rel_path, originalAbsPath: e4.original_abs_path, conflictAbsPath: e4.conflict_abs_path, preservedBytes: void 0 === e4.preserved_bytes ? void 0 : BigInt(e4.preserved_bytes), scopeKind: e4.scope_kind, limitBytes: void 0 === e4.limit_bytes ? void 0 : BigInt(e4.limit_bytes), usageBytes: void 0 === e4.usage_bytes ? void 0 : BigInt(e4.usage_bytes) })), nextCursor: (r2 = e3.nextCursor, new ya.LK({ journalEpoch: r2.journalEpoch, seq: BigInt(r2.seq), lastEventId: r2.lastEventId })), gap: e3.gap }) } });
        } catch (e3) {
          return new ya.Ev({ result: { case: "error", value: new ya.h6({ error: e3 instanceof Error ? e3.message : String(e3) }) } });
        }
        var r2;
      }
    }
    class _a {
      constructor(e2) {
        this.shellStdinWriter = e2;
      }
      async execute(e2, t2) {
        const r2 = t2.shellId;
        try {
          await this.shellStdinWriter(r2, t2.chars);
        } catch (e3) {
          return new T.nt({ result: { case: "error", value: new T.Gv({ error: `Failed to write to shell ${r2} stdin: ${e3 instanceof Error ? e3.message : "Unknown error"}` }) } });
        }
        return new T.nt({ result: { case: "success", value: new T.tR({ shellId: r2, terminalFileLengthBeforeInputWritten: 0 }) } });
      }
    }
    var Aa = r(91434);
    class Sa {
      constructor(e2) {
        this.source = e2, this.pastElements = [], this.closed = false, this.forks = /* @__PURE__ */ new Set(), this.consume();
      }
      async consume() {
        try {
          for await (const e2 of this.source) {
            this.pastElements.push(e2);
            const t2 = [];
            for (const r2 of this.forks) t2.push(r2.write(e2).catch(() => {
            }));
            await Promise.allSettled(t2);
          }
        } catch (e2) {
          this.error = e2 instanceof Error ? e2 : new Error(String(e2));
        } finally {
          this.closed = true;
          for (const e2 of this.forks) this.error ? e2.throw(this.error) : e2.close();
          this.forks.clear();
        }
      }
      fork() {
        if (this.closed) {
          const e3 = this.pastElements, t3 = this.error;
          return (async function* () {
            for (const t4 of e3) yield t4;
            if (t3) throw t3;
          })();
        }
        const e2 = (0, Aa.Jt)(), t2 = this.pastElements.slice();
        this.forks.add(e2);
        const r2 = this;
        return (async function* () {
          for (const e3 of t2) yield e3;
          try {
            for await (const t3 of e2) yield t3;
          } finally {
            r2.forks.delete(e2);
          }
        })();
      }
    }
    function ba(e2, t2) {
      return `${e2}:${(0, Ot.createHash)("sha256").update(t2.toBinary()).digest("hex")}`;
    }
    function Ea(e2, t2) {
      const r2 = new E({ max: t2?.max ?? 10, ttl: t2?.ttl });
      return { async execute(t3, n2, s2) {
        if (!s2?.execId) return e2.execute(t3, n2, s2);
        const o2 = ba(s2.execId, n2), i2 = r2.get(o2);
        if (void 0 !== i2) return i2;
        const a2 = await e2.execute(t3, n2, s2);
        return r2.set(o2, a2), a2;
      } };
    }
    var Ia = r(91448), Ca = r(26885);
    class ka {
      constructor(e2, t2) {
        this.getCanvasDiagnostics = e2, this.beginCanvasSave = t2;
      }
      async execute(e2, t2) {
        let r2 = () => {
        };
        const n2 = new Promise((e3) => {
          r2 = e3;
        });
        let s2;
        if (void 0 === this.beginCanvasSave) s2 = Promise.resolve(void 0);
        else try {
          s2 = this.beginCanvasSave(t2.path, { typecheckOutcome: n2 }).catch(() => {
          });
        } catch {
          s2 = Promise.resolve(void 0);
        }
        try {
          const e3 = await this.getCanvasDiagnostics(t2.path);
          return void 0 === e3 ? (r2("unavailable"), xa(Ta(t2.path, "diagnostics unavailable"), await s2)) : (r2(e3.some((e4) => 1 === e4.severity) ? "failed" : "passed"), xa(new Ia.GL({ result: { case: "success", value: new Ia.uX({ path: t2.path, diagnostics: e3.map(Ra) }) } }), await s2));
        } catch (e3) {
          return r2("unavailable"), xa(Ta(t2.path, e3 instanceof Error ? e3.message : String(e3)), await s2);
        }
      }
    }
    function xa(e2, t2) {
      return void 0 === t2 || (e2.saveState = t2.saveState, e2.canvasId = t2.canvasId, e2.title = t2.title, e2.saveDetail = t2.saveDetail), e2;
    }
    function Ta(e2, t2) {
      return new Ia.GL({ result: { case: "error", value: new Ia.HW({ path: e2, error: t2 }) } });
    }
    function Ra(e2) {
      return new Ca.oQ({ severity: Ba(e2.severity), range: new Qs.Q6({ start: new Qs.yX({ line: e2.range.start.line + 1, column: e2.range.start.character + 1 }), end: new Qs.yX({ line: e2.range.end.line + 1, column: e2.range.end.character + 1 }) }), message: e2.message, source: "ts", code: e2.code ?? "" });
    }
    function Ba(e2) {
      switch (e2) {
        case 1:
          return Ca.h_.ERROR;
        case 2:
          return Ca.h_.WARNING;
        case 3:
          return Ca.h_.INFORMATION;
        case 4:
          return Ca.h_.HINT;
        default:
          return Ca.h_.UNSPECIFIED;
      }
    }
    var Pa = r(81001), Ja = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Ma = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class qa {
      constructor(e2, t2) {
        this.workspacePath = e2, this.diagnosticsProvider = t2;
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          Ja(r2, (0, x.VI)(e2.withName("LocalDiagnosticsExecutor.execute")), false);
          let s2;
          [e2, s2] = e2.withTimeoutAndCancel(1e4);
          try {
            const r3 = (0, M.o1)(t2.path, this.workspacePath);
            try {
              const e3 = await (0, n.stat)(r3);
              if (!e3.isFile() && !e3.isDirectory()) return new Ca.Ek({ result: { case: "fileNotFound", value: new Ca.Mu({ path: t2.path }) } });
            } catch (e3) {
              if ("ENOENT" === e3.code) return new Ca.Ek({ result: { case: "fileNotFound", value: new Ca.Mu({ path: t2.path }) } });
              if ("EACCES" === e3.code) return new Ca.Ek({ result: { case: "permissionDenied", value: new Ca.RP({ path: t2.path }) } });
              throw e3;
            }
            const s3 = (0, M.o1)(r3, this.workspacePath), o2 = new Pa.q(s3);
            await this.diagnosticsProvider.open(e2, o2);
            const i2 = (await this.diagnosticsProvider.getDiagnostics(e2, o2)).map((e3) => this.convertDiagnostic(e3));
            return new Ca.Ek({ result: { case: "success", value: new Ca.a1({ path: t2.path, diagnostics: i2, totalDiagnostics: i2.length }) } });
          } catch (r3) {
            return e2.canceled ? new Ca.Ek({ result: { case: "error", value: new Ca.Ho({ path: t2.path, error: "Request timed out after 10 seconds" }) } }) : new Ca.Ek({ result: { case: "error", value: new Ca.Ho({ path: t2.path, error: r3 instanceof Error ? r3.message : String(r3) }) } });
          } finally {
            s2();
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Ma(r2);
        }
      }
      convertDiagnostic(e2) {
        const t2 = e2.message, r2 = "string" == typeof t2 ? t2 : t2 && "object" == typeof t2 && "value" in t2 && "string" == typeof t2.value ? t2.value : "";
        return new Ca.oQ({ severity: this.convertSeverity(e2.severity), range: e2.range ? new Qs.Q6({ start: new Qs.yX({ line: e2.range.start.line, column: e2.range.start.character }), end: new Qs.yX({ line: e2.range.end.line, column: e2.range.end.character }) }) : void 0, message: r2, source: e2.source, code: e2.code ? String(e2.code) : void 0 });
      }
      convertSeverity(e2) {
        switch (e2) {
          case 1:
            return Ca.h_.ERROR;
          case 2:
            return Ca.h_.WARNING;
          case 3:
            return Ca.h_.INFORMATION;
          case 4:
            return Ca.h_.HINT;
          default:
            return Ca.h_.UNSPECIFIED;
        }
      }
    }
    var Da = r(66058);
    async function Oa(e2) {
      const { repoRoot: t2, filePaths: r2, getContent: n2 } = e2, s2 = /* @__PURE__ */ new Map();
      if (0 === r2.length) return s2;
      const o2 = await (async function(e3, t3) {
        const r3 = /* @__PURE__ */ new Map();
        if (0 === t3.length) return r3;
        try {
          const n3 = await new Promise((r4, n4) => {
            const s3 = (0, dn.spawn)("git", ["check-attr", "linguist-generated", "--stdin"], { cwd: e3 });
            let o3 = "";
            s3.stdout.on("data", (e4) => {
              o3 += e4.toString();
            }), s3.stdin.write(`${t3.join("\n")}
`), s3.stdin.end(), s3.on("close", (e4) => {
              r4(o3);
            }), s3.on("error", (e4) => {
              n4(e4);
            });
          });
          for (const e4 of n3.trim().split("\n")) {
            const t4 = e4.match(/^(.+): linguist-generated: (.+)$/);
            if (t4) {
              const e5 = t4[1], n4 = t4[2];
              "true" === n4 || "set" === n4 ? r3.set(e5, true) : "false" !== n4 && "unset" !== n4 || r3.set(e5, false);
            }
          }
        } catch {
        }
        return r3;
      })(t2, r2);
      return await Promise.all(r2.map(async (e3) => {
        const t3 = o2.get(e3);
        if (true !== t3) if (false !== t3) if (Na(e3)) s2.set(e3, { isGenerated: true, source: "path-heuristic" });
        else {
          if (n2) {
            const t4 = await n2(e3);
            if (void 0 !== t4 && Fa(e3, t4)) return void s2.set(e3, { isGenerated: true, source: "content-heuristic" });
          }
          s2.set(e3, { isGenerated: false, source: "none" });
        }
        else s2.set(e3, { isGenerated: false, source: "gitattributes" });
        else s2.set(e3, { isGenerated: true, source: "gitattributes" });
      })), s2;
    }
    function Na(e2) {
      return new Ua(e2).isGeneratedByPath();
    }
    function Fa(e2, t2) {
      return new Ua(e2, () => t2).isGeneratedByContent();
    }
    class Ua {
      constructor(e2, t2) {
        this.name = e2, this.extname = s.extname(e2).toLowerCase(), this.getContent = t2;
      }
      get lines() {
        if (void 0 === this.cachedLines) {
          const e2 = this.getContent?.();
          this.cachedLines = e2 ? e2.split("\n") : [];
        }
        return this.cachedLines;
      }
      get data() {
        return this.getContent?.();
      }
      isGeneratedByPath() {
        return this.xcodeFile() || this.intellijFile() || this.cocoapods() || this.carthageBuild() || this.generatedGraphqlRelay() || this.generatedNetDesignerFile() || this.generatedNetSpecflowFeatureFile() || this.composerLock() || this.cargoLock() || this.cargoOrig() || this.denoLock() || this.flakeLock() || this.bazelLock() || this.nodeModules() || this.goVendor() || this.goLock() || this.packageResolved() || this.poetryLock() || this.pdmLock() || this.uvLock() || this.pixiLock() || this.esyLock() || this.npmShrinkwrapOrPackageLock() || this.pnpmLock() || this.bunLock() || this.terraformLock() || this.generatedYarnPlugnplay() || this.godeps() || this.generatedByZephir() || this.htmlcov() || this.gradleWrapper() || this.mavenWrapper() || this.pipenvLock() || this.generatedPascalTlb() || this.generatedSqlxQuery() || this.sourceMapByName();
      }
      isGeneratedByContent() {
        return !!this.getContent && (this.minifiedFiles() || this.hasSourceMap() || this.sourceMap() || this.compiledCoffeescript() || this.generatedParser() || this.generatedNetDocfile() || this.generatedPostscript() || this.compiledCythonFile() || this.generatedGo() || this.generatedProtocolBufferFromGo() || this.generatedProtocolBuffer() || this.generatedJavascriptProtocolBuffer() || this.generatedTypescriptProtocolBuffer() || this.generatedApacheThrift() || this.generatedJniHeader() || this.vcrCassette() || this.generatedAntlr() || this.generatedModule() || this.generatedUnity3dMeta() || this.generatedRacc() || this.generatedJflex() || this.generatedGrammarkit() || this.generatedRoxygen2() || this.generatedHtml() || this.generatedJison() || this.generatedGrpcCpp() || this.generatedDart() || this.generatedPerlPpportHeader() || this.generatedGamemakerstudio() || this.generatedGimp() || this.generatedVisualstudio6() || this.generatedHaxe() || this.generatedJooq() || this.generatedSorbetRbi() || this.generatedMysqlViewDefinitionFormat());
      }
      xcodeFile() {
        return [".nib", ".xcworkspacedata", ".xcuserstate"].includes(this.extname);
      }
      intellijFile() {
        return /(?:^|\/)\.idea\//.test(this.name);
      }
      cocoapods() {
        return /(^Pods|\/Pods)\//.test(this.name);
      }
      carthageBuild() {
        return /(^|\/)Carthage\/Build\//.test(this.name);
      }
      generatedGraphqlRelay() {
        return /__generated__\//.test(this.name);
      }
      generatedNetDesignerFile() {
        return /\.designer\.(cs|vb)$/i.test(this.name);
      }
      generatedNetSpecflowFeatureFile() {
        return /\.feature\.cs$/i.test(this.name);
      }
      composerLock() {
        return /composer\.lock/.test(this.name);
      }
      cargoLock() {
        return /Cargo\.lock/.test(this.name);
      }
      cargoOrig() {
        return /Cargo\.toml\.orig/.test(this.name);
      }
      denoLock() {
        return /deno\.lock/.test(this.name);
      }
      flakeLock() {
        return /(^|\/)flake\.lock$/.test(this.name);
      }
      bazelLock() {
        return /(^|\/)MODULE\.bazel\.lock$/.test(this.name);
      }
      nodeModules() {
        return /node_modules\//.test(this.name);
      }
      goVendor() {
        return /vendor\/((?!-)[-0-9A-Za-z]+(?<!-)\.)+(com|edu|gov|in|me|net|org|fm|io)/.test(this.name);
      }
      goLock() {
        return /(Gopkg|glide)\.lock/.test(this.name);
      }
      packageResolved() {
        return /Package\.resolved/.test(this.name);
      }
      poetryLock() {
        return /poetry\.lock/.test(this.name);
      }
      pdmLock() {
        return /pdm\.lock/.test(this.name);
      }
      uvLock() {
        return /uv\.lock/.test(this.name);
      }
      pixiLock() {
        return /pixi\.lock/.test(this.name);
      }
      esyLock() {
        return /(^|\/)(\w+\.)?esy\.lock$/.test(this.name);
      }
      npmShrinkwrapOrPackageLock() {
        return /npm-shrinkwrap\.json/.test(this.name) || /package-lock\.json/.test(this.name);
      }
      pnpmLock() {
        return /pnpm-lock\.yaml/.test(this.name);
      }
      bunLock() {
        return /(?:^|\/)bun\.lockb?$/.test(this.name);
      }
      terraformLock() {
        return /(?:^|\/)\.terraform\.lock\.hcl$/.test(this.name);
      }
      generatedYarnPlugnplay() {
        return /(^|\/)\.pnp\..*$/.test(this.name);
      }
      godeps() {
        return /Godeps\//.test(this.name);
      }
      generatedByZephir() {
        return /\.zep\.(c|h|php)$/.test(this.name);
      }
      htmlcov() {
        return /(?:^|\/)htmlcov\//.test(this.name);
      }
      gradleWrapper() {
        return /(?:^|\/)gradlew(?:\.bat)?$/i.test(this.name);
      }
      mavenWrapper() {
        return /(?:^|\/)mvnw(?:\.cmd)?$/i.test(this.name);
      }
      pipenvLock() {
        return /Pipfile\.lock/.test(this.name);
      }
      generatedPascalTlb() {
        return /_tlb\.pas$/i.test(this.name);
      }
      generatedSqlxQuery() {
        return /(?:^|\/)\.sqlx\/query-[a-f\d]{64}\.json$/.test(this.name);
      }
      sourceMapByName() {
        return /\.(css|js)\.map$/i.test(this.name);
      }
      maybeMinified() {
        return [".js", ".css"].includes(this.extname);
      }
      minifiedFiles() {
        if (!this.maybeMinified() || 0 === this.lines.length) return false;
        return this.lines.reduce((e2, t2) => e2 + t2.length, 0) / this.lines.length > 110;
      }
      hasSourceMap() {
        if (!this.maybeMinified()) return false;
        return this.lines.slice(-2).some((e2) => /^\/[*/][#@] source(?:Mapping)?URL|sourceURL=/.test(e2));
      }
      sourceMap() {
        if (".map" !== this.extname) return false;
        if (/\.(css|js)\.map$/i.test(this.name)) return true;
        const e2 = this.lines[0] || "";
        return /^{"version":\d+,/.test(e2) || /^\/\*\* Begin line maps\. \*\*\/{/.test(e2);
      }
      compiledCoffeescript() {
        if (".js" !== this.extname) return false;
        const e2 = this.lines[0] || "";
        if (/^\/\/ Generated by /.test(e2)) return true;
        if ("(function() {" === e2 && "}).call(this);" === (this.lines[this.lines.length - 2] || "") && "" === (this.lines[this.lines.length - 1] || "")) {
          let e3 = 0;
          for (const t2 of this.lines) if (/var /.test(t2)) {
            const r2 = t2.match(/_fn|_i|_len|_ref|_results/g);
            e3 += 1 * (r2?.length || 0);
            const n2 = t2.match(/__bind|__extends|__hasProp|__indexOf|__slice/g);
            e3 += 3 * (n2?.length || 0);
          }
          return e3 >= 3;
        }
        return false;
      }
      generatedNetDocfile() {
        return ".xml" === this.extname && (!(this.lines.length <= 3) && ((this.lines[1] || "").includes("<doc>") && (this.lines[2] || "").includes("<assembly>") && (this.lines[this.lines.length - 2] || "").includes("</doc>")));
      }
      generatedParser() {
        if (".js" !== this.extname) return false;
        const e2 = this.lines.slice(0, 5).join("");
        return /^(?:[^/]|\/[^*])*\/\*(?:[^*]|\*[^/])*Generated by PEG\.js/.test(e2);
      }
      generatedPostscript() {
        if (![".ps", ".eps", ".pfa"].includes(this.extname)) return false;
        const e2 = this.data;
        if (!e2) return false;
        if (/^\s*(?:currentfile eexec\s+|\/sfnts\s+\[\s<)/.test(e2)) return true;
        const t2 = this.lines.slice(0, 10).find((e3) => /^%%Creator: /.test(e3));
        return !!t2 && (!(!/[0-9]|draw|mpage|ImageMagick|inkscape|MATLAB/.test(t2) && !/PCBNEW|pnmtops|\(Unknown\)|Serif Affinity|Filterimage -tops/.test(t2)) || !!t2.includes("EAGLE") && this.lines.slice(0, 5).some((e3) => /^%%Title: EAGLE Drawing /.test(e3)));
      }
      generatedGo() {
        return ".go" === this.extname && (!(this.lines.length <= 1) && this.lines.slice(0, 40).some((e2) => /^\/\/ Code generated .*/.test(e2)));
      }
      generatedProtocolBufferFromGo() {
        return ".proto" === this.extname && (!(this.lines.length <= 1) && this.lines.slice(0, 20).some((e2) => e2.includes("This file was autogenerated by go-to-protobuf")));
      }
      generatedProtocolBuffer() {
        return !![".py", ".java", ".h", ".cc", ".cpp", ".m", ".rb", ".php"].includes(this.extname) && (!(this.lines.length <= 1) && this.lines.slice(0, 3).some((e2) => e2.includes("Generated by the protocol buffer compiler.  DO NOT EDIT!")));
      }
      generatedJavascriptProtocolBuffer() {
        return ".js" === this.extname && (!(this.lines.length <= 6) && (this.lines[5] || "").includes("GENERATED CODE -- DO NOT EDIT!"));
      }
      generatedTypescriptProtocolBuffer() {
        return ".ts" === this.extname && (!(this.lines.length <= 4) && (this.lines[0] || "").includes("Code generated by protoc-gen-ts_proto. DO NOT EDIT."));
      }
      generatedApacheThrift() {
        return !![".rb", ".py", ".go", ".js", ".m", ".java", ".h", ".cc", ".cpp", ".php"].includes(this.extname) && this.lines.slice(0, 6).some((e2) => e2.includes("Autogenerated by Thrift Compiler"));
      }
      generatedJniHeader() {
        return ".h" === this.extname && (!(this.lines.length <= 2) && ((this.lines[0] || "").includes("/* DO NOT EDIT THIS FILE - it is machine generated */") && (this.lines[1] || "").includes("#include <jni.h>")));
      }
      vcrCassette() {
        return ".yml" === this.extname && (!(this.lines.length <= 2) && (this.lines[this.lines.length - 2] || "").includes("recorded_with: VCR"));
      }
      generatedAntlr() {
        return ".g" === this.extname && (!(this.lines.length <= 2) && (this.lines[1] || "").includes("generated by Xtest"));
      }
      compiledCythonFile() {
        return !![".c", ".cpp"].includes(this.extname) && (!(this.lines.length <= 1) && (this.lines[0] || "").includes("Generated by Cython"));
      }
      generatedModule() {
        if (".mod" !== this.extname) return false;
        if (this.lines.length <= 1) return false;
        const e2 = this.lines[0] || "";
        return e2.includes("PCBNEW-LibModule-V") || e2.includes("GFORTRAN module version '");
      }
      generatedUnity3dMeta() {
        return ".meta" === this.extname && (!(this.lines.length <= 1) && (this.lines[0] || "").includes("fileFormatVersion: "));
      }
      generatedRacc() {
        return ".rb" === this.extname && (!(this.lines.length <= 2) && (this.lines[2] || "").startsWith("# This file is automatically generated by Racc"));
      }
      generatedJflex() {
        return ".java" === this.extname && (!(this.lines.length <= 1) && (this.lines[0] || "").startsWith("/* The following code was generated by JFlex "));
      }
      generatedGrammarkit() {
        return ".java" === this.extname && (!(this.lines.length <= 1) && (this.lines[0] || "").startsWith("// This is a generated file. Not intended for manual editing."));
      }
      generatedRoxygen2() {
        return ".rd" === this.extname && (!(this.lines.length <= 1) && (this.lines[0] || "").includes("% Generated by roxygen2: do not edit by hand"));
      }
      generatedHtml() {
        if (![".html", ".htm", ".xhtml"].includes(this.extname)) return false;
        if (this.lines.length <= 1) return false;
        if (this.lines.slice(0, 2).some((e3) => /<!-- Generated by pkgdown: do not edit by hand -->/.test(e3))) return true;
        if (this.lines.length > 2 && (this.lines[2] || "").startsWith("<!-- This is an automatically generated file.")) return true;
        if (this.lines.slice(0, 31).some((e3) => /<!--\s+Generated by Doxygen\s+[.0-9]+\s*-->/i.test(e3))) return true;
        const e2 = this.lines.slice(0, 31).join(" ").match(/<meta(\s+[^>]+)>/gi);
        if (!e2) return false;
        for (const t2 of e2) {
          const e3 = this.extractHtmlMeta(t2);
          if ("generator" === e3.name?.toLowerCase() && (e3.content || e3.value)) {
            const t3 = e3.content || e3.value || "";
            if (/^(org\s+mode|j?latex2html|groff|makeinfo|texi2html|ronn)\b/i.test(t3)) return true;
          }
        }
        return false;
      }
      extractHtmlMeta(e2) {
        const t2 = {}, r2 = e2.matchAll(/(?<=^|\s)(name|content|value)\s*=\s*("[^"]+"|'[^']+'|[^\s"']+)/gi);
        for (const e3 of r2) {
          const r3 = e3[1].toLowerCase();
          let n2 = e3[2];
          (n2.startsWith('"') && n2.endsWith('"') || n2.startsWith("'") && n2.endsWith("'")) && (n2 = n2.slice(1, -1)), t2[r3] = n2;
        }
        return t2;
      }
      generatedJison() {
        if (".js" !== this.extname) return false;
        if (this.lines.length <= 1) return false;
        const e2 = this.lines[0] || "";
        return e2.startsWith("/* parser generated by jison ") || e2.startsWith("/* generated by jison-lex ");
      }
      generatedGrpcCpp() {
        return !![".cpp", ".hpp", ".h", ".cc"].includes(this.extname) && (!(this.lines.length <= 1) && (this.lines[0] || "").startsWith("// Generated by the gRPC"));
      }
      generatedDart() {
        return ".dart" === this.extname && (!(this.lines.length <= 1) && this.lines.slice(0, 3).some((e2) => /generated code\W{2,3}do not modify/i.test(e2)));
      }
      generatedPerlPpportHeader() {
        return !!/ppport\.h$/.test(this.name) && (!(this.lines.length <= 10) && (this.lines[8] || "").includes("Automatically created by Devel::PPPort"));
      }
      generatedGamemakerstudio() {
        if (![".yy", ".yyp"].includes(this.extname)) return false;
        if (this.lines.length <= 3) return false;
        const e2 = this.lines.slice(0, 3).join("");
        return /^\s*[{[]/.test(e2) || /^\d\.\d\.\d.+\|\{/.test(this.lines[0] || "");
      }
      generatedGimp() {
        if (![".c", ".h"].includes(this.extname)) return false;
        if (0 === this.lines.length) return false;
        const e2 = this.lines[0] || "";
        return /^\/\* GIMP [a-zA-Z0-9- ]+ C-Source image dump \(.+?\.c\) \*\//.test(e2) || /^\/\* {2}GIMP header image file format \([a-zA-Z0-9- ]+\): .+?\.h {2}\*\//.test(e2);
      }
      generatedVisualstudio6() {
        return ".dsp" === this.extname && this.lines.slice(0, 3).some((e2) => e2.includes("# Microsoft Developer Studio Generated Build File"));
      }
      generatedHaxe() {
        return !![".js", ".py", ".lua", ".cpp", ".h", ".java", ".cs", ".php"].includes(this.extname) && this.lines.slice(0, 3).some((e2) => e2.includes("Generated by Haxe"));
      }
      generatedJooq() {
        return ".java" === this.extname && this.lines.slice(0, 2).some((e2) => e2.includes("This file is generated by jOOQ."));
      }
      generatedSorbetRbi() {
        return ".rbi" === this.extname && (!(this.lines.length < 5) && (/^# typed:/.test(this.lines[0] || "") && (this.lines[2] || "").includes("DO NOT EDIT MANUALLY") && /^# Please (run|instead update this file by running) `bin\/tapioca/.test(this.lines[4] || "")));
      }
      generatedMysqlViewDefinitionFormat() {
        return ".frm" === this.extname && (this.lines[0] || "").includes("TYPE=VIEW");
      }
    }
    var La = r(67918);
    const $a = (e2) => {
      if (!e2) return [];
      if ("string" != typeof e2 || e2.match(/^\s+$/)) return [];
      const t2 = e2.split("\n");
      if (0 === t2.length) return [];
      const r2 = [];
      let n2 = null, s2 = null, o2 = 0, i2 = 0, a2 = null;
      const c2 = (e3) => {
        const [t3, s3] = Ga(e3) ?? [];
        n2 = { chunks: [], deletions: 0, additions: 0, from: t3, to: s3 }, r2.push(n2);
      }, l2 = () => {
        n2 && !n2.chunks.length || c2();
      }, u2 = (e3) => +(e3 || 1), d2 = (e3) => {
        if (!s2) return;
        const [t3] = s2.changes.slice(-1);
        s2.changes.push({ type: t3.type, [t3.type]: true, ln1: t3.ln1, ln2: t3.ln2, ln: t3.ln, content: e3 });
      }, p2 = [[/^diff\s/, c2], [/^new file mode (\d+)$/, (e3, t3) => {
        l2(), n2.new = true, n2.newMode = t3[1], n2.from = "/dev/null";
      }], [/^deleted file mode (\d+)$/, (e3, t3) => {
        l2(), n2.deleted = true, n2.oldMode = t3[1], n2.to = "/dev/null";
      }], [/^old mode (\d+)$/, (e3, t3) => {
        l2(), n2.oldMode = t3[1];
      }], [/^new mode (\d+)$/, (e3, t3) => {
        l2(), n2.newMode = t3[1];
      }], [/^index\s[\da-zA-Z]+\.\.[\da-zA-Z]+(\s(\d+))?$/, (e3, t3) => {
        l2(), n2.index = e3.split(" ").slice(1), t3[1] && (n2.oldMode = n2.newMode = t3[1].trim());
      }], [/^---\s/, (e3) => {
        l2(), n2.from = za(e3);
      }], [/^\+\+\+\s/, (e3) => {
        l2(), n2.to = za(e3);
      }], [/^@@\s+-(\d+),?(\d+)?\s+\+(\d+),?(\d+)?\s@@/, (e3, t3) => {
        n2 || c2(e3);
        const [r3, l3, d3, p3] = t3.slice(1);
        o2 = +r3, i2 = +d3, s2 = { content: e3, changes: [], oldStart: +r3, oldLines: u2(l3), newStart: +d3, newLines: u2(p3) }, a2 = { oldLines: u2(l3), newLines: u2(p3) }, n2.chunks.push(s2);
      }], [/^\\ No newline at end of file$/, d2]], m2 = [[/^\\ No newline at end of file$/, d2], [/^-/, (e3) => {
        s2 && (s2.changes.push({ type: "del", del: true, ln: o2++, content: e3 }), n2.deletions++, a2.oldLines--);
      }], [/^\+/, (e3) => {
        s2 && (s2.changes.push({ type: "add", add: true, ln: i2++, content: e3 }), n2.additions++, a2.newLines--);
      }], [/^\s+/, (e3) => {
        s2?.changes.push({ type: "normal", normal: true, ln1: o2++, ln2: i2++, content: e3 }), a2.oldLines--, a2.newLines--;
      }]], h2 = (e3) => {
        a2 ? ((e4) => {
          for (const [t3, r3] of m2) {
            const n3 = e4.match(t3);
            if (n3) {
              r3(e4, n3);
              break;
            }
          }
          0 === a2.oldLines && 0 === a2.newLines && (a2 = null);
        })(e3) : ((e4) => {
          for (const [t3, r3] of p2) {
            const n3 = e4.match(t3);
            if (n3) {
              r3(e4, n3);
              break;
            }
          }
        })(e3);
      };
      for (const e3 of t2) h2(e3);
      return r2;
    }, Qa = /(a|i|w|c|o|1|2)\/.*(?=["']? ["']?(b|i|w|c|o|1|2)\/)|(b|i|w|c|o|1|2)\/.*$/g, ja = /^(a|b|i|w|c|o|1|2)\//, Ga = (e2) => {
      const t2 = e2?.match(Qa);
      return t2?.map((e3) => e3.replace(ja, "").replace(/("|')$/, ""));
    }, Ha = /^\\?['"]|\\?['"]$/g, za = (e2) => {
      let t2 = Wa(e2, "-+").trim();
      return t2 = Ka(t2), t2.replace(Ha, "").replace(ja, "");
    }, Wa = (e2, t2) => {
      if (e2 = Za(e2), !t2 && String.prototype.trimLeft) return e2.trimLeft();
      const r2 = Ya(t2);
      return e2.replace(new RegExp(`^${r2}+`), "");
    }, Va = /\t.*|\d{4}-\d\d-\d\d\s\d\d:\d\d:\d\d(.\d+)?\s(\+|-)\d\d\d\d/, Ka = (e2) => {
      const t2 = Va.exec(e2);
      return t2 && (e2 = e2.substring(0, t2.index).trim()), e2;
    }, Ya = (e2) => null == e2 ? "\\s" : e2 instanceof RegExp ? e2.source : `[${Za(e2).replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")}]`, Za = (e2) => `${e2 ?? ""}`, Xa = (0, k.h)("local-git-diff");
    async function ec(e2, t2, r2 = {}) {
      const n2 = await new Promise((n3, s2) => {
        const o2 = (0, Da.mv)("git", t2, { cwd: e2 });
        let i2 = "", a2 = "";
        o2.stdout.on("data", (e3) => {
          i2 += e3.toString();
        }), o2.stderr.on("data", (e3) => {
          a2 += e3.toString();
        }), o2.on("close", (e3) => {
          0 === e3 || true === r2.ignoreErrors ? n3(i2) : s2(new Error(`Git command failed with code ${e3}: ${a2}`));
        }), o2.on("error", (e3) => {
          true === r2.ignoreErrors ? n3(i2) : s2(e3);
        });
      });
      return true === r2.shouldNotTrimOutput ? n2 : n2.trim();
    }
    function tc(e2) {
      const t2 = $a(e2);
      return new La.GitDiff({ diffs: t2.map((e3) => (function(e4) {
        const t3 = new La.FileDiff({ from: e4.from, to: e4.to, chunks: e4.chunks.map((e5) => new La.FileDiff_Chunk({ content: e5.content, lines: e5.changes.map((e6) => e6.content), oldStart: e5.oldStart, oldLines: e5.oldLines, newStart: e5.newStart, newLines: e5.newLines })) });
        return t3.added = e4.additions, t3.removed = e4.deletions, t3;
      })(e3)), diffType: La.GitDiff_DiffType.UNSPECIFIED });
    }
    const rc = ["main", "master", "develop"];
    async function nc(e2, t2, r2) {
      const o2 = (function(e3) {
        switch (e3) {
          case La.GetDiffRequest_OutputFormat.NAME_STATUS:
            return La.GetDiffRequest_OutputFormat.NAME_STATUS;
          case La.GetDiffRequest_OutputFormat.NAME_STATUS_AND_NUMSTAT:
            return La.GetDiffRequest_OutputFormat.NAME_STATUS_AND_NUMSTAT;
          case La.GetDiffRequest_OutputFormat.FILE_DIFFS:
            return La.GetDiffRequest_OutputFormat.FILE_DIFFS;
          case La.GetDiffRequest_OutputFormat.DIFFS_WITH_BEFORE_AND_AFTER:
            return La.GetDiffRequest_OutputFormat.DIFFS_WITH_BEFORE_AND_AFTER;
          default:
            return La.GetDiffRequest_OutputFormat.FILE_DIFFS;
        }
      })(r2.outputFormat), i2 = await (async () => {
        let e3 = r2.baseRef.length > 0 ? r2.baseRef : await (async function(e4) {
          try {
            const t3 = await ec(e4, ["symbolic-ref", "--short", "refs/remotes/origin/HEAD"]);
            if (t3) return t3.trim();
          } catch {
          }
          for (const t3 of rc) {
            const r3 = `origin/${t3}`;
            try {
              return await ec(e4, ["rev-parse", "--verify", r3]), r3;
            } catch {
            }
          }
          try {
            const t3 = (await ec(e4, ["branch", "-r"])).split("\n").map((e5) => e5.trim()).find((e5) => e5.startsWith("origin/"));
            if (t3) return t3;
          } catch {
          }
          try {
            const t3 = await ec(e4, ["config", "--get", "init.defaultBranch"]);
            if (t3) return t3.trim();
          } catch {
          }
          throw new Error("Could not determine default branch");
        })(t2);
        return r2.mergeBase && (e3 = (await ec(t2, ["merge-base", e3, r2.ref.length > 0 ? r2.ref : "HEAD"])).trim()), e3;
      })(), a2 = ["diff", "--no-color"];
      r2.includeSpaceChanges || a2.push("--ignore-space-change"), void 0 !== r2.unifiedContextLines && a2.push(`-U${r2.unifiedContextLines}`), a2.push(i2), r2.ref.length > 0 && a2.push(r2.ref), r2.targetPaths.length > 0 && (a2.push("--"), a2.push(...r2.targetPaths));
      const c2 = await ec(t2, a2, { shouldNotTrimOutput: true }), l2 = tc(c2);
      let u2 = [];
      if (r2.maxUntrackedFiles > 0) {
        u2 = await (async function(e3, t3) {
          let r3 = (await ec(e3, ["ls-files", "--others", "--exclude-standard"])).split("\n").map((e4) => e4.trim()).filter((e4) => e4.length > 0);
          return r3.length > t3 && (r3 = r3.slice(0, t3)), (await Promise.all(r3.map(async (t4) => {
            try {
              return { contents: await n.readFile(s.join(e3, t4), "utf8"), path: t4 };
            } catch {
              return;
            }
          }))).filter((e4) => void 0 !== e4);
        })(t2, r2.maxUntrackedFiles);
        for (const e3 of u2) {
          const r3 = await ec(t2, ["diff", "--no-color", "--no-index", "/dev/null", e3.path], { ignoreErrors: true, shouldNotTrimOutput: true });
          l2.diffs.push(...tc(r3).diffs);
        }
      }
      if (o2 !== La.GetDiffRequest_OutputFormat.FILE_DIFFS) for (const e3 of l2.diffs) e3.chunks = [];
      if (o2 === La.GetDiffRequest_OutputFormat.DIFFS_WITH_BEFORE_AND_AFTER) {
        const o3 = r2.ref.length > 0 ? r2.ref : "HEAD";
        await Promise.all(l2.diffs.map(async (a3) => {
          try {
            if ("/dev/null" !== a3.from) try {
              a3.beforeFileContents = await ec(t2, ["show", `${i2}:${a3.from}`], { shouldNotTrimOutput: true });
            } catch {
              a3.beforeFileContents = "";
            }
            else a3.beforeFileContents = "";
            if ("/dev/null" !== a3.to) if (r2.ref.length > 0) try {
              a3.afterFileContents = await ec(t2, ["show", `${o3}:${a3.to}`], { shouldNotTrimOutput: true });
            } catch {
              a3.afterFileContents = "";
            }
            else try {
              a3.afterFileContents = await n.readFile(s.join(t2, a3.to), "utf8");
            } catch {
              try {
                a3.afterFileContents = await ec(t2, ["show", `${o3}:${a3.to}`], { shouldNotTrimOutput: true });
              } catch {
                a3.afterFileContents = "";
              }
            }
            else a3.afterFileContents = "";
          } catch (t3) {
            Xa.error(e2, "Error fetching file contents for diff", t3);
          }
        }));
      }
      const d2 = /* @__PURE__ */ new Map();
      for (const e3 of l2.diffs) {
        const t3 = "/dev/null" !== e3.to ? e3.to : e3.from;
        t3 && d2.set(t3, e3);
      }
      const p2 = [...d2.keys()], m2 = r2.ref.length > 0 ? r2.ref : "HEAD";
      try {
        const e3 = await Oa({ repoRoot: t2, filePaths: p2, getContent: async (e4) => {
          const r3 = d2.get(e4);
          if (r3) {
            if (void 0 !== r3.afterFileContents) return r3.afterFileContents;
            try {
              if (r3.to && "/dev/null" !== r3.to) return await ec(t2, ["show", `${m2}:${r3.to}`], { shouldNotTrimOutput: true });
            } catch {
            }
          }
        } });
        for (const [t3, r3] of e3) {
          const e4 = d2.get(t3);
          e4 && (e4.isGenerated = r3.isGenerated);
        }
      } catch (t3) {
        Xa.warn(e2, "Generated-file detection failed; continuing without it", { error: t3 instanceof Error ? t3.message : String(t3) });
      }
      const h2 = true === r2.computePatchId ? await (async function(e3, t3) {
        if (0 === t3.length) return;
        return (await new Promise((r3, n2) => {
          const s2 = (0, Da.mv)("git", ["patch-id", "--stable"], { cwd: e3 });
          let o3 = "", i3 = "";
          s2.stdout.on("data", (e4) => {
            o3 += e4.toString();
          }), s2.stderr.on("data", (e4) => {
            i3 += e4.toString();
          }), s2.on("close", (e4) => {
            0 === e4 ? r3(o3) : n2(new Error(`git patch-id failed with code ${e4}: ${i3}`));
          }), s2.on("error", n2), s2.stdin.end(t3);
        })).trim().split(/\s+/)[0] || void 0;
      })(t2, (function(...e3) {
        const t3 = e3.filter((e4) => e4.length > 0);
        return 0 === t3.length ? "" : `${t3.join("\n")}
`;
      })(c2, (function(e3) {
        const t3 = [];
        for (const r3 of e3) {
          const e4 = r3.contents.split("\n"), n2 = e4.length;
          t3.push(`diff --git a/${r3.path} b/${r3.path}`), t3.push("--- /dev/null"), t3.push(`+++ b/${r3.path}`), t3.push(`@@ -0,0 +1${1 === n2 ? "" : `,${n2}`} @@`), t3.push(...e4.map((e5) => `+${e5}`));
        }
        return t3.join("\n");
      })(u2))) : void 0, f2 = true === r2.returnHeadSha ? (await ec(t2, ["rev-parse", "HEAD"])).trim() : void 0, g2 = true === r2.returnHeadSha ? (await ec(t2, ["status", "--porcelain=v1", "--untracked-files=all"])).trim().length > 0 : void 0, y2 = new La.GetDiffResponse({ diff: l2, submoduleDiffs: [], patchId: h2, headSha: f2, hasUncommittedChanges: g2 }), w2 = r2.maxResponseBytes ?? 0;
      if (w2 > 0) {
        const e3 = y2.toBinary().byteLength;
        if (e3 > w2) throw new Error(`GetDiffResponseTooLarge: ${e3} bytes exceeds the ${w2} byte limit`);
      }
      return y2;
    }
    class sc {
      async execute(e2, t2) {
        return nc(e2, t2.cwd, t2);
      }
    }
    var oc = r(88107);
    class ic {
      constructor(e2) {
        this.permissionsService = e2;
      }
      async execute(e2, t2) {
        const r2 = await this.permissionsService.isMcpFullyAllowlisted(e2, { providerIdentifier: t2.providerIdentifier, toolName: t2.toolName, annotationsJson: t2.annotationsJson });
        return new oc.M({ allowlisted: r2 });
      }
    }
    var ac = r(20941), cc = r(88623), lc = r(59158);
    const uc = BigInt(0), dc = BigInt(8), pc = BigInt(16), mc = BigInt(65535);
    function hc(e2) {
      const t2 = e2.trim().toLowerCase();
      return t2.startsWith("[") && t2.endsWith("]") ? t2.slice(1, -1) : t2;
    }
    function fc(e2) {
      const t2 = e2.trim();
      if (0 === t2.length) return;
      const r2 = t2.includes("://") ? t2 : `https://${t2}`;
      try {
        return new URL(r2);
      } catch {
        return;
      }
    }
    function gc(e2) {
      const t2 = e2.split(".");
      if (4 !== t2.length) return;
      let r2 = uc;
      for (const e3 of t2) {
        if (!/^\d{1,3}$/.test(e3)) return;
        const t3 = Number(e3);
        if (!Number.isInteger(t3) || t3 < 0 || t3 > 255) return;
        r2 = r2 << dc | BigInt(t3);
      }
      return { version: 4, value: r2 };
    }
    function yc(e2) {
      if (0 === e2.length) return [];
      const t2 = [], r2 = e2.split(":");
      for (let e3 = 0; e3 < r2.length; e3++) {
        const n2 = r2[e3];
        if (0 === n2.length) return;
        if (n2.includes(".")) {
          if (e3 !== r2.length - 1) return;
          const s2 = gc(n2);
          if (!s2) return;
          t2.push(Number(s2.value >> pc & mc)), t2.push(Number(s2.value & mc));
          continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(n2)) return;
        t2.push(Number.parseInt(n2, 16));
      }
      return t2;
    }
    function wc(e2) {
      return gc(e2) ?? (function(e3) {
        const t2 = hc(e3);
        if (0 === t2.length || t2.includes(":::")) return;
        const r2 = t2.indexOf("::");
        if (-1 === r2) {
          const e4 = yc(t2);
          if (!e4 || 8 !== e4.length) return;
          return { version: 6, value: e4.reduce((e5, t3) => e5 << pc | BigInt(t3), uc) };
        }
        if (-1 !== t2.indexOf("::", r2 + 1)) return;
        const n2 = t2.slice(0, r2), s2 = t2.slice(r2 + 2), o2 = yc(n2), i2 = yc(s2);
        if (!o2 || !i2) return;
        const a2 = o2.length + i2.length;
        if (a2 > 7) return;
        return { version: 6, value: [...o2, ...new Array(8 - a2).fill(0), ...i2].reduce((e4, t3) => e4 << pc | BigInt(t3), uc) };
      })(e2);
    }
    function vc(e2, t2) {
      const r2 = hc(e2), n2 = hc(t2);
      if ("*" === n2) return true;
      if (n2.includes("/")) return (function(e3, t3) {
        const r3 = t3.lastIndexOf("/");
        if (r3 <= 0 || r3 === t3.length - 1) return false;
        const n3 = wc(t3.slice(0, r3)), s2 = wc(e3);
        if (!n3 || !s2 || n3.version !== s2.version) return false;
        const o2 = Number(t3.slice(r3 + 1)), i2 = 4 === n3.version ? 32 : 128;
        if (!Number.isInteger(o2) || o2 < 0 || o2 > i2) return false;
        const a2 = BigInt(i2 - o2);
        return s2.value >> a2 === n3.value >> a2;
      })(r2, n2);
      if (n2.startsWith("*.")) {
        const e3 = n2.slice(2);
        return r2 === e3 || r2.endsWith(`.${e3}`);
      }
      return r2 === n2;
    }
    function _c(e2, t2) {
      const r2 = fc(e2);
      return !!r2 && (function(e3, t3) {
        return t3.some((t4) => vc(e3, t4));
      })(r2.hostname, t2);
    }
    var Ac = r(50623), Sc = r(80227), bc = r(68503), Ec = r(44016);
    const Ic = (0, s.join)((0, ge.homedir)(), ".cursor", "projects"), Cc = (0, s.join)((0, ge.homedir)(), ".cursor", "worktrees");
    function kc(e2) {
      return (0, Ec.K9)(Ic, e2) && e2 !== Ic;
    }
    function xc(e2) {
      return (0, Ec.K9)(Cc, e2) && e2 !== Cc;
    }
    function Tc(e2, t2) {
      const r2 = (function(e3) {
        if (!(0, Ec.K9)(Ic, e3)) return;
        if (e3 === Ic) return;
        const t3 = (0, s.relative)(Ic, e3).split(s.sep).filter(Boolean);
        return t3.length >= 2 ? t3[1] : void 0;
      })(e2);
      return void 0 !== r2 && t2.includes(r2);
    }
    function Rc(e2, t2, r2) {
      return { resolvedPath: e2, originalPath: t2, resolution: r2 };
    }
    function Bc(e2) {
      switch (e2.code) {
        case "ENOENT":
          return { status: "newFile" };
        case "EACCES":
        case "EPERM":
          return { status: "permissionDenied", errno: e2.code };
        case "ELOOP":
          return { status: "symlinkLoop", errno: e2.code };
        default:
          return { status: "unknownError", errno: e2.code ?? "UNKNOWN", message: e2.message };
      }
    }
    async function Pc(e2, t2) {
      const r2 = (0, M.o1)(e2, t2);
      try {
        return Rc(await (0, n.realpath)(r2), r2, { status: "resolved" });
      } catch (e3) {
        const t3 = e3;
        if ("ENOENT" !== t3.code) return Rc(r2, r2, Bc(t3));
        try {
          if ((await (0, n.lstat)(r2)).isSymbolicLink()) {
            let e4 = null;
            try {
              e4 = await (0, n.readlink)(r2);
            } catch {
            }
            return Rc(r2, r2, { status: "danglingSymlink", symlinkTarget: e4 });
          }
          return Rc(r2, r2, { status: "unknownError", errno: "ENOENT", message: "realpath returned ENOENT but lstat found a non-symlink entry" });
        } catch (e4) {
          const t4 = e4;
          return "ENOENT" === t4.code ? (async function(e5) {
            let t5 = (0, s.dirname)(e5);
            const r3 = [(0, s.basename)(e5)];
            for (; (0, s.dirname)(t5) !== t5; ) {
              try {
                const o2 = await (0, n.realpath)(t5);
                return Rc((0, s.join)(o2, ...r3), e5, { status: "newFile" });
              } catch (t6) {
                const r4 = t6;
                if ("ENOENT" !== r4.code) return Rc(e5, e5, Bc(r4));
              }
              r3.unshift((0, s.basename)(t5)), t5 = (0, s.dirname)(t5);
            }
            return Rc(e5, e5, { status: "newFile" });
          })(r2) : Rc(r2, r2, Bc(t4));
        }
      }
    }
    function Jc(e2) {
      return "resolved" === e2.status || "newFile" === e2.status;
    }
    function Mc(e2, t2) {
      switch (t2.status) {
        case "resolved":
        case "newFile":
          return "";
        case "danglingSymlink":
          return `Write blocked: \`${e2}\` is a dangling symlink${t2.symlinkTarget ? ` (target: ${t2.symlinkTarget})` : ""}. Cannot verify it does not point to a protected file.`;
        case "permissionDenied":
          return `Write blocked: cannot verify \`${e2}\` -- permission denied resolving symlinks (${t2.errno}).`;
        case "symlinkLoop":
          return `Write blocked: \`${e2}\` has a symlink loop (${t2.errno}). Cannot verify target.`;
        case "unknownError":
          return `Write blocked: cannot verify \`${e2}\` -- ${t2.errno}: ${t2.message}.`;
        default:
          return `Write blocked: unknown resolution status for \`${e2}\`.`;
      }
    }
    function qc({ requestedAbsolutePath: e2, realAbsolutePath: t2, setting: r2, resolvedWorkspaceRoots: n2, resolvedAllowFolders: s2 }) {
      return "workspace" === r2.boundary && (![...n2, ...s2].some((e3) => (0, M.BJ)(t2, e3)) && !(Oc(t2, r2.allowPaths) || e2 !== t2 && Oc(e2, r2.allowPaths)));
    }
    function Dc(e2) {
      return e2.flatMap((e3) => {
        const t2 = (0, M.jl)(e3.trim());
        return !t2.includes("*") && (0, s.isAbsolute)(t2) ? [(0, s.resolve)(t2)] : [];
      });
    }
    function Oc(e2, t2) {
      const r2 = "win32" === process.platform ? M.oL : (e3) => e3, n2 = r2(e2);
      return t2.some((e3) => {
        const t3 = (0, M.jl)(e3.trim());
        return !(!t3.includes("*") && (0, s.isAbsolute)(t3)) && ce(r2(t3), n2);
      });
    }
    var Nc = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Fc = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const Uc = (0, k.h)("permissions-service"), Lc = (0, ln.Pu)("local_exec.permissions.mcp_allowlist_check.result", { description: "Result of MCP allowlist checks at user and team levels per tool call.", labelNames: ["allowlist_scope", "outcome"] });
    function $c(e2) {
      return Promise.all(e2.map(async (e3) => {
        const t2 = await Pc(e3);
        return Jc(t2.resolution) ? t2.resolvedPath : (0, M.o1)(e3);
      }));
    }
    function Qc(e2, t2, r2) {
      return `${e2} blocked: cannot verify ${t2} \`${r2}\` while resolving symlinks. This can happen when access is denied or the path contains a symlink loop.`;
    }
    function jc(e2) {
      return [...new Set(e2)];
    }
    function Gc() {
      return { fdTargets: /* @__PURE__ */ new Map([[0, "original-stdin"], [1, "original-stdout"], [2, "original-stderr"]]) };
    }
    function Hc(e2) {
      return "original-stdout" === e2 || "original-stderr" === e2 || "dev-null" === e2 || "workspace-file" === e2 || "tmp-file" === e2;
    }
    function zc({ basePath: e2, targetPath: t2, pathModule: r2 }) {
      const n2 = r2.resolve(e2), s2 = r2.resolve(t2), o2 = r2.relative(n2, s2);
      return "" === o2 || ".." !== o2 && !o2.startsWith(`..${r2.sep}`) && !r2.isAbsolute(o2);
    }
    function Wc(e2) {
      return ">" === e2 || ">>" === e2 || ">|" === e2 || "&>" === e2 || "&>>" === e2;
    }
    function Vc(e2) {
      return "<" !== e2.operator && "<&" !== e2.operator;
    }
    function Kc(e2) {
      if (void 0 === e2 || e2.trim() !== e2) return;
      const t2 = Number(e2);
      return Number.isInteger(t2) && t2 >= 0 ? t2 : void 0;
    }
    function Yc(e2) {
      return "<<" === e2.operator && "heredoc_redirect" === e2.targetNodeType && 1 === e2.destinationFds.length && 0 === Number(e2.destinationFds[0]) && void 0 !== e2.targetText;
    }
    async function Zc({ targetText: e2, workingDirectory: t2, rootDirectories: r2, allowTmpRedirects: n2, resolvePathForPermissions: s2, pathModule: o2, tempPathOptions: i2 }) {
      if ("" !== o2.parse(e2).root && !o2.isAbsolute(e2)) return;
      const a2 = await s2(e2, t2);
      if (Jc(a2.resolution)) {
        for (const e3 of r2) {
          const t3 = await s2(e3);
          if (Jc(t3.resolution) && zc({ basePath: t3.resolvedPath, targetPath: a2.resolvedPath, pathModule: o2 })) return "workspace-file";
        }
        return n2 && cl(a2.resolvedPath, i2) ? "tmp-file" : void 0;
      }
    }
    function Xc(e2) {
      return jc(e2.map((e3) => e3.trim()).filter(Boolean));
    }
    function el(e2) {
      const t2 = e2.name.trim();
      if (!t2) return [];
      const r2 = e2.arguments.map((e3) => e3.trim()).filter(Boolean), n2 = r2.length > 0 ? `${t2} ${r2.join(" ")}` : t2, s2 = e2.subcommandTokens.map((e3) => e3.trim()).filter(Boolean);
      if (0 === s2.length) return [n2];
      const o2 = `${t2} ${s2.join(" ")}`;
      return o2 === n2 ? [n2] : [n2, o2];
    }
    function tl(e2, t2) {
      const r2 = t2.trim();
      return !!r2 && e2.some((e3) => e3 === r2 || e3.startsWith(`${r2} `));
    }
    function rl(e2) {
      const t2 = e2.name.trim(), r2 = e2.arguments.map((e3) => e3.trim()).filter(Boolean).map((e3) => new R.r6({ type: "word", value: e3 }));
      return new R.Pv({ name: t2, args: r2, fullText: [t2, ...r2.map((e3) => e3.value)].join(" ").trim() });
    }
    function nl(e2, t2 = {}) {
      return { type: e2, ...t2 };
    }
    function sl(e2) {
      const t2 = [];
      for (const r2 of e2) {
        const e3 = r2.match(/^\s*Read\s*\((.*)\)\s*$/);
        e3 && t2.push((e3[1] ?? "").trim());
      }
      return t2;
    }
    function ol(e2, t2) {
      if ("workspace" === e2 && void 0 !== t2) return t2;
    }
    const il = { workspace: 0, system: 1 };
    function al(e2) {
      const t2 = e2.match(/^\s*(Shell|Bash)\s*\((.*)\)\s*$/);
      if (!t2) return null;
      const r2 = t2[1], n2 = t2[2]?.trim() ?? "", s2 = n2.indexOf(":");
      return -1 !== s2 ? { shellType: r2, fullPattern: n2, commandPattern: n2.slice(0, s2).trim(), argsPattern: n2.slice(s2 + 1).trim() } : { shellType: r2, fullPattern: n2, commandPattern: n2, argsPattern: null };
    }
    function cl(e2, { platform: t2, env: r2, pathModule: n2, homeDirectory: s2 }) {
      if ("win32" === t2) {
        const t3 = r2.TEMP ?? r2.TMP;
        if (t3) {
          const r3 = n2.normalize(t3).toLowerCase(), s3 = n2.normalize(e2).toLowerCase(), o3 = r3.endsWith(n2.sep) ? r3 : r3 + n2.sep;
          return s3 === r3 || s3.startsWith(o3);
        }
        return false;
      }
      const o2 = (e3) => {
        const r3 = n2.normalize(e3);
        return "darwin" !== t2 ? r3 : "/tmp" === r3 || r3.startsWith("/tmp/") || "/var" === r3 || r3.startsWith("/var/") ? `/private${r3}` : r3;
      }, i2 = o2(e2);
      if (void 0 !== s2 && zc({ basePath: o2(s2), targetPath: i2, pathModule: n2 })) return false;
      if ("darwin" === t2) {
        return ["/private/tmp/", "/private/var/folders/"].some((e3) => i2.startsWith(e3));
      }
      return ["/tmp/", "/private/tmp/", "/var/folders/", "/private/var/folders/", "/var/tmp/"].some((e3) => i2.startsWith(e3));
    }
    function ll(e2, t2) {
      if ("insecure_none" === t2.type) return true;
      if ("insecure_none" === e2.type) return false;
      const r2 = (0, B.$b)(e2.networkPolicy), n2 = (0, B.$b)(t2.networkPolicy);
      if (r2 && !n2) return false;
      const s2 = (0, B._B)(e2.networkPolicy), o2 = (0, B._B)(t2.networkPolicy);
      if (s2 && n2 && !o2) return false;
      if ("workspace_readonly" === e2.type && "workspace_readwrite" === t2.type) return true;
      if ("workspace_readwrite" === e2.type && "workspace_readonly" === t2.type) return false;
      const i2 = e2.readBoundary ?? "system", a2 = t2.readBoundary ?? "system";
      return !(il[i2] > il[a2]);
    }
    class ul {
      constructor(e2, t2, r2, n2) {
        this.command = e2, this.requestedPolicy = t2;
        const s2 = void 0 !== r2 && ll(t2, r2);
        this.state = s2 ? "preapproved" : "approvable";
        const o2 = [e2.fullText.trim()].filter(Boolean);
        this.matchForms = n2 && n2.length > 0 ? [...n2] : o2;
      }
      approveWithPolicy(e2) {
        "approvable" !== this.state && "preapproved" !== this.state || !ll(this.requestedPolicy, e2) || (this.state = "allowlisted");
      }
      deny() {
        this.state = "denied";
      }
      isRunnable() {
        return "preapproved" === this.state || "allowlisted" === this.state;
      }
    }
    function dl(e2) {
      return e2?.type ?? "undefined";
    }
    const pl = ["skills", "skills-cursor", "rules", "plugins"];
    class ml {
      constructor(e2, t2, r2, n2, o2, i2 = false, a2) {
        this.ignoreService = e2, this.pendingDecisionStore = t2, this.permissionsProvider = r2, this.teamSettingsService = n2, this.adminNetworkControlsEnabled = i2, this.rootDirectories = Array.isArray(o2) ? o2 : [o2 ?? process.cwd()], this.perUserSandboxConfigPath = a2?.perUserSandboxConfigPath ?? (0, s.join)((0, ge.homedir)(), ".cursor", "sandbox.json"), this.mcpAllowlistLog = a2?.mcpAllowlistLog;
      }
      async shouldBlockRead(e2, t2 = {}) {
        return this.shouldBlockReadInternal(e2, t2, false);
      }
      async shouldBlockFileRead(e2, t2 = {}) {
        return this.shouldBlockReadInternal(e2, t2, true);
      }
      async getFileReadBoundaryBlocker() {
        const { perms: e2, setting: t2 } = await this.readControlSetting();
        if ("workspace" !== t2.boundary || "unrestricted" === e2.approvalMode) return;
        const [r2, n2] = await Promise.all([this.resolveWorkspaceReadRoots(e2.userSandboxDataFolderName), this.resolvedReadAllowFolders(t2.allowPaths)]);
        return async (e3, s2) => qc({ requestedAbsolutePath: e3, realAbsolutePath: s2, setting: t2, resolvedWorkspaceRoots: r2, resolvedAllowFolders: n2 });
      }
      async readControlSetting() {
        const [e2, t2, r2] = await Promise.all([this.teamSettingsService.isReadControlEnabled?.() ?? true, this.teamSettingsService.getSandboxingControls(), this.getPermissions()]);
        return { perms: r2, setting: (function(e3) {
          if (!e3.enabled) return { boundary: "system", allowPaths: [], enforcedByAdmin: false };
          const t3 = "workspace" === e3.admin.boundary, r3 = t3 || "workspace" === e3.local.boundary ? "workspace" : "system", n2 = t3 ? e3.admin.allowPaths : [];
          return { boundary: r3, allowPaths: t3 && false === e3.admin.allowUserOverride ? [...n2] : [.../* @__PURE__ */ new Set([...n2, ...e3.local.allowPaths])], enforcedByAdmin: t3 };
        })({ enabled: e2, admin: { boundary: t2.readBoundary, allowPaths: t2.readAllowlistPaths ?? [], allowUserOverride: t2.allowUserOverrideReadAllowlist }, local: { boundary: r2.readBoundary, allowPaths: sl(r2.allow) } }) };
      }
      resolvedReadAllowFolders(e2) {
        return $c([...Dc(e2), ...(0, B.r5)()]);
      }
      async resolveWorkspaceReadRoots(e2) {
        const t2 = (0, s.join)((0, ge.homedir)(), void 0 !== e2 && e2.length > 0 ? e2 : ".cursor"), r2 = [...this.rootDirectories.map((e3) => (0, s.join)(t2, "projects", (0, bc.r_)(e3))), ...pl.map((e3) => (0, s.join)(t2, e3))], n2 = this.rootDirectories.flatMap((e3) => (0, B.W1)(e3) ?? []);
        return $c([...this.rootDirectories, ...r2, ...n2]);
      }
      async shouldBlockReadInternal(e2, { cursorIgnoreChecked: t2 = false }, r2) {
        const n2 = (0, M.o1)(e2), s2 = await ze(n2);
        if (null === s2) return { type: "unsafeResolution", message: Qc("Read", "path", n2) };
        if (await this.ignoreService.isRepoBlocked(s2)) return { type: "adminBlock", source: "Team repo blocklist" };
        if (await this.isPathExplicitlyDenied("Read", n2)) return { type: "permissionsConfig" };
        if (!(kc(s2) || xc(s2)) && !t2 && await this.ignoreService.isCursorIgnored(s2)) return { type: "cursorIgnore" };
        if (r2) {
          const e3 = await this.shouldBlockReadForBoundary({ realAbsolutePath: s2, requestedAbsolutePath: n2 });
          if (e3) return e3;
        }
        return false;
      }
      async shouldBlockReadForBoundary({ realAbsolutePath: e2, requestedAbsolutePath: t2 }) {
        const { perms: r2, setting: n2 } = await this.readControlSetting();
        if ("workspace" !== n2.boundary || "unrestricted" === r2.approvalMode) return false;
        const [s2, o2] = await Promise.all([this.resolveWorkspaceReadRoots(r2.userSandboxDataFolderName), this.resolvedReadAllowFolders(n2.allowPaths)]);
        return !!qc({ requestedAbsolutePath: t2, realAbsolutePath: e2, setting: n2, resolvedWorkspaceRoots: s2, resolvedAllowFolders: o2 }) && { type: "needsApproval", approvalReason: n2.enforcedByAdmin ? "This reads a file outside your workspace and requires approval under your team's read policy." : "This reads a file outside your workspace.", approvalDetails: { type: "fileRead", path: e2 } };
      }
      async shouldBlockWrite(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          Nc(n2, (0, x.VI)(e2.withName("InteractivePermissionsService.shouldBlockWrite")), false).ctx;
          const i2 = await Pc(t2);
          if (!Jc(i2.resolution)) return { type: "unsafeResolution", message: Mc(i2.originalPath, i2.resolution) };
          const a2 = i2.resolvedPath, c2 = a2;
          if (await this.ignoreService.isRepoBlocked(c2)) return { type: "adminBlock", source: "Team repo blocklist" };
          if (await this.isPathExplicitlyDenied("Write", a2)) return { type: "permissionsConfig" };
          const l2 = i2.originalPath.split(s.sep).pop()?.toLowerCase() ?? "", u2 = a2.split(s.sep).pop()?.toLowerCase() ?? "";
          if (".cursorignore" === l2 || ".cursorignore" === u2) return { type: "permissionsConfig" };
          const d2 = kc(c2), p2 = xc(c2), m2 = !d2 && !p2 && await this.ignoreService.isCursorIgnored(c2);
          if (d2 || p2) ;
          else if (m2) return { type: "cursorIgnore" };
          if (await this.isPathExplicitlyAllowed("Write", a2)) return false;
          if ((function(e3) {
            const t3 = e3.replace(/\\/g, "/");
            return /(^|\/)\.cursor\/debug(?:-[a-zA-Z0-9-]+)?\.log$/i.test(t3);
          })(a2)) return false;
          const h2 = await this.getPermissions();
          if ("workspace_readonly" === h2.userConfiguredPolicy.type) return { type: "permissionsConfig", isReadonly: true };
          if ("unrestricted" === h2.approvalMode) return false;
          for (const e3 of this.rootDirectories) {
            const t3 = await Pc(e3);
            if (!Jc(t3.resolution)) continue;
            const r3 = t3.resolvedPath;
            if ((0, M.BJ)(a2, r3)) {
              const e4 = (0, s.relative)(r3, a2).split(s.sep).map((e5) => "win32" === process.platform && e5.includes(":") ? e5.split(":")[0] : e5), t4 = await this.checkCursorFileProtection(e4);
              if (t4) return t4;
              break;
            }
          }
          const f2 = async () => {
            let e3 = false, t3 = "";
            try {
              t3 = await (0, Ee.yR)(a2), e3 = false;
            } catch {
              e3 = true;
            }
            let n3 = "";
            if (e3) n3 = r2;
            else {
              const e4 = (e5) => e5.endsWith("\n") ? e5 : `${e5}
`, { hunks: s2 } = (0, qi.YB)("a", "b", e4(t3), e4(r2), "", "", { context: 2 });
              n3 = s2.map((e5) => e5.lines.map((e6) => e6.length > 0 ? `${e6[0]} ${e6.slice(1)}` : e6).join("\n")).join("\n...\n");
            }
            return { isNewFile: e3, diffString: n3 };
          };
          let g2, y2 = false;
          for (const e3 of this.rootDirectories) {
            const t3 = await Pc(e3);
            if (!Jc(t3.resolution)) continue;
            const r3 = t3.resolvedPath;
            if ((0, M.BJ)(a2, r3)) {
              y2 = true, g2 = r3;
              break;
            }
          }
          const w2 = y2 ? void 0 : (function(e3) {
            if (!xc(e3)) return;
            const t3 = (0, s.relative)(Cc, e3).split(s.sep).filter(Boolean);
            return 0 !== t3.length ? (0, s.join)(Cc, t3[0]) : void 0;
          })(a2);
          if (!y2 && void 0 === w2) {
            if ((function(e4) {
              return cl(e4, { platform: process.platform, env: process.env, pathModule: o, homeDirectory: (0, ge.homedir)() });
            })(a2)) return false;
            if (Tc(a2, ["assets", "agent-notes", "agent-tools", "swarm-agents"])) return false;
            const e3 = `${(0, ge.homedir)()}${s.sep}.cursor${s.sep}`;
            if (a2.startsWith(e3)) {
              const e4 = a2.split(s.sep).pop()?.toLowerCase() ?? "";
              if (e4.endsWith(".md") || e4.endsWith(".mdc") || ".cursorrules" === e4) return false;
            }
            const { isNewFile: t3, diffString: r3 } = await f2();
            return { type: "needsApproval", approvalReason: "Out of workspace", approvalDetails: { type: "fileEdit", isNewFile: t3, diffString: r3, blockReason: "outOfWorkspace" } };
          }
          const v2 = g2 ?? w2, _2 = a2;
          let A2 = (0, s.relative)(v2, _2).split(s.sep);
          if (A2 = A2.map((e3) => "win32" === process.platform && e3.includes(":") ? e3.split(":")[0] : e3), "win32" === process.platform && A2.some((e3) => e3.includes("~"))) {
            const { isNewFile: e3, diffString: t3 } = await f2();
            return { type: "needsApproval", approvalReason: `Protected config file: ${A2[A2.length - 1] ?? ""}`, approvalDetails: { type: "fileEdit", isNewFile: e3, diffString: t3, blockReason: "protectedConfig" } };
          }
          if (await (0, B.OK)(a2, v2)) {
            const e3 = A2[A2.length - 1]?.toLowerCase() ?? "", { isNewFile: t3, diffString: r3 } = await f2();
            return { type: "needsApproval", approvalReason: `Protected config file: ${e3}`, approvalDetails: { type: "fileEdit", isNewFile: t3, diffString: r3, blockReason: "protectedConfig" } };
          }
          const S2 = await this.checkCursorFileProtection(A2);
          if (S2) return S2;
          if (true === h2.promptWorkspaceWrites) {
            const { isNewFile: e3, diffString: t3 } = await f2();
            return { type: "needsApproval", approvalReason: "Workspace write", approvalDetails: { type: "fileEdit", isNewFile: e3, diffString: t3, blockReason: "workspaceWrite" } };
          }
          return false;
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          Fc(n2);
        }
      }
      async shouldEnforceShellInvariantBlocks(e2, t2, r2) {
        const n2 = await this.getAdminCommandDenylistBlock(e2, { command: t2.command, parsingResult: t2.parsingResult, toolCallId: t2.toolCallId });
        if (void 0 !== n2) return { kind: "block", reason: n2 };
        const s2 = await ze(t2.workingDirectory);
        if (null === s2) {
          if (true !== t2.skipUnsafeWorkingDirectoryBlock) return { kind: "block", reason: { type: "unsafeResolution", message: Qc("Command", "working directory", t2.workingDirectory) } };
        } else if (await this.ignoreService.isRepoBlocked(s2)) return { kind: "block", reason: { type: "adminBlock", source: "Team repo blocklist" } };
        const o2 = (await this.getPermissions()).userConfiguredPolicy, i2 = r2 ?? o2;
        return "workspace_readonly" === o2.type && "workspace_readonly" !== i2.type ? { kind: "block", reason: { type: "permissionsConfig", isReadonly: true } } : { kind: "allow" };
      }
      async shouldBlockShellCommand(e2, t2, r2, n2) {
        const s2 = "insecure_none" === n2?.type, o2 = await this.shouldEnforceShellInvariantBlocks(e2, { workingDirectory: r2.workingDirectory, command: t2, parsingResult: r2.parsingResult, toolCallId: r2.toolCallId }, n2);
        if ("block" === o2.kind) return o2;
        const i2 = await this.getPermissions(), a2 = i2.approvalMode, c2 = "unrestricted" === a2, l2 = i2.userConfiguredPolicy, u2 = !i2.dashboardTerminalAllowlistOverriddenByPermissionsFile;
        if (Uc.info(e2, "Shell permissions: evaluating shell command", { toolCallId: r2.toolCallId, approvalMode: a2, userConfiguredPolicyType: dl(l2), requestedPolicyType: dl(n2), effectiveRequestedPolicyType: dl(n2 ?? l2), smartAllowlistEnabled: true === i2.smartAllowlistEnabled, hasSmartModeApprovalReason: void 0 !== r2.smartModeApprovalReason, hasSmartModeApprovalRequestId: void 0 !== r2.smartModeApprovalRequestId, hookForcesPrompt: (0, m.zNu)(r2.hookApprovalRequirement), classifierClassificationFailed: true === r2.classifierResult?.classificationFailed, classifierCommandCount: r2.classifierResult?.commands.length ?? 0, parserCommandCount: r2.parsingResult.executableCommands.length, parsingFailed: r2.parsingResult.parsingFailed, hasRedirects: r2.parsingResult.hasRedirects, commandLength: t2.length }), await this.shouldPromptForEmptyPlainShellAllowlist(t2, i2)) return Uc.info(e2, "Shell permissions: prompting for empty allowlist", { toolCallId: r2.toolCallId, approvalMode: a2, userConfiguredPolicyType: dl(l2), requestedPolicyType: dl(n2), hasSmartModeApprovalReason: void 0 !== r2.smartModeApprovalReason, hasSmartModeApprovalRequestId: void 0 !== r2.smartModeApprovalRequestId }), await this.requestApprovalForEmptyShellAllowlist(t2, r2, n2 ?? l2);
        const d2 = r2.parsingResult.executableCommands, p2 = r2.parsingResult.hasRedirects, h2 = true === r2.parsingResult.allRedirectsAreDevNull, f2 = r2.parsingResult.parsingFailed, g2 = r2.classifierResult, y2 = r2.smartModeApprovalReason, w2 = r2.smartModeApprovalRequestId, v2 = void 0 !== g2 && !g2.classificationFailed && g2.commands.length > 0 ? g2 : void 0, _2 = "allowlist" === a2 && i2.smartAllowlistEnabled ? v2?.commands : void 0, A2 = void 0 !== _2, S2 = _2 ? _2.map(rl) : d2, b2 = void 0 !== _2 ? _2.map(el) : S2.map((e3) => [e3.fullText.trim()].filter(Boolean)), E2 = void 0 !== v2 ? v2.commands.map(el) : b2;
        if (n2 || (n2 = i2.userConfiguredPolicy), "insecure_none" !== n2.type && void 0 === n2.skipStatsigDefaults && "insecure_none" !== l2.type && (n2 = { ...n2, skipStatsigDefaults: l2.skipStatsigDefaults ?? true }), "insecure_none" !== l2.type && (0, B.$b)(l2.networkPolicy) && "insecure_none" !== n2.type && !(0, B._B)(n2.networkPolicy)) {
          const e3 = l2.networkPolicy, t3 = n2.networkPolicy?.allow;
          if (void 0 !== t3 && t3.length > 0 && e3) {
            const r3 = [.../* @__PURE__ */ new Set([...e3.allow ?? [], ...t3])];
            n2 = { ...n2, networkPolicy: { ...e3, allow: r3 } };
          } else n2 = { ...n2, networkPolicy: e3 };
        }
        n2 = (function({ requestedPolicy: e3, userConfiguredPolicy: t3 }) {
          if ("insecure_none" === e3.type || "insecure_none" === t3.type) return e3;
          const r3 = (0, B.XX)(e3.readBoundary, t3.readBoundary), n3 = "workspace" === r3 ? (0, B.wG)(ol(e3.readBoundary, e3.additionalReadPaths), ol(t3.readBoundary, t3.additionalReadPaths)) : void 0;
          return { ...e3, readBoundary: r3, additionalReadPaths: n3 };
        })({ requestedPolicy: n2, userConfiguredPolicy: l2 }), g2 && Uc.info(e2, "Smart allowlist: classifier result received", { classificationFailed: g2.classificationFailed, suggestedSandboxMode: g2.suggestedSandboxMode, commandCount: g2.commands.length, suggestedAllowlistEntryCount: g2.commands.filter((e3) => e3.suggestedAllowlistEntry).length });
        let I2 = false;
        const C2 = [], k2 = [];
        let x2 = [], T2 = [], R2 = [];
        const P2 = Xc(i2.smartAllowlistDenylist ?? []);
        if (P2.length > 0) {
          T2 = [];
          const t3 = E2.map((e3) => e3[0] ?? "");
          for (let e3 = 0; e3 < E2.length; e3++) {
            const r3 = E2[e3];
            if (!r3 || 0 === r3.length) continue;
            if (P2.some((e4) => tl(r3, e4))) {
              const r4 = t3[e3];
              r4 && T2.push(r4);
            }
          }
          T2.length > 0 && (Uc.info(e2, "Command blocklist: commands require approval", { count: T2.length }), C2.push(`In blocklist: ${T2.join(", ")}`));
        }
        if (A2 && g2) {
          const t3 = b2.map((e3) => e3[0] ?? ""), r3 = i2.allow.filter((e3) => this.isShellEntry(e3));
          Uc.info(e2, "Smart allowlist: checking commands against lists", { commandCount: t3.length, allowlistCount: r3.length, commandBlocklistCount: P2.length });
          const n3 = b2.map((e3) => r3.some((t4) => e3.some((e4) => this.matchesShell(t4, e4)))), s3 = n3.every(Boolean), o3 = [];
          for (let e3 = 0; e3 < g2.commands.length; e3++) {
            if (n3[e3]) continue;
            const t4 = g2.commands[e3];
            t4 && o3.push(t4);
          }
          if (x2 = Xc(o3.flatMap((e3) => (function(e4) {
            const t4 = e4.name.trim();
            if (!t4) return [];
            if ((0, Sc.hr)(t4)) return [];
            const r4 = e4.subcommandTokens.map((e5) => e5.trim()).filter(Boolean), n4 = e4.arguments.map((e5) => e5.trim()).filter(Boolean), s4 = [t4], o4 = [t4];
            for (const e5 of r4) o4.push(e5), s4.push(o4.join(" "));
            const i3 = [t4, ...n4].join(" ");
            return s4.includes(i3) || s4.push(i3), Xc(s4);
          })(e3))), R2 = o3.map((e3) => e3.suggestedAllowlistEntry).filter((e3) => "string" == typeof e3).filter((e3) => x2.includes(e3)), x2.length > 0) {
            const e3 = (0, Sc.kM)(x2, R2), t4 = e3.length > 0 ? e3.join(", ") : x2.join(", ");
            k2.push(`Not in allowlist: ${t4}`);
          }
          I2 = s3 && 0 === T2.length, I2 && Uc.info(e2, "Smart allowlist: all commands in allowlist, will check security", { commandCount: t3.length });
        }
        const J2 = "ask-every-time" === a2 || "insecure_none" === n2.type && "allowlist" === a2 ? void 0 : l2, M2 = S2.map((e3, t3) => new ul(e3, n2, J2, b2[t3]));
        if ((0 === S2.length || f2 && !A2) && !c2) {
          Uc.info(e2, "Shell permissions: prompting after parser miss", { toolCallId: r2.toolCallId, approvalMode: a2, requestedPolicyType: dl(n2), userConfiguredPolicyType: dl(l2), isSmartAllowlistActive: A2, parsingFailed: f2, parserCommandCount: S2.length, hasSmartModeApprovalReason: void 0 !== y2, hasSmartModeApprovalRequestId: void 0 !== w2 });
          const s3 = { type: gs.Shell, toolCallId: r2.toolCallId, details: { command: t2, workingDirectory: r2.workingDirectory, timeout: r2.timeout, reason: y2 ?? (f2 ? "Parser failed to parse command (possible bypass)" : "Parser found no commands (possible bypass)"), isSandboxAvailable: false, isSandboxEnabled: false, canAllowlist: false, notAllowedCommands: [], smartModeApprovalReason: y2, smartModeApprovalRequestId: w2 } }, o3 = await this.pendingDecisionStore.requestApproval(s3);
          if (o3.approved) {
            return { kind: "allow", policy: await this.applyServerAndAdminPolicies(n2) };
          }
          return { kind: "block", reason: { type: "userRejected", reason: o3.reason } };
        }
        if (await this.hasHardDeny(e2, M2)) return { kind: "block", reason: { type: "permissionsConfig", ..."workspace_readonly" === l2.type ? { isReadonly: true } : {} } };
        const { allRedirectsAreWorkspaceFileSafe: q2, redirectsAllowlistSafe: D2 } = await this.computeRedirectAllowlistSafety(r2.parsingResult, r2.workingDirectory, "insecure_none" === l2.type || "workspace" !== l2.readBoundary), O2 = await this.teamSettingsService.getAutoRunControls(), N2 = { type: "insecure_none" };
        for (const e3 of M2) {
          await this.cmdIsAllowedByAllowlist(e3, { redirectsAllowlistSafe: D2, autoRunControls: O2, applyTeamAllowlist: u2 }) && e3.approveWithPolicy(N2);
        }
        for (const e3 of M2) O2 && this.isInTeamBlocklist(O2, e3) && e3.deny();
        const F2 = await this.teamSettingsService.getDeleteFileProtection();
        if (F2) for (const e3 of M2) "rm" === e3.command.name && e3.deny();
        const U2 = this.buildShellApprovalDecisionFacts({ commands: M2, autoRunControls: O2, shouldApplyTeamShellAllowlist: u2, deleteProtectionEnabled: F2, softDenylistedCommands: T2 });
        if ("workspace_readonly" === l2.type && "workspace_readonly" !== n2.type) return Uc.info(e2, "Shell permissions: blocked by readonly mode"), { kind: "block", reason: { type: "permissionsConfig", isReadonly: true } };
        const L2 = (0, m.zNu)(r2.hookApprovalRequirement), $2 = r2.hookApprovalRequirement?.reason;
        let Q2 = L2 ? void 0 : this.getShellAutoApprovalPolicy({ approvalMode: a2, isUnrestricted: c2, requestedPolicy: n2, facts: U2, preserveRequestedPolicyForAllowlistedCommands: A2 });
        const j2 = void 0 !== Q2 && U2.allCommandsAllowlisted && "insecure_none" === Q2.type && "allowlistEscalated" in Q2 && true === Q2.allowlistEscalated;
        if ("insecure_none" === Q2?.type) {
          const { readBoundary: e3 } = await this.getAdminReadSandboxing();
          "workspace" === e3 && (s2 ? Q2 = void 0 : "insecure_none" !== n2.type && (Q2 = n2));
        }
        const G2 = void 0 !== Q2 && j2;
        if (Q2 && (c2 || void 0 === y2 || G2)) {
          A2 && U2.allCommandsPreapproved && !U2.allCommandsAllowlisted && Uc.info(e2, "Shell permissions: all commands allowed by sandbox policy");
          const t3 = await this.applyServerAndAdminPolicies(Q2);
          return Uc.info(e2, "Shell permissions: auto-approved shell command", { toolCallId: r2.toolCallId, approvalMode: a2, requestedPolicyType: dl(n2), userConfiguredPolicyType: dl(l2), autoApprovalPolicyType: dl(Q2), mergedPolicyType: dl(t3), isSmartAllowlistActive: A2, smartModeApprovalBypassedByAllowlist: G2, allCommandsRunnable: U2.allCommandsRunnable, allCommandsAllowlisted: U2.allCommandsAllowlisted, allCommandsPreapproved: U2.allCommandsPreapproved, hasSmartModeApprovalReason: void 0 !== y2, commandCount: M2.length }), { kind: "allow", policy: t3 };
        }
        let H2 = (A2 || (!p2 || h2 || q2) && !f2) && ("allowlist" === a2 || "ask-every-time" === a2) && U2.canAllowlistInPrompt;
        const z2 = [], W2 = void 0 !== y2, V2 = U2.notInTeamAllowlist.length > 0 && (U2.hasSecurityDenies || U2.hasSoftDenies || !U2.allCommandsRunnable);
        if (void 0 !== y2 && z2.push(y2), L2 && (W2 || z2.push($2 ? `Hook requested approval: ${$2}` : "Hook requested approval"), H2 = false), C2.length > 0 && (W2 || z2.push(...C2), H2 = false), !W2) {
          if (A2 && k2.length > 0) z2.push(...k2);
          else if (U2.unapprovedCommands.length > 0) {
            const e3 = this.generateAllowlistPatterns(U2.unapprovedCommands.map((e4) => e4.command)), t3 = (0, Sc.kM)(e3), r3 = t3.length > 0 ? t3.join(", ") : U2.unapprovedCommands.map((e4) => e4.command.fullText).join(", ");
            z2.push(`Not in allowlist: ${r3}`);
          }
        }
        if (U2.hasSecurityDenies && (W2 || (U2.rmDeniedByDeleteProtection.length > 0 && z2.push("Delete protection is enabled"), U2.teamBlocklistedCommands.length > 0 && z2.push(`In team blocklist: ${U2.teamBlocklistedCommands.map((e3) => e3.command.name).join(", ")}`)), H2 = false), V2) {
          const t3 = U2.notInTeamAllowlist.map((e3) => e3.command.fullText).join(", ");
          Uc.info(e2, "Shell permissions: commands not in team allowlist", { commandCount: U2.notInTeamAllowlist.length }), W2 || z2.push(`Not in team allowlist: ${t3}`), H2 = false;
        }
        const K2 = z2.join(" • "), Y2 = [];
        if (H2) {
          const e3 = void 0 !== y2 ? M2.filter((e4) => "allowlisted" !== e4.state) : U2.unapprovedCommands;
          Y2.push(...this.generateAllowlistPatterns(e3.map((e4) => e4.command)));
        }
        const Z2 = A2 && k2.length > 0, X2 = Z2 ? x2 : Y2, ee2 = Z2 && R2.length > 0 ? R2 : void 0, te2 = "insecure_none" !== n2.type && "insecure_none" !== l2.type, re2 = "insecure_none" !== n2.type, ne2 = [void 0 !== y2 ? "smart_mode_approval" : void 0, L2 ? "hook_forces_prompt" : void 0, C2.length > 0 ? "command_blocklist" : void 0, A2 && k2.length > 0 ? "smart_allowlist_miss" : void 0, U2.unapprovedCommands.length > 0 ? "unapproved_commands" : void 0, U2.hasSecurityDenies ? "security_denies" : void 0, V2 ? "team_allowlist_miss" : void 0].filter((e3) => void 0 !== e3);
        Uc.info(e2, "Shell permissions: requesting shell approval", { toolCallId: r2.toolCallId, approvalMode: a2, requestedPolicyType: dl(n2), userConfiguredPolicyType: dl(l2), isSandboxAvailable: te2, isSandboxEnabled: re2, canAllowlist: H2, isSmartAllowlistActive: A2, hasSmartModeApprovalReason: void 0 !== y2, hasSmartModeApprovalRequestId: void 0 !== w2, hookForcesPrompt: L2, approvalReasonTypes: ne2, commandCount: M2.length, unapprovedCommandCount: U2.unapprovedCommands.length, deniedCommandCount: U2.deniedCommands.length, notInTeamAllowlistCount: U2.notInTeamAllowlist.length, notAllowedCommandCount: X2.length, suggestedAllowlistEntryCount: ee2?.length ?? 0, allCommandsRunnable: U2.allCommandsRunnable, allCommandsAllowlisted: U2.allCommandsAllowlisted, allCommandsPreapproved: U2.allCommandsPreapproved, hasSecurityDenies: U2.hasSecurityDenies, hasSoftDenies: U2.hasSoftDenies });
        const se2 = { type: gs.Shell, toolCallId: r2.toolCallId, details: { command: t2, workingDirectory: r2.workingDirectory, timeout: r2.timeout, reason: K2, isSandboxAvailable: "allowlist" === a2 && te2, isSandboxEnabled: "allowlist" === a2 && re2, canAllowlist: H2, notAllowedCommands: X2, suggestedAllowlistEntries: ee2, smartModeApprovalReason: y2, smartModeApprovalRequestId: w2 } }, oe2 = await this.pendingDecisionStore.requestApproval(se2);
        if (oe2.approved) {
          const e3 = "unrestricted" === a2 ? { type: "insecure_none" } : n2;
          return { kind: "allow", policy: await this.applyServerAndAdminPolicies(e3) };
        }
        return { kind: "block", reason: { type: "userRejected", reason: oe2.reason } };
      }
      async isShellCommandFullyAllowlisted(e2, t2, r2) {
        const n2 = e2.withName("InteractivePermissionsService.isShellCommandFullyAllowlisted"), s2 = await this.getPermissions(), o2 = !s2.dashboardTerminalAllowlistOverriddenByPermissionsFile;
        if ("allowlist" !== s2.approvalMode) return false;
        if ("workspace_readonly" === s2.userConfiguredPolicy.type) return false;
        const { redirectsAllowlistSafe: i2 } = await this.computeRedirectAllowlistSafety(r2.parsingResult, r2.workingDirectory, "insecure_none" === s2.userConfiguredPolicy.type || "workspace" !== s2.userConfiguredPolicy.readBoundary);
        if (!i2) return false;
        const a2 = r2.classifierResult, c2 = void 0 !== a2 && !a2.classificationFailed && a2.commands.length > 0 ? a2 : void 0, l2 = (s2.smartAllowlistEnabled ?? false) && void 0 !== c2;
        if (r2.parsingResult.parsingFailed && !l2) return false;
        const u2 = r2.parsingResult.executableCommands, d2 = l2 ? c2.commands.map(rl) : u2;
        if (0 === d2.length) return false;
        const p2 = l2 ? c2.commands.map(el) : d2.map((e3) => [e3.fullText.trim()].filter(Boolean)), m2 = void 0 !== c2 ? c2.commands.map(el) : p2, h2 = { type: "insecure_none" }, f2 = d2.map((e3, t3) => new ul(e3, h2, void 0, p2[t3]));
        if (await this.hasHardDeny(n2, f2)) return false;
        const g2 = Xc(s2.smartAllowlistDenylist ?? []);
        if (g2.length > 0) {
          for (const e3 of m2) if (e3 && 0 !== e3.length && g2.some((t3) => tl(e3, t3))) return false;
        }
        if (await this.teamSettingsService.getDeleteFileProtection() && f2.some((e3) => "rm" === e3.command.name)) return false;
        const y2 = await this.teamSettingsService.getAutoRunControls();
        if (void 0 !== y2 && f2.some((e3) => this.isInTeamBlocklist(y2, e3))) return false;
        for (const e3 of f2) {
          if (!await this.cmdIsAllowedByAllowlist(e3, { redirectsAllowlistSafe: i2, autoRunControls: y2, applyTeamAllowlist: o2 })) return false;
        }
        return true;
      }
      async applyServerAndAdminPolicies(e2) {
        if ("insecure_none" === e2.type) return e2;
        const { userSandboxDataFolderName: t2 } = await this.getPermissions(), r2 = void 0 !== t2 && t2.length > 0 ? (0, s.join)((0, ge.homedir)(), t2, "sandbox.json") : this.perUserSandboxConfigPath, n2 = await this.foldPerUserFilePolicy(e2, r2), o2 = n2.skipStatsigDefaults ? n2 : await this.applyStatsigDefaults(n2), i2 = await this.loadPerRepoFilePolicy(o2.type), a2 = await this.buildTeamAdminPolicy(o2.type), c2 = (0, B._B)(e2.networkPolicy), { policy: l2 } = await (0, B.resolveSandboxPolicyForWorkspace)(this.rootDirectories[0], { perUser: o2, perRepo: i2, teamAdmin: a2 });
        return c2 ? { ...l2, networkPolicy: (0, B.T6)() } : l2;
      }
      async foldPerUserFilePolicy(e2, t2 = this.perUserSandboxConfigPath) {
        const r2 = await (0, B.tv)(t2, (0, ge.homedir)());
        if (!r2 || "insecure_none" === r2.type) return e2;
        let n2 = (0, B.fZ)(r2.networkPolicy, e2.networkPolicy);
        n2 && void 0 !== e2.networkPolicy?.default && (n2 = { ...n2, default: e2.networkPolicy.default });
        const s2 = (0, B.s9)(r2.additionalReadonlyPaths, e2.additionalReadonlyPaths), o2 = { ...e2, networkPolicy: n2, additionalReadonlyPaths: s2.length > 0 ? s2 : void 0, readBoundary: r2.readBoundary ?? e2.readBoundary, additionalReadPaths: void 0 !== r2.additionalReadPaths ? r2.additionalReadPaths : e2.additionalReadPaths };
        if ("workspace_readwrite" === e2.type && "workspace_readwrite" === r2.type) {
          const t3 = (0, B.s9)(r2.additionalReadwritePaths, e2.additionalReadwritePaths);
          return { ...o2, additionalReadwritePaths: t3.length > 0 ? t3 : void 0 };
        }
        return o2;
      }
      async applyStatsigDefaults(e2) {
        const t2 = await this.teamSettingsService.getDefaultNetworkAllowlist();
        if (!t2.available || 0 === t2.allowlist.length) return e2;
        if ((0, B._B)(e2.networkPolicy)) return e2;
        const r2 = { default: "deny", allow: jc(t2.allowlist) };
        return { ...e2, networkPolicy: (0, B.fZ)(e2.networkPolicy, r2) };
      }
      async loadPerRepoFilePolicy(e2) {
        const t2 = this.rootDirectories[0];
        if (!t2) return;
        const r2 = await (0, B.tv)((0, s.join)(t2, ".cursor", "sandbox.json"), t2);
        return r2 && "insecure_none" !== r2.type ? r2.type !== e2 ? nl(e2, { networkPolicy: r2.networkPolicy, additionalReadonlyPaths: r2.additionalReadonlyPaths, ..."additionalReadwritePaths" in r2 ? { additionalReadwritePaths: r2.additionalReadwritePaths } : {}, disableTmpWrite: r2.disableTmpWrite, networkPolicyStrict: r2.networkPolicyStrict, readBoundary: r2.readBoundary, additionalReadPaths: r2.additionalReadPaths }) : r2 : void 0;
      }
      async buildTeamAdminPolicy(e2) {
        const t2 = await this.buildTeamAdminNetworkPolicy(e2), { readBoundary: r2, readAllowlistPaths: n2, allowUserOverrideReadAllowlist: s2 } = await this.getAdminReadSandboxing();
        return void 0 === r2 ? t2 : { ...t2 ?? nl(e2), readBoundary: r2, additionalReadPaths: n2, allowUserOverrideReadPaths: s2 };
      }
      async getAdminReadSandboxing() {
        const [e2, t2] = await Promise.all([this.teamSettingsService.isReadControlEnabled?.() ?? true, this.teamSettingsService.getSandboxingControls()]);
        return e2 ? { readBoundary: "workspace" === t2.readBoundary ? "workspace" : void 0, readAllowlistPaths: t2.readAllowlistPaths ?? [], allowUserOverrideReadAllowlist: t2.allowUserOverrideReadAllowlist } : { readBoundary: void 0, readAllowlistPaths: [] };
      }
      async buildTeamAdminNetworkPolicy(e2) {
        if (!this.adminNetworkControlsEnabled) return;
        const t2 = await this.teamSettingsService.getNetworkAccessControls();
        if (!t2.available) return nl(e2, { networkPolicy: (0, B.Po)() });
        if (0 === t2.allowlist.length && 0 === t2.denylist.length) return;
        const r2 = {};
        return t2.allowlist.length > 0 && (r2.default = "deny", r2.allow = jc(t2.allowlist)), t2.denylist.length > 0 && (r2.deny = jc(t2.denylist)), nl(e2, { networkPolicy: r2 });
      }
      async isInShellAllowlist(e2) {
        return (await this.getPermissions()).allow.some((t2) => this.isShellEntry(t2) && e2.matchForms.some((e3) => this.matchesShell(t2, e3)));
      }
      isInTeamBlocklist(e2, t2) {
        return e2.blocked.some((e3) => this.matchesAutoRunCommand(t2.command.fullText, e3));
      }
      isInTeamAllowlist(e2, t2) {
        return e2.allowed.some((e3) => this.matchesAutoRunCommand(t2.command.fullText, e3));
      }
      async computeRedirectAllowlistSafety(e2, t2, r2) {
        const n2 = e2.hasRedirects, s2 = e2.parsingFailed, i2 = true === e2.allRedirectsAreDevNull, a2 = !(!n2 || i2 || s2) && await (async function({ parsingResult: e3, workingDirectory: t3, rootDirectories: r3, allowTmpRedirects: n3 = true, resolvePathForPermissions: s3 = Pc, pathModule: i3 = o, tempPathOptions: a3 = { platform: process.platform, env: process.env, pathModule: i3, homeDirectory: (0, ge.homedir)() } }) {
          if (!e3.hasRedirects) return true;
          const c3 = e3.redirects;
          if (0 === c3.length) return false;
          const l2 = e3.executableCommands.length > 1, u2 = Gc();
          for (const e4 of c3) {
            if (Yc(e4)) continue;
            const o2 = l2 ? Gc() : u2, { operator: c4, targetText: d2 } = e4, p2 = e4.destinationFds.map((e5) => Number(e5));
            if (">&" === c4) {
              const e5 = Kc(d2), t4 = void 0 === e5 ? void 0 : o2.fdTargets.get(e5);
              if (!Hc(t4)) {
                for (const e6 of p2) o2.fdTargets.set(e6, "unsafe");
                return false;
              }
              for (const e6 of p2) o2.fdTargets.set(e6, t4);
              continue;
            }
            if ("<&" === c4) {
              const e5 = Kc(d2), t4 = void 0 === e5 ? void 0 : o2.fdTargets.get(e5);
              if ("dev-null" !== t4) {
                for (const e6 of p2) o2.fdTargets.set(e6, "unsafe");
                return false;
              }
              for (const e6 of p2) o2.fdTargets.set(e6, t4);
              continue;
            }
            if ("/dev/null" === d2) {
              for (const e5 of p2) o2.fdTargets.set(e5, "dev-null");
              continue;
            }
            if (!Wc(c4) || void 0 === d2) {
              for (const e5 of p2) o2.fdTargets.set(e5, "unsafe");
              return false;
            }
            const m2 = await Zc({ targetText: d2, workingDirectory: t3, rootDirectories: r3, allowTmpRedirects: n3, resolvePathForPermissions: s3, pathModule: i3, tempPathOptions: a3 });
            if (!m2) {
              for (const e5 of p2) o2.fdTargets.set(e5, "unsafe");
              return false;
            }
            for (const e5 of p2) o2.fdTargets.set(e5, m2);
          }
          return true;
        })({ parsingResult: e2, workingDirectory: t2, rootDirectories: this.rootDirectories, allowTmpRedirects: r2 }), c2 = !(function({ parsingResult: e3, hasRedirects: t3, parsingFailed: r3, allRedirectsAreAllowlistSafe: n3, allRedirectsAreWorkspaceFileSafe: s3 }) {
          return !(!t3 || r3 || n3 || s3) && (0 === e3.redirects.length || e3.redirects.some(Vc));
        })({ parsingResult: e2, hasRedirects: n2, parsingFailed: s2, allRedirectsAreAllowlistSafe: i2, allRedirectsAreWorkspaceFileSafe: a2 });
        return { allRedirectsAreAllowlistSafe: i2, allRedirectsAreWorkspaceFileSafe: a2, redirectsAllowlistSafe: c2 };
      }
      async cmdIsAllowedByAllowlist(e2, t2) {
        return !!t2.redirectsAllowlistSafe && (!!await this.isInShellAllowlist(e2) || t2.applyTeamAllowlist && void 0 !== t2.autoRunControls && this.isInTeamAllowlist(t2.autoRunControls, e2));
      }
      buildShellApprovalDecisionFacts({ commands: e2, softDenylistedCommands: t2, autoRunControls: r2, shouldApplyTeamShellAllowlist: n2, deleteProtectionEnabled: s2 }) {
        const o2 = e2.filter((e3) => "denied" === e3.state), i2 = e2.filter((e3) => "approvable" === e3.state), a2 = n2 && r2?.enabled ? e2.filter((e3) => !this.isInTeamAllowlist(r2, e3)) : [], c2 = o2.filter((e3) => void 0 !== r2 && this.isInTeamBlocklist(r2, e3)), l2 = s2 ? o2.filter((e3) => "rm" === e3.command.name) : [];
        return { hasSecurityDenies: o2.length > 0, hasSoftDenies: t2.length > 0, hasTeamAllowlistMisses: a2.length > 0, allCommandsRunnable: e2.every((e3) => e3.isRunnable()), allCommandsAllowlisted: e2.every((e3) => "allowlisted" === e3.state), allCommandsPreapproved: e2.every((e3) => "preapproved" === e3.state), canAllowlistInPrompt: 0 === o2.length && 0 === a2.length, unapprovedCommands: i2, deniedCommands: o2, notInTeamAllowlist: a2, teamBlocklistedCommands: c2, rmDeniedByDeleteProtection: l2 };
      }
      getShellAutoApprovalPolicy({ approvalMode: e2, isUnrestricted: t2, requestedPolicy: r2, facts: n2, preserveRequestedPolicyForAllowlistedCommands: s2 }) {
        if (!n2.hasSecurityDenies && !n2.hasSoftDenies && n2.allCommandsRunnable) {
          if (t2) return "workspace_readonly" === r2.type ? r2 : { type: "insecure_none" };
          if ("allowlist" === e2) return n2.allCommandsAllowlisted && !s2 ? { type: "insecure_none", allowlistEscalated: true } : r2;
        }
      }
      async getPermissions() {
        return await this.permissionsProvider.getPermissions();
      }
      hasLocalShellControls(e2) {
        return e2.allow.some((e3) => this.isShellEntry(e3)) || e2.deny.some((e3) => this.isShellEntry(e3)) || (e2.smartAllowlistDenylist?.length ?? 0) > 0;
      }
      hasTeamShellControls(e2, t2 = true) {
        return void 0 !== e2 && (t2 && (e2.enabled || e2.allowed.length > 0) || e2.blocked.length > 0);
      }
      async shouldPromptForEmptyPlainShellAllowlist(e2, t2) {
        if ("allowlist" !== t2.approvalMode || "insecure_none" !== t2.userConfiguredPolicy.type || 0 === e2.trim().length || this.hasLocalShellControls(t2)) return false;
        const [r2, n2] = await Promise.all([this.teamSettingsService.getAutoRunControls(), this.teamSettingsService.getDeleteFileProtection()]);
        return !this.hasTeamShellControls(r2, !t2.dashboardTerminalAllowlistOverriddenByPermissionsFile) && !n2;
      }
      async requestApprovalForEmptyShellAllowlist(e2, t2, r2) {
        const n2 = this.getEmptyShellAllowlistCandidates(t2), s2 = await this.pendingDecisionStore.requestApproval({ type: gs.Shell, toolCallId: t2.toolCallId, details: { command: e2, workingDirectory: t2.workingDirectory, timeout: t2.timeout, reason: t2.smartModeApprovalReason ?? "Shell allowlist is empty", isSandboxAvailable: false, isSandboxEnabled: false, canAllowlist: n2.length > 0, notAllowedCommands: n2, smartModeApprovalReason: t2.smartModeApprovalReason, smartModeApprovalRequestId: t2.smartModeApprovalRequestId } });
        if (!s2.approved) return { kind: "block", reason: { type: "userRejected", reason: s2.reason } };
        return { kind: "allow", policy: await this.applyServerAndAdminPolicies(r2) };
      }
      getEmptyShellAllowlistCandidates(e2) {
        const t2 = e2.parsingResult;
        return t2.parsingFailed || 0 === t2.executableCommands.length || t2.hasRedirects && true !== t2.allRedirectsAreDevNull ? [] : this.generateAllowlistPatterns(t2.executableCommands);
      }
      async getAdminCommandDenylistBlock(e2, t2) {
        const r2 = (await this.teamSettingsService.getAdminCommandDenylist()).rules;
        if (0 === r2.length) return;
        const n2 = me({ matchForms: t2.parsingResult ? le({ command: t2.command, parsingResult: t2.parsingResult }) : [t2.command], blockedCommands: r2 });
        return void 0 !== n2 ? (Uc.info(e2, "Admin command denylist hard-blocked shell at execution time", { toolCallId: t2.toolCallId, parsingFailed: t2.parsingResult?.parsingFailed ?? true, parserCommandCount: t2.parsingResult?.executableCommands.length ?? 0 }), { type: "adminCommandDenylist", pattern: n2 }) : void 0;
      }
      async hasHardDeny(e2, t2) {
        const r2 = await this.getPermissions();
        return t2.some((e3) => r2.deny.some((t3) => this.isShellEntry(t3) && e3.matchForms.some((e4) => this.matchesShell(t3, e4))));
      }
      isShellEntry(e2) {
        return null !== al(e2);
      }
      isPathEntry(e2, t2) {
        return new RegExp(`^\\s*${e2}\\s*\\(`).test(t2);
      }
      matchesShell(e2, t2) {
        const r2 = al(e2);
        if (!r2) return false;
        const n2 = t2.trim(), s2 = this.extractBaseCommand(n2);
        if (null !== r2.argsPattern) {
          const e3 = n2.includes(" ") ? n2.slice(n2.indexOf(" ") + 1).trim() : "", t3 = this.matchGlob(r2.commandPattern, s2) || this.matchGlob(r2.commandPattern, n2), o2 = this.matchGlob(r2.argsPattern, e3);
          if (t3 && o2) return true;
        }
        return !!this.matchGlob(r2.fullPattern, n2) || (!!n2.startsWith(`${r2.fullPattern} `) || (!!this.matchGlob(r2.fullPattern, s2) || s2 === r2.fullPattern));
      }
      async checkCursorFileProtection(e2) {
        const t2 = await this.teamSettingsService.getDotCursorProtection();
        if (e2.some((e3) => ".cursor" === e3.toLowerCase() || ".vscode" === e3.toLowerCase()) && t2) {
          const t3 = e2[e2.length - 1]?.toLowerCase() ?? "";
          return t3.endsWith(".md") || t3.endsWith(".mdc") || ".cursorrules" === t3 ? null : { type: "permissionsConfig" };
        }
        return null;
      }
      extractBaseCommand(e2) {
        const t2 = e2.trim(), r2 = t2.indexOf(" ");
        return -1 === r2 ? t2 : t2.substring(0, r2);
      }
      generateAllowlistPatterns(e2) {
        const t2 = [], r2 = ["git", "npm", "yarn", "pnpm", "docker", "pip", "systemctl", "uv", "cargo", "bun", "npx"];
        for (const n2 of e2) (0, Sc.hr)(n2.name) || (r2.includes(n2.name) && n2.args.length > 0 && "word" === n2.args[0].type ? t2.push(`${n2.name} ${n2.args[0].value}`) : t2.push(n2.name));
        return [...new Set(t2)];
      }
      matchesPathEntry(e2, t2, r2) {
        const n2 = new RegExp(`^\\s*${e2}\\s*\\((.*)\\)\\s*$`), s2 = t2.match(n2);
        if (!s2) return false;
        const o2 = (s2[1] ?? "").trim();
        return this.matchGlob((0, M.jl)(o2), r2);
      }
      async isPathExplicitlyDenied(e2, t2) {
        return (await this.getPermissions()).deny.some((r2) => this.isPathEntry(e2, r2) && this.matchesPathEntry(e2, r2, t2));
      }
      async isPathExplicitlyAllowed(e2, t2) {
        return (await this.getPermissions()).allow.some((r2) => this.isPathEntry(e2, r2) && this.matchesPathEntry(e2, r2, t2));
      }
      matchGlob(e2, t2) {
        return ce(e2, t2);
      }
      async addToAllowList(e2, t2, r2) {
        const n2 = `${t2}(${r2})`;
        await this.permissionsProvider.updatePermissions((e3) => {
          const t3 = e3.allow.includes(n2) ? e3.allow : [...e3.allow, n2];
          return { ...e3, allow: t3 };
        });
      }
      async addToDenyList(e2, t2, r2) {
        const n2 = `${t2}(${r2})`;
        await this.permissionsProvider.updatePermissions((e3) => {
          const t3 = e3.deny.includes(n2) ? e3.deny : [...e3.deny, n2];
          return { ...e3, deny: t3 };
        });
      }
      async shouldBlockMcp(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          Nc(n2, (0, x.VI)(e2.withName("InteractivePermissionsService.shouldBlockMcp")), false);
          const { name: s2, toolName: o2, providerIdentifier: i2, args: a2 } = t2, c2 = (function(e3, t3) {
            if (void 0 !== t3) return t3;
            const r3 = e3;
            return void 0 !== r3.annotations ? r3.annotations : (0, Gs.yC)(r3.annotationsJson);
          })(t2, r2), l2 = (e3) => {
            this.mcpAllowlistLog?.(e3);
          };
          l2(`[permissions-service] shouldBlockMcp: toolName="${o2}", providerIdentifier="${i2}"`);
          const u2 = await this.getPermissions(), d2 = await this.teamSettingsService.getMcpToolControls(), p2 = true === d2?.enabled;
          if (await this.isMcpExplicitlyDenied(e2, i2, o2)) return l2(`[permissions-service] shouldBlockMcp: BLOCKED (explicitly denied) toolName="${o2}", providerIdentifier="${i2}"`), { type: "permissionsConfig" };
          const m2 = t2.smartModeApproval?.reason;
          if (void 0 !== m2) {
            if ("workspace_readonly" === u2.userConfiguredPolicy.type && "unrestricted" !== u2.approvalMode) return l2(`[permissions-service] shouldBlockMcp: BLOCKED (readonly mode, Smart Mode forced approval) toolName="${o2}", providerIdentifier="${i2}"`), { type: "permissionsConfig", isReadonly: true };
            l2(`[permissions-service] shouldBlockMcp: needsApproval (Smart Mode) toolName="${o2}", providerIdentifier="${i2}"`);
            return !(p2 ? this.isMcpInTeamAllowlist(d2, { providerIdentifier: i2, toolName: o2, annotations: c2 }) : await this.isMcpExplicitlyAllowed(e2, i2, o2)) && (!("unrestricted" === u2.approvalMode && !await this.teamSettingsService.getShouldBlockMcp()) && { type: "needsApproval", approvalReason: m2, approvalDetails: { type: "mcp", name: s2, toolName: o2, providerIdentifier: i2, args: a2, reason: "smartMode", canAllowlist: false, smartModeApprovalReason: m2, smartModeApprovalRequestId: t2.smartModeApproval?.requestId } });
          }
          if (p2) {
            const t3 = this.isMcpInTeamAllowlist(d2, { providerIdentifier: i2, toolName: o2, annotations: c2 });
            if (this.recordMcpAllowlistCheckResult(e2, { allowlistScope: "team", outcome: t3 ? "pass" : "fail" }), t3) return l2(`[permissions-service] shouldBlockMcp: ALLOWED (in admin MCP allowlist) toolName="${o2}", providerIdentifier="${i2}"`), false;
          } else {
            const t3 = await this.isMcpExplicitlyAllowed(e2, i2, o2);
            if (this.recordMcpAllowlistCheckResult(e2, { allowlistScope: "user", outcome: t3 ? "pass" : "fail" }), t3) return l2(`[permissions-service] shouldBlockMcp: ALLOWED (explicitly in allowlist) toolName="${o2}", providerIdentifier="${i2}"`), false;
          }
          if ("workspace_readonly" === u2.userConfiguredPolicy.type && "unrestricted" !== u2.approvalMode) return l2(`[permissions-service] shouldBlockMcp: BLOCKED (readonly mode) toolName="${o2}", providerIdentifier="${i2}"`), { type: "permissionsConfig", isReadonly: true };
          if ("unrestricted" === u2.approvalMode) {
            if (!await this.teamSettingsService.getShouldBlockMcp()) return l2(`[permissions-service] shouldBlockMcp: ALLOWED (auto-run, no team block) toolName="${o2}", providerIdentifier="${i2}"`), false;
            l2(`[permissions-service] shouldBlockMcp: needsApproval (auto-run but team blocks MCP) toolName="${o2}", providerIdentifier="${i2}"`);
          }
          return l2(`[permissions-service] shouldBlockMcp: needsApproval (not in allowlist) toolName="${o2}", providerIdentifier="${i2}", approvalMode="${u2.approvalMode}"`), { type: "needsApproval", approvalReason: `MCP tool: ${o2}`, approvalDetails: { type: "mcp", name: s2, toolName: o2, providerIdentifier: i2, args: a2, canAllowlist: true } };
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          Fc(n2);
        }
      }
      async isMcpFullyAllowlisted(e2, t2) {
        const r2 = e2.withName("InteractivePermissionsService.isMcpFullyAllowlisted"), { providerIdentifier: n2, toolName: s2 } = t2, o2 = t2.annotations ?? (0, Gs.yC)(t2.annotationsJson);
        if (await this.isMcpExplicitlyDenied(r2, n2, s2)) return false;
        const i2 = await this.teamSettingsService.getMcpToolControls();
        return true === i2?.enabled ? !!this.isMcpInTeamAllowlist(i2, { providerIdentifier: n2, toolName: s2, annotations: o2 }) : await this.isMcpExplicitlyAllowed(r2, n2, s2);
      }
      async isWebFetchFullyAllowlisted(e2, t2) {
        const r2 = await this.getPermissions();
        if ("allowlist" !== r2.approvalMode) return false;
        let n2;
        try {
          n2 = new URL(t2.url);
        } catch {
          return false;
        }
        const s2 = n2.hostname;
        return !r2.deny.some((e3) => this.matchesWebFetchEntry(e3, s2)) && r2.allow.some((e3) => this.matchesWebFetchEntry(e3, s2));
      }
      matchesAutoRunCommand(e2, t2) {
        const r2 = t2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(`^${r2}(\\s|$)`).test(e2.trim());
      }
      matchesMcpPattern({ pattern: e2, providerIdentifier: t2, toolName: r2, logLabel: n2 }) {
        const s2 = e2.indexOf(":");
        if (-1 === s2) return false;
        const o2 = e2.slice(0, s2).trim().toLowerCase(), i2 = e2.slice(s2 + 1).trim().toLowerCase(), a2 = t2.lastIndexOf("::mcpScope:"), c2 = (-1 === a2 ? t2 : t2.slice(0, a2)).toLowerCase().trim(), l2 = r2.toLowerCase().trim(), u2 = "*" === o2 || this.matchGlob(o2, c2), d2 = "*" === i2 || this.matchGlob(i2, l2), p2 = u2 && d2, m2 = `[permissions-service] ${n2}: serverPattern="${o2}", toolPattern="${i2}", normalizedProviderIdentifier="${c2}", normalizedToolName="${l2}", serverMatches=${u2}, toolMatches=${d2}, result=${p2}`;
        return this.mcpAllowlistLog?.(m2), p2;
      }
      recordMcpAllowlistCheckResult(e2, { allowlistScope: t2, outcome: r2 }) {
        Lc.increment(e2, 1, { allowlist_scope: t2, outcome: r2 });
      }
      matchesMcpEntry(e2, t2, r2) {
        const n2 = e2.match(/^\s*Mcp\s*\((.*)\)\s*$/);
        if (!n2) return false;
        const s2 = n2[1]?.trim() ?? "";
        return this.matchesMcpPattern({ pattern: s2, providerIdentifier: t2, toolName: r2, logLabel: "matchesMcpEntry" });
      }
      matchesWebFetchEntry(e2, t2) {
        const r2 = e2.match(/^\s*WebFetch\s*\((.*)\)\s*$/);
        if (!r2) return false;
        return vc(t2, r2[1]?.trim() ?? "");
      }
      matchesMcpEntryBare({ pattern: e2, providerIdentifier: t2, toolName: r2 }) {
        return this.matchesMcpPattern({ pattern: e2, providerIdentifier: t2, toolName: r2, logLabel: "matchesMcpEntryBare" });
      }
      isMcpInTeamAllowlist(e2, { providerIdentifier: t2, toolName: r2, annotations: n2 }) {
        if (e2.mcpToolAllowlist.some((e3) => this.matchesMcpEntryBare({ pattern: e3, providerIdentifier: t2, toolName: r2 }))) return true;
        const s2 = this.findTeamMcpServerPolicy(e2, t2);
        return void 0 !== s2 && "reads" === s2.mode && (0, Ac.rh)(s2, { name: r2, annotations: n2 });
      }
      findTeamMcpServerPolicy(e2, t2) {
        for (const r2 of e2.serverPolicies ?? []) if (this.matchesMcpEntryBare({ pattern: `${r2.name}:*`, providerIdentifier: t2, toolName: "" })) return r2.policy;
      }
      async isMcpExplicitlyDenied(e2, t2, r2) {
        return (await this.getPermissions()).deny.some((e3) => this.matchesMcpEntry(e3, t2, r2));
      }
      async isMcpExplicitlyAllowed(e2, t2, r2) {
        return (await this.getPermissions()).allow.some((e3) => this.matchesMcpEntry(e3, t2, r2));
      }
    }
    var hl = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, fl = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const gl = (0, k.h)("LocalReadExecutor"), yl = async (e2, t2, r2, n2) => {
      const s2 = setTimeout(() => {
        gl.warn(e2, `[watchdog, LocalReadExecutor] ${t2} still not completed after ${r2}ms`);
      }, r2);
      try {
        return await n2();
      } finally {
        clearTimeout(s2);
      }
    };
    function wl(e2) {
      return e2 >= 32 && e2 <= 126 || 9 === e2 || 10 === e2 || 13 === e2;
    }
    const vl = Buffer.from("\n---\n");
    function _l(e2) {
      const t2 = (function(e3) {
        if (e3.length < 5 || 45 !== e3[0] || 45 !== e3[1] || 45 !== e3[2] || 10 !== e3[3]) return 0;
        const t3 = Buffer.from("\n---\n"), r3 = e3.indexOf(t3, 4);
        return -1 === r3 ? 0 : r3 + t3.length;
      })(e2), r2 = t2 > 0 ? e2.subarray(0, t2).toString("utf-8") : "", n2 = (function(e3, t3) {
        const r3 = e3.length;
        if (r3 < 2 * vl.length) return r3;
        if (10 !== e3[r3 - 1] || 45 !== e3[r3 - 2] || 45 !== e3[r3 - 3] || 45 !== e3[r3 - 4] || 10 !== e3[r3 - 5]) return r3;
        const n3 = Math.max(t3, r3 - 4096), s3 = e3.lastIndexOf(vl, r3 - vl.length - 1);
        return -1 === s3 || s3 < n3 ? r3 : (function(e4) {
          for (let t5 = 0; t5 < e4.length; t5++) {
            const r5 = e4.charCodeAt(t5);
            if (10 !== r5 && (r5 < 32 || r5 > 126)) return false;
          }
          const t4 = e4.split("\n").filter((e5) => e5.length > 0);
          if (t4.length < 2 || t4.length > 3) return false;
          const r4 = t4[0], n4 = t4[t4.length - 1];
          return !(!/^(exit_code: (?:-?\d+|unknown)|error: .+)$/.test(r4) || !n4.startsWith("ended_at: ") || 3 === t4.length && !/^elapsed_ms: \d+$/.test(t4[1]));
        })(e3.subarray(s3 + vl.length, r3 - 4).toString("utf-8")) ? s3 : r3;
      })(e2, t2), s2 = n2 < e2.length ? e2.subarray(n2).toString("utf-8") : "", o2 = e2.subarray(t2, n2), i2 = (function(e3) {
        if (e3.length >= 2) {
          if (255 === e3[0] && 254 === e3[1]) return "utf-16le";
          if (254 === e3[0] && 255 === e3[1]) return "utf-16be";
        }
        const t3 = Math.min(4096, e3.length);
        if (t3 < 16) return "utf-8";
        let r3 = 0, n3 = 0;
        for (let s3 = 0; s3 + 1 < t3; s3 += 2) {
          const t4 = e3[s3], o3 = e3[s3 + 1];
          0 === o3 && wl(t4) && r3++, 0 === t4 && wl(o3) && n3++;
        }
        return r3 >= 8 && r3 >= 4 * Math.max(1, n3) ? "utf-16le" : n3 >= 8 && n3 >= 4 * Math.max(1, r3) ? "utf-16be" : "utf-8";
      })(o2);
      let a2;
      if ("utf-16le" === i2) a2 = o2.toString("utf16le");
      else if ("utf-16be" === i2) {
        const e3 = o2.length - o2.length % 2, t3 = Buffer.from(o2.subarray(0, e3));
        t3.swap16(), a2 = t3.toString("utf16le");
      } else a2 = o2.toString("utf-8");
      return 65279 === a2.charCodeAt(0) && (a2 = a2.slice(1)), r2 + a2 + s2;
    }
    const Al = [Buffer.from("%PDF-", "ascii"), Buffer.from([208, 207, 17, 224, 161, 177, 26, 225]), Buffer.from([80, 75, 3, 4]), Buffer.from([80, 75, 5, 6]), Buffer.from([80, 75, 7, 8]), Buffer.from([127, 69, 76, 70]), Buffer.from([254, 237, 250, 206]), Buffer.from([254, 237, 250, 207]), Buffer.from([206, 250, 237, 254]), Buffer.from([207, 250, 237, 254]), Buffer.from([77, 90, 144]), Buffer.from([0, 97, 115, 109]), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), Buffer.from([255, 216, 255]), Buffer.from("GIF87a", "ascii"), Buffer.from("GIF89a", "ascii"), Buffer.from("SQLite format 3\0", "ascii"), Buffer.from([31, 139]), Buffer.from("BZh", "ascii"), Buffer.from([253, 55, 122, 88, 90, 0]), Buffer.from([40, 181, 47, 253]), Buffer.from([55, 122, 188, 175, 39, 28]), Buffer.from([82, 97, 114, 33, 26, 7, 0]), Buffer.from([82, 97, 114, 33, 26, 7, 1, 0])];
    function Sl(e2) {
      const t2 = (0, s.extname)(e2).toLowerCase(), r2 = "" === t2 ? "Binary files without an extension are not supported by the read executor" : `Binary files of type ${t2} are not supported by the read executor`;
      return new cc.sV({ result: { case: "invalidFile", value: new cc.cW({ path: e2, reason: r2 }) } });
    }
    function bl(e2, t2, r2) {
      if (void 0 === r2.offset && void 0 === r2.limit) return { content: e2, rangeApplied: false };
      if ("" === e2) return { content: e2, rangeApplied: false };
      const n2 = r2.offset ?? 1, s2 = r2.limit ?? (n2 < 0 ? Math.abs(n2) : t2), o2 = n2 < 0 ? Math.max(0, t2 + n2) : Math.max(0, n2 - 1);
      if (o2 >= t2) return { content: e2, rangeApplied: false };
      const i2 = Math.min(t2, o2 + s2);
      return { content: e2.split("\n").slice(o2, i2).join("\n"), rangeApplied: true };
    }
    function El(e2, t2, r2 = ac.p) {
      if (0 === t2.length) return e2;
      const n2 = r2 - e2.text.length;
      return n2 <= 0 ? { text: e2.text, truncated: true } : t2.length > n2 ? { text: e2.text + t2.slice(0, n2), truncated: true } : { text: e2.text + t2, truncated: e2.truncated };
    }
    function Il(e2, t2) {
      const r2 = El(e2, t2);
      return { text: r2.text, truncated: r2.truncated };
    }
    function Cl(e2, t2, r2) {
      let n2 = e2;
      return t2.forEach((e3, t3) => {
        const s2 = (function(e4, t4) {
          const { line: r3, hasNewline: n3 } = e4;
          return t4 && n3 && r3.text.endsWith("\r") ? { ...r3, text: r3.text.slice(0, -1) } : r3;
        })(e3, r2);
        t3 > 0 && (n2 = El(n2, "\n")), n2 = El(n2, s2.text), s2.truncated && (n2 = { text: n2.text, truncated: true });
      }), n2;
    }
    function kl(e2) {
      const t2 = e2.toLowerCase();
      return "utf-8" === t2 ? "utf8" : "utf-8-bom" === t2 || "utf-8 bom" === t2 ? "utf8bom" : "latin-1" === t2 ? "latin1" : t2;
    }
    class xl extends Error {
      constructor() {
        super("Invalid UTF-8 while streaming read"), this.name = "InvalidUtf8Error";
      }
    }
    function Tl(e2, t2, r2) {
      const n2 = (function(e3, t3, r3) {
        return kl(r3 ?? Ee.Yd.get(e3) ?? t3.encoding);
      })(e2, t2, r2), s2 = (function(e3) {
        const t3 = kl(e3);
        return "utf8bom" === t3 ? "utf8" : t3;
      })(n2);
      return "utf8" === s2 ? { kind: "strictUtf8", cacheEncoding: "utf8" } : lc.encodingExists(s2) ? { kind: "iconv", decoderEncoding: s2, cacheEncoding: n2 } : { kind: "strictUtf8", cacheEncoding: "utf8" };
    }
    async function Rl(e2, t2, r2, n2) {
      const s2 = void 0 !== r2.offset || void 0 !== r2.limit, o2 = (r2.offset ?? 1) < 0, i2 = r2.offset ?? 1, a2 = Math.max(0, i2 - 1), c2 = void 0 === r2.limit ? void 0 : a2 + r2.limit, l2 = o2 ? Math.abs(i2) : 0, u2 = [];
      let d2 = 0, p2 = false;
      const m2 = [];
      let h2 = 0, f2 = false;
      const g2 = [];
      let y2 = 0, w2 = false, v2 = { text: "", truncated: false }, _2 = 0, A2 = 0, S2 = 0, b2 = false, E2 = false;
      const I2 = (e3) => {
        let t3 = e3;
        return !b2 && t3.length > 0 && (b2 = true, 65279 === t3.charCodeAt(0) && (E2 = true, t3 = t3.slice(1))), t3;
      }, k2 = (e3, t3) => {
        const r3 = _2;
        if (t3 && (e3.text.endsWith("\r") ? A2++ : S2++), ((e4, t4) => {
          if (p2 && d2 >= ac.p) return;
          const r4 = u2.length > 0 ? 1 : 0;
          let n3 = ac.p - d2;
          if (r4 > 0) {
            if (n3 <= 0) return void (p2 = true);
            n3--;
          }
          const s3 = e4.text.length > n3 ? { line: { text: e4.text.slice(0, n3), truncated: true }, hasNewline: t4 } : { line: e4, hasNewline: t4 };
          u2.push(s3), d2 += r4 + s3.line.text.length, (e4.truncated || s3.line.truncated) && (p2 = true);
        })(e3, t3), o2) {
          if (l2 > 0) {
            for (g2.push({ line: e3, hasNewline: t3 }), y2 += e3.text.length + 1; g2.length > l2; ) {
              const e4 = g2.shift();
              void 0 !== e4 && (y2 -= e4.line.text.length + 1);
            }
            for (; g2.length > 1 && y2 > ac.p; ) {
              const e4 = g2.shift();
              void 0 !== e4 && (y2 -= e4.line.text.length + 1, w2 = true);
            }
          }
        } else {
          s2 && r3 >= a2 && (void 0 === c2 || r3 < c2) && ((e4, t4) => {
            if (f2 && h2 >= ac.p) return;
            const r4 = m2.length > 0 ? 1 : 0;
            let n3 = ac.p - h2;
            if (r4 > 0) {
              if (n3 <= 0) return void (f2 = true);
              n3--;
            }
            const s3 = e4.text.length > n3 ? { line: { text: e4.text.slice(0, n3), truncated: true }, hasNewline: t4 } : { line: e4, hasNewline: t4 };
            m2.push(s3), h2 += r4 + s3.line.text.length, e4.truncated && (f2 = true), s3.line.truncated && (f2 = true);
          })(e3, t3);
        }
        _2++;
      };
      for await (const r3 of (async function* (e3, t3, r4) {
        if ("strictUtf8" === r4.kind) {
          const r5 = new Pt.TextDecoder("utf-8", { fatal: true, ignoreBOM: true }), n4 = (0, C.createReadStream)(t3, { highWaterMark: 65536, signal: e3.signal });
          try {
            for await (const e5 of n4) {
              const t4 = r5.decode(e5, { stream: true });
              t4.length > 0 && (yield t4);
            }
            const e4 = r5.decode();
            e4.length > 0 && (yield e4);
          } catch (e4) {
            if (e4 instanceof TypeError) throw new xl();
            throw e4;
          }
          return;
        }
        const n3 = (0, C.createReadStream)(t3, { highWaterMark: 65536, signal: e3.signal }).pipe(lc.decodeStream(r4.decoderEncoding));
        for await (const e4 of n3) yield "string" == typeof e4 ? e4 : String(e4);
      })(e2, t2, n2)) {
        const e3 = I2(r3);
        let t3 = 0, n3 = e3.indexOf("\n", t3);
        for (; -1 !== n3; ) v2 = Il(v2, e3.slice(t3, n3)), k2(v2, true), v2 = { text: "", truncated: false }, t3 = n3 + 1, n3 = e3.indexOf("\n", t3);
        t3 < e3.length && (v2 = Il(v2, e3.slice(t3)));
      }
      k2(v2, false);
      const x2 = A2 + S2, T2 = x2 > 0 && A2 / x2 * 100 >= 5;
      !(function(e3, t3) {
        if (Ee.Yd.has(e3) && Ee.Yd.delete(e3), Ee.Yd.set(e3, t3), Ee.Yd.size <= 100) return;
        const r3 = Ee.Yd.keys().next().value;
        void 0 !== r3 && Ee.Yd.delete(r3);
      })(t2, "utf8" === n2.cacheEncoding && E2 ? "utf8bom" : n2.cacheEncoding);
      let R2 = { text: "", truncated: p2 };
      if (R2 = Cl(R2, u2, T2), !s2) return { content: R2.text, totalLines: _2, truncated: R2.truncated, rangeApplied: false };
      if ("" === R2.text) return { content: "", totalLines: _2, truncated: false, rangeApplied: false };
      if (o2) {
        const e3 = r2.limit ?? l2;
        let t3 = { text: "", truncated: w2 };
        return t3 = Cl(t3, g2.slice(0, e3), T2), { content: t3.text, totalLines: _2, truncated: t3.truncated, rangeApplied: true };
      }
      if (a2 >= _2) return { content: R2.text, totalLines: _2, truncated: R2.truncated, rangeApplied: false };
      let B2 = { text: "", truncated: f2 };
      return B2 = Cl(B2, m2, T2), { content: B2.text, totalLines: _2, truncated: B2.truncated, rangeApplied: true };
    }
    class Bl {
      constructor(e2, t2, r2) {
        this.permissionsService = e2, this.workspacePath = t2, this.mcpStateAccessor = r2?.mcpStateAccessor, this.useStreamingRead = r2?.useStreamingRead, this.pendingDecisionProvider = r2?.pendingDecisionProvider;
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          hl(r2, (0, x.VI)(e2.withName("LocalReadExecutor.execute")), false);
          const o2 = t2.path, i2 = (0, M.o1)(o2, this.workspacePath), a2 = await yl(e2, "permissionsService.shouldBlockFileRead", 3e3, () => (async function(e3, t3, r3) {
            return e3.shouldBlockFileRead?.(t3, r3) ?? e3.shouldBlockRead(t3, r3);
          })(this.permissionsService, i2));
          if (a2) {
            const r3 = await yl(e2, "resolveFileReadBlock", 3e3, () => (async function(e3, t3) {
              return await Ze(e3, { onNeedsApproval: async (e4, r4) => {
                const n2 = t3.pendingDecisionProvider?.requestReadApproval?.bind(t3.pendingDecisionProvider);
                if ("fileRead" !== r4.type || !n2) return { kind: "denied", message: "Blocked by permissions configuration" };
                const s2 = await n2({ type: gs.Read, details: { path: r4.path, reason: e4 }, toolCallId: t3.toolCallId });
                return s2.approved ? null : { kind: "rejected", reason: s2.reason };
              }, onUserRejected: (e4) => ({ kind: "rejected", reason: e4 }), onPermissionDenied: (e4) => ({ kind: "denied", message: e4 }) }) ?? { kind: "proceed" };
            })(a2, { pendingDecisionProvider: this.pendingDecisionProvider, toolCallId: t2.toolCallId }));
            if ("rejected" === r3.kind) return new cc.sV({ result: { case: "rejected", value: new cc.f4({ path: i2, reason: r3.reason ?? "" }) } });
            if ("denied" === r3.kind) return new cc.sV({ result: { case: "permissionDenied", value: new cc.lW({ path: i2 }) } });
          }
          void 0 !== this.mcpStateAccessor && jo(e2, this.mcpStateAccessor, i2);
          try {
            const r3 = await yl(e2, "stat", 3e3, () => (0, n.stat)(i2));
            if (r3.isDirectory()) return new cc.sV({ result: { case: "invalidFile", value: new cc.cW({ path: i2, reason: "Path is a directory, not a file" }) } });
            if (!r3.isFile()) return new cc.sV({ result: { case: "invalidFile", value: new cc.cW({ path: i2, reason: "Path is neither a file nor a directory" }) } });
            const o3 = (0, ai.CM)(i2), a3 = (0, ai.JD)(i2);
            if (o3 || a3) return await this.readTerminalFile(e2, i2, r3, t2, a3 && !o3);
            const c2 = await yl(e2, "getFormatForFile", 3e3, () => (0, Ee.zV)(i2)), l2 = c2.isImageFile, u2 = (function(e3) {
              return ".pdf" === (0, s.extname)(e3).toLowerCase();
            })(i2), d2 = (0, Ee.d8)(i2);
            if (l2) {
              const t3 = await yl(e2, "resizeImageIfNeeded", 3e3, async () => {
                const e3 = await (0, n.readFile)(i2);
                return (0, js.O5)(e3);
              });
              return new cc.sV({ result: { case: "success", value: new cc.mE({ path: i2, output: { case: "data", value: t3.data }, totalLines: 0, fileSize: BigInt(r3.size), truncated: false }) } });
            }
            if (u2) {
              const t3 = await yl(e2, "readPdfBinary", 3e3, () => (0, n.readFile)(i2));
              return new cc.sV({ result: { case: "success", value: new cc.mE({ path: i2, output: { case: "data", value: t3 }, totalLines: 0, fileSize: BigInt(r3.size), truncated: false }) } });
            }
            if (c2.isBinaryFile && d2) {
              const t3 = await yl(e2, "readBinaryFile", 3e3, () => (0, n.readFile)(i2));
              return new cc.sV({ result: { case: "success", value: new cc.mE({ path: i2, output: { case: "data", value: t3 }, totalLines: 0, fileSize: BigInt(r3.size), truncated: false }) } });
            }
            if (c2.isBinaryFile) return Sl(i2);
            {
              const n2 = this.useStreamingRead;
              if (!n2 || await yl(e2, "useStreamingRead", 3e3, () => n2())) {
                const n3 = await yl(e2, "readTextStreaming", 7e3, () => (async function(e3, t3, r4, n4) {
                  const s3 = Tl(t3, r4, n4.encodingHint);
                  try {
                    return await Rl(e3, t3, n4, s3);
                  } catch (r5) {
                    if (r5 instanceof xl) return await Rl(e3, t3, n4, { kind: "iconv", decoderEncoding: "latin1", cacheEncoding: "latin1" });
                    throw r5;
                  }
                })(e2, i2, c2, t2));
                return new cc.sV({ result: { case: "success", value: new cc.mE({ path: i2, output: { case: "content", value: n3.content }, totalLines: n3.totalLines, fileSize: BigInt(r3.size), truncated: n3.truncated, rangeApplied: n3.rangeApplied }) } });
              }
              const s2 = await yl(e2, "readText", 3e3, () => (0, Ee.yR)(i2, t2.encodingHint)), o4 = await yl(e2, "countLines", 3e3, () => (0, Ee.lt)(s2)), a4 = bl(s2, o4, t2);
              let l3 = a4.content, u3 = false;
              return l3.length > ac.p && (l3 = l3.substring(0, ac.p), u3 = true), new cc.sV({ result: { case: "success", value: new cc.mE({ path: i2, output: { case: "content", value: l3 }, totalLines: o4, fileSize: BigInt(r3.size), truncated: u3, rangeApplied: a4.rangeApplied }) } });
            }
          } catch (e3) {
            const t3 = e3;
            return "ENOENT" === t3.code ? new cc.sV({ result: { case: "fileNotFound", value: new cc.Ko({ path: i2 }) } }) : "EACCES" === t3.code || "EPERM" === t3.code ? new cc.sV({ result: { case: "permissionDenied", value: new cc.lW({ path: i2 }) } }) : new cc.sV({ result: { case: "error", value: new cc.F_({ path: i2, error: t3 instanceof Error ? t3.message : "Unknown error occurred" }) } });
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          fl(r2);
        }
      }
      async readTerminalFile(e2, t2, r2, s2, o2) {
        const i2 = await yl(e2, "readTerminalFile", 3e3, () => (0, n.readFile)(t2));
        if (o2 && (a2 = i2, Al.some((e3) => (function(e4, t3) {
          return e4.length >= t3.length && e4.subarray(0, t3.length).equals(t3);
        })(a2, e3)))) return Sl(t2);
        var a2;
        let c2 = _l(i2).replaceAll("\r\n", "\n");
        const l2 = (0, Ee.lt)(c2), u2 = bl(c2, l2, s2);
        c2 = u2.content;
        let d2 = false;
        return c2.length > ac.p && (c2 = c2.substring(0, ac.p), d2 = true), new cc.sV({ result: { case: "success", value: new cc.mE({ path: t2, output: { case: "content", value: c2 }, totalLines: l2, fileSize: BigInt(r2.size), truncated: d2, rangeApplied: u2.rangeApplied }) } });
      }
    }
    var Pl = r(11531), Jl = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Ml = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function ql(e2) {
      return null !== e2.exitCode || null !== e2.signalCode || e2.killed;
    }
    function Dl(e2, t2) {
      return "object" == typeof e2 && null !== e2 && "code" in e2 && e2.code === t2;
    }
    function Ol(e2) {
      return e2 instanceof Error ? e2.message : String(e2);
    }
    function Nl(e2, t2, r2, n2) {
      const s2 = [], o2 = (function(e3, t3) {
        const r3 = e3.ffmpegExitCode ?? e3.childProcess.exitCode, n3 = e3.ffmpegExitSignal ?? e3.childProcess.signalCode;
        if (!e3.ffmpegDiedEarly && null === e3.ffmpegDiedTime && null === r3 && null === n3) return;
        return `ffmpeg exited code=${r3} signal=${n3}${null !== e3.ffmpegDiedTime ? ` ${Math.max(0, Math.round((t3 - e3.ffmpegDiedTime) / 1e3))}s before SAVE` : ""}`;
      })(t2, n2);
      return void 0 !== o2 && s2.push(o2), void 0 !== r2 && s2.push(`stop failed: ${Ol(r2)}`), s2.length > 0 ? `${e2} (${s2.join("; ")})` : e2;
    }
    const Fl = (0, Pt.promisify)(dn.execFile);
    class Ul {
      constructor(e2) {
        if (this.activeRecording = null, this.inFlightSaves = [], this.onRecordingStartedCallback = null, this.onRecordingStoppedCallback = null, this.recordingStoppedCallbackInvoked = false, this.artifactsDir = e2.artifactsDir, this.stagingDir = e2.stagingDir ?? "/opt/cursor/recording-staging/", this.display = e2.display, this.disablePolishedRendering = e2.disablePolishedRendering ?? false, this.polishedRenderer = e2.polishedRenderer, !this.disablePolishedRendering) {
          if (!this.polishedRenderer) throw new Error("record_screen requires a polished recording renderer when polished rendering is enabled. This tool should run via exec-daemon where that dependency is bundled.");
          this.polishedRenderer.assertAvailable();
        }
      }
      setOnRecordingStarted(e2) {
        this.onRecordingStartedCallback = e2;
      }
      setOnRecordingStopped(e2) {
        this.onRecordingStoppedCallback = e2;
      }
      invokeStoppedCallbackOnce() {
        !this.recordingStoppedCallbackInvoked && this.onRecordingStoppedCallback && (this.recordingStoppedCallbackInvoked = true, this.onRecordingStoppedCallback());
      }
      async cleanupRecording(e2) {
        try {
          await e2.inputEventLogger.stop();
        } catch {
        }
        if (!ql(e2.childProcess) && e2.childProcess.pid) try {
          await this.stopFfmpegRecording(e2);
        } catch {
          try {
            process.kill(e2.childProcess.pid, "SIGKILL");
          } catch {
          }
        }
      }
      getActiveInputEventLogger() {
        return this.activeRecording?.inputEventLogger ?? null;
      }
      async dispose() {
        const e2 = this.inFlightSaves.map((e3) => e3.promise);
        if (e2.length > 0) try {
          await (0, be.wj)(Promise.all(e2), Ul.IN_FLIGHT_SAVE_DISPOSE_TIMEOUT_MS, "Timed out waiting for in-flight recording save");
        } catch {
        }
        if (this.activeRecording) {
          await this.cleanupRecording(this.activeRecording), this.invokeStoppedCallbackOnce();
          try {
            await n.rm(this.activeRecording.sessionDir, { force: true, recursive: true });
          } catch {
          }
          this.activeRecording = null;
        }
      }
      findInFlightSave(e2) {
        return this.inFlightSaves.find((t2) => t2.state === e2);
      }
      clearActiveRecordingIfCurrent(e2) {
        this.activeRecording === e2 && (this.activeRecording = null);
      }
      invokeStoppedCallbackIfCurrent(e2) {
        this.activeRecording === e2 && this.invokeStoppedCallbackOnce();
      }
      sanitizeToolCallId(e2) {
        return e2.replace(/[^a-zA-Z0-9_-]/g, "_");
      }
      async ensureRecordingDirectoryExists() {
        await n.mkdir(this.stagingDir, { recursive: true }), await n.mkdir(this.artifactsDir, { recursive: true });
      }
      buildSessionDir(e2) {
        const t2 = this.sanitizeToolCallId(e2), r2 = `session-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}-${t2}`;
        return s.join(this.stagingDir, r2);
      }
      validateAndNormalizeSaveAsFilename(e2) {
        let t2 = e2.trim();
        return t2.startsWith(this.artifactsDir) && (t2 = t2.slice(this.artifactsDir.length), t2.startsWith("/") && (t2 = t2.slice(1))), t2 = t2.trim(), 0 === t2.length ? { success: false, reason: Pl.y.UNSPECIFIED } : t2.includes("/") || t2.includes("\\") ? { success: false, reason: Pl.y.SLASHES_NOT_ALLOWED } : (t2 = t2.replace(/[^a-zA-Z0-9 ._-]/g, "_"), t2 = t2.trim(), 0 === t2.length ? { success: false, reason: Pl.y.UNSPECIFIED } : (t2.length > 128 && (t2 = t2.slice(0, 128).trim()), t2.toLowerCase().endsWith(".mp4") || (t2 = `${t2}.mp4`), { success: true, filename: t2 }));
      }
      async movePolishedVideo(e2, t2) {
        try {
          return void await n.rename(e2, t2);
        } catch (e3) {
          if (!Dl(e3, "EXDEV")) throw e3;
        }
        try {
          await n.copyFile(e2, t2);
        } catch (e3) {
          throw await n.rm(t2, { force: true }).catch(() => {
          }), e3;
        }
        try {
          await n.unlink(e2);
        } catch (e3) {
          throw await n.rm(t2, { force: true }).catch(() => {
          }), e3;
        }
      }
      async getUniqueArtifactVideoPath(e2) {
        const t2 = s.parse(e2), r2 = t2.name || "recording", o2 = t2.ext || ".mp4";
        let i2 = `${r2}${o2}`, a2 = 2;
        for (; ; ) {
          const e3 = s.join(this.artifactsDir, i2);
          try {
            const t3 = await n.open(e3, "wx");
            return await t3.close(), e3;
          } catch (e4) {
            if (!Dl(e4, "EEXIST")) throw e4;
            i2 = `${r2}-${a2}${o2}`, a2++;
          }
        }
      }
      async resolveArtifactVideoPath(e2) {
        const { saveAsFilename: t2, stagingSessionDir: r2 } = e2;
        let n2, o2;
        if (t2) {
          const e3 = this.validateAndNormalizeSaveAsFilename(t2);
          e3.success ? o2 = e3.filename : (n2 = e3.reason, o2 = `${s.basename(r2)}.mp4`);
        } else o2 = `${s.basename(r2)}.mp4`;
        return { finalVideoPath: await this.getUniqueArtifactVideoPath(o2), requestedFilePathRejectedReason: n2 };
      }
      async getVideoDurationMs(e2) {
        const { stdout: t2 } = await (0, pn.D9)(Fl, "ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", e2], { encoding: "utf8" }), r2 = parseFloat(t2.trim());
        if (!Number.isFinite(r2) || r2 < 0) throw new Error(`Invalid video duration from ffprobe: ${t2.trim()}`);
        return Math.floor(1e3 * r2);
      }
      async getVideoDimensions(e2) {
        const { stdout: t2 } = await (0, pn.D9)(Fl, "ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0:s=x", e2], { encoding: "utf8" }), [r2, n2] = t2.trim().split("x"), s2 = Number.parseInt(r2, 10), o2 = Number.parseInt(n2, 10);
        if (!Number.isFinite(s2) || !Number.isFinite(o2)) throw new Error(`Invalid video dimensions from ffprobe: ${t2.trim()}`);
        if (s2 <= 0 || o2 <= 0) throw new Error(`Invalid non-positive video dimensions from ffprobe: ${t2.trim()}`);
        return { width: s2, height: o2 };
      }
      async renderPolished(e2) {
        const t2 = s.join(e2, "recording"), r2 = s.join(t2, "recording_full.mp4");
        return await this.polishedRenderer.renderRecordingSession({ stagingSessionDir: e2, outputVideoPath: r2, fps: Ul.PROXY_TARGET_FPS, includeBrandTag: true }), await n.access(r2, n.constants.R_OK), r2;
      }
      async getVideoFramerate(e2) {
        try {
          const { stdout: t2 } = await (0, pn.D9)(Fl, "ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=r_frame_rate", "-of", "default=noprint_wrappers=1:nokey=1", e2], { encoding: "utf8" }), r2 = t2.trim();
          if (r2.includes("/")) {
            const [e3, t3] = r2.split("/"), n2 = Number.parseFloat(e3), s2 = Number.parseFloat(t3);
            if (Number.isFinite(n2) && Number.isFinite(s2) && 0 !== s2) {
              const e4 = n2 / s2;
              if (e4 > 0 && e4 < 500) return Math.round(e4);
            }
          } else {
            const e3 = Number.parseFloat(r2);
            if (Number.isFinite(e3) && e3 > 0 && e3 < 500) return Math.round(e3);
          }
          console.warn(`[record-screen] Unexpected ffprobe r_frame_rate output "${r2}", defaulting to ${Ul.PROXY_TARGET_FPS}fps`);
        } catch (e3) {
          console.warn(`[record-screen] Failed to read video framerate: ${e3 instanceof Error ? e3.message : String(e3)}, defaulting to ${Ul.PROXY_TARGET_FPS}fps`);
        }
        return Ul.PROXY_TARGET_FPS;
      }
      async startFfmpegRecording(e2, t2) {
        const r2 = s.join(t2, "recording");
        await n.mkdir(r2, { recursive: true });
        const o2 = s.join(r2, "recording_render_proxy_1080p.mp4");
        let i2;
        try {
          i2 = (await yn(this.display)).display.refreshRate;
        } catch (e3) {
          console.warn(`[record-screen] Failed to detect refresh rate: ${e3 instanceof Error ? e3.message : String(e3)}, using default ${Ul.DEFAULT_REFRESH_RATE}Hz`), i2 = Ul.DEFAULT_REFRESH_RATE;
        }
        const a2 = ["-video_size", e2, "-framerate", String(i2), "-draw_mouse", "0", "-f", "x11grab", "-i", this.display, "-vf", `scale=${Ul.PROXY_TARGET_WIDTH}:-2:flags=lanczos,fps=${Ul.PROXY_TARGET_FPS}`, "-c:v", "libx264", "-preset", Ul.PROXY_PRESET, "-crf", String(Ul.PROXY_CRF), "-pix_fmt", "yuv420p", "-profile:v", "high", "-x264-params", "keyint=1:min-keyint=1:scenecut=0:bframes=0", "-movflags", "+faststart", "-tune", "fastdecode", "-y", o2], c2 = (0, pn.D9)(dn.spawn, "ffmpeg", a2, { stdio: ["ignore", "pipe", "pipe"], detached: true }), l2 = new Promise((e3, t3) => {
          let r3 = "", n2 = false;
          c2.stderr?.on("data", (t4) => {
            r3 += t4.toString(), !n2 && r3.includes("frame=") && (n2 = true, e3(Date.now()));
          });
          const s2 = setTimeout(() => {
            n2 || t3(new Error("ffmpeg did not start encoding within 5 seconds"));
          }, 5e3);
          c2.once("exit", (e4, r4) => {
            clearTimeout(s2), n2 || t3(new Error(`ffmpeg exited before starting: code=${e4} signal=${r4}`));
          }), c2.once("error", (e4) => {
            clearTimeout(s2), n2 || t3(new Error(`ffmpeg failed to start: ${e4.message}`));
          });
        });
        return await new Promise((e3, t3) => {
          const r3 = setTimeout(e3, 300);
          c2.once("error", (e4) => {
            clearTimeout(r3), t3(new Error(`Failed to start ffmpeg: ${e4.message}`));
          }), c2.once("exit", (e4, n2) => {
            clearTimeout(r3), t3(null !== e4 && 0 !== e4 ? new Error(`ffmpeg exited with code ${e4}`) : null !== n2 ? new Error(`ffmpeg killed by signal ${n2}`) : new Error("ffmpeg exited unexpectedly during startup"));
          });
        }), { process: c2, videoStartedPromise: l2 };
      }
      async runFfmpegCommand(e2, t2) {
        return await new Promise((r2, n2) => {
          const s2 = (0, pn.D9)(dn.spawn, "ffmpeg", t2, { stdio: ["ignore", "ignore", "pipe"] });
          let o2 = "";
          s2.stderr?.on("data", (e3) => {
            o2.length < 2e4 && (o2 += e3.toString());
          }), s2.once("error", (t3) => {
            n2(new Error(`ffmpeg ${e2} failed to start: ${t3 instanceof Error ? t3.message : String(t3)}`));
          }), s2.once("close", (t3) => {
            0 === t3 ? r2() : n2(new Error(`ffmpeg ${e2} exited with code ${t3}: ${o2.trim()}`));
          });
        });
      }
      async saveRecordingDataPackage(e2) {
        const { sessionDir: t2, durationMs: r2, recordingStartEpochMs: o2, ffmpegStartedEpochMs: i2, inputEvents: a2, resolution: c2, renderProxies: l2 } = e2, u2 = s.join(t2, "recording"), d2 = s.join(u2, "recording-data.json"), p2 = i2 - o2, m2 = a2.map((e3) => ({ executionTimestampMs: e3.executionTimestampMs, commandDurationMs: e3.commandDurationMs, positionBefore: e3.positionBefore, positionAfter: e3.positionAfter, cursorTypeAfter: e3.cursorTypeAfter, action: { action: this.serializeAction(e3.action) } })), h2 = { version: 3, durationMs: r2, recordingStartEpochMs: o2, ffmpegStartedEpochMs: i2, eventToVideoOffsetMs: p2, displayWidth: c2.display.width, displayHeight: c2.display.height, apiWidth: c2.api.width, apiHeight: c2.api.height, inputEvents: m2, renderProxies: l2 ?? null };
        await n.writeFile(d2, JSON.stringify(h2, null, 2));
      }
      serializeAction(e2) {
        const { action: t2 } = e2, r2 = { case: t2.case };
        switch (t2.case) {
          case "click":
            r2.value = { coordinate: t2.value.coordinate ? { x: t2.value.coordinate.x, y: t2.value.coordinate.y } : null, button: t2.value.button, count: t2.value.count, modifierKeys: t2.value.modifierKeys };
            break;
          case "mouseMove":
            r2.value = { coordinate: t2.value.coordinate ? { x: t2.value.coordinate.x, y: t2.value.coordinate.y } : null };
            break;
          case "type":
            r2.value = { text: t2.value.text };
            break;
          case "key":
            r2.value = { key: t2.value.key, holdDurationMs: t2.value.holdDurationMs };
            break;
          case "scroll":
            r2.value = { coordinate: t2.value.coordinate ? { x: t2.value.coordinate.x, y: t2.value.coordinate.y } : null, direction: t2.value.direction, amount: t2.value.amount, modifierKeys: t2.value.modifierKeys };
            break;
          case "drag":
            r2.value = { path: t2.value.path.map((e3) => ({ x: e3.x, y: e3.y })), button: t2.value.button };
            break;
          case "wait":
            r2.value = { durationMs: t2.value.durationMs };
            break;
          case "screenshot":
          case "cursorPosition":
          case "mouseDown":
          case "mouseUp":
            r2.value = t2.value;
            break;
          default:
            r2.value = {};
        }
        return r2;
      }
      async stopFfmpegRecording(e2) {
        const { childProcess: t2 } = e2;
        if (ql(t2) || !t2.pid) return;
        const r2 = t2.pid;
        return new Promise((e3, n2) => {
          const s2 = setTimeout(() => {
            try {
              try {
                process.kill(-r2, "SIGKILL");
              } catch {
                process.kill(r2, "SIGKILL");
              }
            } catch {
            }
            n2(new Error("Timeout waiting for ffmpeg to stop"));
          }, 2e4);
          t2.once("exit", () => {
            clearTimeout(s2), e3();
          }), t2.once("error", (e4) => {
            clearTimeout(s2), n2(new Error(`Error stopping ffmpeg: ${e4.message}`));
          });
          try {
            try {
              process.kill(-r2, "SIGTERM");
            } catch {
              process.kill(r2, "SIGTERM");
            }
          } catch (t3) {
            if (clearTimeout(s2), Dl(t3, "ESRCH")) return void e3();
            n2(new Error(`Failed to send SIGTERM: ${t3 instanceof Error ? t3.message : String(t3)}`));
          }
        });
      }
      async performSave(e2, t2) {
        const r2 = Date.now();
        try {
          const o2 = await t2.inputEventLogger.stop(), i2 = t2.inputEventLogger.getRecordingStartTime();
          let a2;
          this.invokeStoppedCallbackIfCurrent(t2);
          try {
            !ql(t2.childProcess) && t2.childProcess.pid && await this.stopFfmpegRecording(t2);
          } catch (e3) {
            a2 = e3, console.warn(`[record-screen] Failed to stop ffmpeg: ${Ol(e3)}`);
          }
          const c2 = t2.ffmpegStartedEpochMs ?? i2, l2 = t2.sessionDir, u2 = s.join(l2, "recording"), d2 = s.join(u2, "recording_render_proxy_1080p.mp4");
          let p2, m2, h2;
          try {
            await n.access(d2, n.constants.R_OK);
          } catch (e3) {
            await this.cleanupRecording(t2), this.clearActiveRecordingIfCurrent(t2);
            const n2 = Dl(e3, "ENOENT") ? `Recording proxy not found at ${d2}` : `Recording proxy at ${d2} could not be validated: ${Ol(e3)}`;
            return new Pl.Tj({ result: { case: "failure", value: new Pl.yH({ error: Nl(n2, t2, a2, r2) }) } });
          }
          try {
            if ([p2, m2, h2] = await Promise.all([this.getVideoDurationMs(d2), this.getVideoDimensions(d2), this.getVideoFramerate(d2)]), p2 <= 0) throw new Error(`Recording proxy has zero duration at ${d2}`);
          } catch (e3) {
            await this.cleanupRecording(t2);
            const n2 = Ol(e3), s2 = n2.includes(d2) ? n2 : `Recording proxy at ${d2} could not be validated: ${n2}`;
            return new Pl.Tj({ result: { case: "failure", value: new Pl.yH({ error: Nl(s2, t2, a2, r2) }) } });
          }
          const f2 = { profileVersion: Ul.PROXY_PROFILE_VERSION, generatedAtEpochMs: Date.now(), source: { width: m2.width, height: m2.height, durationMs: p2, fps: h2 }, artifacts: [{ name: "render_proxy_1080p", path: "recording_render_proxy_1080p.mp4", width: m2.width, height: m2.height, fps: Ul.PROXY_TARGET_FPS, codec: "h264", profile: Ul.PROXY_PROFILE_VERSION, keyint: 1, status: "success", elapsedMs: 0 }] };
          await this.saveRecordingDataPackage({ sessionDir: l2, durationMs: p2, recordingStartEpochMs: i2, ffmpegStartedEpochMs: c2, inputEvents: o2, resolution: t2.resolution, renderProxies: f2 });
          const { finalVideoPath: g2, requestedFilePathRejectedReason: y2 } = await this.resolveArtifactVideoPath({ saveAsFilename: e2.saveAsFilename, stagingSessionDir: l2 });
          try {
            if (this.disablePolishedRendering) await n.copyFile(d2, g2);
            else {
              const e3 = await this.renderPolished(l2);
              await this.movePolishedVideo(e3, g2);
            }
          } catch (e3) {
            throw await n.rm(g2, { force: true }).catch(() => {
            }), e3;
          }
          try {
            await n.rm(l2, { force: true, recursive: true });
          } catch (e3) {
            console.warn(`[record-screen] Failed to remove staging session ${l2}: ${Ol(e3)}`);
          }
          return this.clearActiveRecordingIfCurrent(t2), new Pl.Tj({ result: { case: "saveSuccess", value: new Pl.ol({ path: g2, recordingDurationMs: Sn.protoInt64.parse(p2.toString()), requestedFilePathRejectedReason: y2 }) } });
        } catch (e3) {
          return await this.cleanupRecording(t2), this.invokeStoppedCallbackIfCurrent(t2), new Pl.Tj({ result: { case: "failure", value: new Pl.yH({ error: Ol(e3) }) } });
        }
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          Jl(r2, (0, x.VI)(e2.withName("LocalRecordScreenExecutor.execute")), false);
          try {
            await this.ensureRecordingDirectoryExists();
          } catch (e3) {
            return new Pl.Tj({ result: { case: "failure", value: new Pl.yH({ error: `Failed to create recording directory: ${e3 instanceof Error ? e3.message : String(e3)}. Ensure the parent directory exists and has write permissions, or run: sudo mkdir -p ${this.stagingDir} ${this.artifactsDir} && sudo chmod 777 ${this.stagingDir} ${this.artifactsDir}` }) } });
          }
          if (t2.mode === Pl.$u.UNSPECIFIED) return new Pl.Tj({ result: { case: "failure", value: new Pl.yH({ error: "Mode must be one of START_RECORDING, SAVE_RECORDING, DISCARD_RECORDING" }) } });
          switch (t2.mode) {
            case Pl.$u.START_RECORDING: {
              this.recordingStoppedCallbackInvoked = false;
              let e3 = false;
              if (this.activeRecording) {
                const t3 = this.activeRecording;
                if (!this.inFlightSaves.some((e4) => e4.state === t3)) {
                  e3 = true;
                  try {
                    await this.cleanupRecording(t3), await n.rm(t3.sessionDir, { force: true, recursive: true }).catch(() => {
                    });
                  } catch {
                  }
                }
                this.activeRecording = null;
              }
              let r3 = null, s2 = null, o2 = null;
              try {
                o2 = this.buildSessionDir(t2.toolCallId || "recording"), await n.mkdir(o2, { recursive: true });
                const { resolutionString: i2, resolution: a2 } = await yn(this.display), { process: c2, videoStartedPromise: l2 } = await this.startFfmpegRecording(i2, o2);
                r3 = c2;
                const u2 = (function(e4) {
                  const t3 = e4.lastIndexOf(":");
                  if (-1 === t3) throw new Error(`Invalid X11 display string: ${e4} (missing ':')`);
                  const r4 = e4.slice(t3 + 1).split(".")[0], n2 = parseInt(r4, 10);
                  if (!Number.isFinite(n2) || n2 < 0) throw new Error(`Invalid X11 display number in: ${e4} (parsed: ${r4})`);
                  return n2;
                })(this.display);
                s2 = new xn({ displayNum: u2, resolution: a2 }), await s2.start();
                const d2 = s2.getRecordingStartTime();
                let p2;
                try {
                  p2 = await l2;
                } catch (e4) {
                  throw new Error(`ffmpeg failed to start encoding: ${e4 instanceof Error ? e4.message : String(e4)}`);
                }
                const m2 = { childProcess: r3, sessionDir: o2, startTime: d2, inputEventLogger: s2, resolution: a2, ffmpegStartedEpochMs: p2, ffmpegDiedEarly: false, ffmpegDiedTime: null, ffmpegExitCode: null, ffmpegExitSignal: null };
                this.activeRecording = m2, this.onRecordingStartedCallback && this.onRecordingStartedCallback(s2), r3.once("exit", (e4, t3) => {
                  m2.ffmpegDiedEarly = true, m2.ffmpegDiedTime = Date.now(), m2.ffmpegExitCode = e4, m2.ffmpegExitSignal = t3;
                });
                const h2 = !!t2.saveAsFilename;
                return new Pl.Tj({ result: { case: "startSuccess", value: new Pl.T4({ wasPriorRecordingCancelled: e3, wasSaveAsFilenameIgnored: h2 }) } });
              } catch (e4) {
                if (s2) try {
                  await s2.stop();
                } catch {
                }
                if (r3 && !r3.killed && r3.pid) try {
                  process.kill(r3.pid, "SIGKILL");
                } catch {
                }
                return o2 && await n.rm(o2, { force: true, recursive: true }).catch(() => {
                }), this.activeRecording = null, new Pl.Tj({ result: { case: "failure", value: new Pl.yH({ error: e4 instanceof Error ? e4.message : String(e4) }) } });
              }
            }
            case Pl.$u.SAVE_RECORDING: {
              if (!this.activeRecording) return 1 === this.inFlightSaves.length ? await this.inFlightSaves[0].promise : new Pl.Tj({ result: { case: "failure", value: new Pl.yH({ error: "No active recording to save" }) } });
              const e3 = this.activeRecording, r3 = this.findInFlightSave(e3);
              if (r3) return await r3.promise;
              const n2 = Promise.resolve().then(() => this.performSave(t2, e3)), s2 = { state: e3, promise: n2 };
              this.inFlightSaves.push(s2);
              try {
                return await n2;
              } finally {
                this.inFlightSaves = this.inFlightSaves.filter((e4) => e4 !== s2);
              }
            }
            case Pl.$u.DISCARD_RECORDING: {
              if (!this.activeRecording) return new Pl.Tj({ result: { case: "failure", value: new Pl.yH({ error: "No active recording to discard" }) } });
              const e3 = this.activeRecording;
              if (this.findInFlightSave(e3)) return new Pl.Tj({ result: { case: "failure", value: new Pl.yH({ error: "Save in progress for this recording; wait for it or start a new recording" }) } });
              try {
                return await e3.inputEventLogger.stop(), this.invokeStoppedCallbackOnce(), !ql(e3.childProcess) && e3.childProcess.pid && await this.stopFfmpegRecording(e3), await n.rm(e3.sessionDir, { force: true, recursive: true }), this.activeRecording = null, new Pl.Tj({ result: { case: "discardSuccess", value: new Pl.N8() } });
              } catch (t3) {
                await this.cleanupRecording(e3), this.invokeStoppedCallbackOnce();
                const r3 = e3.sessionDir;
                let s2 = false;
                try {
                  await n.rm(r3, { force: true, recursive: true }), s2 = true;
                } catch {
                }
                this.activeRecording = null;
                const o2 = t3 instanceof Error ? t3.message : String(t3), i2 = s2 ? "" : `. Session may remain at: ${r3}`;
                return new Pl.Tj({ result: { case: "failure", value: new Pl.yH({ error: `Failed to discard recording: ${o2}${i2}` }) } });
              }
            }
            default: {
              const e3 = t2.mode;
              return new Pl.Tj({ result: { case: "failure", value: new Pl.yH({ error: `Unhandled recording mode: ${e3}` }) } });
            }
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Ml(r2);
        }
      }
    }
    Ul.IN_FLIGHT_SAVE_DISPOSE_TIMEOUT_MS = 3e4, Ul.PROXY_TARGET_WIDTH = 1920, Ul.PROXY_TARGET_FPS = 60, Ul.PROXY_CRF = 17, Ul.PROXY_PRESET = "veryfast", Ul.PROXY_PROFILE_VERSION = "render-proxy-h264-all-i-v1", Ul.DEFAULT_REFRESH_RATE = 60;
    var Ll = r(89396);
    async function $l(e2) {
      const t2 = await (0, n.readdir)(e2, { withFileTypes: true }).catch(() => []), r2 = [];
      for (const n2 of t2) {
        const t3 = s.join(e2, n2.name), o2 = { name: n2.name, path: t3, isDirectory: n2.isDirectory() };
        n2.isDirectory() && (o2.children = await $l(t3)), r2.push(o2);
      }
      return r2.sort((e3, t3) => e3.isDirectory && !t3.isDirectory ? -1 : !e3.isDirectory && t3.isDirectory ? 1 : e3.name.localeCompare(t3.name));
    }
    function Ql(e2, t2 = "", r2 = true) {
      const n2 = [`${t2}${r2 ? "└── " : "├── "}${e2.isDirectory ? `${e2.name}/` : e2.name}`], s2 = e2.children;
      if (s2?.length) {
        const e3 = t2 + (r2 ? "    " : "│   ");
        s2.forEach((t3, r3) => {
          const o2 = r3 === s2.length - 1;
          n2.push(...Ql(t3, e3, o2));
        });
      }
      return n2;
    }
    async function jl(e2) {
      if (!await (0, n.access)(e2, n.constants.R_OK).then(() => true, () => false)) return "(No notes directory yet - will be created when you write your first note)";
      const t2 = await $l(e2);
      return 0 === t2.length ? "(Notes directory is empty)" : t2.flatMap((e3, r2) => Ql(e3, "", r2 === t2.length - 1)).join("\n");
    }
    async function Gl(e2, t2) {
      return jl(s.join(e2, "agent-notes", t2));
    }
    async function Hl(e2) {
      return jl(s.join(e2, "agent-notes", "shared"));
    }
    var zl = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Wl = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const Vl = (0, k.h)("local-exec:request-context");
    async function Kl(e2, t2, r2, n2) {
      const s2 = { stack: [], error: void 0, hasError: false };
      try {
        zl(s2, (0, x.VI)(e2.withName("LocalRequestContextExecutor.getGitStatusForRepoPath")), false);
        try {
          return (await t2.exec(e2, r2, ["--no-optional-locks", "status", "--short", "--branch"], { timeout: n2, caller: "getGitStatusForRepoPath" })).stdout;
        } catch {
          return;
        }
      } catch (e3) {
        s2.error = e3, s2.hasError = true;
      } finally {
        Wl(s2);
      }
    }
    async function Yl(e2, t2, r2, n2) {
      try {
        const s2 = (await t2.exec(e2, r2, ["rev-parse", "--abbrev-ref", "HEAD"], { timeout: n2, caller: "getGitBranchForRepoPath" })).stdout.trim();
        if ("HEAD" === s2 || 0 === s2.length) return;
        return s2;
      } catch {
        return;
      }
    }
    async function Zl(e2, t2, r2) {
      const [n2, s2] = await Promise.all([e2.getDefaultNetworkAllowlist(), e2.getNetworkAccessControls()]), o2 = [...s2.allowlist], i2 = `${t2}/.cursor/sandbox.json`, a2 = await (0, B.tv)(i2, t2);
      if (a2 && "insecure_none" !== a2.type && a2.networkPolicy?.allow && o2.push(...a2.networkPolicy.allow), r2) {
        const e3 = `${r2}/.cursor/sandbox.json`, t3 = await (0, B.tv)(e3, r2);
        t3 && "insecure_none" !== t3.type && t3.networkPolicy?.allow && o2.push(...t3.networkPolicy.allow);
      }
      const c2 = [...new Set(o2)];
      return { hasDefaults: n2.available && n2.allowlist.length > 0, explicitEntries: c2 };
    }
    async function Xl(e2, t2) {
      const r2 = [], n2 = `${e2}/.cursor/sandbox.json`, s2 = await (0, B.tv)(n2, e2);
      if (s2 && "insecure_none" !== s2.type && s2.networkPolicy?.allow && r2.push(...s2.networkPolicy.allow), t2) {
        const e3 = `${t2}/.cursor/sandbox.json`, n3 = await (0, B.tv)(e3, t2);
        n3 && "insecure_none" !== n3.type && n3.networkPolicy?.allow && r2.push(...n3.networkPolicy.allow);
      }
      return [...new Set(r2)];
    }
    async function eu(e2, t2, r2 = {}) {
      const { projectDir: n2, notesSessionId: s2, metaAgentNotesEnabled: o2, getSmartModeClassifierAutoModeEnabled: i2, devForceNextSmartModeClassifierBlockToken: a2, isWorkingDirHomeDir: c2, getSandboxEnabled: l2, getSandboxSupported: u2, getNetworkAllowlistInfo: d2, userTerminalHint: p2, artifactsFolder: m2, secretRedactionEnabled: h2, getComputerUseSupported: f2, getMockPromptTime: g2 } = r2, y2 = `${ge.platform()} ${ge.release()}`, w2 = (0, B.G6)(p2), v2 = g2?.(), _2 = (() => {
        try {
          return new Intl.DateTimeFormat().resolvedOptions().timeZone ?? void 0;
        } catch {
          return;
        }
      })(), A2 = n2, S2 = n2 ? `${n2}/terminals` : void 0, b2 = n2 && true !== o2 ? `${n2}/agent-notes/shared` : void 0, E2 = n2 && s2 ? `${n2}/agent-notes/${s2}` : void 0, I2 = n2 ? `${n2}/agent-transcripts` : void 0, C2 = !!l2 && l2(), k2 = u2?.(), x2 = i2?.();
      let T2;
      if (d2) try {
        T2 = await d2();
      } catch {
        T2 = void 0;
      }
      return new Ll.GE({ osVersion: y2, workspacePaths: t2, shell: w2, sandboxEnabled: C2, projectFolder: A2, terminalsFolder: S2, agentSharedNotesFolder: b2, agentConversationNotesFolder: E2, agentTranscriptsFolder: I2, timeZone: _2, processWorkingDirectory: process.cwd(), artifactsFolder: m2, ...void 0 !== x2 && { smartModeClassifierAutoModeEnabled: x2 }, ...void 0 !== a2 && { devForceNextSmartModeClassifierBlockToken: a2 }, ...void 0 !== v2 && { devMockPromptTime: Sn.Timestamp.fromDate(v2) }, ...void 0 !== h2 && { secretRedactionEnabled: h2 }, ...void 0 !== k2 && { sandboxSupported: k2 }, ...void 0 !== T2?.hasDefaults && { sandboxNetworkHasDefaults: T2.hasDefaults }, ...T2?.explicitEntries && T2.explicitEntries.length > 0 && { sandboxNetworkExplicitAllowlist: T2.explicitEntries }, ...void 0 !== f2 && { computerUseSupported: f2() }, ...void 0 !== c2 && { isWorkingDirHomeDir: c2 } });
    }
    const tu = { type: "object", properties: {}, additionalProperties: false };
    function ru(e2, t2) {
      return { tools: (true === t2?.internalBrowserProvidersOnly ? e2.servers.filter((e3) => m.rFE.has(e3.serverIdentifier)) : e2.servers).flatMap((e3) => e3.tools).map((e3) => new _s.gd({ name: e3.name, providerIdentifier: e3.providerIdentifier, toolName: e3.toolName, description: e3.description, ...true === t2?.inputSchemaJson ? { inputSchemaJson: void 0 === e3.inputSchema ? void 0 : JSON.stringify(e3.inputSchema) } : { inputSchema: e3.inputSchema ? Sn.Value.fromJson(e3.inputSchema) : void 0 } })), mcpInstructions: e2.servers.flatMap((e3) => e3.instructions) };
    }
    function nu(e2, t2) {
      const r2 = true === t2?.slimDescriptors, n2 = e2.servers.map((e3) => {
        const n3 = e3.instructions.map((e4) => e4.instructions).filter(Boolean).join("\n"), s2 = e3.tools.map((e4) => new _s.E$({ toolName: e4.toolName, ...(0, Gs.hT)(e4.annotations), ...r2 ? {} : { description: e4.description, ...true === t2?.inputSchemaJson ? { inputSchemaJson: void 0 === e4.inputSchema ? void 0 : JSON.stringify(e4.inputSchema) } : { inputSchema: void 0 !== e4.inputSchema ? Sn.Value.fromJson(e4.inputSchema) : void 0 } } }));
        return !(0, m.N1y)(e3.serverIdentifier) || true !== t2?.alwaysExposeVirtualMcpAuthTool && "needsAuth" !== e3.status || s2.some((e4) => e4.toolName === co) || s2.push(new _s.E$({ toolName: co, ...r2 ? {} : { description: lo, ...true === t2?.inputSchemaJson ? { inputSchemaJson: JSON.stringify(tu) } : { inputSchema: Sn.Value.fromJson(tu) } } })), new _s.UC({ serverIdentifier: e3.serverIdentifier, serverName: e3.serverName, plugin: e3.plugin, marketplace: e3.marketplace, pluginDbId: e3.pluginId, marketplaceId: e3.marketplaceId, serverUseInstructions: n3 || void 0, tools: s2 });
      });
      return new _s.U_({ enabled: true, mcpDescriptors: n2 });
    }
    function su(e2) {
      const t2 = e2?.trim();
      return t2 || void 0;
    }
    function ou(e2, t2) {
      const r2 = (function(e3) {
        return su(e3.serverIdentifier);
      })(e2);
      if (r2) return r2;
      const n2 = su(e2.serverName);
      return n2 ? t2.get(n2) ?? n2 : void 0;
    }
    function iu(e2, t2, r2) {
      const n2 = /* @__PURE__ */ new Map();
      for (const t3 of e2) n2.has(t3.providerIdentifier) || n2.set(t3.providerIdentifier, t3.clientKey);
      const s2 = t2.map((e3) => ou(e3, n2)).filter((e3) => Boolean(e3));
      return { servers: [.../* @__PURE__ */ new Set([...e2.map((e3) => e3.clientKey), ...s2, ...Array.from(r2?.entries() ?? []).filter(([, e3]) => "connected" !== e3.status).map(([e3]) => e3)])].map((s3) => {
        const o2 = e2.filter((e3) => e3.clientKey === s3);
        return { serverName: o2[0]?.providerIdentifier ?? s3, serverIdentifier: s3, plugin: o2[0]?.plugin, marketplace: o2[0]?.marketplace, tools: o2, instructions: t2.filter((e3) => ou(e3, n2) === s3), status: r2?.get(s3)?.status, errorMessage: r2?.get(s3)?.errorMessage };
      }) };
    }
    async function au(e2, t2) {
      const r2 = await t2.getClients(e2).catch((t3) => (Vl.warn(e2, "Error fetching MCP clients", { error: t3 }), {})), n2 = await Promise.all(Object.entries(r2).map(async ([t3, r3]) => {
        const n3 = await r3.getState(e2).catch(() => ({ kind: "error", message: "Failed to fetch MCP client state" }));
        return [t3, { status: (0, m.Lxn)(n3), errorMessage: "error" === n3.kind && void 0 !== n3.message ? n3.message : void 0 }];
      }));
      return new Map(n2);
    }
    class cu {
      constructor(e2) {
        this.mcpLease = e2;
      }
      async getState(e2) {
        const [t2, r2] = await Promise.all([this.mcpLease.getTools(e2).catch((t3) => (Vl.warn(e2, "Error fetching MCP tools", { error: t3 }), [])), this.mcpLease.getInstructions(e2).catch((t3) => (Vl.warn(e2, "Error fetching MCP instructions", { error: t3 }), []))]);
        return iu(t2, r2, await au(e2, this.mcpLease));
      }
    }
    class lu {
      constructor(e2) {
        this.mcpLease = e2, this.pendingRefreshRequested = false, this.nextRefreshId = 0, this.disposed = false, this.listeners = /* @__PURE__ */ new Set();
        const t2 = this.mcpLease.onDidChange((e3) => {
          this.onLeaseChanged(e3);
        });
        this.disposeSubscription = () => t2.dispose(), this.onLeaseChanged(void 0);
      }
      startRefresh(e2) {
        const t2 = { id: ++this.nextRefreshId, promise: this.computeState(e2) };
        return this.currentRefresh = t2, t2.promise.then((e3) => {
          this.disposed || this.currentRefresh?.id !== t2.id || (this.cachedState = e3, this.currentRefresh = void 0, this.emitChange(), this.pendingRefreshRequested && (this.pendingRefreshRequested = false, this.startRefresh((0, ye.q6)())));
        }, (e3) => {
          this.currentRefresh?.id === t2.id && (this.currentRefresh = void 0, !this.disposed && this.pendingRefreshRequested && (this.pendingRefreshRequested = false, this.startRefresh((0, ye.q6)())));
        }), t2.promise;
      }
      onDidChange(e2) {
        return this.listeners.add(e2), { dispose: () => {
          this.listeners.delete(e2);
        } };
      }
      emitChange() {
        for (const e2 of this.listeners) try {
          e2();
        } catch (e3) {
          console.error("Error in MCP state change listener:", e3);
        }
      }
      onLeaseChanged(e2) {
        const t2 = (0, ye.q6)();
        void 0 === this.currentRefresh ? this.startRefresh(t2) : this.pendingRefreshRequested = true;
      }
      async awaitRefreshResultBounded(e2) {
        try {
          return await Promise.race([e2, new Promise((e3) => setTimeout(() => e3(void 0), 150))]);
        } catch {
          return;
        }
      }
      async refreshNow(e2) {
        const t2 = this.demandRefresh;
        if (void 0 !== t2) {
          try {
            await t2;
          } catch {
          }
          return;
        }
        const r2 = this.runDemandRefresh(e2);
        this.demandRefresh = r2;
        try {
          await r2;
        } finally {
          this.demandRefresh === r2 && (this.demandRefresh = void 0);
        }
      }
      async runDemandRefresh(e2) {
        const t2 = this.currentRefresh;
        if (void 0 !== t2) try {
          await t2.promise;
        } catch {
        }
        if (this.disposed) return;
        const r2 = this.currentRefresh;
        if (void 0 === r2 || r2.id === t2?.id) {
          this.pendingRefreshRequested = false;
          try {
            await this.startRefresh(e2);
          } catch {
          }
        } else try {
          await r2.promise;
        } catch {
        }
      }
      async getState(e2) {
        if (this.disposed) throw new Error("ObservableMcpStateAccessor has been disposed");
        if (void 0 !== this.cachedState) return this.cachedState;
        const t2 = this.currentRefresh;
        if (t2) {
          const e3 = await this.awaitRefreshResultBounded(t2.promise);
          if (void 0 !== e3) return e3;
          if (void 0 !== this.cachedState) return this.cachedState;
          if (this.currentRefresh?.id === t2.id) return { servers: [] };
        }
        const r2 = this.startRefresh(e2), n2 = await this.awaitRefreshResultBounded(r2);
        return void 0 !== n2 ? n2 : void 0 !== this.cachedState ? this.cachedState : { servers: [] };
      }
      async computeState(e2) {
        const [t2, r2] = await Promise.all([this.mcpLease.getTools(e2).catch((e3) => (console.error("Error fetching MCP tools:", e3), [])), this.mcpLease.getInstructions(e2).catch((e3) => (console.error("Error fetching MCP instructions:", e3), []))]);
        return iu(t2, r2, await au(e2, this.mcpLease));
      }
      dispose() {
        this.disposed || (this.disposed = true, this.disposeSubscription(), this.listeners.clear(), this.cachedState = void 0, this.currentRefresh = void 0);
      }
    }
    function uu(e2) {
      return new $s._W({ result: { case: "success", value: new $s.pv({ servers: e2.servers.map((e3) => new $s.XE({ serverName: e3.serverName, serverIdentifier: e3.serverIdentifier, plugin: e3.plugin, marketplace: e3.marketplace, tools: e3.tools.map((e4) => new _s.gd({ name: e4.name, providerIdentifier: e4.providerIdentifier, toolName: e4.toolName, description: e4.description, inputSchema: e4.inputSchema ? Sn.Value.fromJson(e4.inputSchema) : void 0, metaJson: (0, m.Qw5)(e4._meta), ...(0, Gs.hT)(e4.annotations) })), instructions: e3.instructions, status: e3.status, errorMessage: e3.errorMessage })) }) } });
    }
    class du {
      constructor(e2, t2, r2) {
        this.mcpStateAccessor = e2, this.ensureMcpServersLoaded = t2, this.options = r2;
      }
      async execute(e2, t2) {
        try {
          await this.ensureMcpServersLoaded?.(e2, t2.serverIdentifiers, { wait: !t2.kickOnly });
        } catch {
        }
        t2.refreshPolicy !== $s.ew.FORCE_IF_MISSING && t2.refreshPolicy !== $s.ew.FORCE || await this.mcpStateAccessor.refreshNow?.(e2);
        const r2 = await this.mcpStateAccessor.getState(e2);
        if (true === this.options?.filterToRequestedServers && t2.serverIdentifiers.length > 0) {
          const e3 = new Set(t2.serverIdentifiers), n2 = r2.servers.filter((t3) => e3.has(t3.serverIdentifier));
          if (n2.length > 0) return uu({ ...r2, servers: n2 });
        }
        return uu(r2);
      }
    }
    class pu {
      constructor(e2, t2, r2, n2, s2, o2, i2, a2, c2 = {}) {
        this.cursorRulesService = e2, this.cloudRulesService = t2, this.subagentsService = r2, this.repositoryProvider = n2, this.grepProvider = s2, this.mcpStateAccessor = o2, this.gitExecutor = i2, this.workspacePaths = a2, this.cachedWorkspaces = /* @__PURE__ */ new Map(), this.inFlightWorkspaceWarms = /* @__PURE__ */ new Map();
        const { projectDir: l2, getSmartModeClassifierAutoModeEnabled: u2, getAdminCommandDenylist: d2, devForceNextSmartModeClassifierBlockToken: p2, isWorkingDirHomeDir: m2, createFileWatcher: h2, getSandboxEnabled: f2, getSandboxSupported: g2, getNetworkAllowlistInfo: y2, userTerminalHint: w2, getMcpFileSystemOptions: v2, mcpMetaToolEnabled: _2, mcpMetaToolSlimDescriptors: A2, mcpInputSchemaJson: S2, alwaysExposeVirtualMcpAuthTool: b2, getArtifactsFolder: E2, secretRedactionEnabled: I2, attributionConfigProvider: C2, isAttributionDisabledByAdmin: k2, getAgentSkills: x2, additionalRules: T2, getComputerUseSupported: R2, getMockPromptTime: B2 } = c2;
        this.projectDir = l2, this.isWorkingDirHomeDir = m2, this.getSandboxEnabled = f2, this.getSandboxSupported = g2, this.getNetworkAllowlistInfo = y2, this.getSmartModeClassifierAutoModeEnabled = u2, this.getAdminCommandDenylist = d2, this.devForceNextSmartModeClassifierBlockToken = p2, this.getMockPromptTime = B2, this.userTerminalHint = w2, this.getMcpFileSystemOptions = v2, this.mcpMetaToolEnabled = _2 ?? false, this.mcpMetaToolSlimDescriptors = A2 ?? false, this.mcpInputSchemaJson = S2 ?? false, this.alwaysExposeVirtualMcpAuthTool = b2 ?? false, this.getArtifactsFolder = E2, this.secretRedactionEnabled = I2, this.attributionConfigProvider = C2, this.isAttributionDisabledByAdmin = k2, this.getAgentSkills = x2, this.additionalRules = T2 ?? [], this.getComputerUseSupported = R2, this.reduceContextHotPath = c2.reduceContextHotPath ?? false, this.warmWorkspaceCaches(), this.rebuildGlobalCache(), void 0 !== h2 && (this.fileWatcher = h2(), this.fileWatcher.onDidChange((e3) => {
          this.onWorkspacePathChanged(e3);
        }), this.fileWatcher.onDidCreate((e3) => {
          this.onWorkspacePathChanged(e3);
        }), this.fileWatcher.onDidDelete((e3) => {
          this.onWorkspacePathChanged(e3);
        }));
      }
      onWorkspacePathChanged(e2) {
        this.rebuildAllCaches();
      }
      getWorkspaceCache(e2) {
        return this.cachedWorkspaces.get(e2);
      }
      warmWorkspaceCaches() {
        const e2 = (0, ye.q6)();
        Promise.all(this.workspacePaths.map((t2) => this.ensureWorkspaceCacheWarm(e2, t2)));
      }
      ensureWorkspaceCacheWarm(e2, t2) {
        if (this.cachedWorkspaces.has(t2)) return Promise.resolve();
        const r2 = this.inFlightWorkspaceWarms.get(t2);
        if (void 0 !== r2) return r2;
        const n2 = this.warmWorkspaceCache(e2, t2).finally(() => {
          this.inFlightWorkspaceWarms.delete(t2);
        });
        return this.inFlightWorkspaceWarms.set(t2, n2), n2;
      }
      async warmWorkspaceCache(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = zl(r2, (0, x.VI)(e2.withName("LocalRequestContextExecutor.warmWorkspaceCache")), false), s2 = await (async function(e3, t3, r3) {
            try {
              return (await t3.exec(e3, r3, ["rev-parse", "--show-toplevel"], { caller: "getGitRepoPathForWorkspacePath" })).stdout.trim();
            } catch {
              return null;
            }
          })(n2.ctx, this.gitExecutor, t2), o2 = s2 ? await Ue(n2.ctx, this.gitExecutor, s2) : void 0, i2 = { repoPath: s2 ?? void 0, remoteUrl: void 0 !== o2 ? Le(o2) : void 0 };
          this.cachedWorkspaces.set(t2, i2);
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Wl(r2);
        }
      }
      rebuildAllCaches() {
        this.cacheDebounceTimeout && clearTimeout(this.cacheDebounceTimeout), this.cacheDebounceTimeout = setTimeout(() => {
          this.cacheDebounceTimeout = void 0, this.rebuildGlobalCache();
        }, 5e3);
      }
      invalidateGlobalCache() {
        this.globalCache = void 0, this.lastGoodGlobalCache = void 0, this.globalCacheTraceId = void 0;
      }
      rebuildGlobalCache() {
        const e2 = { stack: [], error: void 0, hasError: false };
        try {
          const t2 = (0, ye.q6)(), r2 = zl(e2, (0, x.VI)(t2.withName("LocalRequestContextExecutor.rebuildGlobalCache")), false);
          this.globalCacheTraceId = r2.span.spanContext().traceId;
          const n2 = this.computeGlobalCache(r2.ctx);
          return this.globalCache = n2, this.reduceContextHotPath && n2.then((e3) => {
            this.globalCache === n2 && (this.lastGoodGlobalCache = e3);
          }, () => {
            this.globalCache === n2 && (this.globalCache = void 0);
          }), n2;
        } catch (t2) {
          e2.error = t2, e2.hasError = true;
        } finally {
          Wl(e2);
        }
      }
      async computeGlobalCache(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          const r2 = zl(t2, (0, x.VI)(e2.withName("LocalRequestContextExecutor.computeGlobalCache")), false), n2 = AbortSignal.timeout(1e3), s2 = performance.now(), o2 = {}, i2 = (e3, t3) => {
            const r3 = performance.now();
            return t3.finally(() => {
              o2[e3] = Math.round(performance.now() - r3);
            });
          }, [a2, c2, l2, u2] = await Promise.all([i2("cursorRules", this.cursorRulesService.getAllCursorRules(r2.ctx)), i2("cloudRule", this.cloudRulesService ? this.cloudRulesService.getCloudRule(r2.ctx) : Promise.resolve(null)), i2("codebaseRef", this.repositoryProvider.getCodebaseReference(r2.ctx, n2).catch(() => {
          })), i2("subagents", this.subagentsService ? this.subagentsService.getAllSubagents().catch(() => []) : Promise.resolve([]))]), d2 = Math.round(performance.now() - s2);
          d2 > 1e3 && Vl.warn(r2.ctx, "computeGlobalCache: slow", { totalMs: d2, ...o2, ruleCount: a2.length });
          return { rules: [...this.additionalRules, ...a2], cloudRule: c2, codebaseReference: l2, customSubagents: u2 };
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          Wl(t2);
        }
      }
      dispose() {
        this.cacheDebounceTimeout && (clearTimeout(this.cacheDebounceTimeout), this.cacheDebounceTimeout = void 0), this.fileWatcher && (this.fileWatcher.dispose(), this.fileWatcher = void 0), this.globalCache = void 0, this.lastGoodGlobalCache = void 0;
      }
      async collectWorkspaceCaches(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = zl(r2, (0, x.VI)(e2.withName("LocalRequestContextExecutor.collectWorkspaceCaches")), false);
          let s2;
          if (this.grepProvider.getTrackedState) try {
            s2 = await this.grepProvider.getTrackedState(this.workspacePaths);
          } catch {
            s2 = void 0;
          }
          let o2 = true;
          const i2 = (await Promise.all(this.workspacePaths.map(async (e3) => {
            let r3 = this.getWorkspaceCache(e3);
            if (void 0 === r3) {
              if (!t2.waitForWorkspaceCache) return o2 = false, void this.ensureWorkspaceCacheWarm(n2.ctx, e3);
              if (await this.ensureWorkspaceCacheWarm(n2.ctx, e3), r3 = this.getWorkspaceCache(e3), void 0 === r3) return void (o2 = false);
            }
            const i3 = s2?.[e3];
            if (void 0 !== i3) return new Ll.DS({ path: r3.repoPath, status: i3.gitStatus, branchName: i3.gitBranchName, remoteUrl: r3.remoteUrl, isOriginBacked: (0, Ne.a8)(r3.remoteUrl) });
            if (void 0 === r3.repoPath) return;
            const { status: a2, branchName: c2 } = await (async function(e4, t3, r4, n3) {
              const s3 = (e5) => {
                let t4;
                const r5 = new Promise((e6) => {
                  t4 = setTimeout(() => {
                    e6(void 0);
                  }, n3);
                });
                return Promise.race([e5.catch(() => {
                }), r5]).finally(() => {
                  void 0 !== t4 && clearTimeout(t4);
                });
              }, [o3, i4] = await Promise.all([s3(Kl(e4, t3, r4, n3)), s3(Yl(e4, t3, r4, n3))]);
              return { status: o3, branchName: i4 };
            })(n2.ctx, this.gitExecutor, r3.repoPath, 3e3);
            return new Ll.DS({ path: r3.repoPath, status: a2, branchName: c2, remoteUrl: r3.remoteUrl, isOriginBacked: (0, Ne.a8)(r3.remoteUrl) });
          }))).filter((e3) => void 0 !== e3);
          return { gitRepos: i2, gitRepoInfoComplete: o2 };
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Wl(r2);
        }
      }
      async computeCachedRequestContext(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = zl(r2, (0, x.VI)(e2.withName("LocalRequestContextExecutor.computeCachedRequestContext")), false), s2 = this.projectDir, o2 = async () => {
            const e3 = { stack: [], error: void 0, hasError: false };
            try {
              const t3 = zl(e3, (0, x.VI)(n2.ctx.withName("LocalRequestContextExecutor.computeCachedRequestContext.getGlobalData")), false);
              if (this.globalCacheTraceId && t3.span.setAttribute("cacheTraceId", this.globalCacheTraceId), !this.reduceContextHotPath) {
                if (void 0 === this.globalCache) {
                  const e4 = this.computeGlobalCache(n2.ctx);
                  this.globalCache = e4, e4.catch(() => {
                    this.globalCache === e4 && (this.globalCache = void 0);
                  });
                }
                return this.globalCache;
              }
              return void 0 !== this.lastGoodGlobalCache ? this.lastGoodGlobalCache : this.globalCache ?? this.rebuildGlobalCache();
            } catch (t3) {
              e3.error = t3, e3.hasError = true;
            } finally {
              Wl(e3);
            }
          }, i2 = performance.now(), a2 = {}, c2 = (e3, t3) => {
            const r3 = performance.now();
            return t3.finally(() => {
              a2[e3] = Math.round(performance.now() - r3);
            });
          }, [l2, u2, d2, { gitRepos: p2, gitRepoInfoComplete: m2 }, h2, f2, g2, y2, w2, v2] = await Promise.all([c2("globalCache", o2()), c2("mcpState", this.mcpStateAccessor.getState(n2.ctx)), c2("env", eu(n2.ctx, this.workspacePaths, { projectDir: s2, notesSessionId: t2.notesSessionId, metaAgentNotesEnabled: false, getSmartModeClassifierAutoModeEnabled: this.getSmartModeClassifierAutoModeEnabled, devForceNextSmartModeClassifierBlockToken: this.devForceNextSmartModeClassifierBlockToken, getMockPromptTime: this.getMockPromptTime, isWorkingDirHomeDir: this.isWorkingDirHomeDir, getSandboxEnabled: this.getSandboxEnabled, getSandboxSupported: this.getSandboxSupported, getNetworkAllowlistInfo: this.getNetworkAllowlistInfo, userTerminalHint: this.userTerminalHint, artifactsFolder: this.getArtifactsFolder?.(n2.ctx), secretRedactionEnabled: this.secretRedactionEnabled, getComputerUseSupported: this.getComputerUseSupported })), c2("git", this.collectWorkspaceCaches(n2.ctx, { waitForWorkspaceCache: true === t2.waitForWorkspaceCache })), c2("conversationNotes", s2 && t2.notesSessionId ? Gl(s2, t2.notesSessionId) : Promise.resolve(void 0)), c2("sharedNotes", s2 ? Hl(s2) : Promise.resolve(void 0)), c2("mcpFileSystemOptions", this.getMcpFileSystemOptions ? this.getMcpFileSystemOptions(n2.ctx, { timeoutMs: 3e3 }) : Promise.resolve(void 0)), c2("attribution", this.isAttributionDisabledByAdmin ? this.isAttributionDisabledByAdmin().catch(() => true) : Promise.resolve(false)), c2("agentSkills", this.getAgentSkills ? this.getAgentSkills(n2.ctx) : Promise.resolve([])), c2("adminCommandDenylist", this.getAdminCommandDenylist ? this.getAdminCommandDenylist() : Promise.resolve(void 0))]), _2 = performance.now() - i2;
          for (const [e3, t3] of Object.entries(a2)) n2.span.setAttribute(`requestContext.timing.${e3}Ms`, t3);
          n2.span.setAttribute("requestContext.timing.totalMs", Math.round(_2)), _2 > 1e3 && Vl.warn(n2.ctx, "computeCachedRequestContext: slow parallel data collection", { durationMs: Math.round(_2), ...a2 });
          const A2 = this.mcpMetaToolEnabled ? nu(u2, { alwaysExposeVirtualMcpAuthTool: this.alwaysExposeVirtualMcpAuthTool, slimDescriptors: this.mcpMetaToolSlimDescriptors, inputSchemaJson: this.mcpInputSchemaJson }) : void 0, S2 = this.attributionConfigProvider?.get(), b2 = !y2 && (S2?.attribution?.attributeCommitsToAgent ?? true), E2 = !y2 && (S2?.attribution?.attributePRsToAgent ?? true), I2 = new Ll.bb({ rules: l2.rules, env: d2, gitRepos: p2, gitRepoInfoComplete: m2, repositoryInfo: l2.codebaseReference ? [{ relativeWorkspacePath: l2.codebaseReference.relativeWorkspacePath, repoName: l2.codebaseReference.repoName, repoOwner: l2.codebaseReference.repoOwner, isTracked: l2.codebaseReference.isTracked, isLocal: l2.codebaseReference.isLocal, orthogonalTransformSeed: l2.codebaseReference.orthogonalTransformSeed, pathEncryptionKey: l2.codebaseReference.pathEncryptionKey }] : [], ...ru(u2, { internalBrowserProvidersOnly: this.mcpMetaToolEnabled && this.mcpMetaToolSlimDescriptors, inputSchemaJson: this.mcpInputSchemaJson }), conversationNotesListing: h2, sharedNotesListing: f2, customSubagents: l2.customSubagents, mcpFileSystemOptions: g2, mcpMetaToolOptions: A2, supportsMcpAuth: true, commitAttributionMessage: b2 ? "enabled" : void 0, prAttributionMessage: E2 ? "enabled" : void 0, agentSkills: w2, adminCommandDenylist: v2?.rules ?? [] });
          return null !== l2.cloudRule && void 0 !== l2.cloudRule && (I2.cloudRule = l2.cloudRule), I2;
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Wl(r2);
        }
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = zl(r2, (0, x.VI)(e2.withName("LocalRequestContextExecutor.execute")), false);
          n2.span.setAttribute("enableCaching", void 0 !== this.fileWatcher), n2.span.setAttribute("hasGlobalCache", !!this.globalCache);
          try {
            const e3 = await this.computeCachedRequestContext(n2.ctx, t2);
            return new Ll._G({ result: { case: "success", value: new Ll.yW({ requestContext: e3 }) } });
          } catch (e3) {
            return n2.span.recordException(e3), new Ll._G({ result: { case: "error", value: new Ll.nf({ error: e3 instanceof Error ? e3.message : String(e3) }) } });
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Wl(r2);
        }
      }
    }
    function mu(e2) {
      return 0 !== e2.timeout ? e2.timeout : e2.isBackground || e2.timeoutBehavior === R._d.BACKGROUND || void 0 !== e2.hardTimeout && e2.hardTimeout > 0 ? 0 : 3e4;
    }
    var hu = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, fu = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class gu {
      constructor(e2, t2, r2, n2) {
        this.permissionsService = e2, this.coreExecutor = t2, this.ignoreService = r2;
      }
      buildResultFromExit(e2) {
        return 0 === (e2.exitCode ?? -1) ? new R.W4({ result: { case: "success", value: new R.QR({ ...e2, stdout: e2.outputLocation ? "" : e2.stdout, stderr: e2.outputLocation ? "" : e2.stderr }) }, sandboxPolicy: ne(e2.sandboxPolicy) }) : new R.W4({ result: { case: "failure", value: new R.xC({ ...e2, aborted: void 0 !== e2.abortReason, stdout: e2.outputLocation ? "" : e2.stdout, stderr: e2.outputLocation ? "" : e2.stderr }) }, sandboxPolicy: ne(e2.sandboxPolicy) });
      }
      async executeWithPolicy(e2, t2, r2, n2, s2) {
        const o2 = Date.now(), i2 = new AbortController(), a2 = e2.signal ? AbortSignal.any([e2.signal, i2.signal]) : i2.signal, c2 = setTimeout(() => {
          i2.abort();
        }, n2);
        try {
          let n3, l2, u2, d2 = "", p2 = "", m2 = null;
          const h2 = s2 ? { perRepo: s2 } : void 0;
          for await (const s3 of this.coreExecutor.execute(e2, { command: t2.command, workingDirectory: r2, signal: a2, toolCallId: t2.toolCallId, conversationId: t2.conversationId, requestId: t2.requestId, secretScopeId: t2.secretScopeId, sandboxPolicy: h2, fileOutputThresholdBytes: t2.fileOutputThresholdBytes, pipeStdin: false })) "stdout" === s3.type ? d2 += s3.data : "stderr" === s3.type ? p2 += s3.data : "exit" === s3.type && (m2 = null != s3.code ? 0 | s3.code : null, l2 = s3.outputLocation, n3 = s3.aborted ? a2.aborted ? i2.signal.aborted && a2.reason === i2.signal.reason ? R.Lv.TIMEOUT : R.Lv.USER_ABORT : R.Lv.UNSPECIFIED : void 0, u2 = Rs(s3.localExecutionTimeMs));
          clearTimeout(c2);
          const f2 = Date.now() - o2, g2 = { command: t2.command, workingDirectory: r2, exitCode: void 0 !== n3 ? -1 : m2 ?? -1, signal: void 0 !== n3 ? "SIGTERM" : "", abortReason: n3, stdout: d2, stderr: p2, executionTime: f2, localExecutionTimeMs: u2, sandboxPolicy: s2, outputLocation: l2 };
          return this.buildResultFromExit(g2);
        } catch (o3) {
          return clearTimeout(c2), i2.signal.aborted && !e2.signal.aborted ? new R.W4({ result: { case: "timeout", value: new R.eG({ command: t2.command, workingDirectory: r2, timeoutMs: n2 }) }, sandboxPolicy: ne(s2) }) : e2.signal.aborted ? new R.W4({ result: { case: "rejected", value: new R.pZ({ command: t2.command, workingDirectory: r2, reason: "Command aborted" }) }, sandboxPolicy: ne(s2) }) : new R.W4({ result: { case: "spawnError", value: new R.mJ({ command: t2.command, workingDirectory: r2, error: o3 instanceof Error ? o3.message : "Unknown error" }) }, sandboxPolicy: ne(s2) });
        }
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = hu(r2, (0, x.VI)(e2.withName("LocalShellExecutor.execute")), false).ctx;
          (0, x.HF)(n2, "LocalShellExecutor.execute");
          const s2 = t2.command, o2 = t2.requestedSandboxPolicy ? re(t2.requestedSandboxPolicy) : void 0, i2 = t2.workingDirectory || await this.coreExecutor.getCwd(t2.conversationId), a2 = mu(t2), c2 = (0, M.o1)(i2);
          if (!t2.parsingResult) return new R.W4({ result: { case: "spawnError", value: new R.mJ({ command: s2, workingDirectory: c2, error: "Parsing result is required" }) } });
          let l2;
          if (t2.skipApproval) {
            const e3 = await this.permissionsService.shouldEnforceShellInvariantBlocks(n2, { workingDirectory: c2, skipUnsafeWorkingDirectoryBlock: true, command: s2, parsingResult: t2.parsingResult, toolCallId: t2.toolCallId }, o2);
            if ("block" === e3.kind) return new R.W4({ result: et(s2, c2, e3.reason) });
            l2 = o2;
          } else {
            const e3 = await this.permissionsService.shouldBlockShellCommand(n2, s2, { workingDirectory: c2, timeout: a2, parsingResult: t2.parsingResult, toolCallId: t2.toolCallId, smartModeApprovalReason: t2.smartModeApproval?.reason, smartModeApprovalRequestId: t2.smartModeApproval?.requestId, hookApprovalRequirement: (0, m.oGr)(t2) }, o2);
            if ("block" === e3.kind) return new R.W4({ result: et(s2, c2, e3.reason) });
            l2 = e3.policy;
          }
          if (j() && (l2 = K(s2, t2.parsingResult)), l2 && "insecure_none" !== l2.type) {
            const e3 = await We(this.ignoreService);
            l2 = { ...l2, ignoreMapping: e3 };
          }
          return this.executeWithPolicy(n2, t2, i2, a2, l2);
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          fu(r2);
        }
      }
    }
    var yu = r(82589);
    class wu {
      constructor(e2) {
        this.permissionsService = e2;
      }
      async execute(e2, t2) {
        const r2 = t2.parsingResult ?? new R.HO(), n2 = await this.permissionsService.isShellCommandFullyAllowlisted(e2, t2.command, { workingDirectory: t2.workingDirectory, parsingResult: r2, classifierResult: t2.classifierResult, toolCallId: t2.toolCallId });
        return new yu.e({ allowlisted: n2 });
      }
    }
    class vu {
      constructor(e2) {
        this.shellStreamExecutor = e2;
      }
      async execute(e2, t2, r2) {
        return "" === t2.toolCallId.trim() ? new R.jK({ status: R.iA.NOT_FOUND }) : this.shellStreamExecutor.forceBackgroundByToolCallId(t2.toolCallId);
      }
    }
    var _u = r(87199), Au = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Su = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const bu = (0, k.h)("local-exec:shell-core"), Eu = "win32" === process.platform, Iu = ["CURSOR_CONVERSATION_ID", "CURSOR_REQUEST_ID", "CURSOR_AGENT_STORE_FILES_DIR", "CURSOR_AGENT_STORE_SHARED_PATHS"];
    function Cu(e2) {
      return `'${e2.replace(/'/g, "'\\''")}'`;
    }
    const ku = ["eval-cursorbench", "cursorbench", "sand-eval", "eval-harness"];
    function xu(e2) {
      return ku.some((t2) => e2.includes(t2)) ? (0, Ot.createHash)("sha256").update(e2).digest("hex") : e2;
    }
    function Tu(e2, t2) {
      return e2[t2] ?? process.env[t2];
    }
    const Ru = /^[A-Za-z_][A-Za-z0-9_]*$/, Bu = /CURSOR_SANDBOX/i;
    function Pu(e2) {
      return Ru.test(e2) && !Bu.test(e2);
    }
    function Ju(e2, t2) {
      const r2 = void 0 === e2 ? [] : [...e2];
      return r2.includes(t2) || r2.push(t2), r2;
    }
    function Mu(e2, t2) {
      const r2 = Tu(t2, "CURSOR_AGENT_STORE_FILES_DIR"), n2 = (function(e3) {
        if (void 0 === e3) return [];
        try {
          const t3 = JSON.parse(e3);
          if ("object" != typeof t3 || null === t3) return [];
          const r3 = [];
          for (const e4 of Object.values(t3)) "object" == typeof e4 && null !== e4 && "path" in e4 && "readOnly" in e4 && "string" == typeof e4.path && "boolean" == typeof e4.readOnly && r3.push({ path: e4.path, readOnly: e4.readOnly });
          return r3;
        } catch {
          return [];
        }
      })(Tu(t2, "CURSOR_AGENT_STORE_SHARED_PATHS"));
      if (void 0 === r2 && 0 === n2.length) return e2;
      const s2 = e2?.perUser, o2 = e2?.perRepo ?? e2?.perUser ?? e2?.teamAdmin;
      if ("workspace_readwrite" !== o2?.type && "workspace_readonly" !== o2?.type) return e2;
      const i2 = s2?.type === o2.type ? { ...s2 } : { type: o2.type };
      var a2;
      void 0 !== r2 && (a2 = r2, "workspace_readwrite" !== i2.type ? i2.additionalReadonlyPaths = Ju(i2.additionalReadonlyPaths, a2) : i2.additionalReadwritePaths = Ju(i2.additionalReadwritePaths, a2));
      for (const e3 of n2) e3.readOnly || "workspace_readwrite" !== i2.type ? i2.additionalReadonlyPaths = Ju(i2.additionalReadonlyPaths, e3.path) : i2.additionalReadwritePaths = Ju(i2.additionalReadwritePaths, e3.path);
      return { ...e2, perUser: i2 };
    }
    class qu {
      constructor(e2, t2, r2, n2, s2, o2) {
        this.executor = e2, this.workspacePath = t2, this.projectDir = r2, this.shellOutputBackpressureOptions = n2, this.extraEnvProvider = s2, this.powershellUtf8Console = o2, this.conversationExecutors = /* @__PURE__ */ new Map();
      }
      executorFor(e2) {
        if (!e2) return this.executor;
        let t2 = this.conversationExecutors.get(e2);
        return void 0 === t2 && (t2 = this.executor.clone(this.workspacePath), this.conversationExecutors.set(e2, t2)), t2;
      }
      async *execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          Au(r2, (0, x.VI)(e2.withName("ShellCoreExecutor.execute")), false);
          const o2 = performance.now(), i2 = this.executorFor(t2.conversationId), a2 = t2.workingDirectory || await i2.getCwd(), c2 = (0, M.o1)(a2, this.workspacePath);
          if (!(0, _u.$f)(c2) && !await (async function(e3) {
            try {
              return (await (0, n.stat)(e3)).isDirectory();
            } catch (e4) {
              const t3 = e4.code;
              if ("ENOENT" === t3 || "ENOTDIR" === t3) return false;
              throw e4;
            }
          })(c2)) {
            if (c2 !== (0, M.o1)(await i2.getCwd(), this.workspacePath)) throw new Error(`working directory does not exist: ${c2}; the command did not run`);
            return yield { type: "stderr", data: `The shell's working directory no longer exists: ${c2}. The command did not run. Re-run it with working_directory set to an existing directory.
` }, void (yield { type: "exit", code: 1, aborted: false, localExecutionTimeMs: Math.round(performance.now() - o2) });
          }
          let l2, u2 = 0, d2 = 0, p2 = false, m2 = false, h2 = false;
          t2.fileOutputThresholdBytes && this.projectDir && (l2 = { buffer: "", lineCount: 0, size: 0, threshold: Number(t2.fileOutputThresholdBytes) });
          const f2 = t2.signal, g2 = { CURSOR_AGENT: "1" };
          t2.conversationId && (g2.CURSOR_CONVERSATION_ID = (0, bc.sh)(t2.conversationId)), t2.requestId && (g2.CURSOR_REQUEST_ID = t2.requestId), this.projectDir && (g2.AGENT_TRANSCRIPTS = s.join(this.projectDir, bc.O2));
          const y2 = this.extraEnvProvider?.(e2, t2);
          void 0 !== y2 && Object.assign(g2, y2);
          const w2 = t2.requestScopedEnv ?? {};
          for (const [e3, t3] of Object.entries(w2)) void 0 !== t3 && Pu(e3) && (g2[e3] = t3);
          const v2 = g2.CURSOR_REQUEST_ID;
          void 0 !== v2 && (g2.CURSOR_REQUEST_ID = xu(v2)), (function(e3, t3) {
            const r3 = Object.keys(t3).filter((e4) => Pu(e4) && !Iu.includes(e4)), n2 = `builtin unset ${[...Iu, ...r3].join(" ")} 2>/dev/null || true`, s2 = [];
            for (const t4 of Iu) {
              const r4 = Tu(e3, t4);
              void 0 !== r4 && s2.push(`builtin export ${t4}=${Cu(r4)}`);
            }
            for (const e4 of r3) {
              const r4 = t3[e4];
              void 0 !== r4 && s2.push(`builtin export ${e4}=${Cu(r4)}`);
            }
            const o3 = e3.__CURSOR_SANDBOX_ENV_RESTORE?.trim(), i3 = process.env.__CURSOR_SANDBOX_ENV_RESTORE?.trim();
            e3.__CURSOR_SANDBOX_ENV_RESTORE = [n2, i3, o3, ...s2].filter((e4) => void 0 !== e4 && "" !== e4).join("; ");
          })(g2, w2), void 0 !== g2.__CURSOR_SANDBOX_ENV_RESTORE && (g2.__CURSOR_SANDBOX_ENV_RESTORE = (function(e3, t3) {
            let r3 = e3;
            for (const e4 of t3) {
              if (null == e4 || 0 === e4.length) continue;
              const t4 = xu(e4);
              t4 !== e4 && (r3 = r3.split(e4).join(t4));
            }
            return r3;
          })(g2.__CURSOR_SANDBOX_ENV_RESTORE, [t2.requestId, v2, w2.CURSOR_REQUEST_ID, process.env.CURSOR_REQUEST_ID]));
          const _2 = Mu(t2.sandboxPolicy, g2), A2 = (0, B.CG)(_2 ?? B.BM);
          _2 && (yield { type: "start", sandboxed: "workspace_readonly" === A2 || "workspace_readwrite" === A2 }), t2.askpassConfig && !Eu && (g2.SUDO_ASKPASS = t2.askpassConfig.helperPath, g2.CURSOR_ASKPASS_SOCKET = t2.askpassConfig.socketPath, g2.CURSOR_ASKPASS_SECRET = t2.askpassConfig.secret);
          let S2 = 0, b2 = "";
          for await (const r3 of i2.execute(e2, t2.command, { signal: f2, workingDirectory: c2, env: g2, sandboxPolicy: _2, sandboxWorkspaceRoot: this.workspacePath, pipeStdin: t2.pipeStdin ?? false, bufferOutputEvents: this.shellOutputBackpressureOptions?.bufferOutputEvents, outputLimiterOptions: this.shellOutputBackpressureOptions?.outputLimiterOptions, powershellUtf8Console: this.powershellUtf8Console })) {
            if (S2 = 0, b2 = "", ("stdout" === r3.type || "stderr" === r3.type) && (b2 = r3.data.toString(), S2 = r3.data.length, l2)) {
              if (l2.size += S2, l2.lineCount += b2.split("\n").length - 1, l2.size > Us.Ol) ;
              else if (l2.file) l2.file.write(b2);
              else if (l2.buffer += b2, l2.size > l2.threshold) {
                const e3 = s.join(this.projectDir, Us.YW);
                l2.path = s.join(e3, `${(0, Ot.randomUUID)()}.txt`), await (0, n.mkdir)(s.dirname(l2.path), { recursive: true }), l2.file = (0, C.createWriteStream)(l2.path), l2.file.write(l2.buffer), l2.buffer = "";
              }
            }
            switch (r3.type) {
              case "stdout":
                p2 || (u2 + S2 > hs ? (p2 = true, yield { type: "stdout_trimmed" }) : (u2 += S2, yield { type: "stdout", data: b2 }));
                break;
              case "suppressed_output":
                h2 || (h2 = true, yield { type: "stdout", data: B.Ls });
                break;
              case "stderr":
                m2 || (d2 + S2 > hs ? (m2 = true, yield { type: "stderr_trimmed" }) : (d2 += S2, yield { type: "stderr", data: b2 }));
                break;
              case "exit": {
                const e3 = Math.max(0, Math.round(performance.now() - o2));
                let t3;
                l2?.file && (await new Promise((e4) => l2.file.end(e4)), t3 = new Qs.pV({ filePath: l2.path, sizeBytes: BigInt(l2.size), lineCount: BigInt(l2.lineCount) })), yield { type: "exit", code: r3.code, aborted: r3.aborted, outputLocation: t3, localExecutionTimeMs: e3 };
                break;
              }
              case "stdin_ready":
                yield { type: "stdin_ready", stdin: r3.stdin, pid: r3.pid };
                break;
              case "sandbox_denies":
                yield { type: "sandbox_denies", events: r3.events };
            }
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Su(r2);
        }
      }
      async getCwd(e2) {
        return this.executorFor(e2).getCwd();
      }
      getWorkspacePath() {
        if (!this.workspacePath) throw new Error("Workspace path is not configured");
        return this.workspacePath;
      }
    }
    class Du {
      constructor(e2, t2) {
        this.innerExecutor = e2, this.shellManager = t2;
      }
      async *execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          Au(r2, (0, x.VI)(e2.withName("ManagedShellCoreExecutor.execute")), false);
          bu.info(e2, "Executing shell command", { command: t2.command, workingDirectory: t2.workingDirectory, toolCallId: t2.toolCallId });
          let n2 = null;
          t2.toolCallId && (n2 = this.shellManager.getOrCreateShellEmitter(t2.toolCallId));
          for await (const r3 of this.innerExecutor.execute(e2, t2)) {
            if (n2) switch (r3.type) {
              case "stdin_ready":
                n2.emit({ type: "stdin_ready", stdin: r3.stdin, pid: r3.pid });
                break;
              case "start":
                n2.emit({ type: "start", sandboxed: r3.sandboxed });
                break;
              case "stdout":
                n2.emit({ type: "stdout", data: r3.data });
                break;
              case "stderr":
                n2.emit({ type: "stderr", data: r3.data });
                break;
              case "exit":
                n2.emit({ type: "exit", code: r3.code ?? -1, aborted: r3.aborted });
            }
            yield r3;
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Su(r2);
        }
      }
      async getCwd(e2) {
        return this.innerExecutor.getCwd(e2);
      }
      getWorkspacePath() {
        return this.innerExecutor.getWorkspacePath();
      }
    }
    class Ou {
      constructor(e2, t2) {
        this.innerExecutor = e2, this.askpassConfig = t2;
      }
      async *execute(e2, t2) {
        const r2 = { ...t2, askpassConfig: t2.askpassConfig ?? this.askpassConfig };
        yield* this.innerExecutor.execute(e2, r2);
      }
      async getCwd(e2) {
        return this.innerExecutor.getCwd(e2);
      }
      getWorkspacePath() {
        return this.innerExecutor.getWorkspacePath();
      }
    }
    var Nu = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Fu = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const Uu = (0, k.h)("local-exec:shell-stream");
    class Lu {
      constructor(e2, t2) {
        this.iterator = e2, this.timeoutMs = t2, this.pendingPromise = null, this.stopPromise = new Promise((e3) => {
          this.stopResolve = e3;
        });
      }
      stop(e2) {
        return void 0 === this.stopReason && (this.stopReason = e2, this.stopResolve?.(), true);
      }
      get timedOut() {
        return "background" === this.stopReason?.kind && this.stopReason.reason === R.Jg.TIMEOUT;
      }
      get backgroundRequested() {
        return "background" === this.stopReason?.kind;
      }
      get backgroundReasonValue() {
        return "background" === this.stopReason?.kind ? this.stopReason.reason : void 0;
      }
      get stopReasonValue() {
        return this.stopReason;
      }
      async *iterate() {
        this.timer = setTimeout(() => {
          this.stop({ kind: "background", reason: R.Jg.TIMEOUT });
        }, this.timeoutMs);
        try {
          for (; ; ) {
            this.pendingPromise = this.iterator.next();
            const e2 = await Promise.race([this.pendingPromise.then((e3) => ({ kind: "result", result: e3 })), this.stopPromise.then(() => ({ kind: "stopped" }))]);
            if ("stopped" === e2.kind) return;
            if (this.pendingPromise = null, e2.result.done) return;
            yield e2.result.value;
          }
        } finally {
          clearTimeout(this.timer);
        }
      }
      requestBackground() {
        return this.stop({ kind: "background", reason: R.Jg.USER_REQUEST });
      }
      abort() {
        this.stop({ kind: "abort" });
      }
      getHandoffIterator() {
        if (this.pendingPromise) {
          const e2 = this.pendingPromise;
          this.pendingPromise = null;
          let t2 = false;
          return { next: async () => t2 ? this.iterator.next() : (t2 = true, e2) };
        }
        return this.iterator;
      }
    }
    class $u {
      constructor(e2, t2, r2, n2) {
        this.permissionsService = e2, this.coreExecutor = t2, this.ignoreService = r2, this.backgroundShellManager = n2, this.activeForegroundExecutions = /* @__PURE__ */ new Map();
      }
      async forceBackgroundByToolCallId(e2) {
        const t2 = this.activeForegroundExecutions.get(e2), r2 = t2?.requestBackground();
        return r2 ? new R.jK({ status: R.iA.ACCEPTED, shellResult: r2 }) : new R.jK({ status: R.iA.NOT_FOUND });
      }
      async *execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          e2.signal?.throwIfAborted();
          Nu(r2, (0, x.VI)(e2.withName("LocalShellStreamExecutor.execute")), false);
          const n2 = t2.command;
          let s2 = t2.requestedSandboxPolicy ? re(t2.requestedSandboxPolicy) : void 0;
          const o2 = t2.workingDirectory || await this.coreExecutor.getCwd(t2.conversationId), i2 = mu(t2), a2 = (0, M.o1)(o2), c2 = Date.now(), l2 = new R.HO((0, P.UD)(n2).structured), u2 = fe({ command: n2, parsingResult: l2, blockedCommands: t2.adminCommandDenylist });
          if (void 0 !== u2) return void (yield new R.FI({ event: { case: "rejected", value: new R.pZ({ command: n2, workingDirectory: a2, reason: u2 }) } }));
          const d2 = await this.permissionsService.shouldEnforceShellInvariantBlocks(e2, { workingDirectory: a2, skipUnsafeWorkingDirectoryBlock: true, command: n2, parsingResult: l2, toolCallId: t2.toolCallId }, s2);
          if ("block" === d2.kind) return "permissionsConfig" === d2.reason.type ? void (yield new R.FI({ event: { case: "permissionDenied", value: new R.jn({ command: n2, workingDirectory: a2, error: "Command blocked by permissions configuration", isReadonly: d2.reason.isReadonly ?? false }) } })) : void (yield new R.FI({ event: { case: "rejected", value: new R.pZ({ command: n2, workingDirectory: a2, reason: Xe(d2.reason) }) } }));
          if (Uu.info(e2, "Shell stream: approval gate reached", { toolCallId: t2.toolCallId, skipApproval: t2.skipApproval, hasSmartModeApproval: void 0 !== t2.smartModeApproval, hasSmartModeApprovalReason: void 0 !== t2.smartModeApproval?.reason, hasSmartModeApprovalRequestId: void 0 !== t2.smartModeApproval?.requestId, requestedPolicyType: s2?.type ?? "undefined", parserCommandCount: l2.executableCommands.length, classifierCommandCount: t2.classifierResult?.commands.length ?? 0, commandLength: n2.length }), t2.skipApproval) Uu.info(e2, "Shell stream: skipped local approval", { toolCallId: t2.toolCallId, requestedPolicyType: s2?.type ?? "undefined" });
          else {
            const r3 = await this.permissionsService.shouldBlockShellCommand(e2, n2, { workingDirectory: a2, timeout: i2, parsingResult: l2, toolCallId: t2.toolCallId, classifierResult: t2.classifierResult, smartModeApprovalReason: t2.smartModeApproval?.reason, smartModeApprovalRequestId: t2.smartModeApproval?.requestId, hookApprovalRequirement: (0, m.oGr)(t2) }, s2);
            if ("block" === r3.kind) {
              if (Uu.info(e2, "Shell stream: approval gate blocked command", { toolCallId: t2.toolCallId, blockReasonType: r3.reason.type, hasSmartModeApproval: void 0 !== t2.smartModeApproval, skipApproval: t2.skipApproval }), "permissionsConfig" === r3.reason.type) return void (yield new R.FI({ event: { case: "permissionDenied", value: new R.jn({ command: n2, workingDirectory: a2, error: "Command blocked by permissions configuration", isReadonly: r3.reason.isReadonly ?? false }) } }));
              const s3 = Xe(r3.reason);
              return void (yield new R.FI({ event: { case: "rejected", value: new R.pZ({ command: n2, workingDirectory: a2, reason: s3 }) } }));
            }
            s2 = r3.policy, Uu.info(e2, "Shell stream: approval gate allowed command", { toolCallId: t2.toolCallId, skipApproval: t2.skipApproval, effectivePolicyType: s2.type });
          }
          if (j() && (s2 = K(n2, l2)), s2 && "insecure_none" !== s2.type) {
            const e3 = await We(this.ignoreService);
            s2 = { ...s2, ignoreMapping: e3 };
          }
          yield new R.FI({ event: { case: "start", value: new R.tD({ sandboxPolicy: ne(s2) }) } });
          const p2 = t2.timeoutBehavior === R._d.BACKGROUND, h2 = p2 && !t2.closeStdin && void 0 === t2.smartModeApproval, f2 = new AbortController(), g2 = p2 ? f2.signal : e2.signal ? AbortSignal.any([e2.signal, f2.signal]) : f2.signal, y2 = true, w2 = s2 ? { perRepo: s2 } : void 0, v2 = this.coreExecutor.execute(e2, { command: n2, workingDirectory: o2, signal: g2, toolCallId: t2.toolCallId, conversationId: t2.conversationId, requestId: t2.requestId, secretScopeId: t2.secretScopeId, sandboxPolicy: w2, fileOutputThresholdBytes: t2.fileOutputThresholdBytes, pipeStdin: h2, showElapsedTime: y2 });
          let _2;
          p2 || (_2 = setTimeout(() => f2.abort(), i2));
          const A2 = p2 ? new Lu(v2[Symbol.asyncIterator](), i2) : null;
          let S2, b2, E2, I2 = "", C2 = false;
          const k2 = t2.toolCallId && A2 ? { requestBackground: () => {
            if (A2.requestBackground()) return E2 = E2 ?? this.backgroundShellManager.generateShellId(), new R.W4({ result: { case: "success", value: new R.QR({ shellId: E2, pid: b2, command: n2, workingDirectory: a2, msToWait: Rs(Date.now() - c2), backgroundReason: R.Jg.USER_REQUEST, interleavedOutput: I2 }) } });
          } } : void 0;
          t2.toolCallId && k2 && this.activeForegroundExecutions.set(t2.toolCallId, k2);
          const T2 = () => {
            t2.toolCallId && this.activeForegroundExecutions.get(t2.toolCallId) === k2 && this.activeForegroundExecutions.delete(t2.toolCallId);
          };
          let J2;
          A2 && e2.signal && e2.signal.addEventListener("abort", () => {
            A2.backgroundRequested || (f2.abort(), A2.abort());
          }, { once: true });
          const q2 = t2.hardTimeout;
          void 0 !== q2 && q2 > 0 && (J2 = setTimeout(() => {
            if (void 0 !== E2) {
              this.backgroundShellManager.abort(E2) || f2.abort();
            } else C2 = true, f2.abort(), A2?.abort();
          }, q2));
          const D2 = A2?.iterate() ?? v2;
          try {
            for await (const r3 of D2) if ("stdout" === r3.type) I2 += r3.data, yield new R.FI({ event: { case: "stdout", value: new R.o0({ data: r3.data }) } });
            else if ("stderr" === r3.type) I2 += r3.data, yield new R.FI({ event: { case: "stderr", value: new R.Db({ data: r3.data }) } });
            else if ("stdin_ready" === r3.type) S2 = r3.stdin, b2 = r3.pid;
            else if ("exit" === r3.type) {
              let n3;
              r3.aborted && (n3 = e2.signal?.aborted ? R.Lv.USER_ABORT : A2?.timedOut || f2.signal.aborted ? R.Lv.TIMEOUT : R.Lv.USER_ABORT), yield new R.FI({ event: { case: "exit", value: new R.vb({ code: (r3.code ?? -1) >>> 0, cwd: await this.coreExecutor.getCwd(t2.conversationId), outputLocation: r3.outputLocation, aborted: r3.aborted, abortReason: n3, localExecutionTimeMs: Rs(r3.localExecutionTimeMs) }) } });
            }
          } catch (r3) {
            if (!(r3 instanceof B.SandboxUnsupportedError)) throw r3;
            const o3 = s2?.type ?? "unknown";
            return Uu.debug(e2, "Shell stream: sandbox policy unsupported on this host", { toolCallId: t2.toolCallId, policyType: o3, reason: r3.reason }), void (yield new R.FI({ event: { case: "sandboxUnsupported", value: new R.rI({ command: n2, workingDirectory: a2, sandboxPolicyType: o3, reason: r3.reason ?? r3.message, isReadonly: "workspace_readonly" === o3 }) } }));
          } finally {
            clearTimeout(_2), A2?.backgroundRequested || clearTimeout(J2), T2();
          }
          if (A2?.backgroundRequested && !C2) {
            const r3 = E2 ?? this.backgroundShellManager.generateShellId();
            E2 = r3;
            const s3 = A2.backgroundReasonValue === R.Jg.USER_REQUEST ? R.Jg.USER_REQUEST : R.Jg.TIMEOUT, o3 = s3 === R.Jg.USER_REQUEST ? Date.now() - c2 : i2;
            await this.backgroundShellManager.adopt({ ctx: e2, shellId: r3, command: n2, workingDirectory: a2, toolCallId: t2.toolCallId, sandboxPolicy: w2, initialOutput: I2, stdin: S2, pid: b2, abortController: f2, eventIterator: A2.getHandoffIterator(), startTime: c2, showElapsedTime: y2, description: t2.description, outputNotification: t2.outputNotification }), yield new R.FI({ event: { case: "backgrounded", value: new R.Y9({ shellId: r3, command: n2, workingDirectory: a2, pid: b2, msToWait: y2 ? o3 : void 0, reason: s3 }) } });
          } else e2.signal?.aborted && void 0 !== A2?.stopReasonValue ? (clearTimeout(J2), yield new R.FI({ event: { case: "exit", value: new R.vb({ code: 4294967295, cwd: await this.coreExecutor.getCwd(t2.conversationId), aborted: true, abortReason: R.Lv.USER_ABORT }) } })) : clearTimeout(J2);
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Fu(r2);
        }
      }
    }
    var Qu = r(83508);
    class ju {
      constructor(e2) {
        this.permissionsService = e2;
      }
      async execute(e2, t2) {
        const r2 = await this.permissionsService.isWebFetchFullyAllowlisted(e2, { url: t2.url });
        return new Qu.M({ allowlisted: r2 });
      }
    }
    const Gu = require("node:constants");
    class Hu extends Error {
      constructor(e2, t2) {
        super(t2), this.name = "SymlinkRefusedError", this.path = e2;
      }
    }
    async function zu(e2, t2, r2) {
      let s2;
      try {
        s2 = await (0, n.open)(e2, (function() {
          const e3 = C.constants;
          let t3 = e3.O_WRONLY | e3.O_CREAT;
          return "number" == typeof e3.O_NOFOLLOW && (t3 |= e3.O_NOFOLLOW), "number" == typeof e3.O_CLOEXEC && (t3 |= e3.O_CLOEXEC), t3;
        })(), 438);
      } catch (t3) {
        if ((function(e3) {
          const t4 = e3?.code;
          return "ELOOP" === t4 || "EMLINK" === t4 || "EPERM" === t4 && "number" == typeof C.constants.O_NOFOLLOW;
        })(t3)) throw new Hu(e2, `Refusing to write through a symlink at ${e2}`);
        throw t3;
      }
      try {
        let n2;
        try {
          n2 = (0, C.realpathSync)(e2);
        } catch {
          throw new Hu(e2, `Cannot verify canonical path before writing: ${e2}`);
        }
        if (n2 !== e2) throw new Hu(e2, `Refusing write: ${e2} now resolves through a symlinked parent to ${n2}`);
        if (!(await s2.stat()).isFile()) throw new Hu(e2, `Refusing to write to non-regular file at ${e2}`);
        await s2.truncate(0);
        const o2 = (function(e3) {
          return Buffer.isBuffer(e3) ? e3 : Buffer.from(e3);
        })(t2);
        let i2 = 0;
        for (; i2 < o2.length; ) {
          const { bytesWritten: e3 } = await s2.write(o2, i2, o2.length - i2, i2);
          if (0 === e3) break;
          i2 += e3;
        }
        r2?.flush && await s2.sync();
      } finally {
        await s2.close();
      }
    }
    var Wu = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Vu = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const Ku = (0, k.h)("LocalWriteExecutor"), Yu = async (e2, t2, r2, n2) => {
      const s2 = setTimeout(() => {
        Ku.warn(e2, `[watchdog, LocalWriteExecutor] ${t2} still not completed after ${r2}ms`);
      }, r2);
      try {
        return await n2();
      } finally {
        clearTimeout(s2);
      }
    };
    class Zu {
      constructor(e2, t2, r2, { workspacePaths: n2, workspacePath: s2, worktreeMainPath: o2, onWriteForAiTracking: i2, writeFileMutationGuard: a2 }) {
        this.fileChangeTracker = e2, this.permissionsService = t2, this.pendingDecisionProvider = r2, this.workspacePaths = n2, this.workspacePath = s2, this.worktreeMainPath = o2, this.onWriteForAiTracking = i2, this.writeFileMutationGuard = a2;
      }
      async execute(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = Wu(r2, (0, x.VI)(e2.withName("LocalWriteExecutor.execute")), false).ctx, i2 = t2.path, a2 = t2.fileText, c2 = t2.fileBytes.length > 0 ? t2.fileBytes : void 0, l2 = (0, M.o1)(i2, this.workspacePath), u2 = Tc(l2, ["assets", "agent-tools", "swarm-agents"]);
          if ((0, M.fl)({ targetPath: l2, workspacePaths: this.workspacePaths, mainWorktreePath: this.worktreeMainPath })) return new Ji.v3({ result: { case: "error", value: new Ji.QM({ path: l2, error: M.PS }) } });
          let d2, p2 = false;
          try {
            (await (0, n.stat)(l2)).size <= fs ? d2 = await Yu(o2, "readText before write", 3e3, () => (0, Ee.yR)(l2, t2.encodingHint)) : p2 = true;
          } catch {
          }
          const m2 = (await Pc(l2)).resolvedPath, h2 = l2.split(s.sep).pop()?.toLowerCase() ?? "", f2 = (".cursorignore" === h2 ? { type: "permissionsConfig" } : void 0) ?? await Yu(o2, "permissionsService.shouldBlockWrite", 3e3, () => this.permissionsService.shouldBlockWrite(o2, m2, a2));
          if (f2) {
            const e3 = await Yu(o2, "handleBlockReason", 3e3, () => Ze(f2, { onNeedsApproval: async (e4, r3) => {
              const n2 = "fileEdit" !== r3?.type || r3.isNewFile, s2 = "fileEdit" === r3?.type ? r3.diffString : a2, o3 = "fileEdit" === r3?.type ? r3.blockReason : void 0, i3 = await this.pendingDecisionProvider.requestApproval({ type: gs.Write, details: { path: l2, reason: e4, isNewFile: n2, diffString: s2, before: d2, after: a2, blockReason: o3 }, toolCallId: t2.toolCallId });
              return i3.approved ? null : new Ji.v3({ result: { case: "rejected", value: new Ji.en({ path: l2, reason: i3.reason || "" }) } });
            }, onUserRejected: (e4) => new Ji.v3({ result: { case: "rejected", value: new Ji.en({ path: l2, reason: e4 || "" }) } }), onPermissionDenied: (e4, t3) => new Ji.v3({ result: { case: "permissionDenied", value: new Ji.U7({ path: l2, error: e4, isReadonly: t3?.isReadonly ?? false }) } }) }));
            if (null !== e3) return e3;
          }
          const g2 = (0, s.dirname)(m2);
          try {
            await Yu(o2, "mkdir", 3e3, () => (0, n.mkdir)(g2, { recursive: true }));
          } catch (e3) {
            const t3 = e3.code;
            return "EACCES" === t3 || "EPERM" === t3 ? new Ji.v3({ result: { case: "permissionDenied", value: new Ji.U7({ path: l2, directory: g2, operation: "create_directory", error: "Permission denied" }) } }) : new Ji.v3({ result: { case: "error", value: new Ji.QM({ path: l2, error: e3.message }) } });
          }
          let y2, w2;
          if (void 0 !== c2) y2 = c2, w2 = 0;
          else {
            const e3 = await Yu(o2, "getBufferForWrite", 3e3, () => (0, Ee.Bh)(m2, a2, this.workspacePath, t2.encodingHint));
            y2 = e3.buffer, w2 = e3.lines;
          }
          const v2 = () => Yu(o2, "writeFile", 3e3, async () => {
            let e3;
            await zu(m2, y2, { flush: true });
            try {
              e3 = await (0, n.open)((0, s.dirname)(m2), Gu.O_RDONLY), await e3.sync();
            } catch {
            } finally {
              await e3?.close();
            }
          });
          let _2, A2 = false;
          const S2 = async () => {
            try {
              await v2();
            } catch (e3) {
              throw _2 = e3, A2 = true, e3;
            }
          };
          try {
            void 0 === this.writeFileMutationGuard ? await v2() : await this.writeFileMutationGuard.runExclusive(m2, S2);
          } catch (e3) {
            if (void 0 !== this.writeFileMutationGuard && (!A2 || e3 !== _2)) return new Ji.v3({ result: { case: "error", value: new Ji.QM({ path: l2, error: e3 instanceof Error ? e3.message : String(e3) }) } });
            if (e3 instanceof Hu) return new Ji.v3({ result: { case: "permissionDenied", value: new Ji.U7({ path: l2, directory: "", operation: "create_file", error: e3.message }) } });
            const t3 = e3.code;
            return "EACCES" === t3 || "EPERM" === t3 ? new Ji.v3({ result: { case: "permissionDenied", value: new Ji.U7({ path: l2, directory: "", operation: "create_file", error: "Permission denied" }) } }) : "ENOSPC" === e3.code ? new Ji.v3({ result: { case: "noSpace", value: new Ji.bM({ path: l2 }) } }) : "EDQUOT" === t3 ? new Ji.v3({ result: { case: "error", value: new Ji.QM({ path: l2, error: "Agent-store quota exceeded: this write was rejected because the storage quota is full. Nothing was written; your local copy is intact. Delete or truncate files to free space (including resolved *.conflict* files), then retry. Do not retry the same write without freeing space first." }) } }) : new Ji.v3({ result: { case: "error", value: new Ji.QM({ path: l2, error: e3.message }) } });
          }
          if (this.fileChangeTracker && void 0 === c2 && !u2 && !p2) {
            const e3 = t2.toolCallId ? { toolCallId: t2.toolCallId } : void 0;
            await this.fileChangeTracker.trackChange(l2, d2, a2, e3);
          }
          if (this.onWriteForAiTracking && void 0 === c2 && !u2) {
            const e3 = t2.toolCallId ? { toolCallId: t2.toolCallId } : {};
            try {
              await this.onWriteForAiTracking({ path: l2, beforeContent: d2, afterContent: a2, metadata: e3 });
            } catch (e4) {
              Ku.warn(o2, "onWriteForAiTracking failed (write succeeded)", { path: l2, error: e4 instanceof Error ? e4.message : String(e4) });
            }
          }
          const b2 = y2.byteLength;
          let E2;
          if (t2.returnFileContentAfterWrite) try {
            E2 = await Yu(o2, "readText after write", 3e3, () => (0, Ee.yR)(l2, t2.encodingHint));
          } catch {
          }
          return new Ji.v3({ result: { case: "success", value: new Ji.j6({ path: l2, linesCreated: w2, fileSize: b2, ...void 0 !== E2 && { fileContentAfterWrite: E2 } }) } });
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          Vu(r2);
        }
      }
    }
    const Xu = (0, k.h)("local-exec:provider");
    class ed extends m.ha6 {
      getMcpExecutionPolicyDeps() {
        return { permissionsService: this.permissionsService, pendingDecisionProvider: this.pendingDecisionStore };
      }
      constructor(e2) {
        super(), this.pendingDecisionStore = e2.pendingDecisionStore, this.fileChangeTracker = e2.fileChangeTracker, this.gitExecutor = e2.gitExecutor, this.ignoreService = e2.ignoreService, this.grepProvider = e2.grepProvider, this.permissionsService = e2.permissionsService, this.workspacePaths = e2.workspacePaths, this.worktreeMainPath = e2.worktreeMainPath, this.diagnosticsProvider = e2.diagnosticsProvider, this.mcpLease = e2.mcpLease, this.mcpStateAccessor = e2.mcpStateAccessor, this.cursorRulesService = e2.cursorRulesService, this.cloudRulesService = e2.cloudRulesService, this.subagentsService = e2.subagentsService, this.repositoryProvider = e2.repositoryProvider, this.projectDir = e2.projectDir, this.shellManager = e2.shellManager, this._sandboxPolicyResolver = e2._sandboxPolicyResolver, this._defaultSandboxPolicy = e2._defaultSandboxPolicy ?? { type: "insecure_none" };
        const t2 = e2.workspacePaths[0], r2 = t2 ? (function(e3) {
          const t3 = (0, s.join)(e3, ".cursor/sandbox.json");
          try {
            const r3 = (0, C.readFileSync)(t3, "utf-8"), n3 = JSON.parse(r3), s2 = (0, B.$6)(n3);
            return (0, B.l7)(s2, e3);
          } catch {
            return;
          }
        })(t2) : void 0, n2 = e2._defaultSandboxPolicySources;
        this._defaultSandboxPolicySources = r2 || n2 ? { perUser: n2?.perUser, perRepo: r2 ?? n2?.perRepo, teamAdmin: n2?.teamAdmin } : void 0, this.mcpFileOutputThresholdBytes = e2.mcpFileOutputThresholdBytes, this.backgroundShellFactory = e2.backgroundShellFactory, this.backgroundWorkRegistry = e2.backgroundWorkRegistry, this.wakeupOwnerConversationId = e2.wakeupOwnerConversationId, this.mcpElicitationFactory = e2.mcpElicitationFactory, this.createFileWatcher = e2.createFileWatcher, this.sharedRequestContextExecutor = e2.sharedRequestContextExecutor, this.terminalExecutor = e2.terminalExecutor, this.mcpMetaToolEnabled = e2.mcpMetaToolEnabled ?? false, this.mcpMetaToolSlimDescriptors = e2.mcpMetaToolSlimDescriptors ?? false, this.mcpInputSchemaJson = e2.mcpInputSchemaJson ?? false, this.alwaysExposeVirtualMcpAuthTool = e2.alwaysExposeVirtualMcpAuthTool ?? false, this.enableRecordScreen = e2.enableRecordScreen ?? false, this.recordScreenArtifactsDir = e2.recordScreenArtifactsDir, this.recordScreenDisplay = e2.recordScreenDisplay, this.disableRecordScreenRendering = e2.disableRecordScreenRendering ?? false, this.userTerminalHint = e2.userTerminalHint, this.attributionConfigProvider = e2.attributionConfigProvider, this.isAttributionDisabledByAdmin = e2.isAttributionDisabledByAdmin, this.getAgentSkills = e2.getAgentSkills, this.getSmartModeClassifierAutoModeEnabled = e2.getSmartModeClassifierAutoModeEnabled, this.getAdminCommandDenylist = e2.getAdminCommandDenylist, this.devForceNextSmartModeClassifierBlockToken = e2.devForceNextSmartModeClassifierBlockToken, this.getMockPromptTime = e2.getMockPromptTime, this.additionalRules = e2.additionalRules ?? [], this.askpassConfig = e2.askpassConfig, this.rebuildRequestContextOnRulesChange = true === e2.rebuildRequestContextOnRulesChange;
        const o2 = this.terminalExecutor ?? (0, B.Fn)({ env: { CURSOR_AGENT: "1" }, userTerminalHint: this.userTerminalHint });
        let i2;
        if (this.workspacePaths.length > 1) {
          const e3 = this.workspacePaths.map((e4) => (0, s.dirname)(e4));
          i2 = e3.every((t3) => t3 === e3[0]) ? e3[0] : void 0;
        } else i2 = t2;
        let a2 = new qu(o2, t2 ?? (0, ge.homedir)(), this.projectDir, e2.shellOutputBackpressureOptions, e2.shellExtraEnvProvider, e2.powershellUtf8Console);
        e2.shellCoreWrapper && (a2 = e2.shellCoreWrapper(a2)), this.askpassConfig && (a2 = new Ou(a2, this.askpassConfig)), this.shellManager && (a2 = new Du(a2, this.shellManager));
        const c2 = e2.overrideShellExecutor ?? (true === e2.suppressDefaultShellExecutor ? void 0 : new gu(this.permissionsService, a2, this.ignoreService, this.pendingDecisionStore));
        void 0 !== c2 && this.register(m.qkk, Ea(c2)), this.register(m.JP, Ea(new vi(this.permissionsService, this.ignoreService, i2 ?? t2 ?? this.projectDir)));
        const l2 = e2.overrideWriteExecutor ?? new Zu(this.fileChangeTracker, this.permissionsService, this.pendingDecisionStore, { workspacePaths: this.workspacePaths, workspacePath: i2, worktreeMainPath: this.worktreeMainPath, onWriteForAiTracking: e2.onWriteForAiTracking, writeFileMutationGuard: e2.writeFileMutationGuard });
        this.register(m.Lnu, Ea(l2)), this.register(m.RpG, Ea(new vs(this.pendingDecisionStore, this.fileChangeTracker, this.permissionsService, i2, e2.onDeleteForAiTracking))), this.register(m.IGA, Ea(new Es())), this.register(m.jH1, new sc());
        const u2 = this.mcpStateAccessor ?? new cu(this.mcpLease), d2 = e2.overrideGrepExecutor ?? new ni(this.ignoreService, this.grepProvider, this.workspacePaths, { mcpStateAccessor: u2, permissionsService: this.permissionsService });
        this.register(m.u8v, Ea(d2));
        const p2 = e2.overrideReadExecutor ?? new Bl(this.permissionsService, i2, { mcpStateAccessor: u2, useStreamingRead: e2.useStreamingRead, pendingDecisionProvider: this.pendingDecisionStore }), h2 = new m.yJV(Ea(p2));
        this.register(m._As, h2), e2.registerRedactedReadExecutor && this.register(m.Mfc, h2);
        const f2 = e2.overrideLsExecutor ?? new ui(this.permissionsService, this.ignoreService, i2);
        this.register(m.bL4, Ea(f2)), this.register(m.T0F, Ea(new pa(this.permissionsService, i2))), void 0 !== c2 && this.register(m.TZ, Ea(new Bi(c2))), this.register(m.PiX, Ea(new zi(this.permissionsService, l2, i2))), this.register(m.ohZ, Ea(new ga(l2, i2))), this.register(m.Rdb, Ea(new sa(this.permissionsService, i2))), this.register(m.ghi, Ea(new Zi(this.permissionsService, i2))), this.register(m.qNu, Ea(new ca(this.permissionsService, i2))), this.register(m.w4j, Ea(new qa(i2, this.diagnosticsProvider))), e2.getCanvasDiagnostics && this.register(m.sOX, Ea(new ka(e2.getCanvasDiagnostics, e2.beginCanvasSave))), this.register(m.Yib, Ea(new m.HwP(new Bo(this.mcpLease, this.permissionsService, this.pendingDecisionStore, this.projectDir, this.mcpFileOutputThresholdBytes, this.mcpElicitationFactory, e2.ensureMcpServersLoaded), () => this.get(m._As)))), this.register(m.rn8, Ea(new Po(this.mcpLease, e2.ensureMcpServersLoaded))), this.register(m.mlu, Ea(new Jo(this.mcpLease, i2 || this.projectDir, this.permissionsService, this.workspacePaths, this.pendingDecisionStore, e2.ensureMcpServersLoaded))), this.register(m.pY2, Ea(new du(u2, e2.ensureMcpServersLoaded, { filterToRequestedServers: this.mcpMetaToolEnabled && this.mcpMetaToolSlimDescriptors })));
        const g2 = Ea(this.sharedRequestContextExecutor ?? this.createOwnedRequestContextExecutor(u2, t2, e2));
        this.register(m.MZM, { execute: async (t3, r3, n3) => {
          const s2 = await g2.execute(t3, r3, n3);
          if ("success" !== s2.result.case || void 0 === s2.result.value.requestContext) return s2;
          const o3 = s2.clone();
          if ("success" !== o3.result.case) return s2;
          const i3 = o3.result.value.requestContext;
          if (void 0 === i3) return o3;
          const a3 = await u2.getState(t3), c3 = ru(a3, { internalBrowserProvidersOnly: this.mcpMetaToolEnabled && this.mcpMetaToolSlimDescriptors, inputSchemaJson: this.mcpInputSchemaJson });
          if (i3.tools = c3.tools, i3.mcpInstructions = c3.mcpInstructions, i3.mcpMetaToolOptions = this.mcpMetaToolEnabled ? nu(a3, { alwaysExposeVirtualMcpAuthTool: this.alwaysExposeVirtualMcpAuthTool, slimDescriptors: this.mcpMetaToolSlimDescriptors, inputSchemaJson: this.mcpInputSchemaJson }) : void 0, i3.mcpFileSystemOptions = await e2.getMcpFileSystemOptions?.(t3), void 0 !== i3.env && (i3.env.artifactsFolder = e2.getArtifactsFolder?.(t3), void 0 !== e2.getSandboxEnabled && (i3.env.sandboxEnabled = e2.getSandboxEnabled())), void 0 !== e2.getMountedAgentStores && void 0 !== i3.env) try {
            const r4 = await e2.getMountedAgentStores(t3);
            i3.env.mountedAgentStores = r4.map((e3) => e3.clone());
          } catch {
            i3.env.mountedAgentStores = [], Xu.warn(t3, "Failed to get mounted agent stores; continuing without prompt inventory");
          }
          return o3;
        } }), this.backgroundShellExecutor = new Et(this.permissionsService, a2, this.ignoreService, this.projectDir, this.backgroundShellFactory, this.backgroundWorkRegistry, this.wakeupOwnerConversationId), this.register(m.OkD, Ea(this.backgroundShellExecutor));
        const y2 = new $u(this.permissionsService, a2, this.ignoreService, this.backgroundShellExecutor.getManager());
        this.register(m.wve, (function(e3, t3) {
          const r3 = new E({ max: t3?.max ?? 10, ttl: t3?.ttl });
          return { async *execute(t4, n3, s2) {
            if (!s2?.execId) return void (yield* e3.execute(t4, n3, s2));
            const o3 = ba(s2.execId, n3), i3 = r3.get(o3);
            if (i3) return void (yield* i3.fork());
            const a3 = e3.execute(t4, n3, s2), c3 = new Sa(a3);
            r3.set(o3, c3), yield* c3.fork();
          } };
        })(y2)), void 0 !== e2.agentStoreConflictDrainer && this.register(m.iul, new va(e2.agentStoreConflictDrainer)), this.register(m.GuN, new wu(this.permissionsService)), this.register(m.ODj, new ic(this.permissionsService)), this.register(m.sC3, new ju(this.permissionsService));
        const w2 = new vu(y2);
        this.register(m.PEk, Ea(w2));
        const v2 = false === e2.enableWriteBackgroundShellStdin ? new _a(async () => {
          throw new Error(e2.writeBackgroundShellStdinDisabledReason ?? "write_shell_stdin is disabled for this session");
        }) : new _a((e3, t3) => this.backgroundShellExecutor.writeStdin(e3, t3));
        if (this.register(m.TQC, Ea(v2)), e2.computerUseExecutor && (this.computerUseExecutor = e2.computerUseExecutor, this.register(m.iZk, Ea(this.computerUseExecutor))), this.enableRecordScreen) {
          if (!this.recordScreenArtifactsDir || !this.recordScreenDisplay) throw new Error("recordScreenArtifactsDir and recordScreenDisplay are required when enableRecordScreen is true");
          this.recordScreenExecutor = new Ul({ artifactsDir: this.recordScreenArtifactsDir, display: this.recordScreenDisplay, disablePolishedRendering: this.disableRecordScreenRendering, polishedRenderer: e2.polishedRecordingRenderer }), this.register(m.pq5, Ea(this.recordScreenExecutor));
        }
      }
      createOwnedRequestContextExecutor(e2, t2, r2) {
        const n2 = new pu(this.cursorRulesService, this.cloudRulesService, this.subagentsService, this.repositoryProvider, this.grepProvider, e2, this.gitExecutor, this.workspacePaths, { projectDir: this.projectDir, isWorkingDirHomeDir: (0, M.yn)(t2, (0, ge.homedir)()), createFileWatcher: this.createFileWatcher, getSandboxEnabled: r2.getSandboxEnabled, getSandboxSupported: r2.getSandboxSupported, getNetworkAllowlistInfo: r2.getNetworkAllowlistInfo, getSmartModeClassifierAutoModeEnabled: this.getSmartModeClassifierAutoModeEnabled, getAdminCommandDenylist: this.getAdminCommandDenylist, devForceNextSmartModeClassifierBlockToken: this.devForceNextSmartModeClassifierBlockToken, getMockPromptTime: this.getMockPromptTime, userTerminalHint: this.userTerminalHint, getMcpFileSystemOptions: r2.getMcpFileSystemOptions, mcpMetaToolEnabled: this.mcpMetaToolEnabled, mcpMetaToolSlimDescriptors: this.mcpMetaToolSlimDescriptors, mcpInputSchemaJson: this.mcpInputSchemaJson, alwaysExposeVirtualMcpAuthTool: this.alwaysExposeVirtualMcpAuthTool, getArtifactsFolder: r2.getArtifactsFolder, secretRedactionEnabled: r2.secretRedactionEnabled, attributionConfigProvider: this.attributionConfigProvider, isAttributionDisabledByAdmin: this.isAttributionDisabledByAdmin, getAgentSkills: this.getAgentSkills, additionalRules: this.additionalRules, getComputerUseSupported: () => void 0 !== this.computerUseExecutor });
        return this.rebuildRequestContextOnRulesChange && (this.ownedRequestContextExecutor = n2, this.disposeRulesChangeListener = this.cursorRulesService.onDidChangeRules?.(() => {
          n2.rebuildAllCaches();
        })), n2;
      }
      getRecordScreenExecutor() {
        return this.recordScreenExecutor;
      }
      async dispose() {
        this.rebuildRequestContextOnRulesChange && (this.disposeRulesChangeListener?.(), this.disposeRulesChangeListener = void 0, this.ownedRequestContextExecutor?.dispose(), this.ownedRequestContextExecutor = void 0), this.backgroundShellExecutor.dispose(), this.recordScreenExecutor && await this.recordScreenExecutor.dispose();
      }
    }
    "function" == typeof SuppressedError && SuppressedError;
    function td(e2) {
      return e2.replace(/\\/g, "/");
    }
    function rd(e2, t2) {
      for (const r2 of t2) {
        const t3 = td(r2);
        if (e2 === t3 || e2.startsWith(`${t3}/`)) return true;
      }
      return false;
    }
    var nd;
    function sd(e2, t2, r2) {
      if ((function(e3) {
        return Boolean(e3.plugin?.trim() || e3.pluginId?.trim() || e3.marketplaceId?.trim());
      })(e2)) return nd.Plugin;
      const n2 = td(e2.fullPath);
      return rd(n2, r2.builtinDirs) ? nd.Builtin : fr(e2.fullPath, t2).inAgentStore ? nd.UserStore : rd(n2, r2.userDirs) ? nd.UserHome : (rd(n2, r2.workspaceDirs), nd.Workspace);
    }
    function od(e2, t2) {
      if (e2.length <= 1) return e2;
      const r2 = (function(e3) {
        const t3 = [Yt(e3.userHomeDirectory).dirPath], r3 = er(e3.userHomeDirectory, true).map((e4) => e4.dirPath), n3 = [];
        for (const t4 of e3.workspacePaths) {
          n3.push((0, s.join)(t4, ".cursor", "rules"));
          for (const e4 of Xt(t4, true)) n3.push(e4.dirPath);
        }
        return { builtinDirs: t3, userDirs: r3, workspaceDirs: n3 };
      })(t2), n2 = e2.map((e3, n3) => ({ skill: e3, index: n3, tier: sd(e3, t2, r2) }));
      return n2.sort((e3, t3) => e3.tier - t3.tier || e3.index - t3.index), n2.map((e3) => e3.skill);
    }
    !(function(e2) {
      e2[e2.Builtin = 0] = "Builtin", e2[e2.UserStore = 1] = "UserStore", e2[e2.UserHome = 2] = "UserHome", e2[e2.Workspace = 3] = "Workspace", e2[e2.Plugin = 4] = "Plugin";
    })(nd || (nd = {}));
    var id = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, ad = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const cd = (0, Pt.debuglog)("merged-agent-skills"), ld = (0, k.h)("merged-agent-skills");
    class ud {
      constructor(e2, t2 = () => [], r2) {
        this.services = e2, this.getDisabledManagedSkillPaths = t2, this.getPromptSortContext = r2, this.onChangeCallbacks = /* @__PURE__ */ new Set();
      }
      async getAllAgentSkills(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          const r2 = id(t2, (0, x.VI)(e2.withName("MergedAgentSkillsService.getAllAgentSkills")), false), n2 = this.services.map((e3) => e3.getAllAgentSkills(r2.ctx).catch((e4) => (cd("Failed to load agent skills from service: %s", e4 instanceof Error ? e4.message : String(e4)), []))), s2 = async () => {
            try {
              return { ok: true, paths: await this.getDisabledManagedSkillPaths() };
            } catch (e3) {
              return ld.warn(r2.ctx, "getDisabledManagedSkillPaths failed; failing closed by dropping all managed skills for this call", { error: e3 instanceof Error ? e3.message : String(e3) }), { ok: false };
            }
          }, [o2, i2] = await Promise.all([Promise.all(n2), s2()]), a2 = o2.flat(), c2 = this.getPromptSortContext?.(), l2 = yr(a2, c2 ?? mr);
          let u2 = l2;
          return i2.ok ? i2.paths.length > 0 && (u2 = l2.filter((e3) => !(function(e4, t3) {
            if (!e4) return false;
            const r3 = e4.replace(/\\/g, "/");
            return t3.some((e5) => r3.endsWith(e5));
          })(e3.fullPath, i2.paths))) : u2 = l2.filter((e3) => !(function(e4) {
            if (!e4) return false;
            return e4.replace(/\\/g, "/").includes(dd);
          })(e3.fullPath)), void 0 !== c2 ? od(u2, c2) : u2;
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          ad(t2);
        }
      }
      reload(e2) {
        for (const t2 of this.services) t2.reload(e2);
      }
      scheduleDidChangeSkills() {
        void 0 === this.changeTimer && (this.changeTimer = setTimeout(() => {
          this.changeTimer = void 0;
          for (const e2 of Array.from(this.onChangeCallbacks)) e2();
        }, ud.CHANGE_COALESCE_MS));
      }
      ensureChangeListenersRegistered() {
        void 0 === this.disposeChangeListeners && (this.disposeChangeListeners = this.services.map((e2) => e2.onDidChangeSkills(() => this.scheduleDidChangeSkills())));
      }
      disposeChangeListenersIfUnused() {
        if (!(this.onChangeCallbacks.size > 0 || void 0 === this.disposeChangeListeners)) {
          for (const e2 of this.disposeChangeListeners) e2();
          this.disposeChangeListeners = void 0, void 0 !== this.changeTimer && (clearTimeout(this.changeTimer), this.changeTimer = void 0);
        }
      }
      onDidChangeSkills(e2) {
        return this.onChangeCallbacks.add(e2), this.ensureChangeListenersRegistered(), () => {
          this.onChangeCallbacks.delete(e2), this.disposeChangeListenersIfUnused();
        };
      }
      dispose() {
        if (void 0 !== this.changeTimer && (clearTimeout(this.changeTimer), this.changeTimer = void 0), this.onChangeCallbacks.clear(), void 0 !== this.disposeChangeListeners) {
          for (const e2 of this.disposeChangeListeners) e2();
          this.disposeChangeListeners = void 0;
        }
        for (const e2 of this.services) e2.dispose();
      }
    }
    ud.CHANGE_COALESCE_MS = 1500;
    const dd = `/${Ht.configDir}/${Ht.subdir}/`;
    const pd = (0, k.h)("skill-sync-manifest"), md = ".sync-manifest.json", hd = ".sync-manifest.json.tmp", fd = 1;
    function gd() {
      return { version: fd, skills: {} };
    }
    async function yd(e2, t2) {
      try {
        const r2 = await (0, n.readFile)((0, s.join)(e2, md), "utf-8"), o2 = JSON.parse(r2);
        return (function(e3) {
          if ("object" != typeof e3 || null === e3 || Array.isArray(e3)) return false;
          const t3 = e3;
          return "number" == typeof t3.version && "object" == typeof t3.skills && null !== t3.skills && !Array.isArray(t3.skills) && (void 0 === t3.lastInventoryAt || "number" == typeof t3.lastInventoryAt);
        })(o2) ? o2 : (pd.warn(t2, "Manifest failed schema validation, resetting", { skillDir: e2 }), gd());
      } catch (r2) {
        return r2 instanceof Error && "ENOENT" === r2.code || pd.debug(t2, "Failed to read sync manifest, resetting", { skillDir: e2, error: String(r2) }), gd();
      }
    }
    function wd(e2, t2, r2) {
      e2.skills[t2] = { lastSyncedAt: r2 };
    }
    function vd(e2, t2) {
      delete e2.skills[t2];
    }
    var _d = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Ad = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const Sd = (0, k.h)("builtin-skills-sync"), bd = 864e5, Ed = 2592e5;
    function Id() {
      return Yt((0, ge.homedir)()).dirPath;
    }
    function Cd(e2) {
      return "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
    }
    function kd(e2) {
      return !(!e2 || e2 !== e2.trim()) && !(e2.includes("..") || e2.includes("/") || e2.includes("\\"));
    }
    function xd(e2) {
      for (const t2 of Object.keys(e2.resources ?? {})) if (0 === t2.length || t2.includes("\\") || t2.includes("\0") || s.posix.isAbsolute(t2) || s.posix.normalize(t2) !== t2 || t2.split("/").includes("..") || "SKILL.md" === s.posix.basename(t2) || !t2.endsWith(".md")) throw new Error(`Unsafe managed skill resource path: ${JSON.stringify(t2)}`);
    }
    function Td(e2) {
      const t2 = (0, Dt.be)(e2.content), r2 = Cd(t2.data) ? t2.data : {};
      return (0, Dt.Ib)(`${t2.content.trim()}
`, (function(e3, t3) {
        const r3 = { ...t3 ?? {}, name: e3.id, description: e3.description };
        delete r3.disabledEnvironments, e3.disableModelInvocation ? r3["disable-model-invocation"] = true : delete r3["disable-model-invocation"], e3.environments && e3.environments.length > 0 ? r3.environments = e3.environments : delete r3.environments, e3.disabledEnvironments && e3.disabledEnvironments.length > 0 ? r3["disabled-environments"] = e3.disabledEnvironments : delete r3["disabled-environments"];
        const n2 = { ...Cd(r3.metadata) ? r3.metadata : {} };
        return delete n2.environments, delete n2.disabledEnvironments, delete n2["disabled-environments"], Object.keys(n2).length > 0 ? r3.metadata = n2 : delete r3.metadata, r3;
      })(e2, r2));
    }
    async function Rd(e2, t2, r2) {
      const o2 = (0, s.join)(t2, r2.id), i2 = (0, s.join)(o2, "SKILL.md"), a2 = r2.fileContent, c2 = Object.keys(r2.resources), l2 = await Bd(o2);
      if (c2.length > 0 || l2.length > 0) {
        const e3 = new Map([["SKILL.md", a2], ...Object.entries(r2.resources)]), i3 = /* @__PURE__ */ new Set(["SKILL.md", ...l2]);
        if (i3.size === e3.size && [...e3.keys()].every((e4) => i3.has(e4))) {
          let t3 = true;
          for (const [r3, i4] of e3) try {
            if (await (0, n.readFile)((0, s.join)(o2, ...r3.split("/")), "utf-8") !== i4) {
              t3 = false;
              break;
            }
          } catch {
            t3 = false;
            break;
          }
          if (t3) return false;
        }
        return await (async function(e4, t3) {
          const r3 = (0, s.join)(e4, t3.id), o3 = await (0, n.mkdtemp)((0, s.join)(e4, `.${t3.id}-staging-`)), i4 = `${o3}-backup`;
          let a3 = false;
          try {
            await (0, n.writeFile)((0, s.join)(o3, "SKILL.md"), t3.fileContent, "utf-8");
            for (const [e5, r4] of Object.entries(t3.resources)) {
              const t4 = (0, s.join)(o3, ...e5.split("/"));
              await (0, n.mkdir)((0, s.dirname)(t4), { recursive: true }), await (0, n.writeFile)(t4, r4, "utf-8");
            }
            try {
              await (0, n.rename)(r3, i4), a3 = true;
            } catch (e5) {
              if (!(e5 instanceof Error) || "ENOENT" !== e5.code) throw e5;
            }
            try {
              await (0, n.rename)(o3, r3);
            } catch (e5) {
              throw a3 && (await (0, n.rename)(i4, r3), a3 = false), e5;
            }
            a3 && (await (0, n.rm)(i4, { recursive: true, force: true }), a3 = false);
          } finally {
            await (0, n.rm)(o3, { recursive: true, force: true });
          }
        })(t2, r2), true;
      }
      try {
        if (await (0, n.readFile)(i2, "utf-8") === a2) return false;
      } catch (t3) {
        t3 instanceof Error && "ENOENT" === t3.code || Sd.warn(e2, "Unexpected error reading skill file", { skillId: r2.id, error: String(t3) });
      }
      return await (0, n.mkdir)(o2, { recursive: true }), await (0, n.writeFile)(i2, a2, "utf-8"), true;
    }
    async function Bd(e2, t2 = "") {
      const r2 = t2 ? (0, s.join)(e2, ...t2.split("/")) : e2;
      let o2;
      try {
        o2 = await (0, n.readdir)(r2, { withFileTypes: true });
      } catch (e3) {
        if (e3 instanceof Error && "ENOENT" === e3.code) return [];
        throw e3;
      }
      const i2 = [];
      for (const r3 of o2) {
        const n2 = t2 ? `${t2}/${r3.name}` : r3.name;
        r3.isDirectory() ? i2.push(...await Bd(e2, n2)) : r3.isFile() && r3.name.endsWith(".md") && "SKILL.md" !== n2 && i2.push(n2);
      }
      return i2;
    }
    async function Pd(e2, t2) {
      try {
        return (await (0, n.readdir)(t2, { withFileTypes: true })).filter((e3) => e3.isDirectory() && !e3.name.startsWith(".")).map((e3) => e3.name);
      } catch (r2) {
        return r2 instanceof Error && "ENOENT" === r2.code || Sd.warn(e2, "Failed to list skills directory, skipping cleanup", { skillDir: t2, error: String(r2) }), [];
      }
    }
    async function Jd(e2, t2 = {}) {
      const r2 = { stack: [], error: void 0, hasError: false };
      try {
        const o2 = _d(r2, (0, x.VI)(e2.withName("syncBuiltinSkills")), false).ctx, i2 = Date.now(), a2 = Id();
        await (0, n.mkdir)(a2, { recursive: true });
        const [c2, l2] = await Promise.all([yd(a2, o2), Pd(o2, a2)]), u2 = c2.lastInventoryAt;
        (void 0 === u2 || i2 - u2 >= bd) && (await (async function(e3, t3, r3, n2) {
          try {
            const o3 = await Promise.all(r3.map(async (e4) => {
              const r4 = (0, s.join)(t3, e4), [o4, i3] = await Promise.all([Md((0, s.join)(r4, "SKILL.md")), "canvas" === e4 ? Md((0, s.join)(r4, "sdk")) : Promise.resolve(false)]);
              return { skill_id: e4, has_skill_md: o4, has_sdk_dir: i3, last_synced_at: n2.skills[e4]?.lastSyncedAt ?? null };
            }));
            Sd.info(e3, "managed_skills.startup_inventory", { skills_on_disk: o3, manifest_present: Object.keys(n2.skills).length > 0 });
          } catch (t4) {
            Sd.warn(e3, "Failed to emit managed skills startup inventory", { error: String(t4) });
          }
        })(o2, a2, l2, c2), c2.lastInventoryAt = i2);
        const d2 = /* @__PURE__ */ new Map();
        for (const e3 of t2.managedSkills ?? []) kd(e3.id) ? d2.set(e3.id, e3) : Sd.warn(o2, "Skipping managed skill with unsafe id", { skillId: e3.id });
        const p2 = /* @__PURE__ */ new Set([...d2.keys(), ...l2]);
        let m2 = 0, h2 = 0;
        const f2 = [];
        for (const e3 of p2) try {
          const t3 = d2.get(e3), r3 = c2.skills[e3], u3 = r3 ? i2 - r3.lastSyncedAt : 0, p3 = void 0 !== r3 && u3 > Ed, g2 = void 0 !== t3 && (0, Jt.r6M)(t3, "local"), y2 = void 0 !== t3 && !g2, w2 = void 0 !== r3 || l2.includes(e3);
          if (t3 && false !== t3.enabled && g2) {
            xd(t3);
            await Rd(o2, a2, { id: e3, fileContent: Td(t3), resources: t3.resources ?? {} }) ? m2++ : h2++, wd(c2, e3, i2);
          } else if (false === t3?.enabled || y2 || p3) {
            const l3 = false === t3?.enabled ? "enabled_false" : y2 ? "environment_ineligible" : "grace_expired";
            await (0, n.rm)((0, s.join)(a2, e3), { recursive: true, force: true }), vd(c2, e3), w2 && (f2.push(e3), Sd.info(o2, "managed_skills.removed", { skill_id: e3, reason: l3, server_enabled: t3?.enabled ?? null, had_manifest_entry: void 0 !== r3, last_synced_ms_ago: r3 ? i2 - r3.lastSyncedAt : null }));
          } else r3 || wd(c2, e3, i2);
        } catch (t3) {
          Sd.warn(o2, "Failed to apply skill, will retry next sync", { skillId: e3, error: String(t3) });
        }
        try {
          await (async function(e3, t3) {
            const r3 = (0, s.join)(e3, hd), o3 = (0, s.join)(e3, md);
            await (0, n.mkdir)(e3, { recursive: true }), await (0, n.writeFile)(r3, JSON.stringify(t3, null, 2), "utf-8"), await (0, n.rename)(r3, o3);
          })(a2, c2);
        } catch (e3) {
          !(function(e4) {
            if (e4 instanceof Error && "ENOENT" === e4.code) return true;
            const t3 = String(e4);
            return t3.includes("ENOENT") || t3.includes("no such file or directory");
          })(e3) ? Sd.warn(o2, "Failed to persist sync manifest", { skillDir: a2, error: String(e3) }) : Sd.debug(o2, "Skipped persisting sync manifest, path removed concurrently", { skillDir: a2, error: String(e3) });
        }
        return { synced: m2, upToDate: h2, removed: f2 };
      } catch (e3) {
        r2.error = e3, r2.hasError = true;
      } finally {
        Ad(r2);
      }
    }
    async function Md(e2) {
      try {
        return await (0, n.stat)(e2), true;
      } catch (e3) {
        const t2 = e3.code;
        if ("ENOENT" === t2 || "ENOTDIR" === t2) return false;
        throw e3;
      }
    }
    (0, k.h)("managed-skills-sync");
    function qd(e2, t2) {
      return e2 || t2.sourceInfo.name;
    }
    class Dd {
      constructor(e2) {
        this.pluginsService = e2;
      }
      async getPluginCommands() {
        const e2 = await this.pluginsService.reload(), t2 = [];
        for (const r2 of e2) {
          const e3 = (0, Jt.xJd)(r2.identifier), n2 = qd(r2.displayName, r2.identifier), o2 = (0, Jt.R3Q)(r2.identifier), i2 = (0, Jt.iUy)(r2.identifier), a2 = r2.installPath;
          for (const c2 of r2.commands) t2.push({ filename: (0, s.basename)(c2.path), name: c2.name, description: c2.description, argumentHint: c2.argumentHint, content: c2.content, filePath: (0, s.join)(a2, c2.path), pluginId: e3, pluginName: n2, marketplace: o2, marketplaceId: i2, pluginSource: r2.identifier.source });
        }
        return t2;
      }
    }
    class Od {
      constructor(e2) {
        this.pluginsService = e2;
      }
      async getPluginHooks(e2) {
        const t2 = false === e2?.forceReload ? await this.pluginsService.getAllEnabledPlugins() : await this.pluginsService.reload(), r2 = [], n2 = [];
        for (const e3 of t2) {
          const t3 = e3.hooks;
          t3 && ("config" in t3 ? r2.push({ pluginKey: (0, Jt.s4m)(e3.identifier), installPath: e3.installPath, config: t3.config, sourcePath: t3.sourcePath, plugin: (0, Jt.dBY)(e3.identifier), marketplace: (0, Jt.R3Q)(e3.identifier), pluginId: (0, Jt.xJd)(e3.identifier), marketplaceId: (0, Jt.iUy)(e3.identifier) }) : n2.push(t3.error));
        }
        return { hooks: r2, errors: n2 };
      }
    }
    function Nd(e2) {
      try {
        const t2 = new URL(e2), r2 = new URL(t2.pathname, t2.origin);
        return r2.search = t2.search, r2.pathname.endsWith("/") && r2.pathname.length > 1 && (r2.pathname = r2.pathname.slice(0, -1)), "/" === r2.pathname ? r2.origin + r2.search : r2.toString();
      } catch {
        return e2.toLowerCase().trim();
      }
    }
    class Fd {
      constructor(e2) {
        this.pluginsService = e2;
      }
      async getPluginMcpServers() {
        const e2 = await this.pluginsService.reload(), t2 = [];
        for (const r2 of e2) {
          const e3 = "marketplace" in r2.identifier.sourceInfo ? r2.identifier.sourceInfo.marketplace : void 0, n2 = "marketplaceDbId" in r2.identifier.sourceInfo ? r2.identifier.sourceInfo.marketplaceDbId : void 0, s2 = r2.identifier.sourceInfo.name, o2 = "pluginDbId" in r2.identifier.sourceInfo ? r2.identifier.sourceInfo.pluginDbId : void 0, i2 = r2.mcpConfig;
          i2 && t2.push(...(0, Jt.Iqv)(i2, e3, n2, s2, o2, r2.identifier.source));
        }
        return (function(e3) {
          const t3 = [], r2 = /* @__PURE__ */ new Set();
          for (const n2 of e3) {
            if ("streamableHttp" !== n2.type || !n2.url) {
              t3.push(n2);
              continue;
            }
            const e4 = Nd(n2.url);
            r2.has(e4) || (r2.add(e4), t3.push(n2));
          }
          return t3;
        })(t2);
      }
    }
    var Ud = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Ld = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function $d(e2, t2) {
      if (void 0 === e2) return [];
      return (Array.isArray(e2) ? e2 : [e2]).map((e3) => ({ ...e3, userHomeDir: t2 }));
    }
    class Qd {
      constructor(e2, t2, r2, n2, s2, o2) {
        this.workspacePaths = e2, this.userHomeDirectory = t2, this.getSettings = r2, this.marketplaceOptions = n2, this.localPluginVariablesLookup = o2, this.plugins = [], this._loadFailures = [], this._pluginSetIncomplete = true, this._retainedFromPreviousLoad = 0, this._wasFirstLoad = true, this.loadedOnce = false, this._extensionPlugins = /* @__PURE__ */ new Map(), this._extensionPluginOriginalPaths = /* @__PURE__ */ new Map(), this.pluginLogger = s2 ?? Jt.NzK, this.reload();
      }
      async getAllEnabledPlugins() {
        return await this.ensureLoaded(), [...this.plugins];
      }
      getLoadFailures() {
        return [...this._loadFailures];
      }
      isPluginSetIncomplete() {
        return this._pluginSetIncomplete;
      }
      getLoadDiagnostics() {
        return { userHomeDirectory: this.userHomeDirectory, pluginsLoaded: this.plugins.length, retainedFromPreviousLoad: this._retainedFromPreviousLoad, wasFirstLoad: this._wasFirstLoad, sourceUnavailable: this._pluginSetIncomplete };
      }
      async reload() {
        return this.loadPromise || (this.loadPromise = this.load().then(async (e2) => {
          const t2 = !this.loadedOnce;
          let r2 = [];
          try {
            r2 = await this._reloadExtensionPlugins();
          } catch (e3) {
            this.pluginLogger.log("error", `Failed to reload extension plugins after base load success: ${e3}`);
          }
          const n2 = e2.sourceUnavailable ? this._retainPluginsMissingFromPartialLoad(e2.plugins) : [], s2 = [...e2.plugins, ...n2], o2 = new Set(s2.map((e3) => e3.installPath)), i2 = r2.filter((e3) => !o2.has(e3.installPath));
          return this.plugins = [...s2, ...i2], e2.sourceUnavailable || (this._loadFailures = e2.failures), this._pluginSetIncomplete = e2.sourceUnavailable, this._retainedFromPreviousLoad = n2.length, this._wasFirstLoad = t2, this.loadedOnce = true, this.pluginLogger.log("info", `Plugins reload completed: ${this.plugins.length} plugins loaded (${i2.length} extension, ${n2.length} retained), ${e2.failures.length} failures`), this.plugins;
        }).catch(async (e2) => {
          const t2 = !this.loadedOnce;
          this.pluginLogger.log("error", `Failed to load plugins: ${e2}`), this._pluginSetIncomplete = true, this._retainedFromPreviousLoad = 0, this._wasFirstLoad = t2;
          try {
            const e3 = await this._reloadExtensionPlugins(), t3 = new Set(this.plugins.map((e4) => e4.installPath));
            this.plugins = [...this.plugins, ...e3.filter((e4) => !t3.has(e4.installPath))];
          } catch (e3) {
            this.pluginLogger.log("error", `Failed to reload extension plugins after base load failure: ${e3}`);
          }
          return this.loadedOnce = true, this.plugins;
        }).finally(() => {
          this.loadPromise = void 0;
        })), this.loadPromise;
      }
      _retainPluginsMissingFromPartialLoad(e2) {
        if (!this.loadedOnce) return [];
        const t2 = new Set(e2.map(Jt.ICo));
        return this.plugins.filter((e3) => "extension" !== e3.identifier.source && void 0 === e3.loadError && e3.installPath.length > 0 && !t2.has((0, Jt.ICo)(e3)));
      }
      async reloadPlugin(e2) {
        this.loadPromise && await this.loadPromise;
        const t2 = $d(this.marketplaceOptions, this.userHomeDirectory);
        if (0 === t2.length) return;
        if (!(this.getSettings().loadCursorFirstParty ?? t2.length > 0)) return;
        const r2 = (t3) => t3.pluginDbId === e2.pluginDbId, n2 = (e3) => "cursor-first-party" === e3.identifier.source || "cursor-third-party" === e3.identifier.source ? e3.identifier.sourceInfo : void 0, s2 = (t3) => n2(t3)?.pluginDbId === e2.pluginDbId, o2 = (t3, r3) => void 0 !== t3.pluginDbId ? t3.pluginDbId === e2.pluginDbId : t3.pluginName === r3?.name && t3.marketplaceName === r3?.marketplace;
        let i2, a2, c2;
        for (const l3 of t2) {
          let t3;
          try {
            t3 = await (0, Jt.FY4)({ ...l3, log: l3.log ?? this.pluginLogger, pluginFilter: r2 });
          } catch (t4) {
            this.pluginLogger.log("error", `reloadPlugin: source load failed for ${e2.name}: ${t4}`);
            continue;
          }
          const u3 = t3.plugins.find((e3) => s2(e3) && void 0 === e3.loadError);
          if (void 0 !== u3) {
            i2 = u3;
            break;
          }
          const d2 = t3.plugins.find(s2);
          if (void 0 !== d2 && void 0 === a2) {
            const e3 = n2(d2);
            a2 = d2, c2 = t3.failures.find((t4) => o2(t4, e3));
          }
        }
        if (void 0 === i2) {
          if (void 0 !== a2) {
            const t3 = n2(a2), r3 = { ...c2 ?? { pluginName: t3?.name ?? e2.name, errorMessage: a2.loadError ?? "Plugin load failed", errorType: "unknown", ...void 0 !== t3?.marketplace && { marketplaceName: t3.marketplace } }, pluginDbId: e2.pluginDbId };
            this._loadFailures = [...this._loadFailures.filter((e3) => !o2(e3, t3)), r3];
          }
          return;
        }
        const l2 = this.plugins.findIndex(s2);
        if (-1 === l2) this.plugins = [...this.plugins, i2];
        else {
          const e3 = [...this.plugins];
          e3[l2] = i2, this.plugins = e3;
        }
        this.loadedOnce = true;
        const u2 = n2(i2);
        return this._loadFailures = this._loadFailures.filter((e3) => !o2(e3, u2)), i2;
      }
      async registerExtensionPlugin({ path: e2, extensionId: t2 }) {
        const r2 = (0, s.resolve)(e2), o2 = await (0, n.realpath)(r2);
        if (!(await (0, n.stat)(o2)).isDirectory()) throw new Error(`Extension plugin path is not a directory: ${o2}`);
        const i2 = ge.homedir();
        if (o2.split(s.sep).filter(Boolean).length < 3 || o2 === i2 || "/" === o2) throw new Error(`Extension plugin path is too broad (must be a specific subdirectory, not root or home): ${o2}`);
        for (const [e3, r3] of this._extensionPlugins) if (e3 !== t2 && r3.has(o2)) throw new Error(`Plugin path ${o2} is already registered by extension ${e3}`);
        let a2 = this._extensionPlugins.get(t2);
        if (a2 || (a2 = /* @__PURE__ */ new Map(), this._extensionPlugins.set(t2, a2)), a2.has(o2)) return void this._rememberExtensionPluginOriginalPath({ extensionId: t2, originalPath: r2, canonicalPath: o2 });
        const c2 = (0, s.basename)(o2), l2 = await this._loadExtensionPluginContent(o2, t2);
        a2.set(o2, l2), this._rememberExtensionPluginOriginalPath({ extensionId: t2, originalPath: r2, canonicalPath: o2 }), this.pluginLogger.log("info", `Registered extension plugin: ${c2} from ${o2} (extension: ${t2})`);
      }
      async unregisterExtensionPlugin({ path: e2, extensionId: t2 }) {
        const r2 = this._extensionPlugins.get(t2);
        if (!r2) return false;
        const o2 = (0, s.resolve)(e2);
        let i2;
        try {
          i2 = await (0, n.realpath)(o2);
        } catch {
          const e3 = this._extensionPluginOriginalPaths.get(t2);
          i2 = e3?.get(o2) ?? o2;
        }
        const a2 = r2.delete(i2);
        return 0 === r2.size ? (this._extensionPlugins.delete(t2), this._extensionPluginOriginalPaths.delete(t2)) : a2 && this._forgetExtensionPluginOriginalPath(t2, i2), a2 && this.pluginLogger.log("info", `Unregistered extension plugin: ${i2} (extension: ${t2})`), a2;
      }
      async _loadExtensionPluginContent(e2, t2) {
        const r2 = (0, s.basename)(e2), n2 = { name: r2, localPath: e2, extensionId: t2 }, o2 = await (0, Jt.Y__)(e2, r2, { name: r2, version: "0.0.0" });
        return o2.displayName && (n2.name = o2.displayName), { identifier: { source: "extension", sourceInfo: n2 }, installPath: e2, ...void 0 !== o2.displayName && { displayName: o2.displayName }, ...void 0 !== o2.description && { description: o2.description }, ...void 0 !== o2.authorName && { authorName: o2.authorName }, ...void 0 !== o2.logoUrl && { logoUrl: o2.logoUrl }, ...void 0 !== o2.version && { version: o2.version }, ...void 0 !== o2.homepage && { homepage: o2.homepage }, ...void 0 !== o2.repository && { repository: o2.repository }, skills: o2.skills, rules: o2.rules, agents: o2.agents, commands: o2.commands, mcpConfig: o2.mcpConfig ?? void 0, capabilities: o2.capabilities, hooks: o2.hooks };
      }
      _rememberExtensionPluginOriginalPath(e2) {
        let t2 = this._extensionPluginOriginalPaths.get(e2.extensionId);
        t2 || (t2 = /* @__PURE__ */ new Map(), this._extensionPluginOriginalPaths.set(e2.extensionId, t2)), t2.set(e2.originalPath, e2.canonicalPath);
      }
      _forgetExtensionPluginOriginalPath(e2, t2) {
        const r2 = this._extensionPluginOriginalPaths.get(e2);
        if (r2) {
          for (const [e3, n2] of r2) n2 === t2 && r2.delete(e3);
          0 === r2.size && this._extensionPluginOriginalPaths.delete(e2);
        }
      }
      _getExtensionPluginPaths() {
        const e2 = [];
        for (const [t2, r2] of this._extensionPlugins) for (const n2 of r2.keys()) e2.push({ canonicalPath: n2, extensionId: t2 });
        return e2;
      }
      async _reloadExtensionPlugins() {
        const e2 = this._getExtensionPluginPaths(), t2 = [];
        for (const { canonicalPath: r2, extensionId: n2 } of e2) try {
          const e3 = await this._loadExtensionPluginContent(r2, n2), s2 = this._extensionPlugins.get(n2);
          s2 && s2.set(r2, e3), t2.push(e3);
        } catch (e3) {
          this.pluginLogger.log("error", `Failed to reload extension plugin ${r2}: ${e3}`);
          const s2 = this._extensionPlugins.get(n2), o2 = s2?.get(r2);
          o2 && t2.push(o2);
        }
        return t2;
      }
      async ensureLoaded() {
        this.loadPromise ? await this.loadPromise : this.loadedOnce || await this.reload();
      }
      async load() {
        const e2 = { stack: [], error: void 0, hasError: false };
        try {
          const t2 = (0, ye.q6)().withName("LocalPluginsService.load"), r2 = (Ud(e2, (0, x.VI)(t2), false), performance.now()), n2 = (e3) => {
            this.pluginLogger.increment(`local_plugins_service.load.${e3}`, 1), this.pluginLogger.distribution("local_plugins_service.load.duration", performance.now() - r2, { outcome: e3 });
          }, s2 = this.getSettings(), o2 = $d(this.marketplaceOptions, this.userHomeDirectory), i2 = s2.importThirdPartyPlugins, a2 = s2.loadUserLocalPlugins ?? true, c2 = s2.loadCursorFirstParty ?? o2.length > 0;
          if (!i2 && !c2 && !a2) return this.pluginLogger.log("info", "Skipping plugin loading, cursor 1p, 3p, and user-local plugins are disabled"), { plugins: [], failures: [], sourceUnavailable: false };
          this.pluginLogger.increment("local_plugins_service.load.start", 1);
          const l2 = (e3, t3) => {
            this.pluginLogger.increment("local_plugins_service.load_plugin.error", 1), this.pluginLogger.log("error", `Cursor plugin load error ${e3.name}@${e3.version}: ${t3?.message ?? String(t3)}`);
          };
          try {
            const e3 = await (0, Jt.wpN)(this.workspacePaths, { userHomeDir: this.userHomeDirectory, loadClaude: i2, loadUserLocal: a2, loadCursorFirstParty: c2 && o2.length > 0, marketplaceSources: o2.length > 0 ? o2.map((e4) => ({ ...e4, onCursorError: l2 })) : void 0, onError: (e4, t3) => {
              this.pluginLogger.log("error", `Claude plugin load error ${e4.raw}: ${t3?.message ?? String(t3)}`);
            }, log: this.pluginLogger, localPluginVariablesLookup: this.localPluginVariablesLookup });
            return n2("success"), this.pluginLogger.log("info", `Plugins loaded in ${(performance.now() - r2).toFixed(1)}ms`), e3;
          } catch (e3) {
            return n2("error"), this.pluginLogger.log("error", `Failed to load all plugins: ${e3}`), { plugins: [], failures: [], sourceUnavailable: true };
          }
        } catch (t2) {
          e2.error = t2, e2.hasError = true;
        } finally {
          Ld(e2);
        }
      }
    }
    var jd = r(32180);
    const Gd = 3e5, Hd = BigInt(0), zd = BigInt(8), Wd = BigInt(16), Vd = BigInt(65535);
    function Kd(e2) {
      const t2 = e2.trim();
      if (0 === t2.length) return;
      const r2 = t2.includes("://") ? t2 : `https://${t2}`;
      try {
        return new URL(r2);
      } catch {
        return;
      }
    }
    function Yd(e2) {
      let t2 = e2.trim().replace(/\.+$/, "").toLowerCase();
      if (t2.startsWith("[")) {
        const e3 = t2.indexOf("]");
        -1 !== e3 && (t2 = t2.slice(1, e3));
      } else if (t2.split(":").length - 1 == 1) {
        const e3 = t2.lastIndexOf(":");
        [...t2.slice(e3 + 1)].every((e4) => /\d/.test(e4)) && (t2 = t2.slice(0, e3));
      }
      return t2;
    }
    function Zd(e2) {
      const t2 = e2.split(".");
      if (4 !== t2.length) return;
      let r2 = Hd;
      for (const e3 of t2) {
        if (!/^\d{1,3}$/.test(e3)) return;
        const t3 = Number(e3);
        if (!Number.isInteger(t3) || t3 < 0 || t3 > 255) return;
        r2 = r2 << zd | BigInt(t3);
      }
      return { version: 4, value: r2 };
    }
    function Xd(e2) {
      if (0 === e2.length) return [];
      const t2 = [], r2 = e2.split(":");
      for (let e3 = 0; e3 < r2.length; e3++) {
        const n2 = r2[e3];
        if (0 === n2.length) return;
        if (n2.includes(".")) {
          if (e3 !== r2.length - 1) return;
          const s2 = Zd(n2);
          if (!s2) return;
          t2.push(Number(s2.value >> Wd & Vd)), t2.push(Number(s2.value & Vd));
          continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(n2)) return;
        t2.push(Number.parseInt(n2, 16));
      }
      return t2;
    }
    function ep(e2) {
      return Zd(e2) ?? (function(e3) {
        const t2 = Yd(e3);
        if (0 === t2.length || t2.includes(":::")) return;
        const r2 = t2.indexOf("::");
        if (-1 === r2) {
          const e4 = Xd(t2);
          if (!e4 || 8 !== e4.length) return;
          return { version: 6, value: e4.reduce((e5, t3) => e5 << Wd | BigInt(t3), Hd) };
        }
        if (-1 !== t2.indexOf("::", r2 + 1)) return;
        const n2 = Xd(t2.slice(0, r2)), s2 = Xd(t2.slice(r2 + 2));
        if (!n2 || !s2) return;
        const o2 = n2.length + s2.length;
        if (o2 > 7) return;
        return { version: 6, value: [...n2, ...new Array(8 - o2).fill(0), ...s2].reduce((e4, t3) => e4 << Wd | BigInt(t3), Hd) };
      })(e2);
    }
    function tp(e2, t2) {
      const r2 = Yd(e2), n2 = Yd(t2);
      if ("*" === n2) return true;
      if (n2.includes("/")) return (function(e3, t3) {
        const r3 = t3.lastIndexOf("/");
        if (r3 <= 0 || r3 === t3.length - 1) return false;
        const n3 = ep(t3.slice(0, r3)), s2 = ep(e3);
        if (!n3 || !s2 || n3.version !== s2.version) return false;
        const o2 = Number(t3.slice(r3 + 1)), i2 = 4 === n3.version ? 32 : 128;
        if (!Number.isInteger(o2) || o2 < 0 || o2 > i2) return false;
        const a2 = BigInt(i2 - o2);
        return s2.value >> a2 === n3.value >> a2;
      })(r2, n2);
      if (n2.startsWith("*.")) {
        const e3 = n2.slice(2);
        return r2 === e3 || r2.endsWith(`.${e3}`);
      }
      return r2 === n2;
    }
    function rp(e2, t2) {
      if (!e2.includes("*")) return e2 === t2;
      const r2 = e2.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
      return new RegExp(`^${r2}$`).test(t2);
    }
    function np(e2, t2) {
      if (rp(e2, t2)) return true;
      if (e2.includes("://")) {
        let r3, n3;
        try {
          r3 = new URL(e2), n3 = new URL(t2);
        } catch {
          return false;
        }
        if ("" !== r3.username || "" !== r3.password || "" !== n3.username || "" !== n3.password || r3.protocol !== n3.protocol || r3.port !== n3.port) return false;
        const s2 = Yd(r3.hostname);
        return !!tp(Yd(n3.hostname), s2) && rp(`${r3.pathname}${r3.search}`, `${n3.pathname}${n3.search}`);
      }
      const r2 = (function(e3) {
        const t3 = (function(e4) {
          const t4 = e4.trim(), r4 = t4.indexOf("["), n4 = t4.indexOf("]");
          if (-1 !== r4 && n4 > r4) {
            const e5 = t4.slice(r4 + 1, n4);
            if (t4.slice(n4 + 1).startsWith("(")) return `${t4.slice(0, r4)}${e5}`;
          }
          return t4;
        })(e3).trim();
        if (0 === t3.length) return;
        const r3 = t3.lastIndexOf("/");
        if (!t3.includes("://") && r3 > 0 && /^\d+$/.test(t3.slice(r3 + 1).trim())) {
          const e4 = Yd(t3.slice(0, r3));
          if (e4.length > 0) return `${e4}/${t3.slice(r3 + 1).trim()}`;
        }
        const n3 = Kd(t3);
        if (n3) return Yd(n3.hostname);
        let s2 = t3;
        const o2 = s2.indexOf("://");
        -1 !== o2 && (s2 = s2.slice(o2 + 3));
        const i2 = s2.indexOf("/");
        -1 !== i2 && (s2 = s2.slice(0, i2));
        const a2 = Yd((function(e4) {
          if (e4.startsWith("[")) {
            const t5 = e4.indexOf("]");
            return -1 !== t5 ? e4.slice(1, t5) : e4;
          }
          const t4 = e4.split(":");
          return 2 === t4.length && [...t4[1]].every((e5) => /\d/.test(e5)) ? t4[0] : e4;
        })(s2));
        if (0 !== a2.length) {
          if (a2.startsWith("*.")) {
            const e4 = a2.slice(2);
            if (0 === e4.length || e4.includes("*") || e4.includes("?")) return;
            return a2;
          }
          if (!a2.includes("*") && !a2.includes("?")) return a2;
        }
      })(e2), n2 = (function(e3) {
        const t3 = Kd(e3);
        if (t3) return Yd(t3.hostname);
        const r3 = Yd(e3);
        return r3.length > 0 ? r3 : void 0;
      })(t2);
      return !(!r2 || !n2) && tp(n2, r2);
    }
    function sp({ failOpenWhenEmpty: e2, server: t2, settings: r2 }) {
      if (true !== r2?.allowedMcpConfiguration?.requireMcpServersInTeamNetworkAllowlist || void 0 === t2.url) return { blocked: false };
      const n2 = (r2.networkAllowlist ?? []).map((e3) => e3.trim()).filter((e3) => e3.length > 0);
      return 0 === n2.length && e2 || _c(t2.url, n2) ? { blocked: false } : { blocked: true, reason: "teamNetworkAllowlist", message: "Not on the team network allowlist" };
    }
    function op(e2) {
      const t2 = e2?.trim();
      return t2 && t2.length > 0 ? t2 : void 0;
    }
    function ip(e2, t2) {
      const r2 = op(e2.command), n2 = op(e2.serverUrl);
      if (!(void 0 !== r2) && !(void 0 !== n2)) return false;
      const s2 = void 0 === r2 || void 0 !== t2.command && (function(e3, t3) {
        if (!e3.includes("*")) return e3 === t3;
        const r3 = e3.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
        return new RegExp(`^${r3}$`).test(t3);
      })(r2, t2.command), o2 = void 0 === n2 || void 0 !== t2.url && np(n2, t2.url);
      return s2 && o2;
    }
    function ap(e2, t2) {
      if ("workspace" !== e2) return [];
      const r2 = [], n2 = /* @__PURE__ */ new Set();
      for (const e3 of t2 ?? []) {
        const t3 = e3.trim();
        0 === t3.length || n2.has(t3) || (n2.add(t3), r2.push(t3));
      }
      return r2;
    }
    class cp {
      constructor(e2) {
        this.fetch = e2;
      }
      get() {
        const e2 = this.cached, t2 = void 0 === e2 ? 1 / 0 : Date.now() - e2.fetchedAt;
        return void 0 === e2 || t2 > 6e5 ? (this.cached = void 0, this.refresh()) : (t2 > Gd && this.refresh().catch(() => {
        }), Promise.resolve(e2.value));
      }
      invalidate() {
        this.cached = void 0, this.inFlight = void 0;
      }
      refresh() {
        if (void 0 === this.inFlight) {
          const e2 = this.fetch().then((t2) => (this.inFlight !== e2 || void 0 === t2 && void 0 !== this.cached || (this.cached = { value: t2, fetchedAt: Date.now() }), t2)).finally(() => {
            this.inFlight === e2 && (this.inFlight = void 0);
          });
          this.inFlight = e2;
        }
        return this.inFlight;
      }
    }
    class lp {
      constructor(e2, t2, r2 = {}) {
        this.teamAdminSettingsProvider = e2, this.defaultAllowlistProvider = t2, this.options = r2, this.lastFetchSucceeded = true, this.settings = new cp(() => this.fetchSettings()), this.teamRepos = new cp(() => this.teamAdminSettingsProvider.getTeamRepos()), this.defaultAllowlist = new cp(() => this.fetchDefaultAllowlist()), this.getTeamAdminSettings();
      }
      invalidateCache() {
        this.settings.invalidate(), this.defaultAllowlist.invalidate();
      }
      async fetchSettings() {
        try {
          const e2 = await this.teamAdminSettingsProvider.getTeamAdminSettings();
          return this.lastFetchSucceeded = true, e2;
        } catch (e2) {
          throw this.lastFetchSucceeded = false, e2;
        }
      }
      getTeamAdminSettings() {
        return this.settings.get().catch(() => {
        });
      }
      async getDotCursorProtection() {
        const e2 = await this.getTeamAdminSettings();
        return e2?.dotCursorProtection ?? true;
      }
      async getShouldBlockMcp() {
        const e2 = await this.getTeamAdminSettings();
        return !(!e2?.autoRunControls?.enabled || !e2?.autoRunControls?.disableMcpAutoRun);
      }
      async getDeleteFileProtection() {
        const e2 = await this.getTeamAdminSettings();
        return !(!e2?.autoRunControls?.enabled || !e2?.autoRunControls?.deleteFileProtection);
      }
      async getIsHeadlessDisabled() {
        return "disabled" === (await this.getHeadlessCliPolicy()).kind;
      }
      async getHeadlessCliPolicy() {
        const e2 = await this.getTeamAdminSettings();
        return void 0 !== e2 || this.lastFetchSucceeded ? true === e2?.cliSettings?.disableHeadless ? { kind: "disabled" } : { kind: "enabled" } : { kind: "unavailable" };
      }
      async getMcpServerBlockInfo(e2) {
        const t2 = await this.getTeamAdminSettings(), r2 = t2?.allowedMcpConfiguration, n2 = await this.isMcpSettingsOverhaulEnabled({ disableExposureLog: true });
        if (true === r2?.disableAll) return { blocked: true, reason: "teamPolicy", message: "Blocked by team policy" };
        if (n2) {
          if ((function(e3, t3, r3) {
            if (true === r3?.useCorePolicy) return !(0, Ls.Y)(e3, t3);
            if (void 0 === t3) return false;
            if (true === t3.disableAll) return true;
            const n4 = t3.allowedMcpServers;
            return 0 !== n4.length && !n4.some((t4) => ip(t4, e3));
          })(e2, r2, { useCorePolicy: true })) return { blocked: true, reason: "teamPolicy", message: "Blocked by team policy" };
          const n3 = await this.getMcpNetworkControlsConfig(e2), s2 = void 0 === e2.url ? { allowed: true } : (0, Ls.ME)(e2.url, n3);
          if (!s2.allowed) return { blocked: true, reason: "teamNetworkAllowlist", message: s2.message };
          const o2 = sp({ failOpenWhenEmpty: false, server: e2, settings: t2 });
          if (o2.blocked) return o2;
        }
        if (!n2) {
          const r3 = (function({ isMcpAccessNetworkAllowlistEnabled: e3, server: t3, settings: r4 }) {
            return e3 && true === r4?.allowedMcpConfiguration?.requireMcpServersInTeamNetworkAllowlist ? sp({ failOpenWhenEmpty: true, server: t3, settings: r4 }) : { blocked: false };
          })({ isMcpAccessNetworkAllowlistEnabled: await this.isMcpAccessNetworkAllowlistEnabled(), server: e2, settings: t2 });
          if (r3.blocked) return r3;
        }
        return { blocked: false };
      }
      async getMcpNetworkControlsConfig(e2) {
        const t2 = await this.getTeamAdminSettings(), r2 = t2?.allowedMcpConfiguration;
        if (await this.isMcpSettingsOverhaulEnabled()) {
          const n2 = "win32" === process.platform && await this.isWin32UserExtensionStdioUnsandboxEnabled();
          return (0, Ls._N)({ allowedMcpConfiguration: r2, server: e2, localAgentNetworkAllowlist: t2?.networkAllowlist, blockMessage: "Not on the team network allowlist", aggregateManagedServerNetworkAllowlists: false, stdioPlatform: process.platform, unsandboxUserExtensionStdio: n2 });
        }
        return { enabled: false, localAgentNetworkAllowlist: t2?.networkAllowlist, blockMessage: "Not on the team network allowlist" };
      }
      async isServerBlocked(e2) {
        return (await this.getMcpServerBlockInfo(e2)).blocked;
      }
      async getAutoRunControls() {
        const e2 = await this.getTeamAdminSettings();
        if (e2?.autoRunControls?.enabled) return { enabled: e2.autoRunControls.enabled, allowed: e2.autoRunControls.allowed ?? [], blocked: e2.autoRunControls.blocked ?? [], enableAllowlistMode: e2.autoRunControls.enableAllowlistMode ?? true, enableRunEverything: e2.autoRunControls.enableRunEverything ?? false, enableSmartAuto: e2.autoRunControls.enableSmartAuto ?? true, mcpToolAllowlist: e2.autoRunControls.mcpToolAllowlist ?? [] };
      }
      async isReadControlEnabled() {
        try {
          return await this.options.isReadControlEnabled?.() ?? true;
        } catch {
          return false;
        }
      }
      async isDenylistEnforcementKilled() {
        try {
          return true === await this.options.isAdminCommandDenylistEnforcementKilled?.();
        } catch {
          return false;
        }
      }
      async getAdminCommandDenylist() {
        if (await this.isDenylistEnforcementKilled()) return { rules: [] };
        const e2 = await this.getTeamAdminSettings();
        return { rules: e2?.autoRunControls?.adminCommandDenylist?.rules ?? [] };
      }
      async isMcpSettingsOverhaulEnabled(e2) {
        const t2 = this.options.isMcpSettingsOverhaulEnabled?.(e2);
        return void 0 !== t2 && await t2;
      }
      async isWin32UserExtensionStdioUnsandboxEnabled() {
        try {
          const e2 = this.options.isWin32UserExtensionStdioUnsandboxEnabled?.();
          return void 0 !== e2 && await e2;
        } catch {
          return false;
        }
      }
      async getMcpToolControls() {
        const e2 = await this.getTeamAdminSettings(), t2 = e2?.allowedMcpConfiguration;
        if (void 0 === t2) return;
        const r2 = (0, Ac.BJ)({ autoRunControls: e2?.autoRunControls, allowedMcpServers: t2?.allowedMcpServers });
        return r2.policies.length > 0 || r2.tools.length > 0 ? { enabled: true, mcpToolAllowlist: r2.tools, allowUserOverride: t2?.allowUserOverrideMcpServers ?? false, serverPolicies: r2.policies } : void 0;
      }
      async getNetworkAccessControls() {
        const e2 = await this.getTeamAdminSettings();
        return void 0 !== e2 || this.lastFetchSucceeded ? { allowlist: e2?.networkAllowlist ?? [], denylist: e2?.networkDenylist ?? [], available: true } : { allowlist: [], denylist: [], available: false };
      }
      async getSandboxingControls() {
        const e2 = await this.getTeamAdminSettings(), t2 = e2?.autoRunControls?.sandboxingControls, r2 = (n2 = t2?.sandboxReadBoundary, n2 === jd.h0i.WORKSPACE ? "workspace" : "system");
        var n2;
        return { sandboxingDisabled: t2?.sandboxing === jd.faf.DISABLED, networkingDisabled: t2?.sandboxNetworking === jd._mX.ALWAYS_DISABLED, gitDisabled: t2?.sandboxGit === jd.i24.ALWAYS_DISABLED, readBoundary: r2, readAllowlistPaths: ap(r2, t2?.sandboxReadAllowlistPaths), allowUserOverrideReadAllowlist: false !== t2?.allowUserOverrideSandboxReadAllowlist };
      }
      async isAttributionDisabledByAdmin() {
        const e2 = await this.getTeamAdminSettings();
        return void 0 === e2 && !this.lastFetchSucceeded || (e2?.attributionControls?.disableAttribution ?? false);
      }
      getDefaultNetworkAllowlist() {
        return this.defaultAllowlist.get().catch(() => ({ allowlist: [], available: false }));
      }
      async fetchDefaultAllowlist() {
        if (!this.defaultAllowlistProvider) return { allowlist: [], available: true };
        return { allowlist: await this.defaultAllowlistProvider.getDefaultNetworkAllowlist(), available: true };
      }
      getTeamRepos() {
        return this.teamRepos.get();
      }
      async isMcpAccessNetworkAllowlistEnabled() {
        return await this.options.isMcpAccessNetworkAllowlistEnabled?.() ?? false;
      }
    }
    var up = r(61522);
    let dp;
    function pp() {
      if (void 0 !== dp) return dp;
      if ((0, up.Tr)()) return dp = { registered: true }, dp;
      try {
        !(function() {
          for (const e2 of ns) rs(...e2);
          ts();
        })();
      } catch (e2) {
        return dp = { registered: false, reason: e2 instanceof Error ? e2.message : String(e2) }, dp;
      }
      return (0, up.yo)({ decode: cs, encode: (e2) => ls(e2, { quality: up.YL }) }), dp = { registered: true }, dp;
    }
  }