// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5319 range:383689..387004
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5319: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.callRef = t2.getValidate = void 0;
    const n2 = r2(4989), o2 = r2(8255), s2 = r2(5183), i2 = r2(4489), a2 = r2(6257), c = r2(9657), u = { keyword: "$ref", schemaType: "string", code(e3) {
      const { gen: t3, schema: r3, it: o3 } = e3, { baseId: i3, schemaEnv: c2, validateName: u2, opts: p, self: f } = o3, { root: h } = c2;
      if (("#" === r3 || "#/" === r3) && i3 === h.baseId) return (function() {
        if (c2 === h) return d(e3, u2, c2, c2.$async);
        const r4 = t3.scopeValue("root", { ref: h });
        return d(e3, s2._`${r4}.validate`, h, h.$async);
      })();
      const m = a2.resolveRef.call(f, h, i3, r3);
      if (void 0 === m) throw new n2.default(o3.opts.uriResolver, i3, r3);
      return m instanceof a2.SchemaEnv ? (function(t4) {
        const r4 = l(e3, t4);
        d(e3, r4, t4, t4.$async);
      })(m) : (function(n3) {
        const o4 = t3.scopeValue("schema", true === p.code.source ? { ref: n3, code: (0, s2.stringify)(n3) } : { ref: n3 }), i4 = t3.name("valid"), a3 = e3.subschema({ schema: n3, dataTypes: [], schemaPath: s2.nil, topSchemaRef: o4, errSchemaPath: r3 }, i4);
        e3.mergeEvaluated(a3), e3.ok(i4);
      })(m);
    } };
    function l(e3, t3) {
      const { gen: r3 } = e3;
      return t3.validate ? r3.scopeValue("validate", { ref: t3.validate }) : s2._`${r3.scopeValue("wrapper", { ref: t3 })}.validate`;
    }
    function d(e3, t3, r3, n3) {
      const { gen: a3, it: u2 } = e3, { allErrors: l2, schemaEnv: d2, opts: p } = u2, f = p.passContext ? i2.default.this : s2.nil;
      function h(e4) {
        const t4 = s2._`${e4}.errors`;
        a3.assign(i2.default.vErrors, s2._`${i2.default.vErrors} === null ? ${t4} : ${i2.default.vErrors}.concat(${t4})`), a3.assign(i2.default.errors, s2._`${i2.default.vErrors}.length`);
      }
      function m(e4) {
        var t4;
        if (!u2.opts.unevaluated) return;
        const n4 = null === (t4 = null == r3 ? void 0 : r3.validate) || void 0 === t4 ? void 0 : t4.evaluated;
        if (true !== u2.props) if (n4 && !n4.dynamicProps) void 0 !== n4.props && (u2.props = c.mergeEvaluated.props(a3, n4.props, u2.props));
        else {
          const t5 = a3.var("props", s2._`${e4}.evaluated.props`);
          u2.props = c.mergeEvaluated.props(a3, t5, u2.props, s2.Name);
        }
        if (true !== u2.items) if (n4 && !n4.dynamicItems) void 0 !== n4.items && (u2.items = c.mergeEvaluated.items(a3, n4.items, u2.items));
        else {
          const t5 = a3.var("items", s2._`${e4}.evaluated.items`);
          u2.items = c.mergeEvaluated.items(a3, t5, u2.items, s2.Name);
        }
      }
      n3 ? (function() {
        if (!d2.$async) throw new Error("async schema referenced by sync schema");
        const r4 = a3.let("valid");
        a3.try(() => {
          a3.code(s2._`await ${(0, o2.callValidateCode)(e3, t3, f)}`), m(t3), l2 || a3.assign(r4, true);
        }, (e4) => {
          a3.if(s2._`!(${e4} instanceof ${u2.ValidationError})`, () => a3.throw(e4)), h(e4), l2 || a3.assign(r4, false);
        }), e3.ok(r4);
      })() : e3.result((0, o2.callValidateCode)(e3, t3, f), () => m(t3), () => h(t3));
    }
    t2.getValidate = l, t2.callRef = d, t2.default = u;
  }