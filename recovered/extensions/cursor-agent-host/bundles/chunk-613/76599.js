// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 76599 range:430064..431010
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76599: (A, e, t) => {
  "use strict";
  const { promisify: r } = t(57975), s = t(3817), { buildMockDispatch: o } = t(61452), { kDispatches: n, kMockAgent: i, kClose: a, kOriginalClose: Q, kOrigin: g, kOriginalDispatch: E, kConnected: B } = t(53304), { MockInterceptor: c } = t(678), I = t(76992), { InvalidArgumentError: C } = t(38238);
  class h extends s {
    constructor(A2, e2) {
      if (super(A2, e2), !e2 || !e2.agent || "function" != typeof e2.agent.dispatch) throw new C("Argument opts.agent must implement Agent");
      this[i] = e2.agent, this[g] = A2, this[n] = [], this[B] = 1, this[E] = this.dispatch, this[Q] = this.close.bind(this), this.dispatch = o.call(this), this.close = this[a];
    }
    get [I.kConnected]() {
      return this[B];
    }
    intercept(A2) {
      return new c(A2, this[n]);
    }
    async [a]() {
      await r(this[Q])(), this[B] = 0, this[i][I.kClients].delete(this[g]);
    }
  }
  A.exports = h;
}