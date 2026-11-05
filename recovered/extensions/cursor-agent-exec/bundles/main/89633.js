// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 89633 range:11203112..11203668
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
89633: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = r(79657), o = r(79244), i = { keyword: "const", $data: true, error: { message: "must be equal to constant", params: ({ schemaCode: e2 }) => n._`{allowedValue: ${e2}}` }, code(e2) {
      const { gen: t2, data: r2, $data: i2, schemaCode: a, schema: c } = e2;
      i2 || c && "object" == typeof c ? e2.fail$data(n._`!${(0, s.useFunc)(t2, o.default)}(${r2}, ${a})`) : e2.fail(n._`${c} !== ${r2}`);
    } };
    t.default = i;
  }