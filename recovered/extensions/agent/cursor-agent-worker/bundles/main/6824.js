// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6824 range:196806..197069
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6824: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.fromSubscribable = void 0;
    const s10 = n10(1078);
    a10.fromSubscribable = function(e11) {
      return new s10.Observable((a11) => e11.subscribe(a11));
    };
  }