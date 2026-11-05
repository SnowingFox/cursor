// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1531 range:177429..178162
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1531: (e2, a2, n2) => {
    "use strict";
    const { kConnected: t2, kSize: s2 } = n2(8832);
    class o2 {
      constructor(e3) {
        this.value = e3;
      }
      deref() {
        return 0 === this.value[t2] && 0 === this.value[s2] ? void 0 : this.value;
      }
    }
    class r2 {
      constructor(e3) {
        this.finalizer = e3;
      }
      register(e3, a3) {
        e3.on && e3.on("disconnect", () => {
          0 === e3[t2] && 0 === e3[s2] && this.finalizer(a3);
        });
      }
    }
    e2.exports = function() {
      return process.env.NODE_V8_COVERAGE ? { WeakRef: o2, FinalizationRegistry: r2 } : { WeakRef: global.WeakRef || o2, FinalizationRegistry: global.FinalizationRegistry || r2 };
    };
  }