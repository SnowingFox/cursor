// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 2706 range:223159..223738
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2706: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.isMessage = void 0;
    const n2 = t2(4193);
    A2.isMessage = function(e3, A3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(n2.Message.prototype).every((A4) => A4 in e3 && "function" == typeof e3[A4])) return false;
      const t3 = e3.getType();
      return null !== t3 && "function" == typeof t3 && "typeName" in t3 && "string" == typeof t3.typeName && (void 0 === A3 || t3.typeName == A3.typeName);
    };
  }