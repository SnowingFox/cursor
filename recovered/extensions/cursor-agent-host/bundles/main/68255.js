// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 68255 range:10621070..10625151
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68255: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateUnion = t.validateArray = t.usePattern = t.callValidateCode = t.schemaProperties = t.allSchemaProperties = t.noPropertyInData = t.propertyInData = t.isOwnProperty = t.hasPropFunc = t.reportMissingProp = t.checkMissingProp = t.checkReportMissingProp = void 0;
    const n = r(95183), s = r(79657), o = r(44489), i = r(79657);
    function a(e2) {
      return e2.scopeValue("func", { ref: Object.prototype.hasOwnProperty, code: n._`Object.prototype.hasOwnProperty` });
    }
    function c(e2, t2, r2) {
      return n._`${a(e2)}.call(${t2}, ${r2})`;
    }
    function l(e2, t2, r2, s2) {
      const o2 = n._`${t2}${(0, n.getProperty)(r2)} === undefined`;
      return s2 ? (0, n.or)(o2, (0, n.not)(c(e2, t2, r2))) : o2;
    }
    function u(e2) {
      return e2 ? Object.keys(e2).filter((e3) => "__proto__" !== e3) : [];
    }
    t.checkReportMissingProp = function(e2, t2) {
      const { gen: r2, data: s2, it: o2 } = e2;
      r2.if(l(r2, s2, t2, o2.opts.ownProperties), () => {
        e2.setParams({ missingProperty: n._`${t2}` }, true), e2.error();
      });
    }, t.checkMissingProp = function({ gen: e2, data: t2, it: { opts: r2 } }, s2, o2) {
      return (0, n.or)(...s2.map((s3) => (0, n.and)(l(e2, t2, s3, r2.ownProperties), n._`${o2} = ${s3}`)));
    }, t.reportMissingProp = function(e2, t2) {
      e2.setParams({ missingProperty: t2 }, true), e2.error();
    }, t.hasPropFunc = a, t.isOwnProperty = c, t.propertyInData = function(e2, t2, r2, s2) {
      const o2 = n._`${t2}${(0, n.getProperty)(r2)} !== undefined`;
      return s2 ? n._`${o2} && ${c(e2, t2, r2)}` : o2;
    }, t.noPropertyInData = l, t.allSchemaProperties = u, t.schemaProperties = function(e2, t2) {
      return u(t2).filter((r2) => !(0, s.alwaysValidSchema)(e2, t2[r2]));
    }, t.callValidateCode = function({ schemaCode: e2, data: t2, it: { gen: r2, topSchemaRef: s2, schemaPath: i2, errorPath: a2 }, it: c2 }, l2, u2, d2) {
      const p = d2 ? n._`${e2}, ${t2}, ${s2}${i2}` : t2, m = [[o.default.instancePath, (0, n.strConcat)(o.default.instancePath, a2)], [o.default.parentData, c2.parentData], [o.default.parentDataProperty, c2.parentDataProperty], [o.default.rootData, o.default.rootData]];
      c2.opts.dynamicRef && m.push([o.default.dynamicAnchors, o.default.dynamicAnchors]);
      const h = n._`${p}, ${r2.object(...m)}`;
      return u2 !== n.nil ? n._`${l2}.call(${u2}, ${h})` : n._`${l2}(${h})`;
    };
    const d = n._`new RegExp`;
    t.usePattern = function({ gen: e2, it: { opts: t2 } }, r2) {
      const s2 = t2.unicodeRegExp ? "u" : "", { regExp: o2 } = t2.code, a2 = o2(r2, s2);
      return e2.scopeValue("pattern", { key: a2.toString(), ref: a2, code: n._`${"new RegExp" === o2.code ? d : (0, i.useFunc)(e2, o2)}(${r2}, ${s2})` });
    }, t.validateArray = function(e2) {
      const { gen: t2, data: r2, keyword: o2, it: i2 } = e2, a2 = t2.name("valid");
      if (i2.allErrors) {
        const e3 = t2.let("valid", true);
        return c2(() => t2.assign(e3, false)), e3;
      }
      return t2.var(a2, true), c2(() => t2.break()), a2;
      function c2(i3) {
        const c3 = t2.const("len", n._`${r2}.length`);
        t2.forRange("i", 0, c3, (r3) => {
          e2.subschema({ keyword: o2, dataProp: r3, dataPropType: s.Type.Num }, a2), t2.if((0, n.not)(a2), i3);
        });
      }
    }, t.validateUnion = function(e2) {
      const { gen: t2, schema: r2, keyword: o2, it: i2 } = e2;
      if (!Array.isArray(r2)) throw new Error("ajv implementation error");
      if (r2.some((e3) => (0, s.alwaysValidSchema)(i2, e3)) && !i2.opts.unevaluated) return;
      const a2 = t2.let("valid", false), c2 = t2.name("_valid");
      t2.block(() => r2.forEach((r3, s2) => {
        const i3 = e2.subschema({ keyword: o2, schemaProp: s2, compositeRule: true }, c2);
        t2.assign(a2, n._`${a2} || ${c2}`);
        e2.mergeValidEvaluated(i3, c2) || t2.if((0, n.not)(a2));
      })), e2.result(a2, () => e2.reset(), () => e2.error(true));
    };
  }