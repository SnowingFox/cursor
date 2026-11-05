// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 21188 range:608112..622017
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
21188: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.getData = t.KeywordCxt = t.validateFunctionCode = void 0;
    const n = r(82989), o = r(98018), s = r(12173), i = r(98018), a = r(48008), l = r(27695), c = r(69861), u = r(95183), d = r(44489), p = r(23237), h = r(79657), m = r(34006);
    function f({ gen: e2, validateName: t2, schema: r2, schemaEnv: n2, opts: o2 }, s2) {
      o2.code.es5 ? e2.func(t2, u._`${d.default.data}, ${d.default.valCxt}`, n2.$async, () => {
        e2.code(u._`"use strict"; ${g(r2, o2)}`), (function(e3, t3) {
          e3.if(d.default.valCxt, () => {
            e3.var(d.default.instancePath, u._`${d.default.valCxt}.${d.default.instancePath}`), e3.var(d.default.parentData, u._`${d.default.valCxt}.${d.default.parentData}`), e3.var(d.default.parentDataProperty, u._`${d.default.valCxt}.${d.default.parentDataProperty}`), e3.var(d.default.rootData, u._`${d.default.valCxt}.${d.default.rootData}`), t3.dynamicRef && e3.var(d.default.dynamicAnchors, u._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
          }, () => {
            e3.var(d.default.instancePath, u._`""`), e3.var(d.default.parentData, u._`undefined`), e3.var(d.default.parentDataProperty, u._`undefined`), e3.var(d.default.rootData, d.default.data), t3.dynamicRef && e3.var(d.default.dynamicAnchors, u._`{}`);
          });
        })(e2, o2), e2.code(s2);
      }) : e2.func(t2, u._`${d.default.data}, ${(function(e3) {
        return u._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${e3.dynamicRef ? u._`, ${d.default.dynamicAnchors}={}` : u.nil}}={}`;
      })(o2)}`, n2.$async, () => e2.code(g(r2, o2)).code(s2));
    }
    function g(e2, t2) {
      const r2 = "object" == typeof e2 && e2[t2.schemaId];
      return r2 && (t2.code.source || t2.code.process) ? u._`/*# sourceURL=${r2} */` : u.nil;
    }
    function y(e2, t2) {
      w(e2) && (b(e2), v(e2)) ? (function(e3, t3) {
        const { schema: r2, gen: n2, opts: o2 } = e3;
        o2.$comment && r2.$comment && S(e3);
        (function(e4) {
          const t4 = e4.schema[e4.opts.schemaId];
          t4 && (e4.baseId = (0, p.resolveUrl)(e4.opts.uriResolver, e4.baseId, t4));
        })(e3), (function(e4) {
          if (e4.schema.$async && !e4.schemaEnv.$async) throw new Error("async schema in sync schema");
        })(e3);
        const s2 = n2.const("_errs", d.default.errors);
        _(e3, s2), n2.var(t3, u._`${s2} === ${d.default.errors}`);
      })(e2, t2) : (0, n.boolOrEmptySchema)(e2, t2);
    }
    function v({ schema: e2, self: t2 }) {
      if ("boolean" == typeof e2) return !e2;
      for (const r2 in e2) if (t2.RULES.all[r2]) return true;
      return false;
    }
    function w(e2) {
      return "boolean" != typeof e2.schema;
    }
    function b(e2) {
      (0, h.checkUnknownRules)(e2), (function(e3) {
        const { schema: t2, errSchemaPath: r2, opts: n2, self: o2 } = e3;
        t2.$ref && n2.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(t2, o2.RULES) && o2.logger.warn(`$ref: keywords ignored in schema at path "${r2}"`);
      })(e2);
    }
    function _(e2, t2) {
      if (e2.opts.jtd) return x(e2, [], false, t2);
      const r2 = (0, o.getSchemaTypes)(e2.schema);
      x(e2, r2, !(0, o.coerceAndCheckDataType)(e2, r2), t2);
    }
    function S({ gen: e2, schemaEnv: t2, schema: r2, errSchemaPath: n2, opts: o2 }) {
      const s2 = r2.$comment;
      if (true === o2.$comment) e2.code(u._`${d.default.self}.logger.log(${s2})`);
      else if ("function" == typeof o2.$comment) {
        const r3 = u.str`${n2}/$comment`, o3 = e2.scopeValue("root", { ref: t2.root });
        e2.code(u._`${d.default.self}.opts.$comment(${s2}, ${r3}, ${o3}.schema)`);
      }
    }
    function x(e2, t2, r2, n2) {
      const { gen: o2, schema: a2, data: l2, allErrors: c2, opts: p2, self: m2 } = e2, { RULES: f2 } = m2;
      function g2(h2) {
        (0, s.shouldUseGroup)(a2, h2) && (h2.type ? (o2.if((0, i.checkDataType)(h2.type, l2, p2.strictNumbers)), k(e2, h2), 1 === t2.length && t2[0] === h2.type && r2 && (o2.else(), (0, i.reportTypeError)(e2)), o2.endIf()) : k(e2, h2), c2 || o2.if(u._`${d.default.errors} === ${n2 || 0}`));
      }
      !a2.$ref || !p2.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(a2, f2) ? (p2.jtd || (function(e3, t3) {
        if (e3.schemaEnv.meta || !e3.opts.strictTypes) return;
        (function(e4, t4) {
          if (!t4.length) return;
          if (!e4.dataTypes.length) return void (e4.dataTypes = t4);
          t4.forEach((t5) => {
            T(e4.dataTypes, t5) || C(e4, `type "${t5}" not allowed by context "${e4.dataTypes.join(",")}"`);
          }), (function(e5, t5) {
            const r3 = [];
            for (const n3 of e5.dataTypes) T(t5, n3) ? r3.push(n3) : t5.includes("integer") && "number" === n3 && r3.push("integer");
            e5.dataTypes = r3;
          })(e4, t4);
        })(e3, t3), e3.opts.allowUnionTypes || (function(e4, t4) {
          t4.length > 1 && (2 !== t4.length || !t4.includes("null")) && C(e4, "use allowUnionTypes to allow union type keyword");
        })(e3, t3);
        !(function(e4, t4) {
          const r3 = e4.self.RULES.all;
          for (const n3 in r3) {
            const o3 = r3[n3];
            if ("object" == typeof o3 && (0, s.shouldUseRule)(e4.schema, o3)) {
              const { type: r4 } = o3.definition;
              r4.length && !r4.some((e5) => E(t4, e5)) && C(e4, `missing type "${r4.join(",")}" for keyword "${n3}"`);
            }
          }
        })(e3, e3.dataTypes);
      })(e2, t2), o2.block(() => {
        for (const e3 of f2.rules) g2(e3);
        g2(f2.post);
      })) : o2.block(() => A(e2, "$ref", f2.all.$ref.definition));
    }
    function k(e2, t2) {
      const { gen: r2, schema: n2, opts: { useDefaults: o2 } } = e2;
      o2 && (0, a.assignDefaults)(e2, t2.type), r2.block(() => {
        for (const r3 of t2.rules) (0, s.shouldUseRule)(n2, r3) && A(e2, r3.keyword, r3.definition, t2.type);
      });
    }
    function E(e2, t2) {
      return e2.includes(t2) || "number" === t2 && e2.includes("integer");
    }
    function T(e2, t2) {
      return e2.includes(t2) || "integer" === t2 && e2.includes("number");
    }
    function C(e2, t2) {
      t2 += ` at "${e2.schemaEnv.baseId + e2.errSchemaPath}" (strictTypes)`, (0, h.checkStrictMode)(e2, t2, e2.opts.strictTypes);
    }
    t.validateFunctionCode = function(e2) {
      w(e2) && (b(e2), v(e2)) ? (function(e3) {
        const { schema: t2, opts: r2, gen: n2 } = e3;
        f(e3, () => {
          r2.$comment && t2.$comment && S(e3), (function(e4) {
            const { schema: t3, opts: r3 } = e4;
            void 0 !== t3.default && r3.useDefaults && r3.strictSchema && (0, h.checkStrictMode)(e4, "default is ignored in the schema root");
          })(e3), n2.let(d.default.vErrors, null), n2.let(d.default.errors, 0), r2.unevaluated && (function(e4) {
            const { gen: t3, validateName: r3 } = e4;
            e4.evaluated = t3.const("evaluated", u._`${r3}.evaluated`), t3.if(u._`${e4.evaluated}.dynamicProps`, () => t3.assign(u._`${e4.evaluated}.props`, u._`undefined`)), t3.if(u._`${e4.evaluated}.dynamicItems`, () => t3.assign(u._`${e4.evaluated}.items`, u._`undefined`));
          })(e3), _(e3), (function(e4) {
            const { gen: t3, schemaEnv: r3, validateName: n3, ValidationError: o2, opts: s2 } = e4;
            r3.$async ? t3.if(u._`${d.default.errors} === 0`, () => t3.return(d.default.data), () => t3.throw(u._`new ${o2}(${d.default.vErrors})`)) : (t3.assign(u._`${n3}.errors`, d.default.vErrors), s2.unevaluated && (function({ gen: e5, evaluated: t4, props: r4, items: n4 }) {
              r4 instanceof u.Name && e5.assign(u._`${t4}.props`, r4);
              n4 instanceof u.Name && e5.assign(u._`${t4}.items`, n4);
            })(e4), t3.return(u._`${d.default.errors} === 0`));
          })(e3);
        });
      })(e2) : f(e2, () => (0, n.topBoolOrEmptySchema)(e2));
    };
    class I {
      constructor(e2, t2, r2) {
        if ((0, l.validateKeywordUsage)(e2, t2, r2), this.gen = e2.gen, this.allErrors = e2.allErrors, this.keyword = r2, this.data = e2.data, this.schema = e2.schema[r2], this.$data = t2.$data && e2.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(e2, this.schema, r2, this.$data), this.schemaType = t2.schemaType, this.parentSchema = e2.schema, this.params = {}, this.it = e2, this.def = t2, this.$data) this.schemaCode = e2.gen.const("vSchema", R(this.$data, e2));
        else if (this.schemaCode = this.schemaValue, !(0, l.validSchemaType)(this.schema, t2.schemaType, t2.allowUndefined)) throw new Error(`${r2} value must be ${JSON.stringify(t2.schemaType)}`);
        ("code" in t2 ? t2.trackErrors : false !== t2.errors) && (this.errsCount = e2.gen.const("_errs", d.default.errors));
      }
      result(e2, t2, r2) {
        this.failResult((0, u.not)(e2), t2, r2);
      }
      failResult(e2, t2, r2) {
        this.gen.if(e2), r2 ? r2() : this.error(), t2 ? (this.gen.else(), t2(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      pass(e2, t2) {
        this.failResult((0, u.not)(e2), void 0, t2);
      }
      fail(e2) {
        if (void 0 === e2) return this.error(), void (this.allErrors || this.gen.if(false));
        this.gen.if(e2), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      fail$data(e2) {
        if (!this.$data) return this.fail(e2);
        const { schemaCode: t2 } = this;
        this.fail(u._`${t2} !== undefined && (${(0, u.or)(this.invalid$data(), e2)})`);
      }
      error(e2, t2, r2) {
        if (t2) return this.setParams(t2), this._error(e2, r2), void this.setParams({});
        this._error(e2, r2);
      }
      _error(e2, t2) {
        (e2 ? m.reportExtraError : m.reportError)(this, this.def.error, t2);
      }
      $dataError() {
        (0, m.reportError)(this, this.def.$dataError || m.keyword$DataError);
      }
      reset() {
        if (void 0 === this.errsCount) throw new Error('add "trackErrors" to keyword definition');
        (0, m.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(e2) {
        this.allErrors || this.gen.if(e2);
      }
      setParams(e2, t2) {
        t2 ? Object.assign(this.params, e2) : this.params = e2;
      }
      block$data(e2, t2, r2 = u.nil) {
        this.gen.block(() => {
          this.check$data(e2, r2), t2();
        });
      }
      check$data(e2 = u.nil, t2 = u.nil) {
        if (!this.$data) return;
        const { gen: r2, schemaCode: n2, schemaType: o2, def: s2 } = this;
        r2.if((0, u.or)(u._`${n2} === undefined`, t2)), e2 !== u.nil && r2.assign(e2, true), (o2.length || s2.validateSchema) && (r2.elseIf(this.invalid$data()), this.$dataError(), e2 !== u.nil && r2.assign(e2, false)), r2.else();
      }
      invalid$data() {
        const { gen: e2, schemaCode: t2, schemaType: r2, def: n2, it: o2 } = this;
        return (0, u.or)((function() {
          if (r2.length) {
            if (!(t2 instanceof u.Name)) throw new Error("ajv implementation error");
            const e3 = Array.isArray(r2) ? r2 : [r2];
            return u._`${(0, i.checkDataTypes)(e3, t2, o2.opts.strictNumbers, i.DataType.Wrong)}`;
          }
          return u.nil;
        })(), (function() {
          if (n2.validateSchema) {
            const r3 = e2.scopeValue("validate$data", { ref: n2.validateSchema });
            return u._`!${r3}(${t2})`;
          }
          return u.nil;
        })());
      }
      subschema(e2, t2) {
        const r2 = (0, c.getSubschema)(this.it, e2);
        (0, c.extendSubschemaData)(r2, this.it, e2), (0, c.extendSubschemaMode)(r2, e2);
        const n2 = { ...this.it, ...r2, items: void 0, props: void 0 };
        return y(n2, t2), n2;
      }
      mergeEvaluated(e2, t2) {
        const { it: r2, gen: n2 } = this;
        r2.opts.unevaluated && (true !== r2.props && void 0 !== e2.props && (r2.props = h.mergeEvaluated.props(n2, e2.props, r2.props, t2)), true !== r2.items && void 0 !== e2.items && (r2.items = h.mergeEvaluated.items(n2, e2.items, r2.items, t2)));
      }
      mergeValidEvaluated(e2, t2) {
        const { it: r2, gen: n2 } = this;
        if (r2.opts.unevaluated && (true !== r2.props || true !== r2.items)) return n2.if(t2, () => this.mergeEvaluated(e2, u.Name)), true;
      }
    }
    function A(e2, t2, r2, n2) {
      const o2 = new I(e2, r2, t2);
      "code" in r2 ? r2.code(o2, n2) : o2.$data && r2.validate ? (0, l.funcKeywordCode)(o2, r2) : "macro" in r2 ? (0, l.macroKeywordCode)(o2, r2) : (r2.compile || r2.validate) && (0, l.funcKeywordCode)(o2, r2);
    }
    t.KeywordCxt = I;
    const P = /^\/(?:[^~]|~0|~1)*$/, M = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function R(e2, { dataLevel: t2, dataNames: r2, dataPathArr: n2 }) {
      let o2, s2;
      if ("" === e2) return d.default.rootData;
      if ("/" === e2[0]) {
        if (!P.test(e2)) throw new Error(`Invalid JSON-pointer: ${e2}`);
        o2 = e2, s2 = d.default.rootData;
      } else {
        const i3 = M.exec(e2);
        if (!i3) throw new Error(`Invalid JSON-pointer: ${e2}`);
        const a3 = +i3[1];
        if (o2 = i3[2], "#" === o2) {
          if (a3 >= t2) throw new Error(l2("property/index", a3));
          return n2[t2 - a3];
        }
        if (a3 > t2) throw new Error(l2("data", a3));
        if (s2 = r2[t2 - a3], !o2) return s2;
      }
      let i2 = s2;
      const a2 = o2.split("/");
      for (const e3 of a2) e3 && (s2 = u._`${s2}${(0, u.getProperty)((0, h.unescapeJsonPointer)(e3))}`, i2 = u._`${i2} && ${s2}`);
      return i2;
      function l2(e3, r3) {
        return `Cannot access ${e3} ${r3} levels up, current level is ${t2}`;
      }
    }
    t.getData = R;
  }