// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1531 range:166699..167429
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1531: (e2, n2, t2) => {
    "use strict";
    const { kConnected: a2, kSize: s2 } = t2(8832);
    class o2 {
      constructor(e3) {
        this.value = e3;
      }
      deref() {
        return 0 === this.value[a2] && 0 === this.value[s2] ? void 0 : this.value;
      }
    }
    class r {
      constructor(e3) {
        this.finalizer = e3;
      }
      register(e3, n3) {
        e3.on && e3.on("disconnect", () => {
          0 === e3[a2] && 0 === e3[s2] && this.finalizer(n3);
        });
      }
    }
    e2.exports = function() {
      return process.env.NODE_V8_COVERAGE ? { WeakRef: o2, FinalizationRegistry: r } : { WeakRef: global.WeakRef || o2, FinalizationRegistry: global.FinalizationRegistry || r };
    };
  }