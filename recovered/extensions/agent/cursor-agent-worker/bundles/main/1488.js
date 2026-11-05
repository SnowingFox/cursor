// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1488 range:78435..78822
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1488: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.endWith = void 0;
    const s10 = n10(1078);
    a10.endWith = function(...e11) {
      return (a11) => new s10.Observable((n11) => {
        a11.subscribe((0, s10.operate)({ destination: n11, complete: () => {
          (0, s10.subscribeToArray)(e11, n11);
        } }));
      });
    };
  }