// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 12997 range:470891..471401
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12997: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.immediateProvider = void 0;
    const n = r(22301), { setImmediate: o, clearImmediate: s } = n.Immediate;
    t.immediateProvider = { setImmediate(...e2) {
      const { delegate: r2 } = t.immediateProvider;
      return (r2?.setImmediate || o)(...e2);
    }, clearImmediate(e2) {
      const { delegate: r2 } = t.immediateProvider;
      return (r2?.clearImmediate || s)(e2);
    }, delegate: void 0 };
  }