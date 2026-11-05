// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 80738 range:11679322..11680311
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
80738: (e, t, r) => {
    "use strict";
    r.d(t, { NY: () => i, cB: () => o, hT: () => c, yC: () => a });
    var n = r(61771);
    const s = 256;
    function o(e2) {
      return true === e2?.[n.TI];
    }
    function i(e2) {
      return void 0 !== e2 && (true !== e2.destructiveHint && true === e2.readOnlyHint);
    }
    function a(e2) {
      if (void 0 !== e2 && 0 !== e2.length) try {
        const t2 = JSON.parse(e2);
        if ("object" == typeof t2 && null !== t2 && !Array.isArray(t2)) return t2;
      } catch {
      }
    }
    function c(e2) {
      if (void 0 === e2) return {};
      const t2 = {};
      "string" == typeof e2.title && e2.title.length > 0 && (t2.title = e2.title.slice(0, s));
      for (const r2 of ["readOnlyHint", "destructiveHint", "idempotentHint", "openWorldHint"]) "boolean" == typeof e2[r2] && (t2[r2] = e2[r2]);
      return o(e2) && (t2[n.TI] = true), 0 === Object.keys(t2).length ? {} : { annotationsJson: JSON.stringify(t2) };
    }
  }