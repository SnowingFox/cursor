// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 98442 range:7920708..7921041
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98442: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.onErrorResumeNextWith = void 0;
    const n = r(79031), o = r(45414);
    t.onErrorResumeNextWith = function(...e2) {
      const t2 = (0, n.argsOrArgArray)(e2);
      return (e3) => (0, o.onErrorResumeNext)(e3, ...t2);
    };
  }