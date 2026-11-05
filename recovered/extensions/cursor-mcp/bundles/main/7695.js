// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7695 range:695358..699408
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7695: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.validateKeywordUsage = t2.validSchemaType = t2.funcKeywordCode = t2.macroKeywordCode = void 0;
    const n2 = r2(5183), o2 = r2(4489), s2 = r2(8255), i2 = r2(4006);
    function a2(e3) {
      const { gen: t3, data: r3, it: o3 } = e3;
      t3.if(o3.parentData, () => t3.assign(r3, n2._`${o3.parentData}[${o3.parentDataProperty}]`));
    }
    function c(e3, t3, r3) {
      if (void 0 === r3) throw new Error(`keyword "${t3}" failed to compile`);
      return e3.scopeValue("keyword", "function" == typeof r3 ? { ref: r3 } : { ref: r3, code: (0, n2.stringify)(r3) });
    }
    t2.macroKeywordCode = function(e3, t3) {
      const { gen: r3, keyword: o3, schema: s3, parentSchema: i3, it: a3 } = e3, u = t3.macro.call(a3.self, s3, i3, a3), l = c(r3, o3, u);
      false !== a3.opts.validateSchema && a3.self.validateSchema(u, true);
      const d = r3.name("valid");
      e3.subschema({ schema: u, schemaPath: n2.nil, errSchemaPath: `${a3.errSchemaPath}/${o3}`, topSchemaRef: l, compositeRule: true }, d), e3.pass(d, () => e3.error(true));
    }, t2.funcKeywordCode = function(e3, t3) {
      var r3;
      const { gen: u, keyword: l, schema: d, parentSchema: p, $data: f, it: h } = e3;
      !(function({ schemaEnv: e4 }, t4) {
        if (t4.async && !e4.$async) throw new Error("async keyword in sync schema");
      })(h, t3);
      const m = !f && t3.compile ? t3.compile.call(h.self, d, p, h) : t3.validate, g = c(u, l, m), y = u.let("valid");
      function _(r4 = t3.async ? n2._`await ` : n2.nil) {
        const i3 = h.opts.passContext ? o2.default.this : o2.default.self, a3 = !("compile" in t3 && !f || false === t3.schema);
        u.assign(y, n2._`${r4}${(0, s2.callValidateCode)(e3, g, i3, a3)}`, t3.modifying);
      }
      function v(e4) {
        var r4;
        u.if((0, n2.not)(null !== (r4 = t3.valid) && void 0 !== r4 ? r4 : y), e4);
      }
      e3.block$data(y, function() {
        if (false === t3.errors) _(), t3.modifying && a2(e3), v(() => e3.error());
        else {
          const r4 = t3.async ? (function() {
            const e4 = u.let("ruleErrs", null);
            return u.try(() => _(n2._`await `), (t4) => u.assign(y, false).if(n2._`${t4} instanceof ${h.ValidationError}`, () => u.assign(e4, n2._`${t4}.errors`), () => u.throw(t4))), e4;
          })() : (function() {
            const e4 = n2._`${g}.errors`;
            return u.assign(e4, null), _(n2.nil), e4;
          })();
          t3.modifying && a2(e3), v(() => (function(e4, t4) {
            const { gen: r5 } = e4;
            r5.if(n2._`Array.isArray(${t4})`, () => {
              r5.assign(o2.default.vErrors, n2._`${o2.default.vErrors} === null ? ${t4} : ${o2.default.vErrors}.concat(${t4})`).assign(o2.default.errors, n2._`${o2.default.vErrors}.length`), (0, i2.extendErrors)(e4);
            }, () => e4.error());
          })(e3, r4));
        }
      }), e3.ok(null !== (r3 = t3.valid) && void 0 !== r3 ? r3 : y);
    }, t2.validSchemaType = function(e3, t3, r3 = false) {
      return !t3.length || t3.some((t4) => "array" === t4 ? Array.isArray(e3) : "object" === t4 ? e3 && "object" == typeof e3 && !Array.isArray(e3) : typeof e3 == t4 || r3 && void 0 === e3);
    }, t2.validateKeywordUsage = function({ schema: e3, opts: t3, self: r3, errSchemaPath: n3 }, o3, s3) {
      if (Array.isArray(o3.keyword) ? !o3.keyword.includes(s3) : o3.keyword !== s3) throw new Error("ajv implementation error");
      const i3 = o3.dependencies;
      if (null == i3 ? void 0 : i3.some((t4) => !Object.prototype.hasOwnProperty.call(e3, t4))) throw new Error(`parent schema must have dependencies of ${s3}: ${i3.join(",")}`);
      if (o3.validateSchema) {
        if (!o3.validateSchema(e3[s3])) {
          const e4 = `keyword "${s3}" value is invalid at path "${n3}": ` + r3.errorsText(o3.validateSchema.errors);
          if ("log" !== t3.validateSchema) throw new Error(e4);
          r3.logger.error(e4);
        }
      }
    };
  }