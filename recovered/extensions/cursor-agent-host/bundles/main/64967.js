// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 64967 range:10325599..10327189
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
64967: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(68255), s = r(95183), o = r(79657), i = r(79657), a = { keyword: "patternProperties", type: "object", schemaType: "object", code(e2) {
      const { gen: t2, schema: r2, data: a2, parentSchema: c, it: l } = e2, { opts: u } = l, d = (0, n.allSchemaProperties)(r2), p = d.filter((e3) => (0, o.alwaysValidSchema)(l, r2[e3]));
      if (0 === d.length || p.length === d.length && (!l.opts.unevaluated || true === l.props)) return;
      const m = u.strictSchema && !u.allowMatchingProperties && c.properties, h = t2.name("valid");
      true === l.props || l.props instanceof s.Name || (l.props = (0, i.evaluatedPropsToName)(t2, l.props));
      const { props: f } = l;
      function g(e3) {
        for (const t3 in m) new RegExp(e3).test(t3) && (0, o.checkStrictMode)(l, `property ${t3} matches pattern ${e3} (use allowMatchingProperties)`);
      }
      function y(r3) {
        t2.forIn("key", a2, (o2) => {
          t2.if(s._`${(0, n.usePattern)(e2, r3)}.test(${o2})`, () => {
            const n2 = p.includes(r3);
            n2 || e2.subschema({ keyword: "patternProperties", schemaProp: r3, dataProp: o2, dataPropType: i.Type.Str }, h), l.opts.unevaluated && true !== f ? t2.assign(s._`${f}[${o2}]`, true) : n2 || l.allErrors || t2.if((0, s.not)(h), () => t2.break());
          });
        });
      }
      !(function() {
        for (const e3 of d) m && g(e3), l.allErrors ? y(e3) : (t2.var(h, true), y(e3), t2.if(h));
      })();
    } };
    t.default = a;
  }