// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3352 range:925996..926886
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3352: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { B: () => o2, y: () => i2 });
    var n2 = r2(328), s2 = r2(8032);
    const i2 = 1;
    function o2(t3, e3, r3, i3) {
      let o3, a = null, u = null;
      if (null !== e3 && "identity" !== e3) {
        const r4 = t3.find((t4) => t4.name === e3);
        if (r4) a = r4;
        else {
          const r5 = t3.map((t4) => t4.name).join(",");
          o3 = new n2.T(`unknown compression "${e3}": supported encodings are ${r5}`, s2.C.Unimplemented, { [i3]: r5 });
        }
      }
      if (null === r3 || "" === r3) u = a;
      else {
        const e4 = r3.split(",").map((t4) => t4.trim());
        for (const r4 of e4) {
          const e5 = t3.find((t4) => t4.name === r4);
          if (e5) {
            u = e5;
            break;
          }
        }
      }
      return { request: a, response: u, error: o3 };
    }
  }