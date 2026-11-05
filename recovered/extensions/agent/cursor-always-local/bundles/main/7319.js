// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7319 range:4248477..4248891
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7319: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.willAccessTokenExpireSoon = function(t3) {
      try {
        const e3 = /* @__PURE__ */ new Date(), r3 = (0, n2.decodeJwt)(t3);
        if (new Date(1e3 * r3.exp).getTime() < e3.getTime() - s2) return true;
      } catch (t4) {
      }
      return false;
    };
    const n2 = r2(3442), s2 = 45792e5;
  }