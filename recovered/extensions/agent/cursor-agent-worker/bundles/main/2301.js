// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2301 range:95094..95631
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2301: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.TestTools = a10.Immediate = void 0;
    let n10, s10 = 1;
    const o10 = {};
    function r10(e11) {
      return e11 in o10 && (delete o10[e11], true);
    }
    a10.Immediate = { setImmediate(e11) {
      const a11 = s10++;
      return o10[a11] = true, n10 || (n10 = Promise.resolve()), n10.then(() => r10(a11) && e11()), a11;
    }, clearImmediate(e11) {
      r10(e11);
    } }, a10.TestTools = { pending: () => Object.keys(o10).length };
  }