// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2721 range:223898..224492
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2721: (e2, n2, a2) => {
    const { kFree: t2, kConnected: s2, kPending: o2, kQueued: r2, kRunning: i2, kSize: A } = a2(8832), l = /* @__PURE__ */ Symbol("pool");
    e2.exports = class {
      constructor(e3) {
        this[l] = e3;
      }
      get connected() {
        return this[l][s2];
      }
      get free() {
        return this[l][t2];
      }
      get pending() {
        return this[l][o2];
      }
      get queued() {
        return this[l][r2];
      }
      get running() {
        return this[l][i2];
      }
      get size() {
        return this[l][A];
      }
    };
  }