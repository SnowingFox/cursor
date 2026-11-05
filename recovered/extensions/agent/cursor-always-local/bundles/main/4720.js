// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4720 range:1183304..1183719
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4720: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.normalizeMetricsProviderTags = function(t3) {
      if (void 0 === t3) return {};
      if (Array.isArray(t3)) return t3.reduce((t4, e3) => {
        const r2 = e3.indexOf(":");
        return -1 === r2 ? t4[e3] = "" : t4[e3.substring(0, r2)] = e3.substring(r2 + 1), t4;
      }, {});
      return t3;
    };
  }