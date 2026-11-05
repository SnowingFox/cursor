// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8255 range:762182..766336
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8255: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.validateUnion = t2.validateArray = t2.usePattern = t2.callValidateCode = t2.schemaProperties = t2.allSchemaProperties = t2.noPropertyInData = t2.propertyInData = t2.isOwnProperty = t2.hasPropFunc = t2.reportMissingProp = t2.checkMissingProp = t2.checkReportMissingProp = void 0;
    const n2 = r2(5183), o2 = r2(9657), s2 = r2(4489), i2 = r2(9657);
    function a2(e3) {
      return e3.scopeValue("func", { ref: Object.prototype.hasOwnProperty, code: n2._`Object.prototype.hasOwnProperty` });
    }
    function c(e3, t3, r3) {
      return n2._`${a2(e3)}.call(${t3}, ${r3})`;
    }
    function u(e3, t3, r3, o3) {
      const s3 = n2._`${t3}${(0, n2.getProperty)(r3)} === undefined`;
      return o3 ? (0, n2.or)(s3, (0, n2.not)(c(e3, t3, r3))) : s3;
    }
    function l(e3) {
      return e3 ? Object.keys(e3).filter((e4) => "__proto__" !== e4) : [];
    }
    t2.checkReportMissingProp = function(e3, t3) {
      const { gen: r3, data: o3, it: s3 } = e3;
      r3.if(u(r3, o3, t3, s3.opts.ownProperties), () => {
        e3.setParams({ missingProperty: n2._`${t3}` }, true), e3.error();
      });
    }, t2.checkMissingProp = function({ gen: e3, data: t3, it: { opts: r3 } }, o3, s3) {
      return (0, n2.or)(...o3.map((o4) => (0, n2.and)(u(e3, t3, o4, r3.ownProperties), n2._`${s3} = ${o4}`)));
    }, t2.reportMissingProp = function(e3, t3) {
      e3.setParams({ missingProperty: t3 }, true), e3.error();
    }, t2.hasPropFunc = a2, t2.isOwnProperty = c, t2.propertyInData = function(e3, t3, r3, o3) {
      const s3 = n2._`${t3}${(0, n2.getProperty)(r3)} !== undefined`;
      return o3 ? n2._`${s3} && ${c(e3, t3, r3)}` : s3;
    }, t2.noPropertyInData = u, t2.allSchemaProperties = l, t2.schemaProperties = function(e3, t3) {
      return l(t3).filter((r3) => !(0, o2.alwaysValidSchema)(e3, t3[r3]));
    }, t2.callValidateCode = function({ schemaCode: e3, data: t3, it: { gen: r3, topSchemaRef: o3, schemaPath: i3, errorPath: a3 }, it: c2 }, u2, l2, d2) {
      const p = d2 ? n2._`${e3}, ${t3}, ${o3}${i3}` : t3, f = [[s2.default.instancePath, (0, n2.strConcat)(s2.default.instancePath, a3)], [s2.default.parentData, c2.parentData], [s2.default.parentDataProperty, c2.parentDataProperty], [s2.default.rootData, s2.default.rootData]];
      c2.opts.dynamicRef && f.push([s2.default.dynamicAnchors, s2.default.dynamicAnchors]);
      const h = n2._`${p}, ${r3.object(...f)}`;
      return l2 !== n2.nil ? n2._`${u2}.call(${l2}, ${h})` : n2._`${u2}(${h})`;
    };
    const d = n2._`new RegExp`;
    t2.usePattern = function({ gen: e3, it: { opts: t3 } }, r3) {
      const o3 = t3.unicodeRegExp ? "u" : "", { regExp: s3 } = t3.code, a3 = s3(r3, o3);
      return e3.scopeValue("pattern", { key: a3.toString(), ref: a3, code: n2._`${"new RegExp" === s3.code ? d : (0, i2.useFunc)(e3, s3)}(${r3}, ${o3})` });
    }, t2.validateArray = function(e3) {
      const { gen: t3, data: r3, keyword: s3, it: i3 } = e3, a3 = t3.name("valid");
      if (i3.allErrors) {
        const e4 = t3.let("valid", true);
        return c2(() => t3.assign(e4, false)), e4;
      }
      return t3.var(a3, true), c2(() => t3.break()), a3;
      function c2(i4) {
        const c3 = t3.const("len", n2._`${r3}.length`);
        t3.forRange("i", 0, c3, (r4) => {
          e3.subschema({ keyword: s3, dataProp: r4, dataPropType: o2.Type.Num }, a3), t3.if((0, n2.not)(a3), i4);
        });
      }
    }, t2.validateUnion = function(e3) {
      const { gen: t3, schema: r3, keyword: s3, it: i3 } = e3;
      if (!Array.isArray(r3)) throw new Error("ajv implementation error");
      if (r3.some((e4) => (0, o2.alwaysValidSchema)(i3, e4)) && !i3.opts.unevaluated) return;
      const a3 = t3.let("valid", false), c2 = t3.name("_valid");
      t3.block(() => r3.forEach((r4, o3) => {
        const i4 = e3.subschema({ keyword: s3, schemaProp: o3, compositeRule: true }, c2);
        t3.assign(a3, n2._`${a3} || ${c2}`);
        e3.mergeValidEvaluated(i4, c2) || t3.if((0, n2.not)(a3));
      })), e3.result(a3, () => e3.reset(), () => e3.error(true));
    };
  }