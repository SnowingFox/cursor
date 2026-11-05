// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 38440 range:1191624..1192067
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38440: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.mergeScan = void 0;
    const n = r(51078), o = r(59935);
    t.mergeScan = function(e2, t2, r2 = 1 / 0) {
      return (s) => new n.Observable((n2) => {
        let i = t2;
        return (0, o.mergeInternals)(s, n2, (t3, r3) => e2(i, t3, r3), r2, (e3) => {
          i = e3;
        }, false, void 0, () => i = null);
      });
    };
  }