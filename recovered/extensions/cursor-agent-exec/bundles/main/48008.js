// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 48008 range:3487660..3488552
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48008: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.assignDefaults = void 0;
    const n = r(95183), s = r(79657);
    function o(e2, t2, r2) {
      const { gen: o2, compositeRule: i, data: a, opts: c } = e2;
      if (void 0 === r2) return;
      const l = n._`${a}${(0, n.getProperty)(t2)}`;
      if (i) return void (0, s.checkStrictMode)(e2, `default is ignored for: ${l}`);
      let u = n._`${l} === undefined`;
      "empty" === c.useDefaults && (u = n._`${u} || ${l} === null || ${l} === ""`), o2.if(u, n._`${l} = ${(0, n.stringify)(r2)}`);
    }
    t.assignDefaults = function(e2, t2) {
      const { properties: r2, items: n2 } = e2.schema;
      if ("object" === t2 && r2) for (const t3 in r2) o(e2, t3, r2[t3].default);
      else "array" === t2 && Array.isArray(n2) && n2.forEach((t3, r3) => o(e2, r3, t3.default));
    };
  }