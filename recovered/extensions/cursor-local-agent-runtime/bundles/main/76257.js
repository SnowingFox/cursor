// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 76257 range:7261360..7267815
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76257: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.resolveSchema = t.getCompilingSchema = t.resolveRef = t.compileSchema = t.SchemaEnv = void 0;
    const n = r(95183), o = r(98532), s = r(44489), i = r(23237), a = r(79657), l = r(21188);
    class c {
      constructor(e2) {
        var t2;
        let r2;
        this.refs = {}, this.dynamicAnchors = {}, "object" == typeof e2.schema && (r2 = e2.schema), this.schema = e2.schema, this.schemaId = e2.schemaId, this.root = e2.root || this, this.baseId = null !== (t2 = e2.baseId) && void 0 !== t2 ? t2 : (0, i.normalizeId)(null == r2 ? void 0 : r2[e2.schemaId || "$id"]), this.schemaPath = e2.schemaPath, this.localRefs = e2.localRefs, this.meta = e2.meta, this.$async = null == r2 ? void 0 : r2.$async, this.refs = {};
      }
    }
    function u(e2) {
      const t2 = p.call(this, e2);
      if (t2) return t2;
      const r2 = (0, i.getFullPath)(this.opts.uriResolver, e2.root.baseId), { es5: a2, lines: c2 } = this.opts.code, { ownProperties: u2 } = this.opts, d2 = new n.CodeGen(this.scope, { es5: a2, lines: c2, ownProperties: u2 });
      let h2;
      e2.$async && (h2 = d2.scopeValue("Error", { ref: o.default, code: n._`require("ajv/dist/runtime/validation_error").default` }));
      const m2 = d2.scopeName("validate");
      e2.validateName = m2;
      const f2 = { gen: d2, allErrors: this.opts.allErrors, data: s.default.data, parentData: s.default.parentData, parentDataProperty: s.default.parentDataProperty, dataNames: [s.default.data], dataPathArr: [n.nil], dataLevel: 0, dataTypes: [], definedProperties: /* @__PURE__ */ new Set(), topSchemaRef: d2.scopeValue("schema", true === this.opts.code.source ? { ref: e2.schema, code: (0, n.stringify)(e2.schema) } : { ref: e2.schema }), validateName: m2, ValidationError: h2, schema: e2.schema, schemaEnv: e2, rootId: r2, baseId: e2.baseId || r2, schemaPath: n.nil, errSchemaPath: e2.schemaPath || (this.opts.jtd ? "" : "#"), errorPath: n._`""`, opts: this.opts, self: this };
      let g2;
      try {
        this._compilations.add(e2), (0, l.validateFunctionCode)(f2), d2.optimize(this.opts.code.optimize);
        const t3 = d2.toString();
        g2 = `${d2.scopeRefs(s.default.scope)}return ${t3}`, this.opts.code.process && (g2 = this.opts.code.process(g2, e2));
        const r3 = new Function(`${s.default.self}`, `${s.default.scope}`, g2)(this, this.scope.get());
        if (this.scope.value(m2, { ref: r3 }), r3.errors = null, r3.schema = e2.schema, r3.schemaEnv = e2, e2.$async && (r3.$async = true), true === this.opts.code.source && (r3.source = { validateName: m2, validateCode: t3, scopeValues: d2._values }), this.opts.unevaluated) {
          const { props: e3, items: t4 } = f2;
          r3.evaluated = { props: e3 instanceof n.Name ? void 0 : e3, items: t4 instanceof n.Name ? void 0 : t4, dynamicProps: e3 instanceof n.Name, dynamicItems: t4 instanceof n.Name }, r3.source && (r3.source.evaluated = (0, n.stringify)(r3.evaluated));
        }
        return e2.validate = r3, e2;
      } catch (t3) {
        throw delete e2.validate, delete e2.validateName, g2 && this.logger.error("Error compiling schema, function code:", g2), t3;
      } finally {
        this._compilations.delete(e2);
      }
    }
    function d(e2) {
      return (0, i.inlineRef)(e2.schema, this.opts.inlineRefs) ? e2.schema : e2.validate ? e2 : u.call(this, e2);
    }
    function p(e2) {
      for (const t2 of this._compilations) if (h(t2, e2)) return t2;
    }
    function h(e2, t2) {
      return e2.schema === t2.schema && e2.root === t2.root && e2.baseId === t2.baseId;
    }
    function m(e2, t2) {
      let r2;
      for (; "string" == typeof (r2 = this.refs[t2]); ) t2 = r2;
      return r2 || this.schemas[t2] || f.call(this, e2, t2);
    }
    function f(e2, t2) {
      const r2 = this.opts.uriResolver.parse(t2), n2 = (0, i._getFullPath)(this.opts.uriResolver, r2);
      let o2 = (0, i.getFullPath)(this.opts.uriResolver, e2.baseId, void 0);
      if (Object.keys(e2.schema).length > 0 && n2 === o2) return y.call(this, r2, e2);
      const s2 = (0, i.normalizeId)(n2), a2 = this.refs[s2] || this.schemas[s2];
      if ("string" == typeof a2) {
        const t3 = f.call(this, e2, a2);
        if ("object" != typeof (null == t3 ? void 0 : t3.schema)) return;
        return y.call(this, r2, t3);
      }
      if ("object" == typeof (null == a2 ? void 0 : a2.schema)) {
        if (a2.validate || u.call(this, a2), s2 === (0, i.normalizeId)(t2)) {
          const { schema: t3 } = a2, { schemaId: r3 } = this.opts, n3 = t3[r3];
          return n3 && (o2 = (0, i.resolveUrl)(this.opts.uriResolver, o2, n3)), new c({ schema: t3, schemaId: r3, root: e2, baseId: o2 });
        }
        return y.call(this, r2, a2);
      }
    }
    t.SchemaEnv = c, t.compileSchema = u, t.resolveRef = function(e2, t2, r2) {
      var n2;
      r2 = (0, i.resolveUrl)(this.opts.uriResolver, t2, r2);
      const o2 = e2.refs[r2];
      if (o2) return o2;
      let s2 = m.call(this, e2, r2);
      if (void 0 === s2) {
        const o3 = null === (n2 = e2.localRefs) || void 0 === n2 ? void 0 : n2[r2], { schemaId: i2 } = this.opts;
        o3 && (s2 = new c({ schema: o3, schemaId: i2, root: e2, baseId: t2 }));
      }
      return void 0 !== s2 ? e2.refs[r2] = d.call(this, s2) : void 0;
    }, t.getCompilingSchema = p, t.resolveSchema = f;
    const g = /* @__PURE__ */ new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
    function y(e2, { baseId: t2, schema: r2, root: n2 }) {
      var o2;
      if ("/" !== (null === (o2 = e2.fragment) || void 0 === o2 ? void 0 : o2[0])) return;
      for (const n3 of e2.fragment.slice(1).split("/")) {
        if ("boolean" == typeof r2) return;
        const e3 = r2[(0, a.unescapeFragment)(n3)];
        if (void 0 === e3) return;
        const o3 = "object" == typeof (r2 = e3) && r2[this.opts.schemaId];
        !g.has(n3) && o3 && (t2 = (0, i.resolveUrl)(this.opts.uriResolver, t2, o3));
      }
      let s2;
      if ("boolean" != typeof r2 && r2.$ref && !(0, a.schemaHasRulesButRef)(r2, this.RULES)) {
        const e3 = (0, i.resolveUrl)(this.opts.uriResolver, t2, r2.$ref);
        s2 = f.call(this, n2, e3);
      }
      const { schemaId: l2 } = this.opts;
      return s2 = s2 || new c({ schema: r2, schemaId: l2, root: n2, baseId: t2 }), s2.schema !== s2.root.schema ? s2 : void 0;
    }
  }