// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8843 range:5352437..5353436
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8843: (t2, e2, r2) => {
    "use strict";
    const { promisify: n2 } = r2(9023), s2 = r2(6215), { buildMockDispatch: i2 } = r2(4008), { kDispatches: o2, kMockAgent: a, kClose: u, kOriginalClose: c, kOrigin: l, kOriginalDispatch: m, kConnected: d } = r2(1476), { MockInterceptor: f } = r2(3834), p = r2(5532), { InvalidArgumentError: h } = r2(8762);
    class g extends s2 {
      constructor(t3, e3) {
        if (super(t3, e3), !e3 || !e3.agent || "function" != typeof e3.agent.dispatch) throw new h("Argument opts.agent must implement Agent");
        this[a] = e3.agent, this[l] = t3, this[o2] = [], this[d] = 1, this[m] = this.dispatch, this[c] = this.close.bind(this), this.dispatch = i2.call(this), this.close = this[u];
      }
      get [p.kConnected]() {
        return this[d];
      }
      intercept(t3) {
        return new f(t3, this[o2]);
      }
      async [u]() {
        await n2(this[c])(), this[d] = 0, this[a][p.kClients].delete(this[l]);
      }
    }
    t2.exports = g;
  }