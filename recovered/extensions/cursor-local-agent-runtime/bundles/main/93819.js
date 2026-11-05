// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 93819 range:7777574..7780821
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93819: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = r(83770), s = r(76257), i = r(4989), a = r(79657), l = { keyword: "discriminator", type: "object", schemaType: "object", error: { message: ({ params: { discrError: e2, tagName: t2 } }) => e2 === o.DiscrError.Tag ? `tag "${t2}" must be string` : `value of tag "${t2}" must be in oneOf`, params: ({ params: { discrError: e2, tag: t2, tagName: r2 } }) => n._`{error: ${e2}, tag: ${r2}, tagValue: ${t2}}` }, code(e2) {
      const { gen: t2, data: r2, schema: l2, parentSchema: c, it: u } = e2, { oneOf: d } = c;
      if (!u.opts.discriminator) throw new Error("discriminator: requires discriminator option");
      const p = l2.propertyName;
      if ("string" != typeof p) throw new Error("discriminator: requires propertyName");
      if (l2.mapping) throw new Error("discriminator: mapping is not supported");
      if (!d) throw new Error("discriminator: requires oneOf keyword");
      const h = t2.let("valid", false), m = t2.const("tag", n._`${r2}${(0, n.getProperty)(p)}`);
      function f(r3) {
        const o2 = t2.name("valid"), s2 = e2.subschema({ keyword: "oneOf", schemaProp: r3 }, o2);
        return e2.mergeEvaluated(s2, n.Name), o2;
      }
      t2.if(n._`typeof ${m} == "string"`, () => (function() {
        const r3 = (function() {
          var e3;
          const t3 = {}, r4 = o2(c);
          let n2 = true;
          for (let t4 = 0; t4 < d.length; t4++) {
            let c2 = d[t4];
            if ((null == c2 ? void 0 : c2.$ref) && !(0, a.schemaHasRulesButRef)(c2, u.self.RULES)) {
              const e4 = c2.$ref;
              if (c2 = s.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, e4), c2 instanceof s.SchemaEnv && (c2 = c2.schema), void 0 === c2) throw new i.default(u.opts.uriResolver, u.baseId, e4);
            }
            const h3 = null === (e3 = null == c2 ? void 0 : c2.properties) || void 0 === e3 ? void 0 : e3[p];
            if ("object" != typeof h3) throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${p}"`);
            n2 = n2 && (r4 || o2(c2)), l3(h3, t4);
          }
          if (!n2) throw new Error(`discriminator: "${p}" must be required`);
          return t3;
          function o2({ required: e4 }) {
            return Array.isArray(e4) && e4.includes(p);
          }
          function l3(e4, t4) {
            if (e4.const) h2(e4.const, t4);
            else {
              if (!e4.enum) throw new Error(`discriminator: "properties/${p}" must have "const" or "enum"`);
              for (const r5 of e4.enum) h2(r5, t4);
            }
          }
          function h2(e4, r5) {
            if ("string" != typeof e4 || e4 in t3) throw new Error(`discriminator: "${p}" values must be unique strings`);
            t3[e4] = r5;
          }
        })();
        t2.if(false);
        for (const e3 in r3) t2.elseIf(n._`${m} === ${e3}`), t2.assign(h, f(r3[e3]));
        t2.else(), e2.error(false, { discrError: o.DiscrError.Mapping, tag: m, tagName: p }), t2.endIf();
      })(), () => e2.error(false, { discrError: o.DiscrError.Tag, tag: m, tagName: p })), e2.ok(h);
    } };
    t.default = l;
  }