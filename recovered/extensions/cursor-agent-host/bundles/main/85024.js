// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 85024 range:12020345..12020926
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85024: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.cookieCompare = function(e2, t2) {
      let n;
      const s = e2.path ? e2.path.length : 0, o = t2.path ? t2.path.length : 0;
      if (n = o - s, 0 !== n) return n;
      const i = e2.creation && e2.creation instanceof Date ? e2.creation.getTime() : r, a = t2.creation && t2.creation instanceof Date ? t2.creation.getTime() : r;
      if (n = i - a, 0 !== n) return n;
      return n = (e2.creationIndex || 0) - (t2.creationIndex || 0), n;
    };
    const r = 2147483647e3;
  }