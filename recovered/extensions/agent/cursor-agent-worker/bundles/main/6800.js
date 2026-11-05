// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6800 range:194502..195252
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6800: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.arrayOrObject = a10.argsArgArrayOrObject = void 0;
    const { isArray: n10 } = Array, { getPrototypeOf: s10, prototype: o10, keys: r10 } = Object;
    function t10(e11) {
      if (n10(e11)) return { args: e11, keys: null };
      if ((a11 = e11) && "object" == typeof a11 && s10(a11) === o10) {
        const a12 = r10(e11);
        return { args: a12.map((a13) => e11[a13]), keys: a12 };
      }
      var a11;
      return null;
    }
    a10.argsArgArrayOrObject = function(e11) {
      if (1 === e11.length) {
        const a11 = t10(e11[0]);
        if (a11) return a11;
      }
      return { args: e11, keys: null };
    }, a10.arrayOrObject = t10;
  }