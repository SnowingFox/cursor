// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 13874 range:3968281..3969171
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13874: (e, t, r) => {
    "use strict";
    r.d(t, { _: () => i });
    var n = r(95831);
    function s(e2) {
      throw new n.dM(`Private inference config: ${e2}`);
    }
    const o = "default";
    function i(e2, t2) {
      0 === e2.models.length && s("catalog lists no models; at least one model is required");
      const r2 = /* @__PURE__ */ new Set();
      for (const t3 of e2.models) t3.id === o && s(`model id "${o}" is reserved for Cursor's Auto router; rename the [model.${o}] table ([models] default = "<key>" names the default model)`), r2.has(t3.id) && s(`catalog lists model "${t3.id}" more than once`), r2.add(t3.id);
      return r2.has(e2.defaultModelId) || s(`defaultModelId "${e2.defaultModelId}" is not one of the catalog models (${[...r2].join(", ")})`), { models: e2.models.map((e3) => (0, n.yz)(e3, t2.get(e3.id))), defaultModelId: e2.defaultModelId };
    }
  }