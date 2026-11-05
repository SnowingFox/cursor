// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1531 range:168594..169324
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1531: (e2, t2, A2) => {
    "use strict";
    const { kConnected: n2, kSize: r2 } = A2(8832);
    class o2 {
      constructor(e3) {
        this.value = e3;
      }
      deref() {
        return 0 === this.value[n2] && 0 === this.value[r2] ? void 0 : this.value;
      }
    }
    class s {
      constructor(e3) {
        this.finalizer = e3;
      }
      register(e3, t3) {
        e3.on && e3.on("disconnect", () => {
          0 === e3[n2] && 0 === e3[r2] && this.finalizer(t3);
        });
      }
    }
    e2.exports = function() {
      return process.env.NODE_V8_COVERAGE ? { WeakRef: o2, FinalizationRegistry: s } : { WeakRef: global.WeakRef || o2, FinalizationRegistry: global.FinalizationRegistry || s };
    };
  }