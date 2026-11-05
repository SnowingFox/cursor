// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7662 range:291843..292365
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7662: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.delayWhen = void 0;
    const s10 = n10(6409), o10 = n10(7742), r10 = n10(6426), t10 = n10(1207), i10 = n10(7996), m10 = n10(8143);
    a10.delayWhen = function e11(a11, n11) {
      return n11 ? (t11) => (0, s10.concat)((0, i10.rx)(n11, (0, o10.take)(1), (0, r10.ignoreElements)()), (0, i10.rx)(t11, e11(a11))) : (0, t10.mergeMap)((e12, n12) => (0, i10.rx)(a11(e12, n12), (0, o10.take)(1), (0, m10.map)(() => e12)));
    };
  }