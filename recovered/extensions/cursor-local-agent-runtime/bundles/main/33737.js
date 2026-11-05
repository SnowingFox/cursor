// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 33737 range:1030149..1030422
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33737: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.defer = void 0;
    const n = r(51078);
    t.defer = function(e2) {
      return new n.Observable((t2) => {
        (0, n.from)(e2()).subscribe(t2);
      });
    };
  }