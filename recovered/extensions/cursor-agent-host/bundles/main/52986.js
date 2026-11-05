// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 52986 range:8564154..8565550
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
52986: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.bufferTime = void 0;
    const n = r(51078), s = r(75143), o = r(2665), i = r(25619), a = r(55830);
    t.bufferTime = function(e2, ...t2) {
      const r2 = (0, i.popScheduler)(t2) ?? o.asyncScheduler, c = t2[0] ?? null, l = t2[1] || 1 / 0;
      return (t3) => new n.Observable((o2) => {
        let i2 = [], u = false;
        const d = (e3) => {
          const { buffer: t4, subs: r3 } = e3;
          r3.unsubscribe(), (0, s.arrRemove)(i2, e3), o2.next(t4), u && p();
        }, p = () => {
          if (i2) {
            const t4 = new n.Subscription();
            o2.add(t4);
            const s2 = { buffer: [], subs: t4 };
            i2.push(s2), (0, a.executeSchedule)(t4, r2, () => d(s2), e2);
          }
        };
        null !== c && c >= 0 ? (0, a.executeSchedule)(o2, r2, p, c, true) : u = true, p();
        const m = (0, n.operate)({ destination: o2, next: (e3) => {
          const t4 = i2.slice();
          for (const r3 of t4) {
            const { buffer: t5 } = r3;
            t5.push(e3), l <= t5.length && d(r3);
          }
        }, complete: () => {
          for (; i2?.length; ) o2.next(i2.shift().buffer);
          m?.unsubscribe(), o2.complete(), o2.unsubscribe();
        }, finalize: () => i2 = null });
        t3.subscribe(m);
      });
    };
  }