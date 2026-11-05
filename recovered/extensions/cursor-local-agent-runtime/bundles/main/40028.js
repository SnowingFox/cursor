// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 40028 range:1224826..1226281
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
40028: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateTuple = void 0;
    const n = r(95183), o = r(79657), s = r(68255), i = { keyword: "items", type: "array", schemaType: ["object", "array", "boolean"], before: "uniqueItems", code(e2) {
      const { schema: t2, it: r2 } = e2;
      if (Array.isArray(t2)) return a(e2, "additionalItems", t2);
      r2.items = true, (0, o.alwaysValidSchema)(r2, t2) || e2.ok((0, s.validateArray)(e2));
    } };
    function a(e2, t2, r2 = e2.schema) {
      const { gen: s2, parentSchema: i2, data: a2, keyword: l, it: c } = e2;
      !(function(e3) {
        const { opts: n2, errSchemaPath: s3 } = c, i3 = r2.length, a3 = i3 === e3.minItems && (i3 === e3.maxItems || false === e3[t2]);
        if (n2.strictTuples && !a3) {
          const e4 = `"${l}" is ${i3}-tuple, but minItems or maxItems/${t2} are not specified or different at path "${s3}"`;
          (0, o.checkStrictMode)(c, e4, n2.strictTuples);
        }
      })(i2), c.opts.unevaluated && r2.length && true !== c.items && (c.items = o.mergeEvaluated.items(s2, r2.length, c.items));
      const u = s2.name("valid"), d = s2.const("len", n._`${a2}.length`);
      r2.forEach((t3, r3) => {
        (0, o.alwaysValidSchema)(c, t3) || (s2.if(n._`${d} > ${r3}`, () => e2.subschema({ keyword: l, schemaProp: r3, dataProp: r3 }, u)), e2.ok(u));
      });
    }
    t.validateTuple = a, t.default = i;
  }