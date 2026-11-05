// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4968 range:337131..354564
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4968: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.CodeGen = t2.Name = t2.nil = t2.stringify = t2.str = t2._ = t2.KeywordCxt = void 0;
    var n2 = r2(1188);
    Object.defineProperty(t2, "KeywordCxt", { enumerable: true, get: function() {
      return n2.KeywordCxt;
    } });
    var o2 = r2(5183);
    Object.defineProperty(t2, "_", { enumerable: true, get: function() {
      return o2._;
    } }), Object.defineProperty(t2, "str", { enumerable: true, get: function() {
      return o2.str;
    } }), Object.defineProperty(t2, "stringify", { enumerable: true, get: function() {
      return o2.stringify;
    } }), Object.defineProperty(t2, "nil", { enumerable: true, get: function() {
      return o2.nil;
    } }), Object.defineProperty(t2, "Name", { enumerable: true, get: function() {
      return o2.Name;
    } }), Object.defineProperty(t2, "CodeGen", { enumerable: true, get: function() {
      return o2.CodeGen;
    } });
    const s2 = r2(8532), i2 = r2(4989), a2 = r2(8758), c = r2(6257), u = r2(5183), l = r2(3237), d = r2(8018), p = r2(9657), f = r2(3411), h = r2(7902), m = (e3, t3) => new RegExp(e3, t3);
    m.code = "new RegExp";
    const g = ["removeAdditional", "useDefaults", "coerceTypes"], y = /* @__PURE__ */ new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]), _ = { errorDataPath: "", format: "`validateFormats: false` can be used instead.", nullable: '"nullable" keyword is supported by default.', jsonPointers: "Deprecated jsPropertySyntax can be used instead.", extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.", missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.", processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`", sourceCode: "Use option `code: {source: true}`", strictDefaults: "It is default now, see option `strict`.", strictKeywords: "It is default now, see option `strict`.", uniqueItems: '"uniqueItems" keyword is always validated.', unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).", cache: "Map is used as cache, schema object as key.", serialize: "Map is used as cache, schema object as key.", ajvErrors: "It is default now." }, v = { ignoreKeywordsWithRef: "", jsPropertySyntax: "", unicode: '"minLength"/"maxLength" account for unicode characters by default.' };
    function w(e3) {
      var t3, r3, n3, o3, s3, i3, a3, c2, u2, l2, d2, p2, f2, g2, y2, _2, v2, w2, b2, S2, k2, E2, x2, T2, O2;
      const P2 = e3.strict, I2 = null === (t3 = e3.code) || void 0 === t3 ? void 0 : t3.optimize, C2 = true === I2 || void 0 === I2 ? 1 : I2 || 0, A2 = null !== (n3 = null === (r3 = e3.code) || void 0 === r3 ? void 0 : r3.regExp) && void 0 !== n3 ? n3 : m, $2 = null !== (o3 = e3.uriResolver) && void 0 !== o3 ? o3 : h.default;
      return { strictSchema: null === (i3 = null !== (s3 = e3.strictSchema) && void 0 !== s3 ? s3 : P2) || void 0 === i3 || i3, strictNumbers: null === (c2 = null !== (a3 = e3.strictNumbers) && void 0 !== a3 ? a3 : P2) || void 0 === c2 || c2, strictTypes: null !== (l2 = null !== (u2 = e3.strictTypes) && void 0 !== u2 ? u2 : P2) && void 0 !== l2 ? l2 : "log", strictTuples: null !== (p2 = null !== (d2 = e3.strictTuples) && void 0 !== d2 ? d2 : P2) && void 0 !== p2 ? p2 : "log", strictRequired: null !== (g2 = null !== (f2 = e3.strictRequired) && void 0 !== f2 ? f2 : P2) && void 0 !== g2 && g2, code: e3.code ? { ...e3.code, optimize: C2, regExp: A2 } : { optimize: C2, regExp: A2 }, loopRequired: null !== (y2 = e3.loopRequired) && void 0 !== y2 ? y2 : 200, loopEnum: null !== (_2 = e3.loopEnum) && void 0 !== _2 ? _2 : 200, meta: null === (v2 = e3.meta) || void 0 === v2 || v2, messages: null === (w2 = e3.messages) || void 0 === w2 || w2, inlineRefs: null === (b2 = e3.inlineRefs) || void 0 === b2 || b2, schemaId: null !== (S2 = e3.schemaId) && void 0 !== S2 ? S2 : "$id", addUsedSchema: null === (k2 = e3.addUsedSchema) || void 0 === k2 || k2, validateSchema: null === (E2 = e3.validateSchema) || void 0 === E2 || E2, validateFormats: null === (x2 = e3.validateFormats) || void 0 === x2 || x2, unicodeRegExp: null === (T2 = e3.unicodeRegExp) || void 0 === T2 || T2, int32range: null === (O2 = e3.int32range) || void 0 === O2 || O2, uriResolver: $2 };
    }
    class b {
      constructor(e3 = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), e3 = this.opts = { ...e3, ...w(e3) };
        const { es5: t3, lines: r3 } = this.opts.code;
        this.scope = new u.ValueScope({ scope: {}, prefixes: y, es5: t3, lines: r3 }), this.logger = (function(e4) {
          if (false === e4) return P;
          if (void 0 === e4) return console;
          if (e4.log && e4.warn && e4.error) return e4;
          throw new Error("logger must implement log, warn and error methods");
        })(e3.logger);
        const n3 = e3.validateFormats;
        e3.validateFormats = false, this.RULES = (0, a2.getRules)(), S.call(this, _, e3, "NOT SUPPORTED"), S.call(this, v, e3, "DEPRECATED", "warn"), this._metaOpts = O.call(this), e3.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), e3.keywords && T.call(this, e3.keywords), "object" == typeof e3.meta && this.addMetaSchema(e3.meta), E.call(this), e3.validateFormats = n3;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: e3, meta: t3, schemaId: r3 } = this.opts;
        let n3 = f;
        "id" === r3 && (n3 = { ...f }, n3.id = n3.$id, delete n3.$id), t3 && e3 && this.addMetaSchema(n3, n3[r3], false);
      }
      defaultMeta() {
        const { meta: e3, schemaId: t3 } = this.opts;
        return this.opts.defaultMeta = "object" == typeof e3 ? e3[t3] || e3 : void 0;
      }
      validate(e3, t3) {
        let r3;
        if ("string" == typeof e3) {
          if (r3 = this.getSchema(e3), !r3) throw new Error(`no schema with key or ref "${e3}"`);
        } else r3 = this.compile(e3);
        const n3 = r3(t3);
        return "$async" in r3 || (this.errors = r3.errors), n3;
      }
      compile(e3, t3) {
        const r3 = this._addSchema(e3, t3);
        return r3.validate || this._compileSchemaEnv(r3);
      }
      compileAsync(e3, t3) {
        if ("function" != typeof this.opts.loadSchema) throw new Error("options.loadSchema should be a function");
        const { loadSchema: r3 } = this.opts;
        return n3.call(this, e3, t3);
        async function n3(e4, t4) {
          await o3.call(this, e4.$schema);
          const r4 = this._addSchema(e4, t4);
          return r4.validate || s3.call(this, r4);
        }
        async function o3(e4) {
          e4 && !this.getSchema(e4) && await n3.call(this, { $ref: e4 }, true);
        }
        async function s3(e4) {
          try {
            return this._compileSchemaEnv(e4);
          } catch (t4) {
            if (!(t4 instanceof i2.default)) throw t4;
            return a3.call(this, t4), await c2.call(this, t4.missingSchema), s3.call(this, e4);
          }
        }
        function a3({ missingSchema: e4, missingRef: t4 }) {
          if (this.refs[e4]) throw new Error(`AnySchema ${e4} is loaded but ${t4} cannot be resolved`);
        }
        async function c2(e4) {
          const r4 = await u2.call(this, e4);
          this.refs[e4] || await o3.call(this, r4.$schema), this.refs[e4] || this.addSchema(r4, e4, t3);
        }
        async function u2(e4) {
          const t4 = this._loading[e4];
          if (t4) return t4;
          try {
            return await (this._loading[e4] = r3(e4));
          } finally {
            delete this._loading[e4];
          }
        }
      }
      addSchema(e3, t3, r3, n3 = this.opts.validateSchema) {
        if (Array.isArray(e3)) {
          for (const t4 of e3) this.addSchema(t4, void 0, r3, n3);
          return this;
        }
        let o3;
        if ("object" == typeof e3) {
          const { schemaId: t4 } = this.opts;
          if (o3 = e3[t4], void 0 !== o3 && "string" != typeof o3) throw new Error(`schema ${t4} must be string`);
        }
        return t3 = (0, l.normalizeId)(t3 || o3), this._checkUnique(t3), this.schemas[t3] = this._addSchema(e3, r3, t3, n3, true), this;
      }
      addMetaSchema(e3, t3, r3 = this.opts.validateSchema) {
        return this.addSchema(e3, t3, true, r3), this;
      }
      validateSchema(e3, t3) {
        if ("boolean" == typeof e3) return true;
        let r3;
        if (r3 = e3.$schema, void 0 !== r3 && "string" != typeof r3) throw new Error("$schema must be a string");
        if (r3 = r3 || this.opts.defaultMeta || this.defaultMeta(), !r3) return this.logger.warn("meta-schema not available"), this.errors = null, true;
        const n3 = this.validate(r3, e3);
        if (!n3 && t3) {
          const e4 = "schema is invalid: " + this.errorsText();
          if ("log" !== this.opts.validateSchema) throw new Error(e4);
          this.logger.error(e4);
        }
        return n3;
      }
      getSchema(e3) {
        let t3;
        for (; "string" == typeof (t3 = k.call(this, e3)); ) e3 = t3;
        if (void 0 === t3) {
          const { schemaId: r3 } = this.opts, n3 = new c.SchemaEnv({ schema: {}, schemaId: r3 });
          if (t3 = c.resolveSchema.call(this, n3, e3), !t3) return;
          this.refs[e3] = t3;
        }
        return t3.validate || this._compileSchemaEnv(t3);
      }
      removeSchema(e3) {
        if (e3 instanceof RegExp) return this._removeAllSchemas(this.schemas, e3), this._removeAllSchemas(this.refs, e3), this;
        switch (typeof e3) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const t3 = k.call(this, e3);
            return "object" == typeof t3 && this._cache.delete(t3.schema), delete this.schemas[e3], delete this.refs[e3], this;
          }
          case "object": {
            const t3 = e3;
            this._cache.delete(t3);
            let r3 = e3[this.opts.schemaId];
            return r3 && (r3 = (0, l.normalizeId)(r3), delete this.schemas[r3], delete this.refs[r3]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      addVocabulary(e3) {
        for (const t3 of e3) this.addKeyword(t3);
        return this;
      }
      addKeyword(e3, t3) {
        let r3;
        if ("string" == typeof e3) r3 = e3, "object" == typeof t3 && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), t3.keyword = r3);
        else {
          if ("object" != typeof e3 || void 0 !== t3) throw new Error("invalid addKeywords parameters");
          if (r3 = (t3 = e3).keyword, Array.isArray(r3) && !r3.length) throw new Error("addKeywords: keyword must be string or non-empty array");
        }
        if (C.call(this, r3, t3), !t3) return (0, p.eachItem)(r3, (e4) => A.call(this, e4)), this;
        R.call(this, t3);
        const n3 = { ...t3, type: (0, d.getJSONTypes)(t3.type), schemaType: (0, d.getJSONTypes)(t3.schemaType) };
        return (0, p.eachItem)(r3, 0 === n3.type.length ? (e4) => A.call(this, e4, n3) : (e4) => n3.type.forEach((t4) => A.call(this, e4, n3, t4))), this;
      }
      getKeyword(e3) {
        const t3 = this.RULES.all[e3];
        return "object" == typeof t3 ? t3.definition : !!t3;
      }
      removeKeyword(e3) {
        const { RULES: t3 } = this;
        delete t3.keywords[e3], delete t3.all[e3];
        for (const r3 of t3.rules) {
          const t4 = r3.rules.findIndex((t5) => t5.keyword === e3);
          t4 >= 0 && r3.rules.splice(t4, 1);
        }
        return this;
      }
      addFormat(e3, t3) {
        return "string" == typeof t3 && (t3 = new RegExp(t3)), this.formats[e3] = t3, this;
      }
      errorsText(e3 = this.errors, { separator: t3 = ", ", dataVar: r3 = "data" } = {}) {
        return e3 && 0 !== e3.length ? e3.map((e4) => `${r3}${e4.instancePath} ${e4.message}`).reduce((e4, r4) => e4 + t3 + r4) : "No errors";
      }
      $dataMetaSchema(e3, t3) {
        const r3 = this.RULES.all;
        e3 = JSON.parse(JSON.stringify(e3));
        for (const n3 of t3) {
          const t4 = n3.split("/").slice(1);
          let o3 = e3;
          for (const e4 of t4) o3 = o3[e4];
          for (const e4 in r3) {
            const t5 = r3[e4];
            if ("object" != typeof t5) continue;
            const { $data: n4 } = t5.definition, s3 = o3[e4];
            n4 && s3 && (o3[e4] = M(s3));
          }
        }
        return e3;
      }
      _removeAllSchemas(e3, t3) {
        for (const r3 in e3) {
          const n3 = e3[r3];
          t3 && !t3.test(r3) || ("string" == typeof n3 ? delete e3[r3] : n3 && !n3.meta && (this._cache.delete(n3.schema), delete e3[r3]));
        }
      }
      _addSchema(e3, t3, r3, n3 = this.opts.validateSchema, o3 = this.opts.addUsedSchema) {
        let s3;
        const { schemaId: i3 } = this.opts;
        if ("object" == typeof e3) s3 = e3[i3];
        else {
          if (this.opts.jtd) throw new Error("schema must be object");
          if ("boolean" != typeof e3) throw new Error("schema must be object or boolean");
        }
        let a3 = this._cache.get(e3);
        if (void 0 !== a3) return a3;
        r3 = (0, l.normalizeId)(s3 || r3);
        const u2 = l.getSchemaRefs.call(this, e3, r3);
        return a3 = new c.SchemaEnv({ schema: e3, schemaId: i3, meta: t3, baseId: r3, localRefs: u2 }), this._cache.set(a3.schema, a3), o3 && !r3.startsWith("#") && (r3 && this._checkUnique(r3), this.refs[r3] = a3), n3 && this.validateSchema(e3, true), a3;
      }
      _checkUnique(e3) {
        if (this.schemas[e3] || this.refs[e3]) throw new Error(`schema with key or id "${e3}" already exists`);
      }
      _compileSchemaEnv(e3) {
        if (e3.meta ? this._compileMetaSchema(e3) : c.compileSchema.call(this, e3), !e3.validate) throw new Error("ajv implementation error");
        return e3.validate;
      }
      _compileMetaSchema(e3) {
        const t3 = this.opts;
        this.opts = this._metaOpts;
        try {
          c.compileSchema.call(this, e3);
        } finally {
          this.opts = t3;
        }
      }
    }
    function S(e3, t3, r3, n3 = "error") {
      for (const o3 in e3) {
        const s3 = o3;
        s3 in t3 && this.logger[n3](`${r3}: option ${o3}. ${e3[s3]}`);
      }
    }
    function k(e3) {
      return e3 = (0, l.normalizeId)(e3), this.schemas[e3] || this.refs[e3];
    }
    function E() {
      const e3 = this.opts.schemas;
      if (e3) if (Array.isArray(e3)) this.addSchema(e3);
      else for (const t3 in e3) this.addSchema(e3[t3], t3);
    }
    function x() {
      for (const e3 in this.opts.formats) {
        const t3 = this.opts.formats[e3];
        t3 && this.addFormat(e3, t3);
      }
    }
    function T(e3) {
      if (Array.isArray(e3)) this.addVocabulary(e3);
      else {
        this.logger.warn("keywords option as map is deprecated, pass array");
        for (const t3 in e3) {
          const r3 = e3[t3];
          r3.keyword || (r3.keyword = t3), this.addKeyword(r3);
        }
      }
    }
    function O() {
      const e3 = { ...this.opts };
      for (const t3 of g) delete e3[t3];
      return e3;
    }
    b.ValidationError = s2.default, b.MissingRefError = i2.default, t2.default = b;
    const P = { log() {
    }, warn() {
    }, error() {
    } };
    const I = /^[a-z_$][a-z0-9_$:-]*$/i;
    function C(e3, t3) {
      const { RULES: r3 } = this;
      if ((0, p.eachItem)(e3, (e4) => {
        if (r3.keywords[e4]) throw new Error(`Keyword ${e4} is already defined`);
        if (!I.test(e4)) throw new Error(`Keyword ${e4} has invalid name`);
      }), t3 && t3.$data && !("code" in t3) && !("validate" in t3)) throw new Error('$data keyword must have "code" or "validate" function');
    }
    function A(e3, t3, r3) {
      var n3;
      const o3 = null == t3 ? void 0 : t3.post;
      if (r3 && o3) throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: s3 } = this;
      let i3 = o3 ? s3.post : s3.rules.find(({ type: e4 }) => e4 === r3);
      if (i3 || (i3 = { type: r3, rules: [] }, s3.rules.push(i3)), s3.keywords[e3] = true, !t3) return;
      const a3 = { keyword: e3, definition: { ...t3, type: (0, d.getJSONTypes)(t3.type), schemaType: (0, d.getJSONTypes)(t3.schemaType) } };
      t3.before ? $.call(this, i3, a3, t3.before) : i3.rules.push(a3), s3.all[e3] = a3, null === (n3 = t3.implements) || void 0 === n3 || n3.forEach((e4) => this.addKeyword(e4));
    }
    function $(e3, t3, r3) {
      const n3 = e3.rules.findIndex((e4) => e4.keyword === r3);
      n3 >= 0 ? e3.rules.splice(n3, 0, t3) : (e3.rules.push(t3), this.logger.warn(`rule ${r3} is not defined`));
    }
    function R(e3) {
      let { metaSchema: t3 } = e3;
      void 0 !== t3 && (e3.$data && this.opts.$data && (t3 = M(t3)), e3.validateSchema = this.compile(t3, true));
    }
    const N = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
    function M(e3) {
      return { anyOf: [e3, N] };
    }
  }