// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9887 range:364483..364751
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9887: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.throwError = void 0;
    const s10 = n10(1078);
    a10.throwError = function(e11) {
      return new s10.Observable((a11) => {
        a11.error(e11());
      });
    };
  }