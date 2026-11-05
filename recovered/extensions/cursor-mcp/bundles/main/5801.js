// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5801 range:441911..443467
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5801: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = r2(9657), s2 = { keyword: "if", schemaType: ["object", "boolean"], trackErrors: true, error: { message: ({ params: e3 }) => n2.str`must match "${e3.ifClause}" schema`, params: ({ params: e3 }) => n2._`{failingKeyword: ${e3.ifClause}}` }, code(e3) {
      const { gen: t3, parentSchema: r3, it: s3 } = e3;
      void 0 === r3.then && void 0 === r3.else && (0, o2.checkStrictMode)(s3, '"if" without "then" and "else" is ignored');
      const a2 = i2(s3, "then"), c = i2(s3, "else");
      if (!a2 && !c) return;
      const u = t3.let("valid", true), l = t3.name("_valid");
      if ((function() {
        const t4 = e3.subschema({ keyword: "if", compositeRule: true, createErrors: false, allErrors: false }, l);
        e3.mergeEvaluated(t4);
      })(), e3.reset(), a2 && c) {
        const r4 = t3.let("ifClause");
        e3.setParams({ ifClause: r4 }), t3.if(l, d("then", r4), d("else", r4));
      } else a2 ? t3.if(l, d("then")) : t3.if((0, n2.not)(l), d("else"));
      function d(r4, o3) {
        return () => {
          const s4 = e3.subschema({ keyword: r4 }, l);
          t3.assign(u, l), e3.mergeValidEvaluated(s4, u), o3 ? t3.assign(o3, n2._`${r4}`) : e3.setParams({ ifClause: r4 });
        };
      }
      e3.pass(u, () => e3.error(true));
    } };
    function i2(e3, t3) {
      const r3 = e3.schema[t3];
      return void 0 !== r3 && !(0, o2.alwaysValidSchema)(e3, r3);
    }
    t2.default = s2;
  }