// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 90188 range:7712875..7713166
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90188: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.findIndex = void 0;
    const n = r(51078), o = r(39730);
    t.findIndex = function(e2) {
      return (t2) => new n.Observable((r2) => (0, o.createFind)(e2, "index", t2, r2));
    };
  }