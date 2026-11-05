// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8532 range:777819..778099
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8532: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    class r2 extends Error {
      constructor(e3) {
        super("validation failed"), this.errors = e3, this.ajv = this.validation = true;
      }
    }
    t2.default = r2;
  }