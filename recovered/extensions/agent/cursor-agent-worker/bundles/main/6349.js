// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6349 range:184958..186402
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6349: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.windowToggle = void 0;
    const s10 = n10(1078), o10 = n10(3043), r10 = n10(4462), t10 = n10(5143);
    a10.windowToggle = function(e11, a11) {
      return (n11) => new s10.Observable((i10) => {
        const m10 = [], l10 = (e12) => {
          for (; 0 < m10.length; ) m10.shift().error(e12);
          i10.error(e12);
        };
        (0, s10.from)(e11).subscribe((0, s10.operate)({ destination: i10, next: (e12) => {
          const n12 = new o10.Subject();
          m10.push(n12);
          const d10 = new s10.Subscription();
          let c10;
          try {
            c10 = (0, s10.from)(a11(e12));
          } catch (e13) {
            return void l10(e13);
          }
          i10.next(n12), d10.add(c10.subscribe((0, s10.operate)({ destination: i10, next: () => {
            (0, t10.arrRemove)(m10, n12), n12.complete(), d10.unsubscribe();
          }, error: l10, complete: r10.noop })));
        }, complete: r10.noop })), n11.subscribe((0, s10.operate)({ destination: i10, next: (e12) => {
          const a12 = m10.slice();
          for (const n12 of a12) n12.next(e12);
        }, error: l10, complete: () => {
          for (; 0 < m10.length; ) m10.shift().complete();
          i10.complete();
        }, finalize: () => {
          for (; 0 < m10.length; ) m10.shift().unsubscribe();
        } }));
      });
    };
  }