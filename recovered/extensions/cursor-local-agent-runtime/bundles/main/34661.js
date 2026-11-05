// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 34661 range:1045137..1045528
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34661: (e, t, r) => {
    "use strict";
    r.d(t, { c: () => o });
    var n = r(38353);
    const o = (...e2) => async () => {
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