// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2698 range:219793..220694
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2698: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.audit = void 0;
    const n2 = r2(1078);
    t2.audit = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let o2 = false, s2 = null, i2 = null, a2 = false;
        const c = () => {
          if (i2?.unsubscribe(), i2 = null, o2) {
            o2 = false;
            const e4 = s2;
            s2 = null, r3.next(e4);
          }
          a2 && r3.complete();
        }, u = () => {
          i2 = null, a2 && r3.complete();
        };
        t3.subscribe((0, n2.operate)({ destination: r3, next: (t4) => {
          o2 = true, s2 = t4, i2 || (0, n2.from)(e3(t4)).subscribe(i2 = (0, n2.operate)({ destination: r3, next: c, complete: u }));
        }, complete: () => {
          a2 = true, (!o2 || !i2 || i2.closed) && r3.complete();
        } }));
      });
    };
  }