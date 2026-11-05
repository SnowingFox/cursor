// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1531 range:162508..163238
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1531: (e2, A2, t2) => {
    "use strict";
    const { kConnected: n2, kSize: r2 } = t2(8832);
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
      register(e3, A3) {
        e3.on && e3.on("disconnect", () => {
          0 === e3[n2] && 0 === e3[r2] && this.finalizer(A3);
        });
      }
    }
    e2.exports = function() {
      return process.env.NODE_V8_COVERAGE ? { WeakRef: o2, FinalizationRegistry: s } : { WeakRef: global.WeakRef || o2, FinalizationRegistry: global.FinalizationRegistry || s };
    };
  }