// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 47529 range:1417354..1417930
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47529: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.distinctUntilChanged = void 0;
    const n = r(44896), o = r(51078);
    function s(e2, t2) {
      return e2 === t2;
    }
    t.distinctUntilChanged = function(e2, t2 = n.identity) {
      return e2 = e2 ?? s, (r2) => new o.Observable((n2) => {
        let s2, i = true;
        r2.subscribe((0, o.operate)({ destination: n2, next: (r3) => {
          const o2 = t2(r3);
          !i && e2(s2, o2) || (i = false, s2 = o2, n2.next(r3));
        } }));
      });
    };
  }