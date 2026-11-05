// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5055 range:359988..362196
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5055: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.validateSchemaDeps = t2.validatePropertyDeps = t2.error = void 0;
    const n2 = r2(5183), o2 = r2(9657), s2 = r2(8255);
    t2.error = { message: ({ params: { property: e3, depsCount: t3, deps: r3 } }) => {
      const o3 = 1 === t3 ? "property" : "properties";
      return n2.str`must have ${o3} ${r3} when property ${e3} is present`;
    }, params: ({ params: { property: e3, depsCount: t3, deps: r3, missingProperty: o3 } }) => n2._`{property: ${e3},
    missingProperty: ${o3},
    depsCount: ${t3},
    deps: ${r3}}` };
    const i2 = { keyword: "dependencies", type: "object", schemaType: "object", error: t2.error, code(e3) {
      const [t3, r3] = (function({ schema: e4 }) {
        const t4 = {}, r4 = {};
        for (const n3 in e4) {
          if ("__proto__" === n3) continue;
          (Array.isArray(e4[n3]) ? t4 : r4)[n3] = e4[n3];
        }
        return [t4, r4];
      })(e3);
      a2(e3, t3), c(e3, r3);
    } };
    function a2(e3, t3 = e3.schema) {
      const { gen: r3, data: o3, it: i3 } = e3;
      if (0 === Object.keys(t3).length) return;
      const a3 = r3.let("missing");
      for (const c2 in t3) {
        const u = t3[c2];
        if (0 === u.length) continue;
        const l = (0, s2.propertyInData)(r3, o3, c2, i3.opts.ownProperties);
        e3.setParams({ property: c2, depsCount: u.length, deps: u.join(", ") }), i3.allErrors ? r3.if(l, () => {
          for (const t4 of u) (0, s2.checkReportMissingProp)(e3, t4);
        }) : (r3.if(n2._`${l} && (${(0, s2.checkMissingProp)(e3, u, a3)})`), (0, s2.reportMissingProp)(e3, a3), r3.else());
      }
    }
    function c(e3, t3 = e3.schema) {
      const { gen: r3, data: n3, keyword: i3, it: a3 } = e3, c2 = r3.name("valid");
      for (const u in t3) (0, o2.alwaysValidSchema)(a3, t3[u]) || (r3.if((0, s2.propertyInData)(r3, n3, u, a3.opts.ownProperties), () => {
        const t4 = e3.subschema({ keyword: i3, schemaProp: u }, c2);
        e3.mergeValidEvaluated(t4, c2);
      }, () => r3.var(c2, true)), e3.ok(c2));
    }
    t2.validatePropertyDeps = a2, t2.validateSchemaDeps = c, t2.default = i2;
  }