// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 93589 range:11311977..11312629
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93589: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = { keyword: ["maxItems", "minItems"], type: "array", schemaType: "number", $data: true, error: { message({ keyword: e2, schemaCode: t2 }) {
      const r2 = "maxItems" === e2 ? "more" : "fewer";
      return n.str`must NOT have ${r2} than ${t2} items`;
    }, params: ({ schemaCode: e2 }) => n._`{limit: ${e2}}` }, code(e2) {
      const { keyword: t2, data: r2, schemaCode: s2 } = e2, o = "maxItems" === t2 ? n.operators.GT : n.operators.LT;
      e2.fail$data(n._`${r2}.length ${o} ${s2}`);
    } };
    t.default = s;
  }