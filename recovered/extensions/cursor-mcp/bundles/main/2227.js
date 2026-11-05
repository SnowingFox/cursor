// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2227 range:200976..201621
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2227: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.sample = void 0;
    const n2 = r2(1078), o2 = r2(4462);
    t2.sample = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let s2 = false, i2 = null;
        t3.subscribe((0, n2.operate)({ destination: r3, next: (e4) => {
          s2 = true, i2 = e4;
        } })), (0, n2.from)(e3).subscribe((0, n2.operate)({ destination: r3, next: () => {
          if (s2) {
            s2 = false;
            const e4 = i2;
            i2 = null, r3.next(e4);
          }
        }, complete: o2.noop }));
      });
    };
  }