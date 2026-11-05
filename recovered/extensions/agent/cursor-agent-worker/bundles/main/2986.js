// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2986 range:108776..110286
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2986: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.bufferTime = void 0;
    const s10 = n10(1078), o10 = n10(5143), r10 = n10(2665), t10 = n10(5619), i10 = n10(5830);
    a10.bufferTime = function(e11, ...a11) {
      const n11 = (0, t10.popScheduler)(a11) ?? r10.asyncScheduler, m10 = a11[0] ?? null, l10 = a11[1] || 1 / 0;
      return (a12) => new s10.Observable((r11) => {
        let t11 = [], d10 = false;
        const c10 = (e12) => {
          const { buffer: a13, subs: n12 } = e12;
          n12.unsubscribe(), (0, o10.arrRemove)(t11, e12), r11.next(a13), d10 && T10();
        }, T10 = () => {
          if (t11) {
            const a13 = new s10.Subscription();
            r11.add(a13);
            const o11 = { buffer: [], subs: a13 };
            t11.push(o11), (0, i10.executeSchedule)(a13, n11, () => c10(o11), e11);
          }
        };
        null !== m10 && m10 >= 0 ? (0, i10.executeSchedule)(r11, n11, T10, m10, true) : d10 = true, T10();
        const p10 = (0, s10.operate)({ destination: r11, next: (e12) => {
          const a13 = t11.slice();
          for (const n12 of a13) {
            const { buffer: a14 } = n12;
            a14.push(e12), l10 <= a14.length && c10(n12);
          }
        }, complete: () => {
          for (; t11?.length; ) r11.next(t11.shift().buffer);
          p10?.unsubscribe(), r11.complete(), r11.unsubscribe();
        }, finalize: () => t11 = null });
        a12.subscribe(p10);
      });
    };
  }