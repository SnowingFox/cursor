// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2997 range:230282..230805
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2997: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.immediateProvider = void 0;
    const n2 = r2(2301), { setImmediate: o2, clearImmediate: s2 } = n2.Immediate;
    t2.immediateProvider = { setImmediate(...e3) {
      const { delegate: r3 } = t2.immediateProvider;
      return (r3?.setImmediate || o2)(...e3);
    }, clearImmediate(e3) {
      const { delegate: r3 } = t2.immediateProvider;
      return (r3?.clearImmediate || s2)(e3);
    }, delegate: void 0 };
  }