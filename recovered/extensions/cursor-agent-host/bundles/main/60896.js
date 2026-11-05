// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 60896 range:9330340..9330912
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