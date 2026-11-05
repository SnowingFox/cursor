// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 54573 range:4580195..4580985
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54573: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = r(79657), o = r(90247), i = { keyword: ["maxLength", "minLength"], type: "string", schemaType: "number", $data: true, error: { message({ keyword: e2, schemaCode: t2 }) {
      const r2 = "maxLength" === e2 ? "more" : "fewer";
      return n.str`must NOT have ${r2} than ${t2} characters`;
    }, params: ({ schemaCode: e2 }) => n._`{limit: ${e2}}` }, code(e2) {
      const { keyword: t2, data: r2, schemaCode: i2, it: a } = e2, c = "maxLength" === t2 ? n.operators.GT : n.operators.LT, l = false === a.opts.unicode ? n._`${r2}.length` : n._`${(0, s.useFunc)(e2.gen, o.default)}(${r2})`;
      e2.fail$data(n._`${l} ${c} ${i2}`);
    } };
    t.default = i;
  }