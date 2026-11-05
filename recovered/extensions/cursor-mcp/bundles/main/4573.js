// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4573 range:316261..317070
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4573: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = r2(9657), s2 = r2(247), i2 = { keyword: ["maxLength", "minLength"], type: "string", schemaType: "number", $data: true, error: { message({ keyword: e3, schemaCode: t3 }) {
      const r3 = "maxLength" === e3 ? "more" : "fewer";
      return n2.str`must NOT have ${r3} than ${t3} characters`;
    }, params: ({ schemaCode: e3 }) => n2._`{limit: ${e3}}` }, code(e3) {
      const { keyword: t3, data: r3, schemaCode: i3, it: a2 } = e3, c = "maxLength" === t3 ? n2.operators.GT : n2.operators.LT, u = false === a2.opts.unicode ? n2._`${r3}.length` : n2._`${(0, o2.useFunc)(e3.gen, s2.default)}(${r3})`;
      e3.fail$data(n2._`${u} ${c} ${i3}`);
    } };
    t2.default = i2;
  }