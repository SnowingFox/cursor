// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 76849 range:6496893..6497588
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76849: (e, t, r) => {
    "use strict";
    r.d(t, { WI: () => i, Xq: () => l, m4: () => c });
    r(77598);
    var n = r(48161), s = r(76760), o = r(68503);
    function i() {
      const e2 = process.env.CURSOR_CONFIG_DIR;
      if (e2?.trim()) return e2;
      const t2 = process.env.XDG_CONFIG_HOME;
      return t2?.trim() ? (0, s.join)(t2, "cursor") : (0, s.join)((0, n.homedir)(), ".cursor");
    }
    function a() {
      const e2 = process.env.CURSOR_DATA_DIR;
      return e2?.trim() ? e2 : (0, s.join)((0, n.homedir)(), ".cursor");
    }
    function c() {
      return (0, s.join)(a(), "projects");
    }
    function l(e2) {
      return (0, s.join)(c(), (0, o.r_)(e2));
    }
  }