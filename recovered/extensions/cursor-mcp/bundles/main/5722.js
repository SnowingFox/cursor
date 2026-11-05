// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5722 range:441052..441909
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5722: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.debounce = void 0;
    const n2 = r2(1078), o2 = r2(4462);
    t2.debounce = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let s2 = false, i2 = null, a2 = null;
        const c = () => {
          if (a2?.unsubscribe(), a2 = null, s2) {
            s2 = false;
            const e4 = i2;
            i2 = null, r3.next(e4);
          }
        };
        t3.subscribe((0, n2.operate)({ destination: r3, next: (t4) => {
          a2?.unsubscribe(), s2 = true, i2 = t4, a2 = (0, n2.operate)({ destination: r3, next: c, complete: o2.noop }), (0, n2.from)(e3(t4)).subscribe(a2);
        }, complete: () => {
          c(), r3.complete();
        }, finalize: () => {
          i2 = a2 = null;
        } }));
      });
    };
  }