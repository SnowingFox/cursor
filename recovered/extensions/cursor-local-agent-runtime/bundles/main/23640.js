// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 23640 range:673735..674426
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23640: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = { keyword: ["maxProperties", "minProperties"], type: "object", schemaType: "number", $data: true, error: { message({ keyword: e2, schemaCode: t2 }) {
      const r2 = "maxProperties" === e2 ? "more" : "fewer";
      return n.str`must NOT have ${r2} than ${t2} properties`;
    }, params: ({ schemaCode: e2 }) => n._`{limit: ${e2}}` }, code(e2) {
      const { keyword: t2, data: r2, schemaCode: o2 } = e2, s = "maxProperties" === t2 ? n.operators.GT : n.operators.LT;
      e2.fail$data(n._`Object.keys(${r2}).length ${s} ${o2}`);
    } };
    t.default = o;
  }