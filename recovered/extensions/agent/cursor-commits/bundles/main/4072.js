// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4072 range:381279..384673
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4072: (e2, n2, a2) => {
    "use strict";
    const { BalancedPoolMissingUpstreamError: t2, InvalidArgumentError: s2 } = a2(7902), { PoolBase: o2, kClients: r2, kNeedDrain: i2, kAddClient: A, kRemoveClient: l, kGetDispatcher: c } = a2(1329), m = a2(4003), { kUrl: d, kInterceptors: g } = a2(8832), { parseOrigin: u } = a2(9361), E = /* @__PURE__ */ Symbol("factory"), p = /* @__PURE__ */ Symbol("options"), T = /* @__PURE__ */ Symbol("kGreatestCommonDivisor"), k = /* @__PURE__ */ Symbol("kCurrentWeight"), I = /* @__PURE__ */ Symbol("kIndex"), h = /* @__PURE__ */ Symbol("kWeight"), _ = /* @__PURE__ */ Symbol("kMaxWeightPerServer"), C = /* @__PURE__ */ Symbol("kErrorPenalty");
    function f(e3, n3) {
      return 0 === n3 ? e3 : f(n3, e3 % n3);
    }
    function B(e3, n3) {
      return new m(e3, n3);
    }
    e2.exports = class extends o2 {
      constructor(e3 = [], { factory: n3 = B, ...a3 } = {}) {
        if (super(), this[p] = a3, this[I] = -1, this[k] = 0, this[_] = this[p].maxWeightPerServer || 100, this[C] = this[p].errorPenalty || 15, Array.isArray(e3) || (e3 = [e3]), "function" != typeof n3) throw new s2("factory must be a function.");
        this[g] = a3.interceptors && a3.interceptors.BalancedPool && Array.isArray(a3.interceptors.BalancedPool) ? a3.interceptors.BalancedPool : [], this[E] = n3;
        for (const n4 of e3) this.addUpstream(n4);
        this._updateBalancedPoolStats();
      }
      addUpstream(e3) {
        const n3 = u(e3).origin;
        if (this[r2].find((e4) => e4[d].origin === n3 && true !== e4.closed && true !== e4.destroyed)) return this;
        const a3 = this[E](n3, Object.assign({}, this[p]));
        this[A](a3), a3.on("connect", () => {
          a3[h] = Math.min(this[_], a3[h] + this[C]);
        }), a3.on("connectionError", () => {
          a3[h] = Math.max(1, a3[h] - this[C]), this._updateBalancedPoolStats();
        }), a3.on("disconnect", (...e4) => {
          const n4 = e4[2];
          n4 && "UND_ERR_SOCKET" === n4.code && (a3[h] = Math.max(1, a3[h] - this[C]), this._updateBalancedPoolStats());
        });
        for (const e4 of this[r2]) e4[h] = this[_];
        return this._updateBalancedPoolStats(), this;
      }
      _updateBalancedPoolStats() {
        this[T] = this[r2].map((e3) => e3[h]).reduce(f, 0);
      }
      removeUpstream(e3) {
        const n3 = u(e3).origin, a3 = this[r2].find((e4) => e4[d].origin === n3 && true !== e4.closed && true !== e4.destroyed);
        return a3 && this[l](a3), this;
      }
      get upstreams() {
        return this[r2].filter((e3) => true !== e3.closed && true !== e3.destroyed).map((e3) => e3[d].origin);
      }
      [c]() {
        if (0 === this[r2].length) throw new t2();
        if (!this[r2].find((e4) => !e4[i2] && true !== e4.closed && true !== e4.destroyed)) return;
        if (this[r2].map((e4) => e4[i2]).reduce((e4, n4) => e4 && n4, true)) return;
        let e3 = 0, n3 = this[r2].findIndex((e4) => !e4[i2]);
        for (; e3++ < this[r2].length; ) {
          this[I] = (this[I] + 1) % this[r2].length;
          const e4 = this[r2][this[I]];
          if (e4[h] > this[r2][n3][h] && !e4[i2] && (n3 = this[I]), 0 === this[I] && (this[k] = this[k] - this[T], this[k] <= 0 && (this[k] = this[_])), e4[h] >= this[k] && !e4[i2]) return e4;
        }
        return this[k] = this[r2][n3][h], this[I] = n3, this[r2][n3];
      }
    };
  }