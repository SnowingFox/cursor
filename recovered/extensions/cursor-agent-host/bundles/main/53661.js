// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 53661 range:8581966..8582547
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53661: (e, t, r) => {
    const { kFree: n, kConnected: s, kPending: o, kQueued: i, kRunning: a, kSize: c } = r(15532), l = /* @__PURE__ */ Symbol("pool");
    e.exports = class {
      constructor(e2) {
        this[l] = e2;
      }
      get connected() {
        return this[l][s];
      }
      get free() {
        return this[l][n];
      }
      get pending() {
        return this[l][o];
      }
      get queued() {
        return this[l][i];
      }
      get running() {
        return this[l][a];
      }
      get size() {
        return this[l][c];
      }
    };
  }