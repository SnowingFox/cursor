// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 3838 range:153032..153610
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3838: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(79657), s = { keyword: "allOf", schemaType: "array", code(e2) {
      const { gen: t2, schema: r2, it: s2 } = e2;
      if (!Array.isArray(r2)) throw new Error("ajv implementation error");
      const o = t2.name("valid");
      r2.forEach((t3, r3) => {
        if ((0, n.alwaysValidSchema)(s2, t3)) return;
        const i = e2.subschema({ keyword: "allOf", schemaProp: r3 }, o);
        e2.ok(o), e2.mergeEvaluated(i);
      });
    } };
    t.default = s;
  }