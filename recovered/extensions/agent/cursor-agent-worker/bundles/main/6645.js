// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6645 range:192999..193629
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6645: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.distinct = void 0;
    const s10 = n10(1078), o10 = n10(4462);
    a10.distinct = function(e11, a11) {
      return (n11) => new s10.Observable((r10) => {
        const t10 = /* @__PURE__ */ new Set();
        n11.subscribe((0, s10.operate)({ destination: r10, next: (a12) => {
          const n12 = e11 ? e11(a12) : a12;
          t10.has(n12) || (t10.add(n12), r10.next(a12));
        } })), a11 && (0, s10.from)(a11).subscribe((0, s10.operate)({ destination: r10, next: () => t10.clear(), complete: o10.noop }));
      });
    };
  }