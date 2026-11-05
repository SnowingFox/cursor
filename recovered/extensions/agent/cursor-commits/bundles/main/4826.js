// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4826 range:438978..439978
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4826: (e2, n2, a2) => {
    "use strict";
    const { promisify: t2 } = a2(9023), s2 = a2(4814), { buildMockDispatch: o2 } = a2(76), { kDispatches: r2, kMockAgent: i2, kClose: A, kOriginalClose: l, kOrigin: c, kOriginalDispatch: m, kConnected: d } = a2(3192), { MockInterceptor: g } = a2(3494), u = a2(8832), { InvalidArgumentError: E } = a2(7902);
    class p extends s2 {
      constructor(e3, n3) {
        if (super(e3, n3), !n3 || !n3.agent || "function" != typeof n3.agent.dispatch) throw new E("Argument opts.agent must implement Agent");
        this[i2] = n3.agent, this[c] = e3, this[r2] = [], this[d] = 1, this[m] = this.dispatch, this[l] = this.close.bind(this), this.dispatch = o2.call(this), this.close = this[A];
      }
      get [u.kConnected]() {
        return this[d];
      }
      intercept(e3) {
        return new g(e3, this[r2]);
      }
      async [A]() {
        await t2(this[l])(), this[d] = 0, this[i2][u.kClients].delete(this[c]);
      }
    }
    e2.exports = p;
  }