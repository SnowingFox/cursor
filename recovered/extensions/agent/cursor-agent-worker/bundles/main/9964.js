// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9964 range:366566..366899
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9964: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.distinctUntilKeyChanged = void 0;
    const s10 = n10(7529);
    a10.distinctUntilKeyChanged = function(e11, a11) {
      return (0, s10.distinctUntilChanged)((n11, s11) => a11 ? a11(n11[e11], s11[e11]) : n11[e11] === s11[e11]);
    };
  }