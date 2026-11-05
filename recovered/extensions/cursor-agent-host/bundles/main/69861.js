// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 69861 range:10909485..10911988
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69861: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.extendSubschemaMode = t.extendSubschemaData = t.getSubschema = void 0;
    const n = r(95183), s = r(79657);
    t.getSubschema = function(e2, { keyword: t2, schemaProp: r2, schema: o, schemaPath: i, errSchemaPath: a, topSchemaRef: c }) {
      if (void 0 !== t2 && void 0 !== o) throw new Error('both "keyword" and "schema" passed, only one allowed');
      if (void 0 !== t2) {
        const o2 = e2.schema[t2];
        return void 0 === r2 ? { schema: o2, schemaPath: n._`${e2.schemaPath}${(0, n.getProperty)(t2)}`, errSchemaPath: `${e2.errSchemaPath}/${t2}` } : { schema: o2[r2], schemaPath: n._`${e2.schemaPath}${(0, n.getProperty)(t2)}${(0, n.getProperty)(r2)}`, errSchemaPath: `${e2.errSchemaPath}/${t2}/${(0, s.escapeFragment)(r2)}` };
      }
      if (void 0 !== o) {
        if (void 0 === i || void 0 === a || void 0 === c) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        return { schema: o, schemaPath: i, topSchemaRef: c, errSchemaPath: a };
      }
      throw new Error('either "keyword" or "schema" must be passed');
    }, t.extendSubschemaData = function(e2, t2, { dataProp: r2, dataPropType: o, data: i, dataTypes: a, propertyName: c }) {
      if (void 0 !== i && void 0 !== r2) throw new Error('both "data" and "dataProp" passed, only one allowed');
      const { gen: l } = t2;
      if (void 0 !== r2) {
        const { errorPath: i2, dataPathArr: a2, opts: c2 } = t2;
        u(l.let("data", n._`${t2.data}${(0, n.getProperty)(r2)}`, true)), e2.errorPath = n.str`${i2}${(0, s.getErrorPath)(r2, o, c2.jsPropertySyntax)}`, e2.parentDataProperty = n._`${r2}`, e2.dataPathArr = [...a2, e2.parentDataProperty];
      }
      if (void 0 !== i) {
        u(i instanceof n.Name ? i : l.let("data", i, true)), void 0 !== c && (e2.propertyName = c);
      }
      function u(r3) {
        e2.data = r3, e2.dataLevel = t2.dataLevel + 1, e2.dataTypes = [], t2.definedProperties = /* @__PURE__ */ new Set(), e2.parentData = t2.data, e2.dataNames = [...t2.dataNames, r3];
      }
      a && (e2.dataTypes = a);
    }, t.extendSubschemaMode = function(e2, { jtdDiscriminator: t2, jtdMetadata: r2, compositeRule: n2, createErrors: s2, allErrors: o }) {
      void 0 !== n2 && (e2.compositeRule = n2), void 0 !== s2 && (e2.createErrors = s2), void 0 !== o && (e2.allErrors = o), e2.jtdDiscriminator = t2, e2.jtdMetadata = r2;
    };
  }