// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9904 range:919681..920196
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9904: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.scanInternals = void 0;
    const n2 = r2(1078);
    t2.scanInternals = function(e3, t3, r3, o2, s2, i2, a2) {
      let c = r3, u = t3, l = 0;
      i2.subscribe((0, n2.operate)({ destination: a2, next: (t4) => {
        const r4 = l++;
        u = c ? e3(u, t4, r4) : (c = true, t4), o2 && a2.next(u);
      }, complete: s2 ? () => {
        c && a2.next(u), a2.complete();
      } : void 0 }));
    };
  }