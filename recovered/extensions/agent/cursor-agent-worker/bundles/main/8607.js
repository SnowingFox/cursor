// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8607 range:329112..329782
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8607: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.buffer = void 0;
    const s10 = n10(1078), o10 = n10(4462);
    a10.buffer = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let r10 = [];
        return (0, s10.from)(e11).subscribe((0, s10.operate)({ destination: n11, next: () => {
          const e12 = r10;
          r10 = [], n11.next(e12);
        }, complete: o10.noop })), a11.subscribe((0, s10.operate)({ destination: n11, next: (e12) => r10.push(e12), complete: () => {
          n11.next(r10), n11.complete();
        } })), () => {
          r10 = null;
        };
      });
    };
  }