// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 23779 range:4500235..4500778
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23779: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.canonicalDomain = function(e2) {
      if (null == e2) return;
      let t2 = e2.trim().replace(/^\./, "");
      if (n.IP_V6_REGEX_OBJECT.test(t2)) return t2.startsWith("[") || (t2 = "[" + t2), t2.endsWith("]") || (t2 += "]"), s(t2).slice(1, -1);
      if (/[^\u0001-\u007f]/.test(t2)) return s(t2);
      return t2.toLowerCase();
    };
    const n = r(21548);
    function s(e2) {
      return new URL(`http://${e2}`).hostname;
    }
  }