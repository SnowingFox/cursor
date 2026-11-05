// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 45037 range:7845291..7845883
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
45037: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(79657), s = { keyword: "not", schemaType: ["object", "boolean"], trackErrors: true, code(e2) {
      const { gen: t2, schema: r2, it: s2 } = e2;
      if ((0, n.alwaysValidSchema)(s2, r2)) return void e2.fail();
      const o = t2.name("valid");
      e2.subschema({ keyword: "not", compositeRule: true, createErrors: false, allErrors: false }, o), e2.failResult(o, () => e2.reset(), () => e2.error());
    }, error: { message: "must NOT be valid" } };
    t.default = s;
  }