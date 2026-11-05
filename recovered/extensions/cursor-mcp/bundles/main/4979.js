// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4979 range:355311..356640
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4979: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(1188), o2 = r2(8255), s2 = r2(9657), i2 = r2(9530), a2 = { keyword: "properties", type: "object", schemaType: "object", code(e3) {
      const { gen: t3, schema: r3, parentSchema: a3, data: c, it: u } = e3;
      "all" === u.opts.removeAdditional && void 0 === a3.additionalProperties && i2.default.code(new n2.KeywordCxt(u, i2.default, "additionalProperties"));
      const l = (0, o2.allSchemaProperties)(r3);
      for (const e4 of l) u.definedProperties.add(e4);
      u.opts.unevaluated && l.length && true !== u.props && (u.props = s2.mergeEvaluated.props(t3, (0, s2.toHash)(l), u.props));
      const d = l.filter((e4) => !(0, s2.alwaysValidSchema)(u, r3[e4]));
      if (0 === d.length) return;
      const p = t3.name("valid");
      for (const r4 of d) f(r4) ? h(r4) : (t3.if((0, o2.propertyInData)(t3, c, r4, u.opts.ownProperties)), h(r4), u.allErrors || t3.else().var(p, true), t3.endIf()), e3.it.definedProperties.add(r4), e3.ok(p);
      function f(e4) {
        return u.opts.useDefaults && !u.compositeRule && void 0 !== r3[e4].default;
      }
      function h(t4) {
        e3.subschema({ keyword: "properties", schemaProp: t4, dataProp: t4 }, p);
      }
    } };
    t2.default = a2;
  }