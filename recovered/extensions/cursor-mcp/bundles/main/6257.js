// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6257 range:462151..468656
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6257: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.resolveSchema = t2.getCompilingSchema = t2.resolveRef = t2.compileSchema = t2.SchemaEnv = void 0;
    const n2 = r2(5183), o2 = r2(8532), s2 = r2(4489), i2 = r2(3237), a2 = r2(9657), c = r2(1188);
    class u {
      constructor(e3) {
        var t3;
        let r3;
        this.refs = {}, this.dynamicAnchors = {}, "object" == typeof e3.schema && (r3 = e3.schema), this.schema = e3.schema, this.schemaId = e3.schemaId, this.root = e3.root || this, this.baseId = null !== (t3 = e3.baseId) && void 0 !== t3 ? t3 : (0, i2.normalizeId)(null == r3 ? void 0 : r3[e3.schemaId || "$id"]), this.schemaPath = e3.schemaPath, this.localRefs = e3.localRefs, this.meta = e3.meta, this.$async = null == r3 ? void 0 : r3.$async, this.refs = {};
      }
    }
    function l(e3) {
      const t3 = p.call(this, e3);
      if (t3) return t3;
      const r3 = (0, i2.getFullPath)(this.opts.uriResolver, e3.root.baseId), { es5: a3, lines: u2 } = this.opts.code, { ownProperties: l2 } = this.opts, d2 = new n2.CodeGen(this.scope, { es5: a3, lines: u2, ownProperties: l2 });
      let f2;
      e3.$async && (f2 = d2.scopeValue("Error", { ref: o2.default, code: n2._`require("ajv/dist/runtime/validation_error").default` }));
      const h2 = d2.scopeName("validate");
      e3.validateName = h2;
      const m2 = { gen: d2, allErrors: this.opts.allErrors, data: s2.default.data, parentData: s2.default.parentData, parentDataProperty: s2.default.parentDataProperty, dataNames: [s2.default.data], dataPathArr: [n2.nil], dataLevel: 0, dataTypes: [], definedProperties: /* @__PURE__ */ new Set(), topSchemaRef: d2.scopeValue("schema", true === this.opts.code.source ? { ref: e3.schema, code: (0, n2.stringify)(e3.schema) } : { ref: e3.schema }), validateName: h2, ValidationError: f2, schema: e3.schema, schemaEnv: e3, rootId: r3, baseId: e3.baseId || r3, schemaPath: n2.nil, errSchemaPath: e3.schemaPath || (this.opts.jtd ? "" : "#"), errorPath: n2._`""`, opts: this.opts, self: this };
      let g2;
      try {
        this._compilations.add(e3), (0, c.validateFunctionCode)(m2), d2.optimize(this.opts.code.optimize);
        const t4 = d2.toString();
        g2 = `${d2.scopeRefs(s2.default.scope)}return ${t4}`, this.opts.code.process && (g2 = this.opts.code.process(g2, e3));
        const r4 = new Function(`${s2.default.self}`, `${s2.default.scope}`, g2)(this, this.scope.get());
        if (this.scope.value(h2, { ref: r4 }), r4.errors = null, r4.schema = e3.schema, r4.schemaEnv = e3, e3.$async && (r4.$async = true), true === this.opts.code.source && (r4.source = { validateName: h2, validateCode: t4, scopeValues: d2._values }), this.opts.unevaluated) {
          const { props: e4, items: t5 } = m2;
          r4.evaluated = { props: e4 instanceof n2.Name ? void 0 : e4, items: t5 instanceof n2.Name ? void 0 : t5, dynamicProps: e4 instanceof n2.Name, dynamicItems: t5 instanceof n2.Name }, r4.source && (r4.source.evaluated = (0, n2.stringify)(r4.evaluated));
        }
        return e3.validate = r4, e3;
      } catch (t4) {
        throw delete e3.validate, delete e3.validateName, g2 && this.logger.error("Error compiling schema, function code:", g2), t4;
      } finally {
        this._compilations.delete(e3);
      }
    }
    function d(e3) {
      return (0, i2.inlineRef)(e3.schema, this.opts.inlineRefs) ? e3.schema : e3.validate ? e3 : l.call(this, e3);
    }
    function p(e3) {
      for (const t3 of this._compilations) if (f(t3, e3)) return t3;
    }
    function f(e3, t3) {
      return e3.schema === t3.schema && e3.root === t3.root && e3.baseId === t3.baseId;
    }
    function h(e3, t3) {
      let r3;
      for (; "string" == typeof (r3 = this.refs[t3]); ) t3 = r3;
      return r3 || this.schemas[t3] || m.call(this, e3, t3);
    }
    function m(e3, t3) {
      const r3 = this.opts.uriResolver.parse(t3), n3 = (0, i2._getFullPath)(this.opts.uriResolver, r3);
      let o3 = (0, i2.getFullPath)(this.opts.uriResolver, e3.baseId, void 0);
      if (Object.keys(e3.schema).length > 0 && n3 === o3) return y.call(this, r3, e3);
      const s3 = (0, i2.normalizeId)(n3), a3 = this.refs[s3] || this.schemas[s3];
      if ("string" == typeof a3) {
        const t4 = m.call(this, e3, a3);
        if ("object" != typeof (null == t4 ? void 0 : t4.schema)) return;
        return y.call(this, r3, t4);
      }
      if ("object" == typeof (null == a3 ? void 0 : a3.schema)) {
        if (a3.validate || l.call(this, a3), s3 === (0, i2.normalizeId)(t3)) {
          const { schema: t4 } = a3, { schemaId: r4 } = this.opts, n4 = t4[r4];
          return n4 && (o3 = (0, i2.resolveUrl)(this.opts.uriResolver, o3, n4)), new u({ schema: t4, schemaId: r4, root: e3, baseId: o3 });
        }
        return y.call(this, r3, a3);
      }
    }
    t2.SchemaEnv = u, t2.compileSchema = l, t2.resolveRef = function(e3, t3, r3) {
      var n3;
      r3 = (0, i2.resolveUrl)(this.opts.uriResolver, t3, r3);
      const o3 = e3.refs[r3];
      if (o3) return o3;
      let s3 = h.call(this, e3, r3);
      if (void 0 === s3) {
        const o4 = null === (n3 = e3.localRefs) || void 0 === n3 ? void 0 : n3[r3], { schemaId: i3 } = this.opts;
        o4 && (s3 = new u({ schema: o4, schemaId: i3, root: e3, baseId: t3 }));
      }
      return void 0 !== s3 ? e3.refs[r3] = d.call(this, s3) : void 0;
    }, t2.getCompilingSchema = p, t2.resolveSchema = m;
    const g = /* @__PURE__ */ new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
    function y(e3, { baseId: t3, schema: r3, root: n3 }) {
      var o3;
      if ("/" !== (null === (o3 = e3.fragment) || void 0 === o3 ? void 0 : o3[0])) return;
      for (const n4 of e3.fragment.slice(1).split("/")) {
        if ("boolean" == typeof r3) return;
        const e4 = r3[(0, a2.unescapeFragment)(n4)];
        if (void 0 === e4) return;
        const o4 = "object" == typeof (r3 = e4) && r3[this.opts.schemaId];
        !g.has(n4) && o4 && (t3 = (0, i2.resolveUrl)(this.opts.uriResolver, t3, o4));
      }
      let s3;
      if ("boolean" != typeof r3 && r3.$ref && !(0, a2.schemaHasRulesButRef)(r3, this.RULES)) {
        const e4 = (0, i2.resolveUrl)(this.opts.uriResolver, t3, r3.$ref);
        s3 = m.call(this, n3, e4);
      }
      const { schemaId: c2 } = this.opts;
      return s3 = s3 || new u({ schema: r3, schemaId: c2, root: n3, baseId: t3 }), s3.schema !== s3.root.schema ? s3 : void 0;
    }
  }