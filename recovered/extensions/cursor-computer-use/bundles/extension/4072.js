// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4072 range:385195..388567
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4072: (e2, n2, t2) => {
    "use strict";
    const { BalancedPoolMissingUpstreamError: a2, InvalidArgumentError: s2 } = t2(7902), { PoolBase: o2, kClients: r, kNeedDrain: i, kAddClient: A, kRemoveClient: c, kGetDispatcher: l } = t2(1329), d = t2(4003), { kUrl: m, kInterceptors: u } = t2(8832), { parseOrigin: g } = t2(9361), p = /* @__PURE__ */ Symbol("factory"), E = /* @__PURE__ */ Symbol("options"), h = /* @__PURE__ */ Symbol("kGreatestCommonDivisor"), T = /* @__PURE__ */ Symbol("kCurrentWeight"), k = /* @__PURE__ */ Symbol("kIndex"), f = /* @__PURE__ */ Symbol("kWeight"), _ = /* @__PURE__ */ Symbol("kMaxWeightPerServer"), I = /* @__PURE__ */ Symbol("kErrorPenalty");
    function C(e3, n3) {
      return 0 === n3 ? e3 : C(n3, e3 % n3);
    }
    function y(e3, n3) {
      return new d(e3, n3);
    }
    e2.exports = class extends o2 {
      constructor(e3 = [], { factory: n3 = y, ...t3 } = {}) {
        if (super(), this[E] = t3, this[k] = -1, this[T] = 0, this[_] = this[E].maxWeightPerServer || 100, this[I] = this[E].errorPenalty || 15, Array.isArray(e3) || (e3 = [e3]), "function" != typeof n3) throw new s2("factory must be a function.");
        this[u] = t3.interceptors && t3.interceptors.BalancedPool && Array.isArray(t3.interceptors.BalancedPool) ? t3.interceptors.BalancedPool : [], this[p] = n3;
        for (const n4 of e3) this.addUpstream(n4);
        this._updateBalancedPoolStats();
      }
      addUpstream(e3) {
        const n3 = g(e3).origin;
        if (this[r].find((e4) => e4[m].origin === n3 && true !== e4.closed && true !== e4.destroyed)) return this;
        const t3 = this[p](n3, Object.assign({}, this[E]));
        this[A](t3), t3.on("connect", () => {
          t3[f] = Math.min(this[_], t3[f] + this[I]);
        }), t3.on("connectionError", () => {
          t3[f] = Math.max(1, t3[f] - this[I]), this._updateBalancedPoolStats();
        }), t3.on("disconnect", (...e4) => {
          const n4 = e4[2];
          n4 && "UND_ERR_SOCKET" === n4.code && (t3[f] = Math.max(1, t3[f] - this[I]), this._updateBalancedPoolStats());
        });
        for (const e4 of this[r]) e4[f] = this[_];
        return this._updateBalancedPoolStats(), this;
      }
      _updateBalancedPoolStats() {
        this[h] = this[r].map((e3) => e3[f]).reduce(C, 0);
      }
      removeUpstream(e3) {
        const n3 = g(e3).origin, t3 = this[r].find((e4) => e4[m].origin === n3 && true !== e4.closed && true !== e4.destroyed);
        return t3 && this[c](t3), this;
      }
      get upstreams() {
        return this[r].filter((e3) => true !== e3.closed && true !== e3.destroyed).map((e3) => e3[m].origin);
      }
      [l]() {
        if (0 === this[r].length) throw new a2();
        if (!this[r].find((e4) => !e4[i] && true !== e4.closed && true !== e4.destroyed)) return;
        if (this[r].map((e4) => e4[i]).reduce((e4, n4) => e4 && n4, true)) return;
        let e3 = 0, n3 = this[r].findIndex((e4) => !e4[i]);
        for (; e3++ < this[r].length; ) {
          this[k] = (this[k] + 1) % this[r].length;
          const e4 = this[r][this[k]];
          if (e4[f] > this[r][n3][f] && !e4[i] && (n3 = this[k]), 0 === this[k] && (this[T] = this[T] - this[h], this[T] <= 0 && (this[T] = this[_])), e4[f] >= this[T] && !e4[i]) return e4;
        }
        return this[T] = this[r][n3][f], this[k] = n3, this[r][n3];
      }
    };
  }