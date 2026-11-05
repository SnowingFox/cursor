// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8063 range:750355..751795
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8063: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.validateAdditionalItems = void 0;
    const n2 = r2(5183), o2 = r2(9657), s2 = { keyword: "additionalItems", type: "array", schemaType: ["boolean", "object"], before: "uniqueItems", error: { message: ({ params: { len: e3 } }) => n2.str`must NOT have more than ${e3} items`, params: ({ params: { len: e3 } }) => n2._`{limit: ${e3}}` }, code(e3) {
      const { parentSchema: t3, it: r3 } = e3, { items: n3 } = t3;
      Array.isArray(n3) ? i2(e3, n3) : (0, o2.checkStrictMode)(r3, '"additionalItems" is ignored when "items" is not an array of schemas');
    } };
    function i2(e3, t3) {
      const { gen: r3, schema: s3, data: i3, keyword: a2, it: c } = e3;
      c.items = true;
      const u = r3.const("len", n2._`${i3}.length`);
      if (false === s3) e3.setParams({ len: t3.length }), e3.pass(n2._`${u} <= ${t3.length}`);
      else if ("object" == typeof s3 && !(0, o2.alwaysValidSchema)(c, s3)) {
        const s4 = r3.var("valid", n2._`${u} <= ${t3.length}`);
        r3.if((0, n2.not)(s4), () => (function(s5) {
          r3.forRange("i", t3.length, u, (t4) => {
            e3.subschema({ keyword: a2, dataProp: t4, dataPropType: o2.Type.Num }, s5), c.allErrors || r3.if((0, n2.not)(s5), () => r3.break());
          });
        })(s4)), e3.ok(s4);
      }
    }
    t2.validateAdditionalItems = i2, t2.default = s2;
  }