// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 48008 range:1419357..1420249
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48008: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.assignDefaults = void 0;
    const n = r(95183), o = r(79657);
    function s(e2, t2, r2) {
      const { gen: s2, compositeRule: i, data: a, opts: l } = e2;
      if (void 0 === r2) return;
      const c = n._`${a}${(0, n.getProperty)(t2)}`;
      if (i) return void (0, o.checkStrictMode)(e2, `default is ignored for: ${c}`);
      let u = n._`${c} === undefined`;
      "empty" === l.useDefaults && (u = n._`${u} || ${c} === null || ${c} === ""`), s2.if(u, n._`${c} = ${(0, n.stringify)(r2)}`);
    }
    t.assignDefaults = function(e2, t2) {
      const { properties: r2, items: n2 } = e2.schema;
      if ("object" === t2 && r2) for (const t3 in r2) s(e2, t3, r2[t3].default);
      else "array" === t2 && Array.isArray(n2) && n2.forEach((t3, r3) => s(e2, r3, t3.default));
    };
  }