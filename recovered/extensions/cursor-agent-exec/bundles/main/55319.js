// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 55319 range:4595046..4598322
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55319: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.callRef = t.getValidate = void 0;
    const n = r(4989), s = r(68255), o = r(95183), i = r(44489), a = r(76257), c = r(79657), l = { keyword: "$ref", schemaType: "string", code(e2) {
      const { gen: t2, schema: r2, it: s2 } = e2, { baseId: i2, schemaEnv: c2, validateName: l2, opts: p, self: m } = s2, { root: h } = c2;
      if (("#" === r2 || "#/" === r2) && i2 === h.baseId) return (function() {
        if (c2 === h) return d(e2, l2, c2, c2.$async);
        const r3 = t2.scopeValue("root", { ref: h });
        return d(e2, o._`${r3}.validate`, h, h.$async);
      })();
      const f = a.resolveRef.call(m, h, i2, r2);
      if (void 0 === f) throw new n.default(s2.opts.uriResolver, i2, r2);
      return f instanceof a.SchemaEnv ? (function(t3) {
        const r3 = u(e2, t3);
        d(e2, r3, t3, t3.$async);
      })(f) : (function(n2) {
        const s3 = t2.scopeValue("schema", true === p.code.source ? { ref: n2, code: (0, o.stringify)(n2) } : { ref: n2 }), i3 = t2.name("valid"), a2 = e2.subschema({ schema: n2, dataTypes: [], schemaPath: o.nil, topSchemaRef: s3, errSchemaPath: r2 }, i3);
        e2.mergeEvaluated(a2), e2.ok(i3);
      })(f);
    } };
    function u(e2, t2) {
      const { gen: r2 } = e2;
      return t2.validate ? r2.scopeValue("validate", { ref: t2.validate }) : o._`${r2.scopeValue("wrapper", { ref: t2 })}.validate`;
    }
    function d(e2, t2, r2, n2) {
      const { gen: a2, it: l2 } = e2, { allErrors: u2, schemaEnv: d2, opts: p } = l2, m = p.passContext ? i.default.this : o.nil;
      function h(e3) {
        const t3 = o._`${e3}.errors`;
        a2.assign(i.default.vErrors, o._`${i.default.vErrors} === null ? ${t3} : ${i.default.vErrors}.concat(${t3})`), a2.assign(i.default.errors, o._`${i.default.vErrors}.length`);
      }
      function f(e3) {
        var t3;
        if (!l2.opts.unevaluated) return;
        const n3 = null === (t3 = null == r2 ? void 0 : r2.validate) || void 0 === t3 ? void 0 : t3.evaluated;
        if (true !== l2.props) if (n3 && !n3.dynamicProps) void 0 !== n3.props && (l2.props = c.mergeEvaluated.props(a2, n3.props, l2.props));
        else {
          const t4 = a2.var("props", o._`${e3}.evaluated.props`);
          l2.props = c.mergeEvaluated.props(a2, t4, l2.props, o.Name);
        }
        if (true !== l2.items) if (n3 && !n3.dynamicItems) void 0 !== n3.items && (l2.items = c.mergeEvaluated.items(a2, n3.items, l2.items));
        else {
          const t4 = a2.var("items", o._`${e3}.evaluated.items`);
          l2.items = c.mergeEvaluated.items(a2, t4, l2.items, o.Name);
        }
      }
      n2 ? (function() {
        if (!d2.$async) throw new Error("async schema referenced by sync schema");
        const r3 = a2.let("valid");
        a2.try(() => {
          a2.code(o._`await ${(0, s.callValidateCode)(e2, t2, m)}`), f(t2), u2 || a2.assign(r3, true);
        }, (e3) => {
          a2.if(o._`!(${e3} instanceof ${l2.ValidationError})`, () => a2.throw(e3)), h(e3), u2 || a2.assign(r3, false);
        }), e2.ok(r3);
      })() : e2.result((0, s.callValidateCode)(e2, t2, m), () => f(t2), () => h(t2));
    }
    t.getValidate = u, t.callRef = d, t.default = l;
  }