// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 39190 range:1210109..1211133
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39190: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.zip = void 0;
    const n = r(51078), o = r(79031), s = r(744), i = r(25619);
    t.zip = function(...e2) {
      const t2 = (0, i.popResultSelector)(e2), r2 = (0, o.argsOrArgArray)(e2);
      return r2.length ? new n.Observable((e3) => {
        let o2 = r2.map(() => []), s2 = r2.map(() => false);
        e3.add(() => {
          o2 = s2 = null;
        });
        for (let i2 = 0; !e3.closed && i2 < r2.length; i2++) (0, n.from)(r2[i2]).subscribe((0, n.operate)({ destination: e3, next: (r3) => {
          if (o2[i2].push(r3), o2.every((e4) => e4.length)) {
            const r4 = o2.map((e4) => e4.shift());
            e3.next(t2 ? t2(...r4) : r4), o2.some((e4, t3) => !e4.length && s2[t3]) && e3.complete();
          }
        }, complete: () => {
          s2[i2] = true, !o2[i2].length && e3.complete();
        } }));
        return () => {
          o2 = s2 = null;
        };
      }) : s.EMPTY;
    };
  }