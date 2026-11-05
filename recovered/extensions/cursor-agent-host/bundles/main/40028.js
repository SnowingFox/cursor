// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 40028 range:7507836..7509291
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
40028: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateTuple = void 0;
    const n = r(95183), s = r(79657), o = r(68255), i = { keyword: "items", type: "array", schemaType: ["object", "array", "boolean"], before: "uniqueItems", code(e2) {
      const { schema: t2, it: r2 } = e2;
      if (Array.isArray(t2)) return a(e2, "additionalItems", t2);
      r2.items = true, (0, s.alwaysValidSchema)(r2, t2) || e2.ok((0, o.validateArray)(e2));
    } };
    function a(e2, t2, r2 = e2.schema) {
      const { gen: o2, parentSchema: i2, data: a2, keyword: c, it: l } = e2;
      !(function(e3) {
        const { opts: n2, errSchemaPath: o3 } = l, i3 = r2.length, a3 = i3 === e3.minItems && (i3 === e3.maxItems || false === e3[t2]);
        if (n2.strictTuples && !a3) {
          const e4 = `"${c}" is ${i3}-tuple, but minItems or maxItems/${t2} are not specified or different at path "${o3}"`;
          (0, s.checkStrictMode)(l, e4, n2.strictTuples);
        }
      })(i2), l.opts.unevaluated && r2.length && true !== l.items && (l.items = s.mergeEvaluated.items(o2, r2.length, l.items));
      const u = o2.name("valid"), d = o2.const("len", n._`${a2}.length`);
      r2.forEach((t3, r3) => {
        (0, s.alwaysValidSchema)(l, t3) || (o2.if(n._`${d} > ${r3}`, () => e2.subschema({ keyword: c, schemaProp: r3, dataProp: r3 }, u)), e2.ok(u));
      });
    }
    t.validateTuple = a, t.default = i;
  }