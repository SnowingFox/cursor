// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 2721 range:223740..224330
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2721: (e2, A2, t2) => {
    const { kFree: n2, kConnected: r2, kPending: o2, kQueued: s, kRunning: a, kSize: i } = t2(8832), c = /* @__PURE__ */ Symbol("pool");
    e2.exports = class {
      constructor(e3) {
        this[c] = e3;
      }
      get connected() {
        return this[c][r2];
      }
      get free() {
        return this[c][n2];
      }
      get pending() {
        return this[c][o2];
      }
      get queued() {
        return this[c][s];
      }
      get running() {
        return this[c][a];
      }
      get size() {
        return this[c][i];
      }
    };
  }