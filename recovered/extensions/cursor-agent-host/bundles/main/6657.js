// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 6657 range:499881..500596
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6657: (e, t, r) => {
    "use strict";
    r.d(t, { A7: () => i, oK: () => n });
    const n = 128;
    function s(e2) {
      const t2 = new Headers(), r2 = new TextDecoder().decode(e2).split("\r\n");
      for (const e3 of r2) {
        if ("" === e3) continue;
        const r3 = e3.indexOf(":");
        if (r3 > 0) {
          const n2 = e3.substring(0, r3).trim(), s2 = e3.substring(r3 + 1).trim();
          t2.append(n2, s2);
        }
      }
      return t2;
    }
    function o(e2) {
      const t2 = [];
      return e2.forEach((e3, r2) => {
        t2.push(`${r2}: ${e3}\r
`);
      }), new TextEncoder().encode(t2.join(""));
    }
    function i() {
      return { serialize: o, parse: s };
    }
  }