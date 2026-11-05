// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6657 range:3750925..3751653
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6657: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { A7: () => o2, oK: () => n2 });
    const n2 = 128;
    function s2(t3) {
      const e3 = new Headers(), r3 = new TextDecoder().decode(t3).split("\r\n");
      for (const t4 of r3) {
        if ("" === t4) continue;
        const r4 = t4.indexOf(":");
        if (r4 > 0) {
          const n3 = t4.substring(0, r4).trim(), s3 = t4.substring(r4 + 1).trim();
          e3.append(n3, s3);
        }
      }
      return e3;
    }
    function i2(t3) {
      const e3 = [];
      return t3.forEach((t4, r3) => {
        e3.push(`${r3}: ${t4}\r
`);
      }), new TextEncoder().encode(e3.join(""));
    }
    function o2() {
      return { serialize: i2, parse: s2 };
    }
  }