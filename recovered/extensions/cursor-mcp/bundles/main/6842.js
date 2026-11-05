// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6842 range:582600..583634
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6842: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.windowCount = void 0;
    const n2 = r2(1078), o2 = r2(3043);
    t2.windowCount = function(e3, t3 = 0) {
      const r3 = t3 > 0 ? t3 : e3;
      return (t4) => new n2.Observable((s2) => {
        let i2 = [new o2.Subject()], a2 = [], c = 0;
        s2.next(i2[0].asObservable()), t4.subscribe((0, n2.operate)({ destination: s2, next: (t5) => {
          for (const e4 of i2) e4.next(t5);
          const n3 = c - e3 + 1;
          if (n3 >= 0 && n3 % r3 === 0 && i2.shift().complete(), ++c % r3 === 0) {
            const e4 = new o2.Subject();
            i2.push(e4), s2.next(e4.asObservable());
          }
        }, error: (e4) => {
          for (; i2.length > 0; ) i2.shift().error(e4);
          s2.error(e4);
        }, complete: () => {
          for (; i2.length > 0; ) i2.shift().complete();
          s2.complete();
        }, finalize: () => {
          a2 = null, i2 = null;
        } }));
      });
    };
  }