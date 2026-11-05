// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5120 range:363224..363704
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5120: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.NoopContextManager = void 0;
    const n2 = r2(2954);
    t2.NoopContextManager = class {
      active() {
        return n2.ROOT_CONTEXT;
      }
      with(e3, t3, r3, ...n3) {
        return t3.call(r3, ...n3);
      }
      bind(e3, t3) {
        return t3;
      }
      enable() {
        return this;
      }
      disable() {
        return this;
      }
    };
  }