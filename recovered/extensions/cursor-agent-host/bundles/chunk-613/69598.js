// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 69598 range:383582..386959
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69598: (A, e, t) => {
  "use strict";
  const { BalancedPoolMissingUpstreamError: r, InvalidArgumentError: s } = t(38238), { PoolBase: o, kClients: n, kNeedDrain: i, kAddClient: a, kRemoveClient: Q, kGetDispatcher: g } = t(10787), E = t(3817), { kUrl: B, kInterceptors: c } = t(76992), { parseOrigin: I } = t(55201), C = /* @__PURE__ */ Symbol("factory"), h = /* @__PURE__ */ Symbol("options"), l = /* @__PURE__ */ Symbol("kGreatestCommonDivisor"), u = /* @__PURE__ */ Symbol("kCurrentWeight"), d = /* @__PURE__ */ Symbol("kIndex"), f = /* @__PURE__ */ Symbol("kWeight"), w = /* @__PURE__ */ Symbol("kMaxWeightPerServer"), y = /* @__PURE__ */ Symbol("kErrorPenalty");
  function D(A2, e2) {
    if (0 === A2) return e2;
    for (; 0 !== e2; ) {
      const t2 = e2;
      e2 = A2 % e2, A2 = t2;
    }
    return A2;
  }
  function p(A2, e2) {
    return new E(A2, e2);
  }
  A.exports = class extends o {
    constructor(A2 = [], { factory: e2 = p, ...t2 } = {}) {
      if (super(), this[h] = t2, this[d] = -1, this[u] = 0, this[w] = this[h].maxWeightPerServer || 100, this[y] = this[h].errorPenalty || 15, Array.isArray(A2) || (A2 = [A2]), "function" != typeof e2) throw new s("factory must be a function.");
      this[c] = t2.interceptors?.BalancedPool && Array.isArray(t2.interceptors.BalancedPool) ? t2.interceptors.BalancedPool : [], this[C] = e2;
      for (const e3 of A2) this.addUpstream(e3);
      this._updateBalancedPoolStats();
    }
    addUpstream(A2) {
      const e2 = I(A2).origin;
      if (this[n].find((A3) => A3[B].origin === e2 && true !== A3.closed && true !== A3.destroyed)) return this;
      const t2 = this[C](e2, Object.assign({}, this[h]));
      this[a](t2), t2.on("connect", () => {
        t2[f] = Math.min(this[w], t2[f] + this[y]);
      }), t2.on("connectionError", () => {
        t2[f] = Math.max(1, t2[f] - this[y]), this._updateBalancedPoolStats();
      }), t2.on("disconnect", (...A3) => {
        const e3 = A3[2];
        e3 && "UND_ERR_SOCKET" === e3.code && (t2[f] = Math.max(1, t2[f] - this[y]), this._updateBalancedPoolStats());
      });
      for (const A3 of this[n]) A3[f] = this[w];
      return this._updateBalancedPoolStats(), this;
    }
    _updateBalancedPoolStats() {
      let A2 = 0;
      for (let e2 = 0; e2 < this[n].length; e2++) A2 = D(this[n][e2][f], A2);
      this[l] = A2;
    }
    removeUpstream(A2) {
      const e2 = I(A2).origin, t2 = this[n].find((A3) => A3[B].origin === e2 && true !== A3.closed && true !== A3.destroyed);
      return t2 && this[Q](t2), this;
    }
    get upstreams() {
      return this[n].filter((A2) => true !== A2.closed && true !== A2.destroyed).map((A2) => A2[B].origin);
    }
    [g]() {
      if (0 === this[n].length) throw new r();
      if (!this[n].find((A3) => !A3[i] && true !== A3.closed && true !== A3.destroyed)) return;
      if (this[n].map((A3) => A3[i]).reduce((A3, e3) => A3 && e3, true)) return;
      let A2 = 0, e2 = this[n].findIndex((A3) => !A3[i]);
      for (; A2++ < this[n].length; ) {
        this[d] = (this[d] + 1) % this[n].length;
        const A3 = this[n][this[d]];
        if (A3[f] > this[n][e2][f] && !A3[i] && (e2 = this[d]), 0 === this[d] && (this[u] = this[u] - this[l], this[u] <= 0 && (this[u] = this[w])), A3[f] >= this[u] && !A3[i]) return A3;
      }
      return this[u] = this[n][e2][f], this[d] = e2, this[n][e2];
    }
  };
}