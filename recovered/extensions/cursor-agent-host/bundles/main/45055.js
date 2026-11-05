// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 45055 range:7845885..7848065
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
45055: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateSchemaDeps = t.validatePropertyDeps = t.error = void 0;
    const n = r(95183), s = r(79657), o = r(68255);
    t.error = { message: ({ params: { property: e2, depsCount: t2, deps: r2 } }) => {
      const s2 = 1 === t2 ? "property" : "properties";
      return n.str`must have ${s2} ${r2} when property ${e2} is present`;
    }, params: ({ params: { property: e2, depsCount: t2, deps: r2, missingProperty: s2 } }) => n._`{property: ${e2},
    missingProperty: ${s2},
    depsCount: ${t2},
    deps: ${r2}}` };
    const i = { keyword: "dependencies", type: "object", schemaType: "object", error: t.error, code(e2) {
      const [t2, r2] = (function({ schema: e3 }) {
        const t3 = {}, r3 = {};
        for (const n2 in e3) {
          if ("__proto__" === n2) continue;
          (Array.isArray(e3[n2]) ? t3 : r3)[n2] = e3[n2];
        }
        return [t3, r3];
      })(e2);
      a(e2, t2), c(e2, r2);
    } };
    function a(e2, t2 = e2.schema) {
      const { gen: r2, data: s2, it: i2 } = e2;
      if (0 === Object.keys(t2).length) return;
      const a2 = r2.let("missing");
      for (const c2 in t2) {
        const l = t2[c2];
        if (0 === l.length) continue;
        const u = (0, o.propertyInData)(r2, s2, c2, i2.opts.ownProperties);
        e2.setParams({ property: c2, depsCount: l.length, deps: l.join(", ") }), i2.allErrors ? r2.if(u, () => {
          for (const t3 of l) (0, o.checkReportMissingProp)(e2, t3);
        }) : (r2.if(n._`${u} && (${(0, o.checkMissingProp)(e2, l, a2)})`), (0, o.reportMissingProp)(e2, a2), r2.else());
      }
    }
    function c(e2, t2 = e2.schema) {
      const { gen: r2, data: n2, keyword: i2, it: a2 } = e2, c2 = r2.name("valid");
      for (const l in t2) (0, s.alwaysValidSchema)(a2, t2[l]) || (r2.if((0, o.propertyInData)(r2, n2, l, a2.opts.ownProperties), () => {
        const t3 = e2.subschema({ keyword: i2, schemaProp: l }, c2);
        e2.mergeValidEvaluated(t3, c2);
      }, () => r2.var(c2, true)), e2.ok(c2));
    }
    t.validatePropertyDeps = a, t.validateSchemaDeps = c, t.default = i;
  }