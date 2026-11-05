// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 4720 range:402979..403386
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4720: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.normalizeMetricsProviderTags = function(e2) {
      if (void 0 === e2) return {};
      if (Array.isArray(e2)) return e2.reduce((e3, t2) => {
        const r = t2.indexOf(":");
        return -1 === r ? e3[t2] = "" : e3[t2.substring(0, r)] = t2.substring(r + 1), e3;
      }, {});
      return e2;
    };
  }