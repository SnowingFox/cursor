// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 14220 range:3987944..3991307
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
14220: (e, t, r) => {
    "use strict";
    const { BalancedPoolMissingUpstreamError: n, InvalidArgumentError: s } = r(48762), { PoolBase: o, kClients: i, kNeedDrain: a, kAddClient: c, kRemoveClient: l, kGetDispatcher: u } = r(53802), d = r(26215), { kUrl: p, kInterceptors: m } = r(15532), { parseOrigin: h } = r(83589), f = /* @__PURE__ */ Symbol("factory"), g = /* @__PURE__ */ Symbol("options"), y = /* @__PURE__ */ Symbol("kGreatestCommonDivisor"), w = /* @__PURE__ */ Symbol("kCurrentWeight"), v = /* @__PURE__ */ Symbol("kIndex"), _ = /* @__PURE__ */ Symbol("kWeight"), A = /* @__PURE__ */ Symbol("kMaxWeightPerServer"), S = /* @__PURE__ */ Symbol("kErrorPenalty");
    function b(e2, t2) {
      return 0 === t2 ? e2 : b(t2, e2 % t2);
    }
    function E(e2, t2) {
      return new d(e2, t2);
    }
    e.exports = class extends o {
      constructor(e2 = [], { factory: t2 = E, ...r2 } = {}) {
        if (super(), this[g] = r2, this[v] = -1, this[w] = 0, this[A] = this[g].maxWeightPerServer || 100, this[S] = this[g].errorPenalty || 15, Array.isArray(e2) || (e2 = [e2]), "function" != typeof t2) throw new s("factory must be a function.");
        this[m] = r2.interceptors && r2.interceptors.BalancedPool && Array.isArray(r2.interceptors.BalancedPool) ? r2.interceptors.BalancedPool : [], this[f] = t2;
        for (const t3 of e2) this.addUpstream(t3);
        this._updateBalancedPoolStats();
      }
      addUpstream(e2) {
        const t2 = h(e2).origin;
        if (this[i].find((e3) => e3[p].origin === t2 && true !== e3.closed && true !== e3.destroyed)) return this;
        const r2 = this[f](t2, Object.assign({}, this[g]));
        this[c](r2), r2.on("connect", () => {
          r2[_] = Math.min(this[A], r2[_] + this[S]);
        }), r2.on("connectionError", () => {
          r2[_] = Math.max(1, r2[_] - this[S]), this._updateBalancedPoolStats();
        }), r2.on("disconnect", (...e3) => {
          const t3 = e3[2];
          t3 && "UND_ERR_SOCKET" === t3.code && (r2[_] = Math.max(1, r2[_] - this[S]), this._updateBalancedPoolStats());
        });
        for (const e3 of this[i]) e3[_] = this[A];
        return this._updateBalancedPoolStats(), this;
      }
      _updateBalancedPoolStats() {
        this[y] = this[i].map((e2) => e2[_]).reduce(b, 0);
      }
      removeUpstream(e2) {
        const t2 = h(e2).origin, r2 = this[i].find((e3) => e3[p].origin === t2 && true !== e3.closed && true !== e3.destroyed);
        return r2 && this[l](r2), this;
      }
      get upstreams() {
        return this[i].filter((e2) => true !== e2.closed && true !== e2.destroyed).map((e2) => e2[p].origin);
      }
      [u]() {
        if (0 === this[i].length) throw new n();
        if (!this[i].find((e3) => !e3[a] && true !== e3.closed && true !== e3.destroyed)) return;
        if (this[i].map((e3) => e3[a]).reduce((e3, t3) => e3 && t3, true)) return;
        let e2 = 0, t2 = this[i].findIndex((e3) => !e3[a]);
        for (; e2++ < this[i].length; ) {
          this[v] = (this[v] + 1) % this[i].length;
          const e3 = this[i][this[v]];
          if (e3[_] > this[i][t2][_] && !e3[a] && (t2 = this[v]), 0 === this[v] && (this[w] = this[w] - this[y], this[w] <= 0 && (this[w] = this[A])), e3[_] >= this[w] && !e3[a]) return e3;
        }
        return this[w] = this[i][t2][_], this[v] = t2, this[i][t2];
      }
    };
  }