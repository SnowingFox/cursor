// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3424 range:120425..120783
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3424: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.raceWith = void 0;
    const s10 = n10(240), o10 = n10(1078), r10 = n10(4896);
    a10.raceWith = function(...e11) {
      return e11.length ? (a11) => new o10.Observable((n11) => {
        (0, s10.raceInit)([a11, ...e11])(n11);
      }) : r10.identity;
    };
  }