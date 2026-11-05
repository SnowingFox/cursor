// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4464 range:144390..144714
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4464: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.subscribeOn = void 0;
    const s10 = n10(1078);
    a10.subscribeOn = function(e11, a11 = 0) {
      return (n11) => new s10.Observable((s11) => {
        s11.add(e11.schedule(() => n11.subscribe(s11), a11));
      });
    };
  }