// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 591 range:45486..46344
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
591: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = r2(9657), s2 = { keyword: "propertyNames", type: "object", schemaType: ["object", "boolean"], error: { message: "property name must be valid", params: ({ params: e3 }) => n2._`{propertyName: ${e3.propertyName}}` }, code(e3) {
      const { gen: t3, schema: r3, data: s3, it: i2 } = e3;
      if ((0, o2.alwaysValidSchema)(i2, r3)) return;
      const a2 = t3.name("valid");
      t3.forIn("key", s3, (r4) => {
        e3.setParams({ propertyName: r4 }), e3.subschema({ keyword: "propertyNames", data: r4, dataTypes: ["string"], propertyName: r4, compositeRule: true }, a2), t3.if((0, n2.not)(a2), () => {
          e3.error(true), i2.allErrors || t3.break();
        });
      }), e3.ok(a2);
    } };
    t2.default = s2;
  }