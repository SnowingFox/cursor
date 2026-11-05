// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 14493 range:904066..904722
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
14493: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = { keyword: "multipleOf", type: "number", schemaType: "number", $data: true, error: { message: ({ schemaCode: e2 }) => n.str`must be multiple of ${e2}`, params: ({ schemaCode: e2 }) => n._`{multipleOf: ${e2}}` }, code(e2) {
      const { gen: t2, data: r2, schemaCode: s2, it: o } = e2, i = o.opts.multipleOfPrecision, a = t2.let("res"), c = i ? n._`Math.abs(Math.round(${a}) - ${a}) > 1e-${i}` : n._`${a} !== parseInt(${a})`;
      e2.fail$data(n._`(${s2} === 0 || (${a} = ${r2}/${s2}, ${c}))`);
    } };
    t.default = s;
  }