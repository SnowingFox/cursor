// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 5826 range:47105..47988
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5826: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.withLatestFrom = void 0;
    const n = r(51078), o = r(44896), s = r(64462), i = r(25619);
    t.withLatestFrom = function(...e2) {
      const t2 = (0, i.popResultSelector)(e2);
      return (r2) => new n.Observable((i2) => {
        const a = e2.length, l = new Array(a);
        let c = e2.map(() => false), u = false;
        for (let t3 = 0; t3 < a; t3++) (0, n.from)(e2[t3]).subscribe((0, n.operate)({ destination: i2, next: (e3) => {
          l[t3] = e3, u || c[t3] || (c[t3] = true, (u = c.every(o.identity)) && (c = null));
        }, complete: s.noop }));
        r2.subscribe((0, n.operate)({ destination: i2, next: (e3) => {
          if (u) {
            const r3 = [e3, ...l];
            i2.next(t2 ? t2(...r3) : r3);
          }
        } }));
      });
    };
  }