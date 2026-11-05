// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 3838 range:33523..34101
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3838: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(79657), o = { keyword: "allOf", schemaType: "array", code(e2) {
      const { gen: t2, schema: r2, it: o2 } = e2;
      if (!Array.isArray(r2)) throw new Error("ajv implementation error");
      const s = t2.name("valid");
      r2.forEach((t3, r3) => {
        if ((0, n.alwaysValidSchema)(o2, t3)) return;
        const i = e2.subschema({ keyword: "allOf", schemaProp: r3 }, s);
        e2.ok(s), e2.mergeEvaluated(i);
      });
    } };
    t.default = o;
  }