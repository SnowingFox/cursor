// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4003 range:134848..135850
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4003: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.bufferToggle = void 0;
    const s10 = n10(1078), o10 = n10(4462), r10 = n10(5143);
    a10.bufferToggle = function(e11, a11) {
      return (n11) => new s10.Observable((t10) => {
        const i10 = [];
        (0, s10.from)(e11).subscribe((0, s10.operate)({ destination: t10, next: (e12) => {
          const n12 = [];
          i10.push(n12);
          const m10 = new s10.Subscription();
          m10.add((0, s10.from)(a11(e12)).subscribe((0, s10.operate)({ destination: t10, next: () => {
            (0, r10.arrRemove)(i10, n12), t10.next(n12), m10.unsubscribe();
          }, complete: o10.noop })));
        }, complete: o10.noop })), n11.subscribe((0, s10.operate)({ destination: t10, next: (e12) => {
          for (const a12 of i10) a12.push(e12);
        }, complete: () => {
          for (; i10.length > 0; ) t10.next(i10.shift());
          t10.complete();
        } }));
      });
    };
  }