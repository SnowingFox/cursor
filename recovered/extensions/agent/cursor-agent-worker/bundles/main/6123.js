// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6123 range:181887..182527
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6123: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.connectable = void 0;
    const s10 = n10(3043), o10 = n10(1078), r10 = n10(3737), t10 = { connector: () => new s10.Subject(), resetOnDisconnect: true };
    a10.connectable = function(e11, a11 = t10) {
      let n11 = null;
      const { connector: s11, resetOnDisconnect: i10 = true } = a11;
      let m10 = s11();
      const l10 = new o10.Observable((e12) => m10.subscribe(e12));
      return l10.connect = () => (n11 && !n11.closed || (n11 = (0, r10.defer)(() => e11).subscribe(m10), i10 && n11.add(() => m10 = s11())), n11), l10;
    };
  }