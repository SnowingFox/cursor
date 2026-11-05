// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 56805 range:1773148..1774358
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56805: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = r(79657), s = { keyword: "oneOf", schemaType: "array", trackErrors: true, error: { message: "must match exactly one schema in oneOf", params: ({ params: e2 }) => n._`{passingSchemas: ${e2.passing}}` }, code(e2) {
      const { gen: t2, schema: r2, parentSchema: s2, it: i } = e2;
      if (!Array.isArray(r2)) throw new Error("ajv implementation error");
      if (i.opts.discriminator && s2.discriminator) return;
      const a = r2, l = t2.let("valid", false), c = t2.let("passing", null), u = t2.name("_valid");
      e2.setParams({ passing: c }), t2.block(function() {
        a.forEach((r3, s3) => {
          let a2;
          (0, o.alwaysValidSchema)(i, r3) ? t2.var(u, true) : a2 = e2.subschema({ keyword: "oneOf", schemaProp: s3, compositeRule: true }, u), s3 > 0 && t2.if(n._`${u} && ${l}`).assign(l, false).assign(c, n._`[${c}, ${s3}]`).else(), t2.if(u, () => {
            t2.assign(l, true), t2.assign(c, s3), a2 && e2.mergeEvaluated(a2, n.Name);
          });
        });
      }), e2.result(l, () => e2.reset(), () => e2.error(true));
    } };
    t.default = s;
  }