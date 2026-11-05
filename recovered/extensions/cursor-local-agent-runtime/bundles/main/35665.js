// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 35665 range:1050648..1051669
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35665: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.forkJoin = void 0;
    const n = r(51078), o = r(6800), s = r(25619), i = r(65683), a = r(60845), l = r(50231);
    t.forkJoin = function(...e2) {
      const t2 = (0, s.popResultSelector)(e2), { args: r2, keys: c } = (0, o.argsArgArrayOrObject)(e2), u = new n.Observable((e3) => {
        const { length: t3 } = r2;
        if (!t3) return void e3.complete();
        const o2 = new Array(t3);
        let s2 = t3, i2 = t3;
        for (let u2 = 0; u2 < t3; u2++) {
          let t4 = false;
          (0, n.from)(r2[u2]).subscribe((0, n.operate)({ destination: e3, next: (e4) => {
            t4 || (t4 = true, i2--), o2[u2] = e4;
          }, complete: () => s2--, finalize: () => {
            s2 && t4 || (0 === i2 ? (e3.next(c ? (0, a.createObject)(c, o2) : o2), e3.complete()) : e3.error(new l.EmptyError()));
          } }));
        }
      });
      return t2 ? (0, i.mapOneOrManyArgs)(t2)(u) : u;
    };
  }