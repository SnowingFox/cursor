// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 19904 range:584824..585321
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
19904: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scanInternals = void 0;
    const n = r(51078);
    t.scanInternals = function(e2, t2, r2, o, s, i, a) {
      let l = r2, c = t2, u = 0;
      i.subscribe((0, n.operate)({ destination: a, next: (t3) => {
        const r3 = u++;
        c = l ? e2(c, t3, r3) : (l = true, t3), o && a.next(c);
      }, complete: s ? () => {
        l && a.next(c), a.complete();
      } : void 0 }));
    };
  }