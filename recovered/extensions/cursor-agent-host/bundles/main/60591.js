// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 60591 range:9322167..9323008
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60591: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = r(79657), o = { keyword: "propertyNames", type: "object", schemaType: ["object", "boolean"], error: { message: "property name must be valid", params: ({ params: e2 }) => n._`{propertyName: ${e2.propertyName}}` }, code(e2) {
      const { gen: t2, schema: r2, data: o2, it: i } = e2;
      if ((0, s.alwaysValidSchema)(i, r2)) return;
      const a = t2.name("valid");
      t2.forIn("key", o2, (r3) => {
        e2.setParams({ propertyName: r3 }), e2.subschema({ keyword: "propertyNames", data: r3, dataTypes: ["string"], propertyName: r3, compositeRule: true }, a), t2.if((0, n.not)(a), () => {
          e2.error(true), i.allErrors || t2.break();
        });
      }), e2.ok(a);
    } };
    t.default = o;
  }