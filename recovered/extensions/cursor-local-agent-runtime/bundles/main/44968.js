// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 44968 range:1345471..1362869
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44968: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = void 0;
    var n = r(21188);
    Object.defineProperty(t, "KeywordCxt", { enumerable: true, get: function() {
      return n.KeywordCxt;
    } });
    var o = r(95183);
    Object.defineProperty(t, "_", { enumerable: true, get: function() {
      return o._;
    } }), Object.defineProperty(t, "str", { enumerable: true, get: function() {
      return o.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: true, get: function() {
      return o.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: true, get: function() {
      return o.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: true, get: function() {
      return o.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: true, get: function() {
      return o.CodeGen;
    } });
    const s = r(98532), i = r(4989), a = r(28758), l = r(76257), c = r(95183), u = r(23237), d = r(98018), p = r(79657), h = r(43411), m = r(17902), f = (e2, t2) => new RegExp(e2, t2);
    f.code = "new RegExp";
    const g = ["removeAdditional", "useDefaults", "coerceTypes"], y = /* @__PURE__ */ new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]), v = { errorDataPath: "", format: "`validateFormats: false` can be used instead.", nullable: '"nullable" keyword is supported by default.', jsonPointers: "Deprecated jsPropertySyntax can be used instead.", extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.", missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.", processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`", sourceCode: "Use option `code: {source: true}`", strictDefaults: "It is default now, see option `strict`.", strictKeywords: "It is default now, see option `strict`.", uniqueItems: '"uniqueItems" keyword is always validated.', unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).", cache: "Map is used as cache, schema object as key.", serialize: "Map is used as cache, schema object as key.", ajvErrors: "It is default now." }, w = { ignoreKeywordsWithRef: "", jsPropertySyntax: "", unicode: '"minLength"/"maxLength" account for unicode characters by default.' };
    function b(e2) {
      var t2, r2, n2, o2, s2, i2, a2, l2, c2, u2, d2, p2, h2, g2, y2, v2, w2, b2, _2, S2, x2, k2, E2, T2, C2;
      const I2 = e2.strict, A2 = null === (t2 = e2.code) || void 0 === t2 ? void 0 : t2.optimize, P2 = true === A2 || void 0 === A2 ? 1 : A2 || 0, M2 = null !== (n2 = null === (r2 = e2.code) || void 0 === r2 ? void 0 : r2.regExp) && void 0 !== n2 ? n2 : f, R2 = null !== (o2 = e2.uriResolver) && void 0 !== o2 ? o2 : m.default;
      return { strictSchema: null === (i2 = null !== (s2 = e2.strictSchema) && void 0 !== s2 ? s2 : I2) || void 0 === i2 || i2, strictNumbers: null === (l2 = null !== (a2 = e2.strictNumbers) && void 0 !== a2 ? a2 : I2) || void 0 === l2 || l2, strictTypes: null !== (u2 = null !== (c2 = e2.strictTypes) && void 0 !== c2 ? c2 : I2) && void 0 !== u2 ? u2 : "log", strictTuples: null !== (p2 = null !== (d2 = e2.strictTuples) && void 0 !== d2 ? d2 : I2) && void 0 !== p2 ? p2 : "log", strictRequired: null !== (g2 = null !== (h2 = e2.strictRequired) && void 0 !== h2 ? h2 : I2) && void 0 !== g2 && g2, code: e2.code ? { ...e2.code, optimize: P2, regExp: M2 } : { optimize: P2, regExp: M2 }, loopRequired: null !== (y2 = e2.loopRequired) && void 0 !== y2 ? y2 : 200, loopEnum: null !== (v2 = e2.loopEnum) && void 0 !== v2 ? v2 : 200, meta: null === (w2 = e2.meta) || void 0 === w2 || w2, messages: null === (b2 = e2.messages) || void 0 === b2 || b2, inlineRefs: null === (_2 = e2.inlineRefs) || void 0 === _2 || _2, schemaId: null !== (S2 = e2.schemaId) && void 0 !== S2 ? S2 : "$id", addUsedSchema: null === (x2 = e2.addUsedSchema) || void 0 === x2 || x2, validateSchema: null === (k2 = e2.validateSchema) || void 0 === k2 || k2, validateFormats: null === (E2 = e2.validateFormats) || void 0 === E2 || E2, unicodeRegExp: null === (T2 = e2.unicodeRegExp) || void 0 === T2 || T2, int32range: null === (C2 = e2.int32range) || void 0 === C2 || C2, uriResolver: R2 };
    }
    class _ {
      constructor(e2 = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), e2 = this.opts = { ...e2, ...b(e2) };
        const { es5: t2, lines: r2 } = this.opts.code;
        this.scope = new c.ValueScope({ scope: {}, prefixes: y, es5: t2, lines: r2 }), this.logger = (function(e3) {
          if (false === e3) return I;
          if (void 0 === e3) return console;
          if (e3.log && e3.warn && e3.error) return e3;
          throw new Error("logger must implement log, warn and error methods");
        })(e2.logger);
        const n2 = e2.validateFormats;
        e2.validateFormats = false, this.RULES = (0, a.getRules)(), S.call(this, v, e2, "NOT SUPPORTED"), S.call(this, w, e2, "DEPRECATED", "warn"), this._metaOpts = C.call(this), e2.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), e2.keywords && T.call(this, e2.keywords), "object" == typeof e2.meta && this.addMetaSchema(e2.meta), k.call(this), e2.validateFormats = n2;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: e2, meta: t2, schemaId: r2 } = this.opts;
        let n2 = h;
        "id" === r2 && (n2 = { ...h }, n2.id = n2.$id, delete n2.$id), t2 && e2 && this.addMetaSchema(n2, n2[r2], false);
      }
      defaultMeta() {
        const { meta: e2, schemaId: t2 } = this.opts;
        return this.opts.defaultMeta = "object" == typeof e2 ? e2[t2] || e2 : void 0;
      }
      validate(e2, t2) {
        let r2;
        if ("string" == typeof e2) {
          if (r2 = this.getSchema(e2), !r2) throw new Error(`no schema with key or ref "${e2}"`);
        } else r2 = this.compile(e2);
        const n2 = r2(t2);
        return "$async" in r2 || (this.errors = r2.errors), n2;
      }
      compile(e2, t2) {
        const r2 = this._addSchema(e2, t2);
        return r2.validate || this._compileSchemaEnv(r2);
      }
      compileAsync(e2, t2) {
        if ("function" != typeof this.opts.loadSchema) throw new Error("options.loadSchema should be a function");
        const { loadSchema: r2 } = this.opts;
        return n2.call(this, e2, t2);
        async function n2(e3, t3) {
          await o2.call(this, e3.$schema);
          const r3 = this._addSchema(e3, t3);
          return r3.validate || s2.call(this, r3);
        }
        async function o2(e3) {
          e3 && !this.getSchema(e3) && await n2.call(this, { $ref: e3 }, true);
        }
        async function s2(e3) {
          try {
            return this._compileSchemaEnv(e3);
          } catch (t3) {
            if (!(t3 instanceof i.default)) throw t3;
            return a2.call(this, t3), await l2.call(this, t3.missingSchema), s2.call(this, e3);
          }
        }
        function a2({ missingSchema: e3, missingRef: t3 }) {
          if (this.refs[e3]) throw new Error(`AnySchema ${e3} is loaded but ${t3} cannot be resolved`);
        }
        async function l2(e3) {
          const r3 = await c2.call(this, e3);
          this.refs[e3] || await o2.call(this, r3.$schema), this.refs[e3] || this.addSchema(r3, e3, t2);
        }
        async function c2(e3) {
          const t3 = this._loading[e3];
          if (t3) return t3;
          try {
            return await (this._loading[e3] = r2(e3));
          } finally {
            delete this._loading[e3];
          }
        }
      }
      addSchema(e2, t2, r2, n2 = this.opts.validateSchema) {
        if (Array.isArray(e2)) {
          for (const t3 of e2) this.addSchema(t3, void 0, r2, n2);
          return this;
        }
        let o2;
        if ("object" == typeof e2) {
          const { schemaId: t3 } = this.opts;
          if (o2 = e2[t3], void 0 !== o2 && "string" != typeof o2) throw new Error(`schema ${t3} must be string`);
        }
        return t2 = (0, u.normalizeId)(t2 || o2), this._checkUnique(t2), this.schemas[t2] = this._addSchema(e2, r2, t2, n2, true), this;
      }
      addMetaSchema(e2, t2, r2 = this.opts.validateSchema) {
        return this.addSchema(e2, t2, true, r2), this;
      }
      validateSchema(e2, t2) {
        if ("boolean" == typeof e2) return true;
        let r2;
        if (r2 = e2.$schema, void 0 !== r2 && "string" != typeof r2) throw new Error("$schema must be a string");
        if (r2 = r2 || this.opts.defaultMeta || this.defaultMeta(), !r2) return this.logger.warn("meta-schema not available"), this.errors = null, true;
        const n2 = this.validate(r2, e2);
        if (!n2 && t2) {
          const e3 = "schema is invalid: " + this.errorsText();
          if ("log" !== this.opts.validateSchema) throw new Error(e3);
          this.logger.error(e3);
        }
        return n2;
      }
      getSchema(e2) {
        let t2;
        for (; "string" == typeof (t2 = x.call(this, e2)); ) e2 = t2;
        if (void 0 === t2) {
          const { schemaId: r2 } = this.opts, n2 = new l.SchemaEnv({ schema: {}, schemaId: r2 });
          if (t2 = l.resolveSchema.call(this, n2, e2), !t2) return;
          this.refs[e2] = t2;
        }
        return t2.validate || this._compileSchemaEnv(t2);
      }
      removeSchema(e2) {
        if (e2 instanceof RegExp) return this._removeAllSchemas(this.schemas, e2), this._removeAllSchemas(this.refs, e2), this;
        switch (typeof e2) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const t2 = x.call(this, e2);
            return "object" == typeof t2 && this._cache.delete(t2.schema), delete this.schemas[e2], delete this.refs[e2], this;
          }
          case "object": {
            const t2 = e2;
            this._cache.delete(t2);
            let r2 = e2[this.opts.schemaId];
            return r2 && (r2 = (0, u.normalizeId)(r2), delete this.schemas[r2], delete this.refs[r2]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      addVocabulary(e2) {
        for (const t2 of e2) this.addKeyword(t2);
        return this;
      }
      addKeyword(e2, t2) {
        let r2;
        if ("string" == typeof e2) r2 = e2, "object" == typeof t2 && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), t2.keyword = r2);
        else {
          if ("object" != typeof e2 || void 0 !== t2) throw new Error("invalid addKeywords parameters");
          if (r2 = (t2 = e2).keyword, Array.isArray(r2) && !r2.length) throw new Error("addKeywords: keyword must be string or non-empty array");
        }
        if (P.call(this, r2, t2), !t2) return (0, p.eachItem)(r2, (e3) => M.call(this, e3)), this;
        O.call(this, t2);
        const n2 = { ...t2, type: (0, d.getJSONTypes)(t2.type), schemaType: (0, d.getJSONTypes)(t2.schemaType) };
        return (0, p.eachItem)(r2, 0 === n2.type.length ? (e3) => M.call(this, e3, n2) : (e3) => n2.type.forEach((t3) => M.call(this, e3, n2, t3))), this;
      }
      getKeyword(e2) {
        const t2 = this.RULES.all[e2];
        return "object" == typeof t2 ? t2.definition : !!t2;
      }
      removeKeyword(e2) {
        const { RULES: t2 } = this;
        delete t2.keywords[e2], delete t2.all[e2];
        for (const r2 of t2.rules) {
          const t3 = r2.rules.findIndex((t4) => t4.keyword === e2);
          t3 >= 0 && r2.rules.splice(t3, 1);
        }
        return this;
      }
      addFormat(e2, t2) {
        return "string" == typeof t2 && (t2 = new RegExp(t2)), this.formats[e2] = t2, this;
      }
      errorsText(e2 = this.errors, { separator: t2 = ", ", dataVar: r2 = "data" } = {}) {
        return e2 && 0 !== e2.length ? e2.map((e3) => `${r2}${e3.instancePath} ${e3.message}`).reduce((e3, r3) => e3 + t2 + r3) : "No errors";
      }
      $dataMetaSchema(e2, t2) {
        const r2 = this.RULES.all;
        e2 = JSON.parse(JSON.stringify(e2));
        for (const n2 of t2) {
          const t3 = n2.split("/").slice(1);
          let o2 = e2;
          for (const e3 of t3) o2 = o2[e3];
          for (const e3 in r2) {
            const t4 = r2[e3];
            if ("object" != typeof t4) continue;
            const { $data: n3 } = t4.definition, s2 = o2[e3];
            n3 && s2 && (o2[e3] = N(s2));
          }
        }
        return e2;
      }
      _removeAllSchemas(e2, t2) {
        for (const r2 in e2) {
          const n2 = e2[r2];
          t2 && !t2.test(r2) || ("string" == typeof n2 ? delete e2[r2] : n2 && !n2.meta && (this._cache.delete(n2.schema), delete e2[r2]));
        }
      }
      _addSchema(e2, t2, r2, n2 = this.opts.validateSchema, o2 = this.opts.addUsedSchema) {
        let s2;
        const { schemaId: i2 } = this.opts;
        if ("object" == typeof e2) s2 = e2[i2];
        else {
          if (this.opts.jtd) throw new Error("schema must be object");
          if ("boolean" != typeof e2) throw new Error("schema must be object or boolean");
        }
        let a2 = this._cache.get(e2);
        if (void 0 !== a2) return a2;
        r2 = (0, u.normalizeId)(s2 || r2);
        const c2 = u.getSchemaRefs.call(this, e2, r2);
        return a2 = new l.SchemaEnv({ schema: e2, schemaId: i2, meta: t2, baseId: r2, localRefs: c2 }), this._cache.set(a2.schema, a2), o2 && !r2.startsWith("#") && (r2 && this._checkUnique(r2), this.refs[r2] = a2), n2 && this.validateSchema(e2, true), a2;
      }
      _checkUnique(e2) {
        if (this.schemas[e2] || this.refs[e2]) throw new Error(`schema with key or id "${e2}" already exists`);
      }
      _compileSchemaEnv(e2) {
        if (e2.meta ? this._compileMetaSchema(e2) : l.compileSchema.call(this, e2), !e2.validate) throw new Error("ajv implementation error");
        return e2.validate;
      }
      _compileMetaSchema(e2) {
        const t2 = this.opts;
        this.opts = this._metaOpts;
        try {
          l.compileSchema.call(this, e2);
        } finally {
          this.opts = t2;
        }
      }
    }
    function S(e2, t2, r2, n2 = "error") {
      for (const o2 in e2) {
        const s2 = o2;
        s2 in t2 && this.logger[n2](`${r2}: option ${o2}. ${e2[s2]}`);
      }
    }
    function x(e2) {
      return e2 = (0, u.normalizeId)(e2), this.schemas[e2] || this.refs[e2];
    }
    function k() {
      const e2 = this.opts.schemas;
      if (e2) if (Array.isArray(e2)) this.addSchema(e2);
      else for (const t2 in e2) this.addSchema(e2[t2], t2);
    }
    function E() {
      for (const e2 in this.opts.formats) {
        const t2 = this.opts.formats[e2];
        t2 && this.addFormat(e2, t2);
      }
    }
    function T(e2) {
      if (Array.isArray(e2)) this.addVocabulary(e2);
      else {
        this.logger.warn("keywords option as map is deprecated, pass array");
        for (const t2 in e2) {
          const r2 = e2[t2];
          r2.keyword || (r2.keyword = t2), this.addKeyword(r2);
        }
      }
    }
    function C() {
      const e2 = { ...this.opts };
      for (const t2 of g) delete e2[t2];
      return e2;
    }
    _.ValidationError = s.default, _.MissingRefError = i.default, t.default = _;
    const I = { log() {
    }, warn() {
    }, error() {
    } };
    const A = /^[a-z_$][a-z0-9_$:-]*$/i;
    function P(e2, t2) {
      const { RULES: r2 } = this;
      if ((0, p.eachItem)(e2, (e3) => {
        if (r2.keywords[e3]) throw new Error(`Keyword ${e3} is already defined`);
        if (!A.test(e3)) throw new Error(`Keyword ${e3} has invalid name`);
      }), t2 && t2.$data && !("code" in t2) && !("validate" in t2)) throw new Error('$data keyword must have "code" or "validate" function');
    }
    function M(e2, t2, r2) {
      var n2;
      const o2 = null == t2 ? void 0 : t2.post;
      if (r2 && o2) throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: s2 } = this;
      let i2 = o2 ? s2.post : s2.rules.find(({ type: e3 }) => e3 === r2);
      if (i2 || (i2 = { type: r2, rules: [] }, s2.rules.push(i2)), s2.keywords[e2] = true, !t2) return;
      const a2 = { keyword: e2, definition: { ...t2, type: (0, d.getJSONTypes)(t2.type), schemaType: (0, d.getJSONTypes)(t2.schemaType) } };
      t2.before ? R.call(this, i2, a2, t2.before) : i2.rules.push(a2), s2.all[e2] = a2, null === (n2 = t2.implements) || void 0 === n2 || n2.forEach((e3) => this.addKeyword(e3));
    }
    function R(e2, t2, r2) {
      const n2 = e2.rules.findIndex((e3) => e3.keyword === r2);
      n2 >= 0 ? e2.rules.splice(n2, 0, t2) : (e2.rules.push(t2), this.logger.warn(`rule ${r2} is not defined`));
    }
    function O(e2) {
      let { metaSchema: t2 } = e2;
      void 0 !== t2 && (e2.$data && this.opts.$data && (t2 = N(t2)), e2.validateSchema = this.compile(t2, true));
    }
    const D = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
    function N(e2) {
      return { anyOf: [e2, D] };
    }
  }