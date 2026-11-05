// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 24979 range:682325..683636
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
24979: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(21188), o = r(68255), s = r(79657), i = r(99530), a = { keyword: "properties", type: "object", schemaType: "object", code(e2) {
      const { gen: t2, schema: r2, parentSchema: a2, data: l, it: c } = e2;
      "all" === c.opts.removeAdditional && void 0 === a2.additionalProperties && i.default.code(new n.KeywordCxt(c, i.default, "additionalProperties"));
      const u = (0, o.allSchemaProperties)(r2);
      for (const e3 of u) c.definedProperties.add(e3);
      c.opts.unevaluated && u.length && true !== c.props && (c.props = s.mergeEvaluated.props(t2, (0, s.toHash)(u), c.props));
      const d = u.filter((e3) => !(0, s.alwaysValidSchema)(c, r2[e3]));
      if (0 === d.length) return;
      const p = t2.name("valid");
      for (const r3 of d) h(r3) ? m(r3) : (t2.if((0, o.propertyInData)(t2, l, r3, c.opts.ownProperties)), m(r3), c.allErrors || t2.else().var(p, true), t2.endIf()), e2.it.definedProperties.add(r3), e2.ok(p);
      function h(e3) {
        return c.opts.useDefaults && !c.compositeRule && void 0 !== r2[e3].default;
      }
      function m(t3) {
        e2.subschema({ keyword: "properties", schemaProp: t3, dataProp: t3 }, p);
      }
    } };
    t.default = a;
  }