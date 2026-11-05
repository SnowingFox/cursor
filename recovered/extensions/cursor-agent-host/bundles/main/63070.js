// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 63070 range:9924792..9925298
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
63070: (e, t, r) => {
    "use strict";
    r.d(t, { Qt: () => n, Rz: () => s, xF: () => o });
    const n = "context";
    function s(e2) {
      const t2 = e2.longContextThresholdTokens;
      return void 0 === t2 || t2 >= e2.contextWindowTokens ? { defaultTokens: e2.contextWindowTokens } : { defaultTokens: t2, longTokens: e2.contextWindowTokens };
    }
    function o(e2) {
      return e2 >= 1e6 ? Math.round(e2 / 1e6 * 10) / 10 + "M" : e2 >= 1e3 ? `${Math.round(e2 / 1e3)}K` : String(e2);
    }
  }