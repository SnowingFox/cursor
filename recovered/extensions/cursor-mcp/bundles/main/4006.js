// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4006 range:296630..300584
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4006: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.extendErrors = t2.resetErrorsCount = t2.reportExtraError = t2.reportError = t2.keyword$DataError = t2.keywordError = void 0;
    const n2 = r2(5183), o2 = r2(9657), s2 = r2(4489);
    function i2(e3, t3) {
      const r3 = e3.const("err", t3);
      e3.if(n2._`${s2.default.vErrors} === null`, () => e3.assign(s2.default.vErrors, n2._`[${r3}]`), n2._`${s2.default.vErrors}.push(${r3})`), e3.code(n2._`${s2.default.errors}++`);
    }
    function a2(e3, t3) {
      const { gen: r3, validateName: o3, schemaEnv: s3 } = e3;
      s3.$async ? r3.throw(n2._`new ${e3.ValidationError}(${t3})`) : (r3.assign(n2._`${o3}.errors`, t3), r3.return(false));
    }
    t2.keywordError = { message: ({ keyword: e3 }) => n2.str`must pass "${e3}" keyword validation` }, t2.keyword$DataError = { message: ({ keyword: e3, schemaType: t3 }) => t3 ? n2.str`"${e3}" keyword must be ${t3} ($data)` : n2.str`"${e3}" keyword is invalid ($data)` }, t2.reportError = function(e3, r3 = t2.keywordError, o3, s3) {
      const { it: c2 } = e3, { gen: l2, compositeRule: d2, allErrors: p } = c2, f = u(e3, r3, o3);
      (null != s3 ? s3 : d2 || p) ? i2(l2, f) : a2(c2, n2._`[${f}]`);
    }, t2.reportExtraError = function(e3, r3 = t2.keywordError, n3) {
      const { it: o3 } = e3, { gen: c2, compositeRule: l2, allErrors: d2 } = o3;
      i2(c2, u(e3, r3, n3)), l2 || d2 || a2(o3, s2.default.vErrors);
    }, t2.resetErrorsCount = function(e3, t3) {
      e3.assign(s2.default.errors, t3), e3.if(n2._`${s2.default.vErrors} !== null`, () => e3.if(t3, () => e3.assign(n2._`${s2.default.vErrors}.length`, t3), () => e3.assign(s2.default.vErrors, null)));
    }, t2.extendErrors = function({ gen: e3, keyword: t3, schemaValue: r3, data: o3, errsCount: i3, it: a3 }) {
      if (void 0 === i3) throw new Error("ajv implementation error");
      const c2 = e3.name("err");
      e3.forRange("i", i3, s2.default.errors, (i4) => {
        e3.const(c2, n2._`${s2.default.vErrors}[${i4}]`), e3.if(n2._`${c2}.instancePath === undefined`, () => e3.assign(n2._`${c2}.instancePath`, (0, n2.strConcat)(s2.default.instancePath, a3.errorPath))), e3.assign(n2._`${c2}.schemaPath`, n2.str`${a3.errSchemaPath}/${t3}`), a3.opts.verbose && (e3.assign(n2._`${c2}.schema`, r3), e3.assign(n2._`${c2}.data`, o3));
      });
    };
    const c = { keyword: new n2.Name("keyword"), schemaPath: new n2.Name("schemaPath"), params: new n2.Name("params"), propertyName: new n2.Name("propertyName"), message: new n2.Name("message"), schema: new n2.Name("schema"), parentSchema: new n2.Name("parentSchema") };
    function u(e3, t3, r3) {
      const { createErrors: o3 } = e3.it;
      return false === o3 ? n2._`{}` : (function(e4, t4, r4 = {}) {
        const { gen: o4, it: i3 } = e4, a3 = [l(i3, r4), d(e4, r4)];
        return (function(e5, { params: t5, message: r5 }, o5) {
          const { keyword: i4, data: a4, schemaValue: u2, it: l2 } = e5, { opts: d2, propertyName: p, topSchemaRef: f, schemaPath: h } = l2;
          o5.push([c.keyword, i4], [c.params, "function" == typeof t5 ? t5(e5) : t5 || n2._`{}`]), d2.messages && o5.push([c.message, "function" == typeof r5 ? r5(e5) : r5]);
          d2.verbose && o5.push([c.schema, u2], [c.parentSchema, n2._`${f}${h}`], [s2.default.data, a4]);
          p && o5.push([c.propertyName, p]);
        })(e4, t4, a3), o4.object(...a3);
      })(e3, t3, r3);
    }
    function l({ errorPath: e3 }, { instancePath: t3 }) {
      const r3 = t3 ? n2.str`${e3}${(0, o2.getErrorPath)(t3, o2.Type.Str)}` : e3;
      return [s2.default.instancePath, (0, n2.strConcat)(s2.default.instancePath, r3)];
    }
    function d({ keyword: e3, it: { errSchemaPath: t3 } }, { schemaPath: r3, parentSchema: s3 }) {
      let i3 = s3 ? t3 : n2.str`${t3}/${e3}`;
      return r3 && (i3 = n2.str`${i3}${(0, o2.getErrorPath)(r3, o2.Type.Str)}`), [c.schemaPath, i3];
    }
  }