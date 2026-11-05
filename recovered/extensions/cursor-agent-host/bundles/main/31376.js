// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 31376 range:5078526..5079997
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31376: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.windowTime = void 0;
    const n = r(83043), s = r(2665), o = r(51078), i = r(75143), a = r(25619), c = r(55830);
    t.windowTime = function(e2, ...t2) {
      const r2 = (0, a.popScheduler)(t2) ?? s.asyncScheduler, l = t2[0] ?? null, u = t2[1] || 1 / 0;
      return (t3) => new o.Observable((s2) => {
        let a2 = [], d = false;
        const p = (e3) => {
          const { window: t4, subs: r3 } = e3;
          t4.complete(), r3.unsubscribe(), (0, i.arrRemove)(a2, e3), d && m();
        }, m = () => {
          if (a2) {
            const t4 = new o.Subscription();
            s2.add(t4);
            const i2 = new n.Subject(), l2 = { window: i2, subs: t4, seen: 0 };
            a2.push(l2), s2.next(i2.asObservable()), (0, c.executeSchedule)(t4, r2, () => p(l2), e2);
          }
        };
        null !== l && l >= 0 ? (0, c.executeSchedule)(s2, r2, m, l, true) : d = true, m();
        const h = (e3) => a2.slice().forEach(e3), f = (e3) => {
          h(({ window: t4 }) => e3(t4)), e3(s2), s2.unsubscribe();
        };
        return t3.subscribe((0, o.operate)({ destination: s2, next: (e3) => {
          h((t4) => {
            t4.window.next(e3), u <= ++t4.seen && p(t4);
          });
        }, error: (e3) => f((t4) => t4.error(e3)), complete: () => f((e3) => e3.complete()) })), () => {
          a2 = null;
        };
      });
    };
  }