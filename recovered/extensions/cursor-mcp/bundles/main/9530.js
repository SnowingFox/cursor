// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9530 range:892428..894850
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9530: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(8255), o2 = r2(5183), s2 = r2(4489), i2 = r2(9657), a2 = { keyword: "additionalProperties", type: ["object"], schemaType: ["boolean", "object"], allowUndefined: true, trackErrors: true, error: { message: "must NOT have additional properties", params: ({ params: e3 }) => o2._`{additionalProperty: ${e3.additionalProperty}}` }, code(e3) {
      const { gen: t3, schema: r3, parentSchema: a3, data: c, errsCount: u, it: l } = e3;
      if (!u) throw new Error("ajv implementation error");
      const { allErrors: d, opts: p } = l;
      if (l.props = true, "all" !== p.removeAdditional && (0, i2.alwaysValidSchema)(l, r3)) return;
      const f = (0, n2.allSchemaProperties)(a3.properties), h = (0, n2.allSchemaProperties)(a3.patternProperties);
      function m(e4) {
        t3.code(o2._`delete ${c}[${e4}]`);
      }
      function g(n3) {
        if ("all" === p.removeAdditional || p.removeAdditional && false === r3) m(n3);
        else {
          if (false === r3) return e3.setParams({ additionalProperty: n3 }), e3.error(), void (d || t3.break());
          if ("object" == typeof r3 && !(0, i2.alwaysValidSchema)(l, r3)) {
            const r4 = t3.name("valid");
            "failing" === p.removeAdditional ? (y(n3, r4, false), t3.if((0, o2.not)(r4), () => {
              e3.reset(), m(n3);
            })) : (y(n3, r4), d || t3.if((0, o2.not)(r4), () => t3.break()));
          }
        }
      }
      function y(t4, r4, n3) {
        const o3 = { keyword: "additionalProperties", dataProp: t4, dataPropType: i2.Type.Str };
        false === n3 && Object.assign(o3, { compositeRule: true, createErrors: false, allErrors: false }), e3.subschema(o3, r4);
      }
      t3.forIn("key", c, (r4) => {
        f.length || h.length ? t3.if((function(r5) {
          let s3;
          if (f.length > 8) {
            const e4 = (0, i2.schemaRefOrVal)(l, a3.properties, "properties");
            s3 = (0, n2.isOwnProperty)(t3, e4, r5);
          } else s3 = f.length ? (0, o2.or)(...f.map((e4) => o2._`${r5} === ${e4}`)) : o2.nil;
          return h.length && (s3 = (0, o2.or)(s3, ...h.map((t4) => o2._`${(0, n2.usePattern)(e3, t4)}.test(${r5})`))), (0, o2.not)(s3);
        })(r4), () => g(r4)) : g(r4);
      }), e3.ok(o2._`${u} === ${s2.default.errors}`);
    } };
    t2.default = a2;
  }