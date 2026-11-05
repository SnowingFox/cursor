// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 50231 range:8181307..8181585
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50231: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.EmptyError = void 0;
    class r extends Error {
      constructor() {
        super("no elements in sequence"), this.name = "EmptyError";
      }
    }
    t.EmptyError = r;
  }