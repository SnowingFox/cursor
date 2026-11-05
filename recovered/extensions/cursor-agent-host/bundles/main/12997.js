// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 12997 range:3952370..3952880
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12997: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.immediateProvider = void 0;
    const n = r(22301), { setImmediate: s, clearImmediate: o } = n.Immediate;
    t.immediateProvider = { setImmediate(...e2) {
      const { delegate: r2 } = t.immediateProvider;
      return (r2?.setImmediate || s)(...e2);
    }, clearImmediate(e2) {
      const { delegate: r2 } = t.immediateProvider;
      return (r2?.clearImmediate || o)(e2);
    }, delegate: void 0 };
  }