// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 41821 range:7666239..7666847
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41821: (e, t, r) => {
    "use strict";
    r.d(t, { FS: () => o, Mp: () => i, N3: () => c, SY: () => s, Ys: () => u, cy: () => n, lh: () => a, xK: () => l });
    const n = "cursoragent@cursor.com", s = "Cursor Agent", o = "Cursor", i = `Co-authored-by: ${o} <${n}>`, a = "Made-with: Cursor", c = [n, "noreply@cursor.com"];
    function l(e2) {
      const t2 = e2.toLowerCase();
      return t2.includes(`co-authored-by: ${o.toLowerCase()}`) || t2.includes(a.toLowerCase());
    }
    function u(e2) {
      const t2 = e2.email?.trim().toLowerCase();
      return void 0 !== t2 && c.includes(t2);
    }
  }