// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2868 range:107689..108526
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2868: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.bufferCount = void 0;
    const s10 = n10(1078), o10 = n10(5143);
    a10.bufferCount = function(e11, a11 = null) {
      return a11 = a11 ?? e11, (n11) => new s10.Observable((r10) => {
        let t10 = [], i10 = 0;
        n11.subscribe((0, s10.operate)({ destination: r10, next: (n12) => {
          let s11 = null;
          i10++ % a11 === 0 && t10.push([]);
          for (const a12 of t10) a12.push(n12), e11 <= a12.length && (s11 = s11 ?? [], s11.push(a12));
          if (s11) for (const e12 of s11) (0, o10.arrRemove)(t10, e12), r10.next(e12);
        }, complete: () => {
          for (const e12 of t10) r10.next(e12);
          r10.complete();
        }, finalize: () => {
          t10 = null;
        } }));
      });
    };
  }