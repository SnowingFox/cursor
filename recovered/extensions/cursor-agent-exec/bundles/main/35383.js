// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 35383 range:2942312..2944584
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35383: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = r(79657), o = { keyword: "contains", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", trackErrors: true, error: { message: ({ params: { min: e2, max: t2 } }) => void 0 === t2 ? n.str`must contain at least ${e2} valid item(s)` : n.str`must contain at least ${e2} and no more than ${t2} valid item(s)`, params: ({ params: { min: e2, max: t2 } }) => void 0 === t2 ? n._`{minContains: ${e2}}` : n._`{minContains: ${e2}, maxContains: ${t2}}` }, code(e2) {
      const { gen: t2, schema: r2, parentSchema: o2, data: i, it: a } = e2;
      let c, l;
      const { minContains: u, maxContains: d } = o2;
      a.opts.next ? (c = void 0 === u ? 1 : u, l = d) : c = 1;
      const p = t2.const("len", n._`${i}.length`);
      if (e2.setParams({ min: c, max: l }), void 0 === l && 0 === c) return void (0, s.checkStrictMode)(a, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      if (void 0 !== l && c > l) return (0, s.checkStrictMode)(a, '"minContains" > "maxContains" is always invalid'), void e2.fail();
      if ((0, s.alwaysValidSchema)(a, r2)) {
        let t3 = n._`${p} >= ${c}`;
        return void 0 !== l && (t3 = n._`${t3} && ${p} <= ${l}`), void e2.pass(t3);
      }
      a.items = true;
      const m = t2.name("valid");
      function h() {
        const e3 = t2.name("_valid"), r3 = t2.let("count", 0);
        f(e3, () => t2.if(e3, () => (function(e4) {
          t2.code(n._`${e4}++`), void 0 === l ? t2.if(n._`${e4} >= ${c}`, () => t2.assign(m, true).break()) : (t2.if(n._`${e4} > ${l}`, () => t2.assign(m, false).break()), 1 === c ? t2.assign(m, true) : t2.if(n._`${e4} >= ${c}`, () => t2.assign(m, true)));
        })(r3)));
      }
      function f(r3, n2) {
        t2.forRange("i", 0, p, (t3) => {
          e2.subschema({ keyword: "contains", dataProp: t3, dataPropType: s.Type.Num, compositeRule: true }, r3), n2();
        });
      }
      void 0 === l && 1 === c ? f(m, () => t2.if(m, () => t2.break())) : 0 === c ? (t2.let(m, true), void 0 !== l && t2.if(n._`${i}.length > 0`, h)) : (t2.let(m, false), h()), e2.result(m, () => e2.reset());
    } };
    t.default = o;
  }