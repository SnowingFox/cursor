// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 98063 range:7918028..7919443
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98063: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateAdditionalItems = void 0;
    const n = r(95183), o = r(79657), s = { keyword: "additionalItems", type: "array", schemaType: ["boolean", "object"], before: "uniqueItems", error: { message: ({ params: { len: e2 } }) => n.str`must NOT have more than ${e2} items`, params: ({ params: { len: e2 } }) => n._`{limit: ${e2}}` }, code(e2) {
      const { parentSchema: t2, it: r2 } = e2, { items: n2 } = t2;
      Array.isArray(n2) ? i(e2, n2) : (0, o.checkStrictMode)(r2, '"additionalItems" is ignored when "items" is not an array of schemas');
    } };
    function i(e2, t2) {
      const { gen: r2, schema: s2, data: i2, keyword: a, it: l } = e2;
      l.items = true;
      const c = r2.const("len", n._`${i2}.length`);
      if (false === s2) e2.setParams({ len: t2.length }), e2.pass(n._`${c} <= ${t2.length}`);
      else if ("object" == typeof s2 && !(0, o.alwaysValidSchema)(l, s2)) {
        const s3 = r2.var("valid", n._`${c} <= ${t2.length}`);
        r2.if((0, n.not)(s3), () => (function(s4) {
          r2.forRange("i", t2.length, c, (t3) => {
            e2.subschema({ keyword: a, dataProp: t3, dataPropType: o.Type.Num }, s4), l.allErrors || r2.if((0, n.not)(s4), () => r2.break());
          });
        })(s3)), e2.ok(s3);
      }
    }
    t.validateAdditionalItems = i, t.default = s;
  }