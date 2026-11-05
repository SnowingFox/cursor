// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 706 range:179717..180276
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
706: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.isMessage = void 0;
    const o2 = n2(193);
    a2.isMessage = function(e3, a3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(o2.Message.prototype).every((a4) => a4 in e3 && "function" == typeof e3[a4])) return false;
      const n3 = e3.getType();
      return null !== n3 && "function" == typeof n3 && "typeName" in n3 && "string" == typeof n3.typeName && (void 0 === a3 || n3.typeName == a3.typeName);
    };
  }