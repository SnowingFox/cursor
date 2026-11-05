// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1839 range:610668..614056
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1839: (t2, e2, r2) => {
    "use strict";
    const { BalancedPoolMissingUpstreamError: n2, InvalidArgumentError: s2 } = r2(8762), { PoolBase: i2, kClients: o2, kNeedDrain: a, kAddClient: u, kRemoveClient: c, kGetDispatcher: l } = r2(1421), m = r2(6215), { kUrl: d, kInterceptors: f } = r2(5532), { parseOrigin: p } = r2(3589), h = /* @__PURE__ */ Symbol("factory"), g = /* @__PURE__ */ Symbol("options"), A = /* @__PURE__ */ Symbol("kGreatestCommonDivisor"), _ = /* @__PURE__ */ Symbol("kCurrentWeight"), y = /* @__PURE__ */ Symbol("kIndex"), w = /* @__PURE__ */ Symbol("kWeight"), S = /* @__PURE__ */ Symbol("kMaxWeightPerServer"), J = /* @__PURE__ */ Symbol("kErrorPenalty");
    function B(t3, e3) {
      return 0 === e3 ? t3 : B(e3, t3 % e3);
    }
    function E(t3, e3) {
      return new m(t3, e3);
    }
    t2.exports = class extends i2 {
      constructor(t3 = [], { factory: e3 = E, ...r3 } = {}) {
        if (super(), this[g] = r3, this[y] = -1, this[_] = 0, this[S] = this[g].maxWeightPerServer || 100, this[J] = this[g].errorPenalty || 15, Array.isArray(t3) || (t3 = [t3]), "function" != typeof e3) throw new s2("factory must be a function.");
        this[f] = r3.interceptors && r3.interceptors.BalancedPool && Array.isArray(r3.interceptors.BalancedPool) ? r3.interceptors.BalancedPool : [], this[h] = e3;
        for (const e4 of t3) this.addUpstream(e4);
        this._updateBalancedPoolStats();
      }
      addUpstream(t3) {
        const e3 = p(t3).origin;
        if (this[o2].find((t4) => t4[d].origin === e3 && true !== t4.closed && true !== t4.destroyed)) return this;
        const r3 = this[h](e3, Object.assign({}, this[g]));
        this[u](r3), r3.on("connect", () => {
          r3[w] = Math.min(this[S], r3[w] + this[J]);
        }), r3.on("connectionError", () => {
          r3[w] = Math.max(1, r3[w] - this[J]), this._updateBalancedPoolStats();
        }), r3.on("disconnect", (...t4) => {
          const e4 = t4[2];
          e4 && "UND_ERR_SOCKET" === e4.code && (r3[w] = Math.max(1, r3[w] - this[J]), this._updateBalancedPoolStats());
        });
        for (const t4 of this[o2]) t4[w] = this[S];
        return this._updateBalancedPoolStats(), this;
      }
      _updateBalancedPoolStats() {
        this[A] = this[o2].map((t3) => t3[w]).reduce(B, 0);
      }
      removeUpstream(t3) {
        const e3 = p(t3).origin, r3 = this[o2].find((t4) => t4[d].origin === e3 && true !== t4.closed && true !== t4.destroyed);
        return r3 && this[c](r3), this;
      }
      get upstreams() {
        return this[o2].filter((t3) => true !== t3.closed && true !== t3.destroyed).map((t3) => t3[d].origin);
      }
      [l]() {
        if (0 === this[o2].length) throw new n2();
        if (!this[o2].find((t4) => !t4[a] && true !== t4.closed && true !== t4.destroyed)) return;
        if (this[o2].map((t4) => t4[a]).reduce((t4, e4) => t4 && e4, true)) return;
        let t3 = 0, e3 = this[o2].findIndex((t4) => !t4[a]);
        for (; t3++ < this[o2].length; ) {
          this[y] = (this[y] + 1) % this[o2].length;
          const t4 = this[o2][this[y]];
          if (t4[w] > this[o2][e3][w] && !t4[a] && (e3 = this[y]), 0 === this[y] && (this[_] = this[_] - this[A], this[_] <= 0 && (this[_] = this[S])), t4[w] >= this[_] && !t4[a]) return t4;
        }
        return this[_] = this[o2][e3][w], this[y] = e3, this[o2][e3];
      }
    };
  }