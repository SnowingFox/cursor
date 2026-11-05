// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 55319 range:1753698..1756974
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55319: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.callRef = t.getValidate = void 0;
    const n = r(4989), o = r(68255), s = r(95183), i = r(44489), a = r(76257), l = r(79657), c = { keyword: "$ref", schemaType: "string", code(e2) {
      const { gen: t2, schema: r2, it: o2 } = e2, { baseId: i2, schemaEnv: l2, validateName: c2, opts: p, self: h } = o2, { root: m } = l2;
      if (("#" === r2 || "#/" === r2) && i2 === m.baseId) return (function() {
        if (l2 === m) return d(e2, c2, l2, l2.$async);
        const r3 = t2.scopeValue("root", { ref: m });
        return d(e2, s._`${r3}.validate`, m, m.$async);
      })();
      const f = a.resolveRef.call(h, m, i2, r2);
      if (void 0 === f) throw new n.default(o2.opts.uriResolver, i2, r2);
      return f instanceof a.SchemaEnv ? (function(t3) {
        const r3 = u(e2, t3);
        d(e2, r3, t3, t3.$async);
      })(f) : (function(n2) {
        const o3 = t2.scopeValue("schema", true === p.code.source ? { ref: n2, code: (0, s.stringify)(n2) } : { ref: n2 }), i3 = t2.name("valid"), a2 = e2.subschema({ schema: n2, dataTypes: [], schemaPath: s.nil, topSchemaRef: o3, errSchemaPath: r2 }, i3);
        e2.mergeEvaluated(a2), e2.ok(i3);
      })(f);
    } };
    function u(e2, t2) {
      const { gen: r2 } = e2;
      return t2.validate ? r2.scopeValue("validate", { ref: t2.validate }) : s._`${r2.scopeValue("wrapper", { ref: t2 })}.validate`;
    }
    function d(e2, t2, r2, n2) {
      const { gen: a2, it: c2 } = e2, { allErrors: u2, schemaEnv: d2, opts: p } = c2, h = p.passContext ? i.default.this : s.nil;
      function m(e3) {
        const t3 = s._`${e3}.errors`;
        a2.assign(i.default.vErrors, s._`${i.default.vErrors} === null ? ${t3} : ${i.default.vErrors}.concat(${t3})`), a2.assign(i.default.errors, s._`${i.default.vErrors}.length`);
      }
      function f(e3) {
        var t3;
        if (!c2.opts.unevaluated) return;
        const n3 = null === (t3 = null == r2 ? void 0 : r2.validate) || void 0 === t3 ? void 0 : t3.evaluated;
        if (true !== c2.props) if (n3 && !n3.dynamicProps) void 0 !== n3.props && (c2.props = l.mergeEvaluated.props(a2, n3.props, c2.props));
        else {
          const t4 = a2.var("props", s._`${e3}.evaluated.props`);
          c2.props = l.mergeEvaluated.props(a2, t4, c2.props, s.Name);
        }
        if (true !== c2.items) if (n3 && !n3.dynamicItems) void 0 !== n3.items && (c2.items = l.mergeEvaluated.items(a2, n3.items, c2.items));
        else {
          const t4 = a2.var("items", s._`${e3}.evaluated.items`);
          c2.items = l.mergeEvaluated.items(a2, t4, c2.items, s.Name);
        }
      }
      n2 ? (function() {
        if (!d2.$async) throw new Error("async schema referenced by sync schema");
        const r3 = a2.let("valid");
        a2.try(() => {
          a2.code(s._`await ${(0, o.callValidateCode)(e2, t2, h)}`), f(t2), u2 || a2.assign(r3, true);
        }, (e3) => {
          a2.if(s._`!(${e3} instanceof ${c2.ValidationError})`, () => a2.throw(e3)), m(e3), u2 || a2.assign(r3, false);
        }), e2.ok(r3);
      })() : e2.result((0, o.callValidateCode)(e2, t2, h), () => f(t2), () => m(t2));
    }
    t.getValidate = u, t.callRef = d, t.default = c;
  }