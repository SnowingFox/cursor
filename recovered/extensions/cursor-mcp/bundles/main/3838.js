// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3838 range:293181..293773
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3838: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(9657), o2 = { keyword: "allOf", schemaType: "array", code(e3) {
      const { gen: t3, schema: r3, it: o3 } = e3;
      if (!Array.isArray(r3)) throw new Error("ajv implementation error");
      const s2 = t3.name("valid");
      r3.forEach((t4, r4) => {
        if ((0, n2.alwaysValidSchema)(o3, t4)) return;
        const i2 = e3.subschema({ keyword: "allOf", schemaProp: r4 }, s2);
        e3.ok(s2), e3.mergeEvaluated(i2);
      });
    } };
    t2.default = o2;
  }