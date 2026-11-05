// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 706 range:179717..180276
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
706: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isMessage = void 0;
    const r2 = n2(193);
    t2.isMessage = function(e3, t3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(r2.Message.prototype).every((t4) => t4 in e3 && "function" == typeof e3[t4])) return false;
      const n3 = e3.getType();
      return null !== n3 && "function" == typeof n3 && "typeName" in n3 && "string" == typeof n3.typeName && (void 0 === t3 || n3.typeName == t3.typeName);
    };
  }