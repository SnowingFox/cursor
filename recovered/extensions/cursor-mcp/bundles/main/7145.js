// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7145 range:603576..604075
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7145: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.every = void 0;
    const n2 = r2(1078);
    t2.every = function(e3, t3) {
      return (r3) => new n2.Observable((o2) => {
        let s2 = 0;
        r3.subscribe((0, n2.operate)({ destination: o2, next: (n3) => {
          e3.call(t3, n3, s2++, r3) || (o2.next(false), o2.complete());
        }, complete: () => {
          o2.next(true), o2.complete();
        } }));
      });
    };
  }