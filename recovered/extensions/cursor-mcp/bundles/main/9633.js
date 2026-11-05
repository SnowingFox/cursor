// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9633 range:903825..904397
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9633: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = r2(9657), s2 = r2(9244), i2 = { keyword: "const", $data: true, error: { message: "must be equal to constant", params: ({ schemaCode: e3 }) => n2._`{allowedValue: ${e3}}` }, code(e3) {
      const { gen: t3, data: r3, $data: i3, schemaCode: a2, schema: c } = e3;
      i3 || c && "object" == typeof c ? e3.fail$data(n2._`!${(0, o2.useFunc)(t3, s2.default)}(${r3}, ${a2})`) : e3.fail(n2._`${c} !== ${r3}`);
    } };
    t2.default = i2;
  }