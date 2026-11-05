// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9782 range:911884..912868
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9782: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.sequenceEqual = void 0;
    const n2 = r2(1078);
    t2.sequenceEqual = function(e3, t3 = (e4, t4) => e4 === t4) {
      return (r3) => new n2.Observable((o2) => {
        const s2 = { buffer: [], complete: false }, i2 = { buffer: [], complete: false }, a2 = (e4) => {
          o2.next(e4), o2.complete();
        }, c = (e4, r4) => {
          const s3 = (0, n2.operate)({ destination: o2, next: (n3) => {
            const { buffer: o3, complete: s4 } = r4;
            0 === o3.length ? s4 ? a2(false) : e4.buffer.push(n3) : !t3(n3, o3.shift()) && a2(false);
          }, complete: () => {
            e4.complete = true;
            const { complete: t4, buffer: n3 } = r4;
            t4 && a2(0 === n3.length), s3?.unsubscribe();
          } });
          return s3;
        };
        r3.subscribe(c(s2, i2)), (0, n2.from)(e3).subscribe(c(i2, s2));
      });
    };
  }