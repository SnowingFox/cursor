// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8733 range:809663..810732
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8733: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.throttle = void 0;
    const n2 = r2(1078);
    t2.throttle = function(e3, t3) {
      return (r3) => new n2.Observable((o2) => {
        const { leading: s2 = true, trailing: i2 = false } = t3 ?? {};
        let a2 = false, c = null, u = null, l = false;
        const d = () => {
          u?.unsubscribe(), u = null, i2 && (h(), l && o2.complete());
        }, p = () => {
          u = null, l && o2.complete();
        }, f = (t4) => u = (0, n2.from)(e3(t4)).subscribe((0, n2.operate)({ destination: o2, next: d, complete: p })), h = () => {
          if (a2) {
            a2 = false;
            const e4 = c;
            c = null, o2.next(e4), !l && f(e4);
          }
        };
        r3.subscribe((0, n2.operate)({ destination: o2, next: (e4) => {
          a2 = true, c = e4, (!u || u.closed) && (s2 ? h() : f(e4));
        }, complete: () => {
          l = true, (!(i2 && a2 && u) || u.closed) && o2.complete();
        } }));
      });
    };
  }