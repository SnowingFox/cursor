// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2706 range:106514..107102
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2706: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.isMessage = void 0;
    const s10 = n10(4193);
    a10.isMessage = function(e11, a11) {
      if (null === e11 || "object" != typeof e11) return false;
      if (!Object.getOwnPropertyNames(s10.Message.prototype).every((a12) => a12 in e11 && "function" == typeof e11[a12])) return false;
      const n11 = e11.getType();
      return null !== n11 && "function" == typeof n11 && "typeName" in n11 && "string" == typeof n11.typeName && (void 0 === a11 || n11.typeName == a11.typeName);
    };
  }