// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2706 range:227350..227929
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2706: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.isMessage = void 0;
    const a2 = t2(4193);
    n2.isMessage = function(e3, n3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(a2.Message.prototype).every((n4) => n4 in e3 && "function" == typeof e3[n4])) return false;
      const t3 = e3.getType();
      return null !== t3 && "function" == typeof t3 && "typeName" in t3 && "string" == typeof t3.typeName && (void 0 === n3 || t3.typeName == n3.typeName);
    };
  }