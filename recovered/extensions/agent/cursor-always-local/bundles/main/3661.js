// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3661 range:987434..988026
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3661: (t2, e2, r2) => {
    const { kFree: n2, kConnected: s2, kPending: i2, kQueued: o2, kRunning: a, kSize: u } = r2(5532), c = /* @__PURE__ */ Symbol("pool");
    t2.exports = class {
      constructor(t3) {
        this[c] = t3;
      }
      get connected() {
        return this[c][s2];
      }
      get free() {
        return this[c][n2];
      }
      get pending() {
        return this[c][i2];
      }
      get queued() {
        return this[c][o2];
      }
      get running() {
        return this[c][a];
      }
      get size() {
        return this[c][u];
      }
    };
  }