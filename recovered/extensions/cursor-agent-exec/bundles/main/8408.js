// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 8408 range:651370..652178
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8408: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = n.operators, o = { maximum: { okStr: "<=", ok: s.LTE, fail: s.GT }, minimum: { okStr: ">=", ok: s.GTE, fail: s.LT }, exclusiveMaximum: { okStr: "<", ok: s.LT, fail: s.GTE }, exclusiveMinimum: { okStr: ">", ok: s.GT, fail: s.LTE } }, i = { message: ({ keyword: e2, schemaCode: t2 }) => n.str`must be ${o[e2].okStr} ${t2}`, params: ({ keyword: e2, schemaCode: t2 }) => n._`{comparison: ${o[e2].okStr}, limit: ${t2}}` }, a = { keyword: Object.keys(o), type: "number", schemaType: "number", $data: true, error: i, code(e2) {
      const { keyword: t2, data: r2, schemaCode: s2 } = e2;
      e2.fail$data(n._`${r2} ${o[t2].fail} ${s2} || isNaN(${r2})`);
    } };
    t.default = a;
  }