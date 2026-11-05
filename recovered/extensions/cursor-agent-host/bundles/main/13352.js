// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 13352 range:3953499..3954377
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13352: (e, t, r) => {
    "use strict";
    r.d(t, { B: () => i, y: () => o });
    var n = r(40328), s = r(8032);
    const o = 1;
    function i(e2, t2, r2, o2) {
      let i2, a = null, c = null;
      if (null !== t2 && "identity" !== t2) {
        const r3 = e2.find((e3) => e3.name === t2);
        if (r3) a = r3;
        else {
          const r4 = e2.map((e3) => e3.name).join(",");
          i2 = new n.T(`unknown compression "${t2}": supported encodings are ${r4}`, s.C.Unimplemented, { [o2]: r4 });
        }
      }
      if (null === r2 || "" === r2) c = a;
      else {
        const t3 = r2.split(",").map((e3) => e3.trim());
        for (const r3 of t3) {
          const t4 = e2.find((e3) => e3.name === r3);
          if (t4) {
            c = t4;
            break;
          }
        }
      }
      return { request: a, response: c, error: i2 };
    }
  }