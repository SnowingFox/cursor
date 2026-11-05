// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 36887 range:1110287..1110561
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36887: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.NoopTracerProvider = void 0;
    const n = r(91866);
    t.NoopTracerProvider = class {
      getTracer(e2, t2, r2) {
        return new n.NoopTracer();
      }
    };
  }