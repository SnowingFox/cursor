// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 34006 range:1030424..1034299
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34006: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.extendErrors = t.resetErrorsCount = t.reportExtraError = t.reportError = t.keyword$DataError = t.keywordError = void 0;
    const n = r(95183), o = r(79657), s = r(44489);
    function i(e2, t2) {
      const r2 = e2.const("err", t2);
      e2.if(n._`${s.default.vErrors} === null`, () => e2.assign(s.default.vErrors, n._`[${r2}]`), n._`${s.default.vErrors}.push(${r2})`), e2.code(n._`${s.default.errors}++`);
    }
    function a(e2, t2) {
      const { gen: r2, validateName: o2, schemaEnv: s2 } = e2;
      s2.$async ? r2.throw(n._`new ${e2.ValidationError}(${t2})`) : (r2.assign(n._`${o2}.errors`, t2), r2.return(false));
    }
    t.keywordError = { message: ({ keyword: e2 }) => n.str`must pass "${e2}" keyword validation` }, t.keyword$DataError = { message: ({ keyword: e2, schemaType: t2 }) => t2 ? n.str`"${e2}" keyword must be ${t2} ($data)` : n.str`"${e2}" keyword is invalid ($data)` }, t.reportError = function(e2, r2 = t.keywordError, o2, s2) {
      const { it: l2 } = e2, { gen: u2, compositeRule: d2, allErrors: p } = l2, h = c(e2, r2, o2);
      (null != s2 ? s2 : d2 || p) ? i(u2, h) : a(l2, n._`[${h}]`);
    }, t.reportExtraError = function(e2, r2 = t.keywordError, n2) {
      const { it: o2 } = e2, { gen: l2, compositeRule: u2, allErrors: d2 } = o2;
      i(l2, c(e2, r2, n2)), u2 || d2 || a(o2, s.default.vErrors);
    }, t.resetErrorsCount = function(e2, t2) {
      e2.assign(s.default.errors, t2), e2.if(n._`${s.default.vErrors} !== null`, () => e2.if(t2, () => e2.assign(n._`${s.default.vErrors}.length`, t2), () => e2.assign(s.default.vErrors, null)));
    }, t.extendErrors = function({ gen: e2, keyword: t2, schemaValue: r2, data: o2, errsCount: i2, it: a2 }) {
      if (void 0 === i2) throw new Error("ajv implementation error");
      const l2 = e2.name("err");
      e2.forRange("i", i2, s.default.errors, (i3) => {
        e2.const(l2, n._`${s.default.vErrors}[${i3}]`), e2.if(n._`${l2}.instancePath === undefined`, () => e2.assign(n._`${l2}.instancePath`, (0, n.strConcat)(s.default.instancePath, a2.errorPath))), e2.assign(n._`${l2}.schemaPath`, n.str`${a2.errSchemaPath}/${t2}`), a2.opts.verbose && (e2.assign(n._`${l2}.schema`, r2), e2.assign(n._`${l2}.data`, o2));
      });
    };
    const l = { keyword: new n.Name("keyword"), schemaPath: new n.Name("schemaPath"), params: new n.Name("params"), propertyName: new n.Name("propertyName"), message: new n.Name("message"), schema: new n.Name("schema"), parentSchema: new n.Name("parentSchema") };
    function c(e2, t2, r2) {
      const { createErrors: o2 } = e2.it;
      return false === o2 ? n._`{}` : (function(e3, t3, r3 = {}) {
        const { gen: o3, it: i2 } = e3, a2 = [u(i2, r3), d(e3, r3)];
        return (function(e4, { params: t4, message: r4 }, o4) {
          const { keyword: i3, data: a3, schemaValue: c2, it: u2 } = e4, { opts: d2, propertyName: p, topSchemaRef: h, schemaPath: m } = u2;
          o4.push([l.keyword, i3], [l.params, "function" == typeof t4 ? t4(e4) : t4 || n._`{}`]), d2.messages && o4.push([l.message, "function" == typeof r4 ? r4(e4) : r4]);
          d2.verbose && o4.push([l.schema, c2], [l.parentSchema, n._`${h}${m}`], [s.default.data, a3]);
          p && o4.push([l.propertyName, p]);
        })(e3, t3, a2), o3.object(...a2);
      })(e2, t2, r2);
    }
    function u({ errorPath: e2 }, { instancePath: t2 }) {
      const r2 = t2 ? n.str`${e2}${(0, o.getErrorPath)(t2, o.Type.Str)}` : e2;
      return [s.default.instancePath, (0, n.strConcat)(s.default.instancePath, r2)];
    }
    function d({ keyword: e2, it: { errSchemaPath: t2 } }, { schemaPath: r2, parentSchema: s2 }) {
      let i2 = s2 ? t2 : n.str`${t2}/${e2}`;
      return r2 && (i2 = n.str`${i2}${(0, o.getErrorPath)(r2, o.Type.Str)}`), [l.schemaPath, i2];
    }
  }