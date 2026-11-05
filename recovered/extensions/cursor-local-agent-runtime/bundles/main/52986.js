// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 52986 range:1702281..1703677
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
52986: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.bufferTime = void 0;
    const n = r(51078), o = r(75143), s = r(2665), i = r(25619), a = r(55830);
    t.bufferTime = function(e2, ...t2) {
      const r2 = (0, i.popScheduler)(t2) ?? s.asyncScheduler, l = t2[0] ?? null, c = t2[1] || 1 / 0;
      return (t3) => new n.Observable((s2) => {
        let i2 = [], u = false;
        const d = (e3) => {
          const { buffer: t4, subs: r3 } = e3;
          r3.unsubscribe(), (0, o.arrRemove)(i2, e3), s2.next(t4), u && p();
        }, p = () => {
          if (i2) {
            const t4 = new n.Subscription();
            s2.add(t4);
            const o2 = { buffer: [], subs: t4 };
            i2.push(o2), (0, a.executeSchedule)(t4, r2, () => d(o2), e2);
          }
        };
        null !== l && l >= 0 ? (0, a.executeSchedule)(s2, r2, p, l, true) : u = true, p();
        const h = (0, n.operate)({ destination: s2, next: (e3) => {
          const t4 = i2.slice();
          for (const r3 of t4) {
            const { buffer: t5 } = r3;
            t5.push(e3), c <= t5.length && d(r3);
          }
        }, complete: () => {
          for (; i2?.length; ) s2.next(i2.shift().buffer);
          h?.unsubscribe(), s2.complete(), s2.unsubscribe();
        }, finalize: () => i2 = null });
        t3.subscribe(h);
      });
    };
  }