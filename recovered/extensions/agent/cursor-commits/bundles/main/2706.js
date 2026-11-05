// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2706 range:223317..223896
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2706: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.isMessage = void 0;
    const t2 = a2(4193);
    n2.isMessage = function(e3, n3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(t2.Message.prototype).every((n4) => n4 in e3 && "function" == typeof e3[n4])) return false;
      const a3 = e3.getType();
      return null !== a3 && "function" == typeof a3 && "typeName" in a3 && "string" == typeof a3.typeName && (void 0 === n3 || a3.typeName == n3.typeName);
    };
  }