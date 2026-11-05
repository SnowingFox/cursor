// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7572 range:4309339..4309613
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7572: (t2, e2, r2) => {
    "use strict";
    function n2(t3, e3, r3) {
      const n3 = "string" == typeof e3 ? e3 : e3.typeName, s2 = "string" == typeof r3 ? r3 : r3.name;
      return t3.toString().replace(/\/?$/, `/${n3}/${s2}`);
    }
    r2.d(e2, { j: () => n2 });
  }