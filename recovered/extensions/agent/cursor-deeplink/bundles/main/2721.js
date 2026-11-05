// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2721 range:250064..250654
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2721: (e2, t2, A2) => {
    const { kFree: n2, kConnected: r2, kPending: o2, kQueued: s, kRunning: i, kSize: a } = A2(8832), c = /* @__PURE__ */ Symbol("pool");
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
        return this[c][i];
      }
      get size() {
        return this[c][a];
      }
    };
  }