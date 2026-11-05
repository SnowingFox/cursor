// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1188 range:131095..145026
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1188: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.getData = t2.KeywordCxt = t2.validateFunctionCode = void 0;
    const n2 = r2(2989), o2 = r2(8018), s2 = r2(2173), i2 = r2(8018), a2 = r2(8008), c = r2(7695), u = r2(9861), l = r2(5183), d = r2(4489), p = r2(3237), f = r2(9657), h = r2(4006);
    function m({ gen: e3, validateName: t3, schema: r3, schemaEnv: n3, opts: o3 }, s3) {
      o3.code.es5 ? e3.func(t3, l._`${d.default.data}, ${d.default.valCxt}`, n3.$async, () => {
        e3.code(l._`"use strict"; ${g(r3, o3)}`), (function(e4, t4) {
          e4.if(d.default.valCxt, () => {
            e4.var(d.default.instancePath, l._`${d.default.valCxt}.${d.default.instancePath}`), e4.var(d.default.parentData, l._`${d.default.valCxt}.${d.default.parentData}`), e4.var(d.default.parentDataProperty, l._`${d.default.valCxt}.${d.default.parentDataProperty}`), e4.var(d.default.rootData, l._`${d.default.valCxt}.${d.default.rootData}`), t4.dynamicRef && e4.var(d.default.dynamicAnchors, l._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
          }, () => {
            e4.var(d.default.instancePath, l._`""`), e4.var(d.default.parentData, l._`undefined`), e4.var(d.default.parentDataProperty, l._`undefined`), e4.var(d.default.rootData, d.default.data), t4.dynamicRef && e4.var(d.default.dynamicAnchors, l._`{}`);
          });
        })(e3, o3), e3.code(s3);
      }) : e3.func(t3, l._`${d.default.data}, ${(function(e4) {
        return l._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${e4.dynamicRef ? l._`, ${d.default.dynamicAnchors}={}` : l.nil}}={}`;
      })(o3)}`, n3.$async, () => e3.code(g(r3, o3)).code(s3));
    }
    function g(e3, t3) {
      const r3 = "object" == typeof e3 && e3[t3.schemaId];
      return r3 && (t3.code.source || t3.code.process) ? l._`/*# sourceURL=${r3} */` : l.nil;
    }
    function y(e3, t3) {
      v(e3) && (w(e3), _(e3)) ? (function(e4, t4) {
        const { schema: r3, gen: n3, opts: o3 } = e4;
        o3.$comment && r3.$comment && S(e4);
        (function(e5) {
          const t5 = e5.schema[e5.opts.schemaId];
          t5 && (e5.baseId = (0, p.resolveUrl)(e5.opts.uriResolver, e5.baseId, t5));
        })(e4), (function(e5) {
          if (e5.schema.$async && !e5.schemaEnv.$async) throw new Error("async schema in sync schema");
        })(e4);
        const s3 = n3.const("_errs", d.default.errors);
        b(e4, s3), n3.var(t4, l._`${s3} === ${d.default.errors}`);
      })(e3, t3) : (0, n2.boolOrEmptySchema)(e3, t3);
    }
    function _({ schema: e3, self: t3 }) {
      if ("boolean" == typeof e3) return !e3;
      for (const r3 in e3) if (t3.RULES.all[r3]) return true;
      return false;
    }
    function v(e3) {
      return "boolean" != typeof e3.schema;
    }
    function w(e3) {
      (0, f.checkUnknownRules)(e3), (function(e4) {
        const { schema: t3, errSchemaPath: r3, opts: n3, self: o3 } = e4;
        t3.$ref && n3.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(t3, o3.RULES) && o3.logger.warn(`$ref: keywords ignored in schema at path "${r3}"`);
      })(e3);
    }
    function b(e3, t3) {
      if (e3.opts.jtd) return k(e3, [], false, t3);
      const r3 = (0, o2.getSchemaTypes)(e3.schema);
      k(e3, r3, !(0, o2.coerceAndCheckDataType)(e3, r3), t3);
    }
    function S({ gen: e3, schemaEnv: t3, schema: r3, errSchemaPath: n3, opts: o3 }) {
      const s3 = r3.$comment;
      if (true === o3.$comment) e3.code(l._`${d.default.self}.logger.log(${s3})`);
      else if ("function" == typeof o3.$comment) {
        const r4 = l.str`${n3}/$comment`, o4 = e3.scopeValue("root", { ref: t3.root });
        e3.code(l._`${d.default.self}.opts.$comment(${s3}, ${r4}, ${o4}.schema)`);
      }
    }
    function k(e3, t3, r3, n3) {
      const { gen: o3, schema: a3, data: c2, allErrors: u2, opts: p2, self: h2 } = e3, { RULES: m2 } = h2;
      function g2(f2) {
        (0, s2.shouldUseGroup)(a3, f2) && (f2.type ? (o3.if((0, i2.checkDataType)(f2.type, c2, p2.strictNumbers)), E(e3, f2), 1 === t3.length && t3[0] === f2.type && r3 && (o3.else(), (0, i2.reportTypeError)(e3)), o3.endIf()) : E(e3, f2), u2 || o3.if(l._`${d.default.errors} === ${n3 || 0}`));
      }
      !a3.$ref || !p2.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(a3, m2) ? (p2.jtd || (function(e4, t4) {
        if (e4.schemaEnv.meta || !e4.opts.strictTypes) return;
        (function(e5, t5) {
          if (!t5.length) return;
          if (!e5.dataTypes.length) return void (e5.dataTypes = t5);
          t5.forEach((t6) => {
            T(e5.dataTypes, t6) || O(e5, `type "${t6}" not allowed by context "${e5.dataTypes.join(",")}"`);
          }), (function(e6, t6) {
            const r4 = [];
            for (const n4 of e6.dataTypes) T(t6, n4) ? r4.push(n4) : t6.includes("integer") && "number" === n4 && r4.push("integer");
            e6.dataTypes = r4;
          })(e5, t5);
        })(e4, t4), e4.opts.allowUnionTypes || (function(e5, t5) {
          t5.length > 1 && (2 !== t5.length || !t5.includes("null")) && O(e5, "use allowUnionTypes to allow union type keyword");
        })(e4, t4);
        !(function(e5, t5) {
          const r4 = e5.self.RULES.all;
          for (const n4 in r4) {
            const o4 = r4[n4];
            if ("object" == typeof o4 && (0, s2.shouldUseRule)(e5.schema, o4)) {
              const { type: r5 } = o4.definition;
              r5.length && !r5.some((e6) => x(t5, e6)) && O(e5, `missing type "${r5.join(",")}" for keyword "${n4}"`);
            }
          }
        })(e4, e4.dataTypes);
      })(e3, t3), o3.block(() => {
        for (const e4 of m2.rules) g2(e4);
        g2(m2.post);
      })) : o3.block(() => I(e3, "$ref", m2.all.$ref.definition));
    }
    function E(e3, t3) {
      const { gen: r3, schema: n3, opts: { useDefaults: o3 } } = e3;
      o3 && (0, a2.assignDefaults)(e3, t3.type), r3.block(() => {
        for (const r4 of t3.rules) (0, s2.shouldUseRule)(n3, r4) && I(e3, r4.keyword, r4.definition, t3.type);
      });
    }
    function x(e3, t3) {
      return e3.includes(t3) || "number" === t3 && e3.includes("integer");
    }
    function T(e3, t3) {
      return e3.includes(t3) || "integer" === t3 && e3.includes("number");
    }
    function O(e3, t3) {
      t3 += ` at "${e3.schemaEnv.baseId + e3.errSchemaPath}" (strictTypes)`, (0, f.checkStrictMode)(e3, t3, e3.opts.strictTypes);
    }
    t2.validateFunctionCode = function(e3) {
      v(e3) && (w(e3), _(e3)) ? (function(e4) {
        const { schema: t3, opts: r3, gen: n3 } = e4;
        m(e4, () => {
          r3.$comment && t3.$comment && S(e4), (function(e5) {
            const { schema: t4, opts: r4 } = e5;
            void 0 !== t4.default && r4.useDefaults && r4.strictSchema && (0, f.checkStrictMode)(e5, "default is ignored in the schema root");
          })(e4), n3.let(d.default.vErrors, null), n3.let(d.default.errors, 0), r3.unevaluated && (function(e5) {
            const { gen: t4, validateName: r4 } = e5;
            e5.evaluated = t4.const("evaluated", l._`${r4}.evaluated`), t4.if(l._`${e5.evaluated}.dynamicProps`, () => t4.assign(l._`${e5.evaluated}.props`, l._`undefined`)), t4.if(l._`${e5.evaluated}.dynamicItems`, () => t4.assign(l._`${e5.evaluated}.items`, l._`undefined`));
          })(e4), b(e4), (function(e5) {
            const { gen: t4, schemaEnv: r4, validateName: n4, ValidationError: o3, opts: s3 } = e5;
            r4.$async ? t4.if(l._`${d.default.errors} === 0`, () => t4.return(d.default.data), () => t4.throw(l._`new ${o3}(${d.default.vErrors})`)) : (t4.assign(l._`${n4}.errors`, d.default.vErrors), s3.unevaluated && (function({ gen: e6, evaluated: t5, props: r5, items: n5 }) {
              r5 instanceof l.Name && e6.assign(l._`${t5}.props`, r5);
              n5 instanceof l.Name && e6.assign(l._`${t5}.items`, n5);
            })(e5), t4.return(l._`${d.default.errors} === 0`));
          })(e4);
        });
      })(e3) : m(e3, () => (0, n2.topBoolOrEmptySchema)(e3));
    };
    class P {
      constructor(e3, t3, r3) {
        if ((0, c.validateKeywordUsage)(e3, t3, r3), this.gen = e3.gen, this.allErrors = e3.allErrors, this.keyword = r3, this.data = e3.data, this.schema = e3.schema[r3], this.$data = t3.$data && e3.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(e3, this.schema, r3, this.$data), this.schemaType = t3.schemaType, this.parentSchema = e3.schema, this.params = {}, this.it = e3, this.def = t3, this.$data) this.schemaCode = e3.gen.const("vSchema", $(this.$data, e3));
        else if (this.schemaCode = this.schemaValue, !(0, c.validSchemaType)(this.schema, t3.schemaType, t3.allowUndefined)) throw new Error(`${r3} value must be ${JSON.stringify(t3.schemaType)}`);
        ("code" in t3 ? t3.trackErrors : false !== t3.errors) && (this.errsCount = e3.gen.const("_errs", d.default.errors));
      }
      result(e3, t3, r3) {
        this.failResult((0, l.not)(e3), t3, r3);
      }
      failResult(e3, t3, r3) {
        this.gen.if(e3), r3 ? r3() : this.error(), t3 ? (this.gen.else(), t3(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      pass(e3, t3) {
        this.failResult((0, l.not)(e3), void 0, t3);
      }
      fail(e3) {
        if (void 0 === e3) return this.error(), void (this.allErrors || this.gen.if(false));
        this.gen.if(e3), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      fail$data(e3) {
        if (!this.$data) return this.fail(e3);
        const { schemaCode: t3 } = this;
        this.fail(l._`${t3} !== undefined && (${(0, l.or)(this.invalid$data(), e3)})`);
      }
      error(e3, t3, r3) {
        if (t3) return this.setParams(t3), this._error(e3, r3), void this.setParams({});
        this._error(e3, r3);
      }
      _error(e3, t3) {
        (e3 ? h.reportExtraError : h.reportError)(this, this.def.error, t3);
      }
      $dataError() {
        (0, h.reportError)(this, this.def.$dataError || h.keyword$DataError);
      }
      reset() {
        if (void 0 === this.errsCount) throw new Error('add "trackErrors" to keyword definition');
        (0, h.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(e3) {
        this.allErrors || this.gen.if(e3);
      }
      setParams(e3, t3) {
        t3 ? Object.assign(this.params, e3) : this.params = e3;
      }
      block$data(e3, t3, r3 = l.nil) {
        this.gen.block(() => {
          this.check$data(e3, r3), t3();
        });
      }
      check$data(e3 = l.nil, t3 = l.nil) {
        if (!this.$data) return;
        const { gen: r3, schemaCode: n3, schemaType: o3, def: s3 } = this;
        r3.if((0, l.or)(l._`${n3} === undefined`, t3)), e3 !== l.nil && r3.assign(e3, true), (o3.length || s3.validateSchema) && (r3.elseIf(this.invalid$data()), this.$dataError(), e3 !== l.nil && r3.assign(e3, false)), r3.else();
      }
      invalid$data() {
        const { gen: e3, schemaCode: t3, schemaType: r3, def: n3, it: o3 } = this;
        return (0, l.or)((function() {
          if (r3.length) {
            if (!(t3 instanceof l.Name)) throw new Error("ajv implementation error");
            const e4 = Array.isArray(r3) ? r3 : [r3];
            return l._`${(0, i2.checkDataTypes)(e4, t3, o3.opts.strictNumbers, i2.DataType.Wrong)}`;
          }
          return l.nil;
        })(), (function() {
          if (n3.validateSchema) {
            const r4 = e3.scopeValue("validate$data", { ref: n3.validateSchema });
            return l._`!${r4}(${t3})`;
          }
          return l.nil;
        })());
      }
      subschema(e3, t3) {
        const r3 = (0, u.getSubschema)(this.it, e3);
        (0, u.extendSubschemaData)(r3, this.it, e3), (0, u.extendSubschemaMode)(r3, e3);
        const n3 = { ...this.it, ...r3, items: void 0, props: void 0 };
        return y(n3, t3), n3;
      }
      mergeEvaluated(e3, t3) {
        const { it: r3, gen: n3 } = this;
        r3.opts.unevaluated && (true !== r3.props && void 0 !== e3.props && (r3.props = f.mergeEvaluated.props(n3, e3.props, r3.props, t3)), true !== r3.items && void 0 !== e3.items && (r3.items = f.mergeEvaluated.items(n3, e3.items, r3.items, t3)));
      }
      mergeValidEvaluated(e3, t3) {
        const { it: r3, gen: n3 } = this;
        if (r3.opts.unevaluated && (true !== r3.props || true !== r3.items)) return n3.if(t3, () => this.mergeEvaluated(e3, l.Name)), true;
      }
    }
    function I(e3, t3, r3, n3) {
      const o3 = new P(e3, r3, t3);
      "code" in r3 ? r3.code(o3, n3) : o3.$data && r3.validate ? (0, c.funcKeywordCode)(o3, r3) : "macro" in r3 ? (0, c.macroKeywordCode)(o3, r3) : (r3.compile || r3.validate) && (0, c.funcKeywordCode)(o3, r3);
    }
    t2.KeywordCxt = P;
    const C = /^\/(?:[^~]|~0|~1)*$/, A = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function $(e3, { dataLevel: t3, dataNames: r3, dataPathArr: n3 }) {
      let o3, s3;
      if ("" === e3) return d.default.rootData;
      if ("/" === e3[0]) {
        if (!C.test(e3)) throw new Error(`Invalid JSON-pointer: ${e3}`);
        o3 = e3, s3 = d.default.rootData;
      } else {
        const i4 = A.exec(e3);
        if (!i4) throw new Error(`Invalid JSON-pointer: ${e3}`);
        const a4 = +i4[1];
        if (o3 = i4[2], "#" === o3) {
          if (a4 >= t3) throw new Error(c2("property/index", a4));
          return n3[t3 - a4];
        }
        if (a4 > t3) throw new Error(c2("data", a4));
        if (s3 = r3[t3 - a4], !o3) return s3;
      }
      let i3 = s3;
      const a3 = o3.split("/");
      for (const e4 of a3) e4 && (s3 = l._`${s3}${(0, l.getProperty)((0, f.unescapeJsonPointer)(e4))}`, i3 = l._`${i3} && ${s3}`);
      return i3;
      function c2(e4, r4) {
        return `Cannot access ${e4} ${r4} levels up, current level is ${t3}`;
      }
    }
    t2.getData = $;
  }