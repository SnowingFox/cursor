// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4072 range:687034..690428
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4072: (e2, a2, n2) => {
    "use strict";
    const { BalancedPoolMissingUpstreamError: t2, InvalidArgumentError: s2 } = n2(7902), { PoolBase: o2, kClients: r2, kNeedDrain: i2, kAddClient: l, kRemoveClient: d, kGetDispatcher: m } = n2(1329), c = n2(4003), { kUrl: p, kInterceptors: A } = n2(8832), { parseOrigin: u } = n2(9361), g = /* @__PURE__ */ Symbol("factory"), T = /* @__PURE__ */ Symbol("options"), h = /* @__PURE__ */ Symbol("kGreatestCommonDivisor"), k = /* @__PURE__ */ Symbol("kCurrentWeight"), _ = /* @__PURE__ */ Symbol("kIndex"), E = /* @__PURE__ */ Symbol("kWeight"), f = /* @__PURE__ */ Symbol("kMaxWeightPerServer"), C = /* @__PURE__ */ Symbol("kErrorPenalty");
    function I(e3, a3) {
      return 0 === a3 ? e3 : I(a3, e3 % a3);
    }
    function v(e3, a3) {
      return new c(e3, a3);
    }
    e2.exports = class extends o2 {
      constructor(e3 = [], { factory: a3 = v, ...n3 } = {}) {
        if (super(), this[T] = n3, this[_] = -1, this[k] = 0, this[f] = this[T].maxWeightPerServer || 100, this[C] = this[T].errorPenalty || 15, Array.isArray(e3) || (e3 = [e3]), "function" != typeof a3) throw new s2("factory must be a function.");
        this[A] = n3.interceptors && n3.interceptors.BalancedPool && Array.isArray(n3.interceptors.BalancedPool) ? n3.interceptors.BalancedPool : [], this[g] = a3;
        for (const a4 of e3) this.addUpstream(a4);
        this._updateBalancedPoolStats();
      }
      addUpstream(e3) {
        const a3 = u(e3).origin;
        if (this[r2].find((e4) => e4[p].origin === a3 && true !== e4.closed && true !== e4.destroyed)) return this;
        const n3 = this[g](a3, Object.assign({}, this[T]));
        this[l](n3), n3.on("connect", () => {
          n3[E] = Math.min(this[f], n3[E] + this[C]);
        }), n3.on("connectionError", () => {
          n3[E] = Math.max(1, n3[E] - this[C]), this._updateBalancedPoolStats();
        }), n3.on("disconnect", (...e4) => {
          const a4 = e4[2];
          a4 && "UND_ERR_SOCKET" === a4.code && (n3[E] = Math.max(1, n3[E] - this[C]), this._updateBalancedPoolStats());
        });
        for (const e4 of this[r2]) e4[E] = this[f];
        return this._updateBalancedPoolStats(), this;
      }
      _updateBalancedPoolStats() {
        this[h] = this[r2].map((e3) => e3[E]).reduce(I, 0);
      }
      removeUpstream(e3) {
        const a3 = u(e3).origin, n3 = this[r2].find((e4) => e4[p].origin === a3 && true !== e4.closed && true !== e4.destroyed);
        return n3 && this[d](n3), this;
      }
      get upstreams() {
        return this[r2].filter((e3) => true !== e3.closed && true !== e3.destroyed).map((e3) => e3[p].origin);
      }
      [m]() {
        if (0 === this[r2].length) throw new t2();
        if (!this[r2].find((e4) => !e4[i2] && true !== e4.closed && true !== e4.destroyed)) return;
        if (this[r2].map((e4) => e4[i2]).reduce((e4, a4) => e4 && a4, true)) return;
        let e3 = 0, a3 = this[r2].findIndex((e4) => !e4[i2]);
        for (; e3++ < this[r2].length; ) {
          this[_] = (this[_] + 1) % this[r2].length;
          const e4 = this[r2][this[_]];
          if (e4[E] > this[r2][a3][E] && !e4[i2] && (a3 = this[_]), 0 === this[_] && (this[k] = this[k] - this[h], this[k] <= 0 && (this[k] = this[f])), e4[E] >= this[k] && !e4[i2]) return e4;
        }
        return this[k] = this[r2][a3][E], this[_] = a3, this[r2][a3];
      }
    };
  }