// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4493 range:313869..314548
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4493: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = { keyword: "multipleOf", type: "number", schemaType: "number", $data: true, error: { message: ({ schemaCode: e3 }) => n2.str`must be multiple of ${e3}`, params: ({ schemaCode: e3 }) => n2._`{multipleOf: ${e3}}` }, code(e3) {
      const { gen: t3, data: r3, schemaCode: o3, it: s2 } = e3, i2 = s2.opts.multipleOfPrecision, a2 = t3.let("res"), c = i2 ? n2._`Math.abs(Math.round(${a2}) - ${a2}) > 1e-${i2}` : n2._`${a2} !== parseInt(${a2})`;
      e3.fail$data(n2._`(${o3} === 0 || (${a2} = ${r3}/${o3}, ${c}))`);
    } };
    t2.default = o2;
  }