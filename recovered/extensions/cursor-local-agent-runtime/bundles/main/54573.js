// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 54573 range:1738912..1739702
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54573: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = r(79657), s = r(90247), i = { keyword: ["maxLength", "minLength"], type: "string", schemaType: "number", $data: true, error: { message({ keyword: e2, schemaCode: t2 }) {
      const r2 = "maxLength" === e2 ? "more" : "fewer";
      return n.str`must NOT have ${r2} than ${t2} characters`;
    }, params: ({ schemaCode: e2 }) => n._`{limit: ${e2}}` }, code(e2) {
      const { keyword: t2, data: r2, schemaCode: i2, it: a } = e2, l = "maxLength" === t2 ? n.operators.GT : n.operators.LT, c = false === a.opts.unicode ? n._`${r2}.length` : n._`${(0, o.useFunc)(e2.gen, s.default)}(${r2})`;
      e2.fail$data(n._`${c} ${l} ${i2}`);
    } };
    t.default = i;
  }