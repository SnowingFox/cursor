// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6410 range:474557..475205
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6410: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.generate = void 0;
    const n2 = r2(4896), o2 = r2(2901), s2 = r2(3737), i2 = r2(7096);
    t2.generate = function(e3, t3, r3, a2, c) {
      let u, l;
      function* d() {
        for (let e4 = l; !t3 || t3(e4); e4 = r3(e4)) yield u(e4);
      }
      return 1 === arguments.length ? { initialState: l, condition: t3, iterate: r3, resultSelector: u = n2.identity, scheduler: c } = e3 : (l = e3, !a2 || (0, o2.isScheduler)(a2) ? (u = n2.identity, c = a2) : u = a2), (0, s2.defer)(c ? () => (0, i2.scheduleIterable)(d(), c) : d);
    };
  }