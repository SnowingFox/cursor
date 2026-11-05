// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 6410 range:51542..52170
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6410: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.generate = void 0;
    const n = r(44896), o = r(82901), s = r(33737), i = r(17096);
    t.generate = function(e2, t2, r2, a, l) {
      let c, u;
      function* d() {
        for (let e3 = u; !t2 || t2(e3); e3 = r2(e3)) yield c(e3);
      }
      return 1 === arguments.length ? { initialState: u, condition: t2, iterate: r2, resultSelector: c = n.identity, scheduler: l } = e2 : (u = e2, !a || (0, o.isScheduler)(a) ? (c = n.identity, l = a) : c = a), (0, s.defer)(l ? () => (0, i.scheduleIterable)(d(), l) : d);
    };
  }