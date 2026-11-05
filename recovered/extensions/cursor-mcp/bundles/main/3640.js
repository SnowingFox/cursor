// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3640 range:281851..282556
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3640: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = { keyword: ["maxProperties", "minProperties"], type: "object", schemaType: "number", $data: true, error: { message({ keyword: e3, schemaCode: t3 }) {
      const r3 = "maxProperties" === e3 ? "more" : "fewer";
      return n2.str`must NOT have ${r3} than ${t3} properties`;
    }, params: ({ schemaCode: e3 }) => n2._`{limit: ${e3}}` }, code(e3) {
      const { keyword: t3, data: r3, schemaCode: o3 } = e3, s2 = "maxProperties" === t3 ? n2.operators.GT : n2.operators.LT;
      e3.fail$data(n2._`Object.keys(${r3}).length ${s2} ${o3}`);
    } };
    t2.default = o2;
  }