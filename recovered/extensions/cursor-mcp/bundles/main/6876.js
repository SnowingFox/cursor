// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6876 range:583873..584570
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6876: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = r2(9657), s2 = r2(8255), i2 = r2(8063), a2 = { keyword: "items", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", error: { message: ({ params: { len: e3 } }) => n2.str`must NOT have more than ${e3} items`, params: ({ params: { len: e3 } }) => n2._`{limit: ${e3}}` }, code(e3) {
      const { schema: t3, parentSchema: r3, it: n3 } = e3, { prefixItems: a3 } = r3;
      n3.items = true, (0, o2.alwaysValidSchema)(n3, t3) || (a3 ? (0, i2.validateAdditionalItems)(e3, a3) : e3.ok((0, s2.validateArray)(e3)));
    } };
    t2.default = a2;
  }