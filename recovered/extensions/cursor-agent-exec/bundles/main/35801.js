// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 35801 range:2949714..2951249
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35801: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = r(79657), o = { keyword: "if", schemaType: ["object", "boolean"], trackErrors: true, error: { message: ({ params: e2 }) => n.str`must match "${e2.ifClause}" schema`, params: ({ params: e2 }) => n._`{failingKeyword: ${e2.ifClause}}` }, code(e2) {
      const { gen: t2, parentSchema: r2, it: o2 } = e2;
      void 0 === r2.then && void 0 === r2.else && (0, s.checkStrictMode)(o2, '"if" without "then" and "else" is ignored');
      const a = i(o2, "then"), c = i(o2, "else");
      if (!a && !c) return;
      const l = t2.let("valid", true), u = t2.name("_valid");
      if ((function() {
        const t3 = e2.subschema({ keyword: "if", compositeRule: true, createErrors: false, allErrors: false }, u);
        e2.mergeEvaluated(t3);
      })(), e2.reset(), a && c) {
        const r3 = t2.let("ifClause");
        e2.setParams({ ifClause: r3 }), t2.if(u, d("then", r3), d("else", r3));
      } else a ? t2.if(u, d("then")) : t2.if((0, n.not)(u), d("else"));
      function d(r3, s2) {
        return () => {
          const o3 = e2.subschema({ keyword: r3 }, u);
          t2.assign(l, u), e2.mergeValidEvaluated(o3, l), s2 ? t2.assign(s2, n._`${r3}`) : e2.setParams({ ifClause: r3 });
        };
      }
      e2.pass(l, () => e2.error(true));
    } };
    function i(e2, t2) {
      const r2 = e2.schema[t2];
      return void 0 !== r2 && !(0, s.alwaysValidSchema)(e2, r2);
    }
    t.default = o;
  }