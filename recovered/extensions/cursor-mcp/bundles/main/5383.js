// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5383 range:387655..389960
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5383: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = r2(9657), s2 = { keyword: "contains", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", trackErrors: true, error: { message: ({ params: { min: e3, max: t3 } }) => void 0 === t3 ? n2.str`must contain at least ${e3} valid item(s)` : n2.str`must contain at least ${e3} and no more than ${t3} valid item(s)`, params: ({ params: { min: e3, max: t3 } }) => void 0 === t3 ? n2._`{minContains: ${e3}}` : n2._`{minContains: ${e3}, maxContains: ${t3}}` }, code(e3) {
      const { gen: t3, schema: r3, parentSchema: s3, data: i2, it: a2 } = e3;
      let c, u;
      const { minContains: l, maxContains: d } = s3;
      a2.opts.next ? (c = void 0 === l ? 1 : l, u = d) : c = 1;
      const p = t3.const("len", n2._`${i2}.length`);
      if (e3.setParams({ min: c, max: u }), void 0 === u && 0 === c) return void (0, o2.checkStrictMode)(a2, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      if (void 0 !== u && c > u) return (0, o2.checkStrictMode)(a2, '"minContains" > "maxContains" is always invalid'), void e3.fail();
      if ((0, o2.alwaysValidSchema)(a2, r3)) {
        let t4 = n2._`${p} >= ${c}`;
        return void 0 !== u && (t4 = n2._`${t4} && ${p} <= ${u}`), void e3.pass(t4);
      }
      a2.items = true;
      const f = t3.name("valid");
      function h() {
        const e4 = t3.name("_valid"), r4 = t3.let("count", 0);
        m(e4, () => t3.if(e4, () => (function(e5) {
          t3.code(n2._`${e5}++`), void 0 === u ? t3.if(n2._`${e5} >= ${c}`, () => t3.assign(f, true).break()) : (t3.if(n2._`${e5} > ${u}`, () => t3.assign(f, false).break()), 1 === c ? t3.assign(f, true) : t3.if(n2._`${e5} >= ${c}`, () => t3.assign(f, true)));
        })(r4)));
      }
      function m(r4, n3) {
        t3.forRange("i", 0, p, (t4) => {
          e3.subschema({ keyword: "contains", dataProp: t4, dataPropType: o2.Type.Num, compositeRule: true }, r4), n3();
        });
      }
      void 0 === u && 1 === c ? m(f, () => t3.if(f, () => t3.break())) : 0 === c ? (t3.let(f, true), void 0 !== u && t3.if(n2._`${i2}.length > 0`, h)) : (t3.let(f, false), h()), e3.result(f, () => e3.reset());
    } };
    t2.default = s2;
  }