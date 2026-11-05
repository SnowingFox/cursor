// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5543 range:549145..550139
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5543: (e2, t2, A2) => {
    "use strict";
    const { promisify: n2 } = A2(9023), r2 = A2(4003), { buildMockDispatch: o2 } = A2(76), { kDispatches: s, kMockAgent: i, kClose: a, kOriginalClose: c, kOrigin: l, kOriginalDispatch: u, kConnected: g } = A2(3192), { MockInterceptor: E } = A2(3494), h = A2(8832), { InvalidArgumentError: d } = A2(7902);
    class I extends r2 {
      constructor(e3, t3) {
        if (super(e3, t3), !t3 || !t3.agent || "function" != typeof t3.agent.dispatch) throw new d("Argument opts.agent must implement Agent");
        this[i] = t3.agent, this[l] = e3, this[s] = [], this[g] = 1, this[u] = this.dispatch, this[c] = this.close.bind(this), this.dispatch = o2.call(this), this.close = this[a];
      }
      get [h.kConnected]() {
        return this[g];
      }
      intercept(e3) {
        return new E(e3, this[s]);
      }
      async [a]() {
        await n2(this[c])(), this[g] = 0, this[i][h.kClients].delete(this[l]);
      }
    }
    e2.exports = I;
  }