// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 34589 range:1044345..1044740
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34589: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.using = void 0;
    const n = r(51078), o = r(744);
    t.using = function(e2, t2) {
      return new n.Observable((r2) => {
        const s = e2(), i = t2(s);
        return (i ? (0, n.from)(i) : o.EMPTY).subscribe(r2), () => {
          s && s.unsubscribe();
        };
      });
    };
  }