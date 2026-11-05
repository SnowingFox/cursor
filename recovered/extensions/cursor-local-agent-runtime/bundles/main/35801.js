// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 35801 range:1055682..1057217
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35801: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = r(79657), s = { keyword: "if", schemaType: ["object", "boolean"], trackErrors: true, error: { message: ({ params: e2 }) => n.str`must match "${e2.ifClause}" schema`, params: ({ params: e2 }) => n._`{failingKeyword: ${e2.ifClause}}` }, code(e2) {
      const { gen: t2, parentSchema: r2, it: s2 } = e2;
      void 0 === r2.then && void 0 === r2.else && (0, o.checkStrictMode)(s2, '"if" without "then" and "else" is ignored');
      const a = i(s2, "then"), l = i(s2, "else");
      if (!a && !l) return;
      const c = t2.let("valid", true), u = t2.name("_valid");
      if ((function() {
        const t3 = e2.subschema({ keyword: "if", compositeRule: true, createErrors: false, allErrors: false }, u);
        e2.mergeEvaluated(t3);
      })(), e2.reset(), a && l) {
        const r3 = t2.let("ifClause");
        e2.setParams({ ifClause: r3 }), t2.if(u, d("then", r3), d("else", r3));
      } else a ? t2.if(u, d("then")) : t2.if((0, n.not)(u), d("else"));
      function d(r3, o2) {
        return () => {
          const s3 = e2.subschema({ keyword: r3 }, u);
          t2.assign(c, u), e2.mergeValidEvaluated(s3, c), o2 ? t2.assign(o2, n._`${r3}`) : e2.setParams({ ifClause: r3 });
        };
      }
      e2.pass(c, () => e2.error(true));
    } };
    function i(e2, t2) {
      const r2 = e2.schema[t2];
      return void 0 !== r2 && !(0, o.alwaysValidSchema)(e2, r2);
    }
    t.default = s;
  }