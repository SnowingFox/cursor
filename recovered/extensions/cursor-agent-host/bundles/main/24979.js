// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 24979 range:4539648..4540959
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
24979: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(21188), s = r(68255), o = r(79657), i = r(99530), a = { keyword: "properties", type: "object", schemaType: "object", code(e2) {
      const { gen: t2, schema: r2, parentSchema: a2, data: c, it: l } = e2;
      "all" === l.opts.removeAdditional && void 0 === a2.additionalProperties && i.default.code(new n.KeywordCxt(l, i.default, "additionalProperties"));
      const u = (0, s.allSchemaProperties)(r2);
      for (const e3 of u) l.definedProperties.add(e3);
      l.opts.unevaluated && u.length && true !== l.props && (l.props = o.mergeEvaluated.props(t2, (0, o.toHash)(u), l.props));
      const d = u.filter((e3) => !(0, o.alwaysValidSchema)(l, r2[e3]));
      if (0 === d.length) return;
      const p = t2.name("valid");
      for (const r3 of d) m(r3) ? h(r3) : (t2.if((0, s.propertyInData)(t2, c, r3, l.opts.ownProperties)), h(r3), l.allErrors || t2.else().var(p, true), t2.endIf()), e2.it.definedProperties.add(r3), e2.ok(p);
      function m(e3) {
        return l.opts.useDefaults && !l.compositeRule && void 0 !== r2[e3].default;
      }
      function h(t3) {
        e2.subschema({ keyword: "properties", schemaProp: t3, dataProp: t3 }, p);
      }
    } };
    t.default = a;
  }