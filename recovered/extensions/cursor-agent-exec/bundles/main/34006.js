// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 34006 range:2917119..2920994
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34006: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.extendErrors = t.resetErrorsCount = t.reportExtraError = t.reportError = t.keyword$DataError = t.keywordError = void 0;
    const n = r(95183), s = r(79657), o = r(44489);
    function i(e2, t2) {
      const r2 = e2.const("err", t2);
      e2.if(n._`${o.default.vErrors} === null`, () => e2.assign(o.default.vErrors, n._`[${r2}]`), n._`${o.default.vErrors}.push(${r2})`), e2.code(n._`${o.default.errors}++`);
    }
    function a(e2, t2) {
      const { gen: r2, validateName: s2, schemaEnv: o2 } = e2;
      o2.$async ? r2.throw(n._`new ${e2.ValidationError}(${t2})`) : (r2.assign(n._`${s2}.errors`, t2), r2.return(false));
    }
    t.keywordError = { message: ({ keyword: e2 }) => n.str`must pass "${e2}" keyword validation` }, t.keyword$DataError = { message: ({ keyword: e2, schemaType: t2 }) => t2 ? n.str`"${e2}" keyword must be ${t2} ($data)` : n.str`"${e2}" keyword is invalid ($data)` }, t.reportError = function(e2, r2 = t.keywordError, s2, o2) {
      const { it: c2 } = e2, { gen: u2, compositeRule: d2, allErrors: p } = c2, m = l(e2, r2, s2);
      (null != o2 ? o2 : d2 || p) ? i(u2, m) : a(c2, n._`[${m}]`);
    }, t.reportExtraError = function(e2, r2 = t.keywordError, n2) {
      const { it: s2 } = e2, { gen: c2, compositeRule: u2, allErrors: d2 } = s2;
      i(c2, l(e2, r2, n2)), u2 || d2 || a(s2, o.default.vErrors);
    }, t.resetErrorsCount = function(e2, t2) {
      e2.assign(o.default.errors, t2), e2.if(n._`${o.default.vErrors} !== null`, () => e2.if(t2, () => e2.assign(n._`${o.default.vErrors}.length`, t2), () => e2.assign(o.default.vErrors, null)));
    }, t.extendErrors = function({ gen: e2, keyword: t2, schemaValue: r2, data: s2, errsCount: i2, it: a2 }) {
      if (void 0 === i2) throw new Error("ajv implementation error");
      const c2 = e2.name("err");
      e2.forRange("i", i2, o.default.errors, (i3) => {
        e2.const(c2, n._`${o.default.vErrors}[${i3}]`), e2.if(n._`${c2}.instancePath === undefined`, () => e2.assign(n._`${c2}.instancePath`, (0, n.strConcat)(o.default.instancePath, a2.errorPath))), e2.assign(n._`${c2}.schemaPath`, n.str`${a2.errSchemaPath}/${t2}`), a2.opts.verbose && (e2.assign(n._`${c2}.schema`, r2), e2.assign(n._`${c2}.data`, s2));
      });
    };
    const c = { keyword: new n.Name("keyword"), schemaPath: new n.Name("schemaPath"), params: new n.Name("params"), propertyName: new n.Name("propertyName"), message: new n.Name("message"), schema: new n.Name("schema"), parentSchema: new n.Name("parentSchema") };
    function l(e2, t2, r2) {
      const { createErrors: s2 } = e2.it;
      return false === s2 ? n._`{}` : (function(e3, t3, r3 = {}) {
        const { gen: s3, it: i2 } = e3, a2 = [u(i2, r3), d(e3, r3)];
        return (function(e4, { params: t4, message: r4 }, s4) {
          const { keyword: i3, data: a3, schemaValue: l2, it: u2 } = e4, { opts: d2, propertyName: p, topSchemaRef: m, schemaPath: h } = u2;
          s4.push([c.keyword, i3], [c.params, "function" == typeof t4 ? t4(e4) : t4 || n._`{}`]), d2.messages && s4.push([c.message, "function" == typeof r4 ? r4(e4) : r4]);
          d2.verbose && s4.push([c.schema, l2], [c.parentSchema, n._`${m}${h}`], [o.default.data, a3]);
          p && s4.push([c.propertyName, p]);
        })(e3, t3, a2), s3.object(...a2);
      })(e2, t2, r2);
    }
    function u({ errorPath: e2 }, { instancePath: t2 }) {
      const r2 = t2 ? n.str`${e2}${(0, s.getErrorPath)(t2, s.Type.Str)}` : e2;
      return [o.default.instancePath, (0, n.strConcat)(o.default.instancePath, r2)];
    }
    function d({ keyword: e2, it: { errSchemaPath: t2 } }, { schemaPath: r2, parentSchema: o2 }) {
      let i2 = o2 ? t2 : n.str`${t2}/${e2}`;
      return r2 && (i2 = n.str`${i2}${(0, s.getErrorPath)(r2, s.Type.Str)}`), [c.schemaPath, i2];
    }
  }