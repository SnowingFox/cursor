// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 98063 range:15059302..15060717
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98063: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateAdditionalItems = void 0;
    const n = r(95183), s = r(79657), o = { keyword: "additionalItems", type: "array", schemaType: ["boolean", "object"], before: "uniqueItems", error: { message: ({ params: { len: e2 } }) => n.str`must NOT have more than ${e2} items`, params: ({ params: { len: e2 } }) => n._`{limit: ${e2}}` }, code(e2) {
      const { parentSchema: t2, it: r2 } = e2, { items: n2 } = t2;
      Array.isArray(n2) ? i(e2, n2) : (0, s.checkStrictMode)(r2, '"additionalItems" is ignored when "items" is not an array of schemas');
    } };
    function i(e2, t2) {
      const { gen: r2, schema: o2, data: i2, keyword: a, it: c } = e2;
      c.items = true;
      const l = r2.const("len", n._`${i2}.length`);
      if (false === o2) e2.setParams({ len: t2.length }), e2.pass(n._`${l} <= ${t2.length}`);
      else if ("object" == typeof o2 && !(0, s.alwaysValidSchema)(c, o2)) {
        const o3 = r2.var("valid", n._`${l} <= ${t2.length}`);
        r2.if((0, n.not)(o3), () => (function(o4) {
          r2.forRange("i", t2.length, l, (t3) => {
            e2.subschema({ keyword: a, dataProp: t3, dataPropType: s.Type.Num }, o4), c.allErrors || r2.if((0, n.not)(o4), () => r2.break());
          });
        })(o3)), e2.ok(o3);
      }
    }
    t.validateAdditionalItems = i, t.default = o;
  }