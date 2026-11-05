// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 12997 range:875868..876378
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