// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 47204 range:7967629..7968188
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47204: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.permuteDomain = function(e2, t2) {
      const r2 = (0, n.getPublicSuffix)(e2, { allowSpecialUseDomain: t2 });
      if (!r2) return;
      if (r2 == e2) return [e2];
      "." == e2.slice(-1) && (e2 = e2.slice(0, -1));
      const s = e2.slice(0, -(r2.length + 1)).split(".").reverse();
      let o = r2;
      const i = [o];
      for (; s.length; ) {
        o = `${s.shift()}.${o}`, i.push(o);
      }
      return i;
    };
    const n = r(16098);
  }