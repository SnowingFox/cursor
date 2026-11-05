// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 50231 range:1477682..1477960
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