// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2721 range:227931..228521
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2721: (e2, n2, t2) => {
    const { kFree: a2, kConnected: s2, kPending: o2, kQueued: r, kRunning: i, kSize: A } = t2(8832), c = /* @__PURE__ */ Symbol("pool");
    e2.exports = class {
      constructor(e3) {
        this[c] = e3;
      }
      get connected() {
        return this[c][s2];
      }
      get free() {
        return this[c][a2];
      }
      get pending() {
        return this[c][o2];
      }
      get queued() {
        return this[c][r];
      }
      get running() {
        return this[c][i];
      }
      get size() {
        return this[c][A];
      }
    };
  }