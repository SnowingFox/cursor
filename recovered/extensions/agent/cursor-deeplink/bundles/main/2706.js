// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2706 range:249483..250062
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2706: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isMessage = void 0;
    const n2 = A2(4193);
    t2.isMessage = function(e3, t3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(n2.Message.prototype).every((t4) => t4 in e3 && "function" == typeof e3[t4])) return false;
      const A3 = e3.getType();
      return null !== A3 && "function" == typeof A3 && "typeName" in A3 && "string" == typeof A3.typeName && (void 0 === t3 || A3.typeName == t3.typeName);
    };
  }