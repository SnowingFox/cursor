// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 99530 range:11756511..11758903
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99530: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(68255), s = r(95183), o = r(44489), i = r(79657), a = { keyword: "additionalProperties", type: ["object"], schemaType: ["boolean", "object"], allowUndefined: true, trackErrors: true, error: { message: "must NOT have additional properties", params: ({ params: e2 }) => s._`{additionalProperty: ${e2.additionalProperty}}` }, code(e2) {
      const { gen: t2, schema: r2, parentSchema: a2, data: c, errsCount: l, it: u } = e2;
      if (!l) throw new Error("ajv implementation error");
      const { allErrors: d, opts: p } = u;
      if (u.props = true, "all" !== p.removeAdditional && (0, i.alwaysValidSchema)(u, r2)) return;
      const m = (0, n.allSchemaProperties)(a2.properties), h = (0, n.allSchemaProperties)(a2.patternProperties);
      function f(e3) {
        t2.code(s._`delete ${c}[${e3}]`);
      }
      function g(n2) {
        if ("all" === p.removeAdditional || p.removeAdditional && false === r2) f(n2);
        else {
          if (false === r2) return e2.setParams({ additionalProperty: n2 }), e2.error(), void (d || t2.break());
          if ("object" == typeof r2 && !(0, i.alwaysValidSchema)(u, r2)) {
            const r3 = t2.name("valid");
            "failing" === p.removeAdditional ? (y(n2, r3, false), t2.if((0, s.not)(r3), () => {
              e2.reset(), f(n2);
            })) : (y(n2, r3), d || t2.if((0, s.not)(r3), () => t2.break()));
          }
        }
      }
      function y(t3, r3, n2) {
        const s2 = { keyword: "additionalProperties", dataProp: t3, dataPropType: i.Type.Str };
        false === n2 && Object.assign(s2, { compositeRule: true, createErrors: false, allErrors: false }), e2.subschema(s2, r3);
      }
      t2.forIn("key", c, (r3) => {
        m.length || h.length ? t2.if((function(r4) {
          let o2;
          if (m.length > 8) {
            const e3 = (0, i.schemaRefOrVal)(u, a2.properties, "properties");
            o2 = (0, n.isOwnProperty)(t2, e3, r4);
          } else o2 = m.length ? (0, s.or)(...m.map((e3) => s._`${r4} === ${e3}`)) : s.nil;
          return h.length && (o2 = (0, s.or)(o2, ...h.map((t3) => s._`${(0, n.usePattern)(e2, t3)}.test(${r4})`))), (0, s.not)(o2);
        })(r3), () => g(r3)) : g(r3);
      }), e2.ok(s._`${l} === ${o.default.errors}`);
    } };
    t.default = a;
  }