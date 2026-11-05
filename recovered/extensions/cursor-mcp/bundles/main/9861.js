// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9861 range:914709..917259
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9861: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.extendSubschemaMode = t2.extendSubschemaData = t2.getSubschema = void 0;
    const n2 = r2(5183), o2 = r2(9657);
    t2.getSubschema = function(e3, { keyword: t3, schemaProp: r3, schema: s2, schemaPath: i2, errSchemaPath: a2, topSchemaRef: c }) {
      if (void 0 !== t3 && void 0 !== s2) throw new Error('both "keyword" and "schema" passed, only one allowed');
      if (void 0 !== t3) {
        const s3 = e3.schema[t3];
        return void 0 === r3 ? { schema: s3, schemaPath: n2._`${e3.schemaPath}${(0, n2.getProperty)(t3)}`, errSchemaPath: `${e3.errSchemaPath}/${t3}` } : { schema: s3[r3], schemaPath: n2._`${e3.schemaPath}${(0, n2.getProperty)(t3)}${(0, n2.getProperty)(r3)}`, errSchemaPath: `${e3.errSchemaPath}/${t3}/${(0, o2.escapeFragment)(r3)}` };
      }
      if (void 0 !== s2) {
        if (void 0 === i2 || void 0 === a2 || void 0 === c) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        return { schema: s2, schemaPath: i2, topSchemaRef: c, errSchemaPath: a2 };
      }
      throw new Error('either "keyword" or "schema" must be passed');
    }, t2.extendSubschemaData = function(e3, t3, { dataProp: r3, dataPropType: s2, data: i2, dataTypes: a2, propertyName: c }) {
      if (void 0 !== i2 && void 0 !== r3) throw new Error('both "data" and "dataProp" passed, only one allowed');
      const { gen: u } = t3;
      if (void 0 !== r3) {
        const { errorPath: i3, dataPathArr: a3, opts: c2 } = t3;
        l(u.let("data", n2._`${t3.data}${(0, n2.getProperty)(r3)}`, true)), e3.errorPath = n2.str`${i3}${(0, o2.getErrorPath)(r3, s2, c2.jsPropertySyntax)}`, e3.parentDataProperty = n2._`${r3}`, e3.dataPathArr = [...a3, e3.parentDataProperty];
      }
      if (void 0 !== i2) {
        l(i2 instanceof n2.Name ? i2 : u.let("data", i2, true)), void 0 !== c && (e3.propertyName = c);
      }
      function l(r4) {
        e3.data = r4, e3.dataLevel = t3.dataLevel + 1, e3.dataTypes = [], t3.definedProperties = /* @__PURE__ */ new Set(), e3.parentData = t3.data, e3.dataNames = [...t3.dataNames, r4];
      }
      a2 && (e3.dataTypes = a2);
    }, t2.extendSubschemaMode = function(e3, { jtdDiscriminator: t3, jtdMetadata: r3, compositeRule: n3, createErrors: o3, allErrors: s2 }) {
      void 0 !== n3 && (e3.compositeRule = n3), void 0 !== o3 && (e3.createErrors = o3), void 0 !== s2 && (e3.allErrors = s2), e3.jtdDiscriminator = t3, e3.jtdMetadata = r3;
    };
  }