// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2572 range:212946..213506
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2572: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.skipUntil = void 0;
    const n2 = r2(1078), o2 = r2(4462);
    t2.skipUntil = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let s2 = false;
        const i2 = (0, n2.operate)({ destination: r3, next: () => {
          i2?.unsubscribe(), s2 = true;
        }, complete: o2.noop });
        (0, n2.from)(e3).subscribe(i2), t3.subscribe((0, n2.operate)({ destination: r3, next: (e4) => s2 && r3.next(e4) }));
      });
    };
  }