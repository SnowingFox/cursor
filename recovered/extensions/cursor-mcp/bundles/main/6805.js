// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6805 range:578784..580012
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6805: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = r2(9657), s2 = { keyword: "oneOf", schemaType: "array", trackErrors: true, error: { message: "must match exactly one schema in oneOf", params: ({ params: e3 }) => n2._`{passingSchemas: ${e3.passing}}` }, code(e3) {
      const { gen: t3, schema: r3, parentSchema: s3, it: i2 } = e3;
      if (!Array.isArray(r3)) throw new Error("ajv implementation error");
      if (i2.opts.discriminator && s3.discriminator) return;
      const a2 = r3, c = t3.let("valid", false), u = t3.let("passing", null), l = t3.name("_valid");
      e3.setParams({ passing: u }), t3.block(function() {
        a2.forEach((r4, s4) => {
          let a3;
          (0, o2.alwaysValidSchema)(i2, r4) ? t3.var(l, true) : a3 = e3.subschema({ keyword: "oneOf", schemaProp: s4, compositeRule: true }, l), s4 > 0 && t3.if(n2._`${l} && ${c}`).assign(c, false).assign(u, n2._`[${u}, ${s4}]`).else(), t3.if(l, () => {
            t3.assign(c, true), t3.assign(u, s4), a3 && e3.mergeEvaluated(a3, n2.Name);
          });
        });
      }), e3.result(c, () => e3.reset(), () => e3.error(true));
    } };
    t2.default = s2;
  }