// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 47825 range:8065662..8066185
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47825: (e, t, r) => {
    "use strict";
    r.d(t, { I: () => s, g: () => o });
    const n = (0, r(33002).cF)(/* @__PURE__ */ Symbol("agent-host.blob-reads"), void 0);
    function s(e2, t2) {
      const r2 = { source: t2, counts: { hits: 0, misses: 0, errors: 0 } };
      return { ctx: e2.with(n, r2), ...r2 };
    }
    function o(e2, t2, r2) {
      const s2 = e2.get(n);
      void 0 !== s2 && s2.source === t2 && ("hit" === r2 ? s2.counts.hits++ : "miss" === r2 ? s2.counts.misses++ : s2.counts.errors++);
    }
  }