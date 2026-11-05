// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2471 range:97752..98107
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2471: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.toArray = void 0;
    const s10 = n10(8339), o10 = n10(1078), r10 = (e11, a11) => (e11.push(a11), e11);
    a10.toArray = function() {
      return (e11) => new o10.Observable((a11) => {
        (0, s10.reduce)(r10, [])(e11).subscribe(a11);
      });
    };
  }