// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8885 range:830847..831834
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8885: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.windowWhen = void 0;
    const n2 = r2(1078), o2 = r2(3043), s2 = r2(4462);
    t2.windowWhen = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let i2, a2;
        const c = (e4) => {
          i2.error(e4), r3.error(e4);
        }, u = () => {
          let t4;
          a2?.unsubscribe(), i2?.complete(), i2 = new o2.Subject(), r3.next(i2.asObservable());
          try {
            t4 = (0, n2.from)(e3());
          } catch (e4) {
            return void c(e4);
          }
          t4.subscribe(a2 = (0, n2.operate)({ destination: r3, next: u, error: c, complete: s2.noop }));
        };
        u(), t3.subscribe((0, n2.operate)({ destination: r3, next: (e4) => i2.next(e4), error: c, complete: () => {
          i2.complete(), r3.complete();
        }, finalize: () => {
          a2?.unsubscribe(), i2 = null;
        } }));
      });
    };
  }