// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 62706 range:5990683..5991255
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
62706: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.isMessage = void 0;
    const n = r(24193);
    t.isMessage = function(e2, t2) {
      if (null === e2 || "object" != typeof e2) return false;
      if (!Object.getOwnPropertyNames(n.Message.prototype).every((t3) => t3 in e2 && "function" == typeof e2[t3])) return false;
      const r2 = e2.getType();
      return null !== r2 && "function" == typeof r2 && "typeName" in r2 && "string" == typeof r2.typeName && (void 0 === t2 || r2.typeName == t2.typeName);
    };
  }