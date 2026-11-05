// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 12739 range:875393..875866
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12739: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.NoopContextManager = void 0;
    const n = r(92954);
    t.NoopContextManager = class {
      active() {
        return n.ROOT_CONTEXT;
      }
      with(e2, t2, r2, ...n2) {
        return t2.call(r2, ...n2);
      }
      bind(e2, t2) {
        return t2;
      }
      enable() {
        return this;
      }
      disable() {
        return this;
      }
    };
  }