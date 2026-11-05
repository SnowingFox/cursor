// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4072 range:381004..384376
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4072: (e2, A2, t2) => {
    "use strict";
    const { BalancedPoolMissingUpstreamError: n2, InvalidArgumentError: r2 } = t2(7902), { PoolBase: o2, kClients: s, kNeedDrain: a, kAddClient: i, kRemoveClient: c, kGetDispatcher: l } = t2(1329), g = t2(4003), { kUrl: E, kInterceptors: u } = t2(8832), { parseOrigin: d } = t2(9361), I = /* @__PURE__ */ Symbol("factory"), h = /* @__PURE__ */ Symbol("options"), Q = /* @__PURE__ */ Symbol("kGreatestCommonDivisor"), m = /* @__PURE__ */ Symbol("kCurrentWeight"), C = /* @__PURE__ */ Symbol("kIndex"), B = /* @__PURE__ */ Symbol("kWeight"), p = /* @__PURE__ */ Symbol("kMaxWeightPerServer"), f = /* @__PURE__ */ Symbol("kErrorPenalty");
    function y(e3, A3) {
      return 0 === A3 ? e3 : y(A3, e3 % A3);
    }
    function T(e3, A3) {
      return new g(e3, A3);
    }
    e2.exports = class extends o2 {
      constructor(e3 = [], { factory: A3 = T, ...t3 } = {}) {
        if (super(), this[h] = t3, this[C] = -1, this[m] = 0, this[p] = this[h].maxWeightPerServer || 100, this[f] = this[h].errorPenalty || 15, Array.isArray(e3) || (e3 = [e3]), "function" != typeof A3) throw new r2("factory must be a function.");
        this[u] = t3.interceptors && t3.interceptors.BalancedPool && Array.isArray(t3.interceptors.BalancedPool) ? t3.interceptors.BalancedPool : [], this[I] = A3;
        for (const A4 of e3) this.addUpstream(A4);
        this._updateBalancedPoolStats();
      }
      addUpstream(e3) {
        const A3 = d(e3).origin;
        if (this[s].find((e4) => e4[E].origin === A3 && true !== e4.closed && true !== e4.destroyed)) return this;
        const t3 = this[I](A3, Object.assign({}, this[h]));
        this[i](t3), t3.on("connect", () => {
          t3[B] = Math.min(this[p], t3[B] + this[f]);
        }), t3.on("connectionError", () => {
          t3[B] = Math.max(1, t3[B] - this[f]), this._updateBalancedPoolStats();
        }), t3.on("disconnect", (...e4) => {
          const A4 = e4[2];
          A4 && "UND_ERR_SOCKET" === A4.code && (t3[B] = Math.max(1, t3[B] - this[f]), this._updateBalancedPoolStats());
        });
        for (const e4 of this[s]) e4[B] = this[p];
        return this._updateBalancedPoolStats(), this;
      }
      _updateBalancedPoolStats() {
        this[Q] = this[s].map((e3) => e3[B]).reduce(y, 0);
      }
      removeUpstream(e3) {
        const A3 = d(e3).origin, t3 = this[s].find((e4) => e4[E].origin === A3 && true !== e4.closed && true !== e4.destroyed);
        return t3 && this[c](t3), this;
      }
      get upstreams() {
        return this[s].filter((e3) => true !== e3.closed && true !== e3.destroyed).map((e3) => e3[E].origin);
      }
      [l]() {
        if (0 === this[s].length) throw new n2();
        if (!this[s].find((e4) => !e4[a] && true !== e4.closed && true !== e4.destroyed)) return;
        if (this[s].map((e4) => e4[a]).reduce((e4, A4) => e4 && A4, true)) return;
        let e3 = 0, A3 = this[s].findIndex((e4) => !e4[a]);
        for (; e3++ < this[s].length; ) {
          this[C] = (this[C] + 1) % this[s].length;
          const e4 = this[s][this[C]];
          if (e4[B] > this[s][A3][B] && !e4[a] && (A3 = this[C]), 0 === this[C] && (this[m] = this[m] - this[Q], this[m] <= 0 && (this[m] = this[p])), e4[B] >= this[m] && !e4[a]) return e4;
        }
        return this[m] = this[s][A3][B], this[C] = A3, this[s][A3];
      }
    };
  }