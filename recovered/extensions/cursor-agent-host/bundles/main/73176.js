// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 73176 range:11120360..11120738
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
73176: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.permutePath = function(e2) {
      if ("/" === e2) return ["/"];
      const t2 = [e2];
      for (; e2.length > 1; ) {
        const r = e2.lastIndexOf("/");
        if (0 === r) break;
        e2 = e2.slice(0, r), t2.push(e2);
      }
      return t2.push("/"), t2;
    };
  }