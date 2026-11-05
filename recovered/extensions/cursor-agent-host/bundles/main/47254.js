// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 47254 range:7968190..7969176
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47254: (e, t, r) => {
    "use strict";
    const { promisify: n } = r(39023), s = r(6602), { buildMockDispatch: o } = r(34008), { kDispatches: i, kMockAgent: a, kClose: c, kOriginalClose: l, kOrigin: u, kOriginalDispatch: d, kConnected: p } = r(51476), { MockInterceptor: m } = r(73834), h = r(15532), { InvalidArgumentError: f } = r(48762);
    class g extends s {
      constructor(e2, t2) {
        if (super(e2, t2), !t2 || !t2.agent || "function" != typeof t2.agent.dispatch) throw new f("Argument opts.agent must implement Agent");
        this[a] = t2.agent, this[u] = e2, this[i] = [], this[p] = 1, this[d] = this.dispatch, this[l] = this.close.bind(this), this.dispatch = o.call(this), this.close = this[c];
      }
      get [h.kConnected]() {
        return this[p];
      }
      intercept(e2) {
        return new m(e2, this[i]);
      }
      async [c]() {
        await n(this[l])(), this[p] = 0, this[a][h.kClients].delete(this[u]);
      }
    }
    e.exports = g;
  }