// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1376 range:164782..166271
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1376: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.windowTime = void 0;
    const n2 = r2(3043), o2 = r2(2665), s2 = r2(1078), i2 = r2(5143), a2 = r2(5619), c = r2(5830);
    t2.windowTime = function(e3, ...t3) {
      const r3 = (0, a2.popScheduler)(t3) ?? o2.asyncScheduler, u = t3[0] ?? null, l = t3[1] || 1 / 0;
      return (t4) => new s2.Observable((o3) => {
        let a3 = [], d = false;
        const p = (e4) => {
          const { window: t5, subs: r4 } = e4;
          t5.complete(), r4.unsubscribe(), (0, i2.arrRemove)(a3, e4), d && f();
        }, f = () => {
          if (a3) {
            const t5 = new s2.Subscription();
            o3.add(t5);
            const i3 = new n2.Subject(), u2 = { window: i3, subs: t5, seen: 0 };
            a3.push(u2), o3.next(i3.asObservable()), (0, c.executeSchedule)(t5, r3, () => p(u2), e3);
          }
        };
        null !== u && u >= 0 ? (0, c.executeSchedule)(o3, r3, f, u, true) : d = true, f();
        const h = (e4) => a3.slice().forEach(e4), m = (e4) => {
          h(({ window: t5 }) => e4(t5)), e4(o3), o3.unsubscribe();
        };
        return t4.subscribe((0, s2.operate)({ destination: o3, next: (e4) => {
          h((t5) => {
            t5.window.next(e4), l <= ++t5.seen && p(t5);
          });
        }, error: (e4) => m((t5) => t5.error(e4)), complete: () => m((e4) => e4.complete()) })), () => {
          a3 = null;
        };
      });
    };
  }