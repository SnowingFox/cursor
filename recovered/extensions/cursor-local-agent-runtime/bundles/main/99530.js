// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 99530 range:7936157..7938549
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99530: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(68255), o = r(95183), s = r(44489), i = r(79657), a = { keyword: "additionalProperties", type: ["object"], schemaType: ["boolean", "object"], allowUndefined: true, trackErrors: true, error: { message: "must NOT have additional properties", params: ({ params: e2 }) => o._`{additionalProperty: ${e2.additionalProperty}}` }, code(e2) {
      const { gen: t2, schema: r2, parentSchema: a2, data: l, errsCount: c, it: u } = e2;
      if (!c) throw new Error("ajv implementation error");
      const { allErrors: d, opts: p } = u;
      if (u.props = true, "all" !== p.removeAdditional && (0, i.alwaysValidSchema)(u, r2)) return;
      const h = (0, n.allSchemaProperties)(a2.properties), m = (0, n.allSchemaProperties)(a2.patternProperties);
      function f(e3) {
        t2.code(o._`delete ${l}[${e3}]`);
      }
      function g(n2) {
        if ("all" === p.removeAdditional || p.removeAdditional && false === r2) f(n2);
        else {
          if (false === r2) return e2.setParams({ additionalProperty: n2 }), e2.error(), void (d || t2.break());
          if ("object" == typeof r2 && !(0, i.alwaysValidSchema)(u, r2)) {
            const r3 = t2.name("valid");
            "failing" === p.removeAdditional ? (y(n2, r3, false), t2.if((0, o.not)(r3), () => {
              e2.reset(), f(n2);
            })) : (y(n2, r3), d || t2.if((0, o.not)(r3), () => t2.break()));
          }
        }
      }
      function y(t3, r3, n2) {
        const o2 = { keyword: "additionalProperties", dataProp: t3, dataPropType: i.Type.Str };
        false === n2 && Object.assign(o2, { compositeRule: true, createErrors: false, allErrors: false }), e2.subschema(o2, r3);
      }
      t2.forIn("key", l, (r3) => {
        h.length || m.length ? t2.if((function(r4) {
          let s2;
          if (h.length > 8) {
            const e3 = (0, i.schemaRefOrVal)(u, a2.properties, "properties");
            s2 = (0, n.isOwnProperty)(t2, e3, r4);
          } else s2 = h.length ? (0, o.or)(...h.map((e3) => o._`${r4} === ${e3}`)) : o.nil;
          return m.length && (s2 = (0, o.or)(s2, ...m.map((t3) => o._`${(0, n.usePattern)(e2, t3)}.test(${r4})`))), (0, o.not)(s2);
        })(r3), () => g(r3)) : g(r3);
      }), e2.ok(o._`${c} === ${s.default.errors}`);
    } };
    t.default = a;
  }