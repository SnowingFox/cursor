// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2706 range:777578..778157
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2706: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.isMessage = void 0;
    const n2 = r2(4193);
    e2.isMessage = function(t3, e3) {
      if (null === t3 || "object" != typeof t3) return false;
      if (!Object.getOwnPropertyNames(n2.Message.prototype).every((e4) => e4 in t3 && "function" == typeof t3[e4])) return false;
      const r3 = t3.getType();
      return null !== r3 && "function" == typeof r3 && "typeName" in r3 && "string" == typeof r3.typeName && (void 0 === e3 || r3.typeName == e3.typeName);
    };
  }