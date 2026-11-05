// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 45055 range:1374441..1376621
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
45055: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateSchemaDeps = t.validatePropertyDeps = t.error = void 0;
    const n = r(95183), o = r(79657), s = r(68255);
    t.error = { message: ({ params: { property: e2, depsCount: t2, deps: r2 } }) => {
      const o2 = 1 === t2 ? "property" : "properties";
      return n.str`must have ${o2} ${r2} when property ${e2} is present`;
    }, params: ({ params: { property: e2, depsCount: t2, deps: r2, missingProperty: o2 } }) => n._`{property: ${e2},
    missingProperty: ${o2},
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
      a(e2, t2), l(e2, r2);
    } };
    function a(e2, t2 = e2.schema) {
      const { gen: r2, data: o2, it: i2 } = e2;
      if (0 === Object.keys(t2).length) return;
      const a2 = r2.let("missing");
      for (const l2 in t2) {
        const c = t2[l2];
        if (0 === c.length) continue;
        const u = (0, s.propertyInData)(r2, o2, l2, i2.opts.ownProperties);
        e2.setParams({ property: l2, depsCount: c.length, deps: c.join(", ") }), i2.allErrors ? r2.if(u, () => {
          for (const t3 of c) (0, s.checkReportMissingProp)(e2, t3);
        }) : (r2.if(n._`${u} && (${(0, s.checkMissingProp)(e2, c, a2)})`), (0, s.reportMissingProp)(e2, a2), r2.else());
      }
    }
    function l(e2, t2 = e2.schema) {
      const { gen: r2, data: n2, keyword: i2, it: a2 } = e2, l2 = r2.name("valid");
      for (const c in t2) (0, o.alwaysValidSchema)(a2, t2[c]) || (r2.if((0, s.propertyInData)(r2, n2, c, a2.opts.ownProperties), () => {
        const t3 = e2.subschema({ keyword: i2, schemaProp: c }, l2);
        e2.mergeValidEvaluated(t3, l2);
      }, () => r2.var(l2, true)), e2.ok(l2));
    }
    t.validatePropertyDeps = a, t.validateSchemaDeps = l, t.default = i;
  }