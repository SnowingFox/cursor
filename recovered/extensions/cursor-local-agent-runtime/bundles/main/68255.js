// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 68255 range:2082760..2086841
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68255: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateUnion = t.validateArray = t.usePattern = t.callValidateCode = t.schemaProperties = t.allSchemaProperties = t.noPropertyInData = t.propertyInData = t.isOwnProperty = t.hasPropFunc = t.reportMissingProp = t.checkMissingProp = t.checkReportMissingProp = void 0;
    const n = r(95183), o = r(79657), s = r(44489), i = r(79657);
    function a(e2) {
      return e2.scopeValue("func", { ref: Object.prototype.hasOwnProperty, code: n._`Object.prototype.hasOwnProperty` });
    }
    function l(e2, t2, r2) {
      return n._`${a(e2)}.call(${t2}, ${r2})`;
    }
    function c(e2, t2, r2, o2) {
      const s2 = n._`${t2}${(0, n.getProperty)(r2)} === undefined`;
      return o2 ? (0, n.or)(s2, (0, n.not)(l(e2, t2, r2))) : s2;
    }
    function u(e2) {
      return e2 ? Object.keys(e2).filter((e3) => "__proto__" !== e3) : [];
    }
    t.checkReportMissingProp = function(e2, t2) {
      const { gen: r2, data: o2, it: s2 } = e2;
      r2.if(c(r2, o2, t2, s2.opts.ownProperties), () => {
        e2.setParams({ missingProperty: n._`${t2}` }, true), e2.error();
      });
    }, t.checkMissingProp = function({ gen: e2, data: t2, it: { opts: r2 } }, o2, s2) {
      return (0, n.or)(...o2.map((o3) => (0, n.and)(c(e2, t2, o3, r2.ownProperties), n._`${s2} = ${o3}`)));
    }, t.reportMissingProp = function(e2, t2) {
      e2.setParams({ missingProperty: t2 }, true), e2.error();
    }, t.hasPropFunc = a, t.isOwnProperty = l, t.propertyInData = function(e2, t2, r2, o2) {
      const s2 = n._`${t2}${(0, n.getProperty)(r2)} !== undefined`;
      return o2 ? n._`${s2} && ${l(e2, t2, r2)}` : s2;
    }, t.noPropertyInData = c, t.allSchemaProperties = u, t.schemaProperties = function(e2, t2) {
      return u(t2).filter((r2) => !(0, o.alwaysValidSchema)(e2, t2[r2]));
    }, t.callValidateCode = function({ schemaCode: e2, data: t2, it: { gen: r2, topSchemaRef: o2, schemaPath: i2, errorPath: a2 }, it: l2 }, c2, u2, d2) {
      const p = d2 ? n._`${e2}, ${t2}, ${o2}${i2}` : t2, h = [[s.default.instancePath, (0, n.strConcat)(s.default.instancePath, a2)], [s.default.parentData, l2.parentData], [s.default.parentDataProperty, l2.parentDataProperty], [s.default.rootData, s.default.rootData]];
      l2.opts.dynamicRef && h.push([s.default.dynamicAnchors, s.default.dynamicAnchors]);
      const m = n._`${p}, ${r2.object(...h)}`;
      return u2 !== n.nil ? n._`${c2}.call(${u2}, ${m})` : n._`${c2}(${m})`;
    };
    const d = n._`new RegExp`;
    t.usePattern = function({ gen: e2, it: { opts: t2 } }, r2) {
      const o2 = t2.unicodeRegExp ? "u" : "", { regExp: s2 } = t2.code, a2 = s2(r2, o2);
      return e2.scopeValue("pattern", { key: a2.toString(), ref: a2, code: n._`${"new RegExp" === s2.code ? d : (0, i.useFunc)(e2, s2)}(${r2}, ${o2})` });
    }, t.validateArray = function(e2) {
      const { gen: t2, data: r2, keyword: s2, it: i2 } = e2, a2 = t2.name("valid");
      if (i2.allErrors) {
        const e3 = t2.let("valid", true);
        return l2(() => t2.assign(e3, false)), e3;
      }
      return t2.var(a2, true), l2(() => t2.break()), a2;
      function l2(i3) {
        const l3 = t2.const("len", n._`${r2}.length`);
        t2.forRange("i", 0, l3, (r3) => {
          e2.subschema({ keyword: s2, dataProp: r3, dataPropType: o.Type.Num }, a2), t2.if((0, n.not)(a2), i3);
        });
      }
    }, t.validateUnion = function(e2) {
      const { gen: t2, schema: r2, keyword: s2, it: i2 } = e2;
      if (!Array.isArray(r2)) throw new Error("ajv implementation error");
      if (r2.some((e3) => (0, o.alwaysValidSchema)(i2, e3)) && !i2.opts.unevaluated) return;
      const a2 = t2.let("valid", false), l2 = t2.name("_valid");
      t2.block(() => r2.forEach((r3, o2) => {
        const i3 = e2.subschema({ keyword: s2, schemaProp: o2, compositeRule: true }, l2);
        t2.assign(a2, n._`${a2} || ${l2}`);
        e2.mergeValidEvaluated(i3, l2) || t2.if((0, n.not)(a2));
      })), e2.result(a2, () => e2.reset(), () => e2.error(true));
    };
  }