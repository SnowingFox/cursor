// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 12739 range:3951895..3952368
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