// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 35383 range:1048374..1050646
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35383: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = r(79657), s = { keyword: "contains", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", trackErrors: true, error: { message: ({ params: { min: e2, max: t2 } }) => void 0 === t2 ? n.str`must contain at least ${e2} valid item(s)` : n.str`must contain at least ${e2} and no more than ${t2} valid item(s)`, params: ({ params: { min: e2, max: t2 } }) => void 0 === t2 ? n._`{minContains: ${e2}}` : n._`{minContains: ${e2}, maxContains: ${t2}}` }, code(e2) {
      const { gen: t2, schema: r2, parentSchema: s2, data: i, it: a } = e2;
      let l, c;
      const { minContains: u, maxContains: d } = s2;
      a.opts.next ? (l = void 0 === u ? 1 : u, c = d) : l = 1;
      const p = t2.const("len", n._`${i}.length`);
      if (e2.setParams({ min: l, max: c }), void 0 === c && 0 === l) return void (0, o.checkStrictMode)(a, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      if (void 0 !== c && l > c) return (0, o.checkStrictMode)(a, '"minContains" > "maxContains" is always invalid'), void e2.fail();
      if ((0, o.alwaysValidSchema)(a, r2)) {
        let t3 = n._`${p} >= ${l}`;
        return void 0 !== c && (t3 = n._`${t3} && ${p} <= ${c}`), void e2.pass(t3);
      }
      a.items = true;
      const h = t2.name("valid");
      function m() {
        const e3 = t2.name("_valid"), r3 = t2.let("count", 0);
        f(e3, () => t2.if(e3, () => (function(e4) {
          t2.code(n._`${e4}++`), void 0 === c ? t2.if(n._`${e4} >= ${l}`, () => t2.assign(h, true).break()) : (t2.if(n._`${e4} > ${c}`, () => t2.assign(h, false).break()), 1 === l ? t2.assign(h, true) : t2.if(n._`${e4} >= ${l}`, () => t2.assign(h, true)));
        })(r3)));
      }
      function f(r3, n2) {
        t2.forRange("i", 0, p, (t3) => {
          e2.subschema({ keyword: "contains", dataProp: t3, dataPropType: o.Type.Num, compositeRule: true }, r3), n2();
        });
      }
      void 0 === c && 1 === l ? f(h, () => t2.if(h, () => t2.break())) : 0 === l ? (t2.let(h, true), void 0 !== c && t2.if(n._`${i}.length > 0`, m)) : (t2.let(h, false), m()), e2.result(h, () => e2.reset());
    } };
    t.default = s;
  }