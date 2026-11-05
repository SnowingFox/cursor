// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4826 range:744733..745733
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4826: (e2, a2, n2) => {
    "use strict";
    const { promisify: t2 } = n2(9023), s2 = n2(4814), { buildMockDispatch: o2 } = n2(76), { kDispatches: r2, kMockAgent: i2, kClose: l, kOriginalClose: d, kOrigin: m, kOriginalDispatch: c, kConnected: p } = n2(3192), { MockInterceptor: A } = n2(3494), u = n2(8832), { InvalidArgumentError: g } = n2(7902);
    class T extends s2 {
      constructor(e3, a3) {
        if (super(e3, a3), !a3 || !a3.agent || "function" != typeof a3.agent.dispatch) throw new g("Argument opts.agent must implement Agent");
        this[i2] = a3.agent, this[m] = e3, this[r2] = [], this[p] = 1, this[c] = this.dispatch, this[d] = this.close.bind(this), this.dispatch = o2.call(this), this.close = this[l];
      }
      get [u.kConnected]() {
        return this[p];
      }
      intercept(e3) {
        return new A(e3, this[r2]);
      }
      async [l]() {
        await t2(this[d])(), this[p] = 0, this[i2][u.kClients].delete(this[m]);
      }
    }
    e2.exports = T;
  }