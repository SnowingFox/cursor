// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 50231 range:3564282..3564560
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