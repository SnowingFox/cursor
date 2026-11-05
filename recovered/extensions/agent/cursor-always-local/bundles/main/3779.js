// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3779 range:998030..998582
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3779: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.canonicalDomain = function(t3) {
      if (null == t3) return;
      let e3 = t3.trim().replace(/^\./, "");
      if (n2.IP_V6_REGEX_OBJECT.test(e3)) return e3.startsWith("[") || (e3 = "[" + e3), e3.endsWith("]") || (e3 += "]"), s2(e3).slice(1, -1);
      if (/[^\u0001-\u007f]/.test(e3)) return s2(e3);
      return e3.toLowerCase();
    };
    const n2 = r2(1548);
    function s2(t3) {
      return new URL(`http://${t3}`).hostname;
    }
  }