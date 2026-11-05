// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 31376 range:1006300..1007771
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31376: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.windowTime = void 0;
    const n = r(83043), o = r(2665), s = r(51078), i = r(75143), a = r(25619), l = r(55830);
    t.windowTime = function(e2, ...t2) {
      const r2 = (0, a.popScheduler)(t2) ?? o.asyncScheduler, c = t2[0] ?? null, u = t2[1] || 1 / 0;
      return (t3) => new s.Observable((o2) => {
        let a2 = [], d = false;
        const p = (e3) => {
          const { window: t4, subs: r3 } = e3;
          t4.complete(), r3.unsubscribe(), (0, i.arrRemove)(a2, e3), d && h();
        }, h = () => {
          if (a2) {
            const t4 = new s.Subscription();
            o2.add(t4);
            const i2 = new n.Subject(), c2 = { window: i2, subs: t4, seen: 0 };
            a2.push(c2), o2.next(i2.asObservable()), (0, l.executeSchedule)(t4, r2, () => p(c2), e2);
          }
        };
        null !== c && c >= 0 ? (0, l.executeSchedule)(o2, r2, h, c, true) : d = true, h();
        const m = (e3) => a2.slice().forEach(e3), f = (e3) => {
          m(({ window: t4 }) => e3(t4)), e3(o2), o2.unsubscribe();
        };
        return t3.subscribe((0, s.operate)({ destination: o2, next: (e3) => {
          m((t4) => {
            t4.window.next(e3), u <= ++t4.seen && p(t4);
          });
        }, error: (e3) => f((t4) => t4.error(e3)), complete: () => f((e3) => e3.complete()) })), () => {
          a2 = null;
        };
      });
    };
  }