// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7645 range:4590930..4591417
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7645: (t2, e2, r2) => {
    "use strict";
    function n2(t3) {
      const e3 = new Headers(), r3 = new Headers();
      return t3.forEach((t4, n3) => {
        n3.toLowerCase().startsWith("trailer-") ? r3.append(n3.substring(8), t4) : e3.append(n3, t4);
      }), [e3, r3];
    }
    function s2(t3, e3) {
      const r3 = new Headers(t3);
      return e3.forEach((t4, e4) => {
        r3.append(`trailer-${e4}`, t4);
      }), r3;
    }
    r2.d(e2, { E: () => s2, z: () => n2 });
  }