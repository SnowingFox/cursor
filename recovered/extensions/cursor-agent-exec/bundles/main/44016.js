// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 44016 range:3271927..3272626
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44016: (e, t, r) => {
    "use strict";
    r.d(t, { AS: () => a, K9: () => l, ot: () => c, s: () => i, vn: () => s });
    var n = r(76760);
    function s(e2) {
      return e2.replace(/^([a-z]):\\/i, (e3, t2) => `${t2.toUpperCase()}:\\`);
    }
    const o = "win32" === process.platform;
    process.platform;
    function i(e2) {
      return { dispose: e2 };
    }
    function a(e2) {
      for (const t2 of e2) t2.dispose();
    }
    function c(e2) {
      return e2.replace(/^git version /, "");
    }
    function l(e2, t2) {
      return o && (e2 = e2.toLowerCase(), t2 = t2.toLowerCase()), e2 === t2 || (e2.charAt(e2.length - 1) !== n.sep && (e2 += n.sep), t2.startsWith(e2));
    }
  }