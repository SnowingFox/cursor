// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4072 range:484350..487722
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4072: (e2, t2, A2) => {
    "use strict";
    const { BalancedPoolMissingUpstreamError: n2, InvalidArgumentError: r2 } = A2(7902), { PoolBase: o2, kClients: s, kNeedDrain: i, kAddClient: a, kRemoveClient: c, kGetDispatcher: l } = A2(1329), u = A2(4003), { kUrl: g, kInterceptors: E } = A2(8832), { parseOrigin: h } = A2(9361), d = /* @__PURE__ */ Symbol("factory"), I = /* @__PURE__ */ Symbol("options"), B = /* @__PURE__ */ Symbol("kGreatestCommonDivisor"), Q = /* @__PURE__ */ Symbol("kCurrentWeight"), f = /* @__PURE__ */ Symbol("kIndex"), C = /* @__PURE__ */ Symbol("kWeight"), p = /* @__PURE__ */ Symbol("kMaxWeightPerServer"), m = /* @__PURE__ */ Symbol("kErrorPenalty");
    function y(e3, t3) {
      return 0 === t3 ? e3 : y(t3, e3 % t3);
    }
    function w(e3, t3) {
      return new u(e3, t3);
    }
    e2.exports = class extends o2 {
      constructor(e3 = [], { factory: t3 = w, ...A3 } = {}) {
        if (super(), this[I] = A3, this[f] = -1, this[Q] = 0, this[p] = this[I].maxWeightPerServer || 100, this[m] = this[I].errorPenalty || 15, Array.isArray(e3) || (e3 = [e3]), "function" != typeof t3) throw new r2("factory must be a function.");
        this[E] = A3.interceptors && A3.interceptors.BalancedPool && Array.isArray(A3.interceptors.BalancedPool) ? A3.interceptors.BalancedPool : [], this[d] = t3;
        for (const t4 of e3) this.addUpstream(t4);
        this._updateBalancedPoolStats();
      }
      addUpstream(e3) {
        const t3 = h(e3).origin;
        if (this[s].find((e4) => e4[g].origin === t3 && true !== e4.closed && true !== e4.destroyed)) return this;
        const A3 = this[d](t3, Object.assign({}, this[I]));
        this[a](A3), A3.on("connect", () => {
          A3[C] = Math.min(this[p], A3[C] + this[m]);
        }), A3.on("connectionError", () => {
          A3[C] = Math.max(1, A3[C] - this[m]), this._updateBalancedPoolStats();
        }), A3.on("disconnect", (...e4) => {
          const t4 = e4[2];
          t4 && "UND_ERR_SOCKET" === t4.code && (A3[C] = Math.max(1, A3[C] - this[m]), this._updateBalancedPoolStats());
        });
        for (const e4 of this[s]) e4[C] = this[p];
        return this._updateBalancedPoolStats(), this;
      }
      _updateBalancedPoolStats() {
        this[B] = this[s].map((e3) => e3[C]).reduce(y, 0);
      }
      removeUpstream(e3) {
        const t3 = h(e3).origin, A3 = this[s].find((e4) => e4[g].origin === t3 && true !== e4.closed && true !== e4.destroyed);
        return A3 && this[c](A3), this;
      }
      get upstreams() {
        return this[s].filter((e3) => true !== e3.closed && true !== e3.destroyed).map((e3) => e3[g].origin);
      }
      [l]() {
        if (0 === this[s].length) throw new n2();
        if (!this[s].find((e4) => !e4[i] && true !== e4.closed && true !== e4.destroyed)) return;
        if (this[s].map((e4) => e4[i]).reduce((e4, t4) => e4 && t4, true)) return;
        let e3 = 0, t3 = this[s].findIndex((e4) => !e4[i]);
        for (; e3++ < this[s].length; ) {
          this[f] = (this[f] + 1) % this[s].length;
          const e4 = this[s][this[f]];
          if (e4[C] > this[s][t3][C] && !e4[i] && (t3 = this[f]), 0 === this[f] && (this[Q] = this[Q] - this[B], this[Q] <= 0 && (this[Q] = this[p])), e4[C] >= this[Q] && !e4[i]) return e4;
        }
        return this[Q] = this[s][t3][C], this[f] = t3, this[s][t3];
      }
    };
  }