// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2706 range:220696..221275
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2706: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isMessage = void 0;
    const n2 = r2(4193);
    t2.isMessage = function(e3, t3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(n2.Message.prototype).every((t4) => t4 in e3 && "function" == typeof e3[t4])) return false;
      const r3 = e3.getType();
      return null !== r3 && "function" == typeof r3 && "typeName" in r3 && "string" == typeof r3.typeName && (void 0 === t3 || r3.typeName == t3.typeName);
    };
  }