// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 22471 range:643610..643949
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22471: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.toArray = void 0;
    const n = r(78339), o = r(51078), s = (e2, t2) => (e2.push(t2), e2);
    t.toArray = function() {
      return (e2) => new o.Observable((t2) => {
        (0, n.reduce)(s, [])(e2).subscribe(t2);
      });
    };
  }