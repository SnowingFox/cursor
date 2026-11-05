// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 27695 range:4829583..4833591
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27695: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateKeywordUsage = t.validSchemaType = t.funcKeywordCode = t.macroKeywordCode = void 0;
    const n = r(95183), s = r(44489), o = r(68255), i = r(34006);
    function a(e2) {
      const { gen: t2, data: r2, it: s2 } = e2;
      t2.if(s2.parentData, () => t2.assign(r2, n._`${s2.parentData}[${s2.parentDataProperty}]`));
    }
    function c(e2, t2, r2) {
      if (void 0 === r2) throw new Error(`keyword "${t2}" failed to compile`);
      return e2.scopeValue("keyword", "function" == typeof r2 ? { ref: r2 } : { ref: r2, code: (0, n.stringify)(r2) });
    }
    t.macroKeywordCode = function(e2, t2) {
      const { gen: r2, keyword: s2, schema: o2, parentSchema: i2, it: a2 } = e2, l = t2.macro.call(a2.self, o2, i2, a2), u = c(r2, s2, l);
      false !== a2.opts.validateSchema && a2.self.validateSchema(l, true);
      const d = r2.name("valid");
      e2.subschema({ schema: l, schemaPath: n.nil, errSchemaPath: `${a2.errSchemaPath}/${s2}`, topSchemaRef: u, compositeRule: true }, d), e2.pass(d, () => e2.error(true));
    }, t.funcKeywordCode = function(e2, t2) {
      var r2;
      const { gen: l, keyword: u, schema: d, parentSchema: p, $data: m, it: h } = e2;
      !(function({ schemaEnv: e3 }, t3) {
        if (t3.async && !e3.$async) throw new Error("async keyword in sync schema");
      })(h, t2);
      const f = !m && t2.compile ? t2.compile.call(h.self, d, p, h) : t2.validate, g = c(l, u, f), y = l.let("valid");
      function w(r3 = t2.async ? n._`await ` : n.nil) {
        const i2 = h.opts.passContext ? s.default.this : s.default.self, a2 = !("compile" in t2 && !m || false === t2.schema);
        l.assign(y, n._`${r3}${(0, o.callValidateCode)(e2, g, i2, a2)}`, t2.modifying);
      }
      function v(e3) {
        var r3;
        l.if((0, n.not)(null !== (r3 = t2.valid) && void 0 !== r3 ? r3 : y), e3);
      }
      e2.block$data(y, function() {
        if (false === t2.errors) w(), t2.modifying && a(e2), v(() => e2.error());
        else {
          const r3 = t2.async ? (function() {
            const e3 = l.let("ruleErrs", null);
            return l.try(() => w(n._`await `), (t3) => l.assign(y, false).if(n._`${t3} instanceof ${h.ValidationError}`, () => l.assign(e3, n._`${t3}.errors`), () => l.throw(t3))), e3;
          })() : (function() {
            const e3 = n._`${g}.errors`;
            return l.assign(e3, null), w(n.nil), e3;
          })();
          t2.modifying && a(e2), v(() => (function(e3, t3) {
            const { gen: r4 } = e3;
            r4.if(n._`Array.isArray(${t3})`, () => {
              r4.assign(s.default.vErrors, n._`${s.default.vErrors} === null ? ${t3} : ${s.default.vErrors}.concat(${t3})`).assign(s.default.errors, n._`${s.default.vErrors}.length`), (0, i.extendErrors)(e3);
            }, () => e3.error());
          })(e2, r3));
        }
      }), e2.ok(null !== (r2 = t2.valid) && void 0 !== r2 ? r2 : y);
    }, t.validSchemaType = function(e2, t2, r2 = false) {
      return !t2.length || t2.some((t3) => "array" === t3 ? Array.isArray(e2) : "object" === t3 ? e2 && "object" == typeof e2 && !Array.isArray(e2) : typeof e2 == t3 || r2 && void 0 === e2);
    }, t.validateKeywordUsage = function({ schema: e2, opts: t2, self: r2, errSchemaPath: n2 }, s2, o2) {
      if (Array.isArray(s2.keyword) ? !s2.keyword.includes(o2) : s2.keyword !== o2) throw new Error("ajv implementation error");
      const i2 = s2.dependencies;
      if (null == i2 ? void 0 : i2.some((t3) => !Object.prototype.hasOwnProperty.call(e2, t3))) throw new Error(`parent schema must have dependencies of ${o2}: ${i2.join(",")}`);
      if (s2.validateSchema) {
        if (!s2.validateSchema(e2[o2])) {
          const e3 = `keyword "${o2}" value is invalid at path "${n2}": ` + r2.errorsText(s2.validateSchema.errors);
          if ("log" !== t2.validateSchema) throw new Error(e3);
          r2.logger.error(e3);
        }
      }
    };
  }