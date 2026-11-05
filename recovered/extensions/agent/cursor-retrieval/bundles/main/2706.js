// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 2706 range:498380..498959
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2706: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.isMessage = void 0;
    const t2 = n2(4193);
    a2.isMessage = function(e3, a3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(t2.Message.prototype).every((a4) => a4 in e3 && "function" == typeof e3[a4])) return false;
      const n3 = e3.getType();
      return null !== n3 && "function" == typeof n3 && "typeName" in n3 && "string" == typeof n3.typeName && (void 0 === a3 || n3.typeName == a3.typeName);
    };
  }