// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 60896 range:4742290..4742862
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60896: (e, t, r) => {
    "use strict";
    r.d(t, { $Y: () => a, Ib: () => i, be: () => o });
    var n = r(70890);
    const s = () => ({});
    function o(e2, t2) {
      return n(e2, { ...t2, engines: { ...t2?.engines, js: s, javascript: s } });
    }
    function i(e2, t2, r2) {
      return n.stringify({ content: e2, data: {} }, t2, r2);
    }
    function a(e2) {
      const t2 = (e2.matter ?? "").trim(), r2 = e2.language?.toLowerCase();
      return t2.length > 0 && "js" !== r2 && "javascript" !== r2 ? `---
${t2}
---` : i("", e2.data ?? {}).trim();
    }
  }