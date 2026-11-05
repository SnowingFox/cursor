// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5310 range:153214..153847
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5310: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.timeoutWith = void 0;
    const s10 = n10(2665), o10 = n10(7842), r10 = n10(2402);
    a10.timeoutWith = function(e11, a11, n11) {
      let t10, i10, m10;
      if (n11 = n11 ?? s10.asyncScheduler, (0, o10.isValidDate)(e11) ? t10 = e11 : "number" == typeof e11 && (i10 = e11), !a11) throw new TypeError("No observable provided to switch to");
      if (m10 = () => a11, null == t10 && null == i10) throw new TypeError("No timeout provided.");
      return (0, r10.timeout)({ first: t10, each: i10, scheduler: n11, with: m10 });
    };
  }