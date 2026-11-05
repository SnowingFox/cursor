// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 98532 range:11718277..11718552
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98532: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    class r extends Error {
      constructor(e2) {
        super("validation failed"), this.errors = e2, this.ajv = this.validation = true;
      }
    }
    t.default = r;
  }