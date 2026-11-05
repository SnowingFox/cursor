// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 56805 range:8716993..8718203
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56805: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = r(79657), o = { keyword: "oneOf", schemaType: "array", trackErrors: true, error: { message: "must match exactly one schema in oneOf", params: ({ params: e2 }) => n._`{passingSchemas: ${e2.passing}}` }, code(e2) {
      const { gen: t2, schema: r2, parentSchema: o2, it: i } = e2;
      if (!Array.isArray(r2)) throw new Error("ajv implementation error");
      if (i.opts.discriminator && o2.discriminator) return;
      const a = r2, c = t2.let("valid", false), l = t2.let("passing", null), u = t2.name("_valid");
      e2.setParams({ passing: l }), t2.block(function() {
        a.forEach((r3, o3) => {
          let a2;
          (0, s.alwaysValidSchema)(i, r3) ? t2.var(u, true) : a2 = e2.subschema({ keyword: "oneOf", schemaProp: o3, compositeRule: true }, u), o3 > 0 && t2.if(n._`${u} && ${c}`).assign(c, false).assign(l, n._`[${l}, ${o3}]`).else(), t2.if(u, () => {
            t2.assign(c, true), t2.assign(l, o3), a2 && e2.mergeEvaluated(a2, n.Name);
          });
        });
      }), e2.result(c, () => e2.reset(), () => e2.error(true));
    } };
    t.default = o;
  }