// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 5826 range:430101..430984
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5826: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.withLatestFrom = void 0;
    const n = r(51078), s = r(44896), o = r(64462), i = r(25619);
    t.withLatestFrom = function(...e2) {
      const t2 = (0, i.popResultSelector)(e2);
      return (r2) => new n.Observable((i2) => {
        const a = e2.length, c = new Array(a);
        let l = e2.map(() => false), u = false;
        for (let t3 = 0; t3 < a; t3++) (0, n.from)(e2[t3]).subscribe((0, n.operate)({ destination: i2, next: (e3) => {
          c[t3] = e3, u || l[t3] || (l[t3] = true, (u = l.every(s.identity)) && (l = null));
        }, complete: o.noop }));
        r2.subscribe((0, n.operate)({ destination: i2, next: (e3) => {
          if (u) {
            const r3 = [e3, ...c];
            i2.next(t2 ? t2(...r3) : r3);
          }
        } }));
      });
    };
  }