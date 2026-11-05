// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8408 range:774156..774992
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8408: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = n2.operators, s2 = { maximum: { okStr: "<=", ok: o2.LTE, fail: o2.GT }, minimum: { okStr: ">=", ok: o2.GTE, fail: o2.LT }, exclusiveMaximum: { okStr: "<", ok: o2.LT, fail: o2.GTE }, exclusiveMinimum: { okStr: ">", ok: o2.GT, fail: o2.LTE } }, i2 = { message: ({ keyword: e3, schemaCode: t3 }) => n2.str`must be ${s2[e3].okStr} ${t3}`, params: ({ keyword: e3, schemaCode: t3 }) => n2._`{comparison: ${s2[e3].okStr}, limit: ${t3}}` }, a2 = { keyword: Object.keys(s2), type: "number", schemaType: "number", $data: true, error: i2, code(e3) {
      const { keyword: t3, data: r3, schemaCode: o3 } = e3;
      e3.fail$data(n2._`${r3} ${s2[t3].fail} ${o3} || isNaN(${r3})`);
    } };
    t2.default = a2;
  }