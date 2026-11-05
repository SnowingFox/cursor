// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5037 range:359383..359986
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5037: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(9657), o2 = { keyword: "not", schemaType: ["object", "boolean"], trackErrors: true, code(e3) {
      const { gen: t3, schema: r3, it: o3 } = e3;
      if ((0, n2.alwaysValidSchema)(o3, r3)) return void e3.fail();
      const s2 = t3.name("valid");
      e3.subschema({ keyword: "not", compositeRule: true, createErrors: false, allErrors: false }, s2), e3.failResult(s2, () => e3.reset(), () => e3.error());
    }, error: { message: "must NOT be valid" } };
    t2.default = o2;
  }