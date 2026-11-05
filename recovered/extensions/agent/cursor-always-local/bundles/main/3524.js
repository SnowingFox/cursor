// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3524 range:948302..948737
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3524: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Bp: () => n2, q2: () => i2, xk: () => o2, y: () => s2 });
    const n2 = /^application\/grpc-web(-text)?(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, s2 = "application/grpc-web+proto", i2 = "application/grpc-web+json";
    function o2(t3) {
      const e3 = null == t3 ? void 0 : t3.match(n2);
      if (!e3) return;
      return { text: !!e3[1], binary: !e3[2] };
    }
  }