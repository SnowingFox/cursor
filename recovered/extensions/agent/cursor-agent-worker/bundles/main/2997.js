// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2997 range:110288..110816
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2997: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.immediateProvider = void 0;
    const s10 = n10(2301), { setImmediate: o10, clearImmediate: r10 } = s10.Immediate;
    a10.immediateProvider = { setImmediate(...e11) {
      const { delegate: n11 } = a10.immediateProvider;
      return (n11?.setImmediate || o10)(...e11);
    }, clearImmediate(e11) {
      const { delegate: n11 } = a10.immediateProvider;
      return (n11?.clearImmediate || r10)(e11);
    }, delegate: void 0 };
  }