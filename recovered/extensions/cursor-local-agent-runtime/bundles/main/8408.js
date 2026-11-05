// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 8408 range:267349..268157
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8408: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = n.operators, s = { maximum: { okStr: "<=", ok: o.LTE, fail: o.GT }, minimum: { okStr: ">=", ok: o.GTE, fail: o.LT }, exclusiveMaximum: { okStr: "<", ok: o.LT, fail: o.GTE }, exclusiveMinimum: { okStr: ">", ok: o.GT, fail: o.LTE } }, i = { message: ({ keyword: e2, schemaCode: t2 }) => n.str`must be ${s[e2].okStr} ${t2}`, params: ({ keyword: e2, schemaCode: t2 }) => n._`{comparison: ${s[e2].okStr}, limit: ${t2}}` }, a = { keyword: Object.keys(s), type: "number", schemaType: "number", $data: true, error: i, code(e2) {
      const { keyword: t2, data: r2, schemaCode: o2 } = e2;
      e2.fail$data(n._`${r2} ${s[t2].fail} ${o2} || isNaN(${r2})`);
    } };
    t.default = a;
  }