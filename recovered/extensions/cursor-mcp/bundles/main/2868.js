// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2868 range:224379..225182
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2868: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.bufferCount = void 0;
    const n2 = r2(1078), o2 = r2(5143);
    t2.bufferCount = function(e3, t3 = null) {
      return t3 = t3 ?? e3, (r3) => new n2.Observable((s2) => {
        let i2 = [], a2 = 0;
        r3.subscribe((0, n2.operate)({ destination: s2, next: (r4) => {
          let n3 = null;
          a2++ % t3 === 0 && i2.push([]);
          for (const t4 of i2) t4.push(r4), e3 <= t4.length && (n3 = n3 ?? [], n3.push(t4));
          if (n3) for (const e4 of n3) (0, o2.arrRemove)(i2, e4), s2.next(e4);
        }, complete: () => {
          for (const e4 of i2) s2.next(e4);
          s2.complete();
        }, finalize: () => {
          i2 = null;
        } }));
      });
    };
  }