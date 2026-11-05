// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 72698 range:2314025..2314895
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
72698: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.audit = void 0;
    const n = r(51078);
    t.audit = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = false, s = null, i = null, a = false;
        const l = () => {
          if (i?.unsubscribe(), i = null, o) {
            o = false;
            const e3 = s;
            s = null, r2.next(e3);
          }
          a && r2.complete();
        }, c = () => {
          i = null, a && r2.complete();
        };
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => {
          o = true, s = t3, i || (0, n.from)(e2(t3)).subscribe(i = (0, n.operate)({ destination: r2, next: l, complete: c }));
        }, complete: () => {
          a = true, (!o || !i || i.closed) && r2.complete();
        } }));
      });
    };
  }