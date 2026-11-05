// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 35665 range:2944586..2945607
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35665: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.forkJoin = void 0;
    const n = r(51078), s = r(6800), o = r(25619), i = r(65683), a = r(60845), c = r(50231);
    t.forkJoin = function(...e2) {
      const t2 = (0, o.popResultSelector)(e2), { args: r2, keys: l } = (0, s.argsArgArrayOrObject)(e2), u = new n.Observable((e3) => {
        const { length: t3 } = r2;
        if (!t3) return void e3.complete();
        const s2 = new Array(t3);
        let o2 = t3, i2 = t3;
        for (let u2 = 0; u2 < t3; u2++) {
          let t4 = false;
          (0, n.from)(r2[u2]).subscribe((0, n.operate)({ destination: e3, next: (e4) => {
            t4 || (t4 = true, i2--), s2[u2] = e4;
          }, complete: () => o2--, finalize: () => {
            o2 && t4 || (0 === i2 ? (e3.next(l ? (0, a.createObject)(l, s2) : s2), e3.complete()) : e3.error(new c.EmptyError()));
          } }));
        }
      });
      return t2 ? (0, i.mapOneOrManyArgs)(t2)(u) : u;
    };
  }