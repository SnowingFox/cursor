// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 1453 range:23981..24570
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1453: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.last = void 0;
    const n = r(51078), o = r(50231);
    t.last = function(e2, t2) {
      const r2 = arguments.length >= 2;
      return (s) => new n.Observable((i) => {
        let a, l = 0, c = false;
        s.subscribe((0, n.operate)({ destination: i, next(t3) {
          e2 && !e2(t3, l++, s) || (c = true, a = t3);
        }, complete() {
          c ? (i.next(a), i.complete()) : r2 ? (i.next(t2), i.complete()) : i.error(new o.EmptyError());
        } }));
      });
    };
  }