// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 17319 range:4193280..4193686
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
17319: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.willAccessTokenExpireSoon = function(e2) {
      try {
        const t2 = /* @__PURE__ */ new Date(), r2 = (0, n.decodeJwt)(e2);
        if (new Date(1e3 * r2.exp).getTime() < t2.getTime() - s) return true;
      } catch (e3) {
      }
      return false;
    };
    const n = r(73442), s = 45792e5;
  }