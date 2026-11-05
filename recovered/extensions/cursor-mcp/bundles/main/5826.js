// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5826 range:446875..447778
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5826: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.withLatestFrom = void 0;
    const n2 = r2(1078), o2 = r2(4896), s2 = r2(4462), i2 = r2(5619);
    t2.withLatestFrom = function(...e3) {
      const t3 = (0, i2.popResultSelector)(e3);
      return (r3) => new n2.Observable((i3) => {
        const a2 = e3.length, c = new Array(a2);
        let u = e3.map(() => false), l = false;
        for (let t4 = 0; t4 < a2; t4++) (0, n2.from)(e3[t4]).subscribe((0, n2.operate)({ destination: i3, next: (e4) => {
          c[t4] = e4, l || u[t4] || (u[t4] = true, (l = u.every(o2.identity)) && (u = null));
        }, complete: s2.noop }));
        r3.subscribe((0, n2.operate)({ destination: i3, next: (e4) => {
          if (l) {
            const r4 = [e4, ...c];
            i3.next(t3 ? t3(...r4) : r4);
          }
        } }));
      });
    };
  }