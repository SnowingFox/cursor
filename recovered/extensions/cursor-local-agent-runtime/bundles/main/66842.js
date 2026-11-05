// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 66842 range:2003197..2004202
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66842: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.windowCount = void 0;
    const n = r(51078), o = r(83043);
    t.windowCount = function(e2, t2 = 0) {
      const r2 = t2 > 0 ? t2 : e2;
      return (t3) => new n.Observable((s) => {
        let i = [new o.Subject()], a = [], l = 0;
        s.next(i[0].asObservable()), t3.subscribe((0, n.operate)({ destination: s, next: (t4) => {
          for (const e3 of i) e3.next(t4);
          const n2 = l - e2 + 1;
          if (n2 >= 0 && n2 % r2 === 0 && i.shift().complete(), ++l % r2 === 0) {
            const e3 = new o.Subject();
            i.push(e3), s.next(e3.asObservable());
          }
        }, error: (e3) => {
          for (; i.length > 0; ) i.shift().error(e3);
          s.error(e3);
        }, complete: () => {
          for (; i.length > 0; ) i.shift().complete();
          s.complete();
        }, finalize: () => {
          a = null, i = null;
        } }));
      });
    };
  }