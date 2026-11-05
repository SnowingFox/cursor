// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 2721 range:498961..499555
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2721: (e2, a2, n2) => {
    const { kFree: t2, kConnected: s2, kPending: o2, kQueued: r2, kRunning: i2, kSize: l } = n2(8832), d = /* @__PURE__ */ Symbol("pool");
    e2.exports = class {
      constructor(e3) {
        this[d] = e3;
      }
      get connected() {
        return this[d][s2];
      }
      get free() {
        return this[d][t2];
      }
      get pending() {
        return this[d][o2];
      }
      get queued() {
        return this[d][r2];
      }
      get running() {
        return this[d][i2];
      }
      get size() {
        return this[d][l];
      }
    };
  }