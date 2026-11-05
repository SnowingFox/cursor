// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 0 range:27..969
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
0: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(8255), o2 = r2(9657), s2 = r2(5183), i2 = { keyword: "pattern", type: "string", schemaType: "string", $data: true, error: { message: ({ schemaCode: e3 }) => s2.str`must match pattern "${e3}"`, params: ({ schemaCode: e3 }) => s2._`{pattern: ${e3}}` }, code(e3) {
      const { gen: t3, data: r3, $data: i3, schema: a2, schemaCode: c, it: u } = e3, l = u.opts.unicodeRegExp ? "u" : "";
      if (i3) {
        const { regExp: n3 } = u.opts.code, i4 = "new RegExp" === n3.code ? s2._`new RegExp` : (0, o2.useFunc)(t3, n3), a3 = t3.let("valid");
        t3.try(() => t3.assign(a3, s2._`${i4}(${c}, ${l}).test(${r3})`), () => t3.assign(a3, false)), e3.fail$data(s2._`!${a3}`);
      } else {
        const t4 = (0, n2.usePattern)(e3, a2);
        e3.fail$data(s2._`!${t4}.test(${r3})`);
      }
    } };
    t2.default = i2;
  }