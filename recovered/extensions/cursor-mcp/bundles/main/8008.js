// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8008 range:731152..732065
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8008: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.assignDefaults = void 0;
    const n2 = r2(5183), o2 = r2(9657);
    function s2(e3, t3, r3) {
      const { gen: s3, compositeRule: i2, data: a2, opts: c } = e3;
      if (void 0 === r3) return;
      const u = n2._`${a2}${(0, n2.getProperty)(t3)}`;
      if (i2) return void (0, o2.checkStrictMode)(e3, `default is ignored for: ${u}`);
      let l = n2._`${u} === undefined`;
      "empty" === c.useDefaults && (l = n2._`${l} || ${u} === null || ${u} === ""`), s3.if(l, n2._`${u} = ${(0, n2.stringify)(r3)}`);
    }
    t2.assignDefaults = function(e3, t3) {
      const { properties: r3, items: n3 } = e3.schema;
      if ("object" === t3 && r3) for (const t4 in r3) s2(e3, t4, r3[t4].default);
      else "array" === t3 && Array.isArray(n3) && n3.forEach((t4, r4) => s2(e3, r4, t4.default));
    };
  }