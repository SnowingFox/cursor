// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 74179 range:7208902..7209506
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74179: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.first = void 0;
    const n = r(51078), o = r(50231);
    t.first = function(e2, t2) {
      const r2 = arguments.length >= 2;
      return (s) => new n.Observable((i) => {
        let a = 0;
        const l = (0, n.operate)({ destination: i, next: (t3) => {
          (!e2 || e2(t3, a++, s)) && (l.unsubscribe(), i.next(t3), i.complete());
        }, complete: () => {
          r2 ? (i.next(t2), i.complete()) : i.error(new o.EmptyError());
        } });
        s.subscribe(l);
      });
    };
  }