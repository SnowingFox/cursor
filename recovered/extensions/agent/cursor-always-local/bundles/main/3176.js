// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3176 range:918792..919176
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3176: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.permutePath = function(t3) {
      if ("/" === t3) return ["/"];
      const e3 = [t3];
      for (; t3.length > 1; ) {
        const r2 = t3.lastIndexOf("/");
        if (0 === r2) break;
        t3 = t3.slice(0, r2), e3.push(t3);
      }
      return e3.push("/"), e3;
    };
  }