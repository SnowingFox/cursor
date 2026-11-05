// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 45037 range:1373847..1374439
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
45037: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(79657), o = { keyword: "not", schemaType: ["object", "boolean"], trackErrors: true, code(e2) {
      const { gen: t2, schema: r2, it: o2 } = e2;
      if ((0, n.alwaysValidSchema)(o2, r2)) return void e2.fail();
      const s = t2.name("valid");
      e2.subschema({ keyword: "not", compositeRule: true, createErrors: false, allErrors: false }, s), e2.failResult(s, () => e2.reset(), () => e2.error());
    }, error: { message: "must NOT be valid" } };
    t.default = o;
  }