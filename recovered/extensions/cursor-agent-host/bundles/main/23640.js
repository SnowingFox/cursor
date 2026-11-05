// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 23640 range:4499035..4499726
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23640: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = { keyword: ["maxProperties", "minProperties"], type: "object", schemaType: "number", $data: true, error: { message({ keyword: e2, schemaCode: t2 }) {
      const r2 = "maxProperties" === e2 ? "more" : "fewer";
      return n.str`must NOT have ${r2} than ${t2} properties`;
    }, params: ({ schemaCode: e2 }) => n._`{limit: ${e2}}` }, code(e2) {
      const { keyword: t2, data: r2, schemaCode: s2 } = e2, o = "maxProperties" === t2 ? n.operators.GT : n.operators.LT;
      e2.fail$data(n._`Object.keys(${r2}).length ${o} ${s2}`);
    } };
    t.default = s;
  }