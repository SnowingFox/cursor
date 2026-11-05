// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 93819 range:14456234..14459481
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93819: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = r(83770), o = r(76257), i = r(4989), a = r(79657), c = { keyword: "discriminator", type: "object", schemaType: "object", error: { message: ({ params: { discrError: e2, tagName: t2 } }) => e2 === s.DiscrError.Tag ? `tag "${t2}" must be string` : `value of tag "${t2}" must be in oneOf`, params: ({ params: { discrError: e2, tag: t2, tagName: r2 } }) => n._`{error: ${e2}, tag: ${r2}, tagValue: ${t2}}` }, code(e2) {
      const { gen: t2, data: r2, schema: c2, parentSchema: l, it: u } = e2, { oneOf: d } = l;
      if (!u.opts.discriminator) throw new Error("discriminator: requires discriminator option");
      const p = c2.propertyName;
      if ("string" != typeof p) throw new Error("discriminator: requires propertyName");
      if (c2.mapping) throw new Error("discriminator: mapping is not supported");
      if (!d) throw new Error("discriminator: requires oneOf keyword");
      const m = t2.let("valid", false), h = t2.const("tag", n._`${r2}${(0, n.getProperty)(p)}`);
      function f(r3) {
        const s2 = t2.name("valid"), o2 = e2.subschema({ keyword: "oneOf", schemaProp: r3 }, s2);
        return e2.mergeEvaluated(o2, n.Name), s2;
      }
      t2.if(n._`typeof ${h} == "string"`, () => (function() {
        const r3 = (function() {
          var e3;
          const t3 = {}, r4 = s2(l);
          let n2 = true;
          for (let t4 = 0; t4 < d.length; t4++) {
            let l2 = d[t4];
            if ((null == l2 ? void 0 : l2.$ref) && !(0, a.schemaHasRulesButRef)(l2, u.self.RULES)) {
              const e4 = l2.$ref;
              if (l2 = o.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, e4), l2 instanceof o.SchemaEnv && (l2 = l2.schema), void 0 === l2) throw new i.default(u.opts.uriResolver, u.baseId, e4);
            }
            const m3 = null === (e3 = null == l2 ? void 0 : l2.properties) || void 0 === e3 ? void 0 : e3[p];
            if ("object" != typeof m3) throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${p}"`);
            n2 = n2 && (r4 || s2(l2)), c3(m3, t4);
          }
          if (!n2) throw new Error(`discriminator: "${p}" must be required`);
          return t3;
          function s2({ required: e4 }) {
            return Array.isArray(e4) && e4.includes(p);
          }
          function c3(e4, t4) {
            if (e4.const) m2(e4.const, t4);
            else {
              if (!e4.enum) throw new Error(`discriminator: "properties/${p}" must have "const" or "enum"`);
              for (const r5 of e4.enum) m2(r5, t4);
            }
          }
          function m2(e4, r5) {
            if ("string" != typeof e4 || e4 in t3) throw new Error(`discriminator: "${p}" values must be unique strings`);
            t3[e4] = r5;
          }
        })();
        t2.if(false);
        for (const e3 in r3) t2.elseIf(n._`${h} === ${e3}`), t2.assign(m, f(r3[e3]));
        t2.else(), e2.error(false, { discrError: s.DiscrError.Mapping, tag: h, tagName: p }), t2.endIf();
      })(), () => e2.error(false, { discrError: s.DiscrError.Tag, tag: h, tagName: p })), e2.ok(m);
    } };
    t.default = c;
  }