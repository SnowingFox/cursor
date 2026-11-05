// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3819 range:287490..290760
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3819: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = r2(3770), s2 = r2(6257), i2 = r2(4989), a2 = r2(9657), c = { keyword: "discriminator", type: "object", schemaType: "object", error: { message: ({ params: { discrError: e3, tagName: t3 } }) => e3 === o2.DiscrError.Tag ? `tag "${t3}" must be string` : `value of tag "${t3}" must be in oneOf`, params: ({ params: { discrError: e3, tag: t3, tagName: r3 } }) => n2._`{error: ${e3}, tag: ${r3}, tagValue: ${t3}}` }, code(e3) {
      const { gen: t3, data: r3, schema: c2, parentSchema: u, it: l } = e3, { oneOf: d } = u;
      if (!l.opts.discriminator) throw new Error("discriminator: requires discriminator option");
      const p = c2.propertyName;
      if ("string" != typeof p) throw new Error("discriminator: requires propertyName");
      if (c2.mapping) throw new Error("discriminator: mapping is not supported");
      if (!d) throw new Error("discriminator: requires oneOf keyword");
      const f = t3.let("valid", false), h = t3.const("tag", n2._`${r3}${(0, n2.getProperty)(p)}`);
      function m(r4) {
        const o3 = t3.name("valid"), s3 = e3.subschema({ keyword: "oneOf", schemaProp: r4 }, o3);
        return e3.mergeEvaluated(s3, n2.Name), o3;
      }
      t3.if(n2._`typeof ${h} == "string"`, () => (function() {
        const r4 = (function() {
          var e4;
          const t4 = {}, r5 = o3(u);
          let n3 = true;
          for (let t5 = 0; t5 < d.length; t5++) {
            let u2 = d[t5];
            if ((null == u2 ? void 0 : u2.$ref) && !(0, a2.schemaHasRulesButRef)(u2, l.self.RULES)) {
              const e5 = u2.$ref;
              if (u2 = s2.resolveRef.call(l.self, l.schemaEnv.root, l.baseId, e5), u2 instanceof s2.SchemaEnv && (u2 = u2.schema), void 0 === u2) throw new i2.default(l.opts.uriResolver, l.baseId, e5);
            }
            const f3 = null === (e4 = null == u2 ? void 0 : u2.properties) || void 0 === e4 ? void 0 : e4[p];
            if ("object" != typeof f3) throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${p}"`);
            n3 = n3 && (r5 || o3(u2)), c3(f3, t5);
          }
          if (!n3) throw new Error(`discriminator: "${p}" must be required`);
          return t4;
          function o3({ required: e5 }) {
            return Array.isArray(e5) && e5.includes(p);
          }
          function c3(e5, t5) {
            if (e5.const) f2(e5.const, t5);
            else {
              if (!e5.enum) throw new Error(`discriminator: "properties/${p}" must have "const" or "enum"`);
              for (const r6 of e5.enum) f2(r6, t5);
            }
          }
          function f2(e5, r6) {
            if ("string" != typeof e5 || e5 in t4) throw new Error(`discriminator: "${p}" values must be unique strings`);
            t4[e5] = r6;
          }
        })();
        t3.if(false);
        for (const e4 in r4) t3.elseIf(n2._`${h} === ${e4}`), t3.assign(f, m(r4[e4]));
        t3.else(), e3.error(false, { discrError: o2.DiscrError.Mapping, tag: h, tagName: p }), t3.endIf();
      })(), () => e3.error(false, { discrError: o2.DiscrError.Tag, tag: h, tagName: p })), e3.ok(f);
    } };
    t2.default = c;
  }