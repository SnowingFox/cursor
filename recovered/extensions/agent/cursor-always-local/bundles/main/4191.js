// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4191 range:1063853..1064586
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4191: (t2, e2, r2) => {
    "use strict";
    const { kConnected: n2, kSize: s2 } = r2(5532);
    class i2 {
      constructor(t3) {
        this.value = t3;
      }
      deref() {
        return 0 === this.value[n2] && 0 === this.value[s2] ? void 0 : this.value;
      }
    }
    class o2 {
      constructor(t3) {
        this.finalizer = t3;
      }
      register(t3, e3) {
        t3.on && t3.on("disconnect", () => {
          0 === t3[n2] && 0 === t3[s2] && this.finalizer(e3);
        });
      }
    }
    t2.exports = function() {
      return process.env.NODE_V8_COVERAGE ? { WeakRef: i2, FinalizationRegistry: o2 } : { WeakRef: global.WeakRef || i2, FinalizationRegistry: global.FinalizationRegistry || o2 };
    };
  }