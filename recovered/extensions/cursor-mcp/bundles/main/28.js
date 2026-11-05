// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 28 range:13086..14560
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.validateTuple = void 0;
    const n2 = r2(5183), o2 = r2(9657), s2 = r2(8255), i2 = { keyword: "items", type: "array", schemaType: ["object", "array", "boolean"], before: "uniqueItems", code(e3) {
      const { schema: t3, it: r3 } = e3;
      if (Array.isArray(t3)) return a2(e3, "additionalItems", t3);
      r3.items = true, (0, o2.alwaysValidSchema)(r3, t3) || e3.ok((0, s2.validateArray)(e3));
    } };
    function a2(e3, t3, r3 = e3.schema) {
      const { gen: s3, parentSchema: i3, data: a3, keyword: c, it: u } = e3;
      !(function(e4) {
        const { opts: n3, errSchemaPath: s4 } = u, i4 = r3.length, a4 = i4 === e4.minItems && (i4 === e4.maxItems || false === e4[t3]);
        if (n3.strictTuples && !a4) {
          const e5 = `"${c}" is ${i4}-tuple, but minItems or maxItems/${t3} are not specified or different at path "${s4}"`;
          (0, o2.checkStrictMode)(u, e5, n3.strictTuples);
        }
      })(i3), u.opts.unevaluated && r3.length && true !== u.items && (u.items = o2.mergeEvaluated.items(s3, r3.length, u.items));
      const l = s3.name("valid"), d = s3.const("len", n2._`${a3}.length`);
      r3.forEach((t4, r4) => {
        (0, o2.alwaysValidSchema)(u, t4) || (s3.if(n2._`${d} > ${r4}`, () => e3.subschema({ keyword: c, schemaProp: r4, dataProp: r4 }, l)), e3.ok(l));
      });
    }
    t2.validateTuple = a2, t2.default = i2;
  }