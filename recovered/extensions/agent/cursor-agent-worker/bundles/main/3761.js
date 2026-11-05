// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3761 range:132014..132403
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3761: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.dematerialize = void 0;
    const s10 = n10(8216), o10 = n10(1078);
    a10.dematerialize = function() {
      return (e11) => new o10.Observable((a11) => {
        e11.subscribe((0, o10.operate)({ destination: a11, next: (e12) => (0, s10.observeNotification)(e12, a11) }));
      });
    };
  }