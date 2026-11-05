// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7299 range:217606..217960
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7299: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.partition = void 0;
    const s10 = n10(7029), o10 = n10(4591), r10 = n10(1078);
    a10.partition = function(e11, a11, n11) {
      return [(0, o10.filter)(a11, n11)((0, r10.from)(e11)), (0, o10.filter)((0, s10.not)(a11, n11))((0, r10.from)(e11))];
    };
  }