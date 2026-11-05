// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 76409 range:7267817..7268169
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76409: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.concat = void 0;
    const n = r(51078), o = r(3006), s = r(25619), i = r(69880);
    t.concat = function(...e2) {
      const t2 = (0, s.popScheduler)(e2);
      return (0, o.concatAll)()(t2 ? (0, i.scheduled)(e2, t2) : (0, n.from)(e2));
    };
  }