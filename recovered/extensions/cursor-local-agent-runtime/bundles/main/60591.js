// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 60591 range:1882003..1882844
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60591: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = r(79657), s = { keyword: "propertyNames", type: "object", schemaType: ["object", "boolean"], error: { message: "property name must be valid", params: ({ params: e2 }) => n._`{propertyName: ${e2.propertyName}}` }, code(e2) {
      const { gen: t2, schema: r2, data: s2, it: i } = e2;
      if ((0, o.alwaysValidSchema)(i, r2)) return;
      const a = t2.name("valid");
      t2.forIn("key", s2, (r3) => {
        e2.setParams({ propertyName: r3 }), e2.subschema({ keyword: "propertyNames", data: r3, dataTypes: ["string"], propertyName: r3, compositeRule: true }, a), t2.if((0, n.not)(a), () => {
          e2.error(true), i.allErrors || t2.break();
        });
      }), e2.ok(a);
    } };
    t.default = s;
  }