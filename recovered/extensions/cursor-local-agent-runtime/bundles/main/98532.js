// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 98532 range:7924256..7924531
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