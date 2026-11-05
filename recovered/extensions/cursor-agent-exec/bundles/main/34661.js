// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 34661 range:2931832..2932223
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34661: (e, t, r) => {
    "use strict";
    r.d(t, { c: () => s });
    var n = r(38353);
    const s = (...e2) => async () => {
      if (0 === e2.length) throw new n.m("No providers in chain");
      let t2;
      for (const r2 of e2) try {
        return await r2();
      } catch (e3) {
        if (t2 = e3, e3?.tryNextLink) continue;
        throw e3;
      }
      throw t2;
    };
  }