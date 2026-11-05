// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4826 range:469912..470906
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4826: (e2, n2, t2) => {
    "use strict";
    const { promisify: a2 } = t2(9023), s2 = t2(4814), { buildMockDispatch: o2 } = t2(76), { kDispatches: r, kMockAgent: i, kClose: A, kOriginalClose: c, kOrigin: l, kOriginalDispatch: d, kConnected: m } = t2(3192), { MockInterceptor: u } = t2(3494), g = t2(8832), { InvalidArgumentError: p } = t2(7902);
    class E extends s2 {
      constructor(e3, n3) {
        if (super(e3, n3), !n3 || !n3.agent || "function" != typeof n3.agent.dispatch) throw new p("Argument opts.agent must implement Agent");
        this[i] = n3.agent, this[l] = e3, this[r] = [], this[m] = 1, this[d] = this.dispatch, this[c] = this.close.bind(this), this.dispatch = o2.call(this), this.close = this[A];
      }
      get [g.kConnected]() {
        return this[m];
      }
      intercept(e3) {
        return new u(e3, this[r]);
      }
      async [A]() {
        await a2(this[c])(), this[m] = 0, this[i][g.kClients].delete(this[l]);
      }
    }
    e2.exports = E;
  }