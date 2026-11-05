// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 84191 range:11996732..11997450
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
84191: (e, t, r) => {
    "use strict";
    const { kConnected: n, kSize: s } = r(15532);
    class o {
      constructor(e2) {
        this.value = e2;
      }
      deref() {
        return 0 === this.value[n] && 0 === this.value[s] ? void 0 : this.value;
      }
    }
    class i {
      constructor(e2) {
        this.finalizer = e2;
      }
      register(e2, t2) {
        e2.on && e2.on("disconnect", () => {
          0 === e2[n] && 0 === e2[s] && this.finalizer(t2);
        });
      }
    }
    e.exports = function() {
      return process.env.NODE_V8_COVERAGE ? { WeakRef: o, FinalizationRegistry: i } : { WeakRef: global.WeakRef || o, FinalizationRegistry: global.FinalizationRegistry || i };
    };
  }