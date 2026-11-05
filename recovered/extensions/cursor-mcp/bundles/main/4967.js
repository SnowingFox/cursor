// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4967 range:335519..337129
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4967: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(8255), o2 = r2(5183), s2 = r2(9657), i2 = r2(9657), a2 = { keyword: "patternProperties", type: "object", schemaType: "object", code(e3) {
      const { gen: t3, schema: r3, data: a3, parentSchema: c, it: u } = e3, { opts: l } = u, d = (0, n2.allSchemaProperties)(r3), p = d.filter((e4) => (0, s2.alwaysValidSchema)(u, r3[e4]));
      if (0 === d.length || p.length === d.length && (!u.opts.unevaluated || true === u.props)) return;
      const f = l.strictSchema && !l.allowMatchingProperties && c.properties, h = t3.name("valid");
      true === u.props || u.props instanceof o2.Name || (u.props = (0, i2.evaluatedPropsToName)(t3, u.props));
      const { props: m } = u;
      function g(e4) {
        for (const t4 in f) new RegExp(e4).test(t4) && (0, s2.checkStrictMode)(u, `property ${t4} matches pattern ${e4} (use allowMatchingProperties)`);
      }
      function y(r4) {
        t3.forIn("key", a3, (s3) => {
          t3.if(o2._`${(0, n2.usePattern)(e3, r4)}.test(${s3})`, () => {
            const n3 = p.includes(r4);
            n3 || e3.subschema({ keyword: "patternProperties", schemaProp: r4, dataProp: s3, dataPropType: i2.Type.Str }, h), u.opts.unevaluated && true !== m ? t3.assign(o2._`${m}[${s3}]`, true) : n3 || u.allErrors || t3.if((0, o2.not)(h), () => t3.break());
          });
        });
      }
      !(function() {
        for (const e4 of d) f && g(e4), u.allErrors ? y(e4) : (t3.var(h, true), y(e4), t3.if(h));
      })();
    } };
    t2.default = a2;
  }