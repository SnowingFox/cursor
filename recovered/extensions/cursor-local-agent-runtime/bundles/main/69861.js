// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 69861 range:2252159..2254662
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69861: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.extendSubschemaMode = t.extendSubschemaData = t.getSubschema = void 0;
    const n = r(95183), o = r(79657);
    t.getSubschema = function(e2, { keyword: t2, schemaProp: r2, schema: s, schemaPath: i, errSchemaPath: a, topSchemaRef: l }) {
      if (void 0 !== t2 && void 0 !== s) throw new Error('both "keyword" and "schema" passed, only one allowed');
      if (void 0 !== t2) {
        const s2 = e2.schema[t2];
        return void 0 === r2 ? { schema: s2, schemaPath: n._`${e2.schemaPath}${(0, n.getProperty)(t2)}`, errSchemaPath: `${e2.errSchemaPath}/${t2}` } : { schema: s2[r2], schemaPath: n._`${e2.schemaPath}${(0, n.getProperty)(t2)}${(0, n.getProperty)(r2)}`, errSchemaPath: `${e2.errSchemaPath}/${t2}/${(0, o.escapeFragment)(r2)}` };
      }
      if (void 0 !== s) {
        if (void 0 === i || void 0 === a || void 0 === l) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        return { schema: s, schemaPath: i, topSchemaRef: l, errSchemaPath: a };
      }
      throw new Error('either "keyword" or "schema" must be passed');
    }, t.extendSubschemaData = function(e2, t2, { dataProp: r2, dataPropType: s, data: i, dataTypes: a, propertyName: l }) {
      if (void 0 !== i && void 0 !== r2) throw new Error('both "data" and "dataProp" passed, only one allowed');
      const { gen: c } = t2;
      if (void 0 !== r2) {
        const { errorPath: i2, dataPathArr: a2, opts: l2 } = t2;
        u(c.let("data", n._`${t2.data}${(0, n.getProperty)(r2)}`, true)), e2.errorPath = n.str`${i2}${(0, o.getErrorPath)(r2, s, l2.jsPropertySyntax)}`, e2.parentDataProperty = n._`${r2}`, e2.dataPathArr = [...a2, e2.parentDataProperty];
      }
      if (void 0 !== i) {
        u(i instanceof n.Name ? i : c.let("data", i, true)), void 0 !== l && (e2.propertyName = l);
      }
      function u(r3) {
        e2.data = r3, e2.dataLevel = t2.dataLevel + 1, e2.dataTypes = [], t2.definedProperties = /* @__PURE__ */ new Set(), e2.parentData = t2.data, e2.dataNames = [...t2.dataNames, r3];
      }
      a && (e2.dataTypes = a);
    }, t.extendSubschemaMode = function(e2, { jtdDiscriminator: t2, jtdMetadata: r2, compositeRule: n2, createErrors: o2, allErrors: s }) {
      void 0 !== n2 && (e2.compositeRule = n2), void 0 !== o2 && (e2.createErrors = o2), void 0 !== s && (e2.allErrors = s), e2.jtdDiscriminator = t2, e2.jtdMetadata = r2;
    };
  }