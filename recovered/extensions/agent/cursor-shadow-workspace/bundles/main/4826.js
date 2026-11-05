// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4826 range:438586..439580
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4826: (e2, A2, t2) => {
    "use strict";
    const { promisify: n2 } = t2(9023), r2 = t2(4814), { buildMockDispatch: o2 } = t2(76), { kDispatches: s, kMockAgent: a, kClose: i, kOriginalClose: c, kOrigin: l, kOriginalDispatch: g, kConnected: E } = t2(3192), { MockInterceptor: u } = t2(3494), d = t2(8832), { InvalidArgumentError: I } = t2(7902);
    class h extends r2 {
      constructor(e3, A3) {
        if (super(e3, A3), !A3 || !A3.agent || "function" != typeof A3.agent.dispatch) throw new I("Argument opts.agent must implement Agent");
        this[a] = A3.agent, this[l] = e3, this[s] = [], this[E] = 1, this[g] = this.dispatch, this[c] = this.close.bind(this), this.dispatch = o2.call(this), this.close = this[i];
      }
      get [d.kConnected]() {
        return this[E];
      }
      intercept(e3) {
        return new u(e3, this[s]);
      }
      async [i]() {
        await n2(this[c])(), this[E] = 0, this[a][d.kClients].delete(this[l]);
      }
    }
    e2.exports = h;
  }