// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2986 range:227913..229328
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2986: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.bufferTime = void 0;
    const n2 = r2(1078), o2 = r2(5143), s2 = r2(2665), i2 = r2(5619), a2 = r2(5830);
    t2.bufferTime = function(e3, ...t3) {
      const r3 = (0, i2.popScheduler)(t3) ?? s2.asyncScheduler, c = t3[0] ?? null, u = t3[1] || 1 / 0;
      return (t4) => new n2.Observable((s3) => {
        let i3 = [], l = false;
        const d = (e4) => {
          const { buffer: t5, subs: r4 } = e4;
          r4.unsubscribe(), (0, o2.arrRemove)(i3, e4), s3.next(t5), l && p();
        }, p = () => {
          if (i3) {
            const t5 = new n2.Subscription();
            s3.add(t5);
            const o3 = { buffer: [], subs: t5 };
            i3.push(o3), (0, a2.executeSchedule)(t5, r3, () => d(o3), e3);
          }
        };
        null !== c && c >= 0 ? (0, a2.executeSchedule)(s3, r3, p, c, true) : l = true, p();
        const f = (0, n2.operate)({ destination: s3, next: (e4) => {
          const t5 = i3.slice();
          for (const r4 of t5) {
            const { buffer: t6 } = r4;
            t6.push(e4), u <= t6.length && d(r4);
          }
        }, complete: () => {
          for (; i3?.length; ) s3.next(i3.shift().buffer);
          f?.unsubscribe(), s3.complete(), s3.unsubscribe();
        }, finalize: () => i3 = null });
        t4.subscribe(f);
      });
    };
  }