// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 64967 range:1972976..1974566
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
64967: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(68255), o = r(95183), s = r(79657), i = r(79657), a = { keyword: "patternProperties", type: "object", schemaType: "object", code(e2) {
      const { gen: t2, schema: r2, data: a2, parentSchema: l, it: c } = e2, { opts: u } = c, d = (0, n.allSchemaProperties)(r2), p = d.filter((e3) => (0, s.alwaysValidSchema)(c, r2[e3]));
      if (0 === d.length || p.length === d.length && (!c.opts.unevaluated || true === c.props)) return;
      const h = u.strictSchema && !u.allowMatchingProperties && l.properties, m = t2.name("valid");
      true === c.props || c.props instanceof o.Name || (c.props = (0, i.evaluatedPropsToName)(t2, c.props));
      const { props: f } = c;
      function g(e3) {
        for (const t3 in h) new RegExp(e3).test(t3) && (0, s.checkStrictMode)(c, `property ${t3} matches pattern ${e3} (use allowMatchingProperties)`);
      }
      function y(r3) {
        t2.forIn("key", a2, (s2) => {
          t2.if(o._`${(0, n.usePattern)(e2, r3)}.test(${s2})`, () => {
            const n2 = p.includes(r3);
            n2 || e2.subschema({ keyword: "patternProperties", schemaProp: r3, dataProp: s2, dataPropType: i.Type.Str }, m), c.opts.unevaluated && true !== f ? t2.assign(o._`${f}[${s2}]`, true) : n2 || c.allErrors || t2.if((0, o.not)(m), () => t2.break());
          });
        });
      }
      !(function() {
        for (const e3 of d) h && g(e3), c.allErrors ? y(e3) : (t2.var(m, true), y(e3), t2.if(m));
      })();
    } };
    t.default = a;
  }