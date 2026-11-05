// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 39190 range:3111665..3112689
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39190: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.zip = void 0;
    const n = r(51078), s = r(79031), o = r(744), i = r(25619);
    t.zip = function(...e2) {
      const t2 = (0, i.popResultSelector)(e2), r2 = (0, s.argsOrArgArray)(e2);
      return r2.length ? new n.Observable((e3) => {
        let s2 = r2.map(() => []), o2 = r2.map(() => false);
        e3.add(() => {
          s2 = o2 = null;
        });
        for (let i2 = 0; !e3.closed && i2 < r2.length; i2++) (0, n.from)(r2[i2]).subscribe((0, n.operate)({ destination: e3, next: (r3) => {
          if (s2[i2].push(r3), s2.every((e4) => e4.length)) {
            const r4 = s2.map((e4) => e4.shift());
            e3.next(t2 ? t2(...r4) : r4), s2.some((e4, t3) => !e4.length && o2[t3]) && e3.complete();
          }
        }, complete: () => {
          o2[i2] = true, !s2[i2].length && e3.complete();
        } }));
        return () => {
          s2 = o2 = null;
        };
      }) : o.EMPTY;
    };
  }