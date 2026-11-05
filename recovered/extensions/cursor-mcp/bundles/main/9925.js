// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9925 range:920198..921498
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9925: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = r2(9657), s2 = r2(9244), i2 = { keyword: "enum", schemaType: "array", $data: true, error: { message: "must be equal to one of the allowed values", params: ({ schemaCode: e3 }) => n2._`{allowedValues: ${e3}}` }, code(e3) {
      const { gen: t3, data: r3, $data: i3, schema: a2, schemaCode: c, it: u } = e3;
      if (!i3 && 0 === a2.length) throw new Error("enum must have non-empty array");
      const l = a2.length >= u.opts.loopEnum;
      let d;
      const p = () => null != d ? d : d = (0, o2.useFunc)(t3, s2.default);
      let f;
      if (l || i3) f = t3.let("valid"), e3.block$data(f, function() {
        t3.assign(f, false), t3.forOf("v", c, (e4) => t3.if(n2._`${p()}(${r3}, ${e4})`, () => t3.assign(f, true).break()));
      });
      else {
        if (!Array.isArray(a2)) throw new Error("ajv implementation error");
        const e4 = t3.const("vSchema", c);
        f = (0, n2.or)(...a2.map((t4, o3) => (function(e5, t5) {
          const o4 = a2[t5];
          return "object" == typeof o4 && null !== o4 ? n2._`${p()}(${r3}, ${e5}[${t5}])` : n2._`${r3} === ${o4}`;
        })(e4, o3)));
      }
      e3.pass(f);
    } };
    t2.default = i2;
  }