// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 6410 range:434961..435589
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6410: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.generate = void 0;
    const n = r(44896), s = r(82901), o = r(33737), i = r(17096);
    t.generate = function(e2, t2, r2, a, c) {
      let l, u;
      function* d() {
        for (let e3 = u; !t2 || t2(e3); e3 = r2(e3)) yield l(e3);
      }
      return 1 === arguments.length ? { initialState: u, condition: t2, iterate: r2, resultSelector: l = n.identity, scheduler: c } = e2 : (u = e2, !a || (0, s.isScheduler)(a) ? (l = n.identity, c = a) : l = a), (0, o.defer)(c ? () => (0, i.scheduleIterable)(d(), c) : d);
    };
  }