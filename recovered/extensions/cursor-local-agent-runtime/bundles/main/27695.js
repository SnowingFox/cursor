// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 27695 range:897048..901056
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27695: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateKeywordUsage = t.validSchemaType = t.funcKeywordCode = t.macroKeywordCode = void 0;
    const n = r(95183), o = r(44489), s = r(68255), i = r(34006);
    function a(e2) {
      const { gen: t2, data: r2, it: o2 } = e2;
      t2.if(o2.parentData, () => t2.assign(r2, n._`${o2.parentData}[${o2.parentDataProperty}]`));
    }
    function l(e2, t2, r2) {
      if (void 0 === r2) throw new Error(`keyword "${t2}" failed to compile`);
      return e2.scopeValue("keyword", "function" == typeof r2 ? { ref: r2 } : { ref: r2, code: (0, n.stringify)(r2) });
    }
    t.macroKeywordCode = function(e2, t2) {
      const { gen: r2, keyword: o2, schema: s2, parentSchema: i2, it: a2 } = e2, c = t2.macro.call(a2.self, s2, i2, a2), u = l(r2, o2, c);
      false !== a2.opts.validateSchema && a2.self.validateSchema(c, true);
      const d = r2.name("valid");
      e2.subschema({ schema: c, schemaPath: n.nil, errSchemaPath: `${a2.errSchemaPath}/${o2}`, topSchemaRef: u, compositeRule: true }, d), e2.pass(d, () => e2.error(true));
    }, t.funcKeywordCode = function(e2, t2) {
      var r2;
      const { gen: c, keyword: u, schema: d, parentSchema: p, $data: h, it: m } = e2;
      !(function({ schemaEnv: e3 }, t3) {
        if (t3.async && !e3.$async) throw new Error("async keyword in sync schema");
      })(m, t2);
      const f = !h && t2.compile ? t2.compile.call(m.self, d, p, m) : t2.validate, g = l(c, u, f), y = c.let("valid");
      function v(r3 = t2.async ? n._`await ` : n.nil) {
        const i2 = m.opts.passContext ? o.default.this : o.default.self, a2 = !("compile" in t2 && !h || false === t2.schema);
        c.assign(y, n._`${r3}${(0, s.callValidateCode)(e2, g, i2, a2)}`, t2.modifying);
      }
      function w(e3) {
        var r3;
        c.if((0, n.not)(null !== (r3 = t2.valid) && void 0 !== r3 ? r3 : y), e3);
      }
      e2.block$data(y, function() {
        if (false === t2.errors) v(), t2.modifying && a(e2), w(() => e2.error());
        else {
          const r3 = t2.async ? (function() {
            const e3 = c.let("ruleErrs", null);
            return c.try(() => v(n._`await `), (t3) => c.assign(y, false).if(n._`${t3} instanceof ${m.ValidationError}`, () => c.assign(e3, n._`${t3}.errors`), () => c.throw(t3))), e3;
          })() : (function() {
            const e3 = n._`${g}.errors`;
            return c.assign(e3, null), v(n.nil), e3;
          })();
          t2.modifying && a(e2), w(() => (function(e3, t3) {
            const { gen: r4 } = e3;
            r4.if(n._`Array.isArray(${t3})`, () => {
              r4.assign(o.default.vErrors, n._`${o.default.vErrors} === null ? ${t3} : ${o.default.vErrors}.concat(${t3})`).assign(o.default.errors, n._`${o.default.vErrors}.length`), (0, i.extendErrors)(e3);
            }, () => e3.error());
          })(e2, r3));
        }
      }), e2.ok(null !== (r2 = t2.valid) && void 0 !== r2 ? r2 : y);
    }, t.validSchemaType = function(e2, t2, r2 = false) {
      return !t2.length || t2.some((t3) => "array" === t3 ? Array.isArray(e2) : "object" === t3 ? e2 && "object" == typeof e2 && !Array.isArray(e2) : typeof e2 == t3 || r2 && void 0 === e2);
    }, t.validateKeywordUsage = function({ schema: e2, opts: t2, self: r2, errSchemaPath: n2 }, o2, s2) {
      if (Array.isArray(o2.keyword) ? !o2.keyword.includes(s2) : o2.keyword !== s2) throw new Error("ajv implementation error");
      const i2 = o2.dependencies;
      if (null == i2 ? void 0 : i2.some((t3) => !Object.prototype.hasOwnProperty.call(e2, t3))) throw new Error(`parent schema must have dependencies of ${s2}: ${i2.join(",")}`);
      if (o2.validateSchema) {
        if (!o2.validateSchema(e2[s2])) {
          const e3 = `keyword "${s2}" value is invalid at path "${n2}": ` + r2.errorsText(o2.validateSchema.errors);
          if ("log" !== t2.validateSchema) throw new Error(e3);
          r2.logger.error(e3);
        }
      }
    };
  }