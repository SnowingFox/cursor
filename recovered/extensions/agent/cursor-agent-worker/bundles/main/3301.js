// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3301 range:118579..118925
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3301: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.concatWith = void 0;
    const s10 = n10(1078), o10 = n10(3006);
    a10.concatWith = function(...e11) {
      return (a11) => new s10.Observable((n11) => {
        (0, o10.concatAll)()((0, s10.from)([a11, ...e11])).subscribe(n11);
      });
    };
  }